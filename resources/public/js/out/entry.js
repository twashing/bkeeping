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
entry.one = (function one(entry__$1){
entry.entryF = entry__$1;

entry.two = (function two(){
var epart = cljs.core.get_in.call(null,entry__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(0)], null));
return om.core.transact_BANG_.call(null,epart,((function (epart){
return (function (x){
var resultF = cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"amount","amount",364489504),(2605));
bkeeping.console_log.call(null,[cljs.core.str("... resultF["),cljs.core.str(resultF),cljs.core.str("]")].join(''));

return resultF;
});})(epart))
);
});
goog.exportSymbol('entry.two', entry.two);

entry.three = (function three(){
return om.core.transact_BANG_.call(null,entry__$1,(function (x){
var resultF = cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY);
bkeeping.console_log.call(null,[cljs.core.str("... resultF["),cljs.core.str(resultF),cljs.core.str("]")].join(''));

return resultF;
}));
});
goog.exportSymbol('entry.three', entry.three);

entry.four = (function four(){
return bkeeping.console_log.call(null,[cljs.core.str("... entry["),cljs.core.str(cljs.core.deref.call(null,entry__$1)),cljs.core.str("]")].join(''));
});
goog.exportSymbol('entry.four', entry.four);
});
entry.parttype_from_selectedindex = (function parttype_from_selectedindex(idx){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"debit","debit",214956555),(1),new cljs.core.Keyword(null,"credit","credit",782856892)], null),idx);
});
entry.handle_type_change = (function handle_type_change(e,owner,idx){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"type","type",1174270348),idx);
});
entry.handle_amount_change = (function handle_amount_change(e,owner,p__99160){
var map__99162 = p__99160;
var map__99162__$1 = ((cljs.core.seq_QMARK_.call(null,map__99162))?cljs.core.apply.call(null,cljs.core.hash_map,map__99162):map__99162);
var amount = cljs.core.get.call(null,map__99162__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"amount","amount",364489504),e.target.value);
});
entry.entry_part_view = (function entry_part_view(parent_owner,p__99166,owner){
var vec__99171 = p__99166;
var idx = cljs.core.nth.call(null,vec__99171,(0),null);
var entry_part = cljs.core.nth.call(null,vec__99171,(1),null);
bkeeping.console_log.call(null,[cljs.core.str("entry-part-view... idx["),cljs.core.str(idx),cljs.core.str("] <==> entry["),cljs.core.str(entry_part),cljs.core.str("]")].join(''));

if(typeof entry.t99172 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t99172 = (function (entry_part,idx,vec__99171,owner,p__99166,parent_owner,entry_part_view,meta99173){
this.entry_part = entry_part;
this.idx = idx;
this.vec__99171 = vec__99171;
this.owner = owner;
this.p__99166 = p__99166;
this.parent_owner = parent_owner;
this.entry_part_view = entry_part_view;
this.meta99173 = meta99173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t99172.prototype.om$core$IRenderState$ = true;

entry.t99172.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__99171,idx,entry_part){
return (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-part-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1,vec__99171,idx,entry_part){
return (function (p1__99163_SHARP_,p2__99164_SHARP_){
return entry.handle_type_change.call(null,p1__99163_SHARP_,self__.owner,p2__99164_SHARP_);
});})(this$__$1,vec__99171,idx,entry_part))
), "menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"debit",new cljs.core.Keyword(null,"text","text",-1790561697),"Debit"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"credit",new cljs.core.Keyword(null,"text","text",-1790561697),"Credit"], null)], null))), "selectedIndex": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))))?(0):(1))), "autoWidth": false, "ref": "entry-part-type", "id": "entry-part-type"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a1",new cljs.core.Keyword(null,"text","text",-1790561697),"Account One"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a2",new cljs.core.Keyword(null,"text","text",-1790561697),"Account Two"], null)], null))), "selectedIndex": (1), "autoWidth": false, "ref": "entry-part-account", "id": "entry-part-account"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1,vec__99171,idx,entry_part){
return (function (p1__99165_SHARP_){
return entry.handle_amount_change.call(null,p1__99165_SHARP_,self__.owner,self__.entry_part);
});})(this$__$1,vec__99171,idx,entry_part))
), "defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part)), "ref": "entry-part-amount", "id": "entry-part-amount"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-part-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-part-save", "noink": true, "raised": true, "onClick": ((function (this$__$1,vec__99171,idx,entry_part){
return (function (e){
bkeeping.transitionEntriesBackward.call(null);

var pamount_99175 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));
var __99176 = bkeeping.console_log.call(null,"sanity 1... ",self__.idx);
var __99177__$1 = bkeeping.console_log.call(null,"sanity 2... ",parseFloat(pamount_99175));
cljs.core.swap_BANG_.call(null,entry.state2,((function (pamount_99175,__99176,__99177__$1,this$__$1,vec__99171,idx,entry_part){
return (function (inp){
return cljs.core.update_in.call(null,inp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),self__.idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"amount","amount",364489504),parseFloat(pamount_99175));
});})(pamount_99175,__99176,__99177__$1,this$__$1,vec__99171,idx,entry_part))
);

return om.core.refresh_BANG_.call(null,self__.parent_owner);
});})(this$__$1,vec__99171,idx,entry_part))
},"save")));
});})(vec__99171,idx,entry_part))
;

entry.t99172.prototype.om$core$IInitState$ = true;

entry.t99172.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__99171,idx,entry_part){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(self__.entry_part)], null);
});})(vec__99171,idx,entry_part))
;

entry.t99172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__99171,idx,entry_part){
return (function (_99174){
var self__ = this;
var _99174__$1 = this;
return self__.meta99173;
});})(vec__99171,idx,entry_part))
;

entry.t99172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__99171,idx,entry_part){
return (function (_99174,meta99173__$1){
var self__ = this;
var _99174__$1 = this;
return (new entry.t99172(self__.entry_part,self__.idx,self__.vec__99171,self__.owner,self__.p__99166,self__.parent_owner,self__.entry_part_view,meta99173__$1));
});})(vec__99171,idx,entry_part))
;

entry.t99172.cljs$lang$type = true;

entry.t99172.cljs$lang$ctorStr = "entry/t99172";

entry.t99172.cljs$lang$ctorPrWriter = ((function (vec__99171,idx,entry_part){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t99172");
});})(vec__99171,idx,entry_part))
;

entry.__GT_t99172 = ((function (vec__99171,idx,entry_part){
return (function __GT_t99172(entry_part__$1,idx__$1,vec__99171__$1,owner__$1,p__99166__$1,parent_owner__$1,entry_part_view__$1,meta99173){
return (new entry.t99172(entry_part__$1,idx__$1,vec__99171__$1,owner__$1,p__99166__$1,parent_owner__$1,entry_part_view__$1,meta99173));
});})(vec__99171,idx,entry_part))
;

}

return (new entry.t99172(entry_part,idx,vec__99171,owner,p__99166,parent_owner,entry_part_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),117,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.handle_currency_change = (function handle_currency_change(e,owner,state){
return bkeeping.console_log.call(null,[cljs.core.str("handle-currency-change / e["),cljs.core.str(e),cljs.core.str("] owner["),cljs.core.str(owner),cljs.core.str("] state["),cljs.core.str(state),cljs.core.str("]")].join(''));
});
entry.generate_entry_part_row = (function generate_entry_part_row(full,owner){
var vec__99179 = full;
var idx = cljs.core.nth.call(null,vec__99179,(0),null);
var ech = cljs.core.nth.call(null,vec__99179,(1),null);
var part_click_handler = ((function (vec__99179,idx,ech){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,cljs.core.partial.call(null,entry.entry_part_view,owner),full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-part-section")], null));
});})(vec__99179,idx,ech))
;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ech))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null)], null);
}
});
entry.entry_view = (function entry_view(entry__$1,owner){
entry.state2 = cljs.core.atom.call(null,cljs.core.deref.call(null,entry__$1));

if(typeof entry.t99193 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t99193 = (function (owner,entry,entry_view,meta99194){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta99194 = meta99194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t99193.prototype.om$core$IRenderState$ = true;

entry.t99193.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
bkeeping.console_log.call(null,[cljs.core.str("Entry - IRenderState... state["),cljs.core.str(cljs.core.deref.call(null,entry.state2)),cljs.core.str("]")].join(''));

return React.DOM.div({"id": "entry-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DatePicker({"formatDate": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (d){
return d.toISOString();
});})(this$__$1))
), "defaultDate": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entry.state2))), "name": "Date", "ref": "entry-details-date", "id": "entry-details-date"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"className": "entry-balance", "horizontal": true, "layout": true},"100.00"),sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"cdn",new cljs.core.Keyword(null,"text","text",-1790561697),"USD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"usd",new cljs.core.Keyword(null,"text","text",-1790561697),"CAD"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__99180_SHARP_,p2__99181_SHARP_){
return entry.handle_currency_change.call(null,p1__99180_SHARP_,self__.owner,p2__99181_SHARP_);
});})(this$__$1))
), "selectedIndex": (1), "autoWidth": false, "ref": "entry-details-currency", "id": "entry-details-currency"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.table({"className": "pure-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"debit"),React.DOM.th(null,"credit"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this$__$1){
return (function iter__99200(s__99201){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__99201__$1 = s__99201;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__99201__$1);
if(temp__4126__auto__){
var s__99201__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99201__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__99201__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__99203 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__99202 = (0);
while(true){
if((i__99202 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__99202);
cljs.core.chunk_append.call(null,b__99203,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech,self__.owner)));

var G__99204 = (i__99202 + (1));
i__99202 = G__99204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99203),iter__99200.call(null,cljs.core.chunk_rest.call(null,s__99201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99203),null);
}
} else {
var ech = cljs.core.first.call(null,s__99201__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech,self__.owner)),iter__99200.call(null,cljs.core.rest.call(null,s__99201__$2)));
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
return iter__4378__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4378__auto__,this$__$1){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__4378__auto__,this$__$1))
,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entry.state2))));
})())))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-details-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-details-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
bkeeping.transitionEntriesBackward.call(null);

return om.core.transact_BANG_.call(null,self__.entry,((function (this$__$1){
return (function (x){
return cljs.core.deref.call(null,entry.state2);
});})(this$__$1))
);
});})(this$__$1))
},"save")));
});

entry.t99193.prototype.om$core$IInitState$ = true;

entry.t99193.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.entry)], null);
});

entry.t99193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99195){
var self__ = this;
var _99195__$1 = this;
return self__.meta99194;
});

entry.t99193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99195,meta99194__$1){
var self__ = this;
var _99195__$1 = this;
return (new entry.t99193(self__.owner,self__.entry,self__.entry_view,meta99194__$1));
});

entry.t99193.cljs$lang$type = true;

entry.t99193.cljs$lang$ctorStr = "entry/t99193";

entry.t99193.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t99193");
});

entry.__GT_t99193 = (function __GT_t99193(owner__$1,entry__$2,entry_view__$1,meta99194){
return (new entry.t99193(owner__$1,entry__$2,entry_view__$1,meta99194));
});

}

return (new entry.t99193(owner,entry__$1,entry_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),211,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),148,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.entries_view = (function entries_view(state,owner){
if(typeof entry.t99214 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t99214 = (function (owner,state,entries_view,meta99215){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta99215 = meta99215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t99214.prototype.om$core$IRender$ = true;

entry.t99214.prototype.om$core$IRender$render$arity$1 = (function (this__9858__auto__){
var self__ = this;
var this__9858__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__9858__auto____$1){
return (function iter__99219(s__99220){
return (new cljs.core.LazySeq(null,((function (this__9858__auto____$1){
return (function (){
var s__99220__$1 = s__99220;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__99220__$1);
if(temp__4126__auto__){
var s__99220__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99220__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__99220__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__99222 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__99221 = (0);
while(true){
if((i__99221 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__99221);
cljs.core.chunk_append.call(null,b__99222,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__99221,ech,c__4376__auto__,size__4377__auto__,b__99222,s__99220__$2,temp__4126__auto__,this__9858__auto____$1){
return (function (e){
entry.one.call(null,ech);

bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__99221,ech,c__4376__auto__,size__4377__auto__,b__99222,s__99220__$2,temp__4126__auto__,this__9858__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__99223 = (i__99221 + (1));
i__99221 = G__99223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99222),iter__99219.call(null,cljs.core.chunk_rest.call(null,s__99220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99222),null);
}
} else {
var ech = cljs.core.first.call(null,s__99220__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__99220__$2,temp__4126__auto__,this__9858__auto____$1){
return (function (e){
entry.one.call(null,ech);

bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__99220__$2,temp__4126__auto__,this__9858__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__99219.call(null,cljs.core.rest.call(null,s__99220__$2)));
}
} else {
return null;
}
break;
}
});})(this__9858__auto____$1))
,null,null));
});})(this__9858__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(self__.state))));
})()));
});

entry.t99214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99216){
var self__ = this;
var _99216__$1 = this;
return self__.meta99215;
});

entry.t99214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99216,meta99215__$1){
var self__ = this;
var _99216__$1 = this;
return (new entry.t99214(self__.owner,self__.state,self__.entries_view,meta99215__$1));
});

entry.t99214.cljs$lang$type = true;

entry.t99214.cljs$lang$ctorStr = "entry/t99214";

entry.t99214.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t99214");
});

entry.__GT_t99214 = (function __GT_t99214(owner__$1,state__$1,entries_view__$1,meta99215){
return (new entry.t99214(owner__$1,state__$1,entries_view__$1,meta99215));
});

}

return (new entry.t99214(owner,state,entries_view,null));
});

//# sourceMappingURL=entry.js.map