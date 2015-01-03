(ns cursors.core)


(defprotocol ICursor
  (path [cursor])
  (state [cursor])
  (parent [cursor])
  (transact [cursor new-state]))

(deftype MapCursor [parent state path]
  ICursor
  (path [_] path)
  (state [_] state)
  (parent [_] parent)
  (transact [_ new-state]
    (swap! state
           (fn [e]
             (update-in e path (fn [_] new-state))))))

(defn cursor [state path]
  (cond
   (= (type state) MapCursor) (MapCursor. state
                                          (.state state)
                                          (concat (.path state) path))
   (map? @state) (MapCursor. nil state path)))



(comment

  (def state (atom {:a 1 :b {:c 3 :d {:e 5}}}))


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
  (.state two))
