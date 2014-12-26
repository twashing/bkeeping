(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [weasel.repl :as ws-repl]
            [bkeeping :as bk])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(ws-repl/connect "ws://172.28.128.5:9001")


(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (bk/console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin bk/verifyAssertion
                      :onlogout bk/signoutUser}))
    (.request navigatorId)))

(defn start []
  (let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(set! (.-onload js/window) start)
