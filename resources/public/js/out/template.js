// Compiled by ClojureScript 0.0-2505
goog.provide('template');
goog.require('cljs.core');
goog.require('bkeeping');
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
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledlanding-body.html") == null)){
var vec__20929_20949 = enfocus.core.replace_ids.call(null,"en14758_","<core-header-panel flex fit>\n  <core-toolbar layout>\n    <div class=\"tk-lust-script header-logo\">bkeeping</div>\n    <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n    <span flex>&nbsp;</span>\n    <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n  </core-toolbar>\n\n  <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n    <core-header-panel navigation flex mode=\"seamed\">\n      <core-toolbar>Accounts</core-toolbar>\n      <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n        <section>\n          <div id=\"accounts-pane\" slide-from-right>\n          </div>\n        </section>\n        <section>\n          <div id=\"account-details-pane\" slide-from-right>\n          </div>\n        </section>\n      </core-animated-pages>\n    </core-header-panel>\n    <div tool>Entries</div>\n    <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n      <section>\n        <div id=\"entries-pane\" slide-from-right>\n          <div>Entries</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-pane\" slide-from-right>\n          <div>Entry Details</div>\n        </div>\n      </section>\n      <section>\n        <div id=\"entry-details-part-pane\" slide-from-right>\n          <div>Entry Details Part</div>\n        </div>\n      </section>\n    </core-animated-pages>\n  </core-scaffold>\n</core-header-panel>\n");
var sym__14207__auto___20950 = cljs.core.nth.call(null,vec__20929_20949,(0),null);
var txt__14208__auto___20951 = cljs.core.nth.call(null,vec__20929_20949,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__14207__auto___20950,txt__14208__auto___20951], null));
} else {
}

template.landing_template = (function landing_template(){
var vec__20933 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym20930 = cljs.core.nth.call(null,vec__20933,(0),null);
var pnod20931 = cljs.core.nth.call(null,vec__20933,(1),null);
var pnod20931__$1 = enfocus.core.create_hidden_dom.call(null,pnod20931);
enfocus.core.i_at.call(null,id_sym20930,pnod20931__$1);

enfocus.core.reset_ids.call(null,id_sym20930,pnod20931__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20931__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__20934_20952 = enfocus.core.replace_ids.call(null,"en14764_","<div class=\"delete-account-row\" horizontal layout>\n  <paper-button class=\"delete-account-button\" noink raised></paper-button>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__14207__auto___20953 = cljs.core.nth.call(null,vec__20934_20952,(0),null);
var txt__14208__auto___20954 = cljs.core.nth.call(null,vec__20934_20952,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__14207__auto___20953,txt__14208__auto___20954], null));
} else {
}

template.accounts_template = (function accounts_template(account){
var vec__20938 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym20935 = cljs.core.nth.call(null,vec__20938,(0),null);
var pnod20936 = cljs.core.nth.call(null,vec__20938,(1),null);
var pnod20936__$1 = enfocus.core.create_hidden_dom.call(null,pnod20936);
enfocus.core.i_at.call(null,id_sym20935,pnod20936__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__20938,id_sym20935,pnod20936,pnod20936__$1){
return (function (){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
return template.transitionAccountsForward.call(null);
});})(vec__20938,id_sym20935,pnod20936,pnod20936__$1))
));

enfocus.core.reset_ids.call(null,id_sym20935,pnod20936__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20936__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__20939_20955 = enfocus.core.replace_ids.call(null,"en14770_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button noink raised>cancel</paper-button>\n    <paper-button noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__14207__auto___20956 = cljs.core.nth.call(null,vec__20939_20955,(0),null);
var txt__14208__auto___20957 = cljs.core.nth.call(null,vec__20939_20955,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__14207__auto___20956,txt__14208__auto___20957], null));
} else {
}

template.account_details_template = (function account_details_template(account){
var vec__20943 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym20940 = cljs.core.nth.call(null,vec__20943,(0),null);
var pnod20941 = cljs.core.nth.call(null,vec__20943,(1),null);
var pnod20941__$1 = enfocus.core.create_hidden_dom.call(null,pnod20941);
enfocus.core.i_at.call(null,id_sym20940,pnod20941__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),template.transitionAccountsBackward.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__20943,id_sym20940,pnod20941,pnod20941__$1){
return (function (){
return (function (){var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(account);
var aname = goog.dom.getElement("account-details-name").value;
var type_kw = template.get_account_type_value.call(null,goog.dom.getElement("account-details-type").selected);
var account_cw = type_kw.call(null,template.account_type_mappings);
return template.transitionAccountsBackward.call(null);
})().call(null);
});})(vec__20943,id_sym20940,pnod20941,pnod20941__$1))
));

enfocus.core.reset_ids.call(null,id_sym20940,pnod20941__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20941__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__20944_20958 = enfocus.core.replace_ids.call(null,"en14776_","<div class=\"delete-entry-row\" horizontal layout>\n  <paper-button class=\"delete-entry-button\" noink raised></paper-button>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__14207__auto___20959 = cljs.core.nth.call(null,vec__20944_20958,(0),null);
var txt__14208__auto___20960 = cljs.core.nth.call(null,vec__20944_20958,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__14207__auto___20959,txt__14208__auto___20960], null));
} else {
}

template.entries_template = (function entries_template(entry){
var vec__20948 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym20945 = cljs.core.nth.call(null,vec__20948,(0),null);
var pnod20946 = cljs.core.nth.call(null,vec__20948,(1),null);
var pnod20946__$1 = enfocus.core.create_hidden_dom.call(null,pnod20946);
enfocus.core.i_at.call(null,id_sym20945,pnod20946__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')));

enfocus.core.reset_ids.call(null,id_sym20945,pnod20946__$1);

return enfocus.core.remove_node_return_child.call(null,pnod20946__$1);
});
});

//# sourceMappingURL=template.js.map