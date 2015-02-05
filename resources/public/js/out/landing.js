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
var map__27967_27968 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__27967_27969__$1 = ((cljs.core.seq_QMARK_.call(null,map__27967_27968))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967_27968):map__27967_27968);
var state_27970 = cljs.core.get.call(null,map__27967_27969__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn_27971 = cljs.core.get.call(null,map__27967_27969__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv_27972 = cljs.core.get.call(null,map__27967_27969__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var chsk_27973 = cljs.core.get.call(null,map__27967_27969__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
landing.chsk = chsk_27973;

landing.ch_chsk = ch_recv_27972;

landing.chsk_send_BANG_ = send_fn_27971;

landing.chsk_state = state_27970;
landing.event_msg_handler = (function (){var method_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4523__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"landing","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4523__auto__,method_table__4519__auto__,prefer_table__4520__auto__,method_cache__4521__auto__,cached_hierarchy__4522__auto__));
})();
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("server","default","server/default",-612784709),(function (p__27974){
var map__27975 = p__27974;
var map__27975__$1 = ((cljs.core.seq_QMARK_.call(null,map__27975))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var ev_msg = map__27975__$1;
var event = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"event","event",301435442));
return util.console_log.call(null,[cljs.core.str("default event: "),cljs.core.str(event)].join(''));
}));
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__27976){
var map__27977 = p__27976;
var map__27977__$1 = ((cljs.core.seq_QMARK_.call(null,map__27977))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var ev_msg = map__27977__$1;
var _QMARK_data = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return util.console_log.call(null,"Channel socket successfully established!");
} else {
return util.console_log.call(null,[cljs.core.str("Channel socket state change: "),cljs.core.str(_QMARK_data)].join(''));
}
}));
cljs.core._add_method.call(null,landing.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__27978){
var map__27979 = p__27978;
var map__27979__$1 = ((cljs.core.seq_QMARK_.call(null,map__27979))?cljs.core.apply.call(null,cljs.core.hash_map,map__27979):map__27979);
var ev_msg = map__27979__$1;
var _QMARK_data = cljs.core.get.call(null,map__27979__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return util.console_log.call(null,[cljs.core.str("Push event from server: "),cljs.core.str(_QMARK_data)].join(''));
}));
landing.event_msg_handler_STAR_ = (function event_msg_handler_STAR_(p__27980){
var map__27982 = p__27980;
var map__27982__$1 = ((cljs.core.seq_QMARK_.call(null,map__27982))?cljs.core.apply.call(null,cljs.core.hash_map,map__27982):map__27982);
var ev_msg = map__27982__$1;
var event = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_data = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var id = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
landing.sendMessageWithHandler = (function sendMessageWithHandler(msg_withkey,handlefn){
return landing.chsk_send_BANG_.call(null,msg_withkey,(10000),handlefn);
});
goog.exportSymbol('landing.sendMessageWithHandler', landing.sendMessageWithHandler);
landing.sendMessageRaw = (function sendMessageRaw(msg_withkey,handlefn){
return landing.sendMessageWithHandler.call(null,msg_withkey,(function (cb_reply){
return util.console_log.call(null,[cljs.core.str("Callback reply: "),cljs.core.str(cb_reply)].join(''));
}));
});
goog.exportSymbol('landing.sendMessageRaw', landing.sendMessageRaw);
landing.sendMessageDefault = (function sendMessageDefault(msg){
return landing.sendMessageRaw.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","default","client/default",-156667597),msg], null));
});
goog.exportSymbol('landing.sendMessageDefault', landing.sendMessageDefault);
landing.user_state = cljs.core.atom.call(null,null);
landing.app_state = cljs.core.atom.call(null,null);
landing.loadGroup = (function loadGroup(){
return landing.sendMessageRaw.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","load-group","client/load-group",-968404594),""], null));
});
goog.exportSymbol('landing.loadGroup', landing.loadGroup);
landing.printUserState = (function printUserState(){
return util.console_log.call(null,[cljs.core.str("groupname["),cljs.core.str(new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.user_state))),cljs.core.str("] / username["),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.user_state))),cljs.core.str("]")].join(''));
});
goog.exportSymbol('landing.printUserState', landing.printUserState);
landing.printAppState = (function printAppState(){
return util.console_log.call(null,cljs.core.deref.call(null,landing.app_state));
});
goog.exportSymbol('landing.printAppState', landing.printAppState);
landing.main = (function main(){
return landing.sendMessageWithHandler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","load-group","client/load-group",-968404594),""], null),(function (msg){
var msgF = cljs.core.first.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(msg));
cljs.core.swap_BANG_.call(null,landing.app_state,((function (msgF){
return (function (e){
return msgF;
});})(msgF))
);

om.core.root.call(null,account.accounts_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("accounts-section")], null));

return om.core.root.call(null,entry.entries_view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("entries-section")], null));
}));
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