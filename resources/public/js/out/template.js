// Compiled by ClojureScript 0.0-2505
goog.provide('template');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cursors.core');
goog.require('enfocus.core');
goog.require('enfocus.effects');
goog.require('enfocus.events');
template.transitionAccounts = (function transitionAccounts(directionFn){
var as = goog.dom.getElement("accounts");
return as.selected = directionFn.call(null,as.selected,(1));
});
goog.exportSymbol('template.transitionAccounts', template.transitionAccounts);
template.transitionAccountsForward = (function transitionAccountsForward(){
return template.transitionAccounts.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('template.transitionAccountsForward', template.transitionAccountsForward);
template.transitionAccountsBackward = (function transitionAccountsBackward(){
return template.transitionAccounts.call(null,cljs.core._);
});
goog.exportSymbol('template.transitionAccountsBackward', template.transitionAccountsBackward);
template.transitionEntries = (function transitionEntries(directionFn){
var es = goog.dom.getElement("entries");
return es.selected = directionFn.call(null,es.selected,(1));
});
goog.exportSymbol('template.transitionEntries', template.transitionEntries);
template.transitionEntriesForward = (function transitionEntriesForward(){
return template.transitionEntries.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('template.transitionEntriesForward', template.transitionEntriesForward);
template.transitionEntriesBackward = (function transitionEntriesBackward(){
return template.transitionEntries.call(null,cljs.core._);
});
goog.exportSymbol('template.transitionEntriesBackward', template.transitionEntriesBackward);
template.account_type_mappings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"credit","credit",782856892)], null);
template.get_account_type_record = (function get_account_type_record(idx){
var account_type_values = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"name","name",1843675177),"Asset"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"name","name",1843675177),"Liability"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"name","name",1843675177),"Revenue"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"name","name",1843675177),"Expense"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"name","name",1843675177),"Capital"], null)], null);
return cljs.core.get.call(null,account_type_values,idx);
});
template.get_account_type_value = (function get_account_type_value(idx){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(template.get_account_type_record.call(null,idx));
});
template.gen_templates = (function gen_templates(data_location_mapping,adetailsFn){
enfocus.core.load_remote_dom.call(null,"/landing-body.html","remote/landing-body.html","en14759_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/landing-body.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/landing-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

template.landing_template = (function landing_template(){
var vec__23934 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/landing-body.html");
}).call(null);
var id_sym23931 = cljs.core.nth.call(null,vec__23934,(0),null);
var pnod23932 = cljs.core.nth.call(null,vec__23934,(1),null);
var pnod23932__$1 = enfocus.core.create_hidden_dom.call(null,pnod23932);
enfocus.core.i_at.call(null,id_sym23931,pnod23932__$1);

enfocus.core.reset_ids.call(null,id_sym23931,pnod23932__$1);

return enfocus.core.remove_node_return_child.call(null,pnod23932__$1);
});

enfocus.core.load_remote_dom.call(null,"/account-row.html","remote/account-row.html","en14764_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/account-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/account-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

template.accounts_template = (function accounts_template(account){
var vec__23938 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/account-row.html");
}).call(null);
var id_sym23935 = cljs.core.nth.call(null,vec__23938,(0),null);
var pnod23936 = cljs.core.nth.call(null,vec__23938,(1),null);
var pnod23936__$1 = enfocus.core.create_hidden_dom.call(null,pnod23936);
enfocus.core.i_at.call(null,id_sym23935,pnod23936__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__23938,id_sym23935,pnod23936,pnod23936__$1){
return (function (){
return (function (){var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
adetailsFn.call(null,account,loc);

return template.transitionAccountsForward.call(null);
})().call(null);
});})(vec__23938,id_sym23935,pnod23936,pnod23936__$1))
));

enfocus.core.reset_ids.call(null,id_sym23935,pnod23936__$1);

return enfocus.core.remove_node_return_child.call(null,pnod23936__$1);
});

enfocus.core.load_remote_dom.call(null,"/account-details.html","remote/account-details.html","en14769_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/account-details.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/account-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

template.account_details_template = (function account_details_template(account){
var vec__23942 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/account-details.html");
}).call(null);
var id_sym23939 = cljs.core.nth.call(null,vec__23942,(0),null);
var pnod23940 = cljs.core.nth.call(null,vec__23942,(1),null);
var pnod23940__$1 = enfocus.core.create_hidden_dom.call(null,pnod23940);
enfocus.core.i_at.call(null,id_sym23939,pnod23940__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),template.transitionAccountsBackward.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__23942,id_sym23939,pnod23940,pnod23940__$1){
return (function (){
return (function (){var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(account);
var aname = goog.dom.getElement("account-details-name").value;
var type_kw = template.get_account_type_value.call(null,goog.dom.getElement("account-details-type").selected);
var account_cw = type_kw.call(null,template.account_type_mappings);
template.transitionAccountsBackward.call(null);

return cljs.core.swap_BANG_.call(null,template.app_state,((function (db_id,aname,type_kw,account_cw,vec__23942,id_sym23939,pnod23940,pnod23940__$1){
return (function (e){
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.map.call(null,((function (db_id,aname,type_kw,account_cw,vec__23942,id_sym23939,pnod23940,pnod23940__$1){
return (function (ee){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ee),db_id)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword(null,"name","name",1843675177),aname,new cljs.core.Keyword(null,"type","type",1174270348),type_kw,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),account_cw], null);
} else {
return ee;
}
});})(db_id,aname,type_kw,account_cw,vec__23942,id_sym23939,pnod23940,pnod23940__$1))
,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,template.app_state))));
});})(db_id,aname,type_kw,account_cw,vec__23942,id_sym23939,pnod23940,pnod23940__$1))
);
})().call(null);
});})(vec__23942,id_sym23939,pnod23940,pnod23940__$1))
));

enfocus.core.reset_ids.call(null,id_sym23939,pnod23940__$1);

return enfocus.core.remove_node_return_child.call(null,pnod23940__$1);
});

enfocus.core.load_remote_dom.call(null,"/entry-row.html","remote/entry-row.html","en14774_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/entry-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/entry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

template.entries_template = (function entries_template(entry){
var vec__23946 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/entry-row.html");
}).call(null);
var id_sym23943 = cljs.core.nth.call(null,vec__23946,(0),null);
var pnod23944 = cljs.core.nth.call(null,vec__23946,(1),null);
var pnod23944__$1 = enfocus.core.create_hidden_dom.call(null,pnod23944);
enfocus.core.i_at.call(null,id_sym23943,pnod23944__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')));

enfocus.core.reset_ids.call(null,id_sym23943,pnod23944__$1);

return enfocus.core.remove_node_return_child.call(null,pnod23944__$1);
});
});

//# sourceMappingURL=template.js.map