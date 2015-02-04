(ns bkeeping
  (:require [goog.events :as events]
            [goog.dom :as gdom]
            [util :as ul])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e] (on-complete e xhr)))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))

(defn basicHandler [handlefn e xhr]

  (let [res (.getResponseText xhr)
        status (.getStatus xhr)]

    (ul/console-log (str "basicHandler response: " res))

    (if (= 200 status)
      (do
        (ul/console-log (str "XMLHttpRequest SUCCESS: " res))
        (handlefn e xhr))
      (do
        (ul/console-log (str "XMLHttpRequest ERROR: " res))
        (.logout navigator.id)))))
