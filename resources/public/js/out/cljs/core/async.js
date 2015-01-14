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
if(typeof cljs.core.async.t14957 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14957 = (function (f,fn_handler,meta14958){
this.f = f;
this.fn_handler = fn_handler;
this.meta14958 = meta14958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14959){
var self__ = this;
var _14959__$1 = this;
return self__.meta14958;
});

cljs.core.async.t14957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14959,meta14958__$1){
var self__ = this;
var _14959__$1 = this;
return (new cljs.core.async.t14957(self__.f,self__.fn_handler,meta14958__$1));
});

cljs.core.async.t14957.cljs$lang$type = true;

cljs.core.async.t14957.cljs$lang$ctorStr = "cljs.core.async/t14957";

cljs.core.async.t14957.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14957");
});

cljs.core.async.__GT_t14957 = (function __GT_t14957(f__$1,fn_handler__$1,meta14958){
return (new cljs.core.async.t14957(f__$1,fn_handler__$1,meta14958));
});

}

return (new cljs.core.async.t14957(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__14961 = buff;
if(G__14961){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__14961.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14961.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14961);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14961);
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
var val_14962 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14962);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14962,ret){
return (function (){
return fn1.call(null,val_14962);
});})(val_14962,ret))
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
var n__4509__auto___14963 = n;
var x_14964 = (0);
while(true){
if((x_14964 < n__4509__auto___14963)){
(a[x_14964] = (0));

var G__14965 = (x_14964 + (1));
x_14964 = G__14965;
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

var G__14966 = (i + (1));
i = G__14966;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14970 = (function (flag,alt_flag,meta14971){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14971 = meta14971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14972){
var self__ = this;
var _14972__$1 = this;
return self__.meta14971;
});})(flag))
;

cljs.core.async.t14970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14972,meta14971__$1){
var self__ = this;
var _14972__$1 = this;
return (new cljs.core.async.t14970(self__.flag,self__.alt_flag,meta14971__$1));
});})(flag))
;

cljs.core.async.t14970.cljs$lang$type = true;

cljs.core.async.t14970.cljs$lang$ctorStr = "cljs.core.async/t14970";

cljs.core.async.t14970.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14970");
});})(flag))
;

cljs.core.async.__GT_t14970 = ((function (flag){
return (function __GT_t14970(flag__$1,alt_flag__$1,meta14971){
return (new cljs.core.async.t14970(flag__$1,alt_flag__$1,meta14971));
});})(flag))
;

}

return (new cljs.core.async.t14970(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14976 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14976 = (function (cb,flag,alt_handler,meta14977){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14977 = meta14977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14976.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14978){
var self__ = this;
var _14978__$1 = this;
return self__.meta14977;
});

cljs.core.async.t14976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14978,meta14977__$1){
var self__ = this;
var _14978__$1 = this;
return (new cljs.core.async.t14976(self__.cb,self__.flag,self__.alt_handler,meta14977__$1));
});

cljs.core.async.t14976.cljs$lang$type = true;

cljs.core.async.t14976.cljs$lang$ctorStr = "cljs.core.async/t14976";

cljs.core.async.t14976.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14976");
});

cljs.core.async.__GT_t14976 = (function __GT_t14976(cb__$1,flag__$1,alt_handler__$1,meta14977){
return (new cljs.core.async.t14976(cb__$1,flag__$1,alt_handler__$1,meta14977));
});

}

return (new cljs.core.async.t14976(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__14979_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14979_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14980_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14980_SHARP_,port], null));
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
var G__14981 = (i + (1));
i = G__14981;
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
var alts_BANG___delegate = function (ports,p__14982){
var map__14984 = p__14982;
var map__14984__$1 = ((cljs.core.seq_QMARK_.call(null,map__14984))?cljs.core.apply.call(null,cljs.core.hash_map,map__14984):map__14984);
var opts = map__14984__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14982 = null;
if (arguments.length > 1) {
  p__14982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14982);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14985){
var ports = cljs.core.first(arglist__14985);
var p__14982 = cljs.core.rest(arglist__14985);
return alts_BANG___delegate(ports,p__14982);
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
var c__7304__auto___15080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15080){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15080){
return (function (state_15056){
var state_val_15057 = (state_15056[(1)]);
if((state_val_15057 === (7))){
var inst_15052 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15058_15081 = state_15056__$1;
(statearr_15058_15081[(2)] = inst_15052);

(statearr_15058_15081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (1))){
var state_15056__$1 = state_15056;
var statearr_15059_15082 = state_15056__$1;
(statearr_15059_15082[(2)] = null);

(statearr_15059_15082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (4))){
var inst_15035 = (state_15056[(7)]);
var inst_15035__$1 = (state_15056[(2)]);
var inst_15036 = (inst_15035__$1 == null);
var state_15056__$1 = (function (){var statearr_15060 = state_15056;
(statearr_15060[(7)] = inst_15035__$1);

return statearr_15060;
})();
if(cljs.core.truth_(inst_15036)){
var statearr_15061_15083 = state_15056__$1;
(statearr_15061_15083[(1)] = (5));

} else {
var statearr_15062_15084 = state_15056__$1;
(statearr_15062_15084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (13))){
var state_15056__$1 = state_15056;
var statearr_15063_15085 = state_15056__$1;
(statearr_15063_15085[(2)] = null);

(statearr_15063_15085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (6))){
var inst_15035 = (state_15056[(7)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15056__$1,(11),to,inst_15035);
} else {
if((state_val_15057 === (3))){
var inst_15054 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15056__$1,inst_15054);
} else {
if((state_val_15057 === (12))){
var state_15056__$1 = state_15056;
var statearr_15064_15086 = state_15056__$1;
(statearr_15064_15086[(2)] = null);

(statearr_15064_15086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (2))){
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15056__$1,(4),from);
} else {
if((state_val_15057 === (11))){
var inst_15045 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
if(cljs.core.truth_(inst_15045)){
var statearr_15065_15087 = state_15056__$1;
(statearr_15065_15087[(1)] = (12));

} else {
var statearr_15066_15088 = state_15056__$1;
(statearr_15066_15088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (9))){
var state_15056__$1 = state_15056;
var statearr_15067_15089 = state_15056__$1;
(statearr_15067_15089[(2)] = null);

(statearr_15067_15089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (5))){
var state_15056__$1 = state_15056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15068_15090 = state_15056__$1;
(statearr_15068_15090[(1)] = (8));

} else {
var statearr_15069_15091 = state_15056__$1;
(statearr_15069_15091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (14))){
var inst_15050 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15070_15092 = state_15056__$1;
(statearr_15070_15092[(2)] = inst_15050);

(statearr_15070_15092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (10))){
var inst_15042 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15071_15093 = state_15056__$1;
(statearr_15071_15093[(2)] = inst_15042);

(statearr_15071_15093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (8))){
var inst_15039 = cljs.core.async.close_BANG_.call(null,to);
var state_15056__$1 = state_15056;
var statearr_15072_15094 = state_15056__$1;
(statearr_15072_15094[(2)] = inst_15039);

(statearr_15072_15094[(1)] = (10));


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
});})(c__7304__auto___15080))
;
return ((function (switch__7248__auto__,c__7304__auto___15080){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15076 = [null,null,null,null,null,null,null,null];
(statearr_15076[(0)] = state_machine__7249__auto__);

(statearr_15076[(1)] = (1));

return statearr_15076;
});
var state_machine__7249__auto____1 = (function (state_15056){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15077){if((e15077 instanceof Object)){
var ex__7252__auto__ = e15077;
var statearr_15078_15095 = state_15056;
(statearr_15078_15095[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15096 = state_15056;
state_15056 = G__15096;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15080))
})();
var state__7306__auto__ = (function (){var statearr_15079 = f__7305__auto__.call(null);
(statearr_15079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15080);

return statearr_15079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15080))
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
return (function (p__15280){
var vec__15281 = p__15280;
var v = cljs.core.nth.call(null,vec__15281,(0),null);
var p = cljs.core.nth.call(null,vec__15281,(1),null);
var job = vec__15281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7304__auto___15463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results){
return (function (state_15286){
var state_val_15287 = (state_15286[(1)]);
if((state_val_15287 === (2))){
var inst_15283 = (state_15286[(2)]);
var inst_15284 = cljs.core.async.close_BANG_.call(null,res);
var state_15286__$1 = (function (){var statearr_15288 = state_15286;
(statearr_15288[(7)] = inst_15283);

return statearr_15288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15286__$1,inst_15284);
} else {
if((state_val_15287 === (1))){
var state_15286__$1 = state_15286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15286__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15292 = [null,null,null,null,null,null,null,null];
(statearr_15292[(0)] = state_machine__7249__auto__);

(statearr_15292[(1)] = (1));

return statearr_15292;
});
var state_machine__7249__auto____1 = (function (state_15286){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15293){if((e15293 instanceof Object)){
var ex__7252__auto__ = e15293;
var statearr_15294_15464 = state_15286;
(statearr_15294_15464[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15465 = state_15286;
state_15286 = G__15465;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15286){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results))
})();
var state__7306__auto__ = (function (){var statearr_15295 = f__7305__auto__.call(null);
(statearr_15295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15463);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15463,res,vec__15281,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15296){
var vec__15297 = p__15296;
var v = cljs.core.nth.call(null,vec__15297,(0),null);
var p = cljs.core.nth.call(null,vec__15297,(1),null);
var job = vec__15297;
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
var n__4509__auto___15466 = n;
var __15467 = (0);
while(true){
if((__15467 < n__4509__auto___15466)){
var G__15298_15468 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15298_15468) {
case "async":
var c__7304__auto___15470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15467,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15467,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function (state_15311){
var state_val_15312 = (state_15311[(1)]);
if((state_val_15312 === (7))){
var inst_15307 = (state_15311[(2)]);
var state_15311__$1 = state_15311;
var statearr_15313_15471 = state_15311__$1;
(statearr_15313_15471[(2)] = inst_15307);

(statearr_15313_15471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15312 === (6))){
var state_15311__$1 = state_15311;
var statearr_15314_15472 = state_15311__$1;
(statearr_15314_15472[(2)] = null);

(statearr_15314_15472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15312 === (5))){
var state_15311__$1 = state_15311;
var statearr_15315_15473 = state_15311__$1;
(statearr_15315_15473[(2)] = null);

(statearr_15315_15473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15312 === (4))){
var inst_15301 = (state_15311[(2)]);
var inst_15302 = async.call(null,inst_15301);
var state_15311__$1 = state_15311;
if(cljs.core.truth_(inst_15302)){
var statearr_15316_15474 = state_15311__$1;
(statearr_15316_15474[(1)] = (5));

} else {
var statearr_15317_15475 = state_15311__$1;
(statearr_15317_15475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15312 === (3))){
var inst_15309 = (state_15311[(2)]);
var state_15311__$1 = state_15311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15311__$1,inst_15309);
} else {
if((state_val_15312 === (2))){
var state_15311__$1 = state_15311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15311__$1,(4),jobs);
} else {
if((state_val_15312 === (1))){
var state_15311__$1 = state_15311;
var statearr_15318_15476 = state_15311__$1;
(statearr_15318_15476[(2)] = null);

(statearr_15318_15476[(1)] = (2));


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
});})(__15467,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
;
return ((function (__15467,switch__7248__auto__,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15322 = [null,null,null,null,null,null,null];
(statearr_15322[(0)] = state_machine__7249__auto__);

(statearr_15322[(1)] = (1));

return statearr_15322;
});
var state_machine__7249__auto____1 = (function (state_15311){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15323){if((e15323 instanceof Object)){
var ex__7252__auto__ = e15323;
var statearr_15324_15477 = state_15311;
(statearr_15324_15477[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15478 = state_15311;
state_15311 = G__15478;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15311){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15467,switch__7248__auto__,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15325 = f__7305__auto__.call(null);
(statearr_15325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15470);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15467,c__7304__auto___15470,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
);


break;
case "compute":
var c__7304__auto___15479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15467,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15467,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function (state_15338){
var state_val_15339 = (state_15338[(1)]);
if((state_val_15339 === (7))){
var inst_15334 = (state_15338[(2)]);
var state_15338__$1 = state_15338;
var statearr_15340_15480 = state_15338__$1;
(statearr_15340_15480[(2)] = inst_15334);

(statearr_15340_15480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (6))){
var state_15338__$1 = state_15338;
var statearr_15341_15481 = state_15338__$1;
(statearr_15341_15481[(2)] = null);

(statearr_15341_15481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (5))){
var state_15338__$1 = state_15338;
var statearr_15342_15482 = state_15338__$1;
(statearr_15342_15482[(2)] = null);

(statearr_15342_15482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (4))){
var inst_15328 = (state_15338[(2)]);
var inst_15329 = process.call(null,inst_15328);
var state_15338__$1 = state_15338;
if(cljs.core.truth_(inst_15329)){
var statearr_15343_15483 = state_15338__$1;
(statearr_15343_15483[(1)] = (5));

} else {
var statearr_15344_15484 = state_15338__$1;
(statearr_15344_15484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (3))){
var inst_15336 = (state_15338[(2)]);
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15338__$1,inst_15336);
} else {
if((state_val_15339 === (2))){
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15338__$1,(4),jobs);
} else {
if((state_val_15339 === (1))){
var state_15338__$1 = state_15338;
var statearr_15345_15485 = state_15338__$1;
(statearr_15345_15485[(2)] = null);

(statearr_15345_15485[(1)] = (2));


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
});})(__15467,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
;
return ((function (__15467,switch__7248__auto__,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15349 = [null,null,null,null,null,null,null];
(statearr_15349[(0)] = state_machine__7249__auto__);

(statearr_15349[(1)] = (1));

return statearr_15349;
});
var state_machine__7249__auto____1 = (function (state_15338){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15350){if((e15350 instanceof Object)){
var ex__7252__auto__ = e15350;
var statearr_15351_15486 = state_15338;
(statearr_15351_15486[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15487 = state_15338;
state_15338 = G__15487;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15338){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15467,switch__7248__auto__,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15352 = f__7305__auto__.call(null);
(statearr_15352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15479);

return statearr_15352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15467,c__7304__auto___15479,G__15298_15468,n__4509__auto___15466,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15488 = (__15467 + (1));
__15467 = G__15488;
continue;
} else {
}
break;
}

var c__7304__auto___15489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15489,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15489,jobs,results,process,async){
return (function (state_15374){
var state_val_15375 = (state_15374[(1)]);
if((state_val_15375 === (9))){
var inst_15367 = (state_15374[(2)]);
var state_15374__$1 = (function (){var statearr_15376 = state_15374;
(statearr_15376[(7)] = inst_15367);

return statearr_15376;
})();
var statearr_15377_15490 = state_15374__$1;
(statearr_15377_15490[(2)] = null);

(statearr_15377_15490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (8))){
var inst_15360 = (state_15374[(8)]);
var inst_15365 = (state_15374[(2)]);
var state_15374__$1 = (function (){var statearr_15378 = state_15374;
(statearr_15378[(9)] = inst_15365);

return statearr_15378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15374__$1,(9),results,inst_15360);
} else {
if((state_val_15375 === (7))){
var inst_15370 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15379_15491 = state_15374__$1;
(statearr_15379_15491[(2)] = inst_15370);

(statearr_15379_15491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (6))){
var inst_15355 = (state_15374[(10)]);
var inst_15360 = (state_15374[(8)]);
var inst_15360__$1 = cljs.core.async.chan.call(null,(1));
var inst_15361 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15362 = [inst_15355,inst_15360__$1];
var inst_15363 = (new cljs.core.PersistentVector(null,2,(5),inst_15361,inst_15362,null));
var state_15374__$1 = (function (){var statearr_15380 = state_15374;
(statearr_15380[(8)] = inst_15360__$1);

return statearr_15380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15374__$1,(8),jobs,inst_15363);
} else {
if((state_val_15375 === (5))){
var inst_15358 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15374__$1 = state_15374;
var statearr_15381_15492 = state_15374__$1;
(statearr_15381_15492[(2)] = inst_15358);

(statearr_15381_15492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (4))){
var inst_15355 = (state_15374[(10)]);
var inst_15355__$1 = (state_15374[(2)]);
var inst_15356 = (inst_15355__$1 == null);
var state_15374__$1 = (function (){var statearr_15382 = state_15374;
(statearr_15382[(10)] = inst_15355__$1);

return statearr_15382;
})();
if(cljs.core.truth_(inst_15356)){
var statearr_15383_15493 = state_15374__$1;
(statearr_15383_15493[(1)] = (5));

} else {
var statearr_15384_15494 = state_15374__$1;
(statearr_15384_15494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (3))){
var inst_15372 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15374__$1,inst_15372);
} else {
if((state_val_15375 === (2))){
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15374__$1,(4),from);
} else {
if((state_val_15375 === (1))){
var state_15374__$1 = state_15374;
var statearr_15385_15495 = state_15374__$1;
(statearr_15385_15495[(2)] = null);

(statearr_15385_15495[(1)] = (2));


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
});})(c__7304__auto___15489,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7304__auto___15489,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15389[(0)] = state_machine__7249__auto__);

(statearr_15389[(1)] = (1));

return statearr_15389;
});
var state_machine__7249__auto____1 = (function (state_15374){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15390){if((e15390 instanceof Object)){
var ex__7252__auto__ = e15390;
var statearr_15391_15496 = state_15374;
(statearr_15391_15496[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15497 = state_15374;
state_15374 = G__15497;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15374){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15489,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15392 = f__7305__auto__.call(null);
(statearr_15392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15489);

return statearr_15392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15489,jobs,results,process,async))
);


var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,jobs,results,process,async){
return (function (state_15430){
var state_val_15431 = (state_15430[(1)]);
if((state_val_15431 === (7))){
var inst_15426 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
var statearr_15432_15498 = state_15430__$1;
(statearr_15432_15498[(2)] = inst_15426);

(statearr_15432_15498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (20))){
var state_15430__$1 = state_15430;
var statearr_15433_15499 = state_15430__$1;
(statearr_15433_15499[(2)] = null);

(statearr_15433_15499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (1))){
var state_15430__$1 = state_15430;
var statearr_15434_15500 = state_15430__$1;
(statearr_15434_15500[(2)] = null);

(statearr_15434_15500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (4))){
var inst_15395 = (state_15430[(7)]);
var inst_15395__$1 = (state_15430[(2)]);
var inst_15396 = (inst_15395__$1 == null);
var state_15430__$1 = (function (){var statearr_15435 = state_15430;
(statearr_15435[(7)] = inst_15395__$1);

return statearr_15435;
})();
if(cljs.core.truth_(inst_15396)){
var statearr_15436_15501 = state_15430__$1;
(statearr_15436_15501[(1)] = (5));

} else {
var statearr_15437_15502 = state_15430__$1;
(statearr_15437_15502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (15))){
var inst_15408 = (state_15430[(8)]);
var state_15430__$1 = state_15430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15430__$1,(18),to,inst_15408);
} else {
if((state_val_15431 === (21))){
var inst_15421 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
var statearr_15438_15503 = state_15430__$1;
(statearr_15438_15503[(2)] = inst_15421);

(statearr_15438_15503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (13))){
var inst_15423 = (state_15430[(2)]);
var state_15430__$1 = (function (){var statearr_15439 = state_15430;
(statearr_15439[(9)] = inst_15423);

return statearr_15439;
})();
var statearr_15440_15504 = state_15430__$1;
(statearr_15440_15504[(2)] = null);

(statearr_15440_15504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (6))){
var inst_15395 = (state_15430[(7)]);
var state_15430__$1 = state_15430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15430__$1,(11),inst_15395);
} else {
if((state_val_15431 === (17))){
var inst_15416 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
if(cljs.core.truth_(inst_15416)){
var statearr_15441_15505 = state_15430__$1;
(statearr_15441_15505[(1)] = (19));

} else {
var statearr_15442_15506 = state_15430__$1;
(statearr_15442_15506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (3))){
var inst_15428 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15430__$1,inst_15428);
} else {
if((state_val_15431 === (12))){
var inst_15405 = (state_15430[(10)]);
var state_15430__$1 = state_15430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15430__$1,(14),inst_15405);
} else {
if((state_val_15431 === (2))){
var state_15430__$1 = state_15430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15430__$1,(4),results);
} else {
if((state_val_15431 === (19))){
var state_15430__$1 = state_15430;
var statearr_15443_15507 = state_15430__$1;
(statearr_15443_15507[(2)] = null);

(statearr_15443_15507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (11))){
var inst_15405 = (state_15430[(2)]);
var state_15430__$1 = (function (){var statearr_15444 = state_15430;
(statearr_15444[(10)] = inst_15405);

return statearr_15444;
})();
var statearr_15445_15508 = state_15430__$1;
(statearr_15445_15508[(2)] = null);

(statearr_15445_15508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (9))){
var state_15430__$1 = state_15430;
var statearr_15446_15509 = state_15430__$1;
(statearr_15446_15509[(2)] = null);

(statearr_15446_15509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (5))){
var state_15430__$1 = state_15430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15447_15510 = state_15430__$1;
(statearr_15447_15510[(1)] = (8));

} else {
var statearr_15448_15511 = state_15430__$1;
(statearr_15448_15511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (14))){
var inst_15408 = (state_15430[(8)]);
var inst_15410 = (state_15430[(11)]);
var inst_15408__$1 = (state_15430[(2)]);
var inst_15409 = (inst_15408__$1 == null);
var inst_15410__$1 = cljs.core.not.call(null,inst_15409);
var state_15430__$1 = (function (){var statearr_15449 = state_15430;
(statearr_15449[(8)] = inst_15408__$1);

(statearr_15449[(11)] = inst_15410__$1);

return statearr_15449;
})();
if(inst_15410__$1){
var statearr_15450_15512 = state_15430__$1;
(statearr_15450_15512[(1)] = (15));

} else {
var statearr_15451_15513 = state_15430__$1;
(statearr_15451_15513[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (16))){
var inst_15410 = (state_15430[(11)]);
var state_15430__$1 = state_15430;
var statearr_15452_15514 = state_15430__$1;
(statearr_15452_15514[(2)] = inst_15410);

(statearr_15452_15514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (10))){
var inst_15402 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
var statearr_15453_15515 = state_15430__$1;
(statearr_15453_15515[(2)] = inst_15402);

(statearr_15453_15515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (18))){
var inst_15413 = (state_15430[(2)]);
var state_15430__$1 = state_15430;
var statearr_15454_15516 = state_15430__$1;
(statearr_15454_15516[(2)] = inst_15413);

(statearr_15454_15516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15431 === (8))){
var inst_15399 = cljs.core.async.close_BANG_.call(null,to);
var state_15430__$1 = state_15430;
var statearr_15455_15517 = state_15430__$1;
(statearr_15455_15517[(2)] = inst_15399);

(statearr_15455_15517[(1)] = (10));


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
var statearr_15459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15459[(0)] = state_machine__7249__auto__);

(statearr_15459[(1)] = (1));

return statearr_15459;
});
var state_machine__7249__auto____1 = (function (state_15430){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15460){if((e15460 instanceof Object)){
var ex__7252__auto__ = e15460;
var statearr_15461_15518 = state_15430;
(statearr_15461_15518[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15519 = state_15430;
state_15430 = G__15519;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15430){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15462 = f__7305__auto__.call(null);
(statearr_15462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15462;
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
var c__7304__auto___15620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15620,tc,fc){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15620,tc,fc){
return (function (state_15595){
var state_val_15596 = (state_15595[(1)]);
if((state_val_15596 === (7))){
var inst_15591 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
var statearr_15597_15621 = state_15595__$1;
(statearr_15597_15621[(2)] = inst_15591);

(statearr_15597_15621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (1))){
var state_15595__$1 = state_15595;
var statearr_15598_15622 = state_15595__$1;
(statearr_15598_15622[(2)] = null);

(statearr_15598_15622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (4))){
var inst_15572 = (state_15595[(7)]);
var inst_15572__$1 = (state_15595[(2)]);
var inst_15573 = (inst_15572__$1 == null);
var state_15595__$1 = (function (){var statearr_15599 = state_15595;
(statearr_15599[(7)] = inst_15572__$1);

return statearr_15599;
})();
if(cljs.core.truth_(inst_15573)){
var statearr_15600_15623 = state_15595__$1;
(statearr_15600_15623[(1)] = (5));

} else {
var statearr_15601_15624 = state_15595__$1;
(statearr_15601_15624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (13))){
var state_15595__$1 = state_15595;
var statearr_15602_15625 = state_15595__$1;
(statearr_15602_15625[(2)] = null);

(statearr_15602_15625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (6))){
var inst_15572 = (state_15595[(7)]);
var inst_15578 = p.call(null,inst_15572);
var state_15595__$1 = state_15595;
if(cljs.core.truth_(inst_15578)){
var statearr_15603_15626 = state_15595__$1;
(statearr_15603_15626[(1)] = (9));

} else {
var statearr_15604_15627 = state_15595__$1;
(statearr_15604_15627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (3))){
var inst_15593 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15595__$1,inst_15593);
} else {
if((state_val_15596 === (12))){
var state_15595__$1 = state_15595;
var statearr_15605_15628 = state_15595__$1;
(statearr_15605_15628[(2)] = null);

(statearr_15605_15628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (2))){
var state_15595__$1 = state_15595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15595__$1,(4),ch);
} else {
if((state_val_15596 === (11))){
var inst_15572 = (state_15595[(7)]);
var inst_15582 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15595__$1,(8),inst_15582,inst_15572);
} else {
if((state_val_15596 === (9))){
var state_15595__$1 = state_15595;
var statearr_15606_15629 = state_15595__$1;
(statearr_15606_15629[(2)] = tc);

(statearr_15606_15629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (5))){
var inst_15575 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15576 = cljs.core.async.close_BANG_.call(null,fc);
var state_15595__$1 = (function (){var statearr_15607 = state_15595;
(statearr_15607[(8)] = inst_15575);

return statearr_15607;
})();
var statearr_15608_15630 = state_15595__$1;
(statearr_15608_15630[(2)] = inst_15576);

(statearr_15608_15630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (14))){
var inst_15589 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
var statearr_15609_15631 = state_15595__$1;
(statearr_15609_15631[(2)] = inst_15589);

(statearr_15609_15631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (10))){
var state_15595__$1 = state_15595;
var statearr_15610_15632 = state_15595__$1;
(statearr_15610_15632[(2)] = fc);

(statearr_15610_15632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15596 === (8))){
var inst_15584 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
if(cljs.core.truth_(inst_15584)){
var statearr_15611_15633 = state_15595__$1;
(statearr_15611_15633[(1)] = (12));

} else {
var statearr_15612_15634 = state_15595__$1;
(statearr_15612_15634[(1)] = (13));

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
});})(c__7304__auto___15620,tc,fc))
;
return ((function (switch__7248__auto__,c__7304__auto___15620,tc,fc){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15616 = [null,null,null,null,null,null,null,null,null];
(statearr_15616[(0)] = state_machine__7249__auto__);

(statearr_15616[(1)] = (1));

return statearr_15616;
});
var state_machine__7249__auto____1 = (function (state_15595){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15617){if((e15617 instanceof Object)){
var ex__7252__auto__ = e15617;
var statearr_15618_15635 = state_15595;
(statearr_15618_15635[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15636 = state_15595;
state_15595 = G__15636;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15595){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15620,tc,fc))
})();
var state__7306__auto__ = (function (){var statearr_15619 = f__7305__auto__.call(null);
(statearr_15619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15620);

return statearr_15619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15620,tc,fc))
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
return (function (state_15683){
var state_val_15684 = (state_15683[(1)]);
if((state_val_15684 === (7))){
var inst_15679 = (state_15683[(2)]);
var state_15683__$1 = state_15683;
var statearr_15685_15701 = state_15683__$1;
(statearr_15685_15701[(2)] = inst_15679);

(statearr_15685_15701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15684 === (6))){
var inst_15669 = (state_15683[(7)]);
var inst_15672 = (state_15683[(8)]);
var inst_15676 = f.call(null,inst_15669,inst_15672);
var inst_15669__$1 = inst_15676;
var state_15683__$1 = (function (){var statearr_15686 = state_15683;
(statearr_15686[(7)] = inst_15669__$1);

return statearr_15686;
})();
var statearr_15687_15702 = state_15683__$1;
(statearr_15687_15702[(2)] = null);

(statearr_15687_15702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15684 === (5))){
var inst_15669 = (state_15683[(7)]);
var state_15683__$1 = state_15683;
var statearr_15688_15703 = state_15683__$1;
(statearr_15688_15703[(2)] = inst_15669);

(statearr_15688_15703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15684 === (4))){
var inst_15672 = (state_15683[(8)]);
var inst_15672__$1 = (state_15683[(2)]);
var inst_15673 = (inst_15672__$1 == null);
var state_15683__$1 = (function (){var statearr_15689 = state_15683;
(statearr_15689[(8)] = inst_15672__$1);

return statearr_15689;
})();
if(cljs.core.truth_(inst_15673)){
var statearr_15690_15704 = state_15683__$1;
(statearr_15690_15704[(1)] = (5));

} else {
var statearr_15691_15705 = state_15683__$1;
(statearr_15691_15705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15684 === (3))){
var inst_15681 = (state_15683[(2)]);
var state_15683__$1 = state_15683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15683__$1,inst_15681);
} else {
if((state_val_15684 === (2))){
var state_15683__$1 = state_15683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15683__$1,(4),ch);
} else {
if((state_val_15684 === (1))){
var inst_15669 = init;
var state_15683__$1 = (function (){var statearr_15692 = state_15683;
(statearr_15692[(7)] = inst_15669);

return statearr_15692;
})();
var statearr_15693_15706 = state_15683__$1;
(statearr_15693_15706[(2)] = null);

(statearr_15693_15706[(1)] = (2));


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
var statearr_15697 = [null,null,null,null,null,null,null,null,null];
(statearr_15697[(0)] = state_machine__7249__auto__);

(statearr_15697[(1)] = (1));

return statearr_15697;
});
var state_machine__7249__auto____1 = (function (state_15683){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15698){if((e15698 instanceof Object)){
var ex__7252__auto__ = e15698;
var statearr_15699_15707 = state_15683;
(statearr_15699_15707[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15708 = state_15683;
state_15683 = G__15708;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15683){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15700 = f__7305__auto__.call(null);
(statearr_15700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15700;
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
return (function (state_15782){
var state_val_15783 = (state_15782[(1)]);
if((state_val_15783 === (7))){
var inst_15764 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15784_15807 = state_15782__$1;
(statearr_15784_15807[(2)] = inst_15764);

(statearr_15784_15807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (1))){
var inst_15758 = cljs.core.seq.call(null,coll);
var inst_15759 = inst_15758;
var state_15782__$1 = (function (){var statearr_15785 = state_15782;
(statearr_15785[(7)] = inst_15759);

return statearr_15785;
})();
var statearr_15786_15808 = state_15782__$1;
(statearr_15786_15808[(2)] = null);

(statearr_15786_15808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (4))){
var inst_15759 = (state_15782[(7)]);
var inst_15762 = cljs.core.first.call(null,inst_15759);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(7),ch,inst_15762);
} else {
if((state_val_15783 === (13))){
var inst_15776 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15787_15809 = state_15782__$1;
(statearr_15787_15809[(2)] = inst_15776);

(statearr_15787_15809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (6))){
var inst_15767 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
if(cljs.core.truth_(inst_15767)){
var statearr_15788_15810 = state_15782__$1;
(statearr_15788_15810[(1)] = (8));

} else {
var statearr_15789_15811 = state_15782__$1;
(statearr_15789_15811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (3))){
var inst_15780 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else {
if((state_val_15783 === (12))){
var state_15782__$1 = state_15782;
var statearr_15790_15812 = state_15782__$1;
(statearr_15790_15812[(2)] = null);

(statearr_15790_15812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (2))){
var inst_15759 = (state_15782[(7)]);
var state_15782__$1 = state_15782;
if(cljs.core.truth_(inst_15759)){
var statearr_15791_15813 = state_15782__$1;
(statearr_15791_15813[(1)] = (4));

} else {
var statearr_15792_15814 = state_15782__$1;
(statearr_15792_15814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (11))){
var inst_15773 = cljs.core.async.close_BANG_.call(null,ch);
var state_15782__$1 = state_15782;
var statearr_15793_15815 = state_15782__$1;
(statearr_15793_15815[(2)] = inst_15773);

(statearr_15793_15815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (9))){
var state_15782__$1 = state_15782;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15794_15816 = state_15782__$1;
(statearr_15794_15816[(1)] = (11));

} else {
var statearr_15795_15817 = state_15782__$1;
(statearr_15795_15817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (5))){
var inst_15759 = (state_15782[(7)]);
var state_15782__$1 = state_15782;
var statearr_15796_15818 = state_15782__$1;
(statearr_15796_15818[(2)] = inst_15759);

(statearr_15796_15818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (10))){
var inst_15778 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15797_15819 = state_15782__$1;
(statearr_15797_15819[(2)] = inst_15778);

(statearr_15797_15819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (8))){
var inst_15759 = (state_15782[(7)]);
var inst_15769 = cljs.core.next.call(null,inst_15759);
var inst_15759__$1 = inst_15769;
var state_15782__$1 = (function (){var statearr_15798 = state_15782;
(statearr_15798[(7)] = inst_15759__$1);

return statearr_15798;
})();
var statearr_15799_15820 = state_15782__$1;
(statearr_15799_15820[(2)] = null);

(statearr_15799_15820[(1)] = (2));


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
var statearr_15803 = [null,null,null,null,null,null,null,null];
(statearr_15803[(0)] = state_machine__7249__auto__);

(statearr_15803[(1)] = (1));

return statearr_15803;
});
var state_machine__7249__auto____1 = (function (state_15782){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15804){if((e15804 instanceof Object)){
var ex__7252__auto__ = e15804;
var statearr_15805_15821 = state_15782;
(statearr_15805_15821[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15822 = state_15782;
state_15782 = G__15822;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15806 = f__7305__auto__.call(null);
(statearr_15806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15806;
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

cljs.core.async.Mux = (function (){var obj15824 = {};
return obj15824;
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


cljs.core.async.Mult = (function (){var obj15826 = {};
return obj15826;
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
if(typeof cljs.core.async.t16048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16048 = (function (cs,ch,mult,meta16049){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16049 = meta16049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16048.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16048.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16048.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16048.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16048.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16050){
var self__ = this;
var _16050__$1 = this;
return self__.meta16049;
});})(cs))
;

cljs.core.async.t16048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16050,meta16049__$1){
var self__ = this;
var _16050__$1 = this;
return (new cljs.core.async.t16048(self__.cs,self__.ch,self__.mult,meta16049__$1));
});})(cs))
;

cljs.core.async.t16048.cljs$lang$type = true;

cljs.core.async.t16048.cljs$lang$ctorStr = "cljs.core.async/t16048";

cljs.core.async.t16048.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16048");
});})(cs))
;

cljs.core.async.__GT_t16048 = ((function (cs){
return (function __GT_t16048(cs__$1,ch__$1,mult__$1,meta16049){
return (new cljs.core.async.t16048(cs__$1,ch__$1,mult__$1,meta16049));
});})(cs))
;

}

return (new cljs.core.async.t16048(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___16269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16269,cs,m,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16269,cs,m,dchan,dctr,done){
return (function (state_16181){
var state_val_16182 = (state_16181[(1)]);
if((state_val_16182 === (7))){
var inst_16177 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16183_16270 = state_16181__$1;
(statearr_16183_16270[(2)] = inst_16177);

(statearr_16183_16270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (20))){
var inst_16082 = (state_16181[(7)]);
var inst_16092 = cljs.core.first.call(null,inst_16082);
var inst_16093 = cljs.core.nth.call(null,inst_16092,(0),null);
var inst_16094 = cljs.core.nth.call(null,inst_16092,(1),null);
var state_16181__$1 = (function (){var statearr_16184 = state_16181;
(statearr_16184[(8)] = inst_16093);

return statearr_16184;
})();
if(cljs.core.truth_(inst_16094)){
var statearr_16185_16271 = state_16181__$1;
(statearr_16185_16271[(1)] = (22));

} else {
var statearr_16186_16272 = state_16181__$1;
(statearr_16186_16272[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (27))){
var inst_16122 = (state_16181[(9)]);
var inst_16053 = (state_16181[(10)]);
var inst_16124 = (state_16181[(11)]);
var inst_16129 = (state_16181[(12)]);
var inst_16129__$1 = cljs.core._nth.call(null,inst_16122,inst_16124);
var inst_16130 = cljs.core.async.put_BANG_.call(null,inst_16129__$1,inst_16053,done);
var state_16181__$1 = (function (){var statearr_16187 = state_16181;
(statearr_16187[(12)] = inst_16129__$1);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16130)){
var statearr_16188_16273 = state_16181__$1;
(statearr_16188_16273[(1)] = (30));

} else {
var statearr_16189_16274 = state_16181__$1;
(statearr_16189_16274[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (1))){
var state_16181__$1 = state_16181;
var statearr_16190_16275 = state_16181__$1;
(statearr_16190_16275[(2)] = null);

(statearr_16190_16275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (24))){
var inst_16082 = (state_16181[(7)]);
var inst_16099 = (state_16181[(2)]);
var inst_16100 = cljs.core.next.call(null,inst_16082);
var inst_16062 = inst_16100;
var inst_16063 = null;
var inst_16064 = (0);
var inst_16065 = (0);
var state_16181__$1 = (function (){var statearr_16191 = state_16181;
(statearr_16191[(13)] = inst_16062);

(statearr_16191[(14)] = inst_16099);

(statearr_16191[(15)] = inst_16063);

(statearr_16191[(16)] = inst_16065);

(statearr_16191[(17)] = inst_16064);

return statearr_16191;
})();
var statearr_16192_16276 = state_16181__$1;
(statearr_16192_16276[(2)] = null);

(statearr_16192_16276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (39))){
var state_16181__$1 = state_16181;
var statearr_16196_16277 = state_16181__$1;
(statearr_16196_16277[(2)] = null);

(statearr_16196_16277[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (4))){
var inst_16053 = (state_16181[(10)]);
var inst_16053__$1 = (state_16181[(2)]);
var inst_16054 = (inst_16053__$1 == null);
var state_16181__$1 = (function (){var statearr_16197 = state_16181;
(statearr_16197[(10)] = inst_16053__$1);

return statearr_16197;
})();
if(cljs.core.truth_(inst_16054)){
var statearr_16198_16278 = state_16181__$1;
(statearr_16198_16278[(1)] = (5));

} else {
var statearr_16199_16279 = state_16181__$1;
(statearr_16199_16279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (15))){
var inst_16062 = (state_16181[(13)]);
var inst_16063 = (state_16181[(15)]);
var inst_16065 = (state_16181[(16)]);
var inst_16064 = (state_16181[(17)]);
var inst_16078 = (state_16181[(2)]);
var inst_16079 = (inst_16065 + (1));
var tmp16193 = inst_16062;
var tmp16194 = inst_16063;
var tmp16195 = inst_16064;
var inst_16062__$1 = tmp16193;
var inst_16063__$1 = tmp16194;
var inst_16064__$1 = tmp16195;
var inst_16065__$1 = inst_16079;
var state_16181__$1 = (function (){var statearr_16200 = state_16181;
(statearr_16200[(13)] = inst_16062__$1);

(statearr_16200[(18)] = inst_16078);

(statearr_16200[(15)] = inst_16063__$1);

(statearr_16200[(16)] = inst_16065__$1);

(statearr_16200[(17)] = inst_16064__$1);

return statearr_16200;
})();
var statearr_16201_16280 = state_16181__$1;
(statearr_16201_16280[(2)] = null);

(statearr_16201_16280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (21))){
var inst_16103 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16205_16281 = state_16181__$1;
(statearr_16205_16281[(2)] = inst_16103);

(statearr_16205_16281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (31))){
var inst_16129 = (state_16181[(12)]);
var inst_16133 = done.call(null,null);
var inst_16134 = cljs.core.async.untap_STAR_.call(null,m,inst_16129);
var state_16181__$1 = (function (){var statearr_16206 = state_16181;
(statearr_16206[(19)] = inst_16133);

return statearr_16206;
})();
var statearr_16207_16282 = state_16181__$1;
(statearr_16207_16282[(2)] = inst_16134);

(statearr_16207_16282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (32))){
var inst_16123 = (state_16181[(20)]);
var inst_16122 = (state_16181[(9)]);
var inst_16124 = (state_16181[(11)]);
var inst_16121 = (state_16181[(21)]);
var inst_16136 = (state_16181[(2)]);
var inst_16137 = (inst_16124 + (1));
var tmp16202 = inst_16123;
var tmp16203 = inst_16122;
var tmp16204 = inst_16121;
var inst_16121__$1 = tmp16204;
var inst_16122__$1 = tmp16203;
var inst_16123__$1 = tmp16202;
var inst_16124__$1 = inst_16137;
var state_16181__$1 = (function (){var statearr_16208 = state_16181;
(statearr_16208[(20)] = inst_16123__$1);

(statearr_16208[(9)] = inst_16122__$1);

(statearr_16208[(11)] = inst_16124__$1);

(statearr_16208[(21)] = inst_16121__$1);

(statearr_16208[(22)] = inst_16136);

return statearr_16208;
})();
var statearr_16209_16283 = state_16181__$1;
(statearr_16209_16283[(2)] = null);

(statearr_16209_16283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (40))){
var inst_16149 = (state_16181[(23)]);
var inst_16153 = done.call(null,null);
var inst_16154 = cljs.core.async.untap_STAR_.call(null,m,inst_16149);
var state_16181__$1 = (function (){var statearr_16210 = state_16181;
(statearr_16210[(24)] = inst_16153);

return statearr_16210;
})();
var statearr_16211_16284 = state_16181__$1;
(statearr_16211_16284[(2)] = inst_16154);

(statearr_16211_16284[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (33))){
var inst_16140 = (state_16181[(25)]);
var inst_16142 = cljs.core.chunked_seq_QMARK_.call(null,inst_16140);
var state_16181__$1 = state_16181;
if(inst_16142){
var statearr_16212_16285 = state_16181__$1;
(statearr_16212_16285[(1)] = (36));

} else {
var statearr_16213_16286 = state_16181__$1;
(statearr_16213_16286[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (13))){
var inst_16072 = (state_16181[(26)]);
var inst_16075 = cljs.core.async.close_BANG_.call(null,inst_16072);
var state_16181__$1 = state_16181;
var statearr_16214_16287 = state_16181__$1;
(statearr_16214_16287[(2)] = inst_16075);

(statearr_16214_16287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (22))){
var inst_16093 = (state_16181[(8)]);
var inst_16096 = cljs.core.async.close_BANG_.call(null,inst_16093);
var state_16181__$1 = state_16181;
var statearr_16215_16288 = state_16181__$1;
(statearr_16215_16288[(2)] = inst_16096);

(statearr_16215_16288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (36))){
var inst_16140 = (state_16181[(25)]);
var inst_16144 = cljs.core.chunk_first.call(null,inst_16140);
var inst_16145 = cljs.core.chunk_rest.call(null,inst_16140);
var inst_16146 = cljs.core.count.call(null,inst_16144);
var inst_16121 = inst_16145;
var inst_16122 = inst_16144;
var inst_16123 = inst_16146;
var inst_16124 = (0);
var state_16181__$1 = (function (){var statearr_16216 = state_16181;
(statearr_16216[(20)] = inst_16123);

(statearr_16216[(9)] = inst_16122);

(statearr_16216[(11)] = inst_16124);

(statearr_16216[(21)] = inst_16121);

return statearr_16216;
})();
var statearr_16217_16289 = state_16181__$1;
(statearr_16217_16289[(2)] = null);

(statearr_16217_16289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (41))){
var inst_16140 = (state_16181[(25)]);
var inst_16156 = (state_16181[(2)]);
var inst_16157 = cljs.core.next.call(null,inst_16140);
var inst_16121 = inst_16157;
var inst_16122 = null;
var inst_16123 = (0);
var inst_16124 = (0);
var state_16181__$1 = (function (){var statearr_16218 = state_16181;
(statearr_16218[(20)] = inst_16123);

(statearr_16218[(9)] = inst_16122);

(statearr_16218[(27)] = inst_16156);

(statearr_16218[(11)] = inst_16124);

(statearr_16218[(21)] = inst_16121);

return statearr_16218;
})();
var statearr_16219_16290 = state_16181__$1;
(statearr_16219_16290[(2)] = null);

(statearr_16219_16290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (43))){
var state_16181__$1 = state_16181;
var statearr_16220_16291 = state_16181__$1;
(statearr_16220_16291[(2)] = null);

(statearr_16220_16291[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (29))){
var inst_16165 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16221_16292 = state_16181__$1;
(statearr_16221_16292[(2)] = inst_16165);

(statearr_16221_16292[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (44))){
var inst_16174 = (state_16181[(2)]);
var state_16181__$1 = (function (){var statearr_16222 = state_16181;
(statearr_16222[(28)] = inst_16174);

return statearr_16222;
})();
var statearr_16223_16293 = state_16181__$1;
(statearr_16223_16293[(2)] = null);

(statearr_16223_16293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (6))){
var inst_16113 = (state_16181[(29)]);
var inst_16112 = cljs.core.deref.call(null,cs);
var inst_16113__$1 = cljs.core.keys.call(null,inst_16112);
var inst_16114 = cljs.core.count.call(null,inst_16113__$1);
var inst_16115 = cljs.core.reset_BANG_.call(null,dctr,inst_16114);
var inst_16120 = cljs.core.seq.call(null,inst_16113__$1);
var inst_16121 = inst_16120;
var inst_16122 = null;
var inst_16123 = (0);
var inst_16124 = (0);
var state_16181__$1 = (function (){var statearr_16224 = state_16181;
(statearr_16224[(20)] = inst_16123);

(statearr_16224[(9)] = inst_16122);

(statearr_16224[(30)] = inst_16115);

(statearr_16224[(29)] = inst_16113__$1);

(statearr_16224[(11)] = inst_16124);

(statearr_16224[(21)] = inst_16121);

return statearr_16224;
})();
var statearr_16225_16294 = state_16181__$1;
(statearr_16225_16294[(2)] = null);

(statearr_16225_16294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (28))){
var inst_16121 = (state_16181[(21)]);
var inst_16140 = (state_16181[(25)]);
var inst_16140__$1 = cljs.core.seq.call(null,inst_16121);
var state_16181__$1 = (function (){var statearr_16226 = state_16181;
(statearr_16226[(25)] = inst_16140__$1);

return statearr_16226;
})();
if(inst_16140__$1){
var statearr_16227_16295 = state_16181__$1;
(statearr_16227_16295[(1)] = (33));

} else {
var statearr_16228_16296 = state_16181__$1;
(statearr_16228_16296[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (25))){
var inst_16123 = (state_16181[(20)]);
var inst_16124 = (state_16181[(11)]);
var inst_16126 = (inst_16124 < inst_16123);
var inst_16127 = inst_16126;
var state_16181__$1 = state_16181;
if(cljs.core.truth_(inst_16127)){
var statearr_16229_16297 = state_16181__$1;
(statearr_16229_16297[(1)] = (27));

} else {
var statearr_16230_16298 = state_16181__$1;
(statearr_16230_16298[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (34))){
var state_16181__$1 = state_16181;
var statearr_16231_16299 = state_16181__$1;
(statearr_16231_16299[(2)] = null);

(statearr_16231_16299[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (17))){
var state_16181__$1 = state_16181;
var statearr_16232_16300 = state_16181__$1;
(statearr_16232_16300[(2)] = null);

(statearr_16232_16300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (3))){
var inst_16179 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16181__$1,inst_16179);
} else {
if((state_val_16182 === (12))){
var inst_16108 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16233_16301 = state_16181__$1;
(statearr_16233_16301[(2)] = inst_16108);

(statearr_16233_16301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (2))){
var state_16181__$1 = state_16181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16181__$1,(4),ch);
} else {
if((state_val_16182 === (23))){
var state_16181__$1 = state_16181;
var statearr_16234_16302 = state_16181__$1;
(statearr_16234_16302[(2)] = null);

(statearr_16234_16302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (35))){
var inst_16163 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16235_16303 = state_16181__$1;
(statearr_16235_16303[(2)] = inst_16163);

(statearr_16235_16303[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (19))){
var inst_16082 = (state_16181[(7)]);
var inst_16086 = cljs.core.chunk_first.call(null,inst_16082);
var inst_16087 = cljs.core.chunk_rest.call(null,inst_16082);
var inst_16088 = cljs.core.count.call(null,inst_16086);
var inst_16062 = inst_16087;
var inst_16063 = inst_16086;
var inst_16064 = inst_16088;
var inst_16065 = (0);
var state_16181__$1 = (function (){var statearr_16236 = state_16181;
(statearr_16236[(13)] = inst_16062);

(statearr_16236[(15)] = inst_16063);

(statearr_16236[(16)] = inst_16065);

(statearr_16236[(17)] = inst_16064);

return statearr_16236;
})();
var statearr_16237_16304 = state_16181__$1;
(statearr_16237_16304[(2)] = null);

(statearr_16237_16304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (11))){
var inst_16062 = (state_16181[(13)]);
var inst_16082 = (state_16181[(7)]);
var inst_16082__$1 = cljs.core.seq.call(null,inst_16062);
var state_16181__$1 = (function (){var statearr_16238 = state_16181;
(statearr_16238[(7)] = inst_16082__$1);

return statearr_16238;
})();
if(inst_16082__$1){
var statearr_16239_16305 = state_16181__$1;
(statearr_16239_16305[(1)] = (16));

} else {
var statearr_16240_16306 = state_16181__$1;
(statearr_16240_16306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (9))){
var inst_16110 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16241_16307 = state_16181__$1;
(statearr_16241_16307[(2)] = inst_16110);

(statearr_16241_16307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (5))){
var inst_16060 = cljs.core.deref.call(null,cs);
var inst_16061 = cljs.core.seq.call(null,inst_16060);
var inst_16062 = inst_16061;
var inst_16063 = null;
var inst_16064 = (0);
var inst_16065 = (0);
var state_16181__$1 = (function (){var statearr_16242 = state_16181;
(statearr_16242[(13)] = inst_16062);

(statearr_16242[(15)] = inst_16063);

(statearr_16242[(16)] = inst_16065);

(statearr_16242[(17)] = inst_16064);

return statearr_16242;
})();
var statearr_16243_16308 = state_16181__$1;
(statearr_16243_16308[(2)] = null);

(statearr_16243_16308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (14))){
var state_16181__$1 = state_16181;
var statearr_16244_16309 = state_16181__$1;
(statearr_16244_16309[(2)] = null);

(statearr_16244_16309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (45))){
var inst_16171 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16245_16310 = state_16181__$1;
(statearr_16245_16310[(2)] = inst_16171);

(statearr_16245_16310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (26))){
var inst_16113 = (state_16181[(29)]);
var inst_16167 = (state_16181[(2)]);
var inst_16168 = cljs.core.seq.call(null,inst_16113);
var state_16181__$1 = (function (){var statearr_16246 = state_16181;
(statearr_16246[(31)] = inst_16167);

return statearr_16246;
})();
if(inst_16168){
var statearr_16247_16311 = state_16181__$1;
(statearr_16247_16311[(1)] = (42));

} else {
var statearr_16248_16312 = state_16181__$1;
(statearr_16248_16312[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (16))){
var inst_16082 = (state_16181[(7)]);
var inst_16084 = cljs.core.chunked_seq_QMARK_.call(null,inst_16082);
var state_16181__$1 = state_16181;
if(inst_16084){
var statearr_16249_16313 = state_16181__$1;
(statearr_16249_16313[(1)] = (19));

} else {
var statearr_16250_16314 = state_16181__$1;
(statearr_16250_16314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (38))){
var inst_16160 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16251_16315 = state_16181__$1;
(statearr_16251_16315[(2)] = inst_16160);

(statearr_16251_16315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (30))){
var state_16181__$1 = state_16181;
var statearr_16252_16316 = state_16181__$1;
(statearr_16252_16316[(2)] = null);

(statearr_16252_16316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (10))){
var inst_16063 = (state_16181[(15)]);
var inst_16065 = (state_16181[(16)]);
var inst_16071 = cljs.core._nth.call(null,inst_16063,inst_16065);
var inst_16072 = cljs.core.nth.call(null,inst_16071,(0),null);
var inst_16073 = cljs.core.nth.call(null,inst_16071,(1),null);
var state_16181__$1 = (function (){var statearr_16253 = state_16181;
(statearr_16253[(26)] = inst_16072);

return statearr_16253;
})();
if(cljs.core.truth_(inst_16073)){
var statearr_16254_16317 = state_16181__$1;
(statearr_16254_16317[(1)] = (13));

} else {
var statearr_16255_16318 = state_16181__$1;
(statearr_16255_16318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (18))){
var inst_16106 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16256_16319 = state_16181__$1;
(statearr_16256_16319[(2)] = inst_16106);

(statearr_16256_16319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (42))){
var state_16181__$1 = state_16181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16181__$1,(45),dchan);
} else {
if((state_val_16182 === (37))){
var inst_16053 = (state_16181[(10)]);
var inst_16149 = (state_16181[(23)]);
var inst_16140 = (state_16181[(25)]);
var inst_16149__$1 = cljs.core.first.call(null,inst_16140);
var inst_16150 = cljs.core.async.put_BANG_.call(null,inst_16149__$1,inst_16053,done);
var state_16181__$1 = (function (){var statearr_16257 = state_16181;
(statearr_16257[(23)] = inst_16149__$1);

return statearr_16257;
})();
if(cljs.core.truth_(inst_16150)){
var statearr_16258_16320 = state_16181__$1;
(statearr_16258_16320[(1)] = (39));

} else {
var statearr_16259_16321 = state_16181__$1;
(statearr_16259_16321[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16182 === (8))){
var inst_16065 = (state_16181[(16)]);
var inst_16064 = (state_16181[(17)]);
var inst_16067 = (inst_16065 < inst_16064);
var inst_16068 = inst_16067;
var state_16181__$1 = state_16181;
if(cljs.core.truth_(inst_16068)){
var statearr_16260_16322 = state_16181__$1;
(statearr_16260_16322[(1)] = (10));

} else {
var statearr_16261_16323 = state_16181__$1;
(statearr_16261_16323[(1)] = (11));

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
});})(c__7304__auto___16269,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___16269,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16265[(0)] = state_machine__7249__auto__);

(statearr_16265[(1)] = (1));

return statearr_16265;
});
var state_machine__7249__auto____1 = (function (state_16181){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16266){if((e16266 instanceof Object)){
var ex__7252__auto__ = e16266;
var statearr_16267_16324 = state_16181;
(statearr_16267_16324[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16325 = state_16181;
state_16181 = G__16325;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16181){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16269,cs,m,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_16268 = f__7305__auto__.call(null);
(statearr_16268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16269);

return statearr_16268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16269,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16327 = {};
return obj16327;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16328){
var map__16333 = p__16328;
var map__16333__$1 = ((cljs.core.seq_QMARK_.call(null,map__16333))?cljs.core.apply.call(null,cljs.core.hash_map,map__16333):map__16333);
var opts = map__16333__$1;
var statearr_16334_16337 = state;
(statearr_16334_16337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16333,map__16333__$1,opts){
return (function (val){
var statearr_16335_16338 = state;
(statearr_16335_16338[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16333,map__16333__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16336_16339 = state;
(statearr_16336_16339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16328 = null;
if (arguments.length > 3) {
  p__16328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16328);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16340){
var state = cljs.core.first(arglist__16340);
arglist__16340 = cljs.core.next(arglist__16340);
var cont_block = cljs.core.first(arglist__16340);
arglist__16340 = cljs.core.next(arglist__16340);
var ports = cljs.core.first(arglist__16340);
var p__16328 = cljs.core.rest(arglist__16340);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16328);
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
if(typeof cljs.core.async.t16460 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16460 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16461){
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
this.meta16461 = meta16461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16460.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16460.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16460.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16462){
var self__ = this;
var _16462__$1 = this;
return self__.meta16461;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16462,meta16461__$1){
var self__ = this;
var _16462__$1 = this;
return (new cljs.core.async.t16460(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16461__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16460.cljs$lang$type = true;

cljs.core.async.t16460.cljs$lang$ctorStr = "cljs.core.async/t16460";

cljs.core.async.t16460.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16460");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16460 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16461){
return (new cljs.core.async.t16460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16461));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16460(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16532){
var state_val_16533 = (state_16532[(1)]);
if((state_val_16533 === (7))){
var inst_16476 = (state_16532[(7)]);
var inst_16481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16476);
var state_16532__$1 = state_16532;
var statearr_16534_16580 = state_16532__$1;
(statearr_16534_16580[(2)] = inst_16481);

(statearr_16534_16580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (20))){
var inst_16491 = (state_16532[(8)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16532__$1,(23),out,inst_16491);
} else {
if((state_val_16533 === (1))){
var inst_16466 = (state_16532[(9)]);
var inst_16466__$1 = calc_state.call(null);
var inst_16467 = cljs.core.seq_QMARK_.call(null,inst_16466__$1);
var state_16532__$1 = (function (){var statearr_16535 = state_16532;
(statearr_16535[(9)] = inst_16466__$1);

return statearr_16535;
})();
if(inst_16467){
var statearr_16536_16581 = state_16532__$1;
(statearr_16536_16581[(1)] = (2));

} else {
var statearr_16537_16582 = state_16532__$1;
(statearr_16537_16582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (24))){
var inst_16484 = (state_16532[(10)]);
var inst_16476 = inst_16484;
var state_16532__$1 = (function (){var statearr_16538 = state_16532;
(statearr_16538[(7)] = inst_16476);

return statearr_16538;
})();
var statearr_16539_16583 = state_16532__$1;
(statearr_16539_16583[(2)] = null);

(statearr_16539_16583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (4))){
var inst_16466 = (state_16532[(9)]);
var inst_16472 = (state_16532[(2)]);
var inst_16473 = cljs.core.get.call(null,inst_16472,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16474 = cljs.core.get.call(null,inst_16472,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16475 = cljs.core.get.call(null,inst_16472,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16476 = inst_16466;
var state_16532__$1 = (function (){var statearr_16540 = state_16532;
(statearr_16540[(7)] = inst_16476);

(statearr_16540[(11)] = inst_16475);

(statearr_16540[(12)] = inst_16474);

(statearr_16540[(13)] = inst_16473);

return statearr_16540;
})();
var statearr_16541_16584 = state_16532__$1;
(statearr_16541_16584[(2)] = null);

(statearr_16541_16584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (15))){
var state_16532__$1 = state_16532;
var statearr_16542_16585 = state_16532__$1;
(statearr_16542_16585[(2)] = null);

(statearr_16542_16585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (21))){
var inst_16484 = (state_16532[(10)]);
var inst_16476 = inst_16484;
var state_16532__$1 = (function (){var statearr_16543 = state_16532;
(statearr_16543[(7)] = inst_16476);

return statearr_16543;
})();
var statearr_16544_16586 = state_16532__$1;
(statearr_16544_16586[(2)] = null);

(statearr_16544_16586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (13))){
var inst_16528 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16545_16587 = state_16532__$1;
(statearr_16545_16587[(2)] = inst_16528);

(statearr_16545_16587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (22))){
var inst_16526 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16546_16588 = state_16532__$1;
(statearr_16546_16588[(2)] = inst_16526);

(statearr_16546_16588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (6))){
var inst_16530 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16532__$1,inst_16530);
} else {
if((state_val_16533 === (25))){
var state_16532__$1 = state_16532;
var statearr_16547_16589 = state_16532__$1;
(statearr_16547_16589[(2)] = null);

(statearr_16547_16589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (17))){
var inst_16506 = (state_16532[(14)]);
var state_16532__$1 = state_16532;
var statearr_16548_16590 = state_16532__$1;
(statearr_16548_16590[(2)] = inst_16506);

(statearr_16548_16590[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (3))){
var inst_16466 = (state_16532[(9)]);
var state_16532__$1 = state_16532;
var statearr_16549_16591 = state_16532__$1;
(statearr_16549_16591[(2)] = inst_16466);

(statearr_16549_16591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (12))){
var inst_16492 = (state_16532[(15)]);
var inst_16487 = (state_16532[(16)]);
var inst_16506 = (state_16532[(14)]);
var inst_16506__$1 = inst_16487.call(null,inst_16492);
var state_16532__$1 = (function (){var statearr_16550 = state_16532;
(statearr_16550[(14)] = inst_16506__$1);

return statearr_16550;
})();
if(cljs.core.truth_(inst_16506__$1)){
var statearr_16551_16592 = state_16532__$1;
(statearr_16551_16592[(1)] = (17));

} else {
var statearr_16552_16593 = state_16532__$1;
(statearr_16552_16593[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (2))){
var inst_16466 = (state_16532[(9)]);
var inst_16469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16466);
var state_16532__$1 = state_16532;
var statearr_16553_16594 = state_16532__$1;
(statearr_16553_16594[(2)] = inst_16469);

(statearr_16553_16594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (23))){
var inst_16517 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16517)){
var statearr_16554_16595 = state_16532__$1;
(statearr_16554_16595[(1)] = (24));

} else {
var statearr_16555_16596 = state_16532__$1;
(statearr_16555_16596[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (19))){
var inst_16514 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16514)){
var statearr_16556_16597 = state_16532__$1;
(statearr_16556_16597[(1)] = (20));

} else {
var statearr_16557_16598 = state_16532__$1;
(statearr_16557_16598[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (11))){
var inst_16491 = (state_16532[(8)]);
var inst_16497 = (inst_16491 == null);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16497)){
var statearr_16558_16599 = state_16532__$1;
(statearr_16558_16599[(1)] = (14));

} else {
var statearr_16559_16600 = state_16532__$1;
(statearr_16559_16600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (9))){
var inst_16484 = (state_16532[(10)]);
var inst_16484__$1 = (state_16532[(2)]);
var inst_16485 = cljs.core.get.call(null,inst_16484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16486 = cljs.core.get.call(null,inst_16484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16487 = cljs.core.get.call(null,inst_16484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16532__$1 = (function (){var statearr_16560 = state_16532;
(statearr_16560[(17)] = inst_16486);

(statearr_16560[(16)] = inst_16487);

(statearr_16560[(10)] = inst_16484__$1);

return statearr_16560;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16532__$1,(10),inst_16485);
} else {
if((state_val_16533 === (5))){
var inst_16476 = (state_16532[(7)]);
var inst_16479 = cljs.core.seq_QMARK_.call(null,inst_16476);
var state_16532__$1 = state_16532;
if(inst_16479){
var statearr_16561_16601 = state_16532__$1;
(statearr_16561_16601[(1)] = (7));

} else {
var statearr_16562_16602 = state_16532__$1;
(statearr_16562_16602[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (14))){
var inst_16492 = (state_16532[(15)]);
var inst_16499 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16492);
var state_16532__$1 = state_16532;
var statearr_16563_16603 = state_16532__$1;
(statearr_16563_16603[(2)] = inst_16499);

(statearr_16563_16603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (26))){
var inst_16522 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16564_16604 = state_16532__$1;
(statearr_16564_16604[(2)] = inst_16522);

(statearr_16564_16604[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (16))){
var inst_16502 = (state_16532[(2)]);
var inst_16503 = calc_state.call(null);
var inst_16476 = inst_16503;
var state_16532__$1 = (function (){var statearr_16565 = state_16532;
(statearr_16565[(7)] = inst_16476);

(statearr_16565[(18)] = inst_16502);

return statearr_16565;
})();
var statearr_16566_16605 = state_16532__$1;
(statearr_16566_16605[(2)] = null);

(statearr_16566_16605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (10))){
var inst_16492 = (state_16532[(15)]);
var inst_16491 = (state_16532[(8)]);
var inst_16490 = (state_16532[(2)]);
var inst_16491__$1 = cljs.core.nth.call(null,inst_16490,(0),null);
var inst_16492__$1 = cljs.core.nth.call(null,inst_16490,(1),null);
var inst_16493 = (inst_16491__$1 == null);
var inst_16494 = cljs.core._EQ_.call(null,inst_16492__$1,change);
var inst_16495 = (inst_16493) || (inst_16494);
var state_16532__$1 = (function (){var statearr_16567 = state_16532;
(statearr_16567[(15)] = inst_16492__$1);

(statearr_16567[(8)] = inst_16491__$1);

return statearr_16567;
})();
if(cljs.core.truth_(inst_16495)){
var statearr_16568_16606 = state_16532__$1;
(statearr_16568_16606[(1)] = (11));

} else {
var statearr_16569_16607 = state_16532__$1;
(statearr_16569_16607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (18))){
var inst_16492 = (state_16532[(15)]);
var inst_16486 = (state_16532[(17)]);
var inst_16487 = (state_16532[(16)]);
var inst_16509 = cljs.core.empty_QMARK_.call(null,inst_16487);
var inst_16510 = inst_16486.call(null,inst_16492);
var inst_16511 = cljs.core.not.call(null,inst_16510);
var inst_16512 = (inst_16509) && (inst_16511);
var state_16532__$1 = state_16532;
var statearr_16570_16608 = state_16532__$1;
(statearr_16570_16608[(2)] = inst_16512);

(statearr_16570_16608[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (8))){
var inst_16476 = (state_16532[(7)]);
var state_16532__$1 = state_16532;
var statearr_16571_16609 = state_16532__$1;
(statearr_16571_16609[(2)] = inst_16476);

(statearr_16571_16609[(1)] = (9));


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
});})(c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16575[(0)] = state_machine__7249__auto__);

(statearr_16575[(1)] = (1));

return statearr_16575;
});
var state_machine__7249__auto____1 = (function (state_16532){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16576){if((e16576 instanceof Object)){
var ex__7252__auto__ = e16576;
var statearr_16577_16610 = state_16532;
(statearr_16577_16610[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16611 = state_16532;
state_16532 = G__16611;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16532){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7306__auto__ = (function (){var statearr_16578 = f__7305__auto__.call(null);
(statearr_16578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16579);

return statearr_16578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16613 = {};
return obj16613;
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
return (function (p1__16614_SHARP_){
if(cljs.core.truth_(p1__16614_SHARP_.call(null,topic))){
return p1__16614_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16614_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16737 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16737 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16738){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16738 = meta16738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16737.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16737.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16737.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16737.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16739){
var self__ = this;
var _16739__$1 = this;
return self__.meta16738;
});})(mults,ensure_mult))
;

cljs.core.async.t16737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16739,meta16738__$1){
var self__ = this;
var _16739__$1 = this;
return (new cljs.core.async.t16737(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16738__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16737.cljs$lang$type = true;

cljs.core.async.t16737.cljs$lang$ctorStr = "cljs.core.async/t16737";

cljs.core.async.t16737.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16737");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16737 = ((function (mults,ensure_mult){
return (function __GT_t16737(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16738){
return (new cljs.core.async.t16737(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16738));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16737(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16859,mults,ensure_mult,p){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16859,mults,ensure_mult,p){
return (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (7))){
var inst_16807 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16813_16860 = state_16811__$1;
(statearr_16813_16860[(2)] = inst_16807);

(statearr_16813_16860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (20))){
var state_16811__$1 = state_16811;
var statearr_16814_16861 = state_16811__$1;
(statearr_16814_16861[(2)] = null);

(statearr_16814_16861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (1))){
var state_16811__$1 = state_16811;
var statearr_16815_16862 = state_16811__$1;
(statearr_16815_16862[(2)] = null);

(statearr_16815_16862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (24))){
var inst_16790 = (state_16811[(7)]);
var inst_16799 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16790);
var state_16811__$1 = state_16811;
var statearr_16816_16863 = state_16811__$1;
(statearr_16816_16863[(2)] = inst_16799);

(statearr_16816_16863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (4))){
var inst_16742 = (state_16811[(8)]);
var inst_16742__$1 = (state_16811[(2)]);
var inst_16743 = (inst_16742__$1 == null);
var state_16811__$1 = (function (){var statearr_16817 = state_16811;
(statearr_16817[(8)] = inst_16742__$1);

return statearr_16817;
})();
if(cljs.core.truth_(inst_16743)){
var statearr_16818_16864 = state_16811__$1;
(statearr_16818_16864[(1)] = (5));

} else {
var statearr_16819_16865 = state_16811__$1;
(statearr_16819_16865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (15))){
var inst_16784 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16820_16866 = state_16811__$1;
(statearr_16820_16866[(2)] = inst_16784);

(statearr_16820_16866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (21))){
var inst_16804 = (state_16811[(2)]);
var state_16811__$1 = (function (){var statearr_16821 = state_16811;
(statearr_16821[(9)] = inst_16804);

return statearr_16821;
})();
var statearr_16822_16867 = state_16811__$1;
(statearr_16822_16867[(2)] = null);

(statearr_16822_16867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (13))){
var inst_16766 = (state_16811[(10)]);
var inst_16768 = cljs.core.chunked_seq_QMARK_.call(null,inst_16766);
var state_16811__$1 = state_16811;
if(inst_16768){
var statearr_16823_16868 = state_16811__$1;
(statearr_16823_16868[(1)] = (16));

} else {
var statearr_16824_16869 = state_16811__$1;
(statearr_16824_16869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (22))){
var inst_16796 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16796)){
var statearr_16825_16870 = state_16811__$1;
(statearr_16825_16870[(1)] = (23));

} else {
var statearr_16826_16871 = state_16811__$1;
(statearr_16826_16871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (6))){
var inst_16792 = (state_16811[(11)]);
var inst_16790 = (state_16811[(7)]);
var inst_16742 = (state_16811[(8)]);
var inst_16790__$1 = topic_fn.call(null,inst_16742);
var inst_16791 = cljs.core.deref.call(null,mults);
var inst_16792__$1 = cljs.core.get.call(null,inst_16791,inst_16790__$1);
var state_16811__$1 = (function (){var statearr_16827 = state_16811;
(statearr_16827[(11)] = inst_16792__$1);

(statearr_16827[(7)] = inst_16790__$1);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16792__$1)){
var statearr_16828_16872 = state_16811__$1;
(statearr_16828_16872[(1)] = (19));

} else {
var statearr_16829_16873 = state_16811__$1;
(statearr_16829_16873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (25))){
var inst_16801 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16830_16874 = state_16811__$1;
(statearr_16830_16874[(2)] = inst_16801);

(statearr_16830_16874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (17))){
var inst_16766 = (state_16811[(10)]);
var inst_16775 = cljs.core.first.call(null,inst_16766);
var inst_16776 = cljs.core.async.muxch_STAR_.call(null,inst_16775);
var inst_16777 = cljs.core.async.close_BANG_.call(null,inst_16776);
var inst_16778 = cljs.core.next.call(null,inst_16766);
var inst_16752 = inst_16778;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16831 = state_16811;
(statearr_16831[(12)] = inst_16777);

(statearr_16831[(13)] = inst_16754);

(statearr_16831[(14)] = inst_16753);

(statearr_16831[(15)] = inst_16755);

(statearr_16831[(16)] = inst_16752);

return statearr_16831;
})();
var statearr_16832_16875 = state_16811__$1;
(statearr_16832_16875[(2)] = null);

(statearr_16832_16875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (3))){
var inst_16809 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16811__$1,inst_16809);
} else {
if((state_val_16812 === (12))){
var inst_16786 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16833_16876 = state_16811__$1;
(statearr_16833_16876[(2)] = inst_16786);

(statearr_16833_16876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (2))){
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,(4),ch);
} else {
if((state_val_16812 === (23))){
var state_16811__$1 = state_16811;
var statearr_16834_16877 = state_16811__$1;
(statearr_16834_16877[(2)] = null);

(statearr_16834_16877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (19))){
var inst_16792 = (state_16811[(11)]);
var inst_16742 = (state_16811[(8)]);
var inst_16794 = cljs.core.async.muxch_STAR_.call(null,inst_16792);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16811__$1,(22),inst_16794,inst_16742);
} else {
if((state_val_16812 === (11))){
var inst_16766 = (state_16811[(10)]);
var inst_16752 = (state_16811[(16)]);
var inst_16766__$1 = cljs.core.seq.call(null,inst_16752);
var state_16811__$1 = (function (){var statearr_16835 = state_16811;
(statearr_16835[(10)] = inst_16766__$1);

return statearr_16835;
})();
if(inst_16766__$1){
var statearr_16836_16878 = state_16811__$1;
(statearr_16836_16878[(1)] = (13));

} else {
var statearr_16837_16879 = state_16811__$1;
(statearr_16837_16879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (9))){
var inst_16788 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16838_16880 = state_16811__$1;
(statearr_16838_16880[(2)] = inst_16788);

(statearr_16838_16880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (5))){
var inst_16749 = cljs.core.deref.call(null,mults);
var inst_16750 = cljs.core.vals.call(null,inst_16749);
var inst_16751 = cljs.core.seq.call(null,inst_16750);
var inst_16752 = inst_16751;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16839 = state_16811;
(statearr_16839[(13)] = inst_16754);

(statearr_16839[(14)] = inst_16753);

(statearr_16839[(15)] = inst_16755);

(statearr_16839[(16)] = inst_16752);

return statearr_16839;
})();
var statearr_16840_16881 = state_16811__$1;
(statearr_16840_16881[(2)] = null);

(statearr_16840_16881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (14))){
var state_16811__$1 = state_16811;
var statearr_16844_16882 = state_16811__$1;
(statearr_16844_16882[(2)] = null);

(statearr_16844_16882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (16))){
var inst_16766 = (state_16811[(10)]);
var inst_16770 = cljs.core.chunk_first.call(null,inst_16766);
var inst_16771 = cljs.core.chunk_rest.call(null,inst_16766);
var inst_16772 = cljs.core.count.call(null,inst_16770);
var inst_16752 = inst_16771;
var inst_16753 = inst_16770;
var inst_16754 = inst_16772;
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16845 = state_16811;
(statearr_16845[(13)] = inst_16754);

(statearr_16845[(14)] = inst_16753);

(statearr_16845[(15)] = inst_16755);

(statearr_16845[(16)] = inst_16752);

return statearr_16845;
})();
var statearr_16846_16883 = state_16811__$1;
(statearr_16846_16883[(2)] = null);

(statearr_16846_16883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (10))){
var inst_16754 = (state_16811[(13)]);
var inst_16753 = (state_16811[(14)]);
var inst_16755 = (state_16811[(15)]);
var inst_16752 = (state_16811[(16)]);
var inst_16760 = cljs.core._nth.call(null,inst_16753,inst_16755);
var inst_16761 = cljs.core.async.muxch_STAR_.call(null,inst_16760);
var inst_16762 = cljs.core.async.close_BANG_.call(null,inst_16761);
var inst_16763 = (inst_16755 + (1));
var tmp16841 = inst_16754;
var tmp16842 = inst_16753;
var tmp16843 = inst_16752;
var inst_16752__$1 = tmp16843;
var inst_16753__$1 = tmp16842;
var inst_16754__$1 = tmp16841;
var inst_16755__$1 = inst_16763;
var state_16811__$1 = (function (){var statearr_16847 = state_16811;
(statearr_16847[(17)] = inst_16762);

(statearr_16847[(13)] = inst_16754__$1);

(statearr_16847[(14)] = inst_16753__$1);

(statearr_16847[(15)] = inst_16755__$1);

(statearr_16847[(16)] = inst_16752__$1);

return statearr_16847;
})();
var statearr_16848_16884 = state_16811__$1;
(statearr_16848_16884[(2)] = null);

(statearr_16848_16884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (18))){
var inst_16781 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16849_16885 = state_16811__$1;
(statearr_16849_16885[(2)] = inst_16781);

(statearr_16849_16885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (8))){
var inst_16754 = (state_16811[(13)]);
var inst_16755 = (state_16811[(15)]);
var inst_16757 = (inst_16755 < inst_16754);
var inst_16758 = inst_16757;
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16758)){
var statearr_16850_16886 = state_16811__$1;
(statearr_16850_16886[(1)] = (10));

} else {
var statearr_16851_16887 = state_16811__$1;
(statearr_16851_16887[(1)] = (11));

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
});})(c__7304__auto___16859,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7304__auto___16859,mults,ensure_mult,p){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16855[(0)] = state_machine__7249__auto__);

(statearr_16855[(1)] = (1));

return statearr_16855;
});
var state_machine__7249__auto____1 = (function (state_16811){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16856){if((e16856 instanceof Object)){
var ex__7252__auto__ = e16856;
var statearr_16857_16888 = state_16811;
(statearr_16857_16888[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16889 = state_16811;
state_16811 = G__16889;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16859,mults,ensure_mult,p))
})();
var state__7306__auto__ = (function (){var statearr_16858 = f__7305__auto__.call(null);
(statearr_16858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16859);

return statearr_16858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16859,mults,ensure_mult,p))
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
var c__7304__auto___17026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16996){
var state_val_16997 = (state_16996[(1)]);
if((state_val_16997 === (7))){
var state_16996__$1 = state_16996;
var statearr_16998_17027 = state_16996__$1;
(statearr_16998_17027[(2)] = null);

(statearr_16998_17027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (1))){
var state_16996__$1 = state_16996;
var statearr_16999_17028 = state_16996__$1;
(statearr_16999_17028[(2)] = null);

(statearr_16999_17028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (4))){
var inst_16960 = (state_16996[(7)]);
var inst_16962 = (inst_16960 < cnt);
var state_16996__$1 = state_16996;
if(cljs.core.truth_(inst_16962)){
var statearr_17000_17029 = state_16996__$1;
(statearr_17000_17029[(1)] = (6));

} else {
var statearr_17001_17030 = state_16996__$1;
(statearr_17001_17030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (15))){
var inst_16992 = (state_16996[(2)]);
var state_16996__$1 = state_16996;
var statearr_17002_17031 = state_16996__$1;
(statearr_17002_17031[(2)] = inst_16992);

(statearr_17002_17031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (13))){
var inst_16985 = cljs.core.async.close_BANG_.call(null,out);
var state_16996__$1 = state_16996;
var statearr_17003_17032 = state_16996__$1;
(statearr_17003_17032[(2)] = inst_16985);

(statearr_17003_17032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (6))){
var state_16996__$1 = state_16996;
var statearr_17004_17033 = state_16996__$1;
(statearr_17004_17033[(2)] = null);

(statearr_17004_17033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (3))){
var inst_16994 = (state_16996[(2)]);
var state_16996__$1 = state_16996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16996__$1,inst_16994);
} else {
if((state_val_16997 === (12))){
var inst_16982 = (state_16996[(8)]);
var inst_16982__$1 = (state_16996[(2)]);
var inst_16983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16982__$1);
var state_16996__$1 = (function (){var statearr_17005 = state_16996;
(statearr_17005[(8)] = inst_16982__$1);

return statearr_17005;
})();
if(cljs.core.truth_(inst_16983)){
var statearr_17006_17034 = state_16996__$1;
(statearr_17006_17034[(1)] = (13));

} else {
var statearr_17007_17035 = state_16996__$1;
(statearr_17007_17035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (2))){
var inst_16959 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16960 = (0);
var state_16996__$1 = (function (){var statearr_17008 = state_16996;
(statearr_17008[(7)] = inst_16960);

(statearr_17008[(9)] = inst_16959);

return statearr_17008;
})();
var statearr_17009_17036 = state_16996__$1;
(statearr_17009_17036[(2)] = null);

(statearr_17009_17036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (11))){
var inst_16960 = (state_16996[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16996,(10),Object,null,(9));
var inst_16969 = chs__$1.call(null,inst_16960);
var inst_16970 = done.call(null,inst_16960);
var inst_16971 = cljs.core.async.take_BANG_.call(null,inst_16969,inst_16970);
var state_16996__$1 = state_16996;
var statearr_17010_17037 = state_16996__$1;
(statearr_17010_17037[(2)] = inst_16971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (9))){
var inst_16960 = (state_16996[(7)]);
var inst_16973 = (state_16996[(2)]);
var inst_16974 = (inst_16960 + (1));
var inst_16960__$1 = inst_16974;
var state_16996__$1 = (function (){var statearr_17011 = state_16996;
(statearr_17011[(10)] = inst_16973);

(statearr_17011[(7)] = inst_16960__$1);

return statearr_17011;
})();
var statearr_17012_17038 = state_16996__$1;
(statearr_17012_17038[(2)] = null);

(statearr_17012_17038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (5))){
var inst_16980 = (state_16996[(2)]);
var state_16996__$1 = (function (){var statearr_17013 = state_16996;
(statearr_17013[(11)] = inst_16980);

return statearr_17013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16996__$1,(12),dchan);
} else {
if((state_val_16997 === (14))){
var inst_16982 = (state_16996[(8)]);
var inst_16987 = cljs.core.apply.call(null,f,inst_16982);
var state_16996__$1 = state_16996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16996__$1,(16),out,inst_16987);
} else {
if((state_val_16997 === (16))){
var inst_16989 = (state_16996[(2)]);
var state_16996__$1 = (function (){var statearr_17014 = state_16996;
(statearr_17014[(12)] = inst_16989);

return statearr_17014;
})();
var statearr_17015_17039 = state_16996__$1;
(statearr_17015_17039[(2)] = null);

(statearr_17015_17039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (10))){
var inst_16964 = (state_16996[(2)]);
var inst_16965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16996__$1 = (function (){var statearr_17016 = state_16996;
(statearr_17016[(13)] = inst_16964);

return statearr_17016;
})();
var statearr_17017_17040 = state_16996__$1;
(statearr_17017_17040[(2)] = inst_16965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16997 === (8))){
var inst_16978 = (state_16996[(2)]);
var state_16996__$1 = state_16996;
var statearr_17018_17041 = state_16996__$1;
(statearr_17018_17041[(2)] = inst_16978);

(statearr_17018_17041[(1)] = (5));


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
});})(c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17022[(0)] = state_machine__7249__auto__);

(statearr_17022[(1)] = (1));

return statearr_17022;
});
var state_machine__7249__auto____1 = (function (state_16996){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17023){if((e17023 instanceof Object)){
var ex__7252__auto__ = e17023;
var statearr_17024_17042 = state_16996;
(statearr_17024_17042[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17043 = state_16996;
state_16996 = G__17043;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16996){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_17025 = f__7305__auto__.call(null);
(statearr_17025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17026);

return statearr_17025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17026,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7304__auto___17151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17151,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17151,out){
return (function (state_17127){
var state_val_17128 = (state_17127[(1)]);
if((state_val_17128 === (7))){
var inst_17107 = (state_17127[(7)]);
var inst_17106 = (state_17127[(8)]);
var inst_17106__$1 = (state_17127[(2)]);
var inst_17107__$1 = cljs.core.nth.call(null,inst_17106__$1,(0),null);
var inst_17108 = cljs.core.nth.call(null,inst_17106__$1,(1),null);
var inst_17109 = (inst_17107__$1 == null);
var state_17127__$1 = (function (){var statearr_17129 = state_17127;
(statearr_17129[(7)] = inst_17107__$1);

(statearr_17129[(9)] = inst_17108);

(statearr_17129[(8)] = inst_17106__$1);

return statearr_17129;
})();
if(cljs.core.truth_(inst_17109)){
var statearr_17130_17152 = state_17127__$1;
(statearr_17130_17152[(1)] = (8));

} else {
var statearr_17131_17153 = state_17127__$1;
(statearr_17131_17153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (1))){
var inst_17098 = cljs.core.vec.call(null,chs);
var inst_17099 = inst_17098;
var state_17127__$1 = (function (){var statearr_17132 = state_17127;
(statearr_17132[(10)] = inst_17099);

return statearr_17132;
})();
var statearr_17133_17154 = state_17127__$1;
(statearr_17133_17154[(2)] = null);

(statearr_17133_17154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (4))){
var inst_17099 = (state_17127[(10)]);
var state_17127__$1 = state_17127;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17127__$1,(7),inst_17099);
} else {
if((state_val_17128 === (6))){
var inst_17123 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
var statearr_17134_17155 = state_17127__$1;
(statearr_17134_17155[(2)] = inst_17123);

(statearr_17134_17155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (3))){
var inst_17125 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17127__$1,inst_17125);
} else {
if((state_val_17128 === (2))){
var inst_17099 = (state_17127[(10)]);
var inst_17101 = cljs.core.count.call(null,inst_17099);
var inst_17102 = (inst_17101 > (0));
var state_17127__$1 = state_17127;
if(cljs.core.truth_(inst_17102)){
var statearr_17136_17156 = state_17127__$1;
(statearr_17136_17156[(1)] = (4));

} else {
var statearr_17137_17157 = state_17127__$1;
(statearr_17137_17157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (11))){
var inst_17099 = (state_17127[(10)]);
var inst_17116 = (state_17127[(2)]);
var tmp17135 = inst_17099;
var inst_17099__$1 = tmp17135;
var state_17127__$1 = (function (){var statearr_17138 = state_17127;
(statearr_17138[(11)] = inst_17116);

(statearr_17138[(10)] = inst_17099__$1);

return statearr_17138;
})();
var statearr_17139_17158 = state_17127__$1;
(statearr_17139_17158[(2)] = null);

(statearr_17139_17158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (9))){
var inst_17107 = (state_17127[(7)]);
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17127__$1,(11),out,inst_17107);
} else {
if((state_val_17128 === (5))){
var inst_17121 = cljs.core.async.close_BANG_.call(null,out);
var state_17127__$1 = state_17127;
var statearr_17140_17159 = state_17127__$1;
(statearr_17140_17159[(2)] = inst_17121);

(statearr_17140_17159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (10))){
var inst_17119 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
var statearr_17141_17160 = state_17127__$1;
(statearr_17141_17160[(2)] = inst_17119);

(statearr_17141_17160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (8))){
var inst_17107 = (state_17127[(7)]);
var inst_17099 = (state_17127[(10)]);
var inst_17108 = (state_17127[(9)]);
var inst_17106 = (state_17127[(8)]);
var inst_17111 = (function (){var c = inst_17108;
var v = inst_17107;
var vec__17104 = inst_17106;
var cs = inst_17099;
return ((function (c,v,vec__17104,cs,inst_17107,inst_17099,inst_17108,inst_17106,state_val_17128,c__7304__auto___17151,out){
return (function (p1__17044_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17044_SHARP_);
});
;})(c,v,vec__17104,cs,inst_17107,inst_17099,inst_17108,inst_17106,state_val_17128,c__7304__auto___17151,out))
})();
var inst_17112 = cljs.core.filterv.call(null,inst_17111,inst_17099);
var inst_17099__$1 = inst_17112;
var state_17127__$1 = (function (){var statearr_17142 = state_17127;
(statearr_17142[(10)] = inst_17099__$1);

return statearr_17142;
})();
var statearr_17143_17161 = state_17127__$1;
(statearr_17143_17161[(2)] = null);

(statearr_17143_17161[(1)] = (2));


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
});})(c__7304__auto___17151,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17151,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17147[(0)] = state_machine__7249__auto__);

(statearr_17147[(1)] = (1));

return statearr_17147;
});
var state_machine__7249__auto____1 = (function (state_17127){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17148){if((e17148 instanceof Object)){
var ex__7252__auto__ = e17148;
var statearr_17149_17162 = state_17127;
(statearr_17149_17162[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17163 = state_17127;
state_17127 = G__17163;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17127){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17151,out))
})();
var state__7306__auto__ = (function (){var statearr_17150 = f__7305__auto__.call(null);
(statearr_17150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17151);

return statearr_17150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17151,out))
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
var c__7304__auto___17256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17256,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17256,out){
return (function (state_17233){
var state_val_17234 = (state_17233[(1)]);
if((state_val_17234 === (7))){
var inst_17215 = (state_17233[(7)]);
var inst_17215__$1 = (state_17233[(2)]);
var inst_17216 = (inst_17215__$1 == null);
var inst_17217 = cljs.core.not.call(null,inst_17216);
var state_17233__$1 = (function (){var statearr_17235 = state_17233;
(statearr_17235[(7)] = inst_17215__$1);

return statearr_17235;
})();
if(inst_17217){
var statearr_17236_17257 = state_17233__$1;
(statearr_17236_17257[(1)] = (8));

} else {
var statearr_17237_17258 = state_17233__$1;
(statearr_17237_17258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (1))){
var inst_17210 = (0);
var state_17233__$1 = (function (){var statearr_17238 = state_17233;
(statearr_17238[(8)] = inst_17210);

return statearr_17238;
})();
var statearr_17239_17259 = state_17233__$1;
(statearr_17239_17259[(2)] = null);

(statearr_17239_17259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (4))){
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17233__$1,(7),ch);
} else {
if((state_val_17234 === (6))){
var inst_17228 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17240_17260 = state_17233__$1;
(statearr_17240_17260[(2)] = inst_17228);

(statearr_17240_17260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (3))){
var inst_17230 = (state_17233[(2)]);
var inst_17231 = cljs.core.async.close_BANG_.call(null,out);
var state_17233__$1 = (function (){var statearr_17241 = state_17233;
(statearr_17241[(9)] = inst_17230);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17233__$1,inst_17231);
} else {
if((state_val_17234 === (2))){
var inst_17210 = (state_17233[(8)]);
var inst_17212 = (inst_17210 < n);
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17212)){
var statearr_17242_17261 = state_17233__$1;
(statearr_17242_17261[(1)] = (4));

} else {
var statearr_17243_17262 = state_17233__$1;
(statearr_17243_17262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (11))){
var inst_17210 = (state_17233[(8)]);
var inst_17220 = (state_17233[(2)]);
var inst_17221 = (inst_17210 + (1));
var inst_17210__$1 = inst_17221;
var state_17233__$1 = (function (){var statearr_17244 = state_17233;
(statearr_17244[(8)] = inst_17210__$1);

(statearr_17244[(10)] = inst_17220);

return statearr_17244;
})();
var statearr_17245_17263 = state_17233__$1;
(statearr_17245_17263[(2)] = null);

(statearr_17245_17263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (9))){
var state_17233__$1 = state_17233;
var statearr_17246_17264 = state_17233__$1;
(statearr_17246_17264[(2)] = null);

(statearr_17246_17264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (5))){
var state_17233__$1 = state_17233;
var statearr_17247_17265 = state_17233__$1;
(statearr_17247_17265[(2)] = null);

(statearr_17247_17265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (10))){
var inst_17225 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17248_17266 = state_17233__$1;
(statearr_17248_17266[(2)] = inst_17225);

(statearr_17248_17266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (8))){
var inst_17215 = (state_17233[(7)]);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17233__$1,(11),out,inst_17215);
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
});})(c__7304__auto___17256,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17256,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17252[(0)] = state_machine__7249__auto__);

(statearr_17252[(1)] = (1));

return statearr_17252;
});
var state_machine__7249__auto____1 = (function (state_17233){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17253){if((e17253 instanceof Object)){
var ex__7252__auto__ = e17253;
var statearr_17254_17267 = state_17233;
(statearr_17254_17267[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17268 = state_17233;
state_17233 = G__17268;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17256,out))
})();
var state__7306__auto__ = (function (){var statearr_17255 = f__7305__auto__.call(null);
(statearr_17255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17256);

return statearr_17255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17256,out))
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
if(typeof cljs.core.async.t17276 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17276 = (function (ch,f,map_LT_,meta17277){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17277 = meta17277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17279 = (function (fn1,_,meta17277,map_LT_,f,ch,meta17280){
this.fn1 = fn1;
this._ = _;
this.meta17277 = meta17277;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17280 = meta17280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17269_SHARP_){
return f1.call(null,(((p1__17269_SHARP_ == null))?null:self__.f.call(null,p1__17269_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17281){
var self__ = this;
var _17281__$1 = this;
return self__.meta17280;
});})(___$1))
;

cljs.core.async.t17279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17281,meta17280__$1){
var self__ = this;
var _17281__$1 = this;
return (new cljs.core.async.t17279(self__.fn1,self__._,self__.meta17277,self__.map_LT_,self__.f,self__.ch,meta17280__$1));
});})(___$1))
;

cljs.core.async.t17279.cljs$lang$type = true;

cljs.core.async.t17279.cljs$lang$ctorStr = "cljs.core.async/t17279";

cljs.core.async.t17279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17279");
});})(___$1))
;

cljs.core.async.__GT_t17279 = ((function (___$1){
return (function __GT_t17279(fn1__$1,___$2,meta17277__$1,map_LT___$1,f__$1,ch__$1,meta17280){
return (new cljs.core.async.t17279(fn1__$1,___$2,meta17277__$1,map_LT___$1,f__$1,ch__$1,meta17280));
});})(___$1))
;

}

return (new cljs.core.async.t17279(fn1,___$1,self__.meta17277,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17278){
var self__ = this;
var _17278__$1 = this;
return self__.meta17277;
});

cljs.core.async.t17276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17278,meta17277__$1){
var self__ = this;
var _17278__$1 = this;
return (new cljs.core.async.t17276(self__.ch,self__.f,self__.map_LT_,meta17277__$1));
});

cljs.core.async.t17276.cljs$lang$type = true;

cljs.core.async.t17276.cljs$lang$ctorStr = "cljs.core.async/t17276";

cljs.core.async.t17276.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17276");
});

cljs.core.async.__GT_t17276 = (function __GT_t17276(ch__$1,f__$1,map_LT___$1,meta17277){
return (new cljs.core.async.t17276(ch__$1,f__$1,map_LT___$1,meta17277));
});

}

return (new cljs.core.async.t17276(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17285 = (function (ch,f,map_GT_,meta17286){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17286 = meta17286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17287){
var self__ = this;
var _17287__$1 = this;
return self__.meta17286;
});

cljs.core.async.t17285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17287,meta17286__$1){
var self__ = this;
var _17287__$1 = this;
return (new cljs.core.async.t17285(self__.ch,self__.f,self__.map_GT_,meta17286__$1));
});

cljs.core.async.t17285.cljs$lang$type = true;

cljs.core.async.t17285.cljs$lang$ctorStr = "cljs.core.async/t17285";

cljs.core.async.t17285.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17285");
});

cljs.core.async.__GT_t17285 = (function __GT_t17285(ch__$1,f__$1,map_GT___$1,meta17286){
return (new cljs.core.async.t17285(ch__$1,f__$1,map_GT___$1,meta17286));
});

}

return (new cljs.core.async.t17285(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17291 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17291 = (function (ch,p,filter_GT_,meta17292){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17292 = meta17292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17293){
var self__ = this;
var _17293__$1 = this;
return self__.meta17292;
});

cljs.core.async.t17291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17293,meta17292__$1){
var self__ = this;
var _17293__$1 = this;
return (new cljs.core.async.t17291(self__.ch,self__.p,self__.filter_GT_,meta17292__$1));
});

cljs.core.async.t17291.cljs$lang$type = true;

cljs.core.async.t17291.cljs$lang$ctorStr = "cljs.core.async/t17291";

cljs.core.async.t17291.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17291");
});

cljs.core.async.__GT_t17291 = (function __GT_t17291(ch__$1,p__$1,filter_GT___$1,meta17292){
return (new cljs.core.async.t17291(ch__$1,p__$1,filter_GT___$1,meta17292));
});

}

return (new cljs.core.async.t17291(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___17376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17376,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17376,out){
return (function (state_17355){
var state_val_17356 = (state_17355[(1)]);
if((state_val_17356 === (7))){
var inst_17351 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
var statearr_17357_17377 = state_17355__$1;
(statearr_17357_17377[(2)] = inst_17351);

(statearr_17357_17377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (1))){
var state_17355__$1 = state_17355;
var statearr_17358_17378 = state_17355__$1;
(statearr_17358_17378[(2)] = null);

(statearr_17358_17378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (4))){
var inst_17337 = (state_17355[(7)]);
var inst_17337__$1 = (state_17355[(2)]);
var inst_17338 = (inst_17337__$1 == null);
var state_17355__$1 = (function (){var statearr_17359 = state_17355;
(statearr_17359[(7)] = inst_17337__$1);

return statearr_17359;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17360_17379 = state_17355__$1;
(statearr_17360_17379[(1)] = (5));

} else {
var statearr_17361_17380 = state_17355__$1;
(statearr_17361_17380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (6))){
var inst_17337 = (state_17355[(7)]);
var inst_17342 = p.call(null,inst_17337);
var state_17355__$1 = state_17355;
if(cljs.core.truth_(inst_17342)){
var statearr_17362_17381 = state_17355__$1;
(statearr_17362_17381[(1)] = (8));

} else {
var statearr_17363_17382 = state_17355__$1;
(statearr_17363_17382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (3))){
var inst_17353 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17355__$1,inst_17353);
} else {
if((state_val_17356 === (2))){
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17355__$1,(4),ch);
} else {
if((state_val_17356 === (11))){
var inst_17345 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
var statearr_17364_17383 = state_17355__$1;
(statearr_17364_17383[(2)] = inst_17345);

(statearr_17364_17383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (9))){
var state_17355__$1 = state_17355;
var statearr_17365_17384 = state_17355__$1;
(statearr_17365_17384[(2)] = null);

(statearr_17365_17384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (5))){
var inst_17340 = cljs.core.async.close_BANG_.call(null,out);
var state_17355__$1 = state_17355;
var statearr_17366_17385 = state_17355__$1;
(statearr_17366_17385[(2)] = inst_17340);

(statearr_17366_17385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (10))){
var inst_17348 = (state_17355[(2)]);
var state_17355__$1 = (function (){var statearr_17367 = state_17355;
(statearr_17367[(8)] = inst_17348);

return statearr_17367;
})();
var statearr_17368_17386 = state_17355__$1;
(statearr_17368_17386[(2)] = null);

(statearr_17368_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (8))){
var inst_17337 = (state_17355[(7)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17355__$1,(11),out,inst_17337);
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
});})(c__7304__auto___17376,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17376,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17372 = [null,null,null,null,null,null,null,null,null];
(statearr_17372[(0)] = state_machine__7249__auto__);

(statearr_17372[(1)] = (1));

return statearr_17372;
});
var state_machine__7249__auto____1 = (function (state_17355){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17373){if((e17373 instanceof Object)){
var ex__7252__auto__ = e17373;
var statearr_17374_17387 = state_17355;
(statearr_17374_17387[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17388 = state_17355;
state_17355 = G__17388;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17355){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17376,out))
})();
var state__7306__auto__ = (function (){var statearr_17375 = f__7305__auto__.call(null);
(statearr_17375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17376);

return statearr_17375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17376,out))
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
return (function (state_17554){
var state_val_17555 = (state_17554[(1)]);
if((state_val_17555 === (7))){
var inst_17550 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
var statearr_17556_17597 = state_17554__$1;
(statearr_17556_17597[(2)] = inst_17550);

(statearr_17556_17597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (20))){
var inst_17520 = (state_17554[(7)]);
var inst_17531 = (state_17554[(2)]);
var inst_17532 = cljs.core.next.call(null,inst_17520);
var inst_17506 = inst_17532;
var inst_17507 = null;
var inst_17508 = (0);
var inst_17509 = (0);
var state_17554__$1 = (function (){var statearr_17557 = state_17554;
(statearr_17557[(8)] = inst_17507);

(statearr_17557[(9)] = inst_17508);

(statearr_17557[(10)] = inst_17531);

(statearr_17557[(11)] = inst_17509);

(statearr_17557[(12)] = inst_17506);

return statearr_17557;
})();
var statearr_17558_17598 = state_17554__$1;
(statearr_17558_17598[(2)] = null);

(statearr_17558_17598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (1))){
var state_17554__$1 = state_17554;
var statearr_17559_17599 = state_17554__$1;
(statearr_17559_17599[(2)] = null);

(statearr_17559_17599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (4))){
var inst_17495 = (state_17554[(13)]);
var inst_17495__$1 = (state_17554[(2)]);
var inst_17496 = (inst_17495__$1 == null);
var state_17554__$1 = (function (){var statearr_17560 = state_17554;
(statearr_17560[(13)] = inst_17495__$1);

return statearr_17560;
})();
if(cljs.core.truth_(inst_17496)){
var statearr_17561_17600 = state_17554__$1;
(statearr_17561_17600[(1)] = (5));

} else {
var statearr_17562_17601 = state_17554__$1;
(statearr_17562_17601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (15))){
var state_17554__$1 = state_17554;
var statearr_17566_17602 = state_17554__$1;
(statearr_17566_17602[(2)] = null);

(statearr_17566_17602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (21))){
var state_17554__$1 = state_17554;
var statearr_17567_17603 = state_17554__$1;
(statearr_17567_17603[(2)] = null);

(statearr_17567_17603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (13))){
var inst_17507 = (state_17554[(8)]);
var inst_17508 = (state_17554[(9)]);
var inst_17509 = (state_17554[(11)]);
var inst_17506 = (state_17554[(12)]);
var inst_17516 = (state_17554[(2)]);
var inst_17517 = (inst_17509 + (1));
var tmp17563 = inst_17507;
var tmp17564 = inst_17508;
var tmp17565 = inst_17506;
var inst_17506__$1 = tmp17565;
var inst_17507__$1 = tmp17563;
var inst_17508__$1 = tmp17564;
var inst_17509__$1 = inst_17517;
var state_17554__$1 = (function (){var statearr_17568 = state_17554;
(statearr_17568[(14)] = inst_17516);

(statearr_17568[(8)] = inst_17507__$1);

(statearr_17568[(9)] = inst_17508__$1);

(statearr_17568[(11)] = inst_17509__$1);

(statearr_17568[(12)] = inst_17506__$1);

return statearr_17568;
})();
var statearr_17569_17604 = state_17554__$1;
(statearr_17569_17604[(2)] = null);

(statearr_17569_17604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (22))){
var state_17554__$1 = state_17554;
var statearr_17570_17605 = state_17554__$1;
(statearr_17570_17605[(2)] = null);

(statearr_17570_17605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (6))){
var inst_17495 = (state_17554[(13)]);
var inst_17504 = f.call(null,inst_17495);
var inst_17505 = cljs.core.seq.call(null,inst_17504);
var inst_17506 = inst_17505;
var inst_17507 = null;
var inst_17508 = (0);
var inst_17509 = (0);
var state_17554__$1 = (function (){var statearr_17571 = state_17554;
(statearr_17571[(8)] = inst_17507);

(statearr_17571[(9)] = inst_17508);

(statearr_17571[(11)] = inst_17509);

(statearr_17571[(12)] = inst_17506);

return statearr_17571;
})();
var statearr_17572_17606 = state_17554__$1;
(statearr_17572_17606[(2)] = null);

(statearr_17572_17606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (17))){
var inst_17520 = (state_17554[(7)]);
var inst_17524 = cljs.core.chunk_first.call(null,inst_17520);
var inst_17525 = cljs.core.chunk_rest.call(null,inst_17520);
var inst_17526 = cljs.core.count.call(null,inst_17524);
var inst_17506 = inst_17525;
var inst_17507 = inst_17524;
var inst_17508 = inst_17526;
var inst_17509 = (0);
var state_17554__$1 = (function (){var statearr_17573 = state_17554;
(statearr_17573[(8)] = inst_17507);

(statearr_17573[(9)] = inst_17508);

(statearr_17573[(11)] = inst_17509);

(statearr_17573[(12)] = inst_17506);

return statearr_17573;
})();
var statearr_17574_17607 = state_17554__$1;
(statearr_17574_17607[(2)] = null);

(statearr_17574_17607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (3))){
var inst_17552 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17554__$1,inst_17552);
} else {
if((state_val_17555 === (12))){
var inst_17540 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
var statearr_17575_17608 = state_17554__$1;
(statearr_17575_17608[(2)] = inst_17540);

(statearr_17575_17608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (2))){
var state_17554__$1 = state_17554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17554__$1,(4),in$);
} else {
if((state_val_17555 === (23))){
var inst_17548 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
var statearr_17576_17609 = state_17554__$1;
(statearr_17576_17609[(2)] = inst_17548);

(statearr_17576_17609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (19))){
var inst_17535 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
var statearr_17577_17610 = state_17554__$1;
(statearr_17577_17610[(2)] = inst_17535);

(statearr_17577_17610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (11))){
var inst_17520 = (state_17554[(7)]);
var inst_17506 = (state_17554[(12)]);
var inst_17520__$1 = cljs.core.seq.call(null,inst_17506);
var state_17554__$1 = (function (){var statearr_17578 = state_17554;
(statearr_17578[(7)] = inst_17520__$1);

return statearr_17578;
})();
if(inst_17520__$1){
var statearr_17579_17611 = state_17554__$1;
(statearr_17579_17611[(1)] = (14));

} else {
var statearr_17580_17612 = state_17554__$1;
(statearr_17580_17612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (9))){
var inst_17542 = (state_17554[(2)]);
var inst_17543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17554__$1 = (function (){var statearr_17581 = state_17554;
(statearr_17581[(15)] = inst_17542);

return statearr_17581;
})();
if(cljs.core.truth_(inst_17543)){
var statearr_17582_17613 = state_17554__$1;
(statearr_17582_17613[(1)] = (21));

} else {
var statearr_17583_17614 = state_17554__$1;
(statearr_17583_17614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (5))){
var inst_17498 = cljs.core.async.close_BANG_.call(null,out);
var state_17554__$1 = state_17554;
var statearr_17584_17615 = state_17554__$1;
(statearr_17584_17615[(2)] = inst_17498);

(statearr_17584_17615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (14))){
var inst_17520 = (state_17554[(7)]);
var inst_17522 = cljs.core.chunked_seq_QMARK_.call(null,inst_17520);
var state_17554__$1 = state_17554;
if(inst_17522){
var statearr_17585_17616 = state_17554__$1;
(statearr_17585_17616[(1)] = (17));

} else {
var statearr_17586_17617 = state_17554__$1;
(statearr_17586_17617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (16))){
var inst_17538 = (state_17554[(2)]);
var state_17554__$1 = state_17554;
var statearr_17587_17618 = state_17554__$1;
(statearr_17587_17618[(2)] = inst_17538);

(statearr_17587_17618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17555 === (10))){
var inst_17507 = (state_17554[(8)]);
var inst_17509 = (state_17554[(11)]);
var inst_17514 = cljs.core._nth.call(null,inst_17507,inst_17509);
var state_17554__$1 = state_17554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17554__$1,(13),out,inst_17514);
} else {
if((state_val_17555 === (18))){
var inst_17520 = (state_17554[(7)]);
var inst_17529 = cljs.core.first.call(null,inst_17520);
var state_17554__$1 = state_17554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17554__$1,(20),out,inst_17529);
} else {
if((state_val_17555 === (8))){
var inst_17508 = (state_17554[(9)]);
var inst_17509 = (state_17554[(11)]);
var inst_17511 = (inst_17509 < inst_17508);
var inst_17512 = inst_17511;
var state_17554__$1 = state_17554;
if(cljs.core.truth_(inst_17512)){
var statearr_17588_17619 = state_17554__$1;
(statearr_17588_17619[(1)] = (10));

} else {
var statearr_17589_17620 = state_17554__$1;
(statearr_17589_17620[(1)] = (11));

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
var statearr_17593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17593[(0)] = state_machine__7249__auto__);

(statearr_17593[(1)] = (1));

return statearr_17593;
});
var state_machine__7249__auto____1 = (function (state_17554){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17594){if((e17594 instanceof Object)){
var ex__7252__auto__ = e17594;
var statearr_17595_17621 = state_17554;
(statearr_17595_17621[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17622 = state_17554;
state_17554 = G__17622;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17554){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_17596 = f__7305__auto__.call(null);
(statearr_17596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_17596;
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
var c__7304__auto___17719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17719,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17719,out){
return (function (state_17694){
var state_val_17695 = (state_17694[(1)]);
if((state_val_17695 === (7))){
var inst_17689 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
var statearr_17696_17720 = state_17694__$1;
(statearr_17696_17720[(2)] = inst_17689);

(statearr_17696_17720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (1))){
var inst_17671 = null;
var state_17694__$1 = (function (){var statearr_17697 = state_17694;
(statearr_17697[(7)] = inst_17671);

return statearr_17697;
})();
var statearr_17698_17721 = state_17694__$1;
(statearr_17698_17721[(2)] = null);

(statearr_17698_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (4))){
var inst_17674 = (state_17694[(8)]);
var inst_17674__$1 = (state_17694[(2)]);
var inst_17675 = (inst_17674__$1 == null);
var inst_17676 = cljs.core.not.call(null,inst_17675);
var state_17694__$1 = (function (){var statearr_17699 = state_17694;
(statearr_17699[(8)] = inst_17674__$1);

return statearr_17699;
})();
if(inst_17676){
var statearr_17700_17722 = state_17694__$1;
(statearr_17700_17722[(1)] = (5));

} else {
var statearr_17701_17723 = state_17694__$1;
(statearr_17701_17723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (6))){
var state_17694__$1 = state_17694;
var statearr_17702_17724 = state_17694__$1;
(statearr_17702_17724[(2)] = null);

(statearr_17702_17724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (3))){
var inst_17691 = (state_17694[(2)]);
var inst_17692 = cljs.core.async.close_BANG_.call(null,out);
var state_17694__$1 = (function (){var statearr_17703 = state_17694;
(statearr_17703[(9)] = inst_17691);

return statearr_17703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17694__$1,inst_17692);
} else {
if((state_val_17695 === (2))){
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17694__$1,(4),ch);
} else {
if((state_val_17695 === (11))){
var inst_17674 = (state_17694[(8)]);
var inst_17683 = (state_17694[(2)]);
var inst_17671 = inst_17674;
var state_17694__$1 = (function (){var statearr_17704 = state_17694;
(statearr_17704[(10)] = inst_17683);

(statearr_17704[(7)] = inst_17671);

return statearr_17704;
})();
var statearr_17705_17725 = state_17694__$1;
(statearr_17705_17725[(2)] = null);

(statearr_17705_17725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (9))){
var inst_17674 = (state_17694[(8)]);
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17694__$1,(11),out,inst_17674);
} else {
if((state_val_17695 === (5))){
var inst_17671 = (state_17694[(7)]);
var inst_17674 = (state_17694[(8)]);
var inst_17678 = cljs.core._EQ_.call(null,inst_17674,inst_17671);
var state_17694__$1 = state_17694;
if(inst_17678){
var statearr_17707_17726 = state_17694__$1;
(statearr_17707_17726[(1)] = (8));

} else {
var statearr_17708_17727 = state_17694__$1;
(statearr_17708_17727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (10))){
var inst_17686 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
var statearr_17709_17728 = state_17694__$1;
(statearr_17709_17728[(2)] = inst_17686);

(statearr_17709_17728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (8))){
var inst_17671 = (state_17694[(7)]);
var tmp17706 = inst_17671;
var inst_17671__$1 = tmp17706;
var state_17694__$1 = (function (){var statearr_17710 = state_17694;
(statearr_17710[(7)] = inst_17671__$1);

return statearr_17710;
})();
var statearr_17711_17729 = state_17694__$1;
(statearr_17711_17729[(2)] = null);

(statearr_17711_17729[(1)] = (2));


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
});})(c__7304__auto___17719,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17719,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17715[(0)] = state_machine__7249__auto__);

(statearr_17715[(1)] = (1));

return statearr_17715;
});
var state_machine__7249__auto____1 = (function (state_17694){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17716){if((e17716 instanceof Object)){
var ex__7252__auto__ = e17716;
var statearr_17717_17730 = state_17694;
(statearr_17717_17730[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17731 = state_17694;
state_17694 = G__17731;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17694){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17719,out))
})();
var state__7306__auto__ = (function (){var statearr_17718 = f__7305__auto__.call(null);
(statearr_17718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17719);

return statearr_17718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17719,out))
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
var c__7304__auto___17866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17866,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17866,out){
return (function (state_17836){
var state_val_17837 = (state_17836[(1)]);
if((state_val_17837 === (7))){
var inst_17832 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17838_17867 = state_17836__$1;
(statearr_17838_17867[(2)] = inst_17832);

(statearr_17838_17867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (1))){
var inst_17799 = (new Array(n));
var inst_17800 = inst_17799;
var inst_17801 = (0);
var state_17836__$1 = (function (){var statearr_17839 = state_17836;
(statearr_17839[(7)] = inst_17800);

(statearr_17839[(8)] = inst_17801);

return statearr_17839;
})();
var statearr_17840_17868 = state_17836__$1;
(statearr_17840_17868[(2)] = null);

(statearr_17840_17868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (4))){
var inst_17804 = (state_17836[(9)]);
var inst_17804__$1 = (state_17836[(2)]);
var inst_17805 = (inst_17804__$1 == null);
var inst_17806 = cljs.core.not.call(null,inst_17805);
var state_17836__$1 = (function (){var statearr_17841 = state_17836;
(statearr_17841[(9)] = inst_17804__$1);

return statearr_17841;
})();
if(inst_17806){
var statearr_17842_17869 = state_17836__$1;
(statearr_17842_17869[(1)] = (5));

} else {
var statearr_17843_17870 = state_17836__$1;
(statearr_17843_17870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (15))){
var inst_17826 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17844_17871 = state_17836__$1;
(statearr_17844_17871[(2)] = inst_17826);

(statearr_17844_17871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (13))){
var state_17836__$1 = state_17836;
var statearr_17845_17872 = state_17836__$1;
(statearr_17845_17872[(2)] = null);

(statearr_17845_17872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (6))){
var inst_17801 = (state_17836[(8)]);
var inst_17822 = (inst_17801 > (0));
var state_17836__$1 = state_17836;
if(cljs.core.truth_(inst_17822)){
var statearr_17846_17873 = state_17836__$1;
(statearr_17846_17873[(1)] = (12));

} else {
var statearr_17847_17874 = state_17836__$1;
(statearr_17847_17874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (3))){
var inst_17834 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17836__$1,inst_17834);
} else {
if((state_val_17837 === (12))){
var inst_17800 = (state_17836[(7)]);
var inst_17824 = cljs.core.vec.call(null,inst_17800);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17836__$1,(15),out,inst_17824);
} else {
if((state_val_17837 === (2))){
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17836__$1,(4),ch);
} else {
if((state_val_17837 === (11))){
var inst_17816 = (state_17836[(2)]);
var inst_17817 = (new Array(n));
var inst_17800 = inst_17817;
var inst_17801 = (0);
var state_17836__$1 = (function (){var statearr_17848 = state_17836;
(statearr_17848[(7)] = inst_17800);

(statearr_17848[(8)] = inst_17801);

(statearr_17848[(10)] = inst_17816);

return statearr_17848;
})();
var statearr_17849_17875 = state_17836__$1;
(statearr_17849_17875[(2)] = null);

(statearr_17849_17875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (9))){
var inst_17800 = (state_17836[(7)]);
var inst_17814 = cljs.core.vec.call(null,inst_17800);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17836__$1,(11),out,inst_17814);
} else {
if((state_val_17837 === (5))){
var inst_17800 = (state_17836[(7)]);
var inst_17804 = (state_17836[(9)]);
var inst_17801 = (state_17836[(8)]);
var inst_17809 = (state_17836[(11)]);
var inst_17808 = (inst_17800[inst_17801] = inst_17804);
var inst_17809__$1 = (inst_17801 + (1));
var inst_17810 = (inst_17809__$1 < n);
var state_17836__$1 = (function (){var statearr_17850 = state_17836;
(statearr_17850[(12)] = inst_17808);

(statearr_17850[(11)] = inst_17809__$1);

return statearr_17850;
})();
if(cljs.core.truth_(inst_17810)){
var statearr_17851_17876 = state_17836__$1;
(statearr_17851_17876[(1)] = (8));

} else {
var statearr_17852_17877 = state_17836__$1;
(statearr_17852_17877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (14))){
var inst_17829 = (state_17836[(2)]);
var inst_17830 = cljs.core.async.close_BANG_.call(null,out);
var state_17836__$1 = (function (){var statearr_17854 = state_17836;
(statearr_17854[(13)] = inst_17829);

return statearr_17854;
})();
var statearr_17855_17878 = state_17836__$1;
(statearr_17855_17878[(2)] = inst_17830);

(statearr_17855_17878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (10))){
var inst_17820 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17856_17879 = state_17836__$1;
(statearr_17856_17879[(2)] = inst_17820);

(statearr_17856_17879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (8))){
var inst_17800 = (state_17836[(7)]);
var inst_17809 = (state_17836[(11)]);
var tmp17853 = inst_17800;
var inst_17800__$1 = tmp17853;
var inst_17801 = inst_17809;
var state_17836__$1 = (function (){var statearr_17857 = state_17836;
(statearr_17857[(7)] = inst_17800__$1);

(statearr_17857[(8)] = inst_17801);

return statearr_17857;
})();
var statearr_17858_17880 = state_17836__$1;
(statearr_17858_17880[(2)] = null);

(statearr_17858_17880[(1)] = (2));


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
});})(c__7304__auto___17866,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17866,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17862[(0)] = state_machine__7249__auto__);

(statearr_17862[(1)] = (1));

return statearr_17862;
});
var state_machine__7249__auto____1 = (function (state_17836){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17863){if((e17863 instanceof Object)){
var ex__7252__auto__ = e17863;
var statearr_17864_17881 = state_17836;
(statearr_17864_17881[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17882 = state_17836;
state_17836 = G__17882;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17836){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17866,out))
})();
var state__7306__auto__ = (function (){var statearr_17865 = f__7305__auto__.call(null);
(statearr_17865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17866);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17866,out))
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
var c__7304__auto___18025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___18025,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___18025,out){
return (function (state_17995){
var state_val_17996 = (state_17995[(1)]);
if((state_val_17996 === (7))){
var inst_17991 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
var statearr_17997_18026 = state_17995__$1;
(statearr_17997_18026[(2)] = inst_17991);

(statearr_17997_18026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (1))){
var inst_17954 = [];
var inst_17955 = inst_17954;
var inst_17956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17995__$1 = (function (){var statearr_17998 = state_17995;
(statearr_17998[(7)] = inst_17955);

(statearr_17998[(8)] = inst_17956);

return statearr_17998;
})();
var statearr_17999_18027 = state_17995__$1;
(statearr_17999_18027[(2)] = null);

(statearr_17999_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (4))){
var inst_17959 = (state_17995[(9)]);
var inst_17959__$1 = (state_17995[(2)]);
var inst_17960 = (inst_17959__$1 == null);
var inst_17961 = cljs.core.not.call(null,inst_17960);
var state_17995__$1 = (function (){var statearr_18000 = state_17995;
(statearr_18000[(9)] = inst_17959__$1);

return statearr_18000;
})();
if(inst_17961){
var statearr_18001_18028 = state_17995__$1;
(statearr_18001_18028[(1)] = (5));

} else {
var statearr_18002_18029 = state_17995__$1;
(statearr_18002_18029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (15))){
var inst_17985 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
var statearr_18003_18030 = state_17995__$1;
(statearr_18003_18030[(2)] = inst_17985);

(statearr_18003_18030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (13))){
var state_17995__$1 = state_17995;
var statearr_18004_18031 = state_17995__$1;
(statearr_18004_18031[(2)] = null);

(statearr_18004_18031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (6))){
var inst_17955 = (state_17995[(7)]);
var inst_17980 = inst_17955.length;
var inst_17981 = (inst_17980 > (0));
var state_17995__$1 = state_17995;
if(cljs.core.truth_(inst_17981)){
var statearr_18005_18032 = state_17995__$1;
(statearr_18005_18032[(1)] = (12));

} else {
var statearr_18006_18033 = state_17995__$1;
(statearr_18006_18033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (3))){
var inst_17993 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17995__$1,inst_17993);
} else {
if((state_val_17996 === (12))){
var inst_17955 = (state_17995[(7)]);
var inst_17983 = cljs.core.vec.call(null,inst_17955);
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17995__$1,(15),out,inst_17983);
} else {
if((state_val_17996 === (2))){
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17995__$1,(4),ch);
} else {
if((state_val_17996 === (11))){
var inst_17963 = (state_17995[(10)]);
var inst_17959 = (state_17995[(9)]);
var inst_17973 = (state_17995[(2)]);
var inst_17974 = [];
var inst_17975 = inst_17974.push(inst_17959);
var inst_17955 = inst_17974;
var inst_17956 = inst_17963;
var state_17995__$1 = (function (){var statearr_18007 = state_17995;
(statearr_18007[(11)] = inst_17973);

(statearr_18007[(7)] = inst_17955);

(statearr_18007[(12)] = inst_17975);

(statearr_18007[(8)] = inst_17956);

return statearr_18007;
})();
var statearr_18008_18034 = state_17995__$1;
(statearr_18008_18034[(2)] = null);

(statearr_18008_18034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (9))){
var inst_17955 = (state_17995[(7)]);
var inst_17971 = cljs.core.vec.call(null,inst_17955);
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17995__$1,(11),out,inst_17971);
} else {
if((state_val_17996 === (5))){
var inst_17963 = (state_17995[(10)]);
var inst_17959 = (state_17995[(9)]);
var inst_17956 = (state_17995[(8)]);
var inst_17963__$1 = f.call(null,inst_17959);
var inst_17964 = cljs.core._EQ_.call(null,inst_17963__$1,inst_17956);
var inst_17965 = cljs.core.keyword_identical_QMARK_.call(null,inst_17956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17966 = (inst_17964) || (inst_17965);
var state_17995__$1 = (function (){var statearr_18009 = state_17995;
(statearr_18009[(10)] = inst_17963__$1);

return statearr_18009;
})();
if(cljs.core.truth_(inst_17966)){
var statearr_18010_18035 = state_17995__$1;
(statearr_18010_18035[(1)] = (8));

} else {
var statearr_18011_18036 = state_17995__$1;
(statearr_18011_18036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (14))){
var inst_17988 = (state_17995[(2)]);
var inst_17989 = cljs.core.async.close_BANG_.call(null,out);
var state_17995__$1 = (function (){var statearr_18013 = state_17995;
(statearr_18013[(13)] = inst_17988);

return statearr_18013;
})();
var statearr_18014_18037 = state_17995__$1;
(statearr_18014_18037[(2)] = inst_17989);

(statearr_18014_18037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (10))){
var inst_17978 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
var statearr_18015_18038 = state_17995__$1;
(statearr_18015_18038[(2)] = inst_17978);

(statearr_18015_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (8))){
var inst_17963 = (state_17995[(10)]);
var inst_17959 = (state_17995[(9)]);
var inst_17955 = (state_17995[(7)]);
var inst_17968 = inst_17955.push(inst_17959);
var tmp18012 = inst_17955;
var inst_17955__$1 = tmp18012;
var inst_17956 = inst_17963;
var state_17995__$1 = (function (){var statearr_18016 = state_17995;
(statearr_18016[(14)] = inst_17968);

(statearr_18016[(7)] = inst_17955__$1);

(statearr_18016[(8)] = inst_17956);

return statearr_18016;
})();
var statearr_18017_18039 = state_17995__$1;
(statearr_18017_18039[(2)] = null);

(statearr_18017_18039[(1)] = (2));


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
});})(c__7304__auto___18025,out))
;
return ((function (switch__7248__auto__,c__7304__auto___18025,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_18021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18021[(0)] = state_machine__7249__auto__);

(statearr_18021[(1)] = (1));

return statearr_18021;
});
var state_machine__7249__auto____1 = (function (state_17995){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18022){if((e18022 instanceof Object)){
var ex__7252__auto__ = e18022;
var statearr_18023_18040 = state_17995;
(statearr_18023_18040[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18041 = state_17995;
state_17995 = G__18041;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17995){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___18025,out))
})();
var state__7306__auto__ = (function (){var statearr_18024 = f__7305__auto__.call(null);
(statearr_18024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___18025);

return statearr_18024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___18025,out))
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