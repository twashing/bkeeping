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
goog.require('template');
cljs.core.enable_console_print_BANG_.call(null);
landing.app_state = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null)], true),new cljs.core.Keyword(null,"journals","journals",-1915761091),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], true)], null)], true)], null));



landing.render_account_list = (function render_account_list(accounts,loc){
var seq__10975 = cljs.core.seq.call(null,accounts);
var chunk__10976 = null;
var count__10977 = (0);
var i__10978 = (0);
while(true){
if((i__10978 < count__10977)){
var ech = cljs.core._nth.call(null,chunk__10976,i__10978);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.accounts_template.call(null,ech)));

var G__10979 = seq__10975;
var G__10980 = chunk__10976;
var G__10981 = count__10977;
var G__10982 = (i__10978 + (1));
seq__10975 = G__10979;
chunk__10976 = G__10980;
count__10977 = G__10981;
i__10978 = G__10982;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10975);
if(temp__4126__auto__){
var seq__10975__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10975__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__10975__$1);
var G__10983 = cljs.core.chunk_rest.call(null,seq__10975__$1);
var G__10984 = c__4409__auto__;
var G__10985 = cljs.core.count.call(null,c__4409__auto__);
var G__10986 = (0);
seq__10975 = G__10983;
chunk__10976 = G__10984;
count__10977 = G__10985;
i__10978 = G__10986;
continue;
} else {
var ech = cljs.core.first.call(null,seq__10975__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.accounts_template.call(null,ech)));

var G__10987 = cljs.core.next.call(null,seq__10975__$1);
var G__10988 = null;
var G__10989 = (0);
var G__10990 = (0);
seq__10975 = G__10987;
chunk__10976 = G__10988;
count__10977 = G__10989;
i__10978 = G__10990;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render_account_details = (function render_account_details(account,loc){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.content.call(null,template.account_details_template.call(null,account)));
});
landing.render_entry_list = (function render_entry_list(entries,loc){
var seq__10995 = cljs.core.seq.call(null,entries);
var chunk__10996 = null;
var count__10997 = (0);
var i__10998 = (0);
while(true){
if((i__10998 < count__10997)){
var ech = cljs.core._nth.call(null,chunk__10996,i__10998);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.entries_template.call(null,ech)));

var G__10999 = seq__10995;
var G__11000 = chunk__10996;
var G__11001 = count__10997;
var G__11002 = (i__10998 + (1));
seq__10995 = G__10999;
chunk__10996 = G__11000;
count__10997 = G__11001;
i__10998 = G__11002;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10995);
if(temp__4126__auto__){
var seq__10995__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10995__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__10995__$1);
var G__11003 = cljs.core.chunk_rest.call(null,seq__10995__$1);
var G__11004 = c__4409__auto__;
var G__11005 = cljs.core.count.call(null,c__4409__auto__);
var G__11006 = (0);
seq__10995 = G__11003;
chunk__10996 = G__11004;
count__10997 = G__11005;
i__10998 = G__11006;
continue;
} else {
var ech = cljs.core.first.call(null,seq__10995__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.entries_template.call(null,ech)));

var G__11007 = cljs.core.next.call(null,seq__10995__$1);
var G__11008 = null;
var G__11009 = (0);
var G__11010 = (0);
seq__10995 = G__11007;
chunk__10996 = G__11008;
count__10997 = G__11009;
i__10998 = G__11010;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.data_location_mapping = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#accounts-pane",new cljs.core.Keyword(null,"fn","fn",-1175266204),landing.render_account_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#account-details-pane"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entries-pane",new cljs.core.Keyword(null,"fn","fn",-1175266204),landing.render_entry_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-pane"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),"#entry-details-part-pane"], null)], true, false);
landing.render_path = (function render_path(path,data){
var pmapping = landing.data_location_mapping.call(null,path);
var mfn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(pmapping);
var mloc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(pmapping);
return mfn.call(null,data,mloc);
});
landing.render_body = (function render_body(){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null),enfocus.core.content.call(null,template.landing_template.call(null)));
});
landing.render = (function render(){
landing.render_body.call(null);

var seq__11017 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__11018 = null;
var count__11019 = (0);
var i__11020 = (0);
while(true){
if((i__11020 < count__11019)){
var map__11021 = cljs.core._nth.call(null,chunk__11018,i__11020);
var map__11021__$1 = ((cljs.core.seq_QMARK_.call(null,map__11021))?cljs.core.apply.call(null,cljs.core.hash_map,map__11021):map__11021);
var path = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__11023 = seq__11017;
var G__11024 = chunk__11018;
var G__11025 = count__11019;
var G__11026 = (i__11020 + (1));
seq__11017 = G__11023;
chunk__11018 = G__11024;
count__11019 = G__11025;
i__11020 = G__11026;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11017);
if(temp__4126__auto__){
var seq__11017__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11017__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__11017__$1);
var G__11027 = cljs.core.chunk_rest.call(null,seq__11017__$1);
var G__11028 = c__4409__auto__;
var G__11029 = cljs.core.count.call(null,c__4409__auto__);
var G__11030 = (0);
seq__11017 = G__11027;
chunk__11018 = G__11028;
count__11019 = G__11029;
i__11020 = G__11030;
continue;
} else {
var map__11022 = cljs.core.first.call(null,seq__11017__$1);
var map__11022__$1 = ((cljs.core.seq_QMARK_.call(null,map__11022))?cljs.core.apply.call(null,cljs.core.hash_map,map__11022):map__11022);
var path = cljs.core.get.call(null,map__11022__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__11022__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__11031 = cljs.core.next.call(null,seq__11017__$1);
var G__11032 = null;
var G__11033 = (0);
var G__11034 = (0);
seq__11017 = G__11031;
chunk__11018 = G__11032;
count__11019 = G__11033;
i__11020 = G__11034;
continue;
}
} else {
return null;
}
}
break;
}
});
template.gen_templates.call(null,landing.data_location_mapping,landing.render_account_details);
landing.render.call(null);

//# sourceMappingURL=landing.js.map