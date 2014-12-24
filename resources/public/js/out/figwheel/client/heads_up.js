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
var seq__21081_21089 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21082_21090 = null;
var count__21083_21091 = (0);
var i__21084_21092 = (0);
while(true){
if((i__21084_21092 < count__21083_21091)){
var k_21093 = cljs.core._nth.call(null,chunk__21082_21090,i__21084_21092);
e.setAttribute(cljs.core.name.call(null,k_21093),cljs.core.get.call(null,attrs,k_21093));

var G__21094 = seq__21081_21089;
var G__21095 = chunk__21082_21090;
var G__21096 = count__21083_21091;
var G__21097 = (i__21084_21092 + (1));
seq__21081_21089 = G__21094;
chunk__21082_21090 = G__21095;
count__21083_21091 = G__21096;
i__21084_21092 = G__21097;
continue;
} else {
var temp__4126__auto___21098 = cljs.core.seq.call(null,seq__21081_21089);
if(temp__4126__auto___21098){
var seq__21081_21099__$1 = temp__4126__auto___21098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21081_21099__$1)){
var c__13332__auto___21100 = cljs.core.chunk_first.call(null,seq__21081_21099__$1);
var G__21101 = cljs.core.chunk_rest.call(null,seq__21081_21099__$1);
var G__21102 = c__13332__auto___21100;
var G__21103 = cljs.core.count.call(null,c__13332__auto___21100);
var G__21104 = (0);
seq__21081_21089 = G__21101;
chunk__21082_21090 = G__21102;
count__21083_21091 = G__21103;
i__21084_21092 = G__21104;
continue;
} else {
var k_21105 = cljs.core.first.call(null,seq__21081_21099__$1);
e.setAttribute(cljs.core.name.call(null,k_21105),cljs.core.get.call(null,attrs,k_21105));

var G__21106 = cljs.core.next.call(null,seq__21081_21099__$1);
var G__21107 = null;
var G__21108 = (0);
var G__21109 = (0);
seq__21081_21089 = G__21106;
chunk__21082_21090 = G__21107;
count__21083_21091 = G__21108;
i__21084_21092 = G__21109;
continue;
}
} else {
}
}
break;
}

var seq__21085_21110 = cljs.core.seq.call(null,children);
var chunk__21086_21111 = null;
var count__21087_21112 = (0);
var i__21088_21113 = (0);
while(true){
if((i__21088_21113 < count__21087_21112)){
var ch_21114 = cljs.core._nth.call(null,chunk__21086_21111,i__21088_21113);
e.appendChild(ch_21114);

var G__21115 = seq__21085_21110;
var G__21116 = chunk__21086_21111;
var G__21117 = count__21087_21112;
var G__21118 = (i__21088_21113 + (1));
seq__21085_21110 = G__21115;
chunk__21086_21111 = G__21116;
count__21087_21112 = G__21117;
i__21088_21113 = G__21118;
continue;
} else {
var temp__4126__auto___21119 = cljs.core.seq.call(null,seq__21085_21110);
if(temp__4126__auto___21119){
var seq__21085_21120__$1 = temp__4126__auto___21119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21085_21120__$1)){
var c__13332__auto___21121 = cljs.core.chunk_first.call(null,seq__21085_21120__$1);
var G__21122 = cljs.core.chunk_rest.call(null,seq__21085_21120__$1);
var G__21123 = c__13332__auto___21121;
var G__21124 = cljs.core.count.call(null,c__13332__auto___21121);
var G__21125 = (0);
seq__21085_21110 = G__21122;
chunk__21086_21111 = G__21123;
count__21087_21112 = G__21124;
i__21088_21113 = G__21125;
continue;
} else {
var ch_21126 = cljs.core.first.call(null,seq__21085_21120__$1);
e.appendChild(ch_21126);

var G__21127 = cljs.core.next.call(null,seq__21085_21120__$1);
var G__21128 = null;
var G__21129 = (0);
var G__21130 = (0);
seq__21085_21110 = G__21127;
chunk__21086_21111 = G__21128;
count__21087_21112 = G__21129;
i__21088_21113 = G__21130;
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
node.cljs$lang$applyTo = (function (arglist__21131){
var t = cljs.core.first(arglist__21131);
arglist__21131 = cljs.core.next(arglist__21131);
var attrs = cljs.core.first(arglist__21131);
var children = cljs.core.rest(arglist__21131);
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__21132,st_map){
var map__21136 = p__21132;
var map__21136__$1 = ((cljs.core.seq_QMARK_.call(null,map__21136))?cljs.core.apply.call(null,cljs.core.hash_map,map__21136):map__21136);
var container_el = cljs.core.get.call(null,map__21136__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21136,map__21136__$1,container_el){
return (function (p__21137){
var vec__21138 = p__21137;
var k = cljs.core.nth.call(null,vec__21138,(0),null);
var v = cljs.core.nth.call(null,vec__21138,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21136,map__21136__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__21139,dom_str){
var map__21141 = p__21139;
var map__21141__$1 = ((cljs.core.seq_QMARK_.call(null,map__21141))?cljs.core.apply.call(null,cljs.core.hash_map,map__21141):map__21141);
var c = map__21141__$1;
var content_area_el = cljs.core.get.call(null,map__21141__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__21142){
var map__21144 = p__21142;
var map__21144__$1 = ((cljs.core.seq_QMARK_.call(null,map__21144))?cljs.core.apply.call(null,cljs.core.hash_map,map__21144):map__21144);
var content_area_el = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (2))){
var inst_21171 = (state_21186[(7)]);
var inst_21180 = (state_21186[(2)]);
var inst_21181 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21182 = ["auto"];
var inst_21183 = cljs.core.PersistentHashMap.fromArrays(inst_21181,inst_21182);
var inst_21184 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21171,inst_21183);
var state_21186__$1 = (function (){var statearr_21188 = state_21186;
(statearr_21188[(8)] = inst_21180);

return statearr_21188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (1))){
var inst_21171 = (state_21186[(7)]);
var inst_21171__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21172 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21173 = ["10px","10px","100%","68px","1.0"];
var inst_21174 = cljs.core.PersistentHashMap.fromArrays(inst_21172,inst_21173);
var inst_21175 = cljs.core.merge.call(null,inst_21174,style);
var inst_21176 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21171__$1,inst_21175);
var inst_21177 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21171__$1,msg);
var inst_21178 = cljs.core.async.timeout.call(null,(300));
var state_21186__$1 = (function (){var statearr_21189 = state_21186;
(statearr_21189[(9)] = inst_21176);

(statearr_21189[(10)] = inst_21177);

(statearr_21189[(7)] = inst_21171__$1);

return statearr_21189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(2),inst_21178);
} else {
return null;
}
}
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21193[(0)] = state_machine__15177__auto__);

(statearr_21193[(1)] = (1));

return statearr_21193;
});
var state_machine__15177__auto____1 = (function (state_21186){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21194){if((e21194 instanceof Object)){
var ex__15180__auto__ = e21194;
var statearr_21195_21197 = state_21186;
(statearr_21195_21197[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21198 = state_21186;
state_21186 = G__21198;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_21196 = f__15233__auto__.call(null);
(statearr_21196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
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
var vec__21200 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__21200,(0),null);
var ln = cljs.core.nth.call(null,vec__21200,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__21203 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__21203,(0),null);
var file_line = cljs.core.nth.call(null,vec__21203,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21203,file_name,file_line){
return (function (p1__21201_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__21201_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__21203,file_name,file_line))
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
var map__21205 = figwheel.client.heads_up.ensure_container.call(null);
var map__21205__$1 = ((cljs.core.seq_QMARK_.call(null,map__21205))?cljs.core.apply.call(null,cljs.core.hash_map,map__21205):map__21205);
var content_area_el = cljs.core.get.call(null,map__21205__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_21252){
var state_val_21253 = (state_21252[(1)]);
if((state_val_21253 === (3))){
var inst_21235 = (state_21252[(7)]);
var inst_21249 = (state_21252[(2)]);
var inst_21250 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21235,"");
var state_21252__$1 = (function (){var statearr_21254 = state_21252;
(statearr_21254[(8)] = inst_21249);

return statearr_21254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21252__$1,inst_21250);
} else {
if((state_val_21253 === (2))){
var inst_21235 = (state_21252[(7)]);
var inst_21242 = (state_21252[(2)]);
var inst_21243 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21244 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21245 = cljs.core.PersistentHashMap.fromArrays(inst_21243,inst_21244);
var inst_21246 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21235,inst_21245);
var inst_21247 = cljs.core.async.timeout.call(null,(200));
var state_21252__$1 = (function (){var statearr_21255 = state_21252;
(statearr_21255[(9)] = inst_21246);

(statearr_21255[(10)] = inst_21242);

return statearr_21255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21252__$1,(3),inst_21247);
} else {
if((state_val_21253 === (1))){
var inst_21235 = (state_21252[(7)]);
var inst_21235__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21236 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21237 = ["0.0"];
var inst_21238 = cljs.core.PersistentHashMap.fromArrays(inst_21236,inst_21237);
var inst_21239 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21235__$1,inst_21238);
var inst_21240 = cljs.core.async.timeout.call(null,(300));
var state_21252__$1 = (function (){var statearr_21256 = state_21252;
(statearr_21256[(7)] = inst_21235__$1);

(statearr_21256[(11)] = inst_21239);

return statearr_21256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21252__$1,(2),inst_21240);
} else {
return null;
}
}
}
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21260[(0)] = state_machine__15177__auto__);

(statearr_21260[(1)] = (1));

return statearr_21260;
});
var state_machine__15177__auto____1 = (function (state_21252){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21261){if((e21261 instanceof Object)){
var ex__15180__auto__ = e21261;
var statearr_21262_21264 = state_21252;
(statearr_21262_21264[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21265 = state_21252;
state_21252 = G__21265;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21252){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_21263 = f__15233__auto__.call(null);
(statearr_21263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_21297){
var state_val_21298 = (state_21297[(1)]);
if((state_val_21298 === (4))){
var inst_21295 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21297__$1,inst_21295);
} else {
if((state_val_21298 === (3))){
var inst_21292 = (state_21297[(2)]);
var inst_21293 = figwheel.client.heads_up.clear.call(null);
var state_21297__$1 = (function (){var statearr_21299 = state_21297;
(statearr_21299[(7)] = inst_21292);

return statearr_21299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21297__$1,(4),inst_21293);
} else {
if((state_val_21298 === (2))){
var inst_21289 = (state_21297[(2)]);
var inst_21290 = cljs.core.async.timeout.call(null,(400));
var state_21297__$1 = (function (){var statearr_21300 = state_21297;
(statearr_21300[(8)] = inst_21289);

return statearr_21300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21297__$1,(3),inst_21290);
} else {
if((state_val_21298 === (1))){
var inst_21287 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21297__$1,(2),inst_21287);
} else {
return null;
}
}
}
}
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21304 = [null,null,null,null,null,null,null,null,null];
(statearr_21304[(0)] = state_machine__15177__auto__);

(statearr_21304[(1)] = (1));

return statearr_21304;
});
var state_machine__15177__auto____1 = (function (state_21297){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21305){if((e21305 instanceof Object)){
var ex__15180__auto__ = e21305;
var statearr_21306_21308 = state_21297;
(statearr_21306_21308[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21309 = state_21297;
state_21297 = G__21309;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21297){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_21307 = f__15233__auto__.call(null);
(statearr_21307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_21307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map