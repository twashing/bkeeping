(ns landing
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [chan close!]]
            [bkeeping :as bg])
  (:require-macros
       [cljs.core.async.macros :as m :refer [go]]))


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

(js/setTimeout (fn []

                 (om/root
                  (fn [app owner]

                    (om/component
                     (html [:div {:id "accounts-pane" :slide-from-right true}
                            (for [ech (:accounts app)]
                              [:div {:class "delete-account-row" :horizontal true :layout true}
                                    [:div {:class "delete-account-button"}]
                                    [:div {:class "account-row" :flex true} (:name ech)]])])))
                  app-state
                  {:target (. js/document (getElementById "accounts-section"))}))

               2000)

(defn ^:export changeme [inp]
  (swap! app-state assoc :name inp))
