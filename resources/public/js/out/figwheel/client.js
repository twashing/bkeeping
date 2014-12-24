// Compiled by ClojureScript 0.0-2505
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__20489){
var map__20491 = p__20489;
var map__20491__$1 = ((cljs.core.seq_QMARK_.call(null,map__20491))?cljs.core.apply.call(null,cljs.core.hash_map,map__20491):map__20491);
var class$ = cljs.core.get.call(null,map__20491__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__20491__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12545__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12533__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12533__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12533__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15232__auto___20612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___20612,ch){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___20612,ch){
return (function (state_20586){
var state_val_20587 = (state_20586[(1)]);
if((state_val_20587 === (7))){
var inst_20582 = (state_20586[(2)]);
var state_20586__$1 = state_20586;
var statearr_20588_20613 = state_20586__$1;
(statearr_20588_20613[(2)] = inst_20582);

(statearr_20588_20613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (1))){
var state_20586__$1 = state_20586;
var statearr_20589_20614 = state_20586__$1;
(statearr_20589_20614[(2)] = null);

(statearr_20589_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (4))){
var inst_20554 = (state_20586[(7)]);
var inst_20554__$1 = (state_20586[(2)]);
var state_20586__$1 = (function (){var statearr_20590 = state_20586;
(statearr_20590[(7)] = inst_20554__$1);

return statearr_20590;
})();
if(cljs.core.truth_(inst_20554__$1)){
var statearr_20591_20615 = state_20586__$1;
(statearr_20591_20615[(1)] = (5));

} else {
var statearr_20592_20616 = state_20586__$1;
(statearr_20592_20616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (13))){
var state_20586__$1 = state_20586;
var statearr_20593_20617 = state_20586__$1;
(statearr_20593_20617[(2)] = null);

(statearr_20593_20617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (6))){
var state_20586__$1 = state_20586;
var statearr_20594_20618 = state_20586__$1;
(statearr_20594_20618[(2)] = null);

(statearr_20594_20618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (3))){
var inst_20584 = (state_20586[(2)]);
var state_20586__$1 = state_20586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20586__$1,inst_20584);
} else {
if((state_val_20587 === (12))){
var inst_20561 = (state_20586[(8)]);
var inst_20570 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20561);
var inst_20571 = cljs.core.first.call(null,inst_20570);
var inst_20572 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20571);
var inst_20573 = console.warn("Figwheel: Not loading code with warnings - ",inst_20572);
var state_20586__$1 = state_20586;
var statearr_20595_20619 = state_20586__$1;
(statearr_20595_20619[(2)] = inst_20573);

(statearr_20595_20619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (2))){
var state_20586__$1 = state_20586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20586__$1,(4),ch);
} else {
if((state_val_20587 === (11))){
var inst_20566 = (state_20586[(2)]);
var state_20586__$1 = state_20586;
var statearr_20596_20620 = state_20586__$1;
(statearr_20596_20620[(2)] = inst_20566);

(statearr_20596_20620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (9))){
var inst_20560 = (state_20586[(9)]);
var inst_20568 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20560,opts);
var state_20586__$1 = state_20586;
if(inst_20568){
var statearr_20597_20621 = state_20586__$1;
(statearr_20597_20621[(1)] = (12));

} else {
var statearr_20598_20622 = state_20586__$1;
(statearr_20598_20622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (5))){
var inst_20560 = (state_20586[(9)]);
var inst_20554 = (state_20586[(7)]);
var inst_20556 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20557 = (new cljs.core.PersistentArrayMap(null,2,inst_20556,null));
var inst_20558 = (new cljs.core.PersistentHashSet(null,inst_20557,null));
var inst_20559 = figwheel.client.focus_msgs.call(null,inst_20558,inst_20554);
var inst_20560__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20559);
var inst_20561 = cljs.core.first.call(null,inst_20559);
var inst_20562 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20560__$1,opts);
var state_20586__$1 = (function (){var statearr_20599 = state_20586;
(statearr_20599[(8)] = inst_20561);

(statearr_20599[(9)] = inst_20560__$1);

return statearr_20599;
})();
if(cljs.core.truth_(inst_20562)){
var statearr_20600_20623 = state_20586__$1;
(statearr_20600_20623[(1)] = (8));

} else {
var statearr_20601_20624 = state_20586__$1;
(statearr_20601_20624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (14))){
var inst_20576 = (state_20586[(2)]);
var state_20586__$1 = state_20586;
var statearr_20602_20625 = state_20586__$1;
(statearr_20602_20625[(2)] = inst_20576);

(statearr_20602_20625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (10))){
var inst_20578 = (state_20586[(2)]);
var state_20586__$1 = (function (){var statearr_20603 = state_20586;
(statearr_20603[(10)] = inst_20578);

return statearr_20603;
})();
var statearr_20604_20626 = state_20586__$1;
(statearr_20604_20626[(2)] = null);

(statearr_20604_20626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20587 === (8))){
var inst_20561 = (state_20586[(8)]);
var inst_20564 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20561);
var state_20586__$1 = state_20586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20586__$1,(11),inst_20564);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15232__auto___20612,ch))
;
return ((function (switch__15176__auto__,c__15232__auto___20612,ch){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_20608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20608[(0)] = state_machine__15177__auto__);

(statearr_20608[(1)] = (1));

return statearr_20608;
});
var state_machine__15177__auto____1 = (function (state_20586){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_20586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e20609){if((e20609 instanceof Object)){
var ex__15180__auto__ = e20609;
var statearr_20610_20627 = state_20586;
(statearr_20610_20627[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20628 = state_20586;
state_20586 = G__20628;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_20586){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_20586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___20612,ch))
})();
var state__15234__auto__ = (function (){var statearr_20611 = f__15233__auto__.call(null);
(statearr_20611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___20612);

return statearr_20611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___20612,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__20632){
var vec__20633 = p__20632;
var map__20634 = cljs.core.nth.call(null,vec__20633,(0),null);
var map__20634__$1 = ((cljs.core.seq_QMARK_.call(null,map__20634))?cljs.core.apply.call(null,cljs.core.hash_map,map__20634):map__20634);
var msg = map__20634__$1;
var msg_name = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20633,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__20635){
var map__20643 = p__20635;
var map__20643__$1 = ((cljs.core.seq_QMARK_.call(null,map__20643))?cljs.core.apply.call(null,cljs.core.hash_map,map__20643):map__20643);
var on_compile_fail = cljs.core.get.call(null,map__20643__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__20643__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__20643,map__20643__$1,on_compile_fail,on_compile_warning){
return (function (p__20644){
var vec__20645 = p__20644;
var map__20646 = cljs.core.nth.call(null,vec__20645,(0),null);
var map__20646__$1 = ((cljs.core.seq_QMARK_.call(null,map__20646))?cljs.core.apply.call(null,cljs.core.hash_map,map__20646):map__20646);
var msg = map__20646__$1;
var msg_name = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20645,(1));
var pred__20647 = cljs.core._EQ_;
var expr__20648 = msg_name;
if(cljs.core.truth_(pred__20647.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20648))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20647.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20648))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20643,map__20643__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__,msg_hist,msg_names,msg){
return (function (state_20825){
var state_val_20826 = (state_20825[(1)]);
if((state_val_20826 === (7))){
var inst_20774 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20774){
var statearr_20827_20864 = state_20825__$1;
(statearr_20827_20864[(1)] = (11));

} else {
var statearr_20828_20865 = state_20825__$1;
(statearr_20828_20865[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (20))){
var inst_20815 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20829_20866 = state_20825__$1;
(statearr_20829_20866[(2)] = inst_20815);

(statearr_20829_20866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (27))){
var inst_20806 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(30),inst_20806);
} else {
if((state_val_20826 === (1))){
var inst_20757 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20825__$1 = state_20825;
if(cljs.core.truth_(inst_20757)){
var statearr_20830_20867 = state_20825__$1;
(statearr_20830_20867[(1)] = (2));

} else {
var statearr_20831_20868 = state_20825__$1;
(statearr_20831_20868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (24))){
var inst_20804 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20804){
var statearr_20832_20869 = state_20825__$1;
(statearr_20832_20869[(1)] = (27));

} else {
var statearr_20833_20870 = state_20825__$1;
(statearr_20833_20870[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (4))){
var inst_20823 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20825__$1,inst_20823);
} else {
if((state_val_20826 === (15))){
var inst_20784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20785 = figwheel.client.heads_up.append_message.call(null,inst_20784);
var state_20825__$1 = state_20825;
var statearr_20834_20871 = state_20825__$1;
(statearr_20834_20871[(2)] = inst_20785);

(statearr_20834_20871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (21))){
var inst_20791 = (state_20825[(2)]);
var inst_20792 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20793 = figwheel.client.heads_up.display_warning.call(null,inst_20792);
var state_20825__$1 = (function (){var statearr_20835 = state_20825;
(statearr_20835[(7)] = inst_20791);

return statearr_20835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(22),inst_20793);
} else {
if((state_val_20826 === (13))){
var inst_20819 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20836_20872 = state_20825__$1;
(statearr_20836_20872[(2)] = inst_20819);

(statearr_20836_20872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (22))){
var inst_20795 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20837_20873 = state_20825__$1;
(statearr_20837_20873[(2)] = inst_20795);

(statearr_20837_20873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (29))){
var inst_20811 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20838_20874 = state_20825__$1;
(statearr_20838_20874[(2)] = inst_20811);

(statearr_20838_20874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (6))){
var inst_20765 = figwheel.client.heads_up.clear.call(null);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(9),inst_20765);
} else {
if((state_val_20826 === (28))){
var state_20825__$1 = state_20825;
var statearr_20839_20875 = state_20825__$1;
(statearr_20839_20875[(2)] = null);

(statearr_20839_20875[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (25))){
var inst_20813 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20840_20876 = state_20825__$1;
(statearr_20840_20876[(2)] = inst_20813);

(statearr_20840_20876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (17))){
var inst_20817 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20841_20877 = state_20825__$1;
(statearr_20841_20877[(2)] = inst_20817);

(statearr_20841_20877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (3))){
var inst_20763 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20763){
var statearr_20842_20878 = state_20825__$1;
(statearr_20842_20878[(1)] = (6));

} else {
var statearr_20843_20879 = state_20825__$1;
(statearr_20843_20879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (12))){
var inst_20782 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20782){
var statearr_20844_20880 = state_20825__$1;
(statearr_20844_20880[(1)] = (15));

} else {
var statearr_20845_20881 = state_20825__$1;
(statearr_20845_20881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (2))){
var inst_20759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(5),inst_20759);
} else {
if((state_val_20826 === (23))){
var inst_20799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20800 = figwheel.client.heads_up.display_warning.call(null,inst_20799);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(26),inst_20800);
} else {
if((state_val_20826 === (19))){
var inst_20797 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20797){
var statearr_20846_20882 = state_20825__$1;
(statearr_20846_20882[(1)] = (23));

} else {
var statearr_20847_20883 = state_20825__$1;
(statearr_20847_20883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (11))){
var inst_20776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20777 = figwheel.client.format_messages.call(null,inst_20776);
var inst_20778 = figwheel.client.heads_up.display_error.call(null,inst_20777);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(14),inst_20778);
} else {
if((state_val_20826 === (9))){
var inst_20767 = (state_20825[(2)]);
var inst_20768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20769 = figwheel.client.format_messages.call(null,inst_20768);
var inst_20770 = figwheel.client.heads_up.display_error.call(null,inst_20769);
var state_20825__$1 = (function (){var statearr_20848 = state_20825;
(statearr_20848[(8)] = inst_20767);

return statearr_20848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(10),inst_20770);
} else {
if((state_val_20826 === (5))){
var inst_20761 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20849_20884 = state_20825__$1;
(statearr_20849_20884[(2)] = inst_20761);

(statearr_20849_20884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (14))){
var inst_20780 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20850_20885 = state_20825__$1;
(statearr_20850_20885[(2)] = inst_20780);

(statearr_20850_20885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (26))){
var inst_20802 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20851_20886 = state_20825__$1;
(statearr_20851_20886[(2)] = inst_20802);

(statearr_20851_20886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (16))){
var inst_20787 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20825__$1 = state_20825;
if(inst_20787){
var statearr_20852_20887 = state_20825__$1;
(statearr_20852_20887[(1)] = (18));

} else {
var statearr_20853_20888 = state_20825__$1;
(statearr_20853_20888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (30))){
var inst_20808 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20854_20889 = state_20825__$1;
(statearr_20854_20889[(2)] = inst_20808);

(statearr_20854_20889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (10))){
var inst_20772 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20855_20890 = state_20825__$1;
(statearr_20855_20890[(2)] = inst_20772);

(statearr_20855_20890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (18))){
var inst_20789 = figwheel.client.heads_up.clear.call(null);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(21),inst_20789);
} else {
if((state_val_20826 === (8))){
var inst_20821 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20856_20891 = state_20825__$1;
(statearr_20856_20891[(2)] = inst_20821);

(statearr_20856_20891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15232__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15176__auto__,c__15232__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_20860 = [null,null,null,null,null,null,null,null,null];
(statearr_20860[(0)] = state_machine__15177__auto__);

(statearr_20860[(1)] = (1));

return statearr_20860;
});
var state_machine__15177__auto____1 = (function (state_20825){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_20825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e20861){if((e20861 instanceof Object)){
var ex__15180__auto__ = e20861;
var statearr_20862_20892 = state_20825;
(statearr_20862_20892[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20893 = state_20825;
state_20825 = G__20893;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_20825){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_20825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__,msg_hist,msg_names,msg))
})();
var state__15234__auto__ = (function (){var statearr_20863 = f__15233__auto__.call(null);
(statearr_20863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_20863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__,msg_hist,msg_names,msg))
);

return c__15232__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15232__auto___20956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___20956,ch){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___20956,ch){
return (function (state_20939){
var state_val_20940 = (state_20939[(1)]);
if((state_val_20940 === (8))){
var inst_20931 = (state_20939[(2)]);
var state_20939__$1 = (function (){var statearr_20941 = state_20939;
(statearr_20941[(7)] = inst_20931);

return statearr_20941;
})();
var statearr_20942_20957 = state_20939__$1;
(statearr_20942_20957[(2)] = null);

(statearr_20942_20957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (7))){
var inst_20935 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
var statearr_20943_20958 = state_20939__$1;
(statearr_20943_20958[(2)] = inst_20935);

(statearr_20943_20958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (6))){
var state_20939__$1 = state_20939;
var statearr_20944_20959 = state_20939__$1;
(statearr_20944_20959[(2)] = null);

(statearr_20944_20959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (5))){
var inst_20927 = (state_20939[(8)]);
var inst_20929 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_20927);
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20939__$1,(8),inst_20929);
} else {
if((state_val_20940 === (4))){
var inst_20927 = (state_20939[(8)]);
var inst_20927__$1 = (state_20939[(2)]);
var state_20939__$1 = (function (){var statearr_20945 = state_20939;
(statearr_20945[(8)] = inst_20927__$1);

return statearr_20945;
})();
if(cljs.core.truth_(inst_20927__$1)){
var statearr_20946_20960 = state_20939__$1;
(statearr_20946_20960[(1)] = (5));

} else {
var statearr_20947_20961 = state_20939__$1;
(statearr_20947_20961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (3))){
var inst_20937 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20939__$1,inst_20937);
} else {
if((state_val_20940 === (2))){
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20939__$1,(4),ch);
} else {
if((state_val_20940 === (1))){
var state_20939__$1 = state_20939;
var statearr_20948_20962 = state_20939__$1;
(statearr_20948_20962[(2)] = null);

(statearr_20948_20962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15232__auto___20956,ch))
;
return ((function (switch__15176__auto__,c__15232__auto___20956,ch){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_20952 = [null,null,null,null,null,null,null,null,null];
(statearr_20952[(0)] = state_machine__15177__auto__);

(statearr_20952[(1)] = (1));

return statearr_20952;
});
var state_machine__15177__auto____1 = (function (state_20939){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_20939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e20953){if((e20953 instanceof Object)){
var ex__15180__auto__ = e20953;
var statearr_20954_20963 = state_20939;
(statearr_20954_20963[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20964 = state_20939;
state_20939 = G__20964;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_20939){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_20939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___20956,ch))
})();
var state__15234__auto__ = (function (){var statearr_20955 = f__15233__auto__.call(null);
(statearr_20955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___20956);

return statearr_20955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___20956,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_20985){
var state_val_20986 = (state_20985[(1)]);
if((state_val_20986 === (2))){
var inst_20982 = (state_20985[(2)]);
var inst_20983 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_20985__$1 = (function (){var statearr_20987 = state_20985;
(statearr_20987[(7)] = inst_20982);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20985__$1,inst_20983);
} else {
if((state_val_20986 === (1))){
var inst_20980 = cljs.core.async.timeout.call(null,(3000));
var state_20985__$1 = state_20985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20985__$1,(2),inst_20980);
} else {
return null;
}
}
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_20991 = [null,null,null,null,null,null,null,null];
(statearr_20991[(0)] = state_machine__15177__auto__);

(statearr_20991[(1)] = (1));

return statearr_20991;
});
var state_machine__15177__auto____1 = (function (state_20985){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_20985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e20992){if((e20992 instanceof Object)){
var ex__15180__auto__ = e20992;
var statearr_20993_20995 = state_20985;
(statearr_20993_20995[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20996 = state_20985;
state_20985 = G__20996;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_20985){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_20985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_20994 = f__15233__auto__.call(null);
(statearr_20994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_20994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21000 = {"detail":url};
return obj21000;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21001){
var map__21007 = p__21001;
var map__21007__$1 = ((cljs.core.seq_QMARK_.call(null,map__21007))?cljs.core.apply.call(null,cljs.core.hash_map,map__21007):map__21007);
var ed = map__21007__$1;
var exception_data = cljs.core.get.call(null,map__21007__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__21007__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__21008_21012 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21009_21013 = null;
var count__21010_21014 = (0);
var i__21011_21015 = (0);
while(true){
if((i__21011_21015 < count__21010_21014)){
var msg_21016 = cljs.core._nth.call(null,chunk__21009_21013,i__21011_21015);
console.log(msg_21016);

var G__21017 = seq__21008_21012;
var G__21018 = chunk__21009_21013;
var G__21019 = count__21010_21014;
var G__21020 = (i__21011_21015 + (1));
seq__21008_21012 = G__21017;
chunk__21009_21013 = G__21018;
count__21010_21014 = G__21019;
i__21011_21015 = G__21020;
continue;
} else {
var temp__4126__auto___21021 = cljs.core.seq.call(null,seq__21008_21012);
if(temp__4126__auto___21021){
var seq__21008_21022__$1 = temp__4126__auto___21021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21008_21022__$1)){
var c__13332__auto___21023 = cljs.core.chunk_first.call(null,seq__21008_21022__$1);
var G__21024 = cljs.core.chunk_rest.call(null,seq__21008_21022__$1);
var G__21025 = c__13332__auto___21023;
var G__21026 = cljs.core.count.call(null,c__13332__auto___21023);
var G__21027 = (0);
seq__21008_21012 = G__21024;
chunk__21009_21013 = G__21025;
count__21010_21014 = G__21026;
i__21011_21015 = G__21027;
continue;
} else {
var msg_21028 = cljs.core.first.call(null,seq__21008_21022__$1);
console.log(msg_21028);

var G__21029 = cljs.core.next.call(null,seq__21008_21022__$1);
var G__21030 = null;
var G__21031 = (0);
var G__21032 = (0);
seq__21008_21012 = G__21029;
chunk__21009_21013 = G__21030;
count__21010_21014 = G__21031;
i__21011_21015 = G__21032;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__21033){
var map__21035 = p__21033;
var map__21035__$1 = ((cljs.core.seq_QMARK_.call(null,map__21035))?cljs.core.apply.call(null,cljs.core.hash_map,map__21035):map__21035);
var w = map__21035__$1;
var message = cljs.core.get.call(null,map__21035__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__21042 = cljs.core.seq.call(null,plugins);
var chunk__21043 = null;
var count__21044 = (0);
var i__21045 = (0);
while(true){
if((i__21045 < count__21044)){
var vec__21046 = cljs.core._nth.call(null,chunk__21043,i__21045);
var k = cljs.core.nth.call(null,vec__21046,(0),null);
var plugin = cljs.core.nth.call(null,vec__21046,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21048 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21042,chunk__21043,count__21044,i__21045,pl_21048,vec__21046,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21048.call(null,msg_hist);
});})(seq__21042,chunk__21043,count__21044,i__21045,pl_21048,vec__21046,k,plugin))
);
} else {
}

var G__21049 = seq__21042;
var G__21050 = chunk__21043;
var G__21051 = count__21044;
var G__21052 = (i__21045 + (1));
seq__21042 = G__21049;
chunk__21043 = G__21050;
count__21044 = G__21051;
i__21045 = G__21052;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21042);
if(temp__4126__auto__){
var seq__21042__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21042__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__21042__$1);
var G__21053 = cljs.core.chunk_rest.call(null,seq__21042__$1);
var G__21054 = c__13332__auto__;
var G__21055 = cljs.core.count.call(null,c__13332__auto__);
var G__21056 = (0);
seq__21042 = G__21053;
chunk__21043 = G__21054;
count__21044 = G__21055;
i__21045 = G__21056;
continue;
} else {
var vec__21047 = cljs.core.first.call(null,seq__21042__$1);
var k = cljs.core.nth.call(null,vec__21047,(0),null);
var plugin = cljs.core.nth.call(null,vec__21047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21057 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21042,chunk__21043,count__21044,i__21045,pl_21057,vec__21047,k,plugin,seq__21042__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21057.call(null,msg_hist);
});})(seq__21042,chunk__21043,count__21044,i__21045,pl_21057,vec__21047,k,plugin,seq__21042__$1,temp__4126__auto__))
);
} else {
}

var G__21058 = cljs.core.next.call(null,seq__21042__$1);
var G__21059 = null;
var G__21060 = (0);
var G__21061 = (0);
seq__21042 = G__21058;
chunk__21043 = G__21059;
count__21044 = G__21060;
i__21045 = G__21061;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__21062){
var map__21064 = p__21062;
var map__21064__$1 = ((cljs.core.seq_QMARK_.call(null,map__21064))?cljs.core.apply.call(null,cljs.core.hash_map,map__21064):map__21064);
var opts = map__21064__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21062 = null;
if (arguments.length > 0) {
  p__21062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__21062);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21065){
var p__21062 = cljs.core.seq(arglist__21065);
return watch_and_reload__delegate(p__21062);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map