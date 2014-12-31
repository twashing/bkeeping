// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('freactive.experimental.items_view');
goog.require('freactive.core');
goog.require('goog.string');
goog.require('goog.dom');
view.transitionAccounts = (function transitionAccounts(directionFn){
var as = goog.dom.getElement("accounts");
return as.selected = directionFn.call(null,as.selected,(1));
});
goog.exportSymbol('view.transitionAccounts', view.transitionAccounts);
view.transitionAccountsForward = (function transitionAccountsForward(){
return view.transitionAccounts.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('view.transitionAccountsForward', view.transitionAccountsForward);
view.transitionAccountsBackward = (function transitionAccountsBackward(){
return view.transitionAccounts.call(null,cljs.core._);
});
goog.exportSymbol('view.transitionAccountsBackward', view.transitionAccountsBackward);
view.transitionEntries = (function transitionEntries(directionFn){
var es = goog.dom.getElement("entries");
return es.selected = directionFn.call(null,es.selected,(1));
});
goog.exportSymbol('view.transitionEntries', view.transitionEntries);
view.transitionEntriesForward = (function transitionEntriesForward(){
return view.transitionEntries.call(null,cljs.core._PLUS_);
});
goog.exportSymbol('view.transitionEntriesForward', view.transitionEntriesForward);
view.transitionEntriesBackward = (function transitionEntriesBackward(){
return view.transitionEntries.call(null,cljs.core._);
});
goog.exportSymbol('view.transitionEntriesBackward', view.transitionEntriesBackward);
view.adetails = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword(null,"name","name",1843675177),"fubar",new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),null], null));
view.account_type_mappings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"credit","credit",782856892)], null);
view.get_account_type_record = (function get_account_type_record(idx){
var account_type_values = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"name","name",1843675177),"Asset"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"name","name",1843675177),"Liability"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"name","name",1843675177),"Revenue"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"name","name",1843675177),"Expense"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"capital","capital",1627991945),new cljs.core.Keyword(null,"name","name",1843675177),"Capital"], null)], null);
return cljs.core.get.call(null,account_type_values,idx);
});
view.get_account_type_value = (function get_account_type_value(idx){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(view.get_account_type_record.call(null,idx));
});
view.render_account_list = (function render_account_list(app_state){
return cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-account-row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-account-button"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ee){
view.transitionAccountsForward.call(null);

return cljs.core.reset_BANG_.call(null,view.adetails,e);
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e)], null)], null);
}),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});
view.render_account_details = (function render_account_details(app_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"account-details-name",new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"value","value",305978217),freactive.core.rx_STAR_.call(null,(function (){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view.adetails)))].join('');
}),false)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown-menu","paper-dropdown-menu",-468499275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown","paper-dropdown",348741144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown core-transition core-closed"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-menu","core-menu",159458346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"account-details-type",new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Asset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Liability"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Revenue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Expense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Capital"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionAccountsBackward.call(null);
})], null),"cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view.adetails));
var aname = goog.dom.getElement("account-details-name").value;
var type_kw = view.get_account_type_value.call(null,goog.dom.getElement("account-details-type").selected);
var account_cw = type_kw.call(null,view.account_type_mappings);
view.transitionAccountsBackward.call(null);

cljs.core.swap_BANG_.call(null,app_state,((function (db_id,aname,type_kw,account_cw){
return (function (e__$1){
return cljs.core.assoc.call(null,e__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.map.call(null,((function (db_id,aname,type_kw,account_cw){
return (function (ee){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ee),db_id)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword(null,"name","name",1843675177),aname,new cljs.core.Keyword(null,"type","type",1174270348),type_kw,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),account_cw], null);
} else {
return ee;
}
});})(db_id,aname,type_kw,account_cw))
,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
});})(db_id,aname,type_kw,account_cw))
);

return bkeeping.console_log.call(null,[cljs.core.str("Updated app-state["),cljs.core.str(cljs.core.deref.call(null,app_state)),cljs.core.str("]")].join(''));
})], null),"save"], null)], null)], null);
});
view.render_entries_list = (function render_entries_list(app_state){
return cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-entry-row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-entry-button"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__$1){
return view.transitionEntriesForward.call(null);
})], null),[cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e))].join('')], null)], null);
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"journals","journals",-1915761091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
});
view.render_entry_detail = (function render_entry_detail(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Date"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Balance",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown-menu","paper-dropdown-menu",-468499275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Currency"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown","paper-dropdown",348741144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown core-transition core-closed"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-menu","core-menu",159458346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"CAD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"USD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"EUR"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Content",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionEntriesForward.call(null);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionEntriesBackward.call(null);
})], null),"cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionEntriesBackward.call(null);
})], null),"save"], null)], null)], null);
});
view.render_entry_detail_part = (function render_entry_detail_part(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown-menu","paper-dropdown-menu",-468499275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown","paper-dropdown",348741144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown core-transition core-closed"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-menu","core-menu",159458346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Debit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Credit"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown-menu","paper-dropdown-menu",-468499275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Account"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown","paper-dropdown",348741144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown core-transition core-closed"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-menu","core-menu",159458346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Cash"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Inventory"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Amount"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionEntriesBackward.call(null);
})], null),"cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionEntriesBackward.call(null);
})], null),"save"], null)], null)], null);
});
view.generate_view = (function generate_view(app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-header-panel","core-header-panel",-248496268),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true,new cljs.core.Keyword(null,"fit","fit",869444807),true,new cljs.core.Keyword(null,"on-mousemove","on-mousemove",-890666111),(function (e){
return cljs.core.reset_BANG_.call(null,app_state,cljs.core.assoc.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-toolbar","core-toolbar",1379143959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-lust-script header-logo"], null),"bkeeping"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-open-sans header-text"], null),"Your solution to simple online bookkeeping"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true], null),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-open-sans header-text",new cljs.core.Keyword(null,"id","id",-1388402092),"signout"], null),"logout"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-scaffold","core-scaffold",185030344),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"landing",new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),"400px",new cljs.core.Keyword(null,"responsiveWidth","responsiveWidth",-289372172),"650px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-header-panel","core-header-panel",-248496268),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"seamed",new cljs.core.Keyword(null,"navigation","navigation",369417),true,new cljs.core.Keyword(null,"flex","flex",-1425124628),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-toolbar","core-toolbar",1379143959),"Accounts"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-animated-pages","core-animated-pages",1816700001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"accounts",new cljs.core.Keyword(null,"transitions","transitions",-2046216121),"slide-from-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),(function (){
cljs.core.add_watch.call(null,app_state,null,(function (_,atum,old_state,new_state){
return view.render_account_list.call(null,atum);
}));

return view.render_account_list.call(null,app_state);
})()
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_account_details.call(null,app_state)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tool","tool",-1298696470),true], null),freactive.core.rx_STAR_.call(null,(function (){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))].join('');
}),false)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-animated-pages","core-animated-pages",1816700001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"entries",new cljs.core.Keyword(null,"transitions","transitions",-2046216121),"slide-from-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),view.render_entries_list.call(null,app_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_entry_detail.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_entry_detail_part.call(null)], null)], null)], null)], null);
});

//# sourceMappingURL=view.js.map