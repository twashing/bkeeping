(ns cursors.core)


(defprotocol ICursor
  (path [cursor])
  (state [cursor])
  (data [cursor])
  (parent [cursor])
  (transact [cursor new-state]))

(deftype Cursor [parent state path]
  ICursor
  (path [_] path)
  (state [_] state)
  (data [_] (get-in @state path))
  (parent [_] parent)
  (transact [_ new-state]
    (swap! state
           (fn [e]
             (update-in e path (fn [_] new-state))))))

(defn cursor [state path]
  (cond
   (= (type state) Cursor) (Cursor. state
                                    (.state state)
                                    (concat (.path state) path))
   (or (map? @state)
       (vector? @state)
       (list? @state)) (Cursor. nil state path)))

(defn path [curs] (.path curs))
(defn state [curs] (.state curs))
(defn data [curs] (.data curs))

(comment

  (def state (atom {:a 1 :b {:c 3
                             :d {:e 5}}}))

  (add-watch state :watcher
             (fn [key atom old-state new-state]
               (prn "-- Atom Changed --")
               (prn "key: " key)
               (prn "atom: " atom)
               (prn "old-state: " old-state)
               (prn "new-state: " new-state)))

  ;; basic changes
  (def one (cursor state [:b :c]))
  (.state one)
  (.transact one 4)

  (def two (cursor state [:b :d]))
  (.state two)
  (.transact two {:foo :bar})

  ;; nested cursor
  (def nested (cursor two [:foo]))
  (.state nested)
  (.path nested)
  (.path (.parent nested))
  (.transact nested 111)

  ;; cursor changes if source changes
  (.state (.parent nested))
  (.state two)

  (def sa (atom {:a 1
                 :b {:c 3
                     :d {:e 5}
                     :z [6 34 {:as :df}]}}))

  (def three (cursor sa [:b :z 2]))

  (state three)
  (path three)
  (data three)
  (transact three {:ll :kk})

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
                       :entries #{{:db/id "7"
                                   :date #inst "2014-12-12T23:20:50.52Z"
                                   :content [{:type :credit
                                              :amount 2600
                                              :account "trade-creditor"}

                                             {:type :debit
                                              :amount 1000
                                              :account "electricity"}

                                             {:type :debit
                                              :amount 1600
                                              :account "widgets"}]}}}]}))

  (def four (cursor app-state [:accounts 3]))

  (.data four)
  (data four)
  )
