(ns entry
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [clojure.set :as set]
            [bkeeping :as bg]
            [account :as act]

            ;; simple-brepl.client
            ;;[simple-brepl.service :refer [brepl-js]]
            ))


(defn entry-part-view [entry-part owner]
  (reify

    om/IInitState
    (init-state [_]
      {:name ""
       :type ""})

    om/IRenderState
    (render-state [this state]

      (html
       [:div {:id "entry-details-part-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/drop-down-menu {:id "entry-part-type"
                              :ref "entry-part-type"
                              :autoWidth false
                              :selectedIndex (om/get-state owner :type)
                              :menuItems (clj->js [{:payload "debit" :text "Debit"}
                                                   {:payload "credit" :text "Credit"}])})]

        [:div {:horizontal true :layout true}
         (mui/drop-down-menu {:id "entry-part-account"
                              :ref "entry-part-account"
                              :autoWidth false
                              :selectedIndex (om/get-state owner :type)
                              :menuItems (clj->js [{:payload "a1" :text "Account One"}
                                                   {:payload "a2" :text "Account Two"}])})]

        [:div {:horizontal true :layout true}
         (mui/input {:id "entry-part-amount"
                     :ref "entry-part-amount"
                     :defaultValue (:amount entry-part)})]

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
                            #_(om/transact! entry
                                          (fn [x]
                                            (let [natype (entrytype-from-selectedindex (om/get-state owner :type))
                                                  resultF (assoc x
                                                            :name (.-value (. js/document (getElementById "entry-part-name")))
                                                            :type natype
                                                            :counterWeight (natype entry-type-mappings))]
                                              resultF))))}
          "save"]]]))))

(defn handle-currency-change [e owner state]
  (bg/console-log (str "handle-currency-change / e[" e "] owner[" owner "] state[" state "]")))

(defn generate-entry-part-row [ech]

  (let [part-click-handler (fn [e]
                             (bg/transitionEntriesForward)
                             (om/root entry-part-view
                                      ech
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

  (reify

    om/IInitState
    (init-state [_]
      {:date (:date entry)
       :currency (:currency entry)
       :content (:content entry)})

    om/IRenderState
    (render-state [this state]

      (html
       [:div {:id "entry-details-pane" :slide-from-right true}

        [:div {:horizontal true :layout true}
         (mui/date-picker {:id "entry-details-date"
                           :ref "entry-details-date"
                           :name "Date"
                           :defaultDate (:date entry)

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
           (for [ech (:content entry)]
             (generate-entry-part-row ech))]]]

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
                                            (let [resultF (assoc x
                                                            :date (js/Date.
                                                                   (.-value (. js/document (getElementById "entry-details-date"))))
                                                            :content (om/get-state owner :content))]
                                              resultF))))}
          "save"]]]))))

(defn entries-view [state owner]
  (om/component
   (html [:div {:id "entries-pane" :slide-from-right true}
          ;;[:script (brepl-js)]
          (for [ech (-> state :journals first :entries)]
            [:div {:class "delete-entry-row" :horizontal true :layout true}
             [:div {:class "delete-entry-button"}]
             [:div {:class "entry-row"
                    :flex true
                    :on-click (fn [e]
                                (bg/transitionEntriesForward)
                                (om/root entry-view
                                         ech
                                         {:target (. js/document (getElementById "entry-section"))}))}
              (str (:date ech))]])])))
