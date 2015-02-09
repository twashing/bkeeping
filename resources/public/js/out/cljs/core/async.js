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
if(typeof cljs.core.async.t126935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t126935 = (function (f,fn_handler,meta126936){
this.f = f;
this.fn_handler = fn_handler;
this.meta126936 = meta126936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t126935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t126935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t126935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t126935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_126937){
var self__ = this;
var _126937__$1 = this;
return self__.meta126936;
});

cljs.core.async.t126935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_126937,meta126936__$1){
var self__ = this;
var _126937__$1 = this;
return (new cljs.core.async.t126935(self__.f,self__.fn_handler,meta126936__$1));
});

cljs.core.async.t126935.cljs$lang$type = true;

cljs.core.async.t126935.cljs$lang$ctorStr = "cljs.core.async/t126935";

cljs.core.async.t126935.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t126935");
});

cljs.core.async.__GT_t126935 = (function __GT_t126935(f__$1,fn_handler__$1,meta126936){
return (new cljs.core.async.t126935(f__$1,fn_handler__$1,meta126936));
});

}

return (new cljs.core.async.t126935(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__126939 = buff;
if(G__126939){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__126939.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__126939.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__126939);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__126939);
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
var val_126940 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_126940);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_126940,ret){
return (function (){
return fn1.call(null,val_126940);
});})(val_126940,ret))
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
var n__4509__auto___126941 = n;
var x_126942 = (0);
while(true){
if((x_126942 < n__4509__auto___126941)){
(a[x_126942] = (0));

var G__126943 = (x_126942 + (1));
x_126942 = G__126943;
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

var G__126944 = (i + (1));
i = G__126944;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t126948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t126948 = (function (flag,alt_flag,meta126949){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta126949 = meta126949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t126948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t126948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t126948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t126948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_126950){
var self__ = this;
var _126950__$1 = this;
return self__.meta126949;
});})(flag))
;

cljs.core.async.t126948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_126950,meta126949__$1){
var self__ = this;
var _126950__$1 = this;
return (new cljs.core.async.t126948(self__.flag,self__.alt_flag,meta126949__$1));
});})(flag))
;

cljs.core.async.t126948.cljs$lang$type = true;

cljs.core.async.t126948.cljs$lang$ctorStr = "cljs.core.async/t126948";

cljs.core.async.t126948.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t126948");
});})(flag))
;

cljs.core.async.__GT_t126948 = ((function (flag){
return (function __GT_t126948(flag__$1,alt_flag__$1,meta126949){
return (new cljs.core.async.t126948(flag__$1,alt_flag__$1,meta126949));
});})(flag))
;

}

return (new cljs.core.async.t126948(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t126954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t126954 = (function (cb,flag,alt_handler,meta126955){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta126955 = meta126955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t126954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t126954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t126954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t126954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_126956){
var self__ = this;
var _126956__$1 = this;
return self__.meta126955;
});

cljs.core.async.t126954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_126956,meta126955__$1){
var self__ = this;
var _126956__$1 = this;
return (new cljs.core.async.t126954(self__.cb,self__.flag,self__.alt_handler,meta126955__$1));
});

cljs.core.async.t126954.cljs$lang$type = true;

cljs.core.async.t126954.cljs$lang$ctorStr = "cljs.core.async/t126954";

cljs.core.async.t126954.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t126954");
});

cljs.core.async.__GT_t126954 = (function __GT_t126954(cb__$1,flag__$1,alt_handler__$1,meta126955){
return (new cljs.core.async.t126954(cb__$1,flag__$1,alt_handler__$1,meta126955));
});

}

return (new cljs.core.async.t126954(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__126957_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__126957_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__126958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__126958_SHARP_,port], null));
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
var G__126959 = (i + (1));
i = G__126959;
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
var alts_BANG___delegate = function (ports,p__126960){
var map__126962 = p__126960;
var map__126962__$1 = ((cljs.core.seq_QMARK_.call(null,map__126962))?cljs.core.apply.call(null,cljs.core.hash_map,map__126962):map__126962);
var opts = map__126962__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__126960 = null;
if (arguments.length > 1) {
  p__126960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__126960);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__126963){
var ports = cljs.core.first(arglist__126963);
var p__126960 = cljs.core.rest(arglist__126963);
return alts_BANG___delegate(ports,p__126960);
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
var c__7043__auto___127058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___127058){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___127058){
return (function (state_127034){
var state_val_127035 = (state_127034[(1)]);
if((state_val_127035 === (7))){
var inst_127030 = (state_127034[(2)]);
var state_127034__$1 = state_127034;
var statearr_127036_127059 = state_127034__$1;
(statearr_127036_127059[(2)] = inst_127030);

(statearr_127036_127059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (1))){
var state_127034__$1 = state_127034;
var statearr_127037_127060 = state_127034__$1;
(statearr_127037_127060[(2)] = null);

(statearr_127037_127060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (4))){
var inst_127013 = (state_127034[(7)]);
var inst_127013__$1 = (state_127034[(2)]);
var inst_127014 = (inst_127013__$1 == null);
var state_127034__$1 = (function (){var statearr_127038 = state_127034;
(statearr_127038[(7)] = inst_127013__$1);

return statearr_127038;
})();
if(cljs.core.truth_(inst_127014)){
var statearr_127039_127061 = state_127034__$1;
(statearr_127039_127061[(1)] = (5));

} else {
var statearr_127040_127062 = state_127034__$1;
(statearr_127040_127062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (13))){
var state_127034__$1 = state_127034;
var statearr_127041_127063 = state_127034__$1;
(statearr_127041_127063[(2)] = null);

(statearr_127041_127063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (6))){
var inst_127013 = (state_127034[(7)]);
var state_127034__$1 = state_127034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127034__$1,(11),to,inst_127013);
} else {
if((state_val_127035 === (3))){
var inst_127032 = (state_127034[(2)]);
var state_127034__$1 = state_127034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127034__$1,inst_127032);
} else {
if((state_val_127035 === (12))){
var state_127034__$1 = state_127034;
var statearr_127042_127064 = state_127034__$1;
(statearr_127042_127064[(2)] = null);

(statearr_127042_127064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (2))){
var state_127034__$1 = state_127034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127034__$1,(4),from);
} else {
if((state_val_127035 === (11))){
var inst_127023 = (state_127034[(2)]);
var state_127034__$1 = state_127034;
if(cljs.core.truth_(inst_127023)){
var statearr_127043_127065 = state_127034__$1;
(statearr_127043_127065[(1)] = (12));

} else {
var statearr_127044_127066 = state_127034__$1;
(statearr_127044_127066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (9))){
var state_127034__$1 = state_127034;
var statearr_127045_127067 = state_127034__$1;
(statearr_127045_127067[(2)] = null);

(statearr_127045_127067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (5))){
var state_127034__$1 = state_127034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_127046_127068 = state_127034__$1;
(statearr_127046_127068[(1)] = (8));

} else {
var statearr_127047_127069 = state_127034__$1;
(statearr_127047_127069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (14))){
var inst_127028 = (state_127034[(2)]);
var state_127034__$1 = state_127034;
var statearr_127048_127070 = state_127034__$1;
(statearr_127048_127070[(2)] = inst_127028);

(statearr_127048_127070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (10))){
var inst_127020 = (state_127034[(2)]);
var state_127034__$1 = state_127034;
var statearr_127049_127071 = state_127034__$1;
(statearr_127049_127071[(2)] = inst_127020);

(statearr_127049_127071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127035 === (8))){
var inst_127017 = cljs.core.async.close_BANG_.call(null,to);
var state_127034__$1 = state_127034;
var statearr_127050_127072 = state_127034__$1;
(statearr_127050_127072[(2)] = inst_127017);

(statearr_127050_127072[(1)] = (10));


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
});})(c__7043__auto___127058))
;
return ((function (switch__6987__auto__,c__7043__auto___127058){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127054 = [null,null,null,null,null,null,null,null];
(statearr_127054[(0)] = state_machine__6988__auto__);

(statearr_127054[(1)] = (1));

return statearr_127054;
});
var state_machine__6988__auto____1 = (function (state_127034){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127055){if((e127055 instanceof Object)){
var ex__6991__auto__ = e127055;
var statearr_127056_127073 = state_127034;
(statearr_127056_127073[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127074 = state_127034;
state_127034 = G__127074;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127034){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___127058))
})();
var state__7045__auto__ = (function (){var statearr_127057 = f__7044__auto__.call(null);
(statearr_127057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127058);

return statearr_127057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___127058))
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
return (function (p__127258){
var vec__127259 = p__127258;
var v = cljs.core.nth.call(null,vec__127259,(0),null);
var p = cljs.core.nth.call(null,vec__127259,(1),null);
var job = vec__127259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7043__auto___127441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results){
return (function (state_127264){
var state_val_127265 = (state_127264[(1)]);
if((state_val_127265 === (2))){
var inst_127261 = (state_127264[(2)]);
var inst_127262 = cljs.core.async.close_BANG_.call(null,res);
var state_127264__$1 = (function (){var statearr_127266 = state_127264;
(statearr_127266[(7)] = inst_127261);

return statearr_127266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127264__$1,inst_127262);
} else {
if((state_val_127265 === (1))){
var state_127264__$1 = state_127264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127264__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results))
;
return ((function (switch__6987__auto__,c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127270 = [null,null,null,null,null,null,null,null];
(statearr_127270[(0)] = state_machine__6988__auto__);

(statearr_127270[(1)] = (1));

return statearr_127270;
});
var state_machine__6988__auto____1 = (function (state_127264){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127271){if((e127271 instanceof Object)){
var ex__6991__auto__ = e127271;
var statearr_127272_127442 = state_127264;
(statearr_127272_127442[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127443 = state_127264;
state_127264 = G__127443;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127264){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results))
})();
var state__7045__auto__ = (function (){var statearr_127273 = f__7044__auto__.call(null);
(statearr_127273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127441);

return statearr_127273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___127441,res,vec__127259,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__127274){
var vec__127275 = p__127274;
var v = cljs.core.nth.call(null,vec__127275,(0),null);
var p = cljs.core.nth.call(null,vec__127275,(1),null);
var job = vec__127275;
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
var n__4509__auto___127444 = n;
var __127445 = (0);
while(true){
if((__127445 < n__4509__auto___127444)){
var G__127276_127446 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__127276_127446) {
case "async":
var c__7043__auto___127448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__127445,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__127445,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function (state_127289){
var state_val_127290 = (state_127289[(1)]);
if((state_val_127290 === (7))){
var inst_127285 = (state_127289[(2)]);
var state_127289__$1 = state_127289;
var statearr_127291_127449 = state_127289__$1;
(statearr_127291_127449[(2)] = inst_127285);

(statearr_127291_127449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127290 === (6))){
var state_127289__$1 = state_127289;
var statearr_127292_127450 = state_127289__$1;
(statearr_127292_127450[(2)] = null);

(statearr_127292_127450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127290 === (5))){
var state_127289__$1 = state_127289;
var statearr_127293_127451 = state_127289__$1;
(statearr_127293_127451[(2)] = null);

(statearr_127293_127451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127290 === (4))){
var inst_127279 = (state_127289[(2)]);
var inst_127280 = async.call(null,inst_127279);
var state_127289__$1 = state_127289;
if(cljs.core.truth_(inst_127280)){
var statearr_127294_127452 = state_127289__$1;
(statearr_127294_127452[(1)] = (5));

} else {
var statearr_127295_127453 = state_127289__$1;
(statearr_127295_127453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127290 === (3))){
var inst_127287 = (state_127289[(2)]);
var state_127289__$1 = state_127289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127289__$1,inst_127287);
} else {
if((state_val_127290 === (2))){
var state_127289__$1 = state_127289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127289__$1,(4),jobs);
} else {
if((state_val_127290 === (1))){
var state_127289__$1 = state_127289;
var statearr_127296_127454 = state_127289__$1;
(statearr_127296_127454[(2)] = null);

(statearr_127296_127454[(1)] = (2));


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
});})(__127445,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
;
return ((function (__127445,switch__6987__auto__,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127300 = [null,null,null,null,null,null,null];
(statearr_127300[(0)] = state_machine__6988__auto__);

(statearr_127300[(1)] = (1));

return statearr_127300;
});
var state_machine__6988__auto____1 = (function (state_127289){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127301){if((e127301 instanceof Object)){
var ex__6991__auto__ = e127301;
var statearr_127302_127455 = state_127289;
(statearr_127302_127455[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127456 = state_127289;
state_127289 = G__127456;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127289){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__127445,switch__6987__auto__,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_127303 = f__7044__auto__.call(null);
(statearr_127303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127448);

return statearr_127303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__127445,c__7043__auto___127448,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
);


break;
case "compute":
var c__7043__auto___127457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__127445,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (__127445,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function (state_127316){
var state_val_127317 = (state_127316[(1)]);
if((state_val_127317 === (7))){
var inst_127312 = (state_127316[(2)]);
var state_127316__$1 = state_127316;
var statearr_127318_127458 = state_127316__$1;
(statearr_127318_127458[(2)] = inst_127312);

(statearr_127318_127458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127317 === (6))){
var state_127316__$1 = state_127316;
var statearr_127319_127459 = state_127316__$1;
(statearr_127319_127459[(2)] = null);

(statearr_127319_127459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127317 === (5))){
var state_127316__$1 = state_127316;
var statearr_127320_127460 = state_127316__$1;
(statearr_127320_127460[(2)] = null);

(statearr_127320_127460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127317 === (4))){
var inst_127306 = (state_127316[(2)]);
var inst_127307 = process.call(null,inst_127306);
var state_127316__$1 = state_127316;
if(cljs.core.truth_(inst_127307)){
var statearr_127321_127461 = state_127316__$1;
(statearr_127321_127461[(1)] = (5));

} else {
var statearr_127322_127462 = state_127316__$1;
(statearr_127322_127462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127317 === (3))){
var inst_127314 = (state_127316[(2)]);
var state_127316__$1 = state_127316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127316__$1,inst_127314);
} else {
if((state_val_127317 === (2))){
var state_127316__$1 = state_127316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127316__$1,(4),jobs);
} else {
if((state_val_127317 === (1))){
var state_127316__$1 = state_127316;
var statearr_127323_127463 = state_127316__$1;
(statearr_127323_127463[(2)] = null);

(statearr_127323_127463[(1)] = (2));


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
});})(__127445,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
;
return ((function (__127445,switch__6987__auto__,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127327 = [null,null,null,null,null,null,null];
(statearr_127327[(0)] = state_machine__6988__auto__);

(statearr_127327[(1)] = (1));

return statearr_127327;
});
var state_machine__6988__auto____1 = (function (state_127316){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127328){if((e127328 instanceof Object)){
var ex__6991__auto__ = e127328;
var statearr_127329_127464 = state_127316;
(statearr_127329_127464[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127465 = state_127316;
state_127316 = G__127465;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127316){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(__127445,switch__6987__auto__,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_127330 = f__7044__auto__.call(null);
(statearr_127330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127457);

return statearr_127330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(__127445,c__7043__auto___127457,G__127276_127446,n__4509__auto___127444,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__127466 = (__127445 + (1));
__127445 = G__127466;
continue;
} else {
}
break;
}

var c__7043__auto___127467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___127467,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___127467,jobs,results,process,async){
return (function (state_127352){
var state_val_127353 = (state_127352[(1)]);
if((state_val_127353 === (9))){
var inst_127345 = (state_127352[(2)]);
var state_127352__$1 = (function (){var statearr_127354 = state_127352;
(statearr_127354[(7)] = inst_127345);

return statearr_127354;
})();
var statearr_127355_127468 = state_127352__$1;
(statearr_127355_127468[(2)] = null);

(statearr_127355_127468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127353 === (8))){
var inst_127338 = (state_127352[(8)]);
var inst_127343 = (state_127352[(2)]);
var state_127352__$1 = (function (){var statearr_127356 = state_127352;
(statearr_127356[(9)] = inst_127343);

return statearr_127356;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127352__$1,(9),results,inst_127338);
} else {
if((state_val_127353 === (7))){
var inst_127348 = (state_127352[(2)]);
var state_127352__$1 = state_127352;
var statearr_127357_127469 = state_127352__$1;
(statearr_127357_127469[(2)] = inst_127348);

(statearr_127357_127469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127353 === (6))){
var inst_127333 = (state_127352[(10)]);
var inst_127338 = (state_127352[(8)]);
var inst_127338__$1 = cljs.core.async.chan.call(null,(1));
var inst_127339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127340 = [inst_127333,inst_127338__$1];
var inst_127341 = (new cljs.core.PersistentVector(null,2,(5),inst_127339,inst_127340,null));
var state_127352__$1 = (function (){var statearr_127358 = state_127352;
(statearr_127358[(8)] = inst_127338__$1);

return statearr_127358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127352__$1,(8),jobs,inst_127341);
} else {
if((state_val_127353 === (5))){
var inst_127336 = cljs.core.async.close_BANG_.call(null,jobs);
var state_127352__$1 = state_127352;
var statearr_127359_127470 = state_127352__$1;
(statearr_127359_127470[(2)] = inst_127336);

(statearr_127359_127470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127353 === (4))){
var inst_127333 = (state_127352[(10)]);
var inst_127333__$1 = (state_127352[(2)]);
var inst_127334 = (inst_127333__$1 == null);
var state_127352__$1 = (function (){var statearr_127360 = state_127352;
(statearr_127360[(10)] = inst_127333__$1);

return statearr_127360;
})();
if(cljs.core.truth_(inst_127334)){
var statearr_127361_127471 = state_127352__$1;
(statearr_127361_127471[(1)] = (5));

} else {
var statearr_127362_127472 = state_127352__$1;
(statearr_127362_127472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127353 === (3))){
var inst_127350 = (state_127352[(2)]);
var state_127352__$1 = state_127352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127352__$1,inst_127350);
} else {
if((state_val_127353 === (2))){
var state_127352__$1 = state_127352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127352__$1,(4),from);
} else {
if((state_val_127353 === (1))){
var state_127352__$1 = state_127352;
var statearr_127363_127473 = state_127352__$1;
(statearr_127363_127473[(2)] = null);

(statearr_127363_127473[(1)] = (2));


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
});})(c__7043__auto___127467,jobs,results,process,async))
;
return ((function (switch__6987__auto__,c__7043__auto___127467,jobs,results,process,async){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_127367[(0)] = state_machine__6988__auto__);

(statearr_127367[(1)] = (1));

return statearr_127367;
});
var state_machine__6988__auto____1 = (function (state_127352){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127368){if((e127368 instanceof Object)){
var ex__6991__auto__ = e127368;
var statearr_127369_127474 = state_127352;
(statearr_127369_127474[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127475 = state_127352;
state_127352 = G__127475;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127352){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___127467,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_127370 = f__7044__auto__.call(null);
(statearr_127370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127467);

return statearr_127370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___127467,jobs,results,process,async))
);


var c__7043__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto__,jobs,results,process,async){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto__,jobs,results,process,async){
return (function (state_127408){
var state_val_127409 = (state_127408[(1)]);
if((state_val_127409 === (7))){
var inst_127404 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
var statearr_127410_127476 = state_127408__$1;
(statearr_127410_127476[(2)] = inst_127404);

(statearr_127410_127476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (20))){
var state_127408__$1 = state_127408;
var statearr_127411_127477 = state_127408__$1;
(statearr_127411_127477[(2)] = null);

(statearr_127411_127477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (1))){
var state_127408__$1 = state_127408;
var statearr_127412_127478 = state_127408__$1;
(statearr_127412_127478[(2)] = null);

(statearr_127412_127478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (4))){
var inst_127373 = (state_127408[(7)]);
var inst_127373__$1 = (state_127408[(2)]);
var inst_127374 = (inst_127373__$1 == null);
var state_127408__$1 = (function (){var statearr_127413 = state_127408;
(statearr_127413[(7)] = inst_127373__$1);

return statearr_127413;
})();
if(cljs.core.truth_(inst_127374)){
var statearr_127414_127479 = state_127408__$1;
(statearr_127414_127479[(1)] = (5));

} else {
var statearr_127415_127480 = state_127408__$1;
(statearr_127415_127480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (15))){
var inst_127386 = (state_127408[(8)]);
var state_127408__$1 = state_127408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127408__$1,(18),to,inst_127386);
} else {
if((state_val_127409 === (21))){
var inst_127399 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
var statearr_127416_127481 = state_127408__$1;
(statearr_127416_127481[(2)] = inst_127399);

(statearr_127416_127481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (13))){
var inst_127401 = (state_127408[(2)]);
var state_127408__$1 = (function (){var statearr_127417 = state_127408;
(statearr_127417[(9)] = inst_127401);

return statearr_127417;
})();
var statearr_127418_127482 = state_127408__$1;
(statearr_127418_127482[(2)] = null);

(statearr_127418_127482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (6))){
var inst_127373 = (state_127408[(7)]);
var state_127408__$1 = state_127408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127408__$1,(11),inst_127373);
} else {
if((state_val_127409 === (17))){
var inst_127394 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
if(cljs.core.truth_(inst_127394)){
var statearr_127419_127483 = state_127408__$1;
(statearr_127419_127483[(1)] = (19));

} else {
var statearr_127420_127484 = state_127408__$1;
(statearr_127420_127484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (3))){
var inst_127406 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127408__$1,inst_127406);
} else {
if((state_val_127409 === (12))){
var inst_127383 = (state_127408[(10)]);
var state_127408__$1 = state_127408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127408__$1,(14),inst_127383);
} else {
if((state_val_127409 === (2))){
var state_127408__$1 = state_127408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127408__$1,(4),results);
} else {
if((state_val_127409 === (19))){
var state_127408__$1 = state_127408;
var statearr_127421_127485 = state_127408__$1;
(statearr_127421_127485[(2)] = null);

(statearr_127421_127485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (11))){
var inst_127383 = (state_127408[(2)]);
var state_127408__$1 = (function (){var statearr_127422 = state_127408;
(statearr_127422[(10)] = inst_127383);

return statearr_127422;
})();
var statearr_127423_127486 = state_127408__$1;
(statearr_127423_127486[(2)] = null);

(statearr_127423_127486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (9))){
var state_127408__$1 = state_127408;
var statearr_127424_127487 = state_127408__$1;
(statearr_127424_127487[(2)] = null);

(statearr_127424_127487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (5))){
var state_127408__$1 = state_127408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_127425_127488 = state_127408__$1;
(statearr_127425_127488[(1)] = (8));

} else {
var statearr_127426_127489 = state_127408__$1;
(statearr_127426_127489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (14))){
var inst_127386 = (state_127408[(8)]);
var inst_127388 = (state_127408[(11)]);
var inst_127386__$1 = (state_127408[(2)]);
var inst_127387 = (inst_127386__$1 == null);
var inst_127388__$1 = cljs.core.not.call(null,inst_127387);
var state_127408__$1 = (function (){var statearr_127427 = state_127408;
(statearr_127427[(8)] = inst_127386__$1);

(statearr_127427[(11)] = inst_127388__$1);

return statearr_127427;
})();
if(inst_127388__$1){
var statearr_127428_127490 = state_127408__$1;
(statearr_127428_127490[(1)] = (15));

} else {
var statearr_127429_127491 = state_127408__$1;
(statearr_127429_127491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (16))){
var inst_127388 = (state_127408[(11)]);
var state_127408__$1 = state_127408;
var statearr_127430_127492 = state_127408__$1;
(statearr_127430_127492[(2)] = inst_127388);

(statearr_127430_127492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (10))){
var inst_127380 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
var statearr_127431_127493 = state_127408__$1;
(statearr_127431_127493[(2)] = inst_127380);

(statearr_127431_127493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (18))){
var inst_127391 = (state_127408[(2)]);
var state_127408__$1 = state_127408;
var statearr_127432_127494 = state_127408__$1;
(statearr_127432_127494[(2)] = inst_127391);

(statearr_127432_127494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127409 === (8))){
var inst_127377 = cljs.core.async.close_BANG_.call(null,to);
var state_127408__$1 = state_127408;
var statearr_127433_127495 = state_127408__$1;
(statearr_127433_127495[(2)] = inst_127377);

(statearr_127433_127495[(1)] = (10));


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
var statearr_127437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_127437[(0)] = state_machine__6988__auto__);

(statearr_127437[(1)] = (1));

return statearr_127437;
});
var state_machine__6988__auto____1 = (function (state_127408){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127438){if((e127438 instanceof Object)){
var ex__6991__auto__ = e127438;
var statearr_127439_127496 = state_127408;
(statearr_127439_127496[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127497 = state_127408;
state_127408 = G__127497;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127408){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__,jobs,results,process,async))
})();
var state__7045__auto__ = (function (){var statearr_127440 = f__7044__auto__.call(null);
(statearr_127440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_127440;
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
var c__7043__auto___127598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___127598,tc,fc){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___127598,tc,fc){
return (function (state_127573){
var state_val_127574 = (state_127573[(1)]);
if((state_val_127574 === (7))){
var inst_127569 = (state_127573[(2)]);
var state_127573__$1 = state_127573;
var statearr_127575_127599 = state_127573__$1;
(statearr_127575_127599[(2)] = inst_127569);

(statearr_127575_127599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (1))){
var state_127573__$1 = state_127573;
var statearr_127576_127600 = state_127573__$1;
(statearr_127576_127600[(2)] = null);

(statearr_127576_127600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (4))){
var inst_127550 = (state_127573[(7)]);
var inst_127550__$1 = (state_127573[(2)]);
var inst_127551 = (inst_127550__$1 == null);
var state_127573__$1 = (function (){var statearr_127577 = state_127573;
(statearr_127577[(7)] = inst_127550__$1);

return statearr_127577;
})();
if(cljs.core.truth_(inst_127551)){
var statearr_127578_127601 = state_127573__$1;
(statearr_127578_127601[(1)] = (5));

} else {
var statearr_127579_127602 = state_127573__$1;
(statearr_127579_127602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (13))){
var state_127573__$1 = state_127573;
var statearr_127580_127603 = state_127573__$1;
(statearr_127580_127603[(2)] = null);

(statearr_127580_127603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (6))){
var inst_127550 = (state_127573[(7)]);
var inst_127556 = p.call(null,inst_127550);
var state_127573__$1 = state_127573;
if(cljs.core.truth_(inst_127556)){
var statearr_127581_127604 = state_127573__$1;
(statearr_127581_127604[(1)] = (9));

} else {
var statearr_127582_127605 = state_127573__$1;
(statearr_127582_127605[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (3))){
var inst_127571 = (state_127573[(2)]);
var state_127573__$1 = state_127573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127573__$1,inst_127571);
} else {
if((state_val_127574 === (12))){
var state_127573__$1 = state_127573;
var statearr_127583_127606 = state_127573__$1;
(statearr_127583_127606[(2)] = null);

(statearr_127583_127606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (2))){
var state_127573__$1 = state_127573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127573__$1,(4),ch);
} else {
if((state_val_127574 === (11))){
var inst_127550 = (state_127573[(7)]);
var inst_127560 = (state_127573[(2)]);
var state_127573__$1 = state_127573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127573__$1,(8),inst_127560,inst_127550);
} else {
if((state_val_127574 === (9))){
var state_127573__$1 = state_127573;
var statearr_127584_127607 = state_127573__$1;
(statearr_127584_127607[(2)] = tc);

(statearr_127584_127607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (5))){
var inst_127553 = cljs.core.async.close_BANG_.call(null,tc);
var inst_127554 = cljs.core.async.close_BANG_.call(null,fc);
var state_127573__$1 = (function (){var statearr_127585 = state_127573;
(statearr_127585[(8)] = inst_127553);

return statearr_127585;
})();
var statearr_127586_127608 = state_127573__$1;
(statearr_127586_127608[(2)] = inst_127554);

(statearr_127586_127608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (14))){
var inst_127567 = (state_127573[(2)]);
var state_127573__$1 = state_127573;
var statearr_127587_127609 = state_127573__$1;
(statearr_127587_127609[(2)] = inst_127567);

(statearr_127587_127609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (10))){
var state_127573__$1 = state_127573;
var statearr_127588_127610 = state_127573__$1;
(statearr_127588_127610[(2)] = fc);

(statearr_127588_127610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127574 === (8))){
var inst_127562 = (state_127573[(2)]);
var state_127573__$1 = state_127573;
if(cljs.core.truth_(inst_127562)){
var statearr_127589_127611 = state_127573__$1;
(statearr_127589_127611[(1)] = (12));

} else {
var statearr_127590_127612 = state_127573__$1;
(statearr_127590_127612[(1)] = (13));

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
});})(c__7043__auto___127598,tc,fc))
;
return ((function (switch__6987__auto__,c__7043__auto___127598,tc,fc){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_127594 = [null,null,null,null,null,null,null,null,null];
(statearr_127594[(0)] = state_machine__6988__auto__);

(statearr_127594[(1)] = (1));

return statearr_127594;
});
var state_machine__6988__auto____1 = (function (state_127573){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127595){if((e127595 instanceof Object)){
var ex__6991__auto__ = e127595;
var statearr_127596_127613 = state_127573;
(statearr_127596_127613[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127614 = state_127573;
state_127573 = G__127614;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127573){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___127598,tc,fc))
})();
var state__7045__auto__ = (function (){var statearr_127597 = f__7044__auto__.call(null);
(statearr_127597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___127598);

return statearr_127597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___127598,tc,fc))
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
return (function (state_127661){
var state_val_127662 = (state_127661[(1)]);
if((state_val_127662 === (7))){
var inst_127657 = (state_127661[(2)]);
var state_127661__$1 = state_127661;
var statearr_127663_127679 = state_127661__$1;
(statearr_127663_127679[(2)] = inst_127657);

(statearr_127663_127679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127662 === (6))){
var inst_127647 = (state_127661[(7)]);
var inst_127650 = (state_127661[(8)]);
var inst_127654 = f.call(null,inst_127647,inst_127650);
var inst_127647__$1 = inst_127654;
var state_127661__$1 = (function (){var statearr_127664 = state_127661;
(statearr_127664[(7)] = inst_127647__$1);

return statearr_127664;
})();
var statearr_127665_127680 = state_127661__$1;
(statearr_127665_127680[(2)] = null);

(statearr_127665_127680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127662 === (5))){
var inst_127647 = (state_127661[(7)]);
var state_127661__$1 = state_127661;
var statearr_127666_127681 = state_127661__$1;
(statearr_127666_127681[(2)] = inst_127647);

(statearr_127666_127681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127662 === (4))){
var inst_127650 = (state_127661[(8)]);
var inst_127650__$1 = (state_127661[(2)]);
var inst_127651 = (inst_127650__$1 == null);
var state_127661__$1 = (function (){var statearr_127667 = state_127661;
(statearr_127667[(8)] = inst_127650__$1);

return statearr_127667;
})();
if(cljs.core.truth_(inst_127651)){
var statearr_127668_127682 = state_127661__$1;
(statearr_127668_127682[(1)] = (5));

} else {
var statearr_127669_127683 = state_127661__$1;
(statearr_127669_127683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127662 === (3))){
var inst_127659 = (state_127661[(2)]);
var state_127661__$1 = state_127661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127661__$1,inst_127659);
} else {
if((state_val_127662 === (2))){
var state_127661__$1 = state_127661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127661__$1,(4),ch);
} else {
if((state_val_127662 === (1))){
var inst_127647 = init;
var state_127661__$1 = (function (){var statearr_127670 = state_127661;
(statearr_127670[(7)] = inst_127647);

return statearr_127670;
})();
var statearr_127671_127684 = state_127661__$1;
(statearr_127671_127684[(2)] = null);

(statearr_127671_127684[(1)] = (2));


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
var statearr_127675 = [null,null,null,null,null,null,null,null,null];
(statearr_127675[(0)] = state_machine__6988__auto__);

(statearr_127675[(1)] = (1));

return statearr_127675;
});
var state_machine__6988__auto____1 = (function (state_127661){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127676){if((e127676 instanceof Object)){
var ex__6991__auto__ = e127676;
var statearr_127677_127685 = state_127661;
(statearr_127677_127685[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127686 = state_127661;
state_127661 = G__127686;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127661){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_127678 = f__7044__auto__.call(null);
(statearr_127678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_127678;
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
return (function (state_127760){
var state_val_127761 = (state_127760[(1)]);
if((state_val_127761 === (7))){
var inst_127742 = (state_127760[(2)]);
var state_127760__$1 = state_127760;
var statearr_127762_127785 = state_127760__$1;
(statearr_127762_127785[(2)] = inst_127742);

(statearr_127762_127785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (1))){
var inst_127736 = cljs.core.seq.call(null,coll);
var inst_127737 = inst_127736;
var state_127760__$1 = (function (){var statearr_127763 = state_127760;
(statearr_127763[(7)] = inst_127737);

return statearr_127763;
})();
var statearr_127764_127786 = state_127760__$1;
(statearr_127764_127786[(2)] = null);

(statearr_127764_127786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (4))){
var inst_127737 = (state_127760[(7)]);
var inst_127740 = cljs.core.first.call(null,inst_127737);
var state_127760__$1 = state_127760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127760__$1,(7),ch,inst_127740);
} else {
if((state_val_127761 === (13))){
var inst_127754 = (state_127760[(2)]);
var state_127760__$1 = state_127760;
var statearr_127765_127787 = state_127760__$1;
(statearr_127765_127787[(2)] = inst_127754);

(statearr_127765_127787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (6))){
var inst_127745 = (state_127760[(2)]);
var state_127760__$1 = state_127760;
if(cljs.core.truth_(inst_127745)){
var statearr_127766_127788 = state_127760__$1;
(statearr_127766_127788[(1)] = (8));

} else {
var statearr_127767_127789 = state_127760__$1;
(statearr_127767_127789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (3))){
var inst_127758 = (state_127760[(2)]);
var state_127760__$1 = state_127760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127760__$1,inst_127758);
} else {
if((state_val_127761 === (12))){
var state_127760__$1 = state_127760;
var statearr_127768_127790 = state_127760__$1;
(statearr_127768_127790[(2)] = null);

(statearr_127768_127790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (2))){
var inst_127737 = (state_127760[(7)]);
var state_127760__$1 = state_127760;
if(cljs.core.truth_(inst_127737)){
var statearr_127769_127791 = state_127760__$1;
(statearr_127769_127791[(1)] = (4));

} else {
var statearr_127770_127792 = state_127760__$1;
(statearr_127770_127792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (11))){
var inst_127751 = cljs.core.async.close_BANG_.call(null,ch);
var state_127760__$1 = state_127760;
var statearr_127771_127793 = state_127760__$1;
(statearr_127771_127793[(2)] = inst_127751);

(statearr_127771_127793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (9))){
var state_127760__$1 = state_127760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_127772_127794 = state_127760__$1;
(statearr_127772_127794[(1)] = (11));

} else {
var statearr_127773_127795 = state_127760__$1;
(statearr_127773_127795[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (5))){
var inst_127737 = (state_127760[(7)]);
var state_127760__$1 = state_127760;
var statearr_127774_127796 = state_127760__$1;
(statearr_127774_127796[(2)] = inst_127737);

(statearr_127774_127796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (10))){
var inst_127756 = (state_127760[(2)]);
var state_127760__$1 = state_127760;
var statearr_127775_127797 = state_127760__$1;
(statearr_127775_127797[(2)] = inst_127756);

(statearr_127775_127797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127761 === (8))){
var inst_127737 = (state_127760[(7)]);
var inst_127747 = cljs.core.next.call(null,inst_127737);
var inst_127737__$1 = inst_127747;
var state_127760__$1 = (function (){var statearr_127776 = state_127760;
(statearr_127776[(7)] = inst_127737__$1);

return statearr_127776;
})();
var statearr_127777_127798 = state_127760__$1;
(statearr_127777_127798[(2)] = null);

(statearr_127777_127798[(1)] = (2));


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
var statearr_127781 = [null,null,null,null,null,null,null,null];
(statearr_127781[(0)] = state_machine__6988__auto__);

(statearr_127781[(1)] = (1));

return statearr_127781;
});
var state_machine__6988__auto____1 = (function (state_127760){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_127760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e127782){if((e127782 instanceof Object)){
var ex__6991__auto__ = e127782;
var statearr_127783_127799 = state_127760;
(statearr_127783_127799[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127800 = state_127760;
state_127760 = G__127800;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_127760){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_127760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_127784 = f__7044__auto__.call(null);
(statearr_127784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_127784;
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

cljs.core.async.Mux = (function (){var obj127802 = {};
return obj127802;
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


cljs.core.async.Mult = (function (){var obj127804 = {};
return obj127804;
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
if(typeof cljs.core.async.t128026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t128026 = (function (cs,ch,mult,meta128027){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta128027 = meta128027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t128026.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t128026.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t128026.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t128026.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t128026.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t128026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t128026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_128028){
var self__ = this;
var _128028__$1 = this;
return self__.meta128027;
});})(cs))
;

cljs.core.async.t128026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_128028,meta128027__$1){
var self__ = this;
var _128028__$1 = this;
return (new cljs.core.async.t128026(self__.cs,self__.ch,self__.mult,meta128027__$1));
});})(cs))
;

cljs.core.async.t128026.cljs$lang$type = true;

cljs.core.async.t128026.cljs$lang$ctorStr = "cljs.core.async/t128026";

cljs.core.async.t128026.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t128026");
});})(cs))
;

cljs.core.async.__GT_t128026 = ((function (cs){
return (function __GT_t128026(cs__$1,ch__$1,mult__$1,meta128027){
return (new cljs.core.async.t128026(cs__$1,ch__$1,mult__$1,meta128027));
});})(cs))
;

}

return (new cljs.core.async.t128026(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___128247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___128247,cs,m,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___128247,cs,m,dchan,dctr,done){
return (function (state_128159){
var state_val_128160 = (state_128159[(1)]);
if((state_val_128160 === (7))){
var inst_128155 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128161_128248 = state_128159__$1;
(statearr_128161_128248[(2)] = inst_128155);

(statearr_128161_128248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (20))){
var inst_128060 = (state_128159[(7)]);
var inst_128070 = cljs.core.first.call(null,inst_128060);
var inst_128071 = cljs.core.nth.call(null,inst_128070,(0),null);
var inst_128072 = cljs.core.nth.call(null,inst_128070,(1),null);
var state_128159__$1 = (function (){var statearr_128162 = state_128159;
(statearr_128162[(8)] = inst_128071);

return statearr_128162;
})();
if(cljs.core.truth_(inst_128072)){
var statearr_128163_128249 = state_128159__$1;
(statearr_128163_128249[(1)] = (22));

} else {
var statearr_128164_128250 = state_128159__$1;
(statearr_128164_128250[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (27))){
var inst_128107 = (state_128159[(9)]);
var inst_128100 = (state_128159[(10)]);
var inst_128102 = (state_128159[(11)]);
var inst_128031 = (state_128159[(12)]);
var inst_128107__$1 = cljs.core._nth.call(null,inst_128100,inst_128102);
var inst_128108 = cljs.core.async.put_BANG_.call(null,inst_128107__$1,inst_128031,done);
var state_128159__$1 = (function (){var statearr_128165 = state_128159;
(statearr_128165[(9)] = inst_128107__$1);

return statearr_128165;
})();
if(cljs.core.truth_(inst_128108)){
var statearr_128166_128251 = state_128159__$1;
(statearr_128166_128251[(1)] = (30));

} else {
var statearr_128167_128252 = state_128159__$1;
(statearr_128167_128252[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (1))){
var state_128159__$1 = state_128159;
var statearr_128168_128253 = state_128159__$1;
(statearr_128168_128253[(2)] = null);

(statearr_128168_128253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (24))){
var inst_128060 = (state_128159[(7)]);
var inst_128077 = (state_128159[(2)]);
var inst_128078 = cljs.core.next.call(null,inst_128060);
var inst_128040 = inst_128078;
var inst_128041 = null;
var inst_128042 = (0);
var inst_128043 = (0);
var state_128159__$1 = (function (){var statearr_128169 = state_128159;
(statearr_128169[(13)] = inst_128040);

(statearr_128169[(14)] = inst_128077);

(statearr_128169[(15)] = inst_128042);

(statearr_128169[(16)] = inst_128041);

(statearr_128169[(17)] = inst_128043);

return statearr_128169;
})();
var statearr_128170_128254 = state_128159__$1;
(statearr_128170_128254[(2)] = null);

(statearr_128170_128254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (39))){
var state_128159__$1 = state_128159;
var statearr_128174_128255 = state_128159__$1;
(statearr_128174_128255[(2)] = null);

(statearr_128174_128255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (4))){
var inst_128031 = (state_128159[(12)]);
var inst_128031__$1 = (state_128159[(2)]);
var inst_128032 = (inst_128031__$1 == null);
var state_128159__$1 = (function (){var statearr_128175 = state_128159;
(statearr_128175[(12)] = inst_128031__$1);

return statearr_128175;
})();
if(cljs.core.truth_(inst_128032)){
var statearr_128176_128256 = state_128159__$1;
(statearr_128176_128256[(1)] = (5));

} else {
var statearr_128177_128257 = state_128159__$1;
(statearr_128177_128257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (15))){
var inst_128040 = (state_128159[(13)]);
var inst_128042 = (state_128159[(15)]);
var inst_128041 = (state_128159[(16)]);
var inst_128043 = (state_128159[(17)]);
var inst_128056 = (state_128159[(2)]);
var inst_128057 = (inst_128043 + (1));
var tmp128171 = inst_128040;
var tmp128172 = inst_128042;
var tmp128173 = inst_128041;
var inst_128040__$1 = tmp128171;
var inst_128041__$1 = tmp128173;
var inst_128042__$1 = tmp128172;
var inst_128043__$1 = inst_128057;
var state_128159__$1 = (function (){var statearr_128178 = state_128159;
(statearr_128178[(13)] = inst_128040__$1);

(statearr_128178[(15)] = inst_128042__$1);

(statearr_128178[(16)] = inst_128041__$1);

(statearr_128178[(17)] = inst_128043__$1);

(statearr_128178[(18)] = inst_128056);

return statearr_128178;
})();
var statearr_128179_128258 = state_128159__$1;
(statearr_128179_128258[(2)] = null);

(statearr_128179_128258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (21))){
var inst_128081 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128183_128259 = state_128159__$1;
(statearr_128183_128259[(2)] = inst_128081);

(statearr_128183_128259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (31))){
var inst_128107 = (state_128159[(9)]);
var inst_128111 = done.call(null,null);
var inst_128112 = cljs.core.async.untap_STAR_.call(null,m,inst_128107);
var state_128159__$1 = (function (){var statearr_128184 = state_128159;
(statearr_128184[(19)] = inst_128111);

return statearr_128184;
})();
var statearr_128185_128260 = state_128159__$1;
(statearr_128185_128260[(2)] = inst_128112);

(statearr_128185_128260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (32))){
var inst_128099 = (state_128159[(20)]);
var inst_128101 = (state_128159[(21)]);
var inst_128100 = (state_128159[(10)]);
var inst_128102 = (state_128159[(11)]);
var inst_128114 = (state_128159[(2)]);
var inst_128115 = (inst_128102 + (1));
var tmp128180 = inst_128099;
var tmp128181 = inst_128101;
var tmp128182 = inst_128100;
var inst_128099__$1 = tmp128180;
var inst_128100__$1 = tmp128182;
var inst_128101__$1 = tmp128181;
var inst_128102__$1 = inst_128115;
var state_128159__$1 = (function (){var statearr_128186 = state_128159;
(statearr_128186[(20)] = inst_128099__$1);

(statearr_128186[(22)] = inst_128114);

(statearr_128186[(21)] = inst_128101__$1);

(statearr_128186[(10)] = inst_128100__$1);

(statearr_128186[(11)] = inst_128102__$1);

return statearr_128186;
})();
var statearr_128187_128261 = state_128159__$1;
(statearr_128187_128261[(2)] = null);

(statearr_128187_128261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (40))){
var inst_128127 = (state_128159[(23)]);
var inst_128131 = done.call(null,null);
var inst_128132 = cljs.core.async.untap_STAR_.call(null,m,inst_128127);
var state_128159__$1 = (function (){var statearr_128188 = state_128159;
(statearr_128188[(24)] = inst_128131);

return statearr_128188;
})();
var statearr_128189_128262 = state_128159__$1;
(statearr_128189_128262[(2)] = inst_128132);

(statearr_128189_128262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (33))){
var inst_128118 = (state_128159[(25)]);
var inst_128120 = cljs.core.chunked_seq_QMARK_.call(null,inst_128118);
var state_128159__$1 = state_128159;
if(inst_128120){
var statearr_128190_128263 = state_128159__$1;
(statearr_128190_128263[(1)] = (36));

} else {
var statearr_128191_128264 = state_128159__$1;
(statearr_128191_128264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (13))){
var inst_128050 = (state_128159[(26)]);
var inst_128053 = cljs.core.async.close_BANG_.call(null,inst_128050);
var state_128159__$1 = state_128159;
var statearr_128192_128265 = state_128159__$1;
(statearr_128192_128265[(2)] = inst_128053);

(statearr_128192_128265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (22))){
var inst_128071 = (state_128159[(8)]);
var inst_128074 = cljs.core.async.close_BANG_.call(null,inst_128071);
var state_128159__$1 = state_128159;
var statearr_128193_128266 = state_128159__$1;
(statearr_128193_128266[(2)] = inst_128074);

(statearr_128193_128266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (36))){
var inst_128118 = (state_128159[(25)]);
var inst_128122 = cljs.core.chunk_first.call(null,inst_128118);
var inst_128123 = cljs.core.chunk_rest.call(null,inst_128118);
var inst_128124 = cljs.core.count.call(null,inst_128122);
var inst_128099 = inst_128123;
var inst_128100 = inst_128122;
var inst_128101 = inst_128124;
var inst_128102 = (0);
var state_128159__$1 = (function (){var statearr_128194 = state_128159;
(statearr_128194[(20)] = inst_128099);

(statearr_128194[(21)] = inst_128101);

(statearr_128194[(10)] = inst_128100);

(statearr_128194[(11)] = inst_128102);

return statearr_128194;
})();
var statearr_128195_128267 = state_128159__$1;
(statearr_128195_128267[(2)] = null);

(statearr_128195_128267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (41))){
var inst_128118 = (state_128159[(25)]);
var inst_128134 = (state_128159[(2)]);
var inst_128135 = cljs.core.next.call(null,inst_128118);
var inst_128099 = inst_128135;
var inst_128100 = null;
var inst_128101 = (0);
var inst_128102 = (0);
var state_128159__$1 = (function (){var statearr_128196 = state_128159;
(statearr_128196[(20)] = inst_128099);

(statearr_128196[(21)] = inst_128101);

(statearr_128196[(10)] = inst_128100);

(statearr_128196[(11)] = inst_128102);

(statearr_128196[(27)] = inst_128134);

return statearr_128196;
})();
var statearr_128197_128268 = state_128159__$1;
(statearr_128197_128268[(2)] = null);

(statearr_128197_128268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (43))){
var state_128159__$1 = state_128159;
var statearr_128198_128269 = state_128159__$1;
(statearr_128198_128269[(2)] = null);

(statearr_128198_128269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (29))){
var inst_128143 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128199_128270 = state_128159__$1;
(statearr_128199_128270[(2)] = inst_128143);

(statearr_128199_128270[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (44))){
var inst_128152 = (state_128159[(2)]);
var state_128159__$1 = (function (){var statearr_128200 = state_128159;
(statearr_128200[(28)] = inst_128152);

return statearr_128200;
})();
var statearr_128201_128271 = state_128159__$1;
(statearr_128201_128271[(2)] = null);

(statearr_128201_128271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (6))){
var inst_128091 = (state_128159[(29)]);
var inst_128090 = cljs.core.deref.call(null,cs);
var inst_128091__$1 = cljs.core.keys.call(null,inst_128090);
var inst_128092 = cljs.core.count.call(null,inst_128091__$1);
var inst_128093 = cljs.core.reset_BANG_.call(null,dctr,inst_128092);
var inst_128098 = cljs.core.seq.call(null,inst_128091__$1);
var inst_128099 = inst_128098;
var inst_128100 = null;
var inst_128101 = (0);
var inst_128102 = (0);
var state_128159__$1 = (function (){var statearr_128202 = state_128159;
(statearr_128202[(20)] = inst_128099);

(statearr_128202[(21)] = inst_128101);

(statearr_128202[(30)] = inst_128093);

(statearr_128202[(10)] = inst_128100);

(statearr_128202[(11)] = inst_128102);

(statearr_128202[(29)] = inst_128091__$1);

return statearr_128202;
})();
var statearr_128203_128272 = state_128159__$1;
(statearr_128203_128272[(2)] = null);

(statearr_128203_128272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (28))){
var inst_128118 = (state_128159[(25)]);
var inst_128099 = (state_128159[(20)]);
var inst_128118__$1 = cljs.core.seq.call(null,inst_128099);
var state_128159__$1 = (function (){var statearr_128204 = state_128159;
(statearr_128204[(25)] = inst_128118__$1);

return statearr_128204;
})();
if(inst_128118__$1){
var statearr_128205_128273 = state_128159__$1;
(statearr_128205_128273[(1)] = (33));

} else {
var statearr_128206_128274 = state_128159__$1;
(statearr_128206_128274[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (25))){
var inst_128101 = (state_128159[(21)]);
var inst_128102 = (state_128159[(11)]);
var inst_128104 = (inst_128102 < inst_128101);
var inst_128105 = inst_128104;
var state_128159__$1 = state_128159;
if(cljs.core.truth_(inst_128105)){
var statearr_128207_128275 = state_128159__$1;
(statearr_128207_128275[(1)] = (27));

} else {
var statearr_128208_128276 = state_128159__$1;
(statearr_128208_128276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (34))){
var state_128159__$1 = state_128159;
var statearr_128209_128277 = state_128159__$1;
(statearr_128209_128277[(2)] = null);

(statearr_128209_128277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (17))){
var state_128159__$1 = state_128159;
var statearr_128210_128278 = state_128159__$1;
(statearr_128210_128278[(2)] = null);

(statearr_128210_128278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (3))){
var inst_128157 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128159__$1,inst_128157);
} else {
if((state_val_128160 === (12))){
var inst_128086 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128211_128279 = state_128159__$1;
(statearr_128211_128279[(2)] = inst_128086);

(statearr_128211_128279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (2))){
var state_128159__$1 = state_128159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128159__$1,(4),ch);
} else {
if((state_val_128160 === (23))){
var state_128159__$1 = state_128159;
var statearr_128212_128280 = state_128159__$1;
(statearr_128212_128280[(2)] = null);

(statearr_128212_128280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (35))){
var inst_128141 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128213_128281 = state_128159__$1;
(statearr_128213_128281[(2)] = inst_128141);

(statearr_128213_128281[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (19))){
var inst_128060 = (state_128159[(7)]);
var inst_128064 = cljs.core.chunk_first.call(null,inst_128060);
var inst_128065 = cljs.core.chunk_rest.call(null,inst_128060);
var inst_128066 = cljs.core.count.call(null,inst_128064);
var inst_128040 = inst_128065;
var inst_128041 = inst_128064;
var inst_128042 = inst_128066;
var inst_128043 = (0);
var state_128159__$1 = (function (){var statearr_128214 = state_128159;
(statearr_128214[(13)] = inst_128040);

(statearr_128214[(15)] = inst_128042);

(statearr_128214[(16)] = inst_128041);

(statearr_128214[(17)] = inst_128043);

return statearr_128214;
})();
var statearr_128215_128282 = state_128159__$1;
(statearr_128215_128282[(2)] = null);

(statearr_128215_128282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (11))){
var inst_128040 = (state_128159[(13)]);
var inst_128060 = (state_128159[(7)]);
var inst_128060__$1 = cljs.core.seq.call(null,inst_128040);
var state_128159__$1 = (function (){var statearr_128216 = state_128159;
(statearr_128216[(7)] = inst_128060__$1);

return statearr_128216;
})();
if(inst_128060__$1){
var statearr_128217_128283 = state_128159__$1;
(statearr_128217_128283[(1)] = (16));

} else {
var statearr_128218_128284 = state_128159__$1;
(statearr_128218_128284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (9))){
var inst_128088 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128219_128285 = state_128159__$1;
(statearr_128219_128285[(2)] = inst_128088);

(statearr_128219_128285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (5))){
var inst_128038 = cljs.core.deref.call(null,cs);
var inst_128039 = cljs.core.seq.call(null,inst_128038);
var inst_128040 = inst_128039;
var inst_128041 = null;
var inst_128042 = (0);
var inst_128043 = (0);
var state_128159__$1 = (function (){var statearr_128220 = state_128159;
(statearr_128220[(13)] = inst_128040);

(statearr_128220[(15)] = inst_128042);

(statearr_128220[(16)] = inst_128041);

(statearr_128220[(17)] = inst_128043);

return statearr_128220;
})();
var statearr_128221_128286 = state_128159__$1;
(statearr_128221_128286[(2)] = null);

(statearr_128221_128286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (14))){
var state_128159__$1 = state_128159;
var statearr_128222_128287 = state_128159__$1;
(statearr_128222_128287[(2)] = null);

(statearr_128222_128287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (45))){
var inst_128149 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128223_128288 = state_128159__$1;
(statearr_128223_128288[(2)] = inst_128149);

(statearr_128223_128288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (26))){
var inst_128091 = (state_128159[(29)]);
var inst_128145 = (state_128159[(2)]);
var inst_128146 = cljs.core.seq.call(null,inst_128091);
var state_128159__$1 = (function (){var statearr_128224 = state_128159;
(statearr_128224[(31)] = inst_128145);

return statearr_128224;
})();
if(inst_128146){
var statearr_128225_128289 = state_128159__$1;
(statearr_128225_128289[(1)] = (42));

} else {
var statearr_128226_128290 = state_128159__$1;
(statearr_128226_128290[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (16))){
var inst_128060 = (state_128159[(7)]);
var inst_128062 = cljs.core.chunked_seq_QMARK_.call(null,inst_128060);
var state_128159__$1 = state_128159;
if(inst_128062){
var statearr_128227_128291 = state_128159__$1;
(statearr_128227_128291[(1)] = (19));

} else {
var statearr_128228_128292 = state_128159__$1;
(statearr_128228_128292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (38))){
var inst_128138 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128229_128293 = state_128159__$1;
(statearr_128229_128293[(2)] = inst_128138);

(statearr_128229_128293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (30))){
var state_128159__$1 = state_128159;
var statearr_128230_128294 = state_128159__$1;
(statearr_128230_128294[(2)] = null);

(statearr_128230_128294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (10))){
var inst_128041 = (state_128159[(16)]);
var inst_128043 = (state_128159[(17)]);
var inst_128049 = cljs.core._nth.call(null,inst_128041,inst_128043);
var inst_128050 = cljs.core.nth.call(null,inst_128049,(0),null);
var inst_128051 = cljs.core.nth.call(null,inst_128049,(1),null);
var state_128159__$1 = (function (){var statearr_128231 = state_128159;
(statearr_128231[(26)] = inst_128050);

return statearr_128231;
})();
if(cljs.core.truth_(inst_128051)){
var statearr_128232_128295 = state_128159__$1;
(statearr_128232_128295[(1)] = (13));

} else {
var statearr_128233_128296 = state_128159__$1;
(statearr_128233_128296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (18))){
var inst_128084 = (state_128159[(2)]);
var state_128159__$1 = state_128159;
var statearr_128234_128297 = state_128159__$1;
(statearr_128234_128297[(2)] = inst_128084);

(statearr_128234_128297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (42))){
var state_128159__$1 = state_128159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128159__$1,(45),dchan);
} else {
if((state_val_128160 === (37))){
var inst_128118 = (state_128159[(25)]);
var inst_128127 = (state_128159[(23)]);
var inst_128031 = (state_128159[(12)]);
var inst_128127__$1 = cljs.core.first.call(null,inst_128118);
var inst_128128 = cljs.core.async.put_BANG_.call(null,inst_128127__$1,inst_128031,done);
var state_128159__$1 = (function (){var statearr_128235 = state_128159;
(statearr_128235[(23)] = inst_128127__$1);

return statearr_128235;
})();
if(cljs.core.truth_(inst_128128)){
var statearr_128236_128298 = state_128159__$1;
(statearr_128236_128298[(1)] = (39));

} else {
var statearr_128237_128299 = state_128159__$1;
(statearr_128237_128299[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128160 === (8))){
var inst_128042 = (state_128159[(15)]);
var inst_128043 = (state_128159[(17)]);
var inst_128045 = (inst_128043 < inst_128042);
var inst_128046 = inst_128045;
var state_128159__$1 = state_128159;
if(cljs.core.truth_(inst_128046)){
var statearr_128238_128300 = state_128159__$1;
(statearr_128238_128300[(1)] = (10));

} else {
var statearr_128239_128301 = state_128159__$1;
(statearr_128239_128301[(1)] = (11));

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
});})(c__7043__auto___128247,cs,m,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___128247,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_128243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128243[(0)] = state_machine__6988__auto__);

(statearr_128243[(1)] = (1));

return statearr_128243;
});
var state_machine__6988__auto____1 = (function (state_128159){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_128159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e128244){if((e128244 instanceof Object)){
var ex__6991__auto__ = e128244;
var statearr_128245_128302 = state_128159;
(statearr_128245_128302[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128303 = state_128159;
state_128159 = G__128303;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_128159){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_128159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___128247,cs,m,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_128246 = f__7044__auto__.call(null);
(statearr_128246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___128247);

return statearr_128246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___128247,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj128305 = {};
return obj128305;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__128306){
var map__128311 = p__128306;
var map__128311__$1 = ((cljs.core.seq_QMARK_.call(null,map__128311))?cljs.core.apply.call(null,cljs.core.hash_map,map__128311):map__128311);
var opts = map__128311__$1;
var statearr_128312_128315 = state;
(statearr_128312_128315[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__128311,map__128311__$1,opts){
return (function (val){
var statearr_128313_128316 = state;
(statearr_128313_128316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__128311,map__128311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_128314_128317 = state;
(statearr_128314_128317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__128306 = null;
if (arguments.length > 3) {
  p__128306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__128306);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__128318){
var state = cljs.core.first(arglist__128318);
arglist__128318 = cljs.core.next(arglist__128318);
var cont_block = cljs.core.first(arglist__128318);
arglist__128318 = cljs.core.next(arglist__128318);
var ports = cljs.core.first(arglist__128318);
var p__128306 = cljs.core.rest(arglist__128318);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__128306);
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
if(typeof cljs.core.async.t128438 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t128438 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta128439){
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
this.meta128439 = meta128439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t128438.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t128438.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t128438.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t128438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_128440){
var self__ = this;
var _128440__$1 = this;
return self__.meta128439;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_128440,meta128439__$1){
var self__ = this;
var _128440__$1 = this;
return (new cljs.core.async.t128438(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta128439__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t128438.cljs$lang$type = true;

cljs.core.async.t128438.cljs$lang$ctorStr = "cljs.core.async/t128438";

cljs.core.async.t128438.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t128438");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t128438 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t128438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta128439){
return (new cljs.core.async.t128438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta128439));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t128438(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___128557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_128510){
var state_val_128511 = (state_128510[(1)]);
if((state_val_128511 === (7))){
var inst_128454 = (state_128510[(7)]);
var inst_128459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_128454);
var state_128510__$1 = state_128510;
var statearr_128512_128558 = state_128510__$1;
(statearr_128512_128558[(2)] = inst_128459);

(statearr_128512_128558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (20))){
var inst_128469 = (state_128510[(8)]);
var state_128510__$1 = state_128510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128510__$1,(23),out,inst_128469);
} else {
if((state_val_128511 === (1))){
var inst_128444 = (state_128510[(9)]);
var inst_128444__$1 = calc_state.call(null);
var inst_128445 = cljs.core.seq_QMARK_.call(null,inst_128444__$1);
var state_128510__$1 = (function (){var statearr_128513 = state_128510;
(statearr_128513[(9)] = inst_128444__$1);

return statearr_128513;
})();
if(inst_128445){
var statearr_128514_128559 = state_128510__$1;
(statearr_128514_128559[(1)] = (2));

} else {
var statearr_128515_128560 = state_128510__$1;
(statearr_128515_128560[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (24))){
var inst_128462 = (state_128510[(10)]);
var inst_128454 = inst_128462;
var state_128510__$1 = (function (){var statearr_128516 = state_128510;
(statearr_128516[(7)] = inst_128454);

return statearr_128516;
})();
var statearr_128517_128561 = state_128510__$1;
(statearr_128517_128561[(2)] = null);

(statearr_128517_128561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (4))){
var inst_128444 = (state_128510[(9)]);
var inst_128450 = (state_128510[(2)]);
var inst_128451 = cljs.core.get.call(null,inst_128450,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_128452 = cljs.core.get.call(null,inst_128450,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_128453 = cljs.core.get.call(null,inst_128450,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_128454 = inst_128444;
var state_128510__$1 = (function (){var statearr_128518 = state_128510;
(statearr_128518[(11)] = inst_128452);

(statearr_128518[(12)] = inst_128451);

(statearr_128518[(13)] = inst_128453);

(statearr_128518[(7)] = inst_128454);

return statearr_128518;
})();
var statearr_128519_128562 = state_128510__$1;
(statearr_128519_128562[(2)] = null);

(statearr_128519_128562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (15))){
var state_128510__$1 = state_128510;
var statearr_128520_128563 = state_128510__$1;
(statearr_128520_128563[(2)] = null);

(statearr_128520_128563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (21))){
var inst_128462 = (state_128510[(10)]);
var inst_128454 = inst_128462;
var state_128510__$1 = (function (){var statearr_128521 = state_128510;
(statearr_128521[(7)] = inst_128454);

return statearr_128521;
})();
var statearr_128522_128564 = state_128510__$1;
(statearr_128522_128564[(2)] = null);

(statearr_128522_128564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (13))){
var inst_128506 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
var statearr_128523_128565 = state_128510__$1;
(statearr_128523_128565[(2)] = inst_128506);

(statearr_128523_128565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (22))){
var inst_128504 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
var statearr_128524_128566 = state_128510__$1;
(statearr_128524_128566[(2)] = inst_128504);

(statearr_128524_128566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (6))){
var inst_128508 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128510__$1,inst_128508);
} else {
if((state_val_128511 === (25))){
var state_128510__$1 = state_128510;
var statearr_128525_128567 = state_128510__$1;
(statearr_128525_128567[(2)] = null);

(statearr_128525_128567[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (17))){
var inst_128484 = (state_128510[(14)]);
var state_128510__$1 = state_128510;
var statearr_128526_128568 = state_128510__$1;
(statearr_128526_128568[(2)] = inst_128484);

(statearr_128526_128568[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (3))){
var inst_128444 = (state_128510[(9)]);
var state_128510__$1 = state_128510;
var statearr_128527_128569 = state_128510__$1;
(statearr_128527_128569[(2)] = inst_128444);

(statearr_128527_128569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (12))){
var inst_128470 = (state_128510[(15)]);
var inst_128465 = (state_128510[(16)]);
var inst_128484 = (state_128510[(14)]);
var inst_128484__$1 = inst_128465.call(null,inst_128470);
var state_128510__$1 = (function (){var statearr_128528 = state_128510;
(statearr_128528[(14)] = inst_128484__$1);

return statearr_128528;
})();
if(cljs.core.truth_(inst_128484__$1)){
var statearr_128529_128570 = state_128510__$1;
(statearr_128529_128570[(1)] = (17));

} else {
var statearr_128530_128571 = state_128510__$1;
(statearr_128530_128571[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (2))){
var inst_128444 = (state_128510[(9)]);
var inst_128447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_128444);
var state_128510__$1 = state_128510;
var statearr_128531_128572 = state_128510__$1;
(statearr_128531_128572[(2)] = inst_128447);

(statearr_128531_128572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (23))){
var inst_128495 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
if(cljs.core.truth_(inst_128495)){
var statearr_128532_128573 = state_128510__$1;
(statearr_128532_128573[(1)] = (24));

} else {
var statearr_128533_128574 = state_128510__$1;
(statearr_128533_128574[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (19))){
var inst_128492 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
if(cljs.core.truth_(inst_128492)){
var statearr_128534_128575 = state_128510__$1;
(statearr_128534_128575[(1)] = (20));

} else {
var statearr_128535_128576 = state_128510__$1;
(statearr_128535_128576[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (11))){
var inst_128469 = (state_128510[(8)]);
var inst_128475 = (inst_128469 == null);
var state_128510__$1 = state_128510;
if(cljs.core.truth_(inst_128475)){
var statearr_128536_128577 = state_128510__$1;
(statearr_128536_128577[(1)] = (14));

} else {
var statearr_128537_128578 = state_128510__$1;
(statearr_128537_128578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (9))){
var inst_128462 = (state_128510[(10)]);
var inst_128462__$1 = (state_128510[(2)]);
var inst_128463 = cljs.core.get.call(null,inst_128462__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_128464 = cljs.core.get.call(null,inst_128462__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_128465 = cljs.core.get.call(null,inst_128462__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_128510__$1 = (function (){var statearr_128538 = state_128510;
(statearr_128538[(17)] = inst_128464);

(statearr_128538[(16)] = inst_128465);

(statearr_128538[(10)] = inst_128462__$1);

return statearr_128538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_128510__$1,(10),inst_128463);
} else {
if((state_val_128511 === (5))){
var inst_128454 = (state_128510[(7)]);
var inst_128457 = cljs.core.seq_QMARK_.call(null,inst_128454);
var state_128510__$1 = state_128510;
if(inst_128457){
var statearr_128539_128579 = state_128510__$1;
(statearr_128539_128579[(1)] = (7));

} else {
var statearr_128540_128580 = state_128510__$1;
(statearr_128540_128580[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (14))){
var inst_128470 = (state_128510[(15)]);
var inst_128477 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_128470);
var state_128510__$1 = state_128510;
var statearr_128541_128581 = state_128510__$1;
(statearr_128541_128581[(2)] = inst_128477);

(statearr_128541_128581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (26))){
var inst_128500 = (state_128510[(2)]);
var state_128510__$1 = state_128510;
var statearr_128542_128582 = state_128510__$1;
(statearr_128542_128582[(2)] = inst_128500);

(statearr_128542_128582[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (16))){
var inst_128480 = (state_128510[(2)]);
var inst_128481 = calc_state.call(null);
var inst_128454 = inst_128481;
var state_128510__$1 = (function (){var statearr_128543 = state_128510;
(statearr_128543[(18)] = inst_128480);

(statearr_128543[(7)] = inst_128454);

return statearr_128543;
})();
var statearr_128544_128583 = state_128510__$1;
(statearr_128544_128583[(2)] = null);

(statearr_128544_128583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (10))){
var inst_128469 = (state_128510[(8)]);
var inst_128470 = (state_128510[(15)]);
var inst_128468 = (state_128510[(2)]);
var inst_128469__$1 = cljs.core.nth.call(null,inst_128468,(0),null);
var inst_128470__$1 = cljs.core.nth.call(null,inst_128468,(1),null);
var inst_128471 = (inst_128469__$1 == null);
var inst_128472 = cljs.core._EQ_.call(null,inst_128470__$1,change);
var inst_128473 = (inst_128471) || (inst_128472);
var state_128510__$1 = (function (){var statearr_128545 = state_128510;
(statearr_128545[(8)] = inst_128469__$1);

(statearr_128545[(15)] = inst_128470__$1);

return statearr_128545;
})();
if(cljs.core.truth_(inst_128473)){
var statearr_128546_128584 = state_128510__$1;
(statearr_128546_128584[(1)] = (11));

} else {
var statearr_128547_128585 = state_128510__$1;
(statearr_128547_128585[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (18))){
var inst_128464 = (state_128510[(17)]);
var inst_128470 = (state_128510[(15)]);
var inst_128465 = (state_128510[(16)]);
var inst_128487 = cljs.core.empty_QMARK_.call(null,inst_128465);
var inst_128488 = inst_128464.call(null,inst_128470);
var inst_128489 = cljs.core.not.call(null,inst_128488);
var inst_128490 = (inst_128487) && (inst_128489);
var state_128510__$1 = state_128510;
var statearr_128548_128586 = state_128510__$1;
(statearr_128548_128586[(2)] = inst_128490);

(statearr_128548_128586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128511 === (8))){
var inst_128454 = (state_128510[(7)]);
var state_128510__$1 = state_128510;
var statearr_128549_128587 = state_128510__$1;
(statearr_128549_128587[(2)] = inst_128454);

(statearr_128549_128587[(1)] = (9));


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
});})(c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6987__auto__,c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_128553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128553[(0)] = state_machine__6988__auto__);

(statearr_128553[(1)] = (1));

return statearr_128553;
});
var state_machine__6988__auto____1 = (function (state_128510){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_128510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e128554){if((e128554 instanceof Object)){
var ex__6991__auto__ = e128554;
var statearr_128555_128588 = state_128510;
(statearr_128555_128588[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128589 = state_128510;
state_128510 = G__128589;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_128510){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_128510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7045__auto__ = (function (){var statearr_128556 = f__7044__auto__.call(null);
(statearr_128556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___128557);

return statearr_128556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___128557,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj128591 = {};
return obj128591;
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
return (function (p1__128592_SHARP_){
if(cljs.core.truth_(p1__128592_SHARP_.call(null,topic))){
return p1__128592_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__128592_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t128715 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t128715 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta128716){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta128716 = meta128716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t128715.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t128715.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t128715.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t128715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t128715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t128715.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t128715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t128715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_128717){
var self__ = this;
var _128717__$1 = this;
return self__.meta128716;
});})(mults,ensure_mult))
;

cljs.core.async.t128715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_128717,meta128716__$1){
var self__ = this;
var _128717__$1 = this;
return (new cljs.core.async.t128715(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta128716__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t128715.cljs$lang$type = true;

cljs.core.async.t128715.cljs$lang$ctorStr = "cljs.core.async/t128715";

cljs.core.async.t128715.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t128715");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t128715 = ((function (mults,ensure_mult){
return (function __GT_t128715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta128716){
return (new cljs.core.async.t128715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta128716));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t128715(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7043__auto___128837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___128837,mults,ensure_mult,p){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___128837,mults,ensure_mult,p){
return (function (state_128789){
var state_val_128790 = (state_128789[(1)]);
if((state_val_128790 === (7))){
var inst_128785 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128791_128838 = state_128789__$1;
(statearr_128791_128838[(2)] = inst_128785);

(statearr_128791_128838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (20))){
var state_128789__$1 = state_128789;
var statearr_128792_128839 = state_128789__$1;
(statearr_128792_128839[(2)] = null);

(statearr_128792_128839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (1))){
var state_128789__$1 = state_128789;
var statearr_128793_128840 = state_128789__$1;
(statearr_128793_128840[(2)] = null);

(statearr_128793_128840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (24))){
var inst_128768 = (state_128789[(7)]);
var inst_128777 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_128768);
var state_128789__$1 = state_128789;
var statearr_128794_128841 = state_128789__$1;
(statearr_128794_128841[(2)] = inst_128777);

(statearr_128794_128841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (4))){
var inst_128720 = (state_128789[(8)]);
var inst_128720__$1 = (state_128789[(2)]);
var inst_128721 = (inst_128720__$1 == null);
var state_128789__$1 = (function (){var statearr_128795 = state_128789;
(statearr_128795[(8)] = inst_128720__$1);

return statearr_128795;
})();
if(cljs.core.truth_(inst_128721)){
var statearr_128796_128842 = state_128789__$1;
(statearr_128796_128842[(1)] = (5));

} else {
var statearr_128797_128843 = state_128789__$1;
(statearr_128797_128843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (15))){
var inst_128762 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128798_128844 = state_128789__$1;
(statearr_128798_128844[(2)] = inst_128762);

(statearr_128798_128844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (21))){
var inst_128782 = (state_128789[(2)]);
var state_128789__$1 = (function (){var statearr_128799 = state_128789;
(statearr_128799[(9)] = inst_128782);

return statearr_128799;
})();
var statearr_128800_128845 = state_128789__$1;
(statearr_128800_128845[(2)] = null);

(statearr_128800_128845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (13))){
var inst_128744 = (state_128789[(10)]);
var inst_128746 = cljs.core.chunked_seq_QMARK_.call(null,inst_128744);
var state_128789__$1 = state_128789;
if(inst_128746){
var statearr_128801_128846 = state_128789__$1;
(statearr_128801_128846[(1)] = (16));

} else {
var statearr_128802_128847 = state_128789__$1;
(statearr_128802_128847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (22))){
var inst_128774 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
if(cljs.core.truth_(inst_128774)){
var statearr_128803_128848 = state_128789__$1;
(statearr_128803_128848[(1)] = (23));

} else {
var statearr_128804_128849 = state_128789__$1;
(statearr_128804_128849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (6))){
var inst_128768 = (state_128789[(7)]);
var inst_128720 = (state_128789[(8)]);
var inst_128770 = (state_128789[(11)]);
var inst_128768__$1 = topic_fn.call(null,inst_128720);
var inst_128769 = cljs.core.deref.call(null,mults);
var inst_128770__$1 = cljs.core.get.call(null,inst_128769,inst_128768__$1);
var state_128789__$1 = (function (){var statearr_128805 = state_128789;
(statearr_128805[(7)] = inst_128768__$1);

(statearr_128805[(11)] = inst_128770__$1);

return statearr_128805;
})();
if(cljs.core.truth_(inst_128770__$1)){
var statearr_128806_128850 = state_128789__$1;
(statearr_128806_128850[(1)] = (19));

} else {
var statearr_128807_128851 = state_128789__$1;
(statearr_128807_128851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (25))){
var inst_128779 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128808_128852 = state_128789__$1;
(statearr_128808_128852[(2)] = inst_128779);

(statearr_128808_128852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (17))){
var inst_128744 = (state_128789[(10)]);
var inst_128753 = cljs.core.first.call(null,inst_128744);
var inst_128754 = cljs.core.async.muxch_STAR_.call(null,inst_128753);
var inst_128755 = cljs.core.async.close_BANG_.call(null,inst_128754);
var inst_128756 = cljs.core.next.call(null,inst_128744);
var inst_128730 = inst_128756;
var inst_128731 = null;
var inst_128732 = (0);
var inst_128733 = (0);
var state_128789__$1 = (function (){var statearr_128809 = state_128789;
(statearr_128809[(12)] = inst_128733);

(statearr_128809[(13)] = inst_128732);

(statearr_128809[(14)] = inst_128755);

(statearr_128809[(15)] = inst_128731);

(statearr_128809[(16)] = inst_128730);

return statearr_128809;
})();
var statearr_128810_128853 = state_128789__$1;
(statearr_128810_128853[(2)] = null);

(statearr_128810_128853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (3))){
var inst_128787 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128789__$1,inst_128787);
} else {
if((state_val_128790 === (12))){
var inst_128764 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128811_128854 = state_128789__$1;
(statearr_128811_128854[(2)] = inst_128764);

(statearr_128811_128854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (2))){
var state_128789__$1 = state_128789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128789__$1,(4),ch);
} else {
if((state_val_128790 === (23))){
var state_128789__$1 = state_128789;
var statearr_128812_128855 = state_128789__$1;
(statearr_128812_128855[(2)] = null);

(statearr_128812_128855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (19))){
var inst_128720 = (state_128789[(8)]);
var inst_128770 = (state_128789[(11)]);
var inst_128772 = cljs.core.async.muxch_STAR_.call(null,inst_128770);
var state_128789__$1 = state_128789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128789__$1,(22),inst_128772,inst_128720);
} else {
if((state_val_128790 === (11))){
var inst_128730 = (state_128789[(16)]);
var inst_128744 = (state_128789[(10)]);
var inst_128744__$1 = cljs.core.seq.call(null,inst_128730);
var state_128789__$1 = (function (){var statearr_128813 = state_128789;
(statearr_128813[(10)] = inst_128744__$1);

return statearr_128813;
})();
if(inst_128744__$1){
var statearr_128814_128856 = state_128789__$1;
(statearr_128814_128856[(1)] = (13));

} else {
var statearr_128815_128857 = state_128789__$1;
(statearr_128815_128857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (9))){
var inst_128766 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128816_128858 = state_128789__$1;
(statearr_128816_128858[(2)] = inst_128766);

(statearr_128816_128858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (5))){
var inst_128727 = cljs.core.deref.call(null,mults);
var inst_128728 = cljs.core.vals.call(null,inst_128727);
var inst_128729 = cljs.core.seq.call(null,inst_128728);
var inst_128730 = inst_128729;
var inst_128731 = null;
var inst_128732 = (0);
var inst_128733 = (0);
var state_128789__$1 = (function (){var statearr_128817 = state_128789;
(statearr_128817[(12)] = inst_128733);

(statearr_128817[(13)] = inst_128732);

(statearr_128817[(15)] = inst_128731);

(statearr_128817[(16)] = inst_128730);

return statearr_128817;
})();
var statearr_128818_128859 = state_128789__$1;
(statearr_128818_128859[(2)] = null);

(statearr_128818_128859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (14))){
var state_128789__$1 = state_128789;
var statearr_128822_128860 = state_128789__$1;
(statearr_128822_128860[(2)] = null);

(statearr_128822_128860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (16))){
var inst_128744 = (state_128789[(10)]);
var inst_128748 = cljs.core.chunk_first.call(null,inst_128744);
var inst_128749 = cljs.core.chunk_rest.call(null,inst_128744);
var inst_128750 = cljs.core.count.call(null,inst_128748);
var inst_128730 = inst_128749;
var inst_128731 = inst_128748;
var inst_128732 = inst_128750;
var inst_128733 = (0);
var state_128789__$1 = (function (){var statearr_128823 = state_128789;
(statearr_128823[(12)] = inst_128733);

(statearr_128823[(13)] = inst_128732);

(statearr_128823[(15)] = inst_128731);

(statearr_128823[(16)] = inst_128730);

return statearr_128823;
})();
var statearr_128824_128861 = state_128789__$1;
(statearr_128824_128861[(2)] = null);

(statearr_128824_128861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (10))){
var inst_128733 = (state_128789[(12)]);
var inst_128732 = (state_128789[(13)]);
var inst_128731 = (state_128789[(15)]);
var inst_128730 = (state_128789[(16)]);
var inst_128738 = cljs.core._nth.call(null,inst_128731,inst_128733);
var inst_128739 = cljs.core.async.muxch_STAR_.call(null,inst_128738);
var inst_128740 = cljs.core.async.close_BANG_.call(null,inst_128739);
var inst_128741 = (inst_128733 + (1));
var tmp128819 = inst_128732;
var tmp128820 = inst_128731;
var tmp128821 = inst_128730;
var inst_128730__$1 = tmp128821;
var inst_128731__$1 = tmp128820;
var inst_128732__$1 = tmp128819;
var inst_128733__$1 = inst_128741;
var state_128789__$1 = (function (){var statearr_128825 = state_128789;
(statearr_128825[(12)] = inst_128733__$1);

(statearr_128825[(13)] = inst_128732__$1);

(statearr_128825[(17)] = inst_128740);

(statearr_128825[(15)] = inst_128731__$1);

(statearr_128825[(16)] = inst_128730__$1);

return statearr_128825;
})();
var statearr_128826_128862 = state_128789__$1;
(statearr_128826_128862[(2)] = null);

(statearr_128826_128862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (18))){
var inst_128759 = (state_128789[(2)]);
var state_128789__$1 = state_128789;
var statearr_128827_128863 = state_128789__$1;
(statearr_128827_128863[(2)] = inst_128759);

(statearr_128827_128863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128790 === (8))){
var inst_128733 = (state_128789[(12)]);
var inst_128732 = (state_128789[(13)]);
var inst_128735 = (inst_128733 < inst_128732);
var inst_128736 = inst_128735;
var state_128789__$1 = state_128789;
if(cljs.core.truth_(inst_128736)){
var statearr_128828_128864 = state_128789__$1;
(statearr_128828_128864[(1)] = (10));

} else {
var statearr_128829_128865 = state_128789__$1;
(statearr_128829_128865[(1)] = (11));

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
});})(c__7043__auto___128837,mults,ensure_mult,p))
;
return ((function (switch__6987__auto__,c__7043__auto___128837,mults,ensure_mult,p){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_128833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128833[(0)] = state_machine__6988__auto__);

(statearr_128833[(1)] = (1));

return statearr_128833;
});
var state_machine__6988__auto____1 = (function (state_128789){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_128789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e128834){if((e128834 instanceof Object)){
var ex__6991__auto__ = e128834;
var statearr_128835_128866 = state_128789;
(statearr_128835_128866[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128867 = state_128789;
state_128789 = G__128867;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_128789){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_128789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___128837,mults,ensure_mult,p))
})();
var state__7045__auto__ = (function (){var statearr_128836 = f__7044__auto__.call(null);
(statearr_128836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___128837);

return statearr_128836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___128837,mults,ensure_mult,p))
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
var c__7043__auto___129004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_128974){
var state_val_128975 = (state_128974[(1)]);
if((state_val_128975 === (7))){
var state_128974__$1 = state_128974;
var statearr_128976_129005 = state_128974__$1;
(statearr_128976_129005[(2)] = null);

(statearr_128976_129005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (1))){
var state_128974__$1 = state_128974;
var statearr_128977_129006 = state_128974__$1;
(statearr_128977_129006[(2)] = null);

(statearr_128977_129006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (4))){
var inst_128938 = (state_128974[(7)]);
var inst_128940 = (inst_128938 < cnt);
var state_128974__$1 = state_128974;
if(cljs.core.truth_(inst_128940)){
var statearr_128978_129007 = state_128974__$1;
(statearr_128978_129007[(1)] = (6));

} else {
var statearr_128979_129008 = state_128974__$1;
(statearr_128979_129008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (15))){
var inst_128970 = (state_128974[(2)]);
var state_128974__$1 = state_128974;
var statearr_128980_129009 = state_128974__$1;
(statearr_128980_129009[(2)] = inst_128970);

(statearr_128980_129009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (13))){
var inst_128963 = cljs.core.async.close_BANG_.call(null,out);
var state_128974__$1 = state_128974;
var statearr_128981_129010 = state_128974__$1;
(statearr_128981_129010[(2)] = inst_128963);

(statearr_128981_129010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (6))){
var state_128974__$1 = state_128974;
var statearr_128982_129011 = state_128974__$1;
(statearr_128982_129011[(2)] = null);

(statearr_128982_129011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (3))){
var inst_128972 = (state_128974[(2)]);
var state_128974__$1 = state_128974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128974__$1,inst_128972);
} else {
if((state_val_128975 === (12))){
var inst_128960 = (state_128974[(8)]);
var inst_128960__$1 = (state_128974[(2)]);
var inst_128961 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_128960__$1);
var state_128974__$1 = (function (){var statearr_128983 = state_128974;
(statearr_128983[(8)] = inst_128960__$1);

return statearr_128983;
})();
if(cljs.core.truth_(inst_128961)){
var statearr_128984_129012 = state_128974__$1;
(statearr_128984_129012[(1)] = (13));

} else {
var statearr_128985_129013 = state_128974__$1;
(statearr_128985_129013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (2))){
var inst_128937 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_128938 = (0);
var state_128974__$1 = (function (){var statearr_128986 = state_128974;
(statearr_128986[(7)] = inst_128938);

(statearr_128986[(9)] = inst_128937);

return statearr_128986;
})();
var statearr_128987_129014 = state_128974__$1;
(statearr_128987_129014[(2)] = null);

(statearr_128987_129014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (11))){
var inst_128938 = (state_128974[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_128974,(10),Object,null,(9));
var inst_128947 = chs__$1.call(null,inst_128938);
var inst_128948 = done.call(null,inst_128938);
var inst_128949 = cljs.core.async.take_BANG_.call(null,inst_128947,inst_128948);
var state_128974__$1 = state_128974;
var statearr_128988_129015 = state_128974__$1;
(statearr_128988_129015[(2)] = inst_128949);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128974__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (9))){
var inst_128938 = (state_128974[(7)]);
var inst_128951 = (state_128974[(2)]);
var inst_128952 = (inst_128938 + (1));
var inst_128938__$1 = inst_128952;
var state_128974__$1 = (function (){var statearr_128989 = state_128974;
(statearr_128989[(7)] = inst_128938__$1);

(statearr_128989[(10)] = inst_128951);

return statearr_128989;
})();
var statearr_128990_129016 = state_128974__$1;
(statearr_128990_129016[(2)] = null);

(statearr_128990_129016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (5))){
var inst_128958 = (state_128974[(2)]);
var state_128974__$1 = (function (){var statearr_128991 = state_128974;
(statearr_128991[(11)] = inst_128958);

return statearr_128991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128974__$1,(12),dchan);
} else {
if((state_val_128975 === (14))){
var inst_128960 = (state_128974[(8)]);
var inst_128965 = cljs.core.apply.call(null,f,inst_128960);
var state_128974__$1 = state_128974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128974__$1,(16),out,inst_128965);
} else {
if((state_val_128975 === (16))){
var inst_128967 = (state_128974[(2)]);
var state_128974__$1 = (function (){var statearr_128992 = state_128974;
(statearr_128992[(12)] = inst_128967);

return statearr_128992;
})();
var statearr_128993_129017 = state_128974__$1;
(statearr_128993_129017[(2)] = null);

(statearr_128993_129017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (10))){
var inst_128942 = (state_128974[(2)]);
var inst_128943 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_128974__$1 = (function (){var statearr_128994 = state_128974;
(statearr_128994[(13)] = inst_128942);

return statearr_128994;
})();
var statearr_128995_129018 = state_128974__$1;
(statearr_128995_129018[(2)] = inst_128943);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128974__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128975 === (8))){
var inst_128956 = (state_128974[(2)]);
var state_128974__$1 = state_128974;
var statearr_128996_129019 = state_128974__$1;
(statearr_128996_129019[(2)] = inst_128956);

(statearr_128996_129019[(1)] = (5));


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
});})(c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6987__auto__,c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129000[(0)] = state_machine__6988__auto__);

(statearr_129000[(1)] = (1));

return statearr_129000;
});
var state_machine__6988__auto____1 = (function (state_128974){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_128974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129001){if((e129001 instanceof Object)){
var ex__6991__auto__ = e129001;
var statearr_129002_129020 = state_128974;
(statearr_129002_129020[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129021 = state_128974;
state_128974 = G__129021;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_128974){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_128974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7045__auto__ = (function (){var statearr_129003 = f__7044__auto__.call(null);
(statearr_129003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129004);

return statearr_129003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129004,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7043__auto___129129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129129,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129129,out){
return (function (state_129105){
var state_val_129106 = (state_129105[(1)]);
if((state_val_129106 === (7))){
var inst_129085 = (state_129105[(7)]);
var inst_129084 = (state_129105[(8)]);
var inst_129084__$1 = (state_129105[(2)]);
var inst_129085__$1 = cljs.core.nth.call(null,inst_129084__$1,(0),null);
var inst_129086 = cljs.core.nth.call(null,inst_129084__$1,(1),null);
var inst_129087 = (inst_129085__$1 == null);
var state_129105__$1 = (function (){var statearr_129107 = state_129105;
(statearr_129107[(7)] = inst_129085__$1);

(statearr_129107[(9)] = inst_129086);

(statearr_129107[(8)] = inst_129084__$1);

return statearr_129107;
})();
if(cljs.core.truth_(inst_129087)){
var statearr_129108_129130 = state_129105__$1;
(statearr_129108_129130[(1)] = (8));

} else {
var statearr_129109_129131 = state_129105__$1;
(statearr_129109_129131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (1))){
var inst_129076 = cljs.core.vec.call(null,chs);
var inst_129077 = inst_129076;
var state_129105__$1 = (function (){var statearr_129110 = state_129105;
(statearr_129110[(10)] = inst_129077);

return statearr_129110;
})();
var statearr_129111_129132 = state_129105__$1;
(statearr_129111_129132[(2)] = null);

(statearr_129111_129132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (4))){
var inst_129077 = (state_129105[(10)]);
var state_129105__$1 = state_129105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_129105__$1,(7),inst_129077);
} else {
if((state_val_129106 === (6))){
var inst_129101 = (state_129105[(2)]);
var state_129105__$1 = state_129105;
var statearr_129112_129133 = state_129105__$1;
(statearr_129112_129133[(2)] = inst_129101);

(statearr_129112_129133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (3))){
var inst_129103 = (state_129105[(2)]);
var state_129105__$1 = state_129105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129105__$1,inst_129103);
} else {
if((state_val_129106 === (2))){
var inst_129077 = (state_129105[(10)]);
var inst_129079 = cljs.core.count.call(null,inst_129077);
var inst_129080 = (inst_129079 > (0));
var state_129105__$1 = state_129105;
if(cljs.core.truth_(inst_129080)){
var statearr_129114_129134 = state_129105__$1;
(statearr_129114_129134[(1)] = (4));

} else {
var statearr_129115_129135 = state_129105__$1;
(statearr_129115_129135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (11))){
var inst_129077 = (state_129105[(10)]);
var inst_129094 = (state_129105[(2)]);
var tmp129113 = inst_129077;
var inst_129077__$1 = tmp129113;
var state_129105__$1 = (function (){var statearr_129116 = state_129105;
(statearr_129116[(11)] = inst_129094);

(statearr_129116[(10)] = inst_129077__$1);

return statearr_129116;
})();
var statearr_129117_129136 = state_129105__$1;
(statearr_129117_129136[(2)] = null);

(statearr_129117_129136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (9))){
var inst_129085 = (state_129105[(7)]);
var state_129105__$1 = state_129105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129105__$1,(11),out,inst_129085);
} else {
if((state_val_129106 === (5))){
var inst_129099 = cljs.core.async.close_BANG_.call(null,out);
var state_129105__$1 = state_129105;
var statearr_129118_129137 = state_129105__$1;
(statearr_129118_129137[(2)] = inst_129099);

(statearr_129118_129137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (10))){
var inst_129097 = (state_129105[(2)]);
var state_129105__$1 = state_129105;
var statearr_129119_129138 = state_129105__$1;
(statearr_129119_129138[(2)] = inst_129097);

(statearr_129119_129138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129106 === (8))){
var inst_129085 = (state_129105[(7)]);
var inst_129086 = (state_129105[(9)]);
var inst_129084 = (state_129105[(8)]);
var inst_129077 = (state_129105[(10)]);
var inst_129089 = (function (){var c = inst_129086;
var v = inst_129085;
var vec__129082 = inst_129084;
var cs = inst_129077;
return ((function (c,v,vec__129082,cs,inst_129085,inst_129086,inst_129084,inst_129077,state_val_129106,c__7043__auto___129129,out){
return (function (p1__129022_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__129022_SHARP_);
});
;})(c,v,vec__129082,cs,inst_129085,inst_129086,inst_129084,inst_129077,state_val_129106,c__7043__auto___129129,out))
})();
var inst_129090 = cljs.core.filterv.call(null,inst_129089,inst_129077);
var inst_129077__$1 = inst_129090;
var state_129105__$1 = (function (){var statearr_129120 = state_129105;
(statearr_129120[(10)] = inst_129077__$1);

return statearr_129120;
})();
var statearr_129121_129139 = state_129105__$1;
(statearr_129121_129139[(2)] = null);

(statearr_129121_129139[(1)] = (2));


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
});})(c__7043__auto___129129,out))
;
return ((function (switch__6987__auto__,c__7043__auto___129129,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129125[(0)] = state_machine__6988__auto__);

(statearr_129125[(1)] = (1));

return statearr_129125;
});
var state_machine__6988__auto____1 = (function (state_129105){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129126){if((e129126 instanceof Object)){
var ex__6991__auto__ = e129126;
var statearr_129127_129140 = state_129105;
(statearr_129127_129140[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129141 = state_129105;
state_129105 = G__129141;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129105){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129129,out))
})();
var state__7045__auto__ = (function (){var statearr_129128 = f__7044__auto__.call(null);
(statearr_129128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129129);

return statearr_129128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129129,out))
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
var c__7043__auto___129234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129234,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129234,out){
return (function (state_129211){
var state_val_129212 = (state_129211[(1)]);
if((state_val_129212 === (7))){
var inst_129193 = (state_129211[(7)]);
var inst_129193__$1 = (state_129211[(2)]);
var inst_129194 = (inst_129193__$1 == null);
var inst_129195 = cljs.core.not.call(null,inst_129194);
var state_129211__$1 = (function (){var statearr_129213 = state_129211;
(statearr_129213[(7)] = inst_129193__$1);

return statearr_129213;
})();
if(inst_129195){
var statearr_129214_129235 = state_129211__$1;
(statearr_129214_129235[(1)] = (8));

} else {
var statearr_129215_129236 = state_129211__$1;
(statearr_129215_129236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (1))){
var inst_129188 = (0);
var state_129211__$1 = (function (){var statearr_129216 = state_129211;
(statearr_129216[(8)] = inst_129188);

return statearr_129216;
})();
var statearr_129217_129237 = state_129211__$1;
(statearr_129217_129237[(2)] = null);

(statearr_129217_129237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (4))){
var state_129211__$1 = state_129211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129211__$1,(7),ch);
} else {
if((state_val_129212 === (6))){
var inst_129206 = (state_129211[(2)]);
var state_129211__$1 = state_129211;
var statearr_129218_129238 = state_129211__$1;
(statearr_129218_129238[(2)] = inst_129206);

(statearr_129218_129238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (3))){
var inst_129208 = (state_129211[(2)]);
var inst_129209 = cljs.core.async.close_BANG_.call(null,out);
var state_129211__$1 = (function (){var statearr_129219 = state_129211;
(statearr_129219[(9)] = inst_129208);

return statearr_129219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129211__$1,inst_129209);
} else {
if((state_val_129212 === (2))){
var inst_129188 = (state_129211[(8)]);
var inst_129190 = (inst_129188 < n);
var state_129211__$1 = state_129211;
if(cljs.core.truth_(inst_129190)){
var statearr_129220_129239 = state_129211__$1;
(statearr_129220_129239[(1)] = (4));

} else {
var statearr_129221_129240 = state_129211__$1;
(statearr_129221_129240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (11))){
var inst_129188 = (state_129211[(8)]);
var inst_129198 = (state_129211[(2)]);
var inst_129199 = (inst_129188 + (1));
var inst_129188__$1 = inst_129199;
var state_129211__$1 = (function (){var statearr_129222 = state_129211;
(statearr_129222[(8)] = inst_129188__$1);

(statearr_129222[(10)] = inst_129198);

return statearr_129222;
})();
var statearr_129223_129241 = state_129211__$1;
(statearr_129223_129241[(2)] = null);

(statearr_129223_129241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (9))){
var state_129211__$1 = state_129211;
var statearr_129224_129242 = state_129211__$1;
(statearr_129224_129242[(2)] = null);

(statearr_129224_129242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (5))){
var state_129211__$1 = state_129211;
var statearr_129225_129243 = state_129211__$1;
(statearr_129225_129243[(2)] = null);

(statearr_129225_129243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (10))){
var inst_129203 = (state_129211[(2)]);
var state_129211__$1 = state_129211;
var statearr_129226_129244 = state_129211__$1;
(statearr_129226_129244[(2)] = inst_129203);

(statearr_129226_129244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129212 === (8))){
var inst_129193 = (state_129211[(7)]);
var state_129211__$1 = state_129211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129211__$1,(11),out,inst_129193);
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
});})(c__7043__auto___129234,out))
;
return ((function (switch__6987__auto__,c__7043__auto___129234,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_129230[(0)] = state_machine__6988__auto__);

(statearr_129230[(1)] = (1));

return statearr_129230;
});
var state_machine__6988__auto____1 = (function (state_129211){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129231){if((e129231 instanceof Object)){
var ex__6991__auto__ = e129231;
var statearr_129232_129245 = state_129211;
(statearr_129232_129245[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129246 = state_129211;
state_129211 = G__129246;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129211){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129234,out))
})();
var state__7045__auto__ = (function (){var statearr_129233 = f__7044__auto__.call(null);
(statearr_129233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129234);

return statearr_129233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129234,out))
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
if(typeof cljs.core.async.t129254 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t129254 = (function (ch,f,map_LT_,meta129255){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta129255 = meta129255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t129257 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t129257 = (function (fn1,_,meta129255,map_LT_,f,ch,meta129258){
this.fn1 = fn1;
this._ = _;
this.meta129255 = meta129255;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta129258 = meta129258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t129257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t129257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t129257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__129247_SHARP_){
return f1.call(null,(((p1__129247_SHARP_ == null))?null:self__.f.call(null,p1__129247_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t129257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_129259){
var self__ = this;
var _129259__$1 = this;
return self__.meta129258;
});})(___$1))
;

cljs.core.async.t129257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_129259,meta129258__$1){
var self__ = this;
var _129259__$1 = this;
return (new cljs.core.async.t129257(self__.fn1,self__._,self__.meta129255,self__.map_LT_,self__.f,self__.ch,meta129258__$1));
});})(___$1))
;

cljs.core.async.t129257.cljs$lang$type = true;

cljs.core.async.t129257.cljs$lang$ctorStr = "cljs.core.async/t129257";

cljs.core.async.t129257.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t129257");
});})(___$1))
;

cljs.core.async.__GT_t129257 = ((function (___$1){
return (function __GT_t129257(fn1__$1,___$2,meta129255__$1,map_LT___$1,f__$1,ch__$1,meta129258){
return (new cljs.core.async.t129257(fn1__$1,___$2,meta129255__$1,map_LT___$1,f__$1,ch__$1,meta129258));
});})(___$1))
;

}

return (new cljs.core.async.t129257(fn1,___$1,self__.meta129255,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t129254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t129254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_129256){
var self__ = this;
var _129256__$1 = this;
return self__.meta129255;
});

cljs.core.async.t129254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_129256,meta129255__$1){
var self__ = this;
var _129256__$1 = this;
return (new cljs.core.async.t129254(self__.ch,self__.f,self__.map_LT_,meta129255__$1));
});

cljs.core.async.t129254.cljs$lang$type = true;

cljs.core.async.t129254.cljs$lang$ctorStr = "cljs.core.async/t129254";

cljs.core.async.t129254.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t129254");
});

cljs.core.async.__GT_t129254 = (function __GT_t129254(ch__$1,f__$1,map_LT___$1,meta129255){
return (new cljs.core.async.t129254(ch__$1,f__$1,map_LT___$1,meta129255));
});

}

return (new cljs.core.async.t129254(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t129263 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t129263 = (function (ch,f,map_GT_,meta129264){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta129264 = meta129264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t129263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t129263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_129265){
var self__ = this;
var _129265__$1 = this;
return self__.meta129264;
});

cljs.core.async.t129263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_129265,meta129264__$1){
var self__ = this;
var _129265__$1 = this;
return (new cljs.core.async.t129263(self__.ch,self__.f,self__.map_GT_,meta129264__$1));
});

cljs.core.async.t129263.cljs$lang$type = true;

cljs.core.async.t129263.cljs$lang$ctorStr = "cljs.core.async/t129263";

cljs.core.async.t129263.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t129263");
});

cljs.core.async.__GT_t129263 = (function __GT_t129263(ch__$1,f__$1,map_GT___$1,meta129264){
return (new cljs.core.async.t129263(ch__$1,f__$1,map_GT___$1,meta129264));
});

}

return (new cljs.core.async.t129263(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t129269 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t129269 = (function (ch,p,filter_GT_,meta129270){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta129270 = meta129270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t129269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t129269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_129271){
var self__ = this;
var _129271__$1 = this;
return self__.meta129270;
});

cljs.core.async.t129269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_129271,meta129270__$1){
var self__ = this;
var _129271__$1 = this;
return (new cljs.core.async.t129269(self__.ch,self__.p,self__.filter_GT_,meta129270__$1));
});

cljs.core.async.t129269.cljs$lang$type = true;

cljs.core.async.t129269.cljs$lang$ctorStr = "cljs.core.async/t129269";

cljs.core.async.t129269.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t129269");
});

cljs.core.async.__GT_t129269 = (function __GT_t129269(ch__$1,p__$1,filter_GT___$1,meta129270){
return (new cljs.core.async.t129269(ch__$1,p__$1,filter_GT___$1,meta129270));
});

}

return (new cljs.core.async.t129269(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__7043__auto___129354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129354,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129354,out){
return (function (state_129333){
var state_val_129334 = (state_129333[(1)]);
if((state_val_129334 === (7))){
var inst_129329 = (state_129333[(2)]);
var state_129333__$1 = state_129333;
var statearr_129335_129355 = state_129333__$1;
(statearr_129335_129355[(2)] = inst_129329);

(statearr_129335_129355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (1))){
var state_129333__$1 = state_129333;
var statearr_129336_129356 = state_129333__$1;
(statearr_129336_129356[(2)] = null);

(statearr_129336_129356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (4))){
var inst_129315 = (state_129333[(7)]);
var inst_129315__$1 = (state_129333[(2)]);
var inst_129316 = (inst_129315__$1 == null);
var state_129333__$1 = (function (){var statearr_129337 = state_129333;
(statearr_129337[(7)] = inst_129315__$1);

return statearr_129337;
})();
if(cljs.core.truth_(inst_129316)){
var statearr_129338_129357 = state_129333__$1;
(statearr_129338_129357[(1)] = (5));

} else {
var statearr_129339_129358 = state_129333__$1;
(statearr_129339_129358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (6))){
var inst_129315 = (state_129333[(7)]);
var inst_129320 = p.call(null,inst_129315);
var state_129333__$1 = state_129333;
if(cljs.core.truth_(inst_129320)){
var statearr_129340_129359 = state_129333__$1;
(statearr_129340_129359[(1)] = (8));

} else {
var statearr_129341_129360 = state_129333__$1;
(statearr_129341_129360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (3))){
var inst_129331 = (state_129333[(2)]);
var state_129333__$1 = state_129333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129333__$1,inst_129331);
} else {
if((state_val_129334 === (2))){
var state_129333__$1 = state_129333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129333__$1,(4),ch);
} else {
if((state_val_129334 === (11))){
var inst_129323 = (state_129333[(2)]);
var state_129333__$1 = state_129333;
var statearr_129342_129361 = state_129333__$1;
(statearr_129342_129361[(2)] = inst_129323);

(statearr_129342_129361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (9))){
var state_129333__$1 = state_129333;
var statearr_129343_129362 = state_129333__$1;
(statearr_129343_129362[(2)] = null);

(statearr_129343_129362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (5))){
var inst_129318 = cljs.core.async.close_BANG_.call(null,out);
var state_129333__$1 = state_129333;
var statearr_129344_129363 = state_129333__$1;
(statearr_129344_129363[(2)] = inst_129318);

(statearr_129344_129363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (10))){
var inst_129326 = (state_129333[(2)]);
var state_129333__$1 = (function (){var statearr_129345 = state_129333;
(statearr_129345[(8)] = inst_129326);

return statearr_129345;
})();
var statearr_129346_129364 = state_129333__$1;
(statearr_129346_129364[(2)] = null);

(statearr_129346_129364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129334 === (8))){
var inst_129315 = (state_129333[(7)]);
var state_129333__$1 = state_129333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129333__$1,(11),out,inst_129315);
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
});})(c__7043__auto___129354,out))
;
return ((function (switch__6987__auto__,c__7043__auto___129354,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129350 = [null,null,null,null,null,null,null,null,null];
(statearr_129350[(0)] = state_machine__6988__auto__);

(statearr_129350[(1)] = (1));

return statearr_129350;
});
var state_machine__6988__auto____1 = (function (state_129333){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129351){if((e129351 instanceof Object)){
var ex__6991__auto__ = e129351;
var statearr_129352_129365 = state_129333;
(statearr_129352_129365[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129366 = state_129333;
state_129333 = G__129366;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129333){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129354,out))
})();
var state__7045__auto__ = (function (){var statearr_129353 = f__7044__auto__.call(null);
(statearr_129353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129354);

return statearr_129353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129354,out))
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
return (function (state_129532){
var state_val_129533 = (state_129532[(1)]);
if((state_val_129533 === (7))){
var inst_129528 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
var statearr_129534_129575 = state_129532__$1;
(statearr_129534_129575[(2)] = inst_129528);

(statearr_129534_129575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (20))){
var inst_129498 = (state_129532[(7)]);
var inst_129509 = (state_129532[(2)]);
var inst_129510 = cljs.core.next.call(null,inst_129498);
var inst_129484 = inst_129510;
var inst_129485 = null;
var inst_129486 = (0);
var inst_129487 = (0);
var state_129532__$1 = (function (){var statearr_129535 = state_129532;
(statearr_129535[(8)] = inst_129484);

(statearr_129535[(9)] = inst_129487);

(statearr_129535[(10)] = inst_129485);

(statearr_129535[(11)] = inst_129509);

(statearr_129535[(12)] = inst_129486);

return statearr_129535;
})();
var statearr_129536_129576 = state_129532__$1;
(statearr_129536_129576[(2)] = null);

(statearr_129536_129576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (1))){
var state_129532__$1 = state_129532;
var statearr_129537_129577 = state_129532__$1;
(statearr_129537_129577[(2)] = null);

(statearr_129537_129577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (4))){
var inst_129473 = (state_129532[(13)]);
var inst_129473__$1 = (state_129532[(2)]);
var inst_129474 = (inst_129473__$1 == null);
var state_129532__$1 = (function (){var statearr_129538 = state_129532;
(statearr_129538[(13)] = inst_129473__$1);

return statearr_129538;
})();
if(cljs.core.truth_(inst_129474)){
var statearr_129539_129578 = state_129532__$1;
(statearr_129539_129578[(1)] = (5));

} else {
var statearr_129540_129579 = state_129532__$1;
(statearr_129540_129579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (15))){
var state_129532__$1 = state_129532;
var statearr_129544_129580 = state_129532__$1;
(statearr_129544_129580[(2)] = null);

(statearr_129544_129580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (21))){
var state_129532__$1 = state_129532;
var statearr_129545_129581 = state_129532__$1;
(statearr_129545_129581[(2)] = null);

(statearr_129545_129581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (13))){
var inst_129484 = (state_129532[(8)]);
var inst_129487 = (state_129532[(9)]);
var inst_129485 = (state_129532[(10)]);
var inst_129486 = (state_129532[(12)]);
var inst_129494 = (state_129532[(2)]);
var inst_129495 = (inst_129487 + (1));
var tmp129541 = inst_129484;
var tmp129542 = inst_129485;
var tmp129543 = inst_129486;
var inst_129484__$1 = tmp129541;
var inst_129485__$1 = tmp129542;
var inst_129486__$1 = tmp129543;
var inst_129487__$1 = inst_129495;
var state_129532__$1 = (function (){var statearr_129546 = state_129532;
(statearr_129546[(8)] = inst_129484__$1);

(statearr_129546[(14)] = inst_129494);

(statearr_129546[(9)] = inst_129487__$1);

(statearr_129546[(10)] = inst_129485__$1);

(statearr_129546[(12)] = inst_129486__$1);

return statearr_129546;
})();
var statearr_129547_129582 = state_129532__$1;
(statearr_129547_129582[(2)] = null);

(statearr_129547_129582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (22))){
var state_129532__$1 = state_129532;
var statearr_129548_129583 = state_129532__$1;
(statearr_129548_129583[(2)] = null);

(statearr_129548_129583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (6))){
var inst_129473 = (state_129532[(13)]);
var inst_129482 = f.call(null,inst_129473);
var inst_129483 = cljs.core.seq.call(null,inst_129482);
var inst_129484 = inst_129483;
var inst_129485 = null;
var inst_129486 = (0);
var inst_129487 = (0);
var state_129532__$1 = (function (){var statearr_129549 = state_129532;
(statearr_129549[(8)] = inst_129484);

(statearr_129549[(9)] = inst_129487);

(statearr_129549[(10)] = inst_129485);

(statearr_129549[(12)] = inst_129486);

return statearr_129549;
})();
var statearr_129550_129584 = state_129532__$1;
(statearr_129550_129584[(2)] = null);

(statearr_129550_129584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (17))){
var inst_129498 = (state_129532[(7)]);
var inst_129502 = cljs.core.chunk_first.call(null,inst_129498);
var inst_129503 = cljs.core.chunk_rest.call(null,inst_129498);
var inst_129504 = cljs.core.count.call(null,inst_129502);
var inst_129484 = inst_129503;
var inst_129485 = inst_129502;
var inst_129486 = inst_129504;
var inst_129487 = (0);
var state_129532__$1 = (function (){var statearr_129551 = state_129532;
(statearr_129551[(8)] = inst_129484);

(statearr_129551[(9)] = inst_129487);

(statearr_129551[(10)] = inst_129485);

(statearr_129551[(12)] = inst_129486);

return statearr_129551;
})();
var statearr_129552_129585 = state_129532__$1;
(statearr_129552_129585[(2)] = null);

(statearr_129552_129585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (3))){
var inst_129530 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129532__$1,inst_129530);
} else {
if((state_val_129533 === (12))){
var inst_129518 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
var statearr_129553_129586 = state_129532__$1;
(statearr_129553_129586[(2)] = inst_129518);

(statearr_129553_129586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (2))){
var state_129532__$1 = state_129532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129532__$1,(4),in$);
} else {
if((state_val_129533 === (23))){
var inst_129526 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
var statearr_129554_129587 = state_129532__$1;
(statearr_129554_129587[(2)] = inst_129526);

(statearr_129554_129587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (19))){
var inst_129513 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
var statearr_129555_129588 = state_129532__$1;
(statearr_129555_129588[(2)] = inst_129513);

(statearr_129555_129588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (11))){
var inst_129484 = (state_129532[(8)]);
var inst_129498 = (state_129532[(7)]);
var inst_129498__$1 = cljs.core.seq.call(null,inst_129484);
var state_129532__$1 = (function (){var statearr_129556 = state_129532;
(statearr_129556[(7)] = inst_129498__$1);

return statearr_129556;
})();
if(inst_129498__$1){
var statearr_129557_129589 = state_129532__$1;
(statearr_129557_129589[(1)] = (14));

} else {
var statearr_129558_129590 = state_129532__$1;
(statearr_129558_129590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (9))){
var inst_129520 = (state_129532[(2)]);
var inst_129521 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_129532__$1 = (function (){var statearr_129559 = state_129532;
(statearr_129559[(15)] = inst_129520);

return statearr_129559;
})();
if(cljs.core.truth_(inst_129521)){
var statearr_129560_129591 = state_129532__$1;
(statearr_129560_129591[(1)] = (21));

} else {
var statearr_129561_129592 = state_129532__$1;
(statearr_129561_129592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (5))){
var inst_129476 = cljs.core.async.close_BANG_.call(null,out);
var state_129532__$1 = state_129532;
var statearr_129562_129593 = state_129532__$1;
(statearr_129562_129593[(2)] = inst_129476);

(statearr_129562_129593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (14))){
var inst_129498 = (state_129532[(7)]);
var inst_129500 = cljs.core.chunked_seq_QMARK_.call(null,inst_129498);
var state_129532__$1 = state_129532;
if(inst_129500){
var statearr_129563_129594 = state_129532__$1;
(statearr_129563_129594[(1)] = (17));

} else {
var statearr_129564_129595 = state_129532__$1;
(statearr_129564_129595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (16))){
var inst_129516 = (state_129532[(2)]);
var state_129532__$1 = state_129532;
var statearr_129565_129596 = state_129532__$1;
(statearr_129565_129596[(2)] = inst_129516);

(statearr_129565_129596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129533 === (10))){
var inst_129487 = (state_129532[(9)]);
var inst_129485 = (state_129532[(10)]);
var inst_129492 = cljs.core._nth.call(null,inst_129485,inst_129487);
var state_129532__$1 = state_129532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129532__$1,(13),out,inst_129492);
} else {
if((state_val_129533 === (18))){
var inst_129498 = (state_129532[(7)]);
var inst_129507 = cljs.core.first.call(null,inst_129498);
var state_129532__$1 = state_129532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129532__$1,(20),out,inst_129507);
} else {
if((state_val_129533 === (8))){
var inst_129487 = (state_129532[(9)]);
var inst_129486 = (state_129532[(12)]);
var inst_129489 = (inst_129487 < inst_129486);
var inst_129490 = inst_129489;
var state_129532__$1 = state_129532;
if(cljs.core.truth_(inst_129490)){
var statearr_129566_129597 = state_129532__$1;
(statearr_129566_129597[(1)] = (10));

} else {
var statearr_129567_129598 = state_129532__$1;
(statearr_129567_129598[(1)] = (11));

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
var statearr_129571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129571[(0)] = state_machine__6988__auto__);

(statearr_129571[(1)] = (1));

return statearr_129571;
});
var state_machine__6988__auto____1 = (function (state_129532){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129572){if((e129572 instanceof Object)){
var ex__6991__auto__ = e129572;
var statearr_129573_129599 = state_129532;
(statearr_129573_129599[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129600 = state_129532;
state_129532 = G__129600;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129532){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto__))
})();
var state__7045__auto__ = (function (){var statearr_129574 = f__7044__auto__.call(null);
(statearr_129574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto__);

return statearr_129574;
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
var c__7043__auto___129697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129697,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129697,out){
return (function (state_129672){
var state_val_129673 = (state_129672[(1)]);
if((state_val_129673 === (7))){
var inst_129667 = (state_129672[(2)]);
var state_129672__$1 = state_129672;
var statearr_129674_129698 = state_129672__$1;
(statearr_129674_129698[(2)] = inst_129667);

(statearr_129674_129698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (1))){
var inst_129649 = null;
var state_129672__$1 = (function (){var statearr_129675 = state_129672;
(statearr_129675[(7)] = inst_129649);

return statearr_129675;
})();
var statearr_129676_129699 = state_129672__$1;
(statearr_129676_129699[(2)] = null);

(statearr_129676_129699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (4))){
var inst_129652 = (state_129672[(8)]);
var inst_129652__$1 = (state_129672[(2)]);
var inst_129653 = (inst_129652__$1 == null);
var inst_129654 = cljs.core.not.call(null,inst_129653);
var state_129672__$1 = (function (){var statearr_129677 = state_129672;
(statearr_129677[(8)] = inst_129652__$1);

return statearr_129677;
})();
if(inst_129654){
var statearr_129678_129700 = state_129672__$1;
(statearr_129678_129700[(1)] = (5));

} else {
var statearr_129679_129701 = state_129672__$1;
(statearr_129679_129701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (6))){
var state_129672__$1 = state_129672;
var statearr_129680_129702 = state_129672__$1;
(statearr_129680_129702[(2)] = null);

(statearr_129680_129702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (3))){
var inst_129669 = (state_129672[(2)]);
var inst_129670 = cljs.core.async.close_BANG_.call(null,out);
var state_129672__$1 = (function (){var statearr_129681 = state_129672;
(statearr_129681[(9)] = inst_129669);

return statearr_129681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129672__$1,inst_129670);
} else {
if((state_val_129673 === (2))){
var state_129672__$1 = state_129672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129672__$1,(4),ch);
} else {
if((state_val_129673 === (11))){
var inst_129652 = (state_129672[(8)]);
var inst_129661 = (state_129672[(2)]);
var inst_129649 = inst_129652;
var state_129672__$1 = (function (){var statearr_129682 = state_129672;
(statearr_129682[(10)] = inst_129661);

(statearr_129682[(7)] = inst_129649);

return statearr_129682;
})();
var statearr_129683_129703 = state_129672__$1;
(statearr_129683_129703[(2)] = null);

(statearr_129683_129703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (9))){
var inst_129652 = (state_129672[(8)]);
var state_129672__$1 = state_129672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129672__$1,(11),out,inst_129652);
} else {
if((state_val_129673 === (5))){
var inst_129649 = (state_129672[(7)]);
var inst_129652 = (state_129672[(8)]);
var inst_129656 = cljs.core._EQ_.call(null,inst_129652,inst_129649);
var state_129672__$1 = state_129672;
if(inst_129656){
var statearr_129685_129704 = state_129672__$1;
(statearr_129685_129704[(1)] = (8));

} else {
var statearr_129686_129705 = state_129672__$1;
(statearr_129686_129705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (10))){
var inst_129664 = (state_129672[(2)]);
var state_129672__$1 = state_129672;
var statearr_129687_129706 = state_129672__$1;
(statearr_129687_129706[(2)] = inst_129664);

(statearr_129687_129706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129673 === (8))){
var inst_129649 = (state_129672[(7)]);
var tmp129684 = inst_129649;
var inst_129649__$1 = tmp129684;
var state_129672__$1 = (function (){var statearr_129688 = state_129672;
(statearr_129688[(7)] = inst_129649__$1);

return statearr_129688;
})();
var statearr_129689_129707 = state_129672__$1;
(statearr_129689_129707[(2)] = null);

(statearr_129689_129707[(1)] = (2));


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
});})(c__7043__auto___129697,out))
;
return ((function (switch__6987__auto__,c__7043__auto___129697,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_129693[(0)] = state_machine__6988__auto__);

(statearr_129693[(1)] = (1));

return statearr_129693;
});
var state_machine__6988__auto____1 = (function (state_129672){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129694){if((e129694 instanceof Object)){
var ex__6991__auto__ = e129694;
var statearr_129695_129708 = state_129672;
(statearr_129695_129708[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129709 = state_129672;
state_129672 = G__129709;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129672){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129697,out))
})();
var state__7045__auto__ = (function (){var statearr_129696 = f__7044__auto__.call(null);
(statearr_129696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129697);

return statearr_129696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129697,out))
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
var c__7043__auto___129844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___129844,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___129844,out){
return (function (state_129814){
var state_val_129815 = (state_129814[(1)]);
if((state_val_129815 === (7))){
var inst_129810 = (state_129814[(2)]);
var state_129814__$1 = state_129814;
var statearr_129816_129845 = state_129814__$1;
(statearr_129816_129845[(2)] = inst_129810);

(statearr_129816_129845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (1))){
var inst_129777 = (new Array(n));
var inst_129778 = inst_129777;
var inst_129779 = (0);
var state_129814__$1 = (function (){var statearr_129817 = state_129814;
(statearr_129817[(7)] = inst_129778);

(statearr_129817[(8)] = inst_129779);

return statearr_129817;
})();
var statearr_129818_129846 = state_129814__$1;
(statearr_129818_129846[(2)] = null);

(statearr_129818_129846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (4))){
var inst_129782 = (state_129814[(9)]);
var inst_129782__$1 = (state_129814[(2)]);
var inst_129783 = (inst_129782__$1 == null);
var inst_129784 = cljs.core.not.call(null,inst_129783);
var state_129814__$1 = (function (){var statearr_129819 = state_129814;
(statearr_129819[(9)] = inst_129782__$1);

return statearr_129819;
})();
if(inst_129784){
var statearr_129820_129847 = state_129814__$1;
(statearr_129820_129847[(1)] = (5));

} else {
var statearr_129821_129848 = state_129814__$1;
(statearr_129821_129848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (15))){
var inst_129804 = (state_129814[(2)]);
var state_129814__$1 = state_129814;
var statearr_129822_129849 = state_129814__$1;
(statearr_129822_129849[(2)] = inst_129804);

(statearr_129822_129849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (13))){
var state_129814__$1 = state_129814;
var statearr_129823_129850 = state_129814__$1;
(statearr_129823_129850[(2)] = null);

(statearr_129823_129850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (6))){
var inst_129779 = (state_129814[(8)]);
var inst_129800 = (inst_129779 > (0));
var state_129814__$1 = state_129814;
if(cljs.core.truth_(inst_129800)){
var statearr_129824_129851 = state_129814__$1;
(statearr_129824_129851[(1)] = (12));

} else {
var statearr_129825_129852 = state_129814__$1;
(statearr_129825_129852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (3))){
var inst_129812 = (state_129814[(2)]);
var state_129814__$1 = state_129814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129814__$1,inst_129812);
} else {
if((state_val_129815 === (12))){
var inst_129778 = (state_129814[(7)]);
var inst_129802 = cljs.core.vec.call(null,inst_129778);
var state_129814__$1 = state_129814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129814__$1,(15),out,inst_129802);
} else {
if((state_val_129815 === (2))){
var state_129814__$1 = state_129814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129814__$1,(4),ch);
} else {
if((state_val_129815 === (11))){
var inst_129794 = (state_129814[(2)]);
var inst_129795 = (new Array(n));
var inst_129778 = inst_129795;
var inst_129779 = (0);
var state_129814__$1 = (function (){var statearr_129826 = state_129814;
(statearr_129826[(7)] = inst_129778);

(statearr_129826[(8)] = inst_129779);

(statearr_129826[(10)] = inst_129794);

return statearr_129826;
})();
var statearr_129827_129853 = state_129814__$1;
(statearr_129827_129853[(2)] = null);

(statearr_129827_129853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (9))){
var inst_129778 = (state_129814[(7)]);
var inst_129792 = cljs.core.vec.call(null,inst_129778);
var state_129814__$1 = state_129814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129814__$1,(11),out,inst_129792);
} else {
if((state_val_129815 === (5))){
var inst_129778 = (state_129814[(7)]);
var inst_129779 = (state_129814[(8)]);
var inst_129782 = (state_129814[(9)]);
var inst_129787 = (state_129814[(11)]);
var inst_129786 = (inst_129778[inst_129779] = inst_129782);
var inst_129787__$1 = (inst_129779 + (1));
var inst_129788 = (inst_129787__$1 < n);
var state_129814__$1 = (function (){var statearr_129828 = state_129814;
(statearr_129828[(12)] = inst_129786);

(statearr_129828[(11)] = inst_129787__$1);

return statearr_129828;
})();
if(cljs.core.truth_(inst_129788)){
var statearr_129829_129854 = state_129814__$1;
(statearr_129829_129854[(1)] = (8));

} else {
var statearr_129830_129855 = state_129814__$1;
(statearr_129830_129855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (14))){
var inst_129807 = (state_129814[(2)]);
var inst_129808 = cljs.core.async.close_BANG_.call(null,out);
var state_129814__$1 = (function (){var statearr_129832 = state_129814;
(statearr_129832[(13)] = inst_129807);

return statearr_129832;
})();
var statearr_129833_129856 = state_129814__$1;
(statearr_129833_129856[(2)] = inst_129808);

(statearr_129833_129856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (10))){
var inst_129798 = (state_129814[(2)]);
var state_129814__$1 = state_129814;
var statearr_129834_129857 = state_129814__$1;
(statearr_129834_129857[(2)] = inst_129798);

(statearr_129834_129857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129815 === (8))){
var inst_129778 = (state_129814[(7)]);
var inst_129787 = (state_129814[(11)]);
var tmp129831 = inst_129778;
var inst_129778__$1 = tmp129831;
var inst_129779 = inst_129787;
var state_129814__$1 = (function (){var statearr_129835 = state_129814;
(statearr_129835[(7)] = inst_129778__$1);

(statearr_129835[(8)] = inst_129779);

return statearr_129835;
})();
var statearr_129836_129858 = state_129814__$1;
(statearr_129836_129858[(2)] = null);

(statearr_129836_129858[(1)] = (2));


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
});})(c__7043__auto___129844,out))
;
return ((function (switch__6987__auto__,c__7043__auto___129844,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129840[(0)] = state_machine__6988__auto__);

(statearr_129840[(1)] = (1));

return statearr_129840;
});
var state_machine__6988__auto____1 = (function (state_129814){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e129841){if((e129841 instanceof Object)){
var ex__6991__auto__ = e129841;
var statearr_129842_129859 = state_129814;
(statearr_129842_129859[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129860 = state_129814;
state_129814 = G__129860;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129814){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___129844,out))
})();
var state__7045__auto__ = (function (){var statearr_129843 = f__7044__auto__.call(null);
(statearr_129843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___129844);

return statearr_129843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___129844,out))
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
var c__7043__auto___130003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___130003,out){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___130003,out){
return (function (state_129973){
var state_val_129974 = (state_129973[(1)]);
if((state_val_129974 === (7))){
var inst_129969 = (state_129973[(2)]);
var state_129973__$1 = state_129973;
var statearr_129975_130004 = state_129973__$1;
(statearr_129975_130004[(2)] = inst_129969);

(statearr_129975_130004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (1))){
var inst_129932 = [];
var inst_129933 = inst_129932;
var inst_129934 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_129973__$1 = (function (){var statearr_129976 = state_129973;
(statearr_129976[(7)] = inst_129933);

(statearr_129976[(8)] = inst_129934);

return statearr_129976;
})();
var statearr_129977_130005 = state_129973__$1;
(statearr_129977_130005[(2)] = null);

(statearr_129977_130005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (4))){
var inst_129937 = (state_129973[(9)]);
var inst_129937__$1 = (state_129973[(2)]);
var inst_129938 = (inst_129937__$1 == null);
var inst_129939 = cljs.core.not.call(null,inst_129938);
var state_129973__$1 = (function (){var statearr_129978 = state_129973;
(statearr_129978[(9)] = inst_129937__$1);

return statearr_129978;
})();
if(inst_129939){
var statearr_129979_130006 = state_129973__$1;
(statearr_129979_130006[(1)] = (5));

} else {
var statearr_129980_130007 = state_129973__$1;
(statearr_129980_130007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (15))){
var inst_129963 = (state_129973[(2)]);
var state_129973__$1 = state_129973;
var statearr_129981_130008 = state_129973__$1;
(statearr_129981_130008[(2)] = inst_129963);

(statearr_129981_130008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (13))){
var state_129973__$1 = state_129973;
var statearr_129982_130009 = state_129973__$1;
(statearr_129982_130009[(2)] = null);

(statearr_129982_130009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (6))){
var inst_129933 = (state_129973[(7)]);
var inst_129958 = inst_129933.length;
var inst_129959 = (inst_129958 > (0));
var state_129973__$1 = state_129973;
if(cljs.core.truth_(inst_129959)){
var statearr_129983_130010 = state_129973__$1;
(statearr_129983_130010[(1)] = (12));

} else {
var statearr_129984_130011 = state_129973__$1;
(statearr_129984_130011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (3))){
var inst_129971 = (state_129973[(2)]);
var state_129973__$1 = state_129973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129973__$1,inst_129971);
} else {
if((state_val_129974 === (12))){
var inst_129933 = (state_129973[(7)]);
var inst_129961 = cljs.core.vec.call(null,inst_129933);
var state_129973__$1 = state_129973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129973__$1,(15),out,inst_129961);
} else {
if((state_val_129974 === (2))){
var state_129973__$1 = state_129973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129973__$1,(4),ch);
} else {
if((state_val_129974 === (11))){
var inst_129937 = (state_129973[(9)]);
var inst_129941 = (state_129973[(10)]);
var inst_129951 = (state_129973[(2)]);
var inst_129952 = [];
var inst_129953 = inst_129952.push(inst_129937);
var inst_129933 = inst_129952;
var inst_129934 = inst_129941;
var state_129973__$1 = (function (){var statearr_129985 = state_129973;
(statearr_129985[(11)] = inst_129951);

(statearr_129985[(12)] = inst_129953);

(statearr_129985[(7)] = inst_129933);

(statearr_129985[(8)] = inst_129934);

return statearr_129985;
})();
var statearr_129986_130012 = state_129973__$1;
(statearr_129986_130012[(2)] = null);

(statearr_129986_130012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (9))){
var inst_129933 = (state_129973[(7)]);
var inst_129949 = cljs.core.vec.call(null,inst_129933);
var state_129973__$1 = state_129973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129973__$1,(11),out,inst_129949);
} else {
if((state_val_129974 === (5))){
var inst_129937 = (state_129973[(9)]);
var inst_129941 = (state_129973[(10)]);
var inst_129934 = (state_129973[(8)]);
var inst_129941__$1 = f.call(null,inst_129937);
var inst_129942 = cljs.core._EQ_.call(null,inst_129941__$1,inst_129934);
var inst_129943 = cljs.core.keyword_identical_QMARK_.call(null,inst_129934,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_129944 = (inst_129942) || (inst_129943);
var state_129973__$1 = (function (){var statearr_129987 = state_129973;
(statearr_129987[(10)] = inst_129941__$1);

return statearr_129987;
})();
if(cljs.core.truth_(inst_129944)){
var statearr_129988_130013 = state_129973__$1;
(statearr_129988_130013[(1)] = (8));

} else {
var statearr_129989_130014 = state_129973__$1;
(statearr_129989_130014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (14))){
var inst_129966 = (state_129973[(2)]);
var inst_129967 = cljs.core.async.close_BANG_.call(null,out);
var state_129973__$1 = (function (){var statearr_129991 = state_129973;
(statearr_129991[(13)] = inst_129966);

return statearr_129991;
})();
var statearr_129992_130015 = state_129973__$1;
(statearr_129992_130015[(2)] = inst_129967);

(statearr_129992_130015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (10))){
var inst_129956 = (state_129973[(2)]);
var state_129973__$1 = state_129973;
var statearr_129993_130016 = state_129973__$1;
(statearr_129993_130016[(2)] = inst_129956);

(statearr_129993_130016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129974 === (8))){
var inst_129937 = (state_129973[(9)]);
var inst_129941 = (state_129973[(10)]);
var inst_129933 = (state_129973[(7)]);
var inst_129946 = inst_129933.push(inst_129937);
var tmp129990 = inst_129933;
var inst_129933__$1 = tmp129990;
var inst_129934 = inst_129941;
var state_129973__$1 = (function (){var statearr_129994 = state_129973;
(statearr_129994[(14)] = inst_129946);

(statearr_129994[(7)] = inst_129933__$1);

(statearr_129994[(8)] = inst_129934);

return statearr_129994;
})();
var statearr_129995_130017 = state_129973__$1;
(statearr_129995_130017[(2)] = null);

(statearr_129995_130017[(1)] = (2));


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
});})(c__7043__auto___130003,out))
;
return ((function (switch__6987__auto__,c__7043__auto___130003,out){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_129999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129999[(0)] = state_machine__6988__auto__);

(statearr_129999[(1)] = (1));

return statearr_129999;
});
var state_machine__6988__auto____1 = (function (state_129973){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_129973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e130000){if((e130000 instanceof Object)){
var ex__6991__auto__ = e130000;
var statearr_130001_130018 = state_129973;
(statearr_130001_130018[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130019 = state_129973;
state_129973 = G__130019;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_129973){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_129973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___130003,out))
})();
var state__7045__auto__ = (function (){var statearr_130002 = f__7044__auto__.call(null);
(statearr_130002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___130003);

return statearr_130002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___130003,out))
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