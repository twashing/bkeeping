// Compiled by ClojureScript 0.0-2505
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.events');

enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.events.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__13585_13589 = cljs.core.seq.call(null,listeners);
var chunk__13586_13590 = null;
var count__13587_13591 = (0);
var i__13588_13592 = (0);
while(true){
if((i__13588_13592 < count__13587_13591)){
var obj_13593__$1 = cljs.core._nth.call(null,chunk__13586_13590,i__13588_13592);
var listener_13594 = obj_13593__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13594.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13594.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13594);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13594);
}
} else {
}

var G__13595 = seq__13585_13589;
var G__13596 = chunk__13586_13590;
var G__13597 = count__13587_13591;
var G__13598 = (i__13588_13592 + (1));
seq__13585_13589 = G__13595;
chunk__13586_13590 = G__13596;
count__13587_13591 = G__13597;
i__13588_13592 = G__13598;
continue;
} else {
var temp__4126__auto___13599 = cljs.core.seq.call(null,seq__13585_13589);
if(temp__4126__auto___13599){
var seq__13585_13600__$1 = temp__4126__auto___13599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13585_13600__$1)){
var c__4409__auto___13601 = cljs.core.chunk_first.call(null,seq__13585_13600__$1);
var G__13602 = cljs.core.chunk_rest.call(null,seq__13585_13600__$1);
var G__13603 = c__4409__auto___13601;
var G__13604 = cljs.core.count.call(null,c__4409__auto___13601);
var G__13605 = (0);
seq__13585_13589 = G__13602;
chunk__13586_13590 = G__13603;
count__13587_13591 = G__13604;
i__13588_13592 = G__13605;
continue;
} else {
var obj_13606__$1 = cljs.core.first.call(null,seq__13585_13600__$1);
var listener_13607 = obj_13606__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13607.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13607.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13607);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13607);
}
} else {
}

var G__13608 = cljs.core.next.call(null,seq__13585_13600__$1);
var G__13609 = null;
var G__13610 = (0);
var G__13611 = (0);
seq__13585_13589 = G__13608;
chunk__13586_13590 = G__13609;
count__13587_13591 = G__13610;
i__13588_13592 = G__13611;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod))){
return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
;})(wrapper))
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){
var get_name = (function (p1__13612_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__13612_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__13612_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__13612_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__13617 = cljs.core.seq.call(null,event_list);
var chunk__13618 = null;
var count__13619 = (0);
var i__13620 = (0);
while(true){
if((i__13620 < count__13619)){
var ev = cljs.core._nth.call(null,chunk__13618,i__13620);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13621 = seq__13617;
var G__13622 = chunk__13618;
var G__13623 = count__13619;
var G__13624 = (i__13620 + (1));
seq__13617 = G__13621;
chunk__13618 = G__13622;
count__13619 = G__13623;
i__13620 = G__13624;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13617);
if(temp__4126__auto__){
var seq__13617__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13617__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13617__$1);
var G__13625 = cljs.core.chunk_rest.call(null,seq__13617__$1);
var G__13626 = c__4409__auto__;
var G__13627 = cljs.core.count.call(null,c__4409__auto__);
var G__13628 = (0);
seq__13617 = G__13625;
chunk__13618 = G__13626;
count__13619 = G__13627;
i__13620 = G__13628;
continue;
} else {
var ev = cljs.core.first.call(null,seq__13617__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13629 = cljs.core.next.call(null,seq__13617__$1);
var G__13630 = null;
var G__13631 = (0);
var G__13632 = (0);
seq__13617 = G__13629;
chunk__13618 = G__13630;
count__13619 = G__13631;
i__13620 = G__13632;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(get_name))
};
var remove_listeners = function (var_args){
var event_list = null;
if (arguments.length > 0) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__13633){
var event_list = cljs.core.seq(arglist__13633);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){
return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
;})(wrapper))
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){
if(((node == null)) || (cljs.core._EQ_.call(null,node,top))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(cur,cur_event){
var event = goog.object.clone(cur_event);
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__13634_SHARP_){
var seq__13639 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__13634_SHARP_.target));
var chunk__13640 = null;
var count__13641 = (0);
var i__13642 = (0);
while(true){
if((i__13642 < count__13641)){
var el = cljs.core._nth.call(null,chunk__13640,i__13642);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13639,chunk__13640,count__13641,i__13642,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13634_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13634_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13634_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13639,chunk__13640,count__13641,i__13642,el))
));

var G__13643 = seq__13639;
var G__13644 = chunk__13640;
var G__13645 = count__13641;
var G__13646 = (i__13642 + (1));
seq__13639 = G__13643;
chunk__13640 = G__13644;
count__13641 = G__13645;
i__13642 = G__13646;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13639);
if(temp__4126__auto__){
var seq__13639__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13639__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13639__$1);
var G__13647 = cljs.core.chunk_rest.call(null,seq__13639__$1);
var G__13648 = c__4409__auto__;
var G__13649 = cljs.core.count.call(null,c__4409__auto__);
var G__13650 = (0);
seq__13639 = G__13647;
chunk__13640 = G__13648;
count__13641 = G__13649;
i__13642 = G__13650;
continue;
} else {
var el = cljs.core.first.call(null,seq__13639__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13639,chunk__13640,count__13641,i__13642,el,seq__13639__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13634_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13634_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13634_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13639,chunk__13640,count__13641,i__13642,el,seq__13639__$1,temp__4126__auto__))
));

var G__13651 = cljs.core.next.call(null,seq__13639__$1);
var G__13652 = null;
var G__13653 = (0);
var G__13654 = (0);
seq__13639 = G__13651;
chunk__13640 = G__13652;
count__13641 = G__13653;
i__13642 = G__13654;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__13655 = parent;
var G__13656 = child.parentNode;
parent = G__13655;
child = G__13656;
continue;

}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re)))){
return func.call(null,e);
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map