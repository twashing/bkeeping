// Compiled by ClojureScript 0.0-2505
goog.provide('bkeeping');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('util');
goog.require('goog.events');
bkeeping.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
bkeeping.edn_xhr = (function edn_xhr(p__34435){
var map__34437 = p__34435;
var map__34437__$1 = ((cljs.core.seq_QMARK_.call(null,map__34437))?cljs.core.apply.call(null,cljs.core.hash_map,map__34437):map__34437);
var on_complete = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__34437,map__34437__$1,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,e,xhr);
});})(xhr,map__34437,map__34437__$1,on_complete,data,url,method))
);

return xhr.send(url,bkeeping.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
bkeeping.basicHandler = (function basicHandler(handlefn,e,xhr){
var res = xhr.getResponseText();
var status = xhr.getStatus();
util.console_log.call(null,[cljs.core.str("basicHandler response: "),cljs.core.str(res)].join(''));

if(cljs.core._EQ_.call(null,(200),status)){
util.console_log.call(null,[cljs.core.str("XMLHttpRequest SUCCESS: "),cljs.core.str(res)].join(''));

return handlefn.call(null,e,xhr);
} else {
util.console_log.call(null,[cljs.core.str("XMLHttpRequest ERROR: "),cljs.core.str(res)].join(''));

return navigator.id.logout();
}
});

//# sourceMappingURL=bkeeping.js.map