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
if(typeof cljs.core.async.t14998 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14998 = (function (f,fn_handler,meta14999){
this.f = f;
this.fn_handler = fn_handler;
this.meta14999 = meta14999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15000){
var self__ = this;
var _15000__$1 = this;
return self__.meta14999;
});

cljs.core.async.t14998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15000,meta14999__$1){
var self__ = this;
var _15000__$1 = this;
return (new cljs.core.async.t14998(self__.f,self__.fn_handler,meta14999__$1));
});

cljs.core.async.t14998.cljs$lang$type = true;

cljs.core.async.t14998.cljs$lang$ctorStr = "cljs.core.async/t14998";

cljs.core.async.t14998.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14998");
});

cljs.core.async.__GT_t14998 = (function __GT_t14998(f__$1,fn_handler__$1,meta14999){
return (new cljs.core.async.t14998(f__$1,fn_handler__$1,meta14999));
});

}

return (new cljs.core.async.t14998(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__15002 = buff;
if(G__15002){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__15002.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15002);
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
var val_15003 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15003);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15003,ret){
return (function (){
return fn1.call(null,val_15003);
});})(val_15003,ret))
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
var n__4509__auto___15004 = n;
var x_15005 = (0);
while(true){
if((x_15005 < n__4509__auto___15004)){
(a[x_15005] = (0));

var G__15006 = (x_15005 + (1));
x_15005 = G__15006;
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

var G__15007 = (i + (1));
i = G__15007;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15011 = (function (flag,alt_flag,meta15012){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15012 = meta15012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15013){
var self__ = this;
var _15013__$1 = this;
return self__.meta15012;
});})(flag))
;

cljs.core.async.t15011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15013,meta15012__$1){
var self__ = this;
var _15013__$1 = this;
return (new cljs.core.async.t15011(self__.flag,self__.alt_flag,meta15012__$1));
});})(flag))
;

cljs.core.async.t15011.cljs$lang$type = true;

cljs.core.async.t15011.cljs$lang$ctorStr = "cljs.core.async/t15011";

cljs.core.async.t15011.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t15011");
});})(flag))
;

cljs.core.async.__GT_t15011 = ((function (flag){
return (function __GT_t15011(flag__$1,alt_flag__$1,meta15012){
return (new cljs.core.async.t15011(flag__$1,alt_flag__$1,meta15012));
});})(flag))
;

}

return (new cljs.core.async.t15011(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15017 = (function (cb,flag,alt_handler,meta15018){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15018 = meta15018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15017.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15019){
var self__ = this;
var _15019__$1 = this;
return self__.meta15018;
});

cljs.core.async.t15017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15019,meta15018__$1){
var self__ = this;
var _15019__$1 = this;
return (new cljs.core.async.t15017(self__.cb,self__.flag,self__.alt_handler,meta15018__$1));
});

cljs.core.async.t15017.cljs$lang$type = true;

cljs.core.async.t15017.cljs$lang$ctorStr = "cljs.core.async/t15017";

cljs.core.async.t15017.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t15017");
});

cljs.core.async.__GT_t15017 = (function __GT_t15017(cb__$1,flag__$1,alt_handler__$1,meta15018){
return (new cljs.core.async.t15017(cb__$1,flag__$1,alt_handler__$1,meta15018));
});

}

return (new cljs.core.async.t15017(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__15020_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15020_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15021_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15021_SHARP_,port], null));
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
var G__15022 = (i + (1));
i = G__15022;
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
var alts_BANG___delegate = function (ports,p__15023){
var map__15025 = p__15023;
var map__15025__$1 = ((cljs.core.seq_QMARK_.call(null,map__15025))?cljs.core.apply.call(null,cljs.core.hash_map,map__15025):map__15025);
var opts = map__15025__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15023 = null;
if (arguments.length > 1) {
  p__15023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__15023);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15026){
var ports = cljs.core.first(arglist__15026);
var p__15023 = cljs.core.rest(arglist__15026);
return alts_BANG___delegate(ports,p__15023);
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
var c__7304__auto___15121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15121){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15121){
return (function (state_15097){
var state_val_15098 = (state_15097[(1)]);
if((state_val_15098 === (7))){
var inst_15093 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15099_15122 = state_15097__$1;
(statearr_15099_15122[(2)] = inst_15093);

(statearr_15099_15122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (1))){
var state_15097__$1 = state_15097;
var statearr_15100_15123 = state_15097__$1;
(statearr_15100_15123[(2)] = null);

(statearr_15100_15123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (4))){
var inst_15076 = (state_15097[(7)]);
var inst_15076__$1 = (state_15097[(2)]);
var inst_15077 = (inst_15076__$1 == null);
var state_15097__$1 = (function (){var statearr_15101 = state_15097;
(statearr_15101[(7)] = inst_15076__$1);

return statearr_15101;
})();
if(cljs.core.truth_(inst_15077)){
var statearr_15102_15124 = state_15097__$1;
(statearr_15102_15124[(1)] = (5));

} else {
var statearr_15103_15125 = state_15097__$1;
(statearr_15103_15125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (13))){
var state_15097__$1 = state_15097;
var statearr_15104_15126 = state_15097__$1;
(statearr_15104_15126[(2)] = null);

(statearr_15104_15126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (6))){
var inst_15076 = (state_15097[(7)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15097__$1,(11),to,inst_15076);
} else {
if((state_val_15098 === (3))){
var inst_15095 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15097__$1,inst_15095);
} else {
if((state_val_15098 === (12))){
var state_15097__$1 = state_15097;
var statearr_15105_15127 = state_15097__$1;
(statearr_15105_15127[(2)] = null);

(statearr_15105_15127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (2))){
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15097__$1,(4),from);
} else {
if((state_val_15098 === (11))){
var inst_15086 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
if(cljs.core.truth_(inst_15086)){
var statearr_15106_15128 = state_15097__$1;
(statearr_15106_15128[(1)] = (12));

} else {
var statearr_15107_15129 = state_15097__$1;
(statearr_15107_15129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (9))){
var state_15097__$1 = state_15097;
var statearr_15108_15130 = state_15097__$1;
(statearr_15108_15130[(2)] = null);

(statearr_15108_15130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (5))){
var state_15097__$1 = state_15097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15109_15131 = state_15097__$1;
(statearr_15109_15131[(1)] = (8));

} else {
var statearr_15110_15132 = state_15097__$1;
(statearr_15110_15132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (14))){
var inst_15091 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15111_15133 = state_15097__$1;
(statearr_15111_15133[(2)] = inst_15091);

(statearr_15111_15133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (10))){
var inst_15083 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15112_15134 = state_15097__$1;
(statearr_15112_15134[(2)] = inst_15083);

(statearr_15112_15134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (8))){
var inst_15080 = cljs.core.async.close_BANG_.call(null,to);
var state_15097__$1 = state_15097;
var statearr_15113_15135 = state_15097__$1;
(statearr_15113_15135[(2)] = inst_15080);

(statearr_15113_15135[(1)] = (10));


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
});})(c__7304__auto___15121))
;
return ((function (switch__7248__auto__,c__7304__auto___15121){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15117 = [null,null,null,null,null,null,null,null];
(statearr_15117[(0)] = state_machine__7249__auto__);

(statearr_15117[(1)] = (1));

return statearr_15117;
});
var state_machine__7249__auto____1 = (function (state_15097){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15118){if((e15118 instanceof Object)){
var ex__7252__auto__ = e15118;
var statearr_15119_15136 = state_15097;
(statearr_15119_15136[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15137 = state_15097;
state_15097 = G__15137;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15121))
})();
var state__7306__auto__ = (function (){var statearr_15120 = f__7305__auto__.call(null);
(statearr_15120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15121);

return statearr_15120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15121))
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
return (function (p__15321){
var vec__15322 = p__15321;
var v = cljs.core.nth.call(null,vec__15322,(0),null);
var p = cljs.core.nth.call(null,vec__15322,(1),null);
var job = vec__15322;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7304__auto___15504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results){
return (function (state_15327){
var state_val_15328 = (state_15327[(1)]);
if((state_val_15328 === (2))){
var inst_15324 = (state_15327[(2)]);
var inst_15325 = cljs.core.async.close_BANG_.call(null,res);
var state_15327__$1 = (function (){var statearr_15329 = state_15327;
(statearr_15329[(7)] = inst_15324);

return statearr_15329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15327__$1,inst_15325);
} else {
if((state_val_15328 === (1))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15327__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15333 = [null,null,null,null,null,null,null,null];
(statearr_15333[(0)] = state_machine__7249__auto__);

(statearr_15333[(1)] = (1));

return statearr_15333;
});
var state_machine__7249__auto____1 = (function (state_15327){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15334){if((e15334 instanceof Object)){
var ex__7252__auto__ = e15334;
var statearr_15335_15505 = state_15327;
(statearr_15335_15505[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15506 = state_15327;
state_15327 = G__15506;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results))
})();
var state__7306__auto__ = (function (){var statearr_15336 = f__7305__auto__.call(null);
(statearr_15336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15504);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15504,res,vec__15322,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15337){
var vec__15338 = p__15337;
var v = cljs.core.nth.call(null,vec__15338,(0),null);
var p = cljs.core.nth.call(null,vec__15338,(1),null);
var job = vec__15338;
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
var n__4509__auto___15507 = n;
var __15508 = (0);
while(true){
if((__15508 < n__4509__auto___15507)){
var G__15339_15509 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15339_15509) {
case "async":
var c__7304__auto___15511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15508,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15508,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function (state_15352){
var state_val_15353 = (state_15352[(1)]);
if((state_val_15353 === (7))){
var inst_15348 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15354_15512 = state_15352__$1;
(statearr_15354_15512[(2)] = inst_15348);

(statearr_15354_15512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (6))){
var state_15352__$1 = state_15352;
var statearr_15355_15513 = state_15352__$1;
(statearr_15355_15513[(2)] = null);

(statearr_15355_15513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (5))){
var state_15352__$1 = state_15352;
var statearr_15356_15514 = state_15352__$1;
(statearr_15356_15514[(2)] = null);

(statearr_15356_15514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (4))){
var inst_15342 = (state_15352[(2)]);
var inst_15343 = async.call(null,inst_15342);
var state_15352__$1 = state_15352;
if(cljs.core.truth_(inst_15343)){
var statearr_15357_15515 = state_15352__$1;
(statearr_15357_15515[(1)] = (5));

} else {
var statearr_15358_15516 = state_15352__$1;
(statearr_15358_15516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (3))){
var inst_15350 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15352__$1,inst_15350);
} else {
if((state_val_15353 === (2))){
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15352__$1,(4),jobs);
} else {
if((state_val_15353 === (1))){
var state_15352__$1 = state_15352;
var statearr_15359_15517 = state_15352__$1;
(statearr_15359_15517[(2)] = null);

(statearr_15359_15517[(1)] = (2));


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
});})(__15508,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
;
return ((function (__15508,switch__7248__auto__,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15363 = [null,null,null,null,null,null,null];
(statearr_15363[(0)] = state_machine__7249__auto__);

(statearr_15363[(1)] = (1));

return statearr_15363;
});
var state_machine__7249__auto____1 = (function (state_15352){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15364){if((e15364 instanceof Object)){
var ex__7252__auto__ = e15364;
var statearr_15365_15518 = state_15352;
(statearr_15365_15518[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15519 = state_15352;
state_15352 = G__15519;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15508,switch__7248__auto__,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15366 = f__7305__auto__.call(null);
(statearr_15366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15511);

return statearr_15366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15508,c__7304__auto___15511,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
);


break;
case "compute":
var c__7304__auto___15520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15508,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15508,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function (state_15379){
var state_val_15380 = (state_15379[(1)]);
if((state_val_15380 === (7))){
var inst_15375 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
var statearr_15381_15521 = state_15379__$1;
(statearr_15381_15521[(2)] = inst_15375);

(statearr_15381_15521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (6))){
var state_15379__$1 = state_15379;
var statearr_15382_15522 = state_15379__$1;
(statearr_15382_15522[(2)] = null);

(statearr_15382_15522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (5))){
var state_15379__$1 = state_15379;
var statearr_15383_15523 = state_15379__$1;
(statearr_15383_15523[(2)] = null);

(statearr_15383_15523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (4))){
var inst_15369 = (state_15379[(2)]);
var inst_15370 = process.call(null,inst_15369);
var state_15379__$1 = state_15379;
if(cljs.core.truth_(inst_15370)){
var statearr_15384_15524 = state_15379__$1;
(statearr_15384_15524[(1)] = (5));

} else {
var statearr_15385_15525 = state_15379__$1;
(statearr_15385_15525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (3))){
var inst_15377 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15379__$1,inst_15377);
} else {
if((state_val_15380 === (2))){
var state_15379__$1 = state_15379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15379__$1,(4),jobs);
} else {
if((state_val_15380 === (1))){
var state_15379__$1 = state_15379;
var statearr_15386_15526 = state_15379__$1;
(statearr_15386_15526[(2)] = null);

(statearr_15386_15526[(1)] = (2));


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
});})(__15508,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
;
return ((function (__15508,switch__7248__auto__,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15390 = [null,null,null,null,null,null,null];
(statearr_15390[(0)] = state_machine__7249__auto__);

(statearr_15390[(1)] = (1));

return statearr_15390;
});
var state_machine__7249__auto____1 = (function (state_15379){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15391){if((e15391 instanceof Object)){
var ex__7252__auto__ = e15391;
var statearr_15392_15527 = state_15379;
(statearr_15392_15527[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15528 = state_15379;
state_15379 = G__15528;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15508,switch__7248__auto__,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15393 = f__7305__auto__.call(null);
(statearr_15393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15520);

return statearr_15393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15508,c__7304__auto___15520,G__15339_15509,n__4509__auto___15507,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15529 = (__15508 + (1));
__15508 = G__15529;
continue;
} else {
}
break;
}

var c__7304__auto___15530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15530,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15530,jobs,results,process,async){
return (function (state_15415){
var state_val_15416 = (state_15415[(1)]);
if((state_val_15416 === (9))){
var inst_15408 = (state_15415[(2)]);
var state_15415__$1 = (function (){var statearr_15417 = state_15415;
(statearr_15417[(7)] = inst_15408);

return statearr_15417;
})();
var statearr_15418_15531 = state_15415__$1;
(statearr_15418_15531[(2)] = null);

(statearr_15418_15531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15416 === (8))){
var inst_15401 = (state_15415[(8)]);
var inst_15406 = (state_15415[(2)]);
var state_15415__$1 = (function (){var statearr_15419 = state_15415;
(statearr_15419[(9)] = inst_15406);

return statearr_15419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15415__$1,(9),results,inst_15401);
} else {
if((state_val_15416 === (7))){
var inst_15411 = (state_15415[(2)]);
var state_15415__$1 = state_15415;
var statearr_15420_15532 = state_15415__$1;
(statearr_15420_15532[(2)] = inst_15411);

(statearr_15420_15532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15416 === (6))){
var inst_15396 = (state_15415[(10)]);
var inst_15401 = (state_15415[(8)]);
var inst_15401__$1 = cljs.core.async.chan.call(null,(1));
var inst_15402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15403 = [inst_15396,inst_15401__$1];
var inst_15404 = (new cljs.core.PersistentVector(null,2,(5),inst_15402,inst_15403,null));
var state_15415__$1 = (function (){var statearr_15421 = state_15415;
(statearr_15421[(8)] = inst_15401__$1);

return statearr_15421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15415__$1,(8),jobs,inst_15404);
} else {
if((state_val_15416 === (5))){
var inst_15399 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15415__$1 = state_15415;
var statearr_15422_15533 = state_15415__$1;
(statearr_15422_15533[(2)] = inst_15399);

(statearr_15422_15533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15416 === (4))){
var inst_15396 = (state_15415[(10)]);
var inst_15396__$1 = (state_15415[(2)]);
var inst_15397 = (inst_15396__$1 == null);
var state_15415__$1 = (function (){var statearr_15423 = state_15415;
(statearr_15423[(10)] = inst_15396__$1);

return statearr_15423;
})();
if(cljs.core.truth_(inst_15397)){
var statearr_15424_15534 = state_15415__$1;
(statearr_15424_15534[(1)] = (5));

} else {
var statearr_15425_15535 = state_15415__$1;
(statearr_15425_15535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15416 === (3))){
var inst_15413 = (state_15415[(2)]);
var state_15415__$1 = state_15415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15415__$1,inst_15413);
} else {
if((state_val_15416 === (2))){
var state_15415__$1 = state_15415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15415__$1,(4),from);
} else {
if((state_val_15416 === (1))){
var state_15415__$1 = state_15415;
var statearr_15426_15536 = state_15415__$1;
(statearr_15426_15536[(2)] = null);

(statearr_15426_15536[(1)] = (2));


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
});})(c__7304__auto___15530,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7304__auto___15530,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15430[(0)] = state_machine__7249__auto__);

(statearr_15430[(1)] = (1));

return statearr_15430;
});
var state_machine__7249__auto____1 = (function (state_15415){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15431){if((e15431 instanceof Object)){
var ex__7252__auto__ = e15431;
var statearr_15432_15537 = state_15415;
(statearr_15432_15537[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15538 = state_15415;
state_15415 = G__15538;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15415){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15530,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15433 = f__7305__auto__.call(null);
(statearr_15433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15530);

return statearr_15433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15530,jobs,results,process,async))
);


var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,jobs,results,process,async){
return (function (state_15471){
var state_val_15472 = (state_15471[(1)]);
if((state_val_15472 === (7))){
var inst_15467 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15473_15539 = state_15471__$1;
(statearr_15473_15539[(2)] = inst_15467);

(statearr_15473_15539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (20))){
var state_15471__$1 = state_15471;
var statearr_15474_15540 = state_15471__$1;
(statearr_15474_15540[(2)] = null);

(statearr_15474_15540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (1))){
var state_15471__$1 = state_15471;
var statearr_15475_15541 = state_15471__$1;
(statearr_15475_15541[(2)] = null);

(statearr_15475_15541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (4))){
var inst_15436 = (state_15471[(7)]);
var inst_15436__$1 = (state_15471[(2)]);
var inst_15437 = (inst_15436__$1 == null);
var state_15471__$1 = (function (){var statearr_15476 = state_15471;
(statearr_15476[(7)] = inst_15436__$1);

return statearr_15476;
})();
if(cljs.core.truth_(inst_15437)){
var statearr_15477_15542 = state_15471__$1;
(statearr_15477_15542[(1)] = (5));

} else {
var statearr_15478_15543 = state_15471__$1;
(statearr_15478_15543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (15))){
var inst_15449 = (state_15471[(8)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15471__$1,(18),to,inst_15449);
} else {
if((state_val_15472 === (21))){
var inst_15462 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15479_15544 = state_15471__$1;
(statearr_15479_15544[(2)] = inst_15462);

(statearr_15479_15544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (13))){
var inst_15464 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15480 = state_15471;
(statearr_15480[(9)] = inst_15464);

return statearr_15480;
})();
var statearr_15481_15545 = state_15471__$1;
(statearr_15481_15545[(2)] = null);

(statearr_15481_15545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (6))){
var inst_15436 = (state_15471[(7)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15471__$1,(11),inst_15436);
} else {
if((state_val_15472 === (17))){
var inst_15457 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
if(cljs.core.truth_(inst_15457)){
var statearr_15482_15546 = state_15471__$1;
(statearr_15482_15546[(1)] = (19));

} else {
var statearr_15483_15547 = state_15471__$1;
(statearr_15483_15547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (3))){
var inst_15469 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15471__$1,inst_15469);
} else {
if((state_val_15472 === (12))){
var inst_15446 = (state_15471[(10)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15471__$1,(14),inst_15446);
} else {
if((state_val_15472 === (2))){
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15471__$1,(4),results);
} else {
if((state_val_15472 === (19))){
var state_15471__$1 = state_15471;
var statearr_15484_15548 = state_15471__$1;
(statearr_15484_15548[(2)] = null);

(statearr_15484_15548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (11))){
var inst_15446 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15485 = state_15471;
(statearr_15485[(10)] = inst_15446);

return statearr_15485;
})();
var statearr_15486_15549 = state_15471__$1;
(statearr_15486_15549[(2)] = null);

(statearr_15486_15549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (9))){
var state_15471__$1 = state_15471;
var statearr_15487_15550 = state_15471__$1;
(statearr_15487_15550[(2)] = null);

(statearr_15487_15550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (5))){
var state_15471__$1 = state_15471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15488_15551 = state_15471__$1;
(statearr_15488_15551[(1)] = (8));

} else {
var statearr_15489_15552 = state_15471__$1;
(statearr_15489_15552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (14))){
var inst_15451 = (state_15471[(11)]);
var inst_15449 = (state_15471[(8)]);
var inst_15449__$1 = (state_15471[(2)]);
var inst_15450 = (inst_15449__$1 == null);
var inst_15451__$1 = cljs.core.not.call(null,inst_15450);
var state_15471__$1 = (function (){var statearr_15490 = state_15471;
(statearr_15490[(11)] = inst_15451__$1);

(statearr_15490[(8)] = inst_15449__$1);

return statearr_15490;
})();
if(inst_15451__$1){
var statearr_15491_15553 = state_15471__$1;
(statearr_15491_15553[(1)] = (15));

} else {
var statearr_15492_15554 = state_15471__$1;
(statearr_15492_15554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (16))){
var inst_15451 = (state_15471[(11)]);
var state_15471__$1 = state_15471;
var statearr_15493_15555 = state_15471__$1;
(statearr_15493_15555[(2)] = inst_15451);

(statearr_15493_15555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (10))){
var inst_15443 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15494_15556 = state_15471__$1;
(statearr_15494_15556[(2)] = inst_15443);

(statearr_15494_15556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (18))){
var inst_15454 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15495_15557 = state_15471__$1;
(statearr_15495_15557[(2)] = inst_15454);

(statearr_15495_15557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (8))){
var inst_15440 = cljs.core.async.close_BANG_.call(null,to);
var state_15471__$1 = state_15471;
var statearr_15496_15558 = state_15471__$1;
(statearr_15496_15558[(2)] = inst_15440);

(statearr_15496_15558[(1)] = (10));


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
});})(c__7304__auto__,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7304__auto__,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15500[(0)] = state_machine__7249__auto__);

(statearr_15500[(1)] = (1));

return statearr_15500;
});
var state_machine__7249__auto____1 = (function (state_15471){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15501){if((e15501 instanceof Object)){
var ex__7252__auto__ = e15501;
var statearr_15502_15559 = state_15471;
(statearr_15502_15559[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15560 = state_15471;
state_15471 = G__15560;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15471){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15503 = f__7305__auto__.call(null);
(statearr_15503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__,jobs,results,process,async))
);

return c__7304__auto__;
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
var c__7304__auto___15661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15661,tc,fc){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15661,tc,fc){
return (function (state_15636){
var state_val_15637 = (state_15636[(1)]);
if((state_val_15637 === (7))){
var inst_15632 = (state_15636[(2)]);
var state_15636__$1 = state_15636;
var statearr_15638_15662 = state_15636__$1;
(statearr_15638_15662[(2)] = inst_15632);

(statearr_15638_15662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (1))){
var state_15636__$1 = state_15636;
var statearr_15639_15663 = state_15636__$1;
(statearr_15639_15663[(2)] = null);

(statearr_15639_15663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (4))){
var inst_15613 = (state_15636[(7)]);
var inst_15613__$1 = (state_15636[(2)]);
var inst_15614 = (inst_15613__$1 == null);
var state_15636__$1 = (function (){var statearr_15640 = state_15636;
(statearr_15640[(7)] = inst_15613__$1);

return statearr_15640;
})();
if(cljs.core.truth_(inst_15614)){
var statearr_15641_15664 = state_15636__$1;
(statearr_15641_15664[(1)] = (5));

} else {
var statearr_15642_15665 = state_15636__$1;
(statearr_15642_15665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (13))){
var state_15636__$1 = state_15636;
var statearr_15643_15666 = state_15636__$1;
(statearr_15643_15666[(2)] = null);

(statearr_15643_15666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (6))){
var inst_15613 = (state_15636[(7)]);
var inst_15619 = p.call(null,inst_15613);
var state_15636__$1 = state_15636;
if(cljs.core.truth_(inst_15619)){
var statearr_15644_15667 = state_15636__$1;
(statearr_15644_15667[(1)] = (9));

} else {
var statearr_15645_15668 = state_15636__$1;
(statearr_15645_15668[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (3))){
var inst_15634 = (state_15636[(2)]);
var state_15636__$1 = state_15636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15636__$1,inst_15634);
} else {
if((state_val_15637 === (12))){
var state_15636__$1 = state_15636;
var statearr_15646_15669 = state_15636__$1;
(statearr_15646_15669[(2)] = null);

(statearr_15646_15669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (2))){
var state_15636__$1 = state_15636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15636__$1,(4),ch);
} else {
if((state_val_15637 === (11))){
var inst_15613 = (state_15636[(7)]);
var inst_15623 = (state_15636[(2)]);
var state_15636__$1 = state_15636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15636__$1,(8),inst_15623,inst_15613);
} else {
if((state_val_15637 === (9))){
var state_15636__$1 = state_15636;
var statearr_15647_15670 = state_15636__$1;
(statearr_15647_15670[(2)] = tc);

(statearr_15647_15670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (5))){
var inst_15616 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15617 = cljs.core.async.close_BANG_.call(null,fc);
var state_15636__$1 = (function (){var statearr_15648 = state_15636;
(statearr_15648[(8)] = inst_15616);

return statearr_15648;
})();
var statearr_15649_15671 = state_15636__$1;
(statearr_15649_15671[(2)] = inst_15617);

(statearr_15649_15671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (14))){
var inst_15630 = (state_15636[(2)]);
var state_15636__$1 = state_15636;
var statearr_15650_15672 = state_15636__$1;
(statearr_15650_15672[(2)] = inst_15630);

(statearr_15650_15672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (10))){
var state_15636__$1 = state_15636;
var statearr_15651_15673 = state_15636__$1;
(statearr_15651_15673[(2)] = fc);

(statearr_15651_15673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15637 === (8))){
var inst_15625 = (state_15636[(2)]);
var state_15636__$1 = state_15636;
if(cljs.core.truth_(inst_15625)){
var statearr_15652_15674 = state_15636__$1;
(statearr_15652_15674[(1)] = (12));

} else {
var statearr_15653_15675 = state_15636__$1;
(statearr_15653_15675[(1)] = (13));

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
});})(c__7304__auto___15661,tc,fc))
;
return ((function (switch__7248__auto__,c__7304__auto___15661,tc,fc){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15657 = [null,null,null,null,null,null,null,null,null];
(statearr_15657[(0)] = state_machine__7249__auto__);

(statearr_15657[(1)] = (1));

return statearr_15657;
});
var state_machine__7249__auto____1 = (function (state_15636){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15658){if((e15658 instanceof Object)){
var ex__7252__auto__ = e15658;
var statearr_15659_15676 = state_15636;
(statearr_15659_15676[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15677 = state_15636;
state_15636 = G__15677;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15636){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15661,tc,fc))
})();
var state__7306__auto__ = (function (){var statearr_15660 = f__7305__auto__.call(null);
(statearr_15660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15661);

return statearr_15660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15661,tc,fc))
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
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_15724){
var state_val_15725 = (state_15724[(1)]);
if((state_val_15725 === (7))){
var inst_15720 = (state_15724[(2)]);
var state_15724__$1 = state_15724;
var statearr_15726_15742 = state_15724__$1;
(statearr_15726_15742[(2)] = inst_15720);

(statearr_15726_15742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (6))){
var inst_15713 = (state_15724[(7)]);
var inst_15710 = (state_15724[(8)]);
var inst_15717 = f.call(null,inst_15710,inst_15713);
var inst_15710__$1 = inst_15717;
var state_15724__$1 = (function (){var statearr_15727 = state_15724;
(statearr_15727[(8)] = inst_15710__$1);

return statearr_15727;
})();
var statearr_15728_15743 = state_15724__$1;
(statearr_15728_15743[(2)] = null);

(statearr_15728_15743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (5))){
var inst_15710 = (state_15724[(8)]);
var state_15724__$1 = state_15724;
var statearr_15729_15744 = state_15724__$1;
(statearr_15729_15744[(2)] = inst_15710);

(statearr_15729_15744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (4))){
var inst_15713 = (state_15724[(7)]);
var inst_15713__$1 = (state_15724[(2)]);
var inst_15714 = (inst_15713__$1 == null);
var state_15724__$1 = (function (){var statearr_15730 = state_15724;
(statearr_15730[(7)] = inst_15713__$1);

return statearr_15730;
})();
if(cljs.core.truth_(inst_15714)){
var statearr_15731_15745 = state_15724__$1;
(statearr_15731_15745[(1)] = (5));

} else {
var statearr_15732_15746 = state_15724__$1;
(statearr_15732_15746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (3))){
var inst_15722 = (state_15724[(2)]);
var state_15724__$1 = state_15724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15724__$1,inst_15722);
} else {
if((state_val_15725 === (2))){
var state_15724__$1 = state_15724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15724__$1,(4),ch);
} else {
if((state_val_15725 === (1))){
var inst_15710 = init;
var state_15724__$1 = (function (){var statearr_15733 = state_15724;
(statearr_15733[(8)] = inst_15710);

return statearr_15733;
})();
var statearr_15734_15747 = state_15724__$1;
(statearr_15734_15747[(2)] = null);

(statearr_15734_15747[(1)] = (2));


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
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15738 = [null,null,null,null,null,null,null,null,null];
(statearr_15738[(0)] = state_machine__7249__auto__);

(statearr_15738[(1)] = (1));

return statearr_15738;
});
var state_machine__7249__auto____1 = (function (state_15724){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15739){if((e15739 instanceof Object)){
var ex__7252__auto__ = e15739;
var statearr_15740_15748 = state_15724;
(statearr_15740_15748[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15749 = state_15724;
state_15724 = G__15749;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15724){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15741 = f__7305__auto__.call(null);
(statearr_15741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
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
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_15823){
var state_val_15824 = (state_15823[(1)]);
if((state_val_15824 === (7))){
var inst_15805 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15825_15848 = state_15823__$1;
(statearr_15825_15848[(2)] = inst_15805);

(statearr_15825_15848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (1))){
var inst_15799 = cljs.core.seq.call(null,coll);
var inst_15800 = inst_15799;
var state_15823__$1 = (function (){var statearr_15826 = state_15823;
(statearr_15826[(7)] = inst_15800);

return statearr_15826;
})();
var statearr_15827_15849 = state_15823__$1;
(statearr_15827_15849[(2)] = null);

(statearr_15827_15849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (4))){
var inst_15800 = (state_15823[(7)]);
var inst_15803 = cljs.core.first.call(null,inst_15800);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15823__$1,(7),ch,inst_15803);
} else {
if((state_val_15824 === (13))){
var inst_15817 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15828_15850 = state_15823__$1;
(statearr_15828_15850[(2)] = inst_15817);

(statearr_15828_15850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (6))){
var inst_15808 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15808)){
var statearr_15829_15851 = state_15823__$1;
(statearr_15829_15851[(1)] = (8));

} else {
var statearr_15830_15852 = state_15823__$1;
(statearr_15830_15852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (3))){
var inst_15821 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15823__$1,inst_15821);
} else {
if((state_val_15824 === (12))){
var state_15823__$1 = state_15823;
var statearr_15831_15853 = state_15823__$1;
(statearr_15831_15853[(2)] = null);

(statearr_15831_15853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (2))){
var inst_15800 = (state_15823[(7)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15800)){
var statearr_15832_15854 = state_15823__$1;
(statearr_15832_15854[(1)] = (4));

} else {
var statearr_15833_15855 = state_15823__$1;
(statearr_15833_15855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (11))){
var inst_15814 = cljs.core.async.close_BANG_.call(null,ch);
var state_15823__$1 = state_15823;
var statearr_15834_15856 = state_15823__$1;
(statearr_15834_15856[(2)] = inst_15814);

(statearr_15834_15856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (9))){
var state_15823__$1 = state_15823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15835_15857 = state_15823__$1;
(statearr_15835_15857[(1)] = (11));

} else {
var statearr_15836_15858 = state_15823__$1;
(statearr_15836_15858[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (5))){
var inst_15800 = (state_15823[(7)]);
var state_15823__$1 = state_15823;
var statearr_15837_15859 = state_15823__$1;
(statearr_15837_15859[(2)] = inst_15800);

(statearr_15837_15859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (10))){
var inst_15819 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15838_15860 = state_15823__$1;
(statearr_15838_15860[(2)] = inst_15819);

(statearr_15838_15860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (8))){
var inst_15800 = (state_15823[(7)]);
var inst_15810 = cljs.core.next.call(null,inst_15800);
var inst_15800__$1 = inst_15810;
var state_15823__$1 = (function (){var statearr_15839 = state_15823;
(statearr_15839[(7)] = inst_15800__$1);

return statearr_15839;
})();
var statearr_15840_15861 = state_15823__$1;
(statearr_15840_15861[(2)] = null);

(statearr_15840_15861[(1)] = (2));


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
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15844 = [null,null,null,null,null,null,null,null];
(statearr_15844[(0)] = state_machine__7249__auto__);

(statearr_15844[(1)] = (1));

return statearr_15844;
});
var state_machine__7249__auto____1 = (function (state_15823){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15845){if((e15845 instanceof Object)){
var ex__7252__auto__ = e15845;
var statearr_15846_15862 = state_15823;
(statearr_15846_15862[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15863 = state_15823;
state_15823 = G__15863;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15823){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15847 = f__7305__auto__.call(null);
(statearr_15847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
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

cljs.core.async.Mux = (function (){var obj15865 = {};
return obj15865;
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


cljs.core.async.Mult = (function (){var obj15867 = {};
return obj15867;
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
if(typeof cljs.core.async.t16089 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16089 = (function (cs,ch,mult,meta16090){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16090 = meta16090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16089.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16089.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16091){
var self__ = this;
var _16091__$1 = this;
return self__.meta16090;
});})(cs))
;

cljs.core.async.t16089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16091,meta16090__$1){
var self__ = this;
var _16091__$1 = this;
return (new cljs.core.async.t16089(self__.cs,self__.ch,self__.mult,meta16090__$1));
});})(cs))
;

cljs.core.async.t16089.cljs$lang$type = true;

cljs.core.async.t16089.cljs$lang$ctorStr = "cljs.core.async/t16089";

cljs.core.async.t16089.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16089");
});})(cs))
;

cljs.core.async.__GT_t16089 = ((function (cs){
return (function __GT_t16089(cs__$1,ch__$1,mult__$1,meta16090){
return (new cljs.core.async.t16089(cs__$1,ch__$1,mult__$1,meta16090));
});})(cs))
;

}

return (new cljs.core.async.t16089(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___16310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16310,cs,m,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16310,cs,m,dchan,dctr,done){
return (function (state_16222){
var state_val_16223 = (state_16222[(1)]);
if((state_val_16223 === (7))){
var inst_16218 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16224_16311 = state_16222__$1;
(statearr_16224_16311[(2)] = inst_16218);

(statearr_16224_16311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (20))){
var inst_16123 = (state_16222[(7)]);
var inst_16133 = cljs.core.first.call(null,inst_16123);
var inst_16134 = cljs.core.nth.call(null,inst_16133,(0),null);
var inst_16135 = cljs.core.nth.call(null,inst_16133,(1),null);
var state_16222__$1 = (function (){var statearr_16225 = state_16222;
(statearr_16225[(8)] = inst_16134);

return statearr_16225;
})();
if(cljs.core.truth_(inst_16135)){
var statearr_16226_16312 = state_16222__$1;
(statearr_16226_16312[(1)] = (22));

} else {
var statearr_16227_16313 = state_16222__$1;
(statearr_16227_16313[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (27))){
var inst_16170 = (state_16222[(9)]);
var inst_16163 = (state_16222[(10)]);
var inst_16094 = (state_16222[(11)]);
var inst_16165 = (state_16222[(12)]);
var inst_16170__$1 = cljs.core._nth.call(null,inst_16163,inst_16165);
var inst_16171 = cljs.core.async.put_BANG_.call(null,inst_16170__$1,inst_16094,done);
var state_16222__$1 = (function (){var statearr_16228 = state_16222;
(statearr_16228[(9)] = inst_16170__$1);

return statearr_16228;
})();
if(cljs.core.truth_(inst_16171)){
var statearr_16229_16314 = state_16222__$1;
(statearr_16229_16314[(1)] = (30));

} else {
var statearr_16230_16315 = state_16222__$1;
(statearr_16230_16315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (1))){
var state_16222__$1 = state_16222;
var statearr_16231_16316 = state_16222__$1;
(statearr_16231_16316[(2)] = null);

(statearr_16231_16316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (24))){
var inst_16123 = (state_16222[(7)]);
var inst_16140 = (state_16222[(2)]);
var inst_16141 = cljs.core.next.call(null,inst_16123);
var inst_16103 = inst_16141;
var inst_16104 = null;
var inst_16105 = (0);
var inst_16106 = (0);
var state_16222__$1 = (function (){var statearr_16232 = state_16222;
(statearr_16232[(13)] = inst_16104);

(statearr_16232[(14)] = inst_16103);

(statearr_16232[(15)] = inst_16106);

(statearr_16232[(16)] = inst_16105);

(statearr_16232[(17)] = inst_16140);

return statearr_16232;
})();
var statearr_16233_16317 = state_16222__$1;
(statearr_16233_16317[(2)] = null);

(statearr_16233_16317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (39))){
var state_16222__$1 = state_16222;
var statearr_16237_16318 = state_16222__$1;
(statearr_16237_16318[(2)] = null);

(statearr_16237_16318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (4))){
var inst_16094 = (state_16222[(11)]);
var inst_16094__$1 = (state_16222[(2)]);
var inst_16095 = (inst_16094__$1 == null);
var state_16222__$1 = (function (){var statearr_16238 = state_16222;
(statearr_16238[(11)] = inst_16094__$1);

return statearr_16238;
})();
if(cljs.core.truth_(inst_16095)){
var statearr_16239_16319 = state_16222__$1;
(statearr_16239_16319[(1)] = (5));

} else {
var statearr_16240_16320 = state_16222__$1;
(statearr_16240_16320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (15))){
var inst_16104 = (state_16222[(13)]);
var inst_16103 = (state_16222[(14)]);
var inst_16106 = (state_16222[(15)]);
var inst_16105 = (state_16222[(16)]);
var inst_16119 = (state_16222[(2)]);
var inst_16120 = (inst_16106 + (1));
var tmp16234 = inst_16104;
var tmp16235 = inst_16103;
var tmp16236 = inst_16105;
var inst_16103__$1 = tmp16235;
var inst_16104__$1 = tmp16234;
var inst_16105__$1 = tmp16236;
var inst_16106__$1 = inst_16120;
var state_16222__$1 = (function (){var statearr_16241 = state_16222;
(statearr_16241[(13)] = inst_16104__$1);

(statearr_16241[(14)] = inst_16103__$1);

(statearr_16241[(15)] = inst_16106__$1);

(statearr_16241[(18)] = inst_16119);

(statearr_16241[(16)] = inst_16105__$1);

return statearr_16241;
})();
var statearr_16242_16321 = state_16222__$1;
(statearr_16242_16321[(2)] = null);

(statearr_16242_16321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (21))){
var inst_16144 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16246_16322 = state_16222__$1;
(statearr_16246_16322[(2)] = inst_16144);

(statearr_16246_16322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (31))){
var inst_16170 = (state_16222[(9)]);
var inst_16174 = done.call(null,null);
var inst_16175 = cljs.core.async.untap_STAR_.call(null,m,inst_16170);
var state_16222__$1 = (function (){var statearr_16247 = state_16222;
(statearr_16247[(19)] = inst_16174);

return statearr_16247;
})();
var statearr_16248_16323 = state_16222__$1;
(statearr_16248_16323[(2)] = inst_16175);

(statearr_16248_16323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (32))){
var inst_16162 = (state_16222[(20)]);
var inst_16164 = (state_16222[(21)]);
var inst_16163 = (state_16222[(10)]);
var inst_16165 = (state_16222[(12)]);
var inst_16177 = (state_16222[(2)]);
var inst_16178 = (inst_16165 + (1));
var tmp16243 = inst_16162;
var tmp16244 = inst_16164;
var tmp16245 = inst_16163;
var inst_16162__$1 = tmp16243;
var inst_16163__$1 = tmp16245;
var inst_16164__$1 = tmp16244;
var inst_16165__$1 = inst_16178;
var state_16222__$1 = (function (){var statearr_16249 = state_16222;
(statearr_16249[(20)] = inst_16162__$1);

(statearr_16249[(21)] = inst_16164__$1);

(statearr_16249[(22)] = inst_16177);

(statearr_16249[(10)] = inst_16163__$1);

(statearr_16249[(12)] = inst_16165__$1);

return statearr_16249;
})();
var statearr_16250_16324 = state_16222__$1;
(statearr_16250_16324[(2)] = null);

(statearr_16250_16324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (40))){
var inst_16190 = (state_16222[(23)]);
var inst_16194 = done.call(null,null);
var inst_16195 = cljs.core.async.untap_STAR_.call(null,m,inst_16190);
var state_16222__$1 = (function (){var statearr_16251 = state_16222;
(statearr_16251[(24)] = inst_16194);

return statearr_16251;
})();
var statearr_16252_16325 = state_16222__$1;
(statearr_16252_16325[(2)] = inst_16195);

(statearr_16252_16325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (33))){
var inst_16181 = (state_16222[(25)]);
var inst_16183 = cljs.core.chunked_seq_QMARK_.call(null,inst_16181);
var state_16222__$1 = state_16222;
if(inst_16183){
var statearr_16253_16326 = state_16222__$1;
(statearr_16253_16326[(1)] = (36));

} else {
var statearr_16254_16327 = state_16222__$1;
(statearr_16254_16327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (13))){
var inst_16113 = (state_16222[(26)]);
var inst_16116 = cljs.core.async.close_BANG_.call(null,inst_16113);
var state_16222__$1 = state_16222;
var statearr_16255_16328 = state_16222__$1;
(statearr_16255_16328[(2)] = inst_16116);

(statearr_16255_16328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (22))){
var inst_16134 = (state_16222[(8)]);
var inst_16137 = cljs.core.async.close_BANG_.call(null,inst_16134);
var state_16222__$1 = state_16222;
var statearr_16256_16329 = state_16222__$1;
(statearr_16256_16329[(2)] = inst_16137);

(statearr_16256_16329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (36))){
var inst_16181 = (state_16222[(25)]);
var inst_16185 = cljs.core.chunk_first.call(null,inst_16181);
var inst_16186 = cljs.core.chunk_rest.call(null,inst_16181);
var inst_16187 = cljs.core.count.call(null,inst_16185);
var inst_16162 = inst_16186;
var inst_16163 = inst_16185;
var inst_16164 = inst_16187;
var inst_16165 = (0);
var state_16222__$1 = (function (){var statearr_16257 = state_16222;
(statearr_16257[(20)] = inst_16162);

(statearr_16257[(21)] = inst_16164);

(statearr_16257[(10)] = inst_16163);

(statearr_16257[(12)] = inst_16165);

return statearr_16257;
})();
var statearr_16258_16330 = state_16222__$1;
(statearr_16258_16330[(2)] = null);

(statearr_16258_16330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (41))){
var inst_16181 = (state_16222[(25)]);
var inst_16197 = (state_16222[(2)]);
var inst_16198 = cljs.core.next.call(null,inst_16181);
var inst_16162 = inst_16198;
var inst_16163 = null;
var inst_16164 = (0);
var inst_16165 = (0);
var state_16222__$1 = (function (){var statearr_16259 = state_16222;
(statearr_16259[(20)] = inst_16162);

(statearr_16259[(21)] = inst_16164);

(statearr_16259[(27)] = inst_16197);

(statearr_16259[(10)] = inst_16163);

(statearr_16259[(12)] = inst_16165);

return statearr_16259;
})();
var statearr_16260_16331 = state_16222__$1;
(statearr_16260_16331[(2)] = null);

(statearr_16260_16331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (43))){
var state_16222__$1 = state_16222;
var statearr_16261_16332 = state_16222__$1;
(statearr_16261_16332[(2)] = null);

(statearr_16261_16332[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (29))){
var inst_16206 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16262_16333 = state_16222__$1;
(statearr_16262_16333[(2)] = inst_16206);

(statearr_16262_16333[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (44))){
var inst_16215 = (state_16222[(2)]);
var state_16222__$1 = (function (){var statearr_16263 = state_16222;
(statearr_16263[(28)] = inst_16215);

return statearr_16263;
})();
var statearr_16264_16334 = state_16222__$1;
(statearr_16264_16334[(2)] = null);

(statearr_16264_16334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (6))){
var inst_16154 = (state_16222[(29)]);
var inst_16153 = cljs.core.deref.call(null,cs);
var inst_16154__$1 = cljs.core.keys.call(null,inst_16153);
var inst_16155 = cljs.core.count.call(null,inst_16154__$1);
var inst_16156 = cljs.core.reset_BANG_.call(null,dctr,inst_16155);
var inst_16161 = cljs.core.seq.call(null,inst_16154__$1);
var inst_16162 = inst_16161;
var inst_16163 = null;
var inst_16164 = (0);
var inst_16165 = (0);
var state_16222__$1 = (function (){var statearr_16265 = state_16222;
(statearr_16265[(20)] = inst_16162);

(statearr_16265[(21)] = inst_16164);

(statearr_16265[(30)] = inst_16156);

(statearr_16265[(10)] = inst_16163);

(statearr_16265[(29)] = inst_16154__$1);

(statearr_16265[(12)] = inst_16165);

return statearr_16265;
})();
var statearr_16266_16335 = state_16222__$1;
(statearr_16266_16335[(2)] = null);

(statearr_16266_16335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (28))){
var inst_16162 = (state_16222[(20)]);
var inst_16181 = (state_16222[(25)]);
var inst_16181__$1 = cljs.core.seq.call(null,inst_16162);
var state_16222__$1 = (function (){var statearr_16267 = state_16222;
(statearr_16267[(25)] = inst_16181__$1);

return statearr_16267;
})();
if(inst_16181__$1){
var statearr_16268_16336 = state_16222__$1;
(statearr_16268_16336[(1)] = (33));

} else {
var statearr_16269_16337 = state_16222__$1;
(statearr_16269_16337[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (25))){
var inst_16164 = (state_16222[(21)]);
var inst_16165 = (state_16222[(12)]);
var inst_16167 = (inst_16165 < inst_16164);
var inst_16168 = inst_16167;
var state_16222__$1 = state_16222;
if(cljs.core.truth_(inst_16168)){
var statearr_16270_16338 = state_16222__$1;
(statearr_16270_16338[(1)] = (27));

} else {
var statearr_16271_16339 = state_16222__$1;
(statearr_16271_16339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (34))){
var state_16222__$1 = state_16222;
var statearr_16272_16340 = state_16222__$1;
(statearr_16272_16340[(2)] = null);

(statearr_16272_16340[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (17))){
var state_16222__$1 = state_16222;
var statearr_16273_16341 = state_16222__$1;
(statearr_16273_16341[(2)] = null);

(statearr_16273_16341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (3))){
var inst_16220 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16222__$1,inst_16220);
} else {
if((state_val_16223 === (12))){
var inst_16149 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16274_16342 = state_16222__$1;
(statearr_16274_16342[(2)] = inst_16149);

(statearr_16274_16342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (2))){
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16222__$1,(4),ch);
} else {
if((state_val_16223 === (23))){
var state_16222__$1 = state_16222;
var statearr_16275_16343 = state_16222__$1;
(statearr_16275_16343[(2)] = null);

(statearr_16275_16343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (35))){
var inst_16204 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16276_16344 = state_16222__$1;
(statearr_16276_16344[(2)] = inst_16204);

(statearr_16276_16344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (19))){
var inst_16123 = (state_16222[(7)]);
var inst_16127 = cljs.core.chunk_first.call(null,inst_16123);
var inst_16128 = cljs.core.chunk_rest.call(null,inst_16123);
var inst_16129 = cljs.core.count.call(null,inst_16127);
var inst_16103 = inst_16128;
var inst_16104 = inst_16127;
var inst_16105 = inst_16129;
var inst_16106 = (0);
var state_16222__$1 = (function (){var statearr_16277 = state_16222;
(statearr_16277[(13)] = inst_16104);

(statearr_16277[(14)] = inst_16103);

(statearr_16277[(15)] = inst_16106);

(statearr_16277[(16)] = inst_16105);

return statearr_16277;
})();
var statearr_16278_16345 = state_16222__$1;
(statearr_16278_16345[(2)] = null);

(statearr_16278_16345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (11))){
var inst_16123 = (state_16222[(7)]);
var inst_16103 = (state_16222[(14)]);
var inst_16123__$1 = cljs.core.seq.call(null,inst_16103);
var state_16222__$1 = (function (){var statearr_16279 = state_16222;
(statearr_16279[(7)] = inst_16123__$1);

return statearr_16279;
})();
if(inst_16123__$1){
var statearr_16280_16346 = state_16222__$1;
(statearr_16280_16346[(1)] = (16));

} else {
var statearr_16281_16347 = state_16222__$1;
(statearr_16281_16347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (9))){
var inst_16151 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16282_16348 = state_16222__$1;
(statearr_16282_16348[(2)] = inst_16151);

(statearr_16282_16348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (5))){
var inst_16101 = cljs.core.deref.call(null,cs);
var inst_16102 = cljs.core.seq.call(null,inst_16101);
var inst_16103 = inst_16102;
var inst_16104 = null;
var inst_16105 = (0);
var inst_16106 = (0);
var state_16222__$1 = (function (){var statearr_16283 = state_16222;
(statearr_16283[(13)] = inst_16104);

(statearr_16283[(14)] = inst_16103);

(statearr_16283[(15)] = inst_16106);

(statearr_16283[(16)] = inst_16105);

return statearr_16283;
})();
var statearr_16284_16349 = state_16222__$1;
(statearr_16284_16349[(2)] = null);

(statearr_16284_16349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (14))){
var state_16222__$1 = state_16222;
var statearr_16285_16350 = state_16222__$1;
(statearr_16285_16350[(2)] = null);

(statearr_16285_16350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (45))){
var inst_16212 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16286_16351 = state_16222__$1;
(statearr_16286_16351[(2)] = inst_16212);

(statearr_16286_16351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (26))){
var inst_16154 = (state_16222[(29)]);
var inst_16208 = (state_16222[(2)]);
var inst_16209 = cljs.core.seq.call(null,inst_16154);
var state_16222__$1 = (function (){var statearr_16287 = state_16222;
(statearr_16287[(31)] = inst_16208);

return statearr_16287;
})();
if(inst_16209){
var statearr_16288_16352 = state_16222__$1;
(statearr_16288_16352[(1)] = (42));

} else {
var statearr_16289_16353 = state_16222__$1;
(statearr_16289_16353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (16))){
var inst_16123 = (state_16222[(7)]);
var inst_16125 = cljs.core.chunked_seq_QMARK_.call(null,inst_16123);
var state_16222__$1 = state_16222;
if(inst_16125){
var statearr_16290_16354 = state_16222__$1;
(statearr_16290_16354[(1)] = (19));

} else {
var statearr_16291_16355 = state_16222__$1;
(statearr_16291_16355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (38))){
var inst_16201 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16292_16356 = state_16222__$1;
(statearr_16292_16356[(2)] = inst_16201);

(statearr_16292_16356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (30))){
var state_16222__$1 = state_16222;
var statearr_16293_16357 = state_16222__$1;
(statearr_16293_16357[(2)] = null);

(statearr_16293_16357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (10))){
var inst_16104 = (state_16222[(13)]);
var inst_16106 = (state_16222[(15)]);
var inst_16112 = cljs.core._nth.call(null,inst_16104,inst_16106);
var inst_16113 = cljs.core.nth.call(null,inst_16112,(0),null);
var inst_16114 = cljs.core.nth.call(null,inst_16112,(1),null);
var state_16222__$1 = (function (){var statearr_16294 = state_16222;
(statearr_16294[(26)] = inst_16113);

return statearr_16294;
})();
if(cljs.core.truth_(inst_16114)){
var statearr_16295_16358 = state_16222__$1;
(statearr_16295_16358[(1)] = (13));

} else {
var statearr_16296_16359 = state_16222__$1;
(statearr_16296_16359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (18))){
var inst_16147 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16297_16360 = state_16222__$1;
(statearr_16297_16360[(2)] = inst_16147);

(statearr_16297_16360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (42))){
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16222__$1,(45),dchan);
} else {
if((state_val_16223 === (37))){
var inst_16190 = (state_16222[(23)]);
var inst_16181 = (state_16222[(25)]);
var inst_16094 = (state_16222[(11)]);
var inst_16190__$1 = cljs.core.first.call(null,inst_16181);
var inst_16191 = cljs.core.async.put_BANG_.call(null,inst_16190__$1,inst_16094,done);
var state_16222__$1 = (function (){var statearr_16298 = state_16222;
(statearr_16298[(23)] = inst_16190__$1);

return statearr_16298;
})();
if(cljs.core.truth_(inst_16191)){
var statearr_16299_16361 = state_16222__$1;
(statearr_16299_16361[(1)] = (39));

} else {
var statearr_16300_16362 = state_16222__$1;
(statearr_16300_16362[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (8))){
var inst_16106 = (state_16222[(15)]);
var inst_16105 = (state_16222[(16)]);
var inst_16108 = (inst_16106 < inst_16105);
var inst_16109 = inst_16108;
var state_16222__$1 = state_16222;
if(cljs.core.truth_(inst_16109)){
var statearr_16301_16363 = state_16222__$1;
(statearr_16301_16363[(1)] = (10));

} else {
var statearr_16302_16364 = state_16222__$1;
(statearr_16302_16364[(1)] = (11));

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
});})(c__7304__auto___16310,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___16310,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16306[(0)] = state_machine__7249__auto__);

(statearr_16306[(1)] = (1));

return statearr_16306;
});
var state_machine__7249__auto____1 = (function (state_16222){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16307){if((e16307 instanceof Object)){
var ex__7252__auto__ = e16307;
var statearr_16308_16365 = state_16222;
(statearr_16308_16365[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16366 = state_16222;
state_16222 = G__16366;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16222){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16310,cs,m,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_16309 = f__7305__auto__.call(null);
(statearr_16309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16310);

return statearr_16309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16310,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16368 = {};
return obj16368;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16369){
var map__16374 = p__16369;
var map__16374__$1 = ((cljs.core.seq_QMARK_.call(null,map__16374))?cljs.core.apply.call(null,cljs.core.hash_map,map__16374):map__16374);
var opts = map__16374__$1;
var statearr_16375_16378 = state;
(statearr_16375_16378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16374,map__16374__$1,opts){
return (function (val){
var statearr_16376_16379 = state;
(statearr_16376_16379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16374,map__16374__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16377_16380 = state;
(statearr_16377_16380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16369 = null;
if (arguments.length > 3) {
  p__16369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16369);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16381){
var state = cljs.core.first(arglist__16381);
arglist__16381 = cljs.core.next(arglist__16381);
var cont_block = cljs.core.first(arglist__16381);
arglist__16381 = cljs.core.next(arglist__16381);
var ports = cljs.core.first(arglist__16381);
var p__16369 = cljs.core.rest(arglist__16381);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16369);
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
if(typeof cljs.core.async.t16501 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16501 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16502){
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
this.meta16502 = meta16502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16501.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16501.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16501.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16503){
var self__ = this;
var _16503__$1 = this;
return self__.meta16502;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16503,meta16502__$1){
var self__ = this;
var _16503__$1 = this;
return (new cljs.core.async.t16501(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16502__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16501.cljs$lang$type = true;

cljs.core.async.t16501.cljs$lang$ctorStr = "cljs.core.async/t16501";

cljs.core.async.t16501.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16501");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16501 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16501(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16502){
return (new cljs.core.async.t16501(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16502));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16501(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16573){
var state_val_16574 = (state_16573[(1)]);
if((state_val_16574 === (7))){
var inst_16517 = (state_16573[(7)]);
var inst_16522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16517);
var state_16573__$1 = state_16573;
var statearr_16575_16621 = state_16573__$1;
(statearr_16575_16621[(2)] = inst_16522);

(statearr_16575_16621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (20))){
var inst_16532 = (state_16573[(8)]);
var state_16573__$1 = state_16573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16573__$1,(23),out,inst_16532);
} else {
if((state_val_16574 === (1))){
var inst_16507 = (state_16573[(9)]);
var inst_16507__$1 = calc_state.call(null);
var inst_16508 = cljs.core.seq_QMARK_.call(null,inst_16507__$1);
var state_16573__$1 = (function (){var statearr_16576 = state_16573;
(statearr_16576[(9)] = inst_16507__$1);

return statearr_16576;
})();
if(inst_16508){
var statearr_16577_16622 = state_16573__$1;
(statearr_16577_16622[(1)] = (2));

} else {
var statearr_16578_16623 = state_16573__$1;
(statearr_16578_16623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (24))){
var inst_16525 = (state_16573[(10)]);
var inst_16517 = inst_16525;
var state_16573__$1 = (function (){var statearr_16579 = state_16573;
(statearr_16579[(7)] = inst_16517);

return statearr_16579;
})();
var statearr_16580_16624 = state_16573__$1;
(statearr_16580_16624[(2)] = null);

(statearr_16580_16624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (4))){
var inst_16507 = (state_16573[(9)]);
var inst_16513 = (state_16573[(2)]);
var inst_16514 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16515 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16516 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16517 = inst_16507;
var state_16573__$1 = (function (){var statearr_16581 = state_16573;
(statearr_16581[(7)] = inst_16517);

(statearr_16581[(11)] = inst_16515);

(statearr_16581[(12)] = inst_16514);

(statearr_16581[(13)] = inst_16516);

return statearr_16581;
})();
var statearr_16582_16625 = state_16573__$1;
(statearr_16582_16625[(2)] = null);

(statearr_16582_16625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (15))){
var state_16573__$1 = state_16573;
var statearr_16583_16626 = state_16573__$1;
(statearr_16583_16626[(2)] = null);

(statearr_16583_16626[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (21))){
var inst_16525 = (state_16573[(10)]);
var inst_16517 = inst_16525;
var state_16573__$1 = (function (){var statearr_16584 = state_16573;
(statearr_16584[(7)] = inst_16517);

return statearr_16584;
})();
var statearr_16585_16627 = state_16573__$1;
(statearr_16585_16627[(2)] = null);

(statearr_16585_16627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (13))){
var inst_16569 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
var statearr_16586_16628 = state_16573__$1;
(statearr_16586_16628[(2)] = inst_16569);

(statearr_16586_16628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (22))){
var inst_16567 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
var statearr_16587_16629 = state_16573__$1;
(statearr_16587_16629[(2)] = inst_16567);

(statearr_16587_16629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (6))){
var inst_16571 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16573__$1,inst_16571);
} else {
if((state_val_16574 === (25))){
var state_16573__$1 = state_16573;
var statearr_16588_16630 = state_16573__$1;
(statearr_16588_16630[(2)] = null);

(statearr_16588_16630[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (17))){
var inst_16547 = (state_16573[(14)]);
var state_16573__$1 = state_16573;
var statearr_16589_16631 = state_16573__$1;
(statearr_16589_16631[(2)] = inst_16547);

(statearr_16589_16631[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (3))){
var inst_16507 = (state_16573[(9)]);
var state_16573__$1 = state_16573;
var statearr_16590_16632 = state_16573__$1;
(statearr_16590_16632[(2)] = inst_16507);

(statearr_16590_16632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (12))){
var inst_16547 = (state_16573[(14)]);
var inst_16528 = (state_16573[(15)]);
var inst_16533 = (state_16573[(16)]);
var inst_16547__$1 = inst_16528.call(null,inst_16533);
var state_16573__$1 = (function (){var statearr_16591 = state_16573;
(statearr_16591[(14)] = inst_16547__$1);

return statearr_16591;
})();
if(cljs.core.truth_(inst_16547__$1)){
var statearr_16592_16633 = state_16573__$1;
(statearr_16592_16633[(1)] = (17));

} else {
var statearr_16593_16634 = state_16573__$1;
(statearr_16593_16634[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (2))){
var inst_16507 = (state_16573[(9)]);
var inst_16510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16507);
var state_16573__$1 = state_16573;
var statearr_16594_16635 = state_16573__$1;
(statearr_16594_16635[(2)] = inst_16510);

(statearr_16594_16635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (23))){
var inst_16558 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
if(cljs.core.truth_(inst_16558)){
var statearr_16595_16636 = state_16573__$1;
(statearr_16595_16636[(1)] = (24));

} else {
var statearr_16596_16637 = state_16573__$1;
(statearr_16596_16637[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (19))){
var inst_16555 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
if(cljs.core.truth_(inst_16555)){
var statearr_16597_16638 = state_16573__$1;
(statearr_16597_16638[(1)] = (20));

} else {
var statearr_16598_16639 = state_16573__$1;
(statearr_16598_16639[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (11))){
var inst_16532 = (state_16573[(8)]);
var inst_16538 = (inst_16532 == null);
var state_16573__$1 = state_16573;
if(cljs.core.truth_(inst_16538)){
var statearr_16599_16640 = state_16573__$1;
(statearr_16599_16640[(1)] = (14));

} else {
var statearr_16600_16641 = state_16573__$1;
(statearr_16600_16641[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (9))){
var inst_16525 = (state_16573[(10)]);
var inst_16525__$1 = (state_16573[(2)]);
var inst_16526 = cljs.core.get.call(null,inst_16525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16527 = cljs.core.get.call(null,inst_16525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16528 = cljs.core.get.call(null,inst_16525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16573__$1 = (function (){var statearr_16601 = state_16573;
(statearr_16601[(15)] = inst_16528);

(statearr_16601[(17)] = inst_16527);

(statearr_16601[(10)] = inst_16525__$1);

return statearr_16601;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16573__$1,(10),inst_16526);
} else {
if((state_val_16574 === (5))){
var inst_16517 = (state_16573[(7)]);
var inst_16520 = cljs.core.seq_QMARK_.call(null,inst_16517);
var state_16573__$1 = state_16573;
if(inst_16520){
var statearr_16602_16642 = state_16573__$1;
(statearr_16602_16642[(1)] = (7));

} else {
var statearr_16603_16643 = state_16573__$1;
(statearr_16603_16643[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (14))){
var inst_16533 = (state_16573[(16)]);
var inst_16540 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16533);
var state_16573__$1 = state_16573;
var statearr_16604_16644 = state_16573__$1;
(statearr_16604_16644[(2)] = inst_16540);

(statearr_16604_16644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (26))){
var inst_16563 = (state_16573[(2)]);
var state_16573__$1 = state_16573;
var statearr_16605_16645 = state_16573__$1;
(statearr_16605_16645[(2)] = inst_16563);

(statearr_16605_16645[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (16))){
var inst_16543 = (state_16573[(2)]);
var inst_16544 = calc_state.call(null);
var inst_16517 = inst_16544;
var state_16573__$1 = (function (){var statearr_16606 = state_16573;
(statearr_16606[(7)] = inst_16517);

(statearr_16606[(18)] = inst_16543);

return statearr_16606;
})();
var statearr_16607_16646 = state_16573__$1;
(statearr_16607_16646[(2)] = null);

(statearr_16607_16646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (10))){
var inst_16533 = (state_16573[(16)]);
var inst_16532 = (state_16573[(8)]);
var inst_16531 = (state_16573[(2)]);
var inst_16532__$1 = cljs.core.nth.call(null,inst_16531,(0),null);
var inst_16533__$1 = cljs.core.nth.call(null,inst_16531,(1),null);
var inst_16534 = (inst_16532__$1 == null);
var inst_16535 = cljs.core._EQ_.call(null,inst_16533__$1,change);
var inst_16536 = (inst_16534) || (inst_16535);
var state_16573__$1 = (function (){var statearr_16608 = state_16573;
(statearr_16608[(16)] = inst_16533__$1);

(statearr_16608[(8)] = inst_16532__$1);

return statearr_16608;
})();
if(cljs.core.truth_(inst_16536)){
var statearr_16609_16647 = state_16573__$1;
(statearr_16609_16647[(1)] = (11));

} else {
var statearr_16610_16648 = state_16573__$1;
(statearr_16610_16648[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (18))){
var inst_16528 = (state_16573[(15)]);
var inst_16527 = (state_16573[(17)]);
var inst_16533 = (state_16573[(16)]);
var inst_16550 = cljs.core.empty_QMARK_.call(null,inst_16528);
var inst_16551 = inst_16527.call(null,inst_16533);
var inst_16552 = cljs.core.not.call(null,inst_16551);
var inst_16553 = (inst_16550) && (inst_16552);
var state_16573__$1 = state_16573;
var statearr_16611_16649 = state_16573__$1;
(statearr_16611_16649[(2)] = inst_16553);

(statearr_16611_16649[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (8))){
var inst_16517 = (state_16573[(7)]);
var state_16573__$1 = state_16573;
var statearr_16612_16650 = state_16573__$1;
(statearr_16612_16650[(2)] = inst_16517);

(statearr_16612_16650[(1)] = (9));


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
});})(c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16616[(0)] = state_machine__7249__auto__);

(statearr_16616[(1)] = (1));

return statearr_16616;
});
var state_machine__7249__auto____1 = (function (state_16573){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16617){if((e16617 instanceof Object)){
var ex__7252__auto__ = e16617;
var statearr_16618_16651 = state_16573;
(statearr_16618_16651[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16652 = state_16573;
state_16573 = G__16652;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16573){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7306__auto__ = (function (){var statearr_16619 = f__7305__auto__.call(null);
(statearr_16619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16620);

return statearr_16619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16654 = {};
return obj16654;
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
return (function (p1__16655_SHARP_){
if(cljs.core.truth_(p1__16655_SHARP_.call(null,topic))){
return p1__16655_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16655_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16778 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16778 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16779){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16779 = meta16779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16778.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16778.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16778.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16778.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16780){
var self__ = this;
var _16780__$1 = this;
return self__.meta16779;
});})(mults,ensure_mult))
;

cljs.core.async.t16778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16780,meta16779__$1){
var self__ = this;
var _16780__$1 = this;
return (new cljs.core.async.t16778(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16779__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16778.cljs$lang$type = true;

cljs.core.async.t16778.cljs$lang$ctorStr = "cljs.core.async/t16778";

cljs.core.async.t16778.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16778");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16778 = ((function (mults,ensure_mult){
return (function __GT_t16778(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16779){
return (new cljs.core.async.t16778(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16779));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16778(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16900,mults,ensure_mult,p){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16900,mults,ensure_mult,p){
return (function (state_16852){
var state_val_16853 = (state_16852[(1)]);
if((state_val_16853 === (7))){
var inst_16848 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16854_16901 = state_16852__$1;
(statearr_16854_16901[(2)] = inst_16848);

(statearr_16854_16901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (20))){
var state_16852__$1 = state_16852;
var statearr_16855_16902 = state_16852__$1;
(statearr_16855_16902[(2)] = null);

(statearr_16855_16902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (1))){
var state_16852__$1 = state_16852;
var statearr_16856_16903 = state_16852__$1;
(statearr_16856_16903[(2)] = null);

(statearr_16856_16903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (24))){
var inst_16831 = (state_16852[(7)]);
var inst_16840 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16831);
var state_16852__$1 = state_16852;
var statearr_16857_16904 = state_16852__$1;
(statearr_16857_16904[(2)] = inst_16840);

(statearr_16857_16904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (4))){
var inst_16783 = (state_16852[(8)]);
var inst_16783__$1 = (state_16852[(2)]);
var inst_16784 = (inst_16783__$1 == null);
var state_16852__$1 = (function (){var statearr_16858 = state_16852;
(statearr_16858[(8)] = inst_16783__$1);

return statearr_16858;
})();
if(cljs.core.truth_(inst_16784)){
var statearr_16859_16905 = state_16852__$1;
(statearr_16859_16905[(1)] = (5));

} else {
var statearr_16860_16906 = state_16852__$1;
(statearr_16860_16906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (15))){
var inst_16825 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16861_16907 = state_16852__$1;
(statearr_16861_16907[(2)] = inst_16825);

(statearr_16861_16907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (21))){
var inst_16845 = (state_16852[(2)]);
var state_16852__$1 = (function (){var statearr_16862 = state_16852;
(statearr_16862[(9)] = inst_16845);

return statearr_16862;
})();
var statearr_16863_16908 = state_16852__$1;
(statearr_16863_16908[(2)] = null);

(statearr_16863_16908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (13))){
var inst_16807 = (state_16852[(10)]);
var inst_16809 = cljs.core.chunked_seq_QMARK_.call(null,inst_16807);
var state_16852__$1 = state_16852;
if(inst_16809){
var statearr_16864_16909 = state_16852__$1;
(statearr_16864_16909[(1)] = (16));

} else {
var statearr_16865_16910 = state_16852__$1;
(statearr_16865_16910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (22))){
var inst_16837 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
if(cljs.core.truth_(inst_16837)){
var statearr_16866_16911 = state_16852__$1;
(statearr_16866_16911[(1)] = (23));

} else {
var statearr_16867_16912 = state_16852__$1;
(statearr_16867_16912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (6))){
var inst_16783 = (state_16852[(8)]);
var inst_16833 = (state_16852[(11)]);
var inst_16831 = (state_16852[(7)]);
var inst_16831__$1 = topic_fn.call(null,inst_16783);
var inst_16832 = cljs.core.deref.call(null,mults);
var inst_16833__$1 = cljs.core.get.call(null,inst_16832,inst_16831__$1);
var state_16852__$1 = (function (){var statearr_16868 = state_16852;
(statearr_16868[(11)] = inst_16833__$1);

(statearr_16868[(7)] = inst_16831__$1);

return statearr_16868;
})();
if(cljs.core.truth_(inst_16833__$1)){
var statearr_16869_16913 = state_16852__$1;
(statearr_16869_16913[(1)] = (19));

} else {
var statearr_16870_16914 = state_16852__$1;
(statearr_16870_16914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (25))){
var inst_16842 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16871_16915 = state_16852__$1;
(statearr_16871_16915[(2)] = inst_16842);

(statearr_16871_16915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (17))){
var inst_16807 = (state_16852[(10)]);
var inst_16816 = cljs.core.first.call(null,inst_16807);
var inst_16817 = cljs.core.async.muxch_STAR_.call(null,inst_16816);
var inst_16818 = cljs.core.async.close_BANG_.call(null,inst_16817);
var inst_16819 = cljs.core.next.call(null,inst_16807);
var inst_16793 = inst_16819;
var inst_16794 = null;
var inst_16795 = (0);
var inst_16796 = (0);
var state_16852__$1 = (function (){var statearr_16872 = state_16852;
(statearr_16872[(12)] = inst_16793);

(statearr_16872[(13)] = inst_16795);

(statearr_16872[(14)] = inst_16796);

(statearr_16872[(15)] = inst_16794);

(statearr_16872[(16)] = inst_16818);

return statearr_16872;
})();
var statearr_16873_16916 = state_16852__$1;
(statearr_16873_16916[(2)] = null);

(statearr_16873_16916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (3))){
var inst_16850 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16852__$1,inst_16850);
} else {
if((state_val_16853 === (12))){
var inst_16827 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16874_16917 = state_16852__$1;
(statearr_16874_16917[(2)] = inst_16827);

(statearr_16874_16917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (2))){
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16852__$1,(4),ch);
} else {
if((state_val_16853 === (23))){
var state_16852__$1 = state_16852;
var statearr_16875_16918 = state_16852__$1;
(statearr_16875_16918[(2)] = null);

(statearr_16875_16918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (19))){
var inst_16783 = (state_16852[(8)]);
var inst_16833 = (state_16852[(11)]);
var inst_16835 = cljs.core.async.muxch_STAR_.call(null,inst_16833);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16852__$1,(22),inst_16835,inst_16783);
} else {
if((state_val_16853 === (11))){
var inst_16793 = (state_16852[(12)]);
var inst_16807 = (state_16852[(10)]);
var inst_16807__$1 = cljs.core.seq.call(null,inst_16793);
var state_16852__$1 = (function (){var statearr_16876 = state_16852;
(statearr_16876[(10)] = inst_16807__$1);

return statearr_16876;
})();
if(inst_16807__$1){
var statearr_16877_16919 = state_16852__$1;
(statearr_16877_16919[(1)] = (13));

} else {
var statearr_16878_16920 = state_16852__$1;
(statearr_16878_16920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (9))){
var inst_16829 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16879_16921 = state_16852__$1;
(statearr_16879_16921[(2)] = inst_16829);

(statearr_16879_16921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (5))){
var inst_16790 = cljs.core.deref.call(null,mults);
var inst_16791 = cljs.core.vals.call(null,inst_16790);
var inst_16792 = cljs.core.seq.call(null,inst_16791);
var inst_16793 = inst_16792;
var inst_16794 = null;
var inst_16795 = (0);
var inst_16796 = (0);
var state_16852__$1 = (function (){var statearr_16880 = state_16852;
(statearr_16880[(12)] = inst_16793);

(statearr_16880[(13)] = inst_16795);

(statearr_16880[(14)] = inst_16796);

(statearr_16880[(15)] = inst_16794);

return statearr_16880;
})();
var statearr_16881_16922 = state_16852__$1;
(statearr_16881_16922[(2)] = null);

(statearr_16881_16922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (14))){
var state_16852__$1 = state_16852;
var statearr_16885_16923 = state_16852__$1;
(statearr_16885_16923[(2)] = null);

(statearr_16885_16923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (16))){
var inst_16807 = (state_16852[(10)]);
var inst_16811 = cljs.core.chunk_first.call(null,inst_16807);
var inst_16812 = cljs.core.chunk_rest.call(null,inst_16807);
var inst_16813 = cljs.core.count.call(null,inst_16811);
var inst_16793 = inst_16812;
var inst_16794 = inst_16811;
var inst_16795 = inst_16813;
var inst_16796 = (0);
var state_16852__$1 = (function (){var statearr_16886 = state_16852;
(statearr_16886[(12)] = inst_16793);

(statearr_16886[(13)] = inst_16795);

(statearr_16886[(14)] = inst_16796);

(statearr_16886[(15)] = inst_16794);

return statearr_16886;
})();
var statearr_16887_16924 = state_16852__$1;
(statearr_16887_16924[(2)] = null);

(statearr_16887_16924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (10))){
var inst_16793 = (state_16852[(12)]);
var inst_16795 = (state_16852[(13)]);
var inst_16796 = (state_16852[(14)]);
var inst_16794 = (state_16852[(15)]);
var inst_16801 = cljs.core._nth.call(null,inst_16794,inst_16796);
var inst_16802 = cljs.core.async.muxch_STAR_.call(null,inst_16801);
var inst_16803 = cljs.core.async.close_BANG_.call(null,inst_16802);
var inst_16804 = (inst_16796 + (1));
var tmp16882 = inst_16793;
var tmp16883 = inst_16795;
var tmp16884 = inst_16794;
var inst_16793__$1 = tmp16882;
var inst_16794__$1 = tmp16884;
var inst_16795__$1 = tmp16883;
var inst_16796__$1 = inst_16804;
var state_16852__$1 = (function (){var statearr_16888 = state_16852;
(statearr_16888[(12)] = inst_16793__$1);

(statearr_16888[(17)] = inst_16803);

(statearr_16888[(13)] = inst_16795__$1);

(statearr_16888[(14)] = inst_16796__$1);

(statearr_16888[(15)] = inst_16794__$1);

return statearr_16888;
})();
var statearr_16889_16925 = state_16852__$1;
(statearr_16889_16925[(2)] = null);

(statearr_16889_16925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (18))){
var inst_16822 = (state_16852[(2)]);
var state_16852__$1 = state_16852;
var statearr_16890_16926 = state_16852__$1;
(statearr_16890_16926[(2)] = inst_16822);

(statearr_16890_16926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16853 === (8))){
var inst_16795 = (state_16852[(13)]);
var inst_16796 = (state_16852[(14)]);
var inst_16798 = (inst_16796 < inst_16795);
var inst_16799 = inst_16798;
var state_16852__$1 = state_16852;
if(cljs.core.truth_(inst_16799)){
var statearr_16891_16927 = state_16852__$1;
(statearr_16891_16927[(1)] = (10));

} else {
var statearr_16892_16928 = state_16852__$1;
(statearr_16892_16928[(1)] = (11));

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
});})(c__7304__auto___16900,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7304__auto___16900,mults,ensure_mult,p){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16896[(0)] = state_machine__7249__auto__);

(statearr_16896[(1)] = (1));

return statearr_16896;
});
var state_machine__7249__auto____1 = (function (state_16852){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16897){if((e16897 instanceof Object)){
var ex__7252__auto__ = e16897;
var statearr_16898_16929 = state_16852;
(statearr_16898_16929[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16930 = state_16852;
state_16852 = G__16930;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16852){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16900,mults,ensure_mult,p))
})();
var state__7306__auto__ = (function (){var statearr_16899 = f__7305__auto__.call(null);
(statearr_16899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16900);

return statearr_16899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16900,mults,ensure_mult,p))
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
var c__7304__auto___17067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17037){
var state_val_17038 = (state_17037[(1)]);
if((state_val_17038 === (7))){
var state_17037__$1 = state_17037;
var statearr_17039_17068 = state_17037__$1;
(statearr_17039_17068[(2)] = null);

(statearr_17039_17068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (1))){
var state_17037__$1 = state_17037;
var statearr_17040_17069 = state_17037__$1;
(statearr_17040_17069[(2)] = null);

(statearr_17040_17069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (4))){
var inst_17001 = (state_17037[(7)]);
var inst_17003 = (inst_17001 < cnt);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17003)){
var statearr_17041_17070 = state_17037__$1;
(statearr_17041_17070[(1)] = (6));

} else {
var statearr_17042_17071 = state_17037__$1;
(statearr_17042_17071[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (15))){
var inst_17033 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17043_17072 = state_17037__$1;
(statearr_17043_17072[(2)] = inst_17033);

(statearr_17043_17072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (13))){
var inst_17026 = cljs.core.async.close_BANG_.call(null,out);
var state_17037__$1 = state_17037;
var statearr_17044_17073 = state_17037__$1;
(statearr_17044_17073[(2)] = inst_17026);

(statearr_17044_17073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (6))){
var state_17037__$1 = state_17037;
var statearr_17045_17074 = state_17037__$1;
(statearr_17045_17074[(2)] = null);

(statearr_17045_17074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (3))){
var inst_17035 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17037__$1,inst_17035);
} else {
if((state_val_17038 === (12))){
var inst_17023 = (state_17037[(8)]);
var inst_17023__$1 = (state_17037[(2)]);
var inst_17024 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17023__$1);
var state_17037__$1 = (function (){var statearr_17046 = state_17037;
(statearr_17046[(8)] = inst_17023__$1);

return statearr_17046;
})();
if(cljs.core.truth_(inst_17024)){
var statearr_17047_17075 = state_17037__$1;
(statearr_17047_17075[(1)] = (13));

} else {
var statearr_17048_17076 = state_17037__$1;
(statearr_17048_17076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (2))){
var inst_17000 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17001 = (0);
var state_17037__$1 = (function (){var statearr_17049 = state_17037;
(statearr_17049[(7)] = inst_17001);

(statearr_17049[(9)] = inst_17000);

return statearr_17049;
})();
var statearr_17050_17077 = state_17037__$1;
(statearr_17050_17077[(2)] = null);

(statearr_17050_17077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (11))){
var inst_17001 = (state_17037[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17037,(10),Object,null,(9));
var inst_17010 = chs__$1.call(null,inst_17001);
var inst_17011 = done.call(null,inst_17001);
var inst_17012 = cljs.core.async.take_BANG_.call(null,inst_17010,inst_17011);
var state_17037__$1 = state_17037;
var statearr_17051_17078 = state_17037__$1;
(statearr_17051_17078[(2)] = inst_17012);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (9))){
var inst_17001 = (state_17037[(7)]);
var inst_17014 = (state_17037[(2)]);
var inst_17015 = (inst_17001 + (1));
var inst_17001__$1 = inst_17015;
var state_17037__$1 = (function (){var statearr_17052 = state_17037;
(statearr_17052[(7)] = inst_17001__$1);

(statearr_17052[(10)] = inst_17014);

return statearr_17052;
})();
var statearr_17053_17079 = state_17037__$1;
(statearr_17053_17079[(2)] = null);

(statearr_17053_17079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (5))){
var inst_17021 = (state_17037[(2)]);
var state_17037__$1 = (function (){var statearr_17054 = state_17037;
(statearr_17054[(11)] = inst_17021);

return statearr_17054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17037__$1,(12),dchan);
} else {
if((state_val_17038 === (14))){
var inst_17023 = (state_17037[(8)]);
var inst_17028 = cljs.core.apply.call(null,f,inst_17023);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17037__$1,(16),out,inst_17028);
} else {
if((state_val_17038 === (16))){
var inst_17030 = (state_17037[(2)]);
var state_17037__$1 = (function (){var statearr_17055 = state_17037;
(statearr_17055[(12)] = inst_17030);

return statearr_17055;
})();
var statearr_17056_17080 = state_17037__$1;
(statearr_17056_17080[(2)] = null);

(statearr_17056_17080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (10))){
var inst_17005 = (state_17037[(2)]);
var inst_17006 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17037__$1 = (function (){var statearr_17057 = state_17037;
(statearr_17057[(13)] = inst_17005);

return statearr_17057;
})();
var statearr_17058_17081 = state_17037__$1;
(statearr_17058_17081[(2)] = inst_17006);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (8))){
var inst_17019 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17059_17082 = state_17037__$1;
(statearr_17059_17082[(2)] = inst_17019);

(statearr_17059_17082[(1)] = (5));


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
});})(c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17063[(0)] = state_machine__7249__auto__);

(statearr_17063[(1)] = (1));

return statearr_17063;
});
var state_machine__7249__auto____1 = (function (state_17037){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17064){if((e17064 instanceof Object)){
var ex__7252__auto__ = e17064;
var statearr_17065_17083 = state_17037;
(statearr_17065_17083[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17084 = state_17037;
state_17037 = G__17084;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17037){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_17066 = f__7305__auto__.call(null);
(statearr_17066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17067);

return statearr_17066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17067,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7304__auto___17192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17192,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17192,out){
return (function (state_17168){
var state_val_17169 = (state_17168[(1)]);
if((state_val_17169 === (7))){
var inst_17147 = (state_17168[(7)]);
var inst_17148 = (state_17168[(8)]);
var inst_17147__$1 = (state_17168[(2)]);
var inst_17148__$1 = cljs.core.nth.call(null,inst_17147__$1,(0),null);
var inst_17149 = cljs.core.nth.call(null,inst_17147__$1,(1),null);
var inst_17150 = (inst_17148__$1 == null);
var state_17168__$1 = (function (){var statearr_17170 = state_17168;
(statearr_17170[(7)] = inst_17147__$1);

(statearr_17170[(8)] = inst_17148__$1);

(statearr_17170[(9)] = inst_17149);

return statearr_17170;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17171_17193 = state_17168__$1;
(statearr_17171_17193[(1)] = (8));

} else {
var statearr_17172_17194 = state_17168__$1;
(statearr_17172_17194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (1))){
var inst_17139 = cljs.core.vec.call(null,chs);
var inst_17140 = inst_17139;
var state_17168__$1 = (function (){var statearr_17173 = state_17168;
(statearr_17173[(10)] = inst_17140);

return statearr_17173;
})();
var statearr_17174_17195 = state_17168__$1;
(statearr_17174_17195[(2)] = null);

(statearr_17174_17195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (4))){
var inst_17140 = (state_17168[(10)]);
var state_17168__$1 = state_17168;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17168__$1,(7),inst_17140);
} else {
if((state_val_17169 === (6))){
var inst_17164 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
var statearr_17175_17196 = state_17168__$1;
(statearr_17175_17196[(2)] = inst_17164);

(statearr_17175_17196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (3))){
var inst_17166 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17168__$1,inst_17166);
} else {
if((state_val_17169 === (2))){
var inst_17140 = (state_17168[(10)]);
var inst_17142 = cljs.core.count.call(null,inst_17140);
var inst_17143 = (inst_17142 > (0));
var state_17168__$1 = state_17168;
if(cljs.core.truth_(inst_17143)){
var statearr_17177_17197 = state_17168__$1;
(statearr_17177_17197[(1)] = (4));

} else {
var statearr_17178_17198 = state_17168__$1;
(statearr_17178_17198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (11))){
var inst_17140 = (state_17168[(10)]);
var inst_17157 = (state_17168[(2)]);
var tmp17176 = inst_17140;
var inst_17140__$1 = tmp17176;
var state_17168__$1 = (function (){var statearr_17179 = state_17168;
(statearr_17179[(10)] = inst_17140__$1);

(statearr_17179[(11)] = inst_17157);

return statearr_17179;
})();
var statearr_17180_17199 = state_17168__$1;
(statearr_17180_17199[(2)] = null);

(statearr_17180_17199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (9))){
var inst_17148 = (state_17168[(8)]);
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17168__$1,(11),out,inst_17148);
} else {
if((state_val_17169 === (5))){
var inst_17162 = cljs.core.async.close_BANG_.call(null,out);
var state_17168__$1 = state_17168;
var statearr_17181_17200 = state_17168__$1;
(statearr_17181_17200[(2)] = inst_17162);

(statearr_17181_17200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (10))){
var inst_17160 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
var statearr_17182_17201 = state_17168__$1;
(statearr_17182_17201[(2)] = inst_17160);

(statearr_17182_17201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (8))){
var inst_17147 = (state_17168[(7)]);
var inst_17140 = (state_17168[(10)]);
var inst_17148 = (state_17168[(8)]);
var inst_17149 = (state_17168[(9)]);
var inst_17152 = (function (){var c = inst_17149;
var v = inst_17148;
var vec__17145 = inst_17147;
var cs = inst_17140;
return ((function (c,v,vec__17145,cs,inst_17147,inst_17140,inst_17148,inst_17149,state_val_17169,c__7304__auto___17192,out){
return (function (p1__17085_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17085_SHARP_);
});
;})(c,v,vec__17145,cs,inst_17147,inst_17140,inst_17148,inst_17149,state_val_17169,c__7304__auto___17192,out))
})();
var inst_17153 = cljs.core.filterv.call(null,inst_17152,inst_17140);
var inst_17140__$1 = inst_17153;
var state_17168__$1 = (function (){var statearr_17183 = state_17168;
(statearr_17183[(10)] = inst_17140__$1);

return statearr_17183;
})();
var statearr_17184_17202 = state_17168__$1;
(statearr_17184_17202[(2)] = null);

(statearr_17184_17202[(1)] = (2));


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
});})(c__7304__auto___17192,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17192,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17188[(0)] = state_machine__7249__auto__);

(statearr_17188[(1)] = (1));

return statearr_17188;
});
var state_machine__7249__auto____1 = (function (state_17168){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17189){if((e17189 instanceof Object)){
var ex__7252__auto__ = e17189;
var statearr_17190_17203 = state_17168;
(statearr_17190_17203[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17204 = state_17168;
state_17168 = G__17204;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17168){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17192,out))
})();
var state__7306__auto__ = (function (){var statearr_17191 = f__7305__auto__.call(null);
(statearr_17191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17192);

return statearr_17191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17192,out))
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
var c__7304__auto___17297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17297,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17297,out){
return (function (state_17274){
var state_val_17275 = (state_17274[(1)]);
if((state_val_17275 === (7))){
var inst_17256 = (state_17274[(7)]);
var inst_17256__$1 = (state_17274[(2)]);
var inst_17257 = (inst_17256__$1 == null);
var inst_17258 = cljs.core.not.call(null,inst_17257);
var state_17274__$1 = (function (){var statearr_17276 = state_17274;
(statearr_17276[(7)] = inst_17256__$1);

return statearr_17276;
})();
if(inst_17258){
var statearr_17277_17298 = state_17274__$1;
(statearr_17277_17298[(1)] = (8));

} else {
var statearr_17278_17299 = state_17274__$1;
(statearr_17278_17299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (1))){
var inst_17251 = (0);
var state_17274__$1 = (function (){var statearr_17279 = state_17274;
(statearr_17279[(8)] = inst_17251);

return statearr_17279;
})();
var statearr_17280_17300 = state_17274__$1;
(statearr_17280_17300[(2)] = null);

(statearr_17280_17300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (4))){
var state_17274__$1 = state_17274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17274__$1,(7),ch);
} else {
if((state_val_17275 === (6))){
var inst_17269 = (state_17274[(2)]);
var state_17274__$1 = state_17274;
var statearr_17281_17301 = state_17274__$1;
(statearr_17281_17301[(2)] = inst_17269);

(statearr_17281_17301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (3))){
var inst_17271 = (state_17274[(2)]);
var inst_17272 = cljs.core.async.close_BANG_.call(null,out);
var state_17274__$1 = (function (){var statearr_17282 = state_17274;
(statearr_17282[(9)] = inst_17271);

return statearr_17282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17274__$1,inst_17272);
} else {
if((state_val_17275 === (2))){
var inst_17251 = (state_17274[(8)]);
var inst_17253 = (inst_17251 < n);
var state_17274__$1 = state_17274;
if(cljs.core.truth_(inst_17253)){
var statearr_17283_17302 = state_17274__$1;
(statearr_17283_17302[(1)] = (4));

} else {
var statearr_17284_17303 = state_17274__$1;
(statearr_17284_17303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (11))){
var inst_17251 = (state_17274[(8)]);
var inst_17261 = (state_17274[(2)]);
var inst_17262 = (inst_17251 + (1));
var inst_17251__$1 = inst_17262;
var state_17274__$1 = (function (){var statearr_17285 = state_17274;
(statearr_17285[(8)] = inst_17251__$1);

(statearr_17285[(10)] = inst_17261);

return statearr_17285;
})();
var statearr_17286_17304 = state_17274__$1;
(statearr_17286_17304[(2)] = null);

(statearr_17286_17304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (9))){
var state_17274__$1 = state_17274;
var statearr_17287_17305 = state_17274__$1;
(statearr_17287_17305[(2)] = null);

(statearr_17287_17305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (5))){
var state_17274__$1 = state_17274;
var statearr_17288_17306 = state_17274__$1;
(statearr_17288_17306[(2)] = null);

(statearr_17288_17306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (10))){
var inst_17266 = (state_17274[(2)]);
var state_17274__$1 = state_17274;
var statearr_17289_17307 = state_17274__$1;
(statearr_17289_17307[(2)] = inst_17266);

(statearr_17289_17307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (8))){
var inst_17256 = (state_17274[(7)]);
var state_17274__$1 = state_17274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17274__$1,(11),out,inst_17256);
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
});})(c__7304__auto___17297,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17297,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17293[(0)] = state_machine__7249__auto__);

(statearr_17293[(1)] = (1));

return statearr_17293;
});
var state_machine__7249__auto____1 = (function (state_17274){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17294){if((e17294 instanceof Object)){
var ex__7252__auto__ = e17294;
var statearr_17295_17308 = state_17274;
(statearr_17295_17308[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17309 = state_17274;
state_17274 = G__17309;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17274){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17297,out))
})();
var state__7306__auto__ = (function (){var statearr_17296 = f__7305__auto__.call(null);
(statearr_17296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17297);

return statearr_17296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17297,out))
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
if(typeof cljs.core.async.t17317 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17317 = (function (ch,f,map_LT_,meta17318){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17318 = meta17318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17320 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17320 = (function (fn1,_,meta17318,map_LT_,f,ch,meta17321){
this.fn1 = fn1;
this._ = _;
this.meta17318 = meta17318;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17321 = meta17321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17320.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17310_SHARP_){
return f1.call(null,(((p1__17310_SHARP_ == null))?null:self__.f.call(null,p1__17310_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17322){
var self__ = this;
var _17322__$1 = this;
return self__.meta17321;
});})(___$1))
;

cljs.core.async.t17320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17322,meta17321__$1){
var self__ = this;
var _17322__$1 = this;
return (new cljs.core.async.t17320(self__.fn1,self__._,self__.meta17318,self__.map_LT_,self__.f,self__.ch,meta17321__$1));
});})(___$1))
;

cljs.core.async.t17320.cljs$lang$type = true;

cljs.core.async.t17320.cljs$lang$ctorStr = "cljs.core.async/t17320";

cljs.core.async.t17320.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17320");
});})(___$1))
;

cljs.core.async.__GT_t17320 = ((function (___$1){
return (function __GT_t17320(fn1__$1,___$2,meta17318__$1,map_LT___$1,f__$1,ch__$1,meta17321){
return (new cljs.core.async.t17320(fn1__$1,___$2,meta17318__$1,map_LT___$1,f__$1,ch__$1,meta17321));
});})(___$1))
;

}

return (new cljs.core.async.t17320(fn1,___$1,self__.meta17318,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17317.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17319){
var self__ = this;
var _17319__$1 = this;
return self__.meta17318;
});

cljs.core.async.t17317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17319,meta17318__$1){
var self__ = this;
var _17319__$1 = this;
return (new cljs.core.async.t17317(self__.ch,self__.f,self__.map_LT_,meta17318__$1));
});

cljs.core.async.t17317.cljs$lang$type = true;

cljs.core.async.t17317.cljs$lang$ctorStr = "cljs.core.async/t17317";

cljs.core.async.t17317.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17317");
});

cljs.core.async.__GT_t17317 = (function __GT_t17317(ch__$1,f__$1,map_LT___$1,meta17318){
return (new cljs.core.async.t17317(ch__$1,f__$1,map_LT___$1,meta17318));
});

}

return (new cljs.core.async.t17317(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17326 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17326 = (function (ch,f,map_GT_,meta17327){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17327 = meta17327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17328){
var self__ = this;
var _17328__$1 = this;
return self__.meta17327;
});

cljs.core.async.t17326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17328,meta17327__$1){
var self__ = this;
var _17328__$1 = this;
return (new cljs.core.async.t17326(self__.ch,self__.f,self__.map_GT_,meta17327__$1));
});

cljs.core.async.t17326.cljs$lang$type = true;

cljs.core.async.t17326.cljs$lang$ctorStr = "cljs.core.async/t17326";

cljs.core.async.t17326.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17326");
});

cljs.core.async.__GT_t17326 = (function __GT_t17326(ch__$1,f__$1,map_GT___$1,meta17327){
return (new cljs.core.async.t17326(ch__$1,f__$1,map_GT___$1,meta17327));
});

}

return (new cljs.core.async.t17326(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17332 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17332 = (function (ch,p,filter_GT_,meta17333){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17333 = meta17333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17334){
var self__ = this;
var _17334__$1 = this;
return self__.meta17333;
});

cljs.core.async.t17332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17334,meta17333__$1){
var self__ = this;
var _17334__$1 = this;
return (new cljs.core.async.t17332(self__.ch,self__.p,self__.filter_GT_,meta17333__$1));
});

cljs.core.async.t17332.cljs$lang$type = true;

cljs.core.async.t17332.cljs$lang$ctorStr = "cljs.core.async/t17332";

cljs.core.async.t17332.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17332");
});

cljs.core.async.__GT_t17332 = (function __GT_t17332(ch__$1,p__$1,filter_GT___$1,meta17333){
return (new cljs.core.async.t17332(ch__$1,p__$1,filter_GT___$1,meta17333));
});

}

return (new cljs.core.async.t17332(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___17417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17417,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17417,out){
return (function (state_17396){
var state_val_17397 = (state_17396[(1)]);
if((state_val_17397 === (7))){
var inst_17392 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17398_17418 = state_17396__$1;
(statearr_17398_17418[(2)] = inst_17392);

(statearr_17398_17418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (1))){
var state_17396__$1 = state_17396;
var statearr_17399_17419 = state_17396__$1;
(statearr_17399_17419[(2)] = null);

(statearr_17399_17419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (4))){
var inst_17378 = (state_17396[(7)]);
var inst_17378__$1 = (state_17396[(2)]);
var inst_17379 = (inst_17378__$1 == null);
var state_17396__$1 = (function (){var statearr_17400 = state_17396;
(statearr_17400[(7)] = inst_17378__$1);

return statearr_17400;
})();
if(cljs.core.truth_(inst_17379)){
var statearr_17401_17420 = state_17396__$1;
(statearr_17401_17420[(1)] = (5));

} else {
var statearr_17402_17421 = state_17396__$1;
(statearr_17402_17421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (6))){
var inst_17378 = (state_17396[(7)]);
var inst_17383 = p.call(null,inst_17378);
var state_17396__$1 = state_17396;
if(cljs.core.truth_(inst_17383)){
var statearr_17403_17422 = state_17396__$1;
(statearr_17403_17422[(1)] = (8));

} else {
var statearr_17404_17423 = state_17396__$1;
(statearr_17404_17423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (3))){
var inst_17394 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17396__$1,inst_17394);
} else {
if((state_val_17397 === (2))){
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17396__$1,(4),ch);
} else {
if((state_val_17397 === (11))){
var inst_17386 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17405_17424 = state_17396__$1;
(statearr_17405_17424[(2)] = inst_17386);

(statearr_17405_17424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (9))){
var state_17396__$1 = state_17396;
var statearr_17406_17425 = state_17396__$1;
(statearr_17406_17425[(2)] = null);

(statearr_17406_17425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (5))){
var inst_17381 = cljs.core.async.close_BANG_.call(null,out);
var state_17396__$1 = state_17396;
var statearr_17407_17426 = state_17396__$1;
(statearr_17407_17426[(2)] = inst_17381);

(statearr_17407_17426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (10))){
var inst_17389 = (state_17396[(2)]);
var state_17396__$1 = (function (){var statearr_17408 = state_17396;
(statearr_17408[(8)] = inst_17389);

return statearr_17408;
})();
var statearr_17409_17427 = state_17396__$1;
(statearr_17409_17427[(2)] = null);

(statearr_17409_17427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (8))){
var inst_17378 = (state_17396[(7)]);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17396__$1,(11),out,inst_17378);
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
});})(c__7304__auto___17417,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17417,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17413 = [null,null,null,null,null,null,null,null,null];
(statearr_17413[(0)] = state_machine__7249__auto__);

(statearr_17413[(1)] = (1));

return statearr_17413;
});
var state_machine__7249__auto____1 = (function (state_17396){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17414){if((e17414 instanceof Object)){
var ex__7252__auto__ = e17414;
var statearr_17415_17428 = state_17396;
(statearr_17415_17428[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17429 = state_17396;
state_17396 = G__17429;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17396){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17417,out))
})();
var state__7306__auto__ = (function (){var statearr_17416 = f__7305__auto__.call(null);
(statearr_17416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17417);

return statearr_17416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17417,out))
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
var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__){
return (function (state_17595){
var state_val_17596 = (state_17595[(1)]);
if((state_val_17596 === (7))){
var inst_17591 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17597_17638 = state_17595__$1;
(statearr_17597_17638[(2)] = inst_17591);

(statearr_17597_17638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (20))){
var inst_17561 = (state_17595[(7)]);
var inst_17572 = (state_17595[(2)]);
var inst_17573 = cljs.core.next.call(null,inst_17561);
var inst_17547 = inst_17573;
var inst_17548 = null;
var inst_17549 = (0);
var inst_17550 = (0);
var state_17595__$1 = (function (){var statearr_17598 = state_17595;
(statearr_17598[(8)] = inst_17550);

(statearr_17598[(9)] = inst_17549);

(statearr_17598[(10)] = inst_17572);

(statearr_17598[(11)] = inst_17548);

(statearr_17598[(12)] = inst_17547);

return statearr_17598;
})();
var statearr_17599_17639 = state_17595__$1;
(statearr_17599_17639[(2)] = null);

(statearr_17599_17639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (1))){
var state_17595__$1 = state_17595;
var statearr_17600_17640 = state_17595__$1;
(statearr_17600_17640[(2)] = null);

(statearr_17600_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (4))){
var inst_17536 = (state_17595[(13)]);
var inst_17536__$1 = (state_17595[(2)]);
var inst_17537 = (inst_17536__$1 == null);
var state_17595__$1 = (function (){var statearr_17601 = state_17595;
(statearr_17601[(13)] = inst_17536__$1);

return statearr_17601;
})();
if(cljs.core.truth_(inst_17537)){
var statearr_17602_17641 = state_17595__$1;
(statearr_17602_17641[(1)] = (5));

} else {
var statearr_17603_17642 = state_17595__$1;
(statearr_17603_17642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (15))){
var state_17595__$1 = state_17595;
var statearr_17607_17643 = state_17595__$1;
(statearr_17607_17643[(2)] = null);

(statearr_17607_17643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (21))){
var state_17595__$1 = state_17595;
var statearr_17608_17644 = state_17595__$1;
(statearr_17608_17644[(2)] = null);

(statearr_17608_17644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (13))){
var inst_17550 = (state_17595[(8)]);
var inst_17549 = (state_17595[(9)]);
var inst_17548 = (state_17595[(11)]);
var inst_17547 = (state_17595[(12)]);
var inst_17557 = (state_17595[(2)]);
var inst_17558 = (inst_17550 + (1));
var tmp17604 = inst_17549;
var tmp17605 = inst_17548;
var tmp17606 = inst_17547;
var inst_17547__$1 = tmp17606;
var inst_17548__$1 = tmp17605;
var inst_17549__$1 = tmp17604;
var inst_17550__$1 = inst_17558;
var state_17595__$1 = (function (){var statearr_17609 = state_17595;
(statearr_17609[(8)] = inst_17550__$1);

(statearr_17609[(9)] = inst_17549__$1);

(statearr_17609[(11)] = inst_17548__$1);

(statearr_17609[(14)] = inst_17557);

(statearr_17609[(12)] = inst_17547__$1);

return statearr_17609;
})();
var statearr_17610_17645 = state_17595__$1;
(statearr_17610_17645[(2)] = null);

(statearr_17610_17645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (22))){
var state_17595__$1 = state_17595;
var statearr_17611_17646 = state_17595__$1;
(statearr_17611_17646[(2)] = null);

(statearr_17611_17646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (6))){
var inst_17536 = (state_17595[(13)]);
var inst_17545 = f.call(null,inst_17536);
var inst_17546 = cljs.core.seq.call(null,inst_17545);
var inst_17547 = inst_17546;
var inst_17548 = null;
var inst_17549 = (0);
var inst_17550 = (0);
var state_17595__$1 = (function (){var statearr_17612 = state_17595;
(statearr_17612[(8)] = inst_17550);

(statearr_17612[(9)] = inst_17549);

(statearr_17612[(11)] = inst_17548);

(statearr_17612[(12)] = inst_17547);

return statearr_17612;
})();
var statearr_17613_17647 = state_17595__$1;
(statearr_17613_17647[(2)] = null);

(statearr_17613_17647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (17))){
var inst_17561 = (state_17595[(7)]);
var inst_17565 = cljs.core.chunk_first.call(null,inst_17561);
var inst_17566 = cljs.core.chunk_rest.call(null,inst_17561);
var inst_17567 = cljs.core.count.call(null,inst_17565);
var inst_17547 = inst_17566;
var inst_17548 = inst_17565;
var inst_17549 = inst_17567;
var inst_17550 = (0);
var state_17595__$1 = (function (){var statearr_17614 = state_17595;
(statearr_17614[(8)] = inst_17550);

(statearr_17614[(9)] = inst_17549);

(statearr_17614[(11)] = inst_17548);

(statearr_17614[(12)] = inst_17547);

return statearr_17614;
})();
var statearr_17615_17648 = state_17595__$1;
(statearr_17615_17648[(2)] = null);

(statearr_17615_17648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (3))){
var inst_17593 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17595__$1,inst_17593);
} else {
if((state_val_17596 === (12))){
var inst_17581 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17616_17649 = state_17595__$1;
(statearr_17616_17649[(2)] = inst_17581);

(statearr_17616_17649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (2))){
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17595__$1,(4),in$);
} else {
if((state_val_17596 === (23))){
var inst_17589 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17617_17650 = state_17595__$1;
(statearr_17617_17650[(2)] = inst_17589);

(statearr_17617_17650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (19))){
var inst_17576 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17618_17651 = state_17595__$1;
(statearr_17618_17651[(2)] = inst_17576);

(statearr_17618_17651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (11))){
var inst_17561 = (state_17595[(7)]);
var inst_17547 = (state_17595[(12)]);
var inst_17561__$1 = cljs.core.seq.call(null,inst_17547);
var state_17595__$1 = (function (){var statearr_17619 = state_17595;
(statearr_17619[(7)] = inst_17561__$1);

return statearr_17619;
})();
if(inst_17561__$1){
var statearr_17620_17652 = state_17595__$1;
(statearr_17620_17652[(1)] = (14));

} else {
var statearr_17621_17653 = state_17595__$1;
(statearr_17621_17653[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (9))){
var inst_17583 = (state_17595[(2)]);
var inst_17584 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17595__$1 = (function (){var statearr_17622 = state_17595;
(statearr_17622[(15)] = inst_17583);

return statearr_17622;
})();
if(cljs.core.truth_(inst_17584)){
var statearr_17623_17654 = state_17595__$1;
(statearr_17623_17654[(1)] = (21));

} else {
var statearr_17624_17655 = state_17595__$1;
(statearr_17624_17655[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (5))){
var inst_17539 = cljs.core.async.close_BANG_.call(null,out);
var state_17595__$1 = state_17595;
var statearr_17625_17656 = state_17595__$1;
(statearr_17625_17656[(2)] = inst_17539);

(statearr_17625_17656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (14))){
var inst_17561 = (state_17595[(7)]);
var inst_17563 = cljs.core.chunked_seq_QMARK_.call(null,inst_17561);
var state_17595__$1 = state_17595;
if(inst_17563){
var statearr_17626_17657 = state_17595__$1;
(statearr_17626_17657[(1)] = (17));

} else {
var statearr_17627_17658 = state_17595__$1;
(statearr_17627_17658[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (16))){
var inst_17579 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17628_17659 = state_17595__$1;
(statearr_17628_17659[(2)] = inst_17579);

(statearr_17628_17659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (10))){
var inst_17550 = (state_17595[(8)]);
var inst_17548 = (state_17595[(11)]);
var inst_17555 = cljs.core._nth.call(null,inst_17548,inst_17550);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17595__$1,(13),out,inst_17555);
} else {
if((state_val_17596 === (18))){
var inst_17561 = (state_17595[(7)]);
var inst_17570 = cljs.core.first.call(null,inst_17561);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17595__$1,(20),out,inst_17570);
} else {
if((state_val_17596 === (8))){
var inst_17550 = (state_17595[(8)]);
var inst_17549 = (state_17595[(9)]);
var inst_17552 = (inst_17550 < inst_17549);
var inst_17553 = inst_17552;
var state_17595__$1 = state_17595;
if(cljs.core.truth_(inst_17553)){
var statearr_17629_17660 = state_17595__$1;
(statearr_17629_17660[(1)] = (10));

} else {
var statearr_17630_17661 = state_17595__$1;
(statearr_17630_17661[(1)] = (11));

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
});})(c__7304__auto__))
;
return ((function (switch__7248__auto__,c__7304__auto__){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17634[(0)] = state_machine__7249__auto__);

(statearr_17634[(1)] = (1));

return statearr_17634;
});
var state_machine__7249__auto____1 = (function (state_17595){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17635){if((e17635 instanceof Object)){
var ex__7252__auto__ = e17635;
var statearr_17636_17662 = state_17595;
(statearr_17636_17662[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17663 = state_17595;
state_17595 = G__17663;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17595){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_17637 = f__7305__auto__.call(null);
(statearr_17637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_17637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto__))
);

return c__7304__auto__;
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
var c__7304__auto___17760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17760,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17760,out){
return (function (state_17735){
var state_val_17736 = (state_17735[(1)]);
if((state_val_17736 === (7))){
var inst_17730 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17737_17761 = state_17735__$1;
(statearr_17737_17761[(2)] = inst_17730);

(statearr_17737_17761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (1))){
var inst_17712 = null;
var state_17735__$1 = (function (){var statearr_17738 = state_17735;
(statearr_17738[(7)] = inst_17712);

return statearr_17738;
})();
var statearr_17739_17762 = state_17735__$1;
(statearr_17739_17762[(2)] = null);

(statearr_17739_17762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (4))){
var inst_17715 = (state_17735[(8)]);
var inst_17715__$1 = (state_17735[(2)]);
var inst_17716 = (inst_17715__$1 == null);
var inst_17717 = cljs.core.not.call(null,inst_17716);
var state_17735__$1 = (function (){var statearr_17740 = state_17735;
(statearr_17740[(8)] = inst_17715__$1);

return statearr_17740;
})();
if(inst_17717){
var statearr_17741_17763 = state_17735__$1;
(statearr_17741_17763[(1)] = (5));

} else {
var statearr_17742_17764 = state_17735__$1;
(statearr_17742_17764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (6))){
var state_17735__$1 = state_17735;
var statearr_17743_17765 = state_17735__$1;
(statearr_17743_17765[(2)] = null);

(statearr_17743_17765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (3))){
var inst_17732 = (state_17735[(2)]);
var inst_17733 = cljs.core.async.close_BANG_.call(null,out);
var state_17735__$1 = (function (){var statearr_17744 = state_17735;
(statearr_17744[(9)] = inst_17732);

return statearr_17744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17735__$1,inst_17733);
} else {
if((state_val_17736 === (2))){
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17735__$1,(4),ch);
} else {
if((state_val_17736 === (11))){
var inst_17715 = (state_17735[(8)]);
var inst_17724 = (state_17735[(2)]);
var inst_17712 = inst_17715;
var state_17735__$1 = (function (){var statearr_17745 = state_17735;
(statearr_17745[(7)] = inst_17712);

(statearr_17745[(10)] = inst_17724);

return statearr_17745;
})();
var statearr_17746_17766 = state_17735__$1;
(statearr_17746_17766[(2)] = null);

(statearr_17746_17766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (9))){
var inst_17715 = (state_17735[(8)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17735__$1,(11),out,inst_17715);
} else {
if((state_val_17736 === (5))){
var inst_17712 = (state_17735[(7)]);
var inst_17715 = (state_17735[(8)]);
var inst_17719 = cljs.core._EQ_.call(null,inst_17715,inst_17712);
var state_17735__$1 = state_17735;
if(inst_17719){
var statearr_17748_17767 = state_17735__$1;
(statearr_17748_17767[(1)] = (8));

} else {
var statearr_17749_17768 = state_17735__$1;
(statearr_17749_17768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (10))){
var inst_17727 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17750_17769 = state_17735__$1;
(statearr_17750_17769[(2)] = inst_17727);

(statearr_17750_17769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (8))){
var inst_17712 = (state_17735[(7)]);
var tmp17747 = inst_17712;
var inst_17712__$1 = tmp17747;
var state_17735__$1 = (function (){var statearr_17751 = state_17735;
(statearr_17751[(7)] = inst_17712__$1);

return statearr_17751;
})();
var statearr_17752_17770 = state_17735__$1;
(statearr_17752_17770[(2)] = null);

(statearr_17752_17770[(1)] = (2));


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
});})(c__7304__auto___17760,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17760,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17756[(0)] = state_machine__7249__auto__);

(statearr_17756[(1)] = (1));

return statearr_17756;
});
var state_machine__7249__auto____1 = (function (state_17735){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17757){if((e17757 instanceof Object)){
var ex__7252__auto__ = e17757;
var statearr_17758_17771 = state_17735;
(statearr_17758_17771[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17772 = state_17735;
state_17735 = G__17772;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17735){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17760,out))
})();
var state__7306__auto__ = (function (){var statearr_17759 = f__7305__auto__.call(null);
(statearr_17759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17760);

return statearr_17759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17760,out))
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
var c__7304__auto___17907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17907,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17907,out){
return (function (state_17877){
var state_val_17878 = (state_17877[(1)]);
if((state_val_17878 === (7))){
var inst_17873 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17879_17908 = state_17877__$1;
(statearr_17879_17908[(2)] = inst_17873);

(statearr_17879_17908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (1))){
var inst_17840 = (new Array(n));
var inst_17841 = inst_17840;
var inst_17842 = (0);
var state_17877__$1 = (function (){var statearr_17880 = state_17877;
(statearr_17880[(7)] = inst_17842);

(statearr_17880[(8)] = inst_17841);

return statearr_17880;
})();
var statearr_17881_17909 = state_17877__$1;
(statearr_17881_17909[(2)] = null);

(statearr_17881_17909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (4))){
var inst_17845 = (state_17877[(9)]);
var inst_17845__$1 = (state_17877[(2)]);
var inst_17846 = (inst_17845__$1 == null);
var inst_17847 = cljs.core.not.call(null,inst_17846);
var state_17877__$1 = (function (){var statearr_17882 = state_17877;
(statearr_17882[(9)] = inst_17845__$1);

return statearr_17882;
})();
if(inst_17847){
var statearr_17883_17910 = state_17877__$1;
(statearr_17883_17910[(1)] = (5));

} else {
var statearr_17884_17911 = state_17877__$1;
(statearr_17884_17911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (15))){
var inst_17867 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17885_17912 = state_17877__$1;
(statearr_17885_17912[(2)] = inst_17867);

(statearr_17885_17912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (13))){
var state_17877__$1 = state_17877;
var statearr_17886_17913 = state_17877__$1;
(statearr_17886_17913[(2)] = null);

(statearr_17886_17913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (6))){
var inst_17842 = (state_17877[(7)]);
var inst_17863 = (inst_17842 > (0));
var state_17877__$1 = state_17877;
if(cljs.core.truth_(inst_17863)){
var statearr_17887_17914 = state_17877__$1;
(statearr_17887_17914[(1)] = (12));

} else {
var statearr_17888_17915 = state_17877__$1;
(statearr_17888_17915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (3))){
var inst_17875 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17877__$1,inst_17875);
} else {
if((state_val_17878 === (12))){
var inst_17841 = (state_17877[(8)]);
var inst_17865 = cljs.core.vec.call(null,inst_17841);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17877__$1,(15),out,inst_17865);
} else {
if((state_val_17878 === (2))){
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17877__$1,(4),ch);
} else {
if((state_val_17878 === (11))){
var inst_17857 = (state_17877[(2)]);
var inst_17858 = (new Array(n));
var inst_17841 = inst_17858;
var inst_17842 = (0);
var state_17877__$1 = (function (){var statearr_17889 = state_17877;
(statearr_17889[(7)] = inst_17842);

(statearr_17889[(10)] = inst_17857);

(statearr_17889[(8)] = inst_17841);

return statearr_17889;
})();
var statearr_17890_17916 = state_17877__$1;
(statearr_17890_17916[(2)] = null);

(statearr_17890_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (9))){
var inst_17841 = (state_17877[(8)]);
var inst_17855 = cljs.core.vec.call(null,inst_17841);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17877__$1,(11),out,inst_17855);
} else {
if((state_val_17878 === (5))){
var inst_17842 = (state_17877[(7)]);
var inst_17841 = (state_17877[(8)]);
var inst_17845 = (state_17877[(9)]);
var inst_17850 = (state_17877[(11)]);
var inst_17849 = (inst_17841[inst_17842] = inst_17845);
var inst_17850__$1 = (inst_17842 + (1));
var inst_17851 = (inst_17850__$1 < n);
var state_17877__$1 = (function (){var statearr_17891 = state_17877;
(statearr_17891[(12)] = inst_17849);

(statearr_17891[(11)] = inst_17850__$1);

return statearr_17891;
})();
if(cljs.core.truth_(inst_17851)){
var statearr_17892_17917 = state_17877__$1;
(statearr_17892_17917[(1)] = (8));

} else {
var statearr_17893_17918 = state_17877__$1;
(statearr_17893_17918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (14))){
var inst_17870 = (state_17877[(2)]);
var inst_17871 = cljs.core.async.close_BANG_.call(null,out);
var state_17877__$1 = (function (){var statearr_17895 = state_17877;
(statearr_17895[(13)] = inst_17870);

return statearr_17895;
})();
var statearr_17896_17919 = state_17877__$1;
(statearr_17896_17919[(2)] = inst_17871);

(statearr_17896_17919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (10))){
var inst_17861 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17897_17920 = state_17877__$1;
(statearr_17897_17920[(2)] = inst_17861);

(statearr_17897_17920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (8))){
var inst_17841 = (state_17877[(8)]);
var inst_17850 = (state_17877[(11)]);
var tmp17894 = inst_17841;
var inst_17841__$1 = tmp17894;
var inst_17842 = inst_17850;
var state_17877__$1 = (function (){var statearr_17898 = state_17877;
(statearr_17898[(7)] = inst_17842);

(statearr_17898[(8)] = inst_17841__$1);

return statearr_17898;
})();
var statearr_17899_17921 = state_17877__$1;
(statearr_17899_17921[(2)] = null);

(statearr_17899_17921[(1)] = (2));


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
});})(c__7304__auto___17907,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17907,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17903[(0)] = state_machine__7249__auto__);

(statearr_17903[(1)] = (1));

return statearr_17903;
});
var state_machine__7249__auto____1 = (function (state_17877){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17904){if((e17904 instanceof Object)){
var ex__7252__auto__ = e17904;
var statearr_17905_17922 = state_17877;
(statearr_17905_17922[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17923 = state_17877;
state_17877 = G__17923;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17907,out))
})();
var state__7306__auto__ = (function (){var statearr_17906 = f__7305__auto__.call(null);
(statearr_17906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17907);

return statearr_17906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17907,out))
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
var c__7304__auto___18066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___18066,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___18066,out){
return (function (state_18036){
var state_val_18037 = (state_18036[(1)]);
if((state_val_18037 === (7))){
var inst_18032 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18038_18067 = state_18036__$1;
(statearr_18038_18067[(2)] = inst_18032);

(statearr_18038_18067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (1))){
var inst_17995 = [];
var inst_17996 = inst_17995;
var inst_17997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18036__$1 = (function (){var statearr_18039 = state_18036;
(statearr_18039[(7)] = inst_17997);

(statearr_18039[(8)] = inst_17996);

return statearr_18039;
})();
var statearr_18040_18068 = state_18036__$1;
(statearr_18040_18068[(2)] = null);

(statearr_18040_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (4))){
var inst_18000 = (state_18036[(9)]);
var inst_18000__$1 = (state_18036[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var inst_18002 = cljs.core.not.call(null,inst_18001);
var state_18036__$1 = (function (){var statearr_18041 = state_18036;
(statearr_18041[(9)] = inst_18000__$1);

return statearr_18041;
})();
if(inst_18002){
var statearr_18042_18069 = state_18036__$1;
(statearr_18042_18069[(1)] = (5));

} else {
var statearr_18043_18070 = state_18036__$1;
(statearr_18043_18070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (15))){
var inst_18026 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18044_18071 = state_18036__$1;
(statearr_18044_18071[(2)] = inst_18026);

(statearr_18044_18071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (13))){
var state_18036__$1 = state_18036;
var statearr_18045_18072 = state_18036__$1;
(statearr_18045_18072[(2)] = null);

(statearr_18045_18072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (6))){
var inst_17996 = (state_18036[(8)]);
var inst_18021 = inst_17996.length;
var inst_18022 = (inst_18021 > (0));
var state_18036__$1 = state_18036;
if(cljs.core.truth_(inst_18022)){
var statearr_18046_18073 = state_18036__$1;
(statearr_18046_18073[(1)] = (12));

} else {
var statearr_18047_18074 = state_18036__$1;
(statearr_18047_18074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (3))){
var inst_18034 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18036__$1,inst_18034);
} else {
if((state_val_18037 === (12))){
var inst_17996 = (state_18036[(8)]);
var inst_18024 = cljs.core.vec.call(null,inst_17996);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(15),out,inst_18024);
} else {
if((state_val_18037 === (2))){
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18036__$1,(4),ch);
} else {
if((state_val_18037 === (11))){
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18014 = (state_18036[(2)]);
var inst_18015 = [];
var inst_18016 = inst_18015.push(inst_18000);
var inst_17996 = inst_18015;
var inst_17997 = inst_18004;
var state_18036__$1 = (function (){var statearr_18048 = state_18036;
(statearr_18048[(7)] = inst_17997);

(statearr_18048[(8)] = inst_17996);

(statearr_18048[(11)] = inst_18014);

(statearr_18048[(12)] = inst_18016);

return statearr_18048;
})();
var statearr_18049_18075 = state_18036__$1;
(statearr_18049_18075[(2)] = null);

(statearr_18049_18075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (9))){
var inst_17996 = (state_18036[(8)]);
var inst_18012 = cljs.core.vec.call(null,inst_17996);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(11),out,inst_18012);
} else {
if((state_val_18037 === (5))){
var inst_17997 = (state_18036[(7)]);
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18004__$1 = f.call(null,inst_18000);
var inst_18005 = cljs.core._EQ_.call(null,inst_18004__$1,inst_17997);
var inst_18006 = cljs.core.keyword_identical_QMARK_.call(null,inst_17997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18007 = (inst_18005) || (inst_18006);
var state_18036__$1 = (function (){var statearr_18050 = state_18036;
(statearr_18050[(10)] = inst_18004__$1);

return statearr_18050;
})();
if(cljs.core.truth_(inst_18007)){
var statearr_18051_18076 = state_18036__$1;
(statearr_18051_18076[(1)] = (8));

} else {
var statearr_18052_18077 = state_18036__$1;
(statearr_18052_18077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (14))){
var inst_18029 = (state_18036[(2)]);
var inst_18030 = cljs.core.async.close_BANG_.call(null,out);
var state_18036__$1 = (function (){var statearr_18054 = state_18036;
(statearr_18054[(13)] = inst_18029);

return statearr_18054;
})();
var statearr_18055_18078 = state_18036__$1;
(statearr_18055_18078[(2)] = inst_18030);

(statearr_18055_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (10))){
var inst_18019 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18056_18079 = state_18036__$1;
(statearr_18056_18079[(2)] = inst_18019);

(statearr_18056_18079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (8))){
var inst_17996 = (state_18036[(8)]);
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18009 = inst_17996.push(inst_18000);
var tmp18053 = inst_17996;
var inst_17996__$1 = tmp18053;
var inst_17997 = inst_18004;
var state_18036__$1 = (function (){var statearr_18057 = state_18036;
(statearr_18057[(7)] = inst_17997);

(statearr_18057[(8)] = inst_17996__$1);

(statearr_18057[(14)] = inst_18009);

return statearr_18057;
})();
var statearr_18058_18080 = state_18036__$1;
(statearr_18058_18080[(2)] = null);

(statearr_18058_18080[(1)] = (2));


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
});})(c__7304__auto___18066,out))
;
return ((function (switch__7248__auto__,c__7304__auto___18066,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = state_machine__7249__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var state_machine__7249__auto____1 = (function (state_18036){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_18036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__7252__auto__ = e18063;
var statearr_18064_18081 = state_18036;
(statearr_18064_18081[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18082 = state_18036;
state_18036 = G__18082;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_18036){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_18036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___18066,out))
})();
var state__7306__auto__ = (function (){var statearr_18065 = f__7305__auto__.call(null);
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___18066);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___18066,out))
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