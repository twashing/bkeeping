(ns util)

(enable-console-print!)

(defn console-log [message]
  (.log js/console message))

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

(defn ready [handlerfn]
  (if (not (= "loading" (.-readeyState js/document)))
    (handlerfn)
    (.addEventListener js/document "DOMContentLoaded" handlerfn)))

(defn app-test-data []
  {:name "main"
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
                                     :account "widgets"}]}]}]})
