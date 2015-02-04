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
if(typeof cljs.core.async.t23037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23037 = (function (f,fn_handler,meta23038){
this.f = f;
this.fn_handler = fn_handler;
this.meta23038 = meta23038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23037.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23039){
var self__ = this;
var _23039__$1 = this;
return self__.meta23038;
});

cljs.core.async.t23037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23039,meta23038__$1){
var self__ = this;
var _23039__$1 = this;
return (new cljs.core.async.t23037(self__.f,self__.fn_handler,meta23038__$1));
});

cljs.core.async.t23037.cljs$lang$type = true;

cljs.core.async.t23037.cljs$lang$ctorStr = "cljs.core.async/t23037";

cljs.core.async.t23037.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23037");
});

cljs.core.async.__GT_t23037 = (function __GT_t23037(f__$1,fn_handler__$1,meta23038){
return (new cljs.core.async.t23037(f__$1,fn_handler__$1,meta23038));
});

}

return (new cljs.core.async.t23037(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__23041 = buff;
if(G__23041){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__23041.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23041);
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
var val_23042 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23042);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23042,ret){
return (function (){
return fn1.call(null,val_23042);
});})(val_23042,ret))
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
var n__4509__auto___23043 = n;
var x_23044 = (0);
while(true){
if((x_23044 < n__4509__auto___23043)){
(a[x_23044] = (0));

var G__23045 = (x_23044 + (1));
x_23044 = G__23045;
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

var G__23046 = (i + (1));
i = G__23046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23050 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23050 = (function (flag,alt_flag,meta23051){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23051 = meta23051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23050.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23052){
var self__ = this;
var _23052__$1 = this;
return self__.meta23051;
});})(flag))
;

cljs.core.async.t23050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23052,meta23051__$1){
var self__ = this;
var _23052__$1 = this;
return (new cljs.core.async.t23050(self__.flag,self__.alt_flag,meta23051__$1));
});})(flag))
;

cljs.core.async.t23050.cljs$lang$type = true;

cljs.core.async.t23050.cljs$lang$ctorStr = "cljs.core.async/t23050";

cljs.core.async.t23050.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23050");
});})(flag))
;

cljs.core.async.__GT_t23050 = ((function (flag){
return (function __GT_t23050(flag__$1,alt_flag__$1,meta23051){
return (new cljs.core.async.t23050(flag__$1,alt_flag__$1,meta23051));
});})(flag))
;

}

return (new cljs.core.async.t23050(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23056 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23056 = (function (cb,flag,alt_handler,meta23057){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23057 = meta23057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23058){
var self__ = this;
var _23058__$1 = this;
return self__.meta23057;
});

cljs.core.async.t23056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23058,meta23057__$1){
var self__ = this;
var _23058__$1 = this;
return (new cljs.core.async.t23056(self__.cb,self__.flag,self__.alt_handler,meta23057__$1));
});

cljs.core.async.t23056.cljs$lang$type = true;

cljs.core.async.t23056.cljs$lang$ctorStr = "cljs.core.async/t23056";

cljs.core.async.t23056.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23056");
});

cljs.core.async.__GT_t23056 = (function __GT_t23056(cb__$1,flag__$1,alt_handler__$1,meta23057){
return (new cljs.core.async.t23056(cb__$1,flag__$1,alt_handler__$1,meta23057));
});

}

return (new cljs.core.async.t23056(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__23059_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23059_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23060_SHARP_,port], null));
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
var G__23061 = (i + (1));
i = G__23061;
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
var alts_BANG___delegate = function (ports,p__23062){
var map__23064 = p__23062;
var map__23064__$1 = ((cljs.core.seq_QMARK_.call(null,map__23064))?cljs.core.apply.call(null,cljs.core.hash_map,map__23064):map__23064);
var opts = map__23064__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23062 = null;
if (arguments.length > 1) {
  p__23062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23062);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23065){
var ports = cljs.core.first(arglist__23065);
var p__23062 = cljs.core.rest(arglist__23065);
return alts_BANG___delegate(ports,p__23062);
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
var c__7043__auto___23160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23160){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23160){
return (function (state_23136){
var state_val_23137 = (state_23136[(1)]);
if((state_val_23137 === (7))){
var inst_23132 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23138_23161 = state_23136__$1;
(statearr_23138_23161[(2)] = inst_23132);

(statearr_23138_23161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (1))){
var state_23136__$1 = state_23136;
var statearr_23139_23162 = state_23136__$1;
(statearr_23139_23162[(2)] = null);

(statearr_23139_23162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (4))){
var inst_23115 = (state_23136[(7)]);
var inst_23115__$1 = (state_23136[(2)]);
var inst_23116 = (inst_23115__$1 == null);
var state_23136__$1 = (function (){var statearr_23140 = state_23136;
(statearr_23140[(7)] = inst_23115__$1);

return statearr_23140;
})();
if(cljs.core.truth_(inst_23116)){
var statearr_23141_23163 = state_23136__$1;
(statearr_23141_23163[(1)] = (5));

} else {
var statearr_23142_23164 = state_23136__$1;
(statearr_23142_23164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (13))){
var state_23136__$1 = state_23136;
var statearr_23143_23165 = state_23136__$1;
(statearr_23143_23165[(2)] = null);

(statearr_23143_23165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (6))){
var inst_23115 = (state_23136[(7)]);
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23136__$1,(11),to,inst_23115);
} else {
if((state_val_23137 === (3))){
var inst_23134 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23136__$1,inst_23134);
} else {
if((state_val_23137 === (12))){
var state_23136__$1 = state_23136;
var statearr_23144_23166 = state_23136__$1;
(statearr_23144_23166[(2)] = null);

(statearr_23144_23166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (2))){
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23136__$1,(4),from);
} else {
if((state_val_23137 === (11))){
var inst_23125 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23125)){
var statearr_23145_23167 = state_23136__$1;
(statearr_23145_23167[(1)] = (12));

} else {
var statearr_23146_23168 = state_23136__$1;
(statearr_23146_23168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (9))){
var state_23136__$1 = state_23136;
var statearr_23147_23169 = state_23136__$1;
(statearr_23147_23169[(2)] = null);

(statearr_23147_23169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (5))){
var state_23136__$1 = state_23136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23148_23170 = state_23136__$1;
(statearr_23148_23170[(1)] = (8));

} else {
var statearr_23149_23171 = state_23136__$1;
(statearr_23149_23171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (14))){
var inst_23130 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23150_23172 = state_23136__$1;
(statearr_23150_23172[(2)] = inst_23130);

(statearr_23150_23172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (10))){
var inst_23122 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23151_23173 = state_23136__$1;
(statearr_23151_23173[(2)] = inst_23122);

(statearr_23151_23173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (8))){
var inst_23119 = cljs.core.async.close_BANG_.call(null,to);
var state_23136__$1 = state_23136;
var statearr_23152_23174 = state_23136__$1;
(statearr_23152_23174[(2)] = inst_23119);

(statearr_23152_23174[(1)] = (10));


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
});})(c__7043__auto___23160))
;
return ((function (switch__6987__auto__,c__7043__auto___23160){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23156 = [null,null,null,null,null,null,null,null];
(statearr_23156[(0)] = state_machine__6988__auto__);

(statearr_23156[(1)] = (1));

return statearr_23156;
});
var state_machine__6988__auto____1 = (function (state_23136){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23157){if((e23157 instanceof Object)){
var ex__6991__auto__ = e23157;
var statearr_23158_23175 = state_23136;
(statearr_23158_23175[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23176 = state_23136;
state_23136 = G__23176;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23136){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23160))
})();
var state__7045__auto__ = (function (){var statearr_23159 = f__7044__auto__.call(null);
(statearr_23159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23160);

return statearr_23159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23160))
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
return (function (p__23360){
var vec__23361 = p__23360;
var v = cljs.core.nth.call(null,vec__23361,(0),null);
var p = cljs.core.nth.call(null,vec__23361,(1),null);
var job = vec__23361;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___23543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results){
return (function (state_23366){
var state_val_23367 = (state_23366[(1)]);
if((state_val_23367 === (2))){
var inst_23363 = (state_23366[(2)]);
var inst_23364 = cljs.core.async.close_BANG_.call(null,res);
var state_23366__$1 = (function (){var statearr_23368 = state_23366;
(statearr_23368[(7)] = inst_23363);

return statearr_23368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23366__$1,inst_23364);
} else {
if((state_val_23367 === (1))){
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23366__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23372 = [null,null,null,null,null,null,null,null];
(statearr_23372[(0)] = state_machine__6988__auto__);

(statearr_23372[(1)] = (1));

return statearr_23372;
});
var state_machine__6988__auto____1 = (function (state_23366){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23373){if((e23373 instanceof Object)){
var ex__6991__auto__ = e23373;
var statearr_23374_23544 = state_23366;
(statearr_23374_23544[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23545 = state_23366;
state_23366 = G__23545;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23366){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_23375 = f__7044__auto__.call(null);
(statearr_23375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23543);

return statearr_23375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23543,res,vec__23361,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23376){
var vec__23377 = p__23376;
var v = cljs.core.nth.call(null,vec__23377,(0),null);
var p = cljs.core.nth.call(null,vec__23377,(1),null);
var job = vec__23377;
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
var n__4509__auto___23546 = n;
var __23547 = (0);
while(true){
if((__23547 < n__4509__auto___23546)){
var G__23378_23548 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23378_23548) {
case "async":
var c__7043__auto___23550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23547,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23547,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function (state_23391){
var state_val_23392 = (state_23391[(1)]);
if((state_val_23392 === (7))){
var inst_23387 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
var statearr_23393_23551 = state_23391__$1;
(statearr_23393_23551[(2)] = inst_23387);

(statearr_23393_23551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (6))){
var state_23391__$1 = state_23391;
var statearr_23394_23552 = state_23391__$1;
(statearr_23394_23552[(2)] = null);

(statearr_23394_23552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (5))){
var state_23391__$1 = state_23391;
var statearr_23395_23553 = state_23391__$1;
(statearr_23395_23553[(2)] = null);

(statearr_23395_23553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (4))){
var inst_23381 = (state_23391[(2)]);
var inst_23382 = async.call(null,inst_23381);
var state_23391__$1 = state_23391;
if(cljs.core.truth_(inst_23382)){
var statearr_23396_23554 = state_23391__$1;
(statearr_23396_23554[(1)] = (5));

} else {
var statearr_23397_23555 = state_23391__$1;
(statearr_23397_23555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (3))){
var inst_23389 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23391__$1,inst_23389);
} else {
if((state_val_23392 === (2))){
var state_23391__$1 = state_23391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23391__$1,(4),jobs);
} else {
if((state_val_23392 === (1))){
var state_23391__$1 = state_23391;
var statearr_23398_23556 = state_23391__$1;
(statearr_23398_23556[(2)] = null);

(statearr_23398_23556[(1)] = (2));


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
});})(__23547,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
;
return ((function (__23547,switch__6987__auto__,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23402 = [null,null,null,null,null,null,null];
(statearr_23402[(0)] = state_machine__6988__auto__);

(statearr_23402[(1)] = (1));

return statearr_23402;
});
var state_machine__6988__auto____1 = (function (state_23391){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23403){if((e23403 instanceof Object)){
var ex__6991__auto__ = e23403;
var statearr_23404_23557 = state_23391;
(statearr_23404_23557[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23558 = state_23391;
state_23391 = G__23558;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23391){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23547,switch__6987__auto__,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23405 = f__7044__auto__.call(null);
(statearr_23405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23550);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23547,c__7043__auto___23550,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___23559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23547,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23547,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function (state_23418){
var state_val_23419 = (state_23418[(1)]);
if((state_val_23419 === (7))){
var inst_23414 = (state_23418[(2)]);
var state_23418__$1 = state_23418;
var statearr_23420_23560 = state_23418__$1;
(statearr_23420_23560[(2)] = inst_23414);

(statearr_23420_23560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (6))){
var state_23418__$1 = state_23418;
var statearr_23421_23561 = state_23418__$1;
(statearr_23421_23561[(2)] = null);

(statearr_23421_23561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (5))){
var state_23418__$1 = state_23418;
var statearr_23422_23562 = state_23418__$1;
(statearr_23422_23562[(2)] = null);

(statearr_23422_23562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (4))){
var inst_23408 = (state_23418[(2)]);
var inst_23409 = process.call(null,inst_23408);
var state_23418__$1 = state_23418;
if(cljs.core.truth_(inst_23409)){
var statearr_23423_23563 = state_23418__$1;
(statearr_23423_23563[(1)] = (5));

} else {
var statearr_23424_23564 = state_23418__$1;
(statearr_23424_23564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (3))){
var inst_23416 = (state_23418[(2)]);
var state_23418__$1 = state_23418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23418__$1,inst_23416);
} else {
if((state_val_23419 === (2))){
var state_23418__$1 = state_23418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23418__$1,(4),jobs);
} else {
if((state_val_23419 === (1))){
var state_23418__$1 = state_23418;
var statearr_23425_23565 = state_23418__$1;
(statearr_23425_23565[(2)] = null);

(statearr_23425_23565[(1)] = (2));


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
});})(__23547,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
;
return ((function (__23547,switch__6987__auto__,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23429 = [null,null,null,null,null,null,null];
(statearr_23429[(0)] = state_machine__6988__auto__);

(statearr_23429[(1)] = (1));

return statearr_23429;
});
var state_machine__6988__auto____1 = (function (state_23418){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23430){if((e23430 instanceof Object)){
var ex__6991__auto__ = e23430;
var statearr_23431_23566 = state_23418;
(statearr_23431_23566[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23567 = state_23418;
state_23418 = G__23567;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23418){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23547,switch__6987__auto__,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23432 = f__7044__auto__.call(null);
(statearr_23432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23559);

return statearr_23432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23547,c__7043__auto___23559,G__23378_23548,n__4509__auto___23546,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23568 = (__23547 + (1));
__23547 = G__23568;
continue;
} else {
}
break;
}

var c__7043__auto___23569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23569,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23569,jobs,results,process,async){
return (function (state_23454){
var state_val_23455 = (state_23454[(1)]);
if((state_val_23455 === (9))){
var inst_23447 = (state_23454[(2)]);
var state_23454__$1 = (function (){var statearr_23456 = state_23454;
(statearr_23456[(7)] = inst_23447);

return statearr_23456;
})();
var statearr_23457_23570 = state_23454__$1;
(statearr_23457_23570[(2)] = null);

(statearr_23457_23570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (8))){
var inst_23440 = (state_23454[(8)]);
var inst_23445 = (state_23454[(2)]);
var state_23454__$1 = (function (){var statearr_23458 = state_23454;
(statearr_23458[(9)] = inst_23445);

return statearr_23458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23454__$1,(9),results,inst_23440);
} else {
if((state_val_23455 === (7))){
var inst_23450 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
var statearr_23459_23571 = state_23454__$1;
(statearr_23459_23571[(2)] = inst_23450);

(statearr_23459_23571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (6))){
var inst_23435 = (state_23454[(10)]);
var inst_23440 = (state_23454[(8)]);
var inst_23440__$1 = cljs.core.async.chan.call(null,(1));
var inst_23441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23442 = [inst_23435,inst_23440__$1];
var inst_23443 = (new cljs.core.PersistentVector(null,2,(5),inst_23441,inst_23442,null));
var state_23454__$1 = (function (){var statearr_23460 = state_23454;
(statearr_23460[(8)] = inst_23440__$1);

return statearr_23460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23454__$1,(8),jobs,inst_23443);
} else {
if((state_val_23455 === (5))){
var inst_23438 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23454__$1 = state_23454;
var statearr_23461_23572 = state_23454__$1;
(statearr_23461_23572[(2)] = inst_23438);

(statearr_23461_23572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (4))){
var inst_23435 = (state_23454[(10)]);
var inst_23435__$1 = (state_23454[(2)]);
var inst_23436 = (inst_23435__$1 == null);
var state_23454__$1 = (function (){var statearr_23462 = state_23454;
(statearr_23462[(10)] = inst_23435__$1);

return statearr_23462;
})();
if(cljs.core.truth_(inst_23436)){
var statearr_23463_23573 = state_23454__$1;
(statearr_23463_23573[(1)] = (5));

} else {
var statearr_23464_23574 = state_23454__$1;
(statearr_23464_23574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (3))){
var inst_23452 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23454__$1,inst_23452);
} else {
if((state_val_23455 === (2))){
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23454__$1,(4),from);
} else {
if((state_val_23455 === (1))){
var state_23454__$1 = state_23454;
var statearr_23465_23575 = state_23454__$1;
(statearr_23465_23575[(2)] = null);

(statearr_23465_23575[(1)] = (2));


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
});})(c__7043__auto___23569,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___23569,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23469[(0)] = state_machine__6988__auto__);

(statearr_23469[(1)] = (1));

return statearr_23469;
});
var state_machine__6988__auto____1 = (function (state_23454){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23470){if((e23470 instanceof Object)){
var ex__6991__auto__ = e23470;
var statearr_23471_23576 = state_23454;
(statearr_23471_23576[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23577 = state_23454;
state_23454 = G__23577;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23454){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23569,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23472 = f__7044__auto__.call(null);
(statearr_23472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23569);

return statearr_23472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23569,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_23510){
var state_val_23511 = (state_23510[(1)]);
if((state_val_23511 === (7))){
var inst_23506 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23512_23578 = state_23510__$1;
(statearr_23512_23578[(2)] = inst_23506);

(statearr_23512_23578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (20))){
var state_23510__$1 = state_23510;
var statearr_23513_23579 = state_23510__$1;
(statearr_23513_23579[(2)] = null);

(statearr_23513_23579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (1))){
var state_23510__$1 = state_23510;
var statearr_23514_23580 = state_23510__$1;
(statearr_23514_23580[(2)] = null);

(statearr_23514_23580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (4))){
var inst_23475 = (state_23510[(7)]);
var inst_23475__$1 = (state_23510[(2)]);
var inst_23476 = (inst_23475__$1 == null);
var state_23510__$1 = (function (){var statearr_23515 = state_23510;
(statearr_23515[(7)] = inst_23475__$1);

return statearr_23515;
})();
if(cljs.core.truth_(inst_23476)){
var statearr_23516_23581 = state_23510__$1;
(statearr_23516_23581[(1)] = (5));

} else {
var statearr_23517_23582 = state_23510__$1;
(statearr_23517_23582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (15))){
var inst_23488 = (state_23510[(8)]);
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23510__$1,(18),to,inst_23488);
} else {
if((state_val_23511 === (21))){
var inst_23501 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23518_23583 = state_23510__$1;
(statearr_23518_23583[(2)] = inst_23501);

(statearr_23518_23583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (13))){
var inst_23503 = (state_23510[(2)]);
var state_23510__$1 = (function (){var statearr_23519 = state_23510;
(statearr_23519[(9)] = inst_23503);

return statearr_23519;
})();
var statearr_23520_23584 = state_23510__$1;
(statearr_23520_23584[(2)] = null);

(statearr_23520_23584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (6))){
var inst_23475 = (state_23510[(7)]);
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23510__$1,(11),inst_23475);
} else {
if((state_val_23511 === (17))){
var inst_23496 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
if(cljs.core.truth_(inst_23496)){
var statearr_23521_23585 = state_23510__$1;
(statearr_23521_23585[(1)] = (19));

} else {
var statearr_23522_23586 = state_23510__$1;
(statearr_23522_23586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (3))){
var inst_23508 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23510__$1,inst_23508);
} else {
if((state_val_23511 === (12))){
var inst_23485 = (state_23510[(10)]);
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23510__$1,(14),inst_23485);
} else {
if((state_val_23511 === (2))){
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23510__$1,(4),results);
} else {
if((state_val_23511 === (19))){
var state_23510__$1 = state_23510;
var statearr_23523_23587 = state_23510__$1;
(statearr_23523_23587[(2)] = null);

(statearr_23523_23587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (11))){
var inst_23485 = (state_23510[(2)]);
var state_23510__$1 = (function (){var statearr_23524 = state_23510;
(statearr_23524[(10)] = inst_23485);

return statearr_23524;
})();
var statearr_23525_23588 = state_23510__$1;
(statearr_23525_23588[(2)] = null);

(statearr_23525_23588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (9))){
var state_23510__$1 = state_23510;
var statearr_23526_23589 = state_23510__$1;
(statearr_23526_23589[(2)] = null);

(statearr_23526_23589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (5))){
var state_23510__$1 = state_23510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23527_23590 = state_23510__$1;
(statearr_23527_23590[(1)] = (8));

} else {
var statearr_23528_23591 = state_23510__$1;
(statearr_23528_23591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (14))){
var inst_23488 = (state_23510[(8)]);
var inst_23490 = (state_23510[(11)]);
var inst_23488__$1 = (state_23510[(2)]);
var inst_23489 = (inst_23488__$1 == null);
var inst_23490__$1 = cljs.core.not.call(null,inst_23489);
var state_23510__$1 = (function (){var statearr_23529 = state_23510;
(statearr_23529[(8)] = inst_23488__$1);

(statearr_23529[(11)] = inst_23490__$1);

return statearr_23529;
})();
if(inst_23490__$1){
var statearr_23530_23592 = state_23510__$1;
(statearr_23530_23592[(1)] = (15));

} else {
var statearr_23531_23593 = state_23510__$1;
(statearr_23531_23593[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (16))){
var inst_23490 = (state_23510[(11)]);
var state_23510__$1 = state_23510;
var statearr_23532_23594 = state_23510__$1;
(statearr_23532_23594[(2)] = inst_23490);

(statearr_23532_23594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (10))){
var inst_23482 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23533_23595 = state_23510__$1;
(statearr_23533_23595[(2)] = inst_23482);

(statearr_23533_23595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (18))){
var inst_23493 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23534_23596 = state_23510__$1;
(statearr_23534_23596[(2)] = inst_23493);

(statearr_23534_23596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (8))){
var inst_23479 = cljs.core.async.close_BANG_.call(null,to);
var state_23510__$1 = state_23510;
var statearr_23535_23597 = state_23510__$1;
(statearr_23535_23597[(2)] = inst_23479);

(statearr_23535_23597[(1)] = (10));


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
var statearr_23539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = state_machine__6988__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var state_machine__6988__auto____1 = (function (state_23510){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23540){if((e23540 instanceof Object)){
var ex__6991__auto__ = e23540;
var statearr_23541_23598 = state_23510;
(statearr_23541_23598[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23599 = state_23510;
state_23510 = G__23599;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23510){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23542 = f__7044__auto__.call(null);
(statearr_23542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23542;
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
var c__7043__auto___23700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23700,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23700,tc,fc){
return (function (state_23675){
var state_val_23676 = (state_23675[(1)]);
if((state_val_23676 === (7))){
var inst_23671 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
var statearr_23677_23701 = state_23675__$1;
(statearr_23677_23701[(2)] = inst_23671);

(statearr_23677_23701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (1))){
var state_23675__$1 = state_23675;
var statearr_23678_23702 = state_23675__$1;
(statearr_23678_23702[(2)] = null);

(statearr_23678_23702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (4))){
var inst_23652 = (state_23675[(7)]);
var inst_23652__$1 = (state_23675[(2)]);
var inst_23653 = (inst_23652__$1 == null);
var state_23675__$1 = (function (){var statearr_23679 = state_23675;
(statearr_23679[(7)] = inst_23652__$1);

return statearr_23679;
})();
if(cljs.core.truth_(inst_23653)){
var statearr_23680_23703 = state_23675__$1;
(statearr_23680_23703[(1)] = (5));

} else {
var statearr_23681_23704 = state_23675__$1;
(statearr_23681_23704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (13))){
var state_23675__$1 = state_23675;
var statearr_23682_23705 = state_23675__$1;
(statearr_23682_23705[(2)] = null);

(statearr_23682_23705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (6))){
var inst_23652 = (state_23675[(7)]);
var inst_23658 = p.call(null,inst_23652);
var state_23675__$1 = state_23675;
if(cljs.core.truth_(inst_23658)){
var statearr_23683_23706 = state_23675__$1;
(statearr_23683_23706[(1)] = (9));

} else {
var statearr_23684_23707 = state_23675__$1;
(statearr_23684_23707[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (3))){
var inst_23673 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23675__$1,inst_23673);
} else {
if((state_val_23676 === (12))){
var state_23675__$1 = state_23675;
var statearr_23685_23708 = state_23675__$1;
(statearr_23685_23708[(2)] = null);

(statearr_23685_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (2))){
var state_23675__$1 = state_23675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23675__$1,(4),ch);
} else {
if((state_val_23676 === (11))){
var inst_23652 = (state_23675[(7)]);
var inst_23662 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23675__$1,(8),inst_23662,inst_23652);
} else {
if((state_val_23676 === (9))){
var state_23675__$1 = state_23675;
var statearr_23686_23709 = state_23675__$1;
(statearr_23686_23709[(2)] = tc);

(statearr_23686_23709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (5))){
var inst_23655 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23656 = cljs.core.async.close_BANG_.call(null,fc);
var state_23675__$1 = (function (){var statearr_23687 = state_23675;
(statearr_23687[(8)] = inst_23655);

return statearr_23687;
})();
var statearr_23688_23710 = state_23675__$1;
(statearr_23688_23710[(2)] = inst_23656);

(statearr_23688_23710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (14))){
var inst_23669 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
var statearr_23689_23711 = state_23675__$1;
(statearr_23689_23711[(2)] = inst_23669);

(statearr_23689_23711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (10))){
var state_23675__$1 = state_23675;
var statearr_23690_23712 = state_23675__$1;
(statearr_23690_23712[(2)] = fc);

(statearr_23690_23712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23676 === (8))){
var inst_23664 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
if(cljs.core.truth_(inst_23664)){
var statearr_23691_23713 = state_23675__$1;
(statearr_23691_23713[(1)] = (12));

} else {
var statearr_23692_23714 = state_23675__$1;
(statearr_23692_23714[(1)] = (13));

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
});})(c__7043__auto___23700,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___23700,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23696 = [null,null,null,null,null,null,null,null,null];
(statearr_23696[(0)] = state_machine__6988__auto__);

(statearr_23696[(1)] = (1));

return statearr_23696;
});
var state_machine__6988__auto____1 = (function (state_23675){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23697){if((e23697 instanceof Object)){
var ex__6991__auto__ = e23697;
var statearr_23698_23715 = state_23675;
(statearr_23698_23715[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23716 = state_23675;
state_23675 = G__23716;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23675){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23700,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_23699 = f__7044__auto__.call(null);
(statearr_23699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23700);

return statearr_23699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23700,tc,fc))
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
return (function (state_23763){
var state_val_23764 = (state_23763[(1)]);
if((state_val_23764 === (7))){
var inst_23759 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
var statearr_23765_23781 = state_23763__$1;
(statearr_23765_23781[(2)] = inst_23759);

(statearr_23765_23781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23764 === (6))){
var inst_23749 = (state_23763[(7)]);
var inst_23752 = (state_23763[(8)]);
var inst_23756 = f.call(null,inst_23749,inst_23752);
var inst_23749__$1 = inst_23756;
var state_23763__$1 = (function (){var statearr_23766 = state_23763;
(statearr_23766[(7)] = inst_23749__$1);

return statearr_23766;
})();
var statearr_23767_23782 = state_23763__$1;
(statearr_23767_23782[(2)] = null);

(statearr_23767_23782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23764 === (5))){
var inst_23749 = (state_23763[(7)]);
var state_23763__$1 = state_23763;
var statearr_23768_23783 = state_23763__$1;
(statearr_23768_23783[(2)] = inst_23749);

(statearr_23768_23783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23764 === (4))){
var inst_23752 = (state_23763[(8)]);
var inst_23752__$1 = (state_23763[(2)]);
var inst_23753 = (inst_23752__$1 == null);
var state_23763__$1 = (function (){var statearr_23769 = state_23763;
(statearr_23769[(8)] = inst_23752__$1);

return statearr_23769;
})();
if(cljs.core.truth_(inst_23753)){
var statearr_23770_23784 = state_23763__$1;
(statearr_23770_23784[(1)] = (5));

} else {
var statearr_23771_23785 = state_23763__$1;
(statearr_23771_23785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23764 === (3))){
var inst_23761 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23763__$1,inst_23761);
} else {
if((state_val_23764 === (2))){
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23763__$1,(4),ch);
} else {
if((state_val_23764 === (1))){
var inst_23749 = init;
var state_23763__$1 = (function (){var statearr_23772 = state_23763;
(statearr_23772[(7)] = inst_23749);

return statearr_23772;
})();
var statearr_23773_23786 = state_23763__$1;
(statearr_23773_23786[(2)] = null);

(statearr_23773_23786[(1)] = (2));


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
var statearr_23777 = [null,null,null,null,null,null,null,null,null];
(statearr_23777[(0)] = state_machine__6988__auto__);

(statearr_23777[(1)] = (1));

return statearr_23777;
});
var state_machine__6988__auto____1 = (function (state_23763){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23778){if((e23778 instanceof Object)){
var ex__6991__auto__ = e23778;
var statearr_23779_23787 = state_23763;
(statearr_23779_23787[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23788 = state_23763;
state_23763 = G__23788;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23763){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23780 = f__7044__auto__.call(null);
(statearr_23780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23780;
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
return (function (state_23862){
var state_val_23863 = (state_23862[(1)]);
if((state_val_23863 === (7))){
var inst_23844 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23864_23887 = state_23862__$1;
(statearr_23864_23887[(2)] = inst_23844);

(statearr_23864_23887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (1))){
var inst_23838 = cljs.core.seq.call(null,coll);
var inst_23839 = inst_23838;
var state_23862__$1 = (function (){var statearr_23865 = state_23862;
(statearr_23865[(7)] = inst_23839);

return statearr_23865;
})();
var statearr_23866_23888 = state_23862__$1;
(statearr_23866_23888[(2)] = null);

(statearr_23866_23888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (4))){
var inst_23839 = (state_23862[(7)]);
var inst_23842 = cljs.core.first.call(null,inst_23839);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23862__$1,(7),ch,inst_23842);
} else {
if((state_val_23863 === (13))){
var inst_23856 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23867_23889 = state_23862__$1;
(statearr_23867_23889[(2)] = inst_23856);

(statearr_23867_23889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (6))){
var inst_23847 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
if(cljs.core.truth_(inst_23847)){
var statearr_23868_23890 = state_23862__$1;
(statearr_23868_23890[(1)] = (8));

} else {
var statearr_23869_23891 = state_23862__$1;
(statearr_23869_23891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (3))){
var inst_23860 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23862__$1,inst_23860);
} else {
if((state_val_23863 === (12))){
var state_23862__$1 = state_23862;
var statearr_23870_23892 = state_23862__$1;
(statearr_23870_23892[(2)] = null);

(statearr_23870_23892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (2))){
var inst_23839 = (state_23862[(7)]);
var state_23862__$1 = state_23862;
if(cljs.core.truth_(inst_23839)){
var statearr_23871_23893 = state_23862__$1;
(statearr_23871_23893[(1)] = (4));

} else {
var statearr_23872_23894 = state_23862__$1;
(statearr_23872_23894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (11))){
var inst_23853 = cljs.core.async.close_BANG_.call(null,ch);
var state_23862__$1 = state_23862;
var statearr_23873_23895 = state_23862__$1;
(statearr_23873_23895[(2)] = inst_23853);

(statearr_23873_23895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (9))){
var state_23862__$1 = state_23862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23874_23896 = state_23862__$1;
(statearr_23874_23896[(1)] = (11));

} else {
var statearr_23875_23897 = state_23862__$1;
(statearr_23875_23897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (5))){
var inst_23839 = (state_23862[(7)]);
var state_23862__$1 = state_23862;
var statearr_23876_23898 = state_23862__$1;
(statearr_23876_23898[(2)] = inst_23839);

(statearr_23876_23898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (10))){
var inst_23858 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23877_23899 = state_23862__$1;
(statearr_23877_23899[(2)] = inst_23858);

(statearr_23877_23899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (8))){
var inst_23839 = (state_23862[(7)]);
var inst_23849 = cljs.core.next.call(null,inst_23839);
var inst_23839__$1 = inst_23849;
var state_23862__$1 = (function (){var statearr_23878 = state_23862;
(statearr_23878[(7)] = inst_23839__$1);

return statearr_23878;
})();
var statearr_23879_23900 = state_23862__$1;
(statearr_23879_23900[(2)] = null);

(statearr_23879_23900[(1)] = (2));


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
var statearr_23883 = [null,null,null,null,null,null,null,null];
(statearr_23883[(0)] = state_machine__6988__auto__);

(statearr_23883[(1)] = (1));

return statearr_23883;
});
var state_machine__6988__auto____1 = (function (state_23862){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23884){if((e23884 instanceof Object)){
var ex__6991__auto__ = e23884;
var statearr_23885_23901 = state_23862;
(statearr_23885_23901[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23902 = state_23862;
state_23862 = G__23902;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23862){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23886 = f__7044__auto__.call(null);
(statearr_23886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23886;
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

cljs.core.async.Mux = (function (){var obj23904 = {};
return obj23904;
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


cljs.core.async.Mult = (function (){var obj23906 = {};
return obj23906;
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
if(typeof cljs.core.async.t24128 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24128 = (function (cs,ch,mult,meta24129){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24129 = meta24129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24128.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24128.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24128.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24128.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24128.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24130){
var self__ = this;
var _24130__$1 = this;
return self__.meta24129;
});})(cs))
;

cljs.core.async.t24128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24130,meta24129__$1){
var self__ = this;
var _24130__$1 = this;
return (new cljs.core.async.t24128(self__.cs,self__.ch,self__.mult,meta24129__$1));
});})(cs))
;

cljs.core.async.t24128.cljs$lang$type = true;

cljs.core.async.t24128.cljs$lang$ctorStr = "cljs.core.async/t24128";

cljs.core.async.t24128.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24128");
});})(cs))
;

cljs.core.async.__GT_t24128 = ((function (cs){
return (function __GT_t24128(cs__$1,ch__$1,mult__$1,meta24129){
return (new cljs.core.async.t24128(cs__$1,ch__$1,mult__$1,meta24129));
});})(cs))
;

}

return (new cljs.core.async.t24128(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___24349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24349,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24349,cs,m,dchan,dctr,done){
return (function (state_24261){
var state_val_24262 = (state_24261[(1)]);
if((state_val_24262 === (7))){
var inst_24257 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24263_24350 = state_24261__$1;
(statearr_24263_24350[(2)] = inst_24257);

(statearr_24263_24350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (20))){
var inst_24162 = (state_24261[(7)]);
var inst_24172 = cljs.core.first.call(null,inst_24162);
var inst_24173 = cljs.core.nth.call(null,inst_24172,(0),null);
var inst_24174 = cljs.core.nth.call(null,inst_24172,(1),null);
var state_24261__$1 = (function (){var statearr_24264 = state_24261;
(statearr_24264[(8)] = inst_24173);

return statearr_24264;
})();
if(cljs.core.truth_(inst_24174)){
var statearr_24265_24351 = state_24261__$1;
(statearr_24265_24351[(1)] = (22));

} else {
var statearr_24266_24352 = state_24261__$1;
(statearr_24266_24352[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (27))){
var inst_24133 = (state_24261[(9)]);
var inst_24209 = (state_24261[(10)]);
var inst_24202 = (state_24261[(11)]);
var inst_24204 = (state_24261[(12)]);
var inst_24209__$1 = cljs.core._nth.call(null,inst_24202,inst_24204);
var inst_24210 = cljs.core.async.put_BANG_.call(null,inst_24209__$1,inst_24133,done);
var state_24261__$1 = (function (){var statearr_24267 = state_24261;
(statearr_24267[(10)] = inst_24209__$1);

return statearr_24267;
})();
if(cljs.core.truth_(inst_24210)){
var statearr_24268_24353 = state_24261__$1;
(statearr_24268_24353[(1)] = (30));

} else {
var statearr_24269_24354 = state_24261__$1;
(statearr_24269_24354[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (1))){
var state_24261__$1 = state_24261;
var statearr_24270_24355 = state_24261__$1;
(statearr_24270_24355[(2)] = null);

(statearr_24270_24355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (24))){
var inst_24162 = (state_24261[(7)]);
var inst_24179 = (state_24261[(2)]);
var inst_24180 = cljs.core.next.call(null,inst_24162);
var inst_24142 = inst_24180;
var inst_24143 = null;
var inst_24144 = (0);
var inst_24145 = (0);
var state_24261__$1 = (function (){var statearr_24271 = state_24261;
(statearr_24271[(13)] = inst_24142);

(statearr_24271[(14)] = inst_24145);

(statearr_24271[(15)] = inst_24144);

(statearr_24271[(16)] = inst_24179);

(statearr_24271[(17)] = inst_24143);

return statearr_24271;
})();
var statearr_24272_24356 = state_24261__$1;
(statearr_24272_24356[(2)] = null);

(statearr_24272_24356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (39))){
var state_24261__$1 = state_24261;
var statearr_24276_24357 = state_24261__$1;
(statearr_24276_24357[(2)] = null);

(statearr_24276_24357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (4))){
var inst_24133 = (state_24261[(9)]);
var inst_24133__$1 = (state_24261[(2)]);
var inst_24134 = (inst_24133__$1 == null);
var state_24261__$1 = (function (){var statearr_24277 = state_24261;
(statearr_24277[(9)] = inst_24133__$1);

return statearr_24277;
})();
if(cljs.core.truth_(inst_24134)){
var statearr_24278_24358 = state_24261__$1;
(statearr_24278_24358[(1)] = (5));

} else {
var statearr_24279_24359 = state_24261__$1;
(statearr_24279_24359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (15))){
var inst_24142 = (state_24261[(13)]);
var inst_24145 = (state_24261[(14)]);
var inst_24144 = (state_24261[(15)]);
var inst_24143 = (state_24261[(17)]);
var inst_24158 = (state_24261[(2)]);
var inst_24159 = (inst_24145 + (1));
var tmp24273 = inst_24142;
var tmp24274 = inst_24144;
var tmp24275 = inst_24143;
var inst_24142__$1 = tmp24273;
var inst_24143__$1 = tmp24275;
var inst_24144__$1 = tmp24274;
var inst_24145__$1 = inst_24159;
var state_24261__$1 = (function (){var statearr_24280 = state_24261;
(statearr_24280[(13)] = inst_24142__$1);

(statearr_24280[(14)] = inst_24145__$1);

(statearr_24280[(15)] = inst_24144__$1);

(statearr_24280[(17)] = inst_24143__$1);

(statearr_24280[(18)] = inst_24158);

return statearr_24280;
})();
var statearr_24281_24360 = state_24261__$1;
(statearr_24281_24360[(2)] = null);

(statearr_24281_24360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (21))){
var inst_24183 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24285_24361 = state_24261__$1;
(statearr_24285_24361[(2)] = inst_24183);

(statearr_24285_24361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (31))){
var inst_24209 = (state_24261[(10)]);
var inst_24213 = done.call(null,null);
var inst_24214 = cljs.core.async.untap_STAR_.call(null,m,inst_24209);
var state_24261__$1 = (function (){var statearr_24286 = state_24261;
(statearr_24286[(19)] = inst_24213);

return statearr_24286;
})();
var statearr_24287_24362 = state_24261__$1;
(statearr_24287_24362[(2)] = inst_24214);

(statearr_24287_24362[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (32))){
var inst_24203 = (state_24261[(20)]);
var inst_24202 = (state_24261[(11)]);
var inst_24201 = (state_24261[(21)]);
var inst_24204 = (state_24261[(12)]);
var inst_24216 = (state_24261[(2)]);
var inst_24217 = (inst_24204 + (1));
var tmp24282 = inst_24203;
var tmp24283 = inst_24202;
var tmp24284 = inst_24201;
var inst_24201__$1 = tmp24284;
var inst_24202__$1 = tmp24283;
var inst_24203__$1 = tmp24282;
var inst_24204__$1 = inst_24217;
var state_24261__$1 = (function (){var statearr_24288 = state_24261;
(statearr_24288[(22)] = inst_24216);

(statearr_24288[(20)] = inst_24203__$1);

(statearr_24288[(11)] = inst_24202__$1);

(statearr_24288[(21)] = inst_24201__$1);

(statearr_24288[(12)] = inst_24204__$1);

return statearr_24288;
})();
var statearr_24289_24363 = state_24261__$1;
(statearr_24289_24363[(2)] = null);

(statearr_24289_24363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (40))){
var inst_24229 = (state_24261[(23)]);
var inst_24233 = done.call(null,null);
var inst_24234 = cljs.core.async.untap_STAR_.call(null,m,inst_24229);
var state_24261__$1 = (function (){var statearr_24290 = state_24261;
(statearr_24290[(24)] = inst_24233);

return statearr_24290;
})();
var statearr_24291_24364 = state_24261__$1;
(statearr_24291_24364[(2)] = inst_24234);

(statearr_24291_24364[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (33))){
var inst_24220 = (state_24261[(25)]);
var inst_24222 = cljs.core.chunked_seq_QMARK_.call(null,inst_24220);
var state_24261__$1 = state_24261;
if(inst_24222){
var statearr_24292_24365 = state_24261__$1;
(statearr_24292_24365[(1)] = (36));

} else {
var statearr_24293_24366 = state_24261__$1;
(statearr_24293_24366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (13))){
var inst_24152 = (state_24261[(26)]);
var inst_24155 = cljs.core.async.close_BANG_.call(null,inst_24152);
var state_24261__$1 = state_24261;
var statearr_24294_24367 = state_24261__$1;
(statearr_24294_24367[(2)] = inst_24155);

(statearr_24294_24367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (22))){
var inst_24173 = (state_24261[(8)]);
var inst_24176 = cljs.core.async.close_BANG_.call(null,inst_24173);
var state_24261__$1 = state_24261;
var statearr_24295_24368 = state_24261__$1;
(statearr_24295_24368[(2)] = inst_24176);

(statearr_24295_24368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (36))){
var inst_24220 = (state_24261[(25)]);
var inst_24224 = cljs.core.chunk_first.call(null,inst_24220);
var inst_24225 = cljs.core.chunk_rest.call(null,inst_24220);
var inst_24226 = cljs.core.count.call(null,inst_24224);
var inst_24201 = inst_24225;
var inst_24202 = inst_24224;
var inst_24203 = inst_24226;
var inst_24204 = (0);
var state_24261__$1 = (function (){var statearr_24296 = state_24261;
(statearr_24296[(20)] = inst_24203);

(statearr_24296[(11)] = inst_24202);

(statearr_24296[(21)] = inst_24201);

(statearr_24296[(12)] = inst_24204);

return statearr_24296;
})();
var statearr_24297_24369 = state_24261__$1;
(statearr_24297_24369[(2)] = null);

(statearr_24297_24369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (41))){
var inst_24220 = (state_24261[(25)]);
var inst_24236 = (state_24261[(2)]);
var inst_24237 = cljs.core.next.call(null,inst_24220);
var inst_24201 = inst_24237;
var inst_24202 = null;
var inst_24203 = (0);
var inst_24204 = (0);
var state_24261__$1 = (function (){var statearr_24298 = state_24261;
(statearr_24298[(20)] = inst_24203);

(statearr_24298[(11)] = inst_24202);

(statearr_24298[(27)] = inst_24236);

(statearr_24298[(21)] = inst_24201);

(statearr_24298[(12)] = inst_24204);

return statearr_24298;
})();
var statearr_24299_24370 = state_24261__$1;
(statearr_24299_24370[(2)] = null);

(statearr_24299_24370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (43))){
var state_24261__$1 = state_24261;
var statearr_24300_24371 = state_24261__$1;
(statearr_24300_24371[(2)] = null);

(statearr_24300_24371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (29))){
var inst_24245 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24301_24372 = state_24261__$1;
(statearr_24301_24372[(2)] = inst_24245);

(statearr_24301_24372[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (44))){
var inst_24254 = (state_24261[(2)]);
var state_24261__$1 = (function (){var statearr_24302 = state_24261;
(statearr_24302[(28)] = inst_24254);

return statearr_24302;
})();
var statearr_24303_24373 = state_24261__$1;
(statearr_24303_24373[(2)] = null);

(statearr_24303_24373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (6))){
var inst_24193 = (state_24261[(29)]);
var inst_24192 = cljs.core.deref.call(null,cs);
var inst_24193__$1 = cljs.core.keys.call(null,inst_24192);
var inst_24194 = cljs.core.count.call(null,inst_24193__$1);
var inst_24195 = cljs.core.reset_BANG_.call(null,dctr,inst_24194);
var inst_24200 = cljs.core.seq.call(null,inst_24193__$1);
var inst_24201 = inst_24200;
var inst_24202 = null;
var inst_24203 = (0);
var inst_24204 = (0);
var state_24261__$1 = (function (){var statearr_24304 = state_24261;
(statearr_24304[(20)] = inst_24203);

(statearr_24304[(30)] = inst_24195);

(statearr_24304[(11)] = inst_24202);

(statearr_24304[(21)] = inst_24201);

(statearr_24304[(12)] = inst_24204);

(statearr_24304[(29)] = inst_24193__$1);

return statearr_24304;
})();
var statearr_24305_24374 = state_24261__$1;
(statearr_24305_24374[(2)] = null);

(statearr_24305_24374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (28))){
var inst_24220 = (state_24261[(25)]);
var inst_24201 = (state_24261[(21)]);
var inst_24220__$1 = cljs.core.seq.call(null,inst_24201);
var state_24261__$1 = (function (){var statearr_24306 = state_24261;
(statearr_24306[(25)] = inst_24220__$1);

return statearr_24306;
})();
if(inst_24220__$1){
var statearr_24307_24375 = state_24261__$1;
(statearr_24307_24375[(1)] = (33));

} else {
var statearr_24308_24376 = state_24261__$1;
(statearr_24308_24376[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (25))){
var inst_24203 = (state_24261[(20)]);
var inst_24204 = (state_24261[(12)]);
var inst_24206 = (inst_24204 < inst_24203);
var inst_24207 = inst_24206;
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24207)){
var statearr_24309_24377 = state_24261__$1;
(statearr_24309_24377[(1)] = (27));

} else {
var statearr_24310_24378 = state_24261__$1;
(statearr_24310_24378[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (34))){
var state_24261__$1 = state_24261;
var statearr_24311_24379 = state_24261__$1;
(statearr_24311_24379[(2)] = null);

(statearr_24311_24379[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (17))){
var state_24261__$1 = state_24261;
var statearr_24312_24380 = state_24261__$1;
(statearr_24312_24380[(2)] = null);

(statearr_24312_24380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (3))){
var inst_24259 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24261__$1,inst_24259);
} else {
if((state_val_24262 === (12))){
var inst_24188 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24313_24381 = state_24261__$1;
(statearr_24313_24381[(2)] = inst_24188);

(statearr_24313_24381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (2))){
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24261__$1,(4),ch);
} else {
if((state_val_24262 === (23))){
var state_24261__$1 = state_24261;
var statearr_24314_24382 = state_24261__$1;
(statearr_24314_24382[(2)] = null);

(statearr_24314_24382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (35))){
var inst_24243 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24315_24383 = state_24261__$1;
(statearr_24315_24383[(2)] = inst_24243);

(statearr_24315_24383[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (19))){
var inst_24162 = (state_24261[(7)]);
var inst_24166 = cljs.core.chunk_first.call(null,inst_24162);
var inst_24167 = cljs.core.chunk_rest.call(null,inst_24162);
var inst_24168 = cljs.core.count.call(null,inst_24166);
var inst_24142 = inst_24167;
var inst_24143 = inst_24166;
var inst_24144 = inst_24168;
var inst_24145 = (0);
var state_24261__$1 = (function (){var statearr_24316 = state_24261;
(statearr_24316[(13)] = inst_24142);

(statearr_24316[(14)] = inst_24145);

(statearr_24316[(15)] = inst_24144);

(statearr_24316[(17)] = inst_24143);

return statearr_24316;
})();
var statearr_24317_24384 = state_24261__$1;
(statearr_24317_24384[(2)] = null);

(statearr_24317_24384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (11))){
var inst_24142 = (state_24261[(13)]);
var inst_24162 = (state_24261[(7)]);
var inst_24162__$1 = cljs.core.seq.call(null,inst_24142);
var state_24261__$1 = (function (){var statearr_24318 = state_24261;
(statearr_24318[(7)] = inst_24162__$1);

return statearr_24318;
})();
if(inst_24162__$1){
var statearr_24319_24385 = state_24261__$1;
(statearr_24319_24385[(1)] = (16));

} else {
var statearr_24320_24386 = state_24261__$1;
(statearr_24320_24386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (9))){
var inst_24190 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24321_24387 = state_24261__$1;
(statearr_24321_24387[(2)] = inst_24190);

(statearr_24321_24387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (5))){
var inst_24140 = cljs.core.deref.call(null,cs);
var inst_24141 = cljs.core.seq.call(null,inst_24140);
var inst_24142 = inst_24141;
var inst_24143 = null;
var inst_24144 = (0);
var inst_24145 = (0);
var state_24261__$1 = (function (){var statearr_24322 = state_24261;
(statearr_24322[(13)] = inst_24142);

(statearr_24322[(14)] = inst_24145);

(statearr_24322[(15)] = inst_24144);

(statearr_24322[(17)] = inst_24143);

return statearr_24322;
})();
var statearr_24323_24388 = state_24261__$1;
(statearr_24323_24388[(2)] = null);

(statearr_24323_24388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (14))){
var state_24261__$1 = state_24261;
var statearr_24324_24389 = state_24261__$1;
(statearr_24324_24389[(2)] = null);

(statearr_24324_24389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (45))){
var inst_24251 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24325_24390 = state_24261__$1;
(statearr_24325_24390[(2)] = inst_24251);

(statearr_24325_24390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (26))){
var inst_24193 = (state_24261[(29)]);
var inst_24247 = (state_24261[(2)]);
var inst_24248 = cljs.core.seq.call(null,inst_24193);
var state_24261__$1 = (function (){var statearr_24326 = state_24261;
(statearr_24326[(31)] = inst_24247);

return statearr_24326;
})();
if(inst_24248){
var statearr_24327_24391 = state_24261__$1;
(statearr_24327_24391[(1)] = (42));

} else {
var statearr_24328_24392 = state_24261__$1;
(statearr_24328_24392[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (16))){
var inst_24162 = (state_24261[(7)]);
var inst_24164 = cljs.core.chunked_seq_QMARK_.call(null,inst_24162);
var state_24261__$1 = state_24261;
if(inst_24164){
var statearr_24329_24393 = state_24261__$1;
(statearr_24329_24393[(1)] = (19));

} else {
var statearr_24330_24394 = state_24261__$1;
(statearr_24330_24394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (38))){
var inst_24240 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24331_24395 = state_24261__$1;
(statearr_24331_24395[(2)] = inst_24240);

(statearr_24331_24395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (30))){
var state_24261__$1 = state_24261;
var statearr_24332_24396 = state_24261__$1;
(statearr_24332_24396[(2)] = null);

(statearr_24332_24396[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (10))){
var inst_24145 = (state_24261[(14)]);
var inst_24143 = (state_24261[(17)]);
var inst_24151 = cljs.core._nth.call(null,inst_24143,inst_24145);
var inst_24152 = cljs.core.nth.call(null,inst_24151,(0),null);
var inst_24153 = cljs.core.nth.call(null,inst_24151,(1),null);
var state_24261__$1 = (function (){var statearr_24333 = state_24261;
(statearr_24333[(26)] = inst_24152);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24153)){
var statearr_24334_24397 = state_24261__$1;
(statearr_24334_24397[(1)] = (13));

} else {
var statearr_24335_24398 = state_24261__$1;
(statearr_24335_24398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (18))){
var inst_24186 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24336_24399 = state_24261__$1;
(statearr_24336_24399[(2)] = inst_24186);

(statearr_24336_24399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (42))){
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24261__$1,(45),dchan);
} else {
if((state_val_24262 === (37))){
var inst_24133 = (state_24261[(9)]);
var inst_24220 = (state_24261[(25)]);
var inst_24229 = (state_24261[(23)]);
var inst_24229__$1 = cljs.core.first.call(null,inst_24220);
var inst_24230 = cljs.core.async.put_BANG_.call(null,inst_24229__$1,inst_24133,done);
var state_24261__$1 = (function (){var statearr_24337 = state_24261;
(statearr_24337[(23)] = inst_24229__$1);

return statearr_24337;
})();
if(cljs.core.truth_(inst_24230)){
var statearr_24338_24400 = state_24261__$1;
(statearr_24338_24400[(1)] = (39));

} else {
var statearr_24339_24401 = state_24261__$1;
(statearr_24339_24401[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (8))){
var inst_24145 = (state_24261[(14)]);
var inst_24144 = (state_24261[(15)]);
var inst_24147 = (inst_24145 < inst_24144);
var inst_24148 = inst_24147;
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24148)){
var statearr_24340_24402 = state_24261__$1;
(statearr_24340_24402[(1)] = (10));

} else {
var statearr_24341_24403 = state_24261__$1;
(statearr_24341_24403[(1)] = (11));

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
});})(c__7043__auto___24349,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___24349,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24345[(0)] = state_machine__6988__auto__);

(statearr_24345[(1)] = (1));

return statearr_24345;
});
var state_machine__6988__auto____1 = (function (state_24261){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object)){
var ex__6991__auto__ = e24346;
var statearr_24347_24404 = state_24261;
(statearr_24347_24404[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24405 = state_24261;
state_24261 = G__24405;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24261){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24349,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_24348 = f__7044__auto__.call(null);
(statearr_24348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24349);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24349,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24407 = {};
return obj24407;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24408){
var map__24413 = p__24408;
var map__24413__$1 = ((cljs.core.seq_QMARK_.call(null,map__24413))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var opts = map__24413__$1;
var statearr_24414_24417 = state;
(statearr_24414_24417[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24413,map__24413__$1,opts){
return (function (val){
var statearr_24415_24418 = state;
(statearr_24415_24418[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24413,map__24413__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24416_24419 = state;
(statearr_24416_24419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24408 = null;
if (arguments.length > 3) {
  p__24408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24408);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24420){
var state = cljs.core.first(arglist__24420);
arglist__24420 = cljs.core.next(arglist__24420);
var cont_block = cljs.core.first(arglist__24420);
arglist__24420 = cljs.core.next(arglist__24420);
var ports = cljs.core.first(arglist__24420);
var p__24408 = cljs.core.rest(arglist__24420);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24408);
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
if(typeof cljs.core.async.t24540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24540 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24541){
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
this.meta24541 = meta24541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24540.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24540.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24540.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24542){
var self__ = this;
var _24542__$1 = this;
return self__.meta24541;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24542,meta24541__$1){
var self__ = this;
var _24542__$1 = this;
return (new cljs.core.async.t24540(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24541__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24540.cljs$lang$type = true;

cljs.core.async.t24540.cljs$lang$ctorStr = "cljs.core.async/t24540";

cljs.core.async.t24540.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24540");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24540 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24540(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24541){
return (new cljs.core.async.t24540(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24541));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24540(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (7))){
var inst_24556 = (state_24612[(7)]);
var inst_24561 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24556);
var state_24612__$1 = state_24612;
var statearr_24614_24660 = state_24612__$1;
(statearr_24614_24660[(2)] = inst_24561);

(statearr_24614_24660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (20))){
var inst_24571 = (state_24612[(8)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(23),out,inst_24571);
} else {
if((state_val_24613 === (1))){
var inst_24546 = (state_24612[(9)]);
var inst_24546__$1 = calc_state.call(null);
var inst_24547 = cljs.core.seq_QMARK_.call(null,inst_24546__$1);
var state_24612__$1 = (function (){var statearr_24615 = state_24612;
(statearr_24615[(9)] = inst_24546__$1);

return statearr_24615;
})();
if(inst_24547){
var statearr_24616_24661 = state_24612__$1;
(statearr_24616_24661[(1)] = (2));

} else {
var statearr_24617_24662 = state_24612__$1;
(statearr_24617_24662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (24))){
var inst_24564 = (state_24612[(10)]);
var inst_24556 = inst_24564;
var state_24612__$1 = (function (){var statearr_24618 = state_24612;
(statearr_24618[(7)] = inst_24556);

return statearr_24618;
})();
var statearr_24619_24663 = state_24612__$1;
(statearr_24619_24663[(2)] = null);

(statearr_24619_24663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (4))){
var inst_24546 = (state_24612[(9)]);
var inst_24552 = (state_24612[(2)]);
var inst_24553 = cljs.core.get.call(null,inst_24552,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24554 = cljs.core.get.call(null,inst_24552,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24555 = cljs.core.get.call(null,inst_24552,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24556 = inst_24546;
var state_24612__$1 = (function (){var statearr_24620 = state_24612;
(statearr_24620[(11)] = inst_24554);

(statearr_24620[(12)] = inst_24553);

(statearr_24620[(7)] = inst_24556);

(statearr_24620[(13)] = inst_24555);

return statearr_24620;
})();
var statearr_24621_24664 = state_24612__$1;
(statearr_24621_24664[(2)] = null);

(statearr_24621_24664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (15))){
var state_24612__$1 = state_24612;
var statearr_24622_24665 = state_24612__$1;
(statearr_24622_24665[(2)] = null);

(statearr_24622_24665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (21))){
var inst_24564 = (state_24612[(10)]);
var inst_24556 = inst_24564;
var state_24612__$1 = (function (){var statearr_24623 = state_24612;
(statearr_24623[(7)] = inst_24556);

return statearr_24623;
})();
var statearr_24624_24666 = state_24612__$1;
(statearr_24624_24666[(2)] = null);

(statearr_24624_24666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (13))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24625_24667 = state_24612__$1;
(statearr_24625_24667[(2)] = inst_24608);

(statearr_24625_24667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (22))){
var inst_24606 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24626_24668 = state_24612__$1;
(statearr_24626_24668[(2)] = inst_24606);

(statearr_24626_24668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (6))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (25))){
var state_24612__$1 = state_24612;
var statearr_24627_24669 = state_24612__$1;
(statearr_24627_24669[(2)] = null);

(statearr_24627_24669[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (17))){
var inst_24586 = (state_24612[(14)]);
var state_24612__$1 = state_24612;
var statearr_24628_24670 = state_24612__$1;
(statearr_24628_24670[(2)] = inst_24586);

(statearr_24628_24670[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (3))){
var inst_24546 = (state_24612[(9)]);
var state_24612__$1 = state_24612;
var statearr_24629_24671 = state_24612__$1;
(statearr_24629_24671[(2)] = inst_24546);

(statearr_24629_24671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (12))){
var inst_24567 = (state_24612[(15)]);
var inst_24586 = (state_24612[(14)]);
var inst_24572 = (state_24612[(16)]);
var inst_24586__$1 = inst_24567.call(null,inst_24572);
var state_24612__$1 = (function (){var statearr_24630 = state_24612;
(statearr_24630[(14)] = inst_24586__$1);

return statearr_24630;
})();
if(cljs.core.truth_(inst_24586__$1)){
var statearr_24631_24672 = state_24612__$1;
(statearr_24631_24672[(1)] = (17));

} else {
var statearr_24632_24673 = state_24612__$1;
(statearr_24632_24673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (2))){
var inst_24546 = (state_24612[(9)]);
var inst_24549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24546);
var state_24612__$1 = state_24612;
var statearr_24633_24674 = state_24612__$1;
(statearr_24633_24674[(2)] = inst_24549);

(statearr_24633_24674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (23))){
var inst_24597 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24597)){
var statearr_24634_24675 = state_24612__$1;
(statearr_24634_24675[(1)] = (24));

} else {
var statearr_24635_24676 = state_24612__$1;
(statearr_24635_24676[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (19))){
var inst_24594 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24594)){
var statearr_24636_24677 = state_24612__$1;
(statearr_24636_24677[(1)] = (20));

} else {
var statearr_24637_24678 = state_24612__$1;
(statearr_24637_24678[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (11))){
var inst_24571 = (state_24612[(8)]);
var inst_24577 = (inst_24571 == null);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24577)){
var statearr_24638_24679 = state_24612__$1;
(statearr_24638_24679[(1)] = (14));

} else {
var statearr_24639_24680 = state_24612__$1;
(statearr_24639_24680[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (9))){
var inst_24564 = (state_24612[(10)]);
var inst_24564__$1 = (state_24612[(2)]);
var inst_24565 = cljs.core.get.call(null,inst_24564__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24566 = cljs.core.get.call(null,inst_24564__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24567 = cljs.core.get.call(null,inst_24564__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24612__$1 = (function (){var statearr_24640 = state_24612;
(statearr_24640[(10)] = inst_24564__$1);

(statearr_24640[(15)] = inst_24567);

(statearr_24640[(17)] = inst_24566);

return statearr_24640;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24612__$1,(10),inst_24565);
} else {
if((state_val_24613 === (5))){
var inst_24556 = (state_24612[(7)]);
var inst_24559 = cljs.core.seq_QMARK_.call(null,inst_24556);
var state_24612__$1 = state_24612;
if(inst_24559){
var statearr_24641_24681 = state_24612__$1;
(statearr_24641_24681[(1)] = (7));

} else {
var statearr_24642_24682 = state_24612__$1;
(statearr_24642_24682[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (14))){
var inst_24572 = (state_24612[(16)]);
var inst_24579 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24572);
var state_24612__$1 = state_24612;
var statearr_24643_24683 = state_24612__$1;
(statearr_24643_24683[(2)] = inst_24579);

(statearr_24643_24683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (26))){
var inst_24602 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24644_24684 = state_24612__$1;
(statearr_24644_24684[(2)] = inst_24602);

(statearr_24644_24684[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (16))){
var inst_24582 = (state_24612[(2)]);
var inst_24583 = calc_state.call(null);
var inst_24556 = inst_24583;
var state_24612__$1 = (function (){var statearr_24645 = state_24612;
(statearr_24645[(7)] = inst_24556);

(statearr_24645[(18)] = inst_24582);

return statearr_24645;
})();
var statearr_24646_24685 = state_24612__$1;
(statearr_24646_24685[(2)] = null);

(statearr_24646_24685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (10))){
var inst_24571 = (state_24612[(8)]);
var inst_24572 = (state_24612[(16)]);
var inst_24570 = (state_24612[(2)]);
var inst_24571__$1 = cljs.core.nth.call(null,inst_24570,(0),null);
var inst_24572__$1 = cljs.core.nth.call(null,inst_24570,(1),null);
var inst_24573 = (inst_24571__$1 == null);
var inst_24574 = cljs.core._EQ_.call(null,inst_24572__$1,change);
var inst_24575 = (inst_24573) || (inst_24574);
var state_24612__$1 = (function (){var statearr_24647 = state_24612;
(statearr_24647[(8)] = inst_24571__$1);

(statearr_24647[(16)] = inst_24572__$1);

return statearr_24647;
})();
if(cljs.core.truth_(inst_24575)){
var statearr_24648_24686 = state_24612__$1;
(statearr_24648_24686[(1)] = (11));

} else {
var statearr_24649_24687 = state_24612__$1;
(statearr_24649_24687[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (18))){
var inst_24567 = (state_24612[(15)]);
var inst_24572 = (state_24612[(16)]);
var inst_24566 = (state_24612[(17)]);
var inst_24589 = cljs.core.empty_QMARK_.call(null,inst_24567);
var inst_24590 = inst_24566.call(null,inst_24572);
var inst_24591 = cljs.core.not.call(null,inst_24590);
var inst_24592 = (inst_24589) && (inst_24591);
var state_24612__$1 = state_24612;
var statearr_24650_24688 = state_24612__$1;
(statearr_24650_24688[(2)] = inst_24592);

(statearr_24650_24688[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (8))){
var inst_24556 = (state_24612[(7)]);
var state_24612__$1 = state_24612;
var statearr_24651_24689 = state_24612__$1;
(statearr_24651_24689[(2)] = inst_24556);

(statearr_24651_24689[(1)] = (9));


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
});})(c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24655[(0)] = state_machine__6988__auto__);

(statearr_24655[(1)] = (1));

return statearr_24655;
});
var state_machine__6988__auto____1 = (function (state_24612){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object)){
var ex__6991__auto__ = e24656;
var statearr_24657_24690 = state_24612;
(statearr_24657_24690[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24691 = state_24612;
state_24612 = G__24691;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_24658 = f__7044__auto__.call(null);
(statearr_24658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24659);

return statearr_24658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24693 = {};
return obj24693;
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
return (function (p1__24694_SHARP_){
if(cljs.core.truth_(p1__24694_SHARP_.call(null,topic))){
return p1__24694_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24694_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24817 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24817 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24818){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24818 = meta24818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24817.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24819){
var self__ = this;
var _24819__$1 = this;
return self__.meta24818;
});})(mults,ensure_mult))
;

cljs.core.async.t24817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24819,meta24818__$1){
var self__ = this;
var _24819__$1 = this;
return (new cljs.core.async.t24817(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24818__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24817.cljs$lang$type = true;

cljs.core.async.t24817.cljs$lang$ctorStr = "cljs.core.async/t24817";

cljs.core.async.t24817.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24817");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24817 = ((function (mults,ensure_mult){
return (function __GT_t24817(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24818){
return (new cljs.core.async.t24817(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24818));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24817(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24939,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24939,mults,ensure_mult,p){
return (function (state_24891){
var state_val_24892 = (state_24891[(1)]);
if((state_val_24892 === (7))){
var inst_24887 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24893_24940 = state_24891__$1;
(statearr_24893_24940[(2)] = inst_24887);

(statearr_24893_24940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (20))){
var state_24891__$1 = state_24891;
var statearr_24894_24941 = state_24891__$1;
(statearr_24894_24941[(2)] = null);

(statearr_24894_24941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (1))){
var state_24891__$1 = state_24891;
var statearr_24895_24942 = state_24891__$1;
(statearr_24895_24942[(2)] = null);

(statearr_24895_24942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (24))){
var inst_24870 = (state_24891[(7)]);
var inst_24879 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24870);
var state_24891__$1 = state_24891;
var statearr_24896_24943 = state_24891__$1;
(statearr_24896_24943[(2)] = inst_24879);

(statearr_24896_24943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (4))){
var inst_24822 = (state_24891[(8)]);
var inst_24822__$1 = (state_24891[(2)]);
var inst_24823 = (inst_24822__$1 == null);
var state_24891__$1 = (function (){var statearr_24897 = state_24891;
(statearr_24897[(8)] = inst_24822__$1);

return statearr_24897;
})();
if(cljs.core.truth_(inst_24823)){
var statearr_24898_24944 = state_24891__$1;
(statearr_24898_24944[(1)] = (5));

} else {
var statearr_24899_24945 = state_24891__$1;
(statearr_24899_24945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (15))){
var inst_24864 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24900_24946 = state_24891__$1;
(statearr_24900_24946[(2)] = inst_24864);

(statearr_24900_24946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (21))){
var inst_24884 = (state_24891[(2)]);
var state_24891__$1 = (function (){var statearr_24901 = state_24891;
(statearr_24901[(9)] = inst_24884);

return statearr_24901;
})();
var statearr_24902_24947 = state_24891__$1;
(statearr_24902_24947[(2)] = null);

(statearr_24902_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (13))){
var inst_24846 = (state_24891[(10)]);
var inst_24848 = cljs.core.chunked_seq_QMARK_.call(null,inst_24846);
var state_24891__$1 = state_24891;
if(inst_24848){
var statearr_24903_24948 = state_24891__$1;
(statearr_24903_24948[(1)] = (16));

} else {
var statearr_24904_24949 = state_24891__$1;
(statearr_24904_24949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (22))){
var inst_24876 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
if(cljs.core.truth_(inst_24876)){
var statearr_24905_24950 = state_24891__$1;
(statearr_24905_24950[(1)] = (23));

} else {
var statearr_24906_24951 = state_24891__$1;
(statearr_24906_24951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (6))){
var inst_24872 = (state_24891[(11)]);
var inst_24870 = (state_24891[(7)]);
var inst_24822 = (state_24891[(8)]);
var inst_24870__$1 = topic_fn.call(null,inst_24822);
var inst_24871 = cljs.core.deref.call(null,mults);
var inst_24872__$1 = cljs.core.get.call(null,inst_24871,inst_24870__$1);
var state_24891__$1 = (function (){var statearr_24907 = state_24891;
(statearr_24907[(11)] = inst_24872__$1);

(statearr_24907[(7)] = inst_24870__$1);

return statearr_24907;
})();
if(cljs.core.truth_(inst_24872__$1)){
var statearr_24908_24952 = state_24891__$1;
(statearr_24908_24952[(1)] = (19));

} else {
var statearr_24909_24953 = state_24891__$1;
(statearr_24909_24953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (25))){
var inst_24881 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24910_24954 = state_24891__$1;
(statearr_24910_24954[(2)] = inst_24881);

(statearr_24910_24954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (17))){
var inst_24846 = (state_24891[(10)]);
var inst_24855 = cljs.core.first.call(null,inst_24846);
var inst_24856 = cljs.core.async.muxch_STAR_.call(null,inst_24855);
var inst_24857 = cljs.core.async.close_BANG_.call(null,inst_24856);
var inst_24858 = cljs.core.next.call(null,inst_24846);
var inst_24832 = inst_24858;
var inst_24833 = null;
var inst_24834 = (0);
var inst_24835 = (0);
var state_24891__$1 = (function (){var statearr_24911 = state_24891;
(statearr_24911[(12)] = inst_24835);

(statearr_24911[(13)] = inst_24833);

(statearr_24911[(14)] = inst_24857);

(statearr_24911[(15)] = inst_24834);

(statearr_24911[(16)] = inst_24832);

return statearr_24911;
})();
var statearr_24912_24955 = state_24891__$1;
(statearr_24912_24955[(2)] = null);

(statearr_24912_24955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (3))){
var inst_24889 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24891__$1,inst_24889);
} else {
if((state_val_24892 === (12))){
var inst_24866 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24913_24956 = state_24891__$1;
(statearr_24913_24956[(2)] = inst_24866);

(statearr_24913_24956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (2))){
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24891__$1,(4),ch);
} else {
if((state_val_24892 === (23))){
var state_24891__$1 = state_24891;
var statearr_24914_24957 = state_24891__$1;
(statearr_24914_24957[(2)] = null);

(statearr_24914_24957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (19))){
var inst_24872 = (state_24891[(11)]);
var inst_24822 = (state_24891[(8)]);
var inst_24874 = cljs.core.async.muxch_STAR_.call(null,inst_24872);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24891__$1,(22),inst_24874,inst_24822);
} else {
if((state_val_24892 === (11))){
var inst_24846 = (state_24891[(10)]);
var inst_24832 = (state_24891[(16)]);
var inst_24846__$1 = cljs.core.seq.call(null,inst_24832);
var state_24891__$1 = (function (){var statearr_24915 = state_24891;
(statearr_24915[(10)] = inst_24846__$1);

return statearr_24915;
})();
if(inst_24846__$1){
var statearr_24916_24958 = state_24891__$1;
(statearr_24916_24958[(1)] = (13));

} else {
var statearr_24917_24959 = state_24891__$1;
(statearr_24917_24959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (9))){
var inst_24868 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24918_24960 = state_24891__$1;
(statearr_24918_24960[(2)] = inst_24868);

(statearr_24918_24960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (5))){
var inst_24829 = cljs.core.deref.call(null,mults);
var inst_24830 = cljs.core.vals.call(null,inst_24829);
var inst_24831 = cljs.core.seq.call(null,inst_24830);
var inst_24832 = inst_24831;
var inst_24833 = null;
var inst_24834 = (0);
var inst_24835 = (0);
var state_24891__$1 = (function (){var statearr_24919 = state_24891;
(statearr_24919[(12)] = inst_24835);

(statearr_24919[(13)] = inst_24833);

(statearr_24919[(15)] = inst_24834);

(statearr_24919[(16)] = inst_24832);

return statearr_24919;
})();
var statearr_24920_24961 = state_24891__$1;
(statearr_24920_24961[(2)] = null);

(statearr_24920_24961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (14))){
var state_24891__$1 = state_24891;
var statearr_24924_24962 = state_24891__$1;
(statearr_24924_24962[(2)] = null);

(statearr_24924_24962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (16))){
var inst_24846 = (state_24891[(10)]);
var inst_24850 = cljs.core.chunk_first.call(null,inst_24846);
var inst_24851 = cljs.core.chunk_rest.call(null,inst_24846);
var inst_24852 = cljs.core.count.call(null,inst_24850);
var inst_24832 = inst_24851;
var inst_24833 = inst_24850;
var inst_24834 = inst_24852;
var inst_24835 = (0);
var state_24891__$1 = (function (){var statearr_24925 = state_24891;
(statearr_24925[(12)] = inst_24835);

(statearr_24925[(13)] = inst_24833);

(statearr_24925[(15)] = inst_24834);

(statearr_24925[(16)] = inst_24832);

return statearr_24925;
})();
var statearr_24926_24963 = state_24891__$1;
(statearr_24926_24963[(2)] = null);

(statearr_24926_24963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (10))){
var inst_24835 = (state_24891[(12)]);
var inst_24833 = (state_24891[(13)]);
var inst_24834 = (state_24891[(15)]);
var inst_24832 = (state_24891[(16)]);
var inst_24840 = cljs.core._nth.call(null,inst_24833,inst_24835);
var inst_24841 = cljs.core.async.muxch_STAR_.call(null,inst_24840);
var inst_24842 = cljs.core.async.close_BANG_.call(null,inst_24841);
var inst_24843 = (inst_24835 + (1));
var tmp24921 = inst_24833;
var tmp24922 = inst_24834;
var tmp24923 = inst_24832;
var inst_24832__$1 = tmp24923;
var inst_24833__$1 = tmp24921;
var inst_24834__$1 = tmp24922;
var inst_24835__$1 = inst_24843;
var state_24891__$1 = (function (){var statearr_24927 = state_24891;
(statearr_24927[(17)] = inst_24842);

(statearr_24927[(12)] = inst_24835__$1);

(statearr_24927[(13)] = inst_24833__$1);

(statearr_24927[(15)] = inst_24834__$1);

(statearr_24927[(16)] = inst_24832__$1);

return statearr_24927;
})();
var statearr_24928_24964 = state_24891__$1;
(statearr_24928_24964[(2)] = null);

(statearr_24928_24964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (18))){
var inst_24861 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24929_24965 = state_24891__$1;
(statearr_24929_24965[(2)] = inst_24861);

(statearr_24929_24965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (8))){
var inst_24835 = (state_24891[(12)]);
var inst_24834 = (state_24891[(15)]);
var inst_24837 = (inst_24835 < inst_24834);
var inst_24838 = inst_24837;
var state_24891__$1 = state_24891;
if(cljs.core.truth_(inst_24838)){
var statearr_24930_24966 = state_24891__$1;
(statearr_24930_24966[(1)] = (10));

} else {
var statearr_24931_24967 = state_24891__$1;
(statearr_24931_24967[(1)] = (11));

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
});})(c__7043__auto___24939,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___24939,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24935[(0)] = state_machine__6988__auto__);

(statearr_24935[(1)] = (1));

return statearr_24935;
});
var state_machine__6988__auto____1 = (function (state_24891){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24936){if((e24936 instanceof Object)){
var ex__6991__auto__ = e24936;
var statearr_24937_24968 = state_24891;
(statearr_24937_24968[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24969 = state_24891;
state_24891 = G__24969;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24891){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24939,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_24938 = f__7044__auto__.call(null);
(statearr_24938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24939);

return statearr_24938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24939,mults,ensure_mult,p))
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
var c__7043__auto___25106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25076){
var state_val_25077 = (state_25076[(1)]);
if((state_val_25077 === (7))){
var state_25076__$1 = state_25076;
var statearr_25078_25107 = state_25076__$1;
(statearr_25078_25107[(2)] = null);

(statearr_25078_25107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (1))){
var state_25076__$1 = state_25076;
var statearr_25079_25108 = state_25076__$1;
(statearr_25079_25108[(2)] = null);

(statearr_25079_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (4))){
var inst_25040 = (state_25076[(7)]);
var inst_25042 = (inst_25040 < cnt);
var state_25076__$1 = state_25076;
if(cljs.core.truth_(inst_25042)){
var statearr_25080_25109 = state_25076__$1;
(statearr_25080_25109[(1)] = (6));

} else {
var statearr_25081_25110 = state_25076__$1;
(statearr_25081_25110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (15))){
var inst_25072 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25082_25111 = state_25076__$1;
(statearr_25082_25111[(2)] = inst_25072);

(statearr_25082_25111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (13))){
var inst_25065 = cljs.core.async.close_BANG_.call(null,out);
var state_25076__$1 = state_25076;
var statearr_25083_25112 = state_25076__$1;
(statearr_25083_25112[(2)] = inst_25065);

(statearr_25083_25112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (6))){
var state_25076__$1 = state_25076;
var statearr_25084_25113 = state_25076__$1;
(statearr_25084_25113[(2)] = null);

(statearr_25084_25113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (3))){
var inst_25074 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25076__$1,inst_25074);
} else {
if((state_val_25077 === (12))){
var inst_25062 = (state_25076[(8)]);
var inst_25062__$1 = (state_25076[(2)]);
var inst_25063 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25062__$1);
var state_25076__$1 = (function (){var statearr_25085 = state_25076;
(statearr_25085[(8)] = inst_25062__$1);

return statearr_25085;
})();
if(cljs.core.truth_(inst_25063)){
var statearr_25086_25114 = state_25076__$1;
(statearr_25086_25114[(1)] = (13));

} else {
var statearr_25087_25115 = state_25076__$1;
(statearr_25087_25115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (2))){
var inst_25039 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25040 = (0);
var state_25076__$1 = (function (){var statearr_25088 = state_25076;
(statearr_25088[(7)] = inst_25040);

(statearr_25088[(9)] = inst_25039);

return statearr_25088;
})();
var statearr_25089_25116 = state_25076__$1;
(statearr_25089_25116[(2)] = null);

(statearr_25089_25116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (11))){
var inst_25040 = (state_25076[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25076,(10),Object,null,(9));
var inst_25049 = chs__$1.call(null,inst_25040);
var inst_25050 = done.call(null,inst_25040);
var inst_25051 = cljs.core.async.take_BANG_.call(null,inst_25049,inst_25050);
var state_25076__$1 = state_25076;
var statearr_25090_25117 = state_25076__$1;
(statearr_25090_25117[(2)] = inst_25051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (9))){
var inst_25040 = (state_25076[(7)]);
var inst_25053 = (state_25076[(2)]);
var inst_25054 = (inst_25040 + (1));
var inst_25040__$1 = inst_25054;
var state_25076__$1 = (function (){var statearr_25091 = state_25076;
(statearr_25091[(10)] = inst_25053);

(statearr_25091[(7)] = inst_25040__$1);

return statearr_25091;
})();
var statearr_25092_25118 = state_25076__$1;
(statearr_25092_25118[(2)] = null);

(statearr_25092_25118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (5))){
var inst_25060 = (state_25076[(2)]);
var state_25076__$1 = (function (){var statearr_25093 = state_25076;
(statearr_25093[(11)] = inst_25060);

return statearr_25093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25076__$1,(12),dchan);
} else {
if((state_val_25077 === (14))){
var inst_25062 = (state_25076[(8)]);
var inst_25067 = cljs.core.apply.call(null,f,inst_25062);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25076__$1,(16),out,inst_25067);
} else {
if((state_val_25077 === (16))){
var inst_25069 = (state_25076[(2)]);
var state_25076__$1 = (function (){var statearr_25094 = state_25076;
(statearr_25094[(12)] = inst_25069);

return statearr_25094;
})();
var statearr_25095_25119 = state_25076__$1;
(statearr_25095_25119[(2)] = null);

(statearr_25095_25119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (10))){
var inst_25044 = (state_25076[(2)]);
var inst_25045 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25076__$1 = (function (){var statearr_25096 = state_25076;
(statearr_25096[(13)] = inst_25044);

return statearr_25096;
})();
var statearr_25097_25120 = state_25076__$1;
(statearr_25097_25120[(2)] = inst_25045);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (8))){
var inst_25058 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25098_25121 = state_25076__$1;
(statearr_25098_25121[(2)] = inst_25058);

(statearr_25098_25121[(1)] = (5));


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
});})(c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = state_machine__6988__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var state_machine__6988__auto____1 = (function (state_25076){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__6991__auto__ = e25103;
var statearr_25104_25122 = state_25076;
(statearr_25104_25122[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25123 = state_25076;
state_25076 = G__25123;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25076){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_25105 = f__7044__auto__.call(null);
(statearr_25105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25106);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25106,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___25231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25231,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25231,out){
return (function (state_25207){
var state_val_25208 = (state_25207[(1)]);
if((state_val_25208 === (7))){
var inst_25186 = (state_25207[(7)]);
var inst_25187 = (state_25207[(8)]);
var inst_25186__$1 = (state_25207[(2)]);
var inst_25187__$1 = cljs.core.nth.call(null,inst_25186__$1,(0),null);
var inst_25188 = cljs.core.nth.call(null,inst_25186__$1,(1),null);
var inst_25189 = (inst_25187__$1 == null);
var state_25207__$1 = (function (){var statearr_25209 = state_25207;
(statearr_25209[(7)] = inst_25186__$1);

(statearr_25209[(9)] = inst_25188);

(statearr_25209[(8)] = inst_25187__$1);

return statearr_25209;
})();
if(cljs.core.truth_(inst_25189)){
var statearr_25210_25232 = state_25207__$1;
(statearr_25210_25232[(1)] = (8));

} else {
var statearr_25211_25233 = state_25207__$1;
(statearr_25211_25233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (1))){
var inst_25178 = cljs.core.vec.call(null,chs);
var inst_25179 = inst_25178;
var state_25207__$1 = (function (){var statearr_25212 = state_25207;
(statearr_25212[(10)] = inst_25179);

return statearr_25212;
})();
var statearr_25213_25234 = state_25207__$1;
(statearr_25213_25234[(2)] = null);

(statearr_25213_25234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (4))){
var inst_25179 = (state_25207[(10)]);
var state_25207__$1 = state_25207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25207__$1,(7),inst_25179);
} else {
if((state_val_25208 === (6))){
var inst_25203 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25214_25235 = state_25207__$1;
(statearr_25214_25235[(2)] = inst_25203);

(statearr_25214_25235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (3))){
var inst_25205 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25207__$1,inst_25205);
} else {
if((state_val_25208 === (2))){
var inst_25179 = (state_25207[(10)]);
var inst_25181 = cljs.core.count.call(null,inst_25179);
var inst_25182 = (inst_25181 > (0));
var state_25207__$1 = state_25207;
if(cljs.core.truth_(inst_25182)){
var statearr_25216_25236 = state_25207__$1;
(statearr_25216_25236[(1)] = (4));

} else {
var statearr_25217_25237 = state_25207__$1;
(statearr_25217_25237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (11))){
var inst_25179 = (state_25207[(10)]);
var inst_25196 = (state_25207[(2)]);
var tmp25215 = inst_25179;
var inst_25179__$1 = tmp25215;
var state_25207__$1 = (function (){var statearr_25218 = state_25207;
(statearr_25218[(11)] = inst_25196);

(statearr_25218[(10)] = inst_25179__$1);

return statearr_25218;
})();
var statearr_25219_25238 = state_25207__$1;
(statearr_25219_25238[(2)] = null);

(statearr_25219_25238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (9))){
var inst_25187 = (state_25207[(8)]);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25207__$1,(11),out,inst_25187);
} else {
if((state_val_25208 === (5))){
var inst_25201 = cljs.core.async.close_BANG_.call(null,out);
var state_25207__$1 = state_25207;
var statearr_25220_25239 = state_25207__$1;
(statearr_25220_25239[(2)] = inst_25201);

(statearr_25220_25239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (10))){
var inst_25199 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25221_25240 = state_25207__$1;
(statearr_25221_25240[(2)] = inst_25199);

(statearr_25221_25240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (8))){
var inst_25186 = (state_25207[(7)]);
var inst_25188 = (state_25207[(9)]);
var inst_25179 = (state_25207[(10)]);
var inst_25187 = (state_25207[(8)]);
var inst_25191 = (function (){var c = inst_25188;
var v = inst_25187;
var vec__25184 = inst_25186;
var cs = inst_25179;
return ((function (c,v,vec__25184,cs,inst_25186,inst_25188,inst_25179,inst_25187,state_val_25208,c__7043__auto___25231,out){
return (function (p1__25124_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25124_SHARP_);
});
;})(c,v,vec__25184,cs,inst_25186,inst_25188,inst_25179,inst_25187,state_val_25208,c__7043__auto___25231,out))
})();
var inst_25192 = cljs.core.filterv.call(null,inst_25191,inst_25179);
var inst_25179__$1 = inst_25192;
var state_25207__$1 = (function (){var statearr_25222 = state_25207;
(statearr_25222[(10)] = inst_25179__$1);

return statearr_25222;
})();
var statearr_25223_25241 = state_25207__$1;
(statearr_25223_25241[(2)] = null);

(statearr_25223_25241[(1)] = (2));


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
});})(c__7043__auto___25231,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25231,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25227[(0)] = state_machine__6988__auto__);

(statearr_25227[(1)] = (1));

return statearr_25227;
});
var state_machine__6988__auto____1 = (function (state_25207){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25228){if((e25228 instanceof Object)){
var ex__6991__auto__ = e25228;
var statearr_25229_25242 = state_25207;
(statearr_25229_25242[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25207;
state_25207 = G__25243;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25231,out))
})();
var state__7045__auto__ = (function (){var statearr_25230 = f__7044__auto__.call(null);
(statearr_25230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25231);

return statearr_25230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25231,out))
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
var c__7043__auto___25336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25336,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25336,out){
return (function (state_25313){
var state_val_25314 = (state_25313[(1)]);
if((state_val_25314 === (7))){
var inst_25295 = (state_25313[(7)]);
var inst_25295__$1 = (state_25313[(2)]);
var inst_25296 = (inst_25295__$1 == null);
var inst_25297 = cljs.core.not.call(null,inst_25296);
var state_25313__$1 = (function (){var statearr_25315 = state_25313;
(statearr_25315[(7)] = inst_25295__$1);

return statearr_25315;
})();
if(inst_25297){
var statearr_25316_25337 = state_25313__$1;
(statearr_25316_25337[(1)] = (8));

} else {
var statearr_25317_25338 = state_25313__$1;
(statearr_25317_25338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (1))){
var inst_25290 = (0);
var state_25313__$1 = (function (){var statearr_25318 = state_25313;
(statearr_25318[(8)] = inst_25290);

return statearr_25318;
})();
var statearr_25319_25339 = state_25313__$1;
(statearr_25319_25339[(2)] = null);

(statearr_25319_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (4))){
var state_25313__$1 = state_25313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25313__$1,(7),ch);
} else {
if((state_val_25314 === (6))){
var inst_25308 = (state_25313[(2)]);
var state_25313__$1 = state_25313;
var statearr_25320_25340 = state_25313__$1;
(statearr_25320_25340[(2)] = inst_25308);

(statearr_25320_25340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (3))){
var inst_25310 = (state_25313[(2)]);
var inst_25311 = cljs.core.async.close_BANG_.call(null,out);
var state_25313__$1 = (function (){var statearr_25321 = state_25313;
(statearr_25321[(9)] = inst_25310);

return statearr_25321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25313__$1,inst_25311);
} else {
if((state_val_25314 === (2))){
var inst_25290 = (state_25313[(8)]);
var inst_25292 = (inst_25290 < n);
var state_25313__$1 = state_25313;
if(cljs.core.truth_(inst_25292)){
var statearr_25322_25341 = state_25313__$1;
(statearr_25322_25341[(1)] = (4));

} else {
var statearr_25323_25342 = state_25313__$1;
(statearr_25323_25342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (11))){
var inst_25290 = (state_25313[(8)]);
var inst_25300 = (state_25313[(2)]);
var inst_25301 = (inst_25290 + (1));
var inst_25290__$1 = inst_25301;
var state_25313__$1 = (function (){var statearr_25324 = state_25313;
(statearr_25324[(10)] = inst_25300);

(statearr_25324[(8)] = inst_25290__$1);

return statearr_25324;
})();
var statearr_25325_25343 = state_25313__$1;
(statearr_25325_25343[(2)] = null);

(statearr_25325_25343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (9))){
var state_25313__$1 = state_25313;
var statearr_25326_25344 = state_25313__$1;
(statearr_25326_25344[(2)] = null);

(statearr_25326_25344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (5))){
var state_25313__$1 = state_25313;
var statearr_25327_25345 = state_25313__$1;
(statearr_25327_25345[(2)] = null);

(statearr_25327_25345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (10))){
var inst_25305 = (state_25313[(2)]);
var state_25313__$1 = state_25313;
var statearr_25328_25346 = state_25313__$1;
(statearr_25328_25346[(2)] = inst_25305);

(statearr_25328_25346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (8))){
var inst_25295 = (state_25313[(7)]);
var state_25313__$1 = state_25313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25313__$1,(11),out,inst_25295);
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
});})(c__7043__auto___25336,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25336,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25332[(0)] = state_machine__6988__auto__);

(statearr_25332[(1)] = (1));

return statearr_25332;
});
var state_machine__6988__auto____1 = (function (state_25313){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25333){if((e25333 instanceof Object)){
var ex__6991__auto__ = e25333;
var statearr_25334_25347 = state_25313;
(statearr_25334_25347[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25348 = state_25313;
state_25313 = G__25348;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25313){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25336,out))
})();
var state__7045__auto__ = (function (){var statearr_25335 = f__7044__auto__.call(null);
(statearr_25335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25336);

return statearr_25335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25336,out))
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
if(typeof cljs.core.async.t25356 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25356 = (function (ch,f,map_LT_,meta25357){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25357 = meta25357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25359 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25359 = (function (fn1,_,meta25357,map_LT_,f,ch,meta25360){
this.fn1 = fn1;
this._ = _;
this.meta25357 = meta25357;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25360 = meta25360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25359.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25349_SHARP_){
return f1.call(null,(((p1__25349_SHARP_ == null))?null:self__.f.call(null,p1__25349_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25361){
var self__ = this;
var _25361__$1 = this;
return self__.meta25360;
});})(___$1))
;

cljs.core.async.t25359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25361,meta25360__$1){
var self__ = this;
var _25361__$1 = this;
return (new cljs.core.async.t25359(self__.fn1,self__._,self__.meta25357,self__.map_LT_,self__.f,self__.ch,meta25360__$1));
});})(___$1))
;

cljs.core.async.t25359.cljs$lang$type = true;

cljs.core.async.t25359.cljs$lang$ctorStr = "cljs.core.async/t25359";

cljs.core.async.t25359.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25359");
});})(___$1))
;

cljs.core.async.__GT_t25359 = ((function (___$1){
return (function __GT_t25359(fn1__$1,___$2,meta25357__$1,map_LT___$1,f__$1,ch__$1,meta25360){
return (new cljs.core.async.t25359(fn1__$1,___$2,meta25357__$1,map_LT___$1,f__$1,ch__$1,meta25360));
});})(___$1))
;

}

return (new cljs.core.async.t25359(fn1,___$1,self__.meta25357,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25358){
var self__ = this;
var _25358__$1 = this;
return self__.meta25357;
});

cljs.core.async.t25356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25358,meta25357__$1){
var self__ = this;
var _25358__$1 = this;
return (new cljs.core.async.t25356(self__.ch,self__.f,self__.map_LT_,meta25357__$1));
});

cljs.core.async.t25356.cljs$lang$type = true;

cljs.core.async.t25356.cljs$lang$ctorStr = "cljs.core.async/t25356";

cljs.core.async.t25356.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25356");
});

cljs.core.async.__GT_t25356 = (function __GT_t25356(ch__$1,f__$1,map_LT___$1,meta25357){
return (new cljs.core.async.t25356(ch__$1,f__$1,map_LT___$1,meta25357));
});

}

return (new cljs.core.async.t25356(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25365 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25365 = (function (ch,f,map_GT_,meta25366){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25366 = meta25366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25367){
var self__ = this;
var _25367__$1 = this;
return self__.meta25366;
});

cljs.core.async.t25365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25367,meta25366__$1){
var self__ = this;
var _25367__$1 = this;
return (new cljs.core.async.t25365(self__.ch,self__.f,self__.map_GT_,meta25366__$1));
});

cljs.core.async.t25365.cljs$lang$type = true;

cljs.core.async.t25365.cljs$lang$ctorStr = "cljs.core.async/t25365";

cljs.core.async.t25365.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25365");
});

cljs.core.async.__GT_t25365 = (function __GT_t25365(ch__$1,f__$1,map_GT___$1,meta25366){
return (new cljs.core.async.t25365(ch__$1,f__$1,map_GT___$1,meta25366));
});

}

return (new cljs.core.async.t25365(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25371 = (function (ch,p,filter_GT_,meta25372){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25372 = meta25372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25373){
var self__ = this;
var _25373__$1 = this;
return self__.meta25372;
});

cljs.core.async.t25371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25373,meta25372__$1){
var self__ = this;
var _25373__$1 = this;
return (new cljs.core.async.t25371(self__.ch,self__.p,self__.filter_GT_,meta25372__$1));
});

cljs.core.async.t25371.cljs$lang$type = true;

cljs.core.async.t25371.cljs$lang$ctorStr = "cljs.core.async/t25371";

cljs.core.async.t25371.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25371");
});

cljs.core.async.__GT_t25371 = (function __GT_t25371(ch__$1,p__$1,filter_GT___$1,meta25372){
return (new cljs.core.async.t25371(ch__$1,p__$1,filter_GT___$1,meta25372));
});

}

return (new cljs.core.async.t25371(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___25456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25456,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25456,out){
return (function (state_25435){
var state_val_25436 = (state_25435[(1)]);
if((state_val_25436 === (7))){
var inst_25431 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25437_25457 = state_25435__$1;
(statearr_25437_25457[(2)] = inst_25431);

(statearr_25437_25457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (1))){
var state_25435__$1 = state_25435;
var statearr_25438_25458 = state_25435__$1;
(statearr_25438_25458[(2)] = null);

(statearr_25438_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (4))){
var inst_25417 = (state_25435[(7)]);
var inst_25417__$1 = (state_25435[(2)]);
var inst_25418 = (inst_25417__$1 == null);
var state_25435__$1 = (function (){var statearr_25439 = state_25435;
(statearr_25439[(7)] = inst_25417__$1);

return statearr_25439;
})();
if(cljs.core.truth_(inst_25418)){
var statearr_25440_25459 = state_25435__$1;
(statearr_25440_25459[(1)] = (5));

} else {
var statearr_25441_25460 = state_25435__$1;
(statearr_25441_25460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (6))){
var inst_25417 = (state_25435[(7)]);
var inst_25422 = p.call(null,inst_25417);
var state_25435__$1 = state_25435;
if(cljs.core.truth_(inst_25422)){
var statearr_25442_25461 = state_25435__$1;
(statearr_25442_25461[(1)] = (8));

} else {
var statearr_25443_25462 = state_25435__$1;
(statearr_25443_25462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (3))){
var inst_25433 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25435__$1,inst_25433);
} else {
if((state_val_25436 === (2))){
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25435__$1,(4),ch);
} else {
if((state_val_25436 === (11))){
var inst_25425 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25444_25463 = state_25435__$1;
(statearr_25444_25463[(2)] = inst_25425);

(statearr_25444_25463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (9))){
var state_25435__$1 = state_25435;
var statearr_25445_25464 = state_25435__$1;
(statearr_25445_25464[(2)] = null);

(statearr_25445_25464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (5))){
var inst_25420 = cljs.core.async.close_BANG_.call(null,out);
var state_25435__$1 = state_25435;
var statearr_25446_25465 = state_25435__$1;
(statearr_25446_25465[(2)] = inst_25420);

(statearr_25446_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (10))){
var inst_25428 = (state_25435[(2)]);
var state_25435__$1 = (function (){var statearr_25447 = state_25435;
(statearr_25447[(8)] = inst_25428);

return statearr_25447;
})();
var statearr_25448_25466 = state_25435__$1;
(statearr_25448_25466[(2)] = null);

(statearr_25448_25466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (8))){
var inst_25417 = (state_25435[(7)]);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25435__$1,(11),out,inst_25417);
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
});})(c__7043__auto___25456,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25456,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25452 = [null,null,null,null,null,null,null,null,null];
(statearr_25452[(0)] = state_machine__6988__auto__);

(statearr_25452[(1)] = (1));

return statearr_25452;
});
var state_machine__6988__auto____1 = (function (state_25435){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25453){if((e25453 instanceof Object)){
var ex__6991__auto__ = e25453;
var statearr_25454_25467 = state_25435;
(statearr_25454_25467[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25468 = state_25435;
state_25435 = G__25468;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25435){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25456,out))
})();
var state__7045__auto__ = (function (){var statearr_25455 = f__7044__auto__.call(null);
(statearr_25455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25456);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25456,out))
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
return (function (state_25634){
var state_val_25635 = (state_25634[(1)]);
if((state_val_25635 === (7))){
var inst_25630 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25636_25677 = state_25634__$1;
(statearr_25636_25677[(2)] = inst_25630);

(statearr_25636_25677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (20))){
var inst_25600 = (state_25634[(7)]);
var inst_25611 = (state_25634[(2)]);
var inst_25612 = cljs.core.next.call(null,inst_25600);
var inst_25586 = inst_25612;
var inst_25587 = null;
var inst_25588 = (0);
var inst_25589 = (0);
var state_25634__$1 = (function (){var statearr_25637 = state_25634;
(statearr_25637[(8)] = inst_25587);

(statearr_25637[(9)] = inst_25586);

(statearr_25637[(10)] = inst_25611);

(statearr_25637[(11)] = inst_25588);

(statearr_25637[(12)] = inst_25589);

return statearr_25637;
})();
var statearr_25638_25678 = state_25634__$1;
(statearr_25638_25678[(2)] = null);

(statearr_25638_25678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (1))){
var state_25634__$1 = state_25634;
var statearr_25639_25679 = state_25634__$1;
(statearr_25639_25679[(2)] = null);

(statearr_25639_25679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (4))){
var inst_25575 = (state_25634[(13)]);
var inst_25575__$1 = (state_25634[(2)]);
var inst_25576 = (inst_25575__$1 == null);
var state_25634__$1 = (function (){var statearr_25640 = state_25634;
(statearr_25640[(13)] = inst_25575__$1);

return statearr_25640;
})();
if(cljs.core.truth_(inst_25576)){
var statearr_25641_25680 = state_25634__$1;
(statearr_25641_25680[(1)] = (5));

} else {
var statearr_25642_25681 = state_25634__$1;
(statearr_25642_25681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (15))){
var state_25634__$1 = state_25634;
var statearr_25646_25682 = state_25634__$1;
(statearr_25646_25682[(2)] = null);

(statearr_25646_25682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (21))){
var state_25634__$1 = state_25634;
var statearr_25647_25683 = state_25634__$1;
(statearr_25647_25683[(2)] = null);

(statearr_25647_25683[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (13))){
var inst_25587 = (state_25634[(8)]);
var inst_25586 = (state_25634[(9)]);
var inst_25588 = (state_25634[(11)]);
var inst_25589 = (state_25634[(12)]);
var inst_25596 = (state_25634[(2)]);
var inst_25597 = (inst_25589 + (1));
var tmp25643 = inst_25587;
var tmp25644 = inst_25586;
var tmp25645 = inst_25588;
var inst_25586__$1 = tmp25644;
var inst_25587__$1 = tmp25643;
var inst_25588__$1 = tmp25645;
var inst_25589__$1 = inst_25597;
var state_25634__$1 = (function (){var statearr_25648 = state_25634;
(statearr_25648[(8)] = inst_25587__$1);

(statearr_25648[(9)] = inst_25586__$1);

(statearr_25648[(11)] = inst_25588__$1);

(statearr_25648[(12)] = inst_25589__$1);

(statearr_25648[(14)] = inst_25596);

return statearr_25648;
})();
var statearr_25649_25684 = state_25634__$1;
(statearr_25649_25684[(2)] = null);

(statearr_25649_25684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (22))){
var state_25634__$1 = state_25634;
var statearr_25650_25685 = state_25634__$1;
(statearr_25650_25685[(2)] = null);

(statearr_25650_25685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (6))){
var inst_25575 = (state_25634[(13)]);
var inst_25584 = f.call(null,inst_25575);
var inst_25585 = cljs.core.seq.call(null,inst_25584);
var inst_25586 = inst_25585;
var inst_25587 = null;
var inst_25588 = (0);
var inst_25589 = (0);
var state_25634__$1 = (function (){var statearr_25651 = state_25634;
(statearr_25651[(8)] = inst_25587);

(statearr_25651[(9)] = inst_25586);

(statearr_25651[(11)] = inst_25588);

(statearr_25651[(12)] = inst_25589);

return statearr_25651;
})();
var statearr_25652_25686 = state_25634__$1;
(statearr_25652_25686[(2)] = null);

(statearr_25652_25686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (17))){
var inst_25600 = (state_25634[(7)]);
var inst_25604 = cljs.core.chunk_first.call(null,inst_25600);
var inst_25605 = cljs.core.chunk_rest.call(null,inst_25600);
var inst_25606 = cljs.core.count.call(null,inst_25604);
var inst_25586 = inst_25605;
var inst_25587 = inst_25604;
var inst_25588 = inst_25606;
var inst_25589 = (0);
var state_25634__$1 = (function (){var statearr_25653 = state_25634;
(statearr_25653[(8)] = inst_25587);

(statearr_25653[(9)] = inst_25586);

(statearr_25653[(11)] = inst_25588);

(statearr_25653[(12)] = inst_25589);

return statearr_25653;
})();
var statearr_25654_25687 = state_25634__$1;
(statearr_25654_25687[(2)] = null);

(statearr_25654_25687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (3))){
var inst_25632 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25634__$1,inst_25632);
} else {
if((state_val_25635 === (12))){
var inst_25620 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25655_25688 = state_25634__$1;
(statearr_25655_25688[(2)] = inst_25620);

(statearr_25655_25688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (2))){
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25634__$1,(4),in$);
} else {
if((state_val_25635 === (23))){
var inst_25628 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25656_25689 = state_25634__$1;
(statearr_25656_25689[(2)] = inst_25628);

(statearr_25656_25689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (19))){
var inst_25615 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25657_25690 = state_25634__$1;
(statearr_25657_25690[(2)] = inst_25615);

(statearr_25657_25690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (11))){
var inst_25600 = (state_25634[(7)]);
var inst_25586 = (state_25634[(9)]);
var inst_25600__$1 = cljs.core.seq.call(null,inst_25586);
var state_25634__$1 = (function (){var statearr_25658 = state_25634;
(statearr_25658[(7)] = inst_25600__$1);

return statearr_25658;
})();
if(inst_25600__$1){
var statearr_25659_25691 = state_25634__$1;
(statearr_25659_25691[(1)] = (14));

} else {
var statearr_25660_25692 = state_25634__$1;
(statearr_25660_25692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (9))){
var inst_25622 = (state_25634[(2)]);
var inst_25623 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25634__$1 = (function (){var statearr_25661 = state_25634;
(statearr_25661[(15)] = inst_25622);

return statearr_25661;
})();
if(cljs.core.truth_(inst_25623)){
var statearr_25662_25693 = state_25634__$1;
(statearr_25662_25693[(1)] = (21));

} else {
var statearr_25663_25694 = state_25634__$1;
(statearr_25663_25694[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (5))){
var inst_25578 = cljs.core.async.close_BANG_.call(null,out);
var state_25634__$1 = state_25634;
var statearr_25664_25695 = state_25634__$1;
(statearr_25664_25695[(2)] = inst_25578);

(statearr_25664_25695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (14))){
var inst_25600 = (state_25634[(7)]);
var inst_25602 = cljs.core.chunked_seq_QMARK_.call(null,inst_25600);
var state_25634__$1 = state_25634;
if(inst_25602){
var statearr_25665_25696 = state_25634__$1;
(statearr_25665_25696[(1)] = (17));

} else {
var statearr_25666_25697 = state_25634__$1;
(statearr_25666_25697[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (16))){
var inst_25618 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25667_25698 = state_25634__$1;
(statearr_25667_25698[(2)] = inst_25618);

(statearr_25667_25698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (10))){
var inst_25587 = (state_25634[(8)]);
var inst_25589 = (state_25634[(12)]);
var inst_25594 = cljs.core._nth.call(null,inst_25587,inst_25589);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25634__$1,(13),out,inst_25594);
} else {
if((state_val_25635 === (18))){
var inst_25600 = (state_25634[(7)]);
var inst_25609 = cljs.core.first.call(null,inst_25600);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25634__$1,(20),out,inst_25609);
} else {
if((state_val_25635 === (8))){
var inst_25588 = (state_25634[(11)]);
var inst_25589 = (state_25634[(12)]);
var inst_25591 = (inst_25589 < inst_25588);
var inst_25592 = inst_25591;
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25592)){
var statearr_25668_25699 = state_25634__$1;
(statearr_25668_25699[(1)] = (10));

} else {
var statearr_25669_25700 = state_25634__$1;
(statearr_25669_25700[(1)] = (11));

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
var statearr_25673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25673[(0)] = state_machine__6988__auto__);

(statearr_25673[(1)] = (1));

return statearr_25673;
});
var state_machine__6988__auto____1 = (function (state_25634){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25674){if((e25674 instanceof Object)){
var ex__6991__auto__ = e25674;
var statearr_25675_25701 = state_25634;
(statearr_25675_25701[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25702 = state_25634;
state_25634 = G__25702;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25634){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_25676 = f__7044__auto__.call(null);
(statearr_25676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_25676;
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
var c__7043__auto___25799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25799,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25799,out){
return (function (state_25774){
var state_val_25775 = (state_25774[(1)]);
if((state_val_25775 === (7))){
var inst_25769 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25776_25800 = state_25774__$1;
(statearr_25776_25800[(2)] = inst_25769);

(statearr_25776_25800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (1))){
var inst_25751 = null;
var state_25774__$1 = (function (){var statearr_25777 = state_25774;
(statearr_25777[(7)] = inst_25751);

return statearr_25777;
})();
var statearr_25778_25801 = state_25774__$1;
(statearr_25778_25801[(2)] = null);

(statearr_25778_25801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (4))){
var inst_25754 = (state_25774[(8)]);
var inst_25754__$1 = (state_25774[(2)]);
var inst_25755 = (inst_25754__$1 == null);
var inst_25756 = cljs.core.not.call(null,inst_25755);
var state_25774__$1 = (function (){var statearr_25779 = state_25774;
(statearr_25779[(8)] = inst_25754__$1);

return statearr_25779;
})();
if(inst_25756){
var statearr_25780_25802 = state_25774__$1;
(statearr_25780_25802[(1)] = (5));

} else {
var statearr_25781_25803 = state_25774__$1;
(statearr_25781_25803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (6))){
var state_25774__$1 = state_25774;
var statearr_25782_25804 = state_25774__$1;
(statearr_25782_25804[(2)] = null);

(statearr_25782_25804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (3))){
var inst_25771 = (state_25774[(2)]);
var inst_25772 = cljs.core.async.close_BANG_.call(null,out);
var state_25774__$1 = (function (){var statearr_25783 = state_25774;
(statearr_25783[(9)] = inst_25771);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25774__$1,inst_25772);
} else {
if((state_val_25775 === (2))){
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25774__$1,(4),ch);
} else {
if((state_val_25775 === (11))){
var inst_25754 = (state_25774[(8)]);
var inst_25763 = (state_25774[(2)]);
var inst_25751 = inst_25754;
var state_25774__$1 = (function (){var statearr_25784 = state_25774;
(statearr_25784[(7)] = inst_25751);

(statearr_25784[(10)] = inst_25763);

return statearr_25784;
})();
var statearr_25785_25805 = state_25774__$1;
(statearr_25785_25805[(2)] = null);

(statearr_25785_25805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (9))){
var inst_25754 = (state_25774[(8)]);
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25774__$1,(11),out,inst_25754);
} else {
if((state_val_25775 === (5))){
var inst_25754 = (state_25774[(8)]);
var inst_25751 = (state_25774[(7)]);
var inst_25758 = cljs.core._EQ_.call(null,inst_25754,inst_25751);
var state_25774__$1 = state_25774;
if(inst_25758){
var statearr_25787_25806 = state_25774__$1;
(statearr_25787_25806[(1)] = (8));

} else {
var statearr_25788_25807 = state_25774__$1;
(statearr_25788_25807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (10))){
var inst_25766 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25789_25808 = state_25774__$1;
(statearr_25789_25808[(2)] = inst_25766);

(statearr_25789_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (8))){
var inst_25751 = (state_25774[(7)]);
var tmp25786 = inst_25751;
var inst_25751__$1 = tmp25786;
var state_25774__$1 = (function (){var statearr_25790 = state_25774;
(statearr_25790[(7)] = inst_25751__$1);

return statearr_25790;
})();
var statearr_25791_25809 = state_25774__$1;
(statearr_25791_25809[(2)] = null);

(statearr_25791_25809[(1)] = (2));


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
});})(c__7043__auto___25799,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25799,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25795[(0)] = state_machine__6988__auto__);

(statearr_25795[(1)] = (1));

return statearr_25795;
});
var state_machine__6988__auto____1 = (function (state_25774){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25796){if((e25796 instanceof Object)){
var ex__6991__auto__ = e25796;
var statearr_25797_25810 = state_25774;
(statearr_25797_25810[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25811 = state_25774;
state_25774 = G__25811;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25774){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25799,out))
})();
var state__7045__auto__ = (function (){var statearr_25798 = f__7044__auto__.call(null);
(statearr_25798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25799);

return statearr_25798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25799,out))
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
var c__7043__auto___25946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25946,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25946,out){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (7))){
var inst_25912 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25918_25947 = state_25916__$1;
(statearr_25918_25947[(2)] = inst_25912);

(statearr_25918_25947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (1))){
var inst_25879 = (new Array(n));
var inst_25880 = inst_25879;
var inst_25881 = (0);
var state_25916__$1 = (function (){var statearr_25919 = state_25916;
(statearr_25919[(7)] = inst_25880);

(statearr_25919[(8)] = inst_25881);

return statearr_25919;
})();
var statearr_25920_25948 = state_25916__$1;
(statearr_25920_25948[(2)] = null);

(statearr_25920_25948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (4))){
var inst_25884 = (state_25916[(9)]);
var inst_25884__$1 = (state_25916[(2)]);
var inst_25885 = (inst_25884__$1 == null);
var inst_25886 = cljs.core.not.call(null,inst_25885);
var state_25916__$1 = (function (){var statearr_25921 = state_25916;
(statearr_25921[(9)] = inst_25884__$1);

return statearr_25921;
})();
if(inst_25886){
var statearr_25922_25949 = state_25916__$1;
(statearr_25922_25949[(1)] = (5));

} else {
var statearr_25923_25950 = state_25916__$1;
(statearr_25923_25950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (15))){
var inst_25906 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25924_25951 = state_25916__$1;
(statearr_25924_25951[(2)] = inst_25906);

(statearr_25924_25951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (13))){
var state_25916__$1 = state_25916;
var statearr_25925_25952 = state_25916__$1;
(statearr_25925_25952[(2)] = null);

(statearr_25925_25952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (6))){
var inst_25881 = (state_25916[(8)]);
var inst_25902 = (inst_25881 > (0));
var state_25916__$1 = state_25916;
if(cljs.core.truth_(inst_25902)){
var statearr_25926_25953 = state_25916__$1;
(statearr_25926_25953[(1)] = (12));

} else {
var statearr_25927_25954 = state_25916__$1;
(statearr_25927_25954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (3))){
var inst_25914 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (12))){
var inst_25880 = (state_25916[(7)]);
var inst_25904 = cljs.core.vec.call(null,inst_25880);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(15),out,inst_25904);
} else {
if((state_val_25917 === (2))){
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(4),ch);
} else {
if((state_val_25917 === (11))){
var inst_25896 = (state_25916[(2)]);
var inst_25897 = (new Array(n));
var inst_25880 = inst_25897;
var inst_25881 = (0);
var state_25916__$1 = (function (){var statearr_25928 = state_25916;
(statearr_25928[(7)] = inst_25880);

(statearr_25928[(8)] = inst_25881);

(statearr_25928[(10)] = inst_25896);

return statearr_25928;
})();
var statearr_25929_25955 = state_25916__$1;
(statearr_25929_25955[(2)] = null);

(statearr_25929_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (9))){
var inst_25880 = (state_25916[(7)]);
var inst_25894 = cljs.core.vec.call(null,inst_25880);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(11),out,inst_25894);
} else {
if((state_val_25917 === (5))){
var inst_25880 = (state_25916[(7)]);
var inst_25881 = (state_25916[(8)]);
var inst_25889 = (state_25916[(11)]);
var inst_25884 = (state_25916[(9)]);
var inst_25888 = (inst_25880[inst_25881] = inst_25884);
var inst_25889__$1 = (inst_25881 + (1));
var inst_25890 = (inst_25889__$1 < n);
var state_25916__$1 = (function (){var statearr_25930 = state_25916;
(statearr_25930[(11)] = inst_25889__$1);

(statearr_25930[(12)] = inst_25888);

return statearr_25930;
})();
if(cljs.core.truth_(inst_25890)){
var statearr_25931_25956 = state_25916__$1;
(statearr_25931_25956[(1)] = (8));

} else {
var statearr_25932_25957 = state_25916__$1;
(statearr_25932_25957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (14))){
var inst_25909 = (state_25916[(2)]);
var inst_25910 = cljs.core.async.close_BANG_.call(null,out);
var state_25916__$1 = (function (){var statearr_25934 = state_25916;
(statearr_25934[(13)] = inst_25909);

return statearr_25934;
})();
var statearr_25935_25958 = state_25916__$1;
(statearr_25935_25958[(2)] = inst_25910);

(statearr_25935_25958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (10))){
var inst_25900 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25936_25959 = state_25916__$1;
(statearr_25936_25959[(2)] = inst_25900);

(statearr_25936_25959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (8))){
var inst_25880 = (state_25916[(7)]);
var inst_25889 = (state_25916[(11)]);
var tmp25933 = inst_25880;
var inst_25880__$1 = tmp25933;
var inst_25881 = inst_25889;
var state_25916__$1 = (function (){var statearr_25937 = state_25916;
(statearr_25937[(7)] = inst_25880__$1);

(statearr_25937[(8)] = inst_25881);

return statearr_25937;
})();
var statearr_25938_25960 = state_25916__$1;
(statearr_25938_25960[(2)] = null);

(statearr_25938_25960[(1)] = (2));


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
});})(c__7043__auto___25946,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25946,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25942[(0)] = state_machine__6988__auto__);

(statearr_25942[(1)] = (1));

return statearr_25942;
});
var state_machine__6988__auto____1 = (function (state_25916){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25943){if((e25943 instanceof Object)){
var ex__6991__auto__ = e25943;
var statearr_25944_25961 = state_25916;
(statearr_25944_25961[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25962 = state_25916;
state_25916 = G__25962;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25946,out))
})();
var state__7045__auto__ = (function (){var statearr_25945 = f__7044__auto__.call(null);
(statearr_25945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25946);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25946,out))
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
var c__7043__auto___26105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___26105,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___26105,out){
return (function (state_26075){
var state_val_26076 = (state_26075[(1)]);
if((state_val_26076 === (7))){
var inst_26071 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26077_26106 = state_26075__$1;
(statearr_26077_26106[(2)] = inst_26071);

(statearr_26077_26106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (1))){
var inst_26034 = [];
var inst_26035 = inst_26034;
var inst_26036 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26075__$1 = (function (){var statearr_26078 = state_26075;
(statearr_26078[(7)] = inst_26036);

(statearr_26078[(8)] = inst_26035);

return statearr_26078;
})();
var statearr_26079_26107 = state_26075__$1;
(statearr_26079_26107[(2)] = null);

(statearr_26079_26107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (4))){
var inst_26039 = (state_26075[(9)]);
var inst_26039__$1 = (state_26075[(2)]);
var inst_26040 = (inst_26039__$1 == null);
var inst_26041 = cljs.core.not.call(null,inst_26040);
var state_26075__$1 = (function (){var statearr_26080 = state_26075;
(statearr_26080[(9)] = inst_26039__$1);

return statearr_26080;
})();
if(inst_26041){
var statearr_26081_26108 = state_26075__$1;
(statearr_26081_26108[(1)] = (5));

} else {
var statearr_26082_26109 = state_26075__$1;
(statearr_26082_26109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (15))){
var inst_26065 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26083_26110 = state_26075__$1;
(statearr_26083_26110[(2)] = inst_26065);

(statearr_26083_26110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (13))){
var state_26075__$1 = state_26075;
var statearr_26084_26111 = state_26075__$1;
(statearr_26084_26111[(2)] = null);

(statearr_26084_26111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (6))){
var inst_26035 = (state_26075[(8)]);
var inst_26060 = inst_26035.length;
var inst_26061 = (inst_26060 > (0));
var state_26075__$1 = state_26075;
if(cljs.core.truth_(inst_26061)){
var statearr_26085_26112 = state_26075__$1;
(statearr_26085_26112[(1)] = (12));

} else {
var statearr_26086_26113 = state_26075__$1;
(statearr_26086_26113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (3))){
var inst_26073 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26075__$1,inst_26073);
} else {
if((state_val_26076 === (12))){
var inst_26035 = (state_26075[(8)]);
var inst_26063 = cljs.core.vec.call(null,inst_26035);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26075__$1,(15),out,inst_26063);
} else {
if((state_val_26076 === (2))){
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26075__$1,(4),ch);
} else {
if((state_val_26076 === (11))){
var inst_26043 = (state_26075[(10)]);
var inst_26039 = (state_26075[(9)]);
var inst_26053 = (state_26075[(2)]);
var inst_26054 = [];
var inst_26055 = inst_26054.push(inst_26039);
var inst_26035 = inst_26054;
var inst_26036 = inst_26043;
var state_26075__$1 = (function (){var statearr_26087 = state_26075;
(statearr_26087[(11)] = inst_26053);

(statearr_26087[(7)] = inst_26036);

(statearr_26087[(8)] = inst_26035);

(statearr_26087[(12)] = inst_26055);

return statearr_26087;
})();
var statearr_26088_26114 = state_26075__$1;
(statearr_26088_26114[(2)] = null);

(statearr_26088_26114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (9))){
var inst_26035 = (state_26075[(8)]);
var inst_26051 = cljs.core.vec.call(null,inst_26035);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26075__$1,(11),out,inst_26051);
} else {
if((state_val_26076 === (5))){
var inst_26043 = (state_26075[(10)]);
var inst_26039 = (state_26075[(9)]);
var inst_26036 = (state_26075[(7)]);
var inst_26043__$1 = f.call(null,inst_26039);
var inst_26044 = cljs.core._EQ_.call(null,inst_26043__$1,inst_26036);
var inst_26045 = cljs.core.keyword_identical_QMARK_.call(null,inst_26036,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26046 = (inst_26044) || (inst_26045);
var state_26075__$1 = (function (){var statearr_26089 = state_26075;
(statearr_26089[(10)] = inst_26043__$1);

return statearr_26089;
})();
if(cljs.core.truth_(inst_26046)){
var statearr_26090_26115 = state_26075__$1;
(statearr_26090_26115[(1)] = (8));

} else {
var statearr_26091_26116 = state_26075__$1;
(statearr_26091_26116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (14))){
var inst_26068 = (state_26075[(2)]);
var inst_26069 = cljs.core.async.close_BANG_.call(null,out);
var state_26075__$1 = (function (){var statearr_26093 = state_26075;
(statearr_26093[(13)] = inst_26068);

return statearr_26093;
})();
var statearr_26094_26117 = state_26075__$1;
(statearr_26094_26117[(2)] = inst_26069);

(statearr_26094_26117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (10))){
var inst_26058 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26095_26118 = state_26075__$1;
(statearr_26095_26118[(2)] = inst_26058);

(statearr_26095_26118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (8))){
var inst_26043 = (state_26075[(10)]);
var inst_26039 = (state_26075[(9)]);
var inst_26035 = (state_26075[(8)]);
var inst_26048 = inst_26035.push(inst_26039);
var tmp26092 = inst_26035;
var inst_26035__$1 = tmp26092;
var inst_26036 = inst_26043;
var state_26075__$1 = (function (){var statearr_26096 = state_26075;
(statearr_26096[(14)] = inst_26048);

(statearr_26096[(7)] = inst_26036);

(statearr_26096[(8)] = inst_26035__$1);

return statearr_26096;
})();
var statearr_26097_26119 = state_26075__$1;
(statearr_26097_26119[(2)] = null);

(statearr_26097_26119[(1)] = (2));


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
});})(c__7043__auto___26105,out))
;
return ((function (switch__6987__auto__,c__7043__auto___26105,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_26101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26101[(0)] = state_machine__6988__auto__);

(statearr_26101[(1)] = (1));

return statearr_26101;
});
var state_machine__6988__auto____1 = (function (state_26075){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_26075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e26102){if((e26102 instanceof Object)){
var ex__6991__auto__ = e26102;
var statearr_26103_26120 = state_26075;
(statearr_26103_26120[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26121 = state_26075;
state_26075 = G__26121;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_26075){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_26075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___26105,out))
})();
var state__7045__auto__ = (function (){var statearr_26104 = f__7044__auto__.call(null);
(statearr_26104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___26105);

return statearr_26104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___26105,out))
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