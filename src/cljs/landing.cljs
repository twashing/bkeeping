(ns landing
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [om-material-ui.core :as mui :include-macros true]
            [clojure.set :as set]
            [bkeeping :as bg]
            [account :as act]
            [entry :as ent]
            [util :as ul])
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)]))


;; SENTE
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :server/default ; Fallback
  [{:as ev-msg :keys [event]}]
  (ul/console-log (str "default event: " event)))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (ul/console-log "Channel socket successfully established!")
    (ul/console-log (str "Channel socket state change: " ?data))))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (ul/console-log (str "Push event from server: " ?data)))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (ul/console-log (str "Event: " event))
  (event-msg-handler ev-msg))

(def router_ (atom nil))
(defn stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(start-router!)


(def user-state (atom nil))
(def app-state (atom (ul/app-test-data)))

(defn ^:export sendMessageRaw [msg-withkey]
  (chsk-send! msg-withkey))

(defn ^:export sendMessageDefault [msg]
  (sendMessageRaw [:client/default msg]))

(defn ^:export loadGroup []
  (sendMessageRaw [:client/load-group "fubar"]))


(defn ^:export printUserState []
  (ul/console-log (str "groupname[" (:groupname @user-state) "] / username[" (:username @user-state) "]")))

(defn ^:export printAppState []
  (ul/console-log @app-state))


(defn main []

  (om/root act/accounts-view
           app-state
           {:target (. js/document (getElementById "accounts-section"))})

  (om/root ent/entries-view
           app-state
           {:target (. js/document (getElementById "entries-section"))}))


(ul/ready
 (fn [inp]
   (bg/edn-xhr
    {:method :get
     :url "/user-data"
     :on-complete (partial bg/basicHandler
                           (fn [e xhr]

                             (let [data (.getResponseText xhr)
                                   responseF  (reader/read-string data)

                                   groupname (-> responseF :system :groups first :name)
                                   username (-> responseF :system :groups first :users first :username)]

                               ;; set the user data into the namespace
                               (swap! user-state (fn [inp]
                                                   {:groupname groupname
                                                    :username username
                                                    :source responseF}))

                               ;; run the landing page
                               (main))))})))
