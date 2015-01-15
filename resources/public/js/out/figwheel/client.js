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
figwheel.client.error_msg_format = (function error_msg_format(p__13939){
var map__13941 = p__13939;
var map__13941__$1 = ((cljs.core.seq_QMARK_.call(null,map__13941))?cljs.core.apply.call(null,cljs.core.hash_map,map__13941):map__13941);
var class$ = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__3622__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3610__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3610__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3610__auto__;
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
var c__7304__auto___14062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14062,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14062,ch){
return (function (state_14036){
var state_val_14037 = (state_14036[(1)]);
if((state_val_14037 === (7))){
var inst_14032 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14038_14063 = state_14036__$1;
(statearr_14038_14063[(2)] = inst_14032);

(statearr_14038_14063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (1))){
var state_14036__$1 = state_14036;
var statearr_14039_14064 = state_14036__$1;
(statearr_14039_14064[(2)] = null);

(statearr_14039_14064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (4))){
var inst_14004 = (state_14036[(7)]);
var inst_14004__$1 = (state_14036[(2)]);
var state_14036__$1 = (function (){var statearr_14040 = state_14036;
(statearr_14040[(7)] = inst_14004__$1);

return statearr_14040;
})();
if(cljs.core.truth_(inst_14004__$1)){
var statearr_14041_14065 = state_14036__$1;
(statearr_14041_14065[(1)] = (5));

} else {
var statearr_14042_14066 = state_14036__$1;
(statearr_14042_14066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (13))){
var state_14036__$1 = state_14036;
var statearr_14043_14067 = state_14036__$1;
(statearr_14043_14067[(2)] = null);

(statearr_14043_14067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (6))){
var state_14036__$1 = state_14036;
var statearr_14044_14068 = state_14036__$1;
(statearr_14044_14068[(2)] = null);

(statearr_14044_14068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (3))){
var inst_14034 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14036__$1,inst_14034);
} else {
if((state_val_14037 === (12))){
var inst_14011 = (state_14036[(8)]);
var inst_14020 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_14011);
var inst_14021 = cljs.core.first.call(null,inst_14020);
var inst_14022 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_14021);
var inst_14023 = console.warn("Figwheel: Not loading code with warnings - ",inst_14022);
var state_14036__$1 = state_14036;
var statearr_14045_14069 = state_14036__$1;
(statearr_14045_14069[(2)] = inst_14023);

(statearr_14045_14069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (2))){
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14036__$1,(4),ch);
} else {
if((state_val_14037 === (11))){
var inst_14016 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14046_14070 = state_14036__$1;
(statearr_14046_14070[(2)] = inst_14016);

(statearr_14046_14070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (9))){
var inst_14010 = (state_14036[(9)]);
var inst_14018 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_14010,opts);
var state_14036__$1 = state_14036;
if(inst_14018){
var statearr_14047_14071 = state_14036__$1;
(statearr_14047_14071[(1)] = (12));

} else {
var statearr_14048_14072 = state_14036__$1;
(statearr_14048_14072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (5))){
var inst_14004 = (state_14036[(7)]);
var inst_14010 = (state_14036[(9)]);
var inst_14006 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_14007 = (new cljs.core.PersistentArrayMap(null,2,inst_14006,null));
var inst_14008 = (new cljs.core.PersistentHashSet(null,inst_14007,null));
var inst_14009 = figwheel.client.focus_msgs.call(null,inst_14008,inst_14004);
var inst_14010__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_14009);
var inst_14011 = cljs.core.first.call(null,inst_14009);
var inst_14012 = figwheel.client.reload_file_state_QMARK_.call(null,inst_14010__$1,opts);
var state_14036__$1 = (function (){var statearr_14049 = state_14036;
(statearr_14049[(9)] = inst_14010__$1);

(statearr_14049[(8)] = inst_14011);

return statearr_14049;
})();
if(cljs.core.truth_(inst_14012)){
var statearr_14050_14073 = state_14036__$1;
(statearr_14050_14073[(1)] = (8));

} else {
var statearr_14051_14074 = state_14036__$1;
(statearr_14051_14074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (14))){
var inst_14026 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14052_14075 = state_14036__$1;
(statearr_14052_14075[(2)] = inst_14026);

(statearr_14052_14075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (10))){
var inst_14028 = (state_14036[(2)]);
var state_14036__$1 = (function (){var statearr_14053 = state_14036;
(statearr_14053[(10)] = inst_14028);

return statearr_14053;
})();
var statearr_14054_14076 = state_14036__$1;
(statearr_14054_14076[(2)] = null);

(statearr_14054_14076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (8))){
var inst_14011 = (state_14036[(8)]);
var inst_14014 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_14011);
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14036__$1,(11),inst_14014);
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
});})(c__7304__auto___14062,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14062,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14058[(0)] = state_machine__7249__auto__);

(statearr_14058[(1)] = (1));

return statearr_14058;
});
var state_machine__7249__auto____1 = (function (state_14036){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14059){if((e14059 instanceof Object)){
var ex__7252__auto__ = e14059;
var statearr_14060_14077 = state_14036;
(statearr_14060_14077[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14078 = state_14036;
state_14036 = G__14078;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14036){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14062,ch))
})();
var state__7306__auto__ = (function (){var statearr_14061 = f__7305__auto__.call(null);
(statearr_14061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14062);

return statearr_14061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14062,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__14082){
var vec__14083 = p__14082;
var map__14084 = cljs.core.nth.call(null,vec__14083,(0),null);
var map__14084__$1 = ((cljs.core.seq_QMARK_.call(null,map__14084))?cljs.core.apply.call(null,cljs.core.hash_map,map__14084):map__14084);
var msg = map__14084__$1;
var msg_name = cljs.core.get.call(null,map__14084__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14083,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__14085){
var map__14093 = p__14085;
var map__14093__$1 = ((cljs.core.seq_QMARK_.call(null,map__14093))?cljs.core.apply.call(null,cljs.core.hash_map,map__14093):map__14093);
var on_compile_fail = cljs.core.get.call(null,map__14093__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__14093__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__14093,map__14093__$1,on_compile_fail,on_compile_warning){
return (function (p__14094){
var vec__14095 = p__14094;
var map__14096 = cljs.core.nth.call(null,vec__14095,(0),null);
var map__14096__$1 = ((cljs.core.seq_QMARK_.call(null,map__14096))?cljs.core.apply.call(null,cljs.core.hash_map,map__14096):map__14096);
var msg = map__14096__$1;
var msg_name = cljs.core.get.call(null,map__14096__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14095,(1));
var pred__14097 = cljs.core._EQ_;
var expr__14098 = msg_name;
if(cljs.core.truth_(pred__14097.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14098))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14097.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14098))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14093,map__14093__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (state_14275){
var state_val_14276 = (state_14275[(1)]);
if((state_val_14276 === (7))){
var inst_14224 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14224){
var statearr_14277_14314 = state_14275__$1;
(statearr_14277_14314[(1)] = (11));

} else {
var statearr_14278_14315 = state_14275__$1;
(statearr_14278_14315[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (20))){
var inst_14265 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14279_14316 = state_14275__$1;
(statearr_14279_14316[(2)] = inst_14265);

(statearr_14279_14316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (27))){
var inst_14256 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(30),inst_14256);
} else {
if((state_val_14276 === (1))){
var inst_14207 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14275__$1 = state_14275;
if(cljs.core.truth_(inst_14207)){
var statearr_14280_14317 = state_14275__$1;
(statearr_14280_14317[(1)] = (2));

} else {
var statearr_14281_14318 = state_14275__$1;
(statearr_14281_14318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (24))){
var inst_14254 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14254){
var statearr_14282_14319 = state_14275__$1;
(statearr_14282_14319[(1)] = (27));

} else {
var statearr_14283_14320 = state_14275__$1;
(statearr_14283_14320[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (4))){
var inst_14273 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14275__$1,inst_14273);
} else {
if((state_val_14276 === (15))){
var inst_14234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14235 = figwheel.client.heads_up.append_message.call(null,inst_14234);
var state_14275__$1 = state_14275;
var statearr_14284_14321 = state_14275__$1;
(statearr_14284_14321[(2)] = inst_14235);

(statearr_14284_14321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (21))){
var inst_14241 = (state_14275[(2)]);
var inst_14242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14243 = figwheel.client.heads_up.display_warning.call(null,inst_14242);
var state_14275__$1 = (function (){var statearr_14285 = state_14275;
(statearr_14285[(7)] = inst_14241);

return statearr_14285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(22),inst_14243);
} else {
if((state_val_14276 === (13))){
var inst_14269 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14286_14322 = state_14275__$1;
(statearr_14286_14322[(2)] = inst_14269);

(statearr_14286_14322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (22))){
var inst_14245 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14287_14323 = state_14275__$1;
(statearr_14287_14323[(2)] = inst_14245);

(statearr_14287_14323[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (29))){
var inst_14261 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14288_14324 = state_14275__$1;
(statearr_14288_14324[(2)] = inst_14261);

(statearr_14288_14324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (6))){
var inst_14215 = figwheel.client.heads_up.clear.call(null);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(9),inst_14215);
} else {
if((state_val_14276 === (28))){
var state_14275__$1 = state_14275;
var statearr_14289_14325 = state_14275__$1;
(statearr_14289_14325[(2)] = null);

(statearr_14289_14325[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (25))){
var inst_14263 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14290_14326 = state_14275__$1;
(statearr_14290_14326[(2)] = inst_14263);

(statearr_14290_14326[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (17))){
var inst_14267 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14291_14327 = state_14275__$1;
(statearr_14291_14327[(2)] = inst_14267);

(statearr_14291_14327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (3))){
var inst_14213 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14213){
var statearr_14292_14328 = state_14275__$1;
(statearr_14292_14328[(1)] = (6));

} else {
var statearr_14293_14329 = state_14275__$1;
(statearr_14293_14329[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (12))){
var inst_14232 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14232){
var statearr_14294_14330 = state_14275__$1;
(statearr_14294_14330[(1)] = (15));

} else {
var statearr_14295_14331 = state_14275__$1;
(statearr_14295_14331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (2))){
var inst_14209 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(5),inst_14209);
} else {
if((state_val_14276 === (23))){
var inst_14249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14250 = figwheel.client.heads_up.display_warning.call(null,inst_14249);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(26),inst_14250);
} else {
if((state_val_14276 === (19))){
var inst_14247 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14247){
var statearr_14296_14332 = state_14275__$1;
(statearr_14296_14332[(1)] = (23));

} else {
var statearr_14297_14333 = state_14275__$1;
(statearr_14297_14333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (11))){
var inst_14226 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14227 = figwheel.client.format_messages.call(null,inst_14226);
var inst_14228 = figwheel.client.heads_up.display_error.call(null,inst_14227);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(14),inst_14228);
} else {
if((state_val_14276 === (9))){
var inst_14217 = (state_14275[(2)]);
var inst_14218 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14219 = figwheel.client.format_messages.call(null,inst_14218);
var inst_14220 = figwheel.client.heads_up.display_error.call(null,inst_14219);
var state_14275__$1 = (function (){var statearr_14298 = state_14275;
(statearr_14298[(8)] = inst_14217);

return statearr_14298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(10),inst_14220);
} else {
if((state_val_14276 === (5))){
var inst_14211 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14299_14334 = state_14275__$1;
(statearr_14299_14334[(2)] = inst_14211);

(statearr_14299_14334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (14))){
var inst_14230 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14300_14335 = state_14275__$1;
(statearr_14300_14335[(2)] = inst_14230);

(statearr_14300_14335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (26))){
var inst_14252 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14301_14336 = state_14275__$1;
(statearr_14301_14336[(2)] = inst_14252);

(statearr_14301_14336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (16))){
var inst_14237 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14275__$1 = state_14275;
if(inst_14237){
var statearr_14302_14337 = state_14275__$1;
(statearr_14302_14337[(1)] = (18));

} else {
var statearr_14303_14338 = state_14275__$1;
(statearr_14303_14338[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (30))){
var inst_14258 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14304_14339 = state_14275__$1;
(statearr_14304_14339[(2)] = inst_14258);

(statearr_14304_14339[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (10))){
var inst_14222 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14305_14340 = state_14275__$1;
(statearr_14305_14340[(2)] = inst_14222);

(statearr_14305_14340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14276 === (18))){
var inst_14239 = figwheel.client.heads_up.clear.call(null);
var state_14275__$1 = state_14275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(21),inst_14239);
} else {
if((state_val_14276 === (8))){
var inst_14271 = (state_14275[(2)]);
var state_14275__$1 = state_14275;
var statearr_14306_14341 = state_14275__$1;
(statearr_14306_14341[(2)] = inst_14271);

(statearr_14306_14341[(1)] = (4));


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
});})(c__7304__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7248__auto__,c__7304__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14310 = [null,null,null,null,null,null,null,null,null];
(statearr_14310[(0)] = state_machine__7249__auto__);

(statearr_14310[(1)] = (1));

return statearr_14310;
});
var state_machine__7249__auto____1 = (function (state_14275){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14311){if((e14311 instanceof Object)){
var ex__7252__auto__ = e14311;
var statearr_14312_14342 = state_14275;
(statearr_14312_14342[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14343 = state_14275;
state_14275 = G__14343;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14275){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,msg_hist,msg_names,msg))
})();
var state__7306__auto__ = (function (){var statearr_14313 = f__7305__auto__.call(null);
(statearr_14313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,msg_hist,msg_names,msg))
);

return c__7304__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7304__auto___14406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14406,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14406,ch){
return (function (state_14389){
var state_val_14390 = (state_14389[(1)]);
if((state_val_14390 === (8))){
var inst_14381 = (state_14389[(2)]);
var state_14389__$1 = (function (){var statearr_14391 = state_14389;
(statearr_14391[(7)] = inst_14381);

return statearr_14391;
})();
var statearr_14392_14407 = state_14389__$1;
(statearr_14392_14407[(2)] = null);

(statearr_14392_14407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (7))){
var inst_14385 = (state_14389[(2)]);
var state_14389__$1 = state_14389;
var statearr_14393_14408 = state_14389__$1;
(statearr_14393_14408[(2)] = inst_14385);

(statearr_14393_14408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (6))){
var state_14389__$1 = state_14389;
var statearr_14394_14409 = state_14389__$1;
(statearr_14394_14409[(2)] = null);

(statearr_14394_14409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (5))){
var inst_14377 = (state_14389[(8)]);
var inst_14379 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14377);
var state_14389__$1 = state_14389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14389__$1,(8),inst_14379);
} else {
if((state_val_14390 === (4))){
var inst_14377 = (state_14389[(8)]);
var inst_14377__$1 = (state_14389[(2)]);
var state_14389__$1 = (function (){var statearr_14395 = state_14389;
(statearr_14395[(8)] = inst_14377__$1);

return statearr_14395;
})();
if(cljs.core.truth_(inst_14377__$1)){
var statearr_14396_14410 = state_14389__$1;
(statearr_14396_14410[(1)] = (5));

} else {
var statearr_14397_14411 = state_14389__$1;
(statearr_14397_14411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (3))){
var inst_14387 = (state_14389[(2)]);
var state_14389__$1 = state_14389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14389__$1,inst_14387);
} else {
if((state_val_14390 === (2))){
var state_14389__$1 = state_14389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14389__$1,(4),ch);
} else {
if((state_val_14390 === (1))){
var state_14389__$1 = state_14389;
var statearr_14398_14412 = state_14389__$1;
(statearr_14398_14412[(2)] = null);

(statearr_14398_14412[(1)] = (2));


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
});})(c__7304__auto___14406,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14406,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14402 = [null,null,null,null,null,null,null,null,null];
(statearr_14402[(0)] = state_machine__7249__auto__);

(statearr_14402[(1)] = (1));

return statearr_14402;
});
var state_machine__7249__auto____1 = (function (state_14389){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14403){if((e14403 instanceof Object)){
var ex__7252__auto__ = e14403;
var statearr_14404_14413 = state_14389;
(statearr_14404_14413[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14414 = state_14389;
state_14389 = G__14414;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14389){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14406,ch))
})();
var state__7306__auto__ = (function (){var statearr_14405 = f__7305__auto__.call(null);
(statearr_14405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14406);

return statearr_14405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14406,ch))
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
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_14435){
var state_val_14436 = (state_14435[(1)]);
if((state_val_14436 === (2))){
var inst_14432 = (state_14435[(2)]);
var inst_14433 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14435__$1 = (function (){var statearr_14437 = state_14435;
(statearr_14437[(7)] = inst_14432);

return statearr_14437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14435__$1,inst_14433);
} else {
if((state_val_14436 === (1))){
var inst_14430 = cljs.core.async.timeout.call(null,(3000));
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14435__$1,(2),inst_14430);
} else {
return null;
}
}
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14441 = [null,null,null,null,null,null,null,null];
(statearr_14441[(0)] = state_machine__7249__auto__);

(statearr_14441[(1)] = (1));

return statearr_14441;
});
var state_machine__7249__auto____1 = (function (state_14435){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14442){if((e14442 instanceof Object)){
var ex__7252__auto__ = e14442;
var statearr_14443_14445 = state_14435;
(statearr_14443_14445[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14446 = state_14435;
state_14435 = G__14446;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14435){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14444 = f__7305__auto__.call(null);
(statearr_14444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14450 = {"detail":url};
return obj14450;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14451){
var map__14457 = p__14451;
var map__14457__$1 = ((cljs.core.seq_QMARK_.call(null,map__14457))?cljs.core.apply.call(null,cljs.core.hash_map,map__14457):map__14457);
var ed = map__14457__$1;
var exception_data = cljs.core.get.call(null,map__14457__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14457__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__14458_14462 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14459_14463 = null;
var count__14460_14464 = (0);
var i__14461_14465 = (0);
while(true){
if((i__14461_14465 < count__14460_14464)){
var msg_14466 = cljs.core._nth.call(null,chunk__14459_14463,i__14461_14465);
console.log(msg_14466);

var G__14467 = seq__14458_14462;
var G__14468 = chunk__14459_14463;
var G__14469 = count__14460_14464;
var G__14470 = (i__14461_14465 + (1));
seq__14458_14462 = G__14467;
chunk__14459_14463 = G__14468;
count__14460_14464 = G__14469;
i__14461_14465 = G__14470;
continue;
} else {
var temp__4126__auto___14471 = cljs.core.seq.call(null,seq__14458_14462);
if(temp__4126__auto___14471){
var seq__14458_14472__$1 = temp__4126__auto___14471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14458_14472__$1)){
var c__4409__auto___14473 = cljs.core.chunk_first.call(null,seq__14458_14472__$1);
var G__14474 = cljs.core.chunk_rest.call(null,seq__14458_14472__$1);
var G__14475 = c__4409__auto___14473;
var G__14476 = cljs.core.count.call(null,c__4409__auto___14473);
var G__14477 = (0);
seq__14458_14462 = G__14474;
chunk__14459_14463 = G__14475;
count__14460_14464 = G__14476;
i__14461_14465 = G__14477;
continue;
} else {
var msg_14478 = cljs.core.first.call(null,seq__14458_14472__$1);
console.log(msg_14478);

var G__14479 = cljs.core.next.call(null,seq__14458_14472__$1);
var G__14480 = null;
var G__14481 = (0);
var G__14482 = (0);
seq__14458_14462 = G__14479;
chunk__14459_14463 = G__14480;
count__14460_14464 = G__14481;
i__14461_14465 = G__14482;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__14483){
var map__14485 = p__14483;
var map__14485__$1 = ((cljs.core.seq_QMARK_.call(null,map__14485))?cljs.core.apply.call(null,cljs.core.hash_map,map__14485):map__14485);
var w = map__14485__$1;
var message = cljs.core.get.call(null,map__14485__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14492 = cljs.core.seq.call(null,plugins);
var chunk__14493 = null;
var count__14494 = (0);
var i__14495 = (0);
while(true){
if((i__14495 < count__14494)){
var vec__14496 = cljs.core._nth.call(null,chunk__14493,i__14495);
var k = cljs.core.nth.call(null,vec__14496,(0),null);
var plugin = cljs.core.nth.call(null,vec__14496,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14498 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14492,chunk__14493,count__14494,i__14495,pl_14498,vec__14496,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14498.call(null,msg_hist);
});})(seq__14492,chunk__14493,count__14494,i__14495,pl_14498,vec__14496,k,plugin))
);
} else {
}

var G__14499 = seq__14492;
var G__14500 = chunk__14493;
var G__14501 = count__14494;
var G__14502 = (i__14495 + (1));
seq__14492 = G__14499;
chunk__14493 = G__14500;
count__14494 = G__14501;
i__14495 = G__14502;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14492);
if(temp__4126__auto__){
var seq__14492__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14492__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__14492__$1);
var G__14503 = cljs.core.chunk_rest.call(null,seq__14492__$1);
var G__14504 = c__4409__auto__;
var G__14505 = cljs.core.count.call(null,c__4409__auto__);
var G__14506 = (0);
seq__14492 = G__14503;
chunk__14493 = G__14504;
count__14494 = G__14505;
i__14495 = G__14506;
continue;
} else {
var vec__14497 = cljs.core.first.call(null,seq__14492__$1);
var k = cljs.core.nth.call(null,vec__14497,(0),null);
var plugin = cljs.core.nth.call(null,vec__14497,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14507 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14492,chunk__14493,count__14494,i__14495,pl_14507,vec__14497,k,plugin,seq__14492__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14507.call(null,msg_hist);
});})(seq__14492,chunk__14493,count__14494,i__14495,pl_14507,vec__14497,k,plugin,seq__14492__$1,temp__4126__auto__))
);
} else {
}

var G__14508 = cljs.core.next.call(null,seq__14492__$1);
var G__14509 = null;
var G__14510 = (0);
var G__14511 = (0);
seq__14492 = G__14508;
chunk__14493 = G__14509;
count__14494 = G__14510;
i__14495 = G__14511;
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
var watch_and_reload__delegate = function (p__14512){
var map__14514 = p__14512;
var map__14514__$1 = ((cljs.core.seq_QMARK_.call(null,map__14514))?cljs.core.apply.call(null,cljs.core.hash_map,map__14514):map__14514);
var opts = map__14514__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14512 = null;
if (arguments.length > 0) {
  p__14512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__14512);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14515){
var p__14512 = cljs.core.seq(arglist__14515);
return watch_and_reload__delegate(p__14512);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map