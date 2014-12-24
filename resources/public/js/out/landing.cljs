(ns landing
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [freactive.core :refer [atom cursor]]
            [freactive.dom :as dom]
            [bkeeping :as bk]

            [figwheel.client :as fw])
  (:require-macros [freactive.macros :refer [rx]]))


(enable-console-print!)

(def app-state
  (atom {:name "main"
         :accounts #{{:name "cash"
                      :type :asset
                      :counterWeight :debit}
                     {:name "debt"
                      :type :liability
                      :counterWeight :credit}
                     {:name "revenue"
                      :type :revenue
                      :counterWeight :credit}
                     {:name "expense"
                      :type :expense
                      :counterWeight :debit}
                     {:name "trade-creditor"
                      :type :expense
                      :counterWeight :debit}
                     {:name "electricity"
                      :type :asset
                      :counterWeight :debit}
                     {:name "widgets"
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


(defn view []
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

(dom/mount!
 (.querySelector js/document "body")
 (view))

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
