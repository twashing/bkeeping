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
if(typeof cljs.core.async.t23033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23033 = (function (f,fn_handler,meta23034){
this.f = f;
this.fn_handler = fn_handler;
this.meta23034 = meta23034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23035){
var self__ = this;
var _23035__$1 = this;
return self__.meta23034;
});

cljs.core.async.t23033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23035,meta23034__$1){
var self__ = this;
var _23035__$1 = this;
return (new cljs.core.async.t23033(self__.f,self__.fn_handler,meta23034__$1));
});

cljs.core.async.t23033.cljs$lang$type = true;

cljs.core.async.t23033.cljs$lang$ctorStr = "cljs.core.async/t23033";

cljs.core.async.t23033.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23033");
});

cljs.core.async.__GT_t23033 = (function __GT_t23033(f__$1,fn_handler__$1,meta23034){
return (new cljs.core.async.t23033(f__$1,fn_handler__$1,meta23034));
});

}

return (new cljs.core.async.t23033(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__23037 = buff;
if(G__23037){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__23037.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23037);
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
var val_23038 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23038);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23038,ret){
return (function (){
return fn1.call(null,val_23038);
});})(val_23038,ret))
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
var n__4509__auto___23039 = n;
var x_23040 = (0);
while(true){
if((x_23040 < n__4509__auto___23039)){
(a[x_23040] = (0));

var G__23041 = (x_23040 + (1));
x_23040 = G__23041;
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

var G__23042 = (i + (1));
i = G__23042;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23046 = (function (flag,alt_flag,meta23047){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23047 = meta23047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23048){
var self__ = this;
var _23048__$1 = this;
return self__.meta23047;
});})(flag))
;

cljs.core.async.t23046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23048,meta23047__$1){
var self__ = this;
var _23048__$1 = this;
return (new cljs.core.async.t23046(self__.flag,self__.alt_flag,meta23047__$1));
});})(flag))
;

cljs.core.async.t23046.cljs$lang$type = true;

cljs.core.async.t23046.cljs$lang$ctorStr = "cljs.core.async/t23046";

cljs.core.async.t23046.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23046");
});})(flag))
;

cljs.core.async.__GT_t23046 = ((function (flag){
return (function __GT_t23046(flag__$1,alt_flag__$1,meta23047){
return (new cljs.core.async.t23046(flag__$1,alt_flag__$1,meta23047));
});})(flag))
;

}

return (new cljs.core.async.t23046(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23052 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23052 = (function (cb,flag,alt_handler,meta23053){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23053 = meta23053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23054){
var self__ = this;
var _23054__$1 = this;
return self__.meta23053;
});

cljs.core.async.t23052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23054,meta23053__$1){
var self__ = this;
var _23054__$1 = this;
return (new cljs.core.async.t23052(self__.cb,self__.flag,self__.alt_handler,meta23053__$1));
});

cljs.core.async.t23052.cljs$lang$type = true;

cljs.core.async.t23052.cljs$lang$ctorStr = "cljs.core.async/t23052";

cljs.core.async.t23052.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t23052");
});

cljs.core.async.__GT_t23052 = (function __GT_t23052(cb__$1,flag__$1,alt_handler__$1,meta23053){
return (new cljs.core.async.t23052(cb__$1,flag__$1,alt_handler__$1,meta23053));
});

}

return (new cljs.core.async.t23052(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__23055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23056_SHARP_,port], null));
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
var G__23057 = (i + (1));
i = G__23057;
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
var alts_BANG___delegate = function (ports,p__23058){
var map__23060 = p__23058;
var map__23060__$1 = ((cljs.core.seq_QMARK_.call(null,map__23060))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060):map__23060);
var opts = map__23060__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23058 = null;
if (arguments.length > 1) {
  p__23058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23058);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23061){
var ports = cljs.core.first(arglist__23061);
var p__23058 = cljs.core.rest(arglist__23061);
return alts_BANG___delegate(ports,p__23058);
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
var c__7043__auto___23156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23156){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23156){
return (function (state_23132){
var state_val_23133 = (state_23132[(1)]);
if((state_val_23133 === (7))){
var inst_23128 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23134_23157 = state_23132__$1;
(statearr_23134_23157[(2)] = inst_23128);

(statearr_23134_23157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (1))){
var state_23132__$1 = state_23132;
var statearr_23135_23158 = state_23132__$1;
(statearr_23135_23158[(2)] = null);

(statearr_23135_23158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (4))){
var inst_23111 = (state_23132[(7)]);
var inst_23111__$1 = (state_23132[(2)]);
var inst_23112 = (inst_23111__$1 == null);
var state_23132__$1 = (function (){var statearr_23136 = state_23132;
(statearr_23136[(7)] = inst_23111__$1);

return statearr_23136;
})();
if(cljs.core.truth_(inst_23112)){
var statearr_23137_23159 = state_23132__$1;
(statearr_23137_23159[(1)] = (5));

} else {
var statearr_23138_23160 = state_23132__$1;
(statearr_23138_23160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (13))){
var state_23132__$1 = state_23132;
var statearr_23139_23161 = state_23132__$1;
(statearr_23139_23161[(2)] = null);

(statearr_23139_23161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (6))){
var inst_23111 = (state_23132[(7)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23132__$1,(11),to,inst_23111);
} else {
if((state_val_23133 === (3))){
var inst_23130 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23132__$1,inst_23130);
} else {
if((state_val_23133 === (12))){
var state_23132__$1 = state_23132;
var statearr_23140_23162 = state_23132__$1;
(statearr_23140_23162[(2)] = null);

(statearr_23140_23162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (2))){
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23132__$1,(4),from);
} else {
if((state_val_23133 === (11))){
var inst_23121 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
if(cljs.core.truth_(inst_23121)){
var statearr_23141_23163 = state_23132__$1;
(statearr_23141_23163[(1)] = (12));

} else {
var statearr_23142_23164 = state_23132__$1;
(statearr_23142_23164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (9))){
var state_23132__$1 = state_23132;
var statearr_23143_23165 = state_23132__$1;
(statearr_23143_23165[(2)] = null);

(statearr_23143_23165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (5))){
var state_23132__$1 = state_23132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23144_23166 = state_23132__$1;
(statearr_23144_23166[(1)] = (8));

} else {
var statearr_23145_23167 = state_23132__$1;
(statearr_23145_23167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (14))){
var inst_23126 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23146_23168 = state_23132__$1;
(statearr_23146_23168[(2)] = inst_23126);

(statearr_23146_23168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (10))){
var inst_23118 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23147_23169 = state_23132__$1;
(statearr_23147_23169[(2)] = inst_23118);

(statearr_23147_23169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (8))){
var inst_23115 = cljs.core.async.close_BANG_.call(null,to);
var state_23132__$1 = state_23132;
var statearr_23148_23170 = state_23132__$1;
(statearr_23148_23170[(2)] = inst_23115);

(statearr_23148_23170[(1)] = (10));


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
});})(c__7043__auto___23156))
;
return ((function (switch__6987__auto__,c__7043__auto___23156){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23152 = [null,null,null,null,null,null,null,null];
(statearr_23152[(0)] = state_machine__6988__auto__);

(statearr_23152[(1)] = (1));

return statearr_23152;
});
var state_machine__6988__auto____1 = (function (state_23132){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23153){if((e23153 instanceof Object)){
var ex__6991__auto__ = e23153;
var statearr_23154_23171 = state_23132;
(statearr_23154_23171[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23172 = state_23132;
state_23132 = G__23172;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23132){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23156))
})();
var state__7045__auto__ = (function (){var statearr_23155 = f__7044__auto__.call(null);
(statearr_23155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23156);

return statearr_23155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23156))
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
return (function (p__23356){
var vec__23357 = p__23356;
var v = cljs.core.nth.call(null,vec__23357,(0),null);
var p = cljs.core.nth.call(null,vec__23357,(1),null);
var job = vec__23357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___23539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results){
return (function (state_23362){
var state_val_23363 = (state_23362[(1)]);
if((state_val_23363 === (2))){
var inst_23359 = (state_23362[(2)]);
var inst_23360 = cljs.core.async.close_BANG_.call(null,res);
var state_23362__$1 = (function (){var statearr_23364 = state_23362;
(statearr_23364[(7)] = inst_23359);

return statearr_23364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23362__$1,inst_23360);
} else {
if((state_val_23363 === (1))){
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23362__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23368 = [null,null,null,null,null,null,null,null];
(statearr_23368[(0)] = state_machine__6988__auto__);

(statearr_23368[(1)] = (1));

return statearr_23368;
});
var state_machine__6988__auto____1 = (function (state_23362){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23369){if((e23369 instanceof Object)){
var ex__6991__auto__ = e23369;
var statearr_23370_23540 = state_23362;
(statearr_23370_23540[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23541 = state_23362;
state_23362 = G__23541;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23362){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_23371 = f__7044__auto__.call(null);
(statearr_23371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23539);

return statearr_23371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23539,res,vec__23357,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23372){
var vec__23373 = p__23372;
var v = cljs.core.nth.call(null,vec__23373,(0),null);
var p = cljs.core.nth.call(null,vec__23373,(1),null);
var job = vec__23373;
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
var n__4509__auto___23542 = n;
var __23543 = (0);
while(true){
if((__23543 < n__4509__auto___23542)){
var G__23374_23544 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23374_23544) {
case "async":
var c__7043__auto___23546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23543,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23543,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function (state_23387){
var state_val_23388 = (state_23387[(1)]);
if((state_val_23388 === (7))){
var inst_23383 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23389_23547 = state_23387__$1;
(statearr_23389_23547[(2)] = inst_23383);

(statearr_23389_23547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (6))){
var state_23387__$1 = state_23387;
var statearr_23390_23548 = state_23387__$1;
(statearr_23390_23548[(2)] = null);

(statearr_23390_23548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (5))){
var state_23387__$1 = state_23387;
var statearr_23391_23549 = state_23387__$1;
(statearr_23391_23549[(2)] = null);

(statearr_23391_23549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (4))){
var inst_23377 = (state_23387[(2)]);
var inst_23378 = async.call(null,inst_23377);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23378)){
var statearr_23392_23550 = state_23387__$1;
(statearr_23392_23550[(1)] = (5));

} else {
var statearr_23393_23551 = state_23387__$1;
(statearr_23393_23551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (3))){
var inst_23385 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23387__$1,inst_23385);
} else {
if((state_val_23388 === (2))){
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23387__$1,(4),jobs);
} else {
if((state_val_23388 === (1))){
var state_23387__$1 = state_23387;
var statearr_23394_23552 = state_23387__$1;
(statearr_23394_23552[(2)] = null);

(statearr_23394_23552[(1)] = (2));


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
});})(__23543,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
;
return ((function (__23543,switch__6987__auto__,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23398 = [null,null,null,null,null,null,null];
(statearr_23398[(0)] = state_machine__6988__auto__);

(statearr_23398[(1)] = (1));

return statearr_23398;
});
var state_machine__6988__auto____1 = (function (state_23387){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object)){
var ex__6991__auto__ = e23399;
var statearr_23400_23553 = state_23387;
(statearr_23400_23553[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23387;
state_23387 = G__23554;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23543,switch__6987__auto__,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23401 = f__7044__auto__.call(null);
(statearr_23401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23546);

return statearr_23401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23543,c__7043__auto___23546,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___23555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23543,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__23543,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function (state_23414){
var state_val_23415 = (state_23414[(1)]);
if((state_val_23415 === (7))){
var inst_23410 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23416_23556 = state_23414__$1;
(statearr_23416_23556[(2)] = inst_23410);

(statearr_23416_23556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (6))){
var state_23414__$1 = state_23414;
var statearr_23417_23557 = state_23414__$1;
(statearr_23417_23557[(2)] = null);

(statearr_23417_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (5))){
var state_23414__$1 = state_23414;
var statearr_23418_23558 = state_23414__$1;
(statearr_23418_23558[(2)] = null);

(statearr_23418_23558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (4))){
var inst_23404 = (state_23414[(2)]);
var inst_23405 = process.call(null,inst_23404);
var state_23414__$1 = state_23414;
if(cljs.core.truth_(inst_23405)){
var statearr_23419_23559 = state_23414__$1;
(statearr_23419_23559[(1)] = (5));

} else {
var statearr_23420_23560 = state_23414__$1;
(statearr_23420_23560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (3))){
var inst_23412 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23414__$1,inst_23412);
} else {
if((state_val_23415 === (2))){
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23414__$1,(4),jobs);
} else {
if((state_val_23415 === (1))){
var state_23414__$1 = state_23414;
var statearr_23421_23561 = state_23414__$1;
(statearr_23421_23561[(2)] = null);

(statearr_23421_23561[(1)] = (2));


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
});})(__23543,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
;
return ((function (__23543,switch__6987__auto__,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23425 = [null,null,null,null,null,null,null];
(statearr_23425[(0)] = state_machine__6988__auto__);

(statearr_23425[(1)] = (1));

return statearr_23425;
});
var state_machine__6988__auto____1 = (function (state_23414){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23426){if((e23426 instanceof Object)){
var ex__6991__auto__ = e23426;
var statearr_23427_23562 = state_23414;
(statearr_23427_23562[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23563 = state_23414;
state_23414 = G__23563;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23414){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__23543,switch__6987__auto__,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23428 = f__7044__auto__.call(null);
(statearr_23428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23555);

return statearr_23428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__23543,c__7043__auto___23555,G__23374_23544,n__4509__auto___23542,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23564 = (__23543 + (1));
__23543 = G__23564;
continue;
} else {
}
break;
}

var c__7043__auto___23565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23565,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23565,jobs,results,process,async){
return (function (state_23450){
var state_val_23451 = (state_23450[(1)]);
if((state_val_23451 === (9))){
var inst_23443 = (state_23450[(2)]);
var state_23450__$1 = (function (){var statearr_23452 = state_23450;
(statearr_23452[(7)] = inst_23443);

return statearr_23452;
})();
var statearr_23453_23566 = state_23450__$1;
(statearr_23453_23566[(2)] = null);

(statearr_23453_23566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23451 === (8))){
var inst_23436 = (state_23450[(8)]);
var inst_23441 = (state_23450[(2)]);
var state_23450__$1 = (function (){var statearr_23454 = state_23450;
(statearr_23454[(9)] = inst_23441);

return statearr_23454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23450__$1,(9),results,inst_23436);
} else {
if((state_val_23451 === (7))){
var inst_23446 = (state_23450[(2)]);
var state_23450__$1 = state_23450;
var statearr_23455_23567 = state_23450__$1;
(statearr_23455_23567[(2)] = inst_23446);

(statearr_23455_23567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23451 === (6))){
var inst_23431 = (state_23450[(10)]);
var inst_23436 = (state_23450[(8)]);
var inst_23436__$1 = cljs.core.async.chan.call(null,(1));
var inst_23437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23438 = [inst_23431,inst_23436__$1];
var inst_23439 = (new cljs.core.PersistentVector(null,2,(5),inst_23437,inst_23438,null));
var state_23450__$1 = (function (){var statearr_23456 = state_23450;
(statearr_23456[(8)] = inst_23436__$1);

return statearr_23456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23450__$1,(8),jobs,inst_23439);
} else {
if((state_val_23451 === (5))){
var inst_23434 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23450__$1 = state_23450;
var statearr_23457_23568 = state_23450__$1;
(statearr_23457_23568[(2)] = inst_23434);

(statearr_23457_23568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23451 === (4))){
var inst_23431 = (state_23450[(10)]);
var inst_23431__$1 = (state_23450[(2)]);
var inst_23432 = (inst_23431__$1 == null);
var state_23450__$1 = (function (){var statearr_23458 = state_23450;
(statearr_23458[(10)] = inst_23431__$1);

return statearr_23458;
})();
if(cljs.core.truth_(inst_23432)){
var statearr_23459_23569 = state_23450__$1;
(statearr_23459_23569[(1)] = (5));

} else {
var statearr_23460_23570 = state_23450__$1;
(statearr_23460_23570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23451 === (3))){
var inst_23448 = (state_23450[(2)]);
var state_23450__$1 = state_23450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23450__$1,inst_23448);
} else {
if((state_val_23451 === (2))){
var state_23450__$1 = state_23450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23450__$1,(4),from);
} else {
if((state_val_23451 === (1))){
var state_23450__$1 = state_23450;
var statearr_23461_23571 = state_23450__$1;
(statearr_23461_23571[(2)] = null);

(statearr_23461_23571[(1)] = (2));


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
});})(c__7043__auto___23565,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___23565,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23465[(0)] = state_machine__6988__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var state_machine__6988__auto____1 = (function (state_23450){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__6991__auto__ = e23466;
var statearr_23467_23572 = state_23450;
(statearr_23467_23572[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23573 = state_23450;
state_23450 = G__23573;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23450){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23565,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23468 = f__7044__auto__.call(null);
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23565);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23565,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_23506){
var state_val_23507 = (state_23506[(1)]);
if((state_val_23507 === (7))){
var inst_23502 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23508_23574 = state_23506__$1;
(statearr_23508_23574[(2)] = inst_23502);

(statearr_23508_23574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (20))){
var state_23506__$1 = state_23506;
var statearr_23509_23575 = state_23506__$1;
(statearr_23509_23575[(2)] = null);

(statearr_23509_23575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (1))){
var state_23506__$1 = state_23506;
var statearr_23510_23576 = state_23506__$1;
(statearr_23510_23576[(2)] = null);

(statearr_23510_23576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (4))){
var inst_23471 = (state_23506[(7)]);
var inst_23471__$1 = (state_23506[(2)]);
var inst_23472 = (inst_23471__$1 == null);
var state_23506__$1 = (function (){var statearr_23511 = state_23506;
(statearr_23511[(7)] = inst_23471__$1);

return statearr_23511;
})();
if(cljs.core.truth_(inst_23472)){
var statearr_23512_23577 = state_23506__$1;
(statearr_23512_23577[(1)] = (5));

} else {
var statearr_23513_23578 = state_23506__$1;
(statearr_23513_23578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (15))){
var inst_23484 = (state_23506[(8)]);
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23506__$1,(18),to,inst_23484);
} else {
if((state_val_23507 === (21))){
var inst_23497 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23514_23579 = state_23506__$1;
(statearr_23514_23579[(2)] = inst_23497);

(statearr_23514_23579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (13))){
var inst_23499 = (state_23506[(2)]);
var state_23506__$1 = (function (){var statearr_23515 = state_23506;
(statearr_23515[(9)] = inst_23499);

return statearr_23515;
})();
var statearr_23516_23580 = state_23506__$1;
(statearr_23516_23580[(2)] = null);

(statearr_23516_23580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (6))){
var inst_23471 = (state_23506[(7)]);
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23506__$1,(11),inst_23471);
} else {
if((state_val_23507 === (17))){
var inst_23492 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
if(cljs.core.truth_(inst_23492)){
var statearr_23517_23581 = state_23506__$1;
(statearr_23517_23581[(1)] = (19));

} else {
var statearr_23518_23582 = state_23506__$1;
(statearr_23518_23582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (3))){
var inst_23504 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23506__$1,inst_23504);
} else {
if((state_val_23507 === (12))){
var inst_23481 = (state_23506[(10)]);
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23506__$1,(14),inst_23481);
} else {
if((state_val_23507 === (2))){
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23506__$1,(4),results);
} else {
if((state_val_23507 === (19))){
var state_23506__$1 = state_23506;
var statearr_23519_23583 = state_23506__$1;
(statearr_23519_23583[(2)] = null);

(statearr_23519_23583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (11))){
var inst_23481 = (state_23506[(2)]);
var state_23506__$1 = (function (){var statearr_23520 = state_23506;
(statearr_23520[(10)] = inst_23481);

return statearr_23520;
})();
var statearr_23521_23584 = state_23506__$1;
(statearr_23521_23584[(2)] = null);

(statearr_23521_23584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (9))){
var state_23506__$1 = state_23506;
var statearr_23522_23585 = state_23506__$1;
(statearr_23522_23585[(2)] = null);

(statearr_23522_23585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (5))){
var state_23506__$1 = state_23506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23523_23586 = state_23506__$1;
(statearr_23523_23586[(1)] = (8));

} else {
var statearr_23524_23587 = state_23506__$1;
(statearr_23524_23587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (14))){
var inst_23486 = (state_23506[(11)]);
var inst_23484 = (state_23506[(8)]);
var inst_23484__$1 = (state_23506[(2)]);
var inst_23485 = (inst_23484__$1 == null);
var inst_23486__$1 = cljs.core.not.call(null,inst_23485);
var state_23506__$1 = (function (){var statearr_23525 = state_23506;
(statearr_23525[(11)] = inst_23486__$1);

(statearr_23525[(8)] = inst_23484__$1);

return statearr_23525;
})();
if(inst_23486__$1){
var statearr_23526_23588 = state_23506__$1;
(statearr_23526_23588[(1)] = (15));

} else {
var statearr_23527_23589 = state_23506__$1;
(statearr_23527_23589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (16))){
var inst_23486 = (state_23506[(11)]);
var state_23506__$1 = state_23506;
var statearr_23528_23590 = state_23506__$1;
(statearr_23528_23590[(2)] = inst_23486);

(statearr_23528_23590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (10))){
var inst_23478 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23529_23591 = state_23506__$1;
(statearr_23529_23591[(2)] = inst_23478);

(statearr_23529_23591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (18))){
var inst_23489 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23530_23592 = state_23506__$1;
(statearr_23530_23592[(2)] = inst_23489);

(statearr_23530_23592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (8))){
var inst_23475 = cljs.core.async.close_BANG_.call(null,to);
var state_23506__$1 = state_23506;
var statearr_23531_23593 = state_23506__$1;
(statearr_23531_23593[(2)] = inst_23475);

(statearr_23531_23593[(1)] = (10));


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
var statearr_23535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23535[(0)] = state_machine__6988__auto__);

(statearr_23535[(1)] = (1));

return statearr_23535;
});
var state_machine__6988__auto____1 = (function (state_23506){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23536){if((e23536 instanceof Object)){
var ex__6991__auto__ = e23536;
var statearr_23537_23594 = state_23506;
(statearr_23537_23594[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23595 = state_23506;
state_23506 = G__23595;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23506){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_23538 = f__7044__auto__.call(null);
(statearr_23538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23538;
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
var c__7043__auto___23696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___23696,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___23696,tc,fc){
return (function (state_23671){
var state_val_23672 = (state_23671[(1)]);
if((state_val_23672 === (7))){
var inst_23667 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
var statearr_23673_23697 = state_23671__$1;
(statearr_23673_23697[(2)] = inst_23667);

(statearr_23673_23697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (1))){
var state_23671__$1 = state_23671;
var statearr_23674_23698 = state_23671__$1;
(statearr_23674_23698[(2)] = null);

(statearr_23674_23698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (4))){
var inst_23648 = (state_23671[(7)]);
var inst_23648__$1 = (state_23671[(2)]);
var inst_23649 = (inst_23648__$1 == null);
var state_23671__$1 = (function (){var statearr_23675 = state_23671;
(statearr_23675[(7)] = inst_23648__$1);

return statearr_23675;
})();
if(cljs.core.truth_(inst_23649)){
var statearr_23676_23699 = state_23671__$1;
(statearr_23676_23699[(1)] = (5));

} else {
var statearr_23677_23700 = state_23671__$1;
(statearr_23677_23700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (13))){
var state_23671__$1 = state_23671;
var statearr_23678_23701 = state_23671__$1;
(statearr_23678_23701[(2)] = null);

(statearr_23678_23701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (6))){
var inst_23648 = (state_23671[(7)]);
var inst_23654 = p.call(null,inst_23648);
var state_23671__$1 = state_23671;
if(cljs.core.truth_(inst_23654)){
var statearr_23679_23702 = state_23671__$1;
(statearr_23679_23702[(1)] = (9));

} else {
var statearr_23680_23703 = state_23671__$1;
(statearr_23680_23703[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (3))){
var inst_23669 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23671__$1,inst_23669);
} else {
if((state_val_23672 === (12))){
var state_23671__$1 = state_23671;
var statearr_23681_23704 = state_23671__$1;
(statearr_23681_23704[(2)] = null);

(statearr_23681_23704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (2))){
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23671__$1,(4),ch);
} else {
if((state_val_23672 === (11))){
var inst_23648 = (state_23671[(7)]);
var inst_23658 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23671__$1,(8),inst_23658,inst_23648);
} else {
if((state_val_23672 === (9))){
var state_23671__$1 = state_23671;
var statearr_23682_23705 = state_23671__$1;
(statearr_23682_23705[(2)] = tc);

(statearr_23682_23705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (5))){
var inst_23651 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23652 = cljs.core.async.close_BANG_.call(null,fc);
var state_23671__$1 = (function (){var statearr_23683 = state_23671;
(statearr_23683[(8)] = inst_23651);

return statearr_23683;
})();
var statearr_23684_23706 = state_23671__$1;
(statearr_23684_23706[(2)] = inst_23652);

(statearr_23684_23706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (14))){
var inst_23665 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
var statearr_23685_23707 = state_23671__$1;
(statearr_23685_23707[(2)] = inst_23665);

(statearr_23685_23707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (10))){
var state_23671__$1 = state_23671;
var statearr_23686_23708 = state_23671__$1;
(statearr_23686_23708[(2)] = fc);

(statearr_23686_23708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (8))){
var inst_23660 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
if(cljs.core.truth_(inst_23660)){
var statearr_23687_23709 = state_23671__$1;
(statearr_23687_23709[(1)] = (12));

} else {
var statearr_23688_23710 = state_23671__$1;
(statearr_23688_23710[(1)] = (13));

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
});})(c__7043__auto___23696,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___23696,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_23692 = [null,null,null,null,null,null,null,null,null];
(statearr_23692[(0)] = state_machine__6988__auto__);

(statearr_23692[(1)] = (1));

return statearr_23692;
});
var state_machine__6988__auto____1 = (function (state_23671){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23693){if((e23693 instanceof Object)){
var ex__6991__auto__ = e23693;
var statearr_23694_23711 = state_23671;
(statearr_23694_23711[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23712 = state_23671;
state_23671 = G__23712;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23671){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___23696,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_23695 = f__7044__auto__.call(null);
(statearr_23695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___23696);

return statearr_23695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___23696,tc,fc))
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
return (function (state_23759){
var state_val_23760 = (state_23759[(1)]);
if((state_val_23760 === (7))){
var inst_23755 = (state_23759[(2)]);
var state_23759__$1 = state_23759;
var statearr_23761_23777 = state_23759__$1;
(statearr_23761_23777[(2)] = inst_23755);

(statearr_23761_23777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23760 === (6))){
var inst_23745 = (state_23759[(7)]);
var inst_23748 = (state_23759[(8)]);
var inst_23752 = f.call(null,inst_23745,inst_23748);
var inst_23745__$1 = inst_23752;
var state_23759__$1 = (function (){var statearr_23762 = state_23759;
(statearr_23762[(7)] = inst_23745__$1);

return statearr_23762;
})();
var statearr_23763_23778 = state_23759__$1;
(statearr_23763_23778[(2)] = null);

(statearr_23763_23778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23760 === (5))){
var inst_23745 = (state_23759[(7)]);
var state_23759__$1 = state_23759;
var statearr_23764_23779 = state_23759__$1;
(statearr_23764_23779[(2)] = inst_23745);

(statearr_23764_23779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23760 === (4))){
var inst_23748 = (state_23759[(8)]);
var inst_23748__$1 = (state_23759[(2)]);
var inst_23749 = (inst_23748__$1 == null);
var state_23759__$1 = (function (){var statearr_23765 = state_23759;
(statearr_23765[(8)] = inst_23748__$1);

return statearr_23765;
})();
if(cljs.core.truth_(inst_23749)){
var statearr_23766_23780 = state_23759__$1;
(statearr_23766_23780[(1)] = (5));

} else {
var statearr_23767_23781 = state_23759__$1;
(statearr_23767_23781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23760 === (3))){
var inst_23757 = (state_23759[(2)]);
var state_23759__$1 = state_23759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23759__$1,inst_23757);
} else {
if((state_val_23760 === (2))){
var state_23759__$1 = state_23759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23759__$1,(4),ch);
} else {
if((state_val_23760 === (1))){
var inst_23745 = init;
var state_23759__$1 = (function (){var statearr_23768 = state_23759;
(statearr_23768[(7)] = inst_23745);

return statearr_23768;
})();
var statearr_23769_23782 = state_23759__$1;
(statearr_23769_23782[(2)] = null);

(statearr_23769_23782[(1)] = (2));


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
var statearr_23773 = [null,null,null,null,null,null,null,null,null];
(statearr_23773[(0)] = state_machine__6988__auto__);

(statearr_23773[(1)] = (1));

return statearr_23773;
});
var state_machine__6988__auto____1 = (function (state_23759){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23774){if((e23774 instanceof Object)){
var ex__6991__auto__ = e23774;
var statearr_23775_23783 = state_23759;
(statearr_23775_23783[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23784 = state_23759;
state_23759 = G__23784;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23759){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23776 = f__7044__auto__.call(null);
(statearr_23776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23776;
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
return (function (state_23858){
var state_val_23859 = (state_23858[(1)]);
if((state_val_23859 === (7))){
var inst_23840 = (state_23858[(2)]);
var state_23858__$1 = state_23858;
var statearr_23860_23883 = state_23858__$1;
(statearr_23860_23883[(2)] = inst_23840);

(statearr_23860_23883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (1))){
var inst_23834 = cljs.core.seq.call(null,coll);
var inst_23835 = inst_23834;
var state_23858__$1 = (function (){var statearr_23861 = state_23858;
(statearr_23861[(7)] = inst_23835);

return statearr_23861;
})();
var statearr_23862_23884 = state_23858__$1;
(statearr_23862_23884[(2)] = null);

(statearr_23862_23884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (4))){
var inst_23835 = (state_23858[(7)]);
var inst_23838 = cljs.core.first.call(null,inst_23835);
var state_23858__$1 = state_23858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23858__$1,(7),ch,inst_23838);
} else {
if((state_val_23859 === (13))){
var inst_23852 = (state_23858[(2)]);
var state_23858__$1 = state_23858;
var statearr_23863_23885 = state_23858__$1;
(statearr_23863_23885[(2)] = inst_23852);

(statearr_23863_23885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (6))){
var inst_23843 = (state_23858[(2)]);
var state_23858__$1 = state_23858;
if(cljs.core.truth_(inst_23843)){
var statearr_23864_23886 = state_23858__$1;
(statearr_23864_23886[(1)] = (8));

} else {
var statearr_23865_23887 = state_23858__$1;
(statearr_23865_23887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (3))){
var inst_23856 = (state_23858[(2)]);
var state_23858__$1 = state_23858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23858__$1,inst_23856);
} else {
if((state_val_23859 === (12))){
var state_23858__$1 = state_23858;
var statearr_23866_23888 = state_23858__$1;
(statearr_23866_23888[(2)] = null);

(statearr_23866_23888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (2))){
var inst_23835 = (state_23858[(7)]);
var state_23858__$1 = state_23858;
if(cljs.core.truth_(inst_23835)){
var statearr_23867_23889 = state_23858__$1;
(statearr_23867_23889[(1)] = (4));

} else {
var statearr_23868_23890 = state_23858__$1;
(statearr_23868_23890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (11))){
var inst_23849 = cljs.core.async.close_BANG_.call(null,ch);
var state_23858__$1 = state_23858;
var statearr_23869_23891 = state_23858__$1;
(statearr_23869_23891[(2)] = inst_23849);

(statearr_23869_23891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (9))){
var state_23858__$1 = state_23858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23870_23892 = state_23858__$1;
(statearr_23870_23892[(1)] = (11));

} else {
var statearr_23871_23893 = state_23858__$1;
(statearr_23871_23893[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (5))){
var inst_23835 = (state_23858[(7)]);
var state_23858__$1 = state_23858;
var statearr_23872_23894 = state_23858__$1;
(statearr_23872_23894[(2)] = inst_23835);

(statearr_23872_23894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (10))){
var inst_23854 = (state_23858[(2)]);
var state_23858__$1 = state_23858;
var statearr_23873_23895 = state_23858__$1;
(statearr_23873_23895[(2)] = inst_23854);

(statearr_23873_23895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23859 === (8))){
var inst_23835 = (state_23858[(7)]);
var inst_23845 = cljs.core.next.call(null,inst_23835);
var inst_23835__$1 = inst_23845;
var state_23858__$1 = (function (){var statearr_23874 = state_23858;
(statearr_23874[(7)] = inst_23835__$1);

return statearr_23874;
})();
var statearr_23875_23896 = state_23858__$1;
(statearr_23875_23896[(2)] = null);

(statearr_23875_23896[(1)] = (2));


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
var statearr_23879 = [null,null,null,null,null,null,null,null];
(statearr_23879[(0)] = state_machine__6988__auto__);

(statearr_23879[(1)] = (1));

return statearr_23879;
});
var state_machine__6988__auto____1 = (function (state_23858){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_23858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e23880){if((e23880 instanceof Object)){
var ex__6991__auto__ = e23880;
var statearr_23881_23897 = state_23858;
(statearr_23881_23897[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23898 = state_23858;
state_23858 = G__23898;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_23858){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_23858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_23882 = f__7044__auto__.call(null);
(statearr_23882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_23882;
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

cljs.core.async.Mux = (function (){var obj23900 = {};
return obj23900;
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


cljs.core.async.Mult = (function (){var obj23902 = {};
return obj23902;
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
if(typeof cljs.core.async.t24124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24124 = (function (cs,ch,mult,meta24125){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24125 = meta24125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24124.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24126){
var self__ = this;
var _24126__$1 = this;
return self__.meta24125;
});})(cs))
;

cljs.core.async.t24124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24126,meta24125__$1){
var self__ = this;
var _24126__$1 = this;
return (new cljs.core.async.t24124(self__.cs,self__.ch,self__.mult,meta24125__$1));
});})(cs))
;

cljs.core.async.t24124.cljs$lang$type = true;

cljs.core.async.t24124.cljs$lang$ctorStr = "cljs.core.async/t24124";

cljs.core.async.t24124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24124");
});})(cs))
;

cljs.core.async.__GT_t24124 = ((function (cs){
return (function __GT_t24124(cs__$1,ch__$1,mult__$1,meta24125){
return (new cljs.core.async.t24124(cs__$1,ch__$1,mult__$1,meta24125));
});})(cs))
;

}

return (new cljs.core.async.t24124(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___24345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24345,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24345,cs,m,dchan,dctr,done){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24346 = state_24257__$1;
(statearr_24259_24346[(2)] = inst_24253);

(statearr_24259_24346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (20))){
var inst_24158 = (state_24257[(7)]);
var inst_24168 = cljs.core.first.call(null,inst_24158);
var inst_24169 = cljs.core.nth.call(null,inst_24168,(0),null);
var inst_24170 = cljs.core.nth.call(null,inst_24168,(1),null);
var state_24257__$1 = (function (){var statearr_24260 = state_24257;
(statearr_24260[(8)] = inst_24169);

return statearr_24260;
})();
if(cljs.core.truth_(inst_24170)){
var statearr_24261_24347 = state_24257__$1;
(statearr_24261_24347[(1)] = (22));

} else {
var statearr_24262_24348 = state_24257__$1;
(statearr_24262_24348[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (27))){
var inst_24200 = (state_24257[(9)]);
var inst_24198 = (state_24257[(10)]);
var inst_24205 = (state_24257[(11)]);
var inst_24129 = (state_24257[(12)]);
var inst_24205__$1 = cljs.core._nth.call(null,inst_24198,inst_24200);
var inst_24206 = cljs.core.async.put_BANG_.call(null,inst_24205__$1,inst_24129,done);
var state_24257__$1 = (function (){var statearr_24263 = state_24257;
(statearr_24263[(11)] = inst_24205__$1);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24206)){
var statearr_24264_24349 = state_24257__$1;
(statearr_24264_24349[(1)] = (30));

} else {
var statearr_24265_24350 = state_24257__$1;
(statearr_24265_24350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var state_24257__$1 = state_24257;
var statearr_24266_24351 = state_24257__$1;
(statearr_24266_24351[(2)] = null);

(statearr_24266_24351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (24))){
var inst_24158 = (state_24257[(7)]);
var inst_24175 = (state_24257[(2)]);
var inst_24176 = cljs.core.next.call(null,inst_24158);
var inst_24138 = inst_24176;
var inst_24139 = null;
var inst_24140 = (0);
var inst_24141 = (0);
var state_24257__$1 = (function (){var statearr_24267 = state_24257;
(statearr_24267[(13)] = inst_24138);

(statearr_24267[(14)] = inst_24175);

(statearr_24267[(15)] = inst_24139);

(statearr_24267[(16)] = inst_24141);

(statearr_24267[(17)] = inst_24140);

return statearr_24267;
})();
var statearr_24268_24352 = state_24257__$1;
(statearr_24268_24352[(2)] = null);

(statearr_24268_24352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (39))){
var state_24257__$1 = state_24257;
var statearr_24272_24353 = state_24257__$1;
(statearr_24272_24353[(2)] = null);

(statearr_24272_24353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24129 = (state_24257[(12)]);
var inst_24129__$1 = (state_24257[(2)]);
var inst_24130 = (inst_24129__$1 == null);
var state_24257__$1 = (function (){var statearr_24273 = state_24257;
(statearr_24273[(12)] = inst_24129__$1);

return statearr_24273;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24274_24354 = state_24257__$1;
(statearr_24274_24354[(1)] = (5));

} else {
var statearr_24275_24355 = state_24257__$1;
(statearr_24275_24355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (15))){
var inst_24138 = (state_24257[(13)]);
var inst_24139 = (state_24257[(15)]);
var inst_24141 = (state_24257[(16)]);
var inst_24140 = (state_24257[(17)]);
var inst_24154 = (state_24257[(2)]);
var inst_24155 = (inst_24141 + (1));
var tmp24269 = inst_24138;
var tmp24270 = inst_24139;
var tmp24271 = inst_24140;
var inst_24138__$1 = tmp24269;
var inst_24139__$1 = tmp24270;
var inst_24140__$1 = tmp24271;
var inst_24141__$1 = inst_24155;
var state_24257__$1 = (function (){var statearr_24276 = state_24257;
(statearr_24276[(13)] = inst_24138__$1);

(statearr_24276[(15)] = inst_24139__$1);

(statearr_24276[(16)] = inst_24141__$1);

(statearr_24276[(17)] = inst_24140__$1);

(statearr_24276[(18)] = inst_24154);

return statearr_24276;
})();
var statearr_24277_24356 = state_24257__$1;
(statearr_24277_24356[(2)] = null);

(statearr_24277_24356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (21))){
var inst_24179 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24281_24357 = state_24257__$1;
(statearr_24281_24357[(2)] = inst_24179);

(statearr_24281_24357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (31))){
var inst_24205 = (state_24257[(11)]);
var inst_24209 = done.call(null,null);
var inst_24210 = cljs.core.async.untap_STAR_.call(null,m,inst_24205);
var state_24257__$1 = (function (){var statearr_24282 = state_24257;
(statearr_24282[(19)] = inst_24209);

return statearr_24282;
})();
var statearr_24283_24358 = state_24257__$1;
(statearr_24283_24358[(2)] = inst_24210);

(statearr_24283_24358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (32))){
var inst_24200 = (state_24257[(9)]);
var inst_24199 = (state_24257[(20)]);
var inst_24198 = (state_24257[(10)]);
var inst_24197 = (state_24257[(21)]);
var inst_24212 = (state_24257[(2)]);
var inst_24213 = (inst_24200 + (1));
var tmp24278 = inst_24199;
var tmp24279 = inst_24198;
var tmp24280 = inst_24197;
var inst_24197__$1 = tmp24280;
var inst_24198__$1 = tmp24279;
var inst_24199__$1 = tmp24278;
var inst_24200__$1 = inst_24213;
var state_24257__$1 = (function (){var statearr_24284 = state_24257;
(statearr_24284[(22)] = inst_24212);

(statearr_24284[(9)] = inst_24200__$1);

(statearr_24284[(20)] = inst_24199__$1);

(statearr_24284[(10)] = inst_24198__$1);

(statearr_24284[(21)] = inst_24197__$1);

return statearr_24284;
})();
var statearr_24285_24359 = state_24257__$1;
(statearr_24285_24359[(2)] = null);

(statearr_24285_24359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (40))){
var inst_24225 = (state_24257[(23)]);
var inst_24229 = done.call(null,null);
var inst_24230 = cljs.core.async.untap_STAR_.call(null,m,inst_24225);
var state_24257__$1 = (function (){var statearr_24286 = state_24257;
(statearr_24286[(24)] = inst_24229);

return statearr_24286;
})();
var statearr_24287_24360 = state_24257__$1;
(statearr_24287_24360[(2)] = inst_24230);

(statearr_24287_24360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (33))){
var inst_24216 = (state_24257[(25)]);
var inst_24218 = cljs.core.chunked_seq_QMARK_.call(null,inst_24216);
var state_24257__$1 = state_24257;
if(inst_24218){
var statearr_24288_24361 = state_24257__$1;
(statearr_24288_24361[(1)] = (36));

} else {
var statearr_24289_24362 = state_24257__$1;
(statearr_24289_24362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (13))){
var inst_24148 = (state_24257[(26)]);
var inst_24151 = cljs.core.async.close_BANG_.call(null,inst_24148);
var state_24257__$1 = state_24257;
var statearr_24290_24363 = state_24257__$1;
(statearr_24290_24363[(2)] = inst_24151);

(statearr_24290_24363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (22))){
var inst_24169 = (state_24257[(8)]);
var inst_24172 = cljs.core.async.close_BANG_.call(null,inst_24169);
var state_24257__$1 = state_24257;
var statearr_24291_24364 = state_24257__$1;
(statearr_24291_24364[(2)] = inst_24172);

(statearr_24291_24364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (36))){
var inst_24216 = (state_24257[(25)]);
var inst_24220 = cljs.core.chunk_first.call(null,inst_24216);
var inst_24221 = cljs.core.chunk_rest.call(null,inst_24216);
var inst_24222 = cljs.core.count.call(null,inst_24220);
var inst_24197 = inst_24221;
var inst_24198 = inst_24220;
var inst_24199 = inst_24222;
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24292 = state_24257;
(statearr_24292[(9)] = inst_24200);

(statearr_24292[(20)] = inst_24199);

(statearr_24292[(10)] = inst_24198);

(statearr_24292[(21)] = inst_24197);

return statearr_24292;
})();
var statearr_24293_24365 = state_24257__$1;
(statearr_24293_24365[(2)] = null);

(statearr_24293_24365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (41))){
var inst_24216 = (state_24257[(25)]);
var inst_24232 = (state_24257[(2)]);
var inst_24233 = cljs.core.next.call(null,inst_24216);
var inst_24197 = inst_24233;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24294 = state_24257;
(statearr_24294[(27)] = inst_24232);

(statearr_24294[(9)] = inst_24200);

(statearr_24294[(20)] = inst_24199);

(statearr_24294[(10)] = inst_24198);

(statearr_24294[(21)] = inst_24197);

return statearr_24294;
})();
var statearr_24295_24366 = state_24257__$1;
(statearr_24295_24366[(2)] = null);

(statearr_24295_24366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (43))){
var state_24257__$1 = state_24257;
var statearr_24296_24367 = state_24257__$1;
(statearr_24296_24367[(2)] = null);

(statearr_24296_24367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (29))){
var inst_24241 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24297_24368 = state_24257__$1;
(statearr_24297_24368[(2)] = inst_24241);

(statearr_24297_24368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (44))){
var inst_24250 = (state_24257[(2)]);
var state_24257__$1 = (function (){var statearr_24298 = state_24257;
(statearr_24298[(28)] = inst_24250);

return statearr_24298;
})();
var statearr_24299_24369 = state_24257__$1;
(statearr_24299_24369[(2)] = null);

(statearr_24299_24369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var inst_24189 = (state_24257[(29)]);
var inst_24188 = cljs.core.deref.call(null,cs);
var inst_24189__$1 = cljs.core.keys.call(null,inst_24188);
var inst_24190 = cljs.core.count.call(null,inst_24189__$1);
var inst_24191 = cljs.core.reset_BANG_.call(null,dctr,inst_24190);
var inst_24196 = cljs.core.seq.call(null,inst_24189__$1);
var inst_24197 = inst_24196;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24300 = state_24257;
(statearr_24300[(9)] = inst_24200);

(statearr_24300[(29)] = inst_24189__$1);

(statearr_24300[(20)] = inst_24199);

(statearr_24300[(10)] = inst_24198);

(statearr_24300[(21)] = inst_24197);

(statearr_24300[(30)] = inst_24191);

return statearr_24300;
})();
var statearr_24301_24370 = state_24257__$1;
(statearr_24301_24370[(2)] = null);

(statearr_24301_24370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (28))){
var inst_24216 = (state_24257[(25)]);
var inst_24197 = (state_24257[(21)]);
var inst_24216__$1 = cljs.core.seq.call(null,inst_24197);
var state_24257__$1 = (function (){var statearr_24302 = state_24257;
(statearr_24302[(25)] = inst_24216__$1);

return statearr_24302;
})();
if(inst_24216__$1){
var statearr_24303_24371 = state_24257__$1;
(statearr_24303_24371[(1)] = (33));

} else {
var statearr_24304_24372 = state_24257__$1;
(statearr_24304_24372[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (25))){
var inst_24200 = (state_24257[(9)]);
var inst_24199 = (state_24257[(20)]);
var inst_24202 = (inst_24200 < inst_24199);
var inst_24203 = inst_24202;
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24203)){
var statearr_24305_24373 = state_24257__$1;
(statearr_24305_24373[(1)] = (27));

} else {
var statearr_24306_24374 = state_24257__$1;
(statearr_24306_24374[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (34))){
var state_24257__$1 = state_24257;
var statearr_24307_24375 = state_24257__$1;
(statearr_24307_24375[(2)] = null);

(statearr_24307_24375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (17))){
var state_24257__$1 = state_24257;
var statearr_24308_24376 = state_24257__$1;
(statearr_24308_24376[(2)] = null);

(statearr_24308_24376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var inst_24184 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24309_24377 = state_24257__$1;
(statearr_24309_24377[(2)] = inst_24184);

(statearr_24309_24377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (23))){
var state_24257__$1 = state_24257;
var statearr_24310_24378 = state_24257__$1;
(statearr_24310_24378[(2)] = null);

(statearr_24310_24378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (35))){
var inst_24239 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24311_24379 = state_24257__$1;
(statearr_24311_24379[(2)] = inst_24239);

(statearr_24311_24379[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (19))){
var inst_24158 = (state_24257[(7)]);
var inst_24162 = cljs.core.chunk_first.call(null,inst_24158);
var inst_24163 = cljs.core.chunk_rest.call(null,inst_24158);
var inst_24164 = cljs.core.count.call(null,inst_24162);
var inst_24138 = inst_24163;
var inst_24139 = inst_24162;
var inst_24140 = inst_24164;
var inst_24141 = (0);
var state_24257__$1 = (function (){var statearr_24312 = state_24257;
(statearr_24312[(13)] = inst_24138);

(statearr_24312[(15)] = inst_24139);

(statearr_24312[(16)] = inst_24141);

(statearr_24312[(17)] = inst_24140);

return statearr_24312;
})();
var statearr_24313_24380 = state_24257__$1;
(statearr_24313_24380[(2)] = null);

(statearr_24313_24380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (11))){
var inst_24138 = (state_24257[(13)]);
var inst_24158 = (state_24257[(7)]);
var inst_24158__$1 = cljs.core.seq.call(null,inst_24138);
var state_24257__$1 = (function (){var statearr_24314 = state_24257;
(statearr_24314[(7)] = inst_24158__$1);

return statearr_24314;
})();
if(inst_24158__$1){
var statearr_24315_24381 = state_24257__$1;
(statearr_24315_24381[(1)] = (16));

} else {
var statearr_24316_24382 = state_24257__$1;
(statearr_24316_24382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (9))){
var inst_24186 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24317_24383 = state_24257__$1;
(statearr_24317_24383[(2)] = inst_24186);

(statearr_24317_24383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var inst_24136 = cljs.core.deref.call(null,cs);
var inst_24137 = cljs.core.seq.call(null,inst_24136);
var inst_24138 = inst_24137;
var inst_24139 = null;
var inst_24140 = (0);
var inst_24141 = (0);
var state_24257__$1 = (function (){var statearr_24318 = state_24257;
(statearr_24318[(13)] = inst_24138);

(statearr_24318[(15)] = inst_24139);

(statearr_24318[(16)] = inst_24141);

(statearr_24318[(17)] = inst_24140);

return statearr_24318;
})();
var statearr_24319_24384 = state_24257__$1;
(statearr_24319_24384[(2)] = null);

(statearr_24319_24384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (14))){
var state_24257__$1 = state_24257;
var statearr_24320_24385 = state_24257__$1;
(statearr_24320_24385[(2)] = null);

(statearr_24320_24385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (45))){
var inst_24247 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24321_24386 = state_24257__$1;
(statearr_24321_24386[(2)] = inst_24247);

(statearr_24321_24386[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (26))){
var inst_24189 = (state_24257[(29)]);
var inst_24243 = (state_24257[(2)]);
var inst_24244 = cljs.core.seq.call(null,inst_24189);
var state_24257__$1 = (function (){var statearr_24322 = state_24257;
(statearr_24322[(31)] = inst_24243);

return statearr_24322;
})();
if(inst_24244){
var statearr_24323_24387 = state_24257__$1;
(statearr_24323_24387[(1)] = (42));

} else {
var statearr_24324_24388 = state_24257__$1;
(statearr_24324_24388[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (16))){
var inst_24158 = (state_24257[(7)]);
var inst_24160 = cljs.core.chunked_seq_QMARK_.call(null,inst_24158);
var state_24257__$1 = state_24257;
if(inst_24160){
var statearr_24325_24389 = state_24257__$1;
(statearr_24325_24389[(1)] = (19));

} else {
var statearr_24326_24390 = state_24257__$1;
(statearr_24326_24390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (38))){
var inst_24236 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24327_24391 = state_24257__$1;
(statearr_24327_24391[(2)] = inst_24236);

(statearr_24327_24391[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (30))){
var state_24257__$1 = state_24257;
var statearr_24328_24392 = state_24257__$1;
(statearr_24328_24392[(2)] = null);

(statearr_24328_24392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var inst_24139 = (state_24257[(15)]);
var inst_24141 = (state_24257[(16)]);
var inst_24147 = cljs.core._nth.call(null,inst_24139,inst_24141);
var inst_24148 = cljs.core.nth.call(null,inst_24147,(0),null);
var inst_24149 = cljs.core.nth.call(null,inst_24147,(1),null);
var state_24257__$1 = (function (){var statearr_24329 = state_24257;
(statearr_24329[(26)] = inst_24148);

return statearr_24329;
})();
if(cljs.core.truth_(inst_24149)){
var statearr_24330_24393 = state_24257__$1;
(statearr_24330_24393[(1)] = (13));

} else {
var statearr_24331_24394 = state_24257__$1;
(statearr_24331_24394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (18))){
var inst_24182 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24332_24395 = state_24257__$1;
(statearr_24332_24395[(2)] = inst_24182);

(statearr_24332_24395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (42))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(45),dchan);
} else {
if((state_val_24258 === (37))){
var inst_24216 = (state_24257[(25)]);
var inst_24225 = (state_24257[(23)]);
var inst_24129 = (state_24257[(12)]);
var inst_24225__$1 = cljs.core.first.call(null,inst_24216);
var inst_24226 = cljs.core.async.put_BANG_.call(null,inst_24225__$1,inst_24129,done);
var state_24257__$1 = (function (){var statearr_24333 = state_24257;
(statearr_24333[(23)] = inst_24225__$1);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24226)){
var statearr_24334_24396 = state_24257__$1;
(statearr_24334_24396[(1)] = (39));

} else {
var statearr_24335_24397 = state_24257__$1;
(statearr_24335_24397[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24141 = (state_24257[(16)]);
var inst_24140 = (state_24257[(17)]);
var inst_24143 = (inst_24141 < inst_24140);
var inst_24144 = inst_24143;
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24144)){
var statearr_24336_24398 = state_24257__$1;
(statearr_24336_24398[(1)] = (10));

} else {
var statearr_24337_24399 = state_24257__$1;
(statearr_24337_24399[(1)] = (11));

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
});})(c__7043__auto___24345,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___24345,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24341[(0)] = state_machine__6988__auto__);

(statearr_24341[(1)] = (1));

return statearr_24341;
});
var state_machine__6988__auto____1 = (function (state_24257){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24342){if((e24342 instanceof Object)){
var ex__6991__auto__ = e24342;
var statearr_24343_24400 = state_24257;
(statearr_24343_24400[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24401 = state_24257;
state_24257 = G__24401;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24345,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_24344 = f__7044__auto__.call(null);
(statearr_24344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24345);

return statearr_24344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24345,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24403 = {};
return obj24403;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24404){
var map__24409 = p__24404;
var map__24409__$1 = ((cljs.core.seq_QMARK_.call(null,map__24409))?cljs.core.apply.call(null,cljs.core.hash_map,map__24409):map__24409);
var opts = map__24409__$1;
var statearr_24410_24413 = state;
(statearr_24410_24413[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24409,map__24409__$1,opts){
return (function (val){
var statearr_24411_24414 = state;
(statearr_24411_24414[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24409,map__24409__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24412_24415 = state;
(statearr_24412_24415[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24404 = null;
if (arguments.length > 3) {
  p__24404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24404);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24416){
var state = cljs.core.first(arglist__24416);
arglist__24416 = cljs.core.next(arglist__24416);
var cont_block = cljs.core.first(arglist__24416);
arglist__24416 = cljs.core.next(arglist__24416);
var ports = cljs.core.first(arglist__24416);
var p__24404 = cljs.core.rest(arglist__24416);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24404);
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
if(typeof cljs.core.async.t24536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24536 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24537){
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
this.meta24537 = meta24537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24536.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24538){
var self__ = this;
var _24538__$1 = this;
return self__.meta24537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24538,meta24537__$1){
var self__ = this;
var _24538__$1 = this;
return (new cljs.core.async.t24536(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24536.cljs$lang$type = true;

cljs.core.async.t24536.cljs$lang$ctorStr = "cljs.core.async/t24536";

cljs.core.async.t24536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24537){
return (new cljs.core.async.t24536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24536(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24608){
var state_val_24609 = (state_24608[(1)]);
if((state_val_24609 === (7))){
var inst_24552 = (state_24608[(7)]);
var inst_24557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24552);
var state_24608__$1 = state_24608;
var statearr_24610_24656 = state_24608__$1;
(statearr_24610_24656[(2)] = inst_24557);

(statearr_24610_24656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (20))){
var inst_24567 = (state_24608[(8)]);
var state_24608__$1 = state_24608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24608__$1,(23),out,inst_24567);
} else {
if((state_val_24609 === (1))){
var inst_24542 = (state_24608[(9)]);
var inst_24542__$1 = calc_state.call(null);
var inst_24543 = cljs.core.seq_QMARK_.call(null,inst_24542__$1);
var state_24608__$1 = (function (){var statearr_24611 = state_24608;
(statearr_24611[(9)] = inst_24542__$1);

return statearr_24611;
})();
if(inst_24543){
var statearr_24612_24657 = state_24608__$1;
(statearr_24612_24657[(1)] = (2));

} else {
var statearr_24613_24658 = state_24608__$1;
(statearr_24613_24658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (24))){
var inst_24560 = (state_24608[(10)]);
var inst_24552 = inst_24560;
var state_24608__$1 = (function (){var statearr_24614 = state_24608;
(statearr_24614[(7)] = inst_24552);

return statearr_24614;
})();
var statearr_24615_24659 = state_24608__$1;
(statearr_24615_24659[(2)] = null);

(statearr_24615_24659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (4))){
var inst_24542 = (state_24608[(9)]);
var inst_24548 = (state_24608[(2)]);
var inst_24549 = cljs.core.get.call(null,inst_24548,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24550 = cljs.core.get.call(null,inst_24548,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24551 = cljs.core.get.call(null,inst_24548,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24552 = inst_24542;
var state_24608__$1 = (function (){var statearr_24616 = state_24608;
(statearr_24616[(7)] = inst_24552);

(statearr_24616[(11)] = inst_24551);

(statearr_24616[(12)] = inst_24549);

(statearr_24616[(13)] = inst_24550);

return statearr_24616;
})();
var statearr_24617_24660 = state_24608__$1;
(statearr_24617_24660[(2)] = null);

(statearr_24617_24660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (15))){
var state_24608__$1 = state_24608;
var statearr_24618_24661 = state_24608__$1;
(statearr_24618_24661[(2)] = null);

(statearr_24618_24661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (21))){
var inst_24560 = (state_24608[(10)]);
var inst_24552 = inst_24560;
var state_24608__$1 = (function (){var statearr_24619 = state_24608;
(statearr_24619[(7)] = inst_24552);

return statearr_24619;
})();
var statearr_24620_24662 = state_24608__$1;
(statearr_24620_24662[(2)] = null);

(statearr_24620_24662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (13))){
var inst_24604 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
var statearr_24621_24663 = state_24608__$1;
(statearr_24621_24663[(2)] = inst_24604);

(statearr_24621_24663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (22))){
var inst_24602 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
var statearr_24622_24664 = state_24608__$1;
(statearr_24622_24664[(2)] = inst_24602);

(statearr_24622_24664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (6))){
var inst_24606 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24608__$1,inst_24606);
} else {
if((state_val_24609 === (25))){
var state_24608__$1 = state_24608;
var statearr_24623_24665 = state_24608__$1;
(statearr_24623_24665[(2)] = null);

(statearr_24623_24665[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (17))){
var inst_24582 = (state_24608[(14)]);
var state_24608__$1 = state_24608;
var statearr_24624_24666 = state_24608__$1;
(statearr_24624_24666[(2)] = inst_24582);

(statearr_24624_24666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (3))){
var inst_24542 = (state_24608[(9)]);
var state_24608__$1 = state_24608;
var statearr_24625_24667 = state_24608__$1;
(statearr_24625_24667[(2)] = inst_24542);

(statearr_24625_24667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (12))){
var inst_24568 = (state_24608[(15)]);
var inst_24563 = (state_24608[(16)]);
var inst_24582 = (state_24608[(14)]);
var inst_24582__$1 = inst_24563.call(null,inst_24568);
var state_24608__$1 = (function (){var statearr_24626 = state_24608;
(statearr_24626[(14)] = inst_24582__$1);

return statearr_24626;
})();
if(cljs.core.truth_(inst_24582__$1)){
var statearr_24627_24668 = state_24608__$1;
(statearr_24627_24668[(1)] = (17));

} else {
var statearr_24628_24669 = state_24608__$1;
(statearr_24628_24669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (2))){
var inst_24542 = (state_24608[(9)]);
var inst_24545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24542);
var state_24608__$1 = state_24608;
var statearr_24629_24670 = state_24608__$1;
(statearr_24629_24670[(2)] = inst_24545);

(statearr_24629_24670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (23))){
var inst_24593 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
if(cljs.core.truth_(inst_24593)){
var statearr_24630_24671 = state_24608__$1;
(statearr_24630_24671[(1)] = (24));

} else {
var statearr_24631_24672 = state_24608__$1;
(statearr_24631_24672[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (19))){
var inst_24590 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
if(cljs.core.truth_(inst_24590)){
var statearr_24632_24673 = state_24608__$1;
(statearr_24632_24673[(1)] = (20));

} else {
var statearr_24633_24674 = state_24608__$1;
(statearr_24633_24674[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (11))){
var inst_24567 = (state_24608[(8)]);
var inst_24573 = (inst_24567 == null);
var state_24608__$1 = state_24608;
if(cljs.core.truth_(inst_24573)){
var statearr_24634_24675 = state_24608__$1;
(statearr_24634_24675[(1)] = (14));

} else {
var statearr_24635_24676 = state_24608__$1;
(statearr_24635_24676[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (9))){
var inst_24560 = (state_24608[(10)]);
var inst_24560__$1 = (state_24608[(2)]);
var inst_24561 = cljs.core.get.call(null,inst_24560__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24562 = cljs.core.get.call(null,inst_24560__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24563 = cljs.core.get.call(null,inst_24560__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24608__$1 = (function (){var statearr_24636 = state_24608;
(statearr_24636[(17)] = inst_24562);

(statearr_24636[(10)] = inst_24560__$1);

(statearr_24636[(16)] = inst_24563);

return statearr_24636;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24608__$1,(10),inst_24561);
} else {
if((state_val_24609 === (5))){
var inst_24552 = (state_24608[(7)]);
var inst_24555 = cljs.core.seq_QMARK_.call(null,inst_24552);
var state_24608__$1 = state_24608;
if(inst_24555){
var statearr_24637_24677 = state_24608__$1;
(statearr_24637_24677[(1)] = (7));

} else {
var statearr_24638_24678 = state_24608__$1;
(statearr_24638_24678[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (14))){
var inst_24568 = (state_24608[(15)]);
var inst_24575 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24568);
var state_24608__$1 = state_24608;
var statearr_24639_24679 = state_24608__$1;
(statearr_24639_24679[(2)] = inst_24575);

(statearr_24639_24679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (26))){
var inst_24598 = (state_24608[(2)]);
var state_24608__$1 = state_24608;
var statearr_24640_24680 = state_24608__$1;
(statearr_24640_24680[(2)] = inst_24598);

(statearr_24640_24680[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (16))){
var inst_24578 = (state_24608[(2)]);
var inst_24579 = calc_state.call(null);
var inst_24552 = inst_24579;
var state_24608__$1 = (function (){var statearr_24641 = state_24608;
(statearr_24641[(7)] = inst_24552);

(statearr_24641[(18)] = inst_24578);

return statearr_24641;
})();
var statearr_24642_24681 = state_24608__$1;
(statearr_24642_24681[(2)] = null);

(statearr_24642_24681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (10))){
var inst_24567 = (state_24608[(8)]);
var inst_24568 = (state_24608[(15)]);
var inst_24566 = (state_24608[(2)]);
var inst_24567__$1 = cljs.core.nth.call(null,inst_24566,(0),null);
var inst_24568__$1 = cljs.core.nth.call(null,inst_24566,(1),null);
var inst_24569 = (inst_24567__$1 == null);
var inst_24570 = cljs.core._EQ_.call(null,inst_24568__$1,change);
var inst_24571 = (inst_24569) || (inst_24570);
var state_24608__$1 = (function (){var statearr_24643 = state_24608;
(statearr_24643[(8)] = inst_24567__$1);

(statearr_24643[(15)] = inst_24568__$1);

return statearr_24643;
})();
if(cljs.core.truth_(inst_24571)){
var statearr_24644_24682 = state_24608__$1;
(statearr_24644_24682[(1)] = (11));

} else {
var statearr_24645_24683 = state_24608__$1;
(statearr_24645_24683[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (18))){
var inst_24562 = (state_24608[(17)]);
var inst_24568 = (state_24608[(15)]);
var inst_24563 = (state_24608[(16)]);
var inst_24585 = cljs.core.empty_QMARK_.call(null,inst_24563);
var inst_24586 = inst_24562.call(null,inst_24568);
var inst_24587 = cljs.core.not.call(null,inst_24586);
var inst_24588 = (inst_24585) && (inst_24587);
var state_24608__$1 = state_24608;
var statearr_24646_24684 = state_24608__$1;
(statearr_24646_24684[(2)] = inst_24588);

(statearr_24646_24684[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24609 === (8))){
var inst_24552 = (state_24608[(7)]);
var state_24608__$1 = state_24608;
var statearr_24647_24685 = state_24608__$1;
(statearr_24647_24685[(2)] = inst_24552);

(statearr_24647_24685[(1)] = (9));


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
});})(c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24651[(0)] = state_machine__6988__auto__);

(statearr_24651[(1)] = (1));

return statearr_24651;
});
var state_machine__6988__auto____1 = (function (state_24608){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object)){
var ex__6991__auto__ = e24652;
var statearr_24653_24686 = state_24608;
(statearr_24653_24686[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24687 = state_24608;
state_24608 = G__24687;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24608){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_24654 = f__7044__auto__.call(null);
(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24655);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24689 = {};
return obj24689;
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
return (function (p1__24690_SHARP_){
if(cljs.core.truth_(p1__24690_SHARP_.call(null,topic))){
return p1__24690_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24690_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24813 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24814){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24814 = meta24814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24813.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24813.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24815){
var self__ = this;
var _24815__$1 = this;
return self__.meta24814;
});})(mults,ensure_mult))
;

cljs.core.async.t24813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24815,meta24814__$1){
var self__ = this;
var _24815__$1 = this;
return (new cljs.core.async.t24813(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24814__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24813.cljs$lang$type = true;

cljs.core.async.t24813.cljs$lang$ctorStr = "cljs.core.async/t24813";

cljs.core.async.t24813.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t24813");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24813 = ((function (mults,ensure_mult){
return (function __GT_t24813(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24814){
return (new cljs.core.async.t24813(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24814));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24813(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___24935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___24935,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___24935,mults,ensure_mult,p){
return (function (state_24887){
var state_val_24888 = (state_24887[(1)]);
if((state_val_24888 === (7))){
var inst_24883 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24889_24936 = state_24887__$1;
(statearr_24889_24936[(2)] = inst_24883);

(statearr_24889_24936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (20))){
var state_24887__$1 = state_24887;
var statearr_24890_24937 = state_24887__$1;
(statearr_24890_24937[(2)] = null);

(statearr_24890_24937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (1))){
var state_24887__$1 = state_24887;
var statearr_24891_24938 = state_24887__$1;
(statearr_24891_24938[(2)] = null);

(statearr_24891_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (24))){
var inst_24866 = (state_24887[(7)]);
var inst_24875 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24866);
var state_24887__$1 = state_24887;
var statearr_24892_24939 = state_24887__$1;
(statearr_24892_24939[(2)] = inst_24875);

(statearr_24892_24939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (4))){
var inst_24818 = (state_24887[(8)]);
var inst_24818__$1 = (state_24887[(2)]);
var inst_24819 = (inst_24818__$1 == null);
var state_24887__$1 = (function (){var statearr_24893 = state_24887;
(statearr_24893[(8)] = inst_24818__$1);

return statearr_24893;
})();
if(cljs.core.truth_(inst_24819)){
var statearr_24894_24940 = state_24887__$1;
(statearr_24894_24940[(1)] = (5));

} else {
var statearr_24895_24941 = state_24887__$1;
(statearr_24895_24941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (15))){
var inst_24860 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24896_24942 = state_24887__$1;
(statearr_24896_24942[(2)] = inst_24860);

(statearr_24896_24942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (21))){
var inst_24880 = (state_24887[(2)]);
var state_24887__$1 = (function (){var statearr_24897 = state_24887;
(statearr_24897[(9)] = inst_24880);

return statearr_24897;
})();
var statearr_24898_24943 = state_24887__$1;
(statearr_24898_24943[(2)] = null);

(statearr_24898_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (13))){
var inst_24842 = (state_24887[(10)]);
var inst_24844 = cljs.core.chunked_seq_QMARK_.call(null,inst_24842);
var state_24887__$1 = state_24887;
if(inst_24844){
var statearr_24899_24944 = state_24887__$1;
(statearr_24899_24944[(1)] = (16));

} else {
var statearr_24900_24945 = state_24887__$1;
(statearr_24900_24945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (22))){
var inst_24872 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
if(cljs.core.truth_(inst_24872)){
var statearr_24901_24946 = state_24887__$1;
(statearr_24901_24946[(1)] = (23));

} else {
var statearr_24902_24947 = state_24887__$1;
(statearr_24902_24947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (6))){
var inst_24866 = (state_24887[(7)]);
var inst_24818 = (state_24887[(8)]);
var inst_24868 = (state_24887[(11)]);
var inst_24866__$1 = topic_fn.call(null,inst_24818);
var inst_24867 = cljs.core.deref.call(null,mults);
var inst_24868__$1 = cljs.core.get.call(null,inst_24867,inst_24866__$1);
var state_24887__$1 = (function (){var statearr_24903 = state_24887;
(statearr_24903[(7)] = inst_24866__$1);

(statearr_24903[(11)] = inst_24868__$1);

return statearr_24903;
})();
if(cljs.core.truth_(inst_24868__$1)){
var statearr_24904_24948 = state_24887__$1;
(statearr_24904_24948[(1)] = (19));

} else {
var statearr_24905_24949 = state_24887__$1;
(statearr_24905_24949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (25))){
var inst_24877 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24906_24950 = state_24887__$1;
(statearr_24906_24950[(2)] = inst_24877);

(statearr_24906_24950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (17))){
var inst_24842 = (state_24887[(10)]);
var inst_24851 = cljs.core.first.call(null,inst_24842);
var inst_24852 = cljs.core.async.muxch_STAR_.call(null,inst_24851);
var inst_24853 = cljs.core.async.close_BANG_.call(null,inst_24852);
var inst_24854 = cljs.core.next.call(null,inst_24842);
var inst_24828 = inst_24854;
var inst_24829 = null;
var inst_24830 = (0);
var inst_24831 = (0);
var state_24887__$1 = (function (){var statearr_24907 = state_24887;
(statearr_24907[(12)] = inst_24853);

(statearr_24907[(13)] = inst_24829);

(statearr_24907[(14)] = inst_24831);

(statearr_24907[(15)] = inst_24828);

(statearr_24907[(16)] = inst_24830);

return statearr_24907;
})();
var statearr_24908_24951 = state_24887__$1;
(statearr_24908_24951[(2)] = null);

(statearr_24908_24951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (3))){
var inst_24885 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24887__$1,inst_24885);
} else {
if((state_val_24888 === (12))){
var inst_24862 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24909_24952 = state_24887__$1;
(statearr_24909_24952[(2)] = inst_24862);

(statearr_24909_24952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (2))){
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24887__$1,(4),ch);
} else {
if((state_val_24888 === (23))){
var state_24887__$1 = state_24887;
var statearr_24910_24953 = state_24887__$1;
(statearr_24910_24953[(2)] = null);

(statearr_24910_24953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (19))){
var inst_24818 = (state_24887[(8)]);
var inst_24868 = (state_24887[(11)]);
var inst_24870 = cljs.core.async.muxch_STAR_.call(null,inst_24868);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24887__$1,(22),inst_24870,inst_24818);
} else {
if((state_val_24888 === (11))){
var inst_24842 = (state_24887[(10)]);
var inst_24828 = (state_24887[(15)]);
var inst_24842__$1 = cljs.core.seq.call(null,inst_24828);
var state_24887__$1 = (function (){var statearr_24911 = state_24887;
(statearr_24911[(10)] = inst_24842__$1);

return statearr_24911;
})();
if(inst_24842__$1){
var statearr_24912_24954 = state_24887__$1;
(statearr_24912_24954[(1)] = (13));

} else {
var statearr_24913_24955 = state_24887__$1;
(statearr_24913_24955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (9))){
var inst_24864 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24914_24956 = state_24887__$1;
(statearr_24914_24956[(2)] = inst_24864);

(statearr_24914_24956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (5))){
var inst_24825 = cljs.core.deref.call(null,mults);
var inst_24826 = cljs.core.vals.call(null,inst_24825);
var inst_24827 = cljs.core.seq.call(null,inst_24826);
var inst_24828 = inst_24827;
var inst_24829 = null;
var inst_24830 = (0);
var inst_24831 = (0);
var state_24887__$1 = (function (){var statearr_24915 = state_24887;
(statearr_24915[(13)] = inst_24829);

(statearr_24915[(14)] = inst_24831);

(statearr_24915[(15)] = inst_24828);

(statearr_24915[(16)] = inst_24830);

return statearr_24915;
})();
var statearr_24916_24957 = state_24887__$1;
(statearr_24916_24957[(2)] = null);

(statearr_24916_24957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (14))){
var state_24887__$1 = state_24887;
var statearr_24920_24958 = state_24887__$1;
(statearr_24920_24958[(2)] = null);

(statearr_24920_24958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (16))){
var inst_24842 = (state_24887[(10)]);
var inst_24846 = cljs.core.chunk_first.call(null,inst_24842);
var inst_24847 = cljs.core.chunk_rest.call(null,inst_24842);
var inst_24848 = cljs.core.count.call(null,inst_24846);
var inst_24828 = inst_24847;
var inst_24829 = inst_24846;
var inst_24830 = inst_24848;
var inst_24831 = (0);
var state_24887__$1 = (function (){var statearr_24921 = state_24887;
(statearr_24921[(13)] = inst_24829);

(statearr_24921[(14)] = inst_24831);

(statearr_24921[(15)] = inst_24828);

(statearr_24921[(16)] = inst_24830);

return statearr_24921;
})();
var statearr_24922_24959 = state_24887__$1;
(statearr_24922_24959[(2)] = null);

(statearr_24922_24959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (10))){
var inst_24829 = (state_24887[(13)]);
var inst_24831 = (state_24887[(14)]);
var inst_24828 = (state_24887[(15)]);
var inst_24830 = (state_24887[(16)]);
var inst_24836 = cljs.core._nth.call(null,inst_24829,inst_24831);
var inst_24837 = cljs.core.async.muxch_STAR_.call(null,inst_24836);
var inst_24838 = cljs.core.async.close_BANG_.call(null,inst_24837);
var inst_24839 = (inst_24831 + (1));
var tmp24917 = inst_24829;
var tmp24918 = inst_24828;
var tmp24919 = inst_24830;
var inst_24828__$1 = tmp24918;
var inst_24829__$1 = tmp24917;
var inst_24830__$1 = tmp24919;
var inst_24831__$1 = inst_24839;
var state_24887__$1 = (function (){var statearr_24923 = state_24887;
(statearr_24923[(13)] = inst_24829__$1);

(statearr_24923[(14)] = inst_24831__$1);

(statearr_24923[(15)] = inst_24828__$1);

(statearr_24923[(17)] = inst_24838);

(statearr_24923[(16)] = inst_24830__$1);

return statearr_24923;
})();
var statearr_24924_24960 = state_24887__$1;
(statearr_24924_24960[(2)] = null);

(statearr_24924_24960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (18))){
var inst_24857 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24925_24961 = state_24887__$1;
(statearr_24925_24961[(2)] = inst_24857);

(statearr_24925_24961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (8))){
var inst_24831 = (state_24887[(14)]);
var inst_24830 = (state_24887[(16)]);
var inst_24833 = (inst_24831 < inst_24830);
var inst_24834 = inst_24833;
var state_24887__$1 = state_24887;
if(cljs.core.truth_(inst_24834)){
var statearr_24926_24962 = state_24887__$1;
(statearr_24926_24962[(1)] = (10));

} else {
var statearr_24927_24963 = state_24887__$1;
(statearr_24927_24963[(1)] = (11));

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
});})(c__7043__auto___24935,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___24935,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_24931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24931[(0)] = state_machine__6988__auto__);

(statearr_24931[(1)] = (1));

return statearr_24931;
});
var state_machine__6988__auto____1 = (function (state_24887){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_24887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e24932){if((e24932 instanceof Object)){
var ex__6991__auto__ = e24932;
var statearr_24933_24964 = state_24887;
(statearr_24933_24964[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24965 = state_24887;
state_24887 = G__24965;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_24887){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_24887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___24935,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_24934 = f__7044__auto__.call(null);
(statearr_24934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___24935);

return statearr_24934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___24935,mults,ensure_mult,p))
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
var c__7043__auto___25102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (7))){
var state_25072__$1 = state_25072;
var statearr_25074_25103 = state_25072__$1;
(statearr_25074_25103[(2)] = null);

(statearr_25074_25103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (1))){
var state_25072__$1 = state_25072;
var statearr_25075_25104 = state_25072__$1;
(statearr_25075_25104[(2)] = null);

(statearr_25075_25104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (4))){
var inst_25036 = (state_25072[(7)]);
var inst_25038 = (inst_25036 < cnt);
var state_25072__$1 = state_25072;
if(cljs.core.truth_(inst_25038)){
var statearr_25076_25105 = state_25072__$1;
(statearr_25076_25105[(1)] = (6));

} else {
var statearr_25077_25106 = state_25072__$1;
(statearr_25077_25106[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (15))){
var inst_25068 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25078_25107 = state_25072__$1;
(statearr_25078_25107[(2)] = inst_25068);

(statearr_25078_25107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (13))){
var inst_25061 = cljs.core.async.close_BANG_.call(null,out);
var state_25072__$1 = state_25072;
var statearr_25079_25108 = state_25072__$1;
(statearr_25079_25108[(2)] = inst_25061);

(statearr_25079_25108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (6))){
var state_25072__$1 = state_25072;
var statearr_25080_25109 = state_25072__$1;
(statearr_25080_25109[(2)] = null);

(statearr_25080_25109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (3))){
var inst_25070 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
if((state_val_25073 === (12))){
var inst_25058 = (state_25072[(8)]);
var inst_25058__$1 = (state_25072[(2)]);
var inst_25059 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25058__$1);
var state_25072__$1 = (function (){var statearr_25081 = state_25072;
(statearr_25081[(8)] = inst_25058__$1);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25059)){
var statearr_25082_25110 = state_25072__$1;
(statearr_25082_25110[(1)] = (13));

} else {
var statearr_25083_25111 = state_25072__$1;
(statearr_25083_25111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (2))){
var inst_25035 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25036 = (0);
var state_25072__$1 = (function (){var statearr_25084 = state_25072;
(statearr_25084[(9)] = inst_25035);

(statearr_25084[(7)] = inst_25036);

return statearr_25084;
})();
var statearr_25085_25112 = state_25072__$1;
(statearr_25085_25112[(2)] = null);

(statearr_25085_25112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (11))){
var inst_25036 = (state_25072[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25072,(10),Object,null,(9));
var inst_25045 = chs__$1.call(null,inst_25036);
var inst_25046 = done.call(null,inst_25036);
var inst_25047 = cljs.core.async.take_BANG_.call(null,inst_25045,inst_25046);
var state_25072__$1 = state_25072;
var statearr_25086_25113 = state_25072__$1;
(statearr_25086_25113[(2)] = inst_25047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (9))){
var inst_25036 = (state_25072[(7)]);
var inst_25049 = (state_25072[(2)]);
var inst_25050 = (inst_25036 + (1));
var inst_25036__$1 = inst_25050;
var state_25072__$1 = (function (){var statearr_25087 = state_25072;
(statearr_25087[(10)] = inst_25049);

(statearr_25087[(7)] = inst_25036__$1);

return statearr_25087;
})();
var statearr_25088_25114 = state_25072__$1;
(statearr_25088_25114[(2)] = null);

(statearr_25088_25114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (5))){
var inst_25056 = (state_25072[(2)]);
var state_25072__$1 = (function (){var statearr_25089 = state_25072;
(statearr_25089[(11)] = inst_25056);

return statearr_25089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(12),dchan);
} else {
if((state_val_25073 === (14))){
var inst_25058 = (state_25072[(8)]);
var inst_25063 = cljs.core.apply.call(null,f,inst_25058);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25072__$1,(16),out,inst_25063);
} else {
if((state_val_25073 === (16))){
var inst_25065 = (state_25072[(2)]);
var state_25072__$1 = (function (){var statearr_25090 = state_25072;
(statearr_25090[(12)] = inst_25065);

return statearr_25090;
})();
var statearr_25091_25115 = state_25072__$1;
(statearr_25091_25115[(2)] = null);

(statearr_25091_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (10))){
var inst_25040 = (state_25072[(2)]);
var inst_25041 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25072__$1 = (function (){var statearr_25092 = state_25072;
(statearr_25092[(13)] = inst_25040);

return statearr_25092;
})();
var statearr_25093_25116 = state_25072__$1;
(statearr_25093_25116[(2)] = inst_25041);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (8))){
var inst_25054 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25094_25117 = state_25072__$1;
(statearr_25094_25117[(2)] = inst_25054);

(statearr_25094_25117[(1)] = (5));


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
});})(c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25098[(0)] = state_machine__6988__auto__);

(statearr_25098[(1)] = (1));

return statearr_25098;
});
var state_machine__6988__auto____1 = (function (state_25072){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25099){if((e25099 instanceof Object)){
var ex__6991__auto__ = e25099;
var statearr_25100_25118 = state_25072;
(statearr_25100_25118[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25119 = state_25072;
state_25072 = G__25119;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_25101 = f__7044__auto__.call(null);
(statearr_25101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25102);

return statearr_25101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25102,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___25227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25227,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25227,out){
return (function (state_25203){
var state_val_25204 = (state_25203[(1)]);
if((state_val_25204 === (7))){
var inst_25182 = (state_25203[(7)]);
var inst_25183 = (state_25203[(8)]);
var inst_25182__$1 = (state_25203[(2)]);
var inst_25183__$1 = cljs.core.nth.call(null,inst_25182__$1,(0),null);
var inst_25184 = cljs.core.nth.call(null,inst_25182__$1,(1),null);
var inst_25185 = (inst_25183__$1 == null);
var state_25203__$1 = (function (){var statearr_25205 = state_25203;
(statearr_25205[(9)] = inst_25184);

(statearr_25205[(7)] = inst_25182__$1);

(statearr_25205[(8)] = inst_25183__$1);

return statearr_25205;
})();
if(cljs.core.truth_(inst_25185)){
var statearr_25206_25228 = state_25203__$1;
(statearr_25206_25228[(1)] = (8));

} else {
var statearr_25207_25229 = state_25203__$1;
(statearr_25207_25229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (1))){
var inst_25174 = cljs.core.vec.call(null,chs);
var inst_25175 = inst_25174;
var state_25203__$1 = (function (){var statearr_25208 = state_25203;
(statearr_25208[(10)] = inst_25175);

return statearr_25208;
})();
var statearr_25209_25230 = state_25203__$1;
(statearr_25209_25230[(2)] = null);

(statearr_25209_25230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (4))){
var inst_25175 = (state_25203[(10)]);
var state_25203__$1 = state_25203;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25203__$1,(7),inst_25175);
} else {
if((state_val_25204 === (6))){
var inst_25199 = (state_25203[(2)]);
var state_25203__$1 = state_25203;
var statearr_25210_25231 = state_25203__$1;
(statearr_25210_25231[(2)] = inst_25199);

(statearr_25210_25231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (3))){
var inst_25201 = (state_25203[(2)]);
var state_25203__$1 = state_25203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25203__$1,inst_25201);
} else {
if((state_val_25204 === (2))){
var inst_25175 = (state_25203[(10)]);
var inst_25177 = cljs.core.count.call(null,inst_25175);
var inst_25178 = (inst_25177 > (0));
var state_25203__$1 = state_25203;
if(cljs.core.truth_(inst_25178)){
var statearr_25212_25232 = state_25203__$1;
(statearr_25212_25232[(1)] = (4));

} else {
var statearr_25213_25233 = state_25203__$1;
(statearr_25213_25233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (11))){
var inst_25175 = (state_25203[(10)]);
var inst_25192 = (state_25203[(2)]);
var tmp25211 = inst_25175;
var inst_25175__$1 = tmp25211;
var state_25203__$1 = (function (){var statearr_25214 = state_25203;
(statearr_25214[(10)] = inst_25175__$1);

(statearr_25214[(11)] = inst_25192);

return statearr_25214;
})();
var statearr_25215_25234 = state_25203__$1;
(statearr_25215_25234[(2)] = null);

(statearr_25215_25234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (9))){
var inst_25183 = (state_25203[(8)]);
var state_25203__$1 = state_25203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25203__$1,(11),out,inst_25183);
} else {
if((state_val_25204 === (5))){
var inst_25197 = cljs.core.async.close_BANG_.call(null,out);
var state_25203__$1 = state_25203;
var statearr_25216_25235 = state_25203__$1;
(statearr_25216_25235[(2)] = inst_25197);

(statearr_25216_25235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (10))){
var inst_25195 = (state_25203[(2)]);
var state_25203__$1 = state_25203;
var statearr_25217_25236 = state_25203__$1;
(statearr_25217_25236[(2)] = inst_25195);

(statearr_25217_25236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25204 === (8))){
var inst_25184 = (state_25203[(9)]);
var inst_25175 = (state_25203[(10)]);
var inst_25182 = (state_25203[(7)]);
var inst_25183 = (state_25203[(8)]);
var inst_25187 = (function (){var c = inst_25184;
var v = inst_25183;
var vec__25180 = inst_25182;
var cs = inst_25175;
return ((function (c,v,vec__25180,cs,inst_25184,inst_25175,inst_25182,inst_25183,state_val_25204,c__7043__auto___25227,out){
return (function (p1__25120_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25120_SHARP_);
});
;})(c,v,vec__25180,cs,inst_25184,inst_25175,inst_25182,inst_25183,state_val_25204,c__7043__auto___25227,out))
})();
var inst_25188 = cljs.core.filterv.call(null,inst_25187,inst_25175);
var inst_25175__$1 = inst_25188;
var state_25203__$1 = (function (){var statearr_25218 = state_25203;
(statearr_25218[(10)] = inst_25175__$1);

return statearr_25218;
})();
var statearr_25219_25237 = state_25203__$1;
(statearr_25219_25237[(2)] = null);

(statearr_25219_25237[(1)] = (2));


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
});})(c__7043__auto___25227,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25227,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25223[(0)] = state_machine__6988__auto__);

(statearr_25223[(1)] = (1));

return statearr_25223;
});
var state_machine__6988__auto____1 = (function (state_25203){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25224){if((e25224 instanceof Object)){
var ex__6991__auto__ = e25224;
var statearr_25225_25238 = state_25203;
(statearr_25225_25238[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25239 = state_25203;
state_25203 = G__25239;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25203){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25227,out))
})();
var state__7045__auto__ = (function (){var statearr_25226 = f__7044__auto__.call(null);
(statearr_25226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25227);

return statearr_25226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25227,out))
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
var c__7043__auto___25332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25332,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25332,out){
return (function (state_25309){
var state_val_25310 = (state_25309[(1)]);
if((state_val_25310 === (7))){
var inst_25291 = (state_25309[(7)]);
var inst_25291__$1 = (state_25309[(2)]);
var inst_25292 = (inst_25291__$1 == null);
var inst_25293 = cljs.core.not.call(null,inst_25292);
var state_25309__$1 = (function (){var statearr_25311 = state_25309;
(statearr_25311[(7)] = inst_25291__$1);

return statearr_25311;
})();
if(inst_25293){
var statearr_25312_25333 = state_25309__$1;
(statearr_25312_25333[(1)] = (8));

} else {
var statearr_25313_25334 = state_25309__$1;
(statearr_25313_25334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (1))){
var inst_25286 = (0);
var state_25309__$1 = (function (){var statearr_25314 = state_25309;
(statearr_25314[(8)] = inst_25286);

return statearr_25314;
})();
var statearr_25315_25335 = state_25309__$1;
(statearr_25315_25335[(2)] = null);

(statearr_25315_25335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (4))){
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,(7),ch);
} else {
if((state_val_25310 === (6))){
var inst_25304 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25316_25336 = state_25309__$1;
(statearr_25316_25336[(2)] = inst_25304);

(statearr_25316_25336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (3))){
var inst_25306 = (state_25309[(2)]);
var inst_25307 = cljs.core.async.close_BANG_.call(null,out);
var state_25309__$1 = (function (){var statearr_25317 = state_25309;
(statearr_25317[(9)] = inst_25306);

return statearr_25317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25309__$1,inst_25307);
} else {
if((state_val_25310 === (2))){
var inst_25286 = (state_25309[(8)]);
var inst_25288 = (inst_25286 < n);
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25288)){
var statearr_25318_25337 = state_25309__$1;
(statearr_25318_25337[(1)] = (4));

} else {
var statearr_25319_25338 = state_25309__$1;
(statearr_25319_25338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (11))){
var inst_25286 = (state_25309[(8)]);
var inst_25296 = (state_25309[(2)]);
var inst_25297 = (inst_25286 + (1));
var inst_25286__$1 = inst_25297;
var state_25309__$1 = (function (){var statearr_25320 = state_25309;
(statearr_25320[(8)] = inst_25286__$1);

(statearr_25320[(10)] = inst_25296);

return statearr_25320;
})();
var statearr_25321_25339 = state_25309__$1;
(statearr_25321_25339[(2)] = null);

(statearr_25321_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (9))){
var state_25309__$1 = state_25309;
var statearr_25322_25340 = state_25309__$1;
(statearr_25322_25340[(2)] = null);

(statearr_25322_25340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (5))){
var state_25309__$1 = state_25309;
var statearr_25323_25341 = state_25309__$1;
(statearr_25323_25341[(2)] = null);

(statearr_25323_25341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (10))){
var inst_25301 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25324_25342 = state_25309__$1;
(statearr_25324_25342[(2)] = inst_25301);

(statearr_25324_25342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (8))){
var inst_25291 = (state_25309[(7)]);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25309__$1,(11),out,inst_25291);
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
});})(c__7043__auto___25332,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25332,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25328[(0)] = state_machine__6988__auto__);

(statearr_25328[(1)] = (1));

return statearr_25328;
});
var state_machine__6988__auto____1 = (function (state_25309){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25329){if((e25329 instanceof Object)){
var ex__6991__auto__ = e25329;
var statearr_25330_25343 = state_25309;
(statearr_25330_25343[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25344 = state_25309;
state_25309 = G__25344;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25332,out))
})();
var state__7045__auto__ = (function (){var statearr_25331 = f__7044__auto__.call(null);
(statearr_25331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25332);

return statearr_25331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25332,out))
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
if(typeof cljs.core.async.t25352 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25352 = (function (ch,f,map_LT_,meta25353){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25353 = meta25353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25355 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25355 = (function (fn1,_,meta25353,map_LT_,f,ch,meta25356){
this.fn1 = fn1;
this._ = _;
this.meta25353 = meta25353;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25356 = meta25356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25345_SHARP_){
return f1.call(null,(((p1__25345_SHARP_ == null))?null:self__.f.call(null,p1__25345_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25357){
var self__ = this;
var _25357__$1 = this;
return self__.meta25356;
});})(___$1))
;

cljs.core.async.t25355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25357,meta25356__$1){
var self__ = this;
var _25357__$1 = this;
return (new cljs.core.async.t25355(self__.fn1,self__._,self__.meta25353,self__.map_LT_,self__.f,self__.ch,meta25356__$1));
});})(___$1))
;

cljs.core.async.t25355.cljs$lang$type = true;

cljs.core.async.t25355.cljs$lang$ctorStr = "cljs.core.async/t25355";

cljs.core.async.t25355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25355");
});})(___$1))
;

cljs.core.async.__GT_t25355 = ((function (___$1){
return (function __GT_t25355(fn1__$1,___$2,meta25353__$1,map_LT___$1,f__$1,ch__$1,meta25356){
return (new cljs.core.async.t25355(fn1__$1,___$2,meta25353__$1,map_LT___$1,f__$1,ch__$1,meta25356));
});})(___$1))
;

}

return (new cljs.core.async.t25355(fn1,___$1,self__.meta25353,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25354){
var self__ = this;
var _25354__$1 = this;
return self__.meta25353;
});

cljs.core.async.t25352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25354,meta25353__$1){
var self__ = this;
var _25354__$1 = this;
return (new cljs.core.async.t25352(self__.ch,self__.f,self__.map_LT_,meta25353__$1));
});

cljs.core.async.t25352.cljs$lang$type = true;

cljs.core.async.t25352.cljs$lang$ctorStr = "cljs.core.async/t25352";

cljs.core.async.t25352.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25352");
});

cljs.core.async.__GT_t25352 = (function __GT_t25352(ch__$1,f__$1,map_LT___$1,meta25353){
return (new cljs.core.async.t25352(ch__$1,f__$1,map_LT___$1,meta25353));
});

}

return (new cljs.core.async.t25352(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25361 = (function (ch,f,map_GT_,meta25362){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25362 = meta25362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25363){
var self__ = this;
var _25363__$1 = this;
return self__.meta25362;
});

cljs.core.async.t25361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25363,meta25362__$1){
var self__ = this;
var _25363__$1 = this;
return (new cljs.core.async.t25361(self__.ch,self__.f,self__.map_GT_,meta25362__$1));
});

cljs.core.async.t25361.cljs$lang$type = true;

cljs.core.async.t25361.cljs$lang$ctorStr = "cljs.core.async/t25361";

cljs.core.async.t25361.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25361");
});

cljs.core.async.__GT_t25361 = (function __GT_t25361(ch__$1,f__$1,map_GT___$1,meta25362){
return (new cljs.core.async.t25361(ch__$1,f__$1,map_GT___$1,meta25362));
});

}

return (new cljs.core.async.t25361(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25367 = (function (ch,p,filter_GT_,meta25368){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25368 = meta25368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25369){
var self__ = this;
var _25369__$1 = this;
return self__.meta25368;
});

cljs.core.async.t25367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25369,meta25368__$1){
var self__ = this;
var _25369__$1 = this;
return (new cljs.core.async.t25367(self__.ch,self__.p,self__.filter_GT_,meta25368__$1));
});

cljs.core.async.t25367.cljs$lang$type = true;

cljs.core.async.t25367.cljs$lang$ctorStr = "cljs.core.async/t25367";

cljs.core.async.t25367.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t25367");
});

cljs.core.async.__GT_t25367 = (function __GT_t25367(ch__$1,p__$1,filter_GT___$1,meta25368){
return (new cljs.core.async.t25367(ch__$1,p__$1,filter_GT___$1,meta25368));
});

}

return (new cljs.core.async.t25367(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___25452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25452,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25452,out){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25433_25453 = state_25431__$1;
(statearr_25433_25453[(2)] = inst_25427);

(statearr_25433_25453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25434_25454 = state_25431__$1;
(statearr_25434_25454[(2)] = null);

(statearr_25434_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (4))){
var inst_25413 = (state_25431[(7)]);
var inst_25413__$1 = (state_25431[(2)]);
var inst_25414 = (inst_25413__$1 == null);
var state_25431__$1 = (function (){var statearr_25435 = state_25431;
(statearr_25435[(7)] = inst_25413__$1);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25414)){
var statearr_25436_25455 = state_25431__$1;
(statearr_25436_25455[(1)] = (5));

} else {
var statearr_25437_25456 = state_25431__$1;
(statearr_25437_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var inst_25413 = (state_25431[(7)]);
var inst_25418 = p.call(null,inst_25413);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25418)){
var statearr_25438_25457 = state_25431__$1;
(statearr_25438_25457[(1)] = (8));

} else {
var statearr_25439_25458 = state_25431__$1;
(statearr_25439_25458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(4),ch);
} else {
if((state_val_25432 === (11))){
var inst_25421 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25440_25459 = state_25431__$1;
(statearr_25440_25459[(2)] = inst_25421);

(statearr_25440_25459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (9))){
var state_25431__$1 = state_25431;
var statearr_25441_25460 = state_25431__$1;
(statearr_25441_25460[(2)] = null);

(statearr_25441_25460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var inst_25416 = cljs.core.async.close_BANG_.call(null,out);
var state_25431__$1 = state_25431;
var statearr_25442_25461 = state_25431__$1;
(statearr_25442_25461[(2)] = inst_25416);

(statearr_25442_25461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (10))){
var inst_25424 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25443 = state_25431;
(statearr_25443[(8)] = inst_25424);

return statearr_25443;
})();
var statearr_25444_25462 = state_25431__$1;
(statearr_25444_25462[(2)] = null);

(statearr_25444_25462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (8))){
var inst_25413 = (state_25431[(7)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25431__$1,(11),out,inst_25413);
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
});})(c__7043__auto___25452,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25452,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25448 = [null,null,null,null,null,null,null,null,null];
(statearr_25448[(0)] = state_machine__6988__auto__);

(statearr_25448[(1)] = (1));

return statearr_25448;
});
var state_machine__6988__auto____1 = (function (state_25431){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25449){if((e25449 instanceof Object)){
var ex__6991__auto__ = e25449;
var statearr_25450_25463 = state_25431;
(statearr_25450_25463[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25464 = state_25431;
state_25431 = G__25464;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25452,out))
})();
var state__7045__auto__ = (function (){var statearr_25451 = f__7044__auto__.call(null);
(statearr_25451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25452);

return statearr_25451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25452,out))
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
return (function (state_25630){
var state_val_25631 = (state_25630[(1)]);
if((state_val_25631 === (7))){
var inst_25626 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25632_25673 = state_25630__$1;
(statearr_25632_25673[(2)] = inst_25626);

(statearr_25632_25673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (20))){
var inst_25596 = (state_25630[(7)]);
var inst_25607 = (state_25630[(2)]);
var inst_25608 = cljs.core.next.call(null,inst_25596);
var inst_25582 = inst_25608;
var inst_25583 = null;
var inst_25584 = (0);
var inst_25585 = (0);
var state_25630__$1 = (function (){var statearr_25633 = state_25630;
(statearr_25633[(8)] = inst_25584);

(statearr_25633[(9)] = inst_25607);

(statearr_25633[(10)] = inst_25585);

(statearr_25633[(11)] = inst_25583);

(statearr_25633[(12)] = inst_25582);

return statearr_25633;
})();
var statearr_25634_25674 = state_25630__$1;
(statearr_25634_25674[(2)] = null);

(statearr_25634_25674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (1))){
var state_25630__$1 = state_25630;
var statearr_25635_25675 = state_25630__$1;
(statearr_25635_25675[(2)] = null);

(statearr_25635_25675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (4))){
var inst_25571 = (state_25630[(13)]);
var inst_25571__$1 = (state_25630[(2)]);
var inst_25572 = (inst_25571__$1 == null);
var state_25630__$1 = (function (){var statearr_25636 = state_25630;
(statearr_25636[(13)] = inst_25571__$1);

return statearr_25636;
})();
if(cljs.core.truth_(inst_25572)){
var statearr_25637_25676 = state_25630__$1;
(statearr_25637_25676[(1)] = (5));

} else {
var statearr_25638_25677 = state_25630__$1;
(statearr_25638_25677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (15))){
var state_25630__$1 = state_25630;
var statearr_25642_25678 = state_25630__$1;
(statearr_25642_25678[(2)] = null);

(statearr_25642_25678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (21))){
var state_25630__$1 = state_25630;
var statearr_25643_25679 = state_25630__$1;
(statearr_25643_25679[(2)] = null);

(statearr_25643_25679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (13))){
var inst_25584 = (state_25630[(8)]);
var inst_25585 = (state_25630[(10)]);
var inst_25583 = (state_25630[(11)]);
var inst_25582 = (state_25630[(12)]);
var inst_25592 = (state_25630[(2)]);
var inst_25593 = (inst_25585 + (1));
var tmp25639 = inst_25584;
var tmp25640 = inst_25583;
var tmp25641 = inst_25582;
var inst_25582__$1 = tmp25641;
var inst_25583__$1 = tmp25640;
var inst_25584__$1 = tmp25639;
var inst_25585__$1 = inst_25593;
var state_25630__$1 = (function (){var statearr_25644 = state_25630;
(statearr_25644[(8)] = inst_25584__$1);

(statearr_25644[(14)] = inst_25592);

(statearr_25644[(10)] = inst_25585__$1);

(statearr_25644[(11)] = inst_25583__$1);

(statearr_25644[(12)] = inst_25582__$1);

return statearr_25644;
})();
var statearr_25645_25680 = state_25630__$1;
(statearr_25645_25680[(2)] = null);

(statearr_25645_25680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (22))){
var state_25630__$1 = state_25630;
var statearr_25646_25681 = state_25630__$1;
(statearr_25646_25681[(2)] = null);

(statearr_25646_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (6))){
var inst_25571 = (state_25630[(13)]);
var inst_25580 = f.call(null,inst_25571);
var inst_25581 = cljs.core.seq.call(null,inst_25580);
var inst_25582 = inst_25581;
var inst_25583 = null;
var inst_25584 = (0);
var inst_25585 = (0);
var state_25630__$1 = (function (){var statearr_25647 = state_25630;
(statearr_25647[(8)] = inst_25584);

(statearr_25647[(10)] = inst_25585);

(statearr_25647[(11)] = inst_25583);

(statearr_25647[(12)] = inst_25582);

return statearr_25647;
})();
var statearr_25648_25682 = state_25630__$1;
(statearr_25648_25682[(2)] = null);

(statearr_25648_25682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (17))){
var inst_25596 = (state_25630[(7)]);
var inst_25600 = cljs.core.chunk_first.call(null,inst_25596);
var inst_25601 = cljs.core.chunk_rest.call(null,inst_25596);
var inst_25602 = cljs.core.count.call(null,inst_25600);
var inst_25582 = inst_25601;
var inst_25583 = inst_25600;
var inst_25584 = inst_25602;
var inst_25585 = (0);
var state_25630__$1 = (function (){var statearr_25649 = state_25630;
(statearr_25649[(8)] = inst_25584);

(statearr_25649[(10)] = inst_25585);

(statearr_25649[(11)] = inst_25583);

(statearr_25649[(12)] = inst_25582);

return statearr_25649;
})();
var statearr_25650_25683 = state_25630__$1;
(statearr_25650_25683[(2)] = null);

(statearr_25650_25683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (3))){
var inst_25628 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25630__$1,inst_25628);
} else {
if((state_val_25631 === (12))){
var inst_25616 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25651_25684 = state_25630__$1;
(statearr_25651_25684[(2)] = inst_25616);

(statearr_25651_25684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (2))){
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25630__$1,(4),in$);
} else {
if((state_val_25631 === (23))){
var inst_25624 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25652_25685 = state_25630__$1;
(statearr_25652_25685[(2)] = inst_25624);

(statearr_25652_25685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (19))){
var inst_25611 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25653_25686 = state_25630__$1;
(statearr_25653_25686[(2)] = inst_25611);

(statearr_25653_25686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (11))){
var inst_25596 = (state_25630[(7)]);
var inst_25582 = (state_25630[(12)]);
var inst_25596__$1 = cljs.core.seq.call(null,inst_25582);
var state_25630__$1 = (function (){var statearr_25654 = state_25630;
(statearr_25654[(7)] = inst_25596__$1);

return statearr_25654;
})();
if(inst_25596__$1){
var statearr_25655_25687 = state_25630__$1;
(statearr_25655_25687[(1)] = (14));

} else {
var statearr_25656_25688 = state_25630__$1;
(statearr_25656_25688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (9))){
var inst_25618 = (state_25630[(2)]);
var inst_25619 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25630__$1 = (function (){var statearr_25657 = state_25630;
(statearr_25657[(15)] = inst_25618);

return statearr_25657;
})();
if(cljs.core.truth_(inst_25619)){
var statearr_25658_25689 = state_25630__$1;
(statearr_25658_25689[(1)] = (21));

} else {
var statearr_25659_25690 = state_25630__$1;
(statearr_25659_25690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (5))){
var inst_25574 = cljs.core.async.close_BANG_.call(null,out);
var state_25630__$1 = state_25630;
var statearr_25660_25691 = state_25630__$1;
(statearr_25660_25691[(2)] = inst_25574);

(statearr_25660_25691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (14))){
var inst_25596 = (state_25630[(7)]);
var inst_25598 = cljs.core.chunked_seq_QMARK_.call(null,inst_25596);
var state_25630__$1 = state_25630;
if(inst_25598){
var statearr_25661_25692 = state_25630__$1;
(statearr_25661_25692[(1)] = (17));

} else {
var statearr_25662_25693 = state_25630__$1;
(statearr_25662_25693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (16))){
var inst_25614 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25663_25694 = state_25630__$1;
(statearr_25663_25694[(2)] = inst_25614);

(statearr_25663_25694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (10))){
var inst_25585 = (state_25630[(10)]);
var inst_25583 = (state_25630[(11)]);
var inst_25590 = cljs.core._nth.call(null,inst_25583,inst_25585);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25630__$1,(13),out,inst_25590);
} else {
if((state_val_25631 === (18))){
var inst_25596 = (state_25630[(7)]);
var inst_25605 = cljs.core.first.call(null,inst_25596);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25630__$1,(20),out,inst_25605);
} else {
if((state_val_25631 === (8))){
var inst_25584 = (state_25630[(8)]);
var inst_25585 = (state_25630[(10)]);
var inst_25587 = (inst_25585 < inst_25584);
var inst_25588 = inst_25587;
var state_25630__$1 = state_25630;
if(cljs.core.truth_(inst_25588)){
var statearr_25664_25695 = state_25630__$1;
(statearr_25664_25695[(1)] = (10));

} else {
var statearr_25665_25696 = state_25630__$1;
(statearr_25665_25696[(1)] = (11));

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
var statearr_25669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25669[(0)] = state_machine__6988__auto__);

(statearr_25669[(1)] = (1));

return statearr_25669;
});
var state_machine__6988__auto____1 = (function (state_25630){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25670){if((e25670 instanceof Object)){
var ex__6991__auto__ = e25670;
var statearr_25671_25697 = state_25630;
(statearr_25671_25697[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25698 = state_25630;
state_25630 = G__25698;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25630){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_25672 = f__7044__auto__.call(null);
(statearr_25672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_25672;
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
var c__7043__auto___25795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25795,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25795,out){
return (function (state_25770){
var state_val_25771 = (state_25770[(1)]);
if((state_val_25771 === (7))){
var inst_25765 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25772_25796 = state_25770__$1;
(statearr_25772_25796[(2)] = inst_25765);

(statearr_25772_25796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (1))){
var inst_25747 = null;
var state_25770__$1 = (function (){var statearr_25773 = state_25770;
(statearr_25773[(7)] = inst_25747);

return statearr_25773;
})();
var statearr_25774_25797 = state_25770__$1;
(statearr_25774_25797[(2)] = null);

(statearr_25774_25797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (4))){
var inst_25750 = (state_25770[(8)]);
var inst_25750__$1 = (state_25770[(2)]);
var inst_25751 = (inst_25750__$1 == null);
var inst_25752 = cljs.core.not.call(null,inst_25751);
var state_25770__$1 = (function (){var statearr_25775 = state_25770;
(statearr_25775[(8)] = inst_25750__$1);

return statearr_25775;
})();
if(inst_25752){
var statearr_25776_25798 = state_25770__$1;
(statearr_25776_25798[(1)] = (5));

} else {
var statearr_25777_25799 = state_25770__$1;
(statearr_25777_25799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (6))){
var state_25770__$1 = state_25770;
var statearr_25778_25800 = state_25770__$1;
(statearr_25778_25800[(2)] = null);

(statearr_25778_25800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (3))){
var inst_25767 = (state_25770[(2)]);
var inst_25768 = cljs.core.async.close_BANG_.call(null,out);
var state_25770__$1 = (function (){var statearr_25779 = state_25770;
(statearr_25779[(9)] = inst_25767);

return statearr_25779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25770__$1,inst_25768);
} else {
if((state_val_25771 === (2))){
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25770__$1,(4),ch);
} else {
if((state_val_25771 === (11))){
var inst_25750 = (state_25770[(8)]);
var inst_25759 = (state_25770[(2)]);
var inst_25747 = inst_25750;
var state_25770__$1 = (function (){var statearr_25780 = state_25770;
(statearr_25780[(7)] = inst_25747);

(statearr_25780[(10)] = inst_25759);

return statearr_25780;
})();
var statearr_25781_25801 = state_25770__$1;
(statearr_25781_25801[(2)] = null);

(statearr_25781_25801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (9))){
var inst_25750 = (state_25770[(8)]);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25770__$1,(11),out,inst_25750);
} else {
if((state_val_25771 === (5))){
var inst_25747 = (state_25770[(7)]);
var inst_25750 = (state_25770[(8)]);
var inst_25754 = cljs.core._EQ_.call(null,inst_25750,inst_25747);
var state_25770__$1 = state_25770;
if(inst_25754){
var statearr_25783_25802 = state_25770__$1;
(statearr_25783_25802[(1)] = (8));

} else {
var statearr_25784_25803 = state_25770__$1;
(statearr_25784_25803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (10))){
var inst_25762 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25785_25804 = state_25770__$1;
(statearr_25785_25804[(2)] = inst_25762);

(statearr_25785_25804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (8))){
var inst_25747 = (state_25770[(7)]);
var tmp25782 = inst_25747;
var inst_25747__$1 = tmp25782;
var state_25770__$1 = (function (){var statearr_25786 = state_25770;
(statearr_25786[(7)] = inst_25747__$1);

return statearr_25786;
})();
var statearr_25787_25805 = state_25770__$1;
(statearr_25787_25805[(2)] = null);

(statearr_25787_25805[(1)] = (2));


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
});})(c__7043__auto___25795,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25795,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25791[(0)] = state_machine__6988__auto__);

(statearr_25791[(1)] = (1));

return statearr_25791;
});
var state_machine__6988__auto____1 = (function (state_25770){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25792){if((e25792 instanceof Object)){
var ex__6991__auto__ = e25792;
var statearr_25793_25806 = state_25770;
(statearr_25793_25806[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25807 = state_25770;
state_25770 = G__25807;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25770){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25795,out))
})();
var state__7045__auto__ = (function (){var statearr_25794 = f__7044__auto__.call(null);
(statearr_25794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25795);

return statearr_25794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25795,out))
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
var c__7043__auto___25942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___25942,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___25942,out){
return (function (state_25912){
var state_val_25913 = (state_25912[(1)]);
if((state_val_25913 === (7))){
var inst_25908 = (state_25912[(2)]);
var state_25912__$1 = state_25912;
var statearr_25914_25943 = state_25912__$1;
(statearr_25914_25943[(2)] = inst_25908);

(statearr_25914_25943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (1))){
var inst_25875 = (new Array(n));
var inst_25876 = inst_25875;
var inst_25877 = (0);
var state_25912__$1 = (function (){var statearr_25915 = state_25912;
(statearr_25915[(7)] = inst_25876);

(statearr_25915[(8)] = inst_25877);

return statearr_25915;
})();
var statearr_25916_25944 = state_25912__$1;
(statearr_25916_25944[(2)] = null);

(statearr_25916_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (4))){
var inst_25880 = (state_25912[(9)]);
var inst_25880__$1 = (state_25912[(2)]);
var inst_25881 = (inst_25880__$1 == null);
var inst_25882 = cljs.core.not.call(null,inst_25881);
var state_25912__$1 = (function (){var statearr_25917 = state_25912;
(statearr_25917[(9)] = inst_25880__$1);

return statearr_25917;
})();
if(inst_25882){
var statearr_25918_25945 = state_25912__$1;
(statearr_25918_25945[(1)] = (5));

} else {
var statearr_25919_25946 = state_25912__$1;
(statearr_25919_25946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (15))){
var inst_25902 = (state_25912[(2)]);
var state_25912__$1 = state_25912;
var statearr_25920_25947 = state_25912__$1;
(statearr_25920_25947[(2)] = inst_25902);

(statearr_25920_25947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (13))){
var state_25912__$1 = state_25912;
var statearr_25921_25948 = state_25912__$1;
(statearr_25921_25948[(2)] = null);

(statearr_25921_25948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (6))){
var inst_25877 = (state_25912[(8)]);
var inst_25898 = (inst_25877 > (0));
var state_25912__$1 = state_25912;
if(cljs.core.truth_(inst_25898)){
var statearr_25922_25949 = state_25912__$1;
(statearr_25922_25949[(1)] = (12));

} else {
var statearr_25923_25950 = state_25912__$1;
(statearr_25923_25950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (3))){
var inst_25910 = (state_25912[(2)]);
var state_25912__$1 = state_25912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25912__$1,inst_25910);
} else {
if((state_val_25913 === (12))){
var inst_25876 = (state_25912[(7)]);
var inst_25900 = cljs.core.vec.call(null,inst_25876);
var state_25912__$1 = state_25912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25912__$1,(15),out,inst_25900);
} else {
if((state_val_25913 === (2))){
var state_25912__$1 = state_25912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25912__$1,(4),ch);
} else {
if((state_val_25913 === (11))){
var inst_25892 = (state_25912[(2)]);
var inst_25893 = (new Array(n));
var inst_25876 = inst_25893;
var inst_25877 = (0);
var state_25912__$1 = (function (){var statearr_25924 = state_25912;
(statearr_25924[(10)] = inst_25892);

(statearr_25924[(7)] = inst_25876);

(statearr_25924[(8)] = inst_25877);

return statearr_25924;
})();
var statearr_25925_25951 = state_25912__$1;
(statearr_25925_25951[(2)] = null);

(statearr_25925_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (9))){
var inst_25876 = (state_25912[(7)]);
var inst_25890 = cljs.core.vec.call(null,inst_25876);
var state_25912__$1 = state_25912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25912__$1,(11),out,inst_25890);
} else {
if((state_val_25913 === (5))){
var inst_25885 = (state_25912[(11)]);
var inst_25880 = (state_25912[(9)]);
var inst_25876 = (state_25912[(7)]);
var inst_25877 = (state_25912[(8)]);
var inst_25884 = (inst_25876[inst_25877] = inst_25880);
var inst_25885__$1 = (inst_25877 + (1));
var inst_25886 = (inst_25885__$1 < n);
var state_25912__$1 = (function (){var statearr_25926 = state_25912;
(statearr_25926[(11)] = inst_25885__$1);

(statearr_25926[(12)] = inst_25884);

return statearr_25926;
})();
if(cljs.core.truth_(inst_25886)){
var statearr_25927_25952 = state_25912__$1;
(statearr_25927_25952[(1)] = (8));

} else {
var statearr_25928_25953 = state_25912__$1;
(statearr_25928_25953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (14))){
var inst_25905 = (state_25912[(2)]);
var inst_25906 = cljs.core.async.close_BANG_.call(null,out);
var state_25912__$1 = (function (){var statearr_25930 = state_25912;
(statearr_25930[(13)] = inst_25905);

return statearr_25930;
})();
var statearr_25931_25954 = state_25912__$1;
(statearr_25931_25954[(2)] = inst_25906);

(statearr_25931_25954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (10))){
var inst_25896 = (state_25912[(2)]);
var state_25912__$1 = state_25912;
var statearr_25932_25955 = state_25912__$1;
(statearr_25932_25955[(2)] = inst_25896);

(statearr_25932_25955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25913 === (8))){
var inst_25885 = (state_25912[(11)]);
var inst_25876 = (state_25912[(7)]);
var tmp25929 = inst_25876;
var inst_25876__$1 = tmp25929;
var inst_25877 = inst_25885;
var state_25912__$1 = (function (){var statearr_25933 = state_25912;
(statearr_25933[(7)] = inst_25876__$1);

(statearr_25933[(8)] = inst_25877);

return statearr_25933;
})();
var statearr_25934_25956 = state_25912__$1;
(statearr_25934_25956[(2)] = null);

(statearr_25934_25956[(1)] = (2));


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
});})(c__7043__auto___25942,out))
;
return ((function (switch__6987__auto__,c__7043__auto___25942,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_25938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25938[(0)] = state_machine__6988__auto__);

(statearr_25938[(1)] = (1));

return statearr_25938;
});
var state_machine__6988__auto____1 = (function (state_25912){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_25912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e25939){if((e25939 instanceof Object)){
var ex__6991__auto__ = e25939;
var statearr_25940_25957 = state_25912;
(statearr_25940_25957[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25958 = state_25912;
state_25912 = G__25958;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_25912){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_25912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___25942,out))
})();
var state__7045__auto__ = (function (){var statearr_25941 = f__7044__auto__.call(null);
(statearr_25941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___25942);

return statearr_25941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___25942,out))
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
var c__7043__auto___26101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___26101,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___26101,out){
return (function (state_26071){
var state_val_26072 = (state_26071[(1)]);
if((state_val_26072 === (7))){
var inst_26067 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26073_26102 = state_26071__$1;
(statearr_26073_26102[(2)] = inst_26067);

(statearr_26073_26102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (1))){
var inst_26030 = [];
var inst_26031 = inst_26030;
var inst_26032 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26071__$1 = (function (){var statearr_26074 = state_26071;
(statearr_26074[(7)] = inst_26031);

(statearr_26074[(8)] = inst_26032);

return statearr_26074;
})();
var statearr_26075_26103 = state_26071__$1;
(statearr_26075_26103[(2)] = null);

(statearr_26075_26103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (4))){
var inst_26035 = (state_26071[(9)]);
var inst_26035__$1 = (state_26071[(2)]);
var inst_26036 = (inst_26035__$1 == null);
var inst_26037 = cljs.core.not.call(null,inst_26036);
var state_26071__$1 = (function (){var statearr_26076 = state_26071;
(statearr_26076[(9)] = inst_26035__$1);

return statearr_26076;
})();
if(inst_26037){
var statearr_26077_26104 = state_26071__$1;
(statearr_26077_26104[(1)] = (5));

} else {
var statearr_26078_26105 = state_26071__$1;
(statearr_26078_26105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (15))){
var inst_26061 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26079_26106 = state_26071__$1;
(statearr_26079_26106[(2)] = inst_26061);

(statearr_26079_26106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (13))){
var state_26071__$1 = state_26071;
var statearr_26080_26107 = state_26071__$1;
(statearr_26080_26107[(2)] = null);

(statearr_26080_26107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (6))){
var inst_26031 = (state_26071[(7)]);
var inst_26056 = inst_26031.length;
var inst_26057 = (inst_26056 > (0));
var state_26071__$1 = state_26071;
if(cljs.core.truth_(inst_26057)){
var statearr_26081_26108 = state_26071__$1;
(statearr_26081_26108[(1)] = (12));

} else {
var statearr_26082_26109 = state_26071__$1;
(statearr_26082_26109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (3))){
var inst_26069 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26071__$1,inst_26069);
} else {
if((state_val_26072 === (12))){
var inst_26031 = (state_26071[(7)]);
var inst_26059 = cljs.core.vec.call(null,inst_26031);
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26071__$1,(15),out,inst_26059);
} else {
if((state_val_26072 === (2))){
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26071__$1,(4),ch);
} else {
if((state_val_26072 === (11))){
var inst_26039 = (state_26071[(10)]);
var inst_26035 = (state_26071[(9)]);
var inst_26049 = (state_26071[(2)]);
var inst_26050 = [];
var inst_26051 = inst_26050.push(inst_26035);
var inst_26031 = inst_26050;
var inst_26032 = inst_26039;
var state_26071__$1 = (function (){var statearr_26083 = state_26071;
(statearr_26083[(11)] = inst_26049);

(statearr_26083[(12)] = inst_26051);

(statearr_26083[(7)] = inst_26031);

(statearr_26083[(8)] = inst_26032);

return statearr_26083;
})();
var statearr_26084_26110 = state_26071__$1;
(statearr_26084_26110[(2)] = null);

(statearr_26084_26110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (9))){
var inst_26031 = (state_26071[(7)]);
var inst_26047 = cljs.core.vec.call(null,inst_26031);
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26071__$1,(11),out,inst_26047);
} else {
if((state_val_26072 === (5))){
var inst_26039 = (state_26071[(10)]);
var inst_26032 = (state_26071[(8)]);
var inst_26035 = (state_26071[(9)]);
var inst_26039__$1 = f.call(null,inst_26035);
var inst_26040 = cljs.core._EQ_.call(null,inst_26039__$1,inst_26032);
var inst_26041 = cljs.core.keyword_identical_QMARK_.call(null,inst_26032,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26042 = (inst_26040) || (inst_26041);
var state_26071__$1 = (function (){var statearr_26085 = state_26071;
(statearr_26085[(10)] = inst_26039__$1);

return statearr_26085;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26086_26111 = state_26071__$1;
(statearr_26086_26111[(1)] = (8));

} else {
var statearr_26087_26112 = state_26071__$1;
(statearr_26087_26112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (14))){
var inst_26064 = (state_26071[(2)]);
var inst_26065 = cljs.core.async.close_BANG_.call(null,out);
var state_26071__$1 = (function (){var statearr_26089 = state_26071;
(statearr_26089[(13)] = inst_26064);

return statearr_26089;
})();
var statearr_26090_26113 = state_26071__$1;
(statearr_26090_26113[(2)] = inst_26065);

(statearr_26090_26113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (10))){
var inst_26054 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26091_26114 = state_26071__$1;
(statearr_26091_26114[(2)] = inst_26054);

(statearr_26091_26114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (8))){
var inst_26031 = (state_26071[(7)]);
var inst_26039 = (state_26071[(10)]);
var inst_26035 = (state_26071[(9)]);
var inst_26044 = inst_26031.push(inst_26035);
var tmp26088 = inst_26031;
var inst_26031__$1 = tmp26088;
var inst_26032 = inst_26039;
var state_26071__$1 = (function (){var statearr_26092 = state_26071;
(statearr_26092[(14)] = inst_26044);

(statearr_26092[(7)] = inst_26031__$1);

(statearr_26092[(8)] = inst_26032);

return statearr_26092;
})();
var statearr_26093_26115 = state_26071__$1;
(statearr_26093_26115[(2)] = null);

(statearr_26093_26115[(1)] = (2));


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
});})(c__7043__auto___26101,out))
;
return ((function (switch__6987__auto__,c__7043__auto___26101,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_26097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26097[(0)] = state_machine__6988__auto__);

(statearr_26097[(1)] = (1));

return statearr_26097;
});
var state_machine__6988__auto____1 = (function (state_26071){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_26071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e26098){if((e26098 instanceof Object)){
var ex__6991__auto__ = e26098;
var statearr_26099_26116 = state_26071;
(statearr_26099_26116[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26117 = state_26071;
state_26071 = G__26117;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_26071){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_26071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___26101,out))
})();
var state__7045__auto__ = (function (){var statearr_26100 = f__7044__auto__.call(null);
(statearr_26100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___26101);

return statearr_26100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___26101,out))
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