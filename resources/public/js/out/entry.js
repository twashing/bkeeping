// Compiled by ClojureScript 0.0-2505
goog.provide('entry');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('goog.string');
goog.require('account');
goog.require('om.core');
entry.entry_part_view = (function entry_part_view(entry__$1,owner){
if(typeof entry.t12585 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t12585 = (function (owner,entry,entry_part_view,meta12586){
this.owner = owner;
this.entry = entry;
this.entry_part_view = entry_part_view;
this.meta12586 = meta12586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t12585.prototype.om$core$IRenderState$ = true;

entry.t12585.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-part-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"debit",new cljs.core.Keyword(null,"text","text",-1790561697),"Debit"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"credit",new cljs.core.Keyword(null,"text","text",-1790561697),"Credit"], null)], null))), "selectedIndex": om_tools.dom.format_opts.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))), "autoWidth": false, "ref": "entry-part-type", "id": "entry-part-type"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a1",new cljs.core.Keyword(null,"text","text",-1790561697),"Account One"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a2",new cljs.core.Keyword(null,"text","text",-1790561697),"Account Two"], null)], null))), "selectedIndex": om_tools.dom.format_opts.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))), "autoWidth": false, "ref": "entry-part-account", "id": "entry-part-account"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry)), "ref": "entry-part-amount", "id": "entry-part-amount"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-part-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-part-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
return bkeeping.transitionEntriesBackward.call(null);
});})(this$__$1))
},"save")));
});

entry.t12585.prototype.om$core$IInitState$ = true;

entry.t12585.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"type","type",1174270348),""], null);
});

entry.t12585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12587){
var self__ = this;
var _12587__$1 = this;
return self__.meta12586;
});

entry.t12585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12587,meta12586__$1){
var self__ = this;
var _12587__$1 = this;
return (new entry.t12585(self__.owner,self__.entry,self__.entry_part_view,meta12586__$1));
});

entry.t12585.cljs$lang$type = true;

entry.t12585.cljs$lang$ctorStr = "entry/t12585";

entry.t12585.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t12585");
});

entry.__GT_t12585 = (function __GT_t12585(owner__$1,entry__$2,entry_part_view__$1,meta12586){
return (new entry.t12585(owner__$1,entry__$2,entry_part_view__$1,meta12586));
});

}

return (new entry.t12585(owner,entry__$1,entry_part_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),66,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.handle_currency_change = (function handle_currency_change(e,owner,state){
return bkeeping.console_log.call(null,[cljs.core.str("handle-currency-change / e["),cljs.core.str(e),cljs.core.str("] owner["),cljs.core.str(owner),cljs.core.str("] state["),cljs.core.str(state),cljs.core.str("]")].join(''));
});
entry.generate_entry_part_row = (function generate_entry_part_row(ech){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ech))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return bkeeping.transitionEntriesForward.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_part_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-part-section")], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null)], null);
}
});
entry.entry_view = (function entry_view(entry__$1,owner){
if(typeof entry.t12601 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t12601 = (function (owner,entry,entry_view,meta12602){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta12602 = meta12602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t12601.prototype.om$core$IRenderState$ = true;

entry.t12601.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DatePicker({"inlinePlaceholder": true, "name": "Date", "ref": "entry-details-date", "id": "entry-details-date"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"className": "entry-balance", "horizontal": true, "layout": true},"100.00"),sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"cdn",new cljs.core.Keyword(null,"text","text",-1790561697),"USD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"usd",new cljs.core.Keyword(null,"text","text",-1790561697),"CAD"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__12588_SHARP_,p2__12589_SHARP_){
return entry.handle_currency_change.call(null,p1__12588_SHARP_,self__.owner,p2__12589_SHARP_);
});})(this$__$1))
), "selectedIndex": (1), "autoWidth": false, "ref": "entry-details-currency", "id": "entry-details-currency"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.table({"className": "pure-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"debit"),React.DOM.th(null,"credit"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this$__$1){
return (function iter__12608(s__12609){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__12609__$1 = s__12609;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12609__$1);
if(temp__4126__auto__){
var s__12609__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12609__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__12609__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__12611 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__12610 = (0);
while(true){
if((i__12610 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__12610);
cljs.core.chunk_append.call(null,b__12611,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech)));

var G__12612 = (i__12610 + (1));
i__12610 = G__12612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12611),iter__12608.call(null,cljs.core.chunk_rest.call(null,s__12609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12611),null);
}
} else {
var ech = cljs.core.first.call(null,s__12609__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech)),iter__12608.call(null,cljs.core.rest.call(null,s__12609__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.entry));
})())))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-details-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-details-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
return bkeeping.transitionEntriesBackward.call(null);
});})(this$__$1))
},"save")));
});

entry.t12601.prototype.om$core$IInitState$ = true;

entry.t12601.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.entry)], null);
});

entry.t12601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12603){
var self__ = this;
var _12603__$1 = this;
return self__.meta12602;
});

entry.t12601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12603,meta12602__$1){
var self__ = this;
var _12603__$1 = this;
return (new entry.t12601(self__.owner,self__.entry,self__.entry_view,meta12602__$1));
});

entry.t12601.cljs$lang$type = true;

entry.t12601.cljs$lang$ctorStr = "entry/t12601";

entry.t12601.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t12601");
});

entry.__GT_t12601 = (function __GT_t12601(owner__$1,entry__$2,entry_view__$1,meta12602){
return (new entry.t12601(owner__$1,entry__$2,entry_view__$1,meta12602));
});

}

return (new entry.t12601(owner,entry__$1,entry_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),152,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),92,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.entries_view = (function entries_view(state,owner){
if(typeof entry.t12622 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t12622 = (function (owner,state,entries_view,meta12623){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta12623 = meta12623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t12622.prototype.om$core$IRender$ = true;

entry.t12622.prototype.om$core$IRender$render$arity$1 = (function (this__8593__auto__){
var self__ = this;
var this__8593__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__8593__auto____$1){
return (function iter__12627(s__12628){
return (new cljs.core.LazySeq(null,((function (this__8593__auto____$1){
return (function (){
var s__12628__$1 = s__12628;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12628__$1);
if(temp__4126__auto__){
var s__12628__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12628__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__12628__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__12630 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__12629 = (0);
while(true){
if((i__12629 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__12629);
cljs.core.chunk_append.call(null,b__12630,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__12629,ech,c__4376__auto__,size__4377__auto__,b__12630,s__12628__$2,temp__4126__auto__,this__8593__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__12629,ech,c__4376__auto__,size__4377__auto__,b__12630,s__12628__$2,temp__4126__auto__,this__8593__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__12631 = (i__12629 + (1));
i__12629 = G__12631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12630),iter__12627.call(null,cljs.core.chunk_rest.call(null,s__12628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12630),null);
}
} else {
var ech = cljs.core.first.call(null,s__12628__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__12628__$2,temp__4126__auto__,this__8593__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__12628__$2,temp__4126__auto__,this__8593__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__12627.call(null,cljs.core.rest.call(null,s__12628__$2)));
}
} else {
return null;
}
break;
}
});})(this__8593__auto____$1))
,null,null));
});})(this__8593__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(self__.state))));
})()));
});

entry.t12622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12624){
var self__ = this;
var _12624__$1 = this;
return self__.meta12623;
});

entry.t12622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12624,meta12623__$1){
var self__ = this;
var _12624__$1 = this;
return (new entry.t12622(self__.owner,self__.state,self__.entries_view,meta12623__$1));
});

entry.t12622.cljs$lang$type = true;

entry.t12622.cljs$lang$ctorStr = "entry/t12622";

entry.t12622.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t12622");
});

entry.__GT_t12622 = (function __GT_t12622(owner__$1,state__$1,entries_view__$1,meta12623){
return (new entry.t12622(owner__$1,state__$1,entries_view__$1,meta12623));
});

}

return (new entry.t12622(owner,state,entries_view,null));
});

//# sourceMappingURL=entry.js.map