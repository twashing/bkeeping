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
if(typeof cljs.core.async.t1222644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1222644 = (function (f,fn_handler,meta1222645){
this.f = f;
this.fn_handler = fn_handler;
this.meta1222645 = meta1222645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1222644.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1222644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t1222644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t1222644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1222646){
var self__ = this;
var _1222646__$1 = this;
return self__.meta1222645;
});

cljs.core.async.t1222644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1222646,meta1222645__$1){
var self__ = this;
var _1222646__$1 = this;
return (new cljs.core.async.t1222644(self__.f,self__.fn_handler,meta1222645__$1));
});

cljs.core.async.t1222644.cljs$lang$type = true;

cljs.core.async.t1222644.cljs$lang$ctorStr = "cljs.core.async/t1222644";

cljs.core.async.t1222644.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1222644");
});

cljs.core.async.__GT_t1222644 = (function __GT_t1222644(f__$1,fn_handler__$1,meta1222645){
return (new cljs.core.async.t1222644(f__$1,fn_handler__$1,meta1222645));
});

}

return (new cljs.core.async.t1222644(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__1222648 = buff;
if(G__1222648){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__1222648.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__1222648.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1222648);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1222648);
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
var val_1222649 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1222649);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1222649,ret){
return (function (){
return fn1.call(null,val_1222649);
});})(val_1222649,ret))
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
var n__4509__auto___1222650 = n;
var x_1222651 = (0);
while(true){
if((x_1222651 < n__4509__auto___1222650)){
(a[x_1222651] = (0));

var G__1222652 = (x_1222651 + (1));
x_1222651 = G__1222652;
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

var G__1222653 = (i + (1));
i = G__1222653;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t1222657 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1222657 = (function (flag,alt_flag,meta1222658){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta1222658 = meta1222658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1222657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1222657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t1222657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t1222657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1222659){
var self__ = this;
var _1222659__$1 = this;
return self__.meta1222658;
});})(flag))
;

cljs.core.async.t1222657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1222659,meta1222658__$1){
var self__ = this;
var _1222659__$1 = this;
return (new cljs.core.async.t1222657(self__.flag,self__.alt_flag,meta1222658__$1));
});})(flag))
;

cljs.core.async.t1222657.cljs$lang$type = true;

cljs.core.async.t1222657.cljs$lang$ctorStr = "cljs.core.async/t1222657";

cljs.core.async.t1222657.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1222657");
});})(flag))
;

cljs.core.async.__GT_t1222657 = ((function (flag){
return (function __GT_t1222657(flag__$1,alt_flag__$1,meta1222658){
return (new cljs.core.async.t1222657(flag__$1,alt_flag__$1,meta1222658));
});})(flag))
;

}

return (new cljs.core.async.t1222657(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t1222663 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1222663 = (function (cb,flag,alt_handler,meta1222664){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta1222664 = meta1222664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1222663.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1222663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t1222663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t1222663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1222665){
var self__ = this;
var _1222665__$1 = this;
return self__.meta1222664;
});

cljs.core.async.t1222663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1222665,meta1222664__$1){
var self__ = this;
var _1222665__$1 = this;
return (new cljs.core.async.t1222663(self__.cb,self__.flag,self__.alt_handler,meta1222664__$1));
});

cljs.core.async.t1222663.cljs$lang$type = true;

cljs.core.async.t1222663.cljs$lang$ctorStr = "cljs.core.async/t1222663";

cljs.core.async.t1222663.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1222663");
});

cljs.core.async.__GT_t1222663 = (function __GT_t1222663(cb__$1,flag__$1,alt_handler__$1,meta1222664){
return (new cljs.core.async.t1222663(cb__$1,flag__$1,alt_handler__$1,meta1222664));
});

}

return (new cljs.core.async.t1222663(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__1222666_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1222666_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1222667_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1222667_SHARP_,port], null));
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
var G__1222668 = (i + (1));
i = G__1222668;
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
var alts_BANG___delegate = function (ports,p__1222669){
var map__1222671 = p__1222669;
var map__1222671__$1 = ((cljs.core.seq_QMARK_.call(null,map__1222671))?cljs.core.apply.call(null,cljs.core.hash_map,map__1222671):map__1222671);
var opts = map__1222671__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__1222669 = null;
if (arguments.length > 1) {
  p__1222669 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__1222669);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__1222672){
var ports = cljs.core.first(arglist__1222672);
var p__1222669 = cljs.core.rest(arglist__1222672);
return alts_BANG___delegate(ports,p__1222669);
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
var c__9199__auto___1222767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1222767){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1222767){
return (function (state_1222743){
var state_val_1222744 = (state_1222743[(1)]);
if((state_val_1222744 === (7))){
var inst_1222739 = (state_1222743[(2)]);
var state_1222743__$1 = state_1222743;
var statearr_1222745_1222768 = state_1222743__$1;
(statearr_1222745_1222768[(2)] = inst_1222739);

(statearr_1222745_1222768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (1))){
var state_1222743__$1 = state_1222743;
var statearr_1222746_1222769 = state_1222743__$1;
(statearr_1222746_1222769[(2)] = null);

(statearr_1222746_1222769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (4))){
var inst_1222722 = (state_1222743[(7)]);
var inst_1222722__$1 = (state_1222743[(2)]);
var inst_1222723 = (inst_1222722__$1 == null);
var state_1222743__$1 = (function (){var statearr_1222747 = state_1222743;
(statearr_1222747[(7)] = inst_1222722__$1);

return statearr_1222747;
})();
if(cljs.core.truth_(inst_1222723)){
var statearr_1222748_1222770 = state_1222743__$1;
(statearr_1222748_1222770[(1)] = (5));

} else {
var statearr_1222749_1222771 = state_1222743__$1;
(statearr_1222749_1222771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (13))){
var state_1222743__$1 = state_1222743;
var statearr_1222750_1222772 = state_1222743__$1;
(statearr_1222750_1222772[(2)] = null);

(statearr_1222750_1222772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (6))){
var inst_1222722 = (state_1222743[(7)]);
var state_1222743__$1 = state_1222743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1222743__$1,(11),to,inst_1222722);
} else {
if((state_val_1222744 === (3))){
var inst_1222741 = (state_1222743[(2)]);
var state_1222743__$1 = state_1222743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1222743__$1,inst_1222741);
} else {
if((state_val_1222744 === (12))){
var state_1222743__$1 = state_1222743;
var statearr_1222751_1222773 = state_1222743__$1;
(statearr_1222751_1222773[(2)] = null);

(statearr_1222751_1222773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (2))){
var state_1222743__$1 = state_1222743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1222743__$1,(4),from);
} else {
if((state_val_1222744 === (11))){
var inst_1222732 = (state_1222743[(2)]);
var state_1222743__$1 = state_1222743;
if(cljs.core.truth_(inst_1222732)){
var statearr_1222752_1222774 = state_1222743__$1;
(statearr_1222752_1222774[(1)] = (12));

} else {
var statearr_1222753_1222775 = state_1222743__$1;
(statearr_1222753_1222775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (9))){
var state_1222743__$1 = state_1222743;
var statearr_1222754_1222776 = state_1222743__$1;
(statearr_1222754_1222776[(2)] = null);

(statearr_1222754_1222776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (5))){
var state_1222743__$1 = state_1222743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1222755_1222777 = state_1222743__$1;
(statearr_1222755_1222777[(1)] = (8));

} else {
var statearr_1222756_1222778 = state_1222743__$1;
(statearr_1222756_1222778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (14))){
var inst_1222737 = (state_1222743[(2)]);
var state_1222743__$1 = state_1222743;
var statearr_1222757_1222779 = state_1222743__$1;
(statearr_1222757_1222779[(2)] = inst_1222737);

(statearr_1222757_1222779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (10))){
var inst_1222729 = (state_1222743[(2)]);
var state_1222743__$1 = state_1222743;
var statearr_1222758_1222780 = state_1222743__$1;
(statearr_1222758_1222780[(2)] = inst_1222729);

(statearr_1222758_1222780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222744 === (8))){
var inst_1222726 = cljs.core.async.close_BANG_.call(null,to);
var state_1222743__$1 = state_1222743;
var statearr_1222759_1222781 = state_1222743__$1;
(statearr_1222759_1222781[(2)] = inst_1222726);

(statearr_1222759_1222781[(1)] = (10));


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
});})(c__9199__auto___1222767))
;
return ((function (switch__9184__auto__,c__9199__auto___1222767){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1222763 = [null,null,null,null,null,null,null,null];
(statearr_1222763[(0)] = state_machine__9185__auto__);

(statearr_1222763[(1)] = (1));

return statearr_1222763;
});
var state_machine__9185__auto____1 = (function (state_1222743){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1222743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1222764){if((e1222764 instanceof Object)){
var ex__9188__auto__ = e1222764;
var statearr_1222765_1222782 = state_1222743;
(statearr_1222765_1222782[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1222743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1222764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1222783 = state_1222743;
state_1222743 = G__1222783;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1222743){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1222743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1222767))
})();
var state__9201__auto__ = (function (){var statearr_1222766 = f__9200__auto__.call(null);
(statearr_1222766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1222767);

return statearr_1222766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1222767))
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
return (function (p__1222967){
var vec__1222968 = p__1222967;
var v = cljs.core.nth.call(null,vec__1222968,(0),null);
var p = cljs.core.nth.call(null,vec__1222968,(1),null);
var job = vec__1222968;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___1223150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results){
return (function (state_1222973){
var state_val_1222974 = (state_1222973[(1)]);
if((state_val_1222974 === (2))){
var inst_1222970 = (state_1222973[(2)]);
var inst_1222971 = cljs.core.async.close_BANG_.call(null,res);
var state_1222973__$1 = (function (){var statearr_1222975 = state_1222973;
(statearr_1222975[(7)] = inst_1222970);

return statearr_1222975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1222973__$1,inst_1222971);
} else {
if((state_val_1222974 === (1))){
var state_1222973__$1 = state_1222973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1222973__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1222979 = [null,null,null,null,null,null,null,null];
(statearr_1222979[(0)] = state_machine__9185__auto__);

(statearr_1222979[(1)] = (1));

return statearr_1222979;
});
var state_machine__9185__auto____1 = (function (state_1222973){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1222973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1222980){if((e1222980 instanceof Object)){
var ex__9188__auto__ = e1222980;
var statearr_1222981_1223151 = state_1222973;
(statearr_1222981_1223151[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1222973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1222980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223152 = state_1222973;
state_1222973 = G__1223152;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1222973){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1222973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_1222982 = f__9200__auto__.call(null);
(statearr_1222982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223150);

return statearr_1222982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1223150,res,vec__1222968,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1222983){
var vec__1222984 = p__1222983;
var v = cljs.core.nth.call(null,vec__1222984,(0),null);
var p = cljs.core.nth.call(null,vec__1222984,(1),null);
var job = vec__1222984;
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
var n__4509__auto___1223153 = n;
var __1223154 = (0);
while(true){
if((__1223154 < n__4509__auto___1223153)){
var G__1222985_1223155 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1222985_1223155) {
case "async":
var c__9199__auto___1223157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1223154,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1223154,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function (state_1222998){
var state_val_1222999 = (state_1222998[(1)]);
if((state_val_1222999 === (7))){
var inst_1222994 = (state_1222998[(2)]);
var state_1222998__$1 = state_1222998;
var statearr_1223000_1223158 = state_1222998__$1;
(statearr_1223000_1223158[(2)] = inst_1222994);

(statearr_1223000_1223158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222999 === (6))){
var state_1222998__$1 = state_1222998;
var statearr_1223001_1223159 = state_1222998__$1;
(statearr_1223001_1223159[(2)] = null);

(statearr_1223001_1223159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222999 === (5))){
var state_1222998__$1 = state_1222998;
var statearr_1223002_1223160 = state_1222998__$1;
(statearr_1223002_1223160[(2)] = null);

(statearr_1223002_1223160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222999 === (4))){
var inst_1222988 = (state_1222998[(2)]);
var inst_1222989 = async.call(null,inst_1222988);
var state_1222998__$1 = state_1222998;
if(cljs.core.truth_(inst_1222989)){
var statearr_1223003_1223161 = state_1222998__$1;
(statearr_1223003_1223161[(1)] = (5));

} else {
var statearr_1223004_1223162 = state_1222998__$1;
(statearr_1223004_1223162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1222999 === (3))){
var inst_1222996 = (state_1222998[(2)]);
var state_1222998__$1 = state_1222998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1222998__$1,inst_1222996);
} else {
if((state_val_1222999 === (2))){
var state_1222998__$1 = state_1222998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1222998__$1,(4),jobs);
} else {
if((state_val_1222999 === (1))){
var state_1222998__$1 = state_1222998;
var statearr_1223005_1223163 = state_1222998__$1;
(statearr_1223005_1223163[(2)] = null);

(statearr_1223005_1223163[(1)] = (2));


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
});})(__1223154,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
;
return ((function (__1223154,switch__9184__auto__,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1223009 = [null,null,null,null,null,null,null];
(statearr_1223009[(0)] = state_machine__9185__auto__);

(statearr_1223009[(1)] = (1));

return statearr_1223009;
});
var state_machine__9185__auto____1 = (function (state_1222998){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1222998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223010){if((e1223010 instanceof Object)){
var ex__9188__auto__ = e1223010;
var statearr_1223011_1223164 = state_1222998;
(statearr_1223011_1223164[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1222998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223165 = state_1222998;
state_1222998 = G__1223165;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1222998){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1222998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1223154,switch__9184__auto__,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1223012 = f__9200__auto__.call(null);
(statearr_1223012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223157);

return statearr_1223012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1223154,c__9199__auto___1223157,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___1223166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1223154,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1223154,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function (state_1223025){
var state_val_1223026 = (state_1223025[(1)]);
if((state_val_1223026 === (7))){
var inst_1223021 = (state_1223025[(2)]);
var state_1223025__$1 = state_1223025;
var statearr_1223027_1223167 = state_1223025__$1;
(statearr_1223027_1223167[(2)] = inst_1223021);

(statearr_1223027_1223167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223026 === (6))){
var state_1223025__$1 = state_1223025;
var statearr_1223028_1223168 = state_1223025__$1;
(statearr_1223028_1223168[(2)] = null);

(statearr_1223028_1223168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223026 === (5))){
var state_1223025__$1 = state_1223025;
var statearr_1223029_1223169 = state_1223025__$1;
(statearr_1223029_1223169[(2)] = null);

(statearr_1223029_1223169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223026 === (4))){
var inst_1223015 = (state_1223025[(2)]);
var inst_1223016 = process.call(null,inst_1223015);
var state_1223025__$1 = state_1223025;
if(cljs.core.truth_(inst_1223016)){
var statearr_1223030_1223170 = state_1223025__$1;
(statearr_1223030_1223170[(1)] = (5));

} else {
var statearr_1223031_1223171 = state_1223025__$1;
(statearr_1223031_1223171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223026 === (3))){
var inst_1223023 = (state_1223025[(2)]);
var state_1223025__$1 = state_1223025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223025__$1,inst_1223023);
} else {
if((state_val_1223026 === (2))){
var state_1223025__$1 = state_1223025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223025__$1,(4),jobs);
} else {
if((state_val_1223026 === (1))){
var state_1223025__$1 = state_1223025;
var statearr_1223032_1223172 = state_1223025__$1;
(statearr_1223032_1223172[(2)] = null);

(statearr_1223032_1223172[(1)] = (2));


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
});})(__1223154,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
;
return ((function (__1223154,switch__9184__auto__,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1223036 = [null,null,null,null,null,null,null];
(statearr_1223036[(0)] = state_machine__9185__auto__);

(statearr_1223036[(1)] = (1));

return statearr_1223036;
});
var state_machine__9185__auto____1 = (function (state_1223025){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223037){if((e1223037 instanceof Object)){
var ex__9188__auto__ = e1223037;
var statearr_1223038_1223173 = state_1223025;
(statearr_1223038_1223173[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223174 = state_1223025;
state_1223025 = G__1223174;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223025){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1223154,switch__9184__auto__,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1223039 = f__9200__auto__.call(null);
(statearr_1223039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223166);

return statearr_1223039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1223154,c__9199__auto___1223166,G__1222985_1223155,n__4509__auto___1223153,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1223175 = (__1223154 + (1));
__1223154 = G__1223175;
continue;
} else {
}
break;
}

var c__9199__auto___1223176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1223176,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1223176,jobs,results,process,async){
return (function (state_1223061){
var state_val_1223062 = (state_1223061[(1)]);
if((state_val_1223062 === (9))){
var inst_1223054 = (state_1223061[(2)]);
var state_1223061__$1 = (function (){var statearr_1223063 = state_1223061;
(statearr_1223063[(7)] = inst_1223054);

return statearr_1223063;
})();
var statearr_1223064_1223177 = state_1223061__$1;
(statearr_1223064_1223177[(2)] = null);

(statearr_1223064_1223177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223062 === (8))){
var inst_1223047 = (state_1223061[(8)]);
var inst_1223052 = (state_1223061[(2)]);
var state_1223061__$1 = (function (){var statearr_1223065 = state_1223061;
(statearr_1223065[(9)] = inst_1223052);

return statearr_1223065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1223061__$1,(9),results,inst_1223047);
} else {
if((state_val_1223062 === (7))){
var inst_1223057 = (state_1223061[(2)]);
var state_1223061__$1 = state_1223061;
var statearr_1223066_1223178 = state_1223061__$1;
(statearr_1223066_1223178[(2)] = inst_1223057);

(statearr_1223066_1223178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223062 === (6))){
var inst_1223047 = (state_1223061[(8)]);
var inst_1223042 = (state_1223061[(10)]);
var inst_1223047__$1 = cljs.core.async.chan.call(null,(1));
var inst_1223048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1223049 = [inst_1223042,inst_1223047__$1];
var inst_1223050 = (new cljs.core.PersistentVector(null,2,(5),inst_1223048,inst_1223049,null));
var state_1223061__$1 = (function (){var statearr_1223067 = state_1223061;
(statearr_1223067[(8)] = inst_1223047__$1);

return statearr_1223067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1223061__$1,(8),jobs,inst_1223050);
} else {
if((state_val_1223062 === (5))){
var inst_1223045 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1223061__$1 = state_1223061;
var statearr_1223068_1223179 = state_1223061__$1;
(statearr_1223068_1223179[(2)] = inst_1223045);

(statearr_1223068_1223179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223062 === (4))){
var inst_1223042 = (state_1223061[(10)]);
var inst_1223042__$1 = (state_1223061[(2)]);
var inst_1223043 = (inst_1223042__$1 == null);
var state_1223061__$1 = (function (){var statearr_1223069 = state_1223061;
(statearr_1223069[(10)] = inst_1223042__$1);

return statearr_1223069;
})();
if(cljs.core.truth_(inst_1223043)){
var statearr_1223070_1223180 = state_1223061__$1;
(statearr_1223070_1223180[(1)] = (5));

} else {
var statearr_1223071_1223181 = state_1223061__$1;
(statearr_1223071_1223181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223062 === (3))){
var inst_1223059 = (state_1223061[(2)]);
var state_1223061__$1 = state_1223061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223061__$1,inst_1223059);
} else {
if((state_val_1223062 === (2))){
var state_1223061__$1 = state_1223061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223061__$1,(4),from);
} else {
if((state_val_1223062 === (1))){
var state_1223061__$1 = state_1223061;
var statearr_1223072_1223182 = state_1223061__$1;
(statearr_1223072_1223182[(2)] = null);

(statearr_1223072_1223182[(1)] = (2));


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
});})(c__9199__auto___1223176,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___1223176,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1223076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1223076[(0)] = state_machine__9185__auto__);

(statearr_1223076[(1)] = (1));

return statearr_1223076;
});
var state_machine__9185__auto____1 = (function (state_1223061){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223077){if((e1223077 instanceof Object)){
var ex__9188__auto__ = e1223077;
var statearr_1223078_1223183 = state_1223061;
(statearr_1223078_1223183[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223184 = state_1223061;
state_1223061 = G__1223184;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223061){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1223176,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1223079 = f__9200__auto__.call(null);
(statearr_1223079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223176);

return statearr_1223079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1223176,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_1223117){
var state_val_1223118 = (state_1223117[(1)]);
if((state_val_1223118 === (7))){
var inst_1223113 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
var statearr_1223119_1223185 = state_1223117__$1;
(statearr_1223119_1223185[(2)] = inst_1223113);

(statearr_1223119_1223185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (20))){
var state_1223117__$1 = state_1223117;
var statearr_1223120_1223186 = state_1223117__$1;
(statearr_1223120_1223186[(2)] = null);

(statearr_1223120_1223186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (1))){
var state_1223117__$1 = state_1223117;
var statearr_1223121_1223187 = state_1223117__$1;
(statearr_1223121_1223187[(2)] = null);

(statearr_1223121_1223187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (4))){
var inst_1223082 = (state_1223117[(7)]);
var inst_1223082__$1 = (state_1223117[(2)]);
var inst_1223083 = (inst_1223082__$1 == null);
var state_1223117__$1 = (function (){var statearr_1223122 = state_1223117;
(statearr_1223122[(7)] = inst_1223082__$1);

return statearr_1223122;
})();
if(cljs.core.truth_(inst_1223083)){
var statearr_1223123_1223188 = state_1223117__$1;
(statearr_1223123_1223188[(1)] = (5));

} else {
var statearr_1223124_1223189 = state_1223117__$1;
(statearr_1223124_1223189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (15))){
var inst_1223095 = (state_1223117[(8)]);
var state_1223117__$1 = state_1223117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1223117__$1,(18),to,inst_1223095);
} else {
if((state_val_1223118 === (21))){
var inst_1223108 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
var statearr_1223125_1223190 = state_1223117__$1;
(statearr_1223125_1223190[(2)] = inst_1223108);

(statearr_1223125_1223190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (13))){
var inst_1223110 = (state_1223117[(2)]);
var state_1223117__$1 = (function (){var statearr_1223126 = state_1223117;
(statearr_1223126[(9)] = inst_1223110);

return statearr_1223126;
})();
var statearr_1223127_1223191 = state_1223117__$1;
(statearr_1223127_1223191[(2)] = null);

(statearr_1223127_1223191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (6))){
var inst_1223082 = (state_1223117[(7)]);
var state_1223117__$1 = state_1223117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223117__$1,(11),inst_1223082);
} else {
if((state_val_1223118 === (17))){
var inst_1223103 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
if(cljs.core.truth_(inst_1223103)){
var statearr_1223128_1223192 = state_1223117__$1;
(statearr_1223128_1223192[(1)] = (19));

} else {
var statearr_1223129_1223193 = state_1223117__$1;
(statearr_1223129_1223193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (3))){
var inst_1223115 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223117__$1,inst_1223115);
} else {
if((state_val_1223118 === (12))){
var inst_1223092 = (state_1223117[(10)]);
var state_1223117__$1 = state_1223117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223117__$1,(14),inst_1223092);
} else {
if((state_val_1223118 === (2))){
var state_1223117__$1 = state_1223117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223117__$1,(4),results);
} else {
if((state_val_1223118 === (19))){
var state_1223117__$1 = state_1223117;
var statearr_1223130_1223194 = state_1223117__$1;
(statearr_1223130_1223194[(2)] = null);

(statearr_1223130_1223194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (11))){
var inst_1223092 = (state_1223117[(2)]);
var state_1223117__$1 = (function (){var statearr_1223131 = state_1223117;
(statearr_1223131[(10)] = inst_1223092);

return statearr_1223131;
})();
var statearr_1223132_1223195 = state_1223117__$1;
(statearr_1223132_1223195[(2)] = null);

(statearr_1223132_1223195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (9))){
var state_1223117__$1 = state_1223117;
var statearr_1223133_1223196 = state_1223117__$1;
(statearr_1223133_1223196[(2)] = null);

(statearr_1223133_1223196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (5))){
var state_1223117__$1 = state_1223117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1223134_1223197 = state_1223117__$1;
(statearr_1223134_1223197[(1)] = (8));

} else {
var statearr_1223135_1223198 = state_1223117__$1;
(statearr_1223135_1223198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (14))){
var inst_1223097 = (state_1223117[(11)]);
var inst_1223095 = (state_1223117[(8)]);
var inst_1223095__$1 = (state_1223117[(2)]);
var inst_1223096 = (inst_1223095__$1 == null);
var inst_1223097__$1 = cljs.core.not.call(null,inst_1223096);
var state_1223117__$1 = (function (){var statearr_1223136 = state_1223117;
(statearr_1223136[(11)] = inst_1223097__$1);

(statearr_1223136[(8)] = inst_1223095__$1);

return statearr_1223136;
})();
if(inst_1223097__$1){
var statearr_1223137_1223199 = state_1223117__$1;
(statearr_1223137_1223199[(1)] = (15));

} else {
var statearr_1223138_1223200 = state_1223117__$1;
(statearr_1223138_1223200[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (16))){
var inst_1223097 = (state_1223117[(11)]);
var state_1223117__$1 = state_1223117;
var statearr_1223139_1223201 = state_1223117__$1;
(statearr_1223139_1223201[(2)] = inst_1223097);

(statearr_1223139_1223201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (10))){
var inst_1223089 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
var statearr_1223140_1223202 = state_1223117__$1;
(statearr_1223140_1223202[(2)] = inst_1223089);

(statearr_1223140_1223202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (18))){
var inst_1223100 = (state_1223117[(2)]);
var state_1223117__$1 = state_1223117;
var statearr_1223141_1223203 = state_1223117__$1;
(statearr_1223141_1223203[(2)] = inst_1223100);

(statearr_1223141_1223203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223118 === (8))){
var inst_1223086 = cljs.core.async.close_BANG_.call(null,to);
var state_1223117__$1 = state_1223117;
var statearr_1223142_1223204 = state_1223117__$1;
(statearr_1223142_1223204[(2)] = inst_1223086);

(statearr_1223142_1223204[(1)] = (10));


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
var statearr_1223146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1223146[(0)] = state_machine__9185__auto__);

(statearr_1223146[(1)] = (1));

return statearr_1223146;
});
var state_machine__9185__auto____1 = (function (state_1223117){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223147){if((e1223147 instanceof Object)){
var ex__9188__auto__ = e1223147;
var statearr_1223148_1223205 = state_1223117;
(statearr_1223148_1223205[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223206 = state_1223117;
state_1223117 = G__1223206;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223117){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1223149 = f__9200__auto__.call(null);
(statearr_1223149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1223149;
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
var c__9199__auto___1223307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1223307,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1223307,tc,fc){
return (function (state_1223282){
var state_val_1223283 = (state_1223282[(1)]);
if((state_val_1223283 === (7))){
var inst_1223278 = (state_1223282[(2)]);
var state_1223282__$1 = state_1223282;
var statearr_1223284_1223308 = state_1223282__$1;
(statearr_1223284_1223308[(2)] = inst_1223278);

(statearr_1223284_1223308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (1))){
var state_1223282__$1 = state_1223282;
var statearr_1223285_1223309 = state_1223282__$1;
(statearr_1223285_1223309[(2)] = null);

(statearr_1223285_1223309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (4))){
var inst_1223259 = (state_1223282[(7)]);
var inst_1223259__$1 = (state_1223282[(2)]);
var inst_1223260 = (inst_1223259__$1 == null);
var state_1223282__$1 = (function (){var statearr_1223286 = state_1223282;
(statearr_1223286[(7)] = inst_1223259__$1);

return statearr_1223286;
})();
if(cljs.core.truth_(inst_1223260)){
var statearr_1223287_1223310 = state_1223282__$1;
(statearr_1223287_1223310[(1)] = (5));

} else {
var statearr_1223288_1223311 = state_1223282__$1;
(statearr_1223288_1223311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (13))){
var state_1223282__$1 = state_1223282;
var statearr_1223289_1223312 = state_1223282__$1;
(statearr_1223289_1223312[(2)] = null);

(statearr_1223289_1223312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (6))){
var inst_1223259 = (state_1223282[(7)]);
var inst_1223265 = p.call(null,inst_1223259);
var state_1223282__$1 = state_1223282;
if(cljs.core.truth_(inst_1223265)){
var statearr_1223290_1223313 = state_1223282__$1;
(statearr_1223290_1223313[(1)] = (9));

} else {
var statearr_1223291_1223314 = state_1223282__$1;
(statearr_1223291_1223314[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (3))){
var inst_1223280 = (state_1223282[(2)]);
var state_1223282__$1 = state_1223282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223282__$1,inst_1223280);
} else {
if((state_val_1223283 === (12))){
var state_1223282__$1 = state_1223282;
var statearr_1223292_1223315 = state_1223282__$1;
(statearr_1223292_1223315[(2)] = null);

(statearr_1223292_1223315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (2))){
var state_1223282__$1 = state_1223282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223282__$1,(4),ch);
} else {
if((state_val_1223283 === (11))){
var inst_1223259 = (state_1223282[(7)]);
var inst_1223269 = (state_1223282[(2)]);
var state_1223282__$1 = state_1223282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1223282__$1,(8),inst_1223269,inst_1223259);
} else {
if((state_val_1223283 === (9))){
var state_1223282__$1 = state_1223282;
var statearr_1223293_1223316 = state_1223282__$1;
(statearr_1223293_1223316[(2)] = tc);

(statearr_1223293_1223316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (5))){
var inst_1223262 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1223263 = cljs.core.async.close_BANG_.call(null,fc);
var state_1223282__$1 = (function (){var statearr_1223294 = state_1223282;
(statearr_1223294[(8)] = inst_1223262);

return statearr_1223294;
})();
var statearr_1223295_1223317 = state_1223282__$1;
(statearr_1223295_1223317[(2)] = inst_1223263);

(statearr_1223295_1223317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (14))){
var inst_1223276 = (state_1223282[(2)]);
var state_1223282__$1 = state_1223282;
var statearr_1223296_1223318 = state_1223282__$1;
(statearr_1223296_1223318[(2)] = inst_1223276);

(statearr_1223296_1223318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (10))){
var state_1223282__$1 = state_1223282;
var statearr_1223297_1223319 = state_1223282__$1;
(statearr_1223297_1223319[(2)] = fc);

(statearr_1223297_1223319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223283 === (8))){
var inst_1223271 = (state_1223282[(2)]);
var state_1223282__$1 = state_1223282;
if(cljs.core.truth_(inst_1223271)){
var statearr_1223298_1223320 = state_1223282__$1;
(statearr_1223298_1223320[(1)] = (12));

} else {
var statearr_1223299_1223321 = state_1223282__$1;
(statearr_1223299_1223321[(1)] = (13));

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
});})(c__9199__auto___1223307,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___1223307,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1223303 = [null,null,null,null,null,null,null,null,null];
(statearr_1223303[(0)] = state_machine__9185__auto__);

(statearr_1223303[(1)] = (1));

return statearr_1223303;
});
var state_machine__9185__auto____1 = (function (state_1223282){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223304){if((e1223304 instanceof Object)){
var ex__9188__auto__ = e1223304;
var statearr_1223305_1223322 = state_1223282;
(statearr_1223305_1223322[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223323 = state_1223282;
state_1223282 = G__1223323;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223282){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1223307,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_1223306 = f__9200__auto__.call(null);
(statearr_1223306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223307);

return statearr_1223306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1223307,tc,fc))
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
return (function (state_1223370){
var state_val_1223371 = (state_1223370[(1)]);
if((state_val_1223371 === (7))){
var inst_1223366 = (state_1223370[(2)]);
var state_1223370__$1 = state_1223370;
var statearr_1223372_1223388 = state_1223370__$1;
(statearr_1223372_1223388[(2)] = inst_1223366);

(statearr_1223372_1223388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223371 === (6))){
var inst_1223359 = (state_1223370[(7)]);
var inst_1223356 = (state_1223370[(8)]);
var inst_1223363 = f.call(null,inst_1223356,inst_1223359);
var inst_1223356__$1 = inst_1223363;
var state_1223370__$1 = (function (){var statearr_1223373 = state_1223370;
(statearr_1223373[(8)] = inst_1223356__$1);

return statearr_1223373;
})();
var statearr_1223374_1223389 = state_1223370__$1;
(statearr_1223374_1223389[(2)] = null);

(statearr_1223374_1223389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223371 === (5))){
var inst_1223356 = (state_1223370[(8)]);
var state_1223370__$1 = state_1223370;
var statearr_1223375_1223390 = state_1223370__$1;
(statearr_1223375_1223390[(2)] = inst_1223356);

(statearr_1223375_1223390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223371 === (4))){
var inst_1223359 = (state_1223370[(7)]);
var inst_1223359__$1 = (state_1223370[(2)]);
var inst_1223360 = (inst_1223359__$1 == null);
var state_1223370__$1 = (function (){var statearr_1223376 = state_1223370;
(statearr_1223376[(7)] = inst_1223359__$1);

return statearr_1223376;
})();
if(cljs.core.truth_(inst_1223360)){
var statearr_1223377_1223391 = state_1223370__$1;
(statearr_1223377_1223391[(1)] = (5));

} else {
var statearr_1223378_1223392 = state_1223370__$1;
(statearr_1223378_1223392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223371 === (3))){
var inst_1223368 = (state_1223370[(2)]);
var state_1223370__$1 = state_1223370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223370__$1,inst_1223368);
} else {
if((state_val_1223371 === (2))){
var state_1223370__$1 = state_1223370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223370__$1,(4),ch);
} else {
if((state_val_1223371 === (1))){
var inst_1223356 = init;
var state_1223370__$1 = (function (){var statearr_1223379 = state_1223370;
(statearr_1223379[(8)] = inst_1223356);

return statearr_1223379;
})();
var statearr_1223380_1223393 = state_1223370__$1;
(statearr_1223380_1223393[(2)] = null);

(statearr_1223380_1223393[(1)] = (2));


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
var statearr_1223384 = [null,null,null,null,null,null,null,null,null];
(statearr_1223384[(0)] = state_machine__9185__auto__);

(statearr_1223384[(1)] = (1));

return statearr_1223384;
});
var state_machine__9185__auto____1 = (function (state_1223370){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223385){if((e1223385 instanceof Object)){
var ex__9188__auto__ = e1223385;
var statearr_1223386_1223394 = state_1223370;
(statearr_1223386_1223394[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223395 = state_1223370;
state_1223370 = G__1223395;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223370){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1223387 = f__9200__auto__.call(null);
(statearr_1223387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1223387;
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
return (function (state_1223469){
var state_val_1223470 = (state_1223469[(1)]);
if((state_val_1223470 === (7))){
var inst_1223451 = (state_1223469[(2)]);
var state_1223469__$1 = state_1223469;
var statearr_1223471_1223494 = state_1223469__$1;
(statearr_1223471_1223494[(2)] = inst_1223451);

(statearr_1223471_1223494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (1))){
var inst_1223445 = cljs.core.seq.call(null,coll);
var inst_1223446 = inst_1223445;
var state_1223469__$1 = (function (){var statearr_1223472 = state_1223469;
(statearr_1223472[(7)] = inst_1223446);

return statearr_1223472;
})();
var statearr_1223473_1223495 = state_1223469__$1;
(statearr_1223473_1223495[(2)] = null);

(statearr_1223473_1223495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (4))){
var inst_1223446 = (state_1223469[(7)]);
var inst_1223449 = cljs.core.first.call(null,inst_1223446);
var state_1223469__$1 = state_1223469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1223469__$1,(7),ch,inst_1223449);
} else {
if((state_val_1223470 === (13))){
var inst_1223463 = (state_1223469[(2)]);
var state_1223469__$1 = state_1223469;
var statearr_1223474_1223496 = state_1223469__$1;
(statearr_1223474_1223496[(2)] = inst_1223463);

(statearr_1223474_1223496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (6))){
var inst_1223454 = (state_1223469[(2)]);
var state_1223469__$1 = state_1223469;
if(cljs.core.truth_(inst_1223454)){
var statearr_1223475_1223497 = state_1223469__$1;
(statearr_1223475_1223497[(1)] = (8));

} else {
var statearr_1223476_1223498 = state_1223469__$1;
(statearr_1223476_1223498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (3))){
var inst_1223467 = (state_1223469[(2)]);
var state_1223469__$1 = state_1223469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223469__$1,inst_1223467);
} else {
if((state_val_1223470 === (12))){
var state_1223469__$1 = state_1223469;
var statearr_1223477_1223499 = state_1223469__$1;
(statearr_1223477_1223499[(2)] = null);

(statearr_1223477_1223499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (2))){
var inst_1223446 = (state_1223469[(7)]);
var state_1223469__$1 = state_1223469;
if(cljs.core.truth_(inst_1223446)){
var statearr_1223478_1223500 = state_1223469__$1;
(statearr_1223478_1223500[(1)] = (4));

} else {
var statearr_1223479_1223501 = state_1223469__$1;
(statearr_1223479_1223501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (11))){
var inst_1223460 = cljs.core.async.close_BANG_.call(null,ch);
var state_1223469__$1 = state_1223469;
var statearr_1223480_1223502 = state_1223469__$1;
(statearr_1223480_1223502[(2)] = inst_1223460);

(statearr_1223480_1223502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (9))){
var state_1223469__$1 = state_1223469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1223481_1223503 = state_1223469__$1;
(statearr_1223481_1223503[(1)] = (11));

} else {
var statearr_1223482_1223504 = state_1223469__$1;
(statearr_1223482_1223504[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (5))){
var inst_1223446 = (state_1223469[(7)]);
var state_1223469__$1 = state_1223469;
var statearr_1223483_1223505 = state_1223469__$1;
(statearr_1223483_1223505[(2)] = inst_1223446);

(statearr_1223483_1223505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (10))){
var inst_1223465 = (state_1223469[(2)]);
var state_1223469__$1 = state_1223469;
var statearr_1223484_1223506 = state_1223469__$1;
(statearr_1223484_1223506[(2)] = inst_1223465);

(statearr_1223484_1223506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223470 === (8))){
var inst_1223446 = (state_1223469[(7)]);
var inst_1223456 = cljs.core.next.call(null,inst_1223446);
var inst_1223446__$1 = inst_1223456;
var state_1223469__$1 = (function (){var statearr_1223485 = state_1223469;
(statearr_1223485[(7)] = inst_1223446__$1);

return statearr_1223485;
})();
var statearr_1223486_1223507 = state_1223469__$1;
(statearr_1223486_1223507[(2)] = null);

(statearr_1223486_1223507[(1)] = (2));


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
var statearr_1223490 = [null,null,null,null,null,null,null,null];
(statearr_1223490[(0)] = state_machine__9185__auto__);

(statearr_1223490[(1)] = (1));

return statearr_1223490;
});
var state_machine__9185__auto____1 = (function (state_1223469){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223491){if((e1223491 instanceof Object)){
var ex__9188__auto__ = e1223491;
var statearr_1223492_1223508 = state_1223469;
(statearr_1223492_1223508[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1223509 = state_1223469;
state_1223469 = G__1223509;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223469){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1223493 = f__9200__auto__.call(null);
(statearr_1223493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1223493;
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

cljs.core.async.Mux = (function (){var obj1223511 = {};
return obj1223511;
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


cljs.core.async.Mult = (function (){var obj1223513 = {};
return obj1223513;
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
if(typeof cljs.core.async.t1223735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1223735 = (function (cs,ch,mult,meta1223736){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta1223736 = meta1223736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1223735.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t1223735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t1223735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t1223735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t1223735.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1223735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t1223735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1223737){
var self__ = this;
var _1223737__$1 = this;
return self__.meta1223736;
});})(cs))
;

cljs.core.async.t1223735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1223737,meta1223736__$1){
var self__ = this;
var _1223737__$1 = this;
return (new cljs.core.async.t1223735(self__.cs,self__.ch,self__.mult,meta1223736__$1));
});})(cs))
;

cljs.core.async.t1223735.cljs$lang$type = true;

cljs.core.async.t1223735.cljs$lang$ctorStr = "cljs.core.async/t1223735";

cljs.core.async.t1223735.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1223735");
});})(cs))
;

cljs.core.async.__GT_t1223735 = ((function (cs){
return (function __GT_t1223735(cs__$1,ch__$1,mult__$1,meta1223736){
return (new cljs.core.async.t1223735(cs__$1,ch__$1,mult__$1,meta1223736));
});})(cs))
;

}

return (new cljs.core.async.t1223735(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1223956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1223956,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1223956,cs,m,dchan,dctr,done){
return (function (state_1223868){
var state_val_1223869 = (state_1223868[(1)]);
if((state_val_1223869 === (7))){
var inst_1223864 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223870_1223957 = state_1223868__$1;
(statearr_1223870_1223957[(2)] = inst_1223864);

(statearr_1223870_1223957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (20))){
var inst_1223769 = (state_1223868[(7)]);
var inst_1223779 = cljs.core.first.call(null,inst_1223769);
var inst_1223780 = cljs.core.nth.call(null,inst_1223779,(0),null);
var inst_1223781 = cljs.core.nth.call(null,inst_1223779,(1),null);
var state_1223868__$1 = (function (){var statearr_1223871 = state_1223868;
(statearr_1223871[(8)] = inst_1223780);

return statearr_1223871;
})();
if(cljs.core.truth_(inst_1223781)){
var statearr_1223872_1223958 = state_1223868__$1;
(statearr_1223872_1223958[(1)] = (22));

} else {
var statearr_1223873_1223959 = state_1223868__$1;
(statearr_1223873_1223959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (27))){
var inst_1223816 = (state_1223868[(9)]);
var inst_1223740 = (state_1223868[(10)]);
var inst_1223809 = (state_1223868[(11)]);
var inst_1223811 = (state_1223868[(12)]);
var inst_1223816__$1 = cljs.core._nth.call(null,inst_1223809,inst_1223811);
var inst_1223817 = cljs.core.async.put_BANG_.call(null,inst_1223816__$1,inst_1223740,done);
var state_1223868__$1 = (function (){var statearr_1223874 = state_1223868;
(statearr_1223874[(9)] = inst_1223816__$1);

return statearr_1223874;
})();
if(cljs.core.truth_(inst_1223817)){
var statearr_1223875_1223960 = state_1223868__$1;
(statearr_1223875_1223960[(1)] = (30));

} else {
var statearr_1223876_1223961 = state_1223868__$1;
(statearr_1223876_1223961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (1))){
var state_1223868__$1 = state_1223868;
var statearr_1223877_1223962 = state_1223868__$1;
(statearr_1223877_1223962[(2)] = null);

(statearr_1223877_1223962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (24))){
var inst_1223769 = (state_1223868[(7)]);
var inst_1223786 = (state_1223868[(2)]);
var inst_1223787 = cljs.core.next.call(null,inst_1223769);
var inst_1223749 = inst_1223787;
var inst_1223750 = null;
var inst_1223751 = (0);
var inst_1223752 = (0);
var state_1223868__$1 = (function (){var statearr_1223878 = state_1223868;
(statearr_1223878[(13)] = inst_1223750);

(statearr_1223878[(14)] = inst_1223751);

(statearr_1223878[(15)] = inst_1223786);

(statearr_1223878[(16)] = inst_1223749);

(statearr_1223878[(17)] = inst_1223752);

return statearr_1223878;
})();
var statearr_1223879_1223963 = state_1223868__$1;
(statearr_1223879_1223963[(2)] = null);

(statearr_1223879_1223963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (39))){
var state_1223868__$1 = state_1223868;
var statearr_1223883_1223964 = state_1223868__$1;
(statearr_1223883_1223964[(2)] = null);

(statearr_1223883_1223964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (4))){
var inst_1223740 = (state_1223868[(10)]);
var inst_1223740__$1 = (state_1223868[(2)]);
var inst_1223741 = (inst_1223740__$1 == null);
var state_1223868__$1 = (function (){var statearr_1223884 = state_1223868;
(statearr_1223884[(10)] = inst_1223740__$1);

return statearr_1223884;
})();
if(cljs.core.truth_(inst_1223741)){
var statearr_1223885_1223965 = state_1223868__$1;
(statearr_1223885_1223965[(1)] = (5));

} else {
var statearr_1223886_1223966 = state_1223868__$1;
(statearr_1223886_1223966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (15))){
var inst_1223750 = (state_1223868[(13)]);
var inst_1223751 = (state_1223868[(14)]);
var inst_1223749 = (state_1223868[(16)]);
var inst_1223752 = (state_1223868[(17)]);
var inst_1223765 = (state_1223868[(2)]);
var inst_1223766 = (inst_1223752 + (1));
var tmp1223880 = inst_1223750;
var tmp1223881 = inst_1223751;
var tmp1223882 = inst_1223749;
var inst_1223749__$1 = tmp1223882;
var inst_1223750__$1 = tmp1223880;
var inst_1223751__$1 = tmp1223881;
var inst_1223752__$1 = inst_1223766;
var state_1223868__$1 = (function (){var statearr_1223887 = state_1223868;
(statearr_1223887[(13)] = inst_1223750__$1);

(statearr_1223887[(14)] = inst_1223751__$1);

(statearr_1223887[(16)] = inst_1223749__$1);

(statearr_1223887[(18)] = inst_1223765);

(statearr_1223887[(17)] = inst_1223752__$1);

return statearr_1223887;
})();
var statearr_1223888_1223967 = state_1223868__$1;
(statearr_1223888_1223967[(2)] = null);

(statearr_1223888_1223967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (21))){
var inst_1223790 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223892_1223968 = state_1223868__$1;
(statearr_1223892_1223968[(2)] = inst_1223790);

(statearr_1223892_1223968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (31))){
var inst_1223816 = (state_1223868[(9)]);
var inst_1223820 = done.call(null,null);
var inst_1223821 = cljs.core.async.untap_STAR_.call(null,m,inst_1223816);
var state_1223868__$1 = (function (){var statearr_1223893 = state_1223868;
(statearr_1223893[(19)] = inst_1223820);

return statearr_1223893;
})();
var statearr_1223894_1223969 = state_1223868__$1;
(statearr_1223894_1223969[(2)] = inst_1223821);

(statearr_1223894_1223969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (32))){
var inst_1223808 = (state_1223868[(20)]);
var inst_1223810 = (state_1223868[(21)]);
var inst_1223809 = (state_1223868[(11)]);
var inst_1223811 = (state_1223868[(12)]);
var inst_1223823 = (state_1223868[(2)]);
var inst_1223824 = (inst_1223811 + (1));
var tmp1223889 = inst_1223808;
var tmp1223890 = inst_1223810;
var tmp1223891 = inst_1223809;
var inst_1223808__$1 = tmp1223889;
var inst_1223809__$1 = tmp1223891;
var inst_1223810__$1 = tmp1223890;
var inst_1223811__$1 = inst_1223824;
var state_1223868__$1 = (function (){var statearr_1223895 = state_1223868;
(statearr_1223895[(20)] = inst_1223808__$1);

(statearr_1223895[(21)] = inst_1223810__$1);

(statearr_1223895[(22)] = inst_1223823);

(statearr_1223895[(11)] = inst_1223809__$1);

(statearr_1223895[(12)] = inst_1223811__$1);

return statearr_1223895;
})();
var statearr_1223896_1223970 = state_1223868__$1;
(statearr_1223896_1223970[(2)] = null);

(statearr_1223896_1223970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (40))){
var inst_1223836 = (state_1223868[(23)]);
var inst_1223840 = done.call(null,null);
var inst_1223841 = cljs.core.async.untap_STAR_.call(null,m,inst_1223836);
var state_1223868__$1 = (function (){var statearr_1223897 = state_1223868;
(statearr_1223897[(24)] = inst_1223840);

return statearr_1223897;
})();
var statearr_1223898_1223971 = state_1223868__$1;
(statearr_1223898_1223971[(2)] = inst_1223841);

(statearr_1223898_1223971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (33))){
var inst_1223827 = (state_1223868[(25)]);
var inst_1223829 = cljs.core.chunked_seq_QMARK_.call(null,inst_1223827);
var state_1223868__$1 = state_1223868;
if(inst_1223829){
var statearr_1223899_1223972 = state_1223868__$1;
(statearr_1223899_1223972[(1)] = (36));

} else {
var statearr_1223900_1223973 = state_1223868__$1;
(statearr_1223900_1223973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (13))){
var inst_1223759 = (state_1223868[(26)]);
var inst_1223762 = cljs.core.async.close_BANG_.call(null,inst_1223759);
var state_1223868__$1 = state_1223868;
var statearr_1223901_1223974 = state_1223868__$1;
(statearr_1223901_1223974[(2)] = inst_1223762);

(statearr_1223901_1223974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (22))){
var inst_1223780 = (state_1223868[(8)]);
var inst_1223783 = cljs.core.async.close_BANG_.call(null,inst_1223780);
var state_1223868__$1 = state_1223868;
var statearr_1223902_1223975 = state_1223868__$1;
(statearr_1223902_1223975[(2)] = inst_1223783);

(statearr_1223902_1223975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (36))){
var inst_1223827 = (state_1223868[(25)]);
var inst_1223831 = cljs.core.chunk_first.call(null,inst_1223827);
var inst_1223832 = cljs.core.chunk_rest.call(null,inst_1223827);
var inst_1223833 = cljs.core.count.call(null,inst_1223831);
var inst_1223808 = inst_1223832;
var inst_1223809 = inst_1223831;
var inst_1223810 = inst_1223833;
var inst_1223811 = (0);
var state_1223868__$1 = (function (){var statearr_1223903 = state_1223868;
(statearr_1223903[(20)] = inst_1223808);

(statearr_1223903[(21)] = inst_1223810);

(statearr_1223903[(11)] = inst_1223809);

(statearr_1223903[(12)] = inst_1223811);

return statearr_1223903;
})();
var statearr_1223904_1223976 = state_1223868__$1;
(statearr_1223904_1223976[(2)] = null);

(statearr_1223904_1223976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (41))){
var inst_1223827 = (state_1223868[(25)]);
var inst_1223843 = (state_1223868[(2)]);
var inst_1223844 = cljs.core.next.call(null,inst_1223827);
var inst_1223808 = inst_1223844;
var inst_1223809 = null;
var inst_1223810 = (0);
var inst_1223811 = (0);
var state_1223868__$1 = (function (){var statearr_1223905 = state_1223868;
(statearr_1223905[(20)] = inst_1223808);

(statearr_1223905[(21)] = inst_1223810);

(statearr_1223905[(11)] = inst_1223809);

(statearr_1223905[(27)] = inst_1223843);

(statearr_1223905[(12)] = inst_1223811);

return statearr_1223905;
})();
var statearr_1223906_1223977 = state_1223868__$1;
(statearr_1223906_1223977[(2)] = null);

(statearr_1223906_1223977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (43))){
var state_1223868__$1 = state_1223868;
var statearr_1223907_1223978 = state_1223868__$1;
(statearr_1223907_1223978[(2)] = null);

(statearr_1223907_1223978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (29))){
var inst_1223852 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223908_1223979 = state_1223868__$1;
(statearr_1223908_1223979[(2)] = inst_1223852);

(statearr_1223908_1223979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (44))){
var inst_1223861 = (state_1223868[(2)]);
var state_1223868__$1 = (function (){var statearr_1223909 = state_1223868;
(statearr_1223909[(28)] = inst_1223861);

return statearr_1223909;
})();
var statearr_1223910_1223980 = state_1223868__$1;
(statearr_1223910_1223980[(2)] = null);

(statearr_1223910_1223980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (6))){
var inst_1223800 = (state_1223868[(29)]);
var inst_1223799 = cljs.core.deref.call(null,cs);
var inst_1223800__$1 = cljs.core.keys.call(null,inst_1223799);
var inst_1223801 = cljs.core.count.call(null,inst_1223800__$1);
var inst_1223802 = cljs.core.reset_BANG_.call(null,dctr,inst_1223801);
var inst_1223807 = cljs.core.seq.call(null,inst_1223800__$1);
var inst_1223808 = inst_1223807;
var inst_1223809 = null;
var inst_1223810 = (0);
var inst_1223811 = (0);
var state_1223868__$1 = (function (){var statearr_1223911 = state_1223868;
(statearr_1223911[(20)] = inst_1223808);

(statearr_1223911[(21)] = inst_1223810);

(statearr_1223911[(30)] = inst_1223802);

(statearr_1223911[(11)] = inst_1223809);

(statearr_1223911[(12)] = inst_1223811);

(statearr_1223911[(29)] = inst_1223800__$1);

return statearr_1223911;
})();
var statearr_1223912_1223981 = state_1223868__$1;
(statearr_1223912_1223981[(2)] = null);

(statearr_1223912_1223981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (28))){
var inst_1223808 = (state_1223868[(20)]);
var inst_1223827 = (state_1223868[(25)]);
var inst_1223827__$1 = cljs.core.seq.call(null,inst_1223808);
var state_1223868__$1 = (function (){var statearr_1223913 = state_1223868;
(statearr_1223913[(25)] = inst_1223827__$1);

return statearr_1223913;
})();
if(inst_1223827__$1){
var statearr_1223914_1223982 = state_1223868__$1;
(statearr_1223914_1223982[(1)] = (33));

} else {
var statearr_1223915_1223983 = state_1223868__$1;
(statearr_1223915_1223983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (25))){
var inst_1223810 = (state_1223868[(21)]);
var inst_1223811 = (state_1223868[(12)]);
var inst_1223813 = (inst_1223811 < inst_1223810);
var inst_1223814 = inst_1223813;
var state_1223868__$1 = state_1223868;
if(cljs.core.truth_(inst_1223814)){
var statearr_1223916_1223984 = state_1223868__$1;
(statearr_1223916_1223984[(1)] = (27));

} else {
var statearr_1223917_1223985 = state_1223868__$1;
(statearr_1223917_1223985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (34))){
var state_1223868__$1 = state_1223868;
var statearr_1223918_1223986 = state_1223868__$1;
(statearr_1223918_1223986[(2)] = null);

(statearr_1223918_1223986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (17))){
var state_1223868__$1 = state_1223868;
var statearr_1223919_1223987 = state_1223868__$1;
(statearr_1223919_1223987[(2)] = null);

(statearr_1223919_1223987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (3))){
var inst_1223866 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1223868__$1,inst_1223866);
} else {
if((state_val_1223869 === (12))){
var inst_1223795 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223920_1223988 = state_1223868__$1;
(statearr_1223920_1223988[(2)] = inst_1223795);

(statearr_1223920_1223988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (2))){
var state_1223868__$1 = state_1223868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223868__$1,(4),ch);
} else {
if((state_val_1223869 === (23))){
var state_1223868__$1 = state_1223868;
var statearr_1223921_1223989 = state_1223868__$1;
(statearr_1223921_1223989[(2)] = null);

(statearr_1223921_1223989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (35))){
var inst_1223850 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223922_1223990 = state_1223868__$1;
(statearr_1223922_1223990[(2)] = inst_1223850);

(statearr_1223922_1223990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (19))){
var inst_1223769 = (state_1223868[(7)]);
var inst_1223773 = cljs.core.chunk_first.call(null,inst_1223769);
var inst_1223774 = cljs.core.chunk_rest.call(null,inst_1223769);
var inst_1223775 = cljs.core.count.call(null,inst_1223773);
var inst_1223749 = inst_1223774;
var inst_1223750 = inst_1223773;
var inst_1223751 = inst_1223775;
var inst_1223752 = (0);
var state_1223868__$1 = (function (){var statearr_1223923 = state_1223868;
(statearr_1223923[(13)] = inst_1223750);

(statearr_1223923[(14)] = inst_1223751);

(statearr_1223923[(16)] = inst_1223749);

(statearr_1223923[(17)] = inst_1223752);

return statearr_1223923;
})();
var statearr_1223924_1223991 = state_1223868__$1;
(statearr_1223924_1223991[(2)] = null);

(statearr_1223924_1223991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (11))){
var inst_1223769 = (state_1223868[(7)]);
var inst_1223749 = (state_1223868[(16)]);
var inst_1223769__$1 = cljs.core.seq.call(null,inst_1223749);
var state_1223868__$1 = (function (){var statearr_1223925 = state_1223868;
(statearr_1223925[(7)] = inst_1223769__$1);

return statearr_1223925;
})();
if(inst_1223769__$1){
var statearr_1223926_1223992 = state_1223868__$1;
(statearr_1223926_1223992[(1)] = (16));

} else {
var statearr_1223927_1223993 = state_1223868__$1;
(statearr_1223927_1223993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (9))){
var inst_1223797 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223928_1223994 = state_1223868__$1;
(statearr_1223928_1223994[(2)] = inst_1223797);

(statearr_1223928_1223994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (5))){
var inst_1223747 = cljs.core.deref.call(null,cs);
var inst_1223748 = cljs.core.seq.call(null,inst_1223747);
var inst_1223749 = inst_1223748;
var inst_1223750 = null;
var inst_1223751 = (0);
var inst_1223752 = (0);
var state_1223868__$1 = (function (){var statearr_1223929 = state_1223868;
(statearr_1223929[(13)] = inst_1223750);

(statearr_1223929[(14)] = inst_1223751);

(statearr_1223929[(16)] = inst_1223749);

(statearr_1223929[(17)] = inst_1223752);

return statearr_1223929;
})();
var statearr_1223930_1223995 = state_1223868__$1;
(statearr_1223930_1223995[(2)] = null);

(statearr_1223930_1223995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (14))){
var state_1223868__$1 = state_1223868;
var statearr_1223931_1223996 = state_1223868__$1;
(statearr_1223931_1223996[(2)] = null);

(statearr_1223931_1223996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (45))){
var inst_1223858 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223932_1223997 = state_1223868__$1;
(statearr_1223932_1223997[(2)] = inst_1223858);

(statearr_1223932_1223997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (26))){
var inst_1223800 = (state_1223868[(29)]);
var inst_1223854 = (state_1223868[(2)]);
var inst_1223855 = cljs.core.seq.call(null,inst_1223800);
var state_1223868__$1 = (function (){var statearr_1223933 = state_1223868;
(statearr_1223933[(31)] = inst_1223854);

return statearr_1223933;
})();
if(inst_1223855){
var statearr_1223934_1223998 = state_1223868__$1;
(statearr_1223934_1223998[(1)] = (42));

} else {
var statearr_1223935_1223999 = state_1223868__$1;
(statearr_1223935_1223999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (16))){
var inst_1223769 = (state_1223868[(7)]);
var inst_1223771 = cljs.core.chunked_seq_QMARK_.call(null,inst_1223769);
var state_1223868__$1 = state_1223868;
if(inst_1223771){
var statearr_1223936_1224000 = state_1223868__$1;
(statearr_1223936_1224000[(1)] = (19));

} else {
var statearr_1223937_1224001 = state_1223868__$1;
(statearr_1223937_1224001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (38))){
var inst_1223847 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223938_1224002 = state_1223868__$1;
(statearr_1223938_1224002[(2)] = inst_1223847);

(statearr_1223938_1224002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (30))){
var state_1223868__$1 = state_1223868;
var statearr_1223939_1224003 = state_1223868__$1;
(statearr_1223939_1224003[(2)] = null);

(statearr_1223939_1224003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (10))){
var inst_1223750 = (state_1223868[(13)]);
var inst_1223752 = (state_1223868[(17)]);
var inst_1223758 = cljs.core._nth.call(null,inst_1223750,inst_1223752);
var inst_1223759 = cljs.core.nth.call(null,inst_1223758,(0),null);
var inst_1223760 = cljs.core.nth.call(null,inst_1223758,(1),null);
var state_1223868__$1 = (function (){var statearr_1223940 = state_1223868;
(statearr_1223940[(26)] = inst_1223759);

return statearr_1223940;
})();
if(cljs.core.truth_(inst_1223760)){
var statearr_1223941_1224004 = state_1223868__$1;
(statearr_1223941_1224004[(1)] = (13));

} else {
var statearr_1223942_1224005 = state_1223868__$1;
(statearr_1223942_1224005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (18))){
var inst_1223793 = (state_1223868[(2)]);
var state_1223868__$1 = state_1223868;
var statearr_1223943_1224006 = state_1223868__$1;
(statearr_1223943_1224006[(2)] = inst_1223793);

(statearr_1223943_1224006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (42))){
var state_1223868__$1 = state_1223868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1223868__$1,(45),dchan);
} else {
if((state_val_1223869 === (37))){
var inst_1223836 = (state_1223868[(23)]);
var inst_1223740 = (state_1223868[(10)]);
var inst_1223827 = (state_1223868[(25)]);
var inst_1223836__$1 = cljs.core.first.call(null,inst_1223827);
var inst_1223837 = cljs.core.async.put_BANG_.call(null,inst_1223836__$1,inst_1223740,done);
var state_1223868__$1 = (function (){var statearr_1223944 = state_1223868;
(statearr_1223944[(23)] = inst_1223836__$1);

return statearr_1223944;
})();
if(cljs.core.truth_(inst_1223837)){
var statearr_1223945_1224007 = state_1223868__$1;
(statearr_1223945_1224007[(1)] = (39));

} else {
var statearr_1223946_1224008 = state_1223868__$1;
(statearr_1223946_1224008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1223869 === (8))){
var inst_1223751 = (state_1223868[(14)]);
var inst_1223752 = (state_1223868[(17)]);
var inst_1223754 = (inst_1223752 < inst_1223751);
var inst_1223755 = inst_1223754;
var state_1223868__$1 = state_1223868;
if(cljs.core.truth_(inst_1223755)){
var statearr_1223947_1224009 = state_1223868__$1;
(statearr_1223947_1224009[(1)] = (10));

} else {
var statearr_1223948_1224010 = state_1223868__$1;
(statearr_1223948_1224010[(1)] = (11));

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
});})(c__9199__auto___1223956,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1223956,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1223952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1223952[(0)] = state_machine__9185__auto__);

(statearr_1223952[(1)] = (1));

return statearr_1223952;
});
var state_machine__9185__auto____1 = (function (state_1223868){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1223868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1223953){if((e1223953 instanceof Object)){
var ex__9188__auto__ = e1223953;
var statearr_1223954_1224011 = state_1223868;
(statearr_1223954_1224011[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1223868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1223953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224012 = state_1223868;
state_1223868 = G__1224012;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1223868){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1223868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1223956,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1223955 = f__9200__auto__.call(null);
(statearr_1223955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1223956);

return statearr_1223955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1223956,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj1224014 = {};
return obj1224014;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__1224015){
var map__1224020 = p__1224015;
var map__1224020__$1 = ((cljs.core.seq_QMARK_.call(null,map__1224020))?cljs.core.apply.call(null,cljs.core.hash_map,map__1224020):map__1224020);
var opts = map__1224020__$1;
var statearr_1224021_1224024 = state;
(statearr_1224021_1224024[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__1224020,map__1224020__$1,opts){
return (function (val){
var statearr_1224022_1224025 = state;
(statearr_1224022_1224025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1224020,map__1224020__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_1224023_1224026 = state;
(statearr_1224023_1224026[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__1224015 = null;
if (arguments.length > 3) {
  p__1224015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__1224015);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__1224027){
var state = cljs.core.first(arglist__1224027);
arglist__1224027 = cljs.core.next(arglist__1224027);
var cont_block = cljs.core.first(arglist__1224027);
arglist__1224027 = cljs.core.next(arglist__1224027);
var ports = cljs.core.first(arglist__1224027);
var p__1224015 = cljs.core.rest(arglist__1224027);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__1224015);
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
if(typeof cljs.core.async.t1224147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224147 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1224148){
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
this.meta1224148 = meta1224148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224147.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t1224147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t1224147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1224147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1224149){
var self__ = this;
var _1224149__$1 = this;
return self__.meta1224148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1224149,meta1224148__$1){
var self__ = this;
var _1224149__$1 = this;
return (new cljs.core.async.t1224147(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1224148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1224147.cljs$lang$type = true;

cljs.core.async.t1224147.cljs$lang$ctorStr = "cljs.core.async/t1224147";

cljs.core.async.t1224147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t1224147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t1224147(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1224148){
return (new cljs.core.async.t1224147(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1224148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t1224147(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1224266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1224219){
var state_val_1224220 = (state_1224219[(1)]);
if((state_val_1224220 === (7))){
var inst_1224163 = (state_1224219[(7)]);
var inst_1224168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1224163);
var state_1224219__$1 = state_1224219;
var statearr_1224221_1224267 = state_1224219__$1;
(statearr_1224221_1224267[(2)] = inst_1224168);

(statearr_1224221_1224267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (20))){
var inst_1224178 = (state_1224219[(8)]);
var state_1224219__$1 = state_1224219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1224219__$1,(23),out,inst_1224178);
} else {
if((state_val_1224220 === (1))){
var inst_1224153 = (state_1224219[(9)]);
var inst_1224153__$1 = calc_state.call(null);
var inst_1224154 = cljs.core.seq_QMARK_.call(null,inst_1224153__$1);
var state_1224219__$1 = (function (){var statearr_1224222 = state_1224219;
(statearr_1224222[(9)] = inst_1224153__$1);

return statearr_1224222;
})();
if(inst_1224154){
var statearr_1224223_1224268 = state_1224219__$1;
(statearr_1224223_1224268[(1)] = (2));

} else {
var statearr_1224224_1224269 = state_1224219__$1;
(statearr_1224224_1224269[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (24))){
var inst_1224171 = (state_1224219[(10)]);
var inst_1224163 = inst_1224171;
var state_1224219__$1 = (function (){var statearr_1224225 = state_1224219;
(statearr_1224225[(7)] = inst_1224163);

return statearr_1224225;
})();
var statearr_1224226_1224270 = state_1224219__$1;
(statearr_1224226_1224270[(2)] = null);

(statearr_1224226_1224270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (4))){
var inst_1224153 = (state_1224219[(9)]);
var inst_1224159 = (state_1224219[(2)]);
var inst_1224160 = cljs.core.get.call(null,inst_1224159,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1224161 = cljs.core.get.call(null,inst_1224159,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1224162 = cljs.core.get.call(null,inst_1224159,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1224163 = inst_1224153;
var state_1224219__$1 = (function (){var statearr_1224227 = state_1224219;
(statearr_1224227[(11)] = inst_1224162);

(statearr_1224227[(12)] = inst_1224161);

(statearr_1224227[(13)] = inst_1224160);

(statearr_1224227[(7)] = inst_1224163);

return statearr_1224227;
})();
var statearr_1224228_1224271 = state_1224219__$1;
(statearr_1224228_1224271[(2)] = null);

(statearr_1224228_1224271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (15))){
var state_1224219__$1 = state_1224219;
var statearr_1224229_1224272 = state_1224219__$1;
(statearr_1224229_1224272[(2)] = null);

(statearr_1224229_1224272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (21))){
var inst_1224171 = (state_1224219[(10)]);
var inst_1224163 = inst_1224171;
var state_1224219__$1 = (function (){var statearr_1224230 = state_1224219;
(statearr_1224230[(7)] = inst_1224163);

return statearr_1224230;
})();
var statearr_1224231_1224273 = state_1224219__$1;
(statearr_1224231_1224273[(2)] = null);

(statearr_1224231_1224273[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (13))){
var inst_1224215 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
var statearr_1224232_1224274 = state_1224219__$1;
(statearr_1224232_1224274[(2)] = inst_1224215);

(statearr_1224232_1224274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (22))){
var inst_1224213 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
var statearr_1224233_1224275 = state_1224219__$1;
(statearr_1224233_1224275[(2)] = inst_1224213);

(statearr_1224233_1224275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (6))){
var inst_1224217 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1224219__$1,inst_1224217);
} else {
if((state_val_1224220 === (25))){
var state_1224219__$1 = state_1224219;
var statearr_1224234_1224276 = state_1224219__$1;
(statearr_1224234_1224276[(2)] = null);

(statearr_1224234_1224276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (17))){
var inst_1224193 = (state_1224219[(14)]);
var state_1224219__$1 = state_1224219;
var statearr_1224235_1224277 = state_1224219__$1;
(statearr_1224235_1224277[(2)] = inst_1224193);

(statearr_1224235_1224277[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (3))){
var inst_1224153 = (state_1224219[(9)]);
var state_1224219__$1 = state_1224219;
var statearr_1224236_1224278 = state_1224219__$1;
(statearr_1224236_1224278[(2)] = inst_1224153);

(statearr_1224236_1224278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (12))){
var inst_1224179 = (state_1224219[(15)]);
var inst_1224193 = (state_1224219[(14)]);
var inst_1224174 = (state_1224219[(16)]);
var inst_1224193__$1 = inst_1224174.call(null,inst_1224179);
var state_1224219__$1 = (function (){var statearr_1224237 = state_1224219;
(statearr_1224237[(14)] = inst_1224193__$1);

return statearr_1224237;
})();
if(cljs.core.truth_(inst_1224193__$1)){
var statearr_1224238_1224279 = state_1224219__$1;
(statearr_1224238_1224279[(1)] = (17));

} else {
var statearr_1224239_1224280 = state_1224219__$1;
(statearr_1224239_1224280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (2))){
var inst_1224153 = (state_1224219[(9)]);
var inst_1224156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1224153);
var state_1224219__$1 = state_1224219;
var statearr_1224240_1224281 = state_1224219__$1;
(statearr_1224240_1224281[(2)] = inst_1224156);

(statearr_1224240_1224281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (23))){
var inst_1224204 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
if(cljs.core.truth_(inst_1224204)){
var statearr_1224241_1224282 = state_1224219__$1;
(statearr_1224241_1224282[(1)] = (24));

} else {
var statearr_1224242_1224283 = state_1224219__$1;
(statearr_1224242_1224283[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (19))){
var inst_1224201 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
if(cljs.core.truth_(inst_1224201)){
var statearr_1224243_1224284 = state_1224219__$1;
(statearr_1224243_1224284[(1)] = (20));

} else {
var statearr_1224244_1224285 = state_1224219__$1;
(statearr_1224244_1224285[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (11))){
var inst_1224178 = (state_1224219[(8)]);
var inst_1224184 = (inst_1224178 == null);
var state_1224219__$1 = state_1224219;
if(cljs.core.truth_(inst_1224184)){
var statearr_1224245_1224286 = state_1224219__$1;
(statearr_1224245_1224286[(1)] = (14));

} else {
var statearr_1224246_1224287 = state_1224219__$1;
(statearr_1224246_1224287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (9))){
var inst_1224171 = (state_1224219[(10)]);
var inst_1224171__$1 = (state_1224219[(2)]);
var inst_1224172 = cljs.core.get.call(null,inst_1224171__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1224173 = cljs.core.get.call(null,inst_1224171__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1224174 = cljs.core.get.call(null,inst_1224171__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_1224219__$1 = (function (){var statearr_1224247 = state_1224219;
(statearr_1224247[(17)] = inst_1224173);

(statearr_1224247[(16)] = inst_1224174);

(statearr_1224247[(10)] = inst_1224171__$1);

return statearr_1224247;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1224219__$1,(10),inst_1224172);
} else {
if((state_val_1224220 === (5))){
var inst_1224163 = (state_1224219[(7)]);
var inst_1224166 = cljs.core.seq_QMARK_.call(null,inst_1224163);
var state_1224219__$1 = state_1224219;
if(inst_1224166){
var statearr_1224248_1224288 = state_1224219__$1;
(statearr_1224248_1224288[(1)] = (7));

} else {
var statearr_1224249_1224289 = state_1224219__$1;
(statearr_1224249_1224289[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (14))){
var inst_1224179 = (state_1224219[(15)]);
var inst_1224186 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1224179);
var state_1224219__$1 = state_1224219;
var statearr_1224250_1224290 = state_1224219__$1;
(statearr_1224250_1224290[(2)] = inst_1224186);

(statearr_1224250_1224290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (26))){
var inst_1224209 = (state_1224219[(2)]);
var state_1224219__$1 = state_1224219;
var statearr_1224251_1224291 = state_1224219__$1;
(statearr_1224251_1224291[(2)] = inst_1224209);

(statearr_1224251_1224291[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (16))){
var inst_1224189 = (state_1224219[(2)]);
var inst_1224190 = calc_state.call(null);
var inst_1224163 = inst_1224190;
var state_1224219__$1 = (function (){var statearr_1224252 = state_1224219;
(statearr_1224252[(18)] = inst_1224189);

(statearr_1224252[(7)] = inst_1224163);

return statearr_1224252;
})();
var statearr_1224253_1224292 = state_1224219__$1;
(statearr_1224253_1224292[(2)] = null);

(statearr_1224253_1224292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (10))){
var inst_1224179 = (state_1224219[(15)]);
var inst_1224178 = (state_1224219[(8)]);
var inst_1224177 = (state_1224219[(2)]);
var inst_1224178__$1 = cljs.core.nth.call(null,inst_1224177,(0),null);
var inst_1224179__$1 = cljs.core.nth.call(null,inst_1224177,(1),null);
var inst_1224180 = (inst_1224178__$1 == null);
var inst_1224181 = cljs.core._EQ_.call(null,inst_1224179__$1,change);
var inst_1224182 = (inst_1224180) || (inst_1224181);
var state_1224219__$1 = (function (){var statearr_1224254 = state_1224219;
(statearr_1224254[(15)] = inst_1224179__$1);

(statearr_1224254[(8)] = inst_1224178__$1);

return statearr_1224254;
})();
if(cljs.core.truth_(inst_1224182)){
var statearr_1224255_1224293 = state_1224219__$1;
(statearr_1224255_1224293[(1)] = (11));

} else {
var statearr_1224256_1224294 = state_1224219__$1;
(statearr_1224256_1224294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (18))){
var inst_1224173 = (state_1224219[(17)]);
var inst_1224179 = (state_1224219[(15)]);
var inst_1224174 = (state_1224219[(16)]);
var inst_1224196 = cljs.core.empty_QMARK_.call(null,inst_1224174);
var inst_1224197 = inst_1224173.call(null,inst_1224179);
var inst_1224198 = cljs.core.not.call(null,inst_1224197);
var inst_1224199 = (inst_1224196) && (inst_1224198);
var state_1224219__$1 = state_1224219;
var statearr_1224257_1224295 = state_1224219__$1;
(statearr_1224257_1224295[(2)] = inst_1224199);

(statearr_1224257_1224295[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224220 === (8))){
var inst_1224163 = (state_1224219[(7)]);
var state_1224219__$1 = state_1224219;
var statearr_1224258_1224296 = state_1224219__$1;
(statearr_1224258_1224296[(2)] = inst_1224163);

(statearr_1224258_1224296[(1)] = (9));


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
});})(c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1224262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1224262[(0)] = state_machine__9185__auto__);

(statearr_1224262[(1)] = (1));

return statearr_1224262;
});
var state_machine__9185__auto____1 = (function (state_1224219){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1224219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1224263){if((e1224263 instanceof Object)){
var ex__9188__auto__ = e1224263;
var statearr_1224264_1224297 = state_1224219;
(statearr_1224264_1224297[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1224263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224298 = state_1224219;
state_1224219 = G__1224298;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1224219){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1224219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_1224265 = f__9200__auto__.call(null);
(statearr_1224265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1224266);

return statearr_1224265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1224266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj1224300 = {};
return obj1224300;
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
return (function (p1__1224301_SHARP_){
if(cljs.core.truth_(p1__1224301_SHARP_.call(null,topic))){
return p1__1224301_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1224301_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t1224424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224424 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta1224425){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta1224425 = meta1224425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224424.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t1224424.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t1224424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1224424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1224426){
var self__ = this;
var _1224426__$1 = this;
return self__.meta1224425;
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1224426,meta1224425__$1){
var self__ = this;
var _1224426__$1 = this;
return (new cljs.core.async.t1224424(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta1224425__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t1224424.cljs$lang$type = true;

cljs.core.async.t1224424.cljs$lang$ctorStr = "cljs.core.async/t1224424";

cljs.core.async.t1224424.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224424");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t1224424 = ((function (mults,ensure_mult){
return (function __GT_t1224424(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1224425){
return (new cljs.core.async.t1224424(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1224425));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t1224424(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1224546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1224546,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1224546,mults,ensure_mult,p){
return (function (state_1224498){
var state_val_1224499 = (state_1224498[(1)]);
if((state_val_1224499 === (7))){
var inst_1224494 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224500_1224547 = state_1224498__$1;
(statearr_1224500_1224547[(2)] = inst_1224494);

(statearr_1224500_1224547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (20))){
var state_1224498__$1 = state_1224498;
var statearr_1224501_1224548 = state_1224498__$1;
(statearr_1224501_1224548[(2)] = null);

(statearr_1224501_1224548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (1))){
var state_1224498__$1 = state_1224498;
var statearr_1224502_1224549 = state_1224498__$1;
(statearr_1224502_1224549[(2)] = null);

(statearr_1224502_1224549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (24))){
var inst_1224477 = (state_1224498[(7)]);
var inst_1224486 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1224477);
var state_1224498__$1 = state_1224498;
var statearr_1224503_1224550 = state_1224498__$1;
(statearr_1224503_1224550[(2)] = inst_1224486);

(statearr_1224503_1224550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (4))){
var inst_1224429 = (state_1224498[(8)]);
var inst_1224429__$1 = (state_1224498[(2)]);
var inst_1224430 = (inst_1224429__$1 == null);
var state_1224498__$1 = (function (){var statearr_1224504 = state_1224498;
(statearr_1224504[(8)] = inst_1224429__$1);

return statearr_1224504;
})();
if(cljs.core.truth_(inst_1224430)){
var statearr_1224505_1224551 = state_1224498__$1;
(statearr_1224505_1224551[(1)] = (5));

} else {
var statearr_1224506_1224552 = state_1224498__$1;
(statearr_1224506_1224552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (15))){
var inst_1224471 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224507_1224553 = state_1224498__$1;
(statearr_1224507_1224553[(2)] = inst_1224471);

(statearr_1224507_1224553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (21))){
var inst_1224491 = (state_1224498[(2)]);
var state_1224498__$1 = (function (){var statearr_1224508 = state_1224498;
(statearr_1224508[(9)] = inst_1224491);

return statearr_1224508;
})();
var statearr_1224509_1224554 = state_1224498__$1;
(statearr_1224509_1224554[(2)] = null);

(statearr_1224509_1224554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (13))){
var inst_1224453 = (state_1224498[(10)]);
var inst_1224455 = cljs.core.chunked_seq_QMARK_.call(null,inst_1224453);
var state_1224498__$1 = state_1224498;
if(inst_1224455){
var statearr_1224510_1224555 = state_1224498__$1;
(statearr_1224510_1224555[(1)] = (16));

} else {
var statearr_1224511_1224556 = state_1224498__$1;
(statearr_1224511_1224556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (22))){
var inst_1224483 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
if(cljs.core.truth_(inst_1224483)){
var statearr_1224512_1224557 = state_1224498__$1;
(statearr_1224512_1224557[(1)] = (23));

} else {
var statearr_1224513_1224558 = state_1224498__$1;
(statearr_1224513_1224558[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (6))){
var inst_1224429 = (state_1224498[(8)]);
var inst_1224477 = (state_1224498[(7)]);
var inst_1224479 = (state_1224498[(11)]);
var inst_1224477__$1 = topic_fn.call(null,inst_1224429);
var inst_1224478 = cljs.core.deref.call(null,mults);
var inst_1224479__$1 = cljs.core.get.call(null,inst_1224478,inst_1224477__$1);
var state_1224498__$1 = (function (){var statearr_1224514 = state_1224498;
(statearr_1224514[(7)] = inst_1224477__$1);

(statearr_1224514[(11)] = inst_1224479__$1);

return statearr_1224514;
})();
if(cljs.core.truth_(inst_1224479__$1)){
var statearr_1224515_1224559 = state_1224498__$1;
(statearr_1224515_1224559[(1)] = (19));

} else {
var statearr_1224516_1224560 = state_1224498__$1;
(statearr_1224516_1224560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (25))){
var inst_1224488 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224517_1224561 = state_1224498__$1;
(statearr_1224517_1224561[(2)] = inst_1224488);

(statearr_1224517_1224561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (17))){
var inst_1224453 = (state_1224498[(10)]);
var inst_1224462 = cljs.core.first.call(null,inst_1224453);
var inst_1224463 = cljs.core.async.muxch_STAR_.call(null,inst_1224462);
var inst_1224464 = cljs.core.async.close_BANG_.call(null,inst_1224463);
var inst_1224465 = cljs.core.next.call(null,inst_1224453);
var inst_1224439 = inst_1224465;
var inst_1224440 = null;
var inst_1224441 = (0);
var inst_1224442 = (0);
var state_1224498__$1 = (function (){var statearr_1224518 = state_1224498;
(statearr_1224518[(12)] = inst_1224440);

(statearr_1224518[(13)] = inst_1224439);

(statearr_1224518[(14)] = inst_1224441);

(statearr_1224518[(15)] = inst_1224442);

(statearr_1224518[(16)] = inst_1224464);

return statearr_1224518;
})();
var statearr_1224519_1224562 = state_1224498__$1;
(statearr_1224519_1224562[(2)] = null);

(statearr_1224519_1224562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (3))){
var inst_1224496 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1224498__$1,inst_1224496);
} else {
if((state_val_1224499 === (12))){
var inst_1224473 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224520_1224563 = state_1224498__$1;
(statearr_1224520_1224563[(2)] = inst_1224473);

(statearr_1224520_1224563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (2))){
var state_1224498__$1 = state_1224498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1224498__$1,(4),ch);
} else {
if((state_val_1224499 === (23))){
var state_1224498__$1 = state_1224498;
var statearr_1224521_1224564 = state_1224498__$1;
(statearr_1224521_1224564[(2)] = null);

(statearr_1224521_1224564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (19))){
var inst_1224429 = (state_1224498[(8)]);
var inst_1224479 = (state_1224498[(11)]);
var inst_1224481 = cljs.core.async.muxch_STAR_.call(null,inst_1224479);
var state_1224498__$1 = state_1224498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1224498__$1,(22),inst_1224481,inst_1224429);
} else {
if((state_val_1224499 === (11))){
var inst_1224453 = (state_1224498[(10)]);
var inst_1224439 = (state_1224498[(13)]);
var inst_1224453__$1 = cljs.core.seq.call(null,inst_1224439);
var state_1224498__$1 = (function (){var statearr_1224522 = state_1224498;
(statearr_1224522[(10)] = inst_1224453__$1);

return statearr_1224522;
})();
if(inst_1224453__$1){
var statearr_1224523_1224565 = state_1224498__$1;
(statearr_1224523_1224565[(1)] = (13));

} else {
var statearr_1224524_1224566 = state_1224498__$1;
(statearr_1224524_1224566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (9))){
var inst_1224475 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224525_1224567 = state_1224498__$1;
(statearr_1224525_1224567[(2)] = inst_1224475);

(statearr_1224525_1224567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (5))){
var inst_1224436 = cljs.core.deref.call(null,mults);
var inst_1224437 = cljs.core.vals.call(null,inst_1224436);
var inst_1224438 = cljs.core.seq.call(null,inst_1224437);
var inst_1224439 = inst_1224438;
var inst_1224440 = null;
var inst_1224441 = (0);
var inst_1224442 = (0);
var state_1224498__$1 = (function (){var statearr_1224526 = state_1224498;
(statearr_1224526[(12)] = inst_1224440);

(statearr_1224526[(13)] = inst_1224439);

(statearr_1224526[(14)] = inst_1224441);

(statearr_1224526[(15)] = inst_1224442);

return statearr_1224526;
})();
var statearr_1224527_1224568 = state_1224498__$1;
(statearr_1224527_1224568[(2)] = null);

(statearr_1224527_1224568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (14))){
var state_1224498__$1 = state_1224498;
var statearr_1224531_1224569 = state_1224498__$1;
(statearr_1224531_1224569[(2)] = null);

(statearr_1224531_1224569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (16))){
var inst_1224453 = (state_1224498[(10)]);
var inst_1224457 = cljs.core.chunk_first.call(null,inst_1224453);
var inst_1224458 = cljs.core.chunk_rest.call(null,inst_1224453);
var inst_1224459 = cljs.core.count.call(null,inst_1224457);
var inst_1224439 = inst_1224458;
var inst_1224440 = inst_1224457;
var inst_1224441 = inst_1224459;
var inst_1224442 = (0);
var state_1224498__$1 = (function (){var statearr_1224532 = state_1224498;
(statearr_1224532[(12)] = inst_1224440);

(statearr_1224532[(13)] = inst_1224439);

(statearr_1224532[(14)] = inst_1224441);

(statearr_1224532[(15)] = inst_1224442);

return statearr_1224532;
})();
var statearr_1224533_1224570 = state_1224498__$1;
(statearr_1224533_1224570[(2)] = null);

(statearr_1224533_1224570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (10))){
var inst_1224440 = (state_1224498[(12)]);
var inst_1224439 = (state_1224498[(13)]);
var inst_1224441 = (state_1224498[(14)]);
var inst_1224442 = (state_1224498[(15)]);
var inst_1224447 = cljs.core._nth.call(null,inst_1224440,inst_1224442);
var inst_1224448 = cljs.core.async.muxch_STAR_.call(null,inst_1224447);
var inst_1224449 = cljs.core.async.close_BANG_.call(null,inst_1224448);
var inst_1224450 = (inst_1224442 + (1));
var tmp1224528 = inst_1224440;
var tmp1224529 = inst_1224439;
var tmp1224530 = inst_1224441;
var inst_1224439__$1 = tmp1224529;
var inst_1224440__$1 = tmp1224528;
var inst_1224441__$1 = tmp1224530;
var inst_1224442__$1 = inst_1224450;
var state_1224498__$1 = (function (){var statearr_1224534 = state_1224498;
(statearr_1224534[(12)] = inst_1224440__$1);

(statearr_1224534[(13)] = inst_1224439__$1);

(statearr_1224534[(17)] = inst_1224449);

(statearr_1224534[(14)] = inst_1224441__$1);

(statearr_1224534[(15)] = inst_1224442__$1);

return statearr_1224534;
})();
var statearr_1224535_1224571 = state_1224498__$1;
(statearr_1224535_1224571[(2)] = null);

(statearr_1224535_1224571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (18))){
var inst_1224468 = (state_1224498[(2)]);
var state_1224498__$1 = state_1224498;
var statearr_1224536_1224572 = state_1224498__$1;
(statearr_1224536_1224572[(2)] = inst_1224468);

(statearr_1224536_1224572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224499 === (8))){
var inst_1224441 = (state_1224498[(14)]);
var inst_1224442 = (state_1224498[(15)]);
var inst_1224444 = (inst_1224442 < inst_1224441);
var inst_1224445 = inst_1224444;
var state_1224498__$1 = state_1224498;
if(cljs.core.truth_(inst_1224445)){
var statearr_1224537_1224573 = state_1224498__$1;
(statearr_1224537_1224573[(1)] = (10));

} else {
var statearr_1224538_1224574 = state_1224498__$1;
(statearr_1224538_1224574[(1)] = (11));

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
});})(c__9199__auto___1224546,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___1224546,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1224542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1224542[(0)] = state_machine__9185__auto__);

(statearr_1224542[(1)] = (1));

return statearr_1224542;
});
var state_machine__9185__auto____1 = (function (state_1224498){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1224498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1224543){if((e1224543 instanceof Object)){
var ex__9188__auto__ = e1224543;
var statearr_1224544_1224575 = state_1224498;
(statearr_1224544_1224575[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1224543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224576 = state_1224498;
state_1224498 = G__1224576;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1224498){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1224498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1224546,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_1224545 = f__9200__auto__.call(null);
(statearr_1224545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1224546);

return statearr_1224545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1224546,mults,ensure_mult,p))
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
var c__9199__auto___1224713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1224683){
var state_val_1224684 = (state_1224683[(1)]);
if((state_val_1224684 === (7))){
var state_1224683__$1 = state_1224683;
var statearr_1224685_1224714 = state_1224683__$1;
(statearr_1224685_1224714[(2)] = null);

(statearr_1224685_1224714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (1))){
var state_1224683__$1 = state_1224683;
var statearr_1224686_1224715 = state_1224683__$1;
(statearr_1224686_1224715[(2)] = null);

(statearr_1224686_1224715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (4))){
var inst_1224647 = (state_1224683[(7)]);
var inst_1224649 = (inst_1224647 < cnt);
var state_1224683__$1 = state_1224683;
if(cljs.core.truth_(inst_1224649)){
var statearr_1224687_1224716 = state_1224683__$1;
(statearr_1224687_1224716[(1)] = (6));

} else {
var statearr_1224688_1224717 = state_1224683__$1;
(statearr_1224688_1224717[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (15))){
var inst_1224679 = (state_1224683[(2)]);
var state_1224683__$1 = state_1224683;
var statearr_1224689_1224718 = state_1224683__$1;
(statearr_1224689_1224718[(2)] = inst_1224679);

(statearr_1224689_1224718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (13))){
var inst_1224672 = cljs.core.async.close_BANG_.call(null,out);
var state_1224683__$1 = state_1224683;
var statearr_1224690_1224719 = state_1224683__$1;
(statearr_1224690_1224719[(2)] = inst_1224672);

(statearr_1224690_1224719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (6))){
var state_1224683__$1 = state_1224683;
var statearr_1224691_1224720 = state_1224683__$1;
(statearr_1224691_1224720[(2)] = null);

(statearr_1224691_1224720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (3))){
var inst_1224681 = (state_1224683[(2)]);
var state_1224683__$1 = state_1224683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1224683__$1,inst_1224681);
} else {
if((state_val_1224684 === (12))){
var inst_1224669 = (state_1224683[(8)]);
var inst_1224669__$1 = (state_1224683[(2)]);
var inst_1224670 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1224669__$1);
var state_1224683__$1 = (function (){var statearr_1224692 = state_1224683;
(statearr_1224692[(8)] = inst_1224669__$1);

return statearr_1224692;
})();
if(cljs.core.truth_(inst_1224670)){
var statearr_1224693_1224721 = state_1224683__$1;
(statearr_1224693_1224721[(1)] = (13));

} else {
var statearr_1224694_1224722 = state_1224683__$1;
(statearr_1224694_1224722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (2))){
var inst_1224646 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1224647 = (0);
var state_1224683__$1 = (function (){var statearr_1224695 = state_1224683;
(statearr_1224695[(9)] = inst_1224646);

(statearr_1224695[(7)] = inst_1224647);

return statearr_1224695;
})();
var statearr_1224696_1224723 = state_1224683__$1;
(statearr_1224696_1224723[(2)] = null);

(statearr_1224696_1224723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (11))){
var inst_1224647 = (state_1224683[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1224683,(10),Object,null,(9));
var inst_1224656 = chs__$1.call(null,inst_1224647);
var inst_1224657 = done.call(null,inst_1224647);
var inst_1224658 = cljs.core.async.take_BANG_.call(null,inst_1224656,inst_1224657);
var state_1224683__$1 = state_1224683;
var statearr_1224697_1224724 = state_1224683__$1;
(statearr_1224697_1224724[(2)] = inst_1224658);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (9))){
var inst_1224647 = (state_1224683[(7)]);
var inst_1224660 = (state_1224683[(2)]);
var inst_1224661 = (inst_1224647 + (1));
var inst_1224647__$1 = inst_1224661;
var state_1224683__$1 = (function (){var statearr_1224698 = state_1224683;
(statearr_1224698[(10)] = inst_1224660);

(statearr_1224698[(7)] = inst_1224647__$1);

return statearr_1224698;
})();
var statearr_1224699_1224725 = state_1224683__$1;
(statearr_1224699_1224725[(2)] = null);

(statearr_1224699_1224725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (5))){
var inst_1224667 = (state_1224683[(2)]);
var state_1224683__$1 = (function (){var statearr_1224700 = state_1224683;
(statearr_1224700[(11)] = inst_1224667);

return statearr_1224700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1224683__$1,(12),dchan);
} else {
if((state_val_1224684 === (14))){
var inst_1224669 = (state_1224683[(8)]);
var inst_1224674 = cljs.core.apply.call(null,f,inst_1224669);
var state_1224683__$1 = state_1224683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1224683__$1,(16),out,inst_1224674);
} else {
if((state_val_1224684 === (16))){
var inst_1224676 = (state_1224683[(2)]);
var state_1224683__$1 = (function (){var statearr_1224701 = state_1224683;
(statearr_1224701[(12)] = inst_1224676);

return statearr_1224701;
})();
var statearr_1224702_1224726 = state_1224683__$1;
(statearr_1224702_1224726[(2)] = null);

(statearr_1224702_1224726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (10))){
var inst_1224651 = (state_1224683[(2)]);
var inst_1224652 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1224683__$1 = (function (){var statearr_1224703 = state_1224683;
(statearr_1224703[(13)] = inst_1224651);

return statearr_1224703;
})();
var statearr_1224704_1224727 = state_1224683__$1;
(statearr_1224704_1224727[(2)] = inst_1224652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224684 === (8))){
var inst_1224665 = (state_1224683[(2)]);
var state_1224683__$1 = state_1224683;
var statearr_1224705_1224728 = state_1224683__$1;
(statearr_1224705_1224728[(2)] = inst_1224665);

(statearr_1224705_1224728[(1)] = (5));


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
});})(c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1224709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1224709[(0)] = state_machine__9185__auto__);

(statearr_1224709[(1)] = (1));

return statearr_1224709;
});
var state_machine__9185__auto____1 = (function (state_1224683){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1224683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1224710){if((e1224710 instanceof Object)){
var ex__9188__auto__ = e1224710;
var statearr_1224711_1224729 = state_1224683;
(statearr_1224711_1224729[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1224710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224730 = state_1224683;
state_1224683 = G__1224730;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1224683){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1224683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1224712 = f__9200__auto__.call(null);
(statearr_1224712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1224713);

return statearr_1224712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1224713,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___1224838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1224838,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1224838,out){
return (function (state_1224814){
var state_val_1224815 = (state_1224814[(1)]);
if((state_val_1224815 === (7))){
var inst_1224794 = (state_1224814[(7)]);
var inst_1224793 = (state_1224814[(8)]);
var inst_1224793__$1 = (state_1224814[(2)]);
var inst_1224794__$1 = cljs.core.nth.call(null,inst_1224793__$1,(0),null);
var inst_1224795 = cljs.core.nth.call(null,inst_1224793__$1,(1),null);
var inst_1224796 = (inst_1224794__$1 == null);
var state_1224814__$1 = (function (){var statearr_1224816 = state_1224814;
(statearr_1224816[(7)] = inst_1224794__$1);

(statearr_1224816[(9)] = inst_1224795);

(statearr_1224816[(8)] = inst_1224793__$1);

return statearr_1224816;
})();
if(cljs.core.truth_(inst_1224796)){
var statearr_1224817_1224839 = state_1224814__$1;
(statearr_1224817_1224839[(1)] = (8));

} else {
var statearr_1224818_1224840 = state_1224814__$1;
(statearr_1224818_1224840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (1))){
var inst_1224785 = cljs.core.vec.call(null,chs);
var inst_1224786 = inst_1224785;
var state_1224814__$1 = (function (){var statearr_1224819 = state_1224814;
(statearr_1224819[(10)] = inst_1224786);

return statearr_1224819;
})();
var statearr_1224820_1224841 = state_1224814__$1;
(statearr_1224820_1224841[(2)] = null);

(statearr_1224820_1224841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (4))){
var inst_1224786 = (state_1224814[(10)]);
var state_1224814__$1 = state_1224814;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1224814__$1,(7),inst_1224786);
} else {
if((state_val_1224815 === (6))){
var inst_1224810 = (state_1224814[(2)]);
var state_1224814__$1 = state_1224814;
var statearr_1224821_1224842 = state_1224814__$1;
(statearr_1224821_1224842[(2)] = inst_1224810);

(statearr_1224821_1224842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (3))){
var inst_1224812 = (state_1224814[(2)]);
var state_1224814__$1 = state_1224814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1224814__$1,inst_1224812);
} else {
if((state_val_1224815 === (2))){
var inst_1224786 = (state_1224814[(10)]);
var inst_1224788 = cljs.core.count.call(null,inst_1224786);
var inst_1224789 = (inst_1224788 > (0));
var state_1224814__$1 = state_1224814;
if(cljs.core.truth_(inst_1224789)){
var statearr_1224823_1224843 = state_1224814__$1;
(statearr_1224823_1224843[(1)] = (4));

} else {
var statearr_1224824_1224844 = state_1224814__$1;
(statearr_1224824_1224844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (11))){
var inst_1224786 = (state_1224814[(10)]);
var inst_1224803 = (state_1224814[(2)]);
var tmp1224822 = inst_1224786;
var inst_1224786__$1 = tmp1224822;
var state_1224814__$1 = (function (){var statearr_1224825 = state_1224814;
(statearr_1224825[(11)] = inst_1224803);

(statearr_1224825[(10)] = inst_1224786__$1);

return statearr_1224825;
})();
var statearr_1224826_1224845 = state_1224814__$1;
(statearr_1224826_1224845[(2)] = null);

(statearr_1224826_1224845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (9))){
var inst_1224794 = (state_1224814[(7)]);
var state_1224814__$1 = state_1224814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1224814__$1,(11),out,inst_1224794);
} else {
if((state_val_1224815 === (5))){
var inst_1224808 = cljs.core.async.close_BANG_.call(null,out);
var state_1224814__$1 = state_1224814;
var statearr_1224827_1224846 = state_1224814__$1;
(statearr_1224827_1224846[(2)] = inst_1224808);

(statearr_1224827_1224846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (10))){
var inst_1224806 = (state_1224814[(2)]);
var state_1224814__$1 = state_1224814;
var statearr_1224828_1224847 = state_1224814__$1;
(statearr_1224828_1224847[(2)] = inst_1224806);

(statearr_1224828_1224847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224815 === (8))){
var inst_1224794 = (state_1224814[(7)]);
var inst_1224795 = (state_1224814[(9)]);
var inst_1224793 = (state_1224814[(8)]);
var inst_1224786 = (state_1224814[(10)]);
var inst_1224798 = (function (){var c = inst_1224795;
var v = inst_1224794;
var vec__1224791 = inst_1224793;
var cs = inst_1224786;
return ((function (c,v,vec__1224791,cs,inst_1224794,inst_1224795,inst_1224793,inst_1224786,state_val_1224815,c__9199__auto___1224838,out){
return (function (p1__1224731_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1224731_SHARP_);
});
;})(c,v,vec__1224791,cs,inst_1224794,inst_1224795,inst_1224793,inst_1224786,state_val_1224815,c__9199__auto___1224838,out))
})();
var inst_1224799 = cljs.core.filterv.call(null,inst_1224798,inst_1224786);
var inst_1224786__$1 = inst_1224799;
var state_1224814__$1 = (function (){var statearr_1224829 = state_1224814;
(statearr_1224829[(10)] = inst_1224786__$1);

return statearr_1224829;
})();
var statearr_1224830_1224848 = state_1224814__$1;
(statearr_1224830_1224848[(2)] = null);

(statearr_1224830_1224848[(1)] = (2));


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
});})(c__9199__auto___1224838,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1224838,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1224834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1224834[(0)] = state_machine__9185__auto__);

(statearr_1224834[(1)] = (1));

return statearr_1224834;
});
var state_machine__9185__auto____1 = (function (state_1224814){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1224814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1224835){if((e1224835 instanceof Object)){
var ex__9188__auto__ = e1224835;
var statearr_1224836_1224849 = state_1224814;
(statearr_1224836_1224849[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1224835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224850 = state_1224814;
state_1224814 = G__1224850;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1224814){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1224814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1224838,out))
})();
var state__9201__auto__ = (function (){var statearr_1224837 = f__9200__auto__.call(null);
(statearr_1224837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1224838);

return statearr_1224837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1224838,out))
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
var c__9199__auto___1224943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1224943,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1224943,out){
return (function (state_1224920){
var state_val_1224921 = (state_1224920[(1)]);
if((state_val_1224921 === (7))){
var inst_1224902 = (state_1224920[(7)]);
var inst_1224902__$1 = (state_1224920[(2)]);
var inst_1224903 = (inst_1224902__$1 == null);
var inst_1224904 = cljs.core.not.call(null,inst_1224903);
var state_1224920__$1 = (function (){var statearr_1224922 = state_1224920;
(statearr_1224922[(7)] = inst_1224902__$1);

return statearr_1224922;
})();
if(inst_1224904){
var statearr_1224923_1224944 = state_1224920__$1;
(statearr_1224923_1224944[(1)] = (8));

} else {
var statearr_1224924_1224945 = state_1224920__$1;
(statearr_1224924_1224945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (1))){
var inst_1224897 = (0);
var state_1224920__$1 = (function (){var statearr_1224925 = state_1224920;
(statearr_1224925[(8)] = inst_1224897);

return statearr_1224925;
})();
var statearr_1224926_1224946 = state_1224920__$1;
(statearr_1224926_1224946[(2)] = null);

(statearr_1224926_1224946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (4))){
var state_1224920__$1 = state_1224920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1224920__$1,(7),ch);
} else {
if((state_val_1224921 === (6))){
var inst_1224915 = (state_1224920[(2)]);
var state_1224920__$1 = state_1224920;
var statearr_1224927_1224947 = state_1224920__$1;
(statearr_1224927_1224947[(2)] = inst_1224915);

(statearr_1224927_1224947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (3))){
var inst_1224917 = (state_1224920[(2)]);
var inst_1224918 = cljs.core.async.close_BANG_.call(null,out);
var state_1224920__$1 = (function (){var statearr_1224928 = state_1224920;
(statearr_1224928[(9)] = inst_1224917);

return statearr_1224928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1224920__$1,inst_1224918);
} else {
if((state_val_1224921 === (2))){
var inst_1224897 = (state_1224920[(8)]);
var inst_1224899 = (inst_1224897 < n);
var state_1224920__$1 = state_1224920;
if(cljs.core.truth_(inst_1224899)){
var statearr_1224929_1224948 = state_1224920__$1;
(statearr_1224929_1224948[(1)] = (4));

} else {
var statearr_1224930_1224949 = state_1224920__$1;
(statearr_1224930_1224949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (11))){
var inst_1224897 = (state_1224920[(8)]);
var inst_1224907 = (state_1224920[(2)]);
var inst_1224908 = (inst_1224897 + (1));
var inst_1224897__$1 = inst_1224908;
var state_1224920__$1 = (function (){var statearr_1224931 = state_1224920;
(statearr_1224931[(10)] = inst_1224907);

(statearr_1224931[(8)] = inst_1224897__$1);

return statearr_1224931;
})();
var statearr_1224932_1224950 = state_1224920__$1;
(statearr_1224932_1224950[(2)] = null);

(statearr_1224932_1224950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (9))){
var state_1224920__$1 = state_1224920;
var statearr_1224933_1224951 = state_1224920__$1;
(statearr_1224933_1224951[(2)] = null);

(statearr_1224933_1224951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (5))){
var state_1224920__$1 = state_1224920;
var statearr_1224934_1224952 = state_1224920__$1;
(statearr_1224934_1224952[(2)] = null);

(statearr_1224934_1224952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (10))){
var inst_1224912 = (state_1224920[(2)]);
var state_1224920__$1 = state_1224920;
var statearr_1224935_1224953 = state_1224920__$1;
(statearr_1224935_1224953[(2)] = inst_1224912);

(statearr_1224935_1224953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1224921 === (8))){
var inst_1224902 = (state_1224920[(7)]);
var state_1224920__$1 = state_1224920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1224920__$1,(11),out,inst_1224902);
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
});})(c__9199__auto___1224943,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1224943,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1224939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1224939[(0)] = state_machine__9185__auto__);

(statearr_1224939[(1)] = (1));

return statearr_1224939;
});
var state_machine__9185__auto____1 = (function (state_1224920){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1224920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1224940){if((e1224940 instanceof Object)){
var ex__9188__auto__ = e1224940;
var statearr_1224941_1224954 = state_1224920;
(statearr_1224941_1224954[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1224920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1224940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1224955 = state_1224920;
state_1224920 = G__1224955;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1224920){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1224920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1224943,out))
})();
var state__9201__auto__ = (function (){var statearr_1224942 = f__9200__auto__.call(null);
(statearr_1224942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1224943);

return statearr_1224942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1224943,out))
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
if(typeof cljs.core.async.t1224963 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224963 = (function (ch,f,map_LT_,meta1224964){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta1224964 = meta1224964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t1224966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224966 = (function (fn1,_,meta1224964,map_LT_,f,ch,meta1224967){
this.fn1 = fn1;
this._ = _;
this.meta1224964 = meta1224964;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1224967 = meta1224967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224966.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1224966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t1224966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1224956_SHARP_){
return f1.call(null,(((p1__1224956_SHARP_ == null))?null:self__.f.call(null,p1__1224956_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t1224966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1224968){
var self__ = this;
var _1224968__$1 = this;
return self__.meta1224967;
});})(___$1))
;

cljs.core.async.t1224966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1224968,meta1224967__$1){
var self__ = this;
var _1224968__$1 = this;
return (new cljs.core.async.t1224966(self__.fn1,self__._,self__.meta1224964,self__.map_LT_,self__.f,self__.ch,meta1224967__$1));
});})(___$1))
;

cljs.core.async.t1224966.cljs$lang$type = true;

cljs.core.async.t1224966.cljs$lang$ctorStr = "cljs.core.async/t1224966";

cljs.core.async.t1224966.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224966");
});})(___$1))
;

cljs.core.async.__GT_t1224966 = ((function (___$1){
return (function __GT_t1224966(fn1__$1,___$2,meta1224964__$1,map_LT___$1,f__$1,ch__$1,meta1224967){
return (new cljs.core.async.t1224966(fn1__$1,___$2,meta1224964__$1,map_LT___$1,f__$1,ch__$1,meta1224967));
});})(___$1))
;

}

return (new cljs.core.async.t1224966(fn1,___$1,self__.meta1224964,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1224963.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1224963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1224965){
var self__ = this;
var _1224965__$1 = this;
return self__.meta1224964;
});

cljs.core.async.t1224963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1224965,meta1224964__$1){
var self__ = this;
var _1224965__$1 = this;
return (new cljs.core.async.t1224963(self__.ch,self__.f,self__.map_LT_,meta1224964__$1));
});

cljs.core.async.t1224963.cljs$lang$type = true;

cljs.core.async.t1224963.cljs$lang$ctorStr = "cljs.core.async/t1224963";

cljs.core.async.t1224963.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224963");
});

cljs.core.async.__GT_t1224963 = (function __GT_t1224963(ch__$1,f__$1,map_LT___$1,meta1224964){
return (new cljs.core.async.t1224963(ch__$1,f__$1,map_LT___$1,meta1224964));
});

}

return (new cljs.core.async.t1224963(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t1224972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224972 = (function (ch,f,map_GT_,meta1224973){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta1224973 = meta1224973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1224972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1224972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1224974){
var self__ = this;
var _1224974__$1 = this;
return self__.meta1224973;
});

cljs.core.async.t1224972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1224974,meta1224973__$1){
var self__ = this;
var _1224974__$1 = this;
return (new cljs.core.async.t1224972(self__.ch,self__.f,self__.map_GT_,meta1224973__$1));
});

cljs.core.async.t1224972.cljs$lang$type = true;

cljs.core.async.t1224972.cljs$lang$ctorStr = "cljs.core.async/t1224972";

cljs.core.async.t1224972.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224972");
});

cljs.core.async.__GT_t1224972 = (function __GT_t1224972(ch__$1,f__$1,map_GT___$1,meta1224973){
return (new cljs.core.async.t1224972(ch__$1,f__$1,map_GT___$1,meta1224973));
});

}

return (new cljs.core.async.t1224972(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t1224978 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1224978 = (function (ch,p,filter_GT_,meta1224979){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta1224979 = meta1224979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1224978.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1224978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1224980){
var self__ = this;
var _1224980__$1 = this;
return self__.meta1224979;
});

cljs.core.async.t1224978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1224980,meta1224979__$1){
var self__ = this;
var _1224980__$1 = this;
return (new cljs.core.async.t1224978(self__.ch,self__.p,self__.filter_GT_,meta1224979__$1));
});

cljs.core.async.t1224978.cljs$lang$type = true;

cljs.core.async.t1224978.cljs$lang$ctorStr = "cljs.core.async/t1224978";

cljs.core.async.t1224978.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1224978");
});

cljs.core.async.__GT_t1224978 = (function __GT_t1224978(ch__$1,p__$1,filter_GT___$1,meta1224979){
return (new cljs.core.async.t1224978(ch__$1,p__$1,filter_GT___$1,meta1224979));
});

}

return (new cljs.core.async.t1224978(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1225063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1225063,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1225063,out){
return (function (state_1225042){
var state_val_1225043 = (state_1225042[(1)]);
if((state_val_1225043 === (7))){
var inst_1225038 = (state_1225042[(2)]);
var state_1225042__$1 = state_1225042;
var statearr_1225044_1225064 = state_1225042__$1;
(statearr_1225044_1225064[(2)] = inst_1225038);

(statearr_1225044_1225064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (1))){
var state_1225042__$1 = state_1225042;
var statearr_1225045_1225065 = state_1225042__$1;
(statearr_1225045_1225065[(2)] = null);

(statearr_1225045_1225065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (4))){
var inst_1225024 = (state_1225042[(7)]);
var inst_1225024__$1 = (state_1225042[(2)]);
var inst_1225025 = (inst_1225024__$1 == null);
var state_1225042__$1 = (function (){var statearr_1225046 = state_1225042;
(statearr_1225046[(7)] = inst_1225024__$1);

return statearr_1225046;
})();
if(cljs.core.truth_(inst_1225025)){
var statearr_1225047_1225066 = state_1225042__$1;
(statearr_1225047_1225066[(1)] = (5));

} else {
var statearr_1225048_1225067 = state_1225042__$1;
(statearr_1225048_1225067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (6))){
var inst_1225024 = (state_1225042[(7)]);
var inst_1225029 = p.call(null,inst_1225024);
var state_1225042__$1 = state_1225042;
if(cljs.core.truth_(inst_1225029)){
var statearr_1225049_1225068 = state_1225042__$1;
(statearr_1225049_1225068[(1)] = (8));

} else {
var statearr_1225050_1225069 = state_1225042__$1;
(statearr_1225050_1225069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (3))){
var inst_1225040 = (state_1225042[(2)]);
var state_1225042__$1 = state_1225042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1225042__$1,inst_1225040);
} else {
if((state_val_1225043 === (2))){
var state_1225042__$1 = state_1225042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1225042__$1,(4),ch);
} else {
if((state_val_1225043 === (11))){
var inst_1225032 = (state_1225042[(2)]);
var state_1225042__$1 = state_1225042;
var statearr_1225051_1225070 = state_1225042__$1;
(statearr_1225051_1225070[(2)] = inst_1225032);

(statearr_1225051_1225070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (9))){
var state_1225042__$1 = state_1225042;
var statearr_1225052_1225071 = state_1225042__$1;
(statearr_1225052_1225071[(2)] = null);

(statearr_1225052_1225071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (5))){
var inst_1225027 = cljs.core.async.close_BANG_.call(null,out);
var state_1225042__$1 = state_1225042;
var statearr_1225053_1225072 = state_1225042__$1;
(statearr_1225053_1225072[(2)] = inst_1225027);

(statearr_1225053_1225072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (10))){
var inst_1225035 = (state_1225042[(2)]);
var state_1225042__$1 = (function (){var statearr_1225054 = state_1225042;
(statearr_1225054[(8)] = inst_1225035);

return statearr_1225054;
})();
var statearr_1225055_1225073 = state_1225042__$1;
(statearr_1225055_1225073[(2)] = null);

(statearr_1225055_1225073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225043 === (8))){
var inst_1225024 = (state_1225042[(7)]);
var state_1225042__$1 = state_1225042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225042__$1,(11),out,inst_1225024);
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
});})(c__9199__auto___1225063,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1225063,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1225059 = [null,null,null,null,null,null,null,null,null];
(statearr_1225059[(0)] = state_machine__9185__auto__);

(statearr_1225059[(1)] = (1));

return statearr_1225059;
});
var state_machine__9185__auto____1 = (function (state_1225042){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1225042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1225060){if((e1225060 instanceof Object)){
var ex__9188__auto__ = e1225060;
var statearr_1225061_1225074 = state_1225042;
(statearr_1225061_1225074[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1225042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1225060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1225075 = state_1225042;
state_1225042 = G__1225075;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1225042){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1225042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1225063,out))
})();
var state__9201__auto__ = (function (){var statearr_1225062 = f__9200__auto__.call(null);
(statearr_1225062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1225063);

return statearr_1225062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1225063,out))
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
return (function (state_1225241){
var state_val_1225242 = (state_1225241[(1)]);
if((state_val_1225242 === (7))){
var inst_1225237 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
var statearr_1225243_1225284 = state_1225241__$1;
(statearr_1225243_1225284[(2)] = inst_1225237);

(statearr_1225243_1225284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (20))){
var inst_1225207 = (state_1225241[(7)]);
var inst_1225218 = (state_1225241[(2)]);
var inst_1225219 = cljs.core.next.call(null,inst_1225207);
var inst_1225193 = inst_1225219;
var inst_1225194 = null;
var inst_1225195 = (0);
var inst_1225196 = (0);
var state_1225241__$1 = (function (){var statearr_1225244 = state_1225241;
(statearr_1225244[(8)] = inst_1225193);

(statearr_1225244[(9)] = inst_1225195);

(statearr_1225244[(10)] = inst_1225218);

(statearr_1225244[(11)] = inst_1225196);

(statearr_1225244[(12)] = inst_1225194);

return statearr_1225244;
})();
var statearr_1225245_1225285 = state_1225241__$1;
(statearr_1225245_1225285[(2)] = null);

(statearr_1225245_1225285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (1))){
var state_1225241__$1 = state_1225241;
var statearr_1225246_1225286 = state_1225241__$1;
(statearr_1225246_1225286[(2)] = null);

(statearr_1225246_1225286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (4))){
var inst_1225182 = (state_1225241[(13)]);
var inst_1225182__$1 = (state_1225241[(2)]);
var inst_1225183 = (inst_1225182__$1 == null);
var state_1225241__$1 = (function (){var statearr_1225247 = state_1225241;
(statearr_1225247[(13)] = inst_1225182__$1);

return statearr_1225247;
})();
if(cljs.core.truth_(inst_1225183)){
var statearr_1225248_1225287 = state_1225241__$1;
(statearr_1225248_1225287[(1)] = (5));

} else {
var statearr_1225249_1225288 = state_1225241__$1;
(statearr_1225249_1225288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (15))){
var state_1225241__$1 = state_1225241;
var statearr_1225253_1225289 = state_1225241__$1;
(statearr_1225253_1225289[(2)] = null);

(statearr_1225253_1225289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (21))){
var state_1225241__$1 = state_1225241;
var statearr_1225254_1225290 = state_1225241__$1;
(statearr_1225254_1225290[(2)] = null);

(statearr_1225254_1225290[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (13))){
var inst_1225193 = (state_1225241[(8)]);
var inst_1225195 = (state_1225241[(9)]);
var inst_1225196 = (state_1225241[(11)]);
var inst_1225194 = (state_1225241[(12)]);
var inst_1225203 = (state_1225241[(2)]);
var inst_1225204 = (inst_1225196 + (1));
var tmp1225250 = inst_1225193;
var tmp1225251 = inst_1225195;
var tmp1225252 = inst_1225194;
var inst_1225193__$1 = tmp1225250;
var inst_1225194__$1 = tmp1225252;
var inst_1225195__$1 = tmp1225251;
var inst_1225196__$1 = inst_1225204;
var state_1225241__$1 = (function (){var statearr_1225255 = state_1225241;
(statearr_1225255[(8)] = inst_1225193__$1);

(statearr_1225255[(9)] = inst_1225195__$1);

(statearr_1225255[(14)] = inst_1225203);

(statearr_1225255[(11)] = inst_1225196__$1);

(statearr_1225255[(12)] = inst_1225194__$1);

return statearr_1225255;
})();
var statearr_1225256_1225291 = state_1225241__$1;
(statearr_1225256_1225291[(2)] = null);

(statearr_1225256_1225291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (22))){
var state_1225241__$1 = state_1225241;
var statearr_1225257_1225292 = state_1225241__$1;
(statearr_1225257_1225292[(2)] = null);

(statearr_1225257_1225292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (6))){
var inst_1225182 = (state_1225241[(13)]);
var inst_1225191 = f.call(null,inst_1225182);
var inst_1225192 = cljs.core.seq.call(null,inst_1225191);
var inst_1225193 = inst_1225192;
var inst_1225194 = null;
var inst_1225195 = (0);
var inst_1225196 = (0);
var state_1225241__$1 = (function (){var statearr_1225258 = state_1225241;
(statearr_1225258[(8)] = inst_1225193);

(statearr_1225258[(9)] = inst_1225195);

(statearr_1225258[(11)] = inst_1225196);

(statearr_1225258[(12)] = inst_1225194);

return statearr_1225258;
})();
var statearr_1225259_1225293 = state_1225241__$1;
(statearr_1225259_1225293[(2)] = null);

(statearr_1225259_1225293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (17))){
var inst_1225207 = (state_1225241[(7)]);
var inst_1225211 = cljs.core.chunk_first.call(null,inst_1225207);
var inst_1225212 = cljs.core.chunk_rest.call(null,inst_1225207);
var inst_1225213 = cljs.core.count.call(null,inst_1225211);
var inst_1225193 = inst_1225212;
var inst_1225194 = inst_1225211;
var inst_1225195 = inst_1225213;
var inst_1225196 = (0);
var state_1225241__$1 = (function (){var statearr_1225260 = state_1225241;
(statearr_1225260[(8)] = inst_1225193);

(statearr_1225260[(9)] = inst_1225195);

(statearr_1225260[(11)] = inst_1225196);

(statearr_1225260[(12)] = inst_1225194);

return statearr_1225260;
})();
var statearr_1225261_1225294 = state_1225241__$1;
(statearr_1225261_1225294[(2)] = null);

(statearr_1225261_1225294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (3))){
var inst_1225239 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1225241__$1,inst_1225239);
} else {
if((state_val_1225242 === (12))){
var inst_1225227 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
var statearr_1225262_1225295 = state_1225241__$1;
(statearr_1225262_1225295[(2)] = inst_1225227);

(statearr_1225262_1225295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (2))){
var state_1225241__$1 = state_1225241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1225241__$1,(4),in$);
} else {
if((state_val_1225242 === (23))){
var inst_1225235 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
var statearr_1225263_1225296 = state_1225241__$1;
(statearr_1225263_1225296[(2)] = inst_1225235);

(statearr_1225263_1225296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (19))){
var inst_1225222 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
var statearr_1225264_1225297 = state_1225241__$1;
(statearr_1225264_1225297[(2)] = inst_1225222);

(statearr_1225264_1225297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (11))){
var inst_1225193 = (state_1225241[(8)]);
var inst_1225207 = (state_1225241[(7)]);
var inst_1225207__$1 = cljs.core.seq.call(null,inst_1225193);
var state_1225241__$1 = (function (){var statearr_1225265 = state_1225241;
(statearr_1225265[(7)] = inst_1225207__$1);

return statearr_1225265;
})();
if(inst_1225207__$1){
var statearr_1225266_1225298 = state_1225241__$1;
(statearr_1225266_1225298[(1)] = (14));

} else {
var statearr_1225267_1225299 = state_1225241__$1;
(statearr_1225267_1225299[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (9))){
var inst_1225229 = (state_1225241[(2)]);
var inst_1225230 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1225241__$1 = (function (){var statearr_1225268 = state_1225241;
(statearr_1225268[(15)] = inst_1225229);

return statearr_1225268;
})();
if(cljs.core.truth_(inst_1225230)){
var statearr_1225269_1225300 = state_1225241__$1;
(statearr_1225269_1225300[(1)] = (21));

} else {
var statearr_1225270_1225301 = state_1225241__$1;
(statearr_1225270_1225301[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (5))){
var inst_1225185 = cljs.core.async.close_BANG_.call(null,out);
var state_1225241__$1 = state_1225241;
var statearr_1225271_1225302 = state_1225241__$1;
(statearr_1225271_1225302[(2)] = inst_1225185);

(statearr_1225271_1225302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (14))){
var inst_1225207 = (state_1225241[(7)]);
var inst_1225209 = cljs.core.chunked_seq_QMARK_.call(null,inst_1225207);
var state_1225241__$1 = state_1225241;
if(inst_1225209){
var statearr_1225272_1225303 = state_1225241__$1;
(statearr_1225272_1225303[(1)] = (17));

} else {
var statearr_1225273_1225304 = state_1225241__$1;
(statearr_1225273_1225304[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (16))){
var inst_1225225 = (state_1225241[(2)]);
var state_1225241__$1 = state_1225241;
var statearr_1225274_1225305 = state_1225241__$1;
(statearr_1225274_1225305[(2)] = inst_1225225);

(statearr_1225274_1225305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225242 === (10))){
var inst_1225196 = (state_1225241[(11)]);
var inst_1225194 = (state_1225241[(12)]);
var inst_1225201 = cljs.core._nth.call(null,inst_1225194,inst_1225196);
var state_1225241__$1 = state_1225241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225241__$1,(13),out,inst_1225201);
} else {
if((state_val_1225242 === (18))){
var inst_1225207 = (state_1225241[(7)]);
var inst_1225216 = cljs.core.first.call(null,inst_1225207);
var state_1225241__$1 = state_1225241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225241__$1,(20),out,inst_1225216);
} else {
if((state_val_1225242 === (8))){
var inst_1225195 = (state_1225241[(9)]);
var inst_1225196 = (state_1225241[(11)]);
var inst_1225198 = (inst_1225196 < inst_1225195);
var inst_1225199 = inst_1225198;
var state_1225241__$1 = state_1225241;
if(cljs.core.truth_(inst_1225199)){
var statearr_1225275_1225306 = state_1225241__$1;
(statearr_1225275_1225306[(1)] = (10));

} else {
var statearr_1225276_1225307 = state_1225241__$1;
(statearr_1225276_1225307[(1)] = (11));

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
var statearr_1225280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1225280[(0)] = state_machine__9185__auto__);

(statearr_1225280[(1)] = (1));

return statearr_1225280;
});
var state_machine__9185__auto____1 = (function (state_1225241){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1225241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1225281){if((e1225281 instanceof Object)){
var ex__9188__auto__ = e1225281;
var statearr_1225282_1225308 = state_1225241;
(statearr_1225282_1225308[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1225241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1225281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1225309 = state_1225241;
state_1225241 = G__1225309;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1225241){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1225241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1225283 = f__9200__auto__.call(null);
(statearr_1225283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1225283;
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
var c__9199__auto___1225406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1225406,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1225406,out){
return (function (state_1225381){
var state_val_1225382 = (state_1225381[(1)]);
if((state_val_1225382 === (7))){
var inst_1225376 = (state_1225381[(2)]);
var state_1225381__$1 = state_1225381;
var statearr_1225383_1225407 = state_1225381__$1;
(statearr_1225383_1225407[(2)] = inst_1225376);

(statearr_1225383_1225407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (1))){
var inst_1225358 = null;
var state_1225381__$1 = (function (){var statearr_1225384 = state_1225381;
(statearr_1225384[(7)] = inst_1225358);

return statearr_1225384;
})();
var statearr_1225385_1225408 = state_1225381__$1;
(statearr_1225385_1225408[(2)] = null);

(statearr_1225385_1225408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (4))){
var inst_1225361 = (state_1225381[(8)]);
var inst_1225361__$1 = (state_1225381[(2)]);
var inst_1225362 = (inst_1225361__$1 == null);
var inst_1225363 = cljs.core.not.call(null,inst_1225362);
var state_1225381__$1 = (function (){var statearr_1225386 = state_1225381;
(statearr_1225386[(8)] = inst_1225361__$1);

return statearr_1225386;
})();
if(inst_1225363){
var statearr_1225387_1225409 = state_1225381__$1;
(statearr_1225387_1225409[(1)] = (5));

} else {
var statearr_1225388_1225410 = state_1225381__$1;
(statearr_1225388_1225410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (6))){
var state_1225381__$1 = state_1225381;
var statearr_1225389_1225411 = state_1225381__$1;
(statearr_1225389_1225411[(2)] = null);

(statearr_1225389_1225411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (3))){
var inst_1225378 = (state_1225381[(2)]);
var inst_1225379 = cljs.core.async.close_BANG_.call(null,out);
var state_1225381__$1 = (function (){var statearr_1225390 = state_1225381;
(statearr_1225390[(9)] = inst_1225378);

return statearr_1225390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1225381__$1,inst_1225379);
} else {
if((state_val_1225382 === (2))){
var state_1225381__$1 = state_1225381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1225381__$1,(4),ch);
} else {
if((state_val_1225382 === (11))){
var inst_1225361 = (state_1225381[(8)]);
var inst_1225370 = (state_1225381[(2)]);
var inst_1225358 = inst_1225361;
var state_1225381__$1 = (function (){var statearr_1225391 = state_1225381;
(statearr_1225391[(10)] = inst_1225370);

(statearr_1225391[(7)] = inst_1225358);

return statearr_1225391;
})();
var statearr_1225392_1225412 = state_1225381__$1;
(statearr_1225392_1225412[(2)] = null);

(statearr_1225392_1225412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (9))){
var inst_1225361 = (state_1225381[(8)]);
var state_1225381__$1 = state_1225381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225381__$1,(11),out,inst_1225361);
} else {
if((state_val_1225382 === (5))){
var inst_1225358 = (state_1225381[(7)]);
var inst_1225361 = (state_1225381[(8)]);
var inst_1225365 = cljs.core._EQ_.call(null,inst_1225361,inst_1225358);
var state_1225381__$1 = state_1225381;
if(inst_1225365){
var statearr_1225394_1225413 = state_1225381__$1;
(statearr_1225394_1225413[(1)] = (8));

} else {
var statearr_1225395_1225414 = state_1225381__$1;
(statearr_1225395_1225414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (10))){
var inst_1225373 = (state_1225381[(2)]);
var state_1225381__$1 = state_1225381;
var statearr_1225396_1225415 = state_1225381__$1;
(statearr_1225396_1225415[(2)] = inst_1225373);

(statearr_1225396_1225415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225382 === (8))){
var inst_1225358 = (state_1225381[(7)]);
var tmp1225393 = inst_1225358;
var inst_1225358__$1 = tmp1225393;
var state_1225381__$1 = (function (){var statearr_1225397 = state_1225381;
(statearr_1225397[(7)] = inst_1225358__$1);

return statearr_1225397;
})();
var statearr_1225398_1225416 = state_1225381__$1;
(statearr_1225398_1225416[(2)] = null);

(statearr_1225398_1225416[(1)] = (2));


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
});})(c__9199__auto___1225406,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1225406,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1225402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1225402[(0)] = state_machine__9185__auto__);

(statearr_1225402[(1)] = (1));

return statearr_1225402;
});
var state_machine__9185__auto____1 = (function (state_1225381){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1225381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1225403){if((e1225403 instanceof Object)){
var ex__9188__auto__ = e1225403;
var statearr_1225404_1225417 = state_1225381;
(statearr_1225404_1225417[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1225381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1225403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1225418 = state_1225381;
state_1225381 = G__1225418;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1225381){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1225381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1225406,out))
})();
var state__9201__auto__ = (function (){var statearr_1225405 = f__9200__auto__.call(null);
(statearr_1225405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1225406);

return statearr_1225405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1225406,out))
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
var c__9199__auto___1225553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1225553,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1225553,out){
return (function (state_1225523){
var state_val_1225524 = (state_1225523[(1)]);
if((state_val_1225524 === (7))){
var inst_1225519 = (state_1225523[(2)]);
var state_1225523__$1 = state_1225523;
var statearr_1225525_1225554 = state_1225523__$1;
(statearr_1225525_1225554[(2)] = inst_1225519);

(statearr_1225525_1225554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (1))){
var inst_1225486 = (new Array(n));
var inst_1225487 = inst_1225486;
var inst_1225488 = (0);
var state_1225523__$1 = (function (){var statearr_1225526 = state_1225523;
(statearr_1225526[(7)] = inst_1225487);

(statearr_1225526[(8)] = inst_1225488);

return statearr_1225526;
})();
var statearr_1225527_1225555 = state_1225523__$1;
(statearr_1225527_1225555[(2)] = null);

(statearr_1225527_1225555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (4))){
var inst_1225491 = (state_1225523[(9)]);
var inst_1225491__$1 = (state_1225523[(2)]);
var inst_1225492 = (inst_1225491__$1 == null);
var inst_1225493 = cljs.core.not.call(null,inst_1225492);
var state_1225523__$1 = (function (){var statearr_1225528 = state_1225523;
(statearr_1225528[(9)] = inst_1225491__$1);

return statearr_1225528;
})();
if(inst_1225493){
var statearr_1225529_1225556 = state_1225523__$1;
(statearr_1225529_1225556[(1)] = (5));

} else {
var statearr_1225530_1225557 = state_1225523__$1;
(statearr_1225530_1225557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (15))){
var inst_1225513 = (state_1225523[(2)]);
var state_1225523__$1 = state_1225523;
var statearr_1225531_1225558 = state_1225523__$1;
(statearr_1225531_1225558[(2)] = inst_1225513);

(statearr_1225531_1225558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (13))){
var state_1225523__$1 = state_1225523;
var statearr_1225532_1225559 = state_1225523__$1;
(statearr_1225532_1225559[(2)] = null);

(statearr_1225532_1225559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (6))){
var inst_1225488 = (state_1225523[(8)]);
var inst_1225509 = (inst_1225488 > (0));
var state_1225523__$1 = state_1225523;
if(cljs.core.truth_(inst_1225509)){
var statearr_1225533_1225560 = state_1225523__$1;
(statearr_1225533_1225560[(1)] = (12));

} else {
var statearr_1225534_1225561 = state_1225523__$1;
(statearr_1225534_1225561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (3))){
var inst_1225521 = (state_1225523[(2)]);
var state_1225523__$1 = state_1225523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1225523__$1,inst_1225521);
} else {
if((state_val_1225524 === (12))){
var inst_1225487 = (state_1225523[(7)]);
var inst_1225511 = cljs.core.vec.call(null,inst_1225487);
var state_1225523__$1 = state_1225523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225523__$1,(15),out,inst_1225511);
} else {
if((state_val_1225524 === (2))){
var state_1225523__$1 = state_1225523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1225523__$1,(4),ch);
} else {
if((state_val_1225524 === (11))){
var inst_1225503 = (state_1225523[(2)]);
var inst_1225504 = (new Array(n));
var inst_1225487 = inst_1225504;
var inst_1225488 = (0);
var state_1225523__$1 = (function (){var statearr_1225535 = state_1225523;
(statearr_1225535[(7)] = inst_1225487);

(statearr_1225535[(10)] = inst_1225503);

(statearr_1225535[(8)] = inst_1225488);

return statearr_1225535;
})();
var statearr_1225536_1225562 = state_1225523__$1;
(statearr_1225536_1225562[(2)] = null);

(statearr_1225536_1225562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (9))){
var inst_1225487 = (state_1225523[(7)]);
var inst_1225501 = cljs.core.vec.call(null,inst_1225487);
var state_1225523__$1 = state_1225523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225523__$1,(11),out,inst_1225501);
} else {
if((state_val_1225524 === (5))){
var inst_1225491 = (state_1225523[(9)]);
var inst_1225487 = (state_1225523[(7)]);
var inst_1225488 = (state_1225523[(8)]);
var inst_1225496 = (state_1225523[(11)]);
var inst_1225495 = (inst_1225487[inst_1225488] = inst_1225491);
var inst_1225496__$1 = (inst_1225488 + (1));
var inst_1225497 = (inst_1225496__$1 < n);
var state_1225523__$1 = (function (){var statearr_1225537 = state_1225523;
(statearr_1225537[(12)] = inst_1225495);

(statearr_1225537[(11)] = inst_1225496__$1);

return statearr_1225537;
})();
if(cljs.core.truth_(inst_1225497)){
var statearr_1225538_1225563 = state_1225523__$1;
(statearr_1225538_1225563[(1)] = (8));

} else {
var statearr_1225539_1225564 = state_1225523__$1;
(statearr_1225539_1225564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (14))){
var inst_1225516 = (state_1225523[(2)]);
var inst_1225517 = cljs.core.async.close_BANG_.call(null,out);
var state_1225523__$1 = (function (){var statearr_1225541 = state_1225523;
(statearr_1225541[(13)] = inst_1225516);

return statearr_1225541;
})();
var statearr_1225542_1225565 = state_1225523__$1;
(statearr_1225542_1225565[(2)] = inst_1225517);

(statearr_1225542_1225565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (10))){
var inst_1225507 = (state_1225523[(2)]);
var state_1225523__$1 = state_1225523;
var statearr_1225543_1225566 = state_1225523__$1;
(statearr_1225543_1225566[(2)] = inst_1225507);

(statearr_1225543_1225566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225524 === (8))){
var inst_1225487 = (state_1225523[(7)]);
var inst_1225496 = (state_1225523[(11)]);
var tmp1225540 = inst_1225487;
var inst_1225487__$1 = tmp1225540;
var inst_1225488 = inst_1225496;
var state_1225523__$1 = (function (){var statearr_1225544 = state_1225523;
(statearr_1225544[(7)] = inst_1225487__$1);

(statearr_1225544[(8)] = inst_1225488);

return statearr_1225544;
})();
var statearr_1225545_1225567 = state_1225523__$1;
(statearr_1225545_1225567[(2)] = null);

(statearr_1225545_1225567[(1)] = (2));


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
});})(c__9199__auto___1225553,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1225553,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1225549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1225549[(0)] = state_machine__9185__auto__);

(statearr_1225549[(1)] = (1));

return statearr_1225549;
});
var state_machine__9185__auto____1 = (function (state_1225523){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1225523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1225550){if((e1225550 instanceof Object)){
var ex__9188__auto__ = e1225550;
var statearr_1225551_1225568 = state_1225523;
(statearr_1225551_1225568[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1225523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1225550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1225569 = state_1225523;
state_1225523 = G__1225569;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1225523){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1225523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1225553,out))
})();
var state__9201__auto__ = (function (){var statearr_1225552 = f__9200__auto__.call(null);
(statearr_1225552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1225553);

return statearr_1225552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1225553,out))
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
var c__9199__auto___1225712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1225712,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1225712,out){
return (function (state_1225682){
var state_val_1225683 = (state_1225682[(1)]);
if((state_val_1225683 === (7))){
var inst_1225678 = (state_1225682[(2)]);
var state_1225682__$1 = state_1225682;
var statearr_1225684_1225713 = state_1225682__$1;
(statearr_1225684_1225713[(2)] = inst_1225678);

(statearr_1225684_1225713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (1))){
var inst_1225641 = [];
var inst_1225642 = inst_1225641;
var inst_1225643 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1225682__$1 = (function (){var statearr_1225685 = state_1225682;
(statearr_1225685[(7)] = inst_1225642);

(statearr_1225685[(8)] = inst_1225643);

return statearr_1225685;
})();
var statearr_1225686_1225714 = state_1225682__$1;
(statearr_1225686_1225714[(2)] = null);

(statearr_1225686_1225714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (4))){
var inst_1225646 = (state_1225682[(9)]);
var inst_1225646__$1 = (state_1225682[(2)]);
var inst_1225647 = (inst_1225646__$1 == null);
var inst_1225648 = cljs.core.not.call(null,inst_1225647);
var state_1225682__$1 = (function (){var statearr_1225687 = state_1225682;
(statearr_1225687[(9)] = inst_1225646__$1);

return statearr_1225687;
})();
if(inst_1225648){
var statearr_1225688_1225715 = state_1225682__$1;
(statearr_1225688_1225715[(1)] = (5));

} else {
var statearr_1225689_1225716 = state_1225682__$1;
(statearr_1225689_1225716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (15))){
var inst_1225672 = (state_1225682[(2)]);
var state_1225682__$1 = state_1225682;
var statearr_1225690_1225717 = state_1225682__$1;
(statearr_1225690_1225717[(2)] = inst_1225672);

(statearr_1225690_1225717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (13))){
var state_1225682__$1 = state_1225682;
var statearr_1225691_1225718 = state_1225682__$1;
(statearr_1225691_1225718[(2)] = null);

(statearr_1225691_1225718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (6))){
var inst_1225642 = (state_1225682[(7)]);
var inst_1225667 = inst_1225642.length;
var inst_1225668 = (inst_1225667 > (0));
var state_1225682__$1 = state_1225682;
if(cljs.core.truth_(inst_1225668)){
var statearr_1225692_1225719 = state_1225682__$1;
(statearr_1225692_1225719[(1)] = (12));

} else {
var statearr_1225693_1225720 = state_1225682__$1;
(statearr_1225693_1225720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (3))){
var inst_1225680 = (state_1225682[(2)]);
var state_1225682__$1 = state_1225682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1225682__$1,inst_1225680);
} else {
if((state_val_1225683 === (12))){
var inst_1225642 = (state_1225682[(7)]);
var inst_1225670 = cljs.core.vec.call(null,inst_1225642);
var state_1225682__$1 = state_1225682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225682__$1,(15),out,inst_1225670);
} else {
if((state_val_1225683 === (2))){
var state_1225682__$1 = state_1225682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1225682__$1,(4),ch);
} else {
if((state_val_1225683 === (11))){
var inst_1225650 = (state_1225682[(10)]);
var inst_1225646 = (state_1225682[(9)]);
var inst_1225660 = (state_1225682[(2)]);
var inst_1225661 = [];
var inst_1225662 = inst_1225661.push(inst_1225646);
var inst_1225642 = inst_1225661;
var inst_1225643 = inst_1225650;
var state_1225682__$1 = (function (){var statearr_1225694 = state_1225682;
(statearr_1225694[(7)] = inst_1225642);

(statearr_1225694[(11)] = inst_1225662);

(statearr_1225694[(12)] = inst_1225660);

(statearr_1225694[(8)] = inst_1225643);

return statearr_1225694;
})();
var statearr_1225695_1225721 = state_1225682__$1;
(statearr_1225695_1225721[(2)] = null);

(statearr_1225695_1225721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (9))){
var inst_1225642 = (state_1225682[(7)]);
var inst_1225658 = cljs.core.vec.call(null,inst_1225642);
var state_1225682__$1 = state_1225682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1225682__$1,(11),out,inst_1225658);
} else {
if((state_val_1225683 === (5))){
var inst_1225650 = (state_1225682[(10)]);
var inst_1225646 = (state_1225682[(9)]);
var inst_1225643 = (state_1225682[(8)]);
var inst_1225650__$1 = f.call(null,inst_1225646);
var inst_1225651 = cljs.core._EQ_.call(null,inst_1225650__$1,inst_1225643);
var inst_1225652 = cljs.core.keyword_identical_QMARK_.call(null,inst_1225643,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1225653 = (inst_1225651) || (inst_1225652);
var state_1225682__$1 = (function (){var statearr_1225696 = state_1225682;
(statearr_1225696[(10)] = inst_1225650__$1);

return statearr_1225696;
})();
if(cljs.core.truth_(inst_1225653)){
var statearr_1225697_1225722 = state_1225682__$1;
(statearr_1225697_1225722[(1)] = (8));

} else {
var statearr_1225698_1225723 = state_1225682__$1;
(statearr_1225698_1225723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (14))){
var inst_1225675 = (state_1225682[(2)]);
var inst_1225676 = cljs.core.async.close_BANG_.call(null,out);
var state_1225682__$1 = (function (){var statearr_1225700 = state_1225682;
(statearr_1225700[(13)] = inst_1225675);

return statearr_1225700;
})();
var statearr_1225701_1225724 = state_1225682__$1;
(statearr_1225701_1225724[(2)] = inst_1225676);

(statearr_1225701_1225724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (10))){
var inst_1225665 = (state_1225682[(2)]);
var state_1225682__$1 = state_1225682;
var statearr_1225702_1225725 = state_1225682__$1;
(statearr_1225702_1225725[(2)] = inst_1225665);

(statearr_1225702_1225725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1225683 === (8))){
var inst_1225650 = (state_1225682[(10)]);
var inst_1225642 = (state_1225682[(7)]);
var inst_1225646 = (state_1225682[(9)]);
var inst_1225655 = inst_1225642.push(inst_1225646);
var tmp1225699 = inst_1225642;
var inst_1225642__$1 = tmp1225699;
var inst_1225643 = inst_1225650;
var state_1225682__$1 = (function (){var statearr_1225703 = state_1225682;
(statearr_1225703[(7)] = inst_1225642__$1);

(statearr_1225703[(14)] = inst_1225655);

(statearr_1225703[(8)] = inst_1225643);

return statearr_1225703;
})();
var statearr_1225704_1225726 = state_1225682__$1;
(statearr_1225704_1225726[(2)] = null);

(statearr_1225704_1225726[(1)] = (2));


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
});})(c__9199__auto___1225712,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1225712,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1225708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1225708[(0)] = state_machine__9185__auto__);

(statearr_1225708[(1)] = (1));

return statearr_1225708;
});
var state_machine__9185__auto____1 = (function (state_1225682){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1225682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1225709){if((e1225709 instanceof Object)){
var ex__9188__auto__ = e1225709;
var statearr_1225710_1225727 = state_1225682;
(statearr_1225710_1225727[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1225682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1225709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1225728 = state_1225682;
state_1225682 = G__1225728;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1225682){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1225682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1225712,out))
})();
var state__9201__auto__ = (function (){var statearr_1225711 = f__9200__auto__.call(null);
(statearr_1225711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1225712);

return statearr_1225711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1225712,out))
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