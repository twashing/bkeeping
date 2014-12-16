(ns landing
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [bkeeping :as bk]))


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


(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:name app)))))
  app-state
  {:target (. js/document (getElementById "accounts-pane"))})


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
