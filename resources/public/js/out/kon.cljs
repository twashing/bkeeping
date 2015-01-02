(ns kon
  (:require [kom])
  (:require-macros [kom]))


(kom/gen-react-dom-fns)

(defn fubar []
  (kom/fubar))
