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
entry.handle_amount_change = (function handle_amount_change(e,owner,p__21460){
var map__21462 = p__21460;
var map__21462__$1 = ((cljs.core.seq_QMARK_.call(null,map__21462))?cljs.core.apply.call(null,cljs.core.hash_map,map__21462):map__21462);
var amount = cljs.core.get.call(null,map__21462__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"amount","amount",364489504),e.target.value);
});
entry.entry_part_view = (function entry_part_view(parent_owner,p__21466,owner){
var vec__21471 = p__21466;
var idx = cljs.core.nth.call(null,vec__21471,(0),null);
var entry_part = cljs.core.nth.call(null,vec__21471,(1),null);
bkeeping.console_log.call(null,[cljs.core.str("entry-part-view... idx["),cljs.core.str(idx),cljs.core.str("] <==> entry["),cljs.core.str(entry_part),cljs.core.str("]")].join(''));

if(typeof entry.t21472 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t21472 = (function (entry_part,idx,vec__21471,owner,p__21466,parent_owner,entry_part_view,meta21473){
this.entry_part = entry_part;
this.idx = idx;
this.vec__21471 = vec__21471;
this.owner = owner;
this.p__21466 = p__21466;
this.parent_owner = parent_owner;
this.entry_part_view = entry_part_view;
this.meta21473 = meta21473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t21472.prototype.om$core$IRenderState$ = true;

entry.t21472.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__21471,idx,entry_part){
return (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "entry-details-part-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1,vec__21471,idx,entry_part){
return (function (p1__21463_SHARP_,p2__21464_SHARP_){
return entry.handle_type_change.call(null,p1__21463_SHARP_,self__.owner,p2__21464_SHARP_);
});})(this$__$1,vec__21471,idx,entry_part))
), "menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"debit",new cljs.core.Keyword(null,"text","text",-1790561697),"Debit"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"credit",new cljs.core.Keyword(null,"text","text",-1790561697),"Credit"], null)], null))), "selectedIndex": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))))?(0):(1))), "autoWidth": false, "ref": "entry-part-type", "id": "entry-part-type"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a1",new cljs.core.Keyword(null,"text","text",-1790561697),"Account One"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"a2",new cljs.core.Keyword(null,"text","text",-1790561697),"Account Two"], null)], null))), "selectedIndex": (1), "autoWidth": false, "ref": "entry-part-account", "id": "entry-part-account"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1,vec__21471,idx,entry_part){
return (function (p1__21465_SHARP_){
return entry.handle_amount_change.call(null,p1__21465_SHARP_,self__.owner,self__.entry_part);
});})(this$__$1,vec__21471,idx,entry_part))
), "defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part)), "ref": "entry-part-amount", "id": "entry-part-amount"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "entry-part-cancel", "noink": true, "raised": true, "onClick": bkeeping.transitionEntriesBackward},"cancel"),React.DOM.div({"id": "entry-part-save", "noink": true, "raised": true, "onClick": ((function (this$__$1,vec__21471,idx,entry_part){
return (function (e){
bkeeping.transitionEntriesBackward.call(null);

var pamount_21475 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));
var __21476 = bkeeping.console_log.call(null,"sanity 1... ",self__.idx);
var __21477__$1 = bkeeping.console_log.call(null,"sanity 2... ",parseFloat(pamount_21475));
cljs.core.swap_BANG_.call(null,entry.state2,((function (pamount_21475,__21476,__21477__$1,this$__$1,vec__21471,idx,entry_part){
return (function (inp){
return cljs.core.update_in.call(null,inp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),self__.idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"amount","amount",364489504),parseFloat(pamount_21475));
});})(pamount_21475,__21476,__21477__$1,this$__$1,vec__21471,idx,entry_part))
);

return om.core.refresh_BANG_.call(null,self__.parent_owner);
});})(this$__$1,vec__21471,idx,entry_part))
},"save")));
});})(vec__21471,idx,entry_part))
;

entry.t21472.prototype.om$core$IInitState$ = true;

entry.t21472.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__21471,idx,entry_part){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.entry_part),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(self__.entry_part)], null);
});})(vec__21471,idx,entry_part))
;

entry.t21472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__21471,idx,entry_part){
return (function (_21474){
var self__ = this;
var _21474__$1 = this;
return self__.meta21473;
});})(vec__21471,idx,entry_part))
;

entry.t21472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__21471,idx,entry_part){
return (function (_21474,meta21473__$1){
var self__ = this;
var _21474__$1 = this;
return (new entry.t21472(self__.entry_part,self__.idx,self__.vec__21471,self__.owner,self__.p__21466,self__.parent_owner,self__.entry_part_view,meta21473__$1));
});})(vec__21471,idx,entry_part))
;

entry.t21472.cljs$lang$type = true;

entry.t21472.cljs$lang$ctorStr = "entry/t21472";

entry.t21472.cljs$lang$ctorPrWriter = ((function (vec__21471,idx,entry_part){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t21472");
});})(vec__21471,idx,entry_part))
;

entry.__GT_t21472 = ((function (vec__21471,idx,entry_part){
return (function __GT_t21472(entry_part__$1,idx__$1,vec__21471__$1,owner__$1,p__21466__$1,parent_owner__$1,entry_part_view__$1,meta21473){
return (new entry.t21472(entry_part__$1,idx__$1,vec__21471__$1,owner__$1,p__21466__$1,parent_owner__$1,entry_part_view__$1,meta21473));
});})(vec__21471,idx,entry_part))
;

}

return (new entry.t21472(entry_part,idx,vec__21471,owner,p__21466,parent_owner,entry_part_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),117,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.handle_currency_change = (function handle_currency_change(e,owner,state){
return bkeeping.console_log.call(null,[cljs.core.str("handle-currency-change / e["),cljs.core.str(e),cljs.core.str("] owner["),cljs.core.str(owner),cljs.core.str("] state["),cljs.core.str(state),cljs.core.str("]")].join(''));
});
entry.generate_entry_part_row = (function generate_entry_part_row(full,owner){
var vec__21479 = full;
var idx = cljs.core.nth.call(null,vec__21479,(0),null);
var ech = cljs.core.nth.call(null,vec__21479,(1),null);
var part_click_handler = ((function (vec__21479,idx,ech){
return (function (e){
bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,cljs.core.partial.call(null,entry.entry_part_view,owner),full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-part-section")], null));
});})(vec__21479,idx,ech))
;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ech))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-part-row",new cljs.core.Keyword(null,"on-click","on-click",1632826543),part_click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ech)], null)], null);
}
});
entry.entry_view = (function entry_view(entry__$1,owner){
entry.state2 = cljs.core.atom.call(null,cljs.core.deref.call(null,entry__$1));

if(typeof entry.t21493 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t21493 = (function (owner,entry,entry_view,meta21494){
this.owner = owner;
this.entry = entry;
this.entry_view = entry_view;
this.meta21494 = meta21494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t21493.prototype.om$core$IRenderState$ = true;

entry.t21493.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
bkeeping.console_log.call(null,[cljs.core.str("Entry - IRenderState... state["),cljs.core.str(cljs.core.deref.call(null,entry.state2)),cljs.core.str("]")].join(''));

return React.DOM.div({"id": "entry-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DatePicker({"formatDate": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (d){
return d.toISOString();
});})(this$__$1))
), "defaultDate": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entry.state2))), "name": "Date", "ref": "entry-details-date", "id": "entry-details-date"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"className": "entry-balance", "horizontal": true, "layout": true},"100.00"),sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"cdn",new cljs.core.Keyword(null,"text","text",-1790561697),"USD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"usd",new cljs.core.Keyword(null,"text","text",-1790561697),"CAD"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__21480_SHARP_,p2__21481_SHARP_){
return entry.handle_currency_change.call(null,p1__21480_SHARP_,self__.owner,p2__21481_SHARP_);
});})(this$__$1))
), "selectedIndex": (1), "autoWidth": false, "ref": "entry-details-currency", "id": "entry-details-currency"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.table({"className": "pure-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"debit"),React.DOM.th(null,"credit"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this$__$1){
return (function iter__21500(s__21501){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__21501__$1 = s__21501;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21501__$1);
if(temp__4126__auto__){
var s__21501__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21501__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__21501__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__21503 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__21502 = (0);
while(true){
if((i__21502 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__21502);
cljs.core.chunk_append.call(null,b__21503,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech,self__.owner)));

var G__21504 = (i__21502 + (1));
i__21502 = G__21504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21503),iter__21500.call(null,cljs.core.chunk_rest.call(null,s__21501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21503),null);
}
} else {
var ech = cljs.core.first.call(null,s__21501__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,entry.generate_entry_part_row.call(null,ech,self__.owner)),iter__21500.call(null,cljs.core.rest.call(null,s__21501__$2)));
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

entry.t21493.prototype.om$core$IInitState$ = true;

entry.t21493.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.entry)], null);
});

entry.t21493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21495){
var self__ = this;
var _21495__$1 = this;
return self__.meta21494;
});

entry.t21493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21495,meta21494__$1){
var self__ = this;
var _21495__$1 = this;
return (new entry.t21493(self__.owner,self__.entry,self__.entry_view,meta21494__$1));
});

entry.t21493.cljs$lang$type = true;

entry.t21493.cljs$lang$ctorStr = "entry/t21493";

entry.t21493.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t21493");
});

entry.__GT_t21493 = (function __GT_t21493(owner__$1,entry__$2,entry_view__$1,meta21494){
return (new entry.t21493(owner__$1,entry__$2,entry_view__$1,meta21494));
});

}

return (new entry.t21493(owner,entry__$1,entry_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),211,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),148,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/entry.cljs"], null)));
});
entry.entries_view = (function entries_view(state,owner){
if(typeof entry.t21514 !== 'undefined'){
} else {

/**
* @constructor
*/
entry.t21514 = (function (owner,state,entries_view,meta21515){
this.owner = owner;
this.state = state;
this.entries_view = entries_view;
this.meta21515 = meta21515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
entry.t21514.prototype.om$core$IRender$ = true;

entry.t21514.prototype.om$core$IRender$render$arity$1 = (function (this__9858__auto__){
var self__ = this;
var this__9858__auto____$1 = this;
return React.DOM.div({"id": "entries-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__9858__auto____$1){
return (function iter__21519(s__21520){
return (new cljs.core.LazySeq(null,((function (this__9858__auto____$1){
return (function (){
var s__21520__$1 = s__21520;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21520__$1);
if(temp__4126__auto__){
var s__21520__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21520__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__21520__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__21522 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__21521 = (0);
while(true){
if((i__21521 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__21521);
cljs.core.chunk_append.call(null,b__21522,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (i__21521,ech,c__4376__auto__,size__4377__auto__,b__21522,s__21520__$2,temp__4126__auto__,this__9858__auto____$1){
return (function (e){
entry.one.call(null,ech);

bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(i__21521,ech,c__4376__auto__,size__4377__auto__,b__21522,s__21520__$2,temp__4126__auto__,this__9858__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))));

var G__21523 = (i__21521 + (1));
i__21521 = G__21523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21522),iter__21519.call(null,cljs.core.chunk_rest.call(null,s__21520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21522),null);
}
} else {
var ech = cljs.core.first.call(null,s__21520__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-entry-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-entry-button"}),React.DOM.div({"className": "entry-row", "flex": true, "onClick": ((function (ech,s__21520__$2,temp__4126__auto__,this__9858__auto____$1){
return (function (e){
entry.one.call(null,ech);

bkeeping.transitionEntriesForward.call(null);

return om.core.root.call(null,entry.entry_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entry-section")], null));
});})(ech,s__21520__$2,temp__4126__auto__,this__9858__auto____$1))
},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(ech))].join('')))),iter__21519.call(null,cljs.core.rest.call(null,s__21520__$2)));
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

entry.t21514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21516){
var self__ = this;
var _21516__$1 = this;
return self__.meta21515;
});

entry.t21514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21516,meta21515__$1){
var self__ = this;
var _21516__$1 = this;
return (new entry.t21514(self__.owner,self__.state,self__.entries_view,meta21515__$1));
});

entry.t21514.cljs$lang$type = true;

entry.t21514.cljs$lang$ctorStr = "entry/t21514";

entry.t21514.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"entry/t21514");
});

entry.__GT_t21514 = (function __GT_t21514(owner__$1,state__$1,entries_view__$1,meta21515){
return (new entry.t21514(owner__$1,state__$1,entries_view__$1,meta21515));
});

}

return (new entry.t21514(owner,state,entries_view,null));
});

//# sourceMappingURL=entry.js.map