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
figwheel.client.file_reloading.reload_host = (function reload_host(p__14701){
var map__14703 = p__14701;
var map__14703__$1 = ((cljs.core.seq_QMARK_.call(null,map__14703))?cljs.core.apply.call(null,cljs.core.hash_map,map__14703):map__14703);
var websocket_url = cljs.core.get.call(null,map__14703__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__14704,callback){
var map__14706 = p__14704;
var map__14706__$1 = ((cljs.core.seq_QMARK_.call(null,map__14706))?cljs.core.apply.call(null,cljs.core.hash_map,map__14706):map__14706);
var msg = map__14706__$1;
var meta_data = cljs.core.get.call(null,map__14706__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__14706__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__14706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__14706,map__14706__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__14706,map__14706__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__14707,p__14708){
var map__14711 = p__14707;
var map__14711__$1 = ((cljs.core.seq_QMARK_.call(null,map__14711))?cljs.core.apply.call(null,cljs.core.hash_map,map__14711):map__14711);
var opts = map__14711__$1;
var url_rewriter = cljs.core.get.call(null,map__14711__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14712 = p__14708;
var map__14712__$1 = ((cljs.core.seq_QMARK_.call(null,map__14712))?cljs.core.apply.call(null,cljs.core.hash_map,map__14712):map__14712);
var d = map__14712__$1;
var file = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__14714,p__14715){
var map__14769 = p__14714;
var map__14769__$1 = ((cljs.core.seq_QMARK_.call(null,map__14769))?cljs.core.apply.call(null,cljs.core.hash_map,map__14769):map__14769);
var opts = map__14769__$1;
var on_jsload = cljs.core.get.call(null,map__14769__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__14769__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__14770 = p__14715;
var map__14770__$1 = ((cljs.core.seq_QMARK_.call(null,map__14770))?cljs.core.apply.call(null,cljs.core.hash_map,map__14770):map__14770);
var msg = map__14770__$1;
var files = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files){
return (function (state_14800){
var state_val_14801 = (state_14800[(1)]);
if((state_val_14801 === (8))){
var inst_14798 = (state_14800[(2)]);
var state_14800__$1 = state_14800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14800__$1,inst_14798);
} else {
if((state_val_14801 === (7))){
var state_14800__$1 = state_14800;
var statearr_14802_14822 = state_14800__$1;
(statearr_14802_14822[(2)] = null);

(statearr_14802_14822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (6))){
var inst_14778 = (state_14800[(7)]);
var inst_14792 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_14793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14778);
var inst_14794 = cljs.core.pr_str.call(null,inst_14793);
var inst_14795 = console.log("not required:",inst_14794);
var state_14800__$1 = (function (){var statearr_14803 = state_14800;
(statearr_14803[(8)] = inst_14792);

return statearr_14803;
})();
var statearr_14804_14823 = state_14800__$1;
(statearr_14804_14823[(2)] = inst_14795);

(statearr_14804_14823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (5))){
var inst_14778 = (state_14800[(7)]);
var inst_14789 = (state_14800[(2)]);
var inst_14790 = cljs.core.not_empty.call(null,inst_14778);
var state_14800__$1 = (function (){var statearr_14805 = state_14800;
(statearr_14805[(9)] = inst_14789);

return statearr_14805;
})();
if(cljs.core.truth_(inst_14790)){
var statearr_14806_14824 = state_14800__$1;
(statearr_14806_14824[(1)] = (6));

} else {
var statearr_14807_14825 = state_14800__$1;
(statearr_14807_14825[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (4))){
var state_14800__$1 = state_14800;
var statearr_14808_14826 = state_14800__$1;
(statearr_14808_14826[(2)] = null);

(statearr_14808_14826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (3))){
var inst_14772 = (state_14800[(10)]);
var inst_14776 = (state_14800[(11)]);
var inst_14775 = (state_14800[(12)]);
var inst_14778 = (state_14800[(7)]);
var inst_14781 = console.debug("Figwheel: loaded these files");
var inst_14782 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14776);
var inst_14783 = cljs.core.pr_str.call(null,inst_14782);
var inst_14784 = console.log(inst_14783);
var inst_14785 = (function (){var files_not_loaded = inst_14778;
var res = inst_14776;
var res_SINGLEQUOTE_ = inst_14775;
var files_SINGLEQUOTE_ = inst_14772;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14772,inst_14776,inst_14775,inst_14778,inst_14781,inst_14782,inst_14783,inst_14784,state_val_14801,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14772,inst_14776,inst_14775,inst_14778,inst_14781,inst_14782,inst_14783,inst_14784,state_val_14801,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files))
})();
var inst_14786 = setTimeout(inst_14785,(10));
var state_14800__$1 = (function (){var statearr_14809 = state_14800;
(statearr_14809[(13)] = inst_14781);

(statearr_14809[(14)] = inst_14784);

return statearr_14809;
})();
var statearr_14810_14827 = state_14800__$1;
(statearr_14810_14827[(2)] = inst_14786);

(statearr_14810_14827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (2))){
var inst_14772 = (state_14800[(10)]);
var inst_14776 = (state_14800[(11)]);
var inst_14775 = (state_14800[(12)]);
var inst_14775__$1 = (state_14800[(2)]);
var inst_14776__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14775__$1);
var inst_14777 = (function (){var res = inst_14776__$1;
var res_SINGLEQUOTE_ = inst_14775__$1;
var files_SINGLEQUOTE_ = inst_14772;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14772,inst_14776,inst_14775,inst_14775__$1,inst_14776__$1,state_val_14801,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files){
return (function (p1__14713_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14713_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14772,inst_14776,inst_14775,inst_14775__$1,inst_14776__$1,state_val_14801,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files))
})();
var inst_14778 = cljs.core.filter.call(null,inst_14777,inst_14775__$1);
var inst_14779 = cljs.core.not_empty.call(null,inst_14776__$1);
var state_14800__$1 = (function (){var statearr_14811 = state_14800;
(statearr_14811[(11)] = inst_14776__$1);

(statearr_14811[(12)] = inst_14775__$1);

(statearr_14811[(7)] = inst_14778);

return statearr_14811;
})();
if(cljs.core.truth_(inst_14779)){
var statearr_14812_14828 = state_14800__$1;
(statearr_14812_14828[(1)] = (3));

} else {
var statearr_14813_14829 = state_14800__$1;
(statearr_14813_14829[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (1))){
var inst_14772 = (state_14800[(10)]);
var inst_14771 = before_jsload.call(null,files);
var inst_14772__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_14773 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14772__$1);
var state_14800__$1 = (function (){var statearr_14814 = state_14800;
(statearr_14814[(15)] = inst_14771);

(statearr_14814[(10)] = inst_14772__$1);

return statearr_14814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,(2),inst_14773);
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
});})(c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files))
;
return ((function (switch__7284__auto__,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14818[(0)] = state_machine__7285__auto__);

(statearr_14818[(1)] = (1));

return statearr_14818;
});
var state_machine__7285__auto____1 = (function (state_14800){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14819){if((e14819 instanceof Object)){
var ex__7288__auto__ = e14819;
var statearr_14820_14830 = state_14800;
(statearr_14820_14830[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14831 = state_14800;
state_14800 = G__14831;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14800){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files))
})();
var state__7342__auto__ = (function (){var statearr_14821 = f__7341__auto__.call(null);
(statearr_14821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto__);

return statearr_14821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto__,map__14769,map__14769__$1,opts,on_jsload,before_jsload,map__14770,map__14770__$1,msg,files))
);

return c__7340__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__14832,link_href){
var map__14834 = p__14832;
var map__14834__$1 = ((cljs.core.seq_QMARK_.call(null,map__14834))?cljs.core.apply.call(null,cljs.core.hash_map,map__14834):map__14834);
var request_url = cljs.core.get.call(null,map__14834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__7340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto__,parent){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto__,parent){
return (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (2))){
var inst_14852 = (state_14855[(2)]);
var inst_14853 = parent.removeChild(orig_link);
var state_14855__$1 = (function (){var statearr_14857 = state_14855;
(statearr_14857[(7)] = inst_14852);

return statearr_14857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14853);
} else {
if((state_val_14856 === (1))){
var inst_14850 = cljs.core.async.timeout.call(null,(200));
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(2),inst_14850);
} else {
return null;
}
}
});})(c__7340__auto__,parent))
;
return ((function (switch__7284__auto__,c__7340__auto__,parent){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14861 = [null,null,null,null,null,null,null,null];
(statearr_14861[(0)] = state_machine__7285__auto__);

(statearr_14861[(1)] = (1));

return statearr_14861;
});
var state_machine__7285__auto____1 = (function (state_14855){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14862){if((e14862 instanceof Object)){
var ex__7288__auto__ = e14862;
var statearr_14863_14865 = state_14855;
(statearr_14863_14865[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14866 = state_14855;
state_14855 = G__14866;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto__,parent))
})();
var state__7342__auto__ = (function (){var statearr_14864 = f__7341__auto__.call(null);
(statearr_14864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto__);

return statearr_14864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto__,parent))
);

return c__7340__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__14867){
var map__14869 = p__14867;
var map__14869__$1 = ((cljs.core.seq_QMARK_.call(null,map__14869))?cljs.core.apply.call(null,cljs.core.hash_map,map__14869):map__14869);
var f_data = map__14869__$1;
var request_url = cljs.core.get.call(null,map__14869__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__14870,files_msg){
var map__14892 = p__14870;
var map__14892__$1 = ((cljs.core.seq_QMARK_.call(null,map__14892))?cljs.core.apply.call(null,cljs.core.hash_map,map__14892):map__14892);
var opts = map__14892__$1;
var on_cssload = cljs.core.get.call(null,map__14892__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__14893_14913 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__14894_14914 = null;
var count__14895_14915 = (0);
var i__14896_14916 = (0);
while(true){
if((i__14896_14916 < count__14895_14915)){
var f_14917 = cljs.core._nth.call(null,chunk__14894_14914,i__14896_14916);
figwheel.client.file_reloading.reload_css_file.call(null,f_14917);

var G__14918 = seq__14893_14913;
var G__14919 = chunk__14894_14914;
var G__14920 = count__14895_14915;
var G__14921 = (i__14896_14916 + (1));
seq__14893_14913 = G__14918;
chunk__14894_14914 = G__14919;
count__14895_14915 = G__14920;
i__14896_14916 = G__14921;
continue;
} else {
var temp__4126__auto___14922 = cljs.core.seq.call(null,seq__14893_14913);
if(temp__4126__auto___14922){
var seq__14893_14923__$1 = temp__4126__auto___14922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14893_14923__$1)){
var c__4409__auto___14924 = cljs.core.chunk_first.call(null,seq__14893_14923__$1);
var G__14925 = cljs.core.chunk_rest.call(null,seq__14893_14923__$1);
var G__14926 = c__4409__auto___14924;
var G__14927 = cljs.core.count.call(null,c__4409__auto___14924);
var G__14928 = (0);
seq__14893_14913 = G__14925;
chunk__14894_14914 = G__14926;
count__14895_14915 = G__14927;
i__14896_14916 = G__14928;
continue;
} else {
var f_14929 = cljs.core.first.call(null,seq__14893_14923__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_14929);

var G__14930 = cljs.core.next.call(null,seq__14893_14923__$1);
var G__14931 = null;
var G__14932 = (0);
var G__14933 = (0);
seq__14893_14913 = G__14930;
chunk__14894_14914 = G__14931;
count__14895_14915 = G__14932;
i__14896_14916 = G__14933;
continue;
}
} else {
}
}
break;
}

var c__7340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload){
return (function (){
var f__7341__auto__ = (function (){var switch__7284__auto__ = ((function (c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload){
return (function (state_14903){
var state_val_14904 = (state_14903[(1)]);
if((state_val_14904 === (2))){
var inst_14899 = (state_14903[(2)]);
var inst_14900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_14901 = on_cssload.call(null,inst_14900);
var state_14903__$1 = (function (){var statearr_14905 = state_14903;
(statearr_14905[(7)] = inst_14899);

return statearr_14905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14903__$1,inst_14901);
} else {
if((state_val_14904 === (1))){
var inst_14897 = cljs.core.async.timeout.call(null,(100));
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14903__$1,(2),inst_14897);
} else {
return null;
}
}
});})(c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload))
;
return ((function (switch__7284__auto__,c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload){
return (function() {
var state_machine__7285__auto__ = null;
var state_machine__7285__auto____0 = (function (){
var statearr_14909 = [null,null,null,null,null,null,null,null];
(statearr_14909[(0)] = state_machine__7285__auto__);

(statearr_14909[(1)] = (1));

return statearr_14909;
});
var state_machine__7285__auto____1 = (function (state_14903){
while(true){
var ret_value__7286__auto__ = (function (){try{while(true){
var result__7287__auto__ = switch__7284__auto__.call(null,state_14903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7287__auto__;
}
break;
}
}catch (e14910){if((e14910 instanceof Object)){
var ex__7288__auto__ = e14910;
var statearr_14911_14934 = state_14903;
(statearr_14911_14934[(5)] = ex__7288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14935 = state_14903;
state_14903 = G__14935;
continue;
} else {
return ret_value__7286__auto__;
}
break;
}
});
state_machine__7285__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return state_machine__7285__auto____0.call(this);
case 1:
return state_machine__7285__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7285__auto____0;
state_machine__7285__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7285__auto____1;
return state_machine__7285__auto__;
})()
;})(switch__7284__auto__,c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload))
})();
var state__7342__auto__ = (function (){var statearr_14912 = f__7341__auto__.call(null);
(statearr_14912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7340__auto__);

return statearr_14912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7342__auto__);
});})(c__7340__auto__,map__14892,map__14892__$1,opts,on_cssload))
);

return c__7340__auto__;
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