(ns landing
  (:require [goog.dom :as gdom]
            [bkeeping :as bk]))


(defn ^:export transitionAccounts []
  (let [as (gdom/getElement "accounts")]
    (set! (.-selected as)
          (+ 1 (.-selected as)))))

(defn ^:export transitionEntries []
  (let [es (gdom/getElement "entries")]
    (set! (.-selected es)
          (+ 1 (.-selected es)))))

(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (bk/console-log "Signout CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout signoutUser}))
    (.request navigatorId)))

(defn start []
  (let [signinLink (gdom/getElement "signout")]
    (set! (.-onclick signinLink) onClickHandler)))

(set! (.-onload js/window) start)
