// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('clojure.set');
goog.require('bkeeping');
goog.require('taoensso.sente');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('entry');
goog.require('util');
goog.require('account');
goog.require('om.core');
goog.require('cljs.reader');
var map__66836_66837 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__66836_66838__$1 = ((cljs.core.seq_QMARK_.call(null,map__66836_66837))?cljs.core.apply.call(null,cljs.core.hash_map,map__66836_66837):map__66836_66837);
var state_66839 = cljs.core.get.call(null,map__66836_66838__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn_66840 = cljs.core.get.call(null,map__66836_66838__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv_66841 = cljs.core.get.call(null,map__66836_66838__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var chsk_66842 = cljs.core.get.call(null,map__66836_66838__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
landing.chsk = chsk_66842;

landing.ch_chsk = ch_recv_66841;

landing.chsk_send_BANG_ = send_fn_66840;

landing.chsk_state = state_66839;
landing.event_msg_handler = (function (){var method_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4523__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"landing","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4523__auto__,method_table__4519__auto__,prefer_table__4520__auto__,method_cache__4521__auto__,cached_hierarchy__4522__auto__));
})();
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("server","default","server/default",-612784709),(function (p__66843){
var map__66844 = p__66843;
var map__66844__$1 = ((cljs.core.seq_QMARK_.call(null,map__66844))?cljs.core.apply.call(null,cljs.core.hash_map,map__66844):map__66844);
var ev_msg = map__66844__$1;
var event = cljs.core.get.call(null,map__66844__$1,new cljs.core.Keyword(null,"event","event",301435442));
return util.console_log.call(null,[cljs.core.str("default event: "),cljs.core.str(event)].join(''));
}));
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__66845){
var map__66846 = p__66845;
var map__66846__$1 = ((cljs.core.seq_QMARK_.call(null,map__66846))?cljs.core.apply.call(null,cljs.core.hash_map,map__66846):map__66846);
var ev_msg = map__66846__$1;
var _QMARK_data = cljs.core.get.call(null,map__66846__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return util.console_log.call(null,"Channel socket successfully established!");
} else {
return util.console_log.call(null,[cljs.core.str("Channel socket state change: "),cljs.core.str(_QMARK_data)].join(''));
}
}));
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__66847){
var map__66848 = p__66847;
var map__66848__$1 = ((cljs.core.seq_QMARK_.call(null,map__66848))?cljs.core.apply.call(null,cljs.core.hash_map,map__66848):map__66848);
var ev_msg = map__66848__$1;
var _QMARK_data = cljs.core.get.call(null,map__66848__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return util.console_log.call(null,[cljs.core.str("Push event from server: "),cljs.core.str(_QMARK_data)].join(''));
}));
landing.event_msg_handler_STAR_ = (function event_msg_handler_STAR_(p__66849){
var map__66851 = p__66849;
var map__66851__$1 = ((cljs.core.seq_QMARK_.call(null,map__66851))?cljs.core.apply.call(null,cljs.core.hash_map,map__66851):map__66851);
var ev_msg = map__66851__$1;
var event = cljs.core.get.call(null,map__66851__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_data = cljs.core.get.call(null,map__66851__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var id = cljs.core.get.call(null,map__66851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
util.console_log.call(null,[cljs.core.str("Event: "),cljs.core.str(event)].join(''));

return landing.event_msg_handler.call(null,ev_msg);
});
landing.router_ = cljs.core.atom.call(null,null);
landing.stop_router_BANG_ = (function stop_router_BANG_(){
var temp__4126__auto__ = cljs.core.deref.call(null,landing.router_);
if(cljs.core.truth_(temp__4126__auto__)){
var stop_f = temp__4126__auto__;
return stop_f.call(null);
} else {
return null;
}
});
landing.start_router_BANG_ = (function start_router_BANG_(){
landing.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,landing.router_,taoensso.sente.start_chsk_router_BANG_.call(null,landing.ch_chsk,landing.event_msg_handler_STAR_));
});
landing.start_router_BANG_.call(null);
landing.user_state = cljs.core.atom.call(null,null);
landing.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null)], null),new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),"7",new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], null)], null)], null)], null));
landing.sendMessage = (function sendMessage(msg){
return landing.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","default","client/default",-156667597),msg], null));
});
goog.exportSymbol('landing.sendMessage', landing.sendMessage);
landing.printUserState = (function printUserState(){
return util.console_log.call(null,[cljs.core.str("groupname["),cljs.core.str(new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.user_state))),cljs.core.str("] / username["),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.user_state))),cljs.core.str("]")].join(''));
});
goog.exportSymbol('landing.printUserState', landing.printUserState);
landing.printAppState = (function printAppState(){
return util.console_log.call(null,cljs.core.deref.call(null,landing.app_state));
});
goog.exportSymbol('landing.printAppState', landing.printAppState);
landing.main = (function main(){
om.core.root.call(null,account.accounts_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));

return om.core.root.call(null,entry.entries_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entries-section")], null));
});
util.ready.call(null,(function (inp){
return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/user-data",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,bkeeping.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
var groupname = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(responseF))));
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(responseF))))));
cljs.core.swap_BANG_.call(null,landing.user_state,((function (data,responseF,groupname,username){
return (function (inp__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"groupname","groupname",-493355733),groupname,new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"source","source",-433931539),responseF], null);
});})(data,responseF,groupname,username))
);

return landing.main.call(null);
}))], null));
}));

//# sourceMappingURL=landing.js.map