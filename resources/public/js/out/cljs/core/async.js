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
if(typeof cljs.core.async.t956800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t956800 = (function (f,fn_handler,meta956801){
this.f = f;
this.fn_handler = fn_handler;
this.meta956801 = meta956801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t956800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t956800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t956800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t956800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_956802){
var self__ = this;
var _956802__$1 = this;
return self__.meta956801;
});

cljs.core.async.t956800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_956802,meta956801__$1){
var self__ = this;
var _956802__$1 = this;
return (new cljs.core.async.t956800(self__.f,self__.fn_handler,meta956801__$1));
});

cljs.core.async.t956800.cljs$lang$type = true;

cljs.core.async.t956800.cljs$lang$ctorStr = "cljs.core.async/t956800";

cljs.core.async.t956800.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t956800");
});

cljs.core.async.__GT_t956800 = (function __GT_t956800(f__$1,fn_handler__$1,meta956801){
return (new cljs.core.async.t956800(f__$1,fn_handler__$1,meta956801));
});

}

return (new cljs.core.async.t956800(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__956804 = buff;
if(G__956804){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__956804.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__956804.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__956804);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__956804);
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
var val_956805 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_956805);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_956805,ret){
return (function (){
return fn1.call(null,val_956805);
});})(val_956805,ret))
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
var n__4509__auto___956806 = n;
var x_956807 = (0);
while(true){
if((x_956807 < n__4509__auto___956806)){
(a[x_956807] = (0));

var G__956808 = (x_956807 + (1));
x_956807 = G__956808;
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

var G__956809 = (i + (1));
i = G__956809;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t956813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t956813 = (function (flag,alt_flag,meta956814){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta956814 = meta956814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t956813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t956813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t956813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t956813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_956815){
var self__ = this;
var _956815__$1 = this;
return self__.meta956814;
});})(flag))
;

cljs.core.async.t956813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_956815,meta956814__$1){
var self__ = this;
var _956815__$1 = this;
return (new cljs.core.async.t956813(self__.flag,self__.alt_flag,meta956814__$1));
});})(flag))
;

cljs.core.async.t956813.cljs$lang$type = true;

cljs.core.async.t956813.cljs$lang$ctorStr = "cljs.core.async/t956813";

cljs.core.async.t956813.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t956813");
});})(flag))
;

cljs.core.async.__GT_t956813 = ((function (flag){
return (function __GT_t956813(flag__$1,alt_flag__$1,meta956814){
return (new cljs.core.async.t956813(flag__$1,alt_flag__$1,meta956814));
});})(flag))
;

}

return (new cljs.core.async.t956813(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t956819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t956819 = (function (cb,flag,alt_handler,meta956820){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta956820 = meta956820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t956819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t956819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t956819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t956819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_956821){
var self__ = this;
var _956821__$1 = this;
return self__.meta956820;
});

cljs.core.async.t956819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_956821,meta956820__$1){
var self__ = this;
var _956821__$1 = this;
return (new cljs.core.async.t956819(self__.cb,self__.flag,self__.alt_handler,meta956820__$1));
});

cljs.core.async.t956819.cljs$lang$type = true;

cljs.core.async.t956819.cljs$lang$ctorStr = "cljs.core.async/t956819";

cljs.core.async.t956819.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t956819");
});

cljs.core.async.__GT_t956819 = (function __GT_t956819(cb__$1,flag__$1,alt_handler__$1,meta956820){
return (new cljs.core.async.t956819(cb__$1,flag__$1,alt_handler__$1,meta956820));
});

}

return (new cljs.core.async.t956819(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__956822_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__956822_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__956823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__956823_SHARP_,port], null));
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
var G__956824 = (i + (1));
i = G__956824;
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
var alts_BANG___delegate = function (ports,p__956825){
var map__956827 = p__956825;
var map__956827__$1 = ((cljs.core.seq_QMARK_.call(null,map__956827))?cljs.core.apply.call(null,cljs.core.hash_map,map__956827):map__956827);
var opts = map__956827__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__956825 = null;
if (arguments.length > 1) {
  p__956825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__956825);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__956828){
var ports = cljs.core.first(arglist__956828);
var p__956825 = cljs.core.rest(arglist__956828);
return alts_BANG___delegate(ports,p__956825);
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
var c__9199__auto___956923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___956923){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___956923){
return (function (state_956899){
var state_val_956900 = (state_956899[(1)]);
if((state_val_956900 === (7))){
var inst_956895 = (state_956899[(2)]);
var state_956899__$1 = state_956899;
var statearr_956901_956924 = state_956899__$1;
(statearr_956901_956924[(2)] = inst_956895);

(statearr_956901_956924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (1))){
var state_956899__$1 = state_956899;
var statearr_956902_956925 = state_956899__$1;
(statearr_956902_956925[(2)] = null);

(statearr_956902_956925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (4))){
var inst_956878 = (state_956899[(7)]);
var inst_956878__$1 = (state_956899[(2)]);
var inst_956879 = (inst_956878__$1 == null);
var state_956899__$1 = (function (){var statearr_956903 = state_956899;
(statearr_956903[(7)] = inst_956878__$1);

return statearr_956903;
})();
if(cljs.core.truth_(inst_956879)){
var statearr_956904_956926 = state_956899__$1;
(statearr_956904_956926[(1)] = (5));

} else {
var statearr_956905_956927 = state_956899__$1;
(statearr_956905_956927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (13))){
var state_956899__$1 = state_956899;
var statearr_956906_956928 = state_956899__$1;
(statearr_956906_956928[(2)] = null);

(statearr_956906_956928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (6))){
var inst_956878 = (state_956899[(7)]);
var state_956899__$1 = state_956899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_956899__$1,(11),to,inst_956878);
} else {
if((state_val_956900 === (3))){
var inst_956897 = (state_956899[(2)]);
var state_956899__$1 = state_956899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_956899__$1,inst_956897);
} else {
if((state_val_956900 === (12))){
var state_956899__$1 = state_956899;
var statearr_956907_956929 = state_956899__$1;
(statearr_956907_956929[(2)] = null);

(statearr_956907_956929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (2))){
var state_956899__$1 = state_956899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_956899__$1,(4),from);
} else {
if((state_val_956900 === (11))){
var inst_956888 = (state_956899[(2)]);
var state_956899__$1 = state_956899;
if(cljs.core.truth_(inst_956888)){
var statearr_956908_956930 = state_956899__$1;
(statearr_956908_956930[(1)] = (12));

} else {
var statearr_956909_956931 = state_956899__$1;
(statearr_956909_956931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (9))){
var state_956899__$1 = state_956899;
var statearr_956910_956932 = state_956899__$1;
(statearr_956910_956932[(2)] = null);

(statearr_956910_956932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (5))){
var state_956899__$1 = state_956899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_956911_956933 = state_956899__$1;
(statearr_956911_956933[(1)] = (8));

} else {
var statearr_956912_956934 = state_956899__$1;
(statearr_956912_956934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (14))){
var inst_956893 = (state_956899[(2)]);
var state_956899__$1 = state_956899;
var statearr_956913_956935 = state_956899__$1;
(statearr_956913_956935[(2)] = inst_956893);

(statearr_956913_956935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (10))){
var inst_956885 = (state_956899[(2)]);
var state_956899__$1 = state_956899;
var statearr_956914_956936 = state_956899__$1;
(statearr_956914_956936[(2)] = inst_956885);

(statearr_956914_956936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_956900 === (8))){
var inst_956882 = cljs.core.async.close_BANG_.call(null,to);
var state_956899__$1 = state_956899;
var statearr_956915_956937 = state_956899__$1;
(statearr_956915_956937[(2)] = inst_956882);

(statearr_956915_956937[(1)] = (10));


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
});})(c__9199__auto___956923))
;
return ((function (switch__9184__auto__,c__9199__auto___956923){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_956919 = [null,null,null,null,null,null,null,null];
(statearr_956919[(0)] = state_machine__9185__auto__);

(statearr_956919[(1)] = (1));

return statearr_956919;
});
var state_machine__9185__auto____1 = (function (state_956899){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_956899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e956920){if((e956920 instanceof Object)){
var ex__9188__auto__ = e956920;
var statearr_956921_956938 = state_956899;
(statearr_956921_956938[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_956899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e956920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__956939 = state_956899;
state_956899 = G__956939;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_956899){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_956899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___956923))
})();
var state__9201__auto__ = (function (){var statearr_956922 = f__9200__auto__.call(null);
(statearr_956922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___956923);

return statearr_956922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___956923))
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
return (function (p__957123){
var vec__957124 = p__957123;
var v = cljs.core.nth.call(null,vec__957124,(0),null);
var p = cljs.core.nth.call(null,vec__957124,(1),null);
var job = vec__957124;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___957306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results){
return (function (state_957129){
var state_val_957130 = (state_957129[(1)]);
if((state_val_957130 === (2))){
var inst_957126 = (state_957129[(2)]);
var inst_957127 = cljs.core.async.close_BANG_.call(null,res);
var state_957129__$1 = (function (){var statearr_957131 = state_957129;
(statearr_957131[(7)] = inst_957126);

return statearr_957131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957129__$1,inst_957127);
} else {
if((state_val_957130 === (1))){
var state_957129__$1 = state_957129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957129__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_957135 = [null,null,null,null,null,null,null,null];
(statearr_957135[(0)] = state_machine__9185__auto__);

(statearr_957135[(1)] = (1));

return statearr_957135;
});
var state_machine__9185__auto____1 = (function (state_957129){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957136){if((e957136 instanceof Object)){
var ex__9188__auto__ = e957136;
var statearr_957137_957307 = state_957129;
(statearr_957137_957307[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957308 = state_957129;
state_957129 = G__957308;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957129){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_957138 = f__9200__auto__.call(null);
(statearr_957138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___957306);

return statearr_957138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___957306,res,vec__957124,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__957139){
var vec__957140 = p__957139;
var v = cljs.core.nth.call(null,vec__957140,(0),null);
var p = cljs.core.nth.call(null,vec__957140,(1),null);
var job = vec__957140;
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
var n__4509__auto___957309 = n;
var __957310 = (0);
while(true){
if((__957310 < n__4509__auto___957309)){
var G__957141_957311 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__957141_957311) {
case "async":
var c__9199__auto___957313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__957310,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__957310,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function (state_957154){
var state_val_957155 = (state_957154[(1)]);
if((state_val_957155 === (7))){
var inst_957150 = (state_957154[(2)]);
var state_957154__$1 = state_957154;
var statearr_957156_957314 = state_957154__$1;
(statearr_957156_957314[(2)] = inst_957150);

(statearr_957156_957314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957155 === (6))){
var state_957154__$1 = state_957154;
var statearr_957157_957315 = state_957154__$1;
(statearr_957157_957315[(2)] = null);

(statearr_957157_957315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957155 === (5))){
var state_957154__$1 = state_957154;
var statearr_957158_957316 = state_957154__$1;
(statearr_957158_957316[(2)] = null);

(statearr_957158_957316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957155 === (4))){
var inst_957144 = (state_957154[(2)]);
var inst_957145 = async.call(null,inst_957144);
var state_957154__$1 = state_957154;
if(cljs.core.truth_(inst_957145)){
var statearr_957159_957317 = state_957154__$1;
(statearr_957159_957317[(1)] = (5));

} else {
var statearr_957160_957318 = state_957154__$1;
(statearr_957160_957318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957155 === (3))){
var inst_957152 = (state_957154[(2)]);
var state_957154__$1 = state_957154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957154__$1,inst_957152);
} else {
if((state_val_957155 === (2))){
var state_957154__$1 = state_957154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957154__$1,(4),jobs);
} else {
if((state_val_957155 === (1))){
var state_957154__$1 = state_957154;
var statearr_957161_957319 = state_957154__$1;
(statearr_957161_957319[(2)] = null);

(statearr_957161_957319[(1)] = (2));


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
});})(__957310,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
;
return ((function (__957310,switch__9184__auto__,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_957165 = [null,null,null,null,null,null,null];
(statearr_957165[(0)] = state_machine__9185__auto__);

(statearr_957165[(1)] = (1));

return statearr_957165;
});
var state_machine__9185__auto____1 = (function (state_957154){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957166){if((e957166 instanceof Object)){
var ex__9188__auto__ = e957166;
var statearr_957167_957320 = state_957154;
(statearr_957167_957320[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957321 = state_957154;
state_957154 = G__957321;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957154){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__957310,switch__9184__auto__,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_957168 = f__9200__auto__.call(null);
(statearr_957168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___957313);

return statearr_957168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__957310,c__9199__auto___957313,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___957322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__957310,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__957310,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function (state_957181){
var state_val_957182 = (state_957181[(1)]);
if((state_val_957182 === (7))){
var inst_957177 = (state_957181[(2)]);
var state_957181__$1 = state_957181;
var statearr_957183_957323 = state_957181__$1;
(statearr_957183_957323[(2)] = inst_957177);

(statearr_957183_957323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957182 === (6))){
var state_957181__$1 = state_957181;
var statearr_957184_957324 = state_957181__$1;
(statearr_957184_957324[(2)] = null);

(statearr_957184_957324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957182 === (5))){
var state_957181__$1 = state_957181;
var statearr_957185_957325 = state_957181__$1;
(statearr_957185_957325[(2)] = null);

(statearr_957185_957325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957182 === (4))){
var inst_957171 = (state_957181[(2)]);
var inst_957172 = process.call(null,inst_957171);
var state_957181__$1 = state_957181;
if(cljs.core.truth_(inst_957172)){
var statearr_957186_957326 = state_957181__$1;
(statearr_957186_957326[(1)] = (5));

} else {
var statearr_957187_957327 = state_957181__$1;
(statearr_957187_957327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957182 === (3))){
var inst_957179 = (state_957181[(2)]);
var state_957181__$1 = state_957181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957181__$1,inst_957179);
} else {
if((state_val_957182 === (2))){
var state_957181__$1 = state_957181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957181__$1,(4),jobs);
} else {
if((state_val_957182 === (1))){
var state_957181__$1 = state_957181;
var statearr_957188_957328 = state_957181__$1;
(statearr_957188_957328[(2)] = null);

(statearr_957188_957328[(1)] = (2));


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
});})(__957310,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
;
return ((function (__957310,switch__9184__auto__,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_957192 = [null,null,null,null,null,null,null];
(statearr_957192[(0)] = state_machine__9185__auto__);

(statearr_957192[(1)] = (1));

return statearr_957192;
});
var state_machine__9185__auto____1 = (function (state_957181){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957193){if((e957193 instanceof Object)){
var ex__9188__auto__ = e957193;
var statearr_957194_957329 = state_957181;
(statearr_957194_957329[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957330 = state_957181;
state_957181 = G__957330;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957181){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__957310,switch__9184__auto__,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_957195 = f__9200__auto__.call(null);
(statearr_957195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___957322);

return statearr_957195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__957310,c__9199__auto___957322,G__957141_957311,n__4509__auto___957309,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__957331 = (__957310 + (1));
__957310 = G__957331;
continue;
} else {
}
break;
}

var c__9199__auto___957332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___957332,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___957332,jobs,results,process,async){
return (function (state_957217){
var state_val_957218 = (state_957217[(1)]);
if((state_val_957218 === (9))){
var inst_957210 = (state_957217[(2)]);
var state_957217__$1 = (function (){var statearr_957219 = state_957217;
(statearr_957219[(7)] = inst_957210);

return statearr_957219;
})();
var statearr_957220_957333 = state_957217__$1;
(statearr_957220_957333[(2)] = null);

(statearr_957220_957333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957218 === (8))){
var inst_957203 = (state_957217[(8)]);
var inst_957208 = (state_957217[(2)]);
var state_957217__$1 = (function (){var statearr_957221 = state_957217;
(statearr_957221[(9)] = inst_957208);

return statearr_957221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957217__$1,(9),results,inst_957203);
} else {
if((state_val_957218 === (7))){
var inst_957213 = (state_957217[(2)]);
var state_957217__$1 = state_957217;
var statearr_957222_957334 = state_957217__$1;
(statearr_957222_957334[(2)] = inst_957213);

(statearr_957222_957334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957218 === (6))){
var inst_957203 = (state_957217[(8)]);
var inst_957198 = (state_957217[(10)]);
var inst_957203__$1 = cljs.core.async.chan.call(null,(1));
var inst_957204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_957205 = [inst_957198,inst_957203__$1];
var inst_957206 = (new cljs.core.PersistentVector(null,2,(5),inst_957204,inst_957205,null));
var state_957217__$1 = (function (){var statearr_957223 = state_957217;
(statearr_957223[(8)] = inst_957203__$1);

return statearr_957223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957217__$1,(8),jobs,inst_957206);
} else {
if((state_val_957218 === (5))){
var inst_957201 = cljs.core.async.close_BANG_.call(null,jobs);
var state_957217__$1 = state_957217;
var statearr_957224_957335 = state_957217__$1;
(statearr_957224_957335[(2)] = inst_957201);

(statearr_957224_957335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957218 === (4))){
var inst_957198 = (state_957217[(10)]);
var inst_957198__$1 = (state_957217[(2)]);
var inst_957199 = (inst_957198__$1 == null);
var state_957217__$1 = (function (){var statearr_957225 = state_957217;
(statearr_957225[(10)] = inst_957198__$1);

return statearr_957225;
})();
if(cljs.core.truth_(inst_957199)){
var statearr_957226_957336 = state_957217__$1;
(statearr_957226_957336[(1)] = (5));

} else {
var statearr_957227_957337 = state_957217__$1;
(statearr_957227_957337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957218 === (3))){
var inst_957215 = (state_957217[(2)]);
var state_957217__$1 = state_957217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957217__$1,inst_957215);
} else {
if((state_val_957218 === (2))){
var state_957217__$1 = state_957217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957217__$1,(4),from);
} else {
if((state_val_957218 === (1))){
var state_957217__$1 = state_957217;
var statearr_957228_957338 = state_957217__$1;
(statearr_957228_957338[(2)] = null);

(statearr_957228_957338[(1)] = (2));


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
});})(c__9199__auto___957332,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___957332,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_957232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_957232[(0)] = state_machine__9185__auto__);

(statearr_957232[(1)] = (1));

return statearr_957232;
});
var state_machine__9185__auto____1 = (function (state_957217){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957233){if((e957233 instanceof Object)){
var ex__9188__auto__ = e957233;
var statearr_957234_957339 = state_957217;
(statearr_957234_957339[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957340 = state_957217;
state_957217 = G__957340;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957217){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___957332,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_957235 = f__9200__auto__.call(null);
(statearr_957235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___957332);

return statearr_957235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___957332,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_957273){
var state_val_957274 = (state_957273[(1)]);
if((state_val_957274 === (7))){
var inst_957269 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
var statearr_957275_957341 = state_957273__$1;
(statearr_957275_957341[(2)] = inst_957269);

(statearr_957275_957341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (20))){
var state_957273__$1 = state_957273;
var statearr_957276_957342 = state_957273__$1;
(statearr_957276_957342[(2)] = null);

(statearr_957276_957342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (1))){
var state_957273__$1 = state_957273;
var statearr_957277_957343 = state_957273__$1;
(statearr_957277_957343[(2)] = null);

(statearr_957277_957343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (4))){
var inst_957238 = (state_957273[(7)]);
var inst_957238__$1 = (state_957273[(2)]);
var inst_957239 = (inst_957238__$1 == null);
var state_957273__$1 = (function (){var statearr_957278 = state_957273;
(statearr_957278[(7)] = inst_957238__$1);

return statearr_957278;
})();
if(cljs.core.truth_(inst_957239)){
var statearr_957279_957344 = state_957273__$1;
(statearr_957279_957344[(1)] = (5));

} else {
var statearr_957280_957345 = state_957273__$1;
(statearr_957280_957345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (15))){
var inst_957251 = (state_957273[(8)]);
var state_957273__$1 = state_957273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957273__$1,(18),to,inst_957251);
} else {
if((state_val_957274 === (21))){
var inst_957264 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
var statearr_957281_957346 = state_957273__$1;
(statearr_957281_957346[(2)] = inst_957264);

(statearr_957281_957346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (13))){
var inst_957266 = (state_957273[(2)]);
var state_957273__$1 = (function (){var statearr_957282 = state_957273;
(statearr_957282[(9)] = inst_957266);

return statearr_957282;
})();
var statearr_957283_957347 = state_957273__$1;
(statearr_957283_957347[(2)] = null);

(statearr_957283_957347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (6))){
var inst_957238 = (state_957273[(7)]);
var state_957273__$1 = state_957273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957273__$1,(11),inst_957238);
} else {
if((state_val_957274 === (17))){
var inst_957259 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
if(cljs.core.truth_(inst_957259)){
var statearr_957284_957348 = state_957273__$1;
(statearr_957284_957348[(1)] = (19));

} else {
var statearr_957285_957349 = state_957273__$1;
(statearr_957285_957349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (3))){
var inst_957271 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957273__$1,inst_957271);
} else {
if((state_val_957274 === (12))){
var inst_957248 = (state_957273[(10)]);
var state_957273__$1 = state_957273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957273__$1,(14),inst_957248);
} else {
if((state_val_957274 === (2))){
var state_957273__$1 = state_957273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957273__$1,(4),results);
} else {
if((state_val_957274 === (19))){
var state_957273__$1 = state_957273;
var statearr_957286_957350 = state_957273__$1;
(statearr_957286_957350[(2)] = null);

(statearr_957286_957350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (11))){
var inst_957248 = (state_957273[(2)]);
var state_957273__$1 = (function (){var statearr_957287 = state_957273;
(statearr_957287[(10)] = inst_957248);

return statearr_957287;
})();
var statearr_957288_957351 = state_957273__$1;
(statearr_957288_957351[(2)] = null);

(statearr_957288_957351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (9))){
var state_957273__$1 = state_957273;
var statearr_957289_957352 = state_957273__$1;
(statearr_957289_957352[(2)] = null);

(statearr_957289_957352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (5))){
var state_957273__$1 = state_957273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_957290_957353 = state_957273__$1;
(statearr_957290_957353[(1)] = (8));

} else {
var statearr_957291_957354 = state_957273__$1;
(statearr_957291_957354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (14))){
var inst_957253 = (state_957273[(11)]);
var inst_957251 = (state_957273[(8)]);
var inst_957251__$1 = (state_957273[(2)]);
var inst_957252 = (inst_957251__$1 == null);
var inst_957253__$1 = cljs.core.not.call(null,inst_957252);
var state_957273__$1 = (function (){var statearr_957292 = state_957273;
(statearr_957292[(11)] = inst_957253__$1);

(statearr_957292[(8)] = inst_957251__$1);

return statearr_957292;
})();
if(inst_957253__$1){
var statearr_957293_957355 = state_957273__$1;
(statearr_957293_957355[(1)] = (15));

} else {
var statearr_957294_957356 = state_957273__$1;
(statearr_957294_957356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (16))){
var inst_957253 = (state_957273[(11)]);
var state_957273__$1 = state_957273;
var statearr_957295_957357 = state_957273__$1;
(statearr_957295_957357[(2)] = inst_957253);

(statearr_957295_957357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (10))){
var inst_957245 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
var statearr_957296_957358 = state_957273__$1;
(statearr_957296_957358[(2)] = inst_957245);

(statearr_957296_957358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (18))){
var inst_957256 = (state_957273[(2)]);
var state_957273__$1 = state_957273;
var statearr_957297_957359 = state_957273__$1;
(statearr_957297_957359[(2)] = inst_957256);

(statearr_957297_957359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957274 === (8))){
var inst_957242 = cljs.core.async.close_BANG_.call(null,to);
var state_957273__$1 = state_957273;
var statearr_957298_957360 = state_957273__$1;
(statearr_957298_957360[(2)] = inst_957242);

(statearr_957298_957360[(1)] = (10));


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
var statearr_957302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_957302[(0)] = state_machine__9185__auto__);

(statearr_957302[(1)] = (1));

return statearr_957302;
});
var state_machine__9185__auto____1 = (function (state_957273){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957303){if((e957303 instanceof Object)){
var ex__9188__auto__ = e957303;
var statearr_957304_957361 = state_957273;
(statearr_957304_957361[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957362 = state_957273;
state_957273 = G__957362;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957273){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_957305 = f__9200__auto__.call(null);
(statearr_957305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_957305;
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
var c__9199__auto___957463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___957463,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___957463,tc,fc){
return (function (state_957438){
var state_val_957439 = (state_957438[(1)]);
if((state_val_957439 === (7))){
var inst_957434 = (state_957438[(2)]);
var state_957438__$1 = state_957438;
var statearr_957440_957464 = state_957438__$1;
(statearr_957440_957464[(2)] = inst_957434);

(statearr_957440_957464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (1))){
var state_957438__$1 = state_957438;
var statearr_957441_957465 = state_957438__$1;
(statearr_957441_957465[(2)] = null);

(statearr_957441_957465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (4))){
var inst_957415 = (state_957438[(7)]);
var inst_957415__$1 = (state_957438[(2)]);
var inst_957416 = (inst_957415__$1 == null);
var state_957438__$1 = (function (){var statearr_957442 = state_957438;
(statearr_957442[(7)] = inst_957415__$1);

return statearr_957442;
})();
if(cljs.core.truth_(inst_957416)){
var statearr_957443_957466 = state_957438__$1;
(statearr_957443_957466[(1)] = (5));

} else {
var statearr_957444_957467 = state_957438__$1;
(statearr_957444_957467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (13))){
var state_957438__$1 = state_957438;
var statearr_957445_957468 = state_957438__$1;
(statearr_957445_957468[(2)] = null);

(statearr_957445_957468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (6))){
var inst_957415 = (state_957438[(7)]);
var inst_957421 = p.call(null,inst_957415);
var state_957438__$1 = state_957438;
if(cljs.core.truth_(inst_957421)){
var statearr_957446_957469 = state_957438__$1;
(statearr_957446_957469[(1)] = (9));

} else {
var statearr_957447_957470 = state_957438__$1;
(statearr_957447_957470[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (3))){
var inst_957436 = (state_957438[(2)]);
var state_957438__$1 = state_957438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957438__$1,inst_957436);
} else {
if((state_val_957439 === (12))){
var state_957438__$1 = state_957438;
var statearr_957448_957471 = state_957438__$1;
(statearr_957448_957471[(2)] = null);

(statearr_957448_957471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (2))){
var state_957438__$1 = state_957438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957438__$1,(4),ch);
} else {
if((state_val_957439 === (11))){
var inst_957415 = (state_957438[(7)]);
var inst_957425 = (state_957438[(2)]);
var state_957438__$1 = state_957438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957438__$1,(8),inst_957425,inst_957415);
} else {
if((state_val_957439 === (9))){
var state_957438__$1 = state_957438;
var statearr_957449_957472 = state_957438__$1;
(statearr_957449_957472[(2)] = tc);

(statearr_957449_957472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (5))){
var inst_957418 = cljs.core.async.close_BANG_.call(null,tc);
var inst_957419 = cljs.core.async.close_BANG_.call(null,fc);
var state_957438__$1 = (function (){var statearr_957450 = state_957438;
(statearr_957450[(8)] = inst_957418);

return statearr_957450;
})();
var statearr_957451_957473 = state_957438__$1;
(statearr_957451_957473[(2)] = inst_957419);

(statearr_957451_957473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (14))){
var inst_957432 = (state_957438[(2)]);
var state_957438__$1 = state_957438;
var statearr_957452_957474 = state_957438__$1;
(statearr_957452_957474[(2)] = inst_957432);

(statearr_957452_957474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (10))){
var state_957438__$1 = state_957438;
var statearr_957453_957475 = state_957438__$1;
(statearr_957453_957475[(2)] = fc);

(statearr_957453_957475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957439 === (8))){
var inst_957427 = (state_957438[(2)]);
var state_957438__$1 = state_957438;
if(cljs.core.truth_(inst_957427)){
var statearr_957454_957476 = state_957438__$1;
(statearr_957454_957476[(1)] = (12));

} else {
var statearr_957455_957477 = state_957438__$1;
(statearr_957455_957477[(1)] = (13));

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
});})(c__9199__auto___957463,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___957463,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_957459 = [null,null,null,null,null,null,null,null,null];
(statearr_957459[(0)] = state_machine__9185__auto__);

(statearr_957459[(1)] = (1));

return statearr_957459;
});
var state_machine__9185__auto____1 = (function (state_957438){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957460){if((e957460 instanceof Object)){
var ex__9188__auto__ = e957460;
var statearr_957461_957478 = state_957438;
(statearr_957461_957478[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957479 = state_957438;
state_957438 = G__957479;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957438){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___957463,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_957462 = f__9200__auto__.call(null);
(statearr_957462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___957463);

return statearr_957462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___957463,tc,fc))
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
return (function (state_957526){
var state_val_957527 = (state_957526[(1)]);
if((state_val_957527 === (7))){
var inst_957522 = (state_957526[(2)]);
var state_957526__$1 = state_957526;
var statearr_957528_957544 = state_957526__$1;
(statearr_957528_957544[(2)] = inst_957522);

(statearr_957528_957544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957527 === (6))){
var inst_957515 = (state_957526[(7)]);
var inst_957512 = (state_957526[(8)]);
var inst_957519 = f.call(null,inst_957512,inst_957515);
var inst_957512__$1 = inst_957519;
var state_957526__$1 = (function (){var statearr_957529 = state_957526;
(statearr_957529[(8)] = inst_957512__$1);

return statearr_957529;
})();
var statearr_957530_957545 = state_957526__$1;
(statearr_957530_957545[(2)] = null);

(statearr_957530_957545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957527 === (5))){
var inst_957512 = (state_957526[(8)]);
var state_957526__$1 = state_957526;
var statearr_957531_957546 = state_957526__$1;
(statearr_957531_957546[(2)] = inst_957512);

(statearr_957531_957546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957527 === (4))){
var inst_957515 = (state_957526[(7)]);
var inst_957515__$1 = (state_957526[(2)]);
var inst_957516 = (inst_957515__$1 == null);
var state_957526__$1 = (function (){var statearr_957532 = state_957526;
(statearr_957532[(7)] = inst_957515__$1);

return statearr_957532;
})();
if(cljs.core.truth_(inst_957516)){
var statearr_957533_957547 = state_957526__$1;
(statearr_957533_957547[(1)] = (5));

} else {
var statearr_957534_957548 = state_957526__$1;
(statearr_957534_957548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957527 === (3))){
var inst_957524 = (state_957526[(2)]);
var state_957526__$1 = state_957526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957526__$1,inst_957524);
} else {
if((state_val_957527 === (2))){
var state_957526__$1 = state_957526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_957526__$1,(4),ch);
} else {
if((state_val_957527 === (1))){
var inst_957512 = init;
var state_957526__$1 = (function (){var statearr_957535 = state_957526;
(statearr_957535[(8)] = inst_957512);

return statearr_957535;
})();
var statearr_957536_957549 = state_957526__$1;
(statearr_957536_957549[(2)] = null);

(statearr_957536_957549[(1)] = (2));


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
var statearr_957540 = [null,null,null,null,null,null,null,null,null];
(statearr_957540[(0)] = state_machine__9185__auto__);

(statearr_957540[(1)] = (1));

return statearr_957540;
});
var state_machine__9185__auto____1 = (function (state_957526){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957541){if((e957541 instanceof Object)){
var ex__9188__auto__ = e957541;
var statearr_957542_957550 = state_957526;
(statearr_957542_957550[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957551 = state_957526;
state_957526 = G__957551;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957526){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_957543 = f__9200__auto__.call(null);
(statearr_957543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_957543;
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
return (function (state_957625){
var state_val_957626 = (state_957625[(1)]);
if((state_val_957626 === (7))){
var inst_957607 = (state_957625[(2)]);
var state_957625__$1 = state_957625;
var statearr_957627_957650 = state_957625__$1;
(statearr_957627_957650[(2)] = inst_957607);

(statearr_957627_957650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (1))){
var inst_957601 = cljs.core.seq.call(null,coll);
var inst_957602 = inst_957601;
var state_957625__$1 = (function (){var statearr_957628 = state_957625;
(statearr_957628[(7)] = inst_957602);

return statearr_957628;
})();
var statearr_957629_957651 = state_957625__$1;
(statearr_957629_957651[(2)] = null);

(statearr_957629_957651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (4))){
var inst_957602 = (state_957625[(7)]);
var inst_957605 = cljs.core.first.call(null,inst_957602);
var state_957625__$1 = state_957625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_957625__$1,(7),ch,inst_957605);
} else {
if((state_val_957626 === (13))){
var inst_957619 = (state_957625[(2)]);
var state_957625__$1 = state_957625;
var statearr_957630_957652 = state_957625__$1;
(statearr_957630_957652[(2)] = inst_957619);

(statearr_957630_957652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (6))){
var inst_957610 = (state_957625[(2)]);
var state_957625__$1 = state_957625;
if(cljs.core.truth_(inst_957610)){
var statearr_957631_957653 = state_957625__$1;
(statearr_957631_957653[(1)] = (8));

} else {
var statearr_957632_957654 = state_957625__$1;
(statearr_957632_957654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (3))){
var inst_957623 = (state_957625[(2)]);
var state_957625__$1 = state_957625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_957625__$1,inst_957623);
} else {
if((state_val_957626 === (12))){
var state_957625__$1 = state_957625;
var statearr_957633_957655 = state_957625__$1;
(statearr_957633_957655[(2)] = null);

(statearr_957633_957655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (2))){
var inst_957602 = (state_957625[(7)]);
var state_957625__$1 = state_957625;
if(cljs.core.truth_(inst_957602)){
var statearr_957634_957656 = state_957625__$1;
(statearr_957634_957656[(1)] = (4));

} else {
var statearr_957635_957657 = state_957625__$1;
(statearr_957635_957657[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (11))){
var inst_957616 = cljs.core.async.close_BANG_.call(null,ch);
var state_957625__$1 = state_957625;
var statearr_957636_957658 = state_957625__$1;
(statearr_957636_957658[(2)] = inst_957616);

(statearr_957636_957658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (9))){
var state_957625__$1 = state_957625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_957637_957659 = state_957625__$1;
(statearr_957637_957659[(1)] = (11));

} else {
var statearr_957638_957660 = state_957625__$1;
(statearr_957638_957660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (5))){
var inst_957602 = (state_957625[(7)]);
var state_957625__$1 = state_957625;
var statearr_957639_957661 = state_957625__$1;
(statearr_957639_957661[(2)] = inst_957602);

(statearr_957639_957661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (10))){
var inst_957621 = (state_957625[(2)]);
var state_957625__$1 = state_957625;
var statearr_957640_957662 = state_957625__$1;
(statearr_957640_957662[(2)] = inst_957621);

(statearr_957640_957662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_957626 === (8))){
var inst_957602 = (state_957625[(7)]);
var inst_957612 = cljs.core.next.call(null,inst_957602);
var inst_957602__$1 = inst_957612;
var state_957625__$1 = (function (){var statearr_957641 = state_957625;
(statearr_957641[(7)] = inst_957602__$1);

return statearr_957641;
})();
var statearr_957642_957663 = state_957625__$1;
(statearr_957642_957663[(2)] = null);

(statearr_957642_957663[(1)] = (2));


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
var statearr_957646 = [null,null,null,null,null,null,null,null];
(statearr_957646[(0)] = state_machine__9185__auto__);

(statearr_957646[(1)] = (1));

return statearr_957646;
});
var state_machine__9185__auto____1 = (function (state_957625){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_957625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e957647){if((e957647 instanceof Object)){
var ex__9188__auto__ = e957647;
var statearr_957648_957664 = state_957625;
(statearr_957648_957664[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_957625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e957647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__957665 = state_957625;
state_957625 = G__957665;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_957625){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_957625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_957649 = f__9200__auto__.call(null);
(statearr_957649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_957649;
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

cljs.core.async.Mux = (function (){var obj957667 = {};
return obj957667;
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


cljs.core.async.Mult = (function (){var obj957669 = {};
return obj957669;
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
if(typeof cljs.core.async.t957891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t957891 = (function (cs,ch,mult,meta957892){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta957892 = meta957892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t957891.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t957891.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t957891.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t957891.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t957891.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t957891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t957891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_957893){
var self__ = this;
var _957893__$1 = this;
return self__.meta957892;
});})(cs))
;

cljs.core.async.t957891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_957893,meta957892__$1){
var self__ = this;
var _957893__$1 = this;
return (new cljs.core.async.t957891(self__.cs,self__.ch,self__.mult,meta957892__$1));
});})(cs))
;

cljs.core.async.t957891.cljs$lang$type = true;

cljs.core.async.t957891.cljs$lang$ctorStr = "cljs.core.async/t957891";

cljs.core.async.t957891.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t957891");
});})(cs))
;

cljs.core.async.__GT_t957891 = ((function (cs){
return (function __GT_t957891(cs__$1,ch__$1,mult__$1,meta957892){
return (new cljs.core.async.t957891(cs__$1,ch__$1,mult__$1,meta957892));
});})(cs))
;

}

return (new cljs.core.async.t957891(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___958112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___958112,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___958112,cs,m,dchan,dctr,done){
return (function (state_958024){
var state_val_958025 = (state_958024[(1)]);
if((state_val_958025 === (7))){
var inst_958020 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958026_958113 = state_958024__$1;
(statearr_958026_958113[(2)] = inst_958020);

(statearr_958026_958113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (20))){
var inst_957925 = (state_958024[(7)]);
var inst_957935 = cljs.core.first.call(null,inst_957925);
var inst_957936 = cljs.core.nth.call(null,inst_957935,(0),null);
var inst_957937 = cljs.core.nth.call(null,inst_957935,(1),null);
var state_958024__$1 = (function (){var statearr_958027 = state_958024;
(statearr_958027[(8)] = inst_957936);

return statearr_958027;
})();
if(cljs.core.truth_(inst_957937)){
var statearr_958028_958114 = state_958024__$1;
(statearr_958028_958114[(1)] = (22));

} else {
var statearr_958029_958115 = state_958024__$1;
(statearr_958029_958115[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (27))){
var inst_957896 = (state_958024[(9)]);
var inst_957972 = (state_958024[(10)]);
var inst_957967 = (state_958024[(11)]);
var inst_957965 = (state_958024[(12)]);
var inst_957972__$1 = cljs.core._nth.call(null,inst_957965,inst_957967);
var inst_957973 = cljs.core.async.put_BANG_.call(null,inst_957972__$1,inst_957896,done);
var state_958024__$1 = (function (){var statearr_958030 = state_958024;
(statearr_958030[(10)] = inst_957972__$1);

return statearr_958030;
})();
if(cljs.core.truth_(inst_957973)){
var statearr_958031_958116 = state_958024__$1;
(statearr_958031_958116[(1)] = (30));

} else {
var statearr_958032_958117 = state_958024__$1;
(statearr_958032_958117[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (1))){
var state_958024__$1 = state_958024;
var statearr_958033_958118 = state_958024__$1;
(statearr_958033_958118[(2)] = null);

(statearr_958033_958118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (24))){
var inst_957925 = (state_958024[(7)]);
var inst_957942 = (state_958024[(2)]);
var inst_957943 = cljs.core.next.call(null,inst_957925);
var inst_957905 = inst_957943;
var inst_957906 = null;
var inst_957907 = (0);
var inst_957908 = (0);
var state_958024__$1 = (function (){var statearr_958034 = state_958024;
(statearr_958034[(13)] = inst_957906);

(statearr_958034[(14)] = inst_957905);

(statearr_958034[(15)] = inst_957942);

(statearr_958034[(16)] = inst_957907);

(statearr_958034[(17)] = inst_957908);

return statearr_958034;
})();
var statearr_958035_958119 = state_958024__$1;
(statearr_958035_958119[(2)] = null);

(statearr_958035_958119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (39))){
var state_958024__$1 = state_958024;
var statearr_958039_958120 = state_958024__$1;
(statearr_958039_958120[(2)] = null);

(statearr_958039_958120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (4))){
var inst_957896 = (state_958024[(9)]);
var inst_957896__$1 = (state_958024[(2)]);
var inst_957897 = (inst_957896__$1 == null);
var state_958024__$1 = (function (){var statearr_958040 = state_958024;
(statearr_958040[(9)] = inst_957896__$1);

return statearr_958040;
})();
if(cljs.core.truth_(inst_957897)){
var statearr_958041_958121 = state_958024__$1;
(statearr_958041_958121[(1)] = (5));

} else {
var statearr_958042_958122 = state_958024__$1;
(statearr_958042_958122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (15))){
var inst_957906 = (state_958024[(13)]);
var inst_957905 = (state_958024[(14)]);
var inst_957907 = (state_958024[(16)]);
var inst_957908 = (state_958024[(17)]);
var inst_957921 = (state_958024[(2)]);
var inst_957922 = (inst_957908 + (1));
var tmp958036 = inst_957906;
var tmp958037 = inst_957905;
var tmp958038 = inst_957907;
var inst_957905__$1 = tmp958037;
var inst_957906__$1 = tmp958036;
var inst_957907__$1 = tmp958038;
var inst_957908__$1 = inst_957922;
var state_958024__$1 = (function (){var statearr_958043 = state_958024;
(statearr_958043[(18)] = inst_957921);

(statearr_958043[(13)] = inst_957906__$1);

(statearr_958043[(14)] = inst_957905__$1);

(statearr_958043[(16)] = inst_957907__$1);

(statearr_958043[(17)] = inst_957908__$1);

return statearr_958043;
})();
var statearr_958044_958123 = state_958024__$1;
(statearr_958044_958123[(2)] = null);

(statearr_958044_958123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (21))){
var inst_957946 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958048_958124 = state_958024__$1;
(statearr_958048_958124[(2)] = inst_957946);

(statearr_958048_958124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (31))){
var inst_957972 = (state_958024[(10)]);
var inst_957976 = done.call(null,null);
var inst_957977 = cljs.core.async.untap_STAR_.call(null,m,inst_957972);
var state_958024__$1 = (function (){var statearr_958049 = state_958024;
(statearr_958049[(19)] = inst_957976);

return statearr_958049;
})();
var statearr_958050_958125 = state_958024__$1;
(statearr_958050_958125[(2)] = inst_957977);

(statearr_958050_958125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (32))){
var inst_957964 = (state_958024[(20)]);
var inst_957967 = (state_958024[(11)]);
var inst_957965 = (state_958024[(12)]);
var inst_957966 = (state_958024[(21)]);
var inst_957979 = (state_958024[(2)]);
var inst_957980 = (inst_957967 + (1));
var tmp958045 = inst_957964;
var tmp958046 = inst_957965;
var tmp958047 = inst_957966;
var inst_957964__$1 = tmp958045;
var inst_957965__$1 = tmp958046;
var inst_957966__$1 = tmp958047;
var inst_957967__$1 = inst_957980;
var state_958024__$1 = (function (){var statearr_958051 = state_958024;
(statearr_958051[(22)] = inst_957979);

(statearr_958051[(20)] = inst_957964__$1);

(statearr_958051[(11)] = inst_957967__$1);

(statearr_958051[(12)] = inst_957965__$1);

(statearr_958051[(21)] = inst_957966__$1);

return statearr_958051;
})();
var statearr_958052_958126 = state_958024__$1;
(statearr_958052_958126[(2)] = null);

(statearr_958052_958126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (40))){
var inst_957992 = (state_958024[(23)]);
var inst_957996 = done.call(null,null);
var inst_957997 = cljs.core.async.untap_STAR_.call(null,m,inst_957992);
var state_958024__$1 = (function (){var statearr_958053 = state_958024;
(statearr_958053[(24)] = inst_957996);

return statearr_958053;
})();
var statearr_958054_958127 = state_958024__$1;
(statearr_958054_958127[(2)] = inst_957997);

(statearr_958054_958127[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (33))){
var inst_957983 = (state_958024[(25)]);
var inst_957985 = cljs.core.chunked_seq_QMARK_.call(null,inst_957983);
var state_958024__$1 = state_958024;
if(inst_957985){
var statearr_958055_958128 = state_958024__$1;
(statearr_958055_958128[(1)] = (36));

} else {
var statearr_958056_958129 = state_958024__$1;
(statearr_958056_958129[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (13))){
var inst_957915 = (state_958024[(26)]);
var inst_957918 = cljs.core.async.close_BANG_.call(null,inst_957915);
var state_958024__$1 = state_958024;
var statearr_958057_958130 = state_958024__$1;
(statearr_958057_958130[(2)] = inst_957918);

(statearr_958057_958130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (22))){
var inst_957936 = (state_958024[(8)]);
var inst_957939 = cljs.core.async.close_BANG_.call(null,inst_957936);
var state_958024__$1 = state_958024;
var statearr_958058_958131 = state_958024__$1;
(statearr_958058_958131[(2)] = inst_957939);

(statearr_958058_958131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (36))){
var inst_957983 = (state_958024[(25)]);
var inst_957987 = cljs.core.chunk_first.call(null,inst_957983);
var inst_957988 = cljs.core.chunk_rest.call(null,inst_957983);
var inst_957989 = cljs.core.count.call(null,inst_957987);
var inst_957964 = inst_957988;
var inst_957965 = inst_957987;
var inst_957966 = inst_957989;
var inst_957967 = (0);
var state_958024__$1 = (function (){var statearr_958059 = state_958024;
(statearr_958059[(20)] = inst_957964);

(statearr_958059[(11)] = inst_957967);

(statearr_958059[(12)] = inst_957965);

(statearr_958059[(21)] = inst_957966);

return statearr_958059;
})();
var statearr_958060_958132 = state_958024__$1;
(statearr_958060_958132[(2)] = null);

(statearr_958060_958132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (41))){
var inst_957983 = (state_958024[(25)]);
var inst_957999 = (state_958024[(2)]);
var inst_958000 = cljs.core.next.call(null,inst_957983);
var inst_957964 = inst_958000;
var inst_957965 = null;
var inst_957966 = (0);
var inst_957967 = (0);
var state_958024__$1 = (function (){var statearr_958061 = state_958024;
(statearr_958061[(27)] = inst_957999);

(statearr_958061[(20)] = inst_957964);

(statearr_958061[(11)] = inst_957967);

(statearr_958061[(12)] = inst_957965);

(statearr_958061[(21)] = inst_957966);

return statearr_958061;
})();
var statearr_958062_958133 = state_958024__$1;
(statearr_958062_958133[(2)] = null);

(statearr_958062_958133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (43))){
var state_958024__$1 = state_958024;
var statearr_958063_958134 = state_958024__$1;
(statearr_958063_958134[(2)] = null);

(statearr_958063_958134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (29))){
var inst_958008 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958064_958135 = state_958024__$1;
(statearr_958064_958135[(2)] = inst_958008);

(statearr_958064_958135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (44))){
var inst_958017 = (state_958024[(2)]);
var state_958024__$1 = (function (){var statearr_958065 = state_958024;
(statearr_958065[(28)] = inst_958017);

return statearr_958065;
})();
var statearr_958066_958136 = state_958024__$1;
(statearr_958066_958136[(2)] = null);

(statearr_958066_958136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (6))){
var inst_957956 = (state_958024[(29)]);
var inst_957955 = cljs.core.deref.call(null,cs);
var inst_957956__$1 = cljs.core.keys.call(null,inst_957955);
var inst_957957 = cljs.core.count.call(null,inst_957956__$1);
var inst_957958 = cljs.core.reset_BANG_.call(null,dctr,inst_957957);
var inst_957963 = cljs.core.seq.call(null,inst_957956__$1);
var inst_957964 = inst_957963;
var inst_957965 = null;
var inst_957966 = (0);
var inst_957967 = (0);
var state_958024__$1 = (function (){var statearr_958067 = state_958024;
(statearr_958067[(20)] = inst_957964);

(statearr_958067[(30)] = inst_957958);

(statearr_958067[(11)] = inst_957967);

(statearr_958067[(12)] = inst_957965);

(statearr_958067[(21)] = inst_957966);

(statearr_958067[(29)] = inst_957956__$1);

return statearr_958067;
})();
var statearr_958068_958137 = state_958024__$1;
(statearr_958068_958137[(2)] = null);

(statearr_958068_958137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (28))){
var inst_957964 = (state_958024[(20)]);
var inst_957983 = (state_958024[(25)]);
var inst_957983__$1 = cljs.core.seq.call(null,inst_957964);
var state_958024__$1 = (function (){var statearr_958069 = state_958024;
(statearr_958069[(25)] = inst_957983__$1);

return statearr_958069;
})();
if(inst_957983__$1){
var statearr_958070_958138 = state_958024__$1;
(statearr_958070_958138[(1)] = (33));

} else {
var statearr_958071_958139 = state_958024__$1;
(statearr_958071_958139[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (25))){
var inst_957967 = (state_958024[(11)]);
var inst_957966 = (state_958024[(21)]);
var inst_957969 = (inst_957967 < inst_957966);
var inst_957970 = inst_957969;
var state_958024__$1 = state_958024;
if(cljs.core.truth_(inst_957970)){
var statearr_958072_958140 = state_958024__$1;
(statearr_958072_958140[(1)] = (27));

} else {
var statearr_958073_958141 = state_958024__$1;
(statearr_958073_958141[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (34))){
var state_958024__$1 = state_958024;
var statearr_958074_958142 = state_958024__$1;
(statearr_958074_958142[(2)] = null);

(statearr_958074_958142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (17))){
var state_958024__$1 = state_958024;
var statearr_958075_958143 = state_958024__$1;
(statearr_958075_958143[(2)] = null);

(statearr_958075_958143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (3))){
var inst_958022 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_958024__$1,inst_958022);
} else {
if((state_val_958025 === (12))){
var inst_957951 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958076_958144 = state_958024__$1;
(statearr_958076_958144[(2)] = inst_957951);

(statearr_958076_958144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (2))){
var state_958024__$1 = state_958024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_958024__$1,(4),ch);
} else {
if((state_val_958025 === (23))){
var state_958024__$1 = state_958024;
var statearr_958077_958145 = state_958024__$1;
(statearr_958077_958145[(2)] = null);

(statearr_958077_958145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (35))){
var inst_958006 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958078_958146 = state_958024__$1;
(statearr_958078_958146[(2)] = inst_958006);

(statearr_958078_958146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (19))){
var inst_957925 = (state_958024[(7)]);
var inst_957929 = cljs.core.chunk_first.call(null,inst_957925);
var inst_957930 = cljs.core.chunk_rest.call(null,inst_957925);
var inst_957931 = cljs.core.count.call(null,inst_957929);
var inst_957905 = inst_957930;
var inst_957906 = inst_957929;
var inst_957907 = inst_957931;
var inst_957908 = (0);
var state_958024__$1 = (function (){var statearr_958079 = state_958024;
(statearr_958079[(13)] = inst_957906);

(statearr_958079[(14)] = inst_957905);

(statearr_958079[(16)] = inst_957907);

(statearr_958079[(17)] = inst_957908);

return statearr_958079;
})();
var statearr_958080_958147 = state_958024__$1;
(statearr_958080_958147[(2)] = null);

(statearr_958080_958147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (11))){
var inst_957905 = (state_958024[(14)]);
var inst_957925 = (state_958024[(7)]);
var inst_957925__$1 = cljs.core.seq.call(null,inst_957905);
var state_958024__$1 = (function (){var statearr_958081 = state_958024;
(statearr_958081[(7)] = inst_957925__$1);

return statearr_958081;
})();
if(inst_957925__$1){
var statearr_958082_958148 = state_958024__$1;
(statearr_958082_958148[(1)] = (16));

} else {
var statearr_958083_958149 = state_958024__$1;
(statearr_958083_958149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (9))){
var inst_957953 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958084_958150 = state_958024__$1;
(statearr_958084_958150[(2)] = inst_957953);

(statearr_958084_958150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (5))){
var inst_957903 = cljs.core.deref.call(null,cs);
var inst_957904 = cljs.core.seq.call(null,inst_957903);
var inst_957905 = inst_957904;
var inst_957906 = null;
var inst_957907 = (0);
var inst_957908 = (0);
var state_958024__$1 = (function (){var statearr_958085 = state_958024;
(statearr_958085[(13)] = inst_957906);

(statearr_958085[(14)] = inst_957905);

(statearr_958085[(16)] = inst_957907);

(statearr_958085[(17)] = inst_957908);

return statearr_958085;
})();
var statearr_958086_958151 = state_958024__$1;
(statearr_958086_958151[(2)] = null);

(statearr_958086_958151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (14))){
var state_958024__$1 = state_958024;
var statearr_958087_958152 = state_958024__$1;
(statearr_958087_958152[(2)] = null);

(statearr_958087_958152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (45))){
var inst_958014 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958088_958153 = state_958024__$1;
(statearr_958088_958153[(2)] = inst_958014);

(statearr_958088_958153[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (26))){
var inst_957956 = (state_958024[(29)]);
var inst_958010 = (state_958024[(2)]);
var inst_958011 = cljs.core.seq.call(null,inst_957956);
var state_958024__$1 = (function (){var statearr_958089 = state_958024;
(statearr_958089[(31)] = inst_958010);

return statearr_958089;
})();
if(inst_958011){
var statearr_958090_958154 = state_958024__$1;
(statearr_958090_958154[(1)] = (42));

} else {
var statearr_958091_958155 = state_958024__$1;
(statearr_958091_958155[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (16))){
var inst_957925 = (state_958024[(7)]);
var inst_957927 = cljs.core.chunked_seq_QMARK_.call(null,inst_957925);
var state_958024__$1 = state_958024;
if(inst_957927){
var statearr_958092_958156 = state_958024__$1;
(statearr_958092_958156[(1)] = (19));

} else {
var statearr_958093_958157 = state_958024__$1;
(statearr_958093_958157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (38))){
var inst_958003 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958094_958158 = state_958024__$1;
(statearr_958094_958158[(2)] = inst_958003);

(statearr_958094_958158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (30))){
var state_958024__$1 = state_958024;
var statearr_958095_958159 = state_958024__$1;
(statearr_958095_958159[(2)] = null);

(statearr_958095_958159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (10))){
var inst_957906 = (state_958024[(13)]);
var inst_957908 = (state_958024[(17)]);
var inst_957914 = cljs.core._nth.call(null,inst_957906,inst_957908);
var inst_957915 = cljs.core.nth.call(null,inst_957914,(0),null);
var inst_957916 = cljs.core.nth.call(null,inst_957914,(1),null);
var state_958024__$1 = (function (){var statearr_958096 = state_958024;
(statearr_958096[(26)] = inst_957915);

return statearr_958096;
})();
if(cljs.core.truth_(inst_957916)){
var statearr_958097_958160 = state_958024__$1;
(statearr_958097_958160[(1)] = (13));

} else {
var statearr_958098_958161 = state_958024__$1;
(statearr_958098_958161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (18))){
var inst_957949 = (state_958024[(2)]);
var state_958024__$1 = state_958024;
var statearr_958099_958162 = state_958024__$1;
(statearr_958099_958162[(2)] = inst_957949);

(statearr_958099_958162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (42))){
var state_958024__$1 = state_958024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_958024__$1,(45),dchan);
} else {
if((state_val_958025 === (37))){
var inst_957896 = (state_958024[(9)]);
var inst_957983 = (state_958024[(25)]);
var inst_957992 = (state_958024[(23)]);
var inst_957992__$1 = cljs.core.first.call(null,inst_957983);
var inst_957993 = cljs.core.async.put_BANG_.call(null,inst_957992__$1,inst_957896,done);
var state_958024__$1 = (function (){var statearr_958100 = state_958024;
(statearr_958100[(23)] = inst_957992__$1);

return statearr_958100;
})();
if(cljs.core.truth_(inst_957993)){
var statearr_958101_958163 = state_958024__$1;
(statearr_958101_958163[(1)] = (39));

} else {
var statearr_958102_958164 = state_958024__$1;
(statearr_958102_958164[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958025 === (8))){
var inst_957907 = (state_958024[(16)]);
var inst_957908 = (state_958024[(17)]);
var inst_957910 = (inst_957908 < inst_957907);
var inst_957911 = inst_957910;
var state_958024__$1 = state_958024;
if(cljs.core.truth_(inst_957911)){
var statearr_958103_958165 = state_958024__$1;
(statearr_958103_958165[(1)] = (10));

} else {
var statearr_958104_958166 = state_958024__$1;
(statearr_958104_958166[(1)] = (11));

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
});})(c__9199__auto___958112,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___958112,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_958108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_958108[(0)] = state_machine__9185__auto__);

(statearr_958108[(1)] = (1));

return statearr_958108;
});
var state_machine__9185__auto____1 = (function (state_958024){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_958024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e958109){if((e958109 instanceof Object)){
var ex__9188__auto__ = e958109;
var statearr_958110_958167 = state_958024;
(statearr_958110_958167[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e958109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__958168 = state_958024;
state_958024 = G__958168;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_958024){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_958024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___958112,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_958111 = f__9200__auto__.call(null);
(statearr_958111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___958112);

return statearr_958111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___958112,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj958170 = {};
return obj958170;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__958171){
var map__958176 = p__958171;
var map__958176__$1 = ((cljs.core.seq_QMARK_.call(null,map__958176))?cljs.core.apply.call(null,cljs.core.hash_map,map__958176):map__958176);
var opts = map__958176__$1;
var statearr_958177_958180 = state;
(statearr_958177_958180[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__958176,map__958176__$1,opts){
return (function (val){
var statearr_958178_958181 = state;
(statearr_958178_958181[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__958176,map__958176__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_958179_958182 = state;
(statearr_958179_958182[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__958171 = null;
if (arguments.length > 3) {
  p__958171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__958171);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__958183){
var state = cljs.core.first(arglist__958183);
arglist__958183 = cljs.core.next(arglist__958183);
var cont_block = cljs.core.first(arglist__958183);
arglist__958183 = cljs.core.next(arglist__958183);
var ports = cljs.core.first(arglist__958183);
var p__958171 = cljs.core.rest(arglist__958183);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__958171);
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
if(typeof cljs.core.async.t958303 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t958303 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta958304){
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
this.meta958304 = meta958304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t958303.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t958303.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t958303.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t958303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_958305){
var self__ = this;
var _958305__$1 = this;
return self__.meta958304;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_958305,meta958304__$1){
var self__ = this;
var _958305__$1 = this;
return (new cljs.core.async.t958303(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta958304__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t958303.cljs$lang$type = true;

cljs.core.async.t958303.cljs$lang$ctorStr = "cljs.core.async/t958303";

cljs.core.async.t958303.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t958303");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t958303 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t958303(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta958304){
return (new cljs.core.async.t958303(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta958304));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t958303(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___958422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_958375){
var state_val_958376 = (state_958375[(1)]);
if((state_val_958376 === (7))){
var inst_958319 = (state_958375[(7)]);
var inst_958324 = cljs.core.apply.call(null,cljs.core.hash_map,inst_958319);
var state_958375__$1 = state_958375;
var statearr_958377_958423 = state_958375__$1;
(statearr_958377_958423[(2)] = inst_958324);

(statearr_958377_958423[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (20))){
var inst_958334 = (state_958375[(8)]);
var state_958375__$1 = state_958375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_958375__$1,(23),out,inst_958334);
} else {
if((state_val_958376 === (1))){
var inst_958309 = (state_958375[(9)]);
var inst_958309__$1 = calc_state.call(null);
var inst_958310 = cljs.core.seq_QMARK_.call(null,inst_958309__$1);
var state_958375__$1 = (function (){var statearr_958378 = state_958375;
(statearr_958378[(9)] = inst_958309__$1);

return statearr_958378;
})();
if(inst_958310){
var statearr_958379_958424 = state_958375__$1;
(statearr_958379_958424[(1)] = (2));

} else {
var statearr_958380_958425 = state_958375__$1;
(statearr_958380_958425[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (24))){
var inst_958327 = (state_958375[(10)]);
var inst_958319 = inst_958327;
var state_958375__$1 = (function (){var statearr_958381 = state_958375;
(statearr_958381[(7)] = inst_958319);

return statearr_958381;
})();
var statearr_958382_958426 = state_958375__$1;
(statearr_958382_958426[(2)] = null);

(statearr_958382_958426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (4))){
var inst_958309 = (state_958375[(9)]);
var inst_958315 = (state_958375[(2)]);
var inst_958316 = cljs.core.get.call(null,inst_958315,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_958317 = cljs.core.get.call(null,inst_958315,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_958318 = cljs.core.get.call(null,inst_958315,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_958319 = inst_958309;
var state_958375__$1 = (function (){var statearr_958383 = state_958375;
(statearr_958383[(11)] = inst_958316);

(statearr_958383[(12)] = inst_958318);

(statearr_958383[(7)] = inst_958319);

(statearr_958383[(13)] = inst_958317);

return statearr_958383;
})();
var statearr_958384_958427 = state_958375__$1;
(statearr_958384_958427[(2)] = null);

(statearr_958384_958427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (15))){
var state_958375__$1 = state_958375;
var statearr_958385_958428 = state_958375__$1;
(statearr_958385_958428[(2)] = null);

(statearr_958385_958428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (21))){
var inst_958327 = (state_958375[(10)]);
var inst_958319 = inst_958327;
var state_958375__$1 = (function (){var statearr_958386 = state_958375;
(statearr_958386[(7)] = inst_958319);

return statearr_958386;
})();
var statearr_958387_958429 = state_958375__$1;
(statearr_958387_958429[(2)] = null);

(statearr_958387_958429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (13))){
var inst_958371 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
var statearr_958388_958430 = state_958375__$1;
(statearr_958388_958430[(2)] = inst_958371);

(statearr_958388_958430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (22))){
var inst_958369 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
var statearr_958389_958431 = state_958375__$1;
(statearr_958389_958431[(2)] = inst_958369);

(statearr_958389_958431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (6))){
var inst_958373 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_958375__$1,inst_958373);
} else {
if((state_val_958376 === (25))){
var state_958375__$1 = state_958375;
var statearr_958390_958432 = state_958375__$1;
(statearr_958390_958432[(2)] = null);

(statearr_958390_958432[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (17))){
var inst_958349 = (state_958375[(14)]);
var state_958375__$1 = state_958375;
var statearr_958391_958433 = state_958375__$1;
(statearr_958391_958433[(2)] = inst_958349);

(statearr_958391_958433[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (3))){
var inst_958309 = (state_958375[(9)]);
var state_958375__$1 = state_958375;
var statearr_958392_958434 = state_958375__$1;
(statearr_958392_958434[(2)] = inst_958309);

(statearr_958392_958434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (12))){
var inst_958330 = (state_958375[(15)]);
var inst_958349 = (state_958375[(14)]);
var inst_958335 = (state_958375[(16)]);
var inst_958349__$1 = inst_958330.call(null,inst_958335);
var state_958375__$1 = (function (){var statearr_958393 = state_958375;
(statearr_958393[(14)] = inst_958349__$1);

return statearr_958393;
})();
if(cljs.core.truth_(inst_958349__$1)){
var statearr_958394_958435 = state_958375__$1;
(statearr_958394_958435[(1)] = (17));

} else {
var statearr_958395_958436 = state_958375__$1;
(statearr_958395_958436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (2))){
var inst_958309 = (state_958375[(9)]);
var inst_958312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_958309);
var state_958375__$1 = state_958375;
var statearr_958396_958437 = state_958375__$1;
(statearr_958396_958437[(2)] = inst_958312);

(statearr_958396_958437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (23))){
var inst_958360 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
if(cljs.core.truth_(inst_958360)){
var statearr_958397_958438 = state_958375__$1;
(statearr_958397_958438[(1)] = (24));

} else {
var statearr_958398_958439 = state_958375__$1;
(statearr_958398_958439[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (19))){
var inst_958357 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
if(cljs.core.truth_(inst_958357)){
var statearr_958399_958440 = state_958375__$1;
(statearr_958399_958440[(1)] = (20));

} else {
var statearr_958400_958441 = state_958375__$1;
(statearr_958400_958441[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (11))){
var inst_958334 = (state_958375[(8)]);
var inst_958340 = (inst_958334 == null);
var state_958375__$1 = state_958375;
if(cljs.core.truth_(inst_958340)){
var statearr_958401_958442 = state_958375__$1;
(statearr_958401_958442[(1)] = (14));

} else {
var statearr_958402_958443 = state_958375__$1;
(statearr_958402_958443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (9))){
var inst_958327 = (state_958375[(10)]);
var inst_958327__$1 = (state_958375[(2)]);
var inst_958328 = cljs.core.get.call(null,inst_958327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_958329 = cljs.core.get.call(null,inst_958327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_958330 = cljs.core.get.call(null,inst_958327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_958375__$1 = (function (){var statearr_958403 = state_958375;
(statearr_958403[(15)] = inst_958330);

(statearr_958403[(10)] = inst_958327__$1);

(statearr_958403[(17)] = inst_958329);

return statearr_958403;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_958375__$1,(10),inst_958328);
} else {
if((state_val_958376 === (5))){
var inst_958319 = (state_958375[(7)]);
var inst_958322 = cljs.core.seq_QMARK_.call(null,inst_958319);
var state_958375__$1 = state_958375;
if(inst_958322){
var statearr_958404_958444 = state_958375__$1;
(statearr_958404_958444[(1)] = (7));

} else {
var statearr_958405_958445 = state_958375__$1;
(statearr_958405_958445[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (14))){
var inst_958335 = (state_958375[(16)]);
var inst_958342 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_958335);
var state_958375__$1 = state_958375;
var statearr_958406_958446 = state_958375__$1;
(statearr_958406_958446[(2)] = inst_958342);

(statearr_958406_958446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (26))){
var inst_958365 = (state_958375[(2)]);
var state_958375__$1 = state_958375;
var statearr_958407_958447 = state_958375__$1;
(statearr_958407_958447[(2)] = inst_958365);

(statearr_958407_958447[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (16))){
var inst_958345 = (state_958375[(2)]);
var inst_958346 = calc_state.call(null);
var inst_958319 = inst_958346;
var state_958375__$1 = (function (){var statearr_958408 = state_958375;
(statearr_958408[(18)] = inst_958345);

(statearr_958408[(7)] = inst_958319);

return statearr_958408;
})();
var statearr_958409_958448 = state_958375__$1;
(statearr_958409_958448[(2)] = null);

(statearr_958409_958448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (10))){
var inst_958334 = (state_958375[(8)]);
var inst_958335 = (state_958375[(16)]);
var inst_958333 = (state_958375[(2)]);
var inst_958334__$1 = cljs.core.nth.call(null,inst_958333,(0),null);
var inst_958335__$1 = cljs.core.nth.call(null,inst_958333,(1),null);
var inst_958336 = (inst_958334__$1 == null);
var inst_958337 = cljs.core._EQ_.call(null,inst_958335__$1,change);
var inst_958338 = (inst_958336) || (inst_958337);
var state_958375__$1 = (function (){var statearr_958410 = state_958375;
(statearr_958410[(8)] = inst_958334__$1);

(statearr_958410[(16)] = inst_958335__$1);

return statearr_958410;
})();
if(cljs.core.truth_(inst_958338)){
var statearr_958411_958449 = state_958375__$1;
(statearr_958411_958449[(1)] = (11));

} else {
var statearr_958412_958450 = state_958375__$1;
(statearr_958412_958450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (18))){
var inst_958330 = (state_958375[(15)]);
var inst_958335 = (state_958375[(16)]);
var inst_958329 = (state_958375[(17)]);
var inst_958352 = cljs.core.empty_QMARK_.call(null,inst_958330);
var inst_958353 = inst_958329.call(null,inst_958335);
var inst_958354 = cljs.core.not.call(null,inst_958353);
var inst_958355 = (inst_958352) && (inst_958354);
var state_958375__$1 = state_958375;
var statearr_958413_958451 = state_958375__$1;
(statearr_958413_958451[(2)] = inst_958355);

(statearr_958413_958451[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958376 === (8))){
var inst_958319 = (state_958375[(7)]);
var state_958375__$1 = state_958375;
var statearr_958414_958452 = state_958375__$1;
(statearr_958414_958452[(2)] = inst_958319);

(statearr_958414_958452[(1)] = (9));


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
});})(c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_958418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_958418[(0)] = state_machine__9185__auto__);

(statearr_958418[(1)] = (1));

return statearr_958418;
});
var state_machine__9185__auto____1 = (function (state_958375){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_958375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e958419){if((e958419 instanceof Object)){
var ex__9188__auto__ = e958419;
var statearr_958420_958453 = state_958375;
(statearr_958420_958453[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e958419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__958454 = state_958375;
state_958375 = G__958454;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_958375){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_958375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_958421 = f__9200__auto__.call(null);
(statearr_958421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___958422);

return statearr_958421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___958422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj958456 = {};
return obj958456;
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
return (function (p1__958457_SHARP_){
if(cljs.core.truth_(p1__958457_SHARP_.call(null,topic))){
return p1__958457_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__958457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t958580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t958580 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta958581){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta958581 = meta958581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t958580.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t958580.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t958580.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t958580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t958580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t958580.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t958580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t958580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_958582){
var self__ = this;
var _958582__$1 = this;
return self__.meta958581;
});})(mults,ensure_mult))
;

cljs.core.async.t958580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_958582,meta958581__$1){
var self__ = this;
var _958582__$1 = this;
return (new cljs.core.async.t958580(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta958581__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t958580.cljs$lang$type = true;

cljs.core.async.t958580.cljs$lang$ctorStr = "cljs.core.async/t958580";

cljs.core.async.t958580.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t958580");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t958580 = ((function (mults,ensure_mult){
return (function __GT_t958580(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta958581){
return (new cljs.core.async.t958580(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta958581));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t958580(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___958702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___958702,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___958702,mults,ensure_mult,p){
return (function (state_958654){
var state_val_958655 = (state_958654[(1)]);
if((state_val_958655 === (7))){
var inst_958650 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958656_958703 = state_958654__$1;
(statearr_958656_958703[(2)] = inst_958650);

(statearr_958656_958703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (20))){
var state_958654__$1 = state_958654;
var statearr_958657_958704 = state_958654__$1;
(statearr_958657_958704[(2)] = null);

(statearr_958657_958704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (1))){
var state_958654__$1 = state_958654;
var statearr_958658_958705 = state_958654__$1;
(statearr_958658_958705[(2)] = null);

(statearr_958658_958705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (24))){
var inst_958633 = (state_958654[(7)]);
var inst_958642 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_958633);
var state_958654__$1 = state_958654;
var statearr_958659_958706 = state_958654__$1;
(statearr_958659_958706[(2)] = inst_958642);

(statearr_958659_958706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (4))){
var inst_958585 = (state_958654[(8)]);
var inst_958585__$1 = (state_958654[(2)]);
var inst_958586 = (inst_958585__$1 == null);
var state_958654__$1 = (function (){var statearr_958660 = state_958654;
(statearr_958660[(8)] = inst_958585__$1);

return statearr_958660;
})();
if(cljs.core.truth_(inst_958586)){
var statearr_958661_958707 = state_958654__$1;
(statearr_958661_958707[(1)] = (5));

} else {
var statearr_958662_958708 = state_958654__$1;
(statearr_958662_958708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (15))){
var inst_958627 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958663_958709 = state_958654__$1;
(statearr_958663_958709[(2)] = inst_958627);

(statearr_958663_958709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (21))){
var inst_958647 = (state_958654[(2)]);
var state_958654__$1 = (function (){var statearr_958664 = state_958654;
(statearr_958664[(9)] = inst_958647);

return statearr_958664;
})();
var statearr_958665_958710 = state_958654__$1;
(statearr_958665_958710[(2)] = null);

(statearr_958665_958710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (13))){
var inst_958609 = (state_958654[(10)]);
var inst_958611 = cljs.core.chunked_seq_QMARK_.call(null,inst_958609);
var state_958654__$1 = state_958654;
if(inst_958611){
var statearr_958666_958711 = state_958654__$1;
(statearr_958666_958711[(1)] = (16));

} else {
var statearr_958667_958712 = state_958654__$1;
(statearr_958667_958712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (22))){
var inst_958639 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
if(cljs.core.truth_(inst_958639)){
var statearr_958668_958713 = state_958654__$1;
(statearr_958668_958713[(1)] = (23));

} else {
var statearr_958669_958714 = state_958654__$1;
(statearr_958669_958714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (6))){
var inst_958633 = (state_958654[(7)]);
var inst_958635 = (state_958654[(11)]);
var inst_958585 = (state_958654[(8)]);
var inst_958633__$1 = topic_fn.call(null,inst_958585);
var inst_958634 = cljs.core.deref.call(null,mults);
var inst_958635__$1 = cljs.core.get.call(null,inst_958634,inst_958633__$1);
var state_958654__$1 = (function (){var statearr_958670 = state_958654;
(statearr_958670[(7)] = inst_958633__$1);

(statearr_958670[(11)] = inst_958635__$1);

return statearr_958670;
})();
if(cljs.core.truth_(inst_958635__$1)){
var statearr_958671_958715 = state_958654__$1;
(statearr_958671_958715[(1)] = (19));

} else {
var statearr_958672_958716 = state_958654__$1;
(statearr_958672_958716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (25))){
var inst_958644 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958673_958717 = state_958654__$1;
(statearr_958673_958717[(2)] = inst_958644);

(statearr_958673_958717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (17))){
var inst_958609 = (state_958654[(10)]);
var inst_958618 = cljs.core.first.call(null,inst_958609);
var inst_958619 = cljs.core.async.muxch_STAR_.call(null,inst_958618);
var inst_958620 = cljs.core.async.close_BANG_.call(null,inst_958619);
var inst_958621 = cljs.core.next.call(null,inst_958609);
var inst_958595 = inst_958621;
var inst_958596 = null;
var inst_958597 = (0);
var inst_958598 = (0);
var state_958654__$1 = (function (){var statearr_958674 = state_958654;
(statearr_958674[(12)] = inst_958597);

(statearr_958674[(13)] = inst_958598);

(statearr_958674[(14)] = inst_958595);

(statearr_958674[(15)] = inst_958596);

(statearr_958674[(16)] = inst_958620);

return statearr_958674;
})();
var statearr_958675_958718 = state_958654__$1;
(statearr_958675_958718[(2)] = null);

(statearr_958675_958718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (3))){
var inst_958652 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_958654__$1,inst_958652);
} else {
if((state_val_958655 === (12))){
var inst_958629 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958676_958719 = state_958654__$1;
(statearr_958676_958719[(2)] = inst_958629);

(statearr_958676_958719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (2))){
var state_958654__$1 = state_958654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_958654__$1,(4),ch);
} else {
if((state_val_958655 === (23))){
var state_958654__$1 = state_958654;
var statearr_958677_958720 = state_958654__$1;
(statearr_958677_958720[(2)] = null);

(statearr_958677_958720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (19))){
var inst_958635 = (state_958654[(11)]);
var inst_958585 = (state_958654[(8)]);
var inst_958637 = cljs.core.async.muxch_STAR_.call(null,inst_958635);
var state_958654__$1 = state_958654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_958654__$1,(22),inst_958637,inst_958585);
} else {
if((state_val_958655 === (11))){
var inst_958595 = (state_958654[(14)]);
var inst_958609 = (state_958654[(10)]);
var inst_958609__$1 = cljs.core.seq.call(null,inst_958595);
var state_958654__$1 = (function (){var statearr_958678 = state_958654;
(statearr_958678[(10)] = inst_958609__$1);

return statearr_958678;
})();
if(inst_958609__$1){
var statearr_958679_958721 = state_958654__$1;
(statearr_958679_958721[(1)] = (13));

} else {
var statearr_958680_958722 = state_958654__$1;
(statearr_958680_958722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (9))){
var inst_958631 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958681_958723 = state_958654__$1;
(statearr_958681_958723[(2)] = inst_958631);

(statearr_958681_958723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (5))){
var inst_958592 = cljs.core.deref.call(null,mults);
var inst_958593 = cljs.core.vals.call(null,inst_958592);
var inst_958594 = cljs.core.seq.call(null,inst_958593);
var inst_958595 = inst_958594;
var inst_958596 = null;
var inst_958597 = (0);
var inst_958598 = (0);
var state_958654__$1 = (function (){var statearr_958682 = state_958654;
(statearr_958682[(12)] = inst_958597);

(statearr_958682[(13)] = inst_958598);

(statearr_958682[(14)] = inst_958595);

(statearr_958682[(15)] = inst_958596);

return statearr_958682;
})();
var statearr_958683_958724 = state_958654__$1;
(statearr_958683_958724[(2)] = null);

(statearr_958683_958724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (14))){
var state_958654__$1 = state_958654;
var statearr_958687_958725 = state_958654__$1;
(statearr_958687_958725[(2)] = null);

(statearr_958687_958725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (16))){
var inst_958609 = (state_958654[(10)]);
var inst_958613 = cljs.core.chunk_first.call(null,inst_958609);
var inst_958614 = cljs.core.chunk_rest.call(null,inst_958609);
var inst_958615 = cljs.core.count.call(null,inst_958613);
var inst_958595 = inst_958614;
var inst_958596 = inst_958613;
var inst_958597 = inst_958615;
var inst_958598 = (0);
var state_958654__$1 = (function (){var statearr_958688 = state_958654;
(statearr_958688[(12)] = inst_958597);

(statearr_958688[(13)] = inst_958598);

(statearr_958688[(14)] = inst_958595);

(statearr_958688[(15)] = inst_958596);

return statearr_958688;
})();
var statearr_958689_958726 = state_958654__$1;
(statearr_958689_958726[(2)] = null);

(statearr_958689_958726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (10))){
var inst_958597 = (state_958654[(12)]);
var inst_958598 = (state_958654[(13)]);
var inst_958595 = (state_958654[(14)]);
var inst_958596 = (state_958654[(15)]);
var inst_958603 = cljs.core._nth.call(null,inst_958596,inst_958598);
var inst_958604 = cljs.core.async.muxch_STAR_.call(null,inst_958603);
var inst_958605 = cljs.core.async.close_BANG_.call(null,inst_958604);
var inst_958606 = (inst_958598 + (1));
var tmp958684 = inst_958597;
var tmp958685 = inst_958595;
var tmp958686 = inst_958596;
var inst_958595__$1 = tmp958685;
var inst_958596__$1 = tmp958686;
var inst_958597__$1 = tmp958684;
var inst_958598__$1 = inst_958606;
var state_958654__$1 = (function (){var statearr_958690 = state_958654;
(statearr_958690[(12)] = inst_958597__$1);

(statearr_958690[(13)] = inst_958598__$1);

(statearr_958690[(14)] = inst_958595__$1);

(statearr_958690[(17)] = inst_958605);

(statearr_958690[(15)] = inst_958596__$1);

return statearr_958690;
})();
var statearr_958691_958727 = state_958654__$1;
(statearr_958691_958727[(2)] = null);

(statearr_958691_958727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (18))){
var inst_958624 = (state_958654[(2)]);
var state_958654__$1 = state_958654;
var statearr_958692_958728 = state_958654__$1;
(statearr_958692_958728[(2)] = inst_958624);

(statearr_958692_958728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958655 === (8))){
var inst_958597 = (state_958654[(12)]);
var inst_958598 = (state_958654[(13)]);
var inst_958600 = (inst_958598 < inst_958597);
var inst_958601 = inst_958600;
var state_958654__$1 = state_958654;
if(cljs.core.truth_(inst_958601)){
var statearr_958693_958729 = state_958654__$1;
(statearr_958693_958729[(1)] = (10));

} else {
var statearr_958694_958730 = state_958654__$1;
(statearr_958694_958730[(1)] = (11));

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
});})(c__9199__auto___958702,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___958702,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_958698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_958698[(0)] = state_machine__9185__auto__);

(statearr_958698[(1)] = (1));

return statearr_958698;
});
var state_machine__9185__auto____1 = (function (state_958654){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_958654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e958699){if((e958699 instanceof Object)){
var ex__9188__auto__ = e958699;
var statearr_958700_958731 = state_958654;
(statearr_958700_958731[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e958699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__958732 = state_958654;
state_958654 = G__958732;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_958654){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_958654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___958702,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_958701 = f__9200__auto__.call(null);
(statearr_958701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___958702);

return statearr_958701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___958702,mults,ensure_mult,p))
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
var c__9199__auto___958869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_958839){
var state_val_958840 = (state_958839[(1)]);
if((state_val_958840 === (7))){
var state_958839__$1 = state_958839;
var statearr_958841_958870 = state_958839__$1;
(statearr_958841_958870[(2)] = null);

(statearr_958841_958870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (1))){
var state_958839__$1 = state_958839;
var statearr_958842_958871 = state_958839__$1;
(statearr_958842_958871[(2)] = null);

(statearr_958842_958871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (4))){
var inst_958803 = (state_958839[(7)]);
var inst_958805 = (inst_958803 < cnt);
var state_958839__$1 = state_958839;
if(cljs.core.truth_(inst_958805)){
var statearr_958843_958872 = state_958839__$1;
(statearr_958843_958872[(1)] = (6));

} else {
var statearr_958844_958873 = state_958839__$1;
(statearr_958844_958873[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (15))){
var inst_958835 = (state_958839[(2)]);
var state_958839__$1 = state_958839;
var statearr_958845_958874 = state_958839__$1;
(statearr_958845_958874[(2)] = inst_958835);

(statearr_958845_958874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (13))){
var inst_958828 = cljs.core.async.close_BANG_.call(null,out);
var state_958839__$1 = state_958839;
var statearr_958846_958875 = state_958839__$1;
(statearr_958846_958875[(2)] = inst_958828);

(statearr_958846_958875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (6))){
var state_958839__$1 = state_958839;
var statearr_958847_958876 = state_958839__$1;
(statearr_958847_958876[(2)] = null);

(statearr_958847_958876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (3))){
var inst_958837 = (state_958839[(2)]);
var state_958839__$1 = state_958839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_958839__$1,inst_958837);
} else {
if((state_val_958840 === (12))){
var inst_958825 = (state_958839[(8)]);
var inst_958825__$1 = (state_958839[(2)]);
var inst_958826 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_958825__$1);
var state_958839__$1 = (function (){var statearr_958848 = state_958839;
(statearr_958848[(8)] = inst_958825__$1);

return statearr_958848;
})();
if(cljs.core.truth_(inst_958826)){
var statearr_958849_958877 = state_958839__$1;
(statearr_958849_958877[(1)] = (13));

} else {
var statearr_958850_958878 = state_958839__$1;
(statearr_958850_958878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (2))){
var inst_958802 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_958803 = (0);
var state_958839__$1 = (function (){var statearr_958851 = state_958839;
(statearr_958851[(9)] = inst_958802);

(statearr_958851[(7)] = inst_958803);

return statearr_958851;
})();
var statearr_958852_958879 = state_958839__$1;
(statearr_958852_958879[(2)] = null);

(statearr_958852_958879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (11))){
var inst_958803 = (state_958839[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_958839,(10),Object,null,(9));
var inst_958812 = chs__$1.call(null,inst_958803);
var inst_958813 = done.call(null,inst_958803);
var inst_958814 = cljs.core.async.take_BANG_.call(null,inst_958812,inst_958813);
var state_958839__$1 = state_958839;
var statearr_958853_958880 = state_958839__$1;
(statearr_958853_958880[(2)] = inst_958814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (9))){
var inst_958803 = (state_958839[(7)]);
var inst_958816 = (state_958839[(2)]);
var inst_958817 = (inst_958803 + (1));
var inst_958803__$1 = inst_958817;
var state_958839__$1 = (function (){var statearr_958854 = state_958839;
(statearr_958854[(7)] = inst_958803__$1);

(statearr_958854[(10)] = inst_958816);

return statearr_958854;
})();
var statearr_958855_958881 = state_958839__$1;
(statearr_958855_958881[(2)] = null);

(statearr_958855_958881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (5))){
var inst_958823 = (state_958839[(2)]);
var state_958839__$1 = (function (){var statearr_958856 = state_958839;
(statearr_958856[(11)] = inst_958823);

return statearr_958856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_958839__$1,(12),dchan);
} else {
if((state_val_958840 === (14))){
var inst_958825 = (state_958839[(8)]);
var inst_958830 = cljs.core.apply.call(null,f,inst_958825);
var state_958839__$1 = state_958839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_958839__$1,(16),out,inst_958830);
} else {
if((state_val_958840 === (16))){
var inst_958832 = (state_958839[(2)]);
var state_958839__$1 = (function (){var statearr_958857 = state_958839;
(statearr_958857[(12)] = inst_958832);

return statearr_958857;
})();
var statearr_958858_958882 = state_958839__$1;
(statearr_958858_958882[(2)] = null);

(statearr_958858_958882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (10))){
var inst_958807 = (state_958839[(2)]);
var inst_958808 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_958839__$1 = (function (){var statearr_958859 = state_958839;
(statearr_958859[(13)] = inst_958807);

return statearr_958859;
})();
var statearr_958860_958883 = state_958839__$1;
(statearr_958860_958883[(2)] = inst_958808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958840 === (8))){
var inst_958821 = (state_958839[(2)]);
var state_958839__$1 = state_958839;
var statearr_958861_958884 = state_958839__$1;
(statearr_958861_958884[(2)] = inst_958821);

(statearr_958861_958884[(1)] = (5));


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
});})(c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_958865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_958865[(0)] = state_machine__9185__auto__);

(statearr_958865[(1)] = (1));

return statearr_958865;
});
var state_machine__9185__auto____1 = (function (state_958839){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_958839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e958866){if((e958866 instanceof Object)){
var ex__9188__auto__ = e958866;
var statearr_958867_958885 = state_958839;
(statearr_958867_958885[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e958866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__958886 = state_958839;
state_958839 = G__958886;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_958839){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_958839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_958868 = f__9200__auto__.call(null);
(statearr_958868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___958869);

return statearr_958868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___958869,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___958994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___958994,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___958994,out){
return (function (state_958970){
var state_val_958971 = (state_958970[(1)]);
if((state_val_958971 === (7))){
var inst_958950 = (state_958970[(7)]);
var inst_958949 = (state_958970[(8)]);
var inst_958949__$1 = (state_958970[(2)]);
var inst_958950__$1 = cljs.core.nth.call(null,inst_958949__$1,(0),null);
var inst_958951 = cljs.core.nth.call(null,inst_958949__$1,(1),null);
var inst_958952 = (inst_958950__$1 == null);
var state_958970__$1 = (function (){var statearr_958972 = state_958970;
(statearr_958972[(7)] = inst_958950__$1);

(statearr_958972[(8)] = inst_958949__$1);

(statearr_958972[(9)] = inst_958951);

return statearr_958972;
})();
if(cljs.core.truth_(inst_958952)){
var statearr_958973_958995 = state_958970__$1;
(statearr_958973_958995[(1)] = (8));

} else {
var statearr_958974_958996 = state_958970__$1;
(statearr_958974_958996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (1))){
var inst_958941 = cljs.core.vec.call(null,chs);
var inst_958942 = inst_958941;
var state_958970__$1 = (function (){var statearr_958975 = state_958970;
(statearr_958975[(10)] = inst_958942);

return statearr_958975;
})();
var statearr_958976_958997 = state_958970__$1;
(statearr_958976_958997[(2)] = null);

(statearr_958976_958997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (4))){
var inst_958942 = (state_958970[(10)]);
var state_958970__$1 = state_958970;
return cljs.core.async.ioc_alts_BANG_.call(null,state_958970__$1,(7),inst_958942);
} else {
if((state_val_958971 === (6))){
var inst_958966 = (state_958970[(2)]);
var state_958970__$1 = state_958970;
var statearr_958977_958998 = state_958970__$1;
(statearr_958977_958998[(2)] = inst_958966);

(statearr_958977_958998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (3))){
var inst_958968 = (state_958970[(2)]);
var state_958970__$1 = state_958970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_958970__$1,inst_958968);
} else {
if((state_val_958971 === (2))){
var inst_958942 = (state_958970[(10)]);
var inst_958944 = cljs.core.count.call(null,inst_958942);
var inst_958945 = (inst_958944 > (0));
var state_958970__$1 = state_958970;
if(cljs.core.truth_(inst_958945)){
var statearr_958979_958999 = state_958970__$1;
(statearr_958979_958999[(1)] = (4));

} else {
var statearr_958980_959000 = state_958970__$1;
(statearr_958980_959000[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (11))){
var inst_958942 = (state_958970[(10)]);
var inst_958959 = (state_958970[(2)]);
var tmp958978 = inst_958942;
var inst_958942__$1 = tmp958978;
var state_958970__$1 = (function (){var statearr_958981 = state_958970;
(statearr_958981[(11)] = inst_958959);

(statearr_958981[(10)] = inst_958942__$1);

return statearr_958981;
})();
var statearr_958982_959001 = state_958970__$1;
(statearr_958982_959001[(2)] = null);

(statearr_958982_959001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (9))){
var inst_958950 = (state_958970[(7)]);
var state_958970__$1 = state_958970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_958970__$1,(11),out,inst_958950);
} else {
if((state_val_958971 === (5))){
var inst_958964 = cljs.core.async.close_BANG_.call(null,out);
var state_958970__$1 = state_958970;
var statearr_958983_959002 = state_958970__$1;
(statearr_958983_959002[(2)] = inst_958964);

(statearr_958983_959002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (10))){
var inst_958962 = (state_958970[(2)]);
var state_958970__$1 = state_958970;
var statearr_958984_959003 = state_958970__$1;
(statearr_958984_959003[(2)] = inst_958962);

(statearr_958984_959003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_958971 === (8))){
var inst_958950 = (state_958970[(7)]);
var inst_958949 = (state_958970[(8)]);
var inst_958942 = (state_958970[(10)]);
var inst_958951 = (state_958970[(9)]);
var inst_958954 = (function (){var c = inst_958951;
var v = inst_958950;
var vec__958947 = inst_958949;
var cs = inst_958942;
return ((function (c,v,vec__958947,cs,inst_958950,inst_958949,inst_958942,inst_958951,state_val_958971,c__9199__auto___958994,out){
return (function (p1__958887_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__958887_SHARP_);
});
;})(c,v,vec__958947,cs,inst_958950,inst_958949,inst_958942,inst_958951,state_val_958971,c__9199__auto___958994,out))
})();
var inst_958955 = cljs.core.filterv.call(null,inst_958954,inst_958942);
var inst_958942__$1 = inst_958955;
var state_958970__$1 = (function (){var statearr_958985 = state_958970;
(statearr_958985[(10)] = inst_958942__$1);

return statearr_958985;
})();
var statearr_958986_959004 = state_958970__$1;
(statearr_958986_959004[(2)] = null);

(statearr_958986_959004[(1)] = (2));


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
});})(c__9199__auto___958994,out))
;
return ((function (switch__9184__auto__,c__9199__auto___958994,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_958990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_958990[(0)] = state_machine__9185__auto__);

(statearr_958990[(1)] = (1));

return statearr_958990;
});
var state_machine__9185__auto____1 = (function (state_958970){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_958970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e958991){if((e958991 instanceof Object)){
var ex__9188__auto__ = e958991;
var statearr_958992_959005 = state_958970;
(statearr_958992_959005[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_958970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e958991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959006 = state_958970;
state_958970 = G__959006;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_958970){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_958970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___958994,out))
})();
var state__9201__auto__ = (function (){var statearr_958993 = f__9200__auto__.call(null);
(statearr_958993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___958994);

return statearr_958993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___958994,out))
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
var c__9199__auto___959099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___959099,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___959099,out){
return (function (state_959076){
var state_val_959077 = (state_959076[(1)]);
if((state_val_959077 === (7))){
var inst_959058 = (state_959076[(7)]);
var inst_959058__$1 = (state_959076[(2)]);
var inst_959059 = (inst_959058__$1 == null);
var inst_959060 = cljs.core.not.call(null,inst_959059);
var state_959076__$1 = (function (){var statearr_959078 = state_959076;
(statearr_959078[(7)] = inst_959058__$1);

return statearr_959078;
})();
if(inst_959060){
var statearr_959079_959100 = state_959076__$1;
(statearr_959079_959100[(1)] = (8));

} else {
var statearr_959080_959101 = state_959076__$1;
(statearr_959080_959101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (1))){
var inst_959053 = (0);
var state_959076__$1 = (function (){var statearr_959081 = state_959076;
(statearr_959081[(8)] = inst_959053);

return statearr_959081;
})();
var statearr_959082_959102 = state_959076__$1;
(statearr_959082_959102[(2)] = null);

(statearr_959082_959102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (4))){
var state_959076__$1 = state_959076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959076__$1,(7),ch);
} else {
if((state_val_959077 === (6))){
var inst_959071 = (state_959076[(2)]);
var state_959076__$1 = state_959076;
var statearr_959083_959103 = state_959076__$1;
(statearr_959083_959103[(2)] = inst_959071);

(statearr_959083_959103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (3))){
var inst_959073 = (state_959076[(2)]);
var inst_959074 = cljs.core.async.close_BANG_.call(null,out);
var state_959076__$1 = (function (){var statearr_959084 = state_959076;
(statearr_959084[(9)] = inst_959073);

return statearr_959084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959076__$1,inst_959074);
} else {
if((state_val_959077 === (2))){
var inst_959053 = (state_959076[(8)]);
var inst_959055 = (inst_959053 < n);
var state_959076__$1 = state_959076;
if(cljs.core.truth_(inst_959055)){
var statearr_959085_959104 = state_959076__$1;
(statearr_959085_959104[(1)] = (4));

} else {
var statearr_959086_959105 = state_959076__$1;
(statearr_959086_959105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (11))){
var inst_959053 = (state_959076[(8)]);
var inst_959063 = (state_959076[(2)]);
var inst_959064 = (inst_959053 + (1));
var inst_959053__$1 = inst_959064;
var state_959076__$1 = (function (){var statearr_959087 = state_959076;
(statearr_959087[(8)] = inst_959053__$1);

(statearr_959087[(10)] = inst_959063);

return statearr_959087;
})();
var statearr_959088_959106 = state_959076__$1;
(statearr_959088_959106[(2)] = null);

(statearr_959088_959106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (9))){
var state_959076__$1 = state_959076;
var statearr_959089_959107 = state_959076__$1;
(statearr_959089_959107[(2)] = null);

(statearr_959089_959107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (5))){
var state_959076__$1 = state_959076;
var statearr_959090_959108 = state_959076__$1;
(statearr_959090_959108[(2)] = null);

(statearr_959090_959108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (10))){
var inst_959068 = (state_959076[(2)]);
var state_959076__$1 = state_959076;
var statearr_959091_959109 = state_959076__$1;
(statearr_959091_959109[(2)] = inst_959068);

(statearr_959091_959109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959077 === (8))){
var inst_959058 = (state_959076[(7)]);
var state_959076__$1 = state_959076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959076__$1,(11),out,inst_959058);
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
});})(c__9199__auto___959099,out))
;
return ((function (switch__9184__auto__,c__9199__auto___959099,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_959095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_959095[(0)] = state_machine__9185__auto__);

(statearr_959095[(1)] = (1));

return statearr_959095;
});
var state_machine__9185__auto____1 = (function (state_959076){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959096){if((e959096 instanceof Object)){
var ex__9188__auto__ = e959096;
var statearr_959097_959110 = state_959076;
(statearr_959097_959110[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959111 = state_959076;
state_959076 = G__959111;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959076){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___959099,out))
})();
var state__9201__auto__ = (function (){var statearr_959098 = f__9200__auto__.call(null);
(statearr_959098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___959099);

return statearr_959098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___959099,out))
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
if(typeof cljs.core.async.t959119 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t959119 = (function (ch,f,map_LT_,meta959120){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta959120 = meta959120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t959122 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t959122 = (function (fn1,_,meta959120,map_LT_,f,ch,meta959123){
this.fn1 = fn1;
this._ = _;
this.meta959120 = meta959120;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta959123 = meta959123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t959122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t959122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t959122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__959112_SHARP_){
return f1.call(null,(((p1__959112_SHARP_ == null))?null:self__.f.call(null,p1__959112_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t959122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_959124){
var self__ = this;
var _959124__$1 = this;
return self__.meta959123;
});})(___$1))
;

cljs.core.async.t959122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_959124,meta959123__$1){
var self__ = this;
var _959124__$1 = this;
return (new cljs.core.async.t959122(self__.fn1,self__._,self__.meta959120,self__.map_LT_,self__.f,self__.ch,meta959123__$1));
});})(___$1))
;

cljs.core.async.t959122.cljs$lang$type = true;

cljs.core.async.t959122.cljs$lang$ctorStr = "cljs.core.async/t959122";

cljs.core.async.t959122.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t959122");
});})(___$1))
;

cljs.core.async.__GT_t959122 = ((function (___$1){
return (function __GT_t959122(fn1__$1,___$2,meta959120__$1,map_LT___$1,f__$1,ch__$1,meta959123){
return (new cljs.core.async.t959122(fn1__$1,___$2,meta959120__$1,map_LT___$1,f__$1,ch__$1,meta959123));
});})(___$1))
;

}

return (new cljs.core.async.t959122(fn1,___$1,self__.meta959120,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t959119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t959119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_959121){
var self__ = this;
var _959121__$1 = this;
return self__.meta959120;
});

cljs.core.async.t959119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_959121,meta959120__$1){
var self__ = this;
var _959121__$1 = this;
return (new cljs.core.async.t959119(self__.ch,self__.f,self__.map_LT_,meta959120__$1));
});

cljs.core.async.t959119.cljs$lang$type = true;

cljs.core.async.t959119.cljs$lang$ctorStr = "cljs.core.async/t959119";

cljs.core.async.t959119.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t959119");
});

cljs.core.async.__GT_t959119 = (function __GT_t959119(ch__$1,f__$1,map_LT___$1,meta959120){
return (new cljs.core.async.t959119(ch__$1,f__$1,map_LT___$1,meta959120));
});

}

return (new cljs.core.async.t959119(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t959128 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t959128 = (function (ch,f,map_GT_,meta959129){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta959129 = meta959129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t959128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t959128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_959130){
var self__ = this;
var _959130__$1 = this;
return self__.meta959129;
});

cljs.core.async.t959128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_959130,meta959129__$1){
var self__ = this;
var _959130__$1 = this;
return (new cljs.core.async.t959128(self__.ch,self__.f,self__.map_GT_,meta959129__$1));
});

cljs.core.async.t959128.cljs$lang$type = true;

cljs.core.async.t959128.cljs$lang$ctorStr = "cljs.core.async/t959128";

cljs.core.async.t959128.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t959128");
});

cljs.core.async.__GT_t959128 = (function __GT_t959128(ch__$1,f__$1,map_GT___$1,meta959129){
return (new cljs.core.async.t959128(ch__$1,f__$1,map_GT___$1,meta959129));
});

}

return (new cljs.core.async.t959128(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t959134 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t959134 = (function (ch,p,filter_GT_,meta959135){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta959135 = meta959135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t959134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t959134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_959136){
var self__ = this;
var _959136__$1 = this;
return self__.meta959135;
});

cljs.core.async.t959134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_959136,meta959135__$1){
var self__ = this;
var _959136__$1 = this;
return (new cljs.core.async.t959134(self__.ch,self__.p,self__.filter_GT_,meta959135__$1));
});

cljs.core.async.t959134.cljs$lang$type = true;

cljs.core.async.t959134.cljs$lang$ctorStr = "cljs.core.async/t959134";

cljs.core.async.t959134.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t959134");
});

cljs.core.async.__GT_t959134 = (function __GT_t959134(ch__$1,p__$1,filter_GT___$1,meta959135){
return (new cljs.core.async.t959134(ch__$1,p__$1,filter_GT___$1,meta959135));
});

}

return (new cljs.core.async.t959134(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___959219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___959219,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___959219,out){
return (function (state_959198){
var state_val_959199 = (state_959198[(1)]);
if((state_val_959199 === (7))){
var inst_959194 = (state_959198[(2)]);
var state_959198__$1 = state_959198;
var statearr_959200_959220 = state_959198__$1;
(statearr_959200_959220[(2)] = inst_959194);

(statearr_959200_959220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (1))){
var state_959198__$1 = state_959198;
var statearr_959201_959221 = state_959198__$1;
(statearr_959201_959221[(2)] = null);

(statearr_959201_959221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (4))){
var inst_959180 = (state_959198[(7)]);
var inst_959180__$1 = (state_959198[(2)]);
var inst_959181 = (inst_959180__$1 == null);
var state_959198__$1 = (function (){var statearr_959202 = state_959198;
(statearr_959202[(7)] = inst_959180__$1);

return statearr_959202;
})();
if(cljs.core.truth_(inst_959181)){
var statearr_959203_959222 = state_959198__$1;
(statearr_959203_959222[(1)] = (5));

} else {
var statearr_959204_959223 = state_959198__$1;
(statearr_959204_959223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (6))){
var inst_959180 = (state_959198[(7)]);
var inst_959185 = p.call(null,inst_959180);
var state_959198__$1 = state_959198;
if(cljs.core.truth_(inst_959185)){
var statearr_959205_959224 = state_959198__$1;
(statearr_959205_959224[(1)] = (8));

} else {
var statearr_959206_959225 = state_959198__$1;
(statearr_959206_959225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (3))){
var inst_959196 = (state_959198[(2)]);
var state_959198__$1 = state_959198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959198__$1,inst_959196);
} else {
if((state_val_959199 === (2))){
var state_959198__$1 = state_959198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959198__$1,(4),ch);
} else {
if((state_val_959199 === (11))){
var inst_959188 = (state_959198[(2)]);
var state_959198__$1 = state_959198;
var statearr_959207_959226 = state_959198__$1;
(statearr_959207_959226[(2)] = inst_959188);

(statearr_959207_959226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (9))){
var state_959198__$1 = state_959198;
var statearr_959208_959227 = state_959198__$1;
(statearr_959208_959227[(2)] = null);

(statearr_959208_959227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (5))){
var inst_959183 = cljs.core.async.close_BANG_.call(null,out);
var state_959198__$1 = state_959198;
var statearr_959209_959228 = state_959198__$1;
(statearr_959209_959228[(2)] = inst_959183);

(statearr_959209_959228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (10))){
var inst_959191 = (state_959198[(2)]);
var state_959198__$1 = (function (){var statearr_959210 = state_959198;
(statearr_959210[(8)] = inst_959191);

return statearr_959210;
})();
var statearr_959211_959229 = state_959198__$1;
(statearr_959211_959229[(2)] = null);

(statearr_959211_959229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959199 === (8))){
var inst_959180 = (state_959198[(7)]);
var state_959198__$1 = state_959198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959198__$1,(11),out,inst_959180);
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
});})(c__9199__auto___959219,out))
;
return ((function (switch__9184__auto__,c__9199__auto___959219,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_959215 = [null,null,null,null,null,null,null,null,null];
(statearr_959215[(0)] = state_machine__9185__auto__);

(statearr_959215[(1)] = (1));

return statearr_959215;
});
var state_machine__9185__auto____1 = (function (state_959198){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959216){if((e959216 instanceof Object)){
var ex__9188__auto__ = e959216;
var statearr_959217_959230 = state_959198;
(statearr_959217_959230[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959231 = state_959198;
state_959198 = G__959231;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959198){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___959219,out))
})();
var state__9201__auto__ = (function (){var statearr_959218 = f__9200__auto__.call(null);
(statearr_959218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___959219);

return statearr_959218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___959219,out))
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
return (function (state_959397){
var state_val_959398 = (state_959397[(1)]);
if((state_val_959398 === (7))){
var inst_959393 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
var statearr_959399_959440 = state_959397__$1;
(statearr_959399_959440[(2)] = inst_959393);

(statearr_959399_959440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (20))){
var inst_959363 = (state_959397[(7)]);
var inst_959374 = (state_959397[(2)]);
var inst_959375 = cljs.core.next.call(null,inst_959363);
var inst_959349 = inst_959375;
var inst_959350 = null;
var inst_959351 = (0);
var inst_959352 = (0);
var state_959397__$1 = (function (){var statearr_959400 = state_959397;
(statearr_959400[(8)] = inst_959351);

(statearr_959400[(9)] = inst_959374);

(statearr_959400[(10)] = inst_959350);

(statearr_959400[(11)] = inst_959349);

(statearr_959400[(12)] = inst_959352);

return statearr_959400;
})();
var statearr_959401_959441 = state_959397__$1;
(statearr_959401_959441[(2)] = null);

(statearr_959401_959441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (1))){
var state_959397__$1 = state_959397;
var statearr_959402_959442 = state_959397__$1;
(statearr_959402_959442[(2)] = null);

(statearr_959402_959442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (4))){
var inst_959338 = (state_959397[(13)]);
var inst_959338__$1 = (state_959397[(2)]);
var inst_959339 = (inst_959338__$1 == null);
var state_959397__$1 = (function (){var statearr_959403 = state_959397;
(statearr_959403[(13)] = inst_959338__$1);

return statearr_959403;
})();
if(cljs.core.truth_(inst_959339)){
var statearr_959404_959443 = state_959397__$1;
(statearr_959404_959443[(1)] = (5));

} else {
var statearr_959405_959444 = state_959397__$1;
(statearr_959405_959444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (15))){
var state_959397__$1 = state_959397;
var statearr_959409_959445 = state_959397__$1;
(statearr_959409_959445[(2)] = null);

(statearr_959409_959445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (21))){
var state_959397__$1 = state_959397;
var statearr_959410_959446 = state_959397__$1;
(statearr_959410_959446[(2)] = null);

(statearr_959410_959446[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (13))){
var inst_959351 = (state_959397[(8)]);
var inst_959350 = (state_959397[(10)]);
var inst_959349 = (state_959397[(11)]);
var inst_959352 = (state_959397[(12)]);
var inst_959359 = (state_959397[(2)]);
var inst_959360 = (inst_959352 + (1));
var tmp959406 = inst_959351;
var tmp959407 = inst_959350;
var tmp959408 = inst_959349;
var inst_959349__$1 = tmp959408;
var inst_959350__$1 = tmp959407;
var inst_959351__$1 = tmp959406;
var inst_959352__$1 = inst_959360;
var state_959397__$1 = (function (){var statearr_959411 = state_959397;
(statearr_959411[(14)] = inst_959359);

(statearr_959411[(8)] = inst_959351__$1);

(statearr_959411[(10)] = inst_959350__$1);

(statearr_959411[(11)] = inst_959349__$1);

(statearr_959411[(12)] = inst_959352__$1);

return statearr_959411;
})();
var statearr_959412_959447 = state_959397__$1;
(statearr_959412_959447[(2)] = null);

(statearr_959412_959447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (22))){
var state_959397__$1 = state_959397;
var statearr_959413_959448 = state_959397__$1;
(statearr_959413_959448[(2)] = null);

(statearr_959413_959448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (6))){
var inst_959338 = (state_959397[(13)]);
var inst_959347 = f.call(null,inst_959338);
var inst_959348 = cljs.core.seq.call(null,inst_959347);
var inst_959349 = inst_959348;
var inst_959350 = null;
var inst_959351 = (0);
var inst_959352 = (0);
var state_959397__$1 = (function (){var statearr_959414 = state_959397;
(statearr_959414[(8)] = inst_959351);

(statearr_959414[(10)] = inst_959350);

(statearr_959414[(11)] = inst_959349);

(statearr_959414[(12)] = inst_959352);

return statearr_959414;
})();
var statearr_959415_959449 = state_959397__$1;
(statearr_959415_959449[(2)] = null);

(statearr_959415_959449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (17))){
var inst_959363 = (state_959397[(7)]);
var inst_959367 = cljs.core.chunk_first.call(null,inst_959363);
var inst_959368 = cljs.core.chunk_rest.call(null,inst_959363);
var inst_959369 = cljs.core.count.call(null,inst_959367);
var inst_959349 = inst_959368;
var inst_959350 = inst_959367;
var inst_959351 = inst_959369;
var inst_959352 = (0);
var state_959397__$1 = (function (){var statearr_959416 = state_959397;
(statearr_959416[(8)] = inst_959351);

(statearr_959416[(10)] = inst_959350);

(statearr_959416[(11)] = inst_959349);

(statearr_959416[(12)] = inst_959352);

return statearr_959416;
})();
var statearr_959417_959450 = state_959397__$1;
(statearr_959417_959450[(2)] = null);

(statearr_959417_959450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (3))){
var inst_959395 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959397__$1,inst_959395);
} else {
if((state_val_959398 === (12))){
var inst_959383 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
var statearr_959418_959451 = state_959397__$1;
(statearr_959418_959451[(2)] = inst_959383);

(statearr_959418_959451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (2))){
var state_959397__$1 = state_959397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959397__$1,(4),in$);
} else {
if((state_val_959398 === (23))){
var inst_959391 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
var statearr_959419_959452 = state_959397__$1;
(statearr_959419_959452[(2)] = inst_959391);

(statearr_959419_959452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (19))){
var inst_959378 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
var statearr_959420_959453 = state_959397__$1;
(statearr_959420_959453[(2)] = inst_959378);

(statearr_959420_959453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (11))){
var inst_959363 = (state_959397[(7)]);
var inst_959349 = (state_959397[(11)]);
var inst_959363__$1 = cljs.core.seq.call(null,inst_959349);
var state_959397__$1 = (function (){var statearr_959421 = state_959397;
(statearr_959421[(7)] = inst_959363__$1);

return statearr_959421;
})();
if(inst_959363__$1){
var statearr_959422_959454 = state_959397__$1;
(statearr_959422_959454[(1)] = (14));

} else {
var statearr_959423_959455 = state_959397__$1;
(statearr_959423_959455[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (9))){
var inst_959385 = (state_959397[(2)]);
var inst_959386 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_959397__$1 = (function (){var statearr_959424 = state_959397;
(statearr_959424[(15)] = inst_959385);

return statearr_959424;
})();
if(cljs.core.truth_(inst_959386)){
var statearr_959425_959456 = state_959397__$1;
(statearr_959425_959456[(1)] = (21));

} else {
var statearr_959426_959457 = state_959397__$1;
(statearr_959426_959457[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (5))){
var inst_959341 = cljs.core.async.close_BANG_.call(null,out);
var state_959397__$1 = state_959397;
var statearr_959427_959458 = state_959397__$1;
(statearr_959427_959458[(2)] = inst_959341);

(statearr_959427_959458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (14))){
var inst_959363 = (state_959397[(7)]);
var inst_959365 = cljs.core.chunked_seq_QMARK_.call(null,inst_959363);
var state_959397__$1 = state_959397;
if(inst_959365){
var statearr_959428_959459 = state_959397__$1;
(statearr_959428_959459[(1)] = (17));

} else {
var statearr_959429_959460 = state_959397__$1;
(statearr_959429_959460[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (16))){
var inst_959381 = (state_959397[(2)]);
var state_959397__$1 = state_959397;
var statearr_959430_959461 = state_959397__$1;
(statearr_959430_959461[(2)] = inst_959381);

(statearr_959430_959461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959398 === (10))){
var inst_959350 = (state_959397[(10)]);
var inst_959352 = (state_959397[(12)]);
var inst_959357 = cljs.core._nth.call(null,inst_959350,inst_959352);
var state_959397__$1 = state_959397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959397__$1,(13),out,inst_959357);
} else {
if((state_val_959398 === (18))){
var inst_959363 = (state_959397[(7)]);
var inst_959372 = cljs.core.first.call(null,inst_959363);
var state_959397__$1 = state_959397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959397__$1,(20),out,inst_959372);
} else {
if((state_val_959398 === (8))){
var inst_959351 = (state_959397[(8)]);
var inst_959352 = (state_959397[(12)]);
var inst_959354 = (inst_959352 < inst_959351);
var inst_959355 = inst_959354;
var state_959397__$1 = state_959397;
if(cljs.core.truth_(inst_959355)){
var statearr_959431_959462 = state_959397__$1;
(statearr_959431_959462[(1)] = (10));

} else {
var statearr_959432_959463 = state_959397__$1;
(statearr_959432_959463[(1)] = (11));

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
var statearr_959436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_959436[(0)] = state_machine__9185__auto__);

(statearr_959436[(1)] = (1));

return statearr_959436;
});
var state_machine__9185__auto____1 = (function (state_959397){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959437){if((e959437 instanceof Object)){
var ex__9188__auto__ = e959437;
var statearr_959438_959464 = state_959397;
(statearr_959438_959464[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959465 = state_959397;
state_959397 = G__959465;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959397){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_959439 = f__9200__auto__.call(null);
(statearr_959439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_959439;
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
var c__9199__auto___959562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___959562,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___959562,out){
return (function (state_959537){
var state_val_959538 = (state_959537[(1)]);
if((state_val_959538 === (7))){
var inst_959532 = (state_959537[(2)]);
var state_959537__$1 = state_959537;
var statearr_959539_959563 = state_959537__$1;
(statearr_959539_959563[(2)] = inst_959532);

(statearr_959539_959563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (1))){
var inst_959514 = null;
var state_959537__$1 = (function (){var statearr_959540 = state_959537;
(statearr_959540[(7)] = inst_959514);

return statearr_959540;
})();
var statearr_959541_959564 = state_959537__$1;
(statearr_959541_959564[(2)] = null);

(statearr_959541_959564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (4))){
var inst_959517 = (state_959537[(8)]);
var inst_959517__$1 = (state_959537[(2)]);
var inst_959518 = (inst_959517__$1 == null);
var inst_959519 = cljs.core.not.call(null,inst_959518);
var state_959537__$1 = (function (){var statearr_959542 = state_959537;
(statearr_959542[(8)] = inst_959517__$1);

return statearr_959542;
})();
if(inst_959519){
var statearr_959543_959565 = state_959537__$1;
(statearr_959543_959565[(1)] = (5));

} else {
var statearr_959544_959566 = state_959537__$1;
(statearr_959544_959566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (6))){
var state_959537__$1 = state_959537;
var statearr_959545_959567 = state_959537__$1;
(statearr_959545_959567[(2)] = null);

(statearr_959545_959567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (3))){
var inst_959534 = (state_959537[(2)]);
var inst_959535 = cljs.core.async.close_BANG_.call(null,out);
var state_959537__$1 = (function (){var statearr_959546 = state_959537;
(statearr_959546[(9)] = inst_959534);

return statearr_959546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959537__$1,inst_959535);
} else {
if((state_val_959538 === (2))){
var state_959537__$1 = state_959537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959537__$1,(4),ch);
} else {
if((state_val_959538 === (11))){
var inst_959517 = (state_959537[(8)]);
var inst_959526 = (state_959537[(2)]);
var inst_959514 = inst_959517;
var state_959537__$1 = (function (){var statearr_959547 = state_959537;
(statearr_959547[(7)] = inst_959514);

(statearr_959547[(10)] = inst_959526);

return statearr_959547;
})();
var statearr_959548_959568 = state_959537__$1;
(statearr_959548_959568[(2)] = null);

(statearr_959548_959568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (9))){
var inst_959517 = (state_959537[(8)]);
var state_959537__$1 = state_959537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959537__$1,(11),out,inst_959517);
} else {
if((state_val_959538 === (5))){
var inst_959514 = (state_959537[(7)]);
var inst_959517 = (state_959537[(8)]);
var inst_959521 = cljs.core._EQ_.call(null,inst_959517,inst_959514);
var state_959537__$1 = state_959537;
if(inst_959521){
var statearr_959550_959569 = state_959537__$1;
(statearr_959550_959569[(1)] = (8));

} else {
var statearr_959551_959570 = state_959537__$1;
(statearr_959551_959570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (10))){
var inst_959529 = (state_959537[(2)]);
var state_959537__$1 = state_959537;
var statearr_959552_959571 = state_959537__$1;
(statearr_959552_959571[(2)] = inst_959529);

(statearr_959552_959571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959538 === (8))){
var inst_959514 = (state_959537[(7)]);
var tmp959549 = inst_959514;
var inst_959514__$1 = tmp959549;
var state_959537__$1 = (function (){var statearr_959553 = state_959537;
(statearr_959553[(7)] = inst_959514__$1);

return statearr_959553;
})();
var statearr_959554_959572 = state_959537__$1;
(statearr_959554_959572[(2)] = null);

(statearr_959554_959572[(1)] = (2));


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
});})(c__9199__auto___959562,out))
;
return ((function (switch__9184__auto__,c__9199__auto___959562,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_959558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_959558[(0)] = state_machine__9185__auto__);

(statearr_959558[(1)] = (1));

return statearr_959558;
});
var state_machine__9185__auto____1 = (function (state_959537){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959559){if((e959559 instanceof Object)){
var ex__9188__auto__ = e959559;
var statearr_959560_959573 = state_959537;
(statearr_959560_959573[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959574 = state_959537;
state_959537 = G__959574;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959537){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___959562,out))
})();
var state__9201__auto__ = (function (){var statearr_959561 = f__9200__auto__.call(null);
(statearr_959561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___959562);

return statearr_959561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___959562,out))
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
var c__9199__auto___959709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___959709,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___959709,out){
return (function (state_959679){
var state_val_959680 = (state_959679[(1)]);
if((state_val_959680 === (7))){
var inst_959675 = (state_959679[(2)]);
var state_959679__$1 = state_959679;
var statearr_959681_959710 = state_959679__$1;
(statearr_959681_959710[(2)] = inst_959675);

(statearr_959681_959710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (1))){
var inst_959642 = (new Array(n));
var inst_959643 = inst_959642;
var inst_959644 = (0);
var state_959679__$1 = (function (){var statearr_959682 = state_959679;
(statearr_959682[(7)] = inst_959644);

(statearr_959682[(8)] = inst_959643);

return statearr_959682;
})();
var statearr_959683_959711 = state_959679__$1;
(statearr_959683_959711[(2)] = null);

(statearr_959683_959711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (4))){
var inst_959647 = (state_959679[(9)]);
var inst_959647__$1 = (state_959679[(2)]);
var inst_959648 = (inst_959647__$1 == null);
var inst_959649 = cljs.core.not.call(null,inst_959648);
var state_959679__$1 = (function (){var statearr_959684 = state_959679;
(statearr_959684[(9)] = inst_959647__$1);

return statearr_959684;
})();
if(inst_959649){
var statearr_959685_959712 = state_959679__$1;
(statearr_959685_959712[(1)] = (5));

} else {
var statearr_959686_959713 = state_959679__$1;
(statearr_959686_959713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (15))){
var inst_959669 = (state_959679[(2)]);
var state_959679__$1 = state_959679;
var statearr_959687_959714 = state_959679__$1;
(statearr_959687_959714[(2)] = inst_959669);

(statearr_959687_959714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (13))){
var state_959679__$1 = state_959679;
var statearr_959688_959715 = state_959679__$1;
(statearr_959688_959715[(2)] = null);

(statearr_959688_959715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (6))){
var inst_959644 = (state_959679[(7)]);
var inst_959665 = (inst_959644 > (0));
var state_959679__$1 = state_959679;
if(cljs.core.truth_(inst_959665)){
var statearr_959689_959716 = state_959679__$1;
(statearr_959689_959716[(1)] = (12));

} else {
var statearr_959690_959717 = state_959679__$1;
(statearr_959690_959717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (3))){
var inst_959677 = (state_959679[(2)]);
var state_959679__$1 = state_959679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959679__$1,inst_959677);
} else {
if((state_val_959680 === (12))){
var inst_959643 = (state_959679[(8)]);
var inst_959667 = cljs.core.vec.call(null,inst_959643);
var state_959679__$1 = state_959679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959679__$1,(15),out,inst_959667);
} else {
if((state_val_959680 === (2))){
var state_959679__$1 = state_959679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959679__$1,(4),ch);
} else {
if((state_val_959680 === (11))){
var inst_959659 = (state_959679[(2)]);
var inst_959660 = (new Array(n));
var inst_959643 = inst_959660;
var inst_959644 = (0);
var state_959679__$1 = (function (){var statearr_959691 = state_959679;
(statearr_959691[(10)] = inst_959659);

(statearr_959691[(7)] = inst_959644);

(statearr_959691[(8)] = inst_959643);

return statearr_959691;
})();
var statearr_959692_959718 = state_959679__$1;
(statearr_959692_959718[(2)] = null);

(statearr_959692_959718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (9))){
var inst_959643 = (state_959679[(8)]);
var inst_959657 = cljs.core.vec.call(null,inst_959643);
var state_959679__$1 = state_959679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959679__$1,(11),out,inst_959657);
} else {
if((state_val_959680 === (5))){
var inst_959644 = (state_959679[(7)]);
var inst_959647 = (state_959679[(9)]);
var inst_959643 = (state_959679[(8)]);
var inst_959652 = (state_959679[(11)]);
var inst_959651 = (inst_959643[inst_959644] = inst_959647);
var inst_959652__$1 = (inst_959644 + (1));
var inst_959653 = (inst_959652__$1 < n);
var state_959679__$1 = (function (){var statearr_959693 = state_959679;
(statearr_959693[(12)] = inst_959651);

(statearr_959693[(11)] = inst_959652__$1);

return statearr_959693;
})();
if(cljs.core.truth_(inst_959653)){
var statearr_959694_959719 = state_959679__$1;
(statearr_959694_959719[(1)] = (8));

} else {
var statearr_959695_959720 = state_959679__$1;
(statearr_959695_959720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (14))){
var inst_959672 = (state_959679[(2)]);
var inst_959673 = cljs.core.async.close_BANG_.call(null,out);
var state_959679__$1 = (function (){var statearr_959697 = state_959679;
(statearr_959697[(13)] = inst_959672);

return statearr_959697;
})();
var statearr_959698_959721 = state_959679__$1;
(statearr_959698_959721[(2)] = inst_959673);

(statearr_959698_959721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (10))){
var inst_959663 = (state_959679[(2)]);
var state_959679__$1 = state_959679;
var statearr_959699_959722 = state_959679__$1;
(statearr_959699_959722[(2)] = inst_959663);

(statearr_959699_959722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959680 === (8))){
var inst_959643 = (state_959679[(8)]);
var inst_959652 = (state_959679[(11)]);
var tmp959696 = inst_959643;
var inst_959643__$1 = tmp959696;
var inst_959644 = inst_959652;
var state_959679__$1 = (function (){var statearr_959700 = state_959679;
(statearr_959700[(7)] = inst_959644);

(statearr_959700[(8)] = inst_959643__$1);

return statearr_959700;
})();
var statearr_959701_959723 = state_959679__$1;
(statearr_959701_959723[(2)] = null);

(statearr_959701_959723[(1)] = (2));


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
});})(c__9199__auto___959709,out))
;
return ((function (switch__9184__auto__,c__9199__auto___959709,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_959705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_959705[(0)] = state_machine__9185__auto__);

(statearr_959705[(1)] = (1));

return statearr_959705;
});
var state_machine__9185__auto____1 = (function (state_959679){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959706){if((e959706 instanceof Object)){
var ex__9188__auto__ = e959706;
var statearr_959707_959724 = state_959679;
(statearr_959707_959724[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959725 = state_959679;
state_959679 = G__959725;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959679){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___959709,out))
})();
var state__9201__auto__ = (function (){var statearr_959708 = f__9200__auto__.call(null);
(statearr_959708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___959709);

return statearr_959708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___959709,out))
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
var c__9199__auto___959868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___959868,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___959868,out){
return (function (state_959838){
var state_val_959839 = (state_959838[(1)]);
if((state_val_959839 === (7))){
var inst_959834 = (state_959838[(2)]);
var state_959838__$1 = state_959838;
var statearr_959840_959869 = state_959838__$1;
(statearr_959840_959869[(2)] = inst_959834);

(statearr_959840_959869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (1))){
var inst_959797 = [];
var inst_959798 = inst_959797;
var inst_959799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_959838__$1 = (function (){var statearr_959841 = state_959838;
(statearr_959841[(7)] = inst_959798);

(statearr_959841[(8)] = inst_959799);

return statearr_959841;
})();
var statearr_959842_959870 = state_959838__$1;
(statearr_959842_959870[(2)] = null);

(statearr_959842_959870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (4))){
var inst_959802 = (state_959838[(9)]);
var inst_959802__$1 = (state_959838[(2)]);
var inst_959803 = (inst_959802__$1 == null);
var inst_959804 = cljs.core.not.call(null,inst_959803);
var state_959838__$1 = (function (){var statearr_959843 = state_959838;
(statearr_959843[(9)] = inst_959802__$1);

return statearr_959843;
})();
if(inst_959804){
var statearr_959844_959871 = state_959838__$1;
(statearr_959844_959871[(1)] = (5));

} else {
var statearr_959845_959872 = state_959838__$1;
(statearr_959845_959872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (15))){
var inst_959828 = (state_959838[(2)]);
var state_959838__$1 = state_959838;
var statearr_959846_959873 = state_959838__$1;
(statearr_959846_959873[(2)] = inst_959828);

(statearr_959846_959873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (13))){
var state_959838__$1 = state_959838;
var statearr_959847_959874 = state_959838__$1;
(statearr_959847_959874[(2)] = null);

(statearr_959847_959874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (6))){
var inst_959798 = (state_959838[(7)]);
var inst_959823 = inst_959798.length;
var inst_959824 = (inst_959823 > (0));
var state_959838__$1 = state_959838;
if(cljs.core.truth_(inst_959824)){
var statearr_959848_959875 = state_959838__$1;
(statearr_959848_959875[(1)] = (12));

} else {
var statearr_959849_959876 = state_959838__$1;
(statearr_959849_959876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (3))){
var inst_959836 = (state_959838[(2)]);
var state_959838__$1 = state_959838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_959838__$1,inst_959836);
} else {
if((state_val_959839 === (12))){
var inst_959798 = (state_959838[(7)]);
var inst_959826 = cljs.core.vec.call(null,inst_959798);
var state_959838__$1 = state_959838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959838__$1,(15),out,inst_959826);
} else {
if((state_val_959839 === (2))){
var state_959838__$1 = state_959838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_959838__$1,(4),ch);
} else {
if((state_val_959839 === (11))){
var inst_959802 = (state_959838[(9)]);
var inst_959806 = (state_959838[(10)]);
var inst_959816 = (state_959838[(2)]);
var inst_959817 = [];
var inst_959818 = inst_959817.push(inst_959802);
var inst_959798 = inst_959817;
var inst_959799 = inst_959806;
var state_959838__$1 = (function (){var statearr_959850 = state_959838;
(statearr_959850[(11)] = inst_959818);

(statearr_959850[(7)] = inst_959798);

(statearr_959850[(8)] = inst_959799);

(statearr_959850[(12)] = inst_959816);

return statearr_959850;
})();
var statearr_959851_959877 = state_959838__$1;
(statearr_959851_959877[(2)] = null);

(statearr_959851_959877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (9))){
var inst_959798 = (state_959838[(7)]);
var inst_959814 = cljs.core.vec.call(null,inst_959798);
var state_959838__$1 = state_959838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_959838__$1,(11),out,inst_959814);
} else {
if((state_val_959839 === (5))){
var inst_959802 = (state_959838[(9)]);
var inst_959799 = (state_959838[(8)]);
var inst_959806 = (state_959838[(10)]);
var inst_959806__$1 = f.call(null,inst_959802);
var inst_959807 = cljs.core._EQ_.call(null,inst_959806__$1,inst_959799);
var inst_959808 = cljs.core.keyword_identical_QMARK_.call(null,inst_959799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_959809 = (inst_959807) || (inst_959808);
var state_959838__$1 = (function (){var statearr_959852 = state_959838;
(statearr_959852[(10)] = inst_959806__$1);

return statearr_959852;
})();
if(cljs.core.truth_(inst_959809)){
var statearr_959853_959878 = state_959838__$1;
(statearr_959853_959878[(1)] = (8));

} else {
var statearr_959854_959879 = state_959838__$1;
(statearr_959854_959879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (14))){
var inst_959831 = (state_959838[(2)]);
var inst_959832 = cljs.core.async.close_BANG_.call(null,out);
var state_959838__$1 = (function (){var statearr_959856 = state_959838;
(statearr_959856[(13)] = inst_959831);

return statearr_959856;
})();
var statearr_959857_959880 = state_959838__$1;
(statearr_959857_959880[(2)] = inst_959832);

(statearr_959857_959880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (10))){
var inst_959821 = (state_959838[(2)]);
var state_959838__$1 = state_959838;
var statearr_959858_959881 = state_959838__$1;
(statearr_959858_959881[(2)] = inst_959821);

(statearr_959858_959881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_959839 === (8))){
var inst_959802 = (state_959838[(9)]);
var inst_959798 = (state_959838[(7)]);
var inst_959806 = (state_959838[(10)]);
var inst_959811 = inst_959798.push(inst_959802);
var tmp959855 = inst_959798;
var inst_959798__$1 = tmp959855;
var inst_959799 = inst_959806;
var state_959838__$1 = (function (){var statearr_959859 = state_959838;
(statearr_959859[(7)] = inst_959798__$1);

(statearr_959859[(8)] = inst_959799);

(statearr_959859[(14)] = inst_959811);

return statearr_959859;
})();
var statearr_959860_959882 = state_959838__$1;
(statearr_959860_959882[(2)] = null);

(statearr_959860_959882[(1)] = (2));


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
});})(c__9199__auto___959868,out))
;
return ((function (switch__9184__auto__,c__9199__auto___959868,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_959864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_959864[(0)] = state_machine__9185__auto__);

(statearr_959864[(1)] = (1));

return statearr_959864;
});
var state_machine__9185__auto____1 = (function (state_959838){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_959838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e959865){if((e959865 instanceof Object)){
var ex__9188__auto__ = e959865;
var statearr_959866_959883 = state_959838;
(statearr_959866_959883[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_959838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e959865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__959884 = state_959838;
state_959838 = G__959884;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_959838){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_959838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___959868,out))
})();
var state__9201__auto__ = (function (){var statearr_959867 = f__9200__auto__.call(null);
(statearr_959867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___959868);

return statearr_959867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___959868,out))
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