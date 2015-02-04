// Compiled by ClojureScript 0.0-2505
goog.provide('account');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('util');
goog.require('om.core');
account.asset_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"asset","asset",-280274466),(0),new cljs.core.Keyword(null,"liability","liability",853006629),(1),new cljs.core.Keyword(null,"revenue","revenue",943993380),(2),new cljs.core.Keyword(null,"expense","expense",1909150212),(3),new cljs.core.Keyword(null,"capital","capital",1627991945),(4)], null);
account.account_type_mappings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"credit","credit",782856892)], null);
account.selectedindex_from_account_type = (function selectedindex_from_account_type(atype){
return account.asset_types.call(null,atype);
});
account.accounttype_from_selectedindex = (function accounttype_from_selectedindex(idx){
return cljs.core.get.call(null,clojure.set.map_invert.call(null,account.asset_types),idx);
});
account.handle_name_change = (function handle_name_change(e,owner,p__66852){
var map__66854 = p__66852;
var map__66854__$1 = ((cljs.core.seq_QMARK_.call(null,map__66854))?cljs.core.apply.call(null,cljs.core.hash_map,map__66854):map__66854);
var name = cljs.core.get.call(null,map__66854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"name","name",1843675177),e.target.value);
});
account.handle_type_change = (function handle_type_change(e,owner,idx){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"type","type",1174270348),idx);
});
account.account_view = (function account_view(account__$1,owner){
if(typeof account.t66861 !== 'undefined'){
} else {

/**
* @constructor
*/
account.t66861 = (function (owner,account,account_view,meta66862){
this.owner = owner;
this.account = account;
this.account_view = account_view;
this.meta66862 = meta66862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
account.t66861.prototype.om$core$IRenderState$ = true;

account.t66861.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "account-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__66855_SHARP_){
return account.handle_name_change.call(null,p1__66855_SHARP_,self__.owner,self__.account);
});})(this$__$1))
), "defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account)), "ref": "account-details-name", "id": "account-details-name"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"asset",new cljs.core.Keyword(null,"text","text",-1790561697),"Asset"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"liability",new cljs.core.Keyword(null,"text","text",-1790561697),"Liability"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"revenue",new cljs.core.Keyword(null,"text","text",-1790561697),"Revenue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),"expense",new cljs.core.Keyword(null,"text","text",-1790561697),"Expense",new cljs.core.Keyword(null,"selected","selected",574897764),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"capital",new cljs.core.Keyword(null,"text","text",-1790561697),"Capital"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__66856_SHARP_,p2__66857_SHARP_){
return account.handle_type_change.call(null,p1__66856_SHARP_,self__.owner,p2__66857_SHARP_);
});})(this$__$1))
), "selectedIndex": om_tools.dom.format_opts.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348))), "autoWidth": false, "ref": "account-details-type", "id": "account-details-type"}))),React.DOM.div({"horizontal": true, "layout": true},React.DOM.div({"id": "account-details-cancel", "noink": true, "raised": true, "onClick": util.transitionAccountsBackward},"cancel"),React.DOM.div({"id": "account-details-save", "noink": true, "raised": true, "onClick": ((function (this$__$1){
return (function (e){
util.transitionAccountsBackward.call(null);

return om.core.transact_BANG_.call(null,self__.account,((function (this$__$1){
return (function (x){
var natype = account.accounttype_from_selectedindex.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"type","type",1174270348)));
var resultF = cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"name","name",1843675177),document.getElementById("account-details-name").value,new cljs.core.Keyword(null,"type","type",1174270348),natype,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),natype.call(null,account.account_type_mappings));
return resultF;
});})(this$__$1))
);
});})(this$__$1))
},"save")));
});

account.t66861.prototype.om$core$IInitState$ = true;

account.t66861.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account),new cljs.core.Keyword(null,"type","type",1174270348),account.selectedindex_from_account_type.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.account))], null);
});

account.t66861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66863){
var self__ = this;
var _66863__$1 = this;
return self__.meta66862;
});

account.t66861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66863,meta66862__$1){
var self__ = this;
var _66863__$1 = this;
return (new account.t66861(self__.owner,self__.account,self__.account_view,meta66862__$1));
});

account.t66861.cljs$lang$type = true;

account.t66861.cljs$lang$ctorStr = "account/t66861";

account.t66861.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"account/t66861");
});

account.__GT_t66861 = (function __GT_t66861(owner__$1,account__$2,account_view__$1,meta66862){
return (new account.t66861(owner__$1,account__$2,account_view__$1,meta66862));
});

}

return (new account.t66861(owner,account__$1,account_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),87,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/account.cljs"], null)));
});
account.accounts_view = (function accounts_view(state,owner){
if(typeof account.t66873 !== 'undefined'){
} else {

/**
* @constructor
*/
account.t66873 = (function (owner,state,accounts_view,meta66874){
this.owner = owner;
this.state = state;
this.accounts_view = accounts_view;
this.meta66874 = meta66874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
account.t66873.prototype.om$core$IRender$ = true;

account.t66873.prototype.om$core$IRender$render$arity$1 = (function (this__21324__auto__){
var self__ = this;
var this__21324__auto____$1 = this;
return React.DOM.div({"id": "accounts-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__21324__auto____$1){
return (function iter__66878(s__66879){
return (new cljs.core.LazySeq(null,((function (this__21324__auto____$1){
return (function (){
var s__66879__$1 = s__66879;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66879__$1);
if(temp__4126__auto__){
var s__66879__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66879__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__66879__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__66881 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__66880 = (0);
while(true){
if((i__66880 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__66880);
cljs.core.chunk_append.call(null,b__66881,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (i__66880,ech,c__4376__auto__,size__4377__auto__,b__66881,s__66879__$2,temp__4126__auto__,this__21324__auto____$1){
return (function (e){
util.transitionAccountsForward.call(null);

return om.core.root.call(null,account.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(i__66880,ech,c__4376__auto__,size__4377__auto__,b__66881,s__66879__$2,temp__4126__auto__,this__21324__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__66882 = (i__66880 + (1));
i__66880 = G__66882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66881),iter__66878.call(null,cljs.core.chunk_rest.call(null,s__66879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66881),null);
}
} else {
var ech = cljs.core.first.call(null,s__66879__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (ech,s__66879__$2,temp__4126__auto__,this__21324__auto____$1){
return (function (e){
util.transitionAccountsForward.call(null);

return om.core.root.call(null,account.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(ech,s__66879__$2,temp__4126__auto__,this__21324__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))),iter__66878.call(null,cljs.core.rest.call(null,s__66879__$2)));
}
} else {
return null;
}
break;
}
});})(this__21324__auto____$1))
,null,null));
});})(this__21324__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.state));
})()));
});

account.t66873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66875){
var self__ = this;
var _66875__$1 = this;
return self__.meta66874;
});

account.t66873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66875,meta66874__$1){
var self__ = this;
var _66875__$1 = this;
return (new account.t66873(self__.owner,self__.state,self__.accounts_view,meta66874__$1));
});

account.t66873.cljs$lang$type = true;

account.t66873.cljs$lang$ctorStr = "account/t66873";

account.t66873.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"account/t66873");
});

account.__GT_t66873 = (function __GT_t66873(owner__$1,state__$1,accounts_view__$1,meta66874){
return (new account.t66873(owner__$1,state__$1,accounts_view__$1,meta66874));
});

}

return (new account.t66873(owner,state,accounts_view,null));
});

//# sourceMappingURL=account.js.map