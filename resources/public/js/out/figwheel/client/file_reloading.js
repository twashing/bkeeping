// Compiled by ClojureScript 0.0-2505
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__14710){
var map__14712 = p__14710;
var map__14712__$1 = ((cljs.core.seq_QMARK_.call(null,map__14712))?cljs.core.apply.call(null,cljs.core.hash_map,map__14712):map__14712);
var websocket_url = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__14713,callback){
var map__14715 = p__14713;
var map__14715__$1 = ((cljs.core.seq_QMARK_.call(null,map__14715))?cljs.core.apply.call(null,cljs.core.hash_map,map__14715):map__14715);
var msg = map__14715__$1;
var meta_data = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__3610__auto__ = (function (){var or__3622__auto__ = dependency_file;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (function (){var and__3610__auto__ = meta_data;
if(cljs.core.truth_(and__3610__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__3622__auto__ = meta_data;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__3610__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__14715,map__14715__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__14715,map__14715__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__14716,p__14717){
var map__14720 = p__14716;
var map__14720__$1 = ((cljs.core.seq_QMARK_.call(null,map__14720))?cljs.core.apply.call(null,cljs.core.hash_map,map__14720):map__14720);
var opts = map__14720__$1;
var url_rewriter = cljs.core.get.call(null,map__14720__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14721 = p__14717;
var map__14721__$1 = ((cljs.core.seq_QMARK_.call(null,map__14721))?cljs.core.apply.call(null,cljs.core.hash_map,map__14721):map__14721);
var d = map__14721__$1;
var file = cljs.core.get.call(null,map__14721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__14723,p__14724){
var map__14778 = p__14723;
var map__14778__$1 = ((cljs.core.seq_QMARK_.call(null,map__14778))?cljs.core.apply.call(null,cljs.core.hash_map,map__14778):map__14778);
var opts = map__14778__$1;
var on_jsload = cljs.core.get.call(null,map__14778__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__14778__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__14779 = p__14724;
var map__14779__$1 = ((cljs.core.seq_QMARK_.call(null,map__14779))?cljs.core.apply.call(null,cljs.core.hash_map,map__14779):map__14779);
var msg = map__14779__$1;
var files = cljs.core.get.call(null,map__14779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files){
return (function (state_14809){
var state_val_14810 = (state_14809[(1)]);
if((state_val_14810 === (8))){
var inst_14807 = (state_14809[(2)]);
var state_14809__$1 = state_14809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14809__$1,inst_14807);
} else {
if((state_val_14810 === (7))){
var state_14809__$1 = state_14809;
var statearr_14811_14831 = state_14809__$1;
(statearr_14811_14831[(2)] = null);

(statearr_14811_14831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (6))){
var inst_14787 = (state_14809[(7)]);
var inst_14801 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_14802 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14787);
var inst_14803 = cljs.core.pr_str.call(null,inst_14802);
var inst_14804 = console.log("not required:",inst_14803);
var state_14809__$1 = (function (){var statearr_14812 = state_14809;
(statearr_14812[(8)] = inst_14801);

return statearr_14812;
})();
var statearr_14813_14832 = state_14809__$1;
(statearr_14813_14832[(2)] = inst_14804);

(statearr_14813_14832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (5))){
var inst_14787 = (state_14809[(7)]);
var inst_14798 = (state_14809[(2)]);
var inst_14799 = cljs.core.not_empty.call(null,inst_14787);
var state_14809__$1 = (function (){var statearr_14814 = state_14809;
(statearr_14814[(9)] = inst_14798);

return statearr_14814;
})();
if(cljs.core.truth_(inst_14799)){
var statearr_14815_14833 = state_14809__$1;
(statearr_14815_14833[(1)] = (6));

} else {
var statearr_14816_14834 = state_14809__$1;
(statearr_14816_14834[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (4))){
var state_14809__$1 = state_14809;
var statearr_14817_14835 = state_14809__$1;
(statearr_14817_14835[(2)] = null);

(statearr_14817_14835[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (3))){
var inst_14785 = (state_14809[(10)]);
var inst_14781 = (state_14809[(11)]);
var inst_14787 = (state_14809[(7)]);
var inst_14784 = (state_14809[(12)]);
var inst_14790 = console.debug("Figwheel: loaded these files");
var inst_14791 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14785);
var inst_14792 = cljs.core.pr_str.call(null,inst_14791);
var inst_14793 = console.log(inst_14792);
var inst_14794 = (function (){var files_not_loaded = inst_14787;
var res = inst_14785;
var res_SINGLEQUOTE_ = inst_14784;
var files_SINGLEQUOTE_ = inst_14781;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14785,inst_14781,inst_14787,inst_14784,inst_14790,inst_14791,inst_14792,inst_14793,state_val_14810,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14785,inst_14781,inst_14787,inst_14784,inst_14790,inst_14791,inst_14792,inst_14793,state_val_14810,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files))
})();
var inst_14795 = setTimeout(inst_14794,(10));
var state_14809__$1 = (function (){var statearr_14818 = state_14809;
(statearr_14818[(13)] = inst_14793);

(statearr_14818[(14)] = inst_14790);

return statearr_14818;
})();
var statearr_14819_14836 = state_14809__$1;
(statearr_14819_14836[(2)] = inst_14795);

(statearr_14819_14836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (2))){
var inst_14785 = (state_14809[(10)]);
var inst_14781 = (state_14809[(11)]);
var inst_14784 = (state_14809[(12)]);
var inst_14784__$1 = (state_14809[(2)]);
var inst_14785__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14784__$1);
var inst_14786 = (function (){var res = inst_14785__$1;
var res_SINGLEQUOTE_ = inst_14784__$1;
var files_SINGLEQUOTE_ = inst_14781;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14785,inst_14781,inst_14784,inst_14784__$1,inst_14785__$1,state_val_14810,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files){
return (function (p1__14722_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14722_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14785,inst_14781,inst_14784,inst_14784__$1,inst_14785__$1,state_val_14810,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files))
})();
var inst_14787 = cljs.core.filter.call(null,inst_14786,inst_14784__$1);
var inst_14788 = cljs.core.not_empty.call(null,inst_14785__$1);
var state_14809__$1 = (function (){var statearr_14820 = state_14809;
(statearr_14820[(10)] = inst_14785__$1);

(statearr_14820[(7)] = inst_14787);

(statearr_14820[(12)] = inst_14784__$1);

return statearr_14820;
})();
if(cljs.core.truth_(inst_14788)){
var statearr_14821_14837 = state_14809__$1;
(statearr_14821_14837[(1)] = (3));

} else {
var statearr_14822_14838 = state_14809__$1;
(statearr_14822_14838[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14810 === (1))){
var inst_14781 = (state_14809[(11)]);
var inst_14780 = before_jsload.call(null,files);
var inst_14781__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_14782 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14781__$1);
var state_14809__$1 = (function (){var statearr_14823 = state_14809;
(statearr_14823[(11)] = inst_14781__$1);

(statearr_14823[(15)] = inst_14780);

return statearr_14823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14809__$1,(2),inst_14782);
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
});})(c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14827[(0)] = state_machine__7249__auto__);

(statearr_14827[(1)] = (1));

return statearr_14827;
});
var state_machine__7249__auto____1 = (function (state_14809){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14828){if((e14828 instanceof Object)){
var ex__7252__auto__ = e14828;
var statearr_14829_14839 = state_14809;
(statearr_14829_14839[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14840 = state_14809;
state_14809 = G__14840;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14809){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files))
})();
var state__7306__auto__ = (function (){var statearr_14830 = f__7305__auto__.call(null);
(statearr_14830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14778,map__14778__$1,opts,on_jsload,before_jsload,map__14779,map__14779__$1,msg,files))
);

return c__7304__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__14841,link_href){
var map__14843 = p__14841;
var map__14843__$1 = ((cljs.core.seq_QMARK_.call(null,map__14843))?cljs.core.apply.call(null,cljs.core.hash_map,map__14843):map__14843);
var request_url = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,parent){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,parent){
return (function (state_14864){
var state_val_14865 = (state_14864[(1)]);
if((state_val_14865 === (2))){
var inst_14861 = (state_14864[(2)]);
var inst_14862 = parent.removeChild(orig_link);
var state_14864__$1 = (function (){var statearr_14866 = state_14864;
(statearr_14866[(7)] = inst_14861);

return statearr_14866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14864__$1,inst_14862);
} else {
if((state_val_14865 === (1))){
var inst_14859 = cljs.core.async.timeout.call(null,(200));
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14864__$1,(2),inst_14859);
} else {
return null;
}
}
});})(c__7304__auto__,parent))
;
return ((function (switch__7248__auto__,c__7304__auto__,parent){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14870 = [null,null,null,null,null,null,null,null];
(statearr_14870[(0)] = state_machine__7249__auto__);

(statearr_14870[(1)] = (1));

return statearr_14870;
});
var state_machine__7249__auto____1 = (function (state_14864){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14871){if((e14871 instanceof Object)){
var ex__7252__auto__ = e14871;
var statearr_14872_14874 = state_14864;
(statearr_14872_14874[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14875 = state_14864;
state_14864 = G__14875;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,parent))
})();
var state__7306__auto__ = (function (){var statearr_14873 = f__7305__auto__.call(null);
(statearr_14873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,parent))
);

return c__7304__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__14876){
var map__14878 = p__14876;
var map__14878__$1 = ((cljs.core.seq_QMARK_.call(null,map__14878))?cljs.core.apply.call(null,cljs.core.hash_map,map__14878):map__14878);
var f_data = map__14878__$1;
var request_url = cljs.core.get.call(null,map__14878__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14878__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__14879,files_msg){
var map__14901 = p__14879;
var map__14901__$1 = ((cljs.core.seq_QMARK_.call(null,map__14901))?cljs.core.apply.call(null,cljs.core.hash_map,map__14901):map__14901);
var opts = map__14901__$1;
var on_cssload = cljs.core.get.call(null,map__14901__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__14902_14922 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__14903_14923 = null;
var count__14904_14924 = (0);
var i__14905_14925 = (0);
while(true){
if((i__14905_14925 < count__14904_14924)){
var f_14926 = cljs.core._nth.call(null,chunk__14903_14923,i__14905_14925);
figwheel.client.file_reloading.reload_css_file.call(null,f_14926);

var G__14927 = seq__14902_14922;
var G__14928 = chunk__14903_14923;
var G__14929 = count__14904_14924;
var G__14930 = (i__14905_14925 + (1));
seq__14902_14922 = G__14927;
chunk__14903_14923 = G__14928;
count__14904_14924 = G__14929;
i__14905_14925 = G__14930;
continue;
} else {
var temp__4126__auto___14931 = cljs.core.seq.call(null,seq__14902_14922);
if(temp__4126__auto___14931){
var seq__14902_14932__$1 = temp__4126__auto___14931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14902_14932__$1)){
var c__4409__auto___14933 = cljs.core.chunk_first.call(null,seq__14902_14932__$1);
var G__14934 = cljs.core.chunk_rest.call(null,seq__14902_14932__$1);
var G__14935 = c__4409__auto___14933;
var G__14936 = cljs.core.count.call(null,c__4409__auto___14933);
var G__14937 = (0);
seq__14902_14922 = G__14934;
chunk__14903_14923 = G__14935;
count__14904_14924 = G__14936;
i__14905_14925 = G__14937;
continue;
} else {
var f_14938 = cljs.core.first.call(null,seq__14902_14932__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_14938);

var G__14939 = cljs.core.next.call(null,seq__14902_14932__$1);
var G__14940 = null;
var G__14941 = (0);
var G__14942 = (0);
seq__14902_14922 = G__14939;
chunk__14903_14923 = G__14940;
count__14904_14924 = G__14941;
i__14905_14925 = G__14942;
continue;
}
} else {
}
}
break;
}

var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload){
return (function (state_14912){
var state_val_14913 = (state_14912[(1)]);
if((state_val_14913 === (2))){
var inst_14908 = (state_14912[(2)]);
var inst_14909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_14910 = on_cssload.call(null,inst_14909);
var state_14912__$1 = (function (){var statearr_14914 = state_14912;
(statearr_14914[(7)] = inst_14908);

return statearr_14914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14912__$1,inst_14910);
} else {
if((state_val_14913 === (1))){
var inst_14906 = cljs.core.async.timeout.call(null,(100));
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14912__$1,(2),inst_14906);
} else {
return null;
}
}
});})(c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14918 = [null,null,null,null,null,null,null,null];
(statearr_14918[(0)] = state_machine__7249__auto__);

(statearr_14918[(1)] = (1));

return statearr_14918;
});
var state_machine__7249__auto____1 = (function (state_14912){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14919){if((e14919 instanceof Object)){
var ex__7252__auto__ = e14919;
var statearr_14920_14943 = state_14912;
(statearr_14920_14943[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14944 = state_14912;
state_14912 = G__14944;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14912){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload))
})();
var state__7306__auto__ = (function (){var statearr_14921 = f__7305__auto__.call(null);
(statearr_14921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14901,map__14901__$1,opts,on_cssload))
);

return c__7304__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map