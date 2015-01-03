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
var seq__20644_20648 = cljs.core.seq.call(null,listeners);
var chunk__20645_20649 = null;
var count__20646_20650 = (0);
var i__20647_20651 = (0);
while(true){
if((i__20647_20651 < count__20646_20650)){
var obj_20652__$1 = cljs.core._nth.call(null,chunk__20645_20649,i__20647_20651);
var listener_20653 = obj_20652__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_20653.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_20653.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_20653);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_20653);
}
} else {
}

var G__20654 = seq__20644_20648;
var G__20655 = chunk__20645_20649;
var G__20656 = count__20646_20650;
var G__20657 = (i__20647_20651 + (1));
seq__20644_20648 = G__20654;
chunk__20645_20649 = G__20655;
count__20646_20650 = G__20656;
i__20647_20651 = G__20657;
continue;
} else {
var temp__4126__auto___20658 = cljs.core.seq.call(null,seq__20644_20648);
if(temp__4126__auto___20658){
var seq__20644_20659__$1 = temp__4126__auto___20658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20644_20659__$1)){
var c__13332__auto___20660 = cljs.core.chunk_first.call(null,seq__20644_20659__$1);
var G__20661 = cljs.core.chunk_rest.call(null,seq__20644_20659__$1);
var G__20662 = c__13332__auto___20660;
var G__20663 = cljs.core.count.call(null,c__13332__auto___20660);
var G__20664 = (0);
seq__20644_20648 = G__20661;
chunk__20645_20649 = G__20662;
count__20646_20650 = G__20663;
i__20647_20651 = G__20664;
continue;
} else {
var obj_20665__$1 = cljs.core.first.call(null,seq__20644_20659__$1);
var listener_20666 = obj_20665__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_20666.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_20666.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_20666);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_20666);
}
} else {
}

var G__20667 = cljs.core.next.call(null,seq__20644_20659__$1);
var G__20668 = null;
var G__20669 = (0);
var G__20670 = (0);
seq__20644_20648 = G__20667;
chunk__20645_20649 = G__20668;
count__20646_20650 = G__20669;
i__20647_20651 = G__20670;
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
var get_name = (function (p1__20671_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__20671_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__20671_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__20671_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__20676 = cljs.core.seq.call(null,event_list);
var chunk__20677 = null;
var count__20678 = (0);
var i__20679 = (0);
while(true){
if((i__20679 < count__20678)){
var ev = cljs.core._nth.call(null,chunk__20677,i__20679);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__20680 = seq__20676;
var G__20681 = chunk__20677;
var G__20682 = count__20678;
var G__20683 = (i__20679 + (1));
seq__20676 = G__20680;
chunk__20677 = G__20681;
count__20678 = G__20682;
i__20679 = G__20683;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20676);
if(temp__4126__auto__){
var seq__20676__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20676__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__20676__$1);
var G__20684 = cljs.core.chunk_rest.call(null,seq__20676__$1);
var G__20685 = c__13332__auto__;
var G__20686 = cljs.core.count.call(null,c__13332__auto__);
var G__20687 = (0);
seq__20676 = G__20684;
chunk__20677 = G__20685;
count__20678 = G__20686;
i__20679 = G__20687;
continue;
} else {
var ev = cljs.core.first.call(null,seq__20676__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__20688 = cljs.core.next.call(null,seq__20676__$1);
var G__20689 = null;
var G__20690 = (0);
var G__20691 = (0);
seq__20676 = G__20688;
chunk__20677 = G__20689;
count__20678 = G__20690;
i__20679 = G__20691;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__20692){
var event_list = cljs.core.seq(arglist__20692);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__20693_SHARP_){
var seq__20698 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__20693_SHARP_.target));
var chunk__20699 = null;
var count__20700 = (0);
var i__20701 = (0);
while(true){
if((i__20701 < count__20700)){
var el = cljs.core._nth.call(null,chunk__20699,i__20701);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__20698,chunk__20699,count__20700,i__20701,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__20693_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__20693_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__20693_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__20698,chunk__20699,count__20700,i__20701,el))
));

var G__20702 = seq__20698;
var G__20703 = chunk__20699;
var G__20704 = count__20700;
var G__20705 = (i__20701 + (1));
seq__20698 = G__20702;
chunk__20699 = G__20703;
count__20700 = G__20704;
i__20701 = G__20705;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20698);
if(temp__4126__auto__){
var seq__20698__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20698__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__20698__$1);
var G__20706 = cljs.core.chunk_rest.call(null,seq__20698__$1);
var G__20707 = c__13332__auto__;
var G__20708 = cljs.core.count.call(null,c__13332__auto__);
var G__20709 = (0);
seq__20698 = G__20706;
chunk__20699 = G__20707;
count__20700 = G__20708;
i__20701 = G__20709;
continue;
} else {
var el = cljs.core.first.call(null,seq__20698__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__20698,chunk__20699,count__20700,i__20701,el,seq__20698__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__20693_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__20693_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__20693_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__20698,chunk__20699,count__20700,i__20701,el,seq__20698__$1,temp__4126__auto__))
));

var G__20710 = cljs.core.next.call(null,seq__20698__$1);
var G__20711 = null;
var G__20712 = (0);
var G__20713 = (0);
seq__20698 = G__20710;
chunk__20699 = G__20711;
count__20700 = G__20712;
i__20701 = G__20713;
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
var G__20714 = parent;
var G__20715 = child.parentNode;
parent = G__20714;
child = G__20715;
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