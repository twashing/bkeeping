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
var vec__10936_10941 = enfocus.core.replace_ids.call(null,"en10935_","<core-header-panel flex fit>\n  <core-toolbar layout>\n    <div class=\"tk-lust-script header-logo\">bkeeping</div>\n    <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n    <span flex>&nbsp;</span>\n    <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n  </core-toolbar>\n\n  <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n    <core-header-panel navigation flex mode=\"seamed\">\n      <core-toolbar>Accounts</core-toolbar>\n      <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n        <section>\n          <div id=\"accounts-pane\" slide-from-right>\n          </div>\n        </section>\n        <section>\n          <div id=\"account-details-pane\" slide-from-right>\n          </div>\n        </section>\n      </core-animated-pages>\n    </core-header-panel>\n    <div tool>Entries</div>\n    <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n      <section>\n        <div id=\"entries-pane\" slide-from-right>\n          <div>Entries</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-pane\" slide-from-right>\n          <div>Entry Details</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-part-pane\" slide-from-right>\n          <div>Entry Details Part</div>\n        </div>\n      </section>\n    </core-animated-pages>\n  </core-scaffold>\n</core-header-panel>\n");
var sym__5284__auto___10942 = cljs.core.nth.call(null,vec__10936_10941,(0),null);
var txt__5285__auto___10943 = cljs.core.nth.call(null,vec__10936_10941,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___10942,txt__5285__auto___10943], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__10940 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym10937 = cljs.core.nth.call(null,vec__10940,(0),null);
var pnod10938 = cljs.core.nth.call(null,vec__10940,(1),null);
var pnod10938__$1 = enfocus.core.create_hidden_dom.call(null,pnod10938);
enfocus.core.i_at.call(null,id_sym10937,pnod10938__$1);

enfocus.core.reset_ids.call(null,id_sym10937,pnod10938__$1);

return enfocus.core.remove_node_return_child.call(null,pnod10938__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__10945_10950 = enfocus.core.replace_ids.call(null,"en10944_","<div class=\"delete-account-row\" horizontal layout>\n  <paper-button class=\"delete-account-button\" noink raised></paper-button>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__5284__auto___10951 = cljs.core.nth.call(null,vec__10945_10950,(0),null);
var txt__5285__auto___10952 = cljs.core.nth.call(null,vec__10945_10950,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___10951,txt__5285__auto___10952], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__10949 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym10946 = cljs.core.nth.call(null,vec__10949,(0),null);
var pnod10947 = cljs.core.nth.call(null,vec__10949,(1),null);
var pnod10947__$1 = enfocus.core.create_hidden_dom.call(null,pnod10947);
enfocus.core.i_at.call(null,id_sym10946,pnod10947__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__10949,id_sym10946,pnod10947,pnod10947__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_account_details.call(null,account,loc);

return template.transitionAccountsForward.call(null);
});})(vec__10949,id_sym10946,pnod10947,pnod10947__$1))
));

enfocus.core.reset_ids.call(null,id_sym10946,pnod10947__$1);

return enfocus.core.remove_node_return_child.call(null,pnod10947__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__10954_10959 = enfocus.core.replace_ids.call(null,"en10953_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button id=\"account-details-cancel\" noink raised>cancel</paper-button>\n    <paper-button id=\"account-details-save\" noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___10960 = cljs.core.nth.call(null,vec__10954_10959,(0),null);
var txt__5285__auto___10961 = cljs.core.nth.call(null,vec__10954_10959,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___10960,txt__5285__auto___10961], null));
} else {
}

landing.account_details_template = (function account_details_template(account){
var vec__10958 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym10955 = cljs.core.nth.call(null,vec__10958,(0),null);
var pnod10956 = cljs.core.nth.call(null,vec__10958,(1),null);
var pnod10956__$1 = enfocus.core.create_hidden_dom.call(null,pnod10956);
enfocus.core.i_at.call(null,id_sym10955,pnod10956__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__10958,id_sym10955,pnod10956,pnod10956__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__10958,id_sym10955,pnod10956,pnod10956__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__10958,id_sym10955,pnod10956,pnod10956__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__10958,id_sym10955,pnod10956,pnod10956__$1))
));

enfocus.core.reset_ids.call(null,id_sym10955,pnod10956__$1);

return enfocus.core.remove_node_return_child.call(null,pnod10956__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__10963_10968 = enfocus.core.replace_ids.call(null,"en10962_","<div class=\"delete-entry-row\" horizontal layout>\n  <paper-button class=\"delete-entry-button\" noink raised></paper-button>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__5284__auto___10969 = cljs.core.nth.call(null,vec__10963_10968,(0),null);
var txt__5285__auto___10970 = cljs.core.nth.call(null,vec__10963_10968,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___10969,txt__5285__auto___10970], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__10967 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym10964 = cljs.core.nth.call(null,vec__10967,(0),null);
var pnod10965 = cljs.core.nth.call(null,vec__10967,(1),null);
var pnod10965__$1 = enfocus.core.create_hidden_dom.call(null,pnod10965);
enfocus.core.i_at.call(null,id_sym10964,pnod10965__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__10967,id_sym10964,pnod10965,pnod10965__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_entry_details.call(null,entry,loc);

return template.transitionEntriesForward.call(null);
});})(vec__10967,id_sym10964,pnod10965,pnod10965__$1))
));

enfocus.core.reset_ids.call(null,id_sym10964,pnod10965__$1);

return enfocus.core.remove_node_return_child.call(null,pnod10965__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-details.html") == null)){
var vec__10972_10977 = enfocus.core.replace_ids.call(null,"en10971_","<div slide-from-right>\n\n  <div horizontal layout>\n    <paper-input label=\"Date\" id=\"datepicker\" />\n    <script> \"\n      var picker = new Pikaday(\n      {\n      field: document.getElementById('datepicker'),\n      firstDay: 1,\n      minDate: new Date('2000-01-01'),\n      maxDate: new Date('2020-12-31'),\n      yearRange: [2000,2020]\n      });\n      \"</script>\n  </div>\n\n  <div horizontal layout>\n    <paper-input label=\"Balance\" disabled>\n      <paper-dropdown-menu label=\"Currency\">\n        <paper-dropdown class=\"dropdown core-transition core-closed\">\n          <core-menu class=\"menu\">\n            <paper-item>\"CAD\"</paper-item>\n            <paper-item>\"USD\"</paper-item>\n            <paper-item>\"EUR\"</paper-item>\n          </core-menu>\n        </paper-dropdown>\n      </paper-dropdown-menu>\n  </div>\n\n  <div horizontal layout>\n    <table class=\"pure-table\">\n      <thead>\n        <tr>\n          <th>debit</th>\n          <th>credit</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr onclick=\"template.transitionEntriesForward()\">\n          <td>$ 1000</td>\n          <td>&nbsp;</td>\n        </tr>\n        <tr onclick=\"template.transitionEntriesForward()\">\n          <td>&nbsp;</td>\n          <td>$ 1000</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div horizontal layout>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackwards()\">cancel</paper-button>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackwards()\">save </paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___10978 = cljs.core.nth.call(null,vec__10972_10977,(0),null);
var txt__5285__auto___10979 = cljs.core.nth.call(null,vec__10972_10977,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___10978,txt__5285__auto___10979], null));
} else {
}

landing.entry_details_template = (function entry_details_template(entry){
var vec__10976 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-details.html");
}).call(null);
var id_sym10973 = cljs.core.nth.call(null,vec__10976,(0),null);
var pnod10974 = cljs.core.nth.call(null,vec__10976,(1),null);
var pnod10974__$1 = enfocus.core.create_hidden_dom.call(null,pnod10974);
enfocus.core.i_at.call(null,id_sym10973,pnod10974__$1);

enfocus.core.reset_ids.call(null,id_sym10973,pnod10974__$1);

return enfocus.core.remove_node_return_child.call(null,pnod10974__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__10984 = cljs.core.seq.call(null,accounts);
var chunk__10985 = null;
var count__10986 = (0);
var i__10987 = (0);
while(true){
if((i__10987 < count__10986)){
var ech = cljs.core._nth.call(null,chunk__10985,i__10987);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__10988 = seq__10984;
var G__10989 = chunk__10985;
var G__10990 = count__10986;
var G__10991 = (i__10987 + (1));
seq__10984 = G__10988;
chunk__10985 = G__10989;
count__10986 = G__10990;
i__10987 = G__10991;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10984);
if(temp__4126__auto__){
var seq__10984__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10984__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__10984__$1);
var G__10992 = cljs.core.chunk_rest.call(null,seq__10984__$1);
var G__10993 = c__4409__auto__;
var G__10994 = cljs.core.count.call(null,c__4409__auto__);
var G__10995 = (0);
seq__10984 = G__10992;
chunk__10985 = G__10993;
count__10986 = G__10994;
i__10987 = G__10995;
continue;
} else {
var ech = cljs.core.first.call(null,seq__10984__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__10996 = cljs.core.next.call(null,seq__10984__$1);
var G__10997 = null;
var G__10998 = (0);
var G__10999 = (0);
seq__10984 = G__10996;
chunk__10985 = G__10997;
count__10986 = G__10998;
i__10987 = G__10999;
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
var seq__11004 = cljs.core.seq.call(null,entries);
var chunk__11005 = null;
var count__11006 = (0);
var i__11007 = (0);
while(true){
if((i__11007 < count__11006)){
var ech = cljs.core._nth.call(null,chunk__11005,i__11007);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__11008 = seq__11004;
var G__11009 = chunk__11005;
var G__11010 = count__11006;
var G__11011 = (i__11007 + (1));
seq__11004 = G__11008;
chunk__11005 = G__11009;
count__11006 = G__11010;
i__11007 = G__11011;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11004);
if(temp__4126__auto__){
var seq__11004__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11004__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__11004__$1);
var G__11012 = cljs.core.chunk_rest.call(null,seq__11004__$1);
var G__11013 = c__4409__auto__;
var G__11014 = cljs.core.count.call(null,c__4409__auto__);
var G__11015 = (0);
seq__11004 = G__11012;
chunk__11005 = G__11013;
count__11006 = G__11014;
i__11007 = G__11015;
continue;
} else {
var ech = cljs.core.first.call(null,seq__11004__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__11016 = cljs.core.next.call(null,seq__11004__$1);
var G__11017 = null;
var G__11018 = (0);
var G__11019 = (0);
seq__11004 = G__11016;
chunk__11005 = G__11017;
count__11006 = G__11018;
i__11007 = G__11019;
continue;
}
} else {
return null;
}
}
break;
}
});
landing.render_entry_details = (function render_entry_details(entry,loc){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.content.call(null,landing.entry_details_template.call(null,entry)));
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

var seq__11026 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__11027 = null;
var count__11028 = (0);
var i__11029 = (0);
while(true){
if((i__11029 < count__11028)){
var map__11030 = cljs.core._nth.call(null,chunk__11027,i__11029);
var map__11030__$1 = ((cljs.core.seq_QMARK_.call(null,map__11030))?cljs.core.apply.call(null,cljs.core.hash_map,map__11030):map__11030);
var path = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__11032 = seq__11026;
var G__11033 = chunk__11027;
var G__11034 = count__11028;
var G__11035 = (i__11029 + (1));
seq__11026 = G__11032;
chunk__11027 = G__11033;
count__11028 = G__11034;
i__11029 = G__11035;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11026);
if(temp__4126__auto__){
var seq__11026__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11026__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__11026__$1);
var G__11036 = cljs.core.chunk_rest.call(null,seq__11026__$1);
var G__11037 = c__4409__auto__;
var G__11038 = cljs.core.count.call(null,c__4409__auto__);
var G__11039 = (0);
seq__11026 = G__11036;
chunk__11027 = G__11037;
count__11028 = G__11038;
i__11029 = G__11039;
continue;
} else {
var map__11031 = cljs.core.first.call(null,seq__11026__$1);
var map__11031__$1 = ((cljs.core.seq_QMARK_.call(null,map__11031))?cljs.core.apply.call(null,cljs.core.hash_map,map__11031):map__11031);
var path = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__11040 = cljs.core.next.call(null,seq__11026__$1);
var G__11041 = null;
var G__11042 = (0);
var G__11043 = (0);
seq__11026 = G__11040;
chunk__11027 = G__11041;
count__11028 = G__11042;
i__11029 = G__11043;
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