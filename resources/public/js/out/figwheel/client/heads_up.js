// Compiled by ClojureScript 0.0-2505
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__22311_22319 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22312_22320 = null;
var count__22313_22321 = (0);
var i__22314_22322 = (0);
while(true){
if((i__22314_22322 < count__22313_22321)){
var k_22323 = cljs.core._nth.call(null,chunk__22312_22320,i__22314_22322);
e.setAttribute(cljs.core.name.call(null,k_22323),cljs.core.get.call(null,attrs,k_22323));

var G__22324 = seq__22311_22319;
var G__22325 = chunk__22312_22320;
var G__22326 = count__22313_22321;
var G__22327 = (i__22314_22322 + (1));
seq__22311_22319 = G__22324;
chunk__22312_22320 = G__22325;
count__22313_22321 = G__22326;
i__22314_22322 = G__22327;
continue;
} else {
var temp__4126__auto___22328 = cljs.core.seq.call(null,seq__22311_22319);
if(temp__4126__auto___22328){
var seq__22311_22329__$1 = temp__4126__auto___22328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22311_22329__$1)){
var c__13332__auto___22330 = cljs.core.chunk_first.call(null,seq__22311_22329__$1);
var G__22331 = cljs.core.chunk_rest.call(null,seq__22311_22329__$1);
var G__22332 = c__13332__auto___22330;
var G__22333 = cljs.core.count.call(null,c__13332__auto___22330);
var G__22334 = (0);
seq__22311_22319 = G__22331;
chunk__22312_22320 = G__22332;
count__22313_22321 = G__22333;
i__22314_22322 = G__22334;
continue;
} else {
var k_22335 = cljs.core.first.call(null,seq__22311_22329__$1);
e.setAttribute(cljs.core.name.call(null,k_22335),cljs.core.get.call(null,attrs,k_22335));

var G__22336 = cljs.core.next.call(null,seq__22311_22329__$1);
var G__22337 = null;
var G__22338 = (0);
var G__22339 = (0);
seq__22311_22319 = G__22336;
chunk__22312_22320 = G__22337;
count__22313_22321 = G__22338;
i__22314_22322 = G__22339;
continue;
}
} else {
}
}
break;
}

var seq__22315_22340 = cljs.core.seq.call(null,children);
var chunk__22316_22341 = null;
var count__22317_22342 = (0);
var i__22318_22343 = (0);
while(true){
if((i__22318_22343 < count__22317_22342)){
var ch_22344 = cljs.core._nth.call(null,chunk__22316_22341,i__22318_22343);
e.appendChild(ch_22344);

var G__22345 = seq__22315_22340;
var G__22346 = chunk__22316_22341;
var G__22347 = count__22317_22342;
var G__22348 = (i__22318_22343 + (1));
seq__22315_22340 = G__22345;
chunk__22316_22341 = G__22346;
count__22317_22342 = G__22347;
i__22318_22343 = G__22348;
continue;
} else {
var temp__4126__auto___22349 = cljs.core.seq.call(null,seq__22315_22340);
if(temp__4126__auto___22349){
var seq__22315_22350__$1 = temp__4126__auto___22349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22315_22350__$1)){
var c__13332__auto___22351 = cljs.core.chunk_first.call(null,seq__22315_22350__$1);
var G__22352 = cljs.core.chunk_rest.call(null,seq__22315_22350__$1);
var G__22353 = c__13332__auto___22351;
var G__22354 = cljs.core.count.call(null,c__13332__auto___22351);
var G__22355 = (0);
seq__22315_22340 = G__22352;
chunk__22316_22341 = G__22353;
count__22317_22342 = G__22354;
i__22318_22343 = G__22355;
continue;
} else {
var ch_22356 = cljs.core.first.call(null,seq__22315_22350__$1);
e.appendChild(ch_22356);

var G__22357 = cljs.core.next.call(null,seq__22315_22350__$1);
var G__22358 = null;
var G__22359 = (0);
var G__22360 = (0);
seq__22315_22340 = G__22357;
chunk__22316_22341 = G__22358;
count__22317_22342 = G__22359;
i__22318_22343 = G__22360;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__22361){
var t = cljs.core.first(arglist__22361);
arglist__22361 = cljs.core.next(arglist__22361);
var attrs = cljs.core.first(arglist__22361);
var children = cljs.core.rest(arglist__22361);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13446__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13442__auto__,prefer_table__13443__auto__,method_cache__13444__auto__,cached_hierarchy__13445__auto__,hierarchy__13446__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13442__auto__,prefer_table__13443__auto__,method_cache__13444__auto__,cached_hierarchy__13445__auto__,hierarchy__13446__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13446__auto__,method_table__13442__auto__,prefer_table__13443__auto__,method_cache__13444__auto__,cached_hierarchy__13445__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__22362,st_map){
var map__22366 = p__22362;
var map__22366__$1 = ((cljs.core.seq_QMARK_.call(null,map__22366))?cljs.core.apply.call(null,cljs.core.hash_map,map__22366):map__22366);
var container_el = cljs.core.get.call(null,map__22366__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22366,map__22366__$1,container_el){
return (function (p__22367){
var vec__22368 = p__22367;
var k = cljs.core.nth.call(null,vec__22368,(0),null);
var v = cljs.core.nth.call(null,vec__22368,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22366,map__22366__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__22369,dom_str){
var map__22371 = p__22369;
var map__22371__$1 = ((cljs.core.seq_QMARK_.call(null,map__22371))?cljs.core.apply.call(null,cljs.core.hash_map,map__22371):map__22371);
var c = map__22371__$1;
var content_area_el = cljs.core.get.call(null,map__22371__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__22372){
var map__22374 = p__22372;
var map__22374__$1 = ((cljs.core.seq_QMARK_.call(null,map__22374))?cljs.core.apply.call(null,cljs.core.hash_map,map__22374):map__22374);
var content_area_el = cljs.core.get.call(null,map__22374__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_22416){
var state_val_22417 = (state_22416[(1)]);
if((state_val_22417 === (2))){
var inst_22401 = (state_22416[(7)]);
var inst_22410 = (state_22416[(2)]);
var inst_22411 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22412 = ["auto"];
var inst_22413 = cljs.core.PersistentHashMap.fromArrays(inst_22411,inst_22412);
var inst_22414 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22401,inst_22413);
var state_22416__$1 = (function (){var statearr_22418 = state_22416;
(statearr_22418[(8)] = inst_22410);

return statearr_22418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22416__$1,inst_22414);
} else {
if((state_val_22417 === (1))){
var inst_22401 = (state_22416[(7)]);
var inst_22401__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22402 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22403 = ["10px","10px","100%","68px","1.0"];
var inst_22404 = cljs.core.PersistentHashMap.fromArrays(inst_22402,inst_22403);
var inst_22405 = cljs.core.merge.call(null,inst_22404,style);
var inst_22406 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22401__$1,inst_22405);
var inst_22407 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22401__$1,msg);
var inst_22408 = cljs.core.async.timeout.call(null,(300));
var state_22416__$1 = (function (){var statearr_22419 = state_22416;
(statearr_22419[(9)] = inst_22406);

(statearr_22419[(7)] = inst_22401__$1);

(statearr_22419[(10)] = inst_22407);

return statearr_22419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22416__$1,(2),inst_22408);
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
var statearr_22423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22423[(0)] = state_machine__16797__auto__);

(statearr_22423[(1)] = (1));

return statearr_22423;
});
var state_machine__16797__auto____1 = (function (state_22416){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22424){if((e22424 instanceof Object)){
var ex__16800__auto__ = e22424;
var statearr_22425_22427 = state_22416;
(statearr_22425_22427[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22428 = state_22416;
state_22416 = G__22428;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22416){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_22426 = f__16853__auto__.call(null);
(statearr_22426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22430 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__22430,(0),null);
var ln = cljs.core.nth.call(null,vec__22430,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__22433 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__22433,(0),null);
var file_line = cljs.core.nth.call(null,vec__22433,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22433,file_name,file_line){
return (function (p1__22431_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__22431_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__22433,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__22435 = figwheel.client.heads_up.ensure_container.call(null);
var map__22435__$1 = ((cljs.core.seq_QMARK_.call(null,map__22435))?cljs.core.apply.call(null,cljs.core.hash_map,map__22435):map__22435);
var content_area_el = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_22482){
var state_val_22483 = (state_22482[(1)]);
if((state_val_22483 === (3))){
var inst_22465 = (state_22482[(7)]);
var inst_22479 = (state_22482[(2)]);
var inst_22480 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22465,"");
var state_22482__$1 = (function (){var statearr_22484 = state_22482;
(statearr_22484[(8)] = inst_22479);

return statearr_22484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22482__$1,inst_22480);
} else {
if((state_val_22483 === (2))){
var inst_22465 = (state_22482[(7)]);
var inst_22472 = (state_22482[(2)]);
var inst_22473 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22474 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22475 = cljs.core.PersistentHashMap.fromArrays(inst_22473,inst_22474);
var inst_22476 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22465,inst_22475);
var inst_22477 = cljs.core.async.timeout.call(null,(200));
var state_22482__$1 = (function (){var statearr_22485 = state_22482;
(statearr_22485[(9)] = inst_22476);

(statearr_22485[(10)] = inst_22472);

return statearr_22485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22482__$1,(3),inst_22477);
} else {
if((state_val_22483 === (1))){
var inst_22465 = (state_22482[(7)]);
var inst_22465__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22466 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22467 = ["0.0"];
var inst_22468 = cljs.core.PersistentHashMap.fromArrays(inst_22466,inst_22467);
var inst_22469 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22465__$1,inst_22468);
var inst_22470 = cljs.core.async.timeout.call(null,(300));
var state_22482__$1 = (function (){var statearr_22486 = state_22482;
(statearr_22486[(7)] = inst_22465__$1);

(statearr_22486[(11)] = inst_22469);

return statearr_22486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22482__$1,(2),inst_22470);
} else {
return null;
}
}
}
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = state_machine__16797__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var state_machine__16797__auto____1 = (function (state_22482){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__16800__auto__ = e22491;
var statearr_22492_22494 = state_22482;
(statearr_22492_22494[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22495 = state_22482;
state_22482 = G__22495;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22482){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_22493 = f__16853__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_22527){
var state_val_22528 = (state_22527[(1)]);
if((state_val_22528 === (4))){
var inst_22525 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22527__$1,inst_22525);
} else {
if((state_val_22528 === (3))){
var inst_22522 = (state_22527[(2)]);
var inst_22523 = figwheel.client.heads_up.clear.call(null);
var state_22527__$1 = (function (){var statearr_22529 = state_22527;
(statearr_22529[(7)] = inst_22522);

return statearr_22529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(4),inst_22523);
} else {
if((state_val_22528 === (2))){
var inst_22519 = (state_22527[(2)]);
var inst_22520 = cljs.core.async.timeout.call(null,(400));
var state_22527__$1 = (function (){var statearr_22530 = state_22527;
(statearr_22530[(8)] = inst_22519);

return statearr_22530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(3),inst_22520);
} else {
if((state_val_22528 === (1))){
var inst_22517 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(2),inst_22517);
} else {
return null;
}
}
}
}
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22534 = [null,null,null,null,null,null,null,null,null];
(statearr_22534[(0)] = state_machine__16797__auto__);

(statearr_22534[(1)] = (1));

return statearr_22534;
});
var state_machine__16797__auto____1 = (function (state_22527){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22535){if((e22535 instanceof Object)){
var ex__16800__auto__ = e22535;
var statearr_22536_22538 = state_22527;
(statearr_22536_22538[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22539 = state_22527;
state_22527 = G__22539;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22527){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_22537 = f__16853__auto__.call(null);
(statearr_22537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_22537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map