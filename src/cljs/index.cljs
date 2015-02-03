(ns index
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [bkeeping :as bg]
            [landing :as ln]
            [util :as ul])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn verifyAssertion [assertion]

  (ul/console-log (str "verifyAssertion CALLED / assertion: " assertion))
  (bg/edn-xhr
   {:method :post
    :url "/verify-assertion"
    :data {:assertion assertion}
    :on-complete (partial bg/basicHandler
                          (fn [e xhr]

                            ;; Map data is returned as a flattened list of entry vectors
                            ;; So A) needs to be converted to B)
                            ;; A) "[:orig-content-encoding nil][:trace-redirects \"https://verifier.login.persona.org/verify\"]"
                            ;; B) "[[:orig-content-encoding nil][:trace-redirects \"https://verifier.login.persona.org/verify\"]]"
                            (let [data (.getResponseText xhr)
                                  response (str "[" data "]")
                                  response-edn  (reader/read-string response)
                                  responseF (reduce #(assoc %1 (first %2) (second %2)) {} response-edn) ]

                              (bg/edn-xhr
                               {:method :get
                                :url "/landing"
                                :on-complete (fn [e xhr]

                                               (let [result (.getResponseText xhr)]
                                                 (swap! ln/user-state (fn [inp]
                                                                        {:groupname (-> result first :system :groups first :name)
                                                                         :username (-> result first :system :groups
                                                                                       first :users first :username)
                                                                           :source result}))
                                                 (ln/main)))})))) }))

(defn signoutUser []
  (ul/console-log "signoutUser CALLED")

  (bg/edn-xhr
   {:method :get
    :url "/signout"
    :on-complete (constantly 1)}))

(defn onClickHandler []
  (let [currentUser "twashing@gmail.com"
        navigatorId js/navigator.id]

    (ul/console-log "Signin CLICKED")
    (.watch navigatorId
            (clj->js {:loggedInUser currentUser
                      :onlogin verifyAssertion
                      :onlogout signoutUser}))
    (.request navigatorId)))

(defn start []
  (if-let [signinLink (gdom/getElement "signin")]
    (set! (.-onclick signinLink) onClickHandler)))

(start)
