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
figwheel.client.error_msg_format = (function error_msg_format(p__13880){
var map__13882 = p__13880;
var map__13882__$1 = ((cljs.core.seq_QMARK_.call(null,map__13882))?cljs.core.apply.call(null,cljs.core.hash_map,map__13882):map__13882);
var class$ = cljs.core.get.call(null,map__13882__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__13882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7340__auto___14003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto___14003,ch){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto___14003,ch){
return (function (state_13977){
var state_val_13978 = (state_13977[(1)]);
if((state_val_13978 === (7))){
var inst_13973 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13979_14004 = state_13977__$1;
(statearr_13979_14004[(2)] = inst_13973);

(statearr_13979_14004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (1))){
var state_13977__$1 = state_13977;
var statearr_13980_14005 = state_13977__$1;
(statearr_13980_14005[(2)] = null);

(statearr_13980_14005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (4))){
var inst_13945 = (state_13977[(7)]);
var inst_13945__$1 = (state_13977[(2)]);
var state_13977__$1 = (function (){var statearr_13981 = state_13977;
(statearr_13981[(7)] = inst_13945__$1);

return statearr_13981;
})();
if(cljs.core.truth_(inst_13945__$1)){
var statearr_13982_14006 = state_13977__$1;
(statearr_13982_14006[(1)] = (5));

} else {
var statearr_13983_14007 = state_13977__$1;
(statearr_13983_14007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (13))){
var state_13977__$1 = state_13977;
var statearr_13984_14008 = state_13977__$1;
(statearr_13984_14008[(2)] = null);

(statearr_13984_14008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (6))){
var state_13977__$1 = state_13977;
var statearr_13985_14009 = state_13977__$1;
(statearr_13985_14009[(2)] = null);

(statearr_13985_14009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (3))){
var inst_13975 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13977__$1,inst_13975);
} else {
if((state_val_13978 === (12))){
var inst_13952 = (state_13977[(8)]);
var inst_13961 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13952);
var inst_13962 = cljs.core.first.call(null,inst_13961);
var inst_13963 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13962);
var inst_13964 = console.warn("Figwheel: Not loading code with warnings - ",inst_13963);
var state_13977__$1 = state_13977;
var statearr_13986_14010 = state_13977__$1;
(statearr_13986_14010[(2)] = inst_13964);

(statearr_13986_14010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (2))){
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13977__$1,(4),ch);
} else {
if((state_val_13978 === (11))){
var inst_13957 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13987_14011 = state_13977__$1;
(statearr_13987_14011[(2)] = inst_13957);

(statearr_13987_14011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (9))){
var inst_13951 = (state_13977[(9)]);
var inst_13959 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13951,opts);
var state_13977__$1 = state_13977;
if(inst_13959){
var statearr_13988_14012 = state_13977__$1;
(statearr_13988_14012[(1)] = (12));

} else {
var statearr_13989_14013 = state_13977__$1;
(statearr_13989_14013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (5))){
var inst_13945 = (state_13977[(7)]);
var inst_13951 = (state_13977[(9)]);
var inst_13947 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13948 = (new cljs.core.PersistentArrayMap(null,2,inst_13947,null));
var inst_13949 = (new cljs.core.PersistentHashSet(null,inst_13948,null));
var inst_13950 = figwheel.client.focus_msgs.call(null,inst_13949,inst_13945);
var inst_13951__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13950);
var inst_13952 = cljs.core.first.call(null,inst_13950);
var inst_13953 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13951__$1,opts);
var state_13977__$1 = (function (){var statearr_13990 = state_13977;
(statearr_13990[(8)] = inst_13952);

(statearr_13990[(9)] = inst_13951__$1);

return statearr_13990;
})();
if(cljs.core.truth_(inst_13953)){
var statearr_13991_14014 = state_13977__$1;
(statearr_13991_14014[(1)] = (8));

} else {
var statearr_13992_14015 = state_13977__$1;
(statearr_13992_14015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (14))){
var inst_13967 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13993_14016 = state_13977__$1;
(statearr_13993_14016[(2)] = inst_13967);

(statearr_13993_14016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (10))){
var inst_13969 = (state_13977[(2)]);
var state_13977__$1 = (function (){var statearr_13994 = state_13977;
(statearr_13994[(10)] = inst_13969);

return statearr_13994;
})();
var statearr_13995_14017 = state_13977__$1;
(statearr_13995_14017[(2)] = null);

(statearr_13995_14017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (8))){
var inst_13952 = (state_13977[(8)]);
var inst_13955 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13952);
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13977__$1,(11),inst_13955);
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
});})(c__7340__auto___14003,ch))
;
return ((function (switch__7284__auto__,c__7340__auto___14003,ch){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_13999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13999[(0)] = state_machine__7285__auto__);

(statearr_13999[(1)] = (1));

return statearr_13999;
});
var state_machine__7285__auto____1 = (function (state_13977){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_13977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14000){if((e14000 instanceof Object)){
var ex__7288__auto__ = e14000;
var statearr_14001_14018 = state_13977;
(statearr_14001_14018[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14019 = state_13977;
state_13977 = G__14019;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_13977){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_13977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto___14003,ch))
})();
var state__7342__auto__ = (function (){var statearr_14002 = f__7341__auto__.call(null);
(statearr_14002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto___14003);

return statearr_14002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto___14003,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__14023){
var vec__14024 = p__14023;
var map__14025 = cljs.core.nth.call(null,vec__14024,(0),null);
var map__14025__$1 = ((cljs.core.seq_QMARK_.call(null,map__14025))?cljs.core.apply.call(null,cljs.core.hash_map,map__14025):map__14025);
var msg = map__14025__$1;
var msg_name = cljs.core.get.call(null,map__14025__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14024,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__14026){
var map__14034 = p__14026;
var map__14034__$1 = ((cljs.core.seq_QMARK_.call(null,map__14034))?cljs.core.apply.call(null,cljs.core.hash_map,map__14034):map__14034);
var on_compile_fail = cljs.core.get.call(null,map__14034__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__14034__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__14034,map__14034__$1,on_compile_fail,on_compile_warning){
return (function (p__14035){
var vec__14036 = p__14035;
var map__14037 = cljs.core.nth.call(null,vec__14036,(0),null);
var map__14037__$1 = ((cljs.core.seq_QMARK_.call(null,map__14037))?cljs.core.apply.call(null,cljs.core.hash_map,map__14037):map__14037);
var msg = map__14037__$1;
var msg_name = cljs.core.get.call(null,map__14037__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14036,(1));
var pred__14038 = cljs.core._EQ_;
var expr__14039 = msg_name;
if(cljs.core.truth_(pred__14038.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14039))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14038.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14039))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14034,map__14034__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto__,msg_hist,msg_names,msg){
return (function (state_14216){
var state_val_14217 = (state_14216[(1)]);
if((state_val_14217 === (7))){
var inst_14165 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14165){
var statearr_14218_14255 = state_14216__$1;
(statearr_14218_14255[(1)] = (11));

} else {
var statearr_14219_14256 = state_14216__$1;
(statearr_14219_14256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (20))){
var inst_14206 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14220_14257 = state_14216__$1;
(statearr_14220_14257[(2)] = inst_14206);

(statearr_14220_14257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (27))){
var inst_14197 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(30),inst_14197);
} else {
if((state_val_14217 === (1))){
var inst_14148 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14216__$1 = state_14216;
if(cljs.core.truth_(inst_14148)){
var statearr_14221_14258 = state_14216__$1;
(statearr_14221_14258[(1)] = (2));

} else {
var statearr_14222_14259 = state_14216__$1;
(statearr_14222_14259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (24))){
var inst_14195 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14195){
var statearr_14223_14260 = state_14216__$1;
(statearr_14223_14260[(1)] = (27));

} else {
var statearr_14224_14261 = state_14216__$1;
(statearr_14224_14261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (4))){
var inst_14214 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14216__$1,inst_14214);
} else {
if((state_val_14217 === (15))){
var inst_14175 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14176 = figwheel.client.heads_up.append_message.call(null,inst_14175);
var state_14216__$1 = state_14216;
var statearr_14225_14262 = state_14216__$1;
(statearr_14225_14262[(2)] = inst_14176);

(statearr_14225_14262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (21))){
var inst_14182 = (state_14216[(2)]);
var inst_14183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14184 = figwheel.client.heads_up.display_warning.call(null,inst_14183);
var state_14216__$1 = (function (){var statearr_14226 = state_14216;
(statearr_14226[(7)] = inst_14182);

return statearr_14226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(22),inst_14184);
} else {
if((state_val_14217 === (13))){
var inst_14210 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14227_14263 = state_14216__$1;
(statearr_14227_14263[(2)] = inst_14210);

(statearr_14227_14263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (22))){
var inst_14186 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14228_14264 = state_14216__$1;
(statearr_14228_14264[(2)] = inst_14186);

(statearr_14228_14264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (29))){
var inst_14202 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14229_14265 = state_14216__$1;
(statearr_14229_14265[(2)] = inst_14202);

(statearr_14229_14265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (6))){
var inst_14156 = figwheel.client.heads_up.clear.call(null);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(9),inst_14156);
} else {
if((state_val_14217 === (28))){
var state_14216__$1 = state_14216;
var statearr_14230_14266 = state_14216__$1;
(statearr_14230_14266[(2)] = null);

(statearr_14230_14266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (25))){
var inst_14204 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14231_14267 = state_14216__$1;
(statearr_14231_14267[(2)] = inst_14204);

(statearr_14231_14267[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (17))){
var inst_14208 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14232_14268 = state_14216__$1;
(statearr_14232_14268[(2)] = inst_14208);

(statearr_14232_14268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (3))){
var inst_14154 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14154){
var statearr_14233_14269 = state_14216__$1;
(statearr_14233_14269[(1)] = (6));

} else {
var statearr_14234_14270 = state_14216__$1;
(statearr_14234_14270[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (12))){
var inst_14173 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14173){
var statearr_14235_14271 = state_14216__$1;
(statearr_14235_14271[(1)] = (15));

} else {
var statearr_14236_14272 = state_14216__$1;
(statearr_14236_14272[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (2))){
var inst_14150 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(5),inst_14150);
} else {
if((state_val_14217 === (23))){
var inst_14190 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14191 = figwheel.client.heads_up.display_warning.call(null,inst_14190);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(26),inst_14191);
} else {
if((state_val_14217 === (19))){
var inst_14188 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14188){
var statearr_14237_14273 = state_14216__$1;
(statearr_14237_14273[(1)] = (23));

} else {
var statearr_14238_14274 = state_14216__$1;
(statearr_14238_14274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (11))){
var inst_14167 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14168 = figwheel.client.format_messages.call(null,inst_14167);
var inst_14169 = figwheel.client.heads_up.display_error.call(null,inst_14168);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(14),inst_14169);
} else {
if((state_val_14217 === (9))){
var inst_14158 = (state_14216[(2)]);
var inst_14159 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14160 = figwheel.client.format_messages.call(null,inst_14159);
var inst_14161 = figwheel.client.heads_up.display_error.call(null,inst_14160);
var state_14216__$1 = (function (){var statearr_14239 = state_14216;
(statearr_14239[(8)] = inst_14158);

return statearr_14239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(10),inst_14161);
} else {
if((state_val_14217 === (5))){
var inst_14152 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14240_14275 = state_14216__$1;
(statearr_14240_14275[(2)] = inst_14152);

(statearr_14240_14275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (14))){
var inst_14171 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14241_14276 = state_14216__$1;
(statearr_14241_14276[(2)] = inst_14171);

(statearr_14241_14276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (26))){
var inst_14193 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14242_14277 = state_14216__$1;
(statearr_14242_14277[(2)] = inst_14193);

(statearr_14242_14277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (16))){
var inst_14178 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14216__$1 = state_14216;
if(inst_14178){
var statearr_14243_14278 = state_14216__$1;
(statearr_14243_14278[(1)] = (18));

} else {
var statearr_14244_14279 = state_14216__$1;
(statearr_14244_14279[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (30))){
var inst_14199 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14245_14280 = state_14216__$1;
(statearr_14245_14280[(2)] = inst_14199);

(statearr_14245_14280[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (10))){
var inst_14163 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14246_14281 = state_14216__$1;
(statearr_14246_14281[(2)] = inst_14163);

(statearr_14246_14281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (18))){
var inst_14180 = figwheel.client.heads_up.clear.call(null);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(21),inst_14180);
} else {
if((state_val_14217 === (8))){
var inst_14212 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14247_14282 = state_14216__$1;
(statearr_14247_14282[(2)] = inst_14212);

(statearr_14247_14282[(1)] = (4));


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
});})(c__7340__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7284__auto__,c__7340__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14251 = [null,null,null,null,null,null,null,null,null];
(statearr_14251[(0)] = state_machine__7285__auto__);

(statearr_14251[(1)] = (1));

return statearr_14251;
});
var state_machine__7285__auto____1 = (function (state_14216){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14252){if((e14252 instanceof Object)){
var ex__7288__auto__ = e14252;
var statearr_14253_14283 = state_14216;
(statearr_14253_14283[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14284 = state_14216;
state_14216 = G__14284;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14216){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto__,msg_hist,msg_names,msg))
})();
var state__7342__auto__ = (function (){var statearr_14254 = f__7341__auto__.call(null);
(statearr_14254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto__);

return statearr_14254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto__,msg_hist,msg_names,msg))
);

return c__7340__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7340__auto___14347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto___14347,ch){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto___14347,ch){
return (function (state_14330){
var state_val_14331 = (state_14330[(1)]);
if((state_val_14331 === (8))){
var inst_14322 = (state_14330[(2)]);
var state_14330__$1 = (function (){var statearr_14332 = state_14330;
(statearr_14332[(7)] = inst_14322);

return statearr_14332;
})();
var statearr_14333_14348 = state_14330__$1;
(statearr_14333_14348[(2)] = null);

(statearr_14333_14348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (7))){
var inst_14326 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
var statearr_14334_14349 = state_14330__$1;
(statearr_14334_14349[(2)] = inst_14326);

(statearr_14334_14349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (6))){
var state_14330__$1 = state_14330;
var statearr_14335_14350 = state_14330__$1;
(statearr_14335_14350[(2)] = null);

(statearr_14335_14350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (5))){
var inst_14318 = (state_14330[(8)]);
var inst_14320 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14318);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14330__$1,(8),inst_14320);
} else {
if((state_val_14331 === (4))){
var inst_14318 = (state_14330[(8)]);
var inst_14318__$1 = (state_14330[(2)]);
var state_14330__$1 = (function (){var statearr_14336 = state_14330;
(statearr_14336[(8)] = inst_14318__$1);

return statearr_14336;
})();
if(cljs.core.truth_(inst_14318__$1)){
var statearr_14337_14351 = state_14330__$1;
(statearr_14337_14351[(1)] = (5));

} else {
var statearr_14338_14352 = state_14330__$1;
(statearr_14338_14352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (3))){
var inst_14328 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14330__$1,inst_14328);
} else {
if((state_val_14331 === (2))){
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14330__$1,(4),ch);
} else {
if((state_val_14331 === (1))){
var state_14330__$1 = state_14330;
var statearr_14339_14353 = state_14330__$1;
(statearr_14339_14353[(2)] = null);

(statearr_14339_14353[(1)] = (2));


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
});})(c__7340__auto___14347,ch))
;
return ((function (switch__7284__auto__,c__7340__auto___14347,ch){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14343 = [null,null,null,null,null,null,null,null,null];
(statearr_14343[(0)] = state_machine__7285__auto__);

(statearr_14343[(1)] = (1));

return statearr_14343;
});
var state_machine__7285__auto____1 = (function (state_14330){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14344){if((e14344 instanceof Object)){
var ex__7288__auto__ = e14344;
var statearr_14345_14354 = state_14330;
(statearr_14345_14354[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14355 = state_14330;
state_14330 = G__14355;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14330){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto___14347,ch))
})();
var state__7342__auto__ = (function (){var statearr_14346 = f__7341__auto__.call(null);
(statearr_14346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto___14347);

return statearr_14346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto___14347,ch))
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
var c__7340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto__){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto__){
return (function (state_14376){
var state_val_14377 = (state_14376[(1)]);
if((state_val_14377 === (2))){
var inst_14373 = (state_14376[(2)]);
var inst_14374 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14376__$1 = (function (){var statearr_14378 = state_14376;
(statearr_14378[(7)] = inst_14373);

return statearr_14378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14376__$1,inst_14374);
} else {
if((state_val_14377 === (1))){
var inst_14371 = cljs.core.async.timeout.call(null,(3000));
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14376__$1,(2),inst_14371);
} else {
return null;
}
}
});})(c__7340__auto__))
;
return ((function (switch__7284__auto__,c__7340__auto__){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14382 = [null,null,null,null,null,null,null,null];
(statearr_14382[(0)] = state_machine__7285__auto__);

(statearr_14382[(1)] = (1));

return statearr_14382;
});
var state_machine__7285__auto____1 = (function (state_14376){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14383){if((e14383 instanceof Object)){
var ex__7288__auto__ = e14383;
var statearr_14384_14386 = state_14376;
(statearr_14384_14386[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14387 = state_14376;
state_14376 = G__14387;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto__))
})();
var state__7342__auto__ = (function (){var statearr_14385 = f__7341__auto__.call(null);
(statearr_14385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto__);

return statearr_14385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto__))
);

return c__7340__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14391 = {"detail":url};
return obj14391;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14392){
var map__14398 = p__14392;
var map__14398__$1 = ((cljs.core.seq_QMARK_.call(null,map__14398))?cljs.core.apply.call(null,cljs.core.hash_map,map__14398):map__14398);
var ed = map__14398__$1;
var exception_data = cljs.core.get.call(null,map__14398__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__14398__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__14399_14403 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14400_14404 = null;
var count__14401_14405 = (0);
var i__14402_14406 = (0);
while(true){
if((i__14402_14406 < count__14401_14405)){
var msg_14407 = cljs.core._nth.call(null,chunk__14400_14404,i__14402_14406);
console.log(msg_14407);

var G__14408 = seq__14399_14403;
var G__14409 = chunk__14400_14404;
var G__14410 = count__14401_14405;
var G__14411 = (i__14402_14406 + (1));
seq__14399_14403 = G__14408;
chunk__14400_14404 = G__14409;
count__14401_14405 = G__14410;
i__14402_14406 = G__14411;
continue;
} else {
var temp__4126__auto___14412 = cljs.core.seq.call(null,seq__14399_14403);
if(temp__4126__auto___14412){
var seq__14399_14413__$1 = temp__4126__auto___14412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14399_14413__$1)){
var c__4409__auto___14414 = cljs.core.chunk_first.call(null,seq__14399_14413__$1);
var G__14415 = cljs.core.chunk_rest.call(null,seq__14399_14413__$1);
var G__14416 = c__4409__auto___14414;
var G__14417 = cljs.core.count.call(null,c__4409__auto___14414);
var G__14418 = (0);
seq__14399_14403 = G__14415;
chunk__14400_14404 = G__14416;
count__14401_14405 = G__14417;
i__14402_14406 = G__14418;
continue;
} else {
var msg_14419 = cljs.core.first.call(null,seq__14399_14413__$1);
console.log(msg_14419);

var G__14420 = cljs.core.next.call(null,seq__14399_14413__$1);
var G__14421 = null;
var G__14422 = (0);
var G__14423 = (0);
seq__14399_14403 = G__14420;
chunk__14400_14404 = G__14421;
count__14401_14405 = G__14422;
i__14402_14406 = G__14423;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__14424){
var map__14426 = p__14424;
var map__14426__$1 = ((cljs.core.seq_QMARK_.call(null,map__14426))?cljs.core.apply.call(null,cljs.core.hash_map,map__14426):map__14426);
var w = map__14426__$1;
var message = cljs.core.get.call(null,map__14426__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__14433 = cljs.core.seq.call(null,plugins);
var chunk__14434 = null;
var count__14435 = (0);
var i__14436 = (0);
while(true){
if((i__14436 < count__14435)){
var vec__14437 = cljs.core._nth.call(null,chunk__14434,i__14436);
var k = cljs.core.nth.call(null,vec__14437,(0),null);
var plugin = cljs.core.nth.call(null,vec__14437,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14433,chunk__14434,count__14435,i__14436,pl_14439,vec__14437,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14439.call(null,msg_hist);
});})(seq__14433,chunk__14434,count__14435,i__14436,pl_14439,vec__14437,k,plugin))
);
} else {
}

var G__14440 = seq__14433;
var G__14441 = chunk__14434;
var G__14442 = count__14435;
var G__14443 = (i__14436 + (1));
seq__14433 = G__14440;
chunk__14434 = G__14441;
count__14435 = G__14442;
i__14436 = G__14443;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14433);
if(temp__4126__auto__){
var seq__14433__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14433__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__14433__$1);
var G__14444 = cljs.core.chunk_rest.call(null,seq__14433__$1);
var G__14445 = c__4409__auto__;
var G__14446 = cljs.core.count.call(null,c__4409__auto__);
var G__14447 = (0);
seq__14433 = G__14444;
chunk__14434 = G__14445;
count__14435 = G__14446;
i__14436 = G__14447;
continue;
} else {
var vec__14438 = cljs.core.first.call(null,seq__14433__$1);
var k = cljs.core.nth.call(null,vec__14438,(0),null);
var plugin = cljs.core.nth.call(null,vec__14438,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14448 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14433,chunk__14434,count__14435,i__14436,pl_14448,vec__14438,k,plugin,seq__14433__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14448.call(null,msg_hist);
});})(seq__14433,chunk__14434,count__14435,i__14436,pl_14448,vec__14438,k,plugin,seq__14433__$1,temp__4126__auto__))
);
} else {
}

var G__14449 = cljs.core.next.call(null,seq__14433__$1);
var G__14450 = null;
var G__14451 = (0);
var G__14452 = (0);
seq__14433 = G__14449;
chunk__14434 = G__14450;
count__14435 = G__14451;
i__14436 = G__14452;
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
var watch_and_reload__delegate = function (p__14453){
var map__14455 = p__14453;
var map__14455__$1 = ((cljs.core.seq_QMARK_.call(null,map__14455))?cljs.core.apply.call(null,cljs.core.hash_map,map__14455):map__14455);
var opts = map__14455__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14453 = null;
if (arguments.length > 0) {
  p__14453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__14453);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14456){
var p__14453 = cljs.core.seq(arglist__14456);
return watch_and_reload__delegate(p__14453);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map