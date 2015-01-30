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
if(typeof cljs.core.async.t100714 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t100714 = (function (f,fn_handler,meta100715){
this.f = f;
this.fn_handler = fn_handler;
this.meta100715 = meta100715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100714.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t100714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t100714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t100714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100716){
var self__ = this;
var _100716__$1 = this;
return self__.meta100715;
});

cljs.core.async.t100714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100716,meta100715__$1){
var self__ = this;
var _100716__$1 = this;
return (new cljs.core.async.t100714(self__.f,self__.fn_handler,meta100715__$1));
});

cljs.core.async.t100714.cljs$lang$type = true;

cljs.core.async.t100714.cljs$lang$ctorStr = "cljs.core.async/t100714";

cljs.core.async.t100714.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t100714");
});

cljs.core.async.__GT_t100714 = (function __GT_t100714(f__$1,fn_handler__$1,meta100715){
return (new cljs.core.async.t100714(f__$1,fn_handler__$1,meta100715));
});

}

return (new cljs.core.async.t100714(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__100718 = buff;
if(G__100718){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__100718.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__100718.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__100718);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__100718);
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
var val_100719 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_100719);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_100719,ret){
return (function (){
return fn1.call(null,val_100719);
});})(val_100719,ret))
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
var n__4509__auto___100720 = n;
var x_100721 = (0);
while(true){
if((x_100721 < n__4509__auto___100720)){
(a[x_100721] = (0));

var G__100722 = (x_100721 + (1));
x_100721 = G__100722;
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

var G__100723 = (i + (1));
i = G__100723;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t100727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t100727 = (function (flag,alt_flag,meta100728){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta100728 = meta100728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100727.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t100727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t100727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t100727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_100729){
var self__ = this;
var _100729__$1 = this;
return self__.meta100728;
});})(flag))
;

cljs.core.async.t100727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_100729,meta100728__$1){
var self__ = this;
var _100729__$1 = this;
return (new cljs.core.async.t100727(self__.flag,self__.alt_flag,meta100728__$1));
});})(flag))
;

cljs.core.async.t100727.cljs$lang$type = true;

cljs.core.async.t100727.cljs$lang$ctorStr = "cljs.core.async/t100727";

cljs.core.async.t100727.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t100727");
});})(flag))
;

cljs.core.async.__GT_t100727 = ((function (flag){
return (function __GT_t100727(flag__$1,alt_flag__$1,meta100728){
return (new cljs.core.async.t100727(flag__$1,alt_flag__$1,meta100728));
});})(flag))
;

}

return (new cljs.core.async.t100727(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t100733 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t100733 = (function (cb,flag,alt_handler,meta100734){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta100734 = meta100734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100733.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t100733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t100733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t100733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100735){
var self__ = this;
var _100735__$1 = this;
return self__.meta100734;
});

cljs.core.async.t100733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100735,meta100734__$1){
var self__ = this;
var _100735__$1 = this;
return (new cljs.core.async.t100733(self__.cb,self__.flag,self__.alt_handler,meta100734__$1));
});

cljs.core.async.t100733.cljs$lang$type = true;

cljs.core.async.t100733.cljs$lang$ctorStr = "cljs.core.async/t100733";

cljs.core.async.t100733.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t100733");
});

cljs.core.async.__GT_t100733 = (function __GT_t100733(cb__$1,flag__$1,alt_handler__$1,meta100734){
return (new cljs.core.async.t100733(cb__$1,flag__$1,alt_handler__$1,meta100734));
});

}

return (new cljs.core.async.t100733(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__100736_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100736_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__100737_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100737_SHARP_,port], null));
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
var G__100738 = (i + (1));
i = G__100738;
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
var alts_BANG___delegate = function (ports,p__100739){
var map__100741 = p__100739;
var map__100741__$1 = ((cljs.core.seq_QMARK_.call(null,map__100741))?cljs.core.apply.call(null,cljs.core.hash_map,map__100741):map__100741);
var opts = map__100741__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__100739 = null;
if (arguments.length > 1) {
  p__100739 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__100739);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__100742){
var ports = cljs.core.first(arglist__100742);
var p__100739 = cljs.core.rest(arglist__100742);
return alts_BANG___delegate(ports,p__100739);
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
var c__9199__auto___100837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___100837){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___100837){
return (function (state_100813){
var state_val_100814 = (state_100813[(1)]);
if((state_val_100814 === (7))){
var inst_100809 = (state_100813[(2)]);
var state_100813__$1 = state_100813;
var statearr_100815_100838 = state_100813__$1;
(statearr_100815_100838[(2)] = inst_100809);

(statearr_100815_100838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (1))){
var state_100813__$1 = state_100813;
var statearr_100816_100839 = state_100813__$1;
(statearr_100816_100839[(2)] = null);

(statearr_100816_100839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (4))){
var inst_100792 = (state_100813[(7)]);
var inst_100792__$1 = (state_100813[(2)]);
var inst_100793 = (inst_100792__$1 == null);
var state_100813__$1 = (function (){var statearr_100817 = state_100813;
(statearr_100817[(7)] = inst_100792__$1);

return statearr_100817;
})();
if(cljs.core.truth_(inst_100793)){
var statearr_100818_100840 = state_100813__$1;
(statearr_100818_100840[(1)] = (5));

} else {
var statearr_100819_100841 = state_100813__$1;
(statearr_100819_100841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (13))){
var state_100813__$1 = state_100813;
var statearr_100820_100842 = state_100813__$1;
(statearr_100820_100842[(2)] = null);

(statearr_100820_100842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (6))){
var inst_100792 = (state_100813[(7)]);
var state_100813__$1 = state_100813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100813__$1,(11),to,inst_100792);
} else {
if((state_val_100814 === (3))){
var inst_100811 = (state_100813[(2)]);
var state_100813__$1 = state_100813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100813__$1,inst_100811);
} else {
if((state_val_100814 === (12))){
var state_100813__$1 = state_100813;
var statearr_100821_100843 = state_100813__$1;
(statearr_100821_100843[(2)] = null);

(statearr_100821_100843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (2))){
var state_100813__$1 = state_100813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100813__$1,(4),from);
} else {
if((state_val_100814 === (11))){
var inst_100802 = (state_100813[(2)]);
var state_100813__$1 = state_100813;
if(cljs.core.truth_(inst_100802)){
var statearr_100822_100844 = state_100813__$1;
(statearr_100822_100844[(1)] = (12));

} else {
var statearr_100823_100845 = state_100813__$1;
(statearr_100823_100845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (9))){
var state_100813__$1 = state_100813;
var statearr_100824_100846 = state_100813__$1;
(statearr_100824_100846[(2)] = null);

(statearr_100824_100846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (5))){
var state_100813__$1 = state_100813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_100825_100847 = state_100813__$1;
(statearr_100825_100847[(1)] = (8));

} else {
var statearr_100826_100848 = state_100813__$1;
(statearr_100826_100848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (14))){
var inst_100807 = (state_100813[(2)]);
var state_100813__$1 = state_100813;
var statearr_100827_100849 = state_100813__$1;
(statearr_100827_100849[(2)] = inst_100807);

(statearr_100827_100849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (10))){
var inst_100799 = (state_100813[(2)]);
var state_100813__$1 = state_100813;
var statearr_100828_100850 = state_100813__$1;
(statearr_100828_100850[(2)] = inst_100799);

(statearr_100828_100850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100814 === (8))){
var inst_100796 = cljs.core.async.close_BANG_.call(null,to);
var state_100813__$1 = state_100813;
var statearr_100829_100851 = state_100813__$1;
(statearr_100829_100851[(2)] = inst_100796);

(statearr_100829_100851[(1)] = (10));


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
});})(c__9199__auto___100837))
;
return ((function (switch__9184__auto__,c__9199__auto___100837){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_100833 = [null,null,null,null,null,null,null,null];
(statearr_100833[(0)] = state_machine__9185__auto__);

(statearr_100833[(1)] = (1));

return statearr_100833;
});
var state_machine__9185__auto____1 = (function (state_100813){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_100813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e100834){if((e100834 instanceof Object)){
var ex__9188__auto__ = e100834;
var statearr_100835_100852 = state_100813;
(statearr_100835_100852[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100853 = state_100813;
state_100813 = G__100853;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_100813){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_100813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___100837))
})();
var state__9201__auto__ = (function (){var statearr_100836 = f__9200__auto__.call(null);
(statearr_100836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___100837);

return statearr_100836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___100837))
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
return (function (p__101037){
var vec__101038 = p__101037;
var v = cljs.core.nth.call(null,vec__101038,(0),null);
var p = cljs.core.nth.call(null,vec__101038,(1),null);
var job = vec__101038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___101220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results){
return (function (state_101043){
var state_val_101044 = (state_101043[(1)]);
if((state_val_101044 === (2))){
var inst_101040 = (state_101043[(2)]);
var inst_101041 = cljs.core.async.close_BANG_.call(null,res);
var state_101043__$1 = (function (){var statearr_101045 = state_101043;
(statearr_101045[(7)] = inst_101040);

return statearr_101045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101043__$1,inst_101041);
} else {
if((state_val_101044 === (1))){
var state_101043__$1 = state_101043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101043__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_101049 = [null,null,null,null,null,null,null,null];
(statearr_101049[(0)] = state_machine__9185__auto__);

(statearr_101049[(1)] = (1));

return statearr_101049;
});
var state_machine__9185__auto____1 = (function (state_101043){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101050){if((e101050 instanceof Object)){
var ex__9188__auto__ = e101050;
var statearr_101051_101221 = state_101043;
(statearr_101051_101221[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101222 = state_101043;
state_101043 = G__101222;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101043){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_101052 = f__9200__auto__.call(null);
(statearr_101052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___101220);

return statearr_101052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___101220,res,vec__101038,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__101053){
var vec__101054 = p__101053;
var v = cljs.core.nth.call(null,vec__101054,(0),null);
var p = cljs.core.nth.call(null,vec__101054,(1),null);
var job = vec__101054;
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
var n__4509__auto___101223 = n;
var __101224 = (0);
while(true){
if((__101224 < n__4509__auto___101223)){
var G__101055_101225 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__101055_101225) {
case "async":
var c__9199__auto___101227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__101224,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__101224,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function (state_101068){
var state_val_101069 = (state_101068[(1)]);
if((state_val_101069 === (7))){
var inst_101064 = (state_101068[(2)]);
var state_101068__$1 = state_101068;
var statearr_101070_101228 = state_101068__$1;
(statearr_101070_101228[(2)] = inst_101064);

(statearr_101070_101228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101069 === (6))){
var state_101068__$1 = state_101068;
var statearr_101071_101229 = state_101068__$1;
(statearr_101071_101229[(2)] = null);

(statearr_101071_101229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101069 === (5))){
var state_101068__$1 = state_101068;
var statearr_101072_101230 = state_101068__$1;
(statearr_101072_101230[(2)] = null);

(statearr_101072_101230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101069 === (4))){
var inst_101058 = (state_101068[(2)]);
var inst_101059 = async.call(null,inst_101058);
var state_101068__$1 = state_101068;
if(cljs.core.truth_(inst_101059)){
var statearr_101073_101231 = state_101068__$1;
(statearr_101073_101231[(1)] = (5));

} else {
var statearr_101074_101232 = state_101068__$1;
(statearr_101074_101232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101069 === (3))){
var inst_101066 = (state_101068[(2)]);
var state_101068__$1 = state_101068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101068__$1,inst_101066);
} else {
if((state_val_101069 === (2))){
var state_101068__$1 = state_101068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101068__$1,(4),jobs);
} else {
if((state_val_101069 === (1))){
var state_101068__$1 = state_101068;
var statearr_101075_101233 = state_101068__$1;
(statearr_101075_101233[(2)] = null);

(statearr_101075_101233[(1)] = (2));


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
});})(__101224,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
;
return ((function (__101224,switch__9184__auto__,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_101079 = [null,null,null,null,null,null,null];
(statearr_101079[(0)] = state_machine__9185__auto__);

(statearr_101079[(1)] = (1));

return statearr_101079;
});
var state_machine__9185__auto____1 = (function (state_101068){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101080){if((e101080 instanceof Object)){
var ex__9188__auto__ = e101080;
var statearr_101081_101234 = state_101068;
(statearr_101081_101234[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101235 = state_101068;
state_101068 = G__101235;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101068){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__101224,switch__9184__auto__,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_101082 = f__9200__auto__.call(null);
(statearr_101082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___101227);

return statearr_101082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__101224,c__9199__auto___101227,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___101236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__101224,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__101224,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function (state_101095){
var state_val_101096 = (state_101095[(1)]);
if((state_val_101096 === (7))){
var inst_101091 = (state_101095[(2)]);
var state_101095__$1 = state_101095;
var statearr_101097_101237 = state_101095__$1;
(statearr_101097_101237[(2)] = inst_101091);

(statearr_101097_101237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101096 === (6))){
var state_101095__$1 = state_101095;
var statearr_101098_101238 = state_101095__$1;
(statearr_101098_101238[(2)] = null);

(statearr_101098_101238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101096 === (5))){
var state_101095__$1 = state_101095;
var statearr_101099_101239 = state_101095__$1;
(statearr_101099_101239[(2)] = null);

(statearr_101099_101239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101096 === (4))){
var inst_101085 = (state_101095[(2)]);
var inst_101086 = process.call(null,inst_101085);
var state_101095__$1 = state_101095;
if(cljs.core.truth_(inst_101086)){
var statearr_101100_101240 = state_101095__$1;
(statearr_101100_101240[(1)] = (5));

} else {
var statearr_101101_101241 = state_101095__$1;
(statearr_101101_101241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101096 === (3))){
var inst_101093 = (state_101095[(2)]);
var state_101095__$1 = state_101095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101095__$1,inst_101093);
} else {
if((state_val_101096 === (2))){
var state_101095__$1 = state_101095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101095__$1,(4),jobs);
} else {
if((state_val_101096 === (1))){
var state_101095__$1 = state_101095;
var statearr_101102_101242 = state_101095__$1;
(statearr_101102_101242[(2)] = null);

(statearr_101102_101242[(1)] = (2));


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
});})(__101224,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
;
return ((function (__101224,switch__9184__auto__,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_101106 = [null,null,null,null,null,null,null];
(statearr_101106[(0)] = state_machine__9185__auto__);

(statearr_101106[(1)] = (1));

return statearr_101106;
});
var state_machine__9185__auto____1 = (function (state_101095){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101107){if((e101107 instanceof Object)){
var ex__9188__auto__ = e101107;
var statearr_101108_101243 = state_101095;
(statearr_101108_101243[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101244 = state_101095;
state_101095 = G__101244;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101095){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__101224,switch__9184__auto__,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_101109 = f__9200__auto__.call(null);
(statearr_101109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___101236);

return statearr_101109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__101224,c__9199__auto___101236,G__101055_101225,n__4509__auto___101223,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__101245 = (__101224 + (1));
__101224 = G__101245;
continue;
} else {
}
break;
}

var c__9199__auto___101246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___101246,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___101246,jobs,results,process,async){
return (function (state_101131){
var state_val_101132 = (state_101131[(1)]);
if((state_val_101132 === (9))){
var inst_101124 = (state_101131[(2)]);
var state_101131__$1 = (function (){var statearr_101133 = state_101131;
(statearr_101133[(7)] = inst_101124);

return statearr_101133;
})();
var statearr_101134_101247 = state_101131__$1;
(statearr_101134_101247[(2)] = null);

(statearr_101134_101247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101132 === (8))){
var inst_101117 = (state_101131[(8)]);
var inst_101122 = (state_101131[(2)]);
var state_101131__$1 = (function (){var statearr_101135 = state_101131;
(statearr_101135[(9)] = inst_101122);

return statearr_101135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101131__$1,(9),results,inst_101117);
} else {
if((state_val_101132 === (7))){
var inst_101127 = (state_101131[(2)]);
var state_101131__$1 = state_101131;
var statearr_101136_101248 = state_101131__$1;
(statearr_101136_101248[(2)] = inst_101127);

(statearr_101136_101248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101132 === (6))){
var inst_101112 = (state_101131[(10)]);
var inst_101117 = (state_101131[(8)]);
var inst_101117__$1 = cljs.core.async.chan.call(null,(1));
var inst_101118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_101119 = [inst_101112,inst_101117__$1];
var inst_101120 = (new cljs.core.PersistentVector(null,2,(5),inst_101118,inst_101119,null));
var state_101131__$1 = (function (){var statearr_101137 = state_101131;
(statearr_101137[(8)] = inst_101117__$1);

return statearr_101137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101131__$1,(8),jobs,inst_101120);
} else {
if((state_val_101132 === (5))){
var inst_101115 = cljs.core.async.close_BANG_.call(null,jobs);
var state_101131__$1 = state_101131;
var statearr_101138_101249 = state_101131__$1;
(statearr_101138_101249[(2)] = inst_101115);

(statearr_101138_101249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101132 === (4))){
var inst_101112 = (state_101131[(10)]);
var inst_101112__$1 = (state_101131[(2)]);
var inst_101113 = (inst_101112__$1 == null);
var state_101131__$1 = (function (){var statearr_101139 = state_101131;
(statearr_101139[(10)] = inst_101112__$1);

return statearr_101139;
})();
if(cljs.core.truth_(inst_101113)){
var statearr_101140_101250 = state_101131__$1;
(statearr_101140_101250[(1)] = (5));

} else {
var statearr_101141_101251 = state_101131__$1;
(statearr_101141_101251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101132 === (3))){
var inst_101129 = (state_101131[(2)]);
var state_101131__$1 = state_101131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101131__$1,inst_101129);
} else {
if((state_val_101132 === (2))){
var state_101131__$1 = state_101131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101131__$1,(4),from);
} else {
if((state_val_101132 === (1))){
var state_101131__$1 = state_101131;
var statearr_101142_101252 = state_101131__$1;
(statearr_101142_101252[(2)] = null);

(statearr_101142_101252[(1)] = (2));


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
});})(c__9199__auto___101246,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___101246,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_101146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_101146[(0)] = state_machine__9185__auto__);

(statearr_101146[(1)] = (1));

return statearr_101146;
});
var state_machine__9185__auto____1 = (function (state_101131){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101147){if((e101147 instanceof Object)){
var ex__9188__auto__ = e101147;
var statearr_101148_101253 = state_101131;
(statearr_101148_101253[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101254 = state_101131;
state_101131 = G__101254;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101131){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___101246,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_101149 = f__9200__auto__.call(null);
(statearr_101149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___101246);

return statearr_101149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___101246,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_101187){
var state_val_101188 = (state_101187[(1)]);
if((state_val_101188 === (7))){
var inst_101183 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
var statearr_101189_101255 = state_101187__$1;
(statearr_101189_101255[(2)] = inst_101183);

(statearr_101189_101255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (20))){
var state_101187__$1 = state_101187;
var statearr_101190_101256 = state_101187__$1;
(statearr_101190_101256[(2)] = null);

(statearr_101190_101256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (1))){
var state_101187__$1 = state_101187;
var statearr_101191_101257 = state_101187__$1;
(statearr_101191_101257[(2)] = null);

(statearr_101191_101257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (4))){
var inst_101152 = (state_101187[(7)]);
var inst_101152__$1 = (state_101187[(2)]);
var inst_101153 = (inst_101152__$1 == null);
var state_101187__$1 = (function (){var statearr_101192 = state_101187;
(statearr_101192[(7)] = inst_101152__$1);

return statearr_101192;
})();
if(cljs.core.truth_(inst_101153)){
var statearr_101193_101258 = state_101187__$1;
(statearr_101193_101258[(1)] = (5));

} else {
var statearr_101194_101259 = state_101187__$1;
(statearr_101194_101259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (15))){
var inst_101165 = (state_101187[(8)]);
var state_101187__$1 = state_101187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101187__$1,(18),to,inst_101165);
} else {
if((state_val_101188 === (21))){
var inst_101178 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
var statearr_101195_101260 = state_101187__$1;
(statearr_101195_101260[(2)] = inst_101178);

(statearr_101195_101260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (13))){
var inst_101180 = (state_101187[(2)]);
var state_101187__$1 = (function (){var statearr_101196 = state_101187;
(statearr_101196[(9)] = inst_101180);

return statearr_101196;
})();
var statearr_101197_101261 = state_101187__$1;
(statearr_101197_101261[(2)] = null);

(statearr_101197_101261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (6))){
var inst_101152 = (state_101187[(7)]);
var state_101187__$1 = state_101187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101187__$1,(11),inst_101152);
} else {
if((state_val_101188 === (17))){
var inst_101173 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
if(cljs.core.truth_(inst_101173)){
var statearr_101198_101262 = state_101187__$1;
(statearr_101198_101262[(1)] = (19));

} else {
var statearr_101199_101263 = state_101187__$1;
(statearr_101199_101263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (3))){
var inst_101185 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101187__$1,inst_101185);
} else {
if((state_val_101188 === (12))){
var inst_101162 = (state_101187[(10)]);
var state_101187__$1 = state_101187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101187__$1,(14),inst_101162);
} else {
if((state_val_101188 === (2))){
var state_101187__$1 = state_101187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101187__$1,(4),results);
} else {
if((state_val_101188 === (19))){
var state_101187__$1 = state_101187;
var statearr_101200_101264 = state_101187__$1;
(statearr_101200_101264[(2)] = null);

(statearr_101200_101264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (11))){
var inst_101162 = (state_101187[(2)]);
var state_101187__$1 = (function (){var statearr_101201 = state_101187;
(statearr_101201[(10)] = inst_101162);

return statearr_101201;
})();
var statearr_101202_101265 = state_101187__$1;
(statearr_101202_101265[(2)] = null);

(statearr_101202_101265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (9))){
var state_101187__$1 = state_101187;
var statearr_101203_101266 = state_101187__$1;
(statearr_101203_101266[(2)] = null);

(statearr_101203_101266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (5))){
var state_101187__$1 = state_101187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_101204_101267 = state_101187__$1;
(statearr_101204_101267[(1)] = (8));

} else {
var statearr_101205_101268 = state_101187__$1;
(statearr_101205_101268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (14))){
var inst_101165 = (state_101187[(8)]);
var inst_101167 = (state_101187[(11)]);
var inst_101165__$1 = (state_101187[(2)]);
var inst_101166 = (inst_101165__$1 == null);
var inst_101167__$1 = cljs.core.not.call(null,inst_101166);
var state_101187__$1 = (function (){var statearr_101206 = state_101187;
(statearr_101206[(8)] = inst_101165__$1);

(statearr_101206[(11)] = inst_101167__$1);

return statearr_101206;
})();
if(inst_101167__$1){
var statearr_101207_101269 = state_101187__$1;
(statearr_101207_101269[(1)] = (15));

} else {
var statearr_101208_101270 = state_101187__$1;
(statearr_101208_101270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (16))){
var inst_101167 = (state_101187[(11)]);
var state_101187__$1 = state_101187;
var statearr_101209_101271 = state_101187__$1;
(statearr_101209_101271[(2)] = inst_101167);

(statearr_101209_101271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (10))){
var inst_101159 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
var statearr_101210_101272 = state_101187__$1;
(statearr_101210_101272[(2)] = inst_101159);

(statearr_101210_101272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (18))){
var inst_101170 = (state_101187[(2)]);
var state_101187__$1 = state_101187;
var statearr_101211_101273 = state_101187__$1;
(statearr_101211_101273[(2)] = inst_101170);

(statearr_101211_101273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101188 === (8))){
var inst_101156 = cljs.core.async.close_BANG_.call(null,to);
var state_101187__$1 = state_101187;
var statearr_101212_101274 = state_101187__$1;
(statearr_101212_101274[(2)] = inst_101156);

(statearr_101212_101274[(1)] = (10));


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
var statearr_101216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101216[(0)] = state_machine__9185__auto__);

(statearr_101216[(1)] = (1));

return statearr_101216;
});
var state_machine__9185__auto____1 = (function (state_101187){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101217){if((e101217 instanceof Object)){
var ex__9188__auto__ = e101217;
var statearr_101218_101275 = state_101187;
(statearr_101218_101275[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101276 = state_101187;
state_101187 = G__101276;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101187){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_101219 = f__9200__auto__.call(null);
(statearr_101219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_101219;
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
var c__9199__auto___101377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___101377,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___101377,tc,fc){
return (function (state_101352){
var state_val_101353 = (state_101352[(1)]);
if((state_val_101353 === (7))){
var inst_101348 = (state_101352[(2)]);
var state_101352__$1 = state_101352;
var statearr_101354_101378 = state_101352__$1;
(statearr_101354_101378[(2)] = inst_101348);

(statearr_101354_101378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (1))){
var state_101352__$1 = state_101352;
var statearr_101355_101379 = state_101352__$1;
(statearr_101355_101379[(2)] = null);

(statearr_101355_101379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (4))){
var inst_101329 = (state_101352[(7)]);
var inst_101329__$1 = (state_101352[(2)]);
var inst_101330 = (inst_101329__$1 == null);
var state_101352__$1 = (function (){var statearr_101356 = state_101352;
(statearr_101356[(7)] = inst_101329__$1);

return statearr_101356;
})();
if(cljs.core.truth_(inst_101330)){
var statearr_101357_101380 = state_101352__$1;
(statearr_101357_101380[(1)] = (5));

} else {
var statearr_101358_101381 = state_101352__$1;
(statearr_101358_101381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (13))){
var state_101352__$1 = state_101352;
var statearr_101359_101382 = state_101352__$1;
(statearr_101359_101382[(2)] = null);

(statearr_101359_101382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (6))){
var inst_101329 = (state_101352[(7)]);
var inst_101335 = p.call(null,inst_101329);
var state_101352__$1 = state_101352;
if(cljs.core.truth_(inst_101335)){
var statearr_101360_101383 = state_101352__$1;
(statearr_101360_101383[(1)] = (9));

} else {
var statearr_101361_101384 = state_101352__$1;
(statearr_101361_101384[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (3))){
var inst_101350 = (state_101352[(2)]);
var state_101352__$1 = state_101352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101352__$1,inst_101350);
} else {
if((state_val_101353 === (12))){
var state_101352__$1 = state_101352;
var statearr_101362_101385 = state_101352__$1;
(statearr_101362_101385[(2)] = null);

(statearr_101362_101385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (2))){
var state_101352__$1 = state_101352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101352__$1,(4),ch);
} else {
if((state_val_101353 === (11))){
var inst_101329 = (state_101352[(7)]);
var inst_101339 = (state_101352[(2)]);
var state_101352__$1 = state_101352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101352__$1,(8),inst_101339,inst_101329);
} else {
if((state_val_101353 === (9))){
var state_101352__$1 = state_101352;
var statearr_101363_101386 = state_101352__$1;
(statearr_101363_101386[(2)] = tc);

(statearr_101363_101386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (5))){
var inst_101332 = cljs.core.async.close_BANG_.call(null,tc);
var inst_101333 = cljs.core.async.close_BANG_.call(null,fc);
var state_101352__$1 = (function (){var statearr_101364 = state_101352;
(statearr_101364[(8)] = inst_101332);

return statearr_101364;
})();
var statearr_101365_101387 = state_101352__$1;
(statearr_101365_101387[(2)] = inst_101333);

(statearr_101365_101387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (14))){
var inst_101346 = (state_101352[(2)]);
var state_101352__$1 = state_101352;
var statearr_101366_101388 = state_101352__$1;
(statearr_101366_101388[(2)] = inst_101346);

(statearr_101366_101388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (10))){
var state_101352__$1 = state_101352;
var statearr_101367_101389 = state_101352__$1;
(statearr_101367_101389[(2)] = fc);

(statearr_101367_101389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101353 === (8))){
var inst_101341 = (state_101352[(2)]);
var state_101352__$1 = state_101352;
if(cljs.core.truth_(inst_101341)){
var statearr_101368_101390 = state_101352__$1;
(statearr_101368_101390[(1)] = (12));

} else {
var statearr_101369_101391 = state_101352__$1;
(statearr_101369_101391[(1)] = (13));

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
});})(c__9199__auto___101377,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___101377,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_101373 = [null,null,null,null,null,null,null,null,null];
(statearr_101373[(0)] = state_machine__9185__auto__);

(statearr_101373[(1)] = (1));

return statearr_101373;
});
var state_machine__9185__auto____1 = (function (state_101352){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101374){if((e101374 instanceof Object)){
var ex__9188__auto__ = e101374;
var statearr_101375_101392 = state_101352;
(statearr_101375_101392[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101393 = state_101352;
state_101352 = G__101393;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101352){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___101377,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_101376 = f__9200__auto__.call(null);
(statearr_101376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___101377);

return statearr_101376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___101377,tc,fc))
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
return (function (state_101440){
var state_val_101441 = (state_101440[(1)]);
if((state_val_101441 === (7))){
var inst_101436 = (state_101440[(2)]);
var state_101440__$1 = state_101440;
var statearr_101442_101458 = state_101440__$1;
(statearr_101442_101458[(2)] = inst_101436);

(statearr_101442_101458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101441 === (6))){
var inst_101426 = (state_101440[(7)]);
var inst_101429 = (state_101440[(8)]);
var inst_101433 = f.call(null,inst_101426,inst_101429);
var inst_101426__$1 = inst_101433;
var state_101440__$1 = (function (){var statearr_101443 = state_101440;
(statearr_101443[(7)] = inst_101426__$1);

return statearr_101443;
})();
var statearr_101444_101459 = state_101440__$1;
(statearr_101444_101459[(2)] = null);

(statearr_101444_101459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101441 === (5))){
var inst_101426 = (state_101440[(7)]);
var state_101440__$1 = state_101440;
var statearr_101445_101460 = state_101440__$1;
(statearr_101445_101460[(2)] = inst_101426);

(statearr_101445_101460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101441 === (4))){
var inst_101429 = (state_101440[(8)]);
var inst_101429__$1 = (state_101440[(2)]);
var inst_101430 = (inst_101429__$1 == null);
var state_101440__$1 = (function (){var statearr_101446 = state_101440;
(statearr_101446[(8)] = inst_101429__$1);

return statearr_101446;
})();
if(cljs.core.truth_(inst_101430)){
var statearr_101447_101461 = state_101440__$1;
(statearr_101447_101461[(1)] = (5));

} else {
var statearr_101448_101462 = state_101440__$1;
(statearr_101448_101462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101441 === (3))){
var inst_101438 = (state_101440[(2)]);
var state_101440__$1 = state_101440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101440__$1,inst_101438);
} else {
if((state_val_101441 === (2))){
var state_101440__$1 = state_101440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101440__$1,(4),ch);
} else {
if((state_val_101441 === (1))){
var inst_101426 = init;
var state_101440__$1 = (function (){var statearr_101449 = state_101440;
(statearr_101449[(7)] = inst_101426);

return statearr_101449;
})();
var statearr_101450_101463 = state_101440__$1;
(statearr_101450_101463[(2)] = null);

(statearr_101450_101463[(1)] = (2));


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
var statearr_101454 = [null,null,null,null,null,null,null,null,null];
(statearr_101454[(0)] = state_machine__9185__auto__);

(statearr_101454[(1)] = (1));

return statearr_101454;
});
var state_machine__9185__auto____1 = (function (state_101440){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101455){if((e101455 instanceof Object)){
var ex__9188__auto__ = e101455;
var statearr_101456_101464 = state_101440;
(statearr_101456_101464[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101465 = state_101440;
state_101440 = G__101465;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101440){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_101457 = f__9200__auto__.call(null);
(statearr_101457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_101457;
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
return (function (state_101539){
var state_val_101540 = (state_101539[(1)]);
if((state_val_101540 === (7))){
var inst_101521 = (state_101539[(2)]);
var state_101539__$1 = state_101539;
var statearr_101541_101564 = state_101539__$1;
(statearr_101541_101564[(2)] = inst_101521);

(statearr_101541_101564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (1))){
var inst_101515 = cljs.core.seq.call(null,coll);
var inst_101516 = inst_101515;
var state_101539__$1 = (function (){var statearr_101542 = state_101539;
(statearr_101542[(7)] = inst_101516);

return statearr_101542;
})();
var statearr_101543_101565 = state_101539__$1;
(statearr_101543_101565[(2)] = null);

(statearr_101543_101565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (4))){
var inst_101516 = (state_101539[(7)]);
var inst_101519 = cljs.core.first.call(null,inst_101516);
var state_101539__$1 = state_101539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101539__$1,(7),ch,inst_101519);
} else {
if((state_val_101540 === (13))){
var inst_101533 = (state_101539[(2)]);
var state_101539__$1 = state_101539;
var statearr_101544_101566 = state_101539__$1;
(statearr_101544_101566[(2)] = inst_101533);

(statearr_101544_101566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (6))){
var inst_101524 = (state_101539[(2)]);
var state_101539__$1 = state_101539;
if(cljs.core.truth_(inst_101524)){
var statearr_101545_101567 = state_101539__$1;
(statearr_101545_101567[(1)] = (8));

} else {
var statearr_101546_101568 = state_101539__$1;
(statearr_101546_101568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (3))){
var inst_101537 = (state_101539[(2)]);
var state_101539__$1 = state_101539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101539__$1,inst_101537);
} else {
if((state_val_101540 === (12))){
var state_101539__$1 = state_101539;
var statearr_101547_101569 = state_101539__$1;
(statearr_101547_101569[(2)] = null);

(statearr_101547_101569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (2))){
var inst_101516 = (state_101539[(7)]);
var state_101539__$1 = state_101539;
if(cljs.core.truth_(inst_101516)){
var statearr_101548_101570 = state_101539__$1;
(statearr_101548_101570[(1)] = (4));

} else {
var statearr_101549_101571 = state_101539__$1;
(statearr_101549_101571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (11))){
var inst_101530 = cljs.core.async.close_BANG_.call(null,ch);
var state_101539__$1 = state_101539;
var statearr_101550_101572 = state_101539__$1;
(statearr_101550_101572[(2)] = inst_101530);

(statearr_101550_101572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (9))){
var state_101539__$1 = state_101539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_101551_101573 = state_101539__$1;
(statearr_101551_101573[(1)] = (11));

} else {
var statearr_101552_101574 = state_101539__$1;
(statearr_101552_101574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (5))){
var inst_101516 = (state_101539[(7)]);
var state_101539__$1 = state_101539;
var statearr_101553_101575 = state_101539__$1;
(statearr_101553_101575[(2)] = inst_101516);

(statearr_101553_101575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (10))){
var inst_101535 = (state_101539[(2)]);
var state_101539__$1 = state_101539;
var statearr_101554_101576 = state_101539__$1;
(statearr_101554_101576[(2)] = inst_101535);

(statearr_101554_101576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101540 === (8))){
var inst_101516 = (state_101539[(7)]);
var inst_101526 = cljs.core.next.call(null,inst_101516);
var inst_101516__$1 = inst_101526;
var state_101539__$1 = (function (){var statearr_101555 = state_101539;
(statearr_101555[(7)] = inst_101516__$1);

return statearr_101555;
})();
var statearr_101556_101577 = state_101539__$1;
(statearr_101556_101577[(2)] = null);

(statearr_101556_101577[(1)] = (2));


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
var statearr_101560 = [null,null,null,null,null,null,null,null];
(statearr_101560[(0)] = state_machine__9185__auto__);

(statearr_101560[(1)] = (1));

return statearr_101560;
});
var state_machine__9185__auto____1 = (function (state_101539){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e101561){if((e101561 instanceof Object)){
var ex__9188__auto__ = e101561;
var statearr_101562_101578 = state_101539;
(statearr_101562_101578[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101579 = state_101539;
state_101539 = G__101579;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101539){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_101563 = f__9200__auto__.call(null);
(statearr_101563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_101563;
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

cljs.core.async.Mux = (function (){var obj101581 = {};
return obj101581;
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


cljs.core.async.Mult = (function (){var obj101583 = {};
return obj101583;
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
if(typeof cljs.core.async.t101805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t101805 = (function (cs,ch,mult,meta101806){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta101806 = meta101806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t101805.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t101805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t101805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t101805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t101805.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t101805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t101805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_101807){
var self__ = this;
var _101807__$1 = this;
return self__.meta101806;
});})(cs))
;

cljs.core.async.t101805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_101807,meta101806__$1){
var self__ = this;
var _101807__$1 = this;
return (new cljs.core.async.t101805(self__.cs,self__.ch,self__.mult,meta101806__$1));
});})(cs))
;

cljs.core.async.t101805.cljs$lang$type = true;

cljs.core.async.t101805.cljs$lang$ctorStr = "cljs.core.async/t101805";

cljs.core.async.t101805.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t101805");
});})(cs))
;

cljs.core.async.__GT_t101805 = ((function (cs){
return (function __GT_t101805(cs__$1,ch__$1,mult__$1,meta101806){
return (new cljs.core.async.t101805(cs__$1,ch__$1,mult__$1,meta101806));
});})(cs))
;

}

return (new cljs.core.async.t101805(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___102026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___102026,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___102026,cs,m,dchan,dctr,done){
return (function (state_101938){
var state_val_101939 = (state_101938[(1)]);
if((state_val_101939 === (7))){
var inst_101934 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101940_102027 = state_101938__$1;
(statearr_101940_102027[(2)] = inst_101934);

(statearr_101940_102027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (20))){
var inst_101839 = (state_101938[(7)]);
var inst_101849 = cljs.core.first.call(null,inst_101839);
var inst_101850 = cljs.core.nth.call(null,inst_101849,(0),null);
var inst_101851 = cljs.core.nth.call(null,inst_101849,(1),null);
var state_101938__$1 = (function (){var statearr_101941 = state_101938;
(statearr_101941[(8)] = inst_101850);

return statearr_101941;
})();
if(cljs.core.truth_(inst_101851)){
var statearr_101942_102028 = state_101938__$1;
(statearr_101942_102028[(1)] = (22));

} else {
var statearr_101943_102029 = state_101938__$1;
(statearr_101943_102029[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (27))){
var inst_101879 = (state_101938[(9)]);
var inst_101881 = (state_101938[(10)]);
var inst_101810 = (state_101938[(11)]);
var inst_101886 = (state_101938[(12)]);
var inst_101886__$1 = cljs.core._nth.call(null,inst_101879,inst_101881);
var inst_101887 = cljs.core.async.put_BANG_.call(null,inst_101886__$1,inst_101810,done);
var state_101938__$1 = (function (){var statearr_101944 = state_101938;
(statearr_101944[(12)] = inst_101886__$1);

return statearr_101944;
})();
if(cljs.core.truth_(inst_101887)){
var statearr_101945_102030 = state_101938__$1;
(statearr_101945_102030[(1)] = (30));

} else {
var statearr_101946_102031 = state_101938__$1;
(statearr_101946_102031[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (1))){
var state_101938__$1 = state_101938;
var statearr_101947_102032 = state_101938__$1;
(statearr_101947_102032[(2)] = null);

(statearr_101947_102032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (24))){
var inst_101839 = (state_101938[(7)]);
var inst_101856 = (state_101938[(2)]);
var inst_101857 = cljs.core.next.call(null,inst_101839);
var inst_101819 = inst_101857;
var inst_101820 = null;
var inst_101821 = (0);
var inst_101822 = (0);
var state_101938__$1 = (function (){var statearr_101948 = state_101938;
(statearr_101948[(13)] = inst_101820);

(statearr_101948[(14)] = inst_101819);

(statearr_101948[(15)] = inst_101821);

(statearr_101948[(16)] = inst_101822);

(statearr_101948[(17)] = inst_101856);

return statearr_101948;
})();
var statearr_101949_102033 = state_101938__$1;
(statearr_101949_102033[(2)] = null);

(statearr_101949_102033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (39))){
var state_101938__$1 = state_101938;
var statearr_101953_102034 = state_101938__$1;
(statearr_101953_102034[(2)] = null);

(statearr_101953_102034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (4))){
var inst_101810 = (state_101938[(11)]);
var inst_101810__$1 = (state_101938[(2)]);
var inst_101811 = (inst_101810__$1 == null);
var state_101938__$1 = (function (){var statearr_101954 = state_101938;
(statearr_101954[(11)] = inst_101810__$1);

return statearr_101954;
})();
if(cljs.core.truth_(inst_101811)){
var statearr_101955_102035 = state_101938__$1;
(statearr_101955_102035[(1)] = (5));

} else {
var statearr_101956_102036 = state_101938__$1;
(statearr_101956_102036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (15))){
var inst_101820 = (state_101938[(13)]);
var inst_101819 = (state_101938[(14)]);
var inst_101821 = (state_101938[(15)]);
var inst_101822 = (state_101938[(16)]);
var inst_101835 = (state_101938[(2)]);
var inst_101836 = (inst_101822 + (1));
var tmp101950 = inst_101820;
var tmp101951 = inst_101819;
var tmp101952 = inst_101821;
var inst_101819__$1 = tmp101951;
var inst_101820__$1 = tmp101950;
var inst_101821__$1 = tmp101952;
var inst_101822__$1 = inst_101836;
var state_101938__$1 = (function (){var statearr_101957 = state_101938;
(statearr_101957[(13)] = inst_101820__$1);

(statearr_101957[(14)] = inst_101819__$1);

(statearr_101957[(15)] = inst_101821__$1);

(statearr_101957[(18)] = inst_101835);

(statearr_101957[(16)] = inst_101822__$1);

return statearr_101957;
})();
var statearr_101958_102037 = state_101938__$1;
(statearr_101958_102037[(2)] = null);

(statearr_101958_102037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (21))){
var inst_101860 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101962_102038 = state_101938__$1;
(statearr_101962_102038[(2)] = inst_101860);

(statearr_101962_102038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (31))){
var inst_101886 = (state_101938[(12)]);
var inst_101890 = done.call(null,null);
var inst_101891 = cljs.core.async.untap_STAR_.call(null,m,inst_101886);
var state_101938__$1 = (function (){var statearr_101963 = state_101938;
(statearr_101963[(19)] = inst_101890);

return statearr_101963;
})();
var statearr_101964_102039 = state_101938__$1;
(statearr_101964_102039[(2)] = inst_101891);

(statearr_101964_102039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (32))){
var inst_101878 = (state_101938[(20)]);
var inst_101879 = (state_101938[(9)]);
var inst_101881 = (state_101938[(10)]);
var inst_101880 = (state_101938[(21)]);
var inst_101893 = (state_101938[(2)]);
var inst_101894 = (inst_101881 + (1));
var tmp101959 = inst_101878;
var tmp101960 = inst_101879;
var tmp101961 = inst_101880;
var inst_101878__$1 = tmp101959;
var inst_101879__$1 = tmp101960;
var inst_101880__$1 = tmp101961;
var inst_101881__$1 = inst_101894;
var state_101938__$1 = (function (){var statearr_101965 = state_101938;
(statearr_101965[(20)] = inst_101878__$1);

(statearr_101965[(9)] = inst_101879__$1);

(statearr_101965[(10)] = inst_101881__$1);

(statearr_101965[(21)] = inst_101880__$1);

(statearr_101965[(22)] = inst_101893);

return statearr_101965;
})();
var statearr_101966_102040 = state_101938__$1;
(statearr_101966_102040[(2)] = null);

(statearr_101966_102040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (40))){
var inst_101906 = (state_101938[(23)]);
var inst_101910 = done.call(null,null);
var inst_101911 = cljs.core.async.untap_STAR_.call(null,m,inst_101906);
var state_101938__$1 = (function (){var statearr_101967 = state_101938;
(statearr_101967[(24)] = inst_101910);

return statearr_101967;
})();
var statearr_101968_102041 = state_101938__$1;
(statearr_101968_102041[(2)] = inst_101911);

(statearr_101968_102041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (33))){
var inst_101897 = (state_101938[(25)]);
var inst_101899 = cljs.core.chunked_seq_QMARK_.call(null,inst_101897);
var state_101938__$1 = state_101938;
if(inst_101899){
var statearr_101969_102042 = state_101938__$1;
(statearr_101969_102042[(1)] = (36));

} else {
var statearr_101970_102043 = state_101938__$1;
(statearr_101970_102043[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (13))){
var inst_101829 = (state_101938[(26)]);
var inst_101832 = cljs.core.async.close_BANG_.call(null,inst_101829);
var state_101938__$1 = state_101938;
var statearr_101971_102044 = state_101938__$1;
(statearr_101971_102044[(2)] = inst_101832);

(statearr_101971_102044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (22))){
var inst_101850 = (state_101938[(8)]);
var inst_101853 = cljs.core.async.close_BANG_.call(null,inst_101850);
var state_101938__$1 = state_101938;
var statearr_101972_102045 = state_101938__$1;
(statearr_101972_102045[(2)] = inst_101853);

(statearr_101972_102045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (36))){
var inst_101897 = (state_101938[(25)]);
var inst_101901 = cljs.core.chunk_first.call(null,inst_101897);
var inst_101902 = cljs.core.chunk_rest.call(null,inst_101897);
var inst_101903 = cljs.core.count.call(null,inst_101901);
var inst_101878 = inst_101902;
var inst_101879 = inst_101901;
var inst_101880 = inst_101903;
var inst_101881 = (0);
var state_101938__$1 = (function (){var statearr_101973 = state_101938;
(statearr_101973[(20)] = inst_101878);

(statearr_101973[(9)] = inst_101879);

(statearr_101973[(10)] = inst_101881);

(statearr_101973[(21)] = inst_101880);

return statearr_101973;
})();
var statearr_101974_102046 = state_101938__$1;
(statearr_101974_102046[(2)] = null);

(statearr_101974_102046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (41))){
var inst_101897 = (state_101938[(25)]);
var inst_101913 = (state_101938[(2)]);
var inst_101914 = cljs.core.next.call(null,inst_101897);
var inst_101878 = inst_101914;
var inst_101879 = null;
var inst_101880 = (0);
var inst_101881 = (0);
var state_101938__$1 = (function (){var statearr_101975 = state_101938;
(statearr_101975[(20)] = inst_101878);

(statearr_101975[(9)] = inst_101879);

(statearr_101975[(10)] = inst_101881);

(statearr_101975[(21)] = inst_101880);

(statearr_101975[(27)] = inst_101913);

return statearr_101975;
})();
var statearr_101976_102047 = state_101938__$1;
(statearr_101976_102047[(2)] = null);

(statearr_101976_102047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (43))){
var state_101938__$1 = state_101938;
var statearr_101977_102048 = state_101938__$1;
(statearr_101977_102048[(2)] = null);

(statearr_101977_102048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (29))){
var inst_101922 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101978_102049 = state_101938__$1;
(statearr_101978_102049[(2)] = inst_101922);

(statearr_101978_102049[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (44))){
var inst_101931 = (state_101938[(2)]);
var state_101938__$1 = (function (){var statearr_101979 = state_101938;
(statearr_101979[(28)] = inst_101931);

return statearr_101979;
})();
var statearr_101980_102050 = state_101938__$1;
(statearr_101980_102050[(2)] = null);

(statearr_101980_102050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (6))){
var inst_101870 = (state_101938[(29)]);
var inst_101869 = cljs.core.deref.call(null,cs);
var inst_101870__$1 = cljs.core.keys.call(null,inst_101869);
var inst_101871 = cljs.core.count.call(null,inst_101870__$1);
var inst_101872 = cljs.core.reset_BANG_.call(null,dctr,inst_101871);
var inst_101877 = cljs.core.seq.call(null,inst_101870__$1);
var inst_101878 = inst_101877;
var inst_101879 = null;
var inst_101880 = (0);
var inst_101881 = (0);
var state_101938__$1 = (function (){var statearr_101981 = state_101938;
(statearr_101981[(20)] = inst_101878);

(statearr_101981[(9)] = inst_101879);

(statearr_101981[(30)] = inst_101872);

(statearr_101981[(10)] = inst_101881);

(statearr_101981[(21)] = inst_101880);

(statearr_101981[(29)] = inst_101870__$1);

return statearr_101981;
})();
var statearr_101982_102051 = state_101938__$1;
(statearr_101982_102051[(2)] = null);

(statearr_101982_102051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (28))){
var inst_101878 = (state_101938[(20)]);
var inst_101897 = (state_101938[(25)]);
var inst_101897__$1 = cljs.core.seq.call(null,inst_101878);
var state_101938__$1 = (function (){var statearr_101983 = state_101938;
(statearr_101983[(25)] = inst_101897__$1);

return statearr_101983;
})();
if(inst_101897__$1){
var statearr_101984_102052 = state_101938__$1;
(statearr_101984_102052[(1)] = (33));

} else {
var statearr_101985_102053 = state_101938__$1;
(statearr_101985_102053[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (25))){
var inst_101881 = (state_101938[(10)]);
var inst_101880 = (state_101938[(21)]);
var inst_101883 = (inst_101881 < inst_101880);
var inst_101884 = inst_101883;
var state_101938__$1 = state_101938;
if(cljs.core.truth_(inst_101884)){
var statearr_101986_102054 = state_101938__$1;
(statearr_101986_102054[(1)] = (27));

} else {
var statearr_101987_102055 = state_101938__$1;
(statearr_101987_102055[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (34))){
var state_101938__$1 = state_101938;
var statearr_101988_102056 = state_101938__$1;
(statearr_101988_102056[(2)] = null);

(statearr_101988_102056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (17))){
var state_101938__$1 = state_101938;
var statearr_101989_102057 = state_101938__$1;
(statearr_101989_102057[(2)] = null);

(statearr_101989_102057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (3))){
var inst_101936 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101938__$1,inst_101936);
} else {
if((state_val_101939 === (12))){
var inst_101865 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101990_102058 = state_101938__$1;
(statearr_101990_102058[(2)] = inst_101865);

(statearr_101990_102058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (2))){
var state_101938__$1 = state_101938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101938__$1,(4),ch);
} else {
if((state_val_101939 === (23))){
var state_101938__$1 = state_101938;
var statearr_101991_102059 = state_101938__$1;
(statearr_101991_102059[(2)] = null);

(statearr_101991_102059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (35))){
var inst_101920 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101992_102060 = state_101938__$1;
(statearr_101992_102060[(2)] = inst_101920);

(statearr_101992_102060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (19))){
var inst_101839 = (state_101938[(7)]);
var inst_101843 = cljs.core.chunk_first.call(null,inst_101839);
var inst_101844 = cljs.core.chunk_rest.call(null,inst_101839);
var inst_101845 = cljs.core.count.call(null,inst_101843);
var inst_101819 = inst_101844;
var inst_101820 = inst_101843;
var inst_101821 = inst_101845;
var inst_101822 = (0);
var state_101938__$1 = (function (){var statearr_101993 = state_101938;
(statearr_101993[(13)] = inst_101820);

(statearr_101993[(14)] = inst_101819);

(statearr_101993[(15)] = inst_101821);

(statearr_101993[(16)] = inst_101822);

return statearr_101993;
})();
var statearr_101994_102061 = state_101938__$1;
(statearr_101994_102061[(2)] = null);

(statearr_101994_102061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (11))){
var inst_101819 = (state_101938[(14)]);
var inst_101839 = (state_101938[(7)]);
var inst_101839__$1 = cljs.core.seq.call(null,inst_101819);
var state_101938__$1 = (function (){var statearr_101995 = state_101938;
(statearr_101995[(7)] = inst_101839__$1);

return statearr_101995;
})();
if(inst_101839__$1){
var statearr_101996_102062 = state_101938__$1;
(statearr_101996_102062[(1)] = (16));

} else {
var statearr_101997_102063 = state_101938__$1;
(statearr_101997_102063[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (9))){
var inst_101867 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_101998_102064 = state_101938__$1;
(statearr_101998_102064[(2)] = inst_101867);

(statearr_101998_102064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (5))){
var inst_101817 = cljs.core.deref.call(null,cs);
var inst_101818 = cljs.core.seq.call(null,inst_101817);
var inst_101819 = inst_101818;
var inst_101820 = null;
var inst_101821 = (0);
var inst_101822 = (0);
var state_101938__$1 = (function (){var statearr_101999 = state_101938;
(statearr_101999[(13)] = inst_101820);

(statearr_101999[(14)] = inst_101819);

(statearr_101999[(15)] = inst_101821);

(statearr_101999[(16)] = inst_101822);

return statearr_101999;
})();
var statearr_102000_102065 = state_101938__$1;
(statearr_102000_102065[(2)] = null);

(statearr_102000_102065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (14))){
var state_101938__$1 = state_101938;
var statearr_102001_102066 = state_101938__$1;
(statearr_102001_102066[(2)] = null);

(statearr_102001_102066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (45))){
var inst_101928 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_102002_102067 = state_101938__$1;
(statearr_102002_102067[(2)] = inst_101928);

(statearr_102002_102067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (26))){
var inst_101870 = (state_101938[(29)]);
var inst_101924 = (state_101938[(2)]);
var inst_101925 = cljs.core.seq.call(null,inst_101870);
var state_101938__$1 = (function (){var statearr_102003 = state_101938;
(statearr_102003[(31)] = inst_101924);

return statearr_102003;
})();
if(inst_101925){
var statearr_102004_102068 = state_101938__$1;
(statearr_102004_102068[(1)] = (42));

} else {
var statearr_102005_102069 = state_101938__$1;
(statearr_102005_102069[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (16))){
var inst_101839 = (state_101938[(7)]);
var inst_101841 = cljs.core.chunked_seq_QMARK_.call(null,inst_101839);
var state_101938__$1 = state_101938;
if(inst_101841){
var statearr_102006_102070 = state_101938__$1;
(statearr_102006_102070[(1)] = (19));

} else {
var statearr_102007_102071 = state_101938__$1;
(statearr_102007_102071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (38))){
var inst_101917 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_102008_102072 = state_101938__$1;
(statearr_102008_102072[(2)] = inst_101917);

(statearr_102008_102072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (30))){
var state_101938__$1 = state_101938;
var statearr_102009_102073 = state_101938__$1;
(statearr_102009_102073[(2)] = null);

(statearr_102009_102073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (10))){
var inst_101820 = (state_101938[(13)]);
var inst_101822 = (state_101938[(16)]);
var inst_101828 = cljs.core._nth.call(null,inst_101820,inst_101822);
var inst_101829 = cljs.core.nth.call(null,inst_101828,(0),null);
var inst_101830 = cljs.core.nth.call(null,inst_101828,(1),null);
var state_101938__$1 = (function (){var statearr_102010 = state_101938;
(statearr_102010[(26)] = inst_101829);

return statearr_102010;
})();
if(cljs.core.truth_(inst_101830)){
var statearr_102011_102074 = state_101938__$1;
(statearr_102011_102074[(1)] = (13));

} else {
var statearr_102012_102075 = state_101938__$1;
(statearr_102012_102075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (18))){
var inst_101863 = (state_101938[(2)]);
var state_101938__$1 = state_101938;
var statearr_102013_102076 = state_101938__$1;
(statearr_102013_102076[(2)] = inst_101863);

(statearr_102013_102076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (42))){
var state_101938__$1 = state_101938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101938__$1,(45),dchan);
} else {
if((state_val_101939 === (37))){
var inst_101897 = (state_101938[(25)]);
var inst_101906 = (state_101938[(23)]);
var inst_101810 = (state_101938[(11)]);
var inst_101906__$1 = cljs.core.first.call(null,inst_101897);
var inst_101907 = cljs.core.async.put_BANG_.call(null,inst_101906__$1,inst_101810,done);
var state_101938__$1 = (function (){var statearr_102014 = state_101938;
(statearr_102014[(23)] = inst_101906__$1);

return statearr_102014;
})();
if(cljs.core.truth_(inst_101907)){
var statearr_102015_102077 = state_101938__$1;
(statearr_102015_102077[(1)] = (39));

} else {
var statearr_102016_102078 = state_101938__$1;
(statearr_102016_102078[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101939 === (8))){
var inst_101821 = (state_101938[(15)]);
var inst_101822 = (state_101938[(16)]);
var inst_101824 = (inst_101822 < inst_101821);
var inst_101825 = inst_101824;
var state_101938__$1 = state_101938;
if(cljs.core.truth_(inst_101825)){
var statearr_102017_102079 = state_101938__$1;
(statearr_102017_102079[(1)] = (10));

} else {
var statearr_102018_102080 = state_101938__$1;
(statearr_102018_102080[(1)] = (11));

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
});})(c__9199__auto___102026,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___102026,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_102022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102022[(0)] = state_machine__9185__auto__);

(statearr_102022[(1)] = (1));

return statearr_102022;
});
var state_machine__9185__auto____1 = (function (state_101938){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_101938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e102023){if((e102023 instanceof Object)){
var ex__9188__auto__ = e102023;
var statearr_102024_102081 = state_101938;
(statearr_102024_102081[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102082 = state_101938;
state_101938 = G__102082;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_101938){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_101938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___102026,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_102025 = f__9200__auto__.call(null);
(statearr_102025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___102026);

return statearr_102025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___102026,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj102084 = {};
return obj102084;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__102085){
var map__102090 = p__102085;
var map__102090__$1 = ((cljs.core.seq_QMARK_.call(null,map__102090))?cljs.core.apply.call(null,cljs.core.hash_map,map__102090):map__102090);
var opts = map__102090__$1;
var statearr_102091_102094 = state;
(statearr_102091_102094[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__102090,map__102090__$1,opts){
return (function (val){
var statearr_102092_102095 = state;
(statearr_102092_102095[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__102090,map__102090__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_102093_102096 = state;
(statearr_102093_102096[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__102085 = null;
if (arguments.length > 3) {
  p__102085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__102085);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__102097){
var state = cljs.core.first(arglist__102097);
arglist__102097 = cljs.core.next(arglist__102097);
var cont_block = cljs.core.first(arglist__102097);
arglist__102097 = cljs.core.next(arglist__102097);
var ports = cljs.core.first(arglist__102097);
var p__102085 = cljs.core.rest(arglist__102097);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__102085);
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
if(typeof cljs.core.async.t102217 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t102217 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta102218){
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
this.meta102218 = meta102218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t102217.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t102217.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t102217.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t102217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_102219){
var self__ = this;
var _102219__$1 = this;
return self__.meta102218;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_102219,meta102218__$1){
var self__ = this;
var _102219__$1 = this;
return (new cljs.core.async.t102217(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta102218__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t102217.cljs$lang$type = true;

cljs.core.async.t102217.cljs$lang$ctorStr = "cljs.core.async/t102217";

cljs.core.async.t102217.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t102217");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t102217 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t102217(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta102218){
return (new cljs.core.async.t102217(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta102218));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t102217(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___102336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_102289){
var state_val_102290 = (state_102289[(1)]);
if((state_val_102290 === (7))){
var inst_102233 = (state_102289[(7)]);
var inst_102238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102233);
var state_102289__$1 = state_102289;
var statearr_102291_102337 = state_102289__$1;
(statearr_102291_102337[(2)] = inst_102238);

(statearr_102291_102337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (20))){
var inst_102248 = (state_102289[(8)]);
var state_102289__$1 = state_102289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102289__$1,(23),out,inst_102248);
} else {
if((state_val_102290 === (1))){
var inst_102223 = (state_102289[(9)]);
var inst_102223__$1 = calc_state.call(null);
var inst_102224 = cljs.core.seq_QMARK_.call(null,inst_102223__$1);
var state_102289__$1 = (function (){var statearr_102292 = state_102289;
(statearr_102292[(9)] = inst_102223__$1);

return statearr_102292;
})();
if(inst_102224){
var statearr_102293_102338 = state_102289__$1;
(statearr_102293_102338[(1)] = (2));

} else {
var statearr_102294_102339 = state_102289__$1;
(statearr_102294_102339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (24))){
var inst_102241 = (state_102289[(10)]);
var inst_102233 = inst_102241;
var state_102289__$1 = (function (){var statearr_102295 = state_102289;
(statearr_102295[(7)] = inst_102233);

return statearr_102295;
})();
var statearr_102296_102340 = state_102289__$1;
(statearr_102296_102340[(2)] = null);

(statearr_102296_102340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (4))){
var inst_102223 = (state_102289[(9)]);
var inst_102229 = (state_102289[(2)]);
var inst_102230 = cljs.core.get.call(null,inst_102229,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_102231 = cljs.core.get.call(null,inst_102229,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_102232 = cljs.core.get.call(null,inst_102229,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_102233 = inst_102223;
var state_102289__$1 = (function (){var statearr_102297 = state_102289;
(statearr_102297[(11)] = inst_102232);

(statearr_102297[(12)] = inst_102230);

(statearr_102297[(7)] = inst_102233);

(statearr_102297[(13)] = inst_102231);

return statearr_102297;
})();
var statearr_102298_102341 = state_102289__$1;
(statearr_102298_102341[(2)] = null);

(statearr_102298_102341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (15))){
var state_102289__$1 = state_102289;
var statearr_102299_102342 = state_102289__$1;
(statearr_102299_102342[(2)] = null);

(statearr_102299_102342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (21))){
var inst_102241 = (state_102289[(10)]);
var inst_102233 = inst_102241;
var state_102289__$1 = (function (){var statearr_102300 = state_102289;
(statearr_102300[(7)] = inst_102233);

return statearr_102300;
})();
var statearr_102301_102343 = state_102289__$1;
(statearr_102301_102343[(2)] = null);

(statearr_102301_102343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (13))){
var inst_102285 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
var statearr_102302_102344 = state_102289__$1;
(statearr_102302_102344[(2)] = inst_102285);

(statearr_102302_102344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (22))){
var inst_102283 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
var statearr_102303_102345 = state_102289__$1;
(statearr_102303_102345[(2)] = inst_102283);

(statearr_102303_102345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (6))){
var inst_102287 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102289__$1,inst_102287);
} else {
if((state_val_102290 === (25))){
var state_102289__$1 = state_102289;
var statearr_102304_102346 = state_102289__$1;
(statearr_102304_102346[(2)] = null);

(statearr_102304_102346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (17))){
var inst_102263 = (state_102289[(14)]);
var state_102289__$1 = state_102289;
var statearr_102305_102347 = state_102289__$1;
(statearr_102305_102347[(2)] = inst_102263);

(statearr_102305_102347[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (3))){
var inst_102223 = (state_102289[(9)]);
var state_102289__$1 = state_102289;
var statearr_102306_102348 = state_102289__$1;
(statearr_102306_102348[(2)] = inst_102223);

(statearr_102306_102348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (12))){
var inst_102249 = (state_102289[(15)]);
var inst_102263 = (state_102289[(14)]);
var inst_102244 = (state_102289[(16)]);
var inst_102263__$1 = inst_102244.call(null,inst_102249);
var state_102289__$1 = (function (){var statearr_102307 = state_102289;
(statearr_102307[(14)] = inst_102263__$1);

return statearr_102307;
})();
if(cljs.core.truth_(inst_102263__$1)){
var statearr_102308_102349 = state_102289__$1;
(statearr_102308_102349[(1)] = (17));

} else {
var statearr_102309_102350 = state_102289__$1;
(statearr_102309_102350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (2))){
var inst_102223 = (state_102289[(9)]);
var inst_102226 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102223);
var state_102289__$1 = state_102289;
var statearr_102310_102351 = state_102289__$1;
(statearr_102310_102351[(2)] = inst_102226);

(statearr_102310_102351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (23))){
var inst_102274 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
if(cljs.core.truth_(inst_102274)){
var statearr_102311_102352 = state_102289__$1;
(statearr_102311_102352[(1)] = (24));

} else {
var statearr_102312_102353 = state_102289__$1;
(statearr_102312_102353[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (19))){
var inst_102271 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
if(cljs.core.truth_(inst_102271)){
var statearr_102313_102354 = state_102289__$1;
(statearr_102313_102354[(1)] = (20));

} else {
var statearr_102314_102355 = state_102289__$1;
(statearr_102314_102355[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (11))){
var inst_102248 = (state_102289[(8)]);
var inst_102254 = (inst_102248 == null);
var state_102289__$1 = state_102289;
if(cljs.core.truth_(inst_102254)){
var statearr_102315_102356 = state_102289__$1;
(statearr_102315_102356[(1)] = (14));

} else {
var statearr_102316_102357 = state_102289__$1;
(statearr_102316_102357[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (9))){
var inst_102241 = (state_102289[(10)]);
var inst_102241__$1 = (state_102289[(2)]);
var inst_102242 = cljs.core.get.call(null,inst_102241__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_102243 = cljs.core.get.call(null,inst_102241__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_102244 = cljs.core.get.call(null,inst_102241__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_102289__$1 = (function (){var statearr_102317 = state_102289;
(statearr_102317[(10)] = inst_102241__$1);

(statearr_102317[(16)] = inst_102244);

(statearr_102317[(17)] = inst_102243);

return statearr_102317;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_102289__$1,(10),inst_102242);
} else {
if((state_val_102290 === (5))){
var inst_102233 = (state_102289[(7)]);
var inst_102236 = cljs.core.seq_QMARK_.call(null,inst_102233);
var state_102289__$1 = state_102289;
if(inst_102236){
var statearr_102318_102358 = state_102289__$1;
(statearr_102318_102358[(1)] = (7));

} else {
var statearr_102319_102359 = state_102289__$1;
(statearr_102319_102359[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (14))){
var inst_102249 = (state_102289[(15)]);
var inst_102256 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_102249);
var state_102289__$1 = state_102289;
var statearr_102320_102360 = state_102289__$1;
(statearr_102320_102360[(2)] = inst_102256);

(statearr_102320_102360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (26))){
var inst_102279 = (state_102289[(2)]);
var state_102289__$1 = state_102289;
var statearr_102321_102361 = state_102289__$1;
(statearr_102321_102361[(2)] = inst_102279);

(statearr_102321_102361[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (16))){
var inst_102259 = (state_102289[(2)]);
var inst_102260 = calc_state.call(null);
var inst_102233 = inst_102260;
var state_102289__$1 = (function (){var statearr_102322 = state_102289;
(statearr_102322[(7)] = inst_102233);

(statearr_102322[(18)] = inst_102259);

return statearr_102322;
})();
var statearr_102323_102362 = state_102289__$1;
(statearr_102323_102362[(2)] = null);

(statearr_102323_102362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (10))){
var inst_102249 = (state_102289[(15)]);
var inst_102248 = (state_102289[(8)]);
var inst_102247 = (state_102289[(2)]);
var inst_102248__$1 = cljs.core.nth.call(null,inst_102247,(0),null);
var inst_102249__$1 = cljs.core.nth.call(null,inst_102247,(1),null);
var inst_102250 = (inst_102248__$1 == null);
var inst_102251 = cljs.core._EQ_.call(null,inst_102249__$1,change);
var inst_102252 = (inst_102250) || (inst_102251);
var state_102289__$1 = (function (){var statearr_102324 = state_102289;
(statearr_102324[(15)] = inst_102249__$1);

(statearr_102324[(8)] = inst_102248__$1);

return statearr_102324;
})();
if(cljs.core.truth_(inst_102252)){
var statearr_102325_102363 = state_102289__$1;
(statearr_102325_102363[(1)] = (11));

} else {
var statearr_102326_102364 = state_102289__$1;
(statearr_102326_102364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (18))){
var inst_102249 = (state_102289[(15)]);
var inst_102244 = (state_102289[(16)]);
var inst_102243 = (state_102289[(17)]);
var inst_102266 = cljs.core.empty_QMARK_.call(null,inst_102244);
var inst_102267 = inst_102243.call(null,inst_102249);
var inst_102268 = cljs.core.not.call(null,inst_102267);
var inst_102269 = (inst_102266) && (inst_102268);
var state_102289__$1 = state_102289;
var statearr_102327_102365 = state_102289__$1;
(statearr_102327_102365[(2)] = inst_102269);

(statearr_102327_102365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102290 === (8))){
var inst_102233 = (state_102289[(7)]);
var state_102289__$1 = state_102289;
var statearr_102328_102366 = state_102289__$1;
(statearr_102328_102366[(2)] = inst_102233);

(statearr_102328_102366[(1)] = (9));


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
});})(c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_102332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102332[(0)] = state_machine__9185__auto__);

(statearr_102332[(1)] = (1));

return statearr_102332;
});
var state_machine__9185__auto____1 = (function (state_102289){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_102289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e102333){if((e102333 instanceof Object)){
var ex__9188__auto__ = e102333;
var statearr_102334_102367 = state_102289;
(statearr_102334_102367[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102368 = state_102289;
state_102289 = G__102368;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_102289){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_102289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_102335 = f__9200__auto__.call(null);
(statearr_102335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___102336);

return statearr_102335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___102336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj102370 = {};
return obj102370;
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
return (function (p1__102371_SHARP_){
if(cljs.core.truth_(p1__102371_SHARP_.call(null,topic))){
return p1__102371_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__102371_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t102494 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t102494 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta102495){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta102495 = meta102495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t102494.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t102494.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t102494.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t102494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t102494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t102494.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t102494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t102494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_102496){
var self__ = this;
var _102496__$1 = this;
return self__.meta102495;
});})(mults,ensure_mult))
;

cljs.core.async.t102494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_102496,meta102495__$1){
var self__ = this;
var _102496__$1 = this;
return (new cljs.core.async.t102494(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta102495__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t102494.cljs$lang$type = true;

cljs.core.async.t102494.cljs$lang$ctorStr = "cljs.core.async/t102494";

cljs.core.async.t102494.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t102494");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t102494 = ((function (mults,ensure_mult){
return (function __GT_t102494(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta102495){
return (new cljs.core.async.t102494(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta102495));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t102494(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___102616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___102616,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___102616,mults,ensure_mult,p){
return (function (state_102568){
var state_val_102569 = (state_102568[(1)]);
if((state_val_102569 === (7))){
var inst_102564 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102570_102617 = state_102568__$1;
(statearr_102570_102617[(2)] = inst_102564);

(statearr_102570_102617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (20))){
var state_102568__$1 = state_102568;
var statearr_102571_102618 = state_102568__$1;
(statearr_102571_102618[(2)] = null);

(statearr_102571_102618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (1))){
var state_102568__$1 = state_102568;
var statearr_102572_102619 = state_102568__$1;
(statearr_102572_102619[(2)] = null);

(statearr_102572_102619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (24))){
var inst_102547 = (state_102568[(7)]);
var inst_102556 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_102547);
var state_102568__$1 = state_102568;
var statearr_102573_102620 = state_102568__$1;
(statearr_102573_102620[(2)] = inst_102556);

(statearr_102573_102620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (4))){
var inst_102499 = (state_102568[(8)]);
var inst_102499__$1 = (state_102568[(2)]);
var inst_102500 = (inst_102499__$1 == null);
var state_102568__$1 = (function (){var statearr_102574 = state_102568;
(statearr_102574[(8)] = inst_102499__$1);

return statearr_102574;
})();
if(cljs.core.truth_(inst_102500)){
var statearr_102575_102621 = state_102568__$1;
(statearr_102575_102621[(1)] = (5));

} else {
var statearr_102576_102622 = state_102568__$1;
(statearr_102576_102622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (15))){
var inst_102541 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102577_102623 = state_102568__$1;
(statearr_102577_102623[(2)] = inst_102541);

(statearr_102577_102623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (21))){
var inst_102561 = (state_102568[(2)]);
var state_102568__$1 = (function (){var statearr_102578 = state_102568;
(statearr_102578[(9)] = inst_102561);

return statearr_102578;
})();
var statearr_102579_102624 = state_102568__$1;
(statearr_102579_102624[(2)] = null);

(statearr_102579_102624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (13))){
var inst_102523 = (state_102568[(10)]);
var inst_102525 = cljs.core.chunked_seq_QMARK_.call(null,inst_102523);
var state_102568__$1 = state_102568;
if(inst_102525){
var statearr_102580_102625 = state_102568__$1;
(statearr_102580_102625[(1)] = (16));

} else {
var statearr_102581_102626 = state_102568__$1;
(statearr_102581_102626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (22))){
var inst_102553 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
if(cljs.core.truth_(inst_102553)){
var statearr_102582_102627 = state_102568__$1;
(statearr_102582_102627[(1)] = (23));

} else {
var statearr_102583_102628 = state_102568__$1;
(statearr_102583_102628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (6))){
var inst_102499 = (state_102568[(8)]);
var inst_102549 = (state_102568[(11)]);
var inst_102547 = (state_102568[(7)]);
var inst_102547__$1 = topic_fn.call(null,inst_102499);
var inst_102548 = cljs.core.deref.call(null,mults);
var inst_102549__$1 = cljs.core.get.call(null,inst_102548,inst_102547__$1);
var state_102568__$1 = (function (){var statearr_102584 = state_102568;
(statearr_102584[(11)] = inst_102549__$1);

(statearr_102584[(7)] = inst_102547__$1);

return statearr_102584;
})();
if(cljs.core.truth_(inst_102549__$1)){
var statearr_102585_102629 = state_102568__$1;
(statearr_102585_102629[(1)] = (19));

} else {
var statearr_102586_102630 = state_102568__$1;
(statearr_102586_102630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (25))){
var inst_102558 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102587_102631 = state_102568__$1;
(statearr_102587_102631[(2)] = inst_102558);

(statearr_102587_102631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (17))){
var inst_102523 = (state_102568[(10)]);
var inst_102532 = cljs.core.first.call(null,inst_102523);
var inst_102533 = cljs.core.async.muxch_STAR_.call(null,inst_102532);
var inst_102534 = cljs.core.async.close_BANG_.call(null,inst_102533);
var inst_102535 = cljs.core.next.call(null,inst_102523);
var inst_102509 = inst_102535;
var inst_102510 = null;
var inst_102511 = (0);
var inst_102512 = (0);
var state_102568__$1 = (function (){var statearr_102588 = state_102568;
(statearr_102588[(12)] = inst_102534);

(statearr_102588[(13)] = inst_102510);

(statearr_102588[(14)] = inst_102512);

(statearr_102588[(15)] = inst_102509);

(statearr_102588[(16)] = inst_102511);

return statearr_102588;
})();
var statearr_102589_102632 = state_102568__$1;
(statearr_102589_102632[(2)] = null);

(statearr_102589_102632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (3))){
var inst_102566 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102568__$1,inst_102566);
} else {
if((state_val_102569 === (12))){
var inst_102543 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102590_102633 = state_102568__$1;
(statearr_102590_102633[(2)] = inst_102543);

(statearr_102590_102633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (2))){
var state_102568__$1 = state_102568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102568__$1,(4),ch);
} else {
if((state_val_102569 === (23))){
var state_102568__$1 = state_102568;
var statearr_102591_102634 = state_102568__$1;
(statearr_102591_102634[(2)] = null);

(statearr_102591_102634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (19))){
var inst_102499 = (state_102568[(8)]);
var inst_102549 = (state_102568[(11)]);
var inst_102551 = cljs.core.async.muxch_STAR_.call(null,inst_102549);
var state_102568__$1 = state_102568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102568__$1,(22),inst_102551,inst_102499);
} else {
if((state_val_102569 === (11))){
var inst_102523 = (state_102568[(10)]);
var inst_102509 = (state_102568[(15)]);
var inst_102523__$1 = cljs.core.seq.call(null,inst_102509);
var state_102568__$1 = (function (){var statearr_102592 = state_102568;
(statearr_102592[(10)] = inst_102523__$1);

return statearr_102592;
})();
if(inst_102523__$1){
var statearr_102593_102635 = state_102568__$1;
(statearr_102593_102635[(1)] = (13));

} else {
var statearr_102594_102636 = state_102568__$1;
(statearr_102594_102636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (9))){
var inst_102545 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102595_102637 = state_102568__$1;
(statearr_102595_102637[(2)] = inst_102545);

(statearr_102595_102637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (5))){
var inst_102506 = cljs.core.deref.call(null,mults);
var inst_102507 = cljs.core.vals.call(null,inst_102506);
var inst_102508 = cljs.core.seq.call(null,inst_102507);
var inst_102509 = inst_102508;
var inst_102510 = null;
var inst_102511 = (0);
var inst_102512 = (0);
var state_102568__$1 = (function (){var statearr_102596 = state_102568;
(statearr_102596[(13)] = inst_102510);

(statearr_102596[(14)] = inst_102512);

(statearr_102596[(15)] = inst_102509);

(statearr_102596[(16)] = inst_102511);

return statearr_102596;
})();
var statearr_102597_102638 = state_102568__$1;
(statearr_102597_102638[(2)] = null);

(statearr_102597_102638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (14))){
var state_102568__$1 = state_102568;
var statearr_102601_102639 = state_102568__$1;
(statearr_102601_102639[(2)] = null);

(statearr_102601_102639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (16))){
var inst_102523 = (state_102568[(10)]);
var inst_102527 = cljs.core.chunk_first.call(null,inst_102523);
var inst_102528 = cljs.core.chunk_rest.call(null,inst_102523);
var inst_102529 = cljs.core.count.call(null,inst_102527);
var inst_102509 = inst_102528;
var inst_102510 = inst_102527;
var inst_102511 = inst_102529;
var inst_102512 = (0);
var state_102568__$1 = (function (){var statearr_102602 = state_102568;
(statearr_102602[(13)] = inst_102510);

(statearr_102602[(14)] = inst_102512);

(statearr_102602[(15)] = inst_102509);

(statearr_102602[(16)] = inst_102511);

return statearr_102602;
})();
var statearr_102603_102640 = state_102568__$1;
(statearr_102603_102640[(2)] = null);

(statearr_102603_102640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (10))){
var inst_102510 = (state_102568[(13)]);
var inst_102512 = (state_102568[(14)]);
var inst_102509 = (state_102568[(15)]);
var inst_102511 = (state_102568[(16)]);
var inst_102517 = cljs.core._nth.call(null,inst_102510,inst_102512);
var inst_102518 = cljs.core.async.muxch_STAR_.call(null,inst_102517);
var inst_102519 = cljs.core.async.close_BANG_.call(null,inst_102518);
var inst_102520 = (inst_102512 + (1));
var tmp102598 = inst_102510;
var tmp102599 = inst_102509;
var tmp102600 = inst_102511;
var inst_102509__$1 = tmp102599;
var inst_102510__$1 = tmp102598;
var inst_102511__$1 = tmp102600;
var inst_102512__$1 = inst_102520;
var state_102568__$1 = (function (){var statearr_102604 = state_102568;
(statearr_102604[(17)] = inst_102519);

(statearr_102604[(13)] = inst_102510__$1);

(statearr_102604[(14)] = inst_102512__$1);

(statearr_102604[(15)] = inst_102509__$1);

(statearr_102604[(16)] = inst_102511__$1);

return statearr_102604;
})();
var statearr_102605_102641 = state_102568__$1;
(statearr_102605_102641[(2)] = null);

(statearr_102605_102641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (18))){
var inst_102538 = (state_102568[(2)]);
var state_102568__$1 = state_102568;
var statearr_102606_102642 = state_102568__$1;
(statearr_102606_102642[(2)] = inst_102538);

(statearr_102606_102642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102569 === (8))){
var inst_102512 = (state_102568[(14)]);
var inst_102511 = (state_102568[(16)]);
var inst_102514 = (inst_102512 < inst_102511);
var inst_102515 = inst_102514;
var state_102568__$1 = state_102568;
if(cljs.core.truth_(inst_102515)){
var statearr_102607_102643 = state_102568__$1;
(statearr_102607_102643[(1)] = (10));

} else {
var statearr_102608_102644 = state_102568__$1;
(statearr_102608_102644[(1)] = (11));

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
});})(c__9199__auto___102616,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___102616,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_102612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102612[(0)] = state_machine__9185__auto__);

(statearr_102612[(1)] = (1));

return statearr_102612;
});
var state_machine__9185__auto____1 = (function (state_102568){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_102568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e102613){if((e102613 instanceof Object)){
var ex__9188__auto__ = e102613;
var statearr_102614_102645 = state_102568;
(statearr_102614_102645[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102646 = state_102568;
state_102568 = G__102646;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_102568){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_102568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___102616,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_102615 = f__9200__auto__.call(null);
(statearr_102615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___102616);

return statearr_102615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___102616,mults,ensure_mult,p))
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
var c__9199__auto___102783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_102753){
var state_val_102754 = (state_102753[(1)]);
if((state_val_102754 === (7))){
var state_102753__$1 = state_102753;
var statearr_102755_102784 = state_102753__$1;
(statearr_102755_102784[(2)] = null);

(statearr_102755_102784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (1))){
var state_102753__$1 = state_102753;
var statearr_102756_102785 = state_102753__$1;
(statearr_102756_102785[(2)] = null);

(statearr_102756_102785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (4))){
var inst_102717 = (state_102753[(7)]);
var inst_102719 = (inst_102717 < cnt);
var state_102753__$1 = state_102753;
if(cljs.core.truth_(inst_102719)){
var statearr_102757_102786 = state_102753__$1;
(statearr_102757_102786[(1)] = (6));

} else {
var statearr_102758_102787 = state_102753__$1;
(statearr_102758_102787[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (15))){
var inst_102749 = (state_102753[(2)]);
var state_102753__$1 = state_102753;
var statearr_102759_102788 = state_102753__$1;
(statearr_102759_102788[(2)] = inst_102749);

(statearr_102759_102788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (13))){
var inst_102742 = cljs.core.async.close_BANG_.call(null,out);
var state_102753__$1 = state_102753;
var statearr_102760_102789 = state_102753__$1;
(statearr_102760_102789[(2)] = inst_102742);

(statearr_102760_102789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (6))){
var state_102753__$1 = state_102753;
var statearr_102761_102790 = state_102753__$1;
(statearr_102761_102790[(2)] = null);

(statearr_102761_102790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (3))){
var inst_102751 = (state_102753[(2)]);
var state_102753__$1 = state_102753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102753__$1,inst_102751);
} else {
if((state_val_102754 === (12))){
var inst_102739 = (state_102753[(8)]);
var inst_102739__$1 = (state_102753[(2)]);
var inst_102740 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_102739__$1);
var state_102753__$1 = (function (){var statearr_102762 = state_102753;
(statearr_102762[(8)] = inst_102739__$1);

return statearr_102762;
})();
if(cljs.core.truth_(inst_102740)){
var statearr_102763_102791 = state_102753__$1;
(statearr_102763_102791[(1)] = (13));

} else {
var statearr_102764_102792 = state_102753__$1;
(statearr_102764_102792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (2))){
var inst_102716 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_102717 = (0);
var state_102753__$1 = (function (){var statearr_102765 = state_102753;
(statearr_102765[(7)] = inst_102717);

(statearr_102765[(9)] = inst_102716);

return statearr_102765;
})();
var statearr_102766_102793 = state_102753__$1;
(statearr_102766_102793[(2)] = null);

(statearr_102766_102793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (11))){
var inst_102717 = (state_102753[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_102753,(10),Object,null,(9));
var inst_102726 = chs__$1.call(null,inst_102717);
var inst_102727 = done.call(null,inst_102717);
var inst_102728 = cljs.core.async.take_BANG_.call(null,inst_102726,inst_102727);
var state_102753__$1 = state_102753;
var statearr_102767_102794 = state_102753__$1;
(statearr_102767_102794[(2)] = inst_102728);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (9))){
var inst_102717 = (state_102753[(7)]);
var inst_102730 = (state_102753[(2)]);
var inst_102731 = (inst_102717 + (1));
var inst_102717__$1 = inst_102731;
var state_102753__$1 = (function (){var statearr_102768 = state_102753;
(statearr_102768[(7)] = inst_102717__$1);

(statearr_102768[(10)] = inst_102730);

return statearr_102768;
})();
var statearr_102769_102795 = state_102753__$1;
(statearr_102769_102795[(2)] = null);

(statearr_102769_102795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (5))){
var inst_102737 = (state_102753[(2)]);
var state_102753__$1 = (function (){var statearr_102770 = state_102753;
(statearr_102770[(11)] = inst_102737);

return statearr_102770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102753__$1,(12),dchan);
} else {
if((state_val_102754 === (14))){
var inst_102739 = (state_102753[(8)]);
var inst_102744 = cljs.core.apply.call(null,f,inst_102739);
var state_102753__$1 = state_102753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102753__$1,(16),out,inst_102744);
} else {
if((state_val_102754 === (16))){
var inst_102746 = (state_102753[(2)]);
var state_102753__$1 = (function (){var statearr_102771 = state_102753;
(statearr_102771[(12)] = inst_102746);

return statearr_102771;
})();
var statearr_102772_102796 = state_102753__$1;
(statearr_102772_102796[(2)] = null);

(statearr_102772_102796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (10))){
var inst_102721 = (state_102753[(2)]);
var inst_102722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_102753__$1 = (function (){var statearr_102773 = state_102753;
(statearr_102773[(13)] = inst_102721);

return statearr_102773;
})();
var statearr_102774_102797 = state_102753__$1;
(statearr_102774_102797[(2)] = inst_102722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102754 === (8))){
var inst_102735 = (state_102753[(2)]);
var state_102753__$1 = state_102753;
var statearr_102775_102798 = state_102753__$1;
(statearr_102775_102798[(2)] = inst_102735);

(statearr_102775_102798[(1)] = (5));


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
});})(c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_102779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102779[(0)] = state_machine__9185__auto__);

(statearr_102779[(1)] = (1));

return statearr_102779;
});
var state_machine__9185__auto____1 = (function (state_102753){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_102753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e102780){if((e102780 instanceof Object)){
var ex__9188__auto__ = e102780;
var statearr_102781_102799 = state_102753;
(statearr_102781_102799[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102800 = state_102753;
state_102753 = G__102800;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_102753){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_102753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_102782 = f__9200__auto__.call(null);
(statearr_102782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___102783);

return statearr_102782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___102783,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___102908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___102908,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___102908,out){
return (function (state_102884){
var state_val_102885 = (state_102884[(1)]);
if((state_val_102885 === (7))){
var inst_102863 = (state_102884[(7)]);
var inst_102864 = (state_102884[(8)]);
var inst_102863__$1 = (state_102884[(2)]);
var inst_102864__$1 = cljs.core.nth.call(null,inst_102863__$1,(0),null);
var inst_102865 = cljs.core.nth.call(null,inst_102863__$1,(1),null);
var inst_102866 = (inst_102864__$1 == null);
var state_102884__$1 = (function (){var statearr_102886 = state_102884;
(statearr_102886[(7)] = inst_102863__$1);

(statearr_102886[(9)] = inst_102865);

(statearr_102886[(8)] = inst_102864__$1);

return statearr_102886;
})();
if(cljs.core.truth_(inst_102866)){
var statearr_102887_102909 = state_102884__$1;
(statearr_102887_102909[(1)] = (8));

} else {
var statearr_102888_102910 = state_102884__$1;
(statearr_102888_102910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (1))){
var inst_102855 = cljs.core.vec.call(null,chs);
var inst_102856 = inst_102855;
var state_102884__$1 = (function (){var statearr_102889 = state_102884;
(statearr_102889[(10)] = inst_102856);

return statearr_102889;
})();
var statearr_102890_102911 = state_102884__$1;
(statearr_102890_102911[(2)] = null);

(statearr_102890_102911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (4))){
var inst_102856 = (state_102884[(10)]);
var state_102884__$1 = state_102884;
return cljs.core.async.ioc_alts_BANG_.call(null,state_102884__$1,(7),inst_102856);
} else {
if((state_val_102885 === (6))){
var inst_102880 = (state_102884[(2)]);
var state_102884__$1 = state_102884;
var statearr_102891_102912 = state_102884__$1;
(statearr_102891_102912[(2)] = inst_102880);

(statearr_102891_102912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (3))){
var inst_102882 = (state_102884[(2)]);
var state_102884__$1 = state_102884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102884__$1,inst_102882);
} else {
if((state_val_102885 === (2))){
var inst_102856 = (state_102884[(10)]);
var inst_102858 = cljs.core.count.call(null,inst_102856);
var inst_102859 = (inst_102858 > (0));
var state_102884__$1 = state_102884;
if(cljs.core.truth_(inst_102859)){
var statearr_102893_102913 = state_102884__$1;
(statearr_102893_102913[(1)] = (4));

} else {
var statearr_102894_102914 = state_102884__$1;
(statearr_102894_102914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (11))){
var inst_102856 = (state_102884[(10)]);
var inst_102873 = (state_102884[(2)]);
var tmp102892 = inst_102856;
var inst_102856__$1 = tmp102892;
var state_102884__$1 = (function (){var statearr_102895 = state_102884;
(statearr_102895[(10)] = inst_102856__$1);

(statearr_102895[(11)] = inst_102873);

return statearr_102895;
})();
var statearr_102896_102915 = state_102884__$1;
(statearr_102896_102915[(2)] = null);

(statearr_102896_102915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (9))){
var inst_102864 = (state_102884[(8)]);
var state_102884__$1 = state_102884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102884__$1,(11),out,inst_102864);
} else {
if((state_val_102885 === (5))){
var inst_102878 = cljs.core.async.close_BANG_.call(null,out);
var state_102884__$1 = state_102884;
var statearr_102897_102916 = state_102884__$1;
(statearr_102897_102916[(2)] = inst_102878);

(statearr_102897_102916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (10))){
var inst_102876 = (state_102884[(2)]);
var state_102884__$1 = state_102884;
var statearr_102898_102917 = state_102884__$1;
(statearr_102898_102917[(2)] = inst_102876);

(statearr_102898_102917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102885 === (8))){
var inst_102856 = (state_102884[(10)]);
var inst_102863 = (state_102884[(7)]);
var inst_102865 = (state_102884[(9)]);
var inst_102864 = (state_102884[(8)]);
var inst_102868 = (function (){var c = inst_102865;
var v = inst_102864;
var vec__102861 = inst_102863;
var cs = inst_102856;
return ((function (c,v,vec__102861,cs,inst_102856,inst_102863,inst_102865,inst_102864,state_val_102885,c__9199__auto___102908,out){
return (function (p1__102801_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__102801_SHARP_);
});
;})(c,v,vec__102861,cs,inst_102856,inst_102863,inst_102865,inst_102864,state_val_102885,c__9199__auto___102908,out))
})();
var inst_102869 = cljs.core.filterv.call(null,inst_102868,inst_102856);
var inst_102856__$1 = inst_102869;
var state_102884__$1 = (function (){var statearr_102899 = state_102884;
(statearr_102899[(10)] = inst_102856__$1);

return statearr_102899;
})();
var statearr_102900_102918 = state_102884__$1;
(statearr_102900_102918[(2)] = null);

(statearr_102900_102918[(1)] = (2));


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
});})(c__9199__auto___102908,out))
;
return ((function (switch__9184__auto__,c__9199__auto___102908,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_102904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102904[(0)] = state_machine__9185__auto__);

(statearr_102904[(1)] = (1));

return statearr_102904;
});
var state_machine__9185__auto____1 = (function (state_102884){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_102884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e102905){if((e102905 instanceof Object)){
var ex__9188__auto__ = e102905;
var statearr_102906_102919 = state_102884;
(statearr_102906_102919[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102920 = state_102884;
state_102884 = G__102920;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_102884){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_102884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___102908,out))
})();
var state__9201__auto__ = (function (){var statearr_102907 = f__9200__auto__.call(null);
(statearr_102907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___102908);

return statearr_102907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___102908,out))
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
var c__9199__auto___103013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___103013,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___103013,out){
return (function (state_102990){
var state_val_102991 = (state_102990[(1)]);
if((state_val_102991 === (7))){
var inst_102972 = (state_102990[(7)]);
var inst_102972__$1 = (state_102990[(2)]);
var inst_102973 = (inst_102972__$1 == null);
var inst_102974 = cljs.core.not.call(null,inst_102973);
var state_102990__$1 = (function (){var statearr_102992 = state_102990;
(statearr_102992[(7)] = inst_102972__$1);

return statearr_102992;
})();
if(inst_102974){
var statearr_102993_103014 = state_102990__$1;
(statearr_102993_103014[(1)] = (8));

} else {
var statearr_102994_103015 = state_102990__$1;
(statearr_102994_103015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (1))){
var inst_102967 = (0);
var state_102990__$1 = (function (){var statearr_102995 = state_102990;
(statearr_102995[(8)] = inst_102967);

return statearr_102995;
})();
var statearr_102996_103016 = state_102990__$1;
(statearr_102996_103016[(2)] = null);

(statearr_102996_103016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (4))){
var state_102990__$1 = state_102990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102990__$1,(7),ch);
} else {
if((state_val_102991 === (6))){
var inst_102985 = (state_102990[(2)]);
var state_102990__$1 = state_102990;
var statearr_102997_103017 = state_102990__$1;
(statearr_102997_103017[(2)] = inst_102985);

(statearr_102997_103017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (3))){
var inst_102987 = (state_102990[(2)]);
var inst_102988 = cljs.core.async.close_BANG_.call(null,out);
var state_102990__$1 = (function (){var statearr_102998 = state_102990;
(statearr_102998[(9)] = inst_102987);

return statearr_102998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102990__$1,inst_102988);
} else {
if((state_val_102991 === (2))){
var inst_102967 = (state_102990[(8)]);
var inst_102969 = (inst_102967 < n);
var state_102990__$1 = state_102990;
if(cljs.core.truth_(inst_102969)){
var statearr_102999_103018 = state_102990__$1;
(statearr_102999_103018[(1)] = (4));

} else {
var statearr_103000_103019 = state_102990__$1;
(statearr_103000_103019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (11))){
var inst_102967 = (state_102990[(8)]);
var inst_102977 = (state_102990[(2)]);
var inst_102978 = (inst_102967 + (1));
var inst_102967__$1 = inst_102978;
var state_102990__$1 = (function (){var statearr_103001 = state_102990;
(statearr_103001[(8)] = inst_102967__$1);

(statearr_103001[(10)] = inst_102977);

return statearr_103001;
})();
var statearr_103002_103020 = state_102990__$1;
(statearr_103002_103020[(2)] = null);

(statearr_103002_103020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (9))){
var state_102990__$1 = state_102990;
var statearr_103003_103021 = state_102990__$1;
(statearr_103003_103021[(2)] = null);

(statearr_103003_103021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (5))){
var state_102990__$1 = state_102990;
var statearr_103004_103022 = state_102990__$1;
(statearr_103004_103022[(2)] = null);

(statearr_103004_103022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (10))){
var inst_102982 = (state_102990[(2)]);
var state_102990__$1 = state_102990;
var statearr_103005_103023 = state_102990__$1;
(statearr_103005_103023[(2)] = inst_102982);

(statearr_103005_103023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102991 === (8))){
var inst_102972 = (state_102990[(7)]);
var state_102990__$1 = state_102990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102990__$1,(11),out,inst_102972);
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
});})(c__9199__auto___103013,out))
;
return ((function (switch__9184__auto__,c__9199__auto___103013,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_103009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103009[(0)] = state_machine__9185__auto__);

(statearr_103009[(1)] = (1));

return statearr_103009;
});
var state_machine__9185__auto____1 = (function (state_102990){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_102990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103010){if((e103010 instanceof Object)){
var ex__9188__auto__ = e103010;
var statearr_103011_103024 = state_102990;
(statearr_103011_103024[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103025 = state_102990;
state_102990 = G__103025;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_102990){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_102990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___103013,out))
})();
var state__9201__auto__ = (function (){var statearr_103012 = f__9200__auto__.call(null);
(statearr_103012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___103013);

return statearr_103012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___103013,out))
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
if(typeof cljs.core.async.t103033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t103033 = (function (ch,f,map_LT_,meta103034){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta103034 = meta103034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t103036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t103036 = (function (fn1,_,meta103034,map_LT_,f,ch,meta103037){
this.fn1 = fn1;
this._ = _;
this.meta103034 = meta103034;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta103037 = meta103037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t103036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t103036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t103036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__103026_SHARP_){
return f1.call(null,(((p1__103026_SHARP_ == null))?null:self__.f.call(null,p1__103026_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t103036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_103038){
var self__ = this;
var _103038__$1 = this;
return self__.meta103037;
});})(___$1))
;

cljs.core.async.t103036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_103038,meta103037__$1){
var self__ = this;
var _103038__$1 = this;
return (new cljs.core.async.t103036(self__.fn1,self__._,self__.meta103034,self__.map_LT_,self__.f,self__.ch,meta103037__$1));
});})(___$1))
;

cljs.core.async.t103036.cljs$lang$type = true;

cljs.core.async.t103036.cljs$lang$ctorStr = "cljs.core.async/t103036";

cljs.core.async.t103036.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t103036");
});})(___$1))
;

cljs.core.async.__GT_t103036 = ((function (___$1){
return (function __GT_t103036(fn1__$1,___$2,meta103034__$1,map_LT___$1,f__$1,ch__$1,meta103037){
return (new cljs.core.async.t103036(fn1__$1,___$2,meta103034__$1,map_LT___$1,f__$1,ch__$1,meta103037));
});})(___$1))
;

}

return (new cljs.core.async.t103036(fn1,___$1,self__.meta103034,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t103033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t103033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103035){
var self__ = this;
var _103035__$1 = this;
return self__.meta103034;
});

cljs.core.async.t103033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103035,meta103034__$1){
var self__ = this;
var _103035__$1 = this;
return (new cljs.core.async.t103033(self__.ch,self__.f,self__.map_LT_,meta103034__$1));
});

cljs.core.async.t103033.cljs$lang$type = true;

cljs.core.async.t103033.cljs$lang$ctorStr = "cljs.core.async/t103033";

cljs.core.async.t103033.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t103033");
});

cljs.core.async.__GT_t103033 = (function __GT_t103033(ch__$1,f__$1,map_LT___$1,meta103034){
return (new cljs.core.async.t103033(ch__$1,f__$1,map_LT___$1,meta103034));
});

}

return (new cljs.core.async.t103033(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t103042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t103042 = (function (ch,f,map_GT_,meta103043){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta103043 = meta103043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t103042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t103042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103044){
var self__ = this;
var _103044__$1 = this;
return self__.meta103043;
});

cljs.core.async.t103042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103044,meta103043__$1){
var self__ = this;
var _103044__$1 = this;
return (new cljs.core.async.t103042(self__.ch,self__.f,self__.map_GT_,meta103043__$1));
});

cljs.core.async.t103042.cljs$lang$type = true;

cljs.core.async.t103042.cljs$lang$ctorStr = "cljs.core.async/t103042";

cljs.core.async.t103042.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t103042");
});

cljs.core.async.__GT_t103042 = (function __GT_t103042(ch__$1,f__$1,map_GT___$1,meta103043){
return (new cljs.core.async.t103042(ch__$1,f__$1,map_GT___$1,meta103043));
});

}

return (new cljs.core.async.t103042(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t103048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t103048 = (function (ch,p,filter_GT_,meta103049){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta103049 = meta103049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t103048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t103048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103050){
var self__ = this;
var _103050__$1 = this;
return self__.meta103049;
});

cljs.core.async.t103048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103050,meta103049__$1){
var self__ = this;
var _103050__$1 = this;
return (new cljs.core.async.t103048(self__.ch,self__.p,self__.filter_GT_,meta103049__$1));
});

cljs.core.async.t103048.cljs$lang$type = true;

cljs.core.async.t103048.cljs$lang$ctorStr = "cljs.core.async/t103048";

cljs.core.async.t103048.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t103048");
});

cljs.core.async.__GT_t103048 = (function __GT_t103048(ch__$1,p__$1,filter_GT___$1,meta103049){
return (new cljs.core.async.t103048(ch__$1,p__$1,filter_GT___$1,meta103049));
});

}

return (new cljs.core.async.t103048(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___103133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___103133,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___103133,out){
return (function (state_103112){
var state_val_103113 = (state_103112[(1)]);
if((state_val_103113 === (7))){
var inst_103108 = (state_103112[(2)]);
var state_103112__$1 = state_103112;
var statearr_103114_103134 = state_103112__$1;
(statearr_103114_103134[(2)] = inst_103108);

(statearr_103114_103134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (1))){
var state_103112__$1 = state_103112;
var statearr_103115_103135 = state_103112__$1;
(statearr_103115_103135[(2)] = null);

(statearr_103115_103135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (4))){
var inst_103094 = (state_103112[(7)]);
var inst_103094__$1 = (state_103112[(2)]);
var inst_103095 = (inst_103094__$1 == null);
var state_103112__$1 = (function (){var statearr_103116 = state_103112;
(statearr_103116[(7)] = inst_103094__$1);

return statearr_103116;
})();
if(cljs.core.truth_(inst_103095)){
var statearr_103117_103136 = state_103112__$1;
(statearr_103117_103136[(1)] = (5));

} else {
var statearr_103118_103137 = state_103112__$1;
(statearr_103118_103137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (6))){
var inst_103094 = (state_103112[(7)]);
var inst_103099 = p.call(null,inst_103094);
var state_103112__$1 = state_103112;
if(cljs.core.truth_(inst_103099)){
var statearr_103119_103138 = state_103112__$1;
(statearr_103119_103138[(1)] = (8));

} else {
var statearr_103120_103139 = state_103112__$1;
(statearr_103120_103139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (3))){
var inst_103110 = (state_103112[(2)]);
var state_103112__$1 = state_103112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103112__$1,inst_103110);
} else {
if((state_val_103113 === (2))){
var state_103112__$1 = state_103112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103112__$1,(4),ch);
} else {
if((state_val_103113 === (11))){
var inst_103102 = (state_103112[(2)]);
var state_103112__$1 = state_103112;
var statearr_103121_103140 = state_103112__$1;
(statearr_103121_103140[(2)] = inst_103102);

(statearr_103121_103140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (9))){
var state_103112__$1 = state_103112;
var statearr_103122_103141 = state_103112__$1;
(statearr_103122_103141[(2)] = null);

(statearr_103122_103141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (5))){
var inst_103097 = cljs.core.async.close_BANG_.call(null,out);
var state_103112__$1 = state_103112;
var statearr_103123_103142 = state_103112__$1;
(statearr_103123_103142[(2)] = inst_103097);

(statearr_103123_103142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (10))){
var inst_103105 = (state_103112[(2)]);
var state_103112__$1 = (function (){var statearr_103124 = state_103112;
(statearr_103124[(8)] = inst_103105);

return statearr_103124;
})();
var statearr_103125_103143 = state_103112__$1;
(statearr_103125_103143[(2)] = null);

(statearr_103125_103143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103113 === (8))){
var inst_103094 = (state_103112[(7)]);
var state_103112__$1 = state_103112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103112__$1,(11),out,inst_103094);
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
});})(c__9199__auto___103133,out))
;
return ((function (switch__9184__auto__,c__9199__auto___103133,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_103129 = [null,null,null,null,null,null,null,null,null];
(statearr_103129[(0)] = state_machine__9185__auto__);

(statearr_103129[(1)] = (1));

return statearr_103129;
});
var state_machine__9185__auto____1 = (function (state_103112){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_103112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103130){if((e103130 instanceof Object)){
var ex__9188__auto__ = e103130;
var statearr_103131_103144 = state_103112;
(statearr_103131_103144[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103145 = state_103112;
state_103112 = G__103145;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_103112){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_103112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___103133,out))
})();
var state__9201__auto__ = (function (){var statearr_103132 = f__9200__auto__.call(null);
(statearr_103132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___103133);

return statearr_103132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___103133,out))
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
return (function (state_103311){
var state_val_103312 = (state_103311[(1)]);
if((state_val_103312 === (7))){
var inst_103307 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
var statearr_103313_103354 = state_103311__$1;
(statearr_103313_103354[(2)] = inst_103307);

(statearr_103313_103354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (20))){
var inst_103277 = (state_103311[(7)]);
var inst_103288 = (state_103311[(2)]);
var inst_103289 = cljs.core.next.call(null,inst_103277);
var inst_103263 = inst_103289;
var inst_103264 = null;
var inst_103265 = (0);
var inst_103266 = (0);
var state_103311__$1 = (function (){var statearr_103314 = state_103311;
(statearr_103314[(8)] = inst_103266);

(statearr_103314[(9)] = inst_103288);

(statearr_103314[(10)] = inst_103264);

(statearr_103314[(11)] = inst_103265);

(statearr_103314[(12)] = inst_103263);

return statearr_103314;
})();
var statearr_103315_103355 = state_103311__$1;
(statearr_103315_103355[(2)] = null);

(statearr_103315_103355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (1))){
var state_103311__$1 = state_103311;
var statearr_103316_103356 = state_103311__$1;
(statearr_103316_103356[(2)] = null);

(statearr_103316_103356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (4))){
var inst_103252 = (state_103311[(13)]);
var inst_103252__$1 = (state_103311[(2)]);
var inst_103253 = (inst_103252__$1 == null);
var state_103311__$1 = (function (){var statearr_103317 = state_103311;
(statearr_103317[(13)] = inst_103252__$1);

return statearr_103317;
})();
if(cljs.core.truth_(inst_103253)){
var statearr_103318_103357 = state_103311__$1;
(statearr_103318_103357[(1)] = (5));

} else {
var statearr_103319_103358 = state_103311__$1;
(statearr_103319_103358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (15))){
var state_103311__$1 = state_103311;
var statearr_103323_103359 = state_103311__$1;
(statearr_103323_103359[(2)] = null);

(statearr_103323_103359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (21))){
var state_103311__$1 = state_103311;
var statearr_103324_103360 = state_103311__$1;
(statearr_103324_103360[(2)] = null);

(statearr_103324_103360[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (13))){
var inst_103266 = (state_103311[(8)]);
var inst_103264 = (state_103311[(10)]);
var inst_103265 = (state_103311[(11)]);
var inst_103263 = (state_103311[(12)]);
var inst_103273 = (state_103311[(2)]);
var inst_103274 = (inst_103266 + (1));
var tmp103320 = inst_103264;
var tmp103321 = inst_103265;
var tmp103322 = inst_103263;
var inst_103263__$1 = tmp103322;
var inst_103264__$1 = tmp103320;
var inst_103265__$1 = tmp103321;
var inst_103266__$1 = inst_103274;
var state_103311__$1 = (function (){var statearr_103325 = state_103311;
(statearr_103325[(14)] = inst_103273);

(statearr_103325[(8)] = inst_103266__$1);

(statearr_103325[(10)] = inst_103264__$1);

(statearr_103325[(11)] = inst_103265__$1);

(statearr_103325[(12)] = inst_103263__$1);

return statearr_103325;
})();
var statearr_103326_103361 = state_103311__$1;
(statearr_103326_103361[(2)] = null);

(statearr_103326_103361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (22))){
var state_103311__$1 = state_103311;
var statearr_103327_103362 = state_103311__$1;
(statearr_103327_103362[(2)] = null);

(statearr_103327_103362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (6))){
var inst_103252 = (state_103311[(13)]);
var inst_103261 = f.call(null,inst_103252);
var inst_103262 = cljs.core.seq.call(null,inst_103261);
var inst_103263 = inst_103262;
var inst_103264 = null;
var inst_103265 = (0);
var inst_103266 = (0);
var state_103311__$1 = (function (){var statearr_103328 = state_103311;
(statearr_103328[(8)] = inst_103266);

(statearr_103328[(10)] = inst_103264);

(statearr_103328[(11)] = inst_103265);

(statearr_103328[(12)] = inst_103263);

return statearr_103328;
})();
var statearr_103329_103363 = state_103311__$1;
(statearr_103329_103363[(2)] = null);

(statearr_103329_103363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (17))){
var inst_103277 = (state_103311[(7)]);
var inst_103281 = cljs.core.chunk_first.call(null,inst_103277);
var inst_103282 = cljs.core.chunk_rest.call(null,inst_103277);
var inst_103283 = cljs.core.count.call(null,inst_103281);
var inst_103263 = inst_103282;
var inst_103264 = inst_103281;
var inst_103265 = inst_103283;
var inst_103266 = (0);
var state_103311__$1 = (function (){var statearr_103330 = state_103311;
(statearr_103330[(8)] = inst_103266);

(statearr_103330[(10)] = inst_103264);

(statearr_103330[(11)] = inst_103265);

(statearr_103330[(12)] = inst_103263);

return statearr_103330;
})();
var statearr_103331_103364 = state_103311__$1;
(statearr_103331_103364[(2)] = null);

(statearr_103331_103364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (3))){
var inst_103309 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103311__$1,inst_103309);
} else {
if((state_val_103312 === (12))){
var inst_103297 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
var statearr_103332_103365 = state_103311__$1;
(statearr_103332_103365[(2)] = inst_103297);

(statearr_103332_103365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (2))){
var state_103311__$1 = state_103311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103311__$1,(4),in$);
} else {
if((state_val_103312 === (23))){
var inst_103305 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
var statearr_103333_103366 = state_103311__$1;
(statearr_103333_103366[(2)] = inst_103305);

(statearr_103333_103366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (19))){
var inst_103292 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
var statearr_103334_103367 = state_103311__$1;
(statearr_103334_103367[(2)] = inst_103292);

(statearr_103334_103367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (11))){
var inst_103277 = (state_103311[(7)]);
var inst_103263 = (state_103311[(12)]);
var inst_103277__$1 = cljs.core.seq.call(null,inst_103263);
var state_103311__$1 = (function (){var statearr_103335 = state_103311;
(statearr_103335[(7)] = inst_103277__$1);

return statearr_103335;
})();
if(inst_103277__$1){
var statearr_103336_103368 = state_103311__$1;
(statearr_103336_103368[(1)] = (14));

} else {
var statearr_103337_103369 = state_103311__$1;
(statearr_103337_103369[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (9))){
var inst_103299 = (state_103311[(2)]);
var inst_103300 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_103311__$1 = (function (){var statearr_103338 = state_103311;
(statearr_103338[(15)] = inst_103299);

return statearr_103338;
})();
if(cljs.core.truth_(inst_103300)){
var statearr_103339_103370 = state_103311__$1;
(statearr_103339_103370[(1)] = (21));

} else {
var statearr_103340_103371 = state_103311__$1;
(statearr_103340_103371[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (5))){
var inst_103255 = cljs.core.async.close_BANG_.call(null,out);
var state_103311__$1 = state_103311;
var statearr_103341_103372 = state_103311__$1;
(statearr_103341_103372[(2)] = inst_103255);

(statearr_103341_103372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (14))){
var inst_103277 = (state_103311[(7)]);
var inst_103279 = cljs.core.chunked_seq_QMARK_.call(null,inst_103277);
var state_103311__$1 = state_103311;
if(inst_103279){
var statearr_103342_103373 = state_103311__$1;
(statearr_103342_103373[(1)] = (17));

} else {
var statearr_103343_103374 = state_103311__$1;
(statearr_103343_103374[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (16))){
var inst_103295 = (state_103311[(2)]);
var state_103311__$1 = state_103311;
var statearr_103344_103375 = state_103311__$1;
(statearr_103344_103375[(2)] = inst_103295);

(statearr_103344_103375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103312 === (10))){
var inst_103266 = (state_103311[(8)]);
var inst_103264 = (state_103311[(10)]);
var inst_103271 = cljs.core._nth.call(null,inst_103264,inst_103266);
var state_103311__$1 = state_103311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103311__$1,(13),out,inst_103271);
} else {
if((state_val_103312 === (18))){
var inst_103277 = (state_103311[(7)]);
var inst_103286 = cljs.core.first.call(null,inst_103277);
var state_103311__$1 = state_103311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103311__$1,(20),out,inst_103286);
} else {
if((state_val_103312 === (8))){
var inst_103266 = (state_103311[(8)]);
var inst_103265 = (state_103311[(11)]);
var inst_103268 = (inst_103266 < inst_103265);
var inst_103269 = inst_103268;
var state_103311__$1 = state_103311;
if(cljs.core.truth_(inst_103269)){
var statearr_103345_103376 = state_103311__$1;
(statearr_103345_103376[(1)] = (10));

} else {
var statearr_103346_103377 = state_103311__$1;
(statearr_103346_103377[(1)] = (11));

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
var statearr_103350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103350[(0)] = state_machine__9185__auto__);

(statearr_103350[(1)] = (1));

return statearr_103350;
});
var state_machine__9185__auto____1 = (function (state_103311){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_103311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103351){if((e103351 instanceof Object)){
var ex__9188__auto__ = e103351;
var statearr_103352_103378 = state_103311;
(statearr_103352_103378[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103379 = state_103311;
state_103311 = G__103379;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_103311){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_103311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_103353 = f__9200__auto__.call(null);
(statearr_103353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_103353;
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
var c__9199__auto___103476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___103476,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___103476,out){
return (function (state_103451){
var state_val_103452 = (state_103451[(1)]);
if((state_val_103452 === (7))){
var inst_103446 = (state_103451[(2)]);
var state_103451__$1 = state_103451;
var statearr_103453_103477 = state_103451__$1;
(statearr_103453_103477[(2)] = inst_103446);

(statearr_103453_103477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (1))){
var inst_103428 = null;
var state_103451__$1 = (function (){var statearr_103454 = state_103451;
(statearr_103454[(7)] = inst_103428);

return statearr_103454;
})();
var statearr_103455_103478 = state_103451__$1;
(statearr_103455_103478[(2)] = null);

(statearr_103455_103478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (4))){
var inst_103431 = (state_103451[(8)]);
var inst_103431__$1 = (state_103451[(2)]);
var inst_103432 = (inst_103431__$1 == null);
var inst_103433 = cljs.core.not.call(null,inst_103432);
var state_103451__$1 = (function (){var statearr_103456 = state_103451;
(statearr_103456[(8)] = inst_103431__$1);

return statearr_103456;
})();
if(inst_103433){
var statearr_103457_103479 = state_103451__$1;
(statearr_103457_103479[(1)] = (5));

} else {
var statearr_103458_103480 = state_103451__$1;
(statearr_103458_103480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (6))){
var state_103451__$1 = state_103451;
var statearr_103459_103481 = state_103451__$1;
(statearr_103459_103481[(2)] = null);

(statearr_103459_103481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (3))){
var inst_103448 = (state_103451[(2)]);
var inst_103449 = cljs.core.async.close_BANG_.call(null,out);
var state_103451__$1 = (function (){var statearr_103460 = state_103451;
(statearr_103460[(9)] = inst_103448);

return statearr_103460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103451__$1,inst_103449);
} else {
if((state_val_103452 === (2))){
var state_103451__$1 = state_103451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103451__$1,(4),ch);
} else {
if((state_val_103452 === (11))){
var inst_103431 = (state_103451[(8)]);
var inst_103440 = (state_103451[(2)]);
var inst_103428 = inst_103431;
var state_103451__$1 = (function (){var statearr_103461 = state_103451;
(statearr_103461[(7)] = inst_103428);

(statearr_103461[(10)] = inst_103440);

return statearr_103461;
})();
var statearr_103462_103482 = state_103451__$1;
(statearr_103462_103482[(2)] = null);

(statearr_103462_103482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (9))){
var inst_103431 = (state_103451[(8)]);
var state_103451__$1 = state_103451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103451__$1,(11),out,inst_103431);
} else {
if((state_val_103452 === (5))){
var inst_103428 = (state_103451[(7)]);
var inst_103431 = (state_103451[(8)]);
var inst_103435 = cljs.core._EQ_.call(null,inst_103431,inst_103428);
var state_103451__$1 = state_103451;
if(inst_103435){
var statearr_103464_103483 = state_103451__$1;
(statearr_103464_103483[(1)] = (8));

} else {
var statearr_103465_103484 = state_103451__$1;
(statearr_103465_103484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (10))){
var inst_103443 = (state_103451[(2)]);
var state_103451__$1 = state_103451;
var statearr_103466_103485 = state_103451__$1;
(statearr_103466_103485[(2)] = inst_103443);

(statearr_103466_103485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103452 === (8))){
var inst_103428 = (state_103451[(7)]);
var tmp103463 = inst_103428;
var inst_103428__$1 = tmp103463;
var state_103451__$1 = (function (){var statearr_103467 = state_103451;
(statearr_103467[(7)] = inst_103428__$1);

return statearr_103467;
})();
var statearr_103468_103486 = state_103451__$1;
(statearr_103468_103486[(2)] = null);

(statearr_103468_103486[(1)] = (2));


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
});})(c__9199__auto___103476,out))
;
return ((function (switch__9184__auto__,c__9199__auto___103476,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_103472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103472[(0)] = state_machine__9185__auto__);

(statearr_103472[(1)] = (1));

return statearr_103472;
});
var state_machine__9185__auto____1 = (function (state_103451){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_103451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103473){if((e103473 instanceof Object)){
var ex__9188__auto__ = e103473;
var statearr_103474_103487 = state_103451;
(statearr_103474_103487[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103488 = state_103451;
state_103451 = G__103488;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_103451){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_103451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___103476,out))
})();
var state__9201__auto__ = (function (){var statearr_103475 = f__9200__auto__.call(null);
(statearr_103475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___103476);

return statearr_103475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___103476,out))
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
var c__9199__auto___103623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___103623,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___103623,out){
return (function (state_103593){
var state_val_103594 = (state_103593[(1)]);
if((state_val_103594 === (7))){
var inst_103589 = (state_103593[(2)]);
var state_103593__$1 = state_103593;
var statearr_103595_103624 = state_103593__$1;
(statearr_103595_103624[(2)] = inst_103589);

(statearr_103595_103624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (1))){
var inst_103556 = (new Array(n));
var inst_103557 = inst_103556;
var inst_103558 = (0);
var state_103593__$1 = (function (){var statearr_103596 = state_103593;
(statearr_103596[(7)] = inst_103557);

(statearr_103596[(8)] = inst_103558);

return statearr_103596;
})();
var statearr_103597_103625 = state_103593__$1;
(statearr_103597_103625[(2)] = null);

(statearr_103597_103625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (4))){
var inst_103561 = (state_103593[(9)]);
var inst_103561__$1 = (state_103593[(2)]);
var inst_103562 = (inst_103561__$1 == null);
var inst_103563 = cljs.core.not.call(null,inst_103562);
var state_103593__$1 = (function (){var statearr_103598 = state_103593;
(statearr_103598[(9)] = inst_103561__$1);

return statearr_103598;
})();
if(inst_103563){
var statearr_103599_103626 = state_103593__$1;
(statearr_103599_103626[(1)] = (5));

} else {
var statearr_103600_103627 = state_103593__$1;
(statearr_103600_103627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (15))){
var inst_103583 = (state_103593[(2)]);
var state_103593__$1 = state_103593;
var statearr_103601_103628 = state_103593__$1;
(statearr_103601_103628[(2)] = inst_103583);

(statearr_103601_103628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (13))){
var state_103593__$1 = state_103593;
var statearr_103602_103629 = state_103593__$1;
(statearr_103602_103629[(2)] = null);

(statearr_103602_103629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (6))){
var inst_103558 = (state_103593[(8)]);
var inst_103579 = (inst_103558 > (0));
var state_103593__$1 = state_103593;
if(cljs.core.truth_(inst_103579)){
var statearr_103603_103630 = state_103593__$1;
(statearr_103603_103630[(1)] = (12));

} else {
var statearr_103604_103631 = state_103593__$1;
(statearr_103604_103631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (3))){
var inst_103591 = (state_103593[(2)]);
var state_103593__$1 = state_103593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103593__$1,inst_103591);
} else {
if((state_val_103594 === (12))){
var inst_103557 = (state_103593[(7)]);
var inst_103581 = cljs.core.vec.call(null,inst_103557);
var state_103593__$1 = state_103593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103593__$1,(15),out,inst_103581);
} else {
if((state_val_103594 === (2))){
var state_103593__$1 = state_103593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103593__$1,(4),ch);
} else {
if((state_val_103594 === (11))){
var inst_103573 = (state_103593[(2)]);
var inst_103574 = (new Array(n));
var inst_103557 = inst_103574;
var inst_103558 = (0);
var state_103593__$1 = (function (){var statearr_103605 = state_103593;
(statearr_103605[(7)] = inst_103557);

(statearr_103605[(8)] = inst_103558);

(statearr_103605[(10)] = inst_103573);

return statearr_103605;
})();
var statearr_103606_103632 = state_103593__$1;
(statearr_103606_103632[(2)] = null);

(statearr_103606_103632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (9))){
var inst_103557 = (state_103593[(7)]);
var inst_103571 = cljs.core.vec.call(null,inst_103557);
var state_103593__$1 = state_103593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103593__$1,(11),out,inst_103571);
} else {
if((state_val_103594 === (5))){
var inst_103566 = (state_103593[(11)]);
var inst_103557 = (state_103593[(7)]);
var inst_103558 = (state_103593[(8)]);
var inst_103561 = (state_103593[(9)]);
var inst_103565 = (inst_103557[inst_103558] = inst_103561);
var inst_103566__$1 = (inst_103558 + (1));
var inst_103567 = (inst_103566__$1 < n);
var state_103593__$1 = (function (){var statearr_103607 = state_103593;
(statearr_103607[(11)] = inst_103566__$1);

(statearr_103607[(12)] = inst_103565);

return statearr_103607;
})();
if(cljs.core.truth_(inst_103567)){
var statearr_103608_103633 = state_103593__$1;
(statearr_103608_103633[(1)] = (8));

} else {
var statearr_103609_103634 = state_103593__$1;
(statearr_103609_103634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (14))){
var inst_103586 = (state_103593[(2)]);
var inst_103587 = cljs.core.async.close_BANG_.call(null,out);
var state_103593__$1 = (function (){var statearr_103611 = state_103593;
(statearr_103611[(13)] = inst_103586);

return statearr_103611;
})();
var statearr_103612_103635 = state_103593__$1;
(statearr_103612_103635[(2)] = inst_103587);

(statearr_103612_103635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (10))){
var inst_103577 = (state_103593[(2)]);
var state_103593__$1 = state_103593;
var statearr_103613_103636 = state_103593__$1;
(statearr_103613_103636[(2)] = inst_103577);

(statearr_103613_103636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103594 === (8))){
var inst_103566 = (state_103593[(11)]);
var inst_103557 = (state_103593[(7)]);
var tmp103610 = inst_103557;
var inst_103557__$1 = tmp103610;
var inst_103558 = inst_103566;
var state_103593__$1 = (function (){var statearr_103614 = state_103593;
(statearr_103614[(7)] = inst_103557__$1);

(statearr_103614[(8)] = inst_103558);

return statearr_103614;
})();
var statearr_103615_103637 = state_103593__$1;
(statearr_103615_103637[(2)] = null);

(statearr_103615_103637[(1)] = (2));


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
});})(c__9199__auto___103623,out))
;
return ((function (switch__9184__auto__,c__9199__auto___103623,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_103619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103619[(0)] = state_machine__9185__auto__);

(statearr_103619[(1)] = (1));

return statearr_103619;
});
var state_machine__9185__auto____1 = (function (state_103593){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_103593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103620){if((e103620 instanceof Object)){
var ex__9188__auto__ = e103620;
var statearr_103621_103638 = state_103593;
(statearr_103621_103638[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103639 = state_103593;
state_103593 = G__103639;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_103593){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_103593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___103623,out))
})();
var state__9201__auto__ = (function (){var statearr_103622 = f__9200__auto__.call(null);
(statearr_103622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___103623);

return statearr_103622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___103623,out))
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
var c__9199__auto___103782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___103782,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___103782,out){
return (function (state_103752){
var state_val_103753 = (state_103752[(1)]);
if((state_val_103753 === (7))){
var inst_103748 = (state_103752[(2)]);
var state_103752__$1 = state_103752;
var statearr_103754_103783 = state_103752__$1;
(statearr_103754_103783[(2)] = inst_103748);

(statearr_103754_103783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (1))){
var inst_103711 = [];
var inst_103712 = inst_103711;
var inst_103713 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_103752__$1 = (function (){var statearr_103755 = state_103752;
(statearr_103755[(7)] = inst_103712);

(statearr_103755[(8)] = inst_103713);

return statearr_103755;
})();
var statearr_103756_103784 = state_103752__$1;
(statearr_103756_103784[(2)] = null);

(statearr_103756_103784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (4))){
var inst_103716 = (state_103752[(9)]);
var inst_103716__$1 = (state_103752[(2)]);
var inst_103717 = (inst_103716__$1 == null);
var inst_103718 = cljs.core.not.call(null,inst_103717);
var state_103752__$1 = (function (){var statearr_103757 = state_103752;
(statearr_103757[(9)] = inst_103716__$1);

return statearr_103757;
})();
if(inst_103718){
var statearr_103758_103785 = state_103752__$1;
(statearr_103758_103785[(1)] = (5));

} else {
var statearr_103759_103786 = state_103752__$1;
(statearr_103759_103786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (15))){
var inst_103742 = (state_103752[(2)]);
var state_103752__$1 = state_103752;
var statearr_103760_103787 = state_103752__$1;
(statearr_103760_103787[(2)] = inst_103742);

(statearr_103760_103787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (13))){
var state_103752__$1 = state_103752;
var statearr_103761_103788 = state_103752__$1;
(statearr_103761_103788[(2)] = null);

(statearr_103761_103788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (6))){
var inst_103712 = (state_103752[(7)]);
var inst_103737 = inst_103712.length;
var inst_103738 = (inst_103737 > (0));
var state_103752__$1 = state_103752;
if(cljs.core.truth_(inst_103738)){
var statearr_103762_103789 = state_103752__$1;
(statearr_103762_103789[(1)] = (12));

} else {
var statearr_103763_103790 = state_103752__$1;
(statearr_103763_103790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (3))){
var inst_103750 = (state_103752[(2)]);
var state_103752__$1 = state_103752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103752__$1,inst_103750);
} else {
if((state_val_103753 === (12))){
var inst_103712 = (state_103752[(7)]);
var inst_103740 = cljs.core.vec.call(null,inst_103712);
var state_103752__$1 = state_103752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103752__$1,(15),out,inst_103740);
} else {
if((state_val_103753 === (2))){
var state_103752__$1 = state_103752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103752__$1,(4),ch);
} else {
if((state_val_103753 === (11))){
var inst_103716 = (state_103752[(9)]);
var inst_103720 = (state_103752[(10)]);
var inst_103730 = (state_103752[(2)]);
var inst_103731 = [];
var inst_103732 = inst_103731.push(inst_103716);
var inst_103712 = inst_103731;
var inst_103713 = inst_103720;
var state_103752__$1 = (function (){var statearr_103764 = state_103752;
(statearr_103764[(7)] = inst_103712);

(statearr_103764[(11)] = inst_103732);

(statearr_103764[(8)] = inst_103713);

(statearr_103764[(12)] = inst_103730);

return statearr_103764;
})();
var statearr_103765_103791 = state_103752__$1;
(statearr_103765_103791[(2)] = null);

(statearr_103765_103791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (9))){
var inst_103712 = (state_103752[(7)]);
var inst_103728 = cljs.core.vec.call(null,inst_103712);
var state_103752__$1 = state_103752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103752__$1,(11),out,inst_103728);
} else {
if((state_val_103753 === (5))){
var inst_103716 = (state_103752[(9)]);
var inst_103713 = (state_103752[(8)]);
var inst_103720 = (state_103752[(10)]);
var inst_103720__$1 = f.call(null,inst_103716);
var inst_103721 = cljs.core._EQ_.call(null,inst_103720__$1,inst_103713);
var inst_103722 = cljs.core.keyword_identical_QMARK_.call(null,inst_103713,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_103723 = (inst_103721) || (inst_103722);
var state_103752__$1 = (function (){var statearr_103766 = state_103752;
(statearr_103766[(10)] = inst_103720__$1);

return statearr_103766;
})();
if(cljs.core.truth_(inst_103723)){
var statearr_103767_103792 = state_103752__$1;
(statearr_103767_103792[(1)] = (8));

} else {
var statearr_103768_103793 = state_103752__$1;
(statearr_103768_103793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (14))){
var inst_103745 = (state_103752[(2)]);
var inst_103746 = cljs.core.async.close_BANG_.call(null,out);
var state_103752__$1 = (function (){var statearr_103770 = state_103752;
(statearr_103770[(13)] = inst_103745);

return statearr_103770;
})();
var statearr_103771_103794 = state_103752__$1;
(statearr_103771_103794[(2)] = inst_103746);

(statearr_103771_103794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (10))){
var inst_103735 = (state_103752[(2)]);
var state_103752__$1 = state_103752;
var statearr_103772_103795 = state_103752__$1;
(statearr_103772_103795[(2)] = inst_103735);

(statearr_103772_103795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103753 === (8))){
var inst_103716 = (state_103752[(9)]);
var inst_103712 = (state_103752[(7)]);
var inst_103720 = (state_103752[(10)]);
var inst_103725 = inst_103712.push(inst_103716);
var tmp103769 = inst_103712;
var inst_103712__$1 = tmp103769;
var inst_103713 = inst_103720;
var state_103752__$1 = (function (){var statearr_103773 = state_103752;
(statearr_103773[(7)] = inst_103712__$1);

(statearr_103773[(8)] = inst_103713);

(statearr_103773[(14)] = inst_103725);

return statearr_103773;
})();
var statearr_103774_103796 = state_103752__$1;
(statearr_103774_103796[(2)] = null);

(statearr_103774_103796[(1)] = (2));


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
});})(c__9199__auto___103782,out))
;
return ((function (switch__9184__auto__,c__9199__auto___103782,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_103778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103778[(0)] = state_machine__9185__auto__);

(statearr_103778[(1)] = (1));

return statearr_103778;
});
var state_machine__9185__auto____1 = (function (state_103752){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_103752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e103779){if((e103779 instanceof Object)){
var ex__9188__auto__ = e103779;
var statearr_103780_103797 = state_103752;
(statearr_103780_103797[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103798 = state_103752;
state_103752 = G__103798;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_103752){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_103752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___103782,out))
})();
var state__9201__auto__ = (function (){var statearr_103781 = f__9200__auto__.call(null);
(statearr_103781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___103782);

return statearr_103781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___103782,out))
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