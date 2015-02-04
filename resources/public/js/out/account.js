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
account.handle_name_change = (function handle_name_change(e,owner,p__21452){
var map__21454 = p__21452;
var map__21454__$1 = ((cljs.core.seq_QMARK_.call(null,map__21454))?cljs.core.apply.call(null,cljs.core.hash_map,map__21454):map__21454);
var name = cljs.core.get.call(null,map__21454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"name","name",1843675177),e.target.value);
});
account.handle_type_change = (function handle_type_change(e,owner,idx){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"type","type",1174270348),idx);
});
account.account_view = (function account_view(account__$1,owner){
if(typeof account.t21461 !== 'undefined'){
} else {

/**
* @constructor
*/
account.t21461 = (function (owner,account,account_view,meta21462){
this.owner = owner;
this.account = account;
this.account_view = account_view;
this.meta21462 = meta21462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
account.t21461.prototype.om$core$IRenderState$ = true;

account.t21461.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "account-details-pane", "slideFromRight": true},React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.Input({"onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__21455_SHARP_){
return account.handle_name_change.call(null,p1__21455_SHARP_,self__.owner,self__.account);
});})(this$__$1))
), "defaultValue": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account)), "ref": "account-details-name", "id": "account-details-name"}))),React.DOM.div({"horizontal": true, "layout": true},sablono.interpreter.interpret.call(null,MaterialUI.DropDownMenu({"menuItems": om_tools.dom.format_opts.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"asset",new cljs.core.Keyword(null,"text","text",-1790561697),"Asset"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"liability",new cljs.core.Keyword(null,"text","text",-1790561697),"Liability"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"revenue",new cljs.core.Keyword(null,"text","text",-1790561697),"Revenue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),"expense",new cljs.core.Keyword(null,"text","text",-1790561697),"Expense",new cljs.core.Keyword(null,"selected","selected",574897764),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),"capital",new cljs.core.Keyword(null,"text","text",-1790561697),"Capital"], null)], null))), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__21456_SHARP_,p2__21457_SHARP_){
return account.handle_type_change.call(null,p1__21456_SHARP_,self__.owner,p2__21457_SHARP_);
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

account.t21461.prototype.om$core$IInitState$ = true;

account.t21461.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.account),new cljs.core.Keyword(null,"type","type",1174270348),account.selectedindex_from_account_type.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.account))], null);
});

account.t21461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21463){
var self__ = this;
var _21463__$1 = this;
return self__.meta21462;
});

account.t21461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21463,meta21462__$1){
var self__ = this;
var _21463__$1 = this;
return (new account.t21461(self__.owner,self__.account,self__.account_view,meta21462__$1));
});

account.t21461.cljs$lang$type = true;

account.t21461.cljs$lang$ctorStr = "account/t21461";

account.t21461.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"account/t21461");
});

account.__GT_t21461 = (function __GT_t21461(owner__$1,account__$2,account_view__$1,meta21462){
return (new account.t21461(owner__$1,account__$2,account_view__$1,meta21462));
});

}

return (new account.t21461(owner,account__$1,account_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),87,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/src/cljs/account.cljs"], null)));
});
account.accounts_view = (function accounts_view(state,owner){
if(typeof account.t21473 !== 'undefined'){
} else {

/**
* @constructor
*/
account.t21473 = (function (owner,state,accounts_view,meta21474){
this.owner = owner;
this.state = state;
this.accounts_view = accounts_view;
this.meta21474 = meta21474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
account.t21473.prototype.om$core$IRender$ = true;

account.t21473.prototype.om$core$IRender$render$arity$1 = (function (this__21324__auto__){
var self__ = this;
var this__21324__auto____$1 = this;
return React.DOM.div({"id": "accounts-pane", "slideFromRight": true},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__21324__auto____$1){
return (function iter__21478(s__21479){
return (new cljs.core.LazySeq(null,((function (this__21324__auto____$1){
return (function (){
var s__21479__$1 = s__21479;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21479__$1);
if(temp__4126__auto__){
var s__21479__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21479__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__21479__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__21481 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__21480 = (0);
while(true){
if((i__21480 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__21480);
cljs.core.chunk_append.call(null,b__21481,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (i__21480,ech,c__4376__auto__,size__4377__auto__,b__21481,s__21479__$2,temp__4126__auto__,this__21324__auto____$1){
return (function (e){
util.transitionAccountsForward.call(null);

return om.core.root.call(null,account.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(i__21480,ech,c__4376__auto__,size__4377__auto__,b__21481,s__21479__$2,temp__4126__auto__,this__21324__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__21482 = (i__21480 + (1));
i__21480 = G__21482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21481),iter__21478.call(null,cljs.core.chunk_rest.call(null,s__21479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21481),null);
}
} else {
var ech = cljs.core.first.call(null,s__21479__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "delete-account-row", "horizontal": true, "layout": true},React.DOM.div({"className": "delete-account-button"}),React.DOM.div({"className": "account-row", "flex": true, "onClick": ((function (ech,s__21479__$2,temp__4126__auto__,this__21324__auto____$1){
return (function (e){
util.transitionAccountsForward.call(null);

return om.core.root.call(null,account.account_view,ech,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("account-section")], null));
});})(ech,s__21479__$2,temp__4126__auto__,this__21324__auto____$1))
},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ech)))),iter__21478.call(null,cljs.core.rest.call(null,s__21479__$2)));
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

account.t21473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21475){
var self__ = this;
var _21475__$1 = this;
return self__.meta21474;
});

account.t21473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21475,meta21474__$1){
var self__ = this;
var _21475__$1 = this;
return (new account.t21473(self__.owner,self__.state,self__.accounts_view,meta21474__$1));
});

account.t21473.cljs$lang$type = true;

account.t21473.cljs$lang$ctorStr = "account/t21473";

account.t21473.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"account/t21473");
});

account.__GT_t21473 = (function __GT_t21473(owner__$1,state__$1,accounts_view__$1,meta21474){
return (new account.t21473(owner__$1,state__$1,accounts_view__$1,meta21474));
});

}

return (new account.t21473(owner,state,accounts_view,null));
});

//# sourceMappingURL=account.js.map