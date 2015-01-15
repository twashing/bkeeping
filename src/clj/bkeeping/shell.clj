(ns bkeeping.shell
  (:require [bkell.bkell :as bk]
            [bkell.config :as config]))


(def environment-mode :dev)

(defn initialize-db []
  (bk/initialize-db "config.edn"))

(defn start []
  (bk/start {:bkell {}
             :spittoon {:env (environment-mode (config/load-edn "config.edn"))
                        :recreate? true}}))
