(ns bkeeping
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn console-log [message]
  (.log js/console message))


(defn transitionAccounts []
  (let [as (gdom/getElement "accounts")]
    (set! (.-selected as)
          (+ 1 (.-selected as)))))

(defn transitionEntries []
  (let [es (gdom/getElement "entries")]
    (set! (.-selected es)
          (+ 1 (.-selected es)))))

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

(defn basicHandler [res]

  (if (= 200 (:status res))
    (do
      (console-log (str "XMLHttpRequest SUCCESS: " res))
      (.reload window.location))
    (do
      (console-log (str "XMLHttpRequest ERROR: " res))
      (.logout navigator.id))))

(defn verifyAssertion [assertion]

  (console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete basicHandler}))

(defn signoutUser []
  (console-log "signoutUser CALLED")

  (edn-xhr
   {:method :get
    :url "/signout"
    :on-complete basicHandler}))


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
