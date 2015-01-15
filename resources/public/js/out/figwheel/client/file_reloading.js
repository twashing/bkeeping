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
figwheel.client.file_reloading.reload_host = (function reload_host(p__14760){
var map__14762 = p__14760;
var map__14762__$1 = ((cljs.core.seq_QMARK_.call(null,map__14762))?cljs.core.apply.call(null,cljs.core.hash_map,map__14762):map__14762);
var websocket_url = cljs.core.get.call(null,map__14762__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__14763,callback){
var map__14765 = p__14763;
var map__14765__$1 = ((cljs.core.seq_QMARK_.call(null,map__14765))?cljs.core.apply.call(null,cljs.core.hash_map,map__14765):map__14765);
var msg = map__14765__$1;
var meta_data = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__14765,map__14765__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__14765,map__14765__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__14766,p__14767){
var map__14770 = p__14766;
var map__14770__$1 = ((cljs.core.seq_QMARK_.call(null,map__14770))?cljs.core.apply.call(null,cljs.core.hash_map,map__14770):map__14770);
var opts = map__14770__$1;
var url_rewriter = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14771 = p__14767;
var map__14771__$1 = ((cljs.core.seq_QMARK_.call(null,map__14771))?cljs.core.apply.call(null,cljs.core.hash_map,map__14771):map__14771);
var d = map__14771__$1;
var file = cljs.core.get.call(null,map__14771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__14773,p__14774){
var map__14828 = p__14773;
var map__14828__$1 = ((cljs.core.seq_QMARK_.call(null,map__14828))?cljs.core.apply.call(null,cljs.core.hash_map,map__14828):map__14828);
var opts = map__14828__$1;
var on_jsload = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__14829 = p__14774;
var map__14829__$1 = ((cljs.core.seq_QMARK_.call(null,map__14829))?cljs.core.apply.call(null,cljs.core.hash_map,map__14829):map__14829);
var msg = map__14829__$1;
var files = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files){
return (function (state_14859){
var state_val_14860 = (state_14859[(1)]);
if((state_val_14860 === (8))){
var inst_14857 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14859__$1,inst_14857);
} else {
if((state_val_14860 === (7))){
var state_14859__$1 = state_14859;
var statearr_14861_14881 = state_14859__$1;
(statearr_14861_14881[(2)] = null);

(statearr_14861_14881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (6))){
var inst_14837 = (state_14859[(7)]);
var inst_14851 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_14852 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14837);
var inst_14853 = cljs.core.pr_str.call(null,inst_14852);
var inst_14854 = console.log("not required:",inst_14853);
var state_14859__$1 = (function (){var statearr_14862 = state_14859;
(statearr_14862[(8)] = inst_14851);

return statearr_14862;
})();
var statearr_14863_14882 = state_14859__$1;
(statearr_14863_14882[(2)] = inst_14854);

(statearr_14863_14882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (5))){
var inst_14837 = (state_14859[(7)]);
var inst_14848 = (state_14859[(2)]);
var inst_14849 = cljs.core.not_empty.call(null,inst_14837);
var state_14859__$1 = (function (){var statearr_14864 = state_14859;
(statearr_14864[(9)] = inst_14848);

return statearr_14864;
})();
if(cljs.core.truth_(inst_14849)){
var statearr_14865_14883 = state_14859__$1;
(statearr_14865_14883[(1)] = (6));

} else {
var statearr_14866_14884 = state_14859__$1;
(statearr_14866_14884[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (4))){
var state_14859__$1 = state_14859;
var statearr_14867_14885 = state_14859__$1;
(statearr_14867_14885[(2)] = null);

(statearr_14867_14885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (3))){
var inst_14835 = (state_14859[(10)]);
var inst_14831 = (state_14859[(11)]);
var inst_14837 = (state_14859[(7)]);
var inst_14834 = (state_14859[(12)]);
var inst_14840 = console.debug("Figwheel: loaded these files");
var inst_14841 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14835);
var inst_14842 = cljs.core.pr_str.call(null,inst_14841);
var inst_14843 = console.log(inst_14842);
var inst_14844 = (function (){var files_not_loaded = inst_14837;
var res = inst_14835;
var res_SINGLEQUOTE_ = inst_14834;
var files_SINGLEQUOTE_ = inst_14831;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14835,inst_14831,inst_14837,inst_14834,inst_14840,inst_14841,inst_14842,inst_14843,state_val_14860,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14835,inst_14831,inst_14837,inst_14834,inst_14840,inst_14841,inst_14842,inst_14843,state_val_14860,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files))
})();
var inst_14845 = setTimeout(inst_14844,(10));
var state_14859__$1 = (function (){var statearr_14868 = state_14859;
(statearr_14868[(13)] = inst_14840);

(statearr_14868[(14)] = inst_14843);

return statearr_14868;
})();
var statearr_14869_14886 = state_14859__$1;
(statearr_14869_14886[(2)] = inst_14845);

(statearr_14869_14886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (2))){
var inst_14835 = (state_14859[(10)]);
var inst_14831 = (state_14859[(11)]);
var inst_14834 = (state_14859[(12)]);
var inst_14834__$1 = (state_14859[(2)]);
var inst_14835__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14834__$1);
var inst_14836 = (function (){var res = inst_14835__$1;
var res_SINGLEQUOTE_ = inst_14834__$1;
var files_SINGLEQUOTE_ = inst_14831;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14835,inst_14831,inst_14834,inst_14834__$1,inst_14835__$1,state_val_14860,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files){
return (function (p1__14772_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14772_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14835,inst_14831,inst_14834,inst_14834__$1,inst_14835__$1,state_val_14860,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files))
})();
var inst_14837 = cljs.core.filter.call(null,inst_14836,inst_14834__$1);
var inst_14838 = cljs.core.not_empty.call(null,inst_14835__$1);
var state_14859__$1 = (function (){var statearr_14870 = state_14859;
(statearr_14870[(10)] = inst_14835__$1);

(statearr_14870[(7)] = inst_14837);

(statearr_14870[(12)] = inst_14834__$1);

return statearr_14870;
})();
if(cljs.core.truth_(inst_14838)){
var statearr_14871_14887 = state_14859__$1;
(statearr_14871_14887[(1)] = (3));

} else {
var statearr_14872_14888 = state_14859__$1;
(statearr_14872_14888[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (1))){
var inst_14831 = (state_14859[(11)]);
var inst_14830 = before_jsload.call(null,files);
var inst_14831__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_14832 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14831__$1);
var state_14859__$1 = (function (){var statearr_14873 = state_14859;
(statearr_14873[(11)] = inst_14831__$1);

(statearr_14873[(15)] = inst_14830);

return statearr_14873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14859__$1,(2),inst_14832);
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
});})(c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14877[(0)] = state_machine__7249__auto__);

(statearr_14877[(1)] = (1));

return statearr_14877;
});
var state_machine__7249__auto____1 = (function (state_14859){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14878){if((e14878 instanceof Object)){
var ex__7252__auto__ = e14878;
var statearr_14879_14889 = state_14859;
(statearr_14879_14889[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14890 = state_14859;
state_14859 = G__14890;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14859){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files))
})();
var state__7306__auto__ = (function (){var statearr_14880 = f__7305__auto__.call(null);
(statearr_14880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14828,map__14828__$1,opts,on_jsload,before_jsload,map__14829,map__14829__$1,msg,files))
);

return c__7304__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__14891,link_href){
var map__14893 = p__14891;
var map__14893__$1 = ((cljs.core.seq_QMARK_.call(null,map__14893))?cljs.core.apply.call(null,cljs.core.hash_map,map__14893):map__14893);
var request_url = cljs.core.get.call(null,map__14893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14893__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (2))){
var inst_14911 = (state_14914[(2)]);
var inst_14912 = parent.removeChild(orig_link);
var state_14914__$1 = (function (){var statearr_14916 = state_14914;
(statearr_14916[(7)] = inst_14911);

return statearr_14916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14914__$1,inst_14912);
} else {
if((state_val_14915 === (1))){
var inst_14909 = cljs.core.async.timeout.call(null,(200));
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14914__$1,(2),inst_14909);
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
var statearr_14920 = [null,null,null,null,null,null,null,null];
(statearr_14920[(0)] = state_machine__7249__auto__);

(statearr_14920[(1)] = (1));

return statearr_14920;
});
var state_machine__7249__auto____1 = (function (state_14914){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14921){if((e14921 instanceof Object)){
var ex__7252__auto__ = e14921;
var statearr_14922_14924 = state_14914;
(statearr_14922_14924[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14925 = state_14914;
state_14914 = G__14925;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,parent))
})();
var state__7306__auto__ = (function (){var statearr_14923 = f__7305__auto__.call(null);
(statearr_14923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14923;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__14926){
var map__14928 = p__14926;
var map__14928__$1 = ((cljs.core.seq_QMARK_.call(null,map__14928))?cljs.core.apply.call(null,cljs.core.hash_map,map__14928):map__14928);
var f_data = map__14928__$1;
var request_url = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__14929,files_msg){
var map__14951 = p__14929;
var map__14951__$1 = ((cljs.core.seq_QMARK_.call(null,map__14951))?cljs.core.apply.call(null,cljs.core.hash_map,map__14951):map__14951);
var opts = map__14951__$1;
var on_cssload = cljs.core.get.call(null,map__14951__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__14952_14972 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__14953_14973 = null;
var count__14954_14974 = (0);
var i__14955_14975 = (0);
while(true){
if((i__14955_14975 < count__14954_14974)){
var f_14976 = cljs.core._nth.call(null,chunk__14953_14973,i__14955_14975);
figwheel.client.file_reloading.reload_css_file.call(null,f_14976);

var G__14977 = seq__14952_14972;
var G__14978 = chunk__14953_14973;
var G__14979 = count__14954_14974;
var G__14980 = (i__14955_14975 + (1));
seq__14952_14972 = G__14977;
chunk__14953_14973 = G__14978;
count__14954_14974 = G__14979;
i__14955_14975 = G__14980;
continue;
} else {
var temp__4126__auto___14981 = cljs.core.seq.call(null,seq__14952_14972);
if(temp__4126__auto___14981){
var seq__14952_14982__$1 = temp__4126__auto___14981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14952_14982__$1)){
var c__4409__auto___14983 = cljs.core.chunk_first.call(null,seq__14952_14982__$1);
var G__14984 = cljs.core.chunk_rest.call(null,seq__14952_14982__$1);
var G__14985 = c__4409__auto___14983;
var G__14986 = cljs.core.count.call(null,c__4409__auto___14983);
var G__14987 = (0);
seq__14952_14972 = G__14984;
chunk__14953_14973 = G__14985;
count__14954_14974 = G__14986;
i__14955_14975 = G__14987;
continue;
} else {
var f_14988 = cljs.core.first.call(null,seq__14952_14982__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_14988);

var G__14989 = cljs.core.next.call(null,seq__14952_14982__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14952_14972 = G__14989;
chunk__14953_14973 = G__14990;
count__14954_14974 = G__14991;
i__14955_14975 = G__14992;
continue;
}
} else {
}
}
break;
}

var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload){
return (function (state_14962){
var state_val_14963 = (state_14962[(1)]);
if((state_val_14963 === (2))){
var inst_14958 = (state_14962[(2)]);
var inst_14959 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_14960 = on_cssload.call(null,inst_14959);
var state_14962__$1 = (function (){var statearr_14964 = state_14962;
(statearr_14964[(7)] = inst_14958);

return statearr_14964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14962__$1,inst_14960);
} else {
if((state_val_14963 === (1))){
var inst_14956 = cljs.core.async.timeout.call(null,(100));
var state_14962__$1 = state_14962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14962__$1,(2),inst_14956);
} else {
return null;
}
}
});})(c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload))
;
return ((function (switch__7248__auto__,c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14968 = [null,null,null,null,null,null,null,null];
(statearr_14968[(0)] = state_machine__7249__auto__);

(statearr_14968[(1)] = (1));

return statearr_14968;
});
var state_machine__7249__auto____1 = (function (state_14962){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14969){if((e14969 instanceof Object)){
var ex__7252__auto__ = e14969;
var statearr_14970_14993 = state_14962;
(statearr_14970_14993[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14994 = state_14962;
state_14962 = G__14994;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14962){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload))
})();
var state__7306__auto__ = (function (){var statearr_14971 = f__7305__auto__.call(null);
(statearr_14971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,map__14951,map__14951__$1,opts,on_cssload))
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