(ns bkeeping.component.server
  (:require  [taoensso.timbre :as timbre]
             [hara.component :as hco]
             [bkeeping.handler :as hdl]))


(defrecord Server []

  Object
  (toString [sv]
    (str "#sv" (into {} sv)))

  hco/IComponent
  (-start [sv]

    (timbre/trace "Server.start CALLED > system[" sv "]")
    (let [serv (hdl/start-http-server!)]
      (assoc sv :server serv)))

  (-stop [sv]
    (timbre/trace "Server.stop CALLED > system[" sv "]")
    (dissoc sv :server)))

(defmethod print-method Server
  [v w]
  (.write w (str v)))
