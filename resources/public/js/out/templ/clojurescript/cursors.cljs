(ns templ.clojurescript.cursors)


(defprotocol ICursor
  (-path [cursor])
  (-state [cursor]))

(deftype MapCursor [state path]
  ICursor
  (-path [cursor] path)
  (-state [cursor] state))

(defn cursor [state path]
  (cond
   (map? @state) (MapCursor. state path)))

(defn transact [cursor new-state]
  (let [old-state (.-state cursor)
        path (.-path cursor)]
    (swap! old-state
           (fn [e]
             (update-in e path (fn [_] new-state))))))
