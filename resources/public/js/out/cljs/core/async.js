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
if(typeof cljs.core.async.t1021640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1021640 = (function (f,fn_handler,meta1021641){
this.f = f;
this.fn_handler = fn_handler;
this.meta1021641 = meta1021641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1021640.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1021640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t1021640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t1021640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1021642){
var self__ = this;
var _1021642__$1 = this;
return self__.meta1021641;
});

cljs.core.async.t1021640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1021642,meta1021641__$1){
var self__ = this;
var _1021642__$1 = this;
return (new cljs.core.async.t1021640(self__.f,self__.fn_handler,meta1021641__$1));
});

cljs.core.async.t1021640.cljs$lang$type = true;

cljs.core.async.t1021640.cljs$lang$ctorStr = "cljs.core.async/t1021640";

cljs.core.async.t1021640.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1021640");
});

cljs.core.async.__GT_t1021640 = (function __GT_t1021640(f__$1,fn_handler__$1,meta1021641){
return (new cljs.core.async.t1021640(f__$1,fn_handler__$1,meta1021641));
});

}

return (new cljs.core.async.t1021640(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__1021644 = buff;
if(G__1021644){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__1021644.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__1021644.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1021644);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__1021644);
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
var val_1021645 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1021645);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1021645,ret){
return (function (){
return fn1.call(null,val_1021645);
});})(val_1021645,ret))
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
var n__4509__auto___1021646 = n;
var x_1021647 = (0);
while(true){
if((x_1021647 < n__4509__auto___1021646)){
(a[x_1021647] = (0));

var G__1021648 = (x_1021647 + (1));
x_1021647 = G__1021648;
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

var G__1021649 = (i + (1));
i = G__1021649;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t1021653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1021653 = (function (flag,alt_flag,meta1021654){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta1021654 = meta1021654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1021653.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1021653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t1021653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t1021653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1021655){
var self__ = this;
var _1021655__$1 = this;
return self__.meta1021654;
});})(flag))
;

cljs.core.async.t1021653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1021655,meta1021654__$1){
var self__ = this;
var _1021655__$1 = this;
return (new cljs.core.async.t1021653(self__.flag,self__.alt_flag,meta1021654__$1));
});})(flag))
;

cljs.core.async.t1021653.cljs$lang$type = true;

cljs.core.async.t1021653.cljs$lang$ctorStr = "cljs.core.async/t1021653";

cljs.core.async.t1021653.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1021653");
});})(flag))
;

cljs.core.async.__GT_t1021653 = ((function (flag){
return (function __GT_t1021653(flag__$1,alt_flag__$1,meta1021654){
return (new cljs.core.async.t1021653(flag__$1,alt_flag__$1,meta1021654));
});})(flag))
;

}

return (new cljs.core.async.t1021653(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t1021659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1021659 = (function (cb,flag,alt_handler,meta1021660){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta1021660 = meta1021660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1021659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1021659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t1021659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t1021659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1021661){
var self__ = this;
var _1021661__$1 = this;
return self__.meta1021660;
});

cljs.core.async.t1021659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1021661,meta1021660__$1){
var self__ = this;
var _1021661__$1 = this;
return (new cljs.core.async.t1021659(self__.cb,self__.flag,self__.alt_handler,meta1021660__$1));
});

cljs.core.async.t1021659.cljs$lang$type = true;

cljs.core.async.t1021659.cljs$lang$ctorStr = "cljs.core.async/t1021659";

cljs.core.async.t1021659.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1021659");
});

cljs.core.async.__GT_t1021659 = (function __GT_t1021659(cb__$1,flag__$1,alt_handler__$1,meta1021660){
return (new cljs.core.async.t1021659(cb__$1,flag__$1,alt_handler__$1,meta1021660));
});

}

return (new cljs.core.async.t1021659(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__1021662_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1021662_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1021663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1021663_SHARP_,port], null));
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
var G__1021664 = (i + (1));
i = G__1021664;
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
var alts_BANG___delegate = function (ports,p__1021665){
var map__1021667 = p__1021665;
var map__1021667__$1 = ((cljs.core.seq_QMARK_.call(null,map__1021667))?cljs.core.apply.call(null,cljs.core.hash_map,map__1021667):map__1021667);
var opts = map__1021667__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__1021665 = null;
if (arguments.length > 1) {
  p__1021665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__1021665);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__1021668){
var ports = cljs.core.first(arglist__1021668);
var p__1021665 = cljs.core.rest(arglist__1021668);
return alts_BANG___delegate(ports,p__1021665);
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
var c__9199__auto___1021763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1021763){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1021763){
return (function (state_1021739){
var state_val_1021740 = (state_1021739[(1)]);
if((state_val_1021740 === (7))){
var inst_1021735 = (state_1021739[(2)]);
var state_1021739__$1 = state_1021739;
var statearr_1021741_1021764 = state_1021739__$1;
(statearr_1021741_1021764[(2)] = inst_1021735);

(statearr_1021741_1021764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (1))){
var state_1021739__$1 = state_1021739;
var statearr_1021742_1021765 = state_1021739__$1;
(statearr_1021742_1021765[(2)] = null);

(statearr_1021742_1021765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (4))){
var inst_1021718 = (state_1021739[(7)]);
var inst_1021718__$1 = (state_1021739[(2)]);
var inst_1021719 = (inst_1021718__$1 == null);
var state_1021739__$1 = (function (){var statearr_1021743 = state_1021739;
(statearr_1021743[(7)] = inst_1021718__$1);

return statearr_1021743;
})();
if(cljs.core.truth_(inst_1021719)){
var statearr_1021744_1021766 = state_1021739__$1;
(statearr_1021744_1021766[(1)] = (5));

} else {
var statearr_1021745_1021767 = state_1021739__$1;
(statearr_1021745_1021767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (13))){
var state_1021739__$1 = state_1021739;
var statearr_1021746_1021768 = state_1021739__$1;
(statearr_1021746_1021768[(2)] = null);

(statearr_1021746_1021768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (6))){
var inst_1021718 = (state_1021739[(7)]);
var state_1021739__$1 = state_1021739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1021739__$1,(11),to,inst_1021718);
} else {
if((state_val_1021740 === (3))){
var inst_1021737 = (state_1021739[(2)]);
var state_1021739__$1 = state_1021739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1021739__$1,inst_1021737);
} else {
if((state_val_1021740 === (12))){
var state_1021739__$1 = state_1021739;
var statearr_1021747_1021769 = state_1021739__$1;
(statearr_1021747_1021769[(2)] = null);

(statearr_1021747_1021769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (2))){
var state_1021739__$1 = state_1021739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1021739__$1,(4),from);
} else {
if((state_val_1021740 === (11))){
var inst_1021728 = (state_1021739[(2)]);
var state_1021739__$1 = state_1021739;
if(cljs.core.truth_(inst_1021728)){
var statearr_1021748_1021770 = state_1021739__$1;
(statearr_1021748_1021770[(1)] = (12));

} else {
var statearr_1021749_1021771 = state_1021739__$1;
(statearr_1021749_1021771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (9))){
var state_1021739__$1 = state_1021739;
var statearr_1021750_1021772 = state_1021739__$1;
(statearr_1021750_1021772[(2)] = null);

(statearr_1021750_1021772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (5))){
var state_1021739__$1 = state_1021739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1021751_1021773 = state_1021739__$1;
(statearr_1021751_1021773[(1)] = (8));

} else {
var statearr_1021752_1021774 = state_1021739__$1;
(statearr_1021752_1021774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (14))){
var inst_1021733 = (state_1021739[(2)]);
var state_1021739__$1 = state_1021739;
var statearr_1021753_1021775 = state_1021739__$1;
(statearr_1021753_1021775[(2)] = inst_1021733);

(statearr_1021753_1021775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (10))){
var inst_1021725 = (state_1021739[(2)]);
var state_1021739__$1 = state_1021739;
var statearr_1021754_1021776 = state_1021739__$1;
(statearr_1021754_1021776[(2)] = inst_1021725);

(statearr_1021754_1021776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021740 === (8))){
var inst_1021722 = cljs.core.async.close_BANG_.call(null,to);
var state_1021739__$1 = state_1021739;
var statearr_1021755_1021777 = state_1021739__$1;
(statearr_1021755_1021777[(2)] = inst_1021722);

(statearr_1021755_1021777[(1)] = (10));


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
});})(c__9199__auto___1021763))
;
return ((function (switch__9184__auto__,c__9199__auto___1021763){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1021759 = [null,null,null,null,null,null,null,null];
(statearr_1021759[(0)] = state_machine__9185__auto__);

(statearr_1021759[(1)] = (1));

return statearr_1021759;
});
var state_machine__9185__auto____1 = (function (state_1021739){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1021739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1021760){if((e1021760 instanceof Object)){
var ex__9188__auto__ = e1021760;
var statearr_1021761_1021778 = state_1021739;
(statearr_1021761_1021778[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1021739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1021760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1021779 = state_1021739;
state_1021739 = G__1021779;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1021739){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1021739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1021763))
})();
var state__9201__auto__ = (function (){var statearr_1021762 = f__9200__auto__.call(null);
(statearr_1021762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1021763);

return statearr_1021762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1021763))
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
return (function (p__1021963){
var vec__1021964 = p__1021963;
var v = cljs.core.nth.call(null,vec__1021964,(0),null);
var p = cljs.core.nth.call(null,vec__1021964,(1),null);
var job = vec__1021964;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___1022146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results){
return (function (state_1021969){
var state_val_1021970 = (state_1021969[(1)]);
if((state_val_1021970 === (2))){
var inst_1021966 = (state_1021969[(2)]);
var inst_1021967 = cljs.core.async.close_BANG_.call(null,res);
var state_1021969__$1 = (function (){var statearr_1021971 = state_1021969;
(statearr_1021971[(7)] = inst_1021966);

return statearr_1021971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1021969__$1,inst_1021967);
} else {
if((state_val_1021970 === (1))){
var state_1021969__$1 = state_1021969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1021969__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1021975 = [null,null,null,null,null,null,null,null];
(statearr_1021975[(0)] = state_machine__9185__auto__);

(statearr_1021975[(1)] = (1));

return statearr_1021975;
});
var state_machine__9185__auto____1 = (function (state_1021969){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1021969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1021976){if((e1021976 instanceof Object)){
var ex__9188__auto__ = e1021976;
var statearr_1021977_1022147 = state_1021969;
(statearr_1021977_1022147[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1021969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1021976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022148 = state_1021969;
state_1021969 = G__1022148;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1021969){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1021969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_1021978 = f__9200__auto__.call(null);
(statearr_1021978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022146);

return statearr_1021978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1022146,res,vec__1021964,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1021979){
var vec__1021980 = p__1021979;
var v = cljs.core.nth.call(null,vec__1021980,(0),null);
var p = cljs.core.nth.call(null,vec__1021980,(1),null);
var job = vec__1021980;
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
var n__4509__auto___1022149 = n;
var __1022150 = (0);
while(true){
if((__1022150 < n__4509__auto___1022149)){
var G__1021981_1022151 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1021981_1022151) {
case "async":
var c__9199__auto___1022153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1022150,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1022150,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function (state_1021994){
var state_val_1021995 = (state_1021994[(1)]);
if((state_val_1021995 === (7))){
var inst_1021990 = (state_1021994[(2)]);
var state_1021994__$1 = state_1021994;
var statearr_1021996_1022154 = state_1021994__$1;
(statearr_1021996_1022154[(2)] = inst_1021990);

(statearr_1021996_1022154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021995 === (6))){
var state_1021994__$1 = state_1021994;
var statearr_1021997_1022155 = state_1021994__$1;
(statearr_1021997_1022155[(2)] = null);

(statearr_1021997_1022155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021995 === (5))){
var state_1021994__$1 = state_1021994;
var statearr_1021998_1022156 = state_1021994__$1;
(statearr_1021998_1022156[(2)] = null);

(statearr_1021998_1022156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021995 === (4))){
var inst_1021984 = (state_1021994[(2)]);
var inst_1021985 = async.call(null,inst_1021984);
var state_1021994__$1 = state_1021994;
if(cljs.core.truth_(inst_1021985)){
var statearr_1021999_1022157 = state_1021994__$1;
(statearr_1021999_1022157[(1)] = (5));

} else {
var statearr_1022000_1022158 = state_1021994__$1;
(statearr_1022000_1022158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1021995 === (3))){
var inst_1021992 = (state_1021994[(2)]);
var state_1021994__$1 = state_1021994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1021994__$1,inst_1021992);
} else {
if((state_val_1021995 === (2))){
var state_1021994__$1 = state_1021994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1021994__$1,(4),jobs);
} else {
if((state_val_1021995 === (1))){
var state_1021994__$1 = state_1021994;
var statearr_1022001_1022159 = state_1021994__$1;
(statearr_1022001_1022159[(2)] = null);

(statearr_1022001_1022159[(1)] = (2));


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
});})(__1022150,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
;
return ((function (__1022150,switch__9184__auto__,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1022005 = [null,null,null,null,null,null,null];
(statearr_1022005[(0)] = state_machine__9185__auto__);

(statearr_1022005[(1)] = (1));

return statearr_1022005;
});
var state_machine__9185__auto____1 = (function (state_1021994){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1021994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022006){if((e1022006 instanceof Object)){
var ex__9188__auto__ = e1022006;
var statearr_1022007_1022160 = state_1021994;
(statearr_1022007_1022160[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1021994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022161 = state_1021994;
state_1021994 = G__1022161;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1021994){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1021994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1022150,switch__9184__auto__,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1022008 = f__9200__auto__.call(null);
(statearr_1022008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022153);

return statearr_1022008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1022150,c__9199__auto___1022153,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___1022162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1022150,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__1022150,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function (state_1022021){
var state_val_1022022 = (state_1022021[(1)]);
if((state_val_1022022 === (7))){
var inst_1022017 = (state_1022021[(2)]);
var state_1022021__$1 = state_1022021;
var statearr_1022023_1022163 = state_1022021__$1;
(statearr_1022023_1022163[(2)] = inst_1022017);

(statearr_1022023_1022163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022022 === (6))){
var state_1022021__$1 = state_1022021;
var statearr_1022024_1022164 = state_1022021__$1;
(statearr_1022024_1022164[(2)] = null);

(statearr_1022024_1022164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022022 === (5))){
var state_1022021__$1 = state_1022021;
var statearr_1022025_1022165 = state_1022021__$1;
(statearr_1022025_1022165[(2)] = null);

(statearr_1022025_1022165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022022 === (4))){
var inst_1022011 = (state_1022021[(2)]);
var inst_1022012 = process.call(null,inst_1022011);
var state_1022021__$1 = state_1022021;
if(cljs.core.truth_(inst_1022012)){
var statearr_1022026_1022166 = state_1022021__$1;
(statearr_1022026_1022166[(1)] = (5));

} else {
var statearr_1022027_1022167 = state_1022021__$1;
(statearr_1022027_1022167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022022 === (3))){
var inst_1022019 = (state_1022021[(2)]);
var state_1022021__$1 = state_1022021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022021__$1,inst_1022019);
} else {
if((state_val_1022022 === (2))){
var state_1022021__$1 = state_1022021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022021__$1,(4),jobs);
} else {
if((state_val_1022022 === (1))){
var state_1022021__$1 = state_1022021;
var statearr_1022028_1022168 = state_1022021__$1;
(statearr_1022028_1022168[(2)] = null);

(statearr_1022028_1022168[(1)] = (2));


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
});})(__1022150,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
;
return ((function (__1022150,switch__9184__auto__,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1022032 = [null,null,null,null,null,null,null];
(statearr_1022032[(0)] = state_machine__9185__auto__);

(statearr_1022032[(1)] = (1));

return statearr_1022032;
});
var state_machine__9185__auto____1 = (function (state_1022021){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022033){if((e1022033 instanceof Object)){
var ex__9188__auto__ = e1022033;
var statearr_1022034_1022169 = state_1022021;
(statearr_1022034_1022169[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022170 = state_1022021;
state_1022021 = G__1022170;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022021){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__1022150,switch__9184__auto__,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1022035 = f__9200__auto__.call(null);
(statearr_1022035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022162);

return statearr_1022035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__1022150,c__9199__auto___1022162,G__1021981_1022151,n__4509__auto___1022149,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1022171 = (__1022150 + (1));
__1022150 = G__1022171;
continue;
} else {
}
break;
}

var c__9199__auto___1022172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1022172,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1022172,jobs,results,process,async){
return (function (state_1022057){
var state_val_1022058 = (state_1022057[(1)]);
if((state_val_1022058 === (9))){
var inst_1022050 = (state_1022057[(2)]);
var state_1022057__$1 = (function (){var statearr_1022059 = state_1022057;
(statearr_1022059[(7)] = inst_1022050);

return statearr_1022059;
})();
var statearr_1022060_1022173 = state_1022057__$1;
(statearr_1022060_1022173[(2)] = null);

(statearr_1022060_1022173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022058 === (8))){
var inst_1022043 = (state_1022057[(8)]);
var inst_1022048 = (state_1022057[(2)]);
var state_1022057__$1 = (function (){var statearr_1022061 = state_1022057;
(statearr_1022061[(9)] = inst_1022048);

return statearr_1022061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1022057__$1,(9),results,inst_1022043);
} else {
if((state_val_1022058 === (7))){
var inst_1022053 = (state_1022057[(2)]);
var state_1022057__$1 = state_1022057;
var statearr_1022062_1022174 = state_1022057__$1;
(statearr_1022062_1022174[(2)] = inst_1022053);

(statearr_1022062_1022174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022058 === (6))){
var inst_1022038 = (state_1022057[(10)]);
var inst_1022043 = (state_1022057[(8)]);
var inst_1022043__$1 = cljs.core.async.chan.call(null,(1));
var inst_1022044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1022045 = [inst_1022038,inst_1022043__$1];
var inst_1022046 = (new cljs.core.PersistentVector(null,2,(5),inst_1022044,inst_1022045,null));
var state_1022057__$1 = (function (){var statearr_1022063 = state_1022057;
(statearr_1022063[(8)] = inst_1022043__$1);

return statearr_1022063;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1022057__$1,(8),jobs,inst_1022046);
} else {
if((state_val_1022058 === (5))){
var inst_1022041 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1022057__$1 = state_1022057;
var statearr_1022064_1022175 = state_1022057__$1;
(statearr_1022064_1022175[(2)] = inst_1022041);

(statearr_1022064_1022175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022058 === (4))){
var inst_1022038 = (state_1022057[(10)]);
var inst_1022038__$1 = (state_1022057[(2)]);
var inst_1022039 = (inst_1022038__$1 == null);
var state_1022057__$1 = (function (){var statearr_1022065 = state_1022057;
(statearr_1022065[(10)] = inst_1022038__$1);

return statearr_1022065;
})();
if(cljs.core.truth_(inst_1022039)){
var statearr_1022066_1022176 = state_1022057__$1;
(statearr_1022066_1022176[(1)] = (5));

} else {
var statearr_1022067_1022177 = state_1022057__$1;
(statearr_1022067_1022177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022058 === (3))){
var inst_1022055 = (state_1022057[(2)]);
var state_1022057__$1 = state_1022057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022057__$1,inst_1022055);
} else {
if((state_val_1022058 === (2))){
var state_1022057__$1 = state_1022057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022057__$1,(4),from);
} else {
if((state_val_1022058 === (1))){
var state_1022057__$1 = state_1022057;
var statearr_1022068_1022178 = state_1022057__$1;
(statearr_1022068_1022178[(2)] = null);

(statearr_1022068_1022178[(1)] = (2));


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
});})(c__9199__auto___1022172,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___1022172,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1022072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1022072[(0)] = state_machine__9185__auto__);

(statearr_1022072[(1)] = (1));

return statearr_1022072;
});
var state_machine__9185__auto____1 = (function (state_1022057){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022073){if((e1022073 instanceof Object)){
var ex__9188__auto__ = e1022073;
var statearr_1022074_1022179 = state_1022057;
(statearr_1022074_1022179[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022180 = state_1022057;
state_1022057 = G__1022180;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022057){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1022172,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1022075 = f__9200__auto__.call(null);
(statearr_1022075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022172);

return statearr_1022075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1022172,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_1022113){
var state_val_1022114 = (state_1022113[(1)]);
if((state_val_1022114 === (7))){
var inst_1022109 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
var statearr_1022115_1022181 = state_1022113__$1;
(statearr_1022115_1022181[(2)] = inst_1022109);

(statearr_1022115_1022181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (20))){
var state_1022113__$1 = state_1022113;
var statearr_1022116_1022182 = state_1022113__$1;
(statearr_1022116_1022182[(2)] = null);

(statearr_1022116_1022182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (1))){
var state_1022113__$1 = state_1022113;
var statearr_1022117_1022183 = state_1022113__$1;
(statearr_1022117_1022183[(2)] = null);

(statearr_1022117_1022183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (4))){
var inst_1022078 = (state_1022113[(7)]);
var inst_1022078__$1 = (state_1022113[(2)]);
var inst_1022079 = (inst_1022078__$1 == null);
var state_1022113__$1 = (function (){var statearr_1022118 = state_1022113;
(statearr_1022118[(7)] = inst_1022078__$1);

return statearr_1022118;
})();
if(cljs.core.truth_(inst_1022079)){
var statearr_1022119_1022184 = state_1022113__$1;
(statearr_1022119_1022184[(1)] = (5));

} else {
var statearr_1022120_1022185 = state_1022113__$1;
(statearr_1022120_1022185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (15))){
var inst_1022091 = (state_1022113[(8)]);
var state_1022113__$1 = state_1022113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1022113__$1,(18),to,inst_1022091);
} else {
if((state_val_1022114 === (21))){
var inst_1022104 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
var statearr_1022121_1022186 = state_1022113__$1;
(statearr_1022121_1022186[(2)] = inst_1022104);

(statearr_1022121_1022186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (13))){
var inst_1022106 = (state_1022113[(2)]);
var state_1022113__$1 = (function (){var statearr_1022122 = state_1022113;
(statearr_1022122[(9)] = inst_1022106);

return statearr_1022122;
})();
var statearr_1022123_1022187 = state_1022113__$1;
(statearr_1022123_1022187[(2)] = null);

(statearr_1022123_1022187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (6))){
var inst_1022078 = (state_1022113[(7)]);
var state_1022113__$1 = state_1022113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022113__$1,(11),inst_1022078);
} else {
if((state_val_1022114 === (17))){
var inst_1022099 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
if(cljs.core.truth_(inst_1022099)){
var statearr_1022124_1022188 = state_1022113__$1;
(statearr_1022124_1022188[(1)] = (19));

} else {
var statearr_1022125_1022189 = state_1022113__$1;
(statearr_1022125_1022189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (3))){
var inst_1022111 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022113__$1,inst_1022111);
} else {
if((state_val_1022114 === (12))){
var inst_1022088 = (state_1022113[(10)]);
var state_1022113__$1 = state_1022113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022113__$1,(14),inst_1022088);
} else {
if((state_val_1022114 === (2))){
var state_1022113__$1 = state_1022113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022113__$1,(4),results);
} else {
if((state_val_1022114 === (19))){
var state_1022113__$1 = state_1022113;
var statearr_1022126_1022190 = state_1022113__$1;
(statearr_1022126_1022190[(2)] = null);

(statearr_1022126_1022190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (11))){
var inst_1022088 = (state_1022113[(2)]);
var state_1022113__$1 = (function (){var statearr_1022127 = state_1022113;
(statearr_1022127[(10)] = inst_1022088);

return statearr_1022127;
})();
var statearr_1022128_1022191 = state_1022113__$1;
(statearr_1022128_1022191[(2)] = null);

(statearr_1022128_1022191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (9))){
var state_1022113__$1 = state_1022113;
var statearr_1022129_1022192 = state_1022113__$1;
(statearr_1022129_1022192[(2)] = null);

(statearr_1022129_1022192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (5))){
var state_1022113__$1 = state_1022113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1022130_1022193 = state_1022113__$1;
(statearr_1022130_1022193[(1)] = (8));

} else {
var statearr_1022131_1022194 = state_1022113__$1;
(statearr_1022131_1022194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (14))){
var inst_1022093 = (state_1022113[(11)]);
var inst_1022091 = (state_1022113[(8)]);
var inst_1022091__$1 = (state_1022113[(2)]);
var inst_1022092 = (inst_1022091__$1 == null);
var inst_1022093__$1 = cljs.core.not.call(null,inst_1022092);
var state_1022113__$1 = (function (){var statearr_1022132 = state_1022113;
(statearr_1022132[(11)] = inst_1022093__$1);

(statearr_1022132[(8)] = inst_1022091__$1);

return statearr_1022132;
})();
if(inst_1022093__$1){
var statearr_1022133_1022195 = state_1022113__$1;
(statearr_1022133_1022195[(1)] = (15));

} else {
var statearr_1022134_1022196 = state_1022113__$1;
(statearr_1022134_1022196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (16))){
var inst_1022093 = (state_1022113[(11)]);
var state_1022113__$1 = state_1022113;
var statearr_1022135_1022197 = state_1022113__$1;
(statearr_1022135_1022197[(2)] = inst_1022093);

(statearr_1022135_1022197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (10))){
var inst_1022085 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
var statearr_1022136_1022198 = state_1022113__$1;
(statearr_1022136_1022198[(2)] = inst_1022085);

(statearr_1022136_1022198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (18))){
var inst_1022096 = (state_1022113[(2)]);
var state_1022113__$1 = state_1022113;
var statearr_1022137_1022199 = state_1022113__$1;
(statearr_1022137_1022199[(2)] = inst_1022096);

(statearr_1022137_1022199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022114 === (8))){
var inst_1022082 = cljs.core.async.close_BANG_.call(null,to);
var state_1022113__$1 = state_1022113;
var statearr_1022138_1022200 = state_1022113__$1;
(statearr_1022138_1022200[(2)] = inst_1022082);

(statearr_1022138_1022200[(1)] = (10));


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
var statearr_1022142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1022142[(0)] = state_machine__9185__auto__);

(statearr_1022142[(1)] = (1));

return statearr_1022142;
});
var state_machine__9185__auto____1 = (function (state_1022113){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022143){if((e1022143 instanceof Object)){
var ex__9188__auto__ = e1022143;
var statearr_1022144_1022201 = state_1022113;
(statearr_1022144_1022201[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022202 = state_1022113;
state_1022113 = G__1022202;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022113){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_1022145 = f__9200__auto__.call(null);
(statearr_1022145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1022145;
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
var c__9199__auto___1022303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1022303,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1022303,tc,fc){
return (function (state_1022278){
var state_val_1022279 = (state_1022278[(1)]);
if((state_val_1022279 === (7))){
var inst_1022274 = (state_1022278[(2)]);
var state_1022278__$1 = state_1022278;
var statearr_1022280_1022304 = state_1022278__$1;
(statearr_1022280_1022304[(2)] = inst_1022274);

(statearr_1022280_1022304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (1))){
var state_1022278__$1 = state_1022278;
var statearr_1022281_1022305 = state_1022278__$1;
(statearr_1022281_1022305[(2)] = null);

(statearr_1022281_1022305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (4))){
var inst_1022255 = (state_1022278[(7)]);
var inst_1022255__$1 = (state_1022278[(2)]);
var inst_1022256 = (inst_1022255__$1 == null);
var state_1022278__$1 = (function (){var statearr_1022282 = state_1022278;
(statearr_1022282[(7)] = inst_1022255__$1);

return statearr_1022282;
})();
if(cljs.core.truth_(inst_1022256)){
var statearr_1022283_1022306 = state_1022278__$1;
(statearr_1022283_1022306[(1)] = (5));

} else {
var statearr_1022284_1022307 = state_1022278__$1;
(statearr_1022284_1022307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (13))){
var state_1022278__$1 = state_1022278;
var statearr_1022285_1022308 = state_1022278__$1;
(statearr_1022285_1022308[(2)] = null);

(statearr_1022285_1022308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (6))){
var inst_1022255 = (state_1022278[(7)]);
var inst_1022261 = p.call(null,inst_1022255);
var state_1022278__$1 = state_1022278;
if(cljs.core.truth_(inst_1022261)){
var statearr_1022286_1022309 = state_1022278__$1;
(statearr_1022286_1022309[(1)] = (9));

} else {
var statearr_1022287_1022310 = state_1022278__$1;
(statearr_1022287_1022310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (3))){
var inst_1022276 = (state_1022278[(2)]);
var state_1022278__$1 = state_1022278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022278__$1,inst_1022276);
} else {
if((state_val_1022279 === (12))){
var state_1022278__$1 = state_1022278;
var statearr_1022288_1022311 = state_1022278__$1;
(statearr_1022288_1022311[(2)] = null);

(statearr_1022288_1022311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (2))){
var state_1022278__$1 = state_1022278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022278__$1,(4),ch);
} else {
if((state_val_1022279 === (11))){
var inst_1022255 = (state_1022278[(7)]);
var inst_1022265 = (state_1022278[(2)]);
var state_1022278__$1 = state_1022278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1022278__$1,(8),inst_1022265,inst_1022255);
} else {
if((state_val_1022279 === (9))){
var state_1022278__$1 = state_1022278;
var statearr_1022289_1022312 = state_1022278__$1;
(statearr_1022289_1022312[(2)] = tc);

(statearr_1022289_1022312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (5))){
var inst_1022258 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1022259 = cljs.core.async.close_BANG_.call(null,fc);
var state_1022278__$1 = (function (){var statearr_1022290 = state_1022278;
(statearr_1022290[(8)] = inst_1022258);

return statearr_1022290;
})();
var statearr_1022291_1022313 = state_1022278__$1;
(statearr_1022291_1022313[(2)] = inst_1022259);

(statearr_1022291_1022313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (14))){
var inst_1022272 = (state_1022278[(2)]);
var state_1022278__$1 = state_1022278;
var statearr_1022292_1022314 = state_1022278__$1;
(statearr_1022292_1022314[(2)] = inst_1022272);

(statearr_1022292_1022314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (10))){
var state_1022278__$1 = state_1022278;
var statearr_1022293_1022315 = state_1022278__$1;
(statearr_1022293_1022315[(2)] = fc);

(statearr_1022293_1022315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022279 === (8))){
var inst_1022267 = (state_1022278[(2)]);
var state_1022278__$1 = state_1022278;
if(cljs.core.truth_(inst_1022267)){
var statearr_1022294_1022316 = state_1022278__$1;
(statearr_1022294_1022316[(1)] = (12));

} else {
var statearr_1022295_1022317 = state_1022278__$1;
(statearr_1022295_1022317[(1)] = (13));

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
});})(c__9199__auto___1022303,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___1022303,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1022299 = [null,null,null,null,null,null,null,null,null];
(statearr_1022299[(0)] = state_machine__9185__auto__);

(statearr_1022299[(1)] = (1));

return statearr_1022299;
});
var state_machine__9185__auto____1 = (function (state_1022278){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022300){if((e1022300 instanceof Object)){
var ex__9188__auto__ = e1022300;
var statearr_1022301_1022318 = state_1022278;
(statearr_1022301_1022318[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022319 = state_1022278;
state_1022278 = G__1022319;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022278){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1022303,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_1022302 = f__9200__auto__.call(null);
(statearr_1022302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022303);

return statearr_1022302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1022303,tc,fc))
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
return (function (state_1022366){
var state_val_1022367 = (state_1022366[(1)]);
if((state_val_1022367 === (7))){
var inst_1022362 = (state_1022366[(2)]);
var state_1022366__$1 = state_1022366;
var statearr_1022368_1022384 = state_1022366__$1;
(statearr_1022368_1022384[(2)] = inst_1022362);

(statearr_1022368_1022384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022367 === (6))){
var inst_1022355 = (state_1022366[(7)]);
var inst_1022352 = (state_1022366[(8)]);
var inst_1022359 = f.call(null,inst_1022352,inst_1022355);
var inst_1022352__$1 = inst_1022359;
var state_1022366__$1 = (function (){var statearr_1022369 = state_1022366;
(statearr_1022369[(8)] = inst_1022352__$1);

return statearr_1022369;
})();
var statearr_1022370_1022385 = state_1022366__$1;
(statearr_1022370_1022385[(2)] = null);

(statearr_1022370_1022385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022367 === (5))){
var inst_1022352 = (state_1022366[(8)]);
var state_1022366__$1 = state_1022366;
var statearr_1022371_1022386 = state_1022366__$1;
(statearr_1022371_1022386[(2)] = inst_1022352);

(statearr_1022371_1022386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022367 === (4))){
var inst_1022355 = (state_1022366[(7)]);
var inst_1022355__$1 = (state_1022366[(2)]);
var inst_1022356 = (inst_1022355__$1 == null);
var state_1022366__$1 = (function (){var statearr_1022372 = state_1022366;
(statearr_1022372[(7)] = inst_1022355__$1);

return statearr_1022372;
})();
if(cljs.core.truth_(inst_1022356)){
var statearr_1022373_1022387 = state_1022366__$1;
(statearr_1022373_1022387[(1)] = (5));

} else {
var statearr_1022374_1022388 = state_1022366__$1;
(statearr_1022374_1022388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022367 === (3))){
var inst_1022364 = (state_1022366[(2)]);
var state_1022366__$1 = state_1022366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022366__$1,inst_1022364);
} else {
if((state_val_1022367 === (2))){
var state_1022366__$1 = state_1022366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022366__$1,(4),ch);
} else {
if((state_val_1022367 === (1))){
var inst_1022352 = init;
var state_1022366__$1 = (function (){var statearr_1022375 = state_1022366;
(statearr_1022375[(8)] = inst_1022352);

return statearr_1022375;
})();
var statearr_1022376_1022389 = state_1022366__$1;
(statearr_1022376_1022389[(2)] = null);

(statearr_1022376_1022389[(1)] = (2));


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
var statearr_1022380 = [null,null,null,null,null,null,null,null,null];
(statearr_1022380[(0)] = state_machine__9185__auto__);

(statearr_1022380[(1)] = (1));

return statearr_1022380;
});
var state_machine__9185__auto____1 = (function (state_1022366){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022381){if((e1022381 instanceof Object)){
var ex__9188__auto__ = e1022381;
var statearr_1022382_1022390 = state_1022366;
(statearr_1022382_1022390[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022391 = state_1022366;
state_1022366 = G__1022391;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022366){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1022383 = f__9200__auto__.call(null);
(statearr_1022383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1022383;
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
return (function (state_1022465){
var state_val_1022466 = (state_1022465[(1)]);
if((state_val_1022466 === (7))){
var inst_1022447 = (state_1022465[(2)]);
var state_1022465__$1 = state_1022465;
var statearr_1022467_1022490 = state_1022465__$1;
(statearr_1022467_1022490[(2)] = inst_1022447);

(statearr_1022467_1022490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (1))){
var inst_1022441 = cljs.core.seq.call(null,coll);
var inst_1022442 = inst_1022441;
var state_1022465__$1 = (function (){var statearr_1022468 = state_1022465;
(statearr_1022468[(7)] = inst_1022442);

return statearr_1022468;
})();
var statearr_1022469_1022491 = state_1022465__$1;
(statearr_1022469_1022491[(2)] = null);

(statearr_1022469_1022491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (4))){
var inst_1022442 = (state_1022465[(7)]);
var inst_1022445 = cljs.core.first.call(null,inst_1022442);
var state_1022465__$1 = state_1022465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1022465__$1,(7),ch,inst_1022445);
} else {
if((state_val_1022466 === (13))){
var inst_1022459 = (state_1022465[(2)]);
var state_1022465__$1 = state_1022465;
var statearr_1022470_1022492 = state_1022465__$1;
(statearr_1022470_1022492[(2)] = inst_1022459);

(statearr_1022470_1022492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (6))){
var inst_1022450 = (state_1022465[(2)]);
var state_1022465__$1 = state_1022465;
if(cljs.core.truth_(inst_1022450)){
var statearr_1022471_1022493 = state_1022465__$1;
(statearr_1022471_1022493[(1)] = (8));

} else {
var statearr_1022472_1022494 = state_1022465__$1;
(statearr_1022472_1022494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (3))){
var inst_1022463 = (state_1022465[(2)]);
var state_1022465__$1 = state_1022465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022465__$1,inst_1022463);
} else {
if((state_val_1022466 === (12))){
var state_1022465__$1 = state_1022465;
var statearr_1022473_1022495 = state_1022465__$1;
(statearr_1022473_1022495[(2)] = null);

(statearr_1022473_1022495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (2))){
var inst_1022442 = (state_1022465[(7)]);
var state_1022465__$1 = state_1022465;
if(cljs.core.truth_(inst_1022442)){
var statearr_1022474_1022496 = state_1022465__$1;
(statearr_1022474_1022496[(1)] = (4));

} else {
var statearr_1022475_1022497 = state_1022465__$1;
(statearr_1022475_1022497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (11))){
var inst_1022456 = cljs.core.async.close_BANG_.call(null,ch);
var state_1022465__$1 = state_1022465;
var statearr_1022476_1022498 = state_1022465__$1;
(statearr_1022476_1022498[(2)] = inst_1022456);

(statearr_1022476_1022498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (9))){
var state_1022465__$1 = state_1022465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1022477_1022499 = state_1022465__$1;
(statearr_1022477_1022499[(1)] = (11));

} else {
var statearr_1022478_1022500 = state_1022465__$1;
(statearr_1022478_1022500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (5))){
var inst_1022442 = (state_1022465[(7)]);
var state_1022465__$1 = state_1022465;
var statearr_1022479_1022501 = state_1022465__$1;
(statearr_1022479_1022501[(2)] = inst_1022442);

(statearr_1022479_1022501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (10))){
var inst_1022461 = (state_1022465[(2)]);
var state_1022465__$1 = state_1022465;
var statearr_1022480_1022502 = state_1022465__$1;
(statearr_1022480_1022502[(2)] = inst_1022461);

(statearr_1022480_1022502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022466 === (8))){
var inst_1022442 = (state_1022465[(7)]);
var inst_1022452 = cljs.core.next.call(null,inst_1022442);
var inst_1022442__$1 = inst_1022452;
var state_1022465__$1 = (function (){var statearr_1022481 = state_1022465;
(statearr_1022481[(7)] = inst_1022442__$1);

return statearr_1022481;
})();
var statearr_1022482_1022503 = state_1022465__$1;
(statearr_1022482_1022503[(2)] = null);

(statearr_1022482_1022503[(1)] = (2));


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
var statearr_1022486 = [null,null,null,null,null,null,null,null];
(statearr_1022486[(0)] = state_machine__9185__auto__);

(statearr_1022486[(1)] = (1));

return statearr_1022486;
});
var state_machine__9185__auto____1 = (function (state_1022465){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022487){if((e1022487 instanceof Object)){
var ex__9188__auto__ = e1022487;
var statearr_1022488_1022504 = state_1022465;
(statearr_1022488_1022504[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1022505 = state_1022465;
state_1022465 = G__1022505;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022465){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1022489 = f__9200__auto__.call(null);
(statearr_1022489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1022489;
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

cljs.core.async.Mux = (function (){var obj1022507 = {};
return obj1022507;
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


cljs.core.async.Mult = (function (){var obj1022509 = {};
return obj1022509;
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
if(typeof cljs.core.async.t1022731 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1022731 = (function (cs,ch,mult,meta1022732){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta1022732 = meta1022732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1022731.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t1022731.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t1022731.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t1022731.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t1022731.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1022731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t1022731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1022733){
var self__ = this;
var _1022733__$1 = this;
return self__.meta1022732;
});})(cs))
;

cljs.core.async.t1022731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1022733,meta1022732__$1){
var self__ = this;
var _1022733__$1 = this;
return (new cljs.core.async.t1022731(self__.cs,self__.ch,self__.mult,meta1022732__$1));
});})(cs))
;

cljs.core.async.t1022731.cljs$lang$type = true;

cljs.core.async.t1022731.cljs$lang$ctorStr = "cljs.core.async/t1022731";

cljs.core.async.t1022731.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1022731");
});})(cs))
;

cljs.core.async.__GT_t1022731 = ((function (cs){
return (function __GT_t1022731(cs__$1,ch__$1,mult__$1,meta1022732){
return (new cljs.core.async.t1022731(cs__$1,ch__$1,mult__$1,meta1022732));
});})(cs))
;

}

return (new cljs.core.async.t1022731(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1022952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1022952,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1022952,cs,m,dchan,dctr,done){
return (function (state_1022864){
var state_val_1022865 = (state_1022864[(1)]);
if((state_val_1022865 === (7))){
var inst_1022860 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022866_1022953 = state_1022864__$1;
(statearr_1022866_1022953[(2)] = inst_1022860);

(statearr_1022866_1022953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (20))){
var inst_1022765 = (state_1022864[(7)]);
var inst_1022775 = cljs.core.first.call(null,inst_1022765);
var inst_1022776 = cljs.core.nth.call(null,inst_1022775,(0),null);
var inst_1022777 = cljs.core.nth.call(null,inst_1022775,(1),null);
var state_1022864__$1 = (function (){var statearr_1022867 = state_1022864;
(statearr_1022867[(8)] = inst_1022776);

return statearr_1022867;
})();
if(cljs.core.truth_(inst_1022777)){
var statearr_1022868_1022954 = state_1022864__$1;
(statearr_1022868_1022954[(1)] = (22));

} else {
var statearr_1022869_1022955 = state_1022864__$1;
(statearr_1022869_1022955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (27))){
var inst_1022807 = (state_1022864[(9)]);
var inst_1022805 = (state_1022864[(10)]);
var inst_1022812 = (state_1022864[(11)]);
var inst_1022736 = (state_1022864[(12)]);
var inst_1022812__$1 = cljs.core._nth.call(null,inst_1022805,inst_1022807);
var inst_1022813 = cljs.core.async.put_BANG_.call(null,inst_1022812__$1,inst_1022736,done);
var state_1022864__$1 = (function (){var statearr_1022870 = state_1022864;
(statearr_1022870[(11)] = inst_1022812__$1);

return statearr_1022870;
})();
if(cljs.core.truth_(inst_1022813)){
var statearr_1022871_1022956 = state_1022864__$1;
(statearr_1022871_1022956[(1)] = (30));

} else {
var statearr_1022872_1022957 = state_1022864__$1;
(statearr_1022872_1022957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (1))){
var state_1022864__$1 = state_1022864;
var statearr_1022873_1022958 = state_1022864__$1;
(statearr_1022873_1022958[(2)] = null);

(statearr_1022873_1022958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (24))){
var inst_1022765 = (state_1022864[(7)]);
var inst_1022782 = (state_1022864[(2)]);
var inst_1022783 = cljs.core.next.call(null,inst_1022765);
var inst_1022745 = inst_1022783;
var inst_1022746 = null;
var inst_1022747 = (0);
var inst_1022748 = (0);
var state_1022864__$1 = (function (){var statearr_1022874 = state_1022864;
(statearr_1022874[(13)] = inst_1022748);

(statearr_1022874[(14)] = inst_1022745);

(statearr_1022874[(15)] = inst_1022782);

(statearr_1022874[(16)] = inst_1022747);

(statearr_1022874[(17)] = inst_1022746);

return statearr_1022874;
})();
var statearr_1022875_1022959 = state_1022864__$1;
(statearr_1022875_1022959[(2)] = null);

(statearr_1022875_1022959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (39))){
var state_1022864__$1 = state_1022864;
var statearr_1022879_1022960 = state_1022864__$1;
(statearr_1022879_1022960[(2)] = null);

(statearr_1022879_1022960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (4))){
var inst_1022736 = (state_1022864[(12)]);
var inst_1022736__$1 = (state_1022864[(2)]);
var inst_1022737 = (inst_1022736__$1 == null);
var state_1022864__$1 = (function (){var statearr_1022880 = state_1022864;
(statearr_1022880[(12)] = inst_1022736__$1);

return statearr_1022880;
})();
if(cljs.core.truth_(inst_1022737)){
var statearr_1022881_1022961 = state_1022864__$1;
(statearr_1022881_1022961[(1)] = (5));

} else {
var statearr_1022882_1022962 = state_1022864__$1;
(statearr_1022882_1022962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (15))){
var inst_1022748 = (state_1022864[(13)]);
var inst_1022745 = (state_1022864[(14)]);
var inst_1022747 = (state_1022864[(16)]);
var inst_1022746 = (state_1022864[(17)]);
var inst_1022761 = (state_1022864[(2)]);
var inst_1022762 = (inst_1022748 + (1));
var tmp1022876 = inst_1022745;
var tmp1022877 = inst_1022747;
var tmp1022878 = inst_1022746;
var inst_1022745__$1 = tmp1022876;
var inst_1022746__$1 = tmp1022878;
var inst_1022747__$1 = tmp1022877;
var inst_1022748__$1 = inst_1022762;
var state_1022864__$1 = (function (){var statearr_1022883 = state_1022864;
(statearr_1022883[(13)] = inst_1022748__$1);

(statearr_1022883[(18)] = inst_1022761);

(statearr_1022883[(14)] = inst_1022745__$1);

(statearr_1022883[(16)] = inst_1022747__$1);

(statearr_1022883[(17)] = inst_1022746__$1);

return statearr_1022883;
})();
var statearr_1022884_1022963 = state_1022864__$1;
(statearr_1022884_1022963[(2)] = null);

(statearr_1022884_1022963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (21))){
var inst_1022786 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022888_1022964 = state_1022864__$1;
(statearr_1022888_1022964[(2)] = inst_1022786);

(statearr_1022888_1022964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (31))){
var inst_1022812 = (state_1022864[(11)]);
var inst_1022816 = done.call(null,null);
var inst_1022817 = cljs.core.async.untap_STAR_.call(null,m,inst_1022812);
var state_1022864__$1 = (function (){var statearr_1022889 = state_1022864;
(statearr_1022889[(19)] = inst_1022816);

return statearr_1022889;
})();
var statearr_1022890_1022965 = state_1022864__$1;
(statearr_1022890_1022965[(2)] = inst_1022817);

(statearr_1022890_1022965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (32))){
var inst_1022807 = (state_1022864[(9)]);
var inst_1022805 = (state_1022864[(10)]);
var inst_1022804 = (state_1022864[(20)]);
var inst_1022806 = (state_1022864[(21)]);
var inst_1022819 = (state_1022864[(2)]);
var inst_1022820 = (inst_1022807 + (1));
var tmp1022885 = inst_1022805;
var tmp1022886 = inst_1022804;
var tmp1022887 = inst_1022806;
var inst_1022804__$1 = tmp1022886;
var inst_1022805__$1 = tmp1022885;
var inst_1022806__$1 = tmp1022887;
var inst_1022807__$1 = inst_1022820;
var state_1022864__$1 = (function (){var statearr_1022891 = state_1022864;
(statearr_1022891[(9)] = inst_1022807__$1);

(statearr_1022891[(10)] = inst_1022805__$1);

(statearr_1022891[(22)] = inst_1022819);

(statearr_1022891[(20)] = inst_1022804__$1);

(statearr_1022891[(21)] = inst_1022806__$1);

return statearr_1022891;
})();
var statearr_1022892_1022966 = state_1022864__$1;
(statearr_1022892_1022966[(2)] = null);

(statearr_1022892_1022966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (40))){
var inst_1022832 = (state_1022864[(23)]);
var inst_1022836 = done.call(null,null);
var inst_1022837 = cljs.core.async.untap_STAR_.call(null,m,inst_1022832);
var state_1022864__$1 = (function (){var statearr_1022893 = state_1022864;
(statearr_1022893[(24)] = inst_1022836);

return statearr_1022893;
})();
var statearr_1022894_1022967 = state_1022864__$1;
(statearr_1022894_1022967[(2)] = inst_1022837);

(statearr_1022894_1022967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (33))){
var inst_1022823 = (state_1022864[(25)]);
var inst_1022825 = cljs.core.chunked_seq_QMARK_.call(null,inst_1022823);
var state_1022864__$1 = state_1022864;
if(inst_1022825){
var statearr_1022895_1022968 = state_1022864__$1;
(statearr_1022895_1022968[(1)] = (36));

} else {
var statearr_1022896_1022969 = state_1022864__$1;
(statearr_1022896_1022969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (13))){
var inst_1022755 = (state_1022864[(26)]);
var inst_1022758 = cljs.core.async.close_BANG_.call(null,inst_1022755);
var state_1022864__$1 = state_1022864;
var statearr_1022897_1022970 = state_1022864__$1;
(statearr_1022897_1022970[(2)] = inst_1022758);

(statearr_1022897_1022970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (22))){
var inst_1022776 = (state_1022864[(8)]);
var inst_1022779 = cljs.core.async.close_BANG_.call(null,inst_1022776);
var state_1022864__$1 = state_1022864;
var statearr_1022898_1022971 = state_1022864__$1;
(statearr_1022898_1022971[(2)] = inst_1022779);

(statearr_1022898_1022971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (36))){
var inst_1022823 = (state_1022864[(25)]);
var inst_1022827 = cljs.core.chunk_first.call(null,inst_1022823);
var inst_1022828 = cljs.core.chunk_rest.call(null,inst_1022823);
var inst_1022829 = cljs.core.count.call(null,inst_1022827);
var inst_1022804 = inst_1022828;
var inst_1022805 = inst_1022827;
var inst_1022806 = inst_1022829;
var inst_1022807 = (0);
var state_1022864__$1 = (function (){var statearr_1022899 = state_1022864;
(statearr_1022899[(9)] = inst_1022807);

(statearr_1022899[(10)] = inst_1022805);

(statearr_1022899[(20)] = inst_1022804);

(statearr_1022899[(21)] = inst_1022806);

return statearr_1022899;
})();
var statearr_1022900_1022972 = state_1022864__$1;
(statearr_1022900_1022972[(2)] = null);

(statearr_1022900_1022972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (41))){
var inst_1022823 = (state_1022864[(25)]);
var inst_1022839 = (state_1022864[(2)]);
var inst_1022840 = cljs.core.next.call(null,inst_1022823);
var inst_1022804 = inst_1022840;
var inst_1022805 = null;
var inst_1022806 = (0);
var inst_1022807 = (0);
var state_1022864__$1 = (function (){var statearr_1022901 = state_1022864;
(statearr_1022901[(9)] = inst_1022807);

(statearr_1022901[(10)] = inst_1022805);

(statearr_1022901[(27)] = inst_1022839);

(statearr_1022901[(20)] = inst_1022804);

(statearr_1022901[(21)] = inst_1022806);

return statearr_1022901;
})();
var statearr_1022902_1022973 = state_1022864__$1;
(statearr_1022902_1022973[(2)] = null);

(statearr_1022902_1022973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (43))){
var state_1022864__$1 = state_1022864;
var statearr_1022903_1022974 = state_1022864__$1;
(statearr_1022903_1022974[(2)] = null);

(statearr_1022903_1022974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (29))){
var inst_1022848 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022904_1022975 = state_1022864__$1;
(statearr_1022904_1022975[(2)] = inst_1022848);

(statearr_1022904_1022975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (44))){
var inst_1022857 = (state_1022864[(2)]);
var state_1022864__$1 = (function (){var statearr_1022905 = state_1022864;
(statearr_1022905[(28)] = inst_1022857);

return statearr_1022905;
})();
var statearr_1022906_1022976 = state_1022864__$1;
(statearr_1022906_1022976[(2)] = null);

(statearr_1022906_1022976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (6))){
var inst_1022796 = (state_1022864[(29)]);
var inst_1022795 = cljs.core.deref.call(null,cs);
var inst_1022796__$1 = cljs.core.keys.call(null,inst_1022795);
var inst_1022797 = cljs.core.count.call(null,inst_1022796__$1);
var inst_1022798 = cljs.core.reset_BANG_.call(null,dctr,inst_1022797);
var inst_1022803 = cljs.core.seq.call(null,inst_1022796__$1);
var inst_1022804 = inst_1022803;
var inst_1022805 = null;
var inst_1022806 = (0);
var inst_1022807 = (0);
var state_1022864__$1 = (function (){var statearr_1022907 = state_1022864;
(statearr_1022907[(9)] = inst_1022807);

(statearr_1022907[(10)] = inst_1022805);

(statearr_1022907[(30)] = inst_1022798);

(statearr_1022907[(20)] = inst_1022804);

(statearr_1022907[(29)] = inst_1022796__$1);

(statearr_1022907[(21)] = inst_1022806);

return statearr_1022907;
})();
var statearr_1022908_1022977 = state_1022864__$1;
(statearr_1022908_1022977[(2)] = null);

(statearr_1022908_1022977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (28))){
var inst_1022823 = (state_1022864[(25)]);
var inst_1022804 = (state_1022864[(20)]);
var inst_1022823__$1 = cljs.core.seq.call(null,inst_1022804);
var state_1022864__$1 = (function (){var statearr_1022909 = state_1022864;
(statearr_1022909[(25)] = inst_1022823__$1);

return statearr_1022909;
})();
if(inst_1022823__$1){
var statearr_1022910_1022978 = state_1022864__$1;
(statearr_1022910_1022978[(1)] = (33));

} else {
var statearr_1022911_1022979 = state_1022864__$1;
(statearr_1022911_1022979[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (25))){
var inst_1022807 = (state_1022864[(9)]);
var inst_1022806 = (state_1022864[(21)]);
var inst_1022809 = (inst_1022807 < inst_1022806);
var inst_1022810 = inst_1022809;
var state_1022864__$1 = state_1022864;
if(cljs.core.truth_(inst_1022810)){
var statearr_1022912_1022980 = state_1022864__$1;
(statearr_1022912_1022980[(1)] = (27));

} else {
var statearr_1022913_1022981 = state_1022864__$1;
(statearr_1022913_1022981[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (34))){
var state_1022864__$1 = state_1022864;
var statearr_1022914_1022982 = state_1022864__$1;
(statearr_1022914_1022982[(2)] = null);

(statearr_1022914_1022982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (17))){
var state_1022864__$1 = state_1022864;
var statearr_1022915_1022983 = state_1022864__$1;
(statearr_1022915_1022983[(2)] = null);

(statearr_1022915_1022983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (3))){
var inst_1022862 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1022864__$1,inst_1022862);
} else {
if((state_val_1022865 === (12))){
var inst_1022791 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022916_1022984 = state_1022864__$1;
(statearr_1022916_1022984[(2)] = inst_1022791);

(statearr_1022916_1022984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (2))){
var state_1022864__$1 = state_1022864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022864__$1,(4),ch);
} else {
if((state_val_1022865 === (23))){
var state_1022864__$1 = state_1022864;
var statearr_1022917_1022985 = state_1022864__$1;
(statearr_1022917_1022985[(2)] = null);

(statearr_1022917_1022985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (35))){
var inst_1022846 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022918_1022986 = state_1022864__$1;
(statearr_1022918_1022986[(2)] = inst_1022846);

(statearr_1022918_1022986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (19))){
var inst_1022765 = (state_1022864[(7)]);
var inst_1022769 = cljs.core.chunk_first.call(null,inst_1022765);
var inst_1022770 = cljs.core.chunk_rest.call(null,inst_1022765);
var inst_1022771 = cljs.core.count.call(null,inst_1022769);
var inst_1022745 = inst_1022770;
var inst_1022746 = inst_1022769;
var inst_1022747 = inst_1022771;
var inst_1022748 = (0);
var state_1022864__$1 = (function (){var statearr_1022919 = state_1022864;
(statearr_1022919[(13)] = inst_1022748);

(statearr_1022919[(14)] = inst_1022745);

(statearr_1022919[(16)] = inst_1022747);

(statearr_1022919[(17)] = inst_1022746);

return statearr_1022919;
})();
var statearr_1022920_1022987 = state_1022864__$1;
(statearr_1022920_1022987[(2)] = null);

(statearr_1022920_1022987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (11))){
var inst_1022765 = (state_1022864[(7)]);
var inst_1022745 = (state_1022864[(14)]);
var inst_1022765__$1 = cljs.core.seq.call(null,inst_1022745);
var state_1022864__$1 = (function (){var statearr_1022921 = state_1022864;
(statearr_1022921[(7)] = inst_1022765__$1);

return statearr_1022921;
})();
if(inst_1022765__$1){
var statearr_1022922_1022988 = state_1022864__$1;
(statearr_1022922_1022988[(1)] = (16));

} else {
var statearr_1022923_1022989 = state_1022864__$1;
(statearr_1022923_1022989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (9))){
var inst_1022793 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022924_1022990 = state_1022864__$1;
(statearr_1022924_1022990[(2)] = inst_1022793);

(statearr_1022924_1022990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (5))){
var inst_1022743 = cljs.core.deref.call(null,cs);
var inst_1022744 = cljs.core.seq.call(null,inst_1022743);
var inst_1022745 = inst_1022744;
var inst_1022746 = null;
var inst_1022747 = (0);
var inst_1022748 = (0);
var state_1022864__$1 = (function (){var statearr_1022925 = state_1022864;
(statearr_1022925[(13)] = inst_1022748);

(statearr_1022925[(14)] = inst_1022745);

(statearr_1022925[(16)] = inst_1022747);

(statearr_1022925[(17)] = inst_1022746);

return statearr_1022925;
})();
var statearr_1022926_1022991 = state_1022864__$1;
(statearr_1022926_1022991[(2)] = null);

(statearr_1022926_1022991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (14))){
var state_1022864__$1 = state_1022864;
var statearr_1022927_1022992 = state_1022864__$1;
(statearr_1022927_1022992[(2)] = null);

(statearr_1022927_1022992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (45))){
var inst_1022854 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022928_1022993 = state_1022864__$1;
(statearr_1022928_1022993[(2)] = inst_1022854);

(statearr_1022928_1022993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (26))){
var inst_1022796 = (state_1022864[(29)]);
var inst_1022850 = (state_1022864[(2)]);
var inst_1022851 = cljs.core.seq.call(null,inst_1022796);
var state_1022864__$1 = (function (){var statearr_1022929 = state_1022864;
(statearr_1022929[(31)] = inst_1022850);

return statearr_1022929;
})();
if(inst_1022851){
var statearr_1022930_1022994 = state_1022864__$1;
(statearr_1022930_1022994[(1)] = (42));

} else {
var statearr_1022931_1022995 = state_1022864__$1;
(statearr_1022931_1022995[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (16))){
var inst_1022765 = (state_1022864[(7)]);
var inst_1022767 = cljs.core.chunked_seq_QMARK_.call(null,inst_1022765);
var state_1022864__$1 = state_1022864;
if(inst_1022767){
var statearr_1022932_1022996 = state_1022864__$1;
(statearr_1022932_1022996[(1)] = (19));

} else {
var statearr_1022933_1022997 = state_1022864__$1;
(statearr_1022933_1022997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (38))){
var inst_1022843 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022934_1022998 = state_1022864__$1;
(statearr_1022934_1022998[(2)] = inst_1022843);

(statearr_1022934_1022998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (30))){
var state_1022864__$1 = state_1022864;
var statearr_1022935_1022999 = state_1022864__$1;
(statearr_1022935_1022999[(2)] = null);

(statearr_1022935_1022999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (10))){
var inst_1022748 = (state_1022864[(13)]);
var inst_1022746 = (state_1022864[(17)]);
var inst_1022754 = cljs.core._nth.call(null,inst_1022746,inst_1022748);
var inst_1022755 = cljs.core.nth.call(null,inst_1022754,(0),null);
var inst_1022756 = cljs.core.nth.call(null,inst_1022754,(1),null);
var state_1022864__$1 = (function (){var statearr_1022936 = state_1022864;
(statearr_1022936[(26)] = inst_1022755);

return statearr_1022936;
})();
if(cljs.core.truth_(inst_1022756)){
var statearr_1022937_1023000 = state_1022864__$1;
(statearr_1022937_1023000[(1)] = (13));

} else {
var statearr_1022938_1023001 = state_1022864__$1;
(statearr_1022938_1023001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (18))){
var inst_1022789 = (state_1022864[(2)]);
var state_1022864__$1 = state_1022864;
var statearr_1022939_1023002 = state_1022864__$1;
(statearr_1022939_1023002[(2)] = inst_1022789);

(statearr_1022939_1023002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (42))){
var state_1022864__$1 = state_1022864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1022864__$1,(45),dchan);
} else {
if((state_val_1022865 === (37))){
var inst_1022823 = (state_1022864[(25)]);
var inst_1022832 = (state_1022864[(23)]);
var inst_1022736 = (state_1022864[(12)]);
var inst_1022832__$1 = cljs.core.first.call(null,inst_1022823);
var inst_1022833 = cljs.core.async.put_BANG_.call(null,inst_1022832__$1,inst_1022736,done);
var state_1022864__$1 = (function (){var statearr_1022940 = state_1022864;
(statearr_1022940[(23)] = inst_1022832__$1);

return statearr_1022940;
})();
if(cljs.core.truth_(inst_1022833)){
var statearr_1022941_1023003 = state_1022864__$1;
(statearr_1022941_1023003[(1)] = (39));

} else {
var statearr_1022942_1023004 = state_1022864__$1;
(statearr_1022942_1023004[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1022865 === (8))){
var inst_1022748 = (state_1022864[(13)]);
var inst_1022747 = (state_1022864[(16)]);
var inst_1022750 = (inst_1022748 < inst_1022747);
var inst_1022751 = inst_1022750;
var state_1022864__$1 = state_1022864;
if(cljs.core.truth_(inst_1022751)){
var statearr_1022943_1023005 = state_1022864__$1;
(statearr_1022943_1023005[(1)] = (10));

} else {
var statearr_1022944_1023006 = state_1022864__$1;
(statearr_1022944_1023006[(1)] = (11));

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
});})(c__9199__auto___1022952,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1022952,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1022948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1022948[(0)] = state_machine__9185__auto__);

(statearr_1022948[(1)] = (1));

return statearr_1022948;
});
var state_machine__9185__auto____1 = (function (state_1022864){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1022864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1022949){if((e1022949 instanceof Object)){
var ex__9188__auto__ = e1022949;
var statearr_1022950_1023007 = state_1022864;
(statearr_1022950_1023007[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1022864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1022949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023008 = state_1022864;
state_1022864 = G__1023008;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1022864){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1022864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1022952,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1022951 = f__9200__auto__.call(null);
(statearr_1022951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1022952);

return statearr_1022951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1022952,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj1023010 = {};
return obj1023010;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__1023011){
var map__1023016 = p__1023011;
var map__1023016__$1 = ((cljs.core.seq_QMARK_.call(null,map__1023016))?cljs.core.apply.call(null,cljs.core.hash_map,map__1023016):map__1023016);
var opts = map__1023016__$1;
var statearr_1023017_1023020 = state;
(statearr_1023017_1023020[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__1023016,map__1023016__$1,opts){
return (function (val){
var statearr_1023018_1023021 = state;
(statearr_1023018_1023021[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1023016,map__1023016__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_1023019_1023022 = state;
(statearr_1023019_1023022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__1023011 = null;
if (arguments.length > 3) {
  p__1023011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__1023011);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__1023023){
var state = cljs.core.first(arglist__1023023);
arglist__1023023 = cljs.core.next(arglist__1023023);
var cont_block = cljs.core.first(arglist__1023023);
arglist__1023023 = cljs.core.next(arglist__1023023);
var ports = cljs.core.first(arglist__1023023);
var p__1023011 = cljs.core.rest(arglist__1023023);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__1023011);
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
if(typeof cljs.core.async.t1023143 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023143 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1023144){
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
this.meta1023144 = meta1023144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023143.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t1023143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t1023143.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1023143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1023145){
var self__ = this;
var _1023145__$1 = this;
return self__.meta1023144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1023145,meta1023144__$1){
var self__ = this;
var _1023145__$1 = this;
return (new cljs.core.async.t1023143(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1023144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t1023143.cljs$lang$type = true;

cljs.core.async.t1023143.cljs$lang$ctorStr = "cljs.core.async/t1023143";

cljs.core.async.t1023143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t1023143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t1023143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1023144){
return (new cljs.core.async.t1023143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1023144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t1023143(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1023262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1023215){
var state_val_1023216 = (state_1023215[(1)]);
if((state_val_1023216 === (7))){
var inst_1023159 = (state_1023215[(7)]);
var inst_1023164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1023159);
var state_1023215__$1 = state_1023215;
var statearr_1023217_1023263 = state_1023215__$1;
(statearr_1023217_1023263[(2)] = inst_1023164);

(statearr_1023217_1023263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (20))){
var inst_1023174 = (state_1023215[(8)]);
var state_1023215__$1 = state_1023215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1023215__$1,(23),out,inst_1023174);
} else {
if((state_val_1023216 === (1))){
var inst_1023149 = (state_1023215[(9)]);
var inst_1023149__$1 = calc_state.call(null);
var inst_1023150 = cljs.core.seq_QMARK_.call(null,inst_1023149__$1);
var state_1023215__$1 = (function (){var statearr_1023218 = state_1023215;
(statearr_1023218[(9)] = inst_1023149__$1);

return statearr_1023218;
})();
if(inst_1023150){
var statearr_1023219_1023264 = state_1023215__$1;
(statearr_1023219_1023264[(1)] = (2));

} else {
var statearr_1023220_1023265 = state_1023215__$1;
(statearr_1023220_1023265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (24))){
var inst_1023167 = (state_1023215[(10)]);
var inst_1023159 = inst_1023167;
var state_1023215__$1 = (function (){var statearr_1023221 = state_1023215;
(statearr_1023221[(7)] = inst_1023159);

return statearr_1023221;
})();
var statearr_1023222_1023266 = state_1023215__$1;
(statearr_1023222_1023266[(2)] = null);

(statearr_1023222_1023266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (4))){
var inst_1023149 = (state_1023215[(9)]);
var inst_1023155 = (state_1023215[(2)]);
var inst_1023156 = cljs.core.get.call(null,inst_1023155,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1023157 = cljs.core.get.call(null,inst_1023155,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1023158 = cljs.core.get.call(null,inst_1023155,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1023159 = inst_1023149;
var state_1023215__$1 = (function (){var statearr_1023223 = state_1023215;
(statearr_1023223[(11)] = inst_1023156);

(statearr_1023223[(12)] = inst_1023158);

(statearr_1023223[(7)] = inst_1023159);

(statearr_1023223[(13)] = inst_1023157);

return statearr_1023223;
})();
var statearr_1023224_1023267 = state_1023215__$1;
(statearr_1023224_1023267[(2)] = null);

(statearr_1023224_1023267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (15))){
var state_1023215__$1 = state_1023215;
var statearr_1023225_1023268 = state_1023215__$1;
(statearr_1023225_1023268[(2)] = null);

(statearr_1023225_1023268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (21))){
var inst_1023167 = (state_1023215[(10)]);
var inst_1023159 = inst_1023167;
var state_1023215__$1 = (function (){var statearr_1023226 = state_1023215;
(statearr_1023226[(7)] = inst_1023159);

return statearr_1023226;
})();
var statearr_1023227_1023269 = state_1023215__$1;
(statearr_1023227_1023269[(2)] = null);

(statearr_1023227_1023269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (13))){
var inst_1023211 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
var statearr_1023228_1023270 = state_1023215__$1;
(statearr_1023228_1023270[(2)] = inst_1023211);

(statearr_1023228_1023270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (22))){
var inst_1023209 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
var statearr_1023229_1023271 = state_1023215__$1;
(statearr_1023229_1023271[(2)] = inst_1023209);

(statearr_1023229_1023271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (6))){
var inst_1023213 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1023215__$1,inst_1023213);
} else {
if((state_val_1023216 === (25))){
var state_1023215__$1 = state_1023215;
var statearr_1023230_1023272 = state_1023215__$1;
(statearr_1023230_1023272[(2)] = null);

(statearr_1023230_1023272[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (17))){
var inst_1023189 = (state_1023215[(14)]);
var state_1023215__$1 = state_1023215;
var statearr_1023231_1023273 = state_1023215__$1;
(statearr_1023231_1023273[(2)] = inst_1023189);

(statearr_1023231_1023273[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (3))){
var inst_1023149 = (state_1023215[(9)]);
var state_1023215__$1 = state_1023215;
var statearr_1023232_1023274 = state_1023215__$1;
(statearr_1023232_1023274[(2)] = inst_1023149);

(statearr_1023232_1023274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (12))){
var inst_1023175 = (state_1023215[(15)]);
var inst_1023170 = (state_1023215[(16)]);
var inst_1023189 = (state_1023215[(14)]);
var inst_1023189__$1 = inst_1023170.call(null,inst_1023175);
var state_1023215__$1 = (function (){var statearr_1023233 = state_1023215;
(statearr_1023233[(14)] = inst_1023189__$1);

return statearr_1023233;
})();
if(cljs.core.truth_(inst_1023189__$1)){
var statearr_1023234_1023275 = state_1023215__$1;
(statearr_1023234_1023275[(1)] = (17));

} else {
var statearr_1023235_1023276 = state_1023215__$1;
(statearr_1023235_1023276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (2))){
var inst_1023149 = (state_1023215[(9)]);
var inst_1023152 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1023149);
var state_1023215__$1 = state_1023215;
var statearr_1023236_1023277 = state_1023215__$1;
(statearr_1023236_1023277[(2)] = inst_1023152);

(statearr_1023236_1023277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (23))){
var inst_1023200 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
if(cljs.core.truth_(inst_1023200)){
var statearr_1023237_1023278 = state_1023215__$1;
(statearr_1023237_1023278[(1)] = (24));

} else {
var statearr_1023238_1023279 = state_1023215__$1;
(statearr_1023238_1023279[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (19))){
var inst_1023197 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
if(cljs.core.truth_(inst_1023197)){
var statearr_1023239_1023280 = state_1023215__$1;
(statearr_1023239_1023280[(1)] = (20));

} else {
var statearr_1023240_1023281 = state_1023215__$1;
(statearr_1023240_1023281[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (11))){
var inst_1023174 = (state_1023215[(8)]);
var inst_1023180 = (inst_1023174 == null);
var state_1023215__$1 = state_1023215;
if(cljs.core.truth_(inst_1023180)){
var statearr_1023241_1023282 = state_1023215__$1;
(statearr_1023241_1023282[(1)] = (14));

} else {
var statearr_1023242_1023283 = state_1023215__$1;
(statearr_1023242_1023283[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (9))){
var inst_1023167 = (state_1023215[(10)]);
var inst_1023167__$1 = (state_1023215[(2)]);
var inst_1023168 = cljs.core.get.call(null,inst_1023167__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1023169 = cljs.core.get.call(null,inst_1023167__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1023170 = cljs.core.get.call(null,inst_1023167__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_1023215__$1 = (function (){var statearr_1023243 = state_1023215;
(statearr_1023243[(17)] = inst_1023169);

(statearr_1023243[(10)] = inst_1023167__$1);

(statearr_1023243[(16)] = inst_1023170);

return statearr_1023243;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1023215__$1,(10),inst_1023168);
} else {
if((state_val_1023216 === (5))){
var inst_1023159 = (state_1023215[(7)]);
var inst_1023162 = cljs.core.seq_QMARK_.call(null,inst_1023159);
var state_1023215__$1 = state_1023215;
if(inst_1023162){
var statearr_1023244_1023284 = state_1023215__$1;
(statearr_1023244_1023284[(1)] = (7));

} else {
var statearr_1023245_1023285 = state_1023215__$1;
(statearr_1023245_1023285[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (14))){
var inst_1023175 = (state_1023215[(15)]);
var inst_1023182 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1023175);
var state_1023215__$1 = state_1023215;
var statearr_1023246_1023286 = state_1023215__$1;
(statearr_1023246_1023286[(2)] = inst_1023182);

(statearr_1023246_1023286[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (26))){
var inst_1023205 = (state_1023215[(2)]);
var state_1023215__$1 = state_1023215;
var statearr_1023247_1023287 = state_1023215__$1;
(statearr_1023247_1023287[(2)] = inst_1023205);

(statearr_1023247_1023287[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (16))){
var inst_1023185 = (state_1023215[(2)]);
var inst_1023186 = calc_state.call(null);
var inst_1023159 = inst_1023186;
var state_1023215__$1 = (function (){var statearr_1023248 = state_1023215;
(statearr_1023248[(18)] = inst_1023185);

(statearr_1023248[(7)] = inst_1023159);

return statearr_1023248;
})();
var statearr_1023249_1023288 = state_1023215__$1;
(statearr_1023249_1023288[(2)] = null);

(statearr_1023249_1023288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (10))){
var inst_1023174 = (state_1023215[(8)]);
var inst_1023175 = (state_1023215[(15)]);
var inst_1023173 = (state_1023215[(2)]);
var inst_1023174__$1 = cljs.core.nth.call(null,inst_1023173,(0),null);
var inst_1023175__$1 = cljs.core.nth.call(null,inst_1023173,(1),null);
var inst_1023176 = (inst_1023174__$1 == null);
var inst_1023177 = cljs.core._EQ_.call(null,inst_1023175__$1,change);
var inst_1023178 = (inst_1023176) || (inst_1023177);
var state_1023215__$1 = (function (){var statearr_1023250 = state_1023215;
(statearr_1023250[(8)] = inst_1023174__$1);

(statearr_1023250[(15)] = inst_1023175__$1);

return statearr_1023250;
})();
if(cljs.core.truth_(inst_1023178)){
var statearr_1023251_1023289 = state_1023215__$1;
(statearr_1023251_1023289[(1)] = (11));

} else {
var statearr_1023252_1023290 = state_1023215__$1;
(statearr_1023252_1023290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (18))){
var inst_1023169 = (state_1023215[(17)]);
var inst_1023175 = (state_1023215[(15)]);
var inst_1023170 = (state_1023215[(16)]);
var inst_1023192 = cljs.core.empty_QMARK_.call(null,inst_1023170);
var inst_1023193 = inst_1023169.call(null,inst_1023175);
var inst_1023194 = cljs.core.not.call(null,inst_1023193);
var inst_1023195 = (inst_1023192) && (inst_1023194);
var state_1023215__$1 = state_1023215;
var statearr_1023253_1023291 = state_1023215__$1;
(statearr_1023253_1023291[(2)] = inst_1023195);

(statearr_1023253_1023291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023216 === (8))){
var inst_1023159 = (state_1023215[(7)]);
var state_1023215__$1 = state_1023215;
var statearr_1023254_1023292 = state_1023215__$1;
(statearr_1023254_1023292[(2)] = inst_1023159);

(statearr_1023254_1023292[(1)] = (9));


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
});})(c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1023258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1023258[(0)] = state_machine__9185__auto__);

(statearr_1023258[(1)] = (1));

return statearr_1023258;
});
var state_machine__9185__auto____1 = (function (state_1023215){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1023215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1023259){if((e1023259 instanceof Object)){
var ex__9188__auto__ = e1023259;
var statearr_1023260_1023293 = state_1023215;
(statearr_1023260_1023293[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1023259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023294 = state_1023215;
state_1023215 = G__1023294;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1023215){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1023215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_1023261 = f__9200__auto__.call(null);
(statearr_1023261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1023262);

return statearr_1023261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1023262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj1023296 = {};
return obj1023296;
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
return (function (p1__1023297_SHARP_){
if(cljs.core.truth_(p1__1023297_SHARP_.call(null,topic))){
return p1__1023297_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1023297_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t1023420 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023420 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta1023421){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta1023421 = meta1023421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023420.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t1023420.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t1023420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t1023420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1023422){
var self__ = this;
var _1023422__$1 = this;
return self__.meta1023421;
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1023422,meta1023421__$1){
var self__ = this;
var _1023422__$1 = this;
return (new cljs.core.async.t1023420(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta1023421__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t1023420.cljs$lang$type = true;

cljs.core.async.t1023420.cljs$lang$ctorStr = "cljs.core.async/t1023420";

cljs.core.async.t1023420.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023420");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t1023420 = ((function (mults,ensure_mult){
return (function __GT_t1023420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1023421){
return (new cljs.core.async.t1023420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta1023421));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t1023420(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___1023542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1023542,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1023542,mults,ensure_mult,p){
return (function (state_1023494){
var state_val_1023495 = (state_1023494[(1)]);
if((state_val_1023495 === (7))){
var inst_1023490 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023496_1023543 = state_1023494__$1;
(statearr_1023496_1023543[(2)] = inst_1023490);

(statearr_1023496_1023543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (20))){
var state_1023494__$1 = state_1023494;
var statearr_1023497_1023544 = state_1023494__$1;
(statearr_1023497_1023544[(2)] = null);

(statearr_1023497_1023544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (1))){
var state_1023494__$1 = state_1023494;
var statearr_1023498_1023545 = state_1023494__$1;
(statearr_1023498_1023545[(2)] = null);

(statearr_1023498_1023545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (24))){
var inst_1023473 = (state_1023494[(7)]);
var inst_1023482 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1023473);
var state_1023494__$1 = state_1023494;
var statearr_1023499_1023546 = state_1023494__$1;
(statearr_1023499_1023546[(2)] = inst_1023482);

(statearr_1023499_1023546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (4))){
var inst_1023425 = (state_1023494[(8)]);
var inst_1023425__$1 = (state_1023494[(2)]);
var inst_1023426 = (inst_1023425__$1 == null);
var state_1023494__$1 = (function (){var statearr_1023500 = state_1023494;
(statearr_1023500[(8)] = inst_1023425__$1);

return statearr_1023500;
})();
if(cljs.core.truth_(inst_1023426)){
var statearr_1023501_1023547 = state_1023494__$1;
(statearr_1023501_1023547[(1)] = (5));

} else {
var statearr_1023502_1023548 = state_1023494__$1;
(statearr_1023502_1023548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (15))){
var inst_1023467 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023503_1023549 = state_1023494__$1;
(statearr_1023503_1023549[(2)] = inst_1023467);

(statearr_1023503_1023549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (21))){
var inst_1023487 = (state_1023494[(2)]);
var state_1023494__$1 = (function (){var statearr_1023504 = state_1023494;
(statearr_1023504[(9)] = inst_1023487);

return statearr_1023504;
})();
var statearr_1023505_1023550 = state_1023494__$1;
(statearr_1023505_1023550[(2)] = null);

(statearr_1023505_1023550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (13))){
var inst_1023449 = (state_1023494[(10)]);
var inst_1023451 = cljs.core.chunked_seq_QMARK_.call(null,inst_1023449);
var state_1023494__$1 = state_1023494;
if(inst_1023451){
var statearr_1023506_1023551 = state_1023494__$1;
(statearr_1023506_1023551[(1)] = (16));

} else {
var statearr_1023507_1023552 = state_1023494__$1;
(statearr_1023507_1023552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (22))){
var inst_1023479 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
if(cljs.core.truth_(inst_1023479)){
var statearr_1023508_1023553 = state_1023494__$1;
(statearr_1023508_1023553[(1)] = (23));

} else {
var statearr_1023509_1023554 = state_1023494__$1;
(statearr_1023509_1023554[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (6))){
var inst_1023473 = (state_1023494[(7)]);
var inst_1023425 = (state_1023494[(8)]);
var inst_1023475 = (state_1023494[(11)]);
var inst_1023473__$1 = topic_fn.call(null,inst_1023425);
var inst_1023474 = cljs.core.deref.call(null,mults);
var inst_1023475__$1 = cljs.core.get.call(null,inst_1023474,inst_1023473__$1);
var state_1023494__$1 = (function (){var statearr_1023510 = state_1023494;
(statearr_1023510[(7)] = inst_1023473__$1);

(statearr_1023510[(11)] = inst_1023475__$1);

return statearr_1023510;
})();
if(cljs.core.truth_(inst_1023475__$1)){
var statearr_1023511_1023555 = state_1023494__$1;
(statearr_1023511_1023555[(1)] = (19));

} else {
var statearr_1023512_1023556 = state_1023494__$1;
(statearr_1023512_1023556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (25))){
var inst_1023484 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023513_1023557 = state_1023494__$1;
(statearr_1023513_1023557[(2)] = inst_1023484);

(statearr_1023513_1023557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (17))){
var inst_1023449 = (state_1023494[(10)]);
var inst_1023458 = cljs.core.first.call(null,inst_1023449);
var inst_1023459 = cljs.core.async.muxch_STAR_.call(null,inst_1023458);
var inst_1023460 = cljs.core.async.close_BANG_.call(null,inst_1023459);
var inst_1023461 = cljs.core.next.call(null,inst_1023449);
var inst_1023435 = inst_1023461;
var inst_1023436 = null;
var inst_1023437 = (0);
var inst_1023438 = (0);
var state_1023494__$1 = (function (){var statearr_1023514 = state_1023494;
(statearr_1023514[(12)] = inst_1023437);

(statearr_1023514[(13)] = inst_1023435);

(statearr_1023514[(14)] = inst_1023438);

(statearr_1023514[(15)] = inst_1023460);

(statearr_1023514[(16)] = inst_1023436);

return statearr_1023514;
})();
var statearr_1023515_1023558 = state_1023494__$1;
(statearr_1023515_1023558[(2)] = null);

(statearr_1023515_1023558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (3))){
var inst_1023492 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1023494__$1,inst_1023492);
} else {
if((state_val_1023495 === (12))){
var inst_1023469 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023516_1023559 = state_1023494__$1;
(statearr_1023516_1023559[(2)] = inst_1023469);

(statearr_1023516_1023559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (2))){
var state_1023494__$1 = state_1023494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1023494__$1,(4),ch);
} else {
if((state_val_1023495 === (23))){
var state_1023494__$1 = state_1023494;
var statearr_1023517_1023560 = state_1023494__$1;
(statearr_1023517_1023560[(2)] = null);

(statearr_1023517_1023560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (19))){
var inst_1023425 = (state_1023494[(8)]);
var inst_1023475 = (state_1023494[(11)]);
var inst_1023477 = cljs.core.async.muxch_STAR_.call(null,inst_1023475);
var state_1023494__$1 = state_1023494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1023494__$1,(22),inst_1023477,inst_1023425);
} else {
if((state_val_1023495 === (11))){
var inst_1023449 = (state_1023494[(10)]);
var inst_1023435 = (state_1023494[(13)]);
var inst_1023449__$1 = cljs.core.seq.call(null,inst_1023435);
var state_1023494__$1 = (function (){var statearr_1023518 = state_1023494;
(statearr_1023518[(10)] = inst_1023449__$1);

return statearr_1023518;
})();
if(inst_1023449__$1){
var statearr_1023519_1023561 = state_1023494__$1;
(statearr_1023519_1023561[(1)] = (13));

} else {
var statearr_1023520_1023562 = state_1023494__$1;
(statearr_1023520_1023562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (9))){
var inst_1023471 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023521_1023563 = state_1023494__$1;
(statearr_1023521_1023563[(2)] = inst_1023471);

(statearr_1023521_1023563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (5))){
var inst_1023432 = cljs.core.deref.call(null,mults);
var inst_1023433 = cljs.core.vals.call(null,inst_1023432);
var inst_1023434 = cljs.core.seq.call(null,inst_1023433);
var inst_1023435 = inst_1023434;
var inst_1023436 = null;
var inst_1023437 = (0);
var inst_1023438 = (0);
var state_1023494__$1 = (function (){var statearr_1023522 = state_1023494;
(statearr_1023522[(12)] = inst_1023437);

(statearr_1023522[(13)] = inst_1023435);

(statearr_1023522[(14)] = inst_1023438);

(statearr_1023522[(16)] = inst_1023436);

return statearr_1023522;
})();
var statearr_1023523_1023564 = state_1023494__$1;
(statearr_1023523_1023564[(2)] = null);

(statearr_1023523_1023564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (14))){
var state_1023494__$1 = state_1023494;
var statearr_1023527_1023565 = state_1023494__$1;
(statearr_1023527_1023565[(2)] = null);

(statearr_1023527_1023565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (16))){
var inst_1023449 = (state_1023494[(10)]);
var inst_1023453 = cljs.core.chunk_first.call(null,inst_1023449);
var inst_1023454 = cljs.core.chunk_rest.call(null,inst_1023449);
var inst_1023455 = cljs.core.count.call(null,inst_1023453);
var inst_1023435 = inst_1023454;
var inst_1023436 = inst_1023453;
var inst_1023437 = inst_1023455;
var inst_1023438 = (0);
var state_1023494__$1 = (function (){var statearr_1023528 = state_1023494;
(statearr_1023528[(12)] = inst_1023437);

(statearr_1023528[(13)] = inst_1023435);

(statearr_1023528[(14)] = inst_1023438);

(statearr_1023528[(16)] = inst_1023436);

return statearr_1023528;
})();
var statearr_1023529_1023566 = state_1023494__$1;
(statearr_1023529_1023566[(2)] = null);

(statearr_1023529_1023566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (10))){
var inst_1023437 = (state_1023494[(12)]);
var inst_1023435 = (state_1023494[(13)]);
var inst_1023438 = (state_1023494[(14)]);
var inst_1023436 = (state_1023494[(16)]);
var inst_1023443 = cljs.core._nth.call(null,inst_1023436,inst_1023438);
var inst_1023444 = cljs.core.async.muxch_STAR_.call(null,inst_1023443);
var inst_1023445 = cljs.core.async.close_BANG_.call(null,inst_1023444);
var inst_1023446 = (inst_1023438 + (1));
var tmp1023524 = inst_1023437;
var tmp1023525 = inst_1023435;
var tmp1023526 = inst_1023436;
var inst_1023435__$1 = tmp1023525;
var inst_1023436__$1 = tmp1023526;
var inst_1023437__$1 = tmp1023524;
var inst_1023438__$1 = inst_1023446;
var state_1023494__$1 = (function (){var statearr_1023530 = state_1023494;
(statearr_1023530[(12)] = inst_1023437__$1);

(statearr_1023530[(13)] = inst_1023435__$1);

(statearr_1023530[(14)] = inst_1023438__$1);

(statearr_1023530[(17)] = inst_1023445);

(statearr_1023530[(16)] = inst_1023436__$1);

return statearr_1023530;
})();
var statearr_1023531_1023567 = state_1023494__$1;
(statearr_1023531_1023567[(2)] = null);

(statearr_1023531_1023567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (18))){
var inst_1023464 = (state_1023494[(2)]);
var state_1023494__$1 = state_1023494;
var statearr_1023532_1023568 = state_1023494__$1;
(statearr_1023532_1023568[(2)] = inst_1023464);

(statearr_1023532_1023568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023495 === (8))){
var inst_1023437 = (state_1023494[(12)]);
var inst_1023438 = (state_1023494[(14)]);
var inst_1023440 = (inst_1023438 < inst_1023437);
var inst_1023441 = inst_1023440;
var state_1023494__$1 = state_1023494;
if(cljs.core.truth_(inst_1023441)){
var statearr_1023533_1023569 = state_1023494__$1;
(statearr_1023533_1023569[(1)] = (10));

} else {
var statearr_1023534_1023570 = state_1023494__$1;
(statearr_1023534_1023570[(1)] = (11));

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
});})(c__9199__auto___1023542,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___1023542,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1023538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1023538[(0)] = state_machine__9185__auto__);

(statearr_1023538[(1)] = (1));

return statearr_1023538;
});
var state_machine__9185__auto____1 = (function (state_1023494){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1023494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1023539){if((e1023539 instanceof Object)){
var ex__9188__auto__ = e1023539;
var statearr_1023540_1023571 = state_1023494;
(statearr_1023540_1023571[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1023539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023572 = state_1023494;
state_1023494 = G__1023572;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1023494){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1023494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1023542,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_1023541 = f__9200__auto__.call(null);
(statearr_1023541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1023542);

return statearr_1023541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1023542,mults,ensure_mult,p))
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
var c__9199__auto___1023709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1023679){
var state_val_1023680 = (state_1023679[(1)]);
if((state_val_1023680 === (7))){
var state_1023679__$1 = state_1023679;
var statearr_1023681_1023710 = state_1023679__$1;
(statearr_1023681_1023710[(2)] = null);

(statearr_1023681_1023710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (1))){
var state_1023679__$1 = state_1023679;
var statearr_1023682_1023711 = state_1023679__$1;
(statearr_1023682_1023711[(2)] = null);

(statearr_1023682_1023711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (4))){
var inst_1023643 = (state_1023679[(7)]);
var inst_1023645 = (inst_1023643 < cnt);
var state_1023679__$1 = state_1023679;
if(cljs.core.truth_(inst_1023645)){
var statearr_1023683_1023712 = state_1023679__$1;
(statearr_1023683_1023712[(1)] = (6));

} else {
var statearr_1023684_1023713 = state_1023679__$1;
(statearr_1023684_1023713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (15))){
var inst_1023675 = (state_1023679[(2)]);
var state_1023679__$1 = state_1023679;
var statearr_1023685_1023714 = state_1023679__$1;
(statearr_1023685_1023714[(2)] = inst_1023675);

(statearr_1023685_1023714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (13))){
var inst_1023668 = cljs.core.async.close_BANG_.call(null,out);
var state_1023679__$1 = state_1023679;
var statearr_1023686_1023715 = state_1023679__$1;
(statearr_1023686_1023715[(2)] = inst_1023668);

(statearr_1023686_1023715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (6))){
var state_1023679__$1 = state_1023679;
var statearr_1023687_1023716 = state_1023679__$1;
(statearr_1023687_1023716[(2)] = null);

(statearr_1023687_1023716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (3))){
var inst_1023677 = (state_1023679[(2)]);
var state_1023679__$1 = state_1023679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1023679__$1,inst_1023677);
} else {
if((state_val_1023680 === (12))){
var inst_1023665 = (state_1023679[(8)]);
var inst_1023665__$1 = (state_1023679[(2)]);
var inst_1023666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1023665__$1);
var state_1023679__$1 = (function (){var statearr_1023688 = state_1023679;
(statearr_1023688[(8)] = inst_1023665__$1);

return statearr_1023688;
})();
if(cljs.core.truth_(inst_1023666)){
var statearr_1023689_1023717 = state_1023679__$1;
(statearr_1023689_1023717[(1)] = (13));

} else {
var statearr_1023690_1023718 = state_1023679__$1;
(statearr_1023690_1023718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (2))){
var inst_1023642 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1023643 = (0);
var state_1023679__$1 = (function (){var statearr_1023691 = state_1023679;
(statearr_1023691[(7)] = inst_1023643);

(statearr_1023691[(9)] = inst_1023642);

return statearr_1023691;
})();
var statearr_1023692_1023719 = state_1023679__$1;
(statearr_1023692_1023719[(2)] = null);

(statearr_1023692_1023719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (11))){
var inst_1023643 = (state_1023679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1023679,(10),Object,null,(9));
var inst_1023652 = chs__$1.call(null,inst_1023643);
var inst_1023653 = done.call(null,inst_1023643);
var inst_1023654 = cljs.core.async.take_BANG_.call(null,inst_1023652,inst_1023653);
var state_1023679__$1 = state_1023679;
var statearr_1023693_1023720 = state_1023679__$1;
(statearr_1023693_1023720[(2)] = inst_1023654);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (9))){
var inst_1023643 = (state_1023679[(7)]);
var inst_1023656 = (state_1023679[(2)]);
var inst_1023657 = (inst_1023643 + (1));
var inst_1023643__$1 = inst_1023657;
var state_1023679__$1 = (function (){var statearr_1023694 = state_1023679;
(statearr_1023694[(7)] = inst_1023643__$1);

(statearr_1023694[(10)] = inst_1023656);

return statearr_1023694;
})();
var statearr_1023695_1023721 = state_1023679__$1;
(statearr_1023695_1023721[(2)] = null);

(statearr_1023695_1023721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (5))){
var inst_1023663 = (state_1023679[(2)]);
var state_1023679__$1 = (function (){var statearr_1023696 = state_1023679;
(statearr_1023696[(11)] = inst_1023663);

return statearr_1023696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1023679__$1,(12),dchan);
} else {
if((state_val_1023680 === (14))){
var inst_1023665 = (state_1023679[(8)]);
var inst_1023670 = cljs.core.apply.call(null,f,inst_1023665);
var state_1023679__$1 = state_1023679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1023679__$1,(16),out,inst_1023670);
} else {
if((state_val_1023680 === (16))){
var inst_1023672 = (state_1023679[(2)]);
var state_1023679__$1 = (function (){var statearr_1023697 = state_1023679;
(statearr_1023697[(12)] = inst_1023672);

return statearr_1023697;
})();
var statearr_1023698_1023722 = state_1023679__$1;
(statearr_1023698_1023722[(2)] = null);

(statearr_1023698_1023722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (10))){
var inst_1023647 = (state_1023679[(2)]);
var inst_1023648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1023679__$1 = (function (){var statearr_1023699 = state_1023679;
(statearr_1023699[(13)] = inst_1023647);

return statearr_1023699;
})();
var statearr_1023700_1023723 = state_1023679__$1;
(statearr_1023700_1023723[(2)] = inst_1023648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023680 === (8))){
var inst_1023661 = (state_1023679[(2)]);
var state_1023679__$1 = state_1023679;
var statearr_1023701_1023724 = state_1023679__$1;
(statearr_1023701_1023724[(2)] = inst_1023661);

(statearr_1023701_1023724[(1)] = (5));


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
});})(c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1023705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1023705[(0)] = state_machine__9185__auto__);

(statearr_1023705[(1)] = (1));

return statearr_1023705;
});
var state_machine__9185__auto____1 = (function (state_1023679){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1023679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1023706){if((e1023706 instanceof Object)){
var ex__9188__auto__ = e1023706;
var statearr_1023707_1023725 = state_1023679;
(statearr_1023707_1023725[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1023706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023726 = state_1023679;
state_1023679 = G__1023726;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1023679){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1023679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_1023708 = f__9200__auto__.call(null);
(statearr_1023708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1023709);

return statearr_1023708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1023709,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___1023834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1023834,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1023834,out){
return (function (state_1023810){
var state_val_1023811 = (state_1023810[(1)]);
if((state_val_1023811 === (7))){
var inst_1023789 = (state_1023810[(7)]);
var inst_1023790 = (state_1023810[(8)]);
var inst_1023789__$1 = (state_1023810[(2)]);
var inst_1023790__$1 = cljs.core.nth.call(null,inst_1023789__$1,(0),null);
var inst_1023791 = cljs.core.nth.call(null,inst_1023789__$1,(1),null);
var inst_1023792 = (inst_1023790__$1 == null);
var state_1023810__$1 = (function (){var statearr_1023812 = state_1023810;
(statearr_1023812[(7)] = inst_1023789__$1);

(statearr_1023812[(9)] = inst_1023791);

(statearr_1023812[(8)] = inst_1023790__$1);

return statearr_1023812;
})();
if(cljs.core.truth_(inst_1023792)){
var statearr_1023813_1023835 = state_1023810__$1;
(statearr_1023813_1023835[(1)] = (8));

} else {
var statearr_1023814_1023836 = state_1023810__$1;
(statearr_1023814_1023836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (1))){
var inst_1023781 = cljs.core.vec.call(null,chs);
var inst_1023782 = inst_1023781;
var state_1023810__$1 = (function (){var statearr_1023815 = state_1023810;
(statearr_1023815[(10)] = inst_1023782);

return statearr_1023815;
})();
var statearr_1023816_1023837 = state_1023810__$1;
(statearr_1023816_1023837[(2)] = null);

(statearr_1023816_1023837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (4))){
var inst_1023782 = (state_1023810[(10)]);
var state_1023810__$1 = state_1023810;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1023810__$1,(7),inst_1023782);
} else {
if((state_val_1023811 === (6))){
var inst_1023806 = (state_1023810[(2)]);
var state_1023810__$1 = state_1023810;
var statearr_1023817_1023838 = state_1023810__$1;
(statearr_1023817_1023838[(2)] = inst_1023806);

(statearr_1023817_1023838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (3))){
var inst_1023808 = (state_1023810[(2)]);
var state_1023810__$1 = state_1023810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1023810__$1,inst_1023808);
} else {
if((state_val_1023811 === (2))){
var inst_1023782 = (state_1023810[(10)]);
var inst_1023784 = cljs.core.count.call(null,inst_1023782);
var inst_1023785 = (inst_1023784 > (0));
var state_1023810__$1 = state_1023810;
if(cljs.core.truth_(inst_1023785)){
var statearr_1023819_1023839 = state_1023810__$1;
(statearr_1023819_1023839[(1)] = (4));

} else {
var statearr_1023820_1023840 = state_1023810__$1;
(statearr_1023820_1023840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (11))){
var inst_1023782 = (state_1023810[(10)]);
var inst_1023799 = (state_1023810[(2)]);
var tmp1023818 = inst_1023782;
var inst_1023782__$1 = tmp1023818;
var state_1023810__$1 = (function (){var statearr_1023821 = state_1023810;
(statearr_1023821[(10)] = inst_1023782__$1);

(statearr_1023821[(11)] = inst_1023799);

return statearr_1023821;
})();
var statearr_1023822_1023841 = state_1023810__$1;
(statearr_1023822_1023841[(2)] = null);

(statearr_1023822_1023841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (9))){
var inst_1023790 = (state_1023810[(8)]);
var state_1023810__$1 = state_1023810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1023810__$1,(11),out,inst_1023790);
} else {
if((state_val_1023811 === (5))){
var inst_1023804 = cljs.core.async.close_BANG_.call(null,out);
var state_1023810__$1 = state_1023810;
var statearr_1023823_1023842 = state_1023810__$1;
(statearr_1023823_1023842[(2)] = inst_1023804);

(statearr_1023823_1023842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (10))){
var inst_1023802 = (state_1023810[(2)]);
var state_1023810__$1 = state_1023810;
var statearr_1023824_1023843 = state_1023810__$1;
(statearr_1023824_1023843[(2)] = inst_1023802);

(statearr_1023824_1023843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023811 === (8))){
var inst_1023789 = (state_1023810[(7)]);
var inst_1023791 = (state_1023810[(9)]);
var inst_1023790 = (state_1023810[(8)]);
var inst_1023782 = (state_1023810[(10)]);
var inst_1023794 = (function (){var c = inst_1023791;
var v = inst_1023790;
var vec__1023787 = inst_1023789;
var cs = inst_1023782;
return ((function (c,v,vec__1023787,cs,inst_1023789,inst_1023791,inst_1023790,inst_1023782,state_val_1023811,c__9199__auto___1023834,out){
return (function (p1__1023727_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1023727_SHARP_);
});
;})(c,v,vec__1023787,cs,inst_1023789,inst_1023791,inst_1023790,inst_1023782,state_val_1023811,c__9199__auto___1023834,out))
})();
var inst_1023795 = cljs.core.filterv.call(null,inst_1023794,inst_1023782);
var inst_1023782__$1 = inst_1023795;
var state_1023810__$1 = (function (){var statearr_1023825 = state_1023810;
(statearr_1023825[(10)] = inst_1023782__$1);

return statearr_1023825;
})();
var statearr_1023826_1023844 = state_1023810__$1;
(statearr_1023826_1023844[(2)] = null);

(statearr_1023826_1023844[(1)] = (2));


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
});})(c__9199__auto___1023834,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1023834,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1023830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1023830[(0)] = state_machine__9185__auto__);

(statearr_1023830[(1)] = (1));

return statearr_1023830;
});
var state_machine__9185__auto____1 = (function (state_1023810){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1023810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1023831){if((e1023831 instanceof Object)){
var ex__9188__auto__ = e1023831;
var statearr_1023832_1023845 = state_1023810;
(statearr_1023832_1023845[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1023831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023846 = state_1023810;
state_1023810 = G__1023846;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1023810){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1023810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1023834,out))
})();
var state__9201__auto__ = (function (){var statearr_1023833 = f__9200__auto__.call(null);
(statearr_1023833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1023834);

return statearr_1023833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1023834,out))
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
var c__9199__auto___1023939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1023939,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1023939,out){
return (function (state_1023916){
var state_val_1023917 = (state_1023916[(1)]);
if((state_val_1023917 === (7))){
var inst_1023898 = (state_1023916[(7)]);
var inst_1023898__$1 = (state_1023916[(2)]);
var inst_1023899 = (inst_1023898__$1 == null);
var inst_1023900 = cljs.core.not.call(null,inst_1023899);
var state_1023916__$1 = (function (){var statearr_1023918 = state_1023916;
(statearr_1023918[(7)] = inst_1023898__$1);

return statearr_1023918;
})();
if(inst_1023900){
var statearr_1023919_1023940 = state_1023916__$1;
(statearr_1023919_1023940[(1)] = (8));

} else {
var statearr_1023920_1023941 = state_1023916__$1;
(statearr_1023920_1023941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (1))){
var inst_1023893 = (0);
var state_1023916__$1 = (function (){var statearr_1023921 = state_1023916;
(statearr_1023921[(8)] = inst_1023893);

return statearr_1023921;
})();
var statearr_1023922_1023942 = state_1023916__$1;
(statearr_1023922_1023942[(2)] = null);

(statearr_1023922_1023942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (4))){
var state_1023916__$1 = state_1023916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1023916__$1,(7),ch);
} else {
if((state_val_1023917 === (6))){
var inst_1023911 = (state_1023916[(2)]);
var state_1023916__$1 = state_1023916;
var statearr_1023923_1023943 = state_1023916__$1;
(statearr_1023923_1023943[(2)] = inst_1023911);

(statearr_1023923_1023943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (3))){
var inst_1023913 = (state_1023916[(2)]);
var inst_1023914 = cljs.core.async.close_BANG_.call(null,out);
var state_1023916__$1 = (function (){var statearr_1023924 = state_1023916;
(statearr_1023924[(9)] = inst_1023913);

return statearr_1023924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1023916__$1,inst_1023914);
} else {
if((state_val_1023917 === (2))){
var inst_1023893 = (state_1023916[(8)]);
var inst_1023895 = (inst_1023893 < n);
var state_1023916__$1 = state_1023916;
if(cljs.core.truth_(inst_1023895)){
var statearr_1023925_1023944 = state_1023916__$1;
(statearr_1023925_1023944[(1)] = (4));

} else {
var statearr_1023926_1023945 = state_1023916__$1;
(statearr_1023926_1023945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (11))){
var inst_1023893 = (state_1023916[(8)]);
var inst_1023903 = (state_1023916[(2)]);
var inst_1023904 = (inst_1023893 + (1));
var inst_1023893__$1 = inst_1023904;
var state_1023916__$1 = (function (){var statearr_1023927 = state_1023916;
(statearr_1023927[(8)] = inst_1023893__$1);

(statearr_1023927[(10)] = inst_1023903);

return statearr_1023927;
})();
var statearr_1023928_1023946 = state_1023916__$1;
(statearr_1023928_1023946[(2)] = null);

(statearr_1023928_1023946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (9))){
var state_1023916__$1 = state_1023916;
var statearr_1023929_1023947 = state_1023916__$1;
(statearr_1023929_1023947[(2)] = null);

(statearr_1023929_1023947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (5))){
var state_1023916__$1 = state_1023916;
var statearr_1023930_1023948 = state_1023916__$1;
(statearr_1023930_1023948[(2)] = null);

(statearr_1023930_1023948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (10))){
var inst_1023908 = (state_1023916[(2)]);
var state_1023916__$1 = state_1023916;
var statearr_1023931_1023949 = state_1023916__$1;
(statearr_1023931_1023949[(2)] = inst_1023908);

(statearr_1023931_1023949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1023917 === (8))){
var inst_1023898 = (state_1023916[(7)]);
var state_1023916__$1 = state_1023916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1023916__$1,(11),out,inst_1023898);
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
});})(c__9199__auto___1023939,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1023939,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1023935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1023935[(0)] = state_machine__9185__auto__);

(statearr_1023935[(1)] = (1));

return statearr_1023935;
});
var state_machine__9185__auto____1 = (function (state_1023916){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1023916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1023936){if((e1023936 instanceof Object)){
var ex__9188__auto__ = e1023936;
var statearr_1023937_1023950 = state_1023916;
(statearr_1023937_1023950[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1023916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1023936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1023951 = state_1023916;
state_1023916 = G__1023951;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1023916){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1023916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1023939,out))
})();
var state__9201__auto__ = (function (){var statearr_1023938 = f__9200__auto__.call(null);
(statearr_1023938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1023939);

return statearr_1023938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1023939,out))
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
if(typeof cljs.core.async.t1023959 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023959 = (function (ch,f,map_LT_,meta1023960){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta1023960 = meta1023960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t1023962 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023962 = (function (fn1,_,meta1023960,map_LT_,f,ch,meta1023963){
this.fn1 = fn1;
this._ = _;
this.meta1023960 = meta1023960;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1023963 = meta1023963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t1023962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t1023962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1023952_SHARP_){
return f1.call(null,(((p1__1023952_SHARP_ == null))?null:self__.f.call(null,p1__1023952_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t1023962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1023964){
var self__ = this;
var _1023964__$1 = this;
return self__.meta1023963;
});})(___$1))
;

cljs.core.async.t1023962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1023964,meta1023963__$1){
var self__ = this;
var _1023964__$1 = this;
return (new cljs.core.async.t1023962(self__.fn1,self__._,self__.meta1023960,self__.map_LT_,self__.f,self__.ch,meta1023963__$1));
});})(___$1))
;

cljs.core.async.t1023962.cljs$lang$type = true;

cljs.core.async.t1023962.cljs$lang$ctorStr = "cljs.core.async/t1023962";

cljs.core.async.t1023962.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023962");
});})(___$1))
;

cljs.core.async.__GT_t1023962 = ((function (___$1){
return (function __GT_t1023962(fn1__$1,___$2,meta1023960__$1,map_LT___$1,f__$1,ch__$1,meta1023963){
return (new cljs.core.async.t1023962(fn1__$1,___$2,meta1023960__$1,map_LT___$1,f__$1,ch__$1,meta1023963));
});})(___$1))
;

}

return (new cljs.core.async.t1023962(fn1,___$1,self__.meta1023960,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1023959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1023959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1023961){
var self__ = this;
var _1023961__$1 = this;
return self__.meta1023960;
});

cljs.core.async.t1023959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1023961,meta1023960__$1){
var self__ = this;
var _1023961__$1 = this;
return (new cljs.core.async.t1023959(self__.ch,self__.f,self__.map_LT_,meta1023960__$1));
});

cljs.core.async.t1023959.cljs$lang$type = true;

cljs.core.async.t1023959.cljs$lang$ctorStr = "cljs.core.async/t1023959";

cljs.core.async.t1023959.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023959");
});

cljs.core.async.__GT_t1023959 = (function __GT_t1023959(ch__$1,f__$1,map_LT___$1,meta1023960){
return (new cljs.core.async.t1023959(ch__$1,f__$1,map_LT___$1,meta1023960));
});

}

return (new cljs.core.async.t1023959(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t1023968 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023968 = (function (ch,f,map_GT_,meta1023969){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta1023969 = meta1023969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1023968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1023968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1023970){
var self__ = this;
var _1023970__$1 = this;
return self__.meta1023969;
});

cljs.core.async.t1023968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1023970,meta1023969__$1){
var self__ = this;
var _1023970__$1 = this;
return (new cljs.core.async.t1023968(self__.ch,self__.f,self__.map_GT_,meta1023969__$1));
});

cljs.core.async.t1023968.cljs$lang$type = true;

cljs.core.async.t1023968.cljs$lang$ctorStr = "cljs.core.async/t1023968";

cljs.core.async.t1023968.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023968");
});

cljs.core.async.__GT_t1023968 = (function __GT_t1023968(ch__$1,f__$1,map_GT___$1,meta1023969){
return (new cljs.core.async.t1023968(ch__$1,f__$1,map_GT___$1,meta1023969));
});

}

return (new cljs.core.async.t1023968(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t1023974 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t1023974 = (function (ch,p,filter_GT_,meta1023975){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta1023975 = meta1023975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t1023974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t1023974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1023976){
var self__ = this;
var _1023976__$1 = this;
return self__.meta1023975;
});

cljs.core.async.t1023974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1023976,meta1023975__$1){
var self__ = this;
var _1023976__$1 = this;
return (new cljs.core.async.t1023974(self__.ch,self__.p,self__.filter_GT_,meta1023975__$1));
});

cljs.core.async.t1023974.cljs$lang$type = true;

cljs.core.async.t1023974.cljs$lang$ctorStr = "cljs.core.async/t1023974";

cljs.core.async.t1023974.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t1023974");
});

cljs.core.async.__GT_t1023974 = (function __GT_t1023974(ch__$1,p__$1,filter_GT___$1,meta1023975){
return (new cljs.core.async.t1023974(ch__$1,p__$1,filter_GT___$1,meta1023975));
});

}

return (new cljs.core.async.t1023974(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___1024059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1024059,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1024059,out){
return (function (state_1024038){
var state_val_1024039 = (state_1024038[(1)]);
if((state_val_1024039 === (7))){
var inst_1024034 = (state_1024038[(2)]);
var state_1024038__$1 = state_1024038;
var statearr_1024040_1024060 = state_1024038__$1;
(statearr_1024040_1024060[(2)] = inst_1024034);

(statearr_1024040_1024060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (1))){
var state_1024038__$1 = state_1024038;
var statearr_1024041_1024061 = state_1024038__$1;
(statearr_1024041_1024061[(2)] = null);

(statearr_1024041_1024061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (4))){
var inst_1024020 = (state_1024038[(7)]);
var inst_1024020__$1 = (state_1024038[(2)]);
var inst_1024021 = (inst_1024020__$1 == null);
var state_1024038__$1 = (function (){var statearr_1024042 = state_1024038;
(statearr_1024042[(7)] = inst_1024020__$1);

return statearr_1024042;
})();
if(cljs.core.truth_(inst_1024021)){
var statearr_1024043_1024062 = state_1024038__$1;
(statearr_1024043_1024062[(1)] = (5));

} else {
var statearr_1024044_1024063 = state_1024038__$1;
(statearr_1024044_1024063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (6))){
var inst_1024020 = (state_1024038[(7)]);
var inst_1024025 = p.call(null,inst_1024020);
var state_1024038__$1 = state_1024038;
if(cljs.core.truth_(inst_1024025)){
var statearr_1024045_1024064 = state_1024038__$1;
(statearr_1024045_1024064[(1)] = (8));

} else {
var statearr_1024046_1024065 = state_1024038__$1;
(statearr_1024046_1024065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (3))){
var inst_1024036 = (state_1024038[(2)]);
var state_1024038__$1 = state_1024038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1024038__$1,inst_1024036);
} else {
if((state_val_1024039 === (2))){
var state_1024038__$1 = state_1024038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1024038__$1,(4),ch);
} else {
if((state_val_1024039 === (11))){
var inst_1024028 = (state_1024038[(2)]);
var state_1024038__$1 = state_1024038;
var statearr_1024047_1024066 = state_1024038__$1;
(statearr_1024047_1024066[(2)] = inst_1024028);

(statearr_1024047_1024066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (9))){
var state_1024038__$1 = state_1024038;
var statearr_1024048_1024067 = state_1024038__$1;
(statearr_1024048_1024067[(2)] = null);

(statearr_1024048_1024067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (5))){
var inst_1024023 = cljs.core.async.close_BANG_.call(null,out);
var state_1024038__$1 = state_1024038;
var statearr_1024049_1024068 = state_1024038__$1;
(statearr_1024049_1024068[(2)] = inst_1024023);

(statearr_1024049_1024068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (10))){
var inst_1024031 = (state_1024038[(2)]);
var state_1024038__$1 = (function (){var statearr_1024050 = state_1024038;
(statearr_1024050[(8)] = inst_1024031);

return statearr_1024050;
})();
var statearr_1024051_1024069 = state_1024038__$1;
(statearr_1024051_1024069[(2)] = null);

(statearr_1024051_1024069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024039 === (8))){
var inst_1024020 = (state_1024038[(7)]);
var state_1024038__$1 = state_1024038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024038__$1,(11),out,inst_1024020);
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
});})(c__9199__auto___1024059,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1024059,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1024055 = [null,null,null,null,null,null,null,null,null];
(statearr_1024055[(0)] = state_machine__9185__auto__);

(statearr_1024055[(1)] = (1));

return statearr_1024055;
});
var state_machine__9185__auto____1 = (function (state_1024038){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1024038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1024056){if((e1024056 instanceof Object)){
var ex__9188__auto__ = e1024056;
var statearr_1024057_1024070 = state_1024038;
(statearr_1024057_1024070[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1024038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1024056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1024071 = state_1024038;
state_1024038 = G__1024071;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1024038){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1024038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1024059,out))
})();
var state__9201__auto__ = (function (){var statearr_1024058 = f__9200__auto__.call(null);
(statearr_1024058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1024059);

return statearr_1024058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1024059,out))
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
return (function (state_1024237){
var state_val_1024238 = (state_1024237[(1)]);
if((state_val_1024238 === (7))){
var inst_1024233 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
var statearr_1024239_1024280 = state_1024237__$1;
(statearr_1024239_1024280[(2)] = inst_1024233);

(statearr_1024239_1024280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (20))){
var inst_1024203 = (state_1024237[(7)]);
var inst_1024214 = (state_1024237[(2)]);
var inst_1024215 = cljs.core.next.call(null,inst_1024203);
var inst_1024189 = inst_1024215;
var inst_1024190 = null;
var inst_1024191 = (0);
var inst_1024192 = (0);
var state_1024237__$1 = (function (){var statearr_1024240 = state_1024237;
(statearr_1024240[(8)] = inst_1024189);

(statearr_1024240[(9)] = inst_1024192);

(statearr_1024240[(10)] = inst_1024214);

(statearr_1024240[(11)] = inst_1024191);

(statearr_1024240[(12)] = inst_1024190);

return statearr_1024240;
})();
var statearr_1024241_1024281 = state_1024237__$1;
(statearr_1024241_1024281[(2)] = null);

(statearr_1024241_1024281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (1))){
var state_1024237__$1 = state_1024237;
var statearr_1024242_1024282 = state_1024237__$1;
(statearr_1024242_1024282[(2)] = null);

(statearr_1024242_1024282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (4))){
var inst_1024178 = (state_1024237[(13)]);
var inst_1024178__$1 = (state_1024237[(2)]);
var inst_1024179 = (inst_1024178__$1 == null);
var state_1024237__$1 = (function (){var statearr_1024243 = state_1024237;
(statearr_1024243[(13)] = inst_1024178__$1);

return statearr_1024243;
})();
if(cljs.core.truth_(inst_1024179)){
var statearr_1024244_1024283 = state_1024237__$1;
(statearr_1024244_1024283[(1)] = (5));

} else {
var statearr_1024245_1024284 = state_1024237__$1;
(statearr_1024245_1024284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (15))){
var state_1024237__$1 = state_1024237;
var statearr_1024249_1024285 = state_1024237__$1;
(statearr_1024249_1024285[(2)] = null);

(statearr_1024249_1024285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (21))){
var state_1024237__$1 = state_1024237;
var statearr_1024250_1024286 = state_1024237__$1;
(statearr_1024250_1024286[(2)] = null);

(statearr_1024250_1024286[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (13))){
var inst_1024189 = (state_1024237[(8)]);
var inst_1024192 = (state_1024237[(9)]);
var inst_1024191 = (state_1024237[(11)]);
var inst_1024190 = (state_1024237[(12)]);
var inst_1024199 = (state_1024237[(2)]);
var inst_1024200 = (inst_1024192 + (1));
var tmp1024246 = inst_1024189;
var tmp1024247 = inst_1024191;
var tmp1024248 = inst_1024190;
var inst_1024189__$1 = tmp1024246;
var inst_1024190__$1 = tmp1024248;
var inst_1024191__$1 = tmp1024247;
var inst_1024192__$1 = inst_1024200;
var state_1024237__$1 = (function (){var statearr_1024251 = state_1024237;
(statearr_1024251[(8)] = inst_1024189__$1);

(statearr_1024251[(9)] = inst_1024192__$1);

(statearr_1024251[(14)] = inst_1024199);

(statearr_1024251[(11)] = inst_1024191__$1);

(statearr_1024251[(12)] = inst_1024190__$1);

return statearr_1024251;
})();
var statearr_1024252_1024287 = state_1024237__$1;
(statearr_1024252_1024287[(2)] = null);

(statearr_1024252_1024287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (22))){
var state_1024237__$1 = state_1024237;
var statearr_1024253_1024288 = state_1024237__$1;
(statearr_1024253_1024288[(2)] = null);

(statearr_1024253_1024288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (6))){
var inst_1024178 = (state_1024237[(13)]);
var inst_1024187 = f.call(null,inst_1024178);
var inst_1024188 = cljs.core.seq.call(null,inst_1024187);
var inst_1024189 = inst_1024188;
var inst_1024190 = null;
var inst_1024191 = (0);
var inst_1024192 = (0);
var state_1024237__$1 = (function (){var statearr_1024254 = state_1024237;
(statearr_1024254[(8)] = inst_1024189);

(statearr_1024254[(9)] = inst_1024192);

(statearr_1024254[(11)] = inst_1024191);

(statearr_1024254[(12)] = inst_1024190);

return statearr_1024254;
})();
var statearr_1024255_1024289 = state_1024237__$1;
(statearr_1024255_1024289[(2)] = null);

(statearr_1024255_1024289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (17))){
var inst_1024203 = (state_1024237[(7)]);
var inst_1024207 = cljs.core.chunk_first.call(null,inst_1024203);
var inst_1024208 = cljs.core.chunk_rest.call(null,inst_1024203);
var inst_1024209 = cljs.core.count.call(null,inst_1024207);
var inst_1024189 = inst_1024208;
var inst_1024190 = inst_1024207;
var inst_1024191 = inst_1024209;
var inst_1024192 = (0);
var state_1024237__$1 = (function (){var statearr_1024256 = state_1024237;
(statearr_1024256[(8)] = inst_1024189);

(statearr_1024256[(9)] = inst_1024192);

(statearr_1024256[(11)] = inst_1024191);

(statearr_1024256[(12)] = inst_1024190);

return statearr_1024256;
})();
var statearr_1024257_1024290 = state_1024237__$1;
(statearr_1024257_1024290[(2)] = null);

(statearr_1024257_1024290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (3))){
var inst_1024235 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1024237__$1,inst_1024235);
} else {
if((state_val_1024238 === (12))){
var inst_1024223 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
var statearr_1024258_1024291 = state_1024237__$1;
(statearr_1024258_1024291[(2)] = inst_1024223);

(statearr_1024258_1024291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (2))){
var state_1024237__$1 = state_1024237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1024237__$1,(4),in$);
} else {
if((state_val_1024238 === (23))){
var inst_1024231 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
var statearr_1024259_1024292 = state_1024237__$1;
(statearr_1024259_1024292[(2)] = inst_1024231);

(statearr_1024259_1024292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (19))){
var inst_1024218 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
var statearr_1024260_1024293 = state_1024237__$1;
(statearr_1024260_1024293[(2)] = inst_1024218);

(statearr_1024260_1024293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (11))){
var inst_1024189 = (state_1024237[(8)]);
var inst_1024203 = (state_1024237[(7)]);
var inst_1024203__$1 = cljs.core.seq.call(null,inst_1024189);
var state_1024237__$1 = (function (){var statearr_1024261 = state_1024237;
(statearr_1024261[(7)] = inst_1024203__$1);

return statearr_1024261;
})();
if(inst_1024203__$1){
var statearr_1024262_1024294 = state_1024237__$1;
(statearr_1024262_1024294[(1)] = (14));

} else {
var statearr_1024263_1024295 = state_1024237__$1;
(statearr_1024263_1024295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (9))){
var inst_1024225 = (state_1024237[(2)]);
var inst_1024226 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1024237__$1 = (function (){var statearr_1024264 = state_1024237;
(statearr_1024264[(15)] = inst_1024225);

return statearr_1024264;
})();
if(cljs.core.truth_(inst_1024226)){
var statearr_1024265_1024296 = state_1024237__$1;
(statearr_1024265_1024296[(1)] = (21));

} else {
var statearr_1024266_1024297 = state_1024237__$1;
(statearr_1024266_1024297[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (5))){
var inst_1024181 = cljs.core.async.close_BANG_.call(null,out);
var state_1024237__$1 = state_1024237;
var statearr_1024267_1024298 = state_1024237__$1;
(statearr_1024267_1024298[(2)] = inst_1024181);

(statearr_1024267_1024298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (14))){
var inst_1024203 = (state_1024237[(7)]);
var inst_1024205 = cljs.core.chunked_seq_QMARK_.call(null,inst_1024203);
var state_1024237__$1 = state_1024237;
if(inst_1024205){
var statearr_1024268_1024299 = state_1024237__$1;
(statearr_1024268_1024299[(1)] = (17));

} else {
var statearr_1024269_1024300 = state_1024237__$1;
(statearr_1024269_1024300[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (16))){
var inst_1024221 = (state_1024237[(2)]);
var state_1024237__$1 = state_1024237;
var statearr_1024270_1024301 = state_1024237__$1;
(statearr_1024270_1024301[(2)] = inst_1024221);

(statearr_1024270_1024301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024238 === (10))){
var inst_1024192 = (state_1024237[(9)]);
var inst_1024190 = (state_1024237[(12)]);
var inst_1024197 = cljs.core._nth.call(null,inst_1024190,inst_1024192);
var state_1024237__$1 = state_1024237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024237__$1,(13),out,inst_1024197);
} else {
if((state_val_1024238 === (18))){
var inst_1024203 = (state_1024237[(7)]);
var inst_1024212 = cljs.core.first.call(null,inst_1024203);
var state_1024237__$1 = state_1024237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024237__$1,(20),out,inst_1024212);
} else {
if((state_val_1024238 === (8))){
var inst_1024192 = (state_1024237[(9)]);
var inst_1024191 = (state_1024237[(11)]);
var inst_1024194 = (inst_1024192 < inst_1024191);
var inst_1024195 = inst_1024194;
var state_1024237__$1 = state_1024237;
if(cljs.core.truth_(inst_1024195)){
var statearr_1024271_1024302 = state_1024237__$1;
(statearr_1024271_1024302[(1)] = (10));

} else {
var statearr_1024272_1024303 = state_1024237__$1;
(statearr_1024272_1024303[(1)] = (11));

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
var statearr_1024276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1024276[(0)] = state_machine__9185__auto__);

(statearr_1024276[(1)] = (1));

return statearr_1024276;
});
var state_machine__9185__auto____1 = (function (state_1024237){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1024237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1024277){if((e1024277 instanceof Object)){
var ex__9188__auto__ = e1024277;
var statearr_1024278_1024304 = state_1024237;
(statearr_1024278_1024304[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1024237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1024277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1024305 = state_1024237;
state_1024237 = G__1024305;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1024237){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1024237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_1024279 = f__9200__auto__.call(null);
(statearr_1024279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_1024279;
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
var c__9199__auto___1024402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1024402,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1024402,out){
return (function (state_1024377){
var state_val_1024378 = (state_1024377[(1)]);
if((state_val_1024378 === (7))){
var inst_1024372 = (state_1024377[(2)]);
var state_1024377__$1 = state_1024377;
var statearr_1024379_1024403 = state_1024377__$1;
(statearr_1024379_1024403[(2)] = inst_1024372);

(statearr_1024379_1024403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (1))){
var inst_1024354 = null;
var state_1024377__$1 = (function (){var statearr_1024380 = state_1024377;
(statearr_1024380[(7)] = inst_1024354);

return statearr_1024380;
})();
var statearr_1024381_1024404 = state_1024377__$1;
(statearr_1024381_1024404[(2)] = null);

(statearr_1024381_1024404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (4))){
var inst_1024357 = (state_1024377[(8)]);
var inst_1024357__$1 = (state_1024377[(2)]);
var inst_1024358 = (inst_1024357__$1 == null);
var inst_1024359 = cljs.core.not.call(null,inst_1024358);
var state_1024377__$1 = (function (){var statearr_1024382 = state_1024377;
(statearr_1024382[(8)] = inst_1024357__$1);

return statearr_1024382;
})();
if(inst_1024359){
var statearr_1024383_1024405 = state_1024377__$1;
(statearr_1024383_1024405[(1)] = (5));

} else {
var statearr_1024384_1024406 = state_1024377__$1;
(statearr_1024384_1024406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (6))){
var state_1024377__$1 = state_1024377;
var statearr_1024385_1024407 = state_1024377__$1;
(statearr_1024385_1024407[(2)] = null);

(statearr_1024385_1024407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (3))){
var inst_1024374 = (state_1024377[(2)]);
var inst_1024375 = cljs.core.async.close_BANG_.call(null,out);
var state_1024377__$1 = (function (){var statearr_1024386 = state_1024377;
(statearr_1024386[(9)] = inst_1024374);

return statearr_1024386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1024377__$1,inst_1024375);
} else {
if((state_val_1024378 === (2))){
var state_1024377__$1 = state_1024377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1024377__$1,(4),ch);
} else {
if((state_val_1024378 === (11))){
var inst_1024357 = (state_1024377[(8)]);
var inst_1024366 = (state_1024377[(2)]);
var inst_1024354 = inst_1024357;
var state_1024377__$1 = (function (){var statearr_1024387 = state_1024377;
(statearr_1024387[(7)] = inst_1024354);

(statearr_1024387[(10)] = inst_1024366);

return statearr_1024387;
})();
var statearr_1024388_1024408 = state_1024377__$1;
(statearr_1024388_1024408[(2)] = null);

(statearr_1024388_1024408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (9))){
var inst_1024357 = (state_1024377[(8)]);
var state_1024377__$1 = state_1024377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024377__$1,(11),out,inst_1024357);
} else {
if((state_val_1024378 === (5))){
var inst_1024354 = (state_1024377[(7)]);
var inst_1024357 = (state_1024377[(8)]);
var inst_1024361 = cljs.core._EQ_.call(null,inst_1024357,inst_1024354);
var state_1024377__$1 = state_1024377;
if(inst_1024361){
var statearr_1024390_1024409 = state_1024377__$1;
(statearr_1024390_1024409[(1)] = (8));

} else {
var statearr_1024391_1024410 = state_1024377__$1;
(statearr_1024391_1024410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (10))){
var inst_1024369 = (state_1024377[(2)]);
var state_1024377__$1 = state_1024377;
var statearr_1024392_1024411 = state_1024377__$1;
(statearr_1024392_1024411[(2)] = inst_1024369);

(statearr_1024392_1024411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024378 === (8))){
var inst_1024354 = (state_1024377[(7)]);
var tmp1024389 = inst_1024354;
var inst_1024354__$1 = tmp1024389;
var state_1024377__$1 = (function (){var statearr_1024393 = state_1024377;
(statearr_1024393[(7)] = inst_1024354__$1);

return statearr_1024393;
})();
var statearr_1024394_1024412 = state_1024377__$1;
(statearr_1024394_1024412[(2)] = null);

(statearr_1024394_1024412[(1)] = (2));


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
});})(c__9199__auto___1024402,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1024402,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1024398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1024398[(0)] = state_machine__9185__auto__);

(statearr_1024398[(1)] = (1));

return statearr_1024398;
});
var state_machine__9185__auto____1 = (function (state_1024377){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1024377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1024399){if((e1024399 instanceof Object)){
var ex__9188__auto__ = e1024399;
var statearr_1024400_1024413 = state_1024377;
(statearr_1024400_1024413[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1024377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1024399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1024414 = state_1024377;
state_1024377 = G__1024414;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1024377){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1024377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1024402,out))
})();
var state__9201__auto__ = (function (){var statearr_1024401 = f__9200__auto__.call(null);
(statearr_1024401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1024402);

return statearr_1024401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1024402,out))
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
var c__9199__auto___1024549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1024549,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1024549,out){
return (function (state_1024519){
var state_val_1024520 = (state_1024519[(1)]);
if((state_val_1024520 === (7))){
var inst_1024515 = (state_1024519[(2)]);
var state_1024519__$1 = state_1024519;
var statearr_1024521_1024550 = state_1024519__$1;
(statearr_1024521_1024550[(2)] = inst_1024515);

(statearr_1024521_1024550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (1))){
var inst_1024482 = (new Array(n));
var inst_1024483 = inst_1024482;
var inst_1024484 = (0);
var state_1024519__$1 = (function (){var statearr_1024522 = state_1024519;
(statearr_1024522[(7)] = inst_1024484);

(statearr_1024522[(8)] = inst_1024483);

return statearr_1024522;
})();
var statearr_1024523_1024551 = state_1024519__$1;
(statearr_1024523_1024551[(2)] = null);

(statearr_1024523_1024551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (4))){
var inst_1024487 = (state_1024519[(9)]);
var inst_1024487__$1 = (state_1024519[(2)]);
var inst_1024488 = (inst_1024487__$1 == null);
var inst_1024489 = cljs.core.not.call(null,inst_1024488);
var state_1024519__$1 = (function (){var statearr_1024524 = state_1024519;
(statearr_1024524[(9)] = inst_1024487__$1);

return statearr_1024524;
})();
if(inst_1024489){
var statearr_1024525_1024552 = state_1024519__$1;
(statearr_1024525_1024552[(1)] = (5));

} else {
var statearr_1024526_1024553 = state_1024519__$1;
(statearr_1024526_1024553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (15))){
var inst_1024509 = (state_1024519[(2)]);
var state_1024519__$1 = state_1024519;
var statearr_1024527_1024554 = state_1024519__$1;
(statearr_1024527_1024554[(2)] = inst_1024509);

(statearr_1024527_1024554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (13))){
var state_1024519__$1 = state_1024519;
var statearr_1024528_1024555 = state_1024519__$1;
(statearr_1024528_1024555[(2)] = null);

(statearr_1024528_1024555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (6))){
var inst_1024484 = (state_1024519[(7)]);
var inst_1024505 = (inst_1024484 > (0));
var state_1024519__$1 = state_1024519;
if(cljs.core.truth_(inst_1024505)){
var statearr_1024529_1024556 = state_1024519__$1;
(statearr_1024529_1024556[(1)] = (12));

} else {
var statearr_1024530_1024557 = state_1024519__$1;
(statearr_1024530_1024557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (3))){
var inst_1024517 = (state_1024519[(2)]);
var state_1024519__$1 = state_1024519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1024519__$1,inst_1024517);
} else {
if((state_val_1024520 === (12))){
var inst_1024483 = (state_1024519[(8)]);
var inst_1024507 = cljs.core.vec.call(null,inst_1024483);
var state_1024519__$1 = state_1024519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024519__$1,(15),out,inst_1024507);
} else {
if((state_val_1024520 === (2))){
var state_1024519__$1 = state_1024519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1024519__$1,(4),ch);
} else {
if((state_val_1024520 === (11))){
var inst_1024499 = (state_1024519[(2)]);
var inst_1024500 = (new Array(n));
var inst_1024483 = inst_1024500;
var inst_1024484 = (0);
var state_1024519__$1 = (function (){var statearr_1024531 = state_1024519;
(statearr_1024531[(10)] = inst_1024499);

(statearr_1024531[(7)] = inst_1024484);

(statearr_1024531[(8)] = inst_1024483);

return statearr_1024531;
})();
var statearr_1024532_1024558 = state_1024519__$1;
(statearr_1024532_1024558[(2)] = null);

(statearr_1024532_1024558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (9))){
var inst_1024483 = (state_1024519[(8)]);
var inst_1024497 = cljs.core.vec.call(null,inst_1024483);
var state_1024519__$1 = state_1024519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024519__$1,(11),out,inst_1024497);
} else {
if((state_val_1024520 === (5))){
var inst_1024487 = (state_1024519[(9)]);
var inst_1024492 = (state_1024519[(11)]);
var inst_1024484 = (state_1024519[(7)]);
var inst_1024483 = (state_1024519[(8)]);
var inst_1024491 = (inst_1024483[inst_1024484] = inst_1024487);
var inst_1024492__$1 = (inst_1024484 + (1));
var inst_1024493 = (inst_1024492__$1 < n);
var state_1024519__$1 = (function (){var statearr_1024533 = state_1024519;
(statearr_1024533[(11)] = inst_1024492__$1);

(statearr_1024533[(12)] = inst_1024491);

return statearr_1024533;
})();
if(cljs.core.truth_(inst_1024493)){
var statearr_1024534_1024559 = state_1024519__$1;
(statearr_1024534_1024559[(1)] = (8));

} else {
var statearr_1024535_1024560 = state_1024519__$1;
(statearr_1024535_1024560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (14))){
var inst_1024512 = (state_1024519[(2)]);
var inst_1024513 = cljs.core.async.close_BANG_.call(null,out);
var state_1024519__$1 = (function (){var statearr_1024537 = state_1024519;
(statearr_1024537[(13)] = inst_1024512);

return statearr_1024537;
})();
var statearr_1024538_1024561 = state_1024519__$1;
(statearr_1024538_1024561[(2)] = inst_1024513);

(statearr_1024538_1024561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (10))){
var inst_1024503 = (state_1024519[(2)]);
var state_1024519__$1 = state_1024519;
var statearr_1024539_1024562 = state_1024519__$1;
(statearr_1024539_1024562[(2)] = inst_1024503);

(statearr_1024539_1024562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024520 === (8))){
var inst_1024492 = (state_1024519[(11)]);
var inst_1024483 = (state_1024519[(8)]);
var tmp1024536 = inst_1024483;
var inst_1024483__$1 = tmp1024536;
var inst_1024484 = inst_1024492;
var state_1024519__$1 = (function (){var statearr_1024540 = state_1024519;
(statearr_1024540[(7)] = inst_1024484);

(statearr_1024540[(8)] = inst_1024483__$1);

return statearr_1024540;
})();
var statearr_1024541_1024563 = state_1024519__$1;
(statearr_1024541_1024563[(2)] = null);

(statearr_1024541_1024563[(1)] = (2));


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
});})(c__9199__auto___1024549,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1024549,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1024545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1024545[(0)] = state_machine__9185__auto__);

(statearr_1024545[(1)] = (1));

return statearr_1024545;
});
var state_machine__9185__auto____1 = (function (state_1024519){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1024519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1024546){if((e1024546 instanceof Object)){
var ex__9188__auto__ = e1024546;
var statearr_1024547_1024564 = state_1024519;
(statearr_1024547_1024564[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1024519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1024546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1024565 = state_1024519;
state_1024519 = G__1024565;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1024519){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1024519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1024549,out))
})();
var state__9201__auto__ = (function (){var statearr_1024548 = f__9200__auto__.call(null);
(statearr_1024548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1024549);

return statearr_1024548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1024549,out))
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
var c__9199__auto___1024708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1024708,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1024708,out){
return (function (state_1024678){
var state_val_1024679 = (state_1024678[(1)]);
if((state_val_1024679 === (7))){
var inst_1024674 = (state_1024678[(2)]);
var state_1024678__$1 = state_1024678;
var statearr_1024680_1024709 = state_1024678__$1;
(statearr_1024680_1024709[(2)] = inst_1024674);

(statearr_1024680_1024709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (1))){
var inst_1024637 = [];
var inst_1024638 = inst_1024637;
var inst_1024639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1024678__$1 = (function (){var statearr_1024681 = state_1024678;
(statearr_1024681[(7)] = inst_1024639);

(statearr_1024681[(8)] = inst_1024638);

return statearr_1024681;
})();
var statearr_1024682_1024710 = state_1024678__$1;
(statearr_1024682_1024710[(2)] = null);

(statearr_1024682_1024710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (4))){
var inst_1024642 = (state_1024678[(9)]);
var inst_1024642__$1 = (state_1024678[(2)]);
var inst_1024643 = (inst_1024642__$1 == null);
var inst_1024644 = cljs.core.not.call(null,inst_1024643);
var state_1024678__$1 = (function (){var statearr_1024683 = state_1024678;
(statearr_1024683[(9)] = inst_1024642__$1);

return statearr_1024683;
})();
if(inst_1024644){
var statearr_1024684_1024711 = state_1024678__$1;
(statearr_1024684_1024711[(1)] = (5));

} else {
var statearr_1024685_1024712 = state_1024678__$1;
(statearr_1024685_1024712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (15))){
var inst_1024668 = (state_1024678[(2)]);
var state_1024678__$1 = state_1024678;
var statearr_1024686_1024713 = state_1024678__$1;
(statearr_1024686_1024713[(2)] = inst_1024668);

(statearr_1024686_1024713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (13))){
var state_1024678__$1 = state_1024678;
var statearr_1024687_1024714 = state_1024678__$1;
(statearr_1024687_1024714[(2)] = null);

(statearr_1024687_1024714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (6))){
var inst_1024638 = (state_1024678[(8)]);
var inst_1024663 = inst_1024638.length;
var inst_1024664 = (inst_1024663 > (0));
var state_1024678__$1 = state_1024678;
if(cljs.core.truth_(inst_1024664)){
var statearr_1024688_1024715 = state_1024678__$1;
(statearr_1024688_1024715[(1)] = (12));

} else {
var statearr_1024689_1024716 = state_1024678__$1;
(statearr_1024689_1024716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (3))){
var inst_1024676 = (state_1024678[(2)]);
var state_1024678__$1 = state_1024678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1024678__$1,inst_1024676);
} else {
if((state_val_1024679 === (12))){
var inst_1024638 = (state_1024678[(8)]);
var inst_1024666 = cljs.core.vec.call(null,inst_1024638);
var state_1024678__$1 = state_1024678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024678__$1,(15),out,inst_1024666);
} else {
if((state_val_1024679 === (2))){
var state_1024678__$1 = state_1024678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1024678__$1,(4),ch);
} else {
if((state_val_1024679 === (11))){
var inst_1024642 = (state_1024678[(9)]);
var inst_1024646 = (state_1024678[(10)]);
var inst_1024656 = (state_1024678[(2)]);
var inst_1024657 = [];
var inst_1024658 = inst_1024657.push(inst_1024642);
var inst_1024638 = inst_1024657;
var inst_1024639 = inst_1024646;
var state_1024678__$1 = (function (){var statearr_1024690 = state_1024678;
(statearr_1024690[(11)] = inst_1024658);

(statearr_1024690[(12)] = inst_1024656);

(statearr_1024690[(7)] = inst_1024639);

(statearr_1024690[(8)] = inst_1024638);

return statearr_1024690;
})();
var statearr_1024691_1024717 = state_1024678__$1;
(statearr_1024691_1024717[(2)] = null);

(statearr_1024691_1024717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (9))){
var inst_1024638 = (state_1024678[(8)]);
var inst_1024654 = cljs.core.vec.call(null,inst_1024638);
var state_1024678__$1 = state_1024678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1024678__$1,(11),out,inst_1024654);
} else {
if((state_val_1024679 === (5))){
var inst_1024642 = (state_1024678[(9)]);
var inst_1024639 = (state_1024678[(7)]);
var inst_1024646 = (state_1024678[(10)]);
var inst_1024646__$1 = f.call(null,inst_1024642);
var inst_1024647 = cljs.core._EQ_.call(null,inst_1024646__$1,inst_1024639);
var inst_1024648 = cljs.core.keyword_identical_QMARK_.call(null,inst_1024639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1024649 = (inst_1024647) || (inst_1024648);
var state_1024678__$1 = (function (){var statearr_1024692 = state_1024678;
(statearr_1024692[(10)] = inst_1024646__$1);

return statearr_1024692;
})();
if(cljs.core.truth_(inst_1024649)){
var statearr_1024693_1024718 = state_1024678__$1;
(statearr_1024693_1024718[(1)] = (8));

} else {
var statearr_1024694_1024719 = state_1024678__$1;
(statearr_1024694_1024719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (14))){
var inst_1024671 = (state_1024678[(2)]);
var inst_1024672 = cljs.core.async.close_BANG_.call(null,out);
var state_1024678__$1 = (function (){var statearr_1024696 = state_1024678;
(statearr_1024696[(13)] = inst_1024671);

return statearr_1024696;
})();
var statearr_1024697_1024720 = state_1024678__$1;
(statearr_1024697_1024720[(2)] = inst_1024672);

(statearr_1024697_1024720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (10))){
var inst_1024661 = (state_1024678[(2)]);
var state_1024678__$1 = state_1024678;
var statearr_1024698_1024721 = state_1024678__$1;
(statearr_1024698_1024721[(2)] = inst_1024661);

(statearr_1024698_1024721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1024679 === (8))){
var inst_1024642 = (state_1024678[(9)]);
var inst_1024646 = (state_1024678[(10)]);
var inst_1024638 = (state_1024678[(8)]);
var inst_1024651 = inst_1024638.push(inst_1024642);
var tmp1024695 = inst_1024638;
var inst_1024638__$1 = tmp1024695;
var inst_1024639 = inst_1024646;
var state_1024678__$1 = (function (){var statearr_1024699 = state_1024678;
(statearr_1024699[(7)] = inst_1024639);

(statearr_1024699[(8)] = inst_1024638__$1);

(statearr_1024699[(14)] = inst_1024651);

return statearr_1024699;
})();
var statearr_1024700_1024722 = state_1024678__$1;
(statearr_1024700_1024722[(2)] = null);

(statearr_1024700_1024722[(1)] = (2));


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
});})(c__9199__auto___1024708,out))
;
return ((function (switch__9184__auto__,c__9199__auto___1024708,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1024704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1024704[(0)] = state_machine__9185__auto__);

(statearr_1024704[(1)] = (1));

return statearr_1024704;
});
var state_machine__9185__auto____1 = (function (state_1024678){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1024678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1024705){if((e1024705 instanceof Object)){
var ex__9188__auto__ = e1024705;
var statearr_1024706_1024723 = state_1024678;
(statearr_1024706_1024723[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1024678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1024705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1024724 = state_1024678;
state_1024678 = G__1024724;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1024678){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1024678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1024708,out))
})();
var state__9201__auto__ = (function (){var statearr_1024707 = f__9200__auto__.call(null);
(statearr_1024707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1024708);

return statearr_1024707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1024708,out))
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