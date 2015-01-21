// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('account');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
landing.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null)], null),new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], null)], null)], null)], null));
landing.entry_view = (function entry_view(entry,owner){
if(typeof landing.t13329 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t13329 = (function (owner,entry,entry_view,meta13330){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta13330 = meta13330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t13329.prototype.om$core$IRender$ = true;

landing.t13329.prototype.om$core$IRender$render$arity$1 = (function (this__8580__auto__){
var self__ = this;
var this__8580__auto____$1 = this;
return React.DOM.div(null,"fubar");
});

landing.t13329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13331){
var self__ = this;
var _13331__$1 = this;
return self__.meta13330;
});

landing.t13329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13331,meta13330__$1){
var self__ = this;
var _13331__$1 = this;
return (new landing.t13329(self__.owner,self__.entry,self__.entry_view,meta13330__$1));
});

landing.t13329.cljs$lang$type = true;

landing.t13329.cljs$lang$ctorStr = "landing/t13329";

landing.t13329.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t13329");
});

landing.__GT_t13329 = (function __GT_t13329(owner__$1,entry__$1,entry_view__$1,meta13330){
return (new landing.t13329(owner__$1,entry__$1,entry_view__$1,meta13330));
});

}

return (new landing.t13329(owner,entry,entry_view,null));
});
landing.entries_view = (function entries_view(state,owner){
if(typeof landing.t13343 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t13343 = (function (owner,state,entries_view,meta13344){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta13344 = meta13344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t13343.prototype.om$core$IRender$ = true;

landing.t13343.prototype.om$core$IRender$render$arity$1 = (function (this__8580__auto__){
var self__ = this;
var this__8580__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__8580__auto____$1){
return (function iter__13348(s__13349){
return (new cljs.core.LazySeq(null,((function (this__8580__auto____$1){
return (function (){
var s__13349__$1 = s__13349;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13349__$1);
if(temp__4126__auto__){
var s__13349__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13349__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__13349__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__13351 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__13350 = (0);
while(true){
if((i__13350 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__13350);
cljs.core.chunk_append.call(null,b__13351,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__13350,ech,c__4376__auto__,size__4377__auto__,b__13351,s__13349__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,landing.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__13350,ech,c__4376__auto__,size__4377__auto__,b__13351,s__13349__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__13352 = (i__13350 + (1));
i__13350 = G__13352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13351),iter__13348.call(null,cljs.core.chunk_rest.call(null,s__13349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13351),null);
}
} else {
var ech = cljs.core.first.call(null,s__13349__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__13349__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,landing.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__13349__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__13348.call(null,cljs.core.rest.call(null,s__13349__$2)));
}
} else {
return null;
}
break;
}
});})(this__8580__auto____$1))
,null,null));
});})(this__8580__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(self__.state))));
})()));
});

landing.t13343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13345){
var self__ = this;
var _13345__$1 = this;
return self__.meta13344;
});

landing.t13343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13345,meta13344__$1){
var self__ = this;
var _13345__$1 = this;
return (new landing.t13343(self__.owner,self__.state,self__.entries_view,meta13344__$1));
});

landing.t13343.cljs$lang$type = true;

landing.t13343.cljs$lang$ctorStr = "landing/t13343";

landing.t13343.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t13343");
});

landing.__GT_t13343 = (function __GT_t13343(owner__$1,state__$1,entries_view__$1,meta13344){
return (new landing.t13343(owner__$1,state__$1,entries_view__$1,meta13344));
});

}

return (new landing.t13343(owner,state,entries_view,null));
});
setTimeout((function (){
om.core.root.call(null,account.accounts_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));

return om.core.root.call(null,landing.entries_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entries-section")], null));
}),(2000));

//# sourceMappingURL=landing.js.map