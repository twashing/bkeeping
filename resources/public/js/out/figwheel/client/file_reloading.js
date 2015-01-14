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
figwheel.client.file_reloading.reload_host = (function reload_host(p__14719){
var map__14721 = p__14719;
var map__14721__$1 = ((cljs.core.seq_QMARK_.call(null,map__14721))?cljs.core.apply.call(null,cljs.core.hash_map,map__14721):map__14721);
var websocket_url = cljs.core.get.call(null,map__14721__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__14722,callback){
var map__14724 = p__14722;
var map__14724__$1 = ((cljs.core.seq_QMARK_.call(null,map__14724))?cljs.core.apply.call(null,cljs.core.hash_map,map__14724):map__14724);
var msg = map__14724__$1;
var meta_data = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__14724,map__14724__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__14724,map__14724__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__14725,p__14726){
var map__14729 = p__14725;
var map__14729__$1 = ((cljs.core.seq_QMARK_.call(null,map__14729))?cljs.core.apply.call(null,cljs.core.hash_map,map__14729):map__14729);
var opts = map__14729__$1;
var url_rewriter = cljs.core.get.call(null,map__14729__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14730 = p__14726;
var map__14730__$1 = ((cljs.core.seq_QMARK_.call(null,map__14730))?cljs.core.apply.call(null,cljs.core.hash_map,map__14730):map__14730);
var d = map__14730__$1;
var file = cljs.core.get.call(null,map__14730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__14732,p__14733){
var map__14787 = p__14732;
var map__14787__$1 = ((cljs.core.seq_QMARK_.call(null,map__14787))?cljs.core.apply.call(null,cljs.core.hash_map,map__14787):map__14787);
var opts = map__14787__$1;
var on_jsload = cljs.core.get.call(null,map__14787__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__14787__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__14788 = p__14733;
var map__14788__$1 = ((cljs.core.seq_QMARK_.call(null,map__14788))?cljs.core.apply.call(null,cljs.core.hash_map,map__14788):map__14788);
var msg = map__14788__$1;
var files = cljs.core.get.call(null,map__14788__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files){
return (function (state_14818){
var state_val_14819 = (state_14818[(1)]);
if((state_val_14819 === (8))){
var inst_14816 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14818__$1,inst_14816);
} else {
if((state_val_14819 === (7))){
var state_14818__$1 = state_14818;
var statearr_14820_14840 = state_14818__$1;
(statearr_14820_14840[(2)] = null);

(statearr_14820_14840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (6))){
var inst_14796 = (state_14818[(7)]);
var inst_14810 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_14811 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14796);
var inst_14812 = cljs.core.pr_str.call(null,inst_14811);
var inst_14813 = console.log("not required:",inst_14812);
var state_14818__$1 = (function (){var statearr_14821 = state_14818;
(statearr_14821[(8)] = inst_14810);

return statearr_14821;
})();
var statearr_14822_14841 = state_14818__$1;
(statearr_14822_14841[(2)] = inst_14813);

(statearr_14822_14841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (5))){
var inst_14796 = (state_14818[(7)]);
var inst_14807 = (state_14818[(2)]);
var inst_14808 = cljs.core.not_empty.call(null,inst_14796);
var state_14818__$1 = (function (){var statearr_14823 = state_14818;
(statearr_14823[(9)] = inst_14807);

return statearr_14823;
})();
if(cljs.core.truth_(inst_14808)){
var statearr_14824_14842 = state_14818__$1;
(statearr_14824_14842[(1)] = (6));

} else {
var statearr_14825_14843 = state_14818__$1;
(statearr_14825_14843[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (4))){
var state_14818__$1 = state_14818;
var statearr_14826_14844 = state_14818__$1;
(statearr_14826_14844[(2)] = null);

(statearr_14826_14844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (3))){
var inst_14796 = (state_14818[(7)]);
var inst_14793 = (state_14818[(10)]);
var inst_14790 = (state_14818[(11)]);
var inst_14794 = (state_14818[(12)]);
var inst_14799 = console.debug("Figwheel: loaded these files");
var inst_14800 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14794);
var inst_14801 = cljs.core.pr_str.call(null,inst_14800);
var inst_14802 = console.log(inst_14801);
var inst_14803 = (function (){var files_not_loaded = inst_14796;
var res = inst_14794;
var res_SINGLEQUOTE_ = inst_14793;
var files_SINGLEQUOTE_ = inst_14790;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14796,inst_14793,inst_14790,inst_14794,inst_14799,inst_14800,inst_14801,inst_14802,state_val_14819,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14796,inst_14793,inst_14790,inst_14794,inst_14799,inst_14800,inst_14801,inst_14802,state_val_14819,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files))
})();
var inst_14804 = setTimeout(inst_14803,(10));
var state_14818__$1 = (function (){var statearr_14827 = state_14818;
(statearr_14827[(13)] = inst_14799);

(statearr_14827[(14)] = inst_14802);

return statearr_14827;
})();
var statearr_14828_14845 = state_14818__$1;
(statearr_14828_14845[(2)] = inst_14804);

(statearr_14828_14845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (2))){
var inst_14793 = (state_14818[(10)]);
var inst_14790 = (state_14818[(11)]);
var inst_14794 = (state_14818[(12)]);
var inst_14793__$1 = (state_14818[(2)]);
var inst_14794__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14793__$1);
var inst_14795 = (function (){var res = inst_14794__$1;
var res_SINGLEQUOTE_ = inst_14793__$1;
var files_SINGLEQUOTE_ = inst_14790;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14793,inst_14790,inst_14794,inst_14793__$1,inst_14794__$1,state_val_14819,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files){
return (function (p1__14731_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14731_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14793,inst_14790,inst_14794,inst_14793__$1,inst_14794__$1,state_val_14819,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files))
})();
var inst_14796 = cljs.core.filter.call(null,inst_14795,inst_14793__$1);
var inst_14797 = cljs.core.not_empty.call(null,inst_14794__$1);
var state_14818__$1 = (function (){var statearr_14829 = state_14818;
(statearr_14829[(7)] = inst_14796);

(statearr_14829[(10)] = inst_14793__$1);

(statearr_14829[(12)] = inst_14794__$1);

return statearr_14829;
})();
if(cljs.core.truth_(inst_14797)){
var statearr_14830_14846 = state_14818__$1;
(statearr_14830_14846[(1)] = (3));

} else {
var statearr_14831_14847 = state_14818__$1;
(statearr_14831_14847[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (1))){
var inst_14790 = (state_14818[(11)]);
var inst_14789 = before_jsload.call(null,files);
var inst_14790__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_14791 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14790__$1);
var state_14818__$1 = (function (){var statearr_14832 = state_14818;
(statearr_14832[(15)] = inst_14789);

(statearr_14832[(11)] = inst_14790__$1);

return statearr_14832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14818__$1,(2),inst_14791);
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
});})(c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14836[(0)] = state_machine__7249__auto__);

(statearr_14836[(1)] = (1));

return statearr_14836;
});
var state_machine__7249__auto____1 = (function (state_14818){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14837){if((e14837 instanceof Object)){
var ex__7252__auto__ = e14837;
var statearr_14838_14848 = state_14818;
(statearr_14838_14848[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14849 = state_14818;
state_14818 = G__14849;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14818){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files))
})();
var state__7306__auto__ = (function (){var statearr_14839 = f__7305__auto__.call(null);
(statearr_14839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14787,map__14787__$1,opts,on_jsload,before_jsload,map__14788,map__14788__$1,msg,files))
);

return c__7304__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__14850,link_href){
var map__14852 = p__14850;
var map__14852__$1 = ((cljs.core.seq_QMARK_.call(null,map__14852))?cljs.core.apply.call(null,cljs.core.hash_map,map__14852):map__14852);
var request_url = cljs.core.get.call(null,map__14852__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (state_14873){
var state_val_14874 = (state_14873[(1)]);
if((state_val_14874 === (2))){
var inst_14870 = (state_14873[(2)]);
var inst_14871 = parent.removeChild(orig_link);
var state_14873__$1 = (function (){var statearr_14875 = state_14873;
(statearr_14875[(7)] = inst_14870);

return statearr_14875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14873__$1,inst_14871);
} else {
if((state_val_14874 === (1))){
var inst_14868 = cljs.core.async.timeout.call(null,(200));
var state_14873__$1 = state_14873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14873__$1,(2),inst_14868);
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
var statearr_14879 = [null,null,null,null,null,null,null,null];
(statearr_14879[(0)] = state_machine__7249__auto__);

(statearr_14879[(1)] = (1));

return statearr_14879;
});
var state_machine__7249__auto____1 = (function (state_14873){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14880){if((e14880 instanceof Object)){
var ex__7252__auto__ = e14880;
var statearr_14881_14883 = state_14873;
(statearr_14881_14883[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14884 = state_14873;
state_14873 = G__14884;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14873){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,parent))
})();
var state__7306__auto__ = (function (){var statearr_14882 = f__7305__auto__.call(null);
(statearr_14882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14882;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__14885){
var map__14887 = p__14885;
var map__14887__$1 = ((cljs.core.seq_QMARK_.call(null,map__14887))?cljs.core.apply.call(null,cljs.core.hash_map,map__14887):map__14887);
var f_data = map__14887__$1;
var request_url = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__14888,files_msg){
var map__14910 = p__14888;
var map__14910__$1 = ((cljs.core.seq_QMARK_.call(null,map__14910))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910):map__14910);
var opts = map__14910__$1;
var on_cssload = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__14911_14931 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__14912_14932 = null;
var count__14913_14933 = (0);
var i__14914_14934 = (0);
while(true){
if((i__14914_14934 < count__14913_14933)){
var f_14935 = cljs.core._nth.call(null,chunk__14912_14932,i__14914_14934);
figwheel.client.file_reloading.reload_css_file.call(null,f_14935);

var G__14936 = seq__14911_14931;
var G__14937 = chunk__14912_14932;
var G__14938 = count__14913_14933;
var G__14939 = (i__14914_14934 + (1));
seq__14911_14931 = G__14936;
chunk__14912_14932 = G__14937;
count__14913_14933 = G__14938;
i__14914_14934 = G__14939;
continue;
} else {
var temp__4126__auto___14940 = cljs.core.seq.call(null,seq__14911_14931);
if(temp__4126__auto___14940){
var seq__14911_14941__$1 = temp__4126__auto___14940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14911_14941__$1)){
var c__4409__auto___14942 = cljs.core.chunk_first.call(null,seq__14911_14941__$1);
var G__14943 = cljs.core.chunk_rest.call(null,seq__14911_14941__$1);
var G__14944 = c__4409__auto___14942;
var G__14945 = cljs.core.count.call(null,c__4409__auto___14942);
var G__14946 = (0);
seq__14911_14931 = G__14943;
chunk__14912_14932 = G__14944;
count__14913_14933 = G__14945;
i__14914_14934 = G__14946;
continue;
} else {
var f_14947 = cljs.core.first.call(null,seq__14911_14941__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_14947);

var G__14948 = cljs.core.next.call(null,seq__14911_14941__$1);
var G__14949 = null;
var G__14950 = (0);
var G__14951 = (0);
seq__14911_14931 = G__14948;
chunk__14912_14932 = G__14949;
count__14913_14933 = G__14950;
i__14914_14934 = G__14951;
continue;
}
} else {
}
}
break;
}

var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload){
return (function (state_14921){
var state_val_14922 = (state_14921[(1)]);
if((state_val_14922 === (2))){
var inst_14917 = (state_14921[(2)]);
var inst_14918 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_14919 = on_cssload.call(null,inst_14918);
var state_14921__$1 = (function (){var statearr_14923 = state_14921;
(statearr_14923[(7)] = inst_14917);

return statearr_14923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14921__$1,inst_14919);
} else {
if((state_val_14922 === (1))){
var inst_14915 = cljs.core.async.timeout.call(null,(100));
var state_14921__$1 = state_14921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14921__$1,(2),inst_14915);
} else {
return null;
}
}
});})(c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14927 = [null,null,null,null,null,null,null,null];
(statearr_14927[(0)] = state_machine__7249__auto__);

(statearr_14927[(1)] = (1));

return statearr_14927;
});
var state_machine__7249__auto____1 = (function (state_14921){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14928){if((e14928 instanceof Object)){
var ex__7252__auto__ = e14928;
var statearr_14929_14952 = state_14921;
(statearr_14929_14952[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14953 = state_14921;
state_14921 = G__14953;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14921){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload))
})();
var state__7306__auto__ = (function (){var statearr_14930 = f__7305__auto__.call(null);
(statearr_14930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14910,map__14910__$1,opts,on_cssload))
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