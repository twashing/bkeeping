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
            [template :as tpl]
            [cursors.core :as crs]
            [figwheel.client :as fw])
  (:require-macros [freactive.macros :refer [rx]]
                   [enfocus.macros :as em]))


(enable-console-print!)

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
                      :entries #{{:db/id "7"
                                  :date #inst "2014-12-12T23:20:50.52Z"
                                  :content [{:type :credit
                                             :amount 2600
                                             :account "trade-creditor"}

                                            {:type :debit
                                             :amount 1000
                                             :account "electricity"}

                                            {:type :debit
                                             :amount 1600
                                             :account "widgets"}]}}}}}))

(declare data-location-mapping
         render-account-list
         render-entry-list
         render-account-details)


(defn render-account-list [accounts loc]
  (doseq [ech accounts]
    (ef/at js/document [loc] (ef/append (tpl/accounts-template ech))) ))


(defn render-account-details [account loc]
  (ef/at js/document [loc] (ef/content (tpl/account-details-template account))))

(defn render-entry-list [entries loc]
  (doseq [ech entries]
    (ef/at js/document [loc] (ef/append (tpl/entries-template ech))) ))

(def data-location-mapping {[:accounts] {:loc "#accounts-pane" :fn render-account-list}
                            [:accounts :db/id] {:loc "#account-details-pane"}
                            [:journals :entries] {:loc "#entries-pane" :fn render-entry-list}
                            [:journals :entries :db/id] {:loc "#entry-details-pane"}

                            ;; has a nested path
                            [:journals :entries :db/id [:content :db/id]] {:loc "#entry-details-part-pane"}})

(defn render-path [path data]

  (let [pmapping (data-location-mapping path)
        mfn (:fn pmapping)
        mloc (:loc pmapping)]

    (mfn data mloc)))

(defn render-body []
  (ef/at js/document
         ["body"] (ef/content (tpl/landing-template))))

(defn render []

  (render-body)
  (doseq [{path :path data :data}
          [{:path [:accounts] :data (:accounts @app-state)}
           {:path [:journals :entries] :data (-> @app-state :journals first :entries)}]]

    (render-path path data)))

(tpl/gen-templates
 data-location-mapping
 render-account-details)

(render)



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
