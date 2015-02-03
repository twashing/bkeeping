// Compiled by ClojureScript 0.0-2505
goog.provide('util');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
util.console_log = (function console_log(message){
return console.log(message);
});
util.transitionAccounts = (function transitionAccounts(directionFn){
var as = gdom.getElement.call(null,"accounts");
return as.selected = directionFn.call(null,as.selected,(1));
});
goog.exportSymbol('util.transitionAccounts', util.transitionAccounts);
util.transitionAccountsForward = (function transitionAccountsForward(){
return util.transitionAccounts.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('util.transitionAccountsForward', util.transitionAccountsForward);
util.transitionAccountsBackward = (function transitionAccountsBackward(){
return util.transitionAccounts.call(null,cljs.core._);
});
goog.exportSymbol('util.transitionAccountsBackward', util.transitionAccountsBackward);
util.transitionEntries = (function transitionEntries(directionFn){
var es = gdom.getElement.call(null,"entries");
return es.selected = directionFn.call(null,es.selected,(1));
});
goog.exportSymbol('util.transitionEntries', util.transitionEntries);
util.transitionEntriesForward = (function transitionEntriesForward(){
return util.transitionEntries.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('util.transitionEntriesForward', util.transitionEntriesForward);
util.transitionEntriesBackward = (function transitionEntriesBackward(){
return util.transitionEntries.call(null,cljs.core._);
});
goog.exportSymbol('util.transitionEntriesBackward', util.transitionEntriesBackward);

//# sourceMappingURL=util.js.map