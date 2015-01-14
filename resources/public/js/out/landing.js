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



if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledlanding-body.html") == null)){
var vec__19193_19198 = enfocus.core.replace_ids.call(null,"en10935_","<core-header-panel flex fit>\n  <core-toolbar layout>\n    <div class=\"tk-lust-script header-logo\">bkeeping</div>\n    <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n    <span flex>&nbsp;</span>\n    <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n  </core-toolbar>\n\n  <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n    <core-header-panel navigation flex mode=\"seamed\">\n      <core-toolbar>Accounts</core-toolbar>\n      <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n        <section>\n          <div id=\"accounts-pane\" slide-from-right>\n          </div>\n        </section>\n        <section>\n          <div id=\"account-details-pane\" slide-from-right>\n          </div>\n        </section>\n      </core-animated-pages>\n    </core-header-panel>\n    <div tool>Entries</div>\n    <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n      <section>\n        <div id=\"entries-pane\" slide-from-right>\n          <div>Entries</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-pane\" slide-from-right>\n          <div>Entry Details</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-part-pane\" slide-from-right>\n          <div>Entry Details Part</div>\n        </div>\n      </section>\n    </core-animated-pages>\n  </core-scaffold>\n</core-header-panel>\n");
var sym__5284__auto___19199 = cljs.core.nth.call(null,vec__19193_19198,(0),null);
var txt__5285__auto___19200 = cljs.core.nth.call(null,vec__19193_19198,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___19199,txt__5285__auto___19200], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__19197 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym19194 = cljs.core.nth.call(null,vec__19197,(0),null);
var pnod19195 = cljs.core.nth.call(null,vec__19197,(1),null);
var pnod19195__$1 = enfocus.core.create_hidden_dom.call(null,pnod19195);
enfocus.core.i_at.call(null,id_sym19194,pnod19195__$1);

enfocus.core.reset_ids.call(null,id_sym19194,pnod19195__$1);

return enfocus.core.remove_node_return_child.call(null,pnod19195__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__19201_19206 = enfocus.core.replace_ids.call(null,"en10944_","<div class=\"delete-account-row\" horizontal layout>\n  <paper-button class=\"delete-account-button\" noink raised></paper-button>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__5284__auto___19207 = cljs.core.nth.call(null,vec__19201_19206,(0),null);
var txt__5285__auto___19208 = cljs.core.nth.call(null,vec__19201_19206,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___19207,txt__5285__auto___19208], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__19205 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym19202 = cljs.core.nth.call(null,vec__19205,(0),null);
var pnod19203 = cljs.core.nth.call(null,vec__19205,(1),null);
var pnod19203__$1 = enfocus.core.create_hidden_dom.call(null,pnod19203);
enfocus.core.i_at.call(null,id_sym19202,pnod19203__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__19205,id_sym19202,pnod19203,pnod19203__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_account_details.call(null,account,loc);

return template.transitionAccountsForward.call(null);
});})(vec__19205,id_sym19202,pnod19203,pnod19203__$1))
));

enfocus.core.reset_ids.call(null,id_sym19202,pnod19203__$1);

return enfocus.core.remove_node_return_child.call(null,pnod19203__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__19209_19214 = enfocus.core.replace_ids.call(null,"en10953_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button id=\"account-details-cancel\" noink raised>cancel</paper-button>\n    <paper-button id=\"account-details-save\" noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___19215 = cljs.core.nth.call(null,vec__19209_19214,(0),null);
var txt__5285__auto___19216 = cljs.core.nth.call(null,vec__19209_19214,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___19215,txt__5285__auto___19216], null));
} else {
}

landing.account_details_template = (function account_details_template(account){
var vec__19213 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym19210 = cljs.core.nth.call(null,vec__19213,(0),null);
var pnod19211 = cljs.core.nth.call(null,vec__19213,(1),null);
var pnod19211__$1 = enfocus.core.create_hidden_dom.call(null,pnod19211);
enfocus.core.i_at.call(null,id_sym19210,pnod19211__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__19213,id_sym19210,pnod19211,pnod19211__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__19213,id_sym19210,pnod19211,pnod19211__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__19213,id_sym19210,pnod19211,pnod19211__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__19213,id_sym19210,pnod19211,pnod19211__$1))
));

enfocus.core.reset_ids.call(null,id_sym19210,pnod19211__$1);

return enfocus.core.remove_node_return_child.call(null,pnod19211__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__19217_19222 = enfocus.core.replace_ids.call(null,"en10962_","<div class=\"delete-entry-row\" horizontal layout>\n  <paper-button class=\"delete-entry-button\" noink raised></paper-button>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__5284__auto___19223 = cljs.core.nth.call(null,vec__19217_19222,(0),null);
var txt__5285__auto___19224 = cljs.core.nth.call(null,vec__19217_19222,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___19223,txt__5285__auto___19224], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__19221 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym19218 = cljs.core.nth.call(null,vec__19221,(0),null);
var pnod19219 = cljs.core.nth.call(null,vec__19221,(1),null);
var pnod19219__$1 = enfocus.core.create_hidden_dom.call(null,pnod19219);
enfocus.core.i_at.call(null,id_sym19218,pnod19219__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')));

enfocus.core.reset_ids.call(null,id_sym19218,pnod19219__$1);

return enfocus.core.remove_node_return_child.call(null,pnod19219__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__19229 = cljs.core.seq.call(null,accounts);
var chunk__19230 = null;
var count__19231 = (0);
var i__19232 = (0);
while(true){
if((i__19232 < count__19231)){
var ech = cljs.core._nth.call(null,chunk__19230,i__19232);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__19233 = seq__19229;
var G__19234 = chunk__19230;
var G__19235 = count__19231;
var G__19236 = (i__19232 + (1));
seq__19229 = G__19233;
chunk__19230 = G__19234;
count__19231 = G__19235;
i__19232 = G__19236;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19229);
if(temp__4126__auto__){
var seq__19229__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19229__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__19229__$1);
var G__19237 = cljs.core.chunk_rest.call(null,seq__19229__$1);
var G__19238 = c__4409__auto__;
var G__19239 = cljs.core.count.call(null,c__4409__auto__);
var G__19240 = (0);
seq__19229 = G__19237;
chunk__19230 = G__19238;
count__19231 = G__19239;
i__19232 = G__19240;
continue;
} else {
var ech = cljs.core.first.call(null,seq__19229__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__19241 = cljs.core.next.call(null,seq__19229__$1);
var G__19242 = null;
var G__19243 = (0);
var G__19244 = (0);
seq__19229 = G__19241;
chunk__19230 = G__19242;
count__19231 = G__19243;
i__19232 = G__19244;
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
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.content.call(null,landing.account_details_template.call(null,account)));
});
landing.render_entry_list = (function render_entry_list(entries,loc){
var seq__19249 = cljs.core.seq.call(null,entries);
var chunk__19250 = null;
var count__19251 = (0);
var i__19252 = (0);
while(true){
if((i__19252 < count__19251)){
var ech = cljs.core._nth.call(null,chunk__19250,i__19252);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__19253 = seq__19249;
var G__19254 = chunk__19250;
var G__19255 = count__19251;
var G__19256 = (i__19252 + (1));
seq__19249 = G__19253;
chunk__19250 = G__19254;
count__19251 = G__19255;
i__19252 = G__19256;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19249);
if(temp__4126__auto__){
var seq__19249__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19249__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__19249__$1);
var G__19257 = cljs.core.chunk_rest.call(null,seq__19249__$1);
var G__19258 = c__4409__auto__;
var G__19259 = cljs.core.count.call(null,c__4409__auto__);
var G__19260 = (0);
seq__19249 = G__19257;
chunk__19250 = G__19258;
count__19251 = G__19259;
i__19252 = G__19260;
continue;
} else {
var ech = cljs.core.first.call(null,seq__19249__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__19261 = cljs.core.next.call(null,seq__19249__$1);
var G__19262 = null;
var G__19263 = (0);
var G__19264 = (0);
seq__19249 = G__19261;
chunk__19250 = G__19262;
count__19251 = G__19263;
i__19252 = G__19264;
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
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null),enfocus.core.content.call(null,landing.landing_template.call(null)));
});
landing.data_location_mapping.call(null,landing.render_account_details);
landing.render = (function render(){
landing.render_body.call(null);

var seq__19271 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__19272 = null;
var count__19273 = (0);
var i__19274 = (0);
while(true){
if((i__19274 < count__19273)){
var map__19275 = cljs.core._nth.call(null,chunk__19272,i__19274);
var map__19275__$1 = ((cljs.core.seq_QMARK_.call(null,map__19275))?cljs.core.apply.call(null,cljs.core.hash_map,map__19275):map__19275);
var path = cljs.core.get.call(null,map__19275__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__19275__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__19277 = seq__19271;
var G__19278 = chunk__19272;
var G__19279 = count__19273;
var G__19280 = (i__19274 + (1));
seq__19271 = G__19277;
chunk__19272 = G__19278;
count__19273 = G__19279;
i__19274 = G__19280;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19271);
if(temp__4126__auto__){
var seq__19271__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19271__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__19271__$1);
var G__19281 = cljs.core.chunk_rest.call(null,seq__19271__$1);
var G__19282 = c__4409__auto__;
var G__19283 = cljs.core.count.call(null,c__4409__auto__);
var G__19284 = (0);
seq__19271 = G__19281;
chunk__19272 = G__19282;
count__19273 = G__19283;
i__19274 = G__19284;
continue;
} else {
var map__19276 = cljs.core.first.call(null,seq__19271__$1);
var map__19276__$1 = ((cljs.core.seq_QMARK_.call(null,map__19276))?cljs.core.apply.call(null,cljs.core.hash_map,map__19276):map__19276);
var path = cljs.core.get.call(null,map__19276__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__19276__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__19285 = cljs.core.next.call(null,seq__19271__$1);
var G__19286 = null;
var G__19287 = (0);
var G__19288 = (0);
seq__19271 = G__19285;
chunk__19272 = G__19286;
count__19273 = G__19287;
i__19274 = G__19288;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render.call(null);

//# sourceMappingURL=landing.js.map