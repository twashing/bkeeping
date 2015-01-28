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
if(typeof cljs.core.async.t23014 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23014 = (function (f,fn_handler,meta23015){
this.f = f;
this.fn_handler = fn_handler;
this.meta23015 = meta23015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23016){
var self__ = this;
var _23016__$1 = this;
return self__.meta23015;
});

cljs.core.async.t23014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23016,meta23015__$1){
var self__ = this;
var _23016__$1 = this;
return (new cljs.core.async.t23014(self__.f,self__.fn_handler,meta23015__$1));
});

cljs.core.async.t23014.cljs$lang$type = true;

cljs.core.async.t23014.cljs$lang$ctorStr = "cljs.core.async/t23014";

cljs.core.async.t23014.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23014");
});

cljs.core.async.__GT_t23014 = (function __GT_t23014(f__$1,fn_handler__$1,meta23015){
return (new cljs.core.async.t23014(f__$1,fn_handler__$1,meta23015));
});

}

return (new cljs.core.async.t23014(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__23018 = buff;
if(G__23018){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__23018.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23018);
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
var val_23019 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23019);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23019,ret){
return (function (){
return fn1.call(null,val_23019);
});})(val_23019,ret))
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
var n__4509__auto___23020 = n;
var x_23021 = (0);
while(true){
if((x_23021 < n__4509__auto___23020)){
(a[x_23021] = (0));

var G__23022 = (x_23021 + (1));
x_23021 = G__23022;
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

var G__23023 = (i + (1));
i = G__23023;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23027 = (function (flag,alt_flag,meta23028){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23028 = meta23028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23027.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23029){
var self__ = this;
var _23029__$1 = this;
return self__.meta23028;
});})(flag))
;

cljs.core.async.t23027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23029,meta23028__$1){
var self__ = this;
var _23029__$1 = this;
return (new cljs.core.async.t23027(self__.flag,self__.alt_flag,meta23028__$1));
});})(flag))
;

cljs.core.async.t23027.cljs$lang$type = true;

cljs.core.async.t23027.cljs$lang$ctorStr = "cljs.core.async/t23027";

cljs.core.async.t23027.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23027");
});})(flag))
;

cljs.core.async.__GT_t23027 = ((function (flag){
return (function __GT_t23027(flag__$1,alt_flag__$1,meta23028){
return (new cljs.core.async.t23027(flag__$1,alt_flag__$1,meta23028));
});})(flag))
;

}

return (new cljs.core.async.t23027(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23033 = (function (cb,flag,alt_handler,meta23034){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23034 = meta23034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23035){
var self__ = this;
var _23035__$1 = this;
return self__.meta23034;
});

cljs.core.async.t23033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23035,meta23034__$1){
var self__ = this;
var _23035__$1 = this;
return (new cljs.core.async.t23033(self__.cb,self__.flag,self__.alt_handler,meta23034__$1));
});

cljs.core.async.t23033.cljs$lang$type = true;

cljs.core.async.t23033.cljs$lang$ctorStr = "cljs.core.async/t23033";

cljs.core.async.t23033.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23033");
});

cljs.core.async.__GT_t23033 = (function __GT_t23033(cb__$1,flag__$1,alt_handler__$1,meta23034){
return (new cljs.core.async.t23033(cb__$1,flag__$1,alt_handler__$1,meta23034));
});

}

return (new cljs.core.async.t23033(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__23036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23037_SHARP_,port], null));
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
var G__23038 = (i + (1));
i = G__23038;
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
var alts_BANG___delegate = function (ports,p__23039){
var map__23041 = p__23039;
var map__23041__$1 = ((cljs.core.seq_QMARK_.call(null,map__23041))?cljs.core.apply.call(null,cljs.core.hash_map,map__23041):map__23041);
var opts = map__23041__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23039 = null;
if (arguments.length > 1) {
  p__23039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23042){
var ports = cljs.core.first(arglist__23042);
var p__23039 = cljs.core.rest(arglist__23042);
return alts_BANG___delegate(ports,p__23039);
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
var c__9199__auto___23137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23137){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23137){
return (function (state_23113){
var state_val_23114 = (state_23113[(1)]);
if((state_val_23114 === (7))){
var inst_23109 = (state_23113[(2)]);
var state_23113__$1 = state_23113;
var statearr_23115_23138 = state_23113__$1;
(statearr_23115_23138[(2)] = inst_23109);

(statearr_23115_23138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (1))){
var state_23113__$1 = state_23113;
var statearr_23116_23139 = state_23113__$1;
(statearr_23116_23139[(2)] = null);

(statearr_23116_23139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (4))){
var inst_23092 = (state_23113[(7)]);
var inst_23092__$1 = (state_23113[(2)]);
var inst_23093 = (inst_23092__$1 == null);
var state_23113__$1 = (function (){var statearr_23117 = state_23113;
(statearr_23117[(7)] = inst_23092__$1);

return statearr_23117;
})();
if(cljs.core.truth_(inst_23093)){
var statearr_23118_23140 = state_23113__$1;
(statearr_23118_23140[(1)] = (5));

} else {
var statearr_23119_23141 = state_23113__$1;
(statearr_23119_23141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (13))){
var state_23113__$1 = state_23113;
var statearr_23120_23142 = state_23113__$1;
(statearr_23120_23142[(2)] = null);

(statearr_23120_23142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (6))){
var inst_23092 = (state_23113[(7)]);
var state_23113__$1 = state_23113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23113__$1,(11),to,inst_23092);
} else {
if((state_val_23114 === (3))){
var inst_23111 = (state_23113[(2)]);
var state_23113__$1 = state_23113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23113__$1,inst_23111);
} else {
if((state_val_23114 === (12))){
var state_23113__$1 = state_23113;
var statearr_23121_23143 = state_23113__$1;
(statearr_23121_23143[(2)] = null);

(statearr_23121_23143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (2))){
var state_23113__$1 = state_23113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23113__$1,(4),from);
} else {
if((state_val_23114 === (11))){
var inst_23102 = (state_23113[(2)]);
var state_23113__$1 = state_23113;
if(cljs.core.truth_(inst_23102)){
var statearr_23122_23144 = state_23113__$1;
(statearr_23122_23144[(1)] = (12));

} else {
var statearr_23123_23145 = state_23113__$1;
(statearr_23123_23145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (9))){
var state_23113__$1 = state_23113;
var statearr_23124_23146 = state_23113__$1;
(statearr_23124_23146[(2)] = null);

(statearr_23124_23146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (5))){
var state_23113__$1 = state_23113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23125_23147 = state_23113__$1;
(statearr_23125_23147[(1)] = (8));

} else {
var statearr_23126_23148 = state_23113__$1;
(statearr_23126_23148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (14))){
var inst_23107 = (state_23113[(2)]);
var state_23113__$1 = state_23113;
var statearr_23127_23149 = state_23113__$1;
(statearr_23127_23149[(2)] = inst_23107);

(statearr_23127_23149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (10))){
var inst_23099 = (state_23113[(2)]);
var state_23113__$1 = state_23113;
var statearr_23128_23150 = state_23113__$1;
(statearr_23128_23150[(2)] = inst_23099);

(statearr_23128_23150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23114 === (8))){
var inst_23096 = cljs.core.async.close_BANG_.call(null,to);
var state_23113__$1 = state_23113;
var statearr_23129_23151 = state_23113__$1;
(statearr_23129_23151[(2)] = inst_23096);

(statearr_23129_23151[(1)] = (10));


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
});})(c__9199__auto___23137))
;
return ((function (switch__9184__auto__,c__9199__auto___23137){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23133 = [null,null,null,null,null,null,null,null];
(statearr_23133[(0)] = state_machine__9185__auto__);

(statearr_23133[(1)] = (1));

return statearr_23133;
});
var state_machine__9185__auto____1 = (function (state_23113){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23134){if((e23134 instanceof Object)){
var ex__9188__auto__ = e23134;
var statearr_23135_23152 = state_23113;
(statearr_23135_23152[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23153 = state_23113;
state_23113 = G__23153;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23113){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23137))
})();
var state__9201__auto__ = (function (){var statearr_23136 = f__9200__auto__.call(null);
(statearr_23136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23137);

return statearr_23136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23137))
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
return (function (p__23337){
var vec__23338 = p__23337;
var v = cljs.core.nth.call(null,vec__23338,(0),null);
var p = cljs.core.nth.call(null,vec__23338,(1),null);
var job = vec__23338;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___23520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results){
return (function (state_23343){
var state_val_23344 = (state_23343[(1)]);
if((state_val_23344 === (2))){
var inst_23340 = (state_23343[(2)]);
var inst_23341 = cljs.core.async.close_BANG_.call(null,res);
var state_23343__$1 = (function (){var statearr_23345 = state_23343;
(statearr_23345[(7)] = inst_23340);

return statearr_23345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23343__$1,inst_23341);
} else {
if((state_val_23344 === (1))){
var state_23343__$1 = state_23343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23343__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23349 = [null,null,null,null,null,null,null,null];
(statearr_23349[(0)] = state_machine__9185__auto__);

(statearr_23349[(1)] = (1));

return statearr_23349;
});
var state_machine__9185__auto____1 = (function (state_23343){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23350){if((e23350 instanceof Object)){
var ex__9188__auto__ = e23350;
var statearr_23351_23521 = state_23343;
(statearr_23351_23521[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23522 = state_23343;
state_23343 = G__23522;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23343){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_23352 = f__9200__auto__.call(null);
(statearr_23352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23520);

return statearr_23352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23520,res,vec__23338,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23353){
var vec__23354 = p__23353;
var v = cljs.core.nth.call(null,vec__23354,(0),null);
var p = cljs.core.nth.call(null,vec__23354,(1),null);
var job = vec__23354;
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
var n__4509__auto___23523 = n;
var __23524 = (0);
while(true){
if((__23524 < n__4509__auto___23523)){
var G__23355_23525 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23355_23525) {
case "async":
var c__9199__auto___23527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23524,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__23524,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function (state_23368){
var state_val_23369 = (state_23368[(1)]);
if((state_val_23369 === (7))){
var inst_23364 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
var statearr_23370_23528 = state_23368__$1;
(statearr_23370_23528[(2)] = inst_23364);

(statearr_23370_23528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (6))){
var state_23368__$1 = state_23368;
var statearr_23371_23529 = state_23368__$1;
(statearr_23371_23529[(2)] = null);

(statearr_23371_23529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (5))){
var state_23368__$1 = state_23368;
var statearr_23372_23530 = state_23368__$1;
(statearr_23372_23530[(2)] = null);

(statearr_23372_23530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (4))){
var inst_23358 = (state_23368[(2)]);
var inst_23359 = async.call(null,inst_23358);
var state_23368__$1 = state_23368;
if(cljs.core.truth_(inst_23359)){
var statearr_23373_23531 = state_23368__$1;
(statearr_23373_23531[(1)] = (5));

} else {
var statearr_23374_23532 = state_23368__$1;
(statearr_23374_23532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (3))){
var inst_23366 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23368__$1,inst_23366);
} else {
if((state_val_23369 === (2))){
var state_23368__$1 = state_23368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23368__$1,(4),jobs);
} else {
if((state_val_23369 === (1))){
var state_23368__$1 = state_23368;
var statearr_23375_23533 = state_23368__$1;
(statearr_23375_23533[(2)] = null);

(statearr_23375_23533[(1)] = (2));


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
});})(__23524,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
;
return ((function (__23524,switch__9184__auto__,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null];
(statearr_23379[(0)] = state_machine__9185__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var state_machine__9185__auto____1 = (function (state_23368){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__9188__auto__ = e23380;
var statearr_23381_23534 = state_23368;
(statearr_23381_23534[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23535 = state_23368;
state_23368 = G__23535;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23368){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__23524,switch__9184__auto__,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23382 = f__9200__auto__.call(null);
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23527);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__23524,c__9199__auto___23527,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___23536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23524,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__23524,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function (state_23395){
var state_val_23396 = (state_23395[(1)]);
if((state_val_23396 === (7))){
var inst_23391 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23397_23537 = state_23395__$1;
(statearr_23397_23537[(2)] = inst_23391);

(statearr_23397_23537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (6))){
var state_23395__$1 = state_23395;
var statearr_23398_23538 = state_23395__$1;
(statearr_23398_23538[(2)] = null);

(statearr_23398_23538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (5))){
var state_23395__$1 = state_23395;
var statearr_23399_23539 = state_23395__$1;
(statearr_23399_23539[(2)] = null);

(statearr_23399_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (4))){
var inst_23385 = (state_23395[(2)]);
var inst_23386 = process.call(null,inst_23385);
var state_23395__$1 = state_23395;
if(cljs.core.truth_(inst_23386)){
var statearr_23400_23540 = state_23395__$1;
(statearr_23400_23540[(1)] = (5));

} else {
var statearr_23401_23541 = state_23395__$1;
(statearr_23401_23541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (3))){
var inst_23393 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23395__$1,inst_23393);
} else {
if((state_val_23396 === (2))){
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23395__$1,(4),jobs);
} else {
if((state_val_23396 === (1))){
var state_23395__$1 = state_23395;
var statearr_23402_23542 = state_23395__$1;
(statearr_23402_23542[(2)] = null);

(statearr_23402_23542[(1)] = (2));


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
});})(__23524,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
;
return ((function (__23524,switch__9184__auto__,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23406 = [null,null,null,null,null,null,null];
(statearr_23406[(0)] = state_machine__9185__auto__);

(statearr_23406[(1)] = (1));

return statearr_23406;
});
var state_machine__9185__auto____1 = (function (state_23395){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23407){if((e23407 instanceof Object)){
var ex__9188__auto__ = e23407;
var statearr_23408_23543 = state_23395;
(statearr_23408_23543[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23544 = state_23395;
state_23395 = G__23544;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23395){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__23524,switch__9184__auto__,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23409 = f__9200__auto__.call(null);
(statearr_23409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23536);

return statearr_23409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__23524,c__9199__auto___23536,G__23355_23525,n__4509__auto___23523,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23545 = (__23524 + (1));
__23524 = G__23545;
continue;
} else {
}
break;
}

var c__9199__auto___23546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23546,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23546,jobs,results,process,async){
return (function (state_23431){
var state_val_23432 = (state_23431[(1)]);
if((state_val_23432 === (9))){
var inst_23424 = (state_23431[(2)]);
var state_23431__$1 = (function (){var statearr_23433 = state_23431;
(statearr_23433[(7)] = inst_23424);

return statearr_23433;
})();
var statearr_23434_23547 = state_23431__$1;
(statearr_23434_23547[(2)] = null);

(statearr_23434_23547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23432 === (8))){
var inst_23417 = (state_23431[(8)]);
var inst_23422 = (state_23431[(2)]);
var state_23431__$1 = (function (){var statearr_23435 = state_23431;
(statearr_23435[(9)] = inst_23422);

return statearr_23435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23431__$1,(9),results,inst_23417);
} else {
if((state_val_23432 === (7))){
var inst_23427 = (state_23431[(2)]);
var state_23431__$1 = state_23431;
var statearr_23436_23548 = state_23431__$1;
(statearr_23436_23548[(2)] = inst_23427);

(statearr_23436_23548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23432 === (6))){
var inst_23412 = (state_23431[(10)]);
var inst_23417 = (state_23431[(8)]);
var inst_23417__$1 = cljs.core.async.chan.call(null,(1));
var inst_23418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23419 = [inst_23412,inst_23417__$1];
var inst_23420 = (new cljs.core.PersistentVector(null,2,(5),inst_23418,inst_23419,null));
var state_23431__$1 = (function (){var statearr_23437 = state_23431;
(statearr_23437[(8)] = inst_23417__$1);

return statearr_23437;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23431__$1,(8),jobs,inst_23420);
} else {
if((state_val_23432 === (5))){
var inst_23415 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23431__$1 = state_23431;
var statearr_23438_23549 = state_23431__$1;
(statearr_23438_23549[(2)] = inst_23415);

(statearr_23438_23549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23432 === (4))){
var inst_23412 = (state_23431[(10)]);
var inst_23412__$1 = (state_23431[(2)]);
var inst_23413 = (inst_23412__$1 == null);
var state_23431__$1 = (function (){var statearr_23439 = state_23431;
(statearr_23439[(10)] = inst_23412__$1);

return statearr_23439;
})();
if(cljs.core.truth_(inst_23413)){
var statearr_23440_23550 = state_23431__$1;
(statearr_23440_23550[(1)] = (5));

} else {
var statearr_23441_23551 = state_23431__$1;
(statearr_23441_23551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23432 === (3))){
var inst_23429 = (state_23431[(2)]);
var state_23431__$1 = state_23431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23431__$1,inst_23429);
} else {
if((state_val_23432 === (2))){
var state_23431__$1 = state_23431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23431__$1,(4),from);
} else {
if((state_val_23432 === (1))){
var state_23431__$1 = state_23431;
var statearr_23442_23552 = state_23431__$1;
(statearr_23442_23552[(2)] = null);

(statearr_23442_23552[(1)] = (2));


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
});})(c__9199__auto___23546,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___23546,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23446[(0)] = state_machine__9185__auto__);

(statearr_23446[(1)] = (1));

return statearr_23446;
});
var state_machine__9185__auto____1 = (function (state_23431){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23447){if((e23447 instanceof Object)){
var ex__9188__auto__ = e23447;
var statearr_23448_23553 = state_23431;
(statearr_23448_23553[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23431;
state_23431 = G__23554;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23431){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23546,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23449 = f__9200__auto__.call(null);
(statearr_23449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23546);

return statearr_23449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23546,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_23487){
var state_val_23488 = (state_23487[(1)]);
if((state_val_23488 === (7))){
var inst_23483 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
var statearr_23489_23555 = state_23487__$1;
(statearr_23489_23555[(2)] = inst_23483);

(statearr_23489_23555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (20))){
var state_23487__$1 = state_23487;
var statearr_23490_23556 = state_23487__$1;
(statearr_23490_23556[(2)] = null);

(statearr_23490_23556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (1))){
var state_23487__$1 = state_23487;
var statearr_23491_23557 = state_23487__$1;
(statearr_23491_23557[(2)] = null);

(statearr_23491_23557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (4))){
var inst_23452 = (state_23487[(7)]);
var inst_23452__$1 = (state_23487[(2)]);
var inst_23453 = (inst_23452__$1 == null);
var state_23487__$1 = (function (){var statearr_23492 = state_23487;
(statearr_23492[(7)] = inst_23452__$1);

return statearr_23492;
})();
if(cljs.core.truth_(inst_23453)){
var statearr_23493_23558 = state_23487__$1;
(statearr_23493_23558[(1)] = (5));

} else {
var statearr_23494_23559 = state_23487__$1;
(statearr_23494_23559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (15))){
var inst_23465 = (state_23487[(8)]);
var state_23487__$1 = state_23487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23487__$1,(18),to,inst_23465);
} else {
if((state_val_23488 === (21))){
var inst_23478 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
var statearr_23495_23560 = state_23487__$1;
(statearr_23495_23560[(2)] = inst_23478);

(statearr_23495_23560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (13))){
var inst_23480 = (state_23487[(2)]);
var state_23487__$1 = (function (){var statearr_23496 = state_23487;
(statearr_23496[(9)] = inst_23480);

return statearr_23496;
})();
var statearr_23497_23561 = state_23487__$1;
(statearr_23497_23561[(2)] = null);

(statearr_23497_23561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (6))){
var inst_23452 = (state_23487[(7)]);
var state_23487__$1 = state_23487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23487__$1,(11),inst_23452);
} else {
if((state_val_23488 === (17))){
var inst_23473 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
if(cljs.core.truth_(inst_23473)){
var statearr_23498_23562 = state_23487__$1;
(statearr_23498_23562[(1)] = (19));

} else {
var statearr_23499_23563 = state_23487__$1;
(statearr_23499_23563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (3))){
var inst_23485 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23487__$1,inst_23485);
} else {
if((state_val_23488 === (12))){
var inst_23462 = (state_23487[(10)]);
var state_23487__$1 = state_23487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23487__$1,(14),inst_23462);
} else {
if((state_val_23488 === (2))){
var state_23487__$1 = state_23487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23487__$1,(4),results);
} else {
if((state_val_23488 === (19))){
var state_23487__$1 = state_23487;
var statearr_23500_23564 = state_23487__$1;
(statearr_23500_23564[(2)] = null);

(statearr_23500_23564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (11))){
var inst_23462 = (state_23487[(2)]);
var state_23487__$1 = (function (){var statearr_23501 = state_23487;
(statearr_23501[(10)] = inst_23462);

return statearr_23501;
})();
var statearr_23502_23565 = state_23487__$1;
(statearr_23502_23565[(2)] = null);

(statearr_23502_23565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (9))){
var state_23487__$1 = state_23487;
var statearr_23503_23566 = state_23487__$1;
(statearr_23503_23566[(2)] = null);

(statearr_23503_23566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (5))){
var state_23487__$1 = state_23487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23504_23567 = state_23487__$1;
(statearr_23504_23567[(1)] = (8));

} else {
var statearr_23505_23568 = state_23487__$1;
(statearr_23505_23568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (14))){
var inst_23467 = (state_23487[(11)]);
var inst_23465 = (state_23487[(8)]);
var inst_23465__$1 = (state_23487[(2)]);
var inst_23466 = (inst_23465__$1 == null);
var inst_23467__$1 = cljs.core.not.call(null,inst_23466);
var state_23487__$1 = (function (){var statearr_23506 = state_23487;
(statearr_23506[(11)] = inst_23467__$1);

(statearr_23506[(8)] = inst_23465__$1);

return statearr_23506;
})();
if(inst_23467__$1){
var statearr_23507_23569 = state_23487__$1;
(statearr_23507_23569[(1)] = (15));

} else {
var statearr_23508_23570 = state_23487__$1;
(statearr_23508_23570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (16))){
var inst_23467 = (state_23487[(11)]);
var state_23487__$1 = state_23487;
var statearr_23509_23571 = state_23487__$1;
(statearr_23509_23571[(2)] = inst_23467);

(statearr_23509_23571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (10))){
var inst_23459 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
var statearr_23510_23572 = state_23487__$1;
(statearr_23510_23572[(2)] = inst_23459);

(statearr_23510_23572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (18))){
var inst_23470 = (state_23487[(2)]);
var state_23487__$1 = state_23487;
var statearr_23511_23573 = state_23487__$1;
(statearr_23511_23573[(2)] = inst_23470);

(statearr_23511_23573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23488 === (8))){
var inst_23456 = cljs.core.async.close_BANG_.call(null,to);
var state_23487__$1 = state_23487;
var statearr_23512_23574 = state_23487__$1;
(statearr_23512_23574[(2)] = inst_23456);

(statearr_23512_23574[(1)] = (10));


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
var statearr_23516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23516[(0)] = state_machine__9185__auto__);

(statearr_23516[(1)] = (1));

return statearr_23516;
});
var state_machine__9185__auto____1 = (function (state_23487){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23517){if((e23517 instanceof Object)){
var ex__9188__auto__ = e23517;
var statearr_23518_23575 = state_23487;
(statearr_23518_23575[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23576 = state_23487;
state_23487 = G__23576;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23487){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_23519 = f__9200__auto__.call(null);
(statearr_23519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23519;
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
var c__9199__auto___23677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___23677,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___23677,tc,fc){
return (function (state_23652){
var state_val_23653 = (state_23652[(1)]);
if((state_val_23653 === (7))){
var inst_23648 = (state_23652[(2)]);
var state_23652__$1 = state_23652;
var statearr_23654_23678 = state_23652__$1;
(statearr_23654_23678[(2)] = inst_23648);

(statearr_23654_23678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (1))){
var state_23652__$1 = state_23652;
var statearr_23655_23679 = state_23652__$1;
(statearr_23655_23679[(2)] = null);

(statearr_23655_23679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (4))){
var inst_23629 = (state_23652[(7)]);
var inst_23629__$1 = (state_23652[(2)]);
var inst_23630 = (inst_23629__$1 == null);
var state_23652__$1 = (function (){var statearr_23656 = state_23652;
(statearr_23656[(7)] = inst_23629__$1);

return statearr_23656;
})();
if(cljs.core.truth_(inst_23630)){
var statearr_23657_23680 = state_23652__$1;
(statearr_23657_23680[(1)] = (5));

} else {
var statearr_23658_23681 = state_23652__$1;
(statearr_23658_23681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (13))){
var state_23652__$1 = state_23652;
var statearr_23659_23682 = state_23652__$1;
(statearr_23659_23682[(2)] = null);

(statearr_23659_23682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (6))){
var inst_23629 = (state_23652[(7)]);
var inst_23635 = p.call(null,inst_23629);
var state_23652__$1 = state_23652;
if(cljs.core.truth_(inst_23635)){
var statearr_23660_23683 = state_23652__$1;
(statearr_23660_23683[(1)] = (9));

} else {
var statearr_23661_23684 = state_23652__$1;
(statearr_23661_23684[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (3))){
var inst_23650 = (state_23652[(2)]);
var state_23652__$1 = state_23652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23652__$1,inst_23650);
} else {
if((state_val_23653 === (12))){
var state_23652__$1 = state_23652;
var statearr_23662_23685 = state_23652__$1;
(statearr_23662_23685[(2)] = null);

(statearr_23662_23685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (2))){
var state_23652__$1 = state_23652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23652__$1,(4),ch);
} else {
if((state_val_23653 === (11))){
var inst_23629 = (state_23652[(7)]);
var inst_23639 = (state_23652[(2)]);
var state_23652__$1 = state_23652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23652__$1,(8),inst_23639,inst_23629);
} else {
if((state_val_23653 === (9))){
var state_23652__$1 = state_23652;
var statearr_23663_23686 = state_23652__$1;
(statearr_23663_23686[(2)] = tc);

(statearr_23663_23686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (5))){
var inst_23632 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23633 = cljs.core.async.close_BANG_.call(null,fc);
var state_23652__$1 = (function (){var statearr_23664 = state_23652;
(statearr_23664[(8)] = inst_23632);

return statearr_23664;
})();
var statearr_23665_23687 = state_23652__$1;
(statearr_23665_23687[(2)] = inst_23633);

(statearr_23665_23687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (14))){
var inst_23646 = (state_23652[(2)]);
var state_23652__$1 = state_23652;
var statearr_23666_23688 = state_23652__$1;
(statearr_23666_23688[(2)] = inst_23646);

(statearr_23666_23688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (10))){
var state_23652__$1 = state_23652;
var statearr_23667_23689 = state_23652__$1;
(statearr_23667_23689[(2)] = fc);

(statearr_23667_23689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23653 === (8))){
var inst_23641 = (state_23652[(2)]);
var state_23652__$1 = state_23652;
if(cljs.core.truth_(inst_23641)){
var statearr_23668_23690 = state_23652__$1;
(statearr_23668_23690[(1)] = (12));

} else {
var statearr_23669_23691 = state_23652__$1;
(statearr_23669_23691[(1)] = (13));

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
});})(c__9199__auto___23677,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___23677,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_23673 = [null,null,null,null,null,null,null,null,null];
(statearr_23673[(0)] = state_machine__9185__auto__);

(statearr_23673[(1)] = (1));

return statearr_23673;
});
var state_machine__9185__auto____1 = (function (state_23652){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23674){if((e23674 instanceof Object)){
var ex__9188__auto__ = e23674;
var statearr_23675_23692 = state_23652;
(statearr_23675_23692[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23693 = state_23652;
state_23652 = G__23693;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23652){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___23677,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_23676 = f__9200__auto__.call(null);
(statearr_23676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___23677);

return statearr_23676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___23677,tc,fc))
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
return (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (7))){
var inst_23736 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23742_23758 = state_23740__$1;
(statearr_23742_23758[(2)] = inst_23736);

(statearr_23742_23758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (6))){
var inst_23729 = (state_23740[(7)]);
var inst_23726 = (state_23740[(8)]);
var inst_23733 = f.call(null,inst_23726,inst_23729);
var inst_23726__$1 = inst_23733;
var state_23740__$1 = (function (){var statearr_23743 = state_23740;
(statearr_23743[(8)] = inst_23726__$1);

return statearr_23743;
})();
var statearr_23744_23759 = state_23740__$1;
(statearr_23744_23759[(2)] = null);

(statearr_23744_23759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (5))){
var inst_23726 = (state_23740[(8)]);
var state_23740__$1 = state_23740;
var statearr_23745_23760 = state_23740__$1;
(statearr_23745_23760[(2)] = inst_23726);

(statearr_23745_23760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (4))){
var inst_23729 = (state_23740[(7)]);
var inst_23729__$1 = (state_23740[(2)]);
var inst_23730 = (inst_23729__$1 == null);
var state_23740__$1 = (function (){var statearr_23746 = state_23740;
(statearr_23746[(7)] = inst_23729__$1);

return statearr_23746;
})();
if(cljs.core.truth_(inst_23730)){
var statearr_23747_23761 = state_23740__$1;
(statearr_23747_23761[(1)] = (5));

} else {
var statearr_23748_23762 = state_23740__$1;
(statearr_23748_23762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (3))){
var inst_23738 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
if((state_val_23741 === (2))){
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(4),ch);
} else {
if((state_val_23741 === (1))){
var inst_23726 = init;
var state_23740__$1 = (function (){var statearr_23749 = state_23740;
(statearr_23749[(8)] = inst_23726);

return statearr_23749;
})();
var statearr_23750_23763 = state_23740__$1;
(statearr_23750_23763[(2)] = null);

(statearr_23750_23763[(1)] = (2));


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
var statearr_23754 = [null,null,null,null,null,null,null,null,null];
(statearr_23754[(0)] = state_machine__9185__auto__);

(statearr_23754[(1)] = (1));

return statearr_23754;
});
var state_machine__9185__auto____1 = (function (state_23740){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23755){if((e23755 instanceof Object)){
var ex__9188__auto__ = e23755;
var statearr_23756_23764 = state_23740;
(statearr_23756_23764[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23765 = state_23740;
state_23740 = G__23765;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_23757 = f__9200__auto__.call(null);
(statearr_23757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23757;
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
return (function (state_23839){
var state_val_23840 = (state_23839[(1)]);
if((state_val_23840 === (7))){
var inst_23821 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23841_23864 = state_23839__$1;
(statearr_23841_23864[(2)] = inst_23821);

(statearr_23841_23864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (1))){
var inst_23815 = cljs.core.seq.call(null,coll);
var inst_23816 = inst_23815;
var state_23839__$1 = (function (){var statearr_23842 = state_23839;
(statearr_23842[(7)] = inst_23816);

return statearr_23842;
})();
var statearr_23843_23865 = state_23839__$1;
(statearr_23843_23865[(2)] = null);

(statearr_23843_23865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (4))){
var inst_23816 = (state_23839[(7)]);
var inst_23819 = cljs.core.first.call(null,inst_23816);
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23839__$1,(7),ch,inst_23819);
} else {
if((state_val_23840 === (13))){
var inst_23833 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23844_23866 = state_23839__$1;
(statearr_23844_23866[(2)] = inst_23833);

(statearr_23844_23866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (6))){
var inst_23824 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
if(cljs.core.truth_(inst_23824)){
var statearr_23845_23867 = state_23839__$1;
(statearr_23845_23867[(1)] = (8));

} else {
var statearr_23846_23868 = state_23839__$1;
(statearr_23846_23868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (3))){
var inst_23837 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23839__$1,inst_23837);
} else {
if((state_val_23840 === (12))){
var state_23839__$1 = state_23839;
var statearr_23847_23869 = state_23839__$1;
(statearr_23847_23869[(2)] = null);

(statearr_23847_23869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (2))){
var inst_23816 = (state_23839[(7)]);
var state_23839__$1 = state_23839;
if(cljs.core.truth_(inst_23816)){
var statearr_23848_23870 = state_23839__$1;
(statearr_23848_23870[(1)] = (4));

} else {
var statearr_23849_23871 = state_23839__$1;
(statearr_23849_23871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (11))){
var inst_23830 = cljs.core.async.close_BANG_.call(null,ch);
var state_23839__$1 = state_23839;
var statearr_23850_23872 = state_23839__$1;
(statearr_23850_23872[(2)] = inst_23830);

(statearr_23850_23872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (9))){
var state_23839__$1 = state_23839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23851_23873 = state_23839__$1;
(statearr_23851_23873[(1)] = (11));

} else {
var statearr_23852_23874 = state_23839__$1;
(statearr_23852_23874[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (5))){
var inst_23816 = (state_23839[(7)]);
var state_23839__$1 = state_23839;
var statearr_23853_23875 = state_23839__$1;
(statearr_23853_23875[(2)] = inst_23816);

(statearr_23853_23875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (10))){
var inst_23835 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23854_23876 = state_23839__$1;
(statearr_23854_23876[(2)] = inst_23835);

(statearr_23854_23876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (8))){
var inst_23816 = (state_23839[(7)]);
var inst_23826 = cljs.core.next.call(null,inst_23816);
var inst_23816__$1 = inst_23826;
var state_23839__$1 = (function (){var statearr_23855 = state_23839;
(statearr_23855[(7)] = inst_23816__$1);

return statearr_23855;
})();
var statearr_23856_23877 = state_23839__$1;
(statearr_23856_23877[(2)] = null);

(statearr_23856_23877[(1)] = (2));


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
var statearr_23860 = [null,null,null,null,null,null,null,null];
(statearr_23860[(0)] = state_machine__9185__auto__);

(statearr_23860[(1)] = (1));

return statearr_23860;
});
var state_machine__9185__auto____1 = (function (state_23839){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_23839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e23861){if((e23861 instanceof Object)){
var ex__9188__auto__ = e23861;
var statearr_23862_23878 = state_23839;
(statearr_23862_23878[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23879 = state_23839;
state_23839 = G__23879;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_23839){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_23839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_23863 = f__9200__auto__.call(null);
(statearr_23863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_23863;
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

cljs.core.async.Mux = (function (){var obj23881 = {};
return obj23881;
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


cljs.core.async.Mult = (function (){var obj23883 = {};
return obj23883;
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
if(typeof cljs.core.async.t24105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24105 = (function (cs,ch,mult,meta24106){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24106 = meta24106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24105.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24107){
var self__ = this;
var _24107__$1 = this;
return self__.meta24106;
});})(cs))
;

cljs.core.async.t24105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24107,meta24106__$1){
var self__ = this;
var _24107__$1 = this;
return (new cljs.core.async.t24105(self__.cs,self__.ch,self__.mult,meta24106__$1));
});})(cs))
;

cljs.core.async.t24105.cljs$lang$type = true;

cljs.core.async.t24105.cljs$lang$ctorStr = "cljs.core.async/t24105";

cljs.core.async.t24105.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24105");
});})(cs))
;

cljs.core.async.__GT_t24105 = ((function (cs){
return (function __GT_t24105(cs__$1,ch__$1,mult__$1,meta24106){
return (new cljs.core.async.t24105(cs__$1,ch__$1,mult__$1,meta24106));
});})(cs))
;

}

return (new cljs.core.async.t24105(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___24326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24326,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24326,cs,m,dchan,dctr,done){
return (function (state_24238){
var state_val_24239 = (state_24238[(1)]);
if((state_val_24239 === (7))){
var inst_24234 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24240_24327 = state_24238__$1;
(statearr_24240_24327[(2)] = inst_24234);

(statearr_24240_24327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (20))){
var inst_24139 = (state_24238[(7)]);
var inst_24149 = cljs.core.first.call(null,inst_24139);
var inst_24150 = cljs.core.nth.call(null,inst_24149,(0),null);
var inst_24151 = cljs.core.nth.call(null,inst_24149,(1),null);
var state_24238__$1 = (function (){var statearr_24241 = state_24238;
(statearr_24241[(8)] = inst_24150);

return statearr_24241;
})();
if(cljs.core.truth_(inst_24151)){
var statearr_24242_24328 = state_24238__$1;
(statearr_24242_24328[(1)] = (22));

} else {
var statearr_24243_24329 = state_24238__$1;
(statearr_24243_24329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (27))){
var inst_24110 = (state_24238[(9)]);
var inst_24186 = (state_24238[(10)]);
var inst_24179 = (state_24238[(11)]);
var inst_24181 = (state_24238[(12)]);
var inst_24186__$1 = cljs.core._nth.call(null,inst_24179,inst_24181);
var inst_24187 = cljs.core.async.put_BANG_.call(null,inst_24186__$1,inst_24110,done);
var state_24238__$1 = (function (){var statearr_24244 = state_24238;
(statearr_24244[(10)] = inst_24186__$1);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24187)){
var statearr_24245_24330 = state_24238__$1;
(statearr_24245_24330[(1)] = (30));

} else {
var statearr_24246_24331 = state_24238__$1;
(statearr_24246_24331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (1))){
var state_24238__$1 = state_24238;
var statearr_24247_24332 = state_24238__$1;
(statearr_24247_24332[(2)] = null);

(statearr_24247_24332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (24))){
var inst_24139 = (state_24238[(7)]);
var inst_24156 = (state_24238[(2)]);
var inst_24157 = cljs.core.next.call(null,inst_24139);
var inst_24119 = inst_24157;
var inst_24120 = null;
var inst_24121 = (0);
var inst_24122 = (0);
var state_24238__$1 = (function (){var statearr_24248 = state_24238;
(statearr_24248[(13)] = inst_24121);

(statearr_24248[(14)] = inst_24156);

(statearr_24248[(15)] = inst_24120);

(statearr_24248[(16)] = inst_24122);

(statearr_24248[(17)] = inst_24119);

return statearr_24248;
})();
var statearr_24249_24333 = state_24238__$1;
(statearr_24249_24333[(2)] = null);

(statearr_24249_24333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (39))){
var state_24238__$1 = state_24238;
var statearr_24253_24334 = state_24238__$1;
(statearr_24253_24334[(2)] = null);

(statearr_24253_24334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (4))){
var inst_24110 = (state_24238[(9)]);
var inst_24110__$1 = (state_24238[(2)]);
var inst_24111 = (inst_24110__$1 == null);
var state_24238__$1 = (function (){var statearr_24254 = state_24238;
(statearr_24254[(9)] = inst_24110__$1);

return statearr_24254;
})();
if(cljs.core.truth_(inst_24111)){
var statearr_24255_24335 = state_24238__$1;
(statearr_24255_24335[(1)] = (5));

} else {
var statearr_24256_24336 = state_24238__$1;
(statearr_24256_24336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (15))){
var inst_24121 = (state_24238[(13)]);
var inst_24120 = (state_24238[(15)]);
var inst_24122 = (state_24238[(16)]);
var inst_24119 = (state_24238[(17)]);
var inst_24135 = (state_24238[(2)]);
var inst_24136 = (inst_24122 + (1));
var tmp24250 = inst_24121;
var tmp24251 = inst_24120;
var tmp24252 = inst_24119;
var inst_24119__$1 = tmp24252;
var inst_24120__$1 = tmp24251;
var inst_24121__$1 = tmp24250;
var inst_24122__$1 = inst_24136;
var state_24238__$1 = (function (){var statearr_24257 = state_24238;
(statearr_24257[(13)] = inst_24121__$1);

(statearr_24257[(18)] = inst_24135);

(statearr_24257[(15)] = inst_24120__$1);

(statearr_24257[(16)] = inst_24122__$1);

(statearr_24257[(17)] = inst_24119__$1);

return statearr_24257;
})();
var statearr_24258_24337 = state_24238__$1;
(statearr_24258_24337[(2)] = null);

(statearr_24258_24337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (21))){
var inst_24160 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24262_24338 = state_24238__$1;
(statearr_24262_24338[(2)] = inst_24160);

(statearr_24262_24338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (31))){
var inst_24186 = (state_24238[(10)]);
var inst_24190 = done.call(null,null);
var inst_24191 = cljs.core.async.untap_STAR_.call(null,m,inst_24186);
var state_24238__$1 = (function (){var statearr_24263 = state_24238;
(statearr_24263[(19)] = inst_24190);

return statearr_24263;
})();
var statearr_24264_24339 = state_24238__$1;
(statearr_24264_24339[(2)] = inst_24191);

(statearr_24264_24339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (32))){
var inst_24180 = (state_24238[(20)]);
var inst_24179 = (state_24238[(11)]);
var inst_24178 = (state_24238[(21)]);
var inst_24181 = (state_24238[(12)]);
var inst_24193 = (state_24238[(2)]);
var inst_24194 = (inst_24181 + (1));
var tmp24259 = inst_24180;
var tmp24260 = inst_24179;
var tmp24261 = inst_24178;
var inst_24178__$1 = tmp24261;
var inst_24179__$1 = tmp24260;
var inst_24180__$1 = tmp24259;
var inst_24181__$1 = inst_24194;
var state_24238__$1 = (function (){var statearr_24265 = state_24238;
(statearr_24265[(20)] = inst_24180__$1);

(statearr_24265[(11)] = inst_24179__$1);

(statearr_24265[(21)] = inst_24178__$1);

(statearr_24265[(12)] = inst_24181__$1);

(statearr_24265[(22)] = inst_24193);

return statearr_24265;
})();
var statearr_24266_24340 = state_24238__$1;
(statearr_24266_24340[(2)] = null);

(statearr_24266_24340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (40))){
var inst_24206 = (state_24238[(23)]);
var inst_24210 = done.call(null,null);
var inst_24211 = cljs.core.async.untap_STAR_.call(null,m,inst_24206);
var state_24238__$1 = (function (){var statearr_24267 = state_24238;
(statearr_24267[(24)] = inst_24210);

return statearr_24267;
})();
var statearr_24268_24341 = state_24238__$1;
(statearr_24268_24341[(2)] = inst_24211);

(statearr_24268_24341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (33))){
var inst_24197 = (state_24238[(25)]);
var inst_24199 = cljs.core.chunked_seq_QMARK_.call(null,inst_24197);
var state_24238__$1 = state_24238;
if(inst_24199){
var statearr_24269_24342 = state_24238__$1;
(statearr_24269_24342[(1)] = (36));

} else {
var statearr_24270_24343 = state_24238__$1;
(statearr_24270_24343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (13))){
var inst_24129 = (state_24238[(26)]);
var inst_24132 = cljs.core.async.close_BANG_.call(null,inst_24129);
var state_24238__$1 = state_24238;
var statearr_24271_24344 = state_24238__$1;
(statearr_24271_24344[(2)] = inst_24132);

(statearr_24271_24344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (22))){
var inst_24150 = (state_24238[(8)]);
var inst_24153 = cljs.core.async.close_BANG_.call(null,inst_24150);
var state_24238__$1 = state_24238;
var statearr_24272_24345 = state_24238__$1;
(statearr_24272_24345[(2)] = inst_24153);

(statearr_24272_24345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (36))){
var inst_24197 = (state_24238[(25)]);
var inst_24201 = cljs.core.chunk_first.call(null,inst_24197);
var inst_24202 = cljs.core.chunk_rest.call(null,inst_24197);
var inst_24203 = cljs.core.count.call(null,inst_24201);
var inst_24178 = inst_24202;
var inst_24179 = inst_24201;
var inst_24180 = inst_24203;
var inst_24181 = (0);
var state_24238__$1 = (function (){var statearr_24273 = state_24238;
(statearr_24273[(20)] = inst_24180);

(statearr_24273[(11)] = inst_24179);

(statearr_24273[(21)] = inst_24178);

(statearr_24273[(12)] = inst_24181);

return statearr_24273;
})();
var statearr_24274_24346 = state_24238__$1;
(statearr_24274_24346[(2)] = null);

(statearr_24274_24346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (41))){
var inst_24197 = (state_24238[(25)]);
var inst_24213 = (state_24238[(2)]);
var inst_24214 = cljs.core.next.call(null,inst_24197);
var inst_24178 = inst_24214;
var inst_24179 = null;
var inst_24180 = (0);
var inst_24181 = (0);
var state_24238__$1 = (function (){var statearr_24275 = state_24238;
(statearr_24275[(20)] = inst_24180);

(statearr_24275[(11)] = inst_24179);

(statearr_24275[(21)] = inst_24178);

(statearr_24275[(27)] = inst_24213);

(statearr_24275[(12)] = inst_24181);

return statearr_24275;
})();
var statearr_24276_24347 = state_24238__$1;
(statearr_24276_24347[(2)] = null);

(statearr_24276_24347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (43))){
var state_24238__$1 = state_24238;
var statearr_24277_24348 = state_24238__$1;
(statearr_24277_24348[(2)] = null);

(statearr_24277_24348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (29))){
var inst_24222 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24278_24349 = state_24238__$1;
(statearr_24278_24349[(2)] = inst_24222);

(statearr_24278_24349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (44))){
var inst_24231 = (state_24238[(2)]);
var state_24238__$1 = (function (){var statearr_24279 = state_24238;
(statearr_24279[(28)] = inst_24231);

return statearr_24279;
})();
var statearr_24280_24350 = state_24238__$1;
(statearr_24280_24350[(2)] = null);

(statearr_24280_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (6))){
var inst_24170 = (state_24238[(29)]);
var inst_24169 = cljs.core.deref.call(null,cs);
var inst_24170__$1 = cljs.core.keys.call(null,inst_24169);
var inst_24171 = cljs.core.count.call(null,inst_24170__$1);
var inst_24172 = cljs.core.reset_BANG_.call(null,dctr,inst_24171);
var inst_24177 = cljs.core.seq.call(null,inst_24170__$1);
var inst_24178 = inst_24177;
var inst_24179 = null;
var inst_24180 = (0);
var inst_24181 = (0);
var state_24238__$1 = (function (){var statearr_24281 = state_24238;
(statearr_24281[(20)] = inst_24180);

(statearr_24281[(11)] = inst_24179);

(statearr_24281[(21)] = inst_24178);

(statearr_24281[(29)] = inst_24170__$1);

(statearr_24281[(30)] = inst_24172);

(statearr_24281[(12)] = inst_24181);

return statearr_24281;
})();
var statearr_24282_24351 = state_24238__$1;
(statearr_24282_24351[(2)] = null);

(statearr_24282_24351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (28))){
var inst_24178 = (state_24238[(21)]);
var inst_24197 = (state_24238[(25)]);
var inst_24197__$1 = cljs.core.seq.call(null,inst_24178);
var state_24238__$1 = (function (){var statearr_24283 = state_24238;
(statearr_24283[(25)] = inst_24197__$1);

return statearr_24283;
})();
if(inst_24197__$1){
var statearr_24284_24352 = state_24238__$1;
(statearr_24284_24352[(1)] = (33));

} else {
var statearr_24285_24353 = state_24238__$1;
(statearr_24285_24353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (25))){
var inst_24180 = (state_24238[(20)]);
var inst_24181 = (state_24238[(12)]);
var inst_24183 = (inst_24181 < inst_24180);
var inst_24184 = inst_24183;
var state_24238__$1 = state_24238;
if(cljs.core.truth_(inst_24184)){
var statearr_24286_24354 = state_24238__$1;
(statearr_24286_24354[(1)] = (27));

} else {
var statearr_24287_24355 = state_24238__$1;
(statearr_24287_24355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (34))){
var state_24238__$1 = state_24238;
var statearr_24288_24356 = state_24238__$1;
(statearr_24288_24356[(2)] = null);

(statearr_24288_24356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (17))){
var state_24238__$1 = state_24238;
var statearr_24289_24357 = state_24238__$1;
(statearr_24289_24357[(2)] = null);

(statearr_24289_24357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (3))){
var inst_24236 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24238__$1,inst_24236);
} else {
if((state_val_24239 === (12))){
var inst_24165 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24290_24358 = state_24238__$1;
(statearr_24290_24358[(2)] = inst_24165);

(statearr_24290_24358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (2))){
var state_24238__$1 = state_24238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24238__$1,(4),ch);
} else {
if((state_val_24239 === (23))){
var state_24238__$1 = state_24238;
var statearr_24291_24359 = state_24238__$1;
(statearr_24291_24359[(2)] = null);

(statearr_24291_24359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (35))){
var inst_24220 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24292_24360 = state_24238__$1;
(statearr_24292_24360[(2)] = inst_24220);

(statearr_24292_24360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (19))){
var inst_24139 = (state_24238[(7)]);
var inst_24143 = cljs.core.chunk_first.call(null,inst_24139);
var inst_24144 = cljs.core.chunk_rest.call(null,inst_24139);
var inst_24145 = cljs.core.count.call(null,inst_24143);
var inst_24119 = inst_24144;
var inst_24120 = inst_24143;
var inst_24121 = inst_24145;
var inst_24122 = (0);
var state_24238__$1 = (function (){var statearr_24293 = state_24238;
(statearr_24293[(13)] = inst_24121);

(statearr_24293[(15)] = inst_24120);

(statearr_24293[(16)] = inst_24122);

(statearr_24293[(17)] = inst_24119);

return statearr_24293;
})();
var statearr_24294_24361 = state_24238__$1;
(statearr_24294_24361[(2)] = null);

(statearr_24294_24361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (11))){
var inst_24139 = (state_24238[(7)]);
var inst_24119 = (state_24238[(17)]);
var inst_24139__$1 = cljs.core.seq.call(null,inst_24119);
var state_24238__$1 = (function (){var statearr_24295 = state_24238;
(statearr_24295[(7)] = inst_24139__$1);

return statearr_24295;
})();
if(inst_24139__$1){
var statearr_24296_24362 = state_24238__$1;
(statearr_24296_24362[(1)] = (16));

} else {
var statearr_24297_24363 = state_24238__$1;
(statearr_24297_24363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (9))){
var inst_24167 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24298_24364 = state_24238__$1;
(statearr_24298_24364[(2)] = inst_24167);

(statearr_24298_24364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (5))){
var inst_24117 = cljs.core.deref.call(null,cs);
var inst_24118 = cljs.core.seq.call(null,inst_24117);
var inst_24119 = inst_24118;
var inst_24120 = null;
var inst_24121 = (0);
var inst_24122 = (0);
var state_24238__$1 = (function (){var statearr_24299 = state_24238;
(statearr_24299[(13)] = inst_24121);

(statearr_24299[(15)] = inst_24120);

(statearr_24299[(16)] = inst_24122);

(statearr_24299[(17)] = inst_24119);

return statearr_24299;
})();
var statearr_24300_24365 = state_24238__$1;
(statearr_24300_24365[(2)] = null);

(statearr_24300_24365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (14))){
var state_24238__$1 = state_24238;
var statearr_24301_24366 = state_24238__$1;
(statearr_24301_24366[(2)] = null);

(statearr_24301_24366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (45))){
var inst_24228 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24302_24367 = state_24238__$1;
(statearr_24302_24367[(2)] = inst_24228);

(statearr_24302_24367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (26))){
var inst_24170 = (state_24238[(29)]);
var inst_24224 = (state_24238[(2)]);
var inst_24225 = cljs.core.seq.call(null,inst_24170);
var state_24238__$1 = (function (){var statearr_24303 = state_24238;
(statearr_24303[(31)] = inst_24224);

return statearr_24303;
})();
if(inst_24225){
var statearr_24304_24368 = state_24238__$1;
(statearr_24304_24368[(1)] = (42));

} else {
var statearr_24305_24369 = state_24238__$1;
(statearr_24305_24369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (16))){
var inst_24139 = (state_24238[(7)]);
var inst_24141 = cljs.core.chunked_seq_QMARK_.call(null,inst_24139);
var state_24238__$1 = state_24238;
if(inst_24141){
var statearr_24306_24370 = state_24238__$1;
(statearr_24306_24370[(1)] = (19));

} else {
var statearr_24307_24371 = state_24238__$1;
(statearr_24307_24371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (38))){
var inst_24217 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24308_24372 = state_24238__$1;
(statearr_24308_24372[(2)] = inst_24217);

(statearr_24308_24372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (30))){
var state_24238__$1 = state_24238;
var statearr_24309_24373 = state_24238__$1;
(statearr_24309_24373[(2)] = null);

(statearr_24309_24373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (10))){
var inst_24120 = (state_24238[(15)]);
var inst_24122 = (state_24238[(16)]);
var inst_24128 = cljs.core._nth.call(null,inst_24120,inst_24122);
var inst_24129 = cljs.core.nth.call(null,inst_24128,(0),null);
var inst_24130 = cljs.core.nth.call(null,inst_24128,(1),null);
var state_24238__$1 = (function (){var statearr_24310 = state_24238;
(statearr_24310[(26)] = inst_24129);

return statearr_24310;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24311_24374 = state_24238__$1;
(statearr_24311_24374[(1)] = (13));

} else {
var statearr_24312_24375 = state_24238__$1;
(statearr_24312_24375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (18))){
var inst_24163 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24313_24376 = state_24238__$1;
(statearr_24313_24376[(2)] = inst_24163);

(statearr_24313_24376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (42))){
var state_24238__$1 = state_24238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24238__$1,(45),dchan);
} else {
if((state_val_24239 === (37))){
var inst_24110 = (state_24238[(9)]);
var inst_24206 = (state_24238[(23)]);
var inst_24197 = (state_24238[(25)]);
var inst_24206__$1 = cljs.core.first.call(null,inst_24197);
var inst_24207 = cljs.core.async.put_BANG_.call(null,inst_24206__$1,inst_24110,done);
var state_24238__$1 = (function (){var statearr_24314 = state_24238;
(statearr_24314[(23)] = inst_24206__$1);

return statearr_24314;
})();
if(cljs.core.truth_(inst_24207)){
var statearr_24315_24377 = state_24238__$1;
(statearr_24315_24377[(1)] = (39));

} else {
var statearr_24316_24378 = state_24238__$1;
(statearr_24316_24378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (8))){
var inst_24121 = (state_24238[(13)]);
var inst_24122 = (state_24238[(16)]);
var inst_24124 = (inst_24122 < inst_24121);
var inst_24125 = inst_24124;
var state_24238__$1 = state_24238;
if(cljs.core.truth_(inst_24125)){
var statearr_24317_24379 = state_24238__$1;
(statearr_24317_24379[(1)] = (10));

} else {
var statearr_24318_24380 = state_24238__$1;
(statearr_24318_24380[(1)] = (11));

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
});})(c__9199__auto___24326,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___24326,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24322[(0)] = state_machine__9185__auto__);

(statearr_24322[(1)] = (1));

return statearr_24322;
});
var state_machine__9185__auto____1 = (function (state_24238){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24323){if((e24323 instanceof Object)){
var ex__9188__auto__ = e24323;
var statearr_24324_24381 = state_24238;
(statearr_24324_24381[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24382 = state_24238;
state_24238 = G__24382;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24238){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24326,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_24325 = f__9200__auto__.call(null);
(statearr_24325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24326);

return statearr_24325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24326,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24384 = {};
return obj24384;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24385){
var map__24390 = p__24385;
var map__24390__$1 = ((cljs.core.seq_QMARK_.call(null,map__24390))?cljs.core.apply.call(null,cljs.core.hash_map,map__24390):map__24390);
var opts = map__24390__$1;
var statearr_24391_24394 = state;
(statearr_24391_24394[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24390,map__24390__$1,opts){
return (function (val){
var statearr_24392_24395 = state;
(statearr_24392_24395[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24390,map__24390__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24393_24396 = state;
(statearr_24393_24396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24385 = null;
if (arguments.length > 3) {
  p__24385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24385);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24397){
var state = cljs.core.first(arglist__24397);
arglist__24397 = cljs.core.next(arglist__24397);
var cont_block = cljs.core.first(arglist__24397);
arglist__24397 = cljs.core.next(arglist__24397);
var ports = cljs.core.first(arglist__24397);
var p__24385 = cljs.core.rest(arglist__24397);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24385);
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
if(typeof cljs.core.async.t24517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24517 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24518){
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
this.meta24518 = meta24518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24517.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24517.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24517.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24519){
var self__ = this;
var _24519__$1 = this;
return self__.meta24518;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24519,meta24518__$1){
var self__ = this;
var _24519__$1 = this;
return (new cljs.core.async.t24517(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24518__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24517.cljs$lang$type = true;

cljs.core.async.t24517.cljs$lang$ctorStr = "cljs.core.async/t24517";

cljs.core.async.t24517.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24517");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24517 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24517(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24518){
return (new cljs.core.async.t24517(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24518));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24517(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___24636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24589){
var state_val_24590 = (state_24589[(1)]);
if((state_val_24590 === (7))){
var inst_24533 = (state_24589[(7)]);
var inst_24538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24533);
var state_24589__$1 = state_24589;
var statearr_24591_24637 = state_24589__$1;
(statearr_24591_24637[(2)] = inst_24538);

(statearr_24591_24637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (20))){
var inst_24548 = (state_24589[(8)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24589__$1,(23),out,inst_24548);
} else {
if((state_val_24590 === (1))){
var inst_24523 = (state_24589[(9)]);
var inst_24523__$1 = calc_state.call(null);
var inst_24524 = cljs.core.seq_QMARK_.call(null,inst_24523__$1);
var state_24589__$1 = (function (){var statearr_24592 = state_24589;
(statearr_24592[(9)] = inst_24523__$1);

return statearr_24592;
})();
if(inst_24524){
var statearr_24593_24638 = state_24589__$1;
(statearr_24593_24638[(1)] = (2));

} else {
var statearr_24594_24639 = state_24589__$1;
(statearr_24594_24639[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (24))){
var inst_24541 = (state_24589[(10)]);
var inst_24533 = inst_24541;
var state_24589__$1 = (function (){var statearr_24595 = state_24589;
(statearr_24595[(7)] = inst_24533);

return statearr_24595;
})();
var statearr_24596_24640 = state_24589__$1;
(statearr_24596_24640[(2)] = null);

(statearr_24596_24640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (4))){
var inst_24523 = (state_24589[(9)]);
var inst_24529 = (state_24589[(2)]);
var inst_24530 = cljs.core.get.call(null,inst_24529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24531 = cljs.core.get.call(null,inst_24529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24532 = cljs.core.get.call(null,inst_24529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24533 = inst_24523;
var state_24589__$1 = (function (){var statearr_24597 = state_24589;
(statearr_24597[(11)] = inst_24531);

(statearr_24597[(12)] = inst_24530);

(statearr_24597[(13)] = inst_24532);

(statearr_24597[(7)] = inst_24533);

return statearr_24597;
})();
var statearr_24598_24641 = state_24589__$1;
(statearr_24598_24641[(2)] = null);

(statearr_24598_24641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (15))){
var state_24589__$1 = state_24589;
var statearr_24599_24642 = state_24589__$1;
(statearr_24599_24642[(2)] = null);

(statearr_24599_24642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (21))){
var inst_24541 = (state_24589[(10)]);
var inst_24533 = inst_24541;
var state_24589__$1 = (function (){var statearr_24600 = state_24589;
(statearr_24600[(7)] = inst_24533);

return statearr_24600;
})();
var statearr_24601_24643 = state_24589__$1;
(statearr_24601_24643[(2)] = null);

(statearr_24601_24643[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (13))){
var inst_24585 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24602_24644 = state_24589__$1;
(statearr_24602_24644[(2)] = inst_24585);

(statearr_24602_24644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (22))){
var inst_24583 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24603_24645 = state_24589__$1;
(statearr_24603_24645[(2)] = inst_24583);

(statearr_24603_24645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (6))){
var inst_24587 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24589__$1,inst_24587);
} else {
if((state_val_24590 === (25))){
var state_24589__$1 = state_24589;
var statearr_24604_24646 = state_24589__$1;
(statearr_24604_24646[(2)] = null);

(statearr_24604_24646[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (17))){
var inst_24563 = (state_24589[(14)]);
var state_24589__$1 = state_24589;
var statearr_24605_24647 = state_24589__$1;
(statearr_24605_24647[(2)] = inst_24563);

(statearr_24605_24647[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (3))){
var inst_24523 = (state_24589[(9)]);
var state_24589__$1 = state_24589;
var statearr_24606_24648 = state_24589__$1;
(statearr_24606_24648[(2)] = inst_24523);

(statearr_24606_24648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (12))){
var inst_24549 = (state_24589[(15)]);
var inst_24544 = (state_24589[(16)]);
var inst_24563 = (state_24589[(14)]);
var inst_24563__$1 = inst_24544.call(null,inst_24549);
var state_24589__$1 = (function (){var statearr_24607 = state_24589;
(statearr_24607[(14)] = inst_24563__$1);

return statearr_24607;
})();
if(cljs.core.truth_(inst_24563__$1)){
var statearr_24608_24649 = state_24589__$1;
(statearr_24608_24649[(1)] = (17));

} else {
var statearr_24609_24650 = state_24589__$1;
(statearr_24609_24650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (2))){
var inst_24523 = (state_24589[(9)]);
var inst_24526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24523);
var state_24589__$1 = state_24589;
var statearr_24610_24651 = state_24589__$1;
(statearr_24610_24651[(2)] = inst_24526);

(statearr_24610_24651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (23))){
var inst_24574 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24574)){
var statearr_24611_24652 = state_24589__$1;
(statearr_24611_24652[(1)] = (24));

} else {
var statearr_24612_24653 = state_24589__$1;
(statearr_24612_24653[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (19))){
var inst_24571 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24571)){
var statearr_24613_24654 = state_24589__$1;
(statearr_24613_24654[(1)] = (20));

} else {
var statearr_24614_24655 = state_24589__$1;
(statearr_24614_24655[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (11))){
var inst_24548 = (state_24589[(8)]);
var inst_24554 = (inst_24548 == null);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24554)){
var statearr_24615_24656 = state_24589__$1;
(statearr_24615_24656[(1)] = (14));

} else {
var statearr_24616_24657 = state_24589__$1;
(statearr_24616_24657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (9))){
var inst_24541 = (state_24589[(10)]);
var inst_24541__$1 = (state_24589[(2)]);
var inst_24542 = cljs.core.get.call(null,inst_24541__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24543 = cljs.core.get.call(null,inst_24541__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24544 = cljs.core.get.call(null,inst_24541__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24589__$1 = (function (){var statearr_24617 = state_24589;
(statearr_24617[(17)] = inst_24543);

(statearr_24617[(10)] = inst_24541__$1);

(statearr_24617[(16)] = inst_24544);

return statearr_24617;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24589__$1,(10),inst_24542);
} else {
if((state_val_24590 === (5))){
var inst_24533 = (state_24589[(7)]);
var inst_24536 = cljs.core.seq_QMARK_.call(null,inst_24533);
var state_24589__$1 = state_24589;
if(inst_24536){
var statearr_24618_24658 = state_24589__$1;
(statearr_24618_24658[(1)] = (7));

} else {
var statearr_24619_24659 = state_24589__$1;
(statearr_24619_24659[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (14))){
var inst_24549 = (state_24589[(15)]);
var inst_24556 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24549);
var state_24589__$1 = state_24589;
var statearr_24620_24660 = state_24589__$1;
(statearr_24620_24660[(2)] = inst_24556);

(statearr_24620_24660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (26))){
var inst_24579 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24621_24661 = state_24589__$1;
(statearr_24621_24661[(2)] = inst_24579);

(statearr_24621_24661[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (16))){
var inst_24559 = (state_24589[(2)]);
var inst_24560 = calc_state.call(null);
var inst_24533 = inst_24560;
var state_24589__$1 = (function (){var statearr_24622 = state_24589;
(statearr_24622[(18)] = inst_24559);

(statearr_24622[(7)] = inst_24533);

return statearr_24622;
})();
var statearr_24623_24662 = state_24589__$1;
(statearr_24623_24662[(2)] = null);

(statearr_24623_24662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (10))){
var inst_24549 = (state_24589[(15)]);
var inst_24548 = (state_24589[(8)]);
var inst_24547 = (state_24589[(2)]);
var inst_24548__$1 = cljs.core.nth.call(null,inst_24547,(0),null);
var inst_24549__$1 = cljs.core.nth.call(null,inst_24547,(1),null);
var inst_24550 = (inst_24548__$1 == null);
var inst_24551 = cljs.core._EQ_.call(null,inst_24549__$1,change);
var inst_24552 = (inst_24550) || (inst_24551);
var state_24589__$1 = (function (){var statearr_24624 = state_24589;
(statearr_24624[(15)] = inst_24549__$1);

(statearr_24624[(8)] = inst_24548__$1);

return statearr_24624;
})();
if(cljs.core.truth_(inst_24552)){
var statearr_24625_24663 = state_24589__$1;
(statearr_24625_24663[(1)] = (11));

} else {
var statearr_24626_24664 = state_24589__$1;
(statearr_24626_24664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (18))){
var inst_24549 = (state_24589[(15)]);
var inst_24543 = (state_24589[(17)]);
var inst_24544 = (state_24589[(16)]);
var inst_24566 = cljs.core.empty_QMARK_.call(null,inst_24544);
var inst_24567 = inst_24543.call(null,inst_24549);
var inst_24568 = cljs.core.not.call(null,inst_24567);
var inst_24569 = (inst_24566) && (inst_24568);
var state_24589__$1 = state_24589;
var statearr_24627_24665 = state_24589__$1;
(statearr_24627_24665[(2)] = inst_24569);

(statearr_24627_24665[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (8))){
var inst_24533 = (state_24589[(7)]);
var state_24589__$1 = state_24589;
var statearr_24628_24666 = state_24589__$1;
(statearr_24628_24666[(2)] = inst_24533);

(statearr_24628_24666[(1)] = (9));


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
});})(c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24632[(0)] = state_machine__9185__auto__);

(statearr_24632[(1)] = (1));

return statearr_24632;
});
var state_machine__9185__auto____1 = (function (state_24589){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24633){if((e24633 instanceof Object)){
var ex__9188__auto__ = e24633;
var statearr_24634_24667 = state_24589;
(statearr_24634_24667[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24668 = state_24589;
state_24589 = G__24668;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24589){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_24635 = f__9200__auto__.call(null);
(statearr_24635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24636);

return statearr_24635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24670 = {};
return obj24670;
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
return (function (p1__24671_SHARP_){
if(cljs.core.truth_(p1__24671_SHARP_.call(null,topic))){
return p1__24671_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24671_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24794 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24794 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24795){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24795 = meta24795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24794.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24794.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24796){
var self__ = this;
var _24796__$1 = this;
return self__.meta24795;
});})(mults,ensure_mult))
;

cljs.core.async.t24794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24796,meta24795__$1){
var self__ = this;
var _24796__$1 = this;
return (new cljs.core.async.t24794(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24795__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24794.cljs$lang$type = true;

cljs.core.async.t24794.cljs$lang$ctorStr = "cljs.core.async/t24794";

cljs.core.async.t24794.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24794");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24794 = ((function (mults,ensure_mult){
return (function __GT_t24794(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24795){
return (new cljs.core.async.t24794(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24795));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24794(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___24916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___24916,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___24916,mults,ensure_mult,p){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (7))){
var inst_24864 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24870_24917 = state_24868__$1;
(statearr_24870_24917[(2)] = inst_24864);

(statearr_24870_24917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (20))){
var state_24868__$1 = state_24868;
var statearr_24871_24918 = state_24868__$1;
(statearr_24871_24918[(2)] = null);

(statearr_24871_24918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (1))){
var state_24868__$1 = state_24868;
var statearr_24872_24919 = state_24868__$1;
(statearr_24872_24919[(2)] = null);

(statearr_24872_24919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (24))){
var inst_24847 = (state_24868[(7)]);
var inst_24856 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24847);
var state_24868__$1 = state_24868;
var statearr_24873_24920 = state_24868__$1;
(statearr_24873_24920[(2)] = inst_24856);

(statearr_24873_24920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (4))){
var inst_24799 = (state_24868[(8)]);
var inst_24799__$1 = (state_24868[(2)]);
var inst_24800 = (inst_24799__$1 == null);
var state_24868__$1 = (function (){var statearr_24874 = state_24868;
(statearr_24874[(8)] = inst_24799__$1);

return statearr_24874;
})();
if(cljs.core.truth_(inst_24800)){
var statearr_24875_24921 = state_24868__$1;
(statearr_24875_24921[(1)] = (5));

} else {
var statearr_24876_24922 = state_24868__$1;
(statearr_24876_24922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (15))){
var inst_24841 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24877_24923 = state_24868__$1;
(statearr_24877_24923[(2)] = inst_24841);

(statearr_24877_24923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (21))){
var inst_24861 = (state_24868[(2)]);
var state_24868__$1 = (function (){var statearr_24878 = state_24868;
(statearr_24878[(9)] = inst_24861);

return statearr_24878;
})();
var statearr_24879_24924 = state_24868__$1;
(statearr_24879_24924[(2)] = null);

(statearr_24879_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (13))){
var inst_24823 = (state_24868[(10)]);
var inst_24825 = cljs.core.chunked_seq_QMARK_.call(null,inst_24823);
var state_24868__$1 = state_24868;
if(inst_24825){
var statearr_24880_24925 = state_24868__$1;
(statearr_24880_24925[(1)] = (16));

} else {
var statearr_24881_24926 = state_24868__$1;
(statearr_24881_24926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (22))){
var inst_24853 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24853)){
var statearr_24882_24927 = state_24868__$1;
(statearr_24882_24927[(1)] = (23));

} else {
var statearr_24883_24928 = state_24868__$1;
(statearr_24883_24928[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (6))){
var inst_24847 = (state_24868[(7)]);
var inst_24799 = (state_24868[(8)]);
var inst_24849 = (state_24868[(11)]);
var inst_24847__$1 = topic_fn.call(null,inst_24799);
var inst_24848 = cljs.core.deref.call(null,mults);
var inst_24849__$1 = cljs.core.get.call(null,inst_24848,inst_24847__$1);
var state_24868__$1 = (function (){var statearr_24884 = state_24868;
(statearr_24884[(7)] = inst_24847__$1);

(statearr_24884[(11)] = inst_24849__$1);

return statearr_24884;
})();
if(cljs.core.truth_(inst_24849__$1)){
var statearr_24885_24929 = state_24868__$1;
(statearr_24885_24929[(1)] = (19));

} else {
var statearr_24886_24930 = state_24868__$1;
(statearr_24886_24930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (25))){
var inst_24858 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24887_24931 = state_24868__$1;
(statearr_24887_24931[(2)] = inst_24858);

(statearr_24887_24931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (17))){
var inst_24823 = (state_24868[(10)]);
var inst_24832 = cljs.core.first.call(null,inst_24823);
var inst_24833 = cljs.core.async.muxch_STAR_.call(null,inst_24832);
var inst_24834 = cljs.core.async.close_BANG_.call(null,inst_24833);
var inst_24835 = cljs.core.next.call(null,inst_24823);
var inst_24809 = inst_24835;
var inst_24810 = null;
var inst_24811 = (0);
var inst_24812 = (0);
var state_24868__$1 = (function (){var statearr_24888 = state_24868;
(statearr_24888[(12)] = inst_24812);

(statearr_24888[(13)] = inst_24810);

(statearr_24888[(14)] = inst_24809);

(statearr_24888[(15)] = inst_24811);

(statearr_24888[(16)] = inst_24834);

return statearr_24888;
})();
var statearr_24889_24932 = state_24868__$1;
(statearr_24889_24932[(2)] = null);

(statearr_24889_24932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
if((state_val_24869 === (12))){
var inst_24843 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24890_24933 = state_24868__$1;
(statearr_24890_24933[(2)] = inst_24843);

(statearr_24890_24933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (2))){
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(4),ch);
} else {
if((state_val_24869 === (23))){
var state_24868__$1 = state_24868;
var statearr_24891_24934 = state_24868__$1;
(statearr_24891_24934[(2)] = null);

(statearr_24891_24934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (19))){
var inst_24799 = (state_24868[(8)]);
var inst_24849 = (state_24868[(11)]);
var inst_24851 = cljs.core.async.muxch_STAR_.call(null,inst_24849);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24868__$1,(22),inst_24851,inst_24799);
} else {
if((state_val_24869 === (11))){
var inst_24809 = (state_24868[(14)]);
var inst_24823 = (state_24868[(10)]);
var inst_24823__$1 = cljs.core.seq.call(null,inst_24809);
var state_24868__$1 = (function (){var statearr_24892 = state_24868;
(statearr_24892[(10)] = inst_24823__$1);

return statearr_24892;
})();
if(inst_24823__$1){
var statearr_24893_24935 = state_24868__$1;
(statearr_24893_24935[(1)] = (13));

} else {
var statearr_24894_24936 = state_24868__$1;
(statearr_24894_24936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (9))){
var inst_24845 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24895_24937 = state_24868__$1;
(statearr_24895_24937[(2)] = inst_24845);

(statearr_24895_24937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (5))){
var inst_24806 = cljs.core.deref.call(null,mults);
var inst_24807 = cljs.core.vals.call(null,inst_24806);
var inst_24808 = cljs.core.seq.call(null,inst_24807);
var inst_24809 = inst_24808;
var inst_24810 = null;
var inst_24811 = (0);
var inst_24812 = (0);
var state_24868__$1 = (function (){var statearr_24896 = state_24868;
(statearr_24896[(12)] = inst_24812);

(statearr_24896[(13)] = inst_24810);

(statearr_24896[(14)] = inst_24809);

(statearr_24896[(15)] = inst_24811);

return statearr_24896;
})();
var statearr_24897_24938 = state_24868__$1;
(statearr_24897_24938[(2)] = null);

(statearr_24897_24938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (14))){
var state_24868__$1 = state_24868;
var statearr_24901_24939 = state_24868__$1;
(statearr_24901_24939[(2)] = null);

(statearr_24901_24939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (16))){
var inst_24823 = (state_24868[(10)]);
var inst_24827 = cljs.core.chunk_first.call(null,inst_24823);
var inst_24828 = cljs.core.chunk_rest.call(null,inst_24823);
var inst_24829 = cljs.core.count.call(null,inst_24827);
var inst_24809 = inst_24828;
var inst_24810 = inst_24827;
var inst_24811 = inst_24829;
var inst_24812 = (0);
var state_24868__$1 = (function (){var statearr_24902 = state_24868;
(statearr_24902[(12)] = inst_24812);

(statearr_24902[(13)] = inst_24810);

(statearr_24902[(14)] = inst_24809);

(statearr_24902[(15)] = inst_24811);

return statearr_24902;
})();
var statearr_24903_24940 = state_24868__$1;
(statearr_24903_24940[(2)] = null);

(statearr_24903_24940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (10))){
var inst_24812 = (state_24868[(12)]);
var inst_24810 = (state_24868[(13)]);
var inst_24809 = (state_24868[(14)]);
var inst_24811 = (state_24868[(15)]);
var inst_24817 = cljs.core._nth.call(null,inst_24810,inst_24812);
var inst_24818 = cljs.core.async.muxch_STAR_.call(null,inst_24817);
var inst_24819 = cljs.core.async.close_BANG_.call(null,inst_24818);
var inst_24820 = (inst_24812 + (1));
var tmp24898 = inst_24810;
var tmp24899 = inst_24809;
var tmp24900 = inst_24811;
var inst_24809__$1 = tmp24899;
var inst_24810__$1 = tmp24898;
var inst_24811__$1 = tmp24900;
var inst_24812__$1 = inst_24820;
var state_24868__$1 = (function (){var statearr_24904 = state_24868;
(statearr_24904[(12)] = inst_24812__$1);

(statearr_24904[(17)] = inst_24819);

(statearr_24904[(13)] = inst_24810__$1);

(statearr_24904[(14)] = inst_24809__$1);

(statearr_24904[(15)] = inst_24811__$1);

return statearr_24904;
})();
var statearr_24905_24941 = state_24868__$1;
(statearr_24905_24941[(2)] = null);

(statearr_24905_24941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (18))){
var inst_24838 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24906_24942 = state_24868__$1;
(statearr_24906_24942[(2)] = inst_24838);

(statearr_24906_24942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (8))){
var inst_24812 = (state_24868[(12)]);
var inst_24811 = (state_24868[(15)]);
var inst_24814 = (inst_24812 < inst_24811);
var inst_24815 = inst_24814;
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24815)){
var statearr_24907_24943 = state_24868__$1;
(statearr_24907_24943[(1)] = (10));

} else {
var statearr_24908_24944 = state_24868__$1;
(statearr_24908_24944[(1)] = (11));

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
});})(c__9199__auto___24916,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___24916,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_24912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24912[(0)] = state_machine__9185__auto__);

(statearr_24912[(1)] = (1));

return statearr_24912;
});
var state_machine__9185__auto____1 = (function (state_24868){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e24913){if((e24913 instanceof Object)){
var ex__9188__auto__ = e24913;
var statearr_24914_24945 = state_24868;
(statearr_24914_24945[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24946 = state_24868;
state_24868 = G__24946;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___24916,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_24915 = f__9200__auto__.call(null);
(statearr_24915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___24916);

return statearr_24915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___24916,mults,ensure_mult,p))
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
var c__9199__auto___25083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25053){
var state_val_25054 = (state_25053[(1)]);
if((state_val_25054 === (7))){
var state_25053__$1 = state_25053;
var statearr_25055_25084 = state_25053__$1;
(statearr_25055_25084[(2)] = null);

(statearr_25055_25084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (1))){
var state_25053__$1 = state_25053;
var statearr_25056_25085 = state_25053__$1;
(statearr_25056_25085[(2)] = null);

(statearr_25056_25085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (4))){
var inst_25017 = (state_25053[(7)]);
var inst_25019 = (inst_25017 < cnt);
var state_25053__$1 = state_25053;
if(cljs.core.truth_(inst_25019)){
var statearr_25057_25086 = state_25053__$1;
(statearr_25057_25086[(1)] = (6));

} else {
var statearr_25058_25087 = state_25053__$1;
(statearr_25058_25087[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (15))){
var inst_25049 = (state_25053[(2)]);
var state_25053__$1 = state_25053;
var statearr_25059_25088 = state_25053__$1;
(statearr_25059_25088[(2)] = inst_25049);

(statearr_25059_25088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (13))){
var inst_25042 = cljs.core.async.close_BANG_.call(null,out);
var state_25053__$1 = state_25053;
var statearr_25060_25089 = state_25053__$1;
(statearr_25060_25089[(2)] = inst_25042);

(statearr_25060_25089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (6))){
var state_25053__$1 = state_25053;
var statearr_25061_25090 = state_25053__$1;
(statearr_25061_25090[(2)] = null);

(statearr_25061_25090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (3))){
var inst_25051 = (state_25053[(2)]);
var state_25053__$1 = state_25053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25053__$1,inst_25051);
} else {
if((state_val_25054 === (12))){
var inst_25039 = (state_25053[(8)]);
var inst_25039__$1 = (state_25053[(2)]);
var inst_25040 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25039__$1);
var state_25053__$1 = (function (){var statearr_25062 = state_25053;
(statearr_25062[(8)] = inst_25039__$1);

return statearr_25062;
})();
if(cljs.core.truth_(inst_25040)){
var statearr_25063_25091 = state_25053__$1;
(statearr_25063_25091[(1)] = (13));

} else {
var statearr_25064_25092 = state_25053__$1;
(statearr_25064_25092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (2))){
var inst_25016 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25017 = (0);
var state_25053__$1 = (function (){var statearr_25065 = state_25053;
(statearr_25065[(9)] = inst_25016);

(statearr_25065[(7)] = inst_25017);

return statearr_25065;
})();
var statearr_25066_25093 = state_25053__$1;
(statearr_25066_25093[(2)] = null);

(statearr_25066_25093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (11))){
var inst_25017 = (state_25053[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25053,(10),Object,null,(9));
var inst_25026 = chs__$1.call(null,inst_25017);
var inst_25027 = done.call(null,inst_25017);
var inst_25028 = cljs.core.async.take_BANG_.call(null,inst_25026,inst_25027);
var state_25053__$1 = state_25053;
var statearr_25067_25094 = state_25053__$1;
(statearr_25067_25094[(2)] = inst_25028);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (9))){
var inst_25017 = (state_25053[(7)]);
var inst_25030 = (state_25053[(2)]);
var inst_25031 = (inst_25017 + (1));
var inst_25017__$1 = inst_25031;
var state_25053__$1 = (function (){var statearr_25068 = state_25053;
(statearr_25068[(10)] = inst_25030);

(statearr_25068[(7)] = inst_25017__$1);

return statearr_25068;
})();
var statearr_25069_25095 = state_25053__$1;
(statearr_25069_25095[(2)] = null);

(statearr_25069_25095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (5))){
var inst_25037 = (state_25053[(2)]);
var state_25053__$1 = (function (){var statearr_25070 = state_25053;
(statearr_25070[(11)] = inst_25037);

return statearr_25070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25053__$1,(12),dchan);
} else {
if((state_val_25054 === (14))){
var inst_25039 = (state_25053[(8)]);
var inst_25044 = cljs.core.apply.call(null,f,inst_25039);
var state_25053__$1 = state_25053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25053__$1,(16),out,inst_25044);
} else {
if((state_val_25054 === (16))){
var inst_25046 = (state_25053[(2)]);
var state_25053__$1 = (function (){var statearr_25071 = state_25053;
(statearr_25071[(12)] = inst_25046);

return statearr_25071;
})();
var statearr_25072_25096 = state_25053__$1;
(statearr_25072_25096[(2)] = null);

(statearr_25072_25096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (10))){
var inst_25021 = (state_25053[(2)]);
var inst_25022 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25053__$1 = (function (){var statearr_25073 = state_25053;
(statearr_25073[(13)] = inst_25021);

return statearr_25073;
})();
var statearr_25074_25097 = state_25053__$1;
(statearr_25074_25097[(2)] = inst_25022);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (8))){
var inst_25035 = (state_25053[(2)]);
var state_25053__$1 = state_25053;
var statearr_25075_25098 = state_25053__$1;
(statearr_25075_25098[(2)] = inst_25035);

(statearr_25075_25098[(1)] = (5));


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
});})(c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25079[(0)] = state_machine__9185__auto__);

(statearr_25079[(1)] = (1));

return statearr_25079;
});
var state_machine__9185__auto____1 = (function (state_25053){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25080){if((e25080 instanceof Object)){
var ex__9188__auto__ = e25080;
var statearr_25081_25099 = state_25053;
(statearr_25081_25099[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25100 = state_25053;
state_25053 = G__25100;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25053){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_25082 = f__9200__auto__.call(null);
(statearr_25082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25083);

return statearr_25082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25083,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___25208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25208,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25208,out){
return (function (state_25184){
var state_val_25185 = (state_25184[(1)]);
if((state_val_25185 === (7))){
var inst_25164 = (state_25184[(7)]);
var inst_25163 = (state_25184[(8)]);
var inst_25163__$1 = (state_25184[(2)]);
var inst_25164__$1 = cljs.core.nth.call(null,inst_25163__$1,(0),null);
var inst_25165 = cljs.core.nth.call(null,inst_25163__$1,(1),null);
var inst_25166 = (inst_25164__$1 == null);
var state_25184__$1 = (function (){var statearr_25186 = state_25184;
(statearr_25186[(9)] = inst_25165);

(statearr_25186[(7)] = inst_25164__$1);

(statearr_25186[(8)] = inst_25163__$1);

return statearr_25186;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25187_25209 = state_25184__$1;
(statearr_25187_25209[(1)] = (8));

} else {
var statearr_25188_25210 = state_25184__$1;
(statearr_25188_25210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (1))){
var inst_25155 = cljs.core.vec.call(null,chs);
var inst_25156 = inst_25155;
var state_25184__$1 = (function (){var statearr_25189 = state_25184;
(statearr_25189[(10)] = inst_25156);

return statearr_25189;
})();
var statearr_25190_25211 = state_25184__$1;
(statearr_25190_25211[(2)] = null);

(statearr_25190_25211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (4))){
var inst_25156 = (state_25184[(10)]);
var state_25184__$1 = state_25184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25184__$1,(7),inst_25156);
} else {
if((state_val_25185 === (6))){
var inst_25180 = (state_25184[(2)]);
var state_25184__$1 = state_25184;
var statearr_25191_25212 = state_25184__$1;
(statearr_25191_25212[(2)] = inst_25180);

(statearr_25191_25212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (3))){
var inst_25182 = (state_25184[(2)]);
var state_25184__$1 = state_25184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25184__$1,inst_25182);
} else {
if((state_val_25185 === (2))){
var inst_25156 = (state_25184[(10)]);
var inst_25158 = cljs.core.count.call(null,inst_25156);
var inst_25159 = (inst_25158 > (0));
var state_25184__$1 = state_25184;
if(cljs.core.truth_(inst_25159)){
var statearr_25193_25213 = state_25184__$1;
(statearr_25193_25213[(1)] = (4));

} else {
var statearr_25194_25214 = state_25184__$1;
(statearr_25194_25214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (11))){
var inst_25156 = (state_25184[(10)]);
var inst_25173 = (state_25184[(2)]);
var tmp25192 = inst_25156;
var inst_25156__$1 = tmp25192;
var state_25184__$1 = (function (){var statearr_25195 = state_25184;
(statearr_25195[(10)] = inst_25156__$1);

(statearr_25195[(11)] = inst_25173);

return statearr_25195;
})();
var statearr_25196_25215 = state_25184__$1;
(statearr_25196_25215[(2)] = null);

(statearr_25196_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (9))){
var inst_25164 = (state_25184[(7)]);
var state_25184__$1 = state_25184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25184__$1,(11),out,inst_25164);
} else {
if((state_val_25185 === (5))){
var inst_25178 = cljs.core.async.close_BANG_.call(null,out);
var state_25184__$1 = state_25184;
var statearr_25197_25216 = state_25184__$1;
(statearr_25197_25216[(2)] = inst_25178);

(statearr_25197_25216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (10))){
var inst_25176 = (state_25184[(2)]);
var state_25184__$1 = state_25184;
var statearr_25198_25217 = state_25184__$1;
(statearr_25198_25217[(2)] = inst_25176);

(statearr_25198_25217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25185 === (8))){
var inst_25165 = (state_25184[(9)]);
var inst_25156 = (state_25184[(10)]);
var inst_25164 = (state_25184[(7)]);
var inst_25163 = (state_25184[(8)]);
var inst_25168 = (function (){var c = inst_25165;
var v = inst_25164;
var vec__25161 = inst_25163;
var cs = inst_25156;
return ((function (c,v,vec__25161,cs,inst_25165,inst_25156,inst_25164,inst_25163,state_val_25185,c__9199__auto___25208,out){
return (function (p1__25101_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25101_SHARP_);
});
;})(c,v,vec__25161,cs,inst_25165,inst_25156,inst_25164,inst_25163,state_val_25185,c__9199__auto___25208,out))
})();
var inst_25169 = cljs.core.filterv.call(null,inst_25168,inst_25156);
var inst_25156__$1 = inst_25169;
var state_25184__$1 = (function (){var statearr_25199 = state_25184;
(statearr_25199[(10)] = inst_25156__$1);

return statearr_25199;
})();
var statearr_25200_25218 = state_25184__$1;
(statearr_25200_25218[(2)] = null);

(statearr_25200_25218[(1)] = (2));


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
});})(c__9199__auto___25208,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25208,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25204[(0)] = state_machine__9185__auto__);

(statearr_25204[(1)] = (1));

return statearr_25204;
});
var state_machine__9185__auto____1 = (function (state_25184){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25205){if((e25205 instanceof Object)){
var ex__9188__auto__ = e25205;
var statearr_25206_25219 = state_25184;
(statearr_25206_25219[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25220 = state_25184;
state_25184 = G__25220;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25184){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25208,out))
})();
var state__9201__auto__ = (function (){var statearr_25207 = f__9200__auto__.call(null);
(statearr_25207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25208);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25208,out))
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
var c__9199__auto___25313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25313,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25313,out){
return (function (state_25290){
var state_val_25291 = (state_25290[(1)]);
if((state_val_25291 === (7))){
var inst_25272 = (state_25290[(7)]);
var inst_25272__$1 = (state_25290[(2)]);
var inst_25273 = (inst_25272__$1 == null);
var inst_25274 = cljs.core.not.call(null,inst_25273);
var state_25290__$1 = (function (){var statearr_25292 = state_25290;
(statearr_25292[(7)] = inst_25272__$1);

return statearr_25292;
})();
if(inst_25274){
var statearr_25293_25314 = state_25290__$1;
(statearr_25293_25314[(1)] = (8));

} else {
var statearr_25294_25315 = state_25290__$1;
(statearr_25294_25315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (1))){
var inst_25267 = (0);
var state_25290__$1 = (function (){var statearr_25295 = state_25290;
(statearr_25295[(8)] = inst_25267);

return statearr_25295;
})();
var statearr_25296_25316 = state_25290__$1;
(statearr_25296_25316[(2)] = null);

(statearr_25296_25316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (4))){
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25290__$1,(7),ch);
} else {
if((state_val_25291 === (6))){
var inst_25285 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25297_25317 = state_25290__$1;
(statearr_25297_25317[(2)] = inst_25285);

(statearr_25297_25317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (3))){
var inst_25287 = (state_25290[(2)]);
var inst_25288 = cljs.core.async.close_BANG_.call(null,out);
var state_25290__$1 = (function (){var statearr_25298 = state_25290;
(statearr_25298[(9)] = inst_25287);

return statearr_25298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25290__$1,inst_25288);
} else {
if((state_val_25291 === (2))){
var inst_25267 = (state_25290[(8)]);
var inst_25269 = (inst_25267 < n);
var state_25290__$1 = state_25290;
if(cljs.core.truth_(inst_25269)){
var statearr_25299_25318 = state_25290__$1;
(statearr_25299_25318[(1)] = (4));

} else {
var statearr_25300_25319 = state_25290__$1;
(statearr_25300_25319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (11))){
var inst_25267 = (state_25290[(8)]);
var inst_25277 = (state_25290[(2)]);
var inst_25278 = (inst_25267 + (1));
var inst_25267__$1 = inst_25278;
var state_25290__$1 = (function (){var statearr_25301 = state_25290;
(statearr_25301[(8)] = inst_25267__$1);

(statearr_25301[(10)] = inst_25277);

return statearr_25301;
})();
var statearr_25302_25320 = state_25290__$1;
(statearr_25302_25320[(2)] = null);

(statearr_25302_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (9))){
var state_25290__$1 = state_25290;
var statearr_25303_25321 = state_25290__$1;
(statearr_25303_25321[(2)] = null);

(statearr_25303_25321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (5))){
var state_25290__$1 = state_25290;
var statearr_25304_25322 = state_25290__$1;
(statearr_25304_25322[(2)] = null);

(statearr_25304_25322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (10))){
var inst_25282 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25305_25323 = state_25290__$1;
(statearr_25305_25323[(2)] = inst_25282);

(statearr_25305_25323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (8))){
var inst_25272 = (state_25290[(7)]);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25290__$1,(11),out,inst_25272);
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
});})(c__9199__auto___25313,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25313,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25309[(0)] = state_machine__9185__auto__);

(statearr_25309[(1)] = (1));

return statearr_25309;
});
var state_machine__9185__auto____1 = (function (state_25290){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object)){
var ex__9188__auto__ = e25310;
var statearr_25311_25324 = state_25290;
(statearr_25311_25324[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25325 = state_25290;
state_25290 = G__25325;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25290){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25313,out))
})();
var state__9201__auto__ = (function (){var statearr_25312 = f__9200__auto__.call(null);
(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25313);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25313,out))
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
if(typeof cljs.core.async.t25333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25333 = (function (ch,f,map_LT_,meta25334){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25334 = meta25334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25336 = (function (fn1,_,meta25334,map_LT_,f,ch,meta25337){
this.fn1 = fn1;
this._ = _;
this.meta25334 = meta25334;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25337 = meta25337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25326_SHARP_){
return f1.call(null,(((p1__25326_SHARP_ == null))?null:self__.f.call(null,p1__25326_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25338){
var self__ = this;
var _25338__$1 = this;
return self__.meta25337;
});})(___$1))
;

cljs.core.async.t25336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25338,meta25337__$1){
var self__ = this;
var _25338__$1 = this;
return (new cljs.core.async.t25336(self__.fn1,self__._,self__.meta25334,self__.map_LT_,self__.f,self__.ch,meta25337__$1));
});})(___$1))
;

cljs.core.async.t25336.cljs$lang$type = true;

cljs.core.async.t25336.cljs$lang$ctorStr = "cljs.core.async/t25336";

cljs.core.async.t25336.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25336");
});})(___$1))
;

cljs.core.async.__GT_t25336 = ((function (___$1){
return (function __GT_t25336(fn1__$1,___$2,meta25334__$1,map_LT___$1,f__$1,ch__$1,meta25337){
return (new cljs.core.async.t25336(fn1__$1,___$2,meta25334__$1,map_LT___$1,f__$1,ch__$1,meta25337));
});})(___$1))
;

}

return (new cljs.core.async.t25336(fn1,___$1,self__.meta25334,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25335){
var self__ = this;
var _25335__$1 = this;
return self__.meta25334;
});

cljs.core.async.t25333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25335,meta25334__$1){
var self__ = this;
var _25335__$1 = this;
return (new cljs.core.async.t25333(self__.ch,self__.f,self__.map_LT_,meta25334__$1));
});

cljs.core.async.t25333.cljs$lang$type = true;

cljs.core.async.t25333.cljs$lang$ctorStr = "cljs.core.async/t25333";

cljs.core.async.t25333.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25333");
});

cljs.core.async.__GT_t25333 = (function __GT_t25333(ch__$1,f__$1,map_LT___$1,meta25334){
return (new cljs.core.async.t25333(ch__$1,f__$1,map_LT___$1,meta25334));
});

}

return (new cljs.core.async.t25333(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25342 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25342 = (function (ch,f,map_GT_,meta25343){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25343 = meta25343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25344){
var self__ = this;
var _25344__$1 = this;
return self__.meta25343;
});

cljs.core.async.t25342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25344,meta25343__$1){
var self__ = this;
var _25344__$1 = this;
return (new cljs.core.async.t25342(self__.ch,self__.f,self__.map_GT_,meta25343__$1));
});

cljs.core.async.t25342.cljs$lang$type = true;

cljs.core.async.t25342.cljs$lang$ctorStr = "cljs.core.async/t25342";

cljs.core.async.t25342.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25342");
});

cljs.core.async.__GT_t25342 = (function __GT_t25342(ch__$1,f__$1,map_GT___$1,meta25343){
return (new cljs.core.async.t25342(ch__$1,f__$1,map_GT___$1,meta25343));
});

}

return (new cljs.core.async.t25342(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25348 = (function (ch,p,filter_GT_,meta25349){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25349 = meta25349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25348.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25350){
var self__ = this;
var _25350__$1 = this;
return self__.meta25349;
});

cljs.core.async.t25348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25350,meta25349__$1){
var self__ = this;
var _25350__$1 = this;
return (new cljs.core.async.t25348(self__.ch,self__.p,self__.filter_GT_,meta25349__$1));
});

cljs.core.async.t25348.cljs$lang$type = true;

cljs.core.async.t25348.cljs$lang$ctorStr = "cljs.core.async/t25348";

cljs.core.async.t25348.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25348");
});

cljs.core.async.__GT_t25348 = (function __GT_t25348(ch__$1,p__$1,filter_GT___$1,meta25349){
return (new cljs.core.async.t25348(ch__$1,p__$1,filter_GT___$1,meta25349));
});

}

return (new cljs.core.async.t25348(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___25433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25433,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25433,out){
return (function (state_25412){
var state_val_25413 = (state_25412[(1)]);
if((state_val_25413 === (7))){
var inst_25408 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25414_25434 = state_25412__$1;
(statearr_25414_25434[(2)] = inst_25408);

(statearr_25414_25434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (1))){
var state_25412__$1 = state_25412;
var statearr_25415_25435 = state_25412__$1;
(statearr_25415_25435[(2)] = null);

(statearr_25415_25435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (4))){
var inst_25394 = (state_25412[(7)]);
var inst_25394__$1 = (state_25412[(2)]);
var inst_25395 = (inst_25394__$1 == null);
var state_25412__$1 = (function (){var statearr_25416 = state_25412;
(statearr_25416[(7)] = inst_25394__$1);

return statearr_25416;
})();
if(cljs.core.truth_(inst_25395)){
var statearr_25417_25436 = state_25412__$1;
(statearr_25417_25436[(1)] = (5));

} else {
var statearr_25418_25437 = state_25412__$1;
(statearr_25418_25437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (6))){
var inst_25394 = (state_25412[(7)]);
var inst_25399 = p.call(null,inst_25394);
var state_25412__$1 = state_25412;
if(cljs.core.truth_(inst_25399)){
var statearr_25419_25438 = state_25412__$1;
(statearr_25419_25438[(1)] = (8));

} else {
var statearr_25420_25439 = state_25412__$1;
(statearr_25420_25439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (3))){
var inst_25410 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25412__$1,inst_25410);
} else {
if((state_val_25413 === (2))){
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25412__$1,(4),ch);
} else {
if((state_val_25413 === (11))){
var inst_25402 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25421_25440 = state_25412__$1;
(statearr_25421_25440[(2)] = inst_25402);

(statearr_25421_25440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (9))){
var state_25412__$1 = state_25412;
var statearr_25422_25441 = state_25412__$1;
(statearr_25422_25441[(2)] = null);

(statearr_25422_25441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (5))){
var inst_25397 = cljs.core.async.close_BANG_.call(null,out);
var state_25412__$1 = state_25412;
var statearr_25423_25442 = state_25412__$1;
(statearr_25423_25442[(2)] = inst_25397);

(statearr_25423_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (10))){
var inst_25405 = (state_25412[(2)]);
var state_25412__$1 = (function (){var statearr_25424 = state_25412;
(statearr_25424[(8)] = inst_25405);

return statearr_25424;
})();
var statearr_25425_25443 = state_25412__$1;
(statearr_25425_25443[(2)] = null);

(statearr_25425_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (8))){
var inst_25394 = (state_25412[(7)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25412__$1,(11),out,inst_25394);
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
});})(c__9199__auto___25433,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25433,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25429 = [null,null,null,null,null,null,null,null,null];
(statearr_25429[(0)] = state_machine__9185__auto__);

(statearr_25429[(1)] = (1));

return statearr_25429;
});
var state_machine__9185__auto____1 = (function (state_25412){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25430){if((e25430 instanceof Object)){
var ex__9188__auto__ = e25430;
var statearr_25431_25444 = state_25412;
(statearr_25431_25444[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25445 = state_25412;
state_25412 = G__25445;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25433,out))
})();
var state__9201__auto__ = (function (){var statearr_25432 = f__9200__auto__.call(null);
(statearr_25432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25433);

return statearr_25432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25433,out))
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
return (function (state_25611){
var state_val_25612 = (state_25611[(1)]);
if((state_val_25612 === (7))){
var inst_25607 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25613_25654 = state_25611__$1;
(statearr_25613_25654[(2)] = inst_25607);

(statearr_25613_25654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (20))){
var inst_25577 = (state_25611[(7)]);
var inst_25588 = (state_25611[(2)]);
var inst_25589 = cljs.core.next.call(null,inst_25577);
var inst_25563 = inst_25589;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25611__$1 = (function (){var statearr_25614 = state_25611;
(statearr_25614[(8)] = inst_25564);

(statearr_25614[(9)] = inst_25588);

(statearr_25614[(10)] = inst_25566);

(statearr_25614[(11)] = inst_25565);

(statearr_25614[(12)] = inst_25563);

return statearr_25614;
})();
var statearr_25615_25655 = state_25611__$1;
(statearr_25615_25655[(2)] = null);

(statearr_25615_25655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (1))){
var state_25611__$1 = state_25611;
var statearr_25616_25656 = state_25611__$1;
(statearr_25616_25656[(2)] = null);

(statearr_25616_25656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (4))){
var inst_25552 = (state_25611[(13)]);
var inst_25552__$1 = (state_25611[(2)]);
var inst_25553 = (inst_25552__$1 == null);
var state_25611__$1 = (function (){var statearr_25617 = state_25611;
(statearr_25617[(13)] = inst_25552__$1);

return statearr_25617;
})();
if(cljs.core.truth_(inst_25553)){
var statearr_25618_25657 = state_25611__$1;
(statearr_25618_25657[(1)] = (5));

} else {
var statearr_25619_25658 = state_25611__$1;
(statearr_25619_25658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (15))){
var state_25611__$1 = state_25611;
var statearr_25623_25659 = state_25611__$1;
(statearr_25623_25659[(2)] = null);

(statearr_25623_25659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (21))){
var state_25611__$1 = state_25611;
var statearr_25624_25660 = state_25611__$1;
(statearr_25624_25660[(2)] = null);

(statearr_25624_25660[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (13))){
var inst_25564 = (state_25611[(8)]);
var inst_25566 = (state_25611[(10)]);
var inst_25565 = (state_25611[(11)]);
var inst_25563 = (state_25611[(12)]);
var inst_25573 = (state_25611[(2)]);
var inst_25574 = (inst_25566 + (1));
var tmp25620 = inst_25564;
var tmp25621 = inst_25565;
var tmp25622 = inst_25563;
var inst_25563__$1 = tmp25622;
var inst_25564__$1 = tmp25620;
var inst_25565__$1 = tmp25621;
var inst_25566__$1 = inst_25574;
var state_25611__$1 = (function (){var statearr_25625 = state_25611;
(statearr_25625[(14)] = inst_25573);

(statearr_25625[(8)] = inst_25564__$1);

(statearr_25625[(10)] = inst_25566__$1);

(statearr_25625[(11)] = inst_25565__$1);

(statearr_25625[(12)] = inst_25563__$1);

return statearr_25625;
})();
var statearr_25626_25661 = state_25611__$1;
(statearr_25626_25661[(2)] = null);

(statearr_25626_25661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (22))){
var state_25611__$1 = state_25611;
var statearr_25627_25662 = state_25611__$1;
(statearr_25627_25662[(2)] = null);

(statearr_25627_25662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (6))){
var inst_25552 = (state_25611[(13)]);
var inst_25561 = f.call(null,inst_25552);
var inst_25562 = cljs.core.seq.call(null,inst_25561);
var inst_25563 = inst_25562;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25611__$1 = (function (){var statearr_25628 = state_25611;
(statearr_25628[(8)] = inst_25564);

(statearr_25628[(10)] = inst_25566);

(statearr_25628[(11)] = inst_25565);

(statearr_25628[(12)] = inst_25563);

return statearr_25628;
})();
var statearr_25629_25663 = state_25611__$1;
(statearr_25629_25663[(2)] = null);

(statearr_25629_25663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (17))){
var inst_25577 = (state_25611[(7)]);
var inst_25581 = cljs.core.chunk_first.call(null,inst_25577);
var inst_25582 = cljs.core.chunk_rest.call(null,inst_25577);
var inst_25583 = cljs.core.count.call(null,inst_25581);
var inst_25563 = inst_25582;
var inst_25564 = inst_25581;
var inst_25565 = inst_25583;
var inst_25566 = (0);
var state_25611__$1 = (function (){var statearr_25630 = state_25611;
(statearr_25630[(8)] = inst_25564);

(statearr_25630[(10)] = inst_25566);

(statearr_25630[(11)] = inst_25565);

(statearr_25630[(12)] = inst_25563);

return statearr_25630;
})();
var statearr_25631_25664 = state_25611__$1;
(statearr_25631_25664[(2)] = null);

(statearr_25631_25664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (3))){
var inst_25609 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25611__$1,inst_25609);
} else {
if((state_val_25612 === (12))){
var inst_25597 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25632_25665 = state_25611__$1;
(statearr_25632_25665[(2)] = inst_25597);

(statearr_25632_25665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (2))){
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(4),in$);
} else {
if((state_val_25612 === (23))){
var inst_25605 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25633_25666 = state_25611__$1;
(statearr_25633_25666[(2)] = inst_25605);

(statearr_25633_25666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (19))){
var inst_25592 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25634_25667 = state_25611__$1;
(statearr_25634_25667[(2)] = inst_25592);

(statearr_25634_25667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (11))){
var inst_25577 = (state_25611[(7)]);
var inst_25563 = (state_25611[(12)]);
var inst_25577__$1 = cljs.core.seq.call(null,inst_25563);
var state_25611__$1 = (function (){var statearr_25635 = state_25611;
(statearr_25635[(7)] = inst_25577__$1);

return statearr_25635;
})();
if(inst_25577__$1){
var statearr_25636_25668 = state_25611__$1;
(statearr_25636_25668[(1)] = (14));

} else {
var statearr_25637_25669 = state_25611__$1;
(statearr_25637_25669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (9))){
var inst_25599 = (state_25611[(2)]);
var inst_25600 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25611__$1 = (function (){var statearr_25638 = state_25611;
(statearr_25638[(15)] = inst_25599);

return statearr_25638;
})();
if(cljs.core.truth_(inst_25600)){
var statearr_25639_25670 = state_25611__$1;
(statearr_25639_25670[(1)] = (21));

} else {
var statearr_25640_25671 = state_25611__$1;
(statearr_25640_25671[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (5))){
var inst_25555 = cljs.core.async.close_BANG_.call(null,out);
var state_25611__$1 = state_25611;
var statearr_25641_25672 = state_25611__$1;
(statearr_25641_25672[(2)] = inst_25555);

(statearr_25641_25672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (14))){
var inst_25577 = (state_25611[(7)]);
var inst_25579 = cljs.core.chunked_seq_QMARK_.call(null,inst_25577);
var state_25611__$1 = state_25611;
if(inst_25579){
var statearr_25642_25673 = state_25611__$1;
(statearr_25642_25673[(1)] = (17));

} else {
var statearr_25643_25674 = state_25611__$1;
(statearr_25643_25674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (16))){
var inst_25595 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25644_25675 = state_25611__$1;
(statearr_25644_25675[(2)] = inst_25595);

(statearr_25644_25675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (10))){
var inst_25564 = (state_25611[(8)]);
var inst_25566 = (state_25611[(10)]);
var inst_25571 = cljs.core._nth.call(null,inst_25564,inst_25566);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25611__$1,(13),out,inst_25571);
} else {
if((state_val_25612 === (18))){
var inst_25577 = (state_25611[(7)]);
var inst_25586 = cljs.core.first.call(null,inst_25577);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25611__$1,(20),out,inst_25586);
} else {
if((state_val_25612 === (8))){
var inst_25566 = (state_25611[(10)]);
var inst_25565 = (state_25611[(11)]);
var inst_25568 = (inst_25566 < inst_25565);
var inst_25569 = inst_25568;
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25569)){
var statearr_25645_25676 = state_25611__$1;
(statearr_25645_25676[(1)] = (10));

} else {
var statearr_25646_25677 = state_25611__$1;
(statearr_25646_25677[(1)] = (11));

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
var statearr_25650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25650[(0)] = state_machine__9185__auto__);

(statearr_25650[(1)] = (1));

return statearr_25650;
});
var state_machine__9185__auto____1 = (function (state_25611){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25651){if((e25651 instanceof Object)){
var ex__9188__auto__ = e25651;
var statearr_25652_25678 = state_25611;
(statearr_25652_25678[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25679 = state_25611;
state_25611 = G__25679;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25611){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_25653 = f__9200__auto__.call(null);
(statearr_25653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_25653;
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
var c__9199__auto___25776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25776,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25776,out){
return (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (7))){
var inst_25746 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25753_25777 = state_25751__$1;
(statearr_25753_25777[(2)] = inst_25746);

(statearr_25753_25777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (1))){
var inst_25728 = null;
var state_25751__$1 = (function (){var statearr_25754 = state_25751;
(statearr_25754[(7)] = inst_25728);

return statearr_25754;
})();
var statearr_25755_25778 = state_25751__$1;
(statearr_25755_25778[(2)] = null);

(statearr_25755_25778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (4))){
var inst_25731 = (state_25751[(8)]);
var inst_25731__$1 = (state_25751[(2)]);
var inst_25732 = (inst_25731__$1 == null);
var inst_25733 = cljs.core.not.call(null,inst_25732);
var state_25751__$1 = (function (){var statearr_25756 = state_25751;
(statearr_25756[(8)] = inst_25731__$1);

return statearr_25756;
})();
if(inst_25733){
var statearr_25757_25779 = state_25751__$1;
(statearr_25757_25779[(1)] = (5));

} else {
var statearr_25758_25780 = state_25751__$1;
(statearr_25758_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (6))){
var state_25751__$1 = state_25751;
var statearr_25759_25781 = state_25751__$1;
(statearr_25759_25781[(2)] = null);

(statearr_25759_25781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (3))){
var inst_25748 = (state_25751[(2)]);
var inst_25749 = cljs.core.async.close_BANG_.call(null,out);
var state_25751__$1 = (function (){var statearr_25760 = state_25751;
(statearr_25760[(9)] = inst_25748);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else {
if((state_val_25752 === (2))){
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(4),ch);
} else {
if((state_val_25752 === (11))){
var inst_25731 = (state_25751[(8)]);
var inst_25740 = (state_25751[(2)]);
var inst_25728 = inst_25731;
var state_25751__$1 = (function (){var statearr_25761 = state_25751;
(statearr_25761[(10)] = inst_25740);

(statearr_25761[(7)] = inst_25728);

return statearr_25761;
})();
var statearr_25762_25782 = state_25751__$1;
(statearr_25762_25782[(2)] = null);

(statearr_25762_25782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (9))){
var inst_25731 = (state_25751[(8)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(11),out,inst_25731);
} else {
if((state_val_25752 === (5))){
var inst_25728 = (state_25751[(7)]);
var inst_25731 = (state_25751[(8)]);
var inst_25735 = cljs.core._EQ_.call(null,inst_25731,inst_25728);
var state_25751__$1 = state_25751;
if(inst_25735){
var statearr_25764_25783 = state_25751__$1;
(statearr_25764_25783[(1)] = (8));

} else {
var statearr_25765_25784 = state_25751__$1;
(statearr_25765_25784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (10))){
var inst_25743 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25766_25785 = state_25751__$1;
(statearr_25766_25785[(2)] = inst_25743);

(statearr_25766_25785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (8))){
var inst_25728 = (state_25751[(7)]);
var tmp25763 = inst_25728;
var inst_25728__$1 = tmp25763;
var state_25751__$1 = (function (){var statearr_25767 = state_25751;
(statearr_25767[(7)] = inst_25728__$1);

return statearr_25767;
})();
var statearr_25768_25786 = state_25751__$1;
(statearr_25768_25786[(2)] = null);

(statearr_25768_25786[(1)] = (2));


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
});})(c__9199__auto___25776,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25776,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25772[(0)] = state_machine__9185__auto__);

(statearr_25772[(1)] = (1));

return statearr_25772;
});
var state_machine__9185__auto____1 = (function (state_25751){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object)){
var ex__9188__auto__ = e25773;
var statearr_25774_25787 = state_25751;
(statearr_25774_25787[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25788 = state_25751;
state_25751 = G__25788;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25776,out))
})();
var state__9201__auto__ = (function (){var statearr_25775 = f__9200__auto__.call(null);
(statearr_25775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25776);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25776,out))
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
var c__9199__auto___25923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___25923,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___25923,out){
return (function (state_25893){
var state_val_25894 = (state_25893[(1)]);
if((state_val_25894 === (7))){
var inst_25889 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25895_25924 = state_25893__$1;
(statearr_25895_25924[(2)] = inst_25889);

(statearr_25895_25924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (1))){
var inst_25856 = (new Array(n));
var inst_25857 = inst_25856;
var inst_25858 = (0);
var state_25893__$1 = (function (){var statearr_25896 = state_25893;
(statearr_25896[(7)] = inst_25858);

(statearr_25896[(8)] = inst_25857);

return statearr_25896;
})();
var statearr_25897_25925 = state_25893__$1;
(statearr_25897_25925[(2)] = null);

(statearr_25897_25925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (4))){
var inst_25861 = (state_25893[(9)]);
var inst_25861__$1 = (state_25893[(2)]);
var inst_25862 = (inst_25861__$1 == null);
var inst_25863 = cljs.core.not.call(null,inst_25862);
var state_25893__$1 = (function (){var statearr_25898 = state_25893;
(statearr_25898[(9)] = inst_25861__$1);

return statearr_25898;
})();
if(inst_25863){
var statearr_25899_25926 = state_25893__$1;
(statearr_25899_25926[(1)] = (5));

} else {
var statearr_25900_25927 = state_25893__$1;
(statearr_25900_25927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (15))){
var inst_25883 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25901_25928 = state_25893__$1;
(statearr_25901_25928[(2)] = inst_25883);

(statearr_25901_25928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (13))){
var state_25893__$1 = state_25893;
var statearr_25902_25929 = state_25893__$1;
(statearr_25902_25929[(2)] = null);

(statearr_25902_25929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (6))){
var inst_25858 = (state_25893[(7)]);
var inst_25879 = (inst_25858 > (0));
var state_25893__$1 = state_25893;
if(cljs.core.truth_(inst_25879)){
var statearr_25903_25930 = state_25893__$1;
(statearr_25903_25930[(1)] = (12));

} else {
var statearr_25904_25931 = state_25893__$1;
(statearr_25904_25931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (3))){
var inst_25891 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25893__$1,inst_25891);
} else {
if((state_val_25894 === (12))){
var inst_25857 = (state_25893[(8)]);
var inst_25881 = cljs.core.vec.call(null,inst_25857);
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25893__$1,(15),out,inst_25881);
} else {
if((state_val_25894 === (2))){
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(4),ch);
} else {
if((state_val_25894 === (11))){
var inst_25873 = (state_25893[(2)]);
var inst_25874 = (new Array(n));
var inst_25857 = inst_25874;
var inst_25858 = (0);
var state_25893__$1 = (function (){var statearr_25905 = state_25893;
(statearr_25905[(7)] = inst_25858);

(statearr_25905[(8)] = inst_25857);

(statearr_25905[(10)] = inst_25873);

return statearr_25905;
})();
var statearr_25906_25932 = state_25893__$1;
(statearr_25906_25932[(2)] = null);

(statearr_25906_25932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (9))){
var inst_25857 = (state_25893[(8)]);
var inst_25871 = cljs.core.vec.call(null,inst_25857);
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25893__$1,(11),out,inst_25871);
} else {
if((state_val_25894 === (5))){
var inst_25866 = (state_25893[(11)]);
var inst_25858 = (state_25893[(7)]);
var inst_25857 = (state_25893[(8)]);
var inst_25861 = (state_25893[(9)]);
var inst_25865 = (inst_25857[inst_25858] = inst_25861);
var inst_25866__$1 = (inst_25858 + (1));
var inst_25867 = (inst_25866__$1 < n);
var state_25893__$1 = (function (){var statearr_25907 = state_25893;
(statearr_25907[(11)] = inst_25866__$1);

(statearr_25907[(12)] = inst_25865);

return statearr_25907;
})();
if(cljs.core.truth_(inst_25867)){
var statearr_25908_25933 = state_25893__$1;
(statearr_25908_25933[(1)] = (8));

} else {
var statearr_25909_25934 = state_25893__$1;
(statearr_25909_25934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (14))){
var inst_25886 = (state_25893[(2)]);
var inst_25887 = cljs.core.async.close_BANG_.call(null,out);
var state_25893__$1 = (function (){var statearr_25911 = state_25893;
(statearr_25911[(13)] = inst_25886);

return statearr_25911;
})();
var statearr_25912_25935 = state_25893__$1;
(statearr_25912_25935[(2)] = inst_25887);

(statearr_25912_25935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (10))){
var inst_25877 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25913_25936 = state_25893__$1;
(statearr_25913_25936[(2)] = inst_25877);

(statearr_25913_25936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (8))){
var inst_25866 = (state_25893[(11)]);
var inst_25857 = (state_25893[(8)]);
var tmp25910 = inst_25857;
var inst_25857__$1 = tmp25910;
var inst_25858 = inst_25866;
var state_25893__$1 = (function (){var statearr_25914 = state_25893;
(statearr_25914[(7)] = inst_25858);

(statearr_25914[(8)] = inst_25857__$1);

return statearr_25914;
})();
var statearr_25915_25937 = state_25893__$1;
(statearr_25915_25937[(2)] = null);

(statearr_25915_25937[(1)] = (2));


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
});})(c__9199__auto___25923,out))
;
return ((function (switch__9184__auto__,c__9199__auto___25923,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_25919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25919[(0)] = state_machine__9185__auto__);

(statearr_25919[(1)] = (1));

return statearr_25919;
});
var state_machine__9185__auto____1 = (function (state_25893){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_25893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e25920){if((e25920 instanceof Object)){
var ex__9188__auto__ = e25920;
var statearr_25921_25938 = state_25893;
(statearr_25921_25938[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25939 = state_25893;
state_25893 = G__25939;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_25893){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_25893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___25923,out))
})();
var state__9201__auto__ = (function (){var statearr_25922 = f__9200__auto__.call(null);
(statearr_25922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___25923);

return statearr_25922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___25923,out))
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
var c__9199__auto___26082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___26082,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___26082,out){
return (function (state_26052){
var state_val_26053 = (state_26052[(1)]);
if((state_val_26053 === (7))){
var inst_26048 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26054_26083 = state_26052__$1;
(statearr_26054_26083[(2)] = inst_26048);

(statearr_26054_26083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (1))){
var inst_26011 = [];
var inst_26012 = inst_26011;
var inst_26013 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26052__$1 = (function (){var statearr_26055 = state_26052;
(statearr_26055[(7)] = inst_26013);

(statearr_26055[(8)] = inst_26012);

return statearr_26055;
})();
var statearr_26056_26084 = state_26052__$1;
(statearr_26056_26084[(2)] = null);

(statearr_26056_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (4))){
var inst_26016 = (state_26052[(9)]);
var inst_26016__$1 = (state_26052[(2)]);
var inst_26017 = (inst_26016__$1 == null);
var inst_26018 = cljs.core.not.call(null,inst_26017);
var state_26052__$1 = (function (){var statearr_26057 = state_26052;
(statearr_26057[(9)] = inst_26016__$1);

return statearr_26057;
})();
if(inst_26018){
var statearr_26058_26085 = state_26052__$1;
(statearr_26058_26085[(1)] = (5));

} else {
var statearr_26059_26086 = state_26052__$1;
(statearr_26059_26086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (15))){
var inst_26042 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26060_26087 = state_26052__$1;
(statearr_26060_26087[(2)] = inst_26042);

(statearr_26060_26087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (13))){
var state_26052__$1 = state_26052;
var statearr_26061_26088 = state_26052__$1;
(statearr_26061_26088[(2)] = null);

(statearr_26061_26088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (6))){
var inst_26012 = (state_26052[(8)]);
var inst_26037 = inst_26012.length;
var inst_26038 = (inst_26037 > (0));
var state_26052__$1 = state_26052;
if(cljs.core.truth_(inst_26038)){
var statearr_26062_26089 = state_26052__$1;
(statearr_26062_26089[(1)] = (12));

} else {
var statearr_26063_26090 = state_26052__$1;
(statearr_26063_26090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (3))){
var inst_26050 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26052__$1,inst_26050);
} else {
if((state_val_26053 === (12))){
var inst_26012 = (state_26052[(8)]);
var inst_26040 = cljs.core.vec.call(null,inst_26012);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26052__$1,(15),out,inst_26040);
} else {
if((state_val_26053 === (2))){
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26052__$1,(4),ch);
} else {
if((state_val_26053 === (11))){
var inst_26020 = (state_26052[(10)]);
var inst_26016 = (state_26052[(9)]);
var inst_26030 = (state_26052[(2)]);
var inst_26031 = [];
var inst_26032 = inst_26031.push(inst_26016);
var inst_26012 = inst_26031;
var inst_26013 = inst_26020;
var state_26052__$1 = (function (){var statearr_26064 = state_26052;
(statearr_26064[(7)] = inst_26013);

(statearr_26064[(11)] = inst_26030);

(statearr_26064[(8)] = inst_26012);

(statearr_26064[(12)] = inst_26032);

return statearr_26064;
})();
var statearr_26065_26091 = state_26052__$1;
(statearr_26065_26091[(2)] = null);

(statearr_26065_26091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (9))){
var inst_26012 = (state_26052[(8)]);
var inst_26028 = cljs.core.vec.call(null,inst_26012);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26052__$1,(11),out,inst_26028);
} else {
if((state_val_26053 === (5))){
var inst_26013 = (state_26052[(7)]);
var inst_26020 = (state_26052[(10)]);
var inst_26016 = (state_26052[(9)]);
var inst_26020__$1 = f.call(null,inst_26016);
var inst_26021 = cljs.core._EQ_.call(null,inst_26020__$1,inst_26013);
var inst_26022 = cljs.core.keyword_identical_QMARK_.call(null,inst_26013,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26023 = (inst_26021) || (inst_26022);
var state_26052__$1 = (function (){var statearr_26066 = state_26052;
(statearr_26066[(10)] = inst_26020__$1);

return statearr_26066;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26067_26092 = state_26052__$1;
(statearr_26067_26092[(1)] = (8));

} else {
var statearr_26068_26093 = state_26052__$1;
(statearr_26068_26093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (14))){
var inst_26045 = (state_26052[(2)]);
var inst_26046 = cljs.core.async.close_BANG_.call(null,out);
var state_26052__$1 = (function (){var statearr_26070 = state_26052;
(statearr_26070[(13)] = inst_26045);

return statearr_26070;
})();
var statearr_26071_26094 = state_26052__$1;
(statearr_26071_26094[(2)] = inst_26046);

(statearr_26071_26094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (10))){
var inst_26035 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26072_26095 = state_26052__$1;
(statearr_26072_26095[(2)] = inst_26035);

(statearr_26072_26095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (8))){
var inst_26020 = (state_26052[(10)]);
var inst_26012 = (state_26052[(8)]);
var inst_26016 = (state_26052[(9)]);
var inst_26025 = inst_26012.push(inst_26016);
var tmp26069 = inst_26012;
var inst_26012__$1 = tmp26069;
var inst_26013 = inst_26020;
var state_26052__$1 = (function (){var statearr_26073 = state_26052;
(statearr_26073[(14)] = inst_26025);

(statearr_26073[(7)] = inst_26013);

(statearr_26073[(8)] = inst_26012__$1);

return statearr_26073;
})();
var statearr_26074_26096 = state_26052__$1;
(statearr_26074_26096[(2)] = null);

(statearr_26074_26096[(1)] = (2));


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
});})(c__9199__auto___26082,out))
;
return ((function (switch__9184__auto__,c__9199__auto___26082,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_26078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26078[(0)] = state_machine__9185__auto__);

(statearr_26078[(1)] = (1));

return statearr_26078;
});
var state_machine__9185__auto____1 = (function (state_26052){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_26052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e26079){if((e26079 instanceof Object)){
var ex__9188__auto__ = e26079;
var statearr_26080_26097 = state_26052;
(statearr_26080_26097[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26098 = state_26052;
state_26052 = G__26098;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_26052){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_26052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___26082,out))
})();
var state__9201__auto__ = (function (){var statearr_26081 = f__9200__auto__.call(null);
(statearr_26081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___26082);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___26082,out))
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