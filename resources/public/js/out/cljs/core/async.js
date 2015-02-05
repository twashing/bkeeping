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
if(typeof cljs.core.async.t159289 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t159289 = (function (f,fn_handler,meta159290){
this.f = f;
this.fn_handler = fn_handler;
this.meta159290 = meta159290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t159289.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t159289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t159289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t159289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_159291){
var self__ = this;
var _159291__$1 = this;
return self__.meta159290;
});

cljs.core.async.t159289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_159291,meta159290__$1){
var self__ = this;
var _159291__$1 = this;
return (new cljs.core.async.t159289(self__.f,self__.fn_handler,meta159290__$1));
});

cljs.core.async.t159289.cljs$lang$type = true;

cljs.core.async.t159289.cljs$lang$ctorStr = "cljs.core.async/t159289";

cljs.core.async.t159289.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t159289");
});

cljs.core.async.__GT_t159289 = (function __GT_t159289(f__$1,fn_handler__$1,meta159290){
return (new cljs.core.async.t159289(f__$1,fn_handler__$1,meta159290));
});

}

return (new cljs.core.async.t159289(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__159293 = buff;
if(G__159293){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__159293.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__159293.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__159293);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__159293);
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
var val_159294 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_159294);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_159294,ret){
return (function (){
return fn1.call(null,val_159294);
});})(val_159294,ret))
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
var n__4509__auto___159295 = n;
var x_159296 = (0);
while(true){
if((x_159296 < n__4509__auto___159295)){
(a[x_159296] = (0));

var G__159297 = (x_159296 + (1));
x_159296 = G__159297;
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

var G__159298 = (i + (1));
i = G__159298;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t159302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t159302 = (function (flag,alt_flag,meta159303){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta159303 = meta159303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t159302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t159302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t159302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t159302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_159304){
var self__ = this;
var _159304__$1 = this;
return self__.meta159303;
});})(flag))
;

cljs.core.async.t159302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_159304,meta159303__$1){
var self__ = this;
var _159304__$1 = this;
return (new cljs.core.async.t159302(self__.flag,self__.alt_flag,meta159303__$1));
});})(flag))
;

cljs.core.async.t159302.cljs$lang$type = true;

cljs.core.async.t159302.cljs$lang$ctorStr = "cljs.core.async/t159302";

cljs.core.async.t159302.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t159302");
});})(flag))
;

cljs.core.async.__GT_t159302 = ((function (flag){
return (function __GT_t159302(flag__$1,alt_flag__$1,meta159303){
return (new cljs.core.async.t159302(flag__$1,alt_flag__$1,meta159303));
});})(flag))
;

}

return (new cljs.core.async.t159302(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t159308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t159308 = (function (cb,flag,alt_handler,meta159309){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta159309 = meta159309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t159308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t159308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t159308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t159308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_159310){
var self__ = this;
var _159310__$1 = this;
return self__.meta159309;
});

cljs.core.async.t159308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_159310,meta159309__$1){
var self__ = this;
var _159310__$1 = this;
return (new cljs.core.async.t159308(self__.cb,self__.flag,self__.alt_handler,meta159309__$1));
});

cljs.core.async.t159308.cljs$lang$type = true;

cljs.core.async.t159308.cljs$lang$ctorStr = "cljs.core.async/t159308";

cljs.core.async.t159308.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t159308");
});

cljs.core.async.__GT_t159308 = (function __GT_t159308(cb__$1,flag__$1,alt_handler__$1,meta159309){
return (new cljs.core.async.t159308(cb__$1,flag__$1,alt_handler__$1,meta159309));
});

}

return (new cljs.core.async.t159308(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__159311_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__159311_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__159312_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__159312_SHARP_,port], null));
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
var G__159313 = (i + (1));
i = G__159313;
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
var alts_BANG___delegate = function (ports,p__159314){
var map__159316 = p__159314;
var map__159316__$1 = ((cljs.core.seq_QMARK_.call(null,map__159316))?cljs.core.apply.call(null,cljs.core.hash_map,map__159316):map__159316);
var opts = map__159316__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__159314 = null;
if (arguments.length > 1) {
  p__159314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__159314);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__159317){
var ports = cljs.core.first(arglist__159317);
var p__159314 = cljs.core.rest(arglist__159317);
return alts_BANG___delegate(ports,p__159314);
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
var c__7043__auto___159412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___159412){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___159412){
return (function (state_159388){
var state_val_159389 = (state_159388[(1)]);
if((state_val_159389 === (7))){
var inst_159384 = (state_159388[(2)]);
var state_159388__$1 = state_159388;
var statearr_159390_159413 = state_159388__$1;
(statearr_159390_159413[(2)] = inst_159384);

(statearr_159390_159413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (1))){
var state_159388__$1 = state_159388;
var statearr_159391_159414 = state_159388__$1;
(statearr_159391_159414[(2)] = null);

(statearr_159391_159414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (4))){
var inst_159367 = (state_159388[(7)]);
var inst_159367__$1 = (state_159388[(2)]);
var inst_159368 = (inst_159367__$1 == null);
var state_159388__$1 = (function (){var statearr_159392 = state_159388;
(statearr_159392[(7)] = inst_159367__$1);

return statearr_159392;
})();
if(cljs.core.truth_(inst_159368)){
var statearr_159393_159415 = state_159388__$1;
(statearr_159393_159415[(1)] = (5));

} else {
var statearr_159394_159416 = state_159388__$1;
(statearr_159394_159416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (13))){
var state_159388__$1 = state_159388;
var statearr_159395_159417 = state_159388__$1;
(statearr_159395_159417[(2)] = null);

(statearr_159395_159417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (6))){
var inst_159367 = (state_159388[(7)]);
var state_159388__$1 = state_159388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159388__$1,(11),to,inst_159367);
} else {
if((state_val_159389 === (3))){
var inst_159386 = (state_159388[(2)]);
var state_159388__$1 = state_159388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159388__$1,inst_159386);
} else {
if((state_val_159389 === (12))){
var state_159388__$1 = state_159388;
var statearr_159396_159418 = state_159388__$1;
(statearr_159396_159418[(2)] = null);

(statearr_159396_159418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (2))){
var state_159388__$1 = state_159388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159388__$1,(4),from);
} else {
if((state_val_159389 === (11))){
var inst_159377 = (state_159388[(2)]);
var state_159388__$1 = state_159388;
if(cljs.core.truth_(inst_159377)){
var statearr_159397_159419 = state_159388__$1;
(statearr_159397_159419[(1)] = (12));

} else {
var statearr_159398_159420 = state_159388__$1;
(statearr_159398_159420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (9))){
var state_159388__$1 = state_159388;
var statearr_159399_159421 = state_159388__$1;
(statearr_159399_159421[(2)] = null);

(statearr_159399_159421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (5))){
var state_159388__$1 = state_159388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_159400_159422 = state_159388__$1;
(statearr_159400_159422[(1)] = (8));

} else {
var statearr_159401_159423 = state_159388__$1;
(statearr_159401_159423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (14))){
var inst_159382 = (state_159388[(2)]);
var state_159388__$1 = state_159388;
var statearr_159402_159424 = state_159388__$1;
(statearr_159402_159424[(2)] = inst_159382);

(statearr_159402_159424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (10))){
var inst_159374 = (state_159388[(2)]);
var state_159388__$1 = state_159388;
var statearr_159403_159425 = state_159388__$1;
(statearr_159403_159425[(2)] = inst_159374);

(statearr_159403_159425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159389 === (8))){
var inst_159371 = cljs.core.async.close_BANG_.call(null,to);
var state_159388__$1 = state_159388;
var statearr_159404_159426 = state_159388__$1;
(statearr_159404_159426[(2)] = inst_159371);

(statearr_159404_159426[(1)] = (10));


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
});})(c__7043__auto___159412))
;
return ((function (switch__6987__auto__,c__7043__auto___159412){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159408 = [null,null,null,null,null,null,null,null];
(statearr_159408[(0)] = state_machine__6988__auto__);

(statearr_159408[(1)] = (1));

return statearr_159408;
});
var state_machine__6988__auto____1 = (function (state_159388){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159409){if((e159409 instanceof Object)){
var ex__6991__auto__ = e159409;
var statearr_159410_159427 = state_159388;
(statearr_159410_159427[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159428 = state_159388;
state_159388 = G__159428;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159388){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___159412))
})();
var state__7045__auto__ = (function (){var statearr_159411 = f__7044__auto__.call(null);
(statearr_159411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159412);

return statearr_159411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___159412))
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
return (function (p__159612){
var vec__159613 = p__159612;
var v = cljs.core.nth.call(null,vec__159613,(0),null);
var p = cljs.core.nth.call(null,vec__159613,(1),null);
var job = vec__159613;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___159795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results){
return (function (state_159618){
var state_val_159619 = (state_159618[(1)]);
if((state_val_159619 === (2))){
var inst_159615 = (state_159618[(2)]);
var inst_159616 = cljs.core.async.close_BANG_.call(null,res);
var state_159618__$1 = (function (){var statearr_159620 = state_159618;
(statearr_159620[(7)] = inst_159615);

return statearr_159620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159618__$1,inst_159616);
} else {
if((state_val_159619 === (1))){
var state_159618__$1 = state_159618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159618__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159624 = [null,null,null,null,null,null,null,null];
(statearr_159624[(0)] = state_machine__6988__auto__);

(statearr_159624[(1)] = (1));

return statearr_159624;
});
var state_machine__6988__auto____1 = (function (state_159618){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159625){if((e159625 instanceof Object)){
var ex__6991__auto__ = e159625;
var statearr_159626_159796 = state_159618;
(statearr_159626_159796[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159797 = state_159618;
state_159618 = G__159797;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159618){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_159627 = f__7044__auto__.call(null);
(statearr_159627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159795);

return statearr_159627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___159795,res,vec__159613,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__159628){
var vec__159629 = p__159628;
var v = cljs.core.nth.call(null,vec__159629,(0),null);
var p = cljs.core.nth.call(null,vec__159629,(1),null);
var job = vec__159629;
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
var n__4509__auto___159798 = n;
var __159799 = (0);
while(true){
if((__159799 < n__4509__auto___159798)){
var G__159630_159800 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__159630_159800) {
case "async":
var c__7043__auto___159802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__159799,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__159799,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function (state_159643){
var state_val_159644 = (state_159643[(1)]);
if((state_val_159644 === (7))){
var inst_159639 = (state_159643[(2)]);
var state_159643__$1 = state_159643;
var statearr_159645_159803 = state_159643__$1;
(statearr_159645_159803[(2)] = inst_159639);

(statearr_159645_159803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159644 === (6))){
var state_159643__$1 = state_159643;
var statearr_159646_159804 = state_159643__$1;
(statearr_159646_159804[(2)] = null);

(statearr_159646_159804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159644 === (5))){
var state_159643__$1 = state_159643;
var statearr_159647_159805 = state_159643__$1;
(statearr_159647_159805[(2)] = null);

(statearr_159647_159805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159644 === (4))){
var inst_159633 = (state_159643[(2)]);
var inst_159634 = async.call(null,inst_159633);
var state_159643__$1 = state_159643;
if(cljs.core.truth_(inst_159634)){
var statearr_159648_159806 = state_159643__$1;
(statearr_159648_159806[(1)] = (5));

} else {
var statearr_159649_159807 = state_159643__$1;
(statearr_159649_159807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159644 === (3))){
var inst_159641 = (state_159643[(2)]);
var state_159643__$1 = state_159643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159643__$1,inst_159641);
} else {
if((state_val_159644 === (2))){
var state_159643__$1 = state_159643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159643__$1,(4),jobs);
} else {
if((state_val_159644 === (1))){
var state_159643__$1 = state_159643;
var statearr_159650_159808 = state_159643__$1;
(statearr_159650_159808[(2)] = null);

(statearr_159650_159808[(1)] = (2));


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
});})(__159799,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
;
return ((function (__159799,switch__6987__auto__,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159654 = [null,null,null,null,null,null,null];
(statearr_159654[(0)] = state_machine__6988__auto__);

(statearr_159654[(1)] = (1));

return statearr_159654;
});
var state_machine__6988__auto____1 = (function (state_159643){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159655){if((e159655 instanceof Object)){
var ex__6991__auto__ = e159655;
var statearr_159656_159809 = state_159643;
(statearr_159656_159809[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159810 = state_159643;
state_159643 = G__159810;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159643){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__159799,switch__6987__auto__,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_159657 = f__7044__auto__.call(null);
(statearr_159657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159802);

return statearr_159657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__159799,c__7043__auto___159802,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___159811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__159799,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__159799,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function (state_159670){
var state_val_159671 = (state_159670[(1)]);
if((state_val_159671 === (7))){
var inst_159666 = (state_159670[(2)]);
var state_159670__$1 = state_159670;
var statearr_159672_159812 = state_159670__$1;
(statearr_159672_159812[(2)] = inst_159666);

(statearr_159672_159812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159671 === (6))){
var state_159670__$1 = state_159670;
var statearr_159673_159813 = state_159670__$1;
(statearr_159673_159813[(2)] = null);

(statearr_159673_159813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159671 === (5))){
var state_159670__$1 = state_159670;
var statearr_159674_159814 = state_159670__$1;
(statearr_159674_159814[(2)] = null);

(statearr_159674_159814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159671 === (4))){
var inst_159660 = (state_159670[(2)]);
var inst_159661 = process.call(null,inst_159660);
var state_159670__$1 = state_159670;
if(cljs.core.truth_(inst_159661)){
var statearr_159675_159815 = state_159670__$1;
(statearr_159675_159815[(1)] = (5));

} else {
var statearr_159676_159816 = state_159670__$1;
(statearr_159676_159816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159671 === (3))){
var inst_159668 = (state_159670[(2)]);
var state_159670__$1 = state_159670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159670__$1,inst_159668);
} else {
if((state_val_159671 === (2))){
var state_159670__$1 = state_159670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159670__$1,(4),jobs);
} else {
if((state_val_159671 === (1))){
var state_159670__$1 = state_159670;
var statearr_159677_159817 = state_159670__$1;
(statearr_159677_159817[(2)] = null);

(statearr_159677_159817[(1)] = (2));


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
});})(__159799,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
;
return ((function (__159799,switch__6987__auto__,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159681 = [null,null,null,null,null,null,null];
(statearr_159681[(0)] = state_machine__6988__auto__);

(statearr_159681[(1)] = (1));

return statearr_159681;
});
var state_machine__6988__auto____1 = (function (state_159670){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159682){if((e159682 instanceof Object)){
var ex__6991__auto__ = e159682;
var statearr_159683_159818 = state_159670;
(statearr_159683_159818[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159819 = state_159670;
state_159670 = G__159819;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159670){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__159799,switch__6987__auto__,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_159684 = f__7044__auto__.call(null);
(statearr_159684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159811);

return statearr_159684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__159799,c__7043__auto___159811,G__159630_159800,n__4509__auto___159798,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__159820 = (__159799 + (1));
__159799 = G__159820;
continue;
} else {
}
break;
}

var c__7043__auto___159821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___159821,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___159821,jobs,results,process,async){
return (function (state_159706){
var state_val_159707 = (state_159706[(1)]);
if((state_val_159707 === (9))){
var inst_159699 = (state_159706[(2)]);
var state_159706__$1 = (function (){var statearr_159708 = state_159706;
(statearr_159708[(7)] = inst_159699);

return statearr_159708;
})();
var statearr_159709_159822 = state_159706__$1;
(statearr_159709_159822[(2)] = null);

(statearr_159709_159822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159707 === (8))){
var inst_159692 = (state_159706[(8)]);
var inst_159697 = (state_159706[(2)]);
var state_159706__$1 = (function (){var statearr_159710 = state_159706;
(statearr_159710[(9)] = inst_159697);

return statearr_159710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159706__$1,(9),results,inst_159692);
} else {
if((state_val_159707 === (7))){
var inst_159702 = (state_159706[(2)]);
var state_159706__$1 = state_159706;
var statearr_159711_159823 = state_159706__$1;
(statearr_159711_159823[(2)] = inst_159702);

(statearr_159711_159823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159707 === (6))){
var inst_159687 = (state_159706[(10)]);
var inst_159692 = (state_159706[(8)]);
var inst_159692__$1 = cljs.core.async.chan.call(null,(1));
var inst_159693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_159694 = [inst_159687,inst_159692__$1];
var inst_159695 = (new cljs.core.PersistentVector(null,2,(5),inst_159693,inst_159694,null));
var state_159706__$1 = (function (){var statearr_159712 = state_159706;
(statearr_159712[(8)] = inst_159692__$1);

return statearr_159712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159706__$1,(8),jobs,inst_159695);
} else {
if((state_val_159707 === (5))){
var inst_159690 = cljs.core.async.close_BANG_.call(null,jobs);
var state_159706__$1 = state_159706;
var statearr_159713_159824 = state_159706__$1;
(statearr_159713_159824[(2)] = inst_159690);

(statearr_159713_159824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159707 === (4))){
var inst_159687 = (state_159706[(10)]);
var inst_159687__$1 = (state_159706[(2)]);
var inst_159688 = (inst_159687__$1 == null);
var state_159706__$1 = (function (){var statearr_159714 = state_159706;
(statearr_159714[(10)] = inst_159687__$1);

return statearr_159714;
})();
if(cljs.core.truth_(inst_159688)){
var statearr_159715_159825 = state_159706__$1;
(statearr_159715_159825[(1)] = (5));

} else {
var statearr_159716_159826 = state_159706__$1;
(statearr_159716_159826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159707 === (3))){
var inst_159704 = (state_159706[(2)]);
var state_159706__$1 = state_159706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159706__$1,inst_159704);
} else {
if((state_val_159707 === (2))){
var state_159706__$1 = state_159706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159706__$1,(4),from);
} else {
if((state_val_159707 === (1))){
var state_159706__$1 = state_159706;
var statearr_159717_159827 = state_159706__$1;
(statearr_159717_159827[(2)] = null);

(statearr_159717_159827[(1)] = (2));


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
});})(c__7043__auto___159821,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___159821,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_159721[(0)] = state_machine__6988__auto__);

(statearr_159721[(1)] = (1));

return statearr_159721;
});
var state_machine__6988__auto____1 = (function (state_159706){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159722){if((e159722 instanceof Object)){
var ex__6991__auto__ = e159722;
var statearr_159723_159828 = state_159706;
(statearr_159723_159828[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159829 = state_159706;
state_159706 = G__159829;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159706){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___159821,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_159724 = f__7044__auto__.call(null);
(statearr_159724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159821);

return statearr_159724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___159821,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_159762){
var state_val_159763 = (state_159762[(1)]);
if((state_val_159763 === (7))){
var inst_159758 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
var statearr_159764_159830 = state_159762__$1;
(statearr_159764_159830[(2)] = inst_159758);

(statearr_159764_159830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (20))){
var state_159762__$1 = state_159762;
var statearr_159765_159831 = state_159762__$1;
(statearr_159765_159831[(2)] = null);

(statearr_159765_159831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (1))){
var state_159762__$1 = state_159762;
var statearr_159766_159832 = state_159762__$1;
(statearr_159766_159832[(2)] = null);

(statearr_159766_159832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (4))){
var inst_159727 = (state_159762[(7)]);
var inst_159727__$1 = (state_159762[(2)]);
var inst_159728 = (inst_159727__$1 == null);
var state_159762__$1 = (function (){var statearr_159767 = state_159762;
(statearr_159767[(7)] = inst_159727__$1);

return statearr_159767;
})();
if(cljs.core.truth_(inst_159728)){
var statearr_159768_159833 = state_159762__$1;
(statearr_159768_159833[(1)] = (5));

} else {
var statearr_159769_159834 = state_159762__$1;
(statearr_159769_159834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (15))){
var inst_159740 = (state_159762[(8)]);
var state_159762__$1 = state_159762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159762__$1,(18),to,inst_159740);
} else {
if((state_val_159763 === (21))){
var inst_159753 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
var statearr_159770_159835 = state_159762__$1;
(statearr_159770_159835[(2)] = inst_159753);

(statearr_159770_159835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (13))){
var inst_159755 = (state_159762[(2)]);
var state_159762__$1 = (function (){var statearr_159771 = state_159762;
(statearr_159771[(9)] = inst_159755);

return statearr_159771;
})();
var statearr_159772_159836 = state_159762__$1;
(statearr_159772_159836[(2)] = null);

(statearr_159772_159836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (6))){
var inst_159727 = (state_159762[(7)]);
var state_159762__$1 = state_159762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159762__$1,(11),inst_159727);
} else {
if((state_val_159763 === (17))){
var inst_159748 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
if(cljs.core.truth_(inst_159748)){
var statearr_159773_159837 = state_159762__$1;
(statearr_159773_159837[(1)] = (19));

} else {
var statearr_159774_159838 = state_159762__$1;
(statearr_159774_159838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (3))){
var inst_159760 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159762__$1,inst_159760);
} else {
if((state_val_159763 === (12))){
var inst_159737 = (state_159762[(10)]);
var state_159762__$1 = state_159762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159762__$1,(14),inst_159737);
} else {
if((state_val_159763 === (2))){
var state_159762__$1 = state_159762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159762__$1,(4),results);
} else {
if((state_val_159763 === (19))){
var state_159762__$1 = state_159762;
var statearr_159775_159839 = state_159762__$1;
(statearr_159775_159839[(2)] = null);

(statearr_159775_159839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (11))){
var inst_159737 = (state_159762[(2)]);
var state_159762__$1 = (function (){var statearr_159776 = state_159762;
(statearr_159776[(10)] = inst_159737);

return statearr_159776;
})();
var statearr_159777_159840 = state_159762__$1;
(statearr_159777_159840[(2)] = null);

(statearr_159777_159840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (9))){
var state_159762__$1 = state_159762;
var statearr_159778_159841 = state_159762__$1;
(statearr_159778_159841[(2)] = null);

(statearr_159778_159841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (5))){
var state_159762__$1 = state_159762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_159779_159842 = state_159762__$1;
(statearr_159779_159842[(1)] = (8));

} else {
var statearr_159780_159843 = state_159762__$1;
(statearr_159780_159843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (14))){
var inst_159740 = (state_159762[(8)]);
var inst_159742 = (state_159762[(11)]);
var inst_159740__$1 = (state_159762[(2)]);
var inst_159741 = (inst_159740__$1 == null);
var inst_159742__$1 = cljs.core.not.call(null,inst_159741);
var state_159762__$1 = (function (){var statearr_159781 = state_159762;
(statearr_159781[(8)] = inst_159740__$1);

(statearr_159781[(11)] = inst_159742__$1);

return statearr_159781;
})();
if(inst_159742__$1){
var statearr_159782_159844 = state_159762__$1;
(statearr_159782_159844[(1)] = (15));

} else {
var statearr_159783_159845 = state_159762__$1;
(statearr_159783_159845[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (16))){
var inst_159742 = (state_159762[(11)]);
var state_159762__$1 = state_159762;
var statearr_159784_159846 = state_159762__$1;
(statearr_159784_159846[(2)] = inst_159742);

(statearr_159784_159846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (10))){
var inst_159734 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
var statearr_159785_159847 = state_159762__$1;
(statearr_159785_159847[(2)] = inst_159734);

(statearr_159785_159847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (18))){
var inst_159745 = (state_159762[(2)]);
var state_159762__$1 = state_159762;
var statearr_159786_159848 = state_159762__$1;
(statearr_159786_159848[(2)] = inst_159745);

(statearr_159786_159848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159763 === (8))){
var inst_159731 = cljs.core.async.close_BANG_.call(null,to);
var state_159762__$1 = state_159762;
var statearr_159787_159849 = state_159762__$1;
(statearr_159787_159849[(2)] = inst_159731);

(statearr_159787_159849[(1)] = (10));


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
var statearr_159791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_159791[(0)] = state_machine__6988__auto__);

(statearr_159791[(1)] = (1));

return statearr_159791;
});
var state_machine__6988__auto____1 = (function (state_159762){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159792){if((e159792 instanceof Object)){
var ex__6991__auto__ = e159792;
var statearr_159793_159850 = state_159762;
(statearr_159793_159850[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159851 = state_159762;
state_159762 = G__159851;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159762){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_159794 = f__7044__auto__.call(null);
(statearr_159794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_159794;
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
var c__7043__auto___159952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___159952,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___159952,tc,fc){
return (function (state_159927){
var state_val_159928 = (state_159927[(1)]);
if((state_val_159928 === (7))){
var inst_159923 = (state_159927[(2)]);
var state_159927__$1 = state_159927;
var statearr_159929_159953 = state_159927__$1;
(statearr_159929_159953[(2)] = inst_159923);

(statearr_159929_159953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (1))){
var state_159927__$1 = state_159927;
var statearr_159930_159954 = state_159927__$1;
(statearr_159930_159954[(2)] = null);

(statearr_159930_159954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (4))){
var inst_159904 = (state_159927[(7)]);
var inst_159904__$1 = (state_159927[(2)]);
var inst_159905 = (inst_159904__$1 == null);
var state_159927__$1 = (function (){var statearr_159931 = state_159927;
(statearr_159931[(7)] = inst_159904__$1);

return statearr_159931;
})();
if(cljs.core.truth_(inst_159905)){
var statearr_159932_159955 = state_159927__$1;
(statearr_159932_159955[(1)] = (5));

} else {
var statearr_159933_159956 = state_159927__$1;
(statearr_159933_159956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (13))){
var state_159927__$1 = state_159927;
var statearr_159934_159957 = state_159927__$1;
(statearr_159934_159957[(2)] = null);

(statearr_159934_159957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (6))){
var inst_159904 = (state_159927[(7)]);
var inst_159910 = p.call(null,inst_159904);
var state_159927__$1 = state_159927;
if(cljs.core.truth_(inst_159910)){
var statearr_159935_159958 = state_159927__$1;
(statearr_159935_159958[(1)] = (9));

} else {
var statearr_159936_159959 = state_159927__$1;
(statearr_159936_159959[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (3))){
var inst_159925 = (state_159927[(2)]);
var state_159927__$1 = state_159927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159927__$1,inst_159925);
} else {
if((state_val_159928 === (12))){
var state_159927__$1 = state_159927;
var statearr_159937_159960 = state_159927__$1;
(statearr_159937_159960[(2)] = null);

(statearr_159937_159960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (2))){
var state_159927__$1 = state_159927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159927__$1,(4),ch);
} else {
if((state_val_159928 === (11))){
var inst_159904 = (state_159927[(7)]);
var inst_159914 = (state_159927[(2)]);
var state_159927__$1 = state_159927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159927__$1,(8),inst_159914,inst_159904);
} else {
if((state_val_159928 === (9))){
var state_159927__$1 = state_159927;
var statearr_159938_159961 = state_159927__$1;
(statearr_159938_159961[(2)] = tc);

(statearr_159938_159961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (5))){
var inst_159907 = cljs.core.async.close_BANG_.call(null,tc);
var inst_159908 = cljs.core.async.close_BANG_.call(null,fc);
var state_159927__$1 = (function (){var statearr_159939 = state_159927;
(statearr_159939[(8)] = inst_159907);

return statearr_159939;
})();
var statearr_159940_159962 = state_159927__$1;
(statearr_159940_159962[(2)] = inst_159908);

(statearr_159940_159962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (14))){
var inst_159921 = (state_159927[(2)]);
var state_159927__$1 = state_159927;
var statearr_159941_159963 = state_159927__$1;
(statearr_159941_159963[(2)] = inst_159921);

(statearr_159941_159963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (10))){
var state_159927__$1 = state_159927;
var statearr_159942_159964 = state_159927__$1;
(statearr_159942_159964[(2)] = fc);

(statearr_159942_159964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_159928 === (8))){
var inst_159916 = (state_159927[(2)]);
var state_159927__$1 = state_159927;
if(cljs.core.truth_(inst_159916)){
var statearr_159943_159965 = state_159927__$1;
(statearr_159943_159965[(1)] = (12));

} else {
var statearr_159944_159966 = state_159927__$1;
(statearr_159944_159966[(1)] = (13));

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
});})(c__7043__auto___159952,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___159952,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_159948 = [null,null,null,null,null,null,null,null,null];
(statearr_159948[(0)] = state_machine__6988__auto__);

(statearr_159948[(1)] = (1));

return statearr_159948;
});
var state_machine__6988__auto____1 = (function (state_159927){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_159927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e159949){if((e159949 instanceof Object)){
var ex__6991__auto__ = e159949;
var statearr_159950_159967 = state_159927;
(statearr_159950_159967[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e159949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__159968 = state_159927;
state_159927 = G__159968;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_159927){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_159927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___159952,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_159951 = f__7044__auto__.call(null);
(statearr_159951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___159952);

return statearr_159951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___159952,tc,fc))
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
return (function (state_160015){
var state_val_160016 = (state_160015[(1)]);
if((state_val_160016 === (7))){
var inst_160011 = (state_160015[(2)]);
var state_160015__$1 = state_160015;
var statearr_160017_160033 = state_160015__$1;
(statearr_160017_160033[(2)] = inst_160011);

(statearr_160017_160033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160016 === (6))){
var inst_160001 = (state_160015[(7)]);
var inst_160004 = (state_160015[(8)]);
var inst_160008 = f.call(null,inst_160001,inst_160004);
var inst_160001__$1 = inst_160008;
var state_160015__$1 = (function (){var statearr_160018 = state_160015;
(statearr_160018[(7)] = inst_160001__$1);

return statearr_160018;
})();
var statearr_160019_160034 = state_160015__$1;
(statearr_160019_160034[(2)] = null);

(statearr_160019_160034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160016 === (5))){
var inst_160001 = (state_160015[(7)]);
var state_160015__$1 = state_160015;
var statearr_160020_160035 = state_160015__$1;
(statearr_160020_160035[(2)] = inst_160001);

(statearr_160020_160035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160016 === (4))){
var inst_160004 = (state_160015[(8)]);
var inst_160004__$1 = (state_160015[(2)]);
var inst_160005 = (inst_160004__$1 == null);
var state_160015__$1 = (function (){var statearr_160021 = state_160015;
(statearr_160021[(8)] = inst_160004__$1);

return statearr_160021;
})();
if(cljs.core.truth_(inst_160005)){
var statearr_160022_160036 = state_160015__$1;
(statearr_160022_160036[(1)] = (5));

} else {
var statearr_160023_160037 = state_160015__$1;
(statearr_160023_160037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160016 === (3))){
var inst_160013 = (state_160015[(2)]);
var state_160015__$1 = state_160015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160015__$1,inst_160013);
} else {
if((state_val_160016 === (2))){
var state_160015__$1 = state_160015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160015__$1,(4),ch);
} else {
if((state_val_160016 === (1))){
var inst_160001 = init;
var state_160015__$1 = (function (){var statearr_160024 = state_160015;
(statearr_160024[(7)] = inst_160001);

return statearr_160024;
})();
var statearr_160025_160038 = state_160015__$1;
(statearr_160025_160038[(2)] = null);

(statearr_160025_160038[(1)] = (2));


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
var statearr_160029 = [null,null,null,null,null,null,null,null,null];
(statearr_160029[(0)] = state_machine__6988__auto__);

(statearr_160029[(1)] = (1));

return statearr_160029;
});
var state_machine__6988__auto____1 = (function (state_160015){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_160015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e160030){if((e160030 instanceof Object)){
var ex__6991__auto__ = e160030;
var statearr_160031_160039 = state_160015;
(statearr_160031_160039[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160040 = state_160015;
state_160015 = G__160040;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_160015){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_160015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_160032 = f__7044__auto__.call(null);
(statearr_160032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_160032;
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
return (function (state_160114){
var state_val_160115 = (state_160114[(1)]);
if((state_val_160115 === (7))){
var inst_160096 = (state_160114[(2)]);
var state_160114__$1 = state_160114;
var statearr_160116_160139 = state_160114__$1;
(statearr_160116_160139[(2)] = inst_160096);

(statearr_160116_160139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (1))){
var inst_160090 = cljs.core.seq.call(null,coll);
var inst_160091 = inst_160090;
var state_160114__$1 = (function (){var statearr_160117 = state_160114;
(statearr_160117[(7)] = inst_160091);

return statearr_160117;
})();
var statearr_160118_160140 = state_160114__$1;
(statearr_160118_160140[(2)] = null);

(statearr_160118_160140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (4))){
var inst_160091 = (state_160114[(7)]);
var inst_160094 = cljs.core.first.call(null,inst_160091);
var state_160114__$1 = state_160114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160114__$1,(7),ch,inst_160094);
} else {
if((state_val_160115 === (13))){
var inst_160108 = (state_160114[(2)]);
var state_160114__$1 = state_160114;
var statearr_160119_160141 = state_160114__$1;
(statearr_160119_160141[(2)] = inst_160108);

(statearr_160119_160141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (6))){
var inst_160099 = (state_160114[(2)]);
var state_160114__$1 = state_160114;
if(cljs.core.truth_(inst_160099)){
var statearr_160120_160142 = state_160114__$1;
(statearr_160120_160142[(1)] = (8));

} else {
var statearr_160121_160143 = state_160114__$1;
(statearr_160121_160143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (3))){
var inst_160112 = (state_160114[(2)]);
var state_160114__$1 = state_160114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160114__$1,inst_160112);
} else {
if((state_val_160115 === (12))){
var state_160114__$1 = state_160114;
var statearr_160122_160144 = state_160114__$1;
(statearr_160122_160144[(2)] = null);

(statearr_160122_160144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (2))){
var inst_160091 = (state_160114[(7)]);
var state_160114__$1 = state_160114;
if(cljs.core.truth_(inst_160091)){
var statearr_160123_160145 = state_160114__$1;
(statearr_160123_160145[(1)] = (4));

} else {
var statearr_160124_160146 = state_160114__$1;
(statearr_160124_160146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (11))){
var inst_160105 = cljs.core.async.close_BANG_.call(null,ch);
var state_160114__$1 = state_160114;
var statearr_160125_160147 = state_160114__$1;
(statearr_160125_160147[(2)] = inst_160105);

(statearr_160125_160147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (9))){
var state_160114__$1 = state_160114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_160126_160148 = state_160114__$1;
(statearr_160126_160148[(1)] = (11));

} else {
var statearr_160127_160149 = state_160114__$1;
(statearr_160127_160149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (5))){
var inst_160091 = (state_160114[(7)]);
var state_160114__$1 = state_160114;
var statearr_160128_160150 = state_160114__$1;
(statearr_160128_160150[(2)] = inst_160091);

(statearr_160128_160150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (10))){
var inst_160110 = (state_160114[(2)]);
var state_160114__$1 = state_160114;
var statearr_160129_160151 = state_160114__$1;
(statearr_160129_160151[(2)] = inst_160110);

(statearr_160129_160151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160115 === (8))){
var inst_160091 = (state_160114[(7)]);
var inst_160101 = cljs.core.next.call(null,inst_160091);
var inst_160091__$1 = inst_160101;
var state_160114__$1 = (function (){var statearr_160130 = state_160114;
(statearr_160130[(7)] = inst_160091__$1);

return statearr_160130;
})();
var statearr_160131_160152 = state_160114__$1;
(statearr_160131_160152[(2)] = null);

(statearr_160131_160152[(1)] = (2));


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
var statearr_160135 = [null,null,null,null,null,null,null,null];
(statearr_160135[(0)] = state_machine__6988__auto__);

(statearr_160135[(1)] = (1));

return statearr_160135;
});
var state_machine__6988__auto____1 = (function (state_160114){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_160114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e160136){if((e160136 instanceof Object)){
var ex__6991__auto__ = e160136;
var statearr_160137_160153 = state_160114;
(statearr_160137_160153[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160154 = state_160114;
state_160114 = G__160154;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_160114){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_160114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_160138 = f__7044__auto__.call(null);
(statearr_160138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_160138;
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

cljs.core.async.Mux = (function (){var obj160156 = {};
return obj160156;
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


cljs.core.async.Mult = (function (){var obj160158 = {};
return obj160158;
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
if(typeof cljs.core.async.t160380 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t160380 = (function (cs,ch,mult,meta160381){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta160381 = meta160381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t160380.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t160380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t160380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t160380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t160380.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t160380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t160380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_160382){
var self__ = this;
var _160382__$1 = this;
return self__.meta160381;
});})(cs))
;

cljs.core.async.t160380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_160382,meta160381__$1){
var self__ = this;
var _160382__$1 = this;
return (new cljs.core.async.t160380(self__.cs,self__.ch,self__.mult,meta160381__$1));
});})(cs))
;

cljs.core.async.t160380.cljs$lang$type = true;

cljs.core.async.t160380.cljs$lang$ctorStr = "cljs.core.async/t160380";

cljs.core.async.t160380.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t160380");
});})(cs))
;

cljs.core.async.__GT_t160380 = ((function (cs){
return (function __GT_t160380(cs__$1,ch__$1,mult__$1,meta160381){
return (new cljs.core.async.t160380(cs__$1,ch__$1,mult__$1,meta160381));
});})(cs))
;

}

return (new cljs.core.async.t160380(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___160601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___160601,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___160601,cs,m,dchan,dctr,done){
return (function (state_160513){
var state_val_160514 = (state_160513[(1)]);
if((state_val_160514 === (7))){
var inst_160509 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160515_160602 = state_160513__$1;
(statearr_160515_160602[(2)] = inst_160509);

(statearr_160515_160602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (20))){
var inst_160414 = (state_160513[(7)]);
var inst_160424 = cljs.core.first.call(null,inst_160414);
var inst_160425 = cljs.core.nth.call(null,inst_160424,(0),null);
var inst_160426 = cljs.core.nth.call(null,inst_160424,(1),null);
var state_160513__$1 = (function (){var statearr_160516 = state_160513;
(statearr_160516[(8)] = inst_160425);

return statearr_160516;
})();
if(cljs.core.truth_(inst_160426)){
var statearr_160517_160603 = state_160513__$1;
(statearr_160517_160603[(1)] = (22));

} else {
var statearr_160518_160604 = state_160513__$1;
(statearr_160518_160604[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (27))){
var inst_160454 = (state_160513[(9)]);
var inst_160456 = (state_160513[(10)]);
var inst_160385 = (state_160513[(11)]);
var inst_160461 = (state_160513[(12)]);
var inst_160461__$1 = cljs.core._nth.call(null,inst_160454,inst_160456);
var inst_160462 = cljs.core.async.put_BANG_.call(null,inst_160461__$1,inst_160385,done);
var state_160513__$1 = (function (){var statearr_160519 = state_160513;
(statearr_160519[(12)] = inst_160461__$1);

return statearr_160519;
})();
if(cljs.core.truth_(inst_160462)){
var statearr_160520_160605 = state_160513__$1;
(statearr_160520_160605[(1)] = (30));

} else {
var statearr_160521_160606 = state_160513__$1;
(statearr_160521_160606[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (1))){
var state_160513__$1 = state_160513;
var statearr_160522_160607 = state_160513__$1;
(statearr_160522_160607[(2)] = null);

(statearr_160522_160607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (24))){
var inst_160414 = (state_160513[(7)]);
var inst_160431 = (state_160513[(2)]);
var inst_160432 = cljs.core.next.call(null,inst_160414);
var inst_160394 = inst_160432;
var inst_160395 = null;
var inst_160396 = (0);
var inst_160397 = (0);
var state_160513__$1 = (function (){var statearr_160523 = state_160513;
(statearr_160523[(13)] = inst_160431);

(statearr_160523[(14)] = inst_160395);

(statearr_160523[(15)] = inst_160394);

(statearr_160523[(16)] = inst_160397);

(statearr_160523[(17)] = inst_160396);

return statearr_160523;
})();
var statearr_160524_160608 = state_160513__$1;
(statearr_160524_160608[(2)] = null);

(statearr_160524_160608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (39))){
var state_160513__$1 = state_160513;
var statearr_160528_160609 = state_160513__$1;
(statearr_160528_160609[(2)] = null);

(statearr_160528_160609[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (4))){
var inst_160385 = (state_160513[(11)]);
var inst_160385__$1 = (state_160513[(2)]);
var inst_160386 = (inst_160385__$1 == null);
var state_160513__$1 = (function (){var statearr_160529 = state_160513;
(statearr_160529[(11)] = inst_160385__$1);

return statearr_160529;
})();
if(cljs.core.truth_(inst_160386)){
var statearr_160530_160610 = state_160513__$1;
(statearr_160530_160610[(1)] = (5));

} else {
var statearr_160531_160611 = state_160513__$1;
(statearr_160531_160611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (15))){
var inst_160395 = (state_160513[(14)]);
var inst_160394 = (state_160513[(15)]);
var inst_160397 = (state_160513[(16)]);
var inst_160396 = (state_160513[(17)]);
var inst_160410 = (state_160513[(2)]);
var inst_160411 = (inst_160397 + (1));
var tmp160525 = inst_160395;
var tmp160526 = inst_160394;
var tmp160527 = inst_160396;
var inst_160394__$1 = tmp160526;
var inst_160395__$1 = tmp160525;
var inst_160396__$1 = tmp160527;
var inst_160397__$1 = inst_160411;
var state_160513__$1 = (function (){var statearr_160532 = state_160513;
(statearr_160532[(14)] = inst_160395__$1);

(statearr_160532[(15)] = inst_160394__$1);

(statearr_160532[(16)] = inst_160397__$1);

(statearr_160532[(18)] = inst_160410);

(statearr_160532[(17)] = inst_160396__$1);

return statearr_160532;
})();
var statearr_160533_160612 = state_160513__$1;
(statearr_160533_160612[(2)] = null);

(statearr_160533_160612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (21))){
var inst_160435 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160537_160613 = state_160513__$1;
(statearr_160537_160613[(2)] = inst_160435);

(statearr_160537_160613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (31))){
var inst_160461 = (state_160513[(12)]);
var inst_160465 = done.call(null,null);
var inst_160466 = cljs.core.async.untap_STAR_.call(null,m,inst_160461);
var state_160513__$1 = (function (){var statearr_160538 = state_160513;
(statearr_160538[(19)] = inst_160465);

return statearr_160538;
})();
var statearr_160539_160614 = state_160513__$1;
(statearr_160539_160614[(2)] = inst_160466);

(statearr_160539_160614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (32))){
var inst_160455 = (state_160513[(20)]);
var inst_160453 = (state_160513[(21)]);
var inst_160454 = (state_160513[(9)]);
var inst_160456 = (state_160513[(10)]);
var inst_160468 = (state_160513[(2)]);
var inst_160469 = (inst_160456 + (1));
var tmp160534 = inst_160455;
var tmp160535 = inst_160453;
var tmp160536 = inst_160454;
var inst_160453__$1 = tmp160535;
var inst_160454__$1 = tmp160536;
var inst_160455__$1 = tmp160534;
var inst_160456__$1 = inst_160469;
var state_160513__$1 = (function (){var statearr_160540 = state_160513;
(statearr_160540[(20)] = inst_160455__$1);

(statearr_160540[(21)] = inst_160453__$1);

(statearr_160540[(9)] = inst_160454__$1);

(statearr_160540[(10)] = inst_160456__$1);

(statearr_160540[(22)] = inst_160468);

return statearr_160540;
})();
var statearr_160541_160615 = state_160513__$1;
(statearr_160541_160615[(2)] = null);

(statearr_160541_160615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (40))){
var inst_160481 = (state_160513[(23)]);
var inst_160485 = done.call(null,null);
var inst_160486 = cljs.core.async.untap_STAR_.call(null,m,inst_160481);
var state_160513__$1 = (function (){var statearr_160542 = state_160513;
(statearr_160542[(24)] = inst_160485);

return statearr_160542;
})();
var statearr_160543_160616 = state_160513__$1;
(statearr_160543_160616[(2)] = inst_160486);

(statearr_160543_160616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (33))){
var inst_160472 = (state_160513[(25)]);
var inst_160474 = cljs.core.chunked_seq_QMARK_.call(null,inst_160472);
var state_160513__$1 = state_160513;
if(inst_160474){
var statearr_160544_160617 = state_160513__$1;
(statearr_160544_160617[(1)] = (36));

} else {
var statearr_160545_160618 = state_160513__$1;
(statearr_160545_160618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (13))){
var inst_160404 = (state_160513[(26)]);
var inst_160407 = cljs.core.async.close_BANG_.call(null,inst_160404);
var state_160513__$1 = state_160513;
var statearr_160546_160619 = state_160513__$1;
(statearr_160546_160619[(2)] = inst_160407);

(statearr_160546_160619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (22))){
var inst_160425 = (state_160513[(8)]);
var inst_160428 = cljs.core.async.close_BANG_.call(null,inst_160425);
var state_160513__$1 = state_160513;
var statearr_160547_160620 = state_160513__$1;
(statearr_160547_160620[(2)] = inst_160428);

(statearr_160547_160620[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (36))){
var inst_160472 = (state_160513[(25)]);
var inst_160476 = cljs.core.chunk_first.call(null,inst_160472);
var inst_160477 = cljs.core.chunk_rest.call(null,inst_160472);
var inst_160478 = cljs.core.count.call(null,inst_160476);
var inst_160453 = inst_160477;
var inst_160454 = inst_160476;
var inst_160455 = inst_160478;
var inst_160456 = (0);
var state_160513__$1 = (function (){var statearr_160548 = state_160513;
(statearr_160548[(20)] = inst_160455);

(statearr_160548[(21)] = inst_160453);

(statearr_160548[(9)] = inst_160454);

(statearr_160548[(10)] = inst_160456);

return statearr_160548;
})();
var statearr_160549_160621 = state_160513__$1;
(statearr_160549_160621[(2)] = null);

(statearr_160549_160621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (41))){
var inst_160472 = (state_160513[(25)]);
var inst_160488 = (state_160513[(2)]);
var inst_160489 = cljs.core.next.call(null,inst_160472);
var inst_160453 = inst_160489;
var inst_160454 = null;
var inst_160455 = (0);
var inst_160456 = (0);
var state_160513__$1 = (function (){var statearr_160550 = state_160513;
(statearr_160550[(27)] = inst_160488);

(statearr_160550[(20)] = inst_160455);

(statearr_160550[(21)] = inst_160453);

(statearr_160550[(9)] = inst_160454);

(statearr_160550[(10)] = inst_160456);

return statearr_160550;
})();
var statearr_160551_160622 = state_160513__$1;
(statearr_160551_160622[(2)] = null);

(statearr_160551_160622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (43))){
var state_160513__$1 = state_160513;
var statearr_160552_160623 = state_160513__$1;
(statearr_160552_160623[(2)] = null);

(statearr_160552_160623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (29))){
var inst_160497 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160553_160624 = state_160513__$1;
(statearr_160553_160624[(2)] = inst_160497);

(statearr_160553_160624[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (44))){
var inst_160506 = (state_160513[(2)]);
var state_160513__$1 = (function (){var statearr_160554 = state_160513;
(statearr_160554[(28)] = inst_160506);

return statearr_160554;
})();
var statearr_160555_160625 = state_160513__$1;
(statearr_160555_160625[(2)] = null);

(statearr_160555_160625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (6))){
var inst_160445 = (state_160513[(29)]);
var inst_160444 = cljs.core.deref.call(null,cs);
var inst_160445__$1 = cljs.core.keys.call(null,inst_160444);
var inst_160446 = cljs.core.count.call(null,inst_160445__$1);
var inst_160447 = cljs.core.reset_BANG_.call(null,dctr,inst_160446);
var inst_160452 = cljs.core.seq.call(null,inst_160445__$1);
var inst_160453 = inst_160452;
var inst_160454 = null;
var inst_160455 = (0);
var inst_160456 = (0);
var state_160513__$1 = (function (){var statearr_160556 = state_160513;
(statearr_160556[(20)] = inst_160455);

(statearr_160556[(21)] = inst_160453);

(statearr_160556[(30)] = inst_160447);

(statearr_160556[(9)] = inst_160454);

(statearr_160556[(10)] = inst_160456);

(statearr_160556[(29)] = inst_160445__$1);

return statearr_160556;
})();
var statearr_160557_160626 = state_160513__$1;
(statearr_160557_160626[(2)] = null);

(statearr_160557_160626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (28))){
var inst_160453 = (state_160513[(21)]);
var inst_160472 = (state_160513[(25)]);
var inst_160472__$1 = cljs.core.seq.call(null,inst_160453);
var state_160513__$1 = (function (){var statearr_160558 = state_160513;
(statearr_160558[(25)] = inst_160472__$1);

return statearr_160558;
})();
if(inst_160472__$1){
var statearr_160559_160627 = state_160513__$1;
(statearr_160559_160627[(1)] = (33));

} else {
var statearr_160560_160628 = state_160513__$1;
(statearr_160560_160628[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (25))){
var inst_160455 = (state_160513[(20)]);
var inst_160456 = (state_160513[(10)]);
var inst_160458 = (inst_160456 < inst_160455);
var inst_160459 = inst_160458;
var state_160513__$1 = state_160513;
if(cljs.core.truth_(inst_160459)){
var statearr_160561_160629 = state_160513__$1;
(statearr_160561_160629[(1)] = (27));

} else {
var statearr_160562_160630 = state_160513__$1;
(statearr_160562_160630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (34))){
var state_160513__$1 = state_160513;
var statearr_160563_160631 = state_160513__$1;
(statearr_160563_160631[(2)] = null);

(statearr_160563_160631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (17))){
var state_160513__$1 = state_160513;
var statearr_160564_160632 = state_160513__$1;
(statearr_160564_160632[(2)] = null);

(statearr_160564_160632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (3))){
var inst_160511 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160513__$1,inst_160511);
} else {
if((state_val_160514 === (12))){
var inst_160440 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160565_160633 = state_160513__$1;
(statearr_160565_160633[(2)] = inst_160440);

(statearr_160565_160633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (2))){
var state_160513__$1 = state_160513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160513__$1,(4),ch);
} else {
if((state_val_160514 === (23))){
var state_160513__$1 = state_160513;
var statearr_160566_160634 = state_160513__$1;
(statearr_160566_160634[(2)] = null);

(statearr_160566_160634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (35))){
var inst_160495 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160567_160635 = state_160513__$1;
(statearr_160567_160635[(2)] = inst_160495);

(statearr_160567_160635[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (19))){
var inst_160414 = (state_160513[(7)]);
var inst_160418 = cljs.core.chunk_first.call(null,inst_160414);
var inst_160419 = cljs.core.chunk_rest.call(null,inst_160414);
var inst_160420 = cljs.core.count.call(null,inst_160418);
var inst_160394 = inst_160419;
var inst_160395 = inst_160418;
var inst_160396 = inst_160420;
var inst_160397 = (0);
var state_160513__$1 = (function (){var statearr_160568 = state_160513;
(statearr_160568[(14)] = inst_160395);

(statearr_160568[(15)] = inst_160394);

(statearr_160568[(16)] = inst_160397);

(statearr_160568[(17)] = inst_160396);

return statearr_160568;
})();
var statearr_160569_160636 = state_160513__$1;
(statearr_160569_160636[(2)] = null);

(statearr_160569_160636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (11))){
var inst_160394 = (state_160513[(15)]);
var inst_160414 = (state_160513[(7)]);
var inst_160414__$1 = cljs.core.seq.call(null,inst_160394);
var state_160513__$1 = (function (){var statearr_160570 = state_160513;
(statearr_160570[(7)] = inst_160414__$1);

return statearr_160570;
})();
if(inst_160414__$1){
var statearr_160571_160637 = state_160513__$1;
(statearr_160571_160637[(1)] = (16));

} else {
var statearr_160572_160638 = state_160513__$1;
(statearr_160572_160638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (9))){
var inst_160442 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160573_160639 = state_160513__$1;
(statearr_160573_160639[(2)] = inst_160442);

(statearr_160573_160639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (5))){
var inst_160392 = cljs.core.deref.call(null,cs);
var inst_160393 = cljs.core.seq.call(null,inst_160392);
var inst_160394 = inst_160393;
var inst_160395 = null;
var inst_160396 = (0);
var inst_160397 = (0);
var state_160513__$1 = (function (){var statearr_160574 = state_160513;
(statearr_160574[(14)] = inst_160395);

(statearr_160574[(15)] = inst_160394);

(statearr_160574[(16)] = inst_160397);

(statearr_160574[(17)] = inst_160396);

return statearr_160574;
})();
var statearr_160575_160640 = state_160513__$1;
(statearr_160575_160640[(2)] = null);

(statearr_160575_160640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (14))){
var state_160513__$1 = state_160513;
var statearr_160576_160641 = state_160513__$1;
(statearr_160576_160641[(2)] = null);

(statearr_160576_160641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (45))){
var inst_160503 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160577_160642 = state_160513__$1;
(statearr_160577_160642[(2)] = inst_160503);

(statearr_160577_160642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (26))){
var inst_160445 = (state_160513[(29)]);
var inst_160499 = (state_160513[(2)]);
var inst_160500 = cljs.core.seq.call(null,inst_160445);
var state_160513__$1 = (function (){var statearr_160578 = state_160513;
(statearr_160578[(31)] = inst_160499);

return statearr_160578;
})();
if(inst_160500){
var statearr_160579_160643 = state_160513__$1;
(statearr_160579_160643[(1)] = (42));

} else {
var statearr_160580_160644 = state_160513__$1;
(statearr_160580_160644[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (16))){
var inst_160414 = (state_160513[(7)]);
var inst_160416 = cljs.core.chunked_seq_QMARK_.call(null,inst_160414);
var state_160513__$1 = state_160513;
if(inst_160416){
var statearr_160581_160645 = state_160513__$1;
(statearr_160581_160645[(1)] = (19));

} else {
var statearr_160582_160646 = state_160513__$1;
(statearr_160582_160646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (38))){
var inst_160492 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160583_160647 = state_160513__$1;
(statearr_160583_160647[(2)] = inst_160492);

(statearr_160583_160647[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (30))){
var state_160513__$1 = state_160513;
var statearr_160584_160648 = state_160513__$1;
(statearr_160584_160648[(2)] = null);

(statearr_160584_160648[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (10))){
var inst_160395 = (state_160513[(14)]);
var inst_160397 = (state_160513[(16)]);
var inst_160403 = cljs.core._nth.call(null,inst_160395,inst_160397);
var inst_160404 = cljs.core.nth.call(null,inst_160403,(0),null);
var inst_160405 = cljs.core.nth.call(null,inst_160403,(1),null);
var state_160513__$1 = (function (){var statearr_160585 = state_160513;
(statearr_160585[(26)] = inst_160404);

return statearr_160585;
})();
if(cljs.core.truth_(inst_160405)){
var statearr_160586_160649 = state_160513__$1;
(statearr_160586_160649[(1)] = (13));

} else {
var statearr_160587_160650 = state_160513__$1;
(statearr_160587_160650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (18))){
var inst_160438 = (state_160513[(2)]);
var state_160513__$1 = state_160513;
var statearr_160588_160651 = state_160513__$1;
(statearr_160588_160651[(2)] = inst_160438);

(statearr_160588_160651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (42))){
var state_160513__$1 = state_160513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160513__$1,(45),dchan);
} else {
if((state_val_160514 === (37))){
var inst_160472 = (state_160513[(25)]);
var inst_160385 = (state_160513[(11)]);
var inst_160481 = (state_160513[(23)]);
var inst_160481__$1 = cljs.core.first.call(null,inst_160472);
var inst_160482 = cljs.core.async.put_BANG_.call(null,inst_160481__$1,inst_160385,done);
var state_160513__$1 = (function (){var statearr_160589 = state_160513;
(statearr_160589[(23)] = inst_160481__$1);

return statearr_160589;
})();
if(cljs.core.truth_(inst_160482)){
var statearr_160590_160652 = state_160513__$1;
(statearr_160590_160652[(1)] = (39));

} else {
var statearr_160591_160653 = state_160513__$1;
(statearr_160591_160653[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160514 === (8))){
var inst_160397 = (state_160513[(16)]);
var inst_160396 = (state_160513[(17)]);
var inst_160399 = (inst_160397 < inst_160396);
var inst_160400 = inst_160399;
var state_160513__$1 = state_160513;
if(cljs.core.truth_(inst_160400)){
var statearr_160592_160654 = state_160513__$1;
(statearr_160592_160654[(1)] = (10));

} else {
var statearr_160593_160655 = state_160513__$1;
(statearr_160593_160655[(1)] = (11));

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
});})(c__7043__auto___160601,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___160601,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_160597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_160597[(0)] = state_machine__6988__auto__);

(statearr_160597[(1)] = (1));

return statearr_160597;
});
var state_machine__6988__auto____1 = (function (state_160513){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_160513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e160598){if((e160598 instanceof Object)){
var ex__6991__auto__ = e160598;
var statearr_160599_160656 = state_160513;
(statearr_160599_160656[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160657 = state_160513;
state_160513 = G__160657;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_160513){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_160513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___160601,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_160600 = f__7044__auto__.call(null);
(statearr_160600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___160601);

return statearr_160600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___160601,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj160659 = {};
return obj160659;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__160660){
var map__160665 = p__160660;
var map__160665__$1 = ((cljs.core.seq_QMARK_.call(null,map__160665))?cljs.core.apply.call(null,cljs.core.hash_map,map__160665):map__160665);
var opts = map__160665__$1;
var statearr_160666_160669 = state;
(statearr_160666_160669[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__160665,map__160665__$1,opts){
return (function (val){
var statearr_160667_160670 = state;
(statearr_160667_160670[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__160665,map__160665__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_160668_160671 = state;
(statearr_160668_160671[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__160660 = null;
if (arguments.length > 3) {
  p__160660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__160660);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__160672){
var state = cljs.core.first(arglist__160672);
arglist__160672 = cljs.core.next(arglist__160672);
var cont_block = cljs.core.first(arglist__160672);
arglist__160672 = cljs.core.next(arglist__160672);
var ports = cljs.core.first(arglist__160672);
var p__160660 = cljs.core.rest(arglist__160672);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__160660);
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
if(typeof cljs.core.async.t160792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t160792 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta160793){
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
this.meta160793 = meta160793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t160792.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t160792.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t160792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t160792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_160794){
var self__ = this;
var _160794__$1 = this;
return self__.meta160793;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_160794,meta160793__$1){
var self__ = this;
var _160794__$1 = this;
return (new cljs.core.async.t160792(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta160793__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t160792.cljs$lang$type = true;

cljs.core.async.t160792.cljs$lang$ctorStr = "cljs.core.async/t160792";

cljs.core.async.t160792.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t160792");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t160792 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t160792(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta160793){
return (new cljs.core.async.t160792(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta160793));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t160792(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___160911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_160864){
var state_val_160865 = (state_160864[(1)]);
if((state_val_160865 === (7))){
var inst_160808 = (state_160864[(7)]);
var inst_160813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_160808);
var state_160864__$1 = state_160864;
var statearr_160866_160912 = state_160864__$1;
(statearr_160866_160912[(2)] = inst_160813);

(statearr_160866_160912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (20))){
var inst_160823 = (state_160864[(8)]);
var state_160864__$1 = state_160864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160864__$1,(23),out,inst_160823);
} else {
if((state_val_160865 === (1))){
var inst_160798 = (state_160864[(9)]);
var inst_160798__$1 = calc_state.call(null);
var inst_160799 = cljs.core.seq_QMARK_.call(null,inst_160798__$1);
var state_160864__$1 = (function (){var statearr_160867 = state_160864;
(statearr_160867[(9)] = inst_160798__$1);

return statearr_160867;
})();
if(inst_160799){
var statearr_160868_160913 = state_160864__$1;
(statearr_160868_160913[(1)] = (2));

} else {
var statearr_160869_160914 = state_160864__$1;
(statearr_160869_160914[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (24))){
var inst_160816 = (state_160864[(10)]);
var inst_160808 = inst_160816;
var state_160864__$1 = (function (){var statearr_160870 = state_160864;
(statearr_160870[(7)] = inst_160808);

return statearr_160870;
})();
var statearr_160871_160915 = state_160864__$1;
(statearr_160871_160915[(2)] = null);

(statearr_160871_160915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (4))){
var inst_160798 = (state_160864[(9)]);
var inst_160804 = (state_160864[(2)]);
var inst_160805 = cljs.core.get.call(null,inst_160804,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_160806 = cljs.core.get.call(null,inst_160804,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_160807 = cljs.core.get.call(null,inst_160804,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_160808 = inst_160798;
var state_160864__$1 = (function (){var statearr_160872 = state_160864;
(statearr_160872[(7)] = inst_160808);

(statearr_160872[(11)] = inst_160805);

(statearr_160872[(12)] = inst_160807);

(statearr_160872[(13)] = inst_160806);

return statearr_160872;
})();
var statearr_160873_160916 = state_160864__$1;
(statearr_160873_160916[(2)] = null);

(statearr_160873_160916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (15))){
var state_160864__$1 = state_160864;
var statearr_160874_160917 = state_160864__$1;
(statearr_160874_160917[(2)] = null);

(statearr_160874_160917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (21))){
var inst_160816 = (state_160864[(10)]);
var inst_160808 = inst_160816;
var state_160864__$1 = (function (){var statearr_160875 = state_160864;
(statearr_160875[(7)] = inst_160808);

return statearr_160875;
})();
var statearr_160876_160918 = state_160864__$1;
(statearr_160876_160918[(2)] = null);

(statearr_160876_160918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (13))){
var inst_160860 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
var statearr_160877_160919 = state_160864__$1;
(statearr_160877_160919[(2)] = inst_160860);

(statearr_160877_160919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (22))){
var inst_160858 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
var statearr_160878_160920 = state_160864__$1;
(statearr_160878_160920[(2)] = inst_160858);

(statearr_160878_160920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (6))){
var inst_160862 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160864__$1,inst_160862);
} else {
if((state_val_160865 === (25))){
var state_160864__$1 = state_160864;
var statearr_160879_160921 = state_160864__$1;
(statearr_160879_160921[(2)] = null);

(statearr_160879_160921[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (17))){
var inst_160838 = (state_160864[(14)]);
var state_160864__$1 = state_160864;
var statearr_160880_160922 = state_160864__$1;
(statearr_160880_160922[(2)] = inst_160838);

(statearr_160880_160922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (3))){
var inst_160798 = (state_160864[(9)]);
var state_160864__$1 = state_160864;
var statearr_160881_160923 = state_160864__$1;
(statearr_160881_160923[(2)] = inst_160798);

(statearr_160881_160923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (12))){
var inst_160824 = (state_160864[(15)]);
var inst_160819 = (state_160864[(16)]);
var inst_160838 = (state_160864[(14)]);
var inst_160838__$1 = inst_160819.call(null,inst_160824);
var state_160864__$1 = (function (){var statearr_160882 = state_160864;
(statearr_160882[(14)] = inst_160838__$1);

return statearr_160882;
})();
if(cljs.core.truth_(inst_160838__$1)){
var statearr_160883_160924 = state_160864__$1;
(statearr_160883_160924[(1)] = (17));

} else {
var statearr_160884_160925 = state_160864__$1;
(statearr_160884_160925[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (2))){
var inst_160798 = (state_160864[(9)]);
var inst_160801 = cljs.core.apply.call(null,cljs.core.hash_map,inst_160798);
var state_160864__$1 = state_160864;
var statearr_160885_160926 = state_160864__$1;
(statearr_160885_160926[(2)] = inst_160801);

(statearr_160885_160926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (23))){
var inst_160849 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
if(cljs.core.truth_(inst_160849)){
var statearr_160886_160927 = state_160864__$1;
(statearr_160886_160927[(1)] = (24));

} else {
var statearr_160887_160928 = state_160864__$1;
(statearr_160887_160928[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (19))){
var inst_160846 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
if(cljs.core.truth_(inst_160846)){
var statearr_160888_160929 = state_160864__$1;
(statearr_160888_160929[(1)] = (20));

} else {
var statearr_160889_160930 = state_160864__$1;
(statearr_160889_160930[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (11))){
var inst_160823 = (state_160864[(8)]);
var inst_160829 = (inst_160823 == null);
var state_160864__$1 = state_160864;
if(cljs.core.truth_(inst_160829)){
var statearr_160890_160931 = state_160864__$1;
(statearr_160890_160931[(1)] = (14));

} else {
var statearr_160891_160932 = state_160864__$1;
(statearr_160891_160932[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (9))){
var inst_160816 = (state_160864[(10)]);
var inst_160816__$1 = (state_160864[(2)]);
var inst_160817 = cljs.core.get.call(null,inst_160816__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_160818 = cljs.core.get.call(null,inst_160816__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_160819 = cljs.core.get.call(null,inst_160816__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_160864__$1 = (function (){var statearr_160892 = state_160864;
(statearr_160892[(10)] = inst_160816__$1);

(statearr_160892[(16)] = inst_160819);

(statearr_160892[(17)] = inst_160818);

return statearr_160892;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_160864__$1,(10),inst_160817);
} else {
if((state_val_160865 === (5))){
var inst_160808 = (state_160864[(7)]);
var inst_160811 = cljs.core.seq_QMARK_.call(null,inst_160808);
var state_160864__$1 = state_160864;
if(inst_160811){
var statearr_160893_160933 = state_160864__$1;
(statearr_160893_160933[(1)] = (7));

} else {
var statearr_160894_160934 = state_160864__$1;
(statearr_160894_160934[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (14))){
var inst_160824 = (state_160864[(15)]);
var inst_160831 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_160824);
var state_160864__$1 = state_160864;
var statearr_160895_160935 = state_160864__$1;
(statearr_160895_160935[(2)] = inst_160831);

(statearr_160895_160935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (26))){
var inst_160854 = (state_160864[(2)]);
var state_160864__$1 = state_160864;
var statearr_160896_160936 = state_160864__$1;
(statearr_160896_160936[(2)] = inst_160854);

(statearr_160896_160936[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (16))){
var inst_160834 = (state_160864[(2)]);
var inst_160835 = calc_state.call(null);
var inst_160808 = inst_160835;
var state_160864__$1 = (function (){var statearr_160897 = state_160864;
(statearr_160897[(7)] = inst_160808);

(statearr_160897[(18)] = inst_160834);

return statearr_160897;
})();
var statearr_160898_160937 = state_160864__$1;
(statearr_160898_160937[(2)] = null);

(statearr_160898_160937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (10))){
var inst_160824 = (state_160864[(15)]);
var inst_160823 = (state_160864[(8)]);
var inst_160822 = (state_160864[(2)]);
var inst_160823__$1 = cljs.core.nth.call(null,inst_160822,(0),null);
var inst_160824__$1 = cljs.core.nth.call(null,inst_160822,(1),null);
var inst_160825 = (inst_160823__$1 == null);
var inst_160826 = cljs.core._EQ_.call(null,inst_160824__$1,change);
var inst_160827 = (inst_160825) || (inst_160826);
var state_160864__$1 = (function (){var statearr_160899 = state_160864;
(statearr_160899[(15)] = inst_160824__$1);

(statearr_160899[(8)] = inst_160823__$1);

return statearr_160899;
})();
if(cljs.core.truth_(inst_160827)){
var statearr_160900_160938 = state_160864__$1;
(statearr_160900_160938[(1)] = (11));

} else {
var statearr_160901_160939 = state_160864__$1;
(statearr_160901_160939[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (18))){
var inst_160824 = (state_160864[(15)]);
var inst_160819 = (state_160864[(16)]);
var inst_160818 = (state_160864[(17)]);
var inst_160841 = cljs.core.empty_QMARK_.call(null,inst_160819);
var inst_160842 = inst_160818.call(null,inst_160824);
var inst_160843 = cljs.core.not.call(null,inst_160842);
var inst_160844 = (inst_160841) && (inst_160843);
var state_160864__$1 = state_160864;
var statearr_160902_160940 = state_160864__$1;
(statearr_160902_160940[(2)] = inst_160844);

(statearr_160902_160940[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_160865 === (8))){
var inst_160808 = (state_160864[(7)]);
var state_160864__$1 = state_160864;
var statearr_160903_160941 = state_160864__$1;
(statearr_160903_160941[(2)] = inst_160808);

(statearr_160903_160941[(1)] = (9));


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
});})(c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_160907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_160907[(0)] = state_machine__6988__auto__);

(statearr_160907[(1)] = (1));

return statearr_160907;
});
var state_machine__6988__auto____1 = (function (state_160864){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_160864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e160908){if((e160908 instanceof Object)){
var ex__6991__auto__ = e160908;
var statearr_160909_160942 = state_160864;
(statearr_160909_160942[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e160908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__160943 = state_160864;
state_160864 = G__160943;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_160864){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_160864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_160910 = f__7044__auto__.call(null);
(statearr_160910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___160911);

return statearr_160910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___160911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj160945 = {};
return obj160945;
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
return (function (p1__160946_SHARP_){
if(cljs.core.truth_(p1__160946_SHARP_.call(null,topic))){
return p1__160946_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__160946_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t161069 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t161069 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta161070){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta161070 = meta161070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t161069.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t161069.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t161069.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t161069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t161069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t161069.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t161069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t161069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_161071){
var self__ = this;
var _161071__$1 = this;
return self__.meta161070;
});})(mults,ensure_mult))
;

cljs.core.async.t161069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_161071,meta161070__$1){
var self__ = this;
var _161071__$1 = this;
return (new cljs.core.async.t161069(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta161070__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t161069.cljs$lang$type = true;

cljs.core.async.t161069.cljs$lang$ctorStr = "cljs.core.async/t161069";

cljs.core.async.t161069.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t161069");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t161069 = ((function (mults,ensure_mult){
return (function __GT_t161069(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta161070){
return (new cljs.core.async.t161069(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta161070));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t161069(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___161191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___161191,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___161191,mults,ensure_mult,p){
return (function (state_161143){
var state_val_161144 = (state_161143[(1)]);
if((state_val_161144 === (7))){
var inst_161139 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161145_161192 = state_161143__$1;
(statearr_161145_161192[(2)] = inst_161139);

(statearr_161145_161192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (20))){
var state_161143__$1 = state_161143;
var statearr_161146_161193 = state_161143__$1;
(statearr_161146_161193[(2)] = null);

(statearr_161146_161193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (1))){
var state_161143__$1 = state_161143;
var statearr_161147_161194 = state_161143__$1;
(statearr_161147_161194[(2)] = null);

(statearr_161147_161194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (24))){
var inst_161122 = (state_161143[(7)]);
var inst_161131 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_161122);
var state_161143__$1 = state_161143;
var statearr_161148_161195 = state_161143__$1;
(statearr_161148_161195[(2)] = inst_161131);

(statearr_161148_161195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (4))){
var inst_161074 = (state_161143[(8)]);
var inst_161074__$1 = (state_161143[(2)]);
var inst_161075 = (inst_161074__$1 == null);
var state_161143__$1 = (function (){var statearr_161149 = state_161143;
(statearr_161149[(8)] = inst_161074__$1);

return statearr_161149;
})();
if(cljs.core.truth_(inst_161075)){
var statearr_161150_161196 = state_161143__$1;
(statearr_161150_161196[(1)] = (5));

} else {
var statearr_161151_161197 = state_161143__$1;
(statearr_161151_161197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (15))){
var inst_161116 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161152_161198 = state_161143__$1;
(statearr_161152_161198[(2)] = inst_161116);

(statearr_161152_161198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (21))){
var inst_161136 = (state_161143[(2)]);
var state_161143__$1 = (function (){var statearr_161153 = state_161143;
(statearr_161153[(9)] = inst_161136);

return statearr_161153;
})();
var statearr_161154_161199 = state_161143__$1;
(statearr_161154_161199[(2)] = null);

(statearr_161154_161199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (13))){
var inst_161098 = (state_161143[(10)]);
var inst_161100 = cljs.core.chunked_seq_QMARK_.call(null,inst_161098);
var state_161143__$1 = state_161143;
if(inst_161100){
var statearr_161155_161200 = state_161143__$1;
(statearr_161155_161200[(1)] = (16));

} else {
var statearr_161156_161201 = state_161143__$1;
(statearr_161156_161201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (22))){
var inst_161128 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
if(cljs.core.truth_(inst_161128)){
var statearr_161157_161202 = state_161143__$1;
(statearr_161157_161202[(1)] = (23));

} else {
var statearr_161158_161203 = state_161143__$1;
(statearr_161158_161203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (6))){
var inst_161124 = (state_161143[(11)]);
var inst_161074 = (state_161143[(8)]);
var inst_161122 = (state_161143[(7)]);
var inst_161122__$1 = topic_fn.call(null,inst_161074);
var inst_161123 = cljs.core.deref.call(null,mults);
var inst_161124__$1 = cljs.core.get.call(null,inst_161123,inst_161122__$1);
var state_161143__$1 = (function (){var statearr_161159 = state_161143;
(statearr_161159[(11)] = inst_161124__$1);

(statearr_161159[(7)] = inst_161122__$1);

return statearr_161159;
})();
if(cljs.core.truth_(inst_161124__$1)){
var statearr_161160_161204 = state_161143__$1;
(statearr_161160_161204[(1)] = (19));

} else {
var statearr_161161_161205 = state_161143__$1;
(statearr_161161_161205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (25))){
var inst_161133 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161162_161206 = state_161143__$1;
(statearr_161162_161206[(2)] = inst_161133);

(statearr_161162_161206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (17))){
var inst_161098 = (state_161143[(10)]);
var inst_161107 = cljs.core.first.call(null,inst_161098);
var inst_161108 = cljs.core.async.muxch_STAR_.call(null,inst_161107);
var inst_161109 = cljs.core.async.close_BANG_.call(null,inst_161108);
var inst_161110 = cljs.core.next.call(null,inst_161098);
var inst_161084 = inst_161110;
var inst_161085 = null;
var inst_161086 = (0);
var inst_161087 = (0);
var state_161143__$1 = (function (){var statearr_161163 = state_161143;
(statearr_161163[(12)] = inst_161086);

(statearr_161163[(13)] = inst_161109);

(statearr_161163[(14)] = inst_161087);

(statearr_161163[(15)] = inst_161085);

(statearr_161163[(16)] = inst_161084);

return statearr_161163;
})();
var statearr_161164_161207 = state_161143__$1;
(statearr_161164_161207[(2)] = null);

(statearr_161164_161207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (3))){
var inst_161141 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161143__$1,inst_161141);
} else {
if((state_val_161144 === (12))){
var inst_161118 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161165_161208 = state_161143__$1;
(statearr_161165_161208[(2)] = inst_161118);

(statearr_161165_161208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (2))){
var state_161143__$1 = state_161143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161143__$1,(4),ch);
} else {
if((state_val_161144 === (23))){
var state_161143__$1 = state_161143;
var statearr_161166_161209 = state_161143__$1;
(statearr_161166_161209[(2)] = null);

(statearr_161166_161209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (19))){
var inst_161124 = (state_161143[(11)]);
var inst_161074 = (state_161143[(8)]);
var inst_161126 = cljs.core.async.muxch_STAR_.call(null,inst_161124);
var state_161143__$1 = state_161143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161143__$1,(22),inst_161126,inst_161074);
} else {
if((state_val_161144 === (11))){
var inst_161098 = (state_161143[(10)]);
var inst_161084 = (state_161143[(16)]);
var inst_161098__$1 = cljs.core.seq.call(null,inst_161084);
var state_161143__$1 = (function (){var statearr_161167 = state_161143;
(statearr_161167[(10)] = inst_161098__$1);

return statearr_161167;
})();
if(inst_161098__$1){
var statearr_161168_161210 = state_161143__$1;
(statearr_161168_161210[(1)] = (13));

} else {
var statearr_161169_161211 = state_161143__$1;
(statearr_161169_161211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (9))){
var inst_161120 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161170_161212 = state_161143__$1;
(statearr_161170_161212[(2)] = inst_161120);

(statearr_161170_161212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (5))){
var inst_161081 = cljs.core.deref.call(null,mults);
var inst_161082 = cljs.core.vals.call(null,inst_161081);
var inst_161083 = cljs.core.seq.call(null,inst_161082);
var inst_161084 = inst_161083;
var inst_161085 = null;
var inst_161086 = (0);
var inst_161087 = (0);
var state_161143__$1 = (function (){var statearr_161171 = state_161143;
(statearr_161171[(12)] = inst_161086);

(statearr_161171[(14)] = inst_161087);

(statearr_161171[(15)] = inst_161085);

(statearr_161171[(16)] = inst_161084);

return statearr_161171;
})();
var statearr_161172_161213 = state_161143__$1;
(statearr_161172_161213[(2)] = null);

(statearr_161172_161213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (14))){
var state_161143__$1 = state_161143;
var statearr_161176_161214 = state_161143__$1;
(statearr_161176_161214[(2)] = null);

(statearr_161176_161214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (16))){
var inst_161098 = (state_161143[(10)]);
var inst_161102 = cljs.core.chunk_first.call(null,inst_161098);
var inst_161103 = cljs.core.chunk_rest.call(null,inst_161098);
var inst_161104 = cljs.core.count.call(null,inst_161102);
var inst_161084 = inst_161103;
var inst_161085 = inst_161102;
var inst_161086 = inst_161104;
var inst_161087 = (0);
var state_161143__$1 = (function (){var statearr_161177 = state_161143;
(statearr_161177[(12)] = inst_161086);

(statearr_161177[(14)] = inst_161087);

(statearr_161177[(15)] = inst_161085);

(statearr_161177[(16)] = inst_161084);

return statearr_161177;
})();
var statearr_161178_161215 = state_161143__$1;
(statearr_161178_161215[(2)] = null);

(statearr_161178_161215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (10))){
var inst_161086 = (state_161143[(12)]);
var inst_161087 = (state_161143[(14)]);
var inst_161085 = (state_161143[(15)]);
var inst_161084 = (state_161143[(16)]);
var inst_161092 = cljs.core._nth.call(null,inst_161085,inst_161087);
var inst_161093 = cljs.core.async.muxch_STAR_.call(null,inst_161092);
var inst_161094 = cljs.core.async.close_BANG_.call(null,inst_161093);
var inst_161095 = (inst_161087 + (1));
var tmp161173 = inst_161086;
var tmp161174 = inst_161085;
var tmp161175 = inst_161084;
var inst_161084__$1 = tmp161175;
var inst_161085__$1 = tmp161174;
var inst_161086__$1 = tmp161173;
var inst_161087__$1 = inst_161095;
var state_161143__$1 = (function (){var statearr_161179 = state_161143;
(statearr_161179[(12)] = inst_161086__$1);

(statearr_161179[(17)] = inst_161094);

(statearr_161179[(14)] = inst_161087__$1);

(statearr_161179[(15)] = inst_161085__$1);

(statearr_161179[(16)] = inst_161084__$1);

return statearr_161179;
})();
var statearr_161180_161216 = state_161143__$1;
(statearr_161180_161216[(2)] = null);

(statearr_161180_161216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (18))){
var inst_161113 = (state_161143[(2)]);
var state_161143__$1 = state_161143;
var statearr_161181_161217 = state_161143__$1;
(statearr_161181_161217[(2)] = inst_161113);

(statearr_161181_161217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161144 === (8))){
var inst_161086 = (state_161143[(12)]);
var inst_161087 = (state_161143[(14)]);
var inst_161089 = (inst_161087 < inst_161086);
var inst_161090 = inst_161089;
var state_161143__$1 = state_161143;
if(cljs.core.truth_(inst_161090)){
var statearr_161182_161218 = state_161143__$1;
(statearr_161182_161218[(1)] = (10));

} else {
var statearr_161183_161219 = state_161143__$1;
(statearr_161183_161219[(1)] = (11));

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
});})(c__7043__auto___161191,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___161191,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_161187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_161187[(0)] = state_machine__6988__auto__);

(statearr_161187[(1)] = (1));

return statearr_161187;
});
var state_machine__6988__auto____1 = (function (state_161143){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161188){if((e161188 instanceof Object)){
var ex__6991__auto__ = e161188;
var statearr_161189_161220 = state_161143;
(statearr_161189_161220[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161221 = state_161143;
state_161143 = G__161221;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161143){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___161191,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_161190 = f__7044__auto__.call(null);
(statearr_161190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___161191);

return statearr_161190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___161191,mults,ensure_mult,p))
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
var c__7043__auto___161358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_161328){
var state_val_161329 = (state_161328[(1)]);
if((state_val_161329 === (7))){
var state_161328__$1 = state_161328;
var statearr_161330_161359 = state_161328__$1;
(statearr_161330_161359[(2)] = null);

(statearr_161330_161359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (1))){
var state_161328__$1 = state_161328;
var statearr_161331_161360 = state_161328__$1;
(statearr_161331_161360[(2)] = null);

(statearr_161331_161360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (4))){
var inst_161292 = (state_161328[(7)]);
var inst_161294 = (inst_161292 < cnt);
var state_161328__$1 = state_161328;
if(cljs.core.truth_(inst_161294)){
var statearr_161332_161361 = state_161328__$1;
(statearr_161332_161361[(1)] = (6));

} else {
var statearr_161333_161362 = state_161328__$1;
(statearr_161333_161362[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (15))){
var inst_161324 = (state_161328[(2)]);
var state_161328__$1 = state_161328;
var statearr_161334_161363 = state_161328__$1;
(statearr_161334_161363[(2)] = inst_161324);

(statearr_161334_161363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (13))){
var inst_161317 = cljs.core.async.close_BANG_.call(null,out);
var state_161328__$1 = state_161328;
var statearr_161335_161364 = state_161328__$1;
(statearr_161335_161364[(2)] = inst_161317);

(statearr_161335_161364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (6))){
var state_161328__$1 = state_161328;
var statearr_161336_161365 = state_161328__$1;
(statearr_161336_161365[(2)] = null);

(statearr_161336_161365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (3))){
var inst_161326 = (state_161328[(2)]);
var state_161328__$1 = state_161328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161328__$1,inst_161326);
} else {
if((state_val_161329 === (12))){
var inst_161314 = (state_161328[(8)]);
var inst_161314__$1 = (state_161328[(2)]);
var inst_161315 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_161314__$1);
var state_161328__$1 = (function (){var statearr_161337 = state_161328;
(statearr_161337[(8)] = inst_161314__$1);

return statearr_161337;
})();
if(cljs.core.truth_(inst_161315)){
var statearr_161338_161366 = state_161328__$1;
(statearr_161338_161366[(1)] = (13));

} else {
var statearr_161339_161367 = state_161328__$1;
(statearr_161339_161367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (2))){
var inst_161291 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_161292 = (0);
var state_161328__$1 = (function (){var statearr_161340 = state_161328;
(statearr_161340[(7)] = inst_161292);

(statearr_161340[(9)] = inst_161291);

return statearr_161340;
})();
var statearr_161341_161368 = state_161328__$1;
(statearr_161341_161368[(2)] = null);

(statearr_161341_161368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (11))){
var inst_161292 = (state_161328[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_161328,(10),Object,null,(9));
var inst_161301 = chs__$1.call(null,inst_161292);
var inst_161302 = done.call(null,inst_161292);
var inst_161303 = cljs.core.async.take_BANG_.call(null,inst_161301,inst_161302);
var state_161328__$1 = state_161328;
var statearr_161342_161369 = state_161328__$1;
(statearr_161342_161369[(2)] = inst_161303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (9))){
var inst_161292 = (state_161328[(7)]);
var inst_161305 = (state_161328[(2)]);
var inst_161306 = (inst_161292 + (1));
var inst_161292__$1 = inst_161306;
var state_161328__$1 = (function (){var statearr_161343 = state_161328;
(statearr_161343[(10)] = inst_161305);

(statearr_161343[(7)] = inst_161292__$1);

return statearr_161343;
})();
var statearr_161344_161370 = state_161328__$1;
(statearr_161344_161370[(2)] = null);

(statearr_161344_161370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (5))){
var inst_161312 = (state_161328[(2)]);
var state_161328__$1 = (function (){var statearr_161345 = state_161328;
(statearr_161345[(11)] = inst_161312);

return statearr_161345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161328__$1,(12),dchan);
} else {
if((state_val_161329 === (14))){
var inst_161314 = (state_161328[(8)]);
var inst_161319 = cljs.core.apply.call(null,f,inst_161314);
var state_161328__$1 = state_161328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161328__$1,(16),out,inst_161319);
} else {
if((state_val_161329 === (16))){
var inst_161321 = (state_161328[(2)]);
var state_161328__$1 = (function (){var statearr_161346 = state_161328;
(statearr_161346[(12)] = inst_161321);

return statearr_161346;
})();
var statearr_161347_161371 = state_161328__$1;
(statearr_161347_161371[(2)] = null);

(statearr_161347_161371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (10))){
var inst_161296 = (state_161328[(2)]);
var inst_161297 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_161328__$1 = (function (){var statearr_161348 = state_161328;
(statearr_161348[(13)] = inst_161296);

return statearr_161348;
})();
var statearr_161349_161372 = state_161328__$1;
(statearr_161349_161372[(2)] = inst_161297);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161329 === (8))){
var inst_161310 = (state_161328[(2)]);
var state_161328__$1 = state_161328;
var statearr_161350_161373 = state_161328__$1;
(statearr_161350_161373[(2)] = inst_161310);

(statearr_161350_161373[(1)] = (5));


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
});})(c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_161354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_161354[(0)] = state_machine__6988__auto__);

(statearr_161354[(1)] = (1));

return statearr_161354;
});
var state_machine__6988__auto____1 = (function (state_161328){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161355){if((e161355 instanceof Object)){
var ex__6991__auto__ = e161355;
var statearr_161356_161374 = state_161328;
(statearr_161356_161374[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161375 = state_161328;
state_161328 = G__161375;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161328){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_161357 = f__7044__auto__.call(null);
(statearr_161357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___161358);

return statearr_161357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___161358,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___161483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___161483,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___161483,out){
return (function (state_161459){
var state_val_161460 = (state_161459[(1)]);
if((state_val_161460 === (7))){
var inst_161439 = (state_161459[(7)]);
var inst_161438 = (state_161459[(8)]);
var inst_161438__$1 = (state_161459[(2)]);
var inst_161439__$1 = cljs.core.nth.call(null,inst_161438__$1,(0),null);
var inst_161440 = cljs.core.nth.call(null,inst_161438__$1,(1),null);
var inst_161441 = (inst_161439__$1 == null);
var state_161459__$1 = (function (){var statearr_161461 = state_161459;
(statearr_161461[(7)] = inst_161439__$1);

(statearr_161461[(8)] = inst_161438__$1);

(statearr_161461[(9)] = inst_161440);

return statearr_161461;
})();
if(cljs.core.truth_(inst_161441)){
var statearr_161462_161484 = state_161459__$1;
(statearr_161462_161484[(1)] = (8));

} else {
var statearr_161463_161485 = state_161459__$1;
(statearr_161463_161485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (1))){
var inst_161430 = cljs.core.vec.call(null,chs);
var inst_161431 = inst_161430;
var state_161459__$1 = (function (){var statearr_161464 = state_161459;
(statearr_161464[(10)] = inst_161431);

return statearr_161464;
})();
var statearr_161465_161486 = state_161459__$1;
(statearr_161465_161486[(2)] = null);

(statearr_161465_161486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (4))){
var inst_161431 = (state_161459[(10)]);
var state_161459__$1 = state_161459;
return cljs.core.async.ioc_alts_BANG_.call(null,state_161459__$1,(7),inst_161431);
} else {
if((state_val_161460 === (6))){
var inst_161455 = (state_161459[(2)]);
var state_161459__$1 = state_161459;
var statearr_161466_161487 = state_161459__$1;
(statearr_161466_161487[(2)] = inst_161455);

(statearr_161466_161487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (3))){
var inst_161457 = (state_161459[(2)]);
var state_161459__$1 = state_161459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161459__$1,inst_161457);
} else {
if((state_val_161460 === (2))){
var inst_161431 = (state_161459[(10)]);
var inst_161433 = cljs.core.count.call(null,inst_161431);
var inst_161434 = (inst_161433 > (0));
var state_161459__$1 = state_161459;
if(cljs.core.truth_(inst_161434)){
var statearr_161468_161488 = state_161459__$1;
(statearr_161468_161488[(1)] = (4));

} else {
var statearr_161469_161489 = state_161459__$1;
(statearr_161469_161489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (11))){
var inst_161431 = (state_161459[(10)]);
var inst_161448 = (state_161459[(2)]);
var tmp161467 = inst_161431;
var inst_161431__$1 = tmp161467;
var state_161459__$1 = (function (){var statearr_161470 = state_161459;
(statearr_161470[(11)] = inst_161448);

(statearr_161470[(10)] = inst_161431__$1);

return statearr_161470;
})();
var statearr_161471_161490 = state_161459__$1;
(statearr_161471_161490[(2)] = null);

(statearr_161471_161490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (9))){
var inst_161439 = (state_161459[(7)]);
var state_161459__$1 = state_161459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161459__$1,(11),out,inst_161439);
} else {
if((state_val_161460 === (5))){
var inst_161453 = cljs.core.async.close_BANG_.call(null,out);
var state_161459__$1 = state_161459;
var statearr_161472_161491 = state_161459__$1;
(statearr_161472_161491[(2)] = inst_161453);

(statearr_161472_161491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (10))){
var inst_161451 = (state_161459[(2)]);
var state_161459__$1 = state_161459;
var statearr_161473_161492 = state_161459__$1;
(statearr_161473_161492[(2)] = inst_161451);

(statearr_161473_161492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161460 === (8))){
var inst_161439 = (state_161459[(7)]);
var inst_161438 = (state_161459[(8)]);
var inst_161440 = (state_161459[(9)]);
var inst_161431 = (state_161459[(10)]);
var inst_161443 = (function (){var c = inst_161440;
var v = inst_161439;
var vec__161436 = inst_161438;
var cs = inst_161431;
return ((function (c,v,vec__161436,cs,inst_161439,inst_161438,inst_161440,inst_161431,state_val_161460,c__7043__auto___161483,out){
return (function (p1__161376_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__161376_SHARP_);
});
;})(c,v,vec__161436,cs,inst_161439,inst_161438,inst_161440,inst_161431,state_val_161460,c__7043__auto___161483,out))
})();
var inst_161444 = cljs.core.filterv.call(null,inst_161443,inst_161431);
var inst_161431__$1 = inst_161444;
var state_161459__$1 = (function (){var statearr_161474 = state_161459;
(statearr_161474[(10)] = inst_161431__$1);

return statearr_161474;
})();
var statearr_161475_161493 = state_161459__$1;
(statearr_161475_161493[(2)] = null);

(statearr_161475_161493[(1)] = (2));


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
});})(c__7043__auto___161483,out))
;
return ((function (switch__6987__auto__,c__7043__auto___161483,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_161479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_161479[(0)] = state_machine__6988__auto__);

(statearr_161479[(1)] = (1));

return statearr_161479;
});
var state_machine__6988__auto____1 = (function (state_161459){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161480){if((e161480 instanceof Object)){
var ex__6991__auto__ = e161480;
var statearr_161481_161494 = state_161459;
(statearr_161481_161494[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161495 = state_161459;
state_161459 = G__161495;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161459){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___161483,out))
})();
var state__7045__auto__ = (function (){var statearr_161482 = f__7044__auto__.call(null);
(statearr_161482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___161483);

return statearr_161482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___161483,out))
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
var c__7043__auto___161588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___161588,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___161588,out){
return (function (state_161565){
var state_val_161566 = (state_161565[(1)]);
if((state_val_161566 === (7))){
var inst_161547 = (state_161565[(7)]);
var inst_161547__$1 = (state_161565[(2)]);
var inst_161548 = (inst_161547__$1 == null);
var inst_161549 = cljs.core.not.call(null,inst_161548);
var state_161565__$1 = (function (){var statearr_161567 = state_161565;
(statearr_161567[(7)] = inst_161547__$1);

return statearr_161567;
})();
if(inst_161549){
var statearr_161568_161589 = state_161565__$1;
(statearr_161568_161589[(1)] = (8));

} else {
var statearr_161569_161590 = state_161565__$1;
(statearr_161569_161590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (1))){
var inst_161542 = (0);
var state_161565__$1 = (function (){var statearr_161570 = state_161565;
(statearr_161570[(8)] = inst_161542);

return statearr_161570;
})();
var statearr_161571_161591 = state_161565__$1;
(statearr_161571_161591[(2)] = null);

(statearr_161571_161591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (4))){
var state_161565__$1 = state_161565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161565__$1,(7),ch);
} else {
if((state_val_161566 === (6))){
var inst_161560 = (state_161565[(2)]);
var state_161565__$1 = state_161565;
var statearr_161572_161592 = state_161565__$1;
(statearr_161572_161592[(2)] = inst_161560);

(statearr_161572_161592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (3))){
var inst_161562 = (state_161565[(2)]);
var inst_161563 = cljs.core.async.close_BANG_.call(null,out);
var state_161565__$1 = (function (){var statearr_161573 = state_161565;
(statearr_161573[(9)] = inst_161562);

return statearr_161573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161565__$1,inst_161563);
} else {
if((state_val_161566 === (2))){
var inst_161542 = (state_161565[(8)]);
var inst_161544 = (inst_161542 < n);
var state_161565__$1 = state_161565;
if(cljs.core.truth_(inst_161544)){
var statearr_161574_161593 = state_161565__$1;
(statearr_161574_161593[(1)] = (4));

} else {
var statearr_161575_161594 = state_161565__$1;
(statearr_161575_161594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (11))){
var inst_161542 = (state_161565[(8)]);
var inst_161552 = (state_161565[(2)]);
var inst_161553 = (inst_161542 + (1));
var inst_161542__$1 = inst_161553;
var state_161565__$1 = (function (){var statearr_161576 = state_161565;
(statearr_161576[(10)] = inst_161552);

(statearr_161576[(8)] = inst_161542__$1);

return statearr_161576;
})();
var statearr_161577_161595 = state_161565__$1;
(statearr_161577_161595[(2)] = null);

(statearr_161577_161595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (9))){
var state_161565__$1 = state_161565;
var statearr_161578_161596 = state_161565__$1;
(statearr_161578_161596[(2)] = null);

(statearr_161578_161596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (5))){
var state_161565__$1 = state_161565;
var statearr_161579_161597 = state_161565__$1;
(statearr_161579_161597[(2)] = null);

(statearr_161579_161597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (10))){
var inst_161557 = (state_161565[(2)]);
var state_161565__$1 = state_161565;
var statearr_161580_161598 = state_161565__$1;
(statearr_161580_161598[(2)] = inst_161557);

(statearr_161580_161598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161566 === (8))){
var inst_161547 = (state_161565[(7)]);
var state_161565__$1 = state_161565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161565__$1,(11),out,inst_161547);
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
});})(c__7043__auto___161588,out))
;
return ((function (switch__6987__auto__,c__7043__auto___161588,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_161584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_161584[(0)] = state_machine__6988__auto__);

(statearr_161584[(1)] = (1));

return statearr_161584;
});
var state_machine__6988__auto____1 = (function (state_161565){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161585){if((e161585 instanceof Object)){
var ex__6991__auto__ = e161585;
var statearr_161586_161599 = state_161565;
(statearr_161586_161599[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161600 = state_161565;
state_161565 = G__161600;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161565){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___161588,out))
})();
var state__7045__auto__ = (function (){var statearr_161587 = f__7044__auto__.call(null);
(statearr_161587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___161588);

return statearr_161587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___161588,out))
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
if(typeof cljs.core.async.t161608 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t161608 = (function (ch,f,map_LT_,meta161609){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta161609 = meta161609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t161611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t161611 = (function (fn1,_,meta161609,map_LT_,f,ch,meta161612){
this.fn1 = fn1;
this._ = _;
this.meta161609 = meta161609;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta161612 = meta161612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t161611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t161611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t161611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__161601_SHARP_){
return f1.call(null,(((p1__161601_SHARP_ == null))?null:self__.f.call(null,p1__161601_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t161611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_161613){
var self__ = this;
var _161613__$1 = this;
return self__.meta161612;
});})(___$1))
;

cljs.core.async.t161611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_161613,meta161612__$1){
var self__ = this;
var _161613__$1 = this;
return (new cljs.core.async.t161611(self__.fn1,self__._,self__.meta161609,self__.map_LT_,self__.f,self__.ch,meta161612__$1));
});})(___$1))
;

cljs.core.async.t161611.cljs$lang$type = true;

cljs.core.async.t161611.cljs$lang$ctorStr = "cljs.core.async/t161611";

cljs.core.async.t161611.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t161611");
});})(___$1))
;

cljs.core.async.__GT_t161611 = ((function (___$1){
return (function __GT_t161611(fn1__$1,___$2,meta161609__$1,map_LT___$1,f__$1,ch__$1,meta161612){
return (new cljs.core.async.t161611(fn1__$1,___$2,meta161609__$1,map_LT___$1,f__$1,ch__$1,meta161612));
});})(___$1))
;

}

return (new cljs.core.async.t161611(fn1,___$1,self__.meta161609,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t161608.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t161608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161610){
var self__ = this;
var _161610__$1 = this;
return self__.meta161609;
});

cljs.core.async.t161608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161610,meta161609__$1){
var self__ = this;
var _161610__$1 = this;
return (new cljs.core.async.t161608(self__.ch,self__.f,self__.map_LT_,meta161609__$1));
});

cljs.core.async.t161608.cljs$lang$type = true;

cljs.core.async.t161608.cljs$lang$ctorStr = "cljs.core.async/t161608";

cljs.core.async.t161608.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t161608");
});

cljs.core.async.__GT_t161608 = (function __GT_t161608(ch__$1,f__$1,map_LT___$1,meta161609){
return (new cljs.core.async.t161608(ch__$1,f__$1,map_LT___$1,meta161609));
});

}

return (new cljs.core.async.t161608(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t161617 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t161617 = (function (ch,f,map_GT_,meta161618){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta161618 = meta161618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t161617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t161617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161619){
var self__ = this;
var _161619__$1 = this;
return self__.meta161618;
});

cljs.core.async.t161617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161619,meta161618__$1){
var self__ = this;
var _161619__$1 = this;
return (new cljs.core.async.t161617(self__.ch,self__.f,self__.map_GT_,meta161618__$1));
});

cljs.core.async.t161617.cljs$lang$type = true;

cljs.core.async.t161617.cljs$lang$ctorStr = "cljs.core.async/t161617";

cljs.core.async.t161617.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t161617");
});

cljs.core.async.__GT_t161617 = (function __GT_t161617(ch__$1,f__$1,map_GT___$1,meta161618){
return (new cljs.core.async.t161617(ch__$1,f__$1,map_GT___$1,meta161618));
});

}

return (new cljs.core.async.t161617(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t161623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t161623 = (function (ch,p,filter_GT_,meta161624){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta161624 = meta161624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t161623.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t161623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161625){
var self__ = this;
var _161625__$1 = this;
return self__.meta161624;
});

cljs.core.async.t161623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161625,meta161624__$1){
var self__ = this;
var _161625__$1 = this;
return (new cljs.core.async.t161623(self__.ch,self__.p,self__.filter_GT_,meta161624__$1));
});

cljs.core.async.t161623.cljs$lang$type = true;

cljs.core.async.t161623.cljs$lang$ctorStr = "cljs.core.async/t161623";

cljs.core.async.t161623.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t161623");
});

cljs.core.async.__GT_t161623 = (function __GT_t161623(ch__$1,p__$1,filter_GT___$1,meta161624){
return (new cljs.core.async.t161623(ch__$1,p__$1,filter_GT___$1,meta161624));
});

}

return (new cljs.core.async.t161623(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___161708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___161708,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___161708,out){
return (function (state_161687){
var state_val_161688 = (state_161687[(1)]);
if((state_val_161688 === (7))){
var inst_161683 = (state_161687[(2)]);
var state_161687__$1 = state_161687;
var statearr_161689_161709 = state_161687__$1;
(statearr_161689_161709[(2)] = inst_161683);

(statearr_161689_161709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (1))){
var state_161687__$1 = state_161687;
var statearr_161690_161710 = state_161687__$1;
(statearr_161690_161710[(2)] = null);

(statearr_161690_161710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (4))){
var inst_161669 = (state_161687[(7)]);
var inst_161669__$1 = (state_161687[(2)]);
var inst_161670 = (inst_161669__$1 == null);
var state_161687__$1 = (function (){var statearr_161691 = state_161687;
(statearr_161691[(7)] = inst_161669__$1);

return statearr_161691;
})();
if(cljs.core.truth_(inst_161670)){
var statearr_161692_161711 = state_161687__$1;
(statearr_161692_161711[(1)] = (5));

} else {
var statearr_161693_161712 = state_161687__$1;
(statearr_161693_161712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (6))){
var inst_161669 = (state_161687[(7)]);
var inst_161674 = p.call(null,inst_161669);
var state_161687__$1 = state_161687;
if(cljs.core.truth_(inst_161674)){
var statearr_161694_161713 = state_161687__$1;
(statearr_161694_161713[(1)] = (8));

} else {
var statearr_161695_161714 = state_161687__$1;
(statearr_161695_161714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (3))){
var inst_161685 = (state_161687[(2)]);
var state_161687__$1 = state_161687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161687__$1,inst_161685);
} else {
if((state_val_161688 === (2))){
var state_161687__$1 = state_161687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161687__$1,(4),ch);
} else {
if((state_val_161688 === (11))){
var inst_161677 = (state_161687[(2)]);
var state_161687__$1 = state_161687;
var statearr_161696_161715 = state_161687__$1;
(statearr_161696_161715[(2)] = inst_161677);

(statearr_161696_161715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (9))){
var state_161687__$1 = state_161687;
var statearr_161697_161716 = state_161687__$1;
(statearr_161697_161716[(2)] = null);

(statearr_161697_161716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (5))){
var inst_161672 = cljs.core.async.close_BANG_.call(null,out);
var state_161687__$1 = state_161687;
var statearr_161698_161717 = state_161687__$1;
(statearr_161698_161717[(2)] = inst_161672);

(statearr_161698_161717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (10))){
var inst_161680 = (state_161687[(2)]);
var state_161687__$1 = (function (){var statearr_161699 = state_161687;
(statearr_161699[(8)] = inst_161680);

return statearr_161699;
})();
var statearr_161700_161718 = state_161687__$1;
(statearr_161700_161718[(2)] = null);

(statearr_161700_161718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161688 === (8))){
var inst_161669 = (state_161687[(7)]);
var state_161687__$1 = state_161687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161687__$1,(11),out,inst_161669);
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
});})(c__7043__auto___161708,out))
;
return ((function (switch__6987__auto__,c__7043__auto___161708,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_161704 = [null,null,null,null,null,null,null,null,null];
(statearr_161704[(0)] = state_machine__6988__auto__);

(statearr_161704[(1)] = (1));

return statearr_161704;
});
var state_machine__6988__auto____1 = (function (state_161687){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161705){if((e161705 instanceof Object)){
var ex__6991__auto__ = e161705;
var statearr_161706_161719 = state_161687;
(statearr_161706_161719[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161720 = state_161687;
state_161687 = G__161720;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161687){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___161708,out))
})();
var state__7045__auto__ = (function (){var statearr_161707 = f__7044__auto__.call(null);
(statearr_161707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___161708);

return statearr_161707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___161708,out))
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
return (function (state_161886){
var state_val_161887 = (state_161886[(1)]);
if((state_val_161887 === (7))){
var inst_161882 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
var statearr_161888_161929 = state_161886__$1;
(statearr_161888_161929[(2)] = inst_161882);

(statearr_161888_161929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (20))){
var inst_161852 = (state_161886[(7)]);
var inst_161863 = (state_161886[(2)]);
var inst_161864 = cljs.core.next.call(null,inst_161852);
var inst_161838 = inst_161864;
var inst_161839 = null;
var inst_161840 = (0);
var inst_161841 = (0);
var state_161886__$1 = (function (){var statearr_161889 = state_161886;
(statearr_161889[(8)] = inst_161838);

(statearr_161889[(9)] = inst_161840);

(statearr_161889[(10)] = inst_161863);

(statearr_161889[(11)] = inst_161839);

(statearr_161889[(12)] = inst_161841);

return statearr_161889;
})();
var statearr_161890_161930 = state_161886__$1;
(statearr_161890_161930[(2)] = null);

(statearr_161890_161930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (1))){
var state_161886__$1 = state_161886;
var statearr_161891_161931 = state_161886__$1;
(statearr_161891_161931[(2)] = null);

(statearr_161891_161931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (4))){
var inst_161827 = (state_161886[(13)]);
var inst_161827__$1 = (state_161886[(2)]);
var inst_161828 = (inst_161827__$1 == null);
var state_161886__$1 = (function (){var statearr_161892 = state_161886;
(statearr_161892[(13)] = inst_161827__$1);

return statearr_161892;
})();
if(cljs.core.truth_(inst_161828)){
var statearr_161893_161932 = state_161886__$1;
(statearr_161893_161932[(1)] = (5));

} else {
var statearr_161894_161933 = state_161886__$1;
(statearr_161894_161933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (15))){
var state_161886__$1 = state_161886;
var statearr_161898_161934 = state_161886__$1;
(statearr_161898_161934[(2)] = null);

(statearr_161898_161934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (21))){
var state_161886__$1 = state_161886;
var statearr_161899_161935 = state_161886__$1;
(statearr_161899_161935[(2)] = null);

(statearr_161899_161935[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (13))){
var inst_161838 = (state_161886[(8)]);
var inst_161840 = (state_161886[(9)]);
var inst_161839 = (state_161886[(11)]);
var inst_161841 = (state_161886[(12)]);
var inst_161848 = (state_161886[(2)]);
var inst_161849 = (inst_161841 + (1));
var tmp161895 = inst_161838;
var tmp161896 = inst_161840;
var tmp161897 = inst_161839;
var inst_161838__$1 = tmp161895;
var inst_161839__$1 = tmp161897;
var inst_161840__$1 = tmp161896;
var inst_161841__$1 = inst_161849;
var state_161886__$1 = (function (){var statearr_161900 = state_161886;
(statearr_161900[(8)] = inst_161838__$1);

(statearr_161900[(9)] = inst_161840__$1);

(statearr_161900[(11)] = inst_161839__$1);

(statearr_161900[(12)] = inst_161841__$1);

(statearr_161900[(14)] = inst_161848);

return statearr_161900;
})();
var statearr_161901_161936 = state_161886__$1;
(statearr_161901_161936[(2)] = null);

(statearr_161901_161936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (22))){
var state_161886__$1 = state_161886;
var statearr_161902_161937 = state_161886__$1;
(statearr_161902_161937[(2)] = null);

(statearr_161902_161937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (6))){
var inst_161827 = (state_161886[(13)]);
var inst_161836 = f.call(null,inst_161827);
var inst_161837 = cljs.core.seq.call(null,inst_161836);
var inst_161838 = inst_161837;
var inst_161839 = null;
var inst_161840 = (0);
var inst_161841 = (0);
var state_161886__$1 = (function (){var statearr_161903 = state_161886;
(statearr_161903[(8)] = inst_161838);

(statearr_161903[(9)] = inst_161840);

(statearr_161903[(11)] = inst_161839);

(statearr_161903[(12)] = inst_161841);

return statearr_161903;
})();
var statearr_161904_161938 = state_161886__$1;
(statearr_161904_161938[(2)] = null);

(statearr_161904_161938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (17))){
var inst_161852 = (state_161886[(7)]);
var inst_161856 = cljs.core.chunk_first.call(null,inst_161852);
var inst_161857 = cljs.core.chunk_rest.call(null,inst_161852);
var inst_161858 = cljs.core.count.call(null,inst_161856);
var inst_161838 = inst_161857;
var inst_161839 = inst_161856;
var inst_161840 = inst_161858;
var inst_161841 = (0);
var state_161886__$1 = (function (){var statearr_161905 = state_161886;
(statearr_161905[(8)] = inst_161838);

(statearr_161905[(9)] = inst_161840);

(statearr_161905[(11)] = inst_161839);

(statearr_161905[(12)] = inst_161841);

return statearr_161905;
})();
var statearr_161906_161939 = state_161886__$1;
(statearr_161906_161939[(2)] = null);

(statearr_161906_161939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (3))){
var inst_161884 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161886__$1,inst_161884);
} else {
if((state_val_161887 === (12))){
var inst_161872 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
var statearr_161907_161940 = state_161886__$1;
(statearr_161907_161940[(2)] = inst_161872);

(statearr_161907_161940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (2))){
var state_161886__$1 = state_161886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161886__$1,(4),in$);
} else {
if((state_val_161887 === (23))){
var inst_161880 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
var statearr_161908_161941 = state_161886__$1;
(statearr_161908_161941[(2)] = inst_161880);

(statearr_161908_161941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (19))){
var inst_161867 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
var statearr_161909_161942 = state_161886__$1;
(statearr_161909_161942[(2)] = inst_161867);

(statearr_161909_161942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (11))){
var inst_161838 = (state_161886[(8)]);
var inst_161852 = (state_161886[(7)]);
var inst_161852__$1 = cljs.core.seq.call(null,inst_161838);
var state_161886__$1 = (function (){var statearr_161910 = state_161886;
(statearr_161910[(7)] = inst_161852__$1);

return statearr_161910;
})();
if(inst_161852__$1){
var statearr_161911_161943 = state_161886__$1;
(statearr_161911_161943[(1)] = (14));

} else {
var statearr_161912_161944 = state_161886__$1;
(statearr_161912_161944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (9))){
var inst_161874 = (state_161886[(2)]);
var inst_161875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_161886__$1 = (function (){var statearr_161913 = state_161886;
(statearr_161913[(15)] = inst_161874);

return statearr_161913;
})();
if(cljs.core.truth_(inst_161875)){
var statearr_161914_161945 = state_161886__$1;
(statearr_161914_161945[(1)] = (21));

} else {
var statearr_161915_161946 = state_161886__$1;
(statearr_161915_161946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (5))){
var inst_161830 = cljs.core.async.close_BANG_.call(null,out);
var state_161886__$1 = state_161886;
var statearr_161916_161947 = state_161886__$1;
(statearr_161916_161947[(2)] = inst_161830);

(statearr_161916_161947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (14))){
var inst_161852 = (state_161886[(7)]);
var inst_161854 = cljs.core.chunked_seq_QMARK_.call(null,inst_161852);
var state_161886__$1 = state_161886;
if(inst_161854){
var statearr_161917_161948 = state_161886__$1;
(statearr_161917_161948[(1)] = (17));

} else {
var statearr_161918_161949 = state_161886__$1;
(statearr_161918_161949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (16))){
var inst_161870 = (state_161886[(2)]);
var state_161886__$1 = state_161886;
var statearr_161919_161950 = state_161886__$1;
(statearr_161919_161950[(2)] = inst_161870);

(statearr_161919_161950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_161887 === (10))){
var inst_161839 = (state_161886[(11)]);
var inst_161841 = (state_161886[(12)]);
var inst_161846 = cljs.core._nth.call(null,inst_161839,inst_161841);
var state_161886__$1 = state_161886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161886__$1,(13),out,inst_161846);
} else {
if((state_val_161887 === (18))){
var inst_161852 = (state_161886[(7)]);
var inst_161861 = cljs.core.first.call(null,inst_161852);
var state_161886__$1 = state_161886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161886__$1,(20),out,inst_161861);
} else {
if((state_val_161887 === (8))){
var inst_161840 = (state_161886[(9)]);
var inst_161841 = (state_161886[(12)]);
var inst_161843 = (inst_161841 < inst_161840);
var inst_161844 = inst_161843;
var state_161886__$1 = state_161886;
if(cljs.core.truth_(inst_161844)){
var statearr_161920_161951 = state_161886__$1;
(statearr_161920_161951[(1)] = (10));

} else {
var statearr_161921_161952 = state_161886__$1;
(statearr_161921_161952[(1)] = (11));

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
var statearr_161925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_161925[(0)] = state_machine__6988__auto__);

(statearr_161925[(1)] = (1));

return statearr_161925;
});
var state_machine__6988__auto____1 = (function (state_161886){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_161886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e161926){if((e161926 instanceof Object)){
var ex__6991__auto__ = e161926;
var statearr_161927_161953 = state_161886;
(statearr_161927_161953[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e161926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__161954 = state_161886;
state_161886 = G__161954;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_161886){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_161886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_161928 = f__7044__auto__.call(null);
(statearr_161928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_161928;
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
var c__7043__auto___162051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___162051,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___162051,out){
return (function (state_162026){
var state_val_162027 = (state_162026[(1)]);
if((state_val_162027 === (7))){
var inst_162021 = (state_162026[(2)]);
var state_162026__$1 = state_162026;
var statearr_162028_162052 = state_162026__$1;
(statearr_162028_162052[(2)] = inst_162021);

(statearr_162028_162052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (1))){
var inst_162003 = null;
var state_162026__$1 = (function (){var statearr_162029 = state_162026;
(statearr_162029[(7)] = inst_162003);

return statearr_162029;
})();
var statearr_162030_162053 = state_162026__$1;
(statearr_162030_162053[(2)] = null);

(statearr_162030_162053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (4))){
var inst_162006 = (state_162026[(8)]);
var inst_162006__$1 = (state_162026[(2)]);
var inst_162007 = (inst_162006__$1 == null);
var inst_162008 = cljs.core.not.call(null,inst_162007);
var state_162026__$1 = (function (){var statearr_162031 = state_162026;
(statearr_162031[(8)] = inst_162006__$1);

return statearr_162031;
})();
if(inst_162008){
var statearr_162032_162054 = state_162026__$1;
(statearr_162032_162054[(1)] = (5));

} else {
var statearr_162033_162055 = state_162026__$1;
(statearr_162033_162055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (6))){
var state_162026__$1 = state_162026;
var statearr_162034_162056 = state_162026__$1;
(statearr_162034_162056[(2)] = null);

(statearr_162034_162056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (3))){
var inst_162023 = (state_162026[(2)]);
var inst_162024 = cljs.core.async.close_BANG_.call(null,out);
var state_162026__$1 = (function (){var statearr_162035 = state_162026;
(statearr_162035[(9)] = inst_162023);

return statearr_162035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_162026__$1,inst_162024);
} else {
if((state_val_162027 === (2))){
var state_162026__$1 = state_162026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_162026__$1,(4),ch);
} else {
if((state_val_162027 === (11))){
var inst_162006 = (state_162026[(8)]);
var inst_162015 = (state_162026[(2)]);
var inst_162003 = inst_162006;
var state_162026__$1 = (function (){var statearr_162036 = state_162026;
(statearr_162036[(10)] = inst_162015);

(statearr_162036[(7)] = inst_162003);

return statearr_162036;
})();
var statearr_162037_162057 = state_162026__$1;
(statearr_162037_162057[(2)] = null);

(statearr_162037_162057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (9))){
var inst_162006 = (state_162026[(8)]);
var state_162026__$1 = state_162026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_162026__$1,(11),out,inst_162006);
} else {
if((state_val_162027 === (5))){
var inst_162003 = (state_162026[(7)]);
var inst_162006 = (state_162026[(8)]);
var inst_162010 = cljs.core._EQ_.call(null,inst_162006,inst_162003);
var state_162026__$1 = state_162026;
if(inst_162010){
var statearr_162039_162058 = state_162026__$1;
(statearr_162039_162058[(1)] = (8));

} else {
var statearr_162040_162059 = state_162026__$1;
(statearr_162040_162059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (10))){
var inst_162018 = (state_162026[(2)]);
var state_162026__$1 = state_162026;
var statearr_162041_162060 = state_162026__$1;
(statearr_162041_162060[(2)] = inst_162018);

(statearr_162041_162060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162027 === (8))){
var inst_162003 = (state_162026[(7)]);
var tmp162038 = inst_162003;
var inst_162003__$1 = tmp162038;
var state_162026__$1 = (function (){var statearr_162042 = state_162026;
(statearr_162042[(7)] = inst_162003__$1);

return statearr_162042;
})();
var statearr_162043_162061 = state_162026__$1;
(statearr_162043_162061[(2)] = null);

(statearr_162043_162061[(1)] = (2));


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
});})(c__7043__auto___162051,out))
;
return ((function (switch__6987__auto__,c__7043__auto___162051,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_162047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_162047[(0)] = state_machine__6988__auto__);

(statearr_162047[(1)] = (1));

return statearr_162047;
});
var state_machine__6988__auto____1 = (function (state_162026){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_162026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e162048){if((e162048 instanceof Object)){
var ex__6991__auto__ = e162048;
var statearr_162049_162062 = state_162026;
(statearr_162049_162062[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_162026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e162048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__162063 = state_162026;
state_162026 = G__162063;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_162026){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_162026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___162051,out))
})();
var state__7045__auto__ = (function (){var statearr_162050 = f__7044__auto__.call(null);
(statearr_162050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___162051);

return statearr_162050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___162051,out))
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
var c__7043__auto___162198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___162198,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___162198,out){
return (function (state_162168){
var state_val_162169 = (state_162168[(1)]);
if((state_val_162169 === (7))){
var inst_162164 = (state_162168[(2)]);
var state_162168__$1 = state_162168;
var statearr_162170_162199 = state_162168__$1;
(statearr_162170_162199[(2)] = inst_162164);

(statearr_162170_162199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (1))){
var inst_162131 = (new Array(n));
var inst_162132 = inst_162131;
var inst_162133 = (0);
var state_162168__$1 = (function (){var statearr_162171 = state_162168;
(statearr_162171[(7)] = inst_162132);

(statearr_162171[(8)] = inst_162133);

return statearr_162171;
})();
var statearr_162172_162200 = state_162168__$1;
(statearr_162172_162200[(2)] = null);

(statearr_162172_162200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (4))){
var inst_162136 = (state_162168[(9)]);
var inst_162136__$1 = (state_162168[(2)]);
var inst_162137 = (inst_162136__$1 == null);
var inst_162138 = cljs.core.not.call(null,inst_162137);
var state_162168__$1 = (function (){var statearr_162173 = state_162168;
(statearr_162173[(9)] = inst_162136__$1);

return statearr_162173;
})();
if(inst_162138){
var statearr_162174_162201 = state_162168__$1;
(statearr_162174_162201[(1)] = (5));

} else {
var statearr_162175_162202 = state_162168__$1;
(statearr_162175_162202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (15))){
var inst_162158 = (state_162168[(2)]);
var state_162168__$1 = state_162168;
var statearr_162176_162203 = state_162168__$1;
(statearr_162176_162203[(2)] = inst_162158);

(statearr_162176_162203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (13))){
var state_162168__$1 = state_162168;
var statearr_162177_162204 = state_162168__$1;
(statearr_162177_162204[(2)] = null);

(statearr_162177_162204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (6))){
var inst_162133 = (state_162168[(8)]);
var inst_162154 = (inst_162133 > (0));
var state_162168__$1 = state_162168;
if(cljs.core.truth_(inst_162154)){
var statearr_162178_162205 = state_162168__$1;
(statearr_162178_162205[(1)] = (12));

} else {
var statearr_162179_162206 = state_162168__$1;
(statearr_162179_162206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (3))){
var inst_162166 = (state_162168[(2)]);
var state_162168__$1 = state_162168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_162168__$1,inst_162166);
} else {
if((state_val_162169 === (12))){
var inst_162132 = (state_162168[(7)]);
var inst_162156 = cljs.core.vec.call(null,inst_162132);
var state_162168__$1 = state_162168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_162168__$1,(15),out,inst_162156);
} else {
if((state_val_162169 === (2))){
var state_162168__$1 = state_162168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_162168__$1,(4),ch);
} else {
if((state_val_162169 === (11))){
var inst_162148 = (state_162168[(2)]);
var inst_162149 = (new Array(n));
var inst_162132 = inst_162149;
var inst_162133 = (0);
var state_162168__$1 = (function (){var statearr_162180 = state_162168;
(statearr_162180[(7)] = inst_162132);

(statearr_162180[(10)] = inst_162148);

(statearr_162180[(8)] = inst_162133);

return statearr_162180;
})();
var statearr_162181_162207 = state_162168__$1;
(statearr_162181_162207[(2)] = null);

(statearr_162181_162207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (9))){
var inst_162132 = (state_162168[(7)]);
var inst_162146 = cljs.core.vec.call(null,inst_162132);
var state_162168__$1 = state_162168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_162168__$1,(11),out,inst_162146);
} else {
if((state_val_162169 === (5))){
var inst_162132 = (state_162168[(7)]);
var inst_162136 = (state_162168[(9)]);
var inst_162133 = (state_162168[(8)]);
var inst_162141 = (state_162168[(11)]);
var inst_162140 = (inst_162132[inst_162133] = inst_162136);
var inst_162141__$1 = (inst_162133 + (1));
var inst_162142 = (inst_162141__$1 < n);
var state_162168__$1 = (function (){var statearr_162182 = state_162168;
(statearr_162182[(12)] = inst_162140);

(statearr_162182[(11)] = inst_162141__$1);

return statearr_162182;
})();
if(cljs.core.truth_(inst_162142)){
var statearr_162183_162208 = state_162168__$1;
(statearr_162183_162208[(1)] = (8));

} else {
var statearr_162184_162209 = state_162168__$1;
(statearr_162184_162209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (14))){
var inst_162161 = (state_162168[(2)]);
var inst_162162 = cljs.core.async.close_BANG_.call(null,out);
var state_162168__$1 = (function (){var statearr_162186 = state_162168;
(statearr_162186[(13)] = inst_162161);

return statearr_162186;
})();
var statearr_162187_162210 = state_162168__$1;
(statearr_162187_162210[(2)] = inst_162162);

(statearr_162187_162210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (10))){
var inst_162152 = (state_162168[(2)]);
var state_162168__$1 = state_162168;
var statearr_162188_162211 = state_162168__$1;
(statearr_162188_162211[(2)] = inst_162152);

(statearr_162188_162211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162169 === (8))){
var inst_162132 = (state_162168[(7)]);
var inst_162141 = (state_162168[(11)]);
var tmp162185 = inst_162132;
var inst_162132__$1 = tmp162185;
var inst_162133 = inst_162141;
var state_162168__$1 = (function (){var statearr_162189 = state_162168;
(statearr_162189[(7)] = inst_162132__$1);

(statearr_162189[(8)] = inst_162133);

return statearr_162189;
})();
var statearr_162190_162212 = state_162168__$1;
(statearr_162190_162212[(2)] = null);

(statearr_162190_162212[(1)] = (2));


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
});})(c__7043__auto___162198,out))
;
return ((function (switch__6987__auto__,c__7043__auto___162198,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_162194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_162194[(0)] = state_machine__6988__auto__);

(statearr_162194[(1)] = (1));

return statearr_162194;
});
var state_machine__6988__auto____1 = (function (state_162168){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_162168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e162195){if((e162195 instanceof Object)){
var ex__6991__auto__ = e162195;
var statearr_162196_162213 = state_162168;
(statearr_162196_162213[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_162168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e162195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__162214 = state_162168;
state_162168 = G__162214;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_162168){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_162168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___162198,out))
})();
var state__7045__auto__ = (function (){var statearr_162197 = f__7044__auto__.call(null);
(statearr_162197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___162198);

return statearr_162197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___162198,out))
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
var c__7043__auto___162357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___162357,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___162357,out){
return (function (state_162327){
var state_val_162328 = (state_162327[(1)]);
if((state_val_162328 === (7))){
var inst_162323 = (state_162327[(2)]);
var state_162327__$1 = state_162327;
var statearr_162329_162358 = state_162327__$1;
(statearr_162329_162358[(2)] = inst_162323);

(statearr_162329_162358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (1))){
var inst_162286 = [];
var inst_162287 = inst_162286;
var inst_162288 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_162327__$1 = (function (){var statearr_162330 = state_162327;
(statearr_162330[(7)] = inst_162287);

(statearr_162330[(8)] = inst_162288);

return statearr_162330;
})();
var statearr_162331_162359 = state_162327__$1;
(statearr_162331_162359[(2)] = null);

(statearr_162331_162359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (4))){
var inst_162291 = (state_162327[(9)]);
var inst_162291__$1 = (state_162327[(2)]);
var inst_162292 = (inst_162291__$1 == null);
var inst_162293 = cljs.core.not.call(null,inst_162292);
var state_162327__$1 = (function (){var statearr_162332 = state_162327;
(statearr_162332[(9)] = inst_162291__$1);

return statearr_162332;
})();
if(inst_162293){
var statearr_162333_162360 = state_162327__$1;
(statearr_162333_162360[(1)] = (5));

} else {
var statearr_162334_162361 = state_162327__$1;
(statearr_162334_162361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (15))){
var inst_162317 = (state_162327[(2)]);
var state_162327__$1 = state_162327;
var statearr_162335_162362 = state_162327__$1;
(statearr_162335_162362[(2)] = inst_162317);

(statearr_162335_162362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (13))){
var state_162327__$1 = state_162327;
var statearr_162336_162363 = state_162327__$1;
(statearr_162336_162363[(2)] = null);

(statearr_162336_162363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (6))){
var inst_162287 = (state_162327[(7)]);
var inst_162312 = inst_162287.length;
var inst_162313 = (inst_162312 > (0));
var state_162327__$1 = state_162327;
if(cljs.core.truth_(inst_162313)){
var statearr_162337_162364 = state_162327__$1;
(statearr_162337_162364[(1)] = (12));

} else {
var statearr_162338_162365 = state_162327__$1;
(statearr_162338_162365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (3))){
var inst_162325 = (state_162327[(2)]);
var state_162327__$1 = state_162327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_162327__$1,inst_162325);
} else {
if((state_val_162328 === (12))){
var inst_162287 = (state_162327[(7)]);
var inst_162315 = cljs.core.vec.call(null,inst_162287);
var state_162327__$1 = state_162327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_162327__$1,(15),out,inst_162315);
} else {
if((state_val_162328 === (2))){
var state_162327__$1 = state_162327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_162327__$1,(4),ch);
} else {
if((state_val_162328 === (11))){
var inst_162295 = (state_162327[(10)]);
var inst_162291 = (state_162327[(9)]);
var inst_162305 = (state_162327[(2)]);
var inst_162306 = [];
var inst_162307 = inst_162306.push(inst_162291);
var inst_162287 = inst_162306;
var inst_162288 = inst_162295;
var state_162327__$1 = (function (){var statearr_162339 = state_162327;
(statearr_162339[(11)] = inst_162307);

(statearr_162339[(7)] = inst_162287);

(statearr_162339[(8)] = inst_162288);

(statearr_162339[(12)] = inst_162305);

return statearr_162339;
})();
var statearr_162340_162366 = state_162327__$1;
(statearr_162340_162366[(2)] = null);

(statearr_162340_162366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (9))){
var inst_162287 = (state_162327[(7)]);
var inst_162303 = cljs.core.vec.call(null,inst_162287);
var state_162327__$1 = state_162327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_162327__$1,(11),out,inst_162303);
} else {
if((state_val_162328 === (5))){
var inst_162295 = (state_162327[(10)]);
var inst_162291 = (state_162327[(9)]);
var inst_162288 = (state_162327[(8)]);
var inst_162295__$1 = f.call(null,inst_162291);
var inst_162296 = cljs.core._EQ_.call(null,inst_162295__$1,inst_162288);
var inst_162297 = cljs.core.keyword_identical_QMARK_.call(null,inst_162288,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_162298 = (inst_162296) || (inst_162297);
var state_162327__$1 = (function (){var statearr_162341 = state_162327;
(statearr_162341[(10)] = inst_162295__$1);

return statearr_162341;
})();
if(cljs.core.truth_(inst_162298)){
var statearr_162342_162367 = state_162327__$1;
(statearr_162342_162367[(1)] = (8));

} else {
var statearr_162343_162368 = state_162327__$1;
(statearr_162343_162368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (14))){
var inst_162320 = (state_162327[(2)]);
var inst_162321 = cljs.core.async.close_BANG_.call(null,out);
var state_162327__$1 = (function (){var statearr_162345 = state_162327;
(statearr_162345[(13)] = inst_162320);

return statearr_162345;
})();
var statearr_162346_162369 = state_162327__$1;
(statearr_162346_162369[(2)] = inst_162321);

(statearr_162346_162369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (10))){
var inst_162310 = (state_162327[(2)]);
var state_162327__$1 = state_162327;
var statearr_162347_162370 = state_162327__$1;
(statearr_162347_162370[(2)] = inst_162310);

(statearr_162347_162370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162328 === (8))){
var inst_162287 = (state_162327[(7)]);
var inst_162295 = (state_162327[(10)]);
var inst_162291 = (state_162327[(9)]);
var inst_162300 = inst_162287.push(inst_162291);
var tmp162344 = inst_162287;
var inst_162287__$1 = tmp162344;
var inst_162288 = inst_162295;
var state_162327__$1 = (function (){var statearr_162348 = state_162327;
(statearr_162348[(7)] = inst_162287__$1);

(statearr_162348[(14)] = inst_162300);

(statearr_162348[(8)] = inst_162288);

return statearr_162348;
})();
var statearr_162349_162371 = state_162327__$1;
(statearr_162349_162371[(2)] = null);

(statearr_162349_162371[(1)] = (2));


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
});})(c__7043__auto___162357,out))
;
return ((function (switch__6987__auto__,c__7043__auto___162357,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_162353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_162353[(0)] = state_machine__6988__auto__);

(statearr_162353[(1)] = (1));

return statearr_162353;
});
var state_machine__6988__auto____1 = (function (state_162327){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_162327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e162354){if((e162354 instanceof Object)){
var ex__6991__auto__ = e162354;
var statearr_162355_162372 = state_162327;
(statearr_162355_162372[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_162327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e162354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__162373 = state_162327;
state_162327 = G__162373;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_162327){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_162327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___162357,out))
})();
var state__7045__auto__ = (function (){var statearr_162356 = f__7044__auto__.call(null);
(statearr_162356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___162357);

return statearr_162356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___162357,out))
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