(ns landing
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [clojure.set :as set]
            [bkeeping :as bg]
            [account :as act]))


(enable-console-print!)

(def app-state
  (atom {:name "main"
         :accounts [{:db/id "0"
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
                     :counterWeight :debit}]

         :journals [{:name "generalledger"
                     :entries [{:db/id "7"
                                :date #inst "2014-12-12T23:20:50.52Z"
                                :content [{:type :credit
                                           :amount 2600
                                           :account "trade-creditor"}

                                          {:type :debit
                                           :amount 1000
                                           :account "electricity"}

                                          {:type :debit
                                           :amount 1600
                                           :account "widgets"}]}]}]}))

(defn entry-view [entry owner]
  (om/component
   (html [:div "fubar"])))

(defn entries-view [state owner]
  (om/component
   (html [:div {:id "entries-pane" :slide-from-right true}
          (for [ech (-> state :journals first :entries)]
            [:div {:class "delete-entry-row" :horizontal true :layout true}
             [:div {:class "delete-entry-button"}]
             [:div {:class "entry-row"
                    :flex true
                    :on-click (fn [e]
                                (bg/transitionEntriesForward)
                                (om/root entry-view
                                         ech
                                         {:target (. js/document (getElementById "entry-section"))}))}
              (str (:date ech))]])])))


(js/setTimeout (fn []

                 (om/root act/accounts-view
                          app-state
                          {:target (. js/document (getElementById "accounts-section"))})

                 (om/root entries-view
                          app-state
                          {:target (. js/document (getElementById "entries-section"))}))
               2000)
