(ns view
  (:require [goog.string :as gstr])
  (:require-macros [freactive.macros :refer [rx]]))


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
        (map (fn [e]
               [:div {:horizontal true :layout true :class "delete-account-row"}
                [:paper-button {:noink true :raised true :class "delete-account-button"} ]
                [:div {:flex true :onclick "landing.transitionAccountsForward();"}
                 (:name e)]])
             (-> @app-state :accounts))]]
      [:section
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
         [:paper-button {:noink true :raised true :onclick "landing.transitionAccountsBackward();"} "save"]]]]]]
    [:div { :tool true } (rx (str (:name @app-state)))]
    [:core-animated-pages { :id "entries" :transitions "slide-from-right" }
     [:section
      [:div { :slide-from-right true }
       (map (fn [e]
              [:div {:horizontal true :layout true :class "delete-entry-row"}
               [:paper-button {:noink true :raised true :class "delete-entry-button"} ]
               [:div { :onclick "landing.transitionEntriesForward();" } (str (:date e))]])
            (-> @app-state :journals first :entries))]]
     [:section
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
        [:paper-input {:label "Content" :onclick "landing.transitionEntriesForward();"}]]
       [:div  {:horizontal true :layout true}
        [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "cancel"]
        [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "save"]]]]
     [:section
      [:div { :slide-from-right true }
       [:paper-dropdown-menu {:label "Type"}
        [:paper-dropdown {:class "dropdown core-transition core-closed"}
         [:core-menu {:class "menu"}
          [:paper-item "Debit"]
          [:paper-item "Credit"]]]]]
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
       [:paper-button {:noink true :raised true :onclick "landing.transitionEntriesBackward();"} "save"]]]]]])
