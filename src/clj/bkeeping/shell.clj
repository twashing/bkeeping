(ns bkeeping.shell
  (:require [alembic.still]
            [hara.component :as hco]
            [bkell.bkell :as bk]
            [bkell.config :as config]
            [bkeeping.component.server :as cs]))


(defn reload-project []
  (alembic.still/load-project))

(def file-config (config/load-edn "config-bkeeping.edn"))

(def environment-mode :dev)
(def system nil)
(def topology {:server [cs/map->Server]})
(def component-config   {:server {}})

(defn start
  ([] (start component-config))
  ([config]

   (bk/start {:bkell {}
              :spittoon {:env (environment-mode (config/load-edn "config.edn"))
                         :recreate? false}})

   (alter-var-root #'system (constantly (hco/start (hco/system topology config))))))

(defn stop []
  (bk/stop)
  (alter-var-root #'system (fn [s] (when s (hco/stop system)))))

(defn reset []
  (stop)
  (start))
