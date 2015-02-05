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
if(typeof cljs.core.async.t36039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36039 = (function (f,fn_handler,meta36040){
this.f = f;
this.fn_handler = fn_handler;
this.meta36040 = meta36040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36041){
var self__ = this;
var _36041__$1 = this;
return self__.meta36040;
});

cljs.core.async.t36039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36041,meta36040__$1){
var self__ = this;
var _36041__$1 = this;
return (new cljs.core.async.t36039(self__.f,self__.fn_handler,meta36040__$1));
});

cljs.core.async.t36039.cljs$lang$type = true;

cljs.core.async.t36039.cljs$lang$ctorStr = "cljs.core.async/t36039";

cljs.core.async.t36039.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t36039");
});

cljs.core.async.__GT_t36039 = (function __GT_t36039(f__$1,fn_handler__$1,meta36040){
return (new cljs.core.async.t36039(f__$1,fn_handler__$1,meta36040));
});

}

return (new cljs.core.async.t36039(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__36043 = buff;
if(G__36043){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__36043.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36043.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36043);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36043);
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
var val_36044 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36044);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36044,ret){
return (function (){
return fn1.call(null,val_36044);
});})(val_36044,ret))
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
var n__4509__auto___36045 = n;
var x_36046 = (0);
while(true){
if((x_36046 < n__4509__auto___36045)){
(a[x_36046] = (0));

var G__36047 = (x_36046 + (1));
x_36046 = G__36047;
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

var G__36048 = (i + (1));
i = G__36048;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36052 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36052 = (function (flag,alt_flag,meta36053){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36053 = meta36053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36054){
var self__ = this;
var _36054__$1 = this;
return self__.meta36053;
});})(flag))
;

cljs.core.async.t36052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36054,meta36053__$1){
var self__ = this;
var _36054__$1 = this;
return (new cljs.core.async.t36052(self__.flag,self__.alt_flag,meta36053__$1));
});})(flag))
;

cljs.core.async.t36052.cljs$lang$type = true;

cljs.core.async.t36052.cljs$lang$ctorStr = "cljs.core.async/t36052";

cljs.core.async.t36052.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t36052");
});})(flag))
;

cljs.core.async.__GT_t36052 = ((function (flag){
return (function __GT_t36052(flag__$1,alt_flag__$1,meta36053){
return (new cljs.core.async.t36052(flag__$1,alt_flag__$1,meta36053));
});})(flag))
;

}

return (new cljs.core.async.t36052(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t36058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36058 = (function (cb,flag,alt_handler,meta36059){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36059 = meta36059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36060){
var self__ = this;
var _36060__$1 = this;
return self__.meta36059;
});

cljs.core.async.t36058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36060,meta36059__$1){
var self__ = this;
var _36060__$1 = this;
return (new cljs.core.async.t36058(self__.cb,self__.flag,self__.alt_handler,meta36059__$1));
});

cljs.core.async.t36058.cljs$lang$type = true;

cljs.core.async.t36058.cljs$lang$ctorStr = "cljs.core.async/t36058";

cljs.core.async.t36058.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t36058");
});

cljs.core.async.__GT_t36058 = (function __GT_t36058(cb__$1,flag__$1,alt_handler__$1,meta36059){
return (new cljs.core.async.t36058(cb__$1,flag__$1,alt_handler__$1,meta36059));
});

}

return (new cljs.core.async.t36058(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__36061_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36061_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36062_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36062_SHARP_,port], null));
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
var G__36063 = (i + (1));
i = G__36063;
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
var alts_BANG___delegate = function (ports,p__36064){
var map__36066 = p__36064;
var map__36066__$1 = ((cljs.core.seq_QMARK_.call(null,map__36066))?cljs.core.apply.call(null,cljs.core.hash_map,map__36066):map__36066);
var opts = map__36066__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__36064 = null;
if (arguments.length > 1) {
  p__36064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__36064);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36067){
var ports = cljs.core.first(arglist__36067);
var p__36064 = cljs.core.rest(arglist__36067);
return alts_BANG___delegate(ports,p__36064);
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
var c__7043__auto___36162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___36162){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___36162){
return (function (state_36138){
var state_val_36139 = (state_36138[(1)]);
if((state_val_36139 === (7))){
var inst_36134 = (state_36138[(2)]);
var state_36138__$1 = state_36138;
var statearr_36140_36163 = state_36138__$1;
(statearr_36140_36163[(2)] = inst_36134);

(statearr_36140_36163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (1))){
var state_36138__$1 = state_36138;
var statearr_36141_36164 = state_36138__$1;
(statearr_36141_36164[(2)] = null);

(statearr_36141_36164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (4))){
var inst_36117 = (state_36138[(7)]);
var inst_36117__$1 = (state_36138[(2)]);
var inst_36118 = (inst_36117__$1 == null);
var state_36138__$1 = (function (){var statearr_36142 = state_36138;
(statearr_36142[(7)] = inst_36117__$1);

return statearr_36142;
})();
if(cljs.core.truth_(inst_36118)){
var statearr_36143_36165 = state_36138__$1;
(statearr_36143_36165[(1)] = (5));

} else {
var statearr_36144_36166 = state_36138__$1;
(statearr_36144_36166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (13))){
var state_36138__$1 = state_36138;
var statearr_36145_36167 = state_36138__$1;
(statearr_36145_36167[(2)] = null);

(statearr_36145_36167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (6))){
var inst_36117 = (state_36138[(7)]);
var state_36138__$1 = state_36138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36138__$1,(11),to,inst_36117);
} else {
if((state_val_36139 === (3))){
var inst_36136 = (state_36138[(2)]);
var state_36138__$1 = state_36138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36138__$1,inst_36136);
} else {
if((state_val_36139 === (12))){
var state_36138__$1 = state_36138;
var statearr_36146_36168 = state_36138__$1;
(statearr_36146_36168[(2)] = null);

(statearr_36146_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (2))){
var state_36138__$1 = state_36138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36138__$1,(4),from);
} else {
if((state_val_36139 === (11))){
var inst_36127 = (state_36138[(2)]);
var state_36138__$1 = state_36138;
if(cljs.core.truth_(inst_36127)){
var statearr_36147_36169 = state_36138__$1;
(statearr_36147_36169[(1)] = (12));

} else {
var statearr_36148_36170 = state_36138__$1;
(statearr_36148_36170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (9))){
var state_36138__$1 = state_36138;
var statearr_36149_36171 = state_36138__$1;
(statearr_36149_36171[(2)] = null);

(statearr_36149_36171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (5))){
var state_36138__$1 = state_36138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36150_36172 = state_36138__$1;
(statearr_36150_36172[(1)] = (8));

} else {
var statearr_36151_36173 = state_36138__$1;
(statearr_36151_36173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (14))){
var inst_36132 = (state_36138[(2)]);
var state_36138__$1 = state_36138;
var statearr_36152_36174 = state_36138__$1;
(statearr_36152_36174[(2)] = inst_36132);

(statearr_36152_36174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (10))){
var inst_36124 = (state_36138[(2)]);
var state_36138__$1 = state_36138;
var statearr_36153_36175 = state_36138__$1;
(statearr_36153_36175[(2)] = inst_36124);

(statearr_36153_36175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36139 === (8))){
var inst_36121 = cljs.core.async.close_BANG_.call(null,to);
var state_36138__$1 = state_36138;
var statearr_36154_36176 = state_36138__$1;
(statearr_36154_36176[(2)] = inst_36121);

(statearr_36154_36176[(1)] = (10));


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
});})(c__7043__auto___36162))
;
return ((function (switch__6987__auto__,c__7043__auto___36162){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36158 = [null,null,null,null,null,null,null,null];
(statearr_36158[(0)] = state_machine__6988__auto__);

(statearr_36158[(1)] = (1));

return statearr_36158;
});
var state_machine__6988__auto____1 = (function (state_36138){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36159){if((e36159 instanceof Object)){
var ex__6991__auto__ = e36159;
var statearr_36160_36177 = state_36138;
(statearr_36160_36177[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36178 = state_36138;
state_36138 = G__36178;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36138){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___36162))
})();
var state__7045__auto__ = (function (){var statearr_36161 = f__7044__auto__.call(null);
(statearr_36161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36162);

return statearr_36161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___36162))
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
return (function (p__36362){
var vec__36363 = p__36362;
var v = cljs.core.nth.call(null,vec__36363,(0),null);
var p = cljs.core.nth.call(null,vec__36363,(1),null);
var job = vec__36363;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___36545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results){
return (function (state_36368){
var state_val_36369 = (state_36368[(1)]);
if((state_val_36369 === (2))){
var inst_36365 = (state_36368[(2)]);
var inst_36366 = cljs.core.async.close_BANG_.call(null,res);
var state_36368__$1 = (function (){var statearr_36370 = state_36368;
(statearr_36370[(7)] = inst_36365);

return statearr_36370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36368__$1,inst_36366);
} else {
if((state_val_36369 === (1))){
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36368__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36374 = [null,null,null,null,null,null,null,null];
(statearr_36374[(0)] = state_machine__6988__auto__);

(statearr_36374[(1)] = (1));

return statearr_36374;
});
var state_machine__6988__auto____1 = (function (state_36368){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36375){if((e36375 instanceof Object)){
var ex__6991__auto__ = e36375;
var statearr_36376_36546 = state_36368;
(statearr_36376_36546[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36547 = state_36368;
state_36368 = G__36547;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36368){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_36377 = f__7044__auto__.call(null);
(statearr_36377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36545);

return statearr_36377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___36545,res,vec__36363,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36378){
var vec__36379 = p__36378;
var v = cljs.core.nth.call(null,vec__36379,(0),null);
var p = cljs.core.nth.call(null,vec__36379,(1),null);
var job = vec__36379;
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
var n__4509__auto___36548 = n;
var __36549 = (0);
while(true){
if((__36549 < n__4509__auto___36548)){
var G__36380_36550 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36380_36550) {
case "async":
var c__7043__auto___36552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36549,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__36549,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function (state_36393){
var state_val_36394 = (state_36393[(1)]);
if((state_val_36394 === (7))){
var inst_36389 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36395_36553 = state_36393__$1;
(statearr_36395_36553[(2)] = inst_36389);

(statearr_36395_36553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (6))){
var state_36393__$1 = state_36393;
var statearr_36396_36554 = state_36393__$1;
(statearr_36396_36554[(2)] = null);

(statearr_36396_36554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (5))){
var state_36393__$1 = state_36393;
var statearr_36397_36555 = state_36393__$1;
(statearr_36397_36555[(2)] = null);

(statearr_36397_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (4))){
var inst_36383 = (state_36393[(2)]);
var inst_36384 = async.call(null,inst_36383);
var state_36393__$1 = state_36393;
if(cljs.core.truth_(inst_36384)){
var statearr_36398_36556 = state_36393__$1;
(statearr_36398_36556[(1)] = (5));

} else {
var statearr_36399_36557 = state_36393__$1;
(statearr_36399_36557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (3))){
var inst_36391 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36393__$1,inst_36391);
} else {
if((state_val_36394 === (2))){
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36393__$1,(4),jobs);
} else {
if((state_val_36394 === (1))){
var state_36393__$1 = state_36393;
var statearr_36400_36558 = state_36393__$1;
(statearr_36400_36558[(2)] = null);

(statearr_36400_36558[(1)] = (2));


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
});})(__36549,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
;
return ((function (__36549,switch__6987__auto__,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36404 = [null,null,null,null,null,null,null];
(statearr_36404[(0)] = state_machine__6988__auto__);

(statearr_36404[(1)] = (1));

return statearr_36404;
});
var state_machine__6988__auto____1 = (function (state_36393){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36405){if((e36405 instanceof Object)){
var ex__6991__auto__ = e36405;
var statearr_36406_36559 = state_36393;
(statearr_36406_36559[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36560 = state_36393;
state_36393 = G__36560;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36393){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__36549,switch__6987__auto__,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_36407 = f__7044__auto__.call(null);
(statearr_36407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36552);

return statearr_36407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__36549,c__7043__auto___36552,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___36561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36549,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__36549,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function (state_36420){
var state_val_36421 = (state_36420[(1)]);
if((state_val_36421 === (7))){
var inst_36416 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36422_36562 = state_36420__$1;
(statearr_36422_36562[(2)] = inst_36416);

(statearr_36422_36562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (6))){
var state_36420__$1 = state_36420;
var statearr_36423_36563 = state_36420__$1;
(statearr_36423_36563[(2)] = null);

(statearr_36423_36563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (5))){
var state_36420__$1 = state_36420;
var statearr_36424_36564 = state_36420__$1;
(statearr_36424_36564[(2)] = null);

(statearr_36424_36564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (4))){
var inst_36410 = (state_36420[(2)]);
var inst_36411 = process.call(null,inst_36410);
var state_36420__$1 = state_36420;
if(cljs.core.truth_(inst_36411)){
var statearr_36425_36565 = state_36420__$1;
(statearr_36425_36565[(1)] = (5));

} else {
var statearr_36426_36566 = state_36420__$1;
(statearr_36426_36566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (3))){
var inst_36418 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36420__$1,inst_36418);
} else {
if((state_val_36421 === (2))){
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36420__$1,(4),jobs);
} else {
if((state_val_36421 === (1))){
var state_36420__$1 = state_36420;
var statearr_36427_36567 = state_36420__$1;
(statearr_36427_36567[(2)] = null);

(statearr_36427_36567[(1)] = (2));


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
});})(__36549,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
;
return ((function (__36549,switch__6987__auto__,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36431 = [null,null,null,null,null,null,null];
(statearr_36431[(0)] = state_machine__6988__auto__);

(statearr_36431[(1)] = (1));

return statearr_36431;
});
var state_machine__6988__auto____1 = (function (state_36420){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36432){if((e36432 instanceof Object)){
var ex__6991__auto__ = e36432;
var statearr_36433_36568 = state_36420;
(statearr_36433_36568[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36569 = state_36420;
state_36420 = G__36569;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36420){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__36549,switch__6987__auto__,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_36434 = f__7044__auto__.call(null);
(statearr_36434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36561);

return statearr_36434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__36549,c__7043__auto___36561,G__36380_36550,n__4509__auto___36548,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36570 = (__36549 + (1));
__36549 = G__36570;
continue;
} else {
}
break;
}

var c__7043__auto___36571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___36571,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___36571,jobs,results,process,async){
return (function (state_36456){
var state_val_36457 = (state_36456[(1)]);
if((state_val_36457 === (9))){
var inst_36449 = (state_36456[(2)]);
var state_36456__$1 = (function (){var statearr_36458 = state_36456;
(statearr_36458[(7)] = inst_36449);

return statearr_36458;
})();
var statearr_36459_36572 = state_36456__$1;
(statearr_36459_36572[(2)] = null);

(statearr_36459_36572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (8))){
var inst_36442 = (state_36456[(8)]);
var inst_36447 = (state_36456[(2)]);
var state_36456__$1 = (function (){var statearr_36460 = state_36456;
(statearr_36460[(9)] = inst_36447);

return statearr_36460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36456__$1,(9),results,inst_36442);
} else {
if((state_val_36457 === (7))){
var inst_36452 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36461_36573 = state_36456__$1;
(statearr_36461_36573[(2)] = inst_36452);

(statearr_36461_36573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (6))){
var inst_36442 = (state_36456[(8)]);
var inst_36437 = (state_36456[(10)]);
var inst_36442__$1 = cljs.core.async.chan.call(null,(1));
var inst_36443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36444 = [inst_36437,inst_36442__$1];
var inst_36445 = (new cljs.core.PersistentVector(null,2,(5),inst_36443,inst_36444,null));
var state_36456__$1 = (function (){var statearr_36462 = state_36456;
(statearr_36462[(8)] = inst_36442__$1);

return statearr_36462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36456__$1,(8),jobs,inst_36445);
} else {
if((state_val_36457 === (5))){
var inst_36440 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36456__$1 = state_36456;
var statearr_36463_36574 = state_36456__$1;
(statearr_36463_36574[(2)] = inst_36440);

(statearr_36463_36574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (4))){
var inst_36437 = (state_36456[(10)]);
var inst_36437__$1 = (state_36456[(2)]);
var inst_36438 = (inst_36437__$1 == null);
var state_36456__$1 = (function (){var statearr_36464 = state_36456;
(statearr_36464[(10)] = inst_36437__$1);

return statearr_36464;
})();
if(cljs.core.truth_(inst_36438)){
var statearr_36465_36575 = state_36456__$1;
(statearr_36465_36575[(1)] = (5));

} else {
var statearr_36466_36576 = state_36456__$1;
(statearr_36466_36576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (3))){
var inst_36454 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36456__$1,inst_36454);
} else {
if((state_val_36457 === (2))){
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36456__$1,(4),from);
} else {
if((state_val_36457 === (1))){
var state_36456__$1 = state_36456;
var statearr_36467_36577 = state_36456__$1;
(statearr_36467_36577[(2)] = null);

(statearr_36467_36577[(1)] = (2));


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
});})(c__7043__auto___36571,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___36571,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = state_machine__6988__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var state_machine__6988__auto____1 = (function (state_36456){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__6991__auto__ = e36472;
var statearr_36473_36578 = state_36456;
(statearr_36473_36578[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36579 = state_36456;
state_36456 = G__36579;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36456){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___36571,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_36474 = f__7044__auto__.call(null);
(statearr_36474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36571);

return statearr_36474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___36571,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_36512){
var state_val_36513 = (state_36512[(1)]);
if((state_val_36513 === (7))){
var inst_36508 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
var statearr_36514_36580 = state_36512__$1;
(statearr_36514_36580[(2)] = inst_36508);

(statearr_36514_36580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (20))){
var state_36512__$1 = state_36512;
var statearr_36515_36581 = state_36512__$1;
(statearr_36515_36581[(2)] = null);

(statearr_36515_36581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (1))){
var state_36512__$1 = state_36512;
var statearr_36516_36582 = state_36512__$1;
(statearr_36516_36582[(2)] = null);

(statearr_36516_36582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (4))){
var inst_36477 = (state_36512[(7)]);
var inst_36477__$1 = (state_36512[(2)]);
var inst_36478 = (inst_36477__$1 == null);
var state_36512__$1 = (function (){var statearr_36517 = state_36512;
(statearr_36517[(7)] = inst_36477__$1);

return statearr_36517;
})();
if(cljs.core.truth_(inst_36478)){
var statearr_36518_36583 = state_36512__$1;
(statearr_36518_36583[(1)] = (5));

} else {
var statearr_36519_36584 = state_36512__$1;
(statearr_36519_36584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (15))){
var inst_36490 = (state_36512[(8)]);
var state_36512__$1 = state_36512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36512__$1,(18),to,inst_36490);
} else {
if((state_val_36513 === (21))){
var inst_36503 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
var statearr_36520_36585 = state_36512__$1;
(statearr_36520_36585[(2)] = inst_36503);

(statearr_36520_36585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (13))){
var inst_36505 = (state_36512[(2)]);
var state_36512__$1 = (function (){var statearr_36521 = state_36512;
(statearr_36521[(9)] = inst_36505);

return statearr_36521;
})();
var statearr_36522_36586 = state_36512__$1;
(statearr_36522_36586[(2)] = null);

(statearr_36522_36586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (6))){
var inst_36477 = (state_36512[(7)]);
var state_36512__$1 = state_36512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36512__$1,(11),inst_36477);
} else {
if((state_val_36513 === (17))){
var inst_36498 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
if(cljs.core.truth_(inst_36498)){
var statearr_36523_36587 = state_36512__$1;
(statearr_36523_36587[(1)] = (19));

} else {
var statearr_36524_36588 = state_36512__$1;
(statearr_36524_36588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (3))){
var inst_36510 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36512__$1,inst_36510);
} else {
if((state_val_36513 === (12))){
var inst_36487 = (state_36512[(10)]);
var state_36512__$1 = state_36512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36512__$1,(14),inst_36487);
} else {
if((state_val_36513 === (2))){
var state_36512__$1 = state_36512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36512__$1,(4),results);
} else {
if((state_val_36513 === (19))){
var state_36512__$1 = state_36512;
var statearr_36525_36589 = state_36512__$1;
(statearr_36525_36589[(2)] = null);

(statearr_36525_36589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (11))){
var inst_36487 = (state_36512[(2)]);
var state_36512__$1 = (function (){var statearr_36526 = state_36512;
(statearr_36526[(10)] = inst_36487);

return statearr_36526;
})();
var statearr_36527_36590 = state_36512__$1;
(statearr_36527_36590[(2)] = null);

(statearr_36527_36590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (9))){
var state_36512__$1 = state_36512;
var statearr_36528_36591 = state_36512__$1;
(statearr_36528_36591[(2)] = null);

(statearr_36528_36591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (5))){
var state_36512__$1 = state_36512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36529_36592 = state_36512__$1;
(statearr_36529_36592[(1)] = (8));

} else {
var statearr_36530_36593 = state_36512__$1;
(statearr_36530_36593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (14))){
var inst_36492 = (state_36512[(11)]);
var inst_36490 = (state_36512[(8)]);
var inst_36490__$1 = (state_36512[(2)]);
var inst_36491 = (inst_36490__$1 == null);
var inst_36492__$1 = cljs.core.not.call(null,inst_36491);
var state_36512__$1 = (function (){var statearr_36531 = state_36512;
(statearr_36531[(11)] = inst_36492__$1);

(statearr_36531[(8)] = inst_36490__$1);

return statearr_36531;
})();
if(inst_36492__$1){
var statearr_36532_36594 = state_36512__$1;
(statearr_36532_36594[(1)] = (15));

} else {
var statearr_36533_36595 = state_36512__$1;
(statearr_36533_36595[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (16))){
var inst_36492 = (state_36512[(11)]);
var state_36512__$1 = state_36512;
var statearr_36534_36596 = state_36512__$1;
(statearr_36534_36596[(2)] = inst_36492);

(statearr_36534_36596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (10))){
var inst_36484 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
var statearr_36535_36597 = state_36512__$1;
(statearr_36535_36597[(2)] = inst_36484);

(statearr_36535_36597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (18))){
var inst_36495 = (state_36512[(2)]);
var state_36512__$1 = state_36512;
var statearr_36536_36598 = state_36512__$1;
(statearr_36536_36598[(2)] = inst_36495);

(statearr_36536_36598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36513 === (8))){
var inst_36481 = cljs.core.async.close_BANG_.call(null,to);
var state_36512__$1 = state_36512;
var statearr_36537_36599 = state_36512__$1;
(statearr_36537_36599[(2)] = inst_36481);

(statearr_36537_36599[(1)] = (10));


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
var statearr_36541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36541[(0)] = state_machine__6988__auto__);

(statearr_36541[(1)] = (1));

return statearr_36541;
});
var state_machine__6988__auto____1 = (function (state_36512){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36542){if((e36542 instanceof Object)){
var ex__6991__auto__ = e36542;
var statearr_36543_36600 = state_36512;
(statearr_36543_36600[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36601 = state_36512;
state_36512 = G__36601;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36512){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_36544 = f__7044__auto__.call(null);
(statearr_36544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_36544;
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
var c__7043__auto___36702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___36702,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___36702,tc,fc){
return (function (state_36677){
var state_val_36678 = (state_36677[(1)]);
if((state_val_36678 === (7))){
var inst_36673 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36679_36703 = state_36677__$1;
(statearr_36679_36703[(2)] = inst_36673);

(statearr_36679_36703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (1))){
var state_36677__$1 = state_36677;
var statearr_36680_36704 = state_36677__$1;
(statearr_36680_36704[(2)] = null);

(statearr_36680_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (4))){
var inst_36654 = (state_36677[(7)]);
var inst_36654__$1 = (state_36677[(2)]);
var inst_36655 = (inst_36654__$1 == null);
var state_36677__$1 = (function (){var statearr_36681 = state_36677;
(statearr_36681[(7)] = inst_36654__$1);

return statearr_36681;
})();
if(cljs.core.truth_(inst_36655)){
var statearr_36682_36705 = state_36677__$1;
(statearr_36682_36705[(1)] = (5));

} else {
var statearr_36683_36706 = state_36677__$1;
(statearr_36683_36706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (13))){
var state_36677__$1 = state_36677;
var statearr_36684_36707 = state_36677__$1;
(statearr_36684_36707[(2)] = null);

(statearr_36684_36707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (6))){
var inst_36654 = (state_36677[(7)]);
var inst_36660 = p.call(null,inst_36654);
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36660)){
var statearr_36685_36708 = state_36677__$1;
(statearr_36685_36708[(1)] = (9));

} else {
var statearr_36686_36709 = state_36677__$1;
(statearr_36686_36709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (3))){
var inst_36675 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36677__$1,inst_36675);
} else {
if((state_val_36678 === (12))){
var state_36677__$1 = state_36677;
var statearr_36687_36710 = state_36677__$1;
(statearr_36687_36710[(2)] = null);

(statearr_36687_36710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (2))){
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36677__$1,(4),ch);
} else {
if((state_val_36678 === (11))){
var inst_36654 = (state_36677[(7)]);
var inst_36664 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36677__$1,(8),inst_36664,inst_36654);
} else {
if((state_val_36678 === (9))){
var state_36677__$1 = state_36677;
var statearr_36688_36711 = state_36677__$1;
(statearr_36688_36711[(2)] = tc);

(statearr_36688_36711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (5))){
var inst_36657 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36658 = cljs.core.async.close_BANG_.call(null,fc);
var state_36677__$1 = (function (){var statearr_36689 = state_36677;
(statearr_36689[(8)] = inst_36657);

return statearr_36689;
})();
var statearr_36690_36712 = state_36677__$1;
(statearr_36690_36712[(2)] = inst_36658);

(statearr_36690_36712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (14))){
var inst_36671 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36691_36713 = state_36677__$1;
(statearr_36691_36713[(2)] = inst_36671);

(statearr_36691_36713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (10))){
var state_36677__$1 = state_36677;
var statearr_36692_36714 = state_36677__$1;
(statearr_36692_36714[(2)] = fc);

(statearr_36692_36714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (8))){
var inst_36666 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36666)){
var statearr_36693_36715 = state_36677__$1;
(statearr_36693_36715[(1)] = (12));

} else {
var statearr_36694_36716 = state_36677__$1;
(statearr_36694_36716[(1)] = (13));

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
});})(c__7043__auto___36702,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___36702,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_36698 = [null,null,null,null,null,null,null,null,null];
(statearr_36698[(0)] = state_machine__6988__auto__);

(statearr_36698[(1)] = (1));

return statearr_36698;
});
var state_machine__6988__auto____1 = (function (state_36677){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36699){if((e36699 instanceof Object)){
var ex__6991__auto__ = e36699;
var statearr_36700_36717 = state_36677;
(statearr_36700_36717[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36718 = state_36677;
state_36677 = G__36718;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36677){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___36702,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_36701 = f__7044__auto__.call(null);
(statearr_36701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___36702);

return statearr_36701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___36702,tc,fc))
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
return (function (state_36765){
var state_val_36766 = (state_36765[(1)]);
if((state_val_36766 === (7))){
var inst_36761 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
var statearr_36767_36783 = state_36765__$1;
(statearr_36767_36783[(2)] = inst_36761);

(statearr_36767_36783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (6))){
var inst_36751 = (state_36765[(7)]);
var inst_36754 = (state_36765[(8)]);
var inst_36758 = f.call(null,inst_36751,inst_36754);
var inst_36751__$1 = inst_36758;
var state_36765__$1 = (function (){var statearr_36768 = state_36765;
(statearr_36768[(7)] = inst_36751__$1);

return statearr_36768;
})();
var statearr_36769_36784 = state_36765__$1;
(statearr_36769_36784[(2)] = null);

(statearr_36769_36784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (5))){
var inst_36751 = (state_36765[(7)]);
var state_36765__$1 = state_36765;
var statearr_36770_36785 = state_36765__$1;
(statearr_36770_36785[(2)] = inst_36751);

(statearr_36770_36785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (4))){
var inst_36754 = (state_36765[(8)]);
var inst_36754__$1 = (state_36765[(2)]);
var inst_36755 = (inst_36754__$1 == null);
var state_36765__$1 = (function (){var statearr_36771 = state_36765;
(statearr_36771[(8)] = inst_36754__$1);

return statearr_36771;
})();
if(cljs.core.truth_(inst_36755)){
var statearr_36772_36786 = state_36765__$1;
(statearr_36772_36786[(1)] = (5));

} else {
var statearr_36773_36787 = state_36765__$1;
(statearr_36773_36787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (3))){
var inst_36763 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36765__$1,inst_36763);
} else {
if((state_val_36766 === (2))){
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36765__$1,(4),ch);
} else {
if((state_val_36766 === (1))){
var inst_36751 = init;
var state_36765__$1 = (function (){var statearr_36774 = state_36765;
(statearr_36774[(7)] = inst_36751);

return statearr_36774;
})();
var statearr_36775_36788 = state_36765__$1;
(statearr_36775_36788[(2)] = null);

(statearr_36775_36788[(1)] = (2));


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
var statearr_36779 = [null,null,null,null,null,null,null,null,null];
(statearr_36779[(0)] = state_machine__6988__auto__);

(statearr_36779[(1)] = (1));

return statearr_36779;
});
var state_machine__6988__auto____1 = (function (state_36765){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36780){if((e36780 instanceof Object)){
var ex__6991__auto__ = e36780;
var statearr_36781_36789 = state_36765;
(statearr_36781_36789[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36790 = state_36765;
state_36765 = G__36790;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36765){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_36782 = f__7044__auto__.call(null);
(statearr_36782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_36782;
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
return (function (state_36864){
var state_val_36865 = (state_36864[(1)]);
if((state_val_36865 === (7))){
var inst_36846 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36866_36889 = state_36864__$1;
(statearr_36866_36889[(2)] = inst_36846);

(statearr_36866_36889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (1))){
var inst_36840 = cljs.core.seq.call(null,coll);
var inst_36841 = inst_36840;
var state_36864__$1 = (function (){var statearr_36867 = state_36864;
(statearr_36867[(7)] = inst_36841);

return statearr_36867;
})();
var statearr_36868_36890 = state_36864__$1;
(statearr_36868_36890[(2)] = null);

(statearr_36868_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (4))){
var inst_36841 = (state_36864[(7)]);
var inst_36844 = cljs.core.first.call(null,inst_36841);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(7),ch,inst_36844);
} else {
if((state_val_36865 === (13))){
var inst_36858 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36869_36891 = state_36864__$1;
(statearr_36869_36891[(2)] = inst_36858);

(statearr_36869_36891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (6))){
var inst_36849 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
if(cljs.core.truth_(inst_36849)){
var statearr_36870_36892 = state_36864__$1;
(statearr_36870_36892[(1)] = (8));

} else {
var statearr_36871_36893 = state_36864__$1;
(statearr_36871_36893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (3))){
var inst_36862 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else {
if((state_val_36865 === (12))){
var state_36864__$1 = state_36864;
var statearr_36872_36894 = state_36864__$1;
(statearr_36872_36894[(2)] = null);

(statearr_36872_36894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (2))){
var inst_36841 = (state_36864[(7)]);
var state_36864__$1 = state_36864;
if(cljs.core.truth_(inst_36841)){
var statearr_36873_36895 = state_36864__$1;
(statearr_36873_36895[(1)] = (4));

} else {
var statearr_36874_36896 = state_36864__$1;
(statearr_36874_36896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (11))){
var inst_36855 = cljs.core.async.close_BANG_.call(null,ch);
var state_36864__$1 = state_36864;
var statearr_36875_36897 = state_36864__$1;
(statearr_36875_36897[(2)] = inst_36855);

(statearr_36875_36897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (9))){
var state_36864__$1 = state_36864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36876_36898 = state_36864__$1;
(statearr_36876_36898[(1)] = (11));

} else {
var statearr_36877_36899 = state_36864__$1;
(statearr_36877_36899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (5))){
var inst_36841 = (state_36864[(7)]);
var state_36864__$1 = state_36864;
var statearr_36878_36900 = state_36864__$1;
(statearr_36878_36900[(2)] = inst_36841);

(statearr_36878_36900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (10))){
var inst_36860 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36879_36901 = state_36864__$1;
(statearr_36879_36901[(2)] = inst_36860);

(statearr_36879_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (8))){
var inst_36841 = (state_36864[(7)]);
var inst_36851 = cljs.core.next.call(null,inst_36841);
var inst_36841__$1 = inst_36851;
var state_36864__$1 = (function (){var statearr_36880 = state_36864;
(statearr_36880[(7)] = inst_36841__$1);

return statearr_36880;
})();
var statearr_36881_36902 = state_36864__$1;
(statearr_36881_36902[(2)] = null);

(statearr_36881_36902[(1)] = (2));


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
var statearr_36885 = [null,null,null,null,null,null,null,null];
(statearr_36885[(0)] = state_machine__6988__auto__);

(statearr_36885[(1)] = (1));

return statearr_36885;
});
var state_machine__6988__auto____1 = (function (state_36864){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_36864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e36886){if((e36886 instanceof Object)){
var ex__6991__auto__ = e36886;
var statearr_36887_36903 = state_36864;
(statearr_36887_36903[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_36864;
state_36864 = G__36904;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_36888 = f__7044__auto__.call(null);
(statearr_36888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_36888;
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

cljs.core.async.Mux = (function (){var obj36906 = {};
return obj36906;
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


cljs.core.async.Mult = (function (){var obj36908 = {};
return obj36908;
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
if(typeof cljs.core.async.t37130 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37130 = (function (cs,ch,mult,meta37131){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37131 = meta37131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37130.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37132){
var self__ = this;
var _37132__$1 = this;
return self__.meta37131;
});})(cs))
;

cljs.core.async.t37130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37132,meta37131__$1){
var self__ = this;
var _37132__$1 = this;
return (new cljs.core.async.t37130(self__.cs,self__.ch,self__.mult,meta37131__$1));
});})(cs))
;

cljs.core.async.t37130.cljs$lang$type = true;

cljs.core.async.t37130.cljs$lang$ctorStr = "cljs.core.async/t37130";

cljs.core.async.t37130.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t37130");
});})(cs))
;

cljs.core.async.__GT_t37130 = ((function (cs){
return (function __GT_t37130(cs__$1,ch__$1,mult__$1,meta37131){
return (new cljs.core.async.t37130(cs__$1,ch__$1,mult__$1,meta37131));
});})(cs))
;

}

return (new cljs.core.async.t37130(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___37351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___37351,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___37351,cs,m,dchan,dctr,done){
return (function (state_37263){
var state_val_37264 = (state_37263[(1)]);
if((state_val_37264 === (7))){
var inst_37259 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37265_37352 = state_37263__$1;
(statearr_37265_37352[(2)] = inst_37259);

(statearr_37265_37352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (20))){
var inst_37164 = (state_37263[(7)]);
var inst_37174 = cljs.core.first.call(null,inst_37164);
var inst_37175 = cljs.core.nth.call(null,inst_37174,(0),null);
var inst_37176 = cljs.core.nth.call(null,inst_37174,(1),null);
var state_37263__$1 = (function (){var statearr_37266 = state_37263;
(statearr_37266[(8)] = inst_37175);

return statearr_37266;
})();
if(cljs.core.truth_(inst_37176)){
var statearr_37267_37353 = state_37263__$1;
(statearr_37267_37353[(1)] = (22));

} else {
var statearr_37268_37354 = state_37263__$1;
(statearr_37268_37354[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (27))){
var inst_37135 = (state_37263[(9)]);
var inst_37211 = (state_37263[(10)]);
var inst_37206 = (state_37263[(11)]);
var inst_37204 = (state_37263[(12)]);
var inst_37211__$1 = cljs.core._nth.call(null,inst_37204,inst_37206);
var inst_37212 = cljs.core.async.put_BANG_.call(null,inst_37211__$1,inst_37135,done);
var state_37263__$1 = (function (){var statearr_37269 = state_37263;
(statearr_37269[(10)] = inst_37211__$1);

return statearr_37269;
})();
if(cljs.core.truth_(inst_37212)){
var statearr_37270_37355 = state_37263__$1;
(statearr_37270_37355[(1)] = (30));

} else {
var statearr_37271_37356 = state_37263__$1;
(statearr_37271_37356[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (1))){
var state_37263__$1 = state_37263;
var statearr_37272_37357 = state_37263__$1;
(statearr_37272_37357[(2)] = null);

(statearr_37272_37357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (24))){
var inst_37164 = (state_37263[(7)]);
var inst_37181 = (state_37263[(2)]);
var inst_37182 = cljs.core.next.call(null,inst_37164);
var inst_37144 = inst_37182;
var inst_37145 = null;
var inst_37146 = (0);
var inst_37147 = (0);
var state_37263__$1 = (function (){var statearr_37273 = state_37263;
(statearr_37273[(13)] = inst_37147);

(statearr_37273[(14)] = inst_37146);

(statearr_37273[(15)] = inst_37144);

(statearr_37273[(16)] = inst_37181);

(statearr_37273[(17)] = inst_37145);

return statearr_37273;
})();
var statearr_37274_37358 = state_37263__$1;
(statearr_37274_37358[(2)] = null);

(statearr_37274_37358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (39))){
var state_37263__$1 = state_37263;
var statearr_37278_37359 = state_37263__$1;
(statearr_37278_37359[(2)] = null);

(statearr_37278_37359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (4))){
var inst_37135 = (state_37263[(9)]);
var inst_37135__$1 = (state_37263[(2)]);
var inst_37136 = (inst_37135__$1 == null);
var state_37263__$1 = (function (){var statearr_37279 = state_37263;
(statearr_37279[(9)] = inst_37135__$1);

return statearr_37279;
})();
if(cljs.core.truth_(inst_37136)){
var statearr_37280_37360 = state_37263__$1;
(statearr_37280_37360[(1)] = (5));

} else {
var statearr_37281_37361 = state_37263__$1;
(statearr_37281_37361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (15))){
var inst_37147 = (state_37263[(13)]);
var inst_37146 = (state_37263[(14)]);
var inst_37144 = (state_37263[(15)]);
var inst_37145 = (state_37263[(17)]);
var inst_37160 = (state_37263[(2)]);
var inst_37161 = (inst_37147 + (1));
var tmp37275 = inst_37146;
var tmp37276 = inst_37144;
var tmp37277 = inst_37145;
var inst_37144__$1 = tmp37276;
var inst_37145__$1 = tmp37277;
var inst_37146__$1 = tmp37275;
var inst_37147__$1 = inst_37161;
var state_37263__$1 = (function (){var statearr_37282 = state_37263;
(statearr_37282[(13)] = inst_37147__$1);

(statearr_37282[(14)] = inst_37146__$1);

(statearr_37282[(15)] = inst_37144__$1);

(statearr_37282[(18)] = inst_37160);

(statearr_37282[(17)] = inst_37145__$1);

return statearr_37282;
})();
var statearr_37283_37362 = state_37263__$1;
(statearr_37283_37362[(2)] = null);

(statearr_37283_37362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (21))){
var inst_37185 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37287_37363 = state_37263__$1;
(statearr_37287_37363[(2)] = inst_37185);

(statearr_37287_37363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (31))){
var inst_37211 = (state_37263[(10)]);
var inst_37215 = done.call(null,null);
var inst_37216 = cljs.core.async.untap_STAR_.call(null,m,inst_37211);
var state_37263__$1 = (function (){var statearr_37288 = state_37263;
(statearr_37288[(19)] = inst_37215);

return statearr_37288;
})();
var statearr_37289_37364 = state_37263__$1;
(statearr_37289_37364[(2)] = inst_37216);

(statearr_37289_37364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (32))){
var inst_37206 = (state_37263[(11)]);
var inst_37205 = (state_37263[(20)]);
var inst_37204 = (state_37263[(12)]);
var inst_37203 = (state_37263[(21)]);
var inst_37218 = (state_37263[(2)]);
var inst_37219 = (inst_37206 + (1));
var tmp37284 = inst_37205;
var tmp37285 = inst_37204;
var tmp37286 = inst_37203;
var inst_37203__$1 = tmp37286;
var inst_37204__$1 = tmp37285;
var inst_37205__$1 = tmp37284;
var inst_37206__$1 = inst_37219;
var state_37263__$1 = (function (){var statearr_37290 = state_37263;
(statearr_37290[(22)] = inst_37218);

(statearr_37290[(11)] = inst_37206__$1);

(statearr_37290[(20)] = inst_37205__$1);

(statearr_37290[(12)] = inst_37204__$1);

(statearr_37290[(21)] = inst_37203__$1);

return statearr_37290;
})();
var statearr_37291_37365 = state_37263__$1;
(statearr_37291_37365[(2)] = null);

(statearr_37291_37365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (40))){
var inst_37231 = (state_37263[(23)]);
var inst_37235 = done.call(null,null);
var inst_37236 = cljs.core.async.untap_STAR_.call(null,m,inst_37231);
var state_37263__$1 = (function (){var statearr_37292 = state_37263;
(statearr_37292[(24)] = inst_37235);

return statearr_37292;
})();
var statearr_37293_37366 = state_37263__$1;
(statearr_37293_37366[(2)] = inst_37236);

(statearr_37293_37366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (33))){
var inst_37222 = (state_37263[(25)]);
var inst_37224 = cljs.core.chunked_seq_QMARK_.call(null,inst_37222);
var state_37263__$1 = state_37263;
if(inst_37224){
var statearr_37294_37367 = state_37263__$1;
(statearr_37294_37367[(1)] = (36));

} else {
var statearr_37295_37368 = state_37263__$1;
(statearr_37295_37368[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (13))){
var inst_37154 = (state_37263[(26)]);
var inst_37157 = cljs.core.async.close_BANG_.call(null,inst_37154);
var state_37263__$1 = state_37263;
var statearr_37296_37369 = state_37263__$1;
(statearr_37296_37369[(2)] = inst_37157);

(statearr_37296_37369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (22))){
var inst_37175 = (state_37263[(8)]);
var inst_37178 = cljs.core.async.close_BANG_.call(null,inst_37175);
var state_37263__$1 = state_37263;
var statearr_37297_37370 = state_37263__$1;
(statearr_37297_37370[(2)] = inst_37178);

(statearr_37297_37370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (36))){
var inst_37222 = (state_37263[(25)]);
var inst_37226 = cljs.core.chunk_first.call(null,inst_37222);
var inst_37227 = cljs.core.chunk_rest.call(null,inst_37222);
var inst_37228 = cljs.core.count.call(null,inst_37226);
var inst_37203 = inst_37227;
var inst_37204 = inst_37226;
var inst_37205 = inst_37228;
var inst_37206 = (0);
var state_37263__$1 = (function (){var statearr_37298 = state_37263;
(statearr_37298[(11)] = inst_37206);

(statearr_37298[(20)] = inst_37205);

(statearr_37298[(12)] = inst_37204);

(statearr_37298[(21)] = inst_37203);

return statearr_37298;
})();
var statearr_37299_37371 = state_37263__$1;
(statearr_37299_37371[(2)] = null);

(statearr_37299_37371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (41))){
var inst_37222 = (state_37263[(25)]);
var inst_37238 = (state_37263[(2)]);
var inst_37239 = cljs.core.next.call(null,inst_37222);
var inst_37203 = inst_37239;
var inst_37204 = null;
var inst_37205 = (0);
var inst_37206 = (0);
var state_37263__$1 = (function (){var statearr_37300 = state_37263;
(statearr_37300[(11)] = inst_37206);

(statearr_37300[(20)] = inst_37205);

(statearr_37300[(12)] = inst_37204);

(statearr_37300[(27)] = inst_37238);

(statearr_37300[(21)] = inst_37203);

return statearr_37300;
})();
var statearr_37301_37372 = state_37263__$1;
(statearr_37301_37372[(2)] = null);

(statearr_37301_37372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (43))){
var state_37263__$1 = state_37263;
var statearr_37302_37373 = state_37263__$1;
(statearr_37302_37373[(2)] = null);

(statearr_37302_37373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (29))){
var inst_37247 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37303_37374 = state_37263__$1;
(statearr_37303_37374[(2)] = inst_37247);

(statearr_37303_37374[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (44))){
var inst_37256 = (state_37263[(2)]);
var state_37263__$1 = (function (){var statearr_37304 = state_37263;
(statearr_37304[(28)] = inst_37256);

return statearr_37304;
})();
var statearr_37305_37375 = state_37263__$1;
(statearr_37305_37375[(2)] = null);

(statearr_37305_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (6))){
var inst_37195 = (state_37263[(29)]);
var inst_37194 = cljs.core.deref.call(null,cs);
var inst_37195__$1 = cljs.core.keys.call(null,inst_37194);
var inst_37196 = cljs.core.count.call(null,inst_37195__$1);
var inst_37197 = cljs.core.reset_BANG_.call(null,dctr,inst_37196);
var inst_37202 = cljs.core.seq.call(null,inst_37195__$1);
var inst_37203 = inst_37202;
var inst_37204 = null;
var inst_37205 = (0);
var inst_37206 = (0);
var state_37263__$1 = (function (){var statearr_37306 = state_37263;
(statearr_37306[(29)] = inst_37195__$1);

(statearr_37306[(11)] = inst_37206);

(statearr_37306[(20)] = inst_37205);

(statearr_37306[(12)] = inst_37204);

(statearr_37306[(21)] = inst_37203);

(statearr_37306[(30)] = inst_37197);

return statearr_37306;
})();
var statearr_37307_37376 = state_37263__$1;
(statearr_37307_37376[(2)] = null);

(statearr_37307_37376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (28))){
var inst_37222 = (state_37263[(25)]);
var inst_37203 = (state_37263[(21)]);
var inst_37222__$1 = cljs.core.seq.call(null,inst_37203);
var state_37263__$1 = (function (){var statearr_37308 = state_37263;
(statearr_37308[(25)] = inst_37222__$1);

return statearr_37308;
})();
if(inst_37222__$1){
var statearr_37309_37377 = state_37263__$1;
(statearr_37309_37377[(1)] = (33));

} else {
var statearr_37310_37378 = state_37263__$1;
(statearr_37310_37378[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (25))){
var inst_37206 = (state_37263[(11)]);
var inst_37205 = (state_37263[(20)]);
var inst_37208 = (inst_37206 < inst_37205);
var inst_37209 = inst_37208;
var state_37263__$1 = state_37263;
if(cljs.core.truth_(inst_37209)){
var statearr_37311_37379 = state_37263__$1;
(statearr_37311_37379[(1)] = (27));

} else {
var statearr_37312_37380 = state_37263__$1;
(statearr_37312_37380[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (34))){
var state_37263__$1 = state_37263;
var statearr_37313_37381 = state_37263__$1;
(statearr_37313_37381[(2)] = null);

(statearr_37313_37381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (17))){
var state_37263__$1 = state_37263;
var statearr_37314_37382 = state_37263__$1;
(statearr_37314_37382[(2)] = null);

(statearr_37314_37382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (3))){
var inst_37261 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37263__$1,inst_37261);
} else {
if((state_val_37264 === (12))){
var inst_37190 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37315_37383 = state_37263__$1;
(statearr_37315_37383[(2)] = inst_37190);

(statearr_37315_37383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (2))){
var state_37263__$1 = state_37263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37263__$1,(4),ch);
} else {
if((state_val_37264 === (23))){
var state_37263__$1 = state_37263;
var statearr_37316_37384 = state_37263__$1;
(statearr_37316_37384[(2)] = null);

(statearr_37316_37384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (35))){
var inst_37245 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37317_37385 = state_37263__$1;
(statearr_37317_37385[(2)] = inst_37245);

(statearr_37317_37385[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (19))){
var inst_37164 = (state_37263[(7)]);
var inst_37168 = cljs.core.chunk_first.call(null,inst_37164);
var inst_37169 = cljs.core.chunk_rest.call(null,inst_37164);
var inst_37170 = cljs.core.count.call(null,inst_37168);
var inst_37144 = inst_37169;
var inst_37145 = inst_37168;
var inst_37146 = inst_37170;
var inst_37147 = (0);
var state_37263__$1 = (function (){var statearr_37318 = state_37263;
(statearr_37318[(13)] = inst_37147);

(statearr_37318[(14)] = inst_37146);

(statearr_37318[(15)] = inst_37144);

(statearr_37318[(17)] = inst_37145);

return statearr_37318;
})();
var statearr_37319_37386 = state_37263__$1;
(statearr_37319_37386[(2)] = null);

(statearr_37319_37386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (11))){
var inst_37144 = (state_37263[(15)]);
var inst_37164 = (state_37263[(7)]);
var inst_37164__$1 = cljs.core.seq.call(null,inst_37144);
var state_37263__$1 = (function (){var statearr_37320 = state_37263;
(statearr_37320[(7)] = inst_37164__$1);

return statearr_37320;
})();
if(inst_37164__$1){
var statearr_37321_37387 = state_37263__$1;
(statearr_37321_37387[(1)] = (16));

} else {
var statearr_37322_37388 = state_37263__$1;
(statearr_37322_37388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (9))){
var inst_37192 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37323_37389 = state_37263__$1;
(statearr_37323_37389[(2)] = inst_37192);

(statearr_37323_37389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (5))){
var inst_37142 = cljs.core.deref.call(null,cs);
var inst_37143 = cljs.core.seq.call(null,inst_37142);
var inst_37144 = inst_37143;
var inst_37145 = null;
var inst_37146 = (0);
var inst_37147 = (0);
var state_37263__$1 = (function (){var statearr_37324 = state_37263;
(statearr_37324[(13)] = inst_37147);

(statearr_37324[(14)] = inst_37146);

(statearr_37324[(15)] = inst_37144);

(statearr_37324[(17)] = inst_37145);

return statearr_37324;
})();
var statearr_37325_37390 = state_37263__$1;
(statearr_37325_37390[(2)] = null);

(statearr_37325_37390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (14))){
var state_37263__$1 = state_37263;
var statearr_37326_37391 = state_37263__$1;
(statearr_37326_37391[(2)] = null);

(statearr_37326_37391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (45))){
var inst_37253 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37327_37392 = state_37263__$1;
(statearr_37327_37392[(2)] = inst_37253);

(statearr_37327_37392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (26))){
var inst_37195 = (state_37263[(29)]);
var inst_37249 = (state_37263[(2)]);
var inst_37250 = cljs.core.seq.call(null,inst_37195);
var state_37263__$1 = (function (){var statearr_37328 = state_37263;
(statearr_37328[(31)] = inst_37249);

return statearr_37328;
})();
if(inst_37250){
var statearr_37329_37393 = state_37263__$1;
(statearr_37329_37393[(1)] = (42));

} else {
var statearr_37330_37394 = state_37263__$1;
(statearr_37330_37394[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (16))){
var inst_37164 = (state_37263[(7)]);
var inst_37166 = cljs.core.chunked_seq_QMARK_.call(null,inst_37164);
var state_37263__$1 = state_37263;
if(inst_37166){
var statearr_37331_37395 = state_37263__$1;
(statearr_37331_37395[(1)] = (19));

} else {
var statearr_37332_37396 = state_37263__$1;
(statearr_37332_37396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (38))){
var inst_37242 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37333_37397 = state_37263__$1;
(statearr_37333_37397[(2)] = inst_37242);

(statearr_37333_37397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (30))){
var state_37263__$1 = state_37263;
var statearr_37334_37398 = state_37263__$1;
(statearr_37334_37398[(2)] = null);

(statearr_37334_37398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (10))){
var inst_37147 = (state_37263[(13)]);
var inst_37145 = (state_37263[(17)]);
var inst_37153 = cljs.core._nth.call(null,inst_37145,inst_37147);
var inst_37154 = cljs.core.nth.call(null,inst_37153,(0),null);
var inst_37155 = cljs.core.nth.call(null,inst_37153,(1),null);
var state_37263__$1 = (function (){var statearr_37335 = state_37263;
(statearr_37335[(26)] = inst_37154);

return statearr_37335;
})();
if(cljs.core.truth_(inst_37155)){
var statearr_37336_37399 = state_37263__$1;
(statearr_37336_37399[(1)] = (13));

} else {
var statearr_37337_37400 = state_37263__$1;
(statearr_37337_37400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (18))){
var inst_37188 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37338_37401 = state_37263__$1;
(statearr_37338_37401[(2)] = inst_37188);

(statearr_37338_37401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (42))){
var state_37263__$1 = state_37263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37263__$1,(45),dchan);
} else {
if((state_val_37264 === (37))){
var inst_37135 = (state_37263[(9)]);
var inst_37222 = (state_37263[(25)]);
var inst_37231 = (state_37263[(23)]);
var inst_37231__$1 = cljs.core.first.call(null,inst_37222);
var inst_37232 = cljs.core.async.put_BANG_.call(null,inst_37231__$1,inst_37135,done);
var state_37263__$1 = (function (){var statearr_37339 = state_37263;
(statearr_37339[(23)] = inst_37231__$1);

return statearr_37339;
})();
if(cljs.core.truth_(inst_37232)){
var statearr_37340_37402 = state_37263__$1;
(statearr_37340_37402[(1)] = (39));

} else {
var statearr_37341_37403 = state_37263__$1;
(statearr_37341_37403[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (8))){
var inst_37147 = (state_37263[(13)]);
var inst_37146 = (state_37263[(14)]);
var inst_37149 = (inst_37147 < inst_37146);
var inst_37150 = inst_37149;
var state_37263__$1 = state_37263;
if(cljs.core.truth_(inst_37150)){
var statearr_37342_37404 = state_37263__$1;
(statearr_37342_37404[(1)] = (10));

} else {
var statearr_37343_37405 = state_37263__$1;
(statearr_37343_37405[(1)] = (11));

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
});})(c__7043__auto___37351,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___37351,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_37347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37347[(0)] = state_machine__6988__auto__);

(statearr_37347[(1)] = (1));

return statearr_37347;
});
var state_machine__6988__auto____1 = (function (state_37263){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_37263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e37348){if((e37348 instanceof Object)){
var ex__6991__auto__ = e37348;
var statearr_37349_37406 = state_37263;
(statearr_37349_37406[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37407 = state_37263;
state_37263 = G__37407;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_37263){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_37263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___37351,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_37350 = f__7044__auto__.call(null);
(statearr_37350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___37351);

return statearr_37350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___37351,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj37409 = {};
return obj37409;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__37410){
var map__37415 = p__37410;
var map__37415__$1 = ((cljs.core.seq_QMARK_.call(null,map__37415))?cljs.core.apply.call(null,cljs.core.hash_map,map__37415):map__37415);
var opts = map__37415__$1;
var statearr_37416_37419 = state;
(statearr_37416_37419[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__37415,map__37415__$1,opts){
return (function (val){
var statearr_37417_37420 = state;
(statearr_37417_37420[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37415,map__37415__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_37418_37421 = state;
(statearr_37418_37421[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__37410 = null;
if (arguments.length > 3) {
  p__37410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__37410);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__37422){
var state = cljs.core.first(arglist__37422);
arglist__37422 = cljs.core.next(arglist__37422);
var cont_block = cljs.core.first(arglist__37422);
arglist__37422 = cljs.core.next(arglist__37422);
var ports = cljs.core.first(arglist__37422);
var p__37410 = cljs.core.rest(arglist__37422);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__37410);
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
if(typeof cljs.core.async.t37542 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37542 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37543){
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
this.meta37543 = meta37543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37542.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37542.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t37542.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37544){
var self__ = this;
var _37544__$1 = this;
return self__.meta37543;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37544,meta37543__$1){
var self__ = this;
var _37544__$1 = this;
return (new cljs.core.async.t37542(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37543__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37542.cljs$lang$type = true;

cljs.core.async.t37542.cljs$lang$ctorStr = "cljs.core.async/t37542";

cljs.core.async.t37542.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t37542");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37542 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37542(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37543){
return (new cljs.core.async.t37542(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37543));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37542(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___37661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37614){
var state_val_37615 = (state_37614[(1)]);
if((state_val_37615 === (7))){
var inst_37558 = (state_37614[(7)]);
var inst_37563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37558);
var state_37614__$1 = state_37614;
var statearr_37616_37662 = state_37614__$1;
(statearr_37616_37662[(2)] = inst_37563);

(statearr_37616_37662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (20))){
var inst_37573 = (state_37614[(8)]);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37614__$1,(23),out,inst_37573);
} else {
if((state_val_37615 === (1))){
var inst_37548 = (state_37614[(9)]);
var inst_37548__$1 = calc_state.call(null);
var inst_37549 = cljs.core.seq_QMARK_.call(null,inst_37548__$1);
var state_37614__$1 = (function (){var statearr_37617 = state_37614;
(statearr_37617[(9)] = inst_37548__$1);

return statearr_37617;
})();
if(inst_37549){
var statearr_37618_37663 = state_37614__$1;
(statearr_37618_37663[(1)] = (2));

} else {
var statearr_37619_37664 = state_37614__$1;
(statearr_37619_37664[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (24))){
var inst_37566 = (state_37614[(10)]);
var inst_37558 = inst_37566;
var state_37614__$1 = (function (){var statearr_37620 = state_37614;
(statearr_37620[(7)] = inst_37558);

return statearr_37620;
})();
var statearr_37621_37665 = state_37614__$1;
(statearr_37621_37665[(2)] = null);

(statearr_37621_37665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (4))){
var inst_37548 = (state_37614[(9)]);
var inst_37554 = (state_37614[(2)]);
var inst_37555 = cljs.core.get.call(null,inst_37554,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37556 = cljs.core.get.call(null,inst_37554,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37557 = cljs.core.get.call(null,inst_37554,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37558 = inst_37548;
var state_37614__$1 = (function (){var statearr_37622 = state_37614;
(statearr_37622[(11)] = inst_37555);

(statearr_37622[(12)] = inst_37556);

(statearr_37622[(13)] = inst_37557);

(statearr_37622[(7)] = inst_37558);

return statearr_37622;
})();
var statearr_37623_37666 = state_37614__$1;
(statearr_37623_37666[(2)] = null);

(statearr_37623_37666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (15))){
var state_37614__$1 = state_37614;
var statearr_37624_37667 = state_37614__$1;
(statearr_37624_37667[(2)] = null);

(statearr_37624_37667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (21))){
var inst_37566 = (state_37614[(10)]);
var inst_37558 = inst_37566;
var state_37614__$1 = (function (){var statearr_37625 = state_37614;
(statearr_37625[(7)] = inst_37558);

return statearr_37625;
})();
var statearr_37626_37668 = state_37614__$1;
(statearr_37626_37668[(2)] = null);

(statearr_37626_37668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (13))){
var inst_37610 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37627_37669 = state_37614__$1;
(statearr_37627_37669[(2)] = inst_37610);

(statearr_37627_37669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (22))){
var inst_37608 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37628_37670 = state_37614__$1;
(statearr_37628_37670[(2)] = inst_37608);

(statearr_37628_37670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (6))){
var inst_37612 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37614__$1,inst_37612);
} else {
if((state_val_37615 === (25))){
var state_37614__$1 = state_37614;
var statearr_37629_37671 = state_37614__$1;
(statearr_37629_37671[(2)] = null);

(statearr_37629_37671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (17))){
var inst_37588 = (state_37614[(14)]);
var state_37614__$1 = state_37614;
var statearr_37630_37672 = state_37614__$1;
(statearr_37630_37672[(2)] = inst_37588);

(statearr_37630_37672[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (3))){
var inst_37548 = (state_37614[(9)]);
var state_37614__$1 = state_37614;
var statearr_37631_37673 = state_37614__$1;
(statearr_37631_37673[(2)] = inst_37548);

(statearr_37631_37673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (12))){
var inst_37588 = (state_37614[(14)]);
var inst_37574 = (state_37614[(15)]);
var inst_37569 = (state_37614[(16)]);
var inst_37588__$1 = inst_37569.call(null,inst_37574);
var state_37614__$1 = (function (){var statearr_37632 = state_37614;
(statearr_37632[(14)] = inst_37588__$1);

return statearr_37632;
})();
if(cljs.core.truth_(inst_37588__$1)){
var statearr_37633_37674 = state_37614__$1;
(statearr_37633_37674[(1)] = (17));

} else {
var statearr_37634_37675 = state_37614__$1;
(statearr_37634_37675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (2))){
var inst_37548 = (state_37614[(9)]);
var inst_37551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37548);
var state_37614__$1 = state_37614;
var statearr_37635_37676 = state_37614__$1;
(statearr_37635_37676[(2)] = inst_37551);

(statearr_37635_37676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (23))){
var inst_37599 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37599)){
var statearr_37636_37677 = state_37614__$1;
(statearr_37636_37677[(1)] = (24));

} else {
var statearr_37637_37678 = state_37614__$1;
(statearr_37637_37678[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (19))){
var inst_37596 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37596)){
var statearr_37638_37679 = state_37614__$1;
(statearr_37638_37679[(1)] = (20));

} else {
var statearr_37639_37680 = state_37614__$1;
(statearr_37639_37680[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (11))){
var inst_37573 = (state_37614[(8)]);
var inst_37579 = (inst_37573 == null);
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37579)){
var statearr_37640_37681 = state_37614__$1;
(statearr_37640_37681[(1)] = (14));

} else {
var statearr_37641_37682 = state_37614__$1;
(statearr_37641_37682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (9))){
var inst_37566 = (state_37614[(10)]);
var inst_37566__$1 = (state_37614[(2)]);
var inst_37567 = cljs.core.get.call(null,inst_37566__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37568 = cljs.core.get.call(null,inst_37566__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37569 = cljs.core.get.call(null,inst_37566__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_37614__$1 = (function (){var statearr_37642 = state_37614;
(statearr_37642[(16)] = inst_37569);

(statearr_37642[(10)] = inst_37566__$1);

(statearr_37642[(17)] = inst_37568);

return statearr_37642;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37614__$1,(10),inst_37567);
} else {
if((state_val_37615 === (5))){
var inst_37558 = (state_37614[(7)]);
var inst_37561 = cljs.core.seq_QMARK_.call(null,inst_37558);
var state_37614__$1 = state_37614;
if(inst_37561){
var statearr_37643_37683 = state_37614__$1;
(statearr_37643_37683[(1)] = (7));

} else {
var statearr_37644_37684 = state_37614__$1;
(statearr_37644_37684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (14))){
var inst_37574 = (state_37614[(15)]);
var inst_37581 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37574);
var state_37614__$1 = state_37614;
var statearr_37645_37685 = state_37614__$1;
(statearr_37645_37685[(2)] = inst_37581);

(statearr_37645_37685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (26))){
var inst_37604 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37646_37686 = state_37614__$1;
(statearr_37646_37686[(2)] = inst_37604);

(statearr_37646_37686[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (16))){
var inst_37584 = (state_37614[(2)]);
var inst_37585 = calc_state.call(null);
var inst_37558 = inst_37585;
var state_37614__$1 = (function (){var statearr_37647 = state_37614;
(statearr_37647[(7)] = inst_37558);

(statearr_37647[(18)] = inst_37584);

return statearr_37647;
})();
var statearr_37648_37687 = state_37614__$1;
(statearr_37648_37687[(2)] = null);

(statearr_37648_37687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (10))){
var inst_37574 = (state_37614[(15)]);
var inst_37573 = (state_37614[(8)]);
var inst_37572 = (state_37614[(2)]);
var inst_37573__$1 = cljs.core.nth.call(null,inst_37572,(0),null);
var inst_37574__$1 = cljs.core.nth.call(null,inst_37572,(1),null);
var inst_37575 = (inst_37573__$1 == null);
var inst_37576 = cljs.core._EQ_.call(null,inst_37574__$1,change);
var inst_37577 = (inst_37575) || (inst_37576);
var state_37614__$1 = (function (){var statearr_37649 = state_37614;
(statearr_37649[(15)] = inst_37574__$1);

(statearr_37649[(8)] = inst_37573__$1);

return statearr_37649;
})();
if(cljs.core.truth_(inst_37577)){
var statearr_37650_37688 = state_37614__$1;
(statearr_37650_37688[(1)] = (11));

} else {
var statearr_37651_37689 = state_37614__$1;
(statearr_37651_37689[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (18))){
var inst_37574 = (state_37614[(15)]);
var inst_37569 = (state_37614[(16)]);
var inst_37568 = (state_37614[(17)]);
var inst_37591 = cljs.core.empty_QMARK_.call(null,inst_37569);
var inst_37592 = inst_37568.call(null,inst_37574);
var inst_37593 = cljs.core.not.call(null,inst_37592);
var inst_37594 = (inst_37591) && (inst_37593);
var state_37614__$1 = state_37614;
var statearr_37652_37690 = state_37614__$1;
(statearr_37652_37690[(2)] = inst_37594);

(statearr_37652_37690[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (8))){
var inst_37558 = (state_37614[(7)]);
var state_37614__$1 = state_37614;
var statearr_37653_37691 = state_37614__$1;
(statearr_37653_37691[(2)] = inst_37558);

(statearr_37653_37691[(1)] = (9));


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
});})(c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_37657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37657[(0)] = state_machine__6988__auto__);

(statearr_37657[(1)] = (1));

return statearr_37657;
});
var state_machine__6988__auto____1 = (function (state_37614){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_37614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e37658){if((e37658 instanceof Object)){
var ex__6991__auto__ = e37658;
var statearr_37659_37692 = state_37614;
(statearr_37659_37692[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37693 = state_37614;
state_37614 = G__37693;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_37614){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_37614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_37660 = f__7044__auto__.call(null);
(statearr_37660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___37661);

return statearr_37660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___37661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj37695 = {};
return obj37695;
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
return (function (p1__37696_SHARP_){
if(cljs.core.truth_(p1__37696_SHARP_.call(null,topic))){
return p1__37696_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37696_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37819 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37820){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37820 = meta37820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37819.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37819.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37819.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t37819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37819.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37821){
var self__ = this;
var _37821__$1 = this;
return self__.meta37820;
});})(mults,ensure_mult))
;

cljs.core.async.t37819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37821,meta37820__$1){
var self__ = this;
var _37821__$1 = this;
return (new cljs.core.async.t37819(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37820__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37819.cljs$lang$type = true;

cljs.core.async.t37819.cljs$lang$ctorStr = "cljs.core.async/t37819";

cljs.core.async.t37819.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t37819");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37819 = ((function (mults,ensure_mult){
return (function __GT_t37819(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37820){
return (new cljs.core.async.t37819(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37820));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37819(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___37941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___37941,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___37941,mults,ensure_mult,p){
return (function (state_37893){
var state_val_37894 = (state_37893[(1)]);
if((state_val_37894 === (7))){
var inst_37889 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37895_37942 = state_37893__$1;
(statearr_37895_37942[(2)] = inst_37889);

(statearr_37895_37942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (20))){
var state_37893__$1 = state_37893;
var statearr_37896_37943 = state_37893__$1;
(statearr_37896_37943[(2)] = null);

(statearr_37896_37943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (1))){
var state_37893__$1 = state_37893;
var statearr_37897_37944 = state_37893__$1;
(statearr_37897_37944[(2)] = null);

(statearr_37897_37944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (24))){
var inst_37872 = (state_37893[(7)]);
var inst_37881 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37872);
var state_37893__$1 = state_37893;
var statearr_37898_37945 = state_37893__$1;
(statearr_37898_37945[(2)] = inst_37881);

(statearr_37898_37945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (4))){
var inst_37824 = (state_37893[(8)]);
var inst_37824__$1 = (state_37893[(2)]);
var inst_37825 = (inst_37824__$1 == null);
var state_37893__$1 = (function (){var statearr_37899 = state_37893;
(statearr_37899[(8)] = inst_37824__$1);

return statearr_37899;
})();
if(cljs.core.truth_(inst_37825)){
var statearr_37900_37946 = state_37893__$1;
(statearr_37900_37946[(1)] = (5));

} else {
var statearr_37901_37947 = state_37893__$1;
(statearr_37901_37947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (15))){
var inst_37866 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37902_37948 = state_37893__$1;
(statearr_37902_37948[(2)] = inst_37866);

(statearr_37902_37948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (21))){
var inst_37886 = (state_37893[(2)]);
var state_37893__$1 = (function (){var statearr_37903 = state_37893;
(statearr_37903[(9)] = inst_37886);

return statearr_37903;
})();
var statearr_37904_37949 = state_37893__$1;
(statearr_37904_37949[(2)] = null);

(statearr_37904_37949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (13))){
var inst_37848 = (state_37893[(10)]);
var inst_37850 = cljs.core.chunked_seq_QMARK_.call(null,inst_37848);
var state_37893__$1 = state_37893;
if(inst_37850){
var statearr_37905_37950 = state_37893__$1;
(statearr_37905_37950[(1)] = (16));

} else {
var statearr_37906_37951 = state_37893__$1;
(statearr_37906_37951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (22))){
var inst_37878 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
if(cljs.core.truth_(inst_37878)){
var statearr_37907_37952 = state_37893__$1;
(statearr_37907_37952[(1)] = (23));

} else {
var statearr_37908_37953 = state_37893__$1;
(statearr_37908_37953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (6))){
var inst_37874 = (state_37893[(11)]);
var inst_37872 = (state_37893[(7)]);
var inst_37824 = (state_37893[(8)]);
var inst_37872__$1 = topic_fn.call(null,inst_37824);
var inst_37873 = cljs.core.deref.call(null,mults);
var inst_37874__$1 = cljs.core.get.call(null,inst_37873,inst_37872__$1);
var state_37893__$1 = (function (){var statearr_37909 = state_37893;
(statearr_37909[(11)] = inst_37874__$1);

(statearr_37909[(7)] = inst_37872__$1);

return statearr_37909;
})();
if(cljs.core.truth_(inst_37874__$1)){
var statearr_37910_37954 = state_37893__$1;
(statearr_37910_37954[(1)] = (19));

} else {
var statearr_37911_37955 = state_37893__$1;
(statearr_37911_37955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (25))){
var inst_37883 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37912_37956 = state_37893__$1;
(statearr_37912_37956[(2)] = inst_37883);

(statearr_37912_37956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (17))){
var inst_37848 = (state_37893[(10)]);
var inst_37857 = cljs.core.first.call(null,inst_37848);
var inst_37858 = cljs.core.async.muxch_STAR_.call(null,inst_37857);
var inst_37859 = cljs.core.async.close_BANG_.call(null,inst_37858);
var inst_37860 = cljs.core.next.call(null,inst_37848);
var inst_37834 = inst_37860;
var inst_37835 = null;
var inst_37836 = (0);
var inst_37837 = (0);
var state_37893__$1 = (function (){var statearr_37913 = state_37893;
(statearr_37913[(12)] = inst_37859);

(statearr_37913[(13)] = inst_37835);

(statearr_37913[(14)] = inst_37834);

(statearr_37913[(15)] = inst_37836);

(statearr_37913[(16)] = inst_37837);

return statearr_37913;
})();
var statearr_37914_37957 = state_37893__$1;
(statearr_37914_37957[(2)] = null);

(statearr_37914_37957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (3))){
var inst_37891 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37893__$1,inst_37891);
} else {
if((state_val_37894 === (12))){
var inst_37868 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37915_37958 = state_37893__$1;
(statearr_37915_37958[(2)] = inst_37868);

(statearr_37915_37958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (2))){
var state_37893__$1 = state_37893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37893__$1,(4),ch);
} else {
if((state_val_37894 === (23))){
var state_37893__$1 = state_37893;
var statearr_37916_37959 = state_37893__$1;
(statearr_37916_37959[(2)] = null);

(statearr_37916_37959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (19))){
var inst_37874 = (state_37893[(11)]);
var inst_37824 = (state_37893[(8)]);
var inst_37876 = cljs.core.async.muxch_STAR_.call(null,inst_37874);
var state_37893__$1 = state_37893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37893__$1,(22),inst_37876,inst_37824);
} else {
if((state_val_37894 === (11))){
var inst_37834 = (state_37893[(14)]);
var inst_37848 = (state_37893[(10)]);
var inst_37848__$1 = cljs.core.seq.call(null,inst_37834);
var state_37893__$1 = (function (){var statearr_37917 = state_37893;
(statearr_37917[(10)] = inst_37848__$1);

return statearr_37917;
})();
if(inst_37848__$1){
var statearr_37918_37960 = state_37893__$1;
(statearr_37918_37960[(1)] = (13));

} else {
var statearr_37919_37961 = state_37893__$1;
(statearr_37919_37961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (9))){
var inst_37870 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37920_37962 = state_37893__$1;
(statearr_37920_37962[(2)] = inst_37870);

(statearr_37920_37962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (5))){
var inst_37831 = cljs.core.deref.call(null,mults);
var inst_37832 = cljs.core.vals.call(null,inst_37831);
var inst_37833 = cljs.core.seq.call(null,inst_37832);
var inst_37834 = inst_37833;
var inst_37835 = null;
var inst_37836 = (0);
var inst_37837 = (0);
var state_37893__$1 = (function (){var statearr_37921 = state_37893;
(statearr_37921[(13)] = inst_37835);

(statearr_37921[(14)] = inst_37834);

(statearr_37921[(15)] = inst_37836);

(statearr_37921[(16)] = inst_37837);

return statearr_37921;
})();
var statearr_37922_37963 = state_37893__$1;
(statearr_37922_37963[(2)] = null);

(statearr_37922_37963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (14))){
var state_37893__$1 = state_37893;
var statearr_37926_37964 = state_37893__$1;
(statearr_37926_37964[(2)] = null);

(statearr_37926_37964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (16))){
var inst_37848 = (state_37893[(10)]);
var inst_37852 = cljs.core.chunk_first.call(null,inst_37848);
var inst_37853 = cljs.core.chunk_rest.call(null,inst_37848);
var inst_37854 = cljs.core.count.call(null,inst_37852);
var inst_37834 = inst_37853;
var inst_37835 = inst_37852;
var inst_37836 = inst_37854;
var inst_37837 = (0);
var state_37893__$1 = (function (){var statearr_37927 = state_37893;
(statearr_37927[(13)] = inst_37835);

(statearr_37927[(14)] = inst_37834);

(statearr_37927[(15)] = inst_37836);

(statearr_37927[(16)] = inst_37837);

return statearr_37927;
})();
var statearr_37928_37965 = state_37893__$1;
(statearr_37928_37965[(2)] = null);

(statearr_37928_37965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (10))){
var inst_37835 = (state_37893[(13)]);
var inst_37834 = (state_37893[(14)]);
var inst_37836 = (state_37893[(15)]);
var inst_37837 = (state_37893[(16)]);
var inst_37842 = cljs.core._nth.call(null,inst_37835,inst_37837);
var inst_37843 = cljs.core.async.muxch_STAR_.call(null,inst_37842);
var inst_37844 = cljs.core.async.close_BANG_.call(null,inst_37843);
var inst_37845 = (inst_37837 + (1));
var tmp37923 = inst_37835;
var tmp37924 = inst_37834;
var tmp37925 = inst_37836;
var inst_37834__$1 = tmp37924;
var inst_37835__$1 = tmp37923;
var inst_37836__$1 = tmp37925;
var inst_37837__$1 = inst_37845;
var state_37893__$1 = (function (){var statearr_37929 = state_37893;
(statearr_37929[(17)] = inst_37844);

(statearr_37929[(13)] = inst_37835__$1);

(statearr_37929[(14)] = inst_37834__$1);

(statearr_37929[(15)] = inst_37836__$1);

(statearr_37929[(16)] = inst_37837__$1);

return statearr_37929;
})();
var statearr_37930_37966 = state_37893__$1;
(statearr_37930_37966[(2)] = null);

(statearr_37930_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (18))){
var inst_37863 = (state_37893[(2)]);
var state_37893__$1 = state_37893;
var statearr_37931_37967 = state_37893__$1;
(statearr_37931_37967[(2)] = inst_37863);

(statearr_37931_37967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37894 === (8))){
var inst_37836 = (state_37893[(15)]);
var inst_37837 = (state_37893[(16)]);
var inst_37839 = (inst_37837 < inst_37836);
var inst_37840 = inst_37839;
var state_37893__$1 = state_37893;
if(cljs.core.truth_(inst_37840)){
var statearr_37932_37968 = state_37893__$1;
(statearr_37932_37968[(1)] = (10));

} else {
var statearr_37933_37969 = state_37893__$1;
(statearr_37933_37969[(1)] = (11));

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
});})(c__7043__auto___37941,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___37941,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_37937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37937[(0)] = state_machine__6988__auto__);

(statearr_37937[(1)] = (1));

return statearr_37937;
});
var state_machine__6988__auto____1 = (function (state_37893){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_37893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e37938){if((e37938 instanceof Object)){
var ex__6991__auto__ = e37938;
var statearr_37939_37970 = state_37893;
(statearr_37939_37970[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37971 = state_37893;
state_37893 = G__37971;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_37893){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_37893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___37941,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_37940 = f__7044__auto__.call(null);
(statearr_37940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___37941);

return statearr_37940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___37941,mults,ensure_mult,p))
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
var c__7043__auto___38108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38078){
var state_val_38079 = (state_38078[(1)]);
if((state_val_38079 === (7))){
var state_38078__$1 = state_38078;
var statearr_38080_38109 = state_38078__$1;
(statearr_38080_38109[(2)] = null);

(statearr_38080_38109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (1))){
var state_38078__$1 = state_38078;
var statearr_38081_38110 = state_38078__$1;
(statearr_38081_38110[(2)] = null);

(statearr_38081_38110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (4))){
var inst_38042 = (state_38078[(7)]);
var inst_38044 = (inst_38042 < cnt);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38044)){
var statearr_38082_38111 = state_38078__$1;
(statearr_38082_38111[(1)] = (6));

} else {
var statearr_38083_38112 = state_38078__$1;
(statearr_38083_38112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (15))){
var inst_38074 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38084_38113 = state_38078__$1;
(statearr_38084_38113[(2)] = inst_38074);

(statearr_38084_38113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (13))){
var inst_38067 = cljs.core.async.close_BANG_.call(null,out);
var state_38078__$1 = state_38078;
var statearr_38085_38114 = state_38078__$1;
(statearr_38085_38114[(2)] = inst_38067);

(statearr_38085_38114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (6))){
var state_38078__$1 = state_38078;
var statearr_38086_38115 = state_38078__$1;
(statearr_38086_38115[(2)] = null);

(statearr_38086_38115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (3))){
var inst_38076 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38078__$1,inst_38076);
} else {
if((state_val_38079 === (12))){
var inst_38064 = (state_38078[(8)]);
var inst_38064__$1 = (state_38078[(2)]);
var inst_38065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38064__$1);
var state_38078__$1 = (function (){var statearr_38087 = state_38078;
(statearr_38087[(8)] = inst_38064__$1);

return statearr_38087;
})();
if(cljs.core.truth_(inst_38065)){
var statearr_38088_38116 = state_38078__$1;
(statearr_38088_38116[(1)] = (13));

} else {
var statearr_38089_38117 = state_38078__$1;
(statearr_38089_38117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (2))){
var inst_38041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38042 = (0);
var state_38078__$1 = (function (){var statearr_38090 = state_38078;
(statearr_38090[(7)] = inst_38042);

(statearr_38090[(9)] = inst_38041);

return statearr_38090;
})();
var statearr_38091_38118 = state_38078__$1;
(statearr_38091_38118[(2)] = null);

(statearr_38091_38118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (11))){
var inst_38042 = (state_38078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38078,(10),Object,null,(9));
var inst_38051 = chs__$1.call(null,inst_38042);
var inst_38052 = done.call(null,inst_38042);
var inst_38053 = cljs.core.async.take_BANG_.call(null,inst_38051,inst_38052);
var state_38078__$1 = state_38078;
var statearr_38092_38119 = state_38078__$1;
(statearr_38092_38119[(2)] = inst_38053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (9))){
var inst_38042 = (state_38078[(7)]);
var inst_38055 = (state_38078[(2)]);
var inst_38056 = (inst_38042 + (1));
var inst_38042__$1 = inst_38056;
var state_38078__$1 = (function (){var statearr_38093 = state_38078;
(statearr_38093[(7)] = inst_38042__$1);

(statearr_38093[(10)] = inst_38055);

return statearr_38093;
})();
var statearr_38094_38120 = state_38078__$1;
(statearr_38094_38120[(2)] = null);

(statearr_38094_38120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (5))){
var inst_38062 = (state_38078[(2)]);
var state_38078__$1 = (function (){var statearr_38095 = state_38078;
(statearr_38095[(11)] = inst_38062);

return statearr_38095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38078__$1,(12),dchan);
} else {
if((state_val_38079 === (14))){
var inst_38064 = (state_38078[(8)]);
var inst_38069 = cljs.core.apply.call(null,f,inst_38064);
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38078__$1,(16),out,inst_38069);
} else {
if((state_val_38079 === (16))){
var inst_38071 = (state_38078[(2)]);
var state_38078__$1 = (function (){var statearr_38096 = state_38078;
(statearr_38096[(12)] = inst_38071);

return statearr_38096;
})();
var statearr_38097_38121 = state_38078__$1;
(statearr_38097_38121[(2)] = null);

(statearr_38097_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (10))){
var inst_38046 = (state_38078[(2)]);
var inst_38047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38078__$1 = (function (){var statearr_38098 = state_38078;
(statearr_38098[(13)] = inst_38046);

return statearr_38098;
})();
var statearr_38099_38122 = state_38078__$1;
(statearr_38099_38122[(2)] = inst_38047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (8))){
var inst_38060 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38100_38123 = state_38078__$1;
(statearr_38100_38123[(2)] = inst_38060);

(statearr_38100_38123[(1)] = (5));


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
});})(c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38104[(0)] = state_machine__6988__auto__);

(statearr_38104[(1)] = (1));

return statearr_38104;
});
var state_machine__6988__auto____1 = (function (state_38078){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38105){if((e38105 instanceof Object)){
var ex__6991__auto__ = e38105;
var statearr_38106_38124 = state_38078;
(statearr_38106_38124[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_38078;
state_38078 = G__38125;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38078){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_38107 = f__7044__auto__.call(null);
(statearr_38107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38108);

return statearr_38107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38108,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___38233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38233,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38233,out){
return (function (state_38209){
var state_val_38210 = (state_38209[(1)]);
if((state_val_38210 === (7))){
var inst_38188 = (state_38209[(7)]);
var inst_38189 = (state_38209[(8)]);
var inst_38188__$1 = (state_38209[(2)]);
var inst_38189__$1 = cljs.core.nth.call(null,inst_38188__$1,(0),null);
var inst_38190 = cljs.core.nth.call(null,inst_38188__$1,(1),null);
var inst_38191 = (inst_38189__$1 == null);
var state_38209__$1 = (function (){var statearr_38211 = state_38209;
(statearr_38211[(9)] = inst_38190);

(statearr_38211[(7)] = inst_38188__$1);

(statearr_38211[(8)] = inst_38189__$1);

return statearr_38211;
})();
if(cljs.core.truth_(inst_38191)){
var statearr_38212_38234 = state_38209__$1;
(statearr_38212_38234[(1)] = (8));

} else {
var statearr_38213_38235 = state_38209__$1;
(statearr_38213_38235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (1))){
var inst_38180 = cljs.core.vec.call(null,chs);
var inst_38181 = inst_38180;
var state_38209__$1 = (function (){var statearr_38214 = state_38209;
(statearr_38214[(10)] = inst_38181);

return statearr_38214;
})();
var statearr_38215_38236 = state_38209__$1;
(statearr_38215_38236[(2)] = null);

(statearr_38215_38236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (4))){
var inst_38181 = (state_38209[(10)]);
var state_38209__$1 = state_38209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38209__$1,(7),inst_38181);
} else {
if((state_val_38210 === (6))){
var inst_38205 = (state_38209[(2)]);
var state_38209__$1 = state_38209;
var statearr_38216_38237 = state_38209__$1;
(statearr_38216_38237[(2)] = inst_38205);

(statearr_38216_38237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (3))){
var inst_38207 = (state_38209[(2)]);
var state_38209__$1 = state_38209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38209__$1,inst_38207);
} else {
if((state_val_38210 === (2))){
var inst_38181 = (state_38209[(10)]);
var inst_38183 = cljs.core.count.call(null,inst_38181);
var inst_38184 = (inst_38183 > (0));
var state_38209__$1 = state_38209;
if(cljs.core.truth_(inst_38184)){
var statearr_38218_38238 = state_38209__$1;
(statearr_38218_38238[(1)] = (4));

} else {
var statearr_38219_38239 = state_38209__$1;
(statearr_38219_38239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (11))){
var inst_38181 = (state_38209[(10)]);
var inst_38198 = (state_38209[(2)]);
var tmp38217 = inst_38181;
var inst_38181__$1 = tmp38217;
var state_38209__$1 = (function (){var statearr_38220 = state_38209;
(statearr_38220[(10)] = inst_38181__$1);

(statearr_38220[(11)] = inst_38198);

return statearr_38220;
})();
var statearr_38221_38240 = state_38209__$1;
(statearr_38221_38240[(2)] = null);

(statearr_38221_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (9))){
var inst_38189 = (state_38209[(8)]);
var state_38209__$1 = state_38209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38209__$1,(11),out,inst_38189);
} else {
if((state_val_38210 === (5))){
var inst_38203 = cljs.core.async.close_BANG_.call(null,out);
var state_38209__$1 = state_38209;
var statearr_38222_38241 = state_38209__$1;
(statearr_38222_38241[(2)] = inst_38203);

(statearr_38222_38241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (10))){
var inst_38201 = (state_38209[(2)]);
var state_38209__$1 = state_38209;
var statearr_38223_38242 = state_38209__$1;
(statearr_38223_38242[(2)] = inst_38201);

(statearr_38223_38242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38210 === (8))){
var inst_38190 = (state_38209[(9)]);
var inst_38181 = (state_38209[(10)]);
var inst_38188 = (state_38209[(7)]);
var inst_38189 = (state_38209[(8)]);
var inst_38193 = (function (){var c = inst_38190;
var v = inst_38189;
var vec__38186 = inst_38188;
var cs = inst_38181;
return ((function (c,v,vec__38186,cs,inst_38190,inst_38181,inst_38188,inst_38189,state_val_38210,c__7043__auto___38233,out){
return (function (p1__38126_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38126_SHARP_);
});
;})(c,v,vec__38186,cs,inst_38190,inst_38181,inst_38188,inst_38189,state_val_38210,c__7043__auto___38233,out))
})();
var inst_38194 = cljs.core.filterv.call(null,inst_38193,inst_38181);
var inst_38181__$1 = inst_38194;
var state_38209__$1 = (function (){var statearr_38224 = state_38209;
(statearr_38224[(10)] = inst_38181__$1);

return statearr_38224;
})();
var statearr_38225_38243 = state_38209__$1;
(statearr_38225_38243[(2)] = null);

(statearr_38225_38243[(1)] = (2));


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
});})(c__7043__auto___38233,out))
;
return ((function (switch__6987__auto__,c__7043__auto___38233,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38229[(0)] = state_machine__6988__auto__);

(statearr_38229[(1)] = (1));

return statearr_38229;
});
var state_machine__6988__auto____1 = (function (state_38209){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38230){if((e38230 instanceof Object)){
var ex__6991__auto__ = e38230;
var statearr_38231_38244 = state_38209;
(statearr_38231_38244[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38245 = state_38209;
state_38209 = G__38245;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38209){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38233,out))
})();
var state__7045__auto__ = (function (){var statearr_38232 = f__7044__auto__.call(null);
(statearr_38232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38233);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38233,out))
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
var c__7043__auto___38338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38338,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38338,out){
return (function (state_38315){
var state_val_38316 = (state_38315[(1)]);
if((state_val_38316 === (7))){
var inst_38297 = (state_38315[(7)]);
var inst_38297__$1 = (state_38315[(2)]);
var inst_38298 = (inst_38297__$1 == null);
var inst_38299 = cljs.core.not.call(null,inst_38298);
var state_38315__$1 = (function (){var statearr_38317 = state_38315;
(statearr_38317[(7)] = inst_38297__$1);

return statearr_38317;
})();
if(inst_38299){
var statearr_38318_38339 = state_38315__$1;
(statearr_38318_38339[(1)] = (8));

} else {
var statearr_38319_38340 = state_38315__$1;
(statearr_38319_38340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (1))){
var inst_38292 = (0);
var state_38315__$1 = (function (){var statearr_38320 = state_38315;
(statearr_38320[(8)] = inst_38292);

return statearr_38320;
})();
var statearr_38321_38341 = state_38315__$1;
(statearr_38321_38341[(2)] = null);

(statearr_38321_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (4))){
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38315__$1,(7),ch);
} else {
if((state_val_38316 === (6))){
var inst_38310 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38322_38342 = state_38315__$1;
(statearr_38322_38342[(2)] = inst_38310);

(statearr_38322_38342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (3))){
var inst_38312 = (state_38315[(2)]);
var inst_38313 = cljs.core.async.close_BANG_.call(null,out);
var state_38315__$1 = (function (){var statearr_38323 = state_38315;
(statearr_38323[(9)] = inst_38312);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38315__$1,inst_38313);
} else {
if((state_val_38316 === (2))){
var inst_38292 = (state_38315[(8)]);
var inst_38294 = (inst_38292 < n);
var state_38315__$1 = state_38315;
if(cljs.core.truth_(inst_38294)){
var statearr_38324_38343 = state_38315__$1;
(statearr_38324_38343[(1)] = (4));

} else {
var statearr_38325_38344 = state_38315__$1;
(statearr_38325_38344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (11))){
var inst_38292 = (state_38315[(8)]);
var inst_38302 = (state_38315[(2)]);
var inst_38303 = (inst_38292 + (1));
var inst_38292__$1 = inst_38303;
var state_38315__$1 = (function (){var statearr_38326 = state_38315;
(statearr_38326[(10)] = inst_38302);

(statearr_38326[(8)] = inst_38292__$1);

return statearr_38326;
})();
var statearr_38327_38345 = state_38315__$1;
(statearr_38327_38345[(2)] = null);

(statearr_38327_38345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (9))){
var state_38315__$1 = state_38315;
var statearr_38328_38346 = state_38315__$1;
(statearr_38328_38346[(2)] = null);

(statearr_38328_38346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (5))){
var state_38315__$1 = state_38315;
var statearr_38329_38347 = state_38315__$1;
(statearr_38329_38347[(2)] = null);

(statearr_38329_38347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (10))){
var inst_38307 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38330_38348 = state_38315__$1;
(statearr_38330_38348[(2)] = inst_38307);

(statearr_38330_38348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (8))){
var inst_38297 = (state_38315[(7)]);
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38315__$1,(11),out,inst_38297);
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
});})(c__7043__auto___38338,out))
;
return ((function (switch__6987__auto__,c__7043__auto___38338,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38334[(0)] = state_machine__6988__auto__);

(statearr_38334[(1)] = (1));

return statearr_38334;
});
var state_machine__6988__auto____1 = (function (state_38315){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38335){if((e38335 instanceof Object)){
var ex__6991__auto__ = e38335;
var statearr_38336_38349 = state_38315;
(statearr_38336_38349[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38350 = state_38315;
state_38315 = G__38350;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38315){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38338,out))
})();
var state__7045__auto__ = (function (){var statearr_38337 = f__7044__auto__.call(null);
(statearr_38337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38338);

return statearr_38337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38338,out))
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
if(typeof cljs.core.async.t38358 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38358 = (function (ch,f,map_LT_,meta38359){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38359 = meta38359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38361 = (function (fn1,_,meta38359,map_LT_,f,ch,meta38362){
this.fn1 = fn1;
this._ = _;
this.meta38359 = meta38359;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38362 = meta38362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38351_SHARP_){
return f1.call(null,(((p1__38351_SHARP_ == null))?null:self__.f.call(null,p1__38351_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38363){
var self__ = this;
var _38363__$1 = this;
return self__.meta38362;
});})(___$1))
;

cljs.core.async.t38361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38363,meta38362__$1){
var self__ = this;
var _38363__$1 = this;
return (new cljs.core.async.t38361(self__.fn1,self__._,self__.meta38359,self__.map_LT_,self__.f,self__.ch,meta38362__$1));
});})(___$1))
;

cljs.core.async.t38361.cljs$lang$type = true;

cljs.core.async.t38361.cljs$lang$ctorStr = "cljs.core.async/t38361";

cljs.core.async.t38361.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t38361");
});})(___$1))
;

cljs.core.async.__GT_t38361 = ((function (___$1){
return (function __GT_t38361(fn1__$1,___$2,meta38359__$1,map_LT___$1,f__$1,ch__$1,meta38362){
return (new cljs.core.async.t38361(fn1__$1,___$2,meta38359__$1,map_LT___$1,f__$1,ch__$1,meta38362));
});})(___$1))
;

}

return (new cljs.core.async.t38361(fn1,___$1,self__.meta38359,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38360){
var self__ = this;
var _38360__$1 = this;
return self__.meta38359;
});

cljs.core.async.t38358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38360,meta38359__$1){
var self__ = this;
var _38360__$1 = this;
return (new cljs.core.async.t38358(self__.ch,self__.f,self__.map_LT_,meta38359__$1));
});

cljs.core.async.t38358.cljs$lang$type = true;

cljs.core.async.t38358.cljs$lang$ctorStr = "cljs.core.async/t38358";

cljs.core.async.t38358.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t38358");
});

cljs.core.async.__GT_t38358 = (function __GT_t38358(ch__$1,f__$1,map_LT___$1,meta38359){
return (new cljs.core.async.t38358(ch__$1,f__$1,map_LT___$1,meta38359));
});

}

return (new cljs.core.async.t38358(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t38367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38367 = (function (ch,f,map_GT_,meta38368){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38368 = meta38368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38369){
var self__ = this;
var _38369__$1 = this;
return self__.meta38368;
});

cljs.core.async.t38367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38369,meta38368__$1){
var self__ = this;
var _38369__$1 = this;
return (new cljs.core.async.t38367(self__.ch,self__.f,self__.map_GT_,meta38368__$1));
});

cljs.core.async.t38367.cljs$lang$type = true;

cljs.core.async.t38367.cljs$lang$ctorStr = "cljs.core.async/t38367";

cljs.core.async.t38367.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t38367");
});

cljs.core.async.__GT_t38367 = (function __GT_t38367(ch__$1,f__$1,map_GT___$1,meta38368){
return (new cljs.core.async.t38367(ch__$1,f__$1,map_GT___$1,meta38368));
});

}

return (new cljs.core.async.t38367(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t38373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38373 = (function (ch,p,filter_GT_,meta38374){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38374 = meta38374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38375){
var self__ = this;
var _38375__$1 = this;
return self__.meta38374;
});

cljs.core.async.t38373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38375,meta38374__$1){
var self__ = this;
var _38375__$1 = this;
return (new cljs.core.async.t38373(self__.ch,self__.p,self__.filter_GT_,meta38374__$1));
});

cljs.core.async.t38373.cljs$lang$type = true;

cljs.core.async.t38373.cljs$lang$ctorStr = "cljs.core.async/t38373";

cljs.core.async.t38373.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t38373");
});

cljs.core.async.__GT_t38373 = (function __GT_t38373(ch__$1,p__$1,filter_GT___$1,meta38374){
return (new cljs.core.async.t38373(ch__$1,p__$1,filter_GT___$1,meta38374));
});

}

return (new cljs.core.async.t38373(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___38458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38458,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38458,out){
return (function (state_38437){
var state_val_38438 = (state_38437[(1)]);
if((state_val_38438 === (7))){
var inst_38433 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
var statearr_38439_38459 = state_38437__$1;
(statearr_38439_38459[(2)] = inst_38433);

(statearr_38439_38459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (1))){
var state_38437__$1 = state_38437;
var statearr_38440_38460 = state_38437__$1;
(statearr_38440_38460[(2)] = null);

(statearr_38440_38460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (4))){
var inst_38419 = (state_38437[(7)]);
var inst_38419__$1 = (state_38437[(2)]);
var inst_38420 = (inst_38419__$1 == null);
var state_38437__$1 = (function (){var statearr_38441 = state_38437;
(statearr_38441[(7)] = inst_38419__$1);

return statearr_38441;
})();
if(cljs.core.truth_(inst_38420)){
var statearr_38442_38461 = state_38437__$1;
(statearr_38442_38461[(1)] = (5));

} else {
var statearr_38443_38462 = state_38437__$1;
(statearr_38443_38462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (6))){
var inst_38419 = (state_38437[(7)]);
var inst_38424 = p.call(null,inst_38419);
var state_38437__$1 = state_38437;
if(cljs.core.truth_(inst_38424)){
var statearr_38444_38463 = state_38437__$1;
(statearr_38444_38463[(1)] = (8));

} else {
var statearr_38445_38464 = state_38437__$1;
(statearr_38445_38464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (3))){
var inst_38435 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38437__$1,inst_38435);
} else {
if((state_val_38438 === (2))){
var state_38437__$1 = state_38437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38437__$1,(4),ch);
} else {
if((state_val_38438 === (11))){
var inst_38427 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
var statearr_38446_38465 = state_38437__$1;
(statearr_38446_38465[(2)] = inst_38427);

(statearr_38446_38465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (9))){
var state_38437__$1 = state_38437;
var statearr_38447_38466 = state_38437__$1;
(statearr_38447_38466[(2)] = null);

(statearr_38447_38466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (5))){
var inst_38422 = cljs.core.async.close_BANG_.call(null,out);
var state_38437__$1 = state_38437;
var statearr_38448_38467 = state_38437__$1;
(statearr_38448_38467[(2)] = inst_38422);

(statearr_38448_38467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (10))){
var inst_38430 = (state_38437[(2)]);
var state_38437__$1 = (function (){var statearr_38449 = state_38437;
(statearr_38449[(8)] = inst_38430);

return statearr_38449;
})();
var statearr_38450_38468 = state_38437__$1;
(statearr_38450_38468[(2)] = null);

(statearr_38450_38468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (8))){
var inst_38419 = (state_38437[(7)]);
var state_38437__$1 = state_38437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38437__$1,(11),out,inst_38419);
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
});})(c__7043__auto___38458,out))
;
return ((function (switch__6987__auto__,c__7043__auto___38458,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38454 = [null,null,null,null,null,null,null,null,null];
(statearr_38454[(0)] = state_machine__6988__auto__);

(statearr_38454[(1)] = (1));

return statearr_38454;
});
var state_machine__6988__auto____1 = (function (state_38437){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38455){if((e38455 instanceof Object)){
var ex__6991__auto__ = e38455;
var statearr_38456_38469 = state_38437;
(statearr_38456_38469[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38470 = state_38437;
state_38437 = G__38470;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38437){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38458,out))
})();
var state__7045__auto__ = (function (){var statearr_38457 = f__7044__auto__.call(null);
(statearr_38457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38458);

return statearr_38457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38458,out))
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
return (function (state_38636){
var state_val_38637 = (state_38636[(1)]);
if((state_val_38637 === (7))){
var inst_38632 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38638_38679 = state_38636__$1;
(statearr_38638_38679[(2)] = inst_38632);

(statearr_38638_38679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (20))){
var inst_38602 = (state_38636[(7)]);
var inst_38613 = (state_38636[(2)]);
var inst_38614 = cljs.core.next.call(null,inst_38602);
var inst_38588 = inst_38614;
var inst_38589 = null;
var inst_38590 = (0);
var inst_38591 = (0);
var state_38636__$1 = (function (){var statearr_38639 = state_38636;
(statearr_38639[(8)] = inst_38588);

(statearr_38639[(9)] = inst_38591);

(statearr_38639[(10)] = inst_38613);

(statearr_38639[(11)] = inst_38589);

(statearr_38639[(12)] = inst_38590);

return statearr_38639;
})();
var statearr_38640_38680 = state_38636__$1;
(statearr_38640_38680[(2)] = null);

(statearr_38640_38680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (1))){
var state_38636__$1 = state_38636;
var statearr_38641_38681 = state_38636__$1;
(statearr_38641_38681[(2)] = null);

(statearr_38641_38681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (4))){
var inst_38577 = (state_38636[(13)]);
var inst_38577__$1 = (state_38636[(2)]);
var inst_38578 = (inst_38577__$1 == null);
var state_38636__$1 = (function (){var statearr_38642 = state_38636;
(statearr_38642[(13)] = inst_38577__$1);

return statearr_38642;
})();
if(cljs.core.truth_(inst_38578)){
var statearr_38643_38682 = state_38636__$1;
(statearr_38643_38682[(1)] = (5));

} else {
var statearr_38644_38683 = state_38636__$1;
(statearr_38644_38683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (15))){
var state_38636__$1 = state_38636;
var statearr_38648_38684 = state_38636__$1;
(statearr_38648_38684[(2)] = null);

(statearr_38648_38684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (21))){
var state_38636__$1 = state_38636;
var statearr_38649_38685 = state_38636__$1;
(statearr_38649_38685[(2)] = null);

(statearr_38649_38685[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (13))){
var inst_38588 = (state_38636[(8)]);
var inst_38591 = (state_38636[(9)]);
var inst_38589 = (state_38636[(11)]);
var inst_38590 = (state_38636[(12)]);
var inst_38598 = (state_38636[(2)]);
var inst_38599 = (inst_38591 + (1));
var tmp38645 = inst_38588;
var tmp38646 = inst_38589;
var tmp38647 = inst_38590;
var inst_38588__$1 = tmp38645;
var inst_38589__$1 = tmp38646;
var inst_38590__$1 = tmp38647;
var inst_38591__$1 = inst_38599;
var state_38636__$1 = (function (){var statearr_38650 = state_38636;
(statearr_38650[(14)] = inst_38598);

(statearr_38650[(8)] = inst_38588__$1);

(statearr_38650[(9)] = inst_38591__$1);

(statearr_38650[(11)] = inst_38589__$1);

(statearr_38650[(12)] = inst_38590__$1);

return statearr_38650;
})();
var statearr_38651_38686 = state_38636__$1;
(statearr_38651_38686[(2)] = null);

(statearr_38651_38686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (22))){
var state_38636__$1 = state_38636;
var statearr_38652_38687 = state_38636__$1;
(statearr_38652_38687[(2)] = null);

(statearr_38652_38687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (6))){
var inst_38577 = (state_38636[(13)]);
var inst_38586 = f.call(null,inst_38577);
var inst_38587 = cljs.core.seq.call(null,inst_38586);
var inst_38588 = inst_38587;
var inst_38589 = null;
var inst_38590 = (0);
var inst_38591 = (0);
var state_38636__$1 = (function (){var statearr_38653 = state_38636;
(statearr_38653[(8)] = inst_38588);

(statearr_38653[(9)] = inst_38591);

(statearr_38653[(11)] = inst_38589);

(statearr_38653[(12)] = inst_38590);

return statearr_38653;
})();
var statearr_38654_38688 = state_38636__$1;
(statearr_38654_38688[(2)] = null);

(statearr_38654_38688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (17))){
var inst_38602 = (state_38636[(7)]);
var inst_38606 = cljs.core.chunk_first.call(null,inst_38602);
var inst_38607 = cljs.core.chunk_rest.call(null,inst_38602);
var inst_38608 = cljs.core.count.call(null,inst_38606);
var inst_38588 = inst_38607;
var inst_38589 = inst_38606;
var inst_38590 = inst_38608;
var inst_38591 = (0);
var state_38636__$1 = (function (){var statearr_38655 = state_38636;
(statearr_38655[(8)] = inst_38588);

(statearr_38655[(9)] = inst_38591);

(statearr_38655[(11)] = inst_38589);

(statearr_38655[(12)] = inst_38590);

return statearr_38655;
})();
var statearr_38656_38689 = state_38636__$1;
(statearr_38656_38689[(2)] = null);

(statearr_38656_38689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (3))){
var inst_38634 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38636__$1,inst_38634);
} else {
if((state_val_38637 === (12))){
var inst_38622 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38657_38690 = state_38636__$1;
(statearr_38657_38690[(2)] = inst_38622);

(statearr_38657_38690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (2))){
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38636__$1,(4),in$);
} else {
if((state_val_38637 === (23))){
var inst_38630 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38658_38691 = state_38636__$1;
(statearr_38658_38691[(2)] = inst_38630);

(statearr_38658_38691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (19))){
var inst_38617 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38659_38692 = state_38636__$1;
(statearr_38659_38692[(2)] = inst_38617);

(statearr_38659_38692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (11))){
var inst_38588 = (state_38636[(8)]);
var inst_38602 = (state_38636[(7)]);
var inst_38602__$1 = cljs.core.seq.call(null,inst_38588);
var state_38636__$1 = (function (){var statearr_38660 = state_38636;
(statearr_38660[(7)] = inst_38602__$1);

return statearr_38660;
})();
if(inst_38602__$1){
var statearr_38661_38693 = state_38636__$1;
(statearr_38661_38693[(1)] = (14));

} else {
var statearr_38662_38694 = state_38636__$1;
(statearr_38662_38694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (9))){
var inst_38624 = (state_38636[(2)]);
var inst_38625 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38636__$1 = (function (){var statearr_38663 = state_38636;
(statearr_38663[(15)] = inst_38624);

return statearr_38663;
})();
if(cljs.core.truth_(inst_38625)){
var statearr_38664_38695 = state_38636__$1;
(statearr_38664_38695[(1)] = (21));

} else {
var statearr_38665_38696 = state_38636__$1;
(statearr_38665_38696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (5))){
var inst_38580 = cljs.core.async.close_BANG_.call(null,out);
var state_38636__$1 = state_38636;
var statearr_38666_38697 = state_38636__$1;
(statearr_38666_38697[(2)] = inst_38580);

(statearr_38666_38697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (14))){
var inst_38602 = (state_38636[(7)]);
var inst_38604 = cljs.core.chunked_seq_QMARK_.call(null,inst_38602);
var state_38636__$1 = state_38636;
if(inst_38604){
var statearr_38667_38698 = state_38636__$1;
(statearr_38667_38698[(1)] = (17));

} else {
var statearr_38668_38699 = state_38636__$1;
(statearr_38668_38699[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (16))){
var inst_38620 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38669_38700 = state_38636__$1;
(statearr_38669_38700[(2)] = inst_38620);

(statearr_38669_38700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (10))){
var inst_38591 = (state_38636[(9)]);
var inst_38589 = (state_38636[(11)]);
var inst_38596 = cljs.core._nth.call(null,inst_38589,inst_38591);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38636__$1,(13),out,inst_38596);
} else {
if((state_val_38637 === (18))){
var inst_38602 = (state_38636[(7)]);
var inst_38611 = cljs.core.first.call(null,inst_38602);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38636__$1,(20),out,inst_38611);
} else {
if((state_val_38637 === (8))){
var inst_38591 = (state_38636[(9)]);
var inst_38590 = (state_38636[(12)]);
var inst_38593 = (inst_38591 < inst_38590);
var inst_38594 = inst_38593;
var state_38636__$1 = state_38636;
if(cljs.core.truth_(inst_38594)){
var statearr_38670_38701 = state_38636__$1;
(statearr_38670_38701[(1)] = (10));

} else {
var statearr_38671_38702 = state_38636__$1;
(statearr_38671_38702[(1)] = (11));

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
var statearr_38675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38675[(0)] = state_machine__6988__auto__);

(statearr_38675[(1)] = (1));

return statearr_38675;
});
var state_machine__6988__auto____1 = (function (state_38636){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38676){if((e38676 instanceof Object)){
var ex__6991__auto__ = e38676;
var statearr_38677_38703 = state_38636;
(statearr_38677_38703[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38704 = state_38636;
state_38636 = G__38704;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38636){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_38678 = f__7044__auto__.call(null);
(statearr_38678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_38678;
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
var c__7043__auto___38801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38801,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38801,out){
return (function (state_38776){
var state_val_38777 = (state_38776[(1)]);
if((state_val_38777 === (7))){
var inst_38771 = (state_38776[(2)]);
var state_38776__$1 = state_38776;
var statearr_38778_38802 = state_38776__$1;
(statearr_38778_38802[(2)] = inst_38771);

(statearr_38778_38802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (1))){
var inst_38753 = null;
var state_38776__$1 = (function (){var statearr_38779 = state_38776;
(statearr_38779[(7)] = inst_38753);

return statearr_38779;
})();
var statearr_38780_38803 = state_38776__$1;
(statearr_38780_38803[(2)] = null);

(statearr_38780_38803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (4))){
var inst_38756 = (state_38776[(8)]);
var inst_38756__$1 = (state_38776[(2)]);
var inst_38757 = (inst_38756__$1 == null);
var inst_38758 = cljs.core.not.call(null,inst_38757);
var state_38776__$1 = (function (){var statearr_38781 = state_38776;
(statearr_38781[(8)] = inst_38756__$1);

return statearr_38781;
})();
if(inst_38758){
var statearr_38782_38804 = state_38776__$1;
(statearr_38782_38804[(1)] = (5));

} else {
var statearr_38783_38805 = state_38776__$1;
(statearr_38783_38805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (6))){
var state_38776__$1 = state_38776;
var statearr_38784_38806 = state_38776__$1;
(statearr_38784_38806[(2)] = null);

(statearr_38784_38806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (3))){
var inst_38773 = (state_38776[(2)]);
var inst_38774 = cljs.core.async.close_BANG_.call(null,out);
var state_38776__$1 = (function (){var statearr_38785 = state_38776;
(statearr_38785[(9)] = inst_38773);

return statearr_38785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38776__$1,inst_38774);
} else {
if((state_val_38777 === (2))){
var state_38776__$1 = state_38776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38776__$1,(4),ch);
} else {
if((state_val_38777 === (11))){
var inst_38756 = (state_38776[(8)]);
var inst_38765 = (state_38776[(2)]);
var inst_38753 = inst_38756;
var state_38776__$1 = (function (){var statearr_38786 = state_38776;
(statearr_38786[(10)] = inst_38765);

(statearr_38786[(7)] = inst_38753);

return statearr_38786;
})();
var statearr_38787_38807 = state_38776__$1;
(statearr_38787_38807[(2)] = null);

(statearr_38787_38807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (9))){
var inst_38756 = (state_38776[(8)]);
var state_38776__$1 = state_38776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38776__$1,(11),out,inst_38756);
} else {
if((state_val_38777 === (5))){
var inst_38756 = (state_38776[(8)]);
var inst_38753 = (state_38776[(7)]);
var inst_38760 = cljs.core._EQ_.call(null,inst_38756,inst_38753);
var state_38776__$1 = state_38776;
if(inst_38760){
var statearr_38789_38808 = state_38776__$1;
(statearr_38789_38808[(1)] = (8));

} else {
var statearr_38790_38809 = state_38776__$1;
(statearr_38790_38809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (10))){
var inst_38768 = (state_38776[(2)]);
var state_38776__$1 = state_38776;
var statearr_38791_38810 = state_38776__$1;
(statearr_38791_38810[(2)] = inst_38768);

(statearr_38791_38810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38777 === (8))){
var inst_38753 = (state_38776[(7)]);
var tmp38788 = inst_38753;
var inst_38753__$1 = tmp38788;
var state_38776__$1 = (function (){var statearr_38792 = state_38776;
(statearr_38792[(7)] = inst_38753__$1);

return statearr_38792;
})();
var statearr_38793_38811 = state_38776__$1;
(statearr_38793_38811[(2)] = null);

(statearr_38793_38811[(1)] = (2));


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
});})(c__7043__auto___38801,out))
;
return ((function (switch__6987__auto__,c__7043__auto___38801,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38797[(0)] = state_machine__6988__auto__);

(statearr_38797[(1)] = (1));

return statearr_38797;
});
var state_machine__6988__auto____1 = (function (state_38776){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38798){if((e38798 instanceof Object)){
var ex__6991__auto__ = e38798;
var statearr_38799_38812 = state_38776;
(statearr_38799_38812[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38813 = state_38776;
state_38776 = G__38813;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38776){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38801,out))
})();
var state__7045__auto__ = (function (){var statearr_38800 = f__7044__auto__.call(null);
(statearr_38800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38801);

return statearr_38800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38801,out))
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
var c__7043__auto___38948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___38948,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___38948,out){
return (function (state_38918){
var state_val_38919 = (state_38918[(1)]);
if((state_val_38919 === (7))){
var inst_38914 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38920_38949 = state_38918__$1;
(statearr_38920_38949[(2)] = inst_38914);

(statearr_38920_38949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (1))){
var inst_38881 = (new Array(n));
var inst_38882 = inst_38881;
var inst_38883 = (0);
var state_38918__$1 = (function (){var statearr_38921 = state_38918;
(statearr_38921[(7)] = inst_38883);

(statearr_38921[(8)] = inst_38882);

return statearr_38921;
})();
var statearr_38922_38950 = state_38918__$1;
(statearr_38922_38950[(2)] = null);

(statearr_38922_38950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (4))){
var inst_38886 = (state_38918[(9)]);
var inst_38886__$1 = (state_38918[(2)]);
var inst_38887 = (inst_38886__$1 == null);
var inst_38888 = cljs.core.not.call(null,inst_38887);
var state_38918__$1 = (function (){var statearr_38923 = state_38918;
(statearr_38923[(9)] = inst_38886__$1);

return statearr_38923;
})();
if(inst_38888){
var statearr_38924_38951 = state_38918__$1;
(statearr_38924_38951[(1)] = (5));

} else {
var statearr_38925_38952 = state_38918__$1;
(statearr_38925_38952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (15))){
var inst_38908 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38926_38953 = state_38918__$1;
(statearr_38926_38953[(2)] = inst_38908);

(statearr_38926_38953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (13))){
var state_38918__$1 = state_38918;
var statearr_38927_38954 = state_38918__$1;
(statearr_38927_38954[(2)] = null);

(statearr_38927_38954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (6))){
var inst_38883 = (state_38918[(7)]);
var inst_38904 = (inst_38883 > (0));
var state_38918__$1 = state_38918;
if(cljs.core.truth_(inst_38904)){
var statearr_38928_38955 = state_38918__$1;
(statearr_38928_38955[(1)] = (12));

} else {
var statearr_38929_38956 = state_38918__$1;
(statearr_38929_38956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (3))){
var inst_38916 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38918__$1,inst_38916);
} else {
if((state_val_38919 === (12))){
var inst_38882 = (state_38918[(8)]);
var inst_38906 = cljs.core.vec.call(null,inst_38882);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38918__$1,(15),out,inst_38906);
} else {
if((state_val_38919 === (2))){
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38918__$1,(4),ch);
} else {
if((state_val_38919 === (11))){
var inst_38898 = (state_38918[(2)]);
var inst_38899 = (new Array(n));
var inst_38882 = inst_38899;
var inst_38883 = (0);
var state_38918__$1 = (function (){var statearr_38930 = state_38918;
(statearr_38930[(7)] = inst_38883);

(statearr_38930[(10)] = inst_38898);

(statearr_38930[(8)] = inst_38882);

return statearr_38930;
})();
var statearr_38931_38957 = state_38918__$1;
(statearr_38931_38957[(2)] = null);

(statearr_38931_38957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (9))){
var inst_38882 = (state_38918[(8)]);
var inst_38896 = cljs.core.vec.call(null,inst_38882);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38918__$1,(11),out,inst_38896);
} else {
if((state_val_38919 === (5))){
var inst_38883 = (state_38918[(7)]);
var inst_38886 = (state_38918[(9)]);
var inst_38882 = (state_38918[(8)]);
var inst_38891 = (state_38918[(11)]);
var inst_38890 = (inst_38882[inst_38883] = inst_38886);
var inst_38891__$1 = (inst_38883 + (1));
var inst_38892 = (inst_38891__$1 < n);
var state_38918__$1 = (function (){var statearr_38932 = state_38918;
(statearr_38932[(11)] = inst_38891__$1);

(statearr_38932[(12)] = inst_38890);

return statearr_38932;
})();
if(cljs.core.truth_(inst_38892)){
var statearr_38933_38958 = state_38918__$1;
(statearr_38933_38958[(1)] = (8));

} else {
var statearr_38934_38959 = state_38918__$1;
(statearr_38934_38959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (14))){
var inst_38911 = (state_38918[(2)]);
var inst_38912 = cljs.core.async.close_BANG_.call(null,out);
var state_38918__$1 = (function (){var statearr_38936 = state_38918;
(statearr_38936[(13)] = inst_38911);

return statearr_38936;
})();
var statearr_38937_38960 = state_38918__$1;
(statearr_38937_38960[(2)] = inst_38912);

(statearr_38937_38960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (10))){
var inst_38902 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38938_38961 = state_38918__$1;
(statearr_38938_38961[(2)] = inst_38902);

(statearr_38938_38961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (8))){
var inst_38882 = (state_38918[(8)]);
var inst_38891 = (state_38918[(11)]);
var tmp38935 = inst_38882;
var inst_38882__$1 = tmp38935;
var inst_38883 = inst_38891;
var state_38918__$1 = (function (){var statearr_38939 = state_38918;
(statearr_38939[(7)] = inst_38883);

(statearr_38939[(8)] = inst_38882__$1);

return statearr_38939;
})();
var statearr_38940_38962 = state_38918__$1;
(statearr_38940_38962[(2)] = null);

(statearr_38940_38962[(1)] = (2));


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
});})(c__7043__auto___38948,out))
;
return ((function (switch__6987__auto__,c__7043__auto___38948,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_38944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38944[(0)] = state_machine__6988__auto__);

(statearr_38944[(1)] = (1));

return statearr_38944;
});
var state_machine__6988__auto____1 = (function (state_38918){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_38918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e38945){if((e38945 instanceof Object)){
var ex__6991__auto__ = e38945;
var statearr_38946_38963 = state_38918;
(statearr_38946_38963[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38918;
state_38918 = G__38964;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_38918){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_38918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___38948,out))
})();
var state__7045__auto__ = (function (){var statearr_38947 = f__7044__auto__.call(null);
(statearr_38947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___38948);

return statearr_38947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___38948,out))
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
var c__7043__auto___39107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___39107,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___39107,out){
return (function (state_39077){
var state_val_39078 = (state_39077[(1)]);
if((state_val_39078 === (7))){
var inst_39073 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
var statearr_39079_39108 = state_39077__$1;
(statearr_39079_39108[(2)] = inst_39073);

(statearr_39079_39108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (1))){
var inst_39036 = [];
var inst_39037 = inst_39036;
var inst_39038 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39077__$1 = (function (){var statearr_39080 = state_39077;
(statearr_39080[(7)] = inst_39038);

(statearr_39080[(8)] = inst_39037);

return statearr_39080;
})();
var statearr_39081_39109 = state_39077__$1;
(statearr_39081_39109[(2)] = null);

(statearr_39081_39109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (4))){
var inst_39041 = (state_39077[(9)]);
var inst_39041__$1 = (state_39077[(2)]);
var inst_39042 = (inst_39041__$1 == null);
var inst_39043 = cljs.core.not.call(null,inst_39042);
var state_39077__$1 = (function (){var statearr_39082 = state_39077;
(statearr_39082[(9)] = inst_39041__$1);

return statearr_39082;
})();
if(inst_39043){
var statearr_39083_39110 = state_39077__$1;
(statearr_39083_39110[(1)] = (5));

} else {
var statearr_39084_39111 = state_39077__$1;
(statearr_39084_39111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (15))){
var inst_39067 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
var statearr_39085_39112 = state_39077__$1;
(statearr_39085_39112[(2)] = inst_39067);

(statearr_39085_39112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (13))){
var state_39077__$1 = state_39077;
var statearr_39086_39113 = state_39077__$1;
(statearr_39086_39113[(2)] = null);

(statearr_39086_39113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (6))){
var inst_39037 = (state_39077[(8)]);
var inst_39062 = inst_39037.length;
var inst_39063 = (inst_39062 > (0));
var state_39077__$1 = state_39077;
if(cljs.core.truth_(inst_39063)){
var statearr_39087_39114 = state_39077__$1;
(statearr_39087_39114[(1)] = (12));

} else {
var statearr_39088_39115 = state_39077__$1;
(statearr_39088_39115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (3))){
var inst_39075 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39077__$1,inst_39075);
} else {
if((state_val_39078 === (12))){
var inst_39037 = (state_39077[(8)]);
var inst_39065 = cljs.core.vec.call(null,inst_39037);
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39077__$1,(15),out,inst_39065);
} else {
if((state_val_39078 === (2))){
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39077__$1,(4),ch);
} else {
if((state_val_39078 === (11))){
var inst_39041 = (state_39077[(9)]);
var inst_39045 = (state_39077[(10)]);
var inst_39055 = (state_39077[(2)]);
var inst_39056 = [];
var inst_39057 = inst_39056.push(inst_39041);
var inst_39037 = inst_39056;
var inst_39038 = inst_39045;
var state_39077__$1 = (function (){var statearr_39089 = state_39077;
(statearr_39089[(7)] = inst_39038);

(statearr_39089[(11)] = inst_39057);

(statearr_39089[(8)] = inst_39037);

(statearr_39089[(12)] = inst_39055);

return statearr_39089;
})();
var statearr_39090_39116 = state_39077__$1;
(statearr_39090_39116[(2)] = null);

(statearr_39090_39116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (9))){
var inst_39037 = (state_39077[(8)]);
var inst_39053 = cljs.core.vec.call(null,inst_39037);
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39077__$1,(11),out,inst_39053);
} else {
if((state_val_39078 === (5))){
var inst_39041 = (state_39077[(9)]);
var inst_39038 = (state_39077[(7)]);
var inst_39045 = (state_39077[(10)]);
var inst_39045__$1 = f.call(null,inst_39041);
var inst_39046 = cljs.core._EQ_.call(null,inst_39045__$1,inst_39038);
var inst_39047 = cljs.core.keyword_identical_QMARK_.call(null,inst_39038,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39048 = (inst_39046) || (inst_39047);
var state_39077__$1 = (function (){var statearr_39091 = state_39077;
(statearr_39091[(10)] = inst_39045__$1);

return statearr_39091;
})();
if(cljs.core.truth_(inst_39048)){
var statearr_39092_39117 = state_39077__$1;
(statearr_39092_39117[(1)] = (8));

} else {
var statearr_39093_39118 = state_39077__$1;
(statearr_39093_39118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (14))){
var inst_39070 = (state_39077[(2)]);
var inst_39071 = cljs.core.async.close_BANG_.call(null,out);
var state_39077__$1 = (function (){var statearr_39095 = state_39077;
(statearr_39095[(13)] = inst_39070);

return statearr_39095;
})();
var statearr_39096_39119 = state_39077__$1;
(statearr_39096_39119[(2)] = inst_39071);

(statearr_39096_39119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (10))){
var inst_39060 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
var statearr_39097_39120 = state_39077__$1;
(statearr_39097_39120[(2)] = inst_39060);

(statearr_39097_39120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (8))){
var inst_39041 = (state_39077[(9)]);
var inst_39045 = (state_39077[(10)]);
var inst_39037 = (state_39077[(8)]);
var inst_39050 = inst_39037.push(inst_39041);
var tmp39094 = inst_39037;
var inst_39037__$1 = tmp39094;
var inst_39038 = inst_39045;
var state_39077__$1 = (function (){var statearr_39098 = state_39077;
(statearr_39098[(7)] = inst_39038);

(statearr_39098[(8)] = inst_39037__$1);

(statearr_39098[(14)] = inst_39050);

return statearr_39098;
})();
var statearr_39099_39121 = state_39077__$1;
(statearr_39099_39121[(2)] = null);

(statearr_39099_39121[(1)] = (2));


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
});})(c__7043__auto___39107,out))
;
return ((function (switch__6987__auto__,c__7043__auto___39107,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_39103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39103[(0)] = state_machine__6988__auto__);

(statearr_39103[(1)] = (1));

return statearr_39103;
});
var state_machine__6988__auto____1 = (function (state_39077){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_39077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e39104){if((e39104 instanceof Object)){
var ex__6991__auto__ = e39104;
var statearr_39105_39122 = state_39077;
(statearr_39105_39122[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39123 = state_39077;
state_39077 = G__39123;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_39077){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_39077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___39107,out))
})();
var state__7045__auto__ = (function (){var statearr_39106 = f__7044__auto__.call(null);
(statearr_39106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___39107);

return statearr_39106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___39107,out))
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