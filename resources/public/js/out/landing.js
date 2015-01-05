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
landing.view = (function view__$1(){
return view.generate_view.call(null,landing.app_state);
});
enfocus.core.load_remote_dom.call(null,"/landing-body.html","remote/landing-body.html","en19551_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/landing-body.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/landing-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__20994 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/landing-body.html");
}).call(null);
var id_sym20991 = cljs.core.nth.call(null,vec__20994,(0),null);
var pnod20992 = cljs.core.nth.call(null,vec__20994,(1),null);
var pnod20992__$1 = enfocus.core.create_hidden_dom.call(null,pnod20992);
enfocus.core.i_at.call(null,id_sym20991,pnod20992__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core-header-panel"], null),enfocus.core.append.call(null,"&nbsp;"));

enfocus.core.reset_ids.call(null,id_sym20991,pnod20992__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20992__$1);
});
enfocus.core.load_remote_dom.call(null,"/account-row.html","remote/account-row.html","en20594_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/account-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/account-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__20998 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/account-row.html");
}).call(null);
var id_sym20995 = cljs.core.nth.call(null,vec__20998,(0),null);
var pnod20996 = cljs.core.nth.call(null,vec__20998,(1),null);
var pnod20996__$1 = enfocus.core.create_hidden_dom.call(null,pnod20996);
enfocus.core.i_at.call(null,id_sym20995,pnod20996__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#delete-account-row > text-node"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)));

enfocus.core.reset_ids.call(null,id_sym20995,pnod20996__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20996__$1);
});
enfocus.core.load_remote_dom.call(null,"/entry-row.html","remote/entry-row.html","en20790_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/entry-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/entry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__21002 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/entry-row.html");
}).call(null);
var id_sym20999 = cljs.core.nth.call(null,vec__21002,(0),null);
var pnod21000 = cljs.core.nth.call(null,vec__21002,(1),null);
var pnod21000__$1 = enfocus.core.create_hidden_dom.call(null,pnod21000);
enfocus.core.i_at.call(null,id_sym20999,pnod21000__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#delete-entry-row > text-node"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)));

enfocus.core.reset_ids.call(null,id_sym20999,pnod21000__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21000__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__21007 = cljs.core.seq.call(null,accounts);
var chunk__21008 = null;
var count__21009 = (0);
var i__21010 = (0);
while(true){
if((i__21010 < count__21009)){
var ech = cljs.core._nth.call(null,chunk__21008,i__21010);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__21011 = seq__21007;
var G__21012 = chunk__21008;
var G__21013 = count__21009;
var G__21014 = (i__21010 + (1));
seq__21007 = G__21011;
chunk__21008 = G__21012;
count__21009 = G__21013;
i__21010 = G__21014;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21007);
if(temp__4126__auto__){
var seq__21007__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21007__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__21007__$1);
var G__21015 = cljs.core.chunk_rest.call(null,seq__21007__$1);
var G__21016 = c__13332__auto__;
var G__21017 = cljs.core.count.call(null,c__13332__auto__);
var G__21018 = (0);
seq__21007 = G__21015;
chunk__21008 = G__21016;
count__21009 = G__21017;
i__21010 = G__21018;
continue;
} else {
var ech = cljs.core.first.call(null,seq__21007__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__21019 = cljs.core.next.call(null,seq__21007__$1);
var G__21020 = null;
var G__21021 = (0);
var G__21022 = (0);
seq__21007 = G__21019;
chunk__21008 = G__21020;
count__21009 = G__21021;
i__21010 = G__21022;
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
var seq__21027 = cljs.core.seq.call(null,entries);
var chunk__21028 = null;
var count__21029 = (0);
var i__21030 = (0);
while(true){
if((i__21030 < count__21029)){
var ech = cljs.core._nth.call(null,chunk__21028,i__21030);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21031 = seq__21027;
var G__21032 = chunk__21028;
var G__21033 = count__21029;
var G__21034 = (i__21030 + (1));
seq__21027 = G__21031;
chunk__21028 = G__21032;
count__21029 = G__21033;
i__21030 = G__21034;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21027);
if(temp__4126__auto__){
var seq__21027__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21027__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__21027__$1);
var G__21035 = cljs.core.chunk_rest.call(null,seq__21027__$1);
var G__21036 = c__13332__auto__;
var G__21037 = cljs.core.count.call(null,c__13332__auto__);
var G__21038 = (0);
seq__21027 = G__21035;
chunk__21028 = G__21036;
count__21029 = G__21037;
i__21030 = G__21038;
continue;
} else {
var ech = cljs.core.first.call(null,seq__21027__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21039 = cljs.core.next.call(null,seq__21027__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__21027 = G__21039;
chunk__21028 = G__21040;
count__21029 = G__21041;
i__21030 = G__21042;
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