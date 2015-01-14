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
figwheel.client.error_msg_format = (function error_msg_format(p__13898){
var map__13900 = p__13898;
var map__13900__$1 = ((cljs.core.seq_QMARK_.call(null,map__13900))?cljs.core.apply.call(null,cljs.core.hash_map,map__13900):map__13900);
var class$ = cljs.core.get.call(null,map__13900__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13900__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7304__auto___14021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14021,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14021,ch){
return (function (state_13995){
var state_val_13996 = (state_13995[(1)]);
if((state_val_13996 === (7))){
var inst_13991 = (state_13995[(2)]);
var state_13995__$1 = state_13995;
var statearr_13997_14022 = state_13995__$1;
(statearr_13997_14022[(2)] = inst_13991);

(statearr_13997_14022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (1))){
var state_13995__$1 = state_13995;
var statearr_13998_14023 = state_13995__$1;
(statearr_13998_14023[(2)] = null);

(statearr_13998_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (4))){
var inst_13963 = (state_13995[(7)]);
var inst_13963__$1 = (state_13995[(2)]);
var state_13995__$1 = (function (){var statearr_13999 = state_13995;
(statearr_13999[(7)] = inst_13963__$1);

return statearr_13999;
})();
if(cljs.core.truth_(inst_13963__$1)){
var statearr_14000_14024 = state_13995__$1;
(statearr_14000_14024[(1)] = (5));

} else {
var statearr_14001_14025 = state_13995__$1;
(statearr_14001_14025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (13))){
var state_13995__$1 = state_13995;
var statearr_14002_14026 = state_13995__$1;
(statearr_14002_14026[(2)] = null);

(statearr_14002_14026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (6))){
var state_13995__$1 = state_13995;
var statearr_14003_14027 = state_13995__$1;
(statearr_14003_14027[(2)] = null);

(statearr_14003_14027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (3))){
var inst_13993 = (state_13995[(2)]);
var state_13995__$1 = state_13995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13995__$1,inst_13993);
} else {
if((state_val_13996 === (12))){
var inst_13970 = (state_13995[(8)]);
var inst_13979 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13970);
var inst_13980 = cljs.core.first.call(null,inst_13979);
var inst_13981 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13980);
var inst_13982 = console.warn("Figwheel: Not loading code with warnings - ",inst_13981);
var state_13995__$1 = state_13995;
var statearr_14004_14028 = state_13995__$1;
(statearr_14004_14028[(2)] = inst_13982);

(statearr_14004_14028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (2))){
var state_13995__$1 = state_13995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13995__$1,(4),ch);
} else {
if((state_val_13996 === (11))){
var inst_13975 = (state_13995[(2)]);
var state_13995__$1 = state_13995;
var statearr_14005_14029 = state_13995__$1;
(statearr_14005_14029[(2)] = inst_13975);

(statearr_14005_14029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (9))){
var inst_13969 = (state_13995[(9)]);
var inst_13977 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13969,opts);
var state_13995__$1 = state_13995;
if(inst_13977){
var statearr_14006_14030 = state_13995__$1;
(statearr_14006_14030[(1)] = (12));

} else {
var statearr_14007_14031 = state_13995__$1;
(statearr_14007_14031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (5))){
var inst_13963 = (state_13995[(7)]);
var inst_13969 = (state_13995[(9)]);
var inst_13965 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13966 = (new cljs.core.PersistentArrayMap(null,2,inst_13965,null));
var inst_13967 = (new cljs.core.PersistentHashSet(null,inst_13966,null));
var inst_13968 = figwheel.client.focus_msgs.call(null,inst_13967,inst_13963);
var inst_13969__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13968);
var inst_13970 = cljs.core.first.call(null,inst_13968);
var inst_13971 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13969__$1,opts);
var state_13995__$1 = (function (){var statearr_14008 = state_13995;
(statearr_14008[(8)] = inst_13970);

(statearr_14008[(9)] = inst_13969__$1);

return statearr_14008;
})();
if(cljs.core.truth_(inst_13971)){
var statearr_14009_14032 = state_13995__$1;
(statearr_14009_14032[(1)] = (8));

} else {
var statearr_14010_14033 = state_13995__$1;
(statearr_14010_14033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (14))){
var inst_13985 = (state_13995[(2)]);
var state_13995__$1 = state_13995;
var statearr_14011_14034 = state_13995__$1;
(statearr_14011_14034[(2)] = inst_13985);

(statearr_14011_14034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (10))){
var inst_13987 = (state_13995[(2)]);
var state_13995__$1 = (function (){var statearr_14012 = state_13995;
(statearr_14012[(10)] = inst_13987);

return statearr_14012;
})();
var statearr_14013_14035 = state_13995__$1;
(statearr_14013_14035[(2)] = null);

(statearr_14013_14035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13996 === (8))){
var inst_13970 = (state_13995[(8)]);
var inst_13973 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13970);
var state_13995__$1 = state_13995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13995__$1,(11),inst_13973);
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
});})(c__7304__auto___14021,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14021,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14017[(0)] = state_machine__7249__auto__);

(statearr_14017[(1)] = (1));

return statearr_14017;
});
var state_machine__7249__auto____1 = (function (state_13995){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_13995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14018){if((e14018 instanceof Object)){
var ex__7252__auto__ = e14018;
var statearr_14019_14036 = state_13995;
(statearr_14019_14036[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14037 = state_13995;
state_13995 = G__14037;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_13995){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_13995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14021,ch))
})();
var state__7306__auto__ = (function (){var statearr_14020 = f__7305__auto__.call(null);
(statearr_14020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14021);

return statearr_14020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14021,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__14041){
var vec__14042 = p__14041;
var map__14043 = cljs.core.nth.call(null,vec__14042,(0),null);
var map__14043__$1 = ((cljs.core.seq_QMARK_.call(null,map__14043))?cljs.core.apply.call(null,cljs.core.hash_map,map__14043):map__14043);
var msg = map__14043__$1;
var msg_name = cljs.core.get.call(null,map__14043__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14042,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__14044){
var map__14052 = p__14044;
var map__14052__$1 = ((cljs.core.seq_QMARK_.call(null,map__14052))?cljs.core.apply.call(null,cljs.core.hash_map,map__14052):map__14052);
var on_compile_fail = cljs.core.get.call(null,map__14052__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__14052__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__14052,map__14052__$1,on_compile_fail,on_compile_warning){
return (function (p__14053){
var vec__14054 = p__14053;
var map__14055 = cljs.core.nth.call(null,vec__14054,(0),null);
var map__14055__$1 = ((cljs.core.seq_QMARK_.call(null,map__14055))?cljs.core.apply.call(null,cljs.core.hash_map,map__14055):map__14055);
var msg = map__14055__$1;
var msg_name = cljs.core.get.call(null,map__14055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14054,(1));
var pred__14056 = cljs.core._EQ_;
var expr__14057 = msg_name;
if(cljs.core.truth_(pred__14056.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14057))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14056.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14057))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14052,map__14052__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (state_14234){
var state_val_14235 = (state_14234[(1)]);
if((state_val_14235 === (7))){
var inst_14183 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14183){
var statearr_14236_14273 = state_14234__$1;
(statearr_14236_14273[(1)] = (11));

} else {
var statearr_14237_14274 = state_14234__$1;
(statearr_14237_14274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (20))){
var inst_14224 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14238_14275 = state_14234__$1;
(statearr_14238_14275[(2)] = inst_14224);

(statearr_14238_14275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (27))){
var inst_14215 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(30),inst_14215);
} else {
if((state_val_14235 === (1))){
var inst_14166 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14234__$1 = state_14234;
if(cljs.core.truth_(inst_14166)){
var statearr_14239_14276 = state_14234__$1;
(statearr_14239_14276[(1)] = (2));

} else {
var statearr_14240_14277 = state_14234__$1;
(statearr_14240_14277[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (24))){
var inst_14213 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14213){
var statearr_14241_14278 = state_14234__$1;
(statearr_14241_14278[(1)] = (27));

} else {
var statearr_14242_14279 = state_14234__$1;
(statearr_14242_14279[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (4))){
var inst_14232 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14234__$1,inst_14232);
} else {
if((state_val_14235 === (15))){
var inst_14193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14194 = figwheel.client.heads_up.append_message.call(null,inst_14193);
var state_14234__$1 = state_14234;
var statearr_14243_14280 = state_14234__$1;
(statearr_14243_14280[(2)] = inst_14194);

(statearr_14243_14280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (21))){
var inst_14200 = (state_14234[(2)]);
var inst_14201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14202 = figwheel.client.heads_up.display_warning.call(null,inst_14201);
var state_14234__$1 = (function (){var statearr_14244 = state_14234;
(statearr_14244[(7)] = inst_14200);

return statearr_14244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(22),inst_14202);
} else {
if((state_val_14235 === (13))){
var inst_14228 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14245_14281 = state_14234__$1;
(statearr_14245_14281[(2)] = inst_14228);

(statearr_14245_14281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (22))){
var inst_14204 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14246_14282 = state_14234__$1;
(statearr_14246_14282[(2)] = inst_14204);

(statearr_14246_14282[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (29))){
var inst_14220 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14247_14283 = state_14234__$1;
(statearr_14247_14283[(2)] = inst_14220);

(statearr_14247_14283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (6))){
var inst_14174 = figwheel.client.heads_up.clear.call(null);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(9),inst_14174);
} else {
if((state_val_14235 === (28))){
var state_14234__$1 = state_14234;
var statearr_14248_14284 = state_14234__$1;
(statearr_14248_14284[(2)] = null);

(statearr_14248_14284[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (25))){
var inst_14222 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14249_14285 = state_14234__$1;
(statearr_14249_14285[(2)] = inst_14222);

(statearr_14249_14285[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (17))){
var inst_14226 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14250_14286 = state_14234__$1;
(statearr_14250_14286[(2)] = inst_14226);

(statearr_14250_14286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (3))){
var inst_14172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14172){
var statearr_14251_14287 = state_14234__$1;
(statearr_14251_14287[(1)] = (6));

} else {
var statearr_14252_14288 = state_14234__$1;
(statearr_14252_14288[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (12))){
var inst_14191 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14191){
var statearr_14253_14289 = state_14234__$1;
(statearr_14253_14289[(1)] = (15));

} else {
var statearr_14254_14290 = state_14234__$1;
(statearr_14254_14290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (2))){
var inst_14168 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(5),inst_14168);
} else {
if((state_val_14235 === (23))){
var inst_14208 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14209 = figwheel.client.heads_up.display_warning.call(null,inst_14208);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(26),inst_14209);
} else {
if((state_val_14235 === (19))){
var inst_14206 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14206){
var statearr_14255_14291 = state_14234__$1;
(statearr_14255_14291[(1)] = (23));

} else {
var statearr_14256_14292 = state_14234__$1;
(statearr_14256_14292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (11))){
var inst_14185 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14186 = figwheel.client.format_messages.call(null,inst_14185);
var inst_14187 = figwheel.client.heads_up.display_error.call(null,inst_14186);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(14),inst_14187);
} else {
if((state_val_14235 === (9))){
var inst_14176 = (state_14234[(2)]);
var inst_14177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14178 = figwheel.client.format_messages.call(null,inst_14177);
var inst_14179 = figwheel.client.heads_up.display_error.call(null,inst_14178);
var state_14234__$1 = (function (){var statearr_14257 = state_14234;
(statearr_14257[(8)] = inst_14176);

return statearr_14257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(10),inst_14179);
} else {
if((state_val_14235 === (5))){
var inst_14170 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14258_14293 = state_14234__$1;
(statearr_14258_14293[(2)] = inst_14170);

(statearr_14258_14293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (14))){
var inst_14189 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14259_14294 = state_14234__$1;
(statearr_14259_14294[(2)] = inst_14189);

(statearr_14259_14294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (26))){
var inst_14211 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14260_14295 = state_14234__$1;
(statearr_14260_14295[(2)] = inst_14211);

(statearr_14260_14295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (16))){
var inst_14196 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14234__$1 = state_14234;
if(inst_14196){
var statearr_14261_14296 = state_14234__$1;
(statearr_14261_14296[(1)] = (18));

} else {
var statearr_14262_14297 = state_14234__$1;
(statearr_14262_14297[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (30))){
var inst_14217 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14263_14298 = state_14234__$1;
(statearr_14263_14298[(2)] = inst_14217);

(statearr_14263_14298[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (10))){
var inst_14181 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14264_14299 = state_14234__$1;
(statearr_14264_14299[(2)] = inst_14181);

(statearr_14264_14299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (18))){
var inst_14198 = figwheel.client.heads_up.clear.call(null);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(21),inst_14198);
} else {
if((state_val_14235 === (8))){
var inst_14230 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14265_14300 = state_14234__$1;
(statearr_14265_14300[(2)] = inst_14230);

(statearr_14265_14300[(1)] = (4));


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
var statearr_14269 = [null,null,null,null,null,null,null,null,null];
(statearr_14269[(0)] = state_machine__7249__auto__);

(statearr_14269[(1)] = (1));

return statearr_14269;
});
var state_machine__7249__auto____1 = (function (state_14234){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14270){if((e14270 instanceof Object)){
var ex__7252__auto__ = e14270;
var statearr_14271_14301 = state_14234;
(statearr_14271_14301[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14302 = state_14234;
state_14234 = G__14302;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,msg_hist,msg_names,msg))
})();
var state__7306__auto__ = (function (){var statearr_14272 = f__7305__auto__.call(null);
(statearr_14272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,msg_hist,msg_names,msg))
);

return c__7304__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7304__auto___14365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14365,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14365,ch){
return (function (state_14348){
var state_val_14349 = (state_14348[(1)]);
if((state_val_14349 === (8))){
var inst_14340 = (state_14348[(2)]);
var state_14348__$1 = (function (){var statearr_14350 = state_14348;
(statearr_14350[(7)] = inst_14340);

return statearr_14350;
})();
var statearr_14351_14366 = state_14348__$1;
(statearr_14351_14366[(2)] = null);

(statearr_14351_14366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (7))){
var inst_14344 = (state_14348[(2)]);
var state_14348__$1 = state_14348;
var statearr_14352_14367 = state_14348__$1;
(statearr_14352_14367[(2)] = inst_14344);

(statearr_14352_14367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (6))){
var state_14348__$1 = state_14348;
var statearr_14353_14368 = state_14348__$1;
(statearr_14353_14368[(2)] = null);

(statearr_14353_14368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (5))){
var inst_14336 = (state_14348[(8)]);
var inst_14338 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14336);
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,(8),inst_14338);
} else {
if((state_val_14349 === (4))){
var inst_14336 = (state_14348[(8)]);
var inst_14336__$1 = (state_14348[(2)]);
var state_14348__$1 = (function (){var statearr_14354 = state_14348;
(statearr_14354[(8)] = inst_14336__$1);

return statearr_14354;
})();
if(cljs.core.truth_(inst_14336__$1)){
var statearr_14355_14369 = state_14348__$1;
(statearr_14355_14369[(1)] = (5));

} else {
var statearr_14356_14370 = state_14348__$1;
(statearr_14356_14370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (3))){
var inst_14346 = (state_14348[(2)]);
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14348__$1,inst_14346);
} else {
if((state_val_14349 === (2))){
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,(4),ch);
} else {
if((state_val_14349 === (1))){
var state_14348__$1 = state_14348;
var statearr_14357_14371 = state_14348__$1;
(statearr_14357_14371[(2)] = null);

(statearr_14357_14371[(1)] = (2));


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
});})(c__7304__auto___14365,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14365,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14361 = [null,null,null,null,null,null,null,null,null];
(statearr_14361[(0)] = state_machine__7249__auto__);

(statearr_14361[(1)] = (1));

return statearr_14361;
});
var state_machine__7249__auto____1 = (function (state_14348){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14362){if((e14362 instanceof Object)){
var ex__7252__auto__ = e14362;
var statearr_14363_14372 = state_14348;
(statearr_14363_14372[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14373 = state_14348;
state_14348 = G__14373;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14365,ch))
})();
var state__7306__auto__ = (function (){var statearr_14364 = f__7305__auto__.call(null);
(statearr_14364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14365);

return statearr_14364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14365,ch))
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
return (function (state_14394){
var state_val_14395 = (state_14394[(1)]);
if((state_val_14395 === (2))){
var inst_14391 = (state_14394[(2)]);
var inst_14392 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14394__$1 = (function (){var statearr_14396 = state_14394;
(statearr_14396[(7)] = inst_14391);

return statearr_14396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14394__$1,inst_14392);
} else {
if((state_val_14395 === (1))){
var inst_14389 = cljs.core.async.timeout.call(null,(3000));
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14394__$1,(2),inst_14389);
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
var statearr_14400 = [null,null,null,null,null,null,null,null];
(statearr_14400[(0)] = state_machine__7249__auto__);

(statearr_14400[(1)] = (1));

return statearr_14400;
});
var state_machine__7249__auto____1 = (function (state_14394){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14401){if((e14401 instanceof Object)){
var ex__7252__auto__ = e14401;
var statearr_14402_14404 = state_14394;
(statearr_14402_14404[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14405 = state_14394;
state_14394 = G__14405;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14394){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14403 = f__7305__auto__.call(null);
(statearr_14403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14403;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14409 = {"detail":url};
return obj14409;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14410){
var map__14416 = p__14410;
var map__14416__$1 = ((cljs.core.seq_QMARK_.call(null,map__14416))?cljs.core.apply.call(null,cljs.core.hash_map,map__14416):map__14416);
var ed = map__14416__$1;
var exception_data = cljs.core.get.call(null,map__14416__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14416__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__14417_14421 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14418_14422 = null;
var count__14419_14423 = (0);
var i__14420_14424 = (0);
while(true){
if((i__14420_14424 < count__14419_14423)){
var msg_14425 = cljs.core._nth.call(null,chunk__14418_14422,i__14420_14424);
console.log(msg_14425);

var G__14426 = seq__14417_14421;
var G__14427 = chunk__14418_14422;
var G__14428 = count__14419_14423;
var G__14429 = (i__14420_14424 + (1));
seq__14417_14421 = G__14426;
chunk__14418_14422 = G__14427;
count__14419_14423 = G__14428;
i__14420_14424 = G__14429;
continue;
} else {
var temp__4126__auto___14430 = cljs.core.seq.call(null,seq__14417_14421);
if(temp__4126__auto___14430){
var seq__14417_14431__$1 = temp__4126__auto___14430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14417_14431__$1)){
var c__4409__auto___14432 = cljs.core.chunk_first.call(null,seq__14417_14431__$1);
var G__14433 = cljs.core.chunk_rest.call(null,seq__14417_14431__$1);
var G__14434 = c__4409__auto___14432;
var G__14435 = cljs.core.count.call(null,c__4409__auto___14432);
var G__14436 = (0);
seq__14417_14421 = G__14433;
chunk__14418_14422 = G__14434;
count__14419_14423 = G__14435;
i__14420_14424 = G__14436;
continue;
} else {
var msg_14437 = cljs.core.first.call(null,seq__14417_14431__$1);
console.log(msg_14437);

var G__14438 = cljs.core.next.call(null,seq__14417_14431__$1);
var G__14439 = null;
var G__14440 = (0);
var G__14441 = (0);
seq__14417_14421 = G__14438;
chunk__14418_14422 = G__14439;
count__14419_14423 = G__14440;
i__14420_14424 = G__14441;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__14442){
var map__14444 = p__14442;
var map__14444__$1 = ((cljs.core.seq_QMARK_.call(null,map__14444))?cljs.core.apply.call(null,cljs.core.hash_map,map__14444):map__14444);
var w = map__14444__$1;
var message = cljs.core.get.call(null,map__14444__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14451 = cljs.core.seq.call(null,plugins);
var chunk__14452 = null;
var count__14453 = (0);
var i__14454 = (0);
while(true){
if((i__14454 < count__14453)){
var vec__14455 = cljs.core._nth.call(null,chunk__14452,i__14454);
var k = cljs.core.nth.call(null,vec__14455,(0),null);
var plugin = cljs.core.nth.call(null,vec__14455,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14457 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14451,chunk__14452,count__14453,i__14454,pl_14457,vec__14455,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14457.call(null,msg_hist);
});})(seq__14451,chunk__14452,count__14453,i__14454,pl_14457,vec__14455,k,plugin))
);
} else {
}

var G__14458 = seq__14451;
var G__14459 = chunk__14452;
var G__14460 = count__14453;
var G__14461 = (i__14454 + (1));
seq__14451 = G__14458;
chunk__14452 = G__14459;
count__14453 = G__14460;
i__14454 = G__14461;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14451);
if(temp__4126__auto__){
var seq__14451__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14451__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__14451__$1);
var G__14462 = cljs.core.chunk_rest.call(null,seq__14451__$1);
var G__14463 = c__4409__auto__;
var G__14464 = cljs.core.count.call(null,c__4409__auto__);
var G__14465 = (0);
seq__14451 = G__14462;
chunk__14452 = G__14463;
count__14453 = G__14464;
i__14454 = G__14465;
continue;
} else {
var vec__14456 = cljs.core.first.call(null,seq__14451__$1);
var k = cljs.core.nth.call(null,vec__14456,(0),null);
var plugin = cljs.core.nth.call(null,vec__14456,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14466 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14451,chunk__14452,count__14453,i__14454,pl_14466,vec__14456,k,plugin,seq__14451__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14466.call(null,msg_hist);
});})(seq__14451,chunk__14452,count__14453,i__14454,pl_14466,vec__14456,k,plugin,seq__14451__$1,temp__4126__auto__))
);
} else {
}

var G__14467 = cljs.core.next.call(null,seq__14451__$1);
var G__14468 = null;
var G__14469 = (0);
var G__14470 = (0);
seq__14451 = G__14467;
chunk__14452 = G__14468;
count__14453 = G__14469;
i__14454 = G__14470;
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
var watch_and_reload__delegate = function (p__14471){
var map__14473 = p__14471;
var map__14473__$1 = ((cljs.core.seq_QMARK_.call(null,map__14473))?cljs.core.apply.call(null,cljs.core.hash_map,map__14473):map__14473);
var opts = map__14473__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14471 = null;
if (arguments.length > 0) {
  p__14471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__14471);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14474){
var p__14471 = cljs.core.seq(arglist__14474);
return watch_and_reload__delegate(p__14471);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map