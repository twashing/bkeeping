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
if(typeof cljs.core.async.t107189 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t107189 = (function (f,fn_handler,meta107190){
this.f = f;
this.fn_handler = fn_handler;
this.meta107190 = meta107190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t107189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t107189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t107189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t107189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_107191){
var self__ = this;
var _107191__$1 = this;
return self__.meta107190;
});

cljs.core.async.t107189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_107191,meta107190__$1){
var self__ = this;
var _107191__$1 = this;
return (new cljs.core.async.t107189(self__.f,self__.fn_handler,meta107190__$1));
});

cljs.core.async.t107189.cljs$lang$type = true;

cljs.core.async.t107189.cljs$lang$ctorStr = "cljs.core.async/t107189";

cljs.core.async.t107189.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t107189");
});

cljs.core.async.__GT_t107189 = (function __GT_t107189(f__$1,fn_handler__$1,meta107190){
return (new cljs.core.async.t107189(f__$1,fn_handler__$1,meta107190));
});

}

return (new cljs.core.async.t107189(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__107193 = buff;
if(G__107193){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__107193.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__107193.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__107193);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__107193);
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
var val_107194 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_107194);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_107194,ret){
return (function (){
return fn1.call(null,val_107194);
});})(val_107194,ret))
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
var n__4509__auto___107195 = n;
var x_107196 = (0);
while(true){
if((x_107196 < n__4509__auto___107195)){
(a[x_107196] = (0));

var G__107197 = (x_107196 + (1));
x_107196 = G__107197;
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

var G__107198 = (i + (1));
i = G__107198;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t107202 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t107202 = (function (flag,alt_flag,meta107203){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta107203 = meta107203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t107202.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t107202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t107202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t107202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_107204){
var self__ = this;
var _107204__$1 = this;
return self__.meta107203;
});})(flag))
;

cljs.core.async.t107202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_107204,meta107203__$1){
var self__ = this;
var _107204__$1 = this;
return (new cljs.core.async.t107202(self__.flag,self__.alt_flag,meta107203__$1));
});})(flag))
;

cljs.core.async.t107202.cljs$lang$type = true;

cljs.core.async.t107202.cljs$lang$ctorStr = "cljs.core.async/t107202";

cljs.core.async.t107202.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t107202");
});})(flag))
;

cljs.core.async.__GT_t107202 = ((function (flag){
return (function __GT_t107202(flag__$1,alt_flag__$1,meta107203){
return (new cljs.core.async.t107202(flag__$1,alt_flag__$1,meta107203));
});})(flag))
;

}

return (new cljs.core.async.t107202(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t107208 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t107208 = (function (cb,flag,alt_handler,meta107209){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta107209 = meta107209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t107208.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t107208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t107208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t107208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_107210){
var self__ = this;
var _107210__$1 = this;
return self__.meta107209;
});

cljs.core.async.t107208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_107210,meta107209__$1){
var self__ = this;
var _107210__$1 = this;
return (new cljs.core.async.t107208(self__.cb,self__.flag,self__.alt_handler,meta107209__$1));
});

cljs.core.async.t107208.cljs$lang$type = true;

cljs.core.async.t107208.cljs$lang$ctorStr = "cljs.core.async/t107208";

cljs.core.async.t107208.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t107208");
});

cljs.core.async.__GT_t107208 = (function __GT_t107208(cb__$1,flag__$1,alt_handler__$1,meta107209){
return (new cljs.core.async.t107208(cb__$1,flag__$1,alt_handler__$1,meta107209));
});

}

return (new cljs.core.async.t107208(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__107211_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__107211_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__107212_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__107212_SHARP_,port], null));
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
var G__107213 = (i + (1));
i = G__107213;
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
var alts_BANG___delegate = function (ports,p__107214){
var map__107216 = p__107214;
var map__107216__$1 = ((cljs.core.seq_QMARK_.call(null,map__107216))?cljs.core.apply.call(null,cljs.core.hash_map,map__107216):map__107216);
var opts = map__107216__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__107214 = null;
if (arguments.length > 1) {
  p__107214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__107214);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__107217){
var ports = cljs.core.first(arglist__107217);
var p__107214 = cljs.core.rest(arglist__107217);
return alts_BANG___delegate(ports,p__107214);
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
var c__9199__auto___107312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___107312){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___107312){
return (function (state_107288){
var state_val_107289 = (state_107288[(1)]);
if((state_val_107289 === (7))){
var inst_107284 = (state_107288[(2)]);
var state_107288__$1 = state_107288;
var statearr_107290_107313 = state_107288__$1;
(statearr_107290_107313[(2)] = inst_107284);

(statearr_107290_107313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (1))){
var state_107288__$1 = state_107288;
var statearr_107291_107314 = state_107288__$1;
(statearr_107291_107314[(2)] = null);

(statearr_107291_107314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (4))){
var inst_107267 = (state_107288[(7)]);
var inst_107267__$1 = (state_107288[(2)]);
var inst_107268 = (inst_107267__$1 == null);
var state_107288__$1 = (function (){var statearr_107292 = state_107288;
(statearr_107292[(7)] = inst_107267__$1);

return statearr_107292;
})();
if(cljs.core.truth_(inst_107268)){
var statearr_107293_107315 = state_107288__$1;
(statearr_107293_107315[(1)] = (5));

} else {
var statearr_107294_107316 = state_107288__$1;
(statearr_107294_107316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (13))){
var state_107288__$1 = state_107288;
var statearr_107295_107317 = state_107288__$1;
(statearr_107295_107317[(2)] = null);

(statearr_107295_107317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (6))){
var inst_107267 = (state_107288[(7)]);
var state_107288__$1 = state_107288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107288__$1,(11),to,inst_107267);
} else {
if((state_val_107289 === (3))){
var inst_107286 = (state_107288[(2)]);
var state_107288__$1 = state_107288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107288__$1,inst_107286);
} else {
if((state_val_107289 === (12))){
var state_107288__$1 = state_107288;
var statearr_107296_107318 = state_107288__$1;
(statearr_107296_107318[(2)] = null);

(statearr_107296_107318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (2))){
var state_107288__$1 = state_107288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107288__$1,(4),from);
} else {
if((state_val_107289 === (11))){
var inst_107277 = (state_107288[(2)]);
var state_107288__$1 = state_107288;
if(cljs.core.truth_(inst_107277)){
var statearr_107297_107319 = state_107288__$1;
(statearr_107297_107319[(1)] = (12));

} else {
var statearr_107298_107320 = state_107288__$1;
(statearr_107298_107320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (9))){
var state_107288__$1 = state_107288;
var statearr_107299_107321 = state_107288__$1;
(statearr_107299_107321[(2)] = null);

(statearr_107299_107321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (5))){
var state_107288__$1 = state_107288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_107300_107322 = state_107288__$1;
(statearr_107300_107322[(1)] = (8));

} else {
var statearr_107301_107323 = state_107288__$1;
(statearr_107301_107323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (14))){
var inst_107282 = (state_107288[(2)]);
var state_107288__$1 = state_107288;
var statearr_107302_107324 = state_107288__$1;
(statearr_107302_107324[(2)] = inst_107282);

(statearr_107302_107324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (10))){
var inst_107274 = (state_107288[(2)]);
var state_107288__$1 = state_107288;
var statearr_107303_107325 = state_107288__$1;
(statearr_107303_107325[(2)] = inst_107274);

(statearr_107303_107325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107289 === (8))){
var inst_107271 = cljs.core.async.close_BANG_.call(null,to);
var state_107288__$1 = state_107288;
var statearr_107304_107326 = state_107288__$1;
(statearr_107304_107326[(2)] = inst_107271);

(statearr_107304_107326[(1)] = (10));


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
});})(c__9199__auto___107312))
;
return ((function (switch__9184__auto__,c__9199__auto___107312){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107308 = [null,null,null,null,null,null,null,null];
(statearr_107308[(0)] = state_machine__9185__auto__);

(statearr_107308[(1)] = (1));

return statearr_107308;
});
var state_machine__9185__auto____1 = (function (state_107288){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107309){if((e107309 instanceof Object)){
var ex__9188__auto__ = e107309;
var statearr_107310_107327 = state_107288;
(statearr_107310_107327[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107328 = state_107288;
state_107288 = G__107328;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107288){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___107312))
})();
var state__9201__auto__ = (function (){var statearr_107311 = f__9200__auto__.call(null);
(statearr_107311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107312);

return statearr_107311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___107312))
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
return (function (p__107512){
var vec__107513 = p__107512;
var v = cljs.core.nth.call(null,vec__107513,(0),null);
var p = cljs.core.nth.call(null,vec__107513,(1),null);
var job = vec__107513;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___107695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results){
return (function (state_107518){
var state_val_107519 = (state_107518[(1)]);
if((state_val_107519 === (2))){
var inst_107515 = (state_107518[(2)]);
var inst_107516 = cljs.core.async.close_BANG_.call(null,res);
var state_107518__$1 = (function (){var statearr_107520 = state_107518;
(statearr_107520[(7)] = inst_107515);

return statearr_107520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107518__$1,inst_107516);
} else {
if((state_val_107519 === (1))){
var state_107518__$1 = state_107518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107518__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107524 = [null,null,null,null,null,null,null,null];
(statearr_107524[(0)] = state_machine__9185__auto__);

(statearr_107524[(1)] = (1));

return statearr_107524;
});
var state_machine__9185__auto____1 = (function (state_107518){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107525){if((e107525 instanceof Object)){
var ex__9188__auto__ = e107525;
var statearr_107526_107696 = state_107518;
(statearr_107526_107696[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107697 = state_107518;
state_107518 = G__107697;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107518){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_107527 = f__9200__auto__.call(null);
(statearr_107527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107695);

return statearr_107527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___107695,res,vec__107513,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__107528){
var vec__107529 = p__107528;
var v = cljs.core.nth.call(null,vec__107529,(0),null);
var p = cljs.core.nth.call(null,vec__107529,(1),null);
var job = vec__107529;
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
var n__4509__auto___107698 = n;
var __107699 = (0);
while(true){
if((__107699 < n__4509__auto___107698)){
var G__107530_107700 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__107530_107700) {
case "async":
var c__9199__auto___107702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__107699,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__107699,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function (state_107543){
var state_val_107544 = (state_107543[(1)]);
if((state_val_107544 === (7))){
var inst_107539 = (state_107543[(2)]);
var state_107543__$1 = state_107543;
var statearr_107545_107703 = state_107543__$1;
(statearr_107545_107703[(2)] = inst_107539);

(statearr_107545_107703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107544 === (6))){
var state_107543__$1 = state_107543;
var statearr_107546_107704 = state_107543__$1;
(statearr_107546_107704[(2)] = null);

(statearr_107546_107704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107544 === (5))){
var state_107543__$1 = state_107543;
var statearr_107547_107705 = state_107543__$1;
(statearr_107547_107705[(2)] = null);

(statearr_107547_107705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107544 === (4))){
var inst_107533 = (state_107543[(2)]);
var inst_107534 = async.call(null,inst_107533);
var state_107543__$1 = state_107543;
if(cljs.core.truth_(inst_107534)){
var statearr_107548_107706 = state_107543__$1;
(statearr_107548_107706[(1)] = (5));

} else {
var statearr_107549_107707 = state_107543__$1;
(statearr_107549_107707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107544 === (3))){
var inst_107541 = (state_107543[(2)]);
var state_107543__$1 = state_107543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107543__$1,inst_107541);
} else {
if((state_val_107544 === (2))){
var state_107543__$1 = state_107543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107543__$1,(4),jobs);
} else {
if((state_val_107544 === (1))){
var state_107543__$1 = state_107543;
var statearr_107550_107708 = state_107543__$1;
(statearr_107550_107708[(2)] = null);

(statearr_107550_107708[(1)] = (2));


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
});})(__107699,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
;
return ((function (__107699,switch__9184__auto__,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107554 = [null,null,null,null,null,null,null];
(statearr_107554[(0)] = state_machine__9185__auto__);

(statearr_107554[(1)] = (1));

return statearr_107554;
});
var state_machine__9185__auto____1 = (function (state_107543){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107555){if((e107555 instanceof Object)){
var ex__9188__auto__ = e107555;
var statearr_107556_107709 = state_107543;
(statearr_107556_107709[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107710 = state_107543;
state_107543 = G__107710;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107543){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__107699,switch__9184__auto__,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_107557 = f__9200__auto__.call(null);
(statearr_107557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107702);

return statearr_107557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__107699,c__9199__auto___107702,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___107711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__107699,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__107699,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function (state_107570){
var state_val_107571 = (state_107570[(1)]);
if((state_val_107571 === (7))){
var inst_107566 = (state_107570[(2)]);
var state_107570__$1 = state_107570;
var statearr_107572_107712 = state_107570__$1;
(statearr_107572_107712[(2)] = inst_107566);

(statearr_107572_107712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107571 === (6))){
var state_107570__$1 = state_107570;
var statearr_107573_107713 = state_107570__$1;
(statearr_107573_107713[(2)] = null);

(statearr_107573_107713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107571 === (5))){
var state_107570__$1 = state_107570;
var statearr_107574_107714 = state_107570__$1;
(statearr_107574_107714[(2)] = null);

(statearr_107574_107714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107571 === (4))){
var inst_107560 = (state_107570[(2)]);
var inst_107561 = process.call(null,inst_107560);
var state_107570__$1 = state_107570;
if(cljs.core.truth_(inst_107561)){
var statearr_107575_107715 = state_107570__$1;
(statearr_107575_107715[(1)] = (5));

} else {
var statearr_107576_107716 = state_107570__$1;
(statearr_107576_107716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107571 === (3))){
var inst_107568 = (state_107570[(2)]);
var state_107570__$1 = state_107570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107570__$1,inst_107568);
} else {
if((state_val_107571 === (2))){
var state_107570__$1 = state_107570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107570__$1,(4),jobs);
} else {
if((state_val_107571 === (1))){
var state_107570__$1 = state_107570;
var statearr_107577_107717 = state_107570__$1;
(statearr_107577_107717[(2)] = null);

(statearr_107577_107717[(1)] = (2));


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
});})(__107699,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
;
return ((function (__107699,switch__9184__auto__,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107581 = [null,null,null,null,null,null,null];
(statearr_107581[(0)] = state_machine__9185__auto__);

(statearr_107581[(1)] = (1));

return statearr_107581;
});
var state_machine__9185__auto____1 = (function (state_107570){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107582){if((e107582 instanceof Object)){
var ex__9188__auto__ = e107582;
var statearr_107583_107718 = state_107570;
(statearr_107583_107718[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107719 = state_107570;
state_107570 = G__107719;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107570){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__107699,switch__9184__auto__,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_107584 = f__9200__auto__.call(null);
(statearr_107584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107711);

return statearr_107584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__107699,c__9199__auto___107711,G__107530_107700,n__4509__auto___107698,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__107720 = (__107699 + (1));
__107699 = G__107720;
continue;
} else {
}
break;
}

var c__9199__auto___107721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___107721,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___107721,jobs,results,process,async){
return (function (state_107606){
var state_val_107607 = (state_107606[(1)]);
if((state_val_107607 === (9))){
var inst_107599 = (state_107606[(2)]);
var state_107606__$1 = (function (){var statearr_107608 = state_107606;
(statearr_107608[(7)] = inst_107599);

return statearr_107608;
})();
var statearr_107609_107722 = state_107606__$1;
(statearr_107609_107722[(2)] = null);

(statearr_107609_107722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107607 === (8))){
var inst_107592 = (state_107606[(8)]);
var inst_107597 = (state_107606[(2)]);
var state_107606__$1 = (function (){var statearr_107610 = state_107606;
(statearr_107610[(9)] = inst_107597);

return statearr_107610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107606__$1,(9),results,inst_107592);
} else {
if((state_val_107607 === (7))){
var inst_107602 = (state_107606[(2)]);
var state_107606__$1 = state_107606;
var statearr_107611_107723 = state_107606__$1;
(statearr_107611_107723[(2)] = inst_107602);

(statearr_107611_107723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107607 === (6))){
var inst_107587 = (state_107606[(10)]);
var inst_107592 = (state_107606[(8)]);
var inst_107592__$1 = cljs.core.async.chan.call(null,(1));
var inst_107593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107594 = [inst_107587,inst_107592__$1];
var inst_107595 = (new cljs.core.PersistentVector(null,2,(5),inst_107593,inst_107594,null));
var state_107606__$1 = (function (){var statearr_107612 = state_107606;
(statearr_107612[(8)] = inst_107592__$1);

return statearr_107612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107606__$1,(8),jobs,inst_107595);
} else {
if((state_val_107607 === (5))){
var inst_107590 = cljs.core.async.close_BANG_.call(null,jobs);
var state_107606__$1 = state_107606;
var statearr_107613_107724 = state_107606__$1;
(statearr_107613_107724[(2)] = inst_107590);

(statearr_107613_107724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107607 === (4))){
var inst_107587 = (state_107606[(10)]);
var inst_107587__$1 = (state_107606[(2)]);
var inst_107588 = (inst_107587__$1 == null);
var state_107606__$1 = (function (){var statearr_107614 = state_107606;
(statearr_107614[(10)] = inst_107587__$1);

return statearr_107614;
})();
if(cljs.core.truth_(inst_107588)){
var statearr_107615_107725 = state_107606__$1;
(statearr_107615_107725[(1)] = (5));

} else {
var statearr_107616_107726 = state_107606__$1;
(statearr_107616_107726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107607 === (3))){
var inst_107604 = (state_107606[(2)]);
var state_107606__$1 = state_107606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107606__$1,inst_107604);
} else {
if((state_val_107607 === (2))){
var state_107606__$1 = state_107606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107606__$1,(4),from);
} else {
if((state_val_107607 === (1))){
var state_107606__$1 = state_107606;
var statearr_107617_107727 = state_107606__$1;
(statearr_107617_107727[(2)] = null);

(statearr_107617_107727[(1)] = (2));


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
});})(c__9199__auto___107721,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___107721,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_107621[(0)] = state_machine__9185__auto__);

(statearr_107621[(1)] = (1));

return statearr_107621;
});
var state_machine__9185__auto____1 = (function (state_107606){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107622){if((e107622 instanceof Object)){
var ex__9188__auto__ = e107622;
var statearr_107623_107728 = state_107606;
(statearr_107623_107728[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107729 = state_107606;
state_107606 = G__107729;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107606){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___107721,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_107624 = f__9200__auto__.call(null);
(statearr_107624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107721);

return statearr_107624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___107721,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_107662){
var state_val_107663 = (state_107662[(1)]);
if((state_val_107663 === (7))){
var inst_107658 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
var statearr_107664_107730 = state_107662__$1;
(statearr_107664_107730[(2)] = inst_107658);

(statearr_107664_107730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (20))){
var state_107662__$1 = state_107662;
var statearr_107665_107731 = state_107662__$1;
(statearr_107665_107731[(2)] = null);

(statearr_107665_107731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (1))){
var state_107662__$1 = state_107662;
var statearr_107666_107732 = state_107662__$1;
(statearr_107666_107732[(2)] = null);

(statearr_107666_107732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (4))){
var inst_107627 = (state_107662[(7)]);
var inst_107627__$1 = (state_107662[(2)]);
var inst_107628 = (inst_107627__$1 == null);
var state_107662__$1 = (function (){var statearr_107667 = state_107662;
(statearr_107667[(7)] = inst_107627__$1);

return statearr_107667;
})();
if(cljs.core.truth_(inst_107628)){
var statearr_107668_107733 = state_107662__$1;
(statearr_107668_107733[(1)] = (5));

} else {
var statearr_107669_107734 = state_107662__$1;
(statearr_107669_107734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (15))){
var inst_107640 = (state_107662[(8)]);
var state_107662__$1 = state_107662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107662__$1,(18),to,inst_107640);
} else {
if((state_val_107663 === (21))){
var inst_107653 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
var statearr_107670_107735 = state_107662__$1;
(statearr_107670_107735[(2)] = inst_107653);

(statearr_107670_107735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (13))){
var inst_107655 = (state_107662[(2)]);
var state_107662__$1 = (function (){var statearr_107671 = state_107662;
(statearr_107671[(9)] = inst_107655);

return statearr_107671;
})();
var statearr_107672_107736 = state_107662__$1;
(statearr_107672_107736[(2)] = null);

(statearr_107672_107736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (6))){
var inst_107627 = (state_107662[(7)]);
var state_107662__$1 = state_107662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107662__$1,(11),inst_107627);
} else {
if((state_val_107663 === (17))){
var inst_107648 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
if(cljs.core.truth_(inst_107648)){
var statearr_107673_107737 = state_107662__$1;
(statearr_107673_107737[(1)] = (19));

} else {
var statearr_107674_107738 = state_107662__$1;
(statearr_107674_107738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (3))){
var inst_107660 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107662__$1,inst_107660);
} else {
if((state_val_107663 === (12))){
var inst_107637 = (state_107662[(10)]);
var state_107662__$1 = state_107662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107662__$1,(14),inst_107637);
} else {
if((state_val_107663 === (2))){
var state_107662__$1 = state_107662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107662__$1,(4),results);
} else {
if((state_val_107663 === (19))){
var state_107662__$1 = state_107662;
var statearr_107675_107739 = state_107662__$1;
(statearr_107675_107739[(2)] = null);

(statearr_107675_107739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (11))){
var inst_107637 = (state_107662[(2)]);
var state_107662__$1 = (function (){var statearr_107676 = state_107662;
(statearr_107676[(10)] = inst_107637);

return statearr_107676;
})();
var statearr_107677_107740 = state_107662__$1;
(statearr_107677_107740[(2)] = null);

(statearr_107677_107740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (9))){
var state_107662__$1 = state_107662;
var statearr_107678_107741 = state_107662__$1;
(statearr_107678_107741[(2)] = null);

(statearr_107678_107741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (5))){
var state_107662__$1 = state_107662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_107679_107742 = state_107662__$1;
(statearr_107679_107742[(1)] = (8));

} else {
var statearr_107680_107743 = state_107662__$1;
(statearr_107680_107743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (14))){
var inst_107640 = (state_107662[(8)]);
var inst_107642 = (state_107662[(11)]);
var inst_107640__$1 = (state_107662[(2)]);
var inst_107641 = (inst_107640__$1 == null);
var inst_107642__$1 = cljs.core.not.call(null,inst_107641);
var state_107662__$1 = (function (){var statearr_107681 = state_107662;
(statearr_107681[(8)] = inst_107640__$1);

(statearr_107681[(11)] = inst_107642__$1);

return statearr_107681;
})();
if(inst_107642__$1){
var statearr_107682_107744 = state_107662__$1;
(statearr_107682_107744[(1)] = (15));

} else {
var statearr_107683_107745 = state_107662__$1;
(statearr_107683_107745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (16))){
var inst_107642 = (state_107662[(11)]);
var state_107662__$1 = state_107662;
var statearr_107684_107746 = state_107662__$1;
(statearr_107684_107746[(2)] = inst_107642);

(statearr_107684_107746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (10))){
var inst_107634 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
var statearr_107685_107747 = state_107662__$1;
(statearr_107685_107747[(2)] = inst_107634);

(statearr_107685_107747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (18))){
var inst_107645 = (state_107662[(2)]);
var state_107662__$1 = state_107662;
var statearr_107686_107748 = state_107662__$1;
(statearr_107686_107748[(2)] = inst_107645);

(statearr_107686_107748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107663 === (8))){
var inst_107631 = cljs.core.async.close_BANG_.call(null,to);
var state_107662__$1 = state_107662;
var statearr_107687_107749 = state_107662__$1;
(statearr_107687_107749[(2)] = inst_107631);

(statearr_107687_107749[(1)] = (10));


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
var statearr_107691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107691[(0)] = state_machine__9185__auto__);

(statearr_107691[(1)] = (1));

return statearr_107691;
});
var state_machine__9185__auto____1 = (function (state_107662){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107692){if((e107692 instanceof Object)){
var ex__9188__auto__ = e107692;
var statearr_107693_107750 = state_107662;
(statearr_107693_107750[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107751 = state_107662;
state_107662 = G__107751;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107662){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_107694 = f__9200__auto__.call(null);
(statearr_107694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_107694;
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
var c__9199__auto___107852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___107852,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___107852,tc,fc){
return (function (state_107827){
var state_val_107828 = (state_107827[(1)]);
if((state_val_107828 === (7))){
var inst_107823 = (state_107827[(2)]);
var state_107827__$1 = state_107827;
var statearr_107829_107853 = state_107827__$1;
(statearr_107829_107853[(2)] = inst_107823);

(statearr_107829_107853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (1))){
var state_107827__$1 = state_107827;
var statearr_107830_107854 = state_107827__$1;
(statearr_107830_107854[(2)] = null);

(statearr_107830_107854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (4))){
var inst_107804 = (state_107827[(7)]);
var inst_107804__$1 = (state_107827[(2)]);
var inst_107805 = (inst_107804__$1 == null);
var state_107827__$1 = (function (){var statearr_107831 = state_107827;
(statearr_107831[(7)] = inst_107804__$1);

return statearr_107831;
})();
if(cljs.core.truth_(inst_107805)){
var statearr_107832_107855 = state_107827__$1;
(statearr_107832_107855[(1)] = (5));

} else {
var statearr_107833_107856 = state_107827__$1;
(statearr_107833_107856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (13))){
var state_107827__$1 = state_107827;
var statearr_107834_107857 = state_107827__$1;
(statearr_107834_107857[(2)] = null);

(statearr_107834_107857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (6))){
var inst_107804 = (state_107827[(7)]);
var inst_107810 = p.call(null,inst_107804);
var state_107827__$1 = state_107827;
if(cljs.core.truth_(inst_107810)){
var statearr_107835_107858 = state_107827__$1;
(statearr_107835_107858[(1)] = (9));

} else {
var statearr_107836_107859 = state_107827__$1;
(statearr_107836_107859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (3))){
var inst_107825 = (state_107827[(2)]);
var state_107827__$1 = state_107827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107827__$1,inst_107825);
} else {
if((state_val_107828 === (12))){
var state_107827__$1 = state_107827;
var statearr_107837_107860 = state_107827__$1;
(statearr_107837_107860[(2)] = null);

(statearr_107837_107860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (2))){
var state_107827__$1 = state_107827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107827__$1,(4),ch);
} else {
if((state_val_107828 === (11))){
var inst_107804 = (state_107827[(7)]);
var inst_107814 = (state_107827[(2)]);
var state_107827__$1 = state_107827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107827__$1,(8),inst_107814,inst_107804);
} else {
if((state_val_107828 === (9))){
var state_107827__$1 = state_107827;
var statearr_107838_107861 = state_107827__$1;
(statearr_107838_107861[(2)] = tc);

(statearr_107838_107861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (5))){
var inst_107807 = cljs.core.async.close_BANG_.call(null,tc);
var inst_107808 = cljs.core.async.close_BANG_.call(null,fc);
var state_107827__$1 = (function (){var statearr_107839 = state_107827;
(statearr_107839[(8)] = inst_107807);

return statearr_107839;
})();
var statearr_107840_107862 = state_107827__$1;
(statearr_107840_107862[(2)] = inst_107808);

(statearr_107840_107862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (14))){
var inst_107821 = (state_107827[(2)]);
var state_107827__$1 = state_107827;
var statearr_107841_107863 = state_107827__$1;
(statearr_107841_107863[(2)] = inst_107821);

(statearr_107841_107863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (10))){
var state_107827__$1 = state_107827;
var statearr_107842_107864 = state_107827__$1;
(statearr_107842_107864[(2)] = fc);

(statearr_107842_107864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107828 === (8))){
var inst_107816 = (state_107827[(2)]);
var state_107827__$1 = state_107827;
if(cljs.core.truth_(inst_107816)){
var statearr_107843_107865 = state_107827__$1;
(statearr_107843_107865[(1)] = (12));

} else {
var statearr_107844_107866 = state_107827__$1;
(statearr_107844_107866[(1)] = (13));

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
});})(c__9199__auto___107852,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___107852,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_107848 = [null,null,null,null,null,null,null,null,null];
(statearr_107848[(0)] = state_machine__9185__auto__);

(statearr_107848[(1)] = (1));

return statearr_107848;
});
var state_machine__9185__auto____1 = (function (state_107827){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107849){if((e107849 instanceof Object)){
var ex__9188__auto__ = e107849;
var statearr_107850_107867 = state_107827;
(statearr_107850_107867[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107868 = state_107827;
state_107827 = G__107868;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107827){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___107852,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_107851 = f__9200__auto__.call(null);
(statearr_107851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___107852);

return statearr_107851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___107852,tc,fc))
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
return (function (state_107915){
var state_val_107916 = (state_107915[(1)]);
if((state_val_107916 === (7))){
var inst_107911 = (state_107915[(2)]);
var state_107915__$1 = state_107915;
var statearr_107917_107933 = state_107915__$1;
(statearr_107917_107933[(2)] = inst_107911);

(statearr_107917_107933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107916 === (6))){
var inst_107901 = (state_107915[(7)]);
var inst_107904 = (state_107915[(8)]);
var inst_107908 = f.call(null,inst_107901,inst_107904);
var inst_107901__$1 = inst_107908;
var state_107915__$1 = (function (){var statearr_107918 = state_107915;
(statearr_107918[(7)] = inst_107901__$1);

return statearr_107918;
})();
var statearr_107919_107934 = state_107915__$1;
(statearr_107919_107934[(2)] = null);

(statearr_107919_107934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107916 === (5))){
var inst_107901 = (state_107915[(7)]);
var state_107915__$1 = state_107915;
var statearr_107920_107935 = state_107915__$1;
(statearr_107920_107935[(2)] = inst_107901);

(statearr_107920_107935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107916 === (4))){
var inst_107904 = (state_107915[(8)]);
var inst_107904__$1 = (state_107915[(2)]);
var inst_107905 = (inst_107904__$1 == null);
var state_107915__$1 = (function (){var statearr_107921 = state_107915;
(statearr_107921[(8)] = inst_107904__$1);

return statearr_107921;
})();
if(cljs.core.truth_(inst_107905)){
var statearr_107922_107936 = state_107915__$1;
(statearr_107922_107936[(1)] = (5));

} else {
var statearr_107923_107937 = state_107915__$1;
(statearr_107923_107937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107916 === (3))){
var inst_107913 = (state_107915[(2)]);
var state_107915__$1 = state_107915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107915__$1,inst_107913);
} else {
if((state_val_107916 === (2))){
var state_107915__$1 = state_107915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107915__$1,(4),ch);
} else {
if((state_val_107916 === (1))){
var inst_107901 = init;
var state_107915__$1 = (function (){var statearr_107924 = state_107915;
(statearr_107924[(7)] = inst_107901);

return statearr_107924;
})();
var statearr_107925_107938 = state_107915__$1;
(statearr_107925_107938[(2)] = null);

(statearr_107925_107938[(1)] = (2));


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
var statearr_107929 = [null,null,null,null,null,null,null,null,null];
(statearr_107929[(0)] = state_machine__9185__auto__);

(statearr_107929[(1)] = (1));

return statearr_107929;
});
var state_machine__9185__auto____1 = (function (state_107915){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_107915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e107930){if((e107930 instanceof Object)){
var ex__9188__auto__ = e107930;
var statearr_107931_107939 = state_107915;
(statearr_107931_107939[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107940 = state_107915;
state_107915 = G__107940;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_107915){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_107915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_107932 = f__9200__auto__.call(null);
(statearr_107932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_107932;
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
return (function (state_108014){
var state_val_108015 = (state_108014[(1)]);
if((state_val_108015 === (7))){
var inst_107996 = (state_108014[(2)]);
var state_108014__$1 = state_108014;
var statearr_108016_108039 = state_108014__$1;
(statearr_108016_108039[(2)] = inst_107996);

(statearr_108016_108039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (1))){
var inst_107990 = cljs.core.seq.call(null,coll);
var inst_107991 = inst_107990;
var state_108014__$1 = (function (){var statearr_108017 = state_108014;
(statearr_108017[(7)] = inst_107991);

return statearr_108017;
})();
var statearr_108018_108040 = state_108014__$1;
(statearr_108018_108040[(2)] = null);

(statearr_108018_108040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (4))){
var inst_107991 = (state_108014[(7)]);
var inst_107994 = cljs.core.first.call(null,inst_107991);
var state_108014__$1 = state_108014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_108014__$1,(7),ch,inst_107994);
} else {
if((state_val_108015 === (13))){
var inst_108008 = (state_108014[(2)]);
var state_108014__$1 = state_108014;
var statearr_108019_108041 = state_108014__$1;
(statearr_108019_108041[(2)] = inst_108008);

(statearr_108019_108041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (6))){
var inst_107999 = (state_108014[(2)]);
var state_108014__$1 = state_108014;
if(cljs.core.truth_(inst_107999)){
var statearr_108020_108042 = state_108014__$1;
(statearr_108020_108042[(1)] = (8));

} else {
var statearr_108021_108043 = state_108014__$1;
(statearr_108021_108043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (3))){
var inst_108012 = (state_108014[(2)]);
var state_108014__$1 = state_108014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108014__$1,inst_108012);
} else {
if((state_val_108015 === (12))){
var state_108014__$1 = state_108014;
var statearr_108022_108044 = state_108014__$1;
(statearr_108022_108044[(2)] = null);

(statearr_108022_108044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (2))){
var inst_107991 = (state_108014[(7)]);
var state_108014__$1 = state_108014;
if(cljs.core.truth_(inst_107991)){
var statearr_108023_108045 = state_108014__$1;
(statearr_108023_108045[(1)] = (4));

} else {
var statearr_108024_108046 = state_108014__$1;
(statearr_108024_108046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (11))){
var inst_108005 = cljs.core.async.close_BANG_.call(null,ch);
var state_108014__$1 = state_108014;
var statearr_108025_108047 = state_108014__$1;
(statearr_108025_108047[(2)] = inst_108005);

(statearr_108025_108047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (9))){
var state_108014__$1 = state_108014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_108026_108048 = state_108014__$1;
(statearr_108026_108048[(1)] = (11));

} else {
var statearr_108027_108049 = state_108014__$1;
(statearr_108027_108049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (5))){
var inst_107991 = (state_108014[(7)]);
var state_108014__$1 = state_108014;
var statearr_108028_108050 = state_108014__$1;
(statearr_108028_108050[(2)] = inst_107991);

(statearr_108028_108050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (10))){
var inst_108010 = (state_108014[(2)]);
var state_108014__$1 = state_108014;
var statearr_108029_108051 = state_108014__$1;
(statearr_108029_108051[(2)] = inst_108010);

(statearr_108029_108051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108015 === (8))){
var inst_107991 = (state_108014[(7)]);
var inst_108001 = cljs.core.next.call(null,inst_107991);
var inst_107991__$1 = inst_108001;
var state_108014__$1 = (function (){var statearr_108030 = state_108014;
(statearr_108030[(7)] = inst_107991__$1);

return statearr_108030;
})();
var statearr_108031_108052 = state_108014__$1;
(statearr_108031_108052[(2)] = null);

(statearr_108031_108052[(1)] = (2));


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
var statearr_108035 = [null,null,null,null,null,null,null,null];
(statearr_108035[(0)] = state_machine__9185__auto__);

(statearr_108035[(1)] = (1));

return statearr_108035;
});
var state_machine__9185__auto____1 = (function (state_108014){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_108014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e108036){if((e108036 instanceof Object)){
var ex__9188__auto__ = e108036;
var statearr_108037_108053 = state_108014;
(statearr_108037_108053[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108054 = state_108014;
state_108014 = G__108054;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_108014){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_108014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_108038 = f__9200__auto__.call(null);
(statearr_108038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_108038;
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

cljs.core.async.Mux = (function (){var obj108056 = {};
return obj108056;
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


cljs.core.async.Mult = (function (){var obj108058 = {};
return obj108058;
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
if(typeof cljs.core.async.t108280 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t108280 = (function (cs,ch,mult,meta108281){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta108281 = meta108281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t108280.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t108280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t108280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t108280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t108280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t108280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t108280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_108282){
var self__ = this;
var _108282__$1 = this;
return self__.meta108281;
});})(cs))
;

cljs.core.async.t108280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_108282,meta108281__$1){
var self__ = this;
var _108282__$1 = this;
return (new cljs.core.async.t108280(self__.cs,self__.ch,self__.mult,meta108281__$1));
});})(cs))
;

cljs.core.async.t108280.cljs$lang$type = true;

cljs.core.async.t108280.cljs$lang$ctorStr = "cljs.core.async/t108280";

cljs.core.async.t108280.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t108280");
});})(cs))
;

cljs.core.async.__GT_t108280 = ((function (cs){
return (function __GT_t108280(cs__$1,ch__$1,mult__$1,meta108281){
return (new cljs.core.async.t108280(cs__$1,ch__$1,mult__$1,meta108281));
});})(cs))
;

}

return (new cljs.core.async.t108280(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___108501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___108501,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___108501,cs,m,dchan,dctr,done){
return (function (state_108413){
var state_val_108414 = (state_108413[(1)]);
if((state_val_108414 === (7))){
var inst_108409 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108415_108502 = state_108413__$1;
(statearr_108415_108502[(2)] = inst_108409);

(statearr_108415_108502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (20))){
var inst_108314 = (state_108413[(7)]);
var inst_108324 = cljs.core.first.call(null,inst_108314);
var inst_108325 = cljs.core.nth.call(null,inst_108324,(0),null);
var inst_108326 = cljs.core.nth.call(null,inst_108324,(1),null);
var state_108413__$1 = (function (){var statearr_108416 = state_108413;
(statearr_108416[(8)] = inst_108325);

return statearr_108416;
})();
if(cljs.core.truth_(inst_108326)){
var statearr_108417_108503 = state_108413__$1;
(statearr_108417_108503[(1)] = (22));

} else {
var statearr_108418_108504 = state_108413__$1;
(statearr_108418_108504[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (27))){
var inst_108361 = (state_108413[(9)]);
var inst_108285 = (state_108413[(10)]);
var inst_108354 = (state_108413[(11)]);
var inst_108356 = (state_108413[(12)]);
var inst_108361__$1 = cljs.core._nth.call(null,inst_108354,inst_108356);
var inst_108362 = cljs.core.async.put_BANG_.call(null,inst_108361__$1,inst_108285,done);
var state_108413__$1 = (function (){var statearr_108419 = state_108413;
(statearr_108419[(9)] = inst_108361__$1);

return statearr_108419;
})();
if(cljs.core.truth_(inst_108362)){
var statearr_108420_108505 = state_108413__$1;
(statearr_108420_108505[(1)] = (30));

} else {
var statearr_108421_108506 = state_108413__$1;
(statearr_108421_108506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (1))){
var state_108413__$1 = state_108413;
var statearr_108422_108507 = state_108413__$1;
(statearr_108422_108507[(2)] = null);

(statearr_108422_108507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (24))){
var inst_108314 = (state_108413[(7)]);
var inst_108331 = (state_108413[(2)]);
var inst_108332 = cljs.core.next.call(null,inst_108314);
var inst_108294 = inst_108332;
var inst_108295 = null;
var inst_108296 = (0);
var inst_108297 = (0);
var state_108413__$1 = (function (){var statearr_108423 = state_108413;
(statearr_108423[(13)] = inst_108297);

(statearr_108423[(14)] = inst_108295);

(statearr_108423[(15)] = inst_108331);

(statearr_108423[(16)] = inst_108296);

(statearr_108423[(17)] = inst_108294);

return statearr_108423;
})();
var statearr_108424_108508 = state_108413__$1;
(statearr_108424_108508[(2)] = null);

(statearr_108424_108508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (39))){
var state_108413__$1 = state_108413;
var statearr_108428_108509 = state_108413__$1;
(statearr_108428_108509[(2)] = null);

(statearr_108428_108509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (4))){
var inst_108285 = (state_108413[(10)]);
var inst_108285__$1 = (state_108413[(2)]);
var inst_108286 = (inst_108285__$1 == null);
var state_108413__$1 = (function (){var statearr_108429 = state_108413;
(statearr_108429[(10)] = inst_108285__$1);

return statearr_108429;
})();
if(cljs.core.truth_(inst_108286)){
var statearr_108430_108510 = state_108413__$1;
(statearr_108430_108510[(1)] = (5));

} else {
var statearr_108431_108511 = state_108413__$1;
(statearr_108431_108511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (15))){
var inst_108297 = (state_108413[(13)]);
var inst_108295 = (state_108413[(14)]);
var inst_108296 = (state_108413[(16)]);
var inst_108294 = (state_108413[(17)]);
var inst_108310 = (state_108413[(2)]);
var inst_108311 = (inst_108297 + (1));
var tmp108425 = inst_108295;
var tmp108426 = inst_108296;
var tmp108427 = inst_108294;
var inst_108294__$1 = tmp108427;
var inst_108295__$1 = tmp108425;
var inst_108296__$1 = tmp108426;
var inst_108297__$1 = inst_108311;
var state_108413__$1 = (function (){var statearr_108432 = state_108413;
(statearr_108432[(13)] = inst_108297__$1);

(statearr_108432[(18)] = inst_108310);

(statearr_108432[(14)] = inst_108295__$1);

(statearr_108432[(16)] = inst_108296__$1);

(statearr_108432[(17)] = inst_108294__$1);

return statearr_108432;
})();
var statearr_108433_108512 = state_108413__$1;
(statearr_108433_108512[(2)] = null);

(statearr_108433_108512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (21))){
var inst_108335 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108437_108513 = state_108413__$1;
(statearr_108437_108513[(2)] = inst_108335);

(statearr_108437_108513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (31))){
var inst_108361 = (state_108413[(9)]);
var inst_108365 = done.call(null,null);
var inst_108366 = cljs.core.async.untap_STAR_.call(null,m,inst_108361);
var state_108413__$1 = (function (){var statearr_108438 = state_108413;
(statearr_108438[(19)] = inst_108365);

return statearr_108438;
})();
var statearr_108439_108514 = state_108413__$1;
(statearr_108439_108514[(2)] = inst_108366);

(statearr_108439_108514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (32))){
var inst_108354 = (state_108413[(11)]);
var inst_108355 = (state_108413[(20)]);
var inst_108356 = (state_108413[(12)]);
var inst_108353 = (state_108413[(21)]);
var inst_108368 = (state_108413[(2)]);
var inst_108369 = (inst_108356 + (1));
var tmp108434 = inst_108354;
var tmp108435 = inst_108355;
var tmp108436 = inst_108353;
var inst_108353__$1 = tmp108436;
var inst_108354__$1 = tmp108434;
var inst_108355__$1 = tmp108435;
var inst_108356__$1 = inst_108369;
var state_108413__$1 = (function (){var statearr_108440 = state_108413;
(statearr_108440[(22)] = inst_108368);

(statearr_108440[(11)] = inst_108354__$1);

(statearr_108440[(20)] = inst_108355__$1);

(statearr_108440[(12)] = inst_108356__$1);

(statearr_108440[(21)] = inst_108353__$1);

return statearr_108440;
})();
var statearr_108441_108515 = state_108413__$1;
(statearr_108441_108515[(2)] = null);

(statearr_108441_108515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (40))){
var inst_108381 = (state_108413[(23)]);
var inst_108385 = done.call(null,null);
var inst_108386 = cljs.core.async.untap_STAR_.call(null,m,inst_108381);
var state_108413__$1 = (function (){var statearr_108442 = state_108413;
(statearr_108442[(24)] = inst_108385);

return statearr_108442;
})();
var statearr_108443_108516 = state_108413__$1;
(statearr_108443_108516[(2)] = inst_108386);

(statearr_108443_108516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (33))){
var inst_108372 = (state_108413[(25)]);
var inst_108374 = cljs.core.chunked_seq_QMARK_.call(null,inst_108372);
var state_108413__$1 = state_108413;
if(inst_108374){
var statearr_108444_108517 = state_108413__$1;
(statearr_108444_108517[(1)] = (36));

} else {
var statearr_108445_108518 = state_108413__$1;
(statearr_108445_108518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (13))){
var inst_108304 = (state_108413[(26)]);
var inst_108307 = cljs.core.async.close_BANG_.call(null,inst_108304);
var state_108413__$1 = state_108413;
var statearr_108446_108519 = state_108413__$1;
(statearr_108446_108519[(2)] = inst_108307);

(statearr_108446_108519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (22))){
var inst_108325 = (state_108413[(8)]);
var inst_108328 = cljs.core.async.close_BANG_.call(null,inst_108325);
var state_108413__$1 = state_108413;
var statearr_108447_108520 = state_108413__$1;
(statearr_108447_108520[(2)] = inst_108328);

(statearr_108447_108520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (36))){
var inst_108372 = (state_108413[(25)]);
var inst_108376 = cljs.core.chunk_first.call(null,inst_108372);
var inst_108377 = cljs.core.chunk_rest.call(null,inst_108372);
var inst_108378 = cljs.core.count.call(null,inst_108376);
var inst_108353 = inst_108377;
var inst_108354 = inst_108376;
var inst_108355 = inst_108378;
var inst_108356 = (0);
var state_108413__$1 = (function (){var statearr_108448 = state_108413;
(statearr_108448[(11)] = inst_108354);

(statearr_108448[(20)] = inst_108355);

(statearr_108448[(12)] = inst_108356);

(statearr_108448[(21)] = inst_108353);

return statearr_108448;
})();
var statearr_108449_108521 = state_108413__$1;
(statearr_108449_108521[(2)] = null);

(statearr_108449_108521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (41))){
var inst_108372 = (state_108413[(25)]);
var inst_108388 = (state_108413[(2)]);
var inst_108389 = cljs.core.next.call(null,inst_108372);
var inst_108353 = inst_108389;
var inst_108354 = null;
var inst_108355 = (0);
var inst_108356 = (0);
var state_108413__$1 = (function (){var statearr_108450 = state_108413;
(statearr_108450[(11)] = inst_108354);

(statearr_108450[(27)] = inst_108388);

(statearr_108450[(20)] = inst_108355);

(statearr_108450[(12)] = inst_108356);

(statearr_108450[(21)] = inst_108353);

return statearr_108450;
})();
var statearr_108451_108522 = state_108413__$1;
(statearr_108451_108522[(2)] = null);

(statearr_108451_108522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (43))){
var state_108413__$1 = state_108413;
var statearr_108452_108523 = state_108413__$1;
(statearr_108452_108523[(2)] = null);

(statearr_108452_108523[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (29))){
var inst_108397 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108453_108524 = state_108413__$1;
(statearr_108453_108524[(2)] = inst_108397);

(statearr_108453_108524[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (44))){
var inst_108406 = (state_108413[(2)]);
var state_108413__$1 = (function (){var statearr_108454 = state_108413;
(statearr_108454[(28)] = inst_108406);

return statearr_108454;
})();
var statearr_108455_108525 = state_108413__$1;
(statearr_108455_108525[(2)] = null);

(statearr_108455_108525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (6))){
var inst_108345 = (state_108413[(29)]);
var inst_108344 = cljs.core.deref.call(null,cs);
var inst_108345__$1 = cljs.core.keys.call(null,inst_108344);
var inst_108346 = cljs.core.count.call(null,inst_108345__$1);
var inst_108347 = cljs.core.reset_BANG_.call(null,dctr,inst_108346);
var inst_108352 = cljs.core.seq.call(null,inst_108345__$1);
var inst_108353 = inst_108352;
var inst_108354 = null;
var inst_108355 = (0);
var inst_108356 = (0);
var state_108413__$1 = (function (){var statearr_108456 = state_108413;
(statearr_108456[(11)] = inst_108354);

(statearr_108456[(20)] = inst_108355);

(statearr_108456[(30)] = inst_108347);

(statearr_108456[(12)] = inst_108356);

(statearr_108456[(29)] = inst_108345__$1);

(statearr_108456[(21)] = inst_108353);

return statearr_108456;
})();
var statearr_108457_108526 = state_108413__$1;
(statearr_108457_108526[(2)] = null);

(statearr_108457_108526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (28))){
var inst_108372 = (state_108413[(25)]);
var inst_108353 = (state_108413[(21)]);
var inst_108372__$1 = cljs.core.seq.call(null,inst_108353);
var state_108413__$1 = (function (){var statearr_108458 = state_108413;
(statearr_108458[(25)] = inst_108372__$1);

return statearr_108458;
})();
if(inst_108372__$1){
var statearr_108459_108527 = state_108413__$1;
(statearr_108459_108527[(1)] = (33));

} else {
var statearr_108460_108528 = state_108413__$1;
(statearr_108460_108528[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (25))){
var inst_108355 = (state_108413[(20)]);
var inst_108356 = (state_108413[(12)]);
var inst_108358 = (inst_108356 < inst_108355);
var inst_108359 = inst_108358;
var state_108413__$1 = state_108413;
if(cljs.core.truth_(inst_108359)){
var statearr_108461_108529 = state_108413__$1;
(statearr_108461_108529[(1)] = (27));

} else {
var statearr_108462_108530 = state_108413__$1;
(statearr_108462_108530[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (34))){
var state_108413__$1 = state_108413;
var statearr_108463_108531 = state_108413__$1;
(statearr_108463_108531[(2)] = null);

(statearr_108463_108531[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (17))){
var state_108413__$1 = state_108413;
var statearr_108464_108532 = state_108413__$1;
(statearr_108464_108532[(2)] = null);

(statearr_108464_108532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (3))){
var inst_108411 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108413__$1,inst_108411);
} else {
if((state_val_108414 === (12))){
var inst_108340 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108465_108533 = state_108413__$1;
(statearr_108465_108533[(2)] = inst_108340);

(statearr_108465_108533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (2))){
var state_108413__$1 = state_108413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108413__$1,(4),ch);
} else {
if((state_val_108414 === (23))){
var state_108413__$1 = state_108413;
var statearr_108466_108534 = state_108413__$1;
(statearr_108466_108534[(2)] = null);

(statearr_108466_108534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (35))){
var inst_108395 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108467_108535 = state_108413__$1;
(statearr_108467_108535[(2)] = inst_108395);

(statearr_108467_108535[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (19))){
var inst_108314 = (state_108413[(7)]);
var inst_108318 = cljs.core.chunk_first.call(null,inst_108314);
var inst_108319 = cljs.core.chunk_rest.call(null,inst_108314);
var inst_108320 = cljs.core.count.call(null,inst_108318);
var inst_108294 = inst_108319;
var inst_108295 = inst_108318;
var inst_108296 = inst_108320;
var inst_108297 = (0);
var state_108413__$1 = (function (){var statearr_108468 = state_108413;
(statearr_108468[(13)] = inst_108297);

(statearr_108468[(14)] = inst_108295);

(statearr_108468[(16)] = inst_108296);

(statearr_108468[(17)] = inst_108294);

return statearr_108468;
})();
var statearr_108469_108536 = state_108413__$1;
(statearr_108469_108536[(2)] = null);

(statearr_108469_108536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (11))){
var inst_108314 = (state_108413[(7)]);
var inst_108294 = (state_108413[(17)]);
var inst_108314__$1 = cljs.core.seq.call(null,inst_108294);
var state_108413__$1 = (function (){var statearr_108470 = state_108413;
(statearr_108470[(7)] = inst_108314__$1);

return statearr_108470;
})();
if(inst_108314__$1){
var statearr_108471_108537 = state_108413__$1;
(statearr_108471_108537[(1)] = (16));

} else {
var statearr_108472_108538 = state_108413__$1;
(statearr_108472_108538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (9))){
var inst_108342 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108473_108539 = state_108413__$1;
(statearr_108473_108539[(2)] = inst_108342);

(statearr_108473_108539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (5))){
var inst_108292 = cljs.core.deref.call(null,cs);
var inst_108293 = cljs.core.seq.call(null,inst_108292);
var inst_108294 = inst_108293;
var inst_108295 = null;
var inst_108296 = (0);
var inst_108297 = (0);
var state_108413__$1 = (function (){var statearr_108474 = state_108413;
(statearr_108474[(13)] = inst_108297);

(statearr_108474[(14)] = inst_108295);

(statearr_108474[(16)] = inst_108296);

(statearr_108474[(17)] = inst_108294);

return statearr_108474;
})();
var statearr_108475_108540 = state_108413__$1;
(statearr_108475_108540[(2)] = null);

(statearr_108475_108540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (14))){
var state_108413__$1 = state_108413;
var statearr_108476_108541 = state_108413__$1;
(statearr_108476_108541[(2)] = null);

(statearr_108476_108541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (45))){
var inst_108403 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108477_108542 = state_108413__$1;
(statearr_108477_108542[(2)] = inst_108403);

(statearr_108477_108542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (26))){
var inst_108345 = (state_108413[(29)]);
var inst_108399 = (state_108413[(2)]);
var inst_108400 = cljs.core.seq.call(null,inst_108345);
var state_108413__$1 = (function (){var statearr_108478 = state_108413;
(statearr_108478[(31)] = inst_108399);

return statearr_108478;
})();
if(inst_108400){
var statearr_108479_108543 = state_108413__$1;
(statearr_108479_108543[(1)] = (42));

} else {
var statearr_108480_108544 = state_108413__$1;
(statearr_108480_108544[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (16))){
var inst_108314 = (state_108413[(7)]);
var inst_108316 = cljs.core.chunked_seq_QMARK_.call(null,inst_108314);
var state_108413__$1 = state_108413;
if(inst_108316){
var statearr_108481_108545 = state_108413__$1;
(statearr_108481_108545[(1)] = (19));

} else {
var statearr_108482_108546 = state_108413__$1;
(statearr_108482_108546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (38))){
var inst_108392 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108483_108547 = state_108413__$1;
(statearr_108483_108547[(2)] = inst_108392);

(statearr_108483_108547[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (30))){
var state_108413__$1 = state_108413;
var statearr_108484_108548 = state_108413__$1;
(statearr_108484_108548[(2)] = null);

(statearr_108484_108548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (10))){
var inst_108297 = (state_108413[(13)]);
var inst_108295 = (state_108413[(14)]);
var inst_108303 = cljs.core._nth.call(null,inst_108295,inst_108297);
var inst_108304 = cljs.core.nth.call(null,inst_108303,(0),null);
var inst_108305 = cljs.core.nth.call(null,inst_108303,(1),null);
var state_108413__$1 = (function (){var statearr_108485 = state_108413;
(statearr_108485[(26)] = inst_108304);

return statearr_108485;
})();
if(cljs.core.truth_(inst_108305)){
var statearr_108486_108549 = state_108413__$1;
(statearr_108486_108549[(1)] = (13));

} else {
var statearr_108487_108550 = state_108413__$1;
(statearr_108487_108550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (18))){
var inst_108338 = (state_108413[(2)]);
var state_108413__$1 = state_108413;
var statearr_108488_108551 = state_108413__$1;
(statearr_108488_108551[(2)] = inst_108338);

(statearr_108488_108551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (42))){
var state_108413__$1 = state_108413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108413__$1,(45),dchan);
} else {
if((state_val_108414 === (37))){
var inst_108285 = (state_108413[(10)]);
var inst_108381 = (state_108413[(23)]);
var inst_108372 = (state_108413[(25)]);
var inst_108381__$1 = cljs.core.first.call(null,inst_108372);
var inst_108382 = cljs.core.async.put_BANG_.call(null,inst_108381__$1,inst_108285,done);
var state_108413__$1 = (function (){var statearr_108489 = state_108413;
(statearr_108489[(23)] = inst_108381__$1);

return statearr_108489;
})();
if(cljs.core.truth_(inst_108382)){
var statearr_108490_108552 = state_108413__$1;
(statearr_108490_108552[(1)] = (39));

} else {
var statearr_108491_108553 = state_108413__$1;
(statearr_108491_108553[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108414 === (8))){
var inst_108297 = (state_108413[(13)]);
var inst_108296 = (state_108413[(16)]);
var inst_108299 = (inst_108297 < inst_108296);
var inst_108300 = inst_108299;
var state_108413__$1 = state_108413;
if(cljs.core.truth_(inst_108300)){
var statearr_108492_108554 = state_108413__$1;
(statearr_108492_108554[(1)] = (10));

} else {
var statearr_108493_108555 = state_108413__$1;
(statearr_108493_108555[(1)] = (11));

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
});})(c__9199__auto___108501,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___108501,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_108497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108497[(0)] = state_machine__9185__auto__);

(statearr_108497[(1)] = (1));

return statearr_108497;
});
var state_machine__9185__auto____1 = (function (state_108413){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_108413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e108498){if((e108498 instanceof Object)){
var ex__9188__auto__ = e108498;
var statearr_108499_108556 = state_108413;
(statearr_108499_108556[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108557 = state_108413;
state_108413 = G__108557;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_108413){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_108413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___108501,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_108500 = f__9200__auto__.call(null);
(statearr_108500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___108501);

return statearr_108500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___108501,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj108559 = {};
return obj108559;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__108560){
var map__108565 = p__108560;
var map__108565__$1 = ((cljs.core.seq_QMARK_.call(null,map__108565))?cljs.core.apply.call(null,cljs.core.hash_map,map__108565):map__108565);
var opts = map__108565__$1;
var statearr_108566_108569 = state;
(statearr_108566_108569[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__108565,map__108565__$1,opts){
return (function (val){
var statearr_108567_108570 = state;
(statearr_108567_108570[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__108565,map__108565__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_108568_108571 = state;
(statearr_108568_108571[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__108560 = null;
if (arguments.length > 3) {
  p__108560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__108560);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__108572){
var state = cljs.core.first(arglist__108572);
arglist__108572 = cljs.core.next(arglist__108572);
var cont_block = cljs.core.first(arglist__108572);
arglist__108572 = cljs.core.next(arglist__108572);
var ports = cljs.core.first(arglist__108572);
var p__108560 = cljs.core.rest(arglist__108572);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__108560);
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
if(typeof cljs.core.async.t108692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t108692 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta108693){
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
this.meta108693 = meta108693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t108692.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t108692.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t108692.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t108692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_108694){
var self__ = this;
var _108694__$1 = this;
return self__.meta108693;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_108694,meta108693__$1){
var self__ = this;
var _108694__$1 = this;
return (new cljs.core.async.t108692(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta108693__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t108692.cljs$lang$type = true;

cljs.core.async.t108692.cljs$lang$ctorStr = "cljs.core.async/t108692";

cljs.core.async.t108692.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t108692");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t108692 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t108692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta108693){
return (new cljs.core.async.t108692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta108693));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t108692(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___108811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_108764){
var state_val_108765 = (state_108764[(1)]);
if((state_val_108765 === (7))){
var inst_108708 = (state_108764[(7)]);
var inst_108713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_108708);
var state_108764__$1 = state_108764;
var statearr_108766_108812 = state_108764__$1;
(statearr_108766_108812[(2)] = inst_108713);

(statearr_108766_108812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (20))){
var inst_108723 = (state_108764[(8)]);
var state_108764__$1 = state_108764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_108764__$1,(23),out,inst_108723);
} else {
if((state_val_108765 === (1))){
var inst_108698 = (state_108764[(9)]);
var inst_108698__$1 = calc_state.call(null);
var inst_108699 = cljs.core.seq_QMARK_.call(null,inst_108698__$1);
var state_108764__$1 = (function (){var statearr_108767 = state_108764;
(statearr_108767[(9)] = inst_108698__$1);

return statearr_108767;
})();
if(inst_108699){
var statearr_108768_108813 = state_108764__$1;
(statearr_108768_108813[(1)] = (2));

} else {
var statearr_108769_108814 = state_108764__$1;
(statearr_108769_108814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (24))){
var inst_108716 = (state_108764[(10)]);
var inst_108708 = inst_108716;
var state_108764__$1 = (function (){var statearr_108770 = state_108764;
(statearr_108770[(7)] = inst_108708);

return statearr_108770;
})();
var statearr_108771_108815 = state_108764__$1;
(statearr_108771_108815[(2)] = null);

(statearr_108771_108815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (4))){
var inst_108698 = (state_108764[(9)]);
var inst_108704 = (state_108764[(2)]);
var inst_108705 = cljs.core.get.call(null,inst_108704,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_108706 = cljs.core.get.call(null,inst_108704,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_108707 = cljs.core.get.call(null,inst_108704,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_108708 = inst_108698;
var state_108764__$1 = (function (){var statearr_108772 = state_108764;
(statearr_108772[(11)] = inst_108707);

(statearr_108772[(7)] = inst_108708);

(statearr_108772[(12)] = inst_108706);

(statearr_108772[(13)] = inst_108705);

return statearr_108772;
})();
var statearr_108773_108816 = state_108764__$1;
(statearr_108773_108816[(2)] = null);

(statearr_108773_108816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (15))){
var state_108764__$1 = state_108764;
var statearr_108774_108817 = state_108764__$1;
(statearr_108774_108817[(2)] = null);

(statearr_108774_108817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (21))){
var inst_108716 = (state_108764[(10)]);
var inst_108708 = inst_108716;
var state_108764__$1 = (function (){var statearr_108775 = state_108764;
(statearr_108775[(7)] = inst_108708);

return statearr_108775;
})();
var statearr_108776_108818 = state_108764__$1;
(statearr_108776_108818[(2)] = null);

(statearr_108776_108818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (13))){
var inst_108760 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
var statearr_108777_108819 = state_108764__$1;
(statearr_108777_108819[(2)] = inst_108760);

(statearr_108777_108819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (22))){
var inst_108758 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
var statearr_108778_108820 = state_108764__$1;
(statearr_108778_108820[(2)] = inst_108758);

(statearr_108778_108820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (6))){
var inst_108762 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108764__$1,inst_108762);
} else {
if((state_val_108765 === (25))){
var state_108764__$1 = state_108764;
var statearr_108779_108821 = state_108764__$1;
(statearr_108779_108821[(2)] = null);

(statearr_108779_108821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (17))){
var inst_108738 = (state_108764[(14)]);
var state_108764__$1 = state_108764;
var statearr_108780_108822 = state_108764__$1;
(statearr_108780_108822[(2)] = inst_108738);

(statearr_108780_108822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (3))){
var inst_108698 = (state_108764[(9)]);
var state_108764__$1 = state_108764;
var statearr_108781_108823 = state_108764__$1;
(statearr_108781_108823[(2)] = inst_108698);

(statearr_108781_108823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (12))){
var inst_108719 = (state_108764[(15)]);
var inst_108724 = (state_108764[(16)]);
var inst_108738 = (state_108764[(14)]);
var inst_108738__$1 = inst_108719.call(null,inst_108724);
var state_108764__$1 = (function (){var statearr_108782 = state_108764;
(statearr_108782[(14)] = inst_108738__$1);

return statearr_108782;
})();
if(cljs.core.truth_(inst_108738__$1)){
var statearr_108783_108824 = state_108764__$1;
(statearr_108783_108824[(1)] = (17));

} else {
var statearr_108784_108825 = state_108764__$1;
(statearr_108784_108825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (2))){
var inst_108698 = (state_108764[(9)]);
var inst_108701 = cljs.core.apply.call(null,cljs.core.hash_map,inst_108698);
var state_108764__$1 = state_108764;
var statearr_108785_108826 = state_108764__$1;
(statearr_108785_108826[(2)] = inst_108701);

(statearr_108785_108826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (23))){
var inst_108749 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
if(cljs.core.truth_(inst_108749)){
var statearr_108786_108827 = state_108764__$1;
(statearr_108786_108827[(1)] = (24));

} else {
var statearr_108787_108828 = state_108764__$1;
(statearr_108787_108828[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (19))){
var inst_108746 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
if(cljs.core.truth_(inst_108746)){
var statearr_108788_108829 = state_108764__$1;
(statearr_108788_108829[(1)] = (20));

} else {
var statearr_108789_108830 = state_108764__$1;
(statearr_108789_108830[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (11))){
var inst_108723 = (state_108764[(8)]);
var inst_108729 = (inst_108723 == null);
var state_108764__$1 = state_108764;
if(cljs.core.truth_(inst_108729)){
var statearr_108790_108831 = state_108764__$1;
(statearr_108790_108831[(1)] = (14));

} else {
var statearr_108791_108832 = state_108764__$1;
(statearr_108791_108832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (9))){
var inst_108716 = (state_108764[(10)]);
var inst_108716__$1 = (state_108764[(2)]);
var inst_108717 = cljs.core.get.call(null,inst_108716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_108718 = cljs.core.get.call(null,inst_108716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_108719 = cljs.core.get.call(null,inst_108716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_108764__$1 = (function (){var statearr_108792 = state_108764;
(statearr_108792[(10)] = inst_108716__$1);

(statearr_108792[(15)] = inst_108719);

(statearr_108792[(17)] = inst_108718);

return statearr_108792;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_108764__$1,(10),inst_108717);
} else {
if((state_val_108765 === (5))){
var inst_108708 = (state_108764[(7)]);
var inst_108711 = cljs.core.seq_QMARK_.call(null,inst_108708);
var state_108764__$1 = state_108764;
if(inst_108711){
var statearr_108793_108833 = state_108764__$1;
(statearr_108793_108833[(1)] = (7));

} else {
var statearr_108794_108834 = state_108764__$1;
(statearr_108794_108834[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (14))){
var inst_108724 = (state_108764[(16)]);
var inst_108731 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_108724);
var state_108764__$1 = state_108764;
var statearr_108795_108835 = state_108764__$1;
(statearr_108795_108835[(2)] = inst_108731);

(statearr_108795_108835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (26))){
var inst_108754 = (state_108764[(2)]);
var state_108764__$1 = state_108764;
var statearr_108796_108836 = state_108764__$1;
(statearr_108796_108836[(2)] = inst_108754);

(statearr_108796_108836[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (16))){
var inst_108734 = (state_108764[(2)]);
var inst_108735 = calc_state.call(null);
var inst_108708 = inst_108735;
var state_108764__$1 = (function (){var statearr_108797 = state_108764;
(statearr_108797[(18)] = inst_108734);

(statearr_108797[(7)] = inst_108708);

return statearr_108797;
})();
var statearr_108798_108837 = state_108764__$1;
(statearr_108798_108837[(2)] = null);

(statearr_108798_108837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (10))){
var inst_108724 = (state_108764[(16)]);
var inst_108723 = (state_108764[(8)]);
var inst_108722 = (state_108764[(2)]);
var inst_108723__$1 = cljs.core.nth.call(null,inst_108722,(0),null);
var inst_108724__$1 = cljs.core.nth.call(null,inst_108722,(1),null);
var inst_108725 = (inst_108723__$1 == null);
var inst_108726 = cljs.core._EQ_.call(null,inst_108724__$1,change);
var inst_108727 = (inst_108725) || (inst_108726);
var state_108764__$1 = (function (){var statearr_108799 = state_108764;
(statearr_108799[(16)] = inst_108724__$1);

(statearr_108799[(8)] = inst_108723__$1);

return statearr_108799;
})();
if(cljs.core.truth_(inst_108727)){
var statearr_108800_108838 = state_108764__$1;
(statearr_108800_108838[(1)] = (11));

} else {
var statearr_108801_108839 = state_108764__$1;
(statearr_108801_108839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (18))){
var inst_108719 = (state_108764[(15)]);
var inst_108724 = (state_108764[(16)]);
var inst_108718 = (state_108764[(17)]);
var inst_108741 = cljs.core.empty_QMARK_.call(null,inst_108719);
var inst_108742 = inst_108718.call(null,inst_108724);
var inst_108743 = cljs.core.not.call(null,inst_108742);
var inst_108744 = (inst_108741) && (inst_108743);
var state_108764__$1 = state_108764;
var statearr_108802_108840 = state_108764__$1;
(statearr_108802_108840[(2)] = inst_108744);

(statearr_108802_108840[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108765 === (8))){
var inst_108708 = (state_108764[(7)]);
var state_108764__$1 = state_108764;
var statearr_108803_108841 = state_108764__$1;
(statearr_108803_108841[(2)] = inst_108708);

(statearr_108803_108841[(1)] = (9));


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
});})(c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_108807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108807[(0)] = state_machine__9185__auto__);

(statearr_108807[(1)] = (1));

return statearr_108807;
});
var state_machine__9185__auto____1 = (function (state_108764){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_108764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e108808){if((e108808 instanceof Object)){
var ex__9188__auto__ = e108808;
var statearr_108809_108842 = state_108764;
(statearr_108809_108842[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108843 = state_108764;
state_108764 = G__108843;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_108764){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_108764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_108810 = f__9200__auto__.call(null);
(statearr_108810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___108811);

return statearr_108810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___108811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj108845 = {};
return obj108845;
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
return (function (p1__108846_SHARP_){
if(cljs.core.truth_(p1__108846_SHARP_.call(null,topic))){
return p1__108846_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__108846_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t108969 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t108969 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta108970){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta108970 = meta108970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t108969.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t108969.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t108969.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t108969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t108969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t108969.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t108969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t108969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_108971){
var self__ = this;
var _108971__$1 = this;
return self__.meta108970;
});})(mults,ensure_mult))
;

cljs.core.async.t108969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_108971,meta108970__$1){
var self__ = this;
var _108971__$1 = this;
return (new cljs.core.async.t108969(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta108970__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t108969.cljs$lang$type = true;

cljs.core.async.t108969.cljs$lang$ctorStr = "cljs.core.async/t108969";

cljs.core.async.t108969.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t108969");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t108969 = ((function (mults,ensure_mult){
return (function __GT_t108969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta108970){
return (new cljs.core.async.t108969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta108970));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t108969(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___109091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109091,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109091,mults,ensure_mult,p){
return (function (state_109043){
var state_val_109044 = (state_109043[(1)]);
if((state_val_109044 === (7))){
var inst_109039 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109045_109092 = state_109043__$1;
(statearr_109045_109092[(2)] = inst_109039);

(statearr_109045_109092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (20))){
var state_109043__$1 = state_109043;
var statearr_109046_109093 = state_109043__$1;
(statearr_109046_109093[(2)] = null);

(statearr_109046_109093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (1))){
var state_109043__$1 = state_109043;
var statearr_109047_109094 = state_109043__$1;
(statearr_109047_109094[(2)] = null);

(statearr_109047_109094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (24))){
var inst_109022 = (state_109043[(7)]);
var inst_109031 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_109022);
var state_109043__$1 = state_109043;
var statearr_109048_109095 = state_109043__$1;
(statearr_109048_109095[(2)] = inst_109031);

(statearr_109048_109095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (4))){
var inst_108974 = (state_109043[(8)]);
var inst_108974__$1 = (state_109043[(2)]);
var inst_108975 = (inst_108974__$1 == null);
var state_109043__$1 = (function (){var statearr_109049 = state_109043;
(statearr_109049[(8)] = inst_108974__$1);

return statearr_109049;
})();
if(cljs.core.truth_(inst_108975)){
var statearr_109050_109096 = state_109043__$1;
(statearr_109050_109096[(1)] = (5));

} else {
var statearr_109051_109097 = state_109043__$1;
(statearr_109051_109097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (15))){
var inst_109016 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109052_109098 = state_109043__$1;
(statearr_109052_109098[(2)] = inst_109016);

(statearr_109052_109098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (21))){
var inst_109036 = (state_109043[(2)]);
var state_109043__$1 = (function (){var statearr_109053 = state_109043;
(statearr_109053[(9)] = inst_109036);

return statearr_109053;
})();
var statearr_109054_109099 = state_109043__$1;
(statearr_109054_109099[(2)] = null);

(statearr_109054_109099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (13))){
var inst_108998 = (state_109043[(10)]);
var inst_109000 = cljs.core.chunked_seq_QMARK_.call(null,inst_108998);
var state_109043__$1 = state_109043;
if(inst_109000){
var statearr_109055_109100 = state_109043__$1;
(statearr_109055_109100[(1)] = (16));

} else {
var statearr_109056_109101 = state_109043__$1;
(statearr_109056_109101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (22))){
var inst_109028 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
if(cljs.core.truth_(inst_109028)){
var statearr_109057_109102 = state_109043__$1;
(statearr_109057_109102[(1)] = (23));

} else {
var statearr_109058_109103 = state_109043__$1;
(statearr_109058_109103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (6))){
var inst_108974 = (state_109043[(8)]);
var inst_109022 = (state_109043[(7)]);
var inst_109024 = (state_109043[(11)]);
var inst_109022__$1 = topic_fn.call(null,inst_108974);
var inst_109023 = cljs.core.deref.call(null,mults);
var inst_109024__$1 = cljs.core.get.call(null,inst_109023,inst_109022__$1);
var state_109043__$1 = (function (){var statearr_109059 = state_109043;
(statearr_109059[(7)] = inst_109022__$1);

(statearr_109059[(11)] = inst_109024__$1);

return statearr_109059;
})();
if(cljs.core.truth_(inst_109024__$1)){
var statearr_109060_109104 = state_109043__$1;
(statearr_109060_109104[(1)] = (19));

} else {
var statearr_109061_109105 = state_109043__$1;
(statearr_109061_109105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (25))){
var inst_109033 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109062_109106 = state_109043__$1;
(statearr_109062_109106[(2)] = inst_109033);

(statearr_109062_109106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (17))){
var inst_108998 = (state_109043[(10)]);
var inst_109007 = cljs.core.first.call(null,inst_108998);
var inst_109008 = cljs.core.async.muxch_STAR_.call(null,inst_109007);
var inst_109009 = cljs.core.async.close_BANG_.call(null,inst_109008);
var inst_109010 = cljs.core.next.call(null,inst_108998);
var inst_108984 = inst_109010;
var inst_108985 = null;
var inst_108986 = (0);
var inst_108987 = (0);
var state_109043__$1 = (function (){var statearr_109063 = state_109043;
(statearr_109063[(12)] = inst_108985);

(statearr_109063[(13)] = inst_108987);

(statearr_109063[(14)] = inst_108986);

(statearr_109063[(15)] = inst_109009);

(statearr_109063[(16)] = inst_108984);

return statearr_109063;
})();
var statearr_109064_109107 = state_109043__$1;
(statearr_109064_109107[(2)] = null);

(statearr_109064_109107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (3))){
var inst_109041 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109043__$1,inst_109041);
} else {
if((state_val_109044 === (12))){
var inst_109018 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109065_109108 = state_109043__$1;
(statearr_109065_109108[(2)] = inst_109018);

(statearr_109065_109108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (2))){
var state_109043__$1 = state_109043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109043__$1,(4),ch);
} else {
if((state_val_109044 === (23))){
var state_109043__$1 = state_109043;
var statearr_109066_109109 = state_109043__$1;
(statearr_109066_109109[(2)] = null);

(statearr_109066_109109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (19))){
var inst_108974 = (state_109043[(8)]);
var inst_109024 = (state_109043[(11)]);
var inst_109026 = cljs.core.async.muxch_STAR_.call(null,inst_109024);
var state_109043__$1 = state_109043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109043__$1,(22),inst_109026,inst_108974);
} else {
if((state_val_109044 === (11))){
var inst_108998 = (state_109043[(10)]);
var inst_108984 = (state_109043[(16)]);
var inst_108998__$1 = cljs.core.seq.call(null,inst_108984);
var state_109043__$1 = (function (){var statearr_109067 = state_109043;
(statearr_109067[(10)] = inst_108998__$1);

return statearr_109067;
})();
if(inst_108998__$1){
var statearr_109068_109110 = state_109043__$1;
(statearr_109068_109110[(1)] = (13));

} else {
var statearr_109069_109111 = state_109043__$1;
(statearr_109069_109111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (9))){
var inst_109020 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109070_109112 = state_109043__$1;
(statearr_109070_109112[(2)] = inst_109020);

(statearr_109070_109112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (5))){
var inst_108981 = cljs.core.deref.call(null,mults);
var inst_108982 = cljs.core.vals.call(null,inst_108981);
var inst_108983 = cljs.core.seq.call(null,inst_108982);
var inst_108984 = inst_108983;
var inst_108985 = null;
var inst_108986 = (0);
var inst_108987 = (0);
var state_109043__$1 = (function (){var statearr_109071 = state_109043;
(statearr_109071[(12)] = inst_108985);

(statearr_109071[(13)] = inst_108987);

(statearr_109071[(14)] = inst_108986);

(statearr_109071[(16)] = inst_108984);

return statearr_109071;
})();
var statearr_109072_109113 = state_109043__$1;
(statearr_109072_109113[(2)] = null);

(statearr_109072_109113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (14))){
var state_109043__$1 = state_109043;
var statearr_109076_109114 = state_109043__$1;
(statearr_109076_109114[(2)] = null);

(statearr_109076_109114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (16))){
var inst_108998 = (state_109043[(10)]);
var inst_109002 = cljs.core.chunk_first.call(null,inst_108998);
var inst_109003 = cljs.core.chunk_rest.call(null,inst_108998);
var inst_109004 = cljs.core.count.call(null,inst_109002);
var inst_108984 = inst_109003;
var inst_108985 = inst_109002;
var inst_108986 = inst_109004;
var inst_108987 = (0);
var state_109043__$1 = (function (){var statearr_109077 = state_109043;
(statearr_109077[(12)] = inst_108985);

(statearr_109077[(13)] = inst_108987);

(statearr_109077[(14)] = inst_108986);

(statearr_109077[(16)] = inst_108984);

return statearr_109077;
})();
var statearr_109078_109115 = state_109043__$1;
(statearr_109078_109115[(2)] = null);

(statearr_109078_109115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (10))){
var inst_108985 = (state_109043[(12)]);
var inst_108987 = (state_109043[(13)]);
var inst_108986 = (state_109043[(14)]);
var inst_108984 = (state_109043[(16)]);
var inst_108992 = cljs.core._nth.call(null,inst_108985,inst_108987);
var inst_108993 = cljs.core.async.muxch_STAR_.call(null,inst_108992);
var inst_108994 = cljs.core.async.close_BANG_.call(null,inst_108993);
var inst_108995 = (inst_108987 + (1));
var tmp109073 = inst_108985;
var tmp109074 = inst_108986;
var tmp109075 = inst_108984;
var inst_108984__$1 = tmp109075;
var inst_108985__$1 = tmp109073;
var inst_108986__$1 = tmp109074;
var inst_108987__$1 = inst_108995;
var state_109043__$1 = (function (){var statearr_109079 = state_109043;
(statearr_109079[(12)] = inst_108985__$1);

(statearr_109079[(17)] = inst_108994);

(statearr_109079[(13)] = inst_108987__$1);

(statearr_109079[(14)] = inst_108986__$1);

(statearr_109079[(16)] = inst_108984__$1);

return statearr_109079;
})();
var statearr_109080_109116 = state_109043__$1;
(statearr_109080_109116[(2)] = null);

(statearr_109080_109116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (18))){
var inst_109013 = (state_109043[(2)]);
var state_109043__$1 = state_109043;
var statearr_109081_109117 = state_109043__$1;
(statearr_109081_109117[(2)] = inst_109013);

(statearr_109081_109117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109044 === (8))){
var inst_108987 = (state_109043[(13)]);
var inst_108986 = (state_109043[(14)]);
var inst_108989 = (inst_108987 < inst_108986);
var inst_108990 = inst_108989;
var state_109043__$1 = state_109043;
if(cljs.core.truth_(inst_108990)){
var statearr_109082_109118 = state_109043__$1;
(statearr_109082_109118[(1)] = (10));

} else {
var statearr_109083_109119 = state_109043__$1;
(statearr_109083_109119[(1)] = (11));

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
});})(c__9199__auto___109091,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___109091,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109087[(0)] = state_machine__9185__auto__);

(statearr_109087[(1)] = (1));

return statearr_109087;
});
var state_machine__9185__auto____1 = (function (state_109043){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109088){if((e109088 instanceof Object)){
var ex__9188__auto__ = e109088;
var statearr_109089_109120 = state_109043;
(statearr_109089_109120[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109121 = state_109043;
state_109043 = G__109121;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109043){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109091,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_109090 = f__9200__auto__.call(null);
(statearr_109090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109091);

return statearr_109090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109091,mults,ensure_mult,p))
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
var c__9199__auto___109258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_109228){
var state_val_109229 = (state_109228[(1)]);
if((state_val_109229 === (7))){
var state_109228__$1 = state_109228;
var statearr_109230_109259 = state_109228__$1;
(statearr_109230_109259[(2)] = null);

(statearr_109230_109259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (1))){
var state_109228__$1 = state_109228;
var statearr_109231_109260 = state_109228__$1;
(statearr_109231_109260[(2)] = null);

(statearr_109231_109260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (4))){
var inst_109192 = (state_109228[(7)]);
var inst_109194 = (inst_109192 < cnt);
var state_109228__$1 = state_109228;
if(cljs.core.truth_(inst_109194)){
var statearr_109232_109261 = state_109228__$1;
(statearr_109232_109261[(1)] = (6));

} else {
var statearr_109233_109262 = state_109228__$1;
(statearr_109233_109262[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (15))){
var inst_109224 = (state_109228[(2)]);
var state_109228__$1 = state_109228;
var statearr_109234_109263 = state_109228__$1;
(statearr_109234_109263[(2)] = inst_109224);

(statearr_109234_109263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (13))){
var inst_109217 = cljs.core.async.close_BANG_.call(null,out);
var state_109228__$1 = state_109228;
var statearr_109235_109264 = state_109228__$1;
(statearr_109235_109264[(2)] = inst_109217);

(statearr_109235_109264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (6))){
var state_109228__$1 = state_109228;
var statearr_109236_109265 = state_109228__$1;
(statearr_109236_109265[(2)] = null);

(statearr_109236_109265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (3))){
var inst_109226 = (state_109228[(2)]);
var state_109228__$1 = state_109228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109228__$1,inst_109226);
} else {
if((state_val_109229 === (12))){
var inst_109214 = (state_109228[(8)]);
var inst_109214__$1 = (state_109228[(2)]);
var inst_109215 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_109214__$1);
var state_109228__$1 = (function (){var statearr_109237 = state_109228;
(statearr_109237[(8)] = inst_109214__$1);

return statearr_109237;
})();
if(cljs.core.truth_(inst_109215)){
var statearr_109238_109266 = state_109228__$1;
(statearr_109238_109266[(1)] = (13));

} else {
var statearr_109239_109267 = state_109228__$1;
(statearr_109239_109267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (2))){
var inst_109191 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_109192 = (0);
var state_109228__$1 = (function (){var statearr_109240 = state_109228;
(statearr_109240[(9)] = inst_109191);

(statearr_109240[(7)] = inst_109192);

return statearr_109240;
})();
var statearr_109241_109268 = state_109228__$1;
(statearr_109241_109268[(2)] = null);

(statearr_109241_109268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (11))){
var inst_109192 = (state_109228[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_109228,(10),Object,null,(9));
var inst_109201 = chs__$1.call(null,inst_109192);
var inst_109202 = done.call(null,inst_109192);
var inst_109203 = cljs.core.async.take_BANG_.call(null,inst_109201,inst_109202);
var state_109228__$1 = state_109228;
var statearr_109242_109269 = state_109228__$1;
(statearr_109242_109269[(2)] = inst_109203);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109228__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (9))){
var inst_109192 = (state_109228[(7)]);
var inst_109205 = (state_109228[(2)]);
var inst_109206 = (inst_109192 + (1));
var inst_109192__$1 = inst_109206;
var state_109228__$1 = (function (){var statearr_109243 = state_109228;
(statearr_109243[(10)] = inst_109205);

(statearr_109243[(7)] = inst_109192__$1);

return statearr_109243;
})();
var statearr_109244_109270 = state_109228__$1;
(statearr_109244_109270[(2)] = null);

(statearr_109244_109270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (5))){
var inst_109212 = (state_109228[(2)]);
var state_109228__$1 = (function (){var statearr_109245 = state_109228;
(statearr_109245[(11)] = inst_109212);

return statearr_109245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109228__$1,(12),dchan);
} else {
if((state_val_109229 === (14))){
var inst_109214 = (state_109228[(8)]);
var inst_109219 = cljs.core.apply.call(null,f,inst_109214);
var state_109228__$1 = state_109228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109228__$1,(16),out,inst_109219);
} else {
if((state_val_109229 === (16))){
var inst_109221 = (state_109228[(2)]);
var state_109228__$1 = (function (){var statearr_109246 = state_109228;
(statearr_109246[(12)] = inst_109221);

return statearr_109246;
})();
var statearr_109247_109271 = state_109228__$1;
(statearr_109247_109271[(2)] = null);

(statearr_109247_109271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (10))){
var inst_109196 = (state_109228[(2)]);
var inst_109197 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_109228__$1 = (function (){var statearr_109248 = state_109228;
(statearr_109248[(13)] = inst_109196);

return statearr_109248;
})();
var statearr_109249_109272 = state_109228__$1;
(statearr_109249_109272[(2)] = inst_109197);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109228__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109229 === (8))){
var inst_109210 = (state_109228[(2)]);
var state_109228__$1 = state_109228;
var statearr_109250_109273 = state_109228__$1;
(statearr_109250_109273[(2)] = inst_109210);

(statearr_109250_109273[(1)] = (5));


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
});})(c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109254[(0)] = state_machine__9185__auto__);

(statearr_109254[(1)] = (1));

return statearr_109254;
});
var state_machine__9185__auto____1 = (function (state_109228){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109255){if((e109255 instanceof Object)){
var ex__9188__auto__ = e109255;
var statearr_109256_109274 = state_109228;
(statearr_109256_109274[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109275 = state_109228;
state_109228 = G__109275;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109228){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_109257 = f__9200__auto__.call(null);
(statearr_109257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109258);

return statearr_109257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109258,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___109383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109383,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109383,out){
return (function (state_109359){
var state_val_109360 = (state_109359[(1)]);
if((state_val_109360 === (7))){
var inst_109339 = (state_109359[(7)]);
var inst_109338 = (state_109359[(8)]);
var inst_109338__$1 = (state_109359[(2)]);
var inst_109339__$1 = cljs.core.nth.call(null,inst_109338__$1,(0),null);
var inst_109340 = cljs.core.nth.call(null,inst_109338__$1,(1),null);
var inst_109341 = (inst_109339__$1 == null);
var state_109359__$1 = (function (){var statearr_109361 = state_109359;
(statearr_109361[(7)] = inst_109339__$1);

(statearr_109361[(9)] = inst_109340);

(statearr_109361[(8)] = inst_109338__$1);

return statearr_109361;
})();
if(cljs.core.truth_(inst_109341)){
var statearr_109362_109384 = state_109359__$1;
(statearr_109362_109384[(1)] = (8));

} else {
var statearr_109363_109385 = state_109359__$1;
(statearr_109363_109385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (1))){
var inst_109330 = cljs.core.vec.call(null,chs);
var inst_109331 = inst_109330;
var state_109359__$1 = (function (){var statearr_109364 = state_109359;
(statearr_109364[(10)] = inst_109331);

return statearr_109364;
})();
var statearr_109365_109386 = state_109359__$1;
(statearr_109365_109386[(2)] = null);

(statearr_109365_109386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (4))){
var inst_109331 = (state_109359[(10)]);
var state_109359__$1 = state_109359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_109359__$1,(7),inst_109331);
} else {
if((state_val_109360 === (6))){
var inst_109355 = (state_109359[(2)]);
var state_109359__$1 = state_109359;
var statearr_109366_109387 = state_109359__$1;
(statearr_109366_109387[(2)] = inst_109355);

(statearr_109366_109387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (3))){
var inst_109357 = (state_109359[(2)]);
var state_109359__$1 = state_109359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109359__$1,inst_109357);
} else {
if((state_val_109360 === (2))){
var inst_109331 = (state_109359[(10)]);
var inst_109333 = cljs.core.count.call(null,inst_109331);
var inst_109334 = (inst_109333 > (0));
var state_109359__$1 = state_109359;
if(cljs.core.truth_(inst_109334)){
var statearr_109368_109388 = state_109359__$1;
(statearr_109368_109388[(1)] = (4));

} else {
var statearr_109369_109389 = state_109359__$1;
(statearr_109369_109389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (11))){
var inst_109331 = (state_109359[(10)]);
var inst_109348 = (state_109359[(2)]);
var tmp109367 = inst_109331;
var inst_109331__$1 = tmp109367;
var state_109359__$1 = (function (){var statearr_109370 = state_109359;
(statearr_109370[(10)] = inst_109331__$1);

(statearr_109370[(11)] = inst_109348);

return statearr_109370;
})();
var statearr_109371_109390 = state_109359__$1;
(statearr_109371_109390[(2)] = null);

(statearr_109371_109390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (9))){
var inst_109339 = (state_109359[(7)]);
var state_109359__$1 = state_109359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109359__$1,(11),out,inst_109339);
} else {
if((state_val_109360 === (5))){
var inst_109353 = cljs.core.async.close_BANG_.call(null,out);
var state_109359__$1 = state_109359;
var statearr_109372_109391 = state_109359__$1;
(statearr_109372_109391[(2)] = inst_109353);

(statearr_109372_109391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (10))){
var inst_109351 = (state_109359[(2)]);
var state_109359__$1 = state_109359;
var statearr_109373_109392 = state_109359__$1;
(statearr_109373_109392[(2)] = inst_109351);

(statearr_109373_109392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109360 === (8))){
var inst_109331 = (state_109359[(10)]);
var inst_109339 = (state_109359[(7)]);
var inst_109340 = (state_109359[(9)]);
var inst_109338 = (state_109359[(8)]);
var inst_109343 = (function (){var c = inst_109340;
var v = inst_109339;
var vec__109336 = inst_109338;
var cs = inst_109331;
return ((function (c,v,vec__109336,cs,inst_109331,inst_109339,inst_109340,inst_109338,state_val_109360,c__9199__auto___109383,out){
return (function (p1__109276_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__109276_SHARP_);
});
;})(c,v,vec__109336,cs,inst_109331,inst_109339,inst_109340,inst_109338,state_val_109360,c__9199__auto___109383,out))
})();
var inst_109344 = cljs.core.filterv.call(null,inst_109343,inst_109331);
var inst_109331__$1 = inst_109344;
var state_109359__$1 = (function (){var statearr_109374 = state_109359;
(statearr_109374[(10)] = inst_109331__$1);

return statearr_109374;
})();
var statearr_109375_109393 = state_109359__$1;
(statearr_109375_109393[(2)] = null);

(statearr_109375_109393[(1)] = (2));


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
});})(c__9199__auto___109383,out))
;
return ((function (switch__9184__auto__,c__9199__auto___109383,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109379[(0)] = state_machine__9185__auto__);

(statearr_109379[(1)] = (1));

return statearr_109379;
});
var state_machine__9185__auto____1 = (function (state_109359){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109380){if((e109380 instanceof Object)){
var ex__9188__auto__ = e109380;
var statearr_109381_109394 = state_109359;
(statearr_109381_109394[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109395 = state_109359;
state_109359 = G__109395;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109359){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109383,out))
})();
var state__9201__auto__ = (function (){var statearr_109382 = f__9200__auto__.call(null);
(statearr_109382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109383);

return statearr_109382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109383,out))
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
var c__9199__auto___109488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109488,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109488,out){
return (function (state_109465){
var state_val_109466 = (state_109465[(1)]);
if((state_val_109466 === (7))){
var inst_109447 = (state_109465[(7)]);
var inst_109447__$1 = (state_109465[(2)]);
var inst_109448 = (inst_109447__$1 == null);
var inst_109449 = cljs.core.not.call(null,inst_109448);
var state_109465__$1 = (function (){var statearr_109467 = state_109465;
(statearr_109467[(7)] = inst_109447__$1);

return statearr_109467;
})();
if(inst_109449){
var statearr_109468_109489 = state_109465__$1;
(statearr_109468_109489[(1)] = (8));

} else {
var statearr_109469_109490 = state_109465__$1;
(statearr_109469_109490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (1))){
var inst_109442 = (0);
var state_109465__$1 = (function (){var statearr_109470 = state_109465;
(statearr_109470[(8)] = inst_109442);

return statearr_109470;
})();
var statearr_109471_109491 = state_109465__$1;
(statearr_109471_109491[(2)] = null);

(statearr_109471_109491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (4))){
var state_109465__$1 = state_109465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109465__$1,(7),ch);
} else {
if((state_val_109466 === (6))){
var inst_109460 = (state_109465[(2)]);
var state_109465__$1 = state_109465;
var statearr_109472_109492 = state_109465__$1;
(statearr_109472_109492[(2)] = inst_109460);

(statearr_109472_109492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (3))){
var inst_109462 = (state_109465[(2)]);
var inst_109463 = cljs.core.async.close_BANG_.call(null,out);
var state_109465__$1 = (function (){var statearr_109473 = state_109465;
(statearr_109473[(9)] = inst_109462);

return statearr_109473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109465__$1,inst_109463);
} else {
if((state_val_109466 === (2))){
var inst_109442 = (state_109465[(8)]);
var inst_109444 = (inst_109442 < n);
var state_109465__$1 = state_109465;
if(cljs.core.truth_(inst_109444)){
var statearr_109474_109493 = state_109465__$1;
(statearr_109474_109493[(1)] = (4));

} else {
var statearr_109475_109494 = state_109465__$1;
(statearr_109475_109494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (11))){
var inst_109442 = (state_109465[(8)]);
var inst_109452 = (state_109465[(2)]);
var inst_109453 = (inst_109442 + (1));
var inst_109442__$1 = inst_109453;
var state_109465__$1 = (function (){var statearr_109476 = state_109465;
(statearr_109476[(8)] = inst_109442__$1);

(statearr_109476[(10)] = inst_109452);

return statearr_109476;
})();
var statearr_109477_109495 = state_109465__$1;
(statearr_109477_109495[(2)] = null);

(statearr_109477_109495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (9))){
var state_109465__$1 = state_109465;
var statearr_109478_109496 = state_109465__$1;
(statearr_109478_109496[(2)] = null);

(statearr_109478_109496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (5))){
var state_109465__$1 = state_109465;
var statearr_109479_109497 = state_109465__$1;
(statearr_109479_109497[(2)] = null);

(statearr_109479_109497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (10))){
var inst_109457 = (state_109465[(2)]);
var state_109465__$1 = state_109465;
var statearr_109480_109498 = state_109465__$1;
(statearr_109480_109498[(2)] = inst_109457);

(statearr_109480_109498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109466 === (8))){
var inst_109447 = (state_109465[(7)]);
var state_109465__$1 = state_109465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109465__$1,(11),out,inst_109447);
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
});})(c__9199__auto___109488,out))
;
return ((function (switch__9184__auto__,c__9199__auto___109488,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_109484[(0)] = state_machine__9185__auto__);

(statearr_109484[(1)] = (1));

return statearr_109484;
});
var state_machine__9185__auto____1 = (function (state_109465){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109485){if((e109485 instanceof Object)){
var ex__9188__auto__ = e109485;
var statearr_109486_109499 = state_109465;
(statearr_109486_109499[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109500 = state_109465;
state_109465 = G__109500;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109465){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109488,out))
})();
var state__9201__auto__ = (function (){var statearr_109487 = f__9200__auto__.call(null);
(statearr_109487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109488);

return statearr_109487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109488,out))
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
if(typeof cljs.core.async.t109508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t109508 = (function (ch,f,map_LT_,meta109509){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta109509 = meta109509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t109511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t109511 = (function (fn1,_,meta109509,map_LT_,f,ch,meta109512){
this.fn1 = fn1;
this._ = _;
this.meta109509 = meta109509;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta109512 = meta109512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t109511.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t109511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t109511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__109501_SHARP_){
return f1.call(null,(((p1__109501_SHARP_ == null))?null:self__.f.call(null,p1__109501_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t109511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_109513){
var self__ = this;
var _109513__$1 = this;
return self__.meta109512;
});})(___$1))
;

cljs.core.async.t109511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_109513,meta109512__$1){
var self__ = this;
var _109513__$1 = this;
return (new cljs.core.async.t109511(self__.fn1,self__._,self__.meta109509,self__.map_LT_,self__.f,self__.ch,meta109512__$1));
});})(___$1))
;

cljs.core.async.t109511.cljs$lang$type = true;

cljs.core.async.t109511.cljs$lang$ctorStr = "cljs.core.async/t109511";

cljs.core.async.t109511.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t109511");
});})(___$1))
;

cljs.core.async.__GT_t109511 = ((function (___$1){
return (function __GT_t109511(fn1__$1,___$2,meta109509__$1,map_LT___$1,f__$1,ch__$1,meta109512){
return (new cljs.core.async.t109511(fn1__$1,___$2,meta109509__$1,map_LT___$1,f__$1,ch__$1,meta109512));
});})(___$1))
;

}

return (new cljs.core.async.t109511(fn1,___$1,self__.meta109509,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t109508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t109508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_109510){
var self__ = this;
var _109510__$1 = this;
return self__.meta109509;
});

cljs.core.async.t109508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_109510,meta109509__$1){
var self__ = this;
var _109510__$1 = this;
return (new cljs.core.async.t109508(self__.ch,self__.f,self__.map_LT_,meta109509__$1));
});

cljs.core.async.t109508.cljs$lang$type = true;

cljs.core.async.t109508.cljs$lang$ctorStr = "cljs.core.async/t109508";

cljs.core.async.t109508.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t109508");
});

cljs.core.async.__GT_t109508 = (function __GT_t109508(ch__$1,f__$1,map_LT___$1,meta109509){
return (new cljs.core.async.t109508(ch__$1,f__$1,map_LT___$1,meta109509));
});

}

return (new cljs.core.async.t109508(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t109517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t109517 = (function (ch,f,map_GT_,meta109518){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta109518 = meta109518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t109517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t109517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_109519){
var self__ = this;
var _109519__$1 = this;
return self__.meta109518;
});

cljs.core.async.t109517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_109519,meta109518__$1){
var self__ = this;
var _109519__$1 = this;
return (new cljs.core.async.t109517(self__.ch,self__.f,self__.map_GT_,meta109518__$1));
});

cljs.core.async.t109517.cljs$lang$type = true;

cljs.core.async.t109517.cljs$lang$ctorStr = "cljs.core.async/t109517";

cljs.core.async.t109517.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t109517");
});

cljs.core.async.__GT_t109517 = (function __GT_t109517(ch__$1,f__$1,map_GT___$1,meta109518){
return (new cljs.core.async.t109517(ch__$1,f__$1,map_GT___$1,meta109518));
});

}

return (new cljs.core.async.t109517(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t109523 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t109523 = (function (ch,p,filter_GT_,meta109524){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta109524 = meta109524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t109523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t109523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_109525){
var self__ = this;
var _109525__$1 = this;
return self__.meta109524;
});

cljs.core.async.t109523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_109525,meta109524__$1){
var self__ = this;
var _109525__$1 = this;
return (new cljs.core.async.t109523(self__.ch,self__.p,self__.filter_GT_,meta109524__$1));
});

cljs.core.async.t109523.cljs$lang$type = true;

cljs.core.async.t109523.cljs$lang$ctorStr = "cljs.core.async/t109523";

cljs.core.async.t109523.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t109523");
});

cljs.core.async.__GT_t109523 = (function __GT_t109523(ch__$1,p__$1,filter_GT___$1,meta109524){
return (new cljs.core.async.t109523(ch__$1,p__$1,filter_GT___$1,meta109524));
});

}

return (new cljs.core.async.t109523(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___109608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109608,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109608,out){
return (function (state_109587){
var state_val_109588 = (state_109587[(1)]);
if((state_val_109588 === (7))){
var inst_109583 = (state_109587[(2)]);
var state_109587__$1 = state_109587;
var statearr_109589_109609 = state_109587__$1;
(statearr_109589_109609[(2)] = inst_109583);

(statearr_109589_109609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (1))){
var state_109587__$1 = state_109587;
var statearr_109590_109610 = state_109587__$1;
(statearr_109590_109610[(2)] = null);

(statearr_109590_109610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (4))){
var inst_109569 = (state_109587[(7)]);
var inst_109569__$1 = (state_109587[(2)]);
var inst_109570 = (inst_109569__$1 == null);
var state_109587__$1 = (function (){var statearr_109591 = state_109587;
(statearr_109591[(7)] = inst_109569__$1);

return statearr_109591;
})();
if(cljs.core.truth_(inst_109570)){
var statearr_109592_109611 = state_109587__$1;
(statearr_109592_109611[(1)] = (5));

} else {
var statearr_109593_109612 = state_109587__$1;
(statearr_109593_109612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (6))){
var inst_109569 = (state_109587[(7)]);
var inst_109574 = p.call(null,inst_109569);
var state_109587__$1 = state_109587;
if(cljs.core.truth_(inst_109574)){
var statearr_109594_109613 = state_109587__$1;
(statearr_109594_109613[(1)] = (8));

} else {
var statearr_109595_109614 = state_109587__$1;
(statearr_109595_109614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (3))){
var inst_109585 = (state_109587[(2)]);
var state_109587__$1 = state_109587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109587__$1,inst_109585);
} else {
if((state_val_109588 === (2))){
var state_109587__$1 = state_109587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109587__$1,(4),ch);
} else {
if((state_val_109588 === (11))){
var inst_109577 = (state_109587[(2)]);
var state_109587__$1 = state_109587;
var statearr_109596_109615 = state_109587__$1;
(statearr_109596_109615[(2)] = inst_109577);

(statearr_109596_109615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (9))){
var state_109587__$1 = state_109587;
var statearr_109597_109616 = state_109587__$1;
(statearr_109597_109616[(2)] = null);

(statearr_109597_109616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (5))){
var inst_109572 = cljs.core.async.close_BANG_.call(null,out);
var state_109587__$1 = state_109587;
var statearr_109598_109617 = state_109587__$1;
(statearr_109598_109617[(2)] = inst_109572);

(statearr_109598_109617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (10))){
var inst_109580 = (state_109587[(2)]);
var state_109587__$1 = (function (){var statearr_109599 = state_109587;
(statearr_109599[(8)] = inst_109580);

return statearr_109599;
})();
var statearr_109600_109618 = state_109587__$1;
(statearr_109600_109618[(2)] = null);

(statearr_109600_109618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109588 === (8))){
var inst_109569 = (state_109587[(7)]);
var state_109587__$1 = state_109587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109587__$1,(11),out,inst_109569);
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
});})(c__9199__auto___109608,out))
;
return ((function (switch__9184__auto__,c__9199__auto___109608,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109604 = [null,null,null,null,null,null,null,null,null];
(statearr_109604[(0)] = state_machine__9185__auto__);

(statearr_109604[(1)] = (1));

return statearr_109604;
});
var state_machine__9185__auto____1 = (function (state_109587){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109605){if((e109605 instanceof Object)){
var ex__9188__auto__ = e109605;
var statearr_109606_109619 = state_109587;
(statearr_109606_109619[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109620 = state_109587;
state_109587 = G__109620;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109587){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109608,out))
})();
var state__9201__auto__ = (function (){var statearr_109607 = f__9200__auto__.call(null);
(statearr_109607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109608);

return statearr_109607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109608,out))
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
return (function (state_109786){
var state_val_109787 = (state_109786[(1)]);
if((state_val_109787 === (7))){
var inst_109782 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
var statearr_109788_109829 = state_109786__$1;
(statearr_109788_109829[(2)] = inst_109782);

(statearr_109788_109829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (20))){
var inst_109752 = (state_109786[(7)]);
var inst_109763 = (state_109786[(2)]);
var inst_109764 = cljs.core.next.call(null,inst_109752);
var inst_109738 = inst_109764;
var inst_109739 = null;
var inst_109740 = (0);
var inst_109741 = (0);
var state_109786__$1 = (function (){var statearr_109789 = state_109786;
(statearr_109789[(8)] = inst_109763);

(statearr_109789[(9)] = inst_109738);

(statearr_109789[(10)] = inst_109740);

(statearr_109789[(11)] = inst_109739);

(statearr_109789[(12)] = inst_109741);

return statearr_109789;
})();
var statearr_109790_109830 = state_109786__$1;
(statearr_109790_109830[(2)] = null);

(statearr_109790_109830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (1))){
var state_109786__$1 = state_109786;
var statearr_109791_109831 = state_109786__$1;
(statearr_109791_109831[(2)] = null);

(statearr_109791_109831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (4))){
var inst_109727 = (state_109786[(13)]);
var inst_109727__$1 = (state_109786[(2)]);
var inst_109728 = (inst_109727__$1 == null);
var state_109786__$1 = (function (){var statearr_109792 = state_109786;
(statearr_109792[(13)] = inst_109727__$1);

return statearr_109792;
})();
if(cljs.core.truth_(inst_109728)){
var statearr_109793_109832 = state_109786__$1;
(statearr_109793_109832[(1)] = (5));

} else {
var statearr_109794_109833 = state_109786__$1;
(statearr_109794_109833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (15))){
var state_109786__$1 = state_109786;
var statearr_109798_109834 = state_109786__$1;
(statearr_109798_109834[(2)] = null);

(statearr_109798_109834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (21))){
var state_109786__$1 = state_109786;
var statearr_109799_109835 = state_109786__$1;
(statearr_109799_109835[(2)] = null);

(statearr_109799_109835[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (13))){
var inst_109738 = (state_109786[(9)]);
var inst_109740 = (state_109786[(10)]);
var inst_109739 = (state_109786[(11)]);
var inst_109741 = (state_109786[(12)]);
var inst_109748 = (state_109786[(2)]);
var inst_109749 = (inst_109741 + (1));
var tmp109795 = inst_109738;
var tmp109796 = inst_109740;
var tmp109797 = inst_109739;
var inst_109738__$1 = tmp109795;
var inst_109739__$1 = tmp109797;
var inst_109740__$1 = tmp109796;
var inst_109741__$1 = inst_109749;
var state_109786__$1 = (function (){var statearr_109800 = state_109786;
(statearr_109800[(14)] = inst_109748);

(statearr_109800[(9)] = inst_109738__$1);

(statearr_109800[(10)] = inst_109740__$1);

(statearr_109800[(11)] = inst_109739__$1);

(statearr_109800[(12)] = inst_109741__$1);

return statearr_109800;
})();
var statearr_109801_109836 = state_109786__$1;
(statearr_109801_109836[(2)] = null);

(statearr_109801_109836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (22))){
var state_109786__$1 = state_109786;
var statearr_109802_109837 = state_109786__$1;
(statearr_109802_109837[(2)] = null);

(statearr_109802_109837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (6))){
var inst_109727 = (state_109786[(13)]);
var inst_109736 = f.call(null,inst_109727);
var inst_109737 = cljs.core.seq.call(null,inst_109736);
var inst_109738 = inst_109737;
var inst_109739 = null;
var inst_109740 = (0);
var inst_109741 = (0);
var state_109786__$1 = (function (){var statearr_109803 = state_109786;
(statearr_109803[(9)] = inst_109738);

(statearr_109803[(10)] = inst_109740);

(statearr_109803[(11)] = inst_109739);

(statearr_109803[(12)] = inst_109741);

return statearr_109803;
})();
var statearr_109804_109838 = state_109786__$1;
(statearr_109804_109838[(2)] = null);

(statearr_109804_109838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (17))){
var inst_109752 = (state_109786[(7)]);
var inst_109756 = cljs.core.chunk_first.call(null,inst_109752);
var inst_109757 = cljs.core.chunk_rest.call(null,inst_109752);
var inst_109758 = cljs.core.count.call(null,inst_109756);
var inst_109738 = inst_109757;
var inst_109739 = inst_109756;
var inst_109740 = inst_109758;
var inst_109741 = (0);
var state_109786__$1 = (function (){var statearr_109805 = state_109786;
(statearr_109805[(9)] = inst_109738);

(statearr_109805[(10)] = inst_109740);

(statearr_109805[(11)] = inst_109739);

(statearr_109805[(12)] = inst_109741);

return statearr_109805;
})();
var statearr_109806_109839 = state_109786__$1;
(statearr_109806_109839[(2)] = null);

(statearr_109806_109839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (3))){
var inst_109784 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109786__$1,inst_109784);
} else {
if((state_val_109787 === (12))){
var inst_109772 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
var statearr_109807_109840 = state_109786__$1;
(statearr_109807_109840[(2)] = inst_109772);

(statearr_109807_109840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (2))){
var state_109786__$1 = state_109786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109786__$1,(4),in$);
} else {
if((state_val_109787 === (23))){
var inst_109780 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
var statearr_109808_109841 = state_109786__$1;
(statearr_109808_109841[(2)] = inst_109780);

(statearr_109808_109841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (19))){
var inst_109767 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
var statearr_109809_109842 = state_109786__$1;
(statearr_109809_109842[(2)] = inst_109767);

(statearr_109809_109842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (11))){
var inst_109752 = (state_109786[(7)]);
var inst_109738 = (state_109786[(9)]);
var inst_109752__$1 = cljs.core.seq.call(null,inst_109738);
var state_109786__$1 = (function (){var statearr_109810 = state_109786;
(statearr_109810[(7)] = inst_109752__$1);

return statearr_109810;
})();
if(inst_109752__$1){
var statearr_109811_109843 = state_109786__$1;
(statearr_109811_109843[(1)] = (14));

} else {
var statearr_109812_109844 = state_109786__$1;
(statearr_109812_109844[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (9))){
var inst_109774 = (state_109786[(2)]);
var inst_109775 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_109786__$1 = (function (){var statearr_109813 = state_109786;
(statearr_109813[(15)] = inst_109774);

return statearr_109813;
})();
if(cljs.core.truth_(inst_109775)){
var statearr_109814_109845 = state_109786__$1;
(statearr_109814_109845[(1)] = (21));

} else {
var statearr_109815_109846 = state_109786__$1;
(statearr_109815_109846[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (5))){
var inst_109730 = cljs.core.async.close_BANG_.call(null,out);
var state_109786__$1 = state_109786;
var statearr_109816_109847 = state_109786__$1;
(statearr_109816_109847[(2)] = inst_109730);

(statearr_109816_109847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (14))){
var inst_109752 = (state_109786[(7)]);
var inst_109754 = cljs.core.chunked_seq_QMARK_.call(null,inst_109752);
var state_109786__$1 = state_109786;
if(inst_109754){
var statearr_109817_109848 = state_109786__$1;
(statearr_109817_109848[(1)] = (17));

} else {
var statearr_109818_109849 = state_109786__$1;
(statearr_109818_109849[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (16))){
var inst_109770 = (state_109786[(2)]);
var state_109786__$1 = state_109786;
var statearr_109819_109850 = state_109786__$1;
(statearr_109819_109850[(2)] = inst_109770);

(statearr_109819_109850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109787 === (10))){
var inst_109739 = (state_109786[(11)]);
var inst_109741 = (state_109786[(12)]);
var inst_109746 = cljs.core._nth.call(null,inst_109739,inst_109741);
var state_109786__$1 = state_109786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109786__$1,(13),out,inst_109746);
} else {
if((state_val_109787 === (18))){
var inst_109752 = (state_109786[(7)]);
var inst_109761 = cljs.core.first.call(null,inst_109752);
var state_109786__$1 = state_109786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109786__$1,(20),out,inst_109761);
} else {
if((state_val_109787 === (8))){
var inst_109740 = (state_109786[(10)]);
var inst_109741 = (state_109786[(12)]);
var inst_109743 = (inst_109741 < inst_109740);
var inst_109744 = inst_109743;
var state_109786__$1 = state_109786;
if(cljs.core.truth_(inst_109744)){
var statearr_109820_109851 = state_109786__$1;
(statearr_109820_109851[(1)] = (10));

} else {
var statearr_109821_109852 = state_109786__$1;
(statearr_109821_109852[(1)] = (11));

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
var statearr_109825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109825[(0)] = state_machine__9185__auto__);

(statearr_109825[(1)] = (1));

return statearr_109825;
});
var state_machine__9185__auto____1 = (function (state_109786){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109826){if((e109826 instanceof Object)){
var ex__9188__auto__ = e109826;
var statearr_109827_109853 = state_109786;
(statearr_109827_109853[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109854 = state_109786;
state_109786 = G__109854;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109786){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_109828 = f__9200__auto__.call(null);
(statearr_109828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_109828;
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
var c__9199__auto___109951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___109951,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___109951,out){
return (function (state_109926){
var state_val_109927 = (state_109926[(1)]);
if((state_val_109927 === (7))){
var inst_109921 = (state_109926[(2)]);
var state_109926__$1 = state_109926;
var statearr_109928_109952 = state_109926__$1;
(statearr_109928_109952[(2)] = inst_109921);

(statearr_109928_109952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (1))){
var inst_109903 = null;
var state_109926__$1 = (function (){var statearr_109929 = state_109926;
(statearr_109929[(7)] = inst_109903);

return statearr_109929;
})();
var statearr_109930_109953 = state_109926__$1;
(statearr_109930_109953[(2)] = null);

(statearr_109930_109953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (4))){
var inst_109906 = (state_109926[(8)]);
var inst_109906__$1 = (state_109926[(2)]);
var inst_109907 = (inst_109906__$1 == null);
var inst_109908 = cljs.core.not.call(null,inst_109907);
var state_109926__$1 = (function (){var statearr_109931 = state_109926;
(statearr_109931[(8)] = inst_109906__$1);

return statearr_109931;
})();
if(inst_109908){
var statearr_109932_109954 = state_109926__$1;
(statearr_109932_109954[(1)] = (5));

} else {
var statearr_109933_109955 = state_109926__$1;
(statearr_109933_109955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (6))){
var state_109926__$1 = state_109926;
var statearr_109934_109956 = state_109926__$1;
(statearr_109934_109956[(2)] = null);

(statearr_109934_109956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (3))){
var inst_109923 = (state_109926[(2)]);
var inst_109924 = cljs.core.async.close_BANG_.call(null,out);
var state_109926__$1 = (function (){var statearr_109935 = state_109926;
(statearr_109935[(9)] = inst_109923);

return statearr_109935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109926__$1,inst_109924);
} else {
if((state_val_109927 === (2))){
var state_109926__$1 = state_109926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109926__$1,(4),ch);
} else {
if((state_val_109927 === (11))){
var inst_109906 = (state_109926[(8)]);
var inst_109915 = (state_109926[(2)]);
var inst_109903 = inst_109906;
var state_109926__$1 = (function (){var statearr_109936 = state_109926;
(statearr_109936[(7)] = inst_109903);

(statearr_109936[(10)] = inst_109915);

return statearr_109936;
})();
var statearr_109937_109957 = state_109926__$1;
(statearr_109937_109957[(2)] = null);

(statearr_109937_109957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (9))){
var inst_109906 = (state_109926[(8)]);
var state_109926__$1 = state_109926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109926__$1,(11),out,inst_109906);
} else {
if((state_val_109927 === (5))){
var inst_109903 = (state_109926[(7)]);
var inst_109906 = (state_109926[(8)]);
var inst_109910 = cljs.core._EQ_.call(null,inst_109906,inst_109903);
var state_109926__$1 = state_109926;
if(inst_109910){
var statearr_109939_109958 = state_109926__$1;
(statearr_109939_109958[(1)] = (8));

} else {
var statearr_109940_109959 = state_109926__$1;
(statearr_109940_109959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (10))){
var inst_109918 = (state_109926[(2)]);
var state_109926__$1 = state_109926;
var statearr_109941_109960 = state_109926__$1;
(statearr_109941_109960[(2)] = inst_109918);

(statearr_109941_109960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109927 === (8))){
var inst_109903 = (state_109926[(7)]);
var tmp109938 = inst_109903;
var inst_109903__$1 = tmp109938;
var state_109926__$1 = (function (){var statearr_109942 = state_109926;
(statearr_109942[(7)] = inst_109903__$1);

return statearr_109942;
})();
var statearr_109943_109961 = state_109926__$1;
(statearr_109943_109961[(2)] = null);

(statearr_109943_109961[(1)] = (2));


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
});})(c__9199__auto___109951,out))
;
return ((function (switch__9184__auto__,c__9199__auto___109951,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_109947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_109947[(0)] = state_machine__9185__auto__);

(statearr_109947[(1)] = (1));

return statearr_109947;
});
var state_machine__9185__auto____1 = (function (state_109926){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_109926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e109948){if((e109948 instanceof Object)){
var ex__9188__auto__ = e109948;
var statearr_109949_109962 = state_109926;
(statearr_109949_109962[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109963 = state_109926;
state_109926 = G__109963;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_109926){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_109926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___109951,out))
})();
var state__9201__auto__ = (function (){var statearr_109950 = f__9200__auto__.call(null);
(statearr_109950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___109951);

return statearr_109950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___109951,out))
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
var c__9199__auto___110098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___110098,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___110098,out){
return (function (state_110068){
var state_val_110069 = (state_110068[(1)]);
if((state_val_110069 === (7))){
var inst_110064 = (state_110068[(2)]);
var state_110068__$1 = state_110068;
var statearr_110070_110099 = state_110068__$1;
(statearr_110070_110099[(2)] = inst_110064);

(statearr_110070_110099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (1))){
var inst_110031 = (new Array(n));
var inst_110032 = inst_110031;
var inst_110033 = (0);
var state_110068__$1 = (function (){var statearr_110071 = state_110068;
(statearr_110071[(7)] = inst_110033);

(statearr_110071[(8)] = inst_110032);

return statearr_110071;
})();
var statearr_110072_110100 = state_110068__$1;
(statearr_110072_110100[(2)] = null);

(statearr_110072_110100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (4))){
var inst_110036 = (state_110068[(9)]);
var inst_110036__$1 = (state_110068[(2)]);
var inst_110037 = (inst_110036__$1 == null);
var inst_110038 = cljs.core.not.call(null,inst_110037);
var state_110068__$1 = (function (){var statearr_110073 = state_110068;
(statearr_110073[(9)] = inst_110036__$1);

return statearr_110073;
})();
if(inst_110038){
var statearr_110074_110101 = state_110068__$1;
(statearr_110074_110101[(1)] = (5));

} else {
var statearr_110075_110102 = state_110068__$1;
(statearr_110075_110102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (15))){
var inst_110058 = (state_110068[(2)]);
var state_110068__$1 = state_110068;
var statearr_110076_110103 = state_110068__$1;
(statearr_110076_110103[(2)] = inst_110058);

(statearr_110076_110103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (13))){
var state_110068__$1 = state_110068;
var statearr_110077_110104 = state_110068__$1;
(statearr_110077_110104[(2)] = null);

(statearr_110077_110104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (6))){
var inst_110033 = (state_110068[(7)]);
var inst_110054 = (inst_110033 > (0));
var state_110068__$1 = state_110068;
if(cljs.core.truth_(inst_110054)){
var statearr_110078_110105 = state_110068__$1;
(statearr_110078_110105[(1)] = (12));

} else {
var statearr_110079_110106 = state_110068__$1;
(statearr_110079_110106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (3))){
var inst_110066 = (state_110068[(2)]);
var state_110068__$1 = state_110068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110068__$1,inst_110066);
} else {
if((state_val_110069 === (12))){
var inst_110032 = (state_110068[(8)]);
var inst_110056 = cljs.core.vec.call(null,inst_110032);
var state_110068__$1 = state_110068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110068__$1,(15),out,inst_110056);
} else {
if((state_val_110069 === (2))){
var state_110068__$1 = state_110068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110068__$1,(4),ch);
} else {
if((state_val_110069 === (11))){
var inst_110048 = (state_110068[(2)]);
var inst_110049 = (new Array(n));
var inst_110032 = inst_110049;
var inst_110033 = (0);
var state_110068__$1 = (function (){var statearr_110080 = state_110068;
(statearr_110080[(10)] = inst_110048);

(statearr_110080[(7)] = inst_110033);

(statearr_110080[(8)] = inst_110032);

return statearr_110080;
})();
var statearr_110081_110107 = state_110068__$1;
(statearr_110081_110107[(2)] = null);

(statearr_110081_110107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (9))){
var inst_110032 = (state_110068[(8)]);
var inst_110046 = cljs.core.vec.call(null,inst_110032);
var state_110068__$1 = state_110068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110068__$1,(11),out,inst_110046);
} else {
if((state_val_110069 === (5))){
var inst_110041 = (state_110068[(11)]);
var inst_110033 = (state_110068[(7)]);
var inst_110032 = (state_110068[(8)]);
var inst_110036 = (state_110068[(9)]);
var inst_110040 = (inst_110032[inst_110033] = inst_110036);
var inst_110041__$1 = (inst_110033 + (1));
var inst_110042 = (inst_110041__$1 < n);
var state_110068__$1 = (function (){var statearr_110082 = state_110068;
(statearr_110082[(12)] = inst_110040);

(statearr_110082[(11)] = inst_110041__$1);

return statearr_110082;
})();
if(cljs.core.truth_(inst_110042)){
var statearr_110083_110108 = state_110068__$1;
(statearr_110083_110108[(1)] = (8));

} else {
var statearr_110084_110109 = state_110068__$1;
(statearr_110084_110109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (14))){
var inst_110061 = (state_110068[(2)]);
var inst_110062 = cljs.core.async.close_BANG_.call(null,out);
var state_110068__$1 = (function (){var statearr_110086 = state_110068;
(statearr_110086[(13)] = inst_110061);

return statearr_110086;
})();
var statearr_110087_110110 = state_110068__$1;
(statearr_110087_110110[(2)] = inst_110062);

(statearr_110087_110110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (10))){
var inst_110052 = (state_110068[(2)]);
var state_110068__$1 = state_110068;
var statearr_110088_110111 = state_110068__$1;
(statearr_110088_110111[(2)] = inst_110052);

(statearr_110088_110111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110069 === (8))){
var inst_110041 = (state_110068[(11)]);
var inst_110032 = (state_110068[(8)]);
var tmp110085 = inst_110032;
var inst_110032__$1 = tmp110085;
var inst_110033 = inst_110041;
var state_110068__$1 = (function (){var statearr_110089 = state_110068;
(statearr_110089[(7)] = inst_110033);

(statearr_110089[(8)] = inst_110032__$1);

return statearr_110089;
})();
var statearr_110090_110112 = state_110068__$1;
(statearr_110090_110112[(2)] = null);

(statearr_110090_110112[(1)] = (2));


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
});})(c__9199__auto___110098,out))
;
return ((function (switch__9184__auto__,c__9199__auto___110098,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_110094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_110094[(0)] = state_machine__9185__auto__);

(statearr_110094[(1)] = (1));

return statearr_110094;
});
var state_machine__9185__auto____1 = (function (state_110068){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_110068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e110095){if((e110095 instanceof Object)){
var ex__9188__auto__ = e110095;
var statearr_110096_110113 = state_110068;
(statearr_110096_110113[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110114 = state_110068;
state_110068 = G__110114;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_110068){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_110068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___110098,out))
})();
var state__9201__auto__ = (function (){var statearr_110097 = f__9200__auto__.call(null);
(statearr_110097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___110098);

return statearr_110097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___110098,out))
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
var c__9199__auto___110257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___110257,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___110257,out){
return (function (state_110227){
var state_val_110228 = (state_110227[(1)]);
if((state_val_110228 === (7))){
var inst_110223 = (state_110227[(2)]);
var state_110227__$1 = state_110227;
var statearr_110229_110258 = state_110227__$1;
(statearr_110229_110258[(2)] = inst_110223);

(statearr_110229_110258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (1))){
var inst_110186 = [];
var inst_110187 = inst_110186;
var inst_110188 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_110227__$1 = (function (){var statearr_110230 = state_110227;
(statearr_110230[(7)] = inst_110188);

(statearr_110230[(8)] = inst_110187);

return statearr_110230;
})();
var statearr_110231_110259 = state_110227__$1;
(statearr_110231_110259[(2)] = null);

(statearr_110231_110259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (4))){
var inst_110191 = (state_110227[(9)]);
var inst_110191__$1 = (state_110227[(2)]);
var inst_110192 = (inst_110191__$1 == null);
var inst_110193 = cljs.core.not.call(null,inst_110192);
var state_110227__$1 = (function (){var statearr_110232 = state_110227;
(statearr_110232[(9)] = inst_110191__$1);

return statearr_110232;
})();
if(inst_110193){
var statearr_110233_110260 = state_110227__$1;
(statearr_110233_110260[(1)] = (5));

} else {
var statearr_110234_110261 = state_110227__$1;
(statearr_110234_110261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (15))){
var inst_110217 = (state_110227[(2)]);
var state_110227__$1 = state_110227;
var statearr_110235_110262 = state_110227__$1;
(statearr_110235_110262[(2)] = inst_110217);

(statearr_110235_110262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (13))){
var state_110227__$1 = state_110227;
var statearr_110236_110263 = state_110227__$1;
(statearr_110236_110263[(2)] = null);

(statearr_110236_110263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (6))){
var inst_110187 = (state_110227[(8)]);
var inst_110212 = inst_110187.length;
var inst_110213 = (inst_110212 > (0));
var state_110227__$1 = state_110227;
if(cljs.core.truth_(inst_110213)){
var statearr_110237_110264 = state_110227__$1;
(statearr_110237_110264[(1)] = (12));

} else {
var statearr_110238_110265 = state_110227__$1;
(statearr_110238_110265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (3))){
var inst_110225 = (state_110227[(2)]);
var state_110227__$1 = state_110227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110227__$1,inst_110225);
} else {
if((state_val_110228 === (12))){
var inst_110187 = (state_110227[(8)]);
var inst_110215 = cljs.core.vec.call(null,inst_110187);
var state_110227__$1 = state_110227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110227__$1,(15),out,inst_110215);
} else {
if((state_val_110228 === (2))){
var state_110227__$1 = state_110227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110227__$1,(4),ch);
} else {
if((state_val_110228 === (11))){
var inst_110191 = (state_110227[(9)]);
var inst_110195 = (state_110227[(10)]);
var inst_110205 = (state_110227[(2)]);
var inst_110206 = [];
var inst_110207 = inst_110206.push(inst_110191);
var inst_110187 = inst_110206;
var inst_110188 = inst_110195;
var state_110227__$1 = (function (){var statearr_110239 = state_110227;
(statearr_110239[(11)] = inst_110205);

(statearr_110239[(12)] = inst_110207);

(statearr_110239[(7)] = inst_110188);

(statearr_110239[(8)] = inst_110187);

return statearr_110239;
})();
var statearr_110240_110266 = state_110227__$1;
(statearr_110240_110266[(2)] = null);

(statearr_110240_110266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (9))){
var inst_110187 = (state_110227[(8)]);
var inst_110203 = cljs.core.vec.call(null,inst_110187);
var state_110227__$1 = state_110227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110227__$1,(11),out,inst_110203);
} else {
if((state_val_110228 === (5))){
var inst_110188 = (state_110227[(7)]);
var inst_110191 = (state_110227[(9)]);
var inst_110195 = (state_110227[(10)]);
var inst_110195__$1 = f.call(null,inst_110191);
var inst_110196 = cljs.core._EQ_.call(null,inst_110195__$1,inst_110188);
var inst_110197 = cljs.core.keyword_identical_QMARK_.call(null,inst_110188,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_110198 = (inst_110196) || (inst_110197);
var state_110227__$1 = (function (){var statearr_110241 = state_110227;
(statearr_110241[(10)] = inst_110195__$1);

return statearr_110241;
})();
if(cljs.core.truth_(inst_110198)){
var statearr_110242_110267 = state_110227__$1;
(statearr_110242_110267[(1)] = (8));

} else {
var statearr_110243_110268 = state_110227__$1;
(statearr_110243_110268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (14))){
var inst_110220 = (state_110227[(2)]);
var inst_110221 = cljs.core.async.close_BANG_.call(null,out);
var state_110227__$1 = (function (){var statearr_110245 = state_110227;
(statearr_110245[(13)] = inst_110220);

return statearr_110245;
})();
var statearr_110246_110269 = state_110227__$1;
(statearr_110246_110269[(2)] = inst_110221);

(statearr_110246_110269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (10))){
var inst_110210 = (state_110227[(2)]);
var state_110227__$1 = state_110227;
var statearr_110247_110270 = state_110227__$1;
(statearr_110247_110270[(2)] = inst_110210);

(statearr_110247_110270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110228 === (8))){
var inst_110191 = (state_110227[(9)]);
var inst_110195 = (state_110227[(10)]);
var inst_110187 = (state_110227[(8)]);
var inst_110200 = inst_110187.push(inst_110191);
var tmp110244 = inst_110187;
var inst_110187__$1 = tmp110244;
var inst_110188 = inst_110195;
var state_110227__$1 = (function (){var statearr_110248 = state_110227;
(statearr_110248[(7)] = inst_110188);

(statearr_110248[(14)] = inst_110200);

(statearr_110248[(8)] = inst_110187__$1);

return statearr_110248;
})();
var statearr_110249_110271 = state_110227__$1;
(statearr_110249_110271[(2)] = null);

(statearr_110249_110271[(1)] = (2));


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
});})(c__9199__auto___110257,out))
;
return ((function (switch__9184__auto__,c__9199__auto___110257,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_110253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_110253[(0)] = state_machine__9185__auto__);

(statearr_110253[(1)] = (1));

return statearr_110253;
});
var state_machine__9185__auto____1 = (function (state_110227){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_110227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e110254){if((e110254 instanceof Object)){
var ex__9188__auto__ = e110254;
var statearr_110255_110272 = state_110227;
(statearr_110255_110272[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110273 = state_110227;
state_110227 = G__110273;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_110227){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_110227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___110257,out))
})();
var state__9201__auto__ = (function (){var statearr_110256 = f__9200__auto__.call(null);
(statearr_110256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___110257);

return statearr_110256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___110257,out))
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