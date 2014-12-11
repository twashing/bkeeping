(ns bkeeping
  (:require [ajax.core :refer [GET POST]]
            [goog.dom :as gdom]))


(defn console-log [message]
  (.log js/console message))

(defn verifyAssertion [assertion]
  (console-log (str "verifyAssertion CALLED / assertion[" assertion "]")))

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
