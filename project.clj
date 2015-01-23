(defproject bkeeping "0.1.0-SNAPSHOT"
  :description "A web frontend to the bkell, double-entry bookkeeping package"
  :url "http://bkeeping.com"
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.3"]
                 [clj-http "1.0.1"]
                 [environ "1.0.0"]
                 [cheshire "5.4.0"]
                 [slingshot "0.12.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [noisesmith/groundhog "0.0.4"]
                 [om "0.8.0-rc1"]
                 [sablono "0.2.22"]
                 [om-material-ui "0.1.0"]
                 [bkell "0.1.2" :exclusions [joda-time]]

                 ;; meant to override [clj-time "0.6.0"] in ring-core
                 [clj-time "0.8.0"]]

  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.3"] ;; 1.0.3 is a requirement
            ;;[jarohen/simple-brepl "0.2.1"]
            ;;[jarohen/simple-brepl "0.1.2"]
            ]

  :ring {:handler bkeeping.handler/app}

  :auto {:default {:file-pattern #"\.(clj|cljs|cljx|edn|coffee)$"}
         }
  :profiles {:dev {:source-paths ["src/cljs/" "src/clj/"]

                   :dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]

                   :resource-paths ["resources/public/"]}}

  :cljsbuild {:builds [{:id "bkeeping"

                        ;; The path to the top-level ClojureScript source directory:
                        :source-paths ["src/cljs/" "src/clj/"]

                        ;; The standard ClojureScript compiler options:
                        ;; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "resources/public/js/bkeeping.js"
                                   :output-dir "resources/public/js/out/"
                                   :source-map    "resources/public/js/out.js.map"
                                   :foreign-libs [{:file "https://login.persona.org/include.js"
                                                   :provides ["navigator"]}]
                                   :optimizations :none
                                   :pretty-print true}}]})
