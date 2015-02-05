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
if(typeof cljs.core.async.t22912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22912 = (function (f,fn_handler,meta22913){
this.f = f;
this.fn_handler = fn_handler;
this.meta22913 = meta22913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22912.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22914){
var self__ = this;
var _22914__$1 = this;
return self__.meta22913;
});

cljs.core.async.t22912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22914,meta22913__$1){
var self__ = this;
var _22914__$1 = this;
return (new cljs.core.async.t22912(self__.f,self__.fn_handler,meta22913__$1));
});

cljs.core.async.t22912.cljs$lang$type = true;

cljs.core.async.t22912.cljs$lang$ctorStr = "cljs.core.async/t22912";

cljs.core.async.t22912.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t22912");
});

cljs.core.async.__GT_t22912 = (function __GT_t22912(f__$1,fn_handler__$1,meta22913){
return (new cljs.core.async.t22912(f__$1,fn_handler__$1,meta22913));
});

}

return (new cljs.core.async.t22912(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__22916 = buff;
if(G__22916){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__22916.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22916);
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
var val_22917 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22917);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22917,ret){
return (function (){
return fn1.call(null,val_22917);
});})(val_22917,ret))
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
var n__4509__auto___22918 = n;
var x_22919 = (0);
while(true){
if((x_22919 < n__4509__auto___22918)){
(a[x_22919] = (0));

var G__22920 = (x_22919 + (1));
x_22919 = G__22920;
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

var G__22921 = (i + (1));
i = G__22921;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22925 = (function (flag,alt_flag,meta22926){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22926 = meta22926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22927){
var self__ = this;
var _22927__$1 = this;
return self__.meta22926;
});})(flag))
;

cljs.core.async.t22925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22927,meta22926__$1){
var self__ = this;
var _22927__$1 = this;
return (new cljs.core.async.t22925(self__.flag,self__.alt_flag,meta22926__$1));
});})(flag))
;

cljs.core.async.t22925.cljs$lang$type = true;

cljs.core.async.t22925.cljs$lang$ctorStr = "cljs.core.async/t22925";

cljs.core.async.t22925.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t22925");
});})(flag))
;

cljs.core.async.__GT_t22925 = ((function (flag){
return (function __GT_t22925(flag__$1,alt_flag__$1,meta22926){
return (new cljs.core.async.t22925(flag__$1,alt_flag__$1,meta22926));
});})(flag))
;

}

return (new cljs.core.async.t22925(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22931 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22931 = (function (cb,flag,alt_handler,meta22932){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22932 = meta22932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22933){
var self__ = this;
var _22933__$1 = this;
return self__.meta22932;
});

cljs.core.async.t22931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22933,meta22932__$1){
var self__ = this;
var _22933__$1 = this;
return (new cljs.core.async.t22931(self__.cb,self__.flag,self__.alt_handler,meta22932__$1));
});

cljs.core.async.t22931.cljs$lang$type = true;

cljs.core.async.t22931.cljs$lang$ctorStr = "cljs.core.async/t22931";

cljs.core.async.t22931.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t22931");
});

cljs.core.async.__GT_t22931 = (function __GT_t22931(cb__$1,flag__$1,alt_handler__$1,meta22932){
return (new cljs.core.async.t22931(cb__$1,flag__$1,alt_handler__$1,meta22932));
});

}

return (new cljs.core.async.t22931(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__22934_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22934_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22935_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22935_SHARP_,port], null));
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
var G__22936 = (i + (1));
i = G__22936;
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
var alts_BANG___delegate = function (ports,p__22937){
var map__22939 = p__22937;
var map__22939__$1 = ((cljs.core.seq_QMARK_.call(null,map__22939))?cljs.core.apply.call(null,cljs.core.hash_map,map__22939):map__22939);
var opts = map__22939__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22937 = null;
if (arguments.length > 1) {
  p__22937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22937);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22940){
var ports = cljs.core.first(arglist__22940);
var p__22937 = cljs.core.rest(arglist__22940);
return alts_BANG___delegate(ports,p__22937);
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
var c__7043__auto___23035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23035){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23035){
return (function (state_23011){
var state_val_23012 = (state_23011[(1)]);
if((state_val_23012 === (7))){
var inst_23007 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
var statearr_23013_23036 = state_23011__$1;
(statearr_23013_23036[(2)] = inst_23007);

(statearr_23013_23036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (1))){
var state_23011__$1 = state_23011;
var statearr_23014_23037 = state_23011__$1;
(statearr_23014_23037[(2)] = null);

(statearr_23014_23037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (4))){
var inst_22990 = (state_23011[(7)]);
var inst_22990__$1 = (state_23011[(2)]);
var inst_22991 = (inst_22990__$1 == null);
var state_23011__$1 = (function (){var statearr_23015 = state_23011;
(statearr_23015[(7)] = inst_22990__$1);

return statearr_23015;
})();
if(cljs.core.truth_(inst_22991)){
var statearr_23016_23038 = state_23011__$1;
(statearr_23016_23038[(1)] = (5));

} else {
var statearr_23017_23039 = state_23011__$1;
(statearr_23017_23039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (13))){
var state_23011__$1 = state_23011;
var statearr_23018_23040 = state_23011__$1;
(statearr_23018_23040[(2)] = null);

(statearr_23018_23040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (6))){
var inst_22990 = (state_23011[(7)]);
var state_23011__$1 = state_23011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23011__$1,(11),to,inst_22990);
} else {
if((state_val_23012 === (3))){
var inst_23009 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23011__$1,inst_23009);
} else {
if((state_val_23012 === (12))){
var state_23011__$1 = state_23011;
var statearr_23019_23041 = state_23011__$1;
(statearr_23019_23041[(2)] = null);

(statearr_23019_23041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (2))){
var state_23011__$1 = state_23011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23011__$1,(4),from);
} else {
if((state_val_23012 === (11))){
var inst_23000 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
if(cljs.core.truth_(inst_23000)){
var statearr_23020_23042 = state_23011__$1;
(statearr_23020_23042[(1)] = (12));

} else {
var statearr_23021_23043 = state_23011__$1;
(statearr_23021_23043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (9))){
var state_23011__$1 = state_23011;
var statearr_23022_23044 = state_23011__$1;
(statearr_23022_23044[(2)] = null);

(statearr_23022_23044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (5))){
var state_23011__$1 = state_23011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23023_23045 = state_23011__$1;
(statearr_23023_23045[(1)] = (8));

} else {
var statearr_23024_23046 = state_23011__$1;
(statearr_23024_23046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (14))){
var inst_23005 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
var statearr_23025_23047 = state_23011__$1;
(statearr_23025_23047[(2)] = inst_23005);

(statearr_23025_23047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (10))){
var inst_22997 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
var statearr_23026_23048 = state_23011__$1;
(statearr_23026_23048[(2)] = inst_22997);

(statearr_23026_23048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (8))){
var inst_22994 = cljs.core.async.close_BANG_.call(null,to);
var state_23011__$1 = state_23011;
var statearr_23027_23049 = state_23011__$1;
(statearr_23027_23049[(2)] = inst_22994);

(statearr_23027_23049[(1)] = (10));


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
});})(c__7043__auto___23035))
;
return ((function (switch__6987__auto__,c__7043__auto___23035){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23031 = [null,null,null,null,null,null,null,null];
(statearr_23031[(0)] = state_machine__6988__auto__);

(statearr_23031[(1)] = (1));

return statearr_23031;
});
var state_machine__6988__auto____1 = (function (state_23011){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23032){if((e23032 instanceof Object)){
var ex__6991__auto__ = e23032;
var statearr_23033_23050 = state_23011;
(statearr_23033_23050[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23051 = state_23011;
state_23011 = G__23051;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23011){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23035))
})();
var state__7045__auto__ = (function (){var statearr_23034 = f__7044__auto__.call(null);
(statearr_23034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23035);

return statearr_23034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23035))
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
return (function (p__23235){
var vec__23236 = p__23235;
var v = cljs.core.nth.call(null,vec__23236,(0),null);
var p = cljs.core.nth.call(null,vec__23236,(1),null);
var job = vec__23236;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___23418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results){
return (function (state_23241){
var state_val_23242 = (state_23241[(1)]);
if((state_val_23242 === (2))){
var inst_23238 = (state_23241[(2)]);
var inst_23239 = cljs.core.async.close_BANG_.call(null,res);
var state_23241__$1 = (function (){var statearr_23243 = state_23241;
(statearr_23243[(7)] = inst_23238);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23241__$1,inst_23239);
} else {
if((state_val_23242 === (1))){
var state_23241__$1 = state_23241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23241__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23247 = [null,null,null,null,null,null,null,null];
(statearr_23247[(0)] = state_machine__6988__auto__);

(statearr_23247[(1)] = (1));

return statearr_23247;
});
var state_machine__6988__auto____1 = (function (state_23241){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23248){if((e23248 instanceof Object)){
var ex__6991__auto__ = e23248;
var statearr_23249_23419 = state_23241;
(statearr_23249_23419[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23420 = state_23241;
state_23241 = G__23420;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23241){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_23250 = f__7044__auto__.call(null);
(statearr_23250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23418);

return statearr_23250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23418,res,vec__23236,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23251){
var vec__23252 = p__23251;
var v = cljs.core.nth.call(null,vec__23252,(0),null);
var p = cljs.core.nth.call(null,vec__23252,(1),null);
var job = vec__23252;
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
var n__4509__auto___23421 = n;
var __23422 = (0);
while(true){
if((__23422 < n__4509__auto___23421)){
var G__23253_23423 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23253_23423) {
case "async":
var c__7043__auto___23425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23422,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23422,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function (state_23266){
var state_val_23267 = (state_23266[(1)]);
if((state_val_23267 === (7))){
var inst_23262 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
var statearr_23268_23426 = state_23266__$1;
(statearr_23268_23426[(2)] = inst_23262);

(statearr_23268_23426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (6))){
var state_23266__$1 = state_23266;
var statearr_23269_23427 = state_23266__$1;
(statearr_23269_23427[(2)] = null);

(statearr_23269_23427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (5))){
var state_23266__$1 = state_23266;
var statearr_23270_23428 = state_23266__$1;
(statearr_23270_23428[(2)] = null);

(statearr_23270_23428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (4))){
var inst_23256 = (state_23266[(2)]);
var inst_23257 = async.call(null,inst_23256);
var state_23266__$1 = state_23266;
if(cljs.core.truth_(inst_23257)){
var statearr_23271_23429 = state_23266__$1;
(statearr_23271_23429[(1)] = (5));

} else {
var statearr_23272_23430 = state_23266__$1;
(statearr_23272_23430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (3))){
var inst_23264 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23266__$1,inst_23264);
} else {
if((state_val_23267 === (2))){
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23266__$1,(4),jobs);
} else {
if((state_val_23267 === (1))){
var state_23266__$1 = state_23266;
var statearr_23273_23431 = state_23266__$1;
(statearr_23273_23431[(2)] = null);

(statearr_23273_23431[(1)] = (2));


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
});})(__23422,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
;
return ((function (__23422,switch__6987__auto__,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23277 = [null,null,null,null,null,null,null];
(statearr_23277[(0)] = state_machine__6988__auto__);

(statearr_23277[(1)] = (1));

return statearr_23277;
});
var state_machine__6988__auto____1 = (function (state_23266){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23278){if((e23278 instanceof Object)){
var ex__6991__auto__ = e23278;
var statearr_23279_23432 = state_23266;
(statearr_23279_23432[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23433 = state_23266;
state_23266 = G__23433;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23266){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23422,switch__6987__auto__,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23280 = f__7044__auto__.call(null);
(statearr_23280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23425);

return statearr_23280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23422,c__7043__auto___23425,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___23434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23422,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23422,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function (state_23293){
var state_val_23294 = (state_23293[(1)]);
if((state_val_23294 === (7))){
var inst_23289 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23295_23435 = state_23293__$1;
(statearr_23295_23435[(2)] = inst_23289);

(statearr_23295_23435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (6))){
var state_23293__$1 = state_23293;
var statearr_23296_23436 = state_23293__$1;
(statearr_23296_23436[(2)] = null);

(statearr_23296_23436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (5))){
var state_23293__$1 = state_23293;
var statearr_23297_23437 = state_23293__$1;
(statearr_23297_23437[(2)] = null);

(statearr_23297_23437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (4))){
var inst_23283 = (state_23293[(2)]);
var inst_23284 = process.call(null,inst_23283);
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23284)){
var statearr_23298_23438 = state_23293__$1;
(statearr_23298_23438[(1)] = (5));

} else {
var statearr_23299_23439 = state_23293__$1;
(statearr_23299_23439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (3))){
var inst_23291 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23293__$1,inst_23291);
} else {
if((state_val_23294 === (2))){
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23293__$1,(4),jobs);
} else {
if((state_val_23294 === (1))){
var state_23293__$1 = state_23293;
var statearr_23300_23440 = state_23293__$1;
(statearr_23300_23440[(2)] = null);

(statearr_23300_23440[(1)] = (2));


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
});})(__23422,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
;
return ((function (__23422,switch__6987__auto__,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23304 = [null,null,null,null,null,null,null];
(statearr_23304[(0)] = state_machine__6988__auto__);

(statearr_23304[(1)] = (1));

return statearr_23304;
});
var state_machine__6988__auto____1 = (function (state_23293){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23305){if((e23305 instanceof Object)){
var ex__6991__auto__ = e23305;
var statearr_23306_23441 = state_23293;
(statearr_23306_23441[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23442 = state_23293;
state_23293 = G__23442;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23293){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23422,switch__6987__auto__,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23307 = f__7044__auto__.call(null);
(statearr_23307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23434);

return statearr_23307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23422,c__7043__auto___23434,G__23253_23423,n__4509__auto___23421,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23443 = (__23422 + (1));
__23422 = G__23443;
continue;
} else {
}
break;
}

var c__7043__auto___23444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23444,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23444,jobs,results,process,async){
return (function (state_23329){
var state_val_23330 = (state_23329[(1)]);
if((state_val_23330 === (9))){
var inst_23322 = (state_23329[(2)]);
var state_23329__$1 = (function (){var statearr_23331 = state_23329;
(statearr_23331[(7)] = inst_23322);

return statearr_23331;
})();
var statearr_23332_23445 = state_23329__$1;
(statearr_23332_23445[(2)] = null);

(statearr_23332_23445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (8))){
var inst_23315 = (state_23329[(8)]);
var inst_23320 = (state_23329[(2)]);
var state_23329__$1 = (function (){var statearr_23333 = state_23329;
(statearr_23333[(9)] = inst_23320);

return statearr_23333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23329__$1,(9),results,inst_23315);
} else {
if((state_val_23330 === (7))){
var inst_23325 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
var statearr_23334_23446 = state_23329__$1;
(statearr_23334_23446[(2)] = inst_23325);

(statearr_23334_23446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (6))){
var inst_23315 = (state_23329[(8)]);
var inst_23310 = (state_23329[(10)]);
var inst_23315__$1 = cljs.core.async.chan.call(null,(1));
var inst_23316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23317 = [inst_23310,inst_23315__$1];
var inst_23318 = (new cljs.core.PersistentVector(null,2,(5),inst_23316,inst_23317,null));
var state_23329__$1 = (function (){var statearr_23335 = state_23329;
(statearr_23335[(8)] = inst_23315__$1);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23329__$1,(8),jobs,inst_23318);
} else {
if((state_val_23330 === (5))){
var inst_23313 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23329__$1 = state_23329;
var statearr_23336_23447 = state_23329__$1;
(statearr_23336_23447[(2)] = inst_23313);

(statearr_23336_23447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (4))){
var inst_23310 = (state_23329[(10)]);
var inst_23310__$1 = (state_23329[(2)]);
var inst_23311 = (inst_23310__$1 == null);
var state_23329__$1 = (function (){var statearr_23337 = state_23329;
(statearr_23337[(10)] = inst_23310__$1);

return statearr_23337;
})();
if(cljs.core.truth_(inst_23311)){
var statearr_23338_23448 = state_23329__$1;
(statearr_23338_23448[(1)] = (5));

} else {
var statearr_23339_23449 = state_23329__$1;
(statearr_23339_23449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (3))){
var inst_23327 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23329__$1,inst_23327);
} else {
if((state_val_23330 === (2))){
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23329__$1,(4),from);
} else {
if((state_val_23330 === (1))){
var state_23329__$1 = state_23329;
var statearr_23340_23450 = state_23329__$1;
(statearr_23340_23450[(2)] = null);

(statearr_23340_23450[(1)] = (2));


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
});})(c__7043__auto___23444,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___23444,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23344[(0)] = state_machine__6988__auto__);

(statearr_23344[(1)] = (1));

return statearr_23344;
});
var state_machine__6988__auto____1 = (function (state_23329){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23345){if((e23345 instanceof Object)){
var ex__6991__auto__ = e23345;
var statearr_23346_23451 = state_23329;
(statearr_23346_23451[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23452 = state_23329;
state_23329 = G__23452;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23329){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23444,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23347 = f__7044__auto__.call(null);
(statearr_23347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23444);

return statearr_23347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23444,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_23385){
var state_val_23386 = (state_23385[(1)]);
if((state_val_23386 === (7))){
var inst_23381 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23387_23453 = state_23385__$1;
(statearr_23387_23453[(2)] = inst_23381);

(statearr_23387_23453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (20))){
var state_23385__$1 = state_23385;
var statearr_23388_23454 = state_23385__$1;
(statearr_23388_23454[(2)] = null);

(statearr_23388_23454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (1))){
var state_23385__$1 = state_23385;
var statearr_23389_23455 = state_23385__$1;
(statearr_23389_23455[(2)] = null);

(statearr_23389_23455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (4))){
var inst_23350 = (state_23385[(7)]);
var inst_23350__$1 = (state_23385[(2)]);
var inst_23351 = (inst_23350__$1 == null);
var state_23385__$1 = (function (){var statearr_23390 = state_23385;
(statearr_23390[(7)] = inst_23350__$1);

return statearr_23390;
})();
if(cljs.core.truth_(inst_23351)){
var statearr_23391_23456 = state_23385__$1;
(statearr_23391_23456[(1)] = (5));

} else {
var statearr_23392_23457 = state_23385__$1;
(statearr_23392_23457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (15))){
var inst_23363 = (state_23385[(8)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23385__$1,(18),to,inst_23363);
} else {
if((state_val_23386 === (21))){
var inst_23376 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23393_23458 = state_23385__$1;
(statearr_23393_23458[(2)] = inst_23376);

(statearr_23393_23458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (13))){
var inst_23378 = (state_23385[(2)]);
var state_23385__$1 = (function (){var statearr_23394 = state_23385;
(statearr_23394[(9)] = inst_23378);

return statearr_23394;
})();
var statearr_23395_23459 = state_23385__$1;
(statearr_23395_23459[(2)] = null);

(statearr_23395_23459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (6))){
var inst_23350 = (state_23385[(7)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23385__$1,(11),inst_23350);
} else {
if((state_val_23386 === (17))){
var inst_23371 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
if(cljs.core.truth_(inst_23371)){
var statearr_23396_23460 = state_23385__$1;
(statearr_23396_23460[(1)] = (19));

} else {
var statearr_23397_23461 = state_23385__$1;
(statearr_23397_23461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (3))){
var inst_23383 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23385__$1,inst_23383);
} else {
if((state_val_23386 === (12))){
var inst_23360 = (state_23385[(10)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23385__$1,(14),inst_23360);
} else {
if((state_val_23386 === (2))){
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23385__$1,(4),results);
} else {
if((state_val_23386 === (19))){
var state_23385__$1 = state_23385;
var statearr_23398_23462 = state_23385__$1;
(statearr_23398_23462[(2)] = null);

(statearr_23398_23462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (11))){
var inst_23360 = (state_23385[(2)]);
var state_23385__$1 = (function (){var statearr_23399 = state_23385;
(statearr_23399[(10)] = inst_23360);

return statearr_23399;
})();
var statearr_23400_23463 = state_23385__$1;
(statearr_23400_23463[(2)] = null);

(statearr_23400_23463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (9))){
var state_23385__$1 = state_23385;
var statearr_23401_23464 = state_23385__$1;
(statearr_23401_23464[(2)] = null);

(statearr_23401_23464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (5))){
var state_23385__$1 = state_23385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23402_23465 = state_23385__$1;
(statearr_23402_23465[(1)] = (8));

} else {
var statearr_23403_23466 = state_23385__$1;
(statearr_23403_23466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (14))){
var inst_23363 = (state_23385[(8)]);
var inst_23365 = (state_23385[(11)]);
var inst_23363__$1 = (state_23385[(2)]);
var inst_23364 = (inst_23363__$1 == null);
var inst_23365__$1 = cljs.core.not.call(null,inst_23364);
var state_23385__$1 = (function (){var statearr_23404 = state_23385;
(statearr_23404[(8)] = inst_23363__$1);

(statearr_23404[(11)] = inst_23365__$1);

return statearr_23404;
})();
if(inst_23365__$1){
var statearr_23405_23467 = state_23385__$1;
(statearr_23405_23467[(1)] = (15));

} else {
var statearr_23406_23468 = state_23385__$1;
(statearr_23406_23468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (16))){
var inst_23365 = (state_23385[(11)]);
var state_23385__$1 = state_23385;
var statearr_23407_23469 = state_23385__$1;
(statearr_23407_23469[(2)] = inst_23365);

(statearr_23407_23469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (10))){
var inst_23357 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23408_23470 = state_23385__$1;
(statearr_23408_23470[(2)] = inst_23357);

(statearr_23408_23470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (18))){
var inst_23368 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23409_23471 = state_23385__$1;
(statearr_23409_23471[(2)] = inst_23368);

(statearr_23409_23471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (8))){
var inst_23354 = cljs.core.async.close_BANG_.call(null,to);
var state_23385__$1 = state_23385;
var statearr_23410_23472 = state_23385__$1;
(statearr_23410_23472[(2)] = inst_23354);

(statearr_23410_23472[(1)] = (10));


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
var statearr_23414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23414[(0)] = state_machine__6988__auto__);

(statearr_23414[(1)] = (1));

return statearr_23414;
});
var state_machine__6988__auto____1 = (function (state_23385){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23415){if((e23415 instanceof Object)){
var ex__6991__auto__ = e23415;
var statearr_23416_23473 = state_23385;
(statearr_23416_23473[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23474 = state_23385;
state_23385 = G__23474;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23385){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23417 = f__7044__auto__.call(null);
(statearr_23417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23417;
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
var c__7043__auto___23575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23575,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23575,tc,fc){
return (function (state_23550){
var state_val_23551 = (state_23550[(1)]);
if((state_val_23551 === (7))){
var inst_23546 = (state_23550[(2)]);
var state_23550__$1 = state_23550;
var statearr_23552_23576 = state_23550__$1;
(statearr_23552_23576[(2)] = inst_23546);

(statearr_23552_23576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (1))){
var state_23550__$1 = state_23550;
var statearr_23553_23577 = state_23550__$1;
(statearr_23553_23577[(2)] = null);

(statearr_23553_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (4))){
var inst_23527 = (state_23550[(7)]);
var inst_23527__$1 = (state_23550[(2)]);
var inst_23528 = (inst_23527__$1 == null);
var state_23550__$1 = (function (){var statearr_23554 = state_23550;
(statearr_23554[(7)] = inst_23527__$1);

return statearr_23554;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23555_23578 = state_23550__$1;
(statearr_23555_23578[(1)] = (5));

} else {
var statearr_23556_23579 = state_23550__$1;
(statearr_23556_23579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (13))){
var state_23550__$1 = state_23550;
var statearr_23557_23580 = state_23550__$1;
(statearr_23557_23580[(2)] = null);

(statearr_23557_23580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (6))){
var inst_23527 = (state_23550[(7)]);
var inst_23533 = p.call(null,inst_23527);
var state_23550__$1 = state_23550;
if(cljs.core.truth_(inst_23533)){
var statearr_23558_23581 = state_23550__$1;
(statearr_23558_23581[(1)] = (9));

} else {
var statearr_23559_23582 = state_23550__$1;
(statearr_23559_23582[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (3))){
var inst_23548 = (state_23550[(2)]);
var state_23550__$1 = state_23550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23550__$1,inst_23548);
} else {
if((state_val_23551 === (12))){
var state_23550__$1 = state_23550;
var statearr_23560_23583 = state_23550__$1;
(statearr_23560_23583[(2)] = null);

(statearr_23560_23583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (2))){
var state_23550__$1 = state_23550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23550__$1,(4),ch);
} else {
if((state_val_23551 === (11))){
var inst_23527 = (state_23550[(7)]);
var inst_23537 = (state_23550[(2)]);
var state_23550__$1 = state_23550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23550__$1,(8),inst_23537,inst_23527);
} else {
if((state_val_23551 === (9))){
var state_23550__$1 = state_23550;
var statearr_23561_23584 = state_23550__$1;
(statearr_23561_23584[(2)] = tc);

(statearr_23561_23584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (5))){
var inst_23530 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23531 = cljs.core.async.close_BANG_.call(null,fc);
var state_23550__$1 = (function (){var statearr_23562 = state_23550;
(statearr_23562[(8)] = inst_23530);

return statearr_23562;
})();
var statearr_23563_23585 = state_23550__$1;
(statearr_23563_23585[(2)] = inst_23531);

(statearr_23563_23585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (14))){
var inst_23544 = (state_23550[(2)]);
var state_23550__$1 = state_23550;
var statearr_23564_23586 = state_23550__$1;
(statearr_23564_23586[(2)] = inst_23544);

(statearr_23564_23586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (10))){
var state_23550__$1 = state_23550;
var statearr_23565_23587 = state_23550__$1;
(statearr_23565_23587[(2)] = fc);

(statearr_23565_23587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23551 === (8))){
var inst_23539 = (state_23550[(2)]);
var state_23550__$1 = state_23550;
if(cljs.core.truth_(inst_23539)){
var statearr_23566_23588 = state_23550__$1;
(statearr_23566_23588[(1)] = (12));

} else {
var statearr_23567_23589 = state_23550__$1;
(statearr_23567_23589[(1)] = (13));

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
});})(c__7043__auto___23575,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___23575,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23571 = [null,null,null,null,null,null,null,null,null];
(statearr_23571[(0)] = state_machine__6988__auto__);

(statearr_23571[(1)] = (1));

return statearr_23571;
});
var state_machine__6988__auto____1 = (function (state_23550){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23572){if((e23572 instanceof Object)){
var ex__6991__auto__ = e23572;
var statearr_23573_23590 = state_23550;
(statearr_23573_23590[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23591 = state_23550;
state_23550 = G__23591;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23550){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23575,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_23574 = f__7044__auto__.call(null);
(statearr_23574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23575);

return statearr_23574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23575,tc,fc))
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
return (function (state_23638){
var state_val_23639 = (state_23638[(1)]);
if((state_val_23639 === (7))){
var inst_23634 = (state_23638[(2)]);
var state_23638__$1 = state_23638;
var statearr_23640_23656 = state_23638__$1;
(statearr_23640_23656[(2)] = inst_23634);

(statearr_23640_23656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23639 === (6))){
var inst_23627 = (state_23638[(7)]);
var inst_23624 = (state_23638[(8)]);
var inst_23631 = f.call(null,inst_23624,inst_23627);
var inst_23624__$1 = inst_23631;
var state_23638__$1 = (function (){var statearr_23641 = state_23638;
(statearr_23641[(8)] = inst_23624__$1);

return statearr_23641;
})();
var statearr_23642_23657 = state_23638__$1;
(statearr_23642_23657[(2)] = null);

(statearr_23642_23657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23639 === (5))){
var inst_23624 = (state_23638[(8)]);
var state_23638__$1 = state_23638;
var statearr_23643_23658 = state_23638__$1;
(statearr_23643_23658[(2)] = inst_23624);

(statearr_23643_23658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23639 === (4))){
var inst_23627 = (state_23638[(7)]);
var inst_23627__$1 = (state_23638[(2)]);
var inst_23628 = (inst_23627__$1 == null);
var state_23638__$1 = (function (){var statearr_23644 = state_23638;
(statearr_23644[(7)] = inst_23627__$1);

return statearr_23644;
})();
if(cljs.core.truth_(inst_23628)){
var statearr_23645_23659 = state_23638__$1;
(statearr_23645_23659[(1)] = (5));

} else {
var statearr_23646_23660 = state_23638__$1;
(statearr_23646_23660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23639 === (3))){
var inst_23636 = (state_23638[(2)]);
var state_23638__$1 = state_23638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23638__$1,inst_23636);
} else {
if((state_val_23639 === (2))){
var state_23638__$1 = state_23638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23638__$1,(4),ch);
} else {
if((state_val_23639 === (1))){
var inst_23624 = init;
var state_23638__$1 = (function (){var statearr_23647 = state_23638;
(statearr_23647[(8)] = inst_23624);

return statearr_23647;
})();
var statearr_23648_23661 = state_23638__$1;
(statearr_23648_23661[(2)] = null);

(statearr_23648_23661[(1)] = (2));


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
var statearr_23652 = [null,null,null,null,null,null,null,null,null];
(statearr_23652[(0)] = state_machine__6988__auto__);

(statearr_23652[(1)] = (1));

return statearr_23652;
});
var state_machine__6988__auto____1 = (function (state_23638){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23653){if((e23653 instanceof Object)){
var ex__6991__auto__ = e23653;
var statearr_23654_23662 = state_23638;
(statearr_23654_23662[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23663 = state_23638;
state_23638 = G__23663;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23638){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23655 = f__7044__auto__.call(null);
(statearr_23655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23655;
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
return (function (state_23737){
var state_val_23738 = (state_23737[(1)]);
if((state_val_23738 === (7))){
var inst_23719 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
var statearr_23739_23762 = state_23737__$1;
(statearr_23739_23762[(2)] = inst_23719);

(statearr_23739_23762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (1))){
var inst_23713 = cljs.core.seq.call(null,coll);
var inst_23714 = inst_23713;
var state_23737__$1 = (function (){var statearr_23740 = state_23737;
(statearr_23740[(7)] = inst_23714);

return statearr_23740;
})();
var statearr_23741_23763 = state_23737__$1;
(statearr_23741_23763[(2)] = null);

(statearr_23741_23763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (4))){
var inst_23714 = (state_23737[(7)]);
var inst_23717 = cljs.core.first.call(null,inst_23714);
var state_23737__$1 = state_23737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23737__$1,(7),ch,inst_23717);
} else {
if((state_val_23738 === (13))){
var inst_23731 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
var statearr_23742_23764 = state_23737__$1;
(statearr_23742_23764[(2)] = inst_23731);

(statearr_23742_23764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (6))){
var inst_23722 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
if(cljs.core.truth_(inst_23722)){
var statearr_23743_23765 = state_23737__$1;
(statearr_23743_23765[(1)] = (8));

} else {
var statearr_23744_23766 = state_23737__$1;
(statearr_23744_23766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (3))){
var inst_23735 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23737__$1,inst_23735);
} else {
if((state_val_23738 === (12))){
var state_23737__$1 = state_23737;
var statearr_23745_23767 = state_23737__$1;
(statearr_23745_23767[(2)] = null);

(statearr_23745_23767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (2))){
var inst_23714 = (state_23737[(7)]);
var state_23737__$1 = state_23737;
if(cljs.core.truth_(inst_23714)){
var statearr_23746_23768 = state_23737__$1;
(statearr_23746_23768[(1)] = (4));

} else {
var statearr_23747_23769 = state_23737__$1;
(statearr_23747_23769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (11))){
var inst_23728 = cljs.core.async.close_BANG_.call(null,ch);
var state_23737__$1 = state_23737;
var statearr_23748_23770 = state_23737__$1;
(statearr_23748_23770[(2)] = inst_23728);

(statearr_23748_23770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (9))){
var state_23737__$1 = state_23737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23749_23771 = state_23737__$1;
(statearr_23749_23771[(1)] = (11));

} else {
var statearr_23750_23772 = state_23737__$1;
(statearr_23750_23772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (5))){
var inst_23714 = (state_23737[(7)]);
var state_23737__$1 = state_23737;
var statearr_23751_23773 = state_23737__$1;
(statearr_23751_23773[(2)] = inst_23714);

(statearr_23751_23773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (10))){
var inst_23733 = (state_23737[(2)]);
var state_23737__$1 = state_23737;
var statearr_23752_23774 = state_23737__$1;
(statearr_23752_23774[(2)] = inst_23733);

(statearr_23752_23774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23738 === (8))){
var inst_23714 = (state_23737[(7)]);
var inst_23724 = cljs.core.next.call(null,inst_23714);
var inst_23714__$1 = inst_23724;
var state_23737__$1 = (function (){var statearr_23753 = state_23737;
(statearr_23753[(7)] = inst_23714__$1);

return statearr_23753;
})();
var statearr_23754_23775 = state_23737__$1;
(statearr_23754_23775[(2)] = null);

(statearr_23754_23775[(1)] = (2));


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
var statearr_23758 = [null,null,null,null,null,null,null,null];
(statearr_23758[(0)] = state_machine__6988__auto__);

(statearr_23758[(1)] = (1));

return statearr_23758;
});
var state_machine__6988__auto____1 = (function (state_23737){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23759){if((e23759 instanceof Object)){
var ex__6991__auto__ = e23759;
var statearr_23760_23776 = state_23737;
(statearr_23760_23776[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23777 = state_23737;
state_23737 = G__23777;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23737){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23761 = f__7044__auto__.call(null);
(statearr_23761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23761;
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

cljs.core.async.Mux = (function (){var obj23779 = {};
return obj23779;
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


cljs.core.async.Mult = (function (){var obj23781 = {};
return obj23781;
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
if(typeof cljs.core.async.t24003 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24003 = (function (cs,ch,mult,meta24004){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24004 = meta24004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24003.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24003.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24003.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24003.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24005){
var self__ = this;
var _24005__$1 = this;
return self__.meta24004;
});})(cs))
;

cljs.core.async.t24003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24005,meta24004__$1){
var self__ = this;
var _24005__$1 = this;
return (new cljs.core.async.t24003(self__.cs,self__.ch,self__.mult,meta24004__$1));
});})(cs))
;

cljs.core.async.t24003.cljs$lang$type = true;

cljs.core.async.t24003.cljs$lang$ctorStr = "cljs.core.async/t24003";

cljs.core.async.t24003.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24003");
});})(cs))
;

cljs.core.async.__GT_t24003 = ((function (cs){
return (function __GT_t24003(cs__$1,ch__$1,mult__$1,meta24004){
return (new cljs.core.async.t24003(cs__$1,ch__$1,mult__$1,meta24004));
});})(cs))
;

}

return (new cljs.core.async.t24003(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___24224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24224,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24224,cs,m,dchan,dctr,done){
return (function (state_24136){
var state_val_24137 = (state_24136[(1)]);
if((state_val_24137 === (7))){
var inst_24132 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24138_24225 = state_24136__$1;
(statearr_24138_24225[(2)] = inst_24132);

(statearr_24138_24225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (20))){
var inst_24037 = (state_24136[(7)]);
var inst_24047 = cljs.core.first.call(null,inst_24037);
var inst_24048 = cljs.core.nth.call(null,inst_24047,(0),null);
var inst_24049 = cljs.core.nth.call(null,inst_24047,(1),null);
var state_24136__$1 = (function (){var statearr_24139 = state_24136;
(statearr_24139[(8)] = inst_24048);

return statearr_24139;
})();
if(cljs.core.truth_(inst_24049)){
var statearr_24140_24226 = state_24136__$1;
(statearr_24140_24226[(1)] = (22));

} else {
var statearr_24141_24227 = state_24136__$1;
(statearr_24141_24227[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (27))){
var inst_24084 = (state_24136[(9)]);
var inst_24079 = (state_24136[(10)]);
var inst_24008 = (state_24136[(11)]);
var inst_24077 = (state_24136[(12)]);
var inst_24084__$1 = cljs.core._nth.call(null,inst_24077,inst_24079);
var inst_24085 = cljs.core.async.put_BANG_.call(null,inst_24084__$1,inst_24008,done);
var state_24136__$1 = (function (){var statearr_24142 = state_24136;
(statearr_24142[(9)] = inst_24084__$1);

return statearr_24142;
})();
if(cljs.core.truth_(inst_24085)){
var statearr_24143_24228 = state_24136__$1;
(statearr_24143_24228[(1)] = (30));

} else {
var statearr_24144_24229 = state_24136__$1;
(statearr_24144_24229[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (1))){
var state_24136__$1 = state_24136;
var statearr_24145_24230 = state_24136__$1;
(statearr_24145_24230[(2)] = null);

(statearr_24145_24230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (24))){
var inst_24037 = (state_24136[(7)]);
var inst_24054 = (state_24136[(2)]);
var inst_24055 = cljs.core.next.call(null,inst_24037);
var inst_24017 = inst_24055;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24136__$1 = (function (){var statearr_24146 = state_24136;
(statearr_24146[(13)] = inst_24017);

(statearr_24146[(14)] = inst_24018);

(statearr_24146[(15)] = inst_24019);

(statearr_24146[(16)] = inst_24020);

(statearr_24146[(17)] = inst_24054);

return statearr_24146;
})();
var statearr_24147_24231 = state_24136__$1;
(statearr_24147_24231[(2)] = null);

(statearr_24147_24231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (39))){
var state_24136__$1 = state_24136;
var statearr_24151_24232 = state_24136__$1;
(statearr_24151_24232[(2)] = null);

(statearr_24151_24232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (4))){
var inst_24008 = (state_24136[(11)]);
var inst_24008__$1 = (state_24136[(2)]);
var inst_24009 = (inst_24008__$1 == null);
var state_24136__$1 = (function (){var statearr_24152 = state_24136;
(statearr_24152[(11)] = inst_24008__$1);

return statearr_24152;
})();
if(cljs.core.truth_(inst_24009)){
var statearr_24153_24233 = state_24136__$1;
(statearr_24153_24233[(1)] = (5));

} else {
var statearr_24154_24234 = state_24136__$1;
(statearr_24154_24234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (15))){
var inst_24017 = (state_24136[(13)]);
var inst_24018 = (state_24136[(14)]);
var inst_24019 = (state_24136[(15)]);
var inst_24020 = (state_24136[(16)]);
var inst_24033 = (state_24136[(2)]);
var inst_24034 = (inst_24020 + (1));
var tmp24148 = inst_24017;
var tmp24149 = inst_24018;
var tmp24150 = inst_24019;
var inst_24017__$1 = tmp24148;
var inst_24018__$1 = tmp24149;
var inst_24019__$1 = tmp24150;
var inst_24020__$1 = inst_24034;
var state_24136__$1 = (function (){var statearr_24155 = state_24136;
(statearr_24155[(13)] = inst_24017__$1);

(statearr_24155[(14)] = inst_24018__$1);

(statearr_24155[(15)] = inst_24019__$1);

(statearr_24155[(16)] = inst_24020__$1);

(statearr_24155[(18)] = inst_24033);

return statearr_24155;
})();
var statearr_24156_24235 = state_24136__$1;
(statearr_24156_24235[(2)] = null);

(statearr_24156_24235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (21))){
var inst_24058 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24160_24236 = state_24136__$1;
(statearr_24160_24236[(2)] = inst_24058);

(statearr_24160_24236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (31))){
var inst_24084 = (state_24136[(9)]);
var inst_24088 = done.call(null,null);
var inst_24089 = cljs.core.async.untap_STAR_.call(null,m,inst_24084);
var state_24136__$1 = (function (){var statearr_24161 = state_24136;
(statearr_24161[(19)] = inst_24088);

return statearr_24161;
})();
var statearr_24162_24237 = state_24136__$1;
(statearr_24162_24237[(2)] = inst_24089);

(statearr_24162_24237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (32))){
var inst_24079 = (state_24136[(10)]);
var inst_24078 = (state_24136[(20)]);
var inst_24076 = (state_24136[(21)]);
var inst_24077 = (state_24136[(12)]);
var inst_24091 = (state_24136[(2)]);
var inst_24092 = (inst_24079 + (1));
var tmp24157 = inst_24078;
var tmp24158 = inst_24076;
var tmp24159 = inst_24077;
var inst_24076__$1 = tmp24158;
var inst_24077__$1 = tmp24159;
var inst_24078__$1 = tmp24157;
var inst_24079__$1 = inst_24092;
var state_24136__$1 = (function (){var statearr_24163 = state_24136;
(statearr_24163[(10)] = inst_24079__$1);

(statearr_24163[(20)] = inst_24078__$1);

(statearr_24163[(21)] = inst_24076__$1);

(statearr_24163[(12)] = inst_24077__$1);

(statearr_24163[(22)] = inst_24091);

return statearr_24163;
})();
var statearr_24164_24238 = state_24136__$1;
(statearr_24164_24238[(2)] = null);

(statearr_24164_24238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (40))){
var inst_24104 = (state_24136[(23)]);
var inst_24108 = done.call(null,null);
var inst_24109 = cljs.core.async.untap_STAR_.call(null,m,inst_24104);
var state_24136__$1 = (function (){var statearr_24165 = state_24136;
(statearr_24165[(24)] = inst_24108);

return statearr_24165;
})();
var statearr_24166_24239 = state_24136__$1;
(statearr_24166_24239[(2)] = inst_24109);

(statearr_24166_24239[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (33))){
var inst_24095 = (state_24136[(25)]);
var inst_24097 = cljs.core.chunked_seq_QMARK_.call(null,inst_24095);
var state_24136__$1 = state_24136;
if(inst_24097){
var statearr_24167_24240 = state_24136__$1;
(statearr_24167_24240[(1)] = (36));

} else {
var statearr_24168_24241 = state_24136__$1;
(statearr_24168_24241[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (13))){
var inst_24027 = (state_24136[(26)]);
var inst_24030 = cljs.core.async.close_BANG_.call(null,inst_24027);
var state_24136__$1 = state_24136;
var statearr_24169_24242 = state_24136__$1;
(statearr_24169_24242[(2)] = inst_24030);

(statearr_24169_24242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (22))){
var inst_24048 = (state_24136[(8)]);
var inst_24051 = cljs.core.async.close_BANG_.call(null,inst_24048);
var state_24136__$1 = state_24136;
var statearr_24170_24243 = state_24136__$1;
(statearr_24170_24243[(2)] = inst_24051);

(statearr_24170_24243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (36))){
var inst_24095 = (state_24136[(25)]);
var inst_24099 = cljs.core.chunk_first.call(null,inst_24095);
var inst_24100 = cljs.core.chunk_rest.call(null,inst_24095);
var inst_24101 = cljs.core.count.call(null,inst_24099);
var inst_24076 = inst_24100;
var inst_24077 = inst_24099;
var inst_24078 = inst_24101;
var inst_24079 = (0);
var state_24136__$1 = (function (){var statearr_24171 = state_24136;
(statearr_24171[(10)] = inst_24079);

(statearr_24171[(20)] = inst_24078);

(statearr_24171[(21)] = inst_24076);

(statearr_24171[(12)] = inst_24077);

return statearr_24171;
})();
var statearr_24172_24244 = state_24136__$1;
(statearr_24172_24244[(2)] = null);

(statearr_24172_24244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (41))){
var inst_24095 = (state_24136[(25)]);
var inst_24111 = (state_24136[(2)]);
var inst_24112 = cljs.core.next.call(null,inst_24095);
var inst_24076 = inst_24112;
var inst_24077 = null;
var inst_24078 = (0);
var inst_24079 = (0);
var state_24136__$1 = (function (){var statearr_24173 = state_24136;
(statearr_24173[(10)] = inst_24079);

(statearr_24173[(20)] = inst_24078);

(statearr_24173[(21)] = inst_24076);

(statearr_24173[(12)] = inst_24077);

(statearr_24173[(27)] = inst_24111);

return statearr_24173;
})();
var statearr_24174_24245 = state_24136__$1;
(statearr_24174_24245[(2)] = null);

(statearr_24174_24245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (43))){
var state_24136__$1 = state_24136;
var statearr_24175_24246 = state_24136__$1;
(statearr_24175_24246[(2)] = null);

(statearr_24175_24246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (29))){
var inst_24120 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24176_24247 = state_24136__$1;
(statearr_24176_24247[(2)] = inst_24120);

(statearr_24176_24247[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (44))){
var inst_24129 = (state_24136[(2)]);
var state_24136__$1 = (function (){var statearr_24177 = state_24136;
(statearr_24177[(28)] = inst_24129);

return statearr_24177;
})();
var statearr_24178_24248 = state_24136__$1;
(statearr_24178_24248[(2)] = null);

(statearr_24178_24248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (6))){
var inst_24068 = (state_24136[(29)]);
var inst_24067 = cljs.core.deref.call(null,cs);
var inst_24068__$1 = cljs.core.keys.call(null,inst_24067);
var inst_24069 = cljs.core.count.call(null,inst_24068__$1);
var inst_24070 = cljs.core.reset_BANG_.call(null,dctr,inst_24069);
var inst_24075 = cljs.core.seq.call(null,inst_24068__$1);
var inst_24076 = inst_24075;
var inst_24077 = null;
var inst_24078 = (0);
var inst_24079 = (0);
var state_24136__$1 = (function (){var statearr_24179 = state_24136;
(statearr_24179[(10)] = inst_24079);

(statearr_24179[(20)] = inst_24078);

(statearr_24179[(21)] = inst_24076);

(statearr_24179[(29)] = inst_24068__$1);

(statearr_24179[(12)] = inst_24077);

(statearr_24179[(30)] = inst_24070);

return statearr_24179;
})();
var statearr_24180_24249 = state_24136__$1;
(statearr_24180_24249[(2)] = null);

(statearr_24180_24249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (28))){
var inst_24095 = (state_24136[(25)]);
var inst_24076 = (state_24136[(21)]);
var inst_24095__$1 = cljs.core.seq.call(null,inst_24076);
var state_24136__$1 = (function (){var statearr_24181 = state_24136;
(statearr_24181[(25)] = inst_24095__$1);

return statearr_24181;
})();
if(inst_24095__$1){
var statearr_24182_24250 = state_24136__$1;
(statearr_24182_24250[(1)] = (33));

} else {
var statearr_24183_24251 = state_24136__$1;
(statearr_24183_24251[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (25))){
var inst_24079 = (state_24136[(10)]);
var inst_24078 = (state_24136[(20)]);
var inst_24081 = (inst_24079 < inst_24078);
var inst_24082 = inst_24081;
var state_24136__$1 = state_24136;
if(cljs.core.truth_(inst_24082)){
var statearr_24184_24252 = state_24136__$1;
(statearr_24184_24252[(1)] = (27));

} else {
var statearr_24185_24253 = state_24136__$1;
(statearr_24185_24253[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (34))){
var state_24136__$1 = state_24136;
var statearr_24186_24254 = state_24136__$1;
(statearr_24186_24254[(2)] = null);

(statearr_24186_24254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (17))){
var state_24136__$1 = state_24136;
var statearr_24187_24255 = state_24136__$1;
(statearr_24187_24255[(2)] = null);

(statearr_24187_24255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (3))){
var inst_24134 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24136__$1,inst_24134);
} else {
if((state_val_24137 === (12))){
var inst_24063 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24188_24256 = state_24136__$1;
(statearr_24188_24256[(2)] = inst_24063);

(statearr_24188_24256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (2))){
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24136__$1,(4),ch);
} else {
if((state_val_24137 === (23))){
var state_24136__$1 = state_24136;
var statearr_24189_24257 = state_24136__$1;
(statearr_24189_24257[(2)] = null);

(statearr_24189_24257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (35))){
var inst_24118 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24190_24258 = state_24136__$1;
(statearr_24190_24258[(2)] = inst_24118);

(statearr_24190_24258[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (19))){
var inst_24037 = (state_24136[(7)]);
var inst_24041 = cljs.core.chunk_first.call(null,inst_24037);
var inst_24042 = cljs.core.chunk_rest.call(null,inst_24037);
var inst_24043 = cljs.core.count.call(null,inst_24041);
var inst_24017 = inst_24042;
var inst_24018 = inst_24041;
var inst_24019 = inst_24043;
var inst_24020 = (0);
var state_24136__$1 = (function (){var statearr_24191 = state_24136;
(statearr_24191[(13)] = inst_24017);

(statearr_24191[(14)] = inst_24018);

(statearr_24191[(15)] = inst_24019);

(statearr_24191[(16)] = inst_24020);

return statearr_24191;
})();
var statearr_24192_24259 = state_24136__$1;
(statearr_24192_24259[(2)] = null);

(statearr_24192_24259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (11))){
var inst_24017 = (state_24136[(13)]);
var inst_24037 = (state_24136[(7)]);
var inst_24037__$1 = cljs.core.seq.call(null,inst_24017);
var state_24136__$1 = (function (){var statearr_24193 = state_24136;
(statearr_24193[(7)] = inst_24037__$1);

return statearr_24193;
})();
if(inst_24037__$1){
var statearr_24194_24260 = state_24136__$1;
(statearr_24194_24260[(1)] = (16));

} else {
var statearr_24195_24261 = state_24136__$1;
(statearr_24195_24261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (9))){
var inst_24065 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24196_24262 = state_24136__$1;
(statearr_24196_24262[(2)] = inst_24065);

(statearr_24196_24262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (5))){
var inst_24015 = cljs.core.deref.call(null,cs);
var inst_24016 = cljs.core.seq.call(null,inst_24015);
var inst_24017 = inst_24016;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24136__$1 = (function (){var statearr_24197 = state_24136;
(statearr_24197[(13)] = inst_24017);

(statearr_24197[(14)] = inst_24018);

(statearr_24197[(15)] = inst_24019);

(statearr_24197[(16)] = inst_24020);

return statearr_24197;
})();
var statearr_24198_24263 = state_24136__$1;
(statearr_24198_24263[(2)] = null);

(statearr_24198_24263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (14))){
var state_24136__$1 = state_24136;
var statearr_24199_24264 = state_24136__$1;
(statearr_24199_24264[(2)] = null);

(statearr_24199_24264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (45))){
var inst_24126 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24200_24265 = state_24136__$1;
(statearr_24200_24265[(2)] = inst_24126);

(statearr_24200_24265[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (26))){
var inst_24068 = (state_24136[(29)]);
var inst_24122 = (state_24136[(2)]);
var inst_24123 = cljs.core.seq.call(null,inst_24068);
var state_24136__$1 = (function (){var statearr_24201 = state_24136;
(statearr_24201[(31)] = inst_24122);

return statearr_24201;
})();
if(inst_24123){
var statearr_24202_24266 = state_24136__$1;
(statearr_24202_24266[(1)] = (42));

} else {
var statearr_24203_24267 = state_24136__$1;
(statearr_24203_24267[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (16))){
var inst_24037 = (state_24136[(7)]);
var inst_24039 = cljs.core.chunked_seq_QMARK_.call(null,inst_24037);
var state_24136__$1 = state_24136;
if(inst_24039){
var statearr_24204_24268 = state_24136__$1;
(statearr_24204_24268[(1)] = (19));

} else {
var statearr_24205_24269 = state_24136__$1;
(statearr_24205_24269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (38))){
var inst_24115 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24206_24270 = state_24136__$1;
(statearr_24206_24270[(2)] = inst_24115);

(statearr_24206_24270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (30))){
var state_24136__$1 = state_24136;
var statearr_24207_24271 = state_24136__$1;
(statearr_24207_24271[(2)] = null);

(statearr_24207_24271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (10))){
var inst_24018 = (state_24136[(14)]);
var inst_24020 = (state_24136[(16)]);
var inst_24026 = cljs.core._nth.call(null,inst_24018,inst_24020);
var inst_24027 = cljs.core.nth.call(null,inst_24026,(0),null);
var inst_24028 = cljs.core.nth.call(null,inst_24026,(1),null);
var state_24136__$1 = (function (){var statearr_24208 = state_24136;
(statearr_24208[(26)] = inst_24027);

return statearr_24208;
})();
if(cljs.core.truth_(inst_24028)){
var statearr_24209_24272 = state_24136__$1;
(statearr_24209_24272[(1)] = (13));

} else {
var statearr_24210_24273 = state_24136__$1;
(statearr_24210_24273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (18))){
var inst_24061 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24211_24274 = state_24136__$1;
(statearr_24211_24274[(2)] = inst_24061);

(statearr_24211_24274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (42))){
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24136__$1,(45),dchan);
} else {
if((state_val_24137 === (37))){
var inst_24095 = (state_24136[(25)]);
var inst_24008 = (state_24136[(11)]);
var inst_24104 = (state_24136[(23)]);
var inst_24104__$1 = cljs.core.first.call(null,inst_24095);
var inst_24105 = cljs.core.async.put_BANG_.call(null,inst_24104__$1,inst_24008,done);
var state_24136__$1 = (function (){var statearr_24212 = state_24136;
(statearr_24212[(23)] = inst_24104__$1);

return statearr_24212;
})();
if(cljs.core.truth_(inst_24105)){
var statearr_24213_24275 = state_24136__$1;
(statearr_24213_24275[(1)] = (39));

} else {
var statearr_24214_24276 = state_24136__$1;
(statearr_24214_24276[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (8))){
var inst_24019 = (state_24136[(15)]);
var inst_24020 = (state_24136[(16)]);
var inst_24022 = (inst_24020 < inst_24019);
var inst_24023 = inst_24022;
var state_24136__$1 = state_24136;
if(cljs.core.truth_(inst_24023)){
var statearr_24215_24277 = state_24136__$1;
(statearr_24215_24277[(1)] = (10));

} else {
var statearr_24216_24278 = state_24136__$1;
(statearr_24216_24278[(1)] = (11));

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
});})(c__7043__auto___24224,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___24224,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24220[(0)] = state_machine__6988__auto__);

(statearr_24220[(1)] = (1));

return statearr_24220;
});
var state_machine__6988__auto____1 = (function (state_24136){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24221){if((e24221 instanceof Object)){
var ex__6991__auto__ = e24221;
var statearr_24222_24279 = state_24136;
(statearr_24222_24279[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24280 = state_24136;
state_24136 = G__24280;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24136){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24224,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_24223 = f__7044__auto__.call(null);
(statearr_24223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24224);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24224,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24282 = {};
return obj24282;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24283){
var map__24288 = p__24283;
var map__24288__$1 = ((cljs.core.seq_QMARK_.call(null,map__24288))?cljs.core.apply.call(null,cljs.core.hash_map,map__24288):map__24288);
var opts = map__24288__$1;
var statearr_24289_24292 = state;
(statearr_24289_24292[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24288,map__24288__$1,opts){
return (function (val){
var statearr_24290_24293 = state;
(statearr_24290_24293[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24288,map__24288__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24291_24294 = state;
(statearr_24291_24294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24283 = null;
if (arguments.length > 3) {
  p__24283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24283);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24295){
var state = cljs.core.first(arglist__24295);
arglist__24295 = cljs.core.next(arglist__24295);
var cont_block = cljs.core.first(arglist__24295);
arglist__24295 = cljs.core.next(arglist__24295);
var ports = cljs.core.first(arglist__24295);
var p__24283 = cljs.core.rest(arglist__24295);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24283);
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
if(typeof cljs.core.async.t24415 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24415 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24416){
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
this.meta24416 = meta24416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24415.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24415.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24417){
var self__ = this;
var _24417__$1 = this;
return self__.meta24416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24417,meta24416__$1){
var self__ = this;
var _24417__$1 = this;
return (new cljs.core.async.t24415(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24415.cljs$lang$type = true;

cljs.core.async.t24415.cljs$lang$ctorStr = "cljs.core.async/t24415";

cljs.core.async.t24415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24416){
return (new cljs.core.async.t24415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24415(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24487){
var state_val_24488 = (state_24487[(1)]);
if((state_val_24488 === (7))){
var inst_24431 = (state_24487[(7)]);
var inst_24436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24431);
var state_24487__$1 = state_24487;
var statearr_24489_24535 = state_24487__$1;
(statearr_24489_24535[(2)] = inst_24436);

(statearr_24489_24535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (20))){
var inst_24446 = (state_24487[(8)]);
var state_24487__$1 = state_24487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24487__$1,(23),out,inst_24446);
} else {
if((state_val_24488 === (1))){
var inst_24421 = (state_24487[(9)]);
var inst_24421__$1 = calc_state.call(null);
var inst_24422 = cljs.core.seq_QMARK_.call(null,inst_24421__$1);
var state_24487__$1 = (function (){var statearr_24490 = state_24487;
(statearr_24490[(9)] = inst_24421__$1);

return statearr_24490;
})();
if(inst_24422){
var statearr_24491_24536 = state_24487__$1;
(statearr_24491_24536[(1)] = (2));

} else {
var statearr_24492_24537 = state_24487__$1;
(statearr_24492_24537[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (24))){
var inst_24439 = (state_24487[(10)]);
var inst_24431 = inst_24439;
var state_24487__$1 = (function (){var statearr_24493 = state_24487;
(statearr_24493[(7)] = inst_24431);

return statearr_24493;
})();
var statearr_24494_24538 = state_24487__$1;
(statearr_24494_24538[(2)] = null);

(statearr_24494_24538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (4))){
var inst_24421 = (state_24487[(9)]);
var inst_24427 = (state_24487[(2)]);
var inst_24428 = cljs.core.get.call(null,inst_24427,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24429 = cljs.core.get.call(null,inst_24427,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24430 = cljs.core.get.call(null,inst_24427,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24431 = inst_24421;
var state_24487__$1 = (function (){var statearr_24495 = state_24487;
(statearr_24495[(11)] = inst_24428);

(statearr_24495[(7)] = inst_24431);

(statearr_24495[(12)] = inst_24429);

(statearr_24495[(13)] = inst_24430);

return statearr_24495;
})();
var statearr_24496_24539 = state_24487__$1;
(statearr_24496_24539[(2)] = null);

(statearr_24496_24539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (15))){
var state_24487__$1 = state_24487;
var statearr_24497_24540 = state_24487__$1;
(statearr_24497_24540[(2)] = null);

(statearr_24497_24540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (21))){
var inst_24439 = (state_24487[(10)]);
var inst_24431 = inst_24439;
var state_24487__$1 = (function (){var statearr_24498 = state_24487;
(statearr_24498[(7)] = inst_24431);

return statearr_24498;
})();
var statearr_24499_24541 = state_24487__$1;
(statearr_24499_24541[(2)] = null);

(statearr_24499_24541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (13))){
var inst_24483 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
var statearr_24500_24542 = state_24487__$1;
(statearr_24500_24542[(2)] = inst_24483);

(statearr_24500_24542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (22))){
var inst_24481 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
var statearr_24501_24543 = state_24487__$1;
(statearr_24501_24543[(2)] = inst_24481);

(statearr_24501_24543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (6))){
var inst_24485 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24487__$1,inst_24485);
} else {
if((state_val_24488 === (25))){
var state_24487__$1 = state_24487;
var statearr_24502_24544 = state_24487__$1;
(statearr_24502_24544[(2)] = null);

(statearr_24502_24544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (17))){
var inst_24461 = (state_24487[(14)]);
var state_24487__$1 = state_24487;
var statearr_24503_24545 = state_24487__$1;
(statearr_24503_24545[(2)] = inst_24461);

(statearr_24503_24545[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (3))){
var inst_24421 = (state_24487[(9)]);
var state_24487__$1 = state_24487;
var statearr_24504_24546 = state_24487__$1;
(statearr_24504_24546[(2)] = inst_24421);

(statearr_24504_24546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (12))){
var inst_24442 = (state_24487[(15)]);
var inst_24447 = (state_24487[(16)]);
var inst_24461 = (state_24487[(14)]);
var inst_24461__$1 = inst_24442.call(null,inst_24447);
var state_24487__$1 = (function (){var statearr_24505 = state_24487;
(statearr_24505[(14)] = inst_24461__$1);

return statearr_24505;
})();
if(cljs.core.truth_(inst_24461__$1)){
var statearr_24506_24547 = state_24487__$1;
(statearr_24506_24547[(1)] = (17));

} else {
var statearr_24507_24548 = state_24487__$1;
(statearr_24507_24548[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (2))){
var inst_24421 = (state_24487[(9)]);
var inst_24424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24421);
var state_24487__$1 = state_24487;
var statearr_24508_24549 = state_24487__$1;
(statearr_24508_24549[(2)] = inst_24424);

(statearr_24508_24549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (23))){
var inst_24472 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
if(cljs.core.truth_(inst_24472)){
var statearr_24509_24550 = state_24487__$1;
(statearr_24509_24550[(1)] = (24));

} else {
var statearr_24510_24551 = state_24487__$1;
(statearr_24510_24551[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (19))){
var inst_24469 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
if(cljs.core.truth_(inst_24469)){
var statearr_24511_24552 = state_24487__$1;
(statearr_24511_24552[(1)] = (20));

} else {
var statearr_24512_24553 = state_24487__$1;
(statearr_24512_24553[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (11))){
var inst_24446 = (state_24487[(8)]);
var inst_24452 = (inst_24446 == null);
var state_24487__$1 = state_24487;
if(cljs.core.truth_(inst_24452)){
var statearr_24513_24554 = state_24487__$1;
(statearr_24513_24554[(1)] = (14));

} else {
var statearr_24514_24555 = state_24487__$1;
(statearr_24514_24555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (9))){
var inst_24439 = (state_24487[(10)]);
var inst_24439__$1 = (state_24487[(2)]);
var inst_24440 = cljs.core.get.call(null,inst_24439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24441 = cljs.core.get.call(null,inst_24439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24442 = cljs.core.get.call(null,inst_24439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24487__$1 = (function (){var statearr_24515 = state_24487;
(statearr_24515[(17)] = inst_24441);

(statearr_24515[(10)] = inst_24439__$1);

(statearr_24515[(15)] = inst_24442);

return statearr_24515;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24487__$1,(10),inst_24440);
} else {
if((state_val_24488 === (5))){
var inst_24431 = (state_24487[(7)]);
var inst_24434 = cljs.core.seq_QMARK_.call(null,inst_24431);
var state_24487__$1 = state_24487;
if(inst_24434){
var statearr_24516_24556 = state_24487__$1;
(statearr_24516_24556[(1)] = (7));

} else {
var statearr_24517_24557 = state_24487__$1;
(statearr_24517_24557[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (14))){
var inst_24447 = (state_24487[(16)]);
var inst_24454 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24447);
var state_24487__$1 = state_24487;
var statearr_24518_24558 = state_24487__$1;
(statearr_24518_24558[(2)] = inst_24454);

(statearr_24518_24558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (26))){
var inst_24477 = (state_24487[(2)]);
var state_24487__$1 = state_24487;
var statearr_24519_24559 = state_24487__$1;
(statearr_24519_24559[(2)] = inst_24477);

(statearr_24519_24559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (16))){
var inst_24457 = (state_24487[(2)]);
var inst_24458 = calc_state.call(null);
var inst_24431 = inst_24458;
var state_24487__$1 = (function (){var statearr_24520 = state_24487;
(statearr_24520[(18)] = inst_24457);

(statearr_24520[(7)] = inst_24431);

return statearr_24520;
})();
var statearr_24521_24560 = state_24487__$1;
(statearr_24521_24560[(2)] = null);

(statearr_24521_24560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (10))){
var inst_24447 = (state_24487[(16)]);
var inst_24446 = (state_24487[(8)]);
var inst_24445 = (state_24487[(2)]);
var inst_24446__$1 = cljs.core.nth.call(null,inst_24445,(0),null);
var inst_24447__$1 = cljs.core.nth.call(null,inst_24445,(1),null);
var inst_24448 = (inst_24446__$1 == null);
var inst_24449 = cljs.core._EQ_.call(null,inst_24447__$1,change);
var inst_24450 = (inst_24448) || (inst_24449);
var state_24487__$1 = (function (){var statearr_24522 = state_24487;
(statearr_24522[(16)] = inst_24447__$1);

(statearr_24522[(8)] = inst_24446__$1);

return statearr_24522;
})();
if(cljs.core.truth_(inst_24450)){
var statearr_24523_24561 = state_24487__$1;
(statearr_24523_24561[(1)] = (11));

} else {
var statearr_24524_24562 = state_24487__$1;
(statearr_24524_24562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (18))){
var inst_24441 = (state_24487[(17)]);
var inst_24442 = (state_24487[(15)]);
var inst_24447 = (state_24487[(16)]);
var inst_24464 = cljs.core.empty_QMARK_.call(null,inst_24442);
var inst_24465 = inst_24441.call(null,inst_24447);
var inst_24466 = cljs.core.not.call(null,inst_24465);
var inst_24467 = (inst_24464) && (inst_24466);
var state_24487__$1 = state_24487;
var statearr_24525_24563 = state_24487__$1;
(statearr_24525_24563[(2)] = inst_24467);

(statearr_24525_24563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24488 === (8))){
var inst_24431 = (state_24487[(7)]);
var state_24487__$1 = state_24487;
var statearr_24526_24564 = state_24487__$1;
(statearr_24526_24564[(2)] = inst_24431);

(statearr_24526_24564[(1)] = (9));


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
});})(c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24530[(0)] = state_machine__6988__auto__);

(statearr_24530[(1)] = (1));

return statearr_24530;
});
var state_machine__6988__auto____1 = (function (state_24487){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24531){if((e24531 instanceof Object)){
var ex__6991__auto__ = e24531;
var statearr_24532_24565 = state_24487;
(statearr_24532_24565[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24566 = state_24487;
state_24487 = G__24566;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24487){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_24533 = f__7044__auto__.call(null);
(statearr_24533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24534);

return statearr_24533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24568 = {};
return obj24568;
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
return (function (p1__24569_SHARP_){
if(cljs.core.truth_(p1__24569_SHARP_.call(null,topic))){
return p1__24569_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24569_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24692 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24693){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24693 = meta24693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24692.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24692.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24692.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24692.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24694){
var self__ = this;
var _24694__$1 = this;
return self__.meta24693;
});})(mults,ensure_mult))
;

cljs.core.async.t24692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24694,meta24693__$1){
var self__ = this;
var _24694__$1 = this;
return (new cljs.core.async.t24692(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24693__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24692.cljs$lang$type = true;

cljs.core.async.t24692.cljs$lang$ctorStr = "cljs.core.async/t24692";

cljs.core.async.t24692.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24692");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24692 = ((function (mults,ensure_mult){
return (function __GT_t24692(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24693){
return (new cljs.core.async.t24692(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24693));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24692(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24814,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24814,mults,ensure_mult,p){
return (function (state_24766){
var state_val_24767 = (state_24766[(1)]);
if((state_val_24767 === (7))){
var inst_24762 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24768_24815 = state_24766__$1;
(statearr_24768_24815[(2)] = inst_24762);

(statearr_24768_24815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (20))){
var state_24766__$1 = state_24766;
var statearr_24769_24816 = state_24766__$1;
(statearr_24769_24816[(2)] = null);

(statearr_24769_24816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (1))){
var state_24766__$1 = state_24766;
var statearr_24770_24817 = state_24766__$1;
(statearr_24770_24817[(2)] = null);

(statearr_24770_24817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (24))){
var inst_24745 = (state_24766[(7)]);
var inst_24754 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24745);
var state_24766__$1 = state_24766;
var statearr_24771_24818 = state_24766__$1;
(statearr_24771_24818[(2)] = inst_24754);

(statearr_24771_24818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (4))){
var inst_24697 = (state_24766[(8)]);
var inst_24697__$1 = (state_24766[(2)]);
var inst_24698 = (inst_24697__$1 == null);
var state_24766__$1 = (function (){var statearr_24772 = state_24766;
(statearr_24772[(8)] = inst_24697__$1);

return statearr_24772;
})();
if(cljs.core.truth_(inst_24698)){
var statearr_24773_24819 = state_24766__$1;
(statearr_24773_24819[(1)] = (5));

} else {
var statearr_24774_24820 = state_24766__$1;
(statearr_24774_24820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (15))){
var inst_24739 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24775_24821 = state_24766__$1;
(statearr_24775_24821[(2)] = inst_24739);

(statearr_24775_24821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (21))){
var inst_24759 = (state_24766[(2)]);
var state_24766__$1 = (function (){var statearr_24776 = state_24766;
(statearr_24776[(9)] = inst_24759);

return statearr_24776;
})();
var statearr_24777_24822 = state_24766__$1;
(statearr_24777_24822[(2)] = null);

(statearr_24777_24822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (13))){
var inst_24721 = (state_24766[(10)]);
var inst_24723 = cljs.core.chunked_seq_QMARK_.call(null,inst_24721);
var state_24766__$1 = state_24766;
if(inst_24723){
var statearr_24778_24823 = state_24766__$1;
(statearr_24778_24823[(1)] = (16));

} else {
var statearr_24779_24824 = state_24766__$1;
(statearr_24779_24824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (22))){
var inst_24751 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
if(cljs.core.truth_(inst_24751)){
var statearr_24780_24825 = state_24766__$1;
(statearr_24780_24825[(1)] = (23));

} else {
var statearr_24781_24826 = state_24766__$1;
(statearr_24781_24826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (6))){
var inst_24747 = (state_24766[(11)]);
var inst_24745 = (state_24766[(7)]);
var inst_24697 = (state_24766[(8)]);
var inst_24745__$1 = topic_fn.call(null,inst_24697);
var inst_24746 = cljs.core.deref.call(null,mults);
var inst_24747__$1 = cljs.core.get.call(null,inst_24746,inst_24745__$1);
var state_24766__$1 = (function (){var statearr_24782 = state_24766;
(statearr_24782[(11)] = inst_24747__$1);

(statearr_24782[(7)] = inst_24745__$1);

return statearr_24782;
})();
if(cljs.core.truth_(inst_24747__$1)){
var statearr_24783_24827 = state_24766__$1;
(statearr_24783_24827[(1)] = (19));

} else {
var statearr_24784_24828 = state_24766__$1;
(statearr_24784_24828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (25))){
var inst_24756 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24785_24829 = state_24766__$1;
(statearr_24785_24829[(2)] = inst_24756);

(statearr_24785_24829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (17))){
var inst_24721 = (state_24766[(10)]);
var inst_24730 = cljs.core.first.call(null,inst_24721);
var inst_24731 = cljs.core.async.muxch_STAR_.call(null,inst_24730);
var inst_24732 = cljs.core.async.close_BANG_.call(null,inst_24731);
var inst_24733 = cljs.core.next.call(null,inst_24721);
var inst_24707 = inst_24733;
var inst_24708 = null;
var inst_24709 = (0);
var inst_24710 = (0);
var state_24766__$1 = (function (){var statearr_24786 = state_24766;
(statearr_24786[(12)] = inst_24708);

(statearr_24786[(13)] = inst_24707);

(statearr_24786[(14)] = inst_24732);

(statearr_24786[(15)] = inst_24710);

(statearr_24786[(16)] = inst_24709);

return statearr_24786;
})();
var statearr_24787_24830 = state_24766__$1;
(statearr_24787_24830[(2)] = null);

(statearr_24787_24830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (3))){
var inst_24764 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24766__$1,inst_24764);
} else {
if((state_val_24767 === (12))){
var inst_24741 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24788_24831 = state_24766__$1;
(statearr_24788_24831[(2)] = inst_24741);

(statearr_24788_24831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (2))){
var state_24766__$1 = state_24766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24766__$1,(4),ch);
} else {
if((state_val_24767 === (23))){
var state_24766__$1 = state_24766;
var statearr_24789_24832 = state_24766__$1;
(statearr_24789_24832[(2)] = null);

(statearr_24789_24832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (19))){
var inst_24747 = (state_24766[(11)]);
var inst_24697 = (state_24766[(8)]);
var inst_24749 = cljs.core.async.muxch_STAR_.call(null,inst_24747);
var state_24766__$1 = state_24766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24766__$1,(22),inst_24749,inst_24697);
} else {
if((state_val_24767 === (11))){
var inst_24707 = (state_24766[(13)]);
var inst_24721 = (state_24766[(10)]);
var inst_24721__$1 = cljs.core.seq.call(null,inst_24707);
var state_24766__$1 = (function (){var statearr_24790 = state_24766;
(statearr_24790[(10)] = inst_24721__$1);

return statearr_24790;
})();
if(inst_24721__$1){
var statearr_24791_24833 = state_24766__$1;
(statearr_24791_24833[(1)] = (13));

} else {
var statearr_24792_24834 = state_24766__$1;
(statearr_24792_24834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (9))){
var inst_24743 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24793_24835 = state_24766__$1;
(statearr_24793_24835[(2)] = inst_24743);

(statearr_24793_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (5))){
var inst_24704 = cljs.core.deref.call(null,mults);
var inst_24705 = cljs.core.vals.call(null,inst_24704);
var inst_24706 = cljs.core.seq.call(null,inst_24705);
var inst_24707 = inst_24706;
var inst_24708 = null;
var inst_24709 = (0);
var inst_24710 = (0);
var state_24766__$1 = (function (){var statearr_24794 = state_24766;
(statearr_24794[(12)] = inst_24708);

(statearr_24794[(13)] = inst_24707);

(statearr_24794[(15)] = inst_24710);

(statearr_24794[(16)] = inst_24709);

return statearr_24794;
})();
var statearr_24795_24836 = state_24766__$1;
(statearr_24795_24836[(2)] = null);

(statearr_24795_24836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (14))){
var state_24766__$1 = state_24766;
var statearr_24799_24837 = state_24766__$1;
(statearr_24799_24837[(2)] = null);

(statearr_24799_24837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (16))){
var inst_24721 = (state_24766[(10)]);
var inst_24725 = cljs.core.chunk_first.call(null,inst_24721);
var inst_24726 = cljs.core.chunk_rest.call(null,inst_24721);
var inst_24727 = cljs.core.count.call(null,inst_24725);
var inst_24707 = inst_24726;
var inst_24708 = inst_24725;
var inst_24709 = inst_24727;
var inst_24710 = (0);
var state_24766__$1 = (function (){var statearr_24800 = state_24766;
(statearr_24800[(12)] = inst_24708);

(statearr_24800[(13)] = inst_24707);

(statearr_24800[(15)] = inst_24710);

(statearr_24800[(16)] = inst_24709);

return statearr_24800;
})();
var statearr_24801_24838 = state_24766__$1;
(statearr_24801_24838[(2)] = null);

(statearr_24801_24838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (10))){
var inst_24708 = (state_24766[(12)]);
var inst_24707 = (state_24766[(13)]);
var inst_24710 = (state_24766[(15)]);
var inst_24709 = (state_24766[(16)]);
var inst_24715 = cljs.core._nth.call(null,inst_24708,inst_24710);
var inst_24716 = cljs.core.async.muxch_STAR_.call(null,inst_24715);
var inst_24717 = cljs.core.async.close_BANG_.call(null,inst_24716);
var inst_24718 = (inst_24710 + (1));
var tmp24796 = inst_24708;
var tmp24797 = inst_24707;
var tmp24798 = inst_24709;
var inst_24707__$1 = tmp24797;
var inst_24708__$1 = tmp24796;
var inst_24709__$1 = tmp24798;
var inst_24710__$1 = inst_24718;
var state_24766__$1 = (function (){var statearr_24802 = state_24766;
(statearr_24802[(12)] = inst_24708__$1);

(statearr_24802[(17)] = inst_24717);

(statearr_24802[(13)] = inst_24707__$1);

(statearr_24802[(15)] = inst_24710__$1);

(statearr_24802[(16)] = inst_24709__$1);

return statearr_24802;
})();
var statearr_24803_24839 = state_24766__$1;
(statearr_24803_24839[(2)] = null);

(statearr_24803_24839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (18))){
var inst_24736 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
var statearr_24804_24840 = state_24766__$1;
(statearr_24804_24840[(2)] = inst_24736);

(statearr_24804_24840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24767 === (8))){
var inst_24710 = (state_24766[(15)]);
var inst_24709 = (state_24766[(16)]);
var inst_24712 = (inst_24710 < inst_24709);
var inst_24713 = inst_24712;
var state_24766__$1 = state_24766;
if(cljs.core.truth_(inst_24713)){
var statearr_24805_24841 = state_24766__$1;
(statearr_24805_24841[(1)] = (10));

} else {
var statearr_24806_24842 = state_24766__$1;
(statearr_24806_24842[(1)] = (11));

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
});})(c__7043__auto___24814,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___24814,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24810[(0)] = state_machine__6988__auto__);

(statearr_24810[(1)] = (1));

return statearr_24810;
});
var state_machine__6988__auto____1 = (function (state_24766){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24811){if((e24811 instanceof Object)){
var ex__6991__auto__ = e24811;
var statearr_24812_24843 = state_24766;
(statearr_24812_24843[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24844 = state_24766;
state_24766 = G__24844;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24766){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24814,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_24813 = f__7044__auto__.call(null);
(statearr_24813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24814);

return statearr_24813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24814,mults,ensure_mult,p))
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
var c__7043__auto___24981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24951){
var state_val_24952 = (state_24951[(1)]);
if((state_val_24952 === (7))){
var state_24951__$1 = state_24951;
var statearr_24953_24982 = state_24951__$1;
(statearr_24953_24982[(2)] = null);

(statearr_24953_24982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (1))){
var state_24951__$1 = state_24951;
var statearr_24954_24983 = state_24951__$1;
(statearr_24954_24983[(2)] = null);

(statearr_24954_24983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (4))){
var inst_24915 = (state_24951[(7)]);
var inst_24917 = (inst_24915 < cnt);
var state_24951__$1 = state_24951;
if(cljs.core.truth_(inst_24917)){
var statearr_24955_24984 = state_24951__$1;
(statearr_24955_24984[(1)] = (6));

} else {
var statearr_24956_24985 = state_24951__$1;
(statearr_24956_24985[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (15))){
var inst_24947 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
var statearr_24957_24986 = state_24951__$1;
(statearr_24957_24986[(2)] = inst_24947);

(statearr_24957_24986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (13))){
var inst_24940 = cljs.core.async.close_BANG_.call(null,out);
var state_24951__$1 = state_24951;
var statearr_24958_24987 = state_24951__$1;
(statearr_24958_24987[(2)] = inst_24940);

(statearr_24958_24987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (6))){
var state_24951__$1 = state_24951;
var statearr_24959_24988 = state_24951__$1;
(statearr_24959_24988[(2)] = null);

(statearr_24959_24988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (3))){
var inst_24949 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24951__$1,inst_24949);
} else {
if((state_val_24952 === (12))){
var inst_24937 = (state_24951[(8)]);
var inst_24937__$1 = (state_24951[(2)]);
var inst_24938 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24937__$1);
var state_24951__$1 = (function (){var statearr_24960 = state_24951;
(statearr_24960[(8)] = inst_24937__$1);

return statearr_24960;
})();
if(cljs.core.truth_(inst_24938)){
var statearr_24961_24989 = state_24951__$1;
(statearr_24961_24989[(1)] = (13));

} else {
var statearr_24962_24990 = state_24951__$1;
(statearr_24962_24990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (2))){
var inst_24914 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24915 = (0);
var state_24951__$1 = (function (){var statearr_24963 = state_24951;
(statearr_24963[(7)] = inst_24915);

(statearr_24963[(9)] = inst_24914);

return statearr_24963;
})();
var statearr_24964_24991 = state_24951__$1;
(statearr_24964_24991[(2)] = null);

(statearr_24964_24991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (11))){
var inst_24915 = (state_24951[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24951,(10),Object,null,(9));
var inst_24924 = chs__$1.call(null,inst_24915);
var inst_24925 = done.call(null,inst_24915);
var inst_24926 = cljs.core.async.take_BANG_.call(null,inst_24924,inst_24925);
var state_24951__$1 = state_24951;
var statearr_24965_24992 = state_24951__$1;
(statearr_24965_24992[(2)] = inst_24926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24951__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (9))){
var inst_24915 = (state_24951[(7)]);
var inst_24928 = (state_24951[(2)]);
var inst_24929 = (inst_24915 + (1));
var inst_24915__$1 = inst_24929;
var state_24951__$1 = (function (){var statearr_24966 = state_24951;
(statearr_24966[(7)] = inst_24915__$1);

(statearr_24966[(10)] = inst_24928);

return statearr_24966;
})();
var statearr_24967_24993 = state_24951__$1;
(statearr_24967_24993[(2)] = null);

(statearr_24967_24993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (5))){
var inst_24935 = (state_24951[(2)]);
var state_24951__$1 = (function (){var statearr_24968 = state_24951;
(statearr_24968[(11)] = inst_24935);

return statearr_24968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24951__$1,(12),dchan);
} else {
if((state_val_24952 === (14))){
var inst_24937 = (state_24951[(8)]);
var inst_24942 = cljs.core.apply.call(null,f,inst_24937);
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24951__$1,(16),out,inst_24942);
} else {
if((state_val_24952 === (16))){
var inst_24944 = (state_24951[(2)]);
var state_24951__$1 = (function (){var statearr_24969 = state_24951;
(statearr_24969[(12)] = inst_24944);

return statearr_24969;
})();
var statearr_24970_24994 = state_24951__$1;
(statearr_24970_24994[(2)] = null);

(statearr_24970_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (10))){
var inst_24919 = (state_24951[(2)]);
var inst_24920 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24951__$1 = (function (){var statearr_24971 = state_24951;
(statearr_24971[(13)] = inst_24919);

return statearr_24971;
})();
var statearr_24972_24995 = state_24951__$1;
(statearr_24972_24995[(2)] = inst_24920);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24951__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (8))){
var inst_24933 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
var statearr_24973_24996 = state_24951__$1;
(statearr_24973_24996[(2)] = inst_24933);

(statearr_24973_24996[(1)] = (5));


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
});})(c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = state_machine__6988__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var state_machine__6988__auto____1 = (function (state_24951){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__6991__auto__ = e24978;
var statearr_24979_24997 = state_24951;
(statearr_24979_24997[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24951;
state_24951 = G__24998;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24951){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_24980 = f__7044__auto__.call(null);
(statearr_24980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24981);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24981,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___25106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25106,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25106,out){
return (function (state_25082){
var state_val_25083 = (state_25082[(1)]);
if((state_val_25083 === (7))){
var inst_25062 = (state_25082[(7)]);
var inst_25061 = (state_25082[(8)]);
var inst_25061__$1 = (state_25082[(2)]);
var inst_25062__$1 = cljs.core.nth.call(null,inst_25061__$1,(0),null);
var inst_25063 = cljs.core.nth.call(null,inst_25061__$1,(1),null);
var inst_25064 = (inst_25062__$1 == null);
var state_25082__$1 = (function (){var statearr_25084 = state_25082;
(statearr_25084[(9)] = inst_25063);

(statearr_25084[(7)] = inst_25062__$1);

(statearr_25084[(8)] = inst_25061__$1);

return statearr_25084;
})();
if(cljs.core.truth_(inst_25064)){
var statearr_25085_25107 = state_25082__$1;
(statearr_25085_25107[(1)] = (8));

} else {
var statearr_25086_25108 = state_25082__$1;
(statearr_25086_25108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (1))){
var inst_25053 = cljs.core.vec.call(null,chs);
var inst_25054 = inst_25053;
var state_25082__$1 = (function (){var statearr_25087 = state_25082;
(statearr_25087[(10)] = inst_25054);

return statearr_25087;
})();
var statearr_25088_25109 = state_25082__$1;
(statearr_25088_25109[(2)] = null);

(statearr_25088_25109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (4))){
var inst_25054 = (state_25082[(10)]);
var state_25082__$1 = state_25082;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25082__$1,(7),inst_25054);
} else {
if((state_val_25083 === (6))){
var inst_25078 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25089_25110 = state_25082__$1;
(statearr_25089_25110[(2)] = inst_25078);

(statearr_25089_25110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (3))){
var inst_25080 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25082__$1,inst_25080);
} else {
if((state_val_25083 === (2))){
var inst_25054 = (state_25082[(10)]);
var inst_25056 = cljs.core.count.call(null,inst_25054);
var inst_25057 = (inst_25056 > (0));
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25057)){
var statearr_25091_25111 = state_25082__$1;
(statearr_25091_25111[(1)] = (4));

} else {
var statearr_25092_25112 = state_25082__$1;
(statearr_25092_25112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (11))){
var inst_25054 = (state_25082[(10)]);
var inst_25071 = (state_25082[(2)]);
var tmp25090 = inst_25054;
var inst_25054__$1 = tmp25090;
var state_25082__$1 = (function (){var statearr_25093 = state_25082;
(statearr_25093[(11)] = inst_25071);

(statearr_25093[(10)] = inst_25054__$1);

return statearr_25093;
})();
var statearr_25094_25113 = state_25082__$1;
(statearr_25094_25113[(2)] = null);

(statearr_25094_25113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (9))){
var inst_25062 = (state_25082[(7)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25082__$1,(11),out,inst_25062);
} else {
if((state_val_25083 === (5))){
var inst_25076 = cljs.core.async.close_BANG_.call(null,out);
var state_25082__$1 = state_25082;
var statearr_25095_25114 = state_25082__$1;
(statearr_25095_25114[(2)] = inst_25076);

(statearr_25095_25114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (10))){
var inst_25074 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25096_25115 = state_25082__$1;
(statearr_25096_25115[(2)] = inst_25074);

(statearr_25096_25115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (8))){
var inst_25054 = (state_25082[(10)]);
var inst_25063 = (state_25082[(9)]);
var inst_25062 = (state_25082[(7)]);
var inst_25061 = (state_25082[(8)]);
var inst_25066 = (function (){var c = inst_25063;
var v = inst_25062;
var vec__25059 = inst_25061;
var cs = inst_25054;
return ((function (c,v,vec__25059,cs,inst_25054,inst_25063,inst_25062,inst_25061,state_val_25083,c__7043__auto___25106,out){
return (function (p1__24999_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24999_SHARP_);
});
;})(c,v,vec__25059,cs,inst_25054,inst_25063,inst_25062,inst_25061,state_val_25083,c__7043__auto___25106,out))
})();
var inst_25067 = cljs.core.filterv.call(null,inst_25066,inst_25054);
var inst_25054__$1 = inst_25067;
var state_25082__$1 = (function (){var statearr_25097 = state_25082;
(statearr_25097[(10)] = inst_25054__$1);

return statearr_25097;
})();
var statearr_25098_25116 = state_25082__$1;
(statearr_25098_25116[(2)] = null);

(statearr_25098_25116[(1)] = (2));


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
});})(c__7043__auto___25106,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25106,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = state_machine__6988__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var state_machine__6988__auto____1 = (function (state_25082){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__6991__auto__ = e25103;
var statearr_25104_25117 = state_25082;
(statearr_25104_25117[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25118 = state_25082;
state_25082 = G__25118;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25082){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25106,out))
})();
var state__7045__auto__ = (function (){var statearr_25105 = f__7044__auto__.call(null);
(statearr_25105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25106);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25106,out))
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
var c__7043__auto___25211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25211,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25211,out){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (7))){
var inst_25170 = (state_25188[(7)]);
var inst_25170__$1 = (state_25188[(2)]);
var inst_25171 = (inst_25170__$1 == null);
var inst_25172 = cljs.core.not.call(null,inst_25171);
var state_25188__$1 = (function (){var statearr_25190 = state_25188;
(statearr_25190[(7)] = inst_25170__$1);

return statearr_25190;
})();
if(inst_25172){
var statearr_25191_25212 = state_25188__$1;
(statearr_25191_25212[(1)] = (8));

} else {
var statearr_25192_25213 = state_25188__$1;
(statearr_25192_25213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (1))){
var inst_25165 = (0);
var state_25188__$1 = (function (){var statearr_25193 = state_25188;
(statearr_25193[(8)] = inst_25165);

return statearr_25193;
})();
var statearr_25194_25214 = state_25188__$1;
(statearr_25194_25214[(2)] = null);

(statearr_25194_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (4))){
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(7),ch);
} else {
if((state_val_25189 === (6))){
var inst_25183 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25195_25215 = state_25188__$1;
(statearr_25195_25215[(2)] = inst_25183);

(statearr_25195_25215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (3))){
var inst_25185 = (state_25188[(2)]);
var inst_25186 = cljs.core.async.close_BANG_.call(null,out);
var state_25188__$1 = (function (){var statearr_25196 = state_25188;
(statearr_25196[(9)] = inst_25185);

return statearr_25196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
if((state_val_25189 === (2))){
var inst_25165 = (state_25188[(8)]);
var inst_25167 = (inst_25165 < n);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25167)){
var statearr_25197_25216 = state_25188__$1;
(statearr_25197_25216[(1)] = (4));

} else {
var statearr_25198_25217 = state_25188__$1;
(statearr_25198_25217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (11))){
var inst_25165 = (state_25188[(8)]);
var inst_25175 = (state_25188[(2)]);
var inst_25176 = (inst_25165 + (1));
var inst_25165__$1 = inst_25176;
var state_25188__$1 = (function (){var statearr_25199 = state_25188;
(statearr_25199[(8)] = inst_25165__$1);

(statearr_25199[(10)] = inst_25175);

return statearr_25199;
})();
var statearr_25200_25218 = state_25188__$1;
(statearr_25200_25218[(2)] = null);

(statearr_25200_25218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (9))){
var state_25188__$1 = state_25188;
var statearr_25201_25219 = state_25188__$1;
(statearr_25201_25219[(2)] = null);

(statearr_25201_25219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (5))){
var state_25188__$1 = state_25188;
var statearr_25202_25220 = state_25188__$1;
(statearr_25202_25220[(2)] = null);

(statearr_25202_25220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (10))){
var inst_25180 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25203_25221 = state_25188__$1;
(statearr_25203_25221[(2)] = inst_25180);

(statearr_25203_25221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (8))){
var inst_25170 = (state_25188[(7)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,(11),out,inst_25170);
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
});})(c__7043__auto___25211,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25211,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25207[(0)] = state_machine__6988__auto__);

(statearr_25207[(1)] = (1));

return statearr_25207;
});
var state_machine__6988__auto____1 = (function (state_25188){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25208){if((e25208 instanceof Object)){
var ex__6991__auto__ = e25208;
var statearr_25209_25222 = state_25188;
(statearr_25209_25222[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25223 = state_25188;
state_25188 = G__25223;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25211,out))
})();
var state__7045__auto__ = (function (){var statearr_25210 = f__7044__auto__.call(null);
(statearr_25210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25211);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25211,out))
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
if(typeof cljs.core.async.t25231 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25231 = (function (ch,f,map_LT_,meta25232){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25232 = meta25232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25234 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25234 = (function (fn1,_,meta25232,map_LT_,f,ch,meta25235){
this.fn1 = fn1;
this._ = _;
this.meta25232 = meta25232;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25235 = meta25235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25234.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25224_SHARP_){
return f1.call(null,(((p1__25224_SHARP_ == null))?null:self__.f.call(null,p1__25224_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25236){
var self__ = this;
var _25236__$1 = this;
return self__.meta25235;
});})(___$1))
;

cljs.core.async.t25234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25236,meta25235__$1){
var self__ = this;
var _25236__$1 = this;
return (new cljs.core.async.t25234(self__.fn1,self__._,self__.meta25232,self__.map_LT_,self__.f,self__.ch,meta25235__$1));
});})(___$1))
;

cljs.core.async.t25234.cljs$lang$type = true;

cljs.core.async.t25234.cljs$lang$ctorStr = "cljs.core.async/t25234";

cljs.core.async.t25234.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25234");
});})(___$1))
;

cljs.core.async.__GT_t25234 = ((function (___$1){
return (function __GT_t25234(fn1__$1,___$2,meta25232__$1,map_LT___$1,f__$1,ch__$1,meta25235){
return (new cljs.core.async.t25234(fn1__$1,___$2,meta25232__$1,map_LT___$1,f__$1,ch__$1,meta25235));
});})(___$1))
;

}

return (new cljs.core.async.t25234(fn1,___$1,self__.meta25232,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25231.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25233){
var self__ = this;
var _25233__$1 = this;
return self__.meta25232;
});

cljs.core.async.t25231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25233,meta25232__$1){
var self__ = this;
var _25233__$1 = this;
return (new cljs.core.async.t25231(self__.ch,self__.f,self__.map_LT_,meta25232__$1));
});

cljs.core.async.t25231.cljs$lang$type = true;

cljs.core.async.t25231.cljs$lang$ctorStr = "cljs.core.async/t25231";

cljs.core.async.t25231.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25231");
});

cljs.core.async.__GT_t25231 = (function __GT_t25231(ch__$1,f__$1,map_LT___$1,meta25232){
return (new cljs.core.async.t25231(ch__$1,f__$1,map_LT___$1,meta25232));
});

}

return (new cljs.core.async.t25231(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25240 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25240 = (function (ch,f,map_GT_,meta25241){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25241 = meta25241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25242){
var self__ = this;
var _25242__$1 = this;
return self__.meta25241;
});

cljs.core.async.t25240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25242,meta25241__$1){
var self__ = this;
var _25242__$1 = this;
return (new cljs.core.async.t25240(self__.ch,self__.f,self__.map_GT_,meta25241__$1));
});

cljs.core.async.t25240.cljs$lang$type = true;

cljs.core.async.t25240.cljs$lang$ctorStr = "cljs.core.async/t25240";

cljs.core.async.t25240.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25240");
});

cljs.core.async.__GT_t25240 = (function __GT_t25240(ch__$1,f__$1,map_GT___$1,meta25241){
return (new cljs.core.async.t25240(ch__$1,f__$1,map_GT___$1,meta25241));
});

}

return (new cljs.core.async.t25240(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25246 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25246 = (function (ch,p,filter_GT_,meta25247){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25247 = meta25247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25248){
var self__ = this;
var _25248__$1 = this;
return self__.meta25247;
});

cljs.core.async.t25246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25248,meta25247__$1){
var self__ = this;
var _25248__$1 = this;
return (new cljs.core.async.t25246(self__.ch,self__.p,self__.filter_GT_,meta25247__$1));
});

cljs.core.async.t25246.cljs$lang$type = true;

cljs.core.async.t25246.cljs$lang$ctorStr = "cljs.core.async/t25246";

cljs.core.async.t25246.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25246");
});

cljs.core.async.__GT_t25246 = (function __GT_t25246(ch__$1,p__$1,filter_GT___$1,meta25247){
return (new cljs.core.async.t25246(ch__$1,p__$1,filter_GT___$1,meta25247));
});

}

return (new cljs.core.async.t25246(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___25331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25331,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25331,out){
return (function (state_25310){
var state_val_25311 = (state_25310[(1)]);
if((state_val_25311 === (7))){
var inst_25306 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
var statearr_25312_25332 = state_25310__$1;
(statearr_25312_25332[(2)] = inst_25306);

(statearr_25312_25332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (1))){
var state_25310__$1 = state_25310;
var statearr_25313_25333 = state_25310__$1;
(statearr_25313_25333[(2)] = null);

(statearr_25313_25333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (4))){
var inst_25292 = (state_25310[(7)]);
var inst_25292__$1 = (state_25310[(2)]);
var inst_25293 = (inst_25292__$1 == null);
var state_25310__$1 = (function (){var statearr_25314 = state_25310;
(statearr_25314[(7)] = inst_25292__$1);

return statearr_25314;
})();
if(cljs.core.truth_(inst_25293)){
var statearr_25315_25334 = state_25310__$1;
(statearr_25315_25334[(1)] = (5));

} else {
var statearr_25316_25335 = state_25310__$1;
(statearr_25316_25335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (6))){
var inst_25292 = (state_25310[(7)]);
var inst_25297 = p.call(null,inst_25292);
var state_25310__$1 = state_25310;
if(cljs.core.truth_(inst_25297)){
var statearr_25317_25336 = state_25310__$1;
(statearr_25317_25336[(1)] = (8));

} else {
var statearr_25318_25337 = state_25310__$1;
(statearr_25318_25337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (3))){
var inst_25308 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25310__$1,inst_25308);
} else {
if((state_val_25311 === (2))){
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25310__$1,(4),ch);
} else {
if((state_val_25311 === (11))){
var inst_25300 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
var statearr_25319_25338 = state_25310__$1;
(statearr_25319_25338[(2)] = inst_25300);

(statearr_25319_25338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (9))){
var state_25310__$1 = state_25310;
var statearr_25320_25339 = state_25310__$1;
(statearr_25320_25339[(2)] = null);

(statearr_25320_25339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (5))){
var inst_25295 = cljs.core.async.close_BANG_.call(null,out);
var state_25310__$1 = state_25310;
var statearr_25321_25340 = state_25310__$1;
(statearr_25321_25340[(2)] = inst_25295);

(statearr_25321_25340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (10))){
var inst_25303 = (state_25310[(2)]);
var state_25310__$1 = (function (){var statearr_25322 = state_25310;
(statearr_25322[(8)] = inst_25303);

return statearr_25322;
})();
var statearr_25323_25341 = state_25310__$1;
(statearr_25323_25341[(2)] = null);

(statearr_25323_25341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (8))){
var inst_25292 = (state_25310[(7)]);
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25310__$1,(11),out,inst_25292);
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
});})(c__7043__auto___25331,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25331,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25327 = [null,null,null,null,null,null,null,null,null];
(statearr_25327[(0)] = state_machine__6988__auto__);

(statearr_25327[(1)] = (1));

return statearr_25327;
});
var state_machine__6988__auto____1 = (function (state_25310){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25328){if((e25328 instanceof Object)){
var ex__6991__auto__ = e25328;
var statearr_25329_25342 = state_25310;
(statearr_25329_25342[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25343 = state_25310;
state_25310 = G__25343;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25310){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25331,out))
})();
var state__7045__auto__ = (function (){var statearr_25330 = f__7044__auto__.call(null);
(statearr_25330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25331);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25331,out))
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
return (function (state_25509){
var state_val_25510 = (state_25509[(1)]);
if((state_val_25510 === (7))){
var inst_25505 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25511_25552 = state_25509__$1;
(statearr_25511_25552[(2)] = inst_25505);

(statearr_25511_25552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (20))){
var inst_25475 = (state_25509[(7)]);
var inst_25486 = (state_25509[(2)]);
var inst_25487 = cljs.core.next.call(null,inst_25475);
var inst_25461 = inst_25487;
var inst_25462 = null;
var inst_25463 = (0);
var inst_25464 = (0);
var state_25509__$1 = (function (){var statearr_25512 = state_25509;
(statearr_25512[(8)] = inst_25461);

(statearr_25512[(9)] = inst_25486);

(statearr_25512[(10)] = inst_25463);

(statearr_25512[(11)] = inst_25462);

(statearr_25512[(12)] = inst_25464);

return statearr_25512;
})();
var statearr_25513_25553 = state_25509__$1;
(statearr_25513_25553[(2)] = null);

(statearr_25513_25553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (1))){
var state_25509__$1 = state_25509;
var statearr_25514_25554 = state_25509__$1;
(statearr_25514_25554[(2)] = null);

(statearr_25514_25554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (4))){
var inst_25450 = (state_25509[(13)]);
var inst_25450__$1 = (state_25509[(2)]);
var inst_25451 = (inst_25450__$1 == null);
var state_25509__$1 = (function (){var statearr_25515 = state_25509;
(statearr_25515[(13)] = inst_25450__$1);

return statearr_25515;
})();
if(cljs.core.truth_(inst_25451)){
var statearr_25516_25555 = state_25509__$1;
(statearr_25516_25555[(1)] = (5));

} else {
var statearr_25517_25556 = state_25509__$1;
(statearr_25517_25556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (15))){
var state_25509__$1 = state_25509;
var statearr_25521_25557 = state_25509__$1;
(statearr_25521_25557[(2)] = null);

(statearr_25521_25557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (21))){
var state_25509__$1 = state_25509;
var statearr_25522_25558 = state_25509__$1;
(statearr_25522_25558[(2)] = null);

(statearr_25522_25558[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (13))){
var inst_25461 = (state_25509[(8)]);
var inst_25463 = (state_25509[(10)]);
var inst_25462 = (state_25509[(11)]);
var inst_25464 = (state_25509[(12)]);
var inst_25471 = (state_25509[(2)]);
var inst_25472 = (inst_25464 + (1));
var tmp25518 = inst_25461;
var tmp25519 = inst_25463;
var tmp25520 = inst_25462;
var inst_25461__$1 = tmp25518;
var inst_25462__$1 = tmp25520;
var inst_25463__$1 = tmp25519;
var inst_25464__$1 = inst_25472;
var state_25509__$1 = (function (){var statearr_25523 = state_25509;
(statearr_25523[(8)] = inst_25461__$1);

(statearr_25523[(14)] = inst_25471);

(statearr_25523[(10)] = inst_25463__$1);

(statearr_25523[(11)] = inst_25462__$1);

(statearr_25523[(12)] = inst_25464__$1);

return statearr_25523;
})();
var statearr_25524_25559 = state_25509__$1;
(statearr_25524_25559[(2)] = null);

(statearr_25524_25559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (22))){
var state_25509__$1 = state_25509;
var statearr_25525_25560 = state_25509__$1;
(statearr_25525_25560[(2)] = null);

(statearr_25525_25560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (6))){
var inst_25450 = (state_25509[(13)]);
var inst_25459 = f.call(null,inst_25450);
var inst_25460 = cljs.core.seq.call(null,inst_25459);
var inst_25461 = inst_25460;
var inst_25462 = null;
var inst_25463 = (0);
var inst_25464 = (0);
var state_25509__$1 = (function (){var statearr_25526 = state_25509;
(statearr_25526[(8)] = inst_25461);

(statearr_25526[(10)] = inst_25463);

(statearr_25526[(11)] = inst_25462);

(statearr_25526[(12)] = inst_25464);

return statearr_25526;
})();
var statearr_25527_25561 = state_25509__$1;
(statearr_25527_25561[(2)] = null);

(statearr_25527_25561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (17))){
var inst_25475 = (state_25509[(7)]);
var inst_25479 = cljs.core.chunk_first.call(null,inst_25475);
var inst_25480 = cljs.core.chunk_rest.call(null,inst_25475);
var inst_25481 = cljs.core.count.call(null,inst_25479);
var inst_25461 = inst_25480;
var inst_25462 = inst_25479;
var inst_25463 = inst_25481;
var inst_25464 = (0);
var state_25509__$1 = (function (){var statearr_25528 = state_25509;
(statearr_25528[(8)] = inst_25461);

(statearr_25528[(10)] = inst_25463);

(statearr_25528[(11)] = inst_25462);

(statearr_25528[(12)] = inst_25464);

return statearr_25528;
})();
var statearr_25529_25562 = state_25509__$1;
(statearr_25529_25562[(2)] = null);

(statearr_25529_25562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (3))){
var inst_25507 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25509__$1,inst_25507);
} else {
if((state_val_25510 === (12))){
var inst_25495 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25530_25563 = state_25509__$1;
(statearr_25530_25563[(2)] = inst_25495);

(statearr_25530_25563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (2))){
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25509__$1,(4),in$);
} else {
if((state_val_25510 === (23))){
var inst_25503 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25531_25564 = state_25509__$1;
(statearr_25531_25564[(2)] = inst_25503);

(statearr_25531_25564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (19))){
var inst_25490 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25532_25565 = state_25509__$1;
(statearr_25532_25565[(2)] = inst_25490);

(statearr_25532_25565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (11))){
var inst_25461 = (state_25509[(8)]);
var inst_25475 = (state_25509[(7)]);
var inst_25475__$1 = cljs.core.seq.call(null,inst_25461);
var state_25509__$1 = (function (){var statearr_25533 = state_25509;
(statearr_25533[(7)] = inst_25475__$1);

return statearr_25533;
})();
if(inst_25475__$1){
var statearr_25534_25566 = state_25509__$1;
(statearr_25534_25566[(1)] = (14));

} else {
var statearr_25535_25567 = state_25509__$1;
(statearr_25535_25567[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (9))){
var inst_25497 = (state_25509[(2)]);
var inst_25498 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25509__$1 = (function (){var statearr_25536 = state_25509;
(statearr_25536[(15)] = inst_25497);

return statearr_25536;
})();
if(cljs.core.truth_(inst_25498)){
var statearr_25537_25568 = state_25509__$1;
(statearr_25537_25568[(1)] = (21));

} else {
var statearr_25538_25569 = state_25509__$1;
(statearr_25538_25569[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (5))){
var inst_25453 = cljs.core.async.close_BANG_.call(null,out);
var state_25509__$1 = state_25509;
var statearr_25539_25570 = state_25509__$1;
(statearr_25539_25570[(2)] = inst_25453);

(statearr_25539_25570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (14))){
var inst_25475 = (state_25509[(7)]);
var inst_25477 = cljs.core.chunked_seq_QMARK_.call(null,inst_25475);
var state_25509__$1 = state_25509;
if(inst_25477){
var statearr_25540_25571 = state_25509__$1;
(statearr_25540_25571[(1)] = (17));

} else {
var statearr_25541_25572 = state_25509__$1;
(statearr_25541_25572[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (16))){
var inst_25493 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25542_25573 = state_25509__$1;
(statearr_25542_25573[(2)] = inst_25493);

(statearr_25542_25573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (10))){
var inst_25462 = (state_25509[(11)]);
var inst_25464 = (state_25509[(12)]);
var inst_25469 = cljs.core._nth.call(null,inst_25462,inst_25464);
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25509__$1,(13),out,inst_25469);
} else {
if((state_val_25510 === (18))){
var inst_25475 = (state_25509[(7)]);
var inst_25484 = cljs.core.first.call(null,inst_25475);
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25509__$1,(20),out,inst_25484);
} else {
if((state_val_25510 === (8))){
var inst_25463 = (state_25509[(10)]);
var inst_25464 = (state_25509[(12)]);
var inst_25466 = (inst_25464 < inst_25463);
var inst_25467 = inst_25466;
var state_25509__$1 = state_25509;
if(cljs.core.truth_(inst_25467)){
var statearr_25543_25574 = state_25509__$1;
(statearr_25543_25574[(1)] = (10));

} else {
var statearr_25544_25575 = state_25509__$1;
(statearr_25544_25575[(1)] = (11));

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
var statearr_25548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25548[(0)] = state_machine__6988__auto__);

(statearr_25548[(1)] = (1));

return statearr_25548;
});
var state_machine__6988__auto____1 = (function (state_25509){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25549){if((e25549 instanceof Object)){
var ex__6991__auto__ = e25549;
var statearr_25550_25576 = state_25509;
(statearr_25550_25576[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25577 = state_25509;
state_25509 = G__25577;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25509){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_25551 = f__7044__auto__.call(null);
(statearr_25551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_25551;
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
var c__7043__auto___25674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25674,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25674,out){
return (function (state_25649){
var state_val_25650 = (state_25649[(1)]);
if((state_val_25650 === (7))){
var inst_25644 = (state_25649[(2)]);
var state_25649__$1 = state_25649;
var statearr_25651_25675 = state_25649__$1;
(statearr_25651_25675[(2)] = inst_25644);

(statearr_25651_25675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (1))){
var inst_25626 = null;
var state_25649__$1 = (function (){var statearr_25652 = state_25649;
(statearr_25652[(7)] = inst_25626);

return statearr_25652;
})();
var statearr_25653_25676 = state_25649__$1;
(statearr_25653_25676[(2)] = null);

(statearr_25653_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (4))){
var inst_25629 = (state_25649[(8)]);
var inst_25629__$1 = (state_25649[(2)]);
var inst_25630 = (inst_25629__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25649__$1 = (function (){var statearr_25654 = state_25649;
(statearr_25654[(8)] = inst_25629__$1);

return statearr_25654;
})();
if(inst_25631){
var statearr_25655_25677 = state_25649__$1;
(statearr_25655_25677[(1)] = (5));

} else {
var statearr_25656_25678 = state_25649__$1;
(statearr_25656_25678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (6))){
var state_25649__$1 = state_25649;
var statearr_25657_25679 = state_25649__$1;
(statearr_25657_25679[(2)] = null);

(statearr_25657_25679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (3))){
var inst_25646 = (state_25649[(2)]);
var inst_25647 = cljs.core.async.close_BANG_.call(null,out);
var state_25649__$1 = (function (){var statearr_25658 = state_25649;
(statearr_25658[(9)] = inst_25646);

return statearr_25658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25649__$1,inst_25647);
} else {
if((state_val_25650 === (2))){
var state_25649__$1 = state_25649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25649__$1,(4),ch);
} else {
if((state_val_25650 === (11))){
var inst_25629 = (state_25649[(8)]);
var inst_25638 = (state_25649[(2)]);
var inst_25626 = inst_25629;
var state_25649__$1 = (function (){var statearr_25659 = state_25649;
(statearr_25659[(7)] = inst_25626);

(statearr_25659[(10)] = inst_25638);

return statearr_25659;
})();
var statearr_25660_25680 = state_25649__$1;
(statearr_25660_25680[(2)] = null);

(statearr_25660_25680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (9))){
var inst_25629 = (state_25649[(8)]);
var state_25649__$1 = state_25649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25649__$1,(11),out,inst_25629);
} else {
if((state_val_25650 === (5))){
var inst_25626 = (state_25649[(7)]);
var inst_25629 = (state_25649[(8)]);
var inst_25633 = cljs.core._EQ_.call(null,inst_25629,inst_25626);
var state_25649__$1 = state_25649;
if(inst_25633){
var statearr_25662_25681 = state_25649__$1;
(statearr_25662_25681[(1)] = (8));

} else {
var statearr_25663_25682 = state_25649__$1;
(statearr_25663_25682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (10))){
var inst_25641 = (state_25649[(2)]);
var state_25649__$1 = state_25649;
var statearr_25664_25683 = state_25649__$1;
(statearr_25664_25683[(2)] = inst_25641);

(statearr_25664_25683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25650 === (8))){
var inst_25626 = (state_25649[(7)]);
var tmp25661 = inst_25626;
var inst_25626__$1 = tmp25661;
var state_25649__$1 = (function (){var statearr_25665 = state_25649;
(statearr_25665[(7)] = inst_25626__$1);

return statearr_25665;
})();
var statearr_25666_25684 = state_25649__$1;
(statearr_25666_25684[(2)] = null);

(statearr_25666_25684[(1)] = (2));


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
});})(c__7043__auto___25674,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25674,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = state_machine__6988__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var state_machine__6988__auto____1 = (function (state_25649){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__6991__auto__ = e25671;
var statearr_25672_25685 = state_25649;
(statearr_25672_25685[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25686 = state_25649;
state_25649 = G__25686;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25649){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25674,out))
})();
var state__7045__auto__ = (function (){var statearr_25673 = f__7044__auto__.call(null);
(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25674);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25674,out))
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
var c__7043__auto___25821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25821,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25821,out){
return (function (state_25791){
var state_val_25792 = (state_25791[(1)]);
if((state_val_25792 === (7))){
var inst_25787 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25793_25822 = state_25791__$1;
(statearr_25793_25822[(2)] = inst_25787);

(statearr_25793_25822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (1))){
var inst_25754 = (new Array(n));
var inst_25755 = inst_25754;
var inst_25756 = (0);
var state_25791__$1 = (function (){var statearr_25794 = state_25791;
(statearr_25794[(7)] = inst_25756);

(statearr_25794[(8)] = inst_25755);

return statearr_25794;
})();
var statearr_25795_25823 = state_25791__$1;
(statearr_25795_25823[(2)] = null);

(statearr_25795_25823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (4))){
var inst_25759 = (state_25791[(9)]);
var inst_25759__$1 = (state_25791[(2)]);
var inst_25760 = (inst_25759__$1 == null);
var inst_25761 = cljs.core.not.call(null,inst_25760);
var state_25791__$1 = (function (){var statearr_25796 = state_25791;
(statearr_25796[(9)] = inst_25759__$1);

return statearr_25796;
})();
if(inst_25761){
var statearr_25797_25824 = state_25791__$1;
(statearr_25797_25824[(1)] = (5));

} else {
var statearr_25798_25825 = state_25791__$1;
(statearr_25798_25825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (15))){
var inst_25781 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25799_25826 = state_25791__$1;
(statearr_25799_25826[(2)] = inst_25781);

(statearr_25799_25826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (13))){
var state_25791__$1 = state_25791;
var statearr_25800_25827 = state_25791__$1;
(statearr_25800_25827[(2)] = null);

(statearr_25800_25827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (6))){
var inst_25756 = (state_25791[(7)]);
var inst_25777 = (inst_25756 > (0));
var state_25791__$1 = state_25791;
if(cljs.core.truth_(inst_25777)){
var statearr_25801_25828 = state_25791__$1;
(statearr_25801_25828[(1)] = (12));

} else {
var statearr_25802_25829 = state_25791__$1;
(statearr_25802_25829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (3))){
var inst_25789 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25791__$1,inst_25789);
} else {
if((state_val_25792 === (12))){
var inst_25755 = (state_25791[(8)]);
var inst_25779 = cljs.core.vec.call(null,inst_25755);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25791__$1,(15),out,inst_25779);
} else {
if((state_val_25792 === (2))){
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25791__$1,(4),ch);
} else {
if((state_val_25792 === (11))){
var inst_25771 = (state_25791[(2)]);
var inst_25772 = (new Array(n));
var inst_25755 = inst_25772;
var inst_25756 = (0);
var state_25791__$1 = (function (){var statearr_25803 = state_25791;
(statearr_25803[(7)] = inst_25756);

(statearr_25803[(8)] = inst_25755);

(statearr_25803[(10)] = inst_25771);

return statearr_25803;
})();
var statearr_25804_25830 = state_25791__$1;
(statearr_25804_25830[(2)] = null);

(statearr_25804_25830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (9))){
var inst_25755 = (state_25791[(8)]);
var inst_25769 = cljs.core.vec.call(null,inst_25755);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25791__$1,(11),out,inst_25769);
} else {
if((state_val_25792 === (5))){
var inst_25756 = (state_25791[(7)]);
var inst_25755 = (state_25791[(8)]);
var inst_25759 = (state_25791[(9)]);
var inst_25764 = (state_25791[(11)]);
var inst_25763 = (inst_25755[inst_25756] = inst_25759);
var inst_25764__$1 = (inst_25756 + (1));
var inst_25765 = (inst_25764__$1 < n);
var state_25791__$1 = (function (){var statearr_25805 = state_25791;
(statearr_25805[(11)] = inst_25764__$1);

(statearr_25805[(12)] = inst_25763);

return statearr_25805;
})();
if(cljs.core.truth_(inst_25765)){
var statearr_25806_25831 = state_25791__$1;
(statearr_25806_25831[(1)] = (8));

} else {
var statearr_25807_25832 = state_25791__$1;
(statearr_25807_25832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (14))){
var inst_25784 = (state_25791[(2)]);
var inst_25785 = cljs.core.async.close_BANG_.call(null,out);
var state_25791__$1 = (function (){var statearr_25809 = state_25791;
(statearr_25809[(13)] = inst_25784);

return statearr_25809;
})();
var statearr_25810_25833 = state_25791__$1;
(statearr_25810_25833[(2)] = inst_25785);

(statearr_25810_25833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (10))){
var inst_25775 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25811_25834 = state_25791__$1;
(statearr_25811_25834[(2)] = inst_25775);

(statearr_25811_25834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (8))){
var inst_25755 = (state_25791[(8)]);
var inst_25764 = (state_25791[(11)]);
var tmp25808 = inst_25755;
var inst_25755__$1 = tmp25808;
var inst_25756 = inst_25764;
var state_25791__$1 = (function (){var statearr_25812 = state_25791;
(statearr_25812[(7)] = inst_25756);

(statearr_25812[(8)] = inst_25755__$1);

return statearr_25812;
})();
var statearr_25813_25835 = state_25791__$1;
(statearr_25813_25835[(2)] = null);

(statearr_25813_25835[(1)] = (2));


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
});})(c__7043__auto___25821,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25821,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25817[(0)] = state_machine__6988__auto__);

(statearr_25817[(1)] = (1));

return statearr_25817;
});
var state_machine__6988__auto____1 = (function (state_25791){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25818){if((e25818 instanceof Object)){
var ex__6991__auto__ = e25818;
var statearr_25819_25836 = state_25791;
(statearr_25819_25836[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25837 = state_25791;
state_25791 = G__25837;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25791){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25821,out))
})();
var state__7045__auto__ = (function (){var statearr_25820 = f__7044__auto__.call(null);
(statearr_25820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25821);

return statearr_25820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25821,out))
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
var c__7043__auto___25980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25980,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25980,out){
return (function (state_25950){
var state_val_25951 = (state_25950[(1)]);
if((state_val_25951 === (7))){
var inst_25946 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25952_25981 = state_25950__$1;
(statearr_25952_25981[(2)] = inst_25946);

(statearr_25952_25981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (1))){
var inst_25909 = [];
var inst_25910 = inst_25909;
var inst_25911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25950__$1 = (function (){var statearr_25953 = state_25950;
(statearr_25953[(7)] = inst_25910);

(statearr_25953[(8)] = inst_25911);

return statearr_25953;
})();
var statearr_25954_25982 = state_25950__$1;
(statearr_25954_25982[(2)] = null);

(statearr_25954_25982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (4))){
var inst_25914 = (state_25950[(9)]);
var inst_25914__$1 = (state_25950[(2)]);
var inst_25915 = (inst_25914__$1 == null);
var inst_25916 = cljs.core.not.call(null,inst_25915);
var state_25950__$1 = (function (){var statearr_25955 = state_25950;
(statearr_25955[(9)] = inst_25914__$1);

return statearr_25955;
})();
if(inst_25916){
var statearr_25956_25983 = state_25950__$1;
(statearr_25956_25983[(1)] = (5));

} else {
var statearr_25957_25984 = state_25950__$1;
(statearr_25957_25984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (15))){
var inst_25940 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25958_25985 = state_25950__$1;
(statearr_25958_25985[(2)] = inst_25940);

(statearr_25958_25985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (13))){
var state_25950__$1 = state_25950;
var statearr_25959_25986 = state_25950__$1;
(statearr_25959_25986[(2)] = null);

(statearr_25959_25986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (6))){
var inst_25910 = (state_25950[(7)]);
var inst_25935 = inst_25910.length;
var inst_25936 = (inst_25935 > (0));
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25936)){
var statearr_25960_25987 = state_25950__$1;
(statearr_25960_25987[(1)] = (12));

} else {
var statearr_25961_25988 = state_25950__$1;
(statearr_25961_25988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (3))){
var inst_25948 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25950__$1,inst_25948);
} else {
if((state_val_25951 === (12))){
var inst_25910 = (state_25950[(7)]);
var inst_25938 = cljs.core.vec.call(null,inst_25910);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(15),out,inst_25938);
} else {
if((state_val_25951 === (2))){
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25950__$1,(4),ch);
} else {
if((state_val_25951 === (11))){
var inst_25918 = (state_25950[(10)]);
var inst_25914 = (state_25950[(9)]);
var inst_25928 = (state_25950[(2)]);
var inst_25929 = [];
var inst_25930 = inst_25929.push(inst_25914);
var inst_25910 = inst_25929;
var inst_25911 = inst_25918;
var state_25950__$1 = (function (){var statearr_25962 = state_25950;
(statearr_25962[(11)] = inst_25928);

(statearr_25962[(7)] = inst_25910);

(statearr_25962[(12)] = inst_25930);

(statearr_25962[(8)] = inst_25911);

return statearr_25962;
})();
var statearr_25963_25989 = state_25950__$1;
(statearr_25963_25989[(2)] = null);

(statearr_25963_25989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (9))){
var inst_25910 = (state_25950[(7)]);
var inst_25926 = cljs.core.vec.call(null,inst_25910);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(11),out,inst_25926);
} else {
if((state_val_25951 === (5))){
var inst_25918 = (state_25950[(10)]);
var inst_25914 = (state_25950[(9)]);
var inst_25911 = (state_25950[(8)]);
var inst_25918__$1 = f.call(null,inst_25914);
var inst_25919 = cljs.core._EQ_.call(null,inst_25918__$1,inst_25911);
var inst_25920 = cljs.core.keyword_identical_QMARK_.call(null,inst_25911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25921 = (inst_25919) || (inst_25920);
var state_25950__$1 = (function (){var statearr_25964 = state_25950;
(statearr_25964[(10)] = inst_25918__$1);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25921)){
var statearr_25965_25990 = state_25950__$1;
(statearr_25965_25990[(1)] = (8));

} else {
var statearr_25966_25991 = state_25950__$1;
(statearr_25966_25991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (14))){
var inst_25943 = (state_25950[(2)]);
var inst_25944 = cljs.core.async.close_BANG_.call(null,out);
var state_25950__$1 = (function (){var statearr_25968 = state_25950;
(statearr_25968[(13)] = inst_25943);

return statearr_25968;
})();
var statearr_25969_25992 = state_25950__$1;
(statearr_25969_25992[(2)] = inst_25944);

(statearr_25969_25992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (10))){
var inst_25933 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25970_25993 = state_25950__$1;
(statearr_25970_25993[(2)] = inst_25933);

(statearr_25970_25993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (8))){
var inst_25910 = (state_25950[(7)]);
var inst_25918 = (state_25950[(10)]);
var inst_25914 = (state_25950[(9)]);
var inst_25923 = inst_25910.push(inst_25914);
var tmp25967 = inst_25910;
var inst_25910__$1 = tmp25967;
var inst_25911 = inst_25918;
var state_25950__$1 = (function (){var statearr_25971 = state_25950;
(statearr_25971[(7)] = inst_25910__$1);

(statearr_25971[(8)] = inst_25911);

(statearr_25971[(14)] = inst_25923);

return statearr_25971;
})();
var statearr_25972_25994 = state_25950__$1;
(statearr_25972_25994[(2)] = null);

(statearr_25972_25994[(1)] = (2));


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
});})(c__7043__auto___25980,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25980,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25976[(0)] = state_machine__6988__auto__);

(statearr_25976[(1)] = (1));

return statearr_25976;
});
var state_machine__6988__auto____1 = (function (state_25950){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25977){if((e25977 instanceof Object)){
var ex__6991__auto__ = e25977;
var statearr_25978_25995 = state_25950;
(statearr_25978_25995[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25996 = state_25950;
state_25950 = G__25996;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25950){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25980,out))
})();
var state__7045__auto__ = (function (){var statearr_25979 = f__7044__auto__.call(null);
(statearr_25979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25980);

return statearr_25979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25980,out))
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