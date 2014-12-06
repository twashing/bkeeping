(ns bkeeping.core.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.util.response :as ring-resp]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [cheshire.core :as chesr]))

(defroutes app-routes

  (GET "/" []

       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (POST "/verify-assertion" [assertion]

       (let [audience (str (env :host) ":3000")  ;;"https://example.com:443"
             response (client/post "https://verifier.login.persona.org/verify"
                                   {:form-params {:assertion assertion
                                                  :audience audience}})]

         ;; TODO - on success
         ;; add-user-ifnil
         ;; set a session cookie
         (-> (ring-resp/response (chesr/generate-string response))
             (ring-resp/content-type "application/json"))))

  (route/files "/")
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
