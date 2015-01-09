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
var vec__25743 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/landing-body.html");
}).call(null);
var id_sym25740 = cljs.core.nth.call(null,vec__25743,(0),null);
var pnod25741 = cljs.core.nth.call(null,vec__25743,(1),null);
var pnod25741__$1 = enfocus.core.create_hidden_dom.call(null,pnod25741);
enfocus.core.i_at.call(null,id_sym25740,pnod25741__$1);

enfocus.core.reset_ids.call(null,id_sym25740,pnod25741__$1);

return enfocus.core.remove_node_return_child.call(null,pnod25741__$1);
});
enfocus.core.load_remote_dom.call(null,"/account-row.html","remote/account-row.html","en19556_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/account-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/account-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__25747 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/account-row.html");
}).call(null);
var id_sym25744 = cljs.core.nth.call(null,vec__25747,(0),null);
var pnod25745 = cljs.core.nth.call(null,vec__25747,(1),null);
var pnod25745__$1 = enfocus.core.create_hidden_dom.call(null,pnod25745);
enfocus.core.i_at.call(null,id_sym25744,pnod25745__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)));

enfocus.core.reset_ids.call(null,id_sym25744,pnod25745__$1);

return enfocus.core.remove_node_return_child.call(null,pnod25745__$1);
});
enfocus.core.load_remote_dom.call(null,"/entry-row.html","remote/entry-row.html","en19561_");

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/entry-row.html") == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/entry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__25751 = (function (){
return enfocus.core.get_cached_dom.call(null,"remote/entry-row.html");
}).call(null);
var id_sym25748 = cljs.core.nth.call(null,vec__25751,(0),null);
var pnod25749 = cljs.core.nth.call(null,vec__25751,(1),null);
var pnod25749__$1 = enfocus.core.create_hidden_dom.call(null,pnod25749);
enfocus.core.i_at.call(null,id_sym25748,pnod25749__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')));

enfocus.core.reset_ids.call(null,id_sym25748,pnod25749__$1);

return enfocus.core.remove_node_return_child.call(null,pnod25749__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__25756 = cljs.core.seq.call(null,accounts);
var chunk__25757 = null;
var count__25758 = (0);
var i__25759 = (0);
while(true){
if((i__25759 < count__25758)){
var ech = cljs.core._nth.call(null,chunk__25757,i__25759);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__25760 = seq__25756;
var G__25761 = chunk__25757;
var G__25762 = count__25758;
var G__25763 = (i__25759 + (1));
seq__25756 = G__25760;
chunk__25757 = G__25761;
count__25758 = G__25762;
i__25759 = G__25763;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25756);
if(temp__4126__auto__){
var seq__25756__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25756__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__25756__$1);
var G__25764 = cljs.core.chunk_rest.call(null,seq__25756__$1);
var G__25765 = c__13332__auto__;
var G__25766 = cljs.core.count.call(null,c__13332__auto__);
var G__25767 = (0);
seq__25756 = G__25764;
chunk__25757 = G__25765;
count__25758 = G__25766;
i__25759 = G__25767;
continue;
} else {
var ech = cljs.core.first.call(null,seq__25756__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__25768 = cljs.core.next.call(null,seq__25756__$1);
var G__25769 = null;
var G__25770 = (0);
var G__25771 = (0);
seq__25756 = G__25768;
chunk__25757 = G__25769;
count__25758 = G__25770;
i__25759 = G__25771;
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
var seq__25776 = cljs.core.seq.call(null,entries);
var chunk__25777 = null;
var count__25778 = (0);
var i__25779 = (0);
while(true){
if((i__25779 < count__25778)){
var ech = cljs.core._nth.call(null,chunk__25777,i__25779);
bkeeping.console_log.call(null,[cljs.core.str("ech["),cljs.core.str(ech),cljs.core.str("]")].join(''));

enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__25780 = seq__25776;
var G__25781 = chunk__25777;
var G__25782 = count__25778;
var G__25783 = (i__25779 + (1));
seq__25776 = G__25780;
chunk__25777 = G__25781;
count__25778 = G__25782;
i__25779 = G__25783;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25776);
if(temp__4126__auto__){
var seq__25776__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25776__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__25776__$1);
var G__25784 = cljs.core.chunk_rest.call(null,seq__25776__$1);
var G__25785 = c__13332__auto__;
var G__25786 = cljs.core.count.call(null,c__13332__auto__);
var G__25787 = (0);
seq__25776 = G__25784;
chunk__25777 = G__25785;
count__25778 = G__25786;
i__25779 = G__25787;
continue;
} else {
var ech = cljs.core.first.call(null,seq__25776__$1);
bkeeping.console_log.call(null,[cljs.core.str("ech["),cljs.core.str(ech),cljs.core.str("]")].join(''));

enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__25788 = cljs.core.next.call(null,seq__25776__$1);
var G__25789 = null;
var G__25790 = (0);
var G__25791 = (0);
seq__25776 = G__25788;
chunk__25777 = G__25789;
count__25778 = G__25790;
i__25779 = G__25791;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.data_location_mapping = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#accounts-pane",new cljs.core.Keyword(null,"fn","fn",-1175266204),landing.render_account_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#accounts-details-pane"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entries-pane",new cljs.core.Keyword(null,"fn","fn",-1175266204),landing.render_entry_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-pane"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-part-pane"], null)], true, false);
landing.render_path = (function render_path(path,data){
var pmapping = landing.data_location_mapping.call(null,path);
var mfn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(pmapping);
var mloc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(pmapping);
bkeeping.console_log.call(null,[cljs.core.str("sanity check / path["),cljs.core.str(path),cljs.core.str("] / data["),cljs.core.str(data),cljs.core.str("] / mloc["),cljs.core.str(mloc),cljs.core.str("]")].join(''));

return mfn.call(null,data,mloc);
});
landing.render = (function render(){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null),enfocus.core.content.call(null,landing.landing_template.call(null)));
});
landing.render_all = (function render_all(){
landing.render.call(null);

var seq__25798 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__25799 = null;
var count__25800 = (0);
var i__25801 = (0);
while(true){
if((i__25801 < count__25800)){
var map__25802 = cljs.core._nth.call(null,chunk__25799,i__25801);
var map__25802__$1 = ((cljs.core.seq_QMARK_.call(null,map__25802))?cljs.core.apply.call(null,cljs.core.hash_map,map__25802):map__25802);
var path = cljs.core.get.call(null,map__25802__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__25802__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__25804 = seq__25798;
var G__25805 = chunk__25799;
var G__25806 = count__25800;
var G__25807 = (i__25801 + (1));
seq__25798 = G__25804;
chunk__25799 = G__25805;
count__25800 = G__25806;
i__25801 = G__25807;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25798);
if(temp__4126__auto__){
var seq__25798__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25798__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__25798__$1);
var G__25808 = cljs.core.chunk_rest.call(null,seq__25798__$1);
var G__25809 = c__13332__auto__;
var G__25810 = cljs.core.count.call(null,c__13332__auto__);
var G__25811 = (0);
seq__25798 = G__25808;
chunk__25799 = G__25809;
count__25800 = G__25810;
i__25801 = G__25811;
continue;
} else {
var map__25803 = cljs.core.first.call(null,seq__25798__$1);
var map__25803__$1 = ((cljs.core.seq_QMARK_.call(null,map__25803))?cljs.core.apply.call(null,cljs.core.hash_map,map__25803):map__25803);
var path = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__25812 = cljs.core.next.call(null,seq__25798__$1);
var G__25813 = null;
var G__25814 = (0);
var G__25815 = (0);
seq__25798 = G__25812;
chunk__25799 = G__25813;
count__25800 = G__25814;
i__25801 = G__25815;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render_all.call(null);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return cljs.core.print.call(null,"reloaded");
})], null));

//# sourceMappingURL=landing.js.map