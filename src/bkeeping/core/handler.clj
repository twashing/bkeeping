(ns bkeeping.core.handler
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.session :refer :all]
            [ring.middleware.session.cookie :refer :all]
            [ring.util.response :as ring-resp]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [cheshire.core :as chesr]
            ;;[spyscope.core :as spy]
            [slingshot.slingshot :refer [throw+ try+]]
            [taoensso.timbre :as timbre]
            [noisesmith.groundhog :as gh]
            [bkell.bkell :as bkell]
            [bkell.domain.user :as bku]))

(defn add-user-ifnil [username]

  (let [ds (-> bkell/system :spittoon :db)
        uresult (try+ (bku/add-user ds username "CA" "CDN")
                      (catch AssertionError e &throw-context))
        _ (if (:stack-trace uresult)
            (timbre/debug "FAIL: user [" username "] already exists")
            (timbre/debug "SUCCESS: adding user [" username "]"))]

    uresult))

(defn gen-app []

  (bkell/start)
  (defroutes app-routes

    (GET "/" []

         (-> (ring-resp/response (slurp (io/resource "public/index.html")))
             (ring-resp/content-type "text/html")))

    (POST "/verify-assertion" [session :as req]

          (timbre/debug "verify-assertion CALLED / session [" session "] / req [" req "]")
          (clojure.pprint/pprint req)
          (clojure.pprint/pprint (type (:body req)))

          (let [audience (str (if (env :host) (env :host) "http://localhost")
                              ":3000")
                body (read-string (slurp (:body req)))
                assertion (:assertion body)

                _ (timbre/debug (str "... assertion: " assertion))
                _ (timbre/debug (str "... audience: " audience))
                response (client/post "https://verifier.login.persona.org/verify"
                                      {:form-params {:assertion assertion
                                                     :audience audience}})

                _ (timbre/debug (str "... response: " response))
                parsed-body (chesr/parse-string (-> response :body))
                response-status (parsed-body "status")
                response-email (parsed-body "email")
                session (if (nil? session) {} session)]

            (timbre/debug "... sanity / response-body[" parsed-body
                          "] / response-status[" response-status
                          "] / response-email[" response-email "]")
            (if (= "okay" response-status)
              (do
                (add-user-ifnil response-email)
                (-> (ring-resp/response (chesr/generate-string response))
                    (ring-resp/content-type "application/json")
                    (assoc :session session)))
              (-> (ring-resp/response (chesr/generate-string {:body {:status response-status}}))
                  (ring-resp/status 401)
                  (ring-resp/content-type "application/json")))))

    (route/files "/")
    (route/resources "/")
    (route/not-found "Not Found")))

(def app
  (-> (gen-app)
      (handler/site)
      (wrap-session {:cookie-attrs {:max-age 3600}
                     :store (cookie-store {:key "a 16-byte secret"})})
      (gh/groundhog)))
