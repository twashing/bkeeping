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
figwheel.client.error_msg_format = (function error_msg_format(p__13899){
var map__13901 = p__13899;
var map__13901__$1 = ((cljs.core.seq_QMARK_.call(null,map__13901))?cljs.core.apply.call(null,cljs.core.hash_map,map__13901):map__13901);
var class$ = cljs.core.get.call(null,map__13901__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13901__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7301__auto___14022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___14022,ch){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___14022,ch){
return (function (state_13996){
var state_val_13997 = (state_13996[(1)]);
if((state_val_13997 === (7))){
var inst_13992 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_13998_14023 = state_13996__$1;
(statearr_13998_14023[(2)] = inst_13992);

(statearr_13998_14023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (1))){
var state_13996__$1 = state_13996;
var statearr_13999_14024 = state_13996__$1;
(statearr_13999_14024[(2)] = null);

(statearr_13999_14024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (4))){
var inst_13964 = (state_13996[(7)]);
var inst_13964__$1 = (state_13996[(2)]);
var state_13996__$1 = (function (){var statearr_14000 = state_13996;
(statearr_14000[(7)] = inst_13964__$1);

return statearr_14000;
})();
if(cljs.core.truth_(inst_13964__$1)){
var statearr_14001_14025 = state_13996__$1;
(statearr_14001_14025[(1)] = (5));

} else {
var statearr_14002_14026 = state_13996__$1;
(statearr_14002_14026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (13))){
var state_13996__$1 = state_13996;
var statearr_14003_14027 = state_13996__$1;
(statearr_14003_14027[(2)] = null);

(statearr_14003_14027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (6))){
var state_13996__$1 = state_13996;
var statearr_14004_14028 = state_13996__$1;
(statearr_14004_14028[(2)] = null);

(statearr_14004_14028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (3))){
var inst_13994 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13996__$1,inst_13994);
} else {
if((state_val_13997 === (12))){
var inst_13971 = (state_13996[(8)]);
var inst_13980 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13971);
var inst_13981 = cljs.core.first.call(null,inst_13980);
var inst_13982 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13981);
var inst_13983 = console.warn("Figwheel: Not loading code with warnings - ",inst_13982);
var state_13996__$1 = state_13996;
var statearr_14005_14029 = state_13996__$1;
(statearr_14005_14029[(2)] = inst_13983);

(statearr_14005_14029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (2))){
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13996__$1,(4),ch);
} else {
if((state_val_13997 === (11))){
var inst_13976 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_14006_14030 = state_13996__$1;
(statearr_14006_14030[(2)] = inst_13976);

(statearr_14006_14030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (9))){
var inst_13970 = (state_13996[(9)]);
var inst_13978 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13970,opts);
var state_13996__$1 = state_13996;
if(inst_13978){
var statearr_14007_14031 = state_13996__$1;
(statearr_14007_14031[(1)] = (12));

} else {
var statearr_14008_14032 = state_13996__$1;
(statearr_14008_14032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (5))){
var inst_13970 = (state_13996[(9)]);
var inst_13964 = (state_13996[(7)]);
var inst_13966 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13967 = (new cljs.core.PersistentArrayMap(null,2,inst_13966,null));
var inst_13968 = (new cljs.core.PersistentHashSet(null,inst_13967,null));
var inst_13969 = figwheel.client.focus_msgs.call(null,inst_13968,inst_13964);
var inst_13970__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13969);
var inst_13971 = cljs.core.first.call(null,inst_13969);
var inst_13972 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13970__$1,opts);
var state_13996__$1 = (function (){var statearr_14009 = state_13996;
(statearr_14009[(9)] = inst_13970__$1);

(statearr_14009[(8)] = inst_13971);

return statearr_14009;
})();
if(cljs.core.truth_(inst_13972)){
var statearr_14010_14033 = state_13996__$1;
(statearr_14010_14033[(1)] = (8));

} else {
var statearr_14011_14034 = state_13996__$1;
(statearr_14011_14034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (14))){
var inst_13986 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_14012_14035 = state_13996__$1;
(statearr_14012_14035[(2)] = inst_13986);

(statearr_14012_14035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (10))){
var inst_13988 = (state_13996[(2)]);
var state_13996__$1 = (function (){var statearr_14013 = state_13996;
(statearr_14013[(10)] = inst_13988);

return statearr_14013;
})();
var statearr_14014_14036 = state_13996__$1;
(statearr_14014_14036[(2)] = null);

(statearr_14014_14036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (8))){
var inst_13971 = (state_13996[(8)]);
var inst_13974 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13971);
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13996__$1,(11),inst_13974);
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
});})(c__7301__auto___14022,ch))
;
return ((function (switch__7245__auto__,c__7301__auto___14022,ch){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14018[(0)] = state_machine__7246__auto__);

(statearr_14018[(1)] = (1));

return statearr_14018;
});
var state_machine__7246__auto____1 = (function (state_13996){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_13996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14019){if((e14019 instanceof Object)){
var ex__7249__auto__ = e14019;
var statearr_14020_14037 = state_13996;
(statearr_14020_14037[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14038 = state_13996;
state_13996 = G__14038;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_13996){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_13996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___14022,ch))
})();
var state__7303__auto__ = (function (){var statearr_14021 = f__7302__auto__.call(null);
(statearr_14021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___14022);

return statearr_14021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___14022,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__14042){
var vec__14043 = p__14042;
var map__14044 = cljs.core.nth.call(null,vec__14043,(0),null);
var map__14044__$1 = ((cljs.core.seq_QMARK_.call(null,map__14044))?cljs.core.apply.call(null,cljs.core.hash_map,map__14044):map__14044);
var msg = map__14044__$1;
var msg_name = cljs.core.get.call(null,map__14044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14043,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__14045){
var map__14053 = p__14045;
var map__14053__$1 = ((cljs.core.seq_QMARK_.call(null,map__14053))?cljs.core.apply.call(null,cljs.core.hash_map,map__14053):map__14053);
var on_compile_fail = cljs.core.get.call(null,map__14053__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__14053__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__14053,map__14053__$1,on_compile_fail,on_compile_warning){
return (function (p__14054){
var vec__14055 = p__14054;
var map__14056 = cljs.core.nth.call(null,vec__14055,(0),null);
var map__14056__$1 = ((cljs.core.seq_QMARK_.call(null,map__14056))?cljs.core.apply.call(null,cljs.core.hash_map,map__14056):map__14056);
var msg = map__14056__$1;
var msg_name = cljs.core.get.call(null,map__14056__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14055,(1));
var pred__14057 = cljs.core._EQ_;
var expr__14058 = msg_name;
if(cljs.core.truth_(pred__14057.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14058))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14057.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14058))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14053,map__14053__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__,msg_hist,msg_names,msg){
return (function (state_14235){
var state_val_14236 = (state_14235[(1)]);
if((state_val_14236 === (7))){
var inst_14184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14184){
var statearr_14237_14274 = state_14235__$1;
(statearr_14237_14274[(1)] = (11));

} else {
var statearr_14238_14275 = state_14235__$1;
(statearr_14238_14275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (20))){
var inst_14225 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14239_14276 = state_14235__$1;
(statearr_14239_14276[(2)] = inst_14225);

(statearr_14239_14276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (27))){
var inst_14216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(30),inst_14216);
} else {
if((state_val_14236 === (1))){
var inst_14167 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14235__$1 = state_14235;
if(cljs.core.truth_(inst_14167)){
var statearr_14240_14277 = state_14235__$1;
(statearr_14240_14277[(1)] = (2));

} else {
var statearr_14241_14278 = state_14235__$1;
(statearr_14241_14278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (24))){
var inst_14214 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14214){
var statearr_14242_14279 = state_14235__$1;
(statearr_14242_14279[(1)] = (27));

} else {
var statearr_14243_14280 = state_14235__$1;
(statearr_14243_14280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (4))){
var inst_14233 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14235__$1,inst_14233);
} else {
if((state_val_14236 === (15))){
var inst_14194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14195 = figwheel.client.heads_up.append_message.call(null,inst_14194);
var state_14235__$1 = state_14235;
var statearr_14244_14281 = state_14235__$1;
(statearr_14244_14281[(2)] = inst_14195);

(statearr_14244_14281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (21))){
var inst_14201 = (state_14235[(2)]);
var inst_14202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14203 = figwheel.client.heads_up.display_warning.call(null,inst_14202);
var state_14235__$1 = (function (){var statearr_14245 = state_14235;
(statearr_14245[(7)] = inst_14201);

return statearr_14245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(22),inst_14203);
} else {
if((state_val_14236 === (13))){
var inst_14229 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14246_14282 = state_14235__$1;
(statearr_14246_14282[(2)] = inst_14229);

(statearr_14246_14282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (22))){
var inst_14205 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14247_14283 = state_14235__$1;
(statearr_14247_14283[(2)] = inst_14205);

(statearr_14247_14283[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (29))){
var inst_14221 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14248_14284 = state_14235__$1;
(statearr_14248_14284[(2)] = inst_14221);

(statearr_14248_14284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (6))){
var inst_14175 = figwheel.client.heads_up.clear.call(null);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(9),inst_14175);
} else {
if((state_val_14236 === (28))){
var state_14235__$1 = state_14235;
var statearr_14249_14285 = state_14235__$1;
(statearr_14249_14285[(2)] = null);

(statearr_14249_14285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (25))){
var inst_14223 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14250_14286 = state_14235__$1;
(statearr_14250_14286[(2)] = inst_14223);

(statearr_14250_14286[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (17))){
var inst_14227 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14251_14287 = state_14235__$1;
(statearr_14251_14287[(2)] = inst_14227);

(statearr_14251_14287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (3))){
var inst_14173 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14173){
var statearr_14252_14288 = state_14235__$1;
(statearr_14252_14288[(1)] = (6));

} else {
var statearr_14253_14289 = state_14235__$1;
(statearr_14253_14289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (12))){
var inst_14192 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14192){
var statearr_14254_14290 = state_14235__$1;
(statearr_14254_14290[(1)] = (15));

} else {
var statearr_14255_14291 = state_14235__$1;
(statearr_14255_14291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (2))){
var inst_14169 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(5),inst_14169);
} else {
if((state_val_14236 === (23))){
var inst_14209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14210 = figwheel.client.heads_up.display_warning.call(null,inst_14209);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(26),inst_14210);
} else {
if((state_val_14236 === (19))){
var inst_14207 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14207){
var statearr_14256_14292 = state_14235__$1;
(statearr_14256_14292[(1)] = (23));

} else {
var statearr_14257_14293 = state_14235__$1;
(statearr_14257_14293[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (11))){
var inst_14186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14187 = figwheel.client.format_messages.call(null,inst_14186);
var inst_14188 = figwheel.client.heads_up.display_error.call(null,inst_14187);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(14),inst_14188);
} else {
if((state_val_14236 === (9))){
var inst_14177 = (state_14235[(2)]);
var inst_14178 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14179 = figwheel.client.format_messages.call(null,inst_14178);
var inst_14180 = figwheel.client.heads_up.display_error.call(null,inst_14179);
var state_14235__$1 = (function (){var statearr_14258 = state_14235;
(statearr_14258[(8)] = inst_14177);

return statearr_14258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(10),inst_14180);
} else {
if((state_val_14236 === (5))){
var inst_14171 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14259_14294 = state_14235__$1;
(statearr_14259_14294[(2)] = inst_14171);

(statearr_14259_14294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (14))){
var inst_14190 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14260_14295 = state_14235__$1;
(statearr_14260_14295[(2)] = inst_14190);

(statearr_14260_14295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (26))){
var inst_14212 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14261_14296 = state_14235__$1;
(statearr_14261_14296[(2)] = inst_14212);

(statearr_14261_14296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (16))){
var inst_14197 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14235__$1 = state_14235;
if(inst_14197){
var statearr_14262_14297 = state_14235__$1;
(statearr_14262_14297[(1)] = (18));

} else {
var statearr_14263_14298 = state_14235__$1;
(statearr_14263_14298[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (30))){
var inst_14218 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14264_14299 = state_14235__$1;
(statearr_14264_14299[(2)] = inst_14218);

(statearr_14264_14299[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (10))){
var inst_14182 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14265_14300 = state_14235__$1;
(statearr_14265_14300[(2)] = inst_14182);

(statearr_14265_14300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14236 === (18))){
var inst_14199 = figwheel.client.heads_up.clear.call(null);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,(21),inst_14199);
} else {
if((state_val_14236 === (8))){
var inst_14231 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14266_14301 = state_14235__$1;
(statearr_14266_14301[(2)] = inst_14231);

(statearr_14266_14301[(1)] = (4));


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
});})(c__7301__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7245__auto__,c__7301__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14270 = [null,null,null,null,null,null,null,null,null];
(statearr_14270[(0)] = state_machine__7246__auto__);

(statearr_14270[(1)] = (1));

return statearr_14270;
});
var state_machine__7246__auto____1 = (function (state_14235){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object)){
var ex__7249__auto__ = e14271;
var statearr_14272_14302 = state_14235;
(statearr_14272_14302[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14303 = state_14235;
state_14235 = G__14303;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14235){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__,msg_hist,msg_names,msg))
})();
var state__7303__auto__ = (function (){var statearr_14273 = f__7302__auto__.call(null);
(statearr_14273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_14273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__,msg_hist,msg_names,msg))
);

return c__7301__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7301__auto___14366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___14366,ch){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___14366,ch){
return (function (state_14349){
var state_val_14350 = (state_14349[(1)]);
if((state_val_14350 === (8))){
var inst_14341 = (state_14349[(2)]);
var state_14349__$1 = (function (){var statearr_14351 = state_14349;
(statearr_14351[(7)] = inst_14341);

return statearr_14351;
})();
var statearr_14352_14367 = state_14349__$1;
(statearr_14352_14367[(2)] = null);

(statearr_14352_14367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (7))){
var inst_14345 = (state_14349[(2)]);
var state_14349__$1 = state_14349;
var statearr_14353_14368 = state_14349__$1;
(statearr_14353_14368[(2)] = inst_14345);

(statearr_14353_14368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (6))){
var state_14349__$1 = state_14349;
var statearr_14354_14369 = state_14349__$1;
(statearr_14354_14369[(2)] = null);

(statearr_14354_14369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (5))){
var inst_14337 = (state_14349[(8)]);
var inst_14339 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14337);
var state_14349__$1 = state_14349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14349__$1,(8),inst_14339);
} else {
if((state_val_14350 === (4))){
var inst_14337 = (state_14349[(8)]);
var inst_14337__$1 = (state_14349[(2)]);
var state_14349__$1 = (function (){var statearr_14355 = state_14349;
(statearr_14355[(8)] = inst_14337__$1);

return statearr_14355;
})();
if(cljs.core.truth_(inst_14337__$1)){
var statearr_14356_14370 = state_14349__$1;
(statearr_14356_14370[(1)] = (5));

} else {
var statearr_14357_14371 = state_14349__$1;
(statearr_14357_14371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (3))){
var inst_14347 = (state_14349[(2)]);
var state_14349__$1 = state_14349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14349__$1,inst_14347);
} else {
if((state_val_14350 === (2))){
var state_14349__$1 = state_14349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14349__$1,(4),ch);
} else {
if((state_val_14350 === (1))){
var state_14349__$1 = state_14349;
var statearr_14358_14372 = state_14349__$1;
(statearr_14358_14372[(2)] = null);

(statearr_14358_14372[(1)] = (2));


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
});})(c__7301__auto___14366,ch))
;
return ((function (switch__7245__auto__,c__7301__auto___14366,ch){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14362 = [null,null,null,null,null,null,null,null,null];
(statearr_14362[(0)] = state_machine__7246__auto__);

(statearr_14362[(1)] = (1));

return statearr_14362;
});
var state_machine__7246__auto____1 = (function (state_14349){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14363){if((e14363 instanceof Object)){
var ex__7249__auto__ = e14363;
var statearr_14364_14373 = state_14349;
(statearr_14364_14373[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14374 = state_14349;
state_14349 = G__14374;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14349){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___14366,ch))
})();
var state__7303__auto__ = (function (){var statearr_14365 = f__7302__auto__.call(null);
(statearr_14365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___14366);

return statearr_14365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___14366,ch))
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
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__){
return (function (state_14395){
var state_val_14396 = (state_14395[(1)]);
if((state_val_14396 === (2))){
var inst_14392 = (state_14395[(2)]);
var inst_14393 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14395__$1 = (function (){var statearr_14397 = state_14395;
(statearr_14397[(7)] = inst_14392);

return statearr_14397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14395__$1,inst_14393);
} else {
if((state_val_14396 === (1))){
var inst_14390 = cljs.core.async.timeout.call(null,(3000));
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14395__$1,(2),inst_14390);
} else {
return null;
}
}
});})(c__7301__auto__))
;
return ((function (switch__7245__auto__,c__7301__auto__){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14401 = [null,null,null,null,null,null,null,null];
(statearr_14401[(0)] = state_machine__7246__auto__);

(statearr_14401[(1)] = (1));

return statearr_14401;
});
var state_machine__7246__auto____1 = (function (state_14395){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14402){if((e14402 instanceof Object)){
var ex__7249__auto__ = e14402;
var statearr_14403_14405 = state_14395;
(statearr_14403_14405[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14406 = state_14395;
state_14395 = G__14406;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14395){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__))
})();
var state__7303__auto__ = (function (){var statearr_14404 = f__7302__auto__.call(null);
(statearr_14404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_14404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__))
);

return c__7301__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14410 = {"detail":url};
return obj14410;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14411){
var map__14417 = p__14411;
var map__14417__$1 = ((cljs.core.seq_QMARK_.call(null,map__14417))?cljs.core.apply.call(null,cljs.core.hash_map,map__14417):map__14417);
var ed = map__14417__$1;
var exception_data = cljs.core.get.call(null,map__14417__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14417__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__14418_14422 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14419_14423 = null;
var count__14420_14424 = (0);
var i__14421_14425 = (0);
while(true){
if((i__14421_14425 < count__14420_14424)){
var msg_14426 = cljs.core._nth.call(null,chunk__14419_14423,i__14421_14425);
console.log(msg_14426);

var G__14427 = seq__14418_14422;
var G__14428 = chunk__14419_14423;
var G__14429 = count__14420_14424;
var G__14430 = (i__14421_14425 + (1));
seq__14418_14422 = G__14427;
chunk__14419_14423 = G__14428;
count__14420_14424 = G__14429;
i__14421_14425 = G__14430;
continue;
} else {
var temp__4126__auto___14431 = cljs.core.seq.call(null,seq__14418_14422);
if(temp__4126__auto___14431){
var seq__14418_14432__$1 = temp__4126__auto___14431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14418_14432__$1)){
var c__4409__auto___14433 = cljs.core.chunk_first.call(null,seq__14418_14432__$1);
var G__14434 = cljs.core.chunk_rest.call(null,seq__14418_14432__$1);
var G__14435 = c__4409__auto___14433;
var G__14436 = cljs.core.count.call(null,c__4409__auto___14433);
var G__14437 = (0);
seq__14418_14422 = G__14434;
chunk__14419_14423 = G__14435;
count__14420_14424 = G__14436;
i__14421_14425 = G__14437;
continue;
} else {
var msg_14438 = cljs.core.first.call(null,seq__14418_14432__$1);
console.log(msg_14438);

var G__14439 = cljs.core.next.call(null,seq__14418_14432__$1);
var G__14440 = null;
var G__14441 = (0);
var G__14442 = (0);
seq__14418_14422 = G__14439;
chunk__14419_14423 = G__14440;
count__14420_14424 = G__14441;
i__14421_14425 = G__14442;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__14443){
var map__14445 = p__14443;
var map__14445__$1 = ((cljs.core.seq_QMARK_.call(null,map__14445))?cljs.core.apply.call(null,cljs.core.hash_map,map__14445):map__14445);
var w = map__14445__$1;
var message = cljs.core.get.call(null,map__14445__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14452 = cljs.core.seq.call(null,plugins);
var chunk__14453 = null;
var count__14454 = (0);
var i__14455 = (0);
while(true){
if((i__14455 < count__14454)){
var vec__14456 = cljs.core._nth.call(null,chunk__14453,i__14455);
var k = cljs.core.nth.call(null,vec__14456,(0),null);
var plugin = cljs.core.nth.call(null,vec__14456,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14458 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14452,chunk__14453,count__14454,i__14455,pl_14458,vec__14456,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14458.call(null,msg_hist);
});})(seq__14452,chunk__14453,count__14454,i__14455,pl_14458,vec__14456,k,plugin))
);
} else {
}

var G__14459 = seq__14452;
var G__14460 = chunk__14453;
var G__14461 = count__14454;
var G__14462 = (i__14455 + (1));
seq__14452 = G__14459;
chunk__14453 = G__14460;
count__14454 = G__14461;
i__14455 = G__14462;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14452);
if(temp__4126__auto__){
var seq__14452__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14452__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__14452__$1);
var G__14463 = cljs.core.chunk_rest.call(null,seq__14452__$1);
var G__14464 = c__4409__auto__;
var G__14465 = cljs.core.count.call(null,c__4409__auto__);
var G__14466 = (0);
seq__14452 = G__14463;
chunk__14453 = G__14464;
count__14454 = G__14465;
i__14455 = G__14466;
continue;
} else {
var vec__14457 = cljs.core.first.call(null,seq__14452__$1);
var k = cljs.core.nth.call(null,vec__14457,(0),null);
var plugin = cljs.core.nth.call(null,vec__14457,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14467 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14452,chunk__14453,count__14454,i__14455,pl_14467,vec__14457,k,plugin,seq__14452__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14467.call(null,msg_hist);
});})(seq__14452,chunk__14453,count__14454,i__14455,pl_14467,vec__14457,k,plugin,seq__14452__$1,temp__4126__auto__))
);
} else {
}

var G__14468 = cljs.core.next.call(null,seq__14452__$1);
var G__14469 = null;
var G__14470 = (0);
var G__14471 = (0);
seq__14452 = G__14468;
chunk__14453 = G__14469;
count__14454 = G__14470;
i__14455 = G__14471;
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
var watch_and_reload__delegate = function (p__14472){
var map__14474 = p__14472;
var map__14474__$1 = ((cljs.core.seq_QMARK_.call(null,map__14474))?cljs.core.apply.call(null,cljs.core.hash_map,map__14474):map__14474);
var opts = map__14474__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14472 = null;
if (arguments.length > 0) {
  p__14472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__14472);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14475){
var p__14472 = cljs.core.seq(arglist__14475);
return watch_and_reload__delegate(p__14472);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map