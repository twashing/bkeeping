(ns kom
  (:refer-clojure :exclude [map meta time]))

(def tags '[core-header-panel
            core-toolbar
            core-scaffold
            core-animated-pages
            paper-button
            paper-dropdown-menu
            paper-dropdown
            core-menu
            paper-item
            div])


(defn gen-react-dom-inline-fn [tag]
  `(defmacro ~tag [opts# & children#]
     `(~'~(symbol "js" (str "React.DOM." (name tag))) ~opts# ~@children#)))

(defmacro gen-react-dom-inline-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-inline-fn tags)))

(gen-react-dom-inline-fns)

(defn gen-react-dom-fn [tag]
  `(defn ~tag [opts# & children#]
     (.apply ~(symbol "js" (str "React.DOM." (name tag))) nil (cljs.core/into-array (cons opts# children#)))))

(defmacro gen-react-dom-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-fn tags)))
