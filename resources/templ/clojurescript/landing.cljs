(ns landing
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [weasel.repl :as ws-repl]
            [freactive.core :refer [atom cursor]]
            [freactive.dom :as dom]
            [bkeeping :as bk]
            [view :as v]

            [figwheel.client :as fw])
  (:require-macros [freactive.macros :refer [rx]]))


(enable-console-print!)


(ws-repl/connect "ws://172.28.128.5:9001")

(def app-state
  (atom {:name "main"
         :accounts #{{:name "cash"
                      :type :asset
                      :counterWeight :debit}
                     {:name "debt"
                      :type :liability
                      :counterWeight :credit}
                     {:name "revenue"
                      :type :revenue
                      :counterWeight :credit}
                     {:name "expense"
                      :type :expense
                      :counterWeight :debit}
                     {:name "trade-creditor"
                      :type :expense
                      :counterWeight :debit}
                     {:name "electricity"
                      :type :asset
                      :counterWeight :debit}
                     {:name "widgets"
                      :type :asset
                      :counterWeight :debit}}

         :journals #{{:name "generalledger"
                      :entries #{{:date #inst "2014-12-12T23:20:50.52Z"
                                  :content [{:type :credit
                                             :amount 2600
                                             :account "trade-creditor"}

                                            {:type :debit
                                             :amount 1000
                                             :account "electricity"}

                                            {:type :debit
                                             :amount 1600
                                             :account "widgets"}]}}}}}))


(defn ^:export transitionAccounts [directionFn]
  (let [as (gdom/getElement "accounts")]
    (set! (.-selected as)
          (directionFn (.-selected as) 1))))
(defn ^:export transitionAccountsForward []  (transitionAccounts +))
(defn ^:export transitionAccountsBackward []  (transitionAccounts -))


(defn ^:export transitionEntries [directionFn]
  (let [es (gdom/getElement "entries")]
    (set! (.-selected es)
          (directionFn (.-selected es) 1))))
(defn ^:export transitionEntriesForward []  (transitionEntries +))
(defn ^:export transitionEntriesBackward []  (transitionEntries -))


(defn view []
  (v/generate-view app-state))

(dom/mount!
 (.querySelector js/document "body")
 (view))

(declare verifyAssertion)
(declare signoutUser)

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

(fw/start {
           ;; configure a websocket url if yor are using your own server
           ;; :websocket-url "ws://localhost:3449/figwheel-ws"

           ;; optional callback
           :on-jsload (fn [] (print "reloaded"))

           ;; The heads up display is enabled by default
           ;; to disable it:
           ;; :heads-up-display false

           ;; when the compiler emits warnings figwheel
           ;; blocks the loading of files.
           ;; To disable this behavior:
           ;; :load-warninged-code true
           })
