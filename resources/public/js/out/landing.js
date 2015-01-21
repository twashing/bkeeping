// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
landing.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null)], null),new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], null)], null)], null)], null));
landing.transitionAccounts = (function transitionAccounts(directionFn){
var as = goog.dom.getElement("accounts");
return as.selected = directionFn.call(null,as.selected,(1));
});
goog.exportSymbol('landing.transitionAccounts', landing.transitionAccounts);
landing.transitionAccountsForward = (function transitionAccountsForward(){
return landing.transitionAccounts.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('landing.transitionAccountsForward', landing.transitionAccountsForward);
landing.transitionAccountsBackward = (function transitionAccountsBackward(){
return landing.transitionAccounts.call(null,cljs.core._);
});
goog.exportSymbol('landing.transitionAccountsBackward', landing.transitionAccountsBackward);
landing.transitionEntries = (function transitionEntries(directionFn){
var es = goog.dom.getElement("entries");
return es.selected = directionFn.call(null,es.selected,(1));
});
goog.exportSymbol('landing.transitionEntries', landing.transitionEntries);
landing.transitionEntriesForward = (function transitionEntriesForward(){
return landing.transitionEntries.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('landing.transitionEntriesForward', landing.transitionEntriesForward);
landing.transitionEntriesBackward = (function transitionEntriesBackward(){
return landing.transitionEntries.call(null,cljs.core._);
});
goog.exportSymbol('landing.transitionEntriesBackward', landing.transitionEntriesBackward);
landing.asset_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"asset","asset",-280274466),(0),new cljs.core.Keyword(null,"liability","liability",853006629),(1),new cljs.core.Keyword(null,"revenue","revenue",943993380),(2),new cljs.core.Keyword(null,"expense","expense",1909150212),(3),new cljs.core.Keyword(null,"capital","capital",1627991945),(4)], null);
landing.account_type_mappings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"credit","credit",782856892)], null);
landing.selectedindex_from_account_type = (function selectedindex_from_account_type(atype){
return landing.asset_types.call(null,atype);
});
landing.accounttype_from_selectedindex = (function accounttype_from_selectedindex(idx){
return cljs.core.get.call(null,clojure.set.map_invert.call(null,landing.asset_types),idx);
});
landing.handle_name_change = (function handle_name_change(e,owner,p__12594){
var map__12596 = p__12594;
var map__12596__$1 = ((cljs.core.seq_QMARK_.call(null,map__12596))?cljs.core.apply.call(null,cljs.core.hash_map,map__12596):map__12596);
var name = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"name","name",1843675177),e.target.value);
});
landing.handle_type_change = (function handle_type_change(e,owner,idx){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"type","type",1174270348),idx);
});
landing.account_view = (function account_view(account,owner){
if(typeof landing.t12603 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t12603 = (function (owner,account,account_view,meta12604){
this.owner = owner;
this.account = account;
this.account_view = account_view;
this.meta12604 = meta12604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t12603.prototype.om$core$IRenderState$ = true;

landing.t12603.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "account-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__12597_SHARP_){
return landing.handle_name_change.call(null,p1__12597_SHARP_,self__.owner,self__.account);
});})(this$__$1))
), "defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account)), "ref": "account-details-name", "id": "account-details-name"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"asset",new cljs.core.Keyword(null,"text","text",-1790561697),"Asset"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"liability",new cljs.core.Keyword(null,"text","text",-1790561697),"Liability"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"revenue",new cljs.core.Keyword(null,"text","text",-1790561697),"Revenue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),"expense",new cljs.core.Keyword(null,"text","text",-1790561697),"Expense",new cljs.core.Keyword(null,"selected","selected",574897764),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"capital",new cljs.core.Keyword(null,"text","text",-1790561697),"Capital"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__12598_SHARP_,p2__12599_SHARP_){
return landing.handle_type_change.call(null,p1__12598_SHARP_,self__.owner,p2__12599_SHARP_);
});})(this$__$1))
), "selectedIndex": om_tools.dom.format_opts.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))), "autoWidth": false, "ref": "account-details-type", "id": "account-details-type"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "account-details-cancel", "noink": true, "raised": true, "onClick": landing.transitionAccountsBackward},"cancel"),React.DOM.div({"id": "account-details-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
landing.transitionAccountsBackward.call(null);

return om.core.transact_BANG_.call(null,self__.account,((function (this$__$1){
return (function (x){
var natype = landing.accounttype_from_selectedindex.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348)));
var resultF = cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"name","name",1843675177),document.getElementById("account-details-name").value,new cljs.core.Keyword(null,"type","type",1174270348),natype,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),natype.call(null,landing.account_type_mappings));
bkeeping.console_log.call(null,[cljs.core.str("... "),cljs.core.str(resultF)].join(''));

return resultF;
});})(this$__$1))
);
});})(this$__$1))
},"save")));
});

landing.t12603.prototype.om$core$IInitState$ = true;

landing.t12603.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
bkeeping.console_log.call(null,[cljs.core.str("init-state... account["),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.account)),cljs.core.str("]")].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account),new cljs.core.Keyword(null,"type","type",1174270348),landing.selectedindex_from_account_type.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.account))], null);
});

landing.t12603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12605){
var self__ = this;
var _12605__$1 = this;
return self__.meta12604;
});

landing.t12603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12605,meta12604__$1){
var self__ = this;
var _12605__$1 = this;
return (new landing.t12603(self__.owner,self__.account,self__.account_view,meta12604__$1));
});

landing.t12603.cljs$lang$type = true;

landing.t12603.cljs$lang$ctorStr = "landing/t12603";

landing.t12603.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t12603");
});

landing.__GT_t12603 = (function __GT_t12603(owner__$1,account__$1,account_view__$1,meta12604){
return (new landing.t12603(owner__$1,account__$1,account_view__$1,meta12604));
});

}

return (new landing.t12603(owner,account,account_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),103,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/landing.cljs"], null)));
});
landing.accounts_view = (function accounts_view(app,owner){
if(typeof landing.t12615 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t12615 = (function (owner,app,accounts_view,meta12616){
this.owner = owner;
this.app = app;
this.accounts_view = accounts_view;
this.meta12616 = meta12616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t12615.prototype.om$core$IRender$ = true;

landing.t12615.prototype.om$core$IRender$render$arity$1 = (function (this__8580__auto__){
var self__ = this;
var this__8580__auto____$1 = this;
return React.DOM.div({"id": "accounts-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__8580__auto____$1){
return (function iter__12620(s__12621){
return (new cljs.core.LazySeq(null,((function (this__8580__auto____$1){
return (function (){
var s__12621__$1 = s__12621;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12621__$1);
if(temp__4126__auto__){
var s__12621__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12621__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__12621__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__12623 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__12622 = (0);
while(true){
if((i__12622 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__12622);
cljs.core.chunk_append.call(null,b__12623,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (i__12622,ech,c__4376__auto__,size__4377__auto__,b__12623,s__12621__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
landing.transitionAccountsForward.call(null);

return om.core.root.call(null,landing.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(i__12622,ech,c__4376__auto__,size__4377__auto__,b__12623,s__12621__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__12624 = (i__12622 + (1));
i__12622 = G__12624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12623),iter__12620.call(null,cljs.core.chunk_rest.call(null,s__12621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12623),null);
}
} else {
var ech = cljs.core.first.call(null,s__12621__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (ech,s__12621__$2,temp__4126__auto__,this__8580__auto____$1){
return (function (e){
landing.transitionAccountsForward.call(null);

return om.core.root.call(null,landing.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(ech,s__12621__$2,temp__4126__auto__,this__8580__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))),iter__12620.call(null,cljs.core.rest.call(null,s__12621__$2)));
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
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.app));
})()));
});

landing.t12615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12617){
var self__ = this;
var _12617__$1 = this;
return self__.meta12616;
});

landing.t12615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12617,meta12616__$1){
var self__ = this;
var _12617__$1 = this;
return (new landing.t12615(self__.owner,self__.app,self__.accounts_view,meta12616__$1));
});

landing.t12615.cljs$lang$type = true;

landing.t12615.cljs$lang$ctorStr = "landing/t12615";

landing.t12615.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t12615");
});

landing.__GT_t12615 = (function __GT_t12615(owner__$1,app__$1,accounts_view__$1,meta12616){
return (new landing.t12615(owner__$1,app__$1,accounts_view__$1,meta12616));
});

}

return (new landing.t12615(owner,app,accounts_view,null));
});
setTimeout((function (){
return om.core.root.call(null,landing.accounts_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));
}),(2000));

//# sourceMappingURL=landing.js.map