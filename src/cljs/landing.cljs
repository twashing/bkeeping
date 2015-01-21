(ns landing
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [bkeeping :as bg]))


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


(defn handle-change [e owner {:keys [name]}]
  (om/set-state! owner :name (.-value (.-target e))))

(defn account-view [account owner]
  (reify

    om/IInitState
    (init-state [_]
      {:name ""})

    om/IRenderState
    (render-state [this state]

      (html
       [:div {:id "account-details-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/input {:id "account-details-name"
                     :ref "account-details-name"
                     :placeholder "Name"
                     :description "Account Name"
                     :defaultValue (:name account)
                     :on-change #(handle-change % this account)})]

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
                                            (assoc x
                                              :name
                                              (.-value (. js/document (getElementById "account-details-name")))))))}
          "save"]]]))))


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
