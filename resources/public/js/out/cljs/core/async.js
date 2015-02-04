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
if(typeof cljs.core.async.t133337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t133337 = (function (f,fn_handler,meta133338){
this.f = f;
this.fn_handler = fn_handler;
this.meta133338 = meta133338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133337.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t133337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t133337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t133337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133339){
var self__ = this;
var _133339__$1 = this;
return self__.meta133338;
});

cljs.core.async.t133337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133339,meta133338__$1){
var self__ = this;
var _133339__$1 = this;
return (new cljs.core.async.t133337(self__.f,self__.fn_handler,meta133338__$1));
});

cljs.core.async.t133337.cljs$lang$type = true;

cljs.core.async.t133337.cljs$lang$ctorStr = "cljs.core.async/t133337";

cljs.core.async.t133337.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t133337");
});

cljs.core.async.__GT_t133337 = (function __GT_t133337(f__$1,fn_handler__$1,meta133338){
return (new cljs.core.async.t133337(f__$1,fn_handler__$1,meta133338));
});

}

return (new cljs.core.async.t133337(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__133341 = buff;
if(G__133341){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__133341.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__133341.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__133341);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__133341);
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
var val_133342 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_133342);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_133342,ret){
return (function (){
return fn1.call(null,val_133342);
});})(val_133342,ret))
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
var n__4509__auto___133343 = n;
var x_133344 = (0);
while(true){
if((x_133344 < n__4509__auto___133343)){
(a[x_133344] = (0));

var G__133345 = (x_133344 + (1));
x_133344 = G__133345;
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

var G__133346 = (i + (1));
i = G__133346;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t133350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t133350 = (function (flag,alt_flag,meta133351){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta133351 = meta133351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t133350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t133350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t133350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_133352){
var self__ = this;
var _133352__$1 = this;
return self__.meta133351;
});})(flag))
;

cljs.core.async.t133350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_133352,meta133351__$1){
var self__ = this;
var _133352__$1 = this;
return (new cljs.core.async.t133350(self__.flag,self__.alt_flag,meta133351__$1));
});})(flag))
;

cljs.core.async.t133350.cljs$lang$type = true;

cljs.core.async.t133350.cljs$lang$ctorStr = "cljs.core.async/t133350";

cljs.core.async.t133350.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t133350");
});})(flag))
;

cljs.core.async.__GT_t133350 = ((function (flag){
return (function __GT_t133350(flag__$1,alt_flag__$1,meta133351){
return (new cljs.core.async.t133350(flag__$1,alt_flag__$1,meta133351));
});})(flag))
;

}

return (new cljs.core.async.t133350(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t133356 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t133356 = (function (cb,flag,alt_handler,meta133357){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta133357 = meta133357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133356.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t133356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t133356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t133356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133358){
var self__ = this;
var _133358__$1 = this;
return self__.meta133357;
});

cljs.core.async.t133356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133358,meta133357__$1){
var self__ = this;
var _133358__$1 = this;
return (new cljs.core.async.t133356(self__.cb,self__.flag,self__.alt_handler,meta133357__$1));
});

cljs.core.async.t133356.cljs$lang$type = true;

cljs.core.async.t133356.cljs$lang$ctorStr = "cljs.core.async/t133356";

cljs.core.async.t133356.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t133356");
});

cljs.core.async.__GT_t133356 = (function __GT_t133356(cb__$1,flag__$1,alt_handler__$1,meta133357){
return (new cljs.core.async.t133356(cb__$1,flag__$1,alt_handler__$1,meta133357));
});

}

return (new cljs.core.async.t133356(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__133359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133359_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__133360_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133360_SHARP_,port], null));
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
var G__133361 = (i + (1));
i = G__133361;
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
var alts_BANG___delegate = function (ports,p__133362){
var map__133364 = p__133362;
var map__133364__$1 = ((cljs.core.seq_QMARK_.call(null,map__133364))?cljs.core.apply.call(null,cljs.core.hash_map,map__133364):map__133364);
var opts = map__133364__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__133362 = null;
if (arguments.length > 1) {
  p__133362 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__133362);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__133365){
var ports = cljs.core.first(arglist__133365);
var p__133362 = cljs.core.rest(arglist__133365);
return alts_BANG___delegate(ports,p__133362);
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
var c__7043__auto___133460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___133460){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___133460){
return (function (state_133436){
var state_val_133437 = (state_133436[(1)]);
if((state_val_133437 === (7))){
var inst_133432 = (state_133436[(2)]);
var state_133436__$1 = state_133436;
var statearr_133438_133461 = state_133436__$1;
(statearr_133438_133461[(2)] = inst_133432);

(statearr_133438_133461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (1))){
var state_133436__$1 = state_133436;
var statearr_133439_133462 = state_133436__$1;
(statearr_133439_133462[(2)] = null);

(statearr_133439_133462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (4))){
var inst_133415 = (state_133436[(7)]);
var inst_133415__$1 = (state_133436[(2)]);
var inst_133416 = (inst_133415__$1 == null);
var state_133436__$1 = (function (){var statearr_133440 = state_133436;
(statearr_133440[(7)] = inst_133415__$1);

return statearr_133440;
})();
if(cljs.core.truth_(inst_133416)){
var statearr_133441_133463 = state_133436__$1;
(statearr_133441_133463[(1)] = (5));

} else {
var statearr_133442_133464 = state_133436__$1;
(statearr_133442_133464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (13))){
var state_133436__$1 = state_133436;
var statearr_133443_133465 = state_133436__$1;
(statearr_133443_133465[(2)] = null);

(statearr_133443_133465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (6))){
var inst_133415 = (state_133436[(7)]);
var state_133436__$1 = state_133436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133436__$1,(11),to,inst_133415);
} else {
if((state_val_133437 === (3))){
var inst_133434 = (state_133436[(2)]);
var state_133436__$1 = state_133436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133436__$1,inst_133434);
} else {
if((state_val_133437 === (12))){
var state_133436__$1 = state_133436;
var statearr_133444_133466 = state_133436__$1;
(statearr_133444_133466[(2)] = null);

(statearr_133444_133466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (2))){
var state_133436__$1 = state_133436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133436__$1,(4),from);
} else {
if((state_val_133437 === (11))){
var inst_133425 = (state_133436[(2)]);
var state_133436__$1 = state_133436;
if(cljs.core.truth_(inst_133425)){
var statearr_133445_133467 = state_133436__$1;
(statearr_133445_133467[(1)] = (12));

} else {
var statearr_133446_133468 = state_133436__$1;
(statearr_133446_133468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (9))){
var state_133436__$1 = state_133436;
var statearr_133447_133469 = state_133436__$1;
(statearr_133447_133469[(2)] = null);

(statearr_133447_133469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (5))){
var state_133436__$1 = state_133436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_133448_133470 = state_133436__$1;
(statearr_133448_133470[(1)] = (8));

} else {
var statearr_133449_133471 = state_133436__$1;
(statearr_133449_133471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (14))){
var inst_133430 = (state_133436[(2)]);
var state_133436__$1 = state_133436;
var statearr_133450_133472 = state_133436__$1;
(statearr_133450_133472[(2)] = inst_133430);

(statearr_133450_133472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (10))){
var inst_133422 = (state_133436[(2)]);
var state_133436__$1 = state_133436;
var statearr_133451_133473 = state_133436__$1;
(statearr_133451_133473[(2)] = inst_133422);

(statearr_133451_133473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133437 === (8))){
var inst_133419 = cljs.core.async.close_BANG_.call(null,to);
var state_133436__$1 = state_133436;
var statearr_133452_133474 = state_133436__$1;
(statearr_133452_133474[(2)] = inst_133419);

(statearr_133452_133474[(1)] = (10));


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
});})(c__7043__auto___133460))
;
return ((function (switch__6987__auto__,c__7043__auto___133460){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133456 = [null,null,null,null,null,null,null,null];
(statearr_133456[(0)] = state_machine__6988__auto__);

(statearr_133456[(1)] = (1));

return statearr_133456;
});
var state_machine__6988__auto____1 = (function (state_133436){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133457){if((e133457 instanceof Object)){
var ex__6991__auto__ = e133457;
var statearr_133458_133475 = state_133436;
(statearr_133458_133475[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133476 = state_133436;
state_133436 = G__133476;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133436){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___133460))
})();
var state__7045__auto__ = (function (){var statearr_133459 = f__7044__auto__.call(null);
(statearr_133459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___133460);

return statearr_133459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___133460))
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
return (function (p__133660){
var vec__133661 = p__133660;
var v = cljs.core.nth.call(null,vec__133661,(0),null);
var p = cljs.core.nth.call(null,vec__133661,(1),null);
var job = vec__133661;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___133843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results){
return (function (state_133666){
var state_val_133667 = (state_133666[(1)]);
if((state_val_133667 === (2))){
var inst_133663 = (state_133666[(2)]);
var inst_133664 = cljs.core.async.close_BANG_.call(null,res);
var state_133666__$1 = (function (){var statearr_133668 = state_133666;
(statearr_133668[(7)] = inst_133663);

return statearr_133668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133666__$1,inst_133664);
} else {
if((state_val_133667 === (1))){
var state_133666__$1 = state_133666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133666__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133672 = [null,null,null,null,null,null,null,null];
(statearr_133672[(0)] = state_machine__6988__auto__);

(statearr_133672[(1)] = (1));

return statearr_133672;
});
var state_machine__6988__auto____1 = (function (state_133666){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133673){if((e133673 instanceof Object)){
var ex__6991__auto__ = e133673;
var statearr_133674_133844 = state_133666;
(statearr_133674_133844[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133845 = state_133666;
state_133666 = G__133845;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133666){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_133675 = f__7044__auto__.call(null);
(statearr_133675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___133843);

return statearr_133675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___133843,res,vec__133661,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__133676){
var vec__133677 = p__133676;
var v = cljs.core.nth.call(null,vec__133677,(0),null);
var p = cljs.core.nth.call(null,vec__133677,(1),null);
var job = vec__133677;
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
var n__4509__auto___133846 = n;
var __133847 = (0);
while(true){
if((__133847 < n__4509__auto___133846)){
var G__133678_133848 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__133678_133848) {
case "async":
var c__7043__auto___133850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__133847,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__133847,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function (state_133691){
var state_val_133692 = (state_133691[(1)]);
if((state_val_133692 === (7))){
var inst_133687 = (state_133691[(2)]);
var state_133691__$1 = state_133691;
var statearr_133693_133851 = state_133691__$1;
(statearr_133693_133851[(2)] = inst_133687);

(statearr_133693_133851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133692 === (6))){
var state_133691__$1 = state_133691;
var statearr_133694_133852 = state_133691__$1;
(statearr_133694_133852[(2)] = null);

(statearr_133694_133852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133692 === (5))){
var state_133691__$1 = state_133691;
var statearr_133695_133853 = state_133691__$1;
(statearr_133695_133853[(2)] = null);

(statearr_133695_133853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133692 === (4))){
var inst_133681 = (state_133691[(2)]);
var inst_133682 = async.call(null,inst_133681);
var state_133691__$1 = state_133691;
if(cljs.core.truth_(inst_133682)){
var statearr_133696_133854 = state_133691__$1;
(statearr_133696_133854[(1)] = (5));

} else {
var statearr_133697_133855 = state_133691__$1;
(statearr_133697_133855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133692 === (3))){
var inst_133689 = (state_133691[(2)]);
var state_133691__$1 = state_133691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133691__$1,inst_133689);
} else {
if((state_val_133692 === (2))){
var state_133691__$1 = state_133691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133691__$1,(4),jobs);
} else {
if((state_val_133692 === (1))){
var state_133691__$1 = state_133691;
var statearr_133698_133856 = state_133691__$1;
(statearr_133698_133856[(2)] = null);

(statearr_133698_133856[(1)] = (2));


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
});})(__133847,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
;
return ((function (__133847,switch__6987__auto__,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133702 = [null,null,null,null,null,null,null];
(statearr_133702[(0)] = state_machine__6988__auto__);

(statearr_133702[(1)] = (1));

return statearr_133702;
});
var state_machine__6988__auto____1 = (function (state_133691){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133703){if((e133703 instanceof Object)){
var ex__6991__auto__ = e133703;
var statearr_133704_133857 = state_133691;
(statearr_133704_133857[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133858 = state_133691;
state_133691 = G__133858;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133691){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__133847,switch__6987__auto__,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_133705 = f__7044__auto__.call(null);
(statearr_133705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___133850);

return statearr_133705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__133847,c__7043__auto___133850,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___133859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__133847,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__133847,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function (state_133718){
var state_val_133719 = (state_133718[(1)]);
if((state_val_133719 === (7))){
var inst_133714 = (state_133718[(2)]);
var state_133718__$1 = state_133718;
var statearr_133720_133860 = state_133718__$1;
(statearr_133720_133860[(2)] = inst_133714);

(statearr_133720_133860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133719 === (6))){
var state_133718__$1 = state_133718;
var statearr_133721_133861 = state_133718__$1;
(statearr_133721_133861[(2)] = null);

(statearr_133721_133861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133719 === (5))){
var state_133718__$1 = state_133718;
var statearr_133722_133862 = state_133718__$1;
(statearr_133722_133862[(2)] = null);

(statearr_133722_133862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133719 === (4))){
var inst_133708 = (state_133718[(2)]);
var inst_133709 = process.call(null,inst_133708);
var state_133718__$1 = state_133718;
if(cljs.core.truth_(inst_133709)){
var statearr_133723_133863 = state_133718__$1;
(statearr_133723_133863[(1)] = (5));

} else {
var statearr_133724_133864 = state_133718__$1;
(statearr_133724_133864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133719 === (3))){
var inst_133716 = (state_133718[(2)]);
var state_133718__$1 = state_133718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133718__$1,inst_133716);
} else {
if((state_val_133719 === (2))){
var state_133718__$1 = state_133718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133718__$1,(4),jobs);
} else {
if((state_val_133719 === (1))){
var state_133718__$1 = state_133718;
var statearr_133725_133865 = state_133718__$1;
(statearr_133725_133865[(2)] = null);

(statearr_133725_133865[(1)] = (2));


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
});})(__133847,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
;
return ((function (__133847,switch__6987__auto__,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133729 = [null,null,null,null,null,null,null];
(statearr_133729[(0)] = state_machine__6988__auto__);

(statearr_133729[(1)] = (1));

return statearr_133729;
});
var state_machine__6988__auto____1 = (function (state_133718){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133730){if((e133730 instanceof Object)){
var ex__6991__auto__ = e133730;
var statearr_133731_133866 = state_133718;
(statearr_133731_133866[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133867 = state_133718;
state_133718 = G__133867;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133718){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__133847,switch__6987__auto__,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_133732 = f__7044__auto__.call(null);
(statearr_133732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___133859);

return statearr_133732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__133847,c__7043__auto___133859,G__133678_133848,n__4509__auto___133846,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__133868 = (__133847 + (1));
__133847 = G__133868;
continue;
} else {
}
break;
}

var c__7043__auto___133869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___133869,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___133869,jobs,results,process,async){
return (function (state_133754){
var state_val_133755 = (state_133754[(1)]);
if((state_val_133755 === (9))){
var inst_133747 = (state_133754[(2)]);
var state_133754__$1 = (function (){var statearr_133756 = state_133754;
(statearr_133756[(7)] = inst_133747);

return statearr_133756;
})();
var statearr_133757_133870 = state_133754__$1;
(statearr_133757_133870[(2)] = null);

(statearr_133757_133870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133755 === (8))){
var inst_133740 = (state_133754[(8)]);
var inst_133745 = (state_133754[(2)]);
var state_133754__$1 = (function (){var statearr_133758 = state_133754;
(statearr_133758[(9)] = inst_133745);

return statearr_133758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133754__$1,(9),results,inst_133740);
} else {
if((state_val_133755 === (7))){
var inst_133750 = (state_133754[(2)]);
var state_133754__$1 = state_133754;
var statearr_133759_133871 = state_133754__$1;
(statearr_133759_133871[(2)] = inst_133750);

(statearr_133759_133871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133755 === (6))){
var inst_133735 = (state_133754[(10)]);
var inst_133740 = (state_133754[(8)]);
var inst_133740__$1 = cljs.core.async.chan.call(null,(1));
var inst_133741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_133742 = [inst_133735,inst_133740__$1];
var inst_133743 = (new cljs.core.PersistentVector(null,2,(5),inst_133741,inst_133742,null));
var state_133754__$1 = (function (){var statearr_133760 = state_133754;
(statearr_133760[(8)] = inst_133740__$1);

return statearr_133760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133754__$1,(8),jobs,inst_133743);
} else {
if((state_val_133755 === (5))){
var inst_133738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_133754__$1 = state_133754;
var statearr_133761_133872 = state_133754__$1;
(statearr_133761_133872[(2)] = inst_133738);

(statearr_133761_133872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133755 === (4))){
var inst_133735 = (state_133754[(10)]);
var inst_133735__$1 = (state_133754[(2)]);
var inst_133736 = (inst_133735__$1 == null);
var state_133754__$1 = (function (){var statearr_133762 = state_133754;
(statearr_133762[(10)] = inst_133735__$1);

return statearr_133762;
})();
if(cljs.core.truth_(inst_133736)){
var statearr_133763_133873 = state_133754__$1;
(statearr_133763_133873[(1)] = (5));

} else {
var statearr_133764_133874 = state_133754__$1;
(statearr_133764_133874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133755 === (3))){
var inst_133752 = (state_133754[(2)]);
var state_133754__$1 = state_133754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133754__$1,inst_133752);
} else {
if((state_val_133755 === (2))){
var state_133754__$1 = state_133754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133754__$1,(4),from);
} else {
if((state_val_133755 === (1))){
var state_133754__$1 = state_133754;
var statearr_133765_133875 = state_133754__$1;
(statearr_133765_133875[(2)] = null);

(statearr_133765_133875[(1)] = (2));


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
});})(c__7043__auto___133869,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___133869,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_133769[(0)] = state_machine__6988__auto__);

(statearr_133769[(1)] = (1));

return statearr_133769;
});
var state_machine__6988__auto____1 = (function (state_133754){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133770){if((e133770 instanceof Object)){
var ex__6991__auto__ = e133770;
var statearr_133771_133876 = state_133754;
(statearr_133771_133876[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133877 = state_133754;
state_133754 = G__133877;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133754){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___133869,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_133772 = f__7044__auto__.call(null);
(statearr_133772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___133869);

return statearr_133772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___133869,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_133810){
var state_val_133811 = (state_133810[(1)]);
if((state_val_133811 === (7))){
var inst_133806 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
var statearr_133812_133878 = state_133810__$1;
(statearr_133812_133878[(2)] = inst_133806);

(statearr_133812_133878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (20))){
var state_133810__$1 = state_133810;
var statearr_133813_133879 = state_133810__$1;
(statearr_133813_133879[(2)] = null);

(statearr_133813_133879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (1))){
var state_133810__$1 = state_133810;
var statearr_133814_133880 = state_133810__$1;
(statearr_133814_133880[(2)] = null);

(statearr_133814_133880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (4))){
var inst_133775 = (state_133810[(7)]);
var inst_133775__$1 = (state_133810[(2)]);
var inst_133776 = (inst_133775__$1 == null);
var state_133810__$1 = (function (){var statearr_133815 = state_133810;
(statearr_133815[(7)] = inst_133775__$1);

return statearr_133815;
})();
if(cljs.core.truth_(inst_133776)){
var statearr_133816_133881 = state_133810__$1;
(statearr_133816_133881[(1)] = (5));

} else {
var statearr_133817_133882 = state_133810__$1;
(statearr_133817_133882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (15))){
var inst_133788 = (state_133810[(8)]);
var state_133810__$1 = state_133810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133810__$1,(18),to,inst_133788);
} else {
if((state_val_133811 === (21))){
var inst_133801 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
var statearr_133818_133883 = state_133810__$1;
(statearr_133818_133883[(2)] = inst_133801);

(statearr_133818_133883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (13))){
var inst_133803 = (state_133810[(2)]);
var state_133810__$1 = (function (){var statearr_133819 = state_133810;
(statearr_133819[(9)] = inst_133803);

return statearr_133819;
})();
var statearr_133820_133884 = state_133810__$1;
(statearr_133820_133884[(2)] = null);

(statearr_133820_133884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (6))){
var inst_133775 = (state_133810[(7)]);
var state_133810__$1 = state_133810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133810__$1,(11),inst_133775);
} else {
if((state_val_133811 === (17))){
var inst_133796 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
if(cljs.core.truth_(inst_133796)){
var statearr_133821_133885 = state_133810__$1;
(statearr_133821_133885[(1)] = (19));

} else {
var statearr_133822_133886 = state_133810__$1;
(statearr_133822_133886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (3))){
var inst_133808 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133810__$1,inst_133808);
} else {
if((state_val_133811 === (12))){
var inst_133785 = (state_133810[(10)]);
var state_133810__$1 = state_133810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133810__$1,(14),inst_133785);
} else {
if((state_val_133811 === (2))){
var state_133810__$1 = state_133810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133810__$1,(4),results);
} else {
if((state_val_133811 === (19))){
var state_133810__$1 = state_133810;
var statearr_133823_133887 = state_133810__$1;
(statearr_133823_133887[(2)] = null);

(statearr_133823_133887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (11))){
var inst_133785 = (state_133810[(2)]);
var state_133810__$1 = (function (){var statearr_133824 = state_133810;
(statearr_133824[(10)] = inst_133785);

return statearr_133824;
})();
var statearr_133825_133888 = state_133810__$1;
(statearr_133825_133888[(2)] = null);

(statearr_133825_133888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (9))){
var state_133810__$1 = state_133810;
var statearr_133826_133889 = state_133810__$1;
(statearr_133826_133889[(2)] = null);

(statearr_133826_133889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (5))){
var state_133810__$1 = state_133810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_133827_133890 = state_133810__$1;
(statearr_133827_133890[(1)] = (8));

} else {
var statearr_133828_133891 = state_133810__$1;
(statearr_133828_133891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (14))){
var inst_133790 = (state_133810[(11)]);
var inst_133788 = (state_133810[(8)]);
var inst_133788__$1 = (state_133810[(2)]);
var inst_133789 = (inst_133788__$1 == null);
var inst_133790__$1 = cljs.core.not.call(null,inst_133789);
var state_133810__$1 = (function (){var statearr_133829 = state_133810;
(statearr_133829[(11)] = inst_133790__$1);

(statearr_133829[(8)] = inst_133788__$1);

return statearr_133829;
})();
if(inst_133790__$1){
var statearr_133830_133892 = state_133810__$1;
(statearr_133830_133892[(1)] = (15));

} else {
var statearr_133831_133893 = state_133810__$1;
(statearr_133831_133893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (16))){
var inst_133790 = (state_133810[(11)]);
var state_133810__$1 = state_133810;
var statearr_133832_133894 = state_133810__$1;
(statearr_133832_133894[(2)] = inst_133790);

(statearr_133832_133894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (10))){
var inst_133782 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
var statearr_133833_133895 = state_133810__$1;
(statearr_133833_133895[(2)] = inst_133782);

(statearr_133833_133895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (18))){
var inst_133793 = (state_133810[(2)]);
var state_133810__$1 = state_133810;
var statearr_133834_133896 = state_133810__$1;
(statearr_133834_133896[(2)] = inst_133793);

(statearr_133834_133896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133811 === (8))){
var inst_133779 = cljs.core.async.close_BANG_.call(null,to);
var state_133810__$1 = state_133810;
var statearr_133835_133897 = state_133810__$1;
(statearr_133835_133897[(2)] = inst_133779);

(statearr_133835_133897[(1)] = (10));


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
});})(c__7043__auto__,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto__,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_133839[(0)] = state_machine__6988__auto__);

(statearr_133839[(1)] = (1));

return statearr_133839;
});
var state_machine__6988__auto____1 = (function (state_133810){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133840){if((e133840 instanceof Object)){
var ex__6991__auto__ = e133840;
var statearr_133841_133898 = state_133810;
(statearr_133841_133898[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133899 = state_133810;
state_133810 = G__133899;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133810){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_133842 = f__7044__auto__.call(null);
(statearr_133842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_133842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto__,jobs,results,process,async))
);

return c__7043__auto__;
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
var c__7043__auto___134000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___134000,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___134000,tc,fc){
return (function (state_133975){
var state_val_133976 = (state_133975[(1)]);
if((state_val_133976 === (7))){
var inst_133971 = (state_133975[(2)]);
var state_133975__$1 = state_133975;
var statearr_133977_134001 = state_133975__$1;
(statearr_133977_134001[(2)] = inst_133971);

(statearr_133977_134001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (1))){
var state_133975__$1 = state_133975;
var statearr_133978_134002 = state_133975__$1;
(statearr_133978_134002[(2)] = null);

(statearr_133978_134002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (4))){
var inst_133952 = (state_133975[(7)]);
var inst_133952__$1 = (state_133975[(2)]);
var inst_133953 = (inst_133952__$1 == null);
var state_133975__$1 = (function (){var statearr_133979 = state_133975;
(statearr_133979[(7)] = inst_133952__$1);

return statearr_133979;
})();
if(cljs.core.truth_(inst_133953)){
var statearr_133980_134003 = state_133975__$1;
(statearr_133980_134003[(1)] = (5));

} else {
var statearr_133981_134004 = state_133975__$1;
(statearr_133981_134004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (13))){
var state_133975__$1 = state_133975;
var statearr_133982_134005 = state_133975__$1;
(statearr_133982_134005[(2)] = null);

(statearr_133982_134005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (6))){
var inst_133952 = (state_133975[(7)]);
var inst_133958 = p.call(null,inst_133952);
var state_133975__$1 = state_133975;
if(cljs.core.truth_(inst_133958)){
var statearr_133983_134006 = state_133975__$1;
(statearr_133983_134006[(1)] = (9));

} else {
var statearr_133984_134007 = state_133975__$1;
(statearr_133984_134007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (3))){
var inst_133973 = (state_133975[(2)]);
var state_133975__$1 = state_133975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133975__$1,inst_133973);
} else {
if((state_val_133976 === (12))){
var state_133975__$1 = state_133975;
var statearr_133985_134008 = state_133975__$1;
(statearr_133985_134008[(2)] = null);

(statearr_133985_134008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (2))){
var state_133975__$1 = state_133975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133975__$1,(4),ch);
} else {
if((state_val_133976 === (11))){
var inst_133952 = (state_133975[(7)]);
var inst_133962 = (state_133975[(2)]);
var state_133975__$1 = state_133975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133975__$1,(8),inst_133962,inst_133952);
} else {
if((state_val_133976 === (9))){
var state_133975__$1 = state_133975;
var statearr_133986_134009 = state_133975__$1;
(statearr_133986_134009[(2)] = tc);

(statearr_133986_134009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (5))){
var inst_133955 = cljs.core.async.close_BANG_.call(null,tc);
var inst_133956 = cljs.core.async.close_BANG_.call(null,fc);
var state_133975__$1 = (function (){var statearr_133987 = state_133975;
(statearr_133987[(8)] = inst_133955);

return statearr_133987;
})();
var statearr_133988_134010 = state_133975__$1;
(statearr_133988_134010[(2)] = inst_133956);

(statearr_133988_134010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (14))){
var inst_133969 = (state_133975[(2)]);
var state_133975__$1 = state_133975;
var statearr_133989_134011 = state_133975__$1;
(statearr_133989_134011[(2)] = inst_133969);

(statearr_133989_134011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (10))){
var state_133975__$1 = state_133975;
var statearr_133990_134012 = state_133975__$1;
(statearr_133990_134012[(2)] = fc);

(statearr_133990_134012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133976 === (8))){
var inst_133964 = (state_133975[(2)]);
var state_133975__$1 = state_133975;
if(cljs.core.truth_(inst_133964)){
var statearr_133991_134013 = state_133975__$1;
(statearr_133991_134013[(1)] = (12));

} else {
var statearr_133992_134014 = state_133975__$1;
(statearr_133992_134014[(1)] = (13));

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
});})(c__7043__auto___134000,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___134000,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_133996 = [null,null,null,null,null,null,null,null,null];
(statearr_133996[(0)] = state_machine__6988__auto__);

(statearr_133996[(1)] = (1));

return statearr_133996;
});
var state_machine__6988__auto____1 = (function (state_133975){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_133975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e133997){if((e133997 instanceof Object)){
var ex__6991__auto__ = e133997;
var statearr_133998_134015 = state_133975;
(statearr_133998_134015[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134016 = state_133975;
state_133975 = G__134016;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_133975){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_133975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___134000,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_133999 = f__7044__auto__.call(null);
(statearr_133999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___134000);

return statearr_133999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___134000,tc,fc))
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
var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__){
return (function (state_134063){
var state_val_134064 = (state_134063[(1)]);
if((state_val_134064 === (7))){
var inst_134059 = (state_134063[(2)]);
var state_134063__$1 = state_134063;
var statearr_134065_134081 = state_134063__$1;
(statearr_134065_134081[(2)] = inst_134059);

(statearr_134065_134081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134064 === (6))){
var inst_134052 = (state_134063[(7)]);
var inst_134049 = (state_134063[(8)]);
var inst_134056 = f.call(null,inst_134049,inst_134052);
var inst_134049__$1 = inst_134056;
var state_134063__$1 = (function (){var statearr_134066 = state_134063;
(statearr_134066[(8)] = inst_134049__$1);

return statearr_134066;
})();
var statearr_134067_134082 = state_134063__$1;
(statearr_134067_134082[(2)] = null);

(statearr_134067_134082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134064 === (5))){
var inst_134049 = (state_134063[(8)]);
var state_134063__$1 = state_134063;
var statearr_134068_134083 = state_134063__$1;
(statearr_134068_134083[(2)] = inst_134049);

(statearr_134068_134083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134064 === (4))){
var inst_134052 = (state_134063[(7)]);
var inst_134052__$1 = (state_134063[(2)]);
var inst_134053 = (inst_134052__$1 == null);
var state_134063__$1 = (function (){var statearr_134069 = state_134063;
(statearr_134069[(7)] = inst_134052__$1);

return statearr_134069;
})();
if(cljs.core.truth_(inst_134053)){
var statearr_134070_134084 = state_134063__$1;
(statearr_134070_134084[(1)] = (5));

} else {
var statearr_134071_134085 = state_134063__$1;
(statearr_134071_134085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134064 === (3))){
var inst_134061 = (state_134063[(2)]);
var state_134063__$1 = state_134063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134063__$1,inst_134061);
} else {
if((state_val_134064 === (2))){
var state_134063__$1 = state_134063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134063__$1,(4),ch);
} else {
if((state_val_134064 === (1))){
var inst_134049 = init;
var state_134063__$1 = (function (){var statearr_134072 = state_134063;
(statearr_134072[(8)] = inst_134049);

return statearr_134072;
})();
var statearr_134073_134086 = state_134063__$1;
(statearr_134073_134086[(2)] = null);

(statearr_134073_134086[(1)] = (2));


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
});})(c__7043__auto__))
;
return ((function (switch__6987__auto__,c__7043__auto__){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_134077 = [null,null,null,null,null,null,null,null,null];
(statearr_134077[(0)] = state_machine__6988__auto__);

(statearr_134077[(1)] = (1));

return statearr_134077;
});
var state_machine__6988__auto____1 = (function (state_134063){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_134063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e134078){if((e134078 instanceof Object)){
var ex__6991__auto__ = e134078;
var statearr_134079_134087 = state_134063;
(statearr_134079_134087[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134088 = state_134063;
state_134063 = G__134088;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_134063){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_134063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_134080 = f__7044__auto__.call(null);
(statearr_134080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_134080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto__))
);

return c__7043__auto__;
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
var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__){
return (function (state_134162){
var state_val_134163 = (state_134162[(1)]);
if((state_val_134163 === (7))){
var inst_134144 = (state_134162[(2)]);
var state_134162__$1 = state_134162;
var statearr_134164_134187 = state_134162__$1;
(statearr_134164_134187[(2)] = inst_134144);

(statearr_134164_134187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (1))){
var inst_134138 = cljs.core.seq.call(null,coll);
var inst_134139 = inst_134138;
var state_134162__$1 = (function (){var statearr_134165 = state_134162;
(statearr_134165[(7)] = inst_134139);

return statearr_134165;
})();
var statearr_134166_134188 = state_134162__$1;
(statearr_134166_134188[(2)] = null);

(statearr_134166_134188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (4))){
var inst_134139 = (state_134162[(7)]);
var inst_134142 = cljs.core.first.call(null,inst_134139);
var state_134162__$1 = state_134162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134162__$1,(7),ch,inst_134142);
} else {
if((state_val_134163 === (13))){
var inst_134156 = (state_134162[(2)]);
var state_134162__$1 = state_134162;
var statearr_134167_134189 = state_134162__$1;
(statearr_134167_134189[(2)] = inst_134156);

(statearr_134167_134189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (6))){
var inst_134147 = (state_134162[(2)]);
var state_134162__$1 = state_134162;
if(cljs.core.truth_(inst_134147)){
var statearr_134168_134190 = state_134162__$1;
(statearr_134168_134190[(1)] = (8));

} else {
var statearr_134169_134191 = state_134162__$1;
(statearr_134169_134191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (3))){
var inst_134160 = (state_134162[(2)]);
var state_134162__$1 = state_134162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134162__$1,inst_134160);
} else {
if((state_val_134163 === (12))){
var state_134162__$1 = state_134162;
var statearr_134170_134192 = state_134162__$1;
(statearr_134170_134192[(2)] = null);

(statearr_134170_134192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (2))){
var inst_134139 = (state_134162[(7)]);
var state_134162__$1 = state_134162;
if(cljs.core.truth_(inst_134139)){
var statearr_134171_134193 = state_134162__$1;
(statearr_134171_134193[(1)] = (4));

} else {
var statearr_134172_134194 = state_134162__$1;
(statearr_134172_134194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (11))){
var inst_134153 = cljs.core.async.close_BANG_.call(null,ch);
var state_134162__$1 = state_134162;
var statearr_134173_134195 = state_134162__$1;
(statearr_134173_134195[(2)] = inst_134153);

(statearr_134173_134195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (9))){
var state_134162__$1 = state_134162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_134174_134196 = state_134162__$1;
(statearr_134174_134196[(1)] = (11));

} else {
var statearr_134175_134197 = state_134162__$1;
(statearr_134175_134197[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (5))){
var inst_134139 = (state_134162[(7)]);
var state_134162__$1 = state_134162;
var statearr_134176_134198 = state_134162__$1;
(statearr_134176_134198[(2)] = inst_134139);

(statearr_134176_134198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (10))){
var inst_134158 = (state_134162[(2)]);
var state_134162__$1 = state_134162;
var statearr_134177_134199 = state_134162__$1;
(statearr_134177_134199[(2)] = inst_134158);

(statearr_134177_134199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134163 === (8))){
var inst_134139 = (state_134162[(7)]);
var inst_134149 = cljs.core.next.call(null,inst_134139);
var inst_134139__$1 = inst_134149;
var state_134162__$1 = (function (){var statearr_134178 = state_134162;
(statearr_134178[(7)] = inst_134139__$1);

return statearr_134178;
})();
var statearr_134179_134200 = state_134162__$1;
(statearr_134179_134200[(2)] = null);

(statearr_134179_134200[(1)] = (2));


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
});})(c__7043__auto__))
;
return ((function (switch__6987__auto__,c__7043__auto__){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_134183 = [null,null,null,null,null,null,null,null];
(statearr_134183[(0)] = state_machine__6988__auto__);

(statearr_134183[(1)] = (1));

return statearr_134183;
});
var state_machine__6988__auto____1 = (function (state_134162){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_134162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e134184){if((e134184 instanceof Object)){
var ex__6991__auto__ = e134184;
var statearr_134185_134201 = state_134162;
(statearr_134185_134201[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134202 = state_134162;
state_134162 = G__134202;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_134162){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_134162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_134186 = f__7044__auto__.call(null);
(statearr_134186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_134186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto__))
);

return c__7043__auto__;
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

cljs.core.async.Mux = (function (){var obj134204 = {};
return obj134204;
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


cljs.core.async.Mult = (function (){var obj134206 = {};
return obj134206;
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
if(typeof cljs.core.async.t134428 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t134428 = (function (cs,ch,mult,meta134429){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta134429 = meta134429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t134428.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t134428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t134428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t134428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t134428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t134428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t134428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_134430){
var self__ = this;
var _134430__$1 = this;
return self__.meta134429;
});})(cs))
;

cljs.core.async.t134428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_134430,meta134429__$1){
var self__ = this;
var _134430__$1 = this;
return (new cljs.core.async.t134428(self__.cs,self__.ch,self__.mult,meta134429__$1));
});})(cs))
;

cljs.core.async.t134428.cljs$lang$type = true;

cljs.core.async.t134428.cljs$lang$ctorStr = "cljs.core.async/t134428";

cljs.core.async.t134428.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t134428");
});})(cs))
;

cljs.core.async.__GT_t134428 = ((function (cs){
return (function __GT_t134428(cs__$1,ch__$1,mult__$1,meta134429){
return (new cljs.core.async.t134428(cs__$1,ch__$1,mult__$1,meta134429));
});})(cs))
;

}

return (new cljs.core.async.t134428(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___134649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___134649,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___134649,cs,m,dchan,dctr,done){
return (function (state_134561){
var state_val_134562 = (state_134561[(1)]);
if((state_val_134562 === (7))){
var inst_134557 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134563_134650 = state_134561__$1;
(statearr_134563_134650[(2)] = inst_134557);

(statearr_134563_134650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (20))){
var inst_134462 = (state_134561[(7)]);
var inst_134472 = cljs.core.first.call(null,inst_134462);
var inst_134473 = cljs.core.nth.call(null,inst_134472,(0),null);
var inst_134474 = cljs.core.nth.call(null,inst_134472,(1),null);
var state_134561__$1 = (function (){var statearr_134564 = state_134561;
(statearr_134564[(8)] = inst_134473);

return statearr_134564;
})();
if(cljs.core.truth_(inst_134474)){
var statearr_134565_134651 = state_134561__$1;
(statearr_134565_134651[(1)] = (22));

} else {
var statearr_134566_134652 = state_134561__$1;
(statearr_134566_134652[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (27))){
var inst_134433 = (state_134561[(9)]);
var inst_134502 = (state_134561[(10)]);
var inst_134504 = (state_134561[(11)]);
var inst_134509 = (state_134561[(12)]);
var inst_134509__$1 = cljs.core._nth.call(null,inst_134502,inst_134504);
var inst_134510 = cljs.core.async.put_BANG_.call(null,inst_134509__$1,inst_134433,done);
var state_134561__$1 = (function (){var statearr_134567 = state_134561;
(statearr_134567[(12)] = inst_134509__$1);

return statearr_134567;
})();
if(cljs.core.truth_(inst_134510)){
var statearr_134568_134653 = state_134561__$1;
(statearr_134568_134653[(1)] = (30));

} else {
var statearr_134569_134654 = state_134561__$1;
(statearr_134569_134654[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (1))){
var state_134561__$1 = state_134561;
var statearr_134570_134655 = state_134561__$1;
(statearr_134570_134655[(2)] = null);

(statearr_134570_134655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (24))){
var inst_134462 = (state_134561[(7)]);
var inst_134479 = (state_134561[(2)]);
var inst_134480 = cljs.core.next.call(null,inst_134462);
var inst_134442 = inst_134480;
var inst_134443 = null;
var inst_134444 = (0);
var inst_134445 = (0);
var state_134561__$1 = (function (){var statearr_134571 = state_134561;
(statearr_134571[(13)] = inst_134442);

(statearr_134571[(14)] = inst_134445);

(statearr_134571[(15)] = inst_134443);

(statearr_134571[(16)] = inst_134479);

(statearr_134571[(17)] = inst_134444);

return statearr_134571;
})();
var statearr_134572_134656 = state_134561__$1;
(statearr_134572_134656[(2)] = null);

(statearr_134572_134656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (39))){
var state_134561__$1 = state_134561;
var statearr_134576_134657 = state_134561__$1;
(statearr_134576_134657[(2)] = null);

(statearr_134576_134657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (4))){
var inst_134433 = (state_134561[(9)]);
var inst_134433__$1 = (state_134561[(2)]);
var inst_134434 = (inst_134433__$1 == null);
var state_134561__$1 = (function (){var statearr_134577 = state_134561;
(statearr_134577[(9)] = inst_134433__$1);

return statearr_134577;
})();
if(cljs.core.truth_(inst_134434)){
var statearr_134578_134658 = state_134561__$1;
(statearr_134578_134658[(1)] = (5));

} else {
var statearr_134579_134659 = state_134561__$1;
(statearr_134579_134659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (15))){
var inst_134442 = (state_134561[(13)]);
var inst_134445 = (state_134561[(14)]);
var inst_134443 = (state_134561[(15)]);
var inst_134444 = (state_134561[(17)]);
var inst_134458 = (state_134561[(2)]);
var inst_134459 = (inst_134445 + (1));
var tmp134573 = inst_134442;
var tmp134574 = inst_134443;
var tmp134575 = inst_134444;
var inst_134442__$1 = tmp134573;
var inst_134443__$1 = tmp134574;
var inst_134444__$1 = tmp134575;
var inst_134445__$1 = inst_134459;
var state_134561__$1 = (function (){var statearr_134580 = state_134561;
(statearr_134580[(13)] = inst_134442__$1);

(statearr_134580[(14)] = inst_134445__$1);

(statearr_134580[(18)] = inst_134458);

(statearr_134580[(15)] = inst_134443__$1);

(statearr_134580[(17)] = inst_134444__$1);

return statearr_134580;
})();
var statearr_134581_134660 = state_134561__$1;
(statearr_134581_134660[(2)] = null);

(statearr_134581_134660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (21))){
var inst_134483 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134585_134661 = state_134561__$1;
(statearr_134585_134661[(2)] = inst_134483);

(statearr_134585_134661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (31))){
var inst_134509 = (state_134561[(12)]);
var inst_134513 = done.call(null,null);
var inst_134514 = cljs.core.async.untap_STAR_.call(null,m,inst_134509);
var state_134561__$1 = (function (){var statearr_134586 = state_134561;
(statearr_134586[(19)] = inst_134513);

return statearr_134586;
})();
var statearr_134587_134662 = state_134561__$1;
(statearr_134587_134662[(2)] = inst_134514);

(statearr_134587_134662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (32))){
var inst_134503 = (state_134561[(20)]);
var inst_134502 = (state_134561[(10)]);
var inst_134501 = (state_134561[(21)]);
var inst_134504 = (state_134561[(11)]);
var inst_134516 = (state_134561[(2)]);
var inst_134517 = (inst_134504 + (1));
var tmp134582 = inst_134503;
var tmp134583 = inst_134502;
var tmp134584 = inst_134501;
var inst_134501__$1 = tmp134584;
var inst_134502__$1 = tmp134583;
var inst_134503__$1 = tmp134582;
var inst_134504__$1 = inst_134517;
var state_134561__$1 = (function (){var statearr_134588 = state_134561;
(statearr_134588[(20)] = inst_134503__$1);

(statearr_134588[(10)] = inst_134502__$1);

(statearr_134588[(21)] = inst_134501__$1);

(statearr_134588[(11)] = inst_134504__$1);

(statearr_134588[(22)] = inst_134516);

return statearr_134588;
})();
var statearr_134589_134663 = state_134561__$1;
(statearr_134589_134663[(2)] = null);

(statearr_134589_134663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (40))){
var inst_134529 = (state_134561[(23)]);
var inst_134533 = done.call(null,null);
var inst_134534 = cljs.core.async.untap_STAR_.call(null,m,inst_134529);
var state_134561__$1 = (function (){var statearr_134590 = state_134561;
(statearr_134590[(24)] = inst_134533);

return statearr_134590;
})();
var statearr_134591_134664 = state_134561__$1;
(statearr_134591_134664[(2)] = inst_134534);

(statearr_134591_134664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (33))){
var inst_134520 = (state_134561[(25)]);
var inst_134522 = cljs.core.chunked_seq_QMARK_.call(null,inst_134520);
var state_134561__$1 = state_134561;
if(inst_134522){
var statearr_134592_134665 = state_134561__$1;
(statearr_134592_134665[(1)] = (36));

} else {
var statearr_134593_134666 = state_134561__$1;
(statearr_134593_134666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (13))){
var inst_134452 = (state_134561[(26)]);
var inst_134455 = cljs.core.async.close_BANG_.call(null,inst_134452);
var state_134561__$1 = state_134561;
var statearr_134594_134667 = state_134561__$1;
(statearr_134594_134667[(2)] = inst_134455);

(statearr_134594_134667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (22))){
var inst_134473 = (state_134561[(8)]);
var inst_134476 = cljs.core.async.close_BANG_.call(null,inst_134473);
var state_134561__$1 = state_134561;
var statearr_134595_134668 = state_134561__$1;
(statearr_134595_134668[(2)] = inst_134476);

(statearr_134595_134668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (36))){
var inst_134520 = (state_134561[(25)]);
var inst_134524 = cljs.core.chunk_first.call(null,inst_134520);
var inst_134525 = cljs.core.chunk_rest.call(null,inst_134520);
var inst_134526 = cljs.core.count.call(null,inst_134524);
var inst_134501 = inst_134525;
var inst_134502 = inst_134524;
var inst_134503 = inst_134526;
var inst_134504 = (0);
var state_134561__$1 = (function (){var statearr_134596 = state_134561;
(statearr_134596[(20)] = inst_134503);

(statearr_134596[(10)] = inst_134502);

(statearr_134596[(21)] = inst_134501);

(statearr_134596[(11)] = inst_134504);

return statearr_134596;
})();
var statearr_134597_134669 = state_134561__$1;
(statearr_134597_134669[(2)] = null);

(statearr_134597_134669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (41))){
var inst_134520 = (state_134561[(25)]);
var inst_134536 = (state_134561[(2)]);
var inst_134537 = cljs.core.next.call(null,inst_134520);
var inst_134501 = inst_134537;
var inst_134502 = null;
var inst_134503 = (0);
var inst_134504 = (0);
var state_134561__$1 = (function (){var statearr_134598 = state_134561;
(statearr_134598[(20)] = inst_134503);

(statearr_134598[(10)] = inst_134502);

(statearr_134598[(21)] = inst_134501);

(statearr_134598[(11)] = inst_134504);

(statearr_134598[(27)] = inst_134536);

return statearr_134598;
})();
var statearr_134599_134670 = state_134561__$1;
(statearr_134599_134670[(2)] = null);

(statearr_134599_134670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (43))){
var state_134561__$1 = state_134561;
var statearr_134600_134671 = state_134561__$1;
(statearr_134600_134671[(2)] = null);

(statearr_134600_134671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (29))){
var inst_134545 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134601_134672 = state_134561__$1;
(statearr_134601_134672[(2)] = inst_134545);

(statearr_134601_134672[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (44))){
var inst_134554 = (state_134561[(2)]);
var state_134561__$1 = (function (){var statearr_134602 = state_134561;
(statearr_134602[(28)] = inst_134554);

return statearr_134602;
})();
var statearr_134603_134673 = state_134561__$1;
(statearr_134603_134673[(2)] = null);

(statearr_134603_134673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (6))){
var inst_134493 = (state_134561[(29)]);
var inst_134492 = cljs.core.deref.call(null,cs);
var inst_134493__$1 = cljs.core.keys.call(null,inst_134492);
var inst_134494 = cljs.core.count.call(null,inst_134493__$1);
var inst_134495 = cljs.core.reset_BANG_.call(null,dctr,inst_134494);
var inst_134500 = cljs.core.seq.call(null,inst_134493__$1);
var inst_134501 = inst_134500;
var inst_134502 = null;
var inst_134503 = (0);
var inst_134504 = (0);
var state_134561__$1 = (function (){var statearr_134604 = state_134561;
(statearr_134604[(20)] = inst_134503);

(statearr_134604[(30)] = inst_134495);

(statearr_134604[(29)] = inst_134493__$1);

(statearr_134604[(10)] = inst_134502);

(statearr_134604[(21)] = inst_134501);

(statearr_134604[(11)] = inst_134504);

return statearr_134604;
})();
var statearr_134605_134674 = state_134561__$1;
(statearr_134605_134674[(2)] = null);

(statearr_134605_134674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (28))){
var inst_134501 = (state_134561[(21)]);
var inst_134520 = (state_134561[(25)]);
var inst_134520__$1 = cljs.core.seq.call(null,inst_134501);
var state_134561__$1 = (function (){var statearr_134606 = state_134561;
(statearr_134606[(25)] = inst_134520__$1);

return statearr_134606;
})();
if(inst_134520__$1){
var statearr_134607_134675 = state_134561__$1;
(statearr_134607_134675[(1)] = (33));

} else {
var statearr_134608_134676 = state_134561__$1;
(statearr_134608_134676[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (25))){
var inst_134503 = (state_134561[(20)]);
var inst_134504 = (state_134561[(11)]);
var inst_134506 = (inst_134504 < inst_134503);
var inst_134507 = inst_134506;
var state_134561__$1 = state_134561;
if(cljs.core.truth_(inst_134507)){
var statearr_134609_134677 = state_134561__$1;
(statearr_134609_134677[(1)] = (27));

} else {
var statearr_134610_134678 = state_134561__$1;
(statearr_134610_134678[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (34))){
var state_134561__$1 = state_134561;
var statearr_134611_134679 = state_134561__$1;
(statearr_134611_134679[(2)] = null);

(statearr_134611_134679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (17))){
var state_134561__$1 = state_134561;
var statearr_134612_134680 = state_134561__$1;
(statearr_134612_134680[(2)] = null);

(statearr_134612_134680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (3))){
var inst_134559 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134561__$1,inst_134559);
} else {
if((state_val_134562 === (12))){
var inst_134488 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134613_134681 = state_134561__$1;
(statearr_134613_134681[(2)] = inst_134488);

(statearr_134613_134681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (2))){
var state_134561__$1 = state_134561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134561__$1,(4),ch);
} else {
if((state_val_134562 === (23))){
var state_134561__$1 = state_134561;
var statearr_134614_134682 = state_134561__$1;
(statearr_134614_134682[(2)] = null);

(statearr_134614_134682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (35))){
var inst_134543 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134615_134683 = state_134561__$1;
(statearr_134615_134683[(2)] = inst_134543);

(statearr_134615_134683[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (19))){
var inst_134462 = (state_134561[(7)]);
var inst_134466 = cljs.core.chunk_first.call(null,inst_134462);
var inst_134467 = cljs.core.chunk_rest.call(null,inst_134462);
var inst_134468 = cljs.core.count.call(null,inst_134466);
var inst_134442 = inst_134467;
var inst_134443 = inst_134466;
var inst_134444 = inst_134468;
var inst_134445 = (0);
var state_134561__$1 = (function (){var statearr_134616 = state_134561;
(statearr_134616[(13)] = inst_134442);

(statearr_134616[(14)] = inst_134445);

(statearr_134616[(15)] = inst_134443);

(statearr_134616[(17)] = inst_134444);

return statearr_134616;
})();
var statearr_134617_134684 = state_134561__$1;
(statearr_134617_134684[(2)] = null);

(statearr_134617_134684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (11))){
var inst_134442 = (state_134561[(13)]);
var inst_134462 = (state_134561[(7)]);
var inst_134462__$1 = cljs.core.seq.call(null,inst_134442);
var state_134561__$1 = (function (){var statearr_134618 = state_134561;
(statearr_134618[(7)] = inst_134462__$1);

return statearr_134618;
})();
if(inst_134462__$1){
var statearr_134619_134685 = state_134561__$1;
(statearr_134619_134685[(1)] = (16));

} else {
var statearr_134620_134686 = state_134561__$1;
(statearr_134620_134686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (9))){
var inst_134490 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134621_134687 = state_134561__$1;
(statearr_134621_134687[(2)] = inst_134490);

(statearr_134621_134687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (5))){
var inst_134440 = cljs.core.deref.call(null,cs);
var inst_134441 = cljs.core.seq.call(null,inst_134440);
var inst_134442 = inst_134441;
var inst_134443 = null;
var inst_134444 = (0);
var inst_134445 = (0);
var state_134561__$1 = (function (){var statearr_134622 = state_134561;
(statearr_134622[(13)] = inst_134442);

(statearr_134622[(14)] = inst_134445);

(statearr_134622[(15)] = inst_134443);

(statearr_134622[(17)] = inst_134444);

return statearr_134622;
})();
var statearr_134623_134688 = state_134561__$1;
(statearr_134623_134688[(2)] = null);

(statearr_134623_134688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (14))){
var state_134561__$1 = state_134561;
var statearr_134624_134689 = state_134561__$1;
(statearr_134624_134689[(2)] = null);

(statearr_134624_134689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (45))){
var inst_134551 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134625_134690 = state_134561__$1;
(statearr_134625_134690[(2)] = inst_134551);

(statearr_134625_134690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (26))){
var inst_134493 = (state_134561[(29)]);
var inst_134547 = (state_134561[(2)]);
var inst_134548 = cljs.core.seq.call(null,inst_134493);
var state_134561__$1 = (function (){var statearr_134626 = state_134561;
(statearr_134626[(31)] = inst_134547);

return statearr_134626;
})();
if(inst_134548){
var statearr_134627_134691 = state_134561__$1;
(statearr_134627_134691[(1)] = (42));

} else {
var statearr_134628_134692 = state_134561__$1;
(statearr_134628_134692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (16))){
var inst_134462 = (state_134561[(7)]);
var inst_134464 = cljs.core.chunked_seq_QMARK_.call(null,inst_134462);
var state_134561__$1 = state_134561;
if(inst_134464){
var statearr_134629_134693 = state_134561__$1;
(statearr_134629_134693[(1)] = (19));

} else {
var statearr_134630_134694 = state_134561__$1;
(statearr_134630_134694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (38))){
var inst_134540 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134631_134695 = state_134561__$1;
(statearr_134631_134695[(2)] = inst_134540);

(statearr_134631_134695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (30))){
var state_134561__$1 = state_134561;
var statearr_134632_134696 = state_134561__$1;
(statearr_134632_134696[(2)] = null);

(statearr_134632_134696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (10))){
var inst_134445 = (state_134561[(14)]);
var inst_134443 = (state_134561[(15)]);
var inst_134451 = cljs.core._nth.call(null,inst_134443,inst_134445);
var inst_134452 = cljs.core.nth.call(null,inst_134451,(0),null);
var inst_134453 = cljs.core.nth.call(null,inst_134451,(1),null);
var state_134561__$1 = (function (){var statearr_134633 = state_134561;
(statearr_134633[(26)] = inst_134452);

return statearr_134633;
})();
if(cljs.core.truth_(inst_134453)){
var statearr_134634_134697 = state_134561__$1;
(statearr_134634_134697[(1)] = (13));

} else {
var statearr_134635_134698 = state_134561__$1;
(statearr_134635_134698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (18))){
var inst_134486 = (state_134561[(2)]);
var state_134561__$1 = state_134561;
var statearr_134636_134699 = state_134561__$1;
(statearr_134636_134699[(2)] = inst_134486);

(statearr_134636_134699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (42))){
var state_134561__$1 = state_134561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134561__$1,(45),dchan);
} else {
if((state_val_134562 === (37))){
var inst_134529 = (state_134561[(23)]);
var inst_134433 = (state_134561[(9)]);
var inst_134520 = (state_134561[(25)]);
var inst_134529__$1 = cljs.core.first.call(null,inst_134520);
var inst_134530 = cljs.core.async.put_BANG_.call(null,inst_134529__$1,inst_134433,done);
var state_134561__$1 = (function (){var statearr_134637 = state_134561;
(statearr_134637[(23)] = inst_134529__$1);

return statearr_134637;
})();
if(cljs.core.truth_(inst_134530)){
var statearr_134638_134700 = state_134561__$1;
(statearr_134638_134700[(1)] = (39));

} else {
var statearr_134639_134701 = state_134561__$1;
(statearr_134639_134701[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134562 === (8))){
var inst_134445 = (state_134561[(14)]);
var inst_134444 = (state_134561[(17)]);
var inst_134447 = (inst_134445 < inst_134444);
var inst_134448 = inst_134447;
var state_134561__$1 = state_134561;
if(cljs.core.truth_(inst_134448)){
var statearr_134640_134702 = state_134561__$1;
(statearr_134640_134702[(1)] = (10));

} else {
var statearr_134641_134703 = state_134561__$1;
(statearr_134641_134703[(1)] = (11));

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
});})(c__7043__auto___134649,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___134649,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_134645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_134645[(0)] = state_machine__6988__auto__);

(statearr_134645[(1)] = (1));

return statearr_134645;
});
var state_machine__6988__auto____1 = (function (state_134561){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_134561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e134646){if((e134646 instanceof Object)){
var ex__6991__auto__ = e134646;
var statearr_134647_134704 = state_134561;
(statearr_134647_134704[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134705 = state_134561;
state_134561 = G__134705;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_134561){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_134561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___134649,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_134648 = f__7044__auto__.call(null);
(statearr_134648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___134649);

return statearr_134648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___134649,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj134707 = {};
return obj134707;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__134708){
var map__134713 = p__134708;
var map__134713__$1 = ((cljs.core.seq_QMARK_.call(null,map__134713))?cljs.core.apply.call(null,cljs.core.hash_map,map__134713):map__134713);
var opts = map__134713__$1;
var statearr_134714_134717 = state;
(statearr_134714_134717[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__134713,map__134713__$1,opts){
return (function (val){
var statearr_134715_134718 = state;
(statearr_134715_134718[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__134713,map__134713__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_134716_134719 = state;
(statearr_134716_134719[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__134708 = null;
if (arguments.length > 3) {
  p__134708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__134708);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__134720){
var state = cljs.core.first(arglist__134720);
arglist__134720 = cljs.core.next(arglist__134720);
var cont_block = cljs.core.first(arglist__134720);
arglist__134720 = cljs.core.next(arglist__134720);
var ports = cljs.core.first(arglist__134720);
var p__134708 = cljs.core.rest(arglist__134720);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__134708);
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
if(typeof cljs.core.async.t134840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t134840 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta134841){
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
this.meta134841 = meta134841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t134840.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t134840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t134840.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t134840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_134842){
var self__ = this;
var _134842__$1 = this;
return self__.meta134841;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_134842,meta134841__$1){
var self__ = this;
var _134842__$1 = this;
return (new cljs.core.async.t134840(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta134841__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t134840.cljs$lang$type = true;

cljs.core.async.t134840.cljs$lang$ctorStr = "cljs.core.async/t134840";

cljs.core.async.t134840.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t134840");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t134840 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t134840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta134841){
return (new cljs.core.async.t134840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta134841));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t134840(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___134959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_134912){
var state_val_134913 = (state_134912[(1)]);
if((state_val_134913 === (7))){
var inst_134856 = (state_134912[(7)]);
var inst_134861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_134856);
var state_134912__$1 = state_134912;
var statearr_134914_134960 = state_134912__$1;
(statearr_134914_134960[(2)] = inst_134861);

(statearr_134914_134960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (20))){
var inst_134871 = (state_134912[(8)]);
var state_134912__$1 = state_134912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134912__$1,(23),out,inst_134871);
} else {
if((state_val_134913 === (1))){
var inst_134846 = (state_134912[(9)]);
var inst_134846__$1 = calc_state.call(null);
var inst_134847 = cljs.core.seq_QMARK_.call(null,inst_134846__$1);
var state_134912__$1 = (function (){var statearr_134915 = state_134912;
(statearr_134915[(9)] = inst_134846__$1);

return statearr_134915;
})();
if(inst_134847){
var statearr_134916_134961 = state_134912__$1;
(statearr_134916_134961[(1)] = (2));

} else {
var statearr_134917_134962 = state_134912__$1;
(statearr_134917_134962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (24))){
var inst_134864 = (state_134912[(10)]);
var inst_134856 = inst_134864;
var state_134912__$1 = (function (){var statearr_134918 = state_134912;
(statearr_134918[(7)] = inst_134856);

return statearr_134918;
})();
var statearr_134919_134963 = state_134912__$1;
(statearr_134919_134963[(2)] = null);

(statearr_134919_134963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (4))){
var inst_134846 = (state_134912[(9)]);
var inst_134852 = (state_134912[(2)]);
var inst_134853 = cljs.core.get.call(null,inst_134852,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_134854 = cljs.core.get.call(null,inst_134852,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_134855 = cljs.core.get.call(null,inst_134852,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_134856 = inst_134846;
var state_134912__$1 = (function (){var statearr_134920 = state_134912;
(statearr_134920[(11)] = inst_134854);

(statearr_134920[(12)] = inst_134853);

(statearr_134920[(7)] = inst_134856);

(statearr_134920[(13)] = inst_134855);

return statearr_134920;
})();
var statearr_134921_134964 = state_134912__$1;
(statearr_134921_134964[(2)] = null);

(statearr_134921_134964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (15))){
var state_134912__$1 = state_134912;
var statearr_134922_134965 = state_134912__$1;
(statearr_134922_134965[(2)] = null);

(statearr_134922_134965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (21))){
var inst_134864 = (state_134912[(10)]);
var inst_134856 = inst_134864;
var state_134912__$1 = (function (){var statearr_134923 = state_134912;
(statearr_134923[(7)] = inst_134856);

return statearr_134923;
})();
var statearr_134924_134966 = state_134912__$1;
(statearr_134924_134966[(2)] = null);

(statearr_134924_134966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (13))){
var inst_134908 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
var statearr_134925_134967 = state_134912__$1;
(statearr_134925_134967[(2)] = inst_134908);

(statearr_134925_134967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (22))){
var inst_134906 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
var statearr_134926_134968 = state_134912__$1;
(statearr_134926_134968[(2)] = inst_134906);

(statearr_134926_134968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (6))){
var inst_134910 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134912__$1,inst_134910);
} else {
if((state_val_134913 === (25))){
var state_134912__$1 = state_134912;
var statearr_134927_134969 = state_134912__$1;
(statearr_134927_134969[(2)] = null);

(statearr_134927_134969[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (17))){
var inst_134886 = (state_134912[(14)]);
var state_134912__$1 = state_134912;
var statearr_134928_134970 = state_134912__$1;
(statearr_134928_134970[(2)] = inst_134886);

(statearr_134928_134970[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (3))){
var inst_134846 = (state_134912[(9)]);
var state_134912__$1 = state_134912;
var statearr_134929_134971 = state_134912__$1;
(statearr_134929_134971[(2)] = inst_134846);

(statearr_134929_134971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (12))){
var inst_134872 = (state_134912[(15)]);
var inst_134886 = (state_134912[(14)]);
var inst_134867 = (state_134912[(16)]);
var inst_134886__$1 = inst_134867.call(null,inst_134872);
var state_134912__$1 = (function (){var statearr_134930 = state_134912;
(statearr_134930[(14)] = inst_134886__$1);

return statearr_134930;
})();
if(cljs.core.truth_(inst_134886__$1)){
var statearr_134931_134972 = state_134912__$1;
(statearr_134931_134972[(1)] = (17));

} else {
var statearr_134932_134973 = state_134912__$1;
(statearr_134932_134973[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (2))){
var inst_134846 = (state_134912[(9)]);
var inst_134849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_134846);
var state_134912__$1 = state_134912;
var statearr_134933_134974 = state_134912__$1;
(statearr_134933_134974[(2)] = inst_134849);

(statearr_134933_134974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (23))){
var inst_134897 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
if(cljs.core.truth_(inst_134897)){
var statearr_134934_134975 = state_134912__$1;
(statearr_134934_134975[(1)] = (24));

} else {
var statearr_134935_134976 = state_134912__$1;
(statearr_134935_134976[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (19))){
var inst_134894 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
if(cljs.core.truth_(inst_134894)){
var statearr_134936_134977 = state_134912__$1;
(statearr_134936_134977[(1)] = (20));

} else {
var statearr_134937_134978 = state_134912__$1;
(statearr_134937_134978[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (11))){
var inst_134871 = (state_134912[(8)]);
var inst_134877 = (inst_134871 == null);
var state_134912__$1 = state_134912;
if(cljs.core.truth_(inst_134877)){
var statearr_134938_134979 = state_134912__$1;
(statearr_134938_134979[(1)] = (14));

} else {
var statearr_134939_134980 = state_134912__$1;
(statearr_134939_134980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (9))){
var inst_134864 = (state_134912[(10)]);
var inst_134864__$1 = (state_134912[(2)]);
var inst_134865 = cljs.core.get.call(null,inst_134864__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_134866 = cljs.core.get.call(null,inst_134864__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_134867 = cljs.core.get.call(null,inst_134864__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_134912__$1 = (function (){var statearr_134940 = state_134912;
(statearr_134940[(17)] = inst_134866);

(statearr_134940[(10)] = inst_134864__$1);

(statearr_134940[(16)] = inst_134867);

return statearr_134940;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_134912__$1,(10),inst_134865);
} else {
if((state_val_134913 === (5))){
var inst_134856 = (state_134912[(7)]);
var inst_134859 = cljs.core.seq_QMARK_.call(null,inst_134856);
var state_134912__$1 = state_134912;
if(inst_134859){
var statearr_134941_134981 = state_134912__$1;
(statearr_134941_134981[(1)] = (7));

} else {
var statearr_134942_134982 = state_134912__$1;
(statearr_134942_134982[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (14))){
var inst_134872 = (state_134912[(15)]);
var inst_134879 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_134872);
var state_134912__$1 = state_134912;
var statearr_134943_134983 = state_134912__$1;
(statearr_134943_134983[(2)] = inst_134879);

(statearr_134943_134983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (26))){
var inst_134902 = (state_134912[(2)]);
var state_134912__$1 = state_134912;
var statearr_134944_134984 = state_134912__$1;
(statearr_134944_134984[(2)] = inst_134902);

(statearr_134944_134984[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (16))){
var inst_134882 = (state_134912[(2)]);
var inst_134883 = calc_state.call(null);
var inst_134856 = inst_134883;
var state_134912__$1 = (function (){var statearr_134945 = state_134912;
(statearr_134945[(18)] = inst_134882);

(statearr_134945[(7)] = inst_134856);

return statearr_134945;
})();
var statearr_134946_134985 = state_134912__$1;
(statearr_134946_134985[(2)] = null);

(statearr_134946_134985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (10))){
var inst_134872 = (state_134912[(15)]);
var inst_134871 = (state_134912[(8)]);
var inst_134870 = (state_134912[(2)]);
var inst_134871__$1 = cljs.core.nth.call(null,inst_134870,(0),null);
var inst_134872__$1 = cljs.core.nth.call(null,inst_134870,(1),null);
var inst_134873 = (inst_134871__$1 == null);
var inst_134874 = cljs.core._EQ_.call(null,inst_134872__$1,change);
var inst_134875 = (inst_134873) || (inst_134874);
var state_134912__$1 = (function (){var statearr_134947 = state_134912;
(statearr_134947[(15)] = inst_134872__$1);

(statearr_134947[(8)] = inst_134871__$1);

return statearr_134947;
})();
if(cljs.core.truth_(inst_134875)){
var statearr_134948_134986 = state_134912__$1;
(statearr_134948_134986[(1)] = (11));

} else {
var statearr_134949_134987 = state_134912__$1;
(statearr_134949_134987[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (18))){
var inst_134872 = (state_134912[(15)]);
var inst_134866 = (state_134912[(17)]);
var inst_134867 = (state_134912[(16)]);
var inst_134889 = cljs.core.empty_QMARK_.call(null,inst_134867);
var inst_134890 = inst_134866.call(null,inst_134872);
var inst_134891 = cljs.core.not.call(null,inst_134890);
var inst_134892 = (inst_134889) && (inst_134891);
var state_134912__$1 = state_134912;
var statearr_134950_134988 = state_134912__$1;
(statearr_134950_134988[(2)] = inst_134892);

(statearr_134950_134988[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134913 === (8))){
var inst_134856 = (state_134912[(7)]);
var state_134912__$1 = state_134912;
var statearr_134951_134989 = state_134912__$1;
(statearr_134951_134989[(2)] = inst_134856);

(statearr_134951_134989[(1)] = (9));


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
});})(c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_134955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_134955[(0)] = state_machine__6988__auto__);

(statearr_134955[(1)] = (1));

return statearr_134955;
});
var state_machine__6988__auto____1 = (function (state_134912){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_134912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e134956){if((e134956 instanceof Object)){
var ex__6991__auto__ = e134956;
var statearr_134957_134990 = state_134912;
(statearr_134957_134990[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134991 = state_134912;
state_134912 = G__134991;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_134912){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_134912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_134958 = f__7044__auto__.call(null);
(statearr_134958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___134959);

return statearr_134958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___134959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj134993 = {};
return obj134993;
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
return (function (p1__134994_SHARP_){
if(cljs.core.truth_(p1__134994_SHARP_.call(null,topic))){
return p1__134994_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__134994_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t135117 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t135117 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta135118){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta135118 = meta135118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135117.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t135117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t135117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t135117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t135117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t135117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t135117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t135117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_135119){
var self__ = this;
var _135119__$1 = this;
return self__.meta135118;
});})(mults,ensure_mult))
;

cljs.core.async.t135117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_135119,meta135118__$1){
var self__ = this;
var _135119__$1 = this;
return (new cljs.core.async.t135117(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta135118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t135117.cljs$lang$type = true;

cljs.core.async.t135117.cljs$lang$ctorStr = "cljs.core.async/t135117";

cljs.core.async.t135117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t135117");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t135117 = ((function (mults,ensure_mult){
return (function __GT_t135117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta135118){
return (new cljs.core.async.t135117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta135118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t135117(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___135239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___135239,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___135239,mults,ensure_mult,p){
return (function (state_135191){
var state_val_135192 = (state_135191[(1)]);
if((state_val_135192 === (7))){
var inst_135187 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135193_135240 = state_135191__$1;
(statearr_135193_135240[(2)] = inst_135187);

(statearr_135193_135240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (20))){
var state_135191__$1 = state_135191;
var statearr_135194_135241 = state_135191__$1;
(statearr_135194_135241[(2)] = null);

(statearr_135194_135241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (1))){
var state_135191__$1 = state_135191;
var statearr_135195_135242 = state_135191__$1;
(statearr_135195_135242[(2)] = null);

(statearr_135195_135242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (24))){
var inst_135170 = (state_135191[(7)]);
var inst_135179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_135170);
var state_135191__$1 = state_135191;
var statearr_135196_135243 = state_135191__$1;
(statearr_135196_135243[(2)] = inst_135179);

(statearr_135196_135243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (4))){
var inst_135122 = (state_135191[(8)]);
var inst_135122__$1 = (state_135191[(2)]);
var inst_135123 = (inst_135122__$1 == null);
var state_135191__$1 = (function (){var statearr_135197 = state_135191;
(statearr_135197[(8)] = inst_135122__$1);

return statearr_135197;
})();
if(cljs.core.truth_(inst_135123)){
var statearr_135198_135244 = state_135191__$1;
(statearr_135198_135244[(1)] = (5));

} else {
var statearr_135199_135245 = state_135191__$1;
(statearr_135199_135245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (15))){
var inst_135164 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135200_135246 = state_135191__$1;
(statearr_135200_135246[(2)] = inst_135164);

(statearr_135200_135246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (21))){
var inst_135184 = (state_135191[(2)]);
var state_135191__$1 = (function (){var statearr_135201 = state_135191;
(statearr_135201[(9)] = inst_135184);

return statearr_135201;
})();
var statearr_135202_135247 = state_135191__$1;
(statearr_135202_135247[(2)] = null);

(statearr_135202_135247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (13))){
var inst_135146 = (state_135191[(10)]);
var inst_135148 = cljs.core.chunked_seq_QMARK_.call(null,inst_135146);
var state_135191__$1 = state_135191;
if(inst_135148){
var statearr_135203_135248 = state_135191__$1;
(statearr_135203_135248[(1)] = (16));

} else {
var statearr_135204_135249 = state_135191__$1;
(statearr_135204_135249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (22))){
var inst_135176 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
if(cljs.core.truth_(inst_135176)){
var statearr_135205_135250 = state_135191__$1;
(statearr_135205_135250[(1)] = (23));

} else {
var statearr_135206_135251 = state_135191__$1;
(statearr_135206_135251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (6))){
var inst_135172 = (state_135191[(11)]);
var inst_135170 = (state_135191[(7)]);
var inst_135122 = (state_135191[(8)]);
var inst_135170__$1 = topic_fn.call(null,inst_135122);
var inst_135171 = cljs.core.deref.call(null,mults);
var inst_135172__$1 = cljs.core.get.call(null,inst_135171,inst_135170__$1);
var state_135191__$1 = (function (){var statearr_135207 = state_135191;
(statearr_135207[(11)] = inst_135172__$1);

(statearr_135207[(7)] = inst_135170__$1);

return statearr_135207;
})();
if(cljs.core.truth_(inst_135172__$1)){
var statearr_135208_135252 = state_135191__$1;
(statearr_135208_135252[(1)] = (19));

} else {
var statearr_135209_135253 = state_135191__$1;
(statearr_135209_135253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (25))){
var inst_135181 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135210_135254 = state_135191__$1;
(statearr_135210_135254[(2)] = inst_135181);

(statearr_135210_135254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (17))){
var inst_135146 = (state_135191[(10)]);
var inst_135155 = cljs.core.first.call(null,inst_135146);
var inst_135156 = cljs.core.async.muxch_STAR_.call(null,inst_135155);
var inst_135157 = cljs.core.async.close_BANG_.call(null,inst_135156);
var inst_135158 = cljs.core.next.call(null,inst_135146);
var inst_135132 = inst_135158;
var inst_135133 = null;
var inst_135134 = (0);
var inst_135135 = (0);
var state_135191__$1 = (function (){var statearr_135211 = state_135191;
(statearr_135211[(12)] = inst_135132);

(statearr_135211[(13)] = inst_135134);

(statearr_135211[(14)] = inst_135133);

(statearr_135211[(15)] = inst_135157);

(statearr_135211[(16)] = inst_135135);

return statearr_135211;
})();
var statearr_135212_135255 = state_135191__$1;
(statearr_135212_135255[(2)] = null);

(statearr_135212_135255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (3))){
var inst_135189 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135191__$1,inst_135189);
} else {
if((state_val_135192 === (12))){
var inst_135166 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135213_135256 = state_135191__$1;
(statearr_135213_135256[(2)] = inst_135166);

(statearr_135213_135256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (2))){
var state_135191__$1 = state_135191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135191__$1,(4),ch);
} else {
if((state_val_135192 === (23))){
var state_135191__$1 = state_135191;
var statearr_135214_135257 = state_135191__$1;
(statearr_135214_135257[(2)] = null);

(statearr_135214_135257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (19))){
var inst_135172 = (state_135191[(11)]);
var inst_135122 = (state_135191[(8)]);
var inst_135174 = cljs.core.async.muxch_STAR_.call(null,inst_135172);
var state_135191__$1 = state_135191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135191__$1,(22),inst_135174,inst_135122);
} else {
if((state_val_135192 === (11))){
var inst_135132 = (state_135191[(12)]);
var inst_135146 = (state_135191[(10)]);
var inst_135146__$1 = cljs.core.seq.call(null,inst_135132);
var state_135191__$1 = (function (){var statearr_135215 = state_135191;
(statearr_135215[(10)] = inst_135146__$1);

return statearr_135215;
})();
if(inst_135146__$1){
var statearr_135216_135258 = state_135191__$1;
(statearr_135216_135258[(1)] = (13));

} else {
var statearr_135217_135259 = state_135191__$1;
(statearr_135217_135259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (9))){
var inst_135168 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135218_135260 = state_135191__$1;
(statearr_135218_135260[(2)] = inst_135168);

(statearr_135218_135260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (5))){
var inst_135129 = cljs.core.deref.call(null,mults);
var inst_135130 = cljs.core.vals.call(null,inst_135129);
var inst_135131 = cljs.core.seq.call(null,inst_135130);
var inst_135132 = inst_135131;
var inst_135133 = null;
var inst_135134 = (0);
var inst_135135 = (0);
var state_135191__$1 = (function (){var statearr_135219 = state_135191;
(statearr_135219[(12)] = inst_135132);

(statearr_135219[(13)] = inst_135134);

(statearr_135219[(14)] = inst_135133);

(statearr_135219[(16)] = inst_135135);

return statearr_135219;
})();
var statearr_135220_135261 = state_135191__$1;
(statearr_135220_135261[(2)] = null);

(statearr_135220_135261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (14))){
var state_135191__$1 = state_135191;
var statearr_135224_135262 = state_135191__$1;
(statearr_135224_135262[(2)] = null);

(statearr_135224_135262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (16))){
var inst_135146 = (state_135191[(10)]);
var inst_135150 = cljs.core.chunk_first.call(null,inst_135146);
var inst_135151 = cljs.core.chunk_rest.call(null,inst_135146);
var inst_135152 = cljs.core.count.call(null,inst_135150);
var inst_135132 = inst_135151;
var inst_135133 = inst_135150;
var inst_135134 = inst_135152;
var inst_135135 = (0);
var state_135191__$1 = (function (){var statearr_135225 = state_135191;
(statearr_135225[(12)] = inst_135132);

(statearr_135225[(13)] = inst_135134);

(statearr_135225[(14)] = inst_135133);

(statearr_135225[(16)] = inst_135135);

return statearr_135225;
})();
var statearr_135226_135263 = state_135191__$1;
(statearr_135226_135263[(2)] = null);

(statearr_135226_135263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (10))){
var inst_135132 = (state_135191[(12)]);
var inst_135134 = (state_135191[(13)]);
var inst_135133 = (state_135191[(14)]);
var inst_135135 = (state_135191[(16)]);
var inst_135140 = cljs.core._nth.call(null,inst_135133,inst_135135);
var inst_135141 = cljs.core.async.muxch_STAR_.call(null,inst_135140);
var inst_135142 = cljs.core.async.close_BANG_.call(null,inst_135141);
var inst_135143 = (inst_135135 + (1));
var tmp135221 = inst_135132;
var tmp135222 = inst_135134;
var tmp135223 = inst_135133;
var inst_135132__$1 = tmp135221;
var inst_135133__$1 = tmp135223;
var inst_135134__$1 = tmp135222;
var inst_135135__$1 = inst_135143;
var state_135191__$1 = (function (){var statearr_135227 = state_135191;
(statearr_135227[(12)] = inst_135132__$1);

(statearr_135227[(17)] = inst_135142);

(statearr_135227[(13)] = inst_135134__$1);

(statearr_135227[(14)] = inst_135133__$1);

(statearr_135227[(16)] = inst_135135__$1);

return statearr_135227;
})();
var statearr_135228_135264 = state_135191__$1;
(statearr_135228_135264[(2)] = null);

(statearr_135228_135264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (18))){
var inst_135161 = (state_135191[(2)]);
var state_135191__$1 = state_135191;
var statearr_135229_135265 = state_135191__$1;
(statearr_135229_135265[(2)] = inst_135161);

(statearr_135229_135265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135192 === (8))){
var inst_135134 = (state_135191[(13)]);
var inst_135135 = (state_135191[(16)]);
var inst_135137 = (inst_135135 < inst_135134);
var inst_135138 = inst_135137;
var state_135191__$1 = state_135191;
if(cljs.core.truth_(inst_135138)){
var statearr_135230_135266 = state_135191__$1;
(statearr_135230_135266[(1)] = (10));

} else {
var statearr_135231_135267 = state_135191__$1;
(statearr_135231_135267[(1)] = (11));

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
});})(c__7043__auto___135239,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___135239,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135235[(0)] = state_machine__6988__auto__);

(statearr_135235[(1)] = (1));

return statearr_135235;
});
var state_machine__6988__auto____1 = (function (state_135191){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135236){if((e135236 instanceof Object)){
var ex__6991__auto__ = e135236;
var statearr_135237_135268 = state_135191;
(statearr_135237_135268[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135269 = state_135191;
state_135191 = G__135269;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135191){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___135239,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_135238 = f__7044__auto__.call(null);
(statearr_135238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___135239);

return statearr_135238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___135239,mults,ensure_mult,p))
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
var c__7043__auto___135406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_135376){
var state_val_135377 = (state_135376[(1)]);
if((state_val_135377 === (7))){
var state_135376__$1 = state_135376;
var statearr_135378_135407 = state_135376__$1;
(statearr_135378_135407[(2)] = null);

(statearr_135378_135407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (1))){
var state_135376__$1 = state_135376;
var statearr_135379_135408 = state_135376__$1;
(statearr_135379_135408[(2)] = null);

(statearr_135379_135408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (4))){
var inst_135340 = (state_135376[(7)]);
var inst_135342 = (inst_135340 < cnt);
var state_135376__$1 = state_135376;
if(cljs.core.truth_(inst_135342)){
var statearr_135380_135409 = state_135376__$1;
(statearr_135380_135409[(1)] = (6));

} else {
var statearr_135381_135410 = state_135376__$1;
(statearr_135381_135410[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (15))){
var inst_135372 = (state_135376[(2)]);
var state_135376__$1 = state_135376;
var statearr_135382_135411 = state_135376__$1;
(statearr_135382_135411[(2)] = inst_135372);

(statearr_135382_135411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (13))){
var inst_135365 = cljs.core.async.close_BANG_.call(null,out);
var state_135376__$1 = state_135376;
var statearr_135383_135412 = state_135376__$1;
(statearr_135383_135412[(2)] = inst_135365);

(statearr_135383_135412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (6))){
var state_135376__$1 = state_135376;
var statearr_135384_135413 = state_135376__$1;
(statearr_135384_135413[(2)] = null);

(statearr_135384_135413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (3))){
var inst_135374 = (state_135376[(2)]);
var state_135376__$1 = state_135376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135376__$1,inst_135374);
} else {
if((state_val_135377 === (12))){
var inst_135362 = (state_135376[(8)]);
var inst_135362__$1 = (state_135376[(2)]);
var inst_135363 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_135362__$1);
var state_135376__$1 = (function (){var statearr_135385 = state_135376;
(statearr_135385[(8)] = inst_135362__$1);

return statearr_135385;
})();
if(cljs.core.truth_(inst_135363)){
var statearr_135386_135414 = state_135376__$1;
(statearr_135386_135414[(1)] = (13));

} else {
var statearr_135387_135415 = state_135376__$1;
(statearr_135387_135415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (2))){
var inst_135339 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_135340 = (0);
var state_135376__$1 = (function (){var statearr_135388 = state_135376;
(statearr_135388[(9)] = inst_135339);

(statearr_135388[(7)] = inst_135340);

return statearr_135388;
})();
var statearr_135389_135416 = state_135376__$1;
(statearr_135389_135416[(2)] = null);

(statearr_135389_135416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (11))){
var inst_135340 = (state_135376[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_135376,(10),Object,null,(9));
var inst_135349 = chs__$1.call(null,inst_135340);
var inst_135350 = done.call(null,inst_135340);
var inst_135351 = cljs.core.async.take_BANG_.call(null,inst_135349,inst_135350);
var state_135376__$1 = state_135376;
var statearr_135390_135417 = state_135376__$1;
(statearr_135390_135417[(2)] = inst_135351);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (9))){
var inst_135340 = (state_135376[(7)]);
var inst_135353 = (state_135376[(2)]);
var inst_135354 = (inst_135340 + (1));
var inst_135340__$1 = inst_135354;
var state_135376__$1 = (function (){var statearr_135391 = state_135376;
(statearr_135391[(7)] = inst_135340__$1);

(statearr_135391[(10)] = inst_135353);

return statearr_135391;
})();
var statearr_135392_135418 = state_135376__$1;
(statearr_135392_135418[(2)] = null);

(statearr_135392_135418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (5))){
var inst_135360 = (state_135376[(2)]);
var state_135376__$1 = (function (){var statearr_135393 = state_135376;
(statearr_135393[(11)] = inst_135360);

return statearr_135393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135376__$1,(12),dchan);
} else {
if((state_val_135377 === (14))){
var inst_135362 = (state_135376[(8)]);
var inst_135367 = cljs.core.apply.call(null,f,inst_135362);
var state_135376__$1 = state_135376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135376__$1,(16),out,inst_135367);
} else {
if((state_val_135377 === (16))){
var inst_135369 = (state_135376[(2)]);
var state_135376__$1 = (function (){var statearr_135394 = state_135376;
(statearr_135394[(12)] = inst_135369);

return statearr_135394;
})();
var statearr_135395_135419 = state_135376__$1;
(statearr_135395_135419[(2)] = null);

(statearr_135395_135419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (10))){
var inst_135344 = (state_135376[(2)]);
var inst_135345 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_135376__$1 = (function (){var statearr_135396 = state_135376;
(statearr_135396[(13)] = inst_135344);

return statearr_135396;
})();
var statearr_135397_135420 = state_135376__$1;
(statearr_135397_135420[(2)] = inst_135345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135377 === (8))){
var inst_135358 = (state_135376[(2)]);
var state_135376__$1 = state_135376;
var statearr_135398_135421 = state_135376__$1;
(statearr_135398_135421[(2)] = inst_135358);

(statearr_135398_135421[(1)] = (5));


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
});})(c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135402[(0)] = state_machine__6988__auto__);

(statearr_135402[(1)] = (1));

return statearr_135402;
});
var state_machine__6988__auto____1 = (function (state_135376){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135403){if((e135403 instanceof Object)){
var ex__6991__auto__ = e135403;
var statearr_135404_135422 = state_135376;
(statearr_135404_135422[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135423 = state_135376;
state_135376 = G__135423;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135376){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_135405 = f__7044__auto__.call(null);
(statearr_135405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___135406);

return statearr_135405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___135406,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___135531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___135531,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___135531,out){
return (function (state_135507){
var state_val_135508 = (state_135507[(1)]);
if((state_val_135508 === (7))){
var inst_135486 = (state_135507[(7)]);
var inst_135487 = (state_135507[(8)]);
var inst_135486__$1 = (state_135507[(2)]);
var inst_135487__$1 = cljs.core.nth.call(null,inst_135486__$1,(0),null);
var inst_135488 = cljs.core.nth.call(null,inst_135486__$1,(1),null);
var inst_135489 = (inst_135487__$1 == null);
var state_135507__$1 = (function (){var statearr_135509 = state_135507;
(statearr_135509[(7)] = inst_135486__$1);

(statearr_135509[(9)] = inst_135488);

(statearr_135509[(8)] = inst_135487__$1);

return statearr_135509;
})();
if(cljs.core.truth_(inst_135489)){
var statearr_135510_135532 = state_135507__$1;
(statearr_135510_135532[(1)] = (8));

} else {
var statearr_135511_135533 = state_135507__$1;
(statearr_135511_135533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (1))){
var inst_135478 = cljs.core.vec.call(null,chs);
var inst_135479 = inst_135478;
var state_135507__$1 = (function (){var statearr_135512 = state_135507;
(statearr_135512[(10)] = inst_135479);

return statearr_135512;
})();
var statearr_135513_135534 = state_135507__$1;
(statearr_135513_135534[(2)] = null);

(statearr_135513_135534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (4))){
var inst_135479 = (state_135507[(10)]);
var state_135507__$1 = state_135507;
return cljs.core.async.ioc_alts_BANG_.call(null,state_135507__$1,(7),inst_135479);
} else {
if((state_val_135508 === (6))){
var inst_135503 = (state_135507[(2)]);
var state_135507__$1 = state_135507;
var statearr_135514_135535 = state_135507__$1;
(statearr_135514_135535[(2)] = inst_135503);

(statearr_135514_135535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (3))){
var inst_135505 = (state_135507[(2)]);
var state_135507__$1 = state_135507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135507__$1,inst_135505);
} else {
if((state_val_135508 === (2))){
var inst_135479 = (state_135507[(10)]);
var inst_135481 = cljs.core.count.call(null,inst_135479);
var inst_135482 = (inst_135481 > (0));
var state_135507__$1 = state_135507;
if(cljs.core.truth_(inst_135482)){
var statearr_135516_135536 = state_135507__$1;
(statearr_135516_135536[(1)] = (4));

} else {
var statearr_135517_135537 = state_135507__$1;
(statearr_135517_135537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (11))){
var inst_135479 = (state_135507[(10)]);
var inst_135496 = (state_135507[(2)]);
var tmp135515 = inst_135479;
var inst_135479__$1 = tmp135515;
var state_135507__$1 = (function (){var statearr_135518 = state_135507;
(statearr_135518[(10)] = inst_135479__$1);

(statearr_135518[(11)] = inst_135496);

return statearr_135518;
})();
var statearr_135519_135538 = state_135507__$1;
(statearr_135519_135538[(2)] = null);

(statearr_135519_135538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (9))){
var inst_135487 = (state_135507[(8)]);
var state_135507__$1 = state_135507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135507__$1,(11),out,inst_135487);
} else {
if((state_val_135508 === (5))){
var inst_135501 = cljs.core.async.close_BANG_.call(null,out);
var state_135507__$1 = state_135507;
var statearr_135520_135539 = state_135507__$1;
(statearr_135520_135539[(2)] = inst_135501);

(statearr_135520_135539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (10))){
var inst_135499 = (state_135507[(2)]);
var state_135507__$1 = state_135507;
var statearr_135521_135540 = state_135507__$1;
(statearr_135521_135540[(2)] = inst_135499);

(statearr_135521_135540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135508 === (8))){
var inst_135486 = (state_135507[(7)]);
var inst_135488 = (state_135507[(9)]);
var inst_135479 = (state_135507[(10)]);
var inst_135487 = (state_135507[(8)]);
var inst_135491 = (function (){var c = inst_135488;
var v = inst_135487;
var vec__135484 = inst_135486;
var cs = inst_135479;
return ((function (c,v,vec__135484,cs,inst_135486,inst_135488,inst_135479,inst_135487,state_val_135508,c__7043__auto___135531,out){
return (function (p1__135424_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__135424_SHARP_);
});
;})(c,v,vec__135484,cs,inst_135486,inst_135488,inst_135479,inst_135487,state_val_135508,c__7043__auto___135531,out))
})();
var inst_135492 = cljs.core.filterv.call(null,inst_135491,inst_135479);
var inst_135479__$1 = inst_135492;
var state_135507__$1 = (function (){var statearr_135522 = state_135507;
(statearr_135522[(10)] = inst_135479__$1);

return statearr_135522;
})();
var statearr_135523_135541 = state_135507__$1;
(statearr_135523_135541[(2)] = null);

(statearr_135523_135541[(1)] = (2));


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
});})(c__7043__auto___135531,out))
;
return ((function (switch__6987__auto__,c__7043__auto___135531,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135527[(0)] = state_machine__6988__auto__);

(statearr_135527[(1)] = (1));

return statearr_135527;
});
var state_machine__6988__auto____1 = (function (state_135507){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135528){if((e135528 instanceof Object)){
var ex__6991__auto__ = e135528;
var statearr_135529_135542 = state_135507;
(statearr_135529_135542[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135543 = state_135507;
state_135507 = G__135543;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135507){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___135531,out))
})();
var state__7045__auto__ = (function (){var statearr_135530 = f__7044__auto__.call(null);
(statearr_135530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___135531);

return statearr_135530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___135531,out))
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
var c__7043__auto___135636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___135636,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___135636,out){
return (function (state_135613){
var state_val_135614 = (state_135613[(1)]);
if((state_val_135614 === (7))){
var inst_135595 = (state_135613[(7)]);
var inst_135595__$1 = (state_135613[(2)]);
var inst_135596 = (inst_135595__$1 == null);
var inst_135597 = cljs.core.not.call(null,inst_135596);
var state_135613__$1 = (function (){var statearr_135615 = state_135613;
(statearr_135615[(7)] = inst_135595__$1);

return statearr_135615;
})();
if(inst_135597){
var statearr_135616_135637 = state_135613__$1;
(statearr_135616_135637[(1)] = (8));

} else {
var statearr_135617_135638 = state_135613__$1;
(statearr_135617_135638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (1))){
var inst_135590 = (0);
var state_135613__$1 = (function (){var statearr_135618 = state_135613;
(statearr_135618[(8)] = inst_135590);

return statearr_135618;
})();
var statearr_135619_135639 = state_135613__$1;
(statearr_135619_135639[(2)] = null);

(statearr_135619_135639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (4))){
var state_135613__$1 = state_135613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135613__$1,(7),ch);
} else {
if((state_val_135614 === (6))){
var inst_135608 = (state_135613[(2)]);
var state_135613__$1 = state_135613;
var statearr_135620_135640 = state_135613__$1;
(statearr_135620_135640[(2)] = inst_135608);

(statearr_135620_135640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (3))){
var inst_135610 = (state_135613[(2)]);
var inst_135611 = cljs.core.async.close_BANG_.call(null,out);
var state_135613__$1 = (function (){var statearr_135621 = state_135613;
(statearr_135621[(9)] = inst_135610);

return statearr_135621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135613__$1,inst_135611);
} else {
if((state_val_135614 === (2))){
var inst_135590 = (state_135613[(8)]);
var inst_135592 = (inst_135590 < n);
var state_135613__$1 = state_135613;
if(cljs.core.truth_(inst_135592)){
var statearr_135622_135641 = state_135613__$1;
(statearr_135622_135641[(1)] = (4));

} else {
var statearr_135623_135642 = state_135613__$1;
(statearr_135623_135642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (11))){
var inst_135590 = (state_135613[(8)]);
var inst_135600 = (state_135613[(2)]);
var inst_135601 = (inst_135590 + (1));
var inst_135590__$1 = inst_135601;
var state_135613__$1 = (function (){var statearr_135624 = state_135613;
(statearr_135624[(10)] = inst_135600);

(statearr_135624[(8)] = inst_135590__$1);

return statearr_135624;
})();
var statearr_135625_135643 = state_135613__$1;
(statearr_135625_135643[(2)] = null);

(statearr_135625_135643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (9))){
var state_135613__$1 = state_135613;
var statearr_135626_135644 = state_135613__$1;
(statearr_135626_135644[(2)] = null);

(statearr_135626_135644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (5))){
var state_135613__$1 = state_135613;
var statearr_135627_135645 = state_135613__$1;
(statearr_135627_135645[(2)] = null);

(statearr_135627_135645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (10))){
var inst_135605 = (state_135613[(2)]);
var state_135613__$1 = state_135613;
var statearr_135628_135646 = state_135613__$1;
(statearr_135628_135646[(2)] = inst_135605);

(statearr_135628_135646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135614 === (8))){
var inst_135595 = (state_135613[(7)]);
var state_135613__$1 = state_135613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135613__$1,(11),out,inst_135595);
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
});})(c__7043__auto___135636,out))
;
return ((function (switch__6987__auto__,c__7043__auto___135636,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_135632[(0)] = state_machine__6988__auto__);

(statearr_135632[(1)] = (1));

return statearr_135632;
});
var state_machine__6988__auto____1 = (function (state_135613){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135633){if((e135633 instanceof Object)){
var ex__6991__auto__ = e135633;
var statearr_135634_135647 = state_135613;
(statearr_135634_135647[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135648 = state_135613;
state_135613 = G__135648;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135613){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___135636,out))
})();
var state__7045__auto__ = (function (){var statearr_135635 = f__7044__auto__.call(null);
(statearr_135635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___135636);

return statearr_135635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___135636,out))
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
if(typeof cljs.core.async.t135656 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t135656 = (function (ch,f,map_LT_,meta135657){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta135657 = meta135657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t135659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t135659 = (function (fn1,_,meta135657,map_LT_,f,ch,meta135660){
this.fn1 = fn1;
this._ = _;
this.meta135657 = meta135657;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta135660 = meta135660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t135659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t135659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__135649_SHARP_){
return f1.call(null,(((p1__135649_SHARP_ == null))?null:self__.f.call(null,p1__135649_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t135659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_135661){
var self__ = this;
var _135661__$1 = this;
return self__.meta135660;
});})(___$1))
;

cljs.core.async.t135659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_135661,meta135660__$1){
var self__ = this;
var _135661__$1 = this;
return (new cljs.core.async.t135659(self__.fn1,self__._,self__.meta135657,self__.map_LT_,self__.f,self__.ch,meta135660__$1));
});})(___$1))
;

cljs.core.async.t135659.cljs$lang$type = true;

cljs.core.async.t135659.cljs$lang$ctorStr = "cljs.core.async/t135659";

cljs.core.async.t135659.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t135659");
});})(___$1))
;

cljs.core.async.__GT_t135659 = ((function (___$1){
return (function __GT_t135659(fn1__$1,___$2,meta135657__$1,map_LT___$1,f__$1,ch__$1,meta135660){
return (new cljs.core.async.t135659(fn1__$1,___$2,meta135657__$1,map_LT___$1,f__$1,ch__$1,meta135660));
});})(___$1))
;

}

return (new cljs.core.async.t135659(fn1,___$1,self__.meta135657,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t135656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t135656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135658){
var self__ = this;
var _135658__$1 = this;
return self__.meta135657;
});

cljs.core.async.t135656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135658,meta135657__$1){
var self__ = this;
var _135658__$1 = this;
return (new cljs.core.async.t135656(self__.ch,self__.f,self__.map_LT_,meta135657__$1));
});

cljs.core.async.t135656.cljs$lang$type = true;

cljs.core.async.t135656.cljs$lang$ctorStr = "cljs.core.async/t135656";

cljs.core.async.t135656.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t135656");
});

cljs.core.async.__GT_t135656 = (function __GT_t135656(ch__$1,f__$1,map_LT___$1,meta135657){
return (new cljs.core.async.t135656(ch__$1,f__$1,map_LT___$1,meta135657));
});

}

return (new cljs.core.async.t135656(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t135665 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t135665 = (function (ch,f,map_GT_,meta135666){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta135666 = meta135666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t135665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t135665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135667){
var self__ = this;
var _135667__$1 = this;
return self__.meta135666;
});

cljs.core.async.t135665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135667,meta135666__$1){
var self__ = this;
var _135667__$1 = this;
return (new cljs.core.async.t135665(self__.ch,self__.f,self__.map_GT_,meta135666__$1));
});

cljs.core.async.t135665.cljs$lang$type = true;

cljs.core.async.t135665.cljs$lang$ctorStr = "cljs.core.async/t135665";

cljs.core.async.t135665.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t135665");
});

cljs.core.async.__GT_t135665 = (function __GT_t135665(ch__$1,f__$1,map_GT___$1,meta135666){
return (new cljs.core.async.t135665(ch__$1,f__$1,map_GT___$1,meta135666));
});

}

return (new cljs.core.async.t135665(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t135671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t135671 = (function (ch,p,filter_GT_,meta135672){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta135672 = meta135672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t135671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t135671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135673){
var self__ = this;
var _135673__$1 = this;
return self__.meta135672;
});

cljs.core.async.t135671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135673,meta135672__$1){
var self__ = this;
var _135673__$1 = this;
return (new cljs.core.async.t135671(self__.ch,self__.p,self__.filter_GT_,meta135672__$1));
});

cljs.core.async.t135671.cljs$lang$type = true;

cljs.core.async.t135671.cljs$lang$ctorStr = "cljs.core.async/t135671";

cljs.core.async.t135671.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t135671");
});

cljs.core.async.__GT_t135671 = (function __GT_t135671(ch__$1,p__$1,filter_GT___$1,meta135672){
return (new cljs.core.async.t135671(ch__$1,p__$1,filter_GT___$1,meta135672));
});

}

return (new cljs.core.async.t135671(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___135756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___135756,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___135756,out){
return (function (state_135735){
var state_val_135736 = (state_135735[(1)]);
if((state_val_135736 === (7))){
var inst_135731 = (state_135735[(2)]);
var state_135735__$1 = state_135735;
var statearr_135737_135757 = state_135735__$1;
(statearr_135737_135757[(2)] = inst_135731);

(statearr_135737_135757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (1))){
var state_135735__$1 = state_135735;
var statearr_135738_135758 = state_135735__$1;
(statearr_135738_135758[(2)] = null);

(statearr_135738_135758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (4))){
var inst_135717 = (state_135735[(7)]);
var inst_135717__$1 = (state_135735[(2)]);
var inst_135718 = (inst_135717__$1 == null);
var state_135735__$1 = (function (){var statearr_135739 = state_135735;
(statearr_135739[(7)] = inst_135717__$1);

return statearr_135739;
})();
if(cljs.core.truth_(inst_135718)){
var statearr_135740_135759 = state_135735__$1;
(statearr_135740_135759[(1)] = (5));

} else {
var statearr_135741_135760 = state_135735__$1;
(statearr_135741_135760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (6))){
var inst_135717 = (state_135735[(7)]);
var inst_135722 = p.call(null,inst_135717);
var state_135735__$1 = state_135735;
if(cljs.core.truth_(inst_135722)){
var statearr_135742_135761 = state_135735__$1;
(statearr_135742_135761[(1)] = (8));

} else {
var statearr_135743_135762 = state_135735__$1;
(statearr_135743_135762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (3))){
var inst_135733 = (state_135735[(2)]);
var state_135735__$1 = state_135735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135735__$1,inst_135733);
} else {
if((state_val_135736 === (2))){
var state_135735__$1 = state_135735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135735__$1,(4),ch);
} else {
if((state_val_135736 === (11))){
var inst_135725 = (state_135735[(2)]);
var state_135735__$1 = state_135735;
var statearr_135744_135763 = state_135735__$1;
(statearr_135744_135763[(2)] = inst_135725);

(statearr_135744_135763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (9))){
var state_135735__$1 = state_135735;
var statearr_135745_135764 = state_135735__$1;
(statearr_135745_135764[(2)] = null);

(statearr_135745_135764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (5))){
var inst_135720 = cljs.core.async.close_BANG_.call(null,out);
var state_135735__$1 = state_135735;
var statearr_135746_135765 = state_135735__$1;
(statearr_135746_135765[(2)] = inst_135720);

(statearr_135746_135765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (10))){
var inst_135728 = (state_135735[(2)]);
var state_135735__$1 = (function (){var statearr_135747 = state_135735;
(statearr_135747[(8)] = inst_135728);

return statearr_135747;
})();
var statearr_135748_135766 = state_135735__$1;
(statearr_135748_135766[(2)] = null);

(statearr_135748_135766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135736 === (8))){
var inst_135717 = (state_135735[(7)]);
var state_135735__$1 = state_135735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135735__$1,(11),out,inst_135717);
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
});})(c__7043__auto___135756,out))
;
return ((function (switch__6987__auto__,c__7043__auto___135756,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135752 = [null,null,null,null,null,null,null,null,null];
(statearr_135752[(0)] = state_machine__6988__auto__);

(statearr_135752[(1)] = (1));

return statearr_135752;
});
var state_machine__6988__auto____1 = (function (state_135735){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135753){if((e135753 instanceof Object)){
var ex__6991__auto__ = e135753;
var statearr_135754_135767 = state_135735;
(statearr_135754_135767[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135768 = state_135735;
state_135735 = G__135768;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135735){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___135756,out))
})();
var state__7045__auto__ = (function (){var statearr_135755 = f__7044__auto__.call(null);
(statearr_135755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___135756);

return statearr_135755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___135756,out))
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
var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__){
return (function (state_135934){
var state_val_135935 = (state_135934[(1)]);
if((state_val_135935 === (7))){
var inst_135930 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
var statearr_135936_135977 = state_135934__$1;
(statearr_135936_135977[(2)] = inst_135930);

(statearr_135936_135977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (20))){
var inst_135900 = (state_135934[(7)]);
var inst_135911 = (state_135934[(2)]);
var inst_135912 = cljs.core.next.call(null,inst_135900);
var inst_135886 = inst_135912;
var inst_135887 = null;
var inst_135888 = (0);
var inst_135889 = (0);
var state_135934__$1 = (function (){var statearr_135937 = state_135934;
(statearr_135937[(8)] = inst_135887);

(statearr_135937[(9)] = inst_135888);

(statearr_135937[(10)] = inst_135889);

(statearr_135937[(11)] = inst_135886);

(statearr_135937[(12)] = inst_135911);

return statearr_135937;
})();
var statearr_135938_135978 = state_135934__$1;
(statearr_135938_135978[(2)] = null);

(statearr_135938_135978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (1))){
var state_135934__$1 = state_135934;
var statearr_135939_135979 = state_135934__$1;
(statearr_135939_135979[(2)] = null);

(statearr_135939_135979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (4))){
var inst_135875 = (state_135934[(13)]);
var inst_135875__$1 = (state_135934[(2)]);
var inst_135876 = (inst_135875__$1 == null);
var state_135934__$1 = (function (){var statearr_135940 = state_135934;
(statearr_135940[(13)] = inst_135875__$1);

return statearr_135940;
})();
if(cljs.core.truth_(inst_135876)){
var statearr_135941_135980 = state_135934__$1;
(statearr_135941_135980[(1)] = (5));

} else {
var statearr_135942_135981 = state_135934__$1;
(statearr_135942_135981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (15))){
var state_135934__$1 = state_135934;
var statearr_135946_135982 = state_135934__$1;
(statearr_135946_135982[(2)] = null);

(statearr_135946_135982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (21))){
var state_135934__$1 = state_135934;
var statearr_135947_135983 = state_135934__$1;
(statearr_135947_135983[(2)] = null);

(statearr_135947_135983[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (13))){
var inst_135887 = (state_135934[(8)]);
var inst_135888 = (state_135934[(9)]);
var inst_135889 = (state_135934[(10)]);
var inst_135886 = (state_135934[(11)]);
var inst_135896 = (state_135934[(2)]);
var inst_135897 = (inst_135889 + (1));
var tmp135943 = inst_135887;
var tmp135944 = inst_135888;
var tmp135945 = inst_135886;
var inst_135886__$1 = tmp135945;
var inst_135887__$1 = tmp135943;
var inst_135888__$1 = tmp135944;
var inst_135889__$1 = inst_135897;
var state_135934__$1 = (function (){var statearr_135948 = state_135934;
(statearr_135948[(8)] = inst_135887__$1);

(statearr_135948[(9)] = inst_135888__$1);

(statearr_135948[(14)] = inst_135896);

(statearr_135948[(10)] = inst_135889__$1);

(statearr_135948[(11)] = inst_135886__$1);

return statearr_135948;
})();
var statearr_135949_135984 = state_135934__$1;
(statearr_135949_135984[(2)] = null);

(statearr_135949_135984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (22))){
var state_135934__$1 = state_135934;
var statearr_135950_135985 = state_135934__$1;
(statearr_135950_135985[(2)] = null);

(statearr_135950_135985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (6))){
var inst_135875 = (state_135934[(13)]);
var inst_135884 = f.call(null,inst_135875);
var inst_135885 = cljs.core.seq.call(null,inst_135884);
var inst_135886 = inst_135885;
var inst_135887 = null;
var inst_135888 = (0);
var inst_135889 = (0);
var state_135934__$1 = (function (){var statearr_135951 = state_135934;
(statearr_135951[(8)] = inst_135887);

(statearr_135951[(9)] = inst_135888);

(statearr_135951[(10)] = inst_135889);

(statearr_135951[(11)] = inst_135886);

return statearr_135951;
})();
var statearr_135952_135986 = state_135934__$1;
(statearr_135952_135986[(2)] = null);

(statearr_135952_135986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (17))){
var inst_135900 = (state_135934[(7)]);
var inst_135904 = cljs.core.chunk_first.call(null,inst_135900);
var inst_135905 = cljs.core.chunk_rest.call(null,inst_135900);
var inst_135906 = cljs.core.count.call(null,inst_135904);
var inst_135886 = inst_135905;
var inst_135887 = inst_135904;
var inst_135888 = inst_135906;
var inst_135889 = (0);
var state_135934__$1 = (function (){var statearr_135953 = state_135934;
(statearr_135953[(8)] = inst_135887);

(statearr_135953[(9)] = inst_135888);

(statearr_135953[(10)] = inst_135889);

(statearr_135953[(11)] = inst_135886);

return statearr_135953;
})();
var statearr_135954_135987 = state_135934__$1;
(statearr_135954_135987[(2)] = null);

(statearr_135954_135987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (3))){
var inst_135932 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135934__$1,inst_135932);
} else {
if((state_val_135935 === (12))){
var inst_135920 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
var statearr_135955_135988 = state_135934__$1;
(statearr_135955_135988[(2)] = inst_135920);

(statearr_135955_135988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (2))){
var state_135934__$1 = state_135934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135934__$1,(4),in$);
} else {
if((state_val_135935 === (23))){
var inst_135928 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
var statearr_135956_135989 = state_135934__$1;
(statearr_135956_135989[(2)] = inst_135928);

(statearr_135956_135989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (19))){
var inst_135915 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
var statearr_135957_135990 = state_135934__$1;
(statearr_135957_135990[(2)] = inst_135915);

(statearr_135957_135990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (11))){
var inst_135886 = (state_135934[(11)]);
var inst_135900 = (state_135934[(7)]);
var inst_135900__$1 = cljs.core.seq.call(null,inst_135886);
var state_135934__$1 = (function (){var statearr_135958 = state_135934;
(statearr_135958[(7)] = inst_135900__$1);

return statearr_135958;
})();
if(inst_135900__$1){
var statearr_135959_135991 = state_135934__$1;
(statearr_135959_135991[(1)] = (14));

} else {
var statearr_135960_135992 = state_135934__$1;
(statearr_135960_135992[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (9))){
var inst_135922 = (state_135934[(2)]);
var inst_135923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_135934__$1 = (function (){var statearr_135961 = state_135934;
(statearr_135961[(15)] = inst_135922);

return statearr_135961;
})();
if(cljs.core.truth_(inst_135923)){
var statearr_135962_135993 = state_135934__$1;
(statearr_135962_135993[(1)] = (21));

} else {
var statearr_135963_135994 = state_135934__$1;
(statearr_135963_135994[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (5))){
var inst_135878 = cljs.core.async.close_BANG_.call(null,out);
var state_135934__$1 = state_135934;
var statearr_135964_135995 = state_135934__$1;
(statearr_135964_135995[(2)] = inst_135878);

(statearr_135964_135995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (14))){
var inst_135900 = (state_135934[(7)]);
var inst_135902 = cljs.core.chunked_seq_QMARK_.call(null,inst_135900);
var state_135934__$1 = state_135934;
if(inst_135902){
var statearr_135965_135996 = state_135934__$1;
(statearr_135965_135996[(1)] = (17));

} else {
var statearr_135966_135997 = state_135934__$1;
(statearr_135966_135997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (16))){
var inst_135918 = (state_135934[(2)]);
var state_135934__$1 = state_135934;
var statearr_135967_135998 = state_135934__$1;
(statearr_135967_135998[(2)] = inst_135918);

(statearr_135967_135998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135935 === (10))){
var inst_135887 = (state_135934[(8)]);
var inst_135889 = (state_135934[(10)]);
var inst_135894 = cljs.core._nth.call(null,inst_135887,inst_135889);
var state_135934__$1 = state_135934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135934__$1,(13),out,inst_135894);
} else {
if((state_val_135935 === (18))){
var inst_135900 = (state_135934[(7)]);
var inst_135909 = cljs.core.first.call(null,inst_135900);
var state_135934__$1 = state_135934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135934__$1,(20),out,inst_135909);
} else {
if((state_val_135935 === (8))){
var inst_135888 = (state_135934[(9)]);
var inst_135889 = (state_135934[(10)]);
var inst_135891 = (inst_135889 < inst_135888);
var inst_135892 = inst_135891;
var state_135934__$1 = state_135934;
if(cljs.core.truth_(inst_135892)){
var statearr_135968_135999 = state_135934__$1;
(statearr_135968_135999[(1)] = (10));

} else {
var statearr_135969_136000 = state_135934__$1;
(statearr_135969_136000[(1)] = (11));

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
});})(c__7043__auto__))
;
return ((function (switch__6987__auto__,c__7043__auto__){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_135973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135973[(0)] = state_machine__6988__auto__);

(statearr_135973[(1)] = (1));

return statearr_135973;
});
var state_machine__6988__auto____1 = (function (state_135934){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_135934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e135974){if((e135974 instanceof Object)){
var ex__6991__auto__ = e135974;
var statearr_135975_136001 = state_135934;
(statearr_135975_136001[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136002 = state_135934;
state_135934 = G__136002;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_135934){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_135934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_135976 = f__7044__auto__.call(null);
(statearr_135976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_135976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto__))
);

return c__7043__auto__;
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
var c__7043__auto___136099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___136099,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___136099,out){
return (function (state_136074){
var state_val_136075 = (state_136074[(1)]);
if((state_val_136075 === (7))){
var inst_136069 = (state_136074[(2)]);
var state_136074__$1 = state_136074;
var statearr_136076_136100 = state_136074__$1;
(statearr_136076_136100[(2)] = inst_136069);

(statearr_136076_136100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (1))){
var inst_136051 = null;
var state_136074__$1 = (function (){var statearr_136077 = state_136074;
(statearr_136077[(7)] = inst_136051);

return statearr_136077;
})();
var statearr_136078_136101 = state_136074__$1;
(statearr_136078_136101[(2)] = null);

(statearr_136078_136101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (4))){
var inst_136054 = (state_136074[(8)]);
var inst_136054__$1 = (state_136074[(2)]);
var inst_136055 = (inst_136054__$1 == null);
var inst_136056 = cljs.core.not.call(null,inst_136055);
var state_136074__$1 = (function (){var statearr_136079 = state_136074;
(statearr_136079[(8)] = inst_136054__$1);

return statearr_136079;
})();
if(inst_136056){
var statearr_136080_136102 = state_136074__$1;
(statearr_136080_136102[(1)] = (5));

} else {
var statearr_136081_136103 = state_136074__$1;
(statearr_136081_136103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (6))){
var state_136074__$1 = state_136074;
var statearr_136082_136104 = state_136074__$1;
(statearr_136082_136104[(2)] = null);

(statearr_136082_136104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (3))){
var inst_136071 = (state_136074[(2)]);
var inst_136072 = cljs.core.async.close_BANG_.call(null,out);
var state_136074__$1 = (function (){var statearr_136083 = state_136074;
(statearr_136083[(9)] = inst_136071);

return statearr_136083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136074__$1,inst_136072);
} else {
if((state_val_136075 === (2))){
var state_136074__$1 = state_136074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136074__$1,(4),ch);
} else {
if((state_val_136075 === (11))){
var inst_136054 = (state_136074[(8)]);
var inst_136063 = (state_136074[(2)]);
var inst_136051 = inst_136054;
var state_136074__$1 = (function (){var statearr_136084 = state_136074;
(statearr_136084[(7)] = inst_136051);

(statearr_136084[(10)] = inst_136063);

return statearr_136084;
})();
var statearr_136085_136105 = state_136074__$1;
(statearr_136085_136105[(2)] = null);

(statearr_136085_136105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (9))){
var inst_136054 = (state_136074[(8)]);
var state_136074__$1 = state_136074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136074__$1,(11),out,inst_136054);
} else {
if((state_val_136075 === (5))){
var inst_136054 = (state_136074[(8)]);
var inst_136051 = (state_136074[(7)]);
var inst_136058 = cljs.core._EQ_.call(null,inst_136054,inst_136051);
var state_136074__$1 = state_136074;
if(inst_136058){
var statearr_136087_136106 = state_136074__$1;
(statearr_136087_136106[(1)] = (8));

} else {
var statearr_136088_136107 = state_136074__$1;
(statearr_136088_136107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (10))){
var inst_136066 = (state_136074[(2)]);
var state_136074__$1 = state_136074;
var statearr_136089_136108 = state_136074__$1;
(statearr_136089_136108[(2)] = inst_136066);

(statearr_136089_136108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136075 === (8))){
var inst_136051 = (state_136074[(7)]);
var tmp136086 = inst_136051;
var inst_136051__$1 = tmp136086;
var state_136074__$1 = (function (){var statearr_136090 = state_136074;
(statearr_136090[(7)] = inst_136051__$1);

return statearr_136090;
})();
var statearr_136091_136109 = state_136074__$1;
(statearr_136091_136109[(2)] = null);

(statearr_136091_136109[(1)] = (2));


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
});})(c__7043__auto___136099,out))
;
return ((function (switch__6987__auto__,c__7043__auto___136099,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_136095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_136095[(0)] = state_machine__6988__auto__);

(statearr_136095[(1)] = (1));

return statearr_136095;
});
var state_machine__6988__auto____1 = (function (state_136074){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_136074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e136096){if((e136096 instanceof Object)){
var ex__6991__auto__ = e136096;
var statearr_136097_136110 = state_136074;
(statearr_136097_136110[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136111 = state_136074;
state_136074 = G__136111;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_136074){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_136074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___136099,out))
})();
var state__7045__auto__ = (function (){var statearr_136098 = f__7044__auto__.call(null);
(statearr_136098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___136099);

return statearr_136098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___136099,out))
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
var c__7043__auto___136246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___136246,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___136246,out){
return (function (state_136216){
var state_val_136217 = (state_136216[(1)]);
if((state_val_136217 === (7))){
var inst_136212 = (state_136216[(2)]);
var state_136216__$1 = state_136216;
var statearr_136218_136247 = state_136216__$1;
(statearr_136218_136247[(2)] = inst_136212);

(statearr_136218_136247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (1))){
var inst_136179 = (new Array(n));
var inst_136180 = inst_136179;
var inst_136181 = (0);
var state_136216__$1 = (function (){var statearr_136219 = state_136216;
(statearr_136219[(7)] = inst_136181);

(statearr_136219[(8)] = inst_136180);

return statearr_136219;
})();
var statearr_136220_136248 = state_136216__$1;
(statearr_136220_136248[(2)] = null);

(statearr_136220_136248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (4))){
var inst_136184 = (state_136216[(9)]);
var inst_136184__$1 = (state_136216[(2)]);
var inst_136185 = (inst_136184__$1 == null);
var inst_136186 = cljs.core.not.call(null,inst_136185);
var state_136216__$1 = (function (){var statearr_136221 = state_136216;
(statearr_136221[(9)] = inst_136184__$1);

return statearr_136221;
})();
if(inst_136186){
var statearr_136222_136249 = state_136216__$1;
(statearr_136222_136249[(1)] = (5));

} else {
var statearr_136223_136250 = state_136216__$1;
(statearr_136223_136250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (15))){
var inst_136206 = (state_136216[(2)]);
var state_136216__$1 = state_136216;
var statearr_136224_136251 = state_136216__$1;
(statearr_136224_136251[(2)] = inst_136206);

(statearr_136224_136251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (13))){
var state_136216__$1 = state_136216;
var statearr_136225_136252 = state_136216__$1;
(statearr_136225_136252[(2)] = null);

(statearr_136225_136252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (6))){
var inst_136181 = (state_136216[(7)]);
var inst_136202 = (inst_136181 > (0));
var state_136216__$1 = state_136216;
if(cljs.core.truth_(inst_136202)){
var statearr_136226_136253 = state_136216__$1;
(statearr_136226_136253[(1)] = (12));

} else {
var statearr_136227_136254 = state_136216__$1;
(statearr_136227_136254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (3))){
var inst_136214 = (state_136216[(2)]);
var state_136216__$1 = state_136216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136216__$1,inst_136214);
} else {
if((state_val_136217 === (12))){
var inst_136180 = (state_136216[(8)]);
var inst_136204 = cljs.core.vec.call(null,inst_136180);
var state_136216__$1 = state_136216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136216__$1,(15),out,inst_136204);
} else {
if((state_val_136217 === (2))){
var state_136216__$1 = state_136216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136216__$1,(4),ch);
} else {
if((state_val_136217 === (11))){
var inst_136196 = (state_136216[(2)]);
var inst_136197 = (new Array(n));
var inst_136180 = inst_136197;
var inst_136181 = (0);
var state_136216__$1 = (function (){var statearr_136228 = state_136216;
(statearr_136228[(10)] = inst_136196);

(statearr_136228[(7)] = inst_136181);

(statearr_136228[(8)] = inst_136180);

return statearr_136228;
})();
var statearr_136229_136255 = state_136216__$1;
(statearr_136229_136255[(2)] = null);

(statearr_136229_136255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (9))){
var inst_136180 = (state_136216[(8)]);
var inst_136194 = cljs.core.vec.call(null,inst_136180);
var state_136216__$1 = state_136216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136216__$1,(11),out,inst_136194);
} else {
if((state_val_136217 === (5))){
var inst_136184 = (state_136216[(9)]);
var inst_136189 = (state_136216[(11)]);
var inst_136181 = (state_136216[(7)]);
var inst_136180 = (state_136216[(8)]);
var inst_136188 = (inst_136180[inst_136181] = inst_136184);
var inst_136189__$1 = (inst_136181 + (1));
var inst_136190 = (inst_136189__$1 < n);
var state_136216__$1 = (function (){var statearr_136230 = state_136216;
(statearr_136230[(11)] = inst_136189__$1);

(statearr_136230[(12)] = inst_136188);

return statearr_136230;
})();
if(cljs.core.truth_(inst_136190)){
var statearr_136231_136256 = state_136216__$1;
(statearr_136231_136256[(1)] = (8));

} else {
var statearr_136232_136257 = state_136216__$1;
(statearr_136232_136257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (14))){
var inst_136209 = (state_136216[(2)]);
var inst_136210 = cljs.core.async.close_BANG_.call(null,out);
var state_136216__$1 = (function (){var statearr_136234 = state_136216;
(statearr_136234[(13)] = inst_136209);

return statearr_136234;
})();
var statearr_136235_136258 = state_136216__$1;
(statearr_136235_136258[(2)] = inst_136210);

(statearr_136235_136258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (10))){
var inst_136200 = (state_136216[(2)]);
var state_136216__$1 = state_136216;
var statearr_136236_136259 = state_136216__$1;
(statearr_136236_136259[(2)] = inst_136200);

(statearr_136236_136259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136217 === (8))){
var inst_136189 = (state_136216[(11)]);
var inst_136180 = (state_136216[(8)]);
var tmp136233 = inst_136180;
var inst_136180__$1 = tmp136233;
var inst_136181 = inst_136189;
var state_136216__$1 = (function (){var statearr_136237 = state_136216;
(statearr_136237[(7)] = inst_136181);

(statearr_136237[(8)] = inst_136180__$1);

return statearr_136237;
})();
var statearr_136238_136260 = state_136216__$1;
(statearr_136238_136260[(2)] = null);

(statearr_136238_136260[(1)] = (2));


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
});})(c__7043__auto___136246,out))
;
return ((function (switch__6987__auto__,c__7043__auto___136246,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_136242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_136242[(0)] = state_machine__6988__auto__);

(statearr_136242[(1)] = (1));

return statearr_136242;
});
var state_machine__6988__auto____1 = (function (state_136216){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_136216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e136243){if((e136243 instanceof Object)){
var ex__6991__auto__ = e136243;
var statearr_136244_136261 = state_136216;
(statearr_136244_136261[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136262 = state_136216;
state_136216 = G__136262;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_136216){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_136216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___136246,out))
})();
var state__7045__auto__ = (function (){var statearr_136245 = f__7044__auto__.call(null);
(statearr_136245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___136246);

return statearr_136245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___136246,out))
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
var c__7043__auto___136405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___136405,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___136405,out){
return (function (state_136375){
var state_val_136376 = (state_136375[(1)]);
if((state_val_136376 === (7))){
var inst_136371 = (state_136375[(2)]);
var state_136375__$1 = state_136375;
var statearr_136377_136406 = state_136375__$1;
(statearr_136377_136406[(2)] = inst_136371);

(statearr_136377_136406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (1))){
var inst_136334 = [];
var inst_136335 = inst_136334;
var inst_136336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_136375__$1 = (function (){var statearr_136378 = state_136375;
(statearr_136378[(7)] = inst_136335);

(statearr_136378[(8)] = inst_136336);

return statearr_136378;
})();
var statearr_136379_136407 = state_136375__$1;
(statearr_136379_136407[(2)] = null);

(statearr_136379_136407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (4))){
var inst_136339 = (state_136375[(9)]);
var inst_136339__$1 = (state_136375[(2)]);
var inst_136340 = (inst_136339__$1 == null);
var inst_136341 = cljs.core.not.call(null,inst_136340);
var state_136375__$1 = (function (){var statearr_136380 = state_136375;
(statearr_136380[(9)] = inst_136339__$1);

return statearr_136380;
})();
if(inst_136341){
var statearr_136381_136408 = state_136375__$1;
(statearr_136381_136408[(1)] = (5));

} else {
var statearr_136382_136409 = state_136375__$1;
(statearr_136382_136409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (15))){
var inst_136365 = (state_136375[(2)]);
var state_136375__$1 = state_136375;
var statearr_136383_136410 = state_136375__$1;
(statearr_136383_136410[(2)] = inst_136365);

(statearr_136383_136410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (13))){
var state_136375__$1 = state_136375;
var statearr_136384_136411 = state_136375__$1;
(statearr_136384_136411[(2)] = null);

(statearr_136384_136411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (6))){
var inst_136335 = (state_136375[(7)]);
var inst_136360 = inst_136335.length;
var inst_136361 = (inst_136360 > (0));
var state_136375__$1 = state_136375;
if(cljs.core.truth_(inst_136361)){
var statearr_136385_136412 = state_136375__$1;
(statearr_136385_136412[(1)] = (12));

} else {
var statearr_136386_136413 = state_136375__$1;
(statearr_136386_136413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (3))){
var inst_136373 = (state_136375[(2)]);
var state_136375__$1 = state_136375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136375__$1,inst_136373);
} else {
if((state_val_136376 === (12))){
var inst_136335 = (state_136375[(7)]);
var inst_136363 = cljs.core.vec.call(null,inst_136335);
var state_136375__$1 = state_136375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136375__$1,(15),out,inst_136363);
} else {
if((state_val_136376 === (2))){
var state_136375__$1 = state_136375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136375__$1,(4),ch);
} else {
if((state_val_136376 === (11))){
var inst_136339 = (state_136375[(9)]);
var inst_136343 = (state_136375[(10)]);
var inst_136353 = (state_136375[(2)]);
var inst_136354 = [];
var inst_136355 = inst_136354.push(inst_136339);
var inst_136335 = inst_136354;
var inst_136336 = inst_136343;
var state_136375__$1 = (function (){var statearr_136387 = state_136375;
(statearr_136387[(11)] = inst_136353);

(statearr_136387[(7)] = inst_136335);

(statearr_136387[(8)] = inst_136336);

(statearr_136387[(12)] = inst_136355);

return statearr_136387;
})();
var statearr_136388_136414 = state_136375__$1;
(statearr_136388_136414[(2)] = null);

(statearr_136388_136414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (9))){
var inst_136335 = (state_136375[(7)]);
var inst_136351 = cljs.core.vec.call(null,inst_136335);
var state_136375__$1 = state_136375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136375__$1,(11),out,inst_136351);
} else {
if((state_val_136376 === (5))){
var inst_136339 = (state_136375[(9)]);
var inst_136343 = (state_136375[(10)]);
var inst_136336 = (state_136375[(8)]);
var inst_136343__$1 = f.call(null,inst_136339);
var inst_136344 = cljs.core._EQ_.call(null,inst_136343__$1,inst_136336);
var inst_136345 = cljs.core.keyword_identical_QMARK_.call(null,inst_136336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_136346 = (inst_136344) || (inst_136345);
var state_136375__$1 = (function (){var statearr_136389 = state_136375;
(statearr_136389[(10)] = inst_136343__$1);

return statearr_136389;
})();
if(cljs.core.truth_(inst_136346)){
var statearr_136390_136415 = state_136375__$1;
(statearr_136390_136415[(1)] = (8));

} else {
var statearr_136391_136416 = state_136375__$1;
(statearr_136391_136416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (14))){
var inst_136368 = (state_136375[(2)]);
var inst_136369 = cljs.core.async.close_BANG_.call(null,out);
var state_136375__$1 = (function (){var statearr_136393 = state_136375;
(statearr_136393[(13)] = inst_136368);

return statearr_136393;
})();
var statearr_136394_136417 = state_136375__$1;
(statearr_136394_136417[(2)] = inst_136369);

(statearr_136394_136417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (10))){
var inst_136358 = (state_136375[(2)]);
var state_136375__$1 = state_136375;
var statearr_136395_136418 = state_136375__$1;
(statearr_136395_136418[(2)] = inst_136358);

(statearr_136395_136418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136376 === (8))){
var inst_136339 = (state_136375[(9)]);
var inst_136335 = (state_136375[(7)]);
var inst_136343 = (state_136375[(10)]);
var inst_136348 = inst_136335.push(inst_136339);
var tmp136392 = inst_136335;
var inst_136335__$1 = tmp136392;
var inst_136336 = inst_136343;
var state_136375__$1 = (function (){var statearr_136396 = state_136375;
(statearr_136396[(7)] = inst_136335__$1);

(statearr_136396[(14)] = inst_136348);

(statearr_136396[(8)] = inst_136336);

return statearr_136396;
})();
var statearr_136397_136419 = state_136375__$1;
(statearr_136397_136419[(2)] = null);

(statearr_136397_136419[(1)] = (2));


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
});})(c__7043__auto___136405,out))
;
return ((function (switch__6987__auto__,c__7043__auto___136405,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_136401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_136401[(0)] = state_machine__6988__auto__);

(statearr_136401[(1)] = (1));

return statearr_136401;
});
var state_machine__6988__auto____1 = (function (state_136375){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_136375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e136402){if((e136402 instanceof Object)){
var ex__6991__auto__ = e136402;
var statearr_136403_136420 = state_136375;
(statearr_136403_136420[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136421 = state_136375;
state_136375 = G__136421;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_136375){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_136375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___136405,out))
})();
var state__7045__auto__ = (function (){var statearr_136404 = f__7044__auto__.call(null);
(statearr_136404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___136405);

return statearr_136404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___136405,out))
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