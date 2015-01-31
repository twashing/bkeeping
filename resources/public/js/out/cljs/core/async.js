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
if(typeof cljs.core.async.t1274516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1274516 = (function (f,fn_handler,meta1274517){
this.f = f;
this.fn_handler = fn_handler;
this.meta1274517 = meta1274517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1274516.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1274516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t1274516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t1274516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1274518){
var self__ = this;
var _1274518__$1 = this;
return self__.meta1274517;
});

cljs.core.async.t1274516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1274518,meta1274517__$1){
var self__ = this;
var _1274518__$1 = this;
return (new cljs.core.async.t1274516(self__.f,self__.fn_handler,meta1274517__$1));
});

cljs.core.async.t1274516.cljs$lang$type = true;

cljs.core.async.t1274516.cljs$lang$ctorStr = "cljs.core.async/t1274516";

cljs.core.async.t1274516.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1274516");
});

cljs.core.async.__GT_t1274516 = (function __GT_t1274516(f__$1,fn_handler__$1,meta1274517){
return (new cljs.core.async.t1274516(f__$1,fn_handler__$1,meta1274517));
});

}

return (new cljs.core.async.t1274516(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__1274520 = buff;
if(G__1274520){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__1274520.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__1274520.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1274520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1274520);
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
var val_1274521 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1274521);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1274521,ret){
return (function (){
return fn1.call(null,val_1274521);
});})(val_1274521,ret))
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
var n__4509__auto___1274522 = n;
var x_1274523 = (0);
while(true){
if((x_1274523 < n__4509__auto___1274522)){
(a[x_1274523] = (0));

var G__1274524 = (x_1274523 + (1));
x_1274523 = G__1274524;
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

var G__1274525 = (i + (1));
i = G__1274525;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t1274529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1274529 = (function (flag,alt_flag,meta1274530){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta1274530 = meta1274530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1274529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1274529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t1274529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t1274529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1274531){
var self__ = this;
var _1274531__$1 = this;
return self__.meta1274530;
});})(flag))
;

cljs.core.async.t1274529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1274531,meta1274530__$1){
var self__ = this;
var _1274531__$1 = this;
return (new cljs.core.async.t1274529(self__.flag,self__.alt_flag,meta1274530__$1));
});})(flag))
;

cljs.core.async.t1274529.cljs$lang$type = true;

cljs.core.async.t1274529.cljs$lang$ctorStr = "cljs.core.async/t1274529";

cljs.core.async.t1274529.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1274529");
});})(flag))
;

cljs.core.async.__GT_t1274529 = ((function (flag){
return (function __GT_t1274529(flag__$1,alt_flag__$1,meta1274530){
return (new cljs.core.async.t1274529(flag__$1,alt_flag__$1,meta1274530));
});})(flag))
;

}

return (new cljs.core.async.t1274529(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t1274535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1274535 = (function (cb,flag,alt_handler,meta1274536){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta1274536 = meta1274536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1274535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1274535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t1274535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t1274535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1274537){
var self__ = this;
var _1274537__$1 = this;
return self__.meta1274536;
});

cljs.core.async.t1274535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1274537,meta1274536__$1){
var self__ = this;
var _1274537__$1 = this;
return (new cljs.core.async.t1274535(self__.cb,self__.flag,self__.alt_handler,meta1274536__$1));
});

cljs.core.async.t1274535.cljs$lang$type = true;

cljs.core.async.t1274535.cljs$lang$ctorStr = "cljs.core.async/t1274535";

cljs.core.async.t1274535.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1274535");
});

cljs.core.async.__GT_t1274535 = (function __GT_t1274535(cb__$1,flag__$1,alt_handler__$1,meta1274536){
return (new cljs.core.async.t1274535(cb__$1,flag__$1,alt_handler__$1,meta1274536));
});

}

return (new cljs.core.async.t1274535(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__1274538_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1274538_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1274539_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1274539_SHARP_,port], null));
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
var G__1274540 = (i + (1));
i = G__1274540;
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
var alts_BANG___delegate = function (ports,p__1274541){
var map__1274543 = p__1274541;
var map__1274543__$1 = ((cljs.core.seq_QMARK_.call(null,map__1274543))?cljs.core.apply.call(null,cljs.core.hash_map,map__1274543):map__1274543);
var opts = map__1274543__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__1274541 = null;
if (arguments.length > 1) {
  p__1274541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__1274541);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__1274544){
var ports = cljs.core.first(arglist__1274544);
var p__1274541 = cljs.core.rest(arglist__1274544);
return alts_BANG___delegate(ports,p__1274541);
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
var c__9199__auto___1274639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1274639){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1274639){
return (function (state_1274615){
var state_val_1274616 = (state_1274615[(1)]);
if((state_val_1274616 === (7))){
var inst_1274611 = (state_1274615[(2)]);
var state_1274615__$1 = state_1274615;
var statearr_1274617_1274640 = state_1274615__$1;
(statearr_1274617_1274640[(2)] = inst_1274611);

(statearr_1274617_1274640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (1))){
var state_1274615__$1 = state_1274615;
var statearr_1274618_1274641 = state_1274615__$1;
(statearr_1274618_1274641[(2)] = null);

(statearr_1274618_1274641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (4))){
var inst_1274594 = (state_1274615[(7)]);
var inst_1274594__$1 = (state_1274615[(2)]);
var inst_1274595 = (inst_1274594__$1 == null);
var state_1274615__$1 = (function (){var statearr_1274619 = state_1274615;
(statearr_1274619[(7)] = inst_1274594__$1);

return statearr_1274619;
})();
if(cljs.core.truth_(inst_1274595)){
var statearr_1274620_1274642 = state_1274615__$1;
(statearr_1274620_1274642[(1)] = (5));

} else {
var statearr_1274621_1274643 = state_1274615__$1;
(statearr_1274621_1274643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (13))){
var state_1274615__$1 = state_1274615;
var statearr_1274622_1274644 = state_1274615__$1;
(statearr_1274622_1274644[(2)] = null);

(statearr_1274622_1274644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (6))){
var inst_1274594 = (state_1274615[(7)]);
var state_1274615__$1 = state_1274615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1274615__$1,(11),to,inst_1274594);
} else {
if((state_val_1274616 === (3))){
var inst_1274613 = (state_1274615[(2)]);
var state_1274615__$1 = state_1274615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274615__$1,inst_1274613);
} else {
if((state_val_1274616 === (12))){
var state_1274615__$1 = state_1274615;
var statearr_1274623_1274645 = state_1274615__$1;
(statearr_1274623_1274645[(2)] = null);

(statearr_1274623_1274645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (2))){
var state_1274615__$1 = state_1274615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274615__$1,(4),from);
} else {
if((state_val_1274616 === (11))){
var inst_1274604 = (state_1274615[(2)]);
var state_1274615__$1 = state_1274615;
if(cljs.core.truth_(inst_1274604)){
var statearr_1274624_1274646 = state_1274615__$1;
(statearr_1274624_1274646[(1)] = (12));

} else {
var statearr_1274625_1274647 = state_1274615__$1;
(statearr_1274625_1274647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (9))){
var state_1274615__$1 = state_1274615;
var statearr_1274626_1274648 = state_1274615__$1;
(statearr_1274626_1274648[(2)] = null);

(statearr_1274626_1274648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (5))){
var state_1274615__$1 = state_1274615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1274627_1274649 = state_1274615__$1;
(statearr_1274627_1274649[(1)] = (8));

} else {
var statearr_1274628_1274650 = state_1274615__$1;
(statearr_1274628_1274650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (14))){
var inst_1274609 = (state_1274615[(2)]);
var state_1274615__$1 = state_1274615;
var statearr_1274629_1274651 = state_1274615__$1;
(statearr_1274629_1274651[(2)] = inst_1274609);

(statearr_1274629_1274651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (10))){
var inst_1274601 = (state_1274615[(2)]);
var state_1274615__$1 = state_1274615;
var statearr_1274630_1274652 = state_1274615__$1;
(statearr_1274630_1274652[(2)] = inst_1274601);

(statearr_1274630_1274652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274616 === (8))){
var inst_1274598 = cljs.core.async.close_BANG_.call(null,to);
var state_1274615__$1 = state_1274615;
var statearr_1274631_1274653 = state_1274615__$1;
(statearr_1274631_1274653[(2)] = inst_1274598);

(statearr_1274631_1274653[(1)] = (10));


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
});})(c__9199__auto___1274639))
;
return ((function (switch__9184__auto__,c__9199__auto___1274639){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1274635 = [null,null,null,null,null,null,null,null];
(statearr_1274635[(0)] = state_machine__9185__auto__);

(statearr_1274635[(1)] = (1));

return statearr_1274635;
});
var state_machine__9185__auto____1 = (function (state_1274615){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1274636){if((e1274636 instanceof Object)){
var ex__9188__auto__ = e1274636;
var statearr_1274637_1274654 = state_1274615;
(statearr_1274637_1274654[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1274636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1274655 = state_1274615;
state_1274615 = G__1274655;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274615){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1274639))
})();
var state__9201__auto__ = (function (){var statearr_1274638 = f__9200__auto__.call(null);
(statearr_1274638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1274639);

return statearr_1274638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1274639))
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
return (function (p__1274839){
var vec__1274840 = p__1274839;
var v = cljs.core.nth.call(null,vec__1274840,(0),null);
var p = cljs.core.nth.call(null,vec__1274840,(1),null);
var job = vec__1274840;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___1275022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results){
return (function (state_1274845){
var state_val_1274846 = (state_1274845[(1)]);
if((state_val_1274846 === (2))){
var inst_1274842 = (state_1274845[(2)]);
var inst_1274843 = cljs.core.async.close_BANG_.call(null,res);
var state_1274845__$1 = (function (){var statearr_1274847 = state_1274845;
(statearr_1274847[(7)] = inst_1274842);

return statearr_1274847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274845__$1,inst_1274843);
} else {
if((state_val_1274846 === (1))){
var state_1274845__$1 = state_1274845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1274845__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1274851 = [null,null,null,null,null,null,null,null];
(statearr_1274851[(0)] = state_machine__9185__auto__);

(statearr_1274851[(1)] = (1));

return statearr_1274851;
});
var state_machine__9185__auto____1 = (function (state_1274845){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1274852){if((e1274852 instanceof Object)){
var ex__9188__auto__ = e1274852;
var statearr_1274853_1275023 = state_1274845;
(statearr_1274853_1275023[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1274852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275024 = state_1274845;
state_1274845 = G__1275024;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274845){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_1274854 = f__9200__auto__.call(null);
(statearr_1274854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275022);

return statearr_1274854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1275022,res,vec__1274840,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1274855){
var vec__1274856 = p__1274855;
var v = cljs.core.nth.call(null,vec__1274856,(0),null);
var p = cljs.core.nth.call(null,vec__1274856,(1),null);
var job = vec__1274856;
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
var n__4509__auto___1275025 = n;
var __1275026 = (0);
while(true){
if((__1275026 < n__4509__auto___1275025)){
var G__1274857_1275027 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1274857_1275027) {
case "async":
var c__9199__auto___1275029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1275026,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1275026,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function (state_1274870){
var state_val_1274871 = (state_1274870[(1)]);
if((state_val_1274871 === (7))){
var inst_1274866 = (state_1274870[(2)]);
var state_1274870__$1 = state_1274870;
var statearr_1274872_1275030 = state_1274870__$1;
(statearr_1274872_1275030[(2)] = inst_1274866);

(statearr_1274872_1275030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274871 === (6))){
var state_1274870__$1 = state_1274870;
var statearr_1274873_1275031 = state_1274870__$1;
(statearr_1274873_1275031[(2)] = null);

(statearr_1274873_1275031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274871 === (5))){
var state_1274870__$1 = state_1274870;
var statearr_1274874_1275032 = state_1274870__$1;
(statearr_1274874_1275032[(2)] = null);

(statearr_1274874_1275032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274871 === (4))){
var inst_1274860 = (state_1274870[(2)]);
var inst_1274861 = async.call(null,inst_1274860);
var state_1274870__$1 = state_1274870;
if(cljs.core.truth_(inst_1274861)){
var statearr_1274875_1275033 = state_1274870__$1;
(statearr_1274875_1275033[(1)] = (5));

} else {
var statearr_1274876_1275034 = state_1274870__$1;
(statearr_1274876_1275034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274871 === (3))){
var inst_1274868 = (state_1274870[(2)]);
var state_1274870__$1 = state_1274870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274870__$1,inst_1274868);
} else {
if((state_val_1274871 === (2))){
var state_1274870__$1 = state_1274870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274870__$1,(4),jobs);
} else {
if((state_val_1274871 === (1))){
var state_1274870__$1 = state_1274870;
var statearr_1274877_1275035 = state_1274870__$1;
(statearr_1274877_1275035[(2)] = null);

(statearr_1274877_1275035[(1)] = (2));


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
});})(__1275026,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
;
return ((function (__1275026,switch__9184__auto__,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1274881 = [null,null,null,null,null,null,null];
(statearr_1274881[(0)] = state_machine__9185__auto__);

(statearr_1274881[(1)] = (1));

return statearr_1274881;
});
var state_machine__9185__auto____1 = (function (state_1274870){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1274882){if((e1274882 instanceof Object)){
var ex__9188__auto__ = e1274882;
var statearr_1274883_1275036 = state_1274870;
(statearr_1274883_1275036[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1274882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275037 = state_1274870;
state_1274870 = G__1275037;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274870){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1275026,switch__9184__auto__,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1274884 = f__9200__auto__.call(null);
(statearr_1274884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275029);

return statearr_1274884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1275026,c__9199__auto___1275029,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___1275038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1275026,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1275026,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function (state_1274897){
var state_val_1274898 = (state_1274897[(1)]);
if((state_val_1274898 === (7))){
var inst_1274893 = (state_1274897[(2)]);
var state_1274897__$1 = state_1274897;
var statearr_1274899_1275039 = state_1274897__$1;
(statearr_1274899_1275039[(2)] = inst_1274893);

(statearr_1274899_1275039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274898 === (6))){
var state_1274897__$1 = state_1274897;
var statearr_1274900_1275040 = state_1274897__$1;
(statearr_1274900_1275040[(2)] = null);

(statearr_1274900_1275040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274898 === (5))){
var state_1274897__$1 = state_1274897;
var statearr_1274901_1275041 = state_1274897__$1;
(statearr_1274901_1275041[(2)] = null);

(statearr_1274901_1275041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274898 === (4))){
var inst_1274887 = (state_1274897[(2)]);
var inst_1274888 = process.call(null,inst_1274887);
var state_1274897__$1 = state_1274897;
if(cljs.core.truth_(inst_1274888)){
var statearr_1274902_1275042 = state_1274897__$1;
(statearr_1274902_1275042[(1)] = (5));

} else {
var statearr_1274903_1275043 = state_1274897__$1;
(statearr_1274903_1275043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274898 === (3))){
var inst_1274895 = (state_1274897[(2)]);
var state_1274897__$1 = state_1274897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274897__$1,inst_1274895);
} else {
if((state_val_1274898 === (2))){
var state_1274897__$1 = state_1274897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274897__$1,(4),jobs);
} else {
if((state_val_1274898 === (1))){
var state_1274897__$1 = state_1274897;
var statearr_1274904_1275044 = state_1274897__$1;
(statearr_1274904_1275044[(2)] = null);

(statearr_1274904_1275044[(1)] = (2));


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
});})(__1275026,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
;
return ((function (__1275026,switch__9184__auto__,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1274908 = [null,null,null,null,null,null,null];
(statearr_1274908[(0)] = state_machine__9185__auto__);

(statearr_1274908[(1)] = (1));

return statearr_1274908;
});
var state_machine__9185__auto____1 = (function (state_1274897){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1274909){if((e1274909 instanceof Object)){
var ex__9188__auto__ = e1274909;
var statearr_1274910_1275045 = state_1274897;
(statearr_1274910_1275045[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1274909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275046 = state_1274897;
state_1274897 = G__1275046;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274897){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1275026,switch__9184__auto__,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1274911 = f__9200__auto__.call(null);
(statearr_1274911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275038);

return statearr_1274911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1275026,c__9199__auto___1275038,G__1274857_1275027,n__4509__auto___1275025,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1275047 = (__1275026 + (1));
__1275026 = G__1275047;
continue;
} else {
}
break;
}

var c__9199__auto___1275048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1275048,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1275048,jobs,results,process,async){
return (function (state_1274933){
var state_val_1274934 = (state_1274933[(1)]);
if((state_val_1274934 === (9))){
var inst_1274926 = (state_1274933[(2)]);
var state_1274933__$1 = (function (){var statearr_1274935 = state_1274933;
(statearr_1274935[(7)] = inst_1274926);

return statearr_1274935;
})();
var statearr_1274936_1275049 = state_1274933__$1;
(statearr_1274936_1275049[(2)] = null);

(statearr_1274936_1275049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274934 === (8))){
var inst_1274919 = (state_1274933[(8)]);
var inst_1274924 = (state_1274933[(2)]);
var state_1274933__$1 = (function (){var statearr_1274937 = state_1274933;
(statearr_1274937[(9)] = inst_1274924);

return statearr_1274937;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1274933__$1,(9),results,inst_1274919);
} else {
if((state_val_1274934 === (7))){
var inst_1274929 = (state_1274933[(2)]);
var state_1274933__$1 = state_1274933;
var statearr_1274938_1275050 = state_1274933__$1;
(statearr_1274938_1275050[(2)] = inst_1274929);

(statearr_1274938_1275050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274934 === (6))){
var inst_1274919 = (state_1274933[(8)]);
var inst_1274914 = (state_1274933[(10)]);
var inst_1274919__$1 = cljs.core.async.chan.call(null,(1));
var inst_1274920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1274921 = [inst_1274914,inst_1274919__$1];
var inst_1274922 = (new cljs.core.PersistentVector(null,2,(5),inst_1274920,inst_1274921,null));
var state_1274933__$1 = (function (){var statearr_1274939 = state_1274933;
(statearr_1274939[(8)] = inst_1274919__$1);

return statearr_1274939;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1274933__$1,(8),jobs,inst_1274922);
} else {
if((state_val_1274934 === (5))){
var inst_1274917 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1274933__$1 = state_1274933;
var statearr_1274940_1275051 = state_1274933__$1;
(statearr_1274940_1275051[(2)] = inst_1274917);

(statearr_1274940_1275051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274934 === (4))){
var inst_1274914 = (state_1274933[(10)]);
var inst_1274914__$1 = (state_1274933[(2)]);
var inst_1274915 = (inst_1274914__$1 == null);
var state_1274933__$1 = (function (){var statearr_1274941 = state_1274933;
(statearr_1274941[(10)] = inst_1274914__$1);

return statearr_1274941;
})();
if(cljs.core.truth_(inst_1274915)){
var statearr_1274942_1275052 = state_1274933__$1;
(statearr_1274942_1275052[(1)] = (5));

} else {
var statearr_1274943_1275053 = state_1274933__$1;
(statearr_1274943_1275053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274934 === (3))){
var inst_1274931 = (state_1274933[(2)]);
var state_1274933__$1 = state_1274933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274933__$1,inst_1274931);
} else {
if((state_val_1274934 === (2))){
var state_1274933__$1 = state_1274933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274933__$1,(4),from);
} else {
if((state_val_1274934 === (1))){
var state_1274933__$1 = state_1274933;
var statearr_1274944_1275054 = state_1274933__$1;
(statearr_1274944_1275054[(2)] = null);

(statearr_1274944_1275054[(1)] = (2));


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
});})(c__9199__auto___1275048,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___1275048,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1274948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1274948[(0)] = state_machine__9185__auto__);

(statearr_1274948[(1)] = (1));

return statearr_1274948;
});
var state_machine__9185__auto____1 = (function (state_1274933){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1274949){if((e1274949 instanceof Object)){
var ex__9188__auto__ = e1274949;
var statearr_1274950_1275055 = state_1274933;
(statearr_1274950_1275055[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1274949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275056 = state_1274933;
state_1274933 = G__1275056;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274933){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1275048,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1274951 = f__9200__auto__.call(null);
(statearr_1274951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275048);

return statearr_1274951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1275048,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_1274989){
var state_val_1274990 = (state_1274989[(1)]);
if((state_val_1274990 === (7))){
var inst_1274985 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
var statearr_1274991_1275057 = state_1274989__$1;
(statearr_1274991_1275057[(2)] = inst_1274985);

(statearr_1274991_1275057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (20))){
var state_1274989__$1 = state_1274989;
var statearr_1274992_1275058 = state_1274989__$1;
(statearr_1274992_1275058[(2)] = null);

(statearr_1274992_1275058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (1))){
var state_1274989__$1 = state_1274989;
var statearr_1274993_1275059 = state_1274989__$1;
(statearr_1274993_1275059[(2)] = null);

(statearr_1274993_1275059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (4))){
var inst_1274954 = (state_1274989[(7)]);
var inst_1274954__$1 = (state_1274989[(2)]);
var inst_1274955 = (inst_1274954__$1 == null);
var state_1274989__$1 = (function (){var statearr_1274994 = state_1274989;
(statearr_1274994[(7)] = inst_1274954__$1);

return statearr_1274994;
})();
if(cljs.core.truth_(inst_1274955)){
var statearr_1274995_1275060 = state_1274989__$1;
(statearr_1274995_1275060[(1)] = (5));

} else {
var statearr_1274996_1275061 = state_1274989__$1;
(statearr_1274996_1275061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (15))){
var inst_1274967 = (state_1274989[(8)]);
var state_1274989__$1 = state_1274989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1274989__$1,(18),to,inst_1274967);
} else {
if((state_val_1274990 === (21))){
var inst_1274980 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
var statearr_1274997_1275062 = state_1274989__$1;
(statearr_1274997_1275062[(2)] = inst_1274980);

(statearr_1274997_1275062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (13))){
var inst_1274982 = (state_1274989[(2)]);
var state_1274989__$1 = (function (){var statearr_1274998 = state_1274989;
(statearr_1274998[(9)] = inst_1274982);

return statearr_1274998;
})();
var statearr_1274999_1275063 = state_1274989__$1;
(statearr_1274999_1275063[(2)] = null);

(statearr_1274999_1275063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (6))){
var inst_1274954 = (state_1274989[(7)]);
var state_1274989__$1 = state_1274989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274989__$1,(11),inst_1274954);
} else {
if((state_val_1274990 === (17))){
var inst_1274975 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
if(cljs.core.truth_(inst_1274975)){
var statearr_1275000_1275064 = state_1274989__$1;
(statearr_1275000_1275064[(1)] = (19));

} else {
var statearr_1275001_1275065 = state_1274989__$1;
(statearr_1275001_1275065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (3))){
var inst_1274987 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1274989__$1,inst_1274987);
} else {
if((state_val_1274990 === (12))){
var inst_1274964 = (state_1274989[(10)]);
var state_1274989__$1 = state_1274989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274989__$1,(14),inst_1274964);
} else {
if((state_val_1274990 === (2))){
var state_1274989__$1 = state_1274989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1274989__$1,(4),results);
} else {
if((state_val_1274990 === (19))){
var state_1274989__$1 = state_1274989;
var statearr_1275002_1275066 = state_1274989__$1;
(statearr_1275002_1275066[(2)] = null);

(statearr_1275002_1275066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (11))){
var inst_1274964 = (state_1274989[(2)]);
var state_1274989__$1 = (function (){var statearr_1275003 = state_1274989;
(statearr_1275003[(10)] = inst_1274964);

return statearr_1275003;
})();
var statearr_1275004_1275067 = state_1274989__$1;
(statearr_1275004_1275067[(2)] = null);

(statearr_1275004_1275067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (9))){
var state_1274989__$1 = state_1274989;
var statearr_1275005_1275068 = state_1274989__$1;
(statearr_1275005_1275068[(2)] = null);

(statearr_1275005_1275068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (5))){
var state_1274989__$1 = state_1274989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1275006_1275069 = state_1274989__$1;
(statearr_1275006_1275069[(1)] = (8));

} else {
var statearr_1275007_1275070 = state_1274989__$1;
(statearr_1275007_1275070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (14))){
var inst_1274969 = (state_1274989[(11)]);
var inst_1274967 = (state_1274989[(8)]);
var inst_1274967__$1 = (state_1274989[(2)]);
var inst_1274968 = (inst_1274967__$1 == null);
var inst_1274969__$1 = cljs.core.not.call(null,inst_1274968);
var state_1274989__$1 = (function (){var statearr_1275008 = state_1274989;
(statearr_1275008[(11)] = inst_1274969__$1);

(statearr_1275008[(8)] = inst_1274967__$1);

return statearr_1275008;
})();
if(inst_1274969__$1){
var statearr_1275009_1275071 = state_1274989__$1;
(statearr_1275009_1275071[(1)] = (15));

} else {
var statearr_1275010_1275072 = state_1274989__$1;
(statearr_1275010_1275072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (16))){
var inst_1274969 = (state_1274989[(11)]);
var state_1274989__$1 = state_1274989;
var statearr_1275011_1275073 = state_1274989__$1;
(statearr_1275011_1275073[(2)] = inst_1274969);

(statearr_1275011_1275073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (10))){
var inst_1274961 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
var statearr_1275012_1275074 = state_1274989__$1;
(statearr_1275012_1275074[(2)] = inst_1274961);

(statearr_1275012_1275074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (18))){
var inst_1274972 = (state_1274989[(2)]);
var state_1274989__$1 = state_1274989;
var statearr_1275013_1275075 = state_1274989__$1;
(statearr_1275013_1275075[(2)] = inst_1274972);

(statearr_1275013_1275075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1274990 === (8))){
var inst_1274958 = cljs.core.async.close_BANG_.call(null,to);
var state_1274989__$1 = state_1274989;
var statearr_1275014_1275076 = state_1274989__$1;
(statearr_1275014_1275076[(2)] = inst_1274958);

(statearr_1275014_1275076[(1)] = (10));


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
var statearr_1275018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1275018[(0)] = state_machine__9185__auto__);

(statearr_1275018[(1)] = (1));

return statearr_1275018;
});
var state_machine__9185__auto____1 = (function (state_1274989){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1274989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1275019){if((e1275019 instanceof Object)){
var ex__9188__auto__ = e1275019;
var statearr_1275020_1275077 = state_1274989;
(statearr_1275020_1275077[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1274989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1275019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275078 = state_1274989;
state_1274989 = G__1275078;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1274989){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1274989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1275021 = f__9200__auto__.call(null);
(statearr_1275021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1275021;
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
var c__9199__auto___1275179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1275179,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1275179,tc,fc){
return (function (state_1275154){
var state_val_1275155 = (state_1275154[(1)]);
if((state_val_1275155 === (7))){
var inst_1275150 = (state_1275154[(2)]);
var state_1275154__$1 = state_1275154;
var statearr_1275156_1275180 = state_1275154__$1;
(statearr_1275156_1275180[(2)] = inst_1275150);

(statearr_1275156_1275180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (1))){
var state_1275154__$1 = state_1275154;
var statearr_1275157_1275181 = state_1275154__$1;
(statearr_1275157_1275181[(2)] = null);

(statearr_1275157_1275181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (4))){
var inst_1275131 = (state_1275154[(7)]);
var inst_1275131__$1 = (state_1275154[(2)]);
var inst_1275132 = (inst_1275131__$1 == null);
var state_1275154__$1 = (function (){var statearr_1275158 = state_1275154;
(statearr_1275158[(7)] = inst_1275131__$1);

return statearr_1275158;
})();
if(cljs.core.truth_(inst_1275132)){
var statearr_1275159_1275182 = state_1275154__$1;
(statearr_1275159_1275182[(1)] = (5));

} else {
var statearr_1275160_1275183 = state_1275154__$1;
(statearr_1275160_1275183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (13))){
var state_1275154__$1 = state_1275154;
var statearr_1275161_1275184 = state_1275154__$1;
(statearr_1275161_1275184[(2)] = null);

(statearr_1275161_1275184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (6))){
var inst_1275131 = (state_1275154[(7)]);
var inst_1275137 = p.call(null,inst_1275131);
var state_1275154__$1 = state_1275154;
if(cljs.core.truth_(inst_1275137)){
var statearr_1275162_1275185 = state_1275154__$1;
(statearr_1275162_1275185[(1)] = (9));

} else {
var statearr_1275163_1275186 = state_1275154__$1;
(statearr_1275163_1275186[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (3))){
var inst_1275152 = (state_1275154[(2)]);
var state_1275154__$1 = state_1275154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1275154__$1,inst_1275152);
} else {
if((state_val_1275155 === (12))){
var state_1275154__$1 = state_1275154;
var statearr_1275164_1275187 = state_1275154__$1;
(statearr_1275164_1275187[(2)] = null);

(statearr_1275164_1275187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (2))){
var state_1275154__$1 = state_1275154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1275154__$1,(4),ch);
} else {
if((state_val_1275155 === (11))){
var inst_1275131 = (state_1275154[(7)]);
var inst_1275141 = (state_1275154[(2)]);
var state_1275154__$1 = state_1275154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1275154__$1,(8),inst_1275141,inst_1275131);
} else {
if((state_val_1275155 === (9))){
var state_1275154__$1 = state_1275154;
var statearr_1275165_1275188 = state_1275154__$1;
(statearr_1275165_1275188[(2)] = tc);

(statearr_1275165_1275188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (5))){
var inst_1275134 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1275135 = cljs.core.async.close_BANG_.call(null,fc);
var state_1275154__$1 = (function (){var statearr_1275166 = state_1275154;
(statearr_1275166[(8)] = inst_1275134);

return statearr_1275166;
})();
var statearr_1275167_1275189 = state_1275154__$1;
(statearr_1275167_1275189[(2)] = inst_1275135);

(statearr_1275167_1275189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (14))){
var inst_1275148 = (state_1275154[(2)]);
var state_1275154__$1 = state_1275154;
var statearr_1275168_1275190 = state_1275154__$1;
(statearr_1275168_1275190[(2)] = inst_1275148);

(statearr_1275168_1275190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (10))){
var state_1275154__$1 = state_1275154;
var statearr_1275169_1275191 = state_1275154__$1;
(statearr_1275169_1275191[(2)] = fc);

(statearr_1275169_1275191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275155 === (8))){
var inst_1275143 = (state_1275154[(2)]);
var state_1275154__$1 = state_1275154;
if(cljs.core.truth_(inst_1275143)){
var statearr_1275170_1275192 = state_1275154__$1;
(statearr_1275170_1275192[(1)] = (12));

} else {
var statearr_1275171_1275193 = state_1275154__$1;
(statearr_1275171_1275193[(1)] = (13));

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
});})(c__9199__auto___1275179,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___1275179,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1275175 = [null,null,null,null,null,null,null,null,null];
(statearr_1275175[(0)] = state_machine__9185__auto__);

(statearr_1275175[(1)] = (1));

return statearr_1275175;
});
var state_machine__9185__auto____1 = (function (state_1275154){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1275154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1275176){if((e1275176 instanceof Object)){
var ex__9188__auto__ = e1275176;
var statearr_1275177_1275194 = state_1275154;
(statearr_1275177_1275194[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1275154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1275176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275195 = state_1275154;
state_1275154 = G__1275195;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1275154){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1275154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1275179,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_1275178 = f__9200__auto__.call(null);
(statearr_1275178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275179);

return statearr_1275178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1275179,tc,fc))
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
return (function (state_1275242){
var state_val_1275243 = (state_1275242[(1)]);
if((state_val_1275243 === (7))){
var inst_1275238 = (state_1275242[(2)]);
var state_1275242__$1 = state_1275242;
var statearr_1275244_1275260 = state_1275242__$1;
(statearr_1275244_1275260[(2)] = inst_1275238);

(statearr_1275244_1275260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275243 === (6))){
var inst_1275231 = (state_1275242[(7)]);
var inst_1275228 = (state_1275242[(8)]);
var inst_1275235 = f.call(null,inst_1275228,inst_1275231);
var inst_1275228__$1 = inst_1275235;
var state_1275242__$1 = (function (){var statearr_1275245 = state_1275242;
(statearr_1275245[(8)] = inst_1275228__$1);

return statearr_1275245;
})();
var statearr_1275246_1275261 = state_1275242__$1;
(statearr_1275246_1275261[(2)] = null);

(statearr_1275246_1275261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275243 === (5))){
var inst_1275228 = (state_1275242[(8)]);
var state_1275242__$1 = state_1275242;
var statearr_1275247_1275262 = state_1275242__$1;
(statearr_1275247_1275262[(2)] = inst_1275228);

(statearr_1275247_1275262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275243 === (4))){
var inst_1275231 = (state_1275242[(7)]);
var inst_1275231__$1 = (state_1275242[(2)]);
var inst_1275232 = (inst_1275231__$1 == null);
var state_1275242__$1 = (function (){var statearr_1275248 = state_1275242;
(statearr_1275248[(7)] = inst_1275231__$1);

return statearr_1275248;
})();
if(cljs.core.truth_(inst_1275232)){
var statearr_1275249_1275263 = state_1275242__$1;
(statearr_1275249_1275263[(1)] = (5));

} else {
var statearr_1275250_1275264 = state_1275242__$1;
(statearr_1275250_1275264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275243 === (3))){
var inst_1275240 = (state_1275242[(2)]);
var state_1275242__$1 = state_1275242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1275242__$1,inst_1275240);
} else {
if((state_val_1275243 === (2))){
var state_1275242__$1 = state_1275242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1275242__$1,(4),ch);
} else {
if((state_val_1275243 === (1))){
var inst_1275228 = init;
var state_1275242__$1 = (function (){var statearr_1275251 = state_1275242;
(statearr_1275251[(8)] = inst_1275228);

return statearr_1275251;
})();
var statearr_1275252_1275265 = state_1275242__$1;
(statearr_1275252_1275265[(2)] = null);

(statearr_1275252_1275265[(1)] = (2));


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
var statearr_1275256 = [null,null,null,null,null,null,null,null,null];
(statearr_1275256[(0)] = state_machine__9185__auto__);

(statearr_1275256[(1)] = (1));

return statearr_1275256;
});
var state_machine__9185__auto____1 = (function (state_1275242){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1275242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1275257){if((e1275257 instanceof Object)){
var ex__9188__auto__ = e1275257;
var statearr_1275258_1275266 = state_1275242;
(statearr_1275258_1275266[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1275242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1275257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275267 = state_1275242;
state_1275242 = G__1275267;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1275242){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1275242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1275259 = f__9200__auto__.call(null);
(statearr_1275259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1275259;
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
return (function (state_1275341){
var state_val_1275342 = (state_1275341[(1)]);
if((state_val_1275342 === (7))){
var inst_1275323 = (state_1275341[(2)]);
var state_1275341__$1 = state_1275341;
var statearr_1275343_1275366 = state_1275341__$1;
(statearr_1275343_1275366[(2)] = inst_1275323);

(statearr_1275343_1275366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (1))){
var inst_1275317 = cljs.core.seq.call(null,coll);
var inst_1275318 = inst_1275317;
var state_1275341__$1 = (function (){var statearr_1275344 = state_1275341;
(statearr_1275344[(7)] = inst_1275318);

return statearr_1275344;
})();
var statearr_1275345_1275367 = state_1275341__$1;
(statearr_1275345_1275367[(2)] = null);

(statearr_1275345_1275367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (4))){
var inst_1275318 = (state_1275341[(7)]);
var inst_1275321 = cljs.core.first.call(null,inst_1275318);
var state_1275341__$1 = state_1275341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1275341__$1,(7),ch,inst_1275321);
} else {
if((state_val_1275342 === (13))){
var inst_1275335 = (state_1275341[(2)]);
var state_1275341__$1 = state_1275341;
var statearr_1275346_1275368 = state_1275341__$1;
(statearr_1275346_1275368[(2)] = inst_1275335);

(statearr_1275346_1275368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (6))){
var inst_1275326 = (state_1275341[(2)]);
var state_1275341__$1 = state_1275341;
if(cljs.core.truth_(inst_1275326)){
var statearr_1275347_1275369 = state_1275341__$1;
(statearr_1275347_1275369[(1)] = (8));

} else {
var statearr_1275348_1275370 = state_1275341__$1;
(statearr_1275348_1275370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (3))){
var inst_1275339 = (state_1275341[(2)]);
var state_1275341__$1 = state_1275341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1275341__$1,inst_1275339);
} else {
if((state_val_1275342 === (12))){
var state_1275341__$1 = state_1275341;
var statearr_1275349_1275371 = state_1275341__$1;
(statearr_1275349_1275371[(2)] = null);

(statearr_1275349_1275371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (2))){
var inst_1275318 = (state_1275341[(7)]);
var state_1275341__$1 = state_1275341;
if(cljs.core.truth_(inst_1275318)){
var statearr_1275350_1275372 = state_1275341__$1;
(statearr_1275350_1275372[(1)] = (4));

} else {
var statearr_1275351_1275373 = state_1275341__$1;
(statearr_1275351_1275373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (11))){
var inst_1275332 = cljs.core.async.close_BANG_.call(null,ch);
var state_1275341__$1 = state_1275341;
var statearr_1275352_1275374 = state_1275341__$1;
(statearr_1275352_1275374[(2)] = inst_1275332);

(statearr_1275352_1275374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (9))){
var state_1275341__$1 = state_1275341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1275353_1275375 = state_1275341__$1;
(statearr_1275353_1275375[(1)] = (11));

} else {
var statearr_1275354_1275376 = state_1275341__$1;
(statearr_1275354_1275376[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (5))){
var inst_1275318 = (state_1275341[(7)]);
var state_1275341__$1 = state_1275341;
var statearr_1275355_1275377 = state_1275341__$1;
(statearr_1275355_1275377[(2)] = inst_1275318);

(statearr_1275355_1275377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (10))){
var inst_1275337 = (state_1275341[(2)]);
var state_1275341__$1 = state_1275341;
var statearr_1275356_1275378 = state_1275341__$1;
(statearr_1275356_1275378[(2)] = inst_1275337);

(statearr_1275356_1275378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275342 === (8))){
var inst_1275318 = (state_1275341[(7)]);
var inst_1275328 = cljs.core.next.call(null,inst_1275318);
var inst_1275318__$1 = inst_1275328;
var state_1275341__$1 = (function (){var statearr_1275357 = state_1275341;
(statearr_1275357[(7)] = inst_1275318__$1);

return statearr_1275357;
})();
var statearr_1275358_1275379 = state_1275341__$1;
(statearr_1275358_1275379[(2)] = null);

(statearr_1275358_1275379[(1)] = (2));


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
var statearr_1275362 = [null,null,null,null,null,null,null,null];
(statearr_1275362[(0)] = state_machine__9185__auto__);

(statearr_1275362[(1)] = (1));

return statearr_1275362;
});
var state_machine__9185__auto____1 = (function (state_1275341){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1275341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1275363){if((e1275363 instanceof Object)){
var ex__9188__auto__ = e1275363;
var statearr_1275364_1275380 = state_1275341;
(statearr_1275364_1275380[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1275341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1275363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275381 = state_1275341;
state_1275341 = G__1275381;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1275341){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1275341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1275365 = f__9200__auto__.call(null);
(statearr_1275365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1275365;
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

cljs.core.async.Mux = (function (){var obj1275383 = {};
return obj1275383;
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


cljs.core.async.Mult = (function (){var obj1275385 = {};
return obj1275385;
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
if(typeof cljs.core.async.t1275607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1275607 = (function (cs,ch,mult,meta1275608){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta1275608 = meta1275608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1275607.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t1275607.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t1275607.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t1275607.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t1275607.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1275607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t1275607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1275609){
var self__ = this;
var _1275609__$1 = this;
return self__.meta1275608;
});})(cs))
;

cljs.core.async.t1275607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1275609,meta1275608__$1){
var self__ = this;
var _1275609__$1 = this;
return (new cljs.core.async.t1275607(self__.cs,self__.ch,self__.mult,meta1275608__$1));
});})(cs))
;

cljs.core.async.t1275607.cljs$lang$type = true;

cljs.core.async.t1275607.cljs$lang$ctorStr = "cljs.core.async/t1275607";

cljs.core.async.t1275607.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1275607");
});})(cs))
;

cljs.core.async.__GT_t1275607 = ((function (cs){
return (function __GT_t1275607(cs__$1,ch__$1,mult__$1,meta1275608){
return (new cljs.core.async.t1275607(cs__$1,ch__$1,mult__$1,meta1275608));
});})(cs))
;

}

return (new cljs.core.async.t1275607(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1275828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1275828,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1275828,cs,m,dchan,dctr,done){
return (function (state_1275740){
var state_val_1275741 = (state_1275740[(1)]);
if((state_val_1275741 === (7))){
var inst_1275736 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275742_1275829 = state_1275740__$1;
(statearr_1275742_1275829[(2)] = inst_1275736);

(statearr_1275742_1275829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (20))){
var inst_1275641 = (state_1275740[(7)]);
var inst_1275651 = cljs.core.first.call(null,inst_1275641);
var inst_1275652 = cljs.core.nth.call(null,inst_1275651,(0),null);
var inst_1275653 = cljs.core.nth.call(null,inst_1275651,(1),null);
var state_1275740__$1 = (function (){var statearr_1275743 = state_1275740;
(statearr_1275743[(8)] = inst_1275652);

return statearr_1275743;
})();
if(cljs.core.truth_(inst_1275653)){
var statearr_1275744_1275830 = state_1275740__$1;
(statearr_1275744_1275830[(1)] = (22));

} else {
var statearr_1275745_1275831 = state_1275740__$1;
(statearr_1275745_1275831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (27))){
var inst_1275681 = (state_1275740[(9)]);
var inst_1275688 = (state_1275740[(10)]);
var inst_1275612 = (state_1275740[(11)]);
var inst_1275683 = (state_1275740[(12)]);
var inst_1275688__$1 = cljs.core._nth.call(null,inst_1275681,inst_1275683);
var inst_1275689 = cljs.core.async.put_BANG_.call(null,inst_1275688__$1,inst_1275612,done);
var state_1275740__$1 = (function (){var statearr_1275746 = state_1275740;
(statearr_1275746[(10)] = inst_1275688__$1);

return statearr_1275746;
})();
if(cljs.core.truth_(inst_1275689)){
var statearr_1275747_1275832 = state_1275740__$1;
(statearr_1275747_1275832[(1)] = (30));

} else {
var statearr_1275748_1275833 = state_1275740__$1;
(statearr_1275748_1275833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (1))){
var state_1275740__$1 = state_1275740;
var statearr_1275749_1275834 = state_1275740__$1;
(statearr_1275749_1275834[(2)] = null);

(statearr_1275749_1275834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (24))){
var inst_1275641 = (state_1275740[(7)]);
var inst_1275658 = (state_1275740[(2)]);
var inst_1275659 = cljs.core.next.call(null,inst_1275641);
var inst_1275621 = inst_1275659;
var inst_1275622 = null;
var inst_1275623 = (0);
var inst_1275624 = (0);
var state_1275740__$1 = (function (){var statearr_1275750 = state_1275740;
(statearr_1275750[(13)] = inst_1275624);

(statearr_1275750[(14)] = inst_1275623);

(statearr_1275750[(15)] = inst_1275621);

(statearr_1275750[(16)] = inst_1275622);

(statearr_1275750[(17)] = inst_1275658);

return statearr_1275750;
})();
var statearr_1275751_1275835 = state_1275740__$1;
(statearr_1275751_1275835[(2)] = null);

(statearr_1275751_1275835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (39))){
var state_1275740__$1 = state_1275740;
var statearr_1275755_1275836 = state_1275740__$1;
(statearr_1275755_1275836[(2)] = null);

(statearr_1275755_1275836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (4))){
var inst_1275612 = (state_1275740[(11)]);
var inst_1275612__$1 = (state_1275740[(2)]);
var inst_1275613 = (inst_1275612__$1 == null);
var state_1275740__$1 = (function (){var statearr_1275756 = state_1275740;
(statearr_1275756[(11)] = inst_1275612__$1);

return statearr_1275756;
})();
if(cljs.core.truth_(inst_1275613)){
var statearr_1275757_1275837 = state_1275740__$1;
(statearr_1275757_1275837[(1)] = (5));

} else {
var statearr_1275758_1275838 = state_1275740__$1;
(statearr_1275758_1275838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (15))){
var inst_1275624 = (state_1275740[(13)]);
var inst_1275623 = (state_1275740[(14)]);
var inst_1275621 = (state_1275740[(15)]);
var inst_1275622 = (state_1275740[(16)]);
var inst_1275637 = (state_1275740[(2)]);
var inst_1275638 = (inst_1275624 + (1));
var tmp1275752 = inst_1275623;
var tmp1275753 = inst_1275621;
var tmp1275754 = inst_1275622;
var inst_1275621__$1 = tmp1275753;
var inst_1275622__$1 = tmp1275754;
var inst_1275623__$1 = tmp1275752;
var inst_1275624__$1 = inst_1275638;
var state_1275740__$1 = (function (){var statearr_1275759 = state_1275740;
(statearr_1275759[(13)] = inst_1275624__$1);

(statearr_1275759[(14)] = inst_1275623__$1);

(statearr_1275759[(15)] = inst_1275621__$1);

(statearr_1275759[(18)] = inst_1275637);

(statearr_1275759[(16)] = inst_1275622__$1);

return statearr_1275759;
})();
var statearr_1275760_1275839 = state_1275740__$1;
(statearr_1275760_1275839[(2)] = null);

(statearr_1275760_1275839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (21))){
var inst_1275662 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275764_1275840 = state_1275740__$1;
(statearr_1275764_1275840[(2)] = inst_1275662);

(statearr_1275764_1275840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (31))){
var inst_1275688 = (state_1275740[(10)]);
var inst_1275692 = done.call(null,null);
var inst_1275693 = cljs.core.async.untap_STAR_.call(null,m,inst_1275688);
var state_1275740__$1 = (function (){var statearr_1275765 = state_1275740;
(statearr_1275765[(19)] = inst_1275692);

return statearr_1275765;
})();
var statearr_1275766_1275841 = state_1275740__$1;
(statearr_1275766_1275841[(2)] = inst_1275693);

(statearr_1275766_1275841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (32))){
var inst_1275681 = (state_1275740[(9)]);
var inst_1275680 = (state_1275740[(20)]);
var inst_1275683 = (state_1275740[(12)]);
var inst_1275682 = (state_1275740[(21)]);
var inst_1275695 = (state_1275740[(2)]);
var inst_1275696 = (inst_1275683 + (1));
var tmp1275761 = inst_1275681;
var tmp1275762 = inst_1275680;
var tmp1275763 = inst_1275682;
var inst_1275680__$1 = tmp1275762;
var inst_1275681__$1 = tmp1275761;
var inst_1275682__$1 = tmp1275763;
var inst_1275683__$1 = inst_1275696;
var state_1275740__$1 = (function (){var statearr_1275767 = state_1275740;
(statearr_1275767[(9)] = inst_1275681__$1);

(statearr_1275767[(22)] = inst_1275695);

(statearr_1275767[(20)] = inst_1275680__$1);

(statearr_1275767[(12)] = inst_1275683__$1);

(statearr_1275767[(21)] = inst_1275682__$1);

return statearr_1275767;
})();
var statearr_1275768_1275842 = state_1275740__$1;
(statearr_1275768_1275842[(2)] = null);

(statearr_1275768_1275842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (40))){
var inst_1275708 = (state_1275740[(23)]);
var inst_1275712 = done.call(null,null);
var inst_1275713 = cljs.core.async.untap_STAR_.call(null,m,inst_1275708);
var state_1275740__$1 = (function (){var statearr_1275769 = state_1275740;
(statearr_1275769[(24)] = inst_1275712);

return statearr_1275769;
})();
var statearr_1275770_1275843 = state_1275740__$1;
(statearr_1275770_1275843[(2)] = inst_1275713);

(statearr_1275770_1275843[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (33))){
var inst_1275699 = (state_1275740[(25)]);
var inst_1275701 = cljs.core.chunked_seq_QMARK_.call(null,inst_1275699);
var state_1275740__$1 = state_1275740;
if(inst_1275701){
var statearr_1275771_1275844 = state_1275740__$1;
(statearr_1275771_1275844[(1)] = (36));

} else {
var statearr_1275772_1275845 = state_1275740__$1;
(statearr_1275772_1275845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (13))){
var inst_1275631 = (state_1275740[(26)]);
var inst_1275634 = cljs.core.async.close_BANG_.call(null,inst_1275631);
var state_1275740__$1 = state_1275740;
var statearr_1275773_1275846 = state_1275740__$1;
(statearr_1275773_1275846[(2)] = inst_1275634);

(statearr_1275773_1275846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (22))){
var inst_1275652 = (state_1275740[(8)]);
var inst_1275655 = cljs.core.async.close_BANG_.call(null,inst_1275652);
var state_1275740__$1 = state_1275740;
var statearr_1275774_1275847 = state_1275740__$1;
(statearr_1275774_1275847[(2)] = inst_1275655);

(statearr_1275774_1275847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (36))){
var inst_1275699 = (state_1275740[(25)]);
var inst_1275703 = cljs.core.chunk_first.call(null,inst_1275699);
var inst_1275704 = cljs.core.chunk_rest.call(null,inst_1275699);
var inst_1275705 = cljs.core.count.call(null,inst_1275703);
var inst_1275680 = inst_1275704;
var inst_1275681 = inst_1275703;
var inst_1275682 = inst_1275705;
var inst_1275683 = (0);
var state_1275740__$1 = (function (){var statearr_1275775 = state_1275740;
(statearr_1275775[(9)] = inst_1275681);

(statearr_1275775[(20)] = inst_1275680);

(statearr_1275775[(12)] = inst_1275683);

(statearr_1275775[(21)] = inst_1275682);

return statearr_1275775;
})();
var statearr_1275776_1275848 = state_1275740__$1;
(statearr_1275776_1275848[(2)] = null);

(statearr_1275776_1275848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (41))){
var inst_1275699 = (state_1275740[(25)]);
var inst_1275715 = (state_1275740[(2)]);
var inst_1275716 = cljs.core.next.call(null,inst_1275699);
var inst_1275680 = inst_1275716;
var inst_1275681 = null;
var inst_1275682 = (0);
var inst_1275683 = (0);
var state_1275740__$1 = (function (){var statearr_1275777 = state_1275740;
(statearr_1275777[(9)] = inst_1275681);

(statearr_1275777[(20)] = inst_1275680);

(statearr_1275777[(12)] = inst_1275683);

(statearr_1275777[(27)] = inst_1275715);

(statearr_1275777[(21)] = inst_1275682);

return statearr_1275777;
})();
var statearr_1275778_1275849 = state_1275740__$1;
(statearr_1275778_1275849[(2)] = null);

(statearr_1275778_1275849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (43))){
var state_1275740__$1 = state_1275740;
var statearr_1275779_1275850 = state_1275740__$1;
(statearr_1275779_1275850[(2)] = null);

(statearr_1275779_1275850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (29))){
var inst_1275724 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275780_1275851 = state_1275740__$1;
(statearr_1275780_1275851[(2)] = inst_1275724);

(statearr_1275780_1275851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (44))){
var inst_1275733 = (state_1275740[(2)]);
var state_1275740__$1 = (function (){var statearr_1275781 = state_1275740;
(statearr_1275781[(28)] = inst_1275733);

return statearr_1275781;
})();
var statearr_1275782_1275852 = state_1275740__$1;
(statearr_1275782_1275852[(2)] = null);

(statearr_1275782_1275852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (6))){
var inst_1275672 = (state_1275740[(29)]);
var inst_1275671 = cljs.core.deref.call(null,cs);
var inst_1275672__$1 = cljs.core.keys.call(null,inst_1275671);
var inst_1275673 = cljs.core.count.call(null,inst_1275672__$1);
var inst_1275674 = cljs.core.reset_BANG_.call(null,dctr,inst_1275673);
var inst_1275679 = cljs.core.seq.call(null,inst_1275672__$1);
var inst_1275680 = inst_1275679;
var inst_1275681 = null;
var inst_1275682 = (0);
var inst_1275683 = (0);
var state_1275740__$1 = (function (){var statearr_1275783 = state_1275740;
(statearr_1275783[(9)] = inst_1275681);

(statearr_1275783[(20)] = inst_1275680);

(statearr_1275783[(12)] = inst_1275683);

(statearr_1275783[(30)] = inst_1275674);

(statearr_1275783[(29)] = inst_1275672__$1);

(statearr_1275783[(21)] = inst_1275682);

return statearr_1275783;
})();
var statearr_1275784_1275853 = state_1275740__$1;
(statearr_1275784_1275853[(2)] = null);

(statearr_1275784_1275853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (28))){
var inst_1275680 = (state_1275740[(20)]);
var inst_1275699 = (state_1275740[(25)]);
var inst_1275699__$1 = cljs.core.seq.call(null,inst_1275680);
var state_1275740__$1 = (function (){var statearr_1275785 = state_1275740;
(statearr_1275785[(25)] = inst_1275699__$1);

return statearr_1275785;
})();
if(inst_1275699__$1){
var statearr_1275786_1275854 = state_1275740__$1;
(statearr_1275786_1275854[(1)] = (33));

} else {
var statearr_1275787_1275855 = state_1275740__$1;
(statearr_1275787_1275855[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (25))){
var inst_1275683 = (state_1275740[(12)]);
var inst_1275682 = (state_1275740[(21)]);
var inst_1275685 = (inst_1275683 < inst_1275682);
var inst_1275686 = inst_1275685;
var state_1275740__$1 = state_1275740;
if(cljs.core.truth_(inst_1275686)){
var statearr_1275788_1275856 = state_1275740__$1;
(statearr_1275788_1275856[(1)] = (27));

} else {
var statearr_1275789_1275857 = state_1275740__$1;
(statearr_1275789_1275857[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (34))){
var state_1275740__$1 = state_1275740;
var statearr_1275790_1275858 = state_1275740__$1;
(statearr_1275790_1275858[(2)] = null);

(statearr_1275790_1275858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (17))){
var state_1275740__$1 = state_1275740;
var statearr_1275791_1275859 = state_1275740__$1;
(statearr_1275791_1275859[(2)] = null);

(statearr_1275791_1275859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (3))){
var inst_1275738 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1275740__$1,inst_1275738);
} else {
if((state_val_1275741 === (12))){
var inst_1275667 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275792_1275860 = state_1275740__$1;
(statearr_1275792_1275860[(2)] = inst_1275667);

(statearr_1275792_1275860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (2))){
var state_1275740__$1 = state_1275740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1275740__$1,(4),ch);
} else {
if((state_val_1275741 === (23))){
var state_1275740__$1 = state_1275740;
var statearr_1275793_1275861 = state_1275740__$1;
(statearr_1275793_1275861[(2)] = null);

(statearr_1275793_1275861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (35))){
var inst_1275722 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275794_1275862 = state_1275740__$1;
(statearr_1275794_1275862[(2)] = inst_1275722);

(statearr_1275794_1275862[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (19))){
var inst_1275641 = (state_1275740[(7)]);
var inst_1275645 = cljs.core.chunk_first.call(null,inst_1275641);
var inst_1275646 = cljs.core.chunk_rest.call(null,inst_1275641);
var inst_1275647 = cljs.core.count.call(null,inst_1275645);
var inst_1275621 = inst_1275646;
var inst_1275622 = inst_1275645;
var inst_1275623 = inst_1275647;
var inst_1275624 = (0);
var state_1275740__$1 = (function (){var statearr_1275795 = state_1275740;
(statearr_1275795[(13)] = inst_1275624);

(statearr_1275795[(14)] = inst_1275623);

(statearr_1275795[(15)] = inst_1275621);

(statearr_1275795[(16)] = inst_1275622);

return statearr_1275795;
})();
var statearr_1275796_1275863 = state_1275740__$1;
(statearr_1275796_1275863[(2)] = null);

(statearr_1275796_1275863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (11))){
var inst_1275641 = (state_1275740[(7)]);
var inst_1275621 = (state_1275740[(15)]);
var inst_1275641__$1 = cljs.core.seq.call(null,inst_1275621);
var state_1275740__$1 = (function (){var statearr_1275797 = state_1275740;
(statearr_1275797[(7)] = inst_1275641__$1);

return statearr_1275797;
})();
if(inst_1275641__$1){
var statearr_1275798_1275864 = state_1275740__$1;
(statearr_1275798_1275864[(1)] = (16));

} else {
var statearr_1275799_1275865 = state_1275740__$1;
(statearr_1275799_1275865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (9))){
var inst_1275669 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275800_1275866 = state_1275740__$1;
(statearr_1275800_1275866[(2)] = inst_1275669);

(statearr_1275800_1275866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (5))){
var inst_1275619 = cljs.core.deref.call(null,cs);
var inst_1275620 = cljs.core.seq.call(null,inst_1275619);
var inst_1275621 = inst_1275620;
var inst_1275622 = null;
var inst_1275623 = (0);
var inst_1275624 = (0);
var state_1275740__$1 = (function (){var statearr_1275801 = state_1275740;
(statearr_1275801[(13)] = inst_1275624);

(statearr_1275801[(14)] = inst_1275623);

(statearr_1275801[(15)] = inst_1275621);

(statearr_1275801[(16)] = inst_1275622);

return statearr_1275801;
})();
var statearr_1275802_1275867 = state_1275740__$1;
(statearr_1275802_1275867[(2)] = null);

(statearr_1275802_1275867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (14))){
var state_1275740__$1 = state_1275740;
var statearr_1275803_1275868 = state_1275740__$1;
(statearr_1275803_1275868[(2)] = null);

(statearr_1275803_1275868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (45))){
var inst_1275730 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275804_1275869 = state_1275740__$1;
(statearr_1275804_1275869[(2)] = inst_1275730);

(statearr_1275804_1275869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (26))){
var inst_1275672 = (state_1275740[(29)]);
var inst_1275726 = (state_1275740[(2)]);
var inst_1275727 = cljs.core.seq.call(null,inst_1275672);
var state_1275740__$1 = (function (){var statearr_1275805 = state_1275740;
(statearr_1275805[(31)] = inst_1275726);

return statearr_1275805;
})();
if(inst_1275727){
var statearr_1275806_1275870 = state_1275740__$1;
(statearr_1275806_1275870[(1)] = (42));

} else {
var statearr_1275807_1275871 = state_1275740__$1;
(statearr_1275807_1275871[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (16))){
var inst_1275641 = (state_1275740[(7)]);
var inst_1275643 = cljs.core.chunked_seq_QMARK_.call(null,inst_1275641);
var state_1275740__$1 = state_1275740;
if(inst_1275643){
var statearr_1275808_1275872 = state_1275740__$1;
(statearr_1275808_1275872[(1)] = (19));

} else {
var statearr_1275809_1275873 = state_1275740__$1;
(statearr_1275809_1275873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (38))){
var inst_1275719 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275810_1275874 = state_1275740__$1;
(statearr_1275810_1275874[(2)] = inst_1275719);

(statearr_1275810_1275874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (30))){
var state_1275740__$1 = state_1275740;
var statearr_1275811_1275875 = state_1275740__$1;
(statearr_1275811_1275875[(2)] = null);

(statearr_1275811_1275875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (10))){
var inst_1275624 = (state_1275740[(13)]);
var inst_1275622 = (state_1275740[(16)]);
var inst_1275630 = cljs.core._nth.call(null,inst_1275622,inst_1275624);
var inst_1275631 = cljs.core.nth.call(null,inst_1275630,(0),null);
var inst_1275632 = cljs.core.nth.call(null,inst_1275630,(1),null);
var state_1275740__$1 = (function (){var statearr_1275812 = state_1275740;
(statearr_1275812[(26)] = inst_1275631);

return statearr_1275812;
})();
if(cljs.core.truth_(inst_1275632)){
var statearr_1275813_1275876 = state_1275740__$1;
(statearr_1275813_1275876[(1)] = (13));

} else {
var statearr_1275814_1275877 = state_1275740__$1;
(statearr_1275814_1275877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (18))){
var inst_1275665 = (state_1275740[(2)]);
var state_1275740__$1 = state_1275740;
var statearr_1275815_1275878 = state_1275740__$1;
(statearr_1275815_1275878[(2)] = inst_1275665);

(statearr_1275815_1275878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (42))){
var state_1275740__$1 = state_1275740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1275740__$1,(45),dchan);
} else {
if((state_val_1275741 === (37))){
var inst_1275699 = (state_1275740[(25)]);
var inst_1275612 = (state_1275740[(11)]);
var inst_1275708 = (state_1275740[(23)]);
var inst_1275708__$1 = cljs.core.first.call(null,inst_1275699);
var inst_1275709 = cljs.core.async.put_BANG_.call(null,inst_1275708__$1,inst_1275612,done);
var state_1275740__$1 = (function (){var statearr_1275816 = state_1275740;
(statearr_1275816[(23)] = inst_1275708__$1);

return statearr_1275816;
})();
if(cljs.core.truth_(inst_1275709)){
var statearr_1275817_1275879 = state_1275740__$1;
(statearr_1275817_1275879[(1)] = (39));

} else {
var statearr_1275818_1275880 = state_1275740__$1;
(statearr_1275818_1275880[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1275741 === (8))){
var inst_1275624 = (state_1275740[(13)]);
var inst_1275623 = (state_1275740[(14)]);
var inst_1275626 = (inst_1275624 < inst_1275623);
var inst_1275627 = inst_1275626;
var state_1275740__$1 = state_1275740;
if(cljs.core.truth_(inst_1275627)){
var statearr_1275819_1275881 = state_1275740__$1;
(statearr_1275819_1275881[(1)] = (10));

} else {
var statearr_1275820_1275882 = state_1275740__$1;
(statearr_1275820_1275882[(1)] = (11));

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
});})(c__9199__auto___1275828,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1275828,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1275824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1275824[(0)] = state_machine__9185__auto__);

(statearr_1275824[(1)] = (1));

return statearr_1275824;
});
var state_machine__9185__auto____1 = (function (state_1275740){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1275740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1275825){if((e1275825 instanceof Object)){
var ex__9188__auto__ = e1275825;
var statearr_1275826_1275883 = state_1275740;
(statearr_1275826_1275883[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1275740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1275825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1275884 = state_1275740;
state_1275740 = G__1275884;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1275740){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1275740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1275828,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1275827 = f__9200__auto__.call(null);
(statearr_1275827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1275828);

return statearr_1275827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1275828,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj1275886 = {};
return obj1275886;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__1275887){
var map__1275892 = p__1275887;
var map__1275892__$1 = ((cljs.core.seq_QMARK_.call(null,map__1275892))?cljs.core.apply.call(null,cljs.core.hash_map,map__1275892):map__1275892);
var opts = map__1275892__$1;
var statearr_1275893_1275896 = state;
(statearr_1275893_1275896[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__1275892,map__1275892__$1,opts){
return (function (val){
var statearr_1275894_1275897 = state;
(statearr_1275894_1275897[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1275892,map__1275892__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_1275895_1275898 = state;
(statearr_1275895_1275898[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__1275887 = null;
if (arguments.length > 3) {
  p__1275887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__1275887);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__1275899){
var state = cljs.core.first(arglist__1275899);
arglist__1275899 = cljs.core.next(arglist__1275899);
var cont_block = cljs.core.first(arglist__1275899);
arglist__1275899 = cljs.core.next(arglist__1275899);
var ports = cljs.core.first(arglist__1275899);
var p__1275887 = cljs.core.rest(arglist__1275899);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__1275887);
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
if(typeof cljs.core.async.t1276019 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276019 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1276020){
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
this.meta1276020 = meta1276020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276019.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t1276019.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t1276019.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1276019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1276021){
var self__ = this;
var _1276021__$1 = this;
return self__.meta1276020;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1276021,meta1276020__$1){
var self__ = this;
var _1276021__$1 = this;
return (new cljs.core.async.t1276019(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1276020__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1276019.cljs$lang$type = true;

cljs.core.async.t1276019.cljs$lang$ctorStr = "cljs.core.async/t1276019";

cljs.core.async.t1276019.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276019");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t1276019 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t1276019(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1276020){
return (new cljs.core.async.t1276019(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1276020));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t1276019(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1276138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1276091){
var state_val_1276092 = (state_1276091[(1)]);
if((state_val_1276092 === (7))){
var inst_1276035 = (state_1276091[(7)]);
var inst_1276040 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1276035);
var state_1276091__$1 = state_1276091;
var statearr_1276093_1276139 = state_1276091__$1;
(statearr_1276093_1276139[(2)] = inst_1276040);

(statearr_1276093_1276139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (20))){
var inst_1276050 = (state_1276091[(8)]);
var state_1276091__$1 = state_1276091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276091__$1,(23),out,inst_1276050);
} else {
if((state_val_1276092 === (1))){
var inst_1276025 = (state_1276091[(9)]);
var inst_1276025__$1 = calc_state.call(null);
var inst_1276026 = cljs.core.seq_QMARK_.call(null,inst_1276025__$1);
var state_1276091__$1 = (function (){var statearr_1276094 = state_1276091;
(statearr_1276094[(9)] = inst_1276025__$1);

return statearr_1276094;
})();
if(inst_1276026){
var statearr_1276095_1276140 = state_1276091__$1;
(statearr_1276095_1276140[(1)] = (2));

} else {
var statearr_1276096_1276141 = state_1276091__$1;
(statearr_1276096_1276141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (24))){
var inst_1276043 = (state_1276091[(10)]);
var inst_1276035 = inst_1276043;
var state_1276091__$1 = (function (){var statearr_1276097 = state_1276091;
(statearr_1276097[(7)] = inst_1276035);

return statearr_1276097;
})();
var statearr_1276098_1276142 = state_1276091__$1;
(statearr_1276098_1276142[(2)] = null);

(statearr_1276098_1276142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (4))){
var inst_1276025 = (state_1276091[(9)]);
var inst_1276031 = (state_1276091[(2)]);
var inst_1276032 = cljs.core.get.call(null,inst_1276031,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1276033 = cljs.core.get.call(null,inst_1276031,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1276034 = cljs.core.get.call(null,inst_1276031,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1276035 = inst_1276025;
var state_1276091__$1 = (function (){var statearr_1276099 = state_1276091;
(statearr_1276099[(11)] = inst_1276032);

(statearr_1276099[(12)] = inst_1276033);

(statearr_1276099[(13)] = inst_1276034);

(statearr_1276099[(7)] = inst_1276035);

return statearr_1276099;
})();
var statearr_1276100_1276143 = state_1276091__$1;
(statearr_1276100_1276143[(2)] = null);

(statearr_1276100_1276143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (15))){
var state_1276091__$1 = state_1276091;
var statearr_1276101_1276144 = state_1276091__$1;
(statearr_1276101_1276144[(2)] = null);

(statearr_1276101_1276144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (21))){
var inst_1276043 = (state_1276091[(10)]);
var inst_1276035 = inst_1276043;
var state_1276091__$1 = (function (){var statearr_1276102 = state_1276091;
(statearr_1276102[(7)] = inst_1276035);

return statearr_1276102;
})();
var statearr_1276103_1276145 = state_1276091__$1;
(statearr_1276103_1276145[(2)] = null);

(statearr_1276103_1276145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (13))){
var inst_1276087 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
var statearr_1276104_1276146 = state_1276091__$1;
(statearr_1276104_1276146[(2)] = inst_1276087);

(statearr_1276104_1276146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (22))){
var inst_1276085 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
var statearr_1276105_1276147 = state_1276091__$1;
(statearr_1276105_1276147[(2)] = inst_1276085);

(statearr_1276105_1276147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (6))){
var inst_1276089 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276091__$1,inst_1276089);
} else {
if((state_val_1276092 === (25))){
var state_1276091__$1 = state_1276091;
var statearr_1276106_1276148 = state_1276091__$1;
(statearr_1276106_1276148[(2)] = null);

(statearr_1276106_1276148[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (17))){
var inst_1276065 = (state_1276091[(14)]);
var state_1276091__$1 = state_1276091;
var statearr_1276107_1276149 = state_1276091__$1;
(statearr_1276107_1276149[(2)] = inst_1276065);

(statearr_1276107_1276149[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (3))){
var inst_1276025 = (state_1276091[(9)]);
var state_1276091__$1 = state_1276091;
var statearr_1276108_1276150 = state_1276091__$1;
(statearr_1276108_1276150[(2)] = inst_1276025);

(statearr_1276108_1276150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (12))){
var inst_1276051 = (state_1276091[(15)]);
var inst_1276046 = (state_1276091[(16)]);
var inst_1276065 = (state_1276091[(14)]);
var inst_1276065__$1 = inst_1276046.call(null,inst_1276051);
var state_1276091__$1 = (function (){var statearr_1276109 = state_1276091;
(statearr_1276109[(14)] = inst_1276065__$1);

return statearr_1276109;
})();
if(cljs.core.truth_(inst_1276065__$1)){
var statearr_1276110_1276151 = state_1276091__$1;
(statearr_1276110_1276151[(1)] = (17));

} else {
var statearr_1276111_1276152 = state_1276091__$1;
(statearr_1276111_1276152[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (2))){
var inst_1276025 = (state_1276091[(9)]);
var inst_1276028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1276025);
var state_1276091__$1 = state_1276091;
var statearr_1276112_1276153 = state_1276091__$1;
(statearr_1276112_1276153[(2)] = inst_1276028);

(statearr_1276112_1276153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (23))){
var inst_1276076 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
if(cljs.core.truth_(inst_1276076)){
var statearr_1276113_1276154 = state_1276091__$1;
(statearr_1276113_1276154[(1)] = (24));

} else {
var statearr_1276114_1276155 = state_1276091__$1;
(statearr_1276114_1276155[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (19))){
var inst_1276073 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
if(cljs.core.truth_(inst_1276073)){
var statearr_1276115_1276156 = state_1276091__$1;
(statearr_1276115_1276156[(1)] = (20));

} else {
var statearr_1276116_1276157 = state_1276091__$1;
(statearr_1276116_1276157[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (11))){
var inst_1276050 = (state_1276091[(8)]);
var inst_1276056 = (inst_1276050 == null);
var state_1276091__$1 = state_1276091;
if(cljs.core.truth_(inst_1276056)){
var statearr_1276117_1276158 = state_1276091__$1;
(statearr_1276117_1276158[(1)] = (14));

} else {
var statearr_1276118_1276159 = state_1276091__$1;
(statearr_1276118_1276159[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (9))){
var inst_1276043 = (state_1276091[(10)]);
var inst_1276043__$1 = (state_1276091[(2)]);
var inst_1276044 = cljs.core.get.call(null,inst_1276043__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1276045 = cljs.core.get.call(null,inst_1276043__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1276046 = cljs.core.get.call(null,inst_1276043__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_1276091__$1 = (function (){var statearr_1276119 = state_1276091;
(statearr_1276119[(17)] = inst_1276045);

(statearr_1276119[(16)] = inst_1276046);

(statearr_1276119[(10)] = inst_1276043__$1);

return statearr_1276119;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1276091__$1,(10),inst_1276044);
} else {
if((state_val_1276092 === (5))){
var inst_1276035 = (state_1276091[(7)]);
var inst_1276038 = cljs.core.seq_QMARK_.call(null,inst_1276035);
var state_1276091__$1 = state_1276091;
if(inst_1276038){
var statearr_1276120_1276160 = state_1276091__$1;
(statearr_1276120_1276160[(1)] = (7));

} else {
var statearr_1276121_1276161 = state_1276091__$1;
(statearr_1276121_1276161[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (14))){
var inst_1276051 = (state_1276091[(15)]);
var inst_1276058 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1276051);
var state_1276091__$1 = state_1276091;
var statearr_1276122_1276162 = state_1276091__$1;
(statearr_1276122_1276162[(2)] = inst_1276058);

(statearr_1276122_1276162[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (26))){
var inst_1276081 = (state_1276091[(2)]);
var state_1276091__$1 = state_1276091;
var statearr_1276123_1276163 = state_1276091__$1;
(statearr_1276123_1276163[(2)] = inst_1276081);

(statearr_1276123_1276163[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (16))){
var inst_1276061 = (state_1276091[(2)]);
var inst_1276062 = calc_state.call(null);
var inst_1276035 = inst_1276062;
var state_1276091__$1 = (function (){var statearr_1276124 = state_1276091;
(statearr_1276124[(18)] = inst_1276061);

(statearr_1276124[(7)] = inst_1276035);

return statearr_1276124;
})();
var statearr_1276125_1276164 = state_1276091__$1;
(statearr_1276125_1276164[(2)] = null);

(statearr_1276125_1276164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (10))){
var inst_1276051 = (state_1276091[(15)]);
var inst_1276050 = (state_1276091[(8)]);
var inst_1276049 = (state_1276091[(2)]);
var inst_1276050__$1 = cljs.core.nth.call(null,inst_1276049,(0),null);
var inst_1276051__$1 = cljs.core.nth.call(null,inst_1276049,(1),null);
var inst_1276052 = (inst_1276050__$1 == null);
var inst_1276053 = cljs.core._EQ_.call(null,inst_1276051__$1,change);
var inst_1276054 = (inst_1276052) || (inst_1276053);
var state_1276091__$1 = (function (){var statearr_1276126 = state_1276091;
(statearr_1276126[(15)] = inst_1276051__$1);

(statearr_1276126[(8)] = inst_1276050__$1);

return statearr_1276126;
})();
if(cljs.core.truth_(inst_1276054)){
var statearr_1276127_1276165 = state_1276091__$1;
(statearr_1276127_1276165[(1)] = (11));

} else {
var statearr_1276128_1276166 = state_1276091__$1;
(statearr_1276128_1276166[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (18))){
var inst_1276045 = (state_1276091[(17)]);
var inst_1276051 = (state_1276091[(15)]);
var inst_1276046 = (state_1276091[(16)]);
var inst_1276068 = cljs.core.empty_QMARK_.call(null,inst_1276046);
var inst_1276069 = inst_1276045.call(null,inst_1276051);
var inst_1276070 = cljs.core.not.call(null,inst_1276069);
var inst_1276071 = (inst_1276068) && (inst_1276070);
var state_1276091__$1 = state_1276091;
var statearr_1276129_1276167 = state_1276091__$1;
(statearr_1276129_1276167[(2)] = inst_1276071);

(statearr_1276129_1276167[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276092 === (8))){
var inst_1276035 = (state_1276091[(7)]);
var state_1276091__$1 = state_1276091;
var statearr_1276130_1276168 = state_1276091__$1;
(statearr_1276130_1276168[(2)] = inst_1276035);

(statearr_1276130_1276168[(1)] = (9));


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
});})(c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1276134[(0)] = state_machine__9185__auto__);

(statearr_1276134[(1)] = (1));

return statearr_1276134;
});
var state_machine__9185__auto____1 = (function (state_1276091){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276135){if((e1276135 instanceof Object)){
var ex__9188__auto__ = e1276135;
var statearr_1276136_1276169 = state_1276091;
(statearr_1276136_1276169[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276170 = state_1276091;
state_1276091 = G__1276170;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276091){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_1276137 = f__9200__auto__.call(null);
(statearr_1276137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276138);

return statearr_1276137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj1276172 = {};
return obj1276172;
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
return (function (p1__1276173_SHARP_){
if(cljs.core.truth_(p1__1276173_SHARP_.call(null,topic))){
return p1__1276173_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1276173_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t1276296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276296 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta1276297){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta1276297 = meta1276297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276296.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t1276296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t1276296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1276296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1276298){
var self__ = this;
var _1276298__$1 = this;
return self__.meta1276297;
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1276298,meta1276297__$1){
var self__ = this;
var _1276298__$1 = this;
return (new cljs.core.async.t1276296(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta1276297__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t1276296.cljs$lang$type = true;

cljs.core.async.t1276296.cljs$lang$ctorStr = "cljs.core.async/t1276296";

cljs.core.async.t1276296.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276296");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t1276296 = ((function (mults,ensure_mult){
return (function __GT_t1276296(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1276297){
return (new cljs.core.async.t1276296(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1276297));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t1276296(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1276418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276418,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276418,mults,ensure_mult,p){
return (function (state_1276370){
var state_val_1276371 = (state_1276370[(1)]);
if((state_val_1276371 === (7))){
var inst_1276366 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276372_1276419 = state_1276370__$1;
(statearr_1276372_1276419[(2)] = inst_1276366);

(statearr_1276372_1276419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (20))){
var state_1276370__$1 = state_1276370;
var statearr_1276373_1276420 = state_1276370__$1;
(statearr_1276373_1276420[(2)] = null);

(statearr_1276373_1276420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (1))){
var state_1276370__$1 = state_1276370;
var statearr_1276374_1276421 = state_1276370__$1;
(statearr_1276374_1276421[(2)] = null);

(statearr_1276374_1276421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (24))){
var inst_1276349 = (state_1276370[(7)]);
var inst_1276358 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1276349);
var state_1276370__$1 = state_1276370;
var statearr_1276375_1276422 = state_1276370__$1;
(statearr_1276375_1276422[(2)] = inst_1276358);

(statearr_1276375_1276422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (4))){
var inst_1276301 = (state_1276370[(8)]);
var inst_1276301__$1 = (state_1276370[(2)]);
var inst_1276302 = (inst_1276301__$1 == null);
var state_1276370__$1 = (function (){var statearr_1276376 = state_1276370;
(statearr_1276376[(8)] = inst_1276301__$1);

return statearr_1276376;
})();
if(cljs.core.truth_(inst_1276302)){
var statearr_1276377_1276423 = state_1276370__$1;
(statearr_1276377_1276423[(1)] = (5));

} else {
var statearr_1276378_1276424 = state_1276370__$1;
(statearr_1276378_1276424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (15))){
var inst_1276343 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276379_1276425 = state_1276370__$1;
(statearr_1276379_1276425[(2)] = inst_1276343);

(statearr_1276379_1276425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (21))){
var inst_1276363 = (state_1276370[(2)]);
var state_1276370__$1 = (function (){var statearr_1276380 = state_1276370;
(statearr_1276380[(9)] = inst_1276363);

return statearr_1276380;
})();
var statearr_1276381_1276426 = state_1276370__$1;
(statearr_1276381_1276426[(2)] = null);

(statearr_1276381_1276426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (13))){
var inst_1276325 = (state_1276370[(10)]);
var inst_1276327 = cljs.core.chunked_seq_QMARK_.call(null,inst_1276325);
var state_1276370__$1 = state_1276370;
if(inst_1276327){
var statearr_1276382_1276427 = state_1276370__$1;
(statearr_1276382_1276427[(1)] = (16));

} else {
var statearr_1276383_1276428 = state_1276370__$1;
(statearr_1276383_1276428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (22))){
var inst_1276355 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
if(cljs.core.truth_(inst_1276355)){
var statearr_1276384_1276429 = state_1276370__$1;
(statearr_1276384_1276429[(1)] = (23));

} else {
var statearr_1276385_1276430 = state_1276370__$1;
(statearr_1276385_1276430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (6))){
var inst_1276351 = (state_1276370[(11)]);
var inst_1276349 = (state_1276370[(7)]);
var inst_1276301 = (state_1276370[(8)]);
var inst_1276349__$1 = topic_fn.call(null,inst_1276301);
var inst_1276350 = cljs.core.deref.call(null,mults);
var inst_1276351__$1 = cljs.core.get.call(null,inst_1276350,inst_1276349__$1);
var state_1276370__$1 = (function (){var statearr_1276386 = state_1276370;
(statearr_1276386[(11)] = inst_1276351__$1);

(statearr_1276386[(7)] = inst_1276349__$1);

return statearr_1276386;
})();
if(cljs.core.truth_(inst_1276351__$1)){
var statearr_1276387_1276431 = state_1276370__$1;
(statearr_1276387_1276431[(1)] = (19));

} else {
var statearr_1276388_1276432 = state_1276370__$1;
(statearr_1276388_1276432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (25))){
var inst_1276360 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276389_1276433 = state_1276370__$1;
(statearr_1276389_1276433[(2)] = inst_1276360);

(statearr_1276389_1276433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (17))){
var inst_1276325 = (state_1276370[(10)]);
var inst_1276334 = cljs.core.first.call(null,inst_1276325);
var inst_1276335 = cljs.core.async.muxch_STAR_.call(null,inst_1276334);
var inst_1276336 = cljs.core.async.close_BANG_.call(null,inst_1276335);
var inst_1276337 = cljs.core.next.call(null,inst_1276325);
var inst_1276311 = inst_1276337;
var inst_1276312 = null;
var inst_1276313 = (0);
var inst_1276314 = (0);
var state_1276370__$1 = (function (){var statearr_1276390 = state_1276370;
(statearr_1276390[(12)] = inst_1276311);

(statearr_1276390[(13)] = inst_1276336);

(statearr_1276390[(14)] = inst_1276312);

(statearr_1276390[(15)] = inst_1276314);

(statearr_1276390[(16)] = inst_1276313);

return statearr_1276390;
})();
var statearr_1276391_1276434 = state_1276370__$1;
(statearr_1276391_1276434[(2)] = null);

(statearr_1276391_1276434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (3))){
var inst_1276368 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276370__$1,inst_1276368);
} else {
if((state_val_1276371 === (12))){
var inst_1276345 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276392_1276435 = state_1276370__$1;
(statearr_1276392_1276435[(2)] = inst_1276345);

(statearr_1276392_1276435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (2))){
var state_1276370__$1 = state_1276370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1276370__$1,(4),ch);
} else {
if((state_val_1276371 === (23))){
var state_1276370__$1 = state_1276370;
var statearr_1276393_1276436 = state_1276370__$1;
(statearr_1276393_1276436[(2)] = null);

(statearr_1276393_1276436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (19))){
var inst_1276351 = (state_1276370[(11)]);
var inst_1276301 = (state_1276370[(8)]);
var inst_1276353 = cljs.core.async.muxch_STAR_.call(null,inst_1276351);
var state_1276370__$1 = state_1276370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276370__$1,(22),inst_1276353,inst_1276301);
} else {
if((state_val_1276371 === (11))){
var inst_1276311 = (state_1276370[(12)]);
var inst_1276325 = (state_1276370[(10)]);
var inst_1276325__$1 = cljs.core.seq.call(null,inst_1276311);
var state_1276370__$1 = (function (){var statearr_1276394 = state_1276370;
(statearr_1276394[(10)] = inst_1276325__$1);

return statearr_1276394;
})();
if(inst_1276325__$1){
var statearr_1276395_1276437 = state_1276370__$1;
(statearr_1276395_1276437[(1)] = (13));

} else {
var statearr_1276396_1276438 = state_1276370__$1;
(statearr_1276396_1276438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (9))){
var inst_1276347 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276397_1276439 = state_1276370__$1;
(statearr_1276397_1276439[(2)] = inst_1276347);

(statearr_1276397_1276439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (5))){
var inst_1276308 = cljs.core.deref.call(null,mults);
var inst_1276309 = cljs.core.vals.call(null,inst_1276308);
var inst_1276310 = cljs.core.seq.call(null,inst_1276309);
var inst_1276311 = inst_1276310;
var inst_1276312 = null;
var inst_1276313 = (0);
var inst_1276314 = (0);
var state_1276370__$1 = (function (){var statearr_1276398 = state_1276370;
(statearr_1276398[(12)] = inst_1276311);

(statearr_1276398[(14)] = inst_1276312);

(statearr_1276398[(15)] = inst_1276314);

(statearr_1276398[(16)] = inst_1276313);

return statearr_1276398;
})();
var statearr_1276399_1276440 = state_1276370__$1;
(statearr_1276399_1276440[(2)] = null);

(statearr_1276399_1276440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (14))){
var state_1276370__$1 = state_1276370;
var statearr_1276403_1276441 = state_1276370__$1;
(statearr_1276403_1276441[(2)] = null);

(statearr_1276403_1276441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (16))){
var inst_1276325 = (state_1276370[(10)]);
var inst_1276329 = cljs.core.chunk_first.call(null,inst_1276325);
var inst_1276330 = cljs.core.chunk_rest.call(null,inst_1276325);
var inst_1276331 = cljs.core.count.call(null,inst_1276329);
var inst_1276311 = inst_1276330;
var inst_1276312 = inst_1276329;
var inst_1276313 = inst_1276331;
var inst_1276314 = (0);
var state_1276370__$1 = (function (){var statearr_1276404 = state_1276370;
(statearr_1276404[(12)] = inst_1276311);

(statearr_1276404[(14)] = inst_1276312);

(statearr_1276404[(15)] = inst_1276314);

(statearr_1276404[(16)] = inst_1276313);

return statearr_1276404;
})();
var statearr_1276405_1276442 = state_1276370__$1;
(statearr_1276405_1276442[(2)] = null);

(statearr_1276405_1276442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (10))){
var inst_1276311 = (state_1276370[(12)]);
var inst_1276312 = (state_1276370[(14)]);
var inst_1276314 = (state_1276370[(15)]);
var inst_1276313 = (state_1276370[(16)]);
var inst_1276319 = cljs.core._nth.call(null,inst_1276312,inst_1276314);
var inst_1276320 = cljs.core.async.muxch_STAR_.call(null,inst_1276319);
var inst_1276321 = cljs.core.async.close_BANG_.call(null,inst_1276320);
var inst_1276322 = (inst_1276314 + (1));
var tmp1276400 = inst_1276311;
var tmp1276401 = inst_1276312;
var tmp1276402 = inst_1276313;
var inst_1276311__$1 = tmp1276400;
var inst_1276312__$1 = tmp1276401;
var inst_1276313__$1 = tmp1276402;
var inst_1276314__$1 = inst_1276322;
var state_1276370__$1 = (function (){var statearr_1276406 = state_1276370;
(statearr_1276406[(12)] = inst_1276311__$1);

(statearr_1276406[(17)] = inst_1276321);

(statearr_1276406[(14)] = inst_1276312__$1);

(statearr_1276406[(15)] = inst_1276314__$1);

(statearr_1276406[(16)] = inst_1276313__$1);

return statearr_1276406;
})();
var statearr_1276407_1276443 = state_1276370__$1;
(statearr_1276407_1276443[(2)] = null);

(statearr_1276407_1276443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (18))){
var inst_1276340 = (state_1276370[(2)]);
var state_1276370__$1 = state_1276370;
var statearr_1276408_1276444 = state_1276370__$1;
(statearr_1276408_1276444[(2)] = inst_1276340);

(statearr_1276408_1276444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276371 === (8))){
var inst_1276314 = (state_1276370[(15)]);
var inst_1276313 = (state_1276370[(16)]);
var inst_1276316 = (inst_1276314 < inst_1276313);
var inst_1276317 = inst_1276316;
var state_1276370__$1 = state_1276370;
if(cljs.core.truth_(inst_1276317)){
var statearr_1276409_1276445 = state_1276370__$1;
(statearr_1276409_1276445[(1)] = (10));

} else {
var statearr_1276410_1276446 = state_1276370__$1;
(statearr_1276410_1276446[(1)] = (11));

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
});})(c__9199__auto___1276418,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___1276418,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1276414[(0)] = state_machine__9185__auto__);

(statearr_1276414[(1)] = (1));

return statearr_1276414;
});
var state_machine__9185__auto____1 = (function (state_1276370){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276415){if((e1276415 instanceof Object)){
var ex__9188__auto__ = e1276415;
var statearr_1276416_1276447 = state_1276370;
(statearr_1276416_1276447[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276448 = state_1276370;
state_1276370 = G__1276448;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276370){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276418,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_1276417 = f__9200__auto__.call(null);
(statearr_1276417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276418);

return statearr_1276417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276418,mults,ensure_mult,p))
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
var c__9199__auto___1276585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1276555){
var state_val_1276556 = (state_1276555[(1)]);
if((state_val_1276556 === (7))){
var state_1276555__$1 = state_1276555;
var statearr_1276557_1276586 = state_1276555__$1;
(statearr_1276557_1276586[(2)] = null);

(statearr_1276557_1276586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (1))){
var state_1276555__$1 = state_1276555;
var statearr_1276558_1276587 = state_1276555__$1;
(statearr_1276558_1276587[(2)] = null);

(statearr_1276558_1276587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (4))){
var inst_1276519 = (state_1276555[(7)]);
var inst_1276521 = (inst_1276519 < cnt);
var state_1276555__$1 = state_1276555;
if(cljs.core.truth_(inst_1276521)){
var statearr_1276559_1276588 = state_1276555__$1;
(statearr_1276559_1276588[(1)] = (6));

} else {
var statearr_1276560_1276589 = state_1276555__$1;
(statearr_1276560_1276589[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (15))){
var inst_1276551 = (state_1276555[(2)]);
var state_1276555__$1 = state_1276555;
var statearr_1276561_1276590 = state_1276555__$1;
(statearr_1276561_1276590[(2)] = inst_1276551);

(statearr_1276561_1276590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (13))){
var inst_1276544 = cljs.core.async.close_BANG_.call(null,out);
var state_1276555__$1 = state_1276555;
var statearr_1276562_1276591 = state_1276555__$1;
(statearr_1276562_1276591[(2)] = inst_1276544);

(statearr_1276562_1276591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (6))){
var state_1276555__$1 = state_1276555;
var statearr_1276563_1276592 = state_1276555__$1;
(statearr_1276563_1276592[(2)] = null);

(statearr_1276563_1276592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (3))){
var inst_1276553 = (state_1276555[(2)]);
var state_1276555__$1 = state_1276555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276555__$1,inst_1276553);
} else {
if((state_val_1276556 === (12))){
var inst_1276541 = (state_1276555[(8)]);
var inst_1276541__$1 = (state_1276555[(2)]);
var inst_1276542 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1276541__$1);
var state_1276555__$1 = (function (){var statearr_1276564 = state_1276555;
(statearr_1276564[(8)] = inst_1276541__$1);

return statearr_1276564;
})();
if(cljs.core.truth_(inst_1276542)){
var statearr_1276565_1276593 = state_1276555__$1;
(statearr_1276565_1276593[(1)] = (13));

} else {
var statearr_1276566_1276594 = state_1276555__$1;
(statearr_1276566_1276594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (2))){
var inst_1276518 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1276519 = (0);
var state_1276555__$1 = (function (){var statearr_1276567 = state_1276555;
(statearr_1276567[(7)] = inst_1276519);

(statearr_1276567[(9)] = inst_1276518);

return statearr_1276567;
})();
var statearr_1276568_1276595 = state_1276555__$1;
(statearr_1276568_1276595[(2)] = null);

(statearr_1276568_1276595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (11))){
var inst_1276519 = (state_1276555[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1276555,(10),Object,null,(9));
var inst_1276528 = chs__$1.call(null,inst_1276519);
var inst_1276529 = done.call(null,inst_1276519);
var inst_1276530 = cljs.core.async.take_BANG_.call(null,inst_1276528,inst_1276529);
var state_1276555__$1 = state_1276555;
var statearr_1276569_1276596 = state_1276555__$1;
(statearr_1276569_1276596[(2)] = inst_1276530);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (9))){
var inst_1276519 = (state_1276555[(7)]);
var inst_1276532 = (state_1276555[(2)]);
var inst_1276533 = (inst_1276519 + (1));
var inst_1276519__$1 = inst_1276533;
var state_1276555__$1 = (function (){var statearr_1276570 = state_1276555;
(statearr_1276570[(10)] = inst_1276532);

(statearr_1276570[(7)] = inst_1276519__$1);

return statearr_1276570;
})();
var statearr_1276571_1276597 = state_1276555__$1;
(statearr_1276571_1276597[(2)] = null);

(statearr_1276571_1276597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (5))){
var inst_1276539 = (state_1276555[(2)]);
var state_1276555__$1 = (function (){var statearr_1276572 = state_1276555;
(statearr_1276572[(11)] = inst_1276539);

return statearr_1276572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1276555__$1,(12),dchan);
} else {
if((state_val_1276556 === (14))){
var inst_1276541 = (state_1276555[(8)]);
var inst_1276546 = cljs.core.apply.call(null,f,inst_1276541);
var state_1276555__$1 = state_1276555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276555__$1,(16),out,inst_1276546);
} else {
if((state_val_1276556 === (16))){
var inst_1276548 = (state_1276555[(2)]);
var state_1276555__$1 = (function (){var statearr_1276573 = state_1276555;
(statearr_1276573[(12)] = inst_1276548);

return statearr_1276573;
})();
var statearr_1276574_1276598 = state_1276555__$1;
(statearr_1276574_1276598[(2)] = null);

(statearr_1276574_1276598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (10))){
var inst_1276523 = (state_1276555[(2)]);
var inst_1276524 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1276555__$1 = (function (){var statearr_1276575 = state_1276555;
(statearr_1276575[(13)] = inst_1276523);

return statearr_1276575;
})();
var statearr_1276576_1276599 = state_1276555__$1;
(statearr_1276576_1276599[(2)] = inst_1276524);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276556 === (8))){
var inst_1276537 = (state_1276555[(2)]);
var state_1276555__$1 = state_1276555;
var statearr_1276577_1276600 = state_1276555__$1;
(statearr_1276577_1276600[(2)] = inst_1276537);

(statearr_1276577_1276600[(1)] = (5));


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
});})(c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1276581[(0)] = state_machine__9185__auto__);

(statearr_1276581[(1)] = (1));

return statearr_1276581;
});
var state_machine__9185__auto____1 = (function (state_1276555){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276582){if((e1276582 instanceof Object)){
var ex__9188__auto__ = e1276582;
var statearr_1276583_1276601 = state_1276555;
(statearr_1276583_1276601[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276602 = state_1276555;
state_1276555 = G__1276602;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276555){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1276584 = f__9200__auto__.call(null);
(statearr_1276584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276585);

return statearr_1276584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276585,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___1276710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276710,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276710,out){
return (function (state_1276686){
var state_val_1276687 = (state_1276686[(1)]);
if((state_val_1276687 === (7))){
var inst_1276666 = (state_1276686[(7)]);
var inst_1276665 = (state_1276686[(8)]);
var inst_1276665__$1 = (state_1276686[(2)]);
var inst_1276666__$1 = cljs.core.nth.call(null,inst_1276665__$1,(0),null);
var inst_1276667 = cljs.core.nth.call(null,inst_1276665__$1,(1),null);
var inst_1276668 = (inst_1276666__$1 == null);
var state_1276686__$1 = (function (){var statearr_1276688 = state_1276686;
(statearr_1276688[(9)] = inst_1276667);

(statearr_1276688[(7)] = inst_1276666__$1);

(statearr_1276688[(8)] = inst_1276665__$1);

return statearr_1276688;
})();
if(cljs.core.truth_(inst_1276668)){
var statearr_1276689_1276711 = state_1276686__$1;
(statearr_1276689_1276711[(1)] = (8));

} else {
var statearr_1276690_1276712 = state_1276686__$1;
(statearr_1276690_1276712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (1))){
var inst_1276657 = cljs.core.vec.call(null,chs);
var inst_1276658 = inst_1276657;
var state_1276686__$1 = (function (){var statearr_1276691 = state_1276686;
(statearr_1276691[(10)] = inst_1276658);

return statearr_1276691;
})();
var statearr_1276692_1276713 = state_1276686__$1;
(statearr_1276692_1276713[(2)] = null);

(statearr_1276692_1276713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (4))){
var inst_1276658 = (state_1276686[(10)]);
var state_1276686__$1 = state_1276686;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1276686__$1,(7),inst_1276658);
} else {
if((state_val_1276687 === (6))){
var inst_1276682 = (state_1276686[(2)]);
var state_1276686__$1 = state_1276686;
var statearr_1276693_1276714 = state_1276686__$1;
(statearr_1276693_1276714[(2)] = inst_1276682);

(statearr_1276693_1276714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (3))){
var inst_1276684 = (state_1276686[(2)]);
var state_1276686__$1 = state_1276686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276686__$1,inst_1276684);
} else {
if((state_val_1276687 === (2))){
var inst_1276658 = (state_1276686[(10)]);
var inst_1276660 = cljs.core.count.call(null,inst_1276658);
var inst_1276661 = (inst_1276660 > (0));
var state_1276686__$1 = state_1276686;
if(cljs.core.truth_(inst_1276661)){
var statearr_1276695_1276715 = state_1276686__$1;
(statearr_1276695_1276715[(1)] = (4));

} else {
var statearr_1276696_1276716 = state_1276686__$1;
(statearr_1276696_1276716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (11))){
var inst_1276658 = (state_1276686[(10)]);
var inst_1276675 = (state_1276686[(2)]);
var tmp1276694 = inst_1276658;
var inst_1276658__$1 = tmp1276694;
var state_1276686__$1 = (function (){var statearr_1276697 = state_1276686;
(statearr_1276697[(11)] = inst_1276675);

(statearr_1276697[(10)] = inst_1276658__$1);

return statearr_1276697;
})();
var statearr_1276698_1276717 = state_1276686__$1;
(statearr_1276698_1276717[(2)] = null);

(statearr_1276698_1276717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (9))){
var inst_1276666 = (state_1276686[(7)]);
var state_1276686__$1 = state_1276686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276686__$1,(11),out,inst_1276666);
} else {
if((state_val_1276687 === (5))){
var inst_1276680 = cljs.core.async.close_BANG_.call(null,out);
var state_1276686__$1 = state_1276686;
var statearr_1276699_1276718 = state_1276686__$1;
(statearr_1276699_1276718[(2)] = inst_1276680);

(statearr_1276699_1276718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (10))){
var inst_1276678 = (state_1276686[(2)]);
var state_1276686__$1 = state_1276686;
var statearr_1276700_1276719 = state_1276686__$1;
(statearr_1276700_1276719[(2)] = inst_1276678);

(statearr_1276700_1276719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276687 === (8))){
var inst_1276667 = (state_1276686[(9)]);
var inst_1276666 = (state_1276686[(7)]);
var inst_1276665 = (state_1276686[(8)]);
var inst_1276658 = (state_1276686[(10)]);
var inst_1276670 = (function (){var c = inst_1276667;
var v = inst_1276666;
var vec__1276663 = inst_1276665;
var cs = inst_1276658;
return ((function (c,v,vec__1276663,cs,inst_1276667,inst_1276666,inst_1276665,inst_1276658,state_val_1276687,c__9199__auto___1276710,out){
return (function (p1__1276603_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1276603_SHARP_);
});
;})(c,v,vec__1276663,cs,inst_1276667,inst_1276666,inst_1276665,inst_1276658,state_val_1276687,c__9199__auto___1276710,out))
})();
var inst_1276671 = cljs.core.filterv.call(null,inst_1276670,inst_1276658);
var inst_1276658__$1 = inst_1276671;
var state_1276686__$1 = (function (){var statearr_1276701 = state_1276686;
(statearr_1276701[(10)] = inst_1276658__$1);

return statearr_1276701;
})();
var statearr_1276702_1276720 = state_1276686__$1;
(statearr_1276702_1276720[(2)] = null);

(statearr_1276702_1276720[(1)] = (2));


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
});})(c__9199__auto___1276710,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1276710,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276706 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1276706[(0)] = state_machine__9185__auto__);

(statearr_1276706[(1)] = (1));

return statearr_1276706;
});
var state_machine__9185__auto____1 = (function (state_1276686){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276707){if((e1276707 instanceof Object)){
var ex__9188__auto__ = e1276707;
var statearr_1276708_1276721 = state_1276686;
(statearr_1276708_1276721[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276722 = state_1276686;
state_1276686 = G__1276722;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276686){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276710,out))
})();
var state__9201__auto__ = (function (){var statearr_1276709 = f__9200__auto__.call(null);
(statearr_1276709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276710);

return statearr_1276709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276710,out))
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
var c__9199__auto___1276815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276815,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276815,out){
return (function (state_1276792){
var state_val_1276793 = (state_1276792[(1)]);
if((state_val_1276793 === (7))){
var inst_1276774 = (state_1276792[(7)]);
var inst_1276774__$1 = (state_1276792[(2)]);
var inst_1276775 = (inst_1276774__$1 == null);
var inst_1276776 = cljs.core.not.call(null,inst_1276775);
var state_1276792__$1 = (function (){var statearr_1276794 = state_1276792;
(statearr_1276794[(7)] = inst_1276774__$1);

return statearr_1276794;
})();
if(inst_1276776){
var statearr_1276795_1276816 = state_1276792__$1;
(statearr_1276795_1276816[(1)] = (8));

} else {
var statearr_1276796_1276817 = state_1276792__$1;
(statearr_1276796_1276817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (1))){
var inst_1276769 = (0);
var state_1276792__$1 = (function (){var statearr_1276797 = state_1276792;
(statearr_1276797[(8)] = inst_1276769);

return statearr_1276797;
})();
var statearr_1276798_1276818 = state_1276792__$1;
(statearr_1276798_1276818[(2)] = null);

(statearr_1276798_1276818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (4))){
var state_1276792__$1 = state_1276792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1276792__$1,(7),ch);
} else {
if((state_val_1276793 === (6))){
var inst_1276787 = (state_1276792[(2)]);
var state_1276792__$1 = state_1276792;
var statearr_1276799_1276819 = state_1276792__$1;
(statearr_1276799_1276819[(2)] = inst_1276787);

(statearr_1276799_1276819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (3))){
var inst_1276789 = (state_1276792[(2)]);
var inst_1276790 = cljs.core.async.close_BANG_.call(null,out);
var state_1276792__$1 = (function (){var statearr_1276800 = state_1276792;
(statearr_1276800[(9)] = inst_1276789);

return statearr_1276800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276792__$1,inst_1276790);
} else {
if((state_val_1276793 === (2))){
var inst_1276769 = (state_1276792[(8)]);
var inst_1276771 = (inst_1276769 < n);
var state_1276792__$1 = state_1276792;
if(cljs.core.truth_(inst_1276771)){
var statearr_1276801_1276820 = state_1276792__$1;
(statearr_1276801_1276820[(1)] = (4));

} else {
var statearr_1276802_1276821 = state_1276792__$1;
(statearr_1276802_1276821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (11))){
var inst_1276769 = (state_1276792[(8)]);
var inst_1276779 = (state_1276792[(2)]);
var inst_1276780 = (inst_1276769 + (1));
var inst_1276769__$1 = inst_1276780;
var state_1276792__$1 = (function (){var statearr_1276803 = state_1276792;
(statearr_1276803[(8)] = inst_1276769__$1);

(statearr_1276803[(10)] = inst_1276779);

return statearr_1276803;
})();
var statearr_1276804_1276822 = state_1276792__$1;
(statearr_1276804_1276822[(2)] = null);

(statearr_1276804_1276822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (9))){
var state_1276792__$1 = state_1276792;
var statearr_1276805_1276823 = state_1276792__$1;
(statearr_1276805_1276823[(2)] = null);

(statearr_1276805_1276823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (5))){
var state_1276792__$1 = state_1276792;
var statearr_1276806_1276824 = state_1276792__$1;
(statearr_1276806_1276824[(2)] = null);

(statearr_1276806_1276824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (10))){
var inst_1276784 = (state_1276792[(2)]);
var state_1276792__$1 = state_1276792;
var statearr_1276807_1276825 = state_1276792__$1;
(statearr_1276807_1276825[(2)] = inst_1276784);

(statearr_1276807_1276825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276793 === (8))){
var inst_1276774 = (state_1276792[(7)]);
var state_1276792__$1 = state_1276792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276792__$1,(11),out,inst_1276774);
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
});})(c__9199__auto___1276815,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1276815,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1276811[(0)] = state_machine__9185__auto__);

(statearr_1276811[(1)] = (1));

return statearr_1276811;
});
var state_machine__9185__auto____1 = (function (state_1276792){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276812){if((e1276812 instanceof Object)){
var ex__9188__auto__ = e1276812;
var statearr_1276813_1276826 = state_1276792;
(statearr_1276813_1276826[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276827 = state_1276792;
state_1276792 = G__1276827;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276792){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276815,out))
})();
var state__9201__auto__ = (function (){var statearr_1276814 = f__9200__auto__.call(null);
(statearr_1276814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276815);

return statearr_1276814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276815,out))
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
if(typeof cljs.core.async.t1276835 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276835 = (function (ch,f,map_LT_,meta1276836){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta1276836 = meta1276836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t1276838 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276838 = (function (fn1,_,meta1276836,map_LT_,f,ch,meta1276839){
this.fn1 = fn1;
this._ = _;
this.meta1276836 = meta1276836;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1276839 = meta1276839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1276838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t1276838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1276828_SHARP_){
return f1.call(null,(((p1__1276828_SHARP_ == null))?null:self__.f.call(null,p1__1276828_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t1276838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1276840){
var self__ = this;
var _1276840__$1 = this;
return self__.meta1276839;
});})(___$1))
;

cljs.core.async.t1276838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1276840,meta1276839__$1){
var self__ = this;
var _1276840__$1 = this;
return (new cljs.core.async.t1276838(self__.fn1,self__._,self__.meta1276836,self__.map_LT_,self__.f,self__.ch,meta1276839__$1));
});})(___$1))
;

cljs.core.async.t1276838.cljs$lang$type = true;

cljs.core.async.t1276838.cljs$lang$ctorStr = "cljs.core.async/t1276838";

cljs.core.async.t1276838.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276838");
});})(___$1))
;

cljs.core.async.__GT_t1276838 = ((function (___$1){
return (function __GT_t1276838(fn1__$1,___$2,meta1276836__$1,map_LT___$1,f__$1,ch__$1,meta1276839){
return (new cljs.core.async.t1276838(fn1__$1,___$2,meta1276836__$1,map_LT___$1,f__$1,ch__$1,meta1276839));
});})(___$1))
;

}

return (new cljs.core.async.t1276838(fn1,___$1,self__.meta1276836,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1276835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1276835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1276837){
var self__ = this;
var _1276837__$1 = this;
return self__.meta1276836;
});

cljs.core.async.t1276835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1276837,meta1276836__$1){
var self__ = this;
var _1276837__$1 = this;
return (new cljs.core.async.t1276835(self__.ch,self__.f,self__.map_LT_,meta1276836__$1));
});

cljs.core.async.t1276835.cljs$lang$type = true;

cljs.core.async.t1276835.cljs$lang$ctorStr = "cljs.core.async/t1276835";

cljs.core.async.t1276835.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276835");
});

cljs.core.async.__GT_t1276835 = (function __GT_t1276835(ch__$1,f__$1,map_LT___$1,meta1276836){
return (new cljs.core.async.t1276835(ch__$1,f__$1,map_LT___$1,meta1276836));
});

}

return (new cljs.core.async.t1276835(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t1276844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276844 = (function (ch,f,map_GT_,meta1276845){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta1276845 = meta1276845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1276844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1276844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1276846){
var self__ = this;
var _1276846__$1 = this;
return self__.meta1276845;
});

cljs.core.async.t1276844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1276846,meta1276845__$1){
var self__ = this;
var _1276846__$1 = this;
return (new cljs.core.async.t1276844(self__.ch,self__.f,self__.map_GT_,meta1276845__$1));
});

cljs.core.async.t1276844.cljs$lang$type = true;

cljs.core.async.t1276844.cljs$lang$ctorStr = "cljs.core.async/t1276844";

cljs.core.async.t1276844.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276844");
});

cljs.core.async.__GT_t1276844 = (function __GT_t1276844(ch__$1,f__$1,map_GT___$1,meta1276845){
return (new cljs.core.async.t1276844(ch__$1,f__$1,map_GT___$1,meta1276845));
});

}

return (new cljs.core.async.t1276844(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t1276850 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1276850 = (function (ch,p,filter_GT_,meta1276851){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta1276851 = meta1276851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1276850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1276850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1276852){
var self__ = this;
var _1276852__$1 = this;
return self__.meta1276851;
});

cljs.core.async.t1276850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1276852,meta1276851__$1){
var self__ = this;
var _1276852__$1 = this;
return (new cljs.core.async.t1276850(self__.ch,self__.p,self__.filter_GT_,meta1276851__$1));
});

cljs.core.async.t1276850.cljs$lang$type = true;

cljs.core.async.t1276850.cljs$lang$ctorStr = "cljs.core.async/t1276850";

cljs.core.async.t1276850.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1276850");
});

cljs.core.async.__GT_t1276850 = (function __GT_t1276850(ch__$1,p__$1,filter_GT___$1,meta1276851){
return (new cljs.core.async.t1276850(ch__$1,p__$1,filter_GT___$1,meta1276851));
});

}

return (new cljs.core.async.t1276850(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1276935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1276935,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1276935,out){
return (function (state_1276914){
var state_val_1276915 = (state_1276914[(1)]);
if((state_val_1276915 === (7))){
var inst_1276910 = (state_1276914[(2)]);
var state_1276914__$1 = state_1276914;
var statearr_1276916_1276936 = state_1276914__$1;
(statearr_1276916_1276936[(2)] = inst_1276910);

(statearr_1276916_1276936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (1))){
var state_1276914__$1 = state_1276914;
var statearr_1276917_1276937 = state_1276914__$1;
(statearr_1276917_1276937[(2)] = null);

(statearr_1276917_1276937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (4))){
var inst_1276896 = (state_1276914[(7)]);
var inst_1276896__$1 = (state_1276914[(2)]);
var inst_1276897 = (inst_1276896__$1 == null);
var state_1276914__$1 = (function (){var statearr_1276918 = state_1276914;
(statearr_1276918[(7)] = inst_1276896__$1);

return statearr_1276918;
})();
if(cljs.core.truth_(inst_1276897)){
var statearr_1276919_1276938 = state_1276914__$1;
(statearr_1276919_1276938[(1)] = (5));

} else {
var statearr_1276920_1276939 = state_1276914__$1;
(statearr_1276920_1276939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (6))){
var inst_1276896 = (state_1276914[(7)]);
var inst_1276901 = p.call(null,inst_1276896);
var state_1276914__$1 = state_1276914;
if(cljs.core.truth_(inst_1276901)){
var statearr_1276921_1276940 = state_1276914__$1;
(statearr_1276921_1276940[(1)] = (8));

} else {
var statearr_1276922_1276941 = state_1276914__$1;
(statearr_1276922_1276941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (3))){
var inst_1276912 = (state_1276914[(2)]);
var state_1276914__$1 = state_1276914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1276914__$1,inst_1276912);
} else {
if((state_val_1276915 === (2))){
var state_1276914__$1 = state_1276914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1276914__$1,(4),ch);
} else {
if((state_val_1276915 === (11))){
var inst_1276904 = (state_1276914[(2)]);
var state_1276914__$1 = state_1276914;
var statearr_1276923_1276942 = state_1276914__$1;
(statearr_1276923_1276942[(2)] = inst_1276904);

(statearr_1276923_1276942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (9))){
var state_1276914__$1 = state_1276914;
var statearr_1276924_1276943 = state_1276914__$1;
(statearr_1276924_1276943[(2)] = null);

(statearr_1276924_1276943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (5))){
var inst_1276899 = cljs.core.async.close_BANG_.call(null,out);
var state_1276914__$1 = state_1276914;
var statearr_1276925_1276944 = state_1276914__$1;
(statearr_1276925_1276944[(2)] = inst_1276899);

(statearr_1276925_1276944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (10))){
var inst_1276907 = (state_1276914[(2)]);
var state_1276914__$1 = (function (){var statearr_1276926 = state_1276914;
(statearr_1276926[(8)] = inst_1276907);

return statearr_1276926;
})();
var statearr_1276927_1276945 = state_1276914__$1;
(statearr_1276927_1276945[(2)] = null);

(statearr_1276927_1276945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1276915 === (8))){
var inst_1276896 = (state_1276914[(7)]);
var state_1276914__$1 = state_1276914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1276914__$1,(11),out,inst_1276896);
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
});})(c__9199__auto___1276935,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1276935,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1276931 = [null,null,null,null,null,null,null,null,null];
(statearr_1276931[(0)] = state_machine__9185__auto__);

(statearr_1276931[(1)] = (1));

return statearr_1276931;
});
var state_machine__9185__auto____1 = (function (state_1276914){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1276914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1276932){if((e1276932 instanceof Object)){
var ex__9188__auto__ = e1276932;
var statearr_1276933_1276946 = state_1276914;
(statearr_1276933_1276946[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1276914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1276932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1276947 = state_1276914;
state_1276914 = G__1276947;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1276914){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1276914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1276935,out))
})();
var state__9201__auto__ = (function (){var statearr_1276934 = f__9200__auto__.call(null);
(statearr_1276934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1276935);

return statearr_1276934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1276935,out))
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
return (function (state_1277113){
var state_val_1277114 = (state_1277113[(1)]);
if((state_val_1277114 === (7))){
var inst_1277109 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
var statearr_1277115_1277156 = state_1277113__$1;
(statearr_1277115_1277156[(2)] = inst_1277109);

(statearr_1277115_1277156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (20))){
var inst_1277079 = (state_1277113[(7)]);
var inst_1277090 = (state_1277113[(2)]);
var inst_1277091 = cljs.core.next.call(null,inst_1277079);
var inst_1277065 = inst_1277091;
var inst_1277066 = null;
var inst_1277067 = (0);
var inst_1277068 = (0);
var state_1277113__$1 = (function (){var statearr_1277116 = state_1277113;
(statearr_1277116[(8)] = inst_1277090);

(statearr_1277116[(9)] = inst_1277067);

(statearr_1277116[(10)] = inst_1277065);

(statearr_1277116[(11)] = inst_1277066);

(statearr_1277116[(12)] = inst_1277068);

return statearr_1277116;
})();
var statearr_1277117_1277157 = state_1277113__$1;
(statearr_1277117_1277157[(2)] = null);

(statearr_1277117_1277157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (1))){
var state_1277113__$1 = state_1277113;
var statearr_1277118_1277158 = state_1277113__$1;
(statearr_1277118_1277158[(2)] = null);

(statearr_1277118_1277158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (4))){
var inst_1277054 = (state_1277113[(13)]);
var inst_1277054__$1 = (state_1277113[(2)]);
var inst_1277055 = (inst_1277054__$1 == null);
var state_1277113__$1 = (function (){var statearr_1277119 = state_1277113;
(statearr_1277119[(13)] = inst_1277054__$1);

return statearr_1277119;
})();
if(cljs.core.truth_(inst_1277055)){
var statearr_1277120_1277159 = state_1277113__$1;
(statearr_1277120_1277159[(1)] = (5));

} else {
var statearr_1277121_1277160 = state_1277113__$1;
(statearr_1277121_1277160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (15))){
var state_1277113__$1 = state_1277113;
var statearr_1277125_1277161 = state_1277113__$1;
(statearr_1277125_1277161[(2)] = null);

(statearr_1277125_1277161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (21))){
var state_1277113__$1 = state_1277113;
var statearr_1277126_1277162 = state_1277113__$1;
(statearr_1277126_1277162[(2)] = null);

(statearr_1277126_1277162[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (13))){
var inst_1277067 = (state_1277113[(9)]);
var inst_1277065 = (state_1277113[(10)]);
var inst_1277066 = (state_1277113[(11)]);
var inst_1277068 = (state_1277113[(12)]);
var inst_1277075 = (state_1277113[(2)]);
var inst_1277076 = (inst_1277068 + (1));
var tmp1277122 = inst_1277067;
var tmp1277123 = inst_1277065;
var tmp1277124 = inst_1277066;
var inst_1277065__$1 = tmp1277123;
var inst_1277066__$1 = tmp1277124;
var inst_1277067__$1 = tmp1277122;
var inst_1277068__$1 = inst_1277076;
var state_1277113__$1 = (function (){var statearr_1277127 = state_1277113;
(statearr_1277127[(9)] = inst_1277067__$1);

(statearr_1277127[(10)] = inst_1277065__$1);

(statearr_1277127[(11)] = inst_1277066__$1);

(statearr_1277127[(14)] = inst_1277075);

(statearr_1277127[(12)] = inst_1277068__$1);

return statearr_1277127;
})();
var statearr_1277128_1277163 = state_1277113__$1;
(statearr_1277128_1277163[(2)] = null);

(statearr_1277128_1277163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (22))){
var state_1277113__$1 = state_1277113;
var statearr_1277129_1277164 = state_1277113__$1;
(statearr_1277129_1277164[(2)] = null);

(statearr_1277129_1277164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (6))){
var inst_1277054 = (state_1277113[(13)]);
var inst_1277063 = f.call(null,inst_1277054);
var inst_1277064 = cljs.core.seq.call(null,inst_1277063);
var inst_1277065 = inst_1277064;
var inst_1277066 = null;
var inst_1277067 = (0);
var inst_1277068 = (0);
var state_1277113__$1 = (function (){var statearr_1277130 = state_1277113;
(statearr_1277130[(9)] = inst_1277067);

(statearr_1277130[(10)] = inst_1277065);

(statearr_1277130[(11)] = inst_1277066);

(statearr_1277130[(12)] = inst_1277068);

return statearr_1277130;
})();
var statearr_1277131_1277165 = state_1277113__$1;
(statearr_1277131_1277165[(2)] = null);

(statearr_1277131_1277165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (17))){
var inst_1277079 = (state_1277113[(7)]);
var inst_1277083 = cljs.core.chunk_first.call(null,inst_1277079);
var inst_1277084 = cljs.core.chunk_rest.call(null,inst_1277079);
var inst_1277085 = cljs.core.count.call(null,inst_1277083);
var inst_1277065 = inst_1277084;
var inst_1277066 = inst_1277083;
var inst_1277067 = inst_1277085;
var inst_1277068 = (0);
var state_1277113__$1 = (function (){var statearr_1277132 = state_1277113;
(statearr_1277132[(9)] = inst_1277067);

(statearr_1277132[(10)] = inst_1277065);

(statearr_1277132[(11)] = inst_1277066);

(statearr_1277132[(12)] = inst_1277068);

return statearr_1277132;
})();
var statearr_1277133_1277166 = state_1277113__$1;
(statearr_1277133_1277166[(2)] = null);

(statearr_1277133_1277166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (3))){
var inst_1277111 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1277113__$1,inst_1277111);
} else {
if((state_val_1277114 === (12))){
var inst_1277099 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
var statearr_1277134_1277167 = state_1277113__$1;
(statearr_1277134_1277167[(2)] = inst_1277099);

(statearr_1277134_1277167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (2))){
var state_1277113__$1 = state_1277113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1277113__$1,(4),in$);
} else {
if((state_val_1277114 === (23))){
var inst_1277107 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
var statearr_1277135_1277168 = state_1277113__$1;
(statearr_1277135_1277168[(2)] = inst_1277107);

(statearr_1277135_1277168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (19))){
var inst_1277094 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
var statearr_1277136_1277169 = state_1277113__$1;
(statearr_1277136_1277169[(2)] = inst_1277094);

(statearr_1277136_1277169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (11))){
var inst_1277065 = (state_1277113[(10)]);
var inst_1277079 = (state_1277113[(7)]);
var inst_1277079__$1 = cljs.core.seq.call(null,inst_1277065);
var state_1277113__$1 = (function (){var statearr_1277137 = state_1277113;
(statearr_1277137[(7)] = inst_1277079__$1);

return statearr_1277137;
})();
if(inst_1277079__$1){
var statearr_1277138_1277170 = state_1277113__$1;
(statearr_1277138_1277170[(1)] = (14));

} else {
var statearr_1277139_1277171 = state_1277113__$1;
(statearr_1277139_1277171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (9))){
var inst_1277101 = (state_1277113[(2)]);
var inst_1277102 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1277113__$1 = (function (){var statearr_1277140 = state_1277113;
(statearr_1277140[(15)] = inst_1277101);

return statearr_1277140;
})();
if(cljs.core.truth_(inst_1277102)){
var statearr_1277141_1277172 = state_1277113__$1;
(statearr_1277141_1277172[(1)] = (21));

} else {
var statearr_1277142_1277173 = state_1277113__$1;
(statearr_1277142_1277173[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (5))){
var inst_1277057 = cljs.core.async.close_BANG_.call(null,out);
var state_1277113__$1 = state_1277113;
var statearr_1277143_1277174 = state_1277113__$1;
(statearr_1277143_1277174[(2)] = inst_1277057);

(statearr_1277143_1277174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (14))){
var inst_1277079 = (state_1277113[(7)]);
var inst_1277081 = cljs.core.chunked_seq_QMARK_.call(null,inst_1277079);
var state_1277113__$1 = state_1277113;
if(inst_1277081){
var statearr_1277144_1277175 = state_1277113__$1;
(statearr_1277144_1277175[(1)] = (17));

} else {
var statearr_1277145_1277176 = state_1277113__$1;
(statearr_1277145_1277176[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (16))){
var inst_1277097 = (state_1277113[(2)]);
var state_1277113__$1 = state_1277113;
var statearr_1277146_1277177 = state_1277113__$1;
(statearr_1277146_1277177[(2)] = inst_1277097);

(statearr_1277146_1277177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277114 === (10))){
var inst_1277066 = (state_1277113[(11)]);
var inst_1277068 = (state_1277113[(12)]);
var inst_1277073 = cljs.core._nth.call(null,inst_1277066,inst_1277068);
var state_1277113__$1 = state_1277113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277113__$1,(13),out,inst_1277073);
} else {
if((state_val_1277114 === (18))){
var inst_1277079 = (state_1277113[(7)]);
var inst_1277088 = cljs.core.first.call(null,inst_1277079);
var state_1277113__$1 = state_1277113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277113__$1,(20),out,inst_1277088);
} else {
if((state_val_1277114 === (8))){
var inst_1277067 = (state_1277113[(9)]);
var inst_1277068 = (state_1277113[(12)]);
var inst_1277070 = (inst_1277068 < inst_1277067);
var inst_1277071 = inst_1277070;
var state_1277113__$1 = state_1277113;
if(cljs.core.truth_(inst_1277071)){
var statearr_1277147_1277178 = state_1277113__$1;
(statearr_1277147_1277178[(1)] = (10));

} else {
var statearr_1277148_1277179 = state_1277113__$1;
(statearr_1277148_1277179[(1)] = (11));

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
var statearr_1277152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1277152[(0)] = state_machine__9185__auto__);

(statearr_1277152[(1)] = (1));

return statearr_1277152;
});
var state_machine__9185__auto____1 = (function (state_1277113){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1277113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1277153){if((e1277153 instanceof Object)){
var ex__9188__auto__ = e1277153;
var statearr_1277154_1277180 = state_1277113;
(statearr_1277154_1277180[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1277113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1277153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1277181 = state_1277113;
state_1277113 = G__1277181;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1277113){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1277113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1277155 = f__9200__auto__.call(null);
(statearr_1277155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1277155;
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
var c__9199__auto___1277278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1277278,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1277278,out){
return (function (state_1277253){
var state_val_1277254 = (state_1277253[(1)]);
if((state_val_1277254 === (7))){
var inst_1277248 = (state_1277253[(2)]);
var state_1277253__$1 = state_1277253;
var statearr_1277255_1277279 = state_1277253__$1;
(statearr_1277255_1277279[(2)] = inst_1277248);

(statearr_1277255_1277279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (1))){
var inst_1277230 = null;
var state_1277253__$1 = (function (){var statearr_1277256 = state_1277253;
(statearr_1277256[(7)] = inst_1277230);

return statearr_1277256;
})();
var statearr_1277257_1277280 = state_1277253__$1;
(statearr_1277257_1277280[(2)] = null);

(statearr_1277257_1277280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (4))){
var inst_1277233 = (state_1277253[(8)]);
var inst_1277233__$1 = (state_1277253[(2)]);
var inst_1277234 = (inst_1277233__$1 == null);
var inst_1277235 = cljs.core.not.call(null,inst_1277234);
var state_1277253__$1 = (function (){var statearr_1277258 = state_1277253;
(statearr_1277258[(8)] = inst_1277233__$1);

return statearr_1277258;
})();
if(inst_1277235){
var statearr_1277259_1277281 = state_1277253__$1;
(statearr_1277259_1277281[(1)] = (5));

} else {
var statearr_1277260_1277282 = state_1277253__$1;
(statearr_1277260_1277282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (6))){
var state_1277253__$1 = state_1277253;
var statearr_1277261_1277283 = state_1277253__$1;
(statearr_1277261_1277283[(2)] = null);

(statearr_1277261_1277283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (3))){
var inst_1277250 = (state_1277253[(2)]);
var inst_1277251 = cljs.core.async.close_BANG_.call(null,out);
var state_1277253__$1 = (function (){var statearr_1277262 = state_1277253;
(statearr_1277262[(9)] = inst_1277250);

return statearr_1277262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1277253__$1,inst_1277251);
} else {
if((state_val_1277254 === (2))){
var state_1277253__$1 = state_1277253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1277253__$1,(4),ch);
} else {
if((state_val_1277254 === (11))){
var inst_1277233 = (state_1277253[(8)]);
var inst_1277242 = (state_1277253[(2)]);
var inst_1277230 = inst_1277233;
var state_1277253__$1 = (function (){var statearr_1277263 = state_1277253;
(statearr_1277263[(7)] = inst_1277230);

(statearr_1277263[(10)] = inst_1277242);

return statearr_1277263;
})();
var statearr_1277264_1277284 = state_1277253__$1;
(statearr_1277264_1277284[(2)] = null);

(statearr_1277264_1277284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (9))){
var inst_1277233 = (state_1277253[(8)]);
var state_1277253__$1 = state_1277253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277253__$1,(11),out,inst_1277233);
} else {
if((state_val_1277254 === (5))){
var inst_1277233 = (state_1277253[(8)]);
var inst_1277230 = (state_1277253[(7)]);
var inst_1277237 = cljs.core._EQ_.call(null,inst_1277233,inst_1277230);
var state_1277253__$1 = state_1277253;
if(inst_1277237){
var statearr_1277266_1277285 = state_1277253__$1;
(statearr_1277266_1277285[(1)] = (8));

} else {
var statearr_1277267_1277286 = state_1277253__$1;
(statearr_1277267_1277286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (10))){
var inst_1277245 = (state_1277253[(2)]);
var state_1277253__$1 = state_1277253;
var statearr_1277268_1277287 = state_1277253__$1;
(statearr_1277268_1277287[(2)] = inst_1277245);

(statearr_1277268_1277287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277254 === (8))){
var inst_1277230 = (state_1277253[(7)]);
var tmp1277265 = inst_1277230;
var inst_1277230__$1 = tmp1277265;
var state_1277253__$1 = (function (){var statearr_1277269 = state_1277253;
(statearr_1277269[(7)] = inst_1277230__$1);

return statearr_1277269;
})();
var statearr_1277270_1277288 = state_1277253__$1;
(statearr_1277270_1277288[(2)] = null);

(statearr_1277270_1277288[(1)] = (2));


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
});})(c__9199__auto___1277278,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1277278,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1277274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1277274[(0)] = state_machine__9185__auto__);

(statearr_1277274[(1)] = (1));

return statearr_1277274;
});
var state_machine__9185__auto____1 = (function (state_1277253){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1277253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1277275){if((e1277275 instanceof Object)){
var ex__9188__auto__ = e1277275;
var statearr_1277276_1277289 = state_1277253;
(statearr_1277276_1277289[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1277253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1277275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1277290 = state_1277253;
state_1277253 = G__1277290;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1277253){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1277253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1277278,out))
})();
var state__9201__auto__ = (function (){var statearr_1277277 = f__9200__auto__.call(null);
(statearr_1277277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1277278);

return statearr_1277277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1277278,out))
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
var c__9199__auto___1277425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1277425,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1277425,out){
return (function (state_1277395){
var state_val_1277396 = (state_1277395[(1)]);
if((state_val_1277396 === (7))){
var inst_1277391 = (state_1277395[(2)]);
var state_1277395__$1 = state_1277395;
var statearr_1277397_1277426 = state_1277395__$1;
(statearr_1277397_1277426[(2)] = inst_1277391);

(statearr_1277397_1277426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (1))){
var inst_1277358 = (new Array(n));
var inst_1277359 = inst_1277358;
var inst_1277360 = (0);
var state_1277395__$1 = (function (){var statearr_1277398 = state_1277395;
(statearr_1277398[(7)] = inst_1277359);

(statearr_1277398[(8)] = inst_1277360);

return statearr_1277398;
})();
var statearr_1277399_1277427 = state_1277395__$1;
(statearr_1277399_1277427[(2)] = null);

(statearr_1277399_1277427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (4))){
var inst_1277363 = (state_1277395[(9)]);
var inst_1277363__$1 = (state_1277395[(2)]);
var inst_1277364 = (inst_1277363__$1 == null);
var inst_1277365 = cljs.core.not.call(null,inst_1277364);
var state_1277395__$1 = (function (){var statearr_1277400 = state_1277395;
(statearr_1277400[(9)] = inst_1277363__$1);

return statearr_1277400;
})();
if(inst_1277365){
var statearr_1277401_1277428 = state_1277395__$1;
(statearr_1277401_1277428[(1)] = (5));

} else {
var statearr_1277402_1277429 = state_1277395__$1;
(statearr_1277402_1277429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (15))){
var inst_1277385 = (state_1277395[(2)]);
var state_1277395__$1 = state_1277395;
var statearr_1277403_1277430 = state_1277395__$1;
(statearr_1277403_1277430[(2)] = inst_1277385);

(statearr_1277403_1277430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (13))){
var state_1277395__$1 = state_1277395;
var statearr_1277404_1277431 = state_1277395__$1;
(statearr_1277404_1277431[(2)] = null);

(statearr_1277404_1277431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (6))){
var inst_1277360 = (state_1277395[(8)]);
var inst_1277381 = (inst_1277360 > (0));
var state_1277395__$1 = state_1277395;
if(cljs.core.truth_(inst_1277381)){
var statearr_1277405_1277432 = state_1277395__$1;
(statearr_1277405_1277432[(1)] = (12));

} else {
var statearr_1277406_1277433 = state_1277395__$1;
(statearr_1277406_1277433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (3))){
var inst_1277393 = (state_1277395[(2)]);
var state_1277395__$1 = state_1277395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1277395__$1,inst_1277393);
} else {
if((state_val_1277396 === (12))){
var inst_1277359 = (state_1277395[(7)]);
var inst_1277383 = cljs.core.vec.call(null,inst_1277359);
var state_1277395__$1 = state_1277395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277395__$1,(15),out,inst_1277383);
} else {
if((state_val_1277396 === (2))){
var state_1277395__$1 = state_1277395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1277395__$1,(4),ch);
} else {
if((state_val_1277396 === (11))){
var inst_1277375 = (state_1277395[(2)]);
var inst_1277376 = (new Array(n));
var inst_1277359 = inst_1277376;
var inst_1277360 = (0);
var state_1277395__$1 = (function (){var statearr_1277407 = state_1277395;
(statearr_1277407[(7)] = inst_1277359);

(statearr_1277407[(8)] = inst_1277360);

(statearr_1277407[(10)] = inst_1277375);

return statearr_1277407;
})();
var statearr_1277408_1277434 = state_1277395__$1;
(statearr_1277408_1277434[(2)] = null);

(statearr_1277408_1277434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (9))){
var inst_1277359 = (state_1277395[(7)]);
var inst_1277373 = cljs.core.vec.call(null,inst_1277359);
var state_1277395__$1 = state_1277395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277395__$1,(11),out,inst_1277373);
} else {
if((state_val_1277396 === (5))){
var inst_1277359 = (state_1277395[(7)]);
var inst_1277360 = (state_1277395[(8)]);
var inst_1277363 = (state_1277395[(9)]);
var inst_1277368 = (state_1277395[(11)]);
var inst_1277367 = (inst_1277359[inst_1277360] = inst_1277363);
var inst_1277368__$1 = (inst_1277360 + (1));
var inst_1277369 = (inst_1277368__$1 < n);
var state_1277395__$1 = (function (){var statearr_1277409 = state_1277395;
(statearr_1277409[(12)] = inst_1277367);

(statearr_1277409[(11)] = inst_1277368__$1);

return statearr_1277409;
})();
if(cljs.core.truth_(inst_1277369)){
var statearr_1277410_1277435 = state_1277395__$1;
(statearr_1277410_1277435[(1)] = (8));

} else {
var statearr_1277411_1277436 = state_1277395__$1;
(statearr_1277411_1277436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (14))){
var inst_1277388 = (state_1277395[(2)]);
var inst_1277389 = cljs.core.async.close_BANG_.call(null,out);
var state_1277395__$1 = (function (){var statearr_1277413 = state_1277395;
(statearr_1277413[(13)] = inst_1277388);

return statearr_1277413;
})();
var statearr_1277414_1277437 = state_1277395__$1;
(statearr_1277414_1277437[(2)] = inst_1277389);

(statearr_1277414_1277437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (10))){
var inst_1277379 = (state_1277395[(2)]);
var state_1277395__$1 = state_1277395;
var statearr_1277415_1277438 = state_1277395__$1;
(statearr_1277415_1277438[(2)] = inst_1277379);

(statearr_1277415_1277438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277396 === (8))){
var inst_1277359 = (state_1277395[(7)]);
var inst_1277368 = (state_1277395[(11)]);
var tmp1277412 = inst_1277359;
var inst_1277359__$1 = tmp1277412;
var inst_1277360 = inst_1277368;
var state_1277395__$1 = (function (){var statearr_1277416 = state_1277395;
(statearr_1277416[(7)] = inst_1277359__$1);

(statearr_1277416[(8)] = inst_1277360);

return statearr_1277416;
})();
var statearr_1277417_1277439 = state_1277395__$1;
(statearr_1277417_1277439[(2)] = null);

(statearr_1277417_1277439[(1)] = (2));


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
});})(c__9199__auto___1277425,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1277425,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1277421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1277421[(0)] = state_machine__9185__auto__);

(statearr_1277421[(1)] = (1));

return statearr_1277421;
});
var state_machine__9185__auto____1 = (function (state_1277395){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1277395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1277422){if((e1277422 instanceof Object)){
var ex__9188__auto__ = e1277422;
var statearr_1277423_1277440 = state_1277395;
(statearr_1277423_1277440[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1277395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1277422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1277441 = state_1277395;
state_1277395 = G__1277441;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1277395){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1277395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1277425,out))
})();
var state__9201__auto__ = (function (){var statearr_1277424 = f__9200__auto__.call(null);
(statearr_1277424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1277425);

return statearr_1277424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1277425,out))
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
var c__9199__auto___1277584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1277584,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1277584,out){
return (function (state_1277554){
var state_val_1277555 = (state_1277554[(1)]);
if((state_val_1277555 === (7))){
var inst_1277550 = (state_1277554[(2)]);
var state_1277554__$1 = state_1277554;
var statearr_1277556_1277585 = state_1277554__$1;
(statearr_1277556_1277585[(2)] = inst_1277550);

(statearr_1277556_1277585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (1))){
var inst_1277513 = [];
var inst_1277514 = inst_1277513;
var inst_1277515 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1277554__$1 = (function (){var statearr_1277557 = state_1277554;
(statearr_1277557[(7)] = inst_1277515);

(statearr_1277557[(8)] = inst_1277514);

return statearr_1277557;
})();
var statearr_1277558_1277586 = state_1277554__$1;
(statearr_1277558_1277586[(2)] = null);

(statearr_1277558_1277586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (4))){
var inst_1277518 = (state_1277554[(9)]);
var inst_1277518__$1 = (state_1277554[(2)]);
var inst_1277519 = (inst_1277518__$1 == null);
var inst_1277520 = cljs.core.not.call(null,inst_1277519);
var state_1277554__$1 = (function (){var statearr_1277559 = state_1277554;
(statearr_1277559[(9)] = inst_1277518__$1);

return statearr_1277559;
})();
if(inst_1277520){
var statearr_1277560_1277587 = state_1277554__$1;
(statearr_1277560_1277587[(1)] = (5));

} else {
var statearr_1277561_1277588 = state_1277554__$1;
(statearr_1277561_1277588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (15))){
var inst_1277544 = (state_1277554[(2)]);
var state_1277554__$1 = state_1277554;
var statearr_1277562_1277589 = state_1277554__$1;
(statearr_1277562_1277589[(2)] = inst_1277544);

(statearr_1277562_1277589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (13))){
var state_1277554__$1 = state_1277554;
var statearr_1277563_1277590 = state_1277554__$1;
(statearr_1277563_1277590[(2)] = null);

(statearr_1277563_1277590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (6))){
var inst_1277514 = (state_1277554[(8)]);
var inst_1277539 = inst_1277514.length;
var inst_1277540 = (inst_1277539 > (0));
var state_1277554__$1 = state_1277554;
if(cljs.core.truth_(inst_1277540)){
var statearr_1277564_1277591 = state_1277554__$1;
(statearr_1277564_1277591[(1)] = (12));

} else {
var statearr_1277565_1277592 = state_1277554__$1;
(statearr_1277565_1277592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (3))){
var inst_1277552 = (state_1277554[(2)]);
var state_1277554__$1 = state_1277554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1277554__$1,inst_1277552);
} else {
if((state_val_1277555 === (12))){
var inst_1277514 = (state_1277554[(8)]);
var inst_1277542 = cljs.core.vec.call(null,inst_1277514);
var state_1277554__$1 = state_1277554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277554__$1,(15),out,inst_1277542);
} else {
if((state_val_1277555 === (2))){
var state_1277554__$1 = state_1277554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1277554__$1,(4),ch);
} else {
if((state_val_1277555 === (11))){
var inst_1277522 = (state_1277554[(10)]);
var inst_1277518 = (state_1277554[(9)]);
var inst_1277532 = (state_1277554[(2)]);
var inst_1277533 = [];
var inst_1277534 = inst_1277533.push(inst_1277518);
var inst_1277514 = inst_1277533;
var inst_1277515 = inst_1277522;
var state_1277554__$1 = (function (){var statearr_1277566 = state_1277554;
(statearr_1277566[(11)] = inst_1277534);

(statearr_1277566[(7)] = inst_1277515);

(statearr_1277566[(8)] = inst_1277514);

(statearr_1277566[(12)] = inst_1277532);

return statearr_1277566;
})();
var statearr_1277567_1277593 = state_1277554__$1;
(statearr_1277567_1277593[(2)] = null);

(statearr_1277567_1277593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (9))){
var inst_1277514 = (state_1277554[(8)]);
var inst_1277530 = cljs.core.vec.call(null,inst_1277514);
var state_1277554__$1 = state_1277554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1277554__$1,(11),out,inst_1277530);
} else {
if((state_val_1277555 === (5))){
var inst_1277522 = (state_1277554[(10)]);
var inst_1277515 = (state_1277554[(7)]);
var inst_1277518 = (state_1277554[(9)]);
var inst_1277522__$1 = f.call(null,inst_1277518);
var inst_1277523 = cljs.core._EQ_.call(null,inst_1277522__$1,inst_1277515);
var inst_1277524 = cljs.core.keyword_identical_QMARK_.call(null,inst_1277515,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1277525 = (inst_1277523) || (inst_1277524);
var state_1277554__$1 = (function (){var statearr_1277568 = state_1277554;
(statearr_1277568[(10)] = inst_1277522__$1);

return statearr_1277568;
})();
if(cljs.core.truth_(inst_1277525)){
var statearr_1277569_1277594 = state_1277554__$1;
(statearr_1277569_1277594[(1)] = (8));

} else {
var statearr_1277570_1277595 = state_1277554__$1;
(statearr_1277570_1277595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (14))){
var inst_1277547 = (state_1277554[(2)]);
var inst_1277548 = cljs.core.async.close_BANG_.call(null,out);
var state_1277554__$1 = (function (){var statearr_1277572 = state_1277554;
(statearr_1277572[(13)] = inst_1277547);

return statearr_1277572;
})();
var statearr_1277573_1277596 = state_1277554__$1;
(statearr_1277573_1277596[(2)] = inst_1277548);

(statearr_1277573_1277596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (10))){
var inst_1277537 = (state_1277554[(2)]);
var state_1277554__$1 = state_1277554;
var statearr_1277574_1277597 = state_1277554__$1;
(statearr_1277574_1277597[(2)] = inst_1277537);

(statearr_1277574_1277597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1277555 === (8))){
var inst_1277522 = (state_1277554[(10)]);
var inst_1277514 = (state_1277554[(8)]);
var inst_1277518 = (state_1277554[(9)]);
var inst_1277527 = inst_1277514.push(inst_1277518);
var tmp1277571 = inst_1277514;
var inst_1277514__$1 = tmp1277571;
var inst_1277515 = inst_1277522;
var state_1277554__$1 = (function (){var statearr_1277575 = state_1277554;
(statearr_1277575[(14)] = inst_1277527);

(statearr_1277575[(7)] = inst_1277515);

(statearr_1277575[(8)] = inst_1277514__$1);

return statearr_1277575;
})();
var statearr_1277576_1277598 = state_1277554__$1;
(statearr_1277576_1277598[(2)] = null);

(statearr_1277576_1277598[(1)] = (2));


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
});})(c__9199__auto___1277584,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1277584,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1277580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1277580[(0)] = state_machine__9185__auto__);

(statearr_1277580[(1)] = (1));

return statearr_1277580;
});
var state_machine__9185__auto____1 = (function (state_1277554){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1277554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1277581){if((e1277581 instanceof Object)){
var ex__9188__auto__ = e1277581;
var statearr_1277582_1277599 = state_1277554;
(statearr_1277582_1277599[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1277554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1277581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1277600 = state_1277554;
state_1277554 = G__1277600;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1277554){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1277554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1277584,out))
})();
var state__9201__auto__ = (function (){var statearr_1277583 = f__9200__auto__.call(null);
(statearr_1277583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1277584);

return statearr_1277583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1277584,out))
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