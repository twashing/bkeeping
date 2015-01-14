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
var vec__18697_18702 = enfocus.core.replace_ids.call(null,"en10935_","<core-header-panel flex fit>\n  <core-toolbar layout>\n    <div class=\"tk-lust-script header-logo\">bkeeping</div>\n    <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n    <span flex>&nbsp;</span>\n    <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n  </core-toolbar>\n\n  <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n    <core-header-panel navigation flex mode=\"seamed\">\n      <core-toolbar>Accounts</core-toolbar>\n      <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n        <section>\n          <div id=\"accounts-pane\" slide-from-right>\n          </div>\n        </section>\n        <section>\n          <div id=\"account-details-pane\" slide-from-right>\n          </div>\n        </section>\n      </core-animated-pages>\n    </core-header-panel>\n    <div tool>Entries</div>\n    <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n      <section>\n        <div id=\"entries-pane\" slide-from-right>\n          <div>Entries</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-pane\" slide-from-right>\n          <div>Entry Details</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-part-pane\" slide-from-right>\n          <div>Entry Details Part</div>\n        </div>\n      </section>\n    </core-animated-pages>\n  </core-scaffold>\n</core-header-panel>\n");
var sym__5284__auto___18703 = cljs.core.nth.call(null,vec__18697_18702,(0),null);
var txt__5285__auto___18704 = cljs.core.nth.call(null,vec__18697_18702,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18703,txt__5285__auto___18704], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__18701 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym18698 = cljs.core.nth.call(null,vec__18701,(0),null);
var pnod18699 = cljs.core.nth.call(null,vec__18701,(1),null);
var pnod18699__$1 = enfocus.core.create_hidden_dom.call(null,pnod18699);
enfocus.core.i_at.call(null,id_sym18698,pnod18699__$1);

enfocus.core.reset_ids.call(null,id_sym18698,pnod18699__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18699__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__18705_18710 = enfocus.core.replace_ids.call(null,"en10944_","<div class=\"delete-account-row\" horizontal layout>\n  <paper-button class=\"delete-account-button\" noink raised></paper-button>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__5284__auto___18711 = cljs.core.nth.call(null,vec__18705_18710,(0),null);
var txt__5285__auto___18712 = cljs.core.nth.call(null,vec__18705_18710,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18711,txt__5285__auto___18712], null));
} else {
}

landing.accounts_template = (function accounts_template(account){
var vec__18709 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym18706 = cljs.core.nth.call(null,vec__18709,(0),null);
var pnod18707 = cljs.core.nth.call(null,vec__18709,(1),null);
var pnod18707__$1 = enfocus.core.create_hidden_dom.call(null,pnod18707);
enfocus.core.i_at.call(null,id_sym18706,pnod18707__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__18709,id_sym18706,pnod18707,pnod18707__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_account_details.call(null,account,loc);

return template.transitionAccountsForward.call(null);
});})(vec__18709,id_sym18706,pnod18707,pnod18707__$1))
));

enfocus.core.reset_ids.call(null,id_sym18706,pnod18707__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18707__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__18713_18718 = enfocus.core.replace_ids.call(null,"en10953_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button id=\"account-details-cancel\" noink raised>cancel</paper-button>\n    <paper-button id=\"account-details-save\" noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___18719 = cljs.core.nth.call(null,vec__18713_18718,(0),null);
var txt__5285__auto___18720 = cljs.core.nth.call(null,vec__18713_18718,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18719,txt__5285__auto___18720], null));
} else {
}

landing.account_details_template = (function account_details_template(account){
var vec__18717 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym18714 = cljs.core.nth.call(null,vec__18717,(0),null);
var pnod18715 = cljs.core.nth.call(null,vec__18717,(1),null);
var pnod18715__$1 = enfocus.core.create_hidden_dom.call(null,pnod18715);
enfocus.core.i_at.call(null,id_sym18714,pnod18715__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__18717,id_sym18714,pnod18715,pnod18715__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__18717,id_sym18714,pnod18715,pnod18715__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__18717,id_sym18714,pnod18715,pnod18715__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__18717,id_sym18714,pnod18715,pnod18715__$1))
));

enfocus.core.reset_ids.call(null,id_sym18714,pnod18715__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18715__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__18721_18726 = enfocus.core.replace_ids.call(null,"en10962_","<div class=\"delete-entry-row\" horizontal layout>\n  <paper-button class=\"delete-entry-button\" noink raised></paper-button>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__5284__auto___18727 = cljs.core.nth.call(null,vec__18721_18726,(0),null);
var txt__5285__auto___18728 = cljs.core.nth.call(null,vec__18721_18726,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18727,txt__5285__auto___18728], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__18725 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym18722 = cljs.core.nth.call(null,vec__18725,(0),null);
var pnod18723 = cljs.core.nth.call(null,vec__18725,(1),null);
var pnod18723__$1 = enfocus.core.create_hidden_dom.call(null,pnod18723);
enfocus.core.i_at.call(null,id_sym18722,pnod18723__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__18725,id_sym18722,pnod18723,pnod18723__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_entry_details.call(null,entry,loc);

return template.transitionEntriesForward.call(null);
});})(vec__18725,id_sym18722,pnod18723,pnod18723__$1))
));

enfocus.core.reset_ids.call(null,id_sym18722,pnod18723__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18723__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-details.html") == null)){
var vec__18729_18734 = enfocus.core.replace_ids.call(null,"en10971_","<div slide-from-right>\n\n  <div horizontal layout>\n    <paper-input label=\"Date\" id=\"datepicker\" />\n    <script> \"\n      var picker = new Pikaday(\n      {\n      field: document.getElementById('datepicker'),\n      firstDay: 1,\n      minDate: new Date('2000-01-01'),\n      maxDate: new Date('2020-12-31'),\n      yearRange: [2000,2020]\n      });\n      \"</script>\n  </div>\n\n  <div horizontal layout>\n    <paper-input label=\"Balance\" disabled>\n      <paper-dropdown-menu label=\"Currency\">\n        <paper-dropdown class=\"dropdown core-transition core-closed\">\n          <core-menu class=\"menu\">\n            <paper-item>\"CAD\"</paper-item>\n            <paper-item>\"USD\"</paper-item>\n            <paper-item>\"EUR\"</paper-item>\n          </core-menu>\n        </paper-dropdown>\n      </paper-dropdown-menu>\n  </div>\n\n  <div horizontal layout>\n    <table class=\"pure-table\">\n      <thead>\n        <tr>\n          <th>debit</th>\n          <th>credit</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr class=\"entry-part\">\n          <td>$ 1000</td>\n          <td>&nbsp;</td>\n        </tr>\n        <tr class=\"entry-part\">\n          <td>&nbsp;</td>\n          <td>$ 1000</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div horizontal layout>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">cancel</paper-button>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">save </paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___18735 = cljs.core.nth.call(null,vec__18729_18734,(0),null);
var txt__5285__auto___18736 = cljs.core.nth.call(null,vec__18729_18734,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18735,txt__5285__auto___18736], null));
} else {
}

landing.entry_details_template = (function entry_details_template(entry){
var vec__18733 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-details.html");
}).call(null);
var id_sym18730 = cljs.core.nth.call(null,vec__18733,(0),null);
var pnod18731 = cljs.core.nth.call(null,vec__18733,(1),null);
var pnod18731__$1 = enfocus.core.create_hidden_dom.call(null,pnod18731);
enfocus.core.i_at.call(null,id_sym18730,pnod18731__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-part"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__18733,id_sym18730,pnod18731,pnod18731__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)));
landing.render_entry_details_part.call(null,entry,loc);

return template.transitionEntriesForward.call(null);
});})(vec__18733,id_sym18730,pnod18731,pnod18731__$1))
));

enfocus.core.reset_ids.call(null,id_sym18730,pnod18731__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18731__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-details-part.html") == null)){
var vec__18737_18742 = enfocus.core.replace_ids.call(null,"en18288_","<div slide-from-right>\n\n  <paper-dropdown-menu label=\"Type\">\n    <paper-dropdown class=\"dropdown core-transition core-closed\">\n      <core-menu class=\"menu\">\n        <paper-item>\"Debit\"</paper-item>\n        <paper-item>\"Credit\"</paper-item>\n      </core-menu>\n    </paper-dropdown>\n  </paper-dropdown-menu>\n\n\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Account\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu class=\"menu\">\n          <paper-item>\"Cash\"</paper-item>\n          <paper-item>\"Inventory\"</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n\n  <div horizontal layout>\n    <paper-input label=\"Amount\"/>\n  </div>\n\n  <div horizontal layout>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">cancel</paper-button>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">save</paper-button>\n  </div>\n\n</div>\n");
var sym__5284__auto___18743 = cljs.core.nth.call(null,vec__18737_18742,(0),null);
var txt__5285__auto___18744 = cljs.core.nth.call(null,vec__18737_18742,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-details-part.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___18743,txt__5285__auto___18744], null));
} else {
}

landing.entry_details_part_template = (function entry_details_part_template(epart){
var vec__18741 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-details-part.html");
}).call(null);
var id_sym18738 = cljs.core.nth.call(null,vec__18741,(0),null);
var pnod18739 = cljs.core.nth.call(null,vec__18741,(1),null);
var pnod18739__$1 = enfocus.core.create_hidden_dom.call(null,pnod18739);
enfocus.core.i_at.call(null,id_sym18738,pnod18739__$1);

enfocus.core.reset_ids.call(null,id_sym18738,pnod18739__$1);

return enfocus.core.remove_node_return_child.call(null,pnod18739__$1);
});
landing.render_account_list = (function render_account_list(accounts,loc){
var seq__18749 = cljs.core.seq.call(null,accounts);
var chunk__18750 = null;
var count__18751 = (0);
var i__18752 = (0);
while(true){
if((i__18752 < count__18751)){
var ech = cljs.core._nth.call(null,chunk__18750,i__18752);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__18753 = seq__18749;
var G__18754 = chunk__18750;
var G__18755 = count__18751;
var G__18756 = (i__18752 + (1));
seq__18749 = G__18753;
chunk__18750 = G__18754;
count__18751 = G__18755;
i__18752 = G__18756;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18749);
if(temp__4126__auto__){
var seq__18749__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18749__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__18749__$1);
var G__18757 = cljs.core.chunk_rest.call(null,seq__18749__$1);
var G__18758 = c__4409__auto__;
var G__18759 = cljs.core.count.call(null,c__4409__auto__);
var G__18760 = (0);
seq__18749 = G__18757;
chunk__18750 = G__18758;
count__18751 = G__18759;
i__18752 = G__18760;
continue;
} else {
var ech = cljs.core.first.call(null,seq__18749__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.accounts_template.call(null,ech)));

var G__18761 = cljs.core.next.call(null,seq__18749__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__18749 = G__18761;
chunk__18750 = G__18762;
count__18751 = G__18763;
i__18752 = G__18764;
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
var seq__18769 = cljs.core.seq.call(null,entries);
var chunk__18770 = null;
var count__18771 = (0);
var i__18772 = (0);
while(true){
if((i__18772 < count__18771)){
var ech = cljs.core._nth.call(null,chunk__18770,i__18772);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__18773 = seq__18769;
var G__18774 = chunk__18770;
var G__18775 = count__18771;
var G__18776 = (i__18772 + (1));
seq__18769 = G__18773;
chunk__18770 = G__18774;
count__18771 = G__18775;
i__18772 = G__18776;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18769);
if(temp__4126__auto__){
var seq__18769__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18769__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__18769__$1);
var G__18777 = cljs.core.chunk_rest.call(null,seq__18769__$1);
var G__18778 = c__4409__auto__;
var G__18779 = cljs.core.count.call(null,c__4409__auto__);
var G__18780 = (0);
seq__18769 = G__18777;
chunk__18770 = G__18778;
count__18771 = G__18779;
i__18772 = G__18780;
continue;
} else {
var ech = cljs.core.first.call(null,seq__18769__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__18781 = cljs.core.next.call(null,seq__18769__$1);
var G__18782 = null;
var G__18783 = (0);
var G__18784 = (0);
seq__18769 = G__18781;
chunk__18770 = G__18782;
count__18771 = G__18783;
i__18772 = G__18784;
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
landing.render_entry_details_part = (function render_entry_details_part(epart,loc){
return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.content.call(null,landing.entry_details_part_template.call(null,epart)));
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

var seq__18791 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__18792 = null;
var count__18793 = (0);
var i__18794 = (0);
while(true){
if((i__18794 < count__18793)){
var map__18795 = cljs.core._nth.call(null,chunk__18792,i__18794);
var map__18795__$1 = ((cljs.core.seq_QMARK_.call(null,map__18795))?cljs.core.apply.call(null,cljs.core.hash_map,map__18795):map__18795);
var path = cljs.core.get.call(null,map__18795__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__18795__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__18797 = seq__18791;
var G__18798 = chunk__18792;
var G__18799 = count__18793;
var G__18800 = (i__18794 + (1));
seq__18791 = G__18797;
chunk__18792 = G__18798;
count__18793 = G__18799;
i__18794 = G__18800;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18791);
if(temp__4126__auto__){
var seq__18791__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18791__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__18791__$1);
var G__18801 = cljs.core.chunk_rest.call(null,seq__18791__$1);
var G__18802 = c__4409__auto__;
var G__18803 = cljs.core.count.call(null,c__4409__auto__);
var G__18804 = (0);
seq__18791 = G__18801;
chunk__18792 = G__18802;
count__18793 = G__18803;
i__18794 = G__18804;
continue;
} else {
var map__18796 = cljs.core.first.call(null,seq__18791__$1);
var map__18796__$1 = ((cljs.core.seq_QMARK_.call(null,map__18796))?cljs.core.apply.call(null,cljs.core.hash_map,map__18796):map__18796);
var path = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__18805 = cljs.core.next.call(null,seq__18791__$1);
var G__18806 = null;
var G__18807 = (0);
var G__18808 = (0);
seq__18791 = G__18805;
chunk__18792 = G__18806;
count__18793 = G__18807;
i__18794 = G__18808;
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