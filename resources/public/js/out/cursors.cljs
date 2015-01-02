(ns cursors)


(defprotocol ICursor
  (path [cursor])
  (state [cursor])
  (transact [cursor new-state]))

(deftype MapCursor [state path]
  ICursor
  (path [cursor] path)
  (state [cursor] state)
  (transact [cursor new-state]
    (swap! state
           (fn [e]
             (update-in e path (fn [_] new-state))))))

(defn cursor [state path]
  (cond
   (map? @state) (MapCursor. state path)))


(comment

  (def state (atom {:a 1 :b {:c 3 :d {:e 5}}}))

  (def one (cursor state [:b :c]))
  (.transact one 4)
  (.state one)

  (def two (cursor state [:b :d]))
  (.transact two {:foo :bar})
  (.state two)

  (type two)

  )
