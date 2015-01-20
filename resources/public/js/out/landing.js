// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
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
landing.account_view = (function account_view(account,owner){
if(typeof landing.t12652 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t12652 = (function (owner,account,account_view,meta12653){
this.owner = owner;
this.account = account;
this.account_view = account_view;
this.meta12653 = meta12653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t12652.prototype.om$core$IRender$ = true;

landing.t12652.prototype.om$core$IRender$render$arity$1 = (function (this__7189__auto__){
var self__ = this;
var this__7189__auto____$1 = this;
return React.DOM.div({"id": "account-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.input.call(null,{"id": "account-details-name", "label": "Name", "type": "text", "value": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account)})),React.DOM.div({"horizontal": true, "layout": true}),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "account-details-cancel", "noink": true, "raised": true, "onClick": landing.transitionAccountsBackward},"cancel"),React.DOM.div({"id": "account-details-save", "noink": true, "raised": true, "onClick": ((function (this__7189__auto____$1){
return (function (e){
landing.transitionAccountsBackward.call(null);

return om.core.transact_BANG_.call(null,self__.account,((function (this__7189__auto____$1){
return (function (x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"name","name",1843675177),"fubar");
});})(this__7189__auto____$1))
);
});})(this__7189__auto____$1))
},"save")));
});

landing.t12652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12654){
var self__ = this;
var _12654__$1 = this;
return self__.meta12653;
});

landing.t12652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12654,meta12653__$1){
var self__ = this;
var _12654__$1 = this;
return (new landing.t12652(self__.owner,self__.account,self__.account_view,meta12653__$1));
});

landing.t12652.cljs$lang$type = true;

landing.t12652.cljs$lang$ctorStr = "landing/t12652";

landing.t12652.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t12652");
});

landing.__GT_t12652 = (function __GT_t12652(owner__$1,account__$1,account_view__$1,meta12653){
return (new landing.t12652(owner__$1,account__$1,account_view__$1,meta12653));
});

}

return (new landing.t12652(owner,account,account_view,null));
});
landing.accounts_view = (function accounts_view(app,owner){
if(typeof landing.t12666 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t12666 = (function (owner,app,accounts_view,meta12667){
this.owner = owner;
this.app = app;
this.accounts_view = accounts_view;
this.meta12667 = meta12667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t12666.prototype.om$core$IRender$ = true;

landing.t12666.prototype.om$core$IRender$render$arity$1 = (function (this__7189__auto__){
var self__ = this;
var this__7189__auto____$1 = this;
return React.DOM.div({"id": "accounts-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7189__auto____$1){
return (function iter__12671(s__12672){
return (new cljs.core.LazySeq(null,((function (this__7189__auto____$1){
return (function (){
var s__12672__$1 = s__12672;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12672__$1);
if(temp__4126__auto__){
var s__12672__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12672__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__12672__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__12674 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__12673 = (0);
while(true){
if((i__12673 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__12673);
cljs.core.chunk_append.call(null,b__12674,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (i__12673,ech,c__4376__auto__,size__4377__auto__,b__12674,s__12672__$2,temp__4126__auto__,this__7189__auto____$1){
return (function (e){
landing.transitionAccountsForward.call(null);

return om.core.root.call(null,landing.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(i__12673,ech,c__4376__auto__,size__4377__auto__,b__12674,s__12672__$2,temp__4126__auto__,this__7189__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__12675 = (i__12673 + (1));
i__12673 = G__12675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12674),iter__12671.call(null,cljs.core.chunk_rest.call(null,s__12672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12674),null);
}
} else {
var ech = cljs.core.first.call(null,s__12672__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (ech,s__12672__$2,temp__4126__auto__,this__7189__auto____$1){
return (function (e){
landing.transitionAccountsForward.call(null);

return om.core.root.call(null,landing.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(ech,s__12672__$2,temp__4126__auto__,this__7189__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))),iter__12671.call(null,cljs.core.rest.call(null,s__12672__$2)));
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

landing.t12666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12668){
var self__ = this;
var _12668__$1 = this;
return self__.meta12667;
});

landing.t12666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12668,meta12667__$1){
var self__ = this;
var _12668__$1 = this;
return (new landing.t12666(self__.owner,self__.app,self__.accounts_view,meta12667__$1));
});

landing.t12666.cljs$lang$type = true;

landing.t12666.cljs$lang$ctorStr = "landing/t12666";

landing.t12666.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"landing/t12666");
});

landing.__GT_t12666 = (function __GT_t12666(owner__$1,app__$1,accounts_view__$1,meta12667){
return (new landing.t12666(owner__$1,app__$1,accounts_view__$1,meta12667));
});

}

return (new landing.t12666(owner,app,accounts_view,null));
});
setTimeout((function (){
return om.core.root.call(null,landing.accounts_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));
}),(2000));
landing.changeme = (function changeme(inp){
return cljs.core.swap_BANG_.call(null,landing.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),inp);
});
goog.exportSymbol('landing.changeme', landing.changeme);

//# sourceMappingURL=landing.js.map