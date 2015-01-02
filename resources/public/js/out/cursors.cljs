(ns cursors)


(defprotocol ICursor
  (path [cursor])
  (state [cursor])
  (parent [cursor])
  (transact [cursor new-state]))

(deftype MapCursor [state path]
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
   (= (type state) cursors.MapCursor) (MapCursor. (.state state)
                                                  (concat (.path state) path))
   (map? @state) (MapCursor. state path)))


(comment

  (def state (atom {:a 1 :b {:c 3 :d {:e 5}}}))


  (def one (cursor state [:b :c]))
  (.state one)
  (.transact one 4)


  (def two (cursor state [:b :d]))
  (.state two)
  (.transact two {:foo :bar})


  (def chained (cursor two [:foo]))
  (.state chained)
  (.path chained)
  (.transact chained 111)

  )
