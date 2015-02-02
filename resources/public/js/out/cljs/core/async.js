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
if(typeof cljs.core.async.t1320061 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1320061 = (function (f,fn_handler,meta1320062){
this.f = f;
this.fn_handler = fn_handler;
this.meta1320062 = meta1320062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1320061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1320061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t1320061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t1320061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1320063){
var self__ = this;
var _1320063__$1 = this;
return self__.meta1320062;
});

cljs.core.async.t1320061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1320063,meta1320062__$1){
var self__ = this;
var _1320063__$1 = this;
return (new cljs.core.async.t1320061(self__.f,self__.fn_handler,meta1320062__$1));
});

cljs.core.async.t1320061.cljs$lang$type = true;

cljs.core.async.t1320061.cljs$lang$ctorStr = "cljs.core.async/t1320061";

cljs.core.async.t1320061.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1320061");
});

cljs.core.async.__GT_t1320061 = (function __GT_t1320061(f__$1,fn_handler__$1,meta1320062){
return (new cljs.core.async.t1320061(f__$1,fn_handler__$1,meta1320062));
});

}

return (new cljs.core.async.t1320061(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__1320065 = buff;
if(G__1320065){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__1320065.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__1320065.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1320065);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1320065);
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
var val_1320066 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1320066);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1320066,ret){
return (function (){
return fn1.call(null,val_1320066);
});})(val_1320066,ret))
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
var n__4509__auto___1320067 = n;
var x_1320068 = (0);
while(true){
if((x_1320068 < n__4509__auto___1320067)){
(a[x_1320068] = (0));

var G__1320069 = (x_1320068 + (1));
x_1320068 = G__1320069;
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

var G__1320070 = (i + (1));
i = G__1320070;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t1320074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1320074 = (function (flag,alt_flag,meta1320075){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta1320075 = meta1320075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1320074.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1320074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t1320074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t1320074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1320076){
var self__ = this;
var _1320076__$1 = this;
return self__.meta1320075;
});})(flag))
;

cljs.core.async.t1320074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1320076,meta1320075__$1){
var self__ = this;
var _1320076__$1 = this;
return (new cljs.core.async.t1320074(self__.flag,self__.alt_flag,meta1320075__$1));
});})(flag))
;

cljs.core.async.t1320074.cljs$lang$type = true;

cljs.core.async.t1320074.cljs$lang$ctorStr = "cljs.core.async/t1320074";

cljs.core.async.t1320074.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1320074");
});})(flag))
;

cljs.core.async.__GT_t1320074 = ((function (flag){
return (function __GT_t1320074(flag__$1,alt_flag__$1,meta1320075){
return (new cljs.core.async.t1320074(flag__$1,alt_flag__$1,meta1320075));
});})(flag))
;

}

return (new cljs.core.async.t1320074(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t1320080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1320080 = (function (cb,flag,alt_handler,meta1320081){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta1320081 = meta1320081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1320080.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1320080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t1320080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t1320080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1320082){
var self__ = this;
var _1320082__$1 = this;
return self__.meta1320081;
});

cljs.core.async.t1320080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1320082,meta1320081__$1){
var self__ = this;
var _1320082__$1 = this;
return (new cljs.core.async.t1320080(self__.cb,self__.flag,self__.alt_handler,meta1320081__$1));
});

cljs.core.async.t1320080.cljs$lang$type = true;

cljs.core.async.t1320080.cljs$lang$ctorStr = "cljs.core.async/t1320080";

cljs.core.async.t1320080.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1320080");
});

cljs.core.async.__GT_t1320080 = (function __GT_t1320080(cb__$1,flag__$1,alt_handler__$1,meta1320081){
return (new cljs.core.async.t1320080(cb__$1,flag__$1,alt_handler__$1,meta1320081));
});

}

return (new cljs.core.async.t1320080(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__1320083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1320083_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1320084_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1320084_SHARP_,port], null));
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
var G__1320085 = (i + (1));
i = G__1320085;
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
var alts_BANG___delegate = function (ports,p__1320086){
var map__1320088 = p__1320086;
var map__1320088__$1 = ((cljs.core.seq_QMARK_.call(null,map__1320088))?cljs.core.apply.call(null,cljs.core.hash_map,map__1320088):map__1320088);
var opts = map__1320088__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__1320086 = null;
if (arguments.length > 1) {
  p__1320086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__1320086);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__1320089){
var ports = cljs.core.first(arglist__1320089);
var p__1320086 = cljs.core.rest(arglist__1320089);
return alts_BANG___delegate(ports,p__1320086);
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
var c__9199__auto___1320184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1320184){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1320184){
return (function (state_1320160){
var state_val_1320161 = (state_1320160[(1)]);
if((state_val_1320161 === (7))){
var inst_1320156 = (state_1320160[(2)]);
var state_1320160__$1 = state_1320160;
var statearr_1320162_1320185 = state_1320160__$1;
(statearr_1320162_1320185[(2)] = inst_1320156);

(statearr_1320162_1320185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (1))){
var state_1320160__$1 = state_1320160;
var statearr_1320163_1320186 = state_1320160__$1;
(statearr_1320163_1320186[(2)] = null);

(statearr_1320163_1320186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (4))){
var inst_1320139 = (state_1320160[(7)]);
var inst_1320139__$1 = (state_1320160[(2)]);
var inst_1320140 = (inst_1320139__$1 == null);
var state_1320160__$1 = (function (){var statearr_1320164 = state_1320160;
(statearr_1320164[(7)] = inst_1320139__$1);

return statearr_1320164;
})();
if(cljs.core.truth_(inst_1320140)){
var statearr_1320165_1320187 = state_1320160__$1;
(statearr_1320165_1320187[(1)] = (5));

} else {
var statearr_1320166_1320188 = state_1320160__$1;
(statearr_1320166_1320188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (13))){
var state_1320160__$1 = state_1320160;
var statearr_1320167_1320189 = state_1320160__$1;
(statearr_1320167_1320189[(2)] = null);

(statearr_1320167_1320189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (6))){
var inst_1320139 = (state_1320160[(7)]);
var state_1320160__$1 = state_1320160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320160__$1,(11),to,inst_1320139);
} else {
if((state_val_1320161 === (3))){
var inst_1320158 = (state_1320160[(2)]);
var state_1320160__$1 = state_1320160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320160__$1,inst_1320158);
} else {
if((state_val_1320161 === (12))){
var state_1320160__$1 = state_1320160;
var statearr_1320168_1320190 = state_1320160__$1;
(statearr_1320168_1320190[(2)] = null);

(statearr_1320168_1320190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (2))){
var state_1320160__$1 = state_1320160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320160__$1,(4),from);
} else {
if((state_val_1320161 === (11))){
var inst_1320149 = (state_1320160[(2)]);
var state_1320160__$1 = state_1320160;
if(cljs.core.truth_(inst_1320149)){
var statearr_1320169_1320191 = state_1320160__$1;
(statearr_1320169_1320191[(1)] = (12));

} else {
var statearr_1320170_1320192 = state_1320160__$1;
(statearr_1320170_1320192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (9))){
var state_1320160__$1 = state_1320160;
var statearr_1320171_1320193 = state_1320160__$1;
(statearr_1320171_1320193[(2)] = null);

(statearr_1320171_1320193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (5))){
var state_1320160__$1 = state_1320160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1320172_1320194 = state_1320160__$1;
(statearr_1320172_1320194[(1)] = (8));

} else {
var statearr_1320173_1320195 = state_1320160__$1;
(statearr_1320173_1320195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (14))){
var inst_1320154 = (state_1320160[(2)]);
var state_1320160__$1 = state_1320160;
var statearr_1320174_1320196 = state_1320160__$1;
(statearr_1320174_1320196[(2)] = inst_1320154);

(statearr_1320174_1320196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (10))){
var inst_1320146 = (state_1320160[(2)]);
var state_1320160__$1 = state_1320160;
var statearr_1320175_1320197 = state_1320160__$1;
(statearr_1320175_1320197[(2)] = inst_1320146);

(statearr_1320175_1320197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320161 === (8))){
var inst_1320143 = cljs.core.async.close_BANG_.call(null,to);
var state_1320160__$1 = state_1320160;
var statearr_1320176_1320198 = state_1320160__$1;
(statearr_1320176_1320198[(2)] = inst_1320143);

(statearr_1320176_1320198[(1)] = (10));


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
});})(c__9199__auto___1320184))
;
return ((function (switch__9184__auto__,c__9199__auto___1320184){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320180 = [null,null,null,null,null,null,null,null];
(statearr_1320180[(0)] = state_machine__9185__auto__);

(statearr_1320180[(1)] = (1));

return statearr_1320180;
});
var state_machine__9185__auto____1 = (function (state_1320160){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320181){if((e1320181 instanceof Object)){
var ex__9188__auto__ = e1320181;
var statearr_1320182_1320199 = state_1320160;
(statearr_1320182_1320199[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320200 = state_1320160;
state_1320160 = G__1320200;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320160){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1320184))
})();
var state__9201__auto__ = (function (){var statearr_1320183 = f__9200__auto__.call(null);
(statearr_1320183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320184);

return statearr_1320183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1320184))
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
return (function (p__1320384){
var vec__1320385 = p__1320384;
var v = cljs.core.nth.call(null,vec__1320385,(0),null);
var p = cljs.core.nth.call(null,vec__1320385,(1),null);
var job = vec__1320385;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___1320567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results){
return (function (state_1320390){
var state_val_1320391 = (state_1320390[(1)]);
if((state_val_1320391 === (2))){
var inst_1320387 = (state_1320390[(2)]);
var inst_1320388 = cljs.core.async.close_BANG_.call(null,res);
var state_1320390__$1 = (function (){var statearr_1320392 = state_1320390;
(statearr_1320392[(7)] = inst_1320387);

return statearr_1320392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320390__$1,inst_1320388);
} else {
if((state_val_1320391 === (1))){
var state_1320390__$1 = state_1320390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320390__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320396 = [null,null,null,null,null,null,null,null];
(statearr_1320396[(0)] = state_machine__9185__auto__);

(statearr_1320396[(1)] = (1));

return statearr_1320396;
});
var state_machine__9185__auto____1 = (function (state_1320390){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320397){if((e1320397 instanceof Object)){
var ex__9188__auto__ = e1320397;
var statearr_1320398_1320568 = state_1320390;
(statearr_1320398_1320568[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320569 = state_1320390;
state_1320390 = G__1320569;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320390){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_1320399 = f__9200__auto__.call(null);
(statearr_1320399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320567);

return statearr_1320399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1320567,res,vec__1320385,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1320400){
var vec__1320401 = p__1320400;
var v = cljs.core.nth.call(null,vec__1320401,(0),null);
var p = cljs.core.nth.call(null,vec__1320401,(1),null);
var job = vec__1320401;
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
var n__4509__auto___1320570 = n;
var __1320571 = (0);
while(true){
if((__1320571 < n__4509__auto___1320570)){
var G__1320402_1320572 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1320402_1320572) {
case "async":
var c__9199__auto___1320574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1320571,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1320571,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function (state_1320415){
var state_val_1320416 = (state_1320415[(1)]);
if((state_val_1320416 === (7))){
var inst_1320411 = (state_1320415[(2)]);
var state_1320415__$1 = state_1320415;
var statearr_1320417_1320575 = state_1320415__$1;
(statearr_1320417_1320575[(2)] = inst_1320411);

(statearr_1320417_1320575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320416 === (6))){
var state_1320415__$1 = state_1320415;
var statearr_1320418_1320576 = state_1320415__$1;
(statearr_1320418_1320576[(2)] = null);

(statearr_1320418_1320576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320416 === (5))){
var state_1320415__$1 = state_1320415;
var statearr_1320419_1320577 = state_1320415__$1;
(statearr_1320419_1320577[(2)] = null);

(statearr_1320419_1320577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320416 === (4))){
var inst_1320405 = (state_1320415[(2)]);
var inst_1320406 = async.call(null,inst_1320405);
var state_1320415__$1 = state_1320415;
if(cljs.core.truth_(inst_1320406)){
var statearr_1320420_1320578 = state_1320415__$1;
(statearr_1320420_1320578[(1)] = (5));

} else {
var statearr_1320421_1320579 = state_1320415__$1;
(statearr_1320421_1320579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320416 === (3))){
var inst_1320413 = (state_1320415[(2)]);
var state_1320415__$1 = state_1320415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320415__$1,inst_1320413);
} else {
if((state_val_1320416 === (2))){
var state_1320415__$1 = state_1320415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320415__$1,(4),jobs);
} else {
if((state_val_1320416 === (1))){
var state_1320415__$1 = state_1320415;
var statearr_1320422_1320580 = state_1320415__$1;
(statearr_1320422_1320580[(2)] = null);

(statearr_1320422_1320580[(1)] = (2));


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
});})(__1320571,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
;
return ((function (__1320571,switch__9184__auto__,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320426 = [null,null,null,null,null,null,null];
(statearr_1320426[(0)] = state_machine__9185__auto__);

(statearr_1320426[(1)] = (1));

return statearr_1320426;
});
var state_machine__9185__auto____1 = (function (state_1320415){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320427){if((e1320427 instanceof Object)){
var ex__9188__auto__ = e1320427;
var statearr_1320428_1320581 = state_1320415;
(statearr_1320428_1320581[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320582 = state_1320415;
state_1320415 = G__1320582;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320415){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1320571,switch__9184__auto__,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1320429 = f__9200__auto__.call(null);
(statearr_1320429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320574);

return statearr_1320429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1320571,c__9199__auto___1320574,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___1320583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1320571,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1320571,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function (state_1320442){
var state_val_1320443 = (state_1320442[(1)]);
if((state_val_1320443 === (7))){
var inst_1320438 = (state_1320442[(2)]);
var state_1320442__$1 = state_1320442;
var statearr_1320444_1320584 = state_1320442__$1;
(statearr_1320444_1320584[(2)] = inst_1320438);

(statearr_1320444_1320584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320443 === (6))){
var state_1320442__$1 = state_1320442;
var statearr_1320445_1320585 = state_1320442__$1;
(statearr_1320445_1320585[(2)] = null);

(statearr_1320445_1320585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320443 === (5))){
var state_1320442__$1 = state_1320442;
var statearr_1320446_1320586 = state_1320442__$1;
(statearr_1320446_1320586[(2)] = null);

(statearr_1320446_1320586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320443 === (4))){
var inst_1320432 = (state_1320442[(2)]);
var inst_1320433 = process.call(null,inst_1320432);
var state_1320442__$1 = state_1320442;
if(cljs.core.truth_(inst_1320433)){
var statearr_1320447_1320587 = state_1320442__$1;
(statearr_1320447_1320587[(1)] = (5));

} else {
var statearr_1320448_1320588 = state_1320442__$1;
(statearr_1320448_1320588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320443 === (3))){
var inst_1320440 = (state_1320442[(2)]);
var state_1320442__$1 = state_1320442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320442__$1,inst_1320440);
} else {
if((state_val_1320443 === (2))){
var state_1320442__$1 = state_1320442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320442__$1,(4),jobs);
} else {
if((state_val_1320443 === (1))){
var state_1320442__$1 = state_1320442;
var statearr_1320449_1320589 = state_1320442__$1;
(statearr_1320449_1320589[(2)] = null);

(statearr_1320449_1320589[(1)] = (2));


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
});})(__1320571,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
;
return ((function (__1320571,switch__9184__auto__,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320453 = [null,null,null,null,null,null,null];
(statearr_1320453[(0)] = state_machine__9185__auto__);

(statearr_1320453[(1)] = (1));

return statearr_1320453;
});
var state_machine__9185__auto____1 = (function (state_1320442){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320454){if((e1320454 instanceof Object)){
var ex__9188__auto__ = e1320454;
var statearr_1320455_1320590 = state_1320442;
(statearr_1320455_1320590[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320591 = state_1320442;
state_1320442 = G__1320591;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320442){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1320571,switch__9184__auto__,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1320456 = f__9200__auto__.call(null);
(statearr_1320456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320583);

return statearr_1320456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1320571,c__9199__auto___1320583,G__1320402_1320572,n__4509__auto___1320570,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1320592 = (__1320571 + (1));
__1320571 = G__1320592;
continue;
} else {
}
break;
}

var c__9199__auto___1320593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1320593,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1320593,jobs,results,process,async){
return (function (state_1320478){
var state_val_1320479 = (state_1320478[(1)]);
if((state_val_1320479 === (9))){
var inst_1320471 = (state_1320478[(2)]);
var state_1320478__$1 = (function (){var statearr_1320480 = state_1320478;
(statearr_1320480[(7)] = inst_1320471);

return statearr_1320480;
})();
var statearr_1320481_1320594 = state_1320478__$1;
(statearr_1320481_1320594[(2)] = null);

(statearr_1320481_1320594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320479 === (8))){
var inst_1320464 = (state_1320478[(8)]);
var inst_1320469 = (state_1320478[(2)]);
var state_1320478__$1 = (function (){var statearr_1320482 = state_1320478;
(statearr_1320482[(9)] = inst_1320469);

return statearr_1320482;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320478__$1,(9),results,inst_1320464);
} else {
if((state_val_1320479 === (7))){
var inst_1320474 = (state_1320478[(2)]);
var state_1320478__$1 = state_1320478;
var statearr_1320483_1320595 = state_1320478__$1;
(statearr_1320483_1320595[(2)] = inst_1320474);

(statearr_1320483_1320595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320479 === (6))){
var inst_1320459 = (state_1320478[(10)]);
var inst_1320464 = (state_1320478[(8)]);
var inst_1320464__$1 = cljs.core.async.chan.call(null,(1));
var inst_1320465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1320466 = [inst_1320459,inst_1320464__$1];
var inst_1320467 = (new cljs.core.PersistentVector(null,2,(5),inst_1320465,inst_1320466,null));
var state_1320478__$1 = (function (){var statearr_1320484 = state_1320478;
(statearr_1320484[(8)] = inst_1320464__$1);

return statearr_1320484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320478__$1,(8),jobs,inst_1320467);
} else {
if((state_val_1320479 === (5))){
var inst_1320462 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1320478__$1 = state_1320478;
var statearr_1320485_1320596 = state_1320478__$1;
(statearr_1320485_1320596[(2)] = inst_1320462);

(statearr_1320485_1320596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320479 === (4))){
var inst_1320459 = (state_1320478[(10)]);
var inst_1320459__$1 = (state_1320478[(2)]);
var inst_1320460 = (inst_1320459__$1 == null);
var state_1320478__$1 = (function (){var statearr_1320486 = state_1320478;
(statearr_1320486[(10)] = inst_1320459__$1);

return statearr_1320486;
})();
if(cljs.core.truth_(inst_1320460)){
var statearr_1320487_1320597 = state_1320478__$1;
(statearr_1320487_1320597[(1)] = (5));

} else {
var statearr_1320488_1320598 = state_1320478__$1;
(statearr_1320488_1320598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320479 === (3))){
var inst_1320476 = (state_1320478[(2)]);
var state_1320478__$1 = state_1320478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320478__$1,inst_1320476);
} else {
if((state_val_1320479 === (2))){
var state_1320478__$1 = state_1320478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320478__$1,(4),from);
} else {
if((state_val_1320479 === (1))){
var state_1320478__$1 = state_1320478;
var statearr_1320489_1320599 = state_1320478__$1;
(statearr_1320489_1320599[(2)] = null);

(statearr_1320489_1320599[(1)] = (2));


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
});})(c__9199__auto___1320593,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___1320593,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1320493[(0)] = state_machine__9185__auto__);

(statearr_1320493[(1)] = (1));

return statearr_1320493;
});
var state_machine__9185__auto____1 = (function (state_1320478){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320494){if((e1320494 instanceof Object)){
var ex__9188__auto__ = e1320494;
var statearr_1320495_1320600 = state_1320478;
(statearr_1320495_1320600[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320601 = state_1320478;
state_1320478 = G__1320601;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320478){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1320593,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1320496 = f__9200__auto__.call(null);
(statearr_1320496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320593);

return statearr_1320496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1320593,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_1320534){
var state_val_1320535 = (state_1320534[(1)]);
if((state_val_1320535 === (7))){
var inst_1320530 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
var statearr_1320536_1320602 = state_1320534__$1;
(statearr_1320536_1320602[(2)] = inst_1320530);

(statearr_1320536_1320602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (20))){
var state_1320534__$1 = state_1320534;
var statearr_1320537_1320603 = state_1320534__$1;
(statearr_1320537_1320603[(2)] = null);

(statearr_1320537_1320603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (1))){
var state_1320534__$1 = state_1320534;
var statearr_1320538_1320604 = state_1320534__$1;
(statearr_1320538_1320604[(2)] = null);

(statearr_1320538_1320604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (4))){
var inst_1320499 = (state_1320534[(7)]);
var inst_1320499__$1 = (state_1320534[(2)]);
var inst_1320500 = (inst_1320499__$1 == null);
var state_1320534__$1 = (function (){var statearr_1320539 = state_1320534;
(statearr_1320539[(7)] = inst_1320499__$1);

return statearr_1320539;
})();
if(cljs.core.truth_(inst_1320500)){
var statearr_1320540_1320605 = state_1320534__$1;
(statearr_1320540_1320605[(1)] = (5));

} else {
var statearr_1320541_1320606 = state_1320534__$1;
(statearr_1320541_1320606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (15))){
var inst_1320512 = (state_1320534[(8)]);
var state_1320534__$1 = state_1320534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320534__$1,(18),to,inst_1320512);
} else {
if((state_val_1320535 === (21))){
var inst_1320525 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
var statearr_1320542_1320607 = state_1320534__$1;
(statearr_1320542_1320607[(2)] = inst_1320525);

(statearr_1320542_1320607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (13))){
var inst_1320527 = (state_1320534[(2)]);
var state_1320534__$1 = (function (){var statearr_1320543 = state_1320534;
(statearr_1320543[(9)] = inst_1320527);

return statearr_1320543;
})();
var statearr_1320544_1320608 = state_1320534__$1;
(statearr_1320544_1320608[(2)] = null);

(statearr_1320544_1320608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (6))){
var inst_1320499 = (state_1320534[(7)]);
var state_1320534__$1 = state_1320534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320534__$1,(11),inst_1320499);
} else {
if((state_val_1320535 === (17))){
var inst_1320520 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
if(cljs.core.truth_(inst_1320520)){
var statearr_1320545_1320609 = state_1320534__$1;
(statearr_1320545_1320609[(1)] = (19));

} else {
var statearr_1320546_1320610 = state_1320534__$1;
(statearr_1320546_1320610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (3))){
var inst_1320532 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320534__$1,inst_1320532);
} else {
if((state_val_1320535 === (12))){
var inst_1320509 = (state_1320534[(10)]);
var state_1320534__$1 = state_1320534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320534__$1,(14),inst_1320509);
} else {
if((state_val_1320535 === (2))){
var state_1320534__$1 = state_1320534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320534__$1,(4),results);
} else {
if((state_val_1320535 === (19))){
var state_1320534__$1 = state_1320534;
var statearr_1320547_1320611 = state_1320534__$1;
(statearr_1320547_1320611[(2)] = null);

(statearr_1320547_1320611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (11))){
var inst_1320509 = (state_1320534[(2)]);
var state_1320534__$1 = (function (){var statearr_1320548 = state_1320534;
(statearr_1320548[(10)] = inst_1320509);

return statearr_1320548;
})();
var statearr_1320549_1320612 = state_1320534__$1;
(statearr_1320549_1320612[(2)] = null);

(statearr_1320549_1320612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (9))){
var state_1320534__$1 = state_1320534;
var statearr_1320550_1320613 = state_1320534__$1;
(statearr_1320550_1320613[(2)] = null);

(statearr_1320550_1320613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (5))){
var state_1320534__$1 = state_1320534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1320551_1320614 = state_1320534__$1;
(statearr_1320551_1320614[(1)] = (8));

} else {
var statearr_1320552_1320615 = state_1320534__$1;
(statearr_1320552_1320615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (14))){
var inst_1320514 = (state_1320534[(11)]);
var inst_1320512 = (state_1320534[(8)]);
var inst_1320512__$1 = (state_1320534[(2)]);
var inst_1320513 = (inst_1320512__$1 == null);
var inst_1320514__$1 = cljs.core.not.call(null,inst_1320513);
var state_1320534__$1 = (function (){var statearr_1320553 = state_1320534;
(statearr_1320553[(11)] = inst_1320514__$1);

(statearr_1320553[(8)] = inst_1320512__$1);

return statearr_1320553;
})();
if(inst_1320514__$1){
var statearr_1320554_1320616 = state_1320534__$1;
(statearr_1320554_1320616[(1)] = (15));

} else {
var statearr_1320555_1320617 = state_1320534__$1;
(statearr_1320555_1320617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (16))){
var inst_1320514 = (state_1320534[(11)]);
var state_1320534__$1 = state_1320534;
var statearr_1320556_1320618 = state_1320534__$1;
(statearr_1320556_1320618[(2)] = inst_1320514);

(statearr_1320556_1320618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (10))){
var inst_1320506 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
var statearr_1320557_1320619 = state_1320534__$1;
(statearr_1320557_1320619[(2)] = inst_1320506);

(statearr_1320557_1320619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (18))){
var inst_1320517 = (state_1320534[(2)]);
var state_1320534__$1 = state_1320534;
var statearr_1320558_1320620 = state_1320534__$1;
(statearr_1320558_1320620[(2)] = inst_1320517);

(statearr_1320558_1320620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320535 === (8))){
var inst_1320503 = cljs.core.async.close_BANG_.call(null,to);
var state_1320534__$1 = state_1320534;
var statearr_1320559_1320621 = state_1320534__$1;
(statearr_1320559_1320621[(2)] = inst_1320503);

(statearr_1320559_1320621[(1)] = (10));


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
var statearr_1320563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1320563[(0)] = state_machine__9185__auto__);

(statearr_1320563[(1)] = (1));

return statearr_1320563;
});
var state_machine__9185__auto____1 = (function (state_1320534){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320564){if((e1320564 instanceof Object)){
var ex__9188__auto__ = e1320564;
var statearr_1320565_1320622 = state_1320534;
(statearr_1320565_1320622[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320623 = state_1320534;
state_1320534 = G__1320623;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320534){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1320566 = f__9200__auto__.call(null);
(statearr_1320566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1320566;
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
var c__9199__auto___1320724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1320724,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1320724,tc,fc){
return (function (state_1320699){
var state_val_1320700 = (state_1320699[(1)]);
if((state_val_1320700 === (7))){
var inst_1320695 = (state_1320699[(2)]);
var state_1320699__$1 = state_1320699;
var statearr_1320701_1320725 = state_1320699__$1;
(statearr_1320701_1320725[(2)] = inst_1320695);

(statearr_1320701_1320725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (1))){
var state_1320699__$1 = state_1320699;
var statearr_1320702_1320726 = state_1320699__$1;
(statearr_1320702_1320726[(2)] = null);

(statearr_1320702_1320726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (4))){
var inst_1320676 = (state_1320699[(7)]);
var inst_1320676__$1 = (state_1320699[(2)]);
var inst_1320677 = (inst_1320676__$1 == null);
var state_1320699__$1 = (function (){var statearr_1320703 = state_1320699;
(statearr_1320703[(7)] = inst_1320676__$1);

return statearr_1320703;
})();
if(cljs.core.truth_(inst_1320677)){
var statearr_1320704_1320727 = state_1320699__$1;
(statearr_1320704_1320727[(1)] = (5));

} else {
var statearr_1320705_1320728 = state_1320699__$1;
(statearr_1320705_1320728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (13))){
var state_1320699__$1 = state_1320699;
var statearr_1320706_1320729 = state_1320699__$1;
(statearr_1320706_1320729[(2)] = null);

(statearr_1320706_1320729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (6))){
var inst_1320676 = (state_1320699[(7)]);
var inst_1320682 = p.call(null,inst_1320676);
var state_1320699__$1 = state_1320699;
if(cljs.core.truth_(inst_1320682)){
var statearr_1320707_1320730 = state_1320699__$1;
(statearr_1320707_1320730[(1)] = (9));

} else {
var statearr_1320708_1320731 = state_1320699__$1;
(statearr_1320708_1320731[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (3))){
var inst_1320697 = (state_1320699[(2)]);
var state_1320699__$1 = state_1320699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320699__$1,inst_1320697);
} else {
if((state_val_1320700 === (12))){
var state_1320699__$1 = state_1320699;
var statearr_1320709_1320732 = state_1320699__$1;
(statearr_1320709_1320732[(2)] = null);

(statearr_1320709_1320732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (2))){
var state_1320699__$1 = state_1320699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320699__$1,(4),ch);
} else {
if((state_val_1320700 === (11))){
var inst_1320676 = (state_1320699[(7)]);
var inst_1320686 = (state_1320699[(2)]);
var state_1320699__$1 = state_1320699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320699__$1,(8),inst_1320686,inst_1320676);
} else {
if((state_val_1320700 === (9))){
var state_1320699__$1 = state_1320699;
var statearr_1320710_1320733 = state_1320699__$1;
(statearr_1320710_1320733[(2)] = tc);

(statearr_1320710_1320733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (5))){
var inst_1320679 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1320680 = cljs.core.async.close_BANG_.call(null,fc);
var state_1320699__$1 = (function (){var statearr_1320711 = state_1320699;
(statearr_1320711[(8)] = inst_1320679);

return statearr_1320711;
})();
var statearr_1320712_1320734 = state_1320699__$1;
(statearr_1320712_1320734[(2)] = inst_1320680);

(statearr_1320712_1320734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (14))){
var inst_1320693 = (state_1320699[(2)]);
var state_1320699__$1 = state_1320699;
var statearr_1320713_1320735 = state_1320699__$1;
(statearr_1320713_1320735[(2)] = inst_1320693);

(statearr_1320713_1320735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (10))){
var state_1320699__$1 = state_1320699;
var statearr_1320714_1320736 = state_1320699__$1;
(statearr_1320714_1320736[(2)] = fc);

(statearr_1320714_1320736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320700 === (8))){
var inst_1320688 = (state_1320699[(2)]);
var state_1320699__$1 = state_1320699;
if(cljs.core.truth_(inst_1320688)){
var statearr_1320715_1320737 = state_1320699__$1;
(statearr_1320715_1320737[(1)] = (12));

} else {
var statearr_1320716_1320738 = state_1320699__$1;
(statearr_1320716_1320738[(1)] = (13));

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
});})(c__9199__auto___1320724,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___1320724,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1320720 = [null,null,null,null,null,null,null,null,null];
(statearr_1320720[(0)] = state_machine__9185__auto__);

(statearr_1320720[(1)] = (1));

return statearr_1320720;
});
var state_machine__9185__auto____1 = (function (state_1320699){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320721){if((e1320721 instanceof Object)){
var ex__9188__auto__ = e1320721;
var statearr_1320722_1320739 = state_1320699;
(statearr_1320722_1320739[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320740 = state_1320699;
state_1320699 = G__1320740;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320699){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1320724,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_1320723 = f__9200__auto__.call(null);
(statearr_1320723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1320724);

return statearr_1320723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1320724,tc,fc))
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
return (function (state_1320787){
var state_val_1320788 = (state_1320787[(1)]);
if((state_val_1320788 === (7))){
var inst_1320783 = (state_1320787[(2)]);
var state_1320787__$1 = state_1320787;
var statearr_1320789_1320805 = state_1320787__$1;
(statearr_1320789_1320805[(2)] = inst_1320783);

(statearr_1320789_1320805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320788 === (6))){
var inst_1320776 = (state_1320787[(7)]);
var inst_1320773 = (state_1320787[(8)]);
var inst_1320780 = f.call(null,inst_1320773,inst_1320776);
var inst_1320773__$1 = inst_1320780;
var state_1320787__$1 = (function (){var statearr_1320790 = state_1320787;
(statearr_1320790[(8)] = inst_1320773__$1);

return statearr_1320790;
})();
var statearr_1320791_1320806 = state_1320787__$1;
(statearr_1320791_1320806[(2)] = null);

(statearr_1320791_1320806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320788 === (5))){
var inst_1320773 = (state_1320787[(8)]);
var state_1320787__$1 = state_1320787;
var statearr_1320792_1320807 = state_1320787__$1;
(statearr_1320792_1320807[(2)] = inst_1320773);

(statearr_1320792_1320807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320788 === (4))){
var inst_1320776 = (state_1320787[(7)]);
var inst_1320776__$1 = (state_1320787[(2)]);
var inst_1320777 = (inst_1320776__$1 == null);
var state_1320787__$1 = (function (){var statearr_1320793 = state_1320787;
(statearr_1320793[(7)] = inst_1320776__$1);

return statearr_1320793;
})();
if(cljs.core.truth_(inst_1320777)){
var statearr_1320794_1320808 = state_1320787__$1;
(statearr_1320794_1320808[(1)] = (5));

} else {
var statearr_1320795_1320809 = state_1320787__$1;
(statearr_1320795_1320809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320788 === (3))){
var inst_1320785 = (state_1320787[(2)]);
var state_1320787__$1 = state_1320787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320787__$1,inst_1320785);
} else {
if((state_val_1320788 === (2))){
var state_1320787__$1 = state_1320787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1320787__$1,(4),ch);
} else {
if((state_val_1320788 === (1))){
var inst_1320773 = init;
var state_1320787__$1 = (function (){var statearr_1320796 = state_1320787;
(statearr_1320796[(8)] = inst_1320773);

return statearr_1320796;
})();
var statearr_1320797_1320810 = state_1320787__$1;
(statearr_1320797_1320810[(2)] = null);

(statearr_1320797_1320810[(1)] = (2));


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
var statearr_1320801 = [null,null,null,null,null,null,null,null,null];
(statearr_1320801[(0)] = state_machine__9185__auto__);

(statearr_1320801[(1)] = (1));

return statearr_1320801;
});
var state_machine__9185__auto____1 = (function (state_1320787){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320802){if((e1320802 instanceof Object)){
var ex__9188__auto__ = e1320802;
var statearr_1320803_1320811 = state_1320787;
(statearr_1320803_1320811[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320812 = state_1320787;
state_1320787 = G__1320812;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320787){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1320804 = f__9200__auto__.call(null);
(statearr_1320804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1320804;
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
return (function (state_1320886){
var state_val_1320887 = (state_1320886[(1)]);
if((state_val_1320887 === (7))){
var inst_1320868 = (state_1320886[(2)]);
var state_1320886__$1 = state_1320886;
var statearr_1320888_1320911 = state_1320886__$1;
(statearr_1320888_1320911[(2)] = inst_1320868);

(statearr_1320888_1320911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (1))){
var inst_1320862 = cljs.core.seq.call(null,coll);
var inst_1320863 = inst_1320862;
var state_1320886__$1 = (function (){var statearr_1320889 = state_1320886;
(statearr_1320889[(7)] = inst_1320863);

return statearr_1320889;
})();
var statearr_1320890_1320912 = state_1320886__$1;
(statearr_1320890_1320912[(2)] = null);

(statearr_1320890_1320912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (4))){
var inst_1320863 = (state_1320886[(7)]);
var inst_1320866 = cljs.core.first.call(null,inst_1320863);
var state_1320886__$1 = state_1320886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1320886__$1,(7),ch,inst_1320866);
} else {
if((state_val_1320887 === (13))){
var inst_1320880 = (state_1320886[(2)]);
var state_1320886__$1 = state_1320886;
var statearr_1320891_1320913 = state_1320886__$1;
(statearr_1320891_1320913[(2)] = inst_1320880);

(statearr_1320891_1320913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (6))){
var inst_1320871 = (state_1320886[(2)]);
var state_1320886__$1 = state_1320886;
if(cljs.core.truth_(inst_1320871)){
var statearr_1320892_1320914 = state_1320886__$1;
(statearr_1320892_1320914[(1)] = (8));

} else {
var statearr_1320893_1320915 = state_1320886__$1;
(statearr_1320893_1320915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (3))){
var inst_1320884 = (state_1320886[(2)]);
var state_1320886__$1 = state_1320886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1320886__$1,inst_1320884);
} else {
if((state_val_1320887 === (12))){
var state_1320886__$1 = state_1320886;
var statearr_1320894_1320916 = state_1320886__$1;
(statearr_1320894_1320916[(2)] = null);

(statearr_1320894_1320916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (2))){
var inst_1320863 = (state_1320886[(7)]);
var state_1320886__$1 = state_1320886;
if(cljs.core.truth_(inst_1320863)){
var statearr_1320895_1320917 = state_1320886__$1;
(statearr_1320895_1320917[(1)] = (4));

} else {
var statearr_1320896_1320918 = state_1320886__$1;
(statearr_1320896_1320918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (11))){
var inst_1320877 = cljs.core.async.close_BANG_.call(null,ch);
var state_1320886__$1 = state_1320886;
var statearr_1320897_1320919 = state_1320886__$1;
(statearr_1320897_1320919[(2)] = inst_1320877);

(statearr_1320897_1320919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (9))){
var state_1320886__$1 = state_1320886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1320898_1320920 = state_1320886__$1;
(statearr_1320898_1320920[(1)] = (11));

} else {
var statearr_1320899_1320921 = state_1320886__$1;
(statearr_1320899_1320921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (5))){
var inst_1320863 = (state_1320886[(7)]);
var state_1320886__$1 = state_1320886;
var statearr_1320900_1320922 = state_1320886__$1;
(statearr_1320900_1320922[(2)] = inst_1320863);

(statearr_1320900_1320922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (10))){
var inst_1320882 = (state_1320886[(2)]);
var state_1320886__$1 = state_1320886;
var statearr_1320901_1320923 = state_1320886__$1;
(statearr_1320901_1320923[(2)] = inst_1320882);

(statearr_1320901_1320923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1320887 === (8))){
var inst_1320863 = (state_1320886[(7)]);
var inst_1320873 = cljs.core.next.call(null,inst_1320863);
var inst_1320863__$1 = inst_1320873;
var state_1320886__$1 = (function (){var statearr_1320902 = state_1320886;
(statearr_1320902[(7)] = inst_1320863__$1);

return statearr_1320902;
})();
var statearr_1320903_1320924 = state_1320886__$1;
(statearr_1320903_1320924[(2)] = null);

(statearr_1320903_1320924[(1)] = (2));


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
var statearr_1320907 = [null,null,null,null,null,null,null,null];
(statearr_1320907[(0)] = state_machine__9185__auto__);

(statearr_1320907[(1)] = (1));

return statearr_1320907;
});
var state_machine__9185__auto____1 = (function (state_1320886){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1320886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1320908){if((e1320908 instanceof Object)){
var ex__9188__auto__ = e1320908;
var statearr_1320909_1320925 = state_1320886;
(statearr_1320909_1320925[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1320886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1320908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1320926 = state_1320886;
state_1320886 = G__1320926;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1320886){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1320886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1320910 = f__9200__auto__.call(null);
(statearr_1320910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1320910;
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

cljs.core.async.Mux = (function (){var obj1320928 = {};
return obj1320928;
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


cljs.core.async.Mult = (function (){var obj1320930 = {};
return obj1320930;
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
if(typeof cljs.core.async.t1321152 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1321152 = (function (cs,ch,mult,meta1321153){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta1321153 = meta1321153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1321152.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t1321152.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t1321152.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t1321152.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t1321152.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1321152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t1321152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1321154){
var self__ = this;
var _1321154__$1 = this;
return self__.meta1321153;
});})(cs))
;

cljs.core.async.t1321152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1321154,meta1321153__$1){
var self__ = this;
var _1321154__$1 = this;
return (new cljs.core.async.t1321152(self__.cs,self__.ch,self__.mult,meta1321153__$1));
});})(cs))
;

cljs.core.async.t1321152.cljs$lang$type = true;

cljs.core.async.t1321152.cljs$lang$ctorStr = "cljs.core.async/t1321152";

cljs.core.async.t1321152.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1321152");
});})(cs))
;

cljs.core.async.__GT_t1321152 = ((function (cs){
return (function __GT_t1321152(cs__$1,ch__$1,mult__$1,meta1321153){
return (new cljs.core.async.t1321152(cs__$1,ch__$1,mult__$1,meta1321153));
});})(cs))
;

}

return (new cljs.core.async.t1321152(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1321373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1321373,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1321373,cs,m,dchan,dctr,done){
return (function (state_1321285){
var state_val_1321286 = (state_1321285[(1)]);
if((state_val_1321286 === (7))){
var inst_1321281 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321287_1321374 = state_1321285__$1;
(statearr_1321287_1321374[(2)] = inst_1321281);

(statearr_1321287_1321374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (20))){
var inst_1321186 = (state_1321285[(7)]);
var inst_1321196 = cljs.core.first.call(null,inst_1321186);
var inst_1321197 = cljs.core.nth.call(null,inst_1321196,(0),null);
var inst_1321198 = cljs.core.nth.call(null,inst_1321196,(1),null);
var state_1321285__$1 = (function (){var statearr_1321288 = state_1321285;
(statearr_1321288[(8)] = inst_1321197);

return statearr_1321288;
})();
if(cljs.core.truth_(inst_1321198)){
var statearr_1321289_1321375 = state_1321285__$1;
(statearr_1321289_1321375[(1)] = (22));

} else {
var statearr_1321290_1321376 = state_1321285__$1;
(statearr_1321290_1321376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (27))){
var inst_1321228 = (state_1321285[(9)]);
var inst_1321226 = (state_1321285[(10)]);
var inst_1321233 = (state_1321285[(11)]);
var inst_1321157 = (state_1321285[(12)]);
var inst_1321233__$1 = cljs.core._nth.call(null,inst_1321226,inst_1321228);
var inst_1321234 = cljs.core.async.put_BANG_.call(null,inst_1321233__$1,inst_1321157,done);
var state_1321285__$1 = (function (){var statearr_1321291 = state_1321285;
(statearr_1321291[(11)] = inst_1321233__$1);

return statearr_1321291;
})();
if(cljs.core.truth_(inst_1321234)){
var statearr_1321292_1321377 = state_1321285__$1;
(statearr_1321292_1321377[(1)] = (30));

} else {
var statearr_1321293_1321378 = state_1321285__$1;
(statearr_1321293_1321378[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (1))){
var state_1321285__$1 = state_1321285;
var statearr_1321294_1321379 = state_1321285__$1;
(statearr_1321294_1321379[(2)] = null);

(statearr_1321294_1321379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (24))){
var inst_1321186 = (state_1321285[(7)]);
var inst_1321203 = (state_1321285[(2)]);
var inst_1321204 = cljs.core.next.call(null,inst_1321186);
var inst_1321166 = inst_1321204;
var inst_1321167 = null;
var inst_1321168 = (0);
var inst_1321169 = (0);
var state_1321285__$1 = (function (){var statearr_1321295 = state_1321285;
(statearr_1321295[(13)] = inst_1321167);

(statearr_1321295[(14)] = inst_1321203);

(statearr_1321295[(15)] = inst_1321169);

(statearr_1321295[(16)] = inst_1321168);

(statearr_1321295[(17)] = inst_1321166);

return statearr_1321295;
})();
var statearr_1321296_1321380 = state_1321285__$1;
(statearr_1321296_1321380[(2)] = null);

(statearr_1321296_1321380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (39))){
var state_1321285__$1 = state_1321285;
var statearr_1321300_1321381 = state_1321285__$1;
(statearr_1321300_1321381[(2)] = null);

(statearr_1321300_1321381[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (4))){
var inst_1321157 = (state_1321285[(12)]);
var inst_1321157__$1 = (state_1321285[(2)]);
var inst_1321158 = (inst_1321157__$1 == null);
var state_1321285__$1 = (function (){var statearr_1321301 = state_1321285;
(statearr_1321301[(12)] = inst_1321157__$1);

return statearr_1321301;
})();
if(cljs.core.truth_(inst_1321158)){
var statearr_1321302_1321382 = state_1321285__$1;
(statearr_1321302_1321382[(1)] = (5));

} else {
var statearr_1321303_1321383 = state_1321285__$1;
(statearr_1321303_1321383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (15))){
var inst_1321167 = (state_1321285[(13)]);
var inst_1321169 = (state_1321285[(15)]);
var inst_1321168 = (state_1321285[(16)]);
var inst_1321166 = (state_1321285[(17)]);
var inst_1321182 = (state_1321285[(2)]);
var inst_1321183 = (inst_1321169 + (1));
var tmp1321297 = inst_1321167;
var tmp1321298 = inst_1321168;
var tmp1321299 = inst_1321166;
var inst_1321166__$1 = tmp1321299;
var inst_1321167__$1 = tmp1321297;
var inst_1321168__$1 = tmp1321298;
var inst_1321169__$1 = inst_1321183;
var state_1321285__$1 = (function (){var statearr_1321304 = state_1321285;
(statearr_1321304[(13)] = inst_1321167__$1);

(statearr_1321304[(15)] = inst_1321169__$1);

(statearr_1321304[(18)] = inst_1321182);

(statearr_1321304[(16)] = inst_1321168__$1);

(statearr_1321304[(17)] = inst_1321166__$1);

return statearr_1321304;
})();
var statearr_1321305_1321384 = state_1321285__$1;
(statearr_1321305_1321384[(2)] = null);

(statearr_1321305_1321384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (21))){
var inst_1321207 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321309_1321385 = state_1321285__$1;
(statearr_1321309_1321385[(2)] = inst_1321207);

(statearr_1321309_1321385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (31))){
var inst_1321233 = (state_1321285[(11)]);
var inst_1321237 = done.call(null,null);
var inst_1321238 = cljs.core.async.untap_STAR_.call(null,m,inst_1321233);
var state_1321285__$1 = (function (){var statearr_1321310 = state_1321285;
(statearr_1321310[(19)] = inst_1321237);

return statearr_1321310;
})();
var statearr_1321311_1321386 = state_1321285__$1;
(statearr_1321311_1321386[(2)] = inst_1321238);

(statearr_1321311_1321386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (32))){
var inst_1321227 = (state_1321285[(20)]);
var inst_1321228 = (state_1321285[(9)]);
var inst_1321226 = (state_1321285[(10)]);
var inst_1321225 = (state_1321285[(21)]);
var inst_1321240 = (state_1321285[(2)]);
var inst_1321241 = (inst_1321228 + (1));
var tmp1321306 = inst_1321227;
var tmp1321307 = inst_1321226;
var tmp1321308 = inst_1321225;
var inst_1321225__$1 = tmp1321308;
var inst_1321226__$1 = tmp1321307;
var inst_1321227__$1 = tmp1321306;
var inst_1321228__$1 = inst_1321241;
var state_1321285__$1 = (function (){var statearr_1321312 = state_1321285;
(statearr_1321312[(20)] = inst_1321227__$1);

(statearr_1321312[(9)] = inst_1321228__$1);

(statearr_1321312[(10)] = inst_1321226__$1);

(statearr_1321312[(21)] = inst_1321225__$1);

(statearr_1321312[(22)] = inst_1321240);

return statearr_1321312;
})();
var statearr_1321313_1321387 = state_1321285__$1;
(statearr_1321313_1321387[(2)] = null);

(statearr_1321313_1321387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (40))){
var inst_1321253 = (state_1321285[(23)]);
var inst_1321257 = done.call(null,null);
var inst_1321258 = cljs.core.async.untap_STAR_.call(null,m,inst_1321253);
var state_1321285__$1 = (function (){var statearr_1321314 = state_1321285;
(statearr_1321314[(24)] = inst_1321257);

return statearr_1321314;
})();
var statearr_1321315_1321388 = state_1321285__$1;
(statearr_1321315_1321388[(2)] = inst_1321258);

(statearr_1321315_1321388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (33))){
var inst_1321244 = (state_1321285[(25)]);
var inst_1321246 = cljs.core.chunked_seq_QMARK_.call(null,inst_1321244);
var state_1321285__$1 = state_1321285;
if(inst_1321246){
var statearr_1321316_1321389 = state_1321285__$1;
(statearr_1321316_1321389[(1)] = (36));

} else {
var statearr_1321317_1321390 = state_1321285__$1;
(statearr_1321317_1321390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (13))){
var inst_1321176 = (state_1321285[(26)]);
var inst_1321179 = cljs.core.async.close_BANG_.call(null,inst_1321176);
var state_1321285__$1 = state_1321285;
var statearr_1321318_1321391 = state_1321285__$1;
(statearr_1321318_1321391[(2)] = inst_1321179);

(statearr_1321318_1321391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (22))){
var inst_1321197 = (state_1321285[(8)]);
var inst_1321200 = cljs.core.async.close_BANG_.call(null,inst_1321197);
var state_1321285__$1 = state_1321285;
var statearr_1321319_1321392 = state_1321285__$1;
(statearr_1321319_1321392[(2)] = inst_1321200);

(statearr_1321319_1321392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (36))){
var inst_1321244 = (state_1321285[(25)]);
var inst_1321248 = cljs.core.chunk_first.call(null,inst_1321244);
var inst_1321249 = cljs.core.chunk_rest.call(null,inst_1321244);
var inst_1321250 = cljs.core.count.call(null,inst_1321248);
var inst_1321225 = inst_1321249;
var inst_1321226 = inst_1321248;
var inst_1321227 = inst_1321250;
var inst_1321228 = (0);
var state_1321285__$1 = (function (){var statearr_1321320 = state_1321285;
(statearr_1321320[(20)] = inst_1321227);

(statearr_1321320[(9)] = inst_1321228);

(statearr_1321320[(10)] = inst_1321226);

(statearr_1321320[(21)] = inst_1321225);

return statearr_1321320;
})();
var statearr_1321321_1321393 = state_1321285__$1;
(statearr_1321321_1321393[(2)] = null);

(statearr_1321321_1321393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (41))){
var inst_1321244 = (state_1321285[(25)]);
var inst_1321260 = (state_1321285[(2)]);
var inst_1321261 = cljs.core.next.call(null,inst_1321244);
var inst_1321225 = inst_1321261;
var inst_1321226 = null;
var inst_1321227 = (0);
var inst_1321228 = (0);
var state_1321285__$1 = (function (){var statearr_1321322 = state_1321285;
(statearr_1321322[(27)] = inst_1321260);

(statearr_1321322[(20)] = inst_1321227);

(statearr_1321322[(9)] = inst_1321228);

(statearr_1321322[(10)] = inst_1321226);

(statearr_1321322[(21)] = inst_1321225);

return statearr_1321322;
})();
var statearr_1321323_1321394 = state_1321285__$1;
(statearr_1321323_1321394[(2)] = null);

(statearr_1321323_1321394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (43))){
var state_1321285__$1 = state_1321285;
var statearr_1321324_1321395 = state_1321285__$1;
(statearr_1321324_1321395[(2)] = null);

(statearr_1321324_1321395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (29))){
var inst_1321269 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321325_1321396 = state_1321285__$1;
(statearr_1321325_1321396[(2)] = inst_1321269);

(statearr_1321325_1321396[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (44))){
var inst_1321278 = (state_1321285[(2)]);
var state_1321285__$1 = (function (){var statearr_1321326 = state_1321285;
(statearr_1321326[(28)] = inst_1321278);

return statearr_1321326;
})();
var statearr_1321327_1321397 = state_1321285__$1;
(statearr_1321327_1321397[(2)] = null);

(statearr_1321327_1321397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (6))){
var inst_1321217 = (state_1321285[(29)]);
var inst_1321216 = cljs.core.deref.call(null,cs);
var inst_1321217__$1 = cljs.core.keys.call(null,inst_1321216);
var inst_1321218 = cljs.core.count.call(null,inst_1321217__$1);
var inst_1321219 = cljs.core.reset_BANG_.call(null,dctr,inst_1321218);
var inst_1321224 = cljs.core.seq.call(null,inst_1321217__$1);
var inst_1321225 = inst_1321224;
var inst_1321226 = null;
var inst_1321227 = (0);
var inst_1321228 = (0);
var state_1321285__$1 = (function (){var statearr_1321328 = state_1321285;
(statearr_1321328[(20)] = inst_1321227);

(statearr_1321328[(9)] = inst_1321228);

(statearr_1321328[(30)] = inst_1321219);

(statearr_1321328[(10)] = inst_1321226);

(statearr_1321328[(29)] = inst_1321217__$1);

(statearr_1321328[(21)] = inst_1321225);

return statearr_1321328;
})();
var statearr_1321329_1321398 = state_1321285__$1;
(statearr_1321329_1321398[(2)] = null);

(statearr_1321329_1321398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (28))){
var inst_1321225 = (state_1321285[(21)]);
var inst_1321244 = (state_1321285[(25)]);
var inst_1321244__$1 = cljs.core.seq.call(null,inst_1321225);
var state_1321285__$1 = (function (){var statearr_1321330 = state_1321285;
(statearr_1321330[(25)] = inst_1321244__$1);

return statearr_1321330;
})();
if(inst_1321244__$1){
var statearr_1321331_1321399 = state_1321285__$1;
(statearr_1321331_1321399[(1)] = (33));

} else {
var statearr_1321332_1321400 = state_1321285__$1;
(statearr_1321332_1321400[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (25))){
var inst_1321227 = (state_1321285[(20)]);
var inst_1321228 = (state_1321285[(9)]);
var inst_1321230 = (inst_1321228 < inst_1321227);
var inst_1321231 = inst_1321230;
var state_1321285__$1 = state_1321285;
if(cljs.core.truth_(inst_1321231)){
var statearr_1321333_1321401 = state_1321285__$1;
(statearr_1321333_1321401[(1)] = (27));

} else {
var statearr_1321334_1321402 = state_1321285__$1;
(statearr_1321334_1321402[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (34))){
var state_1321285__$1 = state_1321285;
var statearr_1321335_1321403 = state_1321285__$1;
(statearr_1321335_1321403[(2)] = null);

(statearr_1321335_1321403[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (17))){
var state_1321285__$1 = state_1321285;
var statearr_1321336_1321404 = state_1321285__$1;
(statearr_1321336_1321404[(2)] = null);

(statearr_1321336_1321404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (3))){
var inst_1321283 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1321285__$1,inst_1321283);
} else {
if((state_val_1321286 === (12))){
var inst_1321212 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321337_1321405 = state_1321285__$1;
(statearr_1321337_1321405[(2)] = inst_1321212);

(statearr_1321337_1321405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (2))){
var state_1321285__$1 = state_1321285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1321285__$1,(4),ch);
} else {
if((state_val_1321286 === (23))){
var state_1321285__$1 = state_1321285;
var statearr_1321338_1321406 = state_1321285__$1;
(statearr_1321338_1321406[(2)] = null);

(statearr_1321338_1321406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (35))){
var inst_1321267 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321339_1321407 = state_1321285__$1;
(statearr_1321339_1321407[(2)] = inst_1321267);

(statearr_1321339_1321407[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (19))){
var inst_1321186 = (state_1321285[(7)]);
var inst_1321190 = cljs.core.chunk_first.call(null,inst_1321186);
var inst_1321191 = cljs.core.chunk_rest.call(null,inst_1321186);
var inst_1321192 = cljs.core.count.call(null,inst_1321190);
var inst_1321166 = inst_1321191;
var inst_1321167 = inst_1321190;
var inst_1321168 = inst_1321192;
var inst_1321169 = (0);
var state_1321285__$1 = (function (){var statearr_1321340 = state_1321285;
(statearr_1321340[(13)] = inst_1321167);

(statearr_1321340[(15)] = inst_1321169);

(statearr_1321340[(16)] = inst_1321168);

(statearr_1321340[(17)] = inst_1321166);

return statearr_1321340;
})();
var statearr_1321341_1321408 = state_1321285__$1;
(statearr_1321341_1321408[(2)] = null);

(statearr_1321341_1321408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (11))){
var inst_1321186 = (state_1321285[(7)]);
var inst_1321166 = (state_1321285[(17)]);
var inst_1321186__$1 = cljs.core.seq.call(null,inst_1321166);
var state_1321285__$1 = (function (){var statearr_1321342 = state_1321285;
(statearr_1321342[(7)] = inst_1321186__$1);

return statearr_1321342;
})();
if(inst_1321186__$1){
var statearr_1321343_1321409 = state_1321285__$1;
(statearr_1321343_1321409[(1)] = (16));

} else {
var statearr_1321344_1321410 = state_1321285__$1;
(statearr_1321344_1321410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (9))){
var inst_1321214 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321345_1321411 = state_1321285__$1;
(statearr_1321345_1321411[(2)] = inst_1321214);

(statearr_1321345_1321411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (5))){
var inst_1321164 = cljs.core.deref.call(null,cs);
var inst_1321165 = cljs.core.seq.call(null,inst_1321164);
var inst_1321166 = inst_1321165;
var inst_1321167 = null;
var inst_1321168 = (0);
var inst_1321169 = (0);
var state_1321285__$1 = (function (){var statearr_1321346 = state_1321285;
(statearr_1321346[(13)] = inst_1321167);

(statearr_1321346[(15)] = inst_1321169);

(statearr_1321346[(16)] = inst_1321168);

(statearr_1321346[(17)] = inst_1321166);

return statearr_1321346;
})();
var statearr_1321347_1321412 = state_1321285__$1;
(statearr_1321347_1321412[(2)] = null);

(statearr_1321347_1321412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (14))){
var state_1321285__$1 = state_1321285;
var statearr_1321348_1321413 = state_1321285__$1;
(statearr_1321348_1321413[(2)] = null);

(statearr_1321348_1321413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (45))){
var inst_1321275 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321349_1321414 = state_1321285__$1;
(statearr_1321349_1321414[(2)] = inst_1321275);

(statearr_1321349_1321414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (26))){
var inst_1321217 = (state_1321285[(29)]);
var inst_1321271 = (state_1321285[(2)]);
var inst_1321272 = cljs.core.seq.call(null,inst_1321217);
var state_1321285__$1 = (function (){var statearr_1321350 = state_1321285;
(statearr_1321350[(31)] = inst_1321271);

return statearr_1321350;
})();
if(inst_1321272){
var statearr_1321351_1321415 = state_1321285__$1;
(statearr_1321351_1321415[(1)] = (42));

} else {
var statearr_1321352_1321416 = state_1321285__$1;
(statearr_1321352_1321416[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (16))){
var inst_1321186 = (state_1321285[(7)]);
var inst_1321188 = cljs.core.chunked_seq_QMARK_.call(null,inst_1321186);
var state_1321285__$1 = state_1321285;
if(inst_1321188){
var statearr_1321353_1321417 = state_1321285__$1;
(statearr_1321353_1321417[(1)] = (19));

} else {
var statearr_1321354_1321418 = state_1321285__$1;
(statearr_1321354_1321418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (38))){
var inst_1321264 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321355_1321419 = state_1321285__$1;
(statearr_1321355_1321419[(2)] = inst_1321264);

(statearr_1321355_1321419[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (30))){
var state_1321285__$1 = state_1321285;
var statearr_1321356_1321420 = state_1321285__$1;
(statearr_1321356_1321420[(2)] = null);

(statearr_1321356_1321420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (10))){
var inst_1321167 = (state_1321285[(13)]);
var inst_1321169 = (state_1321285[(15)]);
var inst_1321175 = cljs.core._nth.call(null,inst_1321167,inst_1321169);
var inst_1321176 = cljs.core.nth.call(null,inst_1321175,(0),null);
var inst_1321177 = cljs.core.nth.call(null,inst_1321175,(1),null);
var state_1321285__$1 = (function (){var statearr_1321357 = state_1321285;
(statearr_1321357[(26)] = inst_1321176);

return statearr_1321357;
})();
if(cljs.core.truth_(inst_1321177)){
var statearr_1321358_1321421 = state_1321285__$1;
(statearr_1321358_1321421[(1)] = (13));

} else {
var statearr_1321359_1321422 = state_1321285__$1;
(statearr_1321359_1321422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (18))){
var inst_1321210 = (state_1321285[(2)]);
var state_1321285__$1 = state_1321285;
var statearr_1321360_1321423 = state_1321285__$1;
(statearr_1321360_1321423[(2)] = inst_1321210);

(statearr_1321360_1321423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (42))){
var state_1321285__$1 = state_1321285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1321285__$1,(45),dchan);
} else {
if((state_val_1321286 === (37))){
var inst_1321253 = (state_1321285[(23)]);
var inst_1321244 = (state_1321285[(25)]);
var inst_1321157 = (state_1321285[(12)]);
var inst_1321253__$1 = cljs.core.first.call(null,inst_1321244);
var inst_1321254 = cljs.core.async.put_BANG_.call(null,inst_1321253__$1,inst_1321157,done);
var state_1321285__$1 = (function (){var statearr_1321361 = state_1321285;
(statearr_1321361[(23)] = inst_1321253__$1);

return statearr_1321361;
})();
if(cljs.core.truth_(inst_1321254)){
var statearr_1321362_1321424 = state_1321285__$1;
(statearr_1321362_1321424[(1)] = (39));

} else {
var statearr_1321363_1321425 = state_1321285__$1;
(statearr_1321363_1321425[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321286 === (8))){
var inst_1321169 = (state_1321285[(15)]);
var inst_1321168 = (state_1321285[(16)]);
var inst_1321171 = (inst_1321169 < inst_1321168);
var inst_1321172 = inst_1321171;
var state_1321285__$1 = state_1321285;
if(cljs.core.truth_(inst_1321172)){
var statearr_1321364_1321426 = state_1321285__$1;
(statearr_1321364_1321426[(1)] = (10));

} else {
var statearr_1321365_1321427 = state_1321285__$1;
(statearr_1321365_1321427[(1)] = (11));

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
});})(c__9199__auto___1321373,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1321373,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1321369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1321369[(0)] = state_machine__9185__auto__);

(statearr_1321369[(1)] = (1));

return statearr_1321369;
});
var state_machine__9185__auto____1 = (function (state_1321285){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1321285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1321370){if((e1321370 instanceof Object)){
var ex__9188__auto__ = e1321370;
var statearr_1321371_1321428 = state_1321285;
(statearr_1321371_1321428[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1321285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1321370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1321429 = state_1321285;
state_1321285 = G__1321429;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1321285){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1321285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1321373,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1321372 = f__9200__auto__.call(null);
(statearr_1321372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1321373);

return statearr_1321372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1321373,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj1321431 = {};
return obj1321431;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__1321432){
var map__1321437 = p__1321432;
var map__1321437__$1 = ((cljs.core.seq_QMARK_.call(null,map__1321437))?cljs.core.apply.call(null,cljs.core.hash_map,map__1321437):map__1321437);
var opts = map__1321437__$1;
var statearr_1321438_1321441 = state;
(statearr_1321438_1321441[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__1321437,map__1321437__$1,opts){
return (function (val){
var statearr_1321439_1321442 = state;
(statearr_1321439_1321442[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1321437,map__1321437__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_1321440_1321443 = state;
(statearr_1321440_1321443[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__1321432 = null;
if (arguments.length > 3) {
  p__1321432 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__1321432);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__1321444){
var state = cljs.core.first(arglist__1321444);
arglist__1321444 = cljs.core.next(arglist__1321444);
var cont_block = cljs.core.first(arglist__1321444);
arglist__1321444 = cljs.core.next(arglist__1321444);
var ports = cljs.core.first(arglist__1321444);
var p__1321432 = cljs.core.rest(arglist__1321444);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__1321432);
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
if(typeof cljs.core.async.t1321564 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1321564 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1321565){
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
this.meta1321565 = meta1321565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1321564.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t1321564.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t1321564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1321564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1321566){
var self__ = this;
var _1321566__$1 = this;
return self__.meta1321565;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1321566,meta1321565__$1){
var self__ = this;
var _1321566__$1 = this;
return (new cljs.core.async.t1321564(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1321565__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1321564.cljs$lang$type = true;

cljs.core.async.t1321564.cljs$lang$ctorStr = "cljs.core.async/t1321564";

cljs.core.async.t1321564.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1321564");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t1321564 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t1321564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1321565){
return (new cljs.core.async.t1321564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1321565));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t1321564(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1321683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1321636){
var state_val_1321637 = (state_1321636[(1)]);
if((state_val_1321637 === (7))){
var inst_1321580 = (state_1321636[(7)]);
var inst_1321585 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1321580);
var state_1321636__$1 = state_1321636;
var statearr_1321638_1321684 = state_1321636__$1;
(statearr_1321638_1321684[(2)] = inst_1321585);

(statearr_1321638_1321684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (20))){
var inst_1321595 = (state_1321636[(8)]);
var state_1321636__$1 = state_1321636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1321636__$1,(23),out,inst_1321595);
} else {
if((state_val_1321637 === (1))){
var inst_1321570 = (state_1321636[(9)]);
var inst_1321570__$1 = calc_state.call(null);
var inst_1321571 = cljs.core.seq_QMARK_.call(null,inst_1321570__$1);
var state_1321636__$1 = (function (){var statearr_1321639 = state_1321636;
(statearr_1321639[(9)] = inst_1321570__$1);

return statearr_1321639;
})();
if(inst_1321571){
var statearr_1321640_1321685 = state_1321636__$1;
(statearr_1321640_1321685[(1)] = (2));

} else {
var statearr_1321641_1321686 = state_1321636__$1;
(statearr_1321641_1321686[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (24))){
var inst_1321588 = (state_1321636[(10)]);
var inst_1321580 = inst_1321588;
var state_1321636__$1 = (function (){var statearr_1321642 = state_1321636;
(statearr_1321642[(7)] = inst_1321580);

return statearr_1321642;
})();
var statearr_1321643_1321687 = state_1321636__$1;
(statearr_1321643_1321687[(2)] = null);

(statearr_1321643_1321687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (4))){
var inst_1321570 = (state_1321636[(9)]);
var inst_1321576 = (state_1321636[(2)]);
var inst_1321577 = cljs.core.get.call(null,inst_1321576,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1321578 = cljs.core.get.call(null,inst_1321576,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1321579 = cljs.core.get.call(null,inst_1321576,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1321580 = inst_1321570;
var state_1321636__$1 = (function (){var statearr_1321644 = state_1321636;
(statearr_1321644[(11)] = inst_1321577);

(statearr_1321644[(7)] = inst_1321580);

(statearr_1321644[(12)] = inst_1321579);

(statearr_1321644[(13)] = inst_1321578);

return statearr_1321644;
})();
var statearr_1321645_1321688 = state_1321636__$1;
(statearr_1321645_1321688[(2)] = null);

(statearr_1321645_1321688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (15))){
var state_1321636__$1 = state_1321636;
var statearr_1321646_1321689 = state_1321636__$1;
(statearr_1321646_1321689[(2)] = null);

(statearr_1321646_1321689[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (21))){
var inst_1321588 = (state_1321636[(10)]);
var inst_1321580 = inst_1321588;
var state_1321636__$1 = (function (){var statearr_1321647 = state_1321636;
(statearr_1321647[(7)] = inst_1321580);

return statearr_1321647;
})();
var statearr_1321648_1321690 = state_1321636__$1;
(statearr_1321648_1321690[(2)] = null);

(statearr_1321648_1321690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (13))){
var inst_1321632 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
var statearr_1321649_1321691 = state_1321636__$1;
(statearr_1321649_1321691[(2)] = inst_1321632);

(statearr_1321649_1321691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (22))){
var inst_1321630 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
var statearr_1321650_1321692 = state_1321636__$1;
(statearr_1321650_1321692[(2)] = inst_1321630);

(statearr_1321650_1321692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (6))){
var inst_1321634 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1321636__$1,inst_1321634);
} else {
if((state_val_1321637 === (25))){
var state_1321636__$1 = state_1321636;
var statearr_1321651_1321693 = state_1321636__$1;
(statearr_1321651_1321693[(2)] = null);

(statearr_1321651_1321693[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (17))){
var inst_1321610 = (state_1321636[(14)]);
var state_1321636__$1 = state_1321636;
var statearr_1321652_1321694 = state_1321636__$1;
(statearr_1321652_1321694[(2)] = inst_1321610);

(statearr_1321652_1321694[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (3))){
var inst_1321570 = (state_1321636[(9)]);
var state_1321636__$1 = state_1321636;
var statearr_1321653_1321695 = state_1321636__$1;
(statearr_1321653_1321695[(2)] = inst_1321570);

(statearr_1321653_1321695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (12))){
var inst_1321591 = (state_1321636[(15)]);
var inst_1321596 = (state_1321636[(16)]);
var inst_1321610 = (state_1321636[(14)]);
var inst_1321610__$1 = inst_1321591.call(null,inst_1321596);
var state_1321636__$1 = (function (){var statearr_1321654 = state_1321636;
(statearr_1321654[(14)] = inst_1321610__$1);

return statearr_1321654;
})();
if(cljs.core.truth_(inst_1321610__$1)){
var statearr_1321655_1321696 = state_1321636__$1;
(statearr_1321655_1321696[(1)] = (17));

} else {
var statearr_1321656_1321697 = state_1321636__$1;
(statearr_1321656_1321697[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (2))){
var inst_1321570 = (state_1321636[(9)]);
var inst_1321573 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1321570);
var state_1321636__$1 = state_1321636;
var statearr_1321657_1321698 = state_1321636__$1;
(statearr_1321657_1321698[(2)] = inst_1321573);

(statearr_1321657_1321698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (23))){
var inst_1321621 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
if(cljs.core.truth_(inst_1321621)){
var statearr_1321658_1321699 = state_1321636__$1;
(statearr_1321658_1321699[(1)] = (24));

} else {
var statearr_1321659_1321700 = state_1321636__$1;
(statearr_1321659_1321700[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (19))){
var inst_1321618 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
if(cljs.core.truth_(inst_1321618)){
var statearr_1321660_1321701 = state_1321636__$1;
(statearr_1321660_1321701[(1)] = (20));

} else {
var statearr_1321661_1321702 = state_1321636__$1;
(statearr_1321661_1321702[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (11))){
var inst_1321595 = (state_1321636[(8)]);
var inst_1321601 = (inst_1321595 == null);
var state_1321636__$1 = state_1321636;
if(cljs.core.truth_(inst_1321601)){
var statearr_1321662_1321703 = state_1321636__$1;
(statearr_1321662_1321703[(1)] = (14));

} else {
var statearr_1321663_1321704 = state_1321636__$1;
(statearr_1321663_1321704[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (9))){
var inst_1321588 = (state_1321636[(10)]);
var inst_1321588__$1 = (state_1321636[(2)]);
var inst_1321589 = cljs.core.get.call(null,inst_1321588__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1321590 = cljs.core.get.call(null,inst_1321588__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1321591 = cljs.core.get.call(null,inst_1321588__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_1321636__$1 = (function (){var statearr_1321664 = state_1321636;
(statearr_1321664[(10)] = inst_1321588__$1);

(statearr_1321664[(15)] = inst_1321591);

(statearr_1321664[(17)] = inst_1321590);

return statearr_1321664;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1321636__$1,(10),inst_1321589);
} else {
if((state_val_1321637 === (5))){
var inst_1321580 = (state_1321636[(7)]);
var inst_1321583 = cljs.core.seq_QMARK_.call(null,inst_1321580);
var state_1321636__$1 = state_1321636;
if(inst_1321583){
var statearr_1321665_1321705 = state_1321636__$1;
(statearr_1321665_1321705[(1)] = (7));

} else {
var statearr_1321666_1321706 = state_1321636__$1;
(statearr_1321666_1321706[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (14))){
var inst_1321596 = (state_1321636[(16)]);
var inst_1321603 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1321596);
var state_1321636__$1 = state_1321636;
var statearr_1321667_1321707 = state_1321636__$1;
(statearr_1321667_1321707[(2)] = inst_1321603);

(statearr_1321667_1321707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (26))){
var inst_1321626 = (state_1321636[(2)]);
var state_1321636__$1 = state_1321636;
var statearr_1321668_1321708 = state_1321636__$1;
(statearr_1321668_1321708[(2)] = inst_1321626);

(statearr_1321668_1321708[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (16))){
var inst_1321606 = (state_1321636[(2)]);
var inst_1321607 = calc_state.call(null);
var inst_1321580 = inst_1321607;
var state_1321636__$1 = (function (){var statearr_1321669 = state_1321636;
(statearr_1321669[(18)] = inst_1321606);

(statearr_1321669[(7)] = inst_1321580);

return statearr_1321669;
})();
var statearr_1321670_1321709 = state_1321636__$1;
(statearr_1321670_1321709[(2)] = null);

(statearr_1321670_1321709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (10))){
var inst_1321596 = (state_1321636[(16)]);
var inst_1321595 = (state_1321636[(8)]);
var inst_1321594 = (state_1321636[(2)]);
var inst_1321595__$1 = cljs.core.nth.call(null,inst_1321594,(0),null);
var inst_1321596__$1 = cljs.core.nth.call(null,inst_1321594,(1),null);
var inst_1321597 = (inst_1321595__$1 == null);
var inst_1321598 = cljs.core._EQ_.call(null,inst_1321596__$1,change);
var inst_1321599 = (inst_1321597) || (inst_1321598);
var state_1321636__$1 = (function (){var statearr_1321671 = state_1321636;
(statearr_1321671[(16)] = inst_1321596__$1);

(statearr_1321671[(8)] = inst_1321595__$1);

return statearr_1321671;
})();
if(cljs.core.truth_(inst_1321599)){
var statearr_1321672_1321710 = state_1321636__$1;
(statearr_1321672_1321710[(1)] = (11));

} else {
var statearr_1321673_1321711 = state_1321636__$1;
(statearr_1321673_1321711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (18))){
var inst_1321591 = (state_1321636[(15)]);
var inst_1321596 = (state_1321636[(16)]);
var inst_1321590 = (state_1321636[(17)]);
var inst_1321613 = cljs.core.empty_QMARK_.call(null,inst_1321591);
var inst_1321614 = inst_1321590.call(null,inst_1321596);
var inst_1321615 = cljs.core.not.call(null,inst_1321614);
var inst_1321616 = (inst_1321613) && (inst_1321615);
var state_1321636__$1 = state_1321636;
var statearr_1321674_1321712 = state_1321636__$1;
(statearr_1321674_1321712[(2)] = inst_1321616);

(statearr_1321674_1321712[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321637 === (8))){
var inst_1321580 = (state_1321636[(7)]);
var state_1321636__$1 = state_1321636;
var statearr_1321675_1321713 = state_1321636__$1;
(statearr_1321675_1321713[(2)] = inst_1321580);

(statearr_1321675_1321713[(1)] = (9));


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
});})(c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1321679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1321679[(0)] = state_machine__9185__auto__);

(statearr_1321679[(1)] = (1));

return statearr_1321679;
});
var state_machine__9185__auto____1 = (function (state_1321636){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1321636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1321680){if((e1321680 instanceof Object)){
var ex__9188__auto__ = e1321680;
var statearr_1321681_1321714 = state_1321636;
(statearr_1321681_1321714[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1321636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1321680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1321715 = state_1321636;
state_1321636 = G__1321715;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1321636){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1321636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_1321682 = f__9200__auto__.call(null);
(statearr_1321682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1321683);

return statearr_1321682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1321683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj1321717 = {};
return obj1321717;
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
return (function (p1__1321718_SHARP_){
if(cljs.core.truth_(p1__1321718_SHARP_.call(null,topic))){
return p1__1321718_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1321718_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t1321841 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1321841 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta1321842){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta1321842 = meta1321842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1321841.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t1321841.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t1321841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1321841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1321843){
var self__ = this;
var _1321843__$1 = this;
return self__.meta1321842;
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1321843,meta1321842__$1){
var self__ = this;
var _1321843__$1 = this;
return (new cljs.core.async.t1321841(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta1321842__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t1321841.cljs$lang$type = true;

cljs.core.async.t1321841.cljs$lang$ctorStr = "cljs.core.async/t1321841";

cljs.core.async.t1321841.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1321841");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t1321841 = ((function (mults,ensure_mult){
return (function __GT_t1321841(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1321842){
return (new cljs.core.async.t1321841(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1321842));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t1321841(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1321963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1321963,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1321963,mults,ensure_mult,p){
return (function (state_1321915){
var state_val_1321916 = (state_1321915[(1)]);
if((state_val_1321916 === (7))){
var inst_1321911 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321917_1321964 = state_1321915__$1;
(statearr_1321917_1321964[(2)] = inst_1321911);

(statearr_1321917_1321964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (20))){
var state_1321915__$1 = state_1321915;
var statearr_1321918_1321965 = state_1321915__$1;
(statearr_1321918_1321965[(2)] = null);

(statearr_1321918_1321965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (1))){
var state_1321915__$1 = state_1321915;
var statearr_1321919_1321966 = state_1321915__$1;
(statearr_1321919_1321966[(2)] = null);

(statearr_1321919_1321966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (24))){
var inst_1321894 = (state_1321915[(7)]);
var inst_1321903 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1321894);
var state_1321915__$1 = state_1321915;
var statearr_1321920_1321967 = state_1321915__$1;
(statearr_1321920_1321967[(2)] = inst_1321903);

(statearr_1321920_1321967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (4))){
var inst_1321846 = (state_1321915[(8)]);
var inst_1321846__$1 = (state_1321915[(2)]);
var inst_1321847 = (inst_1321846__$1 == null);
var state_1321915__$1 = (function (){var statearr_1321921 = state_1321915;
(statearr_1321921[(8)] = inst_1321846__$1);

return statearr_1321921;
})();
if(cljs.core.truth_(inst_1321847)){
var statearr_1321922_1321968 = state_1321915__$1;
(statearr_1321922_1321968[(1)] = (5));

} else {
var statearr_1321923_1321969 = state_1321915__$1;
(statearr_1321923_1321969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (15))){
var inst_1321888 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321924_1321970 = state_1321915__$1;
(statearr_1321924_1321970[(2)] = inst_1321888);

(statearr_1321924_1321970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (21))){
var inst_1321908 = (state_1321915[(2)]);
var state_1321915__$1 = (function (){var statearr_1321925 = state_1321915;
(statearr_1321925[(9)] = inst_1321908);

return statearr_1321925;
})();
var statearr_1321926_1321971 = state_1321915__$1;
(statearr_1321926_1321971[(2)] = null);

(statearr_1321926_1321971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (13))){
var inst_1321870 = (state_1321915[(10)]);
var inst_1321872 = cljs.core.chunked_seq_QMARK_.call(null,inst_1321870);
var state_1321915__$1 = state_1321915;
if(inst_1321872){
var statearr_1321927_1321972 = state_1321915__$1;
(statearr_1321927_1321972[(1)] = (16));

} else {
var statearr_1321928_1321973 = state_1321915__$1;
(statearr_1321928_1321973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (22))){
var inst_1321900 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
if(cljs.core.truth_(inst_1321900)){
var statearr_1321929_1321974 = state_1321915__$1;
(statearr_1321929_1321974[(1)] = (23));

} else {
var statearr_1321930_1321975 = state_1321915__$1;
(statearr_1321930_1321975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (6))){
var inst_1321896 = (state_1321915[(11)]);
var inst_1321846 = (state_1321915[(8)]);
var inst_1321894 = (state_1321915[(7)]);
var inst_1321894__$1 = topic_fn.call(null,inst_1321846);
var inst_1321895 = cljs.core.deref.call(null,mults);
var inst_1321896__$1 = cljs.core.get.call(null,inst_1321895,inst_1321894__$1);
var state_1321915__$1 = (function (){var statearr_1321931 = state_1321915;
(statearr_1321931[(11)] = inst_1321896__$1);

(statearr_1321931[(7)] = inst_1321894__$1);

return statearr_1321931;
})();
if(cljs.core.truth_(inst_1321896__$1)){
var statearr_1321932_1321976 = state_1321915__$1;
(statearr_1321932_1321976[(1)] = (19));

} else {
var statearr_1321933_1321977 = state_1321915__$1;
(statearr_1321933_1321977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (25))){
var inst_1321905 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321934_1321978 = state_1321915__$1;
(statearr_1321934_1321978[(2)] = inst_1321905);

(statearr_1321934_1321978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (17))){
var inst_1321870 = (state_1321915[(10)]);
var inst_1321879 = cljs.core.first.call(null,inst_1321870);
var inst_1321880 = cljs.core.async.muxch_STAR_.call(null,inst_1321879);
var inst_1321881 = cljs.core.async.close_BANG_.call(null,inst_1321880);
var inst_1321882 = cljs.core.next.call(null,inst_1321870);
var inst_1321856 = inst_1321882;
var inst_1321857 = null;
var inst_1321858 = (0);
var inst_1321859 = (0);
var state_1321915__$1 = (function (){var statearr_1321935 = state_1321915;
(statearr_1321935[(12)] = inst_1321859);

(statearr_1321935[(13)] = inst_1321881);

(statearr_1321935[(14)] = inst_1321857);

(statearr_1321935[(15)] = inst_1321858);

(statearr_1321935[(16)] = inst_1321856);

return statearr_1321935;
})();
var statearr_1321936_1321979 = state_1321915__$1;
(statearr_1321936_1321979[(2)] = null);

(statearr_1321936_1321979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (3))){
var inst_1321913 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1321915__$1,inst_1321913);
} else {
if((state_val_1321916 === (12))){
var inst_1321890 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321937_1321980 = state_1321915__$1;
(statearr_1321937_1321980[(2)] = inst_1321890);

(statearr_1321937_1321980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (2))){
var state_1321915__$1 = state_1321915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1321915__$1,(4),ch);
} else {
if((state_val_1321916 === (23))){
var state_1321915__$1 = state_1321915;
var statearr_1321938_1321981 = state_1321915__$1;
(statearr_1321938_1321981[(2)] = null);

(statearr_1321938_1321981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (19))){
var inst_1321896 = (state_1321915[(11)]);
var inst_1321846 = (state_1321915[(8)]);
var inst_1321898 = cljs.core.async.muxch_STAR_.call(null,inst_1321896);
var state_1321915__$1 = state_1321915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1321915__$1,(22),inst_1321898,inst_1321846);
} else {
if((state_val_1321916 === (11))){
var inst_1321870 = (state_1321915[(10)]);
var inst_1321856 = (state_1321915[(16)]);
var inst_1321870__$1 = cljs.core.seq.call(null,inst_1321856);
var state_1321915__$1 = (function (){var statearr_1321939 = state_1321915;
(statearr_1321939[(10)] = inst_1321870__$1);

return statearr_1321939;
})();
if(inst_1321870__$1){
var statearr_1321940_1321982 = state_1321915__$1;
(statearr_1321940_1321982[(1)] = (13));

} else {
var statearr_1321941_1321983 = state_1321915__$1;
(statearr_1321941_1321983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (9))){
var inst_1321892 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321942_1321984 = state_1321915__$1;
(statearr_1321942_1321984[(2)] = inst_1321892);

(statearr_1321942_1321984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (5))){
var inst_1321853 = cljs.core.deref.call(null,mults);
var inst_1321854 = cljs.core.vals.call(null,inst_1321853);
var inst_1321855 = cljs.core.seq.call(null,inst_1321854);
var inst_1321856 = inst_1321855;
var inst_1321857 = null;
var inst_1321858 = (0);
var inst_1321859 = (0);
var state_1321915__$1 = (function (){var statearr_1321943 = state_1321915;
(statearr_1321943[(12)] = inst_1321859);

(statearr_1321943[(14)] = inst_1321857);

(statearr_1321943[(15)] = inst_1321858);

(statearr_1321943[(16)] = inst_1321856);

return statearr_1321943;
})();
var statearr_1321944_1321985 = state_1321915__$1;
(statearr_1321944_1321985[(2)] = null);

(statearr_1321944_1321985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (14))){
var state_1321915__$1 = state_1321915;
var statearr_1321948_1321986 = state_1321915__$1;
(statearr_1321948_1321986[(2)] = null);

(statearr_1321948_1321986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (16))){
var inst_1321870 = (state_1321915[(10)]);
var inst_1321874 = cljs.core.chunk_first.call(null,inst_1321870);
var inst_1321875 = cljs.core.chunk_rest.call(null,inst_1321870);
var inst_1321876 = cljs.core.count.call(null,inst_1321874);
var inst_1321856 = inst_1321875;
var inst_1321857 = inst_1321874;
var inst_1321858 = inst_1321876;
var inst_1321859 = (0);
var state_1321915__$1 = (function (){var statearr_1321949 = state_1321915;
(statearr_1321949[(12)] = inst_1321859);

(statearr_1321949[(14)] = inst_1321857);

(statearr_1321949[(15)] = inst_1321858);

(statearr_1321949[(16)] = inst_1321856);

return statearr_1321949;
})();
var statearr_1321950_1321987 = state_1321915__$1;
(statearr_1321950_1321987[(2)] = null);

(statearr_1321950_1321987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (10))){
var inst_1321859 = (state_1321915[(12)]);
var inst_1321857 = (state_1321915[(14)]);
var inst_1321858 = (state_1321915[(15)]);
var inst_1321856 = (state_1321915[(16)]);
var inst_1321864 = cljs.core._nth.call(null,inst_1321857,inst_1321859);
var inst_1321865 = cljs.core.async.muxch_STAR_.call(null,inst_1321864);
var inst_1321866 = cljs.core.async.close_BANG_.call(null,inst_1321865);
var inst_1321867 = (inst_1321859 + (1));
var tmp1321945 = inst_1321857;
var tmp1321946 = inst_1321858;
var tmp1321947 = inst_1321856;
var inst_1321856__$1 = tmp1321947;
var inst_1321857__$1 = tmp1321945;
var inst_1321858__$1 = tmp1321946;
var inst_1321859__$1 = inst_1321867;
var state_1321915__$1 = (function (){var statearr_1321951 = state_1321915;
(statearr_1321951[(12)] = inst_1321859__$1);

(statearr_1321951[(17)] = inst_1321866);

(statearr_1321951[(14)] = inst_1321857__$1);

(statearr_1321951[(15)] = inst_1321858__$1);

(statearr_1321951[(16)] = inst_1321856__$1);

return statearr_1321951;
})();
var statearr_1321952_1321988 = state_1321915__$1;
(statearr_1321952_1321988[(2)] = null);

(statearr_1321952_1321988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (18))){
var inst_1321885 = (state_1321915[(2)]);
var state_1321915__$1 = state_1321915;
var statearr_1321953_1321989 = state_1321915__$1;
(statearr_1321953_1321989[(2)] = inst_1321885);

(statearr_1321953_1321989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1321916 === (8))){
var inst_1321859 = (state_1321915[(12)]);
var inst_1321858 = (state_1321915[(15)]);
var inst_1321861 = (inst_1321859 < inst_1321858);
var inst_1321862 = inst_1321861;
var state_1321915__$1 = state_1321915;
if(cljs.core.truth_(inst_1321862)){
var statearr_1321954_1321990 = state_1321915__$1;
(statearr_1321954_1321990[(1)] = (10));

} else {
var statearr_1321955_1321991 = state_1321915__$1;
(statearr_1321955_1321991[(1)] = (11));

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
});})(c__9199__auto___1321963,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___1321963,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1321959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1321959[(0)] = state_machine__9185__auto__);

(statearr_1321959[(1)] = (1));

return statearr_1321959;
});
var state_machine__9185__auto____1 = (function (state_1321915){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1321915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1321960){if((e1321960 instanceof Object)){
var ex__9188__auto__ = e1321960;
var statearr_1321961_1321992 = state_1321915;
(statearr_1321961_1321992[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1321915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1321960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1321993 = state_1321915;
state_1321915 = G__1321993;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1321915){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1321915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1321963,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_1321962 = f__9200__auto__.call(null);
(statearr_1321962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1321963);

return statearr_1321962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1321963,mults,ensure_mult,p))
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
var c__9199__auto___1322130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1322100){
var state_val_1322101 = (state_1322100[(1)]);
if((state_val_1322101 === (7))){
var state_1322100__$1 = state_1322100;
var statearr_1322102_1322131 = state_1322100__$1;
(statearr_1322102_1322131[(2)] = null);

(statearr_1322102_1322131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (1))){
var state_1322100__$1 = state_1322100;
var statearr_1322103_1322132 = state_1322100__$1;
(statearr_1322103_1322132[(2)] = null);

(statearr_1322103_1322132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (4))){
var inst_1322064 = (state_1322100[(7)]);
var inst_1322066 = (inst_1322064 < cnt);
var state_1322100__$1 = state_1322100;
if(cljs.core.truth_(inst_1322066)){
var statearr_1322104_1322133 = state_1322100__$1;
(statearr_1322104_1322133[(1)] = (6));

} else {
var statearr_1322105_1322134 = state_1322100__$1;
(statearr_1322105_1322134[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (15))){
var inst_1322096 = (state_1322100[(2)]);
var state_1322100__$1 = state_1322100;
var statearr_1322106_1322135 = state_1322100__$1;
(statearr_1322106_1322135[(2)] = inst_1322096);

(statearr_1322106_1322135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (13))){
var inst_1322089 = cljs.core.async.close_BANG_.call(null,out);
var state_1322100__$1 = state_1322100;
var statearr_1322107_1322136 = state_1322100__$1;
(statearr_1322107_1322136[(2)] = inst_1322089);

(statearr_1322107_1322136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (6))){
var state_1322100__$1 = state_1322100;
var statearr_1322108_1322137 = state_1322100__$1;
(statearr_1322108_1322137[(2)] = null);

(statearr_1322108_1322137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (3))){
var inst_1322098 = (state_1322100[(2)]);
var state_1322100__$1 = state_1322100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322100__$1,inst_1322098);
} else {
if((state_val_1322101 === (12))){
var inst_1322086 = (state_1322100[(8)]);
var inst_1322086__$1 = (state_1322100[(2)]);
var inst_1322087 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1322086__$1);
var state_1322100__$1 = (function (){var statearr_1322109 = state_1322100;
(statearr_1322109[(8)] = inst_1322086__$1);

return statearr_1322109;
})();
if(cljs.core.truth_(inst_1322087)){
var statearr_1322110_1322138 = state_1322100__$1;
(statearr_1322110_1322138[(1)] = (13));

} else {
var statearr_1322111_1322139 = state_1322100__$1;
(statearr_1322111_1322139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (2))){
var inst_1322063 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1322064 = (0);
var state_1322100__$1 = (function (){var statearr_1322112 = state_1322100;
(statearr_1322112[(9)] = inst_1322063);

(statearr_1322112[(7)] = inst_1322064);

return statearr_1322112;
})();
var statearr_1322113_1322140 = state_1322100__$1;
(statearr_1322113_1322140[(2)] = null);

(statearr_1322113_1322140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (11))){
var inst_1322064 = (state_1322100[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1322100,(10),Object,null,(9));
var inst_1322073 = chs__$1.call(null,inst_1322064);
var inst_1322074 = done.call(null,inst_1322064);
var inst_1322075 = cljs.core.async.take_BANG_.call(null,inst_1322073,inst_1322074);
var state_1322100__$1 = state_1322100;
var statearr_1322114_1322141 = state_1322100__$1;
(statearr_1322114_1322141[(2)] = inst_1322075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (9))){
var inst_1322064 = (state_1322100[(7)]);
var inst_1322077 = (state_1322100[(2)]);
var inst_1322078 = (inst_1322064 + (1));
var inst_1322064__$1 = inst_1322078;
var state_1322100__$1 = (function (){var statearr_1322115 = state_1322100;
(statearr_1322115[(10)] = inst_1322077);

(statearr_1322115[(7)] = inst_1322064__$1);

return statearr_1322115;
})();
var statearr_1322116_1322142 = state_1322100__$1;
(statearr_1322116_1322142[(2)] = null);

(statearr_1322116_1322142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (5))){
var inst_1322084 = (state_1322100[(2)]);
var state_1322100__$1 = (function (){var statearr_1322117 = state_1322100;
(statearr_1322117[(11)] = inst_1322084);

return statearr_1322117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322100__$1,(12),dchan);
} else {
if((state_val_1322101 === (14))){
var inst_1322086 = (state_1322100[(8)]);
var inst_1322091 = cljs.core.apply.call(null,f,inst_1322086);
var state_1322100__$1 = state_1322100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322100__$1,(16),out,inst_1322091);
} else {
if((state_val_1322101 === (16))){
var inst_1322093 = (state_1322100[(2)]);
var state_1322100__$1 = (function (){var statearr_1322118 = state_1322100;
(statearr_1322118[(12)] = inst_1322093);

return statearr_1322118;
})();
var statearr_1322119_1322143 = state_1322100__$1;
(statearr_1322119_1322143[(2)] = null);

(statearr_1322119_1322143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (10))){
var inst_1322068 = (state_1322100[(2)]);
var inst_1322069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1322100__$1 = (function (){var statearr_1322120 = state_1322100;
(statearr_1322120[(13)] = inst_1322068);

return statearr_1322120;
})();
var statearr_1322121_1322144 = state_1322100__$1;
(statearr_1322121_1322144[(2)] = inst_1322069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322101 === (8))){
var inst_1322082 = (state_1322100[(2)]);
var state_1322100__$1 = state_1322100;
var statearr_1322122_1322145 = state_1322100__$1;
(statearr_1322122_1322145[(2)] = inst_1322082);

(statearr_1322122_1322145[(1)] = (5));


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
});})(c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322126[(0)] = state_machine__9185__auto__);

(statearr_1322126[(1)] = (1));

return statearr_1322126;
});
var state_machine__9185__auto____1 = (function (state_1322100){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322127){if((e1322127 instanceof Object)){
var ex__9188__auto__ = e1322127;
var statearr_1322128_1322146 = state_1322100;
(statearr_1322128_1322146[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322147 = state_1322100;
state_1322100 = G__1322147;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322100){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1322129 = f__9200__auto__.call(null);
(statearr_1322129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322130);

return statearr_1322129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322130,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___1322255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322255,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322255,out){
return (function (state_1322231){
var state_val_1322232 = (state_1322231[(1)]);
if((state_val_1322232 === (7))){
var inst_1322211 = (state_1322231[(7)]);
var inst_1322210 = (state_1322231[(8)]);
var inst_1322210__$1 = (state_1322231[(2)]);
var inst_1322211__$1 = cljs.core.nth.call(null,inst_1322210__$1,(0),null);
var inst_1322212 = cljs.core.nth.call(null,inst_1322210__$1,(1),null);
var inst_1322213 = (inst_1322211__$1 == null);
var state_1322231__$1 = (function (){var statearr_1322233 = state_1322231;
(statearr_1322233[(9)] = inst_1322212);

(statearr_1322233[(7)] = inst_1322211__$1);

(statearr_1322233[(8)] = inst_1322210__$1);

return statearr_1322233;
})();
if(cljs.core.truth_(inst_1322213)){
var statearr_1322234_1322256 = state_1322231__$1;
(statearr_1322234_1322256[(1)] = (8));

} else {
var statearr_1322235_1322257 = state_1322231__$1;
(statearr_1322235_1322257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (1))){
var inst_1322202 = cljs.core.vec.call(null,chs);
var inst_1322203 = inst_1322202;
var state_1322231__$1 = (function (){var statearr_1322236 = state_1322231;
(statearr_1322236[(10)] = inst_1322203);

return statearr_1322236;
})();
var statearr_1322237_1322258 = state_1322231__$1;
(statearr_1322237_1322258[(2)] = null);

(statearr_1322237_1322258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (4))){
var inst_1322203 = (state_1322231[(10)]);
var state_1322231__$1 = state_1322231;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1322231__$1,(7),inst_1322203);
} else {
if((state_val_1322232 === (6))){
var inst_1322227 = (state_1322231[(2)]);
var state_1322231__$1 = state_1322231;
var statearr_1322238_1322259 = state_1322231__$1;
(statearr_1322238_1322259[(2)] = inst_1322227);

(statearr_1322238_1322259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (3))){
var inst_1322229 = (state_1322231[(2)]);
var state_1322231__$1 = state_1322231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322231__$1,inst_1322229);
} else {
if((state_val_1322232 === (2))){
var inst_1322203 = (state_1322231[(10)]);
var inst_1322205 = cljs.core.count.call(null,inst_1322203);
var inst_1322206 = (inst_1322205 > (0));
var state_1322231__$1 = state_1322231;
if(cljs.core.truth_(inst_1322206)){
var statearr_1322240_1322260 = state_1322231__$1;
(statearr_1322240_1322260[(1)] = (4));

} else {
var statearr_1322241_1322261 = state_1322231__$1;
(statearr_1322241_1322261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (11))){
var inst_1322203 = (state_1322231[(10)]);
var inst_1322220 = (state_1322231[(2)]);
var tmp1322239 = inst_1322203;
var inst_1322203__$1 = tmp1322239;
var state_1322231__$1 = (function (){var statearr_1322242 = state_1322231;
(statearr_1322242[(10)] = inst_1322203__$1);

(statearr_1322242[(11)] = inst_1322220);

return statearr_1322242;
})();
var statearr_1322243_1322262 = state_1322231__$1;
(statearr_1322243_1322262[(2)] = null);

(statearr_1322243_1322262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (9))){
var inst_1322211 = (state_1322231[(7)]);
var state_1322231__$1 = state_1322231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322231__$1,(11),out,inst_1322211);
} else {
if((state_val_1322232 === (5))){
var inst_1322225 = cljs.core.async.close_BANG_.call(null,out);
var state_1322231__$1 = state_1322231;
var statearr_1322244_1322263 = state_1322231__$1;
(statearr_1322244_1322263[(2)] = inst_1322225);

(statearr_1322244_1322263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (10))){
var inst_1322223 = (state_1322231[(2)]);
var state_1322231__$1 = state_1322231;
var statearr_1322245_1322264 = state_1322231__$1;
(statearr_1322245_1322264[(2)] = inst_1322223);

(statearr_1322245_1322264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322232 === (8))){
var inst_1322212 = (state_1322231[(9)]);
var inst_1322211 = (state_1322231[(7)]);
var inst_1322203 = (state_1322231[(10)]);
var inst_1322210 = (state_1322231[(8)]);
var inst_1322215 = (function (){var c = inst_1322212;
var v = inst_1322211;
var vec__1322208 = inst_1322210;
var cs = inst_1322203;
return ((function (c,v,vec__1322208,cs,inst_1322212,inst_1322211,inst_1322203,inst_1322210,state_val_1322232,c__9199__auto___1322255,out){
return (function (p1__1322148_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1322148_SHARP_);
});
;})(c,v,vec__1322208,cs,inst_1322212,inst_1322211,inst_1322203,inst_1322210,state_val_1322232,c__9199__auto___1322255,out))
})();
var inst_1322216 = cljs.core.filterv.call(null,inst_1322215,inst_1322203);
var inst_1322203__$1 = inst_1322216;
var state_1322231__$1 = (function (){var statearr_1322246 = state_1322231;
(statearr_1322246[(10)] = inst_1322203__$1);

return statearr_1322246;
})();
var statearr_1322247_1322265 = state_1322231__$1;
(statearr_1322247_1322265[(2)] = null);

(statearr_1322247_1322265[(1)] = (2));


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
});})(c__9199__auto___1322255,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1322255,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322251[(0)] = state_machine__9185__auto__);

(statearr_1322251[(1)] = (1));

return statearr_1322251;
});
var state_machine__9185__auto____1 = (function (state_1322231){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322252){if((e1322252 instanceof Object)){
var ex__9188__auto__ = e1322252;
var statearr_1322253_1322266 = state_1322231;
(statearr_1322253_1322266[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322267 = state_1322231;
state_1322231 = G__1322267;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322231){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322255,out))
})();
var state__9201__auto__ = (function (){var statearr_1322254 = f__9200__auto__.call(null);
(statearr_1322254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322255);

return statearr_1322254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322255,out))
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
var c__9199__auto___1322360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322360,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322360,out){
return (function (state_1322337){
var state_val_1322338 = (state_1322337[(1)]);
if((state_val_1322338 === (7))){
var inst_1322319 = (state_1322337[(7)]);
var inst_1322319__$1 = (state_1322337[(2)]);
var inst_1322320 = (inst_1322319__$1 == null);
var inst_1322321 = cljs.core.not.call(null,inst_1322320);
var state_1322337__$1 = (function (){var statearr_1322339 = state_1322337;
(statearr_1322339[(7)] = inst_1322319__$1);

return statearr_1322339;
})();
if(inst_1322321){
var statearr_1322340_1322361 = state_1322337__$1;
(statearr_1322340_1322361[(1)] = (8));

} else {
var statearr_1322341_1322362 = state_1322337__$1;
(statearr_1322341_1322362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (1))){
var inst_1322314 = (0);
var state_1322337__$1 = (function (){var statearr_1322342 = state_1322337;
(statearr_1322342[(8)] = inst_1322314);

return statearr_1322342;
})();
var statearr_1322343_1322363 = state_1322337__$1;
(statearr_1322343_1322363[(2)] = null);

(statearr_1322343_1322363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (4))){
var state_1322337__$1 = state_1322337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322337__$1,(7),ch);
} else {
if((state_val_1322338 === (6))){
var inst_1322332 = (state_1322337[(2)]);
var state_1322337__$1 = state_1322337;
var statearr_1322344_1322364 = state_1322337__$1;
(statearr_1322344_1322364[(2)] = inst_1322332);

(statearr_1322344_1322364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (3))){
var inst_1322334 = (state_1322337[(2)]);
var inst_1322335 = cljs.core.async.close_BANG_.call(null,out);
var state_1322337__$1 = (function (){var statearr_1322345 = state_1322337;
(statearr_1322345[(9)] = inst_1322334);

return statearr_1322345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322337__$1,inst_1322335);
} else {
if((state_val_1322338 === (2))){
var inst_1322314 = (state_1322337[(8)]);
var inst_1322316 = (inst_1322314 < n);
var state_1322337__$1 = state_1322337;
if(cljs.core.truth_(inst_1322316)){
var statearr_1322346_1322365 = state_1322337__$1;
(statearr_1322346_1322365[(1)] = (4));

} else {
var statearr_1322347_1322366 = state_1322337__$1;
(statearr_1322347_1322366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (11))){
var inst_1322314 = (state_1322337[(8)]);
var inst_1322324 = (state_1322337[(2)]);
var inst_1322325 = (inst_1322314 + (1));
var inst_1322314__$1 = inst_1322325;
var state_1322337__$1 = (function (){var statearr_1322348 = state_1322337;
(statearr_1322348[(10)] = inst_1322324);

(statearr_1322348[(8)] = inst_1322314__$1);

return statearr_1322348;
})();
var statearr_1322349_1322367 = state_1322337__$1;
(statearr_1322349_1322367[(2)] = null);

(statearr_1322349_1322367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (9))){
var state_1322337__$1 = state_1322337;
var statearr_1322350_1322368 = state_1322337__$1;
(statearr_1322350_1322368[(2)] = null);

(statearr_1322350_1322368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (5))){
var state_1322337__$1 = state_1322337;
var statearr_1322351_1322369 = state_1322337__$1;
(statearr_1322351_1322369[(2)] = null);

(statearr_1322351_1322369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (10))){
var inst_1322329 = (state_1322337[(2)]);
var state_1322337__$1 = state_1322337;
var statearr_1322352_1322370 = state_1322337__$1;
(statearr_1322352_1322370[(2)] = inst_1322329);

(statearr_1322352_1322370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322338 === (8))){
var inst_1322319 = (state_1322337[(7)]);
var state_1322337__$1 = state_1322337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322337__$1,(11),out,inst_1322319);
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
});})(c__9199__auto___1322360,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1322360,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322356[(0)] = state_machine__9185__auto__);

(statearr_1322356[(1)] = (1));

return statearr_1322356;
});
var state_machine__9185__auto____1 = (function (state_1322337){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322357){if((e1322357 instanceof Object)){
var ex__9188__auto__ = e1322357;
var statearr_1322358_1322371 = state_1322337;
(statearr_1322358_1322371[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322372 = state_1322337;
state_1322337 = G__1322372;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322337){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322360,out))
})();
var state__9201__auto__ = (function (){var statearr_1322359 = f__9200__auto__.call(null);
(statearr_1322359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322360);

return statearr_1322359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322360,out))
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
if(typeof cljs.core.async.t1322380 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1322380 = (function (ch,f,map_LT_,meta1322381){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta1322381 = meta1322381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t1322383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1322383 = (function (fn1,_,meta1322381,map_LT_,f,ch,meta1322384){
this.fn1 = fn1;
this._ = _;
this.meta1322381 = meta1322381;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1322384 = meta1322384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1322383.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1322383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t1322383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1322373_SHARP_){
return f1.call(null,(((p1__1322373_SHARP_ == null))?null:self__.f.call(null,p1__1322373_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t1322383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1322385){
var self__ = this;
var _1322385__$1 = this;
return self__.meta1322384;
});})(___$1))
;

cljs.core.async.t1322383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1322385,meta1322384__$1){
var self__ = this;
var _1322385__$1 = this;
return (new cljs.core.async.t1322383(self__.fn1,self__._,self__.meta1322381,self__.map_LT_,self__.f,self__.ch,meta1322384__$1));
});})(___$1))
;

cljs.core.async.t1322383.cljs$lang$type = true;

cljs.core.async.t1322383.cljs$lang$ctorStr = "cljs.core.async/t1322383";

cljs.core.async.t1322383.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1322383");
});})(___$1))
;

cljs.core.async.__GT_t1322383 = ((function (___$1){
return (function __GT_t1322383(fn1__$1,___$2,meta1322381__$1,map_LT___$1,f__$1,ch__$1,meta1322384){
return (new cljs.core.async.t1322383(fn1__$1,___$2,meta1322381__$1,map_LT___$1,f__$1,ch__$1,meta1322384));
});})(___$1))
;

}

return (new cljs.core.async.t1322383(fn1,___$1,self__.meta1322381,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1322380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1322380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1322382){
var self__ = this;
var _1322382__$1 = this;
return self__.meta1322381;
});

cljs.core.async.t1322380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1322382,meta1322381__$1){
var self__ = this;
var _1322382__$1 = this;
return (new cljs.core.async.t1322380(self__.ch,self__.f,self__.map_LT_,meta1322381__$1));
});

cljs.core.async.t1322380.cljs$lang$type = true;

cljs.core.async.t1322380.cljs$lang$ctorStr = "cljs.core.async/t1322380";

cljs.core.async.t1322380.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1322380");
});

cljs.core.async.__GT_t1322380 = (function __GT_t1322380(ch__$1,f__$1,map_LT___$1,meta1322381){
return (new cljs.core.async.t1322380(ch__$1,f__$1,map_LT___$1,meta1322381));
});

}

return (new cljs.core.async.t1322380(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t1322389 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1322389 = (function (ch,f,map_GT_,meta1322390){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta1322390 = meta1322390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1322389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1322389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1322391){
var self__ = this;
var _1322391__$1 = this;
return self__.meta1322390;
});

cljs.core.async.t1322389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1322391,meta1322390__$1){
var self__ = this;
var _1322391__$1 = this;
return (new cljs.core.async.t1322389(self__.ch,self__.f,self__.map_GT_,meta1322390__$1));
});

cljs.core.async.t1322389.cljs$lang$type = true;

cljs.core.async.t1322389.cljs$lang$ctorStr = "cljs.core.async/t1322389";

cljs.core.async.t1322389.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1322389");
});

cljs.core.async.__GT_t1322389 = (function __GT_t1322389(ch__$1,f__$1,map_GT___$1,meta1322390){
return (new cljs.core.async.t1322389(ch__$1,f__$1,map_GT___$1,meta1322390));
});

}

return (new cljs.core.async.t1322389(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t1322395 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1322395 = (function (ch,p,filter_GT_,meta1322396){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta1322396 = meta1322396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1322395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1322395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1322397){
var self__ = this;
var _1322397__$1 = this;
return self__.meta1322396;
});

cljs.core.async.t1322395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1322397,meta1322396__$1){
var self__ = this;
var _1322397__$1 = this;
return (new cljs.core.async.t1322395(self__.ch,self__.p,self__.filter_GT_,meta1322396__$1));
});

cljs.core.async.t1322395.cljs$lang$type = true;

cljs.core.async.t1322395.cljs$lang$ctorStr = "cljs.core.async/t1322395";

cljs.core.async.t1322395.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1322395");
});

cljs.core.async.__GT_t1322395 = (function __GT_t1322395(ch__$1,p__$1,filter_GT___$1,meta1322396){
return (new cljs.core.async.t1322395(ch__$1,p__$1,filter_GT___$1,meta1322396));
});

}

return (new cljs.core.async.t1322395(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1322480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322480,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322480,out){
return (function (state_1322459){
var state_val_1322460 = (state_1322459[(1)]);
if((state_val_1322460 === (7))){
var inst_1322455 = (state_1322459[(2)]);
var state_1322459__$1 = state_1322459;
var statearr_1322461_1322481 = state_1322459__$1;
(statearr_1322461_1322481[(2)] = inst_1322455);

(statearr_1322461_1322481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (1))){
var state_1322459__$1 = state_1322459;
var statearr_1322462_1322482 = state_1322459__$1;
(statearr_1322462_1322482[(2)] = null);

(statearr_1322462_1322482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (4))){
var inst_1322441 = (state_1322459[(7)]);
var inst_1322441__$1 = (state_1322459[(2)]);
var inst_1322442 = (inst_1322441__$1 == null);
var state_1322459__$1 = (function (){var statearr_1322463 = state_1322459;
(statearr_1322463[(7)] = inst_1322441__$1);

return statearr_1322463;
})();
if(cljs.core.truth_(inst_1322442)){
var statearr_1322464_1322483 = state_1322459__$1;
(statearr_1322464_1322483[(1)] = (5));

} else {
var statearr_1322465_1322484 = state_1322459__$1;
(statearr_1322465_1322484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (6))){
var inst_1322441 = (state_1322459[(7)]);
var inst_1322446 = p.call(null,inst_1322441);
var state_1322459__$1 = state_1322459;
if(cljs.core.truth_(inst_1322446)){
var statearr_1322466_1322485 = state_1322459__$1;
(statearr_1322466_1322485[(1)] = (8));

} else {
var statearr_1322467_1322486 = state_1322459__$1;
(statearr_1322467_1322486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (3))){
var inst_1322457 = (state_1322459[(2)]);
var state_1322459__$1 = state_1322459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322459__$1,inst_1322457);
} else {
if((state_val_1322460 === (2))){
var state_1322459__$1 = state_1322459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322459__$1,(4),ch);
} else {
if((state_val_1322460 === (11))){
var inst_1322449 = (state_1322459[(2)]);
var state_1322459__$1 = state_1322459;
var statearr_1322468_1322487 = state_1322459__$1;
(statearr_1322468_1322487[(2)] = inst_1322449);

(statearr_1322468_1322487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (9))){
var state_1322459__$1 = state_1322459;
var statearr_1322469_1322488 = state_1322459__$1;
(statearr_1322469_1322488[(2)] = null);

(statearr_1322469_1322488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (5))){
var inst_1322444 = cljs.core.async.close_BANG_.call(null,out);
var state_1322459__$1 = state_1322459;
var statearr_1322470_1322489 = state_1322459__$1;
(statearr_1322470_1322489[(2)] = inst_1322444);

(statearr_1322470_1322489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (10))){
var inst_1322452 = (state_1322459[(2)]);
var state_1322459__$1 = (function (){var statearr_1322471 = state_1322459;
(statearr_1322471[(8)] = inst_1322452);

return statearr_1322471;
})();
var statearr_1322472_1322490 = state_1322459__$1;
(statearr_1322472_1322490[(2)] = null);

(statearr_1322472_1322490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322460 === (8))){
var inst_1322441 = (state_1322459[(7)]);
var state_1322459__$1 = state_1322459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322459__$1,(11),out,inst_1322441);
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
});})(c__9199__auto___1322480,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1322480,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322476 = [null,null,null,null,null,null,null,null,null];
(statearr_1322476[(0)] = state_machine__9185__auto__);

(statearr_1322476[(1)] = (1));

return statearr_1322476;
});
var state_machine__9185__auto____1 = (function (state_1322459){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322477){if((e1322477 instanceof Object)){
var ex__9188__auto__ = e1322477;
var statearr_1322478_1322491 = state_1322459;
(statearr_1322478_1322491[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322492 = state_1322459;
state_1322459 = G__1322492;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322459){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322480,out))
})();
var state__9201__auto__ = (function (){var statearr_1322479 = f__9200__auto__.call(null);
(statearr_1322479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322480);

return statearr_1322479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322480,out))
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
return (function (state_1322658){
var state_val_1322659 = (state_1322658[(1)]);
if((state_val_1322659 === (7))){
var inst_1322654 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
var statearr_1322660_1322701 = state_1322658__$1;
(statearr_1322660_1322701[(2)] = inst_1322654);

(statearr_1322660_1322701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (20))){
var inst_1322624 = (state_1322658[(7)]);
var inst_1322635 = (state_1322658[(2)]);
var inst_1322636 = cljs.core.next.call(null,inst_1322624);
var inst_1322610 = inst_1322636;
var inst_1322611 = null;
var inst_1322612 = (0);
var inst_1322613 = (0);
var state_1322658__$1 = (function (){var statearr_1322661 = state_1322658;
(statearr_1322661[(8)] = inst_1322611);

(statearr_1322661[(9)] = inst_1322613);

(statearr_1322661[(10)] = inst_1322612);

(statearr_1322661[(11)] = inst_1322610);

(statearr_1322661[(12)] = inst_1322635);

return statearr_1322661;
})();
var statearr_1322662_1322702 = state_1322658__$1;
(statearr_1322662_1322702[(2)] = null);

(statearr_1322662_1322702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (1))){
var state_1322658__$1 = state_1322658;
var statearr_1322663_1322703 = state_1322658__$1;
(statearr_1322663_1322703[(2)] = null);

(statearr_1322663_1322703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (4))){
var inst_1322599 = (state_1322658[(13)]);
var inst_1322599__$1 = (state_1322658[(2)]);
var inst_1322600 = (inst_1322599__$1 == null);
var state_1322658__$1 = (function (){var statearr_1322664 = state_1322658;
(statearr_1322664[(13)] = inst_1322599__$1);

return statearr_1322664;
})();
if(cljs.core.truth_(inst_1322600)){
var statearr_1322665_1322704 = state_1322658__$1;
(statearr_1322665_1322704[(1)] = (5));

} else {
var statearr_1322666_1322705 = state_1322658__$1;
(statearr_1322666_1322705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (15))){
var state_1322658__$1 = state_1322658;
var statearr_1322670_1322706 = state_1322658__$1;
(statearr_1322670_1322706[(2)] = null);

(statearr_1322670_1322706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (21))){
var state_1322658__$1 = state_1322658;
var statearr_1322671_1322707 = state_1322658__$1;
(statearr_1322671_1322707[(2)] = null);

(statearr_1322671_1322707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (13))){
var inst_1322611 = (state_1322658[(8)]);
var inst_1322613 = (state_1322658[(9)]);
var inst_1322612 = (state_1322658[(10)]);
var inst_1322610 = (state_1322658[(11)]);
var inst_1322620 = (state_1322658[(2)]);
var inst_1322621 = (inst_1322613 + (1));
var tmp1322667 = inst_1322611;
var tmp1322668 = inst_1322612;
var tmp1322669 = inst_1322610;
var inst_1322610__$1 = tmp1322669;
var inst_1322611__$1 = tmp1322667;
var inst_1322612__$1 = tmp1322668;
var inst_1322613__$1 = inst_1322621;
var state_1322658__$1 = (function (){var statearr_1322672 = state_1322658;
(statearr_1322672[(8)] = inst_1322611__$1);

(statearr_1322672[(9)] = inst_1322613__$1);

(statearr_1322672[(10)] = inst_1322612__$1);

(statearr_1322672[(11)] = inst_1322610__$1);

(statearr_1322672[(14)] = inst_1322620);

return statearr_1322672;
})();
var statearr_1322673_1322708 = state_1322658__$1;
(statearr_1322673_1322708[(2)] = null);

(statearr_1322673_1322708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (22))){
var state_1322658__$1 = state_1322658;
var statearr_1322674_1322709 = state_1322658__$1;
(statearr_1322674_1322709[(2)] = null);

(statearr_1322674_1322709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (6))){
var inst_1322599 = (state_1322658[(13)]);
var inst_1322608 = f.call(null,inst_1322599);
var inst_1322609 = cljs.core.seq.call(null,inst_1322608);
var inst_1322610 = inst_1322609;
var inst_1322611 = null;
var inst_1322612 = (0);
var inst_1322613 = (0);
var state_1322658__$1 = (function (){var statearr_1322675 = state_1322658;
(statearr_1322675[(8)] = inst_1322611);

(statearr_1322675[(9)] = inst_1322613);

(statearr_1322675[(10)] = inst_1322612);

(statearr_1322675[(11)] = inst_1322610);

return statearr_1322675;
})();
var statearr_1322676_1322710 = state_1322658__$1;
(statearr_1322676_1322710[(2)] = null);

(statearr_1322676_1322710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (17))){
var inst_1322624 = (state_1322658[(7)]);
var inst_1322628 = cljs.core.chunk_first.call(null,inst_1322624);
var inst_1322629 = cljs.core.chunk_rest.call(null,inst_1322624);
var inst_1322630 = cljs.core.count.call(null,inst_1322628);
var inst_1322610 = inst_1322629;
var inst_1322611 = inst_1322628;
var inst_1322612 = inst_1322630;
var inst_1322613 = (0);
var state_1322658__$1 = (function (){var statearr_1322677 = state_1322658;
(statearr_1322677[(8)] = inst_1322611);

(statearr_1322677[(9)] = inst_1322613);

(statearr_1322677[(10)] = inst_1322612);

(statearr_1322677[(11)] = inst_1322610);

return statearr_1322677;
})();
var statearr_1322678_1322711 = state_1322658__$1;
(statearr_1322678_1322711[(2)] = null);

(statearr_1322678_1322711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (3))){
var inst_1322656 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322658__$1,inst_1322656);
} else {
if((state_val_1322659 === (12))){
var inst_1322644 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
var statearr_1322679_1322712 = state_1322658__$1;
(statearr_1322679_1322712[(2)] = inst_1322644);

(statearr_1322679_1322712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (2))){
var state_1322658__$1 = state_1322658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322658__$1,(4),in$);
} else {
if((state_val_1322659 === (23))){
var inst_1322652 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
var statearr_1322680_1322713 = state_1322658__$1;
(statearr_1322680_1322713[(2)] = inst_1322652);

(statearr_1322680_1322713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (19))){
var inst_1322639 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
var statearr_1322681_1322714 = state_1322658__$1;
(statearr_1322681_1322714[(2)] = inst_1322639);

(statearr_1322681_1322714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (11))){
var inst_1322624 = (state_1322658[(7)]);
var inst_1322610 = (state_1322658[(11)]);
var inst_1322624__$1 = cljs.core.seq.call(null,inst_1322610);
var state_1322658__$1 = (function (){var statearr_1322682 = state_1322658;
(statearr_1322682[(7)] = inst_1322624__$1);

return statearr_1322682;
})();
if(inst_1322624__$1){
var statearr_1322683_1322715 = state_1322658__$1;
(statearr_1322683_1322715[(1)] = (14));

} else {
var statearr_1322684_1322716 = state_1322658__$1;
(statearr_1322684_1322716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (9))){
var inst_1322646 = (state_1322658[(2)]);
var inst_1322647 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1322658__$1 = (function (){var statearr_1322685 = state_1322658;
(statearr_1322685[(15)] = inst_1322646);

return statearr_1322685;
})();
if(cljs.core.truth_(inst_1322647)){
var statearr_1322686_1322717 = state_1322658__$1;
(statearr_1322686_1322717[(1)] = (21));

} else {
var statearr_1322687_1322718 = state_1322658__$1;
(statearr_1322687_1322718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (5))){
var inst_1322602 = cljs.core.async.close_BANG_.call(null,out);
var state_1322658__$1 = state_1322658;
var statearr_1322688_1322719 = state_1322658__$1;
(statearr_1322688_1322719[(2)] = inst_1322602);

(statearr_1322688_1322719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (14))){
var inst_1322624 = (state_1322658[(7)]);
var inst_1322626 = cljs.core.chunked_seq_QMARK_.call(null,inst_1322624);
var state_1322658__$1 = state_1322658;
if(inst_1322626){
var statearr_1322689_1322720 = state_1322658__$1;
(statearr_1322689_1322720[(1)] = (17));

} else {
var statearr_1322690_1322721 = state_1322658__$1;
(statearr_1322690_1322721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (16))){
var inst_1322642 = (state_1322658[(2)]);
var state_1322658__$1 = state_1322658;
var statearr_1322691_1322722 = state_1322658__$1;
(statearr_1322691_1322722[(2)] = inst_1322642);

(statearr_1322691_1322722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322659 === (10))){
var inst_1322611 = (state_1322658[(8)]);
var inst_1322613 = (state_1322658[(9)]);
var inst_1322618 = cljs.core._nth.call(null,inst_1322611,inst_1322613);
var state_1322658__$1 = state_1322658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322658__$1,(13),out,inst_1322618);
} else {
if((state_val_1322659 === (18))){
var inst_1322624 = (state_1322658[(7)]);
var inst_1322633 = cljs.core.first.call(null,inst_1322624);
var state_1322658__$1 = state_1322658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322658__$1,(20),out,inst_1322633);
} else {
if((state_val_1322659 === (8))){
var inst_1322613 = (state_1322658[(9)]);
var inst_1322612 = (state_1322658[(10)]);
var inst_1322615 = (inst_1322613 < inst_1322612);
var inst_1322616 = inst_1322615;
var state_1322658__$1 = state_1322658;
if(cljs.core.truth_(inst_1322616)){
var statearr_1322692_1322723 = state_1322658__$1;
(statearr_1322692_1322723[(1)] = (10));

} else {
var statearr_1322693_1322724 = state_1322658__$1;
(statearr_1322693_1322724[(1)] = (11));

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
var statearr_1322697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322697[(0)] = state_machine__9185__auto__);

(statearr_1322697[(1)] = (1));

return statearr_1322697;
});
var state_machine__9185__auto____1 = (function (state_1322658){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322698){if((e1322698 instanceof Object)){
var ex__9188__auto__ = e1322698;
var statearr_1322699_1322725 = state_1322658;
(statearr_1322699_1322725[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322726 = state_1322658;
state_1322658 = G__1322726;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322658){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1322700 = f__9200__auto__.call(null);
(statearr_1322700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1322700;
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
var c__9199__auto___1322823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322823,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322823,out){
return (function (state_1322798){
var state_val_1322799 = (state_1322798[(1)]);
if((state_val_1322799 === (7))){
var inst_1322793 = (state_1322798[(2)]);
var state_1322798__$1 = state_1322798;
var statearr_1322800_1322824 = state_1322798__$1;
(statearr_1322800_1322824[(2)] = inst_1322793);

(statearr_1322800_1322824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (1))){
var inst_1322775 = null;
var state_1322798__$1 = (function (){var statearr_1322801 = state_1322798;
(statearr_1322801[(7)] = inst_1322775);

return statearr_1322801;
})();
var statearr_1322802_1322825 = state_1322798__$1;
(statearr_1322802_1322825[(2)] = null);

(statearr_1322802_1322825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (4))){
var inst_1322778 = (state_1322798[(8)]);
var inst_1322778__$1 = (state_1322798[(2)]);
var inst_1322779 = (inst_1322778__$1 == null);
var inst_1322780 = cljs.core.not.call(null,inst_1322779);
var state_1322798__$1 = (function (){var statearr_1322803 = state_1322798;
(statearr_1322803[(8)] = inst_1322778__$1);

return statearr_1322803;
})();
if(inst_1322780){
var statearr_1322804_1322826 = state_1322798__$1;
(statearr_1322804_1322826[(1)] = (5));

} else {
var statearr_1322805_1322827 = state_1322798__$1;
(statearr_1322805_1322827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (6))){
var state_1322798__$1 = state_1322798;
var statearr_1322806_1322828 = state_1322798__$1;
(statearr_1322806_1322828[(2)] = null);

(statearr_1322806_1322828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (3))){
var inst_1322795 = (state_1322798[(2)]);
var inst_1322796 = cljs.core.async.close_BANG_.call(null,out);
var state_1322798__$1 = (function (){var statearr_1322807 = state_1322798;
(statearr_1322807[(9)] = inst_1322795);

return statearr_1322807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322798__$1,inst_1322796);
} else {
if((state_val_1322799 === (2))){
var state_1322798__$1 = state_1322798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322798__$1,(4),ch);
} else {
if((state_val_1322799 === (11))){
var inst_1322778 = (state_1322798[(8)]);
var inst_1322787 = (state_1322798[(2)]);
var inst_1322775 = inst_1322778;
var state_1322798__$1 = (function (){var statearr_1322808 = state_1322798;
(statearr_1322808[(7)] = inst_1322775);

(statearr_1322808[(10)] = inst_1322787);

return statearr_1322808;
})();
var statearr_1322809_1322829 = state_1322798__$1;
(statearr_1322809_1322829[(2)] = null);

(statearr_1322809_1322829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (9))){
var inst_1322778 = (state_1322798[(8)]);
var state_1322798__$1 = state_1322798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322798__$1,(11),out,inst_1322778);
} else {
if((state_val_1322799 === (5))){
var inst_1322775 = (state_1322798[(7)]);
var inst_1322778 = (state_1322798[(8)]);
var inst_1322782 = cljs.core._EQ_.call(null,inst_1322778,inst_1322775);
var state_1322798__$1 = state_1322798;
if(inst_1322782){
var statearr_1322811_1322830 = state_1322798__$1;
(statearr_1322811_1322830[(1)] = (8));

} else {
var statearr_1322812_1322831 = state_1322798__$1;
(statearr_1322812_1322831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (10))){
var inst_1322790 = (state_1322798[(2)]);
var state_1322798__$1 = state_1322798;
var statearr_1322813_1322832 = state_1322798__$1;
(statearr_1322813_1322832[(2)] = inst_1322790);

(statearr_1322813_1322832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322799 === (8))){
var inst_1322775 = (state_1322798[(7)]);
var tmp1322810 = inst_1322775;
var inst_1322775__$1 = tmp1322810;
var state_1322798__$1 = (function (){var statearr_1322814 = state_1322798;
(statearr_1322814[(7)] = inst_1322775__$1);

return statearr_1322814;
})();
var statearr_1322815_1322833 = state_1322798__$1;
(statearr_1322815_1322833[(2)] = null);

(statearr_1322815_1322833[(1)] = (2));


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
});})(c__9199__auto___1322823,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1322823,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322819[(0)] = state_machine__9185__auto__);

(statearr_1322819[(1)] = (1));

return statearr_1322819;
});
var state_machine__9185__auto____1 = (function (state_1322798){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322820){if((e1322820 instanceof Object)){
var ex__9188__auto__ = e1322820;
var statearr_1322821_1322834 = state_1322798;
(statearr_1322821_1322834[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322835 = state_1322798;
state_1322798 = G__1322835;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322798){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322823,out))
})();
var state__9201__auto__ = (function (){var statearr_1322822 = f__9200__auto__.call(null);
(statearr_1322822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322823);

return statearr_1322822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322823,out))
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
var c__9199__auto___1322970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1322970,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1322970,out){
return (function (state_1322940){
var state_val_1322941 = (state_1322940[(1)]);
if((state_val_1322941 === (7))){
var inst_1322936 = (state_1322940[(2)]);
var state_1322940__$1 = state_1322940;
var statearr_1322942_1322971 = state_1322940__$1;
(statearr_1322942_1322971[(2)] = inst_1322936);

(statearr_1322942_1322971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (1))){
var inst_1322903 = (new Array(n));
var inst_1322904 = inst_1322903;
var inst_1322905 = (0);
var state_1322940__$1 = (function (){var statearr_1322943 = state_1322940;
(statearr_1322943[(7)] = inst_1322904);

(statearr_1322943[(8)] = inst_1322905);

return statearr_1322943;
})();
var statearr_1322944_1322972 = state_1322940__$1;
(statearr_1322944_1322972[(2)] = null);

(statearr_1322944_1322972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (4))){
var inst_1322908 = (state_1322940[(9)]);
var inst_1322908__$1 = (state_1322940[(2)]);
var inst_1322909 = (inst_1322908__$1 == null);
var inst_1322910 = cljs.core.not.call(null,inst_1322909);
var state_1322940__$1 = (function (){var statearr_1322945 = state_1322940;
(statearr_1322945[(9)] = inst_1322908__$1);

return statearr_1322945;
})();
if(inst_1322910){
var statearr_1322946_1322973 = state_1322940__$1;
(statearr_1322946_1322973[(1)] = (5));

} else {
var statearr_1322947_1322974 = state_1322940__$1;
(statearr_1322947_1322974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (15))){
var inst_1322930 = (state_1322940[(2)]);
var state_1322940__$1 = state_1322940;
var statearr_1322948_1322975 = state_1322940__$1;
(statearr_1322948_1322975[(2)] = inst_1322930);

(statearr_1322948_1322975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (13))){
var state_1322940__$1 = state_1322940;
var statearr_1322949_1322976 = state_1322940__$1;
(statearr_1322949_1322976[(2)] = null);

(statearr_1322949_1322976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (6))){
var inst_1322905 = (state_1322940[(8)]);
var inst_1322926 = (inst_1322905 > (0));
var state_1322940__$1 = state_1322940;
if(cljs.core.truth_(inst_1322926)){
var statearr_1322950_1322977 = state_1322940__$1;
(statearr_1322950_1322977[(1)] = (12));

} else {
var statearr_1322951_1322978 = state_1322940__$1;
(statearr_1322951_1322978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (3))){
var inst_1322938 = (state_1322940[(2)]);
var state_1322940__$1 = state_1322940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1322940__$1,inst_1322938);
} else {
if((state_val_1322941 === (12))){
var inst_1322904 = (state_1322940[(7)]);
var inst_1322928 = cljs.core.vec.call(null,inst_1322904);
var state_1322940__$1 = state_1322940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322940__$1,(15),out,inst_1322928);
} else {
if((state_val_1322941 === (2))){
var state_1322940__$1 = state_1322940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1322940__$1,(4),ch);
} else {
if((state_val_1322941 === (11))){
var inst_1322920 = (state_1322940[(2)]);
var inst_1322921 = (new Array(n));
var inst_1322904 = inst_1322921;
var inst_1322905 = (0);
var state_1322940__$1 = (function (){var statearr_1322952 = state_1322940;
(statearr_1322952[(10)] = inst_1322920);

(statearr_1322952[(7)] = inst_1322904);

(statearr_1322952[(8)] = inst_1322905);

return statearr_1322952;
})();
var statearr_1322953_1322979 = state_1322940__$1;
(statearr_1322953_1322979[(2)] = null);

(statearr_1322953_1322979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (9))){
var inst_1322904 = (state_1322940[(7)]);
var inst_1322918 = cljs.core.vec.call(null,inst_1322904);
var state_1322940__$1 = state_1322940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1322940__$1,(11),out,inst_1322918);
} else {
if((state_val_1322941 === (5))){
var inst_1322913 = (state_1322940[(11)]);
var inst_1322904 = (state_1322940[(7)]);
var inst_1322908 = (state_1322940[(9)]);
var inst_1322905 = (state_1322940[(8)]);
var inst_1322912 = (inst_1322904[inst_1322905] = inst_1322908);
var inst_1322913__$1 = (inst_1322905 + (1));
var inst_1322914 = (inst_1322913__$1 < n);
var state_1322940__$1 = (function (){var statearr_1322954 = state_1322940;
(statearr_1322954[(11)] = inst_1322913__$1);

(statearr_1322954[(12)] = inst_1322912);

return statearr_1322954;
})();
if(cljs.core.truth_(inst_1322914)){
var statearr_1322955_1322980 = state_1322940__$1;
(statearr_1322955_1322980[(1)] = (8));

} else {
var statearr_1322956_1322981 = state_1322940__$1;
(statearr_1322956_1322981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (14))){
var inst_1322933 = (state_1322940[(2)]);
var inst_1322934 = cljs.core.async.close_BANG_.call(null,out);
var state_1322940__$1 = (function (){var statearr_1322958 = state_1322940;
(statearr_1322958[(13)] = inst_1322933);

return statearr_1322958;
})();
var statearr_1322959_1322982 = state_1322940__$1;
(statearr_1322959_1322982[(2)] = inst_1322934);

(statearr_1322959_1322982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (10))){
var inst_1322924 = (state_1322940[(2)]);
var state_1322940__$1 = state_1322940;
var statearr_1322960_1322983 = state_1322940__$1;
(statearr_1322960_1322983[(2)] = inst_1322924);

(statearr_1322960_1322983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1322941 === (8))){
var inst_1322913 = (state_1322940[(11)]);
var inst_1322904 = (state_1322940[(7)]);
var tmp1322957 = inst_1322904;
var inst_1322904__$1 = tmp1322957;
var inst_1322905 = inst_1322913;
var state_1322940__$1 = (function (){var statearr_1322961 = state_1322940;
(statearr_1322961[(7)] = inst_1322904__$1);

(statearr_1322961[(8)] = inst_1322905);

return statearr_1322961;
})();
var statearr_1322962_1322984 = state_1322940__$1;
(statearr_1322962_1322984[(2)] = null);

(statearr_1322962_1322984[(1)] = (2));


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
});})(c__9199__auto___1322970,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1322970,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1322966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1322966[(0)] = state_machine__9185__auto__);

(statearr_1322966[(1)] = (1));

return statearr_1322966;
});
var state_machine__9185__auto____1 = (function (state_1322940){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1322940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1322967){if((e1322967 instanceof Object)){
var ex__9188__auto__ = e1322967;
var statearr_1322968_1322985 = state_1322940;
(statearr_1322968_1322985[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1322940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1322967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1322986 = state_1322940;
state_1322940 = G__1322986;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1322940){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1322940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1322970,out))
})();
var state__9201__auto__ = (function (){var statearr_1322969 = f__9200__auto__.call(null);
(statearr_1322969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1322970);

return statearr_1322969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1322970,out))
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
var c__9199__auto___1323129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1323129,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1323129,out){
return (function (state_1323099){
var state_val_1323100 = (state_1323099[(1)]);
if((state_val_1323100 === (7))){
var inst_1323095 = (state_1323099[(2)]);
var state_1323099__$1 = state_1323099;
var statearr_1323101_1323130 = state_1323099__$1;
(statearr_1323101_1323130[(2)] = inst_1323095);

(statearr_1323101_1323130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (1))){
var inst_1323058 = [];
var inst_1323059 = inst_1323058;
var inst_1323060 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1323099__$1 = (function (){var statearr_1323102 = state_1323099;
(statearr_1323102[(7)] = inst_1323060);

(statearr_1323102[(8)] = inst_1323059);

return statearr_1323102;
})();
var statearr_1323103_1323131 = state_1323099__$1;
(statearr_1323103_1323131[(2)] = null);

(statearr_1323103_1323131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (4))){
var inst_1323063 = (state_1323099[(9)]);
var inst_1323063__$1 = (state_1323099[(2)]);
var inst_1323064 = (inst_1323063__$1 == null);
var inst_1323065 = cljs.core.not.call(null,inst_1323064);
var state_1323099__$1 = (function (){var statearr_1323104 = state_1323099;
(statearr_1323104[(9)] = inst_1323063__$1);

return statearr_1323104;
})();
if(inst_1323065){
var statearr_1323105_1323132 = state_1323099__$1;
(statearr_1323105_1323132[(1)] = (5));

} else {
var statearr_1323106_1323133 = state_1323099__$1;
(statearr_1323106_1323133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (15))){
var inst_1323089 = (state_1323099[(2)]);
var state_1323099__$1 = state_1323099;
var statearr_1323107_1323134 = state_1323099__$1;
(statearr_1323107_1323134[(2)] = inst_1323089);

(statearr_1323107_1323134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (13))){
var state_1323099__$1 = state_1323099;
var statearr_1323108_1323135 = state_1323099__$1;
(statearr_1323108_1323135[(2)] = null);

(statearr_1323108_1323135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (6))){
var inst_1323059 = (state_1323099[(8)]);
var inst_1323084 = inst_1323059.length;
var inst_1323085 = (inst_1323084 > (0));
var state_1323099__$1 = state_1323099;
if(cljs.core.truth_(inst_1323085)){
var statearr_1323109_1323136 = state_1323099__$1;
(statearr_1323109_1323136[(1)] = (12));

} else {
var statearr_1323110_1323137 = state_1323099__$1;
(statearr_1323110_1323137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (3))){
var inst_1323097 = (state_1323099[(2)]);
var state_1323099__$1 = state_1323099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1323099__$1,inst_1323097);
} else {
if((state_val_1323100 === (12))){
var inst_1323059 = (state_1323099[(8)]);
var inst_1323087 = cljs.core.vec.call(null,inst_1323059);
var state_1323099__$1 = state_1323099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1323099__$1,(15),out,inst_1323087);
} else {
if((state_val_1323100 === (2))){
var state_1323099__$1 = state_1323099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1323099__$1,(4),ch);
} else {
if((state_val_1323100 === (11))){
var inst_1323063 = (state_1323099[(9)]);
var inst_1323067 = (state_1323099[(10)]);
var inst_1323077 = (state_1323099[(2)]);
var inst_1323078 = [];
var inst_1323079 = inst_1323078.push(inst_1323063);
var inst_1323059 = inst_1323078;
var inst_1323060 = inst_1323067;
var state_1323099__$1 = (function (){var statearr_1323111 = state_1323099;
(statearr_1323111[(11)] = inst_1323077);

(statearr_1323111[(7)] = inst_1323060);

(statearr_1323111[(8)] = inst_1323059);

(statearr_1323111[(12)] = inst_1323079);

return statearr_1323111;
})();
var statearr_1323112_1323138 = state_1323099__$1;
(statearr_1323112_1323138[(2)] = null);

(statearr_1323112_1323138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (9))){
var inst_1323059 = (state_1323099[(8)]);
var inst_1323075 = cljs.core.vec.call(null,inst_1323059);
var state_1323099__$1 = state_1323099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1323099__$1,(11),out,inst_1323075);
} else {
if((state_val_1323100 === (5))){
var inst_1323060 = (state_1323099[(7)]);
var inst_1323063 = (state_1323099[(9)]);
var inst_1323067 = (state_1323099[(10)]);
var inst_1323067__$1 = f.call(null,inst_1323063);
var inst_1323068 = cljs.core._EQ_.call(null,inst_1323067__$1,inst_1323060);
var inst_1323069 = cljs.core.keyword_identical_QMARK_.call(null,inst_1323060,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1323070 = (inst_1323068) || (inst_1323069);
var state_1323099__$1 = (function (){var statearr_1323113 = state_1323099;
(statearr_1323113[(10)] = inst_1323067__$1);

return statearr_1323113;
})();
if(cljs.core.truth_(inst_1323070)){
var statearr_1323114_1323139 = state_1323099__$1;
(statearr_1323114_1323139[(1)] = (8));

} else {
var statearr_1323115_1323140 = state_1323099__$1;
(statearr_1323115_1323140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (14))){
var inst_1323092 = (state_1323099[(2)]);
var inst_1323093 = cljs.core.async.close_BANG_.call(null,out);
var state_1323099__$1 = (function (){var statearr_1323117 = state_1323099;
(statearr_1323117[(13)] = inst_1323092);

return statearr_1323117;
})();
var statearr_1323118_1323141 = state_1323099__$1;
(statearr_1323118_1323141[(2)] = inst_1323093);

(statearr_1323118_1323141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (10))){
var inst_1323082 = (state_1323099[(2)]);
var state_1323099__$1 = state_1323099;
var statearr_1323119_1323142 = state_1323099__$1;
(statearr_1323119_1323142[(2)] = inst_1323082);

(statearr_1323119_1323142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1323100 === (8))){
var inst_1323059 = (state_1323099[(8)]);
var inst_1323063 = (state_1323099[(9)]);
var inst_1323067 = (state_1323099[(10)]);
var inst_1323072 = inst_1323059.push(inst_1323063);
var tmp1323116 = inst_1323059;
var inst_1323059__$1 = tmp1323116;
var inst_1323060 = inst_1323067;
var state_1323099__$1 = (function (){var statearr_1323120 = state_1323099;
(statearr_1323120[(14)] = inst_1323072);

(statearr_1323120[(7)] = inst_1323060);

(statearr_1323120[(8)] = inst_1323059__$1);

return statearr_1323120;
})();
var statearr_1323121_1323143 = state_1323099__$1;
(statearr_1323121_1323143[(2)] = null);

(statearr_1323121_1323143[(1)] = (2));


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
});})(c__9199__auto___1323129,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1323129,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1323125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1323125[(0)] = state_machine__9185__auto__);

(statearr_1323125[(1)] = (1));

return statearr_1323125;
});
var state_machine__9185__auto____1 = (function (state_1323099){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1323099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1323126){if((e1323126 instanceof Object)){
var ex__9188__auto__ = e1323126;
var statearr_1323127_1323144 = state_1323099;
(statearr_1323127_1323144[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1323099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1323126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1323145 = state_1323099;
state_1323099 = G__1323145;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1323099){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1323099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1323129,out))
})();
var state__9201__auto__ = (function (){var statearr_1323128 = f__9200__auto__.call(null);
(statearr_1323128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1323129);

return statearr_1323128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1323129,out))
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