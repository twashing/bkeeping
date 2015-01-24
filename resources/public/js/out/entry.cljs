(ns entry
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [clojure.set :as set]
            [bkeeping :as bg]
            [account :as act]))


(defn one [entry]
  (def entryF entry)
  (defn ^:export two []
    (let [epart (get-in entry [:content 0])]
      (om/transact! epart
                    (fn [x]
                      (let [resultF (assoc x :amount 2605 )]
                        (bg/console-log (str "... resultF[" resultF "]"))
                        resultF)))))
  (defn ^:export three []
    (om/transact! entry
                  (fn [x]
                    (let [resultF (assoc x :content [] )]
                      (bg/console-log (str "... resultF[" resultF "]"))
                      resultF))))
  (defn ^:export four []
    (bg/console-log (str "... entry[" @entry "]"))))

(defn parttype-from-selectedindex [idx]
  (get {0 :debit
        1 :credit} idx))

(defn handle-type-change [e owner idx]
  (om/set-state! owner :type idx))

(defn handle-amount-change [e owner {:keys [amount]}]
  (om/set-state! owner :amount (.-value (.-target e))))

(defn entry-part-view [parent-owner [idx entry-part] owner]

  (bg/console-log (str "entry-part-view... idx[" idx "] <==> entry[" entry-part "]"))
  (reify

    om/IInitState
    (init-state [_]
      {:type (:type entry-part)
       :amount (:amount entry-part)
       :account (:account entry-part)})

    om/IRenderState
    (render-state [this state]
      (html
       [:div {:id "entry-details-part-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/drop-down-menu {:id "entry-part-type"
                              :ref "entry-part-type"
                              :autoWidth false
                              :selectedIndex (if (= :debit (om/get-state owner :type))
                                               0 1)
                              :menuItems (clj->js [{:payload "debit" :text "Debit"}
                                                   {:payload "credit" :text "Credit"}])
                              :on-change #(handle-type-change %1 owner %2)})]

        [:div {:horizontal true :layout true}
         (mui/drop-down-menu {:id "entry-part-account"
                              :ref "entry-part-account"
                              :autoWidth false
                              :selectedIndex 1 #_(om/get-state owner :account)
                              :menuItems (clj->js [{:payload "a1" :text "Account One"}
                                                   {:payload "a2" :text "Account Two"}])})]

        [:div {:horizontal true :layout true}
         (mui/input {:id "entry-part-amount"
                     :ref "entry-part-amount"
                     :defaultValue (:amount entry-part)
                     :on-change #(handle-amount-change % owner entry-part)})]

        [:div {:horizontal true :layout true}
         [:div {:id "entry-part-cancel"
                :noink true
                :raised true
                :on-click bg/transitionEntriesBackward} "cancel"]
         [:div {:id "entry-part-save"
                :noink true
                :raised true
                :on-click (fn [e]

                            (bg/transitionEntriesBackward)

                            (let [pamount (om/get-state owner :amount)
                                  _ (bg/console-log "sanity 1... " idx)
                                  _ (bg/console-log "sanity 2... " (js/parseFloat pamount))]

                              (swap! state2 (fn [inp]
                                              (update-in inp [:content idx] assoc :amount (js/parseFloat pamount)))))

                            (om/refresh! parent-owner)

                            #_(om/transact! #_(get-in entryF [:content idx])
                                          #_entry-part
                                          (get-in entry [:content idx])
                                          (fn [x]
                                            (let [ptype (parttype-from-selectedindex (om/get-state owner :type))
                                                  pamount (om/get-state owner :amount)
                                                  resultF (assoc x
                                                            ;;:type ptype
                                                            :amount (js/parseFloat pamount)
                                                            ;;:account (natype entry-type-mappings)
                                                            )]

                                              (bg/console-log (str "... resultF[" resultF "]"))
                                              resultF)))
                            )}
          "save"]]]))))


(defn handle-currency-change [e owner state]
  (bg/console-log (str "handle-currency-change / e[" e "] owner[" owner "] state[" state "]")))

(defn generate-entry-part-row [full owner]

  (let [[idx ech] full
        part-click-handler (fn [e]
                             (bg/transitionEntriesForward)
                             (om/root (partial entry-part-view owner)
                                      full
                                      {:target (. js/document (getElementById "entry-part-section"))}))]

    (if (= :debit (:type ech))

      [:tr {:class "entry-part-row"
            :on-click part-click-handler}
       [:td (:amount ech)]
       [:td (gstr/unescapeEntities "&nbsp;")]]

      [:tr {:class "entry-part-row"
            :on-click part-click-handler}
       [:td (gstr/unescapeEntities "&nbsp;")]
       [:td (:amount ech)]])))

(defn entry-view [entry owner]

  (def state2 (atom @entry))

  (reify

    om/IInitState
    (init-state [_]

      {:date (:date entry)
       :currency (:currency entry)
       :content (:content entry)})

    om/IRenderState
    (render-state [this state]
      (bg/console-log (str "Entry - IRenderState... state[" @state2 "]"))

      (html
       [:div {:id "entry-details-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/date-picker {:id "entry-details-date"
                           :ref "entry-details-date"
                           :name "Date"
                           :defaultDate (:date @state2)

                           ;; yields"yyyy-MM-dd'T'HH:mm:ss.SSSZ"
                           :formatDate (fn [d]
                                         (.toISOString d))})]

        [:div {:horizontal true :layout true}
         [:div {:class "entry-balance" :horizontal true :layout true} "100.00"]
         (mui/drop-down-menu {:id "entry-details-currency"
                              :ref "entry-details-currency"
                              :autoWidth false
                              :selectedIndex 1
                              :on-change #(handle-currency-change %1 owner %2)
                              :menuItems (clj->js [{:payload "cdn" :text "USD"}
                                                   {:payload "usd" :text "CAD"}])})]

        [:div {:horizontal true :layout true}
         [:table {:class "pure-table"}

          [:thead
           [:tr
            [:th "debit"]
            [:th "credit"]]]

          [:tbody

           ;; Om require get-in (which requires an index), in order to get sub-cursors
           (for [ech (map-indexed (fn [idx itm] [idx itm]) (:content @state2))]
             (generate-entry-part-row ech owner))]]]

        [:div {:horizontal true :layout true}
         [:div {:id "entry-details-cancel"
                :noink true
                :raised true
                :on-click bg/transitionEntriesBackward} "cancel"]
         [:div {:id "entry-details-save"
                :noink true
                :raised true
                :on-click (fn [e]
                            (bg/transitionEntriesBackward)
                            (om/transact! entry
                                          (fn [x]
                                            @state2)))}
          "save"]]]))))

(defn entries-view [state owner]
  (om/component
   (html [:div {:id "entries-pane" :slide-from-right true}
          (for [ech (-> state :journals first :entries)]
            [:div {:class "delete-entry-row" :horizontal true :layout true}
             [:div {:class "delete-entry-button"}]
             [:div {:class "entry-row"
                    :flex true
                    :on-click (fn [e]
                                (one ech)
                                (bg/transitionEntriesForward)
                                (om/root entry-view
                                         ech
                                         {:target (. js/document (getElementById "entry-section"))}))}
              (str (:date ech))]])])))
