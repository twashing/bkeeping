(ns template
  (:require [goog.dom :as gdom]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [cursors.core :as crs])
  (:require-macros [enfocus.macros :as em]))


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


(def account-type-mappings {:expense :debit
                            :revenue :credit
                            :liability :credit
                            :asset :debit
                            :capital :credit})

(defn- get-account-type-record [idx]
  (let [account-type-values [{:value :asset :name "Asset"}
                             {:value :liability :name "Liability"}
                             {:value :revenue :name "Revenue"}
                             {:value :expense :name "Expense"}
                             {:value :capital :name "Capital"}]]

    (get account-type-values idx)))

(defn get-account-type-value [idx]
  (:value (get-account-type-record idx)))


(defn gen-templates [data-location-mapping
                     adetailsFn]

  (em/deftemplate landing-template "resources/public/landing-body.html" [])

  (em/deftemplate accounts-template "/account-row.html" [account]
    [".account-row"] (ef/append (:name account))
    [".account-row"] (events/listen :click #((let [loc (:loc (data-location-mapping [:accounts :db/id]))]
                                               (adetailsFn account loc)
                                               (transitionAccountsForward)))))

  (em/deftemplate account-details-template "/account-details.html" [account]
    ["#account-details-name"] (ef/set-attr :value (:name account))
    ["#account-details-cancel"] (events/listen :click (transitionAccountsBackward))
    ["#account-details-save"] (events/listen :click #((let [db-id (:db/id account)
                                                            aname (.-value (gdom/getElement "account-details-name"))
                                                            type-kw (get-account-type-value
                                                                     (.-selected (gdom/getElement "account-details-type")))
                                                            account-cw (type-kw account-type-mappings)]

                                                        (transitionAccountsBackward)
                                                        (swap! app-state (fn [e]
                                                                           (assoc e
                                                                             :accounts
                                                                             (map (fn [ee]
                                                                                    (if (= (:db/id ee) db-id)
                                                                                      {:db/id db-id
                                                                                       :name aname
                                                                                       :type type-kw
                                                                                       :counterWeight account-cw}
                                                                                      ee))
                                                                                  (:accounts @app-state)))))))))

  (em/deftemplate entries-template "/entry-row.html" [entry]
    [".entry-row"] (ef/append (str (:date entry)))))
