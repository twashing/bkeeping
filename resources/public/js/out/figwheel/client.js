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
figwheel.client.error_msg_format = (function error_msg_format(p__13889){
var map__13891 = p__13889;
var map__13891__$1 = ((cljs.core.seq_QMARK_.call(null,map__13891))?cljs.core.apply.call(null,cljs.core.hash_map,map__13891):map__13891);
var class$ = cljs.core.get.call(null,map__13891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13891__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7304__auto___14012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14012,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14012,ch){
return (function (state_13986){
var state_val_13987 = (state_13986[(1)]);
if((state_val_13987 === (7))){
var inst_13982 = (state_13986[(2)]);
var state_13986__$1 = state_13986;
var statearr_13988_14013 = state_13986__$1;
(statearr_13988_14013[(2)] = inst_13982);

(statearr_13988_14013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (1))){
var state_13986__$1 = state_13986;
var statearr_13989_14014 = state_13986__$1;
(statearr_13989_14014[(2)] = null);

(statearr_13989_14014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (4))){
var inst_13954 = (state_13986[(7)]);
var inst_13954__$1 = (state_13986[(2)]);
var state_13986__$1 = (function (){var statearr_13990 = state_13986;
(statearr_13990[(7)] = inst_13954__$1);

return statearr_13990;
})();
if(cljs.core.truth_(inst_13954__$1)){
var statearr_13991_14015 = state_13986__$1;
(statearr_13991_14015[(1)] = (5));

} else {
var statearr_13992_14016 = state_13986__$1;
(statearr_13992_14016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (13))){
var state_13986__$1 = state_13986;
var statearr_13993_14017 = state_13986__$1;
(statearr_13993_14017[(2)] = null);

(statearr_13993_14017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (6))){
var state_13986__$1 = state_13986;
var statearr_13994_14018 = state_13986__$1;
(statearr_13994_14018[(2)] = null);

(statearr_13994_14018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (3))){
var inst_13984 = (state_13986[(2)]);
var state_13986__$1 = state_13986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13986__$1,inst_13984);
} else {
if((state_val_13987 === (12))){
var inst_13961 = (state_13986[(8)]);
var inst_13970 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13961);
var inst_13971 = cljs.core.first.call(null,inst_13970);
var inst_13972 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13971);
var inst_13973 = console.warn("Figwheel: Not loading code with warnings - ",inst_13972);
var state_13986__$1 = state_13986;
var statearr_13995_14019 = state_13986__$1;
(statearr_13995_14019[(2)] = inst_13973);

(statearr_13995_14019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (2))){
var state_13986__$1 = state_13986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13986__$1,(4),ch);
} else {
if((state_val_13987 === (11))){
var inst_13966 = (state_13986[(2)]);
var state_13986__$1 = state_13986;
var statearr_13996_14020 = state_13986__$1;
(statearr_13996_14020[(2)] = inst_13966);

(statearr_13996_14020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (9))){
var inst_13960 = (state_13986[(9)]);
var inst_13968 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13960,opts);
var state_13986__$1 = state_13986;
if(inst_13968){
var statearr_13997_14021 = state_13986__$1;
(statearr_13997_14021[(1)] = (12));

} else {
var statearr_13998_14022 = state_13986__$1;
(statearr_13998_14022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (5))){
var inst_13960 = (state_13986[(9)]);
var inst_13954 = (state_13986[(7)]);
var inst_13956 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13957 = (new cljs.core.PersistentArrayMap(null,2,inst_13956,null));
var inst_13958 = (new cljs.core.PersistentHashSet(null,inst_13957,null));
var inst_13959 = figwheel.client.focus_msgs.call(null,inst_13958,inst_13954);
var inst_13960__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13959);
var inst_13961 = cljs.core.first.call(null,inst_13959);
var inst_13962 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13960__$1,opts);
var state_13986__$1 = (function (){var statearr_13999 = state_13986;
(statearr_13999[(9)] = inst_13960__$1);

(statearr_13999[(8)] = inst_13961);

return statearr_13999;
})();
if(cljs.core.truth_(inst_13962)){
var statearr_14000_14023 = state_13986__$1;
(statearr_14000_14023[(1)] = (8));

} else {
var statearr_14001_14024 = state_13986__$1;
(statearr_14001_14024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (14))){
var inst_13976 = (state_13986[(2)]);
var state_13986__$1 = state_13986;
var statearr_14002_14025 = state_13986__$1;
(statearr_14002_14025[(2)] = inst_13976);

(statearr_14002_14025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (10))){
var inst_13978 = (state_13986[(2)]);
var state_13986__$1 = (function (){var statearr_14003 = state_13986;
(statearr_14003[(10)] = inst_13978);

return statearr_14003;
})();
var statearr_14004_14026 = state_13986__$1;
(statearr_14004_14026[(2)] = null);

(statearr_14004_14026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13987 === (8))){
var inst_13961 = (state_13986[(8)]);
var inst_13964 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13961);
var state_13986__$1 = state_13986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13986__$1,(11),inst_13964);
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
});})(c__7304__auto___14012,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14012,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14008[(0)] = state_machine__7249__auto__);

(statearr_14008[(1)] = (1));

return statearr_14008;
});
var state_machine__7249__auto____1 = (function (state_13986){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_13986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14009){if((e14009 instanceof Object)){
var ex__7252__auto__ = e14009;
var statearr_14010_14027 = state_13986;
(statearr_14010_14027[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14028 = state_13986;
state_13986 = G__14028;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_13986){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_13986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14012,ch))
})();
var state__7306__auto__ = (function (){var statearr_14011 = f__7305__auto__.call(null);
(statearr_14011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14012);

return statearr_14011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14012,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__14032){
var vec__14033 = p__14032;
var map__14034 = cljs.core.nth.call(null,vec__14033,(0),null);
var map__14034__$1 = ((cljs.core.seq_QMARK_.call(null,map__14034))?cljs.core.apply.call(null,cljs.core.hash_map,map__14034):map__14034);
var msg = map__14034__$1;
var msg_name = cljs.core.get.call(null,map__14034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14033,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__14035){
var map__14043 = p__14035;
var map__14043__$1 = ((cljs.core.seq_QMARK_.call(null,map__14043))?cljs.core.apply.call(null,cljs.core.hash_map,map__14043):map__14043);
var on_compile_fail = cljs.core.get.call(null,map__14043__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__14043__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__14043,map__14043__$1,on_compile_fail,on_compile_warning){
return (function (p__14044){
var vec__14045 = p__14044;
var map__14046 = cljs.core.nth.call(null,vec__14045,(0),null);
var map__14046__$1 = ((cljs.core.seq_QMARK_.call(null,map__14046))?cljs.core.apply.call(null,cljs.core.hash_map,map__14046):map__14046);
var msg = map__14046__$1;
var msg_name = cljs.core.get.call(null,map__14046__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14045,(1));
var pred__14047 = cljs.core._EQ_;
var expr__14048 = msg_name;
if(cljs.core.truth_(pred__14047.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14048))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14047.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14048))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14043,map__14043__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,msg_hist,msg_names,msg){
return (function (state_14225){
var state_val_14226 = (state_14225[(1)]);
if((state_val_14226 === (7))){
var inst_14174 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14174){
var statearr_14227_14264 = state_14225__$1;
(statearr_14227_14264[(1)] = (11));

} else {
var statearr_14228_14265 = state_14225__$1;
(statearr_14228_14265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (20))){
var inst_14215 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14229_14266 = state_14225__$1;
(statearr_14229_14266[(2)] = inst_14215);

(statearr_14229_14266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (27))){
var inst_14206 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(30),inst_14206);
} else {
if((state_val_14226 === (1))){
var inst_14157 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14225__$1 = state_14225;
if(cljs.core.truth_(inst_14157)){
var statearr_14230_14267 = state_14225__$1;
(statearr_14230_14267[(1)] = (2));

} else {
var statearr_14231_14268 = state_14225__$1;
(statearr_14231_14268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (24))){
var inst_14204 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14204){
var statearr_14232_14269 = state_14225__$1;
(statearr_14232_14269[(1)] = (27));

} else {
var statearr_14233_14270 = state_14225__$1;
(statearr_14233_14270[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (4))){
var inst_14223 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14225__$1,inst_14223);
} else {
if((state_val_14226 === (15))){
var inst_14184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14185 = figwheel.client.heads_up.append_message.call(null,inst_14184);
var state_14225__$1 = state_14225;
var statearr_14234_14271 = state_14225__$1;
(statearr_14234_14271[(2)] = inst_14185);

(statearr_14234_14271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (21))){
var inst_14191 = (state_14225[(2)]);
var inst_14192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14193 = figwheel.client.heads_up.display_warning.call(null,inst_14192);
var state_14225__$1 = (function (){var statearr_14235 = state_14225;
(statearr_14235[(7)] = inst_14191);

return statearr_14235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(22),inst_14193);
} else {
if((state_val_14226 === (13))){
var inst_14219 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14236_14272 = state_14225__$1;
(statearr_14236_14272[(2)] = inst_14219);

(statearr_14236_14272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (22))){
var inst_14195 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14237_14273 = state_14225__$1;
(statearr_14237_14273[(2)] = inst_14195);

(statearr_14237_14273[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (29))){
var inst_14211 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14238_14274 = state_14225__$1;
(statearr_14238_14274[(2)] = inst_14211);

(statearr_14238_14274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (6))){
var inst_14165 = figwheel.client.heads_up.clear.call(null);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(9),inst_14165);
} else {
if((state_val_14226 === (28))){
var state_14225__$1 = state_14225;
var statearr_14239_14275 = state_14225__$1;
(statearr_14239_14275[(2)] = null);

(statearr_14239_14275[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (25))){
var inst_14213 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14240_14276 = state_14225__$1;
(statearr_14240_14276[(2)] = inst_14213);

(statearr_14240_14276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (17))){
var inst_14217 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14241_14277 = state_14225__$1;
(statearr_14241_14277[(2)] = inst_14217);

(statearr_14241_14277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (3))){
var inst_14163 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14163){
var statearr_14242_14278 = state_14225__$1;
(statearr_14242_14278[(1)] = (6));

} else {
var statearr_14243_14279 = state_14225__$1;
(statearr_14243_14279[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (12))){
var inst_14182 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14182){
var statearr_14244_14280 = state_14225__$1;
(statearr_14244_14280[(1)] = (15));

} else {
var statearr_14245_14281 = state_14225__$1;
(statearr_14245_14281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (2))){
var inst_14159 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(5),inst_14159);
} else {
if((state_val_14226 === (23))){
var inst_14199 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14200 = figwheel.client.heads_up.display_warning.call(null,inst_14199);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(26),inst_14200);
} else {
if((state_val_14226 === (19))){
var inst_14197 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14197){
var statearr_14246_14282 = state_14225__$1;
(statearr_14246_14282[(1)] = (23));

} else {
var statearr_14247_14283 = state_14225__$1;
(statearr_14247_14283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (11))){
var inst_14176 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14177 = figwheel.client.format_messages.call(null,inst_14176);
var inst_14178 = figwheel.client.heads_up.display_error.call(null,inst_14177);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(14),inst_14178);
} else {
if((state_val_14226 === (9))){
var inst_14167 = (state_14225[(2)]);
var inst_14168 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14169 = figwheel.client.format_messages.call(null,inst_14168);
var inst_14170 = figwheel.client.heads_up.display_error.call(null,inst_14169);
var state_14225__$1 = (function (){var statearr_14248 = state_14225;
(statearr_14248[(8)] = inst_14167);

return statearr_14248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(10),inst_14170);
} else {
if((state_val_14226 === (5))){
var inst_14161 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14249_14284 = state_14225__$1;
(statearr_14249_14284[(2)] = inst_14161);

(statearr_14249_14284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (14))){
var inst_14180 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14250_14285 = state_14225__$1;
(statearr_14250_14285[(2)] = inst_14180);

(statearr_14250_14285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (26))){
var inst_14202 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14251_14286 = state_14225__$1;
(statearr_14251_14286[(2)] = inst_14202);

(statearr_14251_14286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (16))){
var inst_14187 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14225__$1 = state_14225;
if(inst_14187){
var statearr_14252_14287 = state_14225__$1;
(statearr_14252_14287[(1)] = (18));

} else {
var statearr_14253_14288 = state_14225__$1;
(statearr_14253_14288[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (30))){
var inst_14208 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14254_14289 = state_14225__$1;
(statearr_14254_14289[(2)] = inst_14208);

(statearr_14254_14289[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (10))){
var inst_14172 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14255_14290 = state_14225__$1;
(statearr_14255_14290[(2)] = inst_14172);

(statearr_14255_14290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (18))){
var inst_14189 = figwheel.client.heads_up.clear.call(null);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(21),inst_14189);
} else {
if((state_val_14226 === (8))){
var inst_14221 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14256_14291 = state_14225__$1;
(statearr_14256_14291[(2)] = inst_14221);

(statearr_14256_14291[(1)] = (4));


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
var statearr_14260 = [null,null,null,null,null,null,null,null,null];
(statearr_14260[(0)] = state_machine__7249__auto__);

(statearr_14260[(1)] = (1));

return statearr_14260;
});
var state_machine__7249__auto____1 = (function (state_14225){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14261){if((e14261 instanceof Object)){
var ex__7252__auto__ = e14261;
var statearr_14262_14292 = state_14225;
(statearr_14262_14292[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14293 = state_14225;
state_14225 = G__14293;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14225){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,msg_hist,msg_names,msg))
})();
var state__7306__auto__ = (function (){var statearr_14263 = f__7305__auto__.call(null);
(statearr_14263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,msg_hist,msg_names,msg))
);

return c__7304__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7304__auto___14356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___14356,ch){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___14356,ch){
return (function (state_14339){
var state_val_14340 = (state_14339[(1)]);
if((state_val_14340 === (8))){
var inst_14331 = (state_14339[(2)]);
var state_14339__$1 = (function (){var statearr_14341 = state_14339;
(statearr_14341[(7)] = inst_14331);

return statearr_14341;
})();
var statearr_14342_14357 = state_14339__$1;
(statearr_14342_14357[(2)] = null);

(statearr_14342_14357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (7))){
var inst_14335 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14343_14358 = state_14339__$1;
(statearr_14343_14358[(2)] = inst_14335);

(statearr_14343_14358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (6))){
var state_14339__$1 = state_14339;
var statearr_14344_14359 = state_14339__$1;
(statearr_14344_14359[(2)] = null);

(statearr_14344_14359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (5))){
var inst_14327 = (state_14339[(8)]);
var inst_14329 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14327);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(8),inst_14329);
} else {
if((state_val_14340 === (4))){
var inst_14327 = (state_14339[(8)]);
var inst_14327__$1 = (state_14339[(2)]);
var state_14339__$1 = (function (){var statearr_14345 = state_14339;
(statearr_14345[(8)] = inst_14327__$1);

return statearr_14345;
})();
if(cljs.core.truth_(inst_14327__$1)){
var statearr_14346_14360 = state_14339__$1;
(statearr_14346_14360[(1)] = (5));

} else {
var statearr_14347_14361 = state_14339__$1;
(statearr_14347_14361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (3))){
var inst_14337 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else {
if((state_val_14340 === (2))){
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(4),ch);
} else {
if((state_val_14340 === (1))){
var state_14339__$1 = state_14339;
var statearr_14348_14362 = state_14339__$1;
(statearr_14348_14362[(2)] = null);

(statearr_14348_14362[(1)] = (2));


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
});})(c__7304__auto___14356,ch))
;
return ((function (switch__7248__auto__,c__7304__auto___14356,ch){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14352 = [null,null,null,null,null,null,null,null,null];
(statearr_14352[(0)] = state_machine__7249__auto__);

(statearr_14352[(1)] = (1));

return statearr_14352;
});
var state_machine__7249__auto____1 = (function (state_14339){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object)){
var ex__7252__auto__ = e14353;
var statearr_14354_14363 = state_14339;
(statearr_14354_14363[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14364 = state_14339;
state_14339 = G__14364;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___14356,ch))
})();
var state__7306__auto__ = (function (){var statearr_14355 = f__7305__auto__.call(null);
(statearr_14355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___14356);

return statearr_14355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___14356,ch))
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
return (function (state_14385){
var state_val_14386 = (state_14385[(1)]);
if((state_val_14386 === (2))){
var inst_14382 = (state_14385[(2)]);
var inst_14383 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14385__$1 = (function (){var statearr_14387 = state_14385;
(statearr_14387[(7)] = inst_14382);

return statearr_14387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14385__$1,inst_14383);
} else {
if((state_val_14386 === (1))){
var inst_14380 = cljs.core.async.timeout.call(null,(3000));
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14385__$1,(2),inst_14380);
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
var statearr_14391 = [null,null,null,null,null,null,null,null];
(statearr_14391[(0)] = state_machine__7249__auto__);

(statearr_14391[(1)] = (1));

return statearr_14391;
});
var state_machine__7249__auto____1 = (function (state_14385){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14392){if((e14392 instanceof Object)){
var ex__7252__auto__ = e14392;
var statearr_14393_14395 = state_14385;
(statearr_14393_14395[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14396 = state_14385;
state_14385 = G__14396;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14385){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14394 = f__7305__auto__.call(null);
(statearr_14394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14394;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14400 = {"detail":url};
return obj14400;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14401){
var map__14407 = p__14401;
var map__14407__$1 = ((cljs.core.seq_QMARK_.call(null,map__14407))?cljs.core.apply.call(null,cljs.core.hash_map,map__14407):map__14407);
var ed = map__14407__$1;
var exception_data = cljs.core.get.call(null,map__14407__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14407__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__14408_14412 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14409_14413 = null;
var count__14410_14414 = (0);
var i__14411_14415 = (0);
while(true){
if((i__14411_14415 < count__14410_14414)){
var msg_14416 = cljs.core._nth.call(null,chunk__14409_14413,i__14411_14415);
console.log(msg_14416);

var G__14417 = seq__14408_14412;
var G__14418 = chunk__14409_14413;
var G__14419 = count__14410_14414;
var G__14420 = (i__14411_14415 + (1));
seq__14408_14412 = G__14417;
chunk__14409_14413 = G__14418;
count__14410_14414 = G__14419;
i__14411_14415 = G__14420;
continue;
} else {
var temp__4126__auto___14421 = cljs.core.seq.call(null,seq__14408_14412);
if(temp__4126__auto___14421){
var seq__14408_14422__$1 = temp__4126__auto___14421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14408_14422__$1)){
var c__4409__auto___14423 = cljs.core.chunk_first.call(null,seq__14408_14422__$1);
var G__14424 = cljs.core.chunk_rest.call(null,seq__14408_14422__$1);
var G__14425 = c__4409__auto___14423;
var G__14426 = cljs.core.count.call(null,c__4409__auto___14423);
var G__14427 = (0);
seq__14408_14412 = G__14424;
chunk__14409_14413 = G__14425;
count__14410_14414 = G__14426;
i__14411_14415 = G__14427;
continue;
} else {
var msg_14428 = cljs.core.first.call(null,seq__14408_14422__$1);
console.log(msg_14428);

var G__14429 = cljs.core.next.call(null,seq__14408_14422__$1);
var G__14430 = null;
var G__14431 = (0);
var G__14432 = (0);
seq__14408_14412 = G__14429;
chunk__14409_14413 = G__14430;
count__14410_14414 = G__14431;
i__14411_14415 = G__14432;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__14433){
var map__14435 = p__14433;
var map__14435__$1 = ((cljs.core.seq_QMARK_.call(null,map__14435))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);
var w = map__14435__$1;
var message = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14442 = cljs.core.seq.call(null,plugins);
var chunk__14443 = null;
var count__14444 = (0);
var i__14445 = (0);
while(true){
if((i__14445 < count__14444)){
var vec__14446 = cljs.core._nth.call(null,chunk__14443,i__14445);
var k = cljs.core.nth.call(null,vec__14446,(0),null);
var plugin = cljs.core.nth.call(null,vec__14446,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14448 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14442,chunk__14443,count__14444,i__14445,pl_14448,vec__14446,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14448.call(null,msg_hist);
});})(seq__14442,chunk__14443,count__14444,i__14445,pl_14448,vec__14446,k,plugin))
);
} else {
}

var G__14449 = seq__14442;
var G__14450 = chunk__14443;
var G__14451 = count__14444;
var G__14452 = (i__14445 + (1));
seq__14442 = G__14449;
chunk__14443 = G__14450;
count__14444 = G__14451;
i__14445 = G__14452;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14442);
if(temp__4126__auto__){
var seq__14442__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14442__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__14442__$1);
var G__14453 = cljs.core.chunk_rest.call(null,seq__14442__$1);
var G__14454 = c__4409__auto__;
var G__14455 = cljs.core.count.call(null,c__4409__auto__);
var G__14456 = (0);
seq__14442 = G__14453;
chunk__14443 = G__14454;
count__14444 = G__14455;
i__14445 = G__14456;
continue;
} else {
var vec__14447 = cljs.core.first.call(null,seq__14442__$1);
var k = cljs.core.nth.call(null,vec__14447,(0),null);
var plugin = cljs.core.nth.call(null,vec__14447,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14457 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14442,chunk__14443,count__14444,i__14445,pl_14457,vec__14447,k,plugin,seq__14442__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14457.call(null,msg_hist);
});})(seq__14442,chunk__14443,count__14444,i__14445,pl_14457,vec__14447,k,plugin,seq__14442__$1,temp__4126__auto__))
);
} else {
}

var G__14458 = cljs.core.next.call(null,seq__14442__$1);
var G__14459 = null;
var G__14460 = (0);
var G__14461 = (0);
seq__14442 = G__14458;
chunk__14443 = G__14459;
count__14444 = G__14460;
i__14445 = G__14461;
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
var watch_and_reload__delegate = function (p__14462){
var map__14464 = p__14462;
var map__14464__$1 = ((cljs.core.seq_QMARK_.call(null,map__14464))?cljs.core.apply.call(null,cljs.core.hash_map,map__14464):map__14464);
var opts = map__14464__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14462 = null;
if (arguments.length > 0) {
  p__14462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__14462);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14465){
var p__14462 = cljs.core.seq(arglist__14465);
return watch_and_reload__delegate(p__14462);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map