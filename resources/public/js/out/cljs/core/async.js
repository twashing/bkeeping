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
if(typeof cljs.core.async.t68437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68437 = (function (f,fn_handler,meta68438){
this.f = f;
this.fn_handler = fn_handler;
this.meta68438 = meta68438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t68437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t68437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t68437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68439){
var self__ = this;
var _68439__$1 = this;
return self__.meta68438;
});

cljs.core.async.t68437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68439,meta68438__$1){
var self__ = this;
var _68439__$1 = this;
return (new cljs.core.async.t68437(self__.f,self__.fn_handler,meta68438__$1));
});

cljs.core.async.t68437.cljs$lang$type = true;

cljs.core.async.t68437.cljs$lang$ctorStr = "cljs.core.async/t68437";

cljs.core.async.t68437.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t68437");
});

cljs.core.async.__GT_t68437 = (function __GT_t68437(f__$1,fn_handler__$1,meta68438){
return (new cljs.core.async.t68437(f__$1,fn_handler__$1,meta68438));
});

}

return (new cljs.core.async.t68437(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__68441 = buff;
if(G__68441){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__68441.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__68441.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__68441);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__68441);
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
var val_68442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68442,ret){
return (function (){
return fn1.call(null,val_68442);
});})(val_68442,ret))
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
var n__4509__auto___68443 = n;
var x_68444 = (0);
while(true){
if((x_68444 < n__4509__auto___68443)){
(a[x_68444] = (0));

var G__68445 = (x_68444 + (1));
x_68444 = G__68445;
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

var G__68446 = (i + (1));
i = G__68446;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t68450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68450 = (function (flag,alt_flag,meta68451){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta68451 = meta68451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68450.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t68450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t68450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t68450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68452){
var self__ = this;
var _68452__$1 = this;
return self__.meta68451;
});})(flag))
;

cljs.core.async.t68450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68452,meta68451__$1){
var self__ = this;
var _68452__$1 = this;
return (new cljs.core.async.t68450(self__.flag,self__.alt_flag,meta68451__$1));
});})(flag))
;

cljs.core.async.t68450.cljs$lang$type = true;

cljs.core.async.t68450.cljs$lang$ctorStr = "cljs.core.async/t68450";

cljs.core.async.t68450.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t68450");
});})(flag))
;

cljs.core.async.__GT_t68450 = ((function (flag){
return (function __GT_t68450(flag__$1,alt_flag__$1,meta68451){
return (new cljs.core.async.t68450(flag__$1,alt_flag__$1,meta68451));
});})(flag))
;

}

return (new cljs.core.async.t68450(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t68456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68456 = (function (cb,flag,alt_handler,meta68457){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta68457 = meta68457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68456.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t68456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t68456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t68456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68458){
var self__ = this;
var _68458__$1 = this;
return self__.meta68457;
});

cljs.core.async.t68456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68458,meta68457__$1){
var self__ = this;
var _68458__$1 = this;
return (new cljs.core.async.t68456(self__.cb,self__.flag,self__.alt_handler,meta68457__$1));
});

cljs.core.async.t68456.cljs$lang$type = true;

cljs.core.async.t68456.cljs$lang$ctorStr = "cljs.core.async/t68456";

cljs.core.async.t68456.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t68456");
});

cljs.core.async.__GT_t68456 = (function __GT_t68456(cb__$1,flag__$1,alt_handler__$1,meta68457){
return (new cljs.core.async.t68456(cb__$1,flag__$1,alt_handler__$1,meta68457));
});

}

return (new cljs.core.async.t68456(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__68459_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68459_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68460_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68460_SHARP_,port], null));
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
var G__68461 = (i + (1));
i = G__68461;
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
var alts_BANG___delegate = function (ports,p__68462){
var map__68464 = p__68462;
var map__68464__$1 = ((cljs.core.seq_QMARK_.call(null,map__68464))?cljs.core.apply.call(null,cljs.core.hash_map,map__68464):map__68464);
var opts = map__68464__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__68462 = null;
if (arguments.length > 1) {
  p__68462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__68462);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__68465){
var ports = cljs.core.first(arglist__68465);
var p__68462 = cljs.core.rest(arglist__68465);
return alts_BANG___delegate(ports,p__68462);
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
var c__7043__auto___68560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___68560){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___68560){
return (function (state_68536){
var state_val_68537 = (state_68536[(1)]);
if((state_val_68537 === (7))){
var inst_68532 = (state_68536[(2)]);
var state_68536__$1 = state_68536;
var statearr_68538_68561 = state_68536__$1;
(statearr_68538_68561[(2)] = inst_68532);

(statearr_68538_68561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (1))){
var state_68536__$1 = state_68536;
var statearr_68539_68562 = state_68536__$1;
(statearr_68539_68562[(2)] = null);

(statearr_68539_68562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (4))){
var inst_68515 = (state_68536[(7)]);
var inst_68515__$1 = (state_68536[(2)]);
var inst_68516 = (inst_68515__$1 == null);
var state_68536__$1 = (function (){var statearr_68540 = state_68536;
(statearr_68540[(7)] = inst_68515__$1);

return statearr_68540;
})();
if(cljs.core.truth_(inst_68516)){
var statearr_68541_68563 = state_68536__$1;
(statearr_68541_68563[(1)] = (5));

} else {
var statearr_68542_68564 = state_68536__$1;
(statearr_68542_68564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (13))){
var state_68536__$1 = state_68536;
var statearr_68543_68565 = state_68536__$1;
(statearr_68543_68565[(2)] = null);

(statearr_68543_68565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (6))){
var inst_68515 = (state_68536[(7)]);
var state_68536__$1 = state_68536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68536__$1,(11),to,inst_68515);
} else {
if((state_val_68537 === (3))){
var inst_68534 = (state_68536[(2)]);
var state_68536__$1 = state_68536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68536__$1,inst_68534);
} else {
if((state_val_68537 === (12))){
var state_68536__$1 = state_68536;
var statearr_68544_68566 = state_68536__$1;
(statearr_68544_68566[(2)] = null);

(statearr_68544_68566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (2))){
var state_68536__$1 = state_68536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68536__$1,(4),from);
} else {
if((state_val_68537 === (11))){
var inst_68525 = (state_68536[(2)]);
var state_68536__$1 = state_68536;
if(cljs.core.truth_(inst_68525)){
var statearr_68545_68567 = state_68536__$1;
(statearr_68545_68567[(1)] = (12));

} else {
var statearr_68546_68568 = state_68536__$1;
(statearr_68546_68568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (9))){
var state_68536__$1 = state_68536;
var statearr_68547_68569 = state_68536__$1;
(statearr_68547_68569[(2)] = null);

(statearr_68547_68569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (5))){
var state_68536__$1 = state_68536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68548_68570 = state_68536__$1;
(statearr_68548_68570[(1)] = (8));

} else {
var statearr_68549_68571 = state_68536__$1;
(statearr_68549_68571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (14))){
var inst_68530 = (state_68536[(2)]);
var state_68536__$1 = state_68536;
var statearr_68550_68572 = state_68536__$1;
(statearr_68550_68572[(2)] = inst_68530);

(statearr_68550_68572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (10))){
var inst_68522 = (state_68536[(2)]);
var state_68536__$1 = state_68536;
var statearr_68551_68573 = state_68536__$1;
(statearr_68551_68573[(2)] = inst_68522);

(statearr_68551_68573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68537 === (8))){
var inst_68519 = cljs.core.async.close_BANG_.call(null,to);
var state_68536__$1 = state_68536;
var statearr_68552_68574 = state_68536__$1;
(statearr_68552_68574[(2)] = inst_68519);

(statearr_68552_68574[(1)] = (10));


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
});})(c__7043__auto___68560))
;
return ((function (switch__6987__auto__,c__7043__auto___68560){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_68556 = [null,null,null,null,null,null,null,null];
(statearr_68556[(0)] = state_machine__6988__auto__);

(statearr_68556[(1)] = (1));

return statearr_68556;
});
var state_machine__6988__auto____1 = (function (state_68536){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68557){if((e68557 instanceof Object)){
var ex__6991__auto__ = e68557;
var statearr_68558_68575 = state_68536;
(statearr_68558_68575[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68576 = state_68536;
state_68536 = G__68576;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68536){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___68560))
})();
var state__7045__auto__ = (function (){var statearr_68559 = f__7044__auto__.call(null);
(statearr_68559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___68560);

return statearr_68559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___68560))
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
return (function (p__68760){
var vec__68761 = p__68760;
var v = cljs.core.nth.call(null,vec__68761,(0),null);
var p = cljs.core.nth.call(null,vec__68761,(1),null);
var job = vec__68761;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___68943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results){
return (function (state_68766){
var state_val_68767 = (state_68766[(1)]);
if((state_val_68767 === (2))){
var inst_68763 = (state_68766[(2)]);
var inst_68764 = cljs.core.async.close_BANG_.call(null,res);
var state_68766__$1 = (function (){var statearr_68768 = state_68766;
(statearr_68768[(7)] = inst_68763);

return statearr_68768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68766__$1,inst_68764);
} else {
if((state_val_68767 === (1))){
var state_68766__$1 = state_68766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68766__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_68772 = [null,null,null,null,null,null,null,null];
(statearr_68772[(0)] = state_machine__6988__auto__);

(statearr_68772[(1)] = (1));

return statearr_68772;
});
var state_machine__6988__auto____1 = (function (state_68766){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68773){if((e68773 instanceof Object)){
var ex__6991__auto__ = e68773;
var statearr_68774_68944 = state_68766;
(statearr_68774_68944[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68945 = state_68766;
state_68766 = G__68945;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68766){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_68775 = f__7044__auto__.call(null);
(statearr_68775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___68943);

return statearr_68775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___68943,res,vec__68761,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68776){
var vec__68777 = p__68776;
var v = cljs.core.nth.call(null,vec__68777,(0),null);
var p = cljs.core.nth.call(null,vec__68777,(1),null);
var job = vec__68777;
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
var n__4509__auto___68946 = n;
var __68947 = (0);
while(true){
if((__68947 < n__4509__auto___68946)){
var G__68778_68948 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__68778_68948) {
case "async":
var c__7043__auto___68950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68947,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__68947,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function (state_68791){
var state_val_68792 = (state_68791[(1)]);
if((state_val_68792 === (7))){
var inst_68787 = (state_68791[(2)]);
var state_68791__$1 = state_68791;
var statearr_68793_68951 = state_68791__$1;
(statearr_68793_68951[(2)] = inst_68787);

(statearr_68793_68951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68792 === (6))){
var state_68791__$1 = state_68791;
var statearr_68794_68952 = state_68791__$1;
(statearr_68794_68952[(2)] = null);

(statearr_68794_68952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68792 === (5))){
var state_68791__$1 = state_68791;
var statearr_68795_68953 = state_68791__$1;
(statearr_68795_68953[(2)] = null);

(statearr_68795_68953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68792 === (4))){
var inst_68781 = (state_68791[(2)]);
var inst_68782 = async.call(null,inst_68781);
var state_68791__$1 = state_68791;
if(cljs.core.truth_(inst_68782)){
var statearr_68796_68954 = state_68791__$1;
(statearr_68796_68954[(1)] = (5));

} else {
var statearr_68797_68955 = state_68791__$1;
(statearr_68797_68955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68792 === (3))){
var inst_68789 = (state_68791[(2)]);
var state_68791__$1 = state_68791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68791__$1,inst_68789);
} else {
if((state_val_68792 === (2))){
var state_68791__$1 = state_68791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68791__$1,(4),jobs);
} else {
if((state_val_68792 === (1))){
var state_68791__$1 = state_68791;
var statearr_68798_68956 = state_68791__$1;
(statearr_68798_68956[(2)] = null);

(statearr_68798_68956[(1)] = (2));


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
});})(__68947,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
;
return ((function (__68947,switch__6987__auto__,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_68802 = [null,null,null,null,null,null,null];
(statearr_68802[(0)] = state_machine__6988__auto__);

(statearr_68802[(1)] = (1));

return statearr_68802;
});
var state_machine__6988__auto____1 = (function (state_68791){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68803){if((e68803 instanceof Object)){
var ex__6991__auto__ = e68803;
var statearr_68804_68957 = state_68791;
(statearr_68804_68957[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68958 = state_68791;
state_68791 = G__68958;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68791){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__68947,switch__6987__auto__,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_68805 = f__7044__auto__.call(null);
(statearr_68805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___68950);

return statearr_68805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__68947,c__7043__auto___68950,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___68959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68947,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__68947,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function (state_68818){
var state_val_68819 = (state_68818[(1)]);
if((state_val_68819 === (7))){
var inst_68814 = (state_68818[(2)]);
var state_68818__$1 = state_68818;
var statearr_68820_68960 = state_68818__$1;
(statearr_68820_68960[(2)] = inst_68814);

(statearr_68820_68960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68819 === (6))){
var state_68818__$1 = state_68818;
var statearr_68821_68961 = state_68818__$1;
(statearr_68821_68961[(2)] = null);

(statearr_68821_68961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68819 === (5))){
var state_68818__$1 = state_68818;
var statearr_68822_68962 = state_68818__$1;
(statearr_68822_68962[(2)] = null);

(statearr_68822_68962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68819 === (4))){
var inst_68808 = (state_68818[(2)]);
var inst_68809 = process.call(null,inst_68808);
var state_68818__$1 = state_68818;
if(cljs.core.truth_(inst_68809)){
var statearr_68823_68963 = state_68818__$1;
(statearr_68823_68963[(1)] = (5));

} else {
var statearr_68824_68964 = state_68818__$1;
(statearr_68824_68964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68819 === (3))){
var inst_68816 = (state_68818[(2)]);
var state_68818__$1 = state_68818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68818__$1,inst_68816);
} else {
if((state_val_68819 === (2))){
var state_68818__$1 = state_68818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68818__$1,(4),jobs);
} else {
if((state_val_68819 === (1))){
var state_68818__$1 = state_68818;
var statearr_68825_68965 = state_68818__$1;
(statearr_68825_68965[(2)] = null);

(statearr_68825_68965[(1)] = (2));


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
});})(__68947,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
;
return ((function (__68947,switch__6987__auto__,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_68829 = [null,null,null,null,null,null,null];
(statearr_68829[(0)] = state_machine__6988__auto__);

(statearr_68829[(1)] = (1));

return statearr_68829;
});
var state_machine__6988__auto____1 = (function (state_68818){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68830){if((e68830 instanceof Object)){
var ex__6991__auto__ = e68830;
var statearr_68831_68966 = state_68818;
(statearr_68831_68966[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68967 = state_68818;
state_68818 = G__68967;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68818){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__68947,switch__6987__auto__,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_68832 = f__7044__auto__.call(null);
(statearr_68832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___68959);

return statearr_68832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__68947,c__7043__auto___68959,G__68778_68948,n__4509__auto___68946,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__68968 = (__68947 + (1));
__68947 = G__68968;
continue;
} else {
}
break;
}

var c__7043__auto___68969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___68969,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___68969,jobs,results,process,async){
return (function (state_68854){
var state_val_68855 = (state_68854[(1)]);
if((state_val_68855 === (9))){
var inst_68847 = (state_68854[(2)]);
var state_68854__$1 = (function (){var statearr_68856 = state_68854;
(statearr_68856[(7)] = inst_68847);

return statearr_68856;
})();
var statearr_68857_68970 = state_68854__$1;
(statearr_68857_68970[(2)] = null);

(statearr_68857_68970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68855 === (8))){
var inst_68840 = (state_68854[(8)]);
var inst_68845 = (state_68854[(2)]);
var state_68854__$1 = (function (){var statearr_68858 = state_68854;
(statearr_68858[(9)] = inst_68845);

return statearr_68858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68854__$1,(9),results,inst_68840);
} else {
if((state_val_68855 === (7))){
var inst_68850 = (state_68854[(2)]);
var state_68854__$1 = state_68854;
var statearr_68859_68971 = state_68854__$1;
(statearr_68859_68971[(2)] = inst_68850);

(statearr_68859_68971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68855 === (6))){
var inst_68835 = (state_68854[(10)]);
var inst_68840 = (state_68854[(8)]);
var inst_68840__$1 = cljs.core.async.chan.call(null,(1));
var inst_68841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68842 = [inst_68835,inst_68840__$1];
var inst_68843 = (new cljs.core.PersistentVector(null,2,(5),inst_68841,inst_68842,null));
var state_68854__$1 = (function (){var statearr_68860 = state_68854;
(statearr_68860[(8)] = inst_68840__$1);

return statearr_68860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68854__$1,(8),jobs,inst_68843);
} else {
if((state_val_68855 === (5))){
var inst_68838 = cljs.core.async.close_BANG_.call(null,jobs);
var state_68854__$1 = state_68854;
var statearr_68861_68972 = state_68854__$1;
(statearr_68861_68972[(2)] = inst_68838);

(statearr_68861_68972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68855 === (4))){
var inst_68835 = (state_68854[(10)]);
var inst_68835__$1 = (state_68854[(2)]);
var inst_68836 = (inst_68835__$1 == null);
var state_68854__$1 = (function (){var statearr_68862 = state_68854;
(statearr_68862[(10)] = inst_68835__$1);

return statearr_68862;
})();
if(cljs.core.truth_(inst_68836)){
var statearr_68863_68973 = state_68854__$1;
(statearr_68863_68973[(1)] = (5));

} else {
var statearr_68864_68974 = state_68854__$1;
(statearr_68864_68974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68855 === (3))){
var inst_68852 = (state_68854[(2)]);
var state_68854__$1 = state_68854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68854__$1,inst_68852);
} else {
if((state_val_68855 === (2))){
var state_68854__$1 = state_68854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68854__$1,(4),from);
} else {
if((state_val_68855 === (1))){
var state_68854__$1 = state_68854;
var statearr_68865_68975 = state_68854__$1;
(statearr_68865_68975[(2)] = null);

(statearr_68865_68975[(1)] = (2));


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
});})(c__7043__auto___68969,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___68969,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_68869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68869[(0)] = state_machine__6988__auto__);

(statearr_68869[(1)] = (1));

return statearr_68869;
});
var state_machine__6988__auto____1 = (function (state_68854){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68870){if((e68870 instanceof Object)){
var ex__6991__auto__ = e68870;
var statearr_68871_68976 = state_68854;
(statearr_68871_68976[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68977 = state_68854;
state_68854 = G__68977;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68854){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___68969,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_68872 = f__7044__auto__.call(null);
(statearr_68872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___68969);

return statearr_68872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___68969,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_68910){
var state_val_68911 = (state_68910[(1)]);
if((state_val_68911 === (7))){
var inst_68906 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
var statearr_68912_68978 = state_68910__$1;
(statearr_68912_68978[(2)] = inst_68906);

(statearr_68912_68978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (20))){
var state_68910__$1 = state_68910;
var statearr_68913_68979 = state_68910__$1;
(statearr_68913_68979[(2)] = null);

(statearr_68913_68979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (1))){
var state_68910__$1 = state_68910;
var statearr_68914_68980 = state_68910__$1;
(statearr_68914_68980[(2)] = null);

(statearr_68914_68980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (4))){
var inst_68875 = (state_68910[(7)]);
var inst_68875__$1 = (state_68910[(2)]);
var inst_68876 = (inst_68875__$1 == null);
var state_68910__$1 = (function (){var statearr_68915 = state_68910;
(statearr_68915[(7)] = inst_68875__$1);

return statearr_68915;
})();
if(cljs.core.truth_(inst_68876)){
var statearr_68916_68981 = state_68910__$1;
(statearr_68916_68981[(1)] = (5));

} else {
var statearr_68917_68982 = state_68910__$1;
(statearr_68917_68982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (15))){
var inst_68888 = (state_68910[(8)]);
var state_68910__$1 = state_68910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68910__$1,(18),to,inst_68888);
} else {
if((state_val_68911 === (21))){
var inst_68901 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
var statearr_68918_68983 = state_68910__$1;
(statearr_68918_68983[(2)] = inst_68901);

(statearr_68918_68983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (13))){
var inst_68903 = (state_68910[(2)]);
var state_68910__$1 = (function (){var statearr_68919 = state_68910;
(statearr_68919[(9)] = inst_68903);

return statearr_68919;
})();
var statearr_68920_68984 = state_68910__$1;
(statearr_68920_68984[(2)] = null);

(statearr_68920_68984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (6))){
var inst_68875 = (state_68910[(7)]);
var state_68910__$1 = state_68910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68910__$1,(11),inst_68875);
} else {
if((state_val_68911 === (17))){
var inst_68896 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
if(cljs.core.truth_(inst_68896)){
var statearr_68921_68985 = state_68910__$1;
(statearr_68921_68985[(1)] = (19));

} else {
var statearr_68922_68986 = state_68910__$1;
(statearr_68922_68986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (3))){
var inst_68908 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68910__$1,inst_68908);
} else {
if((state_val_68911 === (12))){
var inst_68885 = (state_68910[(10)]);
var state_68910__$1 = state_68910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68910__$1,(14),inst_68885);
} else {
if((state_val_68911 === (2))){
var state_68910__$1 = state_68910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68910__$1,(4),results);
} else {
if((state_val_68911 === (19))){
var state_68910__$1 = state_68910;
var statearr_68923_68987 = state_68910__$1;
(statearr_68923_68987[(2)] = null);

(statearr_68923_68987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (11))){
var inst_68885 = (state_68910[(2)]);
var state_68910__$1 = (function (){var statearr_68924 = state_68910;
(statearr_68924[(10)] = inst_68885);

return statearr_68924;
})();
var statearr_68925_68988 = state_68910__$1;
(statearr_68925_68988[(2)] = null);

(statearr_68925_68988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (9))){
var state_68910__$1 = state_68910;
var statearr_68926_68989 = state_68910__$1;
(statearr_68926_68989[(2)] = null);

(statearr_68926_68989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (5))){
var state_68910__$1 = state_68910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68927_68990 = state_68910__$1;
(statearr_68927_68990[(1)] = (8));

} else {
var statearr_68928_68991 = state_68910__$1;
(statearr_68928_68991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (14))){
var inst_68890 = (state_68910[(11)]);
var inst_68888 = (state_68910[(8)]);
var inst_68888__$1 = (state_68910[(2)]);
var inst_68889 = (inst_68888__$1 == null);
var inst_68890__$1 = cljs.core.not.call(null,inst_68889);
var state_68910__$1 = (function (){var statearr_68929 = state_68910;
(statearr_68929[(11)] = inst_68890__$1);

(statearr_68929[(8)] = inst_68888__$1);

return statearr_68929;
})();
if(inst_68890__$1){
var statearr_68930_68992 = state_68910__$1;
(statearr_68930_68992[(1)] = (15));

} else {
var statearr_68931_68993 = state_68910__$1;
(statearr_68931_68993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (16))){
var inst_68890 = (state_68910[(11)]);
var state_68910__$1 = state_68910;
var statearr_68932_68994 = state_68910__$1;
(statearr_68932_68994[(2)] = inst_68890);

(statearr_68932_68994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (10))){
var inst_68882 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
var statearr_68933_68995 = state_68910__$1;
(statearr_68933_68995[(2)] = inst_68882);

(statearr_68933_68995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (18))){
var inst_68893 = (state_68910[(2)]);
var state_68910__$1 = state_68910;
var statearr_68934_68996 = state_68910__$1;
(statearr_68934_68996[(2)] = inst_68893);

(statearr_68934_68996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68911 === (8))){
var inst_68879 = cljs.core.async.close_BANG_.call(null,to);
var state_68910__$1 = state_68910;
var statearr_68935_68997 = state_68910__$1;
(statearr_68935_68997[(2)] = inst_68879);

(statearr_68935_68997[(1)] = (10));


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
var statearr_68939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68939[(0)] = state_machine__6988__auto__);

(statearr_68939[(1)] = (1));

return statearr_68939;
});
var state_machine__6988__auto____1 = (function (state_68910){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_68910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e68940){if((e68940 instanceof Object)){
var ex__6991__auto__ = e68940;
var statearr_68941_68998 = state_68910;
(statearr_68941_68998[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68999 = state_68910;
state_68910 = G__68999;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_68910){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_68910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_68942 = f__7044__auto__.call(null);
(statearr_68942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_68942;
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
var c__7043__auto___69100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___69100,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___69100,tc,fc){
return (function (state_69075){
var state_val_69076 = (state_69075[(1)]);
if((state_val_69076 === (7))){
var inst_69071 = (state_69075[(2)]);
var state_69075__$1 = state_69075;
var statearr_69077_69101 = state_69075__$1;
(statearr_69077_69101[(2)] = inst_69071);

(statearr_69077_69101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (1))){
var state_69075__$1 = state_69075;
var statearr_69078_69102 = state_69075__$1;
(statearr_69078_69102[(2)] = null);

(statearr_69078_69102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (4))){
var inst_69052 = (state_69075[(7)]);
var inst_69052__$1 = (state_69075[(2)]);
var inst_69053 = (inst_69052__$1 == null);
var state_69075__$1 = (function (){var statearr_69079 = state_69075;
(statearr_69079[(7)] = inst_69052__$1);

return statearr_69079;
})();
if(cljs.core.truth_(inst_69053)){
var statearr_69080_69103 = state_69075__$1;
(statearr_69080_69103[(1)] = (5));

} else {
var statearr_69081_69104 = state_69075__$1;
(statearr_69081_69104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (13))){
var state_69075__$1 = state_69075;
var statearr_69082_69105 = state_69075__$1;
(statearr_69082_69105[(2)] = null);

(statearr_69082_69105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (6))){
var inst_69052 = (state_69075[(7)]);
var inst_69058 = p.call(null,inst_69052);
var state_69075__$1 = state_69075;
if(cljs.core.truth_(inst_69058)){
var statearr_69083_69106 = state_69075__$1;
(statearr_69083_69106[(1)] = (9));

} else {
var statearr_69084_69107 = state_69075__$1;
(statearr_69084_69107[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (3))){
var inst_69073 = (state_69075[(2)]);
var state_69075__$1 = state_69075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69075__$1,inst_69073);
} else {
if((state_val_69076 === (12))){
var state_69075__$1 = state_69075;
var statearr_69085_69108 = state_69075__$1;
(statearr_69085_69108[(2)] = null);

(statearr_69085_69108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (2))){
var state_69075__$1 = state_69075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69075__$1,(4),ch);
} else {
if((state_val_69076 === (11))){
var inst_69052 = (state_69075[(7)]);
var inst_69062 = (state_69075[(2)]);
var state_69075__$1 = state_69075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69075__$1,(8),inst_69062,inst_69052);
} else {
if((state_val_69076 === (9))){
var state_69075__$1 = state_69075;
var statearr_69086_69109 = state_69075__$1;
(statearr_69086_69109[(2)] = tc);

(statearr_69086_69109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (5))){
var inst_69055 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69056 = cljs.core.async.close_BANG_.call(null,fc);
var state_69075__$1 = (function (){var statearr_69087 = state_69075;
(statearr_69087[(8)] = inst_69055);

return statearr_69087;
})();
var statearr_69088_69110 = state_69075__$1;
(statearr_69088_69110[(2)] = inst_69056);

(statearr_69088_69110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (14))){
var inst_69069 = (state_69075[(2)]);
var state_69075__$1 = state_69075;
var statearr_69089_69111 = state_69075__$1;
(statearr_69089_69111[(2)] = inst_69069);

(statearr_69089_69111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (10))){
var state_69075__$1 = state_69075;
var statearr_69090_69112 = state_69075__$1;
(statearr_69090_69112[(2)] = fc);

(statearr_69090_69112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69076 === (8))){
var inst_69064 = (state_69075[(2)]);
var state_69075__$1 = state_69075;
if(cljs.core.truth_(inst_69064)){
var statearr_69091_69113 = state_69075__$1;
(statearr_69091_69113[(1)] = (12));

} else {
var statearr_69092_69114 = state_69075__$1;
(statearr_69092_69114[(1)] = (13));

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
});})(c__7043__auto___69100,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___69100,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_69096 = [null,null,null,null,null,null,null,null,null];
(statearr_69096[(0)] = state_machine__6988__auto__);

(statearr_69096[(1)] = (1));

return statearr_69096;
});
var state_machine__6988__auto____1 = (function (state_69075){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_69075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e69097){if((e69097 instanceof Object)){
var ex__6991__auto__ = e69097;
var statearr_69098_69115 = state_69075;
(statearr_69098_69115[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69116 = state_69075;
state_69075 = G__69116;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_69075){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_69075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___69100,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_69099 = f__7044__auto__.call(null);
(statearr_69099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___69100);

return statearr_69099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___69100,tc,fc))
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
return (function (state_69163){
var state_val_69164 = (state_69163[(1)]);
if((state_val_69164 === (7))){
var inst_69159 = (state_69163[(2)]);
var state_69163__$1 = state_69163;
var statearr_69165_69181 = state_69163__$1;
(statearr_69165_69181[(2)] = inst_69159);

(statearr_69165_69181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69164 === (6))){
var inst_69149 = (state_69163[(7)]);
var inst_69152 = (state_69163[(8)]);
var inst_69156 = f.call(null,inst_69149,inst_69152);
var inst_69149__$1 = inst_69156;
var state_69163__$1 = (function (){var statearr_69166 = state_69163;
(statearr_69166[(7)] = inst_69149__$1);

return statearr_69166;
})();
var statearr_69167_69182 = state_69163__$1;
(statearr_69167_69182[(2)] = null);

(statearr_69167_69182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69164 === (5))){
var inst_69149 = (state_69163[(7)]);
var state_69163__$1 = state_69163;
var statearr_69168_69183 = state_69163__$1;
(statearr_69168_69183[(2)] = inst_69149);

(statearr_69168_69183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69164 === (4))){
var inst_69152 = (state_69163[(8)]);
var inst_69152__$1 = (state_69163[(2)]);
var inst_69153 = (inst_69152__$1 == null);
var state_69163__$1 = (function (){var statearr_69169 = state_69163;
(statearr_69169[(8)] = inst_69152__$1);

return statearr_69169;
})();
if(cljs.core.truth_(inst_69153)){
var statearr_69170_69184 = state_69163__$1;
(statearr_69170_69184[(1)] = (5));

} else {
var statearr_69171_69185 = state_69163__$1;
(statearr_69171_69185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69164 === (3))){
var inst_69161 = (state_69163[(2)]);
var state_69163__$1 = state_69163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69163__$1,inst_69161);
} else {
if((state_val_69164 === (2))){
var state_69163__$1 = state_69163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69163__$1,(4),ch);
} else {
if((state_val_69164 === (1))){
var inst_69149 = init;
var state_69163__$1 = (function (){var statearr_69172 = state_69163;
(statearr_69172[(7)] = inst_69149);

return statearr_69172;
})();
var statearr_69173_69186 = state_69163__$1;
(statearr_69173_69186[(2)] = null);

(statearr_69173_69186[(1)] = (2));


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
var statearr_69177 = [null,null,null,null,null,null,null,null,null];
(statearr_69177[(0)] = state_machine__6988__auto__);

(statearr_69177[(1)] = (1));

return statearr_69177;
});
var state_machine__6988__auto____1 = (function (state_69163){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_69163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e69178){if((e69178 instanceof Object)){
var ex__6991__auto__ = e69178;
var statearr_69179_69187 = state_69163;
(statearr_69179_69187[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69188 = state_69163;
state_69163 = G__69188;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_69163){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_69163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_69180 = f__7044__auto__.call(null);
(statearr_69180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_69180;
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
return (function (state_69262){
var state_val_69263 = (state_69262[(1)]);
if((state_val_69263 === (7))){
var inst_69244 = (state_69262[(2)]);
var state_69262__$1 = state_69262;
var statearr_69264_69287 = state_69262__$1;
(statearr_69264_69287[(2)] = inst_69244);

(statearr_69264_69287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (1))){
var inst_69238 = cljs.core.seq.call(null,coll);
var inst_69239 = inst_69238;
var state_69262__$1 = (function (){var statearr_69265 = state_69262;
(statearr_69265[(7)] = inst_69239);

return statearr_69265;
})();
var statearr_69266_69288 = state_69262__$1;
(statearr_69266_69288[(2)] = null);

(statearr_69266_69288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (4))){
var inst_69239 = (state_69262[(7)]);
var inst_69242 = cljs.core.first.call(null,inst_69239);
var state_69262__$1 = state_69262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69262__$1,(7),ch,inst_69242);
} else {
if((state_val_69263 === (13))){
var inst_69256 = (state_69262[(2)]);
var state_69262__$1 = state_69262;
var statearr_69267_69289 = state_69262__$1;
(statearr_69267_69289[(2)] = inst_69256);

(statearr_69267_69289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (6))){
var inst_69247 = (state_69262[(2)]);
var state_69262__$1 = state_69262;
if(cljs.core.truth_(inst_69247)){
var statearr_69268_69290 = state_69262__$1;
(statearr_69268_69290[(1)] = (8));

} else {
var statearr_69269_69291 = state_69262__$1;
(statearr_69269_69291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (3))){
var inst_69260 = (state_69262[(2)]);
var state_69262__$1 = state_69262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69262__$1,inst_69260);
} else {
if((state_val_69263 === (12))){
var state_69262__$1 = state_69262;
var statearr_69270_69292 = state_69262__$1;
(statearr_69270_69292[(2)] = null);

(statearr_69270_69292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (2))){
var inst_69239 = (state_69262[(7)]);
var state_69262__$1 = state_69262;
if(cljs.core.truth_(inst_69239)){
var statearr_69271_69293 = state_69262__$1;
(statearr_69271_69293[(1)] = (4));

} else {
var statearr_69272_69294 = state_69262__$1;
(statearr_69272_69294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (11))){
var inst_69253 = cljs.core.async.close_BANG_.call(null,ch);
var state_69262__$1 = state_69262;
var statearr_69273_69295 = state_69262__$1;
(statearr_69273_69295[(2)] = inst_69253);

(statearr_69273_69295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (9))){
var state_69262__$1 = state_69262;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69274_69296 = state_69262__$1;
(statearr_69274_69296[(1)] = (11));

} else {
var statearr_69275_69297 = state_69262__$1;
(statearr_69275_69297[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (5))){
var inst_69239 = (state_69262[(7)]);
var state_69262__$1 = state_69262;
var statearr_69276_69298 = state_69262__$1;
(statearr_69276_69298[(2)] = inst_69239);

(statearr_69276_69298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (10))){
var inst_69258 = (state_69262[(2)]);
var state_69262__$1 = state_69262;
var statearr_69277_69299 = state_69262__$1;
(statearr_69277_69299[(2)] = inst_69258);

(statearr_69277_69299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69263 === (8))){
var inst_69239 = (state_69262[(7)]);
var inst_69249 = cljs.core.next.call(null,inst_69239);
var inst_69239__$1 = inst_69249;
var state_69262__$1 = (function (){var statearr_69278 = state_69262;
(statearr_69278[(7)] = inst_69239__$1);

return statearr_69278;
})();
var statearr_69279_69300 = state_69262__$1;
(statearr_69279_69300[(2)] = null);

(statearr_69279_69300[(1)] = (2));


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
var statearr_69283 = [null,null,null,null,null,null,null,null];
(statearr_69283[(0)] = state_machine__6988__auto__);

(statearr_69283[(1)] = (1));

return statearr_69283;
});
var state_machine__6988__auto____1 = (function (state_69262){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_69262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e69284){if((e69284 instanceof Object)){
var ex__6991__auto__ = e69284;
var statearr_69285_69301 = state_69262;
(statearr_69285_69301[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69302 = state_69262;
state_69262 = G__69302;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_69262){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_69262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_69286 = f__7044__auto__.call(null);
(statearr_69286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_69286;
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

cljs.core.async.Mux = (function (){var obj69304 = {};
return obj69304;
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


cljs.core.async.Mult = (function (){var obj69306 = {};
return obj69306;
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
if(typeof cljs.core.async.t69528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69528 = (function (cs,ch,mult,meta69529){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta69529 = meta69529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69528.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t69528.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t69528.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t69528.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t69528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t69528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t69528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69530){
var self__ = this;
var _69530__$1 = this;
return self__.meta69529;
});})(cs))
;

cljs.core.async.t69528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69530,meta69529__$1){
var self__ = this;
var _69530__$1 = this;
return (new cljs.core.async.t69528(self__.cs,self__.ch,self__.mult,meta69529__$1));
});})(cs))
;

cljs.core.async.t69528.cljs$lang$type = true;

cljs.core.async.t69528.cljs$lang$ctorStr = "cljs.core.async/t69528";

cljs.core.async.t69528.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t69528");
});})(cs))
;

cljs.core.async.__GT_t69528 = ((function (cs){
return (function __GT_t69528(cs__$1,ch__$1,mult__$1,meta69529){
return (new cljs.core.async.t69528(cs__$1,ch__$1,mult__$1,meta69529));
});})(cs))
;

}

return (new cljs.core.async.t69528(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___69749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___69749,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___69749,cs,m,dchan,dctr,done){
return (function (state_69661){
var state_val_69662 = (state_69661[(1)]);
if((state_val_69662 === (7))){
var inst_69657 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69663_69750 = state_69661__$1;
(statearr_69663_69750[(2)] = inst_69657);

(statearr_69663_69750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (20))){
var inst_69562 = (state_69661[(7)]);
var inst_69572 = cljs.core.first.call(null,inst_69562);
var inst_69573 = cljs.core.nth.call(null,inst_69572,(0),null);
var inst_69574 = cljs.core.nth.call(null,inst_69572,(1),null);
var state_69661__$1 = (function (){var statearr_69664 = state_69661;
(statearr_69664[(8)] = inst_69573);

return statearr_69664;
})();
if(cljs.core.truth_(inst_69574)){
var statearr_69665_69751 = state_69661__$1;
(statearr_69665_69751[(1)] = (22));

} else {
var statearr_69666_69752 = state_69661__$1;
(statearr_69666_69752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (27))){
var inst_69533 = (state_69661[(9)]);
var inst_69602 = (state_69661[(10)]);
var inst_69609 = (state_69661[(11)]);
var inst_69604 = (state_69661[(12)]);
var inst_69609__$1 = cljs.core._nth.call(null,inst_69602,inst_69604);
var inst_69610 = cljs.core.async.put_BANG_.call(null,inst_69609__$1,inst_69533,done);
var state_69661__$1 = (function (){var statearr_69667 = state_69661;
(statearr_69667[(11)] = inst_69609__$1);

return statearr_69667;
})();
if(cljs.core.truth_(inst_69610)){
var statearr_69668_69753 = state_69661__$1;
(statearr_69668_69753[(1)] = (30));

} else {
var statearr_69669_69754 = state_69661__$1;
(statearr_69669_69754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (1))){
var state_69661__$1 = state_69661;
var statearr_69670_69755 = state_69661__$1;
(statearr_69670_69755[(2)] = null);

(statearr_69670_69755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (24))){
var inst_69562 = (state_69661[(7)]);
var inst_69579 = (state_69661[(2)]);
var inst_69580 = cljs.core.next.call(null,inst_69562);
var inst_69542 = inst_69580;
var inst_69543 = null;
var inst_69544 = (0);
var inst_69545 = (0);
var state_69661__$1 = (function (){var statearr_69671 = state_69661;
(statearr_69671[(13)] = inst_69544);

(statearr_69671[(14)] = inst_69543);

(statearr_69671[(15)] = inst_69542);

(statearr_69671[(16)] = inst_69579);

(statearr_69671[(17)] = inst_69545);

return statearr_69671;
})();
var statearr_69672_69756 = state_69661__$1;
(statearr_69672_69756[(2)] = null);

(statearr_69672_69756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (39))){
var state_69661__$1 = state_69661;
var statearr_69676_69757 = state_69661__$1;
(statearr_69676_69757[(2)] = null);

(statearr_69676_69757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (4))){
var inst_69533 = (state_69661[(9)]);
var inst_69533__$1 = (state_69661[(2)]);
var inst_69534 = (inst_69533__$1 == null);
var state_69661__$1 = (function (){var statearr_69677 = state_69661;
(statearr_69677[(9)] = inst_69533__$1);

return statearr_69677;
})();
if(cljs.core.truth_(inst_69534)){
var statearr_69678_69758 = state_69661__$1;
(statearr_69678_69758[(1)] = (5));

} else {
var statearr_69679_69759 = state_69661__$1;
(statearr_69679_69759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (15))){
var inst_69544 = (state_69661[(13)]);
var inst_69543 = (state_69661[(14)]);
var inst_69542 = (state_69661[(15)]);
var inst_69545 = (state_69661[(17)]);
var inst_69558 = (state_69661[(2)]);
var inst_69559 = (inst_69545 + (1));
var tmp69673 = inst_69544;
var tmp69674 = inst_69543;
var tmp69675 = inst_69542;
var inst_69542__$1 = tmp69675;
var inst_69543__$1 = tmp69674;
var inst_69544__$1 = tmp69673;
var inst_69545__$1 = inst_69559;
var state_69661__$1 = (function (){var statearr_69680 = state_69661;
(statearr_69680[(18)] = inst_69558);

(statearr_69680[(13)] = inst_69544__$1);

(statearr_69680[(14)] = inst_69543__$1);

(statearr_69680[(15)] = inst_69542__$1);

(statearr_69680[(17)] = inst_69545__$1);

return statearr_69680;
})();
var statearr_69681_69760 = state_69661__$1;
(statearr_69681_69760[(2)] = null);

(statearr_69681_69760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (21))){
var inst_69583 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69685_69761 = state_69661__$1;
(statearr_69685_69761[(2)] = inst_69583);

(statearr_69685_69761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (31))){
var inst_69609 = (state_69661[(11)]);
var inst_69613 = done.call(null,null);
var inst_69614 = cljs.core.async.untap_STAR_.call(null,m,inst_69609);
var state_69661__$1 = (function (){var statearr_69686 = state_69661;
(statearr_69686[(19)] = inst_69613);

return statearr_69686;
})();
var statearr_69687_69762 = state_69661__$1;
(statearr_69687_69762[(2)] = inst_69614);

(statearr_69687_69762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (32))){
var inst_69601 = (state_69661[(20)]);
var inst_69602 = (state_69661[(10)]);
var inst_69603 = (state_69661[(21)]);
var inst_69604 = (state_69661[(12)]);
var inst_69616 = (state_69661[(2)]);
var inst_69617 = (inst_69604 + (1));
var tmp69682 = inst_69601;
var tmp69683 = inst_69602;
var tmp69684 = inst_69603;
var inst_69601__$1 = tmp69682;
var inst_69602__$1 = tmp69683;
var inst_69603__$1 = tmp69684;
var inst_69604__$1 = inst_69617;
var state_69661__$1 = (function (){var statearr_69688 = state_69661;
(statearr_69688[(20)] = inst_69601__$1);

(statearr_69688[(10)] = inst_69602__$1);

(statearr_69688[(21)] = inst_69603__$1);

(statearr_69688[(22)] = inst_69616);

(statearr_69688[(12)] = inst_69604__$1);

return statearr_69688;
})();
var statearr_69689_69763 = state_69661__$1;
(statearr_69689_69763[(2)] = null);

(statearr_69689_69763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (40))){
var inst_69629 = (state_69661[(23)]);
var inst_69633 = done.call(null,null);
var inst_69634 = cljs.core.async.untap_STAR_.call(null,m,inst_69629);
var state_69661__$1 = (function (){var statearr_69690 = state_69661;
(statearr_69690[(24)] = inst_69633);

return statearr_69690;
})();
var statearr_69691_69764 = state_69661__$1;
(statearr_69691_69764[(2)] = inst_69634);

(statearr_69691_69764[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (33))){
var inst_69620 = (state_69661[(25)]);
var inst_69622 = cljs.core.chunked_seq_QMARK_.call(null,inst_69620);
var state_69661__$1 = state_69661;
if(inst_69622){
var statearr_69692_69765 = state_69661__$1;
(statearr_69692_69765[(1)] = (36));

} else {
var statearr_69693_69766 = state_69661__$1;
(statearr_69693_69766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (13))){
var inst_69552 = (state_69661[(26)]);
var inst_69555 = cljs.core.async.close_BANG_.call(null,inst_69552);
var state_69661__$1 = state_69661;
var statearr_69694_69767 = state_69661__$1;
(statearr_69694_69767[(2)] = inst_69555);

(statearr_69694_69767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (22))){
var inst_69573 = (state_69661[(8)]);
var inst_69576 = cljs.core.async.close_BANG_.call(null,inst_69573);
var state_69661__$1 = state_69661;
var statearr_69695_69768 = state_69661__$1;
(statearr_69695_69768[(2)] = inst_69576);

(statearr_69695_69768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (36))){
var inst_69620 = (state_69661[(25)]);
var inst_69624 = cljs.core.chunk_first.call(null,inst_69620);
var inst_69625 = cljs.core.chunk_rest.call(null,inst_69620);
var inst_69626 = cljs.core.count.call(null,inst_69624);
var inst_69601 = inst_69625;
var inst_69602 = inst_69624;
var inst_69603 = inst_69626;
var inst_69604 = (0);
var state_69661__$1 = (function (){var statearr_69696 = state_69661;
(statearr_69696[(20)] = inst_69601);

(statearr_69696[(10)] = inst_69602);

(statearr_69696[(21)] = inst_69603);

(statearr_69696[(12)] = inst_69604);

return statearr_69696;
})();
var statearr_69697_69769 = state_69661__$1;
(statearr_69697_69769[(2)] = null);

(statearr_69697_69769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (41))){
var inst_69620 = (state_69661[(25)]);
var inst_69636 = (state_69661[(2)]);
var inst_69637 = cljs.core.next.call(null,inst_69620);
var inst_69601 = inst_69637;
var inst_69602 = null;
var inst_69603 = (0);
var inst_69604 = (0);
var state_69661__$1 = (function (){var statearr_69698 = state_69661;
(statearr_69698[(20)] = inst_69601);

(statearr_69698[(27)] = inst_69636);

(statearr_69698[(10)] = inst_69602);

(statearr_69698[(21)] = inst_69603);

(statearr_69698[(12)] = inst_69604);

return statearr_69698;
})();
var statearr_69699_69770 = state_69661__$1;
(statearr_69699_69770[(2)] = null);

(statearr_69699_69770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (43))){
var state_69661__$1 = state_69661;
var statearr_69700_69771 = state_69661__$1;
(statearr_69700_69771[(2)] = null);

(statearr_69700_69771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (29))){
var inst_69645 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69701_69772 = state_69661__$1;
(statearr_69701_69772[(2)] = inst_69645);

(statearr_69701_69772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (44))){
var inst_69654 = (state_69661[(2)]);
var state_69661__$1 = (function (){var statearr_69702 = state_69661;
(statearr_69702[(28)] = inst_69654);

return statearr_69702;
})();
var statearr_69703_69773 = state_69661__$1;
(statearr_69703_69773[(2)] = null);

(statearr_69703_69773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (6))){
var inst_69593 = (state_69661[(29)]);
var inst_69592 = cljs.core.deref.call(null,cs);
var inst_69593__$1 = cljs.core.keys.call(null,inst_69592);
var inst_69594 = cljs.core.count.call(null,inst_69593__$1);
var inst_69595 = cljs.core.reset_BANG_.call(null,dctr,inst_69594);
var inst_69600 = cljs.core.seq.call(null,inst_69593__$1);
var inst_69601 = inst_69600;
var inst_69602 = null;
var inst_69603 = (0);
var inst_69604 = (0);
var state_69661__$1 = (function (){var statearr_69704 = state_69661;
(statearr_69704[(20)] = inst_69601);

(statearr_69704[(10)] = inst_69602);

(statearr_69704[(30)] = inst_69595);

(statearr_69704[(21)] = inst_69603);

(statearr_69704[(12)] = inst_69604);

(statearr_69704[(29)] = inst_69593__$1);

return statearr_69704;
})();
var statearr_69705_69774 = state_69661__$1;
(statearr_69705_69774[(2)] = null);

(statearr_69705_69774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (28))){
var inst_69601 = (state_69661[(20)]);
var inst_69620 = (state_69661[(25)]);
var inst_69620__$1 = cljs.core.seq.call(null,inst_69601);
var state_69661__$1 = (function (){var statearr_69706 = state_69661;
(statearr_69706[(25)] = inst_69620__$1);

return statearr_69706;
})();
if(inst_69620__$1){
var statearr_69707_69775 = state_69661__$1;
(statearr_69707_69775[(1)] = (33));

} else {
var statearr_69708_69776 = state_69661__$1;
(statearr_69708_69776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (25))){
var inst_69603 = (state_69661[(21)]);
var inst_69604 = (state_69661[(12)]);
var inst_69606 = (inst_69604 < inst_69603);
var inst_69607 = inst_69606;
var state_69661__$1 = state_69661;
if(cljs.core.truth_(inst_69607)){
var statearr_69709_69777 = state_69661__$1;
(statearr_69709_69777[(1)] = (27));

} else {
var statearr_69710_69778 = state_69661__$1;
(statearr_69710_69778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (34))){
var state_69661__$1 = state_69661;
var statearr_69711_69779 = state_69661__$1;
(statearr_69711_69779[(2)] = null);

(statearr_69711_69779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (17))){
var state_69661__$1 = state_69661;
var statearr_69712_69780 = state_69661__$1;
(statearr_69712_69780[(2)] = null);

(statearr_69712_69780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (3))){
var inst_69659 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69661__$1,inst_69659);
} else {
if((state_val_69662 === (12))){
var inst_69588 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69713_69781 = state_69661__$1;
(statearr_69713_69781[(2)] = inst_69588);

(statearr_69713_69781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (2))){
var state_69661__$1 = state_69661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69661__$1,(4),ch);
} else {
if((state_val_69662 === (23))){
var state_69661__$1 = state_69661;
var statearr_69714_69782 = state_69661__$1;
(statearr_69714_69782[(2)] = null);

(statearr_69714_69782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (35))){
var inst_69643 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69715_69783 = state_69661__$1;
(statearr_69715_69783[(2)] = inst_69643);

(statearr_69715_69783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (19))){
var inst_69562 = (state_69661[(7)]);
var inst_69566 = cljs.core.chunk_first.call(null,inst_69562);
var inst_69567 = cljs.core.chunk_rest.call(null,inst_69562);
var inst_69568 = cljs.core.count.call(null,inst_69566);
var inst_69542 = inst_69567;
var inst_69543 = inst_69566;
var inst_69544 = inst_69568;
var inst_69545 = (0);
var state_69661__$1 = (function (){var statearr_69716 = state_69661;
(statearr_69716[(13)] = inst_69544);

(statearr_69716[(14)] = inst_69543);

(statearr_69716[(15)] = inst_69542);

(statearr_69716[(17)] = inst_69545);

return statearr_69716;
})();
var statearr_69717_69784 = state_69661__$1;
(statearr_69717_69784[(2)] = null);

(statearr_69717_69784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (11))){
var inst_69562 = (state_69661[(7)]);
var inst_69542 = (state_69661[(15)]);
var inst_69562__$1 = cljs.core.seq.call(null,inst_69542);
var state_69661__$1 = (function (){var statearr_69718 = state_69661;
(statearr_69718[(7)] = inst_69562__$1);

return statearr_69718;
})();
if(inst_69562__$1){
var statearr_69719_69785 = state_69661__$1;
(statearr_69719_69785[(1)] = (16));

} else {
var statearr_69720_69786 = state_69661__$1;
(statearr_69720_69786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (9))){
var inst_69590 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69721_69787 = state_69661__$1;
(statearr_69721_69787[(2)] = inst_69590);

(statearr_69721_69787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (5))){
var inst_69540 = cljs.core.deref.call(null,cs);
var inst_69541 = cljs.core.seq.call(null,inst_69540);
var inst_69542 = inst_69541;
var inst_69543 = null;
var inst_69544 = (0);
var inst_69545 = (0);
var state_69661__$1 = (function (){var statearr_69722 = state_69661;
(statearr_69722[(13)] = inst_69544);

(statearr_69722[(14)] = inst_69543);

(statearr_69722[(15)] = inst_69542);

(statearr_69722[(17)] = inst_69545);

return statearr_69722;
})();
var statearr_69723_69788 = state_69661__$1;
(statearr_69723_69788[(2)] = null);

(statearr_69723_69788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (14))){
var state_69661__$1 = state_69661;
var statearr_69724_69789 = state_69661__$1;
(statearr_69724_69789[(2)] = null);

(statearr_69724_69789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (45))){
var inst_69651 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69725_69790 = state_69661__$1;
(statearr_69725_69790[(2)] = inst_69651);

(statearr_69725_69790[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (26))){
var inst_69593 = (state_69661[(29)]);
var inst_69647 = (state_69661[(2)]);
var inst_69648 = cljs.core.seq.call(null,inst_69593);
var state_69661__$1 = (function (){var statearr_69726 = state_69661;
(statearr_69726[(31)] = inst_69647);

return statearr_69726;
})();
if(inst_69648){
var statearr_69727_69791 = state_69661__$1;
(statearr_69727_69791[(1)] = (42));

} else {
var statearr_69728_69792 = state_69661__$1;
(statearr_69728_69792[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (16))){
var inst_69562 = (state_69661[(7)]);
var inst_69564 = cljs.core.chunked_seq_QMARK_.call(null,inst_69562);
var state_69661__$1 = state_69661;
if(inst_69564){
var statearr_69729_69793 = state_69661__$1;
(statearr_69729_69793[(1)] = (19));

} else {
var statearr_69730_69794 = state_69661__$1;
(statearr_69730_69794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (38))){
var inst_69640 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69731_69795 = state_69661__$1;
(statearr_69731_69795[(2)] = inst_69640);

(statearr_69731_69795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (30))){
var state_69661__$1 = state_69661;
var statearr_69732_69796 = state_69661__$1;
(statearr_69732_69796[(2)] = null);

(statearr_69732_69796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (10))){
var inst_69543 = (state_69661[(14)]);
var inst_69545 = (state_69661[(17)]);
var inst_69551 = cljs.core._nth.call(null,inst_69543,inst_69545);
var inst_69552 = cljs.core.nth.call(null,inst_69551,(0),null);
var inst_69553 = cljs.core.nth.call(null,inst_69551,(1),null);
var state_69661__$1 = (function (){var statearr_69733 = state_69661;
(statearr_69733[(26)] = inst_69552);

return statearr_69733;
})();
if(cljs.core.truth_(inst_69553)){
var statearr_69734_69797 = state_69661__$1;
(statearr_69734_69797[(1)] = (13));

} else {
var statearr_69735_69798 = state_69661__$1;
(statearr_69735_69798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (18))){
var inst_69586 = (state_69661[(2)]);
var state_69661__$1 = state_69661;
var statearr_69736_69799 = state_69661__$1;
(statearr_69736_69799[(2)] = inst_69586);

(statearr_69736_69799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (42))){
var state_69661__$1 = state_69661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69661__$1,(45),dchan);
} else {
if((state_val_69662 === (37))){
var inst_69620 = (state_69661[(25)]);
var inst_69533 = (state_69661[(9)]);
var inst_69629 = (state_69661[(23)]);
var inst_69629__$1 = cljs.core.first.call(null,inst_69620);
var inst_69630 = cljs.core.async.put_BANG_.call(null,inst_69629__$1,inst_69533,done);
var state_69661__$1 = (function (){var statearr_69737 = state_69661;
(statearr_69737[(23)] = inst_69629__$1);

return statearr_69737;
})();
if(cljs.core.truth_(inst_69630)){
var statearr_69738_69800 = state_69661__$1;
(statearr_69738_69800[(1)] = (39));

} else {
var statearr_69739_69801 = state_69661__$1;
(statearr_69739_69801[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69662 === (8))){
var inst_69544 = (state_69661[(13)]);
var inst_69545 = (state_69661[(17)]);
var inst_69547 = (inst_69545 < inst_69544);
var inst_69548 = inst_69547;
var state_69661__$1 = state_69661;
if(cljs.core.truth_(inst_69548)){
var statearr_69740_69802 = state_69661__$1;
(statearr_69740_69802[(1)] = (10));

} else {
var statearr_69741_69803 = state_69661__$1;
(statearr_69741_69803[(1)] = (11));

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
});})(c__7043__auto___69749,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___69749,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_69745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69745[(0)] = state_machine__6988__auto__);

(statearr_69745[(1)] = (1));

return statearr_69745;
});
var state_machine__6988__auto____1 = (function (state_69661){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_69661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e69746){if((e69746 instanceof Object)){
var ex__6991__auto__ = e69746;
var statearr_69747_69804 = state_69661;
(statearr_69747_69804[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69805 = state_69661;
state_69661 = G__69805;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_69661){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_69661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___69749,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_69748 = f__7044__auto__.call(null);
(statearr_69748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___69749);

return statearr_69748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___69749,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj69807 = {};
return obj69807;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__69808){
var map__69813 = p__69808;
var map__69813__$1 = ((cljs.core.seq_QMARK_.call(null,map__69813))?cljs.core.apply.call(null,cljs.core.hash_map,map__69813):map__69813);
var opts = map__69813__$1;
var statearr_69814_69817 = state;
(statearr_69814_69817[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__69813,map__69813__$1,opts){
return (function (val){
var statearr_69815_69818 = state;
(statearr_69815_69818[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69813,map__69813__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_69816_69819 = state;
(statearr_69816_69819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__69808 = null;
if (arguments.length > 3) {
  p__69808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__69808);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__69820){
var state = cljs.core.first(arglist__69820);
arglist__69820 = cljs.core.next(arglist__69820);
var cont_block = cljs.core.first(arglist__69820);
arglist__69820 = cljs.core.next(arglist__69820);
var ports = cljs.core.first(arglist__69820);
var p__69808 = cljs.core.rest(arglist__69820);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__69808);
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
if(typeof cljs.core.async.t69940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69940 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69941){
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
this.meta69941 = meta69941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69940.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t69940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t69940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t69940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69942){
var self__ = this;
var _69942__$1 = this;
return self__.meta69941;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69942,meta69941__$1){
var self__ = this;
var _69942__$1 = this;
return (new cljs.core.async.t69940(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta69941__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t69940.cljs$lang$type = true;

cljs.core.async.t69940.cljs$lang$ctorStr = "cljs.core.async/t69940";

cljs.core.async.t69940.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t69940");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t69940 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t69940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69941){
return (new cljs.core.async.t69940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69941));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t69940(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___70059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70012){
var state_val_70013 = (state_70012[(1)]);
if((state_val_70013 === (7))){
var inst_69956 = (state_70012[(7)]);
var inst_69961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69956);
var state_70012__$1 = state_70012;
var statearr_70014_70060 = state_70012__$1;
(statearr_70014_70060[(2)] = inst_69961);

(statearr_70014_70060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (20))){
var inst_69971 = (state_70012[(8)]);
var state_70012__$1 = state_70012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70012__$1,(23),out,inst_69971);
} else {
if((state_val_70013 === (1))){
var inst_69946 = (state_70012[(9)]);
var inst_69946__$1 = calc_state.call(null);
var inst_69947 = cljs.core.seq_QMARK_.call(null,inst_69946__$1);
var state_70012__$1 = (function (){var statearr_70015 = state_70012;
(statearr_70015[(9)] = inst_69946__$1);

return statearr_70015;
})();
if(inst_69947){
var statearr_70016_70061 = state_70012__$1;
(statearr_70016_70061[(1)] = (2));

} else {
var statearr_70017_70062 = state_70012__$1;
(statearr_70017_70062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (24))){
var inst_69964 = (state_70012[(10)]);
var inst_69956 = inst_69964;
var state_70012__$1 = (function (){var statearr_70018 = state_70012;
(statearr_70018[(7)] = inst_69956);

return statearr_70018;
})();
var statearr_70019_70063 = state_70012__$1;
(statearr_70019_70063[(2)] = null);

(statearr_70019_70063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (4))){
var inst_69946 = (state_70012[(9)]);
var inst_69952 = (state_70012[(2)]);
var inst_69953 = cljs.core.get.call(null,inst_69952,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69954 = cljs.core.get.call(null,inst_69952,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69955 = cljs.core.get.call(null,inst_69952,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69956 = inst_69946;
var state_70012__$1 = (function (){var statearr_70020 = state_70012;
(statearr_70020[(11)] = inst_69954);

(statearr_70020[(7)] = inst_69956);

(statearr_70020[(12)] = inst_69955);

(statearr_70020[(13)] = inst_69953);

return statearr_70020;
})();
var statearr_70021_70064 = state_70012__$1;
(statearr_70021_70064[(2)] = null);

(statearr_70021_70064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (15))){
var state_70012__$1 = state_70012;
var statearr_70022_70065 = state_70012__$1;
(statearr_70022_70065[(2)] = null);

(statearr_70022_70065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (21))){
var inst_69964 = (state_70012[(10)]);
var inst_69956 = inst_69964;
var state_70012__$1 = (function (){var statearr_70023 = state_70012;
(statearr_70023[(7)] = inst_69956);

return statearr_70023;
})();
var statearr_70024_70066 = state_70012__$1;
(statearr_70024_70066[(2)] = null);

(statearr_70024_70066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (13))){
var inst_70008 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
var statearr_70025_70067 = state_70012__$1;
(statearr_70025_70067[(2)] = inst_70008);

(statearr_70025_70067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (22))){
var inst_70006 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
var statearr_70026_70068 = state_70012__$1;
(statearr_70026_70068[(2)] = inst_70006);

(statearr_70026_70068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (6))){
var inst_70010 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70012__$1,inst_70010);
} else {
if((state_val_70013 === (25))){
var state_70012__$1 = state_70012;
var statearr_70027_70069 = state_70012__$1;
(statearr_70027_70069[(2)] = null);

(statearr_70027_70069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (17))){
var inst_69986 = (state_70012[(14)]);
var state_70012__$1 = state_70012;
var statearr_70028_70070 = state_70012__$1;
(statearr_70028_70070[(2)] = inst_69986);

(statearr_70028_70070[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (3))){
var inst_69946 = (state_70012[(9)]);
var state_70012__$1 = state_70012;
var statearr_70029_70071 = state_70012__$1;
(statearr_70029_70071[(2)] = inst_69946);

(statearr_70029_70071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (12))){
var inst_69972 = (state_70012[(15)]);
var inst_69986 = (state_70012[(14)]);
var inst_69967 = (state_70012[(16)]);
var inst_69986__$1 = inst_69967.call(null,inst_69972);
var state_70012__$1 = (function (){var statearr_70030 = state_70012;
(statearr_70030[(14)] = inst_69986__$1);

return statearr_70030;
})();
if(cljs.core.truth_(inst_69986__$1)){
var statearr_70031_70072 = state_70012__$1;
(statearr_70031_70072[(1)] = (17));

} else {
var statearr_70032_70073 = state_70012__$1;
(statearr_70032_70073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (2))){
var inst_69946 = (state_70012[(9)]);
var inst_69949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69946);
var state_70012__$1 = state_70012;
var statearr_70033_70074 = state_70012__$1;
(statearr_70033_70074[(2)] = inst_69949);

(statearr_70033_70074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (23))){
var inst_69997 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
if(cljs.core.truth_(inst_69997)){
var statearr_70034_70075 = state_70012__$1;
(statearr_70034_70075[(1)] = (24));

} else {
var statearr_70035_70076 = state_70012__$1;
(statearr_70035_70076[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (19))){
var inst_69994 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
if(cljs.core.truth_(inst_69994)){
var statearr_70036_70077 = state_70012__$1;
(statearr_70036_70077[(1)] = (20));

} else {
var statearr_70037_70078 = state_70012__$1;
(statearr_70037_70078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (11))){
var inst_69971 = (state_70012[(8)]);
var inst_69977 = (inst_69971 == null);
var state_70012__$1 = state_70012;
if(cljs.core.truth_(inst_69977)){
var statearr_70038_70079 = state_70012__$1;
(statearr_70038_70079[(1)] = (14));

} else {
var statearr_70039_70080 = state_70012__$1;
(statearr_70039_70080[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (9))){
var inst_69964 = (state_70012[(10)]);
var inst_69964__$1 = (state_70012[(2)]);
var inst_69965 = cljs.core.get.call(null,inst_69964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69966 = cljs.core.get.call(null,inst_69964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69967 = cljs.core.get.call(null,inst_69964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_70012__$1 = (function (){var statearr_70040 = state_70012;
(statearr_70040[(17)] = inst_69966);

(statearr_70040[(10)] = inst_69964__$1);

(statearr_70040[(16)] = inst_69967);

return statearr_70040;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70012__$1,(10),inst_69965);
} else {
if((state_val_70013 === (5))){
var inst_69956 = (state_70012[(7)]);
var inst_69959 = cljs.core.seq_QMARK_.call(null,inst_69956);
var state_70012__$1 = state_70012;
if(inst_69959){
var statearr_70041_70081 = state_70012__$1;
(statearr_70041_70081[(1)] = (7));

} else {
var statearr_70042_70082 = state_70012__$1;
(statearr_70042_70082[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (14))){
var inst_69972 = (state_70012[(15)]);
var inst_69979 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_69972);
var state_70012__$1 = state_70012;
var statearr_70043_70083 = state_70012__$1;
(statearr_70043_70083[(2)] = inst_69979);

(statearr_70043_70083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (26))){
var inst_70002 = (state_70012[(2)]);
var state_70012__$1 = state_70012;
var statearr_70044_70084 = state_70012__$1;
(statearr_70044_70084[(2)] = inst_70002);

(statearr_70044_70084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (16))){
var inst_69982 = (state_70012[(2)]);
var inst_69983 = calc_state.call(null);
var inst_69956 = inst_69983;
var state_70012__$1 = (function (){var statearr_70045 = state_70012;
(statearr_70045[(7)] = inst_69956);

(statearr_70045[(18)] = inst_69982);

return statearr_70045;
})();
var statearr_70046_70085 = state_70012__$1;
(statearr_70046_70085[(2)] = null);

(statearr_70046_70085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (10))){
var inst_69972 = (state_70012[(15)]);
var inst_69971 = (state_70012[(8)]);
var inst_69970 = (state_70012[(2)]);
var inst_69971__$1 = cljs.core.nth.call(null,inst_69970,(0),null);
var inst_69972__$1 = cljs.core.nth.call(null,inst_69970,(1),null);
var inst_69973 = (inst_69971__$1 == null);
var inst_69974 = cljs.core._EQ_.call(null,inst_69972__$1,change);
var inst_69975 = (inst_69973) || (inst_69974);
var state_70012__$1 = (function (){var statearr_70047 = state_70012;
(statearr_70047[(15)] = inst_69972__$1);

(statearr_70047[(8)] = inst_69971__$1);

return statearr_70047;
})();
if(cljs.core.truth_(inst_69975)){
var statearr_70048_70086 = state_70012__$1;
(statearr_70048_70086[(1)] = (11));

} else {
var statearr_70049_70087 = state_70012__$1;
(statearr_70049_70087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (18))){
var inst_69972 = (state_70012[(15)]);
var inst_69966 = (state_70012[(17)]);
var inst_69967 = (state_70012[(16)]);
var inst_69989 = cljs.core.empty_QMARK_.call(null,inst_69967);
var inst_69990 = inst_69966.call(null,inst_69972);
var inst_69991 = cljs.core.not.call(null,inst_69990);
var inst_69992 = (inst_69989) && (inst_69991);
var state_70012__$1 = state_70012;
var statearr_70050_70088 = state_70012__$1;
(statearr_70050_70088[(2)] = inst_69992);

(statearr_70050_70088[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70013 === (8))){
var inst_69956 = (state_70012[(7)]);
var state_70012__$1 = state_70012;
var statearr_70051_70089 = state_70012__$1;
(statearr_70051_70089[(2)] = inst_69956);

(statearr_70051_70089[(1)] = (9));


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
});})(c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70055[(0)] = state_machine__6988__auto__);

(statearr_70055[(1)] = (1));

return statearr_70055;
});
var state_machine__6988__auto____1 = (function (state_70012){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70056){if((e70056 instanceof Object)){
var ex__6991__auto__ = e70056;
var statearr_70057_70090 = state_70012;
(statearr_70057_70090[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70091 = state_70012;
state_70012 = G__70091;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70012){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_70058 = f__7044__auto__.call(null);
(statearr_70058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70059);

return statearr_70058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj70093 = {};
return obj70093;
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
return (function (p1__70094_SHARP_){
if(cljs.core.truth_(p1__70094_SHARP_.call(null,topic))){
return p1__70094_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70094_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t70217 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t70217 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta70218){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta70218 = meta70218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70217.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t70217.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t70217.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t70217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t70217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t70217.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t70217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t70217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70219){
var self__ = this;
var _70219__$1 = this;
return self__.meta70218;
});})(mults,ensure_mult))
;

cljs.core.async.t70217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70219,meta70218__$1){
var self__ = this;
var _70219__$1 = this;
return (new cljs.core.async.t70217(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta70218__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t70217.cljs$lang$type = true;

cljs.core.async.t70217.cljs$lang$ctorStr = "cljs.core.async/t70217";

cljs.core.async.t70217.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t70217");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t70217 = ((function (mults,ensure_mult){
return (function __GT_t70217(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta70218){
return (new cljs.core.async.t70217(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta70218));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t70217(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___70339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70339,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70339,mults,ensure_mult,p){
return (function (state_70291){
var state_val_70292 = (state_70291[(1)]);
if((state_val_70292 === (7))){
var inst_70287 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70293_70340 = state_70291__$1;
(statearr_70293_70340[(2)] = inst_70287);

(statearr_70293_70340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (20))){
var state_70291__$1 = state_70291;
var statearr_70294_70341 = state_70291__$1;
(statearr_70294_70341[(2)] = null);

(statearr_70294_70341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (1))){
var state_70291__$1 = state_70291;
var statearr_70295_70342 = state_70291__$1;
(statearr_70295_70342[(2)] = null);

(statearr_70295_70342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (24))){
var inst_70270 = (state_70291[(7)]);
var inst_70279 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70270);
var state_70291__$1 = state_70291;
var statearr_70296_70343 = state_70291__$1;
(statearr_70296_70343[(2)] = inst_70279);

(statearr_70296_70343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (4))){
var inst_70222 = (state_70291[(8)]);
var inst_70222__$1 = (state_70291[(2)]);
var inst_70223 = (inst_70222__$1 == null);
var state_70291__$1 = (function (){var statearr_70297 = state_70291;
(statearr_70297[(8)] = inst_70222__$1);

return statearr_70297;
})();
if(cljs.core.truth_(inst_70223)){
var statearr_70298_70344 = state_70291__$1;
(statearr_70298_70344[(1)] = (5));

} else {
var statearr_70299_70345 = state_70291__$1;
(statearr_70299_70345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (15))){
var inst_70264 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70300_70346 = state_70291__$1;
(statearr_70300_70346[(2)] = inst_70264);

(statearr_70300_70346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (21))){
var inst_70284 = (state_70291[(2)]);
var state_70291__$1 = (function (){var statearr_70301 = state_70291;
(statearr_70301[(9)] = inst_70284);

return statearr_70301;
})();
var statearr_70302_70347 = state_70291__$1;
(statearr_70302_70347[(2)] = null);

(statearr_70302_70347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (13))){
var inst_70246 = (state_70291[(10)]);
var inst_70248 = cljs.core.chunked_seq_QMARK_.call(null,inst_70246);
var state_70291__$1 = state_70291;
if(inst_70248){
var statearr_70303_70348 = state_70291__$1;
(statearr_70303_70348[(1)] = (16));

} else {
var statearr_70304_70349 = state_70291__$1;
(statearr_70304_70349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (22))){
var inst_70276 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
if(cljs.core.truth_(inst_70276)){
var statearr_70305_70350 = state_70291__$1;
(statearr_70305_70350[(1)] = (23));

} else {
var statearr_70306_70351 = state_70291__$1;
(statearr_70306_70351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (6))){
var inst_70222 = (state_70291[(8)]);
var inst_70272 = (state_70291[(11)]);
var inst_70270 = (state_70291[(7)]);
var inst_70270__$1 = topic_fn.call(null,inst_70222);
var inst_70271 = cljs.core.deref.call(null,mults);
var inst_70272__$1 = cljs.core.get.call(null,inst_70271,inst_70270__$1);
var state_70291__$1 = (function (){var statearr_70307 = state_70291;
(statearr_70307[(11)] = inst_70272__$1);

(statearr_70307[(7)] = inst_70270__$1);

return statearr_70307;
})();
if(cljs.core.truth_(inst_70272__$1)){
var statearr_70308_70352 = state_70291__$1;
(statearr_70308_70352[(1)] = (19));

} else {
var statearr_70309_70353 = state_70291__$1;
(statearr_70309_70353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (25))){
var inst_70281 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70310_70354 = state_70291__$1;
(statearr_70310_70354[(2)] = inst_70281);

(statearr_70310_70354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (17))){
var inst_70246 = (state_70291[(10)]);
var inst_70255 = cljs.core.first.call(null,inst_70246);
var inst_70256 = cljs.core.async.muxch_STAR_.call(null,inst_70255);
var inst_70257 = cljs.core.async.close_BANG_.call(null,inst_70256);
var inst_70258 = cljs.core.next.call(null,inst_70246);
var inst_70232 = inst_70258;
var inst_70233 = null;
var inst_70234 = (0);
var inst_70235 = (0);
var state_70291__$1 = (function (){var statearr_70311 = state_70291;
(statearr_70311[(12)] = inst_70232);

(statearr_70311[(13)] = inst_70257);

(statearr_70311[(14)] = inst_70233);

(statearr_70311[(15)] = inst_70235);

(statearr_70311[(16)] = inst_70234);

return statearr_70311;
})();
var statearr_70312_70355 = state_70291__$1;
(statearr_70312_70355[(2)] = null);

(statearr_70312_70355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (3))){
var inst_70289 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70291__$1,inst_70289);
} else {
if((state_val_70292 === (12))){
var inst_70266 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70313_70356 = state_70291__$1;
(statearr_70313_70356[(2)] = inst_70266);

(statearr_70313_70356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (2))){
var state_70291__$1 = state_70291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70291__$1,(4),ch);
} else {
if((state_val_70292 === (23))){
var state_70291__$1 = state_70291;
var statearr_70314_70357 = state_70291__$1;
(statearr_70314_70357[(2)] = null);

(statearr_70314_70357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (19))){
var inst_70222 = (state_70291[(8)]);
var inst_70272 = (state_70291[(11)]);
var inst_70274 = cljs.core.async.muxch_STAR_.call(null,inst_70272);
var state_70291__$1 = state_70291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70291__$1,(22),inst_70274,inst_70222);
} else {
if((state_val_70292 === (11))){
var inst_70232 = (state_70291[(12)]);
var inst_70246 = (state_70291[(10)]);
var inst_70246__$1 = cljs.core.seq.call(null,inst_70232);
var state_70291__$1 = (function (){var statearr_70315 = state_70291;
(statearr_70315[(10)] = inst_70246__$1);

return statearr_70315;
})();
if(inst_70246__$1){
var statearr_70316_70358 = state_70291__$1;
(statearr_70316_70358[(1)] = (13));

} else {
var statearr_70317_70359 = state_70291__$1;
(statearr_70317_70359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (9))){
var inst_70268 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70318_70360 = state_70291__$1;
(statearr_70318_70360[(2)] = inst_70268);

(statearr_70318_70360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (5))){
var inst_70229 = cljs.core.deref.call(null,mults);
var inst_70230 = cljs.core.vals.call(null,inst_70229);
var inst_70231 = cljs.core.seq.call(null,inst_70230);
var inst_70232 = inst_70231;
var inst_70233 = null;
var inst_70234 = (0);
var inst_70235 = (0);
var state_70291__$1 = (function (){var statearr_70319 = state_70291;
(statearr_70319[(12)] = inst_70232);

(statearr_70319[(14)] = inst_70233);

(statearr_70319[(15)] = inst_70235);

(statearr_70319[(16)] = inst_70234);

return statearr_70319;
})();
var statearr_70320_70361 = state_70291__$1;
(statearr_70320_70361[(2)] = null);

(statearr_70320_70361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (14))){
var state_70291__$1 = state_70291;
var statearr_70324_70362 = state_70291__$1;
(statearr_70324_70362[(2)] = null);

(statearr_70324_70362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (16))){
var inst_70246 = (state_70291[(10)]);
var inst_70250 = cljs.core.chunk_first.call(null,inst_70246);
var inst_70251 = cljs.core.chunk_rest.call(null,inst_70246);
var inst_70252 = cljs.core.count.call(null,inst_70250);
var inst_70232 = inst_70251;
var inst_70233 = inst_70250;
var inst_70234 = inst_70252;
var inst_70235 = (0);
var state_70291__$1 = (function (){var statearr_70325 = state_70291;
(statearr_70325[(12)] = inst_70232);

(statearr_70325[(14)] = inst_70233);

(statearr_70325[(15)] = inst_70235);

(statearr_70325[(16)] = inst_70234);

return statearr_70325;
})();
var statearr_70326_70363 = state_70291__$1;
(statearr_70326_70363[(2)] = null);

(statearr_70326_70363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (10))){
var inst_70232 = (state_70291[(12)]);
var inst_70233 = (state_70291[(14)]);
var inst_70235 = (state_70291[(15)]);
var inst_70234 = (state_70291[(16)]);
var inst_70240 = cljs.core._nth.call(null,inst_70233,inst_70235);
var inst_70241 = cljs.core.async.muxch_STAR_.call(null,inst_70240);
var inst_70242 = cljs.core.async.close_BANG_.call(null,inst_70241);
var inst_70243 = (inst_70235 + (1));
var tmp70321 = inst_70232;
var tmp70322 = inst_70233;
var tmp70323 = inst_70234;
var inst_70232__$1 = tmp70321;
var inst_70233__$1 = tmp70322;
var inst_70234__$1 = tmp70323;
var inst_70235__$1 = inst_70243;
var state_70291__$1 = (function (){var statearr_70327 = state_70291;
(statearr_70327[(12)] = inst_70232__$1);

(statearr_70327[(14)] = inst_70233__$1);

(statearr_70327[(15)] = inst_70235__$1);

(statearr_70327[(17)] = inst_70242);

(statearr_70327[(16)] = inst_70234__$1);

return statearr_70327;
})();
var statearr_70328_70364 = state_70291__$1;
(statearr_70328_70364[(2)] = null);

(statearr_70328_70364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (18))){
var inst_70261 = (state_70291[(2)]);
var state_70291__$1 = state_70291;
var statearr_70329_70365 = state_70291__$1;
(statearr_70329_70365[(2)] = inst_70261);

(statearr_70329_70365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70292 === (8))){
var inst_70235 = (state_70291[(15)]);
var inst_70234 = (state_70291[(16)]);
var inst_70237 = (inst_70235 < inst_70234);
var inst_70238 = inst_70237;
var state_70291__$1 = state_70291;
if(cljs.core.truth_(inst_70238)){
var statearr_70330_70366 = state_70291__$1;
(statearr_70330_70366[(1)] = (10));

} else {
var statearr_70331_70367 = state_70291__$1;
(statearr_70331_70367[(1)] = (11));

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
});})(c__7043__auto___70339,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___70339,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70335[(0)] = state_machine__6988__auto__);

(statearr_70335[(1)] = (1));

return statearr_70335;
});
var state_machine__6988__auto____1 = (function (state_70291){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70336){if((e70336 instanceof Object)){
var ex__6991__auto__ = e70336;
var statearr_70337_70368 = state_70291;
(statearr_70337_70368[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70369 = state_70291;
state_70291 = G__70369;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70291){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70339,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_70338 = f__7044__auto__.call(null);
(statearr_70338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70339);

return statearr_70338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70339,mults,ensure_mult,p))
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
var c__7043__auto___70506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70476){
var state_val_70477 = (state_70476[(1)]);
if((state_val_70477 === (7))){
var state_70476__$1 = state_70476;
var statearr_70478_70507 = state_70476__$1;
(statearr_70478_70507[(2)] = null);

(statearr_70478_70507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (1))){
var state_70476__$1 = state_70476;
var statearr_70479_70508 = state_70476__$1;
(statearr_70479_70508[(2)] = null);

(statearr_70479_70508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (4))){
var inst_70440 = (state_70476[(7)]);
var inst_70442 = (inst_70440 < cnt);
var state_70476__$1 = state_70476;
if(cljs.core.truth_(inst_70442)){
var statearr_70480_70509 = state_70476__$1;
(statearr_70480_70509[(1)] = (6));

} else {
var statearr_70481_70510 = state_70476__$1;
(statearr_70481_70510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (15))){
var inst_70472 = (state_70476[(2)]);
var state_70476__$1 = state_70476;
var statearr_70482_70511 = state_70476__$1;
(statearr_70482_70511[(2)] = inst_70472);

(statearr_70482_70511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (13))){
var inst_70465 = cljs.core.async.close_BANG_.call(null,out);
var state_70476__$1 = state_70476;
var statearr_70483_70512 = state_70476__$1;
(statearr_70483_70512[(2)] = inst_70465);

(statearr_70483_70512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (6))){
var state_70476__$1 = state_70476;
var statearr_70484_70513 = state_70476__$1;
(statearr_70484_70513[(2)] = null);

(statearr_70484_70513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (3))){
var inst_70474 = (state_70476[(2)]);
var state_70476__$1 = state_70476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70476__$1,inst_70474);
} else {
if((state_val_70477 === (12))){
var inst_70462 = (state_70476[(8)]);
var inst_70462__$1 = (state_70476[(2)]);
var inst_70463 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70462__$1);
var state_70476__$1 = (function (){var statearr_70485 = state_70476;
(statearr_70485[(8)] = inst_70462__$1);

return statearr_70485;
})();
if(cljs.core.truth_(inst_70463)){
var statearr_70486_70514 = state_70476__$1;
(statearr_70486_70514[(1)] = (13));

} else {
var statearr_70487_70515 = state_70476__$1;
(statearr_70487_70515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (2))){
var inst_70439 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70440 = (0);
var state_70476__$1 = (function (){var statearr_70488 = state_70476;
(statearr_70488[(9)] = inst_70439);

(statearr_70488[(7)] = inst_70440);

return statearr_70488;
})();
var statearr_70489_70516 = state_70476__$1;
(statearr_70489_70516[(2)] = null);

(statearr_70489_70516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (11))){
var inst_70440 = (state_70476[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70476,(10),Object,null,(9));
var inst_70449 = chs__$1.call(null,inst_70440);
var inst_70450 = done.call(null,inst_70440);
var inst_70451 = cljs.core.async.take_BANG_.call(null,inst_70449,inst_70450);
var state_70476__$1 = state_70476;
var statearr_70490_70517 = state_70476__$1;
(statearr_70490_70517[(2)] = inst_70451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (9))){
var inst_70440 = (state_70476[(7)]);
var inst_70453 = (state_70476[(2)]);
var inst_70454 = (inst_70440 + (1));
var inst_70440__$1 = inst_70454;
var state_70476__$1 = (function (){var statearr_70491 = state_70476;
(statearr_70491[(10)] = inst_70453);

(statearr_70491[(7)] = inst_70440__$1);

return statearr_70491;
})();
var statearr_70492_70518 = state_70476__$1;
(statearr_70492_70518[(2)] = null);

(statearr_70492_70518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (5))){
var inst_70460 = (state_70476[(2)]);
var state_70476__$1 = (function (){var statearr_70493 = state_70476;
(statearr_70493[(11)] = inst_70460);

return statearr_70493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70476__$1,(12),dchan);
} else {
if((state_val_70477 === (14))){
var inst_70462 = (state_70476[(8)]);
var inst_70467 = cljs.core.apply.call(null,f,inst_70462);
var state_70476__$1 = state_70476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70476__$1,(16),out,inst_70467);
} else {
if((state_val_70477 === (16))){
var inst_70469 = (state_70476[(2)]);
var state_70476__$1 = (function (){var statearr_70494 = state_70476;
(statearr_70494[(12)] = inst_70469);

return statearr_70494;
})();
var statearr_70495_70519 = state_70476__$1;
(statearr_70495_70519[(2)] = null);

(statearr_70495_70519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (10))){
var inst_70444 = (state_70476[(2)]);
var inst_70445 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70476__$1 = (function (){var statearr_70496 = state_70476;
(statearr_70496[(13)] = inst_70444);

return statearr_70496;
})();
var statearr_70497_70520 = state_70476__$1;
(statearr_70497_70520[(2)] = inst_70445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70477 === (8))){
var inst_70458 = (state_70476[(2)]);
var state_70476__$1 = state_70476;
var statearr_70498_70521 = state_70476__$1;
(statearr_70498_70521[(2)] = inst_70458);

(statearr_70498_70521[(1)] = (5));


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
});})(c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70502[(0)] = state_machine__6988__auto__);

(statearr_70502[(1)] = (1));

return statearr_70502;
});
var state_machine__6988__auto____1 = (function (state_70476){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70503){if((e70503 instanceof Object)){
var ex__6991__auto__ = e70503;
var statearr_70504_70522 = state_70476;
(statearr_70504_70522[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70523 = state_70476;
state_70476 = G__70523;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70476){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_70505 = f__7044__auto__.call(null);
(statearr_70505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70506);

return statearr_70505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70506,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___70631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70631,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70631,out){
return (function (state_70607){
var state_val_70608 = (state_70607[(1)]);
if((state_val_70608 === (7))){
var inst_70587 = (state_70607[(7)]);
var inst_70586 = (state_70607[(8)]);
var inst_70586__$1 = (state_70607[(2)]);
var inst_70587__$1 = cljs.core.nth.call(null,inst_70586__$1,(0),null);
var inst_70588 = cljs.core.nth.call(null,inst_70586__$1,(1),null);
var inst_70589 = (inst_70587__$1 == null);
var state_70607__$1 = (function (){var statearr_70609 = state_70607;
(statearr_70609[(9)] = inst_70588);

(statearr_70609[(7)] = inst_70587__$1);

(statearr_70609[(8)] = inst_70586__$1);

return statearr_70609;
})();
if(cljs.core.truth_(inst_70589)){
var statearr_70610_70632 = state_70607__$1;
(statearr_70610_70632[(1)] = (8));

} else {
var statearr_70611_70633 = state_70607__$1;
(statearr_70611_70633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (1))){
var inst_70578 = cljs.core.vec.call(null,chs);
var inst_70579 = inst_70578;
var state_70607__$1 = (function (){var statearr_70612 = state_70607;
(statearr_70612[(10)] = inst_70579);

return statearr_70612;
})();
var statearr_70613_70634 = state_70607__$1;
(statearr_70613_70634[(2)] = null);

(statearr_70613_70634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (4))){
var inst_70579 = (state_70607[(10)]);
var state_70607__$1 = state_70607;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70607__$1,(7),inst_70579);
} else {
if((state_val_70608 === (6))){
var inst_70603 = (state_70607[(2)]);
var state_70607__$1 = state_70607;
var statearr_70614_70635 = state_70607__$1;
(statearr_70614_70635[(2)] = inst_70603);

(statearr_70614_70635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (3))){
var inst_70605 = (state_70607[(2)]);
var state_70607__$1 = state_70607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70607__$1,inst_70605);
} else {
if((state_val_70608 === (2))){
var inst_70579 = (state_70607[(10)]);
var inst_70581 = cljs.core.count.call(null,inst_70579);
var inst_70582 = (inst_70581 > (0));
var state_70607__$1 = state_70607;
if(cljs.core.truth_(inst_70582)){
var statearr_70616_70636 = state_70607__$1;
(statearr_70616_70636[(1)] = (4));

} else {
var statearr_70617_70637 = state_70607__$1;
(statearr_70617_70637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (11))){
var inst_70579 = (state_70607[(10)]);
var inst_70596 = (state_70607[(2)]);
var tmp70615 = inst_70579;
var inst_70579__$1 = tmp70615;
var state_70607__$1 = (function (){var statearr_70618 = state_70607;
(statearr_70618[(10)] = inst_70579__$1);

(statearr_70618[(11)] = inst_70596);

return statearr_70618;
})();
var statearr_70619_70638 = state_70607__$1;
(statearr_70619_70638[(2)] = null);

(statearr_70619_70638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (9))){
var inst_70587 = (state_70607[(7)]);
var state_70607__$1 = state_70607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70607__$1,(11),out,inst_70587);
} else {
if((state_val_70608 === (5))){
var inst_70601 = cljs.core.async.close_BANG_.call(null,out);
var state_70607__$1 = state_70607;
var statearr_70620_70639 = state_70607__$1;
(statearr_70620_70639[(2)] = inst_70601);

(statearr_70620_70639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (10))){
var inst_70599 = (state_70607[(2)]);
var state_70607__$1 = state_70607;
var statearr_70621_70640 = state_70607__$1;
(statearr_70621_70640[(2)] = inst_70599);

(statearr_70621_70640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70608 === (8))){
var inst_70579 = (state_70607[(10)]);
var inst_70588 = (state_70607[(9)]);
var inst_70587 = (state_70607[(7)]);
var inst_70586 = (state_70607[(8)]);
var inst_70591 = (function (){var c = inst_70588;
var v = inst_70587;
var vec__70584 = inst_70586;
var cs = inst_70579;
return ((function (c,v,vec__70584,cs,inst_70579,inst_70588,inst_70587,inst_70586,state_val_70608,c__7043__auto___70631,out){
return (function (p1__70524_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70524_SHARP_);
});
;})(c,v,vec__70584,cs,inst_70579,inst_70588,inst_70587,inst_70586,state_val_70608,c__7043__auto___70631,out))
})();
var inst_70592 = cljs.core.filterv.call(null,inst_70591,inst_70579);
var inst_70579__$1 = inst_70592;
var state_70607__$1 = (function (){var statearr_70622 = state_70607;
(statearr_70622[(10)] = inst_70579__$1);

return statearr_70622;
})();
var statearr_70623_70641 = state_70607__$1;
(statearr_70623_70641[(2)] = null);

(statearr_70623_70641[(1)] = (2));


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
});})(c__7043__auto___70631,out))
;
return ((function (switch__6987__auto__,c__7043__auto___70631,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70627[(0)] = state_machine__6988__auto__);

(statearr_70627[(1)] = (1));

return statearr_70627;
});
var state_machine__6988__auto____1 = (function (state_70607){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70628){if((e70628 instanceof Object)){
var ex__6991__auto__ = e70628;
var statearr_70629_70642 = state_70607;
(statearr_70629_70642[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70643 = state_70607;
state_70607 = G__70643;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70607){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70631,out))
})();
var state__7045__auto__ = (function (){var statearr_70630 = f__7044__auto__.call(null);
(statearr_70630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70631);

return statearr_70630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70631,out))
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
var c__7043__auto___70736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70736,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70736,out){
return (function (state_70713){
var state_val_70714 = (state_70713[(1)]);
if((state_val_70714 === (7))){
var inst_70695 = (state_70713[(7)]);
var inst_70695__$1 = (state_70713[(2)]);
var inst_70696 = (inst_70695__$1 == null);
var inst_70697 = cljs.core.not.call(null,inst_70696);
var state_70713__$1 = (function (){var statearr_70715 = state_70713;
(statearr_70715[(7)] = inst_70695__$1);

return statearr_70715;
})();
if(inst_70697){
var statearr_70716_70737 = state_70713__$1;
(statearr_70716_70737[(1)] = (8));

} else {
var statearr_70717_70738 = state_70713__$1;
(statearr_70717_70738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (1))){
var inst_70690 = (0);
var state_70713__$1 = (function (){var statearr_70718 = state_70713;
(statearr_70718[(8)] = inst_70690);

return statearr_70718;
})();
var statearr_70719_70739 = state_70713__$1;
(statearr_70719_70739[(2)] = null);

(statearr_70719_70739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (4))){
var state_70713__$1 = state_70713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70713__$1,(7),ch);
} else {
if((state_val_70714 === (6))){
var inst_70708 = (state_70713[(2)]);
var state_70713__$1 = state_70713;
var statearr_70720_70740 = state_70713__$1;
(statearr_70720_70740[(2)] = inst_70708);

(statearr_70720_70740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (3))){
var inst_70710 = (state_70713[(2)]);
var inst_70711 = cljs.core.async.close_BANG_.call(null,out);
var state_70713__$1 = (function (){var statearr_70721 = state_70713;
(statearr_70721[(9)] = inst_70710);

return statearr_70721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70713__$1,inst_70711);
} else {
if((state_val_70714 === (2))){
var inst_70690 = (state_70713[(8)]);
var inst_70692 = (inst_70690 < n);
var state_70713__$1 = state_70713;
if(cljs.core.truth_(inst_70692)){
var statearr_70722_70741 = state_70713__$1;
(statearr_70722_70741[(1)] = (4));

} else {
var statearr_70723_70742 = state_70713__$1;
(statearr_70723_70742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (11))){
var inst_70690 = (state_70713[(8)]);
var inst_70700 = (state_70713[(2)]);
var inst_70701 = (inst_70690 + (1));
var inst_70690__$1 = inst_70701;
var state_70713__$1 = (function (){var statearr_70724 = state_70713;
(statearr_70724[(8)] = inst_70690__$1);

(statearr_70724[(10)] = inst_70700);

return statearr_70724;
})();
var statearr_70725_70743 = state_70713__$1;
(statearr_70725_70743[(2)] = null);

(statearr_70725_70743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (9))){
var state_70713__$1 = state_70713;
var statearr_70726_70744 = state_70713__$1;
(statearr_70726_70744[(2)] = null);

(statearr_70726_70744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (5))){
var state_70713__$1 = state_70713;
var statearr_70727_70745 = state_70713__$1;
(statearr_70727_70745[(2)] = null);

(statearr_70727_70745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (10))){
var inst_70705 = (state_70713[(2)]);
var state_70713__$1 = state_70713;
var statearr_70728_70746 = state_70713__$1;
(statearr_70728_70746[(2)] = inst_70705);

(statearr_70728_70746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (8))){
var inst_70695 = (state_70713[(7)]);
var state_70713__$1 = state_70713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70713__$1,(11),out,inst_70695);
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
});})(c__7043__auto___70736,out))
;
return ((function (switch__6987__auto__,c__7043__auto___70736,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70732[(0)] = state_machine__6988__auto__);

(statearr_70732[(1)] = (1));

return statearr_70732;
});
var state_machine__6988__auto____1 = (function (state_70713){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70733){if((e70733 instanceof Object)){
var ex__6991__auto__ = e70733;
var statearr_70734_70747 = state_70713;
(statearr_70734_70747[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70748 = state_70713;
state_70713 = G__70748;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70713){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70736,out))
})();
var state__7045__auto__ = (function (){var statearr_70735 = f__7044__auto__.call(null);
(statearr_70735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70736);

return statearr_70735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70736,out))
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
if(typeof cljs.core.async.t70756 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t70756 = (function (ch,f,map_LT_,meta70757){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta70757 = meta70757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t70759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t70759 = (function (fn1,_,meta70757,map_LT_,f,ch,meta70760){
this.fn1 = fn1;
this._ = _;
this.meta70757 = meta70757;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta70760 = meta70760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t70759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t70759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70749_SHARP_){
return f1.call(null,(((p1__70749_SHARP_ == null))?null:self__.f.call(null,p1__70749_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t70759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70761){
var self__ = this;
var _70761__$1 = this;
return self__.meta70760;
});})(___$1))
;

cljs.core.async.t70759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70761,meta70760__$1){
var self__ = this;
var _70761__$1 = this;
return (new cljs.core.async.t70759(self__.fn1,self__._,self__.meta70757,self__.map_LT_,self__.f,self__.ch,meta70760__$1));
});})(___$1))
;

cljs.core.async.t70759.cljs$lang$type = true;

cljs.core.async.t70759.cljs$lang$ctorStr = "cljs.core.async/t70759";

cljs.core.async.t70759.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t70759");
});})(___$1))
;

cljs.core.async.__GT_t70759 = ((function (___$1){
return (function __GT_t70759(fn1__$1,___$2,meta70757__$1,map_LT___$1,f__$1,ch__$1,meta70760){
return (new cljs.core.async.t70759(fn1__$1,___$2,meta70757__$1,map_LT___$1,f__$1,ch__$1,meta70760));
});})(___$1))
;

}

return (new cljs.core.async.t70759(fn1,___$1,self__.meta70757,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t70756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t70756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70758){
var self__ = this;
var _70758__$1 = this;
return self__.meta70757;
});

cljs.core.async.t70756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70758,meta70757__$1){
var self__ = this;
var _70758__$1 = this;
return (new cljs.core.async.t70756(self__.ch,self__.f,self__.map_LT_,meta70757__$1));
});

cljs.core.async.t70756.cljs$lang$type = true;

cljs.core.async.t70756.cljs$lang$ctorStr = "cljs.core.async/t70756";

cljs.core.async.t70756.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t70756");
});

cljs.core.async.__GT_t70756 = (function __GT_t70756(ch__$1,f__$1,map_LT___$1,meta70757){
return (new cljs.core.async.t70756(ch__$1,f__$1,map_LT___$1,meta70757));
});

}

return (new cljs.core.async.t70756(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t70765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t70765 = (function (ch,f,map_GT_,meta70766){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta70766 = meta70766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t70765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t70765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70767){
var self__ = this;
var _70767__$1 = this;
return self__.meta70766;
});

cljs.core.async.t70765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70767,meta70766__$1){
var self__ = this;
var _70767__$1 = this;
return (new cljs.core.async.t70765(self__.ch,self__.f,self__.map_GT_,meta70766__$1));
});

cljs.core.async.t70765.cljs$lang$type = true;

cljs.core.async.t70765.cljs$lang$ctorStr = "cljs.core.async/t70765";

cljs.core.async.t70765.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t70765");
});

cljs.core.async.__GT_t70765 = (function __GT_t70765(ch__$1,f__$1,map_GT___$1,meta70766){
return (new cljs.core.async.t70765(ch__$1,f__$1,map_GT___$1,meta70766));
});

}

return (new cljs.core.async.t70765(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t70771 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t70771 = (function (ch,p,filter_GT_,meta70772){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta70772 = meta70772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t70771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t70771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70773){
var self__ = this;
var _70773__$1 = this;
return self__.meta70772;
});

cljs.core.async.t70771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70773,meta70772__$1){
var self__ = this;
var _70773__$1 = this;
return (new cljs.core.async.t70771(self__.ch,self__.p,self__.filter_GT_,meta70772__$1));
});

cljs.core.async.t70771.cljs$lang$type = true;

cljs.core.async.t70771.cljs$lang$ctorStr = "cljs.core.async/t70771";

cljs.core.async.t70771.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t70771");
});

cljs.core.async.__GT_t70771 = (function __GT_t70771(ch__$1,p__$1,filter_GT___$1,meta70772){
return (new cljs.core.async.t70771(ch__$1,p__$1,filter_GT___$1,meta70772));
});

}

return (new cljs.core.async.t70771(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___70856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___70856,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___70856,out){
return (function (state_70835){
var state_val_70836 = (state_70835[(1)]);
if((state_val_70836 === (7))){
var inst_70831 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70837_70857 = state_70835__$1;
(statearr_70837_70857[(2)] = inst_70831);

(statearr_70837_70857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (1))){
var state_70835__$1 = state_70835;
var statearr_70838_70858 = state_70835__$1;
(statearr_70838_70858[(2)] = null);

(statearr_70838_70858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (4))){
var inst_70817 = (state_70835[(7)]);
var inst_70817__$1 = (state_70835[(2)]);
var inst_70818 = (inst_70817__$1 == null);
var state_70835__$1 = (function (){var statearr_70839 = state_70835;
(statearr_70839[(7)] = inst_70817__$1);

return statearr_70839;
})();
if(cljs.core.truth_(inst_70818)){
var statearr_70840_70859 = state_70835__$1;
(statearr_70840_70859[(1)] = (5));

} else {
var statearr_70841_70860 = state_70835__$1;
(statearr_70841_70860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (6))){
var inst_70817 = (state_70835[(7)]);
var inst_70822 = p.call(null,inst_70817);
var state_70835__$1 = state_70835;
if(cljs.core.truth_(inst_70822)){
var statearr_70842_70861 = state_70835__$1;
(statearr_70842_70861[(1)] = (8));

} else {
var statearr_70843_70862 = state_70835__$1;
(statearr_70843_70862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (3))){
var inst_70833 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70835__$1,inst_70833);
} else {
if((state_val_70836 === (2))){
var state_70835__$1 = state_70835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70835__$1,(4),ch);
} else {
if((state_val_70836 === (11))){
var inst_70825 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70844_70863 = state_70835__$1;
(statearr_70844_70863[(2)] = inst_70825);

(statearr_70844_70863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (9))){
var state_70835__$1 = state_70835;
var statearr_70845_70864 = state_70835__$1;
(statearr_70845_70864[(2)] = null);

(statearr_70845_70864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (5))){
var inst_70820 = cljs.core.async.close_BANG_.call(null,out);
var state_70835__$1 = state_70835;
var statearr_70846_70865 = state_70835__$1;
(statearr_70846_70865[(2)] = inst_70820);

(statearr_70846_70865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (10))){
var inst_70828 = (state_70835[(2)]);
var state_70835__$1 = (function (){var statearr_70847 = state_70835;
(statearr_70847[(8)] = inst_70828);

return statearr_70847;
})();
var statearr_70848_70866 = state_70835__$1;
(statearr_70848_70866[(2)] = null);

(statearr_70848_70866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (8))){
var inst_70817 = (state_70835[(7)]);
var state_70835__$1 = state_70835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70835__$1,(11),out,inst_70817);
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
});})(c__7043__auto___70856,out))
;
return ((function (switch__6987__auto__,c__7043__auto___70856,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_70852 = [null,null,null,null,null,null,null,null,null];
(statearr_70852[(0)] = state_machine__6988__auto__);

(statearr_70852[(1)] = (1));

return statearr_70852;
});
var state_machine__6988__auto____1 = (function (state_70835){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_70835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e70853){if((e70853 instanceof Object)){
var ex__6991__auto__ = e70853;
var statearr_70854_70867 = state_70835;
(statearr_70854_70867[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70868 = state_70835;
state_70835 = G__70868;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_70835){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_70835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___70856,out))
})();
var state__7045__auto__ = (function (){var statearr_70855 = f__7044__auto__.call(null);
(statearr_70855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___70856);

return statearr_70855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___70856,out))
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
return (function (state_71034){
var state_val_71035 = (state_71034[(1)]);
if((state_val_71035 === (7))){
var inst_71030 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
var statearr_71036_71077 = state_71034__$1;
(statearr_71036_71077[(2)] = inst_71030);

(statearr_71036_71077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (20))){
var inst_71000 = (state_71034[(7)]);
var inst_71011 = (state_71034[(2)]);
var inst_71012 = cljs.core.next.call(null,inst_71000);
var inst_70986 = inst_71012;
var inst_70987 = null;
var inst_70988 = (0);
var inst_70989 = (0);
var state_71034__$1 = (function (){var statearr_71037 = state_71034;
(statearr_71037[(8)] = inst_70988);

(statearr_71037[(9)] = inst_70989);

(statearr_71037[(10)] = inst_70987);

(statearr_71037[(11)] = inst_71011);

(statearr_71037[(12)] = inst_70986);

return statearr_71037;
})();
var statearr_71038_71078 = state_71034__$1;
(statearr_71038_71078[(2)] = null);

(statearr_71038_71078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (1))){
var state_71034__$1 = state_71034;
var statearr_71039_71079 = state_71034__$1;
(statearr_71039_71079[(2)] = null);

(statearr_71039_71079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (4))){
var inst_70975 = (state_71034[(13)]);
var inst_70975__$1 = (state_71034[(2)]);
var inst_70976 = (inst_70975__$1 == null);
var state_71034__$1 = (function (){var statearr_71040 = state_71034;
(statearr_71040[(13)] = inst_70975__$1);

return statearr_71040;
})();
if(cljs.core.truth_(inst_70976)){
var statearr_71041_71080 = state_71034__$1;
(statearr_71041_71080[(1)] = (5));

} else {
var statearr_71042_71081 = state_71034__$1;
(statearr_71042_71081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (15))){
var state_71034__$1 = state_71034;
var statearr_71046_71082 = state_71034__$1;
(statearr_71046_71082[(2)] = null);

(statearr_71046_71082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (21))){
var state_71034__$1 = state_71034;
var statearr_71047_71083 = state_71034__$1;
(statearr_71047_71083[(2)] = null);

(statearr_71047_71083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (13))){
var inst_70988 = (state_71034[(8)]);
var inst_70989 = (state_71034[(9)]);
var inst_70987 = (state_71034[(10)]);
var inst_70986 = (state_71034[(12)]);
var inst_70996 = (state_71034[(2)]);
var inst_70997 = (inst_70989 + (1));
var tmp71043 = inst_70988;
var tmp71044 = inst_70987;
var tmp71045 = inst_70986;
var inst_70986__$1 = tmp71045;
var inst_70987__$1 = tmp71044;
var inst_70988__$1 = tmp71043;
var inst_70989__$1 = inst_70997;
var state_71034__$1 = (function (){var statearr_71048 = state_71034;
(statearr_71048[(8)] = inst_70988__$1);

(statearr_71048[(9)] = inst_70989__$1);

(statearr_71048[(14)] = inst_70996);

(statearr_71048[(10)] = inst_70987__$1);

(statearr_71048[(12)] = inst_70986__$1);

return statearr_71048;
})();
var statearr_71049_71084 = state_71034__$1;
(statearr_71049_71084[(2)] = null);

(statearr_71049_71084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (22))){
var state_71034__$1 = state_71034;
var statearr_71050_71085 = state_71034__$1;
(statearr_71050_71085[(2)] = null);

(statearr_71050_71085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (6))){
var inst_70975 = (state_71034[(13)]);
var inst_70984 = f.call(null,inst_70975);
var inst_70985 = cljs.core.seq.call(null,inst_70984);
var inst_70986 = inst_70985;
var inst_70987 = null;
var inst_70988 = (0);
var inst_70989 = (0);
var state_71034__$1 = (function (){var statearr_71051 = state_71034;
(statearr_71051[(8)] = inst_70988);

(statearr_71051[(9)] = inst_70989);

(statearr_71051[(10)] = inst_70987);

(statearr_71051[(12)] = inst_70986);

return statearr_71051;
})();
var statearr_71052_71086 = state_71034__$1;
(statearr_71052_71086[(2)] = null);

(statearr_71052_71086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (17))){
var inst_71000 = (state_71034[(7)]);
var inst_71004 = cljs.core.chunk_first.call(null,inst_71000);
var inst_71005 = cljs.core.chunk_rest.call(null,inst_71000);
var inst_71006 = cljs.core.count.call(null,inst_71004);
var inst_70986 = inst_71005;
var inst_70987 = inst_71004;
var inst_70988 = inst_71006;
var inst_70989 = (0);
var state_71034__$1 = (function (){var statearr_71053 = state_71034;
(statearr_71053[(8)] = inst_70988);

(statearr_71053[(9)] = inst_70989);

(statearr_71053[(10)] = inst_70987);

(statearr_71053[(12)] = inst_70986);

return statearr_71053;
})();
var statearr_71054_71087 = state_71034__$1;
(statearr_71054_71087[(2)] = null);

(statearr_71054_71087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (3))){
var inst_71032 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71034__$1,inst_71032);
} else {
if((state_val_71035 === (12))){
var inst_71020 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
var statearr_71055_71088 = state_71034__$1;
(statearr_71055_71088[(2)] = inst_71020);

(statearr_71055_71088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (2))){
var state_71034__$1 = state_71034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71034__$1,(4),in$);
} else {
if((state_val_71035 === (23))){
var inst_71028 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
var statearr_71056_71089 = state_71034__$1;
(statearr_71056_71089[(2)] = inst_71028);

(statearr_71056_71089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (19))){
var inst_71015 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
var statearr_71057_71090 = state_71034__$1;
(statearr_71057_71090[(2)] = inst_71015);

(statearr_71057_71090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (11))){
var inst_71000 = (state_71034[(7)]);
var inst_70986 = (state_71034[(12)]);
var inst_71000__$1 = cljs.core.seq.call(null,inst_70986);
var state_71034__$1 = (function (){var statearr_71058 = state_71034;
(statearr_71058[(7)] = inst_71000__$1);

return statearr_71058;
})();
if(inst_71000__$1){
var statearr_71059_71091 = state_71034__$1;
(statearr_71059_71091[(1)] = (14));

} else {
var statearr_71060_71092 = state_71034__$1;
(statearr_71060_71092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (9))){
var inst_71022 = (state_71034[(2)]);
var inst_71023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71034__$1 = (function (){var statearr_71061 = state_71034;
(statearr_71061[(15)] = inst_71022);

return statearr_71061;
})();
if(cljs.core.truth_(inst_71023)){
var statearr_71062_71093 = state_71034__$1;
(statearr_71062_71093[(1)] = (21));

} else {
var statearr_71063_71094 = state_71034__$1;
(statearr_71063_71094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (5))){
var inst_70978 = cljs.core.async.close_BANG_.call(null,out);
var state_71034__$1 = state_71034;
var statearr_71064_71095 = state_71034__$1;
(statearr_71064_71095[(2)] = inst_70978);

(statearr_71064_71095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (14))){
var inst_71000 = (state_71034[(7)]);
var inst_71002 = cljs.core.chunked_seq_QMARK_.call(null,inst_71000);
var state_71034__$1 = state_71034;
if(inst_71002){
var statearr_71065_71096 = state_71034__$1;
(statearr_71065_71096[(1)] = (17));

} else {
var statearr_71066_71097 = state_71034__$1;
(statearr_71066_71097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (16))){
var inst_71018 = (state_71034[(2)]);
var state_71034__$1 = state_71034;
var statearr_71067_71098 = state_71034__$1;
(statearr_71067_71098[(2)] = inst_71018);

(statearr_71067_71098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71035 === (10))){
var inst_70989 = (state_71034[(9)]);
var inst_70987 = (state_71034[(10)]);
var inst_70994 = cljs.core._nth.call(null,inst_70987,inst_70989);
var state_71034__$1 = state_71034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71034__$1,(13),out,inst_70994);
} else {
if((state_val_71035 === (18))){
var inst_71000 = (state_71034[(7)]);
var inst_71009 = cljs.core.first.call(null,inst_71000);
var state_71034__$1 = state_71034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71034__$1,(20),out,inst_71009);
} else {
if((state_val_71035 === (8))){
var inst_70988 = (state_71034[(8)]);
var inst_70989 = (state_71034[(9)]);
var inst_70991 = (inst_70989 < inst_70988);
var inst_70992 = inst_70991;
var state_71034__$1 = state_71034;
if(cljs.core.truth_(inst_70992)){
var statearr_71068_71099 = state_71034__$1;
(statearr_71068_71099[(1)] = (10));

} else {
var statearr_71069_71100 = state_71034__$1;
(statearr_71069_71100[(1)] = (11));

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
var statearr_71073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71073[(0)] = state_machine__6988__auto__);

(statearr_71073[(1)] = (1));

return statearr_71073;
});
var state_machine__6988__auto____1 = (function (state_71034){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_71034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e71074){if((e71074 instanceof Object)){
var ex__6991__auto__ = e71074;
var statearr_71075_71101 = state_71034;
(statearr_71075_71101[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71102 = state_71034;
state_71034 = G__71102;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_71034){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_71034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_71076 = f__7044__auto__.call(null);
(statearr_71076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_71076;
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
var c__7043__auto___71199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___71199,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___71199,out){
return (function (state_71174){
var state_val_71175 = (state_71174[(1)]);
if((state_val_71175 === (7))){
var inst_71169 = (state_71174[(2)]);
var state_71174__$1 = state_71174;
var statearr_71176_71200 = state_71174__$1;
(statearr_71176_71200[(2)] = inst_71169);

(statearr_71176_71200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (1))){
var inst_71151 = null;
var state_71174__$1 = (function (){var statearr_71177 = state_71174;
(statearr_71177[(7)] = inst_71151);

return statearr_71177;
})();
var statearr_71178_71201 = state_71174__$1;
(statearr_71178_71201[(2)] = null);

(statearr_71178_71201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (4))){
var inst_71154 = (state_71174[(8)]);
var inst_71154__$1 = (state_71174[(2)]);
var inst_71155 = (inst_71154__$1 == null);
var inst_71156 = cljs.core.not.call(null,inst_71155);
var state_71174__$1 = (function (){var statearr_71179 = state_71174;
(statearr_71179[(8)] = inst_71154__$1);

return statearr_71179;
})();
if(inst_71156){
var statearr_71180_71202 = state_71174__$1;
(statearr_71180_71202[(1)] = (5));

} else {
var statearr_71181_71203 = state_71174__$1;
(statearr_71181_71203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (6))){
var state_71174__$1 = state_71174;
var statearr_71182_71204 = state_71174__$1;
(statearr_71182_71204[(2)] = null);

(statearr_71182_71204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (3))){
var inst_71171 = (state_71174[(2)]);
var inst_71172 = cljs.core.async.close_BANG_.call(null,out);
var state_71174__$1 = (function (){var statearr_71183 = state_71174;
(statearr_71183[(9)] = inst_71171);

return statearr_71183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71174__$1,inst_71172);
} else {
if((state_val_71175 === (2))){
var state_71174__$1 = state_71174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71174__$1,(4),ch);
} else {
if((state_val_71175 === (11))){
var inst_71154 = (state_71174[(8)]);
var inst_71163 = (state_71174[(2)]);
var inst_71151 = inst_71154;
var state_71174__$1 = (function (){var statearr_71184 = state_71174;
(statearr_71184[(7)] = inst_71151);

(statearr_71184[(10)] = inst_71163);

return statearr_71184;
})();
var statearr_71185_71205 = state_71174__$1;
(statearr_71185_71205[(2)] = null);

(statearr_71185_71205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (9))){
var inst_71154 = (state_71174[(8)]);
var state_71174__$1 = state_71174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71174__$1,(11),out,inst_71154);
} else {
if((state_val_71175 === (5))){
var inst_71151 = (state_71174[(7)]);
var inst_71154 = (state_71174[(8)]);
var inst_71158 = cljs.core._EQ_.call(null,inst_71154,inst_71151);
var state_71174__$1 = state_71174;
if(inst_71158){
var statearr_71187_71206 = state_71174__$1;
(statearr_71187_71206[(1)] = (8));

} else {
var statearr_71188_71207 = state_71174__$1;
(statearr_71188_71207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (10))){
var inst_71166 = (state_71174[(2)]);
var state_71174__$1 = state_71174;
var statearr_71189_71208 = state_71174__$1;
(statearr_71189_71208[(2)] = inst_71166);

(statearr_71189_71208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71175 === (8))){
var inst_71151 = (state_71174[(7)]);
var tmp71186 = inst_71151;
var inst_71151__$1 = tmp71186;
var state_71174__$1 = (function (){var statearr_71190 = state_71174;
(statearr_71190[(7)] = inst_71151__$1);

return statearr_71190;
})();
var statearr_71191_71209 = state_71174__$1;
(statearr_71191_71209[(2)] = null);

(statearr_71191_71209[(1)] = (2));


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
});})(c__7043__auto___71199,out))
;
return ((function (switch__6987__auto__,c__7043__auto___71199,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_71195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71195[(0)] = state_machine__6988__auto__);

(statearr_71195[(1)] = (1));

return statearr_71195;
});
var state_machine__6988__auto____1 = (function (state_71174){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_71174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e71196){if((e71196 instanceof Object)){
var ex__6991__auto__ = e71196;
var statearr_71197_71210 = state_71174;
(statearr_71197_71210[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71211 = state_71174;
state_71174 = G__71211;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_71174){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_71174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___71199,out))
})();
var state__7045__auto__ = (function (){var statearr_71198 = f__7044__auto__.call(null);
(statearr_71198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___71199);

return statearr_71198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___71199,out))
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
var c__7043__auto___71346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___71346,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___71346,out){
return (function (state_71316){
var state_val_71317 = (state_71316[(1)]);
if((state_val_71317 === (7))){
var inst_71312 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71318_71347 = state_71316__$1;
(statearr_71318_71347[(2)] = inst_71312);

(statearr_71318_71347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (1))){
var inst_71279 = (new Array(n));
var inst_71280 = inst_71279;
var inst_71281 = (0);
var state_71316__$1 = (function (){var statearr_71319 = state_71316;
(statearr_71319[(7)] = inst_71281);

(statearr_71319[(8)] = inst_71280);

return statearr_71319;
})();
var statearr_71320_71348 = state_71316__$1;
(statearr_71320_71348[(2)] = null);

(statearr_71320_71348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (4))){
var inst_71284 = (state_71316[(9)]);
var inst_71284__$1 = (state_71316[(2)]);
var inst_71285 = (inst_71284__$1 == null);
var inst_71286 = cljs.core.not.call(null,inst_71285);
var state_71316__$1 = (function (){var statearr_71321 = state_71316;
(statearr_71321[(9)] = inst_71284__$1);

return statearr_71321;
})();
if(inst_71286){
var statearr_71322_71349 = state_71316__$1;
(statearr_71322_71349[(1)] = (5));

} else {
var statearr_71323_71350 = state_71316__$1;
(statearr_71323_71350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (15))){
var inst_71306 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71324_71351 = state_71316__$1;
(statearr_71324_71351[(2)] = inst_71306);

(statearr_71324_71351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (13))){
var state_71316__$1 = state_71316;
var statearr_71325_71352 = state_71316__$1;
(statearr_71325_71352[(2)] = null);

(statearr_71325_71352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (6))){
var inst_71281 = (state_71316[(7)]);
var inst_71302 = (inst_71281 > (0));
var state_71316__$1 = state_71316;
if(cljs.core.truth_(inst_71302)){
var statearr_71326_71353 = state_71316__$1;
(statearr_71326_71353[(1)] = (12));

} else {
var statearr_71327_71354 = state_71316__$1;
(statearr_71327_71354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (3))){
var inst_71314 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71316__$1,inst_71314);
} else {
if((state_val_71317 === (12))){
var inst_71280 = (state_71316[(8)]);
var inst_71304 = cljs.core.vec.call(null,inst_71280);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71316__$1,(15),out,inst_71304);
} else {
if((state_val_71317 === (2))){
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71316__$1,(4),ch);
} else {
if((state_val_71317 === (11))){
var inst_71296 = (state_71316[(2)]);
var inst_71297 = (new Array(n));
var inst_71280 = inst_71297;
var inst_71281 = (0);
var state_71316__$1 = (function (){var statearr_71328 = state_71316;
(statearr_71328[(7)] = inst_71281);

(statearr_71328[(10)] = inst_71296);

(statearr_71328[(8)] = inst_71280);

return statearr_71328;
})();
var statearr_71329_71355 = state_71316__$1;
(statearr_71329_71355[(2)] = null);

(statearr_71329_71355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (9))){
var inst_71280 = (state_71316[(8)]);
var inst_71294 = cljs.core.vec.call(null,inst_71280);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71316__$1,(11),out,inst_71294);
} else {
if((state_val_71317 === (5))){
var inst_71281 = (state_71316[(7)]);
var inst_71284 = (state_71316[(9)]);
var inst_71289 = (state_71316[(11)]);
var inst_71280 = (state_71316[(8)]);
var inst_71288 = (inst_71280[inst_71281] = inst_71284);
var inst_71289__$1 = (inst_71281 + (1));
var inst_71290 = (inst_71289__$1 < n);
var state_71316__$1 = (function (){var statearr_71330 = state_71316;
(statearr_71330[(12)] = inst_71288);

(statearr_71330[(11)] = inst_71289__$1);

return statearr_71330;
})();
if(cljs.core.truth_(inst_71290)){
var statearr_71331_71356 = state_71316__$1;
(statearr_71331_71356[(1)] = (8));

} else {
var statearr_71332_71357 = state_71316__$1;
(statearr_71332_71357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (14))){
var inst_71309 = (state_71316[(2)]);
var inst_71310 = cljs.core.async.close_BANG_.call(null,out);
var state_71316__$1 = (function (){var statearr_71334 = state_71316;
(statearr_71334[(13)] = inst_71309);

return statearr_71334;
})();
var statearr_71335_71358 = state_71316__$1;
(statearr_71335_71358[(2)] = inst_71310);

(statearr_71335_71358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (10))){
var inst_71300 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71336_71359 = state_71316__$1;
(statearr_71336_71359[(2)] = inst_71300);

(statearr_71336_71359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (8))){
var inst_71289 = (state_71316[(11)]);
var inst_71280 = (state_71316[(8)]);
var tmp71333 = inst_71280;
var inst_71280__$1 = tmp71333;
var inst_71281 = inst_71289;
var state_71316__$1 = (function (){var statearr_71337 = state_71316;
(statearr_71337[(7)] = inst_71281);

(statearr_71337[(8)] = inst_71280__$1);

return statearr_71337;
})();
var statearr_71338_71360 = state_71316__$1;
(statearr_71338_71360[(2)] = null);

(statearr_71338_71360[(1)] = (2));


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
});})(c__7043__auto___71346,out))
;
return ((function (switch__6987__auto__,c__7043__auto___71346,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_71342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71342[(0)] = state_machine__6988__auto__);

(statearr_71342[(1)] = (1));

return statearr_71342;
});
var state_machine__6988__auto____1 = (function (state_71316){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_71316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e71343){if((e71343 instanceof Object)){
var ex__6991__auto__ = e71343;
var statearr_71344_71361 = state_71316;
(statearr_71344_71361[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71362 = state_71316;
state_71316 = G__71362;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_71316){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_71316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___71346,out))
})();
var state__7045__auto__ = (function (){var statearr_71345 = f__7044__auto__.call(null);
(statearr_71345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___71346);

return statearr_71345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___71346,out))
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
var c__7043__auto___71505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___71505,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___71505,out){
return (function (state_71475){
var state_val_71476 = (state_71475[(1)]);
if((state_val_71476 === (7))){
var inst_71471 = (state_71475[(2)]);
var state_71475__$1 = state_71475;
var statearr_71477_71506 = state_71475__$1;
(statearr_71477_71506[(2)] = inst_71471);

(statearr_71477_71506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (1))){
var inst_71434 = [];
var inst_71435 = inst_71434;
var inst_71436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71475__$1 = (function (){var statearr_71478 = state_71475;
(statearr_71478[(7)] = inst_71436);

(statearr_71478[(8)] = inst_71435);

return statearr_71478;
})();
var statearr_71479_71507 = state_71475__$1;
(statearr_71479_71507[(2)] = null);

(statearr_71479_71507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (4))){
var inst_71439 = (state_71475[(9)]);
var inst_71439__$1 = (state_71475[(2)]);
var inst_71440 = (inst_71439__$1 == null);
var inst_71441 = cljs.core.not.call(null,inst_71440);
var state_71475__$1 = (function (){var statearr_71480 = state_71475;
(statearr_71480[(9)] = inst_71439__$1);

return statearr_71480;
})();
if(inst_71441){
var statearr_71481_71508 = state_71475__$1;
(statearr_71481_71508[(1)] = (5));

} else {
var statearr_71482_71509 = state_71475__$1;
(statearr_71482_71509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (15))){
var inst_71465 = (state_71475[(2)]);
var state_71475__$1 = state_71475;
var statearr_71483_71510 = state_71475__$1;
(statearr_71483_71510[(2)] = inst_71465);

(statearr_71483_71510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (13))){
var state_71475__$1 = state_71475;
var statearr_71484_71511 = state_71475__$1;
(statearr_71484_71511[(2)] = null);

(statearr_71484_71511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (6))){
var inst_71435 = (state_71475[(8)]);
var inst_71460 = inst_71435.length;
var inst_71461 = (inst_71460 > (0));
var state_71475__$1 = state_71475;
if(cljs.core.truth_(inst_71461)){
var statearr_71485_71512 = state_71475__$1;
(statearr_71485_71512[(1)] = (12));

} else {
var statearr_71486_71513 = state_71475__$1;
(statearr_71486_71513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (3))){
var inst_71473 = (state_71475[(2)]);
var state_71475__$1 = state_71475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71475__$1,inst_71473);
} else {
if((state_val_71476 === (12))){
var inst_71435 = (state_71475[(8)]);
var inst_71463 = cljs.core.vec.call(null,inst_71435);
var state_71475__$1 = state_71475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71475__$1,(15),out,inst_71463);
} else {
if((state_val_71476 === (2))){
var state_71475__$1 = state_71475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71475__$1,(4),ch);
} else {
if((state_val_71476 === (11))){
var inst_71439 = (state_71475[(9)]);
var inst_71443 = (state_71475[(10)]);
var inst_71453 = (state_71475[(2)]);
var inst_71454 = [];
var inst_71455 = inst_71454.push(inst_71439);
var inst_71435 = inst_71454;
var inst_71436 = inst_71443;
var state_71475__$1 = (function (){var statearr_71487 = state_71475;
(statearr_71487[(7)] = inst_71436);

(statearr_71487[(11)] = inst_71453);

(statearr_71487[(12)] = inst_71455);

(statearr_71487[(8)] = inst_71435);

return statearr_71487;
})();
var statearr_71488_71514 = state_71475__$1;
(statearr_71488_71514[(2)] = null);

(statearr_71488_71514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (9))){
var inst_71435 = (state_71475[(8)]);
var inst_71451 = cljs.core.vec.call(null,inst_71435);
var state_71475__$1 = state_71475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71475__$1,(11),out,inst_71451);
} else {
if((state_val_71476 === (5))){
var inst_71439 = (state_71475[(9)]);
var inst_71436 = (state_71475[(7)]);
var inst_71443 = (state_71475[(10)]);
var inst_71443__$1 = f.call(null,inst_71439);
var inst_71444 = cljs.core._EQ_.call(null,inst_71443__$1,inst_71436);
var inst_71445 = cljs.core.keyword_identical_QMARK_.call(null,inst_71436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71446 = (inst_71444) || (inst_71445);
var state_71475__$1 = (function (){var statearr_71489 = state_71475;
(statearr_71489[(10)] = inst_71443__$1);

return statearr_71489;
})();
if(cljs.core.truth_(inst_71446)){
var statearr_71490_71515 = state_71475__$1;
(statearr_71490_71515[(1)] = (8));

} else {
var statearr_71491_71516 = state_71475__$1;
(statearr_71491_71516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (14))){
var inst_71468 = (state_71475[(2)]);
var inst_71469 = cljs.core.async.close_BANG_.call(null,out);
var state_71475__$1 = (function (){var statearr_71493 = state_71475;
(statearr_71493[(13)] = inst_71468);

return statearr_71493;
})();
var statearr_71494_71517 = state_71475__$1;
(statearr_71494_71517[(2)] = inst_71469);

(statearr_71494_71517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (10))){
var inst_71458 = (state_71475[(2)]);
var state_71475__$1 = state_71475;
var statearr_71495_71518 = state_71475__$1;
(statearr_71495_71518[(2)] = inst_71458);

(statearr_71495_71518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71476 === (8))){
var inst_71439 = (state_71475[(9)]);
var inst_71443 = (state_71475[(10)]);
var inst_71435 = (state_71475[(8)]);
var inst_71448 = inst_71435.push(inst_71439);
var tmp71492 = inst_71435;
var inst_71435__$1 = tmp71492;
var inst_71436 = inst_71443;
var state_71475__$1 = (function (){var statearr_71496 = state_71475;
(statearr_71496[(7)] = inst_71436);

(statearr_71496[(14)] = inst_71448);

(statearr_71496[(8)] = inst_71435__$1);

return statearr_71496;
})();
var statearr_71497_71519 = state_71475__$1;
(statearr_71497_71519[(2)] = null);

(statearr_71497_71519[(1)] = (2));


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
});})(c__7043__auto___71505,out))
;
return ((function (switch__6987__auto__,c__7043__auto___71505,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_71501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71501[(0)] = state_machine__6988__auto__);

(statearr_71501[(1)] = (1));

return statearr_71501;
});
var state_machine__6988__auto____1 = (function (state_71475){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_71475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e71502){if((e71502 instanceof Object)){
var ex__6991__auto__ = e71502;
var statearr_71503_71520 = state_71475;
(statearr_71503_71520[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71521 = state_71475;
state_71475 = G__71521;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_71475){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_71475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___71505,out))
})();
var state__7045__auto__ = (function (){var statearr_71504 = f__7044__auto__.call(null);
(statearr_71504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___71505);

return statearr_71504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___71505,out))
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