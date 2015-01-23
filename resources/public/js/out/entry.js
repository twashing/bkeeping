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
entry.entry_part_view = (function entry_part_view(entry_part,owner){
if(typeof entry.t9776 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t9776 = (function (owner,entry_part,entry_part_view,meta9777){
this.owner = owner;
this.entry_part = entry_part;
this.entry_part_view = entry_part_view;
this.meta9777 = meta9777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t9776.prototype.om$core$IRenderState$ = true;

entry.t9776.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-part-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"debit",new cljs.core.Keyword(null,"text","text",-1790561697),"Debit"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"credit",new cljs.core.Keyword(null,"text","text",-1790561697),"Credit"], null)], null))), "selectedIndex": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))))?(0):(1))), "autoWidth": false, "ref": "entry-part-type", "id": "entry-part-type"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a1",new cljs.core.Keyword(null,"text","text",-1790561697),"Account One"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a2",new cljs.core.Keyword(null,"text","text",-1790561697),"Account Two"], null)], null))), "selectedIndex": (1), "autoWidth": false, "ref": "entry-part-account", "id": "entry-part-account"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part)), "ref": "entry-part-amount", "id": "entry-part-amount"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-part-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-part-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
return bkeeping.transitionEntriesBackward.call(null);
});})(this$__$1))
},"save")));
});

entry.t9776.prototype.om$core$IInitState$ = true;

entry.t9776.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(self__.entry_part)], null);
});

entry.t9776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9778){
var self__ = this;
var _9778__$1 = this;
return self__.meta9777;
});

entry.t9776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9778,meta9777__$1){
var self__ = this;
var _9778__$1 = this;
return (new entry.t9776(self__.owner,self__.entry_part,self__.entry_part_view,meta9777__$1));
});

entry.t9776.cljs$lang$type = true;

entry.t9776.cljs$lang$ctorStr = "entry/t9776";

entry.t9776.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t9776");
});

entry.__GT_t9776 = (function __GT_t9776(owner__$1,entry_part__$1,entry_part_view__$1,meta9777){
return (new entry.t9776(owner__$1,entry_part__$1,entry_part_view__$1,meta9777));
});

}

return (new entry.t9776(owner,entry_part,entry_part_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),73,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.handle_currency_change = (function handle_currency_change(e,owner,state){
return bkeeping.console_log.call(null,[cljs.core.str("handle-currency-change / e["),cljs.core.str(e),cljs.core.str("] owner["),cljs.core.str(owner),cljs.core.str("] state["),cljs.core.str(state),cljs.core.str("]")].join(''));
});
entry.generate_entry_part_row = (function generate_entry_part_row(ech){
var part_click_handler = (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_part_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-part-section")], null));
});
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ech))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null)], null);
}
});
entry.entry_view = (function entry_view(entry__$1,owner){
if(typeof entry.t9792 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t9792 = (function (owner,entry,entry_view,meta9793){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta9793 = meta9793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t9792.prototype.om$core$IRenderState$ = true;

entry.t9792.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DatePicker({"formatDate": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (d){
return d.toISOString();
});})(this$__$1))
), "defaultDate": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry)), "name": "Date", "ref": "entry-details-date", "id": "entry-details-date"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"className": "entry-balance", "horizontal": true, "layout": true},"100.00"),sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"cdn",new cljs.core.Keyword(null,"text","text",-1790561697),"USD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"usd",new cljs.core.Keyword(null,"text","text",-1790561697),"CAD"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__9779_SHARP_,p2__9780_SHARP_){
return entry.handle_currency_change.call(null,p1__9779_SHARP_,self__.owner,p2__9780_SHARP_);
});})(this$__$1))
), "selectedIndex": (1), "autoWidth": false, "ref": "entry-details-currency", "id": "entry-details-currency"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.table({"className": "pure-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"debit"),React.DOM.th(null,"credit"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this$__$1){
return (function iter__9799(s__9800){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__9800__$1 = s__9800;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9800__$1);
if(temp__4126__auto__){
var s__9800__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9800__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__9800__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__9802 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__9801 = (0);
while(true){
if((i__9801 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__9801);
cljs.core.chunk_append.call(null,b__9802,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech)));

var G__9803 = (i__9801 + (1));
i__9801 = G__9803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9802),iter__9799.call(null,cljs.core.chunk_rest.call(null,s__9800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9802),null);
}
} else {
var ech = cljs.core.first.call(null,s__9800__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech)),iter__9799.call(null,cljs.core.rest.call(null,s__9800__$2)));
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
bkeeping.transitionEntriesBackward.call(null);

return om.core.transact_BANG_.call(null,self__.entry,((function (this$__$1){
return (function (x){
var resultF = cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(document.getElementById("entry-details-date").value)),new cljs.core.Keyword(null,"content","content",15833224),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"content","content",15833224)));
return resultF;
});})(this$__$1))
);
});})(this$__$1))
},"save")));
});

entry.t9792.prototype.om$core$IInitState$ = true;

entry.t9792.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.entry)], null);
});

entry.t9792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9794){
var self__ = this;
var _9794__$1 = this;
return self__.meta9793;
});

entry.t9792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9794,meta9793__$1){
var self__ = this;
var _9794__$1 = this;
return (new entry.t9792(self__.owner,self__.entry,self__.entry_view,meta9793__$1));
});

entry.t9792.cljs$lang$type = true;

entry.t9792.cljs$lang$ctorStr = "entry/t9792";

entry.t9792.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t9792");
});

entry.__GT_t9792 = (function __GT_t9792(owner__$1,entry__$2,entry_view__$1,meta9793){
return (new entry.t9792(owner__$1,entry__$2,entry_view__$1,meta9793));
});

}

return (new entry.t9792(owner,entry__$1,entry_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),164,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),100,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.entries_view = (function entries_view(state,owner){
if(typeof entry.t9813 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t9813 = (function (owner,state,entries_view,meta9814){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta9814 = meta9814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t9813.prototype.om$core$IRender$ = true;

entry.t9813.prototype.om$core$IRender$render$arity$1 = (function (this__8590__auto__){
var self__ = this;
var this__8590__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__8590__auto____$1){
return (function iter__9818(s__9819){
return (new cljs.core.LazySeq(null,((function (this__8590__auto____$1){
return (function (){
var s__9819__$1 = s__9819;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9819__$1);
if(temp__4126__auto__){
var s__9819__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9819__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__9819__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__9821 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__9820 = (0);
while(true){
if((i__9820 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__9820);
cljs.core.chunk_append.call(null,b__9821,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__9820,ech,c__4376__auto__,size__4377__auto__,b__9821,s__9819__$2,temp__4126__auto__,this__8590__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__9820,ech,c__4376__auto__,size__4377__auto__,b__9821,s__9819__$2,temp__4126__auto__,this__8590__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__9822 = (i__9820 + (1));
i__9820 = G__9822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9821),iter__9818.call(null,cljs.core.chunk_rest.call(null,s__9819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9821),null);
}
} else {
var ech = cljs.core.first.call(null,s__9819__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__9819__$2,temp__4126__auto__,this__8590__auto____$1){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__9819__$2,temp__4126__auto__,this__8590__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__9818.call(null,cljs.core.rest.call(null,s__9819__$2)));
}
} else {
return null;
}
break;
}
});})(this__8590__auto____$1))
,null,null));
});})(this__8590__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(self__.state))));
})()));
});

entry.t9813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9815){
var self__ = this;
var _9815__$1 = this;
return self__.meta9814;
});

entry.t9813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9815,meta9814__$1){
var self__ = this;
var _9815__$1 = this;
return (new entry.t9813(self__.owner,self__.state,self__.entries_view,meta9814__$1));
});

entry.t9813.cljs$lang$type = true;

entry.t9813.cljs$lang$ctorStr = "entry/t9813";

entry.t9813.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t9813");
});

entry.__GT_t9813 = (function __GT_t9813(owner__$1,state__$1,entries_view__$1,meta9814){
return (new entry.t9813(owner__$1,state__$1,entries_view__$1,meta9814));
});

}

return (new entry.t9813(owner,state,entries_view,null));
});

//# sourceMappingURL=entry.js.map