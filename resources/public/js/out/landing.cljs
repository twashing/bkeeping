(ns landing
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [clojure.set :as set]
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


(def asset-types {:asset 0
                  :liability 1
                  :revenue 2
                  :expense 3
                  :capital 4})

(def account-type-mappings {:expense :debit
                            :revenue :credit
                            :liability :credit
                            :asset :debit
                            :capital :credit})

(defn selectedindex-from-account-type [atype]
  (asset-types atype))

(defn accounttype-from-selectedindex [idx]
  (-> (set/map-invert asset-types)
      (get idx)))

(defn handle-name-change [e owner {:keys [name]}]
  (om/set-state! owner :name (.-value (.-target e))))

(defn handle-type-change [e owner idx]
  (om/set-state! owner :type idx))


(defn account-view [account owner]

  (reify

    om/IInitState
    (init-state [_]
      (bg/console-log (str "init-state... account[" (:type account) "]"))
      {:name (:name account)
       :type (selectedindex-from-account-type (:type account))})

    om/IRenderState
    (render-state [this state]

      (html
       [:div {:id "account-details-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/input {:id "account-details-name"
                     :ref "account-details-name"
                     :defaultValue (:name account)
                     :on-change #(handle-name-change % owner account)})]

        [:div {:horizontal true :layout true}
         (mui/drop-down-menu {:id "account-details-type"
                              :ref "account-details-type"
                              :autoWidth false
                              :selectedIndex (om/get-state owner :type)
                              :on-change #(handle-type-change %1 owner %2)
                              :menuItems (clj->js [{:payload "asset" :text "Asset"}
                                                   {:payload "liability" :text "Liability"}
                                                   {:payload "revenue" :text "Revenue"}
                                                   {:payload "expense" :text "Expense" :selected true}
                                                   {:payload "capital" :text "Capital"}])})]

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
                                            (let [natype (accounttype-from-selectedindex (om/get-state owner :type))
                                                  resultF (assoc x
                                                            :name (.-value (. js/document (getElementById "account-details-name")))
                                                            :type natype
                                                            :counterWeight (natype account-type-mappings))]
                                              (bg/console-log (str "... " resultF))
                                              resultF))))}
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
