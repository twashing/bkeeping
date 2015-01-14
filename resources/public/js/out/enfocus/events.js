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
var seq__13535_13539 = cljs.core.seq.call(null,listeners);
var chunk__13536_13540 = null;
var count__13537_13541 = (0);
var i__13538_13542 = (0);
while(true){
if((i__13538_13542 < count__13537_13541)){
var obj_13543__$1 = cljs.core._nth.call(null,chunk__13536_13540,i__13538_13542);
var listener_13544 = obj_13543__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13544.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13544.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13544);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13544);
}
} else {
}

var G__13545 = seq__13535_13539;
var G__13546 = chunk__13536_13540;
var G__13547 = count__13537_13541;
var G__13548 = (i__13538_13542 + (1));
seq__13535_13539 = G__13545;
chunk__13536_13540 = G__13546;
count__13537_13541 = G__13547;
i__13538_13542 = G__13548;
continue;
} else {
var temp__4126__auto___13549 = cljs.core.seq.call(null,seq__13535_13539);
if(temp__4126__auto___13549){
var seq__13535_13550__$1 = temp__4126__auto___13549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13535_13550__$1)){
var c__4409__auto___13551 = cljs.core.chunk_first.call(null,seq__13535_13550__$1);
var G__13552 = cljs.core.chunk_rest.call(null,seq__13535_13550__$1);
var G__13553 = c__4409__auto___13551;
var G__13554 = cljs.core.count.call(null,c__4409__auto___13551);
var G__13555 = (0);
seq__13535_13539 = G__13552;
chunk__13536_13540 = G__13553;
count__13537_13541 = G__13554;
i__13538_13542 = G__13555;
continue;
} else {
var obj_13556__$1 = cljs.core.first.call(null,seq__13535_13550__$1);
var listener_13557 = obj_13556__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13557.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13557.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13557);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13557);
}
} else {
}

var G__13558 = cljs.core.next.call(null,seq__13535_13550__$1);
var G__13559 = null;
var G__13560 = (0);
var G__13561 = (0);
seq__13535_13539 = G__13558;
chunk__13536_13540 = G__13559;
count__13537_13541 = G__13560;
i__13538_13542 = G__13561;
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
var get_name = (function (p1__13562_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__13562_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__13562_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__13562_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__13567 = cljs.core.seq.call(null,event_list);
var chunk__13568 = null;
var count__13569 = (0);
var i__13570 = (0);
while(true){
if((i__13570 < count__13569)){
var ev = cljs.core._nth.call(null,chunk__13568,i__13570);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13571 = seq__13567;
var G__13572 = chunk__13568;
var G__13573 = count__13569;
var G__13574 = (i__13570 + (1));
seq__13567 = G__13571;
chunk__13568 = G__13572;
count__13569 = G__13573;
i__13570 = G__13574;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13567);
if(temp__4126__auto__){
var seq__13567__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13567__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13567__$1);
var G__13575 = cljs.core.chunk_rest.call(null,seq__13567__$1);
var G__13576 = c__4409__auto__;
var G__13577 = cljs.core.count.call(null,c__4409__auto__);
var G__13578 = (0);
seq__13567 = G__13575;
chunk__13568 = G__13576;
count__13569 = G__13577;
i__13570 = G__13578;
continue;
} else {
var ev = cljs.core.first.call(null,seq__13567__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13579 = cljs.core.next.call(null,seq__13567__$1);
var G__13580 = null;
var G__13581 = (0);
var G__13582 = (0);
seq__13567 = G__13579;
chunk__13568 = G__13580;
count__13569 = G__13581;
i__13570 = G__13582;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__13583){
var event_list = cljs.core.seq(arglist__13583);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__13584_SHARP_){
var seq__13589 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__13584_SHARP_.target));
var chunk__13590 = null;
var count__13591 = (0);
var i__13592 = (0);
while(true){
if((i__13592 < count__13591)){
var el = cljs.core._nth.call(null,chunk__13590,i__13592);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13589,chunk__13590,count__13591,i__13592,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13584_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13584_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13584_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13589,chunk__13590,count__13591,i__13592,el))
));

var G__13593 = seq__13589;
var G__13594 = chunk__13590;
var G__13595 = count__13591;
var G__13596 = (i__13592 + (1));
seq__13589 = G__13593;
chunk__13590 = G__13594;
count__13591 = G__13595;
i__13592 = G__13596;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13589);
if(temp__4126__auto__){
var seq__13589__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13589__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13589__$1);
var G__13597 = cljs.core.chunk_rest.call(null,seq__13589__$1);
var G__13598 = c__4409__auto__;
var G__13599 = cljs.core.count.call(null,c__4409__auto__);
var G__13600 = (0);
seq__13589 = G__13597;
chunk__13590 = G__13598;
count__13591 = G__13599;
i__13592 = G__13600;
continue;
} else {
var el = cljs.core.first.call(null,seq__13589__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13589,chunk__13590,count__13591,i__13592,el,seq__13589__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13584_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13584_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13584_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13589,chunk__13590,count__13591,i__13592,el,seq__13589__$1,temp__4126__auto__))
));

var G__13601 = cljs.core.next.call(null,seq__13589__$1);
var G__13602 = null;
var G__13603 = (0);
var G__13604 = (0);
seq__13589 = G__13601;
chunk__13590 = G__13602;
count__13591 = G__13603;
i__13592 = G__13604;
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
var G__13605 = parent;
var G__13606 = child.parentNode;
parent = G__13605;
child = G__13606;
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