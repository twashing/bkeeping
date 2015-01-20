(ns landing
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
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


(defn account-view [account owner]
  (om/component
   (html

    [:div {:id "account-details-pane" :slide-from-right true}

     [:div {:horizontal true :layout true}
      [:input {:id "account-details-name" :label "Name" :type "text" :value (:name account)}]]

     [:div {:horizontal true :layout true}
      ]

     [:div {:horizontal true :layout true}
      [:div {:id "account-details-cancel"
             :noink true
             :raised true
             :on-click transitionAccountsBackward} "cancel"]
      [:div {:id "account-details-save"
             :noink true
             :raised true
             :on-click (fn [e]
                         (transitionAccountsBackward)
                         (om/transact! account
                                       (fn [x]
                                         (assoc x :name "fubar"))))} "save"]]])))


(defn accounts-view [app owner]
  (om/component
   (html [:div {:id "accounts-pane" :slide-from-right true}
          (for [ech (:accounts app)]
            [:div {:class "delete-account-row" :horizontal true :layout true}
             [:div {:class "delete-account-button"}]
             [:div {:class "account-row"
                    :flex true
                    :on-click (fn [e]
                                (transitionAccountsForward)
                                (om/root account-view
                                         ech
                                         {:target (. js/document (getElementById "account-section"))}))}
              (:name ech)]])])))


(js/setTimeout (fn []
                 (om/root accounts-view
                          app-state
                          {:target (. js/document (getElementById "accounts-section"))}))
               2000)


(defn ^:export changeme [inp]
  (swap! app-state assoc :name inp))
