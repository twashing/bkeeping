(ns bkeeping.core.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.util.response :as ring-resp]))

(defroutes app-routes

  (GET "/" []

       (-> (ring-resp/response (slurp (io/resource "public/index.html")))
           (ring-resp/content-type "text/html")))

  (route/files "/")
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
