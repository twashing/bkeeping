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
var seq__13544_13548 = cljs.core.seq.call(null,listeners);
var chunk__13545_13549 = null;
var count__13546_13550 = (0);
var i__13547_13551 = (0);
while(true){
if((i__13547_13551 < count__13546_13550)){
var obj_13552__$1 = cljs.core._nth.call(null,chunk__13545_13549,i__13547_13551);
var listener_13553 = obj_13552__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13553.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13553.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13553);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13553);
}
} else {
}

var G__13554 = seq__13544_13548;
var G__13555 = chunk__13545_13549;
var G__13556 = count__13546_13550;
var G__13557 = (i__13547_13551 + (1));
seq__13544_13548 = G__13554;
chunk__13545_13549 = G__13555;
count__13546_13550 = G__13556;
i__13547_13551 = G__13557;
continue;
} else {
var temp__4126__auto___13558 = cljs.core.seq.call(null,seq__13544_13548);
if(temp__4126__auto___13558){
var seq__13544_13559__$1 = temp__4126__auto___13558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13544_13559__$1)){
var c__4409__auto___13560 = cljs.core.chunk_first.call(null,seq__13544_13559__$1);
var G__13561 = cljs.core.chunk_rest.call(null,seq__13544_13559__$1);
var G__13562 = c__4409__auto___13560;
var G__13563 = cljs.core.count.call(null,c__4409__auto___13560);
var G__13564 = (0);
seq__13544_13548 = G__13561;
chunk__13545_13549 = G__13562;
count__13546_13550 = G__13563;
i__13547_13551 = G__13564;
continue;
} else {
var obj_13565__$1 = cljs.core.first.call(null,seq__13544_13559__$1);
var listener_13566 = obj_13565__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13566.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13566.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13566);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13566);
}
} else {
}

var G__13567 = cljs.core.next.call(null,seq__13544_13559__$1);
var G__13568 = null;
var G__13569 = (0);
var G__13570 = (0);
seq__13544_13548 = G__13567;
chunk__13545_13549 = G__13568;
count__13546_13550 = G__13569;
i__13547_13551 = G__13570;
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
var get_name = (function (p1__13571_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__13571_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__13571_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__13571_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__13576 = cljs.core.seq.call(null,event_list);
var chunk__13577 = null;
var count__13578 = (0);
var i__13579 = (0);
while(true){
if((i__13579 < count__13578)){
var ev = cljs.core._nth.call(null,chunk__13577,i__13579);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13580 = seq__13576;
var G__13581 = chunk__13577;
var G__13582 = count__13578;
var G__13583 = (i__13579 + (1));
seq__13576 = G__13580;
chunk__13577 = G__13581;
count__13578 = G__13582;
i__13579 = G__13583;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13576);
if(temp__4126__auto__){
var seq__13576__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13576__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13576__$1);
var G__13584 = cljs.core.chunk_rest.call(null,seq__13576__$1);
var G__13585 = c__4409__auto__;
var G__13586 = cljs.core.count.call(null,c__4409__auto__);
var G__13587 = (0);
seq__13576 = G__13584;
chunk__13577 = G__13585;
count__13578 = G__13586;
i__13579 = G__13587;
continue;
} else {
var ev = cljs.core.first.call(null,seq__13576__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13588 = cljs.core.next.call(null,seq__13576__$1);
var G__13589 = null;
var G__13590 = (0);
var G__13591 = (0);
seq__13576 = G__13588;
chunk__13577 = G__13589;
count__13578 = G__13590;
i__13579 = G__13591;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__13592){
var event_list = cljs.core.seq(arglist__13592);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__13593_SHARP_){
var seq__13598 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__13593_SHARP_.target));
var chunk__13599 = null;
var count__13600 = (0);
var i__13601 = (0);
while(true){
if((i__13601 < count__13600)){
var el = cljs.core._nth.call(null,chunk__13599,i__13601);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13598,chunk__13599,count__13600,i__13601,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13593_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13593_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13593_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13598,chunk__13599,count__13600,i__13601,el))
));

var G__13602 = seq__13598;
var G__13603 = chunk__13599;
var G__13604 = count__13600;
var G__13605 = (i__13601 + (1));
seq__13598 = G__13602;
chunk__13599 = G__13603;
count__13600 = G__13604;
i__13601 = G__13605;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13598);
if(temp__4126__auto__){
var seq__13598__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13598__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13598__$1);
var G__13606 = cljs.core.chunk_rest.call(null,seq__13598__$1);
var G__13607 = c__4409__auto__;
var G__13608 = cljs.core.count.call(null,c__4409__auto__);
var G__13609 = (0);
seq__13598 = G__13606;
chunk__13599 = G__13607;
count__13600 = G__13608;
i__13601 = G__13609;
continue;
} else {
var el = cljs.core.first.call(null,seq__13598__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13598,chunk__13599,count__13600,i__13601,el,seq__13598__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13593_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13593_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13593_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13598,chunk__13599,count__13600,i__13601,el,seq__13598__$1,temp__4126__auto__))
));

var G__13610 = cljs.core.next.call(null,seq__13598__$1);
var G__13611 = null;
var G__13612 = (0);
var G__13613 = (0);
seq__13598 = G__13610;
chunk__13599 = G__13611;
count__13600 = G__13612;
i__13601 = G__13613;
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
var G__13614 = parent;
var G__13615 = child.parentNode;
parent = G__13614;
child = G__13615;
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