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
var seq__9378_9382 = cljs.core.seq.call(null,listeners);
var chunk__9379_9383 = null;
var count__9380_9384 = (0);
var i__9381_9385 = (0);
while(true){
if((i__9381_9385 < count__9380_9384)){
var obj_9386__$1 = cljs.core._nth.call(null,chunk__9379_9383,i__9381_9385);
var listener_9387 = obj_9386__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_9387.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_9387.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_9387);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_9387);
}
} else {
}

var G__9388 = seq__9378_9382;
var G__9389 = chunk__9379_9383;
var G__9390 = count__9380_9384;
var G__9391 = (i__9381_9385 + (1));
seq__9378_9382 = G__9388;
chunk__9379_9383 = G__9389;
count__9380_9384 = G__9390;
i__9381_9385 = G__9391;
continue;
} else {
var temp__4126__auto___9392 = cljs.core.seq.call(null,seq__9378_9382);
if(temp__4126__auto___9392){
var seq__9378_9393__$1 = temp__4126__auto___9392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9378_9393__$1)){
var c__4409__auto___9394 = cljs.core.chunk_first.call(null,seq__9378_9393__$1);
var G__9395 = cljs.core.chunk_rest.call(null,seq__9378_9393__$1);
var G__9396 = c__4409__auto___9394;
var G__9397 = cljs.core.count.call(null,c__4409__auto___9394);
var G__9398 = (0);
seq__9378_9382 = G__9395;
chunk__9379_9383 = G__9396;
count__9380_9384 = G__9397;
i__9381_9385 = G__9398;
continue;
} else {
var obj_9399__$1 = cljs.core.first.call(null,seq__9378_9393__$1);
var listener_9400 = obj_9399__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_9400.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_9400.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_9400);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_9400);
}
} else {
}

var G__9401 = cljs.core.next.call(null,seq__9378_9393__$1);
var G__9402 = null;
var G__9403 = (0);
var G__9404 = (0);
seq__9378_9382 = G__9401;
chunk__9379_9383 = G__9402;
count__9380_9384 = G__9403;
i__9381_9385 = G__9404;
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
var get_name = (function (p1__9405_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__9405_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__9405_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__9405_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__9410 = cljs.core.seq.call(null,event_list);
var chunk__9411 = null;
var count__9412 = (0);
var i__9413 = (0);
while(true){
if((i__9413 < count__9412)){
var ev = cljs.core._nth.call(null,chunk__9411,i__9413);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__9414 = seq__9410;
var G__9415 = chunk__9411;
var G__9416 = count__9412;
var G__9417 = (i__9413 + (1));
seq__9410 = G__9414;
chunk__9411 = G__9415;
count__9412 = G__9416;
i__9413 = G__9417;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9410);
if(temp__4126__auto__){
var seq__9410__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9410__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__9410__$1);
var G__9418 = cljs.core.chunk_rest.call(null,seq__9410__$1);
var G__9419 = c__4409__auto__;
var G__9420 = cljs.core.count.call(null,c__4409__auto__);
var G__9421 = (0);
seq__9410 = G__9418;
chunk__9411 = G__9419;
count__9412 = G__9420;
i__9413 = G__9421;
continue;
} else {
var ev = cljs.core.first.call(null,seq__9410__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__9422 = cljs.core.next.call(null,seq__9410__$1);
var G__9423 = null;
var G__9424 = (0);
var G__9425 = (0);
seq__9410 = G__9422;
chunk__9411 = G__9423;
count__9412 = G__9424;
i__9413 = G__9425;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__9426){
var event_list = cljs.core.seq(arglist__9426);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__9427_SHARP_){
var seq__9432 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__9427_SHARP_.target));
var chunk__9433 = null;
var count__9434 = (0);
var i__9435 = (0);
while(true){
if((i__9435 < count__9434)){
var el = cljs.core._nth.call(null,chunk__9433,i__9435);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__9432,chunk__9433,count__9434,i__9435,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__9427_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__9427_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__9427_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__9432,chunk__9433,count__9434,i__9435,el))
));

var G__9436 = seq__9432;
var G__9437 = chunk__9433;
var G__9438 = count__9434;
var G__9439 = (i__9435 + (1));
seq__9432 = G__9436;
chunk__9433 = G__9437;
count__9434 = G__9438;
i__9435 = G__9439;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9432);
if(temp__4126__auto__){
var seq__9432__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9432__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__9432__$1);
var G__9440 = cljs.core.chunk_rest.call(null,seq__9432__$1);
var G__9441 = c__4409__auto__;
var G__9442 = cljs.core.count.call(null,c__4409__auto__);
var G__9443 = (0);
seq__9432 = G__9440;
chunk__9433 = G__9441;
count__9434 = G__9442;
i__9435 = G__9443;
continue;
} else {
var el = cljs.core.first.call(null,seq__9432__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__9432,chunk__9433,count__9434,i__9435,el,seq__9432__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__9427_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__9427_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__9427_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__9432,chunk__9433,count__9434,i__9435,el,seq__9432__$1,temp__4126__auto__))
));

var G__9444 = cljs.core.next.call(null,seq__9432__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__9432 = G__9444;
chunk__9433 = G__9445;
count__9434 = G__9446;
i__9435 = G__9447;
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
var G__9448 = parent;
var G__9449 = child.parentNode;
parent = G__9448;
child = G__9449;
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