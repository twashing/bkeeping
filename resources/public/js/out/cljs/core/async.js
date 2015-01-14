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
if(typeof cljs.core.async.t14948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14948 = (function (f,fn_handler,meta14949){
this.f = f;
this.fn_handler = fn_handler;
this.meta14949 = meta14949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14950){
var self__ = this;
var _14950__$1 = this;
return self__.meta14949;
});

cljs.core.async.t14948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14950,meta14949__$1){
var self__ = this;
var _14950__$1 = this;
return (new cljs.core.async.t14948(self__.f,self__.fn_handler,meta14949__$1));
});

cljs.core.async.t14948.cljs$lang$type = true;

cljs.core.async.t14948.cljs$lang$ctorStr = "cljs.core.async/t14948";

cljs.core.async.t14948.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14948");
});

cljs.core.async.__GT_t14948 = (function __GT_t14948(f__$1,fn_handler__$1,meta14949){
return (new cljs.core.async.t14948(f__$1,fn_handler__$1,meta14949));
});

}

return (new cljs.core.async.t14948(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__14952 = buff;
if(G__14952){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__14952.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14952.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14952);
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
var val_14953 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14953);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14953,ret){
return (function (){
return fn1.call(null,val_14953);
});})(val_14953,ret))
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
var n__4509__auto___14954 = n;
var x_14955 = (0);
while(true){
if((x_14955 < n__4509__auto___14954)){
(a[x_14955] = (0));

var G__14956 = (x_14955 + (1));
x_14955 = G__14956;
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

var G__14957 = (i + (1));
i = G__14957;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14961 = (function (flag,alt_flag,meta14962){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14962 = meta14962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14961.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14963){
var self__ = this;
var _14963__$1 = this;
return self__.meta14962;
});})(flag))
;

cljs.core.async.t14961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14963,meta14962__$1){
var self__ = this;
var _14963__$1 = this;
return (new cljs.core.async.t14961(self__.flag,self__.alt_flag,meta14962__$1));
});})(flag))
;

cljs.core.async.t14961.cljs$lang$type = true;

cljs.core.async.t14961.cljs$lang$ctorStr = "cljs.core.async/t14961";

cljs.core.async.t14961.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14961");
});})(flag))
;

cljs.core.async.__GT_t14961 = ((function (flag){
return (function __GT_t14961(flag__$1,alt_flag__$1,meta14962){
return (new cljs.core.async.t14961(flag__$1,alt_flag__$1,meta14962));
});})(flag))
;

}

return (new cljs.core.async.t14961(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14967 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14967 = (function (cb,flag,alt_handler,meta14968){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14968 = meta14968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14969){
var self__ = this;
var _14969__$1 = this;
return self__.meta14968;
});

cljs.core.async.t14967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14969,meta14968__$1){
var self__ = this;
var _14969__$1 = this;
return (new cljs.core.async.t14967(self__.cb,self__.flag,self__.alt_handler,meta14968__$1));
});

cljs.core.async.t14967.cljs$lang$type = true;

cljs.core.async.t14967.cljs$lang$ctorStr = "cljs.core.async/t14967";

cljs.core.async.t14967.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14967");
});

cljs.core.async.__GT_t14967 = (function __GT_t14967(cb__$1,flag__$1,alt_handler__$1,meta14968){
return (new cljs.core.async.t14967(cb__$1,flag__$1,alt_handler__$1,meta14968));
});

}

return (new cljs.core.async.t14967(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__14970_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14970_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14971_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14971_SHARP_,port], null));
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
var G__14972 = (i + (1));
i = G__14972;
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
var alts_BANG___delegate = function (ports,p__14973){
var map__14975 = p__14973;
var map__14975__$1 = ((cljs.core.seq_QMARK_.call(null,map__14975))?cljs.core.apply.call(null,cljs.core.hash_map,map__14975):map__14975);
var opts = map__14975__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14973 = null;
if (arguments.length > 1) {
  p__14973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14973);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14976){
var ports = cljs.core.first(arglist__14976);
var p__14973 = cljs.core.rest(arglist__14976);
return alts_BANG___delegate(ports,p__14973);
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
var c__7304__auto___15071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15071){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15071){
return (function (state_15047){
var state_val_15048 = (state_15047[(1)]);
if((state_val_15048 === (7))){
var inst_15043 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15049_15072 = state_15047__$1;
(statearr_15049_15072[(2)] = inst_15043);

(statearr_15049_15072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (1))){
var state_15047__$1 = state_15047;
var statearr_15050_15073 = state_15047__$1;
(statearr_15050_15073[(2)] = null);

(statearr_15050_15073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (4))){
var inst_15026 = (state_15047[(7)]);
var inst_15026__$1 = (state_15047[(2)]);
var inst_15027 = (inst_15026__$1 == null);
var state_15047__$1 = (function (){var statearr_15051 = state_15047;
(statearr_15051[(7)] = inst_15026__$1);

return statearr_15051;
})();
if(cljs.core.truth_(inst_15027)){
var statearr_15052_15074 = state_15047__$1;
(statearr_15052_15074[(1)] = (5));

} else {
var statearr_15053_15075 = state_15047__$1;
(statearr_15053_15075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (13))){
var state_15047__$1 = state_15047;
var statearr_15054_15076 = state_15047__$1;
(statearr_15054_15076[(2)] = null);

(statearr_15054_15076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (6))){
var inst_15026 = (state_15047[(7)]);
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15047__$1,(11),to,inst_15026);
} else {
if((state_val_15048 === (3))){
var inst_15045 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15047__$1,inst_15045);
} else {
if((state_val_15048 === (12))){
var state_15047__$1 = state_15047;
var statearr_15055_15077 = state_15047__$1;
(statearr_15055_15077[(2)] = null);

(statearr_15055_15077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (2))){
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,(4),from);
} else {
if((state_val_15048 === (11))){
var inst_15036 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
if(cljs.core.truth_(inst_15036)){
var statearr_15056_15078 = state_15047__$1;
(statearr_15056_15078[(1)] = (12));

} else {
var statearr_15057_15079 = state_15047__$1;
(statearr_15057_15079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (9))){
var state_15047__$1 = state_15047;
var statearr_15058_15080 = state_15047__$1;
(statearr_15058_15080[(2)] = null);

(statearr_15058_15080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (5))){
var state_15047__$1 = state_15047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15059_15081 = state_15047__$1;
(statearr_15059_15081[(1)] = (8));

} else {
var statearr_15060_15082 = state_15047__$1;
(statearr_15060_15082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (14))){
var inst_15041 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15061_15083 = state_15047__$1;
(statearr_15061_15083[(2)] = inst_15041);

(statearr_15061_15083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (10))){
var inst_15033 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15062_15084 = state_15047__$1;
(statearr_15062_15084[(2)] = inst_15033);

(statearr_15062_15084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (8))){
var inst_15030 = cljs.core.async.close_BANG_.call(null,to);
var state_15047__$1 = state_15047;
var statearr_15063_15085 = state_15047__$1;
(statearr_15063_15085[(2)] = inst_15030);

(statearr_15063_15085[(1)] = (10));


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
});})(c__7304__auto___15071))
;
return ((function (switch__7248__auto__,c__7304__auto___15071){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15067 = [null,null,null,null,null,null,null,null];
(statearr_15067[(0)] = state_machine__7249__auto__);

(statearr_15067[(1)] = (1));

return statearr_15067;
});
var state_machine__7249__auto____1 = (function (state_15047){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15068){if((e15068 instanceof Object)){
var ex__7252__auto__ = e15068;
var statearr_15069_15086 = state_15047;
(statearr_15069_15086[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15087 = state_15047;
state_15047 = G__15087;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15047){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15071))
})();
var state__7306__auto__ = (function (){var statearr_15070 = f__7305__auto__.call(null);
(statearr_15070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15071);

return statearr_15070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15071))
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
return (function (p__15271){
var vec__15272 = p__15271;
var v = cljs.core.nth.call(null,vec__15272,(0),null);
var p = cljs.core.nth.call(null,vec__15272,(1),null);
var job = vec__15272;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7304__auto___15454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results){
return (function (state_15277){
var state_val_15278 = (state_15277[(1)]);
if((state_val_15278 === (2))){
var inst_15274 = (state_15277[(2)]);
var inst_15275 = cljs.core.async.close_BANG_.call(null,res);
var state_15277__$1 = (function (){var statearr_15279 = state_15277;
(statearr_15279[(7)] = inst_15274);

return statearr_15279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15277__$1,inst_15275);
} else {
if((state_val_15278 === (1))){
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15277__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15283 = [null,null,null,null,null,null,null,null];
(statearr_15283[(0)] = state_machine__7249__auto__);

(statearr_15283[(1)] = (1));

return statearr_15283;
});
var state_machine__7249__auto____1 = (function (state_15277){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15284){if((e15284 instanceof Object)){
var ex__7252__auto__ = e15284;
var statearr_15285_15455 = state_15277;
(statearr_15285_15455[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15456 = state_15277;
state_15277 = G__15456;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15277){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results))
})();
var state__7306__auto__ = (function (){var statearr_15286 = f__7305__auto__.call(null);
(statearr_15286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15454);

return statearr_15286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15454,res,vec__15272,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15287){
var vec__15288 = p__15287;
var v = cljs.core.nth.call(null,vec__15288,(0),null);
var p = cljs.core.nth.call(null,vec__15288,(1),null);
var job = vec__15288;
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
var n__4509__auto___15457 = n;
var __15458 = (0);
while(true){
if((__15458 < n__4509__auto___15457)){
var G__15289_15459 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15289_15459) {
case "async":
var c__7304__auto___15461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15458,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15458,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function (state_15302){
var state_val_15303 = (state_15302[(1)]);
if((state_val_15303 === (7))){
var inst_15298 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
var statearr_15304_15462 = state_15302__$1;
(statearr_15304_15462[(2)] = inst_15298);

(statearr_15304_15462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15303 === (6))){
var state_15302__$1 = state_15302;
var statearr_15305_15463 = state_15302__$1;
(statearr_15305_15463[(2)] = null);

(statearr_15305_15463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15303 === (5))){
var state_15302__$1 = state_15302;
var statearr_15306_15464 = state_15302__$1;
(statearr_15306_15464[(2)] = null);

(statearr_15306_15464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15303 === (4))){
var inst_15292 = (state_15302[(2)]);
var inst_15293 = async.call(null,inst_15292);
var state_15302__$1 = state_15302;
if(cljs.core.truth_(inst_15293)){
var statearr_15307_15465 = state_15302__$1;
(statearr_15307_15465[(1)] = (5));

} else {
var statearr_15308_15466 = state_15302__$1;
(statearr_15308_15466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15303 === (3))){
var inst_15300 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15302__$1,inst_15300);
} else {
if((state_val_15303 === (2))){
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15302__$1,(4),jobs);
} else {
if((state_val_15303 === (1))){
var state_15302__$1 = state_15302;
var statearr_15309_15467 = state_15302__$1;
(statearr_15309_15467[(2)] = null);

(statearr_15309_15467[(1)] = (2));


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
});})(__15458,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
;
return ((function (__15458,switch__7248__auto__,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15313 = [null,null,null,null,null,null,null];
(statearr_15313[(0)] = state_machine__7249__auto__);

(statearr_15313[(1)] = (1));

return statearr_15313;
});
var state_machine__7249__auto____1 = (function (state_15302){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15314){if((e15314 instanceof Object)){
var ex__7252__auto__ = e15314;
var statearr_15315_15468 = state_15302;
(statearr_15315_15468[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15469 = state_15302;
state_15302 = G__15469;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15302){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15458,switch__7248__auto__,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15316 = f__7305__auto__.call(null);
(statearr_15316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15461);

return statearr_15316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15458,c__7304__auto___15461,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
);


break;
case "compute":
var c__7304__auto___15470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15458,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15458,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function (state_15329){
var state_val_15330 = (state_15329[(1)]);
if((state_val_15330 === (7))){
var inst_15325 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15331_15471 = state_15329__$1;
(statearr_15331_15471[(2)] = inst_15325);

(statearr_15331_15471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (6))){
var state_15329__$1 = state_15329;
var statearr_15332_15472 = state_15329__$1;
(statearr_15332_15472[(2)] = null);

(statearr_15332_15472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (5))){
var state_15329__$1 = state_15329;
var statearr_15333_15473 = state_15329__$1;
(statearr_15333_15473[(2)] = null);

(statearr_15333_15473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (4))){
var inst_15319 = (state_15329[(2)]);
var inst_15320 = process.call(null,inst_15319);
var state_15329__$1 = state_15329;
if(cljs.core.truth_(inst_15320)){
var statearr_15334_15474 = state_15329__$1;
(statearr_15334_15474[(1)] = (5));

} else {
var statearr_15335_15475 = state_15329__$1;
(statearr_15335_15475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (3))){
var inst_15327 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15329__$1,inst_15327);
} else {
if((state_val_15330 === (2))){
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15329__$1,(4),jobs);
} else {
if((state_val_15330 === (1))){
var state_15329__$1 = state_15329;
var statearr_15336_15476 = state_15329__$1;
(statearr_15336_15476[(2)] = null);

(statearr_15336_15476[(1)] = (2));


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
});})(__15458,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
;
return ((function (__15458,switch__7248__auto__,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15340 = [null,null,null,null,null,null,null];
(statearr_15340[(0)] = state_machine__7249__auto__);

(statearr_15340[(1)] = (1));

return statearr_15340;
});
var state_machine__7249__auto____1 = (function (state_15329){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15341){if((e15341 instanceof Object)){
var ex__7252__auto__ = e15341;
var statearr_15342_15477 = state_15329;
(statearr_15342_15477[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15478 = state_15329;
state_15329 = G__15478;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15329){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15458,switch__7248__auto__,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15343 = f__7305__auto__.call(null);
(statearr_15343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15470);

return statearr_15343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15458,c__7304__auto___15470,G__15289_15459,n__4509__auto___15457,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15479 = (__15458 + (1));
__15458 = G__15479;
continue;
} else {
}
break;
}

var c__7304__auto___15480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15480,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15480,jobs,results,process,async){
return (function (state_15365){
var state_val_15366 = (state_15365[(1)]);
if((state_val_15366 === (9))){
var inst_15358 = (state_15365[(2)]);
var state_15365__$1 = (function (){var statearr_15367 = state_15365;
(statearr_15367[(7)] = inst_15358);

return statearr_15367;
})();
var statearr_15368_15481 = state_15365__$1;
(statearr_15368_15481[(2)] = null);

(statearr_15368_15481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (8))){
var inst_15351 = (state_15365[(8)]);
var inst_15356 = (state_15365[(2)]);
var state_15365__$1 = (function (){var statearr_15369 = state_15365;
(statearr_15369[(9)] = inst_15356);

return statearr_15369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15365__$1,(9),results,inst_15351);
} else {
if((state_val_15366 === (7))){
var inst_15361 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
var statearr_15370_15482 = state_15365__$1;
(statearr_15370_15482[(2)] = inst_15361);

(statearr_15370_15482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (6))){
var inst_15351 = (state_15365[(8)]);
var inst_15346 = (state_15365[(10)]);
var inst_15351__$1 = cljs.core.async.chan.call(null,(1));
var inst_15352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15353 = [inst_15346,inst_15351__$1];
var inst_15354 = (new cljs.core.PersistentVector(null,2,(5),inst_15352,inst_15353,null));
var state_15365__$1 = (function (){var statearr_15371 = state_15365;
(statearr_15371[(8)] = inst_15351__$1);

return statearr_15371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15365__$1,(8),jobs,inst_15354);
} else {
if((state_val_15366 === (5))){
var inst_15349 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15365__$1 = state_15365;
var statearr_15372_15483 = state_15365__$1;
(statearr_15372_15483[(2)] = inst_15349);

(statearr_15372_15483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (4))){
var inst_15346 = (state_15365[(10)]);
var inst_15346__$1 = (state_15365[(2)]);
var inst_15347 = (inst_15346__$1 == null);
var state_15365__$1 = (function (){var statearr_15373 = state_15365;
(statearr_15373[(10)] = inst_15346__$1);

return statearr_15373;
})();
if(cljs.core.truth_(inst_15347)){
var statearr_15374_15484 = state_15365__$1;
(statearr_15374_15484[(1)] = (5));

} else {
var statearr_15375_15485 = state_15365__$1;
(statearr_15375_15485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (3))){
var inst_15363 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15365__$1,inst_15363);
} else {
if((state_val_15366 === (2))){
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15365__$1,(4),from);
} else {
if((state_val_15366 === (1))){
var state_15365__$1 = state_15365;
var statearr_15376_15486 = state_15365__$1;
(statearr_15376_15486[(2)] = null);

(statearr_15376_15486[(1)] = (2));


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
});})(c__7304__auto___15480,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7304__auto___15480,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15380[(0)] = state_machine__7249__auto__);

(statearr_15380[(1)] = (1));

return statearr_15380;
});
var state_machine__7249__auto____1 = (function (state_15365){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15381){if((e15381 instanceof Object)){
var ex__7252__auto__ = e15381;
var statearr_15382_15487 = state_15365;
(statearr_15382_15487[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15488 = state_15365;
state_15365 = G__15488;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15365){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15480,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15383 = f__7305__auto__.call(null);
(statearr_15383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15480);

return statearr_15383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15480,jobs,results,process,async))
);


var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,jobs,results,process,async){
return (function (state_15421){
var state_val_15422 = (state_15421[(1)]);
if((state_val_15422 === (7))){
var inst_15417 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
var statearr_15423_15489 = state_15421__$1;
(statearr_15423_15489[(2)] = inst_15417);

(statearr_15423_15489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (20))){
var state_15421__$1 = state_15421;
var statearr_15424_15490 = state_15421__$1;
(statearr_15424_15490[(2)] = null);

(statearr_15424_15490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (1))){
var state_15421__$1 = state_15421;
var statearr_15425_15491 = state_15421__$1;
(statearr_15425_15491[(2)] = null);

(statearr_15425_15491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (4))){
var inst_15386 = (state_15421[(7)]);
var inst_15386__$1 = (state_15421[(2)]);
var inst_15387 = (inst_15386__$1 == null);
var state_15421__$1 = (function (){var statearr_15426 = state_15421;
(statearr_15426[(7)] = inst_15386__$1);

return statearr_15426;
})();
if(cljs.core.truth_(inst_15387)){
var statearr_15427_15492 = state_15421__$1;
(statearr_15427_15492[(1)] = (5));

} else {
var statearr_15428_15493 = state_15421__$1;
(statearr_15428_15493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (15))){
var inst_15399 = (state_15421[(8)]);
var state_15421__$1 = state_15421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15421__$1,(18),to,inst_15399);
} else {
if((state_val_15422 === (21))){
var inst_15412 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
var statearr_15429_15494 = state_15421__$1;
(statearr_15429_15494[(2)] = inst_15412);

(statearr_15429_15494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (13))){
var inst_15414 = (state_15421[(2)]);
var state_15421__$1 = (function (){var statearr_15430 = state_15421;
(statearr_15430[(9)] = inst_15414);

return statearr_15430;
})();
var statearr_15431_15495 = state_15421__$1;
(statearr_15431_15495[(2)] = null);

(statearr_15431_15495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (6))){
var inst_15386 = (state_15421[(7)]);
var state_15421__$1 = state_15421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15421__$1,(11),inst_15386);
} else {
if((state_val_15422 === (17))){
var inst_15407 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
if(cljs.core.truth_(inst_15407)){
var statearr_15432_15496 = state_15421__$1;
(statearr_15432_15496[(1)] = (19));

} else {
var statearr_15433_15497 = state_15421__$1;
(statearr_15433_15497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (3))){
var inst_15419 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15421__$1,inst_15419);
} else {
if((state_val_15422 === (12))){
var inst_15396 = (state_15421[(10)]);
var state_15421__$1 = state_15421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15421__$1,(14),inst_15396);
} else {
if((state_val_15422 === (2))){
var state_15421__$1 = state_15421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15421__$1,(4),results);
} else {
if((state_val_15422 === (19))){
var state_15421__$1 = state_15421;
var statearr_15434_15498 = state_15421__$1;
(statearr_15434_15498[(2)] = null);

(statearr_15434_15498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (11))){
var inst_15396 = (state_15421[(2)]);
var state_15421__$1 = (function (){var statearr_15435 = state_15421;
(statearr_15435[(10)] = inst_15396);

return statearr_15435;
})();
var statearr_15436_15499 = state_15421__$1;
(statearr_15436_15499[(2)] = null);

(statearr_15436_15499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (9))){
var state_15421__$1 = state_15421;
var statearr_15437_15500 = state_15421__$1;
(statearr_15437_15500[(2)] = null);

(statearr_15437_15500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (5))){
var state_15421__$1 = state_15421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15438_15501 = state_15421__$1;
(statearr_15438_15501[(1)] = (8));

} else {
var statearr_15439_15502 = state_15421__$1;
(statearr_15439_15502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (14))){
var inst_15401 = (state_15421[(11)]);
var inst_15399 = (state_15421[(8)]);
var inst_15399__$1 = (state_15421[(2)]);
var inst_15400 = (inst_15399__$1 == null);
var inst_15401__$1 = cljs.core.not.call(null,inst_15400);
var state_15421__$1 = (function (){var statearr_15440 = state_15421;
(statearr_15440[(11)] = inst_15401__$1);

(statearr_15440[(8)] = inst_15399__$1);

return statearr_15440;
})();
if(inst_15401__$1){
var statearr_15441_15503 = state_15421__$1;
(statearr_15441_15503[(1)] = (15));

} else {
var statearr_15442_15504 = state_15421__$1;
(statearr_15442_15504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (16))){
var inst_15401 = (state_15421[(11)]);
var state_15421__$1 = state_15421;
var statearr_15443_15505 = state_15421__$1;
(statearr_15443_15505[(2)] = inst_15401);

(statearr_15443_15505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (10))){
var inst_15393 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
var statearr_15444_15506 = state_15421__$1;
(statearr_15444_15506[(2)] = inst_15393);

(statearr_15444_15506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (18))){
var inst_15404 = (state_15421[(2)]);
var state_15421__$1 = state_15421;
var statearr_15445_15507 = state_15421__$1;
(statearr_15445_15507[(2)] = inst_15404);

(statearr_15445_15507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15422 === (8))){
var inst_15390 = cljs.core.async.close_BANG_.call(null,to);
var state_15421__$1 = state_15421;
var statearr_15446_15508 = state_15421__$1;
(statearr_15446_15508[(2)] = inst_15390);

(statearr_15446_15508[(1)] = (10));


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
var statearr_15450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15450[(0)] = state_machine__7249__auto__);

(statearr_15450[(1)] = (1));

return statearr_15450;
});
var state_machine__7249__auto____1 = (function (state_15421){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15451){if((e15451 instanceof Object)){
var ex__7252__auto__ = e15451;
var statearr_15452_15509 = state_15421;
(statearr_15452_15509[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15510 = state_15421;
state_15421 = G__15510;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15421){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15453 = f__7305__auto__.call(null);
(statearr_15453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15453;
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
var c__7304__auto___15611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15611,tc,fc){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15611,tc,fc){
return (function (state_15586){
var state_val_15587 = (state_15586[(1)]);
if((state_val_15587 === (7))){
var inst_15582 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15588_15612 = state_15586__$1;
(statearr_15588_15612[(2)] = inst_15582);

(statearr_15588_15612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (1))){
var state_15586__$1 = state_15586;
var statearr_15589_15613 = state_15586__$1;
(statearr_15589_15613[(2)] = null);

(statearr_15589_15613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (4))){
var inst_15563 = (state_15586[(7)]);
var inst_15563__$1 = (state_15586[(2)]);
var inst_15564 = (inst_15563__$1 == null);
var state_15586__$1 = (function (){var statearr_15590 = state_15586;
(statearr_15590[(7)] = inst_15563__$1);

return statearr_15590;
})();
if(cljs.core.truth_(inst_15564)){
var statearr_15591_15614 = state_15586__$1;
(statearr_15591_15614[(1)] = (5));

} else {
var statearr_15592_15615 = state_15586__$1;
(statearr_15592_15615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (13))){
var state_15586__$1 = state_15586;
var statearr_15593_15616 = state_15586__$1;
(statearr_15593_15616[(2)] = null);

(statearr_15593_15616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (6))){
var inst_15563 = (state_15586[(7)]);
var inst_15569 = p.call(null,inst_15563);
var state_15586__$1 = state_15586;
if(cljs.core.truth_(inst_15569)){
var statearr_15594_15617 = state_15586__$1;
(statearr_15594_15617[(1)] = (9));

} else {
var statearr_15595_15618 = state_15586__$1;
(statearr_15595_15618[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (3))){
var inst_15584 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15586__$1,inst_15584);
} else {
if((state_val_15587 === (12))){
var state_15586__$1 = state_15586;
var statearr_15596_15619 = state_15586__$1;
(statearr_15596_15619[(2)] = null);

(statearr_15596_15619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (2))){
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15586__$1,(4),ch);
} else {
if((state_val_15587 === (11))){
var inst_15563 = (state_15586[(7)]);
var inst_15573 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15586__$1,(8),inst_15573,inst_15563);
} else {
if((state_val_15587 === (9))){
var state_15586__$1 = state_15586;
var statearr_15597_15620 = state_15586__$1;
(statearr_15597_15620[(2)] = tc);

(statearr_15597_15620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (5))){
var inst_15566 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15567 = cljs.core.async.close_BANG_.call(null,fc);
var state_15586__$1 = (function (){var statearr_15598 = state_15586;
(statearr_15598[(8)] = inst_15566);

return statearr_15598;
})();
var statearr_15599_15621 = state_15586__$1;
(statearr_15599_15621[(2)] = inst_15567);

(statearr_15599_15621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (14))){
var inst_15580 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15600_15622 = state_15586__$1;
(statearr_15600_15622[(2)] = inst_15580);

(statearr_15600_15622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (10))){
var state_15586__$1 = state_15586;
var statearr_15601_15623 = state_15586__$1;
(statearr_15601_15623[(2)] = fc);

(statearr_15601_15623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (8))){
var inst_15575 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
if(cljs.core.truth_(inst_15575)){
var statearr_15602_15624 = state_15586__$1;
(statearr_15602_15624[(1)] = (12));

} else {
var statearr_15603_15625 = state_15586__$1;
(statearr_15603_15625[(1)] = (13));

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
});})(c__7304__auto___15611,tc,fc))
;
return ((function (switch__7248__auto__,c__7304__auto___15611,tc,fc){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15607 = [null,null,null,null,null,null,null,null,null];
(statearr_15607[(0)] = state_machine__7249__auto__);

(statearr_15607[(1)] = (1));

return statearr_15607;
});
var state_machine__7249__auto____1 = (function (state_15586){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15608){if((e15608 instanceof Object)){
var ex__7252__auto__ = e15608;
var statearr_15609_15626 = state_15586;
(statearr_15609_15626[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15627 = state_15586;
state_15586 = G__15627;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15586){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15611,tc,fc))
})();
var state__7306__auto__ = (function (){var statearr_15610 = f__7305__auto__.call(null);
(statearr_15610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15611);

return statearr_15610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15611,tc,fc))
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
return (function (state_15674){
var state_val_15675 = (state_15674[(1)]);
if((state_val_15675 === (7))){
var inst_15670 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15676_15692 = state_15674__$1;
(statearr_15676_15692[(2)] = inst_15670);

(statearr_15676_15692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (6))){
var inst_15660 = (state_15674[(7)]);
var inst_15663 = (state_15674[(8)]);
var inst_15667 = f.call(null,inst_15660,inst_15663);
var inst_15660__$1 = inst_15667;
var state_15674__$1 = (function (){var statearr_15677 = state_15674;
(statearr_15677[(7)] = inst_15660__$1);

return statearr_15677;
})();
var statearr_15678_15693 = state_15674__$1;
(statearr_15678_15693[(2)] = null);

(statearr_15678_15693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (5))){
var inst_15660 = (state_15674[(7)]);
var state_15674__$1 = state_15674;
var statearr_15679_15694 = state_15674__$1;
(statearr_15679_15694[(2)] = inst_15660);

(statearr_15679_15694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (4))){
var inst_15663 = (state_15674[(8)]);
var inst_15663__$1 = (state_15674[(2)]);
var inst_15664 = (inst_15663__$1 == null);
var state_15674__$1 = (function (){var statearr_15680 = state_15674;
(statearr_15680[(8)] = inst_15663__$1);

return statearr_15680;
})();
if(cljs.core.truth_(inst_15664)){
var statearr_15681_15695 = state_15674__$1;
(statearr_15681_15695[(1)] = (5));

} else {
var statearr_15682_15696 = state_15674__$1;
(statearr_15682_15696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (3))){
var inst_15672 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15674__$1,inst_15672);
} else {
if((state_val_15675 === (2))){
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15674__$1,(4),ch);
} else {
if((state_val_15675 === (1))){
var inst_15660 = init;
var state_15674__$1 = (function (){var statearr_15683 = state_15674;
(statearr_15683[(7)] = inst_15660);

return statearr_15683;
})();
var statearr_15684_15697 = state_15674__$1;
(statearr_15684_15697[(2)] = null);

(statearr_15684_15697[(1)] = (2));


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
var statearr_15688 = [null,null,null,null,null,null,null,null,null];
(statearr_15688[(0)] = state_machine__7249__auto__);

(statearr_15688[(1)] = (1));

return statearr_15688;
});
var state_machine__7249__auto____1 = (function (state_15674){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15689){if((e15689 instanceof Object)){
var ex__7252__auto__ = e15689;
var statearr_15690_15698 = state_15674;
(statearr_15690_15698[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15699 = state_15674;
state_15674 = G__15699;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15674){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15691 = f__7305__auto__.call(null);
(statearr_15691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15691;
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
return (function (state_15773){
var state_val_15774 = (state_15773[(1)]);
if((state_val_15774 === (7))){
var inst_15755 = (state_15773[(2)]);
var state_15773__$1 = state_15773;
var statearr_15775_15798 = state_15773__$1;
(statearr_15775_15798[(2)] = inst_15755);

(statearr_15775_15798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (1))){
var inst_15749 = cljs.core.seq.call(null,coll);
var inst_15750 = inst_15749;
var state_15773__$1 = (function (){var statearr_15776 = state_15773;
(statearr_15776[(7)] = inst_15750);

return statearr_15776;
})();
var statearr_15777_15799 = state_15773__$1;
(statearr_15777_15799[(2)] = null);

(statearr_15777_15799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (4))){
var inst_15750 = (state_15773[(7)]);
var inst_15753 = cljs.core.first.call(null,inst_15750);
var state_15773__$1 = state_15773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15773__$1,(7),ch,inst_15753);
} else {
if((state_val_15774 === (13))){
var inst_15767 = (state_15773[(2)]);
var state_15773__$1 = state_15773;
var statearr_15778_15800 = state_15773__$1;
(statearr_15778_15800[(2)] = inst_15767);

(statearr_15778_15800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (6))){
var inst_15758 = (state_15773[(2)]);
var state_15773__$1 = state_15773;
if(cljs.core.truth_(inst_15758)){
var statearr_15779_15801 = state_15773__$1;
(statearr_15779_15801[(1)] = (8));

} else {
var statearr_15780_15802 = state_15773__$1;
(statearr_15780_15802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (3))){
var inst_15771 = (state_15773[(2)]);
var state_15773__$1 = state_15773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15773__$1,inst_15771);
} else {
if((state_val_15774 === (12))){
var state_15773__$1 = state_15773;
var statearr_15781_15803 = state_15773__$1;
(statearr_15781_15803[(2)] = null);

(statearr_15781_15803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (2))){
var inst_15750 = (state_15773[(7)]);
var state_15773__$1 = state_15773;
if(cljs.core.truth_(inst_15750)){
var statearr_15782_15804 = state_15773__$1;
(statearr_15782_15804[(1)] = (4));

} else {
var statearr_15783_15805 = state_15773__$1;
(statearr_15783_15805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (11))){
var inst_15764 = cljs.core.async.close_BANG_.call(null,ch);
var state_15773__$1 = state_15773;
var statearr_15784_15806 = state_15773__$1;
(statearr_15784_15806[(2)] = inst_15764);

(statearr_15784_15806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (9))){
var state_15773__$1 = state_15773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15785_15807 = state_15773__$1;
(statearr_15785_15807[(1)] = (11));

} else {
var statearr_15786_15808 = state_15773__$1;
(statearr_15786_15808[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (5))){
var inst_15750 = (state_15773[(7)]);
var state_15773__$1 = state_15773;
var statearr_15787_15809 = state_15773__$1;
(statearr_15787_15809[(2)] = inst_15750);

(statearr_15787_15809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (10))){
var inst_15769 = (state_15773[(2)]);
var state_15773__$1 = state_15773;
var statearr_15788_15810 = state_15773__$1;
(statearr_15788_15810[(2)] = inst_15769);

(statearr_15788_15810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15774 === (8))){
var inst_15750 = (state_15773[(7)]);
var inst_15760 = cljs.core.next.call(null,inst_15750);
var inst_15750__$1 = inst_15760;
var state_15773__$1 = (function (){var statearr_15789 = state_15773;
(statearr_15789[(7)] = inst_15750__$1);

return statearr_15789;
})();
var statearr_15790_15811 = state_15773__$1;
(statearr_15790_15811[(2)] = null);

(statearr_15790_15811[(1)] = (2));


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
var statearr_15794 = [null,null,null,null,null,null,null,null];
(statearr_15794[(0)] = state_machine__7249__auto__);

(statearr_15794[(1)] = (1));

return statearr_15794;
});
var state_machine__7249__auto____1 = (function (state_15773){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15795){if((e15795 instanceof Object)){
var ex__7252__auto__ = e15795;
var statearr_15796_15812 = state_15773;
(statearr_15796_15812[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15813 = state_15773;
state_15773 = G__15813;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15773){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15797 = f__7305__auto__.call(null);
(statearr_15797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15797;
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

cljs.core.async.Mux = (function (){var obj15815 = {};
return obj15815;
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


cljs.core.async.Mult = (function (){var obj15817 = {};
return obj15817;
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
if(typeof cljs.core.async.t16039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16039 = (function (cs,ch,mult,meta16040){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16040 = meta16040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16039.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16041){
var self__ = this;
var _16041__$1 = this;
return self__.meta16040;
});})(cs))
;

cljs.core.async.t16039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16041,meta16040__$1){
var self__ = this;
var _16041__$1 = this;
return (new cljs.core.async.t16039(self__.cs,self__.ch,self__.mult,meta16040__$1));
});})(cs))
;

cljs.core.async.t16039.cljs$lang$type = true;

cljs.core.async.t16039.cljs$lang$ctorStr = "cljs.core.async/t16039";

cljs.core.async.t16039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16039");
});})(cs))
;

cljs.core.async.__GT_t16039 = ((function (cs){
return (function __GT_t16039(cs__$1,ch__$1,mult__$1,meta16040){
return (new cljs.core.async.t16039(cs__$1,ch__$1,mult__$1,meta16040));
});})(cs))
;

}

return (new cljs.core.async.t16039(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___16260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16260,cs,m,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16260,cs,m,dchan,dctr,done){
return (function (state_16172){
var state_val_16173 = (state_16172[(1)]);
if((state_val_16173 === (7))){
var inst_16168 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16174_16261 = state_16172__$1;
(statearr_16174_16261[(2)] = inst_16168);

(statearr_16174_16261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (20))){
var inst_16073 = (state_16172[(7)]);
var inst_16083 = cljs.core.first.call(null,inst_16073);
var inst_16084 = cljs.core.nth.call(null,inst_16083,(0),null);
var inst_16085 = cljs.core.nth.call(null,inst_16083,(1),null);
var state_16172__$1 = (function (){var statearr_16175 = state_16172;
(statearr_16175[(8)] = inst_16084);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16085)){
var statearr_16176_16262 = state_16172__$1;
(statearr_16176_16262[(1)] = (22));

} else {
var statearr_16177_16263 = state_16172__$1;
(statearr_16177_16263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (27))){
var inst_16115 = (state_16172[(9)]);
var inst_16113 = (state_16172[(10)]);
var inst_16120 = (state_16172[(11)]);
var inst_16044 = (state_16172[(12)]);
var inst_16120__$1 = cljs.core._nth.call(null,inst_16113,inst_16115);
var inst_16121 = cljs.core.async.put_BANG_.call(null,inst_16120__$1,inst_16044,done);
var state_16172__$1 = (function (){var statearr_16178 = state_16172;
(statearr_16178[(11)] = inst_16120__$1);

return statearr_16178;
})();
if(cljs.core.truth_(inst_16121)){
var statearr_16179_16264 = state_16172__$1;
(statearr_16179_16264[(1)] = (30));

} else {
var statearr_16180_16265 = state_16172__$1;
(statearr_16180_16265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (1))){
var state_16172__$1 = state_16172;
var statearr_16181_16266 = state_16172__$1;
(statearr_16181_16266[(2)] = null);

(statearr_16181_16266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (24))){
var inst_16073 = (state_16172[(7)]);
var inst_16090 = (state_16172[(2)]);
var inst_16091 = cljs.core.next.call(null,inst_16073);
var inst_16053 = inst_16091;
var inst_16054 = null;
var inst_16055 = (0);
var inst_16056 = (0);
var state_16172__$1 = (function (){var statearr_16182 = state_16172;
(statearr_16182[(13)] = inst_16055);

(statearr_16182[(14)] = inst_16053);

(statearr_16182[(15)] = inst_16090);

(statearr_16182[(16)] = inst_16054);

(statearr_16182[(17)] = inst_16056);

return statearr_16182;
})();
var statearr_16183_16267 = state_16172__$1;
(statearr_16183_16267[(2)] = null);

(statearr_16183_16267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (39))){
var state_16172__$1 = state_16172;
var statearr_16187_16268 = state_16172__$1;
(statearr_16187_16268[(2)] = null);

(statearr_16187_16268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (4))){
var inst_16044 = (state_16172[(12)]);
var inst_16044__$1 = (state_16172[(2)]);
var inst_16045 = (inst_16044__$1 == null);
var state_16172__$1 = (function (){var statearr_16188 = state_16172;
(statearr_16188[(12)] = inst_16044__$1);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16045)){
var statearr_16189_16269 = state_16172__$1;
(statearr_16189_16269[(1)] = (5));

} else {
var statearr_16190_16270 = state_16172__$1;
(statearr_16190_16270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (15))){
var inst_16055 = (state_16172[(13)]);
var inst_16053 = (state_16172[(14)]);
var inst_16054 = (state_16172[(16)]);
var inst_16056 = (state_16172[(17)]);
var inst_16069 = (state_16172[(2)]);
var inst_16070 = (inst_16056 + (1));
var tmp16184 = inst_16055;
var tmp16185 = inst_16053;
var tmp16186 = inst_16054;
var inst_16053__$1 = tmp16185;
var inst_16054__$1 = tmp16186;
var inst_16055__$1 = tmp16184;
var inst_16056__$1 = inst_16070;
var state_16172__$1 = (function (){var statearr_16191 = state_16172;
(statearr_16191[(13)] = inst_16055__$1);

(statearr_16191[(14)] = inst_16053__$1);

(statearr_16191[(16)] = inst_16054__$1);

(statearr_16191[(18)] = inst_16069);

(statearr_16191[(17)] = inst_16056__$1);

return statearr_16191;
})();
var statearr_16192_16271 = state_16172__$1;
(statearr_16192_16271[(2)] = null);

(statearr_16192_16271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (21))){
var inst_16094 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16196_16272 = state_16172__$1;
(statearr_16196_16272[(2)] = inst_16094);

(statearr_16196_16272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (31))){
var inst_16120 = (state_16172[(11)]);
var inst_16124 = done.call(null,null);
var inst_16125 = cljs.core.async.untap_STAR_.call(null,m,inst_16120);
var state_16172__$1 = (function (){var statearr_16197 = state_16172;
(statearr_16197[(19)] = inst_16124);

return statearr_16197;
})();
var statearr_16198_16273 = state_16172__$1;
(statearr_16198_16273[(2)] = inst_16125);

(statearr_16198_16273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (32))){
var inst_16112 = (state_16172[(20)]);
var inst_16115 = (state_16172[(9)]);
var inst_16113 = (state_16172[(10)]);
var inst_16114 = (state_16172[(21)]);
var inst_16127 = (state_16172[(2)]);
var inst_16128 = (inst_16115 + (1));
var tmp16193 = inst_16112;
var tmp16194 = inst_16113;
var tmp16195 = inst_16114;
var inst_16112__$1 = tmp16193;
var inst_16113__$1 = tmp16194;
var inst_16114__$1 = tmp16195;
var inst_16115__$1 = inst_16128;
var state_16172__$1 = (function (){var statearr_16199 = state_16172;
(statearr_16199[(20)] = inst_16112__$1);

(statearr_16199[(9)] = inst_16115__$1);

(statearr_16199[(10)] = inst_16113__$1);

(statearr_16199[(22)] = inst_16127);

(statearr_16199[(21)] = inst_16114__$1);

return statearr_16199;
})();
var statearr_16200_16274 = state_16172__$1;
(statearr_16200_16274[(2)] = null);

(statearr_16200_16274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (40))){
var inst_16140 = (state_16172[(23)]);
var inst_16144 = done.call(null,null);
var inst_16145 = cljs.core.async.untap_STAR_.call(null,m,inst_16140);
var state_16172__$1 = (function (){var statearr_16201 = state_16172;
(statearr_16201[(24)] = inst_16144);

return statearr_16201;
})();
var statearr_16202_16275 = state_16172__$1;
(statearr_16202_16275[(2)] = inst_16145);

(statearr_16202_16275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (33))){
var inst_16131 = (state_16172[(25)]);
var inst_16133 = cljs.core.chunked_seq_QMARK_.call(null,inst_16131);
var state_16172__$1 = state_16172;
if(inst_16133){
var statearr_16203_16276 = state_16172__$1;
(statearr_16203_16276[(1)] = (36));

} else {
var statearr_16204_16277 = state_16172__$1;
(statearr_16204_16277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (13))){
var inst_16063 = (state_16172[(26)]);
var inst_16066 = cljs.core.async.close_BANG_.call(null,inst_16063);
var state_16172__$1 = state_16172;
var statearr_16205_16278 = state_16172__$1;
(statearr_16205_16278[(2)] = inst_16066);

(statearr_16205_16278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (22))){
var inst_16084 = (state_16172[(8)]);
var inst_16087 = cljs.core.async.close_BANG_.call(null,inst_16084);
var state_16172__$1 = state_16172;
var statearr_16206_16279 = state_16172__$1;
(statearr_16206_16279[(2)] = inst_16087);

(statearr_16206_16279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (36))){
var inst_16131 = (state_16172[(25)]);
var inst_16135 = cljs.core.chunk_first.call(null,inst_16131);
var inst_16136 = cljs.core.chunk_rest.call(null,inst_16131);
var inst_16137 = cljs.core.count.call(null,inst_16135);
var inst_16112 = inst_16136;
var inst_16113 = inst_16135;
var inst_16114 = inst_16137;
var inst_16115 = (0);
var state_16172__$1 = (function (){var statearr_16207 = state_16172;
(statearr_16207[(20)] = inst_16112);

(statearr_16207[(9)] = inst_16115);

(statearr_16207[(10)] = inst_16113);

(statearr_16207[(21)] = inst_16114);

return statearr_16207;
})();
var statearr_16208_16280 = state_16172__$1;
(statearr_16208_16280[(2)] = null);

(statearr_16208_16280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (41))){
var inst_16131 = (state_16172[(25)]);
var inst_16147 = (state_16172[(2)]);
var inst_16148 = cljs.core.next.call(null,inst_16131);
var inst_16112 = inst_16148;
var inst_16113 = null;
var inst_16114 = (0);
var inst_16115 = (0);
var state_16172__$1 = (function (){var statearr_16209 = state_16172;
(statearr_16209[(20)] = inst_16112);

(statearr_16209[(9)] = inst_16115);

(statearr_16209[(10)] = inst_16113);

(statearr_16209[(27)] = inst_16147);

(statearr_16209[(21)] = inst_16114);

return statearr_16209;
})();
var statearr_16210_16281 = state_16172__$1;
(statearr_16210_16281[(2)] = null);

(statearr_16210_16281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (43))){
var state_16172__$1 = state_16172;
var statearr_16211_16282 = state_16172__$1;
(statearr_16211_16282[(2)] = null);

(statearr_16211_16282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (29))){
var inst_16156 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16212_16283 = state_16172__$1;
(statearr_16212_16283[(2)] = inst_16156);

(statearr_16212_16283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (44))){
var inst_16165 = (state_16172[(2)]);
var state_16172__$1 = (function (){var statearr_16213 = state_16172;
(statearr_16213[(28)] = inst_16165);

return statearr_16213;
})();
var statearr_16214_16284 = state_16172__$1;
(statearr_16214_16284[(2)] = null);

(statearr_16214_16284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (6))){
var inst_16104 = (state_16172[(29)]);
var inst_16103 = cljs.core.deref.call(null,cs);
var inst_16104__$1 = cljs.core.keys.call(null,inst_16103);
var inst_16105 = cljs.core.count.call(null,inst_16104__$1);
var inst_16106 = cljs.core.reset_BANG_.call(null,dctr,inst_16105);
var inst_16111 = cljs.core.seq.call(null,inst_16104__$1);
var inst_16112 = inst_16111;
var inst_16113 = null;
var inst_16114 = (0);
var inst_16115 = (0);
var state_16172__$1 = (function (){var statearr_16215 = state_16172;
(statearr_16215[(29)] = inst_16104__$1);

(statearr_16215[(20)] = inst_16112);

(statearr_16215[(30)] = inst_16106);

(statearr_16215[(9)] = inst_16115);

(statearr_16215[(10)] = inst_16113);

(statearr_16215[(21)] = inst_16114);

return statearr_16215;
})();
var statearr_16216_16285 = state_16172__$1;
(statearr_16216_16285[(2)] = null);

(statearr_16216_16285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (28))){
var inst_16112 = (state_16172[(20)]);
var inst_16131 = (state_16172[(25)]);
var inst_16131__$1 = cljs.core.seq.call(null,inst_16112);
var state_16172__$1 = (function (){var statearr_16217 = state_16172;
(statearr_16217[(25)] = inst_16131__$1);

return statearr_16217;
})();
if(inst_16131__$1){
var statearr_16218_16286 = state_16172__$1;
(statearr_16218_16286[(1)] = (33));

} else {
var statearr_16219_16287 = state_16172__$1;
(statearr_16219_16287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (25))){
var inst_16115 = (state_16172[(9)]);
var inst_16114 = (state_16172[(21)]);
var inst_16117 = (inst_16115 < inst_16114);
var inst_16118 = inst_16117;
var state_16172__$1 = state_16172;
if(cljs.core.truth_(inst_16118)){
var statearr_16220_16288 = state_16172__$1;
(statearr_16220_16288[(1)] = (27));

} else {
var statearr_16221_16289 = state_16172__$1;
(statearr_16221_16289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (34))){
var state_16172__$1 = state_16172;
var statearr_16222_16290 = state_16172__$1;
(statearr_16222_16290[(2)] = null);

(statearr_16222_16290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (17))){
var state_16172__$1 = state_16172;
var statearr_16223_16291 = state_16172__$1;
(statearr_16223_16291[(2)] = null);

(statearr_16223_16291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (3))){
var inst_16170 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16172__$1,inst_16170);
} else {
if((state_val_16173 === (12))){
var inst_16099 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16224_16292 = state_16172__$1;
(statearr_16224_16292[(2)] = inst_16099);

(statearr_16224_16292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (2))){
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16172__$1,(4),ch);
} else {
if((state_val_16173 === (23))){
var state_16172__$1 = state_16172;
var statearr_16225_16293 = state_16172__$1;
(statearr_16225_16293[(2)] = null);

(statearr_16225_16293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (35))){
var inst_16154 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16226_16294 = state_16172__$1;
(statearr_16226_16294[(2)] = inst_16154);

(statearr_16226_16294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (19))){
var inst_16073 = (state_16172[(7)]);
var inst_16077 = cljs.core.chunk_first.call(null,inst_16073);
var inst_16078 = cljs.core.chunk_rest.call(null,inst_16073);
var inst_16079 = cljs.core.count.call(null,inst_16077);
var inst_16053 = inst_16078;
var inst_16054 = inst_16077;
var inst_16055 = inst_16079;
var inst_16056 = (0);
var state_16172__$1 = (function (){var statearr_16227 = state_16172;
(statearr_16227[(13)] = inst_16055);

(statearr_16227[(14)] = inst_16053);

(statearr_16227[(16)] = inst_16054);

(statearr_16227[(17)] = inst_16056);

return statearr_16227;
})();
var statearr_16228_16295 = state_16172__$1;
(statearr_16228_16295[(2)] = null);

(statearr_16228_16295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (11))){
var inst_16053 = (state_16172[(14)]);
var inst_16073 = (state_16172[(7)]);
var inst_16073__$1 = cljs.core.seq.call(null,inst_16053);
var state_16172__$1 = (function (){var statearr_16229 = state_16172;
(statearr_16229[(7)] = inst_16073__$1);

return statearr_16229;
})();
if(inst_16073__$1){
var statearr_16230_16296 = state_16172__$1;
(statearr_16230_16296[(1)] = (16));

} else {
var statearr_16231_16297 = state_16172__$1;
(statearr_16231_16297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (9))){
var inst_16101 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16232_16298 = state_16172__$1;
(statearr_16232_16298[(2)] = inst_16101);

(statearr_16232_16298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (5))){
var inst_16051 = cljs.core.deref.call(null,cs);
var inst_16052 = cljs.core.seq.call(null,inst_16051);
var inst_16053 = inst_16052;
var inst_16054 = null;
var inst_16055 = (0);
var inst_16056 = (0);
var state_16172__$1 = (function (){var statearr_16233 = state_16172;
(statearr_16233[(13)] = inst_16055);

(statearr_16233[(14)] = inst_16053);

(statearr_16233[(16)] = inst_16054);

(statearr_16233[(17)] = inst_16056);

return statearr_16233;
})();
var statearr_16234_16299 = state_16172__$1;
(statearr_16234_16299[(2)] = null);

(statearr_16234_16299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (14))){
var state_16172__$1 = state_16172;
var statearr_16235_16300 = state_16172__$1;
(statearr_16235_16300[(2)] = null);

(statearr_16235_16300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (45))){
var inst_16162 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16236_16301 = state_16172__$1;
(statearr_16236_16301[(2)] = inst_16162);

(statearr_16236_16301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (26))){
var inst_16104 = (state_16172[(29)]);
var inst_16158 = (state_16172[(2)]);
var inst_16159 = cljs.core.seq.call(null,inst_16104);
var state_16172__$1 = (function (){var statearr_16237 = state_16172;
(statearr_16237[(31)] = inst_16158);

return statearr_16237;
})();
if(inst_16159){
var statearr_16238_16302 = state_16172__$1;
(statearr_16238_16302[(1)] = (42));

} else {
var statearr_16239_16303 = state_16172__$1;
(statearr_16239_16303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (16))){
var inst_16073 = (state_16172[(7)]);
var inst_16075 = cljs.core.chunked_seq_QMARK_.call(null,inst_16073);
var state_16172__$1 = state_16172;
if(inst_16075){
var statearr_16240_16304 = state_16172__$1;
(statearr_16240_16304[(1)] = (19));

} else {
var statearr_16241_16305 = state_16172__$1;
(statearr_16241_16305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (38))){
var inst_16151 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16242_16306 = state_16172__$1;
(statearr_16242_16306[(2)] = inst_16151);

(statearr_16242_16306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (30))){
var state_16172__$1 = state_16172;
var statearr_16243_16307 = state_16172__$1;
(statearr_16243_16307[(2)] = null);

(statearr_16243_16307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (10))){
var inst_16054 = (state_16172[(16)]);
var inst_16056 = (state_16172[(17)]);
var inst_16062 = cljs.core._nth.call(null,inst_16054,inst_16056);
var inst_16063 = cljs.core.nth.call(null,inst_16062,(0),null);
var inst_16064 = cljs.core.nth.call(null,inst_16062,(1),null);
var state_16172__$1 = (function (){var statearr_16244 = state_16172;
(statearr_16244[(26)] = inst_16063);

return statearr_16244;
})();
if(cljs.core.truth_(inst_16064)){
var statearr_16245_16308 = state_16172__$1;
(statearr_16245_16308[(1)] = (13));

} else {
var statearr_16246_16309 = state_16172__$1;
(statearr_16246_16309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (18))){
var inst_16097 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16247_16310 = state_16172__$1;
(statearr_16247_16310[(2)] = inst_16097);

(statearr_16247_16310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (42))){
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16172__$1,(45),dchan);
} else {
if((state_val_16173 === (37))){
var inst_16131 = (state_16172[(25)]);
var inst_16140 = (state_16172[(23)]);
var inst_16044 = (state_16172[(12)]);
var inst_16140__$1 = cljs.core.first.call(null,inst_16131);
var inst_16141 = cljs.core.async.put_BANG_.call(null,inst_16140__$1,inst_16044,done);
var state_16172__$1 = (function (){var statearr_16248 = state_16172;
(statearr_16248[(23)] = inst_16140__$1);

return statearr_16248;
})();
if(cljs.core.truth_(inst_16141)){
var statearr_16249_16311 = state_16172__$1;
(statearr_16249_16311[(1)] = (39));

} else {
var statearr_16250_16312 = state_16172__$1;
(statearr_16250_16312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (8))){
var inst_16055 = (state_16172[(13)]);
var inst_16056 = (state_16172[(17)]);
var inst_16058 = (inst_16056 < inst_16055);
var inst_16059 = inst_16058;
var state_16172__$1 = state_16172;
if(cljs.core.truth_(inst_16059)){
var statearr_16251_16313 = state_16172__$1;
(statearr_16251_16313[(1)] = (10));

} else {
var statearr_16252_16314 = state_16172__$1;
(statearr_16252_16314[(1)] = (11));

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
});})(c__7304__auto___16260,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___16260,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16256[(0)] = state_machine__7249__auto__);

(statearr_16256[(1)] = (1));

return statearr_16256;
});
var state_machine__7249__auto____1 = (function (state_16172){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16257){if((e16257 instanceof Object)){
var ex__7252__auto__ = e16257;
var statearr_16258_16315 = state_16172;
(statearr_16258_16315[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16316 = state_16172;
state_16172 = G__16316;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16260,cs,m,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_16259 = f__7305__auto__.call(null);
(statearr_16259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16260);

return statearr_16259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16260,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16318 = {};
return obj16318;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16319){
var map__16324 = p__16319;
var map__16324__$1 = ((cljs.core.seq_QMARK_.call(null,map__16324))?cljs.core.apply.call(null,cljs.core.hash_map,map__16324):map__16324);
var opts = map__16324__$1;
var statearr_16325_16328 = state;
(statearr_16325_16328[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16324,map__16324__$1,opts){
return (function (val){
var statearr_16326_16329 = state;
(statearr_16326_16329[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16324,map__16324__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16327_16330 = state;
(statearr_16327_16330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16319 = null;
if (arguments.length > 3) {
  p__16319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16319);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16331){
var state = cljs.core.first(arglist__16331);
arglist__16331 = cljs.core.next(arglist__16331);
var cont_block = cljs.core.first(arglist__16331);
arglist__16331 = cljs.core.next(arglist__16331);
var ports = cljs.core.first(arglist__16331);
var p__16319 = cljs.core.rest(arglist__16331);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16319);
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
if(typeof cljs.core.async.t16451 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16451 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16452){
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
this.meta16452 = meta16452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16451.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16451.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16451.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16453){
var self__ = this;
var _16453__$1 = this;
return self__.meta16452;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16453,meta16452__$1){
var self__ = this;
var _16453__$1 = this;
return (new cljs.core.async.t16451(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16452__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16451.cljs$lang$type = true;

cljs.core.async.t16451.cljs$lang$ctorStr = "cljs.core.async/t16451";

cljs.core.async.t16451.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16451");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16451 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16451(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16452){
return (new cljs.core.async.t16451(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16452));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16451(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16523){
var state_val_16524 = (state_16523[(1)]);
if((state_val_16524 === (7))){
var inst_16467 = (state_16523[(7)]);
var inst_16472 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16467);
var state_16523__$1 = state_16523;
var statearr_16525_16571 = state_16523__$1;
(statearr_16525_16571[(2)] = inst_16472);

(statearr_16525_16571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (20))){
var inst_16482 = (state_16523[(8)]);
var state_16523__$1 = state_16523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16523__$1,(23),out,inst_16482);
} else {
if((state_val_16524 === (1))){
var inst_16457 = (state_16523[(9)]);
var inst_16457__$1 = calc_state.call(null);
var inst_16458 = cljs.core.seq_QMARK_.call(null,inst_16457__$1);
var state_16523__$1 = (function (){var statearr_16526 = state_16523;
(statearr_16526[(9)] = inst_16457__$1);

return statearr_16526;
})();
if(inst_16458){
var statearr_16527_16572 = state_16523__$1;
(statearr_16527_16572[(1)] = (2));

} else {
var statearr_16528_16573 = state_16523__$1;
(statearr_16528_16573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (24))){
var inst_16475 = (state_16523[(10)]);
var inst_16467 = inst_16475;
var state_16523__$1 = (function (){var statearr_16529 = state_16523;
(statearr_16529[(7)] = inst_16467);

return statearr_16529;
})();
var statearr_16530_16574 = state_16523__$1;
(statearr_16530_16574[(2)] = null);

(statearr_16530_16574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (4))){
var inst_16457 = (state_16523[(9)]);
var inst_16463 = (state_16523[(2)]);
var inst_16464 = cljs.core.get.call(null,inst_16463,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16465 = cljs.core.get.call(null,inst_16463,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16466 = cljs.core.get.call(null,inst_16463,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16467 = inst_16457;
var state_16523__$1 = (function (){var statearr_16531 = state_16523;
(statearr_16531[(11)] = inst_16466);

(statearr_16531[(7)] = inst_16467);

(statearr_16531[(12)] = inst_16464);

(statearr_16531[(13)] = inst_16465);

return statearr_16531;
})();
var statearr_16532_16575 = state_16523__$1;
(statearr_16532_16575[(2)] = null);

(statearr_16532_16575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (15))){
var state_16523__$1 = state_16523;
var statearr_16533_16576 = state_16523__$1;
(statearr_16533_16576[(2)] = null);

(statearr_16533_16576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (21))){
var inst_16475 = (state_16523[(10)]);
var inst_16467 = inst_16475;
var state_16523__$1 = (function (){var statearr_16534 = state_16523;
(statearr_16534[(7)] = inst_16467);

return statearr_16534;
})();
var statearr_16535_16577 = state_16523__$1;
(statearr_16535_16577[(2)] = null);

(statearr_16535_16577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (13))){
var inst_16519 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
var statearr_16536_16578 = state_16523__$1;
(statearr_16536_16578[(2)] = inst_16519);

(statearr_16536_16578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (22))){
var inst_16517 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
var statearr_16537_16579 = state_16523__$1;
(statearr_16537_16579[(2)] = inst_16517);

(statearr_16537_16579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (6))){
var inst_16521 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16523__$1,inst_16521);
} else {
if((state_val_16524 === (25))){
var state_16523__$1 = state_16523;
var statearr_16538_16580 = state_16523__$1;
(statearr_16538_16580[(2)] = null);

(statearr_16538_16580[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (17))){
var inst_16497 = (state_16523[(14)]);
var state_16523__$1 = state_16523;
var statearr_16539_16581 = state_16523__$1;
(statearr_16539_16581[(2)] = inst_16497);

(statearr_16539_16581[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (3))){
var inst_16457 = (state_16523[(9)]);
var state_16523__$1 = state_16523;
var statearr_16540_16582 = state_16523__$1;
(statearr_16540_16582[(2)] = inst_16457);

(statearr_16540_16582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (12))){
var inst_16497 = (state_16523[(14)]);
var inst_16478 = (state_16523[(15)]);
var inst_16483 = (state_16523[(16)]);
var inst_16497__$1 = inst_16478.call(null,inst_16483);
var state_16523__$1 = (function (){var statearr_16541 = state_16523;
(statearr_16541[(14)] = inst_16497__$1);

return statearr_16541;
})();
if(cljs.core.truth_(inst_16497__$1)){
var statearr_16542_16583 = state_16523__$1;
(statearr_16542_16583[(1)] = (17));

} else {
var statearr_16543_16584 = state_16523__$1;
(statearr_16543_16584[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (2))){
var inst_16457 = (state_16523[(9)]);
var inst_16460 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16457);
var state_16523__$1 = state_16523;
var statearr_16544_16585 = state_16523__$1;
(statearr_16544_16585[(2)] = inst_16460);

(statearr_16544_16585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (23))){
var inst_16508 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
if(cljs.core.truth_(inst_16508)){
var statearr_16545_16586 = state_16523__$1;
(statearr_16545_16586[(1)] = (24));

} else {
var statearr_16546_16587 = state_16523__$1;
(statearr_16546_16587[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (19))){
var inst_16505 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
if(cljs.core.truth_(inst_16505)){
var statearr_16547_16588 = state_16523__$1;
(statearr_16547_16588[(1)] = (20));

} else {
var statearr_16548_16589 = state_16523__$1;
(statearr_16548_16589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (11))){
var inst_16482 = (state_16523[(8)]);
var inst_16488 = (inst_16482 == null);
var state_16523__$1 = state_16523;
if(cljs.core.truth_(inst_16488)){
var statearr_16549_16590 = state_16523__$1;
(statearr_16549_16590[(1)] = (14));

} else {
var statearr_16550_16591 = state_16523__$1;
(statearr_16550_16591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (9))){
var inst_16475 = (state_16523[(10)]);
var inst_16475__$1 = (state_16523[(2)]);
var inst_16476 = cljs.core.get.call(null,inst_16475__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16477 = cljs.core.get.call(null,inst_16475__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16478 = cljs.core.get.call(null,inst_16475__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16523__$1 = (function (){var statearr_16551 = state_16523;
(statearr_16551[(10)] = inst_16475__$1);

(statearr_16551[(15)] = inst_16478);

(statearr_16551[(17)] = inst_16477);

return statearr_16551;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16523__$1,(10),inst_16476);
} else {
if((state_val_16524 === (5))){
var inst_16467 = (state_16523[(7)]);
var inst_16470 = cljs.core.seq_QMARK_.call(null,inst_16467);
var state_16523__$1 = state_16523;
if(inst_16470){
var statearr_16552_16592 = state_16523__$1;
(statearr_16552_16592[(1)] = (7));

} else {
var statearr_16553_16593 = state_16523__$1;
(statearr_16553_16593[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (14))){
var inst_16483 = (state_16523[(16)]);
var inst_16490 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16483);
var state_16523__$1 = state_16523;
var statearr_16554_16594 = state_16523__$1;
(statearr_16554_16594[(2)] = inst_16490);

(statearr_16554_16594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (26))){
var inst_16513 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
var statearr_16555_16595 = state_16523__$1;
(statearr_16555_16595[(2)] = inst_16513);

(statearr_16555_16595[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (16))){
var inst_16493 = (state_16523[(2)]);
var inst_16494 = calc_state.call(null);
var inst_16467 = inst_16494;
var state_16523__$1 = (function (){var statearr_16556 = state_16523;
(statearr_16556[(7)] = inst_16467);

(statearr_16556[(18)] = inst_16493);

return statearr_16556;
})();
var statearr_16557_16596 = state_16523__$1;
(statearr_16557_16596[(2)] = null);

(statearr_16557_16596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (10))){
var inst_16482 = (state_16523[(8)]);
var inst_16483 = (state_16523[(16)]);
var inst_16481 = (state_16523[(2)]);
var inst_16482__$1 = cljs.core.nth.call(null,inst_16481,(0),null);
var inst_16483__$1 = cljs.core.nth.call(null,inst_16481,(1),null);
var inst_16484 = (inst_16482__$1 == null);
var inst_16485 = cljs.core._EQ_.call(null,inst_16483__$1,change);
var inst_16486 = (inst_16484) || (inst_16485);
var state_16523__$1 = (function (){var statearr_16558 = state_16523;
(statearr_16558[(8)] = inst_16482__$1);

(statearr_16558[(16)] = inst_16483__$1);

return statearr_16558;
})();
if(cljs.core.truth_(inst_16486)){
var statearr_16559_16597 = state_16523__$1;
(statearr_16559_16597[(1)] = (11));

} else {
var statearr_16560_16598 = state_16523__$1;
(statearr_16560_16598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (18))){
var inst_16478 = (state_16523[(15)]);
var inst_16477 = (state_16523[(17)]);
var inst_16483 = (state_16523[(16)]);
var inst_16500 = cljs.core.empty_QMARK_.call(null,inst_16478);
var inst_16501 = inst_16477.call(null,inst_16483);
var inst_16502 = cljs.core.not.call(null,inst_16501);
var inst_16503 = (inst_16500) && (inst_16502);
var state_16523__$1 = state_16523;
var statearr_16561_16599 = state_16523__$1;
(statearr_16561_16599[(2)] = inst_16503);

(statearr_16561_16599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (8))){
var inst_16467 = (state_16523[(7)]);
var state_16523__$1 = state_16523;
var statearr_16562_16600 = state_16523__$1;
(statearr_16562_16600[(2)] = inst_16467);

(statearr_16562_16600[(1)] = (9));


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
});})(c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16566[(0)] = state_machine__7249__auto__);

(statearr_16566[(1)] = (1));

return statearr_16566;
});
var state_machine__7249__auto____1 = (function (state_16523){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16567){if((e16567 instanceof Object)){
var ex__7252__auto__ = e16567;
var statearr_16568_16601 = state_16523;
(statearr_16568_16601[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16602 = state_16523;
state_16523 = G__16602;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16523){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7306__auto__ = (function (){var statearr_16569 = f__7305__auto__.call(null);
(statearr_16569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16570);

return statearr_16569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16604 = {};
return obj16604;
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
return (function (p1__16605_SHARP_){
if(cljs.core.truth_(p1__16605_SHARP_.call(null,topic))){
return p1__16605_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16605_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16728 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16728 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16729){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16729 = meta16729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16728.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16728.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16728.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16730){
var self__ = this;
var _16730__$1 = this;
return self__.meta16729;
});})(mults,ensure_mult))
;

cljs.core.async.t16728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16730,meta16729__$1){
var self__ = this;
var _16730__$1 = this;
return (new cljs.core.async.t16728(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16729__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16728.cljs$lang$type = true;

cljs.core.async.t16728.cljs$lang$ctorStr = "cljs.core.async/t16728";

cljs.core.async.t16728.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16728");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16728 = ((function (mults,ensure_mult){
return (function __GT_t16728(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16729){
return (new cljs.core.async.t16728(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16729));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16728(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16850,mults,ensure_mult,p){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16850,mults,ensure_mult,p){
return (function (state_16802){
var state_val_16803 = (state_16802[(1)]);
if((state_val_16803 === (7))){
var inst_16798 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16804_16851 = state_16802__$1;
(statearr_16804_16851[(2)] = inst_16798);

(statearr_16804_16851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (20))){
var state_16802__$1 = state_16802;
var statearr_16805_16852 = state_16802__$1;
(statearr_16805_16852[(2)] = null);

(statearr_16805_16852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (1))){
var state_16802__$1 = state_16802;
var statearr_16806_16853 = state_16802__$1;
(statearr_16806_16853[(2)] = null);

(statearr_16806_16853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (24))){
var inst_16781 = (state_16802[(7)]);
var inst_16790 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16781);
var state_16802__$1 = state_16802;
var statearr_16807_16854 = state_16802__$1;
(statearr_16807_16854[(2)] = inst_16790);

(statearr_16807_16854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (4))){
var inst_16733 = (state_16802[(8)]);
var inst_16733__$1 = (state_16802[(2)]);
var inst_16734 = (inst_16733__$1 == null);
var state_16802__$1 = (function (){var statearr_16808 = state_16802;
(statearr_16808[(8)] = inst_16733__$1);

return statearr_16808;
})();
if(cljs.core.truth_(inst_16734)){
var statearr_16809_16855 = state_16802__$1;
(statearr_16809_16855[(1)] = (5));

} else {
var statearr_16810_16856 = state_16802__$1;
(statearr_16810_16856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (15))){
var inst_16775 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16811_16857 = state_16802__$1;
(statearr_16811_16857[(2)] = inst_16775);

(statearr_16811_16857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (21))){
var inst_16795 = (state_16802[(2)]);
var state_16802__$1 = (function (){var statearr_16812 = state_16802;
(statearr_16812[(9)] = inst_16795);

return statearr_16812;
})();
var statearr_16813_16858 = state_16802__$1;
(statearr_16813_16858[(2)] = null);

(statearr_16813_16858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (13))){
var inst_16757 = (state_16802[(10)]);
var inst_16759 = cljs.core.chunked_seq_QMARK_.call(null,inst_16757);
var state_16802__$1 = state_16802;
if(inst_16759){
var statearr_16814_16859 = state_16802__$1;
(statearr_16814_16859[(1)] = (16));

} else {
var statearr_16815_16860 = state_16802__$1;
(statearr_16815_16860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (22))){
var inst_16787 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
if(cljs.core.truth_(inst_16787)){
var statearr_16816_16861 = state_16802__$1;
(statearr_16816_16861[(1)] = (23));

} else {
var statearr_16817_16862 = state_16802__$1;
(statearr_16817_16862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (6))){
var inst_16733 = (state_16802[(8)]);
var inst_16783 = (state_16802[(11)]);
var inst_16781 = (state_16802[(7)]);
var inst_16781__$1 = topic_fn.call(null,inst_16733);
var inst_16782 = cljs.core.deref.call(null,mults);
var inst_16783__$1 = cljs.core.get.call(null,inst_16782,inst_16781__$1);
var state_16802__$1 = (function (){var statearr_16818 = state_16802;
(statearr_16818[(11)] = inst_16783__$1);

(statearr_16818[(7)] = inst_16781__$1);

return statearr_16818;
})();
if(cljs.core.truth_(inst_16783__$1)){
var statearr_16819_16863 = state_16802__$1;
(statearr_16819_16863[(1)] = (19));

} else {
var statearr_16820_16864 = state_16802__$1;
(statearr_16820_16864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (25))){
var inst_16792 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16821_16865 = state_16802__$1;
(statearr_16821_16865[(2)] = inst_16792);

(statearr_16821_16865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (17))){
var inst_16757 = (state_16802[(10)]);
var inst_16766 = cljs.core.first.call(null,inst_16757);
var inst_16767 = cljs.core.async.muxch_STAR_.call(null,inst_16766);
var inst_16768 = cljs.core.async.close_BANG_.call(null,inst_16767);
var inst_16769 = cljs.core.next.call(null,inst_16757);
var inst_16743 = inst_16769;
var inst_16744 = null;
var inst_16745 = (0);
var inst_16746 = (0);
var state_16802__$1 = (function (){var statearr_16822 = state_16802;
(statearr_16822[(12)] = inst_16744);

(statearr_16822[(13)] = inst_16746);

(statearr_16822[(14)] = inst_16745);

(statearr_16822[(15)] = inst_16743);

(statearr_16822[(16)] = inst_16768);

return statearr_16822;
})();
var statearr_16823_16866 = state_16802__$1;
(statearr_16823_16866[(2)] = null);

(statearr_16823_16866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (3))){
var inst_16800 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16802__$1,inst_16800);
} else {
if((state_val_16803 === (12))){
var inst_16777 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16824_16867 = state_16802__$1;
(statearr_16824_16867[(2)] = inst_16777);

(statearr_16824_16867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (2))){
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16802__$1,(4),ch);
} else {
if((state_val_16803 === (23))){
var state_16802__$1 = state_16802;
var statearr_16825_16868 = state_16802__$1;
(statearr_16825_16868[(2)] = null);

(statearr_16825_16868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (19))){
var inst_16733 = (state_16802[(8)]);
var inst_16783 = (state_16802[(11)]);
var inst_16785 = cljs.core.async.muxch_STAR_.call(null,inst_16783);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16802__$1,(22),inst_16785,inst_16733);
} else {
if((state_val_16803 === (11))){
var inst_16743 = (state_16802[(15)]);
var inst_16757 = (state_16802[(10)]);
var inst_16757__$1 = cljs.core.seq.call(null,inst_16743);
var state_16802__$1 = (function (){var statearr_16826 = state_16802;
(statearr_16826[(10)] = inst_16757__$1);

return statearr_16826;
})();
if(inst_16757__$1){
var statearr_16827_16869 = state_16802__$1;
(statearr_16827_16869[(1)] = (13));

} else {
var statearr_16828_16870 = state_16802__$1;
(statearr_16828_16870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (9))){
var inst_16779 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16829_16871 = state_16802__$1;
(statearr_16829_16871[(2)] = inst_16779);

(statearr_16829_16871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (5))){
var inst_16740 = cljs.core.deref.call(null,mults);
var inst_16741 = cljs.core.vals.call(null,inst_16740);
var inst_16742 = cljs.core.seq.call(null,inst_16741);
var inst_16743 = inst_16742;
var inst_16744 = null;
var inst_16745 = (0);
var inst_16746 = (0);
var state_16802__$1 = (function (){var statearr_16830 = state_16802;
(statearr_16830[(12)] = inst_16744);

(statearr_16830[(13)] = inst_16746);

(statearr_16830[(14)] = inst_16745);

(statearr_16830[(15)] = inst_16743);

return statearr_16830;
})();
var statearr_16831_16872 = state_16802__$1;
(statearr_16831_16872[(2)] = null);

(statearr_16831_16872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (14))){
var state_16802__$1 = state_16802;
var statearr_16835_16873 = state_16802__$1;
(statearr_16835_16873[(2)] = null);

(statearr_16835_16873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (16))){
var inst_16757 = (state_16802[(10)]);
var inst_16761 = cljs.core.chunk_first.call(null,inst_16757);
var inst_16762 = cljs.core.chunk_rest.call(null,inst_16757);
var inst_16763 = cljs.core.count.call(null,inst_16761);
var inst_16743 = inst_16762;
var inst_16744 = inst_16761;
var inst_16745 = inst_16763;
var inst_16746 = (0);
var state_16802__$1 = (function (){var statearr_16836 = state_16802;
(statearr_16836[(12)] = inst_16744);

(statearr_16836[(13)] = inst_16746);

(statearr_16836[(14)] = inst_16745);

(statearr_16836[(15)] = inst_16743);

return statearr_16836;
})();
var statearr_16837_16874 = state_16802__$1;
(statearr_16837_16874[(2)] = null);

(statearr_16837_16874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (10))){
var inst_16744 = (state_16802[(12)]);
var inst_16746 = (state_16802[(13)]);
var inst_16745 = (state_16802[(14)]);
var inst_16743 = (state_16802[(15)]);
var inst_16751 = cljs.core._nth.call(null,inst_16744,inst_16746);
var inst_16752 = cljs.core.async.muxch_STAR_.call(null,inst_16751);
var inst_16753 = cljs.core.async.close_BANG_.call(null,inst_16752);
var inst_16754 = (inst_16746 + (1));
var tmp16832 = inst_16744;
var tmp16833 = inst_16745;
var tmp16834 = inst_16743;
var inst_16743__$1 = tmp16834;
var inst_16744__$1 = tmp16832;
var inst_16745__$1 = tmp16833;
var inst_16746__$1 = inst_16754;
var state_16802__$1 = (function (){var statearr_16838 = state_16802;
(statearr_16838[(12)] = inst_16744__$1);

(statearr_16838[(13)] = inst_16746__$1);

(statearr_16838[(14)] = inst_16745__$1);

(statearr_16838[(15)] = inst_16743__$1);

(statearr_16838[(17)] = inst_16753);

return statearr_16838;
})();
var statearr_16839_16875 = state_16802__$1;
(statearr_16839_16875[(2)] = null);

(statearr_16839_16875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (18))){
var inst_16772 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16840_16876 = state_16802__$1;
(statearr_16840_16876[(2)] = inst_16772);

(statearr_16840_16876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16803 === (8))){
var inst_16746 = (state_16802[(13)]);
var inst_16745 = (state_16802[(14)]);
var inst_16748 = (inst_16746 < inst_16745);
var inst_16749 = inst_16748;
var state_16802__$1 = state_16802;
if(cljs.core.truth_(inst_16749)){
var statearr_16841_16877 = state_16802__$1;
(statearr_16841_16877[(1)] = (10));

} else {
var statearr_16842_16878 = state_16802__$1;
(statearr_16842_16878[(1)] = (11));

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
});})(c__7304__auto___16850,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7304__auto___16850,mults,ensure_mult,p){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16846[(0)] = state_machine__7249__auto__);

(statearr_16846[(1)] = (1));

return statearr_16846;
});
var state_machine__7249__auto____1 = (function (state_16802){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16847){if((e16847 instanceof Object)){
var ex__7252__auto__ = e16847;
var statearr_16848_16879 = state_16802;
(statearr_16848_16879[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16880 = state_16802;
state_16802 = G__16880;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16802){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16850,mults,ensure_mult,p))
})();
var state__7306__auto__ = (function (){var statearr_16849 = f__7305__auto__.call(null);
(statearr_16849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16850);

return statearr_16849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16850,mults,ensure_mult,p))
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
var c__7304__auto___17017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16987){
var state_val_16988 = (state_16987[(1)]);
if((state_val_16988 === (7))){
var state_16987__$1 = state_16987;
var statearr_16989_17018 = state_16987__$1;
(statearr_16989_17018[(2)] = null);

(statearr_16989_17018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (1))){
var state_16987__$1 = state_16987;
var statearr_16990_17019 = state_16987__$1;
(statearr_16990_17019[(2)] = null);

(statearr_16990_17019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (4))){
var inst_16951 = (state_16987[(7)]);
var inst_16953 = (inst_16951 < cnt);
var state_16987__$1 = state_16987;
if(cljs.core.truth_(inst_16953)){
var statearr_16991_17020 = state_16987__$1;
(statearr_16991_17020[(1)] = (6));

} else {
var statearr_16992_17021 = state_16987__$1;
(statearr_16992_17021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (15))){
var inst_16983 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
var statearr_16993_17022 = state_16987__$1;
(statearr_16993_17022[(2)] = inst_16983);

(statearr_16993_17022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (13))){
var inst_16976 = cljs.core.async.close_BANG_.call(null,out);
var state_16987__$1 = state_16987;
var statearr_16994_17023 = state_16987__$1;
(statearr_16994_17023[(2)] = inst_16976);

(statearr_16994_17023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (6))){
var state_16987__$1 = state_16987;
var statearr_16995_17024 = state_16987__$1;
(statearr_16995_17024[(2)] = null);

(statearr_16995_17024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (3))){
var inst_16985 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16987__$1,inst_16985);
} else {
if((state_val_16988 === (12))){
var inst_16973 = (state_16987[(8)]);
var inst_16973__$1 = (state_16987[(2)]);
var inst_16974 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16973__$1);
var state_16987__$1 = (function (){var statearr_16996 = state_16987;
(statearr_16996[(8)] = inst_16973__$1);

return statearr_16996;
})();
if(cljs.core.truth_(inst_16974)){
var statearr_16997_17025 = state_16987__$1;
(statearr_16997_17025[(1)] = (13));

} else {
var statearr_16998_17026 = state_16987__$1;
(statearr_16998_17026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (2))){
var inst_16950 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16951 = (0);
var state_16987__$1 = (function (){var statearr_16999 = state_16987;
(statearr_16999[(7)] = inst_16951);

(statearr_16999[(9)] = inst_16950);

return statearr_16999;
})();
var statearr_17000_17027 = state_16987__$1;
(statearr_17000_17027[(2)] = null);

(statearr_17000_17027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (11))){
var inst_16951 = (state_16987[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16987,(10),Object,null,(9));
var inst_16960 = chs__$1.call(null,inst_16951);
var inst_16961 = done.call(null,inst_16951);
var inst_16962 = cljs.core.async.take_BANG_.call(null,inst_16960,inst_16961);
var state_16987__$1 = state_16987;
var statearr_17001_17028 = state_16987__$1;
(statearr_17001_17028[(2)] = inst_16962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (9))){
var inst_16951 = (state_16987[(7)]);
var inst_16964 = (state_16987[(2)]);
var inst_16965 = (inst_16951 + (1));
var inst_16951__$1 = inst_16965;
var state_16987__$1 = (function (){var statearr_17002 = state_16987;
(statearr_17002[(7)] = inst_16951__$1);

(statearr_17002[(10)] = inst_16964);

return statearr_17002;
})();
var statearr_17003_17029 = state_16987__$1;
(statearr_17003_17029[(2)] = null);

(statearr_17003_17029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (5))){
var inst_16971 = (state_16987[(2)]);
var state_16987__$1 = (function (){var statearr_17004 = state_16987;
(statearr_17004[(11)] = inst_16971);

return statearr_17004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16987__$1,(12),dchan);
} else {
if((state_val_16988 === (14))){
var inst_16973 = (state_16987[(8)]);
var inst_16978 = cljs.core.apply.call(null,f,inst_16973);
var state_16987__$1 = state_16987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16987__$1,(16),out,inst_16978);
} else {
if((state_val_16988 === (16))){
var inst_16980 = (state_16987[(2)]);
var state_16987__$1 = (function (){var statearr_17005 = state_16987;
(statearr_17005[(12)] = inst_16980);

return statearr_17005;
})();
var statearr_17006_17030 = state_16987__$1;
(statearr_17006_17030[(2)] = null);

(statearr_17006_17030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (10))){
var inst_16955 = (state_16987[(2)]);
var inst_16956 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16987__$1 = (function (){var statearr_17007 = state_16987;
(statearr_17007[(13)] = inst_16955);

return statearr_17007;
})();
var statearr_17008_17031 = state_16987__$1;
(statearr_17008_17031[(2)] = inst_16956);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (8))){
var inst_16969 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
var statearr_17009_17032 = state_16987__$1;
(statearr_17009_17032[(2)] = inst_16969);

(statearr_17009_17032[(1)] = (5));


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
});})(c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17013[(0)] = state_machine__7249__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var state_machine__7249__auto____1 = (function (state_16987){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17014){if((e17014 instanceof Object)){
var ex__7252__auto__ = e17014;
var statearr_17015_17033 = state_16987;
(statearr_17015_17033[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17034 = state_16987;
state_16987 = G__17034;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16987){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_17016 = f__7305__auto__.call(null);
(statearr_17016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17017);

return statearr_17016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17017,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7304__auto___17142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17142,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17142,out){
return (function (state_17118){
var state_val_17119 = (state_17118[(1)]);
if((state_val_17119 === (7))){
var inst_17098 = (state_17118[(7)]);
var inst_17097 = (state_17118[(8)]);
var inst_17097__$1 = (state_17118[(2)]);
var inst_17098__$1 = cljs.core.nth.call(null,inst_17097__$1,(0),null);
var inst_17099 = cljs.core.nth.call(null,inst_17097__$1,(1),null);
var inst_17100 = (inst_17098__$1 == null);
var state_17118__$1 = (function (){var statearr_17120 = state_17118;
(statearr_17120[(7)] = inst_17098__$1);

(statearr_17120[(9)] = inst_17099);

(statearr_17120[(8)] = inst_17097__$1);

return statearr_17120;
})();
if(cljs.core.truth_(inst_17100)){
var statearr_17121_17143 = state_17118__$1;
(statearr_17121_17143[(1)] = (8));

} else {
var statearr_17122_17144 = state_17118__$1;
(statearr_17122_17144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (1))){
var inst_17089 = cljs.core.vec.call(null,chs);
var inst_17090 = inst_17089;
var state_17118__$1 = (function (){var statearr_17123 = state_17118;
(statearr_17123[(10)] = inst_17090);

return statearr_17123;
})();
var statearr_17124_17145 = state_17118__$1;
(statearr_17124_17145[(2)] = null);

(statearr_17124_17145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (4))){
var inst_17090 = (state_17118[(10)]);
var state_17118__$1 = state_17118;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17118__$1,(7),inst_17090);
} else {
if((state_val_17119 === (6))){
var inst_17114 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17125_17146 = state_17118__$1;
(statearr_17125_17146[(2)] = inst_17114);

(statearr_17125_17146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (3))){
var inst_17116 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17118__$1,inst_17116);
} else {
if((state_val_17119 === (2))){
var inst_17090 = (state_17118[(10)]);
var inst_17092 = cljs.core.count.call(null,inst_17090);
var inst_17093 = (inst_17092 > (0));
var state_17118__$1 = state_17118;
if(cljs.core.truth_(inst_17093)){
var statearr_17127_17147 = state_17118__$1;
(statearr_17127_17147[(1)] = (4));

} else {
var statearr_17128_17148 = state_17118__$1;
(statearr_17128_17148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (11))){
var inst_17090 = (state_17118[(10)]);
var inst_17107 = (state_17118[(2)]);
var tmp17126 = inst_17090;
var inst_17090__$1 = tmp17126;
var state_17118__$1 = (function (){var statearr_17129 = state_17118;
(statearr_17129[(11)] = inst_17107);

(statearr_17129[(10)] = inst_17090__$1);

return statearr_17129;
})();
var statearr_17130_17149 = state_17118__$1;
(statearr_17130_17149[(2)] = null);

(statearr_17130_17149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (9))){
var inst_17098 = (state_17118[(7)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17118__$1,(11),out,inst_17098);
} else {
if((state_val_17119 === (5))){
var inst_17112 = cljs.core.async.close_BANG_.call(null,out);
var state_17118__$1 = state_17118;
var statearr_17131_17150 = state_17118__$1;
(statearr_17131_17150[(2)] = inst_17112);

(statearr_17131_17150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (10))){
var inst_17110 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17132_17151 = state_17118__$1;
(statearr_17132_17151[(2)] = inst_17110);

(statearr_17132_17151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (8))){
var inst_17098 = (state_17118[(7)]);
var inst_17099 = (state_17118[(9)]);
var inst_17097 = (state_17118[(8)]);
var inst_17090 = (state_17118[(10)]);
var inst_17102 = (function (){var c = inst_17099;
var v = inst_17098;
var vec__17095 = inst_17097;
var cs = inst_17090;
return ((function (c,v,vec__17095,cs,inst_17098,inst_17099,inst_17097,inst_17090,state_val_17119,c__7304__auto___17142,out){
return (function (p1__17035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17035_SHARP_);
});
;})(c,v,vec__17095,cs,inst_17098,inst_17099,inst_17097,inst_17090,state_val_17119,c__7304__auto___17142,out))
})();
var inst_17103 = cljs.core.filterv.call(null,inst_17102,inst_17090);
var inst_17090__$1 = inst_17103;
var state_17118__$1 = (function (){var statearr_17133 = state_17118;
(statearr_17133[(10)] = inst_17090__$1);

return statearr_17133;
})();
var statearr_17134_17152 = state_17118__$1;
(statearr_17134_17152[(2)] = null);

(statearr_17134_17152[(1)] = (2));


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
});})(c__7304__auto___17142,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17142,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17138[(0)] = state_machine__7249__auto__);

(statearr_17138[(1)] = (1));

return statearr_17138;
});
var state_machine__7249__auto____1 = (function (state_17118){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17139){if((e17139 instanceof Object)){
var ex__7252__auto__ = e17139;
var statearr_17140_17153 = state_17118;
(statearr_17140_17153[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17154 = state_17118;
state_17118 = G__17154;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17118){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17142,out))
})();
var state__7306__auto__ = (function (){var statearr_17141 = f__7305__auto__.call(null);
(statearr_17141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17142);

return statearr_17141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17142,out))
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
var c__7304__auto___17247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17247,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17247,out){
return (function (state_17224){
var state_val_17225 = (state_17224[(1)]);
if((state_val_17225 === (7))){
var inst_17206 = (state_17224[(7)]);
var inst_17206__$1 = (state_17224[(2)]);
var inst_17207 = (inst_17206__$1 == null);
var inst_17208 = cljs.core.not.call(null,inst_17207);
var state_17224__$1 = (function (){var statearr_17226 = state_17224;
(statearr_17226[(7)] = inst_17206__$1);

return statearr_17226;
})();
if(inst_17208){
var statearr_17227_17248 = state_17224__$1;
(statearr_17227_17248[(1)] = (8));

} else {
var statearr_17228_17249 = state_17224__$1;
(statearr_17228_17249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (1))){
var inst_17201 = (0);
var state_17224__$1 = (function (){var statearr_17229 = state_17224;
(statearr_17229[(8)] = inst_17201);

return statearr_17229;
})();
var statearr_17230_17250 = state_17224__$1;
(statearr_17230_17250[(2)] = null);

(statearr_17230_17250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (4))){
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17224__$1,(7),ch);
} else {
if((state_val_17225 === (6))){
var inst_17219 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17231_17251 = state_17224__$1;
(statearr_17231_17251[(2)] = inst_17219);

(statearr_17231_17251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (3))){
var inst_17221 = (state_17224[(2)]);
var inst_17222 = cljs.core.async.close_BANG_.call(null,out);
var state_17224__$1 = (function (){var statearr_17232 = state_17224;
(statearr_17232[(9)] = inst_17221);

return statearr_17232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17224__$1,inst_17222);
} else {
if((state_val_17225 === (2))){
var inst_17201 = (state_17224[(8)]);
var inst_17203 = (inst_17201 < n);
var state_17224__$1 = state_17224;
if(cljs.core.truth_(inst_17203)){
var statearr_17233_17252 = state_17224__$1;
(statearr_17233_17252[(1)] = (4));

} else {
var statearr_17234_17253 = state_17224__$1;
(statearr_17234_17253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (11))){
var inst_17201 = (state_17224[(8)]);
var inst_17211 = (state_17224[(2)]);
var inst_17212 = (inst_17201 + (1));
var inst_17201__$1 = inst_17212;
var state_17224__$1 = (function (){var statearr_17235 = state_17224;
(statearr_17235[(8)] = inst_17201__$1);

(statearr_17235[(10)] = inst_17211);

return statearr_17235;
})();
var statearr_17236_17254 = state_17224__$1;
(statearr_17236_17254[(2)] = null);

(statearr_17236_17254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (9))){
var state_17224__$1 = state_17224;
var statearr_17237_17255 = state_17224__$1;
(statearr_17237_17255[(2)] = null);

(statearr_17237_17255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (5))){
var state_17224__$1 = state_17224;
var statearr_17238_17256 = state_17224__$1;
(statearr_17238_17256[(2)] = null);

(statearr_17238_17256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (10))){
var inst_17216 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17239_17257 = state_17224__$1;
(statearr_17239_17257[(2)] = inst_17216);

(statearr_17239_17257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (8))){
var inst_17206 = (state_17224[(7)]);
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17224__$1,(11),out,inst_17206);
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
});})(c__7304__auto___17247,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17247,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17243[(0)] = state_machine__7249__auto__);

(statearr_17243[(1)] = (1));

return statearr_17243;
});
var state_machine__7249__auto____1 = (function (state_17224){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17244){if((e17244 instanceof Object)){
var ex__7252__auto__ = e17244;
var statearr_17245_17258 = state_17224;
(statearr_17245_17258[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17259 = state_17224;
state_17224 = G__17259;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17224){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17247,out))
})();
var state__7306__auto__ = (function (){var statearr_17246 = f__7305__auto__.call(null);
(statearr_17246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17247);

return statearr_17246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17247,out))
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
if(typeof cljs.core.async.t17267 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17267 = (function (ch,f,map_LT_,meta17268){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17268 = meta17268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17270 = (function (fn1,_,meta17268,map_LT_,f,ch,meta17271){
this.fn1 = fn1;
this._ = _;
this.meta17268 = meta17268;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17271 = meta17271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17270.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17260_SHARP_){
return f1.call(null,(((p1__17260_SHARP_ == null))?null:self__.f.call(null,p1__17260_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17272){
var self__ = this;
var _17272__$1 = this;
return self__.meta17271;
});})(___$1))
;

cljs.core.async.t17270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17272,meta17271__$1){
var self__ = this;
var _17272__$1 = this;
return (new cljs.core.async.t17270(self__.fn1,self__._,self__.meta17268,self__.map_LT_,self__.f,self__.ch,meta17271__$1));
});})(___$1))
;

cljs.core.async.t17270.cljs$lang$type = true;

cljs.core.async.t17270.cljs$lang$ctorStr = "cljs.core.async/t17270";

cljs.core.async.t17270.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17270");
});})(___$1))
;

cljs.core.async.__GT_t17270 = ((function (___$1){
return (function __GT_t17270(fn1__$1,___$2,meta17268__$1,map_LT___$1,f__$1,ch__$1,meta17271){
return (new cljs.core.async.t17270(fn1__$1,___$2,meta17268__$1,map_LT___$1,f__$1,ch__$1,meta17271));
});})(___$1))
;

}

return (new cljs.core.async.t17270(fn1,___$1,self__.meta17268,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17269){
var self__ = this;
var _17269__$1 = this;
return self__.meta17268;
});

cljs.core.async.t17267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17269,meta17268__$1){
var self__ = this;
var _17269__$1 = this;
return (new cljs.core.async.t17267(self__.ch,self__.f,self__.map_LT_,meta17268__$1));
});

cljs.core.async.t17267.cljs$lang$type = true;

cljs.core.async.t17267.cljs$lang$ctorStr = "cljs.core.async/t17267";

cljs.core.async.t17267.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17267");
});

cljs.core.async.__GT_t17267 = (function __GT_t17267(ch__$1,f__$1,map_LT___$1,meta17268){
return (new cljs.core.async.t17267(ch__$1,f__$1,map_LT___$1,meta17268));
});

}

return (new cljs.core.async.t17267(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17276 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17276 = (function (ch,f,map_GT_,meta17277){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17277 = meta17277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17278){
var self__ = this;
var _17278__$1 = this;
return self__.meta17277;
});

cljs.core.async.t17276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17278,meta17277__$1){
var self__ = this;
var _17278__$1 = this;
return (new cljs.core.async.t17276(self__.ch,self__.f,self__.map_GT_,meta17277__$1));
});

cljs.core.async.t17276.cljs$lang$type = true;

cljs.core.async.t17276.cljs$lang$ctorStr = "cljs.core.async/t17276";

cljs.core.async.t17276.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17276");
});

cljs.core.async.__GT_t17276 = (function __GT_t17276(ch__$1,f__$1,map_GT___$1,meta17277){
return (new cljs.core.async.t17276(ch__$1,f__$1,map_GT___$1,meta17277));
});

}

return (new cljs.core.async.t17276(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17282 = (function (ch,p,filter_GT_,meta17283){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17283 = meta17283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17284){
var self__ = this;
var _17284__$1 = this;
return self__.meta17283;
});

cljs.core.async.t17282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17284,meta17283__$1){
var self__ = this;
var _17284__$1 = this;
return (new cljs.core.async.t17282(self__.ch,self__.p,self__.filter_GT_,meta17283__$1));
});

cljs.core.async.t17282.cljs$lang$type = true;

cljs.core.async.t17282.cljs$lang$ctorStr = "cljs.core.async/t17282";

cljs.core.async.t17282.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17282");
});

cljs.core.async.__GT_t17282 = (function __GT_t17282(ch__$1,p__$1,filter_GT___$1,meta17283){
return (new cljs.core.async.t17282(ch__$1,p__$1,filter_GT___$1,meta17283));
});

}

return (new cljs.core.async.t17282(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___17367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17367,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17367,out){
return (function (state_17346){
var state_val_17347 = (state_17346[(1)]);
if((state_val_17347 === (7))){
var inst_17342 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17348_17368 = state_17346__$1;
(statearr_17348_17368[(2)] = inst_17342);

(statearr_17348_17368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (1))){
var state_17346__$1 = state_17346;
var statearr_17349_17369 = state_17346__$1;
(statearr_17349_17369[(2)] = null);

(statearr_17349_17369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (4))){
var inst_17328 = (state_17346[(7)]);
var inst_17328__$1 = (state_17346[(2)]);
var inst_17329 = (inst_17328__$1 == null);
var state_17346__$1 = (function (){var statearr_17350 = state_17346;
(statearr_17350[(7)] = inst_17328__$1);

return statearr_17350;
})();
if(cljs.core.truth_(inst_17329)){
var statearr_17351_17370 = state_17346__$1;
(statearr_17351_17370[(1)] = (5));

} else {
var statearr_17352_17371 = state_17346__$1;
(statearr_17352_17371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (6))){
var inst_17328 = (state_17346[(7)]);
var inst_17333 = p.call(null,inst_17328);
var state_17346__$1 = state_17346;
if(cljs.core.truth_(inst_17333)){
var statearr_17353_17372 = state_17346__$1;
(statearr_17353_17372[(1)] = (8));

} else {
var statearr_17354_17373 = state_17346__$1;
(statearr_17354_17373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (3))){
var inst_17344 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17346__$1,inst_17344);
} else {
if((state_val_17347 === (2))){
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17346__$1,(4),ch);
} else {
if((state_val_17347 === (11))){
var inst_17336 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17355_17374 = state_17346__$1;
(statearr_17355_17374[(2)] = inst_17336);

(statearr_17355_17374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (9))){
var state_17346__$1 = state_17346;
var statearr_17356_17375 = state_17346__$1;
(statearr_17356_17375[(2)] = null);

(statearr_17356_17375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (5))){
var inst_17331 = cljs.core.async.close_BANG_.call(null,out);
var state_17346__$1 = state_17346;
var statearr_17357_17376 = state_17346__$1;
(statearr_17357_17376[(2)] = inst_17331);

(statearr_17357_17376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (10))){
var inst_17339 = (state_17346[(2)]);
var state_17346__$1 = (function (){var statearr_17358 = state_17346;
(statearr_17358[(8)] = inst_17339);

return statearr_17358;
})();
var statearr_17359_17377 = state_17346__$1;
(statearr_17359_17377[(2)] = null);

(statearr_17359_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (8))){
var inst_17328 = (state_17346[(7)]);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17346__$1,(11),out,inst_17328);
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
});})(c__7304__auto___17367,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17367,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17363 = [null,null,null,null,null,null,null,null,null];
(statearr_17363[(0)] = state_machine__7249__auto__);

(statearr_17363[(1)] = (1));

return statearr_17363;
});
var state_machine__7249__auto____1 = (function (state_17346){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17364){if((e17364 instanceof Object)){
var ex__7252__auto__ = e17364;
var statearr_17365_17378 = state_17346;
(statearr_17365_17378[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17379 = state_17346;
state_17346 = G__17379;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17346){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17367,out))
})();
var state__7306__auto__ = (function (){var statearr_17366 = f__7305__auto__.call(null);
(statearr_17366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17367);

return statearr_17366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17367,out))
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
return (function (state_17545){
var state_val_17546 = (state_17545[(1)]);
if((state_val_17546 === (7))){
var inst_17541 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17547_17588 = state_17545__$1;
(statearr_17547_17588[(2)] = inst_17541);

(statearr_17547_17588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (20))){
var inst_17511 = (state_17545[(7)]);
var inst_17522 = (state_17545[(2)]);
var inst_17523 = cljs.core.next.call(null,inst_17511);
var inst_17497 = inst_17523;
var inst_17498 = null;
var inst_17499 = (0);
var inst_17500 = (0);
var state_17545__$1 = (function (){var statearr_17548 = state_17545;
(statearr_17548[(8)] = inst_17499);

(statearr_17548[(9)] = inst_17500);

(statearr_17548[(10)] = inst_17522);

(statearr_17548[(11)] = inst_17498);

(statearr_17548[(12)] = inst_17497);

return statearr_17548;
})();
var statearr_17549_17589 = state_17545__$1;
(statearr_17549_17589[(2)] = null);

(statearr_17549_17589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (1))){
var state_17545__$1 = state_17545;
var statearr_17550_17590 = state_17545__$1;
(statearr_17550_17590[(2)] = null);

(statearr_17550_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (4))){
var inst_17486 = (state_17545[(13)]);
var inst_17486__$1 = (state_17545[(2)]);
var inst_17487 = (inst_17486__$1 == null);
var state_17545__$1 = (function (){var statearr_17551 = state_17545;
(statearr_17551[(13)] = inst_17486__$1);

return statearr_17551;
})();
if(cljs.core.truth_(inst_17487)){
var statearr_17552_17591 = state_17545__$1;
(statearr_17552_17591[(1)] = (5));

} else {
var statearr_17553_17592 = state_17545__$1;
(statearr_17553_17592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (15))){
var state_17545__$1 = state_17545;
var statearr_17557_17593 = state_17545__$1;
(statearr_17557_17593[(2)] = null);

(statearr_17557_17593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (21))){
var state_17545__$1 = state_17545;
var statearr_17558_17594 = state_17545__$1;
(statearr_17558_17594[(2)] = null);

(statearr_17558_17594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (13))){
var inst_17499 = (state_17545[(8)]);
var inst_17500 = (state_17545[(9)]);
var inst_17498 = (state_17545[(11)]);
var inst_17497 = (state_17545[(12)]);
var inst_17507 = (state_17545[(2)]);
var inst_17508 = (inst_17500 + (1));
var tmp17554 = inst_17499;
var tmp17555 = inst_17498;
var tmp17556 = inst_17497;
var inst_17497__$1 = tmp17556;
var inst_17498__$1 = tmp17555;
var inst_17499__$1 = tmp17554;
var inst_17500__$1 = inst_17508;
var state_17545__$1 = (function (){var statearr_17559 = state_17545;
(statearr_17559[(8)] = inst_17499__$1);

(statearr_17559[(9)] = inst_17500__$1);

(statearr_17559[(14)] = inst_17507);

(statearr_17559[(11)] = inst_17498__$1);

(statearr_17559[(12)] = inst_17497__$1);

return statearr_17559;
})();
var statearr_17560_17595 = state_17545__$1;
(statearr_17560_17595[(2)] = null);

(statearr_17560_17595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (22))){
var state_17545__$1 = state_17545;
var statearr_17561_17596 = state_17545__$1;
(statearr_17561_17596[(2)] = null);

(statearr_17561_17596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (6))){
var inst_17486 = (state_17545[(13)]);
var inst_17495 = f.call(null,inst_17486);
var inst_17496 = cljs.core.seq.call(null,inst_17495);
var inst_17497 = inst_17496;
var inst_17498 = null;
var inst_17499 = (0);
var inst_17500 = (0);
var state_17545__$1 = (function (){var statearr_17562 = state_17545;
(statearr_17562[(8)] = inst_17499);

(statearr_17562[(9)] = inst_17500);

(statearr_17562[(11)] = inst_17498);

(statearr_17562[(12)] = inst_17497);

return statearr_17562;
})();
var statearr_17563_17597 = state_17545__$1;
(statearr_17563_17597[(2)] = null);

(statearr_17563_17597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (17))){
var inst_17511 = (state_17545[(7)]);
var inst_17515 = cljs.core.chunk_first.call(null,inst_17511);
var inst_17516 = cljs.core.chunk_rest.call(null,inst_17511);
var inst_17517 = cljs.core.count.call(null,inst_17515);
var inst_17497 = inst_17516;
var inst_17498 = inst_17515;
var inst_17499 = inst_17517;
var inst_17500 = (0);
var state_17545__$1 = (function (){var statearr_17564 = state_17545;
(statearr_17564[(8)] = inst_17499);

(statearr_17564[(9)] = inst_17500);

(statearr_17564[(11)] = inst_17498);

(statearr_17564[(12)] = inst_17497);

return statearr_17564;
})();
var statearr_17565_17598 = state_17545__$1;
(statearr_17565_17598[(2)] = null);

(statearr_17565_17598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (3))){
var inst_17543 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17545__$1,inst_17543);
} else {
if((state_val_17546 === (12))){
var inst_17531 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17566_17599 = state_17545__$1;
(statearr_17566_17599[(2)] = inst_17531);

(statearr_17566_17599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (2))){
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17545__$1,(4),in$);
} else {
if((state_val_17546 === (23))){
var inst_17539 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17567_17600 = state_17545__$1;
(statearr_17567_17600[(2)] = inst_17539);

(statearr_17567_17600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (19))){
var inst_17526 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17568_17601 = state_17545__$1;
(statearr_17568_17601[(2)] = inst_17526);

(statearr_17568_17601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (11))){
var inst_17511 = (state_17545[(7)]);
var inst_17497 = (state_17545[(12)]);
var inst_17511__$1 = cljs.core.seq.call(null,inst_17497);
var state_17545__$1 = (function (){var statearr_17569 = state_17545;
(statearr_17569[(7)] = inst_17511__$1);

return statearr_17569;
})();
if(inst_17511__$1){
var statearr_17570_17602 = state_17545__$1;
(statearr_17570_17602[(1)] = (14));

} else {
var statearr_17571_17603 = state_17545__$1;
(statearr_17571_17603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (9))){
var inst_17533 = (state_17545[(2)]);
var inst_17534 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17545__$1 = (function (){var statearr_17572 = state_17545;
(statearr_17572[(15)] = inst_17533);

return statearr_17572;
})();
if(cljs.core.truth_(inst_17534)){
var statearr_17573_17604 = state_17545__$1;
(statearr_17573_17604[(1)] = (21));

} else {
var statearr_17574_17605 = state_17545__$1;
(statearr_17574_17605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (5))){
var inst_17489 = cljs.core.async.close_BANG_.call(null,out);
var state_17545__$1 = state_17545;
var statearr_17575_17606 = state_17545__$1;
(statearr_17575_17606[(2)] = inst_17489);

(statearr_17575_17606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (14))){
var inst_17511 = (state_17545[(7)]);
var inst_17513 = cljs.core.chunked_seq_QMARK_.call(null,inst_17511);
var state_17545__$1 = state_17545;
if(inst_17513){
var statearr_17576_17607 = state_17545__$1;
(statearr_17576_17607[(1)] = (17));

} else {
var statearr_17577_17608 = state_17545__$1;
(statearr_17577_17608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (16))){
var inst_17529 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17578_17609 = state_17545__$1;
(statearr_17578_17609[(2)] = inst_17529);

(statearr_17578_17609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (10))){
var inst_17500 = (state_17545[(9)]);
var inst_17498 = (state_17545[(11)]);
var inst_17505 = cljs.core._nth.call(null,inst_17498,inst_17500);
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17545__$1,(13),out,inst_17505);
} else {
if((state_val_17546 === (18))){
var inst_17511 = (state_17545[(7)]);
var inst_17520 = cljs.core.first.call(null,inst_17511);
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17545__$1,(20),out,inst_17520);
} else {
if((state_val_17546 === (8))){
var inst_17499 = (state_17545[(8)]);
var inst_17500 = (state_17545[(9)]);
var inst_17502 = (inst_17500 < inst_17499);
var inst_17503 = inst_17502;
var state_17545__$1 = state_17545;
if(cljs.core.truth_(inst_17503)){
var statearr_17579_17610 = state_17545__$1;
(statearr_17579_17610[(1)] = (10));

} else {
var statearr_17580_17611 = state_17545__$1;
(statearr_17580_17611[(1)] = (11));

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
var statearr_17584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17584[(0)] = state_machine__7249__auto__);

(statearr_17584[(1)] = (1));

return statearr_17584;
});
var state_machine__7249__auto____1 = (function (state_17545){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17585){if((e17585 instanceof Object)){
var ex__7252__auto__ = e17585;
var statearr_17586_17612 = state_17545;
(statearr_17586_17612[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17613 = state_17545;
state_17545 = G__17613;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17545){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_17587 = f__7305__auto__.call(null);
(statearr_17587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_17587;
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
var c__7304__auto___17710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17710,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17710,out){
return (function (state_17685){
var state_val_17686 = (state_17685[(1)]);
if((state_val_17686 === (7))){
var inst_17680 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17687_17711 = state_17685__$1;
(statearr_17687_17711[(2)] = inst_17680);

(statearr_17687_17711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (1))){
var inst_17662 = null;
var state_17685__$1 = (function (){var statearr_17688 = state_17685;
(statearr_17688[(7)] = inst_17662);

return statearr_17688;
})();
var statearr_17689_17712 = state_17685__$1;
(statearr_17689_17712[(2)] = null);

(statearr_17689_17712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (4))){
var inst_17665 = (state_17685[(8)]);
var inst_17665__$1 = (state_17685[(2)]);
var inst_17666 = (inst_17665__$1 == null);
var inst_17667 = cljs.core.not.call(null,inst_17666);
var state_17685__$1 = (function (){var statearr_17690 = state_17685;
(statearr_17690[(8)] = inst_17665__$1);

return statearr_17690;
})();
if(inst_17667){
var statearr_17691_17713 = state_17685__$1;
(statearr_17691_17713[(1)] = (5));

} else {
var statearr_17692_17714 = state_17685__$1;
(statearr_17692_17714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (6))){
var state_17685__$1 = state_17685;
var statearr_17693_17715 = state_17685__$1;
(statearr_17693_17715[(2)] = null);

(statearr_17693_17715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (3))){
var inst_17682 = (state_17685[(2)]);
var inst_17683 = cljs.core.async.close_BANG_.call(null,out);
var state_17685__$1 = (function (){var statearr_17694 = state_17685;
(statearr_17694[(9)] = inst_17682);

return statearr_17694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17685__$1,inst_17683);
} else {
if((state_val_17686 === (2))){
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17685__$1,(4),ch);
} else {
if((state_val_17686 === (11))){
var inst_17665 = (state_17685[(8)]);
var inst_17674 = (state_17685[(2)]);
var inst_17662 = inst_17665;
var state_17685__$1 = (function (){var statearr_17695 = state_17685;
(statearr_17695[(7)] = inst_17662);

(statearr_17695[(10)] = inst_17674);

return statearr_17695;
})();
var statearr_17696_17716 = state_17685__$1;
(statearr_17696_17716[(2)] = null);

(statearr_17696_17716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (9))){
var inst_17665 = (state_17685[(8)]);
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17685__$1,(11),out,inst_17665);
} else {
if((state_val_17686 === (5))){
var inst_17662 = (state_17685[(7)]);
var inst_17665 = (state_17685[(8)]);
var inst_17669 = cljs.core._EQ_.call(null,inst_17665,inst_17662);
var state_17685__$1 = state_17685;
if(inst_17669){
var statearr_17698_17717 = state_17685__$1;
(statearr_17698_17717[(1)] = (8));

} else {
var statearr_17699_17718 = state_17685__$1;
(statearr_17699_17718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (10))){
var inst_17677 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17700_17719 = state_17685__$1;
(statearr_17700_17719[(2)] = inst_17677);

(statearr_17700_17719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (8))){
var inst_17662 = (state_17685[(7)]);
var tmp17697 = inst_17662;
var inst_17662__$1 = tmp17697;
var state_17685__$1 = (function (){var statearr_17701 = state_17685;
(statearr_17701[(7)] = inst_17662__$1);

return statearr_17701;
})();
var statearr_17702_17720 = state_17685__$1;
(statearr_17702_17720[(2)] = null);

(statearr_17702_17720[(1)] = (2));


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
});})(c__7304__auto___17710,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17710,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17706[(0)] = state_machine__7249__auto__);

(statearr_17706[(1)] = (1));

return statearr_17706;
});
var state_machine__7249__auto____1 = (function (state_17685){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17707){if((e17707 instanceof Object)){
var ex__7252__auto__ = e17707;
var statearr_17708_17721 = state_17685;
(statearr_17708_17721[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17722 = state_17685;
state_17685 = G__17722;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17685){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17710,out))
})();
var state__7306__auto__ = (function (){var statearr_17709 = f__7305__auto__.call(null);
(statearr_17709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17710);

return statearr_17709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17710,out))
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
var c__7304__auto___17857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17857,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17857,out){
return (function (state_17827){
var state_val_17828 = (state_17827[(1)]);
if((state_val_17828 === (7))){
var inst_17823 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
var statearr_17829_17858 = state_17827__$1;
(statearr_17829_17858[(2)] = inst_17823);

(statearr_17829_17858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (1))){
var inst_17790 = (new Array(n));
var inst_17791 = inst_17790;
var inst_17792 = (0);
var state_17827__$1 = (function (){var statearr_17830 = state_17827;
(statearr_17830[(7)] = inst_17792);

(statearr_17830[(8)] = inst_17791);

return statearr_17830;
})();
var statearr_17831_17859 = state_17827__$1;
(statearr_17831_17859[(2)] = null);

(statearr_17831_17859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (4))){
var inst_17795 = (state_17827[(9)]);
var inst_17795__$1 = (state_17827[(2)]);
var inst_17796 = (inst_17795__$1 == null);
var inst_17797 = cljs.core.not.call(null,inst_17796);
var state_17827__$1 = (function (){var statearr_17832 = state_17827;
(statearr_17832[(9)] = inst_17795__$1);

return statearr_17832;
})();
if(inst_17797){
var statearr_17833_17860 = state_17827__$1;
(statearr_17833_17860[(1)] = (5));

} else {
var statearr_17834_17861 = state_17827__$1;
(statearr_17834_17861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (15))){
var inst_17817 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
var statearr_17835_17862 = state_17827__$1;
(statearr_17835_17862[(2)] = inst_17817);

(statearr_17835_17862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (13))){
var state_17827__$1 = state_17827;
var statearr_17836_17863 = state_17827__$1;
(statearr_17836_17863[(2)] = null);

(statearr_17836_17863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (6))){
var inst_17792 = (state_17827[(7)]);
var inst_17813 = (inst_17792 > (0));
var state_17827__$1 = state_17827;
if(cljs.core.truth_(inst_17813)){
var statearr_17837_17864 = state_17827__$1;
(statearr_17837_17864[(1)] = (12));

} else {
var statearr_17838_17865 = state_17827__$1;
(statearr_17838_17865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (3))){
var inst_17825 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17827__$1,inst_17825);
} else {
if((state_val_17828 === (12))){
var inst_17791 = (state_17827[(8)]);
var inst_17815 = cljs.core.vec.call(null,inst_17791);
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17827__$1,(15),out,inst_17815);
} else {
if((state_val_17828 === (2))){
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17827__$1,(4),ch);
} else {
if((state_val_17828 === (11))){
var inst_17807 = (state_17827[(2)]);
var inst_17808 = (new Array(n));
var inst_17791 = inst_17808;
var inst_17792 = (0);
var state_17827__$1 = (function (){var statearr_17839 = state_17827;
(statearr_17839[(7)] = inst_17792);

(statearr_17839[(8)] = inst_17791);

(statearr_17839[(10)] = inst_17807);

return statearr_17839;
})();
var statearr_17840_17866 = state_17827__$1;
(statearr_17840_17866[(2)] = null);

(statearr_17840_17866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (9))){
var inst_17791 = (state_17827[(8)]);
var inst_17805 = cljs.core.vec.call(null,inst_17791);
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17827__$1,(11),out,inst_17805);
} else {
if((state_val_17828 === (5))){
var inst_17800 = (state_17827[(11)]);
var inst_17792 = (state_17827[(7)]);
var inst_17795 = (state_17827[(9)]);
var inst_17791 = (state_17827[(8)]);
var inst_17799 = (inst_17791[inst_17792] = inst_17795);
var inst_17800__$1 = (inst_17792 + (1));
var inst_17801 = (inst_17800__$1 < n);
var state_17827__$1 = (function (){var statearr_17841 = state_17827;
(statearr_17841[(12)] = inst_17799);

(statearr_17841[(11)] = inst_17800__$1);

return statearr_17841;
})();
if(cljs.core.truth_(inst_17801)){
var statearr_17842_17867 = state_17827__$1;
(statearr_17842_17867[(1)] = (8));

} else {
var statearr_17843_17868 = state_17827__$1;
(statearr_17843_17868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (14))){
var inst_17820 = (state_17827[(2)]);
var inst_17821 = cljs.core.async.close_BANG_.call(null,out);
var state_17827__$1 = (function (){var statearr_17845 = state_17827;
(statearr_17845[(13)] = inst_17820);

return statearr_17845;
})();
var statearr_17846_17869 = state_17827__$1;
(statearr_17846_17869[(2)] = inst_17821);

(statearr_17846_17869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (10))){
var inst_17811 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
var statearr_17847_17870 = state_17827__$1;
(statearr_17847_17870[(2)] = inst_17811);

(statearr_17847_17870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17828 === (8))){
var inst_17800 = (state_17827[(11)]);
var inst_17791 = (state_17827[(8)]);
var tmp17844 = inst_17791;
var inst_17791__$1 = tmp17844;
var inst_17792 = inst_17800;
var state_17827__$1 = (function (){var statearr_17848 = state_17827;
(statearr_17848[(7)] = inst_17792);

(statearr_17848[(8)] = inst_17791__$1);

return statearr_17848;
})();
var statearr_17849_17871 = state_17827__$1;
(statearr_17849_17871[(2)] = null);

(statearr_17849_17871[(1)] = (2));


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
});})(c__7304__auto___17857,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17857,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17853[(0)] = state_machine__7249__auto__);

(statearr_17853[(1)] = (1));

return statearr_17853;
});
var state_machine__7249__auto____1 = (function (state_17827){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17854){if((e17854 instanceof Object)){
var ex__7252__auto__ = e17854;
var statearr_17855_17872 = state_17827;
(statearr_17855_17872[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17873 = state_17827;
state_17827 = G__17873;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17827){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17857,out))
})();
var state__7306__auto__ = (function (){var statearr_17856 = f__7305__auto__.call(null);
(statearr_17856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17857);

return statearr_17856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17857,out))
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
var c__7304__auto___18016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___18016,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___18016,out){
return (function (state_17986){
var state_val_17987 = (state_17986[(1)]);
if((state_val_17987 === (7))){
var inst_17982 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_17988_18017 = state_17986__$1;
(statearr_17988_18017[(2)] = inst_17982);

(statearr_17988_18017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (1))){
var inst_17945 = [];
var inst_17946 = inst_17945;
var inst_17947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17986__$1 = (function (){var statearr_17989 = state_17986;
(statearr_17989[(7)] = inst_17946);

(statearr_17989[(8)] = inst_17947);

return statearr_17989;
})();
var statearr_17990_18018 = state_17986__$1;
(statearr_17990_18018[(2)] = null);

(statearr_17990_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (4))){
var inst_17950 = (state_17986[(9)]);
var inst_17950__$1 = (state_17986[(2)]);
var inst_17951 = (inst_17950__$1 == null);
var inst_17952 = cljs.core.not.call(null,inst_17951);
var state_17986__$1 = (function (){var statearr_17991 = state_17986;
(statearr_17991[(9)] = inst_17950__$1);

return statearr_17991;
})();
if(inst_17952){
var statearr_17992_18019 = state_17986__$1;
(statearr_17992_18019[(1)] = (5));

} else {
var statearr_17993_18020 = state_17986__$1;
(statearr_17993_18020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (15))){
var inst_17976 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_17994_18021 = state_17986__$1;
(statearr_17994_18021[(2)] = inst_17976);

(statearr_17994_18021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (13))){
var state_17986__$1 = state_17986;
var statearr_17995_18022 = state_17986__$1;
(statearr_17995_18022[(2)] = null);

(statearr_17995_18022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (6))){
var inst_17946 = (state_17986[(7)]);
var inst_17971 = inst_17946.length;
var inst_17972 = (inst_17971 > (0));
var state_17986__$1 = state_17986;
if(cljs.core.truth_(inst_17972)){
var statearr_17996_18023 = state_17986__$1;
(statearr_17996_18023[(1)] = (12));

} else {
var statearr_17997_18024 = state_17986__$1;
(statearr_17997_18024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (3))){
var inst_17984 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17986__$1,inst_17984);
} else {
if((state_val_17987 === (12))){
var inst_17946 = (state_17986[(7)]);
var inst_17974 = cljs.core.vec.call(null,inst_17946);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17986__$1,(15),out,inst_17974);
} else {
if((state_val_17987 === (2))){
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17986__$1,(4),ch);
} else {
if((state_val_17987 === (11))){
var inst_17950 = (state_17986[(9)]);
var inst_17954 = (state_17986[(10)]);
var inst_17964 = (state_17986[(2)]);
var inst_17965 = [];
var inst_17966 = inst_17965.push(inst_17950);
var inst_17946 = inst_17965;
var inst_17947 = inst_17954;
var state_17986__$1 = (function (){var statearr_17998 = state_17986;
(statearr_17998[(11)] = inst_17966);

(statearr_17998[(7)] = inst_17946);

(statearr_17998[(8)] = inst_17947);

(statearr_17998[(12)] = inst_17964);

return statearr_17998;
})();
var statearr_17999_18025 = state_17986__$1;
(statearr_17999_18025[(2)] = null);

(statearr_17999_18025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (9))){
var inst_17946 = (state_17986[(7)]);
var inst_17962 = cljs.core.vec.call(null,inst_17946);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17986__$1,(11),out,inst_17962);
} else {
if((state_val_17987 === (5))){
var inst_17950 = (state_17986[(9)]);
var inst_17954 = (state_17986[(10)]);
var inst_17947 = (state_17986[(8)]);
var inst_17954__$1 = f.call(null,inst_17950);
var inst_17955 = cljs.core._EQ_.call(null,inst_17954__$1,inst_17947);
var inst_17956 = cljs.core.keyword_identical_QMARK_.call(null,inst_17947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17957 = (inst_17955) || (inst_17956);
var state_17986__$1 = (function (){var statearr_18000 = state_17986;
(statearr_18000[(10)] = inst_17954__$1);

return statearr_18000;
})();
if(cljs.core.truth_(inst_17957)){
var statearr_18001_18026 = state_17986__$1;
(statearr_18001_18026[(1)] = (8));

} else {
var statearr_18002_18027 = state_17986__$1;
(statearr_18002_18027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (14))){
var inst_17979 = (state_17986[(2)]);
var inst_17980 = cljs.core.async.close_BANG_.call(null,out);
var state_17986__$1 = (function (){var statearr_18004 = state_17986;
(statearr_18004[(13)] = inst_17979);

return statearr_18004;
})();
var statearr_18005_18028 = state_17986__$1;
(statearr_18005_18028[(2)] = inst_17980);

(statearr_18005_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (10))){
var inst_17969 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_18006_18029 = state_17986__$1;
(statearr_18006_18029[(2)] = inst_17969);

(statearr_18006_18029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (8))){
var inst_17950 = (state_17986[(9)]);
var inst_17954 = (state_17986[(10)]);
var inst_17946 = (state_17986[(7)]);
var inst_17959 = inst_17946.push(inst_17950);
var tmp18003 = inst_17946;
var inst_17946__$1 = tmp18003;
var inst_17947 = inst_17954;
var state_17986__$1 = (function (){var statearr_18007 = state_17986;
(statearr_18007[(14)] = inst_17959);

(statearr_18007[(7)] = inst_17946__$1);

(statearr_18007[(8)] = inst_17947);

return statearr_18007;
})();
var statearr_18008_18030 = state_17986__$1;
(statearr_18008_18030[(2)] = null);

(statearr_18008_18030[(1)] = (2));


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
});})(c__7304__auto___18016,out))
;
return ((function (switch__7248__auto__,c__7304__auto___18016,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_18012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18012[(0)] = state_machine__7249__auto__);

(statearr_18012[(1)] = (1));

return statearr_18012;
});
var state_machine__7249__auto____1 = (function (state_17986){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18013){if((e18013 instanceof Object)){
var ex__7252__auto__ = e18013;
var statearr_18014_18031 = state_17986;
(statearr_18014_18031[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18032 = state_17986;
state_17986 = G__18032;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17986){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___18016,out))
})();
var state__7306__auto__ = (function (){var statearr_18015 = f__7305__auto__.call(null);
(statearr_18015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___18016);

return statearr_18015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___18016,out))
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