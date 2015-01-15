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
var seq__14531_14539 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__14532_14540 = null;
var count__14533_14541 = (0);
var i__14534_14542 = (0);
while(true){
if((i__14534_14542 < count__14533_14541)){
var k_14543 = cljs.core._nth.call(null,chunk__14532_14540,i__14534_14542);
e.setAttribute(cljs.core.name.call(null,k_14543),cljs.core.get.call(null,attrs,k_14543));

var G__14544 = seq__14531_14539;
var G__14545 = chunk__14532_14540;
var G__14546 = count__14533_14541;
var G__14547 = (i__14534_14542 + (1));
seq__14531_14539 = G__14544;
chunk__14532_14540 = G__14545;
count__14533_14541 = G__14546;
i__14534_14542 = G__14547;
continue;
} else {
var temp__4126__auto___14548 = cljs.core.seq.call(null,seq__14531_14539);
if(temp__4126__auto___14548){
var seq__14531_14549__$1 = temp__4126__auto___14548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14531_14549__$1)){
var c__4409__auto___14550 = cljs.core.chunk_first.call(null,seq__14531_14549__$1);
var G__14551 = cljs.core.chunk_rest.call(null,seq__14531_14549__$1);
var G__14552 = c__4409__auto___14550;
var G__14553 = cljs.core.count.call(null,c__4409__auto___14550);
var G__14554 = (0);
seq__14531_14539 = G__14551;
chunk__14532_14540 = G__14552;
count__14533_14541 = G__14553;
i__14534_14542 = G__14554;
continue;
} else {
var k_14555 = cljs.core.first.call(null,seq__14531_14549__$1);
e.setAttribute(cljs.core.name.call(null,k_14555),cljs.core.get.call(null,attrs,k_14555));

var G__14556 = cljs.core.next.call(null,seq__14531_14549__$1);
var G__14557 = null;
var G__14558 = (0);
var G__14559 = (0);
seq__14531_14539 = G__14556;
chunk__14532_14540 = G__14557;
count__14533_14541 = G__14558;
i__14534_14542 = G__14559;
continue;
}
} else {
}
}
break;
}

var seq__14535_14560 = cljs.core.seq.call(null,children);
var chunk__14536_14561 = null;
var count__14537_14562 = (0);
var i__14538_14563 = (0);
while(true){
if((i__14538_14563 < count__14537_14562)){
var ch_14564 = cljs.core._nth.call(null,chunk__14536_14561,i__14538_14563);
e.appendChild(ch_14564);

var G__14565 = seq__14535_14560;
var G__14566 = chunk__14536_14561;
var G__14567 = count__14537_14562;
var G__14568 = (i__14538_14563 + (1));
seq__14535_14560 = G__14565;
chunk__14536_14561 = G__14566;
count__14537_14562 = G__14567;
i__14538_14563 = G__14568;
continue;
} else {
var temp__4126__auto___14569 = cljs.core.seq.call(null,seq__14535_14560);
if(temp__4126__auto___14569){
var seq__14535_14570__$1 = temp__4126__auto___14569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14535_14570__$1)){
var c__4409__auto___14571 = cljs.core.chunk_first.call(null,seq__14535_14570__$1);
var G__14572 = cljs.core.chunk_rest.call(null,seq__14535_14570__$1);
var G__14573 = c__4409__auto___14571;
var G__14574 = cljs.core.count.call(null,c__4409__auto___14571);
var G__14575 = (0);
seq__14535_14560 = G__14572;
chunk__14536_14561 = G__14573;
count__14537_14562 = G__14574;
i__14538_14563 = G__14575;
continue;
} else {
var ch_14576 = cljs.core.first.call(null,seq__14535_14570__$1);
e.appendChild(ch_14576);

var G__14577 = cljs.core.next.call(null,seq__14535_14570__$1);
var G__14578 = null;
var G__14579 = (0);
var G__14580 = (0);
seq__14535_14560 = G__14577;
chunk__14536_14561 = G__14578;
count__14537_14562 = G__14579;
i__14538_14563 = G__14580;
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
node.cljs$lang$applyTo = (function (arglist__14581){
var t = cljs.core.first(arglist__14581);
arglist__14581 = cljs.core.next(arglist__14581);
var attrs = cljs.core.first(arglist__14581);
var children = cljs.core.rest(arglist__14581);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4523__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4519__auto__,prefer_table__4520__auto__,method_cache__4521__auto__,cached_hierarchy__4522__auto__,hierarchy__4523__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4519__auto__,prefer_table__4520__auto__,method_cache__4521__auto__,cached_hierarchy__4522__auto__,hierarchy__4523__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4523__auto__,method_table__4519__auto__,prefer_table__4520__auto__,method_cache__4521__auto__,cached_hierarchy__4522__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__14582,st_map){
var map__14586 = p__14582;
var map__14586__$1 = ((cljs.core.seq_QMARK_.call(null,map__14586))?cljs.core.apply.call(null,cljs.core.hash_map,map__14586):map__14586);
var container_el = cljs.core.get.call(null,map__14586__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__14586,map__14586__$1,container_el){
return (function (p__14587){
var vec__14588 = p__14587;
var k = cljs.core.nth.call(null,vec__14588,(0),null);
var v = cljs.core.nth.call(null,vec__14588,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__14586,map__14586__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__14589,dom_str){
var map__14591 = p__14589;
var map__14591__$1 = ((cljs.core.seq_QMARK_.call(null,map__14591))?cljs.core.apply.call(null,cljs.core.hash_map,map__14591):map__14591);
var c = map__14591__$1;
var content_area_el = cljs.core.get.call(null,map__14591__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__14592){
var map__14594 = p__14592;
var map__14594__$1 = ((cljs.core.seq_QMARK_.call(null,map__14594))?cljs.core.apply.call(null,cljs.core.hash_map,map__14594):map__14594);
var content_area_el = cljs.core.get.call(null,map__14594__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_14636){
var state_val_14637 = (state_14636[(1)]);
if((state_val_14637 === (2))){
var inst_14621 = (state_14636[(7)]);
var inst_14630 = (state_14636[(2)]);
var inst_14631 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_14632 = ["auto"];
var inst_14633 = cljs.core.PersistentHashMap.fromArrays(inst_14631,inst_14632);
var inst_14634 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14621,inst_14633);
var state_14636__$1 = (function (){var statearr_14638 = state_14636;
(statearr_14638[(8)] = inst_14630);

return statearr_14638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14636__$1,inst_14634);
} else {
if((state_val_14637 === (1))){
var inst_14621 = (state_14636[(7)]);
var inst_14621__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14622 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14623 = ["10px","10px","100%","68px","1.0"];
var inst_14624 = cljs.core.PersistentHashMap.fromArrays(inst_14622,inst_14623);
var inst_14625 = cljs.core.merge.call(null,inst_14624,style);
var inst_14626 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14621__$1,inst_14625);
var inst_14627 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14621__$1,msg);
var inst_14628 = cljs.core.async.timeout.call(null,(300));
var state_14636__$1 = (function (){var statearr_14639 = state_14636;
(statearr_14639[(9)] = inst_14627);

(statearr_14639[(10)] = inst_14626);

(statearr_14639[(7)] = inst_14621__$1);

return statearr_14639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14636__$1,(2),inst_14628);
} else {
return null;
}
}
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14643[(0)] = state_machine__7249__auto__);

(statearr_14643[(1)] = (1));

return statearr_14643;
});
var state_machine__7249__auto____1 = (function (state_14636){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14644){if((e14644 instanceof Object)){
var ex__7252__auto__ = e14644;
var statearr_14645_14647 = state_14636;
(statearr_14645_14647[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14648 = state_14636;
state_14636 = G__14648;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14636){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14646 = f__7305__auto__.call(null);
(statearr_14646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
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
var vec__14650 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__14650,(0),null);
var ln = cljs.core.nth.call(null,vec__14650,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__14653 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__14653,(0),null);
var file_line = cljs.core.nth.call(null,vec__14653,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__14653,file_name,file_line){
return (function (p1__14651_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__14651_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__14653,file_name,file_line))
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
var map__14655 = figwheel.client.heads_up.ensure_container.call(null);
var map__14655__$1 = ((cljs.core.seq_QMARK_.call(null,map__14655))?cljs.core.apply.call(null,cljs.core.hash_map,map__14655):map__14655);
var content_area_el = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_14702){
var state_val_14703 = (state_14702[(1)]);
if((state_val_14703 === (3))){
var inst_14685 = (state_14702[(7)]);
var inst_14699 = (state_14702[(2)]);
var inst_14700 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14685,"");
var state_14702__$1 = (function (){var statearr_14704 = state_14702;
(statearr_14704[(8)] = inst_14699);

return statearr_14704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14702__$1,inst_14700);
} else {
if((state_val_14703 === (2))){
var inst_14685 = (state_14702[(7)]);
var inst_14692 = (state_14702[(2)]);
var inst_14693 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_14694 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_14695 = cljs.core.PersistentHashMap.fromArrays(inst_14693,inst_14694);
var inst_14696 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14685,inst_14695);
var inst_14697 = cljs.core.async.timeout.call(null,(200));
var state_14702__$1 = (function (){var statearr_14705 = state_14702;
(statearr_14705[(9)] = inst_14696);

(statearr_14705[(10)] = inst_14692);

return statearr_14705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14702__$1,(3),inst_14697);
} else {
if((state_val_14703 === (1))){
var inst_14685 = (state_14702[(7)]);
var inst_14685__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14686 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14687 = ["0.0"];
var inst_14688 = cljs.core.PersistentHashMap.fromArrays(inst_14686,inst_14687);
var inst_14689 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14685__$1,inst_14688);
var inst_14690 = cljs.core.async.timeout.call(null,(300));
var state_14702__$1 = (function (){var statearr_14706 = state_14702;
(statearr_14706[(7)] = inst_14685__$1);

(statearr_14706[(11)] = inst_14689);

return statearr_14706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14702__$1,(2),inst_14690);
} else {
return null;
}
}
}
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14710[(0)] = state_machine__7249__auto__);

(statearr_14710[(1)] = (1));

return statearr_14710;
});
var state_machine__7249__auto____1 = (function (state_14702){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14711){if((e14711 instanceof Object)){
var ex__7252__auto__ = e14711;
var statearr_14712_14714 = state_14702;
(statearr_14712_14714[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14715 = state_14702;
state_14702 = G__14715;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14702){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14713 = f__7305__auto__.call(null);
(statearr_14713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_14747){
var state_val_14748 = (state_14747[(1)]);
if((state_val_14748 === (4))){
var inst_14745 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14747__$1,inst_14745);
} else {
if((state_val_14748 === (3))){
var inst_14742 = (state_14747[(2)]);
var inst_14743 = figwheel.client.heads_up.clear.call(null);
var state_14747__$1 = (function (){var statearr_14749 = state_14747;
(statearr_14749[(7)] = inst_14742);

return statearr_14749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14747__$1,(4),inst_14743);
} else {
if((state_val_14748 === (2))){
var inst_14739 = (state_14747[(2)]);
var inst_14740 = cljs.core.async.timeout.call(null,(400));
var state_14747__$1 = (function (){var statearr_14750 = state_14747;
(statearr_14750[(8)] = inst_14739);

return statearr_14750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14747__$1,(3),inst_14740);
} else {
if((state_val_14748 === (1))){
var inst_14737 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_14747__$1 = state_14747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14747__$1,(2),inst_14737);
} else {
return null;
}
}
}
}
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_14754 = [null,null,null,null,null,null,null,null,null];
(statearr_14754[(0)] = state_machine__7249__auto__);

(statearr_14754[(1)] = (1));

return statearr_14754;
});
var state_machine__7249__auto____1 = (function (state_14747){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_14747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e14755){if((e14755 instanceof Object)){
var ex__7252__auto__ = e14755;
var statearr_14756_14758 = state_14747;
(statearr_14756_14758[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14759 = state_14747;
state_14747 = G__14759;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_14747){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_14747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_14757 = f__7305__auto__.call(null);
(statearr_14757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_14757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map