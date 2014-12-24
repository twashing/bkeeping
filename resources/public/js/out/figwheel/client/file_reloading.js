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
figwheel.client.file_reloading.reload_host = (function reload_host(p__21328){
var map__21330 = p__21328;
var map__21330__$1 = ((cljs.core.seq_QMARK_.call(null,map__21330))?cljs.core.apply.call(null,cljs.core.hash_map,map__21330):map__21330);
var websocket_url = cljs.core.get.call(null,map__21330__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__21331,callback){
var map__21333 = p__21331;
var map__21333__$1 = ((cljs.core.seq_QMARK_.call(null,map__21333))?cljs.core.apply.call(null,cljs.core.hash_map,map__21333):map__21333);
var msg = map__21333__$1;
var meta_data = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__21333,map__21333__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__21333,map__21333__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__21334,p__21335){
var map__21338 = p__21334;
var map__21338__$1 = ((cljs.core.seq_QMARK_.call(null,map__21338))?cljs.core.apply.call(null,cljs.core.hash_map,map__21338):map__21338);
var opts = map__21338__$1;
var url_rewriter = cljs.core.get.call(null,map__21338__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21339 = p__21335;
var map__21339__$1 = ((cljs.core.seq_QMARK_.call(null,map__21339))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);
var d = map__21339__$1;
var file = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__21341,p__21342){
var map__21396 = p__21341;
var map__21396__$1 = ((cljs.core.seq_QMARK_.call(null,map__21396))?cljs.core.apply.call(null,cljs.core.hash_map,map__21396):map__21396);
var opts = map__21396__$1;
var on_jsload = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21397 = p__21342;
var map__21397__$1 = ((cljs.core.seq_QMARK_.call(null,map__21397))?cljs.core.apply.call(null,cljs.core.hash_map,map__21397):map__21397);
var msg = map__21397__$1;
var files = cljs.core.get.call(null,map__21397__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files){
return (function (state_21427){
var state_val_21428 = (state_21427[(1)]);
if((state_val_21428 === (8))){
var inst_21425 = (state_21427[(2)]);
var state_21427__$1 = state_21427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21427__$1,inst_21425);
} else {
if((state_val_21428 === (7))){
var state_21427__$1 = state_21427;
var statearr_21429_21449 = state_21427__$1;
(statearr_21429_21449[(2)] = null);

(statearr_21429_21449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (6))){
var inst_21405 = (state_21427[(7)]);
var inst_21419 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_21420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21405);
var inst_21421 = cljs.core.pr_str.call(null,inst_21420);
var inst_21422 = console.log("not required:",inst_21421);
var state_21427__$1 = (function (){var statearr_21430 = state_21427;
(statearr_21430[(8)] = inst_21419);

return statearr_21430;
})();
var statearr_21431_21450 = state_21427__$1;
(statearr_21431_21450[(2)] = inst_21422);

(statearr_21431_21450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (5))){
var inst_21405 = (state_21427[(7)]);
var inst_21416 = (state_21427[(2)]);
var inst_21417 = cljs.core.not_empty.call(null,inst_21405);
var state_21427__$1 = (function (){var statearr_21432 = state_21427;
(statearr_21432[(9)] = inst_21416);

return statearr_21432;
})();
if(cljs.core.truth_(inst_21417)){
var statearr_21433_21451 = state_21427__$1;
(statearr_21433_21451[(1)] = (6));

} else {
var statearr_21434_21452 = state_21427__$1;
(statearr_21434_21452[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (4))){
var state_21427__$1 = state_21427;
var statearr_21435_21453 = state_21427__$1;
(statearr_21435_21453[(2)] = null);

(statearr_21435_21453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (3))){
var inst_21399 = (state_21427[(10)]);
var inst_21402 = (state_21427[(11)]);
var inst_21405 = (state_21427[(7)]);
var inst_21403 = (state_21427[(12)]);
var inst_21408 = console.debug("Figwheel: loaded these files");
var inst_21409 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21403);
var inst_21410 = cljs.core.pr_str.call(null,inst_21409);
var inst_21411 = console.log(inst_21410);
var inst_21412 = (function (){var files_not_loaded = inst_21405;
var res = inst_21403;
var res_SINGLEQUOTE_ = inst_21402;
var files_SINGLEQUOTE_ = inst_21399;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_21399,inst_21402,inst_21405,inst_21403,inst_21408,inst_21409,inst_21410,inst_21411,state_val_21428,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_21399,inst_21402,inst_21405,inst_21403,inst_21408,inst_21409,inst_21410,inst_21411,state_val_21428,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files))
})();
var inst_21413 = setTimeout(inst_21412,(10));
var state_21427__$1 = (function (){var statearr_21436 = state_21427;
(statearr_21436[(13)] = inst_21411);

(statearr_21436[(14)] = inst_21408);

return statearr_21436;
})();
var statearr_21437_21454 = state_21427__$1;
(statearr_21437_21454[(2)] = inst_21413);

(statearr_21437_21454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (2))){
var inst_21399 = (state_21427[(10)]);
var inst_21402 = (state_21427[(11)]);
var inst_21403 = (state_21427[(12)]);
var inst_21402__$1 = (state_21427[(2)]);
var inst_21403__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21402__$1);
var inst_21404 = (function (){var res = inst_21403__$1;
var res_SINGLEQUOTE_ = inst_21402__$1;
var files_SINGLEQUOTE_ = inst_21399;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_21399,inst_21402,inst_21403,inst_21402__$1,inst_21403__$1,state_val_21428,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files){
return (function (p1__21340_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21340_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_21399,inst_21402,inst_21403,inst_21402__$1,inst_21403__$1,state_val_21428,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files))
})();
var inst_21405 = cljs.core.filter.call(null,inst_21404,inst_21402__$1);
var inst_21406 = cljs.core.not_empty.call(null,inst_21403__$1);
var state_21427__$1 = (function (){var statearr_21438 = state_21427;
(statearr_21438[(11)] = inst_21402__$1);

(statearr_21438[(7)] = inst_21405);

(statearr_21438[(12)] = inst_21403__$1);

return statearr_21438;
})();
if(cljs.core.truth_(inst_21406)){
var statearr_21439_21455 = state_21427__$1;
(statearr_21439_21455[(1)] = (3));

} else {
var statearr_21440_21456 = state_21427__$1;
(statearr_21440_21456[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21428 === (1))){
var inst_21399 = (state_21427[(10)]);
var inst_21398 = before_jsload.call(null,files);
var inst_21399__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_21400 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21399__$1);
var state_21427__$1 = (function (){var statearr_21441 = state_21427;
(statearr_21441[(15)] = inst_21398);

(statearr_21441[(10)] = inst_21399__$1);

return statearr_21441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21427__$1,(2),inst_21400);
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
});})(c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files))
;
return ((function (switch__15176__auto__,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21445[(0)] = state_machine__15177__auto__);

(statearr_21445[(1)] = (1));

return statearr_21445;
});
var state_machine__15177__auto____1 = (function (state_21427){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21446){if((e21446 instanceof Object)){
var ex__15180__auto__ = e21446;
var statearr_21447_21457 = state_21427;
(statearr_21447_21457[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21458 = state_21427;
state_21427 = G__21458;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21427){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files))
})();
var state__15234__auto__ = (function (){var statearr_21448 = f__15233__auto__.call(null);
(statearr_21448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__,map__21396,map__21396__$1,opts,on_jsload,before_jsload,map__21397,map__21397__$1,msg,files))
);

return c__15232__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__21459,link_href){
var map__21461 = p__21459;
var map__21461__$1 = ((cljs.core.seq_QMARK_.call(null,map__21461))?cljs.core.apply.call(null,cljs.core.hash_map,map__21461):map__21461);
var request_url = cljs.core.get.call(null,map__21461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__,parent){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__,parent){
return (function (state_21482){
var state_val_21483 = (state_21482[(1)]);
if((state_val_21483 === (2))){
var inst_21479 = (state_21482[(2)]);
var inst_21480 = parent.removeChild(orig_link);
var state_21482__$1 = (function (){var statearr_21484 = state_21482;
(statearr_21484[(7)] = inst_21479);

return statearr_21484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21482__$1,inst_21480);
} else {
if((state_val_21483 === (1))){
var inst_21477 = cljs.core.async.timeout.call(null,(200));
var state_21482__$1 = state_21482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21482__$1,(2),inst_21477);
} else {
return null;
}
}
});})(c__15232__auto__,parent))
;
return ((function (switch__15176__auto__,c__15232__auto__,parent){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21488 = [null,null,null,null,null,null,null,null];
(statearr_21488[(0)] = state_machine__15177__auto__);

(statearr_21488[(1)] = (1));

return statearr_21488;
});
var state_machine__15177__auto____1 = (function (state_21482){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21489){if((e21489 instanceof Object)){
var ex__15180__auto__ = e21489;
var statearr_21490_21492 = state_21482;
(statearr_21490_21492[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21493 = state_21482;
state_21482 = G__21493;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21482){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__,parent))
})();
var state__15234__auto__ = (function (){var statearr_21491 = f__15233__auto__.call(null);
(statearr_21491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__,parent))
);

return c__15232__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__21494){
var map__21496 = p__21494;
var map__21496__$1 = ((cljs.core.seq_QMARK_.call(null,map__21496))?cljs.core.apply.call(null,cljs.core.hash_map,map__21496):map__21496);
var f_data = map__21496__$1;
var request_url = cljs.core.get.call(null,map__21496__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__21497,files_msg){
var map__21519 = p__21497;
var map__21519__$1 = ((cljs.core.seq_QMARK_.call(null,map__21519))?cljs.core.apply.call(null,cljs.core.hash_map,map__21519):map__21519);
var opts = map__21519__$1;
var on_cssload = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__21520_21540 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21521_21541 = null;
var count__21522_21542 = (0);
var i__21523_21543 = (0);
while(true){
if((i__21523_21543 < count__21522_21542)){
var f_21544 = cljs.core._nth.call(null,chunk__21521_21541,i__21523_21543);
figwheel.client.file_reloading.reload_css_file.call(null,f_21544);

var G__21545 = seq__21520_21540;
var G__21546 = chunk__21521_21541;
var G__21547 = count__21522_21542;
var G__21548 = (i__21523_21543 + (1));
seq__21520_21540 = G__21545;
chunk__21521_21541 = G__21546;
count__21522_21542 = G__21547;
i__21523_21543 = G__21548;
continue;
} else {
var temp__4126__auto___21549 = cljs.core.seq.call(null,seq__21520_21540);
if(temp__4126__auto___21549){
var seq__21520_21550__$1 = temp__4126__auto___21549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21520_21550__$1)){
var c__13332__auto___21551 = cljs.core.chunk_first.call(null,seq__21520_21550__$1);
var G__21552 = cljs.core.chunk_rest.call(null,seq__21520_21550__$1);
var G__21553 = c__13332__auto___21551;
var G__21554 = cljs.core.count.call(null,c__13332__auto___21551);
var G__21555 = (0);
seq__21520_21540 = G__21552;
chunk__21521_21541 = G__21553;
count__21522_21542 = G__21554;
i__21523_21543 = G__21555;
continue;
} else {
var f_21556 = cljs.core.first.call(null,seq__21520_21550__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21556);

var G__21557 = cljs.core.next.call(null,seq__21520_21550__$1);
var G__21558 = null;
var G__21559 = (0);
var G__21560 = (0);
seq__21520_21540 = G__21557;
chunk__21521_21541 = G__21558;
count__21522_21542 = G__21559;
i__21523_21543 = G__21560;
continue;
}
} else {
}
}
break;
}

var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload){
return (function (state_21530){
var state_val_21531 = (state_21530[(1)]);
if((state_val_21531 === (2))){
var inst_21526 = (state_21530[(2)]);
var inst_21527 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21528 = on_cssload.call(null,inst_21527);
var state_21530__$1 = (function (){var statearr_21532 = state_21530;
(statearr_21532[(7)] = inst_21526);

return statearr_21532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21530__$1,inst_21528);
} else {
if((state_val_21531 === (1))){
var inst_21524 = cljs.core.async.timeout.call(null,(100));
var state_21530__$1 = state_21530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21530__$1,(2),inst_21524);
} else {
return null;
}
}
});})(c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload))
;
return ((function (switch__15176__auto__,c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21536 = [null,null,null,null,null,null,null,null];
(statearr_21536[(0)] = state_machine__15177__auto__);

(statearr_21536[(1)] = (1));

return statearr_21536;
});
var state_machine__15177__auto____1 = (function (state_21530){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21537){if((e21537 instanceof Object)){
var ex__15180__auto__ = e21537;
var statearr_21538_21561 = state_21530;
(statearr_21538_21561[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21562 = state_21530;
state_21530 = G__21562;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21530){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload))
})();
var state__15234__auto__ = (function (){var statearr_21539 = f__15233__auto__.call(null);
(statearr_21539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__,map__21519,map__21519__$1,opts,on_cssload))
);

return c__15232__auto__;
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