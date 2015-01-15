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
landing.app_state = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null)], null),new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], null)], null)], null)], null));



if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledlanding-body.html") == null)){
var vec__21340_21345 = enfocus.core.replace_ids.call(null,"en10935_","<core-header-panel flex fit>\n  <core-toolbar layout>\n    <div class=\"tk-lust-script header-logo\">bkeeping</div>\n    <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n    <span flex>&nbsp;</span>\n    <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n  </core-toolbar>\n\n  <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n    <core-header-panel navigation flex mode=\"seamed\">\n      <core-toolbar>\n        <div>Accounts</div>\n        <div id=\"add-account-button\" class=\"generic-button\"></div>\n      </core-toolbar>\n      <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n        <section>\n          <div id=\"accounts-pane\" slide-from-right>\n          </div>\n        </section>\n        <section>\n          <div id=\"account-details-pane\" slide-from-right>\n          </div>\n        </section>\n      </core-animated-pages>\n    </core-header-panel>\n    <div tool>\n      <div style=\"float: left;\">Entries</div>\n      <div id=\"add-entry-button\" class=\"generic-button\" style=\"float: left;\"></div>\n    </div>\n    <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n      <section>\n        <div id=\"entries-pane\" slide-from-right>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-pane\" slide-from-right>\n          <div>Entry Details</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-part-pane\" slide-from-right>\n          <div>Entry Details Part</div>\n        </div>\n      </section>\n    </core-animated-pages>\n  </core-scaffold>\n</core-header-panel>\n");
var sym__5284__auto___21346 = cljs.core.nth.call(null,vec__21340_21345,(0),null);
var txt__5285__auto___21347 = cljs.core.nth.call(null,vec__21340_21345,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21346,txt__5285__auto___21347], null));
} else {
}

landing.landing_template = (function landing_template(){
var vec__21344 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym21341 = cljs.core.nth.call(null,vec__21344,(0),null);
var pnod21342 = cljs.core.nth.call(null,vec__21344,(1),null);
var pnod21342__$1 = enfocus.core.create_hidden_dom.call(null,pnod21342);
enfocus.core.i_at.call(null,id_sym21341,pnod21342__$1);

enfocus.core.reset_ids.call(null,id_sym21341,pnod21342__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21342__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__21348_21353 = enfocus.core.replace_ids.call(null,"en10944_","<div class=\"delete-account-row\" horizontal layout>\n  <div class=\"delete-account-button\"></div>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__5284__auto___21354 = cljs.core.nth.call(null,vec__21348_21353,(0),null);
var txt__5285__auto___21355 = cljs.core.nth.call(null,vec__21348_21353,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21354,txt__5285__auto___21355], null));
} else {
}

landing.accounts_template = (function accounts_template(acursor){
var vec__21352 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym21349 = cljs.core.nth.call(null,vec__21352,(0),null);
var pnod21350 = cljs.core.nth.call(null,vec__21352,(1),null);
var pnod21350__$1 = enfocus.core.create_hidden_dom.call(null,pnod21350);
enfocus.core.i_at.call(null,id_sym21349,pnod21350__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cursors.core.get_data.call(null,acursor))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__21352,id_sym21349,pnod21350,pnod21350__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_account_details.call(null,cursors.core.get_data.call(null,acursor),loc);

return template.transitionAccountsForward.call(null);
});})(vec__21352,id_sym21349,pnod21350,pnod21350__$1))
));

enfocus.core.reset_ids.call(null,id_sym21349,pnod21350__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21350__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__21356_21361 = enfocus.core.replace_ids.call(null,"en10953_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button id=\"account-details-cancel\" noink raised>cancel</paper-button>\n    <paper-button id=\"account-details-save\" noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___21362 = cljs.core.nth.call(null,vec__21356_21361,(0),null);
var txt__5285__auto___21363 = cljs.core.nth.call(null,vec__21356_21361,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21362,txt__5285__auto___21363], null));
} else {
}

landing.account_details_template = (function account_details_template(account){
var vec__21360 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym21357 = cljs.core.nth.call(null,vec__21360,(0),null);
var pnod21358 = cljs.core.nth.call(null,vec__21360,(1),null);
var pnod21358__$1 = enfocus.core.create_hidden_dom.call(null,pnod21358);
enfocus.core.i_at.call(null,id_sym21357,pnod21358__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__21360,id_sym21357,pnod21358,pnod21358__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__21360,id_sym21357,pnod21358,pnod21358__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__21360,id_sym21357,pnod21358,pnod21358__$1){
return (function (){
return template.transitionAccountsBackward.call(null);
});})(vec__21360,id_sym21357,pnod21358,pnod21358__$1))
));

enfocus.core.reset_ids.call(null,id_sym21357,pnod21358__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21358__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__21364_21369 = enfocus.core.replace_ids.call(null,"en10962_","<div class=\"delete-entry-row\" horizontal layout>\n  <div class=\"delete-entry-button\"></div>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__5284__auto___21370 = cljs.core.nth.call(null,vec__21364_21369,(0),null);
var txt__5285__auto___21371 = cljs.core.nth.call(null,vec__21364_21369,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21370,txt__5285__auto___21371], null));
} else {
}

landing.entries_template = (function entries_template(entry){
var vec__21368 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym21365 = cljs.core.nth.call(null,vec__21368,(0),null);
var pnod21366 = cljs.core.nth.call(null,vec__21368,(1),null);
var pnod21366__$1 = enfocus.core.create_hidden_dom.call(null,pnod21366);
enfocus.core.i_at.call(null,id_sym21365,pnod21366__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__21368,id_sym21365,pnod21366,pnod21366__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
landing.render_entry_details.call(null,entry,loc);

return template.transitionEntriesForward.call(null);
});})(vec__21368,id_sym21365,pnod21366,pnod21366__$1))
));

enfocus.core.reset_ids.call(null,id_sym21365,pnod21366__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21366__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-details.html") == null)){
var vec__21372_21377 = enfocus.core.replace_ids.call(null,"en10971_","<div slide-from-right>\n\n  <div horizontal layout>\n    <paper-input label=\"Date\" id=\"datepicker\" />\n    <script> \"\n      var picker = new Pikaday(\n      {\n      field: document.getElementById('datepicker'),\n      firstDay: 1,\n      minDate: new Date('2000-01-01'),\n      maxDate: new Date('2020-12-31'),\n      yearRange: [2000,2020]\n      });\n      \"</script>\n  </div>\n\n  <div horizontal layout>\n    <paper-input label=\"Balance\" disabled>\n      <paper-dropdown-menu label=\"Currency\">\n        <paper-dropdown class=\"dropdown core-transition core-closed\">\n          <core-menu class=\"menu\">\n            <paper-item>\"CAD\"</paper-item>\n            <paper-item>\"USD\"</paper-item>\n            <paper-item>\"EUR\"</paper-item>\n          </core-menu>\n        </paper-dropdown>\n      </paper-dropdown-menu>\n  </div>\n\n  <div horizontal layout>\n    <table class=\"pure-table\">\n      <thead>\n        <tr>\n          <th>debit</th>\n          <th>credit</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr class=\"entry-part\">\n          <td>$ 1000</td>\n          <td>&nbsp;</td>\n        </tr>\n        <tr class=\"entry-part\">\n          <td>&nbsp;</td>\n          <td>$ 1000</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div horizontal layout>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">cancel</paper-button>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">save </paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___21378 = cljs.core.nth.call(null,vec__21372_21377,(0),null);
var txt__5285__auto___21379 = cljs.core.nth.call(null,vec__21372_21377,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21378,txt__5285__auto___21379], null));
} else {
}

landing.entry_details_template = (function entry_details_template(entry){
var vec__21376 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-details.html");
}).call(null);
var id_sym21373 = cljs.core.nth.call(null,vec__21376,(0),null);
var pnod21374 = cljs.core.nth.call(null,vec__21376,(1),null);
var pnod21374__$1 = enfocus.core.create_hidden_dom.call(null,pnod21374);
enfocus.core.i_at.call(null,id_sym21373,pnod21374__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-part"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__21376,id_sym21373,pnod21374,pnod21374__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(landing.data_location_mapping.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)));
landing.render_entry_details_part.call(null,entry,loc);

return template.transitionEntriesForward.call(null);
});})(vec__21376,id_sym21373,pnod21374,pnod21374__$1))
));

enfocus.core.reset_ids.call(null,id_sym21373,pnod21374__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21374__$1);
});
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-details-part.html") == null)){
var vec__21380_21385 = enfocus.core.replace_ids.call(null,"en10980_","<div slide-from-right>\n\n  <paper-dropdown-menu label=\"Type\">\n    <paper-dropdown class=\"dropdown core-transition core-closed\">\n      <core-menu class=\"menu\">\n        <paper-item>\"Debit\"</paper-item>\n        <paper-item>\"Credit\"</paper-item>\n      </core-menu>\n    </paper-dropdown>\n  </paper-dropdown-menu>\n\n\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Account\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu class=\"menu\">\n          <paper-item>\"Cash\"</paper-item>\n          <paper-item>\"Inventory\"</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n\n  <div horizontal layout>\n    <paper-input label=\"Amount\"/>\n  </div>\n\n  <div horizontal layout>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">cancel</paper-button>\n    <paper-button noink raised onclick=\"template.transitionEntriesBackward()\">save</paper-button>\n  </div>\n\n</div>\n");
var sym__5284__auto___21386 = cljs.core.nth.call(null,vec__21380_21385,(0),null);
var txt__5285__auto___21387 = cljs.core.nth.call(null,vec__21380_21385,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-details-part.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___21386,txt__5285__auto___21387], null));
} else {
}

landing.entry_details_part_template = (function entry_details_part_template(epart){
var vec__21384 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-details-part.html");
}).call(null);
var id_sym21381 = cljs.core.nth.call(null,vec__21384,(0),null);
var pnod21382 = cljs.core.nth.call(null,vec__21384,(1),null);
var pnod21382__$1 = enfocus.core.create_hidden_dom.call(null,pnod21382);
enfocus.core.i_at.call(null,id_sym21381,pnod21382__$1);

enfocus.core.reset_ids.call(null,id_sym21381,pnod21382__$1);

return enfocus.core.remove_node_return_child.call(null,pnod21382__$1);
});
landing.render_account_list = (function render_account_list(data,loc){
var accounts = new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var indexedAs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),accounts);
var seq__21394 = cljs.core.seq.call(null,indexedAs);
var chunk__21395 = null;
var count__21396 = (0);
var i__21397 = (0);
while(true){
if((i__21397 < count__21396)){
var vec__21398 = cljs.core._nth.call(null,chunk__21395,i__21397);
var index__$1 = cljs.core.nth.call(null,vec__21398,(0),null);
var _ = cljs.core.nth.call(null,vec__21398,(1),null);
landing.one = cursors.core.cursor.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),index__$1], null));

bkeeping.console_log.call(null,[cljs.core.str("... "),cljs.core.str(landing.one)].join(''));

bkeeping.console_log.call(null,[cljs.core.str("... "),cljs.core.str(cursors.core.path.call(null,landing.one))].join(''));

var G__21400 = seq__21394;
var G__21401 = chunk__21395;
var G__21402 = count__21396;
var G__21403 = (i__21397 + (1));
seq__21394 = G__21400;
chunk__21395 = G__21401;
count__21396 = G__21402;
i__21397 = G__21403;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21394);
if(temp__4126__auto__){
var seq__21394__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21394__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__21394__$1);
var G__21404 = cljs.core.chunk_rest.call(null,seq__21394__$1);
var G__21405 = c__4409__auto__;
var G__21406 = cljs.core.count.call(null,c__4409__auto__);
var G__21407 = (0);
seq__21394 = G__21404;
chunk__21395 = G__21405;
count__21396 = G__21406;
i__21397 = G__21407;
continue;
} else {
var vec__21399 = cljs.core.first.call(null,seq__21394__$1);
var index__$1 = cljs.core.nth.call(null,vec__21399,(0),null);
var _ = cljs.core.nth.call(null,vec__21399,(1),null);
landing.one = cursors.core.cursor.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),index__$1], null));

bkeeping.console_log.call(null,[cljs.core.str("... "),cljs.core.str(landing.one)].join(''));

bkeeping.console_log.call(null,[cljs.core.str("... "),cljs.core.str(cursors.core.path.call(null,landing.one))].join(''));

var G__21408 = cljs.core.next.call(null,seq__21394__$1);
var G__21409 = null;
var G__21410 = (0);
var G__21411 = (0);
seq__21394 = G__21408;
chunk__21395 = G__21409;
count__21396 = G__21410;
i__21397 = G__21411;
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
var seq__21416 = cljs.core.seq.call(null,entries);
var chunk__21417 = null;
var count__21418 = (0);
var i__21419 = (0);
while(true){
if((i__21419 < count__21418)){
var ech = cljs.core._nth.call(null,chunk__21417,i__21419);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21420 = seq__21416;
var G__21421 = chunk__21417;
var G__21422 = count__21418;
var G__21423 = (i__21419 + (1));
seq__21416 = G__21420;
chunk__21417 = G__21421;
count__21418 = G__21422;
i__21419 = G__21423;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21416);
if(temp__4126__auto__){
var seq__21416__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21416__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__21416__$1);
var G__21424 = cljs.core.chunk_rest.call(null,seq__21416__$1);
var G__21425 = c__4409__auto__;
var G__21426 = cljs.core.count.call(null,c__4409__auto__);
var G__21427 = (0);
seq__21416 = G__21424;
chunk__21417 = G__21425;
count__21418 = G__21426;
i__21419 = G__21427;
continue;
} else {
var ech = cljs.core.first.call(null,seq__21416__$1);
enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),enfocus.core.append.call(null,landing.entries_template.call(null,ech)));

var G__21428 = cljs.core.next.call(null,seq__21416__$1);
var G__21429 = null;
var G__21430 = (0);
var G__21431 = (0);
seq__21416 = G__21428;
chunk__21417 = G__21429;
count__21418 = G__21430;
i__21419 = G__21431;
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

var seq__21438 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),new cljs.core.Keyword(null,"data","data",-232669377),landing.app_state], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.Keyword(null,"entries","entries",-86943161)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.app_state))))], null)], null));
var chunk__21439 = null;
var count__21440 = (0);
var i__21441 = (0);
while(true){
if((i__21441 < count__21440)){
var map__21442 = cljs.core._nth.call(null,chunk__21439,i__21441);
var map__21442__$1 = ((cljs.core.seq_QMARK_.call(null,map__21442))?cljs.core.apply.call(null,cljs.core.hash_map,map__21442):map__21442);
var path = cljs.core.get.call(null,map__21442__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__21442__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__21444 = seq__21438;
var G__21445 = chunk__21439;
var G__21446 = count__21440;
var G__21447 = (i__21441 + (1));
seq__21438 = G__21444;
chunk__21439 = G__21445;
count__21440 = G__21446;
i__21441 = G__21447;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21438);
if(temp__4126__auto__){
var seq__21438__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21438__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__21438__$1);
var G__21448 = cljs.core.chunk_rest.call(null,seq__21438__$1);
var G__21449 = c__4409__auto__;
var G__21450 = cljs.core.count.call(null,c__4409__auto__);
var G__21451 = (0);
seq__21438 = G__21448;
chunk__21439 = G__21449;
count__21440 = G__21450;
i__21441 = G__21451;
continue;
} else {
var map__21443 = cljs.core.first.call(null,seq__21438__$1);
var map__21443__$1 = ((cljs.core.seq_QMARK_.call(null,map__21443))?cljs.core.apply.call(null,cljs.core.hash_map,map__21443):map__21443);
var path = cljs.core.get.call(null,map__21443__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__21443__$1,new cljs.core.Keyword(null,"data","data",-232669377));
landing.render_path.call(null,path,data);

var G__21452 = cljs.core.next.call(null,seq__21438__$1);
var G__21453 = null;
var G__21454 = (0);
var G__21455 = (0);
seq__21438 = G__21452;
chunk__21439 = G__21453;
count__21440 = G__21454;
i__21441 = G__21455;
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