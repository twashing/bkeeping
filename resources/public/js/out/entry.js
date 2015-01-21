// Compiled by ClojureScript 0.0-2505
goog.provide('entry');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('account');
goog.require('om.core');
entry.entry_view = (function entry_view(entry__$1,owner){
if(typeof entry.t13387 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t13387 = (function (owner,entry,entry_view,meta13388){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta13388 = meta13388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t13387.prototype.om$core$IRender$ = true;

entry.t13387.prototype.om$core$IRender$render$arity$1 = (function (this__8580__auto__){
var self__ = this;
var this__8580__auto____$1 = this;
return React.DOM.div(null,"fubar");
});

entry.t13387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13389){
var self__ = this;
var _13389__$1 = this;
return self__.meta13388;
});

entry.t13387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13389,meta13388__$1){
var self__ = this;
var _13389__$1 = this;
return (new entry.t13387(self__.owner,self__.entry,self__.entry_view,meta13388__$1));
});

entry.t13387.cljs$lang$type = true;

entry.t13387.cljs$lang$ctorStr = "entry/t13387";

entry.t13387.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t13387");
});

entry.__GT_t13387 = (function __GT_t13387(owner__$1,entry__$2,entry_view__$1,meta13388){
return (new entry.t13387(owner__$1,entry__$2,entry_view__$1,meta13388));
});

}

return (new entry.t13387(owner,entry__$1,entry_view,null));
});
entry.entries_view = (function entries_view(state,owner){
if(typeof entry.t13401 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t13401 = (function (owner,state,entries_view,meta13402){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta13402 = meta13402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t13401.prototype.om$core$IRender$ = true;

entry.t13401.prototype.om$core$IRender$render$arity$1 = (function (this__8580__auto__){
var self__ = this;
var this__8580__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__8580__auto____$1){
return (function iter__13406(s__13407){
return (new cljs.core.LazySeq(null,((function (this__8580__auto____$1){
return (function (){
var s__13407__$1 = s__13407;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13407__$1);
if(temp__4126__auto__){
var s__13407__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13407__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__13407__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__13409 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__13408 = (0);
while(true){
if((i__13408 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__13408);
cljs.core.chunk_append.call(null,b__13409,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__13408,ech,c__4376__auto__,size__4377__auto__,b__13409,s__13407__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__13408,ech,c__4376__auto__,size__4377__auto__,b__13409,s__13407__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__13410 = (i__13408 + (1));
i__13408 = G__13410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13409),iter__13406.call(null,cljs.core.chunk_rest.call(null,s__13407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13409),null);
}
} else {
var ech = cljs.core.first.call(null,s__13407__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__13407__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__13407__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__13406.call(null,cljs.core.rest.call(null,s__13407__$2)));
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

entry.t13401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13403){
var self__ = this;
var _13403__$1 = this;
return self__.meta13402;
});

entry.t13401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13403,meta13402__$1){
var self__ = this;
var _13403__$1 = this;
return (new entry.t13401(self__.owner,self__.state,self__.entries_view,meta13402__$1));
});

entry.t13401.cljs$lang$type = true;

entry.t13401.cljs$lang$ctorStr = "entry/t13401";

entry.t13401.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t13401");
});

entry.__GT_t13401 = (function __GT_t13401(owner__$1,state__$1,entries_view__$1,meta13402){
return (new entry.t13401(owner__$1,state__$1,entries_view__$1,meta13402));
});

}

return (new entry.t13401(owner,state,entries_view,null));
});

//# sourceMappingURL=entry.js.map