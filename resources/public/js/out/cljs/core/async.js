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
if(typeof cljs.core.async.t23023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23023 = (function (f,fn_handler,meta23024){
this.f = f;
this.fn_handler = fn_handler;
this.meta23024 = meta23024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23025){
var self__ = this;
var _23025__$1 = this;
return self__.meta23024;
});

cljs.core.async.t23023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23025,meta23024__$1){
var self__ = this;
var _23025__$1 = this;
return (new cljs.core.async.t23023(self__.f,self__.fn_handler,meta23024__$1));
});

cljs.core.async.t23023.cljs$lang$type = true;

cljs.core.async.t23023.cljs$lang$ctorStr = "cljs.core.async/t23023";

cljs.core.async.t23023.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23023");
});

cljs.core.async.__GT_t23023 = (function __GT_t23023(f__$1,fn_handler__$1,meta23024){
return (new cljs.core.async.t23023(f__$1,fn_handler__$1,meta23024));
});

}

return (new cljs.core.async.t23023(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__23027 = buff;
if(G__23027){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__23027.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23027.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23027);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23027);
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
var val_23028 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23028);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23028,ret){
return (function (){
return fn1.call(null,val_23028);
});})(val_23028,ret))
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
var n__4509__auto___23029 = n;
var x_23030 = (0);
while(true){
if((x_23030 < n__4509__auto___23029)){
(a[x_23030] = (0));

var G__23031 = (x_23030 + (1));
x_23030 = G__23031;
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

var G__23032 = (i + (1));
i = G__23032;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23036 = (function (flag,alt_flag,meta23037){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23037 = meta23037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23038){
var self__ = this;
var _23038__$1 = this;
return self__.meta23037;
});})(flag))
;

cljs.core.async.t23036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23038,meta23037__$1){
var self__ = this;
var _23038__$1 = this;
return (new cljs.core.async.t23036(self__.flag,self__.alt_flag,meta23037__$1));
});})(flag))
;

cljs.core.async.t23036.cljs$lang$type = true;

cljs.core.async.t23036.cljs$lang$ctorStr = "cljs.core.async/t23036";

cljs.core.async.t23036.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23036");
});})(flag))
;

cljs.core.async.__GT_t23036 = ((function (flag){
return (function __GT_t23036(flag__$1,alt_flag__$1,meta23037){
return (new cljs.core.async.t23036(flag__$1,alt_flag__$1,meta23037));
});})(flag))
;

}

return (new cljs.core.async.t23036(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23042 = (function (cb,flag,alt_handler,meta23043){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23043 = meta23043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23044){
var self__ = this;
var _23044__$1 = this;
return self__.meta23043;
});

cljs.core.async.t23042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23044,meta23043__$1){
var self__ = this;
var _23044__$1 = this;
return (new cljs.core.async.t23042(self__.cb,self__.flag,self__.alt_handler,meta23043__$1));
});

cljs.core.async.t23042.cljs$lang$type = true;

cljs.core.async.t23042.cljs$lang$ctorStr = "cljs.core.async/t23042";

cljs.core.async.t23042.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23042");
});

cljs.core.async.__GT_t23042 = (function __GT_t23042(cb__$1,flag__$1,alt_handler__$1,meta23043){
return (new cljs.core.async.t23042(cb__$1,flag__$1,alt_handler__$1,meta23043));
});

}

return (new cljs.core.async.t23042(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__23045_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23045_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23046_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23046_SHARP_,port], null));
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
var G__23047 = (i + (1));
i = G__23047;
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
var alts_BANG___delegate = function (ports,p__23048){
var map__23050 = p__23048;
var map__23050__$1 = ((cljs.core.seq_QMARK_.call(null,map__23050))?cljs.core.apply.call(null,cljs.core.hash_map,map__23050):map__23050);
var opts = map__23050__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23048 = null;
if (arguments.length > 1) {
  p__23048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23048);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23051){
var ports = cljs.core.first(arglist__23051);
var p__23048 = cljs.core.rest(arglist__23051);
return alts_BANG___delegate(ports,p__23048);
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
var c__7043__auto___23146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23146){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23146){
return (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (7))){
var inst_23118 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23124_23147 = state_23122__$1;
(statearr_23124_23147[(2)] = inst_23118);

(statearr_23124_23147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (1))){
var state_23122__$1 = state_23122;
var statearr_23125_23148 = state_23122__$1;
(statearr_23125_23148[(2)] = null);

(statearr_23125_23148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (4))){
var inst_23101 = (state_23122[(7)]);
var inst_23101__$1 = (state_23122[(2)]);
var inst_23102 = (inst_23101__$1 == null);
var state_23122__$1 = (function (){var statearr_23126 = state_23122;
(statearr_23126[(7)] = inst_23101__$1);

return statearr_23126;
})();
if(cljs.core.truth_(inst_23102)){
var statearr_23127_23149 = state_23122__$1;
(statearr_23127_23149[(1)] = (5));

} else {
var statearr_23128_23150 = state_23122__$1;
(statearr_23128_23150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (13))){
var state_23122__$1 = state_23122;
var statearr_23129_23151 = state_23122__$1;
(statearr_23129_23151[(2)] = null);

(statearr_23129_23151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (6))){
var inst_23101 = (state_23122[(7)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23122__$1,(11),to,inst_23101);
} else {
if((state_val_23123 === (3))){
var inst_23120 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else {
if((state_val_23123 === (12))){
var state_23122__$1 = state_23122;
var statearr_23130_23152 = state_23122__$1;
(statearr_23130_23152[(2)] = null);

(statearr_23130_23152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (2))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(4),from);
} else {
if((state_val_23123 === (11))){
var inst_23111 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23111)){
var statearr_23131_23153 = state_23122__$1;
(statearr_23131_23153[(1)] = (12));

} else {
var statearr_23132_23154 = state_23122__$1;
(statearr_23132_23154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (9))){
var state_23122__$1 = state_23122;
var statearr_23133_23155 = state_23122__$1;
(statearr_23133_23155[(2)] = null);

(statearr_23133_23155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (5))){
var state_23122__$1 = state_23122;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23134_23156 = state_23122__$1;
(statearr_23134_23156[(1)] = (8));

} else {
var statearr_23135_23157 = state_23122__$1;
(statearr_23135_23157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (14))){
var inst_23116 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23136_23158 = state_23122__$1;
(statearr_23136_23158[(2)] = inst_23116);

(statearr_23136_23158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (10))){
var inst_23108 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23137_23159 = state_23122__$1;
(statearr_23137_23159[(2)] = inst_23108);

(statearr_23137_23159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (8))){
var inst_23105 = cljs.core.async.close_BANG_.call(null,to);
var state_23122__$1 = state_23122;
var statearr_23138_23160 = state_23122__$1;
(statearr_23138_23160[(2)] = inst_23105);

(statearr_23138_23160[(1)] = (10));


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
});})(c__7043__auto___23146))
;
return ((function (switch__6987__auto__,c__7043__auto___23146){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23142 = [null,null,null,null,null,null,null,null];
(statearr_23142[(0)] = state_machine__6988__auto__);

(statearr_23142[(1)] = (1));

return statearr_23142;
});
var state_machine__6988__auto____1 = (function (state_23122){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23143){if((e23143 instanceof Object)){
var ex__6991__auto__ = e23143;
var statearr_23144_23161 = state_23122;
(statearr_23144_23161[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23162 = state_23122;
state_23122 = G__23162;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23146))
})();
var state__7045__auto__ = (function (){var statearr_23145 = f__7044__auto__.call(null);
(statearr_23145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23146);

return statearr_23145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23146))
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
return (function (p__23346){
var vec__23347 = p__23346;
var v = cljs.core.nth.call(null,vec__23347,(0),null);
var p = cljs.core.nth.call(null,vec__23347,(1),null);
var job = vec__23347;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___23529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results){
return (function (state_23352){
var state_val_23353 = (state_23352[(1)]);
if((state_val_23353 === (2))){
var inst_23349 = (state_23352[(2)]);
var inst_23350 = cljs.core.async.close_BANG_.call(null,res);
var state_23352__$1 = (function (){var statearr_23354 = state_23352;
(statearr_23354[(7)] = inst_23349);

return statearr_23354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23352__$1,inst_23350);
} else {
if((state_val_23353 === (1))){
var state_23352__$1 = state_23352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23352__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23358 = [null,null,null,null,null,null,null,null];
(statearr_23358[(0)] = state_machine__6988__auto__);

(statearr_23358[(1)] = (1));

return statearr_23358;
});
var state_machine__6988__auto____1 = (function (state_23352){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23359){if((e23359 instanceof Object)){
var ex__6991__auto__ = e23359;
var statearr_23360_23530 = state_23352;
(statearr_23360_23530[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23531 = state_23352;
state_23352 = G__23531;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23352){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_23361 = f__7044__auto__.call(null);
(statearr_23361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23529);

return statearr_23361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23529,res,vec__23347,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23362){
var vec__23363 = p__23362;
var v = cljs.core.nth.call(null,vec__23363,(0),null);
var p = cljs.core.nth.call(null,vec__23363,(1),null);
var job = vec__23363;
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
var n__4509__auto___23532 = n;
var __23533 = (0);
while(true){
if((__23533 < n__4509__auto___23532)){
var G__23364_23534 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23364_23534) {
case "async":
var c__7043__auto___23536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23533,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23533,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function (state_23377){
var state_val_23378 = (state_23377[(1)]);
if((state_val_23378 === (7))){
var inst_23373 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23379_23537 = state_23377__$1;
(statearr_23379_23537[(2)] = inst_23373);

(statearr_23379_23537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (6))){
var state_23377__$1 = state_23377;
var statearr_23380_23538 = state_23377__$1;
(statearr_23380_23538[(2)] = null);

(statearr_23380_23538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (5))){
var state_23377__$1 = state_23377;
var statearr_23381_23539 = state_23377__$1;
(statearr_23381_23539[(2)] = null);

(statearr_23381_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (4))){
var inst_23367 = (state_23377[(2)]);
var inst_23368 = async.call(null,inst_23367);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23368)){
var statearr_23382_23540 = state_23377__$1;
(statearr_23382_23540[(1)] = (5));

} else {
var statearr_23383_23541 = state_23377__$1;
(statearr_23383_23541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (3))){
var inst_23375 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else {
if((state_val_23378 === (2))){
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(4),jobs);
} else {
if((state_val_23378 === (1))){
var state_23377__$1 = state_23377;
var statearr_23384_23542 = state_23377__$1;
(statearr_23384_23542[(2)] = null);

(statearr_23384_23542[(1)] = (2));


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
});})(__23533,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
;
return ((function (__23533,switch__6987__auto__,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23388 = [null,null,null,null,null,null,null];
(statearr_23388[(0)] = state_machine__6988__auto__);

(statearr_23388[(1)] = (1));

return statearr_23388;
});
var state_machine__6988__auto____1 = (function (state_23377){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23389){if((e23389 instanceof Object)){
var ex__6991__auto__ = e23389;
var statearr_23390_23543 = state_23377;
(statearr_23390_23543[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23544 = state_23377;
state_23377 = G__23544;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23533,switch__6987__auto__,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23391 = f__7044__auto__.call(null);
(statearr_23391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23536);

return statearr_23391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23533,c__7043__auto___23536,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___23545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23533,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23533,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function (state_23404){
var state_val_23405 = (state_23404[(1)]);
if((state_val_23405 === (7))){
var inst_23400 = (state_23404[(2)]);
var state_23404__$1 = state_23404;
var statearr_23406_23546 = state_23404__$1;
(statearr_23406_23546[(2)] = inst_23400);

(statearr_23406_23546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23405 === (6))){
var state_23404__$1 = state_23404;
var statearr_23407_23547 = state_23404__$1;
(statearr_23407_23547[(2)] = null);

(statearr_23407_23547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23405 === (5))){
var state_23404__$1 = state_23404;
var statearr_23408_23548 = state_23404__$1;
(statearr_23408_23548[(2)] = null);

(statearr_23408_23548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23405 === (4))){
var inst_23394 = (state_23404[(2)]);
var inst_23395 = process.call(null,inst_23394);
var state_23404__$1 = state_23404;
if(cljs.core.truth_(inst_23395)){
var statearr_23409_23549 = state_23404__$1;
(statearr_23409_23549[(1)] = (5));

} else {
var statearr_23410_23550 = state_23404__$1;
(statearr_23410_23550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23405 === (3))){
var inst_23402 = (state_23404[(2)]);
var state_23404__$1 = state_23404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23404__$1,inst_23402);
} else {
if((state_val_23405 === (2))){
var state_23404__$1 = state_23404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23404__$1,(4),jobs);
} else {
if((state_val_23405 === (1))){
var state_23404__$1 = state_23404;
var statearr_23411_23551 = state_23404__$1;
(statearr_23411_23551[(2)] = null);

(statearr_23411_23551[(1)] = (2));


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
});})(__23533,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
;
return ((function (__23533,switch__6987__auto__,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23415 = [null,null,null,null,null,null,null];
(statearr_23415[(0)] = state_machine__6988__auto__);

(statearr_23415[(1)] = (1));

return statearr_23415;
});
var state_machine__6988__auto____1 = (function (state_23404){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23416){if((e23416 instanceof Object)){
var ex__6991__auto__ = e23416;
var statearr_23417_23552 = state_23404;
(statearr_23417_23552[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23553 = state_23404;
state_23404 = G__23553;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23404){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23533,switch__6987__auto__,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23418 = f__7044__auto__.call(null);
(statearr_23418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23545);

return statearr_23418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23533,c__7043__auto___23545,G__23364_23534,n__4509__auto___23532,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23554 = (__23533 + (1));
__23533 = G__23554;
continue;
} else {
}
break;
}

var c__7043__auto___23555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23555,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23555,jobs,results,process,async){
return (function (state_23440){
var state_val_23441 = (state_23440[(1)]);
if((state_val_23441 === (9))){
var inst_23433 = (state_23440[(2)]);
var state_23440__$1 = (function (){var statearr_23442 = state_23440;
(statearr_23442[(7)] = inst_23433);

return statearr_23442;
})();
var statearr_23443_23556 = state_23440__$1;
(statearr_23443_23556[(2)] = null);

(statearr_23443_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (8))){
var inst_23426 = (state_23440[(8)]);
var inst_23431 = (state_23440[(2)]);
var state_23440__$1 = (function (){var statearr_23444 = state_23440;
(statearr_23444[(9)] = inst_23431);

return statearr_23444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23440__$1,(9),results,inst_23426);
} else {
if((state_val_23441 === (7))){
var inst_23436 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
var statearr_23445_23557 = state_23440__$1;
(statearr_23445_23557[(2)] = inst_23436);

(statearr_23445_23557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (6))){
var inst_23426 = (state_23440[(8)]);
var inst_23421 = (state_23440[(10)]);
var inst_23426__$1 = cljs.core.async.chan.call(null,(1));
var inst_23427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23428 = [inst_23421,inst_23426__$1];
var inst_23429 = (new cljs.core.PersistentVector(null,2,(5),inst_23427,inst_23428,null));
var state_23440__$1 = (function (){var statearr_23446 = state_23440;
(statearr_23446[(8)] = inst_23426__$1);

return statearr_23446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23440__$1,(8),jobs,inst_23429);
} else {
if((state_val_23441 === (5))){
var inst_23424 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23440__$1 = state_23440;
var statearr_23447_23558 = state_23440__$1;
(statearr_23447_23558[(2)] = inst_23424);

(statearr_23447_23558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (4))){
var inst_23421 = (state_23440[(10)]);
var inst_23421__$1 = (state_23440[(2)]);
var inst_23422 = (inst_23421__$1 == null);
var state_23440__$1 = (function (){var statearr_23448 = state_23440;
(statearr_23448[(10)] = inst_23421__$1);

return statearr_23448;
})();
if(cljs.core.truth_(inst_23422)){
var statearr_23449_23559 = state_23440__$1;
(statearr_23449_23559[(1)] = (5));

} else {
var statearr_23450_23560 = state_23440__$1;
(statearr_23450_23560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23441 === (3))){
var inst_23438 = (state_23440[(2)]);
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23440__$1,inst_23438);
} else {
if((state_val_23441 === (2))){
var state_23440__$1 = state_23440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23440__$1,(4),from);
} else {
if((state_val_23441 === (1))){
var state_23440__$1 = state_23440;
var statearr_23451_23561 = state_23440__$1;
(statearr_23451_23561[(2)] = null);

(statearr_23451_23561[(1)] = (2));


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
});})(c__7043__auto___23555,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___23555,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23455[(0)] = state_machine__6988__auto__);

(statearr_23455[(1)] = (1));

return statearr_23455;
});
var state_machine__6988__auto____1 = (function (state_23440){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23456){if((e23456 instanceof Object)){
var ex__6991__auto__ = e23456;
var statearr_23457_23562 = state_23440;
(statearr_23457_23562[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23563 = state_23440;
state_23440 = G__23563;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23440){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23555,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23458 = f__7044__auto__.call(null);
(statearr_23458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23555);

return statearr_23458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23555,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_23496){
var state_val_23497 = (state_23496[(1)]);
if((state_val_23497 === (7))){
var inst_23492 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23498_23564 = state_23496__$1;
(statearr_23498_23564[(2)] = inst_23492);

(statearr_23498_23564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (20))){
var state_23496__$1 = state_23496;
var statearr_23499_23565 = state_23496__$1;
(statearr_23499_23565[(2)] = null);

(statearr_23499_23565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (1))){
var state_23496__$1 = state_23496;
var statearr_23500_23566 = state_23496__$1;
(statearr_23500_23566[(2)] = null);

(statearr_23500_23566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (4))){
var inst_23461 = (state_23496[(7)]);
var inst_23461__$1 = (state_23496[(2)]);
var inst_23462 = (inst_23461__$1 == null);
var state_23496__$1 = (function (){var statearr_23501 = state_23496;
(statearr_23501[(7)] = inst_23461__$1);

return statearr_23501;
})();
if(cljs.core.truth_(inst_23462)){
var statearr_23502_23567 = state_23496__$1;
(statearr_23502_23567[(1)] = (5));

} else {
var statearr_23503_23568 = state_23496__$1;
(statearr_23503_23568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (15))){
var inst_23474 = (state_23496[(8)]);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23496__$1,(18),to,inst_23474);
} else {
if((state_val_23497 === (21))){
var inst_23487 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23504_23569 = state_23496__$1;
(statearr_23504_23569[(2)] = inst_23487);

(statearr_23504_23569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (13))){
var inst_23489 = (state_23496[(2)]);
var state_23496__$1 = (function (){var statearr_23505 = state_23496;
(statearr_23505[(9)] = inst_23489);

return statearr_23505;
})();
var statearr_23506_23570 = state_23496__$1;
(statearr_23506_23570[(2)] = null);

(statearr_23506_23570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (6))){
var inst_23461 = (state_23496[(7)]);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,(11),inst_23461);
} else {
if((state_val_23497 === (17))){
var inst_23482 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
if(cljs.core.truth_(inst_23482)){
var statearr_23507_23571 = state_23496__$1;
(statearr_23507_23571[(1)] = (19));

} else {
var statearr_23508_23572 = state_23496__$1;
(statearr_23508_23572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (3))){
var inst_23494 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23496__$1,inst_23494);
} else {
if((state_val_23497 === (12))){
var inst_23471 = (state_23496[(10)]);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,(14),inst_23471);
} else {
if((state_val_23497 === (2))){
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,(4),results);
} else {
if((state_val_23497 === (19))){
var state_23496__$1 = state_23496;
var statearr_23509_23573 = state_23496__$1;
(statearr_23509_23573[(2)] = null);

(statearr_23509_23573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (11))){
var inst_23471 = (state_23496[(2)]);
var state_23496__$1 = (function (){var statearr_23510 = state_23496;
(statearr_23510[(10)] = inst_23471);

return statearr_23510;
})();
var statearr_23511_23574 = state_23496__$1;
(statearr_23511_23574[(2)] = null);

(statearr_23511_23574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (9))){
var state_23496__$1 = state_23496;
var statearr_23512_23575 = state_23496__$1;
(statearr_23512_23575[(2)] = null);

(statearr_23512_23575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (5))){
var state_23496__$1 = state_23496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23513_23576 = state_23496__$1;
(statearr_23513_23576[(1)] = (8));

} else {
var statearr_23514_23577 = state_23496__$1;
(statearr_23514_23577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (14))){
var inst_23474 = (state_23496[(8)]);
var inst_23476 = (state_23496[(11)]);
var inst_23474__$1 = (state_23496[(2)]);
var inst_23475 = (inst_23474__$1 == null);
var inst_23476__$1 = cljs.core.not.call(null,inst_23475);
var state_23496__$1 = (function (){var statearr_23515 = state_23496;
(statearr_23515[(8)] = inst_23474__$1);

(statearr_23515[(11)] = inst_23476__$1);

return statearr_23515;
})();
if(inst_23476__$1){
var statearr_23516_23578 = state_23496__$1;
(statearr_23516_23578[(1)] = (15));

} else {
var statearr_23517_23579 = state_23496__$1;
(statearr_23517_23579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (16))){
var inst_23476 = (state_23496[(11)]);
var state_23496__$1 = state_23496;
var statearr_23518_23580 = state_23496__$1;
(statearr_23518_23580[(2)] = inst_23476);

(statearr_23518_23580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (10))){
var inst_23468 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23519_23581 = state_23496__$1;
(statearr_23519_23581[(2)] = inst_23468);

(statearr_23519_23581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (18))){
var inst_23479 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23520_23582 = state_23496__$1;
(statearr_23520_23582[(2)] = inst_23479);

(statearr_23520_23582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (8))){
var inst_23465 = cljs.core.async.close_BANG_.call(null,to);
var state_23496__$1 = state_23496;
var statearr_23521_23583 = state_23496__$1;
(statearr_23521_23583[(2)] = inst_23465);

(statearr_23521_23583[(1)] = (10));


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
var statearr_23525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23525[(0)] = state_machine__6988__auto__);

(statearr_23525[(1)] = (1));

return statearr_23525;
});
var state_machine__6988__auto____1 = (function (state_23496){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23526){if((e23526 instanceof Object)){
var ex__6991__auto__ = e23526;
var statearr_23527_23584 = state_23496;
(statearr_23527_23584[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23585 = state_23496;
state_23496 = G__23585;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23496){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23528 = f__7044__auto__.call(null);
(statearr_23528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23528;
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
var c__7043__auto___23686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23686,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23686,tc,fc){
return (function (state_23661){
var state_val_23662 = (state_23661[(1)]);
if((state_val_23662 === (7))){
var inst_23657 = (state_23661[(2)]);
var state_23661__$1 = state_23661;
var statearr_23663_23687 = state_23661__$1;
(statearr_23663_23687[(2)] = inst_23657);

(statearr_23663_23687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (1))){
var state_23661__$1 = state_23661;
var statearr_23664_23688 = state_23661__$1;
(statearr_23664_23688[(2)] = null);

(statearr_23664_23688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (4))){
var inst_23638 = (state_23661[(7)]);
var inst_23638__$1 = (state_23661[(2)]);
var inst_23639 = (inst_23638__$1 == null);
var state_23661__$1 = (function (){var statearr_23665 = state_23661;
(statearr_23665[(7)] = inst_23638__$1);

return statearr_23665;
})();
if(cljs.core.truth_(inst_23639)){
var statearr_23666_23689 = state_23661__$1;
(statearr_23666_23689[(1)] = (5));

} else {
var statearr_23667_23690 = state_23661__$1;
(statearr_23667_23690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (13))){
var state_23661__$1 = state_23661;
var statearr_23668_23691 = state_23661__$1;
(statearr_23668_23691[(2)] = null);

(statearr_23668_23691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (6))){
var inst_23638 = (state_23661[(7)]);
var inst_23644 = p.call(null,inst_23638);
var state_23661__$1 = state_23661;
if(cljs.core.truth_(inst_23644)){
var statearr_23669_23692 = state_23661__$1;
(statearr_23669_23692[(1)] = (9));

} else {
var statearr_23670_23693 = state_23661__$1;
(statearr_23670_23693[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (3))){
var inst_23659 = (state_23661[(2)]);
var state_23661__$1 = state_23661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23661__$1,inst_23659);
} else {
if((state_val_23662 === (12))){
var state_23661__$1 = state_23661;
var statearr_23671_23694 = state_23661__$1;
(statearr_23671_23694[(2)] = null);

(statearr_23671_23694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (2))){
var state_23661__$1 = state_23661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23661__$1,(4),ch);
} else {
if((state_val_23662 === (11))){
var inst_23638 = (state_23661[(7)]);
var inst_23648 = (state_23661[(2)]);
var state_23661__$1 = state_23661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23661__$1,(8),inst_23648,inst_23638);
} else {
if((state_val_23662 === (9))){
var state_23661__$1 = state_23661;
var statearr_23672_23695 = state_23661__$1;
(statearr_23672_23695[(2)] = tc);

(statearr_23672_23695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (5))){
var inst_23641 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23642 = cljs.core.async.close_BANG_.call(null,fc);
var state_23661__$1 = (function (){var statearr_23673 = state_23661;
(statearr_23673[(8)] = inst_23641);

return statearr_23673;
})();
var statearr_23674_23696 = state_23661__$1;
(statearr_23674_23696[(2)] = inst_23642);

(statearr_23674_23696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (14))){
var inst_23655 = (state_23661[(2)]);
var state_23661__$1 = state_23661;
var statearr_23675_23697 = state_23661__$1;
(statearr_23675_23697[(2)] = inst_23655);

(statearr_23675_23697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (10))){
var state_23661__$1 = state_23661;
var statearr_23676_23698 = state_23661__$1;
(statearr_23676_23698[(2)] = fc);

(statearr_23676_23698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23662 === (8))){
var inst_23650 = (state_23661[(2)]);
var state_23661__$1 = state_23661;
if(cljs.core.truth_(inst_23650)){
var statearr_23677_23699 = state_23661__$1;
(statearr_23677_23699[(1)] = (12));

} else {
var statearr_23678_23700 = state_23661__$1;
(statearr_23678_23700[(1)] = (13));

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
});})(c__7043__auto___23686,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___23686,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23682 = [null,null,null,null,null,null,null,null,null];
(statearr_23682[(0)] = state_machine__6988__auto__);

(statearr_23682[(1)] = (1));

return statearr_23682;
});
var state_machine__6988__auto____1 = (function (state_23661){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23683){if((e23683 instanceof Object)){
var ex__6991__auto__ = e23683;
var statearr_23684_23701 = state_23661;
(statearr_23684_23701[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23702 = state_23661;
state_23661 = G__23702;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23661){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23686,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_23685 = f__7044__auto__.call(null);
(statearr_23685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23686);

return statearr_23685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23686,tc,fc))
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
return (function (state_23749){
var state_val_23750 = (state_23749[(1)]);
if((state_val_23750 === (7))){
var inst_23745 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23751_23767 = state_23749__$1;
(statearr_23751_23767[(2)] = inst_23745);

(statearr_23751_23767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (6))){
var inst_23735 = (state_23749[(7)]);
var inst_23738 = (state_23749[(8)]);
var inst_23742 = f.call(null,inst_23735,inst_23738);
var inst_23735__$1 = inst_23742;
var state_23749__$1 = (function (){var statearr_23752 = state_23749;
(statearr_23752[(7)] = inst_23735__$1);

return statearr_23752;
})();
var statearr_23753_23768 = state_23749__$1;
(statearr_23753_23768[(2)] = null);

(statearr_23753_23768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (5))){
var inst_23735 = (state_23749[(7)]);
var state_23749__$1 = state_23749;
var statearr_23754_23769 = state_23749__$1;
(statearr_23754_23769[(2)] = inst_23735);

(statearr_23754_23769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (4))){
var inst_23738 = (state_23749[(8)]);
var inst_23738__$1 = (state_23749[(2)]);
var inst_23739 = (inst_23738__$1 == null);
var state_23749__$1 = (function (){var statearr_23755 = state_23749;
(statearr_23755[(8)] = inst_23738__$1);

return statearr_23755;
})();
if(cljs.core.truth_(inst_23739)){
var statearr_23756_23770 = state_23749__$1;
(statearr_23756_23770[(1)] = (5));

} else {
var statearr_23757_23771 = state_23749__$1;
(statearr_23757_23771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (3))){
var inst_23747 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23749__$1,inst_23747);
} else {
if((state_val_23750 === (2))){
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23749__$1,(4),ch);
} else {
if((state_val_23750 === (1))){
var inst_23735 = init;
var state_23749__$1 = (function (){var statearr_23758 = state_23749;
(statearr_23758[(7)] = inst_23735);

return statearr_23758;
})();
var statearr_23759_23772 = state_23749__$1;
(statearr_23759_23772[(2)] = null);

(statearr_23759_23772[(1)] = (2));


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
var statearr_23763 = [null,null,null,null,null,null,null,null,null];
(statearr_23763[(0)] = state_machine__6988__auto__);

(statearr_23763[(1)] = (1));

return statearr_23763;
});
var state_machine__6988__auto____1 = (function (state_23749){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23764){if((e23764 instanceof Object)){
var ex__6991__auto__ = e23764;
var statearr_23765_23773 = state_23749;
(statearr_23765_23773[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23774 = state_23749;
state_23749 = G__23774;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23749){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23766 = f__7044__auto__.call(null);
(statearr_23766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23766;
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
return (function (state_23848){
var state_val_23849 = (state_23848[(1)]);
if((state_val_23849 === (7))){
var inst_23830 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23850_23873 = state_23848__$1;
(statearr_23850_23873[(2)] = inst_23830);

(statearr_23850_23873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (1))){
var inst_23824 = cljs.core.seq.call(null,coll);
var inst_23825 = inst_23824;
var state_23848__$1 = (function (){var statearr_23851 = state_23848;
(statearr_23851[(7)] = inst_23825);

return statearr_23851;
})();
var statearr_23852_23874 = state_23848__$1;
(statearr_23852_23874[(2)] = null);

(statearr_23852_23874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (4))){
var inst_23825 = (state_23848[(7)]);
var inst_23828 = cljs.core.first.call(null,inst_23825);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23848__$1,(7),ch,inst_23828);
} else {
if((state_val_23849 === (13))){
var inst_23842 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23853_23875 = state_23848__$1;
(statearr_23853_23875[(2)] = inst_23842);

(statearr_23853_23875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (6))){
var inst_23833 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23833)){
var statearr_23854_23876 = state_23848__$1;
(statearr_23854_23876[(1)] = (8));

} else {
var statearr_23855_23877 = state_23848__$1;
(statearr_23855_23877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (3))){
var inst_23846 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23848__$1,inst_23846);
} else {
if((state_val_23849 === (12))){
var state_23848__$1 = state_23848;
var statearr_23856_23878 = state_23848__$1;
(statearr_23856_23878[(2)] = null);

(statearr_23856_23878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (2))){
var inst_23825 = (state_23848[(7)]);
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23825)){
var statearr_23857_23879 = state_23848__$1;
(statearr_23857_23879[(1)] = (4));

} else {
var statearr_23858_23880 = state_23848__$1;
(statearr_23858_23880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (11))){
var inst_23839 = cljs.core.async.close_BANG_.call(null,ch);
var state_23848__$1 = state_23848;
var statearr_23859_23881 = state_23848__$1;
(statearr_23859_23881[(2)] = inst_23839);

(statearr_23859_23881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (9))){
var state_23848__$1 = state_23848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23860_23882 = state_23848__$1;
(statearr_23860_23882[(1)] = (11));

} else {
var statearr_23861_23883 = state_23848__$1;
(statearr_23861_23883[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (5))){
var inst_23825 = (state_23848[(7)]);
var state_23848__$1 = state_23848;
var statearr_23862_23884 = state_23848__$1;
(statearr_23862_23884[(2)] = inst_23825);

(statearr_23862_23884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (10))){
var inst_23844 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23863_23885 = state_23848__$1;
(statearr_23863_23885[(2)] = inst_23844);

(statearr_23863_23885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (8))){
var inst_23825 = (state_23848[(7)]);
var inst_23835 = cljs.core.next.call(null,inst_23825);
var inst_23825__$1 = inst_23835;
var state_23848__$1 = (function (){var statearr_23864 = state_23848;
(statearr_23864[(7)] = inst_23825__$1);

return statearr_23864;
})();
var statearr_23865_23886 = state_23848__$1;
(statearr_23865_23886[(2)] = null);

(statearr_23865_23886[(1)] = (2));


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
var statearr_23869 = [null,null,null,null,null,null,null,null];
(statearr_23869[(0)] = state_machine__6988__auto__);

(statearr_23869[(1)] = (1));

return statearr_23869;
});
var state_machine__6988__auto____1 = (function (state_23848){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23870){if((e23870 instanceof Object)){
var ex__6991__auto__ = e23870;
var statearr_23871_23887 = state_23848;
(statearr_23871_23887[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23888 = state_23848;
state_23848 = G__23888;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23872 = f__7044__auto__.call(null);
(statearr_23872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23872;
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

cljs.core.async.Mux = (function (){var obj23890 = {};
return obj23890;
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


cljs.core.async.Mult = (function (){var obj23892 = {};
return obj23892;
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
if(typeof cljs.core.async.t24114 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24114 = (function (cs,ch,mult,meta24115){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24115 = meta24115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24114.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24114.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24114.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24114.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24116){
var self__ = this;
var _24116__$1 = this;
return self__.meta24115;
});})(cs))
;

cljs.core.async.t24114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24116,meta24115__$1){
var self__ = this;
var _24116__$1 = this;
return (new cljs.core.async.t24114(self__.cs,self__.ch,self__.mult,meta24115__$1));
});})(cs))
;

cljs.core.async.t24114.cljs$lang$type = true;

cljs.core.async.t24114.cljs$lang$ctorStr = "cljs.core.async/t24114";

cljs.core.async.t24114.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24114");
});})(cs))
;

cljs.core.async.__GT_t24114 = ((function (cs){
return (function __GT_t24114(cs__$1,ch__$1,mult__$1,meta24115){
return (new cljs.core.async.t24114(cs__$1,ch__$1,mult__$1,meta24115));
});})(cs))
;

}

return (new cljs.core.async.t24114(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___24335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24335,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24335,cs,m,dchan,dctr,done){
return (function (state_24247){
var state_val_24248 = (state_24247[(1)]);
if((state_val_24248 === (7))){
var inst_24243 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24249_24336 = state_24247__$1;
(statearr_24249_24336[(2)] = inst_24243);

(statearr_24249_24336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (20))){
var inst_24148 = (state_24247[(7)]);
var inst_24158 = cljs.core.first.call(null,inst_24148);
var inst_24159 = cljs.core.nth.call(null,inst_24158,(0),null);
var inst_24160 = cljs.core.nth.call(null,inst_24158,(1),null);
var state_24247__$1 = (function (){var statearr_24250 = state_24247;
(statearr_24250[(8)] = inst_24159);

return statearr_24250;
})();
if(cljs.core.truth_(inst_24160)){
var statearr_24251_24337 = state_24247__$1;
(statearr_24251_24337[(1)] = (22));

} else {
var statearr_24252_24338 = state_24247__$1;
(statearr_24252_24338[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (27))){
var inst_24190 = (state_24247[(9)]);
var inst_24195 = (state_24247[(10)]);
var inst_24188 = (state_24247[(11)]);
var inst_24119 = (state_24247[(12)]);
var inst_24195__$1 = cljs.core._nth.call(null,inst_24188,inst_24190);
var inst_24196 = cljs.core.async.put_BANG_.call(null,inst_24195__$1,inst_24119,done);
var state_24247__$1 = (function (){var statearr_24253 = state_24247;
(statearr_24253[(10)] = inst_24195__$1);

return statearr_24253;
})();
if(cljs.core.truth_(inst_24196)){
var statearr_24254_24339 = state_24247__$1;
(statearr_24254_24339[(1)] = (30));

} else {
var statearr_24255_24340 = state_24247__$1;
(statearr_24255_24340[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (1))){
var state_24247__$1 = state_24247;
var statearr_24256_24341 = state_24247__$1;
(statearr_24256_24341[(2)] = null);

(statearr_24256_24341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (24))){
var inst_24148 = (state_24247[(7)]);
var inst_24165 = (state_24247[(2)]);
var inst_24166 = cljs.core.next.call(null,inst_24148);
var inst_24128 = inst_24166;
var inst_24129 = null;
var inst_24130 = (0);
var inst_24131 = (0);
var state_24247__$1 = (function (){var statearr_24257 = state_24247;
(statearr_24257[(13)] = inst_24165);

(statearr_24257[(14)] = inst_24128);

(statearr_24257[(15)] = inst_24131);

(statearr_24257[(16)] = inst_24129);

(statearr_24257[(17)] = inst_24130);

return statearr_24257;
})();
var statearr_24258_24342 = state_24247__$1;
(statearr_24258_24342[(2)] = null);

(statearr_24258_24342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (39))){
var state_24247__$1 = state_24247;
var statearr_24262_24343 = state_24247__$1;
(statearr_24262_24343[(2)] = null);

(statearr_24262_24343[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (4))){
var inst_24119 = (state_24247[(12)]);
var inst_24119__$1 = (state_24247[(2)]);
var inst_24120 = (inst_24119__$1 == null);
var state_24247__$1 = (function (){var statearr_24263 = state_24247;
(statearr_24263[(12)] = inst_24119__$1);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24120)){
var statearr_24264_24344 = state_24247__$1;
(statearr_24264_24344[(1)] = (5));

} else {
var statearr_24265_24345 = state_24247__$1;
(statearr_24265_24345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (15))){
var inst_24128 = (state_24247[(14)]);
var inst_24131 = (state_24247[(15)]);
var inst_24129 = (state_24247[(16)]);
var inst_24130 = (state_24247[(17)]);
var inst_24144 = (state_24247[(2)]);
var inst_24145 = (inst_24131 + (1));
var tmp24259 = inst_24128;
var tmp24260 = inst_24129;
var tmp24261 = inst_24130;
var inst_24128__$1 = tmp24259;
var inst_24129__$1 = tmp24260;
var inst_24130__$1 = tmp24261;
var inst_24131__$1 = inst_24145;
var state_24247__$1 = (function (){var statearr_24266 = state_24247;
(statearr_24266[(14)] = inst_24128__$1);

(statearr_24266[(18)] = inst_24144);

(statearr_24266[(15)] = inst_24131__$1);

(statearr_24266[(16)] = inst_24129__$1);

(statearr_24266[(17)] = inst_24130__$1);

return statearr_24266;
})();
var statearr_24267_24346 = state_24247__$1;
(statearr_24267_24346[(2)] = null);

(statearr_24267_24346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (21))){
var inst_24169 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24271_24347 = state_24247__$1;
(statearr_24271_24347[(2)] = inst_24169);

(statearr_24271_24347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (31))){
var inst_24195 = (state_24247[(10)]);
var inst_24199 = done.call(null,null);
var inst_24200 = cljs.core.async.untap_STAR_.call(null,m,inst_24195);
var state_24247__$1 = (function (){var statearr_24272 = state_24247;
(statearr_24272[(19)] = inst_24199);

return statearr_24272;
})();
var statearr_24273_24348 = state_24247__$1;
(statearr_24273_24348[(2)] = inst_24200);

(statearr_24273_24348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (32))){
var inst_24190 = (state_24247[(9)]);
var inst_24189 = (state_24247[(20)]);
var inst_24188 = (state_24247[(11)]);
var inst_24187 = (state_24247[(21)]);
var inst_24202 = (state_24247[(2)]);
var inst_24203 = (inst_24190 + (1));
var tmp24268 = inst_24189;
var tmp24269 = inst_24188;
var tmp24270 = inst_24187;
var inst_24187__$1 = tmp24270;
var inst_24188__$1 = tmp24269;
var inst_24189__$1 = tmp24268;
var inst_24190__$1 = inst_24203;
var state_24247__$1 = (function (){var statearr_24274 = state_24247;
(statearr_24274[(9)] = inst_24190__$1);

(statearr_24274[(22)] = inst_24202);

(statearr_24274[(20)] = inst_24189__$1);

(statearr_24274[(11)] = inst_24188__$1);

(statearr_24274[(21)] = inst_24187__$1);

return statearr_24274;
})();
var statearr_24275_24349 = state_24247__$1;
(statearr_24275_24349[(2)] = null);

(statearr_24275_24349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (40))){
var inst_24215 = (state_24247[(23)]);
var inst_24219 = done.call(null,null);
var inst_24220 = cljs.core.async.untap_STAR_.call(null,m,inst_24215);
var state_24247__$1 = (function (){var statearr_24276 = state_24247;
(statearr_24276[(24)] = inst_24219);

return statearr_24276;
})();
var statearr_24277_24350 = state_24247__$1;
(statearr_24277_24350[(2)] = inst_24220);

(statearr_24277_24350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (33))){
var inst_24206 = (state_24247[(25)]);
var inst_24208 = cljs.core.chunked_seq_QMARK_.call(null,inst_24206);
var state_24247__$1 = state_24247;
if(inst_24208){
var statearr_24278_24351 = state_24247__$1;
(statearr_24278_24351[(1)] = (36));

} else {
var statearr_24279_24352 = state_24247__$1;
(statearr_24279_24352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (13))){
var inst_24138 = (state_24247[(26)]);
var inst_24141 = cljs.core.async.close_BANG_.call(null,inst_24138);
var state_24247__$1 = state_24247;
var statearr_24280_24353 = state_24247__$1;
(statearr_24280_24353[(2)] = inst_24141);

(statearr_24280_24353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (22))){
var inst_24159 = (state_24247[(8)]);
var inst_24162 = cljs.core.async.close_BANG_.call(null,inst_24159);
var state_24247__$1 = state_24247;
var statearr_24281_24354 = state_24247__$1;
(statearr_24281_24354[(2)] = inst_24162);

(statearr_24281_24354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (36))){
var inst_24206 = (state_24247[(25)]);
var inst_24210 = cljs.core.chunk_first.call(null,inst_24206);
var inst_24211 = cljs.core.chunk_rest.call(null,inst_24206);
var inst_24212 = cljs.core.count.call(null,inst_24210);
var inst_24187 = inst_24211;
var inst_24188 = inst_24210;
var inst_24189 = inst_24212;
var inst_24190 = (0);
var state_24247__$1 = (function (){var statearr_24282 = state_24247;
(statearr_24282[(9)] = inst_24190);

(statearr_24282[(20)] = inst_24189);

(statearr_24282[(11)] = inst_24188);

(statearr_24282[(21)] = inst_24187);

return statearr_24282;
})();
var statearr_24283_24355 = state_24247__$1;
(statearr_24283_24355[(2)] = null);

(statearr_24283_24355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (41))){
var inst_24206 = (state_24247[(25)]);
var inst_24222 = (state_24247[(2)]);
var inst_24223 = cljs.core.next.call(null,inst_24206);
var inst_24187 = inst_24223;
var inst_24188 = null;
var inst_24189 = (0);
var inst_24190 = (0);
var state_24247__$1 = (function (){var statearr_24284 = state_24247;
(statearr_24284[(9)] = inst_24190);

(statearr_24284[(20)] = inst_24189);

(statearr_24284[(11)] = inst_24188);

(statearr_24284[(27)] = inst_24222);

(statearr_24284[(21)] = inst_24187);

return statearr_24284;
})();
var statearr_24285_24356 = state_24247__$1;
(statearr_24285_24356[(2)] = null);

(statearr_24285_24356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (43))){
var state_24247__$1 = state_24247;
var statearr_24286_24357 = state_24247__$1;
(statearr_24286_24357[(2)] = null);

(statearr_24286_24357[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (29))){
var inst_24231 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24287_24358 = state_24247__$1;
(statearr_24287_24358[(2)] = inst_24231);

(statearr_24287_24358[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (44))){
var inst_24240 = (state_24247[(2)]);
var state_24247__$1 = (function (){var statearr_24288 = state_24247;
(statearr_24288[(28)] = inst_24240);

return statearr_24288;
})();
var statearr_24289_24359 = state_24247__$1;
(statearr_24289_24359[(2)] = null);

(statearr_24289_24359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (6))){
var inst_24179 = (state_24247[(29)]);
var inst_24178 = cljs.core.deref.call(null,cs);
var inst_24179__$1 = cljs.core.keys.call(null,inst_24178);
var inst_24180 = cljs.core.count.call(null,inst_24179__$1);
var inst_24181 = cljs.core.reset_BANG_.call(null,dctr,inst_24180);
var inst_24186 = cljs.core.seq.call(null,inst_24179__$1);
var inst_24187 = inst_24186;
var inst_24188 = null;
var inst_24189 = (0);
var inst_24190 = (0);
var state_24247__$1 = (function (){var statearr_24290 = state_24247;
(statearr_24290[(9)] = inst_24190);

(statearr_24290[(20)] = inst_24189);

(statearr_24290[(29)] = inst_24179__$1);

(statearr_24290[(11)] = inst_24188);

(statearr_24290[(30)] = inst_24181);

(statearr_24290[(21)] = inst_24187);

return statearr_24290;
})();
var statearr_24291_24360 = state_24247__$1;
(statearr_24291_24360[(2)] = null);

(statearr_24291_24360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (28))){
var inst_24206 = (state_24247[(25)]);
var inst_24187 = (state_24247[(21)]);
var inst_24206__$1 = cljs.core.seq.call(null,inst_24187);
var state_24247__$1 = (function (){var statearr_24292 = state_24247;
(statearr_24292[(25)] = inst_24206__$1);

return statearr_24292;
})();
if(inst_24206__$1){
var statearr_24293_24361 = state_24247__$1;
(statearr_24293_24361[(1)] = (33));

} else {
var statearr_24294_24362 = state_24247__$1;
(statearr_24294_24362[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (25))){
var inst_24190 = (state_24247[(9)]);
var inst_24189 = (state_24247[(20)]);
var inst_24192 = (inst_24190 < inst_24189);
var inst_24193 = inst_24192;
var state_24247__$1 = state_24247;
if(cljs.core.truth_(inst_24193)){
var statearr_24295_24363 = state_24247__$1;
(statearr_24295_24363[(1)] = (27));

} else {
var statearr_24296_24364 = state_24247__$1;
(statearr_24296_24364[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (34))){
var state_24247__$1 = state_24247;
var statearr_24297_24365 = state_24247__$1;
(statearr_24297_24365[(2)] = null);

(statearr_24297_24365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (17))){
var state_24247__$1 = state_24247;
var statearr_24298_24366 = state_24247__$1;
(statearr_24298_24366[(2)] = null);

(statearr_24298_24366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (3))){
var inst_24245 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24247__$1,inst_24245);
} else {
if((state_val_24248 === (12))){
var inst_24174 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24299_24367 = state_24247__$1;
(statearr_24299_24367[(2)] = inst_24174);

(statearr_24299_24367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (2))){
var state_24247__$1 = state_24247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24247__$1,(4),ch);
} else {
if((state_val_24248 === (23))){
var state_24247__$1 = state_24247;
var statearr_24300_24368 = state_24247__$1;
(statearr_24300_24368[(2)] = null);

(statearr_24300_24368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (35))){
var inst_24229 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24301_24369 = state_24247__$1;
(statearr_24301_24369[(2)] = inst_24229);

(statearr_24301_24369[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (19))){
var inst_24148 = (state_24247[(7)]);
var inst_24152 = cljs.core.chunk_first.call(null,inst_24148);
var inst_24153 = cljs.core.chunk_rest.call(null,inst_24148);
var inst_24154 = cljs.core.count.call(null,inst_24152);
var inst_24128 = inst_24153;
var inst_24129 = inst_24152;
var inst_24130 = inst_24154;
var inst_24131 = (0);
var state_24247__$1 = (function (){var statearr_24302 = state_24247;
(statearr_24302[(14)] = inst_24128);

(statearr_24302[(15)] = inst_24131);

(statearr_24302[(16)] = inst_24129);

(statearr_24302[(17)] = inst_24130);

return statearr_24302;
})();
var statearr_24303_24370 = state_24247__$1;
(statearr_24303_24370[(2)] = null);

(statearr_24303_24370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (11))){
var inst_24128 = (state_24247[(14)]);
var inst_24148 = (state_24247[(7)]);
var inst_24148__$1 = cljs.core.seq.call(null,inst_24128);
var state_24247__$1 = (function (){var statearr_24304 = state_24247;
(statearr_24304[(7)] = inst_24148__$1);

return statearr_24304;
})();
if(inst_24148__$1){
var statearr_24305_24371 = state_24247__$1;
(statearr_24305_24371[(1)] = (16));

} else {
var statearr_24306_24372 = state_24247__$1;
(statearr_24306_24372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (9))){
var inst_24176 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24307_24373 = state_24247__$1;
(statearr_24307_24373[(2)] = inst_24176);

(statearr_24307_24373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (5))){
var inst_24126 = cljs.core.deref.call(null,cs);
var inst_24127 = cljs.core.seq.call(null,inst_24126);
var inst_24128 = inst_24127;
var inst_24129 = null;
var inst_24130 = (0);
var inst_24131 = (0);
var state_24247__$1 = (function (){var statearr_24308 = state_24247;
(statearr_24308[(14)] = inst_24128);

(statearr_24308[(15)] = inst_24131);

(statearr_24308[(16)] = inst_24129);

(statearr_24308[(17)] = inst_24130);

return statearr_24308;
})();
var statearr_24309_24374 = state_24247__$1;
(statearr_24309_24374[(2)] = null);

(statearr_24309_24374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (14))){
var state_24247__$1 = state_24247;
var statearr_24310_24375 = state_24247__$1;
(statearr_24310_24375[(2)] = null);

(statearr_24310_24375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (45))){
var inst_24237 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24311_24376 = state_24247__$1;
(statearr_24311_24376[(2)] = inst_24237);

(statearr_24311_24376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (26))){
var inst_24179 = (state_24247[(29)]);
var inst_24233 = (state_24247[(2)]);
var inst_24234 = cljs.core.seq.call(null,inst_24179);
var state_24247__$1 = (function (){var statearr_24312 = state_24247;
(statearr_24312[(31)] = inst_24233);

return statearr_24312;
})();
if(inst_24234){
var statearr_24313_24377 = state_24247__$1;
(statearr_24313_24377[(1)] = (42));

} else {
var statearr_24314_24378 = state_24247__$1;
(statearr_24314_24378[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (16))){
var inst_24148 = (state_24247[(7)]);
var inst_24150 = cljs.core.chunked_seq_QMARK_.call(null,inst_24148);
var state_24247__$1 = state_24247;
if(inst_24150){
var statearr_24315_24379 = state_24247__$1;
(statearr_24315_24379[(1)] = (19));

} else {
var statearr_24316_24380 = state_24247__$1;
(statearr_24316_24380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (38))){
var inst_24226 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24317_24381 = state_24247__$1;
(statearr_24317_24381[(2)] = inst_24226);

(statearr_24317_24381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (30))){
var state_24247__$1 = state_24247;
var statearr_24318_24382 = state_24247__$1;
(statearr_24318_24382[(2)] = null);

(statearr_24318_24382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (10))){
var inst_24131 = (state_24247[(15)]);
var inst_24129 = (state_24247[(16)]);
var inst_24137 = cljs.core._nth.call(null,inst_24129,inst_24131);
var inst_24138 = cljs.core.nth.call(null,inst_24137,(0),null);
var inst_24139 = cljs.core.nth.call(null,inst_24137,(1),null);
var state_24247__$1 = (function (){var statearr_24319 = state_24247;
(statearr_24319[(26)] = inst_24138);

return statearr_24319;
})();
if(cljs.core.truth_(inst_24139)){
var statearr_24320_24383 = state_24247__$1;
(statearr_24320_24383[(1)] = (13));

} else {
var statearr_24321_24384 = state_24247__$1;
(statearr_24321_24384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (18))){
var inst_24172 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24322_24385 = state_24247__$1;
(statearr_24322_24385[(2)] = inst_24172);

(statearr_24322_24385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (42))){
var state_24247__$1 = state_24247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24247__$1,(45),dchan);
} else {
if((state_val_24248 === (37))){
var inst_24206 = (state_24247[(25)]);
var inst_24215 = (state_24247[(23)]);
var inst_24119 = (state_24247[(12)]);
var inst_24215__$1 = cljs.core.first.call(null,inst_24206);
var inst_24216 = cljs.core.async.put_BANG_.call(null,inst_24215__$1,inst_24119,done);
var state_24247__$1 = (function (){var statearr_24323 = state_24247;
(statearr_24323[(23)] = inst_24215__$1);

return statearr_24323;
})();
if(cljs.core.truth_(inst_24216)){
var statearr_24324_24386 = state_24247__$1;
(statearr_24324_24386[(1)] = (39));

} else {
var statearr_24325_24387 = state_24247__$1;
(statearr_24325_24387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24248 === (8))){
var inst_24131 = (state_24247[(15)]);
var inst_24130 = (state_24247[(17)]);
var inst_24133 = (inst_24131 < inst_24130);
var inst_24134 = inst_24133;
var state_24247__$1 = state_24247;
if(cljs.core.truth_(inst_24134)){
var statearr_24326_24388 = state_24247__$1;
(statearr_24326_24388[(1)] = (10));

} else {
var statearr_24327_24389 = state_24247__$1;
(statearr_24327_24389[(1)] = (11));

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
});})(c__7043__auto___24335,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___24335,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24331[(0)] = state_machine__6988__auto__);

(statearr_24331[(1)] = (1));

return statearr_24331;
});
var state_machine__6988__auto____1 = (function (state_24247){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24332){if((e24332 instanceof Object)){
var ex__6991__auto__ = e24332;
var statearr_24333_24390 = state_24247;
(statearr_24333_24390[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24391 = state_24247;
state_24247 = G__24391;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24247){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24335,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_24334 = f__7044__auto__.call(null);
(statearr_24334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24335);

return statearr_24334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24335,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24393 = {};
return obj24393;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24394){
var map__24399 = p__24394;
var map__24399__$1 = ((cljs.core.seq_QMARK_.call(null,map__24399))?cljs.core.apply.call(null,cljs.core.hash_map,map__24399):map__24399);
var opts = map__24399__$1;
var statearr_24400_24403 = state;
(statearr_24400_24403[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24399,map__24399__$1,opts){
return (function (val){
var statearr_24401_24404 = state;
(statearr_24401_24404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24399,map__24399__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24402_24405 = state;
(statearr_24402_24405[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24394 = null;
if (arguments.length > 3) {
  p__24394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24394);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24406){
var state = cljs.core.first(arglist__24406);
arglist__24406 = cljs.core.next(arglist__24406);
var cont_block = cljs.core.first(arglist__24406);
arglist__24406 = cljs.core.next(arglist__24406);
var ports = cljs.core.first(arglist__24406);
var p__24394 = cljs.core.rest(arglist__24406);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24394);
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
if(typeof cljs.core.async.t24526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24526 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24527){
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
this.meta24527 = meta24527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24526.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24526.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24528){
var self__ = this;
var _24528__$1 = this;
return self__.meta24527;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24528,meta24527__$1){
var self__ = this;
var _24528__$1 = this;
return (new cljs.core.async.t24526(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24527__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24526.cljs$lang$type = true;

cljs.core.async.t24526.cljs$lang$ctorStr = "cljs.core.async/t24526";

cljs.core.async.t24526.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24526");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24526 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24526(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24527){
return (new cljs.core.async.t24526(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24527));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24526(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24598){
var state_val_24599 = (state_24598[(1)]);
if((state_val_24599 === (7))){
var inst_24542 = (state_24598[(7)]);
var inst_24547 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24542);
var state_24598__$1 = state_24598;
var statearr_24600_24646 = state_24598__$1;
(statearr_24600_24646[(2)] = inst_24547);

(statearr_24600_24646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (20))){
var inst_24557 = (state_24598[(8)]);
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24598__$1,(23),out,inst_24557);
} else {
if((state_val_24599 === (1))){
var inst_24532 = (state_24598[(9)]);
var inst_24532__$1 = calc_state.call(null);
var inst_24533 = cljs.core.seq_QMARK_.call(null,inst_24532__$1);
var state_24598__$1 = (function (){var statearr_24601 = state_24598;
(statearr_24601[(9)] = inst_24532__$1);

return statearr_24601;
})();
if(inst_24533){
var statearr_24602_24647 = state_24598__$1;
(statearr_24602_24647[(1)] = (2));

} else {
var statearr_24603_24648 = state_24598__$1;
(statearr_24603_24648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (24))){
var inst_24550 = (state_24598[(10)]);
var inst_24542 = inst_24550;
var state_24598__$1 = (function (){var statearr_24604 = state_24598;
(statearr_24604[(7)] = inst_24542);

return statearr_24604;
})();
var statearr_24605_24649 = state_24598__$1;
(statearr_24605_24649[(2)] = null);

(statearr_24605_24649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (4))){
var inst_24532 = (state_24598[(9)]);
var inst_24538 = (state_24598[(2)]);
var inst_24539 = cljs.core.get.call(null,inst_24538,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24540 = cljs.core.get.call(null,inst_24538,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24541 = cljs.core.get.call(null,inst_24538,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24542 = inst_24532;
var state_24598__$1 = (function (){var statearr_24606 = state_24598;
(statearr_24606[(11)] = inst_24541);

(statearr_24606[(12)] = inst_24540);

(statearr_24606[(13)] = inst_24539);

(statearr_24606[(7)] = inst_24542);

return statearr_24606;
})();
var statearr_24607_24650 = state_24598__$1;
(statearr_24607_24650[(2)] = null);

(statearr_24607_24650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (15))){
var state_24598__$1 = state_24598;
var statearr_24608_24651 = state_24598__$1;
(statearr_24608_24651[(2)] = null);

(statearr_24608_24651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (21))){
var inst_24550 = (state_24598[(10)]);
var inst_24542 = inst_24550;
var state_24598__$1 = (function (){var statearr_24609 = state_24598;
(statearr_24609[(7)] = inst_24542);

return statearr_24609;
})();
var statearr_24610_24652 = state_24598__$1;
(statearr_24610_24652[(2)] = null);

(statearr_24610_24652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (13))){
var inst_24594 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24611_24653 = state_24598__$1;
(statearr_24611_24653[(2)] = inst_24594);

(statearr_24611_24653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (22))){
var inst_24592 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24612_24654 = state_24598__$1;
(statearr_24612_24654[(2)] = inst_24592);

(statearr_24612_24654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (6))){
var inst_24596 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24598__$1,inst_24596);
} else {
if((state_val_24599 === (25))){
var state_24598__$1 = state_24598;
var statearr_24613_24655 = state_24598__$1;
(statearr_24613_24655[(2)] = null);

(statearr_24613_24655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (17))){
var inst_24572 = (state_24598[(14)]);
var state_24598__$1 = state_24598;
var statearr_24614_24656 = state_24598__$1;
(statearr_24614_24656[(2)] = inst_24572);

(statearr_24614_24656[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (3))){
var inst_24532 = (state_24598[(9)]);
var state_24598__$1 = state_24598;
var statearr_24615_24657 = state_24598__$1;
(statearr_24615_24657[(2)] = inst_24532);

(statearr_24615_24657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (12))){
var inst_24558 = (state_24598[(15)]);
var inst_24572 = (state_24598[(14)]);
var inst_24553 = (state_24598[(16)]);
var inst_24572__$1 = inst_24553.call(null,inst_24558);
var state_24598__$1 = (function (){var statearr_24616 = state_24598;
(statearr_24616[(14)] = inst_24572__$1);

return statearr_24616;
})();
if(cljs.core.truth_(inst_24572__$1)){
var statearr_24617_24658 = state_24598__$1;
(statearr_24617_24658[(1)] = (17));

} else {
var statearr_24618_24659 = state_24598__$1;
(statearr_24618_24659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (2))){
var inst_24532 = (state_24598[(9)]);
var inst_24535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24532);
var state_24598__$1 = state_24598;
var statearr_24619_24660 = state_24598__$1;
(statearr_24619_24660[(2)] = inst_24535);

(statearr_24619_24660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (23))){
var inst_24583 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
if(cljs.core.truth_(inst_24583)){
var statearr_24620_24661 = state_24598__$1;
(statearr_24620_24661[(1)] = (24));

} else {
var statearr_24621_24662 = state_24598__$1;
(statearr_24621_24662[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (19))){
var inst_24580 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
if(cljs.core.truth_(inst_24580)){
var statearr_24622_24663 = state_24598__$1;
(statearr_24622_24663[(1)] = (20));

} else {
var statearr_24623_24664 = state_24598__$1;
(statearr_24623_24664[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (11))){
var inst_24557 = (state_24598[(8)]);
var inst_24563 = (inst_24557 == null);
var state_24598__$1 = state_24598;
if(cljs.core.truth_(inst_24563)){
var statearr_24624_24665 = state_24598__$1;
(statearr_24624_24665[(1)] = (14));

} else {
var statearr_24625_24666 = state_24598__$1;
(statearr_24625_24666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (9))){
var inst_24550 = (state_24598[(10)]);
var inst_24550__$1 = (state_24598[(2)]);
var inst_24551 = cljs.core.get.call(null,inst_24550__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24552 = cljs.core.get.call(null,inst_24550__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24553 = cljs.core.get.call(null,inst_24550__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24598__$1 = (function (){var statearr_24626 = state_24598;
(statearr_24626[(17)] = inst_24552);

(statearr_24626[(16)] = inst_24553);

(statearr_24626[(10)] = inst_24550__$1);

return statearr_24626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24598__$1,(10),inst_24551);
} else {
if((state_val_24599 === (5))){
var inst_24542 = (state_24598[(7)]);
var inst_24545 = cljs.core.seq_QMARK_.call(null,inst_24542);
var state_24598__$1 = state_24598;
if(inst_24545){
var statearr_24627_24667 = state_24598__$1;
(statearr_24627_24667[(1)] = (7));

} else {
var statearr_24628_24668 = state_24598__$1;
(statearr_24628_24668[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (14))){
var inst_24558 = (state_24598[(15)]);
var inst_24565 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24558);
var state_24598__$1 = state_24598;
var statearr_24629_24669 = state_24598__$1;
(statearr_24629_24669[(2)] = inst_24565);

(statearr_24629_24669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (26))){
var inst_24588 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24630_24670 = state_24598__$1;
(statearr_24630_24670[(2)] = inst_24588);

(statearr_24630_24670[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (16))){
var inst_24568 = (state_24598[(2)]);
var inst_24569 = calc_state.call(null);
var inst_24542 = inst_24569;
var state_24598__$1 = (function (){var statearr_24631 = state_24598;
(statearr_24631[(18)] = inst_24568);

(statearr_24631[(7)] = inst_24542);

return statearr_24631;
})();
var statearr_24632_24671 = state_24598__$1;
(statearr_24632_24671[(2)] = null);

(statearr_24632_24671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (10))){
var inst_24558 = (state_24598[(15)]);
var inst_24557 = (state_24598[(8)]);
var inst_24556 = (state_24598[(2)]);
var inst_24557__$1 = cljs.core.nth.call(null,inst_24556,(0),null);
var inst_24558__$1 = cljs.core.nth.call(null,inst_24556,(1),null);
var inst_24559 = (inst_24557__$1 == null);
var inst_24560 = cljs.core._EQ_.call(null,inst_24558__$1,change);
var inst_24561 = (inst_24559) || (inst_24560);
var state_24598__$1 = (function (){var statearr_24633 = state_24598;
(statearr_24633[(15)] = inst_24558__$1);

(statearr_24633[(8)] = inst_24557__$1);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24561)){
var statearr_24634_24672 = state_24598__$1;
(statearr_24634_24672[(1)] = (11));

} else {
var statearr_24635_24673 = state_24598__$1;
(statearr_24635_24673[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (18))){
var inst_24552 = (state_24598[(17)]);
var inst_24558 = (state_24598[(15)]);
var inst_24553 = (state_24598[(16)]);
var inst_24575 = cljs.core.empty_QMARK_.call(null,inst_24553);
var inst_24576 = inst_24552.call(null,inst_24558);
var inst_24577 = cljs.core.not.call(null,inst_24576);
var inst_24578 = (inst_24575) && (inst_24577);
var state_24598__$1 = state_24598;
var statearr_24636_24674 = state_24598__$1;
(statearr_24636_24674[(2)] = inst_24578);

(statearr_24636_24674[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (8))){
var inst_24542 = (state_24598[(7)]);
var state_24598__$1 = state_24598;
var statearr_24637_24675 = state_24598__$1;
(statearr_24637_24675[(2)] = inst_24542);

(statearr_24637_24675[(1)] = (9));


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
});})(c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24641[(0)] = state_machine__6988__auto__);

(statearr_24641[(1)] = (1));

return statearr_24641;
});
var state_machine__6988__auto____1 = (function (state_24598){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24642){if((e24642 instanceof Object)){
var ex__6991__auto__ = e24642;
var statearr_24643_24676 = state_24598;
(statearr_24643_24676[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24677 = state_24598;
state_24598 = G__24677;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24598){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_24644 = f__7044__auto__.call(null);
(statearr_24644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24645);

return statearr_24644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24645,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24679 = {};
return obj24679;
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
return (function (p1__24680_SHARP_){
if(cljs.core.truth_(p1__24680_SHARP_.call(null,topic))){
return p1__24680_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24680_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24803 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24803 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24804){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24804 = meta24804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24803.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24803.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24803.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24803.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24803.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24803.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24805){
var self__ = this;
var _24805__$1 = this;
return self__.meta24804;
});})(mults,ensure_mult))
;

cljs.core.async.t24803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24805,meta24804__$1){
var self__ = this;
var _24805__$1 = this;
return (new cljs.core.async.t24803(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24804__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24803.cljs$lang$type = true;

cljs.core.async.t24803.cljs$lang$ctorStr = "cljs.core.async/t24803";

cljs.core.async.t24803.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24803");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24803 = ((function (mults,ensure_mult){
return (function __GT_t24803(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24804){
return (new cljs.core.async.t24803(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24804));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24803(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24925,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24925,mults,ensure_mult,p){
return (function (state_24877){
var state_val_24878 = (state_24877[(1)]);
if((state_val_24878 === (7))){
var inst_24873 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24879_24926 = state_24877__$1;
(statearr_24879_24926[(2)] = inst_24873);

(statearr_24879_24926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (20))){
var state_24877__$1 = state_24877;
var statearr_24880_24927 = state_24877__$1;
(statearr_24880_24927[(2)] = null);

(statearr_24880_24927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (1))){
var state_24877__$1 = state_24877;
var statearr_24881_24928 = state_24877__$1;
(statearr_24881_24928[(2)] = null);

(statearr_24881_24928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (24))){
var inst_24856 = (state_24877[(7)]);
var inst_24865 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24856);
var state_24877__$1 = state_24877;
var statearr_24882_24929 = state_24877__$1;
(statearr_24882_24929[(2)] = inst_24865);

(statearr_24882_24929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (4))){
var inst_24808 = (state_24877[(8)]);
var inst_24808__$1 = (state_24877[(2)]);
var inst_24809 = (inst_24808__$1 == null);
var state_24877__$1 = (function (){var statearr_24883 = state_24877;
(statearr_24883[(8)] = inst_24808__$1);

return statearr_24883;
})();
if(cljs.core.truth_(inst_24809)){
var statearr_24884_24930 = state_24877__$1;
(statearr_24884_24930[(1)] = (5));

} else {
var statearr_24885_24931 = state_24877__$1;
(statearr_24885_24931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (15))){
var inst_24850 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24886_24932 = state_24877__$1;
(statearr_24886_24932[(2)] = inst_24850);

(statearr_24886_24932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (21))){
var inst_24870 = (state_24877[(2)]);
var state_24877__$1 = (function (){var statearr_24887 = state_24877;
(statearr_24887[(9)] = inst_24870);

return statearr_24887;
})();
var statearr_24888_24933 = state_24877__$1;
(statearr_24888_24933[(2)] = null);

(statearr_24888_24933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (13))){
var inst_24832 = (state_24877[(10)]);
var inst_24834 = cljs.core.chunked_seq_QMARK_.call(null,inst_24832);
var state_24877__$1 = state_24877;
if(inst_24834){
var statearr_24889_24934 = state_24877__$1;
(statearr_24889_24934[(1)] = (16));

} else {
var statearr_24890_24935 = state_24877__$1;
(statearr_24890_24935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (22))){
var inst_24862 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
if(cljs.core.truth_(inst_24862)){
var statearr_24891_24936 = state_24877__$1;
(statearr_24891_24936[(1)] = (23));

} else {
var statearr_24892_24937 = state_24877__$1;
(statearr_24892_24937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (6))){
var inst_24858 = (state_24877[(11)]);
var inst_24856 = (state_24877[(7)]);
var inst_24808 = (state_24877[(8)]);
var inst_24856__$1 = topic_fn.call(null,inst_24808);
var inst_24857 = cljs.core.deref.call(null,mults);
var inst_24858__$1 = cljs.core.get.call(null,inst_24857,inst_24856__$1);
var state_24877__$1 = (function (){var statearr_24893 = state_24877;
(statearr_24893[(11)] = inst_24858__$1);

(statearr_24893[(7)] = inst_24856__$1);

return statearr_24893;
})();
if(cljs.core.truth_(inst_24858__$1)){
var statearr_24894_24938 = state_24877__$1;
(statearr_24894_24938[(1)] = (19));

} else {
var statearr_24895_24939 = state_24877__$1;
(statearr_24895_24939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (25))){
var inst_24867 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24896_24940 = state_24877__$1;
(statearr_24896_24940[(2)] = inst_24867);

(statearr_24896_24940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (17))){
var inst_24832 = (state_24877[(10)]);
var inst_24841 = cljs.core.first.call(null,inst_24832);
var inst_24842 = cljs.core.async.muxch_STAR_.call(null,inst_24841);
var inst_24843 = cljs.core.async.close_BANG_.call(null,inst_24842);
var inst_24844 = cljs.core.next.call(null,inst_24832);
var inst_24818 = inst_24844;
var inst_24819 = null;
var inst_24820 = (0);
var inst_24821 = (0);
var state_24877__$1 = (function (){var statearr_24897 = state_24877;
(statearr_24897[(12)] = inst_24819);

(statearr_24897[(13)] = inst_24818);

(statearr_24897[(14)] = inst_24821);

(statearr_24897[(15)] = inst_24820);

(statearr_24897[(16)] = inst_24843);

return statearr_24897;
})();
var statearr_24898_24941 = state_24877__$1;
(statearr_24898_24941[(2)] = null);

(statearr_24898_24941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (3))){
var inst_24875 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24877__$1,inst_24875);
} else {
if((state_val_24878 === (12))){
var inst_24852 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24899_24942 = state_24877__$1;
(statearr_24899_24942[(2)] = inst_24852);

(statearr_24899_24942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (2))){
var state_24877__$1 = state_24877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24877__$1,(4),ch);
} else {
if((state_val_24878 === (23))){
var state_24877__$1 = state_24877;
var statearr_24900_24943 = state_24877__$1;
(statearr_24900_24943[(2)] = null);

(statearr_24900_24943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (19))){
var inst_24858 = (state_24877[(11)]);
var inst_24808 = (state_24877[(8)]);
var inst_24860 = cljs.core.async.muxch_STAR_.call(null,inst_24858);
var state_24877__$1 = state_24877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24877__$1,(22),inst_24860,inst_24808);
} else {
if((state_val_24878 === (11))){
var inst_24818 = (state_24877[(13)]);
var inst_24832 = (state_24877[(10)]);
var inst_24832__$1 = cljs.core.seq.call(null,inst_24818);
var state_24877__$1 = (function (){var statearr_24901 = state_24877;
(statearr_24901[(10)] = inst_24832__$1);

return statearr_24901;
})();
if(inst_24832__$1){
var statearr_24902_24944 = state_24877__$1;
(statearr_24902_24944[(1)] = (13));

} else {
var statearr_24903_24945 = state_24877__$1;
(statearr_24903_24945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (9))){
var inst_24854 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24904_24946 = state_24877__$1;
(statearr_24904_24946[(2)] = inst_24854);

(statearr_24904_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (5))){
var inst_24815 = cljs.core.deref.call(null,mults);
var inst_24816 = cljs.core.vals.call(null,inst_24815);
var inst_24817 = cljs.core.seq.call(null,inst_24816);
var inst_24818 = inst_24817;
var inst_24819 = null;
var inst_24820 = (0);
var inst_24821 = (0);
var state_24877__$1 = (function (){var statearr_24905 = state_24877;
(statearr_24905[(12)] = inst_24819);

(statearr_24905[(13)] = inst_24818);

(statearr_24905[(14)] = inst_24821);

(statearr_24905[(15)] = inst_24820);

return statearr_24905;
})();
var statearr_24906_24947 = state_24877__$1;
(statearr_24906_24947[(2)] = null);

(statearr_24906_24947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (14))){
var state_24877__$1 = state_24877;
var statearr_24910_24948 = state_24877__$1;
(statearr_24910_24948[(2)] = null);

(statearr_24910_24948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (16))){
var inst_24832 = (state_24877[(10)]);
var inst_24836 = cljs.core.chunk_first.call(null,inst_24832);
var inst_24837 = cljs.core.chunk_rest.call(null,inst_24832);
var inst_24838 = cljs.core.count.call(null,inst_24836);
var inst_24818 = inst_24837;
var inst_24819 = inst_24836;
var inst_24820 = inst_24838;
var inst_24821 = (0);
var state_24877__$1 = (function (){var statearr_24911 = state_24877;
(statearr_24911[(12)] = inst_24819);

(statearr_24911[(13)] = inst_24818);

(statearr_24911[(14)] = inst_24821);

(statearr_24911[(15)] = inst_24820);

return statearr_24911;
})();
var statearr_24912_24949 = state_24877__$1;
(statearr_24912_24949[(2)] = null);

(statearr_24912_24949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (10))){
var inst_24819 = (state_24877[(12)]);
var inst_24818 = (state_24877[(13)]);
var inst_24821 = (state_24877[(14)]);
var inst_24820 = (state_24877[(15)]);
var inst_24826 = cljs.core._nth.call(null,inst_24819,inst_24821);
var inst_24827 = cljs.core.async.muxch_STAR_.call(null,inst_24826);
var inst_24828 = cljs.core.async.close_BANG_.call(null,inst_24827);
var inst_24829 = (inst_24821 + (1));
var tmp24907 = inst_24819;
var tmp24908 = inst_24818;
var tmp24909 = inst_24820;
var inst_24818__$1 = tmp24908;
var inst_24819__$1 = tmp24907;
var inst_24820__$1 = tmp24909;
var inst_24821__$1 = inst_24829;
var state_24877__$1 = (function (){var statearr_24913 = state_24877;
(statearr_24913[(12)] = inst_24819__$1);

(statearr_24913[(13)] = inst_24818__$1);

(statearr_24913[(14)] = inst_24821__$1);

(statearr_24913[(15)] = inst_24820__$1);

(statearr_24913[(17)] = inst_24828);

return statearr_24913;
})();
var statearr_24914_24950 = state_24877__$1;
(statearr_24914_24950[(2)] = null);

(statearr_24914_24950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (18))){
var inst_24847 = (state_24877[(2)]);
var state_24877__$1 = state_24877;
var statearr_24915_24951 = state_24877__$1;
(statearr_24915_24951[(2)] = inst_24847);

(statearr_24915_24951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24878 === (8))){
var inst_24821 = (state_24877[(14)]);
var inst_24820 = (state_24877[(15)]);
var inst_24823 = (inst_24821 < inst_24820);
var inst_24824 = inst_24823;
var state_24877__$1 = state_24877;
if(cljs.core.truth_(inst_24824)){
var statearr_24916_24952 = state_24877__$1;
(statearr_24916_24952[(1)] = (10));

} else {
var statearr_24917_24953 = state_24877__$1;
(statearr_24917_24953[(1)] = (11));

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
});})(c__7043__auto___24925,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___24925,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = state_machine__6988__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var state_machine__6988__auto____1 = (function (state_24877){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__6991__auto__ = e24922;
var statearr_24923_24954 = state_24877;
(statearr_24923_24954[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24955 = state_24877;
state_24877 = G__24955;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24877){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24925,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_24924 = f__7044__auto__.call(null);
(statearr_24924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24925);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24925,mults,ensure_mult,p))
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
var c__7043__auto___25092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (7))){
var state_25062__$1 = state_25062;
var statearr_25064_25093 = state_25062__$1;
(statearr_25064_25093[(2)] = null);

(statearr_25064_25093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (1))){
var state_25062__$1 = state_25062;
var statearr_25065_25094 = state_25062__$1;
(statearr_25065_25094[(2)] = null);

(statearr_25065_25094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (4))){
var inst_25026 = (state_25062[(7)]);
var inst_25028 = (inst_25026 < cnt);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25028)){
var statearr_25066_25095 = state_25062__$1;
(statearr_25066_25095[(1)] = (6));

} else {
var statearr_25067_25096 = state_25062__$1;
(statearr_25067_25096[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (15))){
var inst_25058 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25068_25097 = state_25062__$1;
(statearr_25068_25097[(2)] = inst_25058);

(statearr_25068_25097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (13))){
var inst_25051 = cljs.core.async.close_BANG_.call(null,out);
var state_25062__$1 = state_25062;
var statearr_25069_25098 = state_25062__$1;
(statearr_25069_25098[(2)] = inst_25051);

(statearr_25069_25098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (6))){
var state_25062__$1 = state_25062;
var statearr_25070_25099 = state_25062__$1;
(statearr_25070_25099[(2)] = null);

(statearr_25070_25099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (3))){
var inst_25060 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (12))){
var inst_25048 = (state_25062[(8)]);
var inst_25048__$1 = (state_25062[(2)]);
var inst_25049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25048__$1);
var state_25062__$1 = (function (){var statearr_25071 = state_25062;
(statearr_25071[(8)] = inst_25048__$1);

return statearr_25071;
})();
if(cljs.core.truth_(inst_25049)){
var statearr_25072_25100 = state_25062__$1;
(statearr_25072_25100[(1)] = (13));

} else {
var statearr_25073_25101 = state_25062__$1;
(statearr_25073_25101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (2))){
var inst_25025 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25026 = (0);
var state_25062__$1 = (function (){var statearr_25074 = state_25062;
(statearr_25074[(9)] = inst_25025);

(statearr_25074[(7)] = inst_25026);

return statearr_25074;
})();
var statearr_25075_25102 = state_25062__$1;
(statearr_25075_25102[(2)] = null);

(statearr_25075_25102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (11))){
var inst_25026 = (state_25062[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25062,(10),Object,null,(9));
var inst_25035 = chs__$1.call(null,inst_25026);
var inst_25036 = done.call(null,inst_25026);
var inst_25037 = cljs.core.async.take_BANG_.call(null,inst_25035,inst_25036);
var state_25062__$1 = state_25062;
var statearr_25076_25103 = state_25062__$1;
(statearr_25076_25103[(2)] = inst_25037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (9))){
var inst_25026 = (state_25062[(7)]);
var inst_25039 = (state_25062[(2)]);
var inst_25040 = (inst_25026 + (1));
var inst_25026__$1 = inst_25040;
var state_25062__$1 = (function (){var statearr_25077 = state_25062;
(statearr_25077[(7)] = inst_25026__$1);

(statearr_25077[(10)] = inst_25039);

return statearr_25077;
})();
var statearr_25078_25104 = state_25062__$1;
(statearr_25078_25104[(2)] = null);

(statearr_25078_25104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (5))){
var inst_25046 = (state_25062[(2)]);
var state_25062__$1 = (function (){var statearr_25079 = state_25062;
(statearr_25079[(11)] = inst_25046);

return statearr_25079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25062__$1,(12),dchan);
} else {
if((state_val_25063 === (14))){
var inst_25048 = (state_25062[(8)]);
var inst_25053 = cljs.core.apply.call(null,f,inst_25048);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25062__$1,(16),out,inst_25053);
} else {
if((state_val_25063 === (16))){
var inst_25055 = (state_25062[(2)]);
var state_25062__$1 = (function (){var statearr_25080 = state_25062;
(statearr_25080[(12)] = inst_25055);

return statearr_25080;
})();
var statearr_25081_25105 = state_25062__$1;
(statearr_25081_25105[(2)] = null);

(statearr_25081_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (10))){
var inst_25030 = (state_25062[(2)]);
var inst_25031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25062__$1 = (function (){var statearr_25082 = state_25062;
(statearr_25082[(13)] = inst_25030);

return statearr_25082;
})();
var statearr_25083_25106 = state_25062__$1;
(statearr_25083_25106[(2)] = inst_25031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (8))){
var inst_25044 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25084_25107 = state_25062__$1;
(statearr_25084_25107[(2)] = inst_25044);

(statearr_25084_25107[(1)] = (5));


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
});})(c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25088[(0)] = state_machine__6988__auto__);

(statearr_25088[(1)] = (1));

return statearr_25088;
});
var state_machine__6988__auto____1 = (function (state_25062){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25089){if((e25089 instanceof Object)){
var ex__6991__auto__ = e25089;
var statearr_25090_25108 = state_25062;
(statearr_25090_25108[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25109 = state_25062;
state_25062 = G__25109;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_25091 = f__7044__auto__.call(null);
(statearr_25091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25092);

return statearr_25091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25092,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___25217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25217,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25217,out){
return (function (state_25193){
var state_val_25194 = (state_25193[(1)]);
if((state_val_25194 === (7))){
var inst_25173 = (state_25193[(7)]);
var inst_25172 = (state_25193[(8)]);
var inst_25172__$1 = (state_25193[(2)]);
var inst_25173__$1 = cljs.core.nth.call(null,inst_25172__$1,(0),null);
var inst_25174 = cljs.core.nth.call(null,inst_25172__$1,(1),null);
var inst_25175 = (inst_25173__$1 == null);
var state_25193__$1 = (function (){var statearr_25195 = state_25193;
(statearr_25195[(7)] = inst_25173__$1);

(statearr_25195[(8)] = inst_25172__$1);

(statearr_25195[(9)] = inst_25174);

return statearr_25195;
})();
if(cljs.core.truth_(inst_25175)){
var statearr_25196_25218 = state_25193__$1;
(statearr_25196_25218[(1)] = (8));

} else {
var statearr_25197_25219 = state_25193__$1;
(statearr_25197_25219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (1))){
var inst_25164 = cljs.core.vec.call(null,chs);
var inst_25165 = inst_25164;
var state_25193__$1 = (function (){var statearr_25198 = state_25193;
(statearr_25198[(10)] = inst_25165);

return statearr_25198;
})();
var statearr_25199_25220 = state_25193__$1;
(statearr_25199_25220[(2)] = null);

(statearr_25199_25220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (4))){
var inst_25165 = (state_25193[(10)]);
var state_25193__$1 = state_25193;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25193__$1,(7),inst_25165);
} else {
if((state_val_25194 === (6))){
var inst_25189 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
var statearr_25200_25221 = state_25193__$1;
(statearr_25200_25221[(2)] = inst_25189);

(statearr_25200_25221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (3))){
var inst_25191 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25193__$1,inst_25191);
} else {
if((state_val_25194 === (2))){
var inst_25165 = (state_25193[(10)]);
var inst_25167 = cljs.core.count.call(null,inst_25165);
var inst_25168 = (inst_25167 > (0));
var state_25193__$1 = state_25193;
if(cljs.core.truth_(inst_25168)){
var statearr_25202_25222 = state_25193__$1;
(statearr_25202_25222[(1)] = (4));

} else {
var statearr_25203_25223 = state_25193__$1;
(statearr_25203_25223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (11))){
var inst_25165 = (state_25193[(10)]);
var inst_25182 = (state_25193[(2)]);
var tmp25201 = inst_25165;
var inst_25165__$1 = tmp25201;
var state_25193__$1 = (function (){var statearr_25204 = state_25193;
(statearr_25204[(10)] = inst_25165__$1);

(statearr_25204[(11)] = inst_25182);

return statearr_25204;
})();
var statearr_25205_25224 = state_25193__$1;
(statearr_25205_25224[(2)] = null);

(statearr_25205_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (9))){
var inst_25173 = (state_25193[(7)]);
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25193__$1,(11),out,inst_25173);
} else {
if((state_val_25194 === (5))){
var inst_25187 = cljs.core.async.close_BANG_.call(null,out);
var state_25193__$1 = state_25193;
var statearr_25206_25225 = state_25193__$1;
(statearr_25206_25225[(2)] = inst_25187);

(statearr_25206_25225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (10))){
var inst_25185 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
var statearr_25207_25226 = state_25193__$1;
(statearr_25207_25226[(2)] = inst_25185);

(statearr_25207_25226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (8))){
var inst_25165 = (state_25193[(10)]);
var inst_25173 = (state_25193[(7)]);
var inst_25172 = (state_25193[(8)]);
var inst_25174 = (state_25193[(9)]);
var inst_25177 = (function (){var c = inst_25174;
var v = inst_25173;
var vec__25170 = inst_25172;
var cs = inst_25165;
return ((function (c,v,vec__25170,cs,inst_25165,inst_25173,inst_25172,inst_25174,state_val_25194,c__7043__auto___25217,out){
return (function (p1__25110_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25110_SHARP_);
});
;})(c,v,vec__25170,cs,inst_25165,inst_25173,inst_25172,inst_25174,state_val_25194,c__7043__auto___25217,out))
})();
var inst_25178 = cljs.core.filterv.call(null,inst_25177,inst_25165);
var inst_25165__$1 = inst_25178;
var state_25193__$1 = (function (){var statearr_25208 = state_25193;
(statearr_25208[(10)] = inst_25165__$1);

return statearr_25208;
})();
var statearr_25209_25227 = state_25193__$1;
(statearr_25209_25227[(2)] = null);

(statearr_25209_25227[(1)] = (2));


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
});})(c__7043__auto___25217,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25217,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25213[(0)] = state_machine__6988__auto__);

(statearr_25213[(1)] = (1));

return statearr_25213;
});
var state_machine__6988__auto____1 = (function (state_25193){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25214){if((e25214 instanceof Object)){
var ex__6991__auto__ = e25214;
var statearr_25215_25228 = state_25193;
(statearr_25215_25228[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25229 = state_25193;
state_25193 = G__25229;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25193){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25217,out))
})();
var state__7045__auto__ = (function (){var statearr_25216 = f__7044__auto__.call(null);
(statearr_25216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25217);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25217,out))
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
var c__7043__auto___25322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25322,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25322,out){
return (function (state_25299){
var state_val_25300 = (state_25299[(1)]);
if((state_val_25300 === (7))){
var inst_25281 = (state_25299[(7)]);
var inst_25281__$1 = (state_25299[(2)]);
var inst_25282 = (inst_25281__$1 == null);
var inst_25283 = cljs.core.not.call(null,inst_25282);
var state_25299__$1 = (function (){var statearr_25301 = state_25299;
(statearr_25301[(7)] = inst_25281__$1);

return statearr_25301;
})();
if(inst_25283){
var statearr_25302_25323 = state_25299__$1;
(statearr_25302_25323[(1)] = (8));

} else {
var statearr_25303_25324 = state_25299__$1;
(statearr_25303_25324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (1))){
var inst_25276 = (0);
var state_25299__$1 = (function (){var statearr_25304 = state_25299;
(statearr_25304[(8)] = inst_25276);

return statearr_25304;
})();
var statearr_25305_25325 = state_25299__$1;
(statearr_25305_25325[(2)] = null);

(statearr_25305_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (4))){
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25299__$1,(7),ch);
} else {
if((state_val_25300 === (6))){
var inst_25294 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25306_25326 = state_25299__$1;
(statearr_25306_25326[(2)] = inst_25294);

(statearr_25306_25326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (3))){
var inst_25296 = (state_25299[(2)]);
var inst_25297 = cljs.core.async.close_BANG_.call(null,out);
var state_25299__$1 = (function (){var statearr_25307 = state_25299;
(statearr_25307[(9)] = inst_25296);

return statearr_25307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25299__$1,inst_25297);
} else {
if((state_val_25300 === (2))){
var inst_25276 = (state_25299[(8)]);
var inst_25278 = (inst_25276 < n);
var state_25299__$1 = state_25299;
if(cljs.core.truth_(inst_25278)){
var statearr_25308_25327 = state_25299__$1;
(statearr_25308_25327[(1)] = (4));

} else {
var statearr_25309_25328 = state_25299__$1;
(statearr_25309_25328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (11))){
var inst_25276 = (state_25299[(8)]);
var inst_25286 = (state_25299[(2)]);
var inst_25287 = (inst_25276 + (1));
var inst_25276__$1 = inst_25287;
var state_25299__$1 = (function (){var statearr_25310 = state_25299;
(statearr_25310[(10)] = inst_25286);

(statearr_25310[(8)] = inst_25276__$1);

return statearr_25310;
})();
var statearr_25311_25329 = state_25299__$1;
(statearr_25311_25329[(2)] = null);

(statearr_25311_25329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (9))){
var state_25299__$1 = state_25299;
var statearr_25312_25330 = state_25299__$1;
(statearr_25312_25330[(2)] = null);

(statearr_25312_25330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (5))){
var state_25299__$1 = state_25299;
var statearr_25313_25331 = state_25299__$1;
(statearr_25313_25331[(2)] = null);

(statearr_25313_25331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (10))){
var inst_25291 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25314_25332 = state_25299__$1;
(statearr_25314_25332[(2)] = inst_25291);

(statearr_25314_25332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (8))){
var inst_25281 = (state_25299[(7)]);
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25299__$1,(11),out,inst_25281);
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
});})(c__7043__auto___25322,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25322,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25318[(0)] = state_machine__6988__auto__);

(statearr_25318[(1)] = (1));

return statearr_25318;
});
var state_machine__6988__auto____1 = (function (state_25299){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25319){if((e25319 instanceof Object)){
var ex__6991__auto__ = e25319;
var statearr_25320_25333 = state_25299;
(statearr_25320_25333[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25334 = state_25299;
state_25299 = G__25334;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25299){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25322,out))
})();
var state__7045__auto__ = (function (){var statearr_25321 = f__7044__auto__.call(null);
(statearr_25321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25322);

return statearr_25321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25322,out))
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
if(typeof cljs.core.async.t25342 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25342 = (function (ch,f,map_LT_,meta25343){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25343 = meta25343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25345 = (function (fn1,_,meta25343,map_LT_,f,ch,meta25346){
this.fn1 = fn1;
this._ = _;
this.meta25343 = meta25343;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25346 = meta25346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25335_SHARP_){
return f1.call(null,(((p1__25335_SHARP_ == null))?null:self__.f.call(null,p1__25335_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25347){
var self__ = this;
var _25347__$1 = this;
return self__.meta25346;
});})(___$1))
;

cljs.core.async.t25345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25347,meta25346__$1){
var self__ = this;
var _25347__$1 = this;
return (new cljs.core.async.t25345(self__.fn1,self__._,self__.meta25343,self__.map_LT_,self__.f,self__.ch,meta25346__$1));
});})(___$1))
;

cljs.core.async.t25345.cljs$lang$type = true;

cljs.core.async.t25345.cljs$lang$ctorStr = "cljs.core.async/t25345";

cljs.core.async.t25345.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25345");
});})(___$1))
;

cljs.core.async.__GT_t25345 = ((function (___$1){
return (function __GT_t25345(fn1__$1,___$2,meta25343__$1,map_LT___$1,f__$1,ch__$1,meta25346){
return (new cljs.core.async.t25345(fn1__$1,___$2,meta25343__$1,map_LT___$1,f__$1,ch__$1,meta25346));
});})(___$1))
;

}

return (new cljs.core.async.t25345(fn1,___$1,self__.meta25343,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25344){
var self__ = this;
var _25344__$1 = this;
return self__.meta25343;
});

cljs.core.async.t25342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25344,meta25343__$1){
var self__ = this;
var _25344__$1 = this;
return (new cljs.core.async.t25342(self__.ch,self__.f,self__.map_LT_,meta25343__$1));
});

cljs.core.async.t25342.cljs$lang$type = true;

cljs.core.async.t25342.cljs$lang$ctorStr = "cljs.core.async/t25342";

cljs.core.async.t25342.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25342");
});

cljs.core.async.__GT_t25342 = (function __GT_t25342(ch__$1,f__$1,map_LT___$1,meta25343){
return (new cljs.core.async.t25342(ch__$1,f__$1,map_LT___$1,meta25343));
});

}

return (new cljs.core.async.t25342(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25351 = (function (ch,f,map_GT_,meta25352){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25352 = meta25352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25353){
var self__ = this;
var _25353__$1 = this;
return self__.meta25352;
});

cljs.core.async.t25351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25353,meta25352__$1){
var self__ = this;
var _25353__$1 = this;
return (new cljs.core.async.t25351(self__.ch,self__.f,self__.map_GT_,meta25352__$1));
});

cljs.core.async.t25351.cljs$lang$type = true;

cljs.core.async.t25351.cljs$lang$ctorStr = "cljs.core.async/t25351";

cljs.core.async.t25351.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25351");
});

cljs.core.async.__GT_t25351 = (function __GT_t25351(ch__$1,f__$1,map_GT___$1,meta25352){
return (new cljs.core.async.t25351(ch__$1,f__$1,map_GT___$1,meta25352));
});

}

return (new cljs.core.async.t25351(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25357 = (function (ch,p,filter_GT_,meta25358){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25358 = meta25358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25359){
var self__ = this;
var _25359__$1 = this;
return self__.meta25358;
});

cljs.core.async.t25357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25359,meta25358__$1){
var self__ = this;
var _25359__$1 = this;
return (new cljs.core.async.t25357(self__.ch,self__.p,self__.filter_GT_,meta25358__$1));
});

cljs.core.async.t25357.cljs$lang$type = true;

cljs.core.async.t25357.cljs$lang$ctorStr = "cljs.core.async/t25357";

cljs.core.async.t25357.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25357");
});

cljs.core.async.__GT_t25357 = (function __GT_t25357(ch__$1,p__$1,filter_GT___$1,meta25358){
return (new cljs.core.async.t25357(ch__$1,p__$1,filter_GT___$1,meta25358));
});

}

return (new cljs.core.async.t25357(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___25442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25442,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25442,out){
return (function (state_25421){
var state_val_25422 = (state_25421[(1)]);
if((state_val_25422 === (7))){
var inst_25417 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25423_25443 = state_25421__$1;
(statearr_25423_25443[(2)] = inst_25417);

(statearr_25423_25443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (1))){
var state_25421__$1 = state_25421;
var statearr_25424_25444 = state_25421__$1;
(statearr_25424_25444[(2)] = null);

(statearr_25424_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (4))){
var inst_25403 = (state_25421[(7)]);
var inst_25403__$1 = (state_25421[(2)]);
var inst_25404 = (inst_25403__$1 == null);
var state_25421__$1 = (function (){var statearr_25425 = state_25421;
(statearr_25425[(7)] = inst_25403__$1);

return statearr_25425;
})();
if(cljs.core.truth_(inst_25404)){
var statearr_25426_25445 = state_25421__$1;
(statearr_25426_25445[(1)] = (5));

} else {
var statearr_25427_25446 = state_25421__$1;
(statearr_25427_25446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (6))){
var inst_25403 = (state_25421[(7)]);
var inst_25408 = p.call(null,inst_25403);
var state_25421__$1 = state_25421;
if(cljs.core.truth_(inst_25408)){
var statearr_25428_25447 = state_25421__$1;
(statearr_25428_25447[(1)] = (8));

} else {
var statearr_25429_25448 = state_25421__$1;
(statearr_25429_25448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (3))){
var inst_25419 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25421__$1,inst_25419);
} else {
if((state_val_25422 === (2))){
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25421__$1,(4),ch);
} else {
if((state_val_25422 === (11))){
var inst_25411 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25430_25449 = state_25421__$1;
(statearr_25430_25449[(2)] = inst_25411);

(statearr_25430_25449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (9))){
var state_25421__$1 = state_25421;
var statearr_25431_25450 = state_25421__$1;
(statearr_25431_25450[(2)] = null);

(statearr_25431_25450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (5))){
var inst_25406 = cljs.core.async.close_BANG_.call(null,out);
var state_25421__$1 = state_25421;
var statearr_25432_25451 = state_25421__$1;
(statearr_25432_25451[(2)] = inst_25406);

(statearr_25432_25451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (10))){
var inst_25414 = (state_25421[(2)]);
var state_25421__$1 = (function (){var statearr_25433 = state_25421;
(statearr_25433[(8)] = inst_25414);

return statearr_25433;
})();
var statearr_25434_25452 = state_25421__$1;
(statearr_25434_25452[(2)] = null);

(statearr_25434_25452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (8))){
var inst_25403 = (state_25421[(7)]);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25421__$1,(11),out,inst_25403);
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
});})(c__7043__auto___25442,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25442,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25438 = [null,null,null,null,null,null,null,null,null];
(statearr_25438[(0)] = state_machine__6988__auto__);

(statearr_25438[(1)] = (1));

return statearr_25438;
});
var state_machine__6988__auto____1 = (function (state_25421){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25439){if((e25439 instanceof Object)){
var ex__6991__auto__ = e25439;
var statearr_25440_25453 = state_25421;
(statearr_25440_25453[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25454 = state_25421;
state_25421 = G__25454;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25421){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25442,out))
})();
var state__7045__auto__ = (function (){var statearr_25441 = f__7044__auto__.call(null);
(statearr_25441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25442);

return statearr_25441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25442,out))
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
return (function (state_25620){
var state_val_25621 = (state_25620[(1)]);
if((state_val_25621 === (7))){
var inst_25616 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25622_25663 = state_25620__$1;
(statearr_25622_25663[(2)] = inst_25616);

(statearr_25622_25663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (20))){
var inst_25586 = (state_25620[(7)]);
var inst_25597 = (state_25620[(2)]);
var inst_25598 = cljs.core.next.call(null,inst_25586);
var inst_25572 = inst_25598;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25620__$1 = (function (){var statearr_25623 = state_25620;
(statearr_25623[(8)] = inst_25575);

(statearr_25623[(9)] = inst_25597);

(statearr_25623[(10)] = inst_25573);

(statearr_25623[(11)] = inst_25574);

(statearr_25623[(12)] = inst_25572);

return statearr_25623;
})();
var statearr_25624_25664 = state_25620__$1;
(statearr_25624_25664[(2)] = null);

(statearr_25624_25664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (1))){
var state_25620__$1 = state_25620;
var statearr_25625_25665 = state_25620__$1;
(statearr_25625_25665[(2)] = null);

(statearr_25625_25665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (4))){
var inst_25561 = (state_25620[(13)]);
var inst_25561__$1 = (state_25620[(2)]);
var inst_25562 = (inst_25561__$1 == null);
var state_25620__$1 = (function (){var statearr_25626 = state_25620;
(statearr_25626[(13)] = inst_25561__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25562)){
var statearr_25627_25666 = state_25620__$1;
(statearr_25627_25666[(1)] = (5));

} else {
var statearr_25628_25667 = state_25620__$1;
(statearr_25628_25667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (15))){
var state_25620__$1 = state_25620;
var statearr_25632_25668 = state_25620__$1;
(statearr_25632_25668[(2)] = null);

(statearr_25632_25668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (21))){
var state_25620__$1 = state_25620;
var statearr_25633_25669 = state_25620__$1;
(statearr_25633_25669[(2)] = null);

(statearr_25633_25669[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (13))){
var inst_25575 = (state_25620[(8)]);
var inst_25573 = (state_25620[(10)]);
var inst_25574 = (state_25620[(11)]);
var inst_25572 = (state_25620[(12)]);
var inst_25582 = (state_25620[(2)]);
var inst_25583 = (inst_25575 + (1));
var tmp25629 = inst_25573;
var tmp25630 = inst_25574;
var tmp25631 = inst_25572;
var inst_25572__$1 = tmp25631;
var inst_25573__$1 = tmp25629;
var inst_25574__$1 = tmp25630;
var inst_25575__$1 = inst_25583;
var state_25620__$1 = (function (){var statearr_25634 = state_25620;
(statearr_25634[(8)] = inst_25575__$1);

(statearr_25634[(10)] = inst_25573__$1);

(statearr_25634[(11)] = inst_25574__$1);

(statearr_25634[(12)] = inst_25572__$1);

(statearr_25634[(14)] = inst_25582);

return statearr_25634;
})();
var statearr_25635_25670 = state_25620__$1;
(statearr_25635_25670[(2)] = null);

(statearr_25635_25670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (22))){
var state_25620__$1 = state_25620;
var statearr_25636_25671 = state_25620__$1;
(statearr_25636_25671[(2)] = null);

(statearr_25636_25671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (6))){
var inst_25561 = (state_25620[(13)]);
var inst_25570 = f.call(null,inst_25561);
var inst_25571 = cljs.core.seq.call(null,inst_25570);
var inst_25572 = inst_25571;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25620__$1 = (function (){var statearr_25637 = state_25620;
(statearr_25637[(8)] = inst_25575);

(statearr_25637[(10)] = inst_25573);

(statearr_25637[(11)] = inst_25574);

(statearr_25637[(12)] = inst_25572);

return statearr_25637;
})();
var statearr_25638_25672 = state_25620__$1;
(statearr_25638_25672[(2)] = null);

(statearr_25638_25672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (17))){
var inst_25586 = (state_25620[(7)]);
var inst_25590 = cljs.core.chunk_first.call(null,inst_25586);
var inst_25591 = cljs.core.chunk_rest.call(null,inst_25586);
var inst_25592 = cljs.core.count.call(null,inst_25590);
var inst_25572 = inst_25591;
var inst_25573 = inst_25590;
var inst_25574 = inst_25592;
var inst_25575 = (0);
var state_25620__$1 = (function (){var statearr_25639 = state_25620;
(statearr_25639[(8)] = inst_25575);

(statearr_25639[(10)] = inst_25573);

(statearr_25639[(11)] = inst_25574);

(statearr_25639[(12)] = inst_25572);

return statearr_25639;
})();
var statearr_25640_25673 = state_25620__$1;
(statearr_25640_25673[(2)] = null);

(statearr_25640_25673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (3))){
var inst_25618 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25620__$1,inst_25618);
} else {
if((state_val_25621 === (12))){
var inst_25606 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25641_25674 = state_25620__$1;
(statearr_25641_25674[(2)] = inst_25606);

(statearr_25641_25674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (2))){
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25620__$1,(4),in$);
} else {
if((state_val_25621 === (23))){
var inst_25614 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25642_25675 = state_25620__$1;
(statearr_25642_25675[(2)] = inst_25614);

(statearr_25642_25675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (19))){
var inst_25601 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25643_25676 = state_25620__$1;
(statearr_25643_25676[(2)] = inst_25601);

(statearr_25643_25676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (11))){
var inst_25586 = (state_25620[(7)]);
var inst_25572 = (state_25620[(12)]);
var inst_25586__$1 = cljs.core.seq.call(null,inst_25572);
var state_25620__$1 = (function (){var statearr_25644 = state_25620;
(statearr_25644[(7)] = inst_25586__$1);

return statearr_25644;
})();
if(inst_25586__$1){
var statearr_25645_25677 = state_25620__$1;
(statearr_25645_25677[(1)] = (14));

} else {
var statearr_25646_25678 = state_25620__$1;
(statearr_25646_25678[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (9))){
var inst_25608 = (state_25620[(2)]);
var inst_25609 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25620__$1 = (function (){var statearr_25647 = state_25620;
(statearr_25647[(15)] = inst_25608);

return statearr_25647;
})();
if(cljs.core.truth_(inst_25609)){
var statearr_25648_25679 = state_25620__$1;
(statearr_25648_25679[(1)] = (21));

} else {
var statearr_25649_25680 = state_25620__$1;
(statearr_25649_25680[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (5))){
var inst_25564 = cljs.core.async.close_BANG_.call(null,out);
var state_25620__$1 = state_25620;
var statearr_25650_25681 = state_25620__$1;
(statearr_25650_25681[(2)] = inst_25564);

(statearr_25650_25681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (14))){
var inst_25586 = (state_25620[(7)]);
var inst_25588 = cljs.core.chunked_seq_QMARK_.call(null,inst_25586);
var state_25620__$1 = state_25620;
if(inst_25588){
var statearr_25651_25682 = state_25620__$1;
(statearr_25651_25682[(1)] = (17));

} else {
var statearr_25652_25683 = state_25620__$1;
(statearr_25652_25683[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (16))){
var inst_25604 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25653_25684 = state_25620__$1;
(statearr_25653_25684[(2)] = inst_25604);

(statearr_25653_25684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (10))){
var inst_25575 = (state_25620[(8)]);
var inst_25573 = (state_25620[(10)]);
var inst_25580 = cljs.core._nth.call(null,inst_25573,inst_25575);
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25620__$1,(13),out,inst_25580);
} else {
if((state_val_25621 === (18))){
var inst_25586 = (state_25620[(7)]);
var inst_25595 = cljs.core.first.call(null,inst_25586);
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25620__$1,(20),out,inst_25595);
} else {
if((state_val_25621 === (8))){
var inst_25575 = (state_25620[(8)]);
var inst_25574 = (state_25620[(11)]);
var inst_25577 = (inst_25575 < inst_25574);
var inst_25578 = inst_25577;
var state_25620__$1 = state_25620;
if(cljs.core.truth_(inst_25578)){
var statearr_25654_25685 = state_25620__$1;
(statearr_25654_25685[(1)] = (10));

} else {
var statearr_25655_25686 = state_25620__$1;
(statearr_25655_25686[(1)] = (11));

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
var statearr_25659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25659[(0)] = state_machine__6988__auto__);

(statearr_25659[(1)] = (1));

return statearr_25659;
});
var state_machine__6988__auto____1 = (function (state_25620){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25660){if((e25660 instanceof Object)){
var ex__6991__auto__ = e25660;
var statearr_25661_25687 = state_25620;
(statearr_25661_25687[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25688 = state_25620;
state_25620 = G__25688;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25620){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_25662 = f__7044__auto__.call(null);
(statearr_25662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_25662;
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
var c__7043__auto___25785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25785,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25785,out){
return (function (state_25760){
var state_val_25761 = (state_25760[(1)]);
if((state_val_25761 === (7))){
var inst_25755 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
var statearr_25762_25786 = state_25760__$1;
(statearr_25762_25786[(2)] = inst_25755);

(statearr_25762_25786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (1))){
var inst_25737 = null;
var state_25760__$1 = (function (){var statearr_25763 = state_25760;
(statearr_25763[(7)] = inst_25737);

return statearr_25763;
})();
var statearr_25764_25787 = state_25760__$1;
(statearr_25764_25787[(2)] = null);

(statearr_25764_25787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (4))){
var inst_25740 = (state_25760[(8)]);
var inst_25740__$1 = (state_25760[(2)]);
var inst_25741 = (inst_25740__$1 == null);
var inst_25742 = cljs.core.not.call(null,inst_25741);
var state_25760__$1 = (function (){var statearr_25765 = state_25760;
(statearr_25765[(8)] = inst_25740__$1);

return statearr_25765;
})();
if(inst_25742){
var statearr_25766_25788 = state_25760__$1;
(statearr_25766_25788[(1)] = (5));

} else {
var statearr_25767_25789 = state_25760__$1;
(statearr_25767_25789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (6))){
var state_25760__$1 = state_25760;
var statearr_25768_25790 = state_25760__$1;
(statearr_25768_25790[(2)] = null);

(statearr_25768_25790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (3))){
var inst_25757 = (state_25760[(2)]);
var inst_25758 = cljs.core.async.close_BANG_.call(null,out);
var state_25760__$1 = (function (){var statearr_25769 = state_25760;
(statearr_25769[(9)] = inst_25757);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25760__$1,inst_25758);
} else {
if((state_val_25761 === (2))){
var state_25760__$1 = state_25760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25760__$1,(4),ch);
} else {
if((state_val_25761 === (11))){
var inst_25740 = (state_25760[(8)]);
var inst_25749 = (state_25760[(2)]);
var inst_25737 = inst_25740;
var state_25760__$1 = (function (){var statearr_25770 = state_25760;
(statearr_25770[(10)] = inst_25749);

(statearr_25770[(7)] = inst_25737);

return statearr_25770;
})();
var statearr_25771_25791 = state_25760__$1;
(statearr_25771_25791[(2)] = null);

(statearr_25771_25791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (9))){
var inst_25740 = (state_25760[(8)]);
var state_25760__$1 = state_25760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25760__$1,(11),out,inst_25740);
} else {
if((state_val_25761 === (5))){
var inst_25740 = (state_25760[(8)]);
var inst_25737 = (state_25760[(7)]);
var inst_25744 = cljs.core._EQ_.call(null,inst_25740,inst_25737);
var state_25760__$1 = state_25760;
if(inst_25744){
var statearr_25773_25792 = state_25760__$1;
(statearr_25773_25792[(1)] = (8));

} else {
var statearr_25774_25793 = state_25760__$1;
(statearr_25774_25793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (10))){
var inst_25752 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
var statearr_25775_25794 = state_25760__$1;
(statearr_25775_25794[(2)] = inst_25752);

(statearr_25775_25794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (8))){
var inst_25737 = (state_25760[(7)]);
var tmp25772 = inst_25737;
var inst_25737__$1 = tmp25772;
var state_25760__$1 = (function (){var statearr_25776 = state_25760;
(statearr_25776[(7)] = inst_25737__$1);

return statearr_25776;
})();
var statearr_25777_25795 = state_25760__$1;
(statearr_25777_25795[(2)] = null);

(statearr_25777_25795[(1)] = (2));


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
});})(c__7043__auto___25785,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25785,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25781[(0)] = state_machine__6988__auto__);

(statearr_25781[(1)] = (1));

return statearr_25781;
});
var state_machine__6988__auto____1 = (function (state_25760){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25782){if((e25782 instanceof Object)){
var ex__6991__auto__ = e25782;
var statearr_25783_25796 = state_25760;
(statearr_25783_25796[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25797 = state_25760;
state_25760 = G__25797;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25760){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25785,out))
})();
var state__7045__auto__ = (function (){var statearr_25784 = f__7044__auto__.call(null);
(statearr_25784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25785);

return statearr_25784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25785,out))
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
var c__7043__auto___25932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25932,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25932,out){
return (function (state_25902){
var state_val_25903 = (state_25902[(1)]);
if((state_val_25903 === (7))){
var inst_25898 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25904_25933 = state_25902__$1;
(statearr_25904_25933[(2)] = inst_25898);

(statearr_25904_25933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (1))){
var inst_25865 = (new Array(n));
var inst_25866 = inst_25865;
var inst_25867 = (0);
var state_25902__$1 = (function (){var statearr_25905 = state_25902;
(statearr_25905[(7)] = inst_25867);

(statearr_25905[(8)] = inst_25866);

return statearr_25905;
})();
var statearr_25906_25934 = state_25902__$1;
(statearr_25906_25934[(2)] = null);

(statearr_25906_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (4))){
var inst_25870 = (state_25902[(9)]);
var inst_25870__$1 = (state_25902[(2)]);
var inst_25871 = (inst_25870__$1 == null);
var inst_25872 = cljs.core.not.call(null,inst_25871);
var state_25902__$1 = (function (){var statearr_25907 = state_25902;
(statearr_25907[(9)] = inst_25870__$1);

return statearr_25907;
})();
if(inst_25872){
var statearr_25908_25935 = state_25902__$1;
(statearr_25908_25935[(1)] = (5));

} else {
var statearr_25909_25936 = state_25902__$1;
(statearr_25909_25936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (15))){
var inst_25892 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25910_25937 = state_25902__$1;
(statearr_25910_25937[(2)] = inst_25892);

(statearr_25910_25937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (13))){
var state_25902__$1 = state_25902;
var statearr_25911_25938 = state_25902__$1;
(statearr_25911_25938[(2)] = null);

(statearr_25911_25938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (6))){
var inst_25867 = (state_25902[(7)]);
var inst_25888 = (inst_25867 > (0));
var state_25902__$1 = state_25902;
if(cljs.core.truth_(inst_25888)){
var statearr_25912_25939 = state_25902__$1;
(statearr_25912_25939[(1)] = (12));

} else {
var statearr_25913_25940 = state_25902__$1;
(statearr_25913_25940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (3))){
var inst_25900 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25902__$1,inst_25900);
} else {
if((state_val_25903 === (12))){
var inst_25866 = (state_25902[(8)]);
var inst_25890 = cljs.core.vec.call(null,inst_25866);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25902__$1,(15),out,inst_25890);
} else {
if((state_val_25903 === (2))){
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25902__$1,(4),ch);
} else {
if((state_val_25903 === (11))){
var inst_25882 = (state_25902[(2)]);
var inst_25883 = (new Array(n));
var inst_25866 = inst_25883;
var inst_25867 = (0);
var state_25902__$1 = (function (){var statearr_25914 = state_25902;
(statearr_25914[(7)] = inst_25867);

(statearr_25914[(8)] = inst_25866);

(statearr_25914[(10)] = inst_25882);

return statearr_25914;
})();
var statearr_25915_25941 = state_25902__$1;
(statearr_25915_25941[(2)] = null);

(statearr_25915_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (9))){
var inst_25866 = (state_25902[(8)]);
var inst_25880 = cljs.core.vec.call(null,inst_25866);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25902__$1,(11),out,inst_25880);
} else {
if((state_val_25903 === (5))){
var inst_25875 = (state_25902[(11)]);
var inst_25867 = (state_25902[(7)]);
var inst_25866 = (state_25902[(8)]);
var inst_25870 = (state_25902[(9)]);
var inst_25874 = (inst_25866[inst_25867] = inst_25870);
var inst_25875__$1 = (inst_25867 + (1));
var inst_25876 = (inst_25875__$1 < n);
var state_25902__$1 = (function (){var statearr_25916 = state_25902;
(statearr_25916[(12)] = inst_25874);

(statearr_25916[(11)] = inst_25875__$1);

return statearr_25916;
})();
if(cljs.core.truth_(inst_25876)){
var statearr_25917_25942 = state_25902__$1;
(statearr_25917_25942[(1)] = (8));

} else {
var statearr_25918_25943 = state_25902__$1;
(statearr_25918_25943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (14))){
var inst_25895 = (state_25902[(2)]);
var inst_25896 = cljs.core.async.close_BANG_.call(null,out);
var state_25902__$1 = (function (){var statearr_25920 = state_25902;
(statearr_25920[(13)] = inst_25895);

return statearr_25920;
})();
var statearr_25921_25944 = state_25902__$1;
(statearr_25921_25944[(2)] = inst_25896);

(statearr_25921_25944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (10))){
var inst_25886 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25922_25945 = state_25902__$1;
(statearr_25922_25945[(2)] = inst_25886);

(statearr_25922_25945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (8))){
var inst_25875 = (state_25902[(11)]);
var inst_25866 = (state_25902[(8)]);
var tmp25919 = inst_25866;
var inst_25866__$1 = tmp25919;
var inst_25867 = inst_25875;
var state_25902__$1 = (function (){var statearr_25923 = state_25902;
(statearr_25923[(7)] = inst_25867);

(statearr_25923[(8)] = inst_25866__$1);

return statearr_25923;
})();
var statearr_25924_25946 = state_25902__$1;
(statearr_25924_25946[(2)] = null);

(statearr_25924_25946[(1)] = (2));


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
});})(c__7043__auto___25932,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25932,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25928[(0)] = state_machine__6988__auto__);

(statearr_25928[(1)] = (1));

return statearr_25928;
});
var state_machine__6988__auto____1 = (function (state_25902){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25929){if((e25929 instanceof Object)){
var ex__6991__auto__ = e25929;
var statearr_25930_25947 = state_25902;
(statearr_25930_25947[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25948 = state_25902;
state_25902 = G__25948;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25902){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25932,out))
})();
var state__7045__auto__ = (function (){var statearr_25931 = f__7044__auto__.call(null);
(statearr_25931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25932);

return statearr_25931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25932,out))
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
var c__7043__auto___26091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___26091,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___26091,out){
return (function (state_26061){
var state_val_26062 = (state_26061[(1)]);
if((state_val_26062 === (7))){
var inst_26057 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26063_26092 = state_26061__$1;
(statearr_26063_26092[(2)] = inst_26057);

(statearr_26063_26092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (1))){
var inst_26020 = [];
var inst_26021 = inst_26020;
var inst_26022 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26061__$1 = (function (){var statearr_26064 = state_26061;
(statearr_26064[(7)] = inst_26022);

(statearr_26064[(8)] = inst_26021);

return statearr_26064;
})();
var statearr_26065_26093 = state_26061__$1;
(statearr_26065_26093[(2)] = null);

(statearr_26065_26093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (4))){
var inst_26025 = (state_26061[(9)]);
var inst_26025__$1 = (state_26061[(2)]);
var inst_26026 = (inst_26025__$1 == null);
var inst_26027 = cljs.core.not.call(null,inst_26026);
var state_26061__$1 = (function (){var statearr_26066 = state_26061;
(statearr_26066[(9)] = inst_26025__$1);

return statearr_26066;
})();
if(inst_26027){
var statearr_26067_26094 = state_26061__$1;
(statearr_26067_26094[(1)] = (5));

} else {
var statearr_26068_26095 = state_26061__$1;
(statearr_26068_26095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (15))){
var inst_26051 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26069_26096 = state_26061__$1;
(statearr_26069_26096[(2)] = inst_26051);

(statearr_26069_26096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (13))){
var state_26061__$1 = state_26061;
var statearr_26070_26097 = state_26061__$1;
(statearr_26070_26097[(2)] = null);

(statearr_26070_26097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (6))){
var inst_26021 = (state_26061[(8)]);
var inst_26046 = inst_26021.length;
var inst_26047 = (inst_26046 > (0));
var state_26061__$1 = state_26061;
if(cljs.core.truth_(inst_26047)){
var statearr_26071_26098 = state_26061__$1;
(statearr_26071_26098[(1)] = (12));

} else {
var statearr_26072_26099 = state_26061__$1;
(statearr_26072_26099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (3))){
var inst_26059 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26061__$1,inst_26059);
} else {
if((state_val_26062 === (12))){
var inst_26021 = (state_26061[(8)]);
var inst_26049 = cljs.core.vec.call(null,inst_26021);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26061__$1,(15),out,inst_26049);
} else {
if((state_val_26062 === (2))){
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26061__$1,(4),ch);
} else {
if((state_val_26062 === (11))){
var inst_26025 = (state_26061[(9)]);
var inst_26029 = (state_26061[(10)]);
var inst_26039 = (state_26061[(2)]);
var inst_26040 = [];
var inst_26041 = inst_26040.push(inst_26025);
var inst_26021 = inst_26040;
var inst_26022 = inst_26029;
var state_26061__$1 = (function (){var statearr_26073 = state_26061;
(statearr_26073[(7)] = inst_26022);

(statearr_26073[(11)] = inst_26039);

(statearr_26073[(12)] = inst_26041);

(statearr_26073[(8)] = inst_26021);

return statearr_26073;
})();
var statearr_26074_26100 = state_26061__$1;
(statearr_26074_26100[(2)] = null);

(statearr_26074_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (9))){
var inst_26021 = (state_26061[(8)]);
var inst_26037 = cljs.core.vec.call(null,inst_26021);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26061__$1,(11),out,inst_26037);
} else {
if((state_val_26062 === (5))){
var inst_26025 = (state_26061[(9)]);
var inst_26022 = (state_26061[(7)]);
var inst_26029 = (state_26061[(10)]);
var inst_26029__$1 = f.call(null,inst_26025);
var inst_26030 = cljs.core._EQ_.call(null,inst_26029__$1,inst_26022);
var inst_26031 = cljs.core.keyword_identical_QMARK_.call(null,inst_26022,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26032 = (inst_26030) || (inst_26031);
var state_26061__$1 = (function (){var statearr_26075 = state_26061;
(statearr_26075[(10)] = inst_26029__$1);

return statearr_26075;
})();
if(cljs.core.truth_(inst_26032)){
var statearr_26076_26101 = state_26061__$1;
(statearr_26076_26101[(1)] = (8));

} else {
var statearr_26077_26102 = state_26061__$1;
(statearr_26077_26102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (14))){
var inst_26054 = (state_26061[(2)]);
var inst_26055 = cljs.core.async.close_BANG_.call(null,out);
var state_26061__$1 = (function (){var statearr_26079 = state_26061;
(statearr_26079[(13)] = inst_26054);

return statearr_26079;
})();
var statearr_26080_26103 = state_26061__$1;
(statearr_26080_26103[(2)] = inst_26055);

(statearr_26080_26103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (10))){
var inst_26044 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26081_26104 = state_26061__$1;
(statearr_26081_26104[(2)] = inst_26044);

(statearr_26081_26104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (8))){
var inst_26025 = (state_26061[(9)]);
var inst_26029 = (state_26061[(10)]);
var inst_26021 = (state_26061[(8)]);
var inst_26034 = inst_26021.push(inst_26025);
var tmp26078 = inst_26021;
var inst_26021__$1 = tmp26078;
var inst_26022 = inst_26029;
var state_26061__$1 = (function (){var statearr_26082 = state_26061;
(statearr_26082[(7)] = inst_26022);

(statearr_26082[(8)] = inst_26021__$1);

(statearr_26082[(14)] = inst_26034);

return statearr_26082;
})();
var statearr_26083_26105 = state_26061__$1;
(statearr_26083_26105[(2)] = null);

(statearr_26083_26105[(1)] = (2));


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
});})(c__7043__auto___26091,out))
;
return ((function (switch__6987__auto__,c__7043__auto___26091,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_26087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26087[(0)] = state_machine__6988__auto__);

(statearr_26087[(1)] = (1));

return statearr_26087;
});
var state_machine__6988__auto____1 = (function (state_26061){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_26061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e26088){if((e26088 instanceof Object)){
var ex__6991__auto__ = e26088;
var statearr_26089_26106 = state_26061;
(statearr_26089_26106[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_26061;
state_26061 = G__26107;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_26061){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_26061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___26091,out))
})();
var state__7045__auto__ = (function (){var statearr_26090 = f__7044__auto__.call(null);
(statearr_26090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___26091);

return statearr_26090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___26091,out))
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