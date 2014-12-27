(ns view
  (:refer-clojure :exclude [atom])
  (:require [goog.string :as gstr]
            [freactive.core :refer [atom cursor]]
            [freactive.experimental.items-view :as iview]
            [freactive.experimental.observable-collection :refer [observable-collection transact!]]
            [bkeeping :as bk])
  (:require-macros [freactive.macros :refer [rx]]))


(defn render-account-list [app-state]
  (map (fn [e]
         [:div {:horizontal true :layout true :class "delete-account-row"}
          [:paper-button {:noink true :raised true :class "delete-account-button"} ]
          [:div {:flex true :onclick "landing.transitionAccountsForward();"}
           (:name e)]])
       (-> @app-state :accounts)) )

(defn render-account-details []
  [:div { :slide-from-right true }

   [:div {:horizontal true :layout true}
    [:paper-input {:label "Name"}]]
   [:div {:horizontal true :layout true}
    [:paper-dropdown-menu {:label "Type"}
     [:paper-dropdown {:class "dropdown core-transition core-closed"}
      [:core-menu {:class "menu"}
       [:paper-item "Asset"]
       [:paper-item "Liability"]
       [:paper-item "Revenue"]
       [:paper-item "Expense"]
       [:paper-item "Capital"]]]]]
   [:div  {:horizontal true :layout true}
    [:paper-button {:noink true :raised true :onclick "landing.transitionAccountsBackward();"} "cancel"]
    [:paper-button {:noink true :raised true :onclick "landing.transitionAccountsBackward();"} "save"]]])

(defn render-entries-list [app-state]
  (map (fn [e]
         [:div {:horizontal true :layout true :class "delete-entry-row"}
          [:paper-button {:noink true :raised true :class "delete-entry-button"} ]
          [:div { :onclick "landing.transitionEntriesForward();" } (str (:date e))]])
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

    [:paper-input {:label "Content" :onclick "landing.transitionEntriesForward();"}]

    #_[:sortable-table
       [:sortable-column "debit"]
       [:sortable-column "credit"]
       [[100 ""]
        ["" 100]]]

    #_[:sortable-table {:columns (clj->js ["fruit","alice","bill","casey"])
                        :data (clj->js [ "apple", 4, 10, 2])}]

    #_[:sortable-table
       (rx {:fruit "apple" :alice 4 :bill 10 :casey 2})]]
   [:div  {:horizontal true :layout true}
    [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "cancel"]
    [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "save"]]])

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
    [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "cancel"]
    [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "save"]]])

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
        (render-account-list app-state)]]
      [:section
       (render-account-details)]]]
    [:div { :tool true } (rx (str (:name @app-state)))]
    [:core-animated-pages { :id "entries" :transitions "slide-from-right" }
     [:section
      [:div { :slide-from-right true }
       (render-entries-list app-state)]]
     [:section
      (render-entry-detail)]
     [:section
      (render-entry-detail-part)]]]])
