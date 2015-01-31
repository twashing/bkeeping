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
if(typeof cljs.core.async.t1306954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1306954 = (function (f,fn_handler,meta1306955){
this.f = f;
this.fn_handler = fn_handler;
this.meta1306955 = meta1306955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1306954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1306954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t1306954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t1306954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1306956){
var self__ = this;
var _1306956__$1 = this;
return self__.meta1306955;
});

cljs.core.async.t1306954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1306956,meta1306955__$1){
var self__ = this;
var _1306956__$1 = this;
return (new cljs.core.async.t1306954(self__.f,self__.fn_handler,meta1306955__$1));
});

cljs.core.async.t1306954.cljs$lang$type = true;

cljs.core.async.t1306954.cljs$lang$ctorStr = "cljs.core.async/t1306954";

cljs.core.async.t1306954.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1306954");
});

cljs.core.async.__GT_t1306954 = (function __GT_t1306954(f__$1,fn_handler__$1,meta1306955){
return (new cljs.core.async.t1306954(f__$1,fn_handler__$1,meta1306955));
});

}

return (new cljs.core.async.t1306954(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__1306958 = buff;
if(G__1306958){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__1306958.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__1306958.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1306958);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1306958);
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
var val_1306959 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1306959);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1306959,ret){
return (function (){
return fn1.call(null,val_1306959);
});})(val_1306959,ret))
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
var n__4509__auto___1306960 = n;
var x_1306961 = (0);
while(true){
if((x_1306961 < n__4509__auto___1306960)){
(a[x_1306961] = (0));

var G__1306962 = (x_1306961 + (1));
x_1306961 = G__1306962;
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

var G__1306963 = (i + (1));
i = G__1306963;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t1306967 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1306967 = (function (flag,alt_flag,meta1306968){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta1306968 = meta1306968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1306967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1306967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t1306967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t1306967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1306969){
var self__ = this;
var _1306969__$1 = this;
return self__.meta1306968;
});})(flag))
;

cljs.core.async.t1306967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1306969,meta1306968__$1){
var self__ = this;
var _1306969__$1 = this;
return (new cljs.core.async.t1306967(self__.flag,self__.alt_flag,meta1306968__$1));
});})(flag))
;

cljs.core.async.t1306967.cljs$lang$type = true;

cljs.core.async.t1306967.cljs$lang$ctorStr = "cljs.core.async/t1306967";

cljs.core.async.t1306967.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1306967");
});})(flag))
;

cljs.core.async.__GT_t1306967 = ((function (flag){
return (function __GT_t1306967(flag__$1,alt_flag__$1,meta1306968){
return (new cljs.core.async.t1306967(flag__$1,alt_flag__$1,meta1306968));
});})(flag))
;

}

return (new cljs.core.async.t1306967(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t1306973 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1306973 = (function (cb,flag,alt_handler,meta1306974){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta1306974 = meta1306974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1306973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1306973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t1306973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t1306973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1306975){
var self__ = this;
var _1306975__$1 = this;
return self__.meta1306974;
});

cljs.core.async.t1306973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1306975,meta1306974__$1){
var self__ = this;
var _1306975__$1 = this;
return (new cljs.core.async.t1306973(self__.cb,self__.flag,self__.alt_handler,meta1306974__$1));
});

cljs.core.async.t1306973.cljs$lang$type = true;

cljs.core.async.t1306973.cljs$lang$ctorStr = "cljs.core.async/t1306973";

cljs.core.async.t1306973.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1306973");
});

cljs.core.async.__GT_t1306973 = (function __GT_t1306973(cb__$1,flag__$1,alt_handler__$1,meta1306974){
return (new cljs.core.async.t1306973(cb__$1,flag__$1,alt_handler__$1,meta1306974));
});

}

return (new cljs.core.async.t1306973(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__1306976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1306976_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1306977_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1306977_SHARP_,port], null));
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
var G__1306978 = (i + (1));
i = G__1306978;
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
var alts_BANG___delegate = function (ports,p__1306979){
var map__1306981 = p__1306979;
var map__1306981__$1 = ((cljs.core.seq_QMARK_.call(null,map__1306981))?cljs.core.apply.call(null,cljs.core.hash_map,map__1306981):map__1306981);
var opts = map__1306981__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__1306979 = null;
if (arguments.length > 1) {
  p__1306979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__1306979);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__1306982){
var ports = cljs.core.first(arglist__1306982);
var p__1306979 = cljs.core.rest(arglist__1306982);
return alts_BANG___delegate(ports,p__1306979);
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
var c__9199__auto___1307077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1307077){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1307077){
return (function (state_1307053){
var state_val_1307054 = (state_1307053[(1)]);
if((state_val_1307054 === (7))){
var inst_1307049 = (state_1307053[(2)]);
var state_1307053__$1 = state_1307053;
var statearr_1307055_1307078 = state_1307053__$1;
(statearr_1307055_1307078[(2)] = inst_1307049);

(statearr_1307055_1307078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (1))){
var state_1307053__$1 = state_1307053;
var statearr_1307056_1307079 = state_1307053__$1;
(statearr_1307056_1307079[(2)] = null);

(statearr_1307056_1307079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (4))){
var inst_1307032 = (state_1307053[(7)]);
var inst_1307032__$1 = (state_1307053[(2)]);
var inst_1307033 = (inst_1307032__$1 == null);
var state_1307053__$1 = (function (){var statearr_1307057 = state_1307053;
(statearr_1307057[(7)] = inst_1307032__$1);

return statearr_1307057;
})();
if(cljs.core.truth_(inst_1307033)){
var statearr_1307058_1307080 = state_1307053__$1;
(statearr_1307058_1307080[(1)] = (5));

} else {
var statearr_1307059_1307081 = state_1307053__$1;
(statearr_1307059_1307081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (13))){
var state_1307053__$1 = state_1307053;
var statearr_1307060_1307082 = state_1307053__$1;
(statearr_1307060_1307082[(2)] = null);

(statearr_1307060_1307082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (6))){
var inst_1307032 = (state_1307053[(7)]);
var state_1307053__$1 = state_1307053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307053__$1,(11),to,inst_1307032);
} else {
if((state_val_1307054 === (3))){
var inst_1307051 = (state_1307053[(2)]);
var state_1307053__$1 = state_1307053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307053__$1,inst_1307051);
} else {
if((state_val_1307054 === (12))){
var state_1307053__$1 = state_1307053;
var statearr_1307061_1307083 = state_1307053__$1;
(statearr_1307061_1307083[(2)] = null);

(statearr_1307061_1307083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (2))){
var state_1307053__$1 = state_1307053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307053__$1,(4),from);
} else {
if((state_val_1307054 === (11))){
var inst_1307042 = (state_1307053[(2)]);
var state_1307053__$1 = state_1307053;
if(cljs.core.truth_(inst_1307042)){
var statearr_1307062_1307084 = state_1307053__$1;
(statearr_1307062_1307084[(1)] = (12));

} else {
var statearr_1307063_1307085 = state_1307053__$1;
(statearr_1307063_1307085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (9))){
var state_1307053__$1 = state_1307053;
var statearr_1307064_1307086 = state_1307053__$1;
(statearr_1307064_1307086[(2)] = null);

(statearr_1307064_1307086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (5))){
var state_1307053__$1 = state_1307053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1307065_1307087 = state_1307053__$1;
(statearr_1307065_1307087[(1)] = (8));

} else {
var statearr_1307066_1307088 = state_1307053__$1;
(statearr_1307066_1307088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (14))){
var inst_1307047 = (state_1307053[(2)]);
var state_1307053__$1 = state_1307053;
var statearr_1307067_1307089 = state_1307053__$1;
(statearr_1307067_1307089[(2)] = inst_1307047);

(statearr_1307067_1307089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (10))){
var inst_1307039 = (state_1307053[(2)]);
var state_1307053__$1 = state_1307053;
var statearr_1307068_1307090 = state_1307053__$1;
(statearr_1307068_1307090[(2)] = inst_1307039);

(statearr_1307068_1307090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307054 === (8))){
var inst_1307036 = cljs.core.async.close_BANG_.call(null,to);
var state_1307053__$1 = state_1307053;
var statearr_1307069_1307091 = state_1307053__$1;
(statearr_1307069_1307091[(2)] = inst_1307036);

(statearr_1307069_1307091[(1)] = (10));


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
});})(c__9199__auto___1307077))
;
return ((function (switch__9184__auto__,c__9199__auto___1307077){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307073 = [null,null,null,null,null,null,null,null];
(statearr_1307073[(0)] = state_machine__9185__auto__);

(statearr_1307073[(1)] = (1));

return statearr_1307073;
});
var state_machine__9185__auto____1 = (function (state_1307053){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307074){if((e1307074 instanceof Object)){
var ex__9188__auto__ = e1307074;
var statearr_1307075_1307092 = state_1307053;
(statearr_1307075_1307092[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307093 = state_1307053;
state_1307053 = G__1307093;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307053){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1307077))
})();
var state__9201__auto__ = (function (){var statearr_1307076 = f__9200__auto__.call(null);
(statearr_1307076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307077);

return statearr_1307076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1307077))
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
return (function (p__1307277){
var vec__1307278 = p__1307277;
var v = cljs.core.nth.call(null,vec__1307278,(0),null);
var p = cljs.core.nth.call(null,vec__1307278,(1),null);
var job = vec__1307278;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___1307460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results){
return (function (state_1307283){
var state_val_1307284 = (state_1307283[(1)]);
if((state_val_1307284 === (2))){
var inst_1307280 = (state_1307283[(2)]);
var inst_1307281 = cljs.core.async.close_BANG_.call(null,res);
var state_1307283__$1 = (function (){var statearr_1307285 = state_1307283;
(statearr_1307285[(7)] = inst_1307280);

return statearr_1307285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307283__$1,inst_1307281);
} else {
if((state_val_1307284 === (1))){
var state_1307283__$1 = state_1307283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307283__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307289 = [null,null,null,null,null,null,null,null];
(statearr_1307289[(0)] = state_machine__9185__auto__);

(statearr_1307289[(1)] = (1));

return statearr_1307289;
});
var state_machine__9185__auto____1 = (function (state_1307283){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307290){if((e1307290 instanceof Object)){
var ex__9188__auto__ = e1307290;
var statearr_1307291_1307461 = state_1307283;
(statearr_1307291_1307461[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307462 = state_1307283;
state_1307283 = G__1307462;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307283){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_1307292 = f__9200__auto__.call(null);
(statearr_1307292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307460);

return statearr_1307292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1307460,res,vec__1307278,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1307293){
var vec__1307294 = p__1307293;
var v = cljs.core.nth.call(null,vec__1307294,(0),null);
var p = cljs.core.nth.call(null,vec__1307294,(1),null);
var job = vec__1307294;
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
var n__4509__auto___1307463 = n;
var __1307464 = (0);
while(true){
if((__1307464 < n__4509__auto___1307463)){
var G__1307295_1307465 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1307295_1307465) {
case "async":
var c__9199__auto___1307467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1307464,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1307464,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function (state_1307308){
var state_val_1307309 = (state_1307308[(1)]);
if((state_val_1307309 === (7))){
var inst_1307304 = (state_1307308[(2)]);
var state_1307308__$1 = state_1307308;
var statearr_1307310_1307468 = state_1307308__$1;
(statearr_1307310_1307468[(2)] = inst_1307304);

(statearr_1307310_1307468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307309 === (6))){
var state_1307308__$1 = state_1307308;
var statearr_1307311_1307469 = state_1307308__$1;
(statearr_1307311_1307469[(2)] = null);

(statearr_1307311_1307469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307309 === (5))){
var state_1307308__$1 = state_1307308;
var statearr_1307312_1307470 = state_1307308__$1;
(statearr_1307312_1307470[(2)] = null);

(statearr_1307312_1307470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307309 === (4))){
var inst_1307298 = (state_1307308[(2)]);
var inst_1307299 = async.call(null,inst_1307298);
var state_1307308__$1 = state_1307308;
if(cljs.core.truth_(inst_1307299)){
var statearr_1307313_1307471 = state_1307308__$1;
(statearr_1307313_1307471[(1)] = (5));

} else {
var statearr_1307314_1307472 = state_1307308__$1;
(statearr_1307314_1307472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307309 === (3))){
var inst_1307306 = (state_1307308[(2)]);
var state_1307308__$1 = state_1307308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307308__$1,inst_1307306);
} else {
if((state_val_1307309 === (2))){
var state_1307308__$1 = state_1307308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307308__$1,(4),jobs);
} else {
if((state_val_1307309 === (1))){
var state_1307308__$1 = state_1307308;
var statearr_1307315_1307473 = state_1307308__$1;
(statearr_1307315_1307473[(2)] = null);

(statearr_1307315_1307473[(1)] = (2));


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
});})(__1307464,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
;
return ((function (__1307464,switch__9184__auto__,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307319 = [null,null,null,null,null,null,null];
(statearr_1307319[(0)] = state_machine__9185__auto__);

(statearr_1307319[(1)] = (1));

return statearr_1307319;
});
var state_machine__9185__auto____1 = (function (state_1307308){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307320){if((e1307320 instanceof Object)){
var ex__9188__auto__ = e1307320;
var statearr_1307321_1307474 = state_1307308;
(statearr_1307321_1307474[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307475 = state_1307308;
state_1307308 = G__1307475;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307308){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1307464,switch__9184__auto__,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1307322 = f__9200__auto__.call(null);
(statearr_1307322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307467);

return statearr_1307322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1307464,c__9199__auto___1307467,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___1307476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1307464,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1307464,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function (state_1307335){
var state_val_1307336 = (state_1307335[(1)]);
if((state_val_1307336 === (7))){
var inst_1307331 = (state_1307335[(2)]);
var state_1307335__$1 = state_1307335;
var statearr_1307337_1307477 = state_1307335__$1;
(statearr_1307337_1307477[(2)] = inst_1307331);

(statearr_1307337_1307477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307336 === (6))){
var state_1307335__$1 = state_1307335;
var statearr_1307338_1307478 = state_1307335__$1;
(statearr_1307338_1307478[(2)] = null);

(statearr_1307338_1307478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307336 === (5))){
var state_1307335__$1 = state_1307335;
var statearr_1307339_1307479 = state_1307335__$1;
(statearr_1307339_1307479[(2)] = null);

(statearr_1307339_1307479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307336 === (4))){
var inst_1307325 = (state_1307335[(2)]);
var inst_1307326 = process.call(null,inst_1307325);
var state_1307335__$1 = state_1307335;
if(cljs.core.truth_(inst_1307326)){
var statearr_1307340_1307480 = state_1307335__$1;
(statearr_1307340_1307480[(1)] = (5));

} else {
var statearr_1307341_1307481 = state_1307335__$1;
(statearr_1307341_1307481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307336 === (3))){
var inst_1307333 = (state_1307335[(2)]);
var state_1307335__$1 = state_1307335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307335__$1,inst_1307333);
} else {
if((state_val_1307336 === (2))){
var state_1307335__$1 = state_1307335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307335__$1,(4),jobs);
} else {
if((state_val_1307336 === (1))){
var state_1307335__$1 = state_1307335;
var statearr_1307342_1307482 = state_1307335__$1;
(statearr_1307342_1307482[(2)] = null);

(statearr_1307342_1307482[(1)] = (2));


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
});})(__1307464,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
;
return ((function (__1307464,switch__9184__auto__,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307346 = [null,null,null,null,null,null,null];
(statearr_1307346[(0)] = state_machine__9185__auto__);

(statearr_1307346[(1)] = (1));

return statearr_1307346;
});
var state_machine__9185__auto____1 = (function (state_1307335){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307347){if((e1307347 instanceof Object)){
var ex__9188__auto__ = e1307347;
var statearr_1307348_1307483 = state_1307335;
(statearr_1307348_1307483[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307484 = state_1307335;
state_1307335 = G__1307484;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307335){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1307464,switch__9184__auto__,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1307349 = f__9200__auto__.call(null);
(statearr_1307349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307476);

return statearr_1307349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1307464,c__9199__auto___1307476,G__1307295_1307465,n__4509__auto___1307463,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1307485 = (__1307464 + (1));
__1307464 = G__1307485;
continue;
} else {
}
break;
}

var c__9199__auto___1307486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1307486,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1307486,jobs,results,process,async){
return (function (state_1307371){
var state_val_1307372 = (state_1307371[(1)]);
if((state_val_1307372 === (9))){
var inst_1307364 = (state_1307371[(2)]);
var state_1307371__$1 = (function (){var statearr_1307373 = state_1307371;
(statearr_1307373[(7)] = inst_1307364);

return statearr_1307373;
})();
var statearr_1307374_1307487 = state_1307371__$1;
(statearr_1307374_1307487[(2)] = null);

(statearr_1307374_1307487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307372 === (8))){
var inst_1307357 = (state_1307371[(8)]);
var inst_1307362 = (state_1307371[(2)]);
var state_1307371__$1 = (function (){var statearr_1307375 = state_1307371;
(statearr_1307375[(9)] = inst_1307362);

return statearr_1307375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307371__$1,(9),results,inst_1307357);
} else {
if((state_val_1307372 === (7))){
var inst_1307367 = (state_1307371[(2)]);
var state_1307371__$1 = state_1307371;
var statearr_1307376_1307488 = state_1307371__$1;
(statearr_1307376_1307488[(2)] = inst_1307367);

(statearr_1307376_1307488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307372 === (6))){
var inst_1307357 = (state_1307371[(8)]);
var inst_1307352 = (state_1307371[(10)]);
var inst_1307357__$1 = cljs.core.async.chan.call(null,(1));
var inst_1307358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1307359 = [inst_1307352,inst_1307357__$1];
var inst_1307360 = (new cljs.core.PersistentVector(null,2,(5),inst_1307358,inst_1307359,null));
var state_1307371__$1 = (function (){var statearr_1307377 = state_1307371;
(statearr_1307377[(8)] = inst_1307357__$1);

return statearr_1307377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307371__$1,(8),jobs,inst_1307360);
} else {
if((state_val_1307372 === (5))){
var inst_1307355 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1307371__$1 = state_1307371;
var statearr_1307378_1307489 = state_1307371__$1;
(statearr_1307378_1307489[(2)] = inst_1307355);

(statearr_1307378_1307489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307372 === (4))){
var inst_1307352 = (state_1307371[(10)]);
var inst_1307352__$1 = (state_1307371[(2)]);
var inst_1307353 = (inst_1307352__$1 == null);
var state_1307371__$1 = (function (){var statearr_1307379 = state_1307371;
(statearr_1307379[(10)] = inst_1307352__$1);

return statearr_1307379;
})();
if(cljs.core.truth_(inst_1307353)){
var statearr_1307380_1307490 = state_1307371__$1;
(statearr_1307380_1307490[(1)] = (5));

} else {
var statearr_1307381_1307491 = state_1307371__$1;
(statearr_1307381_1307491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307372 === (3))){
var inst_1307369 = (state_1307371[(2)]);
var state_1307371__$1 = state_1307371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307371__$1,inst_1307369);
} else {
if((state_val_1307372 === (2))){
var state_1307371__$1 = state_1307371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307371__$1,(4),from);
} else {
if((state_val_1307372 === (1))){
var state_1307371__$1 = state_1307371;
var statearr_1307382_1307492 = state_1307371__$1;
(statearr_1307382_1307492[(2)] = null);

(statearr_1307382_1307492[(1)] = (2));


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
});})(c__9199__auto___1307486,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___1307486,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1307386[(0)] = state_machine__9185__auto__);

(statearr_1307386[(1)] = (1));

return statearr_1307386;
});
var state_machine__9185__auto____1 = (function (state_1307371){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307387){if((e1307387 instanceof Object)){
var ex__9188__auto__ = e1307387;
var statearr_1307388_1307493 = state_1307371;
(statearr_1307388_1307493[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307494 = state_1307371;
state_1307371 = G__1307494;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307371){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1307486,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1307389 = f__9200__auto__.call(null);
(statearr_1307389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307486);

return statearr_1307389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1307486,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_1307427){
var state_val_1307428 = (state_1307427[(1)]);
if((state_val_1307428 === (7))){
var inst_1307423 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
var statearr_1307429_1307495 = state_1307427__$1;
(statearr_1307429_1307495[(2)] = inst_1307423);

(statearr_1307429_1307495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (20))){
var state_1307427__$1 = state_1307427;
var statearr_1307430_1307496 = state_1307427__$1;
(statearr_1307430_1307496[(2)] = null);

(statearr_1307430_1307496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (1))){
var state_1307427__$1 = state_1307427;
var statearr_1307431_1307497 = state_1307427__$1;
(statearr_1307431_1307497[(2)] = null);

(statearr_1307431_1307497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (4))){
var inst_1307392 = (state_1307427[(7)]);
var inst_1307392__$1 = (state_1307427[(2)]);
var inst_1307393 = (inst_1307392__$1 == null);
var state_1307427__$1 = (function (){var statearr_1307432 = state_1307427;
(statearr_1307432[(7)] = inst_1307392__$1);

return statearr_1307432;
})();
if(cljs.core.truth_(inst_1307393)){
var statearr_1307433_1307498 = state_1307427__$1;
(statearr_1307433_1307498[(1)] = (5));

} else {
var statearr_1307434_1307499 = state_1307427__$1;
(statearr_1307434_1307499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (15))){
var inst_1307405 = (state_1307427[(8)]);
var state_1307427__$1 = state_1307427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307427__$1,(18),to,inst_1307405);
} else {
if((state_val_1307428 === (21))){
var inst_1307418 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
var statearr_1307435_1307500 = state_1307427__$1;
(statearr_1307435_1307500[(2)] = inst_1307418);

(statearr_1307435_1307500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (13))){
var inst_1307420 = (state_1307427[(2)]);
var state_1307427__$1 = (function (){var statearr_1307436 = state_1307427;
(statearr_1307436[(9)] = inst_1307420);

return statearr_1307436;
})();
var statearr_1307437_1307501 = state_1307427__$1;
(statearr_1307437_1307501[(2)] = null);

(statearr_1307437_1307501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (6))){
var inst_1307392 = (state_1307427[(7)]);
var state_1307427__$1 = state_1307427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307427__$1,(11),inst_1307392);
} else {
if((state_val_1307428 === (17))){
var inst_1307413 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
if(cljs.core.truth_(inst_1307413)){
var statearr_1307438_1307502 = state_1307427__$1;
(statearr_1307438_1307502[(1)] = (19));

} else {
var statearr_1307439_1307503 = state_1307427__$1;
(statearr_1307439_1307503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (3))){
var inst_1307425 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307427__$1,inst_1307425);
} else {
if((state_val_1307428 === (12))){
var inst_1307402 = (state_1307427[(10)]);
var state_1307427__$1 = state_1307427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307427__$1,(14),inst_1307402);
} else {
if((state_val_1307428 === (2))){
var state_1307427__$1 = state_1307427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307427__$1,(4),results);
} else {
if((state_val_1307428 === (19))){
var state_1307427__$1 = state_1307427;
var statearr_1307440_1307504 = state_1307427__$1;
(statearr_1307440_1307504[(2)] = null);

(statearr_1307440_1307504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (11))){
var inst_1307402 = (state_1307427[(2)]);
var state_1307427__$1 = (function (){var statearr_1307441 = state_1307427;
(statearr_1307441[(10)] = inst_1307402);

return statearr_1307441;
})();
var statearr_1307442_1307505 = state_1307427__$1;
(statearr_1307442_1307505[(2)] = null);

(statearr_1307442_1307505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (9))){
var state_1307427__$1 = state_1307427;
var statearr_1307443_1307506 = state_1307427__$1;
(statearr_1307443_1307506[(2)] = null);

(statearr_1307443_1307506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (5))){
var state_1307427__$1 = state_1307427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1307444_1307507 = state_1307427__$1;
(statearr_1307444_1307507[(1)] = (8));

} else {
var statearr_1307445_1307508 = state_1307427__$1;
(statearr_1307445_1307508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (14))){
var inst_1307407 = (state_1307427[(11)]);
var inst_1307405 = (state_1307427[(8)]);
var inst_1307405__$1 = (state_1307427[(2)]);
var inst_1307406 = (inst_1307405__$1 == null);
var inst_1307407__$1 = cljs.core.not.call(null,inst_1307406);
var state_1307427__$1 = (function (){var statearr_1307446 = state_1307427;
(statearr_1307446[(11)] = inst_1307407__$1);

(statearr_1307446[(8)] = inst_1307405__$1);

return statearr_1307446;
})();
if(inst_1307407__$1){
var statearr_1307447_1307509 = state_1307427__$1;
(statearr_1307447_1307509[(1)] = (15));

} else {
var statearr_1307448_1307510 = state_1307427__$1;
(statearr_1307448_1307510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (16))){
var inst_1307407 = (state_1307427[(11)]);
var state_1307427__$1 = state_1307427;
var statearr_1307449_1307511 = state_1307427__$1;
(statearr_1307449_1307511[(2)] = inst_1307407);

(statearr_1307449_1307511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (10))){
var inst_1307399 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
var statearr_1307450_1307512 = state_1307427__$1;
(statearr_1307450_1307512[(2)] = inst_1307399);

(statearr_1307450_1307512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (18))){
var inst_1307410 = (state_1307427[(2)]);
var state_1307427__$1 = state_1307427;
var statearr_1307451_1307513 = state_1307427__$1;
(statearr_1307451_1307513[(2)] = inst_1307410);

(statearr_1307451_1307513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307428 === (8))){
var inst_1307396 = cljs.core.async.close_BANG_.call(null,to);
var state_1307427__$1 = state_1307427;
var statearr_1307452_1307514 = state_1307427__$1;
(statearr_1307452_1307514[(2)] = inst_1307396);

(statearr_1307452_1307514[(1)] = (10));


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
var statearr_1307456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1307456[(0)] = state_machine__9185__auto__);

(statearr_1307456[(1)] = (1));

return statearr_1307456;
});
var state_machine__9185__auto____1 = (function (state_1307427){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307457){if((e1307457 instanceof Object)){
var ex__9188__auto__ = e1307457;
var statearr_1307458_1307515 = state_1307427;
(statearr_1307458_1307515[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307516 = state_1307427;
state_1307427 = G__1307516;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307427){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1307459 = f__9200__auto__.call(null);
(statearr_1307459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1307459;
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
var c__9199__auto___1307617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1307617,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1307617,tc,fc){
return (function (state_1307592){
var state_val_1307593 = (state_1307592[(1)]);
if((state_val_1307593 === (7))){
var inst_1307588 = (state_1307592[(2)]);
var state_1307592__$1 = state_1307592;
var statearr_1307594_1307618 = state_1307592__$1;
(statearr_1307594_1307618[(2)] = inst_1307588);

(statearr_1307594_1307618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (1))){
var state_1307592__$1 = state_1307592;
var statearr_1307595_1307619 = state_1307592__$1;
(statearr_1307595_1307619[(2)] = null);

(statearr_1307595_1307619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (4))){
var inst_1307569 = (state_1307592[(7)]);
var inst_1307569__$1 = (state_1307592[(2)]);
var inst_1307570 = (inst_1307569__$1 == null);
var state_1307592__$1 = (function (){var statearr_1307596 = state_1307592;
(statearr_1307596[(7)] = inst_1307569__$1);

return statearr_1307596;
})();
if(cljs.core.truth_(inst_1307570)){
var statearr_1307597_1307620 = state_1307592__$1;
(statearr_1307597_1307620[(1)] = (5));

} else {
var statearr_1307598_1307621 = state_1307592__$1;
(statearr_1307598_1307621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (13))){
var state_1307592__$1 = state_1307592;
var statearr_1307599_1307622 = state_1307592__$1;
(statearr_1307599_1307622[(2)] = null);

(statearr_1307599_1307622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (6))){
var inst_1307569 = (state_1307592[(7)]);
var inst_1307575 = p.call(null,inst_1307569);
var state_1307592__$1 = state_1307592;
if(cljs.core.truth_(inst_1307575)){
var statearr_1307600_1307623 = state_1307592__$1;
(statearr_1307600_1307623[(1)] = (9));

} else {
var statearr_1307601_1307624 = state_1307592__$1;
(statearr_1307601_1307624[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (3))){
var inst_1307590 = (state_1307592[(2)]);
var state_1307592__$1 = state_1307592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307592__$1,inst_1307590);
} else {
if((state_val_1307593 === (12))){
var state_1307592__$1 = state_1307592;
var statearr_1307602_1307625 = state_1307592__$1;
(statearr_1307602_1307625[(2)] = null);

(statearr_1307602_1307625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (2))){
var state_1307592__$1 = state_1307592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307592__$1,(4),ch);
} else {
if((state_val_1307593 === (11))){
var inst_1307569 = (state_1307592[(7)]);
var inst_1307579 = (state_1307592[(2)]);
var state_1307592__$1 = state_1307592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307592__$1,(8),inst_1307579,inst_1307569);
} else {
if((state_val_1307593 === (9))){
var state_1307592__$1 = state_1307592;
var statearr_1307603_1307626 = state_1307592__$1;
(statearr_1307603_1307626[(2)] = tc);

(statearr_1307603_1307626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (5))){
var inst_1307572 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1307573 = cljs.core.async.close_BANG_.call(null,fc);
var state_1307592__$1 = (function (){var statearr_1307604 = state_1307592;
(statearr_1307604[(8)] = inst_1307572);

return statearr_1307604;
})();
var statearr_1307605_1307627 = state_1307592__$1;
(statearr_1307605_1307627[(2)] = inst_1307573);

(statearr_1307605_1307627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (14))){
var inst_1307586 = (state_1307592[(2)]);
var state_1307592__$1 = state_1307592;
var statearr_1307606_1307628 = state_1307592__$1;
(statearr_1307606_1307628[(2)] = inst_1307586);

(statearr_1307606_1307628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (10))){
var state_1307592__$1 = state_1307592;
var statearr_1307607_1307629 = state_1307592__$1;
(statearr_1307607_1307629[(2)] = fc);

(statearr_1307607_1307629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307593 === (8))){
var inst_1307581 = (state_1307592[(2)]);
var state_1307592__$1 = state_1307592;
if(cljs.core.truth_(inst_1307581)){
var statearr_1307608_1307630 = state_1307592__$1;
(statearr_1307608_1307630[(1)] = (12));

} else {
var statearr_1307609_1307631 = state_1307592__$1;
(statearr_1307609_1307631[(1)] = (13));

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
});})(c__9199__auto___1307617,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___1307617,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1307613 = [null,null,null,null,null,null,null,null,null];
(statearr_1307613[(0)] = state_machine__9185__auto__);

(statearr_1307613[(1)] = (1));

return statearr_1307613;
});
var state_machine__9185__auto____1 = (function (state_1307592){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307614){if((e1307614 instanceof Object)){
var ex__9188__auto__ = e1307614;
var statearr_1307615_1307632 = state_1307592;
(statearr_1307615_1307632[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307633 = state_1307592;
state_1307592 = G__1307633;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307592){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1307617,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_1307616 = f__9200__auto__.call(null);
(statearr_1307616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1307617);

return statearr_1307616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1307617,tc,fc))
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
return (function (state_1307680){
var state_val_1307681 = (state_1307680[(1)]);
if((state_val_1307681 === (7))){
var inst_1307676 = (state_1307680[(2)]);
var state_1307680__$1 = state_1307680;
var statearr_1307682_1307698 = state_1307680__$1;
(statearr_1307682_1307698[(2)] = inst_1307676);

(statearr_1307682_1307698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307681 === (6))){
var inst_1307669 = (state_1307680[(7)]);
var inst_1307666 = (state_1307680[(8)]);
var inst_1307673 = f.call(null,inst_1307666,inst_1307669);
var inst_1307666__$1 = inst_1307673;
var state_1307680__$1 = (function (){var statearr_1307683 = state_1307680;
(statearr_1307683[(8)] = inst_1307666__$1);

return statearr_1307683;
})();
var statearr_1307684_1307699 = state_1307680__$1;
(statearr_1307684_1307699[(2)] = null);

(statearr_1307684_1307699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307681 === (5))){
var inst_1307666 = (state_1307680[(8)]);
var state_1307680__$1 = state_1307680;
var statearr_1307685_1307700 = state_1307680__$1;
(statearr_1307685_1307700[(2)] = inst_1307666);

(statearr_1307685_1307700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307681 === (4))){
var inst_1307669 = (state_1307680[(7)]);
var inst_1307669__$1 = (state_1307680[(2)]);
var inst_1307670 = (inst_1307669__$1 == null);
var state_1307680__$1 = (function (){var statearr_1307686 = state_1307680;
(statearr_1307686[(7)] = inst_1307669__$1);

return statearr_1307686;
})();
if(cljs.core.truth_(inst_1307670)){
var statearr_1307687_1307701 = state_1307680__$1;
(statearr_1307687_1307701[(1)] = (5));

} else {
var statearr_1307688_1307702 = state_1307680__$1;
(statearr_1307688_1307702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307681 === (3))){
var inst_1307678 = (state_1307680[(2)]);
var state_1307680__$1 = state_1307680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307680__$1,inst_1307678);
} else {
if((state_val_1307681 === (2))){
var state_1307680__$1 = state_1307680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1307680__$1,(4),ch);
} else {
if((state_val_1307681 === (1))){
var inst_1307666 = init;
var state_1307680__$1 = (function (){var statearr_1307689 = state_1307680;
(statearr_1307689[(8)] = inst_1307666);

return statearr_1307689;
})();
var statearr_1307690_1307703 = state_1307680__$1;
(statearr_1307690_1307703[(2)] = null);

(statearr_1307690_1307703[(1)] = (2));


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
var statearr_1307694 = [null,null,null,null,null,null,null,null,null];
(statearr_1307694[(0)] = state_machine__9185__auto__);

(statearr_1307694[(1)] = (1));

return statearr_1307694;
});
var state_machine__9185__auto____1 = (function (state_1307680){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307695){if((e1307695 instanceof Object)){
var ex__9188__auto__ = e1307695;
var statearr_1307696_1307704 = state_1307680;
(statearr_1307696_1307704[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307705 = state_1307680;
state_1307680 = G__1307705;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307680){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1307697 = f__9200__auto__.call(null);
(statearr_1307697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1307697;
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
return (function (state_1307779){
var state_val_1307780 = (state_1307779[(1)]);
if((state_val_1307780 === (7))){
var inst_1307761 = (state_1307779[(2)]);
var state_1307779__$1 = state_1307779;
var statearr_1307781_1307804 = state_1307779__$1;
(statearr_1307781_1307804[(2)] = inst_1307761);

(statearr_1307781_1307804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (1))){
var inst_1307755 = cljs.core.seq.call(null,coll);
var inst_1307756 = inst_1307755;
var state_1307779__$1 = (function (){var statearr_1307782 = state_1307779;
(statearr_1307782[(7)] = inst_1307756);

return statearr_1307782;
})();
var statearr_1307783_1307805 = state_1307779__$1;
(statearr_1307783_1307805[(2)] = null);

(statearr_1307783_1307805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (4))){
var inst_1307756 = (state_1307779[(7)]);
var inst_1307759 = cljs.core.first.call(null,inst_1307756);
var state_1307779__$1 = state_1307779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1307779__$1,(7),ch,inst_1307759);
} else {
if((state_val_1307780 === (13))){
var inst_1307773 = (state_1307779[(2)]);
var state_1307779__$1 = state_1307779;
var statearr_1307784_1307806 = state_1307779__$1;
(statearr_1307784_1307806[(2)] = inst_1307773);

(statearr_1307784_1307806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (6))){
var inst_1307764 = (state_1307779[(2)]);
var state_1307779__$1 = state_1307779;
if(cljs.core.truth_(inst_1307764)){
var statearr_1307785_1307807 = state_1307779__$1;
(statearr_1307785_1307807[(1)] = (8));

} else {
var statearr_1307786_1307808 = state_1307779__$1;
(statearr_1307786_1307808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (3))){
var inst_1307777 = (state_1307779[(2)]);
var state_1307779__$1 = state_1307779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1307779__$1,inst_1307777);
} else {
if((state_val_1307780 === (12))){
var state_1307779__$1 = state_1307779;
var statearr_1307787_1307809 = state_1307779__$1;
(statearr_1307787_1307809[(2)] = null);

(statearr_1307787_1307809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (2))){
var inst_1307756 = (state_1307779[(7)]);
var state_1307779__$1 = state_1307779;
if(cljs.core.truth_(inst_1307756)){
var statearr_1307788_1307810 = state_1307779__$1;
(statearr_1307788_1307810[(1)] = (4));

} else {
var statearr_1307789_1307811 = state_1307779__$1;
(statearr_1307789_1307811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (11))){
var inst_1307770 = cljs.core.async.close_BANG_.call(null,ch);
var state_1307779__$1 = state_1307779;
var statearr_1307790_1307812 = state_1307779__$1;
(statearr_1307790_1307812[(2)] = inst_1307770);

(statearr_1307790_1307812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (9))){
var state_1307779__$1 = state_1307779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1307791_1307813 = state_1307779__$1;
(statearr_1307791_1307813[(1)] = (11));

} else {
var statearr_1307792_1307814 = state_1307779__$1;
(statearr_1307792_1307814[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (5))){
var inst_1307756 = (state_1307779[(7)]);
var state_1307779__$1 = state_1307779;
var statearr_1307793_1307815 = state_1307779__$1;
(statearr_1307793_1307815[(2)] = inst_1307756);

(statearr_1307793_1307815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (10))){
var inst_1307775 = (state_1307779[(2)]);
var state_1307779__$1 = state_1307779;
var statearr_1307794_1307816 = state_1307779__$1;
(statearr_1307794_1307816[(2)] = inst_1307775);

(statearr_1307794_1307816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1307780 === (8))){
var inst_1307756 = (state_1307779[(7)]);
var inst_1307766 = cljs.core.next.call(null,inst_1307756);
var inst_1307756__$1 = inst_1307766;
var state_1307779__$1 = (function (){var statearr_1307795 = state_1307779;
(statearr_1307795[(7)] = inst_1307756__$1);

return statearr_1307795;
})();
var statearr_1307796_1307817 = state_1307779__$1;
(statearr_1307796_1307817[(2)] = null);

(statearr_1307796_1307817[(1)] = (2));


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
var statearr_1307800 = [null,null,null,null,null,null,null,null];
(statearr_1307800[(0)] = state_machine__9185__auto__);

(statearr_1307800[(1)] = (1));

return statearr_1307800;
});
var state_machine__9185__auto____1 = (function (state_1307779){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1307779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1307801){if((e1307801 instanceof Object)){
var ex__9188__auto__ = e1307801;
var statearr_1307802_1307818 = state_1307779;
(statearr_1307802_1307818[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1307779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1307801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1307819 = state_1307779;
state_1307779 = G__1307819;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1307779){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1307779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1307803 = f__9200__auto__.call(null);
(statearr_1307803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1307803;
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

cljs.core.async.Mux = (function (){var obj1307821 = {};
return obj1307821;
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


cljs.core.async.Mult = (function (){var obj1307823 = {};
return obj1307823;
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
if(typeof cljs.core.async.t1308045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1308045 = (function (cs,ch,mult,meta1308046){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta1308046 = meta1308046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1308045.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t1308045.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t1308045.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t1308045.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t1308045.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1308045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t1308045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1308047){
var self__ = this;
var _1308047__$1 = this;
return self__.meta1308046;
});})(cs))
;

cljs.core.async.t1308045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1308047,meta1308046__$1){
var self__ = this;
var _1308047__$1 = this;
return (new cljs.core.async.t1308045(self__.cs,self__.ch,self__.mult,meta1308046__$1));
});})(cs))
;

cljs.core.async.t1308045.cljs$lang$type = true;

cljs.core.async.t1308045.cljs$lang$ctorStr = "cljs.core.async/t1308045";

cljs.core.async.t1308045.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1308045");
});})(cs))
;

cljs.core.async.__GT_t1308045 = ((function (cs){
return (function __GT_t1308045(cs__$1,ch__$1,mult__$1,meta1308046){
return (new cljs.core.async.t1308045(cs__$1,ch__$1,mult__$1,meta1308046));
});})(cs))
;

}

return (new cljs.core.async.t1308045(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1308266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1308266,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1308266,cs,m,dchan,dctr,done){
return (function (state_1308178){
var state_val_1308179 = (state_1308178[(1)]);
if((state_val_1308179 === (7))){
var inst_1308174 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308180_1308267 = state_1308178__$1;
(statearr_1308180_1308267[(2)] = inst_1308174);

(statearr_1308180_1308267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (20))){
var inst_1308079 = (state_1308178[(7)]);
var inst_1308089 = cljs.core.first.call(null,inst_1308079);
var inst_1308090 = cljs.core.nth.call(null,inst_1308089,(0),null);
var inst_1308091 = cljs.core.nth.call(null,inst_1308089,(1),null);
var state_1308178__$1 = (function (){var statearr_1308181 = state_1308178;
(statearr_1308181[(8)] = inst_1308090);

return statearr_1308181;
})();
if(cljs.core.truth_(inst_1308091)){
var statearr_1308182_1308268 = state_1308178__$1;
(statearr_1308182_1308268[(1)] = (22));

} else {
var statearr_1308183_1308269 = state_1308178__$1;
(statearr_1308183_1308269[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (27))){
var inst_1308050 = (state_1308178[(9)]);
var inst_1308121 = (state_1308178[(10)]);
var inst_1308126 = (state_1308178[(11)]);
var inst_1308119 = (state_1308178[(12)]);
var inst_1308126__$1 = cljs.core._nth.call(null,inst_1308119,inst_1308121);
var inst_1308127 = cljs.core.async.put_BANG_.call(null,inst_1308126__$1,inst_1308050,done);
var state_1308178__$1 = (function (){var statearr_1308184 = state_1308178;
(statearr_1308184[(11)] = inst_1308126__$1);

return statearr_1308184;
})();
if(cljs.core.truth_(inst_1308127)){
var statearr_1308185_1308270 = state_1308178__$1;
(statearr_1308185_1308270[(1)] = (30));

} else {
var statearr_1308186_1308271 = state_1308178__$1;
(statearr_1308186_1308271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (1))){
var state_1308178__$1 = state_1308178;
var statearr_1308187_1308272 = state_1308178__$1;
(statearr_1308187_1308272[(2)] = null);

(statearr_1308187_1308272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (24))){
var inst_1308079 = (state_1308178[(7)]);
var inst_1308096 = (state_1308178[(2)]);
var inst_1308097 = cljs.core.next.call(null,inst_1308079);
var inst_1308059 = inst_1308097;
var inst_1308060 = null;
var inst_1308061 = (0);
var inst_1308062 = (0);
var state_1308178__$1 = (function (){var statearr_1308188 = state_1308178;
(statearr_1308188[(13)] = inst_1308059);

(statearr_1308188[(14)] = inst_1308096);

(statearr_1308188[(15)] = inst_1308061);

(statearr_1308188[(16)] = inst_1308060);

(statearr_1308188[(17)] = inst_1308062);

return statearr_1308188;
})();
var statearr_1308189_1308273 = state_1308178__$1;
(statearr_1308189_1308273[(2)] = null);

(statearr_1308189_1308273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (39))){
var state_1308178__$1 = state_1308178;
var statearr_1308193_1308274 = state_1308178__$1;
(statearr_1308193_1308274[(2)] = null);

(statearr_1308193_1308274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (4))){
var inst_1308050 = (state_1308178[(9)]);
var inst_1308050__$1 = (state_1308178[(2)]);
var inst_1308051 = (inst_1308050__$1 == null);
var state_1308178__$1 = (function (){var statearr_1308194 = state_1308178;
(statearr_1308194[(9)] = inst_1308050__$1);

return statearr_1308194;
})();
if(cljs.core.truth_(inst_1308051)){
var statearr_1308195_1308275 = state_1308178__$1;
(statearr_1308195_1308275[(1)] = (5));

} else {
var statearr_1308196_1308276 = state_1308178__$1;
(statearr_1308196_1308276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (15))){
var inst_1308059 = (state_1308178[(13)]);
var inst_1308061 = (state_1308178[(15)]);
var inst_1308060 = (state_1308178[(16)]);
var inst_1308062 = (state_1308178[(17)]);
var inst_1308075 = (state_1308178[(2)]);
var inst_1308076 = (inst_1308062 + (1));
var tmp1308190 = inst_1308059;
var tmp1308191 = inst_1308061;
var tmp1308192 = inst_1308060;
var inst_1308059__$1 = tmp1308190;
var inst_1308060__$1 = tmp1308192;
var inst_1308061__$1 = tmp1308191;
var inst_1308062__$1 = inst_1308076;
var state_1308178__$1 = (function (){var statearr_1308197 = state_1308178;
(statearr_1308197[(13)] = inst_1308059__$1);

(statearr_1308197[(18)] = inst_1308075);

(statearr_1308197[(15)] = inst_1308061__$1);

(statearr_1308197[(16)] = inst_1308060__$1);

(statearr_1308197[(17)] = inst_1308062__$1);

return statearr_1308197;
})();
var statearr_1308198_1308277 = state_1308178__$1;
(statearr_1308198_1308277[(2)] = null);

(statearr_1308198_1308277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (21))){
var inst_1308100 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308202_1308278 = state_1308178__$1;
(statearr_1308202_1308278[(2)] = inst_1308100);

(statearr_1308202_1308278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (31))){
var inst_1308126 = (state_1308178[(11)]);
var inst_1308130 = done.call(null,null);
var inst_1308131 = cljs.core.async.untap_STAR_.call(null,m,inst_1308126);
var state_1308178__$1 = (function (){var statearr_1308203 = state_1308178;
(statearr_1308203[(19)] = inst_1308130);

return statearr_1308203;
})();
var statearr_1308204_1308279 = state_1308178__$1;
(statearr_1308204_1308279[(2)] = inst_1308131);

(statearr_1308204_1308279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (32))){
var inst_1308121 = (state_1308178[(10)]);
var inst_1308118 = (state_1308178[(20)]);
var inst_1308119 = (state_1308178[(12)]);
var inst_1308120 = (state_1308178[(21)]);
var inst_1308133 = (state_1308178[(2)]);
var inst_1308134 = (inst_1308121 + (1));
var tmp1308199 = inst_1308118;
var tmp1308200 = inst_1308119;
var tmp1308201 = inst_1308120;
var inst_1308118__$1 = tmp1308199;
var inst_1308119__$1 = tmp1308200;
var inst_1308120__$1 = tmp1308201;
var inst_1308121__$1 = inst_1308134;
var state_1308178__$1 = (function (){var statearr_1308205 = state_1308178;
(statearr_1308205[(10)] = inst_1308121__$1);

(statearr_1308205[(22)] = inst_1308133);

(statearr_1308205[(20)] = inst_1308118__$1);

(statearr_1308205[(12)] = inst_1308119__$1);

(statearr_1308205[(21)] = inst_1308120__$1);

return statearr_1308205;
})();
var statearr_1308206_1308280 = state_1308178__$1;
(statearr_1308206_1308280[(2)] = null);

(statearr_1308206_1308280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (40))){
var inst_1308146 = (state_1308178[(23)]);
var inst_1308150 = done.call(null,null);
var inst_1308151 = cljs.core.async.untap_STAR_.call(null,m,inst_1308146);
var state_1308178__$1 = (function (){var statearr_1308207 = state_1308178;
(statearr_1308207[(24)] = inst_1308150);

return statearr_1308207;
})();
var statearr_1308208_1308281 = state_1308178__$1;
(statearr_1308208_1308281[(2)] = inst_1308151);

(statearr_1308208_1308281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (33))){
var inst_1308137 = (state_1308178[(25)]);
var inst_1308139 = cljs.core.chunked_seq_QMARK_.call(null,inst_1308137);
var state_1308178__$1 = state_1308178;
if(inst_1308139){
var statearr_1308209_1308282 = state_1308178__$1;
(statearr_1308209_1308282[(1)] = (36));

} else {
var statearr_1308210_1308283 = state_1308178__$1;
(statearr_1308210_1308283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (13))){
var inst_1308069 = (state_1308178[(26)]);
var inst_1308072 = cljs.core.async.close_BANG_.call(null,inst_1308069);
var state_1308178__$1 = state_1308178;
var statearr_1308211_1308284 = state_1308178__$1;
(statearr_1308211_1308284[(2)] = inst_1308072);

(statearr_1308211_1308284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (22))){
var inst_1308090 = (state_1308178[(8)]);
var inst_1308093 = cljs.core.async.close_BANG_.call(null,inst_1308090);
var state_1308178__$1 = state_1308178;
var statearr_1308212_1308285 = state_1308178__$1;
(statearr_1308212_1308285[(2)] = inst_1308093);

(statearr_1308212_1308285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (36))){
var inst_1308137 = (state_1308178[(25)]);
var inst_1308141 = cljs.core.chunk_first.call(null,inst_1308137);
var inst_1308142 = cljs.core.chunk_rest.call(null,inst_1308137);
var inst_1308143 = cljs.core.count.call(null,inst_1308141);
var inst_1308118 = inst_1308142;
var inst_1308119 = inst_1308141;
var inst_1308120 = inst_1308143;
var inst_1308121 = (0);
var state_1308178__$1 = (function (){var statearr_1308213 = state_1308178;
(statearr_1308213[(10)] = inst_1308121);

(statearr_1308213[(20)] = inst_1308118);

(statearr_1308213[(12)] = inst_1308119);

(statearr_1308213[(21)] = inst_1308120);

return statearr_1308213;
})();
var statearr_1308214_1308286 = state_1308178__$1;
(statearr_1308214_1308286[(2)] = null);

(statearr_1308214_1308286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (41))){
var inst_1308137 = (state_1308178[(25)]);
var inst_1308153 = (state_1308178[(2)]);
var inst_1308154 = cljs.core.next.call(null,inst_1308137);
var inst_1308118 = inst_1308154;
var inst_1308119 = null;
var inst_1308120 = (0);
var inst_1308121 = (0);
var state_1308178__$1 = (function (){var statearr_1308215 = state_1308178;
(statearr_1308215[(10)] = inst_1308121);

(statearr_1308215[(20)] = inst_1308118);

(statearr_1308215[(27)] = inst_1308153);

(statearr_1308215[(12)] = inst_1308119);

(statearr_1308215[(21)] = inst_1308120);

return statearr_1308215;
})();
var statearr_1308216_1308287 = state_1308178__$1;
(statearr_1308216_1308287[(2)] = null);

(statearr_1308216_1308287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (43))){
var state_1308178__$1 = state_1308178;
var statearr_1308217_1308288 = state_1308178__$1;
(statearr_1308217_1308288[(2)] = null);

(statearr_1308217_1308288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (29))){
var inst_1308162 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308218_1308289 = state_1308178__$1;
(statearr_1308218_1308289[(2)] = inst_1308162);

(statearr_1308218_1308289[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (44))){
var inst_1308171 = (state_1308178[(2)]);
var state_1308178__$1 = (function (){var statearr_1308219 = state_1308178;
(statearr_1308219[(28)] = inst_1308171);

return statearr_1308219;
})();
var statearr_1308220_1308290 = state_1308178__$1;
(statearr_1308220_1308290[(2)] = null);

(statearr_1308220_1308290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (6))){
var inst_1308110 = (state_1308178[(29)]);
var inst_1308109 = cljs.core.deref.call(null,cs);
var inst_1308110__$1 = cljs.core.keys.call(null,inst_1308109);
var inst_1308111 = cljs.core.count.call(null,inst_1308110__$1);
var inst_1308112 = cljs.core.reset_BANG_.call(null,dctr,inst_1308111);
var inst_1308117 = cljs.core.seq.call(null,inst_1308110__$1);
var inst_1308118 = inst_1308117;
var inst_1308119 = null;
var inst_1308120 = (0);
var inst_1308121 = (0);
var state_1308178__$1 = (function (){var statearr_1308221 = state_1308178;
(statearr_1308221[(10)] = inst_1308121);

(statearr_1308221[(29)] = inst_1308110__$1);

(statearr_1308221[(30)] = inst_1308112);

(statearr_1308221[(20)] = inst_1308118);

(statearr_1308221[(12)] = inst_1308119);

(statearr_1308221[(21)] = inst_1308120);

return statearr_1308221;
})();
var statearr_1308222_1308291 = state_1308178__$1;
(statearr_1308222_1308291[(2)] = null);

(statearr_1308222_1308291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (28))){
var inst_1308118 = (state_1308178[(20)]);
var inst_1308137 = (state_1308178[(25)]);
var inst_1308137__$1 = cljs.core.seq.call(null,inst_1308118);
var state_1308178__$1 = (function (){var statearr_1308223 = state_1308178;
(statearr_1308223[(25)] = inst_1308137__$1);

return statearr_1308223;
})();
if(inst_1308137__$1){
var statearr_1308224_1308292 = state_1308178__$1;
(statearr_1308224_1308292[(1)] = (33));

} else {
var statearr_1308225_1308293 = state_1308178__$1;
(statearr_1308225_1308293[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (25))){
var inst_1308121 = (state_1308178[(10)]);
var inst_1308120 = (state_1308178[(21)]);
var inst_1308123 = (inst_1308121 < inst_1308120);
var inst_1308124 = inst_1308123;
var state_1308178__$1 = state_1308178;
if(cljs.core.truth_(inst_1308124)){
var statearr_1308226_1308294 = state_1308178__$1;
(statearr_1308226_1308294[(1)] = (27));

} else {
var statearr_1308227_1308295 = state_1308178__$1;
(statearr_1308227_1308295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (34))){
var state_1308178__$1 = state_1308178;
var statearr_1308228_1308296 = state_1308178__$1;
(statearr_1308228_1308296[(2)] = null);

(statearr_1308228_1308296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (17))){
var state_1308178__$1 = state_1308178;
var statearr_1308229_1308297 = state_1308178__$1;
(statearr_1308229_1308297[(2)] = null);

(statearr_1308229_1308297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (3))){
var inst_1308176 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1308178__$1,inst_1308176);
} else {
if((state_val_1308179 === (12))){
var inst_1308105 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308230_1308298 = state_1308178__$1;
(statearr_1308230_1308298[(2)] = inst_1308105);

(statearr_1308230_1308298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (2))){
var state_1308178__$1 = state_1308178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1308178__$1,(4),ch);
} else {
if((state_val_1308179 === (23))){
var state_1308178__$1 = state_1308178;
var statearr_1308231_1308299 = state_1308178__$1;
(statearr_1308231_1308299[(2)] = null);

(statearr_1308231_1308299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (35))){
var inst_1308160 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308232_1308300 = state_1308178__$1;
(statearr_1308232_1308300[(2)] = inst_1308160);

(statearr_1308232_1308300[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (19))){
var inst_1308079 = (state_1308178[(7)]);
var inst_1308083 = cljs.core.chunk_first.call(null,inst_1308079);
var inst_1308084 = cljs.core.chunk_rest.call(null,inst_1308079);
var inst_1308085 = cljs.core.count.call(null,inst_1308083);
var inst_1308059 = inst_1308084;
var inst_1308060 = inst_1308083;
var inst_1308061 = inst_1308085;
var inst_1308062 = (0);
var state_1308178__$1 = (function (){var statearr_1308233 = state_1308178;
(statearr_1308233[(13)] = inst_1308059);

(statearr_1308233[(15)] = inst_1308061);

(statearr_1308233[(16)] = inst_1308060);

(statearr_1308233[(17)] = inst_1308062);

return statearr_1308233;
})();
var statearr_1308234_1308301 = state_1308178__$1;
(statearr_1308234_1308301[(2)] = null);

(statearr_1308234_1308301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (11))){
var inst_1308059 = (state_1308178[(13)]);
var inst_1308079 = (state_1308178[(7)]);
var inst_1308079__$1 = cljs.core.seq.call(null,inst_1308059);
var state_1308178__$1 = (function (){var statearr_1308235 = state_1308178;
(statearr_1308235[(7)] = inst_1308079__$1);

return statearr_1308235;
})();
if(inst_1308079__$1){
var statearr_1308236_1308302 = state_1308178__$1;
(statearr_1308236_1308302[(1)] = (16));

} else {
var statearr_1308237_1308303 = state_1308178__$1;
(statearr_1308237_1308303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (9))){
var inst_1308107 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308238_1308304 = state_1308178__$1;
(statearr_1308238_1308304[(2)] = inst_1308107);

(statearr_1308238_1308304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (5))){
var inst_1308057 = cljs.core.deref.call(null,cs);
var inst_1308058 = cljs.core.seq.call(null,inst_1308057);
var inst_1308059 = inst_1308058;
var inst_1308060 = null;
var inst_1308061 = (0);
var inst_1308062 = (0);
var state_1308178__$1 = (function (){var statearr_1308239 = state_1308178;
(statearr_1308239[(13)] = inst_1308059);

(statearr_1308239[(15)] = inst_1308061);

(statearr_1308239[(16)] = inst_1308060);

(statearr_1308239[(17)] = inst_1308062);

return statearr_1308239;
})();
var statearr_1308240_1308305 = state_1308178__$1;
(statearr_1308240_1308305[(2)] = null);

(statearr_1308240_1308305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (14))){
var state_1308178__$1 = state_1308178;
var statearr_1308241_1308306 = state_1308178__$1;
(statearr_1308241_1308306[(2)] = null);

(statearr_1308241_1308306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (45))){
var inst_1308168 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308242_1308307 = state_1308178__$1;
(statearr_1308242_1308307[(2)] = inst_1308168);

(statearr_1308242_1308307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (26))){
var inst_1308110 = (state_1308178[(29)]);
var inst_1308164 = (state_1308178[(2)]);
var inst_1308165 = cljs.core.seq.call(null,inst_1308110);
var state_1308178__$1 = (function (){var statearr_1308243 = state_1308178;
(statearr_1308243[(31)] = inst_1308164);

return statearr_1308243;
})();
if(inst_1308165){
var statearr_1308244_1308308 = state_1308178__$1;
(statearr_1308244_1308308[(1)] = (42));

} else {
var statearr_1308245_1308309 = state_1308178__$1;
(statearr_1308245_1308309[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (16))){
var inst_1308079 = (state_1308178[(7)]);
var inst_1308081 = cljs.core.chunked_seq_QMARK_.call(null,inst_1308079);
var state_1308178__$1 = state_1308178;
if(inst_1308081){
var statearr_1308246_1308310 = state_1308178__$1;
(statearr_1308246_1308310[(1)] = (19));

} else {
var statearr_1308247_1308311 = state_1308178__$1;
(statearr_1308247_1308311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (38))){
var inst_1308157 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308248_1308312 = state_1308178__$1;
(statearr_1308248_1308312[(2)] = inst_1308157);

(statearr_1308248_1308312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (30))){
var state_1308178__$1 = state_1308178;
var statearr_1308249_1308313 = state_1308178__$1;
(statearr_1308249_1308313[(2)] = null);

(statearr_1308249_1308313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (10))){
var inst_1308060 = (state_1308178[(16)]);
var inst_1308062 = (state_1308178[(17)]);
var inst_1308068 = cljs.core._nth.call(null,inst_1308060,inst_1308062);
var inst_1308069 = cljs.core.nth.call(null,inst_1308068,(0),null);
var inst_1308070 = cljs.core.nth.call(null,inst_1308068,(1),null);
var state_1308178__$1 = (function (){var statearr_1308250 = state_1308178;
(statearr_1308250[(26)] = inst_1308069);

return statearr_1308250;
})();
if(cljs.core.truth_(inst_1308070)){
var statearr_1308251_1308314 = state_1308178__$1;
(statearr_1308251_1308314[(1)] = (13));

} else {
var statearr_1308252_1308315 = state_1308178__$1;
(statearr_1308252_1308315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (18))){
var inst_1308103 = (state_1308178[(2)]);
var state_1308178__$1 = state_1308178;
var statearr_1308253_1308316 = state_1308178__$1;
(statearr_1308253_1308316[(2)] = inst_1308103);

(statearr_1308253_1308316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (42))){
var state_1308178__$1 = state_1308178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1308178__$1,(45),dchan);
} else {
if((state_val_1308179 === (37))){
var inst_1308146 = (state_1308178[(23)]);
var inst_1308050 = (state_1308178[(9)]);
var inst_1308137 = (state_1308178[(25)]);
var inst_1308146__$1 = cljs.core.first.call(null,inst_1308137);
var inst_1308147 = cljs.core.async.put_BANG_.call(null,inst_1308146__$1,inst_1308050,done);
var state_1308178__$1 = (function (){var statearr_1308254 = state_1308178;
(statearr_1308254[(23)] = inst_1308146__$1);

return statearr_1308254;
})();
if(cljs.core.truth_(inst_1308147)){
var statearr_1308255_1308317 = state_1308178__$1;
(statearr_1308255_1308317[(1)] = (39));

} else {
var statearr_1308256_1308318 = state_1308178__$1;
(statearr_1308256_1308318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308179 === (8))){
var inst_1308061 = (state_1308178[(15)]);
var inst_1308062 = (state_1308178[(17)]);
var inst_1308064 = (inst_1308062 < inst_1308061);
var inst_1308065 = inst_1308064;
var state_1308178__$1 = state_1308178;
if(cljs.core.truth_(inst_1308065)){
var statearr_1308257_1308319 = state_1308178__$1;
(statearr_1308257_1308319[(1)] = (10));

} else {
var statearr_1308258_1308320 = state_1308178__$1;
(statearr_1308258_1308320[(1)] = (11));

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
});})(c__9199__auto___1308266,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1308266,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1308262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1308262[(0)] = state_machine__9185__auto__);

(statearr_1308262[(1)] = (1));

return statearr_1308262;
});
var state_machine__9185__auto____1 = (function (state_1308178){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1308178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1308263){if((e1308263 instanceof Object)){
var ex__9188__auto__ = e1308263;
var statearr_1308264_1308321 = state_1308178;
(statearr_1308264_1308321[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1308263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1308322 = state_1308178;
state_1308178 = G__1308322;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1308178){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1308178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1308266,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1308265 = f__9200__auto__.call(null);
(statearr_1308265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1308266);

return statearr_1308265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1308266,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj1308324 = {};
return obj1308324;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__1308325){
var map__1308330 = p__1308325;
var map__1308330__$1 = ((cljs.core.seq_QMARK_.call(null,map__1308330))?cljs.core.apply.call(null,cljs.core.hash_map,map__1308330):map__1308330);
var opts = map__1308330__$1;
var statearr_1308331_1308334 = state;
(statearr_1308331_1308334[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__1308330,map__1308330__$1,opts){
return (function (val){
var statearr_1308332_1308335 = state;
(statearr_1308332_1308335[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1308330,map__1308330__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_1308333_1308336 = state;
(statearr_1308333_1308336[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__1308325 = null;
if (arguments.length > 3) {
  p__1308325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__1308325);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__1308337){
var state = cljs.core.first(arglist__1308337);
arglist__1308337 = cljs.core.next(arglist__1308337);
var cont_block = cljs.core.first(arglist__1308337);
arglist__1308337 = cljs.core.next(arglist__1308337);
var ports = cljs.core.first(arglist__1308337);
var p__1308325 = cljs.core.rest(arglist__1308337);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__1308325);
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
if(typeof cljs.core.async.t1308457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1308457 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1308458){
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
this.meta1308458 = meta1308458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1308457.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t1308457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t1308457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1308457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1308459){
var self__ = this;
var _1308459__$1 = this;
return self__.meta1308458;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1308459,meta1308458__$1){
var self__ = this;
var _1308459__$1 = this;
return (new cljs.core.async.t1308457(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1308458__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1308457.cljs$lang$type = true;

cljs.core.async.t1308457.cljs$lang$ctorStr = "cljs.core.async/t1308457";

cljs.core.async.t1308457.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1308457");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t1308457 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t1308457(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1308458){
return (new cljs.core.async.t1308457(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1308458));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t1308457(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1308576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1308529){
var state_val_1308530 = (state_1308529[(1)]);
if((state_val_1308530 === (7))){
var inst_1308473 = (state_1308529[(7)]);
var inst_1308478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1308473);
var state_1308529__$1 = state_1308529;
var statearr_1308531_1308577 = state_1308529__$1;
(statearr_1308531_1308577[(2)] = inst_1308478);

(statearr_1308531_1308577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (20))){
var inst_1308488 = (state_1308529[(8)]);
var state_1308529__$1 = state_1308529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1308529__$1,(23),out,inst_1308488);
} else {
if((state_val_1308530 === (1))){
var inst_1308463 = (state_1308529[(9)]);
var inst_1308463__$1 = calc_state.call(null);
var inst_1308464 = cljs.core.seq_QMARK_.call(null,inst_1308463__$1);
var state_1308529__$1 = (function (){var statearr_1308532 = state_1308529;
(statearr_1308532[(9)] = inst_1308463__$1);

return statearr_1308532;
})();
if(inst_1308464){
var statearr_1308533_1308578 = state_1308529__$1;
(statearr_1308533_1308578[(1)] = (2));

} else {
var statearr_1308534_1308579 = state_1308529__$1;
(statearr_1308534_1308579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (24))){
var inst_1308481 = (state_1308529[(10)]);
var inst_1308473 = inst_1308481;
var state_1308529__$1 = (function (){var statearr_1308535 = state_1308529;
(statearr_1308535[(7)] = inst_1308473);

return statearr_1308535;
})();
var statearr_1308536_1308580 = state_1308529__$1;
(statearr_1308536_1308580[(2)] = null);

(statearr_1308536_1308580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (4))){
var inst_1308463 = (state_1308529[(9)]);
var inst_1308469 = (state_1308529[(2)]);
var inst_1308470 = cljs.core.get.call(null,inst_1308469,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1308471 = cljs.core.get.call(null,inst_1308469,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1308472 = cljs.core.get.call(null,inst_1308469,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1308473 = inst_1308463;
var state_1308529__$1 = (function (){var statearr_1308537 = state_1308529;
(statearr_1308537[(11)] = inst_1308472);

(statearr_1308537[(12)] = inst_1308470);

(statearr_1308537[(13)] = inst_1308471);

(statearr_1308537[(7)] = inst_1308473);

return statearr_1308537;
})();
var statearr_1308538_1308581 = state_1308529__$1;
(statearr_1308538_1308581[(2)] = null);

(statearr_1308538_1308581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (15))){
var state_1308529__$1 = state_1308529;
var statearr_1308539_1308582 = state_1308529__$1;
(statearr_1308539_1308582[(2)] = null);

(statearr_1308539_1308582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (21))){
var inst_1308481 = (state_1308529[(10)]);
var inst_1308473 = inst_1308481;
var state_1308529__$1 = (function (){var statearr_1308540 = state_1308529;
(statearr_1308540[(7)] = inst_1308473);

return statearr_1308540;
})();
var statearr_1308541_1308583 = state_1308529__$1;
(statearr_1308541_1308583[(2)] = null);

(statearr_1308541_1308583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (13))){
var inst_1308525 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
var statearr_1308542_1308584 = state_1308529__$1;
(statearr_1308542_1308584[(2)] = inst_1308525);

(statearr_1308542_1308584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (22))){
var inst_1308523 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
var statearr_1308543_1308585 = state_1308529__$1;
(statearr_1308543_1308585[(2)] = inst_1308523);

(statearr_1308543_1308585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (6))){
var inst_1308527 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1308529__$1,inst_1308527);
} else {
if((state_val_1308530 === (25))){
var state_1308529__$1 = state_1308529;
var statearr_1308544_1308586 = state_1308529__$1;
(statearr_1308544_1308586[(2)] = null);

(statearr_1308544_1308586[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (17))){
var inst_1308503 = (state_1308529[(14)]);
var state_1308529__$1 = state_1308529;
var statearr_1308545_1308587 = state_1308529__$1;
(statearr_1308545_1308587[(2)] = inst_1308503);

(statearr_1308545_1308587[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (3))){
var inst_1308463 = (state_1308529[(9)]);
var state_1308529__$1 = state_1308529;
var statearr_1308546_1308588 = state_1308529__$1;
(statearr_1308546_1308588[(2)] = inst_1308463);

(statearr_1308546_1308588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (12))){
var inst_1308489 = (state_1308529[(15)]);
var inst_1308503 = (state_1308529[(14)]);
var inst_1308484 = (state_1308529[(16)]);
var inst_1308503__$1 = inst_1308484.call(null,inst_1308489);
var state_1308529__$1 = (function (){var statearr_1308547 = state_1308529;
(statearr_1308547[(14)] = inst_1308503__$1);

return statearr_1308547;
})();
if(cljs.core.truth_(inst_1308503__$1)){
var statearr_1308548_1308589 = state_1308529__$1;
(statearr_1308548_1308589[(1)] = (17));

} else {
var statearr_1308549_1308590 = state_1308529__$1;
(statearr_1308549_1308590[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (2))){
var inst_1308463 = (state_1308529[(9)]);
var inst_1308466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1308463);
var state_1308529__$1 = state_1308529;
var statearr_1308550_1308591 = state_1308529__$1;
(statearr_1308550_1308591[(2)] = inst_1308466);

(statearr_1308550_1308591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (23))){
var inst_1308514 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
if(cljs.core.truth_(inst_1308514)){
var statearr_1308551_1308592 = state_1308529__$1;
(statearr_1308551_1308592[(1)] = (24));

} else {
var statearr_1308552_1308593 = state_1308529__$1;
(statearr_1308552_1308593[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (19))){
var inst_1308511 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
if(cljs.core.truth_(inst_1308511)){
var statearr_1308553_1308594 = state_1308529__$1;
(statearr_1308553_1308594[(1)] = (20));

} else {
var statearr_1308554_1308595 = state_1308529__$1;
(statearr_1308554_1308595[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (11))){
var inst_1308488 = (state_1308529[(8)]);
var inst_1308494 = (inst_1308488 == null);
var state_1308529__$1 = state_1308529;
if(cljs.core.truth_(inst_1308494)){
var statearr_1308555_1308596 = state_1308529__$1;
(statearr_1308555_1308596[(1)] = (14));

} else {
var statearr_1308556_1308597 = state_1308529__$1;
(statearr_1308556_1308597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (9))){
var inst_1308481 = (state_1308529[(10)]);
var inst_1308481__$1 = (state_1308529[(2)]);
var inst_1308482 = cljs.core.get.call(null,inst_1308481__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1308483 = cljs.core.get.call(null,inst_1308481__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1308484 = cljs.core.get.call(null,inst_1308481__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_1308529__$1 = (function (){var statearr_1308557 = state_1308529;
(statearr_1308557[(10)] = inst_1308481__$1);

(statearr_1308557[(16)] = inst_1308484);

(statearr_1308557[(17)] = inst_1308483);

return statearr_1308557;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1308529__$1,(10),inst_1308482);
} else {
if((state_val_1308530 === (5))){
var inst_1308473 = (state_1308529[(7)]);
var inst_1308476 = cljs.core.seq_QMARK_.call(null,inst_1308473);
var state_1308529__$1 = state_1308529;
if(inst_1308476){
var statearr_1308558_1308598 = state_1308529__$1;
(statearr_1308558_1308598[(1)] = (7));

} else {
var statearr_1308559_1308599 = state_1308529__$1;
(statearr_1308559_1308599[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (14))){
var inst_1308489 = (state_1308529[(15)]);
var inst_1308496 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1308489);
var state_1308529__$1 = state_1308529;
var statearr_1308560_1308600 = state_1308529__$1;
(statearr_1308560_1308600[(2)] = inst_1308496);

(statearr_1308560_1308600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (26))){
var inst_1308519 = (state_1308529[(2)]);
var state_1308529__$1 = state_1308529;
var statearr_1308561_1308601 = state_1308529__$1;
(statearr_1308561_1308601[(2)] = inst_1308519);

(statearr_1308561_1308601[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (16))){
var inst_1308499 = (state_1308529[(2)]);
var inst_1308500 = calc_state.call(null);
var inst_1308473 = inst_1308500;
var state_1308529__$1 = (function (){var statearr_1308562 = state_1308529;
(statearr_1308562[(18)] = inst_1308499);

(statearr_1308562[(7)] = inst_1308473);

return statearr_1308562;
})();
var statearr_1308563_1308602 = state_1308529__$1;
(statearr_1308563_1308602[(2)] = null);

(statearr_1308563_1308602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (10))){
var inst_1308489 = (state_1308529[(15)]);
var inst_1308488 = (state_1308529[(8)]);
var inst_1308487 = (state_1308529[(2)]);
var inst_1308488__$1 = cljs.core.nth.call(null,inst_1308487,(0),null);
var inst_1308489__$1 = cljs.core.nth.call(null,inst_1308487,(1),null);
var inst_1308490 = (inst_1308488__$1 == null);
var inst_1308491 = cljs.core._EQ_.call(null,inst_1308489__$1,change);
var inst_1308492 = (inst_1308490) || (inst_1308491);
var state_1308529__$1 = (function (){var statearr_1308564 = state_1308529;
(statearr_1308564[(15)] = inst_1308489__$1);

(statearr_1308564[(8)] = inst_1308488__$1);

return statearr_1308564;
})();
if(cljs.core.truth_(inst_1308492)){
var statearr_1308565_1308603 = state_1308529__$1;
(statearr_1308565_1308603[(1)] = (11));

} else {
var statearr_1308566_1308604 = state_1308529__$1;
(statearr_1308566_1308604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (18))){
var inst_1308489 = (state_1308529[(15)]);
var inst_1308484 = (state_1308529[(16)]);
var inst_1308483 = (state_1308529[(17)]);
var inst_1308506 = cljs.core.empty_QMARK_.call(null,inst_1308484);
var inst_1308507 = inst_1308483.call(null,inst_1308489);
var inst_1308508 = cljs.core.not.call(null,inst_1308507);
var inst_1308509 = (inst_1308506) && (inst_1308508);
var state_1308529__$1 = state_1308529;
var statearr_1308567_1308605 = state_1308529__$1;
(statearr_1308567_1308605[(2)] = inst_1308509);

(statearr_1308567_1308605[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308530 === (8))){
var inst_1308473 = (state_1308529[(7)]);
var state_1308529__$1 = state_1308529;
var statearr_1308568_1308606 = state_1308529__$1;
(statearr_1308568_1308606[(2)] = inst_1308473);

(statearr_1308568_1308606[(1)] = (9));


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
});})(c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1308572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1308572[(0)] = state_machine__9185__auto__);

(statearr_1308572[(1)] = (1));

return statearr_1308572;
});
var state_machine__9185__auto____1 = (function (state_1308529){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1308529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1308573){if((e1308573 instanceof Object)){
var ex__9188__auto__ = e1308573;
var statearr_1308574_1308607 = state_1308529;
(statearr_1308574_1308607[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1308573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1308608 = state_1308529;
state_1308529 = G__1308608;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1308529){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1308529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_1308575 = f__9200__auto__.call(null);
(statearr_1308575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1308576);

return statearr_1308575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1308576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj1308610 = {};
return obj1308610;
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
return (function (p1__1308611_SHARP_){
if(cljs.core.truth_(p1__1308611_SHARP_.call(null,topic))){
return p1__1308611_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1308611_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t1308734 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1308734 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta1308735){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta1308735 = meta1308735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1308734.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t1308734.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t1308734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1308734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1308736){
var self__ = this;
var _1308736__$1 = this;
return self__.meta1308735;
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1308736,meta1308735__$1){
var self__ = this;
var _1308736__$1 = this;
return (new cljs.core.async.t1308734(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta1308735__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t1308734.cljs$lang$type = true;

cljs.core.async.t1308734.cljs$lang$ctorStr = "cljs.core.async/t1308734";

cljs.core.async.t1308734.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1308734");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t1308734 = ((function (mults,ensure_mult){
return (function __GT_t1308734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1308735){
return (new cljs.core.async.t1308734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1308735));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t1308734(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1308856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1308856,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1308856,mults,ensure_mult,p){
return (function (state_1308808){
var state_val_1308809 = (state_1308808[(1)]);
if((state_val_1308809 === (7))){
var inst_1308804 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308810_1308857 = state_1308808__$1;
(statearr_1308810_1308857[(2)] = inst_1308804);

(statearr_1308810_1308857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (20))){
var state_1308808__$1 = state_1308808;
var statearr_1308811_1308858 = state_1308808__$1;
(statearr_1308811_1308858[(2)] = null);

(statearr_1308811_1308858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (1))){
var state_1308808__$1 = state_1308808;
var statearr_1308812_1308859 = state_1308808__$1;
(statearr_1308812_1308859[(2)] = null);

(statearr_1308812_1308859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (24))){
var inst_1308787 = (state_1308808[(7)]);
var inst_1308796 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1308787);
var state_1308808__$1 = state_1308808;
var statearr_1308813_1308860 = state_1308808__$1;
(statearr_1308813_1308860[(2)] = inst_1308796);

(statearr_1308813_1308860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (4))){
var inst_1308739 = (state_1308808[(8)]);
var inst_1308739__$1 = (state_1308808[(2)]);
var inst_1308740 = (inst_1308739__$1 == null);
var state_1308808__$1 = (function (){var statearr_1308814 = state_1308808;
(statearr_1308814[(8)] = inst_1308739__$1);

return statearr_1308814;
})();
if(cljs.core.truth_(inst_1308740)){
var statearr_1308815_1308861 = state_1308808__$1;
(statearr_1308815_1308861[(1)] = (5));

} else {
var statearr_1308816_1308862 = state_1308808__$1;
(statearr_1308816_1308862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (15))){
var inst_1308781 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308817_1308863 = state_1308808__$1;
(statearr_1308817_1308863[(2)] = inst_1308781);

(statearr_1308817_1308863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (21))){
var inst_1308801 = (state_1308808[(2)]);
var state_1308808__$1 = (function (){var statearr_1308818 = state_1308808;
(statearr_1308818[(9)] = inst_1308801);

return statearr_1308818;
})();
var statearr_1308819_1308864 = state_1308808__$1;
(statearr_1308819_1308864[(2)] = null);

(statearr_1308819_1308864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (13))){
var inst_1308763 = (state_1308808[(10)]);
var inst_1308765 = cljs.core.chunked_seq_QMARK_.call(null,inst_1308763);
var state_1308808__$1 = state_1308808;
if(inst_1308765){
var statearr_1308820_1308865 = state_1308808__$1;
(statearr_1308820_1308865[(1)] = (16));

} else {
var statearr_1308821_1308866 = state_1308808__$1;
(statearr_1308821_1308866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (22))){
var inst_1308793 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
if(cljs.core.truth_(inst_1308793)){
var statearr_1308822_1308867 = state_1308808__$1;
(statearr_1308822_1308867[(1)] = (23));

} else {
var statearr_1308823_1308868 = state_1308808__$1;
(statearr_1308823_1308868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (6))){
var inst_1308789 = (state_1308808[(11)]);
var inst_1308739 = (state_1308808[(8)]);
var inst_1308787 = (state_1308808[(7)]);
var inst_1308787__$1 = topic_fn.call(null,inst_1308739);
var inst_1308788 = cljs.core.deref.call(null,mults);
var inst_1308789__$1 = cljs.core.get.call(null,inst_1308788,inst_1308787__$1);
var state_1308808__$1 = (function (){var statearr_1308824 = state_1308808;
(statearr_1308824[(11)] = inst_1308789__$1);

(statearr_1308824[(7)] = inst_1308787__$1);

return statearr_1308824;
})();
if(cljs.core.truth_(inst_1308789__$1)){
var statearr_1308825_1308869 = state_1308808__$1;
(statearr_1308825_1308869[(1)] = (19));

} else {
var statearr_1308826_1308870 = state_1308808__$1;
(statearr_1308826_1308870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (25))){
var inst_1308798 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308827_1308871 = state_1308808__$1;
(statearr_1308827_1308871[(2)] = inst_1308798);

(statearr_1308827_1308871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (17))){
var inst_1308763 = (state_1308808[(10)]);
var inst_1308772 = cljs.core.first.call(null,inst_1308763);
var inst_1308773 = cljs.core.async.muxch_STAR_.call(null,inst_1308772);
var inst_1308774 = cljs.core.async.close_BANG_.call(null,inst_1308773);
var inst_1308775 = cljs.core.next.call(null,inst_1308763);
var inst_1308749 = inst_1308775;
var inst_1308750 = null;
var inst_1308751 = (0);
var inst_1308752 = (0);
var state_1308808__$1 = (function (){var statearr_1308828 = state_1308808;
(statearr_1308828[(12)] = inst_1308752);

(statearr_1308828[(13)] = inst_1308751);

(statearr_1308828[(14)] = inst_1308750);

(statearr_1308828[(15)] = inst_1308774);

(statearr_1308828[(16)] = inst_1308749);

return statearr_1308828;
})();
var statearr_1308829_1308872 = state_1308808__$1;
(statearr_1308829_1308872[(2)] = null);

(statearr_1308829_1308872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (3))){
var inst_1308806 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1308808__$1,inst_1308806);
} else {
if((state_val_1308809 === (12))){
var inst_1308783 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308830_1308873 = state_1308808__$1;
(statearr_1308830_1308873[(2)] = inst_1308783);

(statearr_1308830_1308873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (2))){
var state_1308808__$1 = state_1308808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1308808__$1,(4),ch);
} else {
if((state_val_1308809 === (23))){
var state_1308808__$1 = state_1308808;
var statearr_1308831_1308874 = state_1308808__$1;
(statearr_1308831_1308874[(2)] = null);

(statearr_1308831_1308874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (19))){
var inst_1308789 = (state_1308808[(11)]);
var inst_1308739 = (state_1308808[(8)]);
var inst_1308791 = cljs.core.async.muxch_STAR_.call(null,inst_1308789);
var state_1308808__$1 = state_1308808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1308808__$1,(22),inst_1308791,inst_1308739);
} else {
if((state_val_1308809 === (11))){
var inst_1308763 = (state_1308808[(10)]);
var inst_1308749 = (state_1308808[(16)]);
var inst_1308763__$1 = cljs.core.seq.call(null,inst_1308749);
var state_1308808__$1 = (function (){var statearr_1308832 = state_1308808;
(statearr_1308832[(10)] = inst_1308763__$1);

return statearr_1308832;
})();
if(inst_1308763__$1){
var statearr_1308833_1308875 = state_1308808__$1;
(statearr_1308833_1308875[(1)] = (13));

} else {
var statearr_1308834_1308876 = state_1308808__$1;
(statearr_1308834_1308876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (9))){
var inst_1308785 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308835_1308877 = state_1308808__$1;
(statearr_1308835_1308877[(2)] = inst_1308785);

(statearr_1308835_1308877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (5))){
var inst_1308746 = cljs.core.deref.call(null,mults);
var inst_1308747 = cljs.core.vals.call(null,inst_1308746);
var inst_1308748 = cljs.core.seq.call(null,inst_1308747);
var inst_1308749 = inst_1308748;
var inst_1308750 = null;
var inst_1308751 = (0);
var inst_1308752 = (0);
var state_1308808__$1 = (function (){var statearr_1308836 = state_1308808;
(statearr_1308836[(12)] = inst_1308752);

(statearr_1308836[(13)] = inst_1308751);

(statearr_1308836[(14)] = inst_1308750);

(statearr_1308836[(16)] = inst_1308749);

return statearr_1308836;
})();
var statearr_1308837_1308878 = state_1308808__$1;
(statearr_1308837_1308878[(2)] = null);

(statearr_1308837_1308878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (14))){
var state_1308808__$1 = state_1308808;
var statearr_1308841_1308879 = state_1308808__$1;
(statearr_1308841_1308879[(2)] = null);

(statearr_1308841_1308879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (16))){
var inst_1308763 = (state_1308808[(10)]);
var inst_1308767 = cljs.core.chunk_first.call(null,inst_1308763);
var inst_1308768 = cljs.core.chunk_rest.call(null,inst_1308763);
var inst_1308769 = cljs.core.count.call(null,inst_1308767);
var inst_1308749 = inst_1308768;
var inst_1308750 = inst_1308767;
var inst_1308751 = inst_1308769;
var inst_1308752 = (0);
var state_1308808__$1 = (function (){var statearr_1308842 = state_1308808;
(statearr_1308842[(12)] = inst_1308752);

(statearr_1308842[(13)] = inst_1308751);

(statearr_1308842[(14)] = inst_1308750);

(statearr_1308842[(16)] = inst_1308749);

return statearr_1308842;
})();
var statearr_1308843_1308880 = state_1308808__$1;
(statearr_1308843_1308880[(2)] = null);

(statearr_1308843_1308880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (10))){
var inst_1308752 = (state_1308808[(12)]);
var inst_1308751 = (state_1308808[(13)]);
var inst_1308750 = (state_1308808[(14)]);
var inst_1308749 = (state_1308808[(16)]);
var inst_1308757 = cljs.core._nth.call(null,inst_1308750,inst_1308752);
var inst_1308758 = cljs.core.async.muxch_STAR_.call(null,inst_1308757);
var inst_1308759 = cljs.core.async.close_BANG_.call(null,inst_1308758);
var inst_1308760 = (inst_1308752 + (1));
var tmp1308838 = inst_1308751;
var tmp1308839 = inst_1308750;
var tmp1308840 = inst_1308749;
var inst_1308749__$1 = tmp1308840;
var inst_1308750__$1 = tmp1308839;
var inst_1308751__$1 = tmp1308838;
var inst_1308752__$1 = inst_1308760;
var state_1308808__$1 = (function (){var statearr_1308844 = state_1308808;
(statearr_1308844[(12)] = inst_1308752__$1);

(statearr_1308844[(13)] = inst_1308751__$1);

(statearr_1308844[(17)] = inst_1308759);

(statearr_1308844[(14)] = inst_1308750__$1);

(statearr_1308844[(16)] = inst_1308749__$1);

return statearr_1308844;
})();
var statearr_1308845_1308881 = state_1308808__$1;
(statearr_1308845_1308881[(2)] = null);

(statearr_1308845_1308881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (18))){
var inst_1308778 = (state_1308808[(2)]);
var state_1308808__$1 = state_1308808;
var statearr_1308846_1308882 = state_1308808__$1;
(statearr_1308846_1308882[(2)] = inst_1308778);

(statearr_1308846_1308882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308809 === (8))){
var inst_1308752 = (state_1308808[(12)]);
var inst_1308751 = (state_1308808[(13)]);
var inst_1308754 = (inst_1308752 < inst_1308751);
var inst_1308755 = inst_1308754;
var state_1308808__$1 = state_1308808;
if(cljs.core.truth_(inst_1308755)){
var statearr_1308847_1308883 = state_1308808__$1;
(statearr_1308847_1308883[(1)] = (10));

} else {
var statearr_1308848_1308884 = state_1308808__$1;
(statearr_1308848_1308884[(1)] = (11));

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
});})(c__9199__auto___1308856,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___1308856,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1308852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1308852[(0)] = state_machine__9185__auto__);

(statearr_1308852[(1)] = (1));

return statearr_1308852;
});
var state_machine__9185__auto____1 = (function (state_1308808){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1308808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1308853){if((e1308853 instanceof Object)){
var ex__9188__auto__ = e1308853;
var statearr_1308854_1308885 = state_1308808;
(statearr_1308854_1308885[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1308853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1308886 = state_1308808;
state_1308808 = G__1308886;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1308808){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1308808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1308856,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_1308855 = f__9200__auto__.call(null);
(statearr_1308855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1308856);

return statearr_1308855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1308856,mults,ensure_mult,p))
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
var c__9199__auto___1309023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1308993){
var state_val_1308994 = (state_1308993[(1)]);
if((state_val_1308994 === (7))){
var state_1308993__$1 = state_1308993;
var statearr_1308995_1309024 = state_1308993__$1;
(statearr_1308995_1309024[(2)] = null);

(statearr_1308995_1309024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (1))){
var state_1308993__$1 = state_1308993;
var statearr_1308996_1309025 = state_1308993__$1;
(statearr_1308996_1309025[(2)] = null);

(statearr_1308996_1309025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (4))){
var inst_1308957 = (state_1308993[(7)]);
var inst_1308959 = (inst_1308957 < cnt);
var state_1308993__$1 = state_1308993;
if(cljs.core.truth_(inst_1308959)){
var statearr_1308997_1309026 = state_1308993__$1;
(statearr_1308997_1309026[(1)] = (6));

} else {
var statearr_1308998_1309027 = state_1308993__$1;
(statearr_1308998_1309027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (15))){
var inst_1308989 = (state_1308993[(2)]);
var state_1308993__$1 = state_1308993;
var statearr_1308999_1309028 = state_1308993__$1;
(statearr_1308999_1309028[(2)] = inst_1308989);

(statearr_1308999_1309028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (13))){
var inst_1308982 = cljs.core.async.close_BANG_.call(null,out);
var state_1308993__$1 = state_1308993;
var statearr_1309000_1309029 = state_1308993__$1;
(statearr_1309000_1309029[(2)] = inst_1308982);

(statearr_1309000_1309029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (6))){
var state_1308993__$1 = state_1308993;
var statearr_1309001_1309030 = state_1308993__$1;
(statearr_1309001_1309030[(2)] = null);

(statearr_1309001_1309030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (3))){
var inst_1308991 = (state_1308993[(2)]);
var state_1308993__$1 = state_1308993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1308993__$1,inst_1308991);
} else {
if((state_val_1308994 === (12))){
var inst_1308979 = (state_1308993[(8)]);
var inst_1308979__$1 = (state_1308993[(2)]);
var inst_1308980 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1308979__$1);
var state_1308993__$1 = (function (){var statearr_1309002 = state_1308993;
(statearr_1309002[(8)] = inst_1308979__$1);

return statearr_1309002;
})();
if(cljs.core.truth_(inst_1308980)){
var statearr_1309003_1309031 = state_1308993__$1;
(statearr_1309003_1309031[(1)] = (13));

} else {
var statearr_1309004_1309032 = state_1308993__$1;
(statearr_1309004_1309032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (2))){
var inst_1308956 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1308957 = (0);
var state_1308993__$1 = (function (){var statearr_1309005 = state_1308993;
(statearr_1309005[(7)] = inst_1308957);

(statearr_1309005[(9)] = inst_1308956);

return statearr_1309005;
})();
var statearr_1309006_1309033 = state_1308993__$1;
(statearr_1309006_1309033[(2)] = null);

(statearr_1309006_1309033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (11))){
var inst_1308957 = (state_1308993[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1308993,(10),Object,null,(9));
var inst_1308966 = chs__$1.call(null,inst_1308957);
var inst_1308967 = done.call(null,inst_1308957);
var inst_1308968 = cljs.core.async.take_BANG_.call(null,inst_1308966,inst_1308967);
var state_1308993__$1 = state_1308993;
var statearr_1309007_1309034 = state_1308993__$1;
(statearr_1309007_1309034[(2)] = inst_1308968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (9))){
var inst_1308957 = (state_1308993[(7)]);
var inst_1308970 = (state_1308993[(2)]);
var inst_1308971 = (inst_1308957 + (1));
var inst_1308957__$1 = inst_1308971;
var state_1308993__$1 = (function (){var statearr_1309008 = state_1308993;
(statearr_1309008[(7)] = inst_1308957__$1);

(statearr_1309008[(10)] = inst_1308970);

return statearr_1309008;
})();
var statearr_1309009_1309035 = state_1308993__$1;
(statearr_1309009_1309035[(2)] = null);

(statearr_1309009_1309035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (5))){
var inst_1308977 = (state_1308993[(2)]);
var state_1308993__$1 = (function (){var statearr_1309010 = state_1308993;
(statearr_1309010[(11)] = inst_1308977);

return statearr_1309010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1308993__$1,(12),dchan);
} else {
if((state_val_1308994 === (14))){
var inst_1308979 = (state_1308993[(8)]);
var inst_1308984 = cljs.core.apply.call(null,f,inst_1308979);
var state_1308993__$1 = state_1308993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1308993__$1,(16),out,inst_1308984);
} else {
if((state_val_1308994 === (16))){
var inst_1308986 = (state_1308993[(2)]);
var state_1308993__$1 = (function (){var statearr_1309011 = state_1308993;
(statearr_1309011[(12)] = inst_1308986);

return statearr_1309011;
})();
var statearr_1309012_1309036 = state_1308993__$1;
(statearr_1309012_1309036[(2)] = null);

(statearr_1309012_1309036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (10))){
var inst_1308961 = (state_1308993[(2)]);
var inst_1308962 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1308993__$1 = (function (){var statearr_1309013 = state_1308993;
(statearr_1309013[(13)] = inst_1308961);

return statearr_1309013;
})();
var statearr_1309014_1309037 = state_1308993__$1;
(statearr_1309014_1309037[(2)] = inst_1308962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1308994 === (8))){
var inst_1308975 = (state_1308993[(2)]);
var state_1308993__$1 = state_1308993;
var statearr_1309015_1309038 = state_1308993__$1;
(statearr_1309015_1309038[(2)] = inst_1308975);

(statearr_1309015_1309038[(1)] = (5));


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
});})(c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309019[(0)] = state_machine__9185__auto__);

(statearr_1309019[(1)] = (1));

return statearr_1309019;
});
var state_machine__9185__auto____1 = (function (state_1308993){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1308993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309020){if((e1309020 instanceof Object)){
var ex__9188__auto__ = e1309020;
var statearr_1309021_1309039 = state_1308993;
(statearr_1309021_1309039[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1308993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309040 = state_1308993;
state_1308993 = G__1309040;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1308993){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1308993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1309022 = f__9200__auto__.call(null);
(statearr_1309022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309023);

return statearr_1309022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309023,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___1309148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309148,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309148,out){
return (function (state_1309124){
var state_val_1309125 = (state_1309124[(1)]);
if((state_val_1309125 === (7))){
var inst_1309103 = (state_1309124[(7)]);
var inst_1309104 = (state_1309124[(8)]);
var inst_1309103__$1 = (state_1309124[(2)]);
var inst_1309104__$1 = cljs.core.nth.call(null,inst_1309103__$1,(0),null);
var inst_1309105 = cljs.core.nth.call(null,inst_1309103__$1,(1),null);
var inst_1309106 = (inst_1309104__$1 == null);
var state_1309124__$1 = (function (){var statearr_1309126 = state_1309124;
(statearr_1309126[(7)] = inst_1309103__$1);

(statearr_1309126[(8)] = inst_1309104__$1);

(statearr_1309126[(9)] = inst_1309105);

return statearr_1309126;
})();
if(cljs.core.truth_(inst_1309106)){
var statearr_1309127_1309149 = state_1309124__$1;
(statearr_1309127_1309149[(1)] = (8));

} else {
var statearr_1309128_1309150 = state_1309124__$1;
(statearr_1309128_1309150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (1))){
var inst_1309095 = cljs.core.vec.call(null,chs);
var inst_1309096 = inst_1309095;
var state_1309124__$1 = (function (){var statearr_1309129 = state_1309124;
(statearr_1309129[(10)] = inst_1309096);

return statearr_1309129;
})();
var statearr_1309130_1309151 = state_1309124__$1;
(statearr_1309130_1309151[(2)] = null);

(statearr_1309130_1309151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (4))){
var inst_1309096 = (state_1309124[(10)]);
var state_1309124__$1 = state_1309124;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1309124__$1,(7),inst_1309096);
} else {
if((state_val_1309125 === (6))){
var inst_1309120 = (state_1309124[(2)]);
var state_1309124__$1 = state_1309124;
var statearr_1309131_1309152 = state_1309124__$1;
(statearr_1309131_1309152[(2)] = inst_1309120);

(statearr_1309131_1309152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (3))){
var inst_1309122 = (state_1309124[(2)]);
var state_1309124__$1 = state_1309124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309124__$1,inst_1309122);
} else {
if((state_val_1309125 === (2))){
var inst_1309096 = (state_1309124[(10)]);
var inst_1309098 = cljs.core.count.call(null,inst_1309096);
var inst_1309099 = (inst_1309098 > (0));
var state_1309124__$1 = state_1309124;
if(cljs.core.truth_(inst_1309099)){
var statearr_1309133_1309153 = state_1309124__$1;
(statearr_1309133_1309153[(1)] = (4));

} else {
var statearr_1309134_1309154 = state_1309124__$1;
(statearr_1309134_1309154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (11))){
var inst_1309096 = (state_1309124[(10)]);
var inst_1309113 = (state_1309124[(2)]);
var tmp1309132 = inst_1309096;
var inst_1309096__$1 = tmp1309132;
var state_1309124__$1 = (function (){var statearr_1309135 = state_1309124;
(statearr_1309135[(11)] = inst_1309113);

(statearr_1309135[(10)] = inst_1309096__$1);

return statearr_1309135;
})();
var statearr_1309136_1309155 = state_1309124__$1;
(statearr_1309136_1309155[(2)] = null);

(statearr_1309136_1309155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (9))){
var inst_1309104 = (state_1309124[(8)]);
var state_1309124__$1 = state_1309124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309124__$1,(11),out,inst_1309104);
} else {
if((state_val_1309125 === (5))){
var inst_1309118 = cljs.core.async.close_BANG_.call(null,out);
var state_1309124__$1 = state_1309124;
var statearr_1309137_1309156 = state_1309124__$1;
(statearr_1309137_1309156[(2)] = inst_1309118);

(statearr_1309137_1309156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (10))){
var inst_1309116 = (state_1309124[(2)]);
var state_1309124__$1 = state_1309124;
var statearr_1309138_1309157 = state_1309124__$1;
(statearr_1309138_1309157[(2)] = inst_1309116);

(statearr_1309138_1309157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309125 === (8))){
var inst_1309103 = (state_1309124[(7)]);
var inst_1309104 = (state_1309124[(8)]);
var inst_1309105 = (state_1309124[(9)]);
var inst_1309096 = (state_1309124[(10)]);
var inst_1309108 = (function (){var c = inst_1309105;
var v = inst_1309104;
var vec__1309101 = inst_1309103;
var cs = inst_1309096;
return ((function (c,v,vec__1309101,cs,inst_1309103,inst_1309104,inst_1309105,inst_1309096,state_val_1309125,c__9199__auto___1309148,out){
return (function (p1__1309041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1309041_SHARP_);
});
;})(c,v,vec__1309101,cs,inst_1309103,inst_1309104,inst_1309105,inst_1309096,state_val_1309125,c__9199__auto___1309148,out))
})();
var inst_1309109 = cljs.core.filterv.call(null,inst_1309108,inst_1309096);
var inst_1309096__$1 = inst_1309109;
var state_1309124__$1 = (function (){var statearr_1309139 = state_1309124;
(statearr_1309139[(10)] = inst_1309096__$1);

return statearr_1309139;
})();
var statearr_1309140_1309158 = state_1309124__$1;
(statearr_1309140_1309158[(2)] = null);

(statearr_1309140_1309158[(1)] = (2));


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
});})(c__9199__auto___1309148,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1309148,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309144[(0)] = state_machine__9185__auto__);

(statearr_1309144[(1)] = (1));

return statearr_1309144;
});
var state_machine__9185__auto____1 = (function (state_1309124){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309145){if((e1309145 instanceof Object)){
var ex__9188__auto__ = e1309145;
var statearr_1309146_1309159 = state_1309124;
(statearr_1309146_1309159[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309160 = state_1309124;
state_1309124 = G__1309160;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309124){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309148,out))
})();
var state__9201__auto__ = (function (){var statearr_1309147 = f__9200__auto__.call(null);
(statearr_1309147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309148);

return statearr_1309147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309148,out))
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
var c__9199__auto___1309253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309253,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309253,out){
return (function (state_1309230){
var state_val_1309231 = (state_1309230[(1)]);
if((state_val_1309231 === (7))){
var inst_1309212 = (state_1309230[(7)]);
var inst_1309212__$1 = (state_1309230[(2)]);
var inst_1309213 = (inst_1309212__$1 == null);
var inst_1309214 = cljs.core.not.call(null,inst_1309213);
var state_1309230__$1 = (function (){var statearr_1309232 = state_1309230;
(statearr_1309232[(7)] = inst_1309212__$1);

return statearr_1309232;
})();
if(inst_1309214){
var statearr_1309233_1309254 = state_1309230__$1;
(statearr_1309233_1309254[(1)] = (8));

} else {
var statearr_1309234_1309255 = state_1309230__$1;
(statearr_1309234_1309255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (1))){
var inst_1309207 = (0);
var state_1309230__$1 = (function (){var statearr_1309235 = state_1309230;
(statearr_1309235[(8)] = inst_1309207);

return statearr_1309235;
})();
var statearr_1309236_1309256 = state_1309230__$1;
(statearr_1309236_1309256[(2)] = null);

(statearr_1309236_1309256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (4))){
var state_1309230__$1 = state_1309230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309230__$1,(7),ch);
} else {
if((state_val_1309231 === (6))){
var inst_1309225 = (state_1309230[(2)]);
var state_1309230__$1 = state_1309230;
var statearr_1309237_1309257 = state_1309230__$1;
(statearr_1309237_1309257[(2)] = inst_1309225);

(statearr_1309237_1309257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (3))){
var inst_1309227 = (state_1309230[(2)]);
var inst_1309228 = cljs.core.async.close_BANG_.call(null,out);
var state_1309230__$1 = (function (){var statearr_1309238 = state_1309230;
(statearr_1309238[(9)] = inst_1309227);

return statearr_1309238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309230__$1,inst_1309228);
} else {
if((state_val_1309231 === (2))){
var inst_1309207 = (state_1309230[(8)]);
var inst_1309209 = (inst_1309207 < n);
var state_1309230__$1 = state_1309230;
if(cljs.core.truth_(inst_1309209)){
var statearr_1309239_1309258 = state_1309230__$1;
(statearr_1309239_1309258[(1)] = (4));

} else {
var statearr_1309240_1309259 = state_1309230__$1;
(statearr_1309240_1309259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (11))){
var inst_1309207 = (state_1309230[(8)]);
var inst_1309217 = (state_1309230[(2)]);
var inst_1309218 = (inst_1309207 + (1));
var inst_1309207__$1 = inst_1309218;
var state_1309230__$1 = (function (){var statearr_1309241 = state_1309230;
(statearr_1309241[(10)] = inst_1309217);

(statearr_1309241[(8)] = inst_1309207__$1);

return statearr_1309241;
})();
var statearr_1309242_1309260 = state_1309230__$1;
(statearr_1309242_1309260[(2)] = null);

(statearr_1309242_1309260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (9))){
var state_1309230__$1 = state_1309230;
var statearr_1309243_1309261 = state_1309230__$1;
(statearr_1309243_1309261[(2)] = null);

(statearr_1309243_1309261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (5))){
var state_1309230__$1 = state_1309230;
var statearr_1309244_1309262 = state_1309230__$1;
(statearr_1309244_1309262[(2)] = null);

(statearr_1309244_1309262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (10))){
var inst_1309222 = (state_1309230[(2)]);
var state_1309230__$1 = state_1309230;
var statearr_1309245_1309263 = state_1309230__$1;
(statearr_1309245_1309263[(2)] = inst_1309222);

(statearr_1309245_1309263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309231 === (8))){
var inst_1309212 = (state_1309230[(7)]);
var state_1309230__$1 = state_1309230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309230__$1,(11),out,inst_1309212);
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
});})(c__9199__auto___1309253,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1309253,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309249[(0)] = state_machine__9185__auto__);

(statearr_1309249[(1)] = (1));

return statearr_1309249;
});
var state_machine__9185__auto____1 = (function (state_1309230){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309250){if((e1309250 instanceof Object)){
var ex__9188__auto__ = e1309250;
var statearr_1309251_1309264 = state_1309230;
(statearr_1309251_1309264[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309265 = state_1309230;
state_1309230 = G__1309265;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309230){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309253,out))
})();
var state__9201__auto__ = (function (){var statearr_1309252 = f__9200__auto__.call(null);
(statearr_1309252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309253);

return statearr_1309252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309253,out))
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
if(typeof cljs.core.async.t1309273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1309273 = (function (ch,f,map_LT_,meta1309274){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta1309274 = meta1309274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t1309276 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1309276 = (function (fn1,_,meta1309274,map_LT_,f,ch,meta1309277){
this.fn1 = fn1;
this._ = _;
this.meta1309274 = meta1309274;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1309277 = meta1309277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1309276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1309276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t1309276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1309266_SHARP_){
return f1.call(null,(((p1__1309266_SHARP_ == null))?null:self__.f.call(null,p1__1309266_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t1309276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1309278){
var self__ = this;
var _1309278__$1 = this;
return self__.meta1309277;
});})(___$1))
;

cljs.core.async.t1309276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1309278,meta1309277__$1){
var self__ = this;
var _1309278__$1 = this;
return (new cljs.core.async.t1309276(self__.fn1,self__._,self__.meta1309274,self__.map_LT_,self__.f,self__.ch,meta1309277__$1));
});})(___$1))
;

cljs.core.async.t1309276.cljs$lang$type = true;

cljs.core.async.t1309276.cljs$lang$ctorStr = "cljs.core.async/t1309276";

cljs.core.async.t1309276.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1309276");
});})(___$1))
;

cljs.core.async.__GT_t1309276 = ((function (___$1){
return (function __GT_t1309276(fn1__$1,___$2,meta1309274__$1,map_LT___$1,f__$1,ch__$1,meta1309277){
return (new cljs.core.async.t1309276(fn1__$1,___$2,meta1309274__$1,map_LT___$1,f__$1,ch__$1,meta1309277));
});})(___$1))
;

}

return (new cljs.core.async.t1309276(fn1,___$1,self__.meta1309274,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1309273.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1309273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1309275){
var self__ = this;
var _1309275__$1 = this;
return self__.meta1309274;
});

cljs.core.async.t1309273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1309275,meta1309274__$1){
var self__ = this;
var _1309275__$1 = this;
return (new cljs.core.async.t1309273(self__.ch,self__.f,self__.map_LT_,meta1309274__$1));
});

cljs.core.async.t1309273.cljs$lang$type = true;

cljs.core.async.t1309273.cljs$lang$ctorStr = "cljs.core.async/t1309273";

cljs.core.async.t1309273.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1309273");
});

cljs.core.async.__GT_t1309273 = (function __GT_t1309273(ch__$1,f__$1,map_LT___$1,meta1309274){
return (new cljs.core.async.t1309273(ch__$1,f__$1,map_LT___$1,meta1309274));
});

}

return (new cljs.core.async.t1309273(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t1309282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1309282 = (function (ch,f,map_GT_,meta1309283){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta1309283 = meta1309283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1309282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1309282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1309284){
var self__ = this;
var _1309284__$1 = this;
return self__.meta1309283;
});

cljs.core.async.t1309282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1309284,meta1309283__$1){
var self__ = this;
var _1309284__$1 = this;
return (new cljs.core.async.t1309282(self__.ch,self__.f,self__.map_GT_,meta1309283__$1));
});

cljs.core.async.t1309282.cljs$lang$type = true;

cljs.core.async.t1309282.cljs$lang$ctorStr = "cljs.core.async/t1309282";

cljs.core.async.t1309282.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1309282");
});

cljs.core.async.__GT_t1309282 = (function __GT_t1309282(ch__$1,f__$1,map_GT___$1,meta1309283){
return (new cljs.core.async.t1309282(ch__$1,f__$1,map_GT___$1,meta1309283));
});

}

return (new cljs.core.async.t1309282(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t1309288 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1309288 = (function (ch,p,filter_GT_,meta1309289){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta1309289 = meta1309289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1309288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1309288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1309290){
var self__ = this;
var _1309290__$1 = this;
return self__.meta1309289;
});

cljs.core.async.t1309288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1309290,meta1309289__$1){
var self__ = this;
var _1309290__$1 = this;
return (new cljs.core.async.t1309288(self__.ch,self__.p,self__.filter_GT_,meta1309289__$1));
});

cljs.core.async.t1309288.cljs$lang$type = true;

cljs.core.async.t1309288.cljs$lang$ctorStr = "cljs.core.async/t1309288";

cljs.core.async.t1309288.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1309288");
});

cljs.core.async.__GT_t1309288 = (function __GT_t1309288(ch__$1,p__$1,filter_GT___$1,meta1309289){
return (new cljs.core.async.t1309288(ch__$1,p__$1,filter_GT___$1,meta1309289));
});

}

return (new cljs.core.async.t1309288(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1309373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309373,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309373,out){
return (function (state_1309352){
var state_val_1309353 = (state_1309352[(1)]);
if((state_val_1309353 === (7))){
var inst_1309348 = (state_1309352[(2)]);
var state_1309352__$1 = state_1309352;
var statearr_1309354_1309374 = state_1309352__$1;
(statearr_1309354_1309374[(2)] = inst_1309348);

(statearr_1309354_1309374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (1))){
var state_1309352__$1 = state_1309352;
var statearr_1309355_1309375 = state_1309352__$1;
(statearr_1309355_1309375[(2)] = null);

(statearr_1309355_1309375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (4))){
var inst_1309334 = (state_1309352[(7)]);
var inst_1309334__$1 = (state_1309352[(2)]);
var inst_1309335 = (inst_1309334__$1 == null);
var state_1309352__$1 = (function (){var statearr_1309356 = state_1309352;
(statearr_1309356[(7)] = inst_1309334__$1);

return statearr_1309356;
})();
if(cljs.core.truth_(inst_1309335)){
var statearr_1309357_1309376 = state_1309352__$1;
(statearr_1309357_1309376[(1)] = (5));

} else {
var statearr_1309358_1309377 = state_1309352__$1;
(statearr_1309358_1309377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (6))){
var inst_1309334 = (state_1309352[(7)]);
var inst_1309339 = p.call(null,inst_1309334);
var state_1309352__$1 = state_1309352;
if(cljs.core.truth_(inst_1309339)){
var statearr_1309359_1309378 = state_1309352__$1;
(statearr_1309359_1309378[(1)] = (8));

} else {
var statearr_1309360_1309379 = state_1309352__$1;
(statearr_1309360_1309379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (3))){
var inst_1309350 = (state_1309352[(2)]);
var state_1309352__$1 = state_1309352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309352__$1,inst_1309350);
} else {
if((state_val_1309353 === (2))){
var state_1309352__$1 = state_1309352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309352__$1,(4),ch);
} else {
if((state_val_1309353 === (11))){
var inst_1309342 = (state_1309352[(2)]);
var state_1309352__$1 = state_1309352;
var statearr_1309361_1309380 = state_1309352__$1;
(statearr_1309361_1309380[(2)] = inst_1309342);

(statearr_1309361_1309380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (9))){
var state_1309352__$1 = state_1309352;
var statearr_1309362_1309381 = state_1309352__$1;
(statearr_1309362_1309381[(2)] = null);

(statearr_1309362_1309381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (5))){
var inst_1309337 = cljs.core.async.close_BANG_.call(null,out);
var state_1309352__$1 = state_1309352;
var statearr_1309363_1309382 = state_1309352__$1;
(statearr_1309363_1309382[(2)] = inst_1309337);

(statearr_1309363_1309382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (10))){
var inst_1309345 = (state_1309352[(2)]);
var state_1309352__$1 = (function (){var statearr_1309364 = state_1309352;
(statearr_1309364[(8)] = inst_1309345);

return statearr_1309364;
})();
var statearr_1309365_1309383 = state_1309352__$1;
(statearr_1309365_1309383[(2)] = null);

(statearr_1309365_1309383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309353 === (8))){
var inst_1309334 = (state_1309352[(7)]);
var state_1309352__$1 = state_1309352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309352__$1,(11),out,inst_1309334);
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
});})(c__9199__auto___1309373,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1309373,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309369 = [null,null,null,null,null,null,null,null,null];
(statearr_1309369[(0)] = state_machine__9185__auto__);

(statearr_1309369[(1)] = (1));

return statearr_1309369;
});
var state_machine__9185__auto____1 = (function (state_1309352){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309370){if((e1309370 instanceof Object)){
var ex__9188__auto__ = e1309370;
var statearr_1309371_1309384 = state_1309352;
(statearr_1309371_1309384[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309385 = state_1309352;
state_1309352 = G__1309385;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309352){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309373,out))
})();
var state__9201__auto__ = (function (){var statearr_1309372 = f__9200__auto__.call(null);
(statearr_1309372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309373);

return statearr_1309372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309373,out))
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
return (function (state_1309551){
var state_val_1309552 = (state_1309551[(1)]);
if((state_val_1309552 === (7))){
var inst_1309547 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
var statearr_1309553_1309594 = state_1309551__$1;
(statearr_1309553_1309594[(2)] = inst_1309547);

(statearr_1309553_1309594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (20))){
var inst_1309517 = (state_1309551[(7)]);
var inst_1309528 = (state_1309551[(2)]);
var inst_1309529 = cljs.core.next.call(null,inst_1309517);
var inst_1309503 = inst_1309529;
var inst_1309504 = null;
var inst_1309505 = (0);
var inst_1309506 = (0);
var state_1309551__$1 = (function (){var statearr_1309554 = state_1309551;
(statearr_1309554[(8)] = inst_1309505);

(statearr_1309554[(9)] = inst_1309503);

(statearr_1309554[(10)] = inst_1309528);

(statearr_1309554[(11)] = inst_1309506);

(statearr_1309554[(12)] = inst_1309504);

return statearr_1309554;
})();
var statearr_1309555_1309595 = state_1309551__$1;
(statearr_1309555_1309595[(2)] = null);

(statearr_1309555_1309595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (1))){
var state_1309551__$1 = state_1309551;
var statearr_1309556_1309596 = state_1309551__$1;
(statearr_1309556_1309596[(2)] = null);

(statearr_1309556_1309596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (4))){
var inst_1309492 = (state_1309551[(13)]);
var inst_1309492__$1 = (state_1309551[(2)]);
var inst_1309493 = (inst_1309492__$1 == null);
var state_1309551__$1 = (function (){var statearr_1309557 = state_1309551;
(statearr_1309557[(13)] = inst_1309492__$1);

return statearr_1309557;
})();
if(cljs.core.truth_(inst_1309493)){
var statearr_1309558_1309597 = state_1309551__$1;
(statearr_1309558_1309597[(1)] = (5));

} else {
var statearr_1309559_1309598 = state_1309551__$1;
(statearr_1309559_1309598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (15))){
var state_1309551__$1 = state_1309551;
var statearr_1309563_1309599 = state_1309551__$1;
(statearr_1309563_1309599[(2)] = null);

(statearr_1309563_1309599[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (21))){
var state_1309551__$1 = state_1309551;
var statearr_1309564_1309600 = state_1309551__$1;
(statearr_1309564_1309600[(2)] = null);

(statearr_1309564_1309600[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (13))){
var inst_1309505 = (state_1309551[(8)]);
var inst_1309503 = (state_1309551[(9)]);
var inst_1309506 = (state_1309551[(11)]);
var inst_1309504 = (state_1309551[(12)]);
var inst_1309513 = (state_1309551[(2)]);
var inst_1309514 = (inst_1309506 + (1));
var tmp1309560 = inst_1309505;
var tmp1309561 = inst_1309503;
var tmp1309562 = inst_1309504;
var inst_1309503__$1 = tmp1309561;
var inst_1309504__$1 = tmp1309562;
var inst_1309505__$1 = tmp1309560;
var inst_1309506__$1 = inst_1309514;
var state_1309551__$1 = (function (){var statearr_1309565 = state_1309551;
(statearr_1309565[(8)] = inst_1309505__$1);

(statearr_1309565[(9)] = inst_1309503__$1);

(statearr_1309565[(14)] = inst_1309513);

(statearr_1309565[(11)] = inst_1309506__$1);

(statearr_1309565[(12)] = inst_1309504__$1);

return statearr_1309565;
})();
var statearr_1309566_1309601 = state_1309551__$1;
(statearr_1309566_1309601[(2)] = null);

(statearr_1309566_1309601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (22))){
var state_1309551__$1 = state_1309551;
var statearr_1309567_1309602 = state_1309551__$1;
(statearr_1309567_1309602[(2)] = null);

(statearr_1309567_1309602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (6))){
var inst_1309492 = (state_1309551[(13)]);
var inst_1309501 = f.call(null,inst_1309492);
var inst_1309502 = cljs.core.seq.call(null,inst_1309501);
var inst_1309503 = inst_1309502;
var inst_1309504 = null;
var inst_1309505 = (0);
var inst_1309506 = (0);
var state_1309551__$1 = (function (){var statearr_1309568 = state_1309551;
(statearr_1309568[(8)] = inst_1309505);

(statearr_1309568[(9)] = inst_1309503);

(statearr_1309568[(11)] = inst_1309506);

(statearr_1309568[(12)] = inst_1309504);

return statearr_1309568;
})();
var statearr_1309569_1309603 = state_1309551__$1;
(statearr_1309569_1309603[(2)] = null);

(statearr_1309569_1309603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (17))){
var inst_1309517 = (state_1309551[(7)]);
var inst_1309521 = cljs.core.chunk_first.call(null,inst_1309517);
var inst_1309522 = cljs.core.chunk_rest.call(null,inst_1309517);
var inst_1309523 = cljs.core.count.call(null,inst_1309521);
var inst_1309503 = inst_1309522;
var inst_1309504 = inst_1309521;
var inst_1309505 = inst_1309523;
var inst_1309506 = (0);
var state_1309551__$1 = (function (){var statearr_1309570 = state_1309551;
(statearr_1309570[(8)] = inst_1309505);

(statearr_1309570[(9)] = inst_1309503);

(statearr_1309570[(11)] = inst_1309506);

(statearr_1309570[(12)] = inst_1309504);

return statearr_1309570;
})();
var statearr_1309571_1309604 = state_1309551__$1;
(statearr_1309571_1309604[(2)] = null);

(statearr_1309571_1309604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (3))){
var inst_1309549 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309551__$1,inst_1309549);
} else {
if((state_val_1309552 === (12))){
var inst_1309537 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
var statearr_1309572_1309605 = state_1309551__$1;
(statearr_1309572_1309605[(2)] = inst_1309537);

(statearr_1309572_1309605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (2))){
var state_1309551__$1 = state_1309551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309551__$1,(4),in$);
} else {
if((state_val_1309552 === (23))){
var inst_1309545 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
var statearr_1309573_1309606 = state_1309551__$1;
(statearr_1309573_1309606[(2)] = inst_1309545);

(statearr_1309573_1309606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (19))){
var inst_1309532 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
var statearr_1309574_1309607 = state_1309551__$1;
(statearr_1309574_1309607[(2)] = inst_1309532);

(statearr_1309574_1309607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (11))){
var inst_1309503 = (state_1309551[(9)]);
var inst_1309517 = (state_1309551[(7)]);
var inst_1309517__$1 = cljs.core.seq.call(null,inst_1309503);
var state_1309551__$1 = (function (){var statearr_1309575 = state_1309551;
(statearr_1309575[(7)] = inst_1309517__$1);

return statearr_1309575;
})();
if(inst_1309517__$1){
var statearr_1309576_1309608 = state_1309551__$1;
(statearr_1309576_1309608[(1)] = (14));

} else {
var statearr_1309577_1309609 = state_1309551__$1;
(statearr_1309577_1309609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (9))){
var inst_1309539 = (state_1309551[(2)]);
var inst_1309540 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1309551__$1 = (function (){var statearr_1309578 = state_1309551;
(statearr_1309578[(15)] = inst_1309539);

return statearr_1309578;
})();
if(cljs.core.truth_(inst_1309540)){
var statearr_1309579_1309610 = state_1309551__$1;
(statearr_1309579_1309610[(1)] = (21));

} else {
var statearr_1309580_1309611 = state_1309551__$1;
(statearr_1309580_1309611[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (5))){
var inst_1309495 = cljs.core.async.close_BANG_.call(null,out);
var state_1309551__$1 = state_1309551;
var statearr_1309581_1309612 = state_1309551__$1;
(statearr_1309581_1309612[(2)] = inst_1309495);

(statearr_1309581_1309612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (14))){
var inst_1309517 = (state_1309551[(7)]);
var inst_1309519 = cljs.core.chunked_seq_QMARK_.call(null,inst_1309517);
var state_1309551__$1 = state_1309551;
if(inst_1309519){
var statearr_1309582_1309613 = state_1309551__$1;
(statearr_1309582_1309613[(1)] = (17));

} else {
var statearr_1309583_1309614 = state_1309551__$1;
(statearr_1309583_1309614[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (16))){
var inst_1309535 = (state_1309551[(2)]);
var state_1309551__$1 = state_1309551;
var statearr_1309584_1309615 = state_1309551__$1;
(statearr_1309584_1309615[(2)] = inst_1309535);

(statearr_1309584_1309615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309552 === (10))){
var inst_1309506 = (state_1309551[(11)]);
var inst_1309504 = (state_1309551[(12)]);
var inst_1309511 = cljs.core._nth.call(null,inst_1309504,inst_1309506);
var state_1309551__$1 = state_1309551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309551__$1,(13),out,inst_1309511);
} else {
if((state_val_1309552 === (18))){
var inst_1309517 = (state_1309551[(7)]);
var inst_1309526 = cljs.core.first.call(null,inst_1309517);
var state_1309551__$1 = state_1309551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309551__$1,(20),out,inst_1309526);
} else {
if((state_val_1309552 === (8))){
var inst_1309505 = (state_1309551[(8)]);
var inst_1309506 = (state_1309551[(11)]);
var inst_1309508 = (inst_1309506 < inst_1309505);
var inst_1309509 = inst_1309508;
var state_1309551__$1 = state_1309551;
if(cljs.core.truth_(inst_1309509)){
var statearr_1309585_1309616 = state_1309551__$1;
(statearr_1309585_1309616[(1)] = (10));

} else {
var statearr_1309586_1309617 = state_1309551__$1;
(statearr_1309586_1309617[(1)] = (11));

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
var statearr_1309590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309590[(0)] = state_machine__9185__auto__);

(statearr_1309590[(1)] = (1));

return statearr_1309590;
});
var state_machine__9185__auto____1 = (function (state_1309551){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309591){if((e1309591 instanceof Object)){
var ex__9188__auto__ = e1309591;
var statearr_1309592_1309618 = state_1309551;
(statearr_1309592_1309618[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309619 = state_1309551;
state_1309551 = G__1309619;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309551){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1309593 = f__9200__auto__.call(null);
(statearr_1309593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1309593;
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
var c__9199__auto___1309716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309716,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309716,out){
return (function (state_1309691){
var state_val_1309692 = (state_1309691[(1)]);
if((state_val_1309692 === (7))){
var inst_1309686 = (state_1309691[(2)]);
var state_1309691__$1 = state_1309691;
var statearr_1309693_1309717 = state_1309691__$1;
(statearr_1309693_1309717[(2)] = inst_1309686);

(statearr_1309693_1309717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (1))){
var inst_1309668 = null;
var state_1309691__$1 = (function (){var statearr_1309694 = state_1309691;
(statearr_1309694[(7)] = inst_1309668);

return statearr_1309694;
})();
var statearr_1309695_1309718 = state_1309691__$1;
(statearr_1309695_1309718[(2)] = null);

(statearr_1309695_1309718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (4))){
var inst_1309671 = (state_1309691[(8)]);
var inst_1309671__$1 = (state_1309691[(2)]);
var inst_1309672 = (inst_1309671__$1 == null);
var inst_1309673 = cljs.core.not.call(null,inst_1309672);
var state_1309691__$1 = (function (){var statearr_1309696 = state_1309691;
(statearr_1309696[(8)] = inst_1309671__$1);

return statearr_1309696;
})();
if(inst_1309673){
var statearr_1309697_1309719 = state_1309691__$1;
(statearr_1309697_1309719[(1)] = (5));

} else {
var statearr_1309698_1309720 = state_1309691__$1;
(statearr_1309698_1309720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (6))){
var state_1309691__$1 = state_1309691;
var statearr_1309699_1309721 = state_1309691__$1;
(statearr_1309699_1309721[(2)] = null);

(statearr_1309699_1309721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (3))){
var inst_1309688 = (state_1309691[(2)]);
var inst_1309689 = cljs.core.async.close_BANG_.call(null,out);
var state_1309691__$1 = (function (){var statearr_1309700 = state_1309691;
(statearr_1309700[(9)] = inst_1309688);

return statearr_1309700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309691__$1,inst_1309689);
} else {
if((state_val_1309692 === (2))){
var state_1309691__$1 = state_1309691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309691__$1,(4),ch);
} else {
if((state_val_1309692 === (11))){
var inst_1309671 = (state_1309691[(8)]);
var inst_1309680 = (state_1309691[(2)]);
var inst_1309668 = inst_1309671;
var state_1309691__$1 = (function (){var statearr_1309701 = state_1309691;
(statearr_1309701[(7)] = inst_1309668);

(statearr_1309701[(10)] = inst_1309680);

return statearr_1309701;
})();
var statearr_1309702_1309722 = state_1309691__$1;
(statearr_1309702_1309722[(2)] = null);

(statearr_1309702_1309722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (9))){
var inst_1309671 = (state_1309691[(8)]);
var state_1309691__$1 = state_1309691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309691__$1,(11),out,inst_1309671);
} else {
if((state_val_1309692 === (5))){
var inst_1309668 = (state_1309691[(7)]);
var inst_1309671 = (state_1309691[(8)]);
var inst_1309675 = cljs.core._EQ_.call(null,inst_1309671,inst_1309668);
var state_1309691__$1 = state_1309691;
if(inst_1309675){
var statearr_1309704_1309723 = state_1309691__$1;
(statearr_1309704_1309723[(1)] = (8));

} else {
var statearr_1309705_1309724 = state_1309691__$1;
(statearr_1309705_1309724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (10))){
var inst_1309683 = (state_1309691[(2)]);
var state_1309691__$1 = state_1309691;
var statearr_1309706_1309725 = state_1309691__$1;
(statearr_1309706_1309725[(2)] = inst_1309683);

(statearr_1309706_1309725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309692 === (8))){
var inst_1309668 = (state_1309691[(7)]);
var tmp1309703 = inst_1309668;
var inst_1309668__$1 = tmp1309703;
var state_1309691__$1 = (function (){var statearr_1309707 = state_1309691;
(statearr_1309707[(7)] = inst_1309668__$1);

return statearr_1309707;
})();
var statearr_1309708_1309726 = state_1309691__$1;
(statearr_1309708_1309726[(2)] = null);

(statearr_1309708_1309726[(1)] = (2));


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
});})(c__9199__auto___1309716,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1309716,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309712[(0)] = state_machine__9185__auto__);

(statearr_1309712[(1)] = (1));

return statearr_1309712;
});
var state_machine__9185__auto____1 = (function (state_1309691){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309713){if((e1309713 instanceof Object)){
var ex__9188__auto__ = e1309713;
var statearr_1309714_1309727 = state_1309691;
(statearr_1309714_1309727[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309728 = state_1309691;
state_1309691 = G__1309728;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309691){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309716,out))
})();
var state__9201__auto__ = (function (){var statearr_1309715 = f__9200__auto__.call(null);
(statearr_1309715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309716);

return statearr_1309715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309716,out))
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
var c__9199__auto___1309863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1309863,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1309863,out){
return (function (state_1309833){
var state_val_1309834 = (state_1309833[(1)]);
if((state_val_1309834 === (7))){
var inst_1309829 = (state_1309833[(2)]);
var state_1309833__$1 = state_1309833;
var statearr_1309835_1309864 = state_1309833__$1;
(statearr_1309835_1309864[(2)] = inst_1309829);

(statearr_1309835_1309864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (1))){
var inst_1309796 = (new Array(n));
var inst_1309797 = inst_1309796;
var inst_1309798 = (0);
var state_1309833__$1 = (function (){var statearr_1309836 = state_1309833;
(statearr_1309836[(7)] = inst_1309798);

(statearr_1309836[(8)] = inst_1309797);

return statearr_1309836;
})();
var statearr_1309837_1309865 = state_1309833__$1;
(statearr_1309837_1309865[(2)] = null);

(statearr_1309837_1309865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (4))){
var inst_1309801 = (state_1309833[(9)]);
var inst_1309801__$1 = (state_1309833[(2)]);
var inst_1309802 = (inst_1309801__$1 == null);
var inst_1309803 = cljs.core.not.call(null,inst_1309802);
var state_1309833__$1 = (function (){var statearr_1309838 = state_1309833;
(statearr_1309838[(9)] = inst_1309801__$1);

return statearr_1309838;
})();
if(inst_1309803){
var statearr_1309839_1309866 = state_1309833__$1;
(statearr_1309839_1309866[(1)] = (5));

} else {
var statearr_1309840_1309867 = state_1309833__$1;
(statearr_1309840_1309867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (15))){
var inst_1309823 = (state_1309833[(2)]);
var state_1309833__$1 = state_1309833;
var statearr_1309841_1309868 = state_1309833__$1;
(statearr_1309841_1309868[(2)] = inst_1309823);

(statearr_1309841_1309868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (13))){
var state_1309833__$1 = state_1309833;
var statearr_1309842_1309869 = state_1309833__$1;
(statearr_1309842_1309869[(2)] = null);

(statearr_1309842_1309869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (6))){
var inst_1309798 = (state_1309833[(7)]);
var inst_1309819 = (inst_1309798 > (0));
var state_1309833__$1 = state_1309833;
if(cljs.core.truth_(inst_1309819)){
var statearr_1309843_1309870 = state_1309833__$1;
(statearr_1309843_1309870[(1)] = (12));

} else {
var statearr_1309844_1309871 = state_1309833__$1;
(statearr_1309844_1309871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (3))){
var inst_1309831 = (state_1309833[(2)]);
var state_1309833__$1 = state_1309833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309833__$1,inst_1309831);
} else {
if((state_val_1309834 === (12))){
var inst_1309797 = (state_1309833[(8)]);
var inst_1309821 = cljs.core.vec.call(null,inst_1309797);
var state_1309833__$1 = state_1309833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309833__$1,(15),out,inst_1309821);
} else {
if((state_val_1309834 === (2))){
var state_1309833__$1 = state_1309833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309833__$1,(4),ch);
} else {
if((state_val_1309834 === (11))){
var inst_1309813 = (state_1309833[(2)]);
var inst_1309814 = (new Array(n));
var inst_1309797 = inst_1309814;
var inst_1309798 = (0);
var state_1309833__$1 = (function (){var statearr_1309845 = state_1309833;
(statearr_1309845[(7)] = inst_1309798);

(statearr_1309845[(10)] = inst_1309813);

(statearr_1309845[(8)] = inst_1309797);

return statearr_1309845;
})();
var statearr_1309846_1309872 = state_1309833__$1;
(statearr_1309846_1309872[(2)] = null);

(statearr_1309846_1309872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (9))){
var inst_1309797 = (state_1309833[(8)]);
var inst_1309811 = cljs.core.vec.call(null,inst_1309797);
var state_1309833__$1 = state_1309833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309833__$1,(11),out,inst_1309811);
} else {
if((state_val_1309834 === (5))){
var inst_1309798 = (state_1309833[(7)]);
var inst_1309806 = (state_1309833[(11)]);
var inst_1309801 = (state_1309833[(9)]);
var inst_1309797 = (state_1309833[(8)]);
var inst_1309805 = (inst_1309797[inst_1309798] = inst_1309801);
var inst_1309806__$1 = (inst_1309798 + (1));
var inst_1309807 = (inst_1309806__$1 < n);
var state_1309833__$1 = (function (){var statearr_1309847 = state_1309833;
(statearr_1309847[(11)] = inst_1309806__$1);

(statearr_1309847[(12)] = inst_1309805);

return statearr_1309847;
})();
if(cljs.core.truth_(inst_1309807)){
var statearr_1309848_1309873 = state_1309833__$1;
(statearr_1309848_1309873[(1)] = (8));

} else {
var statearr_1309849_1309874 = state_1309833__$1;
(statearr_1309849_1309874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (14))){
var inst_1309826 = (state_1309833[(2)]);
var inst_1309827 = cljs.core.async.close_BANG_.call(null,out);
var state_1309833__$1 = (function (){var statearr_1309851 = state_1309833;
(statearr_1309851[(13)] = inst_1309826);

return statearr_1309851;
})();
var statearr_1309852_1309875 = state_1309833__$1;
(statearr_1309852_1309875[(2)] = inst_1309827);

(statearr_1309852_1309875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (10))){
var inst_1309817 = (state_1309833[(2)]);
var state_1309833__$1 = state_1309833;
var statearr_1309853_1309876 = state_1309833__$1;
(statearr_1309853_1309876[(2)] = inst_1309817);

(statearr_1309853_1309876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309834 === (8))){
var inst_1309806 = (state_1309833[(11)]);
var inst_1309797 = (state_1309833[(8)]);
var tmp1309850 = inst_1309797;
var inst_1309797__$1 = tmp1309850;
var inst_1309798 = inst_1309806;
var state_1309833__$1 = (function (){var statearr_1309854 = state_1309833;
(statearr_1309854[(7)] = inst_1309798);

(statearr_1309854[(8)] = inst_1309797__$1);

return statearr_1309854;
})();
var statearr_1309855_1309877 = state_1309833__$1;
(statearr_1309855_1309877[(2)] = null);

(statearr_1309855_1309877[(1)] = (2));


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
});})(c__9199__auto___1309863,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1309863,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1309859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1309859[(0)] = state_machine__9185__auto__);

(statearr_1309859[(1)] = (1));

return statearr_1309859;
});
var state_machine__9185__auto____1 = (function (state_1309833){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1309860){if((e1309860 instanceof Object)){
var ex__9188__auto__ = e1309860;
var statearr_1309861_1309878 = state_1309833;
(statearr_1309861_1309878[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1309860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1309879 = state_1309833;
state_1309833 = G__1309879;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309833){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1309863,out))
})();
var state__9201__auto__ = (function (){var statearr_1309862 = f__9200__auto__.call(null);
(statearr_1309862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1309863);

return statearr_1309862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1309863,out))
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
var c__9199__auto___1310022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1310022,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1310022,out){
return (function (state_1309992){
var state_val_1309993 = (state_1309992[(1)]);
if((state_val_1309993 === (7))){
var inst_1309988 = (state_1309992[(2)]);
var state_1309992__$1 = state_1309992;
var statearr_1309994_1310023 = state_1309992__$1;
(statearr_1309994_1310023[(2)] = inst_1309988);

(statearr_1309994_1310023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (1))){
var inst_1309951 = [];
var inst_1309952 = inst_1309951;
var inst_1309953 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1309992__$1 = (function (){var statearr_1309995 = state_1309992;
(statearr_1309995[(7)] = inst_1309953);

(statearr_1309995[(8)] = inst_1309952);

return statearr_1309995;
})();
var statearr_1309996_1310024 = state_1309992__$1;
(statearr_1309996_1310024[(2)] = null);

(statearr_1309996_1310024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (4))){
var inst_1309956 = (state_1309992[(9)]);
var inst_1309956__$1 = (state_1309992[(2)]);
var inst_1309957 = (inst_1309956__$1 == null);
var inst_1309958 = cljs.core.not.call(null,inst_1309957);
var state_1309992__$1 = (function (){var statearr_1309997 = state_1309992;
(statearr_1309997[(9)] = inst_1309956__$1);

return statearr_1309997;
})();
if(inst_1309958){
var statearr_1309998_1310025 = state_1309992__$1;
(statearr_1309998_1310025[(1)] = (5));

} else {
var statearr_1309999_1310026 = state_1309992__$1;
(statearr_1309999_1310026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (15))){
var inst_1309982 = (state_1309992[(2)]);
var state_1309992__$1 = state_1309992;
var statearr_1310000_1310027 = state_1309992__$1;
(statearr_1310000_1310027[(2)] = inst_1309982);

(statearr_1310000_1310027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (13))){
var state_1309992__$1 = state_1309992;
var statearr_1310001_1310028 = state_1309992__$1;
(statearr_1310001_1310028[(2)] = null);

(statearr_1310001_1310028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (6))){
var inst_1309952 = (state_1309992[(8)]);
var inst_1309977 = inst_1309952.length;
var inst_1309978 = (inst_1309977 > (0));
var state_1309992__$1 = state_1309992;
if(cljs.core.truth_(inst_1309978)){
var statearr_1310002_1310029 = state_1309992__$1;
(statearr_1310002_1310029[(1)] = (12));

} else {
var statearr_1310003_1310030 = state_1309992__$1;
(statearr_1310003_1310030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (3))){
var inst_1309990 = (state_1309992[(2)]);
var state_1309992__$1 = state_1309992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1309992__$1,inst_1309990);
} else {
if((state_val_1309993 === (12))){
var inst_1309952 = (state_1309992[(8)]);
var inst_1309980 = cljs.core.vec.call(null,inst_1309952);
var state_1309992__$1 = state_1309992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309992__$1,(15),out,inst_1309980);
} else {
if((state_val_1309993 === (2))){
var state_1309992__$1 = state_1309992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1309992__$1,(4),ch);
} else {
if((state_val_1309993 === (11))){
var inst_1309960 = (state_1309992[(10)]);
var inst_1309956 = (state_1309992[(9)]);
var inst_1309970 = (state_1309992[(2)]);
var inst_1309971 = [];
var inst_1309972 = inst_1309971.push(inst_1309956);
var inst_1309952 = inst_1309971;
var inst_1309953 = inst_1309960;
var state_1309992__$1 = (function (){var statearr_1310004 = state_1309992;
(statearr_1310004[(7)] = inst_1309953);

(statearr_1310004[(8)] = inst_1309952);

(statearr_1310004[(11)] = inst_1309970);

(statearr_1310004[(12)] = inst_1309972);

return statearr_1310004;
})();
var statearr_1310005_1310031 = state_1309992__$1;
(statearr_1310005_1310031[(2)] = null);

(statearr_1310005_1310031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (9))){
var inst_1309952 = (state_1309992[(8)]);
var inst_1309968 = cljs.core.vec.call(null,inst_1309952);
var state_1309992__$1 = state_1309992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1309992__$1,(11),out,inst_1309968);
} else {
if((state_val_1309993 === (5))){
var inst_1309953 = (state_1309992[(7)]);
var inst_1309960 = (state_1309992[(10)]);
var inst_1309956 = (state_1309992[(9)]);
var inst_1309960__$1 = f.call(null,inst_1309956);
var inst_1309961 = cljs.core._EQ_.call(null,inst_1309960__$1,inst_1309953);
var inst_1309962 = cljs.core.keyword_identical_QMARK_.call(null,inst_1309953,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1309963 = (inst_1309961) || (inst_1309962);
var state_1309992__$1 = (function (){var statearr_1310006 = state_1309992;
(statearr_1310006[(10)] = inst_1309960__$1);

return statearr_1310006;
})();
if(cljs.core.truth_(inst_1309963)){
var statearr_1310007_1310032 = state_1309992__$1;
(statearr_1310007_1310032[(1)] = (8));

} else {
var statearr_1310008_1310033 = state_1309992__$1;
(statearr_1310008_1310033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (14))){
var inst_1309985 = (state_1309992[(2)]);
var inst_1309986 = cljs.core.async.close_BANG_.call(null,out);
var state_1309992__$1 = (function (){var statearr_1310010 = state_1309992;
(statearr_1310010[(13)] = inst_1309985);

return statearr_1310010;
})();
var statearr_1310011_1310034 = state_1309992__$1;
(statearr_1310011_1310034[(2)] = inst_1309986);

(statearr_1310011_1310034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (10))){
var inst_1309975 = (state_1309992[(2)]);
var state_1309992__$1 = state_1309992;
var statearr_1310012_1310035 = state_1309992__$1;
(statearr_1310012_1310035[(2)] = inst_1309975);

(statearr_1310012_1310035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1309993 === (8))){
var inst_1309960 = (state_1309992[(10)]);
var inst_1309956 = (state_1309992[(9)]);
var inst_1309952 = (state_1309992[(8)]);
var inst_1309965 = inst_1309952.push(inst_1309956);
var tmp1310009 = inst_1309952;
var inst_1309952__$1 = tmp1310009;
var inst_1309953 = inst_1309960;
var state_1309992__$1 = (function (){var statearr_1310013 = state_1309992;
(statearr_1310013[(14)] = inst_1309965);

(statearr_1310013[(7)] = inst_1309953);

(statearr_1310013[(8)] = inst_1309952__$1);

return statearr_1310013;
})();
var statearr_1310014_1310036 = state_1309992__$1;
(statearr_1310014_1310036[(2)] = null);

(statearr_1310014_1310036[(1)] = (2));


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
});})(c__9199__auto___1310022,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1310022,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1310018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1310018[(0)] = state_machine__9185__auto__);

(statearr_1310018[(1)] = (1));

return statearr_1310018;
});
var state_machine__9185__auto____1 = (function (state_1309992){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1309992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1310019){if((e1310019 instanceof Object)){
var ex__9188__auto__ = e1310019;
var statearr_1310020_1310037 = state_1309992;
(statearr_1310020_1310037[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1309992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1310019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1310038 = state_1309992;
state_1309992 = G__1310038;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1309992){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1309992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1310022,out))
})();
var state__9201__auto__ = (function (){var statearr_1310021 = f__9200__auto__.call(null);
(statearr_1310021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1310022);

return statearr_1310021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1310022,out))
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