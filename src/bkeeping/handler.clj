(ns bkeeping.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.session :refer :all]
            [ring.middleware.session.cookie :refer :all]
            [ring.util.response :as ring-resp]
            [slingshot.slingshot :refer [throw+ try+]]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [noisesmith.groundhog :as gh]
            [clj-http.client :as client]
            [cheshire.core :as chesr]

            [bkell.bkell :as bkell]
            [bkell.domain.user :as bku]))

#_(defroutes app-routes

  (GET "/" []
       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (route/resources "/")
  (route/not-found "Not Found"))

#_(def app
  (-> app-routes
      handler/site))

(defn add-user-ifnil [username]

  (let [ds (-> bkell/system :spittoon :db)
        uresult (try+ (bku/add-user ds username "CA" "CDN")
                      (catch AssertionError e &throw-context))
        _ (if (:stack-trace uresult)
            (timbre/debug "FAIL: user [" username "] already exists")
            (timbre/debug "SUCCESS: adding user [" username "]"))]

    uresult))

#_(defn start-weasel [ip]
 (cemerick.piggieback/cljs-repl
   :repl-env (weasel.repl.websocket/repl-env
              :ip ip :port 9001)))

(defn gen-app []

  (bkell/start)
  #_(start-weasel "172.28.128.4")
  (defroutes app-routes

    (GET "/" []

         (-> (ring-resp/response (slurp (io/resource "public/index.html")))
             (ring-resp/content-type "text/html")))

    (POST "/verify-assertion" [session :as req]

          (timbre/debug "verify-assertion CALLED / session [" session "] / req [" req "]")
          (let [audience (str (if (env :host) (env :host) "http://localhost")
                              ":3000")
                body (read-string (slurp (:body req)))
                assertion (:assertion body)
                response (client/post "https://verifier.login.persona.org/verify"
                                      {:form-params {:assertion assertion
                                                     :audience audience}})
                parsed-body (chesr/parse-string (-> response :body))
                response-status (parsed-body "status")
                response-email (parsed-body "email")
                session (if (nil? session) {} session)]

            (timbre/debug "... sanity / response-body[" parsed-body
                          "] / response-status[" response-status
                          "] / response-email[" response-email "]")
            (timbre/debug "... sanity / (str response) [" (str response) "]")

            (if (= "okay" response-status)
              (do
                (add-user-ifnil response-email)
                (-> (ring-resp/response (str response))
                    (ring-resp/content-type "application/edn")
                    (assoc :session session)))
              (-> (ring-resp/response (str {:body {:status response-status}}))
                  (ring-resp/status 401)
                  (ring-resp/content-type "application/edn")))))

    (route/files "/")
    (route/resources "/")
    (route/not-found "Not Found")))

(def app
  (-> (gen-app)
      handler/site
      (wrap-session {:cookie-attrs {:max-age 3600}
                     :store (cookie-store {:key "a 16-byte secret"})})
      #_(wrap-resource "public")
      #_(wrap-file-info)
      gh/groundhog))
