(ns landing
  (:refer-clojure :exclude [atom])
  (:require [goog.dom :as gdom]
            [goog.string :as gstr]
            [weasel.repl :as ws-repl]
            [freactive.dom :as dom]
            [freactive.core :refer [atom cursor]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [bkeeping :as bk]
            [view :as v]
            [cursors.core :as crs]
            [figwheel.client :as fw])
  (:require-macros [freactive.macros :refer [rx]]
                   [enfocus.macros :as em]))


(enable-console-print!)

#_(ws-repl/connect "ws://172.28.128.5:9001")

(def app-state
  (atom {:name "main"
         :accounts #{{:db/id "0"
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
                      :counterWeight :debit}}

         :journals #{{:name "generalledger"
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
                                             :account "widgets"}]}}}}}))

(def data-location-mapping {[:accounts] {:loc "#accounts-pane" :templ "/account-row.html" :fn 'render-account-list}
                            [:accounts :db/id] {:loc "#accounts-details-pane" :templ "/account-details.html"}
                            [:journals :entries] {:loc "#entries-pane" :templ "/entry-list.html"}
                            [:journals :entries :db/id] {:loc "#entry-details-pane" :templ "/entry-details.html"}

                            ;; has a nested path
                            [:journals :entries :db/id [:content :db/id]] {:loc "#entry-details-part-pane"
                                                                           :templ "/entry-details-part.html"}})

(defn ^:export transitionAccounts [directionFn]
  (let [as (gdom/getElement "accounts")]
    (set! (.-selected as)
          (directionFn (.-selected as) 1))))
(defn ^:export transitionAccountsForward []  (transitionAccounts +))
(defn ^:export transitionAccountsBackward []  (transitionAccounts -))

(defn ^:export transitionEntries [directionFn]
  (let [es (gdom/getElement "entries")]
    (bk/console-log (str "entries[" es "] / directionFn[" directionFn "]"))
    (set! (.-selected es)
          (directionFn (.-selected es) 1))))
(defn ^:export transitionEntriesForward []  (transitionEntries +))
(defn ^:export transitionEntriesBackward []  (transitionEntries -))


(em/deftemplate landing-template "/landing-body.html" []
  ["core-header-panel"] (ef/append "&nbsp;"))

(em/deftemplate accounts-template "/account-row.html" [account]
  ["#delete-account-row > text-node"] (ef/append (:name account)))

(em/deftemplate entries-template "/entry-row.html" [entry]
  ["#delete-entry-row > text-node"] (ef/append (:name entry)))

(defn render-account-list [accounts loc]
  (doseq [ech accounts]
    (ef/at js/document [loc] (ef/append (accounts-template ech))) ))

(defn render-entry-list [entries loc]
  (doseq [ech entries]
    (ef/at js/document [loc] (ef/append (entries-template ech))) ))

(defn render []
  (ef/at js/document
         ["body"] (ef/content (landing-template))))

(render)
(render-account-list (:accounts @app-state) "#accounts-pane")
(render-entry-list (-> @app-state :journals first :entries) "#entries-pane")

(defn ^:export render2 [path]

  (let [pmapping (data-location-mapping path)
        pdata (get-in @app-state path)
        mfn (:fn pmapping)
        mloc (:loc pmapping)
        mtpl (:templ pmapping)]

    #_(mfn mloc)

    (render-account-list (:accounts @app-state) "#accounts-pane")))



(defn ^:export one []
  (ef/at js/document
         ["#accounts-pane"] (ef/append (ef/html [:div "thing"]))))



  ;; TODO - initial population of landing page

  ;; TODO - changes with location creates, update, or deletes rows
  ;;      - bind (data location + action) to location in the document


(declare verifyAssertion)
(declare signoutUser)

(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (bk/console-log "Signout CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout signoutUser}))
    (.request navigatorId)))

(defn start []
  (let [signinLink (gdom/getElement "signout")]
    (set! (.-onclick signinLink) onClickHandler)))

(set! (.-onload js/window) start)

(fw/start {
           ;; configure a websocket url if yor are using your own server
           ;; :websocket-url "ws://localhost:3449/figwheel-ws"

           ;; optional callback
           :on-jsload (fn [] (print "reloaded"))

           ;; The heads up display is enabled by default
           ;; to disable it:
           ;; :heads-up-display false

           ;; when the compiler emits warnings figwheel
           ;; blocks the loading of files.
           ;; To disable this behavior:
           ;; :load-warninged-code true
           })
