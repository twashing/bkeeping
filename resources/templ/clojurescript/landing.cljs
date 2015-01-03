(ns landing
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [weasel.repl :as ws-repl]
            [freactive.dom :as dom]
            [freactive.core :refer [atom cursor]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [bkeeping :as bk]
            [view :as v]
            [cursors.core :as crs]
            [figwheel.client :as fw])
  (:require-macros [freactive.macros :refer [rx]]
                   [enfocus.macros :as em]))


(enable-console-print!)

#_(ws-repl/connect "ws://172.28.128.5:9001")

(def app-state
  (atom {:name "main"
         :accounts #{{:db/id "0"
                      :name "cash"
                      :type :asset
                      :counterWeight :debit}
                     {:db/id "1"
                      :name "debt"
                      :type :liability
                      :counterWeight :credit}
                     {:db/id "2"
                      :name "revenue"
                      :type :revenue
                      :counterWeight :credit}
                     {:db/id "3"
                      :name "expense"
                      :type :expense
                      :counterWeight :debit}
                     {:db/id "4"
                      :name "trade-creditor"
                      :type :expense
                      :counterWeight :debit}
                     {:db/id "5"
                      :name "electricity"
                      :type :asset
                      :counterWeight :debit}
                     {:db/id "6"
                      :name "widgets"
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


(defn view []
  (v/generate-view app-state))

#_(dom/mount!
 (.querySelector js/document "body")
 (view))

#_(ef/at js/document
       ["body"] (ef/content "Hello enfocus!"))


(em/deftemplate landing-template "/landing-body.html" [] )

(ef/at js/document
       ["body"] (ef/content (landing-template)))

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
