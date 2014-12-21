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
figwheel.client.file_reloading.reload_host = (function reload_host(p__22558){
var map__22560 = p__22558;
var map__22560__$1 = ((cljs.core.seq_QMARK_.call(null,map__22560))?cljs.core.apply.call(null,cljs.core.hash_map,map__22560):map__22560);
var websocket_url = cljs.core.get.call(null,map__22560__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__22561,callback){
var map__22563 = p__22561;
var map__22563__$1 = ((cljs.core.seq_QMARK_.call(null,map__22563))?cljs.core.apply.call(null,cljs.core.hash_map,map__22563):map__22563);
var msg = map__22563__$1;
var meta_data = cljs.core.get.call(null,map__22563__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__22563__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__22563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__22563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12533__auto__ = (function (){var or__12545__auto__ = dependency_file;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (function (){var and__12533__auto__ = meta_data;
if(cljs.core.truth_(and__12533__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12533__auto__;
}
})();
if(cljs.core.truth_(or__12545__auto____$1)){
return or__12545__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12533__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12545__auto__ = meta_data;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12533__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__22563,map__22563__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__22563,map__22563__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__22564,p__22565){
var map__22568 = p__22564;
var map__22568__$1 = ((cljs.core.seq_QMARK_.call(null,map__22568))?cljs.core.apply.call(null,cljs.core.hash_map,map__22568):map__22568);
var opts = map__22568__$1;
var url_rewriter = cljs.core.get.call(null,map__22568__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__22569 = p__22565;
var map__22569__$1 = ((cljs.core.seq_QMARK_.call(null,map__22569))?cljs.core.apply.call(null,cljs.core.hash_map,map__22569):map__22569);
var d = map__22569__$1;
var file = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__22571,p__22572){
var map__22626 = p__22571;
var map__22626__$1 = ((cljs.core.seq_QMARK_.call(null,map__22626))?cljs.core.apply.call(null,cljs.core.hash_map,map__22626):map__22626);
var opts = map__22626__$1;
var on_jsload = cljs.core.get.call(null,map__22626__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__22626__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__22627 = p__22572;
var map__22627__$1 = ((cljs.core.seq_QMARK_.call(null,map__22627))?cljs.core.apply.call(null,cljs.core.hash_map,map__22627):map__22627);
var msg = map__22627__$1;
var files = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files){
return (function (state_22657){
var state_val_22658 = (state_22657[(1)]);
if((state_val_22658 === (8))){
var inst_22655 = (state_22657[(2)]);
var state_22657__$1 = state_22657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22657__$1,inst_22655);
} else {
if((state_val_22658 === (7))){
var state_22657__$1 = state_22657;
var statearr_22659_22679 = state_22657__$1;
(statearr_22659_22679[(2)] = null);

(statearr_22659_22679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (6))){
var inst_22635 = (state_22657[(7)]);
var inst_22649 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_22650 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22635);
var inst_22651 = cljs.core.pr_str.call(null,inst_22650);
var inst_22652 = console.log("not required:",inst_22651);
var state_22657__$1 = (function (){var statearr_22660 = state_22657;
(statearr_22660[(8)] = inst_22649);

return statearr_22660;
})();
var statearr_22661_22680 = state_22657__$1;
(statearr_22661_22680[(2)] = inst_22652);

(statearr_22661_22680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (5))){
var inst_22635 = (state_22657[(7)]);
var inst_22646 = (state_22657[(2)]);
var inst_22647 = cljs.core.not_empty.call(null,inst_22635);
var state_22657__$1 = (function (){var statearr_22662 = state_22657;
(statearr_22662[(9)] = inst_22646);

return statearr_22662;
})();
if(cljs.core.truth_(inst_22647)){
var statearr_22663_22681 = state_22657__$1;
(statearr_22663_22681[(1)] = (6));

} else {
var statearr_22664_22682 = state_22657__$1;
(statearr_22664_22682[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (4))){
var state_22657__$1 = state_22657;
var statearr_22665_22683 = state_22657__$1;
(statearr_22665_22683[(2)] = null);

(statearr_22665_22683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (3))){
var inst_22629 = (state_22657[(10)]);
var inst_22635 = (state_22657[(7)]);
var inst_22632 = (state_22657[(11)]);
var inst_22633 = (state_22657[(12)]);
var inst_22638 = console.debug("Figwheel: loaded these files");
var inst_22639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22633);
var inst_22640 = cljs.core.pr_str.call(null,inst_22639);
var inst_22641 = console.log(inst_22640);
var inst_22642 = (function (){var files_not_loaded = inst_22635;
var res = inst_22633;
var res_SINGLEQUOTE_ = inst_22632;
var files_SINGLEQUOTE_ = inst_22629;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_22629,inst_22635,inst_22632,inst_22633,inst_22638,inst_22639,inst_22640,inst_22641,state_val_22658,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_22629,inst_22635,inst_22632,inst_22633,inst_22638,inst_22639,inst_22640,inst_22641,state_val_22658,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files))
})();
var inst_22643 = setTimeout(inst_22642,(10));
var state_22657__$1 = (function (){var statearr_22666 = state_22657;
(statearr_22666[(13)] = inst_22638);

(statearr_22666[(14)] = inst_22641);

return statearr_22666;
})();
var statearr_22667_22684 = state_22657__$1;
(statearr_22667_22684[(2)] = inst_22643);

(statearr_22667_22684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (2))){
var inst_22629 = (state_22657[(10)]);
var inst_22632 = (state_22657[(11)]);
var inst_22633 = (state_22657[(12)]);
var inst_22632__$1 = (state_22657[(2)]);
var inst_22633__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22632__$1);
var inst_22634 = (function (){var res = inst_22633__$1;
var res_SINGLEQUOTE_ = inst_22632__$1;
var files_SINGLEQUOTE_ = inst_22629;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_22629,inst_22632,inst_22633,inst_22632__$1,inst_22633__$1,state_val_22658,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files){
return (function (p1__22570_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22570_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_22629,inst_22632,inst_22633,inst_22632__$1,inst_22633__$1,state_val_22658,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files))
})();
var inst_22635 = cljs.core.filter.call(null,inst_22634,inst_22632__$1);
var inst_22636 = cljs.core.not_empty.call(null,inst_22633__$1);
var state_22657__$1 = (function (){var statearr_22668 = state_22657;
(statearr_22668[(7)] = inst_22635);

(statearr_22668[(11)] = inst_22632__$1);

(statearr_22668[(12)] = inst_22633__$1);

return statearr_22668;
})();
if(cljs.core.truth_(inst_22636)){
var statearr_22669_22685 = state_22657__$1;
(statearr_22669_22685[(1)] = (3));

} else {
var statearr_22670_22686 = state_22657__$1;
(statearr_22670_22686[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (1))){
var inst_22629 = (state_22657[(10)]);
var inst_22628 = before_jsload.call(null,files);
var inst_22629__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_22630 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22629__$1);
var state_22657__$1 = (function (){var statearr_22671 = state_22657;
(statearr_22671[(10)] = inst_22629__$1);

(statearr_22671[(15)] = inst_22628);

return statearr_22671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22657__$1,(2),inst_22630);
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
});})(c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files))
;
return ((function (switch__16796__auto__,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22675[(0)] = state_machine__16797__auto__);

(statearr_22675[(1)] = (1));

return statearr_22675;
});
var state_machine__16797__auto____1 = (function (state_22657){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22676){if((e22676 instanceof Object)){
var ex__16800__auto__ = e22676;
var statearr_22677_22687 = state_22657;
(statearr_22677_22687[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22688 = state_22657;
state_22657 = G__22688;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22657){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files))
})();
var state__16854__auto__ = (function (){var statearr_22678 = f__16853__auto__.call(null);
(statearr_22678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__,map__22626,map__22626__$1,opts,on_jsload,before_jsload,map__22627,map__22627__$1,msg,files))
);

return c__16852__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__22689,link_href){
var map__22691 = p__22689;
var map__22691__$1 = ((cljs.core.seq_QMARK_.call(null,map__22691))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var request_url = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__,parent){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__,parent){
return (function (state_22712){
var state_val_22713 = (state_22712[(1)]);
if((state_val_22713 === (2))){
var inst_22709 = (state_22712[(2)]);
var inst_22710 = parent.removeChild(orig_link);
var state_22712__$1 = (function (){var statearr_22714 = state_22712;
(statearr_22714[(7)] = inst_22709);

return statearr_22714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22712__$1,inst_22710);
} else {
if((state_val_22713 === (1))){
var inst_22707 = cljs.core.async.timeout.call(null,(200));
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(2),inst_22707);
} else {
return null;
}
}
});})(c__16852__auto__,parent))
;
return ((function (switch__16796__auto__,c__16852__auto__,parent){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22718 = [null,null,null,null,null,null,null,null];
(statearr_22718[(0)] = state_machine__16797__auto__);

(statearr_22718[(1)] = (1));

return statearr_22718;
});
var state_machine__16797__auto____1 = (function (state_22712){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22719){if((e22719 instanceof Object)){
var ex__16800__auto__ = e22719;
var statearr_22720_22722 = state_22712;
(statearr_22720_22722[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22723 = state_22712;
state_22712 = G__22723;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22712){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__,parent))
})();
var state__16854__auto__ = (function (){var statearr_22721 = f__16853__auto__.call(null);
(statearr_22721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__,parent))
);

return c__16852__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__22724){
var map__22726 = p__22724;
var map__22726__$1 = ((cljs.core.seq_QMARK_.call(null,map__22726))?cljs.core.apply.call(null,cljs.core.hash_map,map__22726):map__22726);
var f_data = map__22726__$1;
var request_url = cljs.core.get.call(null,map__22726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__22726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__22727,files_msg){
var map__22749 = p__22727;
var map__22749__$1 = ((cljs.core.seq_QMARK_.call(null,map__22749))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);
var opts = map__22749__$1;
var on_cssload = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__22750_22770 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22751_22771 = null;
var count__22752_22772 = (0);
var i__22753_22773 = (0);
while(true){
if((i__22753_22773 < count__22752_22772)){
var f_22774 = cljs.core._nth.call(null,chunk__22751_22771,i__22753_22773);
figwheel.client.file_reloading.reload_css_file.call(null,f_22774);

var G__22775 = seq__22750_22770;
var G__22776 = chunk__22751_22771;
var G__22777 = count__22752_22772;
var G__22778 = (i__22753_22773 + (1));
seq__22750_22770 = G__22775;
chunk__22751_22771 = G__22776;
count__22752_22772 = G__22777;
i__22753_22773 = G__22778;
continue;
} else {
var temp__4126__auto___22779 = cljs.core.seq.call(null,seq__22750_22770);
if(temp__4126__auto___22779){
var seq__22750_22780__$1 = temp__4126__auto___22779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22750_22780__$1)){
var c__13332__auto___22781 = cljs.core.chunk_first.call(null,seq__22750_22780__$1);
var G__22782 = cljs.core.chunk_rest.call(null,seq__22750_22780__$1);
var G__22783 = c__13332__auto___22781;
var G__22784 = cljs.core.count.call(null,c__13332__auto___22781);
var G__22785 = (0);
seq__22750_22770 = G__22782;
chunk__22751_22771 = G__22783;
count__22752_22772 = G__22784;
i__22753_22773 = G__22785;
continue;
} else {
var f_22786 = cljs.core.first.call(null,seq__22750_22780__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22786);

var G__22787 = cljs.core.next.call(null,seq__22750_22780__$1);
var G__22788 = null;
var G__22789 = (0);
var G__22790 = (0);
seq__22750_22770 = G__22787;
chunk__22751_22771 = G__22788;
count__22752_22772 = G__22789;
i__22753_22773 = G__22790;
continue;
}
} else {
}
}
break;
}

var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload){
return (function (state_22760){
var state_val_22761 = (state_22760[(1)]);
if((state_val_22761 === (2))){
var inst_22756 = (state_22760[(2)]);
var inst_22757 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_22758 = on_cssload.call(null,inst_22757);
var state_22760__$1 = (function (){var statearr_22762 = state_22760;
(statearr_22762[(7)] = inst_22756);

return statearr_22762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22760__$1,inst_22758);
} else {
if((state_val_22761 === (1))){
var inst_22754 = cljs.core.async.timeout.call(null,(100));
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22760__$1,(2),inst_22754);
} else {
return null;
}
}
});})(c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload))
;
return ((function (switch__16796__auto__,c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22766 = [null,null,null,null,null,null,null,null];
(statearr_22766[(0)] = state_machine__16797__auto__);

(statearr_22766[(1)] = (1));

return statearr_22766;
});
var state_machine__16797__auto____1 = (function (state_22760){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22767){if((e22767 instanceof Object)){
var ex__16800__auto__ = e22767;
var statearr_22768_22791 = state_22760;
(statearr_22768_22791[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22792 = state_22760;
state_22760 = G__22792;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22760){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload))
})();
var state__16854__auto__ = (function (){var statearr_22769 = f__16853__auto__.call(null);
(statearr_22769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__,map__22749,map__22749__$1,opts,on_cssload))
);

return c__16852__auto__;
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