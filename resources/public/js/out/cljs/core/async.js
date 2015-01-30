// Compiled by ClojureScript 0.0-2505
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t263009 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t263009 = (function (f,fn_handler,meta263010){
this.f = f;
this.fn_handler = fn_handler;
this.meta263010 = meta263010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t263009.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t263009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t263009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t263009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_263011){
var self__ = this;
var _263011__$1 = this;
return self__.meta263010;
});

cljs.core.async.t263009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_263011,meta263010__$1){
var self__ = this;
var _263011__$1 = this;
return (new cljs.core.async.t263009(self__.f,self__.fn_handler,meta263010__$1));
});

cljs.core.async.t263009.cljs$lang$type = true;

cljs.core.async.t263009.cljs$lang$ctorStr = "cljs.core.async/t263009";

cljs.core.async.t263009.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t263009");
});

cljs.core.async.__GT_t263009 = (function __GT_t263009(f__$1,fn_handler__$1,meta263010){
return (new cljs.core.async.t263009(f__$1,fn_handler__$1,meta263010));
});

}

return (new cljs.core.async.t263009(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__263013 = buff;
if(G__263013){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__263013.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__263013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__263013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__263013);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_263014 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_263014);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_263014,ret){
return (function (){
return fn1.call(null,val_263014);
});})(val_263014,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4509__auto___263015 = n;
var x_263016 = (0);
while(true){
if((x_263016 < n__4509__auto___263015)){
(a[x_263016] = (0));

var G__263017 = (x_263016 + (1));
x_263016 = G__263017;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__263018 = (i + (1));
i = G__263018;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t263022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t263022 = (function (flag,alt_flag,meta263023){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta263023 = meta263023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t263022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t263022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t263022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t263022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_263024){
var self__ = this;
var _263024__$1 = this;
return self__.meta263023;
});})(flag))
;

cljs.core.async.t263022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_263024,meta263023__$1){
var self__ = this;
var _263024__$1 = this;
return (new cljs.core.async.t263022(self__.flag,self__.alt_flag,meta263023__$1));
});})(flag))
;

cljs.core.async.t263022.cljs$lang$type = true;

cljs.core.async.t263022.cljs$lang$ctorStr = "cljs.core.async/t263022";

cljs.core.async.t263022.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t263022");
});})(flag))
;

cljs.core.async.__GT_t263022 = ((function (flag){
return (function __GT_t263022(flag__$1,alt_flag__$1,meta263023){
return (new cljs.core.async.t263022(flag__$1,alt_flag__$1,meta263023));
});})(flag))
;

}

return (new cljs.core.async.t263022(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t263028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t263028 = (function (cb,flag,alt_handler,meta263029){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta263029 = meta263029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t263028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t263028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t263028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t263028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_263030){
var self__ = this;
var _263030__$1 = this;
return self__.meta263029;
});

cljs.core.async.t263028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_263030,meta263029__$1){
var self__ = this;
var _263030__$1 = this;
return (new cljs.core.async.t263028(self__.cb,self__.flag,self__.alt_handler,meta263029__$1));
});

cljs.core.async.t263028.cljs$lang$type = true;

cljs.core.async.t263028.cljs$lang$ctorStr = "cljs.core.async/t263028";

cljs.core.async.t263028.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t263028");
});

cljs.core.async.__GT_t263028 = (function __GT_t263028(cb__$1,flag__$1,alt_handler__$1,meta263029){
return (new cljs.core.async.t263028(cb__$1,flag__$1,alt_handler__$1,meta263029));
});

}

return (new cljs.core.async.t263028(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__263031_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__263031_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__263032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__263032_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3622__auto__ = wport;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return port;
}
})()], null));
} else {
var G__263033 = (i + (1));
i = G__263033;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3622__auto__ = ret;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3610__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__263034){
var map__263036 = p__263034;
var map__263036__$1 = ((cljs.core.seq_QMARK_.call(null,map__263036))?cljs.core.apply.call(null,cljs.core.hash_map,map__263036):map__263036);
var opts = map__263036__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__263034 = null;
if (arguments.length > 1) {
  p__263034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__263034);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__263037){
var ports = cljs.core.first(arglist__263037);
var p__263034 = cljs.core.rest(arglist__263037);
return alts_BANG___delegate(ports,p__263034);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__9199__auto___263132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___263132){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___263132){
return (function (state_263108){
var state_val_263109 = (state_263108[(1)]);
if((state_val_263109 === (7))){
var inst_263104 = (state_263108[(2)]);
var state_263108__$1 = state_263108;
var statearr_263110_263133 = state_263108__$1;
(statearr_263110_263133[(2)] = inst_263104);

(statearr_263110_263133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (1))){
var state_263108__$1 = state_263108;
var statearr_263111_263134 = state_263108__$1;
(statearr_263111_263134[(2)] = null);

(statearr_263111_263134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (4))){
var inst_263087 = (state_263108[(7)]);
var inst_263087__$1 = (state_263108[(2)]);
var inst_263088 = (inst_263087__$1 == null);
var state_263108__$1 = (function (){var statearr_263112 = state_263108;
(statearr_263112[(7)] = inst_263087__$1);

return statearr_263112;
})();
if(cljs.core.truth_(inst_263088)){
var statearr_263113_263135 = state_263108__$1;
(statearr_263113_263135[(1)] = (5));

} else {
var statearr_263114_263136 = state_263108__$1;
(statearr_263114_263136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (13))){
var state_263108__$1 = state_263108;
var statearr_263115_263137 = state_263108__$1;
(statearr_263115_263137[(2)] = null);

(statearr_263115_263137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (6))){
var inst_263087 = (state_263108[(7)]);
var state_263108__$1 = state_263108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263108__$1,(11),to,inst_263087);
} else {
if((state_val_263109 === (3))){
var inst_263106 = (state_263108[(2)]);
var state_263108__$1 = state_263108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263108__$1,inst_263106);
} else {
if((state_val_263109 === (12))){
var state_263108__$1 = state_263108;
var statearr_263116_263138 = state_263108__$1;
(statearr_263116_263138[(2)] = null);

(statearr_263116_263138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (2))){
var state_263108__$1 = state_263108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263108__$1,(4),from);
} else {
if((state_val_263109 === (11))){
var inst_263097 = (state_263108[(2)]);
var state_263108__$1 = state_263108;
if(cljs.core.truth_(inst_263097)){
var statearr_263117_263139 = state_263108__$1;
(statearr_263117_263139[(1)] = (12));

} else {
var statearr_263118_263140 = state_263108__$1;
(statearr_263118_263140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (9))){
var state_263108__$1 = state_263108;
var statearr_263119_263141 = state_263108__$1;
(statearr_263119_263141[(2)] = null);

(statearr_263119_263141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (5))){
var state_263108__$1 = state_263108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_263120_263142 = state_263108__$1;
(statearr_263120_263142[(1)] = (8));

} else {
var statearr_263121_263143 = state_263108__$1;
(statearr_263121_263143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (14))){
var inst_263102 = (state_263108[(2)]);
var state_263108__$1 = state_263108;
var statearr_263122_263144 = state_263108__$1;
(statearr_263122_263144[(2)] = inst_263102);

(statearr_263122_263144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (10))){
var inst_263094 = (state_263108[(2)]);
var state_263108__$1 = state_263108;
var statearr_263123_263145 = state_263108__$1;
(statearr_263123_263145[(2)] = inst_263094);

(statearr_263123_263145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263109 === (8))){
var inst_263091 = cljs.core.async.close_BANG_.call(null,to);
var state_263108__$1 = state_263108;
var statearr_263124_263146 = state_263108__$1;
(statearr_263124_263146[(2)] = inst_263091);

(statearr_263124_263146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__9199__auto___263132))
;
return ((function (switch__9184__auto__,c__9199__auto___263132){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263128 = [null,null,null,null,null,null,null,null];
(statearr_263128[(0)] = state_machine__9185__auto__);

(statearr_263128[(1)] = (1));

return statearr_263128;
});
var state_machine__9185__auto____1 = (function (state_263108){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263129){if((e263129 instanceof Object)){
var ex__9188__auto__ = e263129;
var statearr_263130_263147 = state_263108;
(statearr_263130_263147[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263148 = state_263108;
state_263108 = G__263148;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263108){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___263132))
})();
var state__9201__auto__ = (function (){var statearr_263131 = f__9200__auto__.call(null);
(statearr_263131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263132);

return statearr_263131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___263132))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__263332){
var vec__263333 = p__263332;
var v = cljs.core.nth.call(null,vec__263333,(0),null);
var p = cljs.core.nth.call(null,vec__263333,(1),null);
var job = vec__263333;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___263515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results){
return (function (state_263338){
var state_val_263339 = (state_263338[(1)]);
if((state_val_263339 === (2))){
var inst_263335 = (state_263338[(2)]);
var inst_263336 = cljs.core.async.close_BANG_.call(null,res);
var state_263338__$1 = (function (){var statearr_263340 = state_263338;
(statearr_263340[(7)] = inst_263335);

return statearr_263340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263338__$1,inst_263336);
} else {
if((state_val_263339 === (1))){
var state_263338__$1 = state_263338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263338__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263344 = [null,null,null,null,null,null,null,null];
(statearr_263344[(0)] = state_machine__9185__auto__);

(statearr_263344[(1)] = (1));

return statearr_263344;
});
var state_machine__9185__auto____1 = (function (state_263338){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263345){if((e263345 instanceof Object)){
var ex__9188__auto__ = e263345;
var statearr_263346_263516 = state_263338;
(statearr_263346_263516[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263517 = state_263338;
state_263338 = G__263517;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263338){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_263347 = f__9200__auto__.call(null);
(statearr_263347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263515);

return statearr_263347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___263515,res,vec__263333,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__263348){
var vec__263349 = p__263348;
var v = cljs.core.nth.call(null,vec__263349,(0),null);
var p = cljs.core.nth.call(null,vec__263349,(1),null);
var job = vec__263349;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4509__auto___263518 = n;
var __263519 = (0);
while(true){
if((__263519 < n__4509__auto___263518)){
var G__263350_263520 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__263350_263520) {
case "async":
var c__9199__auto___263522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__263519,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__263519,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function (state_263363){
var state_val_263364 = (state_263363[(1)]);
if((state_val_263364 === (7))){
var inst_263359 = (state_263363[(2)]);
var state_263363__$1 = state_263363;
var statearr_263365_263523 = state_263363__$1;
(statearr_263365_263523[(2)] = inst_263359);

(statearr_263365_263523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263364 === (6))){
var state_263363__$1 = state_263363;
var statearr_263366_263524 = state_263363__$1;
(statearr_263366_263524[(2)] = null);

(statearr_263366_263524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263364 === (5))){
var state_263363__$1 = state_263363;
var statearr_263367_263525 = state_263363__$1;
(statearr_263367_263525[(2)] = null);

(statearr_263367_263525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263364 === (4))){
var inst_263353 = (state_263363[(2)]);
var inst_263354 = async.call(null,inst_263353);
var state_263363__$1 = state_263363;
if(cljs.core.truth_(inst_263354)){
var statearr_263368_263526 = state_263363__$1;
(statearr_263368_263526[(1)] = (5));

} else {
var statearr_263369_263527 = state_263363__$1;
(statearr_263369_263527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263364 === (3))){
var inst_263361 = (state_263363[(2)]);
var state_263363__$1 = state_263363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263363__$1,inst_263361);
} else {
if((state_val_263364 === (2))){
var state_263363__$1 = state_263363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263363__$1,(4),jobs);
} else {
if((state_val_263364 === (1))){
var state_263363__$1 = state_263363;
var statearr_263370_263528 = state_263363__$1;
(statearr_263370_263528[(2)] = null);

(statearr_263370_263528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__263519,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
;
return ((function (__263519,switch__9184__auto__,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263374 = [null,null,null,null,null,null,null];
(statearr_263374[(0)] = state_machine__9185__auto__);

(statearr_263374[(1)] = (1));

return statearr_263374;
});
var state_machine__9185__auto____1 = (function (state_263363){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263375){if((e263375 instanceof Object)){
var ex__9188__auto__ = e263375;
var statearr_263376_263529 = state_263363;
(statearr_263376_263529[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263530 = state_263363;
state_263363 = G__263530;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263363){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__263519,switch__9184__auto__,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_263377 = f__9200__auto__.call(null);
(statearr_263377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263522);

return statearr_263377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__263519,c__9199__auto___263522,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___263531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__263519,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__263519,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function (state_263390){
var state_val_263391 = (state_263390[(1)]);
if((state_val_263391 === (7))){
var inst_263386 = (state_263390[(2)]);
var state_263390__$1 = state_263390;
var statearr_263392_263532 = state_263390__$1;
(statearr_263392_263532[(2)] = inst_263386);

(statearr_263392_263532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263391 === (6))){
var state_263390__$1 = state_263390;
var statearr_263393_263533 = state_263390__$1;
(statearr_263393_263533[(2)] = null);

(statearr_263393_263533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263391 === (5))){
var state_263390__$1 = state_263390;
var statearr_263394_263534 = state_263390__$1;
(statearr_263394_263534[(2)] = null);

(statearr_263394_263534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263391 === (4))){
var inst_263380 = (state_263390[(2)]);
var inst_263381 = process.call(null,inst_263380);
var state_263390__$1 = state_263390;
if(cljs.core.truth_(inst_263381)){
var statearr_263395_263535 = state_263390__$1;
(statearr_263395_263535[(1)] = (5));

} else {
var statearr_263396_263536 = state_263390__$1;
(statearr_263396_263536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263391 === (3))){
var inst_263388 = (state_263390[(2)]);
var state_263390__$1 = state_263390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263390__$1,inst_263388);
} else {
if((state_val_263391 === (2))){
var state_263390__$1 = state_263390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263390__$1,(4),jobs);
} else {
if((state_val_263391 === (1))){
var state_263390__$1 = state_263390;
var statearr_263397_263537 = state_263390__$1;
(statearr_263397_263537[(2)] = null);

(statearr_263397_263537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__263519,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
;
return ((function (__263519,switch__9184__auto__,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263401 = [null,null,null,null,null,null,null];
(statearr_263401[(0)] = state_machine__9185__auto__);

(statearr_263401[(1)] = (1));

return statearr_263401;
});
var state_machine__9185__auto____1 = (function (state_263390){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263402){if((e263402 instanceof Object)){
var ex__9188__auto__ = e263402;
var statearr_263403_263538 = state_263390;
(statearr_263403_263538[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263539 = state_263390;
state_263390 = G__263539;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263390){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__263519,switch__9184__auto__,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_263404 = f__9200__auto__.call(null);
(statearr_263404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263531);

return statearr_263404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__263519,c__9199__auto___263531,G__263350_263520,n__4509__auto___263518,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__263540 = (__263519 + (1));
__263519 = G__263540;
continue;
} else {
}
break;
}

var c__9199__auto___263541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___263541,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___263541,jobs,results,process,async){
return (function (state_263426){
var state_val_263427 = (state_263426[(1)]);
if((state_val_263427 === (9))){
var inst_263419 = (state_263426[(2)]);
var state_263426__$1 = (function (){var statearr_263428 = state_263426;
(statearr_263428[(7)] = inst_263419);

return statearr_263428;
})();
var statearr_263429_263542 = state_263426__$1;
(statearr_263429_263542[(2)] = null);

(statearr_263429_263542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263427 === (8))){
var inst_263412 = (state_263426[(8)]);
var inst_263417 = (state_263426[(2)]);
var state_263426__$1 = (function (){var statearr_263430 = state_263426;
(statearr_263430[(9)] = inst_263417);

return statearr_263430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263426__$1,(9),results,inst_263412);
} else {
if((state_val_263427 === (7))){
var inst_263422 = (state_263426[(2)]);
var state_263426__$1 = state_263426;
var statearr_263431_263543 = state_263426__$1;
(statearr_263431_263543[(2)] = inst_263422);

(statearr_263431_263543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263427 === (6))){
var inst_263412 = (state_263426[(8)]);
var inst_263407 = (state_263426[(10)]);
var inst_263412__$1 = cljs.core.async.chan.call(null,(1));
var inst_263413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_263414 = [inst_263407,inst_263412__$1];
var inst_263415 = (new cljs.core.PersistentVector(null,2,(5),inst_263413,inst_263414,null));
var state_263426__$1 = (function (){var statearr_263432 = state_263426;
(statearr_263432[(8)] = inst_263412__$1);

return statearr_263432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263426__$1,(8),jobs,inst_263415);
} else {
if((state_val_263427 === (5))){
var inst_263410 = cljs.core.async.close_BANG_.call(null,jobs);
var state_263426__$1 = state_263426;
var statearr_263433_263544 = state_263426__$1;
(statearr_263433_263544[(2)] = inst_263410);

(statearr_263433_263544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263427 === (4))){
var inst_263407 = (state_263426[(10)]);
var inst_263407__$1 = (state_263426[(2)]);
var inst_263408 = (inst_263407__$1 == null);
var state_263426__$1 = (function (){var statearr_263434 = state_263426;
(statearr_263434[(10)] = inst_263407__$1);

return statearr_263434;
})();
if(cljs.core.truth_(inst_263408)){
var statearr_263435_263545 = state_263426__$1;
(statearr_263435_263545[(1)] = (5));

} else {
var statearr_263436_263546 = state_263426__$1;
(statearr_263436_263546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263427 === (3))){
var inst_263424 = (state_263426[(2)]);
var state_263426__$1 = state_263426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263426__$1,inst_263424);
} else {
if((state_val_263427 === (2))){
var state_263426__$1 = state_263426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263426__$1,(4),from);
} else {
if((state_val_263427 === (1))){
var state_263426__$1 = state_263426;
var statearr_263437_263547 = state_263426__$1;
(statearr_263437_263547[(2)] = null);

(statearr_263437_263547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__9199__auto___263541,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___263541,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_263441[(0)] = state_machine__9185__auto__);

(statearr_263441[(1)] = (1));

return statearr_263441;
});
var state_machine__9185__auto____1 = (function (state_263426){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263442){if((e263442 instanceof Object)){
var ex__9188__auto__ = e263442;
var statearr_263443_263548 = state_263426;
(statearr_263443_263548[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263549 = state_263426;
state_263426 = G__263549;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263426){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___263541,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_263444 = f__9200__auto__.call(null);
(statearr_263444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263541);

return statearr_263444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___263541,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_263482){
var state_val_263483 = (state_263482[(1)]);
if((state_val_263483 === (7))){
var inst_263478 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
var statearr_263484_263550 = state_263482__$1;
(statearr_263484_263550[(2)] = inst_263478);

(statearr_263484_263550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (20))){
var state_263482__$1 = state_263482;
var statearr_263485_263551 = state_263482__$1;
(statearr_263485_263551[(2)] = null);

(statearr_263485_263551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (1))){
var state_263482__$1 = state_263482;
var statearr_263486_263552 = state_263482__$1;
(statearr_263486_263552[(2)] = null);

(statearr_263486_263552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (4))){
var inst_263447 = (state_263482[(7)]);
var inst_263447__$1 = (state_263482[(2)]);
var inst_263448 = (inst_263447__$1 == null);
var state_263482__$1 = (function (){var statearr_263487 = state_263482;
(statearr_263487[(7)] = inst_263447__$1);

return statearr_263487;
})();
if(cljs.core.truth_(inst_263448)){
var statearr_263488_263553 = state_263482__$1;
(statearr_263488_263553[(1)] = (5));

} else {
var statearr_263489_263554 = state_263482__$1;
(statearr_263489_263554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (15))){
var inst_263460 = (state_263482[(8)]);
var state_263482__$1 = state_263482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263482__$1,(18),to,inst_263460);
} else {
if((state_val_263483 === (21))){
var inst_263473 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
var statearr_263490_263555 = state_263482__$1;
(statearr_263490_263555[(2)] = inst_263473);

(statearr_263490_263555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (13))){
var inst_263475 = (state_263482[(2)]);
var state_263482__$1 = (function (){var statearr_263491 = state_263482;
(statearr_263491[(9)] = inst_263475);

return statearr_263491;
})();
var statearr_263492_263556 = state_263482__$1;
(statearr_263492_263556[(2)] = null);

(statearr_263492_263556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (6))){
var inst_263447 = (state_263482[(7)]);
var state_263482__$1 = state_263482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263482__$1,(11),inst_263447);
} else {
if((state_val_263483 === (17))){
var inst_263468 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
if(cljs.core.truth_(inst_263468)){
var statearr_263493_263557 = state_263482__$1;
(statearr_263493_263557[(1)] = (19));

} else {
var statearr_263494_263558 = state_263482__$1;
(statearr_263494_263558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (3))){
var inst_263480 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263482__$1,inst_263480);
} else {
if((state_val_263483 === (12))){
var inst_263457 = (state_263482[(10)]);
var state_263482__$1 = state_263482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263482__$1,(14),inst_263457);
} else {
if((state_val_263483 === (2))){
var state_263482__$1 = state_263482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263482__$1,(4),results);
} else {
if((state_val_263483 === (19))){
var state_263482__$1 = state_263482;
var statearr_263495_263559 = state_263482__$1;
(statearr_263495_263559[(2)] = null);

(statearr_263495_263559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (11))){
var inst_263457 = (state_263482[(2)]);
var state_263482__$1 = (function (){var statearr_263496 = state_263482;
(statearr_263496[(10)] = inst_263457);

return statearr_263496;
})();
var statearr_263497_263560 = state_263482__$1;
(statearr_263497_263560[(2)] = null);

(statearr_263497_263560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (9))){
var state_263482__$1 = state_263482;
var statearr_263498_263561 = state_263482__$1;
(statearr_263498_263561[(2)] = null);

(statearr_263498_263561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (5))){
var state_263482__$1 = state_263482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_263499_263562 = state_263482__$1;
(statearr_263499_263562[(1)] = (8));

} else {
var statearr_263500_263563 = state_263482__$1;
(statearr_263500_263563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (14))){
var inst_263460 = (state_263482[(8)]);
var inst_263462 = (state_263482[(11)]);
var inst_263460__$1 = (state_263482[(2)]);
var inst_263461 = (inst_263460__$1 == null);
var inst_263462__$1 = cljs.core.not.call(null,inst_263461);
var state_263482__$1 = (function (){var statearr_263501 = state_263482;
(statearr_263501[(8)] = inst_263460__$1);

(statearr_263501[(11)] = inst_263462__$1);

return statearr_263501;
})();
if(inst_263462__$1){
var statearr_263502_263564 = state_263482__$1;
(statearr_263502_263564[(1)] = (15));

} else {
var statearr_263503_263565 = state_263482__$1;
(statearr_263503_263565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (16))){
var inst_263462 = (state_263482[(11)]);
var state_263482__$1 = state_263482;
var statearr_263504_263566 = state_263482__$1;
(statearr_263504_263566[(2)] = inst_263462);

(statearr_263504_263566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (10))){
var inst_263454 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
var statearr_263505_263567 = state_263482__$1;
(statearr_263505_263567[(2)] = inst_263454);

(statearr_263505_263567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (18))){
var inst_263465 = (state_263482[(2)]);
var state_263482__$1 = state_263482;
var statearr_263506_263568 = state_263482__$1;
(statearr_263506_263568[(2)] = inst_263465);

(statearr_263506_263568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263483 === (8))){
var inst_263451 = cljs.core.async.close_BANG_.call(null,to);
var state_263482__$1 = state_263482;
var statearr_263507_263569 = state_263482__$1;
(statearr_263507_263569[(2)] = inst_263451);

(statearr_263507_263569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9199__auto__,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto__,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_263511[(0)] = state_machine__9185__auto__);

(statearr_263511[(1)] = (1));

return statearr_263511;
});
var state_machine__9185__auto____1 = (function (state_263482){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263512){if((e263512 instanceof Object)){
var ex__9188__auto__ = e263512;
var statearr_263513_263570 = state_263482;
(statearr_263513_263570[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263571 = state_263482;
state_263482 = G__263571;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263482){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_263514 = f__9200__auto__.call(null);
(statearr_263514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_263514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto__,jobs,results,process,async))
);

return c__9199__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9199__auto___263672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___263672,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___263672,tc,fc){
return (function (state_263647){
var state_val_263648 = (state_263647[(1)]);
if((state_val_263648 === (7))){
var inst_263643 = (state_263647[(2)]);
var state_263647__$1 = state_263647;
var statearr_263649_263673 = state_263647__$1;
(statearr_263649_263673[(2)] = inst_263643);

(statearr_263649_263673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (1))){
var state_263647__$1 = state_263647;
var statearr_263650_263674 = state_263647__$1;
(statearr_263650_263674[(2)] = null);

(statearr_263650_263674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (4))){
var inst_263624 = (state_263647[(7)]);
var inst_263624__$1 = (state_263647[(2)]);
var inst_263625 = (inst_263624__$1 == null);
var state_263647__$1 = (function (){var statearr_263651 = state_263647;
(statearr_263651[(7)] = inst_263624__$1);

return statearr_263651;
})();
if(cljs.core.truth_(inst_263625)){
var statearr_263652_263675 = state_263647__$1;
(statearr_263652_263675[(1)] = (5));

} else {
var statearr_263653_263676 = state_263647__$1;
(statearr_263653_263676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (13))){
var state_263647__$1 = state_263647;
var statearr_263654_263677 = state_263647__$1;
(statearr_263654_263677[(2)] = null);

(statearr_263654_263677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (6))){
var inst_263624 = (state_263647[(7)]);
var inst_263630 = p.call(null,inst_263624);
var state_263647__$1 = state_263647;
if(cljs.core.truth_(inst_263630)){
var statearr_263655_263678 = state_263647__$1;
(statearr_263655_263678[(1)] = (9));

} else {
var statearr_263656_263679 = state_263647__$1;
(statearr_263656_263679[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (3))){
var inst_263645 = (state_263647[(2)]);
var state_263647__$1 = state_263647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263647__$1,inst_263645);
} else {
if((state_val_263648 === (12))){
var state_263647__$1 = state_263647;
var statearr_263657_263680 = state_263647__$1;
(statearr_263657_263680[(2)] = null);

(statearr_263657_263680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (2))){
var state_263647__$1 = state_263647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263647__$1,(4),ch);
} else {
if((state_val_263648 === (11))){
var inst_263624 = (state_263647[(7)]);
var inst_263634 = (state_263647[(2)]);
var state_263647__$1 = state_263647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263647__$1,(8),inst_263634,inst_263624);
} else {
if((state_val_263648 === (9))){
var state_263647__$1 = state_263647;
var statearr_263658_263681 = state_263647__$1;
(statearr_263658_263681[(2)] = tc);

(statearr_263658_263681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (5))){
var inst_263627 = cljs.core.async.close_BANG_.call(null,tc);
var inst_263628 = cljs.core.async.close_BANG_.call(null,fc);
var state_263647__$1 = (function (){var statearr_263659 = state_263647;
(statearr_263659[(8)] = inst_263627);

return statearr_263659;
})();
var statearr_263660_263682 = state_263647__$1;
(statearr_263660_263682[(2)] = inst_263628);

(statearr_263660_263682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (14))){
var inst_263641 = (state_263647[(2)]);
var state_263647__$1 = state_263647;
var statearr_263661_263683 = state_263647__$1;
(statearr_263661_263683[(2)] = inst_263641);

(statearr_263661_263683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (10))){
var state_263647__$1 = state_263647;
var statearr_263662_263684 = state_263647__$1;
(statearr_263662_263684[(2)] = fc);

(statearr_263662_263684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263648 === (8))){
var inst_263636 = (state_263647[(2)]);
var state_263647__$1 = state_263647;
if(cljs.core.truth_(inst_263636)){
var statearr_263663_263685 = state_263647__$1;
(statearr_263663_263685[(1)] = (12));

} else {
var statearr_263664_263686 = state_263647__$1;
(statearr_263664_263686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__9199__auto___263672,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___263672,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263668 = [null,null,null,null,null,null,null,null,null];
(statearr_263668[(0)] = state_machine__9185__auto__);

(statearr_263668[(1)] = (1));

return statearr_263668;
});
var state_machine__9185__auto____1 = (function (state_263647){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263669){if((e263669 instanceof Object)){
var ex__9188__auto__ = e263669;
var statearr_263670_263687 = state_263647;
(statearr_263670_263687[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263688 = state_263647;
state_263647 = G__263688;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263647){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___263672,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_263671 = f__9200__auto__.call(null);
(statearr_263671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___263672);

return statearr_263671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___263672,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__){
return (function (state_263735){
var state_val_263736 = (state_263735[(1)]);
if((state_val_263736 === (7))){
var inst_263731 = (state_263735[(2)]);
var state_263735__$1 = state_263735;
var statearr_263737_263753 = state_263735__$1;
(statearr_263737_263753[(2)] = inst_263731);

(statearr_263737_263753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263736 === (6))){
var inst_263724 = (state_263735[(7)]);
var inst_263721 = (state_263735[(8)]);
var inst_263728 = f.call(null,inst_263721,inst_263724);
var inst_263721__$1 = inst_263728;
var state_263735__$1 = (function (){var statearr_263738 = state_263735;
(statearr_263738[(8)] = inst_263721__$1);

return statearr_263738;
})();
var statearr_263739_263754 = state_263735__$1;
(statearr_263739_263754[(2)] = null);

(statearr_263739_263754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263736 === (5))){
var inst_263721 = (state_263735[(8)]);
var state_263735__$1 = state_263735;
var statearr_263740_263755 = state_263735__$1;
(statearr_263740_263755[(2)] = inst_263721);

(statearr_263740_263755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263736 === (4))){
var inst_263724 = (state_263735[(7)]);
var inst_263724__$1 = (state_263735[(2)]);
var inst_263725 = (inst_263724__$1 == null);
var state_263735__$1 = (function (){var statearr_263741 = state_263735;
(statearr_263741[(7)] = inst_263724__$1);

return statearr_263741;
})();
if(cljs.core.truth_(inst_263725)){
var statearr_263742_263756 = state_263735__$1;
(statearr_263742_263756[(1)] = (5));

} else {
var statearr_263743_263757 = state_263735__$1;
(statearr_263743_263757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263736 === (3))){
var inst_263733 = (state_263735[(2)]);
var state_263735__$1 = state_263735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263735__$1,inst_263733);
} else {
if((state_val_263736 === (2))){
var state_263735__$1 = state_263735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_263735__$1,(4),ch);
} else {
if((state_val_263736 === (1))){
var inst_263721 = init;
var state_263735__$1 = (function (){var statearr_263744 = state_263735;
(statearr_263744[(8)] = inst_263721);

return statearr_263744;
})();
var statearr_263745_263758 = state_263735__$1;
(statearr_263745_263758[(2)] = null);

(statearr_263745_263758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__9199__auto__))
;
return ((function (switch__9184__auto__,c__9199__auto__){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263749 = [null,null,null,null,null,null,null,null,null];
(statearr_263749[(0)] = state_machine__9185__auto__);

(statearr_263749[(1)] = (1));

return statearr_263749;
});
var state_machine__9185__auto____1 = (function (state_263735){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263750){if((e263750 instanceof Object)){
var ex__9188__auto__ = e263750;
var statearr_263751_263759 = state_263735;
(statearr_263751_263759[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263760 = state_263735;
state_263735 = G__263760;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263735){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_263752 = f__9200__auto__.call(null);
(statearr_263752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_263752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto__))
);

return c__9199__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__){
return (function (state_263834){
var state_val_263835 = (state_263834[(1)]);
if((state_val_263835 === (7))){
var inst_263816 = (state_263834[(2)]);
var state_263834__$1 = state_263834;
var statearr_263836_263859 = state_263834__$1;
(statearr_263836_263859[(2)] = inst_263816);

(statearr_263836_263859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (1))){
var inst_263810 = cljs.core.seq.call(null,coll);
var inst_263811 = inst_263810;
var state_263834__$1 = (function (){var statearr_263837 = state_263834;
(statearr_263837[(7)] = inst_263811);

return statearr_263837;
})();
var statearr_263838_263860 = state_263834__$1;
(statearr_263838_263860[(2)] = null);

(statearr_263838_263860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (4))){
var inst_263811 = (state_263834[(7)]);
var inst_263814 = cljs.core.first.call(null,inst_263811);
var state_263834__$1 = state_263834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_263834__$1,(7),ch,inst_263814);
} else {
if((state_val_263835 === (13))){
var inst_263828 = (state_263834[(2)]);
var state_263834__$1 = state_263834;
var statearr_263839_263861 = state_263834__$1;
(statearr_263839_263861[(2)] = inst_263828);

(statearr_263839_263861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (6))){
var inst_263819 = (state_263834[(2)]);
var state_263834__$1 = state_263834;
if(cljs.core.truth_(inst_263819)){
var statearr_263840_263862 = state_263834__$1;
(statearr_263840_263862[(1)] = (8));

} else {
var statearr_263841_263863 = state_263834__$1;
(statearr_263841_263863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (3))){
var inst_263832 = (state_263834[(2)]);
var state_263834__$1 = state_263834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_263834__$1,inst_263832);
} else {
if((state_val_263835 === (12))){
var state_263834__$1 = state_263834;
var statearr_263842_263864 = state_263834__$1;
(statearr_263842_263864[(2)] = null);

(statearr_263842_263864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (2))){
var inst_263811 = (state_263834[(7)]);
var state_263834__$1 = state_263834;
if(cljs.core.truth_(inst_263811)){
var statearr_263843_263865 = state_263834__$1;
(statearr_263843_263865[(1)] = (4));

} else {
var statearr_263844_263866 = state_263834__$1;
(statearr_263844_263866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (11))){
var inst_263825 = cljs.core.async.close_BANG_.call(null,ch);
var state_263834__$1 = state_263834;
var statearr_263845_263867 = state_263834__$1;
(statearr_263845_263867[(2)] = inst_263825);

(statearr_263845_263867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (9))){
var state_263834__$1 = state_263834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_263846_263868 = state_263834__$1;
(statearr_263846_263868[(1)] = (11));

} else {
var statearr_263847_263869 = state_263834__$1;
(statearr_263847_263869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (5))){
var inst_263811 = (state_263834[(7)]);
var state_263834__$1 = state_263834;
var statearr_263848_263870 = state_263834__$1;
(statearr_263848_263870[(2)] = inst_263811);

(statearr_263848_263870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (10))){
var inst_263830 = (state_263834[(2)]);
var state_263834__$1 = state_263834;
var statearr_263849_263871 = state_263834__$1;
(statearr_263849_263871[(2)] = inst_263830);

(statearr_263849_263871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_263835 === (8))){
var inst_263811 = (state_263834[(7)]);
var inst_263821 = cljs.core.next.call(null,inst_263811);
var inst_263811__$1 = inst_263821;
var state_263834__$1 = (function (){var statearr_263850 = state_263834;
(statearr_263850[(7)] = inst_263811__$1);

return statearr_263850;
})();
var statearr_263851_263872 = state_263834__$1;
(statearr_263851_263872[(2)] = null);

(statearr_263851_263872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__9199__auto__))
;
return ((function (switch__9184__auto__,c__9199__auto__){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_263855 = [null,null,null,null,null,null,null,null];
(statearr_263855[(0)] = state_machine__9185__auto__);

(statearr_263855[(1)] = (1));

return statearr_263855;
});
var state_machine__9185__auto____1 = (function (state_263834){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_263834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e263856){if((e263856 instanceof Object)){
var ex__9188__auto__ = e263856;
var statearr_263857_263873 = state_263834;
(statearr_263857_263873[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_263834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e263856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__263874 = state_263834;
state_263834 = G__263874;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_263834){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_263834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_263858 = f__9200__auto__.call(null);
(statearr_263858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_263858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto__))
);

return c__9199__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj263876 = {};
return obj263876;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3610__auto__ = _;
if(and__3610__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4266__auto__ = (((_ == null))?null:_);
return (function (){var or__3622__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj263878 = {};
return obj263878;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t264100 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t264100 = (function (cs,ch,mult,meta264101){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta264101 = meta264101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t264100.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t264100.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t264100.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t264100.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t264100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t264100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t264100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_264102){
var self__ = this;
var _264102__$1 = this;
return self__.meta264101;
});})(cs))
;

cljs.core.async.t264100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_264102,meta264101__$1){
var self__ = this;
var _264102__$1 = this;
return (new cljs.core.async.t264100(self__.cs,self__.ch,self__.mult,meta264101__$1));
});})(cs))
;

cljs.core.async.t264100.cljs$lang$type = true;

cljs.core.async.t264100.cljs$lang$ctorStr = "cljs.core.async/t264100";

cljs.core.async.t264100.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t264100");
});})(cs))
;

cljs.core.async.__GT_t264100 = ((function (cs){
return (function __GT_t264100(cs__$1,ch__$1,mult__$1,meta264101){
return (new cljs.core.async.t264100(cs__$1,ch__$1,mult__$1,meta264101));
});})(cs))
;

}

return (new cljs.core.async.t264100(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9199__auto___264321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___264321,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___264321,cs,m,dchan,dctr,done){
return (function (state_264233){
var state_val_264234 = (state_264233[(1)]);
if((state_val_264234 === (7))){
var inst_264229 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264235_264322 = state_264233__$1;
(statearr_264235_264322[(2)] = inst_264229);

(statearr_264235_264322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (20))){
var inst_264134 = (state_264233[(7)]);
var inst_264144 = cljs.core.first.call(null,inst_264134);
var inst_264145 = cljs.core.nth.call(null,inst_264144,(0),null);
var inst_264146 = cljs.core.nth.call(null,inst_264144,(1),null);
var state_264233__$1 = (function (){var statearr_264236 = state_264233;
(statearr_264236[(8)] = inst_264145);

return statearr_264236;
})();
if(cljs.core.truth_(inst_264146)){
var statearr_264237_264323 = state_264233__$1;
(statearr_264237_264323[(1)] = (22));

} else {
var statearr_264238_264324 = state_264233__$1;
(statearr_264238_264324[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (27))){
var inst_264174 = (state_264233[(9)]);
var inst_264176 = (state_264233[(10)]);
var inst_264105 = (state_264233[(11)]);
var inst_264181 = (state_264233[(12)]);
var inst_264181__$1 = cljs.core._nth.call(null,inst_264174,inst_264176);
var inst_264182 = cljs.core.async.put_BANG_.call(null,inst_264181__$1,inst_264105,done);
var state_264233__$1 = (function (){var statearr_264239 = state_264233;
(statearr_264239[(12)] = inst_264181__$1);

return statearr_264239;
})();
if(cljs.core.truth_(inst_264182)){
var statearr_264240_264325 = state_264233__$1;
(statearr_264240_264325[(1)] = (30));

} else {
var statearr_264241_264326 = state_264233__$1;
(statearr_264241_264326[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (1))){
var state_264233__$1 = state_264233;
var statearr_264242_264327 = state_264233__$1;
(statearr_264242_264327[(2)] = null);

(statearr_264242_264327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (24))){
var inst_264134 = (state_264233[(7)]);
var inst_264151 = (state_264233[(2)]);
var inst_264152 = cljs.core.next.call(null,inst_264134);
var inst_264114 = inst_264152;
var inst_264115 = null;
var inst_264116 = (0);
var inst_264117 = (0);
var state_264233__$1 = (function (){var statearr_264243 = state_264233;
(statearr_264243[(13)] = inst_264117);

(statearr_264243[(14)] = inst_264116);

(statearr_264243[(15)] = inst_264114);

(statearr_264243[(16)] = inst_264115);

(statearr_264243[(17)] = inst_264151);

return statearr_264243;
})();
var statearr_264244_264328 = state_264233__$1;
(statearr_264244_264328[(2)] = null);

(statearr_264244_264328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (39))){
var state_264233__$1 = state_264233;
var statearr_264248_264329 = state_264233__$1;
(statearr_264248_264329[(2)] = null);

(statearr_264248_264329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (4))){
var inst_264105 = (state_264233[(11)]);
var inst_264105__$1 = (state_264233[(2)]);
var inst_264106 = (inst_264105__$1 == null);
var state_264233__$1 = (function (){var statearr_264249 = state_264233;
(statearr_264249[(11)] = inst_264105__$1);

return statearr_264249;
})();
if(cljs.core.truth_(inst_264106)){
var statearr_264250_264330 = state_264233__$1;
(statearr_264250_264330[(1)] = (5));

} else {
var statearr_264251_264331 = state_264233__$1;
(statearr_264251_264331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (15))){
var inst_264117 = (state_264233[(13)]);
var inst_264116 = (state_264233[(14)]);
var inst_264114 = (state_264233[(15)]);
var inst_264115 = (state_264233[(16)]);
var inst_264130 = (state_264233[(2)]);
var inst_264131 = (inst_264117 + (1));
var tmp264245 = inst_264116;
var tmp264246 = inst_264114;
var tmp264247 = inst_264115;
var inst_264114__$1 = tmp264246;
var inst_264115__$1 = tmp264247;
var inst_264116__$1 = tmp264245;
var inst_264117__$1 = inst_264131;
var state_264233__$1 = (function (){var statearr_264252 = state_264233;
(statearr_264252[(13)] = inst_264117__$1);

(statearr_264252[(14)] = inst_264116__$1);

(statearr_264252[(15)] = inst_264114__$1);

(statearr_264252[(16)] = inst_264115__$1);

(statearr_264252[(18)] = inst_264130);

return statearr_264252;
})();
var statearr_264253_264332 = state_264233__$1;
(statearr_264253_264332[(2)] = null);

(statearr_264253_264332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (21))){
var inst_264155 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264257_264333 = state_264233__$1;
(statearr_264257_264333[(2)] = inst_264155);

(statearr_264257_264333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (31))){
var inst_264181 = (state_264233[(12)]);
var inst_264185 = done.call(null,null);
var inst_264186 = cljs.core.async.untap_STAR_.call(null,m,inst_264181);
var state_264233__$1 = (function (){var statearr_264258 = state_264233;
(statearr_264258[(19)] = inst_264185);

return statearr_264258;
})();
var statearr_264259_264334 = state_264233__$1;
(statearr_264259_264334[(2)] = inst_264186);

(statearr_264259_264334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (32))){
var inst_264174 = (state_264233[(9)]);
var inst_264176 = (state_264233[(10)]);
var inst_264173 = (state_264233[(20)]);
var inst_264175 = (state_264233[(21)]);
var inst_264188 = (state_264233[(2)]);
var inst_264189 = (inst_264176 + (1));
var tmp264254 = inst_264174;
var tmp264255 = inst_264173;
var tmp264256 = inst_264175;
var inst_264173__$1 = tmp264255;
var inst_264174__$1 = tmp264254;
var inst_264175__$1 = tmp264256;
var inst_264176__$1 = inst_264189;
var state_264233__$1 = (function (){var statearr_264260 = state_264233;
(statearr_264260[(9)] = inst_264174__$1);

(statearr_264260[(10)] = inst_264176__$1);

(statearr_264260[(20)] = inst_264173__$1);

(statearr_264260[(22)] = inst_264188);

(statearr_264260[(21)] = inst_264175__$1);

return statearr_264260;
})();
var statearr_264261_264335 = state_264233__$1;
(statearr_264261_264335[(2)] = null);

(statearr_264261_264335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (40))){
var inst_264201 = (state_264233[(23)]);
var inst_264205 = done.call(null,null);
var inst_264206 = cljs.core.async.untap_STAR_.call(null,m,inst_264201);
var state_264233__$1 = (function (){var statearr_264262 = state_264233;
(statearr_264262[(24)] = inst_264205);

return statearr_264262;
})();
var statearr_264263_264336 = state_264233__$1;
(statearr_264263_264336[(2)] = inst_264206);

(statearr_264263_264336[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (33))){
var inst_264192 = (state_264233[(25)]);
var inst_264194 = cljs.core.chunked_seq_QMARK_.call(null,inst_264192);
var state_264233__$1 = state_264233;
if(inst_264194){
var statearr_264264_264337 = state_264233__$1;
(statearr_264264_264337[(1)] = (36));

} else {
var statearr_264265_264338 = state_264233__$1;
(statearr_264265_264338[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (13))){
var inst_264124 = (state_264233[(26)]);
var inst_264127 = cljs.core.async.close_BANG_.call(null,inst_264124);
var state_264233__$1 = state_264233;
var statearr_264266_264339 = state_264233__$1;
(statearr_264266_264339[(2)] = inst_264127);

(statearr_264266_264339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (22))){
var inst_264145 = (state_264233[(8)]);
var inst_264148 = cljs.core.async.close_BANG_.call(null,inst_264145);
var state_264233__$1 = state_264233;
var statearr_264267_264340 = state_264233__$1;
(statearr_264267_264340[(2)] = inst_264148);

(statearr_264267_264340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (36))){
var inst_264192 = (state_264233[(25)]);
var inst_264196 = cljs.core.chunk_first.call(null,inst_264192);
var inst_264197 = cljs.core.chunk_rest.call(null,inst_264192);
var inst_264198 = cljs.core.count.call(null,inst_264196);
var inst_264173 = inst_264197;
var inst_264174 = inst_264196;
var inst_264175 = inst_264198;
var inst_264176 = (0);
var state_264233__$1 = (function (){var statearr_264268 = state_264233;
(statearr_264268[(9)] = inst_264174);

(statearr_264268[(10)] = inst_264176);

(statearr_264268[(20)] = inst_264173);

(statearr_264268[(21)] = inst_264175);

return statearr_264268;
})();
var statearr_264269_264341 = state_264233__$1;
(statearr_264269_264341[(2)] = null);

(statearr_264269_264341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (41))){
var inst_264192 = (state_264233[(25)]);
var inst_264208 = (state_264233[(2)]);
var inst_264209 = cljs.core.next.call(null,inst_264192);
var inst_264173 = inst_264209;
var inst_264174 = null;
var inst_264175 = (0);
var inst_264176 = (0);
var state_264233__$1 = (function (){var statearr_264270 = state_264233;
(statearr_264270[(9)] = inst_264174);

(statearr_264270[(10)] = inst_264176);

(statearr_264270[(20)] = inst_264173);

(statearr_264270[(21)] = inst_264175);

(statearr_264270[(27)] = inst_264208);

return statearr_264270;
})();
var statearr_264271_264342 = state_264233__$1;
(statearr_264271_264342[(2)] = null);

(statearr_264271_264342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (43))){
var state_264233__$1 = state_264233;
var statearr_264272_264343 = state_264233__$1;
(statearr_264272_264343[(2)] = null);

(statearr_264272_264343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (29))){
var inst_264217 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264273_264344 = state_264233__$1;
(statearr_264273_264344[(2)] = inst_264217);

(statearr_264273_264344[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (44))){
var inst_264226 = (state_264233[(2)]);
var state_264233__$1 = (function (){var statearr_264274 = state_264233;
(statearr_264274[(28)] = inst_264226);

return statearr_264274;
})();
var statearr_264275_264345 = state_264233__$1;
(statearr_264275_264345[(2)] = null);

(statearr_264275_264345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (6))){
var inst_264165 = (state_264233[(29)]);
var inst_264164 = cljs.core.deref.call(null,cs);
var inst_264165__$1 = cljs.core.keys.call(null,inst_264164);
var inst_264166 = cljs.core.count.call(null,inst_264165__$1);
var inst_264167 = cljs.core.reset_BANG_.call(null,dctr,inst_264166);
var inst_264172 = cljs.core.seq.call(null,inst_264165__$1);
var inst_264173 = inst_264172;
var inst_264174 = null;
var inst_264175 = (0);
var inst_264176 = (0);
var state_264233__$1 = (function (){var statearr_264276 = state_264233;
(statearr_264276[(29)] = inst_264165__$1);

(statearr_264276[(9)] = inst_264174);

(statearr_264276[(10)] = inst_264176);

(statearr_264276[(20)] = inst_264173);

(statearr_264276[(21)] = inst_264175);

(statearr_264276[(30)] = inst_264167);

return statearr_264276;
})();
var statearr_264277_264346 = state_264233__$1;
(statearr_264277_264346[(2)] = null);

(statearr_264277_264346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (28))){
var inst_264173 = (state_264233[(20)]);
var inst_264192 = (state_264233[(25)]);
var inst_264192__$1 = cljs.core.seq.call(null,inst_264173);
var state_264233__$1 = (function (){var statearr_264278 = state_264233;
(statearr_264278[(25)] = inst_264192__$1);

return statearr_264278;
})();
if(inst_264192__$1){
var statearr_264279_264347 = state_264233__$1;
(statearr_264279_264347[(1)] = (33));

} else {
var statearr_264280_264348 = state_264233__$1;
(statearr_264280_264348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (25))){
var inst_264176 = (state_264233[(10)]);
var inst_264175 = (state_264233[(21)]);
var inst_264178 = (inst_264176 < inst_264175);
var inst_264179 = inst_264178;
var state_264233__$1 = state_264233;
if(cljs.core.truth_(inst_264179)){
var statearr_264281_264349 = state_264233__$1;
(statearr_264281_264349[(1)] = (27));

} else {
var statearr_264282_264350 = state_264233__$1;
(statearr_264282_264350[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (34))){
var state_264233__$1 = state_264233;
var statearr_264283_264351 = state_264233__$1;
(statearr_264283_264351[(2)] = null);

(statearr_264283_264351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (17))){
var state_264233__$1 = state_264233;
var statearr_264284_264352 = state_264233__$1;
(statearr_264284_264352[(2)] = null);

(statearr_264284_264352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (3))){
var inst_264231 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_264233__$1,inst_264231);
} else {
if((state_val_264234 === (12))){
var inst_264160 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264285_264353 = state_264233__$1;
(statearr_264285_264353[(2)] = inst_264160);

(statearr_264285_264353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (2))){
var state_264233__$1 = state_264233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_264233__$1,(4),ch);
} else {
if((state_val_264234 === (23))){
var state_264233__$1 = state_264233;
var statearr_264286_264354 = state_264233__$1;
(statearr_264286_264354[(2)] = null);

(statearr_264286_264354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (35))){
var inst_264215 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264287_264355 = state_264233__$1;
(statearr_264287_264355[(2)] = inst_264215);

(statearr_264287_264355[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (19))){
var inst_264134 = (state_264233[(7)]);
var inst_264138 = cljs.core.chunk_first.call(null,inst_264134);
var inst_264139 = cljs.core.chunk_rest.call(null,inst_264134);
var inst_264140 = cljs.core.count.call(null,inst_264138);
var inst_264114 = inst_264139;
var inst_264115 = inst_264138;
var inst_264116 = inst_264140;
var inst_264117 = (0);
var state_264233__$1 = (function (){var statearr_264288 = state_264233;
(statearr_264288[(13)] = inst_264117);

(statearr_264288[(14)] = inst_264116);

(statearr_264288[(15)] = inst_264114);

(statearr_264288[(16)] = inst_264115);

return statearr_264288;
})();
var statearr_264289_264356 = state_264233__$1;
(statearr_264289_264356[(2)] = null);

(statearr_264289_264356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (11))){
var inst_264114 = (state_264233[(15)]);
var inst_264134 = (state_264233[(7)]);
var inst_264134__$1 = cljs.core.seq.call(null,inst_264114);
var state_264233__$1 = (function (){var statearr_264290 = state_264233;
(statearr_264290[(7)] = inst_264134__$1);

return statearr_264290;
})();
if(inst_264134__$1){
var statearr_264291_264357 = state_264233__$1;
(statearr_264291_264357[(1)] = (16));

} else {
var statearr_264292_264358 = state_264233__$1;
(statearr_264292_264358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (9))){
var inst_264162 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264293_264359 = state_264233__$1;
(statearr_264293_264359[(2)] = inst_264162);

(statearr_264293_264359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (5))){
var inst_264112 = cljs.core.deref.call(null,cs);
var inst_264113 = cljs.core.seq.call(null,inst_264112);
var inst_264114 = inst_264113;
var inst_264115 = null;
var inst_264116 = (0);
var inst_264117 = (0);
var state_264233__$1 = (function (){var statearr_264294 = state_264233;
(statearr_264294[(13)] = inst_264117);

(statearr_264294[(14)] = inst_264116);

(statearr_264294[(15)] = inst_264114);

(statearr_264294[(16)] = inst_264115);

return statearr_264294;
})();
var statearr_264295_264360 = state_264233__$1;
(statearr_264295_264360[(2)] = null);

(statearr_264295_264360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (14))){
var state_264233__$1 = state_264233;
var statearr_264296_264361 = state_264233__$1;
(statearr_264296_264361[(2)] = null);

(statearr_264296_264361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (45))){
var inst_264223 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264297_264362 = state_264233__$1;
(statearr_264297_264362[(2)] = inst_264223);

(statearr_264297_264362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (26))){
var inst_264165 = (state_264233[(29)]);
var inst_264219 = (state_264233[(2)]);
var inst_264220 = cljs.core.seq.call(null,inst_264165);
var state_264233__$1 = (function (){var statearr_264298 = state_264233;
(statearr_264298[(31)] = inst_264219);

return statearr_264298;
})();
if(inst_264220){
var statearr_264299_264363 = state_264233__$1;
(statearr_264299_264363[(1)] = (42));

} else {
var statearr_264300_264364 = state_264233__$1;
(statearr_264300_264364[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (16))){
var inst_264134 = (state_264233[(7)]);
var inst_264136 = cljs.core.chunked_seq_QMARK_.call(null,inst_264134);
var state_264233__$1 = state_264233;
if(inst_264136){
var statearr_264301_264365 = state_264233__$1;
(statearr_264301_264365[(1)] = (19));

} else {
var statearr_264302_264366 = state_264233__$1;
(statearr_264302_264366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (38))){
var inst_264212 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264303_264367 = state_264233__$1;
(statearr_264303_264367[(2)] = inst_264212);

(statearr_264303_264367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (30))){
var state_264233__$1 = state_264233;
var statearr_264304_264368 = state_264233__$1;
(statearr_264304_264368[(2)] = null);

(statearr_264304_264368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (10))){
var inst_264117 = (state_264233[(13)]);
var inst_264115 = (state_264233[(16)]);
var inst_264123 = cljs.core._nth.call(null,inst_264115,inst_264117);
var inst_264124 = cljs.core.nth.call(null,inst_264123,(0),null);
var inst_264125 = cljs.core.nth.call(null,inst_264123,(1),null);
var state_264233__$1 = (function (){var statearr_264305 = state_264233;
(statearr_264305[(26)] = inst_264124);

return statearr_264305;
})();
if(cljs.core.truth_(inst_264125)){
var statearr_264306_264369 = state_264233__$1;
(statearr_264306_264369[(1)] = (13));

} else {
var statearr_264307_264370 = state_264233__$1;
(statearr_264307_264370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (18))){
var inst_264158 = (state_264233[(2)]);
var state_264233__$1 = state_264233;
var statearr_264308_264371 = state_264233__$1;
(statearr_264308_264371[(2)] = inst_264158);

(statearr_264308_264371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (42))){
var state_264233__$1 = state_264233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_264233__$1,(45),dchan);
} else {
if((state_val_264234 === (37))){
var inst_264201 = (state_264233[(23)]);
var inst_264105 = (state_264233[(11)]);
var inst_264192 = (state_264233[(25)]);
var inst_264201__$1 = cljs.core.first.call(null,inst_264192);
var inst_264202 = cljs.core.async.put_BANG_.call(null,inst_264201__$1,inst_264105,done);
var state_264233__$1 = (function (){var statearr_264309 = state_264233;
(statearr_264309[(23)] = inst_264201__$1);

return statearr_264309;
})();
if(cljs.core.truth_(inst_264202)){
var statearr_264310_264372 = state_264233__$1;
(statearr_264310_264372[(1)] = (39));

} else {
var statearr_264311_264373 = state_264233__$1;
(statearr_264311_264373[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264234 === (8))){
var inst_264117 = (state_264233[(13)]);
var inst_264116 = (state_264233[(14)]);
var inst_264119 = (inst_264117 < inst_264116);
var inst_264120 = inst_264119;
var state_264233__$1 = state_264233;
if(cljs.core.truth_(inst_264120)){
var statearr_264312_264374 = state_264233__$1;
(statearr_264312_264374[(1)] = (10));

} else {
var statearr_264313_264375 = state_264233__$1;
(statearr_264313_264375[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9199__auto___264321,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___264321,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_264317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_264317[(0)] = state_machine__9185__auto__);

(statearr_264317[(1)] = (1));

return statearr_264317;
});
var state_machine__9185__auto____1 = (function (state_264233){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_264233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e264318){if((e264318 instanceof Object)){
var ex__9188__auto__ = e264318;
var statearr_264319_264376 = state_264233;
(statearr_264319_264376[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_264233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e264318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__264377 = state_264233;
state_264233 = G__264377;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_264233){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_264233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___264321,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_264320 = f__9200__auto__.call(null);
(statearr_264320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___264321);

return statearr_264320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___264321,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj264379 = {};
return obj264379;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__264380){
var map__264385 = p__264380;
var map__264385__$1 = ((cljs.core.seq_QMARK_.call(null,map__264385))?cljs.core.apply.call(null,cljs.core.hash_map,map__264385):map__264385);
var opts = map__264385__$1;
var statearr_264386_264389 = state;
(statearr_264386_264389[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__264385,map__264385__$1,opts){
return (function (val){
var statearr_264387_264390 = state;
(statearr_264387_264390[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__264385,map__264385__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_264388_264391 = state;
(statearr_264388_264391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__264380 = null;
if (arguments.length > 3) {
  p__264380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__264380);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__264392){
var state = cljs.core.first(arglist__264392);
arglist__264392 = cljs.core.next(arglist__264392);
var cont_block = cljs.core.first(arglist__264392);
arglist__264392 = cljs.core.next(arglist__264392);
var ports = cljs.core.first(arglist__264392);
var p__264380 = cljs.core.rest(arglist__264392);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__264380);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t264512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t264512 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta264513){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta264513 = meta264513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t264512.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t264512.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t264512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_264514){
var self__ = this;
var _264514__$1 = this;
return self__.meta264513;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_264514,meta264513__$1){
var self__ = this;
var _264514__$1 = this;
return (new cljs.core.async.t264512(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta264513__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t264512.cljs$lang$type = true;

cljs.core.async.t264512.cljs$lang$ctorStr = "cljs.core.async/t264512";

cljs.core.async.t264512.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t264512");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t264512 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t264512(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta264513){
return (new cljs.core.async.t264512(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta264513));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t264512(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___264631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_264584){
var state_val_264585 = (state_264584[(1)]);
if((state_val_264585 === (7))){
var inst_264528 = (state_264584[(7)]);
var inst_264533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_264528);
var state_264584__$1 = state_264584;
var statearr_264586_264632 = state_264584__$1;
(statearr_264586_264632[(2)] = inst_264533);

(statearr_264586_264632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (20))){
var inst_264543 = (state_264584[(8)]);
var state_264584__$1 = state_264584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_264584__$1,(23),out,inst_264543);
} else {
if((state_val_264585 === (1))){
var inst_264518 = (state_264584[(9)]);
var inst_264518__$1 = calc_state.call(null);
var inst_264519 = cljs.core.seq_QMARK_.call(null,inst_264518__$1);
var state_264584__$1 = (function (){var statearr_264587 = state_264584;
(statearr_264587[(9)] = inst_264518__$1);

return statearr_264587;
})();
if(inst_264519){
var statearr_264588_264633 = state_264584__$1;
(statearr_264588_264633[(1)] = (2));

} else {
var statearr_264589_264634 = state_264584__$1;
(statearr_264589_264634[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (24))){
var inst_264536 = (state_264584[(10)]);
var inst_264528 = inst_264536;
var state_264584__$1 = (function (){var statearr_264590 = state_264584;
(statearr_264590[(7)] = inst_264528);

return statearr_264590;
})();
var statearr_264591_264635 = state_264584__$1;
(statearr_264591_264635[(2)] = null);

(statearr_264591_264635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (4))){
var inst_264518 = (state_264584[(9)]);
var inst_264524 = (state_264584[(2)]);
var inst_264525 = cljs.core.get.call(null,inst_264524,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_264526 = cljs.core.get.call(null,inst_264524,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_264527 = cljs.core.get.call(null,inst_264524,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_264528 = inst_264518;
var state_264584__$1 = (function (){var statearr_264592 = state_264584;
(statearr_264592[(11)] = inst_264527);

(statearr_264592[(12)] = inst_264526);

(statearr_264592[(13)] = inst_264525);

(statearr_264592[(7)] = inst_264528);

return statearr_264592;
})();
var statearr_264593_264636 = state_264584__$1;
(statearr_264593_264636[(2)] = null);

(statearr_264593_264636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (15))){
var state_264584__$1 = state_264584;
var statearr_264594_264637 = state_264584__$1;
(statearr_264594_264637[(2)] = null);

(statearr_264594_264637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (21))){
var inst_264536 = (state_264584[(10)]);
var inst_264528 = inst_264536;
var state_264584__$1 = (function (){var statearr_264595 = state_264584;
(statearr_264595[(7)] = inst_264528);

return statearr_264595;
})();
var statearr_264596_264638 = state_264584__$1;
(statearr_264596_264638[(2)] = null);

(statearr_264596_264638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (13))){
var inst_264580 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
var statearr_264597_264639 = state_264584__$1;
(statearr_264597_264639[(2)] = inst_264580);

(statearr_264597_264639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (22))){
var inst_264578 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
var statearr_264598_264640 = state_264584__$1;
(statearr_264598_264640[(2)] = inst_264578);

(statearr_264598_264640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (6))){
var inst_264582 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_264584__$1,inst_264582);
} else {
if((state_val_264585 === (25))){
var state_264584__$1 = state_264584;
var statearr_264599_264641 = state_264584__$1;
(statearr_264599_264641[(2)] = null);

(statearr_264599_264641[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (17))){
var inst_264558 = (state_264584[(14)]);
var state_264584__$1 = state_264584;
var statearr_264600_264642 = state_264584__$1;
(statearr_264600_264642[(2)] = inst_264558);

(statearr_264600_264642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (3))){
var inst_264518 = (state_264584[(9)]);
var state_264584__$1 = state_264584;
var statearr_264601_264643 = state_264584__$1;
(statearr_264601_264643[(2)] = inst_264518);

(statearr_264601_264643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (12))){
var inst_264544 = (state_264584[(15)]);
var inst_264558 = (state_264584[(14)]);
var inst_264539 = (state_264584[(16)]);
var inst_264558__$1 = inst_264539.call(null,inst_264544);
var state_264584__$1 = (function (){var statearr_264602 = state_264584;
(statearr_264602[(14)] = inst_264558__$1);

return statearr_264602;
})();
if(cljs.core.truth_(inst_264558__$1)){
var statearr_264603_264644 = state_264584__$1;
(statearr_264603_264644[(1)] = (17));

} else {
var statearr_264604_264645 = state_264584__$1;
(statearr_264604_264645[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (2))){
var inst_264518 = (state_264584[(9)]);
var inst_264521 = cljs.core.apply.call(null,cljs.core.hash_map,inst_264518);
var state_264584__$1 = state_264584;
var statearr_264605_264646 = state_264584__$1;
(statearr_264605_264646[(2)] = inst_264521);

(statearr_264605_264646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (23))){
var inst_264569 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
if(cljs.core.truth_(inst_264569)){
var statearr_264606_264647 = state_264584__$1;
(statearr_264606_264647[(1)] = (24));

} else {
var statearr_264607_264648 = state_264584__$1;
(statearr_264607_264648[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (19))){
var inst_264566 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
if(cljs.core.truth_(inst_264566)){
var statearr_264608_264649 = state_264584__$1;
(statearr_264608_264649[(1)] = (20));

} else {
var statearr_264609_264650 = state_264584__$1;
(statearr_264609_264650[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (11))){
var inst_264543 = (state_264584[(8)]);
var inst_264549 = (inst_264543 == null);
var state_264584__$1 = state_264584;
if(cljs.core.truth_(inst_264549)){
var statearr_264610_264651 = state_264584__$1;
(statearr_264610_264651[(1)] = (14));

} else {
var statearr_264611_264652 = state_264584__$1;
(statearr_264611_264652[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (9))){
var inst_264536 = (state_264584[(10)]);
var inst_264536__$1 = (state_264584[(2)]);
var inst_264537 = cljs.core.get.call(null,inst_264536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_264538 = cljs.core.get.call(null,inst_264536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_264539 = cljs.core.get.call(null,inst_264536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_264584__$1 = (function (){var statearr_264612 = state_264584;
(statearr_264612[(10)] = inst_264536__$1);

(statearr_264612[(17)] = inst_264538);

(statearr_264612[(16)] = inst_264539);

return statearr_264612;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_264584__$1,(10),inst_264537);
} else {
if((state_val_264585 === (5))){
var inst_264528 = (state_264584[(7)]);
var inst_264531 = cljs.core.seq_QMARK_.call(null,inst_264528);
var state_264584__$1 = state_264584;
if(inst_264531){
var statearr_264613_264653 = state_264584__$1;
(statearr_264613_264653[(1)] = (7));

} else {
var statearr_264614_264654 = state_264584__$1;
(statearr_264614_264654[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (14))){
var inst_264544 = (state_264584[(15)]);
var inst_264551 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_264544);
var state_264584__$1 = state_264584;
var statearr_264615_264655 = state_264584__$1;
(statearr_264615_264655[(2)] = inst_264551);

(statearr_264615_264655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (26))){
var inst_264574 = (state_264584[(2)]);
var state_264584__$1 = state_264584;
var statearr_264616_264656 = state_264584__$1;
(statearr_264616_264656[(2)] = inst_264574);

(statearr_264616_264656[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (16))){
var inst_264554 = (state_264584[(2)]);
var inst_264555 = calc_state.call(null);
var inst_264528 = inst_264555;
var state_264584__$1 = (function (){var statearr_264617 = state_264584;
(statearr_264617[(18)] = inst_264554);

(statearr_264617[(7)] = inst_264528);

return statearr_264617;
})();
var statearr_264618_264657 = state_264584__$1;
(statearr_264618_264657[(2)] = null);

(statearr_264618_264657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (10))){
var inst_264543 = (state_264584[(8)]);
var inst_264544 = (state_264584[(15)]);
var inst_264542 = (state_264584[(2)]);
var inst_264543__$1 = cljs.core.nth.call(null,inst_264542,(0),null);
var inst_264544__$1 = cljs.core.nth.call(null,inst_264542,(1),null);
var inst_264545 = (inst_264543__$1 == null);
var inst_264546 = cljs.core._EQ_.call(null,inst_264544__$1,change);
var inst_264547 = (inst_264545) || (inst_264546);
var state_264584__$1 = (function (){var statearr_264619 = state_264584;
(statearr_264619[(8)] = inst_264543__$1);

(statearr_264619[(15)] = inst_264544__$1);

return statearr_264619;
})();
if(cljs.core.truth_(inst_264547)){
var statearr_264620_264658 = state_264584__$1;
(statearr_264620_264658[(1)] = (11));

} else {
var statearr_264621_264659 = state_264584__$1;
(statearr_264621_264659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (18))){
var inst_264544 = (state_264584[(15)]);
var inst_264538 = (state_264584[(17)]);
var inst_264539 = (state_264584[(16)]);
var inst_264561 = cljs.core.empty_QMARK_.call(null,inst_264539);
var inst_264562 = inst_264538.call(null,inst_264544);
var inst_264563 = cljs.core.not.call(null,inst_264562);
var inst_264564 = (inst_264561) && (inst_264563);
var state_264584__$1 = state_264584;
var statearr_264622_264660 = state_264584__$1;
(statearr_264622_264660[(2)] = inst_264564);

(statearr_264622_264660[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264585 === (8))){
var inst_264528 = (state_264584[(7)]);
var state_264584__$1 = state_264584;
var statearr_264623_264661 = state_264584__$1;
(statearr_264623_264661[(2)] = inst_264528);

(statearr_264623_264661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_264627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_264627[(0)] = state_machine__9185__auto__);

(statearr_264627[(1)] = (1));

return statearr_264627;
});
var state_machine__9185__auto____1 = (function (state_264584){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_264584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e264628){if((e264628 instanceof Object)){
var ex__9188__auto__ = e264628;
var statearr_264629_264662 = state_264584;
(statearr_264629_264662[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_264584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e264628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__264663 = state_264584;
state_264584 = G__264663;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_264584){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_264584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_264630 = f__9200__auto__.call(null);
(statearr_264630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___264631);

return statearr_264630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___264631,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj264665 = {};
return obj264665;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3622__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3622__auto__,mults){
return (function (p1__264666_SHARP_){
if(cljs.core.truth_(p1__264666_SHARP_.call(null,topic))){
return p1__264666_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__264666_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t264789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t264789 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta264790){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta264790 = meta264790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t264789.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t264789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t264789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_264791){
var self__ = this;
var _264791__$1 = this;
return self__.meta264790;
});})(mults,ensure_mult))
;

cljs.core.async.t264789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_264791,meta264790__$1){
var self__ = this;
var _264791__$1 = this;
return (new cljs.core.async.t264789(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta264790__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t264789.cljs$lang$type = true;

cljs.core.async.t264789.cljs$lang$ctorStr = "cljs.core.async/t264789";

cljs.core.async.t264789.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t264789");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t264789 = ((function (mults,ensure_mult){
return (function __GT_t264789(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta264790){
return (new cljs.core.async.t264789(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta264790));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t264789(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___264911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___264911,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___264911,mults,ensure_mult,p){
return (function (state_264863){
var state_val_264864 = (state_264863[(1)]);
if((state_val_264864 === (7))){
var inst_264859 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264865_264912 = state_264863__$1;
(statearr_264865_264912[(2)] = inst_264859);

(statearr_264865_264912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (20))){
var state_264863__$1 = state_264863;
var statearr_264866_264913 = state_264863__$1;
(statearr_264866_264913[(2)] = null);

(statearr_264866_264913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (1))){
var state_264863__$1 = state_264863;
var statearr_264867_264914 = state_264863__$1;
(statearr_264867_264914[(2)] = null);

(statearr_264867_264914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (24))){
var inst_264842 = (state_264863[(7)]);
var inst_264851 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_264842);
var state_264863__$1 = state_264863;
var statearr_264868_264915 = state_264863__$1;
(statearr_264868_264915[(2)] = inst_264851);

(statearr_264868_264915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (4))){
var inst_264794 = (state_264863[(8)]);
var inst_264794__$1 = (state_264863[(2)]);
var inst_264795 = (inst_264794__$1 == null);
var state_264863__$1 = (function (){var statearr_264869 = state_264863;
(statearr_264869[(8)] = inst_264794__$1);

return statearr_264869;
})();
if(cljs.core.truth_(inst_264795)){
var statearr_264870_264916 = state_264863__$1;
(statearr_264870_264916[(1)] = (5));

} else {
var statearr_264871_264917 = state_264863__$1;
(statearr_264871_264917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (15))){
var inst_264836 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264872_264918 = state_264863__$1;
(statearr_264872_264918[(2)] = inst_264836);

(statearr_264872_264918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (21))){
var inst_264856 = (state_264863[(2)]);
var state_264863__$1 = (function (){var statearr_264873 = state_264863;
(statearr_264873[(9)] = inst_264856);

return statearr_264873;
})();
var statearr_264874_264919 = state_264863__$1;
(statearr_264874_264919[(2)] = null);

(statearr_264874_264919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (13))){
var inst_264818 = (state_264863[(10)]);
var inst_264820 = cljs.core.chunked_seq_QMARK_.call(null,inst_264818);
var state_264863__$1 = state_264863;
if(inst_264820){
var statearr_264875_264920 = state_264863__$1;
(statearr_264875_264920[(1)] = (16));

} else {
var statearr_264876_264921 = state_264863__$1;
(statearr_264876_264921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (22))){
var inst_264848 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
if(cljs.core.truth_(inst_264848)){
var statearr_264877_264922 = state_264863__$1;
(statearr_264877_264922[(1)] = (23));

} else {
var statearr_264878_264923 = state_264863__$1;
(statearr_264878_264923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (6))){
var inst_264844 = (state_264863[(11)]);
var inst_264794 = (state_264863[(8)]);
var inst_264842 = (state_264863[(7)]);
var inst_264842__$1 = topic_fn.call(null,inst_264794);
var inst_264843 = cljs.core.deref.call(null,mults);
var inst_264844__$1 = cljs.core.get.call(null,inst_264843,inst_264842__$1);
var state_264863__$1 = (function (){var statearr_264879 = state_264863;
(statearr_264879[(11)] = inst_264844__$1);

(statearr_264879[(7)] = inst_264842__$1);

return statearr_264879;
})();
if(cljs.core.truth_(inst_264844__$1)){
var statearr_264880_264924 = state_264863__$1;
(statearr_264880_264924[(1)] = (19));

} else {
var statearr_264881_264925 = state_264863__$1;
(statearr_264881_264925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (25))){
var inst_264853 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264882_264926 = state_264863__$1;
(statearr_264882_264926[(2)] = inst_264853);

(statearr_264882_264926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (17))){
var inst_264818 = (state_264863[(10)]);
var inst_264827 = cljs.core.first.call(null,inst_264818);
var inst_264828 = cljs.core.async.muxch_STAR_.call(null,inst_264827);
var inst_264829 = cljs.core.async.close_BANG_.call(null,inst_264828);
var inst_264830 = cljs.core.next.call(null,inst_264818);
var inst_264804 = inst_264830;
var inst_264805 = null;
var inst_264806 = (0);
var inst_264807 = (0);
var state_264863__$1 = (function (){var statearr_264883 = state_264863;
(statearr_264883[(12)] = inst_264829);

(statearr_264883[(13)] = inst_264804);

(statearr_264883[(14)] = inst_264807);

(statearr_264883[(15)] = inst_264805);

(statearr_264883[(16)] = inst_264806);

return statearr_264883;
})();
var statearr_264884_264927 = state_264863__$1;
(statearr_264884_264927[(2)] = null);

(statearr_264884_264927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (3))){
var inst_264861 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_264863__$1,inst_264861);
} else {
if((state_val_264864 === (12))){
var inst_264838 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264885_264928 = state_264863__$1;
(statearr_264885_264928[(2)] = inst_264838);

(statearr_264885_264928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (2))){
var state_264863__$1 = state_264863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_264863__$1,(4),ch);
} else {
if((state_val_264864 === (23))){
var state_264863__$1 = state_264863;
var statearr_264886_264929 = state_264863__$1;
(statearr_264886_264929[(2)] = null);

(statearr_264886_264929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (19))){
var inst_264844 = (state_264863[(11)]);
var inst_264794 = (state_264863[(8)]);
var inst_264846 = cljs.core.async.muxch_STAR_.call(null,inst_264844);
var state_264863__$1 = state_264863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_264863__$1,(22),inst_264846,inst_264794);
} else {
if((state_val_264864 === (11))){
var inst_264804 = (state_264863[(13)]);
var inst_264818 = (state_264863[(10)]);
var inst_264818__$1 = cljs.core.seq.call(null,inst_264804);
var state_264863__$1 = (function (){var statearr_264887 = state_264863;
(statearr_264887[(10)] = inst_264818__$1);

return statearr_264887;
})();
if(inst_264818__$1){
var statearr_264888_264930 = state_264863__$1;
(statearr_264888_264930[(1)] = (13));

} else {
var statearr_264889_264931 = state_264863__$1;
(statearr_264889_264931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (9))){
var inst_264840 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264890_264932 = state_264863__$1;
(statearr_264890_264932[(2)] = inst_264840);

(statearr_264890_264932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (5))){
var inst_264801 = cljs.core.deref.call(null,mults);
var inst_264802 = cljs.core.vals.call(null,inst_264801);
var inst_264803 = cljs.core.seq.call(null,inst_264802);
var inst_264804 = inst_264803;
var inst_264805 = null;
var inst_264806 = (0);
var inst_264807 = (0);
var state_264863__$1 = (function (){var statearr_264891 = state_264863;
(statearr_264891[(13)] = inst_264804);

(statearr_264891[(14)] = inst_264807);

(statearr_264891[(15)] = inst_264805);

(statearr_264891[(16)] = inst_264806);

return statearr_264891;
})();
var statearr_264892_264933 = state_264863__$1;
(statearr_264892_264933[(2)] = null);

(statearr_264892_264933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (14))){
var state_264863__$1 = state_264863;
var statearr_264896_264934 = state_264863__$1;
(statearr_264896_264934[(2)] = null);

(statearr_264896_264934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (16))){
var inst_264818 = (state_264863[(10)]);
var inst_264822 = cljs.core.chunk_first.call(null,inst_264818);
var inst_264823 = cljs.core.chunk_rest.call(null,inst_264818);
var inst_264824 = cljs.core.count.call(null,inst_264822);
var inst_264804 = inst_264823;
var inst_264805 = inst_264822;
var inst_264806 = inst_264824;
var inst_264807 = (0);
var state_264863__$1 = (function (){var statearr_264897 = state_264863;
(statearr_264897[(13)] = inst_264804);

(statearr_264897[(14)] = inst_264807);

(statearr_264897[(15)] = inst_264805);

(statearr_264897[(16)] = inst_264806);

return statearr_264897;
})();
var statearr_264898_264935 = state_264863__$1;
(statearr_264898_264935[(2)] = null);

(statearr_264898_264935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (10))){
var inst_264804 = (state_264863[(13)]);
var inst_264807 = (state_264863[(14)]);
var inst_264805 = (state_264863[(15)]);
var inst_264806 = (state_264863[(16)]);
var inst_264812 = cljs.core._nth.call(null,inst_264805,inst_264807);
var inst_264813 = cljs.core.async.muxch_STAR_.call(null,inst_264812);
var inst_264814 = cljs.core.async.close_BANG_.call(null,inst_264813);
var inst_264815 = (inst_264807 + (1));
var tmp264893 = inst_264804;
var tmp264894 = inst_264805;
var tmp264895 = inst_264806;
var inst_264804__$1 = tmp264893;
var inst_264805__$1 = tmp264894;
var inst_264806__$1 = tmp264895;
var inst_264807__$1 = inst_264815;
var state_264863__$1 = (function (){var statearr_264899 = state_264863;
(statearr_264899[(13)] = inst_264804__$1);

(statearr_264899[(14)] = inst_264807__$1);

(statearr_264899[(17)] = inst_264814);

(statearr_264899[(15)] = inst_264805__$1);

(statearr_264899[(16)] = inst_264806__$1);

return statearr_264899;
})();
var statearr_264900_264936 = state_264863__$1;
(statearr_264900_264936[(2)] = null);

(statearr_264900_264936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (18))){
var inst_264833 = (state_264863[(2)]);
var state_264863__$1 = state_264863;
var statearr_264901_264937 = state_264863__$1;
(statearr_264901_264937[(2)] = inst_264833);

(statearr_264901_264937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_264864 === (8))){
var inst_264807 = (state_264863[(14)]);
var inst_264806 = (state_264863[(16)]);
var inst_264809 = (inst_264807 < inst_264806);
var inst_264810 = inst_264809;
var state_264863__$1 = state_264863;
if(cljs.core.truth_(inst_264810)){
var statearr_264902_264938 = state_264863__$1;
(statearr_264902_264938[(1)] = (10));

} else {
var statearr_264903_264939 = state_264863__$1;
(statearr_264903_264939[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9199__auto___264911,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___264911,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_264907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_264907[(0)] = state_machine__9185__auto__);

(statearr_264907[(1)] = (1));

return statearr_264907;
});
var state_machine__9185__auto____1 = (function (state_264863){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_264863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e264908){if((e264908 instanceof Object)){
var ex__9188__auto__ = e264908;
var statearr_264909_264940 = state_264863;
(statearr_264909_264940[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_264863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e264908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__264941 = state_264863;
state_264863 = G__264941;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_264863){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_264863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___264911,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_264910 = f__9200__auto__.call(null);
(statearr_264910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___264911);

return statearr_264910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___264911,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9199__auto___265078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_265048){
var state_val_265049 = (state_265048[(1)]);
if((state_val_265049 === (7))){
var state_265048__$1 = state_265048;
var statearr_265050_265079 = state_265048__$1;
(statearr_265050_265079[(2)] = null);

(statearr_265050_265079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (1))){
var state_265048__$1 = state_265048;
var statearr_265051_265080 = state_265048__$1;
(statearr_265051_265080[(2)] = null);

(statearr_265051_265080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (4))){
var inst_265012 = (state_265048[(7)]);
var inst_265014 = (inst_265012 < cnt);
var state_265048__$1 = state_265048;
if(cljs.core.truth_(inst_265014)){
var statearr_265052_265081 = state_265048__$1;
(statearr_265052_265081[(1)] = (6));

} else {
var statearr_265053_265082 = state_265048__$1;
(statearr_265053_265082[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (15))){
var inst_265044 = (state_265048[(2)]);
var state_265048__$1 = state_265048;
var statearr_265054_265083 = state_265048__$1;
(statearr_265054_265083[(2)] = inst_265044);

(statearr_265054_265083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (13))){
var inst_265037 = cljs.core.async.close_BANG_.call(null,out);
var state_265048__$1 = state_265048;
var statearr_265055_265084 = state_265048__$1;
(statearr_265055_265084[(2)] = inst_265037);

(statearr_265055_265084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (6))){
var state_265048__$1 = state_265048;
var statearr_265056_265085 = state_265048__$1;
(statearr_265056_265085[(2)] = null);

(statearr_265056_265085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (3))){
var inst_265046 = (state_265048[(2)]);
var state_265048__$1 = state_265048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265048__$1,inst_265046);
} else {
if((state_val_265049 === (12))){
var inst_265034 = (state_265048[(8)]);
var inst_265034__$1 = (state_265048[(2)]);
var inst_265035 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_265034__$1);
var state_265048__$1 = (function (){var statearr_265057 = state_265048;
(statearr_265057[(8)] = inst_265034__$1);

return statearr_265057;
})();
if(cljs.core.truth_(inst_265035)){
var statearr_265058_265086 = state_265048__$1;
(statearr_265058_265086[(1)] = (13));

} else {
var statearr_265059_265087 = state_265048__$1;
(statearr_265059_265087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (2))){
var inst_265011 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_265012 = (0);
var state_265048__$1 = (function (){var statearr_265060 = state_265048;
(statearr_265060[(7)] = inst_265012);

(statearr_265060[(9)] = inst_265011);

return statearr_265060;
})();
var statearr_265061_265088 = state_265048__$1;
(statearr_265061_265088[(2)] = null);

(statearr_265061_265088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (11))){
var inst_265012 = (state_265048[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_265048,(10),Object,null,(9));
var inst_265021 = chs__$1.call(null,inst_265012);
var inst_265022 = done.call(null,inst_265012);
var inst_265023 = cljs.core.async.take_BANG_.call(null,inst_265021,inst_265022);
var state_265048__$1 = state_265048;
var statearr_265062_265089 = state_265048__$1;
(statearr_265062_265089[(2)] = inst_265023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (9))){
var inst_265012 = (state_265048[(7)]);
var inst_265025 = (state_265048[(2)]);
var inst_265026 = (inst_265012 + (1));
var inst_265012__$1 = inst_265026;
var state_265048__$1 = (function (){var statearr_265063 = state_265048;
(statearr_265063[(7)] = inst_265012__$1);

(statearr_265063[(10)] = inst_265025);

return statearr_265063;
})();
var statearr_265064_265090 = state_265048__$1;
(statearr_265064_265090[(2)] = null);

(statearr_265064_265090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (5))){
var inst_265032 = (state_265048[(2)]);
var state_265048__$1 = (function (){var statearr_265065 = state_265048;
(statearr_265065[(11)] = inst_265032);

return statearr_265065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265048__$1,(12),dchan);
} else {
if((state_val_265049 === (14))){
var inst_265034 = (state_265048[(8)]);
var inst_265039 = cljs.core.apply.call(null,f,inst_265034);
var state_265048__$1 = state_265048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265048__$1,(16),out,inst_265039);
} else {
if((state_val_265049 === (16))){
var inst_265041 = (state_265048[(2)]);
var state_265048__$1 = (function (){var statearr_265066 = state_265048;
(statearr_265066[(12)] = inst_265041);

return statearr_265066;
})();
var statearr_265067_265091 = state_265048__$1;
(statearr_265067_265091[(2)] = null);

(statearr_265067_265091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (10))){
var inst_265016 = (state_265048[(2)]);
var inst_265017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_265048__$1 = (function (){var statearr_265068 = state_265048;
(statearr_265068[(13)] = inst_265016);

return statearr_265068;
})();
var statearr_265069_265092 = state_265048__$1;
(statearr_265069_265092[(2)] = inst_265017);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265049 === (8))){
var inst_265030 = (state_265048[(2)]);
var state_265048__$1 = state_265048;
var statearr_265070_265093 = state_265048__$1;
(statearr_265070_265093[(2)] = inst_265030);

(statearr_265070_265093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_265074[(0)] = state_machine__9185__auto__);

(statearr_265074[(1)] = (1));

return statearr_265074;
});
var state_machine__9185__auto____1 = (function (state_265048){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265075){if((e265075 instanceof Object)){
var ex__9188__auto__ = e265075;
var statearr_265076_265094 = state_265048;
(statearr_265076_265094[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265095 = state_265048;
state_265048 = G__265095;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265048){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_265077 = f__9200__auto__.call(null);
(statearr_265077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265078);

return statearr_265077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265078,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___265203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265203,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265203,out){
return (function (state_265179){
var state_val_265180 = (state_265179[(1)]);
if((state_val_265180 === (7))){
var inst_265159 = (state_265179[(7)]);
var inst_265158 = (state_265179[(8)]);
var inst_265158__$1 = (state_265179[(2)]);
var inst_265159__$1 = cljs.core.nth.call(null,inst_265158__$1,(0),null);
var inst_265160 = cljs.core.nth.call(null,inst_265158__$1,(1),null);
var inst_265161 = (inst_265159__$1 == null);
var state_265179__$1 = (function (){var statearr_265181 = state_265179;
(statearr_265181[(9)] = inst_265160);

(statearr_265181[(7)] = inst_265159__$1);

(statearr_265181[(8)] = inst_265158__$1);

return statearr_265181;
})();
if(cljs.core.truth_(inst_265161)){
var statearr_265182_265204 = state_265179__$1;
(statearr_265182_265204[(1)] = (8));

} else {
var statearr_265183_265205 = state_265179__$1;
(statearr_265183_265205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (1))){
var inst_265150 = cljs.core.vec.call(null,chs);
var inst_265151 = inst_265150;
var state_265179__$1 = (function (){var statearr_265184 = state_265179;
(statearr_265184[(10)] = inst_265151);

return statearr_265184;
})();
var statearr_265185_265206 = state_265179__$1;
(statearr_265185_265206[(2)] = null);

(statearr_265185_265206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (4))){
var inst_265151 = (state_265179[(10)]);
var state_265179__$1 = state_265179;
return cljs.core.async.ioc_alts_BANG_.call(null,state_265179__$1,(7),inst_265151);
} else {
if((state_val_265180 === (6))){
var inst_265175 = (state_265179[(2)]);
var state_265179__$1 = state_265179;
var statearr_265186_265207 = state_265179__$1;
(statearr_265186_265207[(2)] = inst_265175);

(statearr_265186_265207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (3))){
var inst_265177 = (state_265179[(2)]);
var state_265179__$1 = state_265179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265179__$1,inst_265177);
} else {
if((state_val_265180 === (2))){
var inst_265151 = (state_265179[(10)]);
var inst_265153 = cljs.core.count.call(null,inst_265151);
var inst_265154 = (inst_265153 > (0));
var state_265179__$1 = state_265179;
if(cljs.core.truth_(inst_265154)){
var statearr_265188_265208 = state_265179__$1;
(statearr_265188_265208[(1)] = (4));

} else {
var statearr_265189_265209 = state_265179__$1;
(statearr_265189_265209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (11))){
var inst_265151 = (state_265179[(10)]);
var inst_265168 = (state_265179[(2)]);
var tmp265187 = inst_265151;
var inst_265151__$1 = tmp265187;
var state_265179__$1 = (function (){var statearr_265190 = state_265179;
(statearr_265190[(11)] = inst_265168);

(statearr_265190[(10)] = inst_265151__$1);

return statearr_265190;
})();
var statearr_265191_265210 = state_265179__$1;
(statearr_265191_265210[(2)] = null);

(statearr_265191_265210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (9))){
var inst_265159 = (state_265179[(7)]);
var state_265179__$1 = state_265179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265179__$1,(11),out,inst_265159);
} else {
if((state_val_265180 === (5))){
var inst_265173 = cljs.core.async.close_BANG_.call(null,out);
var state_265179__$1 = state_265179;
var statearr_265192_265211 = state_265179__$1;
(statearr_265192_265211[(2)] = inst_265173);

(statearr_265192_265211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (10))){
var inst_265171 = (state_265179[(2)]);
var state_265179__$1 = state_265179;
var statearr_265193_265212 = state_265179__$1;
(statearr_265193_265212[(2)] = inst_265171);

(statearr_265193_265212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265180 === (8))){
var inst_265160 = (state_265179[(9)]);
var inst_265159 = (state_265179[(7)]);
var inst_265151 = (state_265179[(10)]);
var inst_265158 = (state_265179[(8)]);
var inst_265163 = (function (){var c = inst_265160;
var v = inst_265159;
var vec__265156 = inst_265158;
var cs = inst_265151;
return ((function (c,v,vec__265156,cs,inst_265160,inst_265159,inst_265151,inst_265158,state_val_265180,c__9199__auto___265203,out){
return (function (p1__265096_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__265096_SHARP_);
});
;})(c,v,vec__265156,cs,inst_265160,inst_265159,inst_265151,inst_265158,state_val_265180,c__9199__auto___265203,out))
})();
var inst_265164 = cljs.core.filterv.call(null,inst_265163,inst_265151);
var inst_265151__$1 = inst_265164;
var state_265179__$1 = (function (){var statearr_265194 = state_265179;
(statearr_265194[(10)] = inst_265151__$1);

return statearr_265194;
})();
var statearr_265195_265213 = state_265179__$1;
(statearr_265195_265213[(2)] = null);

(statearr_265195_265213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__9199__auto___265203,out))
;
return ((function (switch__9184__auto__,c__9199__auto___265203,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265199 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_265199[(0)] = state_machine__9185__auto__);

(statearr_265199[(1)] = (1));

return statearr_265199;
});
var state_machine__9185__auto____1 = (function (state_265179){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265200){if((e265200 instanceof Object)){
var ex__9188__auto__ = e265200;
var statearr_265201_265214 = state_265179;
(statearr_265201_265214[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265215 = state_265179;
state_265179 = G__265215;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265179){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265203,out))
})();
var state__9201__auto__ = (function (){var statearr_265202 = f__9200__auto__.call(null);
(statearr_265202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265203);

return statearr_265202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265203,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___265308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265308,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265308,out){
return (function (state_265285){
var state_val_265286 = (state_265285[(1)]);
if((state_val_265286 === (7))){
var inst_265267 = (state_265285[(7)]);
var inst_265267__$1 = (state_265285[(2)]);
var inst_265268 = (inst_265267__$1 == null);
var inst_265269 = cljs.core.not.call(null,inst_265268);
var state_265285__$1 = (function (){var statearr_265287 = state_265285;
(statearr_265287[(7)] = inst_265267__$1);

return statearr_265287;
})();
if(inst_265269){
var statearr_265288_265309 = state_265285__$1;
(statearr_265288_265309[(1)] = (8));

} else {
var statearr_265289_265310 = state_265285__$1;
(statearr_265289_265310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (1))){
var inst_265262 = (0);
var state_265285__$1 = (function (){var statearr_265290 = state_265285;
(statearr_265290[(8)] = inst_265262);

return statearr_265290;
})();
var statearr_265291_265311 = state_265285__$1;
(statearr_265291_265311[(2)] = null);

(statearr_265291_265311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (4))){
var state_265285__$1 = state_265285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265285__$1,(7),ch);
} else {
if((state_val_265286 === (6))){
var inst_265280 = (state_265285[(2)]);
var state_265285__$1 = state_265285;
var statearr_265292_265312 = state_265285__$1;
(statearr_265292_265312[(2)] = inst_265280);

(statearr_265292_265312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (3))){
var inst_265282 = (state_265285[(2)]);
var inst_265283 = cljs.core.async.close_BANG_.call(null,out);
var state_265285__$1 = (function (){var statearr_265293 = state_265285;
(statearr_265293[(9)] = inst_265282);

return statearr_265293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265285__$1,inst_265283);
} else {
if((state_val_265286 === (2))){
var inst_265262 = (state_265285[(8)]);
var inst_265264 = (inst_265262 < n);
var state_265285__$1 = state_265285;
if(cljs.core.truth_(inst_265264)){
var statearr_265294_265313 = state_265285__$1;
(statearr_265294_265313[(1)] = (4));

} else {
var statearr_265295_265314 = state_265285__$1;
(statearr_265295_265314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (11))){
var inst_265262 = (state_265285[(8)]);
var inst_265272 = (state_265285[(2)]);
var inst_265273 = (inst_265262 + (1));
var inst_265262__$1 = inst_265273;
var state_265285__$1 = (function (){var statearr_265296 = state_265285;
(statearr_265296[(8)] = inst_265262__$1);

(statearr_265296[(10)] = inst_265272);

return statearr_265296;
})();
var statearr_265297_265315 = state_265285__$1;
(statearr_265297_265315[(2)] = null);

(statearr_265297_265315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (9))){
var state_265285__$1 = state_265285;
var statearr_265298_265316 = state_265285__$1;
(statearr_265298_265316[(2)] = null);

(statearr_265298_265316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (5))){
var state_265285__$1 = state_265285;
var statearr_265299_265317 = state_265285__$1;
(statearr_265299_265317[(2)] = null);

(statearr_265299_265317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (10))){
var inst_265277 = (state_265285[(2)]);
var state_265285__$1 = state_265285;
var statearr_265300_265318 = state_265285__$1;
(statearr_265300_265318[(2)] = inst_265277);

(statearr_265300_265318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265286 === (8))){
var inst_265267 = (state_265285[(7)]);
var state_265285__$1 = state_265285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265285__$1,(11),out,inst_265267);
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
}
}
}
});})(c__9199__auto___265308,out))
;
return ((function (switch__9184__auto__,c__9199__auto___265308,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_265304[(0)] = state_machine__9185__auto__);

(statearr_265304[(1)] = (1));

return statearr_265304;
});
var state_machine__9185__auto____1 = (function (state_265285){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265305){if((e265305 instanceof Object)){
var ex__9188__auto__ = e265305;
var statearr_265306_265319 = state_265285;
(statearr_265306_265319[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265320 = state_265285;
state_265285 = G__265320;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265285){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265308,out))
})();
var state__9201__auto__ = (function (){var statearr_265307 = f__9200__auto__.call(null);
(statearr_265307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265308);

return statearr_265307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265308,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t265328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t265328 = (function (ch,f,map_LT_,meta265329){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta265329 = meta265329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t265331 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t265331 = (function (fn1,_,meta265329,map_LT_,f,ch,meta265332){
this.fn1 = fn1;
this._ = _;
this.meta265329 = meta265329;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta265332 = meta265332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t265331.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t265331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t265331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__265321_SHARP_){
return f1.call(null,(((p1__265321_SHARP_ == null))?null:self__.f.call(null,p1__265321_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t265331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_265333){
var self__ = this;
var _265333__$1 = this;
return self__.meta265332;
});})(___$1))
;

cljs.core.async.t265331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_265333,meta265332__$1){
var self__ = this;
var _265333__$1 = this;
return (new cljs.core.async.t265331(self__.fn1,self__._,self__.meta265329,self__.map_LT_,self__.f,self__.ch,meta265332__$1));
});})(___$1))
;

cljs.core.async.t265331.cljs$lang$type = true;

cljs.core.async.t265331.cljs$lang$ctorStr = "cljs.core.async/t265331";

cljs.core.async.t265331.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t265331");
});})(___$1))
;

cljs.core.async.__GT_t265331 = ((function (___$1){
return (function __GT_t265331(fn1__$1,___$2,meta265329__$1,map_LT___$1,f__$1,ch__$1,meta265332){
return (new cljs.core.async.t265331(fn1__$1,___$2,meta265329__$1,map_LT___$1,f__$1,ch__$1,meta265332));
});})(___$1))
;

}

return (new cljs.core.async.t265331(fn1,___$1,self__.meta265329,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3610__auto__ = ret;
if(cljs.core.truth_(and__3610__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3610__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t265328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t265328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_265330){
var self__ = this;
var _265330__$1 = this;
return self__.meta265329;
});

cljs.core.async.t265328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_265330,meta265329__$1){
var self__ = this;
var _265330__$1 = this;
return (new cljs.core.async.t265328(self__.ch,self__.f,self__.map_LT_,meta265329__$1));
});

cljs.core.async.t265328.cljs$lang$type = true;

cljs.core.async.t265328.cljs$lang$ctorStr = "cljs.core.async/t265328";

cljs.core.async.t265328.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t265328");
});

cljs.core.async.__GT_t265328 = (function __GT_t265328(ch__$1,f__$1,map_LT___$1,meta265329){
return (new cljs.core.async.t265328(ch__$1,f__$1,map_LT___$1,meta265329));
});

}

return (new cljs.core.async.t265328(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t265337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t265337 = (function (ch,f,map_GT_,meta265338){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta265338 = meta265338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t265337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t265337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_265339){
var self__ = this;
var _265339__$1 = this;
return self__.meta265338;
});

cljs.core.async.t265337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_265339,meta265338__$1){
var self__ = this;
var _265339__$1 = this;
return (new cljs.core.async.t265337(self__.ch,self__.f,self__.map_GT_,meta265338__$1));
});

cljs.core.async.t265337.cljs$lang$type = true;

cljs.core.async.t265337.cljs$lang$ctorStr = "cljs.core.async/t265337";

cljs.core.async.t265337.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t265337");
});

cljs.core.async.__GT_t265337 = (function __GT_t265337(ch__$1,f__$1,map_GT___$1,meta265338){
return (new cljs.core.async.t265337(ch__$1,f__$1,map_GT___$1,meta265338));
});

}

return (new cljs.core.async.t265337(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t265343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t265343 = (function (ch,p,filter_GT_,meta265344){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta265344 = meta265344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t265343.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t265343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_265345){
var self__ = this;
var _265345__$1 = this;
return self__.meta265344;
});

cljs.core.async.t265343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_265345,meta265344__$1){
var self__ = this;
var _265345__$1 = this;
return (new cljs.core.async.t265343(self__.ch,self__.p,self__.filter_GT_,meta265344__$1));
});

cljs.core.async.t265343.cljs$lang$type = true;

cljs.core.async.t265343.cljs$lang$ctorStr = "cljs.core.async/t265343";

cljs.core.async.t265343.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t265343");
});

cljs.core.async.__GT_t265343 = (function __GT_t265343(ch__$1,p__$1,filter_GT___$1,meta265344){
return (new cljs.core.async.t265343(ch__$1,p__$1,filter_GT___$1,meta265344));
});

}

return (new cljs.core.async.t265343(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___265428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265428,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265428,out){
return (function (state_265407){
var state_val_265408 = (state_265407[(1)]);
if((state_val_265408 === (7))){
var inst_265403 = (state_265407[(2)]);
var state_265407__$1 = state_265407;
var statearr_265409_265429 = state_265407__$1;
(statearr_265409_265429[(2)] = inst_265403);

(statearr_265409_265429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (1))){
var state_265407__$1 = state_265407;
var statearr_265410_265430 = state_265407__$1;
(statearr_265410_265430[(2)] = null);

(statearr_265410_265430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (4))){
var inst_265389 = (state_265407[(7)]);
var inst_265389__$1 = (state_265407[(2)]);
var inst_265390 = (inst_265389__$1 == null);
var state_265407__$1 = (function (){var statearr_265411 = state_265407;
(statearr_265411[(7)] = inst_265389__$1);

return statearr_265411;
})();
if(cljs.core.truth_(inst_265390)){
var statearr_265412_265431 = state_265407__$1;
(statearr_265412_265431[(1)] = (5));

} else {
var statearr_265413_265432 = state_265407__$1;
(statearr_265413_265432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (6))){
var inst_265389 = (state_265407[(7)]);
var inst_265394 = p.call(null,inst_265389);
var state_265407__$1 = state_265407;
if(cljs.core.truth_(inst_265394)){
var statearr_265414_265433 = state_265407__$1;
(statearr_265414_265433[(1)] = (8));

} else {
var statearr_265415_265434 = state_265407__$1;
(statearr_265415_265434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (3))){
var inst_265405 = (state_265407[(2)]);
var state_265407__$1 = state_265407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265407__$1,inst_265405);
} else {
if((state_val_265408 === (2))){
var state_265407__$1 = state_265407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265407__$1,(4),ch);
} else {
if((state_val_265408 === (11))){
var inst_265397 = (state_265407[(2)]);
var state_265407__$1 = state_265407;
var statearr_265416_265435 = state_265407__$1;
(statearr_265416_265435[(2)] = inst_265397);

(statearr_265416_265435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (9))){
var state_265407__$1 = state_265407;
var statearr_265417_265436 = state_265407__$1;
(statearr_265417_265436[(2)] = null);

(statearr_265417_265436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (5))){
var inst_265392 = cljs.core.async.close_BANG_.call(null,out);
var state_265407__$1 = state_265407;
var statearr_265418_265437 = state_265407__$1;
(statearr_265418_265437[(2)] = inst_265392);

(statearr_265418_265437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (10))){
var inst_265400 = (state_265407[(2)]);
var state_265407__$1 = (function (){var statearr_265419 = state_265407;
(statearr_265419[(8)] = inst_265400);

return statearr_265419;
})();
var statearr_265420_265438 = state_265407__$1;
(statearr_265420_265438[(2)] = null);

(statearr_265420_265438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265408 === (8))){
var inst_265389 = (state_265407[(7)]);
var state_265407__$1 = state_265407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265407__$1,(11),out,inst_265389);
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
}
}
}
});})(c__9199__auto___265428,out))
;
return ((function (switch__9184__auto__,c__9199__auto___265428,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265424 = [null,null,null,null,null,null,null,null,null];
(statearr_265424[(0)] = state_machine__9185__auto__);

(statearr_265424[(1)] = (1));

return statearr_265424;
});
var state_machine__9185__auto____1 = (function (state_265407){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265425){if((e265425 instanceof Object)){
var ex__9188__auto__ = e265425;
var statearr_265426_265439 = state_265407;
(statearr_265426_265439[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265440 = state_265407;
state_265407 = G__265440;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265407){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265428,out))
})();
var state__9201__auto__ = (function (){var statearr_265427 = f__9200__auto__.call(null);
(statearr_265427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265428);

return statearr_265427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265428,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__){
return (function (state_265606){
var state_val_265607 = (state_265606[(1)]);
if((state_val_265607 === (7))){
var inst_265602 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
var statearr_265608_265649 = state_265606__$1;
(statearr_265608_265649[(2)] = inst_265602);

(statearr_265608_265649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (20))){
var inst_265572 = (state_265606[(7)]);
var inst_265583 = (state_265606[(2)]);
var inst_265584 = cljs.core.next.call(null,inst_265572);
var inst_265558 = inst_265584;
var inst_265559 = null;
var inst_265560 = (0);
var inst_265561 = (0);
var state_265606__$1 = (function (){var statearr_265609 = state_265606;
(statearr_265609[(8)] = inst_265558);

(statearr_265609[(9)] = inst_265583);

(statearr_265609[(10)] = inst_265559);

(statearr_265609[(11)] = inst_265561);

(statearr_265609[(12)] = inst_265560);

return statearr_265609;
})();
var statearr_265610_265650 = state_265606__$1;
(statearr_265610_265650[(2)] = null);

(statearr_265610_265650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (1))){
var state_265606__$1 = state_265606;
var statearr_265611_265651 = state_265606__$1;
(statearr_265611_265651[(2)] = null);

(statearr_265611_265651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (4))){
var inst_265547 = (state_265606[(13)]);
var inst_265547__$1 = (state_265606[(2)]);
var inst_265548 = (inst_265547__$1 == null);
var state_265606__$1 = (function (){var statearr_265612 = state_265606;
(statearr_265612[(13)] = inst_265547__$1);

return statearr_265612;
})();
if(cljs.core.truth_(inst_265548)){
var statearr_265613_265652 = state_265606__$1;
(statearr_265613_265652[(1)] = (5));

} else {
var statearr_265614_265653 = state_265606__$1;
(statearr_265614_265653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (15))){
var state_265606__$1 = state_265606;
var statearr_265618_265654 = state_265606__$1;
(statearr_265618_265654[(2)] = null);

(statearr_265618_265654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (21))){
var state_265606__$1 = state_265606;
var statearr_265619_265655 = state_265606__$1;
(statearr_265619_265655[(2)] = null);

(statearr_265619_265655[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (13))){
var inst_265558 = (state_265606[(8)]);
var inst_265559 = (state_265606[(10)]);
var inst_265561 = (state_265606[(11)]);
var inst_265560 = (state_265606[(12)]);
var inst_265568 = (state_265606[(2)]);
var inst_265569 = (inst_265561 + (1));
var tmp265615 = inst_265558;
var tmp265616 = inst_265559;
var tmp265617 = inst_265560;
var inst_265558__$1 = tmp265615;
var inst_265559__$1 = tmp265616;
var inst_265560__$1 = tmp265617;
var inst_265561__$1 = inst_265569;
var state_265606__$1 = (function (){var statearr_265620 = state_265606;
(statearr_265620[(8)] = inst_265558__$1);

(statearr_265620[(14)] = inst_265568);

(statearr_265620[(10)] = inst_265559__$1);

(statearr_265620[(11)] = inst_265561__$1);

(statearr_265620[(12)] = inst_265560__$1);

return statearr_265620;
})();
var statearr_265621_265656 = state_265606__$1;
(statearr_265621_265656[(2)] = null);

(statearr_265621_265656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (22))){
var state_265606__$1 = state_265606;
var statearr_265622_265657 = state_265606__$1;
(statearr_265622_265657[(2)] = null);

(statearr_265622_265657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (6))){
var inst_265547 = (state_265606[(13)]);
var inst_265556 = f.call(null,inst_265547);
var inst_265557 = cljs.core.seq.call(null,inst_265556);
var inst_265558 = inst_265557;
var inst_265559 = null;
var inst_265560 = (0);
var inst_265561 = (0);
var state_265606__$1 = (function (){var statearr_265623 = state_265606;
(statearr_265623[(8)] = inst_265558);

(statearr_265623[(10)] = inst_265559);

(statearr_265623[(11)] = inst_265561);

(statearr_265623[(12)] = inst_265560);

return statearr_265623;
})();
var statearr_265624_265658 = state_265606__$1;
(statearr_265624_265658[(2)] = null);

(statearr_265624_265658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (17))){
var inst_265572 = (state_265606[(7)]);
var inst_265576 = cljs.core.chunk_first.call(null,inst_265572);
var inst_265577 = cljs.core.chunk_rest.call(null,inst_265572);
var inst_265578 = cljs.core.count.call(null,inst_265576);
var inst_265558 = inst_265577;
var inst_265559 = inst_265576;
var inst_265560 = inst_265578;
var inst_265561 = (0);
var state_265606__$1 = (function (){var statearr_265625 = state_265606;
(statearr_265625[(8)] = inst_265558);

(statearr_265625[(10)] = inst_265559);

(statearr_265625[(11)] = inst_265561);

(statearr_265625[(12)] = inst_265560);

return statearr_265625;
})();
var statearr_265626_265659 = state_265606__$1;
(statearr_265626_265659[(2)] = null);

(statearr_265626_265659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (3))){
var inst_265604 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265606__$1,inst_265604);
} else {
if((state_val_265607 === (12))){
var inst_265592 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
var statearr_265627_265660 = state_265606__$1;
(statearr_265627_265660[(2)] = inst_265592);

(statearr_265627_265660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (2))){
var state_265606__$1 = state_265606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265606__$1,(4),in$);
} else {
if((state_val_265607 === (23))){
var inst_265600 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
var statearr_265628_265661 = state_265606__$1;
(statearr_265628_265661[(2)] = inst_265600);

(statearr_265628_265661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (19))){
var inst_265587 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
var statearr_265629_265662 = state_265606__$1;
(statearr_265629_265662[(2)] = inst_265587);

(statearr_265629_265662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (11))){
var inst_265558 = (state_265606[(8)]);
var inst_265572 = (state_265606[(7)]);
var inst_265572__$1 = cljs.core.seq.call(null,inst_265558);
var state_265606__$1 = (function (){var statearr_265630 = state_265606;
(statearr_265630[(7)] = inst_265572__$1);

return statearr_265630;
})();
if(inst_265572__$1){
var statearr_265631_265663 = state_265606__$1;
(statearr_265631_265663[(1)] = (14));

} else {
var statearr_265632_265664 = state_265606__$1;
(statearr_265632_265664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (9))){
var inst_265594 = (state_265606[(2)]);
var inst_265595 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_265606__$1 = (function (){var statearr_265633 = state_265606;
(statearr_265633[(15)] = inst_265594);

return statearr_265633;
})();
if(cljs.core.truth_(inst_265595)){
var statearr_265634_265665 = state_265606__$1;
(statearr_265634_265665[(1)] = (21));

} else {
var statearr_265635_265666 = state_265606__$1;
(statearr_265635_265666[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (5))){
var inst_265550 = cljs.core.async.close_BANG_.call(null,out);
var state_265606__$1 = state_265606;
var statearr_265636_265667 = state_265606__$1;
(statearr_265636_265667[(2)] = inst_265550);

(statearr_265636_265667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (14))){
var inst_265572 = (state_265606[(7)]);
var inst_265574 = cljs.core.chunked_seq_QMARK_.call(null,inst_265572);
var state_265606__$1 = state_265606;
if(inst_265574){
var statearr_265637_265668 = state_265606__$1;
(statearr_265637_265668[(1)] = (17));

} else {
var statearr_265638_265669 = state_265606__$1;
(statearr_265638_265669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (16))){
var inst_265590 = (state_265606[(2)]);
var state_265606__$1 = state_265606;
var statearr_265639_265670 = state_265606__$1;
(statearr_265639_265670[(2)] = inst_265590);

(statearr_265639_265670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265607 === (10))){
var inst_265559 = (state_265606[(10)]);
var inst_265561 = (state_265606[(11)]);
var inst_265566 = cljs.core._nth.call(null,inst_265559,inst_265561);
var state_265606__$1 = state_265606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265606__$1,(13),out,inst_265566);
} else {
if((state_val_265607 === (18))){
var inst_265572 = (state_265606[(7)]);
var inst_265581 = cljs.core.first.call(null,inst_265572);
var state_265606__$1 = state_265606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265606__$1,(20),out,inst_265581);
} else {
if((state_val_265607 === (8))){
var inst_265561 = (state_265606[(11)]);
var inst_265560 = (state_265606[(12)]);
var inst_265563 = (inst_265561 < inst_265560);
var inst_265564 = inst_265563;
var state_265606__$1 = state_265606;
if(cljs.core.truth_(inst_265564)){
var statearr_265640_265671 = state_265606__$1;
(statearr_265640_265671[(1)] = (10));

} else {
var statearr_265641_265672 = state_265606__$1;
(statearr_265641_265672[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9199__auto__))
;
return ((function (switch__9184__auto__,c__9199__auto__){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_265645[(0)] = state_machine__9185__auto__);

(statearr_265645[(1)] = (1));

return statearr_265645;
});
var state_machine__9185__auto____1 = (function (state_265606){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265646){if((e265646 instanceof Object)){
var ex__9188__auto__ = e265646;
var statearr_265647_265673 = state_265606;
(statearr_265647_265673[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265674 = state_265606;
state_265606 = G__265674;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265606){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_265648 = f__9200__auto__.call(null);
(statearr_265648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_265648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto__))
);

return c__9199__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___265771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265771,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265771,out){
return (function (state_265746){
var state_val_265747 = (state_265746[(1)]);
if((state_val_265747 === (7))){
var inst_265741 = (state_265746[(2)]);
var state_265746__$1 = state_265746;
var statearr_265748_265772 = state_265746__$1;
(statearr_265748_265772[(2)] = inst_265741);

(statearr_265748_265772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (1))){
var inst_265723 = null;
var state_265746__$1 = (function (){var statearr_265749 = state_265746;
(statearr_265749[(7)] = inst_265723);

return statearr_265749;
})();
var statearr_265750_265773 = state_265746__$1;
(statearr_265750_265773[(2)] = null);

(statearr_265750_265773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (4))){
var inst_265726 = (state_265746[(8)]);
var inst_265726__$1 = (state_265746[(2)]);
var inst_265727 = (inst_265726__$1 == null);
var inst_265728 = cljs.core.not.call(null,inst_265727);
var state_265746__$1 = (function (){var statearr_265751 = state_265746;
(statearr_265751[(8)] = inst_265726__$1);

return statearr_265751;
})();
if(inst_265728){
var statearr_265752_265774 = state_265746__$1;
(statearr_265752_265774[(1)] = (5));

} else {
var statearr_265753_265775 = state_265746__$1;
(statearr_265753_265775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (6))){
var state_265746__$1 = state_265746;
var statearr_265754_265776 = state_265746__$1;
(statearr_265754_265776[(2)] = null);

(statearr_265754_265776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (3))){
var inst_265743 = (state_265746[(2)]);
var inst_265744 = cljs.core.async.close_BANG_.call(null,out);
var state_265746__$1 = (function (){var statearr_265755 = state_265746;
(statearr_265755[(9)] = inst_265743);

return statearr_265755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265746__$1,inst_265744);
} else {
if((state_val_265747 === (2))){
var state_265746__$1 = state_265746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265746__$1,(4),ch);
} else {
if((state_val_265747 === (11))){
var inst_265726 = (state_265746[(8)]);
var inst_265735 = (state_265746[(2)]);
var inst_265723 = inst_265726;
var state_265746__$1 = (function (){var statearr_265756 = state_265746;
(statearr_265756[(7)] = inst_265723);

(statearr_265756[(10)] = inst_265735);

return statearr_265756;
})();
var statearr_265757_265777 = state_265746__$1;
(statearr_265757_265777[(2)] = null);

(statearr_265757_265777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (9))){
var inst_265726 = (state_265746[(8)]);
var state_265746__$1 = state_265746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265746__$1,(11),out,inst_265726);
} else {
if((state_val_265747 === (5))){
var inst_265723 = (state_265746[(7)]);
var inst_265726 = (state_265746[(8)]);
var inst_265730 = cljs.core._EQ_.call(null,inst_265726,inst_265723);
var state_265746__$1 = state_265746;
if(inst_265730){
var statearr_265759_265778 = state_265746__$1;
(statearr_265759_265778[(1)] = (8));

} else {
var statearr_265760_265779 = state_265746__$1;
(statearr_265760_265779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (10))){
var inst_265738 = (state_265746[(2)]);
var state_265746__$1 = state_265746;
var statearr_265761_265780 = state_265746__$1;
(statearr_265761_265780[(2)] = inst_265738);

(statearr_265761_265780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265747 === (8))){
var inst_265723 = (state_265746[(7)]);
var tmp265758 = inst_265723;
var inst_265723__$1 = tmp265758;
var state_265746__$1 = (function (){var statearr_265762 = state_265746;
(statearr_265762[(7)] = inst_265723__$1);

return statearr_265762;
})();
var statearr_265763_265781 = state_265746__$1;
(statearr_265763_265781[(2)] = null);

(statearr_265763_265781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__9199__auto___265771,out))
;
return ((function (switch__9184__auto__,c__9199__auto___265771,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_265767[(0)] = state_machine__9185__auto__);

(statearr_265767[(1)] = (1));

return statearr_265767;
});
var state_machine__9185__auto____1 = (function (state_265746){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265768){if((e265768 instanceof Object)){
var ex__9188__auto__ = e265768;
var statearr_265769_265782 = state_265746;
(statearr_265769_265782[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265783 = state_265746;
state_265746 = G__265783;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265746){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265771,out))
})();
var state__9201__auto__ = (function (){var statearr_265770 = f__9200__auto__.call(null);
(statearr_265770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265771);

return statearr_265770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265771,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___265918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___265918,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___265918,out){
return (function (state_265888){
var state_val_265889 = (state_265888[(1)]);
if((state_val_265889 === (7))){
var inst_265884 = (state_265888[(2)]);
var state_265888__$1 = state_265888;
var statearr_265890_265919 = state_265888__$1;
(statearr_265890_265919[(2)] = inst_265884);

(statearr_265890_265919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (1))){
var inst_265851 = (new Array(n));
var inst_265852 = inst_265851;
var inst_265853 = (0);
var state_265888__$1 = (function (){var statearr_265891 = state_265888;
(statearr_265891[(7)] = inst_265852);

(statearr_265891[(8)] = inst_265853);

return statearr_265891;
})();
var statearr_265892_265920 = state_265888__$1;
(statearr_265892_265920[(2)] = null);

(statearr_265892_265920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (4))){
var inst_265856 = (state_265888[(9)]);
var inst_265856__$1 = (state_265888[(2)]);
var inst_265857 = (inst_265856__$1 == null);
var inst_265858 = cljs.core.not.call(null,inst_265857);
var state_265888__$1 = (function (){var statearr_265893 = state_265888;
(statearr_265893[(9)] = inst_265856__$1);

return statearr_265893;
})();
if(inst_265858){
var statearr_265894_265921 = state_265888__$1;
(statearr_265894_265921[(1)] = (5));

} else {
var statearr_265895_265922 = state_265888__$1;
(statearr_265895_265922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (15))){
var inst_265878 = (state_265888[(2)]);
var state_265888__$1 = state_265888;
var statearr_265896_265923 = state_265888__$1;
(statearr_265896_265923[(2)] = inst_265878);

(statearr_265896_265923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (13))){
var state_265888__$1 = state_265888;
var statearr_265897_265924 = state_265888__$1;
(statearr_265897_265924[(2)] = null);

(statearr_265897_265924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (6))){
var inst_265853 = (state_265888[(8)]);
var inst_265874 = (inst_265853 > (0));
var state_265888__$1 = state_265888;
if(cljs.core.truth_(inst_265874)){
var statearr_265898_265925 = state_265888__$1;
(statearr_265898_265925[(1)] = (12));

} else {
var statearr_265899_265926 = state_265888__$1;
(statearr_265899_265926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (3))){
var inst_265886 = (state_265888[(2)]);
var state_265888__$1 = state_265888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_265888__$1,inst_265886);
} else {
if((state_val_265889 === (12))){
var inst_265852 = (state_265888[(7)]);
var inst_265876 = cljs.core.vec.call(null,inst_265852);
var state_265888__$1 = state_265888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265888__$1,(15),out,inst_265876);
} else {
if((state_val_265889 === (2))){
var state_265888__$1 = state_265888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_265888__$1,(4),ch);
} else {
if((state_val_265889 === (11))){
var inst_265868 = (state_265888[(2)]);
var inst_265869 = (new Array(n));
var inst_265852 = inst_265869;
var inst_265853 = (0);
var state_265888__$1 = (function (){var statearr_265900 = state_265888;
(statearr_265900[(10)] = inst_265868);

(statearr_265900[(7)] = inst_265852);

(statearr_265900[(8)] = inst_265853);

return statearr_265900;
})();
var statearr_265901_265927 = state_265888__$1;
(statearr_265901_265927[(2)] = null);

(statearr_265901_265927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (9))){
var inst_265852 = (state_265888[(7)]);
var inst_265866 = cljs.core.vec.call(null,inst_265852);
var state_265888__$1 = state_265888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_265888__$1,(11),out,inst_265866);
} else {
if((state_val_265889 === (5))){
var inst_265861 = (state_265888[(11)]);
var inst_265852 = (state_265888[(7)]);
var inst_265856 = (state_265888[(9)]);
var inst_265853 = (state_265888[(8)]);
var inst_265860 = (inst_265852[inst_265853] = inst_265856);
var inst_265861__$1 = (inst_265853 + (1));
var inst_265862 = (inst_265861__$1 < n);
var state_265888__$1 = (function (){var statearr_265902 = state_265888;
(statearr_265902[(11)] = inst_265861__$1);

(statearr_265902[(12)] = inst_265860);

return statearr_265902;
})();
if(cljs.core.truth_(inst_265862)){
var statearr_265903_265928 = state_265888__$1;
(statearr_265903_265928[(1)] = (8));

} else {
var statearr_265904_265929 = state_265888__$1;
(statearr_265904_265929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (14))){
var inst_265881 = (state_265888[(2)]);
var inst_265882 = cljs.core.async.close_BANG_.call(null,out);
var state_265888__$1 = (function (){var statearr_265906 = state_265888;
(statearr_265906[(13)] = inst_265881);

return statearr_265906;
})();
var statearr_265907_265930 = state_265888__$1;
(statearr_265907_265930[(2)] = inst_265882);

(statearr_265907_265930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (10))){
var inst_265872 = (state_265888[(2)]);
var state_265888__$1 = state_265888;
var statearr_265908_265931 = state_265888__$1;
(statearr_265908_265931[(2)] = inst_265872);

(statearr_265908_265931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_265889 === (8))){
var inst_265861 = (state_265888[(11)]);
var inst_265852 = (state_265888[(7)]);
var tmp265905 = inst_265852;
var inst_265852__$1 = tmp265905;
var inst_265853 = inst_265861;
var state_265888__$1 = (function (){var statearr_265909 = state_265888;
(statearr_265909[(7)] = inst_265852__$1);

(statearr_265909[(8)] = inst_265853);

return statearr_265909;
})();
var statearr_265910_265932 = state_265888__$1;
(statearr_265910_265932[(2)] = null);

(statearr_265910_265932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__9199__auto___265918,out))
;
return ((function (switch__9184__auto__,c__9199__auto___265918,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_265914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_265914[(0)] = state_machine__9185__auto__);

(statearr_265914[(1)] = (1));

return statearr_265914;
});
var state_machine__9185__auto____1 = (function (state_265888){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_265888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e265915){if((e265915 instanceof Object)){
var ex__9188__auto__ = e265915;
var statearr_265916_265933 = state_265888;
(statearr_265916_265933[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_265888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e265915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__265934 = state_265888;
state_265888 = G__265934;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_265888){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_265888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___265918,out))
})();
var state__9201__auto__ = (function (){var statearr_265917 = f__9200__auto__.call(null);
(statearr_265917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___265918);

return statearr_265917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___265918,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9199__auto___266077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___266077,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___266077,out){
return (function (state_266047){
var state_val_266048 = (state_266047[(1)]);
if((state_val_266048 === (7))){
var inst_266043 = (state_266047[(2)]);
var state_266047__$1 = state_266047;
var statearr_266049_266078 = state_266047__$1;
(statearr_266049_266078[(2)] = inst_266043);

(statearr_266049_266078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (1))){
var inst_266006 = [];
var inst_266007 = inst_266006;
var inst_266008 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_266047__$1 = (function (){var statearr_266050 = state_266047;
(statearr_266050[(7)] = inst_266008);

(statearr_266050[(8)] = inst_266007);

return statearr_266050;
})();
var statearr_266051_266079 = state_266047__$1;
(statearr_266051_266079[(2)] = null);

(statearr_266051_266079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (4))){
var inst_266011 = (state_266047[(9)]);
var inst_266011__$1 = (state_266047[(2)]);
var inst_266012 = (inst_266011__$1 == null);
var inst_266013 = cljs.core.not.call(null,inst_266012);
var state_266047__$1 = (function (){var statearr_266052 = state_266047;
(statearr_266052[(9)] = inst_266011__$1);

return statearr_266052;
})();
if(inst_266013){
var statearr_266053_266080 = state_266047__$1;
(statearr_266053_266080[(1)] = (5));

} else {
var statearr_266054_266081 = state_266047__$1;
(statearr_266054_266081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (15))){
var inst_266037 = (state_266047[(2)]);
var state_266047__$1 = state_266047;
var statearr_266055_266082 = state_266047__$1;
(statearr_266055_266082[(2)] = inst_266037);

(statearr_266055_266082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (13))){
var state_266047__$1 = state_266047;
var statearr_266056_266083 = state_266047__$1;
(statearr_266056_266083[(2)] = null);

(statearr_266056_266083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (6))){
var inst_266007 = (state_266047[(8)]);
var inst_266032 = inst_266007.length;
var inst_266033 = (inst_266032 > (0));
var state_266047__$1 = state_266047;
if(cljs.core.truth_(inst_266033)){
var statearr_266057_266084 = state_266047__$1;
(statearr_266057_266084[(1)] = (12));

} else {
var statearr_266058_266085 = state_266047__$1;
(statearr_266058_266085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (3))){
var inst_266045 = (state_266047[(2)]);
var state_266047__$1 = state_266047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_266047__$1,inst_266045);
} else {
if((state_val_266048 === (12))){
var inst_266007 = (state_266047[(8)]);
var inst_266035 = cljs.core.vec.call(null,inst_266007);
var state_266047__$1 = state_266047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_266047__$1,(15),out,inst_266035);
} else {
if((state_val_266048 === (2))){
var state_266047__$1 = state_266047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_266047__$1,(4),ch);
} else {
if((state_val_266048 === (11))){
var inst_266011 = (state_266047[(9)]);
var inst_266015 = (state_266047[(10)]);
var inst_266025 = (state_266047[(2)]);
var inst_266026 = [];
var inst_266027 = inst_266026.push(inst_266011);
var inst_266007 = inst_266026;
var inst_266008 = inst_266015;
var state_266047__$1 = (function (){var statearr_266059 = state_266047;
(statearr_266059[(7)] = inst_266008);

(statearr_266059[(11)] = inst_266027);

(statearr_266059[(8)] = inst_266007);

(statearr_266059[(12)] = inst_266025);

return statearr_266059;
})();
var statearr_266060_266086 = state_266047__$1;
(statearr_266060_266086[(2)] = null);

(statearr_266060_266086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (9))){
var inst_266007 = (state_266047[(8)]);
var inst_266023 = cljs.core.vec.call(null,inst_266007);
var state_266047__$1 = state_266047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_266047__$1,(11),out,inst_266023);
} else {
if((state_val_266048 === (5))){
var inst_266011 = (state_266047[(9)]);
var inst_266008 = (state_266047[(7)]);
var inst_266015 = (state_266047[(10)]);
var inst_266015__$1 = f.call(null,inst_266011);
var inst_266016 = cljs.core._EQ_.call(null,inst_266015__$1,inst_266008);
var inst_266017 = cljs.core.keyword_identical_QMARK_.call(null,inst_266008,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_266018 = (inst_266016) || (inst_266017);
var state_266047__$1 = (function (){var statearr_266061 = state_266047;
(statearr_266061[(10)] = inst_266015__$1);

return statearr_266061;
})();
if(cljs.core.truth_(inst_266018)){
var statearr_266062_266087 = state_266047__$1;
(statearr_266062_266087[(1)] = (8));

} else {
var statearr_266063_266088 = state_266047__$1;
(statearr_266063_266088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (14))){
var inst_266040 = (state_266047[(2)]);
var inst_266041 = cljs.core.async.close_BANG_.call(null,out);
var state_266047__$1 = (function (){var statearr_266065 = state_266047;
(statearr_266065[(13)] = inst_266040);

return statearr_266065;
})();
var statearr_266066_266089 = state_266047__$1;
(statearr_266066_266089[(2)] = inst_266041);

(statearr_266066_266089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (10))){
var inst_266030 = (state_266047[(2)]);
var state_266047__$1 = state_266047;
var statearr_266067_266090 = state_266047__$1;
(statearr_266067_266090[(2)] = inst_266030);

(statearr_266067_266090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_266048 === (8))){
var inst_266011 = (state_266047[(9)]);
var inst_266007 = (state_266047[(8)]);
var inst_266015 = (state_266047[(10)]);
var inst_266020 = inst_266007.push(inst_266011);
var tmp266064 = inst_266007;
var inst_266007__$1 = tmp266064;
var inst_266008 = inst_266015;
var state_266047__$1 = (function (){var statearr_266068 = state_266047;
(statearr_266068[(7)] = inst_266008);

(statearr_266068[(14)] = inst_266020);

(statearr_266068[(8)] = inst_266007__$1);

return statearr_266068;
})();
var statearr_266069_266091 = state_266047__$1;
(statearr_266069_266091[(2)] = null);

(statearr_266069_266091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__9199__auto___266077,out))
;
return ((function (switch__9184__auto__,c__9199__auto___266077,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_266073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_266073[(0)] = state_machine__9185__auto__);

(statearr_266073[(1)] = (1));

return statearr_266073;
});
var state_machine__9185__auto____1 = (function (state_266047){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_266047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e266074){if((e266074 instanceof Object)){
var ex__9188__auto__ = e266074;
var statearr_266075_266092 = state_266047;
(statearr_266075_266092[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_266047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e266074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__266093 = state_266047;
state_266047 = G__266093;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_266047){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_266047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___266077,out))
})();
var state__9201__auto__ = (function (){var statearr_266076 = f__9200__auto__.call(null);
(statearr_266076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___266077);

return statearr_266076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___266077,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map