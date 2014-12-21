(ns figwheel.client
  (:require
   [goog.Uri :as guri]
   [cljs.core.async :refer [put! chan <! map< close! timeout alts!] :as async]
   [figwheel.client.socket :as socket]
   [figwheel.client.heads-up :as heads-up]
   [figwheel.client.file-reloading :as reloading])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

;; exception formatting

(defn get-essential-messages [ed]
  (when ed
    (cons (select-keys ed [:message :class])
          (get-essential-messages (:cause ed)))))

(defn error-msg-format [{:keys [message class]}] (str class " : " message))

(def format-messages (comp (partial map error-msg-format) get-essential-messages))

;; more flexible state management

(defn focus-msgs [name-set msg-hist]
  (cons (first msg-hist) (filter (comp name-set :msg-name) (rest msg-hist))))

(defn reload-file?* [msg-name opts]
  (or (:load-warninged-code opts)
      (not= msg-name :compile-warning)))

(defn reload-file-state? [msg-names opts]
  (and (= (first msg-names) :files-changed)
       (reload-file?* (second msg-names) opts)))

(defn block-reload-file-state? [msg-names opts]
  (and (= (first msg-names) :files-changed)
       (not (reload-file?* (second msg-names) opts))))

(defn warning-append-state? [msg-names]
  (= [:compile-warning :compile-warning] (take 2 msg-names)))

(defn warning-state? [msg-names]
  (= :compile-warning (first msg-names)))

(defn rewarning-state? [msg-names]
  (= [:compile-warning :files-changed :compile-warning] (take 3 msg-names)))

(defn compile-fail-state? [msg-names]
  (= :compile-failed (first msg-names)))

(defn compile-refail-state? [msg-names]
  (= [:compile-failed :compile-failed] (take 2 msg-names)))

(defn css-loaded-state? [msg-names]
  (= :css-files-changed (first msg-names)))

;; plugins

(defn file-reloader-plugin [opts]
  (let [ch (chan)]
    (go-loop []
             (when-let [msg-hist' (<! ch)]
               (let [msg-hist (focus-msgs #{:files-changed :compile-warning} msg-hist')
                     msg-names (map :msg-name msg-hist)
                     msg (first msg-hist)]
                 #_(.log js/console (prn-str msg))
                 (cond
                  (reload-file-state? msg-names opts)
                  (<! (reloading/reload-js-files opts msg))

                  (block-reload-file-state? msg-names opts)
                  (.warn js/console "Figwheel: Not loading code with warnings - " (-> msg :files first :file)))
                 (recur))))
    (fn [msg-hist] (put! ch msg-hist) msg-hist)))

(defn css-reloader-plugin [opts]
  (fn [[{:keys [msg-name] :as msg} & _]]
    (when (= msg-name :css-files-changed)
      (reloading/reload-css-files opts msg))))

(defn compile-fail-warning-plugin [{:keys [on-compile-warning on-compile-fail]}]
  (fn [[{:keys [msg-name] :as msg} & _]]
    (condp = msg-name
          :compile-warning (on-compile-warning msg)
          :compile-failed  (on-compile-fail msg)
          nil)))

;; this is seperate for live dev only
(defn heads-up-plugin-msg-handler [opts msg-hist']
  (let [msg-hist (focus-msgs #{:files-changed :compile-warning :compile-failed} msg-hist')
        msg-names (map :msg-name msg-hist)
        msg (first msg-hist)]
    (go
     (cond
      (reload-file-state? msg-names opts)
      (<! (heads-up/flash-loaded))

      (compile-refail-state? msg-names)
      (do
        (<! (heads-up/clear))
        (<! (heads-up/display-error (format-messages (:exception-data msg)))))
      
      (compile-fail-state? msg-names)
      (<! (heads-up/display-error (format-messages (:exception-data msg))))
      
      (warning-append-state? msg-names)
      (heads-up/append-message (:message msg))
      
      (rewarning-state? msg-names)
      (do
        (<! (heads-up/clear))
        (<! (heads-up/display-warning (:message msg))))
      
      (warning-state? msg-names)
      (<! (heads-up/display-warning (:message msg)))
      
      (css-loaded-state? msg-names)
      (<! (heads-up/flash-loaded))))))

(defn heads-up-plugin [opts]
  (let [ch (chan)]
    (def heads-up-config-options** opts)
    (go-loop []
             (when-let [msg-hist' (<! ch)]
               (<! (heads-up-plugin-msg-handler opts msg-hist'))
               (recur)))
    (heads-up/ensure-container)
    (fn [msg-hist] (put! ch msg-hist) msg-hist)))

(defn enforce-project-plugin [opts]
  (fn [msg-hist]
    (when (< 1 (count (set (keep :project-id (take 5 msg-hist)))))
      (socket/close!)
      (.error js/console "Figwheel: message received from different project. Shutting socket down.")
      (when (:heads-up-display opts)
        (go
         (<! (timeout 3000))
         (heads-up/display-system-warning "Connection from different project"
                                          "Shutting connection down!!!!!"))))))

;; defaults and configuration

;; default callbacks

;; if you don't configure a :jsload-callback or an :on-jsload callback
;; this function will dispatch a browser event
;;
;; you can listen to this event easily like so:
;; document.body.addEventListener("figwheel.js-reload", function (e) { console.log(e.detail);} );

(defn default-on-jsload [url]
  (when (js*  "(\"CustomEvent\" in window)")
    (.dispatchEvent (.-body js/document)
                    (js/CustomEvent. "figwheel.js-reload"
                                     (js-obj "detail" url)))))


(defn default-on-compile-fail [{:keys [formatted-exception exception-data] :as ed}]
  (.debug js/console "Figwheel: Compile Exception")
  (doseq [msg (format-messages exception-data)]
    (.log js/console msg))
  ed)

(defn default-on-compile-warning [{:keys [message] :as w}]
  (.warn js/console "Figwheel: Compile Warning -" message)
  w)


(defn default-before-load [files]
  (.debug js/console "Figwheel: notified of file changes")
  files)

(defn default-on-cssload [files]
  (.debug js/console "Figwheel: loaded CSS files")
  (.log js/console (pr-str (map :file files)))
  files)

(defonce config-defaults
  {:retry-count 100
   :websocket-url (str "ws://" js/location.host "/figwheel-ws")
   :load-warninged-code false
   
   :on-jsload default-on-jsload
   :before-jsload default-before-load
   :url-rewriter identity

   :on-cssload default-on-cssload
   
   :on-compile-fail default-on-compile-fail
   :on-compile-warning default-on-compile-warning
   
   :heads-up-display true })

(defn handle-deprecated-jsload-callback [config]
  (if (:jsload-callback config)
    (-> config
        (assoc  :on-jsload (:jsload-callback config))
        (dissoc :jsload-callback))
    config))

(defn base-plugins [system-options]
  (let [base {:enforce-project-plugin enforce-project-plugin
              :file-reloader-plugin     file-reloader-plugin
              :comp-fail-warning-plugin compile-fail-warning-plugin
              :css-reloader-plugin      css-reloader-plugin}]
    (if (:heads-up-display system-options)
      (assoc base :heads-up-display-plugin heads-up-plugin)
      base)))

(defn add-plugins [plugins system-options]
  (doseq [[k plugin] plugins]
    (when plugin
      (let [pl (plugin system-options)]
        (add-watch socket/message-history-atom k (fn [_ _ _ msg-hist] (pl msg-hist)))))))

(defn start
  ([opts]
     (defonce __figwheel-start-once__
       (let [plugins' (:plugins opts) ;; plugins replaces all plugins
             merge-plugins (:merge-plugins opts) ;; merges plugins
             system-options (handle-deprecated-jsload-callback
                             (merge config-defaults
                                    (dissoc opts :plugins :merge-plugins)))
             plugins  (if plugins'
                        plugins'
                        (merge (base-plugins system-options) merge-plugins))]
         (add-plugins plugins system-options)
         (reloading/patch-goog-base)
         (socket/open system-options))))
  ([] (start {})))

;; legacy interface
(def watch-and-reload-with-opts start)
(defn watch-and-reload [& {:keys [] :as opts}] (start opts))
