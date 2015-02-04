(ns bkeeping.shell
  (:require [alembic.still]
            [taoensso.timbre :as timbre]
            [hara.component :as hco]
            [bkell.bkell :as bk]
            [bkell.config :as config]

            [bkeeping.component.server :as cs]))


(defn reload-project []
  (alembic.still/load-project))

;; Bkeeping Log config
(timbre/set-config! [:shared-appender-config :spit-filename] "logs/bkeeping.log")
(timbre/set-config! [:appenders :spit :enabled?] true)

(defn log-trace! [] (timbre/set-level! :trace))
(defn log-debug! [] (timbre/set-level! :debug))
(defn log-info! [] (timbre/set-level! :info))
(defn log-warn! [] (timbre/set-level! :warn))
(defn log-error! [] (timbre/set-level! :error))
(defn log-fatal! [] (timbre/set-level! :fatal))
(defn log-report! [] (timbre/set-level! :report))

(def file-config (config/load-edn "config-bkeeping.edn"))

(def environment-mode :dev)
(def system nil)
(def topology {:server [cs/map->Server]})
(def component-config   {:server {}})

(defn start
  ([] (start component-config))
  ([config]

   (bk/start {:bkell {}
              :spittoon {:env (environment-mode file-config)
                         :recreate? false}})

   (alter-var-root #'system (constantly (hco/start (hco/system topology config))))))

(defn stop []
  (bk/stop)
  (alter-var-root #'system (fn [s] (when s (hco/stop system)))))

(defn reset []
  (stop)
  (start))
