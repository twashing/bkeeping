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
figwheel.client.error_msg_format = (function error_msg_format(p__21719){
var map__21721 = p__21719;
var map__21721__$1 = ((cljs.core.seq_QMARK_.call(null,map__21721))?cljs.core.apply.call(null,cljs.core.hash_map,map__21721):map__21721);
var class$ = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__16852__auto___21842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___21842,ch){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___21842,ch){
return (function (state_21816){
var state_val_21817 = (state_21816[(1)]);
if((state_val_21817 === (7))){
var inst_21812 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21818_21843 = state_21816__$1;
(statearr_21818_21843[(2)] = inst_21812);

(statearr_21818_21843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (1))){
var state_21816__$1 = state_21816;
var statearr_21819_21844 = state_21816__$1;
(statearr_21819_21844[(2)] = null);

(statearr_21819_21844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (4))){
var inst_21784 = (state_21816[(7)]);
var inst_21784__$1 = (state_21816[(2)]);
var state_21816__$1 = (function (){var statearr_21820 = state_21816;
(statearr_21820[(7)] = inst_21784__$1);

return statearr_21820;
})();
if(cljs.core.truth_(inst_21784__$1)){
var statearr_21821_21845 = state_21816__$1;
(statearr_21821_21845[(1)] = (5));

} else {
var statearr_21822_21846 = state_21816__$1;
(statearr_21822_21846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (13))){
var state_21816__$1 = state_21816;
var statearr_21823_21847 = state_21816__$1;
(statearr_21823_21847[(2)] = null);

(statearr_21823_21847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (6))){
var state_21816__$1 = state_21816;
var statearr_21824_21848 = state_21816__$1;
(statearr_21824_21848[(2)] = null);

(statearr_21824_21848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (3))){
var inst_21814 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21816__$1,inst_21814);
} else {
if((state_val_21817 === (12))){
var inst_21791 = (state_21816[(8)]);
var inst_21800 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21791);
var inst_21801 = cljs.core.first.call(null,inst_21800);
var inst_21802 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21801);
var inst_21803 = console.warn("Figwheel: Not loading code with warnings - ",inst_21802);
var state_21816__$1 = state_21816;
var statearr_21825_21849 = state_21816__$1;
(statearr_21825_21849[(2)] = inst_21803);

(statearr_21825_21849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (2))){
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21816__$1,(4),ch);
} else {
if((state_val_21817 === (11))){
var inst_21796 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21826_21850 = state_21816__$1;
(statearr_21826_21850[(2)] = inst_21796);

(statearr_21826_21850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (9))){
var inst_21790 = (state_21816[(9)]);
var inst_21798 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21790,opts);
var state_21816__$1 = state_21816;
if(inst_21798){
var statearr_21827_21851 = state_21816__$1;
(statearr_21827_21851[(1)] = (12));

} else {
var statearr_21828_21852 = state_21816__$1;
(statearr_21828_21852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (5))){
var inst_21784 = (state_21816[(7)]);
var inst_21790 = (state_21816[(9)]);
var inst_21786 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21787 = (new cljs.core.PersistentArrayMap(null,2,inst_21786,null));
var inst_21788 = (new cljs.core.PersistentHashSet(null,inst_21787,null));
var inst_21789 = figwheel.client.focus_msgs.call(null,inst_21788,inst_21784);
var inst_21790__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21789);
var inst_21791 = cljs.core.first.call(null,inst_21789);
var inst_21792 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21790__$1,opts);
var state_21816__$1 = (function (){var statearr_21829 = state_21816;
(statearr_21829[(9)] = inst_21790__$1);

(statearr_21829[(8)] = inst_21791);

return statearr_21829;
})();
if(cljs.core.truth_(inst_21792)){
var statearr_21830_21853 = state_21816__$1;
(statearr_21830_21853[(1)] = (8));

} else {
var statearr_21831_21854 = state_21816__$1;
(statearr_21831_21854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (14))){
var inst_21806 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21832_21855 = state_21816__$1;
(statearr_21832_21855[(2)] = inst_21806);

(statearr_21832_21855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (10))){
var inst_21808 = (state_21816[(2)]);
var state_21816__$1 = (function (){var statearr_21833 = state_21816;
(statearr_21833[(10)] = inst_21808);

return statearr_21833;
})();
var statearr_21834_21856 = state_21816__$1;
(statearr_21834_21856[(2)] = null);

(statearr_21834_21856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (8))){
var inst_21791 = (state_21816[(8)]);
var inst_21794 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21791);
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21816__$1,(11),inst_21794);
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
});})(c__16852__auto___21842,ch))
;
return ((function (switch__16796__auto__,c__16852__auto___21842,ch){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_21838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21838[(0)] = state_machine__16797__auto__);

(statearr_21838[(1)] = (1));

return statearr_21838;
});
var state_machine__16797__auto____1 = (function (state_21816){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_21816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e21839){if((e21839 instanceof Object)){
var ex__16800__auto__ = e21839;
var statearr_21840_21857 = state_21816;
(statearr_21840_21857[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21858 = state_21816;
state_21816 = G__21858;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_21816){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_21816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___21842,ch))
})();
var state__16854__auto__ = (function (){var statearr_21841 = f__16853__auto__.call(null);
(statearr_21841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___21842);

return statearr_21841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___21842,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__21862){
var vec__21863 = p__21862;
var map__21864 = cljs.core.nth.call(null,vec__21863,(0),null);
var map__21864__$1 = ((cljs.core.seq_QMARK_.call(null,map__21864))?cljs.core.apply.call(null,cljs.core.hash_map,map__21864):map__21864);
var msg = map__21864__$1;
var msg_name = cljs.core.get.call(null,map__21864__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21863,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__21865){
var map__21873 = p__21865;
var map__21873__$1 = ((cljs.core.seq_QMARK_.call(null,map__21873))?cljs.core.apply.call(null,cljs.core.hash_map,map__21873):map__21873);
var on_compile_fail = cljs.core.get.call(null,map__21873__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__21873__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__21873,map__21873__$1,on_compile_fail,on_compile_warning){
return (function (p__21874){
var vec__21875 = p__21874;
var map__21876 = cljs.core.nth.call(null,vec__21875,(0),null);
var map__21876__$1 = ((cljs.core.seq_QMARK_.call(null,map__21876))?cljs.core.apply.call(null,cljs.core.hash_map,map__21876):map__21876);
var msg = map__21876__$1;
var msg_name = cljs.core.get.call(null,map__21876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21875,(1));
var pred__21877 = cljs.core._EQ_;
var expr__21878 = msg_name;
if(cljs.core.truth_(pred__21877.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21878))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21877.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21878))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21873,map__21873__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__,msg_hist,msg_names,msg){
return (function (state_22055){
var state_val_22056 = (state_22055[(1)]);
if((state_val_22056 === (7))){
var inst_22004 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_22004){
var statearr_22057_22094 = state_22055__$1;
(statearr_22057_22094[(1)] = (11));

} else {
var statearr_22058_22095 = state_22055__$1;
(statearr_22058_22095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (20))){
var inst_22045 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22059_22096 = state_22055__$1;
(statearr_22059_22096[(2)] = inst_22045);

(statearr_22059_22096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (27))){
var inst_22036 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(30),inst_22036);
} else {
if((state_val_22056 === (1))){
var inst_21987 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22055__$1 = state_22055;
if(cljs.core.truth_(inst_21987)){
var statearr_22060_22097 = state_22055__$1;
(statearr_22060_22097[(1)] = (2));

} else {
var statearr_22061_22098 = state_22055__$1;
(statearr_22061_22098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (24))){
var inst_22034 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_22034){
var statearr_22062_22099 = state_22055__$1;
(statearr_22062_22099[(1)] = (27));

} else {
var statearr_22063_22100 = state_22055__$1;
(statearr_22063_22100[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (4))){
var inst_22053 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22055__$1,inst_22053);
} else {
if((state_val_22056 === (15))){
var inst_22014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22015 = figwheel.client.heads_up.append_message.call(null,inst_22014);
var state_22055__$1 = state_22055;
var statearr_22064_22101 = state_22055__$1;
(statearr_22064_22101[(2)] = inst_22015);

(statearr_22064_22101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (21))){
var inst_22021 = (state_22055[(2)]);
var inst_22022 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22023 = figwheel.client.heads_up.display_warning.call(null,inst_22022);
var state_22055__$1 = (function (){var statearr_22065 = state_22055;
(statearr_22065[(7)] = inst_22021);

return statearr_22065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(22),inst_22023);
} else {
if((state_val_22056 === (13))){
var inst_22049 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22066_22102 = state_22055__$1;
(statearr_22066_22102[(2)] = inst_22049);

(statearr_22066_22102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (22))){
var inst_22025 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22067_22103 = state_22055__$1;
(statearr_22067_22103[(2)] = inst_22025);

(statearr_22067_22103[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (29))){
var inst_22041 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22068_22104 = state_22055__$1;
(statearr_22068_22104[(2)] = inst_22041);

(statearr_22068_22104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (6))){
var inst_21995 = figwheel.client.heads_up.clear.call(null);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(9),inst_21995);
} else {
if((state_val_22056 === (28))){
var state_22055__$1 = state_22055;
var statearr_22069_22105 = state_22055__$1;
(statearr_22069_22105[(2)] = null);

(statearr_22069_22105[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (25))){
var inst_22043 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22070_22106 = state_22055__$1;
(statearr_22070_22106[(2)] = inst_22043);

(statearr_22070_22106[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (17))){
var inst_22047 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22071_22107 = state_22055__$1;
(statearr_22071_22107[(2)] = inst_22047);

(statearr_22071_22107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (3))){
var inst_21993 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_21993){
var statearr_22072_22108 = state_22055__$1;
(statearr_22072_22108[(1)] = (6));

} else {
var statearr_22073_22109 = state_22055__$1;
(statearr_22073_22109[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (12))){
var inst_22012 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_22012){
var statearr_22074_22110 = state_22055__$1;
(statearr_22074_22110[(1)] = (15));

} else {
var statearr_22075_22111 = state_22055__$1;
(statearr_22075_22111[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (2))){
var inst_21989 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(5),inst_21989);
} else {
if((state_val_22056 === (23))){
var inst_22029 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22030 = figwheel.client.heads_up.display_warning.call(null,inst_22029);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(26),inst_22030);
} else {
if((state_val_22056 === (19))){
var inst_22027 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_22027){
var statearr_22076_22112 = state_22055__$1;
(statearr_22076_22112[(1)] = (23));

} else {
var statearr_22077_22113 = state_22055__$1;
(statearr_22077_22113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (11))){
var inst_22006 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22007 = figwheel.client.format_messages.call(null,inst_22006);
var inst_22008 = figwheel.client.heads_up.display_error.call(null,inst_22007);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(14),inst_22008);
} else {
if((state_val_22056 === (9))){
var inst_21997 = (state_22055[(2)]);
var inst_21998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21999 = figwheel.client.format_messages.call(null,inst_21998);
var inst_22000 = figwheel.client.heads_up.display_error.call(null,inst_21999);
var state_22055__$1 = (function (){var statearr_22078 = state_22055;
(statearr_22078[(8)] = inst_21997);

return statearr_22078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(10),inst_22000);
} else {
if((state_val_22056 === (5))){
var inst_21991 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22079_22114 = state_22055__$1;
(statearr_22079_22114[(2)] = inst_21991);

(statearr_22079_22114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (14))){
var inst_22010 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22080_22115 = state_22055__$1;
(statearr_22080_22115[(2)] = inst_22010);

(statearr_22080_22115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (26))){
var inst_22032 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22081_22116 = state_22055__$1;
(statearr_22081_22116[(2)] = inst_22032);

(statearr_22081_22116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (16))){
var inst_22017 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22055__$1 = state_22055;
if(inst_22017){
var statearr_22082_22117 = state_22055__$1;
(statearr_22082_22117[(1)] = (18));

} else {
var statearr_22083_22118 = state_22055__$1;
(statearr_22083_22118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (30))){
var inst_22038 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22084_22119 = state_22055__$1;
(statearr_22084_22119[(2)] = inst_22038);

(statearr_22084_22119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (10))){
var inst_22002 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22085_22120 = state_22055__$1;
(statearr_22085_22120[(2)] = inst_22002);

(statearr_22085_22120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (18))){
var inst_22019 = figwheel.client.heads_up.clear.call(null);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(21),inst_22019);
} else {
if((state_val_22056 === (8))){
var inst_22051 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22086_22121 = state_22055__$1;
(statearr_22086_22121[(2)] = inst_22051);

(statearr_22086_22121[(1)] = (4));


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
});})(c__16852__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16796__auto__,c__16852__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22090 = [null,null,null,null,null,null,null,null,null];
(statearr_22090[(0)] = state_machine__16797__auto__);

(statearr_22090[(1)] = (1));

return statearr_22090;
});
var state_machine__16797__auto____1 = (function (state_22055){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22091){if((e22091 instanceof Object)){
var ex__16800__auto__ = e22091;
var statearr_22092_22122 = state_22055;
(statearr_22092_22122[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22123 = state_22055;
state_22055 = G__22123;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22055){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__,msg_hist,msg_names,msg))
})();
var state__16854__auto__ = (function (){var statearr_22093 = f__16853__auto__.call(null);
(statearr_22093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__,msg_hist,msg_names,msg))
);

return c__16852__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16852__auto___22186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___22186,ch){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___22186,ch){
return (function (state_22169){
var state_val_22170 = (state_22169[(1)]);
if((state_val_22170 === (8))){
var inst_22161 = (state_22169[(2)]);
var state_22169__$1 = (function (){var statearr_22171 = state_22169;
(statearr_22171[(7)] = inst_22161);

return statearr_22171;
})();
var statearr_22172_22187 = state_22169__$1;
(statearr_22172_22187[(2)] = null);

(statearr_22172_22187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (7))){
var inst_22165 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22173_22188 = state_22169__$1;
(statearr_22173_22188[(2)] = inst_22165);

(statearr_22173_22188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (6))){
var state_22169__$1 = state_22169;
var statearr_22174_22189 = state_22169__$1;
(statearr_22174_22189[(2)] = null);

(statearr_22174_22189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (5))){
var inst_22157 = (state_22169[(8)]);
var inst_22159 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22157);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(8),inst_22159);
} else {
if((state_val_22170 === (4))){
var inst_22157 = (state_22169[(8)]);
var inst_22157__$1 = (state_22169[(2)]);
var state_22169__$1 = (function (){var statearr_22175 = state_22169;
(statearr_22175[(8)] = inst_22157__$1);

return statearr_22175;
})();
if(cljs.core.truth_(inst_22157__$1)){
var statearr_22176_22190 = state_22169__$1;
(statearr_22176_22190[(1)] = (5));

} else {
var statearr_22177_22191 = state_22169__$1;
(statearr_22177_22191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (3))){
var inst_22167 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22169__$1,inst_22167);
} else {
if((state_val_22170 === (2))){
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(4),ch);
} else {
if((state_val_22170 === (1))){
var state_22169__$1 = state_22169;
var statearr_22178_22192 = state_22169__$1;
(statearr_22178_22192[(2)] = null);

(statearr_22178_22192[(1)] = (2));


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
});})(c__16852__auto___22186,ch))
;
return ((function (switch__16796__auto__,c__16852__auto___22186,ch){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22182 = [null,null,null,null,null,null,null,null,null];
(statearr_22182[(0)] = state_machine__16797__auto__);

(statearr_22182[(1)] = (1));

return statearr_22182;
});
var state_machine__16797__auto____1 = (function (state_22169){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22183){if((e22183 instanceof Object)){
var ex__16800__auto__ = e22183;
var statearr_22184_22193 = state_22169;
(statearr_22184_22193[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22194 = state_22169;
state_22169 = G__22194;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22169){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___22186,ch))
})();
var state__16854__auto__ = (function (){var statearr_22185 = f__16853__auto__.call(null);
(statearr_22185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___22186);

return statearr_22185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___22186,ch))
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
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_22215){
var state_val_22216 = (state_22215[(1)]);
if((state_val_22216 === (2))){
var inst_22212 = (state_22215[(2)]);
var inst_22213 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22215__$1 = (function (){var statearr_22217 = state_22215;
(statearr_22217[(7)] = inst_22212);

return statearr_22217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22215__$1,inst_22213);
} else {
if((state_val_22216 === (1))){
var inst_22210 = cljs.core.async.timeout.call(null,(3000));
var state_22215__$1 = state_22215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22215__$1,(2),inst_22210);
} else {
return null;
}
}
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22221 = [null,null,null,null,null,null,null,null];
(statearr_22221[(0)] = state_machine__16797__auto__);

(statearr_22221[(1)] = (1));

return statearr_22221;
});
var state_machine__16797__auto____1 = (function (state_22215){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22222){if((e22222 instanceof Object)){
var ex__16800__auto__ = e22222;
var statearr_22223_22225 = state_22215;
(statearr_22223_22225[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22226 = state_22215;
state_22215 = G__22226;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22215){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_22224 = f__16853__auto__.call(null);
(statearr_22224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj22230 = {"detail":url};
return obj22230;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__22231){
var map__22237 = p__22231;
var map__22237__$1 = ((cljs.core.seq_QMARK_.call(null,map__22237))?cljs.core.apply.call(null,cljs.core.hash_map,map__22237):map__22237);
var ed = map__22237__$1;
var exception_data = cljs.core.get.call(null,map__22237__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__22237__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__22238_22242 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22239_22243 = null;
var count__22240_22244 = (0);
var i__22241_22245 = (0);
while(true){
if((i__22241_22245 < count__22240_22244)){
var msg_22246 = cljs.core._nth.call(null,chunk__22239_22243,i__22241_22245);
console.log(msg_22246);

var G__22247 = seq__22238_22242;
var G__22248 = chunk__22239_22243;
var G__22249 = count__22240_22244;
var G__22250 = (i__22241_22245 + (1));
seq__22238_22242 = G__22247;
chunk__22239_22243 = G__22248;
count__22240_22244 = G__22249;
i__22241_22245 = G__22250;
continue;
} else {
var temp__4126__auto___22251 = cljs.core.seq.call(null,seq__22238_22242);
if(temp__4126__auto___22251){
var seq__22238_22252__$1 = temp__4126__auto___22251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22238_22252__$1)){
var c__13332__auto___22253 = cljs.core.chunk_first.call(null,seq__22238_22252__$1);
var G__22254 = cljs.core.chunk_rest.call(null,seq__22238_22252__$1);
var G__22255 = c__13332__auto___22253;
var G__22256 = cljs.core.count.call(null,c__13332__auto___22253);
var G__22257 = (0);
seq__22238_22242 = G__22254;
chunk__22239_22243 = G__22255;
count__22240_22244 = G__22256;
i__22241_22245 = G__22257;
continue;
} else {
var msg_22258 = cljs.core.first.call(null,seq__22238_22252__$1);
console.log(msg_22258);

var G__22259 = cljs.core.next.call(null,seq__22238_22252__$1);
var G__22260 = null;
var G__22261 = (0);
var G__22262 = (0);
seq__22238_22242 = G__22259;
chunk__22239_22243 = G__22260;
count__22240_22244 = G__22261;
i__22241_22245 = G__22262;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__22263){
var map__22265 = p__22263;
var map__22265__$1 = ((cljs.core.seq_QMARK_.call(null,map__22265))?cljs.core.apply.call(null,cljs.core.hash_map,map__22265):map__22265);
var w = map__22265__$1;
var message = cljs.core.get.call(null,map__22265__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22272 = cljs.core.seq.call(null,plugins);
var chunk__22273 = null;
var count__22274 = (0);
var i__22275 = (0);
while(true){
if((i__22275 < count__22274)){
var vec__22276 = cljs.core._nth.call(null,chunk__22273,i__22275);
var k = cljs.core.nth.call(null,vec__22276,(0),null);
var plugin = cljs.core.nth.call(null,vec__22276,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22278 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22272,chunk__22273,count__22274,i__22275,pl_22278,vec__22276,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22278.call(null,msg_hist);
});})(seq__22272,chunk__22273,count__22274,i__22275,pl_22278,vec__22276,k,plugin))
);
} else {
}

var G__22279 = seq__22272;
var G__22280 = chunk__22273;
var G__22281 = count__22274;
var G__22282 = (i__22275 + (1));
seq__22272 = G__22279;
chunk__22273 = G__22280;
count__22274 = G__22281;
i__22275 = G__22282;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22272);
if(temp__4126__auto__){
var seq__22272__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22272__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__22272__$1);
var G__22283 = cljs.core.chunk_rest.call(null,seq__22272__$1);
var G__22284 = c__13332__auto__;
var G__22285 = cljs.core.count.call(null,c__13332__auto__);
var G__22286 = (0);
seq__22272 = G__22283;
chunk__22273 = G__22284;
count__22274 = G__22285;
i__22275 = G__22286;
continue;
} else {
var vec__22277 = cljs.core.first.call(null,seq__22272__$1);
var k = cljs.core.nth.call(null,vec__22277,(0),null);
var plugin = cljs.core.nth.call(null,vec__22277,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22287 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22272,chunk__22273,count__22274,i__22275,pl_22287,vec__22277,k,plugin,seq__22272__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22287.call(null,msg_hist);
});})(seq__22272,chunk__22273,count__22274,i__22275,pl_22287,vec__22277,k,plugin,seq__22272__$1,temp__4126__auto__))
);
} else {
}

var G__22288 = cljs.core.next.call(null,seq__22272__$1);
var G__22289 = null;
var G__22290 = (0);
var G__22291 = (0);
seq__22272 = G__22288;
chunk__22273 = G__22289;
count__22274 = G__22290;
i__22275 = G__22291;
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
var watch_and_reload__delegate = function (p__22292){
var map__22294 = p__22292;
var map__22294__$1 = ((cljs.core.seq_QMARK_.call(null,map__22294))?cljs.core.apply.call(null,cljs.core.hash_map,map__22294):map__22294);
var opts = map__22294__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__22292 = null;
if (arguments.length > 0) {
  p__22292 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__22292);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__22295){
var p__22292 = cljs.core.seq(arglist__22295);
return watch_and_reload__delegate(p__22292);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map