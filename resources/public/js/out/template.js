// Compiled by ClojureScript 0.0-2505
goog.provide('template');
goog.require('cljs.core');
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
var vec__5859_5879 = enfocus.core.replace_ids.call(null,"en5835_","<core-header-panel flex fit>\n      <core-toolbar layout>\n        <div class=\"tk-lust-script header-logo\">bkeeping</div>\n        <div class=\"tk-open-sans header-text\">Your solution to simple online bookkeeping</div>\n        <span flex>&nbsp;</span>\n        <div class=\"tk-open-sans header-text\" id=\"signout\">logout</div>\n      </core-toolbar>\n\n      <core-scaffold id=\"landing\" drawerWidth=\"400px\" responsiveWidth=\"650px\">\n        <core-header-panel navigation flex mode=\"seamed\">\n          <core-toolbar>Accounts</core-toolbar>\n          <core-animated-pages id=\"accounts\" transitions=\"slide-from-right\" onclick=\"landing.transitionAccounts();\">\n            <section>\n                <div id=\"accounts-pane\" slide-from-right>\n                </div>\n            </section>\n            <section>\n              <div id=\"account-details-pane\" slide-from-right>\n              </div>\n            </section>\n          </core-animated-pages>\n        </core-header-panel>\n        <div tool>Entries</div>\n        <core-animated-pages id=\"entries\" transitions=\"slide-from-right\" onclick=\"landing.transitionEntries();\">\n            <section>\n              <div id=\"entries-pane\" slide-from-right>\n                  <div>Entries</div>\n              </div>\n            </section>\n            <section>\n              <div id=\"entry-details-pane\" slide-from-right>\n                  <div>Entry Details</div>\n              </div>\n            </section>\n            <section>\n              <div id=\"entry-details-part-pane\" slide-from-right>\n                  <div>Entry Details Part</div>\n              </div>\n            </section>\n          </core-animated-pages>\n      </core-scaffold>\n\n    </core-header-panel>\n");
var sym__5284__auto___5880 = cljs.core.nth.call(null,vec__5859_5879,(0),null);
var txt__5285__auto___5881 = cljs.core.nth.call(null,vec__5859_5879,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledlanding-body.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___5880,txt__5285__auto___5881], null));
} else {
}

template.landing_template = (function landing_template(){
var vec__5863 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledlanding-body.html");
}).call(null);
var id_sym5860 = cljs.core.nth.call(null,vec__5863,(0),null);
var pnod5861 = cljs.core.nth.call(null,vec__5863,(1),null);
var pnod5861__$1 = enfocus.core.create_hidden_dom.call(null,pnod5861);
enfocus.core.i_at.call(null,id_sym5860,pnod5861__$1);

enfocus.core.reset_ids.call(null,id_sym5860,pnod5861__$1);

return enfocus.core.remove_node_return_child.call(null,pnod5861__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-row.html") == null)){
var vec__5864_5882 = enfocus.core.replace_ids.call(null,"en5841_","<div class=\"delete-account-row\" horizontal layout>\n  <paper-button class=\"delete-account-button\" noink raised></paper-button>\n  <div class=\"account-row\" flex></div>\n</div>\n");
var sym__5284__auto___5883 = cljs.core.nth.call(null,vec__5864_5882,(0),null);
var txt__5285__auto___5884 = cljs.core.nth.call(null,vec__5864_5882,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___5883,txt__5285__auto___5884], null));
} else {
}

template.accounts_template = (function accounts_template(account){
var vec__5868 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-row.html");
}).call(null);
var id_sym5865 = cljs.core.nth.call(null,vec__5868,(0),null);
var pnod5866 = cljs.core.nth.call(null,vec__5868,(1),null);
var pnod5866__$1 = enfocus.core.create_hidden_dom.call(null,pnod5866);
enfocus.core.i_at.call(null,id_sym5865,pnod5866__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.core.append.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".account-row"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__5868,id_sym5865,pnod5866,pnod5866__$1){
return (function (){
return (function (){var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(data_location_mapping.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
adetailsFn.call(null,account,loc);

return template.transitionAccountsForward.call(null);
})().call(null);
});})(vec__5868,id_sym5865,pnod5866,pnod5866__$1))
));

enfocus.core.reset_ids.call(null,id_sym5865,pnod5866__$1);

return enfocus.core.remove_node_return_child.call(null,pnod5866__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledaccount-details.html") == null)){
var vec__5869_5885 = enfocus.core.replace_ids.call(null,"en5847_","<div slide-from-right>\n  <div horizontal layout>\n    <paper-input id=\"account-details-name\" label=\"Name\"></paper-input>\n  </div>\n  <div horizontal layout>\n    <paper-dropdown-menu label=\"Type\">\n      <paper-dropdown class=\"dropdown core-transition core-closed\">\n        <core-menu id=\"account-details-type\" class=\"menu\">\n          <paper-item id=\"account-details-type-asset\">Asset</paper-item>\n          <paper-item id=\"account-details-type-liability\">Liability</paper-item>\n          <paper-item id=\"account-details-type-revenue\">Revenue</paper-item>\n          <paper-item id=\"account-details-type-expense\">Expense</paper-item>\n          <paper-item id=\"account-details-type-capital\">Capital</paper-item>\n        </core-menu>\n      </paper-dropdown>\n    </paper-dropdown-menu>\n  </div>\n  <div horizontal layout>\n    <paper-button noink raised>cancel</paper-button>\n    <paper-button noink raised>save</paper-button>\n  </div>\n</div>\n");
var sym__5284__auto___5886 = cljs.core.nth.call(null,vec__5869_5885,(0),null);
var txt__5285__auto___5887 = cljs.core.nth.call(null,vec__5869_5885,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledaccount-details.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___5886,txt__5285__auto___5887], null));
} else {
}

template.account_details_template = (function account_details_template(account){
var vec__5873 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledaccount-details.html");
}).call(null);
var id_sym5870 = cljs.core.nth.call(null,vec__5873,(0),null);
var pnod5871 = cljs.core.nth.call(null,vec__5873,(1),null);
var pnod5871__$1 = enfocus.core.create_hidden_dom.call(null,pnod5871);
enfocus.core.i_at.call(null,id_sym5870,pnod5871__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-name"], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-cancel"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),template.transitionAccountsBackward.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#account-details-save"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__5873,id_sym5870,pnod5871,pnod5871__$1){
return (function (){
return (function (){var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(account);
var aname = goog.dom.getElement("account-details-name").value;
var type_kw = template.get_account_type_value.call(null,goog.dom.getElement("account-details-type").selected);
var account_cw = type_kw.call(null,template.account_type_mappings);
template.transitionAccountsBackward.call(null);

return cljs.core.swap_BANG_.call(null,template.app_state,((function (db_id,aname,type_kw,account_cw,vec__5873,id_sym5870,pnod5871,pnod5871__$1){
return (function (e){
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.map.call(null,((function (db_id,aname,type_kw,account_cw,vec__5873,id_sym5870,pnod5871,pnod5871__$1){
return (function (ee){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ee),db_id)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword(null,"name","name",1843675177),aname,new cljs.core.Keyword(null,"type","type",1174270348),type_kw,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),account_cw], null);
} else {
return ee;
}
});})(db_id,aname,type_kw,account_cw,vec__5873,id_sym5870,pnod5871,pnod5871__$1))
,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,template.app_state))));
});})(db_id,aname,type_kw,account_cw,vec__5873,id_sym5870,pnod5871,pnod5871__$1))
);
})().call(null);
});})(vec__5873,id_sym5870,pnod5871,pnod5871__$1))
));

enfocus.core.reset_ids.call(null,id_sym5870,pnod5871__$1);

return enfocus.core.remove_node_return_child.call(null,pnod5871__$1);
});

if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"compiledentry-row.html") == null)){
var vec__5874_5888 = enfocus.core.replace_ids.call(null,"en5853_","<div class=\"delete-entry-row\" horizontal layout>\n  <paper-button class=\"delete-entry-button\" noink raised></paper-button>\n  <div class=\"entry-row\" onclick=\"landing.transitionEntriesForward();\" flex></div>\n</div>\n");
var sym__5284__auto___5889 = cljs.core.nth.call(null,vec__5874_5888,(0),null);
var txt__5285__auto___5890 = cljs.core.nth.call(null,vec__5874_5888,(1),null);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"compiledentry-row.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__5284__auto___5889,txt__5285__auto___5890], null));
} else {
}

template.entries_template = (function entries_template(entry){
var vec__5878 = (function (){
return enfocus.core.get_cached_dom.call(null,"compiledentry-row.html");
}).call(null);
var id_sym5875 = cljs.core.nth.call(null,vec__5878,(0),null);
var pnod5876 = cljs.core.nth.call(null,vec__5878,(1),null);
var pnod5876__$1 = enfocus.core.create_hidden_dom.call(null,pnod5876);
enfocus.core.i_at.call(null,id_sym5875,pnod5876__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".entry-row"], null),enfocus.core.append.call(null,[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry))].join('')));

enfocus.core.reset_ids.call(null,id_sym5875,pnod5876__$1);

return enfocus.core.remove_node_return_child.call(null,pnod5876__$1);
});
});

//# sourceMappingURL=template.js.map