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
if(typeof cljs.core.async.t14262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14262 = (function (f,fn_handler,meta14263){
this.f = f;
this.fn_handler = fn_handler;
this.meta14263 = meta14263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14264){
var self__ = this;
var _14264__$1 = this;
return self__.meta14263;
});

cljs.core.async.t14262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14264,meta14263__$1){
var self__ = this;
var _14264__$1 = this;
return (new cljs.core.async.t14262(self__.f,self__.fn_handler,meta14263__$1));
});

cljs.core.async.t14262.cljs$lang$type = true;

cljs.core.async.t14262.cljs$lang$ctorStr = "cljs.core.async/t14262";

cljs.core.async.t14262.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14262");
});

cljs.core.async.__GT_t14262 = (function __GT_t14262(f__$1,fn_handler__$1,meta14263){
return (new cljs.core.async.t14262(f__$1,fn_handler__$1,meta14263));
});

}

return (new cljs.core.async.t14262(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__14266 = buff;
if(G__14266){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__14266.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14266.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14266);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14266);
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
var val_14267 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14267);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14267,ret){
return (function (){
return fn1.call(null,val_14267);
});})(val_14267,ret))
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
var n__4509__auto___14268 = n;
var x_14269 = (0);
while(true){
if((x_14269 < n__4509__auto___14268)){
(a[x_14269] = (0));

var G__14270 = (x_14269 + (1));
x_14269 = G__14270;
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

var G__14271 = (i + (1));
i = G__14271;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14275 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14275 = (function (flag,alt_flag,meta14276){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14276 = meta14276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14275.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14277){
var self__ = this;
var _14277__$1 = this;
return self__.meta14276;
});})(flag))
;

cljs.core.async.t14275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14277,meta14276__$1){
var self__ = this;
var _14277__$1 = this;
return (new cljs.core.async.t14275(self__.flag,self__.alt_flag,meta14276__$1));
});})(flag))
;

cljs.core.async.t14275.cljs$lang$type = true;

cljs.core.async.t14275.cljs$lang$ctorStr = "cljs.core.async/t14275";

cljs.core.async.t14275.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14275");
});})(flag))
;

cljs.core.async.__GT_t14275 = ((function (flag){
return (function __GT_t14275(flag__$1,alt_flag__$1,meta14276){
return (new cljs.core.async.t14275(flag__$1,alt_flag__$1,meta14276));
});})(flag))
;

}

return (new cljs.core.async.t14275(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14281 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14281 = (function (cb,flag,alt_handler,meta14282){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14282 = meta14282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14283){
var self__ = this;
var _14283__$1 = this;
return self__.meta14282;
});

cljs.core.async.t14281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14283,meta14282__$1){
var self__ = this;
var _14283__$1 = this;
return (new cljs.core.async.t14281(self__.cb,self__.flag,self__.alt_handler,meta14282__$1));
});

cljs.core.async.t14281.cljs$lang$type = true;

cljs.core.async.t14281.cljs$lang$ctorStr = "cljs.core.async/t14281";

cljs.core.async.t14281.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14281");
});

cljs.core.async.__GT_t14281 = (function __GT_t14281(cb__$1,flag__$1,alt_handler__$1,meta14282){
return (new cljs.core.async.t14281(cb__$1,flag__$1,alt_handler__$1,meta14282));
});

}

return (new cljs.core.async.t14281(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__14284_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14284_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14285_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14285_SHARP_,port], null));
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
var G__14286 = (i + (1));
i = G__14286;
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
var alts_BANG___delegate = function (ports,p__14287){
var map__14289 = p__14287;
var map__14289__$1 = ((cljs.core.seq_QMARK_.call(null,map__14289))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289):map__14289);
var opts = map__14289__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14287 = null;
if (arguments.length > 1) {
  p__14287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14287);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14290){
var ports = cljs.core.first(arglist__14290);
var p__14287 = cljs.core.rest(arglist__14290);
return alts_BANG___delegate(ports,p__14287);
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
var c__11502__auto___14385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___14385){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___14385){
return (function (state_14361){
var state_val_14362 = (state_14361[(1)]);
if((state_val_14362 === (7))){
var inst_14357 = (state_14361[(2)]);
var state_14361__$1 = state_14361;
var statearr_14363_14386 = state_14361__$1;
(statearr_14363_14386[(2)] = inst_14357);

(statearr_14363_14386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (1))){
var state_14361__$1 = state_14361;
var statearr_14364_14387 = state_14361__$1;
(statearr_14364_14387[(2)] = null);

(statearr_14364_14387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (4))){
var inst_14340 = (state_14361[(7)]);
var inst_14340__$1 = (state_14361[(2)]);
var inst_14341 = (inst_14340__$1 == null);
var state_14361__$1 = (function (){var statearr_14365 = state_14361;
(statearr_14365[(7)] = inst_14340__$1);

return statearr_14365;
})();
if(cljs.core.truth_(inst_14341)){
var statearr_14366_14388 = state_14361__$1;
(statearr_14366_14388[(1)] = (5));

} else {
var statearr_14367_14389 = state_14361__$1;
(statearr_14367_14389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (13))){
var state_14361__$1 = state_14361;
var statearr_14368_14390 = state_14361__$1;
(statearr_14368_14390[(2)] = null);

(statearr_14368_14390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (6))){
var inst_14340 = (state_14361[(7)]);
var state_14361__$1 = state_14361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14361__$1,(11),to,inst_14340);
} else {
if((state_val_14362 === (3))){
var inst_14359 = (state_14361[(2)]);
var state_14361__$1 = state_14361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14361__$1,inst_14359);
} else {
if((state_val_14362 === (12))){
var state_14361__$1 = state_14361;
var statearr_14369_14391 = state_14361__$1;
(statearr_14369_14391[(2)] = null);

(statearr_14369_14391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (2))){
var state_14361__$1 = state_14361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14361__$1,(4),from);
} else {
if((state_val_14362 === (11))){
var inst_14350 = (state_14361[(2)]);
var state_14361__$1 = state_14361;
if(cljs.core.truth_(inst_14350)){
var statearr_14370_14392 = state_14361__$1;
(statearr_14370_14392[(1)] = (12));

} else {
var statearr_14371_14393 = state_14361__$1;
(statearr_14371_14393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (9))){
var state_14361__$1 = state_14361;
var statearr_14372_14394 = state_14361__$1;
(statearr_14372_14394[(2)] = null);

(statearr_14372_14394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (5))){
var state_14361__$1 = state_14361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14373_14395 = state_14361__$1;
(statearr_14373_14395[(1)] = (8));

} else {
var statearr_14374_14396 = state_14361__$1;
(statearr_14374_14396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (14))){
var inst_14355 = (state_14361[(2)]);
var state_14361__$1 = state_14361;
var statearr_14375_14397 = state_14361__$1;
(statearr_14375_14397[(2)] = inst_14355);

(statearr_14375_14397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (10))){
var inst_14347 = (state_14361[(2)]);
var state_14361__$1 = state_14361;
var statearr_14376_14398 = state_14361__$1;
(statearr_14376_14398[(2)] = inst_14347);

(statearr_14376_14398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14362 === (8))){
var inst_14344 = cljs.core.async.close_BANG_.call(null,to);
var state_14361__$1 = state_14361;
var statearr_14377_14399 = state_14361__$1;
(statearr_14377_14399[(2)] = inst_14344);

(statearr_14377_14399[(1)] = (10));


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
});})(c__11502__auto___14385))
;
return ((function (switch__11446__auto__,c__11502__auto___14385){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14381 = [null,null,null,null,null,null,null,null];
(statearr_14381[(0)] = state_machine__11447__auto__);

(statearr_14381[(1)] = (1));

return statearr_14381;
});
var state_machine__11447__auto____1 = (function (state_14361){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14382){if((e14382 instanceof Object)){
var ex__11450__auto__ = e14382;
var statearr_14383_14400 = state_14361;
(statearr_14383_14400[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14401 = state_14361;
state_14361 = G__14401;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14361){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___14385))
})();
var state__11504__auto__ = (function (){var statearr_14384 = f__11503__auto__.call(null);
(statearr_14384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14385);

return statearr_14384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___14385))
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
return (function (p__14585){
var vec__14586 = p__14585;
var v = cljs.core.nth.call(null,vec__14586,(0),null);
var p = cljs.core.nth.call(null,vec__14586,(1),null);
var job = vec__14586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11502__auto___14768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results){
return (function (state_14591){
var state_val_14592 = (state_14591[(1)]);
if((state_val_14592 === (2))){
var inst_14588 = (state_14591[(2)]);
var inst_14589 = cljs.core.async.close_BANG_.call(null,res);
var state_14591__$1 = (function (){var statearr_14593 = state_14591;
(statearr_14593[(7)] = inst_14588);

return statearr_14593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14591__$1,inst_14589);
} else {
if((state_val_14592 === (1))){
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14591__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results))
;
return ((function (switch__11446__auto__,c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14597 = [null,null,null,null,null,null,null,null];
(statearr_14597[(0)] = state_machine__11447__auto__);

(statearr_14597[(1)] = (1));

return statearr_14597;
});
var state_machine__11447__auto____1 = (function (state_14591){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14598){if((e14598 instanceof Object)){
var ex__11450__auto__ = e14598;
var statearr_14599_14769 = state_14591;
(statearr_14599_14769[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14770 = state_14591;
state_14591 = G__14770;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results))
})();
var state__11504__auto__ = (function (){var statearr_14600 = f__11503__auto__.call(null);
(statearr_14600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14768);

return statearr_14600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___14768,res,vec__14586,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14601){
var vec__14602 = p__14601;
var v = cljs.core.nth.call(null,vec__14602,(0),null);
var p = cljs.core.nth.call(null,vec__14602,(1),null);
var job = vec__14602;
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
var n__4509__auto___14771 = n;
var __14772 = (0);
while(true){
if((__14772 < n__4509__auto___14771)){
var G__14603_14773 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14603_14773) {
case "async":
var c__11502__auto___14775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14772,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (__14772,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function (state_14616){
var state_val_14617 = (state_14616[(1)]);
if((state_val_14617 === (7))){
var inst_14612 = (state_14616[(2)]);
var state_14616__$1 = state_14616;
var statearr_14618_14776 = state_14616__$1;
(statearr_14618_14776[(2)] = inst_14612);

(statearr_14618_14776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14617 === (6))){
var state_14616__$1 = state_14616;
var statearr_14619_14777 = state_14616__$1;
(statearr_14619_14777[(2)] = null);

(statearr_14619_14777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14617 === (5))){
var state_14616__$1 = state_14616;
var statearr_14620_14778 = state_14616__$1;
(statearr_14620_14778[(2)] = null);

(statearr_14620_14778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14617 === (4))){
var inst_14606 = (state_14616[(2)]);
var inst_14607 = async.call(null,inst_14606);
var state_14616__$1 = state_14616;
if(cljs.core.truth_(inst_14607)){
var statearr_14621_14779 = state_14616__$1;
(statearr_14621_14779[(1)] = (5));

} else {
var statearr_14622_14780 = state_14616__$1;
(statearr_14622_14780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14617 === (3))){
var inst_14614 = (state_14616[(2)]);
var state_14616__$1 = state_14616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14616__$1,inst_14614);
} else {
if((state_val_14617 === (2))){
var state_14616__$1 = state_14616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14616__$1,(4),jobs);
} else {
if((state_val_14617 === (1))){
var state_14616__$1 = state_14616;
var statearr_14623_14781 = state_14616__$1;
(statearr_14623_14781[(2)] = null);

(statearr_14623_14781[(1)] = (2));


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
});})(__14772,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
;
return ((function (__14772,switch__11446__auto__,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14627 = [null,null,null,null,null,null,null];
(statearr_14627[(0)] = state_machine__11447__auto__);

(statearr_14627[(1)] = (1));

return statearr_14627;
});
var state_machine__11447__auto____1 = (function (state_14616){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14628){if((e14628 instanceof Object)){
var ex__11450__auto__ = e14628;
var statearr_14629_14782 = state_14616;
(statearr_14629_14782[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14783 = state_14616;
state_14616 = G__14783;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14616){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(__14772,switch__11446__auto__,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
})();
var state__11504__auto__ = (function (){var statearr_14630 = f__11503__auto__.call(null);
(statearr_14630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14775);

return statearr_14630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(__14772,c__11502__auto___14775,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
);


break;
case "compute":
var c__11502__auto___14784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14772,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (__14772,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function (state_14643){
var state_val_14644 = (state_14643[(1)]);
if((state_val_14644 === (7))){
var inst_14639 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14645_14785 = state_14643__$1;
(statearr_14645_14785[(2)] = inst_14639);

(statearr_14645_14785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (6))){
var state_14643__$1 = state_14643;
var statearr_14646_14786 = state_14643__$1;
(statearr_14646_14786[(2)] = null);

(statearr_14646_14786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (5))){
var state_14643__$1 = state_14643;
var statearr_14647_14787 = state_14643__$1;
(statearr_14647_14787[(2)] = null);

(statearr_14647_14787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (4))){
var inst_14633 = (state_14643[(2)]);
var inst_14634 = process.call(null,inst_14633);
var state_14643__$1 = state_14643;
if(cljs.core.truth_(inst_14634)){
var statearr_14648_14788 = state_14643__$1;
(statearr_14648_14788[(1)] = (5));

} else {
var statearr_14649_14789 = state_14643__$1;
(statearr_14649_14789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (3))){
var inst_14641 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14643__$1,inst_14641);
} else {
if((state_val_14644 === (2))){
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14643__$1,(4),jobs);
} else {
if((state_val_14644 === (1))){
var state_14643__$1 = state_14643;
var statearr_14650_14790 = state_14643__$1;
(statearr_14650_14790[(2)] = null);

(statearr_14650_14790[(1)] = (2));


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
});})(__14772,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
;
return ((function (__14772,switch__11446__auto__,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14654 = [null,null,null,null,null,null,null];
(statearr_14654[(0)] = state_machine__11447__auto__);

(statearr_14654[(1)] = (1));

return statearr_14654;
});
var state_machine__11447__auto____1 = (function (state_14643){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14655){if((e14655 instanceof Object)){
var ex__11450__auto__ = e14655;
var statearr_14656_14791 = state_14643;
(statearr_14656_14791[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14792 = state_14643;
state_14643 = G__14792;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14643){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(__14772,switch__11446__auto__,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
})();
var state__11504__auto__ = (function (){var statearr_14657 = f__11503__auto__.call(null);
(statearr_14657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14784);

return statearr_14657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(__14772,c__11502__auto___14784,G__14603_14773,n__4509__auto___14771,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14793 = (__14772 + (1));
__14772 = G__14793;
continue;
} else {
}
break;
}

var c__11502__auto___14794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___14794,jobs,results,process,async){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___14794,jobs,results,process,async){
return (function (state_14679){
var state_val_14680 = (state_14679[(1)]);
if((state_val_14680 === (9))){
var inst_14672 = (state_14679[(2)]);
var state_14679__$1 = (function (){var statearr_14681 = state_14679;
(statearr_14681[(7)] = inst_14672);

return statearr_14681;
})();
var statearr_14682_14795 = state_14679__$1;
(statearr_14682_14795[(2)] = null);

(statearr_14682_14795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (8))){
var inst_14665 = (state_14679[(8)]);
var inst_14670 = (state_14679[(2)]);
var state_14679__$1 = (function (){var statearr_14683 = state_14679;
(statearr_14683[(9)] = inst_14670);

return statearr_14683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14679__$1,(9),results,inst_14665);
} else {
if((state_val_14680 === (7))){
var inst_14675 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14684_14796 = state_14679__$1;
(statearr_14684_14796[(2)] = inst_14675);

(statearr_14684_14796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (6))){
var inst_14660 = (state_14679[(10)]);
var inst_14665 = (state_14679[(8)]);
var inst_14665__$1 = cljs.core.async.chan.call(null,(1));
var inst_14666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14667 = [inst_14660,inst_14665__$1];
var inst_14668 = (new cljs.core.PersistentVector(null,2,(5),inst_14666,inst_14667,null));
var state_14679__$1 = (function (){var statearr_14685 = state_14679;
(statearr_14685[(8)] = inst_14665__$1);

return statearr_14685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14679__$1,(8),jobs,inst_14668);
} else {
if((state_val_14680 === (5))){
var inst_14663 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14679__$1 = state_14679;
var statearr_14686_14797 = state_14679__$1;
(statearr_14686_14797[(2)] = inst_14663);

(statearr_14686_14797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (4))){
var inst_14660 = (state_14679[(10)]);
var inst_14660__$1 = (state_14679[(2)]);
var inst_14661 = (inst_14660__$1 == null);
var state_14679__$1 = (function (){var statearr_14687 = state_14679;
(statearr_14687[(10)] = inst_14660__$1);

return statearr_14687;
})();
if(cljs.core.truth_(inst_14661)){
var statearr_14688_14798 = state_14679__$1;
(statearr_14688_14798[(1)] = (5));

} else {
var statearr_14689_14799 = state_14679__$1;
(statearr_14689_14799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (3))){
var inst_14677 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14679__$1,inst_14677);
} else {
if((state_val_14680 === (2))){
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14679__$1,(4),from);
} else {
if((state_val_14680 === (1))){
var state_14679__$1 = state_14679;
var statearr_14690_14800 = state_14679__$1;
(statearr_14690_14800[(2)] = null);

(statearr_14690_14800[(1)] = (2));


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
});})(c__11502__auto___14794,jobs,results,process,async))
;
return ((function (switch__11446__auto__,c__11502__auto___14794,jobs,results,process,async){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14694[(0)] = state_machine__11447__auto__);

(statearr_14694[(1)] = (1));

return statearr_14694;
});
var state_machine__11447__auto____1 = (function (state_14679){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object)){
var ex__11450__auto__ = e14695;
var statearr_14696_14801 = state_14679;
(statearr_14696_14801[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14802 = state_14679;
state_14679 = G__14802;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14679){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___14794,jobs,results,process,async))
})();
var state__11504__auto__ = (function (){var statearr_14697 = f__11503__auto__.call(null);
(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14794);

return statearr_14697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___14794,jobs,results,process,async))
);


var c__11502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto__,jobs,results,process,async){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto__,jobs,results,process,async){
return (function (state_14735){
var state_val_14736 = (state_14735[(1)]);
if((state_val_14736 === (7))){
var inst_14731 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14737_14803 = state_14735__$1;
(statearr_14737_14803[(2)] = inst_14731);

(statearr_14737_14803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (20))){
var state_14735__$1 = state_14735;
var statearr_14738_14804 = state_14735__$1;
(statearr_14738_14804[(2)] = null);

(statearr_14738_14804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (1))){
var state_14735__$1 = state_14735;
var statearr_14739_14805 = state_14735__$1;
(statearr_14739_14805[(2)] = null);

(statearr_14739_14805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (4))){
var inst_14700 = (state_14735[(7)]);
var inst_14700__$1 = (state_14735[(2)]);
var inst_14701 = (inst_14700__$1 == null);
var state_14735__$1 = (function (){var statearr_14740 = state_14735;
(statearr_14740[(7)] = inst_14700__$1);

return statearr_14740;
})();
if(cljs.core.truth_(inst_14701)){
var statearr_14741_14806 = state_14735__$1;
(statearr_14741_14806[(1)] = (5));

} else {
var statearr_14742_14807 = state_14735__$1;
(statearr_14742_14807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (15))){
var inst_14713 = (state_14735[(8)]);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14735__$1,(18),to,inst_14713);
} else {
if((state_val_14736 === (21))){
var inst_14726 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14743_14808 = state_14735__$1;
(statearr_14743_14808[(2)] = inst_14726);

(statearr_14743_14808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (13))){
var inst_14728 = (state_14735[(2)]);
var state_14735__$1 = (function (){var statearr_14744 = state_14735;
(statearr_14744[(9)] = inst_14728);

return statearr_14744;
})();
var statearr_14745_14809 = state_14735__$1;
(statearr_14745_14809[(2)] = null);

(statearr_14745_14809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (6))){
var inst_14700 = (state_14735[(7)]);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14735__$1,(11),inst_14700);
} else {
if((state_val_14736 === (17))){
var inst_14721 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
if(cljs.core.truth_(inst_14721)){
var statearr_14746_14810 = state_14735__$1;
(statearr_14746_14810[(1)] = (19));

} else {
var statearr_14747_14811 = state_14735__$1;
(statearr_14747_14811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (3))){
var inst_14733 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14735__$1,inst_14733);
} else {
if((state_val_14736 === (12))){
var inst_14710 = (state_14735[(10)]);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14735__$1,(14),inst_14710);
} else {
if((state_val_14736 === (2))){
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14735__$1,(4),results);
} else {
if((state_val_14736 === (19))){
var state_14735__$1 = state_14735;
var statearr_14748_14812 = state_14735__$1;
(statearr_14748_14812[(2)] = null);

(statearr_14748_14812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (11))){
var inst_14710 = (state_14735[(2)]);
var state_14735__$1 = (function (){var statearr_14749 = state_14735;
(statearr_14749[(10)] = inst_14710);

return statearr_14749;
})();
var statearr_14750_14813 = state_14735__$1;
(statearr_14750_14813[(2)] = null);

(statearr_14750_14813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (9))){
var state_14735__$1 = state_14735;
var statearr_14751_14814 = state_14735__$1;
(statearr_14751_14814[(2)] = null);

(statearr_14751_14814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (5))){
var state_14735__$1 = state_14735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14752_14815 = state_14735__$1;
(statearr_14752_14815[(1)] = (8));

} else {
var statearr_14753_14816 = state_14735__$1;
(statearr_14753_14816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (14))){
var inst_14715 = (state_14735[(11)]);
var inst_14713 = (state_14735[(8)]);
var inst_14713__$1 = (state_14735[(2)]);
var inst_14714 = (inst_14713__$1 == null);
var inst_14715__$1 = cljs.core.not.call(null,inst_14714);
var state_14735__$1 = (function (){var statearr_14754 = state_14735;
(statearr_14754[(11)] = inst_14715__$1);

(statearr_14754[(8)] = inst_14713__$1);

return statearr_14754;
})();
if(inst_14715__$1){
var statearr_14755_14817 = state_14735__$1;
(statearr_14755_14817[(1)] = (15));

} else {
var statearr_14756_14818 = state_14735__$1;
(statearr_14756_14818[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (16))){
var inst_14715 = (state_14735[(11)]);
var state_14735__$1 = state_14735;
var statearr_14757_14819 = state_14735__$1;
(statearr_14757_14819[(2)] = inst_14715);

(statearr_14757_14819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (10))){
var inst_14707 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14758_14820 = state_14735__$1;
(statearr_14758_14820[(2)] = inst_14707);

(statearr_14758_14820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (18))){
var inst_14718 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14759_14821 = state_14735__$1;
(statearr_14759_14821[(2)] = inst_14718);

(statearr_14759_14821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (8))){
var inst_14704 = cljs.core.async.close_BANG_.call(null,to);
var state_14735__$1 = state_14735;
var statearr_14760_14822 = state_14735__$1;
(statearr_14760_14822[(2)] = inst_14704);

(statearr_14760_14822[(1)] = (10));


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
});})(c__11502__auto__,jobs,results,process,async))
;
return ((function (switch__11446__auto__,c__11502__auto__,jobs,results,process,async){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14764[(0)] = state_machine__11447__auto__);

(statearr_14764[(1)] = (1));

return statearr_14764;
});
var state_machine__11447__auto____1 = (function (state_14735){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14765){if((e14765 instanceof Object)){
var ex__11450__auto__ = e14765;
var statearr_14766_14823 = state_14735;
(statearr_14766_14823[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14824 = state_14735;
state_14735 = G__14824;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14735){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto__,jobs,results,process,async))
})();
var state__11504__auto__ = (function (){var statearr_14767 = f__11503__auto__.call(null);
(statearr_14767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto__);

return statearr_14767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto__,jobs,results,process,async))
);

return c__11502__auto__;
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
var c__11502__auto___14925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___14925,tc,fc){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___14925,tc,fc){
return (function (state_14900){
var state_val_14901 = (state_14900[(1)]);
if((state_val_14901 === (7))){
var inst_14896 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14902_14926 = state_14900__$1;
(statearr_14902_14926[(2)] = inst_14896);

(statearr_14902_14926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (1))){
var state_14900__$1 = state_14900;
var statearr_14903_14927 = state_14900__$1;
(statearr_14903_14927[(2)] = null);

(statearr_14903_14927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (4))){
var inst_14877 = (state_14900[(7)]);
var inst_14877__$1 = (state_14900[(2)]);
var inst_14878 = (inst_14877__$1 == null);
var state_14900__$1 = (function (){var statearr_14904 = state_14900;
(statearr_14904[(7)] = inst_14877__$1);

return statearr_14904;
})();
if(cljs.core.truth_(inst_14878)){
var statearr_14905_14928 = state_14900__$1;
(statearr_14905_14928[(1)] = (5));

} else {
var statearr_14906_14929 = state_14900__$1;
(statearr_14906_14929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (13))){
var state_14900__$1 = state_14900;
var statearr_14907_14930 = state_14900__$1;
(statearr_14907_14930[(2)] = null);

(statearr_14907_14930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (6))){
var inst_14877 = (state_14900[(7)]);
var inst_14883 = p.call(null,inst_14877);
var state_14900__$1 = state_14900;
if(cljs.core.truth_(inst_14883)){
var statearr_14908_14931 = state_14900__$1;
(statearr_14908_14931[(1)] = (9));

} else {
var statearr_14909_14932 = state_14900__$1;
(statearr_14909_14932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (3))){
var inst_14898 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14900__$1,inst_14898);
} else {
if((state_val_14901 === (12))){
var state_14900__$1 = state_14900;
var statearr_14910_14933 = state_14900__$1;
(statearr_14910_14933[(2)] = null);

(statearr_14910_14933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (2))){
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14900__$1,(4),ch);
} else {
if((state_val_14901 === (11))){
var inst_14877 = (state_14900[(7)]);
var inst_14887 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14900__$1,(8),inst_14887,inst_14877);
} else {
if((state_val_14901 === (9))){
var state_14900__$1 = state_14900;
var statearr_14911_14934 = state_14900__$1;
(statearr_14911_14934[(2)] = tc);

(statearr_14911_14934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (5))){
var inst_14880 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14881 = cljs.core.async.close_BANG_.call(null,fc);
var state_14900__$1 = (function (){var statearr_14912 = state_14900;
(statearr_14912[(8)] = inst_14880);

return statearr_14912;
})();
var statearr_14913_14935 = state_14900__$1;
(statearr_14913_14935[(2)] = inst_14881);

(statearr_14913_14935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (14))){
var inst_14894 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14914_14936 = state_14900__$1;
(statearr_14914_14936[(2)] = inst_14894);

(statearr_14914_14936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (10))){
var state_14900__$1 = state_14900;
var statearr_14915_14937 = state_14900__$1;
(statearr_14915_14937[(2)] = fc);

(statearr_14915_14937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (8))){
var inst_14889 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
if(cljs.core.truth_(inst_14889)){
var statearr_14916_14938 = state_14900__$1;
(statearr_14916_14938[(1)] = (12));

} else {
var statearr_14917_14939 = state_14900__$1;
(statearr_14917_14939[(1)] = (13));

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
});})(c__11502__auto___14925,tc,fc))
;
return ((function (switch__11446__auto__,c__11502__auto___14925,tc,fc){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_14921 = [null,null,null,null,null,null,null,null,null];
(statearr_14921[(0)] = state_machine__11447__auto__);

(statearr_14921[(1)] = (1));

return statearr_14921;
});
var state_machine__11447__auto____1 = (function (state_14900){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e14922){if((e14922 instanceof Object)){
var ex__11450__auto__ = e14922;
var statearr_14923_14940 = state_14900;
(statearr_14923_14940[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14941 = state_14900;
state_14900 = G__14941;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14900){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___14925,tc,fc))
})();
var state__11504__auto__ = (function (){var statearr_14924 = f__11503__auto__.call(null);
(statearr_14924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___14925);

return statearr_14924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___14925,tc,fc))
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
var c__11502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto__){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto__){
return (function (state_14988){
var state_val_14989 = (state_14988[(1)]);
if((state_val_14989 === (7))){
var inst_14984 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
var statearr_14990_15006 = state_14988__$1;
(statearr_14990_15006[(2)] = inst_14984);

(statearr_14990_15006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (6))){
var inst_14977 = (state_14988[(7)]);
var inst_14974 = (state_14988[(8)]);
var inst_14981 = f.call(null,inst_14974,inst_14977);
var inst_14974__$1 = inst_14981;
var state_14988__$1 = (function (){var statearr_14991 = state_14988;
(statearr_14991[(8)] = inst_14974__$1);

return statearr_14991;
})();
var statearr_14992_15007 = state_14988__$1;
(statearr_14992_15007[(2)] = null);

(statearr_14992_15007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (5))){
var inst_14974 = (state_14988[(8)]);
var state_14988__$1 = state_14988;
var statearr_14993_15008 = state_14988__$1;
(statearr_14993_15008[(2)] = inst_14974);

(statearr_14993_15008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (4))){
var inst_14977 = (state_14988[(7)]);
var inst_14977__$1 = (state_14988[(2)]);
var inst_14978 = (inst_14977__$1 == null);
var state_14988__$1 = (function (){var statearr_14994 = state_14988;
(statearr_14994[(7)] = inst_14977__$1);

return statearr_14994;
})();
if(cljs.core.truth_(inst_14978)){
var statearr_14995_15009 = state_14988__$1;
(statearr_14995_15009[(1)] = (5));

} else {
var statearr_14996_15010 = state_14988__$1;
(statearr_14996_15010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (3))){
var inst_14986 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14988__$1,inst_14986);
} else {
if((state_val_14989 === (2))){
var state_14988__$1 = state_14988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14988__$1,(4),ch);
} else {
if((state_val_14989 === (1))){
var inst_14974 = init;
var state_14988__$1 = (function (){var statearr_14997 = state_14988;
(statearr_14997[(8)] = inst_14974);

return statearr_14997;
})();
var statearr_14998_15011 = state_14988__$1;
(statearr_14998_15011[(2)] = null);

(statearr_14998_15011[(1)] = (2));


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
});})(c__11502__auto__))
;
return ((function (switch__11446__auto__,c__11502__auto__){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_15002 = [null,null,null,null,null,null,null,null,null];
(statearr_15002[(0)] = state_machine__11447__auto__);

(statearr_15002[(1)] = (1));

return statearr_15002;
});
var state_machine__11447__auto____1 = (function (state_14988){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_14988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e15003){if((e15003 instanceof Object)){
var ex__11450__auto__ = e15003;
var statearr_15004_15012 = state_14988;
(statearr_15004_15012[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15013 = state_14988;
state_14988 = G__15013;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_14988){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_14988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto__))
})();
var state__11504__auto__ = (function (){var statearr_15005 = f__11503__auto__.call(null);
(statearr_15005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto__);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto__))
);

return c__11502__auto__;
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
var c__11502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto__){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto__){
return (function (state_15087){
var state_val_15088 = (state_15087[(1)]);
if((state_val_15088 === (7))){
var inst_15069 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15089_15112 = state_15087__$1;
(statearr_15089_15112[(2)] = inst_15069);

(statearr_15089_15112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (1))){
var inst_15063 = cljs.core.seq.call(null,coll);
var inst_15064 = inst_15063;
var state_15087__$1 = (function (){var statearr_15090 = state_15087;
(statearr_15090[(7)] = inst_15064);

return statearr_15090;
})();
var statearr_15091_15113 = state_15087__$1;
(statearr_15091_15113[(2)] = null);

(statearr_15091_15113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (4))){
var inst_15064 = (state_15087[(7)]);
var inst_15067 = cljs.core.first.call(null,inst_15064);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15087__$1,(7),ch,inst_15067);
} else {
if((state_val_15088 === (13))){
var inst_15081 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15092_15114 = state_15087__$1;
(statearr_15092_15114[(2)] = inst_15081);

(statearr_15092_15114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (6))){
var inst_15072 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15072)){
var statearr_15093_15115 = state_15087__$1;
(statearr_15093_15115[(1)] = (8));

} else {
var statearr_15094_15116 = state_15087__$1;
(statearr_15094_15116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (3))){
var inst_15085 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15087__$1,inst_15085);
} else {
if((state_val_15088 === (12))){
var state_15087__$1 = state_15087;
var statearr_15095_15117 = state_15087__$1;
(statearr_15095_15117[(2)] = null);

(statearr_15095_15117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (2))){
var inst_15064 = (state_15087[(7)]);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15064)){
var statearr_15096_15118 = state_15087__$1;
(statearr_15096_15118[(1)] = (4));

} else {
var statearr_15097_15119 = state_15087__$1;
(statearr_15097_15119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (11))){
var inst_15078 = cljs.core.async.close_BANG_.call(null,ch);
var state_15087__$1 = state_15087;
var statearr_15098_15120 = state_15087__$1;
(statearr_15098_15120[(2)] = inst_15078);

(statearr_15098_15120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (9))){
var state_15087__$1 = state_15087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15099_15121 = state_15087__$1;
(statearr_15099_15121[(1)] = (11));

} else {
var statearr_15100_15122 = state_15087__$1;
(statearr_15100_15122[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (5))){
var inst_15064 = (state_15087[(7)]);
var state_15087__$1 = state_15087;
var statearr_15101_15123 = state_15087__$1;
(statearr_15101_15123[(2)] = inst_15064);

(statearr_15101_15123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (10))){
var inst_15083 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15102_15124 = state_15087__$1;
(statearr_15102_15124[(2)] = inst_15083);

(statearr_15102_15124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (8))){
var inst_15064 = (state_15087[(7)]);
var inst_15074 = cljs.core.next.call(null,inst_15064);
var inst_15064__$1 = inst_15074;
var state_15087__$1 = (function (){var statearr_15103 = state_15087;
(statearr_15103[(7)] = inst_15064__$1);

return statearr_15103;
})();
var statearr_15104_15125 = state_15087__$1;
(statearr_15104_15125[(2)] = null);

(statearr_15104_15125[(1)] = (2));


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
});})(c__11502__auto__))
;
return ((function (switch__11446__auto__,c__11502__auto__){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_15108 = [null,null,null,null,null,null,null,null];
(statearr_15108[(0)] = state_machine__11447__auto__);

(statearr_15108[(1)] = (1));

return statearr_15108;
});
var state_machine__11447__auto____1 = (function (state_15087){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_15087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e15109){if((e15109 instanceof Object)){
var ex__11450__auto__ = e15109;
var statearr_15110_15126 = state_15087;
(statearr_15110_15126[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15127 = state_15087;
state_15087 = G__15127;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto__))
})();
var state__11504__auto__ = (function (){var statearr_15111 = f__11503__auto__.call(null);
(statearr_15111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto__);

return statearr_15111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto__))
);

return c__11502__auto__;
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

cljs.core.async.Mux = (function (){var obj15129 = {};
return obj15129;
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


cljs.core.async.Mult = (function (){var obj15131 = {};
return obj15131;
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
if(typeof cljs.core.async.t15353 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15353 = (function (cs,ch,mult,meta15354){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15354 = meta15354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15353.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t15353.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t15353.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t15353.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t15353.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t15353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15355){
var self__ = this;
var _15355__$1 = this;
return self__.meta15354;
});})(cs))
;

cljs.core.async.t15353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15355,meta15354__$1){
var self__ = this;
var _15355__$1 = this;
return (new cljs.core.async.t15353(self__.cs,self__.ch,self__.mult,meta15354__$1));
});})(cs))
;

cljs.core.async.t15353.cljs$lang$type = true;

cljs.core.async.t15353.cljs$lang$ctorStr = "cljs.core.async/t15353";

cljs.core.async.t15353.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t15353");
});})(cs))
;

cljs.core.async.__GT_t15353 = ((function (cs){
return (function __GT_t15353(cs__$1,ch__$1,mult__$1,meta15354){
return (new cljs.core.async.t15353(cs__$1,ch__$1,mult__$1,meta15354));
});})(cs))
;

}

return (new cljs.core.async.t15353(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__11502__auto___15574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___15574,cs,m,dchan,dctr,done){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___15574,cs,m,dchan,dctr,done){
return (function (state_15486){
var state_val_15487 = (state_15486[(1)]);
if((state_val_15487 === (7))){
var inst_15482 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15488_15575 = state_15486__$1;
(statearr_15488_15575[(2)] = inst_15482);

(statearr_15488_15575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (20))){
var inst_15387 = (state_15486[(7)]);
var inst_15397 = cljs.core.first.call(null,inst_15387);
var inst_15398 = cljs.core.nth.call(null,inst_15397,(0),null);
var inst_15399 = cljs.core.nth.call(null,inst_15397,(1),null);
var state_15486__$1 = (function (){var statearr_15489 = state_15486;
(statearr_15489[(8)] = inst_15398);

return statearr_15489;
})();
if(cljs.core.truth_(inst_15399)){
var statearr_15490_15576 = state_15486__$1;
(statearr_15490_15576[(1)] = (22));

} else {
var statearr_15491_15577 = state_15486__$1;
(statearr_15491_15577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (27))){
var inst_15427 = (state_15486[(9)]);
var inst_15429 = (state_15486[(10)]);
var inst_15358 = (state_15486[(11)]);
var inst_15434 = (state_15486[(12)]);
var inst_15434__$1 = cljs.core._nth.call(null,inst_15427,inst_15429);
var inst_15435 = cljs.core.async.put_BANG_.call(null,inst_15434__$1,inst_15358,done);
var state_15486__$1 = (function (){var statearr_15492 = state_15486;
(statearr_15492[(12)] = inst_15434__$1);

return statearr_15492;
})();
if(cljs.core.truth_(inst_15435)){
var statearr_15493_15578 = state_15486__$1;
(statearr_15493_15578[(1)] = (30));

} else {
var statearr_15494_15579 = state_15486__$1;
(statearr_15494_15579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (1))){
var state_15486__$1 = state_15486;
var statearr_15495_15580 = state_15486__$1;
(statearr_15495_15580[(2)] = null);

(statearr_15495_15580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (24))){
var inst_15387 = (state_15486[(7)]);
var inst_15404 = (state_15486[(2)]);
var inst_15405 = cljs.core.next.call(null,inst_15387);
var inst_15367 = inst_15405;
var inst_15368 = null;
var inst_15369 = (0);
var inst_15370 = (0);
var state_15486__$1 = (function (){var statearr_15496 = state_15486;
(statearr_15496[(13)] = inst_15368);

(statearr_15496[(14)] = inst_15404);

(statearr_15496[(15)] = inst_15369);

(statearr_15496[(16)] = inst_15370);

(statearr_15496[(17)] = inst_15367);

return statearr_15496;
})();
var statearr_15497_15581 = state_15486__$1;
(statearr_15497_15581[(2)] = null);

(statearr_15497_15581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (39))){
var state_15486__$1 = state_15486;
var statearr_15501_15582 = state_15486__$1;
(statearr_15501_15582[(2)] = null);

(statearr_15501_15582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (4))){
var inst_15358 = (state_15486[(11)]);
var inst_15358__$1 = (state_15486[(2)]);
var inst_15359 = (inst_15358__$1 == null);
var state_15486__$1 = (function (){var statearr_15502 = state_15486;
(statearr_15502[(11)] = inst_15358__$1);

return statearr_15502;
})();
if(cljs.core.truth_(inst_15359)){
var statearr_15503_15583 = state_15486__$1;
(statearr_15503_15583[(1)] = (5));

} else {
var statearr_15504_15584 = state_15486__$1;
(statearr_15504_15584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (15))){
var inst_15368 = (state_15486[(13)]);
var inst_15369 = (state_15486[(15)]);
var inst_15370 = (state_15486[(16)]);
var inst_15367 = (state_15486[(17)]);
var inst_15383 = (state_15486[(2)]);
var inst_15384 = (inst_15370 + (1));
var tmp15498 = inst_15368;
var tmp15499 = inst_15369;
var tmp15500 = inst_15367;
var inst_15367__$1 = tmp15500;
var inst_15368__$1 = tmp15498;
var inst_15369__$1 = tmp15499;
var inst_15370__$1 = inst_15384;
var state_15486__$1 = (function (){var statearr_15505 = state_15486;
(statearr_15505[(13)] = inst_15368__$1);

(statearr_15505[(15)] = inst_15369__$1);

(statearr_15505[(18)] = inst_15383);

(statearr_15505[(16)] = inst_15370__$1);

(statearr_15505[(17)] = inst_15367__$1);

return statearr_15505;
})();
var statearr_15506_15585 = state_15486__$1;
(statearr_15506_15585[(2)] = null);

(statearr_15506_15585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (21))){
var inst_15408 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15510_15586 = state_15486__$1;
(statearr_15510_15586[(2)] = inst_15408);

(statearr_15510_15586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (31))){
var inst_15434 = (state_15486[(12)]);
var inst_15438 = done.call(null,null);
var inst_15439 = cljs.core.async.untap_STAR_.call(null,m,inst_15434);
var state_15486__$1 = (function (){var statearr_15511 = state_15486;
(statearr_15511[(19)] = inst_15438);

return statearr_15511;
})();
var statearr_15512_15587 = state_15486__$1;
(statearr_15512_15587[(2)] = inst_15439);

(statearr_15512_15587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (32))){
var inst_15427 = (state_15486[(9)]);
var inst_15429 = (state_15486[(10)]);
var inst_15426 = (state_15486[(20)]);
var inst_15428 = (state_15486[(21)]);
var inst_15441 = (state_15486[(2)]);
var inst_15442 = (inst_15429 + (1));
var tmp15507 = inst_15427;
var tmp15508 = inst_15426;
var tmp15509 = inst_15428;
var inst_15426__$1 = tmp15508;
var inst_15427__$1 = tmp15507;
var inst_15428__$1 = tmp15509;
var inst_15429__$1 = inst_15442;
var state_15486__$1 = (function (){var statearr_15513 = state_15486;
(statearr_15513[(9)] = inst_15427__$1);

(statearr_15513[(10)] = inst_15429__$1);

(statearr_15513[(22)] = inst_15441);

(statearr_15513[(20)] = inst_15426__$1);

(statearr_15513[(21)] = inst_15428__$1);

return statearr_15513;
})();
var statearr_15514_15588 = state_15486__$1;
(statearr_15514_15588[(2)] = null);

(statearr_15514_15588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (40))){
var inst_15454 = (state_15486[(23)]);
var inst_15458 = done.call(null,null);
var inst_15459 = cljs.core.async.untap_STAR_.call(null,m,inst_15454);
var state_15486__$1 = (function (){var statearr_15515 = state_15486;
(statearr_15515[(24)] = inst_15458);

return statearr_15515;
})();
var statearr_15516_15589 = state_15486__$1;
(statearr_15516_15589[(2)] = inst_15459);

(statearr_15516_15589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (33))){
var inst_15445 = (state_15486[(25)]);
var inst_15447 = cljs.core.chunked_seq_QMARK_.call(null,inst_15445);
var state_15486__$1 = state_15486;
if(inst_15447){
var statearr_15517_15590 = state_15486__$1;
(statearr_15517_15590[(1)] = (36));

} else {
var statearr_15518_15591 = state_15486__$1;
(statearr_15518_15591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (13))){
var inst_15377 = (state_15486[(26)]);
var inst_15380 = cljs.core.async.close_BANG_.call(null,inst_15377);
var state_15486__$1 = state_15486;
var statearr_15519_15592 = state_15486__$1;
(statearr_15519_15592[(2)] = inst_15380);

(statearr_15519_15592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (22))){
var inst_15398 = (state_15486[(8)]);
var inst_15401 = cljs.core.async.close_BANG_.call(null,inst_15398);
var state_15486__$1 = state_15486;
var statearr_15520_15593 = state_15486__$1;
(statearr_15520_15593[(2)] = inst_15401);

(statearr_15520_15593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (36))){
var inst_15445 = (state_15486[(25)]);
var inst_15449 = cljs.core.chunk_first.call(null,inst_15445);
var inst_15450 = cljs.core.chunk_rest.call(null,inst_15445);
var inst_15451 = cljs.core.count.call(null,inst_15449);
var inst_15426 = inst_15450;
var inst_15427 = inst_15449;
var inst_15428 = inst_15451;
var inst_15429 = (0);
var state_15486__$1 = (function (){var statearr_15521 = state_15486;
(statearr_15521[(9)] = inst_15427);

(statearr_15521[(10)] = inst_15429);

(statearr_15521[(20)] = inst_15426);

(statearr_15521[(21)] = inst_15428);

return statearr_15521;
})();
var statearr_15522_15594 = state_15486__$1;
(statearr_15522_15594[(2)] = null);

(statearr_15522_15594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (41))){
var inst_15445 = (state_15486[(25)]);
var inst_15461 = (state_15486[(2)]);
var inst_15462 = cljs.core.next.call(null,inst_15445);
var inst_15426 = inst_15462;
var inst_15427 = null;
var inst_15428 = (0);
var inst_15429 = (0);
var state_15486__$1 = (function (){var statearr_15523 = state_15486;
(statearr_15523[(9)] = inst_15427);

(statearr_15523[(10)] = inst_15429);

(statearr_15523[(27)] = inst_15461);

(statearr_15523[(20)] = inst_15426);

(statearr_15523[(21)] = inst_15428);

return statearr_15523;
})();
var statearr_15524_15595 = state_15486__$1;
(statearr_15524_15595[(2)] = null);

(statearr_15524_15595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (43))){
var state_15486__$1 = state_15486;
var statearr_15525_15596 = state_15486__$1;
(statearr_15525_15596[(2)] = null);

(statearr_15525_15596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (29))){
var inst_15470 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15526_15597 = state_15486__$1;
(statearr_15526_15597[(2)] = inst_15470);

(statearr_15526_15597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (44))){
var inst_15479 = (state_15486[(2)]);
var state_15486__$1 = (function (){var statearr_15527 = state_15486;
(statearr_15527[(28)] = inst_15479);

return statearr_15527;
})();
var statearr_15528_15598 = state_15486__$1;
(statearr_15528_15598[(2)] = null);

(statearr_15528_15598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (6))){
var inst_15418 = (state_15486[(29)]);
var inst_15417 = cljs.core.deref.call(null,cs);
var inst_15418__$1 = cljs.core.keys.call(null,inst_15417);
var inst_15419 = cljs.core.count.call(null,inst_15418__$1);
var inst_15420 = cljs.core.reset_BANG_.call(null,dctr,inst_15419);
var inst_15425 = cljs.core.seq.call(null,inst_15418__$1);
var inst_15426 = inst_15425;
var inst_15427 = null;
var inst_15428 = (0);
var inst_15429 = (0);
var state_15486__$1 = (function (){var statearr_15529 = state_15486;
(statearr_15529[(9)] = inst_15427);

(statearr_15529[(10)] = inst_15429);

(statearr_15529[(29)] = inst_15418__$1);

(statearr_15529[(20)] = inst_15426);

(statearr_15529[(30)] = inst_15420);

(statearr_15529[(21)] = inst_15428);

return statearr_15529;
})();
var statearr_15530_15599 = state_15486__$1;
(statearr_15530_15599[(2)] = null);

(statearr_15530_15599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (28))){
var inst_15445 = (state_15486[(25)]);
var inst_15426 = (state_15486[(20)]);
var inst_15445__$1 = cljs.core.seq.call(null,inst_15426);
var state_15486__$1 = (function (){var statearr_15531 = state_15486;
(statearr_15531[(25)] = inst_15445__$1);

return statearr_15531;
})();
if(inst_15445__$1){
var statearr_15532_15600 = state_15486__$1;
(statearr_15532_15600[(1)] = (33));

} else {
var statearr_15533_15601 = state_15486__$1;
(statearr_15533_15601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (25))){
var inst_15429 = (state_15486[(10)]);
var inst_15428 = (state_15486[(21)]);
var inst_15431 = (inst_15429 < inst_15428);
var inst_15432 = inst_15431;
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15432)){
var statearr_15534_15602 = state_15486__$1;
(statearr_15534_15602[(1)] = (27));

} else {
var statearr_15535_15603 = state_15486__$1;
(statearr_15535_15603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (34))){
var state_15486__$1 = state_15486;
var statearr_15536_15604 = state_15486__$1;
(statearr_15536_15604[(2)] = null);

(statearr_15536_15604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (17))){
var state_15486__$1 = state_15486;
var statearr_15537_15605 = state_15486__$1;
(statearr_15537_15605[(2)] = null);

(statearr_15537_15605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (3))){
var inst_15484 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15486__$1,inst_15484);
} else {
if((state_val_15487 === (12))){
var inst_15413 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15538_15606 = state_15486__$1;
(statearr_15538_15606[(2)] = inst_15413);

(statearr_15538_15606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (2))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15486__$1,(4),ch);
} else {
if((state_val_15487 === (23))){
var state_15486__$1 = state_15486;
var statearr_15539_15607 = state_15486__$1;
(statearr_15539_15607[(2)] = null);

(statearr_15539_15607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (35))){
var inst_15468 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15540_15608 = state_15486__$1;
(statearr_15540_15608[(2)] = inst_15468);

(statearr_15540_15608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (19))){
var inst_15387 = (state_15486[(7)]);
var inst_15391 = cljs.core.chunk_first.call(null,inst_15387);
var inst_15392 = cljs.core.chunk_rest.call(null,inst_15387);
var inst_15393 = cljs.core.count.call(null,inst_15391);
var inst_15367 = inst_15392;
var inst_15368 = inst_15391;
var inst_15369 = inst_15393;
var inst_15370 = (0);
var state_15486__$1 = (function (){var statearr_15541 = state_15486;
(statearr_15541[(13)] = inst_15368);

(statearr_15541[(15)] = inst_15369);

(statearr_15541[(16)] = inst_15370);

(statearr_15541[(17)] = inst_15367);

return statearr_15541;
})();
var statearr_15542_15609 = state_15486__$1;
(statearr_15542_15609[(2)] = null);

(statearr_15542_15609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (11))){
var inst_15387 = (state_15486[(7)]);
var inst_15367 = (state_15486[(17)]);
var inst_15387__$1 = cljs.core.seq.call(null,inst_15367);
var state_15486__$1 = (function (){var statearr_15543 = state_15486;
(statearr_15543[(7)] = inst_15387__$1);

return statearr_15543;
})();
if(inst_15387__$1){
var statearr_15544_15610 = state_15486__$1;
(statearr_15544_15610[(1)] = (16));

} else {
var statearr_15545_15611 = state_15486__$1;
(statearr_15545_15611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (9))){
var inst_15415 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15546_15612 = state_15486__$1;
(statearr_15546_15612[(2)] = inst_15415);

(statearr_15546_15612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (5))){
var inst_15365 = cljs.core.deref.call(null,cs);
var inst_15366 = cljs.core.seq.call(null,inst_15365);
var inst_15367 = inst_15366;
var inst_15368 = null;
var inst_15369 = (0);
var inst_15370 = (0);
var state_15486__$1 = (function (){var statearr_15547 = state_15486;
(statearr_15547[(13)] = inst_15368);

(statearr_15547[(15)] = inst_15369);

(statearr_15547[(16)] = inst_15370);

(statearr_15547[(17)] = inst_15367);

return statearr_15547;
})();
var statearr_15548_15613 = state_15486__$1;
(statearr_15548_15613[(2)] = null);

(statearr_15548_15613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (14))){
var state_15486__$1 = state_15486;
var statearr_15549_15614 = state_15486__$1;
(statearr_15549_15614[(2)] = null);

(statearr_15549_15614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (45))){
var inst_15476 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15550_15615 = state_15486__$1;
(statearr_15550_15615[(2)] = inst_15476);

(statearr_15550_15615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (26))){
var inst_15418 = (state_15486[(29)]);
var inst_15472 = (state_15486[(2)]);
var inst_15473 = cljs.core.seq.call(null,inst_15418);
var state_15486__$1 = (function (){var statearr_15551 = state_15486;
(statearr_15551[(31)] = inst_15472);

return statearr_15551;
})();
if(inst_15473){
var statearr_15552_15616 = state_15486__$1;
(statearr_15552_15616[(1)] = (42));

} else {
var statearr_15553_15617 = state_15486__$1;
(statearr_15553_15617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (16))){
var inst_15387 = (state_15486[(7)]);
var inst_15389 = cljs.core.chunked_seq_QMARK_.call(null,inst_15387);
var state_15486__$1 = state_15486;
if(inst_15389){
var statearr_15554_15618 = state_15486__$1;
(statearr_15554_15618[(1)] = (19));

} else {
var statearr_15555_15619 = state_15486__$1;
(statearr_15555_15619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (38))){
var inst_15465 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15556_15620 = state_15486__$1;
(statearr_15556_15620[(2)] = inst_15465);

(statearr_15556_15620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (30))){
var state_15486__$1 = state_15486;
var statearr_15557_15621 = state_15486__$1;
(statearr_15557_15621[(2)] = null);

(statearr_15557_15621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (10))){
var inst_15368 = (state_15486[(13)]);
var inst_15370 = (state_15486[(16)]);
var inst_15376 = cljs.core._nth.call(null,inst_15368,inst_15370);
var inst_15377 = cljs.core.nth.call(null,inst_15376,(0),null);
var inst_15378 = cljs.core.nth.call(null,inst_15376,(1),null);
var state_15486__$1 = (function (){var statearr_15558 = state_15486;
(statearr_15558[(26)] = inst_15377);

return statearr_15558;
})();
if(cljs.core.truth_(inst_15378)){
var statearr_15559_15622 = state_15486__$1;
(statearr_15559_15622[(1)] = (13));

} else {
var statearr_15560_15623 = state_15486__$1;
(statearr_15560_15623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (18))){
var inst_15411 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15561_15624 = state_15486__$1;
(statearr_15561_15624[(2)] = inst_15411);

(statearr_15561_15624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (42))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15486__$1,(45),dchan);
} else {
if((state_val_15487 === (37))){
var inst_15454 = (state_15486[(23)]);
var inst_15358 = (state_15486[(11)]);
var inst_15445 = (state_15486[(25)]);
var inst_15454__$1 = cljs.core.first.call(null,inst_15445);
var inst_15455 = cljs.core.async.put_BANG_.call(null,inst_15454__$1,inst_15358,done);
var state_15486__$1 = (function (){var statearr_15562 = state_15486;
(statearr_15562[(23)] = inst_15454__$1);

return statearr_15562;
})();
if(cljs.core.truth_(inst_15455)){
var statearr_15563_15625 = state_15486__$1;
(statearr_15563_15625[(1)] = (39));

} else {
var statearr_15564_15626 = state_15486__$1;
(statearr_15564_15626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (8))){
var inst_15369 = (state_15486[(15)]);
var inst_15370 = (state_15486[(16)]);
var inst_15372 = (inst_15370 < inst_15369);
var inst_15373 = inst_15372;
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15373)){
var statearr_15565_15627 = state_15486__$1;
(statearr_15565_15627[(1)] = (10));

} else {
var statearr_15566_15628 = state_15486__$1;
(statearr_15566_15628[(1)] = (11));

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
});})(c__11502__auto___15574,cs,m,dchan,dctr,done))
;
return ((function (switch__11446__auto__,c__11502__auto___15574,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_15570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15570[(0)] = state_machine__11447__auto__);

(statearr_15570[(1)] = (1));

return statearr_15570;
});
var state_machine__11447__auto____1 = (function (state_15486){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_15486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e15571){if((e15571 instanceof Object)){
var ex__11450__auto__ = e15571;
var statearr_15572_15629 = state_15486;
(statearr_15572_15629[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15630 = state_15486;
state_15486 = G__15630;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___15574,cs,m,dchan,dctr,done))
})();
var state__11504__auto__ = (function (){var statearr_15573 = f__11503__auto__.call(null);
(statearr_15573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___15574);

return statearr_15573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___15574,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj15632 = {};
return obj15632;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15633){
var map__15638 = p__15633;
var map__15638__$1 = ((cljs.core.seq_QMARK_.call(null,map__15638))?cljs.core.apply.call(null,cljs.core.hash_map,map__15638):map__15638);
var opts = map__15638__$1;
var statearr_15639_15642 = state;
(statearr_15639_15642[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__15638,map__15638__$1,opts){
return (function (val){
var statearr_15640_15643 = state;
(statearr_15640_15643[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15638,map__15638__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_15641_15644 = state;
(statearr_15641_15644[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15633 = null;
if (arguments.length > 3) {
  p__15633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15633);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15645){
var state = cljs.core.first(arglist__15645);
arglist__15645 = cljs.core.next(arglist__15645);
var cont_block = cljs.core.first(arglist__15645);
arglist__15645 = cljs.core.next(arglist__15645);
var ports = cljs.core.first(arglist__15645);
var p__15633 = cljs.core.rest(arglist__15645);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__15633);
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
if(typeof cljs.core.async.t15765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15765 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15766){
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
this.meta15766 = meta15766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15765.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t15765.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t15765.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15767){
var self__ = this;
var _15767__$1 = this;
return self__.meta15766;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15767,meta15766__$1){
var self__ = this;
var _15767__$1 = this;
return (new cljs.core.async.t15765(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15766__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15765.cljs$lang$type = true;

cljs.core.async.t15765.cljs$lang$ctorStr = "cljs.core.async/t15765";

cljs.core.async.t15765.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t15765");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t15765 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15766){
return (new cljs.core.async.t15765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15766));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t15765(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__11502__auto___15884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15837){
var state_val_15838 = (state_15837[(1)]);
if((state_val_15838 === (7))){
var inst_15781 = (state_15837[(7)]);
var inst_15786 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15781);
var state_15837__$1 = state_15837;
var statearr_15839_15885 = state_15837__$1;
(statearr_15839_15885[(2)] = inst_15786);

(statearr_15839_15885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (20))){
var inst_15796 = (state_15837[(8)]);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15837__$1,(23),out,inst_15796);
} else {
if((state_val_15838 === (1))){
var inst_15771 = (state_15837[(9)]);
var inst_15771__$1 = calc_state.call(null);
var inst_15772 = cljs.core.seq_QMARK_.call(null,inst_15771__$1);
var state_15837__$1 = (function (){var statearr_15840 = state_15837;
(statearr_15840[(9)] = inst_15771__$1);

return statearr_15840;
})();
if(inst_15772){
var statearr_15841_15886 = state_15837__$1;
(statearr_15841_15886[(1)] = (2));

} else {
var statearr_15842_15887 = state_15837__$1;
(statearr_15842_15887[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (24))){
var inst_15789 = (state_15837[(10)]);
var inst_15781 = inst_15789;
var state_15837__$1 = (function (){var statearr_15843 = state_15837;
(statearr_15843[(7)] = inst_15781);

return statearr_15843;
})();
var statearr_15844_15888 = state_15837__$1;
(statearr_15844_15888[(2)] = null);

(statearr_15844_15888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (4))){
var inst_15771 = (state_15837[(9)]);
var inst_15777 = (state_15837[(2)]);
var inst_15778 = cljs.core.get.call(null,inst_15777,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15779 = cljs.core.get.call(null,inst_15777,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15780 = cljs.core.get.call(null,inst_15777,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15781 = inst_15771;
var state_15837__$1 = (function (){var statearr_15845 = state_15837;
(statearr_15845[(7)] = inst_15781);

(statearr_15845[(11)] = inst_15778);

(statearr_15845[(12)] = inst_15779);

(statearr_15845[(13)] = inst_15780);

return statearr_15845;
})();
var statearr_15846_15889 = state_15837__$1;
(statearr_15846_15889[(2)] = null);

(statearr_15846_15889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (15))){
var state_15837__$1 = state_15837;
var statearr_15847_15890 = state_15837__$1;
(statearr_15847_15890[(2)] = null);

(statearr_15847_15890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (21))){
var inst_15789 = (state_15837[(10)]);
var inst_15781 = inst_15789;
var state_15837__$1 = (function (){var statearr_15848 = state_15837;
(statearr_15848[(7)] = inst_15781);

return statearr_15848;
})();
var statearr_15849_15891 = state_15837__$1;
(statearr_15849_15891[(2)] = null);

(statearr_15849_15891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (13))){
var inst_15833 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15850_15892 = state_15837__$1;
(statearr_15850_15892[(2)] = inst_15833);

(statearr_15850_15892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (22))){
var inst_15831 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15851_15893 = state_15837__$1;
(statearr_15851_15893[(2)] = inst_15831);

(statearr_15851_15893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (6))){
var inst_15835 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15837__$1,inst_15835);
} else {
if((state_val_15838 === (25))){
var state_15837__$1 = state_15837;
var statearr_15852_15894 = state_15837__$1;
(statearr_15852_15894[(2)] = null);

(statearr_15852_15894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (17))){
var inst_15811 = (state_15837[(14)]);
var state_15837__$1 = state_15837;
var statearr_15853_15895 = state_15837__$1;
(statearr_15853_15895[(2)] = inst_15811);

(statearr_15853_15895[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (3))){
var inst_15771 = (state_15837[(9)]);
var state_15837__$1 = state_15837;
var statearr_15854_15896 = state_15837__$1;
(statearr_15854_15896[(2)] = inst_15771);

(statearr_15854_15896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (12))){
var inst_15792 = (state_15837[(15)]);
var inst_15797 = (state_15837[(16)]);
var inst_15811 = (state_15837[(14)]);
var inst_15811__$1 = inst_15792.call(null,inst_15797);
var state_15837__$1 = (function (){var statearr_15855 = state_15837;
(statearr_15855[(14)] = inst_15811__$1);

return statearr_15855;
})();
if(cljs.core.truth_(inst_15811__$1)){
var statearr_15856_15897 = state_15837__$1;
(statearr_15856_15897[(1)] = (17));

} else {
var statearr_15857_15898 = state_15837__$1;
(statearr_15857_15898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (2))){
var inst_15771 = (state_15837[(9)]);
var inst_15774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15771);
var state_15837__$1 = state_15837;
var statearr_15858_15899 = state_15837__$1;
(statearr_15858_15899[(2)] = inst_15774);

(statearr_15858_15899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (23))){
var inst_15822 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
if(cljs.core.truth_(inst_15822)){
var statearr_15859_15900 = state_15837__$1;
(statearr_15859_15900[(1)] = (24));

} else {
var statearr_15860_15901 = state_15837__$1;
(statearr_15860_15901[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (19))){
var inst_15819 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
if(cljs.core.truth_(inst_15819)){
var statearr_15861_15902 = state_15837__$1;
(statearr_15861_15902[(1)] = (20));

} else {
var statearr_15862_15903 = state_15837__$1;
(statearr_15862_15903[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (11))){
var inst_15796 = (state_15837[(8)]);
var inst_15802 = (inst_15796 == null);
var state_15837__$1 = state_15837;
if(cljs.core.truth_(inst_15802)){
var statearr_15863_15904 = state_15837__$1;
(statearr_15863_15904[(1)] = (14));

} else {
var statearr_15864_15905 = state_15837__$1;
(statearr_15864_15905[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (9))){
var inst_15789 = (state_15837[(10)]);
var inst_15789__$1 = (state_15837[(2)]);
var inst_15790 = cljs.core.get.call(null,inst_15789__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15791 = cljs.core.get.call(null,inst_15789__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15792 = cljs.core.get.call(null,inst_15789__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_15837__$1 = (function (){var statearr_15865 = state_15837;
(statearr_15865[(10)] = inst_15789__$1);

(statearr_15865[(15)] = inst_15792);

(statearr_15865[(17)] = inst_15791);

return statearr_15865;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15837__$1,(10),inst_15790);
} else {
if((state_val_15838 === (5))){
var inst_15781 = (state_15837[(7)]);
var inst_15784 = cljs.core.seq_QMARK_.call(null,inst_15781);
var state_15837__$1 = state_15837;
if(inst_15784){
var statearr_15866_15906 = state_15837__$1;
(statearr_15866_15906[(1)] = (7));

} else {
var statearr_15867_15907 = state_15837__$1;
(statearr_15867_15907[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (14))){
var inst_15797 = (state_15837[(16)]);
var inst_15804 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15797);
var state_15837__$1 = state_15837;
var statearr_15868_15908 = state_15837__$1;
(statearr_15868_15908[(2)] = inst_15804);

(statearr_15868_15908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (26))){
var inst_15827 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15869_15909 = state_15837__$1;
(statearr_15869_15909[(2)] = inst_15827);

(statearr_15869_15909[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (16))){
var inst_15807 = (state_15837[(2)]);
var inst_15808 = calc_state.call(null);
var inst_15781 = inst_15808;
var state_15837__$1 = (function (){var statearr_15870 = state_15837;
(statearr_15870[(7)] = inst_15781);

(statearr_15870[(18)] = inst_15807);

return statearr_15870;
})();
var statearr_15871_15910 = state_15837__$1;
(statearr_15871_15910[(2)] = null);

(statearr_15871_15910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (10))){
var inst_15796 = (state_15837[(8)]);
var inst_15797 = (state_15837[(16)]);
var inst_15795 = (state_15837[(2)]);
var inst_15796__$1 = cljs.core.nth.call(null,inst_15795,(0),null);
var inst_15797__$1 = cljs.core.nth.call(null,inst_15795,(1),null);
var inst_15798 = (inst_15796__$1 == null);
var inst_15799 = cljs.core._EQ_.call(null,inst_15797__$1,change);
var inst_15800 = (inst_15798) || (inst_15799);
var state_15837__$1 = (function (){var statearr_15872 = state_15837;
(statearr_15872[(8)] = inst_15796__$1);

(statearr_15872[(16)] = inst_15797__$1);

return statearr_15872;
})();
if(cljs.core.truth_(inst_15800)){
var statearr_15873_15911 = state_15837__$1;
(statearr_15873_15911[(1)] = (11));

} else {
var statearr_15874_15912 = state_15837__$1;
(statearr_15874_15912[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (18))){
var inst_15792 = (state_15837[(15)]);
var inst_15791 = (state_15837[(17)]);
var inst_15797 = (state_15837[(16)]);
var inst_15814 = cljs.core.empty_QMARK_.call(null,inst_15792);
var inst_15815 = inst_15791.call(null,inst_15797);
var inst_15816 = cljs.core.not.call(null,inst_15815);
var inst_15817 = (inst_15814) && (inst_15816);
var state_15837__$1 = state_15837;
var statearr_15875_15913 = state_15837__$1;
(statearr_15875_15913[(2)] = inst_15817);

(statearr_15875_15913[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (8))){
var inst_15781 = (state_15837[(7)]);
var state_15837__$1 = state_15837;
var statearr_15876_15914 = state_15837__$1;
(statearr_15876_15914[(2)] = inst_15781);

(statearr_15876_15914[(1)] = (9));


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
});})(c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11446__auto__,c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_15880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15880[(0)] = state_machine__11447__auto__);

(statearr_15880[(1)] = (1));

return statearr_15880;
});
var state_machine__11447__auto____1 = (function (state_15837){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_15837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e15881){if((e15881 instanceof Object)){
var ex__11450__auto__ = e15881;
var statearr_15882_15915 = state_15837;
(statearr_15882_15915[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15916 = state_15837;
state_15837 = G__15916;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_15837){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_15837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11504__auto__ = (function (){var statearr_15883 = f__11503__auto__.call(null);
(statearr_15883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___15884);

return statearr_15883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___15884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj15918 = {};
return obj15918;
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
return (function (p1__15919_SHARP_){
if(cljs.core.truth_(p1__15919_SHARP_.call(null,topic))){
return p1__15919_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15919_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16042 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16043){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16043 = meta16043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16042.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16042.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16042.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16042.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16044){
var self__ = this;
var _16044__$1 = this;
return self__.meta16043;
});})(mults,ensure_mult))
;

cljs.core.async.t16042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16044,meta16043__$1){
var self__ = this;
var _16044__$1 = this;
return (new cljs.core.async.t16042(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16043__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16042.cljs$lang$type = true;

cljs.core.async.t16042.cljs$lang$ctorStr = "cljs.core.async/t16042";

cljs.core.async.t16042.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16042");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16042 = ((function (mults,ensure_mult){
return (function __GT_t16042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16043){
return (new cljs.core.async.t16042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16043));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16042(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__11502__auto___16164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___16164,mults,ensure_mult,p){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___16164,mults,ensure_mult,p){
return (function (state_16116){
var state_val_16117 = (state_16116[(1)]);
if((state_val_16117 === (7))){
var inst_16112 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16118_16165 = state_16116__$1;
(statearr_16118_16165[(2)] = inst_16112);

(statearr_16118_16165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (20))){
var state_16116__$1 = state_16116;
var statearr_16119_16166 = state_16116__$1;
(statearr_16119_16166[(2)] = null);

(statearr_16119_16166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (1))){
var state_16116__$1 = state_16116;
var statearr_16120_16167 = state_16116__$1;
(statearr_16120_16167[(2)] = null);

(statearr_16120_16167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (24))){
var inst_16095 = (state_16116[(7)]);
var inst_16104 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16095);
var state_16116__$1 = state_16116;
var statearr_16121_16168 = state_16116__$1;
(statearr_16121_16168[(2)] = inst_16104);

(statearr_16121_16168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (4))){
var inst_16047 = (state_16116[(8)]);
var inst_16047__$1 = (state_16116[(2)]);
var inst_16048 = (inst_16047__$1 == null);
var state_16116__$1 = (function (){var statearr_16122 = state_16116;
(statearr_16122[(8)] = inst_16047__$1);

return statearr_16122;
})();
if(cljs.core.truth_(inst_16048)){
var statearr_16123_16169 = state_16116__$1;
(statearr_16123_16169[(1)] = (5));

} else {
var statearr_16124_16170 = state_16116__$1;
(statearr_16124_16170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (15))){
var inst_16089 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16125_16171 = state_16116__$1;
(statearr_16125_16171[(2)] = inst_16089);

(statearr_16125_16171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (21))){
var inst_16109 = (state_16116[(2)]);
var state_16116__$1 = (function (){var statearr_16126 = state_16116;
(statearr_16126[(9)] = inst_16109);

return statearr_16126;
})();
var statearr_16127_16172 = state_16116__$1;
(statearr_16127_16172[(2)] = null);

(statearr_16127_16172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (13))){
var inst_16071 = (state_16116[(10)]);
var inst_16073 = cljs.core.chunked_seq_QMARK_.call(null,inst_16071);
var state_16116__$1 = state_16116;
if(inst_16073){
var statearr_16128_16173 = state_16116__$1;
(statearr_16128_16173[(1)] = (16));

} else {
var statearr_16129_16174 = state_16116__$1;
(statearr_16129_16174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (22))){
var inst_16101 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
if(cljs.core.truth_(inst_16101)){
var statearr_16130_16175 = state_16116__$1;
(statearr_16130_16175[(1)] = (23));

} else {
var statearr_16131_16176 = state_16116__$1;
(statearr_16131_16176[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (6))){
var inst_16095 = (state_16116[(7)]);
var inst_16047 = (state_16116[(8)]);
var inst_16097 = (state_16116[(11)]);
var inst_16095__$1 = topic_fn.call(null,inst_16047);
var inst_16096 = cljs.core.deref.call(null,mults);
var inst_16097__$1 = cljs.core.get.call(null,inst_16096,inst_16095__$1);
var state_16116__$1 = (function (){var statearr_16132 = state_16116;
(statearr_16132[(7)] = inst_16095__$1);

(statearr_16132[(11)] = inst_16097__$1);

return statearr_16132;
})();
if(cljs.core.truth_(inst_16097__$1)){
var statearr_16133_16177 = state_16116__$1;
(statearr_16133_16177[(1)] = (19));

} else {
var statearr_16134_16178 = state_16116__$1;
(statearr_16134_16178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (25))){
var inst_16106 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16135_16179 = state_16116__$1;
(statearr_16135_16179[(2)] = inst_16106);

(statearr_16135_16179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (17))){
var inst_16071 = (state_16116[(10)]);
var inst_16080 = cljs.core.first.call(null,inst_16071);
var inst_16081 = cljs.core.async.muxch_STAR_.call(null,inst_16080);
var inst_16082 = cljs.core.async.close_BANG_.call(null,inst_16081);
var inst_16083 = cljs.core.next.call(null,inst_16071);
var inst_16057 = inst_16083;
var inst_16058 = null;
var inst_16059 = (0);
var inst_16060 = (0);
var state_16116__$1 = (function (){var statearr_16136 = state_16116;
(statearr_16136[(12)] = inst_16057);

(statearr_16136[(13)] = inst_16059);

(statearr_16136[(14)] = inst_16058);

(statearr_16136[(15)] = inst_16082);

(statearr_16136[(16)] = inst_16060);

return statearr_16136;
})();
var statearr_16137_16180 = state_16116__$1;
(statearr_16137_16180[(2)] = null);

(statearr_16137_16180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (3))){
var inst_16114 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16116__$1,inst_16114);
} else {
if((state_val_16117 === (12))){
var inst_16091 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16138_16181 = state_16116__$1;
(statearr_16138_16181[(2)] = inst_16091);

(statearr_16138_16181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (2))){
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16116__$1,(4),ch);
} else {
if((state_val_16117 === (23))){
var state_16116__$1 = state_16116;
var statearr_16139_16182 = state_16116__$1;
(statearr_16139_16182[(2)] = null);

(statearr_16139_16182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (19))){
var inst_16047 = (state_16116[(8)]);
var inst_16097 = (state_16116[(11)]);
var inst_16099 = cljs.core.async.muxch_STAR_.call(null,inst_16097);
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16116__$1,(22),inst_16099,inst_16047);
} else {
if((state_val_16117 === (11))){
var inst_16057 = (state_16116[(12)]);
var inst_16071 = (state_16116[(10)]);
var inst_16071__$1 = cljs.core.seq.call(null,inst_16057);
var state_16116__$1 = (function (){var statearr_16140 = state_16116;
(statearr_16140[(10)] = inst_16071__$1);

return statearr_16140;
})();
if(inst_16071__$1){
var statearr_16141_16183 = state_16116__$1;
(statearr_16141_16183[(1)] = (13));

} else {
var statearr_16142_16184 = state_16116__$1;
(statearr_16142_16184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (9))){
var inst_16093 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16143_16185 = state_16116__$1;
(statearr_16143_16185[(2)] = inst_16093);

(statearr_16143_16185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (5))){
var inst_16054 = cljs.core.deref.call(null,mults);
var inst_16055 = cljs.core.vals.call(null,inst_16054);
var inst_16056 = cljs.core.seq.call(null,inst_16055);
var inst_16057 = inst_16056;
var inst_16058 = null;
var inst_16059 = (0);
var inst_16060 = (0);
var state_16116__$1 = (function (){var statearr_16144 = state_16116;
(statearr_16144[(12)] = inst_16057);

(statearr_16144[(13)] = inst_16059);

(statearr_16144[(14)] = inst_16058);

(statearr_16144[(16)] = inst_16060);

return statearr_16144;
})();
var statearr_16145_16186 = state_16116__$1;
(statearr_16145_16186[(2)] = null);

(statearr_16145_16186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (14))){
var state_16116__$1 = state_16116;
var statearr_16149_16187 = state_16116__$1;
(statearr_16149_16187[(2)] = null);

(statearr_16149_16187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (16))){
var inst_16071 = (state_16116[(10)]);
var inst_16075 = cljs.core.chunk_first.call(null,inst_16071);
var inst_16076 = cljs.core.chunk_rest.call(null,inst_16071);
var inst_16077 = cljs.core.count.call(null,inst_16075);
var inst_16057 = inst_16076;
var inst_16058 = inst_16075;
var inst_16059 = inst_16077;
var inst_16060 = (0);
var state_16116__$1 = (function (){var statearr_16150 = state_16116;
(statearr_16150[(12)] = inst_16057);

(statearr_16150[(13)] = inst_16059);

(statearr_16150[(14)] = inst_16058);

(statearr_16150[(16)] = inst_16060);

return statearr_16150;
})();
var statearr_16151_16188 = state_16116__$1;
(statearr_16151_16188[(2)] = null);

(statearr_16151_16188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (10))){
var inst_16057 = (state_16116[(12)]);
var inst_16059 = (state_16116[(13)]);
var inst_16058 = (state_16116[(14)]);
var inst_16060 = (state_16116[(16)]);
var inst_16065 = cljs.core._nth.call(null,inst_16058,inst_16060);
var inst_16066 = cljs.core.async.muxch_STAR_.call(null,inst_16065);
var inst_16067 = cljs.core.async.close_BANG_.call(null,inst_16066);
var inst_16068 = (inst_16060 + (1));
var tmp16146 = inst_16057;
var tmp16147 = inst_16059;
var tmp16148 = inst_16058;
var inst_16057__$1 = tmp16146;
var inst_16058__$1 = tmp16148;
var inst_16059__$1 = tmp16147;
var inst_16060__$1 = inst_16068;
var state_16116__$1 = (function (){var statearr_16152 = state_16116;
(statearr_16152[(12)] = inst_16057__$1);

(statearr_16152[(13)] = inst_16059__$1);

(statearr_16152[(14)] = inst_16058__$1);

(statearr_16152[(16)] = inst_16060__$1);

(statearr_16152[(17)] = inst_16067);

return statearr_16152;
})();
var statearr_16153_16189 = state_16116__$1;
(statearr_16153_16189[(2)] = null);

(statearr_16153_16189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (18))){
var inst_16086 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16154_16190 = state_16116__$1;
(statearr_16154_16190[(2)] = inst_16086);

(statearr_16154_16190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (8))){
var inst_16059 = (state_16116[(13)]);
var inst_16060 = (state_16116[(16)]);
var inst_16062 = (inst_16060 < inst_16059);
var inst_16063 = inst_16062;
var state_16116__$1 = state_16116;
if(cljs.core.truth_(inst_16063)){
var statearr_16155_16191 = state_16116__$1;
(statearr_16155_16191[(1)] = (10));

} else {
var statearr_16156_16192 = state_16116__$1;
(statearr_16156_16192[(1)] = (11));

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
});})(c__11502__auto___16164,mults,ensure_mult,p))
;
return ((function (switch__11446__auto__,c__11502__auto___16164,mults,ensure_mult,p){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16160[(0)] = state_machine__11447__auto__);

(statearr_16160[(1)] = (1));

return statearr_16160;
});
var state_machine__11447__auto____1 = (function (state_16116){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16161){if((e16161 instanceof Object)){
var ex__11450__auto__ = e16161;
var statearr_16162_16193 = state_16116;
(statearr_16162_16193[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16194 = state_16116;
state_16116 = G__16194;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16116){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___16164,mults,ensure_mult,p))
})();
var state__11504__auto__ = (function (){var statearr_16163 = f__11503__auto__.call(null);
(statearr_16163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___16164);

return statearr_16163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___16164,mults,ensure_mult,p))
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
var c__11502__auto___16331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16301){
var state_val_16302 = (state_16301[(1)]);
if((state_val_16302 === (7))){
var state_16301__$1 = state_16301;
var statearr_16303_16332 = state_16301__$1;
(statearr_16303_16332[(2)] = null);

(statearr_16303_16332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (1))){
var state_16301__$1 = state_16301;
var statearr_16304_16333 = state_16301__$1;
(statearr_16304_16333[(2)] = null);

(statearr_16304_16333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (4))){
var inst_16265 = (state_16301[(7)]);
var inst_16267 = (inst_16265 < cnt);
var state_16301__$1 = state_16301;
if(cljs.core.truth_(inst_16267)){
var statearr_16305_16334 = state_16301__$1;
(statearr_16305_16334[(1)] = (6));

} else {
var statearr_16306_16335 = state_16301__$1;
(statearr_16306_16335[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (15))){
var inst_16297 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16307_16336 = state_16301__$1;
(statearr_16307_16336[(2)] = inst_16297);

(statearr_16307_16336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (13))){
var inst_16290 = cljs.core.async.close_BANG_.call(null,out);
var state_16301__$1 = state_16301;
var statearr_16308_16337 = state_16301__$1;
(statearr_16308_16337[(2)] = inst_16290);

(statearr_16308_16337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (6))){
var state_16301__$1 = state_16301;
var statearr_16309_16338 = state_16301__$1;
(statearr_16309_16338[(2)] = null);

(statearr_16309_16338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (3))){
var inst_16299 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16301__$1,inst_16299);
} else {
if((state_val_16302 === (12))){
var inst_16287 = (state_16301[(8)]);
var inst_16287__$1 = (state_16301[(2)]);
var inst_16288 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16287__$1);
var state_16301__$1 = (function (){var statearr_16310 = state_16301;
(statearr_16310[(8)] = inst_16287__$1);

return statearr_16310;
})();
if(cljs.core.truth_(inst_16288)){
var statearr_16311_16339 = state_16301__$1;
(statearr_16311_16339[(1)] = (13));

} else {
var statearr_16312_16340 = state_16301__$1;
(statearr_16312_16340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (2))){
var inst_16264 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16265 = (0);
var state_16301__$1 = (function (){var statearr_16313 = state_16301;
(statearr_16313[(7)] = inst_16265);

(statearr_16313[(9)] = inst_16264);

return statearr_16313;
})();
var statearr_16314_16341 = state_16301__$1;
(statearr_16314_16341[(2)] = null);

(statearr_16314_16341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (11))){
var inst_16265 = (state_16301[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16301,(10),Object,null,(9));
var inst_16274 = chs__$1.call(null,inst_16265);
var inst_16275 = done.call(null,inst_16265);
var inst_16276 = cljs.core.async.take_BANG_.call(null,inst_16274,inst_16275);
var state_16301__$1 = state_16301;
var statearr_16315_16342 = state_16301__$1;
(statearr_16315_16342[(2)] = inst_16276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (9))){
var inst_16265 = (state_16301[(7)]);
var inst_16278 = (state_16301[(2)]);
var inst_16279 = (inst_16265 + (1));
var inst_16265__$1 = inst_16279;
var state_16301__$1 = (function (){var statearr_16316 = state_16301;
(statearr_16316[(7)] = inst_16265__$1);

(statearr_16316[(10)] = inst_16278);

return statearr_16316;
})();
var statearr_16317_16343 = state_16301__$1;
(statearr_16317_16343[(2)] = null);

(statearr_16317_16343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (5))){
var inst_16285 = (state_16301[(2)]);
var state_16301__$1 = (function (){var statearr_16318 = state_16301;
(statearr_16318[(11)] = inst_16285);

return statearr_16318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16301__$1,(12),dchan);
} else {
if((state_val_16302 === (14))){
var inst_16287 = (state_16301[(8)]);
var inst_16292 = cljs.core.apply.call(null,f,inst_16287);
var state_16301__$1 = state_16301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16301__$1,(16),out,inst_16292);
} else {
if((state_val_16302 === (16))){
var inst_16294 = (state_16301[(2)]);
var state_16301__$1 = (function (){var statearr_16319 = state_16301;
(statearr_16319[(12)] = inst_16294);

return statearr_16319;
})();
var statearr_16320_16344 = state_16301__$1;
(statearr_16320_16344[(2)] = null);

(statearr_16320_16344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (10))){
var inst_16269 = (state_16301[(2)]);
var inst_16270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16301__$1 = (function (){var statearr_16321 = state_16301;
(statearr_16321[(13)] = inst_16269);

return statearr_16321;
})();
var statearr_16322_16345 = state_16301__$1;
(statearr_16322_16345[(2)] = inst_16270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (8))){
var inst_16283 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16323_16346 = state_16301__$1;
(statearr_16323_16346[(2)] = inst_16283);

(statearr_16323_16346[(1)] = (5));


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
});})(c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11446__auto__,c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16327[(0)] = state_machine__11447__auto__);

(statearr_16327[(1)] = (1));

return statearr_16327;
});
var state_machine__11447__auto____1 = (function (state_16301){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object)){
var ex__11450__auto__ = e16328;
var statearr_16329_16347 = state_16301;
(statearr_16329_16347[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16348 = state_16301;
state_16301 = G__16348;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16301){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11504__auto__ = (function (){var statearr_16330 = f__11503__auto__.call(null);
(statearr_16330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___16331);

return statearr_16330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___16331,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11502__auto___16456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___16456,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___16456,out){
return (function (state_16432){
var state_val_16433 = (state_16432[(1)]);
if((state_val_16433 === (7))){
var inst_16412 = (state_16432[(7)]);
var inst_16411 = (state_16432[(8)]);
var inst_16411__$1 = (state_16432[(2)]);
var inst_16412__$1 = cljs.core.nth.call(null,inst_16411__$1,(0),null);
var inst_16413 = cljs.core.nth.call(null,inst_16411__$1,(1),null);
var inst_16414 = (inst_16412__$1 == null);
var state_16432__$1 = (function (){var statearr_16434 = state_16432;
(statearr_16434[(7)] = inst_16412__$1);

(statearr_16434[(9)] = inst_16413);

(statearr_16434[(8)] = inst_16411__$1);

return statearr_16434;
})();
if(cljs.core.truth_(inst_16414)){
var statearr_16435_16457 = state_16432__$1;
(statearr_16435_16457[(1)] = (8));

} else {
var statearr_16436_16458 = state_16432__$1;
(statearr_16436_16458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (1))){
var inst_16403 = cljs.core.vec.call(null,chs);
var inst_16404 = inst_16403;
var state_16432__$1 = (function (){var statearr_16437 = state_16432;
(statearr_16437[(10)] = inst_16404);

return statearr_16437;
})();
var statearr_16438_16459 = state_16432__$1;
(statearr_16438_16459[(2)] = null);

(statearr_16438_16459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (4))){
var inst_16404 = (state_16432[(10)]);
var state_16432__$1 = state_16432;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16432__$1,(7),inst_16404);
} else {
if((state_val_16433 === (6))){
var inst_16428 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16439_16460 = state_16432__$1;
(statearr_16439_16460[(2)] = inst_16428);

(statearr_16439_16460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (3))){
var inst_16430 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16432__$1,inst_16430);
} else {
if((state_val_16433 === (2))){
var inst_16404 = (state_16432[(10)]);
var inst_16406 = cljs.core.count.call(null,inst_16404);
var inst_16407 = (inst_16406 > (0));
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16407)){
var statearr_16441_16461 = state_16432__$1;
(statearr_16441_16461[(1)] = (4));

} else {
var statearr_16442_16462 = state_16432__$1;
(statearr_16442_16462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (11))){
var inst_16404 = (state_16432[(10)]);
var inst_16421 = (state_16432[(2)]);
var tmp16440 = inst_16404;
var inst_16404__$1 = tmp16440;
var state_16432__$1 = (function (){var statearr_16443 = state_16432;
(statearr_16443[(10)] = inst_16404__$1);

(statearr_16443[(11)] = inst_16421);

return statearr_16443;
})();
var statearr_16444_16463 = state_16432__$1;
(statearr_16444_16463[(2)] = null);

(statearr_16444_16463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (9))){
var inst_16412 = (state_16432[(7)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16432__$1,(11),out,inst_16412);
} else {
if((state_val_16433 === (5))){
var inst_16426 = cljs.core.async.close_BANG_.call(null,out);
var state_16432__$1 = state_16432;
var statearr_16445_16464 = state_16432__$1;
(statearr_16445_16464[(2)] = inst_16426);

(statearr_16445_16464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (10))){
var inst_16424 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16446_16465 = state_16432__$1;
(statearr_16446_16465[(2)] = inst_16424);

(statearr_16446_16465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (8))){
var inst_16412 = (state_16432[(7)]);
var inst_16413 = (state_16432[(9)]);
var inst_16411 = (state_16432[(8)]);
var inst_16404 = (state_16432[(10)]);
var inst_16416 = (function (){var c = inst_16413;
var v = inst_16412;
var vec__16409 = inst_16411;
var cs = inst_16404;
return ((function (c,v,vec__16409,cs,inst_16412,inst_16413,inst_16411,inst_16404,state_val_16433,c__11502__auto___16456,out){
return (function (p1__16349_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16349_SHARP_);
});
;})(c,v,vec__16409,cs,inst_16412,inst_16413,inst_16411,inst_16404,state_val_16433,c__11502__auto___16456,out))
})();
var inst_16417 = cljs.core.filterv.call(null,inst_16416,inst_16404);
var inst_16404__$1 = inst_16417;
var state_16432__$1 = (function (){var statearr_16447 = state_16432;
(statearr_16447[(10)] = inst_16404__$1);

return statearr_16447;
})();
var statearr_16448_16466 = state_16432__$1;
(statearr_16448_16466[(2)] = null);

(statearr_16448_16466[(1)] = (2));


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
});})(c__11502__auto___16456,out))
;
return ((function (switch__11446__auto__,c__11502__auto___16456,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16452[(0)] = state_machine__11447__auto__);

(statearr_16452[(1)] = (1));

return statearr_16452;
});
var state_machine__11447__auto____1 = (function (state_16432){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16453){if((e16453 instanceof Object)){
var ex__11450__auto__ = e16453;
var statearr_16454_16467 = state_16432;
(statearr_16454_16467[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16468 = state_16432;
state_16432 = G__16468;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16432){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___16456,out))
})();
var state__11504__auto__ = (function (){var statearr_16455 = f__11503__auto__.call(null);
(statearr_16455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___16456);

return statearr_16455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___16456,out))
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
var c__11502__auto___16561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___16561,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___16561,out){
return (function (state_16538){
var state_val_16539 = (state_16538[(1)]);
if((state_val_16539 === (7))){
var inst_16520 = (state_16538[(7)]);
var inst_16520__$1 = (state_16538[(2)]);
var inst_16521 = (inst_16520__$1 == null);
var inst_16522 = cljs.core.not.call(null,inst_16521);
var state_16538__$1 = (function (){var statearr_16540 = state_16538;
(statearr_16540[(7)] = inst_16520__$1);

return statearr_16540;
})();
if(inst_16522){
var statearr_16541_16562 = state_16538__$1;
(statearr_16541_16562[(1)] = (8));

} else {
var statearr_16542_16563 = state_16538__$1;
(statearr_16542_16563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (1))){
var inst_16515 = (0);
var state_16538__$1 = (function (){var statearr_16543 = state_16538;
(statearr_16543[(8)] = inst_16515);

return statearr_16543;
})();
var statearr_16544_16564 = state_16538__$1;
(statearr_16544_16564[(2)] = null);

(statearr_16544_16564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (4))){
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16538__$1,(7),ch);
} else {
if((state_val_16539 === (6))){
var inst_16533 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16545_16565 = state_16538__$1;
(statearr_16545_16565[(2)] = inst_16533);

(statearr_16545_16565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (3))){
var inst_16535 = (state_16538[(2)]);
var inst_16536 = cljs.core.async.close_BANG_.call(null,out);
var state_16538__$1 = (function (){var statearr_16546 = state_16538;
(statearr_16546[(9)] = inst_16535);

return statearr_16546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16538__$1,inst_16536);
} else {
if((state_val_16539 === (2))){
var inst_16515 = (state_16538[(8)]);
var inst_16517 = (inst_16515 < n);
var state_16538__$1 = state_16538;
if(cljs.core.truth_(inst_16517)){
var statearr_16547_16566 = state_16538__$1;
(statearr_16547_16566[(1)] = (4));

} else {
var statearr_16548_16567 = state_16538__$1;
(statearr_16548_16567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (11))){
var inst_16515 = (state_16538[(8)]);
var inst_16525 = (state_16538[(2)]);
var inst_16526 = (inst_16515 + (1));
var inst_16515__$1 = inst_16526;
var state_16538__$1 = (function (){var statearr_16549 = state_16538;
(statearr_16549[(8)] = inst_16515__$1);

(statearr_16549[(10)] = inst_16525);

return statearr_16549;
})();
var statearr_16550_16568 = state_16538__$1;
(statearr_16550_16568[(2)] = null);

(statearr_16550_16568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (9))){
var state_16538__$1 = state_16538;
var statearr_16551_16569 = state_16538__$1;
(statearr_16551_16569[(2)] = null);

(statearr_16551_16569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (5))){
var state_16538__$1 = state_16538;
var statearr_16552_16570 = state_16538__$1;
(statearr_16552_16570[(2)] = null);

(statearr_16552_16570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (10))){
var inst_16530 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16553_16571 = state_16538__$1;
(statearr_16553_16571[(2)] = inst_16530);

(statearr_16553_16571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (8))){
var inst_16520 = (state_16538[(7)]);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16538__$1,(11),out,inst_16520);
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
});})(c__11502__auto___16561,out))
;
return ((function (switch__11446__auto__,c__11502__auto___16561,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = state_machine__11447__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var state_machine__11447__auto____1 = (function (state_16538){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16558){if((e16558 instanceof Object)){
var ex__11450__auto__ = e16558;
var statearr_16559_16572 = state_16538;
(statearr_16559_16572[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16573 = state_16538;
state_16538 = G__16573;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16538){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___16561,out))
})();
var state__11504__auto__ = (function (){var statearr_16560 = f__11503__auto__.call(null);
(statearr_16560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___16561);

return statearr_16560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___16561,out))
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
if(typeof cljs.core.async.t16581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16581 = (function (ch,f,map_LT_,meta16582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16582 = meta16582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16584 = (function (fn1,_,meta16582,map_LT_,f,ch,meta16585){
this.fn1 = fn1;
this._ = _;
this.meta16582 = meta16582;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16585 = meta16585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16574_SHARP_){
return f1.call(null,(((p1__16574_SHARP_ == null))?null:self__.f.call(null,p1__16574_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16586){
var self__ = this;
var _16586__$1 = this;
return self__.meta16585;
});})(___$1))
;

cljs.core.async.t16584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16586,meta16585__$1){
var self__ = this;
var _16586__$1 = this;
return (new cljs.core.async.t16584(self__.fn1,self__._,self__.meta16582,self__.map_LT_,self__.f,self__.ch,meta16585__$1));
});})(___$1))
;

cljs.core.async.t16584.cljs$lang$type = true;

cljs.core.async.t16584.cljs$lang$ctorStr = "cljs.core.async/t16584";

cljs.core.async.t16584.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16584");
});})(___$1))
;

cljs.core.async.__GT_t16584 = ((function (___$1){
return (function __GT_t16584(fn1__$1,___$2,meta16582__$1,map_LT___$1,f__$1,ch__$1,meta16585){
return (new cljs.core.async.t16584(fn1__$1,___$2,meta16582__$1,map_LT___$1,f__$1,ch__$1,meta16585));
});})(___$1))
;

}

return (new cljs.core.async.t16584(fn1,___$1,self__.meta16582,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16583){
var self__ = this;
var _16583__$1 = this;
return self__.meta16582;
});

cljs.core.async.t16581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16583,meta16582__$1){
var self__ = this;
var _16583__$1 = this;
return (new cljs.core.async.t16581(self__.ch,self__.f,self__.map_LT_,meta16582__$1));
});

cljs.core.async.t16581.cljs$lang$type = true;

cljs.core.async.t16581.cljs$lang$ctorStr = "cljs.core.async/t16581";

cljs.core.async.t16581.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16581");
});

cljs.core.async.__GT_t16581 = (function __GT_t16581(ch__$1,f__$1,map_LT___$1,meta16582){
return (new cljs.core.async.t16581(ch__$1,f__$1,map_LT___$1,meta16582));
});

}

return (new cljs.core.async.t16581(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16590 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16590 = (function (ch,f,map_GT_,meta16591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16591 = meta16591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16592){
var self__ = this;
var _16592__$1 = this;
return self__.meta16591;
});

cljs.core.async.t16590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16592,meta16591__$1){
var self__ = this;
var _16592__$1 = this;
return (new cljs.core.async.t16590(self__.ch,self__.f,self__.map_GT_,meta16591__$1));
});

cljs.core.async.t16590.cljs$lang$type = true;

cljs.core.async.t16590.cljs$lang$ctorStr = "cljs.core.async/t16590";

cljs.core.async.t16590.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16590");
});

cljs.core.async.__GT_t16590 = (function __GT_t16590(ch__$1,f__$1,map_GT___$1,meta16591){
return (new cljs.core.async.t16590(ch__$1,f__$1,map_GT___$1,meta16591));
});

}

return (new cljs.core.async.t16590(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16596 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16596 = (function (ch,p,filter_GT_,meta16597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16597 = meta16597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16598){
var self__ = this;
var _16598__$1 = this;
return self__.meta16597;
});

cljs.core.async.t16596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16598,meta16597__$1){
var self__ = this;
var _16598__$1 = this;
return (new cljs.core.async.t16596(self__.ch,self__.p,self__.filter_GT_,meta16597__$1));
});

cljs.core.async.t16596.cljs$lang$type = true;

cljs.core.async.t16596.cljs$lang$ctorStr = "cljs.core.async/t16596";

cljs.core.async.t16596.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16596");
});

cljs.core.async.__GT_t16596 = (function __GT_t16596(ch__$1,p__$1,filter_GT___$1,meta16597){
return (new cljs.core.async.t16596(ch__$1,p__$1,filter_GT___$1,meta16597));
});

}

return (new cljs.core.async.t16596(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__11502__auto___16681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___16681,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___16681,out){
return (function (state_16660){
var state_val_16661 = (state_16660[(1)]);
if((state_val_16661 === (7))){
var inst_16656 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16662_16682 = state_16660__$1;
(statearr_16662_16682[(2)] = inst_16656);

(statearr_16662_16682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (1))){
var state_16660__$1 = state_16660;
var statearr_16663_16683 = state_16660__$1;
(statearr_16663_16683[(2)] = null);

(statearr_16663_16683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (4))){
var inst_16642 = (state_16660[(7)]);
var inst_16642__$1 = (state_16660[(2)]);
var inst_16643 = (inst_16642__$1 == null);
var state_16660__$1 = (function (){var statearr_16664 = state_16660;
(statearr_16664[(7)] = inst_16642__$1);

return statearr_16664;
})();
if(cljs.core.truth_(inst_16643)){
var statearr_16665_16684 = state_16660__$1;
(statearr_16665_16684[(1)] = (5));

} else {
var statearr_16666_16685 = state_16660__$1;
(statearr_16666_16685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (6))){
var inst_16642 = (state_16660[(7)]);
var inst_16647 = p.call(null,inst_16642);
var state_16660__$1 = state_16660;
if(cljs.core.truth_(inst_16647)){
var statearr_16667_16686 = state_16660__$1;
(statearr_16667_16686[(1)] = (8));

} else {
var statearr_16668_16687 = state_16660__$1;
(statearr_16668_16687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (3))){
var inst_16658 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16660__$1,inst_16658);
} else {
if((state_val_16661 === (2))){
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16660__$1,(4),ch);
} else {
if((state_val_16661 === (11))){
var inst_16650 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16669_16688 = state_16660__$1;
(statearr_16669_16688[(2)] = inst_16650);

(statearr_16669_16688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (9))){
var state_16660__$1 = state_16660;
var statearr_16670_16689 = state_16660__$1;
(statearr_16670_16689[(2)] = null);

(statearr_16670_16689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (5))){
var inst_16645 = cljs.core.async.close_BANG_.call(null,out);
var state_16660__$1 = state_16660;
var statearr_16671_16690 = state_16660__$1;
(statearr_16671_16690[(2)] = inst_16645);

(statearr_16671_16690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (10))){
var inst_16653 = (state_16660[(2)]);
var state_16660__$1 = (function (){var statearr_16672 = state_16660;
(statearr_16672[(8)] = inst_16653);

return statearr_16672;
})();
var statearr_16673_16691 = state_16660__$1;
(statearr_16673_16691[(2)] = null);

(statearr_16673_16691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16661 === (8))){
var inst_16642 = (state_16660[(7)]);
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16660__$1,(11),out,inst_16642);
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
});})(c__11502__auto___16681,out))
;
return ((function (switch__11446__auto__,c__11502__auto___16681,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16677 = [null,null,null,null,null,null,null,null,null];
(statearr_16677[(0)] = state_machine__11447__auto__);

(statearr_16677[(1)] = (1));

return statearr_16677;
});
var state_machine__11447__auto____1 = (function (state_16660){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16678){if((e16678 instanceof Object)){
var ex__11450__auto__ = e16678;
var statearr_16679_16692 = state_16660;
(statearr_16679_16692[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16693 = state_16660;
state_16660 = G__16693;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16660){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___16681,out))
})();
var state__11504__auto__ = (function (){var statearr_16680 = f__11503__auto__.call(null);
(statearr_16680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___16681);

return statearr_16680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___16681,out))
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
var c__11502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto__){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto__){
return (function (state_16859){
var state_val_16860 = (state_16859[(1)]);
if((state_val_16860 === (7))){
var inst_16855 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16861_16902 = state_16859__$1;
(statearr_16861_16902[(2)] = inst_16855);

(statearr_16861_16902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (20))){
var inst_16825 = (state_16859[(7)]);
var inst_16836 = (state_16859[(2)]);
var inst_16837 = cljs.core.next.call(null,inst_16825);
var inst_16811 = inst_16837;
var inst_16812 = null;
var inst_16813 = (0);
var inst_16814 = (0);
var state_16859__$1 = (function (){var statearr_16862 = state_16859;
(statearr_16862[(8)] = inst_16814);

(statearr_16862[(9)] = inst_16812);

(statearr_16862[(10)] = inst_16836);

(statearr_16862[(11)] = inst_16811);

(statearr_16862[(12)] = inst_16813);

return statearr_16862;
})();
var statearr_16863_16903 = state_16859__$1;
(statearr_16863_16903[(2)] = null);

(statearr_16863_16903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (1))){
var state_16859__$1 = state_16859;
var statearr_16864_16904 = state_16859__$1;
(statearr_16864_16904[(2)] = null);

(statearr_16864_16904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (4))){
var inst_16800 = (state_16859[(13)]);
var inst_16800__$1 = (state_16859[(2)]);
var inst_16801 = (inst_16800__$1 == null);
var state_16859__$1 = (function (){var statearr_16865 = state_16859;
(statearr_16865[(13)] = inst_16800__$1);

return statearr_16865;
})();
if(cljs.core.truth_(inst_16801)){
var statearr_16866_16905 = state_16859__$1;
(statearr_16866_16905[(1)] = (5));

} else {
var statearr_16867_16906 = state_16859__$1;
(statearr_16867_16906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (15))){
var state_16859__$1 = state_16859;
var statearr_16871_16907 = state_16859__$1;
(statearr_16871_16907[(2)] = null);

(statearr_16871_16907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (21))){
var state_16859__$1 = state_16859;
var statearr_16872_16908 = state_16859__$1;
(statearr_16872_16908[(2)] = null);

(statearr_16872_16908[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (13))){
var inst_16814 = (state_16859[(8)]);
var inst_16812 = (state_16859[(9)]);
var inst_16811 = (state_16859[(11)]);
var inst_16813 = (state_16859[(12)]);
var inst_16821 = (state_16859[(2)]);
var inst_16822 = (inst_16814 + (1));
var tmp16868 = inst_16812;
var tmp16869 = inst_16811;
var tmp16870 = inst_16813;
var inst_16811__$1 = tmp16869;
var inst_16812__$1 = tmp16868;
var inst_16813__$1 = tmp16870;
var inst_16814__$1 = inst_16822;
var state_16859__$1 = (function (){var statearr_16873 = state_16859;
(statearr_16873[(8)] = inst_16814__$1);

(statearr_16873[(14)] = inst_16821);

(statearr_16873[(9)] = inst_16812__$1);

(statearr_16873[(11)] = inst_16811__$1);

(statearr_16873[(12)] = inst_16813__$1);

return statearr_16873;
})();
var statearr_16874_16909 = state_16859__$1;
(statearr_16874_16909[(2)] = null);

(statearr_16874_16909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (22))){
var state_16859__$1 = state_16859;
var statearr_16875_16910 = state_16859__$1;
(statearr_16875_16910[(2)] = null);

(statearr_16875_16910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (6))){
var inst_16800 = (state_16859[(13)]);
var inst_16809 = f.call(null,inst_16800);
var inst_16810 = cljs.core.seq.call(null,inst_16809);
var inst_16811 = inst_16810;
var inst_16812 = null;
var inst_16813 = (0);
var inst_16814 = (0);
var state_16859__$1 = (function (){var statearr_16876 = state_16859;
(statearr_16876[(8)] = inst_16814);

(statearr_16876[(9)] = inst_16812);

(statearr_16876[(11)] = inst_16811);

(statearr_16876[(12)] = inst_16813);

return statearr_16876;
})();
var statearr_16877_16911 = state_16859__$1;
(statearr_16877_16911[(2)] = null);

(statearr_16877_16911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (17))){
var inst_16825 = (state_16859[(7)]);
var inst_16829 = cljs.core.chunk_first.call(null,inst_16825);
var inst_16830 = cljs.core.chunk_rest.call(null,inst_16825);
var inst_16831 = cljs.core.count.call(null,inst_16829);
var inst_16811 = inst_16830;
var inst_16812 = inst_16829;
var inst_16813 = inst_16831;
var inst_16814 = (0);
var state_16859__$1 = (function (){var statearr_16878 = state_16859;
(statearr_16878[(8)] = inst_16814);

(statearr_16878[(9)] = inst_16812);

(statearr_16878[(11)] = inst_16811);

(statearr_16878[(12)] = inst_16813);

return statearr_16878;
})();
var statearr_16879_16912 = state_16859__$1;
(statearr_16879_16912[(2)] = null);

(statearr_16879_16912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (3))){
var inst_16857 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16859__$1,inst_16857);
} else {
if((state_val_16860 === (12))){
var inst_16845 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16880_16913 = state_16859__$1;
(statearr_16880_16913[(2)] = inst_16845);

(statearr_16880_16913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (2))){
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16859__$1,(4),in$);
} else {
if((state_val_16860 === (23))){
var inst_16853 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16881_16914 = state_16859__$1;
(statearr_16881_16914[(2)] = inst_16853);

(statearr_16881_16914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (19))){
var inst_16840 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16882_16915 = state_16859__$1;
(statearr_16882_16915[(2)] = inst_16840);

(statearr_16882_16915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (11))){
var inst_16825 = (state_16859[(7)]);
var inst_16811 = (state_16859[(11)]);
var inst_16825__$1 = cljs.core.seq.call(null,inst_16811);
var state_16859__$1 = (function (){var statearr_16883 = state_16859;
(statearr_16883[(7)] = inst_16825__$1);

return statearr_16883;
})();
if(inst_16825__$1){
var statearr_16884_16916 = state_16859__$1;
(statearr_16884_16916[(1)] = (14));

} else {
var statearr_16885_16917 = state_16859__$1;
(statearr_16885_16917[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (9))){
var inst_16847 = (state_16859[(2)]);
var inst_16848 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16859__$1 = (function (){var statearr_16886 = state_16859;
(statearr_16886[(15)] = inst_16847);

return statearr_16886;
})();
if(cljs.core.truth_(inst_16848)){
var statearr_16887_16918 = state_16859__$1;
(statearr_16887_16918[(1)] = (21));

} else {
var statearr_16888_16919 = state_16859__$1;
(statearr_16888_16919[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (5))){
var inst_16803 = cljs.core.async.close_BANG_.call(null,out);
var state_16859__$1 = state_16859;
var statearr_16889_16920 = state_16859__$1;
(statearr_16889_16920[(2)] = inst_16803);

(statearr_16889_16920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (14))){
var inst_16825 = (state_16859[(7)]);
var inst_16827 = cljs.core.chunked_seq_QMARK_.call(null,inst_16825);
var state_16859__$1 = state_16859;
if(inst_16827){
var statearr_16890_16921 = state_16859__$1;
(statearr_16890_16921[(1)] = (17));

} else {
var statearr_16891_16922 = state_16859__$1;
(statearr_16891_16922[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (16))){
var inst_16843 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16892_16923 = state_16859__$1;
(statearr_16892_16923[(2)] = inst_16843);

(statearr_16892_16923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (10))){
var inst_16814 = (state_16859[(8)]);
var inst_16812 = (state_16859[(9)]);
var inst_16819 = cljs.core._nth.call(null,inst_16812,inst_16814);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16859__$1,(13),out,inst_16819);
} else {
if((state_val_16860 === (18))){
var inst_16825 = (state_16859[(7)]);
var inst_16834 = cljs.core.first.call(null,inst_16825);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16859__$1,(20),out,inst_16834);
} else {
if((state_val_16860 === (8))){
var inst_16814 = (state_16859[(8)]);
var inst_16813 = (state_16859[(12)]);
var inst_16816 = (inst_16814 < inst_16813);
var inst_16817 = inst_16816;
var state_16859__$1 = state_16859;
if(cljs.core.truth_(inst_16817)){
var statearr_16893_16924 = state_16859__$1;
(statearr_16893_16924[(1)] = (10));

} else {
var statearr_16894_16925 = state_16859__$1;
(statearr_16894_16925[(1)] = (11));

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
});})(c__11502__auto__))
;
return ((function (switch__11446__auto__,c__11502__auto__){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_16898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16898[(0)] = state_machine__11447__auto__);

(statearr_16898[(1)] = (1));

return statearr_16898;
});
var state_machine__11447__auto____1 = (function (state_16859){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e16899){if((e16899 instanceof Object)){
var ex__11450__auto__ = e16899;
var statearr_16900_16926 = state_16859;
(statearr_16900_16926[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16927 = state_16859;
state_16859 = G__16927;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16859){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto__))
})();
var state__11504__auto__ = (function (){var statearr_16901 = f__11503__auto__.call(null);
(statearr_16901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto__);

return statearr_16901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto__))
);

return c__11502__auto__;
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
var c__11502__auto___17024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___17024,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___17024,out){
return (function (state_16999){
var state_val_17000 = (state_16999[(1)]);
if((state_val_17000 === (7))){
var inst_16994 = (state_16999[(2)]);
var state_16999__$1 = state_16999;
var statearr_17001_17025 = state_16999__$1;
(statearr_17001_17025[(2)] = inst_16994);

(statearr_17001_17025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (1))){
var inst_16976 = null;
var state_16999__$1 = (function (){var statearr_17002 = state_16999;
(statearr_17002[(7)] = inst_16976);

return statearr_17002;
})();
var statearr_17003_17026 = state_16999__$1;
(statearr_17003_17026[(2)] = null);

(statearr_17003_17026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (4))){
var inst_16979 = (state_16999[(8)]);
var inst_16979__$1 = (state_16999[(2)]);
var inst_16980 = (inst_16979__$1 == null);
var inst_16981 = cljs.core.not.call(null,inst_16980);
var state_16999__$1 = (function (){var statearr_17004 = state_16999;
(statearr_17004[(8)] = inst_16979__$1);

return statearr_17004;
})();
if(inst_16981){
var statearr_17005_17027 = state_16999__$1;
(statearr_17005_17027[(1)] = (5));

} else {
var statearr_17006_17028 = state_16999__$1;
(statearr_17006_17028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (6))){
var state_16999__$1 = state_16999;
var statearr_17007_17029 = state_16999__$1;
(statearr_17007_17029[(2)] = null);

(statearr_17007_17029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (3))){
var inst_16996 = (state_16999[(2)]);
var inst_16997 = cljs.core.async.close_BANG_.call(null,out);
var state_16999__$1 = (function (){var statearr_17008 = state_16999;
(statearr_17008[(9)] = inst_16996);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16999__$1,inst_16997);
} else {
if((state_val_17000 === (2))){
var state_16999__$1 = state_16999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16999__$1,(4),ch);
} else {
if((state_val_17000 === (11))){
var inst_16979 = (state_16999[(8)]);
var inst_16988 = (state_16999[(2)]);
var inst_16976 = inst_16979;
var state_16999__$1 = (function (){var statearr_17009 = state_16999;
(statearr_17009[(7)] = inst_16976);

(statearr_17009[(10)] = inst_16988);

return statearr_17009;
})();
var statearr_17010_17030 = state_16999__$1;
(statearr_17010_17030[(2)] = null);

(statearr_17010_17030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (9))){
var inst_16979 = (state_16999[(8)]);
var state_16999__$1 = state_16999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16999__$1,(11),out,inst_16979);
} else {
if((state_val_17000 === (5))){
var inst_16976 = (state_16999[(7)]);
var inst_16979 = (state_16999[(8)]);
var inst_16983 = cljs.core._EQ_.call(null,inst_16979,inst_16976);
var state_16999__$1 = state_16999;
if(inst_16983){
var statearr_17012_17031 = state_16999__$1;
(statearr_17012_17031[(1)] = (8));

} else {
var statearr_17013_17032 = state_16999__$1;
(statearr_17013_17032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (10))){
var inst_16991 = (state_16999[(2)]);
var state_16999__$1 = state_16999;
var statearr_17014_17033 = state_16999__$1;
(statearr_17014_17033[(2)] = inst_16991);

(statearr_17014_17033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17000 === (8))){
var inst_16976 = (state_16999[(7)]);
var tmp17011 = inst_16976;
var inst_16976__$1 = tmp17011;
var state_16999__$1 = (function (){var statearr_17015 = state_16999;
(statearr_17015[(7)] = inst_16976__$1);

return statearr_17015;
})();
var statearr_17016_17034 = state_16999__$1;
(statearr_17016_17034[(2)] = null);

(statearr_17016_17034[(1)] = (2));


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
});})(c__11502__auto___17024,out))
;
return ((function (switch__11446__auto__,c__11502__auto___17024,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_17020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17020[(0)] = state_machine__11447__auto__);

(statearr_17020[(1)] = (1));

return statearr_17020;
});
var state_machine__11447__auto____1 = (function (state_16999){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_16999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e17021){if((e17021 instanceof Object)){
var ex__11450__auto__ = e17021;
var statearr_17022_17035 = state_16999;
(statearr_17022_17035[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17036 = state_16999;
state_16999 = G__17036;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_16999){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_16999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___17024,out))
})();
var state__11504__auto__ = (function (){var statearr_17023 = f__11503__auto__.call(null);
(statearr_17023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___17024);

return statearr_17023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___17024,out))
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
var c__11502__auto___17171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___17171,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___17171,out){
return (function (state_17141){
var state_val_17142 = (state_17141[(1)]);
if((state_val_17142 === (7))){
var inst_17137 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
var statearr_17143_17172 = state_17141__$1;
(statearr_17143_17172[(2)] = inst_17137);

(statearr_17143_17172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (1))){
var inst_17104 = (new Array(n));
var inst_17105 = inst_17104;
var inst_17106 = (0);
var state_17141__$1 = (function (){var statearr_17144 = state_17141;
(statearr_17144[(7)] = inst_17105);

(statearr_17144[(8)] = inst_17106);

return statearr_17144;
})();
var statearr_17145_17173 = state_17141__$1;
(statearr_17145_17173[(2)] = null);

(statearr_17145_17173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (4))){
var inst_17109 = (state_17141[(9)]);
var inst_17109__$1 = (state_17141[(2)]);
var inst_17110 = (inst_17109__$1 == null);
var inst_17111 = cljs.core.not.call(null,inst_17110);
var state_17141__$1 = (function (){var statearr_17146 = state_17141;
(statearr_17146[(9)] = inst_17109__$1);

return statearr_17146;
})();
if(inst_17111){
var statearr_17147_17174 = state_17141__$1;
(statearr_17147_17174[(1)] = (5));

} else {
var statearr_17148_17175 = state_17141__$1;
(statearr_17148_17175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (15))){
var inst_17131 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
var statearr_17149_17176 = state_17141__$1;
(statearr_17149_17176[(2)] = inst_17131);

(statearr_17149_17176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (13))){
var state_17141__$1 = state_17141;
var statearr_17150_17177 = state_17141__$1;
(statearr_17150_17177[(2)] = null);

(statearr_17150_17177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (6))){
var inst_17106 = (state_17141[(8)]);
var inst_17127 = (inst_17106 > (0));
var state_17141__$1 = state_17141;
if(cljs.core.truth_(inst_17127)){
var statearr_17151_17178 = state_17141__$1;
(statearr_17151_17178[(1)] = (12));

} else {
var statearr_17152_17179 = state_17141__$1;
(statearr_17152_17179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (3))){
var inst_17139 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17141__$1,inst_17139);
} else {
if((state_val_17142 === (12))){
var inst_17105 = (state_17141[(7)]);
var inst_17129 = cljs.core.vec.call(null,inst_17105);
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17141__$1,(15),out,inst_17129);
} else {
if((state_val_17142 === (2))){
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17141__$1,(4),ch);
} else {
if((state_val_17142 === (11))){
var inst_17121 = (state_17141[(2)]);
var inst_17122 = (new Array(n));
var inst_17105 = inst_17122;
var inst_17106 = (0);
var state_17141__$1 = (function (){var statearr_17153 = state_17141;
(statearr_17153[(7)] = inst_17105);

(statearr_17153[(10)] = inst_17121);

(statearr_17153[(8)] = inst_17106);

return statearr_17153;
})();
var statearr_17154_17180 = state_17141__$1;
(statearr_17154_17180[(2)] = null);

(statearr_17154_17180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (9))){
var inst_17105 = (state_17141[(7)]);
var inst_17119 = cljs.core.vec.call(null,inst_17105);
var state_17141__$1 = state_17141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17141__$1,(11),out,inst_17119);
} else {
if((state_val_17142 === (5))){
var inst_17105 = (state_17141[(7)]);
var inst_17114 = (state_17141[(11)]);
var inst_17109 = (state_17141[(9)]);
var inst_17106 = (state_17141[(8)]);
var inst_17113 = (inst_17105[inst_17106] = inst_17109);
var inst_17114__$1 = (inst_17106 + (1));
var inst_17115 = (inst_17114__$1 < n);
var state_17141__$1 = (function (){var statearr_17155 = state_17141;
(statearr_17155[(11)] = inst_17114__$1);

(statearr_17155[(12)] = inst_17113);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17115)){
var statearr_17156_17181 = state_17141__$1;
(statearr_17156_17181[(1)] = (8));

} else {
var statearr_17157_17182 = state_17141__$1;
(statearr_17157_17182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (14))){
var inst_17134 = (state_17141[(2)]);
var inst_17135 = cljs.core.async.close_BANG_.call(null,out);
var state_17141__$1 = (function (){var statearr_17159 = state_17141;
(statearr_17159[(13)] = inst_17134);

return statearr_17159;
})();
var statearr_17160_17183 = state_17141__$1;
(statearr_17160_17183[(2)] = inst_17135);

(statearr_17160_17183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (10))){
var inst_17125 = (state_17141[(2)]);
var state_17141__$1 = state_17141;
var statearr_17161_17184 = state_17141__$1;
(statearr_17161_17184[(2)] = inst_17125);

(statearr_17161_17184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17142 === (8))){
var inst_17105 = (state_17141[(7)]);
var inst_17114 = (state_17141[(11)]);
var tmp17158 = inst_17105;
var inst_17105__$1 = tmp17158;
var inst_17106 = inst_17114;
var state_17141__$1 = (function (){var statearr_17162 = state_17141;
(statearr_17162[(7)] = inst_17105__$1);

(statearr_17162[(8)] = inst_17106);

return statearr_17162;
})();
var statearr_17163_17185 = state_17141__$1;
(statearr_17163_17185[(2)] = null);

(statearr_17163_17185[(1)] = (2));


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
});})(c__11502__auto___17171,out))
;
return ((function (switch__11446__auto__,c__11502__auto___17171,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_17167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17167[(0)] = state_machine__11447__auto__);

(statearr_17167[(1)] = (1));

return statearr_17167;
});
var state_machine__11447__auto____1 = (function (state_17141){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_17141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e17168){if((e17168 instanceof Object)){
var ex__11450__auto__ = e17168;
var statearr_17169_17186 = state_17141;
(statearr_17169_17186[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17187 = state_17141;
state_17141 = G__17187;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_17141){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_17141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___17171,out))
})();
var state__11504__auto__ = (function (){var statearr_17170 = f__11503__auto__.call(null);
(statearr_17170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___17171);

return statearr_17170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___17171,out))
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
var c__11502__auto___17330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11502__auto___17330,out){
return (function (){
var f__11503__auto__ = (function (){var switch__11446__auto__ = ((function (c__11502__auto___17330,out){
return (function (state_17300){
var state_val_17301 = (state_17300[(1)]);
if((state_val_17301 === (7))){
var inst_17296 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17302_17331 = state_17300__$1;
(statearr_17302_17331[(2)] = inst_17296);

(statearr_17302_17331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (1))){
var inst_17259 = [];
var inst_17260 = inst_17259;
var inst_17261 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17300__$1 = (function (){var statearr_17303 = state_17300;
(statearr_17303[(7)] = inst_17260);

(statearr_17303[(8)] = inst_17261);

return statearr_17303;
})();
var statearr_17304_17332 = state_17300__$1;
(statearr_17304_17332[(2)] = null);

(statearr_17304_17332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (4))){
var inst_17264 = (state_17300[(9)]);
var inst_17264__$1 = (state_17300[(2)]);
var inst_17265 = (inst_17264__$1 == null);
var inst_17266 = cljs.core.not.call(null,inst_17265);
var state_17300__$1 = (function (){var statearr_17305 = state_17300;
(statearr_17305[(9)] = inst_17264__$1);

return statearr_17305;
})();
if(inst_17266){
var statearr_17306_17333 = state_17300__$1;
(statearr_17306_17333[(1)] = (5));

} else {
var statearr_17307_17334 = state_17300__$1;
(statearr_17307_17334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (15))){
var inst_17290 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17308_17335 = state_17300__$1;
(statearr_17308_17335[(2)] = inst_17290);

(statearr_17308_17335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (13))){
var state_17300__$1 = state_17300;
var statearr_17309_17336 = state_17300__$1;
(statearr_17309_17336[(2)] = null);

(statearr_17309_17336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (6))){
var inst_17260 = (state_17300[(7)]);
var inst_17285 = inst_17260.length;
var inst_17286 = (inst_17285 > (0));
var state_17300__$1 = state_17300;
if(cljs.core.truth_(inst_17286)){
var statearr_17310_17337 = state_17300__$1;
(statearr_17310_17337[(1)] = (12));

} else {
var statearr_17311_17338 = state_17300__$1;
(statearr_17311_17338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (3))){
var inst_17298 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17300__$1,inst_17298);
} else {
if((state_val_17301 === (12))){
var inst_17260 = (state_17300[(7)]);
var inst_17288 = cljs.core.vec.call(null,inst_17260);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17300__$1,(15),out,inst_17288);
} else {
if((state_val_17301 === (2))){
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17300__$1,(4),ch);
} else {
if((state_val_17301 === (11))){
var inst_17264 = (state_17300[(9)]);
var inst_17268 = (state_17300[(10)]);
var inst_17278 = (state_17300[(2)]);
var inst_17279 = [];
var inst_17280 = inst_17279.push(inst_17264);
var inst_17260 = inst_17279;
var inst_17261 = inst_17268;
var state_17300__$1 = (function (){var statearr_17312 = state_17300;
(statearr_17312[(7)] = inst_17260);

(statearr_17312[(11)] = inst_17280);

(statearr_17312[(8)] = inst_17261);

(statearr_17312[(12)] = inst_17278);

return statearr_17312;
})();
var statearr_17313_17339 = state_17300__$1;
(statearr_17313_17339[(2)] = null);

(statearr_17313_17339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (9))){
var inst_17260 = (state_17300[(7)]);
var inst_17276 = cljs.core.vec.call(null,inst_17260);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17300__$1,(11),out,inst_17276);
} else {
if((state_val_17301 === (5))){
var inst_17261 = (state_17300[(8)]);
var inst_17264 = (state_17300[(9)]);
var inst_17268 = (state_17300[(10)]);
var inst_17268__$1 = f.call(null,inst_17264);
var inst_17269 = cljs.core._EQ_.call(null,inst_17268__$1,inst_17261);
var inst_17270 = cljs.core.keyword_identical_QMARK_.call(null,inst_17261,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17271 = (inst_17269) || (inst_17270);
var state_17300__$1 = (function (){var statearr_17314 = state_17300;
(statearr_17314[(10)] = inst_17268__$1);

return statearr_17314;
})();
if(cljs.core.truth_(inst_17271)){
var statearr_17315_17340 = state_17300__$1;
(statearr_17315_17340[(1)] = (8));

} else {
var statearr_17316_17341 = state_17300__$1;
(statearr_17316_17341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (14))){
var inst_17293 = (state_17300[(2)]);
var inst_17294 = cljs.core.async.close_BANG_.call(null,out);
var state_17300__$1 = (function (){var statearr_17318 = state_17300;
(statearr_17318[(13)] = inst_17293);

return statearr_17318;
})();
var statearr_17319_17342 = state_17300__$1;
(statearr_17319_17342[(2)] = inst_17294);

(statearr_17319_17342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (10))){
var inst_17283 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17320_17343 = state_17300__$1;
(statearr_17320_17343[(2)] = inst_17283);

(statearr_17320_17343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (8))){
var inst_17260 = (state_17300[(7)]);
var inst_17264 = (state_17300[(9)]);
var inst_17268 = (state_17300[(10)]);
var inst_17273 = inst_17260.push(inst_17264);
var tmp17317 = inst_17260;
var inst_17260__$1 = tmp17317;
var inst_17261 = inst_17268;
var state_17300__$1 = (function (){var statearr_17321 = state_17300;
(statearr_17321[(7)] = inst_17260__$1);

(statearr_17321[(14)] = inst_17273);

(statearr_17321[(8)] = inst_17261);

return statearr_17321;
})();
var statearr_17322_17344 = state_17300__$1;
(statearr_17322_17344[(2)] = null);

(statearr_17322_17344[(1)] = (2));


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
});})(c__11502__auto___17330,out))
;
return ((function (switch__11446__auto__,c__11502__auto___17330,out){
return (function() {
var state_machine__11447__auto__ = null;
var state_machine__11447__auto____0 = (function (){
var statearr_17326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17326[(0)] = state_machine__11447__auto__);

(statearr_17326[(1)] = (1));

return statearr_17326;
});
var state_machine__11447__auto____1 = (function (state_17300){
while(true){
var ret_value__11448__auto__ = (function (){try{while(true){
var result__11449__auto__ = switch__11446__auto__.call(null,state_17300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11449__auto__;
}
break;
}
}catch (e17327){if((e17327 instanceof Object)){
var ex__11450__auto__ = e17327;
var statearr_17328_17345 = state_17300;
(statearr_17328_17345[(5)] = ex__11450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17346 = state_17300;
state_17300 = G__17346;
continue;
} else {
return ret_value__11448__auto__;
}
break;
}
});
state_machine__11447__auto__ = function(state_17300){
switch(arguments.length){
case 0:
return state_machine__11447__auto____0.call(this);
case 1:
return state_machine__11447__auto____1.call(this,state_17300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11447__auto____0;
state_machine__11447__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11447__auto____1;
return state_machine__11447__auto__;
})()
;})(switch__11446__auto__,c__11502__auto___17330,out))
})();
var state__11504__auto__ = (function (){var statearr_17329 = f__11503__auto__.call(null);
(statearr_17329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11502__auto___17330);

return statearr_17329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11504__auto__);
});})(c__11502__auto___17330,out))
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