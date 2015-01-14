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
if(typeof cljs.core.async.t14939 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14939 = (function (f,fn_handler,meta14940){
this.f = f;
this.fn_handler = fn_handler;
this.meta14940 = meta14940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14939.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14941){
var self__ = this;
var _14941__$1 = this;
return self__.meta14940;
});

cljs.core.async.t14939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14941,meta14940__$1){
var self__ = this;
var _14941__$1 = this;
return (new cljs.core.async.t14939(self__.f,self__.fn_handler,meta14940__$1));
});

cljs.core.async.t14939.cljs$lang$type = true;

cljs.core.async.t14939.cljs$lang$ctorStr = "cljs.core.async/t14939";

cljs.core.async.t14939.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14939");
});

cljs.core.async.__GT_t14939 = (function __GT_t14939(f__$1,fn_handler__$1,meta14940){
return (new cljs.core.async.t14939(f__$1,fn_handler__$1,meta14940));
});

}

return (new cljs.core.async.t14939(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__14943 = buff;
if(G__14943){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__14943.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14943);
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
var val_14944 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14944);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14944,ret){
return (function (){
return fn1.call(null,val_14944);
});})(val_14944,ret))
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
var n__4509__auto___14945 = n;
var x_14946 = (0);
while(true){
if((x_14946 < n__4509__auto___14945)){
(a[x_14946] = (0));

var G__14947 = (x_14946 + (1));
x_14946 = G__14947;
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

var G__14948 = (i + (1));
i = G__14948;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14952 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14952 = (function (flag,alt_flag,meta14953){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14953 = meta14953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14952.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14954){
var self__ = this;
var _14954__$1 = this;
return self__.meta14953;
});})(flag))
;

cljs.core.async.t14952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14954,meta14953__$1){
var self__ = this;
var _14954__$1 = this;
return (new cljs.core.async.t14952(self__.flag,self__.alt_flag,meta14953__$1));
});})(flag))
;

cljs.core.async.t14952.cljs$lang$type = true;

cljs.core.async.t14952.cljs$lang$ctorStr = "cljs.core.async/t14952";

cljs.core.async.t14952.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14952");
});})(flag))
;

cljs.core.async.__GT_t14952 = ((function (flag){
return (function __GT_t14952(flag__$1,alt_flag__$1,meta14953){
return (new cljs.core.async.t14952(flag__$1,alt_flag__$1,meta14953));
});})(flag))
;

}

return (new cljs.core.async.t14952(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14958 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14958 = (function (cb,flag,alt_handler,meta14959){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14959 = meta14959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14960){
var self__ = this;
var _14960__$1 = this;
return self__.meta14959;
});

cljs.core.async.t14958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14960,meta14959__$1){
var self__ = this;
var _14960__$1 = this;
return (new cljs.core.async.t14958(self__.cb,self__.flag,self__.alt_handler,meta14959__$1));
});

cljs.core.async.t14958.cljs$lang$type = true;

cljs.core.async.t14958.cljs$lang$ctorStr = "cljs.core.async/t14958";

cljs.core.async.t14958.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14958");
});

cljs.core.async.__GT_t14958 = (function __GT_t14958(cb__$1,flag__$1,alt_handler__$1,meta14959){
return (new cljs.core.async.t14958(cb__$1,flag__$1,alt_handler__$1,meta14959));
});

}

return (new cljs.core.async.t14958(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__14961_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14961_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14962_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14962_SHARP_,port], null));
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
var G__14963 = (i + (1));
i = G__14963;
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
var alts_BANG___delegate = function (ports,p__14964){
var map__14966 = p__14964;
var map__14966__$1 = ((cljs.core.seq_QMARK_.call(null,map__14966))?cljs.core.apply.call(null,cljs.core.hash_map,map__14966):map__14966);
var opts = map__14966__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14964 = null;
if (arguments.length > 1) {
  p__14964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14964);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14967){
var ports = cljs.core.first(arglist__14967);
var p__14964 = cljs.core.rest(arglist__14967);
return alts_BANG___delegate(ports,p__14964);
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
var c__7304__auto___15062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15062){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15062){
return (function (state_15038){
var state_val_15039 = (state_15038[(1)]);
if((state_val_15039 === (7))){
var inst_15034 = (state_15038[(2)]);
var state_15038__$1 = state_15038;
var statearr_15040_15063 = state_15038__$1;
(statearr_15040_15063[(2)] = inst_15034);

(statearr_15040_15063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (1))){
var state_15038__$1 = state_15038;
var statearr_15041_15064 = state_15038__$1;
(statearr_15041_15064[(2)] = null);

(statearr_15041_15064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (4))){
var inst_15017 = (state_15038[(7)]);
var inst_15017__$1 = (state_15038[(2)]);
var inst_15018 = (inst_15017__$1 == null);
var state_15038__$1 = (function (){var statearr_15042 = state_15038;
(statearr_15042[(7)] = inst_15017__$1);

return statearr_15042;
})();
if(cljs.core.truth_(inst_15018)){
var statearr_15043_15065 = state_15038__$1;
(statearr_15043_15065[(1)] = (5));

} else {
var statearr_15044_15066 = state_15038__$1;
(statearr_15044_15066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (13))){
var state_15038__$1 = state_15038;
var statearr_15045_15067 = state_15038__$1;
(statearr_15045_15067[(2)] = null);

(statearr_15045_15067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (6))){
var inst_15017 = (state_15038[(7)]);
var state_15038__$1 = state_15038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15038__$1,(11),to,inst_15017);
} else {
if((state_val_15039 === (3))){
var inst_15036 = (state_15038[(2)]);
var state_15038__$1 = state_15038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15038__$1,inst_15036);
} else {
if((state_val_15039 === (12))){
var state_15038__$1 = state_15038;
var statearr_15046_15068 = state_15038__$1;
(statearr_15046_15068[(2)] = null);

(statearr_15046_15068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (2))){
var state_15038__$1 = state_15038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15038__$1,(4),from);
} else {
if((state_val_15039 === (11))){
var inst_15027 = (state_15038[(2)]);
var state_15038__$1 = state_15038;
if(cljs.core.truth_(inst_15027)){
var statearr_15047_15069 = state_15038__$1;
(statearr_15047_15069[(1)] = (12));

} else {
var statearr_15048_15070 = state_15038__$1;
(statearr_15048_15070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (9))){
var state_15038__$1 = state_15038;
var statearr_15049_15071 = state_15038__$1;
(statearr_15049_15071[(2)] = null);

(statearr_15049_15071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (5))){
var state_15038__$1 = state_15038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15050_15072 = state_15038__$1;
(statearr_15050_15072[(1)] = (8));

} else {
var statearr_15051_15073 = state_15038__$1;
(statearr_15051_15073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (14))){
var inst_15032 = (state_15038[(2)]);
var state_15038__$1 = state_15038;
var statearr_15052_15074 = state_15038__$1;
(statearr_15052_15074[(2)] = inst_15032);

(statearr_15052_15074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (10))){
var inst_15024 = (state_15038[(2)]);
var state_15038__$1 = state_15038;
var statearr_15053_15075 = state_15038__$1;
(statearr_15053_15075[(2)] = inst_15024);

(statearr_15053_15075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (8))){
var inst_15021 = cljs.core.async.close_BANG_.call(null,to);
var state_15038__$1 = state_15038;
var statearr_15054_15076 = state_15038__$1;
(statearr_15054_15076[(2)] = inst_15021);

(statearr_15054_15076[(1)] = (10));


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
});})(c__7304__auto___15062))
;
return ((function (switch__7248__auto__,c__7304__auto___15062){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15058 = [null,null,null,null,null,null,null,null];
(statearr_15058[(0)] = state_machine__7249__auto__);

(statearr_15058[(1)] = (1));

return statearr_15058;
});
var state_machine__7249__auto____1 = (function (state_15038){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15059){if((e15059 instanceof Object)){
var ex__7252__auto__ = e15059;
var statearr_15060_15077 = state_15038;
(statearr_15060_15077[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15078 = state_15038;
state_15038 = G__15078;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15038){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15062))
})();
var state__7306__auto__ = (function (){var statearr_15061 = f__7305__auto__.call(null);
(statearr_15061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15062);

return statearr_15061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15062))
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
return (function (p__15262){
var vec__15263 = p__15262;
var v = cljs.core.nth.call(null,vec__15263,(0),null);
var p = cljs.core.nth.call(null,vec__15263,(1),null);
var job = vec__15263;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7304__auto___15445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results){
return (function (state_15268){
var state_val_15269 = (state_15268[(1)]);
if((state_val_15269 === (2))){
var inst_15265 = (state_15268[(2)]);
var inst_15266 = cljs.core.async.close_BANG_.call(null,res);
var state_15268__$1 = (function (){var statearr_15270 = state_15268;
(statearr_15270[(7)] = inst_15265);

return statearr_15270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15268__$1,inst_15266);
} else {
if((state_val_15269 === (1))){
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15268__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results))
;
return ((function (switch__7248__auto__,c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15274 = [null,null,null,null,null,null,null,null];
(statearr_15274[(0)] = state_machine__7249__auto__);

(statearr_15274[(1)] = (1));

return statearr_15274;
});
var state_machine__7249__auto____1 = (function (state_15268){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15275){if((e15275 instanceof Object)){
var ex__7252__auto__ = e15275;
var statearr_15276_15446 = state_15268;
(statearr_15276_15446[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15447 = state_15268;
state_15268 = G__15447;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15268){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results))
})();
var state__7306__auto__ = (function (){var statearr_15277 = f__7305__auto__.call(null);
(statearr_15277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15445);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15445,res,vec__15263,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15278){
var vec__15279 = p__15278;
var v = cljs.core.nth.call(null,vec__15279,(0),null);
var p = cljs.core.nth.call(null,vec__15279,(1),null);
var job = vec__15279;
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
var n__4509__auto___15448 = n;
var __15449 = (0);
while(true){
if((__15449 < n__4509__auto___15448)){
var G__15280_15450 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15280_15450) {
case "async":
var c__7304__auto___15452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15449,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15449,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function (state_15293){
var state_val_15294 = (state_15293[(1)]);
if((state_val_15294 === (7))){
var inst_15289 = (state_15293[(2)]);
var state_15293__$1 = state_15293;
var statearr_15295_15453 = state_15293__$1;
(statearr_15295_15453[(2)] = inst_15289);

(statearr_15295_15453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (6))){
var state_15293__$1 = state_15293;
var statearr_15296_15454 = state_15293__$1;
(statearr_15296_15454[(2)] = null);

(statearr_15296_15454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (5))){
var state_15293__$1 = state_15293;
var statearr_15297_15455 = state_15293__$1;
(statearr_15297_15455[(2)] = null);

(statearr_15297_15455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (4))){
var inst_15283 = (state_15293[(2)]);
var inst_15284 = async.call(null,inst_15283);
var state_15293__$1 = state_15293;
if(cljs.core.truth_(inst_15284)){
var statearr_15298_15456 = state_15293__$1;
(statearr_15298_15456[(1)] = (5));

} else {
var statearr_15299_15457 = state_15293__$1;
(statearr_15299_15457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (3))){
var inst_15291 = (state_15293[(2)]);
var state_15293__$1 = state_15293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15293__$1,inst_15291);
} else {
if((state_val_15294 === (2))){
var state_15293__$1 = state_15293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15293__$1,(4),jobs);
} else {
if((state_val_15294 === (1))){
var state_15293__$1 = state_15293;
var statearr_15300_15458 = state_15293__$1;
(statearr_15300_15458[(2)] = null);

(statearr_15300_15458[(1)] = (2));


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
});})(__15449,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
;
return ((function (__15449,switch__7248__auto__,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15304 = [null,null,null,null,null,null,null];
(statearr_15304[(0)] = state_machine__7249__auto__);

(statearr_15304[(1)] = (1));

return statearr_15304;
});
var state_machine__7249__auto____1 = (function (state_15293){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15305){if((e15305 instanceof Object)){
var ex__7252__auto__ = e15305;
var statearr_15306_15459 = state_15293;
(statearr_15306_15459[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15460 = state_15293;
state_15293 = G__15460;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15293){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15449,switch__7248__auto__,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15307 = f__7305__auto__.call(null);
(statearr_15307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15452);

return statearr_15307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15449,c__7304__auto___15452,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
);


break;
case "compute":
var c__7304__auto___15461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15449,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (__15449,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function (state_15320){
var state_val_15321 = (state_15320[(1)]);
if((state_val_15321 === (7))){
var inst_15316 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
var statearr_15322_15462 = state_15320__$1;
(statearr_15322_15462[(2)] = inst_15316);

(statearr_15322_15462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (6))){
var state_15320__$1 = state_15320;
var statearr_15323_15463 = state_15320__$1;
(statearr_15323_15463[(2)] = null);

(statearr_15323_15463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (5))){
var state_15320__$1 = state_15320;
var statearr_15324_15464 = state_15320__$1;
(statearr_15324_15464[(2)] = null);

(statearr_15324_15464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (4))){
var inst_15310 = (state_15320[(2)]);
var inst_15311 = process.call(null,inst_15310);
var state_15320__$1 = state_15320;
if(cljs.core.truth_(inst_15311)){
var statearr_15325_15465 = state_15320__$1;
(statearr_15325_15465[(1)] = (5));

} else {
var statearr_15326_15466 = state_15320__$1;
(statearr_15326_15466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (3))){
var inst_15318 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15320__$1,inst_15318);
} else {
if((state_val_15321 === (2))){
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15320__$1,(4),jobs);
} else {
if((state_val_15321 === (1))){
var state_15320__$1 = state_15320;
var statearr_15327_15467 = state_15320__$1;
(statearr_15327_15467[(2)] = null);

(statearr_15327_15467[(1)] = (2));


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
});})(__15449,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
;
return ((function (__15449,switch__7248__auto__,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15331 = [null,null,null,null,null,null,null];
(statearr_15331[(0)] = state_machine__7249__auto__);

(statearr_15331[(1)] = (1));

return statearr_15331;
});
var state_machine__7249__auto____1 = (function (state_15320){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15332){if((e15332 instanceof Object)){
var ex__7252__auto__ = e15332;
var statearr_15333_15468 = state_15320;
(statearr_15333_15468[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15469 = state_15320;
state_15320 = G__15469;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(__15449,switch__7248__auto__,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15334 = f__7305__auto__.call(null);
(statearr_15334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15461);

return statearr_15334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(__15449,c__7304__auto___15461,G__15280_15450,n__4509__auto___15448,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15470 = (__15449 + (1));
__15449 = G__15470;
continue;
} else {
}
break;
}

var c__7304__auto___15471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15471,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15471,jobs,results,process,async){
return (function (state_15356){
var state_val_15357 = (state_15356[(1)]);
if((state_val_15357 === (9))){
var inst_15349 = (state_15356[(2)]);
var state_15356__$1 = (function (){var statearr_15358 = state_15356;
(statearr_15358[(7)] = inst_15349);

return statearr_15358;
})();
var statearr_15359_15472 = state_15356__$1;
(statearr_15359_15472[(2)] = null);

(statearr_15359_15472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15357 === (8))){
var inst_15342 = (state_15356[(8)]);
var inst_15347 = (state_15356[(2)]);
var state_15356__$1 = (function (){var statearr_15360 = state_15356;
(statearr_15360[(9)] = inst_15347);

return statearr_15360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15356__$1,(9),results,inst_15342);
} else {
if((state_val_15357 === (7))){
var inst_15352 = (state_15356[(2)]);
var state_15356__$1 = state_15356;
var statearr_15361_15473 = state_15356__$1;
(statearr_15361_15473[(2)] = inst_15352);

(statearr_15361_15473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15357 === (6))){
var inst_15342 = (state_15356[(8)]);
var inst_15337 = (state_15356[(10)]);
var inst_15342__$1 = cljs.core.async.chan.call(null,(1));
var inst_15343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15344 = [inst_15337,inst_15342__$1];
var inst_15345 = (new cljs.core.PersistentVector(null,2,(5),inst_15343,inst_15344,null));
var state_15356__$1 = (function (){var statearr_15362 = state_15356;
(statearr_15362[(8)] = inst_15342__$1);

return statearr_15362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15356__$1,(8),jobs,inst_15345);
} else {
if((state_val_15357 === (5))){
var inst_15340 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15356__$1 = state_15356;
var statearr_15363_15474 = state_15356__$1;
(statearr_15363_15474[(2)] = inst_15340);

(statearr_15363_15474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15357 === (4))){
var inst_15337 = (state_15356[(10)]);
var inst_15337__$1 = (state_15356[(2)]);
var inst_15338 = (inst_15337__$1 == null);
var state_15356__$1 = (function (){var statearr_15364 = state_15356;
(statearr_15364[(10)] = inst_15337__$1);

return statearr_15364;
})();
if(cljs.core.truth_(inst_15338)){
var statearr_15365_15475 = state_15356__$1;
(statearr_15365_15475[(1)] = (5));

} else {
var statearr_15366_15476 = state_15356__$1;
(statearr_15366_15476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15357 === (3))){
var inst_15354 = (state_15356[(2)]);
var state_15356__$1 = state_15356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15356__$1,inst_15354);
} else {
if((state_val_15357 === (2))){
var state_15356__$1 = state_15356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15356__$1,(4),from);
} else {
if((state_val_15357 === (1))){
var state_15356__$1 = state_15356;
var statearr_15367_15477 = state_15356__$1;
(statearr_15367_15477[(2)] = null);

(statearr_15367_15477[(1)] = (2));


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
});})(c__7304__auto___15471,jobs,results,process,async))
;
return ((function (switch__7248__auto__,c__7304__auto___15471,jobs,results,process,async){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15371[(0)] = state_machine__7249__auto__);

(statearr_15371[(1)] = (1));

return statearr_15371;
});
var state_machine__7249__auto____1 = (function (state_15356){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15372){if((e15372 instanceof Object)){
var ex__7252__auto__ = e15372;
var statearr_15373_15478 = state_15356;
(statearr_15373_15478[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15479 = state_15356;
state_15356 = G__15479;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15356){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15471,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15374 = f__7305__auto__.call(null);
(statearr_15374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15471);

return statearr_15374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15471,jobs,results,process,async))
);


var c__7304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto__,jobs,results,process,async){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto__,jobs,results,process,async){
return (function (state_15412){
var state_val_15413 = (state_15412[(1)]);
if((state_val_15413 === (7))){
var inst_15408 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15414_15480 = state_15412__$1;
(statearr_15414_15480[(2)] = inst_15408);

(statearr_15414_15480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (20))){
var state_15412__$1 = state_15412;
var statearr_15415_15481 = state_15412__$1;
(statearr_15415_15481[(2)] = null);

(statearr_15415_15481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (1))){
var state_15412__$1 = state_15412;
var statearr_15416_15482 = state_15412__$1;
(statearr_15416_15482[(2)] = null);

(statearr_15416_15482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (4))){
var inst_15377 = (state_15412[(7)]);
var inst_15377__$1 = (state_15412[(2)]);
var inst_15378 = (inst_15377__$1 == null);
var state_15412__$1 = (function (){var statearr_15417 = state_15412;
(statearr_15417[(7)] = inst_15377__$1);

return statearr_15417;
})();
if(cljs.core.truth_(inst_15378)){
var statearr_15418_15483 = state_15412__$1;
(statearr_15418_15483[(1)] = (5));

} else {
var statearr_15419_15484 = state_15412__$1;
(statearr_15419_15484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (15))){
var inst_15390 = (state_15412[(8)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15412__$1,(18),to,inst_15390);
} else {
if((state_val_15413 === (21))){
var inst_15403 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15420_15485 = state_15412__$1;
(statearr_15420_15485[(2)] = inst_15403);

(statearr_15420_15485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (13))){
var inst_15405 = (state_15412[(2)]);
var state_15412__$1 = (function (){var statearr_15421 = state_15412;
(statearr_15421[(9)] = inst_15405);

return statearr_15421;
})();
var statearr_15422_15486 = state_15412__$1;
(statearr_15422_15486[(2)] = null);

(statearr_15422_15486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (6))){
var inst_15377 = (state_15412[(7)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(11),inst_15377);
} else {
if((state_val_15413 === (17))){
var inst_15398 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
if(cljs.core.truth_(inst_15398)){
var statearr_15423_15487 = state_15412__$1;
(statearr_15423_15487[(1)] = (19));

} else {
var statearr_15424_15488 = state_15412__$1;
(statearr_15424_15488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (3))){
var inst_15410 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15412__$1,inst_15410);
} else {
if((state_val_15413 === (12))){
var inst_15387 = (state_15412[(10)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(14),inst_15387);
} else {
if((state_val_15413 === (2))){
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(4),results);
} else {
if((state_val_15413 === (19))){
var state_15412__$1 = state_15412;
var statearr_15425_15489 = state_15412__$1;
(statearr_15425_15489[(2)] = null);

(statearr_15425_15489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (11))){
var inst_15387 = (state_15412[(2)]);
var state_15412__$1 = (function (){var statearr_15426 = state_15412;
(statearr_15426[(10)] = inst_15387);

return statearr_15426;
})();
var statearr_15427_15490 = state_15412__$1;
(statearr_15427_15490[(2)] = null);

(statearr_15427_15490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (9))){
var state_15412__$1 = state_15412;
var statearr_15428_15491 = state_15412__$1;
(statearr_15428_15491[(2)] = null);

(statearr_15428_15491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (5))){
var state_15412__$1 = state_15412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15429_15492 = state_15412__$1;
(statearr_15429_15492[(1)] = (8));

} else {
var statearr_15430_15493 = state_15412__$1;
(statearr_15430_15493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (14))){
var inst_15392 = (state_15412[(11)]);
var inst_15390 = (state_15412[(8)]);
var inst_15390__$1 = (state_15412[(2)]);
var inst_15391 = (inst_15390__$1 == null);
var inst_15392__$1 = cljs.core.not.call(null,inst_15391);
var state_15412__$1 = (function (){var statearr_15431 = state_15412;
(statearr_15431[(11)] = inst_15392__$1);

(statearr_15431[(8)] = inst_15390__$1);

return statearr_15431;
})();
if(inst_15392__$1){
var statearr_15432_15494 = state_15412__$1;
(statearr_15432_15494[(1)] = (15));

} else {
var statearr_15433_15495 = state_15412__$1;
(statearr_15433_15495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (16))){
var inst_15392 = (state_15412[(11)]);
var state_15412__$1 = state_15412;
var statearr_15434_15496 = state_15412__$1;
(statearr_15434_15496[(2)] = inst_15392);

(statearr_15434_15496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (10))){
var inst_15384 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15435_15497 = state_15412__$1;
(statearr_15435_15497[(2)] = inst_15384);

(statearr_15435_15497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (18))){
var inst_15395 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15436_15498 = state_15412__$1;
(statearr_15436_15498[(2)] = inst_15395);

(statearr_15436_15498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (8))){
var inst_15381 = cljs.core.async.close_BANG_.call(null,to);
var state_15412__$1 = state_15412;
var statearr_15437_15499 = state_15412__$1;
(statearr_15437_15499[(2)] = inst_15381);

(statearr_15437_15499[(1)] = (10));


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
var statearr_15441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15441[(0)] = state_machine__7249__auto__);

(statearr_15441[(1)] = (1));

return statearr_15441;
});
var state_machine__7249__auto____1 = (function (state_15412){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15442){if((e15442 instanceof Object)){
var ex__7252__auto__ = e15442;
var statearr_15443_15500 = state_15412;
(statearr_15443_15500[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15501 = state_15412;
state_15412 = G__15501;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__,jobs,results,process,async))
})();
var state__7306__auto__ = (function (){var statearr_15444 = f__7305__auto__.call(null);
(statearr_15444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15444;
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
var c__7304__auto___15602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___15602,tc,fc){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___15602,tc,fc){
return (function (state_15577){
var state_val_15578 = (state_15577[(1)]);
if((state_val_15578 === (7))){
var inst_15573 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15579_15603 = state_15577__$1;
(statearr_15579_15603[(2)] = inst_15573);

(statearr_15579_15603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (1))){
var state_15577__$1 = state_15577;
var statearr_15580_15604 = state_15577__$1;
(statearr_15580_15604[(2)] = null);

(statearr_15580_15604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (4))){
var inst_15554 = (state_15577[(7)]);
var inst_15554__$1 = (state_15577[(2)]);
var inst_15555 = (inst_15554__$1 == null);
var state_15577__$1 = (function (){var statearr_15581 = state_15577;
(statearr_15581[(7)] = inst_15554__$1);

return statearr_15581;
})();
if(cljs.core.truth_(inst_15555)){
var statearr_15582_15605 = state_15577__$1;
(statearr_15582_15605[(1)] = (5));

} else {
var statearr_15583_15606 = state_15577__$1;
(statearr_15583_15606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (13))){
var state_15577__$1 = state_15577;
var statearr_15584_15607 = state_15577__$1;
(statearr_15584_15607[(2)] = null);

(statearr_15584_15607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (6))){
var inst_15554 = (state_15577[(7)]);
var inst_15560 = p.call(null,inst_15554);
var state_15577__$1 = state_15577;
if(cljs.core.truth_(inst_15560)){
var statearr_15585_15608 = state_15577__$1;
(statearr_15585_15608[(1)] = (9));

} else {
var statearr_15586_15609 = state_15577__$1;
(statearr_15586_15609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (3))){
var inst_15575 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15577__$1,inst_15575);
} else {
if((state_val_15578 === (12))){
var state_15577__$1 = state_15577;
var statearr_15587_15610 = state_15577__$1;
(statearr_15587_15610[(2)] = null);

(statearr_15587_15610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (2))){
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15577__$1,(4),ch);
} else {
if((state_val_15578 === (11))){
var inst_15554 = (state_15577[(7)]);
var inst_15564 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15577__$1,(8),inst_15564,inst_15554);
} else {
if((state_val_15578 === (9))){
var state_15577__$1 = state_15577;
var statearr_15588_15611 = state_15577__$1;
(statearr_15588_15611[(2)] = tc);

(statearr_15588_15611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (5))){
var inst_15557 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15558 = cljs.core.async.close_BANG_.call(null,fc);
var state_15577__$1 = (function (){var statearr_15589 = state_15577;
(statearr_15589[(8)] = inst_15557);

return statearr_15589;
})();
var statearr_15590_15612 = state_15577__$1;
(statearr_15590_15612[(2)] = inst_15558);

(statearr_15590_15612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (14))){
var inst_15571 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15591_15613 = state_15577__$1;
(statearr_15591_15613[(2)] = inst_15571);

(statearr_15591_15613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (10))){
var state_15577__$1 = state_15577;
var statearr_15592_15614 = state_15577__$1;
(statearr_15592_15614[(2)] = fc);

(statearr_15592_15614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (8))){
var inst_15566 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
if(cljs.core.truth_(inst_15566)){
var statearr_15593_15615 = state_15577__$1;
(statearr_15593_15615[(1)] = (12));

} else {
var statearr_15594_15616 = state_15577__$1;
(statearr_15594_15616[(1)] = (13));

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
});})(c__7304__auto___15602,tc,fc))
;
return ((function (switch__7248__auto__,c__7304__auto___15602,tc,fc){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_15598 = [null,null,null,null,null,null,null,null,null];
(statearr_15598[(0)] = state_machine__7249__auto__);

(statearr_15598[(1)] = (1));

return statearr_15598;
});
var state_machine__7249__auto____1 = (function (state_15577){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15599){if((e15599 instanceof Object)){
var ex__7252__auto__ = e15599;
var statearr_15600_15617 = state_15577;
(statearr_15600_15617[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15618 = state_15577;
state_15577 = G__15618;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15577){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___15602,tc,fc))
})();
var state__7306__auto__ = (function (){var statearr_15601 = f__7305__auto__.call(null);
(statearr_15601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___15602);

return statearr_15601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___15602,tc,fc))
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
return (function (state_15665){
var state_val_15666 = (state_15665[(1)]);
if((state_val_15666 === (7))){
var inst_15661 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15667_15683 = state_15665__$1;
(statearr_15667_15683[(2)] = inst_15661);

(statearr_15667_15683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (6))){
var inst_15654 = (state_15665[(7)]);
var inst_15651 = (state_15665[(8)]);
var inst_15658 = f.call(null,inst_15651,inst_15654);
var inst_15651__$1 = inst_15658;
var state_15665__$1 = (function (){var statearr_15668 = state_15665;
(statearr_15668[(8)] = inst_15651__$1);

return statearr_15668;
})();
var statearr_15669_15684 = state_15665__$1;
(statearr_15669_15684[(2)] = null);

(statearr_15669_15684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (5))){
var inst_15651 = (state_15665[(8)]);
var state_15665__$1 = state_15665;
var statearr_15670_15685 = state_15665__$1;
(statearr_15670_15685[(2)] = inst_15651);

(statearr_15670_15685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (4))){
var inst_15654 = (state_15665[(7)]);
var inst_15654__$1 = (state_15665[(2)]);
var inst_15655 = (inst_15654__$1 == null);
var state_15665__$1 = (function (){var statearr_15671 = state_15665;
(statearr_15671[(7)] = inst_15654__$1);

return statearr_15671;
})();
if(cljs.core.truth_(inst_15655)){
var statearr_15672_15686 = state_15665__$1;
(statearr_15672_15686[(1)] = (5));

} else {
var statearr_15673_15687 = state_15665__$1;
(statearr_15673_15687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (3))){
var inst_15663 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15665__$1,inst_15663);
} else {
if((state_val_15666 === (2))){
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15665__$1,(4),ch);
} else {
if((state_val_15666 === (1))){
var inst_15651 = init;
var state_15665__$1 = (function (){var statearr_15674 = state_15665;
(statearr_15674[(8)] = inst_15651);

return statearr_15674;
})();
var statearr_15675_15688 = state_15665__$1;
(statearr_15675_15688[(2)] = null);

(statearr_15675_15688[(1)] = (2));


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
var statearr_15679 = [null,null,null,null,null,null,null,null,null];
(statearr_15679[(0)] = state_machine__7249__auto__);

(statearr_15679[(1)] = (1));

return statearr_15679;
});
var state_machine__7249__auto____1 = (function (state_15665){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15680){if((e15680 instanceof Object)){
var ex__7252__auto__ = e15680;
var statearr_15681_15689 = state_15665;
(statearr_15681_15689[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15690 = state_15665;
state_15665 = G__15690;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15665){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15682 = f__7305__auto__.call(null);
(statearr_15682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15682;
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
return (function (state_15764){
var state_val_15765 = (state_15764[(1)]);
if((state_val_15765 === (7))){
var inst_15746 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15766_15789 = state_15764__$1;
(statearr_15766_15789[(2)] = inst_15746);

(statearr_15766_15789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (1))){
var inst_15740 = cljs.core.seq.call(null,coll);
var inst_15741 = inst_15740;
var state_15764__$1 = (function (){var statearr_15767 = state_15764;
(statearr_15767[(7)] = inst_15741);

return statearr_15767;
})();
var statearr_15768_15790 = state_15764__$1;
(statearr_15768_15790[(2)] = null);

(statearr_15768_15790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (4))){
var inst_15741 = (state_15764[(7)]);
var inst_15744 = cljs.core.first.call(null,inst_15741);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15764__$1,(7),ch,inst_15744);
} else {
if((state_val_15765 === (13))){
var inst_15758 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15769_15791 = state_15764__$1;
(statearr_15769_15791[(2)] = inst_15758);

(statearr_15769_15791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (6))){
var inst_15749 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
if(cljs.core.truth_(inst_15749)){
var statearr_15770_15792 = state_15764__$1;
(statearr_15770_15792[(1)] = (8));

} else {
var statearr_15771_15793 = state_15764__$1;
(statearr_15771_15793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (3))){
var inst_15762 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15764__$1,inst_15762);
} else {
if((state_val_15765 === (12))){
var state_15764__$1 = state_15764;
var statearr_15772_15794 = state_15764__$1;
(statearr_15772_15794[(2)] = null);

(statearr_15772_15794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (2))){
var inst_15741 = (state_15764[(7)]);
var state_15764__$1 = state_15764;
if(cljs.core.truth_(inst_15741)){
var statearr_15773_15795 = state_15764__$1;
(statearr_15773_15795[(1)] = (4));

} else {
var statearr_15774_15796 = state_15764__$1;
(statearr_15774_15796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (11))){
var inst_15755 = cljs.core.async.close_BANG_.call(null,ch);
var state_15764__$1 = state_15764;
var statearr_15775_15797 = state_15764__$1;
(statearr_15775_15797[(2)] = inst_15755);

(statearr_15775_15797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (9))){
var state_15764__$1 = state_15764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15776_15798 = state_15764__$1;
(statearr_15776_15798[(1)] = (11));

} else {
var statearr_15777_15799 = state_15764__$1;
(statearr_15777_15799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (5))){
var inst_15741 = (state_15764[(7)]);
var state_15764__$1 = state_15764;
var statearr_15778_15800 = state_15764__$1;
(statearr_15778_15800[(2)] = inst_15741);

(statearr_15778_15800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (10))){
var inst_15760 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15779_15801 = state_15764__$1;
(statearr_15779_15801[(2)] = inst_15760);

(statearr_15779_15801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (8))){
var inst_15741 = (state_15764[(7)]);
var inst_15751 = cljs.core.next.call(null,inst_15741);
var inst_15741__$1 = inst_15751;
var state_15764__$1 = (function (){var statearr_15780 = state_15764;
(statearr_15780[(7)] = inst_15741__$1);

return statearr_15780;
})();
var statearr_15781_15802 = state_15764__$1;
(statearr_15781_15802[(2)] = null);

(statearr_15781_15802[(1)] = (2));


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
var statearr_15785 = [null,null,null,null,null,null,null,null];
(statearr_15785[(0)] = state_machine__7249__auto__);

(statearr_15785[(1)] = (1));

return statearr_15785;
});
var state_machine__7249__auto____1 = (function (state_15764){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_15764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e15786){if((e15786 instanceof Object)){
var ex__7252__auto__ = e15786;
var statearr_15787_15803 = state_15764;
(statearr_15787_15803[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15804 = state_15764;
state_15764 = G__15804;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_15788 = f__7305__auto__.call(null);
(statearr_15788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_15788;
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

cljs.core.async.Mux = (function (){var obj15806 = {};
return obj15806;
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


cljs.core.async.Mult = (function (){var obj15808 = {};
return obj15808;
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
if(typeof cljs.core.async.t16030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16030 = (function (cs,ch,mult,meta16031){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16031 = meta16031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16030.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16032){
var self__ = this;
var _16032__$1 = this;
return self__.meta16031;
});})(cs))
;

cljs.core.async.t16030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16032,meta16031__$1){
var self__ = this;
var _16032__$1 = this;
return (new cljs.core.async.t16030(self__.cs,self__.ch,self__.mult,meta16031__$1));
});})(cs))
;

cljs.core.async.t16030.cljs$lang$type = true;

cljs.core.async.t16030.cljs$lang$ctorStr = "cljs.core.async/t16030";

cljs.core.async.t16030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16030");
});})(cs))
;

cljs.core.async.__GT_t16030 = ((function (cs){
return (function __GT_t16030(cs__$1,ch__$1,mult__$1,meta16031){
return (new cljs.core.async.t16030(cs__$1,ch__$1,mult__$1,meta16031));
});})(cs))
;

}

return (new cljs.core.async.t16030(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___16251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16251,cs,m,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16251,cs,m,dchan,dctr,done){
return (function (state_16163){
var state_val_16164 = (state_16163[(1)]);
if((state_val_16164 === (7))){
var inst_16159 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16165_16252 = state_16163__$1;
(statearr_16165_16252[(2)] = inst_16159);

(statearr_16165_16252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (20))){
var inst_16064 = (state_16163[(7)]);
var inst_16074 = cljs.core.first.call(null,inst_16064);
var inst_16075 = cljs.core.nth.call(null,inst_16074,(0),null);
var inst_16076 = cljs.core.nth.call(null,inst_16074,(1),null);
var state_16163__$1 = (function (){var statearr_16166 = state_16163;
(statearr_16166[(8)] = inst_16075);

return statearr_16166;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16167_16253 = state_16163__$1;
(statearr_16167_16253[(1)] = (22));

} else {
var statearr_16168_16254 = state_16163__$1;
(statearr_16168_16254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (27))){
var inst_16104 = (state_16163[(9)]);
var inst_16106 = (state_16163[(10)]);
var inst_16111 = (state_16163[(11)]);
var inst_16035 = (state_16163[(12)]);
var inst_16111__$1 = cljs.core._nth.call(null,inst_16104,inst_16106);
var inst_16112 = cljs.core.async.put_BANG_.call(null,inst_16111__$1,inst_16035,done);
var state_16163__$1 = (function (){var statearr_16169 = state_16163;
(statearr_16169[(11)] = inst_16111__$1);

return statearr_16169;
})();
if(cljs.core.truth_(inst_16112)){
var statearr_16170_16255 = state_16163__$1;
(statearr_16170_16255[(1)] = (30));

} else {
var statearr_16171_16256 = state_16163__$1;
(statearr_16171_16256[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (1))){
var state_16163__$1 = state_16163;
var statearr_16172_16257 = state_16163__$1;
(statearr_16172_16257[(2)] = null);

(statearr_16172_16257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (24))){
var inst_16064 = (state_16163[(7)]);
var inst_16081 = (state_16163[(2)]);
var inst_16082 = cljs.core.next.call(null,inst_16064);
var inst_16044 = inst_16082;
var inst_16045 = null;
var inst_16046 = (0);
var inst_16047 = (0);
var state_16163__$1 = (function (){var statearr_16173 = state_16163;
(statearr_16173[(13)] = inst_16081);

(statearr_16173[(14)] = inst_16047);

(statearr_16173[(15)] = inst_16045);

(statearr_16173[(16)] = inst_16044);

(statearr_16173[(17)] = inst_16046);

return statearr_16173;
})();
var statearr_16174_16258 = state_16163__$1;
(statearr_16174_16258[(2)] = null);

(statearr_16174_16258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (39))){
var state_16163__$1 = state_16163;
var statearr_16178_16259 = state_16163__$1;
(statearr_16178_16259[(2)] = null);

(statearr_16178_16259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (4))){
var inst_16035 = (state_16163[(12)]);
var inst_16035__$1 = (state_16163[(2)]);
var inst_16036 = (inst_16035__$1 == null);
var state_16163__$1 = (function (){var statearr_16179 = state_16163;
(statearr_16179[(12)] = inst_16035__$1);

return statearr_16179;
})();
if(cljs.core.truth_(inst_16036)){
var statearr_16180_16260 = state_16163__$1;
(statearr_16180_16260[(1)] = (5));

} else {
var statearr_16181_16261 = state_16163__$1;
(statearr_16181_16261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (15))){
var inst_16047 = (state_16163[(14)]);
var inst_16045 = (state_16163[(15)]);
var inst_16044 = (state_16163[(16)]);
var inst_16046 = (state_16163[(17)]);
var inst_16060 = (state_16163[(2)]);
var inst_16061 = (inst_16047 + (1));
var tmp16175 = inst_16045;
var tmp16176 = inst_16044;
var tmp16177 = inst_16046;
var inst_16044__$1 = tmp16176;
var inst_16045__$1 = tmp16175;
var inst_16046__$1 = tmp16177;
var inst_16047__$1 = inst_16061;
var state_16163__$1 = (function (){var statearr_16182 = state_16163;
(statearr_16182[(14)] = inst_16047__$1);

(statearr_16182[(15)] = inst_16045__$1);

(statearr_16182[(18)] = inst_16060);

(statearr_16182[(16)] = inst_16044__$1);

(statearr_16182[(17)] = inst_16046__$1);

return statearr_16182;
})();
var statearr_16183_16262 = state_16163__$1;
(statearr_16183_16262[(2)] = null);

(statearr_16183_16262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (21))){
var inst_16085 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16187_16263 = state_16163__$1;
(statearr_16187_16263[(2)] = inst_16085);

(statearr_16187_16263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (31))){
var inst_16111 = (state_16163[(11)]);
var inst_16115 = done.call(null,null);
var inst_16116 = cljs.core.async.untap_STAR_.call(null,m,inst_16111);
var state_16163__$1 = (function (){var statearr_16188 = state_16163;
(statearr_16188[(19)] = inst_16115);

return statearr_16188;
})();
var statearr_16189_16264 = state_16163__$1;
(statearr_16189_16264[(2)] = inst_16116);

(statearr_16189_16264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (32))){
var inst_16104 = (state_16163[(9)]);
var inst_16103 = (state_16163[(20)]);
var inst_16106 = (state_16163[(10)]);
var inst_16105 = (state_16163[(21)]);
var inst_16118 = (state_16163[(2)]);
var inst_16119 = (inst_16106 + (1));
var tmp16184 = inst_16104;
var tmp16185 = inst_16103;
var tmp16186 = inst_16105;
var inst_16103__$1 = tmp16185;
var inst_16104__$1 = tmp16184;
var inst_16105__$1 = tmp16186;
var inst_16106__$1 = inst_16119;
var state_16163__$1 = (function (){var statearr_16190 = state_16163;
(statearr_16190[(9)] = inst_16104__$1);

(statearr_16190[(20)] = inst_16103__$1);

(statearr_16190[(10)] = inst_16106__$1);

(statearr_16190[(22)] = inst_16118);

(statearr_16190[(21)] = inst_16105__$1);

return statearr_16190;
})();
var statearr_16191_16265 = state_16163__$1;
(statearr_16191_16265[(2)] = null);

(statearr_16191_16265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (40))){
var inst_16131 = (state_16163[(23)]);
var inst_16135 = done.call(null,null);
var inst_16136 = cljs.core.async.untap_STAR_.call(null,m,inst_16131);
var state_16163__$1 = (function (){var statearr_16192 = state_16163;
(statearr_16192[(24)] = inst_16135);

return statearr_16192;
})();
var statearr_16193_16266 = state_16163__$1;
(statearr_16193_16266[(2)] = inst_16136);

(statearr_16193_16266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (33))){
var inst_16122 = (state_16163[(25)]);
var inst_16124 = cljs.core.chunked_seq_QMARK_.call(null,inst_16122);
var state_16163__$1 = state_16163;
if(inst_16124){
var statearr_16194_16267 = state_16163__$1;
(statearr_16194_16267[(1)] = (36));

} else {
var statearr_16195_16268 = state_16163__$1;
(statearr_16195_16268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (13))){
var inst_16054 = (state_16163[(26)]);
var inst_16057 = cljs.core.async.close_BANG_.call(null,inst_16054);
var state_16163__$1 = state_16163;
var statearr_16196_16269 = state_16163__$1;
(statearr_16196_16269[(2)] = inst_16057);

(statearr_16196_16269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (22))){
var inst_16075 = (state_16163[(8)]);
var inst_16078 = cljs.core.async.close_BANG_.call(null,inst_16075);
var state_16163__$1 = state_16163;
var statearr_16197_16270 = state_16163__$1;
(statearr_16197_16270[(2)] = inst_16078);

(statearr_16197_16270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (36))){
var inst_16122 = (state_16163[(25)]);
var inst_16126 = cljs.core.chunk_first.call(null,inst_16122);
var inst_16127 = cljs.core.chunk_rest.call(null,inst_16122);
var inst_16128 = cljs.core.count.call(null,inst_16126);
var inst_16103 = inst_16127;
var inst_16104 = inst_16126;
var inst_16105 = inst_16128;
var inst_16106 = (0);
var state_16163__$1 = (function (){var statearr_16198 = state_16163;
(statearr_16198[(9)] = inst_16104);

(statearr_16198[(20)] = inst_16103);

(statearr_16198[(10)] = inst_16106);

(statearr_16198[(21)] = inst_16105);

return statearr_16198;
})();
var statearr_16199_16271 = state_16163__$1;
(statearr_16199_16271[(2)] = null);

(statearr_16199_16271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (41))){
var inst_16122 = (state_16163[(25)]);
var inst_16138 = (state_16163[(2)]);
var inst_16139 = cljs.core.next.call(null,inst_16122);
var inst_16103 = inst_16139;
var inst_16104 = null;
var inst_16105 = (0);
var inst_16106 = (0);
var state_16163__$1 = (function (){var statearr_16200 = state_16163;
(statearr_16200[(9)] = inst_16104);

(statearr_16200[(20)] = inst_16103);

(statearr_16200[(10)] = inst_16106);

(statearr_16200[(27)] = inst_16138);

(statearr_16200[(21)] = inst_16105);

return statearr_16200;
})();
var statearr_16201_16272 = state_16163__$1;
(statearr_16201_16272[(2)] = null);

(statearr_16201_16272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (43))){
var state_16163__$1 = state_16163;
var statearr_16202_16273 = state_16163__$1;
(statearr_16202_16273[(2)] = null);

(statearr_16202_16273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (29))){
var inst_16147 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16203_16274 = state_16163__$1;
(statearr_16203_16274[(2)] = inst_16147);

(statearr_16203_16274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (44))){
var inst_16156 = (state_16163[(2)]);
var state_16163__$1 = (function (){var statearr_16204 = state_16163;
(statearr_16204[(28)] = inst_16156);

return statearr_16204;
})();
var statearr_16205_16275 = state_16163__$1;
(statearr_16205_16275[(2)] = null);

(statearr_16205_16275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (6))){
var inst_16095 = (state_16163[(29)]);
var inst_16094 = cljs.core.deref.call(null,cs);
var inst_16095__$1 = cljs.core.keys.call(null,inst_16094);
var inst_16096 = cljs.core.count.call(null,inst_16095__$1);
var inst_16097 = cljs.core.reset_BANG_.call(null,dctr,inst_16096);
var inst_16102 = cljs.core.seq.call(null,inst_16095__$1);
var inst_16103 = inst_16102;
var inst_16104 = null;
var inst_16105 = (0);
var inst_16106 = (0);
var state_16163__$1 = (function (){var statearr_16206 = state_16163;
(statearr_16206[(9)] = inst_16104);

(statearr_16206[(20)] = inst_16103);

(statearr_16206[(10)] = inst_16106);

(statearr_16206[(29)] = inst_16095__$1);

(statearr_16206[(21)] = inst_16105);

(statearr_16206[(30)] = inst_16097);

return statearr_16206;
})();
var statearr_16207_16276 = state_16163__$1;
(statearr_16207_16276[(2)] = null);

(statearr_16207_16276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (28))){
var inst_16122 = (state_16163[(25)]);
var inst_16103 = (state_16163[(20)]);
var inst_16122__$1 = cljs.core.seq.call(null,inst_16103);
var state_16163__$1 = (function (){var statearr_16208 = state_16163;
(statearr_16208[(25)] = inst_16122__$1);

return statearr_16208;
})();
if(inst_16122__$1){
var statearr_16209_16277 = state_16163__$1;
(statearr_16209_16277[(1)] = (33));

} else {
var statearr_16210_16278 = state_16163__$1;
(statearr_16210_16278[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (25))){
var inst_16106 = (state_16163[(10)]);
var inst_16105 = (state_16163[(21)]);
var inst_16108 = (inst_16106 < inst_16105);
var inst_16109 = inst_16108;
var state_16163__$1 = state_16163;
if(cljs.core.truth_(inst_16109)){
var statearr_16211_16279 = state_16163__$1;
(statearr_16211_16279[(1)] = (27));

} else {
var statearr_16212_16280 = state_16163__$1;
(statearr_16212_16280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (34))){
var state_16163__$1 = state_16163;
var statearr_16213_16281 = state_16163__$1;
(statearr_16213_16281[(2)] = null);

(statearr_16213_16281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (17))){
var state_16163__$1 = state_16163;
var statearr_16214_16282 = state_16163__$1;
(statearr_16214_16282[(2)] = null);

(statearr_16214_16282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (3))){
var inst_16161 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16163__$1,inst_16161);
} else {
if((state_val_16164 === (12))){
var inst_16090 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16215_16283 = state_16163__$1;
(statearr_16215_16283[(2)] = inst_16090);

(statearr_16215_16283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (2))){
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16163__$1,(4),ch);
} else {
if((state_val_16164 === (23))){
var state_16163__$1 = state_16163;
var statearr_16216_16284 = state_16163__$1;
(statearr_16216_16284[(2)] = null);

(statearr_16216_16284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (35))){
var inst_16145 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16217_16285 = state_16163__$1;
(statearr_16217_16285[(2)] = inst_16145);

(statearr_16217_16285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (19))){
var inst_16064 = (state_16163[(7)]);
var inst_16068 = cljs.core.chunk_first.call(null,inst_16064);
var inst_16069 = cljs.core.chunk_rest.call(null,inst_16064);
var inst_16070 = cljs.core.count.call(null,inst_16068);
var inst_16044 = inst_16069;
var inst_16045 = inst_16068;
var inst_16046 = inst_16070;
var inst_16047 = (0);
var state_16163__$1 = (function (){var statearr_16218 = state_16163;
(statearr_16218[(14)] = inst_16047);

(statearr_16218[(15)] = inst_16045);

(statearr_16218[(16)] = inst_16044);

(statearr_16218[(17)] = inst_16046);

return statearr_16218;
})();
var statearr_16219_16286 = state_16163__$1;
(statearr_16219_16286[(2)] = null);

(statearr_16219_16286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (11))){
var inst_16044 = (state_16163[(16)]);
var inst_16064 = (state_16163[(7)]);
var inst_16064__$1 = cljs.core.seq.call(null,inst_16044);
var state_16163__$1 = (function (){var statearr_16220 = state_16163;
(statearr_16220[(7)] = inst_16064__$1);

return statearr_16220;
})();
if(inst_16064__$1){
var statearr_16221_16287 = state_16163__$1;
(statearr_16221_16287[(1)] = (16));

} else {
var statearr_16222_16288 = state_16163__$1;
(statearr_16222_16288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (9))){
var inst_16092 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16223_16289 = state_16163__$1;
(statearr_16223_16289[(2)] = inst_16092);

(statearr_16223_16289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (5))){
var inst_16042 = cljs.core.deref.call(null,cs);
var inst_16043 = cljs.core.seq.call(null,inst_16042);
var inst_16044 = inst_16043;
var inst_16045 = null;
var inst_16046 = (0);
var inst_16047 = (0);
var state_16163__$1 = (function (){var statearr_16224 = state_16163;
(statearr_16224[(14)] = inst_16047);

(statearr_16224[(15)] = inst_16045);

(statearr_16224[(16)] = inst_16044);

(statearr_16224[(17)] = inst_16046);

return statearr_16224;
})();
var statearr_16225_16290 = state_16163__$1;
(statearr_16225_16290[(2)] = null);

(statearr_16225_16290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (14))){
var state_16163__$1 = state_16163;
var statearr_16226_16291 = state_16163__$1;
(statearr_16226_16291[(2)] = null);

(statearr_16226_16291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (45))){
var inst_16153 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16227_16292 = state_16163__$1;
(statearr_16227_16292[(2)] = inst_16153);

(statearr_16227_16292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (26))){
var inst_16095 = (state_16163[(29)]);
var inst_16149 = (state_16163[(2)]);
var inst_16150 = cljs.core.seq.call(null,inst_16095);
var state_16163__$1 = (function (){var statearr_16228 = state_16163;
(statearr_16228[(31)] = inst_16149);

return statearr_16228;
})();
if(inst_16150){
var statearr_16229_16293 = state_16163__$1;
(statearr_16229_16293[(1)] = (42));

} else {
var statearr_16230_16294 = state_16163__$1;
(statearr_16230_16294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (16))){
var inst_16064 = (state_16163[(7)]);
var inst_16066 = cljs.core.chunked_seq_QMARK_.call(null,inst_16064);
var state_16163__$1 = state_16163;
if(inst_16066){
var statearr_16231_16295 = state_16163__$1;
(statearr_16231_16295[(1)] = (19));

} else {
var statearr_16232_16296 = state_16163__$1;
(statearr_16232_16296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (38))){
var inst_16142 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16233_16297 = state_16163__$1;
(statearr_16233_16297[(2)] = inst_16142);

(statearr_16233_16297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (30))){
var state_16163__$1 = state_16163;
var statearr_16234_16298 = state_16163__$1;
(statearr_16234_16298[(2)] = null);

(statearr_16234_16298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (10))){
var inst_16047 = (state_16163[(14)]);
var inst_16045 = (state_16163[(15)]);
var inst_16053 = cljs.core._nth.call(null,inst_16045,inst_16047);
var inst_16054 = cljs.core.nth.call(null,inst_16053,(0),null);
var inst_16055 = cljs.core.nth.call(null,inst_16053,(1),null);
var state_16163__$1 = (function (){var statearr_16235 = state_16163;
(statearr_16235[(26)] = inst_16054);

return statearr_16235;
})();
if(cljs.core.truth_(inst_16055)){
var statearr_16236_16299 = state_16163__$1;
(statearr_16236_16299[(1)] = (13));

} else {
var statearr_16237_16300 = state_16163__$1;
(statearr_16237_16300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (18))){
var inst_16088 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16238_16301 = state_16163__$1;
(statearr_16238_16301[(2)] = inst_16088);

(statearr_16238_16301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (42))){
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16163__$1,(45),dchan);
} else {
if((state_val_16164 === (37))){
var inst_16122 = (state_16163[(25)]);
var inst_16131 = (state_16163[(23)]);
var inst_16035 = (state_16163[(12)]);
var inst_16131__$1 = cljs.core.first.call(null,inst_16122);
var inst_16132 = cljs.core.async.put_BANG_.call(null,inst_16131__$1,inst_16035,done);
var state_16163__$1 = (function (){var statearr_16239 = state_16163;
(statearr_16239[(23)] = inst_16131__$1);

return statearr_16239;
})();
if(cljs.core.truth_(inst_16132)){
var statearr_16240_16302 = state_16163__$1;
(statearr_16240_16302[(1)] = (39));

} else {
var statearr_16241_16303 = state_16163__$1;
(statearr_16241_16303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (8))){
var inst_16047 = (state_16163[(14)]);
var inst_16046 = (state_16163[(17)]);
var inst_16049 = (inst_16047 < inst_16046);
var inst_16050 = inst_16049;
var state_16163__$1 = state_16163;
if(cljs.core.truth_(inst_16050)){
var statearr_16242_16304 = state_16163__$1;
(statearr_16242_16304[(1)] = (10));

} else {
var statearr_16243_16305 = state_16163__$1;
(statearr_16243_16305[(1)] = (11));

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
});})(c__7304__auto___16251,cs,m,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___16251,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16247[(0)] = state_machine__7249__auto__);

(statearr_16247[(1)] = (1));

return statearr_16247;
});
var state_machine__7249__auto____1 = (function (state_16163){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16248){if((e16248 instanceof Object)){
var ex__7252__auto__ = e16248;
var statearr_16249_16306 = state_16163;
(statearr_16249_16306[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16307 = state_16163;
state_16163 = G__16307;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16163){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16251,cs,m,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_16250 = f__7305__auto__.call(null);
(statearr_16250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16251);

return statearr_16250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16251,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16309 = {};
return obj16309;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16310){
var map__16315 = p__16310;
var map__16315__$1 = ((cljs.core.seq_QMARK_.call(null,map__16315))?cljs.core.apply.call(null,cljs.core.hash_map,map__16315):map__16315);
var opts = map__16315__$1;
var statearr_16316_16319 = state;
(statearr_16316_16319[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16315,map__16315__$1,opts){
return (function (val){
var statearr_16317_16320 = state;
(statearr_16317_16320[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16315,map__16315__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16318_16321 = state;
(statearr_16318_16321[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16310 = null;
if (arguments.length > 3) {
  p__16310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16310);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16322){
var state = cljs.core.first(arglist__16322);
arglist__16322 = cljs.core.next(arglist__16322);
var cont_block = cljs.core.first(arglist__16322);
arglist__16322 = cljs.core.next(arglist__16322);
var ports = cljs.core.first(arglist__16322);
var p__16310 = cljs.core.rest(arglist__16322);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16310);
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
if(typeof cljs.core.async.t16442 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16442 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16443){
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
this.meta16443 = meta16443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16442.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16442.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16442.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16444){
var self__ = this;
var _16444__$1 = this;
return self__.meta16443;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16444,meta16443__$1){
var self__ = this;
var _16444__$1 = this;
return (new cljs.core.async.t16442(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16443__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16442.cljs$lang$type = true;

cljs.core.async.t16442.cljs$lang$ctorStr = "cljs.core.async/t16442";

cljs.core.async.t16442.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16442");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16442 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16442(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16443){
return (new cljs.core.async.t16442(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16443));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16442(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16514){
var state_val_16515 = (state_16514[(1)]);
if((state_val_16515 === (7))){
var inst_16458 = (state_16514[(7)]);
var inst_16463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16458);
var state_16514__$1 = state_16514;
var statearr_16516_16562 = state_16514__$1;
(statearr_16516_16562[(2)] = inst_16463);

(statearr_16516_16562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (20))){
var inst_16473 = (state_16514[(8)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16514__$1,(23),out,inst_16473);
} else {
if((state_val_16515 === (1))){
var inst_16448 = (state_16514[(9)]);
var inst_16448__$1 = calc_state.call(null);
var inst_16449 = cljs.core.seq_QMARK_.call(null,inst_16448__$1);
var state_16514__$1 = (function (){var statearr_16517 = state_16514;
(statearr_16517[(9)] = inst_16448__$1);

return statearr_16517;
})();
if(inst_16449){
var statearr_16518_16563 = state_16514__$1;
(statearr_16518_16563[(1)] = (2));

} else {
var statearr_16519_16564 = state_16514__$1;
(statearr_16519_16564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (24))){
var inst_16466 = (state_16514[(10)]);
var inst_16458 = inst_16466;
var state_16514__$1 = (function (){var statearr_16520 = state_16514;
(statearr_16520[(7)] = inst_16458);

return statearr_16520;
})();
var statearr_16521_16565 = state_16514__$1;
(statearr_16521_16565[(2)] = null);

(statearr_16521_16565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (4))){
var inst_16448 = (state_16514[(9)]);
var inst_16454 = (state_16514[(2)]);
var inst_16455 = cljs.core.get.call(null,inst_16454,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16456 = cljs.core.get.call(null,inst_16454,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16457 = cljs.core.get.call(null,inst_16454,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16458 = inst_16448;
var state_16514__$1 = (function (){var statearr_16522 = state_16514;
(statearr_16522[(11)] = inst_16455);

(statearr_16522[(12)] = inst_16457);

(statearr_16522[(7)] = inst_16458);

(statearr_16522[(13)] = inst_16456);

return statearr_16522;
})();
var statearr_16523_16566 = state_16514__$1;
(statearr_16523_16566[(2)] = null);

(statearr_16523_16566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (15))){
var state_16514__$1 = state_16514;
var statearr_16524_16567 = state_16514__$1;
(statearr_16524_16567[(2)] = null);

(statearr_16524_16567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (21))){
var inst_16466 = (state_16514[(10)]);
var inst_16458 = inst_16466;
var state_16514__$1 = (function (){var statearr_16525 = state_16514;
(statearr_16525[(7)] = inst_16458);

return statearr_16525;
})();
var statearr_16526_16568 = state_16514__$1;
(statearr_16526_16568[(2)] = null);

(statearr_16526_16568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (13))){
var inst_16510 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16527_16569 = state_16514__$1;
(statearr_16527_16569[(2)] = inst_16510);

(statearr_16527_16569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (22))){
var inst_16508 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16528_16570 = state_16514__$1;
(statearr_16528_16570[(2)] = inst_16508);

(statearr_16528_16570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (6))){
var inst_16512 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16514__$1,inst_16512);
} else {
if((state_val_16515 === (25))){
var state_16514__$1 = state_16514;
var statearr_16529_16571 = state_16514__$1;
(statearr_16529_16571[(2)] = null);

(statearr_16529_16571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (17))){
var inst_16488 = (state_16514[(14)]);
var state_16514__$1 = state_16514;
var statearr_16530_16572 = state_16514__$1;
(statearr_16530_16572[(2)] = inst_16488);

(statearr_16530_16572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (3))){
var inst_16448 = (state_16514[(9)]);
var state_16514__$1 = state_16514;
var statearr_16531_16573 = state_16514__$1;
(statearr_16531_16573[(2)] = inst_16448);

(statearr_16531_16573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (12))){
var inst_16488 = (state_16514[(14)]);
var inst_16469 = (state_16514[(15)]);
var inst_16474 = (state_16514[(16)]);
var inst_16488__$1 = inst_16469.call(null,inst_16474);
var state_16514__$1 = (function (){var statearr_16532 = state_16514;
(statearr_16532[(14)] = inst_16488__$1);

return statearr_16532;
})();
if(cljs.core.truth_(inst_16488__$1)){
var statearr_16533_16574 = state_16514__$1;
(statearr_16533_16574[(1)] = (17));

} else {
var statearr_16534_16575 = state_16514__$1;
(statearr_16534_16575[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (2))){
var inst_16448 = (state_16514[(9)]);
var inst_16451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16448);
var state_16514__$1 = state_16514;
var statearr_16535_16576 = state_16514__$1;
(statearr_16535_16576[(2)] = inst_16451);

(statearr_16535_16576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (23))){
var inst_16499 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16499)){
var statearr_16536_16577 = state_16514__$1;
(statearr_16536_16577[(1)] = (24));

} else {
var statearr_16537_16578 = state_16514__$1;
(statearr_16537_16578[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (19))){
var inst_16496 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16496)){
var statearr_16538_16579 = state_16514__$1;
(statearr_16538_16579[(1)] = (20));

} else {
var statearr_16539_16580 = state_16514__$1;
(statearr_16539_16580[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (11))){
var inst_16473 = (state_16514[(8)]);
var inst_16479 = (inst_16473 == null);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16479)){
var statearr_16540_16581 = state_16514__$1;
(statearr_16540_16581[(1)] = (14));

} else {
var statearr_16541_16582 = state_16514__$1;
(statearr_16541_16582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (9))){
var inst_16466 = (state_16514[(10)]);
var inst_16466__$1 = (state_16514[(2)]);
var inst_16467 = cljs.core.get.call(null,inst_16466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16468 = cljs.core.get.call(null,inst_16466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16469 = cljs.core.get.call(null,inst_16466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16514__$1 = (function (){var statearr_16542 = state_16514;
(statearr_16542[(15)] = inst_16469);

(statearr_16542[(10)] = inst_16466__$1);

(statearr_16542[(17)] = inst_16468);

return statearr_16542;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16514__$1,(10),inst_16467);
} else {
if((state_val_16515 === (5))){
var inst_16458 = (state_16514[(7)]);
var inst_16461 = cljs.core.seq_QMARK_.call(null,inst_16458);
var state_16514__$1 = state_16514;
if(inst_16461){
var statearr_16543_16583 = state_16514__$1;
(statearr_16543_16583[(1)] = (7));

} else {
var statearr_16544_16584 = state_16514__$1;
(statearr_16544_16584[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (14))){
var inst_16474 = (state_16514[(16)]);
var inst_16481 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16474);
var state_16514__$1 = state_16514;
var statearr_16545_16585 = state_16514__$1;
(statearr_16545_16585[(2)] = inst_16481);

(statearr_16545_16585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (26))){
var inst_16504 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16546_16586 = state_16514__$1;
(statearr_16546_16586[(2)] = inst_16504);

(statearr_16546_16586[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (16))){
var inst_16484 = (state_16514[(2)]);
var inst_16485 = calc_state.call(null);
var inst_16458 = inst_16485;
var state_16514__$1 = (function (){var statearr_16547 = state_16514;
(statearr_16547[(7)] = inst_16458);

(statearr_16547[(18)] = inst_16484);

return statearr_16547;
})();
var statearr_16548_16587 = state_16514__$1;
(statearr_16548_16587[(2)] = null);

(statearr_16548_16587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (10))){
var inst_16474 = (state_16514[(16)]);
var inst_16473 = (state_16514[(8)]);
var inst_16472 = (state_16514[(2)]);
var inst_16473__$1 = cljs.core.nth.call(null,inst_16472,(0),null);
var inst_16474__$1 = cljs.core.nth.call(null,inst_16472,(1),null);
var inst_16475 = (inst_16473__$1 == null);
var inst_16476 = cljs.core._EQ_.call(null,inst_16474__$1,change);
var inst_16477 = (inst_16475) || (inst_16476);
var state_16514__$1 = (function (){var statearr_16549 = state_16514;
(statearr_16549[(16)] = inst_16474__$1);

(statearr_16549[(8)] = inst_16473__$1);

return statearr_16549;
})();
if(cljs.core.truth_(inst_16477)){
var statearr_16550_16588 = state_16514__$1;
(statearr_16550_16588[(1)] = (11));

} else {
var statearr_16551_16589 = state_16514__$1;
(statearr_16551_16589[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (18))){
var inst_16469 = (state_16514[(15)]);
var inst_16474 = (state_16514[(16)]);
var inst_16468 = (state_16514[(17)]);
var inst_16491 = cljs.core.empty_QMARK_.call(null,inst_16469);
var inst_16492 = inst_16468.call(null,inst_16474);
var inst_16493 = cljs.core.not.call(null,inst_16492);
var inst_16494 = (inst_16491) && (inst_16493);
var state_16514__$1 = state_16514;
var statearr_16552_16590 = state_16514__$1;
(statearr_16552_16590[(2)] = inst_16494);

(statearr_16552_16590[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (8))){
var inst_16458 = (state_16514[(7)]);
var state_16514__$1 = state_16514;
var statearr_16553_16591 = state_16514__$1;
(statearr_16553_16591[(2)] = inst_16458);

(statearr_16553_16591[(1)] = (9));


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
});})(c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7248__auto__,c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = state_machine__7249__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var state_machine__7249__auto____1 = (function (state_16514){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16558){if((e16558 instanceof Object)){
var ex__7252__auto__ = e16558;
var statearr_16559_16592 = state_16514;
(statearr_16559_16592[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16593 = state_16514;
state_16514 = G__16593;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16514){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7306__auto__ = (function (){var statearr_16560 = f__7305__auto__.call(null);
(statearr_16560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16561);

return statearr_16560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16595 = {};
return obj16595;
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
return (function (p1__16596_SHARP_){
if(cljs.core.truth_(p1__16596_SHARP_.call(null,topic))){
return p1__16596_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16596_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16719 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16719 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16720){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16720 = meta16720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16719.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16719.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16719.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16719.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16719.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16719.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16721){
var self__ = this;
var _16721__$1 = this;
return self__.meta16720;
});})(mults,ensure_mult))
;

cljs.core.async.t16719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16721,meta16720__$1){
var self__ = this;
var _16721__$1 = this;
return (new cljs.core.async.t16719(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16720__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16719.cljs$lang$type = true;

cljs.core.async.t16719.cljs$lang$ctorStr = "cljs.core.async/t16719";

cljs.core.async.t16719.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t16719");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16719 = ((function (mults,ensure_mult){
return (function __GT_t16719(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16720){
return (new cljs.core.async.t16719(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16720));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16719(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7304__auto___16841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___16841,mults,ensure_mult,p){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___16841,mults,ensure_mult,p){
return (function (state_16793){
var state_val_16794 = (state_16793[(1)]);
if((state_val_16794 === (7))){
var inst_16789 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16795_16842 = state_16793__$1;
(statearr_16795_16842[(2)] = inst_16789);

(statearr_16795_16842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (20))){
var state_16793__$1 = state_16793;
var statearr_16796_16843 = state_16793__$1;
(statearr_16796_16843[(2)] = null);

(statearr_16796_16843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (1))){
var state_16793__$1 = state_16793;
var statearr_16797_16844 = state_16793__$1;
(statearr_16797_16844[(2)] = null);

(statearr_16797_16844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (24))){
var inst_16772 = (state_16793[(7)]);
var inst_16781 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16772);
var state_16793__$1 = state_16793;
var statearr_16798_16845 = state_16793__$1;
(statearr_16798_16845[(2)] = inst_16781);

(statearr_16798_16845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (4))){
var inst_16724 = (state_16793[(8)]);
var inst_16724__$1 = (state_16793[(2)]);
var inst_16725 = (inst_16724__$1 == null);
var state_16793__$1 = (function (){var statearr_16799 = state_16793;
(statearr_16799[(8)] = inst_16724__$1);

return statearr_16799;
})();
if(cljs.core.truth_(inst_16725)){
var statearr_16800_16846 = state_16793__$1;
(statearr_16800_16846[(1)] = (5));

} else {
var statearr_16801_16847 = state_16793__$1;
(statearr_16801_16847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (15))){
var inst_16766 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16802_16848 = state_16793__$1;
(statearr_16802_16848[(2)] = inst_16766);

(statearr_16802_16848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (21))){
var inst_16786 = (state_16793[(2)]);
var state_16793__$1 = (function (){var statearr_16803 = state_16793;
(statearr_16803[(9)] = inst_16786);

return statearr_16803;
})();
var statearr_16804_16849 = state_16793__$1;
(statearr_16804_16849[(2)] = null);

(statearr_16804_16849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (13))){
var inst_16748 = (state_16793[(10)]);
var inst_16750 = cljs.core.chunked_seq_QMARK_.call(null,inst_16748);
var state_16793__$1 = state_16793;
if(inst_16750){
var statearr_16805_16850 = state_16793__$1;
(statearr_16805_16850[(1)] = (16));

} else {
var statearr_16806_16851 = state_16793__$1;
(statearr_16806_16851[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (22))){
var inst_16778 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
if(cljs.core.truth_(inst_16778)){
var statearr_16807_16852 = state_16793__$1;
(statearr_16807_16852[(1)] = (23));

} else {
var statearr_16808_16853 = state_16793__$1;
(statearr_16808_16853[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (6))){
var inst_16774 = (state_16793[(11)]);
var inst_16772 = (state_16793[(7)]);
var inst_16724 = (state_16793[(8)]);
var inst_16772__$1 = topic_fn.call(null,inst_16724);
var inst_16773 = cljs.core.deref.call(null,mults);
var inst_16774__$1 = cljs.core.get.call(null,inst_16773,inst_16772__$1);
var state_16793__$1 = (function (){var statearr_16809 = state_16793;
(statearr_16809[(11)] = inst_16774__$1);

(statearr_16809[(7)] = inst_16772__$1);

return statearr_16809;
})();
if(cljs.core.truth_(inst_16774__$1)){
var statearr_16810_16854 = state_16793__$1;
(statearr_16810_16854[(1)] = (19));

} else {
var statearr_16811_16855 = state_16793__$1;
(statearr_16811_16855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (25))){
var inst_16783 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16812_16856 = state_16793__$1;
(statearr_16812_16856[(2)] = inst_16783);

(statearr_16812_16856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (17))){
var inst_16748 = (state_16793[(10)]);
var inst_16757 = cljs.core.first.call(null,inst_16748);
var inst_16758 = cljs.core.async.muxch_STAR_.call(null,inst_16757);
var inst_16759 = cljs.core.async.close_BANG_.call(null,inst_16758);
var inst_16760 = cljs.core.next.call(null,inst_16748);
var inst_16734 = inst_16760;
var inst_16735 = null;
var inst_16736 = (0);
var inst_16737 = (0);
var state_16793__$1 = (function (){var statearr_16813 = state_16793;
(statearr_16813[(12)] = inst_16737);

(statearr_16813[(13)] = inst_16759);

(statearr_16813[(14)] = inst_16735);

(statearr_16813[(15)] = inst_16734);

(statearr_16813[(16)] = inst_16736);

return statearr_16813;
})();
var statearr_16814_16857 = state_16793__$1;
(statearr_16814_16857[(2)] = null);

(statearr_16814_16857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (3))){
var inst_16791 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16793__$1,inst_16791);
} else {
if((state_val_16794 === (12))){
var inst_16768 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16815_16858 = state_16793__$1;
(statearr_16815_16858[(2)] = inst_16768);

(statearr_16815_16858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (2))){
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16793__$1,(4),ch);
} else {
if((state_val_16794 === (23))){
var state_16793__$1 = state_16793;
var statearr_16816_16859 = state_16793__$1;
(statearr_16816_16859[(2)] = null);

(statearr_16816_16859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (19))){
var inst_16774 = (state_16793[(11)]);
var inst_16724 = (state_16793[(8)]);
var inst_16776 = cljs.core.async.muxch_STAR_.call(null,inst_16774);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16793__$1,(22),inst_16776,inst_16724);
} else {
if((state_val_16794 === (11))){
var inst_16734 = (state_16793[(15)]);
var inst_16748 = (state_16793[(10)]);
var inst_16748__$1 = cljs.core.seq.call(null,inst_16734);
var state_16793__$1 = (function (){var statearr_16817 = state_16793;
(statearr_16817[(10)] = inst_16748__$1);

return statearr_16817;
})();
if(inst_16748__$1){
var statearr_16818_16860 = state_16793__$1;
(statearr_16818_16860[(1)] = (13));

} else {
var statearr_16819_16861 = state_16793__$1;
(statearr_16819_16861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (9))){
var inst_16770 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16820_16862 = state_16793__$1;
(statearr_16820_16862[(2)] = inst_16770);

(statearr_16820_16862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (5))){
var inst_16731 = cljs.core.deref.call(null,mults);
var inst_16732 = cljs.core.vals.call(null,inst_16731);
var inst_16733 = cljs.core.seq.call(null,inst_16732);
var inst_16734 = inst_16733;
var inst_16735 = null;
var inst_16736 = (0);
var inst_16737 = (0);
var state_16793__$1 = (function (){var statearr_16821 = state_16793;
(statearr_16821[(12)] = inst_16737);

(statearr_16821[(14)] = inst_16735);

(statearr_16821[(15)] = inst_16734);

(statearr_16821[(16)] = inst_16736);

return statearr_16821;
})();
var statearr_16822_16863 = state_16793__$1;
(statearr_16822_16863[(2)] = null);

(statearr_16822_16863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (14))){
var state_16793__$1 = state_16793;
var statearr_16826_16864 = state_16793__$1;
(statearr_16826_16864[(2)] = null);

(statearr_16826_16864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (16))){
var inst_16748 = (state_16793[(10)]);
var inst_16752 = cljs.core.chunk_first.call(null,inst_16748);
var inst_16753 = cljs.core.chunk_rest.call(null,inst_16748);
var inst_16754 = cljs.core.count.call(null,inst_16752);
var inst_16734 = inst_16753;
var inst_16735 = inst_16752;
var inst_16736 = inst_16754;
var inst_16737 = (0);
var state_16793__$1 = (function (){var statearr_16827 = state_16793;
(statearr_16827[(12)] = inst_16737);

(statearr_16827[(14)] = inst_16735);

(statearr_16827[(15)] = inst_16734);

(statearr_16827[(16)] = inst_16736);

return statearr_16827;
})();
var statearr_16828_16865 = state_16793__$1;
(statearr_16828_16865[(2)] = null);

(statearr_16828_16865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (10))){
var inst_16737 = (state_16793[(12)]);
var inst_16735 = (state_16793[(14)]);
var inst_16734 = (state_16793[(15)]);
var inst_16736 = (state_16793[(16)]);
var inst_16742 = cljs.core._nth.call(null,inst_16735,inst_16737);
var inst_16743 = cljs.core.async.muxch_STAR_.call(null,inst_16742);
var inst_16744 = cljs.core.async.close_BANG_.call(null,inst_16743);
var inst_16745 = (inst_16737 + (1));
var tmp16823 = inst_16735;
var tmp16824 = inst_16734;
var tmp16825 = inst_16736;
var inst_16734__$1 = tmp16824;
var inst_16735__$1 = tmp16823;
var inst_16736__$1 = tmp16825;
var inst_16737__$1 = inst_16745;
var state_16793__$1 = (function (){var statearr_16829 = state_16793;
(statearr_16829[(17)] = inst_16744);

(statearr_16829[(12)] = inst_16737__$1);

(statearr_16829[(14)] = inst_16735__$1);

(statearr_16829[(15)] = inst_16734__$1);

(statearr_16829[(16)] = inst_16736__$1);

return statearr_16829;
})();
var statearr_16830_16866 = state_16793__$1;
(statearr_16830_16866[(2)] = null);

(statearr_16830_16866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (18))){
var inst_16763 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16831_16867 = state_16793__$1;
(statearr_16831_16867[(2)] = inst_16763);

(statearr_16831_16867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16794 === (8))){
var inst_16737 = (state_16793[(12)]);
var inst_16736 = (state_16793[(16)]);
var inst_16739 = (inst_16737 < inst_16736);
var inst_16740 = inst_16739;
var state_16793__$1 = state_16793;
if(cljs.core.truth_(inst_16740)){
var statearr_16832_16868 = state_16793__$1;
(statearr_16832_16868[(1)] = (10));

} else {
var statearr_16833_16869 = state_16793__$1;
(statearr_16833_16869[(1)] = (11));

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
});})(c__7304__auto___16841,mults,ensure_mult,p))
;
return ((function (switch__7248__auto__,c__7304__auto___16841,mults,ensure_mult,p){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_16837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16837[(0)] = state_machine__7249__auto__);

(statearr_16837[(1)] = (1));

return statearr_16837;
});
var state_machine__7249__auto____1 = (function (state_16793){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e16838){if((e16838 instanceof Object)){
var ex__7252__auto__ = e16838;
var statearr_16839_16870 = state_16793;
(statearr_16839_16870[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16871 = state_16793;
state_16793 = G__16871;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16793){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___16841,mults,ensure_mult,p))
})();
var state__7306__auto__ = (function (){var statearr_16840 = f__7305__auto__.call(null);
(statearr_16840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___16841);

return statearr_16840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___16841,mults,ensure_mult,p))
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
var c__7304__auto___17008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (7))){
var state_16978__$1 = state_16978;
var statearr_16980_17009 = state_16978__$1;
(statearr_16980_17009[(2)] = null);

(statearr_16980_17009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (1))){
var state_16978__$1 = state_16978;
var statearr_16981_17010 = state_16978__$1;
(statearr_16981_17010[(2)] = null);

(statearr_16981_17010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (4))){
var inst_16942 = (state_16978[(7)]);
var inst_16944 = (inst_16942 < cnt);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16944)){
var statearr_16982_17011 = state_16978__$1;
(statearr_16982_17011[(1)] = (6));

} else {
var statearr_16983_17012 = state_16978__$1;
(statearr_16983_17012[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (15))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16984_17013 = state_16978__$1;
(statearr_16984_17013[(2)] = inst_16974);

(statearr_16984_17013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (13))){
var inst_16967 = cljs.core.async.close_BANG_.call(null,out);
var state_16978__$1 = state_16978;
var statearr_16985_17014 = state_16978__$1;
(statearr_16985_17014[(2)] = inst_16967);

(statearr_16985_17014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (6))){
var state_16978__$1 = state_16978;
var statearr_16986_17015 = state_16978__$1;
(statearr_16986_17015[(2)] = null);

(statearr_16986_17015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (12))){
var inst_16964 = (state_16978[(8)]);
var inst_16964__$1 = (state_16978[(2)]);
var inst_16965 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16964__$1);
var state_16978__$1 = (function (){var statearr_16987 = state_16978;
(statearr_16987[(8)] = inst_16964__$1);

return statearr_16987;
})();
if(cljs.core.truth_(inst_16965)){
var statearr_16988_17016 = state_16978__$1;
(statearr_16988_17016[(1)] = (13));

} else {
var statearr_16989_17017 = state_16978__$1;
(statearr_16989_17017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (2))){
var inst_16941 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16942 = (0);
var state_16978__$1 = (function (){var statearr_16990 = state_16978;
(statearr_16990[(7)] = inst_16942);

(statearr_16990[(9)] = inst_16941);

return statearr_16990;
})();
var statearr_16991_17018 = state_16978__$1;
(statearr_16991_17018[(2)] = null);

(statearr_16991_17018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (11))){
var inst_16942 = (state_16978[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16978,(10),Object,null,(9));
var inst_16951 = chs__$1.call(null,inst_16942);
var inst_16952 = done.call(null,inst_16942);
var inst_16953 = cljs.core.async.take_BANG_.call(null,inst_16951,inst_16952);
var state_16978__$1 = state_16978;
var statearr_16992_17019 = state_16978__$1;
(statearr_16992_17019[(2)] = inst_16953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (9))){
var inst_16942 = (state_16978[(7)]);
var inst_16955 = (state_16978[(2)]);
var inst_16956 = (inst_16942 + (1));
var inst_16942__$1 = inst_16956;
var state_16978__$1 = (function (){var statearr_16993 = state_16978;
(statearr_16993[(10)] = inst_16955);

(statearr_16993[(7)] = inst_16942__$1);

return statearr_16993;
})();
var statearr_16994_17020 = state_16978__$1;
(statearr_16994_17020[(2)] = null);

(statearr_16994_17020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (5))){
var inst_16962 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16995 = state_16978;
(statearr_16995[(11)] = inst_16962);

return statearr_16995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(12),dchan);
} else {
if((state_val_16979 === (14))){
var inst_16964 = (state_16978[(8)]);
var inst_16969 = cljs.core.apply.call(null,f,inst_16964);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16978__$1,(16),out,inst_16969);
} else {
if((state_val_16979 === (16))){
var inst_16971 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16996 = state_16978;
(statearr_16996[(12)] = inst_16971);

return statearr_16996;
})();
var statearr_16997_17021 = state_16978__$1;
(statearr_16997_17021[(2)] = null);

(statearr_16997_17021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (10))){
var inst_16946 = (state_16978[(2)]);
var inst_16947 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16978__$1 = (function (){var statearr_16998 = state_16978;
(statearr_16998[(13)] = inst_16946);

return statearr_16998;
})();
var statearr_16999_17022 = state_16978__$1;
(statearr_16999_17022[(2)] = inst_16947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16960 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17000_17023 = state_16978__$1;
(statearr_17000_17023[(2)] = inst_16960);

(statearr_17000_17023[(1)] = (5));


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
});})(c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7248__auto__,c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17004[(0)] = state_machine__7249__auto__);

(statearr_17004[(1)] = (1));

return statearr_17004;
});
var state_machine__7249__auto____1 = (function (state_16978){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_16978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17005){if((e17005 instanceof Object)){
var ex__7252__auto__ = e17005;
var statearr_17006_17024 = state_16978;
(statearr_17006_17024[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17025 = state_16978;
state_16978 = G__17025;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7306__auto__ = (function (){var statearr_17007 = f__7305__auto__.call(null);
(statearr_17007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17008);

return statearr_17007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17008,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7304__auto___17133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17133,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17133,out){
return (function (state_17109){
var state_val_17110 = (state_17109[(1)]);
if((state_val_17110 === (7))){
var inst_17089 = (state_17109[(7)]);
var inst_17088 = (state_17109[(8)]);
var inst_17088__$1 = (state_17109[(2)]);
var inst_17089__$1 = cljs.core.nth.call(null,inst_17088__$1,(0),null);
var inst_17090 = cljs.core.nth.call(null,inst_17088__$1,(1),null);
var inst_17091 = (inst_17089__$1 == null);
var state_17109__$1 = (function (){var statearr_17111 = state_17109;
(statearr_17111[(7)] = inst_17089__$1);

(statearr_17111[(8)] = inst_17088__$1);

(statearr_17111[(9)] = inst_17090);

return statearr_17111;
})();
if(cljs.core.truth_(inst_17091)){
var statearr_17112_17134 = state_17109__$1;
(statearr_17112_17134[(1)] = (8));

} else {
var statearr_17113_17135 = state_17109__$1;
(statearr_17113_17135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (1))){
var inst_17080 = cljs.core.vec.call(null,chs);
var inst_17081 = inst_17080;
var state_17109__$1 = (function (){var statearr_17114 = state_17109;
(statearr_17114[(10)] = inst_17081);

return statearr_17114;
})();
var statearr_17115_17136 = state_17109__$1;
(statearr_17115_17136[(2)] = null);

(statearr_17115_17136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (4))){
var inst_17081 = (state_17109[(10)]);
var state_17109__$1 = state_17109;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17109__$1,(7),inst_17081);
} else {
if((state_val_17110 === (6))){
var inst_17105 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17116_17137 = state_17109__$1;
(statearr_17116_17137[(2)] = inst_17105);

(statearr_17116_17137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (3))){
var inst_17107 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17109__$1,inst_17107);
} else {
if((state_val_17110 === (2))){
var inst_17081 = (state_17109[(10)]);
var inst_17083 = cljs.core.count.call(null,inst_17081);
var inst_17084 = (inst_17083 > (0));
var state_17109__$1 = state_17109;
if(cljs.core.truth_(inst_17084)){
var statearr_17118_17138 = state_17109__$1;
(statearr_17118_17138[(1)] = (4));

} else {
var statearr_17119_17139 = state_17109__$1;
(statearr_17119_17139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (11))){
var inst_17081 = (state_17109[(10)]);
var inst_17098 = (state_17109[(2)]);
var tmp17117 = inst_17081;
var inst_17081__$1 = tmp17117;
var state_17109__$1 = (function (){var statearr_17120 = state_17109;
(statearr_17120[(11)] = inst_17098);

(statearr_17120[(10)] = inst_17081__$1);

return statearr_17120;
})();
var statearr_17121_17140 = state_17109__$1;
(statearr_17121_17140[(2)] = null);

(statearr_17121_17140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (9))){
var inst_17089 = (state_17109[(7)]);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17109__$1,(11),out,inst_17089);
} else {
if((state_val_17110 === (5))){
var inst_17103 = cljs.core.async.close_BANG_.call(null,out);
var state_17109__$1 = state_17109;
var statearr_17122_17141 = state_17109__$1;
(statearr_17122_17141[(2)] = inst_17103);

(statearr_17122_17141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (10))){
var inst_17101 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17123_17142 = state_17109__$1;
(statearr_17123_17142[(2)] = inst_17101);

(statearr_17123_17142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (8))){
var inst_17089 = (state_17109[(7)]);
var inst_17088 = (state_17109[(8)]);
var inst_17081 = (state_17109[(10)]);
var inst_17090 = (state_17109[(9)]);
var inst_17093 = (function (){var c = inst_17090;
var v = inst_17089;
var vec__17086 = inst_17088;
var cs = inst_17081;
return ((function (c,v,vec__17086,cs,inst_17089,inst_17088,inst_17081,inst_17090,state_val_17110,c__7304__auto___17133,out){
return (function (p1__17026_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17026_SHARP_);
});
;})(c,v,vec__17086,cs,inst_17089,inst_17088,inst_17081,inst_17090,state_val_17110,c__7304__auto___17133,out))
})();
var inst_17094 = cljs.core.filterv.call(null,inst_17093,inst_17081);
var inst_17081__$1 = inst_17094;
var state_17109__$1 = (function (){var statearr_17124 = state_17109;
(statearr_17124[(10)] = inst_17081__$1);

return statearr_17124;
})();
var statearr_17125_17143 = state_17109__$1;
(statearr_17125_17143[(2)] = null);

(statearr_17125_17143[(1)] = (2));


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
});})(c__7304__auto___17133,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17133,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17129[(0)] = state_machine__7249__auto__);

(statearr_17129[(1)] = (1));

return statearr_17129;
});
var state_machine__7249__auto____1 = (function (state_17109){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17130){if((e17130 instanceof Object)){
var ex__7252__auto__ = e17130;
var statearr_17131_17144 = state_17109;
(statearr_17131_17144[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17145 = state_17109;
state_17109 = G__17145;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17109){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17133,out))
})();
var state__7306__auto__ = (function (){var statearr_17132 = f__7305__auto__.call(null);
(statearr_17132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17133);

return statearr_17132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17133,out))
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
var c__7304__auto___17238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17238,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17238,out){
return (function (state_17215){
var state_val_17216 = (state_17215[(1)]);
if((state_val_17216 === (7))){
var inst_17197 = (state_17215[(7)]);
var inst_17197__$1 = (state_17215[(2)]);
var inst_17198 = (inst_17197__$1 == null);
var inst_17199 = cljs.core.not.call(null,inst_17198);
var state_17215__$1 = (function (){var statearr_17217 = state_17215;
(statearr_17217[(7)] = inst_17197__$1);

return statearr_17217;
})();
if(inst_17199){
var statearr_17218_17239 = state_17215__$1;
(statearr_17218_17239[(1)] = (8));

} else {
var statearr_17219_17240 = state_17215__$1;
(statearr_17219_17240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (1))){
var inst_17192 = (0);
var state_17215__$1 = (function (){var statearr_17220 = state_17215;
(statearr_17220[(8)] = inst_17192);

return statearr_17220;
})();
var statearr_17221_17241 = state_17215__$1;
(statearr_17221_17241[(2)] = null);

(statearr_17221_17241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (4))){
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17215__$1,(7),ch);
} else {
if((state_val_17216 === (6))){
var inst_17210 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
var statearr_17222_17242 = state_17215__$1;
(statearr_17222_17242[(2)] = inst_17210);

(statearr_17222_17242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (3))){
var inst_17212 = (state_17215[(2)]);
var inst_17213 = cljs.core.async.close_BANG_.call(null,out);
var state_17215__$1 = (function (){var statearr_17223 = state_17215;
(statearr_17223[(9)] = inst_17212);

return statearr_17223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17215__$1,inst_17213);
} else {
if((state_val_17216 === (2))){
var inst_17192 = (state_17215[(8)]);
var inst_17194 = (inst_17192 < n);
var state_17215__$1 = state_17215;
if(cljs.core.truth_(inst_17194)){
var statearr_17224_17243 = state_17215__$1;
(statearr_17224_17243[(1)] = (4));

} else {
var statearr_17225_17244 = state_17215__$1;
(statearr_17225_17244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (11))){
var inst_17192 = (state_17215[(8)]);
var inst_17202 = (state_17215[(2)]);
var inst_17203 = (inst_17192 + (1));
var inst_17192__$1 = inst_17203;
var state_17215__$1 = (function (){var statearr_17226 = state_17215;
(statearr_17226[(10)] = inst_17202);

(statearr_17226[(8)] = inst_17192__$1);

return statearr_17226;
})();
var statearr_17227_17245 = state_17215__$1;
(statearr_17227_17245[(2)] = null);

(statearr_17227_17245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (9))){
var state_17215__$1 = state_17215;
var statearr_17228_17246 = state_17215__$1;
(statearr_17228_17246[(2)] = null);

(statearr_17228_17246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (5))){
var state_17215__$1 = state_17215;
var statearr_17229_17247 = state_17215__$1;
(statearr_17229_17247[(2)] = null);

(statearr_17229_17247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (10))){
var inst_17207 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
var statearr_17230_17248 = state_17215__$1;
(statearr_17230_17248[(2)] = inst_17207);

(statearr_17230_17248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17216 === (8))){
var inst_17197 = (state_17215[(7)]);
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17215__$1,(11),out,inst_17197);
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
});})(c__7304__auto___17238,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17238,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17234[(0)] = state_machine__7249__auto__);

(statearr_17234[(1)] = (1));

return statearr_17234;
});
var state_machine__7249__auto____1 = (function (state_17215){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17235){if((e17235 instanceof Object)){
var ex__7252__auto__ = e17235;
var statearr_17236_17249 = state_17215;
(statearr_17236_17249[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17250 = state_17215;
state_17215 = G__17250;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17215){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17238,out))
})();
var state__7306__auto__ = (function (){var statearr_17237 = f__7305__auto__.call(null);
(statearr_17237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17238);

return statearr_17237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17238,out))
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
if(typeof cljs.core.async.t17258 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17258 = (function (ch,f,map_LT_,meta17259){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17259 = meta17259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17261 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17261 = (function (fn1,_,meta17259,map_LT_,f,ch,meta17262){
this.fn1 = fn1;
this._ = _;
this.meta17259 = meta17259;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17262 = meta17262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17261.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17251_SHARP_){
return f1.call(null,(((p1__17251_SHARP_ == null))?null:self__.f.call(null,p1__17251_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17263){
var self__ = this;
var _17263__$1 = this;
return self__.meta17262;
});})(___$1))
;

cljs.core.async.t17261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17263,meta17262__$1){
var self__ = this;
var _17263__$1 = this;
return (new cljs.core.async.t17261(self__.fn1,self__._,self__.meta17259,self__.map_LT_,self__.f,self__.ch,meta17262__$1));
});})(___$1))
;

cljs.core.async.t17261.cljs$lang$type = true;

cljs.core.async.t17261.cljs$lang$ctorStr = "cljs.core.async/t17261";

cljs.core.async.t17261.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17261");
});})(___$1))
;

cljs.core.async.__GT_t17261 = ((function (___$1){
return (function __GT_t17261(fn1__$1,___$2,meta17259__$1,map_LT___$1,f__$1,ch__$1,meta17262){
return (new cljs.core.async.t17261(fn1__$1,___$2,meta17259__$1,map_LT___$1,f__$1,ch__$1,meta17262));
});})(___$1))
;

}

return (new cljs.core.async.t17261(fn1,___$1,self__.meta17259,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17260){
var self__ = this;
var _17260__$1 = this;
return self__.meta17259;
});

cljs.core.async.t17258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17260,meta17259__$1){
var self__ = this;
var _17260__$1 = this;
return (new cljs.core.async.t17258(self__.ch,self__.f,self__.map_LT_,meta17259__$1));
});

cljs.core.async.t17258.cljs$lang$type = true;

cljs.core.async.t17258.cljs$lang$ctorStr = "cljs.core.async/t17258";

cljs.core.async.t17258.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17258");
});

cljs.core.async.__GT_t17258 = (function __GT_t17258(ch__$1,f__$1,map_LT___$1,meta17259){
return (new cljs.core.async.t17258(ch__$1,f__$1,map_LT___$1,meta17259));
});

}

return (new cljs.core.async.t17258(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17267 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17267 = (function (ch,f,map_GT_,meta17268){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17268 = meta17268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17269){
var self__ = this;
var _17269__$1 = this;
return self__.meta17268;
});

cljs.core.async.t17267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17269,meta17268__$1){
var self__ = this;
var _17269__$1 = this;
return (new cljs.core.async.t17267(self__.ch,self__.f,self__.map_GT_,meta17268__$1));
});

cljs.core.async.t17267.cljs$lang$type = true;

cljs.core.async.t17267.cljs$lang$ctorStr = "cljs.core.async/t17267";

cljs.core.async.t17267.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17267");
});

cljs.core.async.__GT_t17267 = (function __GT_t17267(ch__$1,f__$1,map_GT___$1,meta17268){
return (new cljs.core.async.t17267(ch__$1,f__$1,map_GT___$1,meta17268));
});

}

return (new cljs.core.async.t17267(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17273 = (function (ch,p,filter_GT_,meta17274){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17274 = meta17274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17275){
var self__ = this;
var _17275__$1 = this;
return self__.meta17274;
});

cljs.core.async.t17273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17275,meta17274__$1){
var self__ = this;
var _17275__$1 = this;
return (new cljs.core.async.t17273(self__.ch,self__.p,self__.filter_GT_,meta17274__$1));
});

cljs.core.async.t17273.cljs$lang$type = true;

cljs.core.async.t17273.cljs$lang$ctorStr = "cljs.core.async/t17273";

cljs.core.async.t17273.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t17273");
});

cljs.core.async.__GT_t17273 = (function __GT_t17273(ch__$1,p__$1,filter_GT___$1,meta17274){
return (new cljs.core.async.t17273(ch__$1,p__$1,filter_GT___$1,meta17274));
});

}

return (new cljs.core.async.t17273(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7304__auto___17358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17358,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17358,out){
return (function (state_17337){
var state_val_17338 = (state_17337[(1)]);
if((state_val_17338 === (7))){
var inst_17333 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17339_17359 = state_17337__$1;
(statearr_17339_17359[(2)] = inst_17333);

(statearr_17339_17359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (1))){
var state_17337__$1 = state_17337;
var statearr_17340_17360 = state_17337__$1;
(statearr_17340_17360[(2)] = null);

(statearr_17340_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (4))){
var inst_17319 = (state_17337[(7)]);
var inst_17319__$1 = (state_17337[(2)]);
var inst_17320 = (inst_17319__$1 == null);
var state_17337__$1 = (function (){var statearr_17341 = state_17337;
(statearr_17341[(7)] = inst_17319__$1);

return statearr_17341;
})();
if(cljs.core.truth_(inst_17320)){
var statearr_17342_17361 = state_17337__$1;
(statearr_17342_17361[(1)] = (5));

} else {
var statearr_17343_17362 = state_17337__$1;
(statearr_17343_17362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (6))){
var inst_17319 = (state_17337[(7)]);
var inst_17324 = p.call(null,inst_17319);
var state_17337__$1 = state_17337;
if(cljs.core.truth_(inst_17324)){
var statearr_17344_17363 = state_17337__$1;
(statearr_17344_17363[(1)] = (8));

} else {
var statearr_17345_17364 = state_17337__$1;
(statearr_17345_17364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (3))){
var inst_17335 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17337__$1,inst_17335);
} else {
if((state_val_17338 === (2))){
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17337__$1,(4),ch);
} else {
if((state_val_17338 === (11))){
var inst_17327 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17346_17365 = state_17337__$1;
(statearr_17346_17365[(2)] = inst_17327);

(statearr_17346_17365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (9))){
var state_17337__$1 = state_17337;
var statearr_17347_17366 = state_17337__$1;
(statearr_17347_17366[(2)] = null);

(statearr_17347_17366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (5))){
var inst_17322 = cljs.core.async.close_BANG_.call(null,out);
var state_17337__$1 = state_17337;
var statearr_17348_17367 = state_17337__$1;
(statearr_17348_17367[(2)] = inst_17322);

(statearr_17348_17367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (10))){
var inst_17330 = (state_17337[(2)]);
var state_17337__$1 = (function (){var statearr_17349 = state_17337;
(statearr_17349[(8)] = inst_17330);

return statearr_17349;
})();
var statearr_17350_17368 = state_17337__$1;
(statearr_17350_17368[(2)] = null);

(statearr_17350_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17338 === (8))){
var inst_17319 = (state_17337[(7)]);
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17337__$1,(11),out,inst_17319);
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
});})(c__7304__auto___17358,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17358,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17354 = [null,null,null,null,null,null,null,null,null];
(statearr_17354[(0)] = state_machine__7249__auto__);

(statearr_17354[(1)] = (1));

return statearr_17354;
});
var state_machine__7249__auto____1 = (function (state_17337){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17355){if((e17355 instanceof Object)){
var ex__7252__auto__ = e17355;
var statearr_17356_17369 = state_17337;
(statearr_17356_17369[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17370 = state_17337;
state_17337 = G__17370;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17337){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17358,out))
})();
var state__7306__auto__ = (function (){var statearr_17357 = f__7305__auto__.call(null);
(statearr_17357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17358);

return statearr_17357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17358,out))
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
return (function (state_17536){
var state_val_17537 = (state_17536[(1)]);
if((state_val_17537 === (7))){
var inst_17532 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17538_17579 = state_17536__$1;
(statearr_17538_17579[(2)] = inst_17532);

(statearr_17538_17579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (20))){
var inst_17502 = (state_17536[(7)]);
var inst_17513 = (state_17536[(2)]);
var inst_17514 = cljs.core.next.call(null,inst_17502);
var inst_17488 = inst_17514;
var inst_17489 = null;
var inst_17490 = (0);
var inst_17491 = (0);
var state_17536__$1 = (function (){var statearr_17539 = state_17536;
(statearr_17539[(8)] = inst_17490);

(statearr_17539[(9)] = inst_17491);

(statearr_17539[(10)] = inst_17488);

(statearr_17539[(11)] = inst_17489);

(statearr_17539[(12)] = inst_17513);

return statearr_17539;
})();
var statearr_17540_17580 = state_17536__$1;
(statearr_17540_17580[(2)] = null);

(statearr_17540_17580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (1))){
var state_17536__$1 = state_17536;
var statearr_17541_17581 = state_17536__$1;
(statearr_17541_17581[(2)] = null);

(statearr_17541_17581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (4))){
var inst_17477 = (state_17536[(13)]);
var inst_17477__$1 = (state_17536[(2)]);
var inst_17478 = (inst_17477__$1 == null);
var state_17536__$1 = (function (){var statearr_17542 = state_17536;
(statearr_17542[(13)] = inst_17477__$1);

return statearr_17542;
})();
if(cljs.core.truth_(inst_17478)){
var statearr_17543_17582 = state_17536__$1;
(statearr_17543_17582[(1)] = (5));

} else {
var statearr_17544_17583 = state_17536__$1;
(statearr_17544_17583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (15))){
var state_17536__$1 = state_17536;
var statearr_17548_17584 = state_17536__$1;
(statearr_17548_17584[(2)] = null);

(statearr_17548_17584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (21))){
var state_17536__$1 = state_17536;
var statearr_17549_17585 = state_17536__$1;
(statearr_17549_17585[(2)] = null);

(statearr_17549_17585[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (13))){
var inst_17490 = (state_17536[(8)]);
var inst_17491 = (state_17536[(9)]);
var inst_17488 = (state_17536[(10)]);
var inst_17489 = (state_17536[(11)]);
var inst_17498 = (state_17536[(2)]);
var inst_17499 = (inst_17491 + (1));
var tmp17545 = inst_17490;
var tmp17546 = inst_17488;
var tmp17547 = inst_17489;
var inst_17488__$1 = tmp17546;
var inst_17489__$1 = tmp17547;
var inst_17490__$1 = tmp17545;
var inst_17491__$1 = inst_17499;
var state_17536__$1 = (function (){var statearr_17550 = state_17536;
(statearr_17550[(8)] = inst_17490__$1);

(statearr_17550[(14)] = inst_17498);

(statearr_17550[(9)] = inst_17491__$1);

(statearr_17550[(10)] = inst_17488__$1);

(statearr_17550[(11)] = inst_17489__$1);

return statearr_17550;
})();
var statearr_17551_17586 = state_17536__$1;
(statearr_17551_17586[(2)] = null);

(statearr_17551_17586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (22))){
var state_17536__$1 = state_17536;
var statearr_17552_17587 = state_17536__$1;
(statearr_17552_17587[(2)] = null);

(statearr_17552_17587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (6))){
var inst_17477 = (state_17536[(13)]);
var inst_17486 = f.call(null,inst_17477);
var inst_17487 = cljs.core.seq.call(null,inst_17486);
var inst_17488 = inst_17487;
var inst_17489 = null;
var inst_17490 = (0);
var inst_17491 = (0);
var state_17536__$1 = (function (){var statearr_17553 = state_17536;
(statearr_17553[(8)] = inst_17490);

(statearr_17553[(9)] = inst_17491);

(statearr_17553[(10)] = inst_17488);

(statearr_17553[(11)] = inst_17489);

return statearr_17553;
})();
var statearr_17554_17588 = state_17536__$1;
(statearr_17554_17588[(2)] = null);

(statearr_17554_17588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (17))){
var inst_17502 = (state_17536[(7)]);
var inst_17506 = cljs.core.chunk_first.call(null,inst_17502);
var inst_17507 = cljs.core.chunk_rest.call(null,inst_17502);
var inst_17508 = cljs.core.count.call(null,inst_17506);
var inst_17488 = inst_17507;
var inst_17489 = inst_17506;
var inst_17490 = inst_17508;
var inst_17491 = (0);
var state_17536__$1 = (function (){var statearr_17555 = state_17536;
(statearr_17555[(8)] = inst_17490);

(statearr_17555[(9)] = inst_17491);

(statearr_17555[(10)] = inst_17488);

(statearr_17555[(11)] = inst_17489);

return statearr_17555;
})();
var statearr_17556_17589 = state_17536__$1;
(statearr_17556_17589[(2)] = null);

(statearr_17556_17589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (3))){
var inst_17534 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17536__$1,inst_17534);
} else {
if((state_val_17537 === (12))){
var inst_17522 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17557_17590 = state_17536__$1;
(statearr_17557_17590[(2)] = inst_17522);

(statearr_17557_17590[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (2))){
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17536__$1,(4),in$);
} else {
if((state_val_17537 === (23))){
var inst_17530 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17558_17591 = state_17536__$1;
(statearr_17558_17591[(2)] = inst_17530);

(statearr_17558_17591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (19))){
var inst_17517 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17559_17592 = state_17536__$1;
(statearr_17559_17592[(2)] = inst_17517);

(statearr_17559_17592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (11))){
var inst_17488 = (state_17536[(10)]);
var inst_17502 = (state_17536[(7)]);
var inst_17502__$1 = cljs.core.seq.call(null,inst_17488);
var state_17536__$1 = (function (){var statearr_17560 = state_17536;
(statearr_17560[(7)] = inst_17502__$1);

return statearr_17560;
})();
if(inst_17502__$1){
var statearr_17561_17593 = state_17536__$1;
(statearr_17561_17593[(1)] = (14));

} else {
var statearr_17562_17594 = state_17536__$1;
(statearr_17562_17594[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (9))){
var inst_17524 = (state_17536[(2)]);
var inst_17525 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17536__$1 = (function (){var statearr_17563 = state_17536;
(statearr_17563[(15)] = inst_17524);

return statearr_17563;
})();
if(cljs.core.truth_(inst_17525)){
var statearr_17564_17595 = state_17536__$1;
(statearr_17564_17595[(1)] = (21));

} else {
var statearr_17565_17596 = state_17536__$1;
(statearr_17565_17596[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (5))){
var inst_17480 = cljs.core.async.close_BANG_.call(null,out);
var state_17536__$1 = state_17536;
var statearr_17566_17597 = state_17536__$1;
(statearr_17566_17597[(2)] = inst_17480);

(statearr_17566_17597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (14))){
var inst_17502 = (state_17536[(7)]);
var inst_17504 = cljs.core.chunked_seq_QMARK_.call(null,inst_17502);
var state_17536__$1 = state_17536;
if(inst_17504){
var statearr_17567_17598 = state_17536__$1;
(statearr_17567_17598[(1)] = (17));

} else {
var statearr_17568_17599 = state_17536__$1;
(statearr_17568_17599[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (16))){
var inst_17520 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17569_17600 = state_17536__$1;
(statearr_17569_17600[(2)] = inst_17520);

(statearr_17569_17600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17537 === (10))){
var inst_17491 = (state_17536[(9)]);
var inst_17489 = (state_17536[(11)]);
var inst_17496 = cljs.core._nth.call(null,inst_17489,inst_17491);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17536__$1,(13),out,inst_17496);
} else {
if((state_val_17537 === (18))){
var inst_17502 = (state_17536[(7)]);
var inst_17511 = cljs.core.first.call(null,inst_17502);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17536__$1,(20),out,inst_17511);
} else {
if((state_val_17537 === (8))){
var inst_17490 = (state_17536[(8)]);
var inst_17491 = (state_17536[(9)]);
var inst_17493 = (inst_17491 < inst_17490);
var inst_17494 = inst_17493;
var state_17536__$1 = state_17536;
if(cljs.core.truth_(inst_17494)){
var statearr_17570_17601 = state_17536__$1;
(statearr_17570_17601[(1)] = (10));

} else {
var statearr_17571_17602 = state_17536__$1;
(statearr_17571_17602[(1)] = (11));

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
var statearr_17575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17575[(0)] = state_machine__7249__auto__);

(statearr_17575[(1)] = (1));

return statearr_17575;
});
var state_machine__7249__auto____1 = (function (state_17536){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17576){if((e17576 instanceof Object)){
var ex__7252__auto__ = e17576;
var statearr_17577_17603 = state_17536;
(statearr_17577_17603[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17604 = state_17536;
state_17536 = G__17604;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17536){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto__))
})();
var state__7306__auto__ = (function (){var statearr_17578 = f__7305__auto__.call(null);
(statearr_17578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto__);

return statearr_17578;
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
var c__7304__auto___17701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17701,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17701,out){
return (function (state_17676){
var state_val_17677 = (state_17676[(1)]);
if((state_val_17677 === (7))){
var inst_17671 = (state_17676[(2)]);
var state_17676__$1 = state_17676;
var statearr_17678_17702 = state_17676__$1;
(statearr_17678_17702[(2)] = inst_17671);

(statearr_17678_17702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (1))){
var inst_17653 = null;
var state_17676__$1 = (function (){var statearr_17679 = state_17676;
(statearr_17679[(7)] = inst_17653);

return statearr_17679;
})();
var statearr_17680_17703 = state_17676__$1;
(statearr_17680_17703[(2)] = null);

(statearr_17680_17703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (4))){
var inst_17656 = (state_17676[(8)]);
var inst_17656__$1 = (state_17676[(2)]);
var inst_17657 = (inst_17656__$1 == null);
var inst_17658 = cljs.core.not.call(null,inst_17657);
var state_17676__$1 = (function (){var statearr_17681 = state_17676;
(statearr_17681[(8)] = inst_17656__$1);

return statearr_17681;
})();
if(inst_17658){
var statearr_17682_17704 = state_17676__$1;
(statearr_17682_17704[(1)] = (5));

} else {
var statearr_17683_17705 = state_17676__$1;
(statearr_17683_17705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (6))){
var state_17676__$1 = state_17676;
var statearr_17684_17706 = state_17676__$1;
(statearr_17684_17706[(2)] = null);

(statearr_17684_17706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (3))){
var inst_17673 = (state_17676[(2)]);
var inst_17674 = cljs.core.async.close_BANG_.call(null,out);
var state_17676__$1 = (function (){var statearr_17685 = state_17676;
(statearr_17685[(9)] = inst_17673);

return statearr_17685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17676__$1,inst_17674);
} else {
if((state_val_17677 === (2))){
var state_17676__$1 = state_17676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17676__$1,(4),ch);
} else {
if((state_val_17677 === (11))){
var inst_17656 = (state_17676[(8)]);
var inst_17665 = (state_17676[(2)]);
var inst_17653 = inst_17656;
var state_17676__$1 = (function (){var statearr_17686 = state_17676;
(statearr_17686[(7)] = inst_17653);

(statearr_17686[(10)] = inst_17665);

return statearr_17686;
})();
var statearr_17687_17707 = state_17676__$1;
(statearr_17687_17707[(2)] = null);

(statearr_17687_17707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (9))){
var inst_17656 = (state_17676[(8)]);
var state_17676__$1 = state_17676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17676__$1,(11),out,inst_17656);
} else {
if((state_val_17677 === (5))){
var inst_17653 = (state_17676[(7)]);
var inst_17656 = (state_17676[(8)]);
var inst_17660 = cljs.core._EQ_.call(null,inst_17656,inst_17653);
var state_17676__$1 = state_17676;
if(inst_17660){
var statearr_17689_17708 = state_17676__$1;
(statearr_17689_17708[(1)] = (8));

} else {
var statearr_17690_17709 = state_17676__$1;
(statearr_17690_17709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (10))){
var inst_17668 = (state_17676[(2)]);
var state_17676__$1 = state_17676;
var statearr_17691_17710 = state_17676__$1;
(statearr_17691_17710[(2)] = inst_17668);

(statearr_17691_17710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17677 === (8))){
var inst_17653 = (state_17676[(7)]);
var tmp17688 = inst_17653;
var inst_17653__$1 = tmp17688;
var state_17676__$1 = (function (){var statearr_17692 = state_17676;
(statearr_17692[(7)] = inst_17653__$1);

return statearr_17692;
})();
var statearr_17693_17711 = state_17676__$1;
(statearr_17693_17711[(2)] = null);

(statearr_17693_17711[(1)] = (2));


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
});})(c__7304__auto___17701,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17701,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17697[(0)] = state_machine__7249__auto__);

(statearr_17697[(1)] = (1));

return statearr_17697;
});
var state_machine__7249__auto____1 = (function (state_17676){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17698){if((e17698 instanceof Object)){
var ex__7252__auto__ = e17698;
var statearr_17699_17712 = state_17676;
(statearr_17699_17712[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17713 = state_17676;
state_17676 = G__17713;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17676){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17701,out))
})();
var state__7306__auto__ = (function (){var statearr_17700 = f__7305__auto__.call(null);
(statearr_17700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17701);

return statearr_17700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17701,out))
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
var c__7304__auto___17848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___17848,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___17848,out){
return (function (state_17818){
var state_val_17819 = (state_17818[(1)]);
if((state_val_17819 === (7))){
var inst_17814 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17820_17849 = state_17818__$1;
(statearr_17820_17849[(2)] = inst_17814);

(statearr_17820_17849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (1))){
var inst_17781 = (new Array(n));
var inst_17782 = inst_17781;
var inst_17783 = (0);
var state_17818__$1 = (function (){var statearr_17821 = state_17818;
(statearr_17821[(7)] = inst_17783);

(statearr_17821[(8)] = inst_17782);

return statearr_17821;
})();
var statearr_17822_17850 = state_17818__$1;
(statearr_17822_17850[(2)] = null);

(statearr_17822_17850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (4))){
var inst_17786 = (state_17818[(9)]);
var inst_17786__$1 = (state_17818[(2)]);
var inst_17787 = (inst_17786__$1 == null);
var inst_17788 = cljs.core.not.call(null,inst_17787);
var state_17818__$1 = (function (){var statearr_17823 = state_17818;
(statearr_17823[(9)] = inst_17786__$1);

return statearr_17823;
})();
if(inst_17788){
var statearr_17824_17851 = state_17818__$1;
(statearr_17824_17851[(1)] = (5));

} else {
var statearr_17825_17852 = state_17818__$1;
(statearr_17825_17852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (15))){
var inst_17808 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17826_17853 = state_17818__$1;
(statearr_17826_17853[(2)] = inst_17808);

(statearr_17826_17853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (13))){
var state_17818__$1 = state_17818;
var statearr_17827_17854 = state_17818__$1;
(statearr_17827_17854[(2)] = null);

(statearr_17827_17854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (6))){
var inst_17783 = (state_17818[(7)]);
var inst_17804 = (inst_17783 > (0));
var state_17818__$1 = state_17818;
if(cljs.core.truth_(inst_17804)){
var statearr_17828_17855 = state_17818__$1;
(statearr_17828_17855[(1)] = (12));

} else {
var statearr_17829_17856 = state_17818__$1;
(statearr_17829_17856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (3))){
var inst_17816 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17818__$1,inst_17816);
} else {
if((state_val_17819 === (12))){
var inst_17782 = (state_17818[(8)]);
var inst_17806 = cljs.core.vec.call(null,inst_17782);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17818__$1,(15),out,inst_17806);
} else {
if((state_val_17819 === (2))){
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17818__$1,(4),ch);
} else {
if((state_val_17819 === (11))){
var inst_17798 = (state_17818[(2)]);
var inst_17799 = (new Array(n));
var inst_17782 = inst_17799;
var inst_17783 = (0);
var state_17818__$1 = (function (){var statearr_17830 = state_17818;
(statearr_17830[(7)] = inst_17783);

(statearr_17830[(8)] = inst_17782);

(statearr_17830[(10)] = inst_17798);

return statearr_17830;
})();
var statearr_17831_17857 = state_17818__$1;
(statearr_17831_17857[(2)] = null);

(statearr_17831_17857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (9))){
var inst_17782 = (state_17818[(8)]);
var inst_17796 = cljs.core.vec.call(null,inst_17782);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17818__$1,(11),out,inst_17796);
} else {
if((state_val_17819 === (5))){
var inst_17783 = (state_17818[(7)]);
var inst_17782 = (state_17818[(8)]);
var inst_17786 = (state_17818[(9)]);
var inst_17791 = (state_17818[(11)]);
var inst_17790 = (inst_17782[inst_17783] = inst_17786);
var inst_17791__$1 = (inst_17783 + (1));
var inst_17792 = (inst_17791__$1 < n);
var state_17818__$1 = (function (){var statearr_17832 = state_17818;
(statearr_17832[(12)] = inst_17790);

(statearr_17832[(11)] = inst_17791__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17792)){
var statearr_17833_17858 = state_17818__$1;
(statearr_17833_17858[(1)] = (8));

} else {
var statearr_17834_17859 = state_17818__$1;
(statearr_17834_17859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (14))){
var inst_17811 = (state_17818[(2)]);
var inst_17812 = cljs.core.async.close_BANG_.call(null,out);
var state_17818__$1 = (function (){var statearr_17836 = state_17818;
(statearr_17836[(13)] = inst_17811);

return statearr_17836;
})();
var statearr_17837_17860 = state_17818__$1;
(statearr_17837_17860[(2)] = inst_17812);

(statearr_17837_17860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (10))){
var inst_17802 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17838_17861 = state_17818__$1;
(statearr_17838_17861[(2)] = inst_17802);

(statearr_17838_17861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (8))){
var inst_17782 = (state_17818[(8)]);
var inst_17791 = (state_17818[(11)]);
var tmp17835 = inst_17782;
var inst_17782__$1 = tmp17835;
var inst_17783 = inst_17791;
var state_17818__$1 = (function (){var statearr_17839 = state_17818;
(statearr_17839[(7)] = inst_17783);

(statearr_17839[(8)] = inst_17782__$1);

return statearr_17839;
})();
var statearr_17840_17862 = state_17818__$1;
(statearr_17840_17862[(2)] = null);

(statearr_17840_17862[(1)] = (2));


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
});})(c__7304__auto___17848,out))
;
return ((function (switch__7248__auto__,c__7304__auto___17848,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_17844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17844[(0)] = state_machine__7249__auto__);

(statearr_17844[(1)] = (1));

return statearr_17844;
});
var state_machine__7249__auto____1 = (function (state_17818){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e17845){if((e17845 instanceof Object)){
var ex__7252__auto__ = e17845;
var statearr_17846_17863 = state_17818;
(statearr_17846_17863[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17864 = state_17818;
state_17818 = G__17864;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17818){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___17848,out))
})();
var state__7306__auto__ = (function (){var statearr_17847 = f__7305__auto__.call(null);
(statearr_17847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___17848);

return statearr_17847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___17848,out))
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
var c__7304__auto___18007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7304__auto___18007,out){
return (function (){
var f__7305__auto__ = (function (){var switch__7248__auto__ = ((function (c__7304__auto___18007,out){
return (function (state_17977){
var state_val_17978 = (state_17977[(1)]);
if((state_val_17978 === (7))){
var inst_17973 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17979_18008 = state_17977__$1;
(statearr_17979_18008[(2)] = inst_17973);

(statearr_17979_18008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (1))){
var inst_17936 = [];
var inst_17937 = inst_17936;
var inst_17938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17977__$1 = (function (){var statearr_17980 = state_17977;
(statearr_17980[(7)] = inst_17937);

(statearr_17980[(8)] = inst_17938);

return statearr_17980;
})();
var statearr_17981_18009 = state_17977__$1;
(statearr_17981_18009[(2)] = null);

(statearr_17981_18009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (4))){
var inst_17941 = (state_17977[(9)]);
var inst_17941__$1 = (state_17977[(2)]);
var inst_17942 = (inst_17941__$1 == null);
var inst_17943 = cljs.core.not.call(null,inst_17942);
var state_17977__$1 = (function (){var statearr_17982 = state_17977;
(statearr_17982[(9)] = inst_17941__$1);

return statearr_17982;
})();
if(inst_17943){
var statearr_17983_18010 = state_17977__$1;
(statearr_17983_18010[(1)] = (5));

} else {
var statearr_17984_18011 = state_17977__$1;
(statearr_17984_18011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (15))){
var inst_17967 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17985_18012 = state_17977__$1;
(statearr_17985_18012[(2)] = inst_17967);

(statearr_17985_18012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (13))){
var state_17977__$1 = state_17977;
var statearr_17986_18013 = state_17977__$1;
(statearr_17986_18013[(2)] = null);

(statearr_17986_18013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (6))){
var inst_17937 = (state_17977[(7)]);
var inst_17962 = inst_17937.length;
var inst_17963 = (inst_17962 > (0));
var state_17977__$1 = state_17977;
if(cljs.core.truth_(inst_17963)){
var statearr_17987_18014 = state_17977__$1;
(statearr_17987_18014[(1)] = (12));

} else {
var statearr_17988_18015 = state_17977__$1;
(statearr_17988_18015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (3))){
var inst_17975 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17977__$1,inst_17975);
} else {
if((state_val_17978 === (12))){
var inst_17937 = (state_17977[(7)]);
var inst_17965 = cljs.core.vec.call(null,inst_17937);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17977__$1,(15),out,inst_17965);
} else {
if((state_val_17978 === (2))){
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17977__$1,(4),ch);
} else {
if((state_val_17978 === (11))){
var inst_17941 = (state_17977[(9)]);
var inst_17945 = (state_17977[(10)]);
var inst_17955 = (state_17977[(2)]);
var inst_17956 = [];
var inst_17957 = inst_17956.push(inst_17941);
var inst_17937 = inst_17956;
var inst_17938 = inst_17945;
var state_17977__$1 = (function (){var statearr_17989 = state_17977;
(statearr_17989[(7)] = inst_17937);

(statearr_17989[(8)] = inst_17938);

(statearr_17989[(11)] = inst_17957);

(statearr_17989[(12)] = inst_17955);

return statearr_17989;
})();
var statearr_17990_18016 = state_17977__$1;
(statearr_17990_18016[(2)] = null);

(statearr_17990_18016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (9))){
var inst_17937 = (state_17977[(7)]);
var inst_17953 = cljs.core.vec.call(null,inst_17937);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17977__$1,(11),out,inst_17953);
} else {
if((state_val_17978 === (5))){
var inst_17941 = (state_17977[(9)]);
var inst_17945 = (state_17977[(10)]);
var inst_17938 = (state_17977[(8)]);
var inst_17945__$1 = f.call(null,inst_17941);
var inst_17946 = cljs.core._EQ_.call(null,inst_17945__$1,inst_17938);
var inst_17947 = cljs.core.keyword_identical_QMARK_.call(null,inst_17938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17948 = (inst_17946) || (inst_17947);
var state_17977__$1 = (function (){var statearr_17991 = state_17977;
(statearr_17991[(10)] = inst_17945__$1);

return statearr_17991;
})();
if(cljs.core.truth_(inst_17948)){
var statearr_17992_18017 = state_17977__$1;
(statearr_17992_18017[(1)] = (8));

} else {
var statearr_17993_18018 = state_17977__$1;
(statearr_17993_18018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (14))){
var inst_17970 = (state_17977[(2)]);
var inst_17971 = cljs.core.async.close_BANG_.call(null,out);
var state_17977__$1 = (function (){var statearr_17995 = state_17977;
(statearr_17995[(13)] = inst_17970);

return statearr_17995;
})();
var statearr_17996_18019 = state_17977__$1;
(statearr_17996_18019[(2)] = inst_17971);

(statearr_17996_18019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (10))){
var inst_17960 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17997_18020 = state_17977__$1;
(statearr_17997_18020[(2)] = inst_17960);

(statearr_17997_18020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17978 === (8))){
var inst_17941 = (state_17977[(9)]);
var inst_17937 = (state_17977[(7)]);
var inst_17945 = (state_17977[(10)]);
var inst_17950 = inst_17937.push(inst_17941);
var tmp17994 = inst_17937;
var inst_17937__$1 = tmp17994;
var inst_17938 = inst_17945;
var state_17977__$1 = (function (){var statearr_17998 = state_17977;
(statearr_17998[(14)] = inst_17950);

(statearr_17998[(7)] = inst_17937__$1);

(statearr_17998[(8)] = inst_17938);

return statearr_17998;
})();
var statearr_17999_18021 = state_17977__$1;
(statearr_17999_18021[(2)] = null);

(statearr_17999_18021[(1)] = (2));


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
});})(c__7304__auto___18007,out))
;
return ((function (switch__7248__auto__,c__7304__auto___18007,out){
return (function() {
var state_machine__7249__auto__ = null;
var state_machine__7249__auto____0 = (function (){
var statearr_18003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18003[(0)] = state_machine__7249__auto__);

(statearr_18003[(1)] = (1));

return statearr_18003;
});
var state_machine__7249__auto____1 = (function (state_17977){
while(true){
var ret_value__7250__auto__ = (function (){try{while(true){
var result__7251__auto__ = switch__7248__auto__.call(null,state_17977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7251__auto__;
}
break;
}
}catch (e18004){if((e18004 instanceof Object)){
var ex__7252__auto__ = e18004;
var statearr_18005_18022 = state_17977;
(statearr_18005_18022[(5)] = ex__7252__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18023 = state_17977;
state_17977 = G__18023;
continue;
} else {
return ret_value__7250__auto__;
}
break;
}
});
state_machine__7249__auto__ = function(state_17977){
switch(arguments.length){
case 0:
return state_machine__7249__auto____0.call(this);
case 1:
return state_machine__7249__auto____1.call(this,state_17977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7249__auto____0;
state_machine__7249__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7249__auto____1;
return state_machine__7249__auto__;
})()
;})(switch__7248__auto__,c__7304__auto___18007,out))
})();
var state__7306__auto__ = (function (){var statearr_18006 = f__7305__auto__.call(null);
(statearr_18006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7304__auto___18007);

return statearr_18006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7306__auto__);
});})(c__7304__auto___18007,out))
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