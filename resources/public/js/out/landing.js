// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
landing.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null)], null),new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], null)], null)], null)], null));
setTimeout((function (){
return om.core.root.call(null,(function (app,owner){
if(typeof landing.t11961 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t11961 = (function (owner,app,meta11962){
this.owner = owner;
this.app = app;
this.meta11962 = meta11962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t11961.prototype.om$core$IRender$ = true;

landing.t11961.prototype.om$core$IRender$render$arity$1 = (function (this__7189__auto__){
var self__ = this;
var this__7189__auto____$1 = this;
return React.DOM.div({"id": "accounts-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7189__auto____$1){
return (function iter__11966(s__11967){
return (new cljs.core.LazySeq(null,((function (this__7189__auto____$1){
return (function (){
var s__11967__$1 = s__11967;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11967__$1);
if(temp__4126__auto__){
var s__11967__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11967__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11967__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11969 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11968 = (0);
while(true){
if((i__11968 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__11968);
cljs.core.chunk_append.call(null,b__11969,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__11970 = (i__11968 + (1));
i__11968 = G__11970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11969),iter__11966.call(null,cljs.core.chunk_rest.call(null,s__11967__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11969),null);
}
} else {
var ech = cljs.core.first.call(null,s__11967__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))),iter__11966.call(null,cljs.core.rest.call(null,s__11967__$2)));
}
} else {
return null;
}
break;
}
});})(this__7189__auto____$1))
,null,null));
});})(this__7189__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.app));
})()));
});

landing.t11961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11963){
var self__ = this;
var _11963__$1 = this;
return self__.meta11962;
});

landing.t11961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11963,meta11962__$1){
var self__ = this;
var _11963__$1 = this;
return (new landing.t11961(self__.owner,self__.app,meta11962__$1));
});

landing.t11961.cljs$lang$type = true;

landing.t11961.cljs$lang$ctorStr = "landing/t11961";

landing.t11961.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t11961");
});

landing.__GT_t11961 = (function __GT_t11961(owner__$1,app__$1,meta11962){
return (new landing.t11961(owner__$1,app__$1,meta11962));
});

}

return (new landing.t11961(owner,app,null));
}),landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));
}),(2000));
landing.changeme = (function changeme(inp){
return cljs.core.swap_BANG_.call(null,landing.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),inp);
});
goog.exportSymbol('landing.changeme', landing.changeme);

//# sourceMappingURL=landing.js.map