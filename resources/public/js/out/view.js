// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('freactive.experimental.items_view');
goog.require('freactive.core');
goog.require('freactive.experimental.observable_collection');
view.adetails = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),null], null));
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
view.render_account_list = (function render_account_list(app_state){
return cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-account-row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"class","class",-2030961996),"delete-account-button"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ee){
return view.transitionAccountsForward.call(null);
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e)], null)], null);
}),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});
view.render_account_details = (function render_account_details(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown-menu","paper-dropdown-menu",-468499275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-dropdown","paper-dropdown",348741144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown core-transition core-closed"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-menu","core-menu",159458346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Asset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Liability"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Revenue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Expense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-item","paper-item",-340688965),"Capital"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionAccountsBackward.call(null);
})], null),"cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-button","paper-button",-1563335650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noink","noink",-471370778),true,new cljs.core.Keyword(null,"raised","raised",1890794098),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return view.transitionAccountsBackward.call(null);
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
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-toolbar","core-toolbar",1379143959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-lust-script header-logo"], null),"bkeeping"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-open-sans header-text"], null),"Your solution to simple online bookkeeping"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true], null),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tk-open-sans header-text",new cljs.core.Keyword(null,"id","id",-1388402092),"signout"], null),"logout"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-scaffold","core-scaffold",185030344),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"landing",new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),"400px",new cljs.core.Keyword(null,"responsiveWidth","responsiveWidth",-289372172),"650px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-header-panel","core-header-panel",-248496268),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"seamed",new cljs.core.Keyword(null,"navigation","navigation",369417),true,new cljs.core.Keyword(null,"flex","flex",-1425124628),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-toolbar","core-toolbar",1379143959),"Accounts"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-animated-pages","core-animated-pages",1816700001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"accounts",new cljs.core.Keyword(null,"transitions","transitions",-2046216121),"slide-from-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),view.render_account_list.call(null,app_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_account_details.call(null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tool","tool",-1298696470),true], null),freactive.core.rx_STAR_.call(null,(function (){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))].join('');
}),false)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-animated-pages","core-animated-pages",1816700001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"entries",new cljs.core.Keyword(null,"transitions","transitions",-2046216121),"slide-from-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-from-right","slide-from-right",-1456289457),true], null),view.render_entries_list.call(null,app_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_entry_detail.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),view.render_entry_detail_part.call(null)], null)], null)], null)], null);
});

//# sourceMappingURL=view.js.map