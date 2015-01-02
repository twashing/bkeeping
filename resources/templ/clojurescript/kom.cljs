(ns kom
  (:refer-clojure :exclude [map meta time])
  (:require-macros [kom]))


(kom/gen-react-dom-fns)

(defn fubar [] "fubar")
