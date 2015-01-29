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
if(typeof cljs.core.async.t23017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23017 = (function (f,fn_handler,meta23018){
this.f = f;
this.fn_handler = fn_handler;
this.meta23018 = meta23018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23017.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23019){
var self__ = this;
var _23019__$1 = this;
return self__.meta23018;
});

cljs.core.async.t23017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23019,meta23018__$1){
var self__ = this;
var _23019__$1 = this;
return (new cljs.core.async.t23017(self__.f,self__.fn_handler,meta23018__$1));
});

cljs.core.async.t23017.cljs$lang$type = true;

cljs.core.async.t23017.cljs$lang$ctorStr = "cljs.core.async/t23017";

cljs.core.async.t23017.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23017");
});

cljs.core.async.__GT_t23017 = (function __GT_t23017(f__$1,fn_handler__$1,meta23018){
return (new cljs.core.async.t23017(f__$1,fn_handler__$1,meta23018));
});

}

return (new cljs.core.async.t23017(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__23021 = buff;
if(G__23021){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__23021.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23021);
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
var val_23022 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23022);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23022,ret){
return (function (){
return fn1.call(null,val_23022);
});})(val_23022,ret))
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
var n__4509__auto___23023 = n;
var x_23024 = (0);
while(true){
if((x_23024 < n__4509__auto___23023)){
(a[x_23024] = (0));

var G__23025 = (x_23024 + (1));
x_23024 = G__23025;
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

var G__23026 = (i + (1));
i = G__23026;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23030 = (function (flag,alt_flag,meta23031){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23031 = meta23031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23032){
var self__ = this;
var _23032__$1 = this;
return self__.meta23031;
});})(flag))
;

cljs.core.async.t23030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23032,meta23031__$1){
var self__ = this;
var _23032__$1 = this;
return (new cljs.core.async.t23030(self__.flag,self__.alt_flag,meta23031__$1));
});})(flag))
;

cljs.core.async.t23030.cljs$lang$type = true;

cljs.core.async.t23030.cljs$lang$ctorStr = "cljs.core.async/t23030";

cljs.core.async.t23030.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23030");
});})(flag))
;

cljs.core.async.__GT_t23030 = ((function (flag){
return (function __GT_t23030(flag__$1,alt_flag__$1,meta23031){
return (new cljs.core.async.t23030(flag__$1,alt_flag__$1,meta23031));
});})(flag))
;

}

return (new cljs.core.async.t23030(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23036 = (function (cb,flag,alt_handler,meta23037){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23037 = meta23037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23038){
var self__ = this;
var _23038__$1 = this;
return self__.meta23037;
});

cljs.core.async.t23036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23038,meta23037__$1){
var self__ = this;
var _23038__$1 = this;
return (new cljs.core.async.t23036(self__.cb,self__.flag,self__.alt_handler,meta23037__$1));
});

cljs.core.async.t23036.cljs$lang$type = true;

cljs.core.async.t23036.cljs$lang$ctorStr = "cljs.core.async/t23036";

cljs.core.async.t23036.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23036");
});

cljs.core.async.__GT_t23036 = (function __GT_t23036(cb__$1,flag__$1,alt_handler__$1,meta23037){
return (new cljs.core.async.t23036(cb__$1,flag__$1,alt_handler__$1,meta23037));
});

}

return (new cljs.core.async.t23036(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__23039_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23039_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23040_SHARP_,port], null));
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
var G__23041 = (i + (1));
i = G__23041;
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
var alts_BANG___delegate = function (ports,p__23042){
var map__23044 = p__23042;
var map__23044__$1 = ((cljs.core.seq_QMARK_.call(null,map__23044))?cljs.core.apply.call(null,cljs.core.hash_map,map__23044):map__23044);
var opts = map__23044__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23042 = null;
if (arguments.length > 1) {
  p__23042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23042);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23045){
var ports = cljs.core.first(arglist__23045);
var p__23042 = cljs.core.rest(arglist__23045);
return alts_BANG___delegate(ports,p__23042);
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
var c__9199__auto___23140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23140){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23140){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23112 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23141 = state_23116__$1;
(statearr_23118_23141[(2)] = inst_23112);

(statearr_23118_23141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var state_23116__$1 = state_23116;
var statearr_23119_23142 = state_23116__$1;
(statearr_23119_23142[(2)] = null);

(statearr_23119_23142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_23095 = (state_23116[(7)]);
var inst_23095__$1 = (state_23116[(2)]);
var inst_23096 = (inst_23095__$1 == null);
var state_23116__$1 = (function (){var statearr_23120 = state_23116;
(statearr_23120[(7)] = inst_23095__$1);

return statearr_23120;
})();
if(cljs.core.truth_(inst_23096)){
var statearr_23121_23143 = state_23116__$1;
(statearr_23121_23143[(1)] = (5));

} else {
var statearr_23122_23144 = state_23116__$1;
(statearr_23122_23144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (13))){
var state_23116__$1 = state_23116;
var statearr_23123_23145 = state_23116__$1;
(statearr_23123_23145[(2)] = null);

(statearr_23123_23145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var inst_23095 = (state_23116[(7)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(11),to,inst_23095);
} else {
if((state_val_23117 === (3))){
var inst_23114 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (12))){
var state_23116__$1 = state_23116;
var statearr_23124_23146 = state_23116__$1;
(statearr_23124_23146[(2)] = null);

(statearr_23124_23146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (2))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(4),from);
} else {
if((state_val_23117 === (11))){
var inst_23105 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23105)){
var statearr_23125_23147 = state_23116__$1;
(statearr_23125_23147[(1)] = (12));

} else {
var statearr_23126_23148 = state_23116__$1;
(statearr_23126_23148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var state_23116__$1 = state_23116;
var statearr_23127_23149 = state_23116__$1;
(statearr_23127_23149[(2)] = null);

(statearr_23127_23149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (5))){
var state_23116__$1 = state_23116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23128_23150 = state_23116__$1;
(statearr_23128_23150[(1)] = (8));

} else {
var statearr_23129_23151 = state_23116__$1;
(statearr_23129_23151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (14))){
var inst_23110 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23130_23152 = state_23116__$1;
(statearr_23130_23152[(2)] = inst_23110);

(statearr_23130_23152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23102 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23131_23153 = state_23116__$1;
(statearr_23131_23153[(2)] = inst_23102);

(statearr_23131_23153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (8))){
var inst_23099 = cljs.core.async.close_BANG_.call(null,to);
var state_23116__$1 = state_23116;
var statearr_23132_23154 = state_23116__$1;
(statearr_23132_23154[(2)] = inst_23099);

(statearr_23132_23154[(1)] = (10));


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
});})(c__9199__auto___23140))
;
return ((function (switch__9184__auto__,c__9199__auto___23140){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23136 = [null,null,null,null,null,null,null,null];
(statearr_23136[(0)] = state_machine__9185__auto__);

(statearr_23136[(1)] = (1));

return statearr_23136;
});
var state_machine__9185__auto____1 = (function (state_23116){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23137){if((e23137 instanceof Object)){
var ex__9188__auto__ = e23137;
var statearr_23138_23155 = state_23116;
(statearr_23138_23155[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23156 = state_23116;
state_23116 = G__23156;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23140))
})();
var state__9201__auto__ = (function (){var statearr_23139 = f__9200__auto__.call(null);
(statearr_23139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23140);

return statearr_23139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23140))
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
return (function (p__23340){
var vec__23341 = p__23340;
var v = cljs.core.nth.call(null,vec__23341,(0),null);
var p = cljs.core.nth.call(null,vec__23341,(1),null);
var job = vec__23341;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___23523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results){
return (function (state_23346){
var state_val_23347 = (state_23346[(1)]);
if((state_val_23347 === (2))){
var inst_23343 = (state_23346[(2)]);
var inst_23344 = cljs.core.async.close_BANG_.call(null,res);
var state_23346__$1 = (function (){var statearr_23348 = state_23346;
(statearr_23348[(7)] = inst_23343);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23346__$1,inst_23344);
} else {
if((state_val_23347 === (1))){
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23346__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23352 = [null,null,null,null,null,null,null,null];
(statearr_23352[(0)] = state_machine__9185__auto__);

(statearr_23352[(1)] = (1));

return statearr_23352;
});
var state_machine__9185__auto____1 = (function (state_23346){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object)){
var ex__9188__auto__ = e23353;
var statearr_23354_23524 = state_23346;
(statearr_23354_23524[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23525 = state_23346;
state_23346 = G__23525;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23346){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_23355 = f__9200__auto__.call(null);
(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23523);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23523,res,vec__23341,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23356){
var vec__23357 = p__23356;
var v = cljs.core.nth.call(null,vec__23357,(0),null);
var p = cljs.core.nth.call(null,vec__23357,(1),null);
var job = vec__23357;
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
var n__4509__auto___23526 = n;
var __23527 = (0);
while(true){
if((__23527 < n__4509__auto___23526)){
var G__23358_23528 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23358_23528) {
case "async":
var c__9199__auto___23530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23527,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__23527,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function (state_23371){
var state_val_23372 = (state_23371[(1)]);
if((state_val_23372 === (7))){
var inst_23367 = (state_23371[(2)]);
var state_23371__$1 = state_23371;
var statearr_23373_23531 = state_23371__$1;
(statearr_23373_23531[(2)] = inst_23367);

(statearr_23373_23531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23372 === (6))){
var state_23371__$1 = state_23371;
var statearr_23374_23532 = state_23371__$1;
(statearr_23374_23532[(2)] = null);

(statearr_23374_23532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23372 === (5))){
var state_23371__$1 = state_23371;
var statearr_23375_23533 = state_23371__$1;
(statearr_23375_23533[(2)] = null);

(statearr_23375_23533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23372 === (4))){
var inst_23361 = (state_23371[(2)]);
var inst_23362 = async.call(null,inst_23361);
var state_23371__$1 = state_23371;
if(cljs.core.truth_(inst_23362)){
var statearr_23376_23534 = state_23371__$1;
(statearr_23376_23534[(1)] = (5));

} else {
var statearr_23377_23535 = state_23371__$1;
(statearr_23377_23535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23372 === (3))){
var inst_23369 = (state_23371[(2)]);
var state_23371__$1 = state_23371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23371__$1,inst_23369);
} else {
if((state_val_23372 === (2))){
var state_23371__$1 = state_23371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23371__$1,(4),jobs);
} else {
if((state_val_23372 === (1))){
var state_23371__$1 = state_23371;
var statearr_23378_23536 = state_23371__$1;
(statearr_23378_23536[(2)] = null);

(statearr_23378_23536[(1)] = (2));


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
});})(__23527,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
;
return ((function (__23527,switch__9184__auto__,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23382 = [null,null,null,null,null,null,null];
(statearr_23382[(0)] = state_machine__9185__auto__);

(statearr_23382[(1)] = (1));

return statearr_23382;
});
var state_machine__9185__auto____1 = (function (state_23371){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23383){if((e23383 instanceof Object)){
var ex__9188__auto__ = e23383;
var statearr_23384_23537 = state_23371;
(statearr_23384_23537[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23538 = state_23371;
state_23371 = G__23538;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23371){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__23527,switch__9184__auto__,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23385 = f__9200__auto__.call(null);
(statearr_23385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23530);

return statearr_23385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__23527,c__9199__auto___23530,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___23539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23527,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__23527,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function (state_23398){
var state_val_23399 = (state_23398[(1)]);
if((state_val_23399 === (7))){
var inst_23394 = (state_23398[(2)]);
var state_23398__$1 = state_23398;
var statearr_23400_23540 = state_23398__$1;
(statearr_23400_23540[(2)] = inst_23394);

(statearr_23400_23540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23399 === (6))){
var state_23398__$1 = state_23398;
var statearr_23401_23541 = state_23398__$1;
(statearr_23401_23541[(2)] = null);

(statearr_23401_23541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23399 === (5))){
var state_23398__$1 = state_23398;
var statearr_23402_23542 = state_23398__$1;
(statearr_23402_23542[(2)] = null);

(statearr_23402_23542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23399 === (4))){
var inst_23388 = (state_23398[(2)]);
var inst_23389 = process.call(null,inst_23388);
var state_23398__$1 = state_23398;
if(cljs.core.truth_(inst_23389)){
var statearr_23403_23543 = state_23398__$1;
(statearr_23403_23543[(1)] = (5));

} else {
var statearr_23404_23544 = state_23398__$1;
(statearr_23404_23544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23399 === (3))){
var inst_23396 = (state_23398[(2)]);
var state_23398__$1 = state_23398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23398__$1,inst_23396);
} else {
if((state_val_23399 === (2))){
var state_23398__$1 = state_23398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23398__$1,(4),jobs);
} else {
if((state_val_23399 === (1))){
var state_23398__$1 = state_23398;
var statearr_23405_23545 = state_23398__$1;
(statearr_23405_23545[(2)] = null);

(statearr_23405_23545[(1)] = (2));


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
});})(__23527,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
;
return ((function (__23527,switch__9184__auto__,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23409 = [null,null,null,null,null,null,null];
(statearr_23409[(0)] = state_machine__9185__auto__);

(statearr_23409[(1)] = (1));

return statearr_23409;
});
var state_machine__9185__auto____1 = (function (state_23398){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23410){if((e23410 instanceof Object)){
var ex__9188__auto__ = e23410;
var statearr_23411_23546 = state_23398;
(statearr_23411_23546[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23547 = state_23398;
state_23398 = G__23547;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23398){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__23527,switch__9184__auto__,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23412 = f__9200__auto__.call(null);
(statearr_23412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23539);

return statearr_23412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__23527,c__9199__auto___23539,G__23358_23528,n__4509__auto___23526,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23548 = (__23527 + (1));
__23527 = G__23548;
continue;
} else {
}
break;
}

var c__9199__auto___23549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23549,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23549,jobs,results,process,async){
return (function (state_23434){
var state_val_23435 = (state_23434[(1)]);
if((state_val_23435 === (9))){
var inst_23427 = (state_23434[(2)]);
var state_23434__$1 = (function (){var statearr_23436 = state_23434;
(statearr_23436[(7)] = inst_23427);

return statearr_23436;
})();
var statearr_23437_23550 = state_23434__$1;
(statearr_23437_23550[(2)] = null);

(statearr_23437_23550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (8))){
var inst_23420 = (state_23434[(8)]);
var inst_23425 = (state_23434[(2)]);
var state_23434__$1 = (function (){var statearr_23438 = state_23434;
(statearr_23438[(9)] = inst_23425);

return statearr_23438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,(9),results,inst_23420);
} else {
if((state_val_23435 === (7))){
var inst_23430 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
var statearr_23439_23551 = state_23434__$1;
(statearr_23439_23551[(2)] = inst_23430);

(statearr_23439_23551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (6))){
var inst_23420 = (state_23434[(8)]);
var inst_23415 = (state_23434[(10)]);
var inst_23420__$1 = cljs.core.async.chan.call(null,(1));
var inst_23421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23422 = [inst_23415,inst_23420__$1];
var inst_23423 = (new cljs.core.PersistentVector(null,2,(5),inst_23421,inst_23422,null));
var state_23434__$1 = (function (){var statearr_23440 = state_23434;
(statearr_23440[(8)] = inst_23420__$1);

return statearr_23440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,(8),jobs,inst_23423);
} else {
if((state_val_23435 === (5))){
var inst_23418 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23434__$1 = state_23434;
var statearr_23441_23552 = state_23434__$1;
(statearr_23441_23552[(2)] = inst_23418);

(statearr_23441_23552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (4))){
var inst_23415 = (state_23434[(10)]);
var inst_23415__$1 = (state_23434[(2)]);
var inst_23416 = (inst_23415__$1 == null);
var state_23434__$1 = (function (){var statearr_23442 = state_23434;
(statearr_23442[(10)] = inst_23415__$1);

return statearr_23442;
})();
if(cljs.core.truth_(inst_23416)){
var statearr_23443_23553 = state_23434__$1;
(statearr_23443_23553[(1)] = (5));

} else {
var statearr_23444_23554 = state_23434__$1;
(statearr_23444_23554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (3))){
var inst_23432 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23434__$1,inst_23432);
} else {
if((state_val_23435 === (2))){
var state_23434__$1 = state_23434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23434__$1,(4),from);
} else {
if((state_val_23435 === (1))){
var state_23434__$1 = state_23434;
var statearr_23445_23555 = state_23434__$1;
(statearr_23445_23555[(2)] = null);

(statearr_23445_23555[(1)] = (2));


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
});})(c__9199__auto___23549,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___23549,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23449[(0)] = state_machine__9185__auto__);

(statearr_23449[(1)] = (1));

return statearr_23449;
});
var state_machine__9185__auto____1 = (function (state_23434){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23450){if((e23450 instanceof Object)){
var ex__9188__auto__ = e23450;
var statearr_23451_23556 = state_23434;
(statearr_23451_23556[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23557 = state_23434;
state_23434 = G__23557;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23434){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23549,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23452 = f__9200__auto__.call(null);
(statearr_23452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23549);

return statearr_23452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23549,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_23490){
var state_val_23491 = (state_23490[(1)]);
if((state_val_23491 === (7))){
var inst_23486 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
var statearr_23492_23558 = state_23490__$1;
(statearr_23492_23558[(2)] = inst_23486);

(statearr_23492_23558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (20))){
var state_23490__$1 = state_23490;
var statearr_23493_23559 = state_23490__$1;
(statearr_23493_23559[(2)] = null);

(statearr_23493_23559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (1))){
var state_23490__$1 = state_23490;
var statearr_23494_23560 = state_23490__$1;
(statearr_23494_23560[(2)] = null);

(statearr_23494_23560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (4))){
var inst_23455 = (state_23490[(7)]);
var inst_23455__$1 = (state_23490[(2)]);
var inst_23456 = (inst_23455__$1 == null);
var state_23490__$1 = (function (){var statearr_23495 = state_23490;
(statearr_23495[(7)] = inst_23455__$1);

return statearr_23495;
})();
if(cljs.core.truth_(inst_23456)){
var statearr_23496_23561 = state_23490__$1;
(statearr_23496_23561[(1)] = (5));

} else {
var statearr_23497_23562 = state_23490__$1;
(statearr_23497_23562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (15))){
var inst_23468 = (state_23490[(8)]);
var state_23490__$1 = state_23490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23490__$1,(18),to,inst_23468);
} else {
if((state_val_23491 === (21))){
var inst_23481 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
var statearr_23498_23563 = state_23490__$1;
(statearr_23498_23563[(2)] = inst_23481);

(statearr_23498_23563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (13))){
var inst_23483 = (state_23490[(2)]);
var state_23490__$1 = (function (){var statearr_23499 = state_23490;
(statearr_23499[(9)] = inst_23483);

return statearr_23499;
})();
var statearr_23500_23564 = state_23490__$1;
(statearr_23500_23564[(2)] = null);

(statearr_23500_23564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (6))){
var inst_23455 = (state_23490[(7)]);
var state_23490__$1 = state_23490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23490__$1,(11),inst_23455);
} else {
if((state_val_23491 === (17))){
var inst_23476 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
if(cljs.core.truth_(inst_23476)){
var statearr_23501_23565 = state_23490__$1;
(statearr_23501_23565[(1)] = (19));

} else {
var statearr_23502_23566 = state_23490__$1;
(statearr_23502_23566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (3))){
var inst_23488 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23490__$1,inst_23488);
} else {
if((state_val_23491 === (12))){
var inst_23465 = (state_23490[(10)]);
var state_23490__$1 = state_23490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23490__$1,(14),inst_23465);
} else {
if((state_val_23491 === (2))){
var state_23490__$1 = state_23490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23490__$1,(4),results);
} else {
if((state_val_23491 === (19))){
var state_23490__$1 = state_23490;
var statearr_23503_23567 = state_23490__$1;
(statearr_23503_23567[(2)] = null);

(statearr_23503_23567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (11))){
var inst_23465 = (state_23490[(2)]);
var state_23490__$1 = (function (){var statearr_23504 = state_23490;
(statearr_23504[(10)] = inst_23465);

return statearr_23504;
})();
var statearr_23505_23568 = state_23490__$1;
(statearr_23505_23568[(2)] = null);

(statearr_23505_23568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (9))){
var state_23490__$1 = state_23490;
var statearr_23506_23569 = state_23490__$1;
(statearr_23506_23569[(2)] = null);

(statearr_23506_23569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (5))){
var state_23490__$1 = state_23490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23507_23570 = state_23490__$1;
(statearr_23507_23570[(1)] = (8));

} else {
var statearr_23508_23571 = state_23490__$1;
(statearr_23508_23571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (14))){
var inst_23470 = (state_23490[(11)]);
var inst_23468 = (state_23490[(8)]);
var inst_23468__$1 = (state_23490[(2)]);
var inst_23469 = (inst_23468__$1 == null);
var inst_23470__$1 = cljs.core.not.call(null,inst_23469);
var state_23490__$1 = (function (){var statearr_23509 = state_23490;
(statearr_23509[(11)] = inst_23470__$1);

(statearr_23509[(8)] = inst_23468__$1);

return statearr_23509;
})();
if(inst_23470__$1){
var statearr_23510_23572 = state_23490__$1;
(statearr_23510_23572[(1)] = (15));

} else {
var statearr_23511_23573 = state_23490__$1;
(statearr_23511_23573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (16))){
var inst_23470 = (state_23490[(11)]);
var state_23490__$1 = state_23490;
var statearr_23512_23574 = state_23490__$1;
(statearr_23512_23574[(2)] = inst_23470);

(statearr_23512_23574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (10))){
var inst_23462 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
var statearr_23513_23575 = state_23490__$1;
(statearr_23513_23575[(2)] = inst_23462);

(statearr_23513_23575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (18))){
var inst_23473 = (state_23490[(2)]);
var state_23490__$1 = state_23490;
var statearr_23514_23576 = state_23490__$1;
(statearr_23514_23576[(2)] = inst_23473);

(statearr_23514_23576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23491 === (8))){
var inst_23459 = cljs.core.async.close_BANG_.call(null,to);
var state_23490__$1 = state_23490;
var statearr_23515_23577 = state_23490__$1;
(statearr_23515_23577[(2)] = inst_23459);

(statearr_23515_23577[(1)] = (10));


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
var statearr_23519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23519[(0)] = state_machine__9185__auto__);

(statearr_23519[(1)] = (1));

return statearr_23519;
});
var state_machine__9185__auto____1 = (function (state_23490){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23520){if((e23520 instanceof Object)){
var ex__9188__auto__ = e23520;
var statearr_23521_23578 = state_23490;
(statearr_23521_23578[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23579 = state_23490;
state_23490 = G__23579;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23490){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23522 = f__9200__auto__.call(null);
(statearr_23522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23522;
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
var c__9199__auto___23680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23680,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23680,tc,fc){
return (function (state_23655){
var state_val_23656 = (state_23655[(1)]);
if((state_val_23656 === (7))){
var inst_23651 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
var statearr_23657_23681 = state_23655__$1;
(statearr_23657_23681[(2)] = inst_23651);

(statearr_23657_23681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (1))){
var state_23655__$1 = state_23655;
var statearr_23658_23682 = state_23655__$1;
(statearr_23658_23682[(2)] = null);

(statearr_23658_23682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (4))){
var inst_23632 = (state_23655[(7)]);
var inst_23632__$1 = (state_23655[(2)]);
var inst_23633 = (inst_23632__$1 == null);
var state_23655__$1 = (function (){var statearr_23659 = state_23655;
(statearr_23659[(7)] = inst_23632__$1);

return statearr_23659;
})();
if(cljs.core.truth_(inst_23633)){
var statearr_23660_23683 = state_23655__$1;
(statearr_23660_23683[(1)] = (5));

} else {
var statearr_23661_23684 = state_23655__$1;
(statearr_23661_23684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (13))){
var state_23655__$1 = state_23655;
var statearr_23662_23685 = state_23655__$1;
(statearr_23662_23685[(2)] = null);

(statearr_23662_23685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (6))){
var inst_23632 = (state_23655[(7)]);
var inst_23638 = p.call(null,inst_23632);
var state_23655__$1 = state_23655;
if(cljs.core.truth_(inst_23638)){
var statearr_23663_23686 = state_23655__$1;
(statearr_23663_23686[(1)] = (9));

} else {
var statearr_23664_23687 = state_23655__$1;
(statearr_23664_23687[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (3))){
var inst_23653 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23655__$1,inst_23653);
} else {
if((state_val_23656 === (12))){
var state_23655__$1 = state_23655;
var statearr_23665_23688 = state_23655__$1;
(statearr_23665_23688[(2)] = null);

(statearr_23665_23688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (2))){
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23655__$1,(4),ch);
} else {
if((state_val_23656 === (11))){
var inst_23632 = (state_23655[(7)]);
var inst_23642 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23655__$1,(8),inst_23642,inst_23632);
} else {
if((state_val_23656 === (9))){
var state_23655__$1 = state_23655;
var statearr_23666_23689 = state_23655__$1;
(statearr_23666_23689[(2)] = tc);

(statearr_23666_23689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (5))){
var inst_23635 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23636 = cljs.core.async.close_BANG_.call(null,fc);
var state_23655__$1 = (function (){var statearr_23667 = state_23655;
(statearr_23667[(8)] = inst_23635);

return statearr_23667;
})();
var statearr_23668_23690 = state_23655__$1;
(statearr_23668_23690[(2)] = inst_23636);

(statearr_23668_23690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (14))){
var inst_23649 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
var statearr_23669_23691 = state_23655__$1;
(statearr_23669_23691[(2)] = inst_23649);

(statearr_23669_23691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (10))){
var state_23655__$1 = state_23655;
var statearr_23670_23692 = state_23655__$1;
(statearr_23670_23692[(2)] = fc);

(statearr_23670_23692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (8))){
var inst_23644 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
if(cljs.core.truth_(inst_23644)){
var statearr_23671_23693 = state_23655__$1;
(statearr_23671_23693[(1)] = (12));

} else {
var statearr_23672_23694 = state_23655__$1;
(statearr_23672_23694[(1)] = (13));

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
});})(c__9199__auto___23680,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___23680,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23676 = [null,null,null,null,null,null,null,null,null];
(statearr_23676[(0)] = state_machine__9185__auto__);

(statearr_23676[(1)] = (1));

return statearr_23676;
});
var state_machine__9185__auto____1 = (function (state_23655){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23677){if((e23677 instanceof Object)){
var ex__9188__auto__ = e23677;
var statearr_23678_23695 = state_23655;
(statearr_23678_23695[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23696 = state_23655;
state_23655 = G__23696;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23655){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23680,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_23679 = f__9200__auto__.call(null);
(statearr_23679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23680);

return statearr_23679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23680,tc,fc))
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
return (function (state_23743){
var state_val_23744 = (state_23743[(1)]);
if((state_val_23744 === (7))){
var inst_23739 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23745_23761 = state_23743__$1;
(statearr_23745_23761[(2)] = inst_23739);

(statearr_23745_23761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (6))){
var inst_23729 = (state_23743[(7)]);
var inst_23732 = (state_23743[(8)]);
var inst_23736 = f.call(null,inst_23729,inst_23732);
var inst_23729__$1 = inst_23736;
var state_23743__$1 = (function (){var statearr_23746 = state_23743;
(statearr_23746[(7)] = inst_23729__$1);

return statearr_23746;
})();
var statearr_23747_23762 = state_23743__$1;
(statearr_23747_23762[(2)] = null);

(statearr_23747_23762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (5))){
var inst_23729 = (state_23743[(7)]);
var state_23743__$1 = state_23743;
var statearr_23748_23763 = state_23743__$1;
(statearr_23748_23763[(2)] = inst_23729);

(statearr_23748_23763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (4))){
var inst_23732 = (state_23743[(8)]);
var inst_23732__$1 = (state_23743[(2)]);
var inst_23733 = (inst_23732__$1 == null);
var state_23743__$1 = (function (){var statearr_23749 = state_23743;
(statearr_23749[(8)] = inst_23732__$1);

return statearr_23749;
})();
if(cljs.core.truth_(inst_23733)){
var statearr_23750_23764 = state_23743__$1;
(statearr_23750_23764[(1)] = (5));

} else {
var statearr_23751_23765 = state_23743__$1;
(statearr_23751_23765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (3))){
var inst_23741 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else {
if((state_val_23744 === (2))){
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(4),ch);
} else {
if((state_val_23744 === (1))){
var inst_23729 = init;
var state_23743__$1 = (function (){var statearr_23752 = state_23743;
(statearr_23752[(7)] = inst_23729);

return statearr_23752;
})();
var statearr_23753_23766 = state_23743__$1;
(statearr_23753_23766[(2)] = null);

(statearr_23753_23766[(1)] = (2));


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
var statearr_23757 = [null,null,null,null,null,null,null,null,null];
(statearr_23757[(0)] = state_machine__9185__auto__);

(statearr_23757[(1)] = (1));

return statearr_23757;
});
var state_machine__9185__auto____1 = (function (state_23743){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23758){if((e23758 instanceof Object)){
var ex__9188__auto__ = e23758;
var statearr_23759_23767 = state_23743;
(statearr_23759_23767[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23768 = state_23743;
state_23743 = G__23768;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_23760 = f__9200__auto__.call(null);
(statearr_23760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23760;
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
return (function (state_23842){
var state_val_23843 = (state_23842[(1)]);
if((state_val_23843 === (7))){
var inst_23824 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
var statearr_23844_23867 = state_23842__$1;
(statearr_23844_23867[(2)] = inst_23824);

(statearr_23844_23867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (1))){
var inst_23818 = cljs.core.seq.call(null,coll);
var inst_23819 = inst_23818;
var state_23842__$1 = (function (){var statearr_23845 = state_23842;
(statearr_23845[(7)] = inst_23819);

return statearr_23845;
})();
var statearr_23846_23868 = state_23842__$1;
(statearr_23846_23868[(2)] = null);

(statearr_23846_23868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (4))){
var inst_23819 = (state_23842[(7)]);
var inst_23822 = cljs.core.first.call(null,inst_23819);
var state_23842__$1 = state_23842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23842__$1,(7),ch,inst_23822);
} else {
if((state_val_23843 === (13))){
var inst_23836 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
var statearr_23847_23869 = state_23842__$1;
(statearr_23847_23869[(2)] = inst_23836);

(statearr_23847_23869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (6))){
var inst_23827 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
if(cljs.core.truth_(inst_23827)){
var statearr_23848_23870 = state_23842__$1;
(statearr_23848_23870[(1)] = (8));

} else {
var statearr_23849_23871 = state_23842__$1;
(statearr_23849_23871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (3))){
var inst_23840 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23842__$1,inst_23840);
} else {
if((state_val_23843 === (12))){
var state_23842__$1 = state_23842;
var statearr_23850_23872 = state_23842__$1;
(statearr_23850_23872[(2)] = null);

(statearr_23850_23872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (2))){
var inst_23819 = (state_23842[(7)]);
var state_23842__$1 = state_23842;
if(cljs.core.truth_(inst_23819)){
var statearr_23851_23873 = state_23842__$1;
(statearr_23851_23873[(1)] = (4));

} else {
var statearr_23852_23874 = state_23842__$1;
(statearr_23852_23874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (11))){
var inst_23833 = cljs.core.async.close_BANG_.call(null,ch);
var state_23842__$1 = state_23842;
var statearr_23853_23875 = state_23842__$1;
(statearr_23853_23875[(2)] = inst_23833);

(statearr_23853_23875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (9))){
var state_23842__$1 = state_23842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23854_23876 = state_23842__$1;
(statearr_23854_23876[(1)] = (11));

} else {
var statearr_23855_23877 = state_23842__$1;
(statearr_23855_23877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (5))){
var inst_23819 = (state_23842[(7)]);
var state_23842__$1 = state_23842;
var statearr_23856_23878 = state_23842__$1;
(statearr_23856_23878[(2)] = inst_23819);

(statearr_23856_23878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (10))){
var inst_23838 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
var statearr_23857_23879 = state_23842__$1;
(statearr_23857_23879[(2)] = inst_23838);

(statearr_23857_23879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (8))){
var inst_23819 = (state_23842[(7)]);
var inst_23829 = cljs.core.next.call(null,inst_23819);
var inst_23819__$1 = inst_23829;
var state_23842__$1 = (function (){var statearr_23858 = state_23842;
(statearr_23858[(7)] = inst_23819__$1);

return statearr_23858;
})();
var statearr_23859_23880 = state_23842__$1;
(statearr_23859_23880[(2)] = null);

(statearr_23859_23880[(1)] = (2));


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
var statearr_23863 = [null,null,null,null,null,null,null,null];
(statearr_23863[(0)] = state_machine__9185__auto__);

(statearr_23863[(1)] = (1));

return statearr_23863;
});
var state_machine__9185__auto____1 = (function (state_23842){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23864){if((e23864 instanceof Object)){
var ex__9188__auto__ = e23864;
var statearr_23865_23881 = state_23842;
(statearr_23865_23881[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23882 = state_23842;
state_23842 = G__23882;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23842){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_23866 = f__9200__auto__.call(null);
(statearr_23866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23866;
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

cljs.core.async.Mux = (function (){var obj23884 = {};
return obj23884;
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


cljs.core.async.Mult = (function (){var obj23886 = {};
return obj23886;
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
if(typeof cljs.core.async.t24108 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24108 = (function (cs,ch,mult,meta24109){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24109 = meta24109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24108.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24108.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24108.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24108.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24108.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24110){
var self__ = this;
var _24110__$1 = this;
return self__.meta24109;
});})(cs))
;

cljs.core.async.t24108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24110,meta24109__$1){
var self__ = this;
var _24110__$1 = this;
return (new cljs.core.async.t24108(self__.cs,self__.ch,self__.mult,meta24109__$1));
});})(cs))
;

cljs.core.async.t24108.cljs$lang$type = true;

cljs.core.async.t24108.cljs$lang$ctorStr = "cljs.core.async/t24108";

cljs.core.async.t24108.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24108");
});})(cs))
;

cljs.core.async.__GT_t24108 = ((function (cs){
return (function __GT_t24108(cs__$1,ch__$1,mult__$1,meta24109){
return (new cljs.core.async.t24108(cs__$1,ch__$1,mult__$1,meta24109));
});})(cs))
;

}

return (new cljs.core.async.t24108(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___24329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24329,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24329,cs,m,dchan,dctr,done){
return (function (state_24241){
var state_val_24242 = (state_24241[(1)]);
if((state_val_24242 === (7))){
var inst_24237 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24243_24330 = state_24241__$1;
(statearr_24243_24330[(2)] = inst_24237);

(statearr_24243_24330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (20))){
var inst_24142 = (state_24241[(7)]);
var inst_24152 = cljs.core.first.call(null,inst_24142);
var inst_24153 = cljs.core.nth.call(null,inst_24152,(0),null);
var inst_24154 = cljs.core.nth.call(null,inst_24152,(1),null);
var state_24241__$1 = (function (){var statearr_24244 = state_24241;
(statearr_24244[(8)] = inst_24153);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24154)){
var statearr_24245_24331 = state_24241__$1;
(statearr_24245_24331[(1)] = (22));

} else {
var statearr_24246_24332 = state_24241__$1;
(statearr_24246_24332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (27))){
var inst_24184 = (state_24241[(9)]);
var inst_24189 = (state_24241[(10)]);
var inst_24182 = (state_24241[(11)]);
var inst_24113 = (state_24241[(12)]);
var inst_24189__$1 = cljs.core._nth.call(null,inst_24182,inst_24184);
var inst_24190 = cljs.core.async.put_BANG_.call(null,inst_24189__$1,inst_24113,done);
var state_24241__$1 = (function (){var statearr_24247 = state_24241;
(statearr_24247[(10)] = inst_24189__$1);

return statearr_24247;
})();
if(cljs.core.truth_(inst_24190)){
var statearr_24248_24333 = state_24241__$1;
(statearr_24248_24333[(1)] = (30));

} else {
var statearr_24249_24334 = state_24241__$1;
(statearr_24249_24334[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (1))){
var state_24241__$1 = state_24241;
var statearr_24250_24335 = state_24241__$1;
(statearr_24250_24335[(2)] = null);

(statearr_24250_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (24))){
var inst_24142 = (state_24241[(7)]);
var inst_24159 = (state_24241[(2)]);
var inst_24160 = cljs.core.next.call(null,inst_24142);
var inst_24122 = inst_24160;
var inst_24123 = null;
var inst_24124 = (0);
var inst_24125 = (0);
var state_24241__$1 = (function (){var statearr_24251 = state_24241;
(statearr_24251[(13)] = inst_24124);

(statearr_24251[(14)] = inst_24159);

(statearr_24251[(15)] = inst_24123);

(statearr_24251[(16)] = inst_24122);

(statearr_24251[(17)] = inst_24125);

return statearr_24251;
})();
var statearr_24252_24336 = state_24241__$1;
(statearr_24252_24336[(2)] = null);

(statearr_24252_24336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (39))){
var state_24241__$1 = state_24241;
var statearr_24256_24337 = state_24241__$1;
(statearr_24256_24337[(2)] = null);

(statearr_24256_24337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (4))){
var inst_24113 = (state_24241[(12)]);
var inst_24113__$1 = (state_24241[(2)]);
var inst_24114 = (inst_24113__$1 == null);
var state_24241__$1 = (function (){var statearr_24257 = state_24241;
(statearr_24257[(12)] = inst_24113__$1);

return statearr_24257;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24258_24338 = state_24241__$1;
(statearr_24258_24338[(1)] = (5));

} else {
var statearr_24259_24339 = state_24241__$1;
(statearr_24259_24339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (15))){
var inst_24124 = (state_24241[(13)]);
var inst_24123 = (state_24241[(15)]);
var inst_24122 = (state_24241[(16)]);
var inst_24125 = (state_24241[(17)]);
var inst_24138 = (state_24241[(2)]);
var inst_24139 = (inst_24125 + (1));
var tmp24253 = inst_24124;
var tmp24254 = inst_24123;
var tmp24255 = inst_24122;
var inst_24122__$1 = tmp24255;
var inst_24123__$1 = tmp24254;
var inst_24124__$1 = tmp24253;
var inst_24125__$1 = inst_24139;
var state_24241__$1 = (function (){var statearr_24260 = state_24241;
(statearr_24260[(18)] = inst_24138);

(statearr_24260[(13)] = inst_24124__$1);

(statearr_24260[(15)] = inst_24123__$1);

(statearr_24260[(16)] = inst_24122__$1);

(statearr_24260[(17)] = inst_24125__$1);

return statearr_24260;
})();
var statearr_24261_24340 = state_24241__$1;
(statearr_24261_24340[(2)] = null);

(statearr_24261_24340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (21))){
var inst_24163 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24265_24341 = state_24241__$1;
(statearr_24265_24341[(2)] = inst_24163);

(statearr_24265_24341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (31))){
var inst_24189 = (state_24241[(10)]);
var inst_24193 = done.call(null,null);
var inst_24194 = cljs.core.async.untap_STAR_.call(null,m,inst_24189);
var state_24241__$1 = (function (){var statearr_24266 = state_24241;
(statearr_24266[(19)] = inst_24193);

return statearr_24266;
})();
var statearr_24267_24342 = state_24241__$1;
(statearr_24267_24342[(2)] = inst_24194);

(statearr_24267_24342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (32))){
var inst_24183 = (state_24241[(20)]);
var inst_24184 = (state_24241[(9)]);
var inst_24182 = (state_24241[(11)]);
var inst_24181 = (state_24241[(21)]);
var inst_24196 = (state_24241[(2)]);
var inst_24197 = (inst_24184 + (1));
var tmp24262 = inst_24183;
var tmp24263 = inst_24182;
var tmp24264 = inst_24181;
var inst_24181__$1 = tmp24264;
var inst_24182__$1 = tmp24263;
var inst_24183__$1 = tmp24262;
var inst_24184__$1 = inst_24197;
var state_24241__$1 = (function (){var statearr_24268 = state_24241;
(statearr_24268[(20)] = inst_24183__$1);

(statearr_24268[(9)] = inst_24184__$1);

(statearr_24268[(22)] = inst_24196);

(statearr_24268[(11)] = inst_24182__$1);

(statearr_24268[(21)] = inst_24181__$1);

return statearr_24268;
})();
var statearr_24269_24343 = state_24241__$1;
(statearr_24269_24343[(2)] = null);

(statearr_24269_24343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (40))){
var inst_24209 = (state_24241[(23)]);
var inst_24213 = done.call(null,null);
var inst_24214 = cljs.core.async.untap_STAR_.call(null,m,inst_24209);
var state_24241__$1 = (function (){var statearr_24270 = state_24241;
(statearr_24270[(24)] = inst_24213);

return statearr_24270;
})();
var statearr_24271_24344 = state_24241__$1;
(statearr_24271_24344[(2)] = inst_24214);

(statearr_24271_24344[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (33))){
var inst_24200 = (state_24241[(25)]);
var inst_24202 = cljs.core.chunked_seq_QMARK_.call(null,inst_24200);
var state_24241__$1 = state_24241;
if(inst_24202){
var statearr_24272_24345 = state_24241__$1;
(statearr_24272_24345[(1)] = (36));

} else {
var statearr_24273_24346 = state_24241__$1;
(statearr_24273_24346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (13))){
var inst_24132 = (state_24241[(26)]);
var inst_24135 = cljs.core.async.close_BANG_.call(null,inst_24132);
var state_24241__$1 = state_24241;
var statearr_24274_24347 = state_24241__$1;
(statearr_24274_24347[(2)] = inst_24135);

(statearr_24274_24347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (22))){
var inst_24153 = (state_24241[(8)]);
var inst_24156 = cljs.core.async.close_BANG_.call(null,inst_24153);
var state_24241__$1 = state_24241;
var statearr_24275_24348 = state_24241__$1;
(statearr_24275_24348[(2)] = inst_24156);

(statearr_24275_24348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (36))){
var inst_24200 = (state_24241[(25)]);
var inst_24204 = cljs.core.chunk_first.call(null,inst_24200);
var inst_24205 = cljs.core.chunk_rest.call(null,inst_24200);
var inst_24206 = cljs.core.count.call(null,inst_24204);
var inst_24181 = inst_24205;
var inst_24182 = inst_24204;
var inst_24183 = inst_24206;
var inst_24184 = (0);
var state_24241__$1 = (function (){var statearr_24276 = state_24241;
(statearr_24276[(20)] = inst_24183);

(statearr_24276[(9)] = inst_24184);

(statearr_24276[(11)] = inst_24182);

(statearr_24276[(21)] = inst_24181);

return statearr_24276;
})();
var statearr_24277_24349 = state_24241__$1;
(statearr_24277_24349[(2)] = null);

(statearr_24277_24349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (41))){
var inst_24200 = (state_24241[(25)]);
var inst_24216 = (state_24241[(2)]);
var inst_24217 = cljs.core.next.call(null,inst_24200);
var inst_24181 = inst_24217;
var inst_24182 = null;
var inst_24183 = (0);
var inst_24184 = (0);
var state_24241__$1 = (function (){var statearr_24278 = state_24241;
(statearr_24278[(27)] = inst_24216);

(statearr_24278[(20)] = inst_24183);

(statearr_24278[(9)] = inst_24184);

(statearr_24278[(11)] = inst_24182);

(statearr_24278[(21)] = inst_24181);

return statearr_24278;
})();
var statearr_24279_24350 = state_24241__$1;
(statearr_24279_24350[(2)] = null);

(statearr_24279_24350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (43))){
var state_24241__$1 = state_24241;
var statearr_24280_24351 = state_24241__$1;
(statearr_24280_24351[(2)] = null);

(statearr_24280_24351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (29))){
var inst_24225 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24281_24352 = state_24241__$1;
(statearr_24281_24352[(2)] = inst_24225);

(statearr_24281_24352[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (44))){
var inst_24234 = (state_24241[(2)]);
var state_24241__$1 = (function (){var statearr_24282 = state_24241;
(statearr_24282[(28)] = inst_24234);

return statearr_24282;
})();
var statearr_24283_24353 = state_24241__$1;
(statearr_24283_24353[(2)] = null);

(statearr_24283_24353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (6))){
var inst_24173 = (state_24241[(29)]);
var inst_24172 = cljs.core.deref.call(null,cs);
var inst_24173__$1 = cljs.core.keys.call(null,inst_24172);
var inst_24174 = cljs.core.count.call(null,inst_24173__$1);
var inst_24175 = cljs.core.reset_BANG_.call(null,dctr,inst_24174);
var inst_24180 = cljs.core.seq.call(null,inst_24173__$1);
var inst_24181 = inst_24180;
var inst_24182 = null;
var inst_24183 = (0);
var inst_24184 = (0);
var state_24241__$1 = (function (){var statearr_24284 = state_24241;
(statearr_24284[(20)] = inst_24183);

(statearr_24284[(30)] = inst_24175);

(statearr_24284[(9)] = inst_24184);

(statearr_24284[(29)] = inst_24173__$1);

(statearr_24284[(11)] = inst_24182);

(statearr_24284[(21)] = inst_24181);

return statearr_24284;
})();
var statearr_24285_24354 = state_24241__$1;
(statearr_24285_24354[(2)] = null);

(statearr_24285_24354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (28))){
var inst_24200 = (state_24241[(25)]);
var inst_24181 = (state_24241[(21)]);
var inst_24200__$1 = cljs.core.seq.call(null,inst_24181);
var state_24241__$1 = (function (){var statearr_24286 = state_24241;
(statearr_24286[(25)] = inst_24200__$1);

return statearr_24286;
})();
if(inst_24200__$1){
var statearr_24287_24355 = state_24241__$1;
(statearr_24287_24355[(1)] = (33));

} else {
var statearr_24288_24356 = state_24241__$1;
(statearr_24288_24356[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (25))){
var inst_24183 = (state_24241[(20)]);
var inst_24184 = (state_24241[(9)]);
var inst_24186 = (inst_24184 < inst_24183);
var inst_24187 = inst_24186;
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24187)){
var statearr_24289_24357 = state_24241__$1;
(statearr_24289_24357[(1)] = (27));

} else {
var statearr_24290_24358 = state_24241__$1;
(statearr_24290_24358[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (34))){
var state_24241__$1 = state_24241;
var statearr_24291_24359 = state_24241__$1;
(statearr_24291_24359[(2)] = null);

(statearr_24291_24359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (17))){
var state_24241__$1 = state_24241;
var statearr_24292_24360 = state_24241__$1;
(statearr_24292_24360[(2)] = null);

(statearr_24292_24360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (3))){
var inst_24239 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24241__$1,inst_24239);
} else {
if((state_val_24242 === (12))){
var inst_24168 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24293_24361 = state_24241__$1;
(statearr_24293_24361[(2)] = inst_24168);

(statearr_24293_24361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (2))){
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24241__$1,(4),ch);
} else {
if((state_val_24242 === (23))){
var state_24241__$1 = state_24241;
var statearr_24294_24362 = state_24241__$1;
(statearr_24294_24362[(2)] = null);

(statearr_24294_24362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (35))){
var inst_24223 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24295_24363 = state_24241__$1;
(statearr_24295_24363[(2)] = inst_24223);

(statearr_24295_24363[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (19))){
var inst_24142 = (state_24241[(7)]);
var inst_24146 = cljs.core.chunk_first.call(null,inst_24142);
var inst_24147 = cljs.core.chunk_rest.call(null,inst_24142);
var inst_24148 = cljs.core.count.call(null,inst_24146);
var inst_24122 = inst_24147;
var inst_24123 = inst_24146;
var inst_24124 = inst_24148;
var inst_24125 = (0);
var state_24241__$1 = (function (){var statearr_24296 = state_24241;
(statearr_24296[(13)] = inst_24124);

(statearr_24296[(15)] = inst_24123);

(statearr_24296[(16)] = inst_24122);

(statearr_24296[(17)] = inst_24125);

return statearr_24296;
})();
var statearr_24297_24364 = state_24241__$1;
(statearr_24297_24364[(2)] = null);

(statearr_24297_24364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (11))){
var inst_24142 = (state_24241[(7)]);
var inst_24122 = (state_24241[(16)]);
var inst_24142__$1 = cljs.core.seq.call(null,inst_24122);
var state_24241__$1 = (function (){var statearr_24298 = state_24241;
(statearr_24298[(7)] = inst_24142__$1);

return statearr_24298;
})();
if(inst_24142__$1){
var statearr_24299_24365 = state_24241__$1;
(statearr_24299_24365[(1)] = (16));

} else {
var statearr_24300_24366 = state_24241__$1;
(statearr_24300_24366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (9))){
var inst_24170 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24301_24367 = state_24241__$1;
(statearr_24301_24367[(2)] = inst_24170);

(statearr_24301_24367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (5))){
var inst_24120 = cljs.core.deref.call(null,cs);
var inst_24121 = cljs.core.seq.call(null,inst_24120);
var inst_24122 = inst_24121;
var inst_24123 = null;
var inst_24124 = (0);
var inst_24125 = (0);
var state_24241__$1 = (function (){var statearr_24302 = state_24241;
(statearr_24302[(13)] = inst_24124);

(statearr_24302[(15)] = inst_24123);

(statearr_24302[(16)] = inst_24122);

(statearr_24302[(17)] = inst_24125);

return statearr_24302;
})();
var statearr_24303_24368 = state_24241__$1;
(statearr_24303_24368[(2)] = null);

(statearr_24303_24368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (14))){
var state_24241__$1 = state_24241;
var statearr_24304_24369 = state_24241__$1;
(statearr_24304_24369[(2)] = null);

(statearr_24304_24369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (45))){
var inst_24231 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24305_24370 = state_24241__$1;
(statearr_24305_24370[(2)] = inst_24231);

(statearr_24305_24370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (26))){
var inst_24173 = (state_24241[(29)]);
var inst_24227 = (state_24241[(2)]);
var inst_24228 = cljs.core.seq.call(null,inst_24173);
var state_24241__$1 = (function (){var statearr_24306 = state_24241;
(statearr_24306[(31)] = inst_24227);

return statearr_24306;
})();
if(inst_24228){
var statearr_24307_24371 = state_24241__$1;
(statearr_24307_24371[(1)] = (42));

} else {
var statearr_24308_24372 = state_24241__$1;
(statearr_24308_24372[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (16))){
var inst_24142 = (state_24241[(7)]);
var inst_24144 = cljs.core.chunked_seq_QMARK_.call(null,inst_24142);
var state_24241__$1 = state_24241;
if(inst_24144){
var statearr_24309_24373 = state_24241__$1;
(statearr_24309_24373[(1)] = (19));

} else {
var statearr_24310_24374 = state_24241__$1;
(statearr_24310_24374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (38))){
var inst_24220 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24311_24375 = state_24241__$1;
(statearr_24311_24375[(2)] = inst_24220);

(statearr_24311_24375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (30))){
var state_24241__$1 = state_24241;
var statearr_24312_24376 = state_24241__$1;
(statearr_24312_24376[(2)] = null);

(statearr_24312_24376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (10))){
var inst_24123 = (state_24241[(15)]);
var inst_24125 = (state_24241[(17)]);
var inst_24131 = cljs.core._nth.call(null,inst_24123,inst_24125);
var inst_24132 = cljs.core.nth.call(null,inst_24131,(0),null);
var inst_24133 = cljs.core.nth.call(null,inst_24131,(1),null);
var state_24241__$1 = (function (){var statearr_24313 = state_24241;
(statearr_24313[(26)] = inst_24132);

return statearr_24313;
})();
if(cljs.core.truth_(inst_24133)){
var statearr_24314_24377 = state_24241__$1;
(statearr_24314_24377[(1)] = (13));

} else {
var statearr_24315_24378 = state_24241__$1;
(statearr_24315_24378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (18))){
var inst_24166 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24316_24379 = state_24241__$1;
(statearr_24316_24379[(2)] = inst_24166);

(statearr_24316_24379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (42))){
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24241__$1,(45),dchan);
} else {
if((state_val_24242 === (37))){
var inst_24209 = (state_24241[(23)]);
var inst_24200 = (state_24241[(25)]);
var inst_24113 = (state_24241[(12)]);
var inst_24209__$1 = cljs.core.first.call(null,inst_24200);
var inst_24210 = cljs.core.async.put_BANG_.call(null,inst_24209__$1,inst_24113,done);
var state_24241__$1 = (function (){var statearr_24317 = state_24241;
(statearr_24317[(23)] = inst_24209__$1);

return statearr_24317;
})();
if(cljs.core.truth_(inst_24210)){
var statearr_24318_24380 = state_24241__$1;
(statearr_24318_24380[(1)] = (39));

} else {
var statearr_24319_24381 = state_24241__$1;
(statearr_24319_24381[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (8))){
var inst_24124 = (state_24241[(13)]);
var inst_24125 = (state_24241[(17)]);
var inst_24127 = (inst_24125 < inst_24124);
var inst_24128 = inst_24127;
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24128)){
var statearr_24320_24382 = state_24241__$1;
(statearr_24320_24382[(1)] = (10));

} else {
var statearr_24321_24383 = state_24241__$1;
(statearr_24321_24383[(1)] = (11));

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
});})(c__9199__auto___24329,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___24329,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24325[(0)] = state_machine__9185__auto__);

(statearr_24325[(1)] = (1));

return statearr_24325;
});
var state_machine__9185__auto____1 = (function (state_24241){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24326){if((e24326 instanceof Object)){
var ex__9188__auto__ = e24326;
var statearr_24327_24384 = state_24241;
(statearr_24327_24384[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24385 = state_24241;
state_24241 = G__24385;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24241){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24329,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_24328 = f__9200__auto__.call(null);
(statearr_24328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24329);

return statearr_24328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24329,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24387 = {};
return obj24387;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24388){
var map__24393 = p__24388;
var map__24393__$1 = ((cljs.core.seq_QMARK_.call(null,map__24393))?cljs.core.apply.call(null,cljs.core.hash_map,map__24393):map__24393);
var opts = map__24393__$1;
var statearr_24394_24397 = state;
(statearr_24394_24397[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24393,map__24393__$1,opts){
return (function (val){
var statearr_24395_24398 = state;
(statearr_24395_24398[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24393,map__24393__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24396_24399 = state;
(statearr_24396_24399[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24388 = null;
if (arguments.length > 3) {
  p__24388 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24388);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24400){
var state = cljs.core.first(arglist__24400);
arglist__24400 = cljs.core.next(arglist__24400);
var cont_block = cljs.core.first(arglist__24400);
arglist__24400 = cljs.core.next(arglist__24400);
var ports = cljs.core.first(arglist__24400);
var p__24388 = cljs.core.rest(arglist__24400);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24388);
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
if(typeof cljs.core.async.t24520 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24520 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24521){
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
this.meta24521 = meta24521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24520.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24520.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24522){
var self__ = this;
var _24522__$1 = this;
return self__.meta24521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24522,meta24521__$1){
var self__ = this;
var _24522__$1 = this;
return (new cljs.core.async.t24520(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24520.cljs$lang$type = true;

cljs.core.async.t24520.cljs$lang$ctorStr = "cljs.core.async/t24520";

cljs.core.async.t24520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24521){
return (new cljs.core.async.t24520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24520(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___24639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24592){
var state_val_24593 = (state_24592[(1)]);
if((state_val_24593 === (7))){
var inst_24536 = (state_24592[(7)]);
var inst_24541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24536);
var state_24592__$1 = state_24592;
var statearr_24594_24640 = state_24592__$1;
(statearr_24594_24640[(2)] = inst_24541);

(statearr_24594_24640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (20))){
var inst_24551 = (state_24592[(8)]);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24592__$1,(23),out,inst_24551);
} else {
if((state_val_24593 === (1))){
var inst_24526 = (state_24592[(9)]);
var inst_24526__$1 = calc_state.call(null);
var inst_24527 = cljs.core.seq_QMARK_.call(null,inst_24526__$1);
var state_24592__$1 = (function (){var statearr_24595 = state_24592;
(statearr_24595[(9)] = inst_24526__$1);

return statearr_24595;
})();
if(inst_24527){
var statearr_24596_24641 = state_24592__$1;
(statearr_24596_24641[(1)] = (2));

} else {
var statearr_24597_24642 = state_24592__$1;
(statearr_24597_24642[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (24))){
var inst_24544 = (state_24592[(10)]);
var inst_24536 = inst_24544;
var state_24592__$1 = (function (){var statearr_24598 = state_24592;
(statearr_24598[(7)] = inst_24536);

return statearr_24598;
})();
var statearr_24599_24643 = state_24592__$1;
(statearr_24599_24643[(2)] = null);

(statearr_24599_24643[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (4))){
var inst_24526 = (state_24592[(9)]);
var inst_24532 = (state_24592[(2)]);
var inst_24533 = cljs.core.get.call(null,inst_24532,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24534 = cljs.core.get.call(null,inst_24532,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24535 = cljs.core.get.call(null,inst_24532,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24536 = inst_24526;
var state_24592__$1 = (function (){var statearr_24600 = state_24592;
(statearr_24600[(7)] = inst_24536);

(statearr_24600[(11)] = inst_24535);

(statearr_24600[(12)] = inst_24534);

(statearr_24600[(13)] = inst_24533);

return statearr_24600;
})();
var statearr_24601_24644 = state_24592__$1;
(statearr_24601_24644[(2)] = null);

(statearr_24601_24644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (15))){
var state_24592__$1 = state_24592;
var statearr_24602_24645 = state_24592__$1;
(statearr_24602_24645[(2)] = null);

(statearr_24602_24645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (21))){
var inst_24544 = (state_24592[(10)]);
var inst_24536 = inst_24544;
var state_24592__$1 = (function (){var statearr_24603 = state_24592;
(statearr_24603[(7)] = inst_24536);

return statearr_24603;
})();
var statearr_24604_24646 = state_24592__$1;
(statearr_24604_24646[(2)] = null);

(statearr_24604_24646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (13))){
var inst_24588 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24605_24647 = state_24592__$1;
(statearr_24605_24647[(2)] = inst_24588);

(statearr_24605_24647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (22))){
var inst_24586 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24606_24648 = state_24592__$1;
(statearr_24606_24648[(2)] = inst_24586);

(statearr_24606_24648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (6))){
var inst_24590 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24592__$1,inst_24590);
} else {
if((state_val_24593 === (25))){
var state_24592__$1 = state_24592;
var statearr_24607_24649 = state_24592__$1;
(statearr_24607_24649[(2)] = null);

(statearr_24607_24649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (17))){
var inst_24566 = (state_24592[(14)]);
var state_24592__$1 = state_24592;
var statearr_24608_24650 = state_24592__$1;
(statearr_24608_24650[(2)] = inst_24566);

(statearr_24608_24650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (3))){
var inst_24526 = (state_24592[(9)]);
var state_24592__$1 = state_24592;
var statearr_24609_24651 = state_24592__$1;
(statearr_24609_24651[(2)] = inst_24526);

(statearr_24609_24651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (12))){
var inst_24552 = (state_24592[(15)]);
var inst_24547 = (state_24592[(16)]);
var inst_24566 = (state_24592[(14)]);
var inst_24566__$1 = inst_24547.call(null,inst_24552);
var state_24592__$1 = (function (){var statearr_24610 = state_24592;
(statearr_24610[(14)] = inst_24566__$1);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24566__$1)){
var statearr_24611_24652 = state_24592__$1;
(statearr_24611_24652[(1)] = (17));

} else {
var statearr_24612_24653 = state_24592__$1;
(statearr_24612_24653[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (2))){
var inst_24526 = (state_24592[(9)]);
var inst_24529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24526);
var state_24592__$1 = state_24592;
var statearr_24613_24654 = state_24592__$1;
(statearr_24613_24654[(2)] = inst_24529);

(statearr_24613_24654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (23))){
var inst_24577 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24577)){
var statearr_24614_24655 = state_24592__$1;
(statearr_24614_24655[(1)] = (24));

} else {
var statearr_24615_24656 = state_24592__$1;
(statearr_24615_24656[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (19))){
var inst_24574 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24574)){
var statearr_24616_24657 = state_24592__$1;
(statearr_24616_24657[(1)] = (20));

} else {
var statearr_24617_24658 = state_24592__$1;
(statearr_24617_24658[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (11))){
var inst_24551 = (state_24592[(8)]);
var inst_24557 = (inst_24551 == null);
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24557)){
var statearr_24618_24659 = state_24592__$1;
(statearr_24618_24659[(1)] = (14));

} else {
var statearr_24619_24660 = state_24592__$1;
(statearr_24619_24660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (9))){
var inst_24544 = (state_24592[(10)]);
var inst_24544__$1 = (state_24592[(2)]);
var inst_24545 = cljs.core.get.call(null,inst_24544__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24546 = cljs.core.get.call(null,inst_24544__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24547 = cljs.core.get.call(null,inst_24544__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24592__$1 = (function (){var statearr_24620 = state_24592;
(statearr_24620[(17)] = inst_24546);

(statearr_24620[(16)] = inst_24547);

(statearr_24620[(10)] = inst_24544__$1);

return statearr_24620;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24592__$1,(10),inst_24545);
} else {
if((state_val_24593 === (5))){
var inst_24536 = (state_24592[(7)]);
var inst_24539 = cljs.core.seq_QMARK_.call(null,inst_24536);
var state_24592__$1 = state_24592;
if(inst_24539){
var statearr_24621_24661 = state_24592__$1;
(statearr_24621_24661[(1)] = (7));

} else {
var statearr_24622_24662 = state_24592__$1;
(statearr_24622_24662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (14))){
var inst_24552 = (state_24592[(15)]);
var inst_24559 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24552);
var state_24592__$1 = state_24592;
var statearr_24623_24663 = state_24592__$1;
(statearr_24623_24663[(2)] = inst_24559);

(statearr_24623_24663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (26))){
var inst_24582 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24624_24664 = state_24592__$1;
(statearr_24624_24664[(2)] = inst_24582);

(statearr_24624_24664[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (16))){
var inst_24562 = (state_24592[(2)]);
var inst_24563 = calc_state.call(null);
var inst_24536 = inst_24563;
var state_24592__$1 = (function (){var statearr_24625 = state_24592;
(statearr_24625[(7)] = inst_24536);

(statearr_24625[(18)] = inst_24562);

return statearr_24625;
})();
var statearr_24626_24665 = state_24592__$1;
(statearr_24626_24665[(2)] = null);

(statearr_24626_24665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (10))){
var inst_24552 = (state_24592[(15)]);
var inst_24551 = (state_24592[(8)]);
var inst_24550 = (state_24592[(2)]);
var inst_24551__$1 = cljs.core.nth.call(null,inst_24550,(0),null);
var inst_24552__$1 = cljs.core.nth.call(null,inst_24550,(1),null);
var inst_24553 = (inst_24551__$1 == null);
var inst_24554 = cljs.core._EQ_.call(null,inst_24552__$1,change);
var inst_24555 = (inst_24553) || (inst_24554);
var state_24592__$1 = (function (){var statearr_24627 = state_24592;
(statearr_24627[(15)] = inst_24552__$1);

(statearr_24627[(8)] = inst_24551__$1);

return statearr_24627;
})();
if(cljs.core.truth_(inst_24555)){
var statearr_24628_24666 = state_24592__$1;
(statearr_24628_24666[(1)] = (11));

} else {
var statearr_24629_24667 = state_24592__$1;
(statearr_24629_24667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (18))){
var inst_24552 = (state_24592[(15)]);
var inst_24546 = (state_24592[(17)]);
var inst_24547 = (state_24592[(16)]);
var inst_24569 = cljs.core.empty_QMARK_.call(null,inst_24547);
var inst_24570 = inst_24546.call(null,inst_24552);
var inst_24571 = cljs.core.not.call(null,inst_24570);
var inst_24572 = (inst_24569) && (inst_24571);
var state_24592__$1 = state_24592;
var statearr_24630_24668 = state_24592__$1;
(statearr_24630_24668[(2)] = inst_24572);

(statearr_24630_24668[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (8))){
var inst_24536 = (state_24592[(7)]);
var state_24592__$1 = state_24592;
var statearr_24631_24669 = state_24592__$1;
(statearr_24631_24669[(2)] = inst_24536);

(statearr_24631_24669[(1)] = (9));


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
});})(c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24635[(0)] = state_machine__9185__auto__);

(statearr_24635[(1)] = (1));

return statearr_24635;
});
var state_machine__9185__auto____1 = (function (state_24592){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24636){if((e24636 instanceof Object)){
var ex__9188__auto__ = e24636;
var statearr_24637_24670 = state_24592;
(statearr_24637_24670[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24671 = state_24592;
state_24592 = G__24671;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24592){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_24638 = f__9200__auto__.call(null);
(statearr_24638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24639);

return statearr_24638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24673 = {};
return obj24673;
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
return (function (p1__24674_SHARP_){
if(cljs.core.truth_(p1__24674_SHARP_.call(null,topic))){
return p1__24674_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24674_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24797 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24797 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24798){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24798 = meta24798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24797.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24797.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24797.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24799){
var self__ = this;
var _24799__$1 = this;
return self__.meta24798;
});})(mults,ensure_mult))
;

cljs.core.async.t24797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24799,meta24798__$1){
var self__ = this;
var _24799__$1 = this;
return (new cljs.core.async.t24797(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24798__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24797.cljs$lang$type = true;

cljs.core.async.t24797.cljs$lang$ctorStr = "cljs.core.async/t24797";

cljs.core.async.t24797.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24797");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24797 = ((function (mults,ensure_mult){
return (function __GT_t24797(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24798){
return (new cljs.core.async.t24797(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24798));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24797(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___24919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24919,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24919,mults,ensure_mult,p){
return (function (state_24871){
var state_val_24872 = (state_24871[(1)]);
if((state_val_24872 === (7))){
var inst_24867 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24873_24920 = state_24871__$1;
(statearr_24873_24920[(2)] = inst_24867);

(statearr_24873_24920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (20))){
var state_24871__$1 = state_24871;
var statearr_24874_24921 = state_24871__$1;
(statearr_24874_24921[(2)] = null);

(statearr_24874_24921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (1))){
var state_24871__$1 = state_24871;
var statearr_24875_24922 = state_24871__$1;
(statearr_24875_24922[(2)] = null);

(statearr_24875_24922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (24))){
var inst_24850 = (state_24871[(7)]);
var inst_24859 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24850);
var state_24871__$1 = state_24871;
var statearr_24876_24923 = state_24871__$1;
(statearr_24876_24923[(2)] = inst_24859);

(statearr_24876_24923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (4))){
var inst_24802 = (state_24871[(8)]);
var inst_24802__$1 = (state_24871[(2)]);
var inst_24803 = (inst_24802__$1 == null);
var state_24871__$1 = (function (){var statearr_24877 = state_24871;
(statearr_24877[(8)] = inst_24802__$1);

return statearr_24877;
})();
if(cljs.core.truth_(inst_24803)){
var statearr_24878_24924 = state_24871__$1;
(statearr_24878_24924[(1)] = (5));

} else {
var statearr_24879_24925 = state_24871__$1;
(statearr_24879_24925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (15))){
var inst_24844 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24880_24926 = state_24871__$1;
(statearr_24880_24926[(2)] = inst_24844);

(statearr_24880_24926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (21))){
var inst_24864 = (state_24871[(2)]);
var state_24871__$1 = (function (){var statearr_24881 = state_24871;
(statearr_24881[(9)] = inst_24864);

return statearr_24881;
})();
var statearr_24882_24927 = state_24871__$1;
(statearr_24882_24927[(2)] = null);

(statearr_24882_24927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (13))){
var inst_24826 = (state_24871[(10)]);
var inst_24828 = cljs.core.chunked_seq_QMARK_.call(null,inst_24826);
var state_24871__$1 = state_24871;
if(inst_24828){
var statearr_24883_24928 = state_24871__$1;
(statearr_24883_24928[(1)] = (16));

} else {
var statearr_24884_24929 = state_24871__$1;
(statearr_24884_24929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (22))){
var inst_24856 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
if(cljs.core.truth_(inst_24856)){
var statearr_24885_24930 = state_24871__$1;
(statearr_24885_24930[(1)] = (23));

} else {
var statearr_24886_24931 = state_24871__$1;
(statearr_24886_24931[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (6))){
var inst_24802 = (state_24871[(8)]);
var inst_24850 = (state_24871[(7)]);
var inst_24852 = (state_24871[(11)]);
var inst_24850__$1 = topic_fn.call(null,inst_24802);
var inst_24851 = cljs.core.deref.call(null,mults);
var inst_24852__$1 = cljs.core.get.call(null,inst_24851,inst_24850__$1);
var state_24871__$1 = (function (){var statearr_24887 = state_24871;
(statearr_24887[(7)] = inst_24850__$1);

(statearr_24887[(11)] = inst_24852__$1);

return statearr_24887;
})();
if(cljs.core.truth_(inst_24852__$1)){
var statearr_24888_24932 = state_24871__$1;
(statearr_24888_24932[(1)] = (19));

} else {
var statearr_24889_24933 = state_24871__$1;
(statearr_24889_24933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (25))){
var inst_24861 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24890_24934 = state_24871__$1;
(statearr_24890_24934[(2)] = inst_24861);

(statearr_24890_24934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (17))){
var inst_24826 = (state_24871[(10)]);
var inst_24835 = cljs.core.first.call(null,inst_24826);
var inst_24836 = cljs.core.async.muxch_STAR_.call(null,inst_24835);
var inst_24837 = cljs.core.async.close_BANG_.call(null,inst_24836);
var inst_24838 = cljs.core.next.call(null,inst_24826);
var inst_24812 = inst_24838;
var inst_24813 = null;
var inst_24814 = (0);
var inst_24815 = (0);
var state_24871__$1 = (function (){var statearr_24891 = state_24871;
(statearr_24891[(12)] = inst_24815);

(statearr_24891[(13)] = inst_24812);

(statearr_24891[(14)] = inst_24814);

(statearr_24891[(15)] = inst_24813);

(statearr_24891[(16)] = inst_24837);

return statearr_24891;
})();
var statearr_24892_24935 = state_24871__$1;
(statearr_24892_24935[(2)] = null);

(statearr_24892_24935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (3))){
var inst_24869 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24871__$1,inst_24869);
} else {
if((state_val_24872 === (12))){
var inst_24846 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24893_24936 = state_24871__$1;
(statearr_24893_24936[(2)] = inst_24846);

(statearr_24893_24936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (2))){
var state_24871__$1 = state_24871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24871__$1,(4),ch);
} else {
if((state_val_24872 === (23))){
var state_24871__$1 = state_24871;
var statearr_24894_24937 = state_24871__$1;
(statearr_24894_24937[(2)] = null);

(statearr_24894_24937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (19))){
var inst_24802 = (state_24871[(8)]);
var inst_24852 = (state_24871[(11)]);
var inst_24854 = cljs.core.async.muxch_STAR_.call(null,inst_24852);
var state_24871__$1 = state_24871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24871__$1,(22),inst_24854,inst_24802);
} else {
if((state_val_24872 === (11))){
var inst_24812 = (state_24871[(13)]);
var inst_24826 = (state_24871[(10)]);
var inst_24826__$1 = cljs.core.seq.call(null,inst_24812);
var state_24871__$1 = (function (){var statearr_24895 = state_24871;
(statearr_24895[(10)] = inst_24826__$1);

return statearr_24895;
})();
if(inst_24826__$1){
var statearr_24896_24938 = state_24871__$1;
(statearr_24896_24938[(1)] = (13));

} else {
var statearr_24897_24939 = state_24871__$1;
(statearr_24897_24939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (9))){
var inst_24848 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24898_24940 = state_24871__$1;
(statearr_24898_24940[(2)] = inst_24848);

(statearr_24898_24940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (5))){
var inst_24809 = cljs.core.deref.call(null,mults);
var inst_24810 = cljs.core.vals.call(null,inst_24809);
var inst_24811 = cljs.core.seq.call(null,inst_24810);
var inst_24812 = inst_24811;
var inst_24813 = null;
var inst_24814 = (0);
var inst_24815 = (0);
var state_24871__$1 = (function (){var statearr_24899 = state_24871;
(statearr_24899[(12)] = inst_24815);

(statearr_24899[(13)] = inst_24812);

(statearr_24899[(14)] = inst_24814);

(statearr_24899[(15)] = inst_24813);

return statearr_24899;
})();
var statearr_24900_24941 = state_24871__$1;
(statearr_24900_24941[(2)] = null);

(statearr_24900_24941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (14))){
var state_24871__$1 = state_24871;
var statearr_24904_24942 = state_24871__$1;
(statearr_24904_24942[(2)] = null);

(statearr_24904_24942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (16))){
var inst_24826 = (state_24871[(10)]);
var inst_24830 = cljs.core.chunk_first.call(null,inst_24826);
var inst_24831 = cljs.core.chunk_rest.call(null,inst_24826);
var inst_24832 = cljs.core.count.call(null,inst_24830);
var inst_24812 = inst_24831;
var inst_24813 = inst_24830;
var inst_24814 = inst_24832;
var inst_24815 = (0);
var state_24871__$1 = (function (){var statearr_24905 = state_24871;
(statearr_24905[(12)] = inst_24815);

(statearr_24905[(13)] = inst_24812);

(statearr_24905[(14)] = inst_24814);

(statearr_24905[(15)] = inst_24813);

return statearr_24905;
})();
var statearr_24906_24943 = state_24871__$1;
(statearr_24906_24943[(2)] = null);

(statearr_24906_24943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (10))){
var inst_24815 = (state_24871[(12)]);
var inst_24812 = (state_24871[(13)]);
var inst_24814 = (state_24871[(14)]);
var inst_24813 = (state_24871[(15)]);
var inst_24820 = cljs.core._nth.call(null,inst_24813,inst_24815);
var inst_24821 = cljs.core.async.muxch_STAR_.call(null,inst_24820);
var inst_24822 = cljs.core.async.close_BANG_.call(null,inst_24821);
var inst_24823 = (inst_24815 + (1));
var tmp24901 = inst_24812;
var tmp24902 = inst_24814;
var tmp24903 = inst_24813;
var inst_24812__$1 = tmp24901;
var inst_24813__$1 = tmp24903;
var inst_24814__$1 = tmp24902;
var inst_24815__$1 = inst_24823;
var state_24871__$1 = (function (){var statearr_24907 = state_24871;
(statearr_24907[(12)] = inst_24815__$1);

(statearr_24907[(13)] = inst_24812__$1);

(statearr_24907[(14)] = inst_24814__$1);

(statearr_24907[(17)] = inst_24822);

(statearr_24907[(15)] = inst_24813__$1);

return statearr_24907;
})();
var statearr_24908_24944 = state_24871__$1;
(statearr_24908_24944[(2)] = null);

(statearr_24908_24944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (18))){
var inst_24841 = (state_24871[(2)]);
var state_24871__$1 = state_24871;
var statearr_24909_24945 = state_24871__$1;
(statearr_24909_24945[(2)] = inst_24841);

(statearr_24909_24945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24872 === (8))){
var inst_24815 = (state_24871[(12)]);
var inst_24814 = (state_24871[(14)]);
var inst_24817 = (inst_24815 < inst_24814);
var inst_24818 = inst_24817;
var state_24871__$1 = state_24871;
if(cljs.core.truth_(inst_24818)){
var statearr_24910_24946 = state_24871__$1;
(statearr_24910_24946[(1)] = (10));

} else {
var statearr_24911_24947 = state_24871__$1;
(statearr_24911_24947[(1)] = (11));

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
});})(c__9199__auto___24919,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___24919,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24915[(0)] = state_machine__9185__auto__);

(statearr_24915[(1)] = (1));

return statearr_24915;
});
var state_machine__9185__auto____1 = (function (state_24871){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24916){if((e24916 instanceof Object)){
var ex__9188__auto__ = e24916;
var statearr_24917_24948 = state_24871;
(statearr_24917_24948[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24949 = state_24871;
state_24871 = G__24949;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24871){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24919,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_24918 = f__9200__auto__.call(null);
(statearr_24918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24919);

return statearr_24918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24919,mults,ensure_mult,p))
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
var c__9199__auto___25086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25056){
var state_val_25057 = (state_25056[(1)]);
if((state_val_25057 === (7))){
var state_25056__$1 = state_25056;
var statearr_25058_25087 = state_25056__$1;
(statearr_25058_25087[(2)] = null);

(statearr_25058_25087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (1))){
var state_25056__$1 = state_25056;
var statearr_25059_25088 = state_25056__$1;
(statearr_25059_25088[(2)] = null);

(statearr_25059_25088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (4))){
var inst_25020 = (state_25056[(7)]);
var inst_25022 = (inst_25020 < cnt);
var state_25056__$1 = state_25056;
if(cljs.core.truth_(inst_25022)){
var statearr_25060_25089 = state_25056__$1;
(statearr_25060_25089[(1)] = (6));

} else {
var statearr_25061_25090 = state_25056__$1;
(statearr_25061_25090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (15))){
var inst_25052 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25062_25091 = state_25056__$1;
(statearr_25062_25091[(2)] = inst_25052);

(statearr_25062_25091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (13))){
var inst_25045 = cljs.core.async.close_BANG_.call(null,out);
var state_25056__$1 = state_25056;
var statearr_25063_25092 = state_25056__$1;
(statearr_25063_25092[(2)] = inst_25045);

(statearr_25063_25092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (6))){
var state_25056__$1 = state_25056;
var statearr_25064_25093 = state_25056__$1;
(statearr_25064_25093[(2)] = null);

(statearr_25064_25093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (3))){
var inst_25054 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25056__$1,inst_25054);
} else {
if((state_val_25057 === (12))){
var inst_25042 = (state_25056[(8)]);
var inst_25042__$1 = (state_25056[(2)]);
var inst_25043 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25042__$1);
var state_25056__$1 = (function (){var statearr_25065 = state_25056;
(statearr_25065[(8)] = inst_25042__$1);

return statearr_25065;
})();
if(cljs.core.truth_(inst_25043)){
var statearr_25066_25094 = state_25056__$1;
(statearr_25066_25094[(1)] = (13));

} else {
var statearr_25067_25095 = state_25056__$1;
(statearr_25067_25095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (2))){
var inst_25019 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25020 = (0);
var state_25056__$1 = (function (){var statearr_25068 = state_25056;
(statearr_25068[(9)] = inst_25019);

(statearr_25068[(7)] = inst_25020);

return statearr_25068;
})();
var statearr_25069_25096 = state_25056__$1;
(statearr_25069_25096[(2)] = null);

(statearr_25069_25096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (11))){
var inst_25020 = (state_25056[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25056,(10),Object,null,(9));
var inst_25029 = chs__$1.call(null,inst_25020);
var inst_25030 = done.call(null,inst_25020);
var inst_25031 = cljs.core.async.take_BANG_.call(null,inst_25029,inst_25030);
var state_25056__$1 = state_25056;
var statearr_25070_25097 = state_25056__$1;
(statearr_25070_25097[(2)] = inst_25031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (9))){
var inst_25020 = (state_25056[(7)]);
var inst_25033 = (state_25056[(2)]);
var inst_25034 = (inst_25020 + (1));
var inst_25020__$1 = inst_25034;
var state_25056__$1 = (function (){var statearr_25071 = state_25056;
(statearr_25071[(7)] = inst_25020__$1);

(statearr_25071[(10)] = inst_25033);

return statearr_25071;
})();
var statearr_25072_25098 = state_25056__$1;
(statearr_25072_25098[(2)] = null);

(statearr_25072_25098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (5))){
var inst_25040 = (state_25056[(2)]);
var state_25056__$1 = (function (){var statearr_25073 = state_25056;
(statearr_25073[(11)] = inst_25040);

return statearr_25073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25056__$1,(12),dchan);
} else {
if((state_val_25057 === (14))){
var inst_25042 = (state_25056[(8)]);
var inst_25047 = cljs.core.apply.call(null,f,inst_25042);
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25056__$1,(16),out,inst_25047);
} else {
if((state_val_25057 === (16))){
var inst_25049 = (state_25056[(2)]);
var state_25056__$1 = (function (){var statearr_25074 = state_25056;
(statearr_25074[(12)] = inst_25049);

return statearr_25074;
})();
var statearr_25075_25099 = state_25056__$1;
(statearr_25075_25099[(2)] = null);

(statearr_25075_25099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (10))){
var inst_25024 = (state_25056[(2)]);
var inst_25025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25056__$1 = (function (){var statearr_25076 = state_25056;
(statearr_25076[(13)] = inst_25024);

return statearr_25076;
})();
var statearr_25077_25100 = state_25056__$1;
(statearr_25077_25100[(2)] = inst_25025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (8))){
var inst_25038 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25078_25101 = state_25056__$1;
(statearr_25078_25101[(2)] = inst_25038);

(statearr_25078_25101[(1)] = (5));


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
});})(c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25082[(0)] = state_machine__9185__auto__);

(statearr_25082[(1)] = (1));

return statearr_25082;
});
var state_machine__9185__auto____1 = (function (state_25056){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25083){if((e25083 instanceof Object)){
var ex__9188__auto__ = e25083;
var statearr_25084_25102 = state_25056;
(statearr_25084_25102[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25103 = state_25056;
state_25056 = G__25103;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25056){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_25085 = f__9200__auto__.call(null);
(statearr_25085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25086);

return statearr_25085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___25211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25211,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25211,out){
return (function (state_25187){
var state_val_25188 = (state_25187[(1)]);
if((state_val_25188 === (7))){
var inst_25166 = (state_25187[(7)]);
var inst_25167 = (state_25187[(8)]);
var inst_25166__$1 = (state_25187[(2)]);
var inst_25167__$1 = cljs.core.nth.call(null,inst_25166__$1,(0),null);
var inst_25168 = cljs.core.nth.call(null,inst_25166__$1,(1),null);
var inst_25169 = (inst_25167__$1 == null);
var state_25187__$1 = (function (){var statearr_25189 = state_25187;
(statearr_25189[(9)] = inst_25168);

(statearr_25189[(7)] = inst_25166__$1);

(statearr_25189[(8)] = inst_25167__$1);

return statearr_25189;
})();
if(cljs.core.truth_(inst_25169)){
var statearr_25190_25212 = state_25187__$1;
(statearr_25190_25212[(1)] = (8));

} else {
var statearr_25191_25213 = state_25187__$1;
(statearr_25191_25213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (1))){
var inst_25158 = cljs.core.vec.call(null,chs);
var inst_25159 = inst_25158;
var state_25187__$1 = (function (){var statearr_25192 = state_25187;
(statearr_25192[(10)] = inst_25159);

return statearr_25192;
})();
var statearr_25193_25214 = state_25187__$1;
(statearr_25193_25214[(2)] = null);

(statearr_25193_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (4))){
var inst_25159 = (state_25187[(10)]);
var state_25187__$1 = state_25187;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25187__$1,(7),inst_25159);
} else {
if((state_val_25188 === (6))){
var inst_25183 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25194_25215 = state_25187__$1;
(statearr_25194_25215[(2)] = inst_25183);

(statearr_25194_25215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (3))){
var inst_25185 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25187__$1,inst_25185);
} else {
if((state_val_25188 === (2))){
var inst_25159 = (state_25187[(10)]);
var inst_25161 = cljs.core.count.call(null,inst_25159);
var inst_25162 = (inst_25161 > (0));
var state_25187__$1 = state_25187;
if(cljs.core.truth_(inst_25162)){
var statearr_25196_25216 = state_25187__$1;
(statearr_25196_25216[(1)] = (4));

} else {
var statearr_25197_25217 = state_25187__$1;
(statearr_25197_25217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (11))){
var inst_25159 = (state_25187[(10)]);
var inst_25176 = (state_25187[(2)]);
var tmp25195 = inst_25159;
var inst_25159__$1 = tmp25195;
var state_25187__$1 = (function (){var statearr_25198 = state_25187;
(statearr_25198[(10)] = inst_25159__$1);

(statearr_25198[(11)] = inst_25176);

return statearr_25198;
})();
var statearr_25199_25218 = state_25187__$1;
(statearr_25199_25218[(2)] = null);

(statearr_25199_25218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (9))){
var inst_25167 = (state_25187[(8)]);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25187__$1,(11),out,inst_25167);
} else {
if((state_val_25188 === (5))){
var inst_25181 = cljs.core.async.close_BANG_.call(null,out);
var state_25187__$1 = state_25187;
var statearr_25200_25219 = state_25187__$1;
(statearr_25200_25219[(2)] = inst_25181);

(statearr_25200_25219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (10))){
var inst_25179 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25201_25220 = state_25187__$1;
(statearr_25201_25220[(2)] = inst_25179);

(statearr_25201_25220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (8))){
var inst_25159 = (state_25187[(10)]);
var inst_25168 = (state_25187[(9)]);
var inst_25166 = (state_25187[(7)]);
var inst_25167 = (state_25187[(8)]);
var inst_25171 = (function (){var c = inst_25168;
var v = inst_25167;
var vec__25164 = inst_25166;
var cs = inst_25159;
return ((function (c,v,vec__25164,cs,inst_25159,inst_25168,inst_25166,inst_25167,state_val_25188,c__9199__auto___25211,out){
return (function (p1__25104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25104_SHARP_);
});
;})(c,v,vec__25164,cs,inst_25159,inst_25168,inst_25166,inst_25167,state_val_25188,c__9199__auto___25211,out))
})();
var inst_25172 = cljs.core.filterv.call(null,inst_25171,inst_25159);
var inst_25159__$1 = inst_25172;
var state_25187__$1 = (function (){var statearr_25202 = state_25187;
(statearr_25202[(10)] = inst_25159__$1);

return statearr_25202;
})();
var statearr_25203_25221 = state_25187__$1;
(statearr_25203_25221[(2)] = null);

(statearr_25203_25221[(1)] = (2));


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
});})(c__9199__auto___25211,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25211,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25207[(0)] = state_machine__9185__auto__);

(statearr_25207[(1)] = (1));

return statearr_25207;
});
var state_machine__9185__auto____1 = (function (state_25187){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25208){if((e25208 instanceof Object)){
var ex__9188__auto__ = e25208;
var statearr_25209_25222 = state_25187;
(statearr_25209_25222[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25223 = state_25187;
state_25187 = G__25223;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25187){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25211,out))
})();
var state__9201__auto__ = (function (){var statearr_25210 = f__9200__auto__.call(null);
(statearr_25210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25211);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25211,out))
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
var c__9199__auto___25316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25316,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25316,out){
return (function (state_25293){
var state_val_25294 = (state_25293[(1)]);
if((state_val_25294 === (7))){
var inst_25275 = (state_25293[(7)]);
var inst_25275__$1 = (state_25293[(2)]);
var inst_25276 = (inst_25275__$1 == null);
var inst_25277 = cljs.core.not.call(null,inst_25276);
var state_25293__$1 = (function (){var statearr_25295 = state_25293;
(statearr_25295[(7)] = inst_25275__$1);

return statearr_25295;
})();
if(inst_25277){
var statearr_25296_25317 = state_25293__$1;
(statearr_25296_25317[(1)] = (8));

} else {
var statearr_25297_25318 = state_25293__$1;
(statearr_25297_25318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (1))){
var inst_25270 = (0);
var state_25293__$1 = (function (){var statearr_25298 = state_25293;
(statearr_25298[(8)] = inst_25270);

return statearr_25298;
})();
var statearr_25299_25319 = state_25293__$1;
(statearr_25299_25319[(2)] = null);

(statearr_25299_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (4))){
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25293__$1,(7),ch);
} else {
if((state_val_25294 === (6))){
var inst_25288 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25300_25320 = state_25293__$1;
(statearr_25300_25320[(2)] = inst_25288);

(statearr_25300_25320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (3))){
var inst_25290 = (state_25293[(2)]);
var inst_25291 = cljs.core.async.close_BANG_.call(null,out);
var state_25293__$1 = (function (){var statearr_25301 = state_25293;
(statearr_25301[(9)] = inst_25290);

return statearr_25301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25293__$1,inst_25291);
} else {
if((state_val_25294 === (2))){
var inst_25270 = (state_25293[(8)]);
var inst_25272 = (inst_25270 < n);
var state_25293__$1 = state_25293;
if(cljs.core.truth_(inst_25272)){
var statearr_25302_25321 = state_25293__$1;
(statearr_25302_25321[(1)] = (4));

} else {
var statearr_25303_25322 = state_25293__$1;
(statearr_25303_25322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (11))){
var inst_25270 = (state_25293[(8)]);
var inst_25280 = (state_25293[(2)]);
var inst_25281 = (inst_25270 + (1));
var inst_25270__$1 = inst_25281;
var state_25293__$1 = (function (){var statearr_25304 = state_25293;
(statearr_25304[(10)] = inst_25280);

(statearr_25304[(8)] = inst_25270__$1);

return statearr_25304;
})();
var statearr_25305_25323 = state_25293__$1;
(statearr_25305_25323[(2)] = null);

(statearr_25305_25323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (9))){
var state_25293__$1 = state_25293;
var statearr_25306_25324 = state_25293__$1;
(statearr_25306_25324[(2)] = null);

(statearr_25306_25324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (5))){
var state_25293__$1 = state_25293;
var statearr_25307_25325 = state_25293__$1;
(statearr_25307_25325[(2)] = null);

(statearr_25307_25325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (10))){
var inst_25285 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25308_25326 = state_25293__$1;
(statearr_25308_25326[(2)] = inst_25285);

(statearr_25308_25326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (8))){
var inst_25275 = (state_25293[(7)]);
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25293__$1,(11),out,inst_25275);
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
});})(c__9199__auto___25316,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25316,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25312[(0)] = state_machine__9185__auto__);

(statearr_25312[(1)] = (1));

return statearr_25312;
});
var state_machine__9185__auto____1 = (function (state_25293){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25313){if((e25313 instanceof Object)){
var ex__9188__auto__ = e25313;
var statearr_25314_25327 = state_25293;
(statearr_25314_25327[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25328 = state_25293;
state_25293 = G__25328;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25293){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25316,out))
})();
var state__9201__auto__ = (function (){var statearr_25315 = f__9200__auto__.call(null);
(statearr_25315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25316);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25316,out))
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
if(typeof cljs.core.async.t25336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25336 = (function (ch,f,map_LT_,meta25337){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25337 = meta25337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25339 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25339 = (function (fn1,_,meta25337,map_LT_,f,ch,meta25340){
this.fn1 = fn1;
this._ = _;
this.meta25337 = meta25337;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25340 = meta25340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25339.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25329_SHARP_){
return f1.call(null,(((p1__25329_SHARP_ == null))?null:self__.f.call(null,p1__25329_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25341){
var self__ = this;
var _25341__$1 = this;
return self__.meta25340;
});})(___$1))
;

cljs.core.async.t25339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25341,meta25340__$1){
var self__ = this;
var _25341__$1 = this;
return (new cljs.core.async.t25339(self__.fn1,self__._,self__.meta25337,self__.map_LT_,self__.f,self__.ch,meta25340__$1));
});})(___$1))
;

cljs.core.async.t25339.cljs$lang$type = true;

cljs.core.async.t25339.cljs$lang$ctorStr = "cljs.core.async/t25339";

cljs.core.async.t25339.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25339");
});})(___$1))
;

cljs.core.async.__GT_t25339 = ((function (___$1){
return (function __GT_t25339(fn1__$1,___$2,meta25337__$1,map_LT___$1,f__$1,ch__$1,meta25340){
return (new cljs.core.async.t25339(fn1__$1,___$2,meta25337__$1,map_LT___$1,f__$1,ch__$1,meta25340));
});})(___$1))
;

}

return (new cljs.core.async.t25339(fn1,___$1,self__.meta25337,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25338){
var self__ = this;
var _25338__$1 = this;
return self__.meta25337;
});

cljs.core.async.t25336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25338,meta25337__$1){
var self__ = this;
var _25338__$1 = this;
return (new cljs.core.async.t25336(self__.ch,self__.f,self__.map_LT_,meta25337__$1));
});

cljs.core.async.t25336.cljs$lang$type = true;

cljs.core.async.t25336.cljs$lang$ctorStr = "cljs.core.async/t25336";

cljs.core.async.t25336.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25336");
});

cljs.core.async.__GT_t25336 = (function __GT_t25336(ch__$1,f__$1,map_LT___$1,meta25337){
return (new cljs.core.async.t25336(ch__$1,f__$1,map_LT___$1,meta25337));
});

}

return (new cljs.core.async.t25336(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25345 = (function (ch,f,map_GT_,meta25346){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25346 = meta25346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25347){
var self__ = this;
var _25347__$1 = this;
return self__.meta25346;
});

cljs.core.async.t25345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25347,meta25346__$1){
var self__ = this;
var _25347__$1 = this;
return (new cljs.core.async.t25345(self__.ch,self__.f,self__.map_GT_,meta25346__$1));
});

cljs.core.async.t25345.cljs$lang$type = true;

cljs.core.async.t25345.cljs$lang$ctorStr = "cljs.core.async/t25345";

cljs.core.async.t25345.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25345");
});

cljs.core.async.__GT_t25345 = (function __GT_t25345(ch__$1,f__$1,map_GT___$1,meta25346){
return (new cljs.core.async.t25345(ch__$1,f__$1,map_GT___$1,meta25346));
});

}

return (new cljs.core.async.t25345(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25351 = (function (ch,p,filter_GT_,meta25352){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25352 = meta25352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
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

cljs.core.async.t25351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25353){
var self__ = this;
var _25353__$1 = this;
return self__.meta25352;
});

cljs.core.async.t25351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25353,meta25352__$1){
var self__ = this;
var _25353__$1 = this;
return (new cljs.core.async.t25351(self__.ch,self__.p,self__.filter_GT_,meta25352__$1));
});

cljs.core.async.t25351.cljs$lang$type = true;

cljs.core.async.t25351.cljs$lang$ctorStr = "cljs.core.async/t25351";

cljs.core.async.t25351.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25351");
});

cljs.core.async.__GT_t25351 = (function __GT_t25351(ch__$1,p__$1,filter_GT___$1,meta25352){
return (new cljs.core.async.t25351(ch__$1,p__$1,filter_GT___$1,meta25352));
});

}

return (new cljs.core.async.t25351(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___25436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25436,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25436,out){
return (function (state_25415){
var state_val_25416 = (state_25415[(1)]);
if((state_val_25416 === (7))){
var inst_25411 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25417_25437 = state_25415__$1;
(statearr_25417_25437[(2)] = inst_25411);

(statearr_25417_25437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (1))){
var state_25415__$1 = state_25415;
var statearr_25418_25438 = state_25415__$1;
(statearr_25418_25438[(2)] = null);

(statearr_25418_25438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (4))){
var inst_25397 = (state_25415[(7)]);
var inst_25397__$1 = (state_25415[(2)]);
var inst_25398 = (inst_25397__$1 == null);
var state_25415__$1 = (function (){var statearr_25419 = state_25415;
(statearr_25419[(7)] = inst_25397__$1);

return statearr_25419;
})();
if(cljs.core.truth_(inst_25398)){
var statearr_25420_25439 = state_25415__$1;
(statearr_25420_25439[(1)] = (5));

} else {
var statearr_25421_25440 = state_25415__$1;
(statearr_25421_25440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (6))){
var inst_25397 = (state_25415[(7)]);
var inst_25402 = p.call(null,inst_25397);
var state_25415__$1 = state_25415;
if(cljs.core.truth_(inst_25402)){
var statearr_25422_25441 = state_25415__$1;
(statearr_25422_25441[(1)] = (8));

} else {
var statearr_25423_25442 = state_25415__$1;
(statearr_25423_25442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (3))){
var inst_25413 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25415__$1,inst_25413);
} else {
if((state_val_25416 === (2))){
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25415__$1,(4),ch);
} else {
if((state_val_25416 === (11))){
var inst_25405 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25424_25443 = state_25415__$1;
(statearr_25424_25443[(2)] = inst_25405);

(statearr_25424_25443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (9))){
var state_25415__$1 = state_25415;
var statearr_25425_25444 = state_25415__$1;
(statearr_25425_25444[(2)] = null);

(statearr_25425_25444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (5))){
var inst_25400 = cljs.core.async.close_BANG_.call(null,out);
var state_25415__$1 = state_25415;
var statearr_25426_25445 = state_25415__$1;
(statearr_25426_25445[(2)] = inst_25400);

(statearr_25426_25445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (10))){
var inst_25408 = (state_25415[(2)]);
var state_25415__$1 = (function (){var statearr_25427 = state_25415;
(statearr_25427[(8)] = inst_25408);

return statearr_25427;
})();
var statearr_25428_25446 = state_25415__$1;
(statearr_25428_25446[(2)] = null);

(statearr_25428_25446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (8))){
var inst_25397 = (state_25415[(7)]);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25415__$1,(11),out,inst_25397);
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
});})(c__9199__auto___25436,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25436,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = state_machine__9185__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var state_machine__9185__auto____1 = (function (state_25415){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__9188__auto__ = e25433;
var statearr_25434_25447 = state_25415;
(statearr_25434_25447[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25448 = state_25415;
state_25415 = G__25448;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25415){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25436,out))
})();
var state__9201__auto__ = (function (){var statearr_25435 = f__9200__auto__.call(null);
(statearr_25435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25436);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25436,out))
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
return (function (state_25614){
var state_val_25615 = (state_25614[(1)]);
if((state_val_25615 === (7))){
var inst_25610 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25616_25657 = state_25614__$1;
(statearr_25616_25657[(2)] = inst_25610);

(statearr_25616_25657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (20))){
var inst_25580 = (state_25614[(7)]);
var inst_25591 = (state_25614[(2)]);
var inst_25592 = cljs.core.next.call(null,inst_25580);
var inst_25566 = inst_25592;
var inst_25567 = null;
var inst_25568 = (0);
var inst_25569 = (0);
var state_25614__$1 = (function (){var statearr_25617 = state_25614;
(statearr_25617[(8)] = inst_25591);

(statearr_25617[(9)] = inst_25569);

(statearr_25617[(10)] = inst_25567);

(statearr_25617[(11)] = inst_25568);

(statearr_25617[(12)] = inst_25566);

return statearr_25617;
})();
var statearr_25618_25658 = state_25614__$1;
(statearr_25618_25658[(2)] = null);

(statearr_25618_25658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (1))){
var state_25614__$1 = state_25614;
var statearr_25619_25659 = state_25614__$1;
(statearr_25619_25659[(2)] = null);

(statearr_25619_25659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (4))){
var inst_25555 = (state_25614[(13)]);
var inst_25555__$1 = (state_25614[(2)]);
var inst_25556 = (inst_25555__$1 == null);
var state_25614__$1 = (function (){var statearr_25620 = state_25614;
(statearr_25620[(13)] = inst_25555__$1);

return statearr_25620;
})();
if(cljs.core.truth_(inst_25556)){
var statearr_25621_25660 = state_25614__$1;
(statearr_25621_25660[(1)] = (5));

} else {
var statearr_25622_25661 = state_25614__$1;
(statearr_25622_25661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (15))){
var state_25614__$1 = state_25614;
var statearr_25626_25662 = state_25614__$1;
(statearr_25626_25662[(2)] = null);

(statearr_25626_25662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (21))){
var state_25614__$1 = state_25614;
var statearr_25627_25663 = state_25614__$1;
(statearr_25627_25663[(2)] = null);

(statearr_25627_25663[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (13))){
var inst_25569 = (state_25614[(9)]);
var inst_25567 = (state_25614[(10)]);
var inst_25568 = (state_25614[(11)]);
var inst_25566 = (state_25614[(12)]);
var inst_25576 = (state_25614[(2)]);
var inst_25577 = (inst_25569 + (1));
var tmp25623 = inst_25567;
var tmp25624 = inst_25568;
var tmp25625 = inst_25566;
var inst_25566__$1 = tmp25625;
var inst_25567__$1 = tmp25623;
var inst_25568__$1 = tmp25624;
var inst_25569__$1 = inst_25577;
var state_25614__$1 = (function (){var statearr_25628 = state_25614;
(statearr_25628[(9)] = inst_25569__$1);

(statearr_25628[(10)] = inst_25567__$1);

(statearr_25628[(11)] = inst_25568__$1);

(statearr_25628[(12)] = inst_25566__$1);

(statearr_25628[(14)] = inst_25576);

return statearr_25628;
})();
var statearr_25629_25664 = state_25614__$1;
(statearr_25629_25664[(2)] = null);

(statearr_25629_25664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (22))){
var state_25614__$1 = state_25614;
var statearr_25630_25665 = state_25614__$1;
(statearr_25630_25665[(2)] = null);

(statearr_25630_25665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (6))){
var inst_25555 = (state_25614[(13)]);
var inst_25564 = f.call(null,inst_25555);
var inst_25565 = cljs.core.seq.call(null,inst_25564);
var inst_25566 = inst_25565;
var inst_25567 = null;
var inst_25568 = (0);
var inst_25569 = (0);
var state_25614__$1 = (function (){var statearr_25631 = state_25614;
(statearr_25631[(9)] = inst_25569);

(statearr_25631[(10)] = inst_25567);

(statearr_25631[(11)] = inst_25568);

(statearr_25631[(12)] = inst_25566);

return statearr_25631;
})();
var statearr_25632_25666 = state_25614__$1;
(statearr_25632_25666[(2)] = null);

(statearr_25632_25666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (17))){
var inst_25580 = (state_25614[(7)]);
var inst_25584 = cljs.core.chunk_first.call(null,inst_25580);
var inst_25585 = cljs.core.chunk_rest.call(null,inst_25580);
var inst_25586 = cljs.core.count.call(null,inst_25584);
var inst_25566 = inst_25585;
var inst_25567 = inst_25584;
var inst_25568 = inst_25586;
var inst_25569 = (0);
var state_25614__$1 = (function (){var statearr_25633 = state_25614;
(statearr_25633[(9)] = inst_25569);

(statearr_25633[(10)] = inst_25567);

(statearr_25633[(11)] = inst_25568);

(statearr_25633[(12)] = inst_25566);

return statearr_25633;
})();
var statearr_25634_25667 = state_25614__$1;
(statearr_25634_25667[(2)] = null);

(statearr_25634_25667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (3))){
var inst_25612 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25614__$1,inst_25612);
} else {
if((state_val_25615 === (12))){
var inst_25600 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25635_25668 = state_25614__$1;
(statearr_25635_25668[(2)] = inst_25600);

(statearr_25635_25668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (2))){
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25614__$1,(4),in$);
} else {
if((state_val_25615 === (23))){
var inst_25608 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25636_25669 = state_25614__$1;
(statearr_25636_25669[(2)] = inst_25608);

(statearr_25636_25669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (19))){
var inst_25595 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25637_25670 = state_25614__$1;
(statearr_25637_25670[(2)] = inst_25595);

(statearr_25637_25670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (11))){
var inst_25580 = (state_25614[(7)]);
var inst_25566 = (state_25614[(12)]);
var inst_25580__$1 = cljs.core.seq.call(null,inst_25566);
var state_25614__$1 = (function (){var statearr_25638 = state_25614;
(statearr_25638[(7)] = inst_25580__$1);

return statearr_25638;
})();
if(inst_25580__$1){
var statearr_25639_25671 = state_25614__$1;
(statearr_25639_25671[(1)] = (14));

} else {
var statearr_25640_25672 = state_25614__$1;
(statearr_25640_25672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (9))){
var inst_25602 = (state_25614[(2)]);
var inst_25603 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25614__$1 = (function (){var statearr_25641 = state_25614;
(statearr_25641[(15)] = inst_25602);

return statearr_25641;
})();
if(cljs.core.truth_(inst_25603)){
var statearr_25642_25673 = state_25614__$1;
(statearr_25642_25673[(1)] = (21));

} else {
var statearr_25643_25674 = state_25614__$1;
(statearr_25643_25674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (5))){
var inst_25558 = cljs.core.async.close_BANG_.call(null,out);
var state_25614__$1 = state_25614;
var statearr_25644_25675 = state_25614__$1;
(statearr_25644_25675[(2)] = inst_25558);

(statearr_25644_25675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (14))){
var inst_25580 = (state_25614[(7)]);
var inst_25582 = cljs.core.chunked_seq_QMARK_.call(null,inst_25580);
var state_25614__$1 = state_25614;
if(inst_25582){
var statearr_25645_25676 = state_25614__$1;
(statearr_25645_25676[(1)] = (17));

} else {
var statearr_25646_25677 = state_25614__$1;
(statearr_25646_25677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (16))){
var inst_25598 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25647_25678 = state_25614__$1;
(statearr_25647_25678[(2)] = inst_25598);

(statearr_25647_25678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (10))){
var inst_25569 = (state_25614[(9)]);
var inst_25567 = (state_25614[(10)]);
var inst_25574 = cljs.core._nth.call(null,inst_25567,inst_25569);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25614__$1,(13),out,inst_25574);
} else {
if((state_val_25615 === (18))){
var inst_25580 = (state_25614[(7)]);
var inst_25589 = cljs.core.first.call(null,inst_25580);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25614__$1,(20),out,inst_25589);
} else {
if((state_val_25615 === (8))){
var inst_25569 = (state_25614[(9)]);
var inst_25568 = (state_25614[(11)]);
var inst_25571 = (inst_25569 < inst_25568);
var inst_25572 = inst_25571;
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25572)){
var statearr_25648_25679 = state_25614__$1;
(statearr_25648_25679[(1)] = (10));

} else {
var statearr_25649_25680 = state_25614__$1;
(statearr_25649_25680[(1)] = (11));

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
var statearr_25653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25653[(0)] = state_machine__9185__auto__);

(statearr_25653[(1)] = (1));

return statearr_25653;
});
var state_machine__9185__auto____1 = (function (state_25614){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25654){if((e25654 instanceof Object)){
var ex__9188__auto__ = e25654;
var statearr_25655_25681 = state_25614;
(statearr_25655_25681[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25682 = state_25614;
state_25614 = G__25682;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25614){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_25656 = f__9200__auto__.call(null);
(statearr_25656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_25656;
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
var c__9199__auto___25779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25779,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25779,out){
return (function (state_25754){
var state_val_25755 = (state_25754[(1)]);
if((state_val_25755 === (7))){
var inst_25749 = (state_25754[(2)]);
var state_25754__$1 = state_25754;
var statearr_25756_25780 = state_25754__$1;
(statearr_25756_25780[(2)] = inst_25749);

(statearr_25756_25780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (1))){
var inst_25731 = null;
var state_25754__$1 = (function (){var statearr_25757 = state_25754;
(statearr_25757[(7)] = inst_25731);

return statearr_25757;
})();
var statearr_25758_25781 = state_25754__$1;
(statearr_25758_25781[(2)] = null);

(statearr_25758_25781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (4))){
var inst_25734 = (state_25754[(8)]);
var inst_25734__$1 = (state_25754[(2)]);
var inst_25735 = (inst_25734__$1 == null);
var inst_25736 = cljs.core.not.call(null,inst_25735);
var state_25754__$1 = (function (){var statearr_25759 = state_25754;
(statearr_25759[(8)] = inst_25734__$1);

return statearr_25759;
})();
if(inst_25736){
var statearr_25760_25782 = state_25754__$1;
(statearr_25760_25782[(1)] = (5));

} else {
var statearr_25761_25783 = state_25754__$1;
(statearr_25761_25783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (6))){
var state_25754__$1 = state_25754;
var statearr_25762_25784 = state_25754__$1;
(statearr_25762_25784[(2)] = null);

(statearr_25762_25784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (3))){
var inst_25751 = (state_25754[(2)]);
var inst_25752 = cljs.core.async.close_BANG_.call(null,out);
var state_25754__$1 = (function (){var statearr_25763 = state_25754;
(statearr_25763[(9)] = inst_25751);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25754__$1,inst_25752);
} else {
if((state_val_25755 === (2))){
var state_25754__$1 = state_25754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25754__$1,(4),ch);
} else {
if((state_val_25755 === (11))){
var inst_25734 = (state_25754[(8)]);
var inst_25743 = (state_25754[(2)]);
var inst_25731 = inst_25734;
var state_25754__$1 = (function (){var statearr_25764 = state_25754;
(statearr_25764[(10)] = inst_25743);

(statearr_25764[(7)] = inst_25731);

return statearr_25764;
})();
var statearr_25765_25785 = state_25754__$1;
(statearr_25765_25785[(2)] = null);

(statearr_25765_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (9))){
var inst_25734 = (state_25754[(8)]);
var state_25754__$1 = state_25754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25754__$1,(11),out,inst_25734);
} else {
if((state_val_25755 === (5))){
var inst_25731 = (state_25754[(7)]);
var inst_25734 = (state_25754[(8)]);
var inst_25738 = cljs.core._EQ_.call(null,inst_25734,inst_25731);
var state_25754__$1 = state_25754;
if(inst_25738){
var statearr_25767_25786 = state_25754__$1;
(statearr_25767_25786[(1)] = (8));

} else {
var statearr_25768_25787 = state_25754__$1;
(statearr_25768_25787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (10))){
var inst_25746 = (state_25754[(2)]);
var state_25754__$1 = state_25754;
var statearr_25769_25788 = state_25754__$1;
(statearr_25769_25788[(2)] = inst_25746);

(statearr_25769_25788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (8))){
var inst_25731 = (state_25754[(7)]);
var tmp25766 = inst_25731;
var inst_25731__$1 = tmp25766;
var state_25754__$1 = (function (){var statearr_25770 = state_25754;
(statearr_25770[(7)] = inst_25731__$1);

return statearr_25770;
})();
var statearr_25771_25789 = state_25754__$1;
(statearr_25771_25789[(2)] = null);

(statearr_25771_25789[(1)] = (2));


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
});})(c__9199__auto___25779,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25779,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25775[(0)] = state_machine__9185__auto__);

(statearr_25775[(1)] = (1));

return statearr_25775;
});
var state_machine__9185__auto____1 = (function (state_25754){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25776){if((e25776 instanceof Object)){
var ex__9188__auto__ = e25776;
var statearr_25777_25790 = state_25754;
(statearr_25777_25790[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_25754;
state_25754 = G__25791;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25754){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25779,out))
})();
var state__9201__auto__ = (function (){var statearr_25778 = f__9200__auto__.call(null);
(statearr_25778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25779);

return statearr_25778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25779,out))
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
var c__9199__auto___25926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25926,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25926,out){
return (function (state_25896){
var state_val_25897 = (state_25896[(1)]);
if((state_val_25897 === (7))){
var inst_25892 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25898_25927 = state_25896__$1;
(statearr_25898_25927[(2)] = inst_25892);

(statearr_25898_25927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (1))){
var inst_25859 = (new Array(n));
var inst_25860 = inst_25859;
var inst_25861 = (0);
var state_25896__$1 = (function (){var statearr_25899 = state_25896;
(statearr_25899[(7)] = inst_25860);

(statearr_25899[(8)] = inst_25861);

return statearr_25899;
})();
var statearr_25900_25928 = state_25896__$1;
(statearr_25900_25928[(2)] = null);

(statearr_25900_25928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (4))){
var inst_25864 = (state_25896[(9)]);
var inst_25864__$1 = (state_25896[(2)]);
var inst_25865 = (inst_25864__$1 == null);
var inst_25866 = cljs.core.not.call(null,inst_25865);
var state_25896__$1 = (function (){var statearr_25901 = state_25896;
(statearr_25901[(9)] = inst_25864__$1);

return statearr_25901;
})();
if(inst_25866){
var statearr_25902_25929 = state_25896__$1;
(statearr_25902_25929[(1)] = (5));

} else {
var statearr_25903_25930 = state_25896__$1;
(statearr_25903_25930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (15))){
var inst_25886 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25904_25931 = state_25896__$1;
(statearr_25904_25931[(2)] = inst_25886);

(statearr_25904_25931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (13))){
var state_25896__$1 = state_25896;
var statearr_25905_25932 = state_25896__$1;
(statearr_25905_25932[(2)] = null);

(statearr_25905_25932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (6))){
var inst_25861 = (state_25896[(8)]);
var inst_25882 = (inst_25861 > (0));
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25882)){
var statearr_25906_25933 = state_25896__$1;
(statearr_25906_25933[(1)] = (12));

} else {
var statearr_25907_25934 = state_25896__$1;
(statearr_25907_25934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (3))){
var inst_25894 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25896__$1,inst_25894);
} else {
if((state_val_25897 === (12))){
var inst_25860 = (state_25896[(7)]);
var inst_25884 = cljs.core.vec.call(null,inst_25860);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25896__$1,(15),out,inst_25884);
} else {
if((state_val_25897 === (2))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(4),ch);
} else {
if((state_val_25897 === (11))){
var inst_25876 = (state_25896[(2)]);
var inst_25877 = (new Array(n));
var inst_25860 = inst_25877;
var inst_25861 = (0);
var state_25896__$1 = (function (){var statearr_25908 = state_25896;
(statearr_25908[(7)] = inst_25860);

(statearr_25908[(8)] = inst_25861);

(statearr_25908[(10)] = inst_25876);

return statearr_25908;
})();
var statearr_25909_25935 = state_25896__$1;
(statearr_25909_25935[(2)] = null);

(statearr_25909_25935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (9))){
var inst_25860 = (state_25896[(7)]);
var inst_25874 = cljs.core.vec.call(null,inst_25860);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25896__$1,(11),out,inst_25874);
} else {
if((state_val_25897 === (5))){
var inst_25869 = (state_25896[(11)]);
var inst_25860 = (state_25896[(7)]);
var inst_25861 = (state_25896[(8)]);
var inst_25864 = (state_25896[(9)]);
var inst_25868 = (inst_25860[inst_25861] = inst_25864);
var inst_25869__$1 = (inst_25861 + (1));
var inst_25870 = (inst_25869__$1 < n);
var state_25896__$1 = (function (){var statearr_25910 = state_25896;
(statearr_25910[(12)] = inst_25868);

(statearr_25910[(11)] = inst_25869__$1);

return statearr_25910;
})();
if(cljs.core.truth_(inst_25870)){
var statearr_25911_25936 = state_25896__$1;
(statearr_25911_25936[(1)] = (8));

} else {
var statearr_25912_25937 = state_25896__$1;
(statearr_25912_25937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (14))){
var inst_25889 = (state_25896[(2)]);
var inst_25890 = cljs.core.async.close_BANG_.call(null,out);
var state_25896__$1 = (function (){var statearr_25914 = state_25896;
(statearr_25914[(13)] = inst_25889);

return statearr_25914;
})();
var statearr_25915_25938 = state_25896__$1;
(statearr_25915_25938[(2)] = inst_25890);

(statearr_25915_25938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (10))){
var inst_25880 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25916_25939 = state_25896__$1;
(statearr_25916_25939[(2)] = inst_25880);

(statearr_25916_25939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (8))){
var inst_25869 = (state_25896[(11)]);
var inst_25860 = (state_25896[(7)]);
var tmp25913 = inst_25860;
var inst_25860__$1 = tmp25913;
var inst_25861 = inst_25869;
var state_25896__$1 = (function (){var statearr_25917 = state_25896;
(statearr_25917[(7)] = inst_25860__$1);

(statearr_25917[(8)] = inst_25861);

return statearr_25917;
})();
var statearr_25918_25940 = state_25896__$1;
(statearr_25918_25940[(2)] = null);

(statearr_25918_25940[(1)] = (2));


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
});})(c__9199__auto___25926,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25926,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25922[(0)] = state_machine__9185__auto__);

(statearr_25922[(1)] = (1));

return statearr_25922;
});
var state_machine__9185__auto____1 = (function (state_25896){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25923){if((e25923 instanceof Object)){
var ex__9188__auto__ = e25923;
var statearr_25924_25941 = state_25896;
(statearr_25924_25941[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25942 = state_25896;
state_25896 = G__25942;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25926,out))
})();
var state__9201__auto__ = (function (){var statearr_25925 = f__9200__auto__.call(null);
(statearr_25925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25926);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25926,out))
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
var c__9199__auto___26085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___26085,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___26085,out){
return (function (state_26055){
var state_val_26056 = (state_26055[(1)]);
if((state_val_26056 === (7))){
var inst_26051 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26057_26086 = state_26055__$1;
(statearr_26057_26086[(2)] = inst_26051);

(statearr_26057_26086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (1))){
var inst_26014 = [];
var inst_26015 = inst_26014;
var inst_26016 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26055__$1 = (function (){var statearr_26058 = state_26055;
(statearr_26058[(7)] = inst_26015);

(statearr_26058[(8)] = inst_26016);

return statearr_26058;
})();
var statearr_26059_26087 = state_26055__$1;
(statearr_26059_26087[(2)] = null);

(statearr_26059_26087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (4))){
var inst_26019 = (state_26055[(9)]);
var inst_26019__$1 = (state_26055[(2)]);
var inst_26020 = (inst_26019__$1 == null);
var inst_26021 = cljs.core.not.call(null,inst_26020);
var state_26055__$1 = (function (){var statearr_26060 = state_26055;
(statearr_26060[(9)] = inst_26019__$1);

return statearr_26060;
})();
if(inst_26021){
var statearr_26061_26088 = state_26055__$1;
(statearr_26061_26088[(1)] = (5));

} else {
var statearr_26062_26089 = state_26055__$1;
(statearr_26062_26089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (15))){
var inst_26045 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26063_26090 = state_26055__$1;
(statearr_26063_26090[(2)] = inst_26045);

(statearr_26063_26090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (13))){
var state_26055__$1 = state_26055;
var statearr_26064_26091 = state_26055__$1;
(statearr_26064_26091[(2)] = null);

(statearr_26064_26091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (6))){
var inst_26015 = (state_26055[(7)]);
var inst_26040 = inst_26015.length;
var inst_26041 = (inst_26040 > (0));
var state_26055__$1 = state_26055;
if(cljs.core.truth_(inst_26041)){
var statearr_26065_26092 = state_26055__$1;
(statearr_26065_26092[(1)] = (12));

} else {
var statearr_26066_26093 = state_26055__$1;
(statearr_26066_26093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (3))){
var inst_26053 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26055__$1,inst_26053);
} else {
if((state_val_26056 === (12))){
var inst_26015 = (state_26055[(7)]);
var inst_26043 = cljs.core.vec.call(null,inst_26015);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26055__$1,(15),out,inst_26043);
} else {
if((state_val_26056 === (2))){
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(4),ch);
} else {
if((state_val_26056 === (11))){
var inst_26023 = (state_26055[(10)]);
var inst_26019 = (state_26055[(9)]);
var inst_26033 = (state_26055[(2)]);
var inst_26034 = [];
var inst_26035 = inst_26034.push(inst_26019);
var inst_26015 = inst_26034;
var inst_26016 = inst_26023;
var state_26055__$1 = (function (){var statearr_26067 = state_26055;
(statearr_26067[(7)] = inst_26015);

(statearr_26067[(11)] = inst_26035);

(statearr_26067[(8)] = inst_26016);

(statearr_26067[(12)] = inst_26033);

return statearr_26067;
})();
var statearr_26068_26094 = state_26055__$1;
(statearr_26068_26094[(2)] = null);

(statearr_26068_26094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (9))){
var inst_26015 = (state_26055[(7)]);
var inst_26031 = cljs.core.vec.call(null,inst_26015);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26055__$1,(11),out,inst_26031);
} else {
if((state_val_26056 === (5))){
var inst_26023 = (state_26055[(10)]);
var inst_26019 = (state_26055[(9)]);
var inst_26016 = (state_26055[(8)]);
var inst_26023__$1 = f.call(null,inst_26019);
var inst_26024 = cljs.core._EQ_.call(null,inst_26023__$1,inst_26016);
var inst_26025 = cljs.core.keyword_identical_QMARK_.call(null,inst_26016,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26026 = (inst_26024) || (inst_26025);
var state_26055__$1 = (function (){var statearr_26069 = state_26055;
(statearr_26069[(10)] = inst_26023__$1);

return statearr_26069;
})();
if(cljs.core.truth_(inst_26026)){
var statearr_26070_26095 = state_26055__$1;
(statearr_26070_26095[(1)] = (8));

} else {
var statearr_26071_26096 = state_26055__$1;
(statearr_26071_26096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (14))){
var inst_26048 = (state_26055[(2)]);
var inst_26049 = cljs.core.async.close_BANG_.call(null,out);
var state_26055__$1 = (function (){var statearr_26073 = state_26055;
(statearr_26073[(13)] = inst_26048);

return statearr_26073;
})();
var statearr_26074_26097 = state_26055__$1;
(statearr_26074_26097[(2)] = inst_26049);

(statearr_26074_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (10))){
var inst_26038 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26075_26098 = state_26055__$1;
(statearr_26075_26098[(2)] = inst_26038);

(statearr_26075_26098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (8))){
var inst_26023 = (state_26055[(10)]);
var inst_26015 = (state_26055[(7)]);
var inst_26019 = (state_26055[(9)]);
var inst_26028 = inst_26015.push(inst_26019);
var tmp26072 = inst_26015;
var inst_26015__$1 = tmp26072;
var inst_26016 = inst_26023;
var state_26055__$1 = (function (){var statearr_26076 = state_26055;
(statearr_26076[(7)] = inst_26015__$1);

(statearr_26076[(8)] = inst_26016);

(statearr_26076[(14)] = inst_26028);

return statearr_26076;
})();
var statearr_26077_26099 = state_26055__$1;
(statearr_26077_26099[(2)] = null);

(statearr_26077_26099[(1)] = (2));


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
});})(c__9199__auto___26085,out))
;
return ((function (switch__9184__auto__,c__9199__auto___26085,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_26081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26081[(0)] = state_machine__9185__auto__);

(statearr_26081[(1)] = (1));

return statearr_26081;
});
var state_machine__9185__auto____1 = (function (state_26055){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_26055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e26082){if((e26082 instanceof Object)){
var ex__9188__auto__ = e26082;
var statearr_26083_26100 = state_26055;
(statearr_26083_26100[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26101 = state_26055;
state_26055 = G__26101;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_26055){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_26055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___26085,out))
})();
var state__9201__auto__ = (function (){var statearr_26084 = f__9200__auto__.call(null);
(statearr_26084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___26085);

return statearr_26084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___26085,out))
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