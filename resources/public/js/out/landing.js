// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('cursors.core');
goog.require('enfocus.core');
goog.require('freactive.dom');
goog.require('view');
goog.require('weasel.repl');
goog.require('goog.string');
goog.require('figwheel.client');
goog.require('enfocus.effects');
goog.require('freactive.core');
goog.require('enfocus.events');
cljs.core.enable_console_print_BANG_.call(null);
landing.app_state = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null)], true),new cljs.core.Keyword(null,"journals","journals",-1915761091),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], true)], null)], true)], null));
landing.data_location_mapping = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#accounts-pane",new cljs.core.Keyword(null,"templ","templ",-543712204),"/account-row.html",new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"render-account-list","render-account-list",294915555,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#accounts-details-pane",new cljs.core.Keyword(null,"templ","templ",-543712204),"/account-details.html"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entries-pane",new cljs.core.Keyword(null,"templ","templ",-543712204),"/entry-list.html"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-pane",new cljs.core.Keyword(null,"templ","templ",-543712204),"/entry-details.html"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-part-pane",new cljs.core.Keyword(null,"templ","templ",-543712204),"/entry-details-part.html"], null)], true, false);
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
bkeeping.console_log.call(null,[cljs.core.str("entries["),cljs.core.str(es),cljs.core.str("] / directionFn["),cljs.core.str(directionFn),cljs.core.str("]")].join(''));

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
enfocus.core.load_remote_dom.call(null,"/landing-body.html","remote/landing-body.html","en19551_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/landing-body.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/landing-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__21677 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/landing-body.html");
}).call(null);
var id_sym21674 = cljs.core.nth.call(null,vec__21677,(0),null);
var pnod21675 = cljs.core.nth.call(null,vec__21677,(1),null);
var pnod21675__$1 = enfocus.core.create_hidden_dom.call(null,pnod21675);
enfocus.core.i_at.call(null,id_sym21674,pnod21675__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core-header-panel"], null),enfocus.core.append.call(null,"&nbsp;"));

enfocus.core.reset_ids.call(null,id_sym21674,pnod21675__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21675__$1);
});
enfocus.core.load_remote_dom.call(null,"/account-row.html","remote/account-row.html","en20594_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/account-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/account-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__21681 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/account-row.html");
}).call(null);
var id_sym21678 = cljs.core.nth.call(null,vec__21681,(0),null);
var pnod21679 = cljs.core.nth.call(null,vec__21681,(1),null);
var pnod21679__$1 = enfocus.core.create_hidden_dom.call(null,pnod21679);
enfocus.core.i_at.call(null,id_sym21678,pnod21679__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#delete-account-row > text-node"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)));

enfocus.core.reset_ids.call(null,id_sym21678,pnod21679__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21679__$1);
});
enfocus.core.load_remote_dom.call(null,"/entry-row.html","remote/entry-row.html","en20790_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/entry-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/entry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__21685 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/entry-row.html");
}).call(null);
var id_sym21682 = cljs.core.nth.call(null,vec__21685,(0),null);
var pnod21683 = cljs.core.nth.call(null,vec__21685,(1),null);
var pnod21683__$1 = enfocus.core.create_hidden_dom.call(null,pnod21683);
enfocus.core.i_at.call(null,id_sym21682,pnod21683__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#delete-entry-row > text-node"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)));

enfocus.core.reset_ids.call(null,id_sym21682,pnod21683__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21683__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__21690 = cljs.core.seq.call(null,accounts);
var chunk__21691 = null;
var count__21692 = (0);
var i__21693 = (0);
while(true){
if((i__21693 < count__21692)){
var ech = cljs.core._nth.call(null,chunk__21691,i__21693);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__21694 = seq__21690;
var G__21695 = chunk__21691;
var G__21696 = count__21692;
var G__21697 = (i__21693 + (1));
seq__21690 = G__21694;
chunk__21691 = G__21695;
count__21692 = G__21696;
i__21693 = G__21697;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21690);
if(temp__4126__auto__){
var seq__21690__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21690__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__21690__$1);
var G__21698 = cljs.core.chunk_rest.call(null,seq__21690__$1);
var G__21699 = c__13332__auto__;
var G__21700 = cljs.core.count.call(null,c__13332__auto__);
var G__21701 = (0);
seq__21690 = G__21698;
chunk__21691 = G__21699;
count__21692 = G__21700;
i__21693 = G__21701;
continue;
} else {
var ech = cljs.core.first.call(null,seq__21690__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__21702 = cljs.core.next.call(null,seq__21690__$1);
var G__21703 = null;
var G__21704 = (0);
var G__21705 = (0);
seq__21690 = G__21702;
chunk__21691 = G__21703;
count__21692 = G__21704;
i__21693 = G__21705;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render_entry_list = (function render_entry_list(entries,loc){
var seq__21710 = cljs.core.seq.call(null,entries);
var chunk__21711 = null;
var count__21712 = (0);
var i__21713 = (0);
while(true){
if((i__21713 < count__21712)){
var ech = cljs.core._nth.call(null,chunk__21711,i__21713);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21714 = seq__21710;
var G__21715 = chunk__21711;
var G__21716 = count__21712;
var G__21717 = (i__21713 + (1));
seq__21710 = G__21714;
chunk__21711 = G__21715;
count__21712 = G__21716;
i__21713 = G__21717;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21710);
if(temp__4126__auto__){
var seq__21710__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21710__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__21710__$1);
var G__21718 = cljs.core.chunk_rest.call(null,seq__21710__$1);
var G__21719 = c__13332__auto__;
var G__21720 = cljs.core.count.call(null,c__13332__auto__);
var G__21721 = (0);
seq__21710 = G__21718;
chunk__21711 = G__21719;
count__21712 = G__21720;
i__21713 = G__21721;
continue;
} else {
var ech = cljs.core.first.call(null,seq__21710__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21722 = cljs.core.next.call(null,seq__21710__$1);
var G__21723 = null;
var G__21724 = (0);
var G__21725 = (0);
seq__21710 = G__21722;
chunk__21711 = G__21723;
count__21712 = G__21724;
i__21713 = G__21725;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render = (function render(){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null),enfocus.core.content.call(null,landing.landing_template.call(null)));
});
landing.render.call(null);
landing.render_account_list.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state)),"#accounts-pane");
landing.render_entry_list.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state)))),"#entries-pane");
landing.render2 = (function render2(path){
var pmapping = landing.data_location_mapping.call(null,path);
var pdata = cljs.core.get_in.call(null,cljs.core.deref.call(null,landing.app_state),path);
var mfn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(pmapping);
var mloc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(pmapping);
var mtpl = new cljs.core.Keyword(null,"templ","templ",-543712204).cljs$core$IFn$_invoke$arity$1(pmapping);
return landing.render_account_list.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state)),"#accounts-pane");
});
goog.exportSymbol('landing.render2', landing.render2);
landing.one = (function one(){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#accounts-pane"], null),enfocus.core.append.call(null,enfocus.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"thing"], null))));
});
goog.exportSymbol('landing.one', landing.one);
landing.onClickHandler = (function onClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
bkeeping.console_log.call(null,"Signout CLICKED");

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),landing.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),landing.signoutUser], null)));

return navigatorId.request();
});
landing.start = (function start(){
var signinLink = goog.dom.getElement("signout");
return signinLink.onclick = landing.onClickHandler;
});
window.onload = landing.start;
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return cljs.core.print.call(null,"reloaded");
})], null));

//# sourceMappingURL=landing.js.map