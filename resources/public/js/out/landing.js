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
var seq__23086 = cljs.core.seq.call(null,accounts);
var chunk__23087 = null;
var count__23088 = (0);
var i__23089 = (0);
while(true){
if((i__23089 < count__23088)){
var ech = cljs.core._nth.call(null,chunk__23087,i__23089);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.accounts_template.call(null,ech)));

var G__23090 = seq__23086;
var G__23091 = chunk__23087;
var G__23092 = count__23088;
var G__23093 = (i__23089 + (1));
seq__23086 = G__23090;
chunk__23087 = G__23091;
count__23088 = G__23092;
i__23089 = G__23093;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23086);
if(temp__4126__auto__){
var seq__23086__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23086__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__23086__$1);
var G__23094 = cljs.core.chunk_rest.call(null,seq__23086__$1);
var G__23095 = c__13332__auto__;
var G__23096 = cljs.core.count.call(null,c__13332__auto__);
var G__23097 = (0);
seq__23086 = G__23094;
chunk__23087 = G__23095;
count__23088 = G__23096;
i__23089 = G__23097;
continue;
} else {
var ech = cljs.core.first.call(null,seq__23086__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.accounts_template.call(null,ech)));

var G__23098 = cljs.core.next.call(null,seq__23086__$1);
var G__23099 = null;
var G__23100 = (0);
var G__23101 = (0);
seq__23086 = G__23098;
chunk__23087 = G__23099;
count__23088 = G__23100;
i__23089 = G__23101;
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
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.account_details_template.call(null,account)));
});
landing.render_entry_list = (function render_entry_list(entries,loc){
var seq__23106 = cljs.core.seq.call(null,entries);
var chunk__23107 = null;
var count__23108 = (0);
var i__23109 = (0);
while(true){
if((i__23109 < count__23108)){
var ech = cljs.core._nth.call(null,chunk__23107,i__23109);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.entries_template.call(null,ech)));

var G__23110 = seq__23106;
var G__23111 = chunk__23107;
var G__23112 = count__23108;
var G__23113 = (i__23109 + (1));
seq__23106 = G__23110;
chunk__23107 = G__23111;
count__23108 = G__23112;
i__23109 = G__23113;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23106);
if(temp__4126__auto__){
var seq__23106__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23106__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__23106__$1);
var G__23114 = cljs.core.chunk_rest.call(null,seq__23106__$1);
var G__23115 = c__13332__auto__;
var G__23116 = cljs.core.count.call(null,c__13332__auto__);
var G__23117 = (0);
seq__23106 = G__23114;
chunk__23107 = G__23115;
count__23108 = G__23116;
i__23109 = G__23117;
continue;
} else {
var ech = cljs.core.first.call(null,seq__23106__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,template.entries_template.call(null,ech)));

var G__23118 = cljs.core.next.call(null,seq__23106__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__23106 = G__23118;
chunk__23107 = G__23119;
count__23108 = G__23120;
i__23109 = G__23121;
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

var seq__23128 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__23129 = null;
var count__23130 = (0);
var i__23131 = (0);
while(true){
if((i__23131 < count__23130)){
var map__23132 = cljs.core._nth.call(null,chunk__23129,i__23131);
var map__23132__$1 = ((cljs.core.seq_QMARK_.call(null,map__23132))?cljs.core.apply.call(null,cljs.core.hash_map,map__23132):map__23132);
var path = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__23134 = seq__23128;
var G__23135 = chunk__23129;
var G__23136 = count__23130;
var G__23137 = (i__23131 + (1));
seq__23128 = G__23134;
chunk__23129 = G__23135;
count__23130 = G__23136;
i__23131 = G__23137;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23128);
if(temp__4126__auto__){
var seq__23128__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23128__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__23128__$1);
var G__23138 = cljs.core.chunk_rest.call(null,seq__23128__$1);
var G__23139 = c__13332__auto__;
var G__23140 = cljs.core.count.call(null,c__13332__auto__);
var G__23141 = (0);
seq__23128 = G__23138;
chunk__23129 = G__23139;
count__23130 = G__23140;
i__23131 = G__23141;
continue;
} else {
var map__23133 = cljs.core.first.call(null,seq__23128__$1);
var map__23133__$1 = ((cljs.core.seq_QMARK_.call(null,map__23133))?cljs.core.apply.call(null,cljs.core.hash_map,map__23133):map__23133);
var path = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__23142 = cljs.core.next.call(null,seq__23128__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__23128 = G__23142;
chunk__23129 = G__23143;
count__23130 = G__23144;
i__23131 = G__23145;
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
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return cljs.core.print.call(null,"reloaded");
})], null));

//# sourceMappingURL=landing.js.map