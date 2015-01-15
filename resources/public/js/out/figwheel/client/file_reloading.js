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
figwheel.client.file_reloading.reload_host = (function reload_host(p__14720){
var map__14722 = p__14720;
var map__14722__$1 = ((cljs.core.seq_QMARK_.call(null,map__14722))?cljs.core.apply.call(null,cljs.core.hash_map,map__14722):map__14722);
var websocket_url = cljs.core.get.call(null,map__14722__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__14723,callback){
var map__14725 = p__14723;
var map__14725__$1 = ((cljs.core.seq_QMARK_.call(null,map__14725))?cljs.core.apply.call(null,cljs.core.hash_map,map__14725):map__14725);
var msg = map__14725__$1;
var meta_data = cljs.core.get.call(null,map__14725__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__14725__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__14725__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__14725__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__14725,map__14725__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__14725,map__14725__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__14726,p__14727){
var map__14730 = p__14726;
var map__14730__$1 = ((cljs.core.seq_QMARK_.call(null,map__14730))?cljs.core.apply.call(null,cljs.core.hash_map,map__14730):map__14730);
var opts = map__14730__$1;
var url_rewriter = cljs.core.get.call(null,map__14730__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14731 = p__14727;
var map__14731__$1 = ((cljs.core.seq_QMARK_.call(null,map__14731))?cljs.core.apply.call(null,cljs.core.hash_map,map__14731):map__14731);
var d = map__14731__$1;
var file = cljs.core.get.call(null,map__14731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__14733,p__14734){
var map__14788 = p__14733;
var map__14788__$1 = ((cljs.core.seq_QMARK_.call(null,map__14788))?cljs.core.apply.call(null,cljs.core.hash_map,map__14788):map__14788);
var opts = map__14788__$1;
var on_jsload = cljs.core.get.call(null,map__14788__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__14788__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__14789 = p__14734;
var map__14789__$1 = ((cljs.core.seq_QMARK_.call(null,map__14789))?cljs.core.apply.call(null,cljs.core.hash_map,map__14789):map__14789);
var msg = map__14789__$1;
var files = cljs.core.get.call(null,map__14789__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files){
return (function (state_14819){
var state_val_14820 = (state_14819[(1)]);
if((state_val_14820 === (8))){
var inst_14817 = (state_14819[(2)]);
var state_14819__$1 = state_14819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14819__$1,inst_14817);
} else {
if((state_val_14820 === (7))){
var state_14819__$1 = state_14819;
var statearr_14821_14841 = state_14819__$1;
(statearr_14821_14841[(2)] = null);

(statearr_14821_14841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (6))){
var inst_14797 = (state_14819[(7)]);
var inst_14811 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_14812 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14797);
var inst_14813 = cljs.core.pr_str.call(null,inst_14812);
var inst_14814 = console.log("not required:",inst_14813);
var state_14819__$1 = (function (){var statearr_14822 = state_14819;
(statearr_14822[(8)] = inst_14811);

return statearr_14822;
})();
var statearr_14823_14842 = state_14819__$1;
(statearr_14823_14842[(2)] = inst_14814);

(statearr_14823_14842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (5))){
var inst_14797 = (state_14819[(7)]);
var inst_14808 = (state_14819[(2)]);
var inst_14809 = cljs.core.not_empty.call(null,inst_14797);
var state_14819__$1 = (function (){var statearr_14824 = state_14819;
(statearr_14824[(9)] = inst_14808);

return statearr_14824;
})();
if(cljs.core.truth_(inst_14809)){
var statearr_14825_14843 = state_14819__$1;
(statearr_14825_14843[(1)] = (6));

} else {
var statearr_14826_14844 = state_14819__$1;
(statearr_14826_14844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (4))){
var state_14819__$1 = state_14819;
var statearr_14827_14845 = state_14819__$1;
(statearr_14827_14845[(2)] = null);

(statearr_14827_14845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (3))){
var inst_14797 = (state_14819[(7)]);
var inst_14791 = (state_14819[(10)]);
var inst_14795 = (state_14819[(11)]);
var inst_14794 = (state_14819[(12)]);
var inst_14800 = console.debug("Figwheel: loaded these files");
var inst_14801 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14795);
var inst_14802 = cljs.core.pr_str.call(null,inst_14801);
var inst_14803 = console.log(inst_14802);
var inst_14804 = (function (){var files_not_loaded = inst_14797;
var res = inst_14795;
var res_SINGLEQUOTE_ = inst_14794;
var files_SINGLEQUOTE_ = inst_14791;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14797,inst_14791,inst_14795,inst_14794,inst_14800,inst_14801,inst_14802,inst_14803,state_val_14820,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14797,inst_14791,inst_14795,inst_14794,inst_14800,inst_14801,inst_14802,inst_14803,state_val_14820,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files))
})();
var inst_14805 = setTimeout(inst_14804,(10));
var state_14819__$1 = (function (){var statearr_14828 = state_14819;
(statearr_14828[(13)] = inst_14803);

(statearr_14828[(14)] = inst_14800);

return statearr_14828;
})();
var statearr_14829_14846 = state_14819__$1;
(statearr_14829_14846[(2)] = inst_14805);

(statearr_14829_14846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (2))){
var inst_14791 = (state_14819[(10)]);
var inst_14795 = (state_14819[(11)]);
var inst_14794 = (state_14819[(12)]);
var inst_14794__$1 = (state_14819[(2)]);
var inst_14795__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14794__$1);
var inst_14796 = (function (){var res = inst_14795__$1;
var res_SINGLEQUOTE_ = inst_14794__$1;
var files_SINGLEQUOTE_ = inst_14791;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14791,inst_14795,inst_14794,inst_14794__$1,inst_14795__$1,state_val_14820,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files){
return (function (p1__14732_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14732_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_14791,inst_14795,inst_14794,inst_14794__$1,inst_14795__$1,state_val_14820,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files))
})();
var inst_14797 = cljs.core.filter.call(null,inst_14796,inst_14794__$1);
var inst_14798 = cljs.core.not_empty.call(null,inst_14795__$1);
var state_14819__$1 = (function (){var statearr_14830 = state_14819;
(statearr_14830[(7)] = inst_14797);

(statearr_14830[(11)] = inst_14795__$1);

(statearr_14830[(12)] = inst_14794__$1);

return statearr_14830;
})();
if(cljs.core.truth_(inst_14798)){
var statearr_14831_14847 = state_14819__$1;
(statearr_14831_14847[(1)] = (3));

} else {
var statearr_14832_14848 = state_14819__$1;
(statearr_14832_14848[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14820 === (1))){
var inst_14791 = (state_14819[(10)]);
var inst_14790 = before_jsload.call(null,files);
var inst_14791__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_14792 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14791__$1);
var state_14819__$1 = (function (){var statearr_14833 = state_14819;
(statearr_14833[(10)] = inst_14791__$1);

(statearr_14833[(15)] = inst_14790);

return statearr_14833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14819__$1,(2),inst_14792);
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
});})(c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files))
;
return ((function (switch__7245__auto__,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14837[(0)] = state_machine__7246__auto__);

(statearr_14837[(1)] = (1));

return statearr_14837;
});
var state_machine__7246__auto____1 = (function (state_14819){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14838){if((e14838 instanceof Object)){
var ex__7249__auto__ = e14838;
var statearr_14839_14849 = state_14819;
(statearr_14839_14849[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14850 = state_14819;
state_14819 = G__14850;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14819){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files))
})();
var state__7303__auto__ = (function (){var statearr_14840 = f__7302__auto__.call(null);
(statearr_14840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_14840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__,map__14788,map__14788__$1,opts,on_jsload,before_jsload,map__14789,map__14789__$1,msg,files))
);

return c__7301__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__14851,link_href){
var map__14853 = p__14851;
var map__14853__$1 = ((cljs.core.seq_QMARK_.call(null,map__14853))?cljs.core.apply.call(null,cljs.core.hash_map,map__14853):map__14853);
var request_url = cljs.core.get.call(null,map__14853__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__,parent){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__,parent){
return (function (state_14874){
var state_val_14875 = (state_14874[(1)]);
if((state_val_14875 === (2))){
var inst_14871 = (state_14874[(2)]);
var inst_14872 = parent.removeChild(orig_link);
var state_14874__$1 = (function (){var statearr_14876 = state_14874;
(statearr_14876[(7)] = inst_14871);

return statearr_14876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14874__$1,inst_14872);
} else {
if((state_val_14875 === (1))){
var inst_14869 = cljs.core.async.timeout.call(null,(200));
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14874__$1,(2),inst_14869);
} else {
return null;
}
}
});})(c__7301__auto__,parent))
;
return ((function (switch__7245__auto__,c__7301__auto__,parent){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14880 = [null,null,null,null,null,null,null,null];
(statearr_14880[(0)] = state_machine__7246__auto__);

(statearr_14880[(1)] = (1));

return statearr_14880;
});
var state_machine__7246__auto____1 = (function (state_14874){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14881){if((e14881 instanceof Object)){
var ex__7249__auto__ = e14881;
var statearr_14882_14884 = state_14874;
(statearr_14882_14884[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14885 = state_14874;
state_14874 = G__14885;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__,parent))
})();
var state__7303__auto__ = (function (){var statearr_14883 = f__7302__auto__.call(null);
(statearr_14883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_14883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__,parent))
);

return c__7301__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__14886){
var map__14888 = p__14886;
var map__14888__$1 = ((cljs.core.seq_QMARK_.call(null,map__14888))?cljs.core.apply.call(null,cljs.core.hash_map,map__14888):map__14888);
var f_data = map__14888__$1;
var request_url = cljs.core.get.call(null,map__14888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__14888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__14889,files_msg){
var map__14911 = p__14889;
var map__14911__$1 = ((cljs.core.seq_QMARK_.call(null,map__14911))?cljs.core.apply.call(null,cljs.core.hash_map,map__14911):map__14911);
var opts = map__14911__$1;
var on_cssload = cljs.core.get.call(null,map__14911__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__14912_14932 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__14913_14933 = null;
var count__14914_14934 = (0);
var i__14915_14935 = (0);
while(true){
if((i__14915_14935 < count__14914_14934)){
var f_14936 = cljs.core._nth.call(null,chunk__14913_14933,i__14915_14935);
figwheel.client.file_reloading.reload_css_file.call(null,f_14936);

var G__14937 = seq__14912_14932;
var G__14938 = chunk__14913_14933;
var G__14939 = count__14914_14934;
var G__14940 = (i__14915_14935 + (1));
seq__14912_14932 = G__14937;
chunk__14913_14933 = G__14938;
count__14914_14934 = G__14939;
i__14915_14935 = G__14940;
continue;
} else {
var temp__4126__auto___14941 = cljs.core.seq.call(null,seq__14912_14932);
if(temp__4126__auto___14941){
var seq__14912_14942__$1 = temp__4126__auto___14941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14912_14942__$1)){
var c__4409__auto___14943 = cljs.core.chunk_first.call(null,seq__14912_14942__$1);
var G__14944 = cljs.core.chunk_rest.call(null,seq__14912_14942__$1);
var G__14945 = c__4409__auto___14943;
var G__14946 = cljs.core.count.call(null,c__4409__auto___14943);
var G__14947 = (0);
seq__14912_14932 = G__14944;
chunk__14913_14933 = G__14945;
count__14914_14934 = G__14946;
i__14915_14935 = G__14947;
continue;
} else {
var f_14948 = cljs.core.first.call(null,seq__14912_14942__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_14948);

var G__14949 = cljs.core.next.call(null,seq__14912_14942__$1);
var G__14950 = null;
var G__14951 = (0);
var G__14952 = (0);
seq__14912_14932 = G__14949;
chunk__14913_14933 = G__14950;
count__14914_14934 = G__14951;
i__14915_14935 = G__14952;
continue;
}
} else {
}
}
break;
}

var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload){
return (function (state_14922){
var state_val_14923 = (state_14922[(1)]);
if((state_val_14923 === (2))){
var inst_14918 = (state_14922[(2)]);
var inst_14919 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_14920 = on_cssload.call(null,inst_14919);
var state_14922__$1 = (function (){var statearr_14924 = state_14922;
(statearr_14924[(7)] = inst_14918);

return statearr_14924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14922__$1,inst_14920);
} else {
if((state_val_14923 === (1))){
var inst_14916 = cljs.core.async.timeout.call(null,(100));
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14922__$1,(2),inst_14916);
} else {
return null;
}
}
});})(c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload))
;
return ((function (switch__7245__auto__,c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_14928 = [null,null,null,null,null,null,null,null];
(statearr_14928[(0)] = state_machine__7246__auto__);

(statearr_14928[(1)] = (1));

return statearr_14928;
});
var state_machine__7246__auto____1 = (function (state_14922){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_14922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e14929){if((e14929 instanceof Object)){
var ex__7249__auto__ = e14929;
var statearr_14930_14953 = state_14922;
(statearr_14930_14953[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14954 = state_14922;
state_14922 = G__14954;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_14922){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_14922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload))
})();
var state__7303__auto__ = (function (){var statearr_14931 = f__7302__auto__.call(null);
(statearr_14931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_14931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__,map__14911,map__14911__$1,opts,on_cssload))
);

return c__7301__auto__;
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