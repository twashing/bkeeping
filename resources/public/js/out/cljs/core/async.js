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
if(typeof cljs.core.async.t204621 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t204621 = (function (f,fn_handler,meta204622){
this.f = f;
this.fn_handler = fn_handler;
this.meta204622 = meta204622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t204621.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t204621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t204621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t204621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_204623){
var self__ = this;
var _204623__$1 = this;
return self__.meta204622;
});

cljs.core.async.t204621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_204623,meta204622__$1){
var self__ = this;
var _204623__$1 = this;
return (new cljs.core.async.t204621(self__.f,self__.fn_handler,meta204622__$1));
});

cljs.core.async.t204621.cljs$lang$type = true;

cljs.core.async.t204621.cljs$lang$ctorStr = "cljs.core.async/t204621";

cljs.core.async.t204621.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t204621");
});

cljs.core.async.__GT_t204621 = (function __GT_t204621(f__$1,fn_handler__$1,meta204622){
return (new cljs.core.async.t204621(f__$1,fn_handler__$1,meta204622));
});

}

return (new cljs.core.async.t204621(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__204625 = buff;
if(G__204625){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__204625.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__204625.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__204625);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__204625);
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
var val_204626 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_204626);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_204626,ret){
return (function (){
return fn1.call(null,val_204626);
});})(val_204626,ret))
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
var n__4509__auto___204627 = n;
var x_204628 = (0);
while(true){
if((x_204628 < n__4509__auto___204627)){
(a[x_204628] = (0));

var G__204629 = (x_204628 + (1));
x_204628 = G__204629;
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

var G__204630 = (i + (1));
i = G__204630;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t204634 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t204634 = (function (flag,alt_flag,meta204635){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta204635 = meta204635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t204634.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t204634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t204634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t204634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_204636){
var self__ = this;
var _204636__$1 = this;
return self__.meta204635;
});})(flag))
;

cljs.core.async.t204634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_204636,meta204635__$1){
var self__ = this;
var _204636__$1 = this;
return (new cljs.core.async.t204634(self__.flag,self__.alt_flag,meta204635__$1));
});})(flag))
;

cljs.core.async.t204634.cljs$lang$type = true;

cljs.core.async.t204634.cljs$lang$ctorStr = "cljs.core.async/t204634";

cljs.core.async.t204634.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t204634");
});})(flag))
;

cljs.core.async.__GT_t204634 = ((function (flag){
return (function __GT_t204634(flag__$1,alt_flag__$1,meta204635){
return (new cljs.core.async.t204634(flag__$1,alt_flag__$1,meta204635));
});})(flag))
;

}

return (new cljs.core.async.t204634(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t204640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t204640 = (function (cb,flag,alt_handler,meta204641){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta204641 = meta204641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t204640.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t204640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t204640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t204640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_204642){
var self__ = this;
var _204642__$1 = this;
return self__.meta204641;
});

cljs.core.async.t204640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_204642,meta204641__$1){
var self__ = this;
var _204642__$1 = this;
return (new cljs.core.async.t204640(self__.cb,self__.flag,self__.alt_handler,meta204641__$1));
});

cljs.core.async.t204640.cljs$lang$type = true;

cljs.core.async.t204640.cljs$lang$ctorStr = "cljs.core.async/t204640";

cljs.core.async.t204640.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t204640");
});

cljs.core.async.__GT_t204640 = (function __GT_t204640(cb__$1,flag__$1,alt_handler__$1,meta204641){
return (new cljs.core.async.t204640(cb__$1,flag__$1,alt_handler__$1,meta204641));
});

}

return (new cljs.core.async.t204640(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__204643_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__204643_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__204644_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__204644_SHARP_,port], null));
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
var G__204645 = (i + (1));
i = G__204645;
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
var alts_BANG___delegate = function (ports,p__204646){
var map__204648 = p__204646;
var map__204648__$1 = ((cljs.core.seq_QMARK_.call(null,map__204648))?cljs.core.apply.call(null,cljs.core.hash_map,map__204648):map__204648);
var opts = map__204648__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__204646 = null;
if (arguments.length > 1) {
  p__204646 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__204646);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__204649){
var ports = cljs.core.first(arglist__204649);
var p__204646 = cljs.core.rest(arglist__204649);
return alts_BANG___delegate(ports,p__204646);
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
var c__9199__auto___204744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___204744){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___204744){
return (function (state_204720){
var state_val_204721 = (state_204720[(1)]);
if((state_val_204721 === (7))){
var inst_204716 = (state_204720[(2)]);
var state_204720__$1 = state_204720;
var statearr_204722_204745 = state_204720__$1;
(statearr_204722_204745[(2)] = inst_204716);

(statearr_204722_204745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (1))){
var state_204720__$1 = state_204720;
var statearr_204723_204746 = state_204720__$1;
(statearr_204723_204746[(2)] = null);

(statearr_204723_204746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (4))){
var inst_204699 = (state_204720[(7)]);
var inst_204699__$1 = (state_204720[(2)]);
var inst_204700 = (inst_204699__$1 == null);
var state_204720__$1 = (function (){var statearr_204724 = state_204720;
(statearr_204724[(7)] = inst_204699__$1);

return statearr_204724;
})();
if(cljs.core.truth_(inst_204700)){
var statearr_204725_204747 = state_204720__$1;
(statearr_204725_204747[(1)] = (5));

} else {
var statearr_204726_204748 = state_204720__$1;
(statearr_204726_204748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (13))){
var state_204720__$1 = state_204720;
var statearr_204727_204749 = state_204720__$1;
(statearr_204727_204749[(2)] = null);

(statearr_204727_204749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (6))){
var inst_204699 = (state_204720[(7)]);
var state_204720__$1 = state_204720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204720__$1,(11),to,inst_204699);
} else {
if((state_val_204721 === (3))){
var inst_204718 = (state_204720[(2)]);
var state_204720__$1 = state_204720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204720__$1,inst_204718);
} else {
if((state_val_204721 === (12))){
var state_204720__$1 = state_204720;
var statearr_204728_204750 = state_204720__$1;
(statearr_204728_204750[(2)] = null);

(statearr_204728_204750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (2))){
var state_204720__$1 = state_204720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204720__$1,(4),from);
} else {
if((state_val_204721 === (11))){
var inst_204709 = (state_204720[(2)]);
var state_204720__$1 = state_204720;
if(cljs.core.truth_(inst_204709)){
var statearr_204729_204751 = state_204720__$1;
(statearr_204729_204751[(1)] = (12));

} else {
var statearr_204730_204752 = state_204720__$1;
(statearr_204730_204752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (9))){
var state_204720__$1 = state_204720;
var statearr_204731_204753 = state_204720__$1;
(statearr_204731_204753[(2)] = null);

(statearr_204731_204753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (5))){
var state_204720__$1 = state_204720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_204732_204754 = state_204720__$1;
(statearr_204732_204754[(1)] = (8));

} else {
var statearr_204733_204755 = state_204720__$1;
(statearr_204733_204755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (14))){
var inst_204714 = (state_204720[(2)]);
var state_204720__$1 = state_204720;
var statearr_204734_204756 = state_204720__$1;
(statearr_204734_204756[(2)] = inst_204714);

(statearr_204734_204756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (10))){
var inst_204706 = (state_204720[(2)]);
var state_204720__$1 = state_204720;
var statearr_204735_204757 = state_204720__$1;
(statearr_204735_204757[(2)] = inst_204706);

(statearr_204735_204757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204721 === (8))){
var inst_204703 = cljs.core.async.close_BANG_.call(null,to);
var state_204720__$1 = state_204720;
var statearr_204736_204758 = state_204720__$1;
(statearr_204736_204758[(2)] = inst_204703);

(statearr_204736_204758[(1)] = (10));


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
});})(c__9199__auto___204744))
;
return ((function (switch__9184__auto__,c__9199__auto___204744){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_204740 = [null,null,null,null,null,null,null,null];
(statearr_204740[(0)] = state_machine__9185__auto__);

(statearr_204740[(1)] = (1));

return statearr_204740;
});
var state_machine__9185__auto____1 = (function (state_204720){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_204720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e204741){if((e204741 instanceof Object)){
var ex__9188__auto__ = e204741;
var statearr_204742_204759 = state_204720;
(statearr_204742_204759[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204760 = state_204720;
state_204720 = G__204760;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_204720){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_204720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___204744))
})();
var state__9201__auto__ = (function (){var statearr_204743 = f__9200__auto__.call(null);
(statearr_204743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___204744);

return statearr_204743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___204744))
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
return (function (p__204944){
var vec__204945 = p__204944;
var v = cljs.core.nth.call(null,vec__204945,(0),null);
var p = cljs.core.nth.call(null,vec__204945,(1),null);
var job = vec__204945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9199__auto___205127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results){
return (function (state_204950){
var state_val_204951 = (state_204950[(1)]);
if((state_val_204951 === (2))){
var inst_204947 = (state_204950[(2)]);
var inst_204948 = cljs.core.async.close_BANG_.call(null,res);
var state_204950__$1 = (function (){var statearr_204952 = state_204950;
(statearr_204952[(7)] = inst_204947);

return statearr_204952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204950__$1,inst_204948);
} else {
if((state_val_204951 === (1))){
var state_204950__$1 = state_204950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204950__$1,(2),res,v);
} else {
return null;
}
}
});})(c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results))
;
return ((function (switch__9184__auto__,c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_204956 = [null,null,null,null,null,null,null,null];
(statearr_204956[(0)] = state_machine__9185__auto__);

(statearr_204956[(1)] = (1));

return statearr_204956;
});
var state_machine__9185__auto____1 = (function (state_204950){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_204950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e204957){if((e204957 instanceof Object)){
var ex__9188__auto__ = e204957;
var statearr_204958_205128 = state_204950;
(statearr_204958_205128[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205129 = state_204950;
state_204950 = G__205129;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_204950){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_204950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results))
})();
var state__9201__auto__ = (function (){var statearr_204959 = f__9200__auto__.call(null);
(statearr_204959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205127);

return statearr_204959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___205127,res,vec__204945,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__204960){
var vec__204961 = p__204960;
var v = cljs.core.nth.call(null,vec__204961,(0),null);
var p = cljs.core.nth.call(null,vec__204961,(1),null);
var job = vec__204961;
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
var n__4509__auto___205130 = n;
var __205131 = (0);
while(true){
if((__205131 < n__4509__auto___205130)){
var G__204962_205132 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__204962_205132) {
case "async":
var c__9199__auto___205134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__205131,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__205131,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function (state_204975){
var state_val_204976 = (state_204975[(1)]);
if((state_val_204976 === (7))){
var inst_204971 = (state_204975[(2)]);
var state_204975__$1 = state_204975;
var statearr_204977_205135 = state_204975__$1;
(statearr_204977_205135[(2)] = inst_204971);

(statearr_204977_205135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204976 === (6))){
var state_204975__$1 = state_204975;
var statearr_204978_205136 = state_204975__$1;
(statearr_204978_205136[(2)] = null);

(statearr_204978_205136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204976 === (5))){
var state_204975__$1 = state_204975;
var statearr_204979_205137 = state_204975__$1;
(statearr_204979_205137[(2)] = null);

(statearr_204979_205137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204976 === (4))){
var inst_204965 = (state_204975[(2)]);
var inst_204966 = async.call(null,inst_204965);
var state_204975__$1 = state_204975;
if(cljs.core.truth_(inst_204966)){
var statearr_204980_205138 = state_204975__$1;
(statearr_204980_205138[(1)] = (5));

} else {
var statearr_204981_205139 = state_204975__$1;
(statearr_204981_205139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204976 === (3))){
var inst_204973 = (state_204975[(2)]);
var state_204975__$1 = state_204975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204975__$1,inst_204973);
} else {
if((state_val_204976 === (2))){
var state_204975__$1 = state_204975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204975__$1,(4),jobs);
} else {
if((state_val_204976 === (1))){
var state_204975__$1 = state_204975;
var statearr_204982_205140 = state_204975__$1;
(statearr_204982_205140[(2)] = null);

(statearr_204982_205140[(1)] = (2));


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
});})(__205131,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
;
return ((function (__205131,switch__9184__auto__,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_204986 = [null,null,null,null,null,null,null];
(statearr_204986[(0)] = state_machine__9185__auto__);

(statearr_204986[(1)] = (1));

return statearr_204986;
});
var state_machine__9185__auto____1 = (function (state_204975){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_204975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e204987){if((e204987 instanceof Object)){
var ex__9188__auto__ = e204987;
var statearr_204988_205141 = state_204975;
(statearr_204988_205141[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205142 = state_204975;
state_204975 = G__205142;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_204975){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_204975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__205131,switch__9184__auto__,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_204989 = f__9200__auto__.call(null);
(statearr_204989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205134);

return statearr_204989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__205131,c__9199__auto___205134,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
);


break;
case "compute":
var c__9199__auto___205143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__205131,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (__205131,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function (state_205002){
var state_val_205003 = (state_205002[(1)]);
if((state_val_205003 === (7))){
var inst_204998 = (state_205002[(2)]);
var state_205002__$1 = state_205002;
var statearr_205004_205144 = state_205002__$1;
(statearr_205004_205144[(2)] = inst_204998);

(statearr_205004_205144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205003 === (6))){
var state_205002__$1 = state_205002;
var statearr_205005_205145 = state_205002__$1;
(statearr_205005_205145[(2)] = null);

(statearr_205005_205145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205003 === (5))){
var state_205002__$1 = state_205002;
var statearr_205006_205146 = state_205002__$1;
(statearr_205006_205146[(2)] = null);

(statearr_205006_205146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205003 === (4))){
var inst_204992 = (state_205002[(2)]);
var inst_204993 = process.call(null,inst_204992);
var state_205002__$1 = state_205002;
if(cljs.core.truth_(inst_204993)){
var statearr_205007_205147 = state_205002__$1;
(statearr_205007_205147[(1)] = (5));

} else {
var statearr_205008_205148 = state_205002__$1;
(statearr_205008_205148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205003 === (3))){
var inst_205000 = (state_205002[(2)]);
var state_205002__$1 = state_205002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205002__$1,inst_205000);
} else {
if((state_val_205003 === (2))){
var state_205002__$1 = state_205002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205002__$1,(4),jobs);
} else {
if((state_val_205003 === (1))){
var state_205002__$1 = state_205002;
var statearr_205009_205149 = state_205002__$1;
(statearr_205009_205149[(2)] = null);

(statearr_205009_205149[(1)] = (2));


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
});})(__205131,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
;
return ((function (__205131,switch__9184__auto__,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_205013 = [null,null,null,null,null,null,null];
(statearr_205013[(0)] = state_machine__9185__auto__);

(statearr_205013[(1)] = (1));

return statearr_205013;
});
var state_machine__9185__auto____1 = (function (state_205002){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205014){if((e205014 instanceof Object)){
var ex__9188__auto__ = e205014;
var statearr_205015_205150 = state_205002;
(statearr_205015_205150[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205151 = state_205002;
state_205002 = G__205151;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205002){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(__205131,switch__9184__auto__,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_205016 = f__9200__auto__.call(null);
(statearr_205016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205143);

return statearr_205016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(__205131,c__9199__auto___205143,G__204962_205132,n__4509__auto___205130,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__205152 = (__205131 + (1));
__205131 = G__205152;
continue;
} else {
}
break;
}

var c__9199__auto___205153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___205153,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___205153,jobs,results,process,async){
return (function (state_205038){
var state_val_205039 = (state_205038[(1)]);
if((state_val_205039 === (9))){
var inst_205031 = (state_205038[(2)]);
var state_205038__$1 = (function (){var statearr_205040 = state_205038;
(statearr_205040[(7)] = inst_205031);

return statearr_205040;
})();
var statearr_205041_205154 = state_205038__$1;
(statearr_205041_205154[(2)] = null);

(statearr_205041_205154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205039 === (8))){
var inst_205024 = (state_205038[(8)]);
var inst_205029 = (state_205038[(2)]);
var state_205038__$1 = (function (){var statearr_205042 = state_205038;
(statearr_205042[(9)] = inst_205029);

return statearr_205042;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205038__$1,(9),results,inst_205024);
} else {
if((state_val_205039 === (7))){
var inst_205034 = (state_205038[(2)]);
var state_205038__$1 = state_205038;
var statearr_205043_205155 = state_205038__$1;
(statearr_205043_205155[(2)] = inst_205034);

(statearr_205043_205155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205039 === (6))){
var inst_205019 = (state_205038[(10)]);
var inst_205024 = (state_205038[(8)]);
var inst_205024__$1 = cljs.core.async.chan.call(null,(1));
var inst_205025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_205026 = [inst_205019,inst_205024__$1];
var inst_205027 = (new cljs.core.PersistentVector(null,2,(5),inst_205025,inst_205026,null));
var state_205038__$1 = (function (){var statearr_205044 = state_205038;
(statearr_205044[(8)] = inst_205024__$1);

return statearr_205044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205038__$1,(8),jobs,inst_205027);
} else {
if((state_val_205039 === (5))){
var inst_205022 = cljs.core.async.close_BANG_.call(null,jobs);
var state_205038__$1 = state_205038;
var statearr_205045_205156 = state_205038__$1;
(statearr_205045_205156[(2)] = inst_205022);

(statearr_205045_205156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205039 === (4))){
var inst_205019 = (state_205038[(10)]);
var inst_205019__$1 = (state_205038[(2)]);
var inst_205020 = (inst_205019__$1 == null);
var state_205038__$1 = (function (){var statearr_205046 = state_205038;
(statearr_205046[(10)] = inst_205019__$1);

return statearr_205046;
})();
if(cljs.core.truth_(inst_205020)){
var statearr_205047_205157 = state_205038__$1;
(statearr_205047_205157[(1)] = (5));

} else {
var statearr_205048_205158 = state_205038__$1;
(statearr_205048_205158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205039 === (3))){
var inst_205036 = (state_205038[(2)]);
var state_205038__$1 = state_205038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205038__$1,inst_205036);
} else {
if((state_val_205039 === (2))){
var state_205038__$1 = state_205038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205038__$1,(4),from);
} else {
if((state_val_205039 === (1))){
var state_205038__$1 = state_205038;
var statearr_205049_205159 = state_205038__$1;
(statearr_205049_205159[(2)] = null);

(statearr_205049_205159[(1)] = (2));


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
});})(c__9199__auto___205153,jobs,results,process,async))
;
return ((function (switch__9184__auto__,c__9199__auto___205153,jobs,results,process,async){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_205053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_205053[(0)] = state_machine__9185__auto__);

(statearr_205053[(1)] = (1));

return statearr_205053;
});
var state_machine__9185__auto____1 = (function (state_205038){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205054){if((e205054 instanceof Object)){
var ex__9188__auto__ = e205054;
var statearr_205055_205160 = state_205038;
(statearr_205055_205160[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205161 = state_205038;
state_205038 = G__205161;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205038){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___205153,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_205056 = f__9200__auto__.call(null);
(statearr_205056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205153);

return statearr_205056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___205153,jobs,results,process,async))
);


var c__9199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto__,jobs,results,process,async){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto__,jobs,results,process,async){
return (function (state_205094){
var state_val_205095 = (state_205094[(1)]);
if((state_val_205095 === (7))){
var inst_205090 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
var statearr_205096_205162 = state_205094__$1;
(statearr_205096_205162[(2)] = inst_205090);

(statearr_205096_205162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (20))){
var state_205094__$1 = state_205094;
var statearr_205097_205163 = state_205094__$1;
(statearr_205097_205163[(2)] = null);

(statearr_205097_205163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (1))){
var state_205094__$1 = state_205094;
var statearr_205098_205164 = state_205094__$1;
(statearr_205098_205164[(2)] = null);

(statearr_205098_205164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (4))){
var inst_205059 = (state_205094[(7)]);
var inst_205059__$1 = (state_205094[(2)]);
var inst_205060 = (inst_205059__$1 == null);
var state_205094__$1 = (function (){var statearr_205099 = state_205094;
(statearr_205099[(7)] = inst_205059__$1);

return statearr_205099;
})();
if(cljs.core.truth_(inst_205060)){
var statearr_205100_205165 = state_205094__$1;
(statearr_205100_205165[(1)] = (5));

} else {
var statearr_205101_205166 = state_205094__$1;
(statearr_205101_205166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (15))){
var inst_205072 = (state_205094[(8)]);
var state_205094__$1 = state_205094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205094__$1,(18),to,inst_205072);
} else {
if((state_val_205095 === (21))){
var inst_205085 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
var statearr_205102_205167 = state_205094__$1;
(statearr_205102_205167[(2)] = inst_205085);

(statearr_205102_205167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (13))){
var inst_205087 = (state_205094[(2)]);
var state_205094__$1 = (function (){var statearr_205103 = state_205094;
(statearr_205103[(9)] = inst_205087);

return statearr_205103;
})();
var statearr_205104_205168 = state_205094__$1;
(statearr_205104_205168[(2)] = null);

(statearr_205104_205168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (6))){
var inst_205059 = (state_205094[(7)]);
var state_205094__$1 = state_205094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205094__$1,(11),inst_205059);
} else {
if((state_val_205095 === (17))){
var inst_205080 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
if(cljs.core.truth_(inst_205080)){
var statearr_205105_205169 = state_205094__$1;
(statearr_205105_205169[(1)] = (19));

} else {
var statearr_205106_205170 = state_205094__$1;
(statearr_205106_205170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (3))){
var inst_205092 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205094__$1,inst_205092);
} else {
if((state_val_205095 === (12))){
var inst_205069 = (state_205094[(10)]);
var state_205094__$1 = state_205094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205094__$1,(14),inst_205069);
} else {
if((state_val_205095 === (2))){
var state_205094__$1 = state_205094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205094__$1,(4),results);
} else {
if((state_val_205095 === (19))){
var state_205094__$1 = state_205094;
var statearr_205107_205171 = state_205094__$1;
(statearr_205107_205171[(2)] = null);

(statearr_205107_205171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (11))){
var inst_205069 = (state_205094[(2)]);
var state_205094__$1 = (function (){var statearr_205108 = state_205094;
(statearr_205108[(10)] = inst_205069);

return statearr_205108;
})();
var statearr_205109_205172 = state_205094__$1;
(statearr_205109_205172[(2)] = null);

(statearr_205109_205172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (9))){
var state_205094__$1 = state_205094;
var statearr_205110_205173 = state_205094__$1;
(statearr_205110_205173[(2)] = null);

(statearr_205110_205173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (5))){
var state_205094__$1 = state_205094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_205111_205174 = state_205094__$1;
(statearr_205111_205174[(1)] = (8));

} else {
var statearr_205112_205175 = state_205094__$1;
(statearr_205112_205175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (14))){
var inst_205074 = (state_205094[(11)]);
var inst_205072 = (state_205094[(8)]);
var inst_205072__$1 = (state_205094[(2)]);
var inst_205073 = (inst_205072__$1 == null);
var inst_205074__$1 = cljs.core.not.call(null,inst_205073);
var state_205094__$1 = (function (){var statearr_205113 = state_205094;
(statearr_205113[(11)] = inst_205074__$1);

(statearr_205113[(8)] = inst_205072__$1);

return statearr_205113;
})();
if(inst_205074__$1){
var statearr_205114_205176 = state_205094__$1;
(statearr_205114_205176[(1)] = (15));

} else {
var statearr_205115_205177 = state_205094__$1;
(statearr_205115_205177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (16))){
var inst_205074 = (state_205094[(11)]);
var state_205094__$1 = state_205094;
var statearr_205116_205178 = state_205094__$1;
(statearr_205116_205178[(2)] = inst_205074);

(statearr_205116_205178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (10))){
var inst_205066 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
var statearr_205117_205179 = state_205094__$1;
(statearr_205117_205179[(2)] = inst_205066);

(statearr_205117_205179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (18))){
var inst_205077 = (state_205094[(2)]);
var state_205094__$1 = state_205094;
var statearr_205118_205180 = state_205094__$1;
(statearr_205118_205180[(2)] = inst_205077);

(statearr_205118_205180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205095 === (8))){
var inst_205063 = cljs.core.async.close_BANG_.call(null,to);
var state_205094__$1 = state_205094;
var statearr_205119_205181 = state_205094__$1;
(statearr_205119_205181[(2)] = inst_205063);

(statearr_205119_205181[(1)] = (10));


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
var statearr_205123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_205123[(0)] = state_machine__9185__auto__);

(statearr_205123[(1)] = (1));

return statearr_205123;
});
var state_machine__9185__auto____1 = (function (state_205094){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205124){if((e205124 instanceof Object)){
var ex__9188__auto__ = e205124;
var statearr_205125_205182 = state_205094;
(statearr_205125_205182[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205183 = state_205094;
state_205094 = G__205183;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205094){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__,jobs,results,process,async))
})();
var state__9201__auto__ = (function (){var statearr_205126 = f__9200__auto__.call(null);
(statearr_205126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_205126;
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
var c__9199__auto___205284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___205284,tc,fc){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___205284,tc,fc){
return (function (state_205259){
var state_val_205260 = (state_205259[(1)]);
if((state_val_205260 === (7))){
var inst_205255 = (state_205259[(2)]);
var state_205259__$1 = state_205259;
var statearr_205261_205285 = state_205259__$1;
(statearr_205261_205285[(2)] = inst_205255);

(statearr_205261_205285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (1))){
var state_205259__$1 = state_205259;
var statearr_205262_205286 = state_205259__$1;
(statearr_205262_205286[(2)] = null);

(statearr_205262_205286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (4))){
var inst_205236 = (state_205259[(7)]);
var inst_205236__$1 = (state_205259[(2)]);
var inst_205237 = (inst_205236__$1 == null);
var state_205259__$1 = (function (){var statearr_205263 = state_205259;
(statearr_205263[(7)] = inst_205236__$1);

return statearr_205263;
})();
if(cljs.core.truth_(inst_205237)){
var statearr_205264_205287 = state_205259__$1;
(statearr_205264_205287[(1)] = (5));

} else {
var statearr_205265_205288 = state_205259__$1;
(statearr_205265_205288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (13))){
var state_205259__$1 = state_205259;
var statearr_205266_205289 = state_205259__$1;
(statearr_205266_205289[(2)] = null);

(statearr_205266_205289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (6))){
var inst_205236 = (state_205259[(7)]);
var inst_205242 = p.call(null,inst_205236);
var state_205259__$1 = state_205259;
if(cljs.core.truth_(inst_205242)){
var statearr_205267_205290 = state_205259__$1;
(statearr_205267_205290[(1)] = (9));

} else {
var statearr_205268_205291 = state_205259__$1;
(statearr_205268_205291[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (3))){
var inst_205257 = (state_205259[(2)]);
var state_205259__$1 = state_205259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205259__$1,inst_205257);
} else {
if((state_val_205260 === (12))){
var state_205259__$1 = state_205259;
var statearr_205269_205292 = state_205259__$1;
(statearr_205269_205292[(2)] = null);

(statearr_205269_205292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (2))){
var state_205259__$1 = state_205259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205259__$1,(4),ch);
} else {
if((state_val_205260 === (11))){
var inst_205236 = (state_205259[(7)]);
var inst_205246 = (state_205259[(2)]);
var state_205259__$1 = state_205259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205259__$1,(8),inst_205246,inst_205236);
} else {
if((state_val_205260 === (9))){
var state_205259__$1 = state_205259;
var statearr_205270_205293 = state_205259__$1;
(statearr_205270_205293[(2)] = tc);

(statearr_205270_205293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (5))){
var inst_205239 = cljs.core.async.close_BANG_.call(null,tc);
var inst_205240 = cljs.core.async.close_BANG_.call(null,fc);
var state_205259__$1 = (function (){var statearr_205271 = state_205259;
(statearr_205271[(8)] = inst_205239);

return statearr_205271;
})();
var statearr_205272_205294 = state_205259__$1;
(statearr_205272_205294[(2)] = inst_205240);

(statearr_205272_205294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (14))){
var inst_205253 = (state_205259[(2)]);
var state_205259__$1 = state_205259;
var statearr_205273_205295 = state_205259__$1;
(statearr_205273_205295[(2)] = inst_205253);

(statearr_205273_205295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (10))){
var state_205259__$1 = state_205259;
var statearr_205274_205296 = state_205259__$1;
(statearr_205274_205296[(2)] = fc);

(statearr_205274_205296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205260 === (8))){
var inst_205248 = (state_205259[(2)]);
var state_205259__$1 = state_205259;
if(cljs.core.truth_(inst_205248)){
var statearr_205275_205297 = state_205259__$1;
(statearr_205275_205297[(1)] = (12));

} else {
var statearr_205276_205298 = state_205259__$1;
(statearr_205276_205298[(1)] = (13));

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
});})(c__9199__auto___205284,tc,fc))
;
return ((function (switch__9184__auto__,c__9199__auto___205284,tc,fc){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_205280 = [null,null,null,null,null,null,null,null,null];
(statearr_205280[(0)] = state_machine__9185__auto__);

(statearr_205280[(1)] = (1));

return statearr_205280;
});
var state_machine__9185__auto____1 = (function (state_205259){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205281){if((e205281 instanceof Object)){
var ex__9188__auto__ = e205281;
var statearr_205282_205299 = state_205259;
(statearr_205282_205299[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205300 = state_205259;
state_205259 = G__205300;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205259){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___205284,tc,fc))
})();
var state__9201__auto__ = (function (){var statearr_205283 = f__9200__auto__.call(null);
(statearr_205283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205284);

return statearr_205283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___205284,tc,fc))
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
return (function (state_205347){
var state_val_205348 = (state_205347[(1)]);
if((state_val_205348 === (7))){
var inst_205343 = (state_205347[(2)]);
var state_205347__$1 = state_205347;
var statearr_205349_205365 = state_205347__$1;
(statearr_205349_205365[(2)] = inst_205343);

(statearr_205349_205365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205348 === (6))){
var inst_205336 = (state_205347[(7)]);
var inst_205333 = (state_205347[(8)]);
var inst_205340 = f.call(null,inst_205333,inst_205336);
var inst_205333__$1 = inst_205340;
var state_205347__$1 = (function (){var statearr_205350 = state_205347;
(statearr_205350[(8)] = inst_205333__$1);

return statearr_205350;
})();
var statearr_205351_205366 = state_205347__$1;
(statearr_205351_205366[(2)] = null);

(statearr_205351_205366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205348 === (5))){
var inst_205333 = (state_205347[(8)]);
var state_205347__$1 = state_205347;
var statearr_205352_205367 = state_205347__$1;
(statearr_205352_205367[(2)] = inst_205333);

(statearr_205352_205367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205348 === (4))){
var inst_205336 = (state_205347[(7)]);
var inst_205336__$1 = (state_205347[(2)]);
var inst_205337 = (inst_205336__$1 == null);
var state_205347__$1 = (function (){var statearr_205353 = state_205347;
(statearr_205353[(7)] = inst_205336__$1);

return statearr_205353;
})();
if(cljs.core.truth_(inst_205337)){
var statearr_205354_205368 = state_205347__$1;
(statearr_205354_205368[(1)] = (5));

} else {
var statearr_205355_205369 = state_205347__$1;
(statearr_205355_205369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205348 === (3))){
var inst_205345 = (state_205347[(2)]);
var state_205347__$1 = state_205347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205347__$1,inst_205345);
} else {
if((state_val_205348 === (2))){
var state_205347__$1 = state_205347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205347__$1,(4),ch);
} else {
if((state_val_205348 === (1))){
var inst_205333 = init;
var state_205347__$1 = (function (){var statearr_205356 = state_205347;
(statearr_205356[(8)] = inst_205333);

return statearr_205356;
})();
var statearr_205357_205370 = state_205347__$1;
(statearr_205357_205370[(2)] = null);

(statearr_205357_205370[(1)] = (2));


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
var statearr_205361 = [null,null,null,null,null,null,null,null,null];
(statearr_205361[(0)] = state_machine__9185__auto__);

(statearr_205361[(1)] = (1));

return statearr_205361;
});
var state_machine__9185__auto____1 = (function (state_205347){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205362){if((e205362 instanceof Object)){
var ex__9188__auto__ = e205362;
var statearr_205363_205371 = state_205347;
(statearr_205363_205371[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205372 = state_205347;
state_205347 = G__205372;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205347){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_205364 = f__9200__auto__.call(null);
(statearr_205364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_205364;
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
return (function (state_205446){
var state_val_205447 = (state_205446[(1)]);
if((state_val_205447 === (7))){
var inst_205428 = (state_205446[(2)]);
var state_205446__$1 = state_205446;
var statearr_205448_205471 = state_205446__$1;
(statearr_205448_205471[(2)] = inst_205428);

(statearr_205448_205471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (1))){
var inst_205422 = cljs.core.seq.call(null,coll);
var inst_205423 = inst_205422;
var state_205446__$1 = (function (){var statearr_205449 = state_205446;
(statearr_205449[(7)] = inst_205423);

return statearr_205449;
})();
var statearr_205450_205472 = state_205446__$1;
(statearr_205450_205472[(2)] = null);

(statearr_205450_205472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (4))){
var inst_205423 = (state_205446[(7)]);
var inst_205426 = cljs.core.first.call(null,inst_205423);
var state_205446__$1 = state_205446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205446__$1,(7),ch,inst_205426);
} else {
if((state_val_205447 === (13))){
var inst_205440 = (state_205446[(2)]);
var state_205446__$1 = state_205446;
var statearr_205451_205473 = state_205446__$1;
(statearr_205451_205473[(2)] = inst_205440);

(statearr_205451_205473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (6))){
var inst_205431 = (state_205446[(2)]);
var state_205446__$1 = state_205446;
if(cljs.core.truth_(inst_205431)){
var statearr_205452_205474 = state_205446__$1;
(statearr_205452_205474[(1)] = (8));

} else {
var statearr_205453_205475 = state_205446__$1;
(statearr_205453_205475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (3))){
var inst_205444 = (state_205446[(2)]);
var state_205446__$1 = state_205446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205446__$1,inst_205444);
} else {
if((state_val_205447 === (12))){
var state_205446__$1 = state_205446;
var statearr_205454_205476 = state_205446__$1;
(statearr_205454_205476[(2)] = null);

(statearr_205454_205476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (2))){
var inst_205423 = (state_205446[(7)]);
var state_205446__$1 = state_205446;
if(cljs.core.truth_(inst_205423)){
var statearr_205455_205477 = state_205446__$1;
(statearr_205455_205477[(1)] = (4));

} else {
var statearr_205456_205478 = state_205446__$1;
(statearr_205456_205478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (11))){
var inst_205437 = cljs.core.async.close_BANG_.call(null,ch);
var state_205446__$1 = state_205446;
var statearr_205457_205479 = state_205446__$1;
(statearr_205457_205479[(2)] = inst_205437);

(statearr_205457_205479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (9))){
var state_205446__$1 = state_205446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_205458_205480 = state_205446__$1;
(statearr_205458_205480[(1)] = (11));

} else {
var statearr_205459_205481 = state_205446__$1;
(statearr_205459_205481[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (5))){
var inst_205423 = (state_205446[(7)]);
var state_205446__$1 = state_205446;
var statearr_205460_205482 = state_205446__$1;
(statearr_205460_205482[(2)] = inst_205423);

(statearr_205460_205482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (10))){
var inst_205442 = (state_205446[(2)]);
var state_205446__$1 = state_205446;
var statearr_205461_205483 = state_205446__$1;
(statearr_205461_205483[(2)] = inst_205442);

(statearr_205461_205483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205447 === (8))){
var inst_205423 = (state_205446[(7)]);
var inst_205433 = cljs.core.next.call(null,inst_205423);
var inst_205423__$1 = inst_205433;
var state_205446__$1 = (function (){var statearr_205462 = state_205446;
(statearr_205462[(7)] = inst_205423__$1);

return statearr_205462;
})();
var statearr_205463_205484 = state_205446__$1;
(statearr_205463_205484[(2)] = null);

(statearr_205463_205484[(1)] = (2));


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
var statearr_205467 = [null,null,null,null,null,null,null,null];
(statearr_205467[(0)] = state_machine__9185__auto__);

(statearr_205467[(1)] = (1));

return statearr_205467;
});
var state_machine__9185__auto____1 = (function (state_205446){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205468){if((e205468 instanceof Object)){
var ex__9188__auto__ = e205468;
var statearr_205469_205485 = state_205446;
(statearr_205469_205485[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205486 = state_205446;
state_205446 = G__205486;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205446){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_205470 = f__9200__auto__.call(null);
(statearr_205470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_205470;
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

cljs.core.async.Mux = (function (){var obj205488 = {};
return obj205488;
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


cljs.core.async.Mult = (function (){var obj205490 = {};
return obj205490;
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
if(typeof cljs.core.async.t205712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t205712 = (function (cs,ch,mult,meta205713){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta205713 = meta205713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205712.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t205712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t205712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t205712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t205712.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t205712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t205712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_205714){
var self__ = this;
var _205714__$1 = this;
return self__.meta205713;
});})(cs))
;

cljs.core.async.t205712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_205714,meta205713__$1){
var self__ = this;
var _205714__$1 = this;
return (new cljs.core.async.t205712(self__.cs,self__.ch,self__.mult,meta205713__$1));
});})(cs))
;

cljs.core.async.t205712.cljs$lang$type = true;

cljs.core.async.t205712.cljs$lang$ctorStr = "cljs.core.async/t205712";

cljs.core.async.t205712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t205712");
});})(cs))
;

cljs.core.async.__GT_t205712 = ((function (cs){
return (function __GT_t205712(cs__$1,ch__$1,mult__$1,meta205713){
return (new cljs.core.async.t205712(cs__$1,ch__$1,mult__$1,meta205713));
});})(cs))
;

}

return (new cljs.core.async.t205712(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___205933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___205933,cs,m,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___205933,cs,m,dchan,dctr,done){
return (function (state_205845){
var state_val_205846 = (state_205845[(1)]);
if((state_val_205846 === (7))){
var inst_205841 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205847_205934 = state_205845__$1;
(statearr_205847_205934[(2)] = inst_205841);

(statearr_205847_205934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (20))){
var inst_205746 = (state_205845[(7)]);
var inst_205756 = cljs.core.first.call(null,inst_205746);
var inst_205757 = cljs.core.nth.call(null,inst_205756,(0),null);
var inst_205758 = cljs.core.nth.call(null,inst_205756,(1),null);
var state_205845__$1 = (function (){var statearr_205848 = state_205845;
(statearr_205848[(8)] = inst_205757);

return statearr_205848;
})();
if(cljs.core.truth_(inst_205758)){
var statearr_205849_205935 = state_205845__$1;
(statearr_205849_205935[(1)] = (22));

} else {
var statearr_205850_205936 = state_205845__$1;
(statearr_205850_205936[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (27))){
var inst_205786 = (state_205845[(9)]);
var inst_205717 = (state_205845[(10)]);
var inst_205793 = (state_205845[(11)]);
var inst_205788 = (state_205845[(12)]);
var inst_205793__$1 = cljs.core._nth.call(null,inst_205786,inst_205788);
var inst_205794 = cljs.core.async.put_BANG_.call(null,inst_205793__$1,inst_205717,done);
var state_205845__$1 = (function (){var statearr_205851 = state_205845;
(statearr_205851[(11)] = inst_205793__$1);

return statearr_205851;
})();
if(cljs.core.truth_(inst_205794)){
var statearr_205852_205937 = state_205845__$1;
(statearr_205852_205937[(1)] = (30));

} else {
var statearr_205853_205938 = state_205845__$1;
(statearr_205853_205938[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (1))){
var state_205845__$1 = state_205845;
var statearr_205854_205939 = state_205845__$1;
(statearr_205854_205939[(2)] = null);

(statearr_205854_205939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (24))){
var inst_205746 = (state_205845[(7)]);
var inst_205763 = (state_205845[(2)]);
var inst_205764 = cljs.core.next.call(null,inst_205746);
var inst_205726 = inst_205764;
var inst_205727 = null;
var inst_205728 = (0);
var inst_205729 = (0);
var state_205845__$1 = (function (){var statearr_205855 = state_205845;
(statearr_205855[(13)] = inst_205726);

(statearr_205855[(14)] = inst_205729);

(statearr_205855[(15)] = inst_205763);

(statearr_205855[(16)] = inst_205728);

(statearr_205855[(17)] = inst_205727);

return statearr_205855;
})();
var statearr_205856_205940 = state_205845__$1;
(statearr_205856_205940[(2)] = null);

(statearr_205856_205940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (39))){
var state_205845__$1 = state_205845;
var statearr_205860_205941 = state_205845__$1;
(statearr_205860_205941[(2)] = null);

(statearr_205860_205941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (4))){
var inst_205717 = (state_205845[(10)]);
var inst_205717__$1 = (state_205845[(2)]);
var inst_205718 = (inst_205717__$1 == null);
var state_205845__$1 = (function (){var statearr_205861 = state_205845;
(statearr_205861[(10)] = inst_205717__$1);

return statearr_205861;
})();
if(cljs.core.truth_(inst_205718)){
var statearr_205862_205942 = state_205845__$1;
(statearr_205862_205942[(1)] = (5));

} else {
var statearr_205863_205943 = state_205845__$1;
(statearr_205863_205943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (15))){
var inst_205726 = (state_205845[(13)]);
var inst_205729 = (state_205845[(14)]);
var inst_205728 = (state_205845[(16)]);
var inst_205727 = (state_205845[(17)]);
var inst_205742 = (state_205845[(2)]);
var inst_205743 = (inst_205729 + (1));
var tmp205857 = inst_205726;
var tmp205858 = inst_205728;
var tmp205859 = inst_205727;
var inst_205726__$1 = tmp205857;
var inst_205727__$1 = tmp205859;
var inst_205728__$1 = tmp205858;
var inst_205729__$1 = inst_205743;
var state_205845__$1 = (function (){var statearr_205864 = state_205845;
(statearr_205864[(13)] = inst_205726__$1);

(statearr_205864[(18)] = inst_205742);

(statearr_205864[(14)] = inst_205729__$1);

(statearr_205864[(16)] = inst_205728__$1);

(statearr_205864[(17)] = inst_205727__$1);

return statearr_205864;
})();
var statearr_205865_205944 = state_205845__$1;
(statearr_205865_205944[(2)] = null);

(statearr_205865_205944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (21))){
var inst_205767 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205869_205945 = state_205845__$1;
(statearr_205869_205945[(2)] = inst_205767);

(statearr_205869_205945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (31))){
var inst_205793 = (state_205845[(11)]);
var inst_205797 = done.call(null,null);
var inst_205798 = cljs.core.async.untap_STAR_.call(null,m,inst_205793);
var state_205845__$1 = (function (){var statearr_205870 = state_205845;
(statearr_205870[(19)] = inst_205797);

return statearr_205870;
})();
var statearr_205871_205946 = state_205845__$1;
(statearr_205871_205946[(2)] = inst_205798);

(statearr_205871_205946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (32))){
var inst_205786 = (state_205845[(9)]);
var inst_205787 = (state_205845[(20)]);
var inst_205785 = (state_205845[(21)]);
var inst_205788 = (state_205845[(12)]);
var inst_205800 = (state_205845[(2)]);
var inst_205801 = (inst_205788 + (1));
var tmp205866 = inst_205786;
var tmp205867 = inst_205787;
var tmp205868 = inst_205785;
var inst_205785__$1 = tmp205868;
var inst_205786__$1 = tmp205866;
var inst_205787__$1 = tmp205867;
var inst_205788__$1 = inst_205801;
var state_205845__$1 = (function (){var statearr_205872 = state_205845;
(statearr_205872[(9)] = inst_205786__$1);

(statearr_205872[(20)] = inst_205787__$1);

(statearr_205872[(22)] = inst_205800);

(statearr_205872[(21)] = inst_205785__$1);

(statearr_205872[(12)] = inst_205788__$1);

return statearr_205872;
})();
var statearr_205873_205947 = state_205845__$1;
(statearr_205873_205947[(2)] = null);

(statearr_205873_205947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (40))){
var inst_205813 = (state_205845[(23)]);
var inst_205817 = done.call(null,null);
var inst_205818 = cljs.core.async.untap_STAR_.call(null,m,inst_205813);
var state_205845__$1 = (function (){var statearr_205874 = state_205845;
(statearr_205874[(24)] = inst_205817);

return statearr_205874;
})();
var statearr_205875_205948 = state_205845__$1;
(statearr_205875_205948[(2)] = inst_205818);

(statearr_205875_205948[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (33))){
var inst_205804 = (state_205845[(25)]);
var inst_205806 = cljs.core.chunked_seq_QMARK_.call(null,inst_205804);
var state_205845__$1 = state_205845;
if(inst_205806){
var statearr_205876_205949 = state_205845__$1;
(statearr_205876_205949[(1)] = (36));

} else {
var statearr_205877_205950 = state_205845__$1;
(statearr_205877_205950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (13))){
var inst_205736 = (state_205845[(26)]);
var inst_205739 = cljs.core.async.close_BANG_.call(null,inst_205736);
var state_205845__$1 = state_205845;
var statearr_205878_205951 = state_205845__$1;
(statearr_205878_205951[(2)] = inst_205739);

(statearr_205878_205951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (22))){
var inst_205757 = (state_205845[(8)]);
var inst_205760 = cljs.core.async.close_BANG_.call(null,inst_205757);
var state_205845__$1 = state_205845;
var statearr_205879_205952 = state_205845__$1;
(statearr_205879_205952[(2)] = inst_205760);

(statearr_205879_205952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (36))){
var inst_205804 = (state_205845[(25)]);
var inst_205808 = cljs.core.chunk_first.call(null,inst_205804);
var inst_205809 = cljs.core.chunk_rest.call(null,inst_205804);
var inst_205810 = cljs.core.count.call(null,inst_205808);
var inst_205785 = inst_205809;
var inst_205786 = inst_205808;
var inst_205787 = inst_205810;
var inst_205788 = (0);
var state_205845__$1 = (function (){var statearr_205880 = state_205845;
(statearr_205880[(9)] = inst_205786);

(statearr_205880[(20)] = inst_205787);

(statearr_205880[(21)] = inst_205785);

(statearr_205880[(12)] = inst_205788);

return statearr_205880;
})();
var statearr_205881_205953 = state_205845__$1;
(statearr_205881_205953[(2)] = null);

(statearr_205881_205953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (41))){
var inst_205804 = (state_205845[(25)]);
var inst_205820 = (state_205845[(2)]);
var inst_205821 = cljs.core.next.call(null,inst_205804);
var inst_205785 = inst_205821;
var inst_205786 = null;
var inst_205787 = (0);
var inst_205788 = (0);
var state_205845__$1 = (function (){var statearr_205882 = state_205845;
(statearr_205882[(9)] = inst_205786);

(statearr_205882[(20)] = inst_205787);

(statearr_205882[(27)] = inst_205820);

(statearr_205882[(21)] = inst_205785);

(statearr_205882[(12)] = inst_205788);

return statearr_205882;
})();
var statearr_205883_205954 = state_205845__$1;
(statearr_205883_205954[(2)] = null);

(statearr_205883_205954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (43))){
var state_205845__$1 = state_205845;
var statearr_205884_205955 = state_205845__$1;
(statearr_205884_205955[(2)] = null);

(statearr_205884_205955[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (29))){
var inst_205829 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205885_205956 = state_205845__$1;
(statearr_205885_205956[(2)] = inst_205829);

(statearr_205885_205956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (44))){
var inst_205838 = (state_205845[(2)]);
var state_205845__$1 = (function (){var statearr_205886 = state_205845;
(statearr_205886[(28)] = inst_205838);

return statearr_205886;
})();
var statearr_205887_205957 = state_205845__$1;
(statearr_205887_205957[(2)] = null);

(statearr_205887_205957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (6))){
var inst_205777 = (state_205845[(29)]);
var inst_205776 = cljs.core.deref.call(null,cs);
var inst_205777__$1 = cljs.core.keys.call(null,inst_205776);
var inst_205778 = cljs.core.count.call(null,inst_205777__$1);
var inst_205779 = cljs.core.reset_BANG_.call(null,dctr,inst_205778);
var inst_205784 = cljs.core.seq.call(null,inst_205777__$1);
var inst_205785 = inst_205784;
var inst_205786 = null;
var inst_205787 = (0);
var inst_205788 = (0);
var state_205845__$1 = (function (){var statearr_205888 = state_205845;
(statearr_205888[(9)] = inst_205786);

(statearr_205888[(20)] = inst_205787);

(statearr_205888[(21)] = inst_205785);

(statearr_205888[(12)] = inst_205788);

(statearr_205888[(30)] = inst_205779);

(statearr_205888[(29)] = inst_205777__$1);

return statearr_205888;
})();
var statearr_205889_205958 = state_205845__$1;
(statearr_205889_205958[(2)] = null);

(statearr_205889_205958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (28))){
var inst_205785 = (state_205845[(21)]);
var inst_205804 = (state_205845[(25)]);
var inst_205804__$1 = cljs.core.seq.call(null,inst_205785);
var state_205845__$1 = (function (){var statearr_205890 = state_205845;
(statearr_205890[(25)] = inst_205804__$1);

return statearr_205890;
})();
if(inst_205804__$1){
var statearr_205891_205959 = state_205845__$1;
(statearr_205891_205959[(1)] = (33));

} else {
var statearr_205892_205960 = state_205845__$1;
(statearr_205892_205960[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (25))){
var inst_205787 = (state_205845[(20)]);
var inst_205788 = (state_205845[(12)]);
var inst_205790 = (inst_205788 < inst_205787);
var inst_205791 = inst_205790;
var state_205845__$1 = state_205845;
if(cljs.core.truth_(inst_205791)){
var statearr_205893_205961 = state_205845__$1;
(statearr_205893_205961[(1)] = (27));

} else {
var statearr_205894_205962 = state_205845__$1;
(statearr_205894_205962[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (34))){
var state_205845__$1 = state_205845;
var statearr_205895_205963 = state_205845__$1;
(statearr_205895_205963[(2)] = null);

(statearr_205895_205963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (17))){
var state_205845__$1 = state_205845;
var statearr_205896_205964 = state_205845__$1;
(statearr_205896_205964[(2)] = null);

(statearr_205896_205964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (3))){
var inst_205843 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205845__$1,inst_205843);
} else {
if((state_val_205846 === (12))){
var inst_205772 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205897_205965 = state_205845__$1;
(statearr_205897_205965[(2)] = inst_205772);

(statearr_205897_205965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (2))){
var state_205845__$1 = state_205845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205845__$1,(4),ch);
} else {
if((state_val_205846 === (23))){
var state_205845__$1 = state_205845;
var statearr_205898_205966 = state_205845__$1;
(statearr_205898_205966[(2)] = null);

(statearr_205898_205966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (35))){
var inst_205827 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205899_205967 = state_205845__$1;
(statearr_205899_205967[(2)] = inst_205827);

(statearr_205899_205967[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (19))){
var inst_205746 = (state_205845[(7)]);
var inst_205750 = cljs.core.chunk_first.call(null,inst_205746);
var inst_205751 = cljs.core.chunk_rest.call(null,inst_205746);
var inst_205752 = cljs.core.count.call(null,inst_205750);
var inst_205726 = inst_205751;
var inst_205727 = inst_205750;
var inst_205728 = inst_205752;
var inst_205729 = (0);
var state_205845__$1 = (function (){var statearr_205900 = state_205845;
(statearr_205900[(13)] = inst_205726);

(statearr_205900[(14)] = inst_205729);

(statearr_205900[(16)] = inst_205728);

(statearr_205900[(17)] = inst_205727);

return statearr_205900;
})();
var statearr_205901_205968 = state_205845__$1;
(statearr_205901_205968[(2)] = null);

(statearr_205901_205968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (11))){
var inst_205746 = (state_205845[(7)]);
var inst_205726 = (state_205845[(13)]);
var inst_205746__$1 = cljs.core.seq.call(null,inst_205726);
var state_205845__$1 = (function (){var statearr_205902 = state_205845;
(statearr_205902[(7)] = inst_205746__$1);

return statearr_205902;
})();
if(inst_205746__$1){
var statearr_205903_205969 = state_205845__$1;
(statearr_205903_205969[(1)] = (16));

} else {
var statearr_205904_205970 = state_205845__$1;
(statearr_205904_205970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (9))){
var inst_205774 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205905_205971 = state_205845__$1;
(statearr_205905_205971[(2)] = inst_205774);

(statearr_205905_205971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (5))){
var inst_205724 = cljs.core.deref.call(null,cs);
var inst_205725 = cljs.core.seq.call(null,inst_205724);
var inst_205726 = inst_205725;
var inst_205727 = null;
var inst_205728 = (0);
var inst_205729 = (0);
var state_205845__$1 = (function (){var statearr_205906 = state_205845;
(statearr_205906[(13)] = inst_205726);

(statearr_205906[(14)] = inst_205729);

(statearr_205906[(16)] = inst_205728);

(statearr_205906[(17)] = inst_205727);

return statearr_205906;
})();
var statearr_205907_205972 = state_205845__$1;
(statearr_205907_205972[(2)] = null);

(statearr_205907_205972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (14))){
var state_205845__$1 = state_205845;
var statearr_205908_205973 = state_205845__$1;
(statearr_205908_205973[(2)] = null);

(statearr_205908_205973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (45))){
var inst_205835 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205909_205974 = state_205845__$1;
(statearr_205909_205974[(2)] = inst_205835);

(statearr_205909_205974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (26))){
var inst_205777 = (state_205845[(29)]);
var inst_205831 = (state_205845[(2)]);
var inst_205832 = cljs.core.seq.call(null,inst_205777);
var state_205845__$1 = (function (){var statearr_205910 = state_205845;
(statearr_205910[(31)] = inst_205831);

return statearr_205910;
})();
if(inst_205832){
var statearr_205911_205975 = state_205845__$1;
(statearr_205911_205975[(1)] = (42));

} else {
var statearr_205912_205976 = state_205845__$1;
(statearr_205912_205976[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (16))){
var inst_205746 = (state_205845[(7)]);
var inst_205748 = cljs.core.chunked_seq_QMARK_.call(null,inst_205746);
var state_205845__$1 = state_205845;
if(inst_205748){
var statearr_205913_205977 = state_205845__$1;
(statearr_205913_205977[(1)] = (19));

} else {
var statearr_205914_205978 = state_205845__$1;
(statearr_205914_205978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (38))){
var inst_205824 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205915_205979 = state_205845__$1;
(statearr_205915_205979[(2)] = inst_205824);

(statearr_205915_205979[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (30))){
var state_205845__$1 = state_205845;
var statearr_205916_205980 = state_205845__$1;
(statearr_205916_205980[(2)] = null);

(statearr_205916_205980[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (10))){
var inst_205729 = (state_205845[(14)]);
var inst_205727 = (state_205845[(17)]);
var inst_205735 = cljs.core._nth.call(null,inst_205727,inst_205729);
var inst_205736 = cljs.core.nth.call(null,inst_205735,(0),null);
var inst_205737 = cljs.core.nth.call(null,inst_205735,(1),null);
var state_205845__$1 = (function (){var statearr_205917 = state_205845;
(statearr_205917[(26)] = inst_205736);

return statearr_205917;
})();
if(cljs.core.truth_(inst_205737)){
var statearr_205918_205981 = state_205845__$1;
(statearr_205918_205981[(1)] = (13));

} else {
var statearr_205919_205982 = state_205845__$1;
(statearr_205919_205982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (18))){
var inst_205770 = (state_205845[(2)]);
var state_205845__$1 = state_205845;
var statearr_205920_205983 = state_205845__$1;
(statearr_205920_205983[(2)] = inst_205770);

(statearr_205920_205983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (42))){
var state_205845__$1 = state_205845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205845__$1,(45),dchan);
} else {
if((state_val_205846 === (37))){
var inst_205717 = (state_205845[(10)]);
var inst_205813 = (state_205845[(23)]);
var inst_205804 = (state_205845[(25)]);
var inst_205813__$1 = cljs.core.first.call(null,inst_205804);
var inst_205814 = cljs.core.async.put_BANG_.call(null,inst_205813__$1,inst_205717,done);
var state_205845__$1 = (function (){var statearr_205921 = state_205845;
(statearr_205921[(23)] = inst_205813__$1);

return statearr_205921;
})();
if(cljs.core.truth_(inst_205814)){
var statearr_205922_205984 = state_205845__$1;
(statearr_205922_205984[(1)] = (39));

} else {
var statearr_205923_205985 = state_205845__$1;
(statearr_205923_205985[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205846 === (8))){
var inst_205729 = (state_205845[(14)]);
var inst_205728 = (state_205845[(16)]);
var inst_205731 = (inst_205729 < inst_205728);
var inst_205732 = inst_205731;
var state_205845__$1 = state_205845;
if(cljs.core.truth_(inst_205732)){
var statearr_205924_205986 = state_205845__$1;
(statearr_205924_205986[(1)] = (10));

} else {
var statearr_205925_205987 = state_205845__$1;
(statearr_205925_205987[(1)] = (11));

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
});})(c__9199__auto___205933,cs,m,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___205933,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_205929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_205929[(0)] = state_machine__9185__auto__);

(statearr_205929[(1)] = (1));

return statearr_205929;
});
var state_machine__9185__auto____1 = (function (state_205845){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_205845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e205930){if((e205930 instanceof Object)){
var ex__9188__auto__ = e205930;
var statearr_205931_205988 = state_205845;
(statearr_205931_205988[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205989 = state_205845;
state_205845 = G__205989;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_205845){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_205845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___205933,cs,m,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_205932 = f__9200__auto__.call(null);
(statearr_205932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___205933);

return statearr_205932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___205933,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj205991 = {};
return obj205991;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__205992){
var map__205997 = p__205992;
var map__205997__$1 = ((cljs.core.seq_QMARK_.call(null,map__205997))?cljs.core.apply.call(null,cljs.core.hash_map,map__205997):map__205997);
var opts = map__205997__$1;
var statearr_205998_206001 = state;
(statearr_205998_206001[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__205997,map__205997__$1,opts){
return (function (val){
var statearr_205999_206002 = state;
(statearr_205999_206002[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__205997,map__205997__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_206000_206003 = state;
(statearr_206000_206003[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__205992 = null;
if (arguments.length > 3) {
  p__205992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__205992);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__206004){
var state = cljs.core.first(arglist__206004);
arglist__206004 = cljs.core.next(arglist__206004);
var cont_block = cljs.core.first(arglist__206004);
arglist__206004 = cljs.core.next(arglist__206004);
var ports = cljs.core.first(arglist__206004);
var p__205992 = cljs.core.rest(arglist__206004);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__205992);
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
if(typeof cljs.core.async.t206124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206124 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta206125){
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
this.meta206125 = meta206125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206124.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t206124.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t206124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t206124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_206126){
var self__ = this;
var _206126__$1 = this;
return self__.meta206125;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_206126,meta206125__$1){
var self__ = this;
var _206126__$1 = this;
return (new cljs.core.async.t206124(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta206125__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t206124.cljs$lang$type = true;

cljs.core.async.t206124.cljs$lang$ctorStr = "cljs.core.async/t206124";

cljs.core.async.t206124.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206124");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t206124 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t206124(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta206125){
return (new cljs.core.async.t206124(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta206125));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t206124(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___206243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_206196){
var state_val_206197 = (state_206196[(1)]);
if((state_val_206197 === (7))){
var inst_206140 = (state_206196[(7)]);
var inst_206145 = cljs.core.apply.call(null,cljs.core.hash_map,inst_206140);
var state_206196__$1 = state_206196;
var statearr_206198_206244 = state_206196__$1;
(statearr_206198_206244[(2)] = inst_206145);

(statearr_206198_206244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (20))){
var inst_206155 = (state_206196[(8)]);
var state_206196__$1 = state_206196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206196__$1,(23),out,inst_206155);
} else {
if((state_val_206197 === (1))){
var inst_206130 = (state_206196[(9)]);
var inst_206130__$1 = calc_state.call(null);
var inst_206131 = cljs.core.seq_QMARK_.call(null,inst_206130__$1);
var state_206196__$1 = (function (){var statearr_206199 = state_206196;
(statearr_206199[(9)] = inst_206130__$1);

return statearr_206199;
})();
if(inst_206131){
var statearr_206200_206245 = state_206196__$1;
(statearr_206200_206245[(1)] = (2));

} else {
var statearr_206201_206246 = state_206196__$1;
(statearr_206201_206246[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (24))){
var inst_206148 = (state_206196[(10)]);
var inst_206140 = inst_206148;
var state_206196__$1 = (function (){var statearr_206202 = state_206196;
(statearr_206202[(7)] = inst_206140);

return statearr_206202;
})();
var statearr_206203_206247 = state_206196__$1;
(statearr_206203_206247[(2)] = null);

(statearr_206203_206247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (4))){
var inst_206130 = (state_206196[(9)]);
var inst_206136 = (state_206196[(2)]);
var inst_206137 = cljs.core.get.call(null,inst_206136,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_206138 = cljs.core.get.call(null,inst_206136,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_206139 = cljs.core.get.call(null,inst_206136,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_206140 = inst_206130;
var state_206196__$1 = (function (){var statearr_206204 = state_206196;
(statearr_206204[(11)] = inst_206138);

(statearr_206204[(12)] = inst_206139);

(statearr_206204[(7)] = inst_206140);

(statearr_206204[(13)] = inst_206137);

return statearr_206204;
})();
var statearr_206205_206248 = state_206196__$1;
(statearr_206205_206248[(2)] = null);

(statearr_206205_206248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (15))){
var state_206196__$1 = state_206196;
var statearr_206206_206249 = state_206196__$1;
(statearr_206206_206249[(2)] = null);

(statearr_206206_206249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (21))){
var inst_206148 = (state_206196[(10)]);
var inst_206140 = inst_206148;
var state_206196__$1 = (function (){var statearr_206207 = state_206196;
(statearr_206207[(7)] = inst_206140);

return statearr_206207;
})();
var statearr_206208_206250 = state_206196__$1;
(statearr_206208_206250[(2)] = null);

(statearr_206208_206250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (13))){
var inst_206192 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
var statearr_206209_206251 = state_206196__$1;
(statearr_206209_206251[(2)] = inst_206192);

(statearr_206209_206251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (22))){
var inst_206190 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
var statearr_206210_206252 = state_206196__$1;
(statearr_206210_206252[(2)] = inst_206190);

(statearr_206210_206252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (6))){
var inst_206194 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206196__$1,inst_206194);
} else {
if((state_val_206197 === (25))){
var state_206196__$1 = state_206196;
var statearr_206211_206253 = state_206196__$1;
(statearr_206211_206253[(2)] = null);

(statearr_206211_206253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (17))){
var inst_206170 = (state_206196[(14)]);
var state_206196__$1 = state_206196;
var statearr_206212_206254 = state_206196__$1;
(statearr_206212_206254[(2)] = inst_206170);

(statearr_206212_206254[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (3))){
var inst_206130 = (state_206196[(9)]);
var state_206196__$1 = state_206196;
var statearr_206213_206255 = state_206196__$1;
(statearr_206213_206255[(2)] = inst_206130);

(statearr_206213_206255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (12))){
var inst_206170 = (state_206196[(14)]);
var inst_206151 = (state_206196[(15)]);
var inst_206156 = (state_206196[(16)]);
var inst_206170__$1 = inst_206151.call(null,inst_206156);
var state_206196__$1 = (function (){var statearr_206214 = state_206196;
(statearr_206214[(14)] = inst_206170__$1);

return statearr_206214;
})();
if(cljs.core.truth_(inst_206170__$1)){
var statearr_206215_206256 = state_206196__$1;
(statearr_206215_206256[(1)] = (17));

} else {
var statearr_206216_206257 = state_206196__$1;
(statearr_206216_206257[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (2))){
var inst_206130 = (state_206196[(9)]);
var inst_206133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_206130);
var state_206196__$1 = state_206196;
var statearr_206217_206258 = state_206196__$1;
(statearr_206217_206258[(2)] = inst_206133);

(statearr_206217_206258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (23))){
var inst_206181 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
if(cljs.core.truth_(inst_206181)){
var statearr_206218_206259 = state_206196__$1;
(statearr_206218_206259[(1)] = (24));

} else {
var statearr_206219_206260 = state_206196__$1;
(statearr_206219_206260[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (19))){
var inst_206178 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
if(cljs.core.truth_(inst_206178)){
var statearr_206220_206261 = state_206196__$1;
(statearr_206220_206261[(1)] = (20));

} else {
var statearr_206221_206262 = state_206196__$1;
(statearr_206221_206262[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (11))){
var inst_206155 = (state_206196[(8)]);
var inst_206161 = (inst_206155 == null);
var state_206196__$1 = state_206196;
if(cljs.core.truth_(inst_206161)){
var statearr_206222_206263 = state_206196__$1;
(statearr_206222_206263[(1)] = (14));

} else {
var statearr_206223_206264 = state_206196__$1;
(statearr_206223_206264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (9))){
var inst_206148 = (state_206196[(10)]);
var inst_206148__$1 = (state_206196[(2)]);
var inst_206149 = cljs.core.get.call(null,inst_206148__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_206150 = cljs.core.get.call(null,inst_206148__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_206151 = cljs.core.get.call(null,inst_206148__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_206196__$1 = (function (){var statearr_206224 = state_206196;
(statearr_206224[(10)] = inst_206148__$1);

(statearr_206224[(15)] = inst_206151);

(statearr_206224[(17)] = inst_206150);

return statearr_206224;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_206196__$1,(10),inst_206149);
} else {
if((state_val_206197 === (5))){
var inst_206140 = (state_206196[(7)]);
var inst_206143 = cljs.core.seq_QMARK_.call(null,inst_206140);
var state_206196__$1 = state_206196;
if(inst_206143){
var statearr_206225_206265 = state_206196__$1;
(statearr_206225_206265[(1)] = (7));

} else {
var statearr_206226_206266 = state_206196__$1;
(statearr_206226_206266[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (14))){
var inst_206156 = (state_206196[(16)]);
var inst_206163 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_206156);
var state_206196__$1 = state_206196;
var statearr_206227_206267 = state_206196__$1;
(statearr_206227_206267[(2)] = inst_206163);

(statearr_206227_206267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (26))){
var inst_206186 = (state_206196[(2)]);
var state_206196__$1 = state_206196;
var statearr_206228_206268 = state_206196__$1;
(statearr_206228_206268[(2)] = inst_206186);

(statearr_206228_206268[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (16))){
var inst_206166 = (state_206196[(2)]);
var inst_206167 = calc_state.call(null);
var inst_206140 = inst_206167;
var state_206196__$1 = (function (){var statearr_206229 = state_206196;
(statearr_206229[(7)] = inst_206140);

(statearr_206229[(18)] = inst_206166);

return statearr_206229;
})();
var statearr_206230_206269 = state_206196__$1;
(statearr_206230_206269[(2)] = null);

(statearr_206230_206269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (10))){
var inst_206155 = (state_206196[(8)]);
var inst_206156 = (state_206196[(16)]);
var inst_206154 = (state_206196[(2)]);
var inst_206155__$1 = cljs.core.nth.call(null,inst_206154,(0),null);
var inst_206156__$1 = cljs.core.nth.call(null,inst_206154,(1),null);
var inst_206157 = (inst_206155__$1 == null);
var inst_206158 = cljs.core._EQ_.call(null,inst_206156__$1,change);
var inst_206159 = (inst_206157) || (inst_206158);
var state_206196__$1 = (function (){var statearr_206231 = state_206196;
(statearr_206231[(8)] = inst_206155__$1);

(statearr_206231[(16)] = inst_206156__$1);

return statearr_206231;
})();
if(cljs.core.truth_(inst_206159)){
var statearr_206232_206270 = state_206196__$1;
(statearr_206232_206270[(1)] = (11));

} else {
var statearr_206233_206271 = state_206196__$1;
(statearr_206233_206271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (18))){
var inst_206151 = (state_206196[(15)]);
var inst_206156 = (state_206196[(16)]);
var inst_206150 = (state_206196[(17)]);
var inst_206173 = cljs.core.empty_QMARK_.call(null,inst_206151);
var inst_206174 = inst_206150.call(null,inst_206156);
var inst_206175 = cljs.core.not.call(null,inst_206174);
var inst_206176 = (inst_206173) && (inst_206175);
var state_206196__$1 = state_206196;
var statearr_206234_206272 = state_206196__$1;
(statearr_206234_206272[(2)] = inst_206176);

(statearr_206234_206272[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206197 === (8))){
var inst_206140 = (state_206196[(7)]);
var state_206196__$1 = state_206196;
var statearr_206235_206273 = state_206196__$1;
(statearr_206235_206273[(2)] = inst_206140);

(statearr_206235_206273[(1)] = (9));


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
});})(c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9184__auto__,c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_206239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_206239[(0)] = state_machine__9185__auto__);

(statearr_206239[(1)] = (1));

return statearr_206239;
});
var state_machine__9185__auto____1 = (function (state_206196){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_206196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e206240){if((e206240 instanceof Object)){
var ex__9188__auto__ = e206240;
var statearr_206241_206274 = state_206196;
(statearr_206241_206274[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e206240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__206275 = state_206196;
state_206196 = G__206275;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_206196){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_206196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9201__auto__ = (function (){var statearr_206242 = f__9200__auto__.call(null);
(statearr_206242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___206243);

return statearr_206242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___206243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj206277 = {};
return obj206277;
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
return (function (p1__206278_SHARP_){
if(cljs.core.truth_(p1__206278_SHARP_.call(null,topic))){
return p1__206278_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__206278_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t206401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206401 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta206402){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta206402 = meta206402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206401.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t206401.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t206401.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t206401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t206401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t206401.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t206401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t206401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_206403){
var self__ = this;
var _206403__$1 = this;
return self__.meta206402;
});})(mults,ensure_mult))
;

cljs.core.async.t206401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_206403,meta206402__$1){
var self__ = this;
var _206403__$1 = this;
return (new cljs.core.async.t206401(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta206402__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t206401.cljs$lang$type = true;

cljs.core.async.t206401.cljs$lang$ctorStr = "cljs.core.async/t206401";

cljs.core.async.t206401.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206401");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t206401 = ((function (mults,ensure_mult){
return (function __GT_t206401(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta206402){
return (new cljs.core.async.t206401(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta206402));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t206401(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__9199__auto___206523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___206523,mults,ensure_mult,p){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___206523,mults,ensure_mult,p){
return (function (state_206475){
var state_val_206476 = (state_206475[(1)]);
if((state_val_206476 === (7))){
var inst_206471 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206477_206524 = state_206475__$1;
(statearr_206477_206524[(2)] = inst_206471);

(statearr_206477_206524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (20))){
var state_206475__$1 = state_206475;
var statearr_206478_206525 = state_206475__$1;
(statearr_206478_206525[(2)] = null);

(statearr_206478_206525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (1))){
var state_206475__$1 = state_206475;
var statearr_206479_206526 = state_206475__$1;
(statearr_206479_206526[(2)] = null);

(statearr_206479_206526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (24))){
var inst_206454 = (state_206475[(7)]);
var inst_206463 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_206454);
var state_206475__$1 = state_206475;
var statearr_206480_206527 = state_206475__$1;
(statearr_206480_206527[(2)] = inst_206463);

(statearr_206480_206527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (4))){
var inst_206406 = (state_206475[(8)]);
var inst_206406__$1 = (state_206475[(2)]);
var inst_206407 = (inst_206406__$1 == null);
var state_206475__$1 = (function (){var statearr_206481 = state_206475;
(statearr_206481[(8)] = inst_206406__$1);

return statearr_206481;
})();
if(cljs.core.truth_(inst_206407)){
var statearr_206482_206528 = state_206475__$1;
(statearr_206482_206528[(1)] = (5));

} else {
var statearr_206483_206529 = state_206475__$1;
(statearr_206483_206529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (15))){
var inst_206448 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206484_206530 = state_206475__$1;
(statearr_206484_206530[(2)] = inst_206448);

(statearr_206484_206530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (21))){
var inst_206468 = (state_206475[(2)]);
var state_206475__$1 = (function (){var statearr_206485 = state_206475;
(statearr_206485[(9)] = inst_206468);

return statearr_206485;
})();
var statearr_206486_206531 = state_206475__$1;
(statearr_206486_206531[(2)] = null);

(statearr_206486_206531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (13))){
var inst_206430 = (state_206475[(10)]);
var inst_206432 = cljs.core.chunked_seq_QMARK_.call(null,inst_206430);
var state_206475__$1 = state_206475;
if(inst_206432){
var statearr_206487_206532 = state_206475__$1;
(statearr_206487_206532[(1)] = (16));

} else {
var statearr_206488_206533 = state_206475__$1;
(statearr_206488_206533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (22))){
var inst_206460 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
if(cljs.core.truth_(inst_206460)){
var statearr_206489_206534 = state_206475__$1;
(statearr_206489_206534[(1)] = (23));

} else {
var statearr_206490_206535 = state_206475__$1;
(statearr_206490_206535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (6))){
var inst_206456 = (state_206475[(11)]);
var inst_206454 = (state_206475[(7)]);
var inst_206406 = (state_206475[(8)]);
var inst_206454__$1 = topic_fn.call(null,inst_206406);
var inst_206455 = cljs.core.deref.call(null,mults);
var inst_206456__$1 = cljs.core.get.call(null,inst_206455,inst_206454__$1);
var state_206475__$1 = (function (){var statearr_206491 = state_206475;
(statearr_206491[(11)] = inst_206456__$1);

(statearr_206491[(7)] = inst_206454__$1);

return statearr_206491;
})();
if(cljs.core.truth_(inst_206456__$1)){
var statearr_206492_206536 = state_206475__$1;
(statearr_206492_206536[(1)] = (19));

} else {
var statearr_206493_206537 = state_206475__$1;
(statearr_206493_206537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (25))){
var inst_206465 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206494_206538 = state_206475__$1;
(statearr_206494_206538[(2)] = inst_206465);

(statearr_206494_206538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (17))){
var inst_206430 = (state_206475[(10)]);
var inst_206439 = cljs.core.first.call(null,inst_206430);
var inst_206440 = cljs.core.async.muxch_STAR_.call(null,inst_206439);
var inst_206441 = cljs.core.async.close_BANG_.call(null,inst_206440);
var inst_206442 = cljs.core.next.call(null,inst_206430);
var inst_206416 = inst_206442;
var inst_206417 = null;
var inst_206418 = (0);
var inst_206419 = (0);
var state_206475__$1 = (function (){var statearr_206495 = state_206475;
(statearr_206495[(12)] = inst_206419);

(statearr_206495[(13)] = inst_206416);

(statearr_206495[(14)] = inst_206418);

(statearr_206495[(15)] = inst_206441);

(statearr_206495[(16)] = inst_206417);

return statearr_206495;
})();
var statearr_206496_206539 = state_206475__$1;
(statearr_206496_206539[(2)] = null);

(statearr_206496_206539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (3))){
var inst_206473 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206475__$1,inst_206473);
} else {
if((state_val_206476 === (12))){
var inst_206450 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206497_206540 = state_206475__$1;
(statearr_206497_206540[(2)] = inst_206450);

(statearr_206497_206540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (2))){
var state_206475__$1 = state_206475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_206475__$1,(4),ch);
} else {
if((state_val_206476 === (23))){
var state_206475__$1 = state_206475;
var statearr_206498_206541 = state_206475__$1;
(statearr_206498_206541[(2)] = null);

(statearr_206498_206541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (19))){
var inst_206456 = (state_206475[(11)]);
var inst_206406 = (state_206475[(8)]);
var inst_206458 = cljs.core.async.muxch_STAR_.call(null,inst_206456);
var state_206475__$1 = state_206475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206475__$1,(22),inst_206458,inst_206406);
} else {
if((state_val_206476 === (11))){
var inst_206416 = (state_206475[(13)]);
var inst_206430 = (state_206475[(10)]);
var inst_206430__$1 = cljs.core.seq.call(null,inst_206416);
var state_206475__$1 = (function (){var statearr_206499 = state_206475;
(statearr_206499[(10)] = inst_206430__$1);

return statearr_206499;
})();
if(inst_206430__$1){
var statearr_206500_206542 = state_206475__$1;
(statearr_206500_206542[(1)] = (13));

} else {
var statearr_206501_206543 = state_206475__$1;
(statearr_206501_206543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (9))){
var inst_206452 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206502_206544 = state_206475__$1;
(statearr_206502_206544[(2)] = inst_206452);

(statearr_206502_206544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (5))){
var inst_206413 = cljs.core.deref.call(null,mults);
var inst_206414 = cljs.core.vals.call(null,inst_206413);
var inst_206415 = cljs.core.seq.call(null,inst_206414);
var inst_206416 = inst_206415;
var inst_206417 = null;
var inst_206418 = (0);
var inst_206419 = (0);
var state_206475__$1 = (function (){var statearr_206503 = state_206475;
(statearr_206503[(12)] = inst_206419);

(statearr_206503[(13)] = inst_206416);

(statearr_206503[(14)] = inst_206418);

(statearr_206503[(16)] = inst_206417);

return statearr_206503;
})();
var statearr_206504_206545 = state_206475__$1;
(statearr_206504_206545[(2)] = null);

(statearr_206504_206545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (14))){
var state_206475__$1 = state_206475;
var statearr_206508_206546 = state_206475__$1;
(statearr_206508_206546[(2)] = null);

(statearr_206508_206546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (16))){
var inst_206430 = (state_206475[(10)]);
var inst_206434 = cljs.core.chunk_first.call(null,inst_206430);
var inst_206435 = cljs.core.chunk_rest.call(null,inst_206430);
var inst_206436 = cljs.core.count.call(null,inst_206434);
var inst_206416 = inst_206435;
var inst_206417 = inst_206434;
var inst_206418 = inst_206436;
var inst_206419 = (0);
var state_206475__$1 = (function (){var statearr_206509 = state_206475;
(statearr_206509[(12)] = inst_206419);

(statearr_206509[(13)] = inst_206416);

(statearr_206509[(14)] = inst_206418);

(statearr_206509[(16)] = inst_206417);

return statearr_206509;
})();
var statearr_206510_206547 = state_206475__$1;
(statearr_206510_206547[(2)] = null);

(statearr_206510_206547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (10))){
var inst_206419 = (state_206475[(12)]);
var inst_206416 = (state_206475[(13)]);
var inst_206418 = (state_206475[(14)]);
var inst_206417 = (state_206475[(16)]);
var inst_206424 = cljs.core._nth.call(null,inst_206417,inst_206419);
var inst_206425 = cljs.core.async.muxch_STAR_.call(null,inst_206424);
var inst_206426 = cljs.core.async.close_BANG_.call(null,inst_206425);
var inst_206427 = (inst_206419 + (1));
var tmp206505 = inst_206416;
var tmp206506 = inst_206418;
var tmp206507 = inst_206417;
var inst_206416__$1 = tmp206505;
var inst_206417__$1 = tmp206507;
var inst_206418__$1 = tmp206506;
var inst_206419__$1 = inst_206427;
var state_206475__$1 = (function (){var statearr_206511 = state_206475;
(statearr_206511[(12)] = inst_206419__$1);

(statearr_206511[(13)] = inst_206416__$1);

(statearr_206511[(14)] = inst_206418__$1);

(statearr_206511[(17)] = inst_206426);

(statearr_206511[(16)] = inst_206417__$1);

return statearr_206511;
})();
var statearr_206512_206548 = state_206475__$1;
(statearr_206512_206548[(2)] = null);

(statearr_206512_206548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (18))){
var inst_206445 = (state_206475[(2)]);
var state_206475__$1 = state_206475;
var statearr_206513_206549 = state_206475__$1;
(statearr_206513_206549[(2)] = inst_206445);

(statearr_206513_206549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206476 === (8))){
var inst_206419 = (state_206475[(12)]);
var inst_206418 = (state_206475[(14)]);
var inst_206421 = (inst_206419 < inst_206418);
var inst_206422 = inst_206421;
var state_206475__$1 = state_206475;
if(cljs.core.truth_(inst_206422)){
var statearr_206514_206550 = state_206475__$1;
(statearr_206514_206550[(1)] = (10));

} else {
var statearr_206515_206551 = state_206475__$1;
(statearr_206515_206551[(1)] = (11));

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
});})(c__9199__auto___206523,mults,ensure_mult,p))
;
return ((function (switch__9184__auto__,c__9199__auto___206523,mults,ensure_mult,p){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_206519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_206519[(0)] = state_machine__9185__auto__);

(statearr_206519[(1)] = (1));

return statearr_206519;
});
var state_machine__9185__auto____1 = (function (state_206475){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_206475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e206520){if((e206520 instanceof Object)){
var ex__9188__auto__ = e206520;
var statearr_206521_206552 = state_206475;
(statearr_206521_206552[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e206520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__206553 = state_206475;
state_206475 = G__206553;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_206475){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_206475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___206523,mults,ensure_mult,p))
})();
var state__9201__auto__ = (function (){var statearr_206522 = f__9200__auto__.call(null);
(statearr_206522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___206523);

return statearr_206522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___206523,mults,ensure_mult,p))
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
var c__9199__auto___206690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_206660){
var state_val_206661 = (state_206660[(1)]);
if((state_val_206661 === (7))){
var state_206660__$1 = state_206660;
var statearr_206662_206691 = state_206660__$1;
(statearr_206662_206691[(2)] = null);

(statearr_206662_206691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (1))){
var state_206660__$1 = state_206660;
var statearr_206663_206692 = state_206660__$1;
(statearr_206663_206692[(2)] = null);

(statearr_206663_206692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (4))){
var inst_206624 = (state_206660[(7)]);
var inst_206626 = (inst_206624 < cnt);
var state_206660__$1 = state_206660;
if(cljs.core.truth_(inst_206626)){
var statearr_206664_206693 = state_206660__$1;
(statearr_206664_206693[(1)] = (6));

} else {
var statearr_206665_206694 = state_206660__$1;
(statearr_206665_206694[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (15))){
var inst_206656 = (state_206660[(2)]);
var state_206660__$1 = state_206660;
var statearr_206666_206695 = state_206660__$1;
(statearr_206666_206695[(2)] = inst_206656);

(statearr_206666_206695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (13))){
var inst_206649 = cljs.core.async.close_BANG_.call(null,out);
var state_206660__$1 = state_206660;
var statearr_206667_206696 = state_206660__$1;
(statearr_206667_206696[(2)] = inst_206649);

(statearr_206667_206696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (6))){
var state_206660__$1 = state_206660;
var statearr_206668_206697 = state_206660__$1;
(statearr_206668_206697[(2)] = null);

(statearr_206668_206697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (3))){
var inst_206658 = (state_206660[(2)]);
var state_206660__$1 = state_206660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206660__$1,inst_206658);
} else {
if((state_val_206661 === (12))){
var inst_206646 = (state_206660[(8)]);
var inst_206646__$1 = (state_206660[(2)]);
var inst_206647 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_206646__$1);
var state_206660__$1 = (function (){var statearr_206669 = state_206660;
(statearr_206669[(8)] = inst_206646__$1);

return statearr_206669;
})();
if(cljs.core.truth_(inst_206647)){
var statearr_206670_206698 = state_206660__$1;
(statearr_206670_206698[(1)] = (13));

} else {
var statearr_206671_206699 = state_206660__$1;
(statearr_206671_206699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (2))){
var inst_206623 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_206624 = (0);
var state_206660__$1 = (function (){var statearr_206672 = state_206660;
(statearr_206672[(7)] = inst_206624);

(statearr_206672[(9)] = inst_206623);

return statearr_206672;
})();
var statearr_206673_206700 = state_206660__$1;
(statearr_206673_206700[(2)] = null);

(statearr_206673_206700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (11))){
var inst_206624 = (state_206660[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_206660,(10),Object,null,(9));
var inst_206633 = chs__$1.call(null,inst_206624);
var inst_206634 = done.call(null,inst_206624);
var inst_206635 = cljs.core.async.take_BANG_.call(null,inst_206633,inst_206634);
var state_206660__$1 = state_206660;
var statearr_206674_206701 = state_206660__$1;
(statearr_206674_206701[(2)] = inst_206635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (9))){
var inst_206624 = (state_206660[(7)]);
var inst_206637 = (state_206660[(2)]);
var inst_206638 = (inst_206624 + (1));
var inst_206624__$1 = inst_206638;
var state_206660__$1 = (function (){var statearr_206675 = state_206660;
(statearr_206675[(10)] = inst_206637);

(statearr_206675[(7)] = inst_206624__$1);

return statearr_206675;
})();
var statearr_206676_206702 = state_206660__$1;
(statearr_206676_206702[(2)] = null);

(statearr_206676_206702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (5))){
var inst_206644 = (state_206660[(2)]);
var state_206660__$1 = (function (){var statearr_206677 = state_206660;
(statearr_206677[(11)] = inst_206644);

return statearr_206677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_206660__$1,(12),dchan);
} else {
if((state_val_206661 === (14))){
var inst_206646 = (state_206660[(8)]);
var inst_206651 = cljs.core.apply.call(null,f,inst_206646);
var state_206660__$1 = state_206660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206660__$1,(16),out,inst_206651);
} else {
if((state_val_206661 === (16))){
var inst_206653 = (state_206660[(2)]);
var state_206660__$1 = (function (){var statearr_206678 = state_206660;
(statearr_206678[(12)] = inst_206653);

return statearr_206678;
})();
var statearr_206679_206703 = state_206660__$1;
(statearr_206679_206703[(2)] = null);

(statearr_206679_206703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (10))){
var inst_206628 = (state_206660[(2)]);
var inst_206629 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_206660__$1 = (function (){var statearr_206680 = state_206660;
(statearr_206680[(13)] = inst_206628);

return statearr_206680;
})();
var statearr_206681_206704 = state_206660__$1;
(statearr_206681_206704[(2)] = inst_206629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206661 === (8))){
var inst_206642 = (state_206660[(2)]);
var state_206660__$1 = state_206660;
var statearr_206682_206705 = state_206660__$1;
(statearr_206682_206705[(2)] = inst_206642);

(statearr_206682_206705[(1)] = (5));


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
});})(c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9184__auto__,c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_206686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_206686[(0)] = state_machine__9185__auto__);

(statearr_206686[(1)] = (1));

return statearr_206686;
});
var state_machine__9185__auto____1 = (function (state_206660){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_206660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e206687){if((e206687 instanceof Object)){
var ex__9188__auto__ = e206687;
var statearr_206688_206706 = state_206660;
(statearr_206688_206706[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e206687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__206707 = state_206660;
state_206660 = G__206707;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_206660){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_206660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9201__auto__ = (function (){var statearr_206689 = f__9200__auto__.call(null);
(statearr_206689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___206690);

return statearr_206689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___206690,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__9199__auto___206815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___206815,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___206815,out){
return (function (state_206791){
var state_val_206792 = (state_206791[(1)]);
if((state_val_206792 === (7))){
var inst_206770 = (state_206791[(7)]);
var inst_206771 = (state_206791[(8)]);
var inst_206770__$1 = (state_206791[(2)]);
var inst_206771__$1 = cljs.core.nth.call(null,inst_206770__$1,(0),null);
var inst_206772 = cljs.core.nth.call(null,inst_206770__$1,(1),null);
var inst_206773 = (inst_206771__$1 == null);
var state_206791__$1 = (function (){var statearr_206793 = state_206791;
(statearr_206793[(7)] = inst_206770__$1);

(statearr_206793[(8)] = inst_206771__$1);

(statearr_206793[(9)] = inst_206772);

return statearr_206793;
})();
if(cljs.core.truth_(inst_206773)){
var statearr_206794_206816 = state_206791__$1;
(statearr_206794_206816[(1)] = (8));

} else {
var statearr_206795_206817 = state_206791__$1;
(statearr_206795_206817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (1))){
var inst_206762 = cljs.core.vec.call(null,chs);
var inst_206763 = inst_206762;
var state_206791__$1 = (function (){var statearr_206796 = state_206791;
(statearr_206796[(10)] = inst_206763);

return statearr_206796;
})();
var statearr_206797_206818 = state_206791__$1;
(statearr_206797_206818[(2)] = null);

(statearr_206797_206818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (4))){
var inst_206763 = (state_206791[(10)]);
var state_206791__$1 = state_206791;
return cljs.core.async.ioc_alts_BANG_.call(null,state_206791__$1,(7),inst_206763);
} else {
if((state_val_206792 === (6))){
var inst_206787 = (state_206791[(2)]);
var state_206791__$1 = state_206791;
var statearr_206798_206819 = state_206791__$1;
(statearr_206798_206819[(2)] = inst_206787);

(statearr_206798_206819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (3))){
var inst_206789 = (state_206791[(2)]);
var state_206791__$1 = state_206791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206791__$1,inst_206789);
} else {
if((state_val_206792 === (2))){
var inst_206763 = (state_206791[(10)]);
var inst_206765 = cljs.core.count.call(null,inst_206763);
var inst_206766 = (inst_206765 > (0));
var state_206791__$1 = state_206791;
if(cljs.core.truth_(inst_206766)){
var statearr_206800_206820 = state_206791__$1;
(statearr_206800_206820[(1)] = (4));

} else {
var statearr_206801_206821 = state_206791__$1;
(statearr_206801_206821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (11))){
var inst_206763 = (state_206791[(10)]);
var inst_206780 = (state_206791[(2)]);
var tmp206799 = inst_206763;
var inst_206763__$1 = tmp206799;
var state_206791__$1 = (function (){var statearr_206802 = state_206791;
(statearr_206802[(10)] = inst_206763__$1);

(statearr_206802[(11)] = inst_206780);

return statearr_206802;
})();
var statearr_206803_206822 = state_206791__$1;
(statearr_206803_206822[(2)] = null);

(statearr_206803_206822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (9))){
var inst_206771 = (state_206791[(8)]);
var state_206791__$1 = state_206791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206791__$1,(11),out,inst_206771);
} else {
if((state_val_206792 === (5))){
var inst_206785 = cljs.core.async.close_BANG_.call(null,out);
var state_206791__$1 = state_206791;
var statearr_206804_206823 = state_206791__$1;
(statearr_206804_206823[(2)] = inst_206785);

(statearr_206804_206823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (10))){
var inst_206783 = (state_206791[(2)]);
var state_206791__$1 = state_206791;
var statearr_206805_206824 = state_206791__$1;
(statearr_206805_206824[(2)] = inst_206783);

(statearr_206805_206824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206792 === (8))){
var inst_206770 = (state_206791[(7)]);
var inst_206771 = (state_206791[(8)]);
var inst_206772 = (state_206791[(9)]);
var inst_206763 = (state_206791[(10)]);
var inst_206775 = (function (){var c = inst_206772;
var v = inst_206771;
var vec__206768 = inst_206770;
var cs = inst_206763;
return ((function (c,v,vec__206768,cs,inst_206770,inst_206771,inst_206772,inst_206763,state_val_206792,c__9199__auto___206815,out){
return (function (p1__206708_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__206708_SHARP_);
});
;})(c,v,vec__206768,cs,inst_206770,inst_206771,inst_206772,inst_206763,state_val_206792,c__9199__auto___206815,out))
})();
var inst_206776 = cljs.core.filterv.call(null,inst_206775,inst_206763);
var inst_206763__$1 = inst_206776;
var state_206791__$1 = (function (){var statearr_206806 = state_206791;
(statearr_206806[(10)] = inst_206763__$1);

return statearr_206806;
})();
var statearr_206807_206825 = state_206791__$1;
(statearr_206807_206825[(2)] = null);

(statearr_206807_206825[(1)] = (2));


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
});})(c__9199__auto___206815,out))
;
return ((function (switch__9184__auto__,c__9199__auto___206815,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_206811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_206811[(0)] = state_machine__9185__auto__);

(statearr_206811[(1)] = (1));

return statearr_206811;
});
var state_machine__9185__auto____1 = (function (state_206791){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_206791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e206812){if((e206812 instanceof Object)){
var ex__9188__auto__ = e206812;
var statearr_206813_206826 = state_206791;
(statearr_206813_206826[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e206812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__206827 = state_206791;
state_206791 = G__206827;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_206791){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_206791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___206815,out))
})();
var state__9201__auto__ = (function (){var statearr_206814 = f__9200__auto__.call(null);
(statearr_206814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___206815);

return statearr_206814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___206815,out))
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
var c__9199__auto___206920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___206920,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___206920,out){
return (function (state_206897){
var state_val_206898 = (state_206897[(1)]);
if((state_val_206898 === (7))){
var inst_206879 = (state_206897[(7)]);
var inst_206879__$1 = (state_206897[(2)]);
var inst_206880 = (inst_206879__$1 == null);
var inst_206881 = cljs.core.not.call(null,inst_206880);
var state_206897__$1 = (function (){var statearr_206899 = state_206897;
(statearr_206899[(7)] = inst_206879__$1);

return statearr_206899;
})();
if(inst_206881){
var statearr_206900_206921 = state_206897__$1;
(statearr_206900_206921[(1)] = (8));

} else {
var statearr_206901_206922 = state_206897__$1;
(statearr_206901_206922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (1))){
var inst_206874 = (0);
var state_206897__$1 = (function (){var statearr_206902 = state_206897;
(statearr_206902[(8)] = inst_206874);

return statearr_206902;
})();
var statearr_206903_206923 = state_206897__$1;
(statearr_206903_206923[(2)] = null);

(statearr_206903_206923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (4))){
var state_206897__$1 = state_206897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_206897__$1,(7),ch);
} else {
if((state_val_206898 === (6))){
var inst_206892 = (state_206897[(2)]);
var state_206897__$1 = state_206897;
var statearr_206904_206924 = state_206897__$1;
(statearr_206904_206924[(2)] = inst_206892);

(statearr_206904_206924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (3))){
var inst_206894 = (state_206897[(2)]);
var inst_206895 = cljs.core.async.close_BANG_.call(null,out);
var state_206897__$1 = (function (){var statearr_206905 = state_206897;
(statearr_206905[(9)] = inst_206894);

return statearr_206905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206897__$1,inst_206895);
} else {
if((state_val_206898 === (2))){
var inst_206874 = (state_206897[(8)]);
var inst_206876 = (inst_206874 < n);
var state_206897__$1 = state_206897;
if(cljs.core.truth_(inst_206876)){
var statearr_206906_206925 = state_206897__$1;
(statearr_206906_206925[(1)] = (4));

} else {
var statearr_206907_206926 = state_206897__$1;
(statearr_206907_206926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (11))){
var inst_206874 = (state_206897[(8)]);
var inst_206884 = (state_206897[(2)]);
var inst_206885 = (inst_206874 + (1));
var inst_206874__$1 = inst_206885;
var state_206897__$1 = (function (){var statearr_206908 = state_206897;
(statearr_206908[(8)] = inst_206874__$1);

(statearr_206908[(10)] = inst_206884);

return statearr_206908;
})();
var statearr_206909_206927 = state_206897__$1;
(statearr_206909_206927[(2)] = null);

(statearr_206909_206927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (9))){
var state_206897__$1 = state_206897;
var statearr_206910_206928 = state_206897__$1;
(statearr_206910_206928[(2)] = null);

(statearr_206910_206928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (5))){
var state_206897__$1 = state_206897;
var statearr_206911_206929 = state_206897__$1;
(statearr_206911_206929[(2)] = null);

(statearr_206911_206929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (10))){
var inst_206889 = (state_206897[(2)]);
var state_206897__$1 = state_206897;
var statearr_206912_206930 = state_206897__$1;
(statearr_206912_206930[(2)] = inst_206889);

(statearr_206912_206930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_206898 === (8))){
var inst_206879 = (state_206897[(7)]);
var state_206897__$1 = state_206897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206897__$1,(11),out,inst_206879);
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
});})(c__9199__auto___206920,out))
;
return ((function (switch__9184__auto__,c__9199__auto___206920,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_206916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_206916[(0)] = state_machine__9185__auto__);

(statearr_206916[(1)] = (1));

return statearr_206916;
});
var state_machine__9185__auto____1 = (function (state_206897){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_206897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e206917){if((e206917 instanceof Object)){
var ex__9188__auto__ = e206917;
var statearr_206918_206931 = state_206897;
(statearr_206918_206931[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e206917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__206932 = state_206897;
state_206897 = G__206932;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_206897){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_206897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___206920,out))
})();
var state__9201__auto__ = (function (){var statearr_206919 = f__9200__auto__.call(null);
(statearr_206919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___206920);

return statearr_206919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___206920,out))
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
if(typeof cljs.core.async.t206940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206940 = (function (ch,f,map_LT_,meta206941){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta206941 = meta206941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t206943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206943 = (function (fn1,_,meta206941,map_LT_,f,ch,meta206944){
this.fn1 = fn1;
this._ = _;
this.meta206941 = meta206941;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta206944 = meta206944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t206943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t206943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__206933_SHARP_){
return f1.call(null,(((p1__206933_SHARP_ == null))?null:self__.f.call(null,p1__206933_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t206943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_206945){
var self__ = this;
var _206945__$1 = this;
return self__.meta206944;
});})(___$1))
;

cljs.core.async.t206943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_206945,meta206944__$1){
var self__ = this;
var _206945__$1 = this;
return (new cljs.core.async.t206943(self__.fn1,self__._,self__.meta206941,self__.map_LT_,self__.f,self__.ch,meta206944__$1));
});})(___$1))
;

cljs.core.async.t206943.cljs$lang$type = true;

cljs.core.async.t206943.cljs$lang$ctorStr = "cljs.core.async/t206943";

cljs.core.async.t206943.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206943");
});})(___$1))
;

cljs.core.async.__GT_t206943 = ((function (___$1){
return (function __GT_t206943(fn1__$1,___$2,meta206941__$1,map_LT___$1,f__$1,ch__$1,meta206944){
return (new cljs.core.async.t206943(fn1__$1,___$2,meta206941__$1,map_LT___$1,f__$1,ch__$1,meta206944));
});})(___$1))
;

}

return (new cljs.core.async.t206943(fn1,___$1,self__.meta206941,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t206940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t206940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_206942){
var self__ = this;
var _206942__$1 = this;
return self__.meta206941;
});

cljs.core.async.t206940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_206942,meta206941__$1){
var self__ = this;
var _206942__$1 = this;
return (new cljs.core.async.t206940(self__.ch,self__.f,self__.map_LT_,meta206941__$1));
});

cljs.core.async.t206940.cljs$lang$type = true;

cljs.core.async.t206940.cljs$lang$ctorStr = "cljs.core.async/t206940";

cljs.core.async.t206940.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206940");
});

cljs.core.async.__GT_t206940 = (function __GT_t206940(ch__$1,f__$1,map_LT___$1,meta206941){
return (new cljs.core.async.t206940(ch__$1,f__$1,map_LT___$1,meta206941));
});

}

return (new cljs.core.async.t206940(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t206949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206949 = (function (ch,f,map_GT_,meta206950){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta206950 = meta206950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t206949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t206949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_206951){
var self__ = this;
var _206951__$1 = this;
return self__.meta206950;
});

cljs.core.async.t206949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_206951,meta206950__$1){
var self__ = this;
var _206951__$1 = this;
return (new cljs.core.async.t206949(self__.ch,self__.f,self__.map_GT_,meta206950__$1));
});

cljs.core.async.t206949.cljs$lang$type = true;

cljs.core.async.t206949.cljs$lang$ctorStr = "cljs.core.async/t206949";

cljs.core.async.t206949.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206949");
});

cljs.core.async.__GT_t206949 = (function __GT_t206949(ch__$1,f__$1,map_GT___$1,meta206950){
return (new cljs.core.async.t206949(ch__$1,f__$1,map_GT___$1,meta206950));
});

}

return (new cljs.core.async.t206949(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t206955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t206955 = (function (ch,p,filter_GT_,meta206956){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta206956 = meta206956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t206955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t206955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_206957){
var self__ = this;
var _206957__$1 = this;
return self__.meta206956;
});

cljs.core.async.t206955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_206957,meta206956__$1){
var self__ = this;
var _206957__$1 = this;
return (new cljs.core.async.t206955(self__.ch,self__.p,self__.filter_GT_,meta206956__$1));
});

cljs.core.async.t206955.cljs$lang$type = true;

cljs.core.async.t206955.cljs$lang$ctorStr = "cljs.core.async/t206955";

cljs.core.async.t206955.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t206955");
});

cljs.core.async.__GT_t206955 = (function __GT_t206955(ch__$1,p__$1,filter_GT___$1,meta206956){
return (new cljs.core.async.t206955(ch__$1,p__$1,filter_GT___$1,meta206956));
});

}

return (new cljs.core.async.t206955(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__9199__auto___207040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___207040,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___207040,out){
return (function (state_207019){
var state_val_207020 = (state_207019[(1)]);
if((state_val_207020 === (7))){
var inst_207015 = (state_207019[(2)]);
var state_207019__$1 = state_207019;
var statearr_207021_207041 = state_207019__$1;
(statearr_207021_207041[(2)] = inst_207015);

(statearr_207021_207041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (1))){
var state_207019__$1 = state_207019;
var statearr_207022_207042 = state_207019__$1;
(statearr_207022_207042[(2)] = null);

(statearr_207022_207042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (4))){
var inst_207001 = (state_207019[(7)]);
var inst_207001__$1 = (state_207019[(2)]);
var inst_207002 = (inst_207001__$1 == null);
var state_207019__$1 = (function (){var statearr_207023 = state_207019;
(statearr_207023[(7)] = inst_207001__$1);

return statearr_207023;
})();
if(cljs.core.truth_(inst_207002)){
var statearr_207024_207043 = state_207019__$1;
(statearr_207024_207043[(1)] = (5));

} else {
var statearr_207025_207044 = state_207019__$1;
(statearr_207025_207044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (6))){
var inst_207001 = (state_207019[(7)]);
var inst_207006 = p.call(null,inst_207001);
var state_207019__$1 = state_207019;
if(cljs.core.truth_(inst_207006)){
var statearr_207026_207045 = state_207019__$1;
(statearr_207026_207045[(1)] = (8));

} else {
var statearr_207027_207046 = state_207019__$1;
(statearr_207027_207046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (3))){
var inst_207017 = (state_207019[(2)]);
var state_207019__$1 = state_207019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207019__$1,inst_207017);
} else {
if((state_val_207020 === (2))){
var state_207019__$1 = state_207019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207019__$1,(4),ch);
} else {
if((state_val_207020 === (11))){
var inst_207009 = (state_207019[(2)]);
var state_207019__$1 = state_207019;
var statearr_207028_207047 = state_207019__$1;
(statearr_207028_207047[(2)] = inst_207009);

(statearr_207028_207047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (9))){
var state_207019__$1 = state_207019;
var statearr_207029_207048 = state_207019__$1;
(statearr_207029_207048[(2)] = null);

(statearr_207029_207048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (5))){
var inst_207004 = cljs.core.async.close_BANG_.call(null,out);
var state_207019__$1 = state_207019;
var statearr_207030_207049 = state_207019__$1;
(statearr_207030_207049[(2)] = inst_207004);

(statearr_207030_207049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (10))){
var inst_207012 = (state_207019[(2)]);
var state_207019__$1 = (function (){var statearr_207031 = state_207019;
(statearr_207031[(8)] = inst_207012);

return statearr_207031;
})();
var statearr_207032_207050 = state_207019__$1;
(statearr_207032_207050[(2)] = null);

(statearr_207032_207050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207020 === (8))){
var inst_207001 = (state_207019[(7)]);
var state_207019__$1 = state_207019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207019__$1,(11),out,inst_207001);
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
});})(c__9199__auto___207040,out))
;
return ((function (switch__9184__auto__,c__9199__auto___207040,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_207036 = [null,null,null,null,null,null,null,null,null];
(statearr_207036[(0)] = state_machine__9185__auto__);

(statearr_207036[(1)] = (1));

return statearr_207036;
});
var state_machine__9185__auto____1 = (function (state_207019){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_207019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e207037){if((e207037 instanceof Object)){
var ex__9188__auto__ = e207037;
var statearr_207038_207051 = state_207019;
(statearr_207038_207051[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e207037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__207052 = state_207019;
state_207019 = G__207052;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_207019){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_207019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___207040,out))
})();
var state__9201__auto__ = (function (){var statearr_207039 = f__9200__auto__.call(null);
(statearr_207039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___207040);

return statearr_207039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___207040,out))
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
return (function (state_207218){
var state_val_207219 = (state_207218[(1)]);
if((state_val_207219 === (7))){
var inst_207214 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
var statearr_207220_207261 = state_207218__$1;
(statearr_207220_207261[(2)] = inst_207214);

(statearr_207220_207261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (20))){
var inst_207184 = (state_207218[(7)]);
var inst_207195 = (state_207218[(2)]);
var inst_207196 = cljs.core.next.call(null,inst_207184);
var inst_207170 = inst_207196;
var inst_207171 = null;
var inst_207172 = (0);
var inst_207173 = (0);
var state_207218__$1 = (function (){var statearr_207221 = state_207218;
(statearr_207221[(8)] = inst_207171);

(statearr_207221[(9)] = inst_207195);

(statearr_207221[(10)] = inst_207173);

(statearr_207221[(11)] = inst_207172);

(statearr_207221[(12)] = inst_207170);

return statearr_207221;
})();
var statearr_207222_207262 = state_207218__$1;
(statearr_207222_207262[(2)] = null);

(statearr_207222_207262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (1))){
var state_207218__$1 = state_207218;
var statearr_207223_207263 = state_207218__$1;
(statearr_207223_207263[(2)] = null);

(statearr_207223_207263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (4))){
var inst_207159 = (state_207218[(13)]);
var inst_207159__$1 = (state_207218[(2)]);
var inst_207160 = (inst_207159__$1 == null);
var state_207218__$1 = (function (){var statearr_207224 = state_207218;
(statearr_207224[(13)] = inst_207159__$1);

return statearr_207224;
})();
if(cljs.core.truth_(inst_207160)){
var statearr_207225_207264 = state_207218__$1;
(statearr_207225_207264[(1)] = (5));

} else {
var statearr_207226_207265 = state_207218__$1;
(statearr_207226_207265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (15))){
var state_207218__$1 = state_207218;
var statearr_207230_207266 = state_207218__$1;
(statearr_207230_207266[(2)] = null);

(statearr_207230_207266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (21))){
var state_207218__$1 = state_207218;
var statearr_207231_207267 = state_207218__$1;
(statearr_207231_207267[(2)] = null);

(statearr_207231_207267[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (13))){
var inst_207171 = (state_207218[(8)]);
var inst_207173 = (state_207218[(10)]);
var inst_207172 = (state_207218[(11)]);
var inst_207170 = (state_207218[(12)]);
var inst_207180 = (state_207218[(2)]);
var inst_207181 = (inst_207173 + (1));
var tmp207227 = inst_207171;
var tmp207228 = inst_207172;
var tmp207229 = inst_207170;
var inst_207170__$1 = tmp207229;
var inst_207171__$1 = tmp207227;
var inst_207172__$1 = tmp207228;
var inst_207173__$1 = inst_207181;
var state_207218__$1 = (function (){var statearr_207232 = state_207218;
(statearr_207232[(14)] = inst_207180);

(statearr_207232[(8)] = inst_207171__$1);

(statearr_207232[(10)] = inst_207173__$1);

(statearr_207232[(11)] = inst_207172__$1);

(statearr_207232[(12)] = inst_207170__$1);

return statearr_207232;
})();
var statearr_207233_207268 = state_207218__$1;
(statearr_207233_207268[(2)] = null);

(statearr_207233_207268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (22))){
var state_207218__$1 = state_207218;
var statearr_207234_207269 = state_207218__$1;
(statearr_207234_207269[(2)] = null);

(statearr_207234_207269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (6))){
var inst_207159 = (state_207218[(13)]);
var inst_207168 = f.call(null,inst_207159);
var inst_207169 = cljs.core.seq.call(null,inst_207168);
var inst_207170 = inst_207169;
var inst_207171 = null;
var inst_207172 = (0);
var inst_207173 = (0);
var state_207218__$1 = (function (){var statearr_207235 = state_207218;
(statearr_207235[(8)] = inst_207171);

(statearr_207235[(10)] = inst_207173);

(statearr_207235[(11)] = inst_207172);

(statearr_207235[(12)] = inst_207170);

return statearr_207235;
})();
var statearr_207236_207270 = state_207218__$1;
(statearr_207236_207270[(2)] = null);

(statearr_207236_207270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (17))){
var inst_207184 = (state_207218[(7)]);
var inst_207188 = cljs.core.chunk_first.call(null,inst_207184);
var inst_207189 = cljs.core.chunk_rest.call(null,inst_207184);
var inst_207190 = cljs.core.count.call(null,inst_207188);
var inst_207170 = inst_207189;
var inst_207171 = inst_207188;
var inst_207172 = inst_207190;
var inst_207173 = (0);
var state_207218__$1 = (function (){var statearr_207237 = state_207218;
(statearr_207237[(8)] = inst_207171);

(statearr_207237[(10)] = inst_207173);

(statearr_207237[(11)] = inst_207172);

(statearr_207237[(12)] = inst_207170);

return statearr_207237;
})();
var statearr_207238_207271 = state_207218__$1;
(statearr_207238_207271[(2)] = null);

(statearr_207238_207271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (3))){
var inst_207216 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207218__$1,inst_207216);
} else {
if((state_val_207219 === (12))){
var inst_207204 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
var statearr_207239_207272 = state_207218__$1;
(statearr_207239_207272[(2)] = inst_207204);

(statearr_207239_207272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (2))){
var state_207218__$1 = state_207218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207218__$1,(4),in$);
} else {
if((state_val_207219 === (23))){
var inst_207212 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
var statearr_207240_207273 = state_207218__$1;
(statearr_207240_207273[(2)] = inst_207212);

(statearr_207240_207273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (19))){
var inst_207199 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
var statearr_207241_207274 = state_207218__$1;
(statearr_207241_207274[(2)] = inst_207199);

(statearr_207241_207274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (11))){
var inst_207184 = (state_207218[(7)]);
var inst_207170 = (state_207218[(12)]);
var inst_207184__$1 = cljs.core.seq.call(null,inst_207170);
var state_207218__$1 = (function (){var statearr_207242 = state_207218;
(statearr_207242[(7)] = inst_207184__$1);

return statearr_207242;
})();
if(inst_207184__$1){
var statearr_207243_207275 = state_207218__$1;
(statearr_207243_207275[(1)] = (14));

} else {
var statearr_207244_207276 = state_207218__$1;
(statearr_207244_207276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (9))){
var inst_207206 = (state_207218[(2)]);
var inst_207207 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_207218__$1 = (function (){var statearr_207245 = state_207218;
(statearr_207245[(15)] = inst_207206);

return statearr_207245;
})();
if(cljs.core.truth_(inst_207207)){
var statearr_207246_207277 = state_207218__$1;
(statearr_207246_207277[(1)] = (21));

} else {
var statearr_207247_207278 = state_207218__$1;
(statearr_207247_207278[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (5))){
var inst_207162 = cljs.core.async.close_BANG_.call(null,out);
var state_207218__$1 = state_207218;
var statearr_207248_207279 = state_207218__$1;
(statearr_207248_207279[(2)] = inst_207162);

(statearr_207248_207279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (14))){
var inst_207184 = (state_207218[(7)]);
var inst_207186 = cljs.core.chunked_seq_QMARK_.call(null,inst_207184);
var state_207218__$1 = state_207218;
if(inst_207186){
var statearr_207249_207280 = state_207218__$1;
(statearr_207249_207280[(1)] = (17));

} else {
var statearr_207250_207281 = state_207218__$1;
(statearr_207250_207281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (16))){
var inst_207202 = (state_207218[(2)]);
var state_207218__$1 = state_207218;
var statearr_207251_207282 = state_207218__$1;
(statearr_207251_207282[(2)] = inst_207202);

(statearr_207251_207282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207219 === (10))){
var inst_207171 = (state_207218[(8)]);
var inst_207173 = (state_207218[(10)]);
var inst_207178 = cljs.core._nth.call(null,inst_207171,inst_207173);
var state_207218__$1 = state_207218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207218__$1,(13),out,inst_207178);
} else {
if((state_val_207219 === (18))){
var inst_207184 = (state_207218[(7)]);
var inst_207193 = cljs.core.first.call(null,inst_207184);
var state_207218__$1 = state_207218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207218__$1,(20),out,inst_207193);
} else {
if((state_val_207219 === (8))){
var inst_207173 = (state_207218[(10)]);
var inst_207172 = (state_207218[(11)]);
var inst_207175 = (inst_207173 < inst_207172);
var inst_207176 = inst_207175;
var state_207218__$1 = state_207218;
if(cljs.core.truth_(inst_207176)){
var statearr_207252_207283 = state_207218__$1;
(statearr_207252_207283[(1)] = (10));

} else {
var statearr_207253_207284 = state_207218__$1;
(statearr_207253_207284[(1)] = (11));

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
var statearr_207257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_207257[(0)] = state_machine__9185__auto__);

(statearr_207257[(1)] = (1));

return statearr_207257;
});
var state_machine__9185__auto____1 = (function (state_207218){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_207218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e207258){if((e207258 instanceof Object)){
var ex__9188__auto__ = e207258;
var statearr_207259_207285 = state_207218;
(statearr_207259_207285[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e207258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__207286 = state_207218;
state_207218 = G__207286;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_207218){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_207218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto__))
})();
var state__9201__auto__ = (function (){var statearr_207260 = f__9200__auto__.call(null);
(statearr_207260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto__);

return statearr_207260;
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
var c__9199__auto___207383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___207383,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___207383,out){
return (function (state_207358){
var state_val_207359 = (state_207358[(1)]);
if((state_val_207359 === (7))){
var inst_207353 = (state_207358[(2)]);
var state_207358__$1 = state_207358;
var statearr_207360_207384 = state_207358__$1;
(statearr_207360_207384[(2)] = inst_207353);

(statearr_207360_207384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (1))){
var inst_207335 = null;
var state_207358__$1 = (function (){var statearr_207361 = state_207358;
(statearr_207361[(7)] = inst_207335);

return statearr_207361;
})();
var statearr_207362_207385 = state_207358__$1;
(statearr_207362_207385[(2)] = null);

(statearr_207362_207385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (4))){
var inst_207338 = (state_207358[(8)]);
var inst_207338__$1 = (state_207358[(2)]);
var inst_207339 = (inst_207338__$1 == null);
var inst_207340 = cljs.core.not.call(null,inst_207339);
var state_207358__$1 = (function (){var statearr_207363 = state_207358;
(statearr_207363[(8)] = inst_207338__$1);

return statearr_207363;
})();
if(inst_207340){
var statearr_207364_207386 = state_207358__$1;
(statearr_207364_207386[(1)] = (5));

} else {
var statearr_207365_207387 = state_207358__$1;
(statearr_207365_207387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (6))){
var state_207358__$1 = state_207358;
var statearr_207366_207388 = state_207358__$1;
(statearr_207366_207388[(2)] = null);

(statearr_207366_207388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (3))){
var inst_207355 = (state_207358[(2)]);
var inst_207356 = cljs.core.async.close_BANG_.call(null,out);
var state_207358__$1 = (function (){var statearr_207367 = state_207358;
(statearr_207367[(9)] = inst_207355);

return statearr_207367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207358__$1,inst_207356);
} else {
if((state_val_207359 === (2))){
var state_207358__$1 = state_207358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207358__$1,(4),ch);
} else {
if((state_val_207359 === (11))){
var inst_207338 = (state_207358[(8)]);
var inst_207347 = (state_207358[(2)]);
var inst_207335 = inst_207338;
var state_207358__$1 = (function (){var statearr_207368 = state_207358;
(statearr_207368[(10)] = inst_207347);

(statearr_207368[(7)] = inst_207335);

return statearr_207368;
})();
var statearr_207369_207389 = state_207358__$1;
(statearr_207369_207389[(2)] = null);

(statearr_207369_207389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (9))){
var inst_207338 = (state_207358[(8)]);
var state_207358__$1 = state_207358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207358__$1,(11),out,inst_207338);
} else {
if((state_val_207359 === (5))){
var inst_207335 = (state_207358[(7)]);
var inst_207338 = (state_207358[(8)]);
var inst_207342 = cljs.core._EQ_.call(null,inst_207338,inst_207335);
var state_207358__$1 = state_207358;
if(inst_207342){
var statearr_207371_207390 = state_207358__$1;
(statearr_207371_207390[(1)] = (8));

} else {
var statearr_207372_207391 = state_207358__$1;
(statearr_207372_207391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (10))){
var inst_207350 = (state_207358[(2)]);
var state_207358__$1 = state_207358;
var statearr_207373_207392 = state_207358__$1;
(statearr_207373_207392[(2)] = inst_207350);

(statearr_207373_207392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207359 === (8))){
var inst_207335 = (state_207358[(7)]);
var tmp207370 = inst_207335;
var inst_207335__$1 = tmp207370;
var state_207358__$1 = (function (){var statearr_207374 = state_207358;
(statearr_207374[(7)] = inst_207335__$1);

return statearr_207374;
})();
var statearr_207375_207393 = state_207358__$1;
(statearr_207375_207393[(2)] = null);

(statearr_207375_207393[(1)] = (2));


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
});})(c__9199__auto___207383,out))
;
return ((function (switch__9184__auto__,c__9199__auto___207383,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_207379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_207379[(0)] = state_machine__9185__auto__);

(statearr_207379[(1)] = (1));

return statearr_207379;
});
var state_machine__9185__auto____1 = (function (state_207358){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_207358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e207380){if((e207380 instanceof Object)){
var ex__9188__auto__ = e207380;
var statearr_207381_207394 = state_207358;
(statearr_207381_207394[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e207380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__207395 = state_207358;
state_207358 = G__207395;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_207358){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_207358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___207383,out))
})();
var state__9201__auto__ = (function (){var statearr_207382 = f__9200__auto__.call(null);
(statearr_207382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___207383);

return statearr_207382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___207383,out))
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
var c__9199__auto___207530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___207530,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___207530,out){
return (function (state_207500){
var state_val_207501 = (state_207500[(1)]);
if((state_val_207501 === (7))){
var inst_207496 = (state_207500[(2)]);
var state_207500__$1 = state_207500;
var statearr_207502_207531 = state_207500__$1;
(statearr_207502_207531[(2)] = inst_207496);

(statearr_207502_207531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (1))){
var inst_207463 = (new Array(n));
var inst_207464 = inst_207463;
var inst_207465 = (0);
var state_207500__$1 = (function (){var statearr_207503 = state_207500;
(statearr_207503[(7)] = inst_207464);

(statearr_207503[(8)] = inst_207465);

return statearr_207503;
})();
var statearr_207504_207532 = state_207500__$1;
(statearr_207504_207532[(2)] = null);

(statearr_207504_207532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (4))){
var inst_207468 = (state_207500[(9)]);
var inst_207468__$1 = (state_207500[(2)]);
var inst_207469 = (inst_207468__$1 == null);
var inst_207470 = cljs.core.not.call(null,inst_207469);
var state_207500__$1 = (function (){var statearr_207505 = state_207500;
(statearr_207505[(9)] = inst_207468__$1);

return statearr_207505;
})();
if(inst_207470){
var statearr_207506_207533 = state_207500__$1;
(statearr_207506_207533[(1)] = (5));

} else {
var statearr_207507_207534 = state_207500__$1;
(statearr_207507_207534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (15))){
var inst_207490 = (state_207500[(2)]);
var state_207500__$1 = state_207500;
var statearr_207508_207535 = state_207500__$1;
(statearr_207508_207535[(2)] = inst_207490);

(statearr_207508_207535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (13))){
var state_207500__$1 = state_207500;
var statearr_207509_207536 = state_207500__$1;
(statearr_207509_207536[(2)] = null);

(statearr_207509_207536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (6))){
var inst_207465 = (state_207500[(8)]);
var inst_207486 = (inst_207465 > (0));
var state_207500__$1 = state_207500;
if(cljs.core.truth_(inst_207486)){
var statearr_207510_207537 = state_207500__$1;
(statearr_207510_207537[(1)] = (12));

} else {
var statearr_207511_207538 = state_207500__$1;
(statearr_207511_207538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (3))){
var inst_207498 = (state_207500[(2)]);
var state_207500__$1 = state_207500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207500__$1,inst_207498);
} else {
if((state_val_207501 === (12))){
var inst_207464 = (state_207500[(7)]);
var inst_207488 = cljs.core.vec.call(null,inst_207464);
var state_207500__$1 = state_207500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207500__$1,(15),out,inst_207488);
} else {
if((state_val_207501 === (2))){
var state_207500__$1 = state_207500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207500__$1,(4),ch);
} else {
if((state_val_207501 === (11))){
var inst_207480 = (state_207500[(2)]);
var inst_207481 = (new Array(n));
var inst_207464 = inst_207481;
var inst_207465 = (0);
var state_207500__$1 = (function (){var statearr_207512 = state_207500;
(statearr_207512[(10)] = inst_207480);

(statearr_207512[(7)] = inst_207464);

(statearr_207512[(8)] = inst_207465);

return statearr_207512;
})();
var statearr_207513_207539 = state_207500__$1;
(statearr_207513_207539[(2)] = null);

(statearr_207513_207539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (9))){
var inst_207464 = (state_207500[(7)]);
var inst_207478 = cljs.core.vec.call(null,inst_207464);
var state_207500__$1 = state_207500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207500__$1,(11),out,inst_207478);
} else {
if((state_val_207501 === (5))){
var inst_207473 = (state_207500[(11)]);
var inst_207468 = (state_207500[(9)]);
var inst_207464 = (state_207500[(7)]);
var inst_207465 = (state_207500[(8)]);
var inst_207472 = (inst_207464[inst_207465] = inst_207468);
var inst_207473__$1 = (inst_207465 + (1));
var inst_207474 = (inst_207473__$1 < n);
var state_207500__$1 = (function (){var statearr_207514 = state_207500;
(statearr_207514[(11)] = inst_207473__$1);

(statearr_207514[(12)] = inst_207472);

return statearr_207514;
})();
if(cljs.core.truth_(inst_207474)){
var statearr_207515_207540 = state_207500__$1;
(statearr_207515_207540[(1)] = (8));

} else {
var statearr_207516_207541 = state_207500__$1;
(statearr_207516_207541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (14))){
var inst_207493 = (state_207500[(2)]);
var inst_207494 = cljs.core.async.close_BANG_.call(null,out);
var state_207500__$1 = (function (){var statearr_207518 = state_207500;
(statearr_207518[(13)] = inst_207493);

return statearr_207518;
})();
var statearr_207519_207542 = state_207500__$1;
(statearr_207519_207542[(2)] = inst_207494);

(statearr_207519_207542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (10))){
var inst_207484 = (state_207500[(2)]);
var state_207500__$1 = state_207500;
var statearr_207520_207543 = state_207500__$1;
(statearr_207520_207543[(2)] = inst_207484);

(statearr_207520_207543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207501 === (8))){
var inst_207473 = (state_207500[(11)]);
var inst_207464 = (state_207500[(7)]);
var tmp207517 = inst_207464;
var inst_207464__$1 = tmp207517;
var inst_207465 = inst_207473;
var state_207500__$1 = (function (){var statearr_207521 = state_207500;
(statearr_207521[(7)] = inst_207464__$1);

(statearr_207521[(8)] = inst_207465);

return statearr_207521;
})();
var statearr_207522_207544 = state_207500__$1;
(statearr_207522_207544[(2)] = null);

(statearr_207522_207544[(1)] = (2));


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
});})(c__9199__auto___207530,out))
;
return ((function (switch__9184__auto__,c__9199__auto___207530,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_207526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_207526[(0)] = state_machine__9185__auto__);

(statearr_207526[(1)] = (1));

return statearr_207526;
});
var state_machine__9185__auto____1 = (function (state_207500){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_207500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e207527){if((e207527 instanceof Object)){
var ex__9188__auto__ = e207527;
var statearr_207528_207545 = state_207500;
(statearr_207528_207545[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e207527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__207546 = state_207500;
state_207500 = G__207546;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_207500){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_207500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___207530,out))
})();
var state__9201__auto__ = (function (){var statearr_207529 = f__9200__auto__.call(null);
(statearr_207529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___207530);

return statearr_207529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___207530,out))
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
var c__9199__auto___207689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___207689,out){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___207689,out){
return (function (state_207659){
var state_val_207660 = (state_207659[(1)]);
if((state_val_207660 === (7))){
var inst_207655 = (state_207659[(2)]);
var state_207659__$1 = state_207659;
var statearr_207661_207690 = state_207659__$1;
(statearr_207661_207690[(2)] = inst_207655);

(statearr_207661_207690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (1))){
var inst_207618 = [];
var inst_207619 = inst_207618;
var inst_207620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_207659__$1 = (function (){var statearr_207662 = state_207659;
(statearr_207662[(7)] = inst_207620);

(statearr_207662[(8)] = inst_207619);

return statearr_207662;
})();
var statearr_207663_207691 = state_207659__$1;
(statearr_207663_207691[(2)] = null);

(statearr_207663_207691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (4))){
var inst_207623 = (state_207659[(9)]);
var inst_207623__$1 = (state_207659[(2)]);
var inst_207624 = (inst_207623__$1 == null);
var inst_207625 = cljs.core.not.call(null,inst_207624);
var state_207659__$1 = (function (){var statearr_207664 = state_207659;
(statearr_207664[(9)] = inst_207623__$1);

return statearr_207664;
})();
if(inst_207625){
var statearr_207665_207692 = state_207659__$1;
(statearr_207665_207692[(1)] = (5));

} else {
var statearr_207666_207693 = state_207659__$1;
(statearr_207666_207693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (15))){
var inst_207649 = (state_207659[(2)]);
var state_207659__$1 = state_207659;
var statearr_207667_207694 = state_207659__$1;
(statearr_207667_207694[(2)] = inst_207649);

(statearr_207667_207694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (13))){
var state_207659__$1 = state_207659;
var statearr_207668_207695 = state_207659__$1;
(statearr_207668_207695[(2)] = null);

(statearr_207668_207695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (6))){
var inst_207619 = (state_207659[(8)]);
var inst_207644 = inst_207619.length;
var inst_207645 = (inst_207644 > (0));
var state_207659__$1 = state_207659;
if(cljs.core.truth_(inst_207645)){
var statearr_207669_207696 = state_207659__$1;
(statearr_207669_207696[(1)] = (12));

} else {
var statearr_207670_207697 = state_207659__$1;
(statearr_207670_207697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (3))){
var inst_207657 = (state_207659[(2)]);
var state_207659__$1 = state_207659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207659__$1,inst_207657);
} else {
if((state_val_207660 === (12))){
var inst_207619 = (state_207659[(8)]);
var inst_207647 = cljs.core.vec.call(null,inst_207619);
var state_207659__$1 = state_207659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207659__$1,(15),out,inst_207647);
} else {
if((state_val_207660 === (2))){
var state_207659__$1 = state_207659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207659__$1,(4),ch);
} else {
if((state_val_207660 === (11))){
var inst_207627 = (state_207659[(10)]);
var inst_207623 = (state_207659[(9)]);
var inst_207637 = (state_207659[(2)]);
var inst_207638 = [];
var inst_207639 = inst_207638.push(inst_207623);
var inst_207619 = inst_207638;
var inst_207620 = inst_207627;
var state_207659__$1 = (function (){var statearr_207671 = state_207659;
(statearr_207671[(7)] = inst_207620);

(statearr_207671[(11)] = inst_207637);

(statearr_207671[(8)] = inst_207619);

(statearr_207671[(12)] = inst_207639);

return statearr_207671;
})();
var statearr_207672_207698 = state_207659__$1;
(statearr_207672_207698[(2)] = null);

(statearr_207672_207698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (9))){
var inst_207619 = (state_207659[(8)]);
var inst_207635 = cljs.core.vec.call(null,inst_207619);
var state_207659__$1 = state_207659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207659__$1,(11),out,inst_207635);
} else {
if((state_val_207660 === (5))){
var inst_207620 = (state_207659[(7)]);
var inst_207627 = (state_207659[(10)]);
var inst_207623 = (state_207659[(9)]);
var inst_207627__$1 = f.call(null,inst_207623);
var inst_207628 = cljs.core._EQ_.call(null,inst_207627__$1,inst_207620);
var inst_207629 = cljs.core.keyword_identical_QMARK_.call(null,inst_207620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_207630 = (inst_207628) || (inst_207629);
var state_207659__$1 = (function (){var statearr_207673 = state_207659;
(statearr_207673[(10)] = inst_207627__$1);

return statearr_207673;
})();
if(cljs.core.truth_(inst_207630)){
var statearr_207674_207699 = state_207659__$1;
(statearr_207674_207699[(1)] = (8));

} else {
var statearr_207675_207700 = state_207659__$1;
(statearr_207675_207700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (14))){
var inst_207652 = (state_207659[(2)]);
var inst_207653 = cljs.core.async.close_BANG_.call(null,out);
var state_207659__$1 = (function (){var statearr_207677 = state_207659;
(statearr_207677[(13)] = inst_207652);

return statearr_207677;
})();
var statearr_207678_207701 = state_207659__$1;
(statearr_207678_207701[(2)] = inst_207653);

(statearr_207678_207701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (10))){
var inst_207642 = (state_207659[(2)]);
var state_207659__$1 = state_207659;
var statearr_207679_207702 = state_207659__$1;
(statearr_207679_207702[(2)] = inst_207642);

(statearr_207679_207702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_207660 === (8))){
var inst_207627 = (state_207659[(10)]);
var inst_207623 = (state_207659[(9)]);
var inst_207619 = (state_207659[(8)]);
var inst_207632 = inst_207619.push(inst_207623);
var tmp207676 = inst_207619;
var inst_207619__$1 = tmp207676;
var inst_207620 = inst_207627;
var state_207659__$1 = (function (){var statearr_207680 = state_207659;
(statearr_207680[(7)] = inst_207620);

(statearr_207680[(8)] = inst_207619__$1);

(statearr_207680[(14)] = inst_207632);

return statearr_207680;
})();
var statearr_207681_207703 = state_207659__$1;
(statearr_207681_207703[(2)] = null);

(statearr_207681_207703[(1)] = (2));


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
});})(c__9199__auto___207689,out))
;
return ((function (switch__9184__auto__,c__9199__auto___207689,out){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_207685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_207685[(0)] = state_machine__9185__auto__);

(statearr_207685[(1)] = (1));

return statearr_207685;
});
var state_machine__9185__auto____1 = (function (state_207659){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_207659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e207686){if((e207686 instanceof Object)){
var ex__9188__auto__ = e207686;
var statearr_207687_207704 = state_207659;
(statearr_207687_207704[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e207686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__207705 = state_207659;
state_207659 = G__207705;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_207659){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_207659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___207689,out))
})();
var state__9201__auto__ = (function (){var statearr_207688 = f__9200__auto__.call(null);
(statearr_207688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___207689);

return statearr_207688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___207689,out))
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