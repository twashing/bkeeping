(defproject bkeeping "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.2"]
                 [ring/ring-defaults "0.1.2"]
                 [clj-http "1.0.1"]
                 [environ "1.0.0"]
                 [cheshire "5.3.1"]
                 [slingshot "0.12.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [bkell "0.1.0-SNAPSHOT" :exclusions [joda-time]]

                 ;; meant to override [clj-time "0.6.0"] in ring-core
                 [clj-time "0.8.0"]]

  :plugins [[lein-ring "0.8.13"]]
  :ring {:handler bkeeping.core.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]
                   :resource-paths ["resources/public/"]}})
