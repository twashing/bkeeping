(ns bkeeping.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :refer :all]
            [ring.util.response :as ring-resp]
            [ring.middleware.session-timeout :as timeout]
            [slingshot.slingshot :refer [throw+ try+]]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [noisesmith.groundhog :as gh]
            [clj-http.client :as client]
            [cheshire.core :as chesr]
            [taoensso.sente :as sente]
            [org.httpkit.server :as hkit]
            [overtone.at-at :as atat]
            [bkell.bkell :as bkell]
            [bkell.domain.user :as bku]))

;; SENTE
(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {} #_{:user-id-fn #(java.util.UUID/randomUUID)})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )


(defn broadcast-toclients [msg]
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid msg)))

(defn broadcast-simple-toclients [msg]

  (timbre/debug (str "sanity check: broadcast-simple-toclients : " msg))
  (broadcast-toclients [:server/default msg]))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]

    (timbre/debug (str "default event: " event))
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  #_(timbre/debug (str "Event: " event))
  (event-msg-handler ev-msg))


(defonce router_ (atom nil))

(defn stop-router! []
  (when-let [stop-f @router_] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))


(defn add-user-ifnil [username]

  (let [ds (-> bkell/system :spittoon :db)
        uresult (try+ (bku/add-user ds username "CA" "CDN")
                      (catch AssertionError e &throw-context))
        _ (if (:stack-trace uresult)
            (timbre/debug "NIL: user [" username "] already exists")
            (timbre/debug "SUCCESS: adding user [" username "]"))]

    uresult))

(defn gen-app []

  (bkell/start)
  (start-router!)
  (defroutes app-routes

    ;; SENTE
    (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
    (POST "/chsk" req (ring-ajax-post                req))

    (GET "/" [:as req]

         (-> (ring-resp/response (slurp (io/resource "public/index.html")))
             (ring-resp/content-type "text/html")))

    (GET "/landing" [:as req]

         (timbre/debug (str "/landing req[" req "]"))
         (-> (ring-resp/response (slurp (io/resource "public/landing.html")))
             (ring-resp/content-type "text/html")
             #_(assoc :session {:fu :bar})))

    (POST "/verify-assertion" [:as req]

          (let [session (:session req)

                ;; _ (timbre/debug "verify-assertion CALLED / session [" session "] / req [" req "]")

                audience (str (if (env :host) (env :host) "http://localhost")
                              ":3000")
                body (read-string (slurp (:body req)))
                assertion (:assertion body)
                response (client/post "https://verifier.login.persona.org/verify"
                                      {:form-params {:assertion assertion
                                                     :audience "http://172.28.128.4:3000"}})
                parsed-body (chesr/parse-string (-> response :body))
                response-status (parsed-body "status")
                response-email (parsed-body "email")
                session (if (nil? session) {} session)]

            (timbre/debug "FINAL response... " (-> (ring-resp/response response)
                                                   (ring-resp/content-type "application/edn")
                                                   (assoc :session session)))

            (if (= "okay" response-status)
              (do
                (add-user-ifnil response-email)
                (-> (ring-resp/response response)
                    (ring-resp/content-type "application/edn")))
              (-> (ring-resp/response (str {:body {:status response-status}}))
                  (ring-resp/status 401)
                  (ring-resp/content-type "application/edn")))))

    (GET "/session-status" [:as req]

         (timbre/debug (str "/session-status request[" (:session req) "]"))
         (-> (ring-resp/response (str (:session req)))
             (ring-resp/content-type "text/plain")))

    (route/files "/")
    (route/resources "/")
    (route/not-found "Not Found")))


(defn seconds-to-milliseconds [inp]
  (* inp 1000))

(defn minutes-to-milliseconds [inp]
  (* 60 (seconds-to-milliseconds inp)))

(defn- current-time []
  (quot (System/currentTimeMillis) 1000))


(def my-pool nil)

(defn reset-websocket-timer! [timeout]

  (timbre/debug (str "sanity check: reset-websocket-timer!: " timeout))

  (if (nil? my-pool)
    (def my-pool (atat/mk-pool))
    (atat/stop-and-reset-pool! my-pool))

  (atat/after timeout
              #(broadcast-simple-toclients "session has timed out")
              my-pool))

(defn timeout-middleware [handler {:keys [timeout timeout-response] :or {timeout (minutes-to-milliseconds 10)}}]

  (fn [request]

    (let [session (:session request)
          end-time (::idle-timeout session)
          uri (:uri request)]

      (timbre/debug "...uri[" uri "] / request[" request "]")

      (if (not (= uri "/landing"))

          (handler request)

          ;; if we're dealing with /landing
          (if (nil? session)

            ;; if there's no session
            (assoc timeout-response :session nil)

            (do

              (timbre/debug "")
              (timbre/debug (str "uri... " uri))
              (timbre/debug (str "1... " end-time))
              (timbre/debug (str "2... " (current-time)))
              (timbre/debug (str "3... " (and end-time (< end-time (current-time)))))

              (if (and end-time (< end-time (current-time)))

                ;; if we've timed out
                (assoc timeout-response :session nil)

                (let [response (handler request)
                      end-time (+ (current-time) timeout)
                      session  (-> (:session response session)
                                   (assoc ::idle-timeout end-time))]

                  #_(reset-websocket-timer! timeout)
                  (assoc response :session session)))))))))

(def app
  (-> (gen-app)
      (timeout-middleware
       {:timeout (seconds-to-milliseconds 10)
        :timeout-response (ring-resp/redirect "/")})
      handler/site
      (session/wrap-session {:cookie-attrs {:max-age 3600}
                             :store (cookie-store {:key "a 16-byte secret"})})
      ))


(defonce http-server_ (atom nil))

(defn stop-http-server!
  ([] (stop-http-server! nil))
  ([satom]
   (let [stop-f (if-not (nil? satom)
                  @satom
                  @http-server_)]
     (if-not (nil? stop-f)
       (stop-f :timeout 100)))))

(defn start-http-server! []
  (stop-http-server!)
  (let [s   (hkit/run-server app {:ip "172.28.128.4"
                                  :port 3000})
        uri (format "http://172.28.128.4:%s/" (:local-port (meta s)))]
    (reset! http-server_ s)
    (timbre/debug "Http-kit server is running at `%s`" uri)
    http-server_))
