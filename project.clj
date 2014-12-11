(defproject bkeeping "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [clj-http "1.0.1"]
                 [environ "1.0.0"]
                 [cheshire "5.4.0"]
                 [slingshot "0.12.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [com.cemerick/piggieback "0.1.3"]
                 [cljs-ajax "0.3.3"]
                 [bkell "0.1.0-SNAPSHOT" :exclusions [joda-time]]

                 ;; meant to override [clj-time "0.6.0"] in ring-core
                 [clj-time "0.8.0"]]

  :plugins [[lein-ring "0.8.13"]]
  :ring {:handler bkeeping.core.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]
                   :resource-paths ["resources/public/"]}}

  :cljsbuild {:builds [{:id "bkeeping"

                        ;; The path to the top-level ClojureScript source directory:
                        :source-paths ["resources/templ/clojurescript/"]

                        ;; The standard ClojureScript compiler options:
                        ;; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "resources/public/js/bkeeping.js"
                                   :output-dir "resources/public/js/out/"
                                   :source-map    "resources/public/js/out.js.map"
                                   :foreign-libs [{:file "https://login.persona.org/include.js"
                                                   :provides ["navigator"]}]
                                   :optimizations :simple
                                   :pretty-print true}}]})
