(ns view
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [freactive.core :refer [atom cursor]]
            [freactive.experimental.items-view :as iview]
            [bkeeping :as bk])
  (:require-macros [freactive.macros :refer [rx]]))


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

(def adetails (atom {:db/id nil
                     :name "fubar"
                     :type nil
                     :counterWeight nil}))

(def account-type-mappings {:expense :debit
                            :revenue :credit
                            :liability :credit
                            :asset :debit
                            :capital :credit})

(defn- get-account-type-record [idx]
  (let [account-type-values [{:value :asset :name "Asset"}
                             {:value :liability :name "Liability"}
                             {:value :revenue :name "Revenue"}
                             {:value :expense :name "Expense"}
                             {:value :capital :name "Capital"}]]

    (get account-type-values idx)))

(defn get-account-type-value [idx]
  (:value (get-account-type-record idx)))

(defn render-account-list [app-state]
  (map (fn [e]
         [:div {:horizontal true :layout true :class "delete-account-row"}
          [:paper-button {:noink true :raised true :class "delete-account-button"} ]
          [:div {:flex true :on-click (fn [ee]
                                        (do
                                          (transitionAccountsForward)
                                          (reset! adetails e)) )}
           (:name e)]])
       (-> @app-state :accounts)) )

(defn render-account-details [app-state]
  [:div { :slide-from-right true }

   [:div {:horizontal true :layout true}
    [:paper-input {:id "account-details-name" :label "Name" :value (rx (str (:name @adetails)))}]]

   [:div {:horizontal true :layout true}
    [:paper-dropdown-menu {:label "Type"}
     [:paper-dropdown {:class "dropdown core-transition core-closed"}
      [:core-menu {:id "account-details-type" :class "menu"}
       [:paper-item "Asset"]
       [:paper-item "Liability"]
       [:paper-item "Revenue"]
       [:paper-item "Expense"]
       [:paper-item "Capital"]]]]]

   [:div  {:horizontal true :layout true}
    [:paper-button {:noink true :raised true :on-click (fn [e] (transitionAccountsBackward))} "cancel"]
    [:paper-button {:noink true :raised true :on-click (fn [e]
                                                         (let [db-id (:db/id @adetails)
                                                               aname (.-value (gdom/getElement "account-details-name"))
                                                               type-kw (get-account-type-value
                                                                        (.-selected (gdom/getElement "account-details-type")))
                                                               account-cw (type-kw account-type-mappings)]

                                                           (transitionAccountsBackward)
                                                           (swap! app-state (fn [e]
                                                                              (assoc e
                                                                                :accounts
                                                                                (map (fn [ee]
                                                                                       (if (= (:db/id ee) db-id)
                                                                                         {:db/id db-id
                                                                                          :name aname
                                                                                          :type type-kw
                                                                                          :counterWeight account-cw}
                                                                                         ee))
                                                                                     (:accounts @app-state)))))

                                                           (bk/console-log (str "Updated app-state[" @app-state "]"))))}
     "save"]]])

(defn render-entries-list [app-state]
  (map (fn [e]
         [:div {:horizontal true :layout true :class "delete-entry-row"}
          [:paper-button {:noink true :raised true :class "delete-entry-button"} ]
          [:div { :on-click (fn [e] (transitionEntriesForward)) } (str (:date e))]])
       (-> @app-state :journals first :entries)))

(defn render-entry-detail []
  [:div { :slide-from-right true }

   [:div {:horizontal true :layout true}
    [:paper-input {:label "Date"}]]

   [:div {:horizontal true :layout true}
    [:paper-input {:label "Balance" :disabled true}]
    [:paper-dropdown-menu {:label "Currency"}
     [:paper-dropdown {:class "dropdown core-transition core-closed"}
      [:core-menu {:class "menu"}
       [:paper-item "CAD"]
       [:paper-item "USD"]
       [:paper-item "EUR"]]]]]

   [:div {:horizontal true :layout true}
    [:paper-input {:label "Content" :on-click (fn [e] (transitionEntriesForward))}]]

   [:div {:horizontal true :layout true}
    [:paper-button {:noink true :raised true :on-click (fn [e] (transitionEntriesBackward))} "cancel"]
    [:paper-button {:noink true :raised true :on-click (fn [e] (transitionEntriesBackward))} "save"]]])

(defn render-entry-detail-part []
  [:div { :slide-from-right true }
   [:paper-dropdown-menu {:label "Type"}
    [:paper-dropdown {:class "dropdown core-transition core-closed"}
     [:core-menu {:class "menu"}
      [:paper-item "Debit"]
      [:paper-item "Credit"]]]]
   [:div { :slide-from-right true }
    [:paper-dropdown-menu {:label "Account"}
     [:paper-dropdown {:class "dropdown core-transition core-closed"}
      [:core-menu {:class "menu"}
       [:paper-item "Cash"]
       [:paper-item "Inventory"]]]]]
   [:div {:horizontal true :layout true}
    [:paper-input {:label "Amount"}]]
   [:div {:horizontal true :layout true}
    [:paper-button {:noink true :raised true :on-click (fn [e] (transitionEntriesBackward))} "cancel"]
    [:paper-button {:noink true :raised true :on-click (fn [e] (transitionEntriesBackward))} "save"]]])

(defn generate-view [app-state]
  [:core-header-panel {:flex true
                       :fit true
                       :on-mousemove (fn [e] (reset! app-state
                                                    (assoc @app-state :name [(.-clientX e) (.-clientY e)])))}
   [:core-toolbar {:layout true}
    [:div { :class "tk-lust-script header-logo" } "bkeeping"]
    [:div { :class "tk-open-sans header-text" } "Your solution to simple online bookkeeping"]
    [:span { :flex true } (gstr/unescapeEntities "&nbsp;")]
    [:div { :class "tk-open-sans header-text" :id "signout" } "logout"]]

   [:core-scaffold {:id "landing"
                    :drawerWidth "400px"
                    :responsiveWidth "650px" }
    [:core-header-panel { :mode "seamed" :navigation true :flex true }
     [:core-toolbar "Accounts"]
     [:core-animated-pages { :id "accounts" :transitions "slide-from-right" }
      [:section
       [:div { :slide-from-right true }
        (do
          (add-watch app-state nil
                     (fn [_ atum old-state new-state]
                       (render-account-list atum)))
          (render-account-list app-state))]]
      [:section
       (render-account-details app-state)]]]
    [:div { :tool true } (rx (str (:name @app-state)))]
    [:core-animated-pages { :id "entries" :transitions "slide-from-right" }
     [:section
      [:div { :slide-from-right true }
       (render-entries-list app-state)]]
     [:section
      (render-entry-detail)]
     [:section
      (render-entry-detail-part)]]]])
