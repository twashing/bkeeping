(ns landing
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [freactive.core :refer [atom cursor]]
            [freactive.dom :as dom]
            [bkeeping :as bk])
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


(defn ^:export transitionAccounts []
  (let [as (gdom/getElement "accounts")]
    (set! (.-selected as)
          (+ 1 (.-selected as)))))

(defn ^:export transitionEntries []
  (let [es (gdom/getElement "entries")]
    (set! (.-selected es)
          (+ 1 (.-selected es)))))


(defn view []
  [:core-header-panel { :flex true }
   [:script {:src "bower_components/webcomponentsjs/webcomponents.min.js"}]
   [:core-toolbar {:layout true}
    [:div { :class "tk-lust-script header-logo" } "bkeeping"]
    [:div { :class "tk-open-sans header-text" } "Your solution to simple online bookkeeping"]
    [:span { :flex true } (gstr/unescapeEntities "&nbsp;")]
    [:div { :class "tk-open-sans header-text" :id "signout" } "logout"]]

   [:core-scaffold { :id "landing" }
    [:core-header-panel { :mode "seamed" :navigation true :flex true }
     [:core-toolbar "Accounts"]
     [:core-animated-pages { :id "accounts" :transitions "slide-from-right" :onclick "landing.transitionAccounts();" }
      [:section
       [:div { :slide-from-right true }
        [:div { :id "accounts-pane" } "Accounts"]
        [:div { :id "app" } ]]]
      [:section
       [:div { :slide-from-right true }
        [:div { :id "account-detials-pane" } "Account Details"]]]]]
    [:div { :tool true } "Entries"]
    [:core-animated-pages { :id "entries" :transitions "slide-from-right" :onclick "landing.transitionEntries();" }
     [:section
      [:div { :slide-from-right true }
       [:div { :id "entries-pane" } "Entries"]]]
     [:section
      [:div { :slide-from-right true }
       [:div { :id "entry-details-pane" } "Entry Details"]]]
     [:section
      [:div { :slide-from-right true }
       [:div { :id "entry-details-part-pane" } "Entry Details Part"]]]]]])

#_(defonce root
  (dom/append-child! (.-body js/document)
                     [:div#app]))
#_(dom/mount! root (view))

(dom/mount!
 #_(.-body js/document)
 (.querySelector js/document "body")
 (view))

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