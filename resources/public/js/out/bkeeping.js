// Compiled by ClojureScript 0.0-2505
goog.provide('bkeeping');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.reader');
bkeeping.console_log = (function console_log(message){
return console.log(message);
});
bkeeping.transitionAccounts = (function transitionAccounts(directionFn){
var as = goog.dom.getElement("accounts");
return as.selected = directionFn.call(null,as.selected,(1));
});
goog.exportSymbol('bkeeping.transitionAccounts', bkeeping.transitionAccounts);
bkeeping.transitionAccountsForward = (function transitionAccountsForward(){
return bkeeping.transitionAccounts.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('bkeeping.transitionAccountsForward', bkeeping.transitionAccountsForward);
bkeeping.transitionAccountsBackward = (function transitionAccountsBackward(){
return bkeeping.transitionAccounts.call(null,cljs.core._);
});
goog.exportSymbol('bkeeping.transitionAccountsBackward', bkeeping.transitionAccountsBackward);
bkeeping.transitionEntries = (function transitionEntries(directionFn){
var es = goog.dom.getElement("entries");
return es.selected = directionFn.call(null,es.selected,(1));
});
goog.exportSymbol('bkeeping.transitionEntries', bkeeping.transitionEntries);
bkeeping.transitionEntriesForward = (function transitionEntriesForward(){
return bkeeping.transitionEntries.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('bkeeping.transitionEntriesForward', bkeeping.transitionEntriesForward);
bkeeping.transitionEntriesBackward = (function transitionEntriesBackward(){
return bkeeping.transitionEntries.call(null,cljs.core._);
});
goog.exportSymbol('bkeeping.transitionEntriesBackward', bkeeping.transitionEntriesBackward);
bkeeping.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
bkeeping.edn_xhr = (function edn_xhr(p__105594){
var map__105596 = p__105594;
var map__105596__$1 = ((cljs.core.seq_QMARK_.call(null,map__105596))?cljs.core.apply.call(null,cljs.core.hash_map,map__105596):map__105596);
var on_complete = cljs.core.get.call(null,map__105596__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__105596__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__105596__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__105596__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__105596,map__105596__$1,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__105596,map__105596__$1,on_complete,data,url,method))
);

return xhr.send(url,bkeeping.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
bkeeping.basicHandler = (function basicHandler(res){
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res))){
bkeeping.console_log.call(null,[cljs.core.str("XMLHttpRequest SUCCESS: "),cljs.core.str(res)].join(''));

return window.location.reload();
} else {
bkeeping.console_log.call(null,[cljs.core.str("XMLHttpRequest ERROR: "),cljs.core.str(res)].join(''));

return navigator.id.logout();
}
});
bkeeping.verifyAssertion = (function verifyAssertion(assertion){
bkeeping.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),bkeeping.basicHandler], null));
});
bkeeping.signoutUser = (function signoutUser(){
bkeeping.console_log.call(null,"signoutUser CALLED");

return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),bkeeping.basicHandler], null));
});

//# sourceMappingURL=bkeeping.js.map