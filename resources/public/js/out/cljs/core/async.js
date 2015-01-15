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
if(typeof cljs.core.async.t14958 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14958 = (function (f,fn_handler,meta14959){
this.f = f;
this.fn_handler = fn_handler;
this.meta14959 = meta14959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14960){
var self__ = this;
var _14960__$1 = this;
return self__.meta14959;
});

cljs.core.async.t14958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14960,meta14959__$1){
var self__ = this;
var _14960__$1 = this;
return (new cljs.core.async.t14958(self__.f,self__.fn_handler,meta14959__$1));
});

cljs.core.async.t14958.cljs$lang$type = true;

cljs.core.async.t14958.cljs$lang$ctorStr = "cljs.core.async/t14958";

cljs.core.async.t14958.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14958");
});

cljs.core.async.__GT_t14958 = (function __GT_t14958(f__$1,fn_handler__$1,meta14959){
return (new cljs.core.async.t14958(f__$1,fn_handler__$1,meta14959));
});

}

return (new cljs.core.async.t14958(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__14962 = buff;
if(G__14962){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__14962.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14962.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14962);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14962);
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
var val_14963 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14963);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14963,ret){
return (function (){
return fn1.call(null,val_14963);
});})(val_14963,ret))
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
var n__4509__auto___14964 = n;
var x_14965 = (0);
while(true){
if((x_14965 < n__4509__auto___14964)){
(a[x_14965] = (0));

var G__14966 = (x_14965 + (1));
x_14965 = G__14966;
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

var G__14967 = (i + (1));
i = G__14967;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14971 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14971 = (function (flag,alt_flag,meta14972){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14972 = meta14972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14973){
var self__ = this;
var _14973__$1 = this;
return self__.meta14972;
});})(flag))
;

cljs.core.async.t14971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14973,meta14972__$1){
var self__ = this;
var _14973__$1 = this;
return (new cljs.core.async.t14971(self__.flag,self__.alt_flag,meta14972__$1));
});})(flag))
;

cljs.core.async.t14971.cljs$lang$type = true;

cljs.core.async.t14971.cljs$lang$ctorStr = "cljs.core.async/t14971";

cljs.core.async.t14971.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14971");
});})(flag))
;

cljs.core.async.__GT_t14971 = ((function (flag){
return (function __GT_t14971(flag__$1,alt_flag__$1,meta14972){
return (new cljs.core.async.t14971(flag__$1,alt_flag__$1,meta14972));
});})(flag))
;

}

return (new cljs.core.async.t14971(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14977 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14977 = (function (cb,flag,alt_handler,meta14978){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14978 = meta14978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14979){
var self__ = this;
var _14979__$1 = this;
return self__.meta14978;
});

cljs.core.async.t14977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14979,meta14978__$1){
var self__ = this;
var _14979__$1 = this;
return (new cljs.core.async.t14977(self__.cb,self__.flag,self__.alt_handler,meta14978__$1));
});

cljs.core.async.t14977.cljs$lang$type = true;

cljs.core.async.t14977.cljs$lang$ctorStr = "cljs.core.async/t14977";

cljs.core.async.t14977.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14977");
});

cljs.core.async.__GT_t14977 = (function __GT_t14977(cb__$1,flag__$1,alt_handler__$1,meta14978){
return (new cljs.core.async.t14977(cb__$1,flag__$1,alt_handler__$1,meta14978));
});

}

return (new cljs.core.async.t14977(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__14980_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14980_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14981_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14981_SHARP_,port], null));
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
var G__14982 = (i + (1));
i = G__14982;
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
var alts_BANG___delegate = function (ports,p__14983){
var map__14985 = p__14983;
var map__14985__$1 = ((cljs.core.seq_QMARK_.call(null,map__14985))?cljs.core.apply.call(null,cljs.core.hash_map,map__14985):map__14985);
var opts = map__14985__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14983 = null;
if (arguments.length > 1) {
  p__14983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14983);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14986){
var ports = cljs.core.first(arglist__14986);
var p__14983 = cljs.core.rest(arglist__14986);
return alts_BANG___delegate(ports,p__14983);
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
var c__7301__auto___15081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___15081){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___15081){
return (function (state_15057){
var state_val_15058 = (state_15057[(1)]);
if((state_val_15058 === (7))){
var inst_15053 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
var statearr_15059_15082 = state_15057__$1;
(statearr_15059_15082[(2)] = inst_15053);

(statearr_15059_15082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (1))){
var state_15057__$1 = state_15057;
var statearr_15060_15083 = state_15057__$1;
(statearr_15060_15083[(2)] = null);

(statearr_15060_15083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (4))){
var inst_15036 = (state_15057[(7)]);
var inst_15036__$1 = (state_15057[(2)]);
var inst_15037 = (inst_15036__$1 == null);
var state_15057__$1 = (function (){var statearr_15061 = state_15057;
(statearr_15061[(7)] = inst_15036__$1);

return statearr_15061;
})();
if(cljs.core.truth_(inst_15037)){
var statearr_15062_15084 = state_15057__$1;
(statearr_15062_15084[(1)] = (5));

} else {
var statearr_15063_15085 = state_15057__$1;
(statearr_15063_15085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (13))){
var state_15057__$1 = state_15057;
var statearr_15064_15086 = state_15057__$1;
(statearr_15064_15086[(2)] = null);

(statearr_15064_15086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (6))){
var inst_15036 = (state_15057[(7)]);
var state_15057__$1 = state_15057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15057__$1,(11),to,inst_15036);
} else {
if((state_val_15058 === (3))){
var inst_15055 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15057__$1,inst_15055);
} else {
if((state_val_15058 === (12))){
var state_15057__$1 = state_15057;
var statearr_15065_15087 = state_15057__$1;
(statearr_15065_15087[(2)] = null);

(statearr_15065_15087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (2))){
var state_15057__$1 = state_15057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15057__$1,(4),from);
} else {
if((state_val_15058 === (11))){
var inst_15046 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
if(cljs.core.truth_(inst_15046)){
var statearr_15066_15088 = state_15057__$1;
(statearr_15066_15088[(1)] = (12));

} else {
var statearr_15067_15089 = state_15057__$1;
(statearr_15067_15089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (9))){
var state_15057__$1 = state_15057;
var statearr_15068_15090 = state_15057__$1;
(statearr_15068_15090[(2)] = null);

(statearr_15068_15090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (5))){
var state_15057__$1 = state_15057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15069_15091 = state_15057__$1;
(statearr_15069_15091[(1)] = (8));

} else {
var statearr_15070_15092 = state_15057__$1;
(statearr_15070_15092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (14))){
var inst_15051 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
var statearr_15071_15093 = state_15057__$1;
(statearr_15071_15093[(2)] = inst_15051);

(statearr_15071_15093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (10))){
var inst_15043 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
var statearr_15072_15094 = state_15057__$1;
(statearr_15072_15094[(2)] = inst_15043);

(statearr_15072_15094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (8))){
var inst_15040 = cljs.core.async.close_BANG_.call(null,to);
var state_15057__$1 = state_15057;
var statearr_15073_15095 = state_15057__$1;
(statearr_15073_15095[(2)] = inst_15040);

(statearr_15073_15095[(1)] = (10));


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
});})(c__7301__auto___15081))
;
return ((function (switch__7245__auto__,c__7301__auto___15081){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15077 = [null,null,null,null,null,null,null,null];
(statearr_15077[(0)] = state_machine__7246__auto__);

(statearr_15077[(1)] = (1));

return statearr_15077;
});
var state_machine__7246__auto____1 = (function (state_15057){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15078){if((e15078 instanceof Object)){
var ex__7249__auto__ = e15078;
var statearr_15079_15096 = state_15057;
(statearr_15079_15096[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15097 = state_15057;
state_15057 = G__15097;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15057){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___15081))
})();
var state__7303__auto__ = (function (){var statearr_15080 = f__7302__auto__.call(null);
(statearr_15080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15081);

return statearr_15080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___15081))
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
return (function (p__15281){
var vec__15282 = p__15281;
var v = cljs.core.nth.call(null,vec__15282,(0),null);
var p = cljs.core.nth.call(null,vec__15282,(1),null);
var job = vec__15282;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7301__auto___15464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results){
return (function (state_15287){
var state_val_15288 = (state_15287[(1)]);
if((state_val_15288 === (2))){
var inst_15284 = (state_15287[(2)]);
var inst_15285 = cljs.core.async.close_BANG_.call(null,res);
var state_15287__$1 = (function (){var statearr_15289 = state_15287;
(statearr_15289[(7)] = inst_15284);

return statearr_15289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15287__$1,inst_15285);
} else {
if((state_val_15288 === (1))){
var state_15287__$1 = state_15287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15287__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results))
;
return ((function (switch__7245__auto__,c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15293 = [null,null,null,null,null,null,null,null];
(statearr_15293[(0)] = state_machine__7246__auto__);

(statearr_15293[(1)] = (1));

return statearr_15293;
});
var state_machine__7246__auto____1 = (function (state_15287){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15294){if((e15294 instanceof Object)){
var ex__7249__auto__ = e15294;
var statearr_15295_15465 = state_15287;
(statearr_15295_15465[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15466 = state_15287;
state_15287 = G__15466;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15287){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results))
})();
var state__7303__auto__ = (function (){var statearr_15296 = f__7302__auto__.call(null);
(statearr_15296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15464);

return statearr_15296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___15464,res,vec__15282,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15297){
var vec__15298 = p__15297;
var v = cljs.core.nth.call(null,vec__15298,(0),null);
var p = cljs.core.nth.call(null,vec__15298,(1),null);
var job = vec__15298;
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
var n__4509__auto___15467 = n;
var __15468 = (0);
while(true){
if((__15468 < n__4509__auto___15467)){
var G__15299_15469 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15299_15469) {
case "async":
var c__7301__auto___15471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15468,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (__15468,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function (state_15312){
var state_val_15313 = (state_15312[(1)]);
if((state_val_15313 === (7))){
var inst_15308 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15314_15472 = state_15312__$1;
(statearr_15314_15472[(2)] = inst_15308);

(statearr_15314_15472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (6))){
var state_15312__$1 = state_15312;
var statearr_15315_15473 = state_15312__$1;
(statearr_15315_15473[(2)] = null);

(statearr_15315_15473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (5))){
var state_15312__$1 = state_15312;
var statearr_15316_15474 = state_15312__$1;
(statearr_15316_15474[(2)] = null);

(statearr_15316_15474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (4))){
var inst_15302 = (state_15312[(2)]);
var inst_15303 = async.call(null,inst_15302);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15303)){
var statearr_15317_15475 = state_15312__$1;
(statearr_15317_15475[(1)] = (5));

} else {
var statearr_15318_15476 = state_15312__$1;
(statearr_15318_15476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (3))){
var inst_15310 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15312__$1,inst_15310);
} else {
if((state_val_15313 === (2))){
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15312__$1,(4),jobs);
} else {
if((state_val_15313 === (1))){
var state_15312__$1 = state_15312;
var statearr_15319_15477 = state_15312__$1;
(statearr_15319_15477[(2)] = null);

(statearr_15319_15477[(1)] = (2));


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
});})(__15468,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
;
return ((function (__15468,switch__7245__auto__,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15323 = [null,null,null,null,null,null,null];
(statearr_15323[(0)] = state_machine__7246__auto__);

(statearr_15323[(1)] = (1));

return statearr_15323;
});
var state_machine__7246__auto____1 = (function (state_15312){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object)){
var ex__7249__auto__ = e15324;
var statearr_15325_15478 = state_15312;
(statearr_15325_15478[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15479 = state_15312;
state_15312 = G__15479;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15312){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(__15468,switch__7245__auto__,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
})();
var state__7303__auto__ = (function (){var statearr_15326 = f__7302__auto__.call(null);
(statearr_15326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15471);

return statearr_15326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(__15468,c__7301__auto___15471,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
);


break;
case "compute":
var c__7301__auto___15480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15468,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (__15468,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function (state_15339){
var state_val_15340 = (state_15339[(1)]);
if((state_val_15340 === (7))){
var inst_15335 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15341_15481 = state_15339__$1;
(statearr_15341_15481[(2)] = inst_15335);

(statearr_15341_15481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (6))){
var state_15339__$1 = state_15339;
var statearr_15342_15482 = state_15339__$1;
(statearr_15342_15482[(2)] = null);

(statearr_15342_15482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (5))){
var state_15339__$1 = state_15339;
var statearr_15343_15483 = state_15339__$1;
(statearr_15343_15483[(2)] = null);

(statearr_15343_15483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (4))){
var inst_15329 = (state_15339[(2)]);
var inst_15330 = process.call(null,inst_15329);
var state_15339__$1 = state_15339;
if(cljs.core.truth_(inst_15330)){
var statearr_15344_15484 = state_15339__$1;
(statearr_15344_15484[(1)] = (5));

} else {
var statearr_15345_15485 = state_15339__$1;
(statearr_15345_15485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (3))){
var inst_15337 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15339__$1,inst_15337);
} else {
if((state_val_15340 === (2))){
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15339__$1,(4),jobs);
} else {
if((state_val_15340 === (1))){
var state_15339__$1 = state_15339;
var statearr_15346_15486 = state_15339__$1;
(statearr_15346_15486[(2)] = null);

(statearr_15346_15486[(1)] = (2));


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
});})(__15468,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
;
return ((function (__15468,switch__7245__auto__,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15350 = [null,null,null,null,null,null,null];
(statearr_15350[(0)] = state_machine__7246__auto__);

(statearr_15350[(1)] = (1));

return statearr_15350;
});
var state_machine__7246__auto____1 = (function (state_15339){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15351){if((e15351 instanceof Object)){
var ex__7249__auto__ = e15351;
var statearr_15352_15487 = state_15339;
(statearr_15352_15487[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15488 = state_15339;
state_15339 = G__15488;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(__15468,switch__7245__auto__,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
})();
var state__7303__auto__ = (function (){var statearr_15353 = f__7302__auto__.call(null);
(statearr_15353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15480);

return statearr_15353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(__15468,c__7301__auto___15480,G__15299_15469,n__4509__auto___15467,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15489 = (__15468 + (1));
__15468 = G__15489;
continue;
} else {
}
break;
}

var c__7301__auto___15490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___15490,jobs,results,process,async){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___15490,jobs,results,process,async){
return (function (state_15375){
var state_val_15376 = (state_15375[(1)]);
if((state_val_15376 === (9))){
var inst_15368 = (state_15375[(2)]);
var state_15375__$1 = (function (){var statearr_15377 = state_15375;
(statearr_15377[(7)] = inst_15368);

return statearr_15377;
})();
var statearr_15378_15491 = state_15375__$1;
(statearr_15378_15491[(2)] = null);

(statearr_15378_15491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (8))){
var inst_15361 = (state_15375[(8)]);
var inst_15366 = (state_15375[(2)]);
var state_15375__$1 = (function (){var statearr_15379 = state_15375;
(statearr_15379[(9)] = inst_15366);

return statearr_15379;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15375__$1,(9),results,inst_15361);
} else {
if((state_val_15376 === (7))){
var inst_15371 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15380_15492 = state_15375__$1;
(statearr_15380_15492[(2)] = inst_15371);

(statearr_15380_15492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (6))){
var inst_15361 = (state_15375[(8)]);
var inst_15356 = (state_15375[(10)]);
var inst_15361__$1 = cljs.core.async.chan.call(null,(1));
var inst_15362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15363 = [inst_15356,inst_15361__$1];
var inst_15364 = (new cljs.core.PersistentVector(null,2,(5),inst_15362,inst_15363,null));
var state_15375__$1 = (function (){var statearr_15381 = state_15375;
(statearr_15381[(8)] = inst_15361__$1);

return statearr_15381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15375__$1,(8),jobs,inst_15364);
} else {
if((state_val_15376 === (5))){
var inst_15359 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15375__$1 = state_15375;
var statearr_15382_15493 = state_15375__$1;
(statearr_15382_15493[(2)] = inst_15359);

(statearr_15382_15493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (4))){
var inst_15356 = (state_15375[(10)]);
var inst_15356__$1 = (state_15375[(2)]);
var inst_15357 = (inst_15356__$1 == null);
var state_15375__$1 = (function (){var statearr_15383 = state_15375;
(statearr_15383[(10)] = inst_15356__$1);

return statearr_15383;
})();
if(cljs.core.truth_(inst_15357)){
var statearr_15384_15494 = state_15375__$1;
(statearr_15384_15494[(1)] = (5));

} else {
var statearr_15385_15495 = state_15375__$1;
(statearr_15385_15495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (3))){
var inst_15373 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15375__$1,inst_15373);
} else {
if((state_val_15376 === (2))){
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15375__$1,(4),from);
} else {
if((state_val_15376 === (1))){
var state_15375__$1 = state_15375;
var statearr_15386_15496 = state_15375__$1;
(statearr_15386_15496[(2)] = null);

(statearr_15386_15496[(1)] = (2));


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
});})(c__7301__auto___15490,jobs,results,process,async))
;
return ((function (switch__7245__auto__,c__7301__auto___15490,jobs,results,process,async){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15390[(0)] = state_machine__7246__auto__);

(statearr_15390[(1)] = (1));

return statearr_15390;
});
var state_machine__7246__auto____1 = (function (state_15375){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15391){if((e15391 instanceof Object)){
var ex__7249__auto__ = e15391;
var statearr_15392_15497 = state_15375;
(statearr_15392_15497[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15498 = state_15375;
state_15375 = G__15498;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15375){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___15490,jobs,results,process,async))
})();
var state__7303__auto__ = (function (){var statearr_15393 = f__7302__auto__.call(null);
(statearr_15393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15490);

return statearr_15393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___15490,jobs,results,process,async))
);


var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__,jobs,results,process,async){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__,jobs,results,process,async){
return (function (state_15431){
var state_val_15432 = (state_15431[(1)]);
if((state_val_15432 === (7))){
var inst_15427 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15433_15499 = state_15431__$1;
(statearr_15433_15499[(2)] = inst_15427);

(statearr_15433_15499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (20))){
var state_15431__$1 = state_15431;
var statearr_15434_15500 = state_15431__$1;
(statearr_15434_15500[(2)] = null);

(statearr_15434_15500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (1))){
var state_15431__$1 = state_15431;
var statearr_15435_15501 = state_15431__$1;
(statearr_15435_15501[(2)] = null);

(statearr_15435_15501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (4))){
var inst_15396 = (state_15431[(7)]);
var inst_15396__$1 = (state_15431[(2)]);
var inst_15397 = (inst_15396__$1 == null);
var state_15431__$1 = (function (){var statearr_15436 = state_15431;
(statearr_15436[(7)] = inst_15396__$1);

return statearr_15436;
})();
if(cljs.core.truth_(inst_15397)){
var statearr_15437_15502 = state_15431__$1;
(statearr_15437_15502[(1)] = (5));

} else {
var statearr_15438_15503 = state_15431__$1;
(statearr_15438_15503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (15))){
var inst_15409 = (state_15431[(8)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15431__$1,(18),to,inst_15409);
} else {
if((state_val_15432 === (21))){
var inst_15422 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15439_15504 = state_15431__$1;
(statearr_15439_15504[(2)] = inst_15422);

(statearr_15439_15504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (13))){
var inst_15424 = (state_15431[(2)]);
var state_15431__$1 = (function (){var statearr_15440 = state_15431;
(statearr_15440[(9)] = inst_15424);

return statearr_15440;
})();
var statearr_15441_15505 = state_15431__$1;
(statearr_15441_15505[(2)] = null);

(statearr_15441_15505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (6))){
var inst_15396 = (state_15431[(7)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15431__$1,(11),inst_15396);
} else {
if((state_val_15432 === (17))){
var inst_15417 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
if(cljs.core.truth_(inst_15417)){
var statearr_15442_15506 = state_15431__$1;
(statearr_15442_15506[(1)] = (19));

} else {
var statearr_15443_15507 = state_15431__$1;
(statearr_15443_15507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (3))){
var inst_15429 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15431__$1,inst_15429);
} else {
if((state_val_15432 === (12))){
var inst_15406 = (state_15431[(10)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15431__$1,(14),inst_15406);
} else {
if((state_val_15432 === (2))){
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15431__$1,(4),results);
} else {
if((state_val_15432 === (19))){
var state_15431__$1 = state_15431;
var statearr_15444_15508 = state_15431__$1;
(statearr_15444_15508[(2)] = null);

(statearr_15444_15508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (11))){
var inst_15406 = (state_15431[(2)]);
var state_15431__$1 = (function (){var statearr_15445 = state_15431;
(statearr_15445[(10)] = inst_15406);

return statearr_15445;
})();
var statearr_15446_15509 = state_15431__$1;
(statearr_15446_15509[(2)] = null);

(statearr_15446_15509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (9))){
var state_15431__$1 = state_15431;
var statearr_15447_15510 = state_15431__$1;
(statearr_15447_15510[(2)] = null);

(statearr_15447_15510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (5))){
var state_15431__$1 = state_15431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15448_15511 = state_15431__$1;
(statearr_15448_15511[(1)] = (8));

} else {
var statearr_15449_15512 = state_15431__$1;
(statearr_15449_15512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (14))){
var inst_15409 = (state_15431[(8)]);
var inst_15411 = (state_15431[(11)]);
var inst_15409__$1 = (state_15431[(2)]);
var inst_15410 = (inst_15409__$1 == null);
var inst_15411__$1 = cljs.core.not.call(null,inst_15410);
var state_15431__$1 = (function (){var statearr_15450 = state_15431;
(statearr_15450[(8)] = inst_15409__$1);

(statearr_15450[(11)] = inst_15411__$1);

return statearr_15450;
})();
if(inst_15411__$1){
var statearr_15451_15513 = state_15431__$1;
(statearr_15451_15513[(1)] = (15));

} else {
var statearr_15452_15514 = state_15431__$1;
(statearr_15452_15514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (16))){
var inst_15411 = (state_15431[(11)]);
var state_15431__$1 = state_15431;
var statearr_15453_15515 = state_15431__$1;
(statearr_15453_15515[(2)] = inst_15411);

(statearr_15453_15515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (10))){
var inst_15403 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15454_15516 = state_15431__$1;
(statearr_15454_15516[(2)] = inst_15403);

(statearr_15454_15516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (18))){
var inst_15414 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15455_15517 = state_15431__$1;
(statearr_15455_15517[(2)] = inst_15414);

(statearr_15455_15517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15432 === (8))){
var inst_15400 = cljs.core.async.close_BANG_.call(null,to);
var state_15431__$1 = state_15431;
var statearr_15456_15518 = state_15431__$1;
(statearr_15456_15518[(2)] = inst_15400);

(statearr_15456_15518[(1)] = (10));


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
});})(c__7301__auto__,jobs,results,process,async))
;
return ((function (switch__7245__auto__,c__7301__auto__,jobs,results,process,async){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15460[(0)] = state_machine__7246__auto__);

(statearr_15460[(1)] = (1));

return statearr_15460;
});
var state_machine__7246__auto____1 = (function (state_15431){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15461){if((e15461 instanceof Object)){
var ex__7249__auto__ = e15461;
var statearr_15462_15519 = state_15431;
(statearr_15462_15519[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15520 = state_15431;
state_15431 = G__15520;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15431){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__,jobs,results,process,async))
})();
var state__7303__auto__ = (function (){var statearr_15463 = f__7302__auto__.call(null);
(statearr_15463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_15463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__,jobs,results,process,async))
);

return c__7301__auto__;
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
var c__7301__auto___15621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___15621,tc,fc){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___15621,tc,fc){
return (function (state_15596){
var state_val_15597 = (state_15596[(1)]);
if((state_val_15597 === (7))){
var inst_15592 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15598_15622 = state_15596__$1;
(statearr_15598_15622[(2)] = inst_15592);

(statearr_15598_15622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (1))){
var state_15596__$1 = state_15596;
var statearr_15599_15623 = state_15596__$1;
(statearr_15599_15623[(2)] = null);

(statearr_15599_15623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (4))){
var inst_15573 = (state_15596[(7)]);
var inst_15573__$1 = (state_15596[(2)]);
var inst_15574 = (inst_15573__$1 == null);
var state_15596__$1 = (function (){var statearr_15600 = state_15596;
(statearr_15600[(7)] = inst_15573__$1);

return statearr_15600;
})();
if(cljs.core.truth_(inst_15574)){
var statearr_15601_15624 = state_15596__$1;
(statearr_15601_15624[(1)] = (5));

} else {
var statearr_15602_15625 = state_15596__$1;
(statearr_15602_15625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (13))){
var state_15596__$1 = state_15596;
var statearr_15603_15626 = state_15596__$1;
(statearr_15603_15626[(2)] = null);

(statearr_15603_15626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (6))){
var inst_15573 = (state_15596[(7)]);
var inst_15579 = p.call(null,inst_15573);
var state_15596__$1 = state_15596;
if(cljs.core.truth_(inst_15579)){
var statearr_15604_15627 = state_15596__$1;
(statearr_15604_15627[(1)] = (9));

} else {
var statearr_15605_15628 = state_15596__$1;
(statearr_15605_15628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (3))){
var inst_15594 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15596__$1,inst_15594);
} else {
if((state_val_15597 === (12))){
var state_15596__$1 = state_15596;
var statearr_15606_15629 = state_15596__$1;
(statearr_15606_15629[(2)] = null);

(statearr_15606_15629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (2))){
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15596__$1,(4),ch);
} else {
if((state_val_15597 === (11))){
var inst_15573 = (state_15596[(7)]);
var inst_15583 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15596__$1,(8),inst_15583,inst_15573);
} else {
if((state_val_15597 === (9))){
var state_15596__$1 = state_15596;
var statearr_15607_15630 = state_15596__$1;
(statearr_15607_15630[(2)] = tc);

(statearr_15607_15630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (5))){
var inst_15576 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15577 = cljs.core.async.close_BANG_.call(null,fc);
var state_15596__$1 = (function (){var statearr_15608 = state_15596;
(statearr_15608[(8)] = inst_15576);

return statearr_15608;
})();
var statearr_15609_15631 = state_15596__$1;
(statearr_15609_15631[(2)] = inst_15577);

(statearr_15609_15631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (14))){
var inst_15590 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15610_15632 = state_15596__$1;
(statearr_15610_15632[(2)] = inst_15590);

(statearr_15610_15632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (10))){
var state_15596__$1 = state_15596;
var statearr_15611_15633 = state_15596__$1;
(statearr_15611_15633[(2)] = fc);

(statearr_15611_15633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (8))){
var inst_15585 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
if(cljs.core.truth_(inst_15585)){
var statearr_15612_15634 = state_15596__$1;
(statearr_15612_15634[(1)] = (12));

} else {
var statearr_15613_15635 = state_15596__$1;
(statearr_15613_15635[(1)] = (13));

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
});})(c__7301__auto___15621,tc,fc))
;
return ((function (switch__7245__auto__,c__7301__auto___15621,tc,fc){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15617 = [null,null,null,null,null,null,null,null,null];
(statearr_15617[(0)] = state_machine__7246__auto__);

(statearr_15617[(1)] = (1));

return statearr_15617;
});
var state_machine__7246__auto____1 = (function (state_15596){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15618){if((e15618 instanceof Object)){
var ex__7249__auto__ = e15618;
var statearr_15619_15636 = state_15596;
(statearr_15619_15636[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15637 = state_15596;
state_15596 = G__15637;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15596){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___15621,tc,fc))
})();
var state__7303__auto__ = (function (){var statearr_15620 = f__7302__auto__.call(null);
(statearr_15620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___15621);

return statearr_15620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___15621,tc,fc))
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
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__){
return (function (state_15684){
var state_val_15685 = (state_15684[(1)]);
if((state_val_15685 === (7))){
var inst_15680 = (state_15684[(2)]);
var state_15684__$1 = state_15684;
var statearr_15686_15702 = state_15684__$1;
(statearr_15686_15702[(2)] = inst_15680);

(statearr_15686_15702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15685 === (6))){
var inst_15673 = (state_15684[(7)]);
var inst_15670 = (state_15684[(8)]);
var inst_15677 = f.call(null,inst_15670,inst_15673);
var inst_15670__$1 = inst_15677;
var state_15684__$1 = (function (){var statearr_15687 = state_15684;
(statearr_15687[(8)] = inst_15670__$1);

return statearr_15687;
})();
var statearr_15688_15703 = state_15684__$1;
(statearr_15688_15703[(2)] = null);

(statearr_15688_15703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15685 === (5))){
var inst_15670 = (state_15684[(8)]);
var state_15684__$1 = state_15684;
var statearr_15689_15704 = state_15684__$1;
(statearr_15689_15704[(2)] = inst_15670);

(statearr_15689_15704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15685 === (4))){
var inst_15673 = (state_15684[(7)]);
var inst_15673__$1 = (state_15684[(2)]);
var inst_15674 = (inst_15673__$1 == null);
var state_15684__$1 = (function (){var statearr_15690 = state_15684;
(statearr_15690[(7)] = inst_15673__$1);

return statearr_15690;
})();
if(cljs.core.truth_(inst_15674)){
var statearr_15691_15705 = state_15684__$1;
(statearr_15691_15705[(1)] = (5));

} else {
var statearr_15692_15706 = state_15684__$1;
(statearr_15692_15706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15685 === (3))){
var inst_15682 = (state_15684[(2)]);
var state_15684__$1 = state_15684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15684__$1,inst_15682);
} else {
if((state_val_15685 === (2))){
var state_15684__$1 = state_15684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15684__$1,(4),ch);
} else {
if((state_val_15685 === (1))){
var inst_15670 = init;
var state_15684__$1 = (function (){var statearr_15693 = state_15684;
(statearr_15693[(8)] = inst_15670);

return statearr_15693;
})();
var statearr_15694_15707 = state_15684__$1;
(statearr_15694_15707[(2)] = null);

(statearr_15694_15707[(1)] = (2));


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
});})(c__7301__auto__))
;
return ((function (switch__7245__auto__,c__7301__auto__){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null,null,null];
(statearr_15698[(0)] = state_machine__7246__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var state_machine__7246__auto____1 = (function (state_15684){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15699){if((e15699 instanceof Object)){
var ex__7249__auto__ = e15699;
var statearr_15700_15708 = state_15684;
(statearr_15700_15708[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15709 = state_15684;
state_15684 = G__15709;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15684){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__))
})();
var state__7303__auto__ = (function (){var statearr_15701 = f__7302__auto__.call(null);
(statearr_15701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__))
);

return c__7301__auto__;
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
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__){
return (function (state_15783){
var state_val_15784 = (state_15783[(1)]);
if((state_val_15784 === (7))){
var inst_15765 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15785_15808 = state_15783__$1;
(statearr_15785_15808[(2)] = inst_15765);

(statearr_15785_15808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (1))){
var inst_15759 = cljs.core.seq.call(null,coll);
var inst_15760 = inst_15759;
var state_15783__$1 = (function (){var statearr_15786 = state_15783;
(statearr_15786[(7)] = inst_15760);

return statearr_15786;
})();
var statearr_15787_15809 = state_15783__$1;
(statearr_15787_15809[(2)] = null);

(statearr_15787_15809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (4))){
var inst_15760 = (state_15783[(7)]);
var inst_15763 = cljs.core.first.call(null,inst_15760);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15783__$1,(7),ch,inst_15763);
} else {
if((state_val_15784 === (13))){
var inst_15777 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15788_15810 = state_15783__$1;
(statearr_15788_15810[(2)] = inst_15777);

(statearr_15788_15810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (6))){
var inst_15768 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
if(cljs.core.truth_(inst_15768)){
var statearr_15789_15811 = state_15783__$1;
(statearr_15789_15811[(1)] = (8));

} else {
var statearr_15790_15812 = state_15783__$1;
(statearr_15790_15812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (3))){
var inst_15781 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15783__$1,inst_15781);
} else {
if((state_val_15784 === (12))){
var state_15783__$1 = state_15783;
var statearr_15791_15813 = state_15783__$1;
(statearr_15791_15813[(2)] = null);

(statearr_15791_15813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (2))){
var inst_15760 = (state_15783[(7)]);
var state_15783__$1 = state_15783;
if(cljs.core.truth_(inst_15760)){
var statearr_15792_15814 = state_15783__$1;
(statearr_15792_15814[(1)] = (4));

} else {
var statearr_15793_15815 = state_15783__$1;
(statearr_15793_15815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (11))){
var inst_15774 = cljs.core.async.close_BANG_.call(null,ch);
var state_15783__$1 = state_15783;
var statearr_15794_15816 = state_15783__$1;
(statearr_15794_15816[(2)] = inst_15774);

(statearr_15794_15816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (9))){
var state_15783__$1 = state_15783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15795_15817 = state_15783__$1;
(statearr_15795_15817[(1)] = (11));

} else {
var statearr_15796_15818 = state_15783__$1;
(statearr_15796_15818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (5))){
var inst_15760 = (state_15783[(7)]);
var state_15783__$1 = state_15783;
var statearr_15797_15819 = state_15783__$1;
(statearr_15797_15819[(2)] = inst_15760);

(statearr_15797_15819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (10))){
var inst_15779 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15798_15820 = state_15783__$1;
(statearr_15798_15820[(2)] = inst_15779);

(statearr_15798_15820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (8))){
var inst_15760 = (state_15783[(7)]);
var inst_15770 = cljs.core.next.call(null,inst_15760);
var inst_15760__$1 = inst_15770;
var state_15783__$1 = (function (){var statearr_15799 = state_15783;
(statearr_15799[(7)] = inst_15760__$1);

return statearr_15799;
})();
var statearr_15800_15821 = state_15783__$1;
(statearr_15800_15821[(2)] = null);

(statearr_15800_15821[(1)] = (2));


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
});})(c__7301__auto__))
;
return ((function (switch__7245__auto__,c__7301__auto__){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_15804 = [null,null,null,null,null,null,null,null];
(statearr_15804[(0)] = state_machine__7246__auto__);

(statearr_15804[(1)] = (1));

return statearr_15804;
});
var state_machine__7246__auto____1 = (function (state_15783){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_15783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e15805){if((e15805 instanceof Object)){
var ex__7249__auto__ = e15805;
var statearr_15806_15822 = state_15783;
(statearr_15806_15822[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15823 = state_15783;
state_15783 = G__15823;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_15783){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_15783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__))
})();
var state__7303__auto__ = (function (){var statearr_15807 = f__7302__auto__.call(null);
(statearr_15807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_15807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__))
);

return c__7301__auto__;
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

cljs.core.async.Mux = (function (){var obj15825 = {};
return obj15825;
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


cljs.core.async.Mult = (function (){var obj15827 = {};
return obj15827;
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
if(typeof cljs.core.async.t16049 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16049 = (function (cs,ch,mult,meta16050){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16050 = meta16050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16049.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16049.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16051){
var self__ = this;
var _16051__$1 = this;
return self__.meta16050;
});})(cs))
;

cljs.core.async.t16049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16051,meta16050__$1){
var self__ = this;
var _16051__$1 = this;
return (new cljs.core.async.t16049(self__.cs,self__.ch,self__.mult,meta16050__$1));
});})(cs))
;

cljs.core.async.t16049.cljs$lang$type = true;

cljs.core.async.t16049.cljs$lang$ctorStr = "cljs.core.async/t16049";

cljs.core.async.t16049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16049");
});})(cs))
;

cljs.core.async.__GT_t16049 = ((function (cs){
return (function __GT_t16049(cs__$1,ch__$1,mult__$1,meta16050){
return (new cljs.core.async.t16049(cs__$1,ch__$1,mult__$1,meta16050));
});})(cs))
;

}

return (new cljs.core.async.t16049(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7301__auto___16270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___16270,cs,m,dchan,dctr,done){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___16270,cs,m,dchan,dctr,done){
return (function (state_16182){
var state_val_16183 = (state_16182[(1)]);
if((state_val_16183 === (7))){
var inst_16178 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16184_16271 = state_16182__$1;
(statearr_16184_16271[(2)] = inst_16178);

(statearr_16184_16271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (20))){
var inst_16083 = (state_16182[(7)]);
var inst_16093 = cljs.core.first.call(null,inst_16083);
var inst_16094 = cljs.core.nth.call(null,inst_16093,(0),null);
var inst_16095 = cljs.core.nth.call(null,inst_16093,(1),null);
var state_16182__$1 = (function (){var statearr_16185 = state_16182;
(statearr_16185[(8)] = inst_16094);

return statearr_16185;
})();
if(cljs.core.truth_(inst_16095)){
var statearr_16186_16272 = state_16182__$1;
(statearr_16186_16272[(1)] = (22));

} else {
var statearr_16187_16273 = state_16182__$1;
(statearr_16187_16273[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (27))){
var inst_16123 = (state_16182[(9)]);
var inst_16125 = (state_16182[(10)]);
var inst_16130 = (state_16182[(11)]);
var inst_16054 = (state_16182[(12)]);
var inst_16130__$1 = cljs.core._nth.call(null,inst_16123,inst_16125);
var inst_16131 = cljs.core.async.put_BANG_.call(null,inst_16130__$1,inst_16054,done);
var state_16182__$1 = (function (){var statearr_16188 = state_16182;
(statearr_16188[(11)] = inst_16130__$1);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16131)){
var statearr_16189_16274 = state_16182__$1;
(statearr_16189_16274[(1)] = (30));

} else {
var statearr_16190_16275 = state_16182__$1;
(statearr_16190_16275[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (1))){
var state_16182__$1 = state_16182;
var statearr_16191_16276 = state_16182__$1;
(statearr_16191_16276[(2)] = null);

(statearr_16191_16276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (24))){
var inst_16083 = (state_16182[(7)]);
var inst_16100 = (state_16182[(2)]);
var inst_16101 = cljs.core.next.call(null,inst_16083);
var inst_16063 = inst_16101;
var inst_16064 = null;
var inst_16065 = (0);
var inst_16066 = (0);
var state_16182__$1 = (function (){var statearr_16192 = state_16182;
(statearr_16192[(13)] = inst_16066);

(statearr_16192[(14)] = inst_16063);

(statearr_16192[(15)] = inst_16065);

(statearr_16192[(16)] = inst_16100);

(statearr_16192[(17)] = inst_16064);

return statearr_16192;
})();
var statearr_16193_16277 = state_16182__$1;
(statearr_16193_16277[(2)] = null);

(statearr_16193_16277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (39))){
var state_16182__$1 = state_16182;
var statearr_16197_16278 = state_16182__$1;
(statearr_16197_16278[(2)] = null);

(statearr_16197_16278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (4))){
var inst_16054 = (state_16182[(12)]);
var inst_16054__$1 = (state_16182[(2)]);
var inst_16055 = (inst_16054__$1 == null);
var state_16182__$1 = (function (){var statearr_16198 = state_16182;
(statearr_16198[(12)] = inst_16054__$1);

return statearr_16198;
})();
if(cljs.core.truth_(inst_16055)){
var statearr_16199_16279 = state_16182__$1;
(statearr_16199_16279[(1)] = (5));

} else {
var statearr_16200_16280 = state_16182__$1;
(statearr_16200_16280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (15))){
var inst_16066 = (state_16182[(13)]);
var inst_16063 = (state_16182[(14)]);
var inst_16065 = (state_16182[(15)]);
var inst_16064 = (state_16182[(17)]);
var inst_16079 = (state_16182[(2)]);
var inst_16080 = (inst_16066 + (1));
var tmp16194 = inst_16063;
var tmp16195 = inst_16065;
var tmp16196 = inst_16064;
var inst_16063__$1 = tmp16194;
var inst_16064__$1 = tmp16196;
var inst_16065__$1 = tmp16195;
var inst_16066__$1 = inst_16080;
var state_16182__$1 = (function (){var statearr_16201 = state_16182;
(statearr_16201[(18)] = inst_16079);

(statearr_16201[(13)] = inst_16066__$1);

(statearr_16201[(14)] = inst_16063__$1);

(statearr_16201[(15)] = inst_16065__$1);

(statearr_16201[(17)] = inst_16064__$1);

return statearr_16201;
})();
var statearr_16202_16281 = state_16182__$1;
(statearr_16202_16281[(2)] = null);

(statearr_16202_16281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (21))){
var inst_16104 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16206_16282 = state_16182__$1;
(statearr_16206_16282[(2)] = inst_16104);

(statearr_16206_16282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (31))){
var inst_16130 = (state_16182[(11)]);
var inst_16134 = done.call(null,null);
var inst_16135 = cljs.core.async.untap_STAR_.call(null,m,inst_16130);
var state_16182__$1 = (function (){var statearr_16207 = state_16182;
(statearr_16207[(19)] = inst_16134);

return statearr_16207;
})();
var statearr_16208_16283 = state_16182__$1;
(statearr_16208_16283[(2)] = inst_16135);

(statearr_16208_16283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (32))){
var inst_16123 = (state_16182[(9)]);
var inst_16125 = (state_16182[(10)]);
var inst_16122 = (state_16182[(20)]);
var inst_16124 = (state_16182[(21)]);
var inst_16137 = (state_16182[(2)]);
var inst_16138 = (inst_16125 + (1));
var tmp16203 = inst_16123;
var tmp16204 = inst_16122;
var tmp16205 = inst_16124;
var inst_16122__$1 = tmp16204;
var inst_16123__$1 = tmp16203;
var inst_16124__$1 = tmp16205;
var inst_16125__$1 = inst_16138;
var state_16182__$1 = (function (){var statearr_16209 = state_16182;
(statearr_16209[(9)] = inst_16123__$1);

(statearr_16209[(10)] = inst_16125__$1);

(statearr_16209[(20)] = inst_16122__$1);

(statearr_16209[(21)] = inst_16124__$1);

(statearr_16209[(22)] = inst_16137);

return statearr_16209;
})();
var statearr_16210_16284 = state_16182__$1;
(statearr_16210_16284[(2)] = null);

(statearr_16210_16284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (40))){
var inst_16150 = (state_16182[(23)]);
var inst_16154 = done.call(null,null);
var inst_16155 = cljs.core.async.untap_STAR_.call(null,m,inst_16150);
var state_16182__$1 = (function (){var statearr_16211 = state_16182;
(statearr_16211[(24)] = inst_16154);

return statearr_16211;
})();
var statearr_16212_16285 = state_16182__$1;
(statearr_16212_16285[(2)] = inst_16155);

(statearr_16212_16285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (33))){
var inst_16141 = (state_16182[(25)]);
var inst_16143 = cljs.core.chunked_seq_QMARK_.call(null,inst_16141);
var state_16182__$1 = state_16182;
if(inst_16143){
var statearr_16213_16286 = state_16182__$1;
(statearr_16213_16286[(1)] = (36));

} else {
var statearr_16214_16287 = state_16182__$1;
(statearr_16214_16287[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (13))){
var inst_16073 = (state_16182[(26)]);
var inst_16076 = cljs.core.async.close_BANG_.call(null,inst_16073);
var state_16182__$1 = state_16182;
var statearr_16215_16288 = state_16182__$1;
(statearr_16215_16288[(2)] = inst_16076);

(statearr_16215_16288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (22))){
var inst_16094 = (state_16182[(8)]);
var inst_16097 = cljs.core.async.close_BANG_.call(null,inst_16094);
var state_16182__$1 = state_16182;
var statearr_16216_16289 = state_16182__$1;
(statearr_16216_16289[(2)] = inst_16097);

(statearr_16216_16289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (36))){
var inst_16141 = (state_16182[(25)]);
var inst_16145 = cljs.core.chunk_first.call(null,inst_16141);
var inst_16146 = cljs.core.chunk_rest.call(null,inst_16141);
var inst_16147 = cljs.core.count.call(null,inst_16145);
var inst_16122 = inst_16146;
var inst_16123 = inst_16145;
var inst_16124 = inst_16147;
var inst_16125 = (0);
var state_16182__$1 = (function (){var statearr_16217 = state_16182;
(statearr_16217[(9)] = inst_16123);

(statearr_16217[(10)] = inst_16125);

(statearr_16217[(20)] = inst_16122);

(statearr_16217[(21)] = inst_16124);

return statearr_16217;
})();
var statearr_16218_16290 = state_16182__$1;
(statearr_16218_16290[(2)] = null);

(statearr_16218_16290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (41))){
var inst_16141 = (state_16182[(25)]);
var inst_16157 = (state_16182[(2)]);
var inst_16158 = cljs.core.next.call(null,inst_16141);
var inst_16122 = inst_16158;
var inst_16123 = null;
var inst_16124 = (0);
var inst_16125 = (0);
var state_16182__$1 = (function (){var statearr_16219 = state_16182;
(statearr_16219[(9)] = inst_16123);

(statearr_16219[(10)] = inst_16125);

(statearr_16219[(20)] = inst_16122);

(statearr_16219[(21)] = inst_16124);

(statearr_16219[(27)] = inst_16157);

return statearr_16219;
})();
var statearr_16220_16291 = state_16182__$1;
(statearr_16220_16291[(2)] = null);

(statearr_16220_16291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (43))){
var state_16182__$1 = state_16182;
var statearr_16221_16292 = state_16182__$1;
(statearr_16221_16292[(2)] = null);

(statearr_16221_16292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (29))){
var inst_16166 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16222_16293 = state_16182__$1;
(statearr_16222_16293[(2)] = inst_16166);

(statearr_16222_16293[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (44))){
var inst_16175 = (state_16182[(2)]);
var state_16182__$1 = (function (){var statearr_16223 = state_16182;
(statearr_16223[(28)] = inst_16175);

return statearr_16223;
})();
var statearr_16224_16294 = state_16182__$1;
(statearr_16224_16294[(2)] = null);

(statearr_16224_16294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (6))){
var inst_16114 = (state_16182[(29)]);
var inst_16113 = cljs.core.deref.call(null,cs);
var inst_16114__$1 = cljs.core.keys.call(null,inst_16113);
var inst_16115 = cljs.core.count.call(null,inst_16114__$1);
var inst_16116 = cljs.core.reset_BANG_.call(null,dctr,inst_16115);
var inst_16121 = cljs.core.seq.call(null,inst_16114__$1);
var inst_16122 = inst_16121;
var inst_16123 = null;
var inst_16124 = (0);
var inst_16125 = (0);
var state_16182__$1 = (function (){var statearr_16225 = state_16182;
(statearr_16225[(9)] = inst_16123);

(statearr_16225[(10)] = inst_16125);

(statearr_16225[(20)] = inst_16122);

(statearr_16225[(21)] = inst_16124);

(statearr_16225[(30)] = inst_16116);

(statearr_16225[(29)] = inst_16114__$1);

return statearr_16225;
})();
var statearr_16226_16295 = state_16182__$1;
(statearr_16226_16295[(2)] = null);

(statearr_16226_16295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (28))){
var inst_16122 = (state_16182[(20)]);
var inst_16141 = (state_16182[(25)]);
var inst_16141__$1 = cljs.core.seq.call(null,inst_16122);
var state_16182__$1 = (function (){var statearr_16227 = state_16182;
(statearr_16227[(25)] = inst_16141__$1);

return statearr_16227;
})();
if(inst_16141__$1){
var statearr_16228_16296 = state_16182__$1;
(statearr_16228_16296[(1)] = (33));

} else {
var statearr_16229_16297 = state_16182__$1;
(statearr_16229_16297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (25))){
var inst_16125 = (state_16182[(10)]);
var inst_16124 = (state_16182[(21)]);
var inst_16127 = (inst_16125 < inst_16124);
var inst_16128 = inst_16127;
var state_16182__$1 = state_16182;
if(cljs.core.truth_(inst_16128)){
var statearr_16230_16298 = state_16182__$1;
(statearr_16230_16298[(1)] = (27));

} else {
var statearr_16231_16299 = state_16182__$1;
(statearr_16231_16299[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (34))){
var state_16182__$1 = state_16182;
var statearr_16232_16300 = state_16182__$1;
(statearr_16232_16300[(2)] = null);

(statearr_16232_16300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (17))){
var state_16182__$1 = state_16182;
var statearr_16233_16301 = state_16182__$1;
(statearr_16233_16301[(2)] = null);

(statearr_16233_16301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (3))){
var inst_16180 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16182__$1,inst_16180);
} else {
if((state_val_16183 === (12))){
var inst_16109 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16234_16302 = state_16182__$1;
(statearr_16234_16302[(2)] = inst_16109);

(statearr_16234_16302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (2))){
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(4),ch);
} else {
if((state_val_16183 === (23))){
var state_16182__$1 = state_16182;
var statearr_16235_16303 = state_16182__$1;
(statearr_16235_16303[(2)] = null);

(statearr_16235_16303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (35))){
var inst_16164 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16236_16304 = state_16182__$1;
(statearr_16236_16304[(2)] = inst_16164);

(statearr_16236_16304[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (19))){
var inst_16083 = (state_16182[(7)]);
var inst_16087 = cljs.core.chunk_first.call(null,inst_16083);
var inst_16088 = cljs.core.chunk_rest.call(null,inst_16083);
var inst_16089 = cljs.core.count.call(null,inst_16087);
var inst_16063 = inst_16088;
var inst_16064 = inst_16087;
var inst_16065 = inst_16089;
var inst_16066 = (0);
var state_16182__$1 = (function (){var statearr_16237 = state_16182;
(statearr_16237[(13)] = inst_16066);

(statearr_16237[(14)] = inst_16063);

(statearr_16237[(15)] = inst_16065);

(statearr_16237[(17)] = inst_16064);

return statearr_16237;
})();
var statearr_16238_16305 = state_16182__$1;
(statearr_16238_16305[(2)] = null);

(statearr_16238_16305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (11))){
var inst_16083 = (state_16182[(7)]);
var inst_16063 = (state_16182[(14)]);
var inst_16083__$1 = cljs.core.seq.call(null,inst_16063);
var state_16182__$1 = (function (){var statearr_16239 = state_16182;
(statearr_16239[(7)] = inst_16083__$1);

return statearr_16239;
})();
if(inst_16083__$1){
var statearr_16240_16306 = state_16182__$1;
(statearr_16240_16306[(1)] = (16));

} else {
var statearr_16241_16307 = state_16182__$1;
(statearr_16241_16307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (9))){
var inst_16111 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16242_16308 = state_16182__$1;
(statearr_16242_16308[(2)] = inst_16111);

(statearr_16242_16308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (5))){
var inst_16061 = cljs.core.deref.call(null,cs);
var inst_16062 = cljs.core.seq.call(null,inst_16061);
var inst_16063 = inst_16062;
var inst_16064 = null;
var inst_16065 = (0);
var inst_16066 = (0);
var state_16182__$1 = (function (){var statearr_16243 = state_16182;
(statearr_16243[(13)] = inst_16066);

(statearr_16243[(14)] = inst_16063);

(statearr_16243[(15)] = inst_16065);

(statearr_16243[(17)] = inst_16064);

return statearr_16243;
})();
var statearr_16244_16309 = state_16182__$1;
(statearr_16244_16309[(2)] = null);

(statearr_16244_16309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (14))){
var state_16182__$1 = state_16182;
var statearr_16245_16310 = state_16182__$1;
(statearr_16245_16310[(2)] = null);

(statearr_16245_16310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (45))){
var inst_16172 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16246_16311 = state_16182__$1;
(statearr_16246_16311[(2)] = inst_16172);

(statearr_16246_16311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (26))){
var inst_16114 = (state_16182[(29)]);
var inst_16168 = (state_16182[(2)]);
var inst_16169 = cljs.core.seq.call(null,inst_16114);
var state_16182__$1 = (function (){var statearr_16247 = state_16182;
(statearr_16247[(31)] = inst_16168);

return statearr_16247;
})();
if(inst_16169){
var statearr_16248_16312 = state_16182__$1;
(statearr_16248_16312[(1)] = (42));

} else {
var statearr_16249_16313 = state_16182__$1;
(statearr_16249_16313[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (16))){
var inst_16083 = (state_16182[(7)]);
var inst_16085 = cljs.core.chunked_seq_QMARK_.call(null,inst_16083);
var state_16182__$1 = state_16182;
if(inst_16085){
var statearr_16250_16314 = state_16182__$1;
(statearr_16250_16314[(1)] = (19));

} else {
var statearr_16251_16315 = state_16182__$1;
(statearr_16251_16315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (38))){
var inst_16161 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16252_16316 = state_16182__$1;
(statearr_16252_16316[(2)] = inst_16161);

(statearr_16252_16316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (30))){
var state_16182__$1 = state_16182;
var statearr_16253_16317 = state_16182__$1;
(statearr_16253_16317[(2)] = null);

(statearr_16253_16317[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (10))){
var inst_16066 = (state_16182[(13)]);
var inst_16064 = (state_16182[(17)]);
var inst_16072 = cljs.core._nth.call(null,inst_16064,inst_16066);
var inst_16073 = cljs.core.nth.call(null,inst_16072,(0),null);
var inst_16074 = cljs.core.nth.call(null,inst_16072,(1),null);
var state_16182__$1 = (function (){var statearr_16254 = state_16182;
(statearr_16254[(26)] = inst_16073);

return statearr_16254;
})();
if(cljs.core.truth_(inst_16074)){
var statearr_16255_16318 = state_16182__$1;
(statearr_16255_16318[(1)] = (13));

} else {
var statearr_16256_16319 = state_16182__$1;
(statearr_16256_16319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (18))){
var inst_16107 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16257_16320 = state_16182__$1;
(statearr_16257_16320[(2)] = inst_16107);

(statearr_16257_16320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (42))){
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(45),dchan);
} else {
if((state_val_16183 === (37))){
var inst_16150 = (state_16182[(23)]);
var inst_16141 = (state_16182[(25)]);
var inst_16054 = (state_16182[(12)]);
var inst_16150__$1 = cljs.core.first.call(null,inst_16141);
var inst_16151 = cljs.core.async.put_BANG_.call(null,inst_16150__$1,inst_16054,done);
var state_16182__$1 = (function (){var statearr_16258 = state_16182;
(statearr_16258[(23)] = inst_16150__$1);

return statearr_16258;
})();
if(cljs.core.truth_(inst_16151)){
var statearr_16259_16321 = state_16182__$1;
(statearr_16259_16321[(1)] = (39));

} else {
var statearr_16260_16322 = state_16182__$1;
(statearr_16260_16322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (8))){
var inst_16066 = (state_16182[(13)]);
var inst_16065 = (state_16182[(15)]);
var inst_16068 = (inst_16066 < inst_16065);
var inst_16069 = inst_16068;
var state_16182__$1 = state_16182;
if(cljs.core.truth_(inst_16069)){
var statearr_16261_16323 = state_16182__$1;
(statearr_16261_16323[(1)] = (10));

} else {
var statearr_16262_16324 = state_16182__$1;
(statearr_16262_16324[(1)] = (11));

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
});})(c__7301__auto___16270,cs,m,dchan,dctr,done))
;
return ((function (switch__7245__auto__,c__7301__auto___16270,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_16266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16266[(0)] = state_machine__7246__auto__);

(statearr_16266[(1)] = (1));

return statearr_16266;
});
var state_machine__7246__auto____1 = (function (state_16182){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_16182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object)){
var ex__7249__auto__ = e16267;
var statearr_16268_16325 = state_16182;
(statearr_16268_16325[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16326 = state_16182;
state_16182 = G__16326;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___16270,cs,m,dchan,dctr,done))
})();
var state__7303__auto__ = (function (){var statearr_16269 = f__7302__auto__.call(null);
(statearr_16269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___16270);

return statearr_16269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___16270,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16328 = {};
return obj16328;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16329){
var map__16334 = p__16329;
var map__16334__$1 = ((cljs.core.seq_QMARK_.call(null,map__16334))?cljs.core.apply.call(null,cljs.core.hash_map,map__16334):map__16334);
var opts = map__16334__$1;
var statearr_16335_16338 = state;
(statearr_16335_16338[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16334,map__16334__$1,opts){
return (function (val){
var statearr_16336_16339 = state;
(statearr_16336_16339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16334,map__16334__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16337_16340 = state;
(statearr_16337_16340[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16329 = null;
if (arguments.length > 3) {
  p__16329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16329);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16341){
var state = cljs.core.first(arglist__16341);
arglist__16341 = cljs.core.next(arglist__16341);
var cont_block = cljs.core.first(arglist__16341);
arglist__16341 = cljs.core.next(arglist__16341);
var ports = cljs.core.first(arglist__16341);
var p__16329 = cljs.core.rest(arglist__16341);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16329);
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
if(typeof cljs.core.async.t16461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16461 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16462){
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
this.meta16462 = meta16462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16461.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16461.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16463){
var self__ = this;
var _16463__$1 = this;
return self__.meta16462;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16463,meta16462__$1){
var self__ = this;
var _16463__$1 = this;
return (new cljs.core.async.t16461(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16462__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16461.cljs$lang$type = true;

cljs.core.async.t16461.cljs$lang$ctorStr = "cljs.core.async/t16461";

cljs.core.async.t16461.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16461");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16461 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16461(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16462){
return (new cljs.core.async.t16461(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16462));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16461(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7301__auto___16580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16533){
var state_val_16534 = (state_16533[(1)]);
if((state_val_16534 === (7))){
var inst_16477 = (state_16533[(7)]);
var inst_16482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16477);
var state_16533__$1 = state_16533;
var statearr_16535_16581 = state_16533__$1;
(statearr_16535_16581[(2)] = inst_16482);

(statearr_16535_16581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (20))){
var inst_16492 = (state_16533[(8)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16533__$1,(23),out,inst_16492);
} else {
if((state_val_16534 === (1))){
var inst_16467 = (state_16533[(9)]);
var inst_16467__$1 = calc_state.call(null);
var inst_16468 = cljs.core.seq_QMARK_.call(null,inst_16467__$1);
var state_16533__$1 = (function (){var statearr_16536 = state_16533;
(statearr_16536[(9)] = inst_16467__$1);

return statearr_16536;
})();
if(inst_16468){
var statearr_16537_16582 = state_16533__$1;
(statearr_16537_16582[(1)] = (2));

} else {
var statearr_16538_16583 = state_16533__$1;
(statearr_16538_16583[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (24))){
var inst_16485 = (state_16533[(10)]);
var inst_16477 = inst_16485;
var state_16533__$1 = (function (){var statearr_16539 = state_16533;
(statearr_16539[(7)] = inst_16477);

return statearr_16539;
})();
var statearr_16540_16584 = state_16533__$1;
(statearr_16540_16584[(2)] = null);

(statearr_16540_16584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (4))){
var inst_16467 = (state_16533[(9)]);
var inst_16473 = (state_16533[(2)]);
var inst_16474 = cljs.core.get.call(null,inst_16473,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16475 = cljs.core.get.call(null,inst_16473,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16476 = cljs.core.get.call(null,inst_16473,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16477 = inst_16467;
var state_16533__$1 = (function (){var statearr_16541 = state_16533;
(statearr_16541[(11)] = inst_16476);

(statearr_16541[(12)] = inst_16475);

(statearr_16541[(13)] = inst_16474);

(statearr_16541[(7)] = inst_16477);

return statearr_16541;
})();
var statearr_16542_16585 = state_16533__$1;
(statearr_16542_16585[(2)] = null);

(statearr_16542_16585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (15))){
var state_16533__$1 = state_16533;
var statearr_16543_16586 = state_16533__$1;
(statearr_16543_16586[(2)] = null);

(statearr_16543_16586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (21))){
var inst_16485 = (state_16533[(10)]);
var inst_16477 = inst_16485;
var state_16533__$1 = (function (){var statearr_16544 = state_16533;
(statearr_16544[(7)] = inst_16477);

return statearr_16544;
})();
var statearr_16545_16587 = state_16533__$1;
(statearr_16545_16587[(2)] = null);

(statearr_16545_16587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (13))){
var inst_16529 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16546_16588 = state_16533__$1;
(statearr_16546_16588[(2)] = inst_16529);

(statearr_16546_16588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (22))){
var inst_16527 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16547_16589 = state_16533__$1;
(statearr_16547_16589[(2)] = inst_16527);

(statearr_16547_16589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (6))){
var inst_16531 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16533__$1,inst_16531);
} else {
if((state_val_16534 === (25))){
var state_16533__$1 = state_16533;
var statearr_16548_16590 = state_16533__$1;
(statearr_16548_16590[(2)] = null);

(statearr_16548_16590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (17))){
var inst_16507 = (state_16533[(14)]);
var state_16533__$1 = state_16533;
var statearr_16549_16591 = state_16533__$1;
(statearr_16549_16591[(2)] = inst_16507);

(statearr_16549_16591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (3))){
var inst_16467 = (state_16533[(9)]);
var state_16533__$1 = state_16533;
var statearr_16550_16592 = state_16533__$1;
(statearr_16550_16592[(2)] = inst_16467);

(statearr_16550_16592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (12))){
var inst_16488 = (state_16533[(15)]);
var inst_16493 = (state_16533[(16)]);
var inst_16507 = (state_16533[(14)]);
var inst_16507__$1 = inst_16488.call(null,inst_16493);
var state_16533__$1 = (function (){var statearr_16551 = state_16533;
(statearr_16551[(14)] = inst_16507__$1);

return statearr_16551;
})();
if(cljs.core.truth_(inst_16507__$1)){
var statearr_16552_16593 = state_16533__$1;
(statearr_16552_16593[(1)] = (17));

} else {
var statearr_16553_16594 = state_16533__$1;
(statearr_16553_16594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (2))){
var inst_16467 = (state_16533[(9)]);
var inst_16470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16467);
var state_16533__$1 = state_16533;
var statearr_16554_16595 = state_16533__$1;
(statearr_16554_16595[(2)] = inst_16470);

(statearr_16554_16595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (23))){
var inst_16518 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16518)){
var statearr_16555_16596 = state_16533__$1;
(statearr_16555_16596[(1)] = (24));

} else {
var statearr_16556_16597 = state_16533__$1;
(statearr_16556_16597[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (19))){
var inst_16515 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16515)){
var statearr_16557_16598 = state_16533__$1;
(statearr_16557_16598[(1)] = (20));

} else {
var statearr_16558_16599 = state_16533__$1;
(statearr_16558_16599[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (11))){
var inst_16492 = (state_16533[(8)]);
var inst_16498 = (inst_16492 == null);
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16498)){
var statearr_16559_16600 = state_16533__$1;
(statearr_16559_16600[(1)] = (14));

} else {
var statearr_16560_16601 = state_16533__$1;
(statearr_16560_16601[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (9))){
var inst_16485 = (state_16533[(10)]);
var inst_16485__$1 = (state_16533[(2)]);
var inst_16486 = cljs.core.get.call(null,inst_16485__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16487 = cljs.core.get.call(null,inst_16485__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16488 = cljs.core.get.call(null,inst_16485__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16533__$1 = (function (){var statearr_16561 = state_16533;
(statearr_16561[(15)] = inst_16488);

(statearr_16561[(10)] = inst_16485__$1);

(statearr_16561[(17)] = inst_16487);

return statearr_16561;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16533__$1,(10),inst_16486);
} else {
if((state_val_16534 === (5))){
var inst_16477 = (state_16533[(7)]);
var inst_16480 = cljs.core.seq_QMARK_.call(null,inst_16477);
var state_16533__$1 = state_16533;
if(inst_16480){
var statearr_16562_16602 = state_16533__$1;
(statearr_16562_16602[(1)] = (7));

} else {
var statearr_16563_16603 = state_16533__$1;
(statearr_16563_16603[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (14))){
var inst_16493 = (state_16533[(16)]);
var inst_16500 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16493);
var state_16533__$1 = state_16533;
var statearr_16564_16604 = state_16533__$1;
(statearr_16564_16604[(2)] = inst_16500);

(statearr_16564_16604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (26))){
var inst_16523 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16565_16605 = state_16533__$1;
(statearr_16565_16605[(2)] = inst_16523);

(statearr_16565_16605[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (16))){
var inst_16503 = (state_16533[(2)]);
var inst_16504 = calc_state.call(null);
var inst_16477 = inst_16504;
var state_16533__$1 = (function (){var statearr_16566 = state_16533;
(statearr_16566[(7)] = inst_16477);

(statearr_16566[(18)] = inst_16503);

return statearr_16566;
})();
var statearr_16567_16606 = state_16533__$1;
(statearr_16567_16606[(2)] = null);

(statearr_16567_16606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (10))){
var inst_16492 = (state_16533[(8)]);
var inst_16493 = (state_16533[(16)]);
var inst_16491 = (state_16533[(2)]);
var inst_16492__$1 = cljs.core.nth.call(null,inst_16491,(0),null);
var inst_16493__$1 = cljs.core.nth.call(null,inst_16491,(1),null);
var inst_16494 = (inst_16492__$1 == null);
var inst_16495 = cljs.core._EQ_.call(null,inst_16493__$1,change);
var inst_16496 = (inst_16494) || (inst_16495);
var state_16533__$1 = (function (){var statearr_16568 = state_16533;
(statearr_16568[(8)] = inst_16492__$1);

(statearr_16568[(16)] = inst_16493__$1);

return statearr_16568;
})();
if(cljs.core.truth_(inst_16496)){
var statearr_16569_16607 = state_16533__$1;
(statearr_16569_16607[(1)] = (11));

} else {
var statearr_16570_16608 = state_16533__$1;
(statearr_16570_16608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (18))){
var inst_16488 = (state_16533[(15)]);
var inst_16493 = (state_16533[(16)]);
var inst_16487 = (state_16533[(17)]);
var inst_16510 = cljs.core.empty_QMARK_.call(null,inst_16488);
var inst_16511 = inst_16487.call(null,inst_16493);
var inst_16512 = cljs.core.not.call(null,inst_16511);
var inst_16513 = (inst_16510) && (inst_16512);
var state_16533__$1 = state_16533;
var statearr_16571_16609 = state_16533__$1;
(statearr_16571_16609[(2)] = inst_16513);

(statearr_16571_16609[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (8))){
var inst_16477 = (state_16533[(7)]);
var state_16533__$1 = state_16533;
var statearr_16572_16610 = state_16533__$1;
(statearr_16572_16610[(2)] = inst_16477);

(statearr_16572_16610[(1)] = (9));


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
});})(c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7245__auto__,c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_16576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16576[(0)] = state_machine__7246__auto__);

(statearr_16576[(1)] = (1));

return statearr_16576;
});
var state_machine__7246__auto____1 = (function (state_16533){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_16533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e16577){if((e16577 instanceof Object)){
var ex__7249__auto__ = e16577;
var statearr_16578_16611 = state_16533;
(statearr_16578_16611[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16612 = state_16533;
state_16533 = G__16612;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_16533){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7303__auto__ = (function (){var statearr_16579 = f__7302__auto__.call(null);
(statearr_16579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___16580);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___16580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16614 = {};
return obj16614;
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
return (function (p1__16615_SHARP_){
if(cljs.core.truth_(p1__16615_SHARP_.call(null,topic))){
return p1__16615_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16615_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16738 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16738 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16739){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16739 = meta16739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16738.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16738.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16738.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16738.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16740){
var self__ = this;
var _16740__$1 = this;
return self__.meta16739;
});})(mults,ensure_mult))
;

cljs.core.async.t16738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16740,meta16739__$1){
var self__ = this;
var _16740__$1 = this;
return (new cljs.core.async.t16738(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16739__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16738.cljs$lang$type = true;

cljs.core.async.t16738.cljs$lang$ctorStr = "cljs.core.async/t16738";

cljs.core.async.t16738.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16738");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16738 = ((function (mults,ensure_mult){
return (function __GT_t16738(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16739){
return (new cljs.core.async.t16738(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16739));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16738(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7301__auto___16860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___16860,mults,ensure_mult,p){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___16860,mults,ensure_mult,p){
return (function (state_16812){
var state_val_16813 = (state_16812[(1)]);
if((state_val_16813 === (7))){
var inst_16808 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16814_16861 = state_16812__$1;
(statearr_16814_16861[(2)] = inst_16808);

(statearr_16814_16861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (20))){
var state_16812__$1 = state_16812;
var statearr_16815_16862 = state_16812__$1;
(statearr_16815_16862[(2)] = null);

(statearr_16815_16862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (1))){
var state_16812__$1 = state_16812;
var statearr_16816_16863 = state_16812__$1;
(statearr_16816_16863[(2)] = null);

(statearr_16816_16863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (24))){
var inst_16791 = (state_16812[(7)]);
var inst_16800 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16791);
var state_16812__$1 = state_16812;
var statearr_16817_16864 = state_16812__$1;
(statearr_16817_16864[(2)] = inst_16800);

(statearr_16817_16864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (4))){
var inst_16743 = (state_16812[(8)]);
var inst_16743__$1 = (state_16812[(2)]);
var inst_16744 = (inst_16743__$1 == null);
var state_16812__$1 = (function (){var statearr_16818 = state_16812;
(statearr_16818[(8)] = inst_16743__$1);

return statearr_16818;
})();
if(cljs.core.truth_(inst_16744)){
var statearr_16819_16865 = state_16812__$1;
(statearr_16819_16865[(1)] = (5));

} else {
var statearr_16820_16866 = state_16812__$1;
(statearr_16820_16866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (15))){
var inst_16785 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16821_16867 = state_16812__$1;
(statearr_16821_16867[(2)] = inst_16785);

(statearr_16821_16867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (21))){
var inst_16805 = (state_16812[(2)]);
var state_16812__$1 = (function (){var statearr_16822 = state_16812;
(statearr_16822[(9)] = inst_16805);

return statearr_16822;
})();
var statearr_16823_16868 = state_16812__$1;
(statearr_16823_16868[(2)] = null);

(statearr_16823_16868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (13))){
var inst_16767 = (state_16812[(10)]);
var inst_16769 = cljs.core.chunked_seq_QMARK_.call(null,inst_16767);
var state_16812__$1 = state_16812;
if(inst_16769){
var statearr_16824_16869 = state_16812__$1;
(statearr_16824_16869[(1)] = (16));

} else {
var statearr_16825_16870 = state_16812__$1;
(statearr_16825_16870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (22))){
var inst_16797 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
if(cljs.core.truth_(inst_16797)){
var statearr_16826_16871 = state_16812__$1;
(statearr_16826_16871[(1)] = (23));

} else {
var statearr_16827_16872 = state_16812__$1;
(statearr_16827_16872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (6))){
var inst_16793 = (state_16812[(11)]);
var inst_16743 = (state_16812[(8)]);
var inst_16791 = (state_16812[(7)]);
var inst_16791__$1 = topic_fn.call(null,inst_16743);
var inst_16792 = cljs.core.deref.call(null,mults);
var inst_16793__$1 = cljs.core.get.call(null,inst_16792,inst_16791__$1);
var state_16812__$1 = (function (){var statearr_16828 = state_16812;
(statearr_16828[(11)] = inst_16793__$1);

(statearr_16828[(7)] = inst_16791__$1);

return statearr_16828;
})();
if(cljs.core.truth_(inst_16793__$1)){
var statearr_16829_16873 = state_16812__$1;
(statearr_16829_16873[(1)] = (19));

} else {
var statearr_16830_16874 = state_16812__$1;
(statearr_16830_16874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (25))){
var inst_16802 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16831_16875 = state_16812__$1;
(statearr_16831_16875[(2)] = inst_16802);

(statearr_16831_16875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (17))){
var inst_16767 = (state_16812[(10)]);
var inst_16776 = cljs.core.first.call(null,inst_16767);
var inst_16777 = cljs.core.async.muxch_STAR_.call(null,inst_16776);
var inst_16778 = cljs.core.async.close_BANG_.call(null,inst_16777);
var inst_16779 = cljs.core.next.call(null,inst_16767);
var inst_16753 = inst_16779;
var inst_16754 = null;
var inst_16755 = (0);
var inst_16756 = (0);
var state_16812__$1 = (function (){var statearr_16832 = state_16812;
(statearr_16832[(12)] = inst_16778);

(statearr_16832[(13)] = inst_16754);

(statearr_16832[(14)] = inst_16753);

(statearr_16832[(15)] = inst_16756);

(statearr_16832[(16)] = inst_16755);

return statearr_16832;
})();
var statearr_16833_16876 = state_16812__$1;
(statearr_16833_16876[(2)] = null);

(statearr_16833_16876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (3))){
var inst_16810 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16812__$1,inst_16810);
} else {
if((state_val_16813 === (12))){
var inst_16787 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16834_16877 = state_16812__$1;
(statearr_16834_16877[(2)] = inst_16787);

(statearr_16834_16877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (2))){
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16812__$1,(4),ch);
} else {
if((state_val_16813 === (23))){
var state_16812__$1 = state_16812;
var statearr_16835_16878 = state_16812__$1;
(statearr_16835_16878[(2)] = null);

(statearr_16835_16878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (19))){
var inst_16793 = (state_16812[(11)]);
var inst_16743 = (state_16812[(8)]);
var inst_16795 = cljs.core.async.muxch_STAR_.call(null,inst_16793);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16812__$1,(22),inst_16795,inst_16743);
} else {
if((state_val_16813 === (11))){
var inst_16767 = (state_16812[(10)]);
var inst_16753 = (state_16812[(14)]);
var inst_16767__$1 = cljs.core.seq.call(null,inst_16753);
var state_16812__$1 = (function (){var statearr_16836 = state_16812;
(statearr_16836[(10)] = inst_16767__$1);

return statearr_16836;
})();
if(inst_16767__$1){
var statearr_16837_16879 = state_16812__$1;
(statearr_16837_16879[(1)] = (13));

} else {
var statearr_16838_16880 = state_16812__$1;
(statearr_16838_16880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (9))){
var inst_16789 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16839_16881 = state_16812__$1;
(statearr_16839_16881[(2)] = inst_16789);

(statearr_16839_16881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (5))){
var inst_16750 = cljs.core.deref.call(null,mults);
var inst_16751 = cljs.core.vals.call(null,inst_16750);
var inst_16752 = cljs.core.seq.call(null,inst_16751);
var inst_16753 = inst_16752;
var inst_16754 = null;
var inst_16755 = (0);
var inst_16756 = (0);
var state_16812__$1 = (function (){var statearr_16840 = state_16812;
(statearr_16840[(13)] = inst_16754);

(statearr_16840[(14)] = inst_16753);

(statearr_16840[(15)] = inst_16756);

(statearr_16840[(16)] = inst_16755);

return statearr_16840;
})();
var statearr_16841_16882 = state_16812__$1;
(statearr_16841_16882[(2)] = null);

(statearr_16841_16882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (14))){
var state_16812__$1 = state_16812;
var statearr_16845_16883 = state_16812__$1;
(statearr_16845_16883[(2)] = null);

(statearr_16845_16883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (16))){
var inst_16767 = (state_16812[(10)]);
var inst_16771 = cljs.core.chunk_first.call(null,inst_16767);
var inst_16772 = cljs.core.chunk_rest.call(null,inst_16767);
var inst_16773 = cljs.core.count.call(null,inst_16771);
var inst_16753 = inst_16772;
var inst_16754 = inst_16771;
var inst_16755 = inst_16773;
var inst_16756 = (0);
var state_16812__$1 = (function (){var statearr_16846 = state_16812;
(statearr_16846[(13)] = inst_16754);

(statearr_16846[(14)] = inst_16753);

(statearr_16846[(15)] = inst_16756);

(statearr_16846[(16)] = inst_16755);

return statearr_16846;
})();
var statearr_16847_16884 = state_16812__$1;
(statearr_16847_16884[(2)] = null);

(statearr_16847_16884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (10))){
var inst_16754 = (state_16812[(13)]);
var inst_16753 = (state_16812[(14)]);
var inst_16756 = (state_16812[(15)]);
var inst_16755 = (state_16812[(16)]);
var inst_16761 = cljs.core._nth.call(null,inst_16754,inst_16756);
var inst_16762 = cljs.core.async.muxch_STAR_.call(null,inst_16761);
var inst_16763 = cljs.core.async.close_BANG_.call(null,inst_16762);
var inst_16764 = (inst_16756 + (1));
var tmp16842 = inst_16754;
var tmp16843 = inst_16753;
var tmp16844 = inst_16755;
var inst_16753__$1 = tmp16843;
var inst_16754__$1 = tmp16842;
var inst_16755__$1 = tmp16844;
var inst_16756__$1 = inst_16764;
var state_16812__$1 = (function (){var statearr_16848 = state_16812;
(statearr_16848[(13)] = inst_16754__$1);

(statearr_16848[(14)] = inst_16753__$1);

(statearr_16848[(15)] = inst_16756__$1);

(statearr_16848[(16)] = inst_16755__$1);

(statearr_16848[(17)] = inst_16763);

return statearr_16848;
})();
var statearr_16849_16885 = state_16812__$1;
(statearr_16849_16885[(2)] = null);

(statearr_16849_16885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (18))){
var inst_16782 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16850_16886 = state_16812__$1;
(statearr_16850_16886[(2)] = inst_16782);

(statearr_16850_16886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16813 === (8))){
var inst_16756 = (state_16812[(15)]);
var inst_16755 = (state_16812[(16)]);
var inst_16758 = (inst_16756 < inst_16755);
var inst_16759 = inst_16758;
var state_16812__$1 = state_16812;
if(cljs.core.truth_(inst_16759)){
var statearr_16851_16887 = state_16812__$1;
(statearr_16851_16887[(1)] = (10));

} else {
var statearr_16852_16888 = state_16812__$1;
(statearr_16852_16888[(1)] = (11));

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
});})(c__7301__auto___16860,mults,ensure_mult,p))
;
return ((function (switch__7245__auto__,c__7301__auto___16860,mults,ensure_mult,p){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_16856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16856[(0)] = state_machine__7246__auto__);

(statearr_16856[(1)] = (1));

return statearr_16856;
});
var state_machine__7246__auto____1 = (function (state_16812){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_16812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e16857){if((e16857 instanceof Object)){
var ex__7249__auto__ = e16857;
var statearr_16858_16889 = state_16812;
(statearr_16858_16889[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16890 = state_16812;
state_16812 = G__16890;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_16812){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_16812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___16860,mults,ensure_mult,p))
})();
var state__7303__auto__ = (function (){var statearr_16859 = f__7302__auto__.call(null);
(statearr_16859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___16860);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___16860,mults,ensure_mult,p))
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
var c__7301__auto___17027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16997){
var state_val_16998 = (state_16997[(1)]);
if((state_val_16998 === (7))){
var state_16997__$1 = state_16997;
var statearr_16999_17028 = state_16997__$1;
(statearr_16999_17028[(2)] = null);

(statearr_16999_17028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (1))){
var state_16997__$1 = state_16997;
var statearr_17000_17029 = state_16997__$1;
(statearr_17000_17029[(2)] = null);

(statearr_17000_17029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (4))){
var inst_16961 = (state_16997[(7)]);
var inst_16963 = (inst_16961 < cnt);
var state_16997__$1 = state_16997;
if(cljs.core.truth_(inst_16963)){
var statearr_17001_17030 = state_16997__$1;
(statearr_17001_17030[(1)] = (6));

} else {
var statearr_17002_17031 = state_16997__$1;
(statearr_17002_17031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (15))){
var inst_16993 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17003_17032 = state_16997__$1;
(statearr_17003_17032[(2)] = inst_16993);

(statearr_17003_17032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (13))){
var inst_16986 = cljs.core.async.close_BANG_.call(null,out);
var state_16997__$1 = state_16997;
var statearr_17004_17033 = state_16997__$1;
(statearr_17004_17033[(2)] = inst_16986);

(statearr_17004_17033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (6))){
var state_16997__$1 = state_16997;
var statearr_17005_17034 = state_16997__$1;
(statearr_17005_17034[(2)] = null);

(statearr_17005_17034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (3))){
var inst_16995 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16997__$1,inst_16995);
} else {
if((state_val_16998 === (12))){
var inst_16983 = (state_16997[(8)]);
var inst_16983__$1 = (state_16997[(2)]);
var inst_16984 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16983__$1);
var state_16997__$1 = (function (){var statearr_17006 = state_16997;
(statearr_17006[(8)] = inst_16983__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16984)){
var statearr_17007_17035 = state_16997__$1;
(statearr_17007_17035[(1)] = (13));

} else {
var statearr_17008_17036 = state_16997__$1;
(statearr_17008_17036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (2))){
var inst_16960 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16961 = (0);
var state_16997__$1 = (function (){var statearr_17009 = state_16997;
(statearr_17009[(7)] = inst_16961);

(statearr_17009[(9)] = inst_16960);

return statearr_17009;
})();
var statearr_17010_17037 = state_16997__$1;
(statearr_17010_17037[(2)] = null);

(statearr_17010_17037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (11))){
var inst_16961 = (state_16997[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16997,(10),Object,null,(9));
var inst_16970 = chs__$1.call(null,inst_16961);
var inst_16971 = done.call(null,inst_16961);
var inst_16972 = cljs.core.async.take_BANG_.call(null,inst_16970,inst_16971);
var state_16997__$1 = state_16997;
var statearr_17011_17038 = state_16997__$1;
(statearr_17011_17038[(2)] = inst_16972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16997__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (9))){
var inst_16961 = (state_16997[(7)]);
var inst_16974 = (state_16997[(2)]);
var inst_16975 = (inst_16961 + (1));
var inst_16961__$1 = inst_16975;
var state_16997__$1 = (function (){var statearr_17012 = state_16997;
(statearr_17012[(7)] = inst_16961__$1);

(statearr_17012[(10)] = inst_16974);

return statearr_17012;
})();
var statearr_17013_17039 = state_16997__$1;
(statearr_17013_17039[(2)] = null);

(statearr_17013_17039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (5))){
var inst_16981 = (state_16997[(2)]);
var state_16997__$1 = (function (){var statearr_17014 = state_16997;
(statearr_17014[(11)] = inst_16981);

return statearr_17014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16997__$1,(12),dchan);
} else {
if((state_val_16998 === (14))){
var inst_16983 = (state_16997[(8)]);
var inst_16988 = cljs.core.apply.call(null,f,inst_16983);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16997__$1,(16),out,inst_16988);
} else {
if((state_val_16998 === (16))){
var inst_16990 = (state_16997[(2)]);
var state_16997__$1 = (function (){var statearr_17015 = state_16997;
(statearr_17015[(12)] = inst_16990);

return statearr_17015;
})();
var statearr_17016_17040 = state_16997__$1;
(statearr_17016_17040[(2)] = null);

(statearr_17016_17040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (10))){
var inst_16965 = (state_16997[(2)]);
var inst_16966 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16997__$1 = (function (){var statearr_17017 = state_16997;
(statearr_17017[(13)] = inst_16965);

return statearr_17017;
})();
var statearr_17018_17041 = state_16997__$1;
(statearr_17018_17041[(2)] = inst_16966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16997__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (8))){
var inst_16979 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17019_17042 = state_16997__$1;
(statearr_17019_17042[(2)] = inst_16979);

(statearr_17019_17042[(1)] = (5));


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
});})(c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7245__auto__,c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17023[(0)] = state_machine__7246__auto__);

(statearr_17023[(1)] = (1));

return statearr_17023;
});
var state_machine__7246__auto____1 = (function (state_16997){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_16997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17024){if((e17024 instanceof Object)){
var ex__7249__auto__ = e17024;
var statearr_17025_17043 = state_16997;
(statearr_17025_17043[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17044 = state_16997;
state_16997 = G__17044;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_16997){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_16997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7303__auto__ = (function (){var statearr_17026 = f__7302__auto__.call(null);
(statearr_17026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17027);

return statearr_17026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17027,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7301__auto___17152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17152,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17152,out){
return (function (state_17128){
var state_val_17129 = (state_17128[(1)]);
if((state_val_17129 === (7))){
var inst_17107 = (state_17128[(7)]);
var inst_17108 = (state_17128[(8)]);
var inst_17107__$1 = (state_17128[(2)]);
var inst_17108__$1 = cljs.core.nth.call(null,inst_17107__$1,(0),null);
var inst_17109 = cljs.core.nth.call(null,inst_17107__$1,(1),null);
var inst_17110 = (inst_17108__$1 == null);
var state_17128__$1 = (function (){var statearr_17130 = state_17128;
(statearr_17130[(9)] = inst_17109);

(statearr_17130[(7)] = inst_17107__$1);

(statearr_17130[(8)] = inst_17108__$1);

return statearr_17130;
})();
if(cljs.core.truth_(inst_17110)){
var statearr_17131_17153 = state_17128__$1;
(statearr_17131_17153[(1)] = (8));

} else {
var statearr_17132_17154 = state_17128__$1;
(statearr_17132_17154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (1))){
var inst_17099 = cljs.core.vec.call(null,chs);
var inst_17100 = inst_17099;
var state_17128__$1 = (function (){var statearr_17133 = state_17128;
(statearr_17133[(10)] = inst_17100);

return statearr_17133;
})();
var statearr_17134_17155 = state_17128__$1;
(statearr_17134_17155[(2)] = null);

(statearr_17134_17155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (4))){
var inst_17100 = (state_17128[(10)]);
var state_17128__$1 = state_17128;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17128__$1,(7),inst_17100);
} else {
if((state_val_17129 === (6))){
var inst_17124 = (state_17128[(2)]);
var state_17128__$1 = state_17128;
var statearr_17135_17156 = state_17128__$1;
(statearr_17135_17156[(2)] = inst_17124);

(statearr_17135_17156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (3))){
var inst_17126 = (state_17128[(2)]);
var state_17128__$1 = state_17128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17128__$1,inst_17126);
} else {
if((state_val_17129 === (2))){
var inst_17100 = (state_17128[(10)]);
var inst_17102 = cljs.core.count.call(null,inst_17100);
var inst_17103 = (inst_17102 > (0));
var state_17128__$1 = state_17128;
if(cljs.core.truth_(inst_17103)){
var statearr_17137_17157 = state_17128__$1;
(statearr_17137_17157[(1)] = (4));

} else {
var statearr_17138_17158 = state_17128__$1;
(statearr_17138_17158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (11))){
var inst_17100 = (state_17128[(10)]);
var inst_17117 = (state_17128[(2)]);
var tmp17136 = inst_17100;
var inst_17100__$1 = tmp17136;
var state_17128__$1 = (function (){var statearr_17139 = state_17128;
(statearr_17139[(10)] = inst_17100__$1);

(statearr_17139[(11)] = inst_17117);

return statearr_17139;
})();
var statearr_17140_17159 = state_17128__$1;
(statearr_17140_17159[(2)] = null);

(statearr_17140_17159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (9))){
var inst_17108 = (state_17128[(8)]);
var state_17128__$1 = state_17128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17128__$1,(11),out,inst_17108);
} else {
if((state_val_17129 === (5))){
var inst_17122 = cljs.core.async.close_BANG_.call(null,out);
var state_17128__$1 = state_17128;
var statearr_17141_17160 = state_17128__$1;
(statearr_17141_17160[(2)] = inst_17122);

(statearr_17141_17160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (10))){
var inst_17120 = (state_17128[(2)]);
var state_17128__$1 = state_17128;
var statearr_17142_17161 = state_17128__$1;
(statearr_17142_17161[(2)] = inst_17120);

(statearr_17142_17161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (8))){
var inst_17109 = (state_17128[(9)]);
var inst_17100 = (state_17128[(10)]);
var inst_17107 = (state_17128[(7)]);
var inst_17108 = (state_17128[(8)]);
var inst_17112 = (function (){var c = inst_17109;
var v = inst_17108;
var vec__17105 = inst_17107;
var cs = inst_17100;
return ((function (c,v,vec__17105,cs,inst_17109,inst_17100,inst_17107,inst_17108,state_val_17129,c__7301__auto___17152,out){
return (function (p1__17045_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17045_SHARP_);
});
;})(c,v,vec__17105,cs,inst_17109,inst_17100,inst_17107,inst_17108,state_val_17129,c__7301__auto___17152,out))
})();
var inst_17113 = cljs.core.filterv.call(null,inst_17112,inst_17100);
var inst_17100__$1 = inst_17113;
var state_17128__$1 = (function (){var statearr_17143 = state_17128;
(statearr_17143[(10)] = inst_17100__$1);

return statearr_17143;
})();
var statearr_17144_17162 = state_17128__$1;
(statearr_17144_17162[(2)] = null);

(statearr_17144_17162[(1)] = (2));


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
});})(c__7301__auto___17152,out))
;
return ((function (switch__7245__auto__,c__7301__auto___17152,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17148[(0)] = state_machine__7246__auto__);

(statearr_17148[(1)] = (1));

return statearr_17148;
});
var state_machine__7246__auto____1 = (function (state_17128){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17149){if((e17149 instanceof Object)){
var ex__7249__auto__ = e17149;
var statearr_17150_17163 = state_17128;
(statearr_17150_17163[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17164 = state_17128;
state_17128 = G__17164;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17128){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17152,out))
})();
var state__7303__auto__ = (function (){var statearr_17151 = f__7302__auto__.call(null);
(statearr_17151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17152);

return statearr_17151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17152,out))
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
var c__7301__auto___17257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17257,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17257,out){
return (function (state_17234){
var state_val_17235 = (state_17234[(1)]);
if((state_val_17235 === (7))){
var inst_17216 = (state_17234[(7)]);
var inst_17216__$1 = (state_17234[(2)]);
var inst_17217 = (inst_17216__$1 == null);
var inst_17218 = cljs.core.not.call(null,inst_17217);
var state_17234__$1 = (function (){var statearr_17236 = state_17234;
(statearr_17236[(7)] = inst_17216__$1);

return statearr_17236;
})();
if(inst_17218){
var statearr_17237_17258 = state_17234__$1;
(statearr_17237_17258[(1)] = (8));

} else {
var statearr_17238_17259 = state_17234__$1;
(statearr_17238_17259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (1))){
var inst_17211 = (0);
var state_17234__$1 = (function (){var statearr_17239 = state_17234;
(statearr_17239[(8)] = inst_17211);

return statearr_17239;
})();
var statearr_17240_17260 = state_17234__$1;
(statearr_17240_17260[(2)] = null);

(statearr_17240_17260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (4))){
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17234__$1,(7),ch);
} else {
if((state_val_17235 === (6))){
var inst_17229 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
var statearr_17241_17261 = state_17234__$1;
(statearr_17241_17261[(2)] = inst_17229);

(statearr_17241_17261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (3))){
var inst_17231 = (state_17234[(2)]);
var inst_17232 = cljs.core.async.close_BANG_.call(null,out);
var state_17234__$1 = (function (){var statearr_17242 = state_17234;
(statearr_17242[(9)] = inst_17231);

return statearr_17242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17234__$1,inst_17232);
} else {
if((state_val_17235 === (2))){
var inst_17211 = (state_17234[(8)]);
var inst_17213 = (inst_17211 < n);
var state_17234__$1 = state_17234;
if(cljs.core.truth_(inst_17213)){
var statearr_17243_17262 = state_17234__$1;
(statearr_17243_17262[(1)] = (4));

} else {
var statearr_17244_17263 = state_17234__$1;
(statearr_17244_17263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (11))){
var inst_17211 = (state_17234[(8)]);
var inst_17221 = (state_17234[(2)]);
var inst_17222 = (inst_17211 + (1));
var inst_17211__$1 = inst_17222;
var state_17234__$1 = (function (){var statearr_17245 = state_17234;
(statearr_17245[(10)] = inst_17221);

(statearr_17245[(8)] = inst_17211__$1);

return statearr_17245;
})();
var statearr_17246_17264 = state_17234__$1;
(statearr_17246_17264[(2)] = null);

(statearr_17246_17264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (9))){
var state_17234__$1 = state_17234;
var statearr_17247_17265 = state_17234__$1;
(statearr_17247_17265[(2)] = null);

(statearr_17247_17265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (5))){
var state_17234__$1 = state_17234;
var statearr_17248_17266 = state_17234__$1;
(statearr_17248_17266[(2)] = null);

(statearr_17248_17266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (10))){
var inst_17226 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
var statearr_17249_17267 = state_17234__$1;
(statearr_17249_17267[(2)] = inst_17226);

(statearr_17249_17267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (8))){
var inst_17216 = (state_17234[(7)]);
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17234__$1,(11),out,inst_17216);
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
});})(c__7301__auto___17257,out))
;
return ((function (switch__7245__auto__,c__7301__auto___17257,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17253[(0)] = state_machine__7246__auto__);

(statearr_17253[(1)] = (1));

return statearr_17253;
});
var state_machine__7246__auto____1 = (function (state_17234){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17254){if((e17254 instanceof Object)){
var ex__7249__auto__ = e17254;
var statearr_17255_17268 = state_17234;
(statearr_17255_17268[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17269 = state_17234;
state_17234 = G__17269;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17234){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17257,out))
})();
var state__7303__auto__ = (function (){var statearr_17256 = f__7302__auto__.call(null);
(statearr_17256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17257);

return statearr_17256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17257,out))
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
if(typeof cljs.core.async.t17277 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17277 = (function (ch,f,map_LT_,meta17278){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17278 = meta17278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17280 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17280 = (function (fn1,_,meta17278,map_LT_,f,ch,meta17281){
this.fn1 = fn1;
this._ = _;
this.meta17278 = meta17278;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17281 = meta17281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17280.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17270_SHARP_){
return f1.call(null,(((p1__17270_SHARP_ == null))?null:self__.f.call(null,p1__17270_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17282){
var self__ = this;
var _17282__$1 = this;
return self__.meta17281;
});})(___$1))
;

cljs.core.async.t17280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17282,meta17281__$1){
var self__ = this;
var _17282__$1 = this;
return (new cljs.core.async.t17280(self__.fn1,self__._,self__.meta17278,self__.map_LT_,self__.f,self__.ch,meta17281__$1));
});})(___$1))
;

cljs.core.async.t17280.cljs$lang$type = true;

cljs.core.async.t17280.cljs$lang$ctorStr = "cljs.core.async/t17280";

cljs.core.async.t17280.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17280");
});})(___$1))
;

cljs.core.async.__GT_t17280 = ((function (___$1){
return (function __GT_t17280(fn1__$1,___$2,meta17278__$1,map_LT___$1,f__$1,ch__$1,meta17281){
return (new cljs.core.async.t17280(fn1__$1,___$2,meta17278__$1,map_LT___$1,f__$1,ch__$1,meta17281));
});})(___$1))
;

}

return (new cljs.core.async.t17280(fn1,___$1,self__.meta17278,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17279){
var self__ = this;
var _17279__$1 = this;
return self__.meta17278;
});

cljs.core.async.t17277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17279,meta17278__$1){
var self__ = this;
var _17279__$1 = this;
return (new cljs.core.async.t17277(self__.ch,self__.f,self__.map_LT_,meta17278__$1));
});

cljs.core.async.t17277.cljs$lang$type = true;

cljs.core.async.t17277.cljs$lang$ctorStr = "cljs.core.async/t17277";

cljs.core.async.t17277.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17277");
});

cljs.core.async.__GT_t17277 = (function __GT_t17277(ch__$1,f__$1,map_LT___$1,meta17278){
return (new cljs.core.async.t17277(ch__$1,f__$1,map_LT___$1,meta17278));
});

}

return (new cljs.core.async.t17277(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17286 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17286 = (function (ch,f,map_GT_,meta17287){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17287 = meta17287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17288){
var self__ = this;
var _17288__$1 = this;
return self__.meta17287;
});

cljs.core.async.t17286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17288,meta17287__$1){
var self__ = this;
var _17288__$1 = this;
return (new cljs.core.async.t17286(self__.ch,self__.f,self__.map_GT_,meta17287__$1));
});

cljs.core.async.t17286.cljs$lang$type = true;

cljs.core.async.t17286.cljs$lang$ctorStr = "cljs.core.async/t17286";

cljs.core.async.t17286.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17286");
});

cljs.core.async.__GT_t17286 = (function __GT_t17286(ch__$1,f__$1,map_GT___$1,meta17287){
return (new cljs.core.async.t17286(ch__$1,f__$1,map_GT___$1,meta17287));
});

}

return (new cljs.core.async.t17286(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17292 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17292 = (function (ch,p,filter_GT_,meta17293){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17293 = meta17293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17294){
var self__ = this;
var _17294__$1 = this;
return self__.meta17293;
});

cljs.core.async.t17292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17294,meta17293__$1){
var self__ = this;
var _17294__$1 = this;
return (new cljs.core.async.t17292(self__.ch,self__.p,self__.filter_GT_,meta17293__$1));
});

cljs.core.async.t17292.cljs$lang$type = true;

cljs.core.async.t17292.cljs$lang$ctorStr = "cljs.core.async/t17292";

cljs.core.async.t17292.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17292");
});

cljs.core.async.__GT_t17292 = (function __GT_t17292(ch__$1,p__$1,filter_GT___$1,meta17293){
return (new cljs.core.async.t17292(ch__$1,p__$1,filter_GT___$1,meta17293));
});

}

return (new cljs.core.async.t17292(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7301__auto___17377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17377,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17377,out){
return (function (state_17356){
var state_val_17357 = (state_17356[(1)]);
if((state_val_17357 === (7))){
var inst_17352 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17358_17378 = state_17356__$1;
(statearr_17358_17378[(2)] = inst_17352);

(statearr_17358_17378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (1))){
var state_17356__$1 = state_17356;
var statearr_17359_17379 = state_17356__$1;
(statearr_17359_17379[(2)] = null);

(statearr_17359_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (4))){
var inst_17338 = (state_17356[(7)]);
var inst_17338__$1 = (state_17356[(2)]);
var inst_17339 = (inst_17338__$1 == null);
var state_17356__$1 = (function (){var statearr_17360 = state_17356;
(statearr_17360[(7)] = inst_17338__$1);

return statearr_17360;
})();
if(cljs.core.truth_(inst_17339)){
var statearr_17361_17380 = state_17356__$1;
(statearr_17361_17380[(1)] = (5));

} else {
var statearr_17362_17381 = state_17356__$1;
(statearr_17362_17381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (6))){
var inst_17338 = (state_17356[(7)]);
var inst_17343 = p.call(null,inst_17338);
var state_17356__$1 = state_17356;
if(cljs.core.truth_(inst_17343)){
var statearr_17363_17382 = state_17356__$1;
(statearr_17363_17382[(1)] = (8));

} else {
var statearr_17364_17383 = state_17356__$1;
(statearr_17364_17383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (3))){
var inst_17354 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17356__$1,inst_17354);
} else {
if((state_val_17357 === (2))){
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17356__$1,(4),ch);
} else {
if((state_val_17357 === (11))){
var inst_17346 = (state_17356[(2)]);
var state_17356__$1 = state_17356;
var statearr_17365_17384 = state_17356__$1;
(statearr_17365_17384[(2)] = inst_17346);

(statearr_17365_17384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (9))){
var state_17356__$1 = state_17356;
var statearr_17366_17385 = state_17356__$1;
(statearr_17366_17385[(2)] = null);

(statearr_17366_17385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (5))){
var inst_17341 = cljs.core.async.close_BANG_.call(null,out);
var state_17356__$1 = state_17356;
var statearr_17367_17386 = state_17356__$1;
(statearr_17367_17386[(2)] = inst_17341);

(statearr_17367_17386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (10))){
var inst_17349 = (state_17356[(2)]);
var state_17356__$1 = (function (){var statearr_17368 = state_17356;
(statearr_17368[(8)] = inst_17349);

return statearr_17368;
})();
var statearr_17369_17387 = state_17356__$1;
(statearr_17369_17387[(2)] = null);

(statearr_17369_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17357 === (8))){
var inst_17338 = (state_17356[(7)]);
var state_17356__$1 = state_17356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17356__$1,(11),out,inst_17338);
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
});})(c__7301__auto___17377,out))
;
return ((function (switch__7245__auto__,c__7301__auto___17377,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = state_machine__7246__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var state_machine__7246__auto____1 = (function (state_17356){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__7249__auto__ = e17374;
var statearr_17375_17388 = state_17356;
(statearr_17375_17388[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17389 = state_17356;
state_17356 = G__17389;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17356){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17377,out))
})();
var state__7303__auto__ = (function (){var statearr_17376 = f__7302__auto__.call(null);
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17377);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17377,out))
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
var c__7301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto__){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto__){
return (function (state_17555){
var state_val_17556 = (state_17555[(1)]);
if((state_val_17556 === (7))){
var inst_17551 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17557_17598 = state_17555__$1;
(statearr_17557_17598[(2)] = inst_17551);

(statearr_17557_17598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (20))){
var inst_17521 = (state_17555[(7)]);
var inst_17532 = (state_17555[(2)]);
var inst_17533 = cljs.core.next.call(null,inst_17521);
var inst_17507 = inst_17533;
var inst_17508 = null;
var inst_17509 = (0);
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17558 = state_17555;
(statearr_17558[(8)] = inst_17507);

(statearr_17558[(9)] = inst_17510);

(statearr_17558[(10)] = inst_17532);

(statearr_17558[(11)] = inst_17508);

(statearr_17558[(12)] = inst_17509);

return statearr_17558;
})();
var statearr_17559_17599 = state_17555__$1;
(statearr_17559_17599[(2)] = null);

(statearr_17559_17599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (1))){
var state_17555__$1 = state_17555;
var statearr_17560_17600 = state_17555__$1;
(statearr_17560_17600[(2)] = null);

(statearr_17560_17600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (4))){
var inst_17496 = (state_17555[(13)]);
var inst_17496__$1 = (state_17555[(2)]);
var inst_17497 = (inst_17496__$1 == null);
var state_17555__$1 = (function (){var statearr_17561 = state_17555;
(statearr_17561[(13)] = inst_17496__$1);

return statearr_17561;
})();
if(cljs.core.truth_(inst_17497)){
var statearr_17562_17601 = state_17555__$1;
(statearr_17562_17601[(1)] = (5));

} else {
var statearr_17563_17602 = state_17555__$1;
(statearr_17563_17602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (15))){
var state_17555__$1 = state_17555;
var statearr_17567_17603 = state_17555__$1;
(statearr_17567_17603[(2)] = null);

(statearr_17567_17603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (21))){
var state_17555__$1 = state_17555;
var statearr_17568_17604 = state_17555__$1;
(statearr_17568_17604[(2)] = null);

(statearr_17568_17604[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (13))){
var inst_17507 = (state_17555[(8)]);
var inst_17510 = (state_17555[(9)]);
var inst_17508 = (state_17555[(11)]);
var inst_17509 = (state_17555[(12)]);
var inst_17517 = (state_17555[(2)]);
var inst_17518 = (inst_17510 + (1));
var tmp17564 = inst_17507;
var tmp17565 = inst_17508;
var tmp17566 = inst_17509;
var inst_17507__$1 = tmp17564;
var inst_17508__$1 = tmp17565;
var inst_17509__$1 = tmp17566;
var inst_17510__$1 = inst_17518;
var state_17555__$1 = (function (){var statearr_17569 = state_17555;
(statearr_17569[(14)] = inst_17517);

(statearr_17569[(8)] = inst_17507__$1);

(statearr_17569[(9)] = inst_17510__$1);

(statearr_17569[(11)] = inst_17508__$1);

(statearr_17569[(12)] = inst_17509__$1);

return statearr_17569;
})();
var statearr_17570_17605 = state_17555__$1;
(statearr_17570_17605[(2)] = null);

(statearr_17570_17605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (22))){
var state_17555__$1 = state_17555;
var statearr_17571_17606 = state_17555__$1;
(statearr_17571_17606[(2)] = null);

(statearr_17571_17606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (6))){
var inst_17496 = (state_17555[(13)]);
var inst_17505 = f.call(null,inst_17496);
var inst_17506 = cljs.core.seq.call(null,inst_17505);
var inst_17507 = inst_17506;
var inst_17508 = null;
var inst_17509 = (0);
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17572 = state_17555;
(statearr_17572[(8)] = inst_17507);

(statearr_17572[(9)] = inst_17510);

(statearr_17572[(11)] = inst_17508);

(statearr_17572[(12)] = inst_17509);

return statearr_17572;
})();
var statearr_17573_17607 = state_17555__$1;
(statearr_17573_17607[(2)] = null);

(statearr_17573_17607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (17))){
var inst_17521 = (state_17555[(7)]);
var inst_17525 = cljs.core.chunk_first.call(null,inst_17521);
var inst_17526 = cljs.core.chunk_rest.call(null,inst_17521);
var inst_17527 = cljs.core.count.call(null,inst_17525);
var inst_17507 = inst_17526;
var inst_17508 = inst_17525;
var inst_17509 = inst_17527;
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17574 = state_17555;
(statearr_17574[(8)] = inst_17507);

(statearr_17574[(9)] = inst_17510);

(statearr_17574[(11)] = inst_17508);

(statearr_17574[(12)] = inst_17509);

return statearr_17574;
})();
var statearr_17575_17608 = state_17555__$1;
(statearr_17575_17608[(2)] = null);

(statearr_17575_17608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (3))){
var inst_17553 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17555__$1,inst_17553);
} else {
if((state_val_17556 === (12))){
var inst_17541 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17576_17609 = state_17555__$1;
(statearr_17576_17609[(2)] = inst_17541);

(statearr_17576_17609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (2))){
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17555__$1,(4),in$);
} else {
if((state_val_17556 === (23))){
var inst_17549 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17577_17610 = state_17555__$1;
(statearr_17577_17610[(2)] = inst_17549);

(statearr_17577_17610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (19))){
var inst_17536 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17578_17611 = state_17555__$1;
(statearr_17578_17611[(2)] = inst_17536);

(statearr_17578_17611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (11))){
var inst_17507 = (state_17555[(8)]);
var inst_17521 = (state_17555[(7)]);
var inst_17521__$1 = cljs.core.seq.call(null,inst_17507);
var state_17555__$1 = (function (){var statearr_17579 = state_17555;
(statearr_17579[(7)] = inst_17521__$1);

return statearr_17579;
})();
if(inst_17521__$1){
var statearr_17580_17612 = state_17555__$1;
(statearr_17580_17612[(1)] = (14));

} else {
var statearr_17581_17613 = state_17555__$1;
(statearr_17581_17613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (9))){
var inst_17543 = (state_17555[(2)]);
var inst_17544 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17555__$1 = (function (){var statearr_17582 = state_17555;
(statearr_17582[(15)] = inst_17543);

return statearr_17582;
})();
if(cljs.core.truth_(inst_17544)){
var statearr_17583_17614 = state_17555__$1;
(statearr_17583_17614[(1)] = (21));

} else {
var statearr_17584_17615 = state_17555__$1;
(statearr_17584_17615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (5))){
var inst_17499 = cljs.core.async.close_BANG_.call(null,out);
var state_17555__$1 = state_17555;
var statearr_17585_17616 = state_17555__$1;
(statearr_17585_17616[(2)] = inst_17499);

(statearr_17585_17616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (14))){
var inst_17521 = (state_17555[(7)]);
var inst_17523 = cljs.core.chunked_seq_QMARK_.call(null,inst_17521);
var state_17555__$1 = state_17555;
if(inst_17523){
var statearr_17586_17617 = state_17555__$1;
(statearr_17586_17617[(1)] = (17));

} else {
var statearr_17587_17618 = state_17555__$1;
(statearr_17587_17618[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (16))){
var inst_17539 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17588_17619 = state_17555__$1;
(statearr_17588_17619[(2)] = inst_17539);

(statearr_17588_17619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (10))){
var inst_17510 = (state_17555[(9)]);
var inst_17508 = (state_17555[(11)]);
var inst_17515 = cljs.core._nth.call(null,inst_17508,inst_17510);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17555__$1,(13),out,inst_17515);
} else {
if((state_val_17556 === (18))){
var inst_17521 = (state_17555[(7)]);
var inst_17530 = cljs.core.first.call(null,inst_17521);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17555__$1,(20),out,inst_17530);
} else {
if((state_val_17556 === (8))){
var inst_17510 = (state_17555[(9)]);
var inst_17509 = (state_17555[(12)]);
var inst_17512 = (inst_17510 < inst_17509);
var inst_17513 = inst_17512;
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17513)){
var statearr_17589_17620 = state_17555__$1;
(statearr_17589_17620[(1)] = (10));

} else {
var statearr_17590_17621 = state_17555__$1;
(statearr_17590_17621[(1)] = (11));

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
});})(c__7301__auto__))
;
return ((function (switch__7245__auto__,c__7301__auto__){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17594[(0)] = state_machine__7246__auto__);

(statearr_17594[(1)] = (1));

return statearr_17594;
});
var state_machine__7246__auto____1 = (function (state_17555){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object)){
var ex__7249__auto__ = e17595;
var statearr_17596_17622 = state_17555;
(statearr_17596_17622[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17623 = state_17555;
state_17555 = G__17623;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto__))
})();
var state__7303__auto__ = (function (){var statearr_17597 = f__7302__auto__.call(null);
(statearr_17597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto__);

return statearr_17597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto__))
);

return c__7301__auto__;
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
var c__7301__auto___17720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17720,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17720,out){
return (function (state_17695){
var state_val_17696 = (state_17695[(1)]);
if((state_val_17696 === (7))){
var inst_17690 = (state_17695[(2)]);
var state_17695__$1 = state_17695;
var statearr_17697_17721 = state_17695__$1;
(statearr_17697_17721[(2)] = inst_17690);

(statearr_17697_17721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (1))){
var inst_17672 = null;
var state_17695__$1 = (function (){var statearr_17698 = state_17695;
(statearr_17698[(7)] = inst_17672);

return statearr_17698;
})();
var statearr_17699_17722 = state_17695__$1;
(statearr_17699_17722[(2)] = null);

(statearr_17699_17722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (4))){
var inst_17675 = (state_17695[(8)]);
var inst_17675__$1 = (state_17695[(2)]);
var inst_17676 = (inst_17675__$1 == null);
var inst_17677 = cljs.core.not.call(null,inst_17676);
var state_17695__$1 = (function (){var statearr_17700 = state_17695;
(statearr_17700[(8)] = inst_17675__$1);

return statearr_17700;
})();
if(inst_17677){
var statearr_17701_17723 = state_17695__$1;
(statearr_17701_17723[(1)] = (5));

} else {
var statearr_17702_17724 = state_17695__$1;
(statearr_17702_17724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (6))){
var state_17695__$1 = state_17695;
var statearr_17703_17725 = state_17695__$1;
(statearr_17703_17725[(2)] = null);

(statearr_17703_17725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (3))){
var inst_17692 = (state_17695[(2)]);
var inst_17693 = cljs.core.async.close_BANG_.call(null,out);
var state_17695__$1 = (function (){var statearr_17704 = state_17695;
(statearr_17704[(9)] = inst_17692);

return statearr_17704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17695__$1,inst_17693);
} else {
if((state_val_17696 === (2))){
var state_17695__$1 = state_17695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17695__$1,(4),ch);
} else {
if((state_val_17696 === (11))){
var inst_17675 = (state_17695[(8)]);
var inst_17684 = (state_17695[(2)]);
var inst_17672 = inst_17675;
var state_17695__$1 = (function (){var statearr_17705 = state_17695;
(statearr_17705[(10)] = inst_17684);

(statearr_17705[(7)] = inst_17672);

return statearr_17705;
})();
var statearr_17706_17726 = state_17695__$1;
(statearr_17706_17726[(2)] = null);

(statearr_17706_17726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (9))){
var inst_17675 = (state_17695[(8)]);
var state_17695__$1 = state_17695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17695__$1,(11),out,inst_17675);
} else {
if((state_val_17696 === (5))){
var inst_17675 = (state_17695[(8)]);
var inst_17672 = (state_17695[(7)]);
var inst_17679 = cljs.core._EQ_.call(null,inst_17675,inst_17672);
var state_17695__$1 = state_17695;
if(inst_17679){
var statearr_17708_17727 = state_17695__$1;
(statearr_17708_17727[(1)] = (8));

} else {
var statearr_17709_17728 = state_17695__$1;
(statearr_17709_17728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (10))){
var inst_17687 = (state_17695[(2)]);
var state_17695__$1 = state_17695;
var statearr_17710_17729 = state_17695__$1;
(statearr_17710_17729[(2)] = inst_17687);

(statearr_17710_17729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17696 === (8))){
var inst_17672 = (state_17695[(7)]);
var tmp17707 = inst_17672;
var inst_17672__$1 = tmp17707;
var state_17695__$1 = (function (){var statearr_17711 = state_17695;
(statearr_17711[(7)] = inst_17672__$1);

return statearr_17711;
})();
var statearr_17712_17730 = state_17695__$1;
(statearr_17712_17730[(2)] = null);

(statearr_17712_17730[(1)] = (2));


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
});})(c__7301__auto___17720,out))
;
return ((function (switch__7245__auto__,c__7301__auto___17720,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17716[(0)] = state_machine__7246__auto__);

(statearr_17716[(1)] = (1));

return statearr_17716;
});
var state_machine__7246__auto____1 = (function (state_17695){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17717){if((e17717 instanceof Object)){
var ex__7249__auto__ = e17717;
var statearr_17718_17731 = state_17695;
(statearr_17718_17731[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17732 = state_17695;
state_17695 = G__17732;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17695){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17720,out))
})();
var state__7303__auto__ = (function (){var statearr_17719 = f__7302__auto__.call(null);
(statearr_17719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17720);

return statearr_17719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17720,out))
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
var c__7301__auto___17867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___17867,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___17867,out){
return (function (state_17837){
var state_val_17838 = (state_17837[(1)]);
if((state_val_17838 === (7))){
var inst_17833 = (state_17837[(2)]);
var state_17837__$1 = state_17837;
var statearr_17839_17868 = state_17837__$1;
(statearr_17839_17868[(2)] = inst_17833);

(statearr_17839_17868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (1))){
var inst_17800 = (new Array(n));
var inst_17801 = inst_17800;
var inst_17802 = (0);
var state_17837__$1 = (function (){var statearr_17840 = state_17837;
(statearr_17840[(7)] = inst_17802);

(statearr_17840[(8)] = inst_17801);

return statearr_17840;
})();
var statearr_17841_17869 = state_17837__$1;
(statearr_17841_17869[(2)] = null);

(statearr_17841_17869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (4))){
var inst_17805 = (state_17837[(9)]);
var inst_17805__$1 = (state_17837[(2)]);
var inst_17806 = (inst_17805__$1 == null);
var inst_17807 = cljs.core.not.call(null,inst_17806);
var state_17837__$1 = (function (){var statearr_17842 = state_17837;
(statearr_17842[(9)] = inst_17805__$1);

return statearr_17842;
})();
if(inst_17807){
var statearr_17843_17870 = state_17837__$1;
(statearr_17843_17870[(1)] = (5));

} else {
var statearr_17844_17871 = state_17837__$1;
(statearr_17844_17871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (15))){
var inst_17827 = (state_17837[(2)]);
var state_17837__$1 = state_17837;
var statearr_17845_17872 = state_17837__$1;
(statearr_17845_17872[(2)] = inst_17827);

(statearr_17845_17872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (13))){
var state_17837__$1 = state_17837;
var statearr_17846_17873 = state_17837__$1;
(statearr_17846_17873[(2)] = null);

(statearr_17846_17873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (6))){
var inst_17802 = (state_17837[(7)]);
var inst_17823 = (inst_17802 > (0));
var state_17837__$1 = state_17837;
if(cljs.core.truth_(inst_17823)){
var statearr_17847_17874 = state_17837__$1;
(statearr_17847_17874[(1)] = (12));

} else {
var statearr_17848_17875 = state_17837__$1;
(statearr_17848_17875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (3))){
var inst_17835 = (state_17837[(2)]);
var state_17837__$1 = state_17837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17837__$1,inst_17835);
} else {
if((state_val_17838 === (12))){
var inst_17801 = (state_17837[(8)]);
var inst_17825 = cljs.core.vec.call(null,inst_17801);
var state_17837__$1 = state_17837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17837__$1,(15),out,inst_17825);
} else {
if((state_val_17838 === (2))){
var state_17837__$1 = state_17837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17837__$1,(4),ch);
} else {
if((state_val_17838 === (11))){
var inst_17817 = (state_17837[(2)]);
var inst_17818 = (new Array(n));
var inst_17801 = inst_17818;
var inst_17802 = (0);
var state_17837__$1 = (function (){var statearr_17849 = state_17837;
(statearr_17849[(7)] = inst_17802);

(statearr_17849[(10)] = inst_17817);

(statearr_17849[(8)] = inst_17801);

return statearr_17849;
})();
var statearr_17850_17876 = state_17837__$1;
(statearr_17850_17876[(2)] = null);

(statearr_17850_17876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (9))){
var inst_17801 = (state_17837[(8)]);
var inst_17815 = cljs.core.vec.call(null,inst_17801);
var state_17837__$1 = state_17837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17837__$1,(11),out,inst_17815);
} else {
if((state_val_17838 === (5))){
var inst_17802 = (state_17837[(7)]);
var inst_17810 = (state_17837[(11)]);
var inst_17805 = (state_17837[(9)]);
var inst_17801 = (state_17837[(8)]);
var inst_17809 = (inst_17801[inst_17802] = inst_17805);
var inst_17810__$1 = (inst_17802 + (1));
var inst_17811 = (inst_17810__$1 < n);
var state_17837__$1 = (function (){var statearr_17851 = state_17837;
(statearr_17851[(11)] = inst_17810__$1);

(statearr_17851[(12)] = inst_17809);

return statearr_17851;
})();
if(cljs.core.truth_(inst_17811)){
var statearr_17852_17877 = state_17837__$1;
(statearr_17852_17877[(1)] = (8));

} else {
var statearr_17853_17878 = state_17837__$1;
(statearr_17853_17878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (14))){
var inst_17830 = (state_17837[(2)]);
var inst_17831 = cljs.core.async.close_BANG_.call(null,out);
var state_17837__$1 = (function (){var statearr_17855 = state_17837;
(statearr_17855[(13)] = inst_17830);

return statearr_17855;
})();
var statearr_17856_17879 = state_17837__$1;
(statearr_17856_17879[(2)] = inst_17831);

(statearr_17856_17879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (10))){
var inst_17821 = (state_17837[(2)]);
var state_17837__$1 = state_17837;
var statearr_17857_17880 = state_17837__$1;
(statearr_17857_17880[(2)] = inst_17821);

(statearr_17857_17880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17838 === (8))){
var inst_17810 = (state_17837[(11)]);
var inst_17801 = (state_17837[(8)]);
var tmp17854 = inst_17801;
var inst_17801__$1 = tmp17854;
var inst_17802 = inst_17810;
var state_17837__$1 = (function (){var statearr_17858 = state_17837;
(statearr_17858[(7)] = inst_17802);

(statearr_17858[(8)] = inst_17801__$1);

return statearr_17858;
})();
var statearr_17859_17881 = state_17837__$1;
(statearr_17859_17881[(2)] = null);

(statearr_17859_17881[(1)] = (2));


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
});})(c__7301__auto___17867,out))
;
return ((function (switch__7245__auto__,c__7301__auto___17867,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_17863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17863[(0)] = state_machine__7246__auto__);

(statearr_17863[(1)] = (1));

return statearr_17863;
});
var state_machine__7246__auto____1 = (function (state_17837){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e17864){if((e17864 instanceof Object)){
var ex__7249__auto__ = e17864;
var statearr_17865_17882 = state_17837;
(statearr_17865_17882[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17883 = state_17837;
state_17837 = G__17883;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17837){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___17867,out))
})();
var state__7303__auto__ = (function (){var statearr_17866 = f__7302__auto__.call(null);
(statearr_17866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___17867);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___17867,out))
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
var c__7301__auto___18026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7301__auto___18026,out){
return (function (){
var f__7302__auto__ = (function (){var switch__7245__auto__ = ((function (c__7301__auto___18026,out){
return (function (state_17996){
var state_val_17997 = (state_17996[(1)]);
if((state_val_17997 === (7))){
var inst_17992 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
var statearr_17998_18027 = state_17996__$1;
(statearr_17998_18027[(2)] = inst_17992);

(statearr_17998_18027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (1))){
var inst_17955 = [];
var inst_17956 = inst_17955;
var inst_17957 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17996__$1 = (function (){var statearr_17999 = state_17996;
(statearr_17999[(7)] = inst_17957);

(statearr_17999[(8)] = inst_17956);

return statearr_17999;
})();
var statearr_18000_18028 = state_17996__$1;
(statearr_18000_18028[(2)] = null);

(statearr_18000_18028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (4))){
var inst_17960 = (state_17996[(9)]);
var inst_17960__$1 = (state_17996[(2)]);
var inst_17961 = (inst_17960__$1 == null);
var inst_17962 = cljs.core.not.call(null,inst_17961);
var state_17996__$1 = (function (){var statearr_18001 = state_17996;
(statearr_18001[(9)] = inst_17960__$1);

return statearr_18001;
})();
if(inst_17962){
var statearr_18002_18029 = state_17996__$1;
(statearr_18002_18029[(1)] = (5));

} else {
var statearr_18003_18030 = state_17996__$1;
(statearr_18003_18030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (15))){
var inst_17986 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
var statearr_18004_18031 = state_17996__$1;
(statearr_18004_18031[(2)] = inst_17986);

(statearr_18004_18031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (13))){
var state_17996__$1 = state_17996;
var statearr_18005_18032 = state_17996__$1;
(statearr_18005_18032[(2)] = null);

(statearr_18005_18032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (6))){
var inst_17956 = (state_17996[(8)]);
var inst_17981 = inst_17956.length;
var inst_17982 = (inst_17981 > (0));
var state_17996__$1 = state_17996;
if(cljs.core.truth_(inst_17982)){
var statearr_18006_18033 = state_17996__$1;
(statearr_18006_18033[(1)] = (12));

} else {
var statearr_18007_18034 = state_17996__$1;
(statearr_18007_18034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (3))){
var inst_17994 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17996__$1,inst_17994);
} else {
if((state_val_17997 === (12))){
var inst_17956 = (state_17996[(8)]);
var inst_17984 = cljs.core.vec.call(null,inst_17956);
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17996__$1,(15),out,inst_17984);
} else {
if((state_val_17997 === (2))){
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17996__$1,(4),ch);
} else {
if((state_val_17997 === (11))){
var inst_17964 = (state_17996[(10)]);
var inst_17960 = (state_17996[(9)]);
var inst_17974 = (state_17996[(2)]);
var inst_17975 = [];
var inst_17976 = inst_17975.push(inst_17960);
var inst_17956 = inst_17975;
var inst_17957 = inst_17964;
var state_17996__$1 = (function (){var statearr_18008 = state_17996;
(statearr_18008[(11)] = inst_17974);

(statearr_18008[(7)] = inst_17957);

(statearr_18008[(12)] = inst_17976);

(statearr_18008[(8)] = inst_17956);

return statearr_18008;
})();
var statearr_18009_18035 = state_17996__$1;
(statearr_18009_18035[(2)] = null);

(statearr_18009_18035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (9))){
var inst_17956 = (state_17996[(8)]);
var inst_17972 = cljs.core.vec.call(null,inst_17956);
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17996__$1,(11),out,inst_17972);
} else {
if((state_val_17997 === (5))){
var inst_17957 = (state_17996[(7)]);
var inst_17964 = (state_17996[(10)]);
var inst_17960 = (state_17996[(9)]);
var inst_17964__$1 = f.call(null,inst_17960);
var inst_17965 = cljs.core._EQ_.call(null,inst_17964__$1,inst_17957);
var inst_17966 = cljs.core.keyword_identical_QMARK_.call(null,inst_17957,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17967 = (inst_17965) || (inst_17966);
var state_17996__$1 = (function (){var statearr_18010 = state_17996;
(statearr_18010[(10)] = inst_17964__$1);

return statearr_18010;
})();
if(cljs.core.truth_(inst_17967)){
var statearr_18011_18036 = state_17996__$1;
(statearr_18011_18036[(1)] = (8));

} else {
var statearr_18012_18037 = state_17996__$1;
(statearr_18012_18037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (14))){
var inst_17989 = (state_17996[(2)]);
var inst_17990 = cljs.core.async.close_BANG_.call(null,out);
var state_17996__$1 = (function (){var statearr_18014 = state_17996;
(statearr_18014[(13)] = inst_17989);

return statearr_18014;
})();
var statearr_18015_18038 = state_17996__$1;
(statearr_18015_18038[(2)] = inst_17990);

(statearr_18015_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (10))){
var inst_17979 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
var statearr_18016_18039 = state_17996__$1;
(statearr_18016_18039[(2)] = inst_17979);

(statearr_18016_18039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (8))){
var inst_17964 = (state_17996[(10)]);
var inst_17960 = (state_17996[(9)]);
var inst_17956 = (state_17996[(8)]);
var inst_17969 = inst_17956.push(inst_17960);
var tmp18013 = inst_17956;
var inst_17956__$1 = tmp18013;
var inst_17957 = inst_17964;
var state_17996__$1 = (function (){var statearr_18017 = state_17996;
(statearr_18017[(14)] = inst_17969);

(statearr_18017[(7)] = inst_17957);

(statearr_18017[(8)] = inst_17956__$1);

return statearr_18017;
})();
var statearr_18018_18040 = state_17996__$1;
(statearr_18018_18040[(2)] = null);

(statearr_18018_18040[(1)] = (2));


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
});})(c__7301__auto___18026,out))
;
return ((function (switch__7245__auto__,c__7301__auto___18026,out){
return (function() {
var state_machine__7246__auto__ = null;
var state_machine__7246__auto____0 = (function (){
var statearr_18022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18022[(0)] = state_machine__7246__auto__);

(statearr_18022[(1)] = (1));

return statearr_18022;
});
var state_machine__7246__auto____1 = (function (state_17996){
while(true){
var ret_value__7247__auto__ = (function (){try{while(true){
var result__7248__auto__ = switch__7245__auto__.call(null,state_17996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7248__auto__;
}
break;
}
}catch (e18023){if((e18023 instanceof Object)){
var ex__7249__auto__ = e18023;
var statearr_18024_18041 = state_17996;
(statearr_18024_18041[(5)] = ex__7249__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_17996;
state_17996 = G__18042;
continue;
} else {
return ret_value__7247__auto__;
}
break;
}
});
state_machine__7246__auto__ = function(state_17996){
switch(arguments.length){
case 0:
return state_machine__7246__auto____0.call(this);
case 1:
return state_machine__7246__auto____1.call(this,state_17996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7246__auto____0;
state_machine__7246__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7246__auto____1;
return state_machine__7246__auto__;
})()
;})(switch__7245__auto__,c__7301__auto___18026,out))
})();
var state__7303__auto__ = (function (){var statearr_18025 = f__7302__auto__.call(null);
(statearr_18025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7301__auto___18026);

return statearr_18025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7303__auto__);
});})(c__7301__auto___18026,out))
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