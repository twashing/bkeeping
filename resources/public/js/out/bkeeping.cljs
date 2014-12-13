(ns bkeeping
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn console-log [message]
  (.log js/console message))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))

(defn simpleXhrSentinel [xhr]
  (fn []
    (if (= 4 (.-readyState xhr))
      (if (= 200 (.-status xhr))
        (console-log (str "XMLHttpRequest SUCCESS: " (.-status xhr)))
        (console-log (str "XMLHttpRequest ERROR: " (.-status xhr)))))))


(defn verifyAssertion-XMLHttpRequest [assertion]

  (console-log (str "verifyAssertion CALLED / assertion: " assertion))

  (let [xml-http-request #(js/XMLHttpRequest.)
        xhr (xml-http-request)
        param  (str "assertion=" assertion)]

    (.open xhr "POST" "/verify-assertion" true)

    (.setRequestHeader xhr ("Content-type", "application/x-www-form-urlencoded"))
    (.setRequestHeader xhr ("Content-length", (.length param)))
    (.setRequestHeader xhr ("Connection", "close"))
    (.send xhr param)

    (set! (.-onreadystatechange xhr)
          (simpleXhrSentinel xhr))))

(defn verifyAssertion [assertion]

  (console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete
    (fn [res]
      (console-log (str "server response:" res)))}))

(defn signoutUser []
  (console-log "signoutUser CALLED"))

(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout signoutUser}))
    (.request navigatorId)))

(defn start []
  (let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(set! (.-onload js/window) start)
