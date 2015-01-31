(ns bkeeping
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn console-log [message]
  (.log js/console message))

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


(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]

                     ;; Map data is returned as a flattened list of entry vectors
                     ;; So A) needs to be converted to B)

                     ;; A) "[:orig-content-encoding nil][:trace-redirects \"https://verifier.login.persona.org/verify\"]"
                     ;; B) "[[:orig-content-encoding nil][:trace-redirects \"https://verifier.login.persona.org/verify\"]]"
                     (let [response (str "[" (.getResponseText xhr) "]")
                           response-edn  (reader/read-string response)
                           responseF (reduce #(assoc %1 (first %2) (second %2)) {} response-edn) ]
                       (on-complete responseF))))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))

(defn basicHandler [handlefn res]

  (console-log (str "basicHandler response: " res))
  (if (= 200 (:status res))
    (do
      (console-log (str "XMLHttpRequest SUCCESS: " res))
      (handlefn))
    (do
      (console-log (str "XMLHttpRequest ERROR: " res))
      (.logout navigator.id))))

(defn basicHandlerS [res]
  (basicHandler res (fn [inp] (basicHandler #(.reload window.location) res))))

(defn verifyAssertion [assertion]

  (console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete (partial basicHandler (fn [e] (set! (.-location js/window) "/landing"))) }))

(defn signoutUser []
  (console-log "signoutUser CALLED")

  (edn-xhr
   {:method :get
    :url "/signout"
    :on-complete basicHandlerS}))
