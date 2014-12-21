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
if(typeof cljs.core.async.t22796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22796 = (function (f,fn_handler,meta22797){
this.f = f;
this.fn_handler = fn_handler;
this.meta22797 = meta22797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22798){
var self__ = this;
var _22798__$1 = this;
return self__.meta22797;
});

cljs.core.async.t22796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22798,meta22797__$1){
var self__ = this;
var _22798__$1 = this;
return (new cljs.core.async.t22796(self__.f,self__.fn_handler,meta22797__$1));
});

cljs.core.async.t22796.cljs$lang$type = true;

cljs.core.async.t22796.cljs$lang$ctorStr = "cljs.core.async/t22796";

cljs.core.async.t22796.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t22796");
});

cljs.core.async.__GT_t22796 = (function __GT_t22796(f__$1,fn_handler__$1,meta22797){
return (new cljs.core.async.t22796(f__$1,fn_handler__$1,meta22797));
});

}

return (new cljs.core.async.t22796(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__22800 = buff;
if(G__22800){
var bit__13226__auto__ = null;
if(cljs.core.truth_((function (){var or__12545__auto__ = bit__13226__auto__;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return G__22800.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22800.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22800);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22800);
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
var val_22801 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22801);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22801,ret){
return (function (){
return fn1.call(null,val_22801);
});})(val_22801,ret))
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
var n__13432__auto___22802 = n;
var x_22803 = (0);
while(true){
if((x_22803 < n__13432__auto___22802)){
(a[x_22803] = (0));

var G__22804 = (x_22803 + (1));
x_22803 = G__22804;
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

var G__22805 = (i + (1));
i = G__22805;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22809 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22809 = (function (flag,alt_flag,meta22810){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22810 = meta22810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22811){
var self__ = this;
var _22811__$1 = this;
return self__.meta22810;
});})(flag))
;

cljs.core.async.t22809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22811,meta22810__$1){
var self__ = this;
var _22811__$1 = this;
return (new cljs.core.async.t22809(self__.flag,self__.alt_flag,meta22810__$1));
});})(flag))
;

cljs.core.async.t22809.cljs$lang$type = true;

cljs.core.async.t22809.cljs$lang$ctorStr = "cljs.core.async/t22809";

cljs.core.async.t22809.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t22809");
});})(flag))
;

cljs.core.async.__GT_t22809 = ((function (flag){
return (function __GT_t22809(flag__$1,alt_flag__$1,meta22810){
return (new cljs.core.async.t22809(flag__$1,alt_flag__$1,meta22810));
});})(flag))
;

}

return (new cljs.core.async.t22809(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22815 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22815 = (function (cb,flag,alt_handler,meta22816){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22816 = meta22816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22815.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22817){
var self__ = this;
var _22817__$1 = this;
return self__.meta22816;
});

cljs.core.async.t22815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22817,meta22816__$1){
var self__ = this;
var _22817__$1 = this;
return (new cljs.core.async.t22815(self__.cb,self__.flag,self__.alt_handler,meta22816__$1));
});

cljs.core.async.t22815.cljs$lang$type = true;

cljs.core.async.t22815.cljs$lang$ctorStr = "cljs.core.async/t22815";

cljs.core.async.t22815.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t22815");
});

cljs.core.async.__GT_t22815 = (function __GT_t22815(cb__$1,flag__$1,alt_handler__$1,meta22816){
return (new cljs.core.async.t22815(cb__$1,flag__$1,alt_handler__$1,meta22816));
});

}

return (new cljs.core.async.t22815(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__22818_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22818_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22819_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22819_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12545__auto__ = wport;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22820 = (i + (1));
i = G__22820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12545__auto__ = ret;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12533__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12533__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12533__auto__;
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
var alts_BANG___delegate = function (ports,p__22821){
var map__22823 = p__22821;
var map__22823__$1 = ((cljs.core.seq_QMARK_.call(null,map__22823))?cljs.core.apply.call(null,cljs.core.hash_map,map__22823):map__22823);
var opts = map__22823__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22821 = null;
if (arguments.length > 1) {
  p__22821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22821);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22824){
var ports = cljs.core.first(arglist__22824);
var p__22821 = cljs.core.rest(arglist__22824);
return alts_BANG___delegate(ports,p__22821);
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
var c__16852__auto___22919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___22919){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___22919){
return (function (state_22895){
var state_val_22896 = (state_22895[(1)]);
if((state_val_22896 === (7))){
var inst_22891 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22897_22920 = state_22895__$1;
(statearr_22897_22920[(2)] = inst_22891);

(statearr_22897_22920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (1))){
var state_22895__$1 = state_22895;
var statearr_22898_22921 = state_22895__$1;
(statearr_22898_22921[(2)] = null);

(statearr_22898_22921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (4))){
var inst_22874 = (state_22895[(7)]);
var inst_22874__$1 = (state_22895[(2)]);
var inst_22875 = (inst_22874__$1 == null);
var state_22895__$1 = (function (){var statearr_22899 = state_22895;
(statearr_22899[(7)] = inst_22874__$1);

return statearr_22899;
})();
if(cljs.core.truth_(inst_22875)){
var statearr_22900_22922 = state_22895__$1;
(statearr_22900_22922[(1)] = (5));

} else {
var statearr_22901_22923 = state_22895__$1;
(statearr_22901_22923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (13))){
var state_22895__$1 = state_22895;
var statearr_22902_22924 = state_22895__$1;
(statearr_22902_22924[(2)] = null);

(statearr_22902_22924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (6))){
var inst_22874 = (state_22895[(7)]);
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22895__$1,(11),to,inst_22874);
} else {
if((state_val_22896 === (3))){
var inst_22893 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22895__$1,inst_22893);
} else {
if((state_val_22896 === (12))){
var state_22895__$1 = state_22895;
var statearr_22903_22925 = state_22895__$1;
(statearr_22903_22925[(2)] = null);

(statearr_22903_22925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (2))){
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22895__$1,(4),from);
} else {
if((state_val_22896 === (11))){
var inst_22884 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
if(cljs.core.truth_(inst_22884)){
var statearr_22904_22926 = state_22895__$1;
(statearr_22904_22926[(1)] = (12));

} else {
var statearr_22905_22927 = state_22895__$1;
(statearr_22905_22927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (9))){
var state_22895__$1 = state_22895;
var statearr_22906_22928 = state_22895__$1;
(statearr_22906_22928[(2)] = null);

(statearr_22906_22928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (5))){
var state_22895__$1 = state_22895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22907_22929 = state_22895__$1;
(statearr_22907_22929[(1)] = (8));

} else {
var statearr_22908_22930 = state_22895__$1;
(statearr_22908_22930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (14))){
var inst_22889 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22909_22931 = state_22895__$1;
(statearr_22909_22931[(2)] = inst_22889);

(statearr_22909_22931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (10))){
var inst_22881 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22910_22932 = state_22895__$1;
(statearr_22910_22932[(2)] = inst_22881);

(statearr_22910_22932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (8))){
var inst_22878 = cljs.core.async.close_BANG_.call(null,to);
var state_22895__$1 = state_22895;
var statearr_22911_22933 = state_22895__$1;
(statearr_22911_22933[(2)] = inst_22878);

(statearr_22911_22933[(1)] = (10));


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
});})(c__16852__auto___22919))
;
return ((function (switch__16796__auto__,c__16852__auto___22919){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_22915 = [null,null,null,null,null,null,null,null];
(statearr_22915[(0)] = state_machine__16797__auto__);

(statearr_22915[(1)] = (1));

return statearr_22915;
});
var state_machine__16797__auto____1 = (function (state_22895){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_22895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e22916){if((e22916 instanceof Object)){
var ex__16800__auto__ = e22916;
var statearr_22917_22934 = state_22895;
(statearr_22917_22934[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22935 = state_22895;
state_22895 = G__22935;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_22895){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_22895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___22919))
})();
var state__16854__auto__ = (function (){var statearr_22918 = f__16853__auto__.call(null);
(statearr_22918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___22919);

return statearr_22918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___22919))
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
return (function (p__23119){
var vec__23120 = p__23119;
var v = cljs.core.nth.call(null,vec__23120,(0),null);
var p = cljs.core.nth.call(null,vec__23120,(1),null);
var job = vec__23120;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16852__auto___23302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results){
return (function (state_23125){
var state_val_23126 = (state_23125[(1)]);
if((state_val_23126 === (2))){
var inst_23122 = (state_23125[(2)]);
var inst_23123 = cljs.core.async.close_BANG_.call(null,res);
var state_23125__$1 = (function (){var statearr_23127 = state_23125;
(statearr_23127[(7)] = inst_23122);

return statearr_23127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23125__$1,inst_23123);
} else {
if((state_val_23126 === (1))){
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23125__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results))
;
return ((function (switch__16796__auto__,c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23131 = [null,null,null,null,null,null,null,null];
(statearr_23131[(0)] = state_machine__16797__auto__);

(statearr_23131[(1)] = (1));

return statearr_23131;
});
var state_machine__16797__auto____1 = (function (state_23125){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23132){if((e23132 instanceof Object)){
var ex__16800__auto__ = e23132;
var statearr_23133_23303 = state_23125;
(statearr_23133_23303[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23304 = state_23125;
state_23125 = G__23304;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23125){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results))
})();
var state__16854__auto__ = (function (){var statearr_23134 = f__16853__auto__.call(null);
(statearr_23134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___23302);

return statearr_23134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___23302,res,vec__23120,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23135){
var vec__23136 = p__23135;
var v = cljs.core.nth.call(null,vec__23136,(0),null);
var p = cljs.core.nth.call(null,vec__23136,(1),null);
var job = vec__23136;
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
var n__13432__auto___23305 = n;
var __23306 = (0);
while(true){
if((__23306 < n__13432__auto___23305)){
var G__23137_23307 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23137_23307) {
case "async":
var c__16852__auto___23309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23306,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (__23306,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function (state_23150){
var state_val_23151 = (state_23150[(1)]);
if((state_val_23151 === (7))){
var inst_23146 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23152_23310 = state_23150__$1;
(statearr_23152_23310[(2)] = inst_23146);

(statearr_23152_23310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (6))){
var state_23150__$1 = state_23150;
var statearr_23153_23311 = state_23150__$1;
(statearr_23153_23311[(2)] = null);

(statearr_23153_23311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (5))){
var state_23150__$1 = state_23150;
var statearr_23154_23312 = state_23150__$1;
(statearr_23154_23312[(2)] = null);

(statearr_23154_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (4))){
var inst_23140 = (state_23150[(2)]);
var inst_23141 = async.call(null,inst_23140);
var state_23150__$1 = state_23150;
if(cljs.core.truth_(inst_23141)){
var statearr_23155_23313 = state_23150__$1;
(statearr_23155_23313[(1)] = (5));

} else {
var statearr_23156_23314 = state_23150__$1;
(statearr_23156_23314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (3))){
var inst_23148 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23150__$1,inst_23148);
} else {
if((state_val_23151 === (2))){
var state_23150__$1 = state_23150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23150__$1,(4),jobs);
} else {
if((state_val_23151 === (1))){
var state_23150__$1 = state_23150;
var statearr_23157_23315 = state_23150__$1;
(statearr_23157_23315[(2)] = null);

(statearr_23157_23315[(1)] = (2));


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
});})(__23306,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
;
return ((function (__23306,switch__16796__auto__,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23161 = [null,null,null,null,null,null,null];
(statearr_23161[(0)] = state_machine__16797__auto__);

(statearr_23161[(1)] = (1));

return statearr_23161;
});
var state_machine__16797__auto____1 = (function (state_23150){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23162){if((e23162 instanceof Object)){
var ex__16800__auto__ = e23162;
var statearr_23163_23316 = state_23150;
(statearr_23163_23316[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23317 = state_23150;
state_23150 = G__23317;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23150){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(__23306,switch__16796__auto__,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
})();
var state__16854__auto__ = (function (){var statearr_23164 = f__16853__auto__.call(null);
(statearr_23164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___23309);

return statearr_23164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(__23306,c__16852__auto___23309,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
);


break;
case "compute":
var c__16852__auto___23318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23306,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (__23306,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function (state_23177){
var state_val_23178 = (state_23177[(1)]);
if((state_val_23178 === (7))){
var inst_23173 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23179_23319 = state_23177__$1;
(statearr_23179_23319[(2)] = inst_23173);

(statearr_23179_23319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (6))){
var state_23177__$1 = state_23177;
var statearr_23180_23320 = state_23177__$1;
(statearr_23180_23320[(2)] = null);

(statearr_23180_23320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (5))){
var state_23177__$1 = state_23177;
var statearr_23181_23321 = state_23177__$1;
(statearr_23181_23321[(2)] = null);

(statearr_23181_23321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (4))){
var inst_23167 = (state_23177[(2)]);
var inst_23168 = process.call(null,inst_23167);
var state_23177__$1 = state_23177;
if(cljs.core.truth_(inst_23168)){
var statearr_23182_23322 = state_23177__$1;
(statearr_23182_23322[(1)] = (5));

} else {
var statearr_23183_23323 = state_23177__$1;
(statearr_23183_23323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (3))){
var inst_23175 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23177__$1,inst_23175);
} else {
if((state_val_23178 === (2))){
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23177__$1,(4),jobs);
} else {
if((state_val_23178 === (1))){
var state_23177__$1 = state_23177;
var statearr_23184_23324 = state_23177__$1;
(statearr_23184_23324[(2)] = null);

(statearr_23184_23324[(1)] = (2));


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
});})(__23306,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
;
return ((function (__23306,switch__16796__auto__,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23188 = [null,null,null,null,null,null,null];
(statearr_23188[(0)] = state_machine__16797__auto__);

(statearr_23188[(1)] = (1));

return statearr_23188;
});
var state_machine__16797__auto____1 = (function (state_23177){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23189){if((e23189 instanceof Object)){
var ex__16800__auto__ = e23189;
var statearr_23190_23325 = state_23177;
(statearr_23190_23325[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23326 = state_23177;
state_23177 = G__23326;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23177){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(__23306,switch__16796__auto__,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
})();
var state__16854__auto__ = (function (){var statearr_23191 = f__16853__auto__.call(null);
(statearr_23191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___23318);

return statearr_23191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(__23306,c__16852__auto___23318,G__23137_23307,n__13432__auto___23305,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23327 = (__23306 + (1));
__23306 = G__23327;
continue;
} else {
}
break;
}

var c__16852__auto___23328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___23328,jobs,results,process,async){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___23328,jobs,results,process,async){
return (function (state_23213){
var state_val_23214 = (state_23213[(1)]);
if((state_val_23214 === (9))){
var inst_23206 = (state_23213[(2)]);
var state_23213__$1 = (function (){var statearr_23215 = state_23213;
(statearr_23215[(7)] = inst_23206);

return statearr_23215;
})();
var statearr_23216_23329 = state_23213__$1;
(statearr_23216_23329[(2)] = null);

(statearr_23216_23329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (8))){
var inst_23199 = (state_23213[(8)]);
var inst_23204 = (state_23213[(2)]);
var state_23213__$1 = (function (){var statearr_23217 = state_23213;
(statearr_23217[(9)] = inst_23204);

return statearr_23217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23213__$1,(9),results,inst_23199);
} else {
if((state_val_23214 === (7))){
var inst_23209 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23218_23330 = state_23213__$1;
(statearr_23218_23330[(2)] = inst_23209);

(statearr_23218_23330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (6))){
var inst_23194 = (state_23213[(10)]);
var inst_23199 = (state_23213[(8)]);
var inst_23199__$1 = cljs.core.async.chan.call(null,(1));
var inst_23200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23201 = [inst_23194,inst_23199__$1];
var inst_23202 = (new cljs.core.PersistentVector(null,2,(5),inst_23200,inst_23201,null));
var state_23213__$1 = (function (){var statearr_23219 = state_23213;
(statearr_23219[(8)] = inst_23199__$1);

return statearr_23219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23213__$1,(8),jobs,inst_23202);
} else {
if((state_val_23214 === (5))){
var inst_23197 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23213__$1 = state_23213;
var statearr_23220_23331 = state_23213__$1;
(statearr_23220_23331[(2)] = inst_23197);

(statearr_23220_23331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (4))){
var inst_23194 = (state_23213[(10)]);
var inst_23194__$1 = (state_23213[(2)]);
var inst_23195 = (inst_23194__$1 == null);
var state_23213__$1 = (function (){var statearr_23221 = state_23213;
(statearr_23221[(10)] = inst_23194__$1);

return statearr_23221;
})();
if(cljs.core.truth_(inst_23195)){
var statearr_23222_23332 = state_23213__$1;
(statearr_23222_23332[(1)] = (5));

} else {
var statearr_23223_23333 = state_23213__$1;
(statearr_23223_23333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (3))){
var inst_23211 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23213__$1,inst_23211);
} else {
if((state_val_23214 === (2))){
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23213__$1,(4),from);
} else {
if((state_val_23214 === (1))){
var state_23213__$1 = state_23213;
var statearr_23224_23334 = state_23213__$1;
(statearr_23224_23334[(2)] = null);

(statearr_23224_23334[(1)] = (2));


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
});})(c__16852__auto___23328,jobs,results,process,async))
;
return ((function (switch__16796__auto__,c__16852__auto___23328,jobs,results,process,async){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23228[(0)] = state_machine__16797__auto__);

(statearr_23228[(1)] = (1));

return statearr_23228;
});
var state_machine__16797__auto____1 = (function (state_23213){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object)){
var ex__16800__auto__ = e23229;
var statearr_23230_23335 = state_23213;
(statearr_23230_23335[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23336 = state_23213;
state_23213 = G__23336;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23213){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___23328,jobs,results,process,async))
})();
var state__16854__auto__ = (function (){var statearr_23231 = f__16853__auto__.call(null);
(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___23328);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___23328,jobs,results,process,async))
);


var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__,jobs,results,process,async){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__,jobs,results,process,async){
return (function (state_23269){
var state_val_23270 = (state_23269[(1)]);
if((state_val_23270 === (7))){
var inst_23265 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
var statearr_23271_23337 = state_23269__$1;
(statearr_23271_23337[(2)] = inst_23265);

(statearr_23271_23337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (20))){
var state_23269__$1 = state_23269;
var statearr_23272_23338 = state_23269__$1;
(statearr_23272_23338[(2)] = null);

(statearr_23272_23338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (1))){
var state_23269__$1 = state_23269;
var statearr_23273_23339 = state_23269__$1;
(statearr_23273_23339[(2)] = null);

(statearr_23273_23339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (4))){
var inst_23234 = (state_23269[(7)]);
var inst_23234__$1 = (state_23269[(2)]);
var inst_23235 = (inst_23234__$1 == null);
var state_23269__$1 = (function (){var statearr_23274 = state_23269;
(statearr_23274[(7)] = inst_23234__$1);

return statearr_23274;
})();
if(cljs.core.truth_(inst_23235)){
var statearr_23275_23340 = state_23269__$1;
(statearr_23275_23340[(1)] = (5));

} else {
var statearr_23276_23341 = state_23269__$1;
(statearr_23276_23341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (15))){
var inst_23247 = (state_23269[(8)]);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23269__$1,(18),to,inst_23247);
} else {
if((state_val_23270 === (21))){
var inst_23260 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
var statearr_23277_23342 = state_23269__$1;
(statearr_23277_23342[(2)] = inst_23260);

(statearr_23277_23342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (13))){
var inst_23262 = (state_23269[(2)]);
var state_23269__$1 = (function (){var statearr_23278 = state_23269;
(statearr_23278[(9)] = inst_23262);

return statearr_23278;
})();
var statearr_23279_23343 = state_23269__$1;
(statearr_23279_23343[(2)] = null);

(statearr_23279_23343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (6))){
var inst_23234 = (state_23269[(7)]);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23269__$1,(11),inst_23234);
} else {
if((state_val_23270 === (17))){
var inst_23255 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
if(cljs.core.truth_(inst_23255)){
var statearr_23280_23344 = state_23269__$1;
(statearr_23280_23344[(1)] = (19));

} else {
var statearr_23281_23345 = state_23269__$1;
(statearr_23281_23345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (3))){
var inst_23267 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23269__$1,inst_23267);
} else {
if((state_val_23270 === (12))){
var inst_23244 = (state_23269[(10)]);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23269__$1,(14),inst_23244);
} else {
if((state_val_23270 === (2))){
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23269__$1,(4),results);
} else {
if((state_val_23270 === (19))){
var state_23269__$1 = state_23269;
var statearr_23282_23346 = state_23269__$1;
(statearr_23282_23346[(2)] = null);

(statearr_23282_23346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (11))){
var inst_23244 = (state_23269[(2)]);
var state_23269__$1 = (function (){var statearr_23283 = state_23269;
(statearr_23283[(10)] = inst_23244);

return statearr_23283;
})();
var statearr_23284_23347 = state_23269__$1;
(statearr_23284_23347[(2)] = null);

(statearr_23284_23347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (9))){
var state_23269__$1 = state_23269;
var statearr_23285_23348 = state_23269__$1;
(statearr_23285_23348[(2)] = null);

(statearr_23285_23348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (5))){
var state_23269__$1 = state_23269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23286_23349 = state_23269__$1;
(statearr_23286_23349[(1)] = (8));

} else {
var statearr_23287_23350 = state_23269__$1;
(statearr_23287_23350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (14))){
var inst_23247 = (state_23269[(8)]);
var inst_23249 = (state_23269[(11)]);
var inst_23247__$1 = (state_23269[(2)]);
var inst_23248 = (inst_23247__$1 == null);
var inst_23249__$1 = cljs.core.not.call(null,inst_23248);
var state_23269__$1 = (function (){var statearr_23288 = state_23269;
(statearr_23288[(8)] = inst_23247__$1);

(statearr_23288[(11)] = inst_23249__$1);

return statearr_23288;
})();
if(inst_23249__$1){
var statearr_23289_23351 = state_23269__$1;
(statearr_23289_23351[(1)] = (15));

} else {
var statearr_23290_23352 = state_23269__$1;
(statearr_23290_23352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (16))){
var inst_23249 = (state_23269[(11)]);
var state_23269__$1 = state_23269;
var statearr_23291_23353 = state_23269__$1;
(statearr_23291_23353[(2)] = inst_23249);

(statearr_23291_23353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (10))){
var inst_23241 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
var statearr_23292_23354 = state_23269__$1;
(statearr_23292_23354[(2)] = inst_23241);

(statearr_23292_23354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (18))){
var inst_23252 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
var statearr_23293_23355 = state_23269__$1;
(statearr_23293_23355[(2)] = inst_23252);

(statearr_23293_23355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23270 === (8))){
var inst_23238 = cljs.core.async.close_BANG_.call(null,to);
var state_23269__$1 = state_23269;
var statearr_23294_23356 = state_23269__$1;
(statearr_23294_23356[(2)] = inst_23238);

(statearr_23294_23356[(1)] = (10));


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
});})(c__16852__auto__,jobs,results,process,async))
;
return ((function (switch__16796__auto__,c__16852__auto__,jobs,results,process,async){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23298[(0)] = state_machine__16797__auto__);

(statearr_23298[(1)] = (1));

return statearr_23298;
});
var state_machine__16797__auto____1 = (function (state_23269){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23299){if((e23299 instanceof Object)){
var ex__16800__auto__ = e23299;
var statearr_23300_23357 = state_23269;
(statearr_23300_23357[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23358 = state_23269;
state_23269 = G__23358;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23269){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__,jobs,results,process,async))
})();
var state__16854__auto__ = (function (){var statearr_23301 = f__16853__auto__.call(null);
(statearr_23301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_23301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__,jobs,results,process,async))
);

return c__16852__auto__;
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
var c__16852__auto___23459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___23459,tc,fc){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___23459,tc,fc){
return (function (state_23434){
var state_val_23435 = (state_23434[(1)]);
if((state_val_23435 === (7))){
var inst_23430 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
var statearr_23436_23460 = state_23434__$1;
(statearr_23436_23460[(2)] = inst_23430);

(statearr_23436_23460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (1))){
var state_23434__$1 = state_23434;
var statearr_23437_23461 = state_23434__$1;
(statearr_23437_23461[(2)] = null);

(statearr_23437_23461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (4))){
var inst_23411 = (state_23434[(7)]);
var inst_23411__$1 = (state_23434[(2)]);
var inst_23412 = (inst_23411__$1 == null);
var state_23434__$1 = (function (){var statearr_23438 = state_23434;
(statearr_23438[(7)] = inst_23411__$1);

return statearr_23438;
})();
if(cljs.core.truth_(inst_23412)){
var statearr_23439_23462 = state_23434__$1;
(statearr_23439_23462[(1)] = (5));

} else {
var statearr_23440_23463 = state_23434__$1;
(statearr_23440_23463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (13))){
var state_23434__$1 = state_23434;
var statearr_23441_23464 = state_23434__$1;
(statearr_23441_23464[(2)] = null);

(statearr_23441_23464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (6))){
var inst_23411 = (state_23434[(7)]);
var inst_23417 = p.call(null,inst_23411);
var state_23434__$1 = state_23434;
if(cljs.core.truth_(inst_23417)){
var statearr_23442_23465 = state_23434__$1;
(statearr_23442_23465[(1)] = (9));

} else {
var statearr_23443_23466 = state_23434__$1;
(statearr_23443_23466[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (3))){
var inst_23432 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23434__$1,inst_23432);
} else {
if((state_val_23435 === (12))){
var state_23434__$1 = state_23434;
var statearr_23444_23467 = state_23434__$1;
(statearr_23444_23467[(2)] = null);

(statearr_23444_23467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (2))){
var state_23434__$1 = state_23434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23434__$1,(4),ch);
} else {
if((state_val_23435 === (11))){
var inst_23411 = (state_23434[(7)]);
var inst_23421 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,(8),inst_23421,inst_23411);
} else {
if((state_val_23435 === (9))){
var state_23434__$1 = state_23434;
var statearr_23445_23468 = state_23434__$1;
(statearr_23445_23468[(2)] = tc);

(statearr_23445_23468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (5))){
var inst_23414 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23415 = cljs.core.async.close_BANG_.call(null,fc);
var state_23434__$1 = (function (){var statearr_23446 = state_23434;
(statearr_23446[(8)] = inst_23414);

return statearr_23446;
})();
var statearr_23447_23469 = state_23434__$1;
(statearr_23447_23469[(2)] = inst_23415);

(statearr_23447_23469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (14))){
var inst_23428 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
var statearr_23448_23470 = state_23434__$1;
(statearr_23448_23470[(2)] = inst_23428);

(statearr_23448_23470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (10))){
var state_23434__$1 = state_23434;
var statearr_23449_23471 = state_23434__$1;
(statearr_23449_23471[(2)] = fc);

(statearr_23449_23471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23435 === (8))){
var inst_23423 = (state_23434[(2)]);
var state_23434__$1 = state_23434;
if(cljs.core.truth_(inst_23423)){
var statearr_23450_23472 = state_23434__$1;
(statearr_23450_23472[(1)] = (12));

} else {
var statearr_23451_23473 = state_23434__$1;
(statearr_23451_23473[(1)] = (13));

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
});})(c__16852__auto___23459,tc,fc))
;
return ((function (switch__16796__auto__,c__16852__auto___23459,tc,fc){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23455 = [null,null,null,null,null,null,null,null,null];
(statearr_23455[(0)] = state_machine__16797__auto__);

(statearr_23455[(1)] = (1));

return statearr_23455;
});
var state_machine__16797__auto____1 = (function (state_23434){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23456){if((e23456 instanceof Object)){
var ex__16800__auto__ = e23456;
var statearr_23457_23474 = state_23434;
(statearr_23457_23474[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23475 = state_23434;
state_23434 = G__23475;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23434){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___23459,tc,fc))
})();
var state__16854__auto__ = (function (){var statearr_23458 = f__16853__auto__.call(null);
(statearr_23458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___23459);

return statearr_23458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___23459,tc,fc))
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
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_23522){
var state_val_23523 = (state_23522[(1)]);
if((state_val_23523 === (7))){
var inst_23518 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23524_23540 = state_23522__$1;
(statearr_23524_23540[(2)] = inst_23518);

(statearr_23524_23540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (6))){
var inst_23511 = (state_23522[(7)]);
var inst_23508 = (state_23522[(8)]);
var inst_23515 = f.call(null,inst_23508,inst_23511);
var inst_23508__$1 = inst_23515;
var state_23522__$1 = (function (){var statearr_23525 = state_23522;
(statearr_23525[(8)] = inst_23508__$1);

return statearr_23525;
})();
var statearr_23526_23541 = state_23522__$1;
(statearr_23526_23541[(2)] = null);

(statearr_23526_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (5))){
var inst_23508 = (state_23522[(8)]);
var state_23522__$1 = state_23522;
var statearr_23527_23542 = state_23522__$1;
(statearr_23527_23542[(2)] = inst_23508);

(statearr_23527_23542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (4))){
var inst_23511 = (state_23522[(7)]);
var inst_23511__$1 = (state_23522[(2)]);
var inst_23512 = (inst_23511__$1 == null);
var state_23522__$1 = (function (){var statearr_23528 = state_23522;
(statearr_23528[(7)] = inst_23511__$1);

return statearr_23528;
})();
if(cljs.core.truth_(inst_23512)){
var statearr_23529_23543 = state_23522__$1;
(statearr_23529_23543[(1)] = (5));

} else {
var statearr_23530_23544 = state_23522__$1;
(statearr_23530_23544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (3))){
var inst_23520 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23522__$1,inst_23520);
} else {
if((state_val_23523 === (2))){
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23522__$1,(4),ch);
} else {
if((state_val_23523 === (1))){
var inst_23508 = init;
var state_23522__$1 = (function (){var statearr_23531 = state_23522;
(statearr_23531[(8)] = inst_23508);

return statearr_23531;
})();
var statearr_23532_23545 = state_23522__$1;
(statearr_23532_23545[(2)] = null);

(statearr_23532_23545[(1)] = (2));


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
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23536 = [null,null,null,null,null,null,null,null,null];
(statearr_23536[(0)] = state_machine__16797__auto__);

(statearr_23536[(1)] = (1));

return statearr_23536;
});
var state_machine__16797__auto____1 = (function (state_23522){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23537){if((e23537 instanceof Object)){
var ex__16800__auto__ = e23537;
var statearr_23538_23546 = state_23522;
(statearr_23538_23546[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23547 = state_23522;
state_23522 = G__23547;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23522){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_23539 = f__16853__auto__.call(null);
(statearr_23539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_23539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
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
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_23621){
var state_val_23622 = (state_23621[(1)]);
if((state_val_23622 === (7))){
var inst_23603 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23623_23646 = state_23621__$1;
(statearr_23623_23646[(2)] = inst_23603);

(statearr_23623_23646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (1))){
var inst_23597 = cljs.core.seq.call(null,coll);
var inst_23598 = inst_23597;
var state_23621__$1 = (function (){var statearr_23624 = state_23621;
(statearr_23624[(7)] = inst_23598);

return statearr_23624;
})();
var statearr_23625_23647 = state_23621__$1;
(statearr_23625_23647[(2)] = null);

(statearr_23625_23647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (4))){
var inst_23598 = (state_23621[(7)]);
var inst_23601 = cljs.core.first.call(null,inst_23598);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(7),ch,inst_23601);
} else {
if((state_val_23622 === (13))){
var inst_23615 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23626_23648 = state_23621__$1;
(statearr_23626_23648[(2)] = inst_23615);

(statearr_23626_23648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (6))){
var inst_23606 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
if(cljs.core.truth_(inst_23606)){
var statearr_23627_23649 = state_23621__$1;
(statearr_23627_23649[(1)] = (8));

} else {
var statearr_23628_23650 = state_23621__$1;
(statearr_23628_23650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (3))){
var inst_23619 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else {
if((state_val_23622 === (12))){
var state_23621__$1 = state_23621;
var statearr_23629_23651 = state_23621__$1;
(statearr_23629_23651[(2)] = null);

(statearr_23629_23651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (2))){
var inst_23598 = (state_23621[(7)]);
var state_23621__$1 = state_23621;
if(cljs.core.truth_(inst_23598)){
var statearr_23630_23652 = state_23621__$1;
(statearr_23630_23652[(1)] = (4));

} else {
var statearr_23631_23653 = state_23621__$1;
(statearr_23631_23653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (11))){
var inst_23612 = cljs.core.async.close_BANG_.call(null,ch);
var state_23621__$1 = state_23621;
var statearr_23632_23654 = state_23621__$1;
(statearr_23632_23654[(2)] = inst_23612);

(statearr_23632_23654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (9))){
var state_23621__$1 = state_23621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23633_23655 = state_23621__$1;
(statearr_23633_23655[(1)] = (11));

} else {
var statearr_23634_23656 = state_23621__$1;
(statearr_23634_23656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (5))){
var inst_23598 = (state_23621[(7)]);
var state_23621__$1 = state_23621;
var statearr_23635_23657 = state_23621__$1;
(statearr_23635_23657[(2)] = inst_23598);

(statearr_23635_23657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (10))){
var inst_23617 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23636_23658 = state_23621__$1;
(statearr_23636_23658[(2)] = inst_23617);

(statearr_23636_23658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (8))){
var inst_23598 = (state_23621[(7)]);
var inst_23608 = cljs.core.next.call(null,inst_23598);
var inst_23598__$1 = inst_23608;
var state_23621__$1 = (function (){var statearr_23637 = state_23621;
(statearr_23637[(7)] = inst_23598__$1);

return statearr_23637;
})();
var statearr_23638_23659 = state_23621__$1;
(statearr_23638_23659[(2)] = null);

(statearr_23638_23659[(1)] = (2));


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
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_23642 = [null,null,null,null,null,null,null,null];
(statearr_23642[(0)] = state_machine__16797__auto__);

(statearr_23642[(1)] = (1));

return statearr_23642;
});
var state_machine__16797__auto____1 = (function (state_23621){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_23621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e23643){if((e23643 instanceof Object)){
var ex__16800__auto__ = e23643;
var statearr_23644_23660 = state_23621;
(statearr_23644_23660[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23661 = state_23621;
state_23621 = G__23661;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_23645 = f__16853__auto__.call(null);
(statearr_23645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_23645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
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

cljs.core.async.Mux = (function (){var obj23663 = {};
return obj23663;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12533__auto__ = _;
if(and__12533__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12533__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13189__auto__ = (((_ == null))?null:_);
return (function (){var or__12545__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23665 = {};
return obj23665;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
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
if(typeof cljs.core.async.t23887 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23887 = (function (cs,ch,mult,meta23888){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23888 = meta23888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23887.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23887.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23887.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23887.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23887.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23889){
var self__ = this;
var _23889__$1 = this;
return self__.meta23888;
});})(cs))
;

cljs.core.async.t23887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23889,meta23888__$1){
var self__ = this;
var _23889__$1 = this;
return (new cljs.core.async.t23887(self__.cs,self__.ch,self__.mult,meta23888__$1));
});})(cs))
;

cljs.core.async.t23887.cljs$lang$type = true;

cljs.core.async.t23887.cljs$lang$ctorStr = "cljs.core.async/t23887";

cljs.core.async.t23887.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23887");
});})(cs))
;

cljs.core.async.__GT_t23887 = ((function (cs){
return (function __GT_t23887(cs__$1,ch__$1,mult__$1,meta23888){
return (new cljs.core.async.t23887(cs__$1,ch__$1,mult__$1,meta23888));
});})(cs))
;

}

return (new cljs.core.async.t23887(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16852__auto___24108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___24108,cs,m,dchan,dctr,done){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___24108,cs,m,dchan,dctr,done){
return (function (state_24020){
var state_val_24021 = (state_24020[(1)]);
if((state_val_24021 === (7))){
var inst_24016 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24022_24109 = state_24020__$1;
(statearr_24022_24109[(2)] = inst_24016);

(statearr_24022_24109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (20))){
var inst_23921 = (state_24020[(7)]);
var inst_23931 = cljs.core.first.call(null,inst_23921);
var inst_23932 = cljs.core.nth.call(null,inst_23931,(0),null);
var inst_23933 = cljs.core.nth.call(null,inst_23931,(1),null);
var state_24020__$1 = (function (){var statearr_24023 = state_24020;
(statearr_24023[(8)] = inst_23932);

return statearr_24023;
})();
if(cljs.core.truth_(inst_23933)){
var statearr_24024_24110 = state_24020__$1;
(statearr_24024_24110[(1)] = (22));

} else {
var statearr_24025_24111 = state_24020__$1;
(statearr_24025_24111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (27))){
var inst_23963 = (state_24020[(9)]);
var inst_23961 = (state_24020[(10)]);
var inst_23892 = (state_24020[(11)]);
var inst_23968 = (state_24020[(12)]);
var inst_23968__$1 = cljs.core._nth.call(null,inst_23961,inst_23963);
var inst_23969 = cljs.core.async.put_BANG_.call(null,inst_23968__$1,inst_23892,done);
var state_24020__$1 = (function (){var statearr_24026 = state_24020;
(statearr_24026[(12)] = inst_23968__$1);

return statearr_24026;
})();
if(cljs.core.truth_(inst_23969)){
var statearr_24027_24112 = state_24020__$1;
(statearr_24027_24112[(1)] = (30));

} else {
var statearr_24028_24113 = state_24020__$1;
(statearr_24028_24113[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (1))){
var state_24020__$1 = state_24020;
var statearr_24029_24114 = state_24020__$1;
(statearr_24029_24114[(2)] = null);

(statearr_24029_24114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (24))){
var inst_23921 = (state_24020[(7)]);
var inst_23938 = (state_24020[(2)]);
var inst_23939 = cljs.core.next.call(null,inst_23921);
var inst_23901 = inst_23939;
var inst_23902 = null;
var inst_23903 = (0);
var inst_23904 = (0);
var state_24020__$1 = (function (){var statearr_24030 = state_24020;
(statearr_24030[(13)] = inst_23904);

(statearr_24030[(14)] = inst_23903);

(statearr_24030[(15)] = inst_23938);

(statearr_24030[(16)] = inst_23901);

(statearr_24030[(17)] = inst_23902);

return statearr_24030;
})();
var statearr_24031_24115 = state_24020__$1;
(statearr_24031_24115[(2)] = null);

(statearr_24031_24115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (39))){
var state_24020__$1 = state_24020;
var statearr_24035_24116 = state_24020__$1;
(statearr_24035_24116[(2)] = null);

(statearr_24035_24116[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (4))){
var inst_23892 = (state_24020[(11)]);
var inst_23892__$1 = (state_24020[(2)]);
var inst_23893 = (inst_23892__$1 == null);
var state_24020__$1 = (function (){var statearr_24036 = state_24020;
(statearr_24036[(11)] = inst_23892__$1);

return statearr_24036;
})();
if(cljs.core.truth_(inst_23893)){
var statearr_24037_24117 = state_24020__$1;
(statearr_24037_24117[(1)] = (5));

} else {
var statearr_24038_24118 = state_24020__$1;
(statearr_24038_24118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (15))){
var inst_23904 = (state_24020[(13)]);
var inst_23903 = (state_24020[(14)]);
var inst_23901 = (state_24020[(16)]);
var inst_23902 = (state_24020[(17)]);
var inst_23917 = (state_24020[(2)]);
var inst_23918 = (inst_23904 + (1));
var tmp24032 = inst_23903;
var tmp24033 = inst_23901;
var tmp24034 = inst_23902;
var inst_23901__$1 = tmp24033;
var inst_23902__$1 = tmp24034;
var inst_23903__$1 = tmp24032;
var inst_23904__$1 = inst_23918;
var state_24020__$1 = (function (){var statearr_24039 = state_24020;
(statearr_24039[(18)] = inst_23917);

(statearr_24039[(13)] = inst_23904__$1);

(statearr_24039[(14)] = inst_23903__$1);

(statearr_24039[(16)] = inst_23901__$1);

(statearr_24039[(17)] = inst_23902__$1);

return statearr_24039;
})();
var statearr_24040_24119 = state_24020__$1;
(statearr_24040_24119[(2)] = null);

(statearr_24040_24119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (21))){
var inst_23942 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24044_24120 = state_24020__$1;
(statearr_24044_24120[(2)] = inst_23942);

(statearr_24044_24120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (31))){
var inst_23968 = (state_24020[(12)]);
var inst_23972 = done.call(null,null);
var inst_23973 = cljs.core.async.untap_STAR_.call(null,m,inst_23968);
var state_24020__$1 = (function (){var statearr_24045 = state_24020;
(statearr_24045[(19)] = inst_23972);

return statearr_24045;
})();
var statearr_24046_24121 = state_24020__$1;
(statearr_24046_24121[(2)] = inst_23973);

(statearr_24046_24121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (32))){
var inst_23963 = (state_24020[(9)]);
var inst_23960 = (state_24020[(20)]);
var inst_23961 = (state_24020[(10)]);
var inst_23962 = (state_24020[(21)]);
var inst_23975 = (state_24020[(2)]);
var inst_23976 = (inst_23963 + (1));
var tmp24041 = inst_23960;
var tmp24042 = inst_23961;
var tmp24043 = inst_23962;
var inst_23960__$1 = tmp24041;
var inst_23961__$1 = tmp24042;
var inst_23962__$1 = tmp24043;
var inst_23963__$1 = inst_23976;
var state_24020__$1 = (function (){var statearr_24047 = state_24020;
(statearr_24047[(22)] = inst_23975);

(statearr_24047[(9)] = inst_23963__$1);

(statearr_24047[(20)] = inst_23960__$1);

(statearr_24047[(10)] = inst_23961__$1);

(statearr_24047[(21)] = inst_23962__$1);

return statearr_24047;
})();
var statearr_24048_24122 = state_24020__$1;
(statearr_24048_24122[(2)] = null);

(statearr_24048_24122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (40))){
var inst_23988 = (state_24020[(23)]);
var inst_23992 = done.call(null,null);
var inst_23993 = cljs.core.async.untap_STAR_.call(null,m,inst_23988);
var state_24020__$1 = (function (){var statearr_24049 = state_24020;
(statearr_24049[(24)] = inst_23992);

return statearr_24049;
})();
var statearr_24050_24123 = state_24020__$1;
(statearr_24050_24123[(2)] = inst_23993);

(statearr_24050_24123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (33))){
var inst_23979 = (state_24020[(25)]);
var inst_23981 = cljs.core.chunked_seq_QMARK_.call(null,inst_23979);
var state_24020__$1 = state_24020;
if(inst_23981){
var statearr_24051_24124 = state_24020__$1;
(statearr_24051_24124[(1)] = (36));

} else {
var statearr_24052_24125 = state_24020__$1;
(statearr_24052_24125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (13))){
var inst_23911 = (state_24020[(26)]);
var inst_23914 = cljs.core.async.close_BANG_.call(null,inst_23911);
var state_24020__$1 = state_24020;
var statearr_24053_24126 = state_24020__$1;
(statearr_24053_24126[(2)] = inst_23914);

(statearr_24053_24126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (22))){
var inst_23932 = (state_24020[(8)]);
var inst_23935 = cljs.core.async.close_BANG_.call(null,inst_23932);
var state_24020__$1 = state_24020;
var statearr_24054_24127 = state_24020__$1;
(statearr_24054_24127[(2)] = inst_23935);

(statearr_24054_24127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (36))){
var inst_23979 = (state_24020[(25)]);
var inst_23983 = cljs.core.chunk_first.call(null,inst_23979);
var inst_23984 = cljs.core.chunk_rest.call(null,inst_23979);
var inst_23985 = cljs.core.count.call(null,inst_23983);
var inst_23960 = inst_23984;
var inst_23961 = inst_23983;
var inst_23962 = inst_23985;
var inst_23963 = (0);
var state_24020__$1 = (function (){var statearr_24055 = state_24020;
(statearr_24055[(9)] = inst_23963);

(statearr_24055[(20)] = inst_23960);

(statearr_24055[(10)] = inst_23961);

(statearr_24055[(21)] = inst_23962);

return statearr_24055;
})();
var statearr_24056_24128 = state_24020__$1;
(statearr_24056_24128[(2)] = null);

(statearr_24056_24128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (41))){
var inst_23979 = (state_24020[(25)]);
var inst_23995 = (state_24020[(2)]);
var inst_23996 = cljs.core.next.call(null,inst_23979);
var inst_23960 = inst_23996;
var inst_23961 = null;
var inst_23962 = (0);
var inst_23963 = (0);
var state_24020__$1 = (function (){var statearr_24057 = state_24020;
(statearr_24057[(9)] = inst_23963);

(statearr_24057[(20)] = inst_23960);

(statearr_24057[(10)] = inst_23961);

(statearr_24057[(21)] = inst_23962);

(statearr_24057[(27)] = inst_23995);

return statearr_24057;
})();
var statearr_24058_24129 = state_24020__$1;
(statearr_24058_24129[(2)] = null);

(statearr_24058_24129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (43))){
var state_24020__$1 = state_24020;
var statearr_24059_24130 = state_24020__$1;
(statearr_24059_24130[(2)] = null);

(statearr_24059_24130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (29))){
var inst_24004 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24060_24131 = state_24020__$1;
(statearr_24060_24131[(2)] = inst_24004);

(statearr_24060_24131[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (44))){
var inst_24013 = (state_24020[(2)]);
var state_24020__$1 = (function (){var statearr_24061 = state_24020;
(statearr_24061[(28)] = inst_24013);

return statearr_24061;
})();
var statearr_24062_24132 = state_24020__$1;
(statearr_24062_24132[(2)] = null);

(statearr_24062_24132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (6))){
var inst_23952 = (state_24020[(29)]);
var inst_23951 = cljs.core.deref.call(null,cs);
var inst_23952__$1 = cljs.core.keys.call(null,inst_23951);
var inst_23953 = cljs.core.count.call(null,inst_23952__$1);
var inst_23954 = cljs.core.reset_BANG_.call(null,dctr,inst_23953);
var inst_23959 = cljs.core.seq.call(null,inst_23952__$1);
var inst_23960 = inst_23959;
var inst_23961 = null;
var inst_23962 = (0);
var inst_23963 = (0);
var state_24020__$1 = (function (){var statearr_24063 = state_24020;
(statearr_24063[(30)] = inst_23954);

(statearr_24063[(9)] = inst_23963);

(statearr_24063[(20)] = inst_23960);

(statearr_24063[(10)] = inst_23961);

(statearr_24063[(29)] = inst_23952__$1);

(statearr_24063[(21)] = inst_23962);

return statearr_24063;
})();
var statearr_24064_24133 = state_24020__$1;
(statearr_24064_24133[(2)] = null);

(statearr_24064_24133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (28))){
var inst_23960 = (state_24020[(20)]);
var inst_23979 = (state_24020[(25)]);
var inst_23979__$1 = cljs.core.seq.call(null,inst_23960);
var state_24020__$1 = (function (){var statearr_24065 = state_24020;
(statearr_24065[(25)] = inst_23979__$1);

return statearr_24065;
})();
if(inst_23979__$1){
var statearr_24066_24134 = state_24020__$1;
(statearr_24066_24134[(1)] = (33));

} else {
var statearr_24067_24135 = state_24020__$1;
(statearr_24067_24135[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (25))){
var inst_23963 = (state_24020[(9)]);
var inst_23962 = (state_24020[(21)]);
var inst_23965 = (inst_23963 < inst_23962);
var inst_23966 = inst_23965;
var state_24020__$1 = state_24020;
if(cljs.core.truth_(inst_23966)){
var statearr_24068_24136 = state_24020__$1;
(statearr_24068_24136[(1)] = (27));

} else {
var statearr_24069_24137 = state_24020__$1;
(statearr_24069_24137[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (34))){
var state_24020__$1 = state_24020;
var statearr_24070_24138 = state_24020__$1;
(statearr_24070_24138[(2)] = null);

(statearr_24070_24138[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (17))){
var state_24020__$1 = state_24020;
var statearr_24071_24139 = state_24020__$1;
(statearr_24071_24139[(2)] = null);

(statearr_24071_24139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (3))){
var inst_24018 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24020__$1,inst_24018);
} else {
if((state_val_24021 === (12))){
var inst_23947 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24072_24140 = state_24020__$1;
(statearr_24072_24140[(2)] = inst_23947);

(statearr_24072_24140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (2))){
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24020__$1,(4),ch);
} else {
if((state_val_24021 === (23))){
var state_24020__$1 = state_24020;
var statearr_24073_24141 = state_24020__$1;
(statearr_24073_24141[(2)] = null);

(statearr_24073_24141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (35))){
var inst_24002 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24074_24142 = state_24020__$1;
(statearr_24074_24142[(2)] = inst_24002);

(statearr_24074_24142[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (19))){
var inst_23921 = (state_24020[(7)]);
var inst_23925 = cljs.core.chunk_first.call(null,inst_23921);
var inst_23926 = cljs.core.chunk_rest.call(null,inst_23921);
var inst_23927 = cljs.core.count.call(null,inst_23925);
var inst_23901 = inst_23926;
var inst_23902 = inst_23925;
var inst_23903 = inst_23927;
var inst_23904 = (0);
var state_24020__$1 = (function (){var statearr_24075 = state_24020;
(statearr_24075[(13)] = inst_23904);

(statearr_24075[(14)] = inst_23903);

(statearr_24075[(16)] = inst_23901);

(statearr_24075[(17)] = inst_23902);

return statearr_24075;
})();
var statearr_24076_24143 = state_24020__$1;
(statearr_24076_24143[(2)] = null);

(statearr_24076_24143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (11))){
var inst_23921 = (state_24020[(7)]);
var inst_23901 = (state_24020[(16)]);
var inst_23921__$1 = cljs.core.seq.call(null,inst_23901);
var state_24020__$1 = (function (){var statearr_24077 = state_24020;
(statearr_24077[(7)] = inst_23921__$1);

return statearr_24077;
})();
if(inst_23921__$1){
var statearr_24078_24144 = state_24020__$1;
(statearr_24078_24144[(1)] = (16));

} else {
var statearr_24079_24145 = state_24020__$1;
(statearr_24079_24145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (9))){
var inst_23949 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24080_24146 = state_24020__$1;
(statearr_24080_24146[(2)] = inst_23949);

(statearr_24080_24146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (5))){
var inst_23899 = cljs.core.deref.call(null,cs);
var inst_23900 = cljs.core.seq.call(null,inst_23899);
var inst_23901 = inst_23900;
var inst_23902 = null;
var inst_23903 = (0);
var inst_23904 = (0);
var state_24020__$1 = (function (){var statearr_24081 = state_24020;
(statearr_24081[(13)] = inst_23904);

(statearr_24081[(14)] = inst_23903);

(statearr_24081[(16)] = inst_23901);

(statearr_24081[(17)] = inst_23902);

return statearr_24081;
})();
var statearr_24082_24147 = state_24020__$1;
(statearr_24082_24147[(2)] = null);

(statearr_24082_24147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (14))){
var state_24020__$1 = state_24020;
var statearr_24083_24148 = state_24020__$1;
(statearr_24083_24148[(2)] = null);

(statearr_24083_24148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (45))){
var inst_24010 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24084_24149 = state_24020__$1;
(statearr_24084_24149[(2)] = inst_24010);

(statearr_24084_24149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (26))){
var inst_23952 = (state_24020[(29)]);
var inst_24006 = (state_24020[(2)]);
var inst_24007 = cljs.core.seq.call(null,inst_23952);
var state_24020__$1 = (function (){var statearr_24085 = state_24020;
(statearr_24085[(31)] = inst_24006);

return statearr_24085;
})();
if(inst_24007){
var statearr_24086_24150 = state_24020__$1;
(statearr_24086_24150[(1)] = (42));

} else {
var statearr_24087_24151 = state_24020__$1;
(statearr_24087_24151[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (16))){
var inst_23921 = (state_24020[(7)]);
var inst_23923 = cljs.core.chunked_seq_QMARK_.call(null,inst_23921);
var state_24020__$1 = state_24020;
if(inst_23923){
var statearr_24088_24152 = state_24020__$1;
(statearr_24088_24152[(1)] = (19));

} else {
var statearr_24089_24153 = state_24020__$1;
(statearr_24089_24153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (38))){
var inst_23999 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24090_24154 = state_24020__$1;
(statearr_24090_24154[(2)] = inst_23999);

(statearr_24090_24154[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (30))){
var state_24020__$1 = state_24020;
var statearr_24091_24155 = state_24020__$1;
(statearr_24091_24155[(2)] = null);

(statearr_24091_24155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (10))){
var inst_23904 = (state_24020[(13)]);
var inst_23902 = (state_24020[(17)]);
var inst_23910 = cljs.core._nth.call(null,inst_23902,inst_23904);
var inst_23911 = cljs.core.nth.call(null,inst_23910,(0),null);
var inst_23912 = cljs.core.nth.call(null,inst_23910,(1),null);
var state_24020__$1 = (function (){var statearr_24092 = state_24020;
(statearr_24092[(26)] = inst_23911);

return statearr_24092;
})();
if(cljs.core.truth_(inst_23912)){
var statearr_24093_24156 = state_24020__$1;
(statearr_24093_24156[(1)] = (13));

} else {
var statearr_24094_24157 = state_24020__$1;
(statearr_24094_24157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (18))){
var inst_23945 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24095_24158 = state_24020__$1;
(statearr_24095_24158[(2)] = inst_23945);

(statearr_24095_24158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (42))){
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24020__$1,(45),dchan);
} else {
if((state_val_24021 === (37))){
var inst_23988 = (state_24020[(23)]);
var inst_23979 = (state_24020[(25)]);
var inst_23892 = (state_24020[(11)]);
var inst_23988__$1 = cljs.core.first.call(null,inst_23979);
var inst_23989 = cljs.core.async.put_BANG_.call(null,inst_23988__$1,inst_23892,done);
var state_24020__$1 = (function (){var statearr_24096 = state_24020;
(statearr_24096[(23)] = inst_23988__$1);

return statearr_24096;
})();
if(cljs.core.truth_(inst_23989)){
var statearr_24097_24159 = state_24020__$1;
(statearr_24097_24159[(1)] = (39));

} else {
var statearr_24098_24160 = state_24020__$1;
(statearr_24098_24160[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (8))){
var inst_23904 = (state_24020[(13)]);
var inst_23903 = (state_24020[(14)]);
var inst_23906 = (inst_23904 < inst_23903);
var inst_23907 = inst_23906;
var state_24020__$1 = state_24020;
if(cljs.core.truth_(inst_23907)){
var statearr_24099_24161 = state_24020__$1;
(statearr_24099_24161[(1)] = (10));

} else {
var statearr_24100_24162 = state_24020__$1;
(statearr_24100_24162[(1)] = (11));

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
});})(c__16852__auto___24108,cs,m,dchan,dctr,done))
;
return ((function (switch__16796__auto__,c__16852__auto___24108,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_24104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24104[(0)] = state_machine__16797__auto__);

(statearr_24104[(1)] = (1));

return statearr_24104;
});
var state_machine__16797__auto____1 = (function (state_24020){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_24020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e24105){if((e24105 instanceof Object)){
var ex__16800__auto__ = e24105;
var statearr_24106_24163 = state_24020;
(statearr_24106_24163[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24164 = state_24020;
state_24020 = G__24164;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_24020){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_24020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___24108,cs,m,dchan,dctr,done))
})();
var state__16854__auto__ = (function (){var statearr_24107 = f__16853__auto__.call(null);
(statearr_24107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___24108);

return statearr_24107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___24108,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24166 = {};
return obj24166;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12533__auto__ = m;
if(and__12533__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13189__auto__ = (((m == null))?null:m);
return (function (){var or__12545__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24167){
var map__24172 = p__24167;
var map__24172__$1 = ((cljs.core.seq_QMARK_.call(null,map__24172))?cljs.core.apply.call(null,cljs.core.hash_map,map__24172):map__24172);
var opts = map__24172__$1;
var statearr_24173_24176 = state;
(statearr_24173_24176[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24172,map__24172__$1,opts){
return (function (val){
var statearr_24174_24177 = state;
(statearr_24174_24177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24172,map__24172__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24175_24178 = state;
(statearr_24175_24178[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24167 = null;
if (arguments.length > 3) {
  p__24167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24167);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24179){
var state = cljs.core.first(arglist__24179);
arglist__24179 = cljs.core.next(arglist__24179);
var cont_block = cljs.core.first(arglist__24179);
arglist__24179 = cljs.core.next(arglist__24179);
var ports = cljs.core.first(arglist__24179);
var p__24167 = cljs.core.rest(arglist__24179);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24167);
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
if(typeof cljs.core.async.t24299 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24299 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24300){
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
this.meta24300 = meta24300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24299.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24299.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t24299.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24301){
var self__ = this;
var _24301__$1 = this;
return self__.meta24300;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24301,meta24300__$1){
var self__ = this;
var _24301__$1 = this;
return (new cljs.core.async.t24299(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24300__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24299.cljs$lang$type = true;

cljs.core.async.t24299.cljs$lang$ctorStr = "cljs.core.async/t24299";

cljs.core.async.t24299.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t24299");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24299 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24299(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24300){
return (new cljs.core.async.t24299(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24300));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24299(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16852__auto___24418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24371){
var state_val_24372 = (state_24371[(1)]);
if((state_val_24372 === (7))){
var inst_24315 = (state_24371[(7)]);
var inst_24320 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24315);
var state_24371__$1 = state_24371;
var statearr_24373_24419 = state_24371__$1;
(statearr_24373_24419[(2)] = inst_24320);

(statearr_24373_24419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (20))){
var inst_24330 = (state_24371[(8)]);
var state_24371__$1 = state_24371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24371__$1,(23),out,inst_24330);
} else {
if((state_val_24372 === (1))){
var inst_24305 = (state_24371[(9)]);
var inst_24305__$1 = calc_state.call(null);
var inst_24306 = cljs.core.seq_QMARK_.call(null,inst_24305__$1);
var state_24371__$1 = (function (){var statearr_24374 = state_24371;
(statearr_24374[(9)] = inst_24305__$1);

return statearr_24374;
})();
if(inst_24306){
var statearr_24375_24420 = state_24371__$1;
(statearr_24375_24420[(1)] = (2));

} else {
var statearr_24376_24421 = state_24371__$1;
(statearr_24376_24421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (24))){
var inst_24323 = (state_24371[(10)]);
var inst_24315 = inst_24323;
var state_24371__$1 = (function (){var statearr_24377 = state_24371;
(statearr_24377[(7)] = inst_24315);

return statearr_24377;
})();
var statearr_24378_24422 = state_24371__$1;
(statearr_24378_24422[(2)] = null);

(statearr_24378_24422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (4))){
var inst_24305 = (state_24371[(9)]);
var inst_24311 = (state_24371[(2)]);
var inst_24312 = cljs.core.get.call(null,inst_24311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24313 = cljs.core.get.call(null,inst_24311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24314 = cljs.core.get.call(null,inst_24311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24315 = inst_24305;
var state_24371__$1 = (function (){var statearr_24379 = state_24371;
(statearr_24379[(11)] = inst_24314);

(statearr_24379[(12)] = inst_24313);

(statearr_24379[(13)] = inst_24312);

(statearr_24379[(7)] = inst_24315);

return statearr_24379;
})();
var statearr_24380_24423 = state_24371__$1;
(statearr_24380_24423[(2)] = null);

(statearr_24380_24423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (15))){
var state_24371__$1 = state_24371;
var statearr_24381_24424 = state_24371__$1;
(statearr_24381_24424[(2)] = null);

(statearr_24381_24424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (21))){
var inst_24323 = (state_24371[(10)]);
var inst_24315 = inst_24323;
var state_24371__$1 = (function (){var statearr_24382 = state_24371;
(statearr_24382[(7)] = inst_24315);

return statearr_24382;
})();
var statearr_24383_24425 = state_24371__$1;
(statearr_24383_24425[(2)] = null);

(statearr_24383_24425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (13))){
var inst_24367 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24384_24426 = state_24371__$1;
(statearr_24384_24426[(2)] = inst_24367);

(statearr_24384_24426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (22))){
var inst_24365 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24385_24427 = state_24371__$1;
(statearr_24385_24427[(2)] = inst_24365);

(statearr_24385_24427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (6))){
var inst_24369 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24371__$1,inst_24369);
} else {
if((state_val_24372 === (25))){
var state_24371__$1 = state_24371;
var statearr_24386_24428 = state_24371__$1;
(statearr_24386_24428[(2)] = null);

(statearr_24386_24428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (17))){
var inst_24345 = (state_24371[(14)]);
var state_24371__$1 = state_24371;
var statearr_24387_24429 = state_24371__$1;
(statearr_24387_24429[(2)] = inst_24345);

(statearr_24387_24429[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (3))){
var inst_24305 = (state_24371[(9)]);
var state_24371__$1 = state_24371;
var statearr_24388_24430 = state_24371__$1;
(statearr_24388_24430[(2)] = inst_24305);

(statearr_24388_24430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (12))){
var inst_24331 = (state_24371[(15)]);
var inst_24326 = (state_24371[(16)]);
var inst_24345 = (state_24371[(14)]);
var inst_24345__$1 = inst_24326.call(null,inst_24331);
var state_24371__$1 = (function (){var statearr_24389 = state_24371;
(statearr_24389[(14)] = inst_24345__$1);

return statearr_24389;
})();
if(cljs.core.truth_(inst_24345__$1)){
var statearr_24390_24431 = state_24371__$1;
(statearr_24390_24431[(1)] = (17));

} else {
var statearr_24391_24432 = state_24371__$1;
(statearr_24391_24432[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (2))){
var inst_24305 = (state_24371[(9)]);
var inst_24308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24305);
var state_24371__$1 = state_24371;
var statearr_24392_24433 = state_24371__$1;
(statearr_24392_24433[(2)] = inst_24308);

(statearr_24392_24433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (23))){
var inst_24356 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
if(cljs.core.truth_(inst_24356)){
var statearr_24393_24434 = state_24371__$1;
(statearr_24393_24434[(1)] = (24));

} else {
var statearr_24394_24435 = state_24371__$1;
(statearr_24394_24435[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (19))){
var inst_24353 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
if(cljs.core.truth_(inst_24353)){
var statearr_24395_24436 = state_24371__$1;
(statearr_24395_24436[(1)] = (20));

} else {
var statearr_24396_24437 = state_24371__$1;
(statearr_24396_24437[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (11))){
var inst_24330 = (state_24371[(8)]);
var inst_24336 = (inst_24330 == null);
var state_24371__$1 = state_24371;
if(cljs.core.truth_(inst_24336)){
var statearr_24397_24438 = state_24371__$1;
(statearr_24397_24438[(1)] = (14));

} else {
var statearr_24398_24439 = state_24371__$1;
(statearr_24398_24439[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (9))){
var inst_24323 = (state_24371[(10)]);
var inst_24323__$1 = (state_24371[(2)]);
var inst_24324 = cljs.core.get.call(null,inst_24323__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24325 = cljs.core.get.call(null,inst_24323__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24326 = cljs.core.get.call(null,inst_24323__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24371__$1 = (function (){var statearr_24399 = state_24371;
(statearr_24399[(17)] = inst_24325);

(statearr_24399[(16)] = inst_24326);

(statearr_24399[(10)] = inst_24323__$1);

return statearr_24399;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24371__$1,(10),inst_24324);
} else {
if((state_val_24372 === (5))){
var inst_24315 = (state_24371[(7)]);
var inst_24318 = cljs.core.seq_QMARK_.call(null,inst_24315);
var state_24371__$1 = state_24371;
if(inst_24318){
var statearr_24400_24440 = state_24371__$1;
(statearr_24400_24440[(1)] = (7));

} else {
var statearr_24401_24441 = state_24371__$1;
(statearr_24401_24441[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (14))){
var inst_24331 = (state_24371[(15)]);
var inst_24338 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24331);
var state_24371__$1 = state_24371;
var statearr_24402_24442 = state_24371__$1;
(statearr_24402_24442[(2)] = inst_24338);

(statearr_24402_24442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (26))){
var inst_24361 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24403_24443 = state_24371__$1;
(statearr_24403_24443[(2)] = inst_24361);

(statearr_24403_24443[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (16))){
var inst_24341 = (state_24371[(2)]);
var inst_24342 = calc_state.call(null);
var inst_24315 = inst_24342;
var state_24371__$1 = (function (){var statearr_24404 = state_24371;
(statearr_24404[(18)] = inst_24341);

(statearr_24404[(7)] = inst_24315);

return statearr_24404;
})();
var statearr_24405_24444 = state_24371__$1;
(statearr_24405_24444[(2)] = null);

(statearr_24405_24444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (10))){
var inst_24331 = (state_24371[(15)]);
var inst_24330 = (state_24371[(8)]);
var inst_24329 = (state_24371[(2)]);
var inst_24330__$1 = cljs.core.nth.call(null,inst_24329,(0),null);
var inst_24331__$1 = cljs.core.nth.call(null,inst_24329,(1),null);
var inst_24332 = (inst_24330__$1 == null);
var inst_24333 = cljs.core._EQ_.call(null,inst_24331__$1,change);
var inst_24334 = (inst_24332) || (inst_24333);
var state_24371__$1 = (function (){var statearr_24406 = state_24371;
(statearr_24406[(15)] = inst_24331__$1);

(statearr_24406[(8)] = inst_24330__$1);

return statearr_24406;
})();
if(cljs.core.truth_(inst_24334)){
var statearr_24407_24445 = state_24371__$1;
(statearr_24407_24445[(1)] = (11));

} else {
var statearr_24408_24446 = state_24371__$1;
(statearr_24408_24446[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (18))){
var inst_24325 = (state_24371[(17)]);
var inst_24331 = (state_24371[(15)]);
var inst_24326 = (state_24371[(16)]);
var inst_24348 = cljs.core.empty_QMARK_.call(null,inst_24326);
var inst_24349 = inst_24325.call(null,inst_24331);
var inst_24350 = cljs.core.not.call(null,inst_24349);
var inst_24351 = (inst_24348) && (inst_24350);
var state_24371__$1 = state_24371;
var statearr_24409_24447 = state_24371__$1;
(statearr_24409_24447[(2)] = inst_24351);

(statearr_24409_24447[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (8))){
var inst_24315 = (state_24371[(7)]);
var state_24371__$1 = state_24371;
var statearr_24410_24448 = state_24371__$1;
(statearr_24410_24448[(2)] = inst_24315);

(statearr_24410_24448[(1)] = (9));


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
});})(c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16796__auto__,c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_24414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24414[(0)] = state_machine__16797__auto__);

(statearr_24414[(1)] = (1));

return statearr_24414;
});
var state_machine__16797__auto____1 = (function (state_24371){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_24371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e24415){if((e24415 instanceof Object)){
var ex__16800__auto__ = e24415;
var statearr_24416_24449 = state_24371;
(statearr_24416_24449[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24450 = state_24371;
state_24371 = G__24450;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_24371){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_24371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16854__auto__ = (function (){var statearr_24417 = f__16853__auto__.call(null);
(statearr_24417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___24418);

return statearr_24417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___24418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24452 = {};
return obj24452;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12533__auto__ = p;
if(and__12533__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12533__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13189__auto__ = (((p == null))?null:p);
return (function (){var or__12545__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12533__auto__ = p;
if(and__12533__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12533__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13189__auto__ = (((p == null))?null:p);
return (function (){var or__12545__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
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
if((function (){var and__12533__auto__ = p;
if(and__12533__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12533__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13189__auto__ = (((p == null))?null:p);
return (function (){var or__12545__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12533__auto__ = p;
if(and__12533__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12533__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13189__auto__ = (((p == null))?null:p);
return (function (){var or__12545__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
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
var or__12545__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12545__auto__,mults){
return (function (p1__24453_SHARP_){
if(cljs.core.truth_(p1__24453_SHARP_.call(null,topic))){
return p1__24453_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12545__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24576 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24577){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24577 = meta24577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24576.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24576.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24576.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t24576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24576.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24578){
var self__ = this;
var _24578__$1 = this;
return self__.meta24577;
});})(mults,ensure_mult))
;

cljs.core.async.t24576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24578,meta24577__$1){
var self__ = this;
var _24578__$1 = this;
return (new cljs.core.async.t24576(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24577__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24576.cljs$lang$type = true;

cljs.core.async.t24576.cljs$lang$ctorStr = "cljs.core.async/t24576";

cljs.core.async.t24576.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t24576");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24576 = ((function (mults,ensure_mult){
return (function __GT_t24576(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24577){
return (new cljs.core.async.t24576(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24577));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24576(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16852__auto___24698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___24698,mults,ensure_mult,p){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___24698,mults,ensure_mult,p){
return (function (state_24650){
var state_val_24651 = (state_24650[(1)]);
if((state_val_24651 === (7))){
var inst_24646 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24652_24699 = state_24650__$1;
(statearr_24652_24699[(2)] = inst_24646);

(statearr_24652_24699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (20))){
var state_24650__$1 = state_24650;
var statearr_24653_24700 = state_24650__$1;
(statearr_24653_24700[(2)] = null);

(statearr_24653_24700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (1))){
var state_24650__$1 = state_24650;
var statearr_24654_24701 = state_24650__$1;
(statearr_24654_24701[(2)] = null);

(statearr_24654_24701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (24))){
var inst_24629 = (state_24650[(7)]);
var inst_24638 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24629);
var state_24650__$1 = state_24650;
var statearr_24655_24702 = state_24650__$1;
(statearr_24655_24702[(2)] = inst_24638);

(statearr_24655_24702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (4))){
var inst_24581 = (state_24650[(8)]);
var inst_24581__$1 = (state_24650[(2)]);
var inst_24582 = (inst_24581__$1 == null);
var state_24650__$1 = (function (){var statearr_24656 = state_24650;
(statearr_24656[(8)] = inst_24581__$1);

return statearr_24656;
})();
if(cljs.core.truth_(inst_24582)){
var statearr_24657_24703 = state_24650__$1;
(statearr_24657_24703[(1)] = (5));

} else {
var statearr_24658_24704 = state_24650__$1;
(statearr_24658_24704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (15))){
var inst_24623 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24659_24705 = state_24650__$1;
(statearr_24659_24705[(2)] = inst_24623);

(statearr_24659_24705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (21))){
var inst_24643 = (state_24650[(2)]);
var state_24650__$1 = (function (){var statearr_24660 = state_24650;
(statearr_24660[(9)] = inst_24643);

return statearr_24660;
})();
var statearr_24661_24706 = state_24650__$1;
(statearr_24661_24706[(2)] = null);

(statearr_24661_24706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (13))){
var inst_24605 = (state_24650[(10)]);
var inst_24607 = cljs.core.chunked_seq_QMARK_.call(null,inst_24605);
var state_24650__$1 = state_24650;
if(inst_24607){
var statearr_24662_24707 = state_24650__$1;
(statearr_24662_24707[(1)] = (16));

} else {
var statearr_24663_24708 = state_24650__$1;
(statearr_24663_24708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (22))){
var inst_24635 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
if(cljs.core.truth_(inst_24635)){
var statearr_24664_24709 = state_24650__$1;
(statearr_24664_24709[(1)] = (23));

} else {
var statearr_24665_24710 = state_24650__$1;
(statearr_24665_24710[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (6))){
var inst_24581 = (state_24650[(8)]);
var inst_24629 = (state_24650[(7)]);
var inst_24631 = (state_24650[(11)]);
var inst_24629__$1 = topic_fn.call(null,inst_24581);
var inst_24630 = cljs.core.deref.call(null,mults);
var inst_24631__$1 = cljs.core.get.call(null,inst_24630,inst_24629__$1);
var state_24650__$1 = (function (){var statearr_24666 = state_24650;
(statearr_24666[(7)] = inst_24629__$1);

(statearr_24666[(11)] = inst_24631__$1);

return statearr_24666;
})();
if(cljs.core.truth_(inst_24631__$1)){
var statearr_24667_24711 = state_24650__$1;
(statearr_24667_24711[(1)] = (19));

} else {
var statearr_24668_24712 = state_24650__$1;
(statearr_24668_24712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (25))){
var inst_24640 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24669_24713 = state_24650__$1;
(statearr_24669_24713[(2)] = inst_24640);

(statearr_24669_24713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (17))){
var inst_24605 = (state_24650[(10)]);
var inst_24614 = cljs.core.first.call(null,inst_24605);
var inst_24615 = cljs.core.async.muxch_STAR_.call(null,inst_24614);
var inst_24616 = cljs.core.async.close_BANG_.call(null,inst_24615);
var inst_24617 = cljs.core.next.call(null,inst_24605);
var inst_24591 = inst_24617;
var inst_24592 = null;
var inst_24593 = (0);
var inst_24594 = (0);
var state_24650__$1 = (function (){var statearr_24670 = state_24650;
(statearr_24670[(12)] = inst_24591);

(statearr_24670[(13)] = inst_24592);

(statearr_24670[(14)] = inst_24594);

(statearr_24670[(15)] = inst_24593);

(statearr_24670[(16)] = inst_24616);

return statearr_24670;
})();
var statearr_24671_24714 = state_24650__$1;
(statearr_24671_24714[(2)] = null);

(statearr_24671_24714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (3))){
var inst_24648 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24650__$1,inst_24648);
} else {
if((state_val_24651 === (12))){
var inst_24625 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24672_24715 = state_24650__$1;
(statearr_24672_24715[(2)] = inst_24625);

(statearr_24672_24715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (2))){
var state_24650__$1 = state_24650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24650__$1,(4),ch);
} else {
if((state_val_24651 === (23))){
var state_24650__$1 = state_24650;
var statearr_24673_24716 = state_24650__$1;
(statearr_24673_24716[(2)] = null);

(statearr_24673_24716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (19))){
var inst_24581 = (state_24650[(8)]);
var inst_24631 = (state_24650[(11)]);
var inst_24633 = cljs.core.async.muxch_STAR_.call(null,inst_24631);
var state_24650__$1 = state_24650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24650__$1,(22),inst_24633,inst_24581);
} else {
if((state_val_24651 === (11))){
var inst_24591 = (state_24650[(12)]);
var inst_24605 = (state_24650[(10)]);
var inst_24605__$1 = cljs.core.seq.call(null,inst_24591);
var state_24650__$1 = (function (){var statearr_24674 = state_24650;
(statearr_24674[(10)] = inst_24605__$1);

return statearr_24674;
})();
if(inst_24605__$1){
var statearr_24675_24717 = state_24650__$1;
(statearr_24675_24717[(1)] = (13));

} else {
var statearr_24676_24718 = state_24650__$1;
(statearr_24676_24718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (9))){
var inst_24627 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24677_24719 = state_24650__$1;
(statearr_24677_24719[(2)] = inst_24627);

(statearr_24677_24719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (5))){
var inst_24588 = cljs.core.deref.call(null,mults);
var inst_24589 = cljs.core.vals.call(null,inst_24588);
var inst_24590 = cljs.core.seq.call(null,inst_24589);
var inst_24591 = inst_24590;
var inst_24592 = null;
var inst_24593 = (0);
var inst_24594 = (0);
var state_24650__$1 = (function (){var statearr_24678 = state_24650;
(statearr_24678[(12)] = inst_24591);

(statearr_24678[(13)] = inst_24592);

(statearr_24678[(14)] = inst_24594);

(statearr_24678[(15)] = inst_24593);

return statearr_24678;
})();
var statearr_24679_24720 = state_24650__$1;
(statearr_24679_24720[(2)] = null);

(statearr_24679_24720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (14))){
var state_24650__$1 = state_24650;
var statearr_24683_24721 = state_24650__$1;
(statearr_24683_24721[(2)] = null);

(statearr_24683_24721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (16))){
var inst_24605 = (state_24650[(10)]);
var inst_24609 = cljs.core.chunk_first.call(null,inst_24605);
var inst_24610 = cljs.core.chunk_rest.call(null,inst_24605);
var inst_24611 = cljs.core.count.call(null,inst_24609);
var inst_24591 = inst_24610;
var inst_24592 = inst_24609;
var inst_24593 = inst_24611;
var inst_24594 = (0);
var state_24650__$1 = (function (){var statearr_24684 = state_24650;
(statearr_24684[(12)] = inst_24591);

(statearr_24684[(13)] = inst_24592);

(statearr_24684[(14)] = inst_24594);

(statearr_24684[(15)] = inst_24593);

return statearr_24684;
})();
var statearr_24685_24722 = state_24650__$1;
(statearr_24685_24722[(2)] = null);

(statearr_24685_24722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (10))){
var inst_24591 = (state_24650[(12)]);
var inst_24592 = (state_24650[(13)]);
var inst_24594 = (state_24650[(14)]);
var inst_24593 = (state_24650[(15)]);
var inst_24599 = cljs.core._nth.call(null,inst_24592,inst_24594);
var inst_24600 = cljs.core.async.muxch_STAR_.call(null,inst_24599);
var inst_24601 = cljs.core.async.close_BANG_.call(null,inst_24600);
var inst_24602 = (inst_24594 + (1));
var tmp24680 = inst_24591;
var tmp24681 = inst_24592;
var tmp24682 = inst_24593;
var inst_24591__$1 = tmp24680;
var inst_24592__$1 = tmp24681;
var inst_24593__$1 = tmp24682;
var inst_24594__$1 = inst_24602;
var state_24650__$1 = (function (){var statearr_24686 = state_24650;
(statearr_24686[(12)] = inst_24591__$1);

(statearr_24686[(17)] = inst_24601);

(statearr_24686[(13)] = inst_24592__$1);

(statearr_24686[(14)] = inst_24594__$1);

(statearr_24686[(15)] = inst_24593__$1);

return statearr_24686;
})();
var statearr_24687_24723 = state_24650__$1;
(statearr_24687_24723[(2)] = null);

(statearr_24687_24723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (18))){
var inst_24620 = (state_24650[(2)]);
var state_24650__$1 = state_24650;
var statearr_24688_24724 = state_24650__$1;
(statearr_24688_24724[(2)] = inst_24620);

(statearr_24688_24724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24651 === (8))){
var inst_24594 = (state_24650[(14)]);
var inst_24593 = (state_24650[(15)]);
var inst_24596 = (inst_24594 < inst_24593);
var inst_24597 = inst_24596;
var state_24650__$1 = state_24650;
if(cljs.core.truth_(inst_24597)){
var statearr_24689_24725 = state_24650__$1;
(statearr_24689_24725[(1)] = (10));

} else {
var statearr_24690_24726 = state_24650__$1;
(statearr_24690_24726[(1)] = (11));

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
});})(c__16852__auto___24698,mults,ensure_mult,p))
;
return ((function (switch__16796__auto__,c__16852__auto___24698,mults,ensure_mult,p){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_24694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24694[(0)] = state_machine__16797__auto__);

(statearr_24694[(1)] = (1));

return statearr_24694;
});
var state_machine__16797__auto____1 = (function (state_24650){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_24650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e24695){if((e24695 instanceof Object)){
var ex__16800__auto__ = e24695;
var statearr_24696_24727 = state_24650;
(statearr_24696_24727[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24728 = state_24650;
state_24650 = G__24728;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_24650){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_24650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___24698,mults,ensure_mult,p))
})();
var state__16854__auto__ = (function (){var statearr_24697 = f__16853__auto__.call(null);
(statearr_24697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___24698);

return statearr_24697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___24698,mults,ensure_mult,p))
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
var c__16852__auto___24865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24835){
var state_val_24836 = (state_24835[(1)]);
if((state_val_24836 === (7))){
var state_24835__$1 = state_24835;
var statearr_24837_24866 = state_24835__$1;
(statearr_24837_24866[(2)] = null);

(statearr_24837_24866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (1))){
var state_24835__$1 = state_24835;
var statearr_24838_24867 = state_24835__$1;
(statearr_24838_24867[(2)] = null);

(statearr_24838_24867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (4))){
var inst_24799 = (state_24835[(7)]);
var inst_24801 = (inst_24799 < cnt);
var state_24835__$1 = state_24835;
if(cljs.core.truth_(inst_24801)){
var statearr_24839_24868 = state_24835__$1;
(statearr_24839_24868[(1)] = (6));

} else {
var statearr_24840_24869 = state_24835__$1;
(statearr_24840_24869[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (15))){
var inst_24831 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
var statearr_24841_24870 = state_24835__$1;
(statearr_24841_24870[(2)] = inst_24831);

(statearr_24841_24870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (13))){
var inst_24824 = cljs.core.async.close_BANG_.call(null,out);
var state_24835__$1 = state_24835;
var statearr_24842_24871 = state_24835__$1;
(statearr_24842_24871[(2)] = inst_24824);

(statearr_24842_24871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (6))){
var state_24835__$1 = state_24835;
var statearr_24843_24872 = state_24835__$1;
(statearr_24843_24872[(2)] = null);

(statearr_24843_24872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (3))){
var inst_24833 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24835__$1,inst_24833);
} else {
if((state_val_24836 === (12))){
var inst_24821 = (state_24835[(8)]);
var inst_24821__$1 = (state_24835[(2)]);
var inst_24822 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24821__$1);
var state_24835__$1 = (function (){var statearr_24844 = state_24835;
(statearr_24844[(8)] = inst_24821__$1);

return statearr_24844;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24845_24873 = state_24835__$1;
(statearr_24845_24873[(1)] = (13));

} else {
var statearr_24846_24874 = state_24835__$1;
(statearr_24846_24874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (2))){
var inst_24798 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24799 = (0);
var state_24835__$1 = (function (){var statearr_24847 = state_24835;
(statearr_24847[(7)] = inst_24799);

(statearr_24847[(9)] = inst_24798);

return statearr_24847;
})();
var statearr_24848_24875 = state_24835__$1;
(statearr_24848_24875[(2)] = null);

(statearr_24848_24875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (11))){
var inst_24799 = (state_24835[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24835,(10),Object,null,(9));
var inst_24808 = chs__$1.call(null,inst_24799);
var inst_24809 = done.call(null,inst_24799);
var inst_24810 = cljs.core.async.take_BANG_.call(null,inst_24808,inst_24809);
var state_24835__$1 = state_24835;
var statearr_24849_24876 = state_24835__$1;
(statearr_24849_24876[(2)] = inst_24810);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (9))){
var inst_24799 = (state_24835[(7)]);
var inst_24812 = (state_24835[(2)]);
var inst_24813 = (inst_24799 + (1));
var inst_24799__$1 = inst_24813;
var state_24835__$1 = (function (){var statearr_24850 = state_24835;
(statearr_24850[(10)] = inst_24812);

(statearr_24850[(7)] = inst_24799__$1);

return statearr_24850;
})();
var statearr_24851_24877 = state_24835__$1;
(statearr_24851_24877[(2)] = null);

(statearr_24851_24877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (5))){
var inst_24819 = (state_24835[(2)]);
var state_24835__$1 = (function (){var statearr_24852 = state_24835;
(statearr_24852[(11)] = inst_24819);

return statearr_24852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24835__$1,(12),dchan);
} else {
if((state_val_24836 === (14))){
var inst_24821 = (state_24835[(8)]);
var inst_24826 = cljs.core.apply.call(null,f,inst_24821);
var state_24835__$1 = state_24835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24835__$1,(16),out,inst_24826);
} else {
if((state_val_24836 === (16))){
var inst_24828 = (state_24835[(2)]);
var state_24835__$1 = (function (){var statearr_24853 = state_24835;
(statearr_24853[(12)] = inst_24828);

return statearr_24853;
})();
var statearr_24854_24878 = state_24835__$1;
(statearr_24854_24878[(2)] = null);

(statearr_24854_24878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (10))){
var inst_24803 = (state_24835[(2)]);
var inst_24804 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24835__$1 = (function (){var statearr_24855 = state_24835;
(statearr_24855[(13)] = inst_24803);

return statearr_24855;
})();
var statearr_24856_24879 = state_24835__$1;
(statearr_24856_24879[(2)] = inst_24804);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (8))){
var inst_24817 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
var statearr_24857_24880 = state_24835__$1;
(statearr_24857_24880[(2)] = inst_24817);

(statearr_24857_24880[(1)] = (5));


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
});})(c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16796__auto__,c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_24861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24861[(0)] = state_machine__16797__auto__);

(statearr_24861[(1)] = (1));

return statearr_24861;
});
var state_machine__16797__auto____1 = (function (state_24835){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_24835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e24862){if((e24862 instanceof Object)){
var ex__16800__auto__ = e24862;
var statearr_24863_24881 = state_24835;
(statearr_24863_24881[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24882 = state_24835;
state_24835 = G__24882;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_24835){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_24835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16854__auto__ = (function (){var statearr_24864 = f__16853__auto__.call(null);
(statearr_24864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___24865);

return statearr_24864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___24865,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16852__auto___24990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___24990,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___24990,out){
return (function (state_24966){
var state_val_24967 = (state_24966[(1)]);
if((state_val_24967 === (7))){
var inst_24946 = (state_24966[(7)]);
var inst_24945 = (state_24966[(8)]);
var inst_24945__$1 = (state_24966[(2)]);
var inst_24946__$1 = cljs.core.nth.call(null,inst_24945__$1,(0),null);
var inst_24947 = cljs.core.nth.call(null,inst_24945__$1,(1),null);
var inst_24948 = (inst_24946__$1 == null);
var state_24966__$1 = (function (){var statearr_24968 = state_24966;
(statearr_24968[(7)] = inst_24946__$1);

(statearr_24968[(9)] = inst_24947);

(statearr_24968[(8)] = inst_24945__$1);

return statearr_24968;
})();
if(cljs.core.truth_(inst_24948)){
var statearr_24969_24991 = state_24966__$1;
(statearr_24969_24991[(1)] = (8));

} else {
var statearr_24970_24992 = state_24966__$1;
(statearr_24970_24992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (1))){
var inst_24937 = cljs.core.vec.call(null,chs);
var inst_24938 = inst_24937;
var state_24966__$1 = (function (){var statearr_24971 = state_24966;
(statearr_24971[(10)] = inst_24938);

return statearr_24971;
})();
var statearr_24972_24993 = state_24966__$1;
(statearr_24972_24993[(2)] = null);

(statearr_24972_24993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (4))){
var inst_24938 = (state_24966[(10)]);
var state_24966__$1 = state_24966;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24966__$1,(7),inst_24938);
} else {
if((state_val_24967 === (6))){
var inst_24962 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24973_24994 = state_24966__$1;
(statearr_24973_24994[(2)] = inst_24962);

(statearr_24973_24994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (3))){
var inst_24964 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24966__$1,inst_24964);
} else {
if((state_val_24967 === (2))){
var inst_24938 = (state_24966[(10)]);
var inst_24940 = cljs.core.count.call(null,inst_24938);
var inst_24941 = (inst_24940 > (0));
var state_24966__$1 = state_24966;
if(cljs.core.truth_(inst_24941)){
var statearr_24975_24995 = state_24966__$1;
(statearr_24975_24995[(1)] = (4));

} else {
var statearr_24976_24996 = state_24966__$1;
(statearr_24976_24996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (11))){
var inst_24938 = (state_24966[(10)]);
var inst_24955 = (state_24966[(2)]);
var tmp24974 = inst_24938;
var inst_24938__$1 = tmp24974;
var state_24966__$1 = (function (){var statearr_24977 = state_24966;
(statearr_24977[(11)] = inst_24955);

(statearr_24977[(10)] = inst_24938__$1);

return statearr_24977;
})();
var statearr_24978_24997 = state_24966__$1;
(statearr_24978_24997[(2)] = null);

(statearr_24978_24997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (9))){
var inst_24946 = (state_24966[(7)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24966__$1,(11),out,inst_24946);
} else {
if((state_val_24967 === (5))){
var inst_24960 = cljs.core.async.close_BANG_.call(null,out);
var state_24966__$1 = state_24966;
var statearr_24979_24998 = state_24966__$1;
(statearr_24979_24998[(2)] = inst_24960);

(statearr_24979_24998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (10))){
var inst_24958 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24980_24999 = state_24966__$1;
(statearr_24980_24999[(2)] = inst_24958);

(statearr_24980_24999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (8))){
var inst_24946 = (state_24966[(7)]);
var inst_24947 = (state_24966[(9)]);
var inst_24938 = (state_24966[(10)]);
var inst_24945 = (state_24966[(8)]);
var inst_24950 = (function (){var c = inst_24947;
var v = inst_24946;
var vec__24943 = inst_24945;
var cs = inst_24938;
return ((function (c,v,vec__24943,cs,inst_24946,inst_24947,inst_24938,inst_24945,state_val_24967,c__16852__auto___24990,out){
return (function (p1__24883_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24883_SHARP_);
});
;})(c,v,vec__24943,cs,inst_24946,inst_24947,inst_24938,inst_24945,state_val_24967,c__16852__auto___24990,out))
})();
var inst_24951 = cljs.core.filterv.call(null,inst_24950,inst_24938);
var inst_24938__$1 = inst_24951;
var state_24966__$1 = (function (){var statearr_24981 = state_24966;
(statearr_24981[(10)] = inst_24938__$1);

return statearr_24981;
})();
var statearr_24982_25000 = state_24966__$1;
(statearr_24982_25000[(2)] = null);

(statearr_24982_25000[(1)] = (2));


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
});})(c__16852__auto___24990,out))
;
return ((function (switch__16796__auto__,c__16852__auto___24990,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_24986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24986[(0)] = state_machine__16797__auto__);

(statearr_24986[(1)] = (1));

return statearr_24986;
});
var state_machine__16797__auto____1 = (function (state_24966){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_24966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e24987){if((e24987 instanceof Object)){
var ex__16800__auto__ = e24987;
var statearr_24988_25001 = state_24966;
(statearr_24988_25001[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25002 = state_24966;
state_24966 = G__25002;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_24966){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_24966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___24990,out))
})();
var state__16854__auto__ = (function (){var statearr_24989 = f__16853__auto__.call(null);
(statearr_24989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___24990);

return statearr_24989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___24990,out))
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
var c__16852__auto___25095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___25095,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___25095,out){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (7))){
var inst_25054 = (state_25072[(7)]);
var inst_25054__$1 = (state_25072[(2)]);
var inst_25055 = (inst_25054__$1 == null);
var inst_25056 = cljs.core.not.call(null,inst_25055);
var state_25072__$1 = (function (){var statearr_25074 = state_25072;
(statearr_25074[(7)] = inst_25054__$1);

return statearr_25074;
})();
if(inst_25056){
var statearr_25075_25096 = state_25072__$1;
(statearr_25075_25096[(1)] = (8));

} else {
var statearr_25076_25097 = state_25072__$1;
(statearr_25076_25097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (1))){
var inst_25049 = (0);
var state_25072__$1 = (function (){var statearr_25077 = state_25072;
(statearr_25077[(8)] = inst_25049);

return statearr_25077;
})();
var statearr_25078_25098 = state_25072__$1;
(statearr_25078_25098[(2)] = null);

(statearr_25078_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (4))){
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(7),ch);
} else {
if((state_val_25073 === (6))){
var inst_25067 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25079_25099 = state_25072__$1;
(statearr_25079_25099[(2)] = inst_25067);

(statearr_25079_25099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (3))){
var inst_25069 = (state_25072[(2)]);
var inst_25070 = cljs.core.async.close_BANG_.call(null,out);
var state_25072__$1 = (function (){var statearr_25080 = state_25072;
(statearr_25080[(9)] = inst_25069);

return statearr_25080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
if((state_val_25073 === (2))){
var inst_25049 = (state_25072[(8)]);
var inst_25051 = (inst_25049 < n);
var state_25072__$1 = state_25072;
if(cljs.core.truth_(inst_25051)){
var statearr_25081_25100 = state_25072__$1;
(statearr_25081_25100[(1)] = (4));

} else {
var statearr_25082_25101 = state_25072__$1;
(statearr_25082_25101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (11))){
var inst_25049 = (state_25072[(8)]);
var inst_25059 = (state_25072[(2)]);
var inst_25060 = (inst_25049 + (1));
var inst_25049__$1 = inst_25060;
var state_25072__$1 = (function (){var statearr_25083 = state_25072;
(statearr_25083[(10)] = inst_25059);

(statearr_25083[(8)] = inst_25049__$1);

return statearr_25083;
})();
var statearr_25084_25102 = state_25072__$1;
(statearr_25084_25102[(2)] = null);

(statearr_25084_25102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (9))){
var state_25072__$1 = state_25072;
var statearr_25085_25103 = state_25072__$1;
(statearr_25085_25103[(2)] = null);

(statearr_25085_25103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (5))){
var state_25072__$1 = state_25072;
var statearr_25086_25104 = state_25072__$1;
(statearr_25086_25104[(2)] = null);

(statearr_25086_25104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (10))){
var inst_25064 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25087_25105 = state_25072__$1;
(statearr_25087_25105[(2)] = inst_25064);

(statearr_25087_25105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (8))){
var inst_25054 = (state_25072[(7)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25072__$1,(11),out,inst_25054);
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
});})(c__16852__auto___25095,out))
;
return ((function (switch__16796__auto__,c__16852__auto___25095,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25091[(0)] = state_machine__16797__auto__);

(statearr_25091[(1)] = (1));

return statearr_25091;
});
var state_machine__16797__auto____1 = (function (state_25072){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25092){if((e25092 instanceof Object)){
var ex__16800__auto__ = e25092;
var statearr_25093_25106 = state_25072;
(statearr_25093_25106[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25107 = state_25072;
state_25072 = G__25107;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___25095,out))
})();
var state__16854__auto__ = (function (){var statearr_25094 = f__16853__auto__.call(null);
(statearr_25094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___25095);

return statearr_25094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___25095,out))
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
if(typeof cljs.core.async.t25115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25115 = (function (ch,f,map_LT_,meta25116){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25116 = meta25116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25118 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25118 = (function (fn1,_,meta25116,map_LT_,f,ch,meta25119){
this.fn1 = fn1;
this._ = _;
this.meta25116 = meta25116;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25119 = meta25119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25108_SHARP_){
return f1.call(null,(((p1__25108_SHARP_ == null))?null:self__.f.call(null,p1__25108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25120){
var self__ = this;
var _25120__$1 = this;
return self__.meta25119;
});})(___$1))
;

cljs.core.async.t25118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25120,meta25119__$1){
var self__ = this;
var _25120__$1 = this;
return (new cljs.core.async.t25118(self__.fn1,self__._,self__.meta25116,self__.map_LT_,self__.f,self__.ch,meta25119__$1));
});})(___$1))
;

cljs.core.async.t25118.cljs$lang$type = true;

cljs.core.async.t25118.cljs$lang$ctorStr = "cljs.core.async/t25118";

cljs.core.async.t25118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t25118");
});})(___$1))
;

cljs.core.async.__GT_t25118 = ((function (___$1){
return (function __GT_t25118(fn1__$1,___$2,meta25116__$1,map_LT___$1,f__$1,ch__$1,meta25119){
return (new cljs.core.async.t25118(fn1__$1,___$2,meta25116__$1,map_LT___$1,f__$1,ch__$1,meta25119));
});})(___$1))
;

}

return (new cljs.core.async.t25118(fn1,___$1,self__.meta25116,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12533__auto__ = ret;
if(cljs.core.truth_(and__12533__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12533__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25117){
var self__ = this;
var _25117__$1 = this;
return self__.meta25116;
});

cljs.core.async.t25115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25117,meta25116__$1){
var self__ = this;
var _25117__$1 = this;
return (new cljs.core.async.t25115(self__.ch,self__.f,self__.map_LT_,meta25116__$1));
});

cljs.core.async.t25115.cljs$lang$type = true;

cljs.core.async.t25115.cljs$lang$ctorStr = "cljs.core.async/t25115";

cljs.core.async.t25115.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t25115");
});

cljs.core.async.__GT_t25115 = (function __GT_t25115(ch__$1,f__$1,map_LT___$1,meta25116){
return (new cljs.core.async.t25115(ch__$1,f__$1,map_LT___$1,meta25116));
});

}

return (new cljs.core.async.t25115(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25124 = (function (ch,f,map_GT_,meta25125){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25125 = meta25125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25126){
var self__ = this;
var _25126__$1 = this;
return self__.meta25125;
});

cljs.core.async.t25124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25126,meta25125__$1){
var self__ = this;
var _25126__$1 = this;
return (new cljs.core.async.t25124(self__.ch,self__.f,self__.map_GT_,meta25125__$1));
});

cljs.core.async.t25124.cljs$lang$type = true;

cljs.core.async.t25124.cljs$lang$ctorStr = "cljs.core.async/t25124";

cljs.core.async.t25124.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t25124");
});

cljs.core.async.__GT_t25124 = (function __GT_t25124(ch__$1,f__$1,map_GT___$1,meta25125){
return (new cljs.core.async.t25124(ch__$1,f__$1,map_GT___$1,meta25125));
});

}

return (new cljs.core.async.t25124(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25130 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25130 = (function (ch,p,filter_GT_,meta25131){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25131 = meta25131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25132){
var self__ = this;
var _25132__$1 = this;
return self__.meta25131;
});

cljs.core.async.t25130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25132,meta25131__$1){
var self__ = this;
var _25132__$1 = this;
return (new cljs.core.async.t25130(self__.ch,self__.p,self__.filter_GT_,meta25131__$1));
});

cljs.core.async.t25130.cljs$lang$type = true;

cljs.core.async.t25130.cljs$lang$ctorStr = "cljs.core.async/t25130";

cljs.core.async.t25130.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t25130");
});

cljs.core.async.__GT_t25130 = (function __GT_t25130(ch__$1,p__$1,filter_GT___$1,meta25131){
return (new cljs.core.async.t25130(ch__$1,p__$1,filter_GT___$1,meta25131));
});

}

return (new cljs.core.async.t25130(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16852__auto___25215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___25215,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___25215,out){
return (function (state_25194){
var state_val_25195 = (state_25194[(1)]);
if((state_val_25195 === (7))){
var inst_25190 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25196_25216 = state_25194__$1;
(statearr_25196_25216[(2)] = inst_25190);

(statearr_25196_25216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (1))){
var state_25194__$1 = state_25194;
var statearr_25197_25217 = state_25194__$1;
(statearr_25197_25217[(2)] = null);

(statearr_25197_25217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (4))){
var inst_25176 = (state_25194[(7)]);
var inst_25176__$1 = (state_25194[(2)]);
var inst_25177 = (inst_25176__$1 == null);
var state_25194__$1 = (function (){var statearr_25198 = state_25194;
(statearr_25198[(7)] = inst_25176__$1);

return statearr_25198;
})();
if(cljs.core.truth_(inst_25177)){
var statearr_25199_25218 = state_25194__$1;
(statearr_25199_25218[(1)] = (5));

} else {
var statearr_25200_25219 = state_25194__$1;
(statearr_25200_25219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (6))){
var inst_25176 = (state_25194[(7)]);
var inst_25181 = p.call(null,inst_25176);
var state_25194__$1 = state_25194;
if(cljs.core.truth_(inst_25181)){
var statearr_25201_25220 = state_25194__$1;
(statearr_25201_25220[(1)] = (8));

} else {
var statearr_25202_25221 = state_25194__$1;
(statearr_25202_25221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (3))){
var inst_25192 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25194__$1,inst_25192);
} else {
if((state_val_25195 === (2))){
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25194__$1,(4),ch);
} else {
if((state_val_25195 === (11))){
var inst_25184 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25203_25222 = state_25194__$1;
(statearr_25203_25222[(2)] = inst_25184);

(statearr_25203_25222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (9))){
var state_25194__$1 = state_25194;
var statearr_25204_25223 = state_25194__$1;
(statearr_25204_25223[(2)] = null);

(statearr_25204_25223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (5))){
var inst_25179 = cljs.core.async.close_BANG_.call(null,out);
var state_25194__$1 = state_25194;
var statearr_25205_25224 = state_25194__$1;
(statearr_25205_25224[(2)] = inst_25179);

(statearr_25205_25224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (10))){
var inst_25187 = (state_25194[(2)]);
var state_25194__$1 = (function (){var statearr_25206 = state_25194;
(statearr_25206[(8)] = inst_25187);

return statearr_25206;
})();
var statearr_25207_25225 = state_25194__$1;
(statearr_25207_25225[(2)] = null);

(statearr_25207_25225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (8))){
var inst_25176 = (state_25194[(7)]);
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25194__$1,(11),out,inst_25176);
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
});})(c__16852__auto___25215,out))
;
return ((function (switch__16796__auto__,c__16852__auto___25215,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25211 = [null,null,null,null,null,null,null,null,null];
(statearr_25211[(0)] = state_machine__16797__auto__);

(statearr_25211[(1)] = (1));

return statearr_25211;
});
var state_machine__16797__auto____1 = (function (state_25194){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25212){if((e25212 instanceof Object)){
var ex__16800__auto__ = e25212;
var statearr_25213_25226 = state_25194;
(statearr_25213_25226[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25227 = state_25194;
state_25194 = G__25227;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25194){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___25215,out))
})();
var state__16854__auto__ = (function (){var statearr_25214 = f__16853__auto__.call(null);
(statearr_25214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___25215);

return statearr_25214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___25215,out))
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
var c__16852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto__){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto__){
return (function (state_25393){
var state_val_25394 = (state_25393[(1)]);
if((state_val_25394 === (7))){
var inst_25389 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25395_25436 = state_25393__$1;
(statearr_25395_25436[(2)] = inst_25389);

(statearr_25395_25436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (20))){
var inst_25359 = (state_25393[(7)]);
var inst_25370 = (state_25393[(2)]);
var inst_25371 = cljs.core.next.call(null,inst_25359);
var inst_25345 = inst_25371;
var inst_25346 = null;
var inst_25347 = (0);
var inst_25348 = (0);
var state_25393__$1 = (function (){var statearr_25396 = state_25393;
(statearr_25396[(8)] = inst_25370);

(statearr_25396[(9)] = inst_25345);

(statearr_25396[(10)] = inst_25348);

(statearr_25396[(11)] = inst_25347);

(statearr_25396[(12)] = inst_25346);

return statearr_25396;
})();
var statearr_25397_25437 = state_25393__$1;
(statearr_25397_25437[(2)] = null);

(statearr_25397_25437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (1))){
var state_25393__$1 = state_25393;
var statearr_25398_25438 = state_25393__$1;
(statearr_25398_25438[(2)] = null);

(statearr_25398_25438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (4))){
var inst_25334 = (state_25393[(13)]);
var inst_25334__$1 = (state_25393[(2)]);
var inst_25335 = (inst_25334__$1 == null);
var state_25393__$1 = (function (){var statearr_25399 = state_25393;
(statearr_25399[(13)] = inst_25334__$1);

return statearr_25399;
})();
if(cljs.core.truth_(inst_25335)){
var statearr_25400_25439 = state_25393__$1;
(statearr_25400_25439[(1)] = (5));

} else {
var statearr_25401_25440 = state_25393__$1;
(statearr_25401_25440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (15))){
var state_25393__$1 = state_25393;
var statearr_25405_25441 = state_25393__$1;
(statearr_25405_25441[(2)] = null);

(statearr_25405_25441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (21))){
var state_25393__$1 = state_25393;
var statearr_25406_25442 = state_25393__$1;
(statearr_25406_25442[(2)] = null);

(statearr_25406_25442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (13))){
var inst_25345 = (state_25393[(9)]);
var inst_25348 = (state_25393[(10)]);
var inst_25347 = (state_25393[(11)]);
var inst_25346 = (state_25393[(12)]);
var inst_25355 = (state_25393[(2)]);
var inst_25356 = (inst_25348 + (1));
var tmp25402 = inst_25345;
var tmp25403 = inst_25347;
var tmp25404 = inst_25346;
var inst_25345__$1 = tmp25402;
var inst_25346__$1 = tmp25404;
var inst_25347__$1 = tmp25403;
var inst_25348__$1 = inst_25356;
var state_25393__$1 = (function (){var statearr_25407 = state_25393;
(statearr_25407[(9)] = inst_25345__$1);

(statearr_25407[(10)] = inst_25348__$1);

(statearr_25407[(11)] = inst_25347__$1);

(statearr_25407[(14)] = inst_25355);

(statearr_25407[(12)] = inst_25346__$1);

return statearr_25407;
})();
var statearr_25408_25443 = state_25393__$1;
(statearr_25408_25443[(2)] = null);

(statearr_25408_25443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (22))){
var state_25393__$1 = state_25393;
var statearr_25409_25444 = state_25393__$1;
(statearr_25409_25444[(2)] = null);

(statearr_25409_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (6))){
var inst_25334 = (state_25393[(13)]);
var inst_25343 = f.call(null,inst_25334);
var inst_25344 = cljs.core.seq.call(null,inst_25343);
var inst_25345 = inst_25344;
var inst_25346 = null;
var inst_25347 = (0);
var inst_25348 = (0);
var state_25393__$1 = (function (){var statearr_25410 = state_25393;
(statearr_25410[(9)] = inst_25345);

(statearr_25410[(10)] = inst_25348);

(statearr_25410[(11)] = inst_25347);

(statearr_25410[(12)] = inst_25346);

return statearr_25410;
})();
var statearr_25411_25445 = state_25393__$1;
(statearr_25411_25445[(2)] = null);

(statearr_25411_25445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (17))){
var inst_25359 = (state_25393[(7)]);
var inst_25363 = cljs.core.chunk_first.call(null,inst_25359);
var inst_25364 = cljs.core.chunk_rest.call(null,inst_25359);
var inst_25365 = cljs.core.count.call(null,inst_25363);
var inst_25345 = inst_25364;
var inst_25346 = inst_25363;
var inst_25347 = inst_25365;
var inst_25348 = (0);
var state_25393__$1 = (function (){var statearr_25412 = state_25393;
(statearr_25412[(9)] = inst_25345);

(statearr_25412[(10)] = inst_25348);

(statearr_25412[(11)] = inst_25347);

(statearr_25412[(12)] = inst_25346);

return statearr_25412;
})();
var statearr_25413_25446 = state_25393__$1;
(statearr_25413_25446[(2)] = null);

(statearr_25413_25446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (3))){
var inst_25391 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25393__$1,inst_25391);
} else {
if((state_val_25394 === (12))){
var inst_25379 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25414_25447 = state_25393__$1;
(statearr_25414_25447[(2)] = inst_25379);

(statearr_25414_25447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (2))){
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(4),in$);
} else {
if((state_val_25394 === (23))){
var inst_25387 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25415_25448 = state_25393__$1;
(statearr_25415_25448[(2)] = inst_25387);

(statearr_25415_25448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (19))){
var inst_25374 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25416_25449 = state_25393__$1;
(statearr_25416_25449[(2)] = inst_25374);

(statearr_25416_25449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (11))){
var inst_25345 = (state_25393[(9)]);
var inst_25359 = (state_25393[(7)]);
var inst_25359__$1 = cljs.core.seq.call(null,inst_25345);
var state_25393__$1 = (function (){var statearr_25417 = state_25393;
(statearr_25417[(7)] = inst_25359__$1);

return statearr_25417;
})();
if(inst_25359__$1){
var statearr_25418_25450 = state_25393__$1;
(statearr_25418_25450[(1)] = (14));

} else {
var statearr_25419_25451 = state_25393__$1;
(statearr_25419_25451[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (9))){
var inst_25381 = (state_25393[(2)]);
var inst_25382 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25393__$1 = (function (){var statearr_25420 = state_25393;
(statearr_25420[(15)] = inst_25381);

return statearr_25420;
})();
if(cljs.core.truth_(inst_25382)){
var statearr_25421_25452 = state_25393__$1;
(statearr_25421_25452[(1)] = (21));

} else {
var statearr_25422_25453 = state_25393__$1;
(statearr_25422_25453[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (5))){
var inst_25337 = cljs.core.async.close_BANG_.call(null,out);
var state_25393__$1 = state_25393;
var statearr_25423_25454 = state_25393__$1;
(statearr_25423_25454[(2)] = inst_25337);

(statearr_25423_25454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (14))){
var inst_25359 = (state_25393[(7)]);
var inst_25361 = cljs.core.chunked_seq_QMARK_.call(null,inst_25359);
var state_25393__$1 = state_25393;
if(inst_25361){
var statearr_25424_25455 = state_25393__$1;
(statearr_25424_25455[(1)] = (17));

} else {
var statearr_25425_25456 = state_25393__$1;
(statearr_25425_25456[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (16))){
var inst_25377 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25426_25457 = state_25393__$1;
(statearr_25426_25457[(2)] = inst_25377);

(statearr_25426_25457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (10))){
var inst_25348 = (state_25393[(10)]);
var inst_25346 = (state_25393[(12)]);
var inst_25353 = cljs.core._nth.call(null,inst_25346,inst_25348);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25393__$1,(13),out,inst_25353);
} else {
if((state_val_25394 === (18))){
var inst_25359 = (state_25393[(7)]);
var inst_25368 = cljs.core.first.call(null,inst_25359);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25393__$1,(20),out,inst_25368);
} else {
if((state_val_25394 === (8))){
var inst_25348 = (state_25393[(10)]);
var inst_25347 = (state_25393[(11)]);
var inst_25350 = (inst_25348 < inst_25347);
var inst_25351 = inst_25350;
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25351)){
var statearr_25427_25458 = state_25393__$1;
(statearr_25427_25458[(1)] = (10));

} else {
var statearr_25428_25459 = state_25393__$1;
(statearr_25428_25459[(1)] = (11));

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
});})(c__16852__auto__))
;
return ((function (switch__16796__auto__,c__16852__auto__){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = state_machine__16797__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var state_machine__16797__auto____1 = (function (state_25393){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__16800__auto__ = e25433;
var statearr_25434_25460 = state_25393;
(statearr_25434_25460[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25461 = state_25393;
state_25393 = G__25461;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto__))
})();
var state__16854__auto__ = (function (){var statearr_25435 = f__16853__auto__.call(null);
(statearr_25435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto__);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto__))
);

return c__16852__auto__;
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
var c__16852__auto___25558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___25558,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___25558,out){
return (function (state_25533){
var state_val_25534 = (state_25533[(1)]);
if((state_val_25534 === (7))){
var inst_25528 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25535_25559 = state_25533__$1;
(statearr_25535_25559[(2)] = inst_25528);

(statearr_25535_25559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (1))){
var inst_25510 = null;
var state_25533__$1 = (function (){var statearr_25536 = state_25533;
(statearr_25536[(7)] = inst_25510);

return statearr_25536;
})();
var statearr_25537_25560 = state_25533__$1;
(statearr_25537_25560[(2)] = null);

(statearr_25537_25560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (4))){
var inst_25513 = (state_25533[(8)]);
var inst_25513__$1 = (state_25533[(2)]);
var inst_25514 = (inst_25513__$1 == null);
var inst_25515 = cljs.core.not.call(null,inst_25514);
var state_25533__$1 = (function (){var statearr_25538 = state_25533;
(statearr_25538[(8)] = inst_25513__$1);

return statearr_25538;
})();
if(inst_25515){
var statearr_25539_25561 = state_25533__$1;
(statearr_25539_25561[(1)] = (5));

} else {
var statearr_25540_25562 = state_25533__$1;
(statearr_25540_25562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (6))){
var state_25533__$1 = state_25533;
var statearr_25541_25563 = state_25533__$1;
(statearr_25541_25563[(2)] = null);

(statearr_25541_25563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (3))){
var inst_25530 = (state_25533[(2)]);
var inst_25531 = cljs.core.async.close_BANG_.call(null,out);
var state_25533__$1 = (function (){var statearr_25542 = state_25533;
(statearr_25542[(9)] = inst_25530);

return statearr_25542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25533__$1,inst_25531);
} else {
if((state_val_25534 === (2))){
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25533__$1,(4),ch);
} else {
if((state_val_25534 === (11))){
var inst_25513 = (state_25533[(8)]);
var inst_25522 = (state_25533[(2)]);
var inst_25510 = inst_25513;
var state_25533__$1 = (function (){var statearr_25543 = state_25533;
(statearr_25543[(7)] = inst_25510);

(statearr_25543[(10)] = inst_25522);

return statearr_25543;
})();
var statearr_25544_25564 = state_25533__$1;
(statearr_25544_25564[(2)] = null);

(statearr_25544_25564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (9))){
var inst_25513 = (state_25533[(8)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25533__$1,(11),out,inst_25513);
} else {
if((state_val_25534 === (5))){
var inst_25513 = (state_25533[(8)]);
var inst_25510 = (state_25533[(7)]);
var inst_25517 = cljs.core._EQ_.call(null,inst_25513,inst_25510);
var state_25533__$1 = state_25533;
if(inst_25517){
var statearr_25546_25565 = state_25533__$1;
(statearr_25546_25565[(1)] = (8));

} else {
var statearr_25547_25566 = state_25533__$1;
(statearr_25547_25566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (10))){
var inst_25525 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25548_25567 = state_25533__$1;
(statearr_25548_25567[(2)] = inst_25525);

(statearr_25548_25567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (8))){
var inst_25510 = (state_25533[(7)]);
var tmp25545 = inst_25510;
var inst_25510__$1 = tmp25545;
var state_25533__$1 = (function (){var statearr_25549 = state_25533;
(statearr_25549[(7)] = inst_25510__$1);

return statearr_25549;
})();
var statearr_25550_25568 = state_25533__$1;
(statearr_25550_25568[(2)] = null);

(statearr_25550_25568[(1)] = (2));


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
});})(c__16852__auto___25558,out))
;
return ((function (switch__16796__auto__,c__16852__auto___25558,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = state_machine__16797__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var state_machine__16797__auto____1 = (function (state_25533){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__16800__auto__ = e25555;
var statearr_25556_25569 = state_25533;
(statearr_25556_25569[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25570 = state_25533;
state_25533 = G__25570;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25533){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___25558,out))
})();
var state__16854__auto__ = (function (){var statearr_25557 = f__16853__auto__.call(null);
(statearr_25557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___25558);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___25558,out))
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
var c__16852__auto___25705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___25705,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___25705,out){
return (function (state_25675){
var state_val_25676 = (state_25675[(1)]);
if((state_val_25676 === (7))){
var inst_25671 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25677_25706 = state_25675__$1;
(statearr_25677_25706[(2)] = inst_25671);

(statearr_25677_25706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (1))){
var inst_25638 = (new Array(n));
var inst_25639 = inst_25638;
var inst_25640 = (0);
var state_25675__$1 = (function (){var statearr_25678 = state_25675;
(statearr_25678[(7)] = inst_25640);

(statearr_25678[(8)] = inst_25639);

return statearr_25678;
})();
var statearr_25679_25707 = state_25675__$1;
(statearr_25679_25707[(2)] = null);

(statearr_25679_25707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (4))){
var inst_25643 = (state_25675[(9)]);
var inst_25643__$1 = (state_25675[(2)]);
var inst_25644 = (inst_25643__$1 == null);
var inst_25645 = cljs.core.not.call(null,inst_25644);
var state_25675__$1 = (function (){var statearr_25680 = state_25675;
(statearr_25680[(9)] = inst_25643__$1);

return statearr_25680;
})();
if(inst_25645){
var statearr_25681_25708 = state_25675__$1;
(statearr_25681_25708[(1)] = (5));

} else {
var statearr_25682_25709 = state_25675__$1;
(statearr_25682_25709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (15))){
var inst_25665 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25683_25710 = state_25675__$1;
(statearr_25683_25710[(2)] = inst_25665);

(statearr_25683_25710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (13))){
var state_25675__$1 = state_25675;
var statearr_25684_25711 = state_25675__$1;
(statearr_25684_25711[(2)] = null);

(statearr_25684_25711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (6))){
var inst_25640 = (state_25675[(7)]);
var inst_25661 = (inst_25640 > (0));
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25661)){
var statearr_25685_25712 = state_25675__$1;
(statearr_25685_25712[(1)] = (12));

} else {
var statearr_25686_25713 = state_25675__$1;
(statearr_25686_25713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (3))){
var inst_25673 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25675__$1,inst_25673);
} else {
if((state_val_25676 === (12))){
var inst_25639 = (state_25675[(8)]);
var inst_25663 = cljs.core.vec.call(null,inst_25639);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25675__$1,(15),out,inst_25663);
} else {
if((state_val_25676 === (2))){
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25675__$1,(4),ch);
} else {
if((state_val_25676 === (11))){
var inst_25655 = (state_25675[(2)]);
var inst_25656 = (new Array(n));
var inst_25639 = inst_25656;
var inst_25640 = (0);
var state_25675__$1 = (function (){var statearr_25687 = state_25675;
(statearr_25687[(7)] = inst_25640);

(statearr_25687[(8)] = inst_25639);

(statearr_25687[(10)] = inst_25655);

return statearr_25687;
})();
var statearr_25688_25714 = state_25675__$1;
(statearr_25688_25714[(2)] = null);

(statearr_25688_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (9))){
var inst_25639 = (state_25675[(8)]);
var inst_25653 = cljs.core.vec.call(null,inst_25639);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25675__$1,(11),out,inst_25653);
} else {
if((state_val_25676 === (5))){
var inst_25640 = (state_25675[(7)]);
var inst_25643 = (state_25675[(9)]);
var inst_25648 = (state_25675[(11)]);
var inst_25639 = (state_25675[(8)]);
var inst_25647 = (inst_25639[inst_25640] = inst_25643);
var inst_25648__$1 = (inst_25640 + (1));
var inst_25649 = (inst_25648__$1 < n);
var state_25675__$1 = (function (){var statearr_25689 = state_25675;
(statearr_25689[(12)] = inst_25647);

(statearr_25689[(11)] = inst_25648__$1);

return statearr_25689;
})();
if(cljs.core.truth_(inst_25649)){
var statearr_25690_25715 = state_25675__$1;
(statearr_25690_25715[(1)] = (8));

} else {
var statearr_25691_25716 = state_25675__$1;
(statearr_25691_25716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (14))){
var inst_25668 = (state_25675[(2)]);
var inst_25669 = cljs.core.async.close_BANG_.call(null,out);
var state_25675__$1 = (function (){var statearr_25693 = state_25675;
(statearr_25693[(13)] = inst_25668);

return statearr_25693;
})();
var statearr_25694_25717 = state_25675__$1;
(statearr_25694_25717[(2)] = inst_25669);

(statearr_25694_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (10))){
var inst_25659 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25695_25718 = state_25675__$1;
(statearr_25695_25718[(2)] = inst_25659);

(statearr_25695_25718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (8))){
var inst_25648 = (state_25675[(11)]);
var inst_25639 = (state_25675[(8)]);
var tmp25692 = inst_25639;
var inst_25639__$1 = tmp25692;
var inst_25640 = inst_25648;
var state_25675__$1 = (function (){var statearr_25696 = state_25675;
(statearr_25696[(7)] = inst_25640);

(statearr_25696[(8)] = inst_25639__$1);

return statearr_25696;
})();
var statearr_25697_25719 = state_25675__$1;
(statearr_25697_25719[(2)] = null);

(statearr_25697_25719[(1)] = (2));


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
});})(c__16852__auto___25705,out))
;
return ((function (switch__16796__auto__,c__16852__auto___25705,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25701[(0)] = state_machine__16797__auto__);

(statearr_25701[(1)] = (1));

return statearr_25701;
});
var state_machine__16797__auto____1 = (function (state_25675){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25702){if((e25702 instanceof Object)){
var ex__16800__auto__ = e25702;
var statearr_25703_25720 = state_25675;
(statearr_25703_25720[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25675;
state_25675 = G__25721;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25675){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___25705,out))
})();
var state__16854__auto__ = (function (){var statearr_25704 = f__16853__auto__.call(null);
(statearr_25704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___25705);

return statearr_25704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___25705,out))
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
var c__16852__auto___25864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16852__auto___25864,out){
return (function (){
var f__16853__auto__ = (function (){var switch__16796__auto__ = ((function (c__16852__auto___25864,out){
return (function (state_25834){
var state_val_25835 = (state_25834[(1)]);
if((state_val_25835 === (7))){
var inst_25830 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25836_25865 = state_25834__$1;
(statearr_25836_25865[(2)] = inst_25830);

(statearr_25836_25865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (1))){
var inst_25793 = [];
var inst_25794 = inst_25793;
var inst_25795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25834__$1 = (function (){var statearr_25837 = state_25834;
(statearr_25837[(7)] = inst_25795);

(statearr_25837[(8)] = inst_25794);

return statearr_25837;
})();
var statearr_25838_25866 = state_25834__$1;
(statearr_25838_25866[(2)] = null);

(statearr_25838_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (4))){
var inst_25798 = (state_25834[(9)]);
var inst_25798__$1 = (state_25834[(2)]);
var inst_25799 = (inst_25798__$1 == null);
var inst_25800 = cljs.core.not.call(null,inst_25799);
var state_25834__$1 = (function (){var statearr_25839 = state_25834;
(statearr_25839[(9)] = inst_25798__$1);

return statearr_25839;
})();
if(inst_25800){
var statearr_25840_25867 = state_25834__$1;
(statearr_25840_25867[(1)] = (5));

} else {
var statearr_25841_25868 = state_25834__$1;
(statearr_25841_25868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (15))){
var inst_25824 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25842_25869 = state_25834__$1;
(statearr_25842_25869[(2)] = inst_25824);

(statearr_25842_25869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (13))){
var state_25834__$1 = state_25834;
var statearr_25843_25870 = state_25834__$1;
(statearr_25843_25870[(2)] = null);

(statearr_25843_25870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (6))){
var inst_25794 = (state_25834[(8)]);
var inst_25819 = inst_25794.length;
var inst_25820 = (inst_25819 > (0));
var state_25834__$1 = state_25834;
if(cljs.core.truth_(inst_25820)){
var statearr_25844_25871 = state_25834__$1;
(statearr_25844_25871[(1)] = (12));

} else {
var statearr_25845_25872 = state_25834__$1;
(statearr_25845_25872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (3))){
var inst_25832 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25834__$1,inst_25832);
} else {
if((state_val_25835 === (12))){
var inst_25794 = (state_25834[(8)]);
var inst_25822 = cljs.core.vec.call(null,inst_25794);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25834__$1,(15),out,inst_25822);
} else {
if((state_val_25835 === (2))){
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25834__$1,(4),ch);
} else {
if((state_val_25835 === (11))){
var inst_25802 = (state_25834[(10)]);
var inst_25798 = (state_25834[(9)]);
var inst_25812 = (state_25834[(2)]);
var inst_25813 = [];
var inst_25814 = inst_25813.push(inst_25798);
var inst_25794 = inst_25813;
var inst_25795 = inst_25802;
var state_25834__$1 = (function (){var statearr_25846 = state_25834;
(statearr_25846[(11)] = inst_25812);

(statearr_25846[(12)] = inst_25814);

(statearr_25846[(7)] = inst_25795);

(statearr_25846[(8)] = inst_25794);

return statearr_25846;
})();
var statearr_25847_25873 = state_25834__$1;
(statearr_25847_25873[(2)] = null);

(statearr_25847_25873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (9))){
var inst_25794 = (state_25834[(8)]);
var inst_25810 = cljs.core.vec.call(null,inst_25794);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25834__$1,(11),out,inst_25810);
} else {
if((state_val_25835 === (5))){
var inst_25802 = (state_25834[(10)]);
var inst_25798 = (state_25834[(9)]);
var inst_25795 = (state_25834[(7)]);
var inst_25802__$1 = f.call(null,inst_25798);
var inst_25803 = cljs.core._EQ_.call(null,inst_25802__$1,inst_25795);
var inst_25804 = cljs.core.keyword_identical_QMARK_.call(null,inst_25795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25805 = (inst_25803) || (inst_25804);
var state_25834__$1 = (function (){var statearr_25848 = state_25834;
(statearr_25848[(10)] = inst_25802__$1);

return statearr_25848;
})();
if(cljs.core.truth_(inst_25805)){
var statearr_25849_25874 = state_25834__$1;
(statearr_25849_25874[(1)] = (8));

} else {
var statearr_25850_25875 = state_25834__$1;
(statearr_25850_25875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (14))){
var inst_25827 = (state_25834[(2)]);
var inst_25828 = cljs.core.async.close_BANG_.call(null,out);
var state_25834__$1 = (function (){var statearr_25852 = state_25834;
(statearr_25852[(13)] = inst_25827);

return statearr_25852;
})();
var statearr_25853_25876 = state_25834__$1;
(statearr_25853_25876[(2)] = inst_25828);

(statearr_25853_25876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (10))){
var inst_25817 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25854_25877 = state_25834__$1;
(statearr_25854_25877[(2)] = inst_25817);

(statearr_25854_25877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (8))){
var inst_25802 = (state_25834[(10)]);
var inst_25798 = (state_25834[(9)]);
var inst_25794 = (state_25834[(8)]);
var inst_25807 = inst_25794.push(inst_25798);
var tmp25851 = inst_25794;
var inst_25794__$1 = tmp25851;
var inst_25795 = inst_25802;
var state_25834__$1 = (function (){var statearr_25855 = state_25834;
(statearr_25855[(14)] = inst_25807);

(statearr_25855[(7)] = inst_25795);

(statearr_25855[(8)] = inst_25794__$1);

return statearr_25855;
})();
var statearr_25856_25878 = state_25834__$1;
(statearr_25856_25878[(2)] = null);

(statearr_25856_25878[(1)] = (2));


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
});})(c__16852__auto___25864,out))
;
return ((function (switch__16796__auto__,c__16852__auto___25864,out){
return (function() {
var state_machine__16797__auto__ = null;
var state_machine__16797__auto____0 = (function (){
var statearr_25860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25860[(0)] = state_machine__16797__auto__);

(statearr_25860[(1)] = (1));

return statearr_25860;
});
var state_machine__16797__auto____1 = (function (state_25834){
while(true){
var ret_value__16798__auto__ = (function (){try{while(true){
var result__16799__auto__ = switch__16796__auto__.call(null,state_25834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16799__auto__;
}
break;
}
}catch (e25861){if((e25861 instanceof Object)){
var ex__16800__auto__ = e25861;
var statearr_25862_25879 = state_25834;
(statearr_25862_25879[(5)] = ex__16800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25880 = state_25834;
state_25834 = G__25880;
continue;
} else {
return ret_value__16798__auto__;
}
break;
}
});
state_machine__16797__auto__ = function(state_25834){
switch(arguments.length){
case 0:
return state_machine__16797__auto____0.call(this);
case 1:
return state_machine__16797__auto____1.call(this,state_25834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16797__auto____0;
state_machine__16797__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16797__auto____1;
return state_machine__16797__auto__;
})()
;})(switch__16796__auto__,c__16852__auto___25864,out))
})();
var state__16854__auto__ = (function (){var statearr_25863 = f__16853__auto__.call(null);
(statearr_25863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16852__auto___25864);

return statearr_25863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16854__auto__);
});})(c__16852__auto___25864,out))
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