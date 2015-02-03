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
if(typeof cljs.core.async.t29521 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29521 = (function (f,fn_handler,meta29522){
this.f = f;
this.fn_handler = fn_handler;
this.meta29522 = meta29522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29521.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29523){
var self__ = this;
var _29523__$1 = this;
return self__.meta29522;
});

cljs.core.async.t29521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29523,meta29522__$1){
var self__ = this;
var _29523__$1 = this;
return (new cljs.core.async.t29521(self__.f,self__.fn_handler,meta29522__$1));
});

cljs.core.async.t29521.cljs$lang$type = true;

cljs.core.async.t29521.cljs$lang$ctorStr = "cljs.core.async/t29521";

cljs.core.async.t29521.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t29521");
});

cljs.core.async.__GT_t29521 = (function __GT_t29521(f__$1,fn_handler__$1,meta29522){
return (new cljs.core.async.t29521(f__$1,fn_handler__$1,meta29522));
});

}

return (new cljs.core.async.t29521(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__29525 = buff;
if(G__29525){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__29525.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29525.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29525);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29525);
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
var val_29526 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29526);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29526,ret){
return (function (){
return fn1.call(null,val_29526);
});})(val_29526,ret))
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
var n__4509__auto___29527 = n;
var x_29528 = (0);
while(true){
if((x_29528 < n__4509__auto___29527)){
(a[x_29528] = (0));

var G__29529 = (x_29528 + (1));
x_29528 = G__29529;
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

var G__29530 = (i + (1));
i = G__29530;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29534 = (function (flag,alt_flag,meta29535){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29535 = meta29535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29536){
var self__ = this;
var _29536__$1 = this;
return self__.meta29535;
});})(flag))
;

cljs.core.async.t29534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29536,meta29535__$1){
var self__ = this;
var _29536__$1 = this;
return (new cljs.core.async.t29534(self__.flag,self__.alt_flag,meta29535__$1));
});})(flag))
;

cljs.core.async.t29534.cljs$lang$type = true;

cljs.core.async.t29534.cljs$lang$ctorStr = "cljs.core.async/t29534";

cljs.core.async.t29534.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t29534");
});})(flag))
;

cljs.core.async.__GT_t29534 = ((function (flag){
return (function __GT_t29534(flag__$1,alt_flag__$1,meta29535){
return (new cljs.core.async.t29534(flag__$1,alt_flag__$1,meta29535));
});})(flag))
;

}

return (new cljs.core.async.t29534(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29540 = (function (cb,flag,alt_handler,meta29541){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29541 = meta29541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29542){
var self__ = this;
var _29542__$1 = this;
return self__.meta29541;
});

cljs.core.async.t29540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29542,meta29541__$1){
var self__ = this;
var _29542__$1 = this;
return (new cljs.core.async.t29540(self__.cb,self__.flag,self__.alt_handler,meta29541__$1));
});

cljs.core.async.t29540.cljs$lang$type = true;

cljs.core.async.t29540.cljs$lang$ctorStr = "cljs.core.async/t29540";

cljs.core.async.t29540.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t29540");
});

cljs.core.async.__GT_t29540 = (function __GT_t29540(cb__$1,flag__$1,alt_handler__$1,meta29541){
return (new cljs.core.async.t29540(cb__$1,flag__$1,alt_handler__$1,meta29541));
});

}

return (new cljs.core.async.t29540(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__29543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29544_SHARP_,port], null));
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
var G__29545 = (i + (1));
i = G__29545;
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
var alts_BANG___delegate = function (ports,p__29546){
var map__29548 = p__29546;
var map__29548__$1 = ((cljs.core.seq_QMARK_.call(null,map__29548))?cljs.core.apply.call(null,cljs.core.hash_map,map__29548):map__29548);
var opts = map__29548__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29546 = null;
if (arguments.length > 1) {
  p__29546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__29546);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29549){
var ports = cljs.core.first(arglist__29549);
var p__29546 = cljs.core.rest(arglist__29549);
return alts_BANG___delegate(ports,p__29546);
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
var c__7040__auto___29644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___29644){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___29644){
return (function (state_29620){
var state_val_29621 = (state_29620[(1)]);
if((state_val_29621 === (7))){
var inst_29616 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29622_29645 = state_29620__$1;
(statearr_29622_29645[(2)] = inst_29616);

(statearr_29622_29645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (1))){
var state_29620__$1 = state_29620;
var statearr_29623_29646 = state_29620__$1;
(statearr_29623_29646[(2)] = null);

(statearr_29623_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (4))){
var inst_29599 = (state_29620[(7)]);
var inst_29599__$1 = (state_29620[(2)]);
var inst_29600 = (inst_29599__$1 == null);
var state_29620__$1 = (function (){var statearr_29624 = state_29620;
(statearr_29624[(7)] = inst_29599__$1);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29600)){
var statearr_29625_29647 = state_29620__$1;
(statearr_29625_29647[(1)] = (5));

} else {
var statearr_29626_29648 = state_29620__$1;
(statearr_29626_29648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (13))){
var state_29620__$1 = state_29620;
var statearr_29627_29649 = state_29620__$1;
(statearr_29627_29649[(2)] = null);

(statearr_29627_29649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (6))){
var inst_29599 = (state_29620[(7)]);
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29620__$1,(11),to,inst_29599);
} else {
if((state_val_29621 === (3))){
var inst_29618 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29620__$1,inst_29618);
} else {
if((state_val_29621 === (12))){
var state_29620__$1 = state_29620;
var statearr_29628_29650 = state_29620__$1;
(statearr_29628_29650[(2)] = null);

(statearr_29628_29650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (2))){
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29620__$1,(4),from);
} else {
if((state_val_29621 === (11))){
var inst_29609 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
if(cljs.core.truth_(inst_29609)){
var statearr_29629_29651 = state_29620__$1;
(statearr_29629_29651[(1)] = (12));

} else {
var statearr_29630_29652 = state_29620__$1;
(statearr_29630_29652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (9))){
var state_29620__$1 = state_29620;
var statearr_29631_29653 = state_29620__$1;
(statearr_29631_29653[(2)] = null);

(statearr_29631_29653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (5))){
var state_29620__$1 = state_29620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29632_29654 = state_29620__$1;
(statearr_29632_29654[(1)] = (8));

} else {
var statearr_29633_29655 = state_29620__$1;
(statearr_29633_29655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (14))){
var inst_29614 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29634_29656 = state_29620__$1;
(statearr_29634_29656[(2)] = inst_29614);

(statearr_29634_29656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (10))){
var inst_29606 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29635_29657 = state_29620__$1;
(statearr_29635_29657[(2)] = inst_29606);

(statearr_29635_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (8))){
var inst_29603 = cljs.core.async.close_BANG_.call(null,to);
var state_29620__$1 = state_29620;
var statearr_29636_29658 = state_29620__$1;
(statearr_29636_29658[(2)] = inst_29603);

(statearr_29636_29658[(1)] = (10));


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
});})(c__7040__auto___29644))
;
return ((function (switch__6984__auto__,c__7040__auto___29644){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_29640 = [null,null,null,null,null,null,null,null];
(statearr_29640[(0)] = state_machine__6985__auto__);

(statearr_29640[(1)] = (1));

return statearr_29640;
});
var state_machine__6985__auto____1 = (function (state_29620){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e29641){if((e29641 instanceof Object)){
var ex__6988__auto__ = e29641;
var statearr_29642_29659 = state_29620;
(statearr_29642_29659[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29620;
state_29620 = G__29660;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29620){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___29644))
})();
var state__7042__auto__ = (function (){var statearr_29643 = f__7041__auto__.call(null);
(statearr_29643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___29644);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___29644))
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
return (function (p__29844){
var vec__29845 = p__29844;
var v = cljs.core.nth.call(null,vec__29845,(0),null);
var p = cljs.core.nth.call(null,vec__29845,(1),null);
var job = vec__29845;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7040__auto___30027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results){
return (function (state_29850){
var state_val_29851 = (state_29850[(1)]);
if((state_val_29851 === (2))){
var inst_29847 = (state_29850[(2)]);
var inst_29848 = cljs.core.async.close_BANG_.call(null,res);
var state_29850__$1 = (function (){var statearr_29852 = state_29850;
(statearr_29852[(7)] = inst_29847);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29850__$1,inst_29848);
} else {
if((state_val_29851 === (1))){
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29850__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results))
;
return ((function (switch__6984__auto__,c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_29856 = [null,null,null,null,null,null,null,null];
(statearr_29856[(0)] = state_machine__6985__auto__);

(statearr_29856[(1)] = (1));

return statearr_29856;
});
var state_machine__6985__auto____1 = (function (state_29850){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e29857){if((e29857 instanceof Object)){
var ex__6988__auto__ = e29857;
var statearr_29858_30028 = state_29850;
(statearr_29858_30028[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30029 = state_29850;
state_29850 = G__30029;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29850){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results))
})();
var state__7042__auto__ = (function (){var statearr_29859 = f__7041__auto__.call(null);
(statearr_29859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30027);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___30027,res,vec__29845,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29860){
var vec__29861 = p__29860;
var v = cljs.core.nth.call(null,vec__29861,(0),null);
var p = cljs.core.nth.call(null,vec__29861,(1),null);
var job = vec__29861;
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
var n__4509__auto___30030 = n;
var __30031 = (0);
while(true){
if((__30031 < n__4509__auto___30030)){
var G__29862_30032 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29862_30032) {
case "async":
var c__7040__auto___30034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30031,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (__30031,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function (state_29875){
var state_val_29876 = (state_29875[(1)]);
if((state_val_29876 === (7))){
var inst_29871 = (state_29875[(2)]);
var state_29875__$1 = state_29875;
var statearr_29877_30035 = state_29875__$1;
(statearr_29877_30035[(2)] = inst_29871);

(statearr_29877_30035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (6))){
var state_29875__$1 = state_29875;
var statearr_29878_30036 = state_29875__$1;
(statearr_29878_30036[(2)] = null);

(statearr_29878_30036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (5))){
var state_29875__$1 = state_29875;
var statearr_29879_30037 = state_29875__$1;
(statearr_29879_30037[(2)] = null);

(statearr_29879_30037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (4))){
var inst_29865 = (state_29875[(2)]);
var inst_29866 = async.call(null,inst_29865);
var state_29875__$1 = state_29875;
if(cljs.core.truth_(inst_29866)){
var statearr_29880_30038 = state_29875__$1;
(statearr_29880_30038[(1)] = (5));

} else {
var statearr_29881_30039 = state_29875__$1;
(statearr_29881_30039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (3))){
var inst_29873 = (state_29875[(2)]);
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29875__$1,inst_29873);
} else {
if((state_val_29876 === (2))){
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29875__$1,(4),jobs);
} else {
if((state_val_29876 === (1))){
var state_29875__$1 = state_29875;
var statearr_29882_30040 = state_29875__$1;
(statearr_29882_30040[(2)] = null);

(statearr_29882_30040[(1)] = (2));


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
});})(__30031,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
;
return ((function (__30031,switch__6984__auto__,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_29886 = [null,null,null,null,null,null,null];
(statearr_29886[(0)] = state_machine__6985__auto__);

(statearr_29886[(1)] = (1));

return statearr_29886;
});
var state_machine__6985__auto____1 = (function (state_29875){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e29887){if((e29887 instanceof Object)){
var ex__6988__auto__ = e29887;
var statearr_29888_30041 = state_29875;
(statearr_29888_30041[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30042 = state_29875;
state_29875 = G__30042;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29875){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(__30031,switch__6984__auto__,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
})();
var state__7042__auto__ = (function (){var statearr_29889 = f__7041__auto__.call(null);
(statearr_29889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30034);

return statearr_29889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(__30031,c__7040__auto___30034,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
);


break;
case "compute":
var c__7040__auto___30043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30031,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (__30031,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (7))){
var inst_29898 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29904_30044 = state_29902__$1;
(statearr_29904_30044[(2)] = inst_29898);

(statearr_29904_30044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (6))){
var state_29902__$1 = state_29902;
var statearr_29905_30045 = state_29902__$1;
(statearr_29905_30045[(2)] = null);

(statearr_29905_30045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (5))){
var state_29902__$1 = state_29902;
var statearr_29906_30046 = state_29902__$1;
(statearr_29906_30046[(2)] = null);

(statearr_29906_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (4))){
var inst_29892 = (state_29902[(2)]);
var inst_29893 = process.call(null,inst_29892);
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29893)){
var statearr_29907_30047 = state_29902__$1;
(statearr_29907_30047[(1)] = (5));

} else {
var statearr_29908_30048 = state_29902__$1;
(statearr_29908_30048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (3))){
var inst_29900 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29902__$1,inst_29900);
} else {
if((state_val_29903 === (2))){
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29902__$1,(4),jobs);
} else {
if((state_val_29903 === (1))){
var state_29902__$1 = state_29902;
var statearr_29909_30049 = state_29902__$1;
(statearr_29909_30049[(2)] = null);

(statearr_29909_30049[(1)] = (2));


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
});})(__30031,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
;
return ((function (__30031,switch__6984__auto__,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_29913 = [null,null,null,null,null,null,null];
(statearr_29913[(0)] = state_machine__6985__auto__);

(statearr_29913[(1)] = (1));

return statearr_29913;
});
var state_machine__6985__auto____1 = (function (state_29902){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e29914){if((e29914 instanceof Object)){
var ex__6988__auto__ = e29914;
var statearr_29915_30050 = state_29902;
(statearr_29915_30050[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30051 = state_29902;
state_29902 = G__30051;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(__30031,switch__6984__auto__,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
})();
var state__7042__auto__ = (function (){var statearr_29916 = f__7041__auto__.call(null);
(statearr_29916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30043);

return statearr_29916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(__30031,c__7040__auto___30043,G__29862_30032,n__4509__auto___30030,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30052 = (__30031 + (1));
__30031 = G__30052;
continue;
} else {
}
break;
}

var c__7040__auto___30053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___30053,jobs,results,process,async){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___30053,jobs,results,process,async){
return (function (state_29938){
var state_val_29939 = (state_29938[(1)]);
if((state_val_29939 === (9))){
var inst_29931 = (state_29938[(2)]);
var state_29938__$1 = (function (){var statearr_29940 = state_29938;
(statearr_29940[(7)] = inst_29931);

return statearr_29940;
})();
var statearr_29941_30054 = state_29938__$1;
(statearr_29941_30054[(2)] = null);

(statearr_29941_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (8))){
var inst_29924 = (state_29938[(8)]);
var inst_29929 = (state_29938[(2)]);
var state_29938__$1 = (function (){var statearr_29942 = state_29938;
(statearr_29942[(9)] = inst_29929);

return statearr_29942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29938__$1,(9),results,inst_29924);
} else {
if((state_val_29939 === (7))){
var inst_29934 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
var statearr_29943_30055 = state_29938__$1;
(statearr_29943_30055[(2)] = inst_29934);

(statearr_29943_30055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (6))){
var inst_29919 = (state_29938[(10)]);
var inst_29924 = (state_29938[(8)]);
var inst_29924__$1 = cljs.core.async.chan.call(null,(1));
var inst_29925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29926 = [inst_29919,inst_29924__$1];
var inst_29927 = (new cljs.core.PersistentVector(null,2,(5),inst_29925,inst_29926,null));
var state_29938__$1 = (function (){var statearr_29944 = state_29938;
(statearr_29944[(8)] = inst_29924__$1);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29938__$1,(8),jobs,inst_29927);
} else {
if((state_val_29939 === (5))){
var inst_29922 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29938__$1 = state_29938;
var statearr_29945_30056 = state_29938__$1;
(statearr_29945_30056[(2)] = inst_29922);

(statearr_29945_30056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (4))){
var inst_29919 = (state_29938[(10)]);
var inst_29919__$1 = (state_29938[(2)]);
var inst_29920 = (inst_29919__$1 == null);
var state_29938__$1 = (function (){var statearr_29946 = state_29938;
(statearr_29946[(10)] = inst_29919__$1);

return statearr_29946;
})();
if(cljs.core.truth_(inst_29920)){
var statearr_29947_30057 = state_29938__$1;
(statearr_29947_30057[(1)] = (5));

} else {
var statearr_29948_30058 = state_29938__$1;
(statearr_29948_30058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (3))){
var inst_29936 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29938__$1,inst_29936);
} else {
if((state_val_29939 === (2))){
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(4),from);
} else {
if((state_val_29939 === (1))){
var state_29938__$1 = state_29938;
var statearr_29949_30059 = state_29938__$1;
(statearr_29949_30059[(2)] = null);

(statearr_29949_30059[(1)] = (2));


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
});})(c__7040__auto___30053,jobs,results,process,async))
;
return ((function (switch__6984__auto__,c__7040__auto___30053,jobs,results,process,async){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29953[(0)] = state_machine__6985__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var state_machine__6985__auto____1 = (function (state_29938){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e29954){if((e29954 instanceof Object)){
var ex__6988__auto__ = e29954;
var statearr_29955_30060 = state_29938;
(statearr_29955_30060[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30061 = state_29938;
state_29938 = G__30061;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29938){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___30053,jobs,results,process,async))
})();
var state__7042__auto__ = (function (){var statearr_29956 = f__7041__auto__.call(null);
(statearr_29956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30053);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___30053,jobs,results,process,async))
);


var c__7040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto__,jobs,results,process,async){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto__,jobs,results,process,async){
return (function (state_29994){
var state_val_29995 = (state_29994[(1)]);
if((state_val_29995 === (7))){
var inst_29990 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_29996_30062 = state_29994__$1;
(statearr_29996_30062[(2)] = inst_29990);

(statearr_29996_30062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (20))){
var state_29994__$1 = state_29994;
var statearr_29997_30063 = state_29994__$1;
(statearr_29997_30063[(2)] = null);

(statearr_29997_30063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (1))){
var state_29994__$1 = state_29994;
var statearr_29998_30064 = state_29994__$1;
(statearr_29998_30064[(2)] = null);

(statearr_29998_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (4))){
var inst_29959 = (state_29994[(7)]);
var inst_29959__$1 = (state_29994[(2)]);
var inst_29960 = (inst_29959__$1 == null);
var state_29994__$1 = (function (){var statearr_29999 = state_29994;
(statearr_29999[(7)] = inst_29959__$1);

return statearr_29999;
})();
if(cljs.core.truth_(inst_29960)){
var statearr_30000_30065 = state_29994__$1;
(statearr_30000_30065[(1)] = (5));

} else {
var statearr_30001_30066 = state_29994__$1;
(statearr_30001_30066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (15))){
var inst_29972 = (state_29994[(8)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29994__$1,(18),to,inst_29972);
} else {
if((state_val_29995 === (21))){
var inst_29985 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_30002_30067 = state_29994__$1;
(statearr_30002_30067[(2)] = inst_29985);

(statearr_30002_30067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (13))){
var inst_29987 = (state_29994[(2)]);
var state_29994__$1 = (function (){var statearr_30003 = state_29994;
(statearr_30003[(9)] = inst_29987);

return statearr_30003;
})();
var statearr_30004_30068 = state_29994__$1;
(statearr_30004_30068[(2)] = null);

(statearr_30004_30068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (6))){
var inst_29959 = (state_29994[(7)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(11),inst_29959);
} else {
if((state_val_29995 === (17))){
var inst_29980 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
if(cljs.core.truth_(inst_29980)){
var statearr_30005_30069 = state_29994__$1;
(statearr_30005_30069[(1)] = (19));

} else {
var statearr_30006_30070 = state_29994__$1;
(statearr_30006_30070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (3))){
var inst_29992 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29994__$1,inst_29992);
} else {
if((state_val_29995 === (12))){
var inst_29969 = (state_29994[(10)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(14),inst_29969);
} else {
if((state_val_29995 === (2))){
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(4),results);
} else {
if((state_val_29995 === (19))){
var state_29994__$1 = state_29994;
var statearr_30007_30071 = state_29994__$1;
(statearr_30007_30071[(2)] = null);

(statearr_30007_30071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (11))){
var inst_29969 = (state_29994[(2)]);
var state_29994__$1 = (function (){var statearr_30008 = state_29994;
(statearr_30008[(10)] = inst_29969);

return statearr_30008;
})();
var statearr_30009_30072 = state_29994__$1;
(statearr_30009_30072[(2)] = null);

(statearr_30009_30072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (9))){
var state_29994__$1 = state_29994;
var statearr_30010_30073 = state_29994__$1;
(statearr_30010_30073[(2)] = null);

(statearr_30010_30073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (5))){
var state_29994__$1 = state_29994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30011_30074 = state_29994__$1;
(statearr_30011_30074[(1)] = (8));

} else {
var statearr_30012_30075 = state_29994__$1;
(statearr_30012_30075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (14))){
var inst_29972 = (state_29994[(8)]);
var inst_29974 = (state_29994[(11)]);
var inst_29972__$1 = (state_29994[(2)]);
var inst_29973 = (inst_29972__$1 == null);
var inst_29974__$1 = cljs.core.not.call(null,inst_29973);
var state_29994__$1 = (function (){var statearr_30013 = state_29994;
(statearr_30013[(8)] = inst_29972__$1);

(statearr_30013[(11)] = inst_29974__$1);

return statearr_30013;
})();
if(inst_29974__$1){
var statearr_30014_30076 = state_29994__$1;
(statearr_30014_30076[(1)] = (15));

} else {
var statearr_30015_30077 = state_29994__$1;
(statearr_30015_30077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (16))){
var inst_29974 = (state_29994[(11)]);
var state_29994__$1 = state_29994;
var statearr_30016_30078 = state_29994__$1;
(statearr_30016_30078[(2)] = inst_29974);

(statearr_30016_30078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (10))){
var inst_29966 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_30017_30079 = state_29994__$1;
(statearr_30017_30079[(2)] = inst_29966);

(statearr_30017_30079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (18))){
var inst_29977 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_30018_30080 = state_29994__$1;
(statearr_30018_30080[(2)] = inst_29977);

(statearr_30018_30080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (8))){
var inst_29963 = cljs.core.async.close_BANG_.call(null,to);
var state_29994__$1 = state_29994;
var statearr_30019_30081 = state_29994__$1;
(statearr_30019_30081[(2)] = inst_29963);

(statearr_30019_30081[(1)] = (10));


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
});})(c__7040__auto__,jobs,results,process,async))
;
return ((function (switch__6984__auto__,c__7040__auto__,jobs,results,process,async){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_30023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30023[(0)] = state_machine__6985__auto__);

(statearr_30023[(1)] = (1));

return statearr_30023;
});
var state_machine__6985__auto____1 = (function (state_29994){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_29994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e30024){if((e30024 instanceof Object)){
var ex__6988__auto__ = e30024;
var statearr_30025_30082 = state_29994;
(statearr_30025_30082[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30083 = state_29994;
state_29994 = G__30083;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_29994){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_29994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto__,jobs,results,process,async))
})();
var state__7042__auto__ = (function (){var statearr_30026 = f__7041__auto__.call(null);
(statearr_30026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto__);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto__,jobs,results,process,async))
);

return c__7040__auto__;
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
var c__7040__auto___30184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___30184,tc,fc){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___30184,tc,fc){
return (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (7))){
var inst_30155 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30161_30185 = state_30159__$1;
(statearr_30161_30185[(2)] = inst_30155);

(statearr_30161_30185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (1))){
var state_30159__$1 = state_30159;
var statearr_30162_30186 = state_30159__$1;
(statearr_30162_30186[(2)] = null);

(statearr_30162_30186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (4))){
var inst_30136 = (state_30159[(7)]);
var inst_30136__$1 = (state_30159[(2)]);
var inst_30137 = (inst_30136__$1 == null);
var state_30159__$1 = (function (){var statearr_30163 = state_30159;
(statearr_30163[(7)] = inst_30136__$1);

return statearr_30163;
})();
if(cljs.core.truth_(inst_30137)){
var statearr_30164_30187 = state_30159__$1;
(statearr_30164_30187[(1)] = (5));

} else {
var statearr_30165_30188 = state_30159__$1;
(statearr_30165_30188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (13))){
var state_30159__$1 = state_30159;
var statearr_30166_30189 = state_30159__$1;
(statearr_30166_30189[(2)] = null);

(statearr_30166_30189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (6))){
var inst_30136 = (state_30159[(7)]);
var inst_30142 = p.call(null,inst_30136);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30142)){
var statearr_30167_30190 = state_30159__$1;
(statearr_30167_30190[(1)] = (9));

} else {
var statearr_30168_30191 = state_30159__$1;
(statearr_30168_30191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (3))){
var inst_30157 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
if((state_val_30160 === (12))){
var state_30159__$1 = state_30159;
var statearr_30169_30192 = state_30159__$1;
(statearr_30169_30192[(2)] = null);

(statearr_30169_30192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (2))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30159__$1,(4),ch);
} else {
if((state_val_30160 === (11))){
var inst_30136 = (state_30159[(7)]);
var inst_30146 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30159__$1,(8),inst_30146,inst_30136);
} else {
if((state_val_30160 === (9))){
var state_30159__$1 = state_30159;
var statearr_30170_30193 = state_30159__$1;
(statearr_30170_30193[(2)] = tc);

(statearr_30170_30193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (5))){
var inst_30139 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30140 = cljs.core.async.close_BANG_.call(null,fc);
var state_30159__$1 = (function (){var statearr_30171 = state_30159;
(statearr_30171[(8)] = inst_30139);

return statearr_30171;
})();
var statearr_30172_30194 = state_30159__$1;
(statearr_30172_30194[(2)] = inst_30140);

(statearr_30172_30194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (14))){
var inst_30153 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30173_30195 = state_30159__$1;
(statearr_30173_30195[(2)] = inst_30153);

(statearr_30173_30195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (10))){
var state_30159__$1 = state_30159;
var statearr_30174_30196 = state_30159__$1;
(statearr_30174_30196[(2)] = fc);

(statearr_30174_30196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (8))){
var inst_30148 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30148)){
var statearr_30175_30197 = state_30159__$1;
(statearr_30175_30197[(1)] = (12));

} else {
var statearr_30176_30198 = state_30159__$1;
(statearr_30176_30198[(1)] = (13));

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
});})(c__7040__auto___30184,tc,fc))
;
return ((function (switch__6984__auto__,c__7040__auto___30184,tc,fc){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_30180 = [null,null,null,null,null,null,null,null,null];
(statearr_30180[(0)] = state_machine__6985__auto__);

(statearr_30180[(1)] = (1));

return statearr_30180;
});
var state_machine__6985__auto____1 = (function (state_30159){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object)){
var ex__6988__auto__ = e30181;
var statearr_30182_30199 = state_30159;
(statearr_30182_30199[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30200 = state_30159;
state_30159 = G__30200;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___30184,tc,fc))
})();
var state__7042__auto__ = (function (){var statearr_30183 = f__7041__auto__.call(null);
(statearr_30183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30184);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___30184,tc,fc))
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
var c__7040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto__){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto__){
return (function (state_30247){
var state_val_30248 = (state_30247[(1)]);
if((state_val_30248 === (7))){
var inst_30243 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30249_30265 = state_30247__$1;
(statearr_30249_30265[(2)] = inst_30243);

(statearr_30249_30265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (6))){
var inst_30236 = (state_30247[(7)]);
var inst_30233 = (state_30247[(8)]);
var inst_30240 = f.call(null,inst_30233,inst_30236);
var inst_30233__$1 = inst_30240;
var state_30247__$1 = (function (){var statearr_30250 = state_30247;
(statearr_30250[(8)] = inst_30233__$1);

return statearr_30250;
})();
var statearr_30251_30266 = state_30247__$1;
(statearr_30251_30266[(2)] = null);

(statearr_30251_30266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (5))){
var inst_30233 = (state_30247[(8)]);
var state_30247__$1 = state_30247;
var statearr_30252_30267 = state_30247__$1;
(statearr_30252_30267[(2)] = inst_30233);

(statearr_30252_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (4))){
var inst_30236 = (state_30247[(7)]);
var inst_30236__$1 = (state_30247[(2)]);
var inst_30237 = (inst_30236__$1 == null);
var state_30247__$1 = (function (){var statearr_30253 = state_30247;
(statearr_30253[(7)] = inst_30236__$1);

return statearr_30253;
})();
if(cljs.core.truth_(inst_30237)){
var statearr_30254_30268 = state_30247__$1;
(statearr_30254_30268[(1)] = (5));

} else {
var statearr_30255_30269 = state_30247__$1;
(statearr_30255_30269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (3))){
var inst_30245 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30247__$1,inst_30245);
} else {
if((state_val_30248 === (2))){
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30247__$1,(4),ch);
} else {
if((state_val_30248 === (1))){
var inst_30233 = init;
var state_30247__$1 = (function (){var statearr_30256 = state_30247;
(statearr_30256[(8)] = inst_30233);

return statearr_30256;
})();
var statearr_30257_30270 = state_30247__$1;
(statearr_30257_30270[(2)] = null);

(statearr_30257_30270[(1)] = (2));


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
});})(c__7040__auto__))
;
return ((function (switch__6984__auto__,c__7040__auto__){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null,null,null];
(statearr_30261[(0)] = state_machine__6985__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var state_machine__6985__auto____1 = (function (state_30247){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_30247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__6988__auto__ = e30262;
var statearr_30263_30271 = state_30247;
(statearr_30263_30271[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30272 = state_30247;
state_30247 = G__30272;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_30247){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_30247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto__))
})();
var state__7042__auto__ = (function (){var statearr_30264 = f__7041__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto__);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto__))
);

return c__7040__auto__;
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
var c__7040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto__){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto__){
return (function (state_30346){
var state_val_30347 = (state_30346[(1)]);
if((state_val_30347 === (7))){
var inst_30328 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30348_30371 = state_30346__$1;
(statearr_30348_30371[(2)] = inst_30328);

(statearr_30348_30371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (1))){
var inst_30322 = cljs.core.seq.call(null,coll);
var inst_30323 = inst_30322;
var state_30346__$1 = (function (){var statearr_30349 = state_30346;
(statearr_30349[(7)] = inst_30323);

return statearr_30349;
})();
var statearr_30350_30372 = state_30346__$1;
(statearr_30350_30372[(2)] = null);

(statearr_30350_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (4))){
var inst_30323 = (state_30346[(7)]);
var inst_30326 = cljs.core.first.call(null,inst_30323);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30346__$1,(7),ch,inst_30326);
} else {
if((state_val_30347 === (13))){
var inst_30340 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30351_30373 = state_30346__$1;
(statearr_30351_30373[(2)] = inst_30340);

(statearr_30351_30373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (6))){
var inst_30331 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30331)){
var statearr_30352_30374 = state_30346__$1;
(statearr_30352_30374[(1)] = (8));

} else {
var statearr_30353_30375 = state_30346__$1;
(statearr_30353_30375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (3))){
var inst_30344 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30346__$1,inst_30344);
} else {
if((state_val_30347 === (12))){
var state_30346__$1 = state_30346;
var statearr_30354_30376 = state_30346__$1;
(statearr_30354_30376[(2)] = null);

(statearr_30354_30376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (2))){
var inst_30323 = (state_30346[(7)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30323)){
var statearr_30355_30377 = state_30346__$1;
(statearr_30355_30377[(1)] = (4));

} else {
var statearr_30356_30378 = state_30346__$1;
(statearr_30356_30378[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (11))){
var inst_30337 = cljs.core.async.close_BANG_.call(null,ch);
var state_30346__$1 = state_30346;
var statearr_30357_30379 = state_30346__$1;
(statearr_30357_30379[(2)] = inst_30337);

(statearr_30357_30379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (9))){
var state_30346__$1 = state_30346;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30358_30380 = state_30346__$1;
(statearr_30358_30380[(1)] = (11));

} else {
var statearr_30359_30381 = state_30346__$1;
(statearr_30359_30381[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (5))){
var inst_30323 = (state_30346[(7)]);
var state_30346__$1 = state_30346;
var statearr_30360_30382 = state_30346__$1;
(statearr_30360_30382[(2)] = inst_30323);

(statearr_30360_30382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (10))){
var inst_30342 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30361_30383 = state_30346__$1;
(statearr_30361_30383[(2)] = inst_30342);

(statearr_30361_30383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (8))){
var inst_30323 = (state_30346[(7)]);
var inst_30333 = cljs.core.next.call(null,inst_30323);
var inst_30323__$1 = inst_30333;
var state_30346__$1 = (function (){var statearr_30362 = state_30346;
(statearr_30362[(7)] = inst_30323__$1);

return statearr_30362;
})();
var statearr_30363_30384 = state_30346__$1;
(statearr_30363_30384[(2)] = null);

(statearr_30363_30384[(1)] = (2));


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
});})(c__7040__auto__))
;
return ((function (switch__6984__auto__,c__7040__auto__){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_30367 = [null,null,null,null,null,null,null,null];
(statearr_30367[(0)] = state_machine__6985__auto__);

(statearr_30367[(1)] = (1));

return statearr_30367;
});
var state_machine__6985__auto____1 = (function (state_30346){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_30346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e30368){if((e30368 instanceof Object)){
var ex__6988__auto__ = e30368;
var statearr_30369_30385 = state_30346;
(statearr_30369_30385[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30386 = state_30346;
state_30346 = G__30386;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_30346){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_30346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto__))
})();
var state__7042__auto__ = (function (){var statearr_30370 = f__7041__auto__.call(null);
(statearr_30370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto__);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto__))
);

return c__7040__auto__;
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

cljs.core.async.Mux = (function (){var obj30388 = {};
return obj30388;
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


cljs.core.async.Mult = (function (){var obj30390 = {};
return obj30390;
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
if(typeof cljs.core.async.t30612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30612 = (function (cs,ch,mult,meta30613){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30613 = meta30613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30612.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30612.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30612.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30612.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30612.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30614){
var self__ = this;
var _30614__$1 = this;
return self__.meta30613;
});})(cs))
;

cljs.core.async.t30612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30614,meta30613__$1){
var self__ = this;
var _30614__$1 = this;
return (new cljs.core.async.t30612(self__.cs,self__.ch,self__.mult,meta30613__$1));
});})(cs))
;

cljs.core.async.t30612.cljs$lang$type = true;

cljs.core.async.t30612.cljs$lang$ctorStr = "cljs.core.async/t30612";

cljs.core.async.t30612.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t30612");
});})(cs))
;

cljs.core.async.__GT_t30612 = ((function (cs){
return (function __GT_t30612(cs__$1,ch__$1,mult__$1,meta30613){
return (new cljs.core.async.t30612(cs__$1,ch__$1,mult__$1,meta30613));
});})(cs))
;

}

return (new cljs.core.async.t30612(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7040__auto___30833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___30833,cs,m,dchan,dctr,done){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___30833,cs,m,dchan,dctr,done){
return (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (7))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30747_30834 = state_30745__$1;
(statearr_30747_30834[(2)] = inst_30741);

(statearr_30747_30834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (20))){
var inst_30646 = (state_30745[(7)]);
var inst_30656 = cljs.core.first.call(null,inst_30646);
var inst_30657 = cljs.core.nth.call(null,inst_30656,(0),null);
var inst_30658 = cljs.core.nth.call(null,inst_30656,(1),null);
var state_30745__$1 = (function (){var statearr_30748 = state_30745;
(statearr_30748[(8)] = inst_30657);

return statearr_30748;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30749_30835 = state_30745__$1;
(statearr_30749_30835[(1)] = (22));

} else {
var statearr_30750_30836 = state_30745__$1;
(statearr_30750_30836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (27))){
var inst_30688 = (state_30745[(9)]);
var inst_30693 = (state_30745[(10)]);
var inst_30617 = (state_30745[(11)]);
var inst_30686 = (state_30745[(12)]);
var inst_30693__$1 = cljs.core._nth.call(null,inst_30686,inst_30688);
var inst_30694 = cljs.core.async.put_BANG_.call(null,inst_30693__$1,inst_30617,done);
var state_30745__$1 = (function (){var statearr_30751 = state_30745;
(statearr_30751[(10)] = inst_30693__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30752_30837 = state_30745__$1;
(statearr_30752_30837[(1)] = (30));

} else {
var statearr_30753_30838 = state_30745__$1;
(statearr_30753_30838[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (1))){
var state_30745__$1 = state_30745;
var statearr_30754_30839 = state_30745__$1;
(statearr_30754_30839[(2)] = null);

(statearr_30754_30839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (24))){
var inst_30646 = (state_30745[(7)]);
var inst_30663 = (state_30745[(2)]);
var inst_30664 = cljs.core.next.call(null,inst_30646);
var inst_30626 = inst_30664;
var inst_30627 = null;
var inst_30628 = (0);
var inst_30629 = (0);
var state_30745__$1 = (function (){var statearr_30755 = state_30745;
(statearr_30755[(13)] = inst_30663);

(statearr_30755[(14)] = inst_30628);

(statearr_30755[(15)] = inst_30626);

(statearr_30755[(16)] = inst_30629);

(statearr_30755[(17)] = inst_30627);

return statearr_30755;
})();
var statearr_30756_30840 = state_30745__$1;
(statearr_30756_30840[(2)] = null);

(statearr_30756_30840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (39))){
var state_30745__$1 = state_30745;
var statearr_30760_30841 = state_30745__$1;
(statearr_30760_30841[(2)] = null);

(statearr_30760_30841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (4))){
var inst_30617 = (state_30745[(11)]);
var inst_30617__$1 = (state_30745[(2)]);
var inst_30618 = (inst_30617__$1 == null);
var state_30745__$1 = (function (){var statearr_30761 = state_30745;
(statearr_30761[(11)] = inst_30617__$1);

return statearr_30761;
})();
if(cljs.core.truth_(inst_30618)){
var statearr_30762_30842 = state_30745__$1;
(statearr_30762_30842[(1)] = (5));

} else {
var statearr_30763_30843 = state_30745__$1;
(statearr_30763_30843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (15))){
var inst_30628 = (state_30745[(14)]);
var inst_30626 = (state_30745[(15)]);
var inst_30629 = (state_30745[(16)]);
var inst_30627 = (state_30745[(17)]);
var inst_30642 = (state_30745[(2)]);
var inst_30643 = (inst_30629 + (1));
var tmp30757 = inst_30628;
var tmp30758 = inst_30626;
var tmp30759 = inst_30627;
var inst_30626__$1 = tmp30758;
var inst_30627__$1 = tmp30759;
var inst_30628__$1 = tmp30757;
var inst_30629__$1 = inst_30643;
var state_30745__$1 = (function (){var statearr_30764 = state_30745;
(statearr_30764[(14)] = inst_30628__$1);

(statearr_30764[(15)] = inst_30626__$1);

(statearr_30764[(18)] = inst_30642);

(statearr_30764[(16)] = inst_30629__$1);

(statearr_30764[(17)] = inst_30627__$1);

return statearr_30764;
})();
var statearr_30765_30844 = state_30745__$1;
(statearr_30765_30844[(2)] = null);

(statearr_30765_30844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (21))){
var inst_30667 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30769_30845 = state_30745__$1;
(statearr_30769_30845[(2)] = inst_30667);

(statearr_30769_30845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (31))){
var inst_30693 = (state_30745[(10)]);
var inst_30697 = done.call(null,null);
var inst_30698 = cljs.core.async.untap_STAR_.call(null,m,inst_30693);
var state_30745__$1 = (function (){var statearr_30770 = state_30745;
(statearr_30770[(19)] = inst_30697);

return statearr_30770;
})();
var statearr_30771_30846 = state_30745__$1;
(statearr_30771_30846[(2)] = inst_30698);

(statearr_30771_30846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (32))){
var inst_30688 = (state_30745[(9)]);
var inst_30687 = (state_30745[(20)]);
var inst_30685 = (state_30745[(21)]);
var inst_30686 = (state_30745[(12)]);
var inst_30700 = (state_30745[(2)]);
var inst_30701 = (inst_30688 + (1));
var tmp30766 = inst_30687;
var tmp30767 = inst_30685;
var tmp30768 = inst_30686;
var inst_30685__$1 = tmp30767;
var inst_30686__$1 = tmp30768;
var inst_30687__$1 = tmp30766;
var inst_30688__$1 = inst_30701;
var state_30745__$1 = (function (){var statearr_30772 = state_30745;
(statearr_30772[(9)] = inst_30688__$1);

(statearr_30772[(22)] = inst_30700);

(statearr_30772[(20)] = inst_30687__$1);

(statearr_30772[(21)] = inst_30685__$1);

(statearr_30772[(12)] = inst_30686__$1);

return statearr_30772;
})();
var statearr_30773_30847 = state_30745__$1;
(statearr_30773_30847[(2)] = null);

(statearr_30773_30847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (40))){
var inst_30713 = (state_30745[(23)]);
var inst_30717 = done.call(null,null);
var inst_30718 = cljs.core.async.untap_STAR_.call(null,m,inst_30713);
var state_30745__$1 = (function (){var statearr_30774 = state_30745;
(statearr_30774[(24)] = inst_30717);

return statearr_30774;
})();
var statearr_30775_30848 = state_30745__$1;
(statearr_30775_30848[(2)] = inst_30718);

(statearr_30775_30848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (33))){
var inst_30704 = (state_30745[(25)]);
var inst_30706 = cljs.core.chunked_seq_QMARK_.call(null,inst_30704);
var state_30745__$1 = state_30745;
if(inst_30706){
var statearr_30776_30849 = state_30745__$1;
(statearr_30776_30849[(1)] = (36));

} else {
var statearr_30777_30850 = state_30745__$1;
(statearr_30777_30850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (13))){
var inst_30636 = (state_30745[(26)]);
var inst_30639 = cljs.core.async.close_BANG_.call(null,inst_30636);
var state_30745__$1 = state_30745;
var statearr_30778_30851 = state_30745__$1;
(statearr_30778_30851[(2)] = inst_30639);

(statearr_30778_30851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (22))){
var inst_30657 = (state_30745[(8)]);
var inst_30660 = cljs.core.async.close_BANG_.call(null,inst_30657);
var state_30745__$1 = state_30745;
var statearr_30779_30852 = state_30745__$1;
(statearr_30779_30852[(2)] = inst_30660);

(statearr_30779_30852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (36))){
var inst_30704 = (state_30745[(25)]);
var inst_30708 = cljs.core.chunk_first.call(null,inst_30704);
var inst_30709 = cljs.core.chunk_rest.call(null,inst_30704);
var inst_30710 = cljs.core.count.call(null,inst_30708);
var inst_30685 = inst_30709;
var inst_30686 = inst_30708;
var inst_30687 = inst_30710;
var inst_30688 = (0);
var state_30745__$1 = (function (){var statearr_30780 = state_30745;
(statearr_30780[(9)] = inst_30688);

(statearr_30780[(20)] = inst_30687);

(statearr_30780[(21)] = inst_30685);

(statearr_30780[(12)] = inst_30686);

return statearr_30780;
})();
var statearr_30781_30853 = state_30745__$1;
(statearr_30781_30853[(2)] = null);

(statearr_30781_30853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (41))){
var inst_30704 = (state_30745[(25)]);
var inst_30720 = (state_30745[(2)]);
var inst_30721 = cljs.core.next.call(null,inst_30704);
var inst_30685 = inst_30721;
var inst_30686 = null;
var inst_30687 = (0);
var inst_30688 = (0);
var state_30745__$1 = (function (){var statearr_30782 = state_30745;
(statearr_30782[(9)] = inst_30688);

(statearr_30782[(20)] = inst_30687);

(statearr_30782[(21)] = inst_30685);

(statearr_30782[(27)] = inst_30720);

(statearr_30782[(12)] = inst_30686);

return statearr_30782;
})();
var statearr_30783_30854 = state_30745__$1;
(statearr_30783_30854[(2)] = null);

(statearr_30783_30854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (43))){
var state_30745__$1 = state_30745;
var statearr_30784_30855 = state_30745__$1;
(statearr_30784_30855[(2)] = null);

(statearr_30784_30855[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (29))){
var inst_30729 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30785_30856 = state_30745__$1;
(statearr_30785_30856[(2)] = inst_30729);

(statearr_30785_30856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (44))){
var inst_30738 = (state_30745[(2)]);
var state_30745__$1 = (function (){var statearr_30786 = state_30745;
(statearr_30786[(28)] = inst_30738);

return statearr_30786;
})();
var statearr_30787_30857 = state_30745__$1;
(statearr_30787_30857[(2)] = null);

(statearr_30787_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30677 = (state_30745[(29)]);
var inst_30676 = cljs.core.deref.call(null,cs);
var inst_30677__$1 = cljs.core.keys.call(null,inst_30676);
var inst_30678 = cljs.core.count.call(null,inst_30677__$1);
var inst_30679 = cljs.core.reset_BANG_.call(null,dctr,inst_30678);
var inst_30684 = cljs.core.seq.call(null,inst_30677__$1);
var inst_30685 = inst_30684;
var inst_30686 = null;
var inst_30687 = (0);
var inst_30688 = (0);
var state_30745__$1 = (function (){var statearr_30788 = state_30745;
(statearr_30788[(29)] = inst_30677__$1);

(statearr_30788[(9)] = inst_30688);

(statearr_30788[(20)] = inst_30687);

(statearr_30788[(21)] = inst_30685);

(statearr_30788[(30)] = inst_30679);

(statearr_30788[(12)] = inst_30686);

return statearr_30788;
})();
var statearr_30789_30858 = state_30745__$1;
(statearr_30789_30858[(2)] = null);

(statearr_30789_30858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (28))){
var inst_30704 = (state_30745[(25)]);
var inst_30685 = (state_30745[(21)]);
var inst_30704__$1 = cljs.core.seq.call(null,inst_30685);
var state_30745__$1 = (function (){var statearr_30790 = state_30745;
(statearr_30790[(25)] = inst_30704__$1);

return statearr_30790;
})();
if(inst_30704__$1){
var statearr_30791_30859 = state_30745__$1;
(statearr_30791_30859[(1)] = (33));

} else {
var statearr_30792_30860 = state_30745__$1;
(statearr_30792_30860[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (25))){
var inst_30688 = (state_30745[(9)]);
var inst_30687 = (state_30745[(20)]);
var inst_30690 = (inst_30688 < inst_30687);
var inst_30691 = inst_30690;
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30691)){
var statearr_30793_30861 = state_30745__$1;
(statearr_30793_30861[(1)] = (27));

} else {
var statearr_30794_30862 = state_30745__$1;
(statearr_30794_30862[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (34))){
var state_30745__$1 = state_30745;
var statearr_30795_30863 = state_30745__$1;
(statearr_30795_30863[(2)] = null);

(statearr_30795_30863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (17))){
var state_30745__$1 = state_30745;
var statearr_30796_30864 = state_30745__$1;
(statearr_30796_30864[(2)] = null);

(statearr_30796_30864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (12))){
var inst_30672 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30797_30865 = state_30745__$1;
(statearr_30797_30865[(2)] = inst_30672);

(statearr_30797_30865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (2))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(4),ch);
} else {
if((state_val_30746 === (23))){
var state_30745__$1 = state_30745;
var statearr_30798_30866 = state_30745__$1;
(statearr_30798_30866[(2)] = null);

(statearr_30798_30866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (35))){
var inst_30727 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30799_30867 = state_30745__$1;
(statearr_30799_30867[(2)] = inst_30727);

(statearr_30799_30867[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (19))){
var inst_30646 = (state_30745[(7)]);
var inst_30650 = cljs.core.chunk_first.call(null,inst_30646);
var inst_30651 = cljs.core.chunk_rest.call(null,inst_30646);
var inst_30652 = cljs.core.count.call(null,inst_30650);
var inst_30626 = inst_30651;
var inst_30627 = inst_30650;
var inst_30628 = inst_30652;
var inst_30629 = (0);
var state_30745__$1 = (function (){var statearr_30800 = state_30745;
(statearr_30800[(14)] = inst_30628);

(statearr_30800[(15)] = inst_30626);

(statearr_30800[(16)] = inst_30629);

(statearr_30800[(17)] = inst_30627);

return statearr_30800;
})();
var statearr_30801_30868 = state_30745__$1;
(statearr_30801_30868[(2)] = null);

(statearr_30801_30868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (11))){
var inst_30626 = (state_30745[(15)]);
var inst_30646 = (state_30745[(7)]);
var inst_30646__$1 = cljs.core.seq.call(null,inst_30626);
var state_30745__$1 = (function (){var statearr_30802 = state_30745;
(statearr_30802[(7)] = inst_30646__$1);

return statearr_30802;
})();
if(inst_30646__$1){
var statearr_30803_30869 = state_30745__$1;
(statearr_30803_30869[(1)] = (16));

} else {
var statearr_30804_30870 = state_30745__$1;
(statearr_30804_30870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (9))){
var inst_30674 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30805_30871 = state_30745__$1;
(statearr_30805_30871[(2)] = inst_30674);

(statearr_30805_30871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (5))){
var inst_30624 = cljs.core.deref.call(null,cs);
var inst_30625 = cljs.core.seq.call(null,inst_30624);
var inst_30626 = inst_30625;
var inst_30627 = null;
var inst_30628 = (0);
var inst_30629 = (0);
var state_30745__$1 = (function (){var statearr_30806 = state_30745;
(statearr_30806[(14)] = inst_30628);

(statearr_30806[(15)] = inst_30626);

(statearr_30806[(16)] = inst_30629);

(statearr_30806[(17)] = inst_30627);

return statearr_30806;
})();
var statearr_30807_30872 = state_30745__$1;
(statearr_30807_30872[(2)] = null);

(statearr_30807_30872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (14))){
var state_30745__$1 = state_30745;
var statearr_30808_30873 = state_30745__$1;
(statearr_30808_30873[(2)] = null);

(statearr_30808_30873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (45))){
var inst_30735 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30809_30874 = state_30745__$1;
(statearr_30809_30874[(2)] = inst_30735);

(statearr_30809_30874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (26))){
var inst_30677 = (state_30745[(29)]);
var inst_30731 = (state_30745[(2)]);
var inst_30732 = cljs.core.seq.call(null,inst_30677);
var state_30745__$1 = (function (){var statearr_30810 = state_30745;
(statearr_30810[(31)] = inst_30731);

return statearr_30810;
})();
if(inst_30732){
var statearr_30811_30875 = state_30745__$1;
(statearr_30811_30875[(1)] = (42));

} else {
var statearr_30812_30876 = state_30745__$1;
(statearr_30812_30876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (16))){
var inst_30646 = (state_30745[(7)]);
var inst_30648 = cljs.core.chunked_seq_QMARK_.call(null,inst_30646);
var state_30745__$1 = state_30745;
if(inst_30648){
var statearr_30813_30877 = state_30745__$1;
(statearr_30813_30877[(1)] = (19));

} else {
var statearr_30814_30878 = state_30745__$1;
(statearr_30814_30878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (38))){
var inst_30724 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30815_30879 = state_30745__$1;
(statearr_30815_30879[(2)] = inst_30724);

(statearr_30815_30879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (30))){
var state_30745__$1 = state_30745;
var statearr_30816_30880 = state_30745__$1;
(statearr_30816_30880[(2)] = null);

(statearr_30816_30880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (10))){
var inst_30629 = (state_30745[(16)]);
var inst_30627 = (state_30745[(17)]);
var inst_30635 = cljs.core._nth.call(null,inst_30627,inst_30629);
var inst_30636 = cljs.core.nth.call(null,inst_30635,(0),null);
var inst_30637 = cljs.core.nth.call(null,inst_30635,(1),null);
var state_30745__$1 = (function (){var statearr_30817 = state_30745;
(statearr_30817[(26)] = inst_30636);

return statearr_30817;
})();
if(cljs.core.truth_(inst_30637)){
var statearr_30818_30881 = state_30745__$1;
(statearr_30818_30881[(1)] = (13));

} else {
var statearr_30819_30882 = state_30745__$1;
(statearr_30819_30882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (18))){
var inst_30670 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30820_30883 = state_30745__$1;
(statearr_30820_30883[(2)] = inst_30670);

(statearr_30820_30883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (42))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(45),dchan);
} else {
if((state_val_30746 === (37))){
var inst_30704 = (state_30745[(25)]);
var inst_30713 = (state_30745[(23)]);
var inst_30617 = (state_30745[(11)]);
var inst_30713__$1 = cljs.core.first.call(null,inst_30704);
var inst_30714 = cljs.core.async.put_BANG_.call(null,inst_30713__$1,inst_30617,done);
var state_30745__$1 = (function (){var statearr_30821 = state_30745;
(statearr_30821[(23)] = inst_30713__$1);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30714)){
var statearr_30822_30884 = state_30745__$1;
(statearr_30822_30884[(1)] = (39));

} else {
var statearr_30823_30885 = state_30745__$1;
(statearr_30823_30885[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (8))){
var inst_30628 = (state_30745[(14)]);
var inst_30629 = (state_30745[(16)]);
var inst_30631 = (inst_30629 < inst_30628);
var inst_30632 = inst_30631;
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30632)){
var statearr_30824_30886 = state_30745__$1;
(statearr_30824_30886[(1)] = (10));

} else {
var statearr_30825_30887 = state_30745__$1;
(statearr_30825_30887[(1)] = (11));

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
});})(c__7040__auto___30833,cs,m,dchan,dctr,done))
;
return ((function (switch__6984__auto__,c__7040__auto___30833,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = state_machine__6985__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var state_machine__6985__auto____1 = (function (state_30745){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_30745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__6988__auto__ = e30830;
var statearr_30831_30888 = state_30745;
(statearr_30831_30888[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30889 = state_30745;
state_30745 = G__30889;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___30833,cs,m,dchan,dctr,done))
})();
var state__7042__auto__ = (function (){var statearr_30832 = f__7041__auto__.call(null);
(statearr_30832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___30833);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___30833,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj30891 = {};
return obj30891;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30892){
var map__30897 = p__30892;
var map__30897__$1 = ((cljs.core.seq_QMARK_.call(null,map__30897))?cljs.core.apply.call(null,cljs.core.hash_map,map__30897):map__30897);
var opts = map__30897__$1;
var statearr_30898_30901 = state;
(statearr_30898_30901[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30897,map__30897__$1,opts){
return (function (val){
var statearr_30899_30902 = state;
(statearr_30899_30902[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30897,map__30897__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30900_30903 = state;
(statearr_30900_30903[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30892 = null;
if (arguments.length > 3) {
  p__30892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30892);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30904){
var state = cljs.core.first(arglist__30904);
arglist__30904 = cljs.core.next(arglist__30904);
var cont_block = cljs.core.first(arglist__30904);
arglist__30904 = cljs.core.next(arglist__30904);
var ports = cljs.core.first(arglist__30904);
var p__30892 = cljs.core.rest(arglist__30904);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30892);
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
if(typeof cljs.core.async.t31024 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31024 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31025){
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
this.meta31025 = meta31025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31024.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31026){
var self__ = this;
var _31026__$1 = this;
return self__.meta31025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31026,meta31025__$1){
var self__ = this;
var _31026__$1 = this;
return (new cljs.core.async.t31024(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31024.cljs$lang$type = true;

cljs.core.async.t31024.cljs$lang$ctorStr = "cljs.core.async/t31024";

cljs.core.async.t31024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31025){
return (new cljs.core.async.t31024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31024(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7040__auto___31143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31096){
var state_val_31097 = (state_31096[(1)]);
if((state_val_31097 === (7))){
var inst_31040 = (state_31096[(7)]);
var inst_31045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31040);
var state_31096__$1 = state_31096;
var statearr_31098_31144 = state_31096__$1;
(statearr_31098_31144[(2)] = inst_31045);

(statearr_31098_31144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (20))){
var inst_31055 = (state_31096[(8)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31096__$1,(23),out,inst_31055);
} else {
if((state_val_31097 === (1))){
var inst_31030 = (state_31096[(9)]);
var inst_31030__$1 = calc_state.call(null);
var inst_31031 = cljs.core.seq_QMARK_.call(null,inst_31030__$1);
var state_31096__$1 = (function (){var statearr_31099 = state_31096;
(statearr_31099[(9)] = inst_31030__$1);

return statearr_31099;
})();
if(inst_31031){
var statearr_31100_31145 = state_31096__$1;
(statearr_31100_31145[(1)] = (2));

} else {
var statearr_31101_31146 = state_31096__$1;
(statearr_31101_31146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (24))){
var inst_31048 = (state_31096[(10)]);
var inst_31040 = inst_31048;
var state_31096__$1 = (function (){var statearr_31102 = state_31096;
(statearr_31102[(7)] = inst_31040);

return statearr_31102;
})();
var statearr_31103_31147 = state_31096__$1;
(statearr_31103_31147[(2)] = null);

(statearr_31103_31147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (4))){
var inst_31030 = (state_31096[(9)]);
var inst_31036 = (state_31096[(2)]);
var inst_31037 = cljs.core.get.call(null,inst_31036,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31038 = cljs.core.get.call(null,inst_31036,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31039 = cljs.core.get.call(null,inst_31036,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31040 = inst_31030;
var state_31096__$1 = (function (){var statearr_31104 = state_31096;
(statearr_31104[(11)] = inst_31038);

(statearr_31104[(12)] = inst_31039);

(statearr_31104[(7)] = inst_31040);

(statearr_31104[(13)] = inst_31037);

return statearr_31104;
})();
var statearr_31105_31148 = state_31096__$1;
(statearr_31105_31148[(2)] = null);

(statearr_31105_31148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (15))){
var state_31096__$1 = state_31096;
var statearr_31106_31149 = state_31096__$1;
(statearr_31106_31149[(2)] = null);

(statearr_31106_31149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (21))){
var inst_31048 = (state_31096[(10)]);
var inst_31040 = inst_31048;
var state_31096__$1 = (function (){var statearr_31107 = state_31096;
(statearr_31107[(7)] = inst_31040);

return statearr_31107;
})();
var statearr_31108_31150 = state_31096__$1;
(statearr_31108_31150[(2)] = null);

(statearr_31108_31150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (13))){
var inst_31092 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31109_31151 = state_31096__$1;
(statearr_31109_31151[(2)] = inst_31092);

(statearr_31109_31151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (22))){
var inst_31090 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31110_31152 = state_31096__$1;
(statearr_31110_31152[(2)] = inst_31090);

(statearr_31110_31152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (6))){
var inst_31094 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31096__$1,inst_31094);
} else {
if((state_val_31097 === (25))){
var state_31096__$1 = state_31096;
var statearr_31111_31153 = state_31096__$1;
(statearr_31111_31153[(2)] = null);

(statearr_31111_31153[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (17))){
var inst_31070 = (state_31096[(14)]);
var state_31096__$1 = state_31096;
var statearr_31112_31154 = state_31096__$1;
(statearr_31112_31154[(2)] = inst_31070);

(statearr_31112_31154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (3))){
var inst_31030 = (state_31096[(9)]);
var state_31096__$1 = state_31096;
var statearr_31113_31155 = state_31096__$1;
(statearr_31113_31155[(2)] = inst_31030);

(statearr_31113_31155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (12))){
var inst_31051 = (state_31096[(15)]);
var inst_31056 = (state_31096[(16)]);
var inst_31070 = (state_31096[(14)]);
var inst_31070__$1 = inst_31051.call(null,inst_31056);
var state_31096__$1 = (function (){var statearr_31114 = state_31096;
(statearr_31114[(14)] = inst_31070__$1);

return statearr_31114;
})();
if(cljs.core.truth_(inst_31070__$1)){
var statearr_31115_31156 = state_31096__$1;
(statearr_31115_31156[(1)] = (17));

} else {
var statearr_31116_31157 = state_31096__$1;
(statearr_31116_31157[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (2))){
var inst_31030 = (state_31096[(9)]);
var inst_31033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31030);
var state_31096__$1 = state_31096;
var statearr_31117_31158 = state_31096__$1;
(statearr_31117_31158[(2)] = inst_31033);

(statearr_31117_31158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (23))){
var inst_31081 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31081)){
var statearr_31118_31159 = state_31096__$1;
(statearr_31118_31159[(1)] = (24));

} else {
var statearr_31119_31160 = state_31096__$1;
(statearr_31119_31160[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (19))){
var inst_31078 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31078)){
var statearr_31120_31161 = state_31096__$1;
(statearr_31120_31161[(1)] = (20));

} else {
var statearr_31121_31162 = state_31096__$1;
(statearr_31121_31162[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (11))){
var inst_31055 = (state_31096[(8)]);
var inst_31061 = (inst_31055 == null);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31061)){
var statearr_31122_31163 = state_31096__$1;
(statearr_31122_31163[(1)] = (14));

} else {
var statearr_31123_31164 = state_31096__$1;
(statearr_31123_31164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (9))){
var inst_31048 = (state_31096[(10)]);
var inst_31048__$1 = (state_31096[(2)]);
var inst_31049 = cljs.core.get.call(null,inst_31048__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31050 = cljs.core.get.call(null,inst_31048__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31051 = cljs.core.get.call(null,inst_31048__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31096__$1 = (function (){var statearr_31124 = state_31096;
(statearr_31124[(10)] = inst_31048__$1);

(statearr_31124[(15)] = inst_31051);

(statearr_31124[(17)] = inst_31050);

return statearr_31124;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31096__$1,(10),inst_31049);
} else {
if((state_val_31097 === (5))){
var inst_31040 = (state_31096[(7)]);
var inst_31043 = cljs.core.seq_QMARK_.call(null,inst_31040);
var state_31096__$1 = state_31096;
if(inst_31043){
var statearr_31125_31165 = state_31096__$1;
(statearr_31125_31165[(1)] = (7));

} else {
var statearr_31126_31166 = state_31096__$1;
(statearr_31126_31166[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (14))){
var inst_31056 = (state_31096[(16)]);
var inst_31063 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31056);
var state_31096__$1 = state_31096;
var statearr_31127_31167 = state_31096__$1;
(statearr_31127_31167[(2)] = inst_31063);

(statearr_31127_31167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (26))){
var inst_31086 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31128_31168 = state_31096__$1;
(statearr_31128_31168[(2)] = inst_31086);

(statearr_31128_31168[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (16))){
var inst_31066 = (state_31096[(2)]);
var inst_31067 = calc_state.call(null);
var inst_31040 = inst_31067;
var state_31096__$1 = (function (){var statearr_31129 = state_31096;
(statearr_31129[(18)] = inst_31066);

(statearr_31129[(7)] = inst_31040);

return statearr_31129;
})();
var statearr_31130_31169 = state_31096__$1;
(statearr_31130_31169[(2)] = null);

(statearr_31130_31169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (10))){
var inst_31056 = (state_31096[(16)]);
var inst_31055 = (state_31096[(8)]);
var inst_31054 = (state_31096[(2)]);
var inst_31055__$1 = cljs.core.nth.call(null,inst_31054,(0),null);
var inst_31056__$1 = cljs.core.nth.call(null,inst_31054,(1),null);
var inst_31057 = (inst_31055__$1 == null);
var inst_31058 = cljs.core._EQ_.call(null,inst_31056__$1,change);
var inst_31059 = (inst_31057) || (inst_31058);
var state_31096__$1 = (function (){var statearr_31131 = state_31096;
(statearr_31131[(16)] = inst_31056__$1);

(statearr_31131[(8)] = inst_31055__$1);

return statearr_31131;
})();
if(cljs.core.truth_(inst_31059)){
var statearr_31132_31170 = state_31096__$1;
(statearr_31132_31170[(1)] = (11));

} else {
var statearr_31133_31171 = state_31096__$1;
(statearr_31133_31171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (18))){
var inst_31051 = (state_31096[(15)]);
var inst_31050 = (state_31096[(17)]);
var inst_31056 = (state_31096[(16)]);
var inst_31073 = cljs.core.empty_QMARK_.call(null,inst_31051);
var inst_31074 = inst_31050.call(null,inst_31056);
var inst_31075 = cljs.core.not.call(null,inst_31074);
var inst_31076 = (inst_31073) && (inst_31075);
var state_31096__$1 = state_31096;
var statearr_31134_31172 = state_31096__$1;
(statearr_31134_31172[(2)] = inst_31076);

(statearr_31134_31172[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (8))){
var inst_31040 = (state_31096[(7)]);
var state_31096__$1 = state_31096;
var statearr_31135_31173 = state_31096__$1;
(statearr_31135_31173[(2)] = inst_31040);

(statearr_31135_31173[(1)] = (9));


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
});})(c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6984__auto__,c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31139[(0)] = state_machine__6985__auto__);

(statearr_31139[(1)] = (1));

return statearr_31139;
});
var state_machine__6985__auto____1 = (function (state_31096){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31140){if((e31140 instanceof Object)){
var ex__6988__auto__ = e31140;
var statearr_31141_31174 = state_31096;
(statearr_31141_31174[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_31096;
state_31096 = G__31175;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7042__auto__ = (function (){var statearr_31142 = f__7041__auto__.call(null);
(statearr_31142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31143);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31177 = {};
return obj31177;
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
return (function (p1__31178_SHARP_){
if(cljs.core.truth_(p1__31178_SHARP_.call(null,topic))){
return p1__31178_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31178_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31301 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31301 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31302){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31302 = meta31302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31301.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31301.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31301.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31303){
var self__ = this;
var _31303__$1 = this;
return self__.meta31302;
});})(mults,ensure_mult))
;

cljs.core.async.t31301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31303,meta31302__$1){
var self__ = this;
var _31303__$1 = this;
return (new cljs.core.async.t31301(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31302__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31301.cljs$lang$type = true;

cljs.core.async.t31301.cljs$lang$ctorStr = "cljs.core.async/t31301";

cljs.core.async.t31301.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31301");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31301 = ((function (mults,ensure_mult){
return (function __GT_t31301(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31302){
return (new cljs.core.async.t31301(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31302));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31301(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7040__auto___31423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31423,mults,ensure_mult,p){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31423,mults,ensure_mult,p){
return (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31377_31424 = state_31375__$1;
(statearr_31377_31424[(2)] = inst_31371);

(statearr_31377_31424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (20))){
var state_31375__$1 = state_31375;
var statearr_31378_31425 = state_31375__$1;
(statearr_31378_31425[(2)] = null);

(statearr_31378_31425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var state_31375__$1 = state_31375;
var statearr_31379_31426 = state_31375__$1;
(statearr_31379_31426[(2)] = null);

(statearr_31379_31426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (24))){
var inst_31354 = (state_31375[(7)]);
var inst_31363 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31354);
var state_31375__$1 = state_31375;
var statearr_31380_31427 = state_31375__$1;
(statearr_31380_31427[(2)] = inst_31363);

(statearr_31380_31427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31306 = (state_31375[(8)]);
var inst_31306__$1 = (state_31375[(2)]);
var inst_31307 = (inst_31306__$1 == null);
var state_31375__$1 = (function (){var statearr_31381 = state_31375;
(statearr_31381[(8)] = inst_31306__$1);

return statearr_31381;
})();
if(cljs.core.truth_(inst_31307)){
var statearr_31382_31428 = state_31375__$1;
(statearr_31382_31428[(1)] = (5));

} else {
var statearr_31383_31429 = state_31375__$1;
(statearr_31383_31429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (15))){
var inst_31348 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31384_31430 = state_31375__$1;
(statearr_31384_31430[(2)] = inst_31348);

(statearr_31384_31430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (21))){
var inst_31368 = (state_31375[(2)]);
var state_31375__$1 = (function (){var statearr_31385 = state_31375;
(statearr_31385[(9)] = inst_31368);

return statearr_31385;
})();
var statearr_31386_31431 = state_31375__$1;
(statearr_31386_31431[(2)] = null);

(statearr_31386_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (13))){
var inst_31330 = (state_31375[(10)]);
var inst_31332 = cljs.core.chunked_seq_QMARK_.call(null,inst_31330);
var state_31375__$1 = state_31375;
if(inst_31332){
var statearr_31387_31432 = state_31375__$1;
(statearr_31387_31432[(1)] = (16));

} else {
var statearr_31388_31433 = state_31375__$1;
(statearr_31388_31433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (22))){
var inst_31360 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31360)){
var statearr_31389_31434 = state_31375__$1;
(statearr_31389_31434[(1)] = (23));

} else {
var statearr_31390_31435 = state_31375__$1;
(statearr_31390_31435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var inst_31306 = (state_31375[(8)]);
var inst_31354 = (state_31375[(7)]);
var inst_31356 = (state_31375[(11)]);
var inst_31354__$1 = topic_fn.call(null,inst_31306);
var inst_31355 = cljs.core.deref.call(null,mults);
var inst_31356__$1 = cljs.core.get.call(null,inst_31355,inst_31354__$1);
var state_31375__$1 = (function (){var statearr_31391 = state_31375;
(statearr_31391[(7)] = inst_31354__$1);

(statearr_31391[(11)] = inst_31356__$1);

return statearr_31391;
})();
if(cljs.core.truth_(inst_31356__$1)){
var statearr_31392_31436 = state_31375__$1;
(statearr_31392_31436[(1)] = (19));

} else {
var statearr_31393_31437 = state_31375__$1;
(statearr_31393_31437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (25))){
var inst_31365 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31394_31438 = state_31375__$1;
(statearr_31394_31438[(2)] = inst_31365);

(statearr_31394_31438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (17))){
var inst_31330 = (state_31375[(10)]);
var inst_31339 = cljs.core.first.call(null,inst_31330);
var inst_31340 = cljs.core.async.muxch_STAR_.call(null,inst_31339);
var inst_31341 = cljs.core.async.close_BANG_.call(null,inst_31340);
var inst_31342 = cljs.core.next.call(null,inst_31330);
var inst_31316 = inst_31342;
var inst_31317 = null;
var inst_31318 = (0);
var inst_31319 = (0);
var state_31375__$1 = (function (){var statearr_31395 = state_31375;
(statearr_31395[(12)] = inst_31316);

(statearr_31395[(13)] = inst_31318);

(statearr_31395[(14)] = inst_31319);

(statearr_31395[(15)] = inst_31341);

(statearr_31395[(16)] = inst_31317);

return statearr_31395;
})();
var statearr_31396_31439 = state_31375__$1;
(statearr_31396_31439[(2)] = null);

(statearr_31396_31439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (12))){
var inst_31350 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31397_31440 = state_31375__$1;
(statearr_31397_31440[(2)] = inst_31350);

(statearr_31397_31440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (2))){
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31375__$1,(4),ch);
} else {
if((state_val_31376 === (23))){
var state_31375__$1 = state_31375;
var statearr_31398_31441 = state_31375__$1;
(statearr_31398_31441[(2)] = null);

(statearr_31398_31441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (19))){
var inst_31306 = (state_31375[(8)]);
var inst_31356 = (state_31375[(11)]);
var inst_31358 = cljs.core.async.muxch_STAR_.call(null,inst_31356);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31375__$1,(22),inst_31358,inst_31306);
} else {
if((state_val_31376 === (11))){
var inst_31330 = (state_31375[(10)]);
var inst_31316 = (state_31375[(12)]);
var inst_31330__$1 = cljs.core.seq.call(null,inst_31316);
var state_31375__$1 = (function (){var statearr_31399 = state_31375;
(statearr_31399[(10)] = inst_31330__$1);

return statearr_31399;
})();
if(inst_31330__$1){
var statearr_31400_31442 = state_31375__$1;
(statearr_31400_31442[(1)] = (13));

} else {
var statearr_31401_31443 = state_31375__$1;
(statearr_31401_31443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (9))){
var inst_31352 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31402_31444 = state_31375__$1;
(statearr_31402_31444[(2)] = inst_31352);

(statearr_31402_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var inst_31313 = cljs.core.deref.call(null,mults);
var inst_31314 = cljs.core.vals.call(null,inst_31313);
var inst_31315 = cljs.core.seq.call(null,inst_31314);
var inst_31316 = inst_31315;
var inst_31317 = null;
var inst_31318 = (0);
var inst_31319 = (0);
var state_31375__$1 = (function (){var statearr_31403 = state_31375;
(statearr_31403[(12)] = inst_31316);

(statearr_31403[(13)] = inst_31318);

(statearr_31403[(14)] = inst_31319);

(statearr_31403[(16)] = inst_31317);

return statearr_31403;
})();
var statearr_31404_31445 = state_31375__$1;
(statearr_31404_31445[(2)] = null);

(statearr_31404_31445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (14))){
var state_31375__$1 = state_31375;
var statearr_31408_31446 = state_31375__$1;
(statearr_31408_31446[(2)] = null);

(statearr_31408_31446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (16))){
var inst_31330 = (state_31375[(10)]);
var inst_31334 = cljs.core.chunk_first.call(null,inst_31330);
var inst_31335 = cljs.core.chunk_rest.call(null,inst_31330);
var inst_31336 = cljs.core.count.call(null,inst_31334);
var inst_31316 = inst_31335;
var inst_31317 = inst_31334;
var inst_31318 = inst_31336;
var inst_31319 = (0);
var state_31375__$1 = (function (){var statearr_31409 = state_31375;
(statearr_31409[(12)] = inst_31316);

(statearr_31409[(13)] = inst_31318);

(statearr_31409[(14)] = inst_31319);

(statearr_31409[(16)] = inst_31317);

return statearr_31409;
})();
var statearr_31410_31447 = state_31375__$1;
(statearr_31410_31447[(2)] = null);

(statearr_31410_31447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (10))){
var inst_31316 = (state_31375[(12)]);
var inst_31318 = (state_31375[(13)]);
var inst_31319 = (state_31375[(14)]);
var inst_31317 = (state_31375[(16)]);
var inst_31324 = cljs.core._nth.call(null,inst_31317,inst_31319);
var inst_31325 = cljs.core.async.muxch_STAR_.call(null,inst_31324);
var inst_31326 = cljs.core.async.close_BANG_.call(null,inst_31325);
var inst_31327 = (inst_31319 + (1));
var tmp31405 = inst_31316;
var tmp31406 = inst_31318;
var tmp31407 = inst_31317;
var inst_31316__$1 = tmp31405;
var inst_31317__$1 = tmp31407;
var inst_31318__$1 = tmp31406;
var inst_31319__$1 = inst_31327;
var state_31375__$1 = (function (){var statearr_31411 = state_31375;
(statearr_31411[(12)] = inst_31316__$1);

(statearr_31411[(13)] = inst_31318__$1);

(statearr_31411[(14)] = inst_31319__$1);

(statearr_31411[(17)] = inst_31326);

(statearr_31411[(16)] = inst_31317__$1);

return statearr_31411;
})();
var statearr_31412_31448 = state_31375__$1;
(statearr_31412_31448[(2)] = null);

(statearr_31412_31448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (18))){
var inst_31345 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31413_31449 = state_31375__$1;
(statearr_31413_31449[(2)] = inst_31345);

(statearr_31413_31449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (8))){
var inst_31318 = (state_31375[(13)]);
var inst_31319 = (state_31375[(14)]);
var inst_31321 = (inst_31319 < inst_31318);
var inst_31322 = inst_31321;
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31322)){
var statearr_31414_31450 = state_31375__$1;
(statearr_31414_31450[(1)] = (10));

} else {
var statearr_31415_31451 = state_31375__$1;
(statearr_31415_31451[(1)] = (11));

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
});})(c__7040__auto___31423,mults,ensure_mult,p))
;
return ((function (switch__6984__auto__,c__7040__auto___31423,mults,ensure_mult,p){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31419[(0)] = state_machine__6985__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var state_machine__6985__auto____1 = (function (state_31375){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__6988__auto__ = e31420;
var statearr_31421_31452 = state_31375;
(statearr_31421_31452[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31453 = state_31375;
state_31375 = G__31453;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31423,mults,ensure_mult,p))
})();
var state__7042__auto__ = (function (){var statearr_31422 = f__7041__auto__.call(null);
(statearr_31422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31423);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31423,mults,ensure_mult,p))
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
var c__7040__auto___31590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31560){
var state_val_31561 = (state_31560[(1)]);
if((state_val_31561 === (7))){
var state_31560__$1 = state_31560;
var statearr_31562_31591 = state_31560__$1;
(statearr_31562_31591[(2)] = null);

(statearr_31562_31591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (1))){
var state_31560__$1 = state_31560;
var statearr_31563_31592 = state_31560__$1;
(statearr_31563_31592[(2)] = null);

(statearr_31563_31592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (4))){
var inst_31524 = (state_31560[(7)]);
var inst_31526 = (inst_31524 < cnt);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31526)){
var statearr_31564_31593 = state_31560__$1;
(statearr_31564_31593[(1)] = (6));

} else {
var statearr_31565_31594 = state_31560__$1;
(statearr_31565_31594[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (15))){
var inst_31556 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31566_31595 = state_31560__$1;
(statearr_31566_31595[(2)] = inst_31556);

(statearr_31566_31595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (13))){
var inst_31549 = cljs.core.async.close_BANG_.call(null,out);
var state_31560__$1 = state_31560;
var statearr_31567_31596 = state_31560__$1;
(statearr_31567_31596[(2)] = inst_31549);

(statearr_31567_31596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (6))){
var state_31560__$1 = state_31560;
var statearr_31568_31597 = state_31560__$1;
(statearr_31568_31597[(2)] = null);

(statearr_31568_31597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (3))){
var inst_31558 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31560__$1,inst_31558);
} else {
if((state_val_31561 === (12))){
var inst_31546 = (state_31560[(8)]);
var inst_31546__$1 = (state_31560[(2)]);
var inst_31547 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31546__$1);
var state_31560__$1 = (function (){var statearr_31569 = state_31560;
(statearr_31569[(8)] = inst_31546__$1);

return statearr_31569;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31570_31598 = state_31560__$1;
(statearr_31570_31598[(1)] = (13));

} else {
var statearr_31571_31599 = state_31560__$1;
(statearr_31571_31599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (2))){
var inst_31523 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31524 = (0);
var state_31560__$1 = (function (){var statearr_31572 = state_31560;
(statearr_31572[(9)] = inst_31523);

(statearr_31572[(7)] = inst_31524);

return statearr_31572;
})();
var statearr_31573_31600 = state_31560__$1;
(statearr_31573_31600[(2)] = null);

(statearr_31573_31600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (11))){
var inst_31524 = (state_31560[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31560,(10),Object,null,(9));
var inst_31533 = chs__$1.call(null,inst_31524);
var inst_31534 = done.call(null,inst_31524);
var inst_31535 = cljs.core.async.take_BANG_.call(null,inst_31533,inst_31534);
var state_31560__$1 = state_31560;
var statearr_31574_31601 = state_31560__$1;
(statearr_31574_31601[(2)] = inst_31535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (9))){
var inst_31524 = (state_31560[(7)]);
var inst_31537 = (state_31560[(2)]);
var inst_31538 = (inst_31524 + (1));
var inst_31524__$1 = inst_31538;
var state_31560__$1 = (function (){var statearr_31575 = state_31560;
(statearr_31575[(7)] = inst_31524__$1);

(statearr_31575[(10)] = inst_31537);

return statearr_31575;
})();
var statearr_31576_31602 = state_31560__$1;
(statearr_31576_31602[(2)] = null);

(statearr_31576_31602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (5))){
var inst_31544 = (state_31560[(2)]);
var state_31560__$1 = (function (){var statearr_31577 = state_31560;
(statearr_31577[(11)] = inst_31544);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(12),dchan);
} else {
if((state_val_31561 === (14))){
var inst_31546 = (state_31560[(8)]);
var inst_31551 = cljs.core.apply.call(null,f,inst_31546);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31560__$1,(16),out,inst_31551);
} else {
if((state_val_31561 === (16))){
var inst_31553 = (state_31560[(2)]);
var state_31560__$1 = (function (){var statearr_31578 = state_31560;
(statearr_31578[(12)] = inst_31553);

return statearr_31578;
})();
var statearr_31579_31603 = state_31560__$1;
(statearr_31579_31603[(2)] = null);

(statearr_31579_31603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (10))){
var inst_31528 = (state_31560[(2)]);
var inst_31529 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31560__$1 = (function (){var statearr_31580 = state_31560;
(statearr_31580[(13)] = inst_31528);

return statearr_31580;
})();
var statearr_31581_31604 = state_31560__$1;
(statearr_31581_31604[(2)] = inst_31529);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (8))){
var inst_31542 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31582_31605 = state_31560__$1;
(statearr_31582_31605[(2)] = inst_31542);

(statearr_31582_31605[(1)] = (5));


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
});})(c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6984__auto__,c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31586[(0)] = state_machine__6985__auto__);

(statearr_31586[(1)] = (1));

return statearr_31586;
});
var state_machine__6985__auto____1 = (function (state_31560){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31587){if((e31587 instanceof Object)){
var ex__6988__auto__ = e31587;
var statearr_31588_31606 = state_31560;
(statearr_31588_31606[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31607 = state_31560;
state_31560 = G__31607;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31560){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7042__auto__ = (function (){var statearr_31589 = f__7041__auto__.call(null);
(statearr_31589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31590);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31590,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7040__auto___31715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31715,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31715,out){
return (function (state_31691){
var state_val_31692 = (state_31691[(1)]);
if((state_val_31692 === (7))){
var inst_31670 = (state_31691[(7)]);
var inst_31671 = (state_31691[(8)]);
var inst_31670__$1 = (state_31691[(2)]);
var inst_31671__$1 = cljs.core.nth.call(null,inst_31670__$1,(0),null);
var inst_31672 = cljs.core.nth.call(null,inst_31670__$1,(1),null);
var inst_31673 = (inst_31671__$1 == null);
var state_31691__$1 = (function (){var statearr_31693 = state_31691;
(statearr_31693[(9)] = inst_31672);

(statearr_31693[(7)] = inst_31670__$1);

(statearr_31693[(8)] = inst_31671__$1);

return statearr_31693;
})();
if(cljs.core.truth_(inst_31673)){
var statearr_31694_31716 = state_31691__$1;
(statearr_31694_31716[(1)] = (8));

} else {
var statearr_31695_31717 = state_31691__$1;
(statearr_31695_31717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (1))){
var inst_31662 = cljs.core.vec.call(null,chs);
var inst_31663 = inst_31662;
var state_31691__$1 = (function (){var statearr_31696 = state_31691;
(statearr_31696[(10)] = inst_31663);

return statearr_31696;
})();
var statearr_31697_31718 = state_31691__$1;
(statearr_31697_31718[(2)] = null);

(statearr_31697_31718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (4))){
var inst_31663 = (state_31691[(10)]);
var state_31691__$1 = state_31691;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31691__$1,(7),inst_31663);
} else {
if((state_val_31692 === (6))){
var inst_31687 = (state_31691[(2)]);
var state_31691__$1 = state_31691;
var statearr_31698_31719 = state_31691__$1;
(statearr_31698_31719[(2)] = inst_31687);

(statearr_31698_31719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (3))){
var inst_31689 = (state_31691[(2)]);
var state_31691__$1 = state_31691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31691__$1,inst_31689);
} else {
if((state_val_31692 === (2))){
var inst_31663 = (state_31691[(10)]);
var inst_31665 = cljs.core.count.call(null,inst_31663);
var inst_31666 = (inst_31665 > (0));
var state_31691__$1 = state_31691;
if(cljs.core.truth_(inst_31666)){
var statearr_31700_31720 = state_31691__$1;
(statearr_31700_31720[(1)] = (4));

} else {
var statearr_31701_31721 = state_31691__$1;
(statearr_31701_31721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (11))){
var inst_31663 = (state_31691[(10)]);
var inst_31680 = (state_31691[(2)]);
var tmp31699 = inst_31663;
var inst_31663__$1 = tmp31699;
var state_31691__$1 = (function (){var statearr_31702 = state_31691;
(statearr_31702[(10)] = inst_31663__$1);

(statearr_31702[(11)] = inst_31680);

return statearr_31702;
})();
var statearr_31703_31722 = state_31691__$1;
(statearr_31703_31722[(2)] = null);

(statearr_31703_31722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (9))){
var inst_31671 = (state_31691[(8)]);
var state_31691__$1 = state_31691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31691__$1,(11),out,inst_31671);
} else {
if((state_val_31692 === (5))){
var inst_31685 = cljs.core.async.close_BANG_.call(null,out);
var state_31691__$1 = state_31691;
var statearr_31704_31723 = state_31691__$1;
(statearr_31704_31723[(2)] = inst_31685);

(statearr_31704_31723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (10))){
var inst_31683 = (state_31691[(2)]);
var state_31691__$1 = state_31691;
var statearr_31705_31724 = state_31691__$1;
(statearr_31705_31724[(2)] = inst_31683);

(statearr_31705_31724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (8))){
var inst_31672 = (state_31691[(9)]);
var inst_31670 = (state_31691[(7)]);
var inst_31663 = (state_31691[(10)]);
var inst_31671 = (state_31691[(8)]);
var inst_31675 = (function (){var c = inst_31672;
var v = inst_31671;
var vec__31668 = inst_31670;
var cs = inst_31663;
return ((function (c,v,vec__31668,cs,inst_31672,inst_31670,inst_31663,inst_31671,state_val_31692,c__7040__auto___31715,out){
return (function (p1__31608_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31608_SHARP_);
});
;})(c,v,vec__31668,cs,inst_31672,inst_31670,inst_31663,inst_31671,state_val_31692,c__7040__auto___31715,out))
})();
var inst_31676 = cljs.core.filterv.call(null,inst_31675,inst_31663);
var inst_31663__$1 = inst_31676;
var state_31691__$1 = (function (){var statearr_31706 = state_31691;
(statearr_31706[(10)] = inst_31663__$1);

return statearr_31706;
})();
var statearr_31707_31725 = state_31691__$1;
(statearr_31707_31725[(2)] = null);

(statearr_31707_31725[(1)] = (2));


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
});})(c__7040__auto___31715,out))
;
return ((function (switch__6984__auto__,c__7040__auto___31715,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31711[(0)] = state_machine__6985__auto__);

(statearr_31711[(1)] = (1));

return statearr_31711;
});
var state_machine__6985__auto____1 = (function (state_31691){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31712){if((e31712 instanceof Object)){
var ex__6988__auto__ = e31712;
var statearr_31713_31726 = state_31691;
(statearr_31713_31726[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31727 = state_31691;
state_31691 = G__31727;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31691){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31715,out))
})();
var state__7042__auto__ = (function (){var statearr_31714 = f__7041__auto__.call(null);
(statearr_31714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31715);

return statearr_31714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31715,out))
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
var c__7040__auto___31820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31820,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31820,out){
return (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (7))){
var inst_31779 = (state_31797[(7)]);
var inst_31779__$1 = (state_31797[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var inst_31781 = cljs.core.not.call(null,inst_31780);
var state_31797__$1 = (function (){var statearr_31799 = state_31797;
(statearr_31799[(7)] = inst_31779__$1);

return statearr_31799;
})();
if(inst_31781){
var statearr_31800_31821 = state_31797__$1;
(statearr_31800_31821[(1)] = (8));

} else {
var statearr_31801_31822 = state_31797__$1;
(statearr_31801_31822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (1))){
var inst_31774 = (0);
var state_31797__$1 = (function (){var statearr_31802 = state_31797;
(statearr_31802[(8)] = inst_31774);

return statearr_31802;
})();
var statearr_31803_31823 = state_31797__$1;
(statearr_31803_31823[(2)] = null);

(statearr_31803_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (4))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(7),ch);
} else {
if((state_val_31798 === (6))){
var inst_31792 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31804_31824 = state_31797__$1;
(statearr_31804_31824[(2)] = inst_31792);

(statearr_31804_31824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (3))){
var inst_31794 = (state_31797[(2)]);
var inst_31795 = cljs.core.async.close_BANG_.call(null,out);
var state_31797__$1 = (function (){var statearr_31805 = state_31797;
(statearr_31805[(9)] = inst_31794);

return statearr_31805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (2))){
var inst_31774 = (state_31797[(8)]);
var inst_31776 = (inst_31774 < n);
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31776)){
var statearr_31806_31825 = state_31797__$1;
(statearr_31806_31825[(1)] = (4));

} else {
var statearr_31807_31826 = state_31797__$1;
(statearr_31807_31826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (11))){
var inst_31774 = (state_31797[(8)]);
var inst_31784 = (state_31797[(2)]);
var inst_31785 = (inst_31774 + (1));
var inst_31774__$1 = inst_31785;
var state_31797__$1 = (function (){var statearr_31808 = state_31797;
(statearr_31808[(8)] = inst_31774__$1);

(statearr_31808[(10)] = inst_31784);

return statearr_31808;
})();
var statearr_31809_31827 = state_31797__$1;
(statearr_31809_31827[(2)] = null);

(statearr_31809_31827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (9))){
var state_31797__$1 = state_31797;
var statearr_31810_31828 = state_31797__$1;
(statearr_31810_31828[(2)] = null);

(statearr_31810_31828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (5))){
var state_31797__$1 = state_31797;
var statearr_31811_31829 = state_31797__$1;
(statearr_31811_31829[(2)] = null);

(statearr_31811_31829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (10))){
var inst_31789 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31812_31830 = state_31797__$1;
(statearr_31812_31830[(2)] = inst_31789);

(statearr_31812_31830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31779 = (state_31797[(7)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31797__$1,(11),out,inst_31779);
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
});})(c__7040__auto___31820,out))
;
return ((function (switch__6984__auto__,c__7040__auto___31820,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31816[(0)] = state_machine__6985__auto__);

(statearr_31816[(1)] = (1));

return statearr_31816;
});
var state_machine__6985__auto____1 = (function (state_31797){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31817){if((e31817 instanceof Object)){
var ex__6988__auto__ = e31817;
var statearr_31818_31831 = state_31797;
(statearr_31818_31831[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31832 = state_31797;
state_31797 = G__31832;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31820,out))
})();
var state__7042__auto__ = (function (){var statearr_31819 = f__7041__auto__.call(null);
(statearr_31819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31820);

return statearr_31819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31820,out))
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
if(typeof cljs.core.async.t31840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31840 = (function (ch,f,map_LT_,meta31841){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31841 = meta31841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31843 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31843 = (function (fn1,_,meta31841,map_LT_,f,ch,meta31844){
this.fn1 = fn1;
this._ = _;
this.meta31841 = meta31841;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31844 = meta31844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31833_SHARP_){
return f1.call(null,(((p1__31833_SHARP_ == null))?null:self__.f.call(null,p1__31833_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31845){
var self__ = this;
var _31845__$1 = this;
return self__.meta31844;
});})(___$1))
;

cljs.core.async.t31843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31845,meta31844__$1){
var self__ = this;
var _31845__$1 = this;
return (new cljs.core.async.t31843(self__.fn1,self__._,self__.meta31841,self__.map_LT_,self__.f,self__.ch,meta31844__$1));
});})(___$1))
;

cljs.core.async.t31843.cljs$lang$type = true;

cljs.core.async.t31843.cljs$lang$ctorStr = "cljs.core.async/t31843";

cljs.core.async.t31843.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31843");
});})(___$1))
;

cljs.core.async.__GT_t31843 = ((function (___$1){
return (function __GT_t31843(fn1__$1,___$2,meta31841__$1,map_LT___$1,f__$1,ch__$1,meta31844){
return (new cljs.core.async.t31843(fn1__$1,___$2,meta31841__$1,map_LT___$1,f__$1,ch__$1,meta31844));
});})(___$1))
;

}

return (new cljs.core.async.t31843(fn1,___$1,self__.meta31841,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31840.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31842){
var self__ = this;
var _31842__$1 = this;
return self__.meta31841;
});

cljs.core.async.t31840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31842,meta31841__$1){
var self__ = this;
var _31842__$1 = this;
return (new cljs.core.async.t31840(self__.ch,self__.f,self__.map_LT_,meta31841__$1));
});

cljs.core.async.t31840.cljs$lang$type = true;

cljs.core.async.t31840.cljs$lang$ctorStr = "cljs.core.async/t31840";

cljs.core.async.t31840.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31840");
});

cljs.core.async.__GT_t31840 = (function __GT_t31840(ch__$1,f__$1,map_LT___$1,meta31841){
return (new cljs.core.async.t31840(ch__$1,f__$1,map_LT___$1,meta31841));
});

}

return (new cljs.core.async.t31840(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31849 = (function (ch,f,map_GT_,meta31850){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31850 = meta31850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31851){
var self__ = this;
var _31851__$1 = this;
return self__.meta31850;
});

cljs.core.async.t31849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31851,meta31850__$1){
var self__ = this;
var _31851__$1 = this;
return (new cljs.core.async.t31849(self__.ch,self__.f,self__.map_GT_,meta31850__$1));
});

cljs.core.async.t31849.cljs$lang$type = true;

cljs.core.async.t31849.cljs$lang$ctorStr = "cljs.core.async/t31849";

cljs.core.async.t31849.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31849");
});

cljs.core.async.__GT_t31849 = (function __GT_t31849(ch__$1,f__$1,map_GT___$1,meta31850){
return (new cljs.core.async.t31849(ch__$1,f__$1,map_GT___$1,meta31850));
});

}

return (new cljs.core.async.t31849(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31855 = (function (ch,p,filter_GT_,meta31856){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31856 = meta31856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31857){
var self__ = this;
var _31857__$1 = this;
return self__.meta31856;
});

cljs.core.async.t31855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31857,meta31856__$1){
var self__ = this;
var _31857__$1 = this;
return (new cljs.core.async.t31855(self__.ch,self__.p,self__.filter_GT_,meta31856__$1));
});

cljs.core.async.t31855.cljs$lang$type = true;

cljs.core.async.t31855.cljs$lang$ctorStr = "cljs.core.async/t31855";

cljs.core.async.t31855.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t31855");
});

cljs.core.async.__GT_t31855 = (function __GT_t31855(ch__$1,p__$1,filter_GT___$1,meta31856){
return (new cljs.core.async.t31855(ch__$1,p__$1,filter_GT___$1,meta31856));
});

}

return (new cljs.core.async.t31855(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7040__auto___31940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___31940,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___31940,out){
return (function (state_31919){
var state_val_31920 = (state_31919[(1)]);
if((state_val_31920 === (7))){
var inst_31915 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
var statearr_31921_31941 = state_31919__$1;
(statearr_31921_31941[(2)] = inst_31915);

(statearr_31921_31941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (1))){
var state_31919__$1 = state_31919;
var statearr_31922_31942 = state_31919__$1;
(statearr_31922_31942[(2)] = null);

(statearr_31922_31942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (4))){
var inst_31901 = (state_31919[(7)]);
var inst_31901__$1 = (state_31919[(2)]);
var inst_31902 = (inst_31901__$1 == null);
var state_31919__$1 = (function (){var statearr_31923 = state_31919;
(statearr_31923[(7)] = inst_31901__$1);

return statearr_31923;
})();
if(cljs.core.truth_(inst_31902)){
var statearr_31924_31943 = state_31919__$1;
(statearr_31924_31943[(1)] = (5));

} else {
var statearr_31925_31944 = state_31919__$1;
(statearr_31925_31944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (6))){
var inst_31901 = (state_31919[(7)]);
var inst_31906 = p.call(null,inst_31901);
var state_31919__$1 = state_31919;
if(cljs.core.truth_(inst_31906)){
var statearr_31926_31945 = state_31919__$1;
(statearr_31926_31945[(1)] = (8));

} else {
var statearr_31927_31946 = state_31919__$1;
(statearr_31927_31946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (3))){
var inst_31917 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31919__$1,inst_31917);
} else {
if((state_val_31920 === (2))){
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31919__$1,(4),ch);
} else {
if((state_val_31920 === (11))){
var inst_31909 = (state_31919[(2)]);
var state_31919__$1 = state_31919;
var statearr_31928_31947 = state_31919__$1;
(statearr_31928_31947[(2)] = inst_31909);

(statearr_31928_31947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (9))){
var state_31919__$1 = state_31919;
var statearr_31929_31948 = state_31919__$1;
(statearr_31929_31948[(2)] = null);

(statearr_31929_31948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (5))){
var inst_31904 = cljs.core.async.close_BANG_.call(null,out);
var state_31919__$1 = state_31919;
var statearr_31930_31949 = state_31919__$1;
(statearr_31930_31949[(2)] = inst_31904);

(statearr_31930_31949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (10))){
var inst_31912 = (state_31919[(2)]);
var state_31919__$1 = (function (){var statearr_31931 = state_31919;
(statearr_31931[(8)] = inst_31912);

return statearr_31931;
})();
var statearr_31932_31950 = state_31919__$1;
(statearr_31932_31950[(2)] = null);

(statearr_31932_31950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31920 === (8))){
var inst_31901 = (state_31919[(7)]);
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31919__$1,(11),out,inst_31901);
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
});})(c__7040__auto___31940,out))
;
return ((function (switch__6984__auto__,c__7040__auto___31940,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_31936 = [null,null,null,null,null,null,null,null,null];
(statearr_31936[(0)] = state_machine__6985__auto__);

(statearr_31936[(1)] = (1));

return statearr_31936;
});
var state_machine__6985__auto____1 = (function (state_31919){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_31919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e31937){if((e31937 instanceof Object)){
var ex__6988__auto__ = e31937;
var statearr_31938_31951 = state_31919;
(statearr_31938_31951[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31952 = state_31919;
state_31919 = G__31952;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_31919){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_31919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___31940,out))
})();
var state__7042__auto__ = (function (){var statearr_31939 = f__7041__auto__.call(null);
(statearr_31939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___31940);

return statearr_31939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___31940,out))
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
var c__7040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto__){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto__){
return (function (state_32118){
var state_val_32119 = (state_32118[(1)]);
if((state_val_32119 === (7))){
var inst_32114 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32120_32161 = state_32118__$1;
(statearr_32120_32161[(2)] = inst_32114);

(statearr_32120_32161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (20))){
var inst_32084 = (state_32118[(7)]);
var inst_32095 = (state_32118[(2)]);
var inst_32096 = cljs.core.next.call(null,inst_32084);
var inst_32070 = inst_32096;
var inst_32071 = null;
var inst_32072 = (0);
var inst_32073 = (0);
var state_32118__$1 = (function (){var statearr_32121 = state_32118;
(statearr_32121[(8)] = inst_32070);

(statearr_32121[(9)] = inst_32072);

(statearr_32121[(10)] = inst_32071);

(statearr_32121[(11)] = inst_32073);

(statearr_32121[(12)] = inst_32095);

return statearr_32121;
})();
var statearr_32122_32162 = state_32118__$1;
(statearr_32122_32162[(2)] = null);

(statearr_32122_32162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (1))){
var state_32118__$1 = state_32118;
var statearr_32123_32163 = state_32118__$1;
(statearr_32123_32163[(2)] = null);

(statearr_32123_32163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (4))){
var inst_32059 = (state_32118[(13)]);
var inst_32059__$1 = (state_32118[(2)]);
var inst_32060 = (inst_32059__$1 == null);
var state_32118__$1 = (function (){var statearr_32124 = state_32118;
(statearr_32124[(13)] = inst_32059__$1);

return statearr_32124;
})();
if(cljs.core.truth_(inst_32060)){
var statearr_32125_32164 = state_32118__$1;
(statearr_32125_32164[(1)] = (5));

} else {
var statearr_32126_32165 = state_32118__$1;
(statearr_32126_32165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (15))){
var state_32118__$1 = state_32118;
var statearr_32130_32166 = state_32118__$1;
(statearr_32130_32166[(2)] = null);

(statearr_32130_32166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (21))){
var state_32118__$1 = state_32118;
var statearr_32131_32167 = state_32118__$1;
(statearr_32131_32167[(2)] = null);

(statearr_32131_32167[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (13))){
var inst_32070 = (state_32118[(8)]);
var inst_32072 = (state_32118[(9)]);
var inst_32071 = (state_32118[(10)]);
var inst_32073 = (state_32118[(11)]);
var inst_32080 = (state_32118[(2)]);
var inst_32081 = (inst_32073 + (1));
var tmp32127 = inst_32070;
var tmp32128 = inst_32072;
var tmp32129 = inst_32071;
var inst_32070__$1 = tmp32127;
var inst_32071__$1 = tmp32129;
var inst_32072__$1 = tmp32128;
var inst_32073__$1 = inst_32081;
var state_32118__$1 = (function (){var statearr_32132 = state_32118;
(statearr_32132[(8)] = inst_32070__$1);

(statearr_32132[(9)] = inst_32072__$1);

(statearr_32132[(10)] = inst_32071__$1);

(statearr_32132[(14)] = inst_32080);

(statearr_32132[(11)] = inst_32073__$1);

return statearr_32132;
})();
var statearr_32133_32168 = state_32118__$1;
(statearr_32133_32168[(2)] = null);

(statearr_32133_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (22))){
var state_32118__$1 = state_32118;
var statearr_32134_32169 = state_32118__$1;
(statearr_32134_32169[(2)] = null);

(statearr_32134_32169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (6))){
var inst_32059 = (state_32118[(13)]);
var inst_32068 = f.call(null,inst_32059);
var inst_32069 = cljs.core.seq.call(null,inst_32068);
var inst_32070 = inst_32069;
var inst_32071 = null;
var inst_32072 = (0);
var inst_32073 = (0);
var state_32118__$1 = (function (){var statearr_32135 = state_32118;
(statearr_32135[(8)] = inst_32070);

(statearr_32135[(9)] = inst_32072);

(statearr_32135[(10)] = inst_32071);

(statearr_32135[(11)] = inst_32073);

return statearr_32135;
})();
var statearr_32136_32170 = state_32118__$1;
(statearr_32136_32170[(2)] = null);

(statearr_32136_32170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (17))){
var inst_32084 = (state_32118[(7)]);
var inst_32088 = cljs.core.chunk_first.call(null,inst_32084);
var inst_32089 = cljs.core.chunk_rest.call(null,inst_32084);
var inst_32090 = cljs.core.count.call(null,inst_32088);
var inst_32070 = inst_32089;
var inst_32071 = inst_32088;
var inst_32072 = inst_32090;
var inst_32073 = (0);
var state_32118__$1 = (function (){var statearr_32137 = state_32118;
(statearr_32137[(8)] = inst_32070);

(statearr_32137[(9)] = inst_32072);

(statearr_32137[(10)] = inst_32071);

(statearr_32137[(11)] = inst_32073);

return statearr_32137;
})();
var statearr_32138_32171 = state_32118__$1;
(statearr_32138_32171[(2)] = null);

(statearr_32138_32171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (3))){
var inst_32116 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32118__$1,inst_32116);
} else {
if((state_val_32119 === (12))){
var inst_32104 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32139_32172 = state_32118__$1;
(statearr_32139_32172[(2)] = inst_32104);

(statearr_32139_32172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (2))){
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32118__$1,(4),in$);
} else {
if((state_val_32119 === (23))){
var inst_32112 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32140_32173 = state_32118__$1;
(statearr_32140_32173[(2)] = inst_32112);

(statearr_32140_32173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (19))){
var inst_32099 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32141_32174 = state_32118__$1;
(statearr_32141_32174[(2)] = inst_32099);

(statearr_32141_32174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (11))){
var inst_32070 = (state_32118[(8)]);
var inst_32084 = (state_32118[(7)]);
var inst_32084__$1 = cljs.core.seq.call(null,inst_32070);
var state_32118__$1 = (function (){var statearr_32142 = state_32118;
(statearr_32142[(7)] = inst_32084__$1);

return statearr_32142;
})();
if(inst_32084__$1){
var statearr_32143_32175 = state_32118__$1;
(statearr_32143_32175[(1)] = (14));

} else {
var statearr_32144_32176 = state_32118__$1;
(statearr_32144_32176[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (9))){
var inst_32106 = (state_32118[(2)]);
var inst_32107 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32118__$1 = (function (){var statearr_32145 = state_32118;
(statearr_32145[(15)] = inst_32106);

return statearr_32145;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32146_32177 = state_32118__$1;
(statearr_32146_32177[(1)] = (21));

} else {
var statearr_32147_32178 = state_32118__$1;
(statearr_32147_32178[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (5))){
var inst_32062 = cljs.core.async.close_BANG_.call(null,out);
var state_32118__$1 = state_32118;
var statearr_32148_32179 = state_32118__$1;
(statearr_32148_32179[(2)] = inst_32062);

(statearr_32148_32179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (14))){
var inst_32084 = (state_32118[(7)]);
var inst_32086 = cljs.core.chunked_seq_QMARK_.call(null,inst_32084);
var state_32118__$1 = state_32118;
if(inst_32086){
var statearr_32149_32180 = state_32118__$1;
(statearr_32149_32180[(1)] = (17));

} else {
var statearr_32150_32181 = state_32118__$1;
(statearr_32150_32181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (16))){
var inst_32102 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32151_32182 = state_32118__$1;
(statearr_32151_32182[(2)] = inst_32102);

(statearr_32151_32182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (10))){
var inst_32071 = (state_32118[(10)]);
var inst_32073 = (state_32118[(11)]);
var inst_32078 = cljs.core._nth.call(null,inst_32071,inst_32073);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32118__$1,(13),out,inst_32078);
} else {
if((state_val_32119 === (18))){
var inst_32084 = (state_32118[(7)]);
var inst_32093 = cljs.core.first.call(null,inst_32084);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32118__$1,(20),out,inst_32093);
} else {
if((state_val_32119 === (8))){
var inst_32072 = (state_32118[(9)]);
var inst_32073 = (state_32118[(11)]);
var inst_32075 = (inst_32073 < inst_32072);
var inst_32076 = inst_32075;
var state_32118__$1 = state_32118;
if(cljs.core.truth_(inst_32076)){
var statearr_32152_32183 = state_32118__$1;
(statearr_32152_32183[(1)] = (10));

} else {
var statearr_32153_32184 = state_32118__$1;
(statearr_32153_32184[(1)] = (11));

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
});})(c__7040__auto__))
;
return ((function (switch__6984__auto__,c__7040__auto__){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = state_machine__6985__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var state_machine__6985__auto____1 = (function (state_32118){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_32118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object)){
var ex__6988__auto__ = e32158;
var statearr_32159_32185 = state_32118;
(statearr_32159_32185[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32186 = state_32118;
state_32118 = G__32186;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_32118){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_32118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto__))
})();
var state__7042__auto__ = (function (){var statearr_32160 = f__7041__auto__.call(null);
(statearr_32160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto__);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto__))
);

return c__7040__auto__;
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
var c__7040__auto___32283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___32283,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___32283,out){
return (function (state_32258){
var state_val_32259 = (state_32258[(1)]);
if((state_val_32259 === (7))){
var inst_32253 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32260_32284 = state_32258__$1;
(statearr_32260_32284[(2)] = inst_32253);

(statearr_32260_32284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (1))){
var inst_32235 = null;
var state_32258__$1 = (function (){var statearr_32261 = state_32258;
(statearr_32261[(7)] = inst_32235);

return statearr_32261;
})();
var statearr_32262_32285 = state_32258__$1;
(statearr_32262_32285[(2)] = null);

(statearr_32262_32285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (4))){
var inst_32238 = (state_32258[(8)]);
var inst_32238__$1 = (state_32258[(2)]);
var inst_32239 = (inst_32238__$1 == null);
var inst_32240 = cljs.core.not.call(null,inst_32239);
var state_32258__$1 = (function (){var statearr_32263 = state_32258;
(statearr_32263[(8)] = inst_32238__$1);

return statearr_32263;
})();
if(inst_32240){
var statearr_32264_32286 = state_32258__$1;
(statearr_32264_32286[(1)] = (5));

} else {
var statearr_32265_32287 = state_32258__$1;
(statearr_32265_32287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (6))){
var state_32258__$1 = state_32258;
var statearr_32266_32288 = state_32258__$1;
(statearr_32266_32288[(2)] = null);

(statearr_32266_32288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (3))){
var inst_32255 = (state_32258[(2)]);
var inst_32256 = cljs.core.async.close_BANG_.call(null,out);
var state_32258__$1 = (function (){var statearr_32267 = state_32258;
(statearr_32267[(9)] = inst_32255);

return statearr_32267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32258__$1,inst_32256);
} else {
if((state_val_32259 === (2))){
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32258__$1,(4),ch);
} else {
if((state_val_32259 === (11))){
var inst_32238 = (state_32258[(8)]);
var inst_32247 = (state_32258[(2)]);
var inst_32235 = inst_32238;
var state_32258__$1 = (function (){var statearr_32268 = state_32258;
(statearr_32268[(10)] = inst_32247);

(statearr_32268[(7)] = inst_32235);

return statearr_32268;
})();
var statearr_32269_32289 = state_32258__$1;
(statearr_32269_32289[(2)] = null);

(statearr_32269_32289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (9))){
var inst_32238 = (state_32258[(8)]);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32258__$1,(11),out,inst_32238);
} else {
if((state_val_32259 === (5))){
var inst_32238 = (state_32258[(8)]);
var inst_32235 = (state_32258[(7)]);
var inst_32242 = cljs.core._EQ_.call(null,inst_32238,inst_32235);
var state_32258__$1 = state_32258;
if(inst_32242){
var statearr_32271_32290 = state_32258__$1;
(statearr_32271_32290[(1)] = (8));

} else {
var statearr_32272_32291 = state_32258__$1;
(statearr_32272_32291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (10))){
var inst_32250 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32273_32292 = state_32258__$1;
(statearr_32273_32292[(2)] = inst_32250);

(statearr_32273_32292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (8))){
var inst_32235 = (state_32258[(7)]);
var tmp32270 = inst_32235;
var inst_32235__$1 = tmp32270;
var state_32258__$1 = (function (){var statearr_32274 = state_32258;
(statearr_32274[(7)] = inst_32235__$1);

return statearr_32274;
})();
var statearr_32275_32293 = state_32258__$1;
(statearr_32275_32293[(2)] = null);

(statearr_32275_32293[(1)] = (2));


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
});})(c__7040__auto___32283,out))
;
return ((function (switch__6984__auto__,c__7040__auto___32283,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_32279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32279[(0)] = state_machine__6985__auto__);

(statearr_32279[(1)] = (1));

return statearr_32279;
});
var state_machine__6985__auto____1 = (function (state_32258){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_32258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object)){
var ex__6988__auto__ = e32280;
var statearr_32281_32294 = state_32258;
(statearr_32281_32294[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32295 = state_32258;
state_32258 = G__32295;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___32283,out))
})();
var state__7042__auto__ = (function (){var statearr_32282 = f__7041__auto__.call(null);
(statearr_32282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___32283);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___32283,out))
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
var c__7040__auto___32430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___32430,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___32430,out){
return (function (state_32400){
var state_val_32401 = (state_32400[(1)]);
if((state_val_32401 === (7))){
var inst_32396 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32402_32431 = state_32400__$1;
(statearr_32402_32431[(2)] = inst_32396);

(statearr_32402_32431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (1))){
var inst_32363 = (new Array(n));
var inst_32364 = inst_32363;
var inst_32365 = (0);
var state_32400__$1 = (function (){var statearr_32403 = state_32400;
(statearr_32403[(7)] = inst_32365);

(statearr_32403[(8)] = inst_32364);

return statearr_32403;
})();
var statearr_32404_32432 = state_32400__$1;
(statearr_32404_32432[(2)] = null);

(statearr_32404_32432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (4))){
var inst_32368 = (state_32400[(9)]);
var inst_32368__$1 = (state_32400[(2)]);
var inst_32369 = (inst_32368__$1 == null);
var inst_32370 = cljs.core.not.call(null,inst_32369);
var state_32400__$1 = (function (){var statearr_32405 = state_32400;
(statearr_32405[(9)] = inst_32368__$1);

return statearr_32405;
})();
if(inst_32370){
var statearr_32406_32433 = state_32400__$1;
(statearr_32406_32433[(1)] = (5));

} else {
var statearr_32407_32434 = state_32400__$1;
(statearr_32407_32434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (15))){
var inst_32390 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32408_32435 = state_32400__$1;
(statearr_32408_32435[(2)] = inst_32390);

(statearr_32408_32435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (13))){
var state_32400__$1 = state_32400;
var statearr_32409_32436 = state_32400__$1;
(statearr_32409_32436[(2)] = null);

(statearr_32409_32436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (6))){
var inst_32365 = (state_32400[(7)]);
var inst_32386 = (inst_32365 > (0));
var state_32400__$1 = state_32400;
if(cljs.core.truth_(inst_32386)){
var statearr_32410_32437 = state_32400__$1;
(statearr_32410_32437[(1)] = (12));

} else {
var statearr_32411_32438 = state_32400__$1;
(statearr_32411_32438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (3))){
var inst_32398 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32400__$1,inst_32398);
} else {
if((state_val_32401 === (12))){
var inst_32364 = (state_32400[(8)]);
var inst_32388 = cljs.core.vec.call(null,inst_32364);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32400__$1,(15),out,inst_32388);
} else {
if((state_val_32401 === (2))){
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32400__$1,(4),ch);
} else {
if((state_val_32401 === (11))){
var inst_32380 = (state_32400[(2)]);
var inst_32381 = (new Array(n));
var inst_32364 = inst_32381;
var inst_32365 = (0);
var state_32400__$1 = (function (){var statearr_32412 = state_32400;
(statearr_32412[(10)] = inst_32380);

(statearr_32412[(7)] = inst_32365);

(statearr_32412[(8)] = inst_32364);

return statearr_32412;
})();
var statearr_32413_32439 = state_32400__$1;
(statearr_32413_32439[(2)] = null);

(statearr_32413_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (9))){
var inst_32364 = (state_32400[(8)]);
var inst_32378 = cljs.core.vec.call(null,inst_32364);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32400__$1,(11),out,inst_32378);
} else {
if((state_val_32401 === (5))){
var inst_32373 = (state_32400[(11)]);
var inst_32368 = (state_32400[(9)]);
var inst_32365 = (state_32400[(7)]);
var inst_32364 = (state_32400[(8)]);
var inst_32372 = (inst_32364[inst_32365] = inst_32368);
var inst_32373__$1 = (inst_32365 + (1));
var inst_32374 = (inst_32373__$1 < n);
var state_32400__$1 = (function (){var statearr_32414 = state_32400;
(statearr_32414[(11)] = inst_32373__$1);

(statearr_32414[(12)] = inst_32372);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32374)){
var statearr_32415_32440 = state_32400__$1;
(statearr_32415_32440[(1)] = (8));

} else {
var statearr_32416_32441 = state_32400__$1;
(statearr_32416_32441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (14))){
var inst_32393 = (state_32400[(2)]);
var inst_32394 = cljs.core.async.close_BANG_.call(null,out);
var state_32400__$1 = (function (){var statearr_32418 = state_32400;
(statearr_32418[(13)] = inst_32393);

return statearr_32418;
})();
var statearr_32419_32442 = state_32400__$1;
(statearr_32419_32442[(2)] = inst_32394);

(statearr_32419_32442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (10))){
var inst_32384 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32420_32443 = state_32400__$1;
(statearr_32420_32443[(2)] = inst_32384);

(statearr_32420_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (8))){
var inst_32373 = (state_32400[(11)]);
var inst_32364 = (state_32400[(8)]);
var tmp32417 = inst_32364;
var inst_32364__$1 = tmp32417;
var inst_32365 = inst_32373;
var state_32400__$1 = (function (){var statearr_32421 = state_32400;
(statearr_32421[(7)] = inst_32365);

(statearr_32421[(8)] = inst_32364__$1);

return statearr_32421;
})();
var statearr_32422_32444 = state_32400__$1;
(statearr_32422_32444[(2)] = null);

(statearr_32422_32444[(1)] = (2));


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
});})(c__7040__auto___32430,out))
;
return ((function (switch__6984__auto__,c__7040__auto___32430,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = state_machine__6985__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var state_machine__6985__auto____1 = (function (state_32400){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_32400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__6988__auto__ = e32427;
var statearr_32428_32445 = state_32400;
(statearr_32428_32445[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32446 = state_32400;
state_32400 = G__32446;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_32400){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_32400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___32430,out))
})();
var state__7042__auto__ = (function (){var statearr_32429 = f__7041__auto__.call(null);
(statearr_32429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___32430);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___32430,out))
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
var c__7040__auto___32589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___32589,out){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___32589,out){
return (function (state_32559){
var state_val_32560 = (state_32559[(1)]);
if((state_val_32560 === (7))){
var inst_32555 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32561_32590 = state_32559__$1;
(statearr_32561_32590[(2)] = inst_32555);

(statearr_32561_32590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (1))){
var inst_32518 = [];
var inst_32519 = inst_32518;
var inst_32520 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32559__$1 = (function (){var statearr_32562 = state_32559;
(statearr_32562[(7)] = inst_32519);

(statearr_32562[(8)] = inst_32520);

return statearr_32562;
})();
var statearr_32563_32591 = state_32559__$1;
(statearr_32563_32591[(2)] = null);

(statearr_32563_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (4))){
var inst_32523 = (state_32559[(9)]);
var inst_32523__$1 = (state_32559[(2)]);
var inst_32524 = (inst_32523__$1 == null);
var inst_32525 = cljs.core.not.call(null,inst_32524);
var state_32559__$1 = (function (){var statearr_32564 = state_32559;
(statearr_32564[(9)] = inst_32523__$1);

return statearr_32564;
})();
if(inst_32525){
var statearr_32565_32592 = state_32559__$1;
(statearr_32565_32592[(1)] = (5));

} else {
var statearr_32566_32593 = state_32559__$1;
(statearr_32566_32593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (15))){
var inst_32549 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32567_32594 = state_32559__$1;
(statearr_32567_32594[(2)] = inst_32549);

(statearr_32567_32594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (13))){
var state_32559__$1 = state_32559;
var statearr_32568_32595 = state_32559__$1;
(statearr_32568_32595[(2)] = null);

(statearr_32568_32595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (6))){
var inst_32519 = (state_32559[(7)]);
var inst_32544 = inst_32519.length;
var inst_32545 = (inst_32544 > (0));
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32545)){
var statearr_32569_32596 = state_32559__$1;
(statearr_32569_32596[(1)] = (12));

} else {
var statearr_32570_32597 = state_32559__$1;
(statearr_32570_32597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (3))){
var inst_32557 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32559__$1,inst_32557);
} else {
if((state_val_32560 === (12))){
var inst_32519 = (state_32559[(7)]);
var inst_32547 = cljs.core.vec.call(null,inst_32519);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32559__$1,(15),out,inst_32547);
} else {
if((state_val_32560 === (2))){
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32559__$1,(4),ch);
} else {
if((state_val_32560 === (11))){
var inst_32527 = (state_32559[(10)]);
var inst_32523 = (state_32559[(9)]);
var inst_32537 = (state_32559[(2)]);
var inst_32538 = [];
var inst_32539 = inst_32538.push(inst_32523);
var inst_32519 = inst_32538;
var inst_32520 = inst_32527;
var state_32559__$1 = (function (){var statearr_32571 = state_32559;
(statearr_32571[(11)] = inst_32537);

(statearr_32571[(12)] = inst_32539);

(statearr_32571[(7)] = inst_32519);

(statearr_32571[(8)] = inst_32520);

return statearr_32571;
})();
var statearr_32572_32598 = state_32559__$1;
(statearr_32572_32598[(2)] = null);

(statearr_32572_32598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (9))){
var inst_32519 = (state_32559[(7)]);
var inst_32535 = cljs.core.vec.call(null,inst_32519);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32559__$1,(11),out,inst_32535);
} else {
if((state_val_32560 === (5))){
var inst_32527 = (state_32559[(10)]);
var inst_32523 = (state_32559[(9)]);
var inst_32520 = (state_32559[(8)]);
var inst_32527__$1 = f.call(null,inst_32523);
var inst_32528 = cljs.core._EQ_.call(null,inst_32527__$1,inst_32520);
var inst_32529 = cljs.core.keyword_identical_QMARK_.call(null,inst_32520,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32530 = (inst_32528) || (inst_32529);
var state_32559__$1 = (function (){var statearr_32573 = state_32559;
(statearr_32573[(10)] = inst_32527__$1);

return statearr_32573;
})();
if(cljs.core.truth_(inst_32530)){
var statearr_32574_32599 = state_32559__$1;
(statearr_32574_32599[(1)] = (8));

} else {
var statearr_32575_32600 = state_32559__$1;
(statearr_32575_32600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (14))){
var inst_32552 = (state_32559[(2)]);
var inst_32553 = cljs.core.async.close_BANG_.call(null,out);
var state_32559__$1 = (function (){var statearr_32577 = state_32559;
(statearr_32577[(13)] = inst_32552);

return statearr_32577;
})();
var statearr_32578_32601 = state_32559__$1;
(statearr_32578_32601[(2)] = inst_32553);

(statearr_32578_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (10))){
var inst_32542 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32579_32602 = state_32559__$1;
(statearr_32579_32602[(2)] = inst_32542);

(statearr_32579_32602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (8))){
var inst_32527 = (state_32559[(10)]);
var inst_32519 = (state_32559[(7)]);
var inst_32523 = (state_32559[(9)]);
var inst_32532 = inst_32519.push(inst_32523);
var tmp32576 = inst_32519;
var inst_32519__$1 = tmp32576;
var inst_32520 = inst_32527;
var state_32559__$1 = (function (){var statearr_32580 = state_32559;
(statearr_32580[(7)] = inst_32519__$1);

(statearr_32580[(14)] = inst_32532);

(statearr_32580[(8)] = inst_32520);

return statearr_32580;
})();
var statearr_32581_32603 = state_32559__$1;
(statearr_32581_32603[(2)] = null);

(statearr_32581_32603[(1)] = (2));


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
});})(c__7040__auto___32589,out))
;
return ((function (switch__6984__auto__,c__7040__auto___32589,out){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_32585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32585[(0)] = state_machine__6985__auto__);

(statearr_32585[(1)] = (1));

return statearr_32585;
});
var state_machine__6985__auto____1 = (function (state_32559){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_32559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e32586){if((e32586 instanceof Object)){
var ex__6988__auto__ = e32586;
var statearr_32587_32604 = state_32559;
(statearr_32587_32604[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32605 = state_32559;
state_32559 = G__32605;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_32559){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_32559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___32589,out))
})();
var state__7042__auto__ = (function (){var statearr_32588 = f__7041__auto__.call(null);
(statearr_32588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___32589);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___32589,out))
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