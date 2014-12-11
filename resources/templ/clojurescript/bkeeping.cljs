(ns bkeeping
  (:require [ajax.core :refer [GET POST]]
            [goog.dom :as gdom]))

(defn ^:export greet [n]
  (str "Hello " n))

(defn console-log [message]
  (.log js/console message))

(defn verifyAssertion [assertion]
  (console-log (str "verifyAssertion CALLED / assertion[" assertion "]")))

(defn signoutUser []
  (console-log "signoutUser CALLED"))

(defn on-click-handler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout signoutUser}))))

(defn start []
  (let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) on-click-handler)))

(set! (.-onload js/window) start)
