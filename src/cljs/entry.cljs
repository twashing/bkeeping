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


(defn handle-currency-change [e owner state]
  (bg/console-log (str "handle-currency-change / e[" e "] owner[" owner "] state[" state "]")))

(defn generate-entry-part-row [ech]

  (if (= :debit (:type ech))

    [:tr {:class "entry-part-row"
          :on-click (fn [e] (bg/transitionEntriesForward))}
     [:td (:amount ech)]
     [:td (gstr/unescapeEntities "&nbsp;")]]

    [:tr {:class "entry-part-row"
          :on-click (fn [e] (bg/transitionEntriesForward))}
     [:td (gstr/unescapeEntities "&nbsp;")]
     [:td (:amount ech)]]))


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
                           :inlinePlaceholder true})]

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
                            #_(om/transact! entry
                                          (fn [x]
                                            (let [natype (entrytype-from-selectedindex (om/get-state owner :type))
                                                  resultF (assoc x
                                                            :name (.-value (. js/document (getElementById "entry-details-name")))
                                                            :type natype
                                                            :counterWeight (natype entry-type-mappings))]
                                              resultF))))}
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
                                (bg/transitionEntriesForward)
                                (om/root entry-view
                                         ech
                                         {:target (. js/document (getElementById "entry-section"))}))}
              (str (:date ech))]])])))
