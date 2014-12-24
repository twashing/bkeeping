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
if(typeof cljs.core.async.t21566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21566 = (function (f,fn_handler,meta21567){
this.f = f;
this.fn_handler = fn_handler;
this.meta21567 = meta21567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21568){
var self__ = this;
var _21568__$1 = this;
return self__.meta21567;
});

cljs.core.async.t21566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21568,meta21567__$1){
var self__ = this;
var _21568__$1 = this;
return (new cljs.core.async.t21566(self__.f,self__.fn_handler,meta21567__$1));
});

cljs.core.async.t21566.cljs$lang$type = true;

cljs.core.async.t21566.cljs$lang$ctorStr = "cljs.core.async/t21566";

cljs.core.async.t21566.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t21566");
});

cljs.core.async.__GT_t21566 = (function __GT_t21566(f__$1,fn_handler__$1,meta21567){
return (new cljs.core.async.t21566(f__$1,fn_handler__$1,meta21567));
});

}

return (new cljs.core.async.t21566(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__21570 = buff;
if(G__21570){
var bit__13226__auto__ = null;
if(cljs.core.truth_((function (){var or__12545__auto__ = bit__13226__auto__;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return G__21570.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21570.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21570);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21570);
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
var val_21571 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21571);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21571,ret){
return (function (){
return fn1.call(null,val_21571);
});})(val_21571,ret))
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
var n__13432__auto___21572 = n;
var x_21573 = (0);
while(true){
if((x_21573 < n__13432__auto___21572)){
(a[x_21573] = (0));

var G__21574 = (x_21573 + (1));
x_21573 = G__21574;
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

var G__21575 = (i + (1));
i = G__21575;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21579 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21579 = (function (flag,alt_flag,meta21580){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21580 = meta21580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21581){
var self__ = this;
var _21581__$1 = this;
return self__.meta21580;
});})(flag))
;

cljs.core.async.t21579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21581,meta21580__$1){
var self__ = this;
var _21581__$1 = this;
return (new cljs.core.async.t21579(self__.flag,self__.alt_flag,meta21580__$1));
});})(flag))
;

cljs.core.async.t21579.cljs$lang$type = true;

cljs.core.async.t21579.cljs$lang$ctorStr = "cljs.core.async/t21579";

cljs.core.async.t21579.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t21579");
});})(flag))
;

cljs.core.async.__GT_t21579 = ((function (flag){
return (function __GT_t21579(flag__$1,alt_flag__$1,meta21580){
return (new cljs.core.async.t21579(flag__$1,alt_flag__$1,meta21580));
});})(flag))
;

}

return (new cljs.core.async.t21579(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21585 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21585 = (function (cb,flag,alt_handler,meta21586){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21586 = meta21586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21587){
var self__ = this;
var _21587__$1 = this;
return self__.meta21586;
});

cljs.core.async.t21585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21587,meta21586__$1){
var self__ = this;
var _21587__$1 = this;
return (new cljs.core.async.t21585(self__.cb,self__.flag,self__.alt_handler,meta21586__$1));
});

cljs.core.async.t21585.cljs$lang$type = true;

cljs.core.async.t21585.cljs$lang$ctorStr = "cljs.core.async/t21585";

cljs.core.async.t21585.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t21585");
});

cljs.core.async.__GT_t21585 = (function __GT_t21585(cb__$1,flag__$1,alt_handler__$1,meta21586){
return (new cljs.core.async.t21585(cb__$1,flag__$1,alt_handler__$1,meta21586));
});

}

return (new cljs.core.async.t21585(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__21588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21588_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21589_SHARP_,port], null));
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
var G__21590 = (i + (1));
i = G__21590;
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
var alts_BANG___delegate = function (ports,p__21591){
var map__21593 = p__21591;
var map__21593__$1 = ((cljs.core.seq_QMARK_.call(null,map__21593))?cljs.core.apply.call(null,cljs.core.hash_map,map__21593):map__21593);
var opts = map__21593__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21591 = null;
if (arguments.length > 1) {
  p__21591 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__21591);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21594){
var ports = cljs.core.first(arglist__21594);
var p__21591 = cljs.core.rest(arglist__21594);
return alts_BANG___delegate(ports,p__21591);
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
var c__15232__auto___21689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___21689){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___21689){
return (function (state_21665){
var state_val_21666 = (state_21665[(1)]);
if((state_val_21666 === (7))){
var inst_21661 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
var statearr_21667_21690 = state_21665__$1;
(statearr_21667_21690[(2)] = inst_21661);

(statearr_21667_21690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (1))){
var state_21665__$1 = state_21665;
var statearr_21668_21691 = state_21665__$1;
(statearr_21668_21691[(2)] = null);

(statearr_21668_21691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (4))){
var inst_21644 = (state_21665[(7)]);
var inst_21644__$1 = (state_21665[(2)]);
var inst_21645 = (inst_21644__$1 == null);
var state_21665__$1 = (function (){var statearr_21669 = state_21665;
(statearr_21669[(7)] = inst_21644__$1);

return statearr_21669;
})();
if(cljs.core.truth_(inst_21645)){
var statearr_21670_21692 = state_21665__$1;
(statearr_21670_21692[(1)] = (5));

} else {
var statearr_21671_21693 = state_21665__$1;
(statearr_21671_21693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (13))){
var state_21665__$1 = state_21665;
var statearr_21672_21694 = state_21665__$1;
(statearr_21672_21694[(2)] = null);

(statearr_21672_21694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (6))){
var inst_21644 = (state_21665[(7)]);
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21665__$1,(11),to,inst_21644);
} else {
if((state_val_21666 === (3))){
var inst_21663 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21665__$1,inst_21663);
} else {
if((state_val_21666 === (12))){
var state_21665__$1 = state_21665;
var statearr_21673_21695 = state_21665__$1;
(statearr_21673_21695[(2)] = null);

(statearr_21673_21695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (2))){
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21665__$1,(4),from);
} else {
if((state_val_21666 === (11))){
var inst_21654 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
if(cljs.core.truth_(inst_21654)){
var statearr_21674_21696 = state_21665__$1;
(statearr_21674_21696[(1)] = (12));

} else {
var statearr_21675_21697 = state_21665__$1;
(statearr_21675_21697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (9))){
var state_21665__$1 = state_21665;
var statearr_21676_21698 = state_21665__$1;
(statearr_21676_21698[(2)] = null);

(statearr_21676_21698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (5))){
var state_21665__$1 = state_21665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21677_21699 = state_21665__$1;
(statearr_21677_21699[(1)] = (8));

} else {
var statearr_21678_21700 = state_21665__$1;
(statearr_21678_21700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (14))){
var inst_21659 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
var statearr_21679_21701 = state_21665__$1;
(statearr_21679_21701[(2)] = inst_21659);

(statearr_21679_21701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (10))){
var inst_21651 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
var statearr_21680_21702 = state_21665__$1;
(statearr_21680_21702[(2)] = inst_21651);

(statearr_21680_21702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (8))){
var inst_21648 = cljs.core.async.close_BANG_.call(null,to);
var state_21665__$1 = state_21665;
var statearr_21681_21703 = state_21665__$1;
(statearr_21681_21703[(2)] = inst_21648);

(statearr_21681_21703[(1)] = (10));


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
});})(c__15232__auto___21689))
;
return ((function (switch__15176__auto__,c__15232__auto___21689){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21685 = [null,null,null,null,null,null,null,null];
(statearr_21685[(0)] = state_machine__15177__auto__);

(statearr_21685[(1)] = (1));

return statearr_21685;
});
var state_machine__15177__auto____1 = (function (state_21665){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21686){if((e21686 instanceof Object)){
var ex__15180__auto__ = e21686;
var statearr_21687_21704 = state_21665;
(statearr_21687_21704[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21705 = state_21665;
state_21665 = G__21705;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21665){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___21689))
})();
var state__15234__auto__ = (function (){var statearr_21688 = f__15233__auto__.call(null);
(statearr_21688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___21689);

return statearr_21688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___21689))
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
return (function (p__21889){
var vec__21890 = p__21889;
var v = cljs.core.nth.call(null,vec__21890,(0),null);
var p = cljs.core.nth.call(null,vec__21890,(1),null);
var job = vec__21890;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15232__auto___22072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results){
return (function (state_21895){
var state_val_21896 = (state_21895[(1)]);
if((state_val_21896 === (2))){
var inst_21892 = (state_21895[(2)]);
var inst_21893 = cljs.core.async.close_BANG_.call(null,res);
var state_21895__$1 = (function (){var statearr_21897 = state_21895;
(statearr_21897[(7)] = inst_21892);

return statearr_21897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21895__$1,inst_21893);
} else {
if((state_val_21896 === (1))){
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21895__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results))
;
return ((function (switch__15176__auto__,c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21901 = [null,null,null,null,null,null,null,null];
(statearr_21901[(0)] = state_machine__15177__auto__);

(statearr_21901[(1)] = (1));

return statearr_21901;
});
var state_machine__15177__auto____1 = (function (state_21895){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21902){if((e21902 instanceof Object)){
var ex__15180__auto__ = e21902;
var statearr_21903_22073 = state_21895;
(statearr_21903_22073[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22074 = state_21895;
state_21895 = G__22074;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21895){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results))
})();
var state__15234__auto__ = (function (){var statearr_21904 = f__15233__auto__.call(null);
(statearr_21904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22072);

return statearr_21904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___22072,res,vec__21890,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21905){
var vec__21906 = p__21905;
var v = cljs.core.nth.call(null,vec__21906,(0),null);
var p = cljs.core.nth.call(null,vec__21906,(1),null);
var job = vec__21906;
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
var n__13432__auto___22075 = n;
var __22076 = (0);
while(true){
if((__22076 < n__13432__auto___22075)){
var G__21907_22077 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21907_22077) {
case "async":
var c__15232__auto___22079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22076,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (__22076,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function (state_21920){
var state_val_21921 = (state_21920[(1)]);
if((state_val_21921 === (7))){
var inst_21916 = (state_21920[(2)]);
var state_21920__$1 = state_21920;
var statearr_21922_22080 = state_21920__$1;
(statearr_21922_22080[(2)] = inst_21916);

(statearr_21922_22080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21921 === (6))){
var state_21920__$1 = state_21920;
var statearr_21923_22081 = state_21920__$1;
(statearr_21923_22081[(2)] = null);

(statearr_21923_22081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21921 === (5))){
var state_21920__$1 = state_21920;
var statearr_21924_22082 = state_21920__$1;
(statearr_21924_22082[(2)] = null);

(statearr_21924_22082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21921 === (4))){
var inst_21910 = (state_21920[(2)]);
var inst_21911 = async.call(null,inst_21910);
var state_21920__$1 = state_21920;
if(cljs.core.truth_(inst_21911)){
var statearr_21925_22083 = state_21920__$1;
(statearr_21925_22083[(1)] = (5));

} else {
var statearr_21926_22084 = state_21920__$1;
(statearr_21926_22084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21921 === (3))){
var inst_21918 = (state_21920[(2)]);
var state_21920__$1 = state_21920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21920__$1,inst_21918);
} else {
if((state_val_21921 === (2))){
var state_21920__$1 = state_21920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21920__$1,(4),jobs);
} else {
if((state_val_21921 === (1))){
var state_21920__$1 = state_21920;
var statearr_21927_22085 = state_21920__$1;
(statearr_21927_22085[(2)] = null);

(statearr_21927_22085[(1)] = (2));


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
});})(__22076,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
;
return ((function (__22076,switch__15176__auto__,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21931 = [null,null,null,null,null,null,null];
(statearr_21931[(0)] = state_machine__15177__auto__);

(statearr_21931[(1)] = (1));

return statearr_21931;
});
var state_machine__15177__auto____1 = (function (state_21920){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21932){if((e21932 instanceof Object)){
var ex__15180__auto__ = e21932;
var statearr_21933_22086 = state_21920;
(statearr_21933_22086[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22087 = state_21920;
state_21920 = G__22087;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21920){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(__22076,switch__15176__auto__,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
})();
var state__15234__auto__ = (function (){var statearr_21934 = f__15233__auto__.call(null);
(statearr_21934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22079);

return statearr_21934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(__22076,c__15232__auto___22079,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
);


break;
case "compute":
var c__15232__auto___22088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22076,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (__22076,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function (state_21947){
var state_val_21948 = (state_21947[(1)]);
if((state_val_21948 === (7))){
var inst_21943 = (state_21947[(2)]);
var state_21947__$1 = state_21947;
var statearr_21949_22089 = state_21947__$1;
(statearr_21949_22089[(2)] = inst_21943);

(statearr_21949_22089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21948 === (6))){
var state_21947__$1 = state_21947;
var statearr_21950_22090 = state_21947__$1;
(statearr_21950_22090[(2)] = null);

(statearr_21950_22090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21948 === (5))){
var state_21947__$1 = state_21947;
var statearr_21951_22091 = state_21947__$1;
(statearr_21951_22091[(2)] = null);

(statearr_21951_22091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21948 === (4))){
var inst_21937 = (state_21947[(2)]);
var inst_21938 = process.call(null,inst_21937);
var state_21947__$1 = state_21947;
if(cljs.core.truth_(inst_21938)){
var statearr_21952_22092 = state_21947__$1;
(statearr_21952_22092[(1)] = (5));

} else {
var statearr_21953_22093 = state_21947__$1;
(statearr_21953_22093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21948 === (3))){
var inst_21945 = (state_21947[(2)]);
var state_21947__$1 = state_21947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21947__$1,inst_21945);
} else {
if((state_val_21948 === (2))){
var state_21947__$1 = state_21947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21947__$1,(4),jobs);
} else {
if((state_val_21948 === (1))){
var state_21947__$1 = state_21947;
var statearr_21954_22094 = state_21947__$1;
(statearr_21954_22094[(2)] = null);

(statearr_21954_22094[(1)] = (2));


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
});})(__22076,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
;
return ((function (__22076,switch__15176__auto__,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21958 = [null,null,null,null,null,null,null];
(statearr_21958[(0)] = state_machine__15177__auto__);

(statearr_21958[(1)] = (1));

return statearr_21958;
});
var state_machine__15177__auto____1 = (function (state_21947){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21959){if((e21959 instanceof Object)){
var ex__15180__auto__ = e21959;
var statearr_21960_22095 = state_21947;
(statearr_21960_22095[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22096 = state_21947;
state_21947 = G__22096;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21947){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(__22076,switch__15176__auto__,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
})();
var state__15234__auto__ = (function (){var statearr_21961 = f__15233__auto__.call(null);
(statearr_21961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22088);

return statearr_21961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(__22076,c__15232__auto___22088,G__21907_22077,n__13432__auto___22075,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22097 = (__22076 + (1));
__22076 = G__22097;
continue;
} else {
}
break;
}

var c__15232__auto___22098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___22098,jobs,results,process,async){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___22098,jobs,results,process,async){
return (function (state_21983){
var state_val_21984 = (state_21983[(1)]);
if((state_val_21984 === (9))){
var inst_21976 = (state_21983[(2)]);
var state_21983__$1 = (function (){var statearr_21985 = state_21983;
(statearr_21985[(7)] = inst_21976);

return statearr_21985;
})();
var statearr_21986_22099 = state_21983__$1;
(statearr_21986_22099[(2)] = null);

(statearr_21986_22099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (8))){
var inst_21969 = (state_21983[(8)]);
var inst_21974 = (state_21983[(2)]);
var state_21983__$1 = (function (){var statearr_21987 = state_21983;
(statearr_21987[(9)] = inst_21974);

return statearr_21987;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21983__$1,(9),results,inst_21969);
} else {
if((state_val_21984 === (7))){
var inst_21979 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_21988_22100 = state_21983__$1;
(statearr_21988_22100[(2)] = inst_21979);

(statearr_21988_22100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (6))){
var inst_21969 = (state_21983[(8)]);
var inst_21964 = (state_21983[(10)]);
var inst_21969__$1 = cljs.core.async.chan.call(null,(1));
var inst_21970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21971 = [inst_21964,inst_21969__$1];
var inst_21972 = (new cljs.core.PersistentVector(null,2,(5),inst_21970,inst_21971,null));
var state_21983__$1 = (function (){var statearr_21989 = state_21983;
(statearr_21989[(8)] = inst_21969__$1);

return statearr_21989;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21983__$1,(8),jobs,inst_21972);
} else {
if((state_val_21984 === (5))){
var inst_21967 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21983__$1 = state_21983;
var statearr_21990_22101 = state_21983__$1;
(statearr_21990_22101[(2)] = inst_21967);

(statearr_21990_22101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (4))){
var inst_21964 = (state_21983[(10)]);
var inst_21964__$1 = (state_21983[(2)]);
var inst_21965 = (inst_21964__$1 == null);
var state_21983__$1 = (function (){var statearr_21991 = state_21983;
(statearr_21991[(10)] = inst_21964__$1);

return statearr_21991;
})();
if(cljs.core.truth_(inst_21965)){
var statearr_21992_22102 = state_21983__$1;
(statearr_21992_22102[(1)] = (5));

} else {
var statearr_21993_22103 = state_21983__$1;
(statearr_21993_22103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (3))){
var inst_21981 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21983__$1,inst_21981);
} else {
if((state_val_21984 === (2))){
var state_21983__$1 = state_21983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21983__$1,(4),from);
} else {
if((state_val_21984 === (1))){
var state_21983__$1 = state_21983;
var statearr_21994_22104 = state_21983__$1;
(statearr_21994_22104[(2)] = null);

(statearr_21994_22104[(1)] = (2));


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
});})(c__15232__auto___22098,jobs,results,process,async))
;
return ((function (switch__15176__auto__,c__15232__auto___22098,jobs,results,process,async){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_21998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21998[(0)] = state_machine__15177__auto__);

(statearr_21998[(1)] = (1));

return statearr_21998;
});
var state_machine__15177__auto____1 = (function (state_21983){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_21983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object)){
var ex__15180__auto__ = e21999;
var statearr_22000_22105 = state_21983;
(statearr_22000_22105[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22106 = state_21983;
state_21983 = G__22106;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_21983){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_21983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___22098,jobs,results,process,async))
})();
var state__15234__auto__ = (function (){var statearr_22001 = f__15233__auto__.call(null);
(statearr_22001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22098);

return statearr_22001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___22098,jobs,results,process,async))
);


var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__,jobs,results,process,async){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__,jobs,results,process,async){
return (function (state_22039){
var state_val_22040 = (state_22039[(1)]);
if((state_val_22040 === (7))){
var inst_22035 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
var statearr_22041_22107 = state_22039__$1;
(statearr_22041_22107[(2)] = inst_22035);

(statearr_22041_22107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (20))){
var state_22039__$1 = state_22039;
var statearr_22042_22108 = state_22039__$1;
(statearr_22042_22108[(2)] = null);

(statearr_22042_22108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (1))){
var state_22039__$1 = state_22039;
var statearr_22043_22109 = state_22039__$1;
(statearr_22043_22109[(2)] = null);

(statearr_22043_22109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (4))){
var inst_22004 = (state_22039[(7)]);
var inst_22004__$1 = (state_22039[(2)]);
var inst_22005 = (inst_22004__$1 == null);
var state_22039__$1 = (function (){var statearr_22044 = state_22039;
(statearr_22044[(7)] = inst_22004__$1);

return statearr_22044;
})();
if(cljs.core.truth_(inst_22005)){
var statearr_22045_22110 = state_22039__$1;
(statearr_22045_22110[(1)] = (5));

} else {
var statearr_22046_22111 = state_22039__$1;
(statearr_22046_22111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (15))){
var inst_22017 = (state_22039[(8)]);
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22039__$1,(18),to,inst_22017);
} else {
if((state_val_22040 === (21))){
var inst_22030 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
var statearr_22047_22112 = state_22039__$1;
(statearr_22047_22112[(2)] = inst_22030);

(statearr_22047_22112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (13))){
var inst_22032 = (state_22039[(2)]);
var state_22039__$1 = (function (){var statearr_22048 = state_22039;
(statearr_22048[(9)] = inst_22032);

return statearr_22048;
})();
var statearr_22049_22113 = state_22039__$1;
(statearr_22049_22113[(2)] = null);

(statearr_22049_22113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (6))){
var inst_22004 = (state_22039[(7)]);
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22039__$1,(11),inst_22004);
} else {
if((state_val_22040 === (17))){
var inst_22025 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
if(cljs.core.truth_(inst_22025)){
var statearr_22050_22114 = state_22039__$1;
(statearr_22050_22114[(1)] = (19));

} else {
var statearr_22051_22115 = state_22039__$1;
(statearr_22051_22115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (3))){
var inst_22037 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22039__$1,inst_22037);
} else {
if((state_val_22040 === (12))){
var inst_22014 = (state_22039[(10)]);
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22039__$1,(14),inst_22014);
} else {
if((state_val_22040 === (2))){
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22039__$1,(4),results);
} else {
if((state_val_22040 === (19))){
var state_22039__$1 = state_22039;
var statearr_22052_22116 = state_22039__$1;
(statearr_22052_22116[(2)] = null);

(statearr_22052_22116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (11))){
var inst_22014 = (state_22039[(2)]);
var state_22039__$1 = (function (){var statearr_22053 = state_22039;
(statearr_22053[(10)] = inst_22014);

return statearr_22053;
})();
var statearr_22054_22117 = state_22039__$1;
(statearr_22054_22117[(2)] = null);

(statearr_22054_22117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (9))){
var state_22039__$1 = state_22039;
var statearr_22055_22118 = state_22039__$1;
(statearr_22055_22118[(2)] = null);

(statearr_22055_22118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (5))){
var state_22039__$1 = state_22039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22056_22119 = state_22039__$1;
(statearr_22056_22119[(1)] = (8));

} else {
var statearr_22057_22120 = state_22039__$1;
(statearr_22057_22120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (14))){
var inst_22019 = (state_22039[(11)]);
var inst_22017 = (state_22039[(8)]);
var inst_22017__$1 = (state_22039[(2)]);
var inst_22018 = (inst_22017__$1 == null);
var inst_22019__$1 = cljs.core.not.call(null,inst_22018);
var state_22039__$1 = (function (){var statearr_22058 = state_22039;
(statearr_22058[(11)] = inst_22019__$1);

(statearr_22058[(8)] = inst_22017__$1);

return statearr_22058;
})();
if(inst_22019__$1){
var statearr_22059_22121 = state_22039__$1;
(statearr_22059_22121[(1)] = (15));

} else {
var statearr_22060_22122 = state_22039__$1;
(statearr_22060_22122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (16))){
var inst_22019 = (state_22039[(11)]);
var state_22039__$1 = state_22039;
var statearr_22061_22123 = state_22039__$1;
(statearr_22061_22123[(2)] = inst_22019);

(statearr_22061_22123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (10))){
var inst_22011 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
var statearr_22062_22124 = state_22039__$1;
(statearr_22062_22124[(2)] = inst_22011);

(statearr_22062_22124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (18))){
var inst_22022 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
var statearr_22063_22125 = state_22039__$1;
(statearr_22063_22125[(2)] = inst_22022);

(statearr_22063_22125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (8))){
var inst_22008 = cljs.core.async.close_BANG_.call(null,to);
var state_22039__$1 = state_22039;
var statearr_22064_22126 = state_22039__$1;
(statearr_22064_22126[(2)] = inst_22008);

(statearr_22064_22126[(1)] = (10));


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
});})(c__15232__auto__,jobs,results,process,async))
;
return ((function (switch__15176__auto__,c__15232__auto__,jobs,results,process,async){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_22068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22068[(0)] = state_machine__15177__auto__);

(statearr_22068[(1)] = (1));

return statearr_22068;
});
var state_machine__15177__auto____1 = (function (state_22039){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_22039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e22069){if((e22069 instanceof Object)){
var ex__15180__auto__ = e22069;
var statearr_22070_22127 = state_22039;
(statearr_22070_22127[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22128 = state_22039;
state_22039 = G__22128;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_22039){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_22039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__,jobs,results,process,async))
})();
var state__15234__auto__ = (function (){var statearr_22071 = f__15233__auto__.call(null);
(statearr_22071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_22071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__,jobs,results,process,async))
);

return c__15232__auto__;
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
var c__15232__auto___22229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___22229,tc,fc){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___22229,tc,fc){
return (function (state_22204){
var state_val_22205 = (state_22204[(1)]);
if((state_val_22205 === (7))){
var inst_22200 = (state_22204[(2)]);
var state_22204__$1 = state_22204;
var statearr_22206_22230 = state_22204__$1;
(statearr_22206_22230[(2)] = inst_22200);

(statearr_22206_22230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (1))){
var state_22204__$1 = state_22204;
var statearr_22207_22231 = state_22204__$1;
(statearr_22207_22231[(2)] = null);

(statearr_22207_22231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (4))){
var inst_22181 = (state_22204[(7)]);
var inst_22181__$1 = (state_22204[(2)]);
var inst_22182 = (inst_22181__$1 == null);
var state_22204__$1 = (function (){var statearr_22208 = state_22204;
(statearr_22208[(7)] = inst_22181__$1);

return statearr_22208;
})();
if(cljs.core.truth_(inst_22182)){
var statearr_22209_22232 = state_22204__$1;
(statearr_22209_22232[(1)] = (5));

} else {
var statearr_22210_22233 = state_22204__$1;
(statearr_22210_22233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (13))){
var state_22204__$1 = state_22204;
var statearr_22211_22234 = state_22204__$1;
(statearr_22211_22234[(2)] = null);

(statearr_22211_22234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (6))){
var inst_22181 = (state_22204[(7)]);
var inst_22187 = p.call(null,inst_22181);
var state_22204__$1 = state_22204;
if(cljs.core.truth_(inst_22187)){
var statearr_22212_22235 = state_22204__$1;
(statearr_22212_22235[(1)] = (9));

} else {
var statearr_22213_22236 = state_22204__$1;
(statearr_22213_22236[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (3))){
var inst_22202 = (state_22204[(2)]);
var state_22204__$1 = state_22204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22204__$1,inst_22202);
} else {
if((state_val_22205 === (12))){
var state_22204__$1 = state_22204;
var statearr_22214_22237 = state_22204__$1;
(statearr_22214_22237[(2)] = null);

(statearr_22214_22237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (2))){
var state_22204__$1 = state_22204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22204__$1,(4),ch);
} else {
if((state_val_22205 === (11))){
var inst_22181 = (state_22204[(7)]);
var inst_22191 = (state_22204[(2)]);
var state_22204__$1 = state_22204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22204__$1,(8),inst_22191,inst_22181);
} else {
if((state_val_22205 === (9))){
var state_22204__$1 = state_22204;
var statearr_22215_22238 = state_22204__$1;
(statearr_22215_22238[(2)] = tc);

(statearr_22215_22238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (5))){
var inst_22184 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22185 = cljs.core.async.close_BANG_.call(null,fc);
var state_22204__$1 = (function (){var statearr_22216 = state_22204;
(statearr_22216[(8)] = inst_22184);

return statearr_22216;
})();
var statearr_22217_22239 = state_22204__$1;
(statearr_22217_22239[(2)] = inst_22185);

(statearr_22217_22239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (14))){
var inst_22198 = (state_22204[(2)]);
var state_22204__$1 = state_22204;
var statearr_22218_22240 = state_22204__$1;
(statearr_22218_22240[(2)] = inst_22198);

(statearr_22218_22240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (10))){
var state_22204__$1 = state_22204;
var statearr_22219_22241 = state_22204__$1;
(statearr_22219_22241[(2)] = fc);

(statearr_22219_22241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22205 === (8))){
var inst_22193 = (state_22204[(2)]);
var state_22204__$1 = state_22204;
if(cljs.core.truth_(inst_22193)){
var statearr_22220_22242 = state_22204__$1;
(statearr_22220_22242[(1)] = (12));

} else {
var statearr_22221_22243 = state_22204__$1;
(statearr_22221_22243[(1)] = (13));

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
});})(c__15232__auto___22229,tc,fc))
;
return ((function (switch__15176__auto__,c__15232__auto___22229,tc,fc){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_22225 = [null,null,null,null,null,null,null,null,null];
(statearr_22225[(0)] = state_machine__15177__auto__);

(statearr_22225[(1)] = (1));

return statearr_22225;
});
var state_machine__15177__auto____1 = (function (state_22204){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_22204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e22226){if((e22226 instanceof Object)){
var ex__15180__auto__ = e22226;
var statearr_22227_22244 = state_22204;
(statearr_22227_22244[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22245 = state_22204;
state_22204 = G__22245;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_22204){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_22204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___22229,tc,fc))
})();
var state__15234__auto__ = (function (){var statearr_22228 = f__15233__auto__.call(null);
(statearr_22228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22229);

return statearr_22228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___22229,tc,fc))
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
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_22292){
var state_val_22293 = (state_22292[(1)]);
if((state_val_22293 === (7))){
var inst_22288 = (state_22292[(2)]);
var state_22292__$1 = state_22292;
var statearr_22294_22310 = state_22292__$1;
(statearr_22294_22310[(2)] = inst_22288);

(statearr_22294_22310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (6))){
var inst_22278 = (state_22292[(7)]);
var inst_22281 = (state_22292[(8)]);
var inst_22285 = f.call(null,inst_22278,inst_22281);
var inst_22278__$1 = inst_22285;
var state_22292__$1 = (function (){var statearr_22295 = state_22292;
(statearr_22295[(7)] = inst_22278__$1);

return statearr_22295;
})();
var statearr_22296_22311 = state_22292__$1;
(statearr_22296_22311[(2)] = null);

(statearr_22296_22311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (5))){
var inst_22278 = (state_22292[(7)]);
var state_22292__$1 = state_22292;
var statearr_22297_22312 = state_22292__$1;
(statearr_22297_22312[(2)] = inst_22278);

(statearr_22297_22312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (4))){
var inst_22281 = (state_22292[(8)]);
var inst_22281__$1 = (state_22292[(2)]);
var inst_22282 = (inst_22281__$1 == null);
var state_22292__$1 = (function (){var statearr_22298 = state_22292;
(statearr_22298[(8)] = inst_22281__$1);

return statearr_22298;
})();
if(cljs.core.truth_(inst_22282)){
var statearr_22299_22313 = state_22292__$1;
(statearr_22299_22313[(1)] = (5));

} else {
var statearr_22300_22314 = state_22292__$1;
(statearr_22300_22314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (3))){
var inst_22290 = (state_22292[(2)]);
var state_22292__$1 = state_22292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22292__$1,inst_22290);
} else {
if((state_val_22293 === (2))){
var state_22292__$1 = state_22292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22292__$1,(4),ch);
} else {
if((state_val_22293 === (1))){
var inst_22278 = init;
var state_22292__$1 = (function (){var statearr_22301 = state_22292;
(statearr_22301[(7)] = inst_22278);

return statearr_22301;
})();
var statearr_22302_22315 = state_22292__$1;
(statearr_22302_22315[(2)] = null);

(statearr_22302_22315[(1)] = (2));


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
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_22306 = [null,null,null,null,null,null,null,null,null];
(statearr_22306[(0)] = state_machine__15177__auto__);

(statearr_22306[(1)] = (1));

return statearr_22306;
});
var state_machine__15177__auto____1 = (function (state_22292){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_22292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e22307){if((e22307 instanceof Object)){
var ex__15180__auto__ = e22307;
var statearr_22308_22316 = state_22292;
(statearr_22308_22316[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22317 = state_22292;
state_22292 = G__22317;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_22292){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_22292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_22309 = f__15233__auto__.call(null);
(statearr_22309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_22309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
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
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (7))){
var inst_22373 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22393_22416 = state_22391__$1;
(statearr_22393_22416[(2)] = inst_22373);

(statearr_22393_22416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (1))){
var inst_22367 = cljs.core.seq.call(null,coll);
var inst_22368 = inst_22367;
var state_22391__$1 = (function (){var statearr_22394 = state_22391;
(statearr_22394[(7)] = inst_22368);

return statearr_22394;
})();
var statearr_22395_22417 = state_22391__$1;
(statearr_22395_22417[(2)] = null);

(statearr_22395_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (4))){
var inst_22368 = (state_22391[(7)]);
var inst_22371 = cljs.core.first.call(null,inst_22368);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(7),ch,inst_22371);
} else {
if((state_val_22392 === (13))){
var inst_22385 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22396_22418 = state_22391__$1;
(statearr_22396_22418[(2)] = inst_22385);

(statearr_22396_22418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var inst_22376 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22376)){
var statearr_22397_22419 = state_22391__$1;
(statearr_22397_22419[(1)] = (8));

} else {
var statearr_22398_22420 = state_22391__$1;
(statearr_22398_22420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (3))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
} else {
if((state_val_22392 === (12))){
var state_22391__$1 = state_22391;
var statearr_22399_22421 = state_22391__$1;
(statearr_22399_22421[(2)] = null);

(statearr_22399_22421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (2))){
var inst_22368 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22368)){
var statearr_22400_22422 = state_22391__$1;
(statearr_22400_22422[(1)] = (4));

} else {
var statearr_22401_22423 = state_22391__$1;
(statearr_22401_22423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (11))){
var inst_22382 = cljs.core.async.close_BANG_.call(null,ch);
var state_22391__$1 = state_22391;
var statearr_22402_22424 = state_22391__$1;
(statearr_22402_22424[(2)] = inst_22382);

(statearr_22402_22424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (9))){
var state_22391__$1 = state_22391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22403_22425 = state_22391__$1;
(statearr_22403_22425[(1)] = (11));

} else {
var statearr_22404_22426 = state_22391__$1;
(statearr_22404_22426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var inst_22368 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
var statearr_22405_22427 = state_22391__$1;
(statearr_22405_22427[(2)] = inst_22368);

(statearr_22405_22427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (10))){
var inst_22387 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22406_22428 = state_22391__$1;
(statearr_22406_22428[(2)] = inst_22387);

(statearr_22406_22428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (8))){
var inst_22368 = (state_22391[(7)]);
var inst_22378 = cljs.core.next.call(null,inst_22368);
var inst_22368__$1 = inst_22378;
var state_22391__$1 = (function (){var statearr_22407 = state_22391;
(statearr_22407[(7)] = inst_22368__$1);

return statearr_22407;
})();
var statearr_22408_22429 = state_22391__$1;
(statearr_22408_22429[(2)] = null);

(statearr_22408_22429[(1)] = (2));


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
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_22412 = [null,null,null,null,null,null,null,null];
(statearr_22412[(0)] = state_machine__15177__auto__);

(statearr_22412[(1)] = (1));

return statearr_22412;
});
var state_machine__15177__auto____1 = (function (state_22391){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e22413){if((e22413 instanceof Object)){
var ex__15180__auto__ = e22413;
var statearr_22414_22430 = state_22391;
(statearr_22414_22430[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22431 = state_22391;
state_22391 = G__22431;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_22415 = f__15233__auto__.call(null);
(statearr_22415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_22415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
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

cljs.core.async.Mux = (function (){var obj22433 = {};
return obj22433;
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


cljs.core.async.Mult = (function (){var obj22435 = {};
return obj22435;
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
if(typeof cljs.core.async.t22657 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22657 = (function (cs,ch,mult,meta22658){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22658 = meta22658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22657.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22657.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22657.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22657.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22657.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22659){
var self__ = this;
var _22659__$1 = this;
return self__.meta22658;
});})(cs))
;

cljs.core.async.t22657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22659,meta22658__$1){
var self__ = this;
var _22659__$1 = this;
return (new cljs.core.async.t22657(self__.cs,self__.ch,self__.mult,meta22658__$1));
});})(cs))
;

cljs.core.async.t22657.cljs$lang$type = true;

cljs.core.async.t22657.cljs$lang$ctorStr = "cljs.core.async/t22657";

cljs.core.async.t22657.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t22657");
});})(cs))
;

cljs.core.async.__GT_t22657 = ((function (cs){
return (function __GT_t22657(cs__$1,ch__$1,mult__$1,meta22658){
return (new cljs.core.async.t22657(cs__$1,ch__$1,mult__$1,meta22658));
});})(cs))
;

}

return (new cljs.core.async.t22657(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15232__auto___22878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___22878,cs,m,dchan,dctr,done){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___22878,cs,m,dchan,dctr,done){
return (function (state_22790){
var state_val_22791 = (state_22790[(1)]);
if((state_val_22791 === (7))){
var inst_22786 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22792_22879 = state_22790__$1;
(statearr_22792_22879[(2)] = inst_22786);

(statearr_22792_22879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (20))){
var inst_22691 = (state_22790[(7)]);
var inst_22701 = cljs.core.first.call(null,inst_22691);
var inst_22702 = cljs.core.nth.call(null,inst_22701,(0),null);
var inst_22703 = cljs.core.nth.call(null,inst_22701,(1),null);
var state_22790__$1 = (function (){var statearr_22793 = state_22790;
(statearr_22793[(8)] = inst_22702);

return statearr_22793;
})();
if(cljs.core.truth_(inst_22703)){
var statearr_22794_22880 = state_22790__$1;
(statearr_22794_22880[(1)] = (22));

} else {
var statearr_22795_22881 = state_22790__$1;
(statearr_22795_22881[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (27))){
var inst_22731 = (state_22790[(9)]);
var inst_22662 = (state_22790[(10)]);
var inst_22738 = (state_22790[(11)]);
var inst_22733 = (state_22790[(12)]);
var inst_22738__$1 = cljs.core._nth.call(null,inst_22731,inst_22733);
var inst_22739 = cljs.core.async.put_BANG_.call(null,inst_22738__$1,inst_22662,done);
var state_22790__$1 = (function (){var statearr_22796 = state_22790;
(statearr_22796[(11)] = inst_22738__$1);

return statearr_22796;
})();
if(cljs.core.truth_(inst_22739)){
var statearr_22797_22882 = state_22790__$1;
(statearr_22797_22882[(1)] = (30));

} else {
var statearr_22798_22883 = state_22790__$1;
(statearr_22798_22883[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (1))){
var state_22790__$1 = state_22790;
var statearr_22799_22884 = state_22790__$1;
(statearr_22799_22884[(2)] = null);

(statearr_22799_22884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (24))){
var inst_22691 = (state_22790[(7)]);
var inst_22708 = (state_22790[(2)]);
var inst_22709 = cljs.core.next.call(null,inst_22691);
var inst_22671 = inst_22709;
var inst_22672 = null;
var inst_22673 = (0);
var inst_22674 = (0);
var state_22790__$1 = (function (){var statearr_22800 = state_22790;
(statearr_22800[(13)] = inst_22672);

(statearr_22800[(14)] = inst_22673);

(statearr_22800[(15)] = inst_22674);

(statearr_22800[(16)] = inst_22708);

(statearr_22800[(17)] = inst_22671);

return statearr_22800;
})();
var statearr_22801_22885 = state_22790__$1;
(statearr_22801_22885[(2)] = null);

(statearr_22801_22885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (39))){
var state_22790__$1 = state_22790;
var statearr_22805_22886 = state_22790__$1;
(statearr_22805_22886[(2)] = null);

(statearr_22805_22886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (4))){
var inst_22662 = (state_22790[(10)]);
var inst_22662__$1 = (state_22790[(2)]);
var inst_22663 = (inst_22662__$1 == null);
var state_22790__$1 = (function (){var statearr_22806 = state_22790;
(statearr_22806[(10)] = inst_22662__$1);

return statearr_22806;
})();
if(cljs.core.truth_(inst_22663)){
var statearr_22807_22887 = state_22790__$1;
(statearr_22807_22887[(1)] = (5));

} else {
var statearr_22808_22888 = state_22790__$1;
(statearr_22808_22888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (15))){
var inst_22672 = (state_22790[(13)]);
var inst_22673 = (state_22790[(14)]);
var inst_22674 = (state_22790[(15)]);
var inst_22671 = (state_22790[(17)]);
var inst_22687 = (state_22790[(2)]);
var inst_22688 = (inst_22674 + (1));
var tmp22802 = inst_22672;
var tmp22803 = inst_22673;
var tmp22804 = inst_22671;
var inst_22671__$1 = tmp22804;
var inst_22672__$1 = tmp22802;
var inst_22673__$1 = tmp22803;
var inst_22674__$1 = inst_22688;
var state_22790__$1 = (function (){var statearr_22809 = state_22790;
(statearr_22809[(13)] = inst_22672__$1);

(statearr_22809[(14)] = inst_22673__$1);

(statearr_22809[(15)] = inst_22674__$1);

(statearr_22809[(18)] = inst_22687);

(statearr_22809[(17)] = inst_22671__$1);

return statearr_22809;
})();
var statearr_22810_22889 = state_22790__$1;
(statearr_22810_22889[(2)] = null);

(statearr_22810_22889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (21))){
var inst_22712 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22814_22890 = state_22790__$1;
(statearr_22814_22890[(2)] = inst_22712);

(statearr_22814_22890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (31))){
var inst_22738 = (state_22790[(11)]);
var inst_22742 = done.call(null,null);
var inst_22743 = cljs.core.async.untap_STAR_.call(null,m,inst_22738);
var state_22790__$1 = (function (){var statearr_22815 = state_22790;
(statearr_22815[(19)] = inst_22742);

return statearr_22815;
})();
var statearr_22816_22891 = state_22790__$1;
(statearr_22816_22891[(2)] = inst_22743);

(statearr_22816_22891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (32))){
var inst_22730 = (state_22790[(20)]);
var inst_22732 = (state_22790[(21)]);
var inst_22731 = (state_22790[(9)]);
var inst_22733 = (state_22790[(12)]);
var inst_22745 = (state_22790[(2)]);
var inst_22746 = (inst_22733 + (1));
var tmp22811 = inst_22730;
var tmp22812 = inst_22732;
var tmp22813 = inst_22731;
var inst_22730__$1 = tmp22811;
var inst_22731__$1 = tmp22813;
var inst_22732__$1 = tmp22812;
var inst_22733__$1 = inst_22746;
var state_22790__$1 = (function (){var statearr_22817 = state_22790;
(statearr_22817[(22)] = inst_22745);

(statearr_22817[(20)] = inst_22730__$1);

(statearr_22817[(21)] = inst_22732__$1);

(statearr_22817[(9)] = inst_22731__$1);

(statearr_22817[(12)] = inst_22733__$1);

return statearr_22817;
})();
var statearr_22818_22892 = state_22790__$1;
(statearr_22818_22892[(2)] = null);

(statearr_22818_22892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (40))){
var inst_22758 = (state_22790[(23)]);
var inst_22762 = done.call(null,null);
var inst_22763 = cljs.core.async.untap_STAR_.call(null,m,inst_22758);
var state_22790__$1 = (function (){var statearr_22819 = state_22790;
(statearr_22819[(24)] = inst_22762);

return statearr_22819;
})();
var statearr_22820_22893 = state_22790__$1;
(statearr_22820_22893[(2)] = inst_22763);

(statearr_22820_22893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (33))){
var inst_22749 = (state_22790[(25)]);
var inst_22751 = cljs.core.chunked_seq_QMARK_.call(null,inst_22749);
var state_22790__$1 = state_22790;
if(inst_22751){
var statearr_22821_22894 = state_22790__$1;
(statearr_22821_22894[(1)] = (36));

} else {
var statearr_22822_22895 = state_22790__$1;
(statearr_22822_22895[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (13))){
var inst_22681 = (state_22790[(26)]);
var inst_22684 = cljs.core.async.close_BANG_.call(null,inst_22681);
var state_22790__$1 = state_22790;
var statearr_22823_22896 = state_22790__$1;
(statearr_22823_22896[(2)] = inst_22684);

(statearr_22823_22896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (22))){
var inst_22702 = (state_22790[(8)]);
var inst_22705 = cljs.core.async.close_BANG_.call(null,inst_22702);
var state_22790__$1 = state_22790;
var statearr_22824_22897 = state_22790__$1;
(statearr_22824_22897[(2)] = inst_22705);

(statearr_22824_22897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (36))){
var inst_22749 = (state_22790[(25)]);
var inst_22753 = cljs.core.chunk_first.call(null,inst_22749);
var inst_22754 = cljs.core.chunk_rest.call(null,inst_22749);
var inst_22755 = cljs.core.count.call(null,inst_22753);
var inst_22730 = inst_22754;
var inst_22731 = inst_22753;
var inst_22732 = inst_22755;
var inst_22733 = (0);
var state_22790__$1 = (function (){var statearr_22825 = state_22790;
(statearr_22825[(20)] = inst_22730);

(statearr_22825[(21)] = inst_22732);

(statearr_22825[(9)] = inst_22731);

(statearr_22825[(12)] = inst_22733);

return statearr_22825;
})();
var statearr_22826_22898 = state_22790__$1;
(statearr_22826_22898[(2)] = null);

(statearr_22826_22898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (41))){
var inst_22749 = (state_22790[(25)]);
var inst_22765 = (state_22790[(2)]);
var inst_22766 = cljs.core.next.call(null,inst_22749);
var inst_22730 = inst_22766;
var inst_22731 = null;
var inst_22732 = (0);
var inst_22733 = (0);
var state_22790__$1 = (function (){var statearr_22827 = state_22790;
(statearr_22827[(20)] = inst_22730);

(statearr_22827[(21)] = inst_22732);

(statearr_22827[(9)] = inst_22731);

(statearr_22827[(27)] = inst_22765);

(statearr_22827[(12)] = inst_22733);

return statearr_22827;
})();
var statearr_22828_22899 = state_22790__$1;
(statearr_22828_22899[(2)] = null);

(statearr_22828_22899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (43))){
var state_22790__$1 = state_22790;
var statearr_22829_22900 = state_22790__$1;
(statearr_22829_22900[(2)] = null);

(statearr_22829_22900[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (29))){
var inst_22774 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22830_22901 = state_22790__$1;
(statearr_22830_22901[(2)] = inst_22774);

(statearr_22830_22901[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (44))){
var inst_22783 = (state_22790[(2)]);
var state_22790__$1 = (function (){var statearr_22831 = state_22790;
(statearr_22831[(28)] = inst_22783);

return statearr_22831;
})();
var statearr_22832_22902 = state_22790__$1;
(statearr_22832_22902[(2)] = null);

(statearr_22832_22902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (6))){
var inst_22722 = (state_22790[(29)]);
var inst_22721 = cljs.core.deref.call(null,cs);
var inst_22722__$1 = cljs.core.keys.call(null,inst_22721);
var inst_22723 = cljs.core.count.call(null,inst_22722__$1);
var inst_22724 = cljs.core.reset_BANG_.call(null,dctr,inst_22723);
var inst_22729 = cljs.core.seq.call(null,inst_22722__$1);
var inst_22730 = inst_22729;
var inst_22731 = null;
var inst_22732 = (0);
var inst_22733 = (0);
var state_22790__$1 = (function (){var statearr_22833 = state_22790;
(statearr_22833[(29)] = inst_22722__$1);

(statearr_22833[(30)] = inst_22724);

(statearr_22833[(20)] = inst_22730);

(statearr_22833[(21)] = inst_22732);

(statearr_22833[(9)] = inst_22731);

(statearr_22833[(12)] = inst_22733);

return statearr_22833;
})();
var statearr_22834_22903 = state_22790__$1;
(statearr_22834_22903[(2)] = null);

(statearr_22834_22903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (28))){
var inst_22749 = (state_22790[(25)]);
var inst_22730 = (state_22790[(20)]);
var inst_22749__$1 = cljs.core.seq.call(null,inst_22730);
var state_22790__$1 = (function (){var statearr_22835 = state_22790;
(statearr_22835[(25)] = inst_22749__$1);

return statearr_22835;
})();
if(inst_22749__$1){
var statearr_22836_22904 = state_22790__$1;
(statearr_22836_22904[(1)] = (33));

} else {
var statearr_22837_22905 = state_22790__$1;
(statearr_22837_22905[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (25))){
var inst_22732 = (state_22790[(21)]);
var inst_22733 = (state_22790[(12)]);
var inst_22735 = (inst_22733 < inst_22732);
var inst_22736 = inst_22735;
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22736)){
var statearr_22838_22906 = state_22790__$1;
(statearr_22838_22906[(1)] = (27));

} else {
var statearr_22839_22907 = state_22790__$1;
(statearr_22839_22907[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (34))){
var state_22790__$1 = state_22790;
var statearr_22840_22908 = state_22790__$1;
(statearr_22840_22908[(2)] = null);

(statearr_22840_22908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (17))){
var state_22790__$1 = state_22790;
var statearr_22841_22909 = state_22790__$1;
(statearr_22841_22909[(2)] = null);

(statearr_22841_22909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (3))){
var inst_22788 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22790__$1,inst_22788);
} else {
if((state_val_22791 === (12))){
var inst_22717 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22842_22910 = state_22790__$1;
(statearr_22842_22910[(2)] = inst_22717);

(statearr_22842_22910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (2))){
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(4),ch);
} else {
if((state_val_22791 === (23))){
var state_22790__$1 = state_22790;
var statearr_22843_22911 = state_22790__$1;
(statearr_22843_22911[(2)] = null);

(statearr_22843_22911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (35))){
var inst_22772 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22844_22912 = state_22790__$1;
(statearr_22844_22912[(2)] = inst_22772);

(statearr_22844_22912[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (19))){
var inst_22691 = (state_22790[(7)]);
var inst_22695 = cljs.core.chunk_first.call(null,inst_22691);
var inst_22696 = cljs.core.chunk_rest.call(null,inst_22691);
var inst_22697 = cljs.core.count.call(null,inst_22695);
var inst_22671 = inst_22696;
var inst_22672 = inst_22695;
var inst_22673 = inst_22697;
var inst_22674 = (0);
var state_22790__$1 = (function (){var statearr_22845 = state_22790;
(statearr_22845[(13)] = inst_22672);

(statearr_22845[(14)] = inst_22673);

(statearr_22845[(15)] = inst_22674);

(statearr_22845[(17)] = inst_22671);

return statearr_22845;
})();
var statearr_22846_22913 = state_22790__$1;
(statearr_22846_22913[(2)] = null);

(statearr_22846_22913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (11))){
var inst_22691 = (state_22790[(7)]);
var inst_22671 = (state_22790[(17)]);
var inst_22691__$1 = cljs.core.seq.call(null,inst_22671);
var state_22790__$1 = (function (){var statearr_22847 = state_22790;
(statearr_22847[(7)] = inst_22691__$1);

return statearr_22847;
})();
if(inst_22691__$1){
var statearr_22848_22914 = state_22790__$1;
(statearr_22848_22914[(1)] = (16));

} else {
var statearr_22849_22915 = state_22790__$1;
(statearr_22849_22915[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (9))){
var inst_22719 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22850_22916 = state_22790__$1;
(statearr_22850_22916[(2)] = inst_22719);

(statearr_22850_22916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (5))){
var inst_22669 = cljs.core.deref.call(null,cs);
var inst_22670 = cljs.core.seq.call(null,inst_22669);
var inst_22671 = inst_22670;
var inst_22672 = null;
var inst_22673 = (0);
var inst_22674 = (0);
var state_22790__$1 = (function (){var statearr_22851 = state_22790;
(statearr_22851[(13)] = inst_22672);

(statearr_22851[(14)] = inst_22673);

(statearr_22851[(15)] = inst_22674);

(statearr_22851[(17)] = inst_22671);

return statearr_22851;
})();
var statearr_22852_22917 = state_22790__$1;
(statearr_22852_22917[(2)] = null);

(statearr_22852_22917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (14))){
var state_22790__$1 = state_22790;
var statearr_22853_22918 = state_22790__$1;
(statearr_22853_22918[(2)] = null);

(statearr_22853_22918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (45))){
var inst_22780 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22854_22919 = state_22790__$1;
(statearr_22854_22919[(2)] = inst_22780);

(statearr_22854_22919[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (26))){
var inst_22722 = (state_22790[(29)]);
var inst_22776 = (state_22790[(2)]);
var inst_22777 = cljs.core.seq.call(null,inst_22722);
var state_22790__$1 = (function (){var statearr_22855 = state_22790;
(statearr_22855[(31)] = inst_22776);

return statearr_22855;
})();
if(inst_22777){
var statearr_22856_22920 = state_22790__$1;
(statearr_22856_22920[(1)] = (42));

} else {
var statearr_22857_22921 = state_22790__$1;
(statearr_22857_22921[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (16))){
var inst_22691 = (state_22790[(7)]);
var inst_22693 = cljs.core.chunked_seq_QMARK_.call(null,inst_22691);
var state_22790__$1 = state_22790;
if(inst_22693){
var statearr_22858_22922 = state_22790__$1;
(statearr_22858_22922[(1)] = (19));

} else {
var statearr_22859_22923 = state_22790__$1;
(statearr_22859_22923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (38))){
var inst_22769 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22860_22924 = state_22790__$1;
(statearr_22860_22924[(2)] = inst_22769);

(statearr_22860_22924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (30))){
var state_22790__$1 = state_22790;
var statearr_22861_22925 = state_22790__$1;
(statearr_22861_22925[(2)] = null);

(statearr_22861_22925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (10))){
var inst_22672 = (state_22790[(13)]);
var inst_22674 = (state_22790[(15)]);
var inst_22680 = cljs.core._nth.call(null,inst_22672,inst_22674);
var inst_22681 = cljs.core.nth.call(null,inst_22680,(0),null);
var inst_22682 = cljs.core.nth.call(null,inst_22680,(1),null);
var state_22790__$1 = (function (){var statearr_22862 = state_22790;
(statearr_22862[(26)] = inst_22681);

return statearr_22862;
})();
if(cljs.core.truth_(inst_22682)){
var statearr_22863_22926 = state_22790__$1;
(statearr_22863_22926[(1)] = (13));

} else {
var statearr_22864_22927 = state_22790__$1;
(statearr_22864_22927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (18))){
var inst_22715 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22865_22928 = state_22790__$1;
(statearr_22865_22928[(2)] = inst_22715);

(statearr_22865_22928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (42))){
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(45),dchan);
} else {
if((state_val_22791 === (37))){
var inst_22758 = (state_22790[(23)]);
var inst_22749 = (state_22790[(25)]);
var inst_22662 = (state_22790[(10)]);
var inst_22758__$1 = cljs.core.first.call(null,inst_22749);
var inst_22759 = cljs.core.async.put_BANG_.call(null,inst_22758__$1,inst_22662,done);
var state_22790__$1 = (function (){var statearr_22866 = state_22790;
(statearr_22866[(23)] = inst_22758__$1);

return statearr_22866;
})();
if(cljs.core.truth_(inst_22759)){
var statearr_22867_22929 = state_22790__$1;
(statearr_22867_22929[(1)] = (39));

} else {
var statearr_22868_22930 = state_22790__$1;
(statearr_22868_22930[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (8))){
var inst_22673 = (state_22790[(14)]);
var inst_22674 = (state_22790[(15)]);
var inst_22676 = (inst_22674 < inst_22673);
var inst_22677 = inst_22676;
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22677)){
var statearr_22869_22931 = state_22790__$1;
(statearr_22869_22931[(1)] = (10));

} else {
var statearr_22870_22932 = state_22790__$1;
(statearr_22870_22932[(1)] = (11));

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
});})(c__15232__auto___22878,cs,m,dchan,dctr,done))
;
return ((function (switch__15176__auto__,c__15232__auto___22878,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_22874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22874[(0)] = state_machine__15177__auto__);

(statearr_22874[(1)] = (1));

return statearr_22874;
});
var state_machine__15177__auto____1 = (function (state_22790){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_22790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e22875){if((e22875 instanceof Object)){
var ex__15180__auto__ = e22875;
var statearr_22876_22933 = state_22790;
(statearr_22876_22933[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22934 = state_22790;
state_22790 = G__22934;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_22790){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_22790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___22878,cs,m,dchan,dctr,done))
})();
var state__15234__auto__ = (function (){var statearr_22877 = f__15233__auto__.call(null);
(statearr_22877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___22878);

return statearr_22877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___22878,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22936 = {};
return obj22936;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22937){
var map__22942 = p__22937;
var map__22942__$1 = ((cljs.core.seq_QMARK_.call(null,map__22942))?cljs.core.apply.call(null,cljs.core.hash_map,map__22942):map__22942);
var opts = map__22942__$1;
var statearr_22943_22946 = state;
(statearr_22943_22946[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22942,map__22942__$1,opts){
return (function (val){
var statearr_22944_22947 = state;
(statearr_22944_22947[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22942,map__22942__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22945_22948 = state;
(statearr_22945_22948[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22937 = null;
if (arguments.length > 3) {
  p__22937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22937);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22949){
var state = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var cont_block = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var ports = cljs.core.first(arglist__22949);
var p__22937 = cljs.core.rest(arglist__22949);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22937);
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
if(typeof cljs.core.async.t23069 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23069 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23070){
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
this.meta23070 = meta23070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23069.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23069.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t23069.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23071){
var self__ = this;
var _23071__$1 = this;
return self__.meta23070;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23071,meta23070__$1){
var self__ = this;
var _23071__$1 = this;
return (new cljs.core.async.t23069(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23070__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23069.cljs$lang$type = true;

cljs.core.async.t23069.cljs$lang$ctorStr = "cljs.core.async/t23069";

cljs.core.async.t23069.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23069");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23069 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23069(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23070){
return (new cljs.core.async.t23069(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23070));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23069(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15232__auto___23188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23141){
var state_val_23142 = (state_23141[(1)]);
if((state_val_23142 === (7))){
var inst_23085 = (state_23141[(7)]);
var inst_23090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23085);
var state_23141__$1 = state_23141;
var statearr_23143_23189 = state_23141__$1;
(statearr_23143_23189[(2)] = inst_23090);

(statearr_23143_23189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (20))){
var inst_23100 = (state_23141[(8)]);
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23141__$1,(23),out,inst_23100);
} else {
if((state_val_23142 === (1))){
var inst_23075 = (state_23141[(9)]);
var inst_23075__$1 = calc_state.call(null);
var inst_23076 = cljs.core.seq_QMARK_.call(null,inst_23075__$1);
var state_23141__$1 = (function (){var statearr_23144 = state_23141;
(statearr_23144[(9)] = inst_23075__$1);

return statearr_23144;
})();
if(inst_23076){
var statearr_23145_23190 = state_23141__$1;
(statearr_23145_23190[(1)] = (2));

} else {
var statearr_23146_23191 = state_23141__$1;
(statearr_23146_23191[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (24))){
var inst_23093 = (state_23141[(10)]);
var inst_23085 = inst_23093;
var state_23141__$1 = (function (){var statearr_23147 = state_23141;
(statearr_23147[(7)] = inst_23085);

return statearr_23147;
})();
var statearr_23148_23192 = state_23141__$1;
(statearr_23148_23192[(2)] = null);

(statearr_23148_23192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (4))){
var inst_23075 = (state_23141[(9)]);
var inst_23081 = (state_23141[(2)]);
var inst_23082 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23083 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23084 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23085 = inst_23075;
var state_23141__$1 = (function (){var statearr_23149 = state_23141;
(statearr_23149[(7)] = inst_23085);

(statearr_23149[(11)] = inst_23082);

(statearr_23149[(12)] = inst_23084);

(statearr_23149[(13)] = inst_23083);

return statearr_23149;
})();
var statearr_23150_23193 = state_23141__$1;
(statearr_23150_23193[(2)] = null);

(statearr_23150_23193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (15))){
var state_23141__$1 = state_23141;
var statearr_23151_23194 = state_23141__$1;
(statearr_23151_23194[(2)] = null);

(statearr_23151_23194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (21))){
var inst_23093 = (state_23141[(10)]);
var inst_23085 = inst_23093;
var state_23141__$1 = (function (){var statearr_23152 = state_23141;
(statearr_23152[(7)] = inst_23085);

return statearr_23152;
})();
var statearr_23153_23195 = state_23141__$1;
(statearr_23153_23195[(2)] = null);

(statearr_23153_23195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (13))){
var inst_23137 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23154_23196 = state_23141__$1;
(statearr_23154_23196[(2)] = inst_23137);

(statearr_23154_23196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (22))){
var inst_23135 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23155_23197 = state_23141__$1;
(statearr_23155_23197[(2)] = inst_23135);

(statearr_23155_23197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (6))){
var inst_23139 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23141__$1,inst_23139);
} else {
if((state_val_23142 === (25))){
var state_23141__$1 = state_23141;
var statearr_23156_23198 = state_23141__$1;
(statearr_23156_23198[(2)] = null);

(statearr_23156_23198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (17))){
var inst_23115 = (state_23141[(14)]);
var state_23141__$1 = state_23141;
var statearr_23157_23199 = state_23141__$1;
(statearr_23157_23199[(2)] = inst_23115);

(statearr_23157_23199[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (3))){
var inst_23075 = (state_23141[(9)]);
var state_23141__$1 = state_23141;
var statearr_23158_23200 = state_23141__$1;
(statearr_23158_23200[(2)] = inst_23075);

(statearr_23158_23200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (12))){
var inst_23096 = (state_23141[(15)]);
var inst_23115 = (state_23141[(14)]);
var inst_23101 = (state_23141[(16)]);
var inst_23115__$1 = inst_23096.call(null,inst_23101);
var state_23141__$1 = (function (){var statearr_23159 = state_23141;
(statearr_23159[(14)] = inst_23115__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23115__$1)){
var statearr_23160_23201 = state_23141__$1;
(statearr_23160_23201[(1)] = (17));

} else {
var statearr_23161_23202 = state_23141__$1;
(statearr_23161_23202[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (2))){
var inst_23075 = (state_23141[(9)]);
var inst_23078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23075);
var state_23141__$1 = state_23141;
var statearr_23162_23203 = state_23141__$1;
(statearr_23162_23203[(2)] = inst_23078);

(statearr_23162_23203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (23))){
var inst_23126 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
if(cljs.core.truth_(inst_23126)){
var statearr_23163_23204 = state_23141__$1;
(statearr_23163_23204[(1)] = (24));

} else {
var statearr_23164_23205 = state_23141__$1;
(statearr_23164_23205[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (19))){
var inst_23123 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
if(cljs.core.truth_(inst_23123)){
var statearr_23165_23206 = state_23141__$1;
(statearr_23165_23206[(1)] = (20));

} else {
var statearr_23166_23207 = state_23141__$1;
(statearr_23166_23207[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (11))){
var inst_23100 = (state_23141[(8)]);
var inst_23106 = (inst_23100 == null);
var state_23141__$1 = state_23141;
if(cljs.core.truth_(inst_23106)){
var statearr_23167_23208 = state_23141__$1;
(statearr_23167_23208[(1)] = (14));

} else {
var statearr_23168_23209 = state_23141__$1;
(statearr_23168_23209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (9))){
var inst_23093 = (state_23141[(10)]);
var inst_23093__$1 = (state_23141[(2)]);
var inst_23094 = cljs.core.get.call(null,inst_23093__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23095 = cljs.core.get.call(null,inst_23093__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23096 = cljs.core.get.call(null,inst_23093__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_23141__$1 = (function (){var statearr_23169 = state_23141;
(statearr_23169[(15)] = inst_23096);

(statearr_23169[(10)] = inst_23093__$1);

(statearr_23169[(17)] = inst_23095);

return statearr_23169;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23141__$1,(10),inst_23094);
} else {
if((state_val_23142 === (5))){
var inst_23085 = (state_23141[(7)]);
var inst_23088 = cljs.core.seq_QMARK_.call(null,inst_23085);
var state_23141__$1 = state_23141;
if(inst_23088){
var statearr_23170_23210 = state_23141__$1;
(statearr_23170_23210[(1)] = (7));

} else {
var statearr_23171_23211 = state_23141__$1;
(statearr_23171_23211[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (14))){
var inst_23101 = (state_23141[(16)]);
var inst_23108 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23101);
var state_23141__$1 = state_23141;
var statearr_23172_23212 = state_23141__$1;
(statearr_23172_23212[(2)] = inst_23108);

(statearr_23172_23212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (26))){
var inst_23131 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23173_23213 = state_23141__$1;
(statearr_23173_23213[(2)] = inst_23131);

(statearr_23173_23213[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (16))){
var inst_23111 = (state_23141[(2)]);
var inst_23112 = calc_state.call(null);
var inst_23085 = inst_23112;
var state_23141__$1 = (function (){var statearr_23174 = state_23141;
(statearr_23174[(7)] = inst_23085);

(statearr_23174[(18)] = inst_23111);

return statearr_23174;
})();
var statearr_23175_23214 = state_23141__$1;
(statearr_23175_23214[(2)] = null);

(statearr_23175_23214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (10))){
var inst_23100 = (state_23141[(8)]);
var inst_23101 = (state_23141[(16)]);
var inst_23099 = (state_23141[(2)]);
var inst_23100__$1 = cljs.core.nth.call(null,inst_23099,(0),null);
var inst_23101__$1 = cljs.core.nth.call(null,inst_23099,(1),null);
var inst_23102 = (inst_23100__$1 == null);
var inst_23103 = cljs.core._EQ_.call(null,inst_23101__$1,change);
var inst_23104 = (inst_23102) || (inst_23103);
var state_23141__$1 = (function (){var statearr_23176 = state_23141;
(statearr_23176[(8)] = inst_23100__$1);

(statearr_23176[(16)] = inst_23101__$1);

return statearr_23176;
})();
if(cljs.core.truth_(inst_23104)){
var statearr_23177_23215 = state_23141__$1;
(statearr_23177_23215[(1)] = (11));

} else {
var statearr_23178_23216 = state_23141__$1;
(statearr_23178_23216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (18))){
var inst_23096 = (state_23141[(15)]);
var inst_23095 = (state_23141[(17)]);
var inst_23101 = (state_23141[(16)]);
var inst_23118 = cljs.core.empty_QMARK_.call(null,inst_23096);
var inst_23119 = inst_23095.call(null,inst_23101);
var inst_23120 = cljs.core.not.call(null,inst_23119);
var inst_23121 = (inst_23118) && (inst_23120);
var state_23141__$1 = state_23141;
var statearr_23179_23217 = state_23141__$1;
(statearr_23179_23217[(2)] = inst_23121);

(statearr_23179_23217[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (8))){
var inst_23085 = (state_23141[(7)]);
var state_23141__$1 = state_23141;
var statearr_23180_23218 = state_23141__$1;
(statearr_23180_23218[(2)] = inst_23085);

(statearr_23180_23218[(1)] = (9));


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
});})(c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15176__auto__,c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23184[(0)] = state_machine__15177__auto__);

(statearr_23184[(1)] = (1));

return statearr_23184;
});
var state_machine__15177__auto____1 = (function (state_23141){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23185){if((e23185 instanceof Object)){
var ex__15180__auto__ = e23185;
var statearr_23186_23219 = state_23141;
(statearr_23186_23219[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23220 = state_23141;
state_23141 = G__23220;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23141){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15234__auto__ = (function (){var statearr_23187 = f__15233__auto__.call(null);
(statearr_23187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23188);

return statearr_23187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj23222 = {};
return obj23222;
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
return (function (p1__23223_SHARP_){
if(cljs.core.truth_(p1__23223_SHARP_.call(null,topic))){
return p1__23223_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23223_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12545__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23346 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23347){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23347 = meta23347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23346.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23346.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23346.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t23346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23346.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23348){
var self__ = this;
var _23348__$1 = this;
return self__.meta23347;
});})(mults,ensure_mult))
;

cljs.core.async.t23346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23348,meta23347__$1){
var self__ = this;
var _23348__$1 = this;
return (new cljs.core.async.t23346(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23347__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23346.cljs$lang$type = true;

cljs.core.async.t23346.cljs$lang$ctorStr = "cljs.core.async/t23346";

cljs.core.async.t23346.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23346");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23346 = ((function (mults,ensure_mult){
return (function __GT_t23346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23347){
return (new cljs.core.async.t23346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23347));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23346(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15232__auto___23468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23468,mults,ensure_mult,p){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23468,mults,ensure_mult,p){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (7))){
var inst_23416 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23422_23469 = state_23420__$1;
(statearr_23422_23469[(2)] = inst_23416);

(statearr_23422_23469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (20))){
var state_23420__$1 = state_23420;
var statearr_23423_23470 = state_23420__$1;
(statearr_23423_23470[(2)] = null);

(statearr_23423_23470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (1))){
var state_23420__$1 = state_23420;
var statearr_23424_23471 = state_23420__$1;
(statearr_23424_23471[(2)] = null);

(statearr_23424_23471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (24))){
var inst_23399 = (state_23420[(7)]);
var inst_23408 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23399);
var state_23420__$1 = state_23420;
var statearr_23425_23472 = state_23420__$1;
(statearr_23425_23472[(2)] = inst_23408);

(statearr_23425_23472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (4))){
var inst_23351 = (state_23420[(8)]);
var inst_23351__$1 = (state_23420[(2)]);
var inst_23352 = (inst_23351__$1 == null);
var state_23420__$1 = (function (){var statearr_23426 = state_23420;
(statearr_23426[(8)] = inst_23351__$1);

return statearr_23426;
})();
if(cljs.core.truth_(inst_23352)){
var statearr_23427_23473 = state_23420__$1;
(statearr_23427_23473[(1)] = (5));

} else {
var statearr_23428_23474 = state_23420__$1;
(statearr_23428_23474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (15))){
var inst_23393 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23429_23475 = state_23420__$1;
(statearr_23429_23475[(2)] = inst_23393);

(statearr_23429_23475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (21))){
var inst_23413 = (state_23420[(2)]);
var state_23420__$1 = (function (){var statearr_23430 = state_23420;
(statearr_23430[(9)] = inst_23413);

return statearr_23430;
})();
var statearr_23431_23476 = state_23420__$1;
(statearr_23431_23476[(2)] = null);

(statearr_23431_23476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (13))){
var inst_23375 = (state_23420[(10)]);
var inst_23377 = cljs.core.chunked_seq_QMARK_.call(null,inst_23375);
var state_23420__$1 = state_23420;
if(inst_23377){
var statearr_23432_23477 = state_23420__$1;
(statearr_23432_23477[(1)] = (16));

} else {
var statearr_23433_23478 = state_23420__$1;
(statearr_23433_23478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (22))){
var inst_23405 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23405)){
var statearr_23434_23479 = state_23420__$1;
(statearr_23434_23479[(1)] = (23));

} else {
var statearr_23435_23480 = state_23420__$1;
(statearr_23435_23480[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (6))){
var inst_23401 = (state_23420[(11)]);
var inst_23351 = (state_23420[(8)]);
var inst_23399 = (state_23420[(7)]);
var inst_23399__$1 = topic_fn.call(null,inst_23351);
var inst_23400 = cljs.core.deref.call(null,mults);
var inst_23401__$1 = cljs.core.get.call(null,inst_23400,inst_23399__$1);
var state_23420__$1 = (function (){var statearr_23436 = state_23420;
(statearr_23436[(11)] = inst_23401__$1);

(statearr_23436[(7)] = inst_23399__$1);

return statearr_23436;
})();
if(cljs.core.truth_(inst_23401__$1)){
var statearr_23437_23481 = state_23420__$1;
(statearr_23437_23481[(1)] = (19));

} else {
var statearr_23438_23482 = state_23420__$1;
(statearr_23438_23482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (25))){
var inst_23410 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23439_23483 = state_23420__$1;
(statearr_23439_23483[(2)] = inst_23410);

(statearr_23439_23483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (17))){
var inst_23375 = (state_23420[(10)]);
var inst_23384 = cljs.core.first.call(null,inst_23375);
var inst_23385 = cljs.core.async.muxch_STAR_.call(null,inst_23384);
var inst_23386 = cljs.core.async.close_BANG_.call(null,inst_23385);
var inst_23387 = cljs.core.next.call(null,inst_23375);
var inst_23361 = inst_23387;
var inst_23362 = null;
var inst_23363 = (0);
var inst_23364 = (0);
var state_23420__$1 = (function (){var statearr_23440 = state_23420;
(statearr_23440[(12)] = inst_23364);

(statearr_23440[(13)] = inst_23363);

(statearr_23440[(14)] = inst_23386);

(statearr_23440[(15)] = inst_23362);

(statearr_23440[(16)] = inst_23361);

return statearr_23440;
})();
var statearr_23441_23484 = state_23420__$1;
(statearr_23441_23484[(2)] = null);

(statearr_23441_23484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (3))){
var inst_23418 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
if((state_val_23421 === (12))){
var inst_23395 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23442_23485 = state_23420__$1;
(statearr_23442_23485[(2)] = inst_23395);

(statearr_23442_23485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (2))){
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23420__$1,(4),ch);
} else {
if((state_val_23421 === (23))){
var state_23420__$1 = state_23420;
var statearr_23443_23486 = state_23420__$1;
(statearr_23443_23486[(2)] = null);

(statearr_23443_23486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (19))){
var inst_23401 = (state_23420[(11)]);
var inst_23351 = (state_23420[(8)]);
var inst_23403 = cljs.core.async.muxch_STAR_.call(null,inst_23401);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(22),inst_23403,inst_23351);
} else {
if((state_val_23421 === (11))){
var inst_23375 = (state_23420[(10)]);
var inst_23361 = (state_23420[(16)]);
var inst_23375__$1 = cljs.core.seq.call(null,inst_23361);
var state_23420__$1 = (function (){var statearr_23444 = state_23420;
(statearr_23444[(10)] = inst_23375__$1);

return statearr_23444;
})();
if(inst_23375__$1){
var statearr_23445_23487 = state_23420__$1;
(statearr_23445_23487[(1)] = (13));

} else {
var statearr_23446_23488 = state_23420__$1;
(statearr_23446_23488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (9))){
var inst_23397 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23447_23489 = state_23420__$1;
(statearr_23447_23489[(2)] = inst_23397);

(statearr_23447_23489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (5))){
var inst_23358 = cljs.core.deref.call(null,mults);
var inst_23359 = cljs.core.vals.call(null,inst_23358);
var inst_23360 = cljs.core.seq.call(null,inst_23359);
var inst_23361 = inst_23360;
var inst_23362 = null;
var inst_23363 = (0);
var inst_23364 = (0);
var state_23420__$1 = (function (){var statearr_23448 = state_23420;
(statearr_23448[(12)] = inst_23364);

(statearr_23448[(13)] = inst_23363);

(statearr_23448[(15)] = inst_23362);

(statearr_23448[(16)] = inst_23361);

return statearr_23448;
})();
var statearr_23449_23490 = state_23420__$1;
(statearr_23449_23490[(2)] = null);

(statearr_23449_23490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (14))){
var state_23420__$1 = state_23420;
var statearr_23453_23491 = state_23420__$1;
(statearr_23453_23491[(2)] = null);

(statearr_23453_23491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (16))){
var inst_23375 = (state_23420[(10)]);
var inst_23379 = cljs.core.chunk_first.call(null,inst_23375);
var inst_23380 = cljs.core.chunk_rest.call(null,inst_23375);
var inst_23381 = cljs.core.count.call(null,inst_23379);
var inst_23361 = inst_23380;
var inst_23362 = inst_23379;
var inst_23363 = inst_23381;
var inst_23364 = (0);
var state_23420__$1 = (function (){var statearr_23454 = state_23420;
(statearr_23454[(12)] = inst_23364);

(statearr_23454[(13)] = inst_23363);

(statearr_23454[(15)] = inst_23362);

(statearr_23454[(16)] = inst_23361);

return statearr_23454;
})();
var statearr_23455_23492 = state_23420__$1;
(statearr_23455_23492[(2)] = null);

(statearr_23455_23492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (10))){
var inst_23364 = (state_23420[(12)]);
var inst_23363 = (state_23420[(13)]);
var inst_23362 = (state_23420[(15)]);
var inst_23361 = (state_23420[(16)]);
var inst_23369 = cljs.core._nth.call(null,inst_23362,inst_23364);
var inst_23370 = cljs.core.async.muxch_STAR_.call(null,inst_23369);
var inst_23371 = cljs.core.async.close_BANG_.call(null,inst_23370);
var inst_23372 = (inst_23364 + (1));
var tmp23450 = inst_23363;
var tmp23451 = inst_23362;
var tmp23452 = inst_23361;
var inst_23361__$1 = tmp23452;
var inst_23362__$1 = tmp23451;
var inst_23363__$1 = tmp23450;
var inst_23364__$1 = inst_23372;
var state_23420__$1 = (function (){var statearr_23456 = state_23420;
(statearr_23456[(12)] = inst_23364__$1);

(statearr_23456[(17)] = inst_23371);

(statearr_23456[(13)] = inst_23363__$1);

(statearr_23456[(15)] = inst_23362__$1);

(statearr_23456[(16)] = inst_23361__$1);

return statearr_23456;
})();
var statearr_23457_23493 = state_23420__$1;
(statearr_23457_23493[(2)] = null);

(statearr_23457_23493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (18))){
var inst_23390 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23458_23494 = state_23420__$1;
(statearr_23458_23494[(2)] = inst_23390);

(statearr_23458_23494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (8))){
var inst_23364 = (state_23420[(12)]);
var inst_23363 = (state_23420[(13)]);
var inst_23366 = (inst_23364 < inst_23363);
var inst_23367 = inst_23366;
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23367)){
var statearr_23459_23495 = state_23420__$1;
(statearr_23459_23495[(1)] = (10));

} else {
var statearr_23460_23496 = state_23420__$1;
(statearr_23460_23496[(1)] = (11));

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
});})(c__15232__auto___23468,mults,ensure_mult,p))
;
return ((function (switch__15176__auto__,c__15232__auto___23468,mults,ensure_mult,p){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23464[(0)] = state_machine__15177__auto__);

(statearr_23464[(1)] = (1));

return statearr_23464;
});
var state_machine__15177__auto____1 = (function (state_23420){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23465){if((e23465 instanceof Object)){
var ex__15180__auto__ = e23465;
var statearr_23466_23497 = state_23420;
(statearr_23466_23497[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23498 = state_23420;
state_23420 = G__23498;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23468,mults,ensure_mult,p))
})();
var state__15234__auto__ = (function (){var statearr_23467 = f__15233__auto__.call(null);
(statearr_23467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23468);

return statearr_23467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23468,mults,ensure_mult,p))
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
var c__15232__auto___23635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23605){
var state_val_23606 = (state_23605[(1)]);
if((state_val_23606 === (7))){
var state_23605__$1 = state_23605;
var statearr_23607_23636 = state_23605__$1;
(statearr_23607_23636[(2)] = null);

(statearr_23607_23636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (1))){
var state_23605__$1 = state_23605;
var statearr_23608_23637 = state_23605__$1;
(statearr_23608_23637[(2)] = null);

(statearr_23608_23637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (4))){
var inst_23569 = (state_23605[(7)]);
var inst_23571 = (inst_23569 < cnt);
var state_23605__$1 = state_23605;
if(cljs.core.truth_(inst_23571)){
var statearr_23609_23638 = state_23605__$1;
(statearr_23609_23638[(1)] = (6));

} else {
var statearr_23610_23639 = state_23605__$1;
(statearr_23610_23639[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (15))){
var inst_23601 = (state_23605[(2)]);
var state_23605__$1 = state_23605;
var statearr_23611_23640 = state_23605__$1;
(statearr_23611_23640[(2)] = inst_23601);

(statearr_23611_23640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (13))){
var inst_23594 = cljs.core.async.close_BANG_.call(null,out);
var state_23605__$1 = state_23605;
var statearr_23612_23641 = state_23605__$1;
(statearr_23612_23641[(2)] = inst_23594);

(statearr_23612_23641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (6))){
var state_23605__$1 = state_23605;
var statearr_23613_23642 = state_23605__$1;
(statearr_23613_23642[(2)] = null);

(statearr_23613_23642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (3))){
var inst_23603 = (state_23605[(2)]);
var state_23605__$1 = state_23605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23605__$1,inst_23603);
} else {
if((state_val_23606 === (12))){
var inst_23591 = (state_23605[(8)]);
var inst_23591__$1 = (state_23605[(2)]);
var inst_23592 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23591__$1);
var state_23605__$1 = (function (){var statearr_23614 = state_23605;
(statearr_23614[(8)] = inst_23591__$1);

return statearr_23614;
})();
if(cljs.core.truth_(inst_23592)){
var statearr_23615_23643 = state_23605__$1;
(statearr_23615_23643[(1)] = (13));

} else {
var statearr_23616_23644 = state_23605__$1;
(statearr_23616_23644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (2))){
var inst_23568 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23569 = (0);
var state_23605__$1 = (function (){var statearr_23617 = state_23605;
(statearr_23617[(9)] = inst_23568);

(statearr_23617[(7)] = inst_23569);

return statearr_23617;
})();
var statearr_23618_23645 = state_23605__$1;
(statearr_23618_23645[(2)] = null);

(statearr_23618_23645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (11))){
var inst_23569 = (state_23605[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23605,(10),Object,null,(9));
var inst_23578 = chs__$1.call(null,inst_23569);
var inst_23579 = done.call(null,inst_23569);
var inst_23580 = cljs.core.async.take_BANG_.call(null,inst_23578,inst_23579);
var state_23605__$1 = state_23605;
var statearr_23619_23646 = state_23605__$1;
(statearr_23619_23646[(2)] = inst_23580);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23605__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (9))){
var inst_23569 = (state_23605[(7)]);
var inst_23582 = (state_23605[(2)]);
var inst_23583 = (inst_23569 + (1));
var inst_23569__$1 = inst_23583;
var state_23605__$1 = (function (){var statearr_23620 = state_23605;
(statearr_23620[(10)] = inst_23582);

(statearr_23620[(7)] = inst_23569__$1);

return statearr_23620;
})();
var statearr_23621_23647 = state_23605__$1;
(statearr_23621_23647[(2)] = null);

(statearr_23621_23647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (5))){
var inst_23589 = (state_23605[(2)]);
var state_23605__$1 = (function (){var statearr_23622 = state_23605;
(statearr_23622[(11)] = inst_23589);

return statearr_23622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23605__$1,(12),dchan);
} else {
if((state_val_23606 === (14))){
var inst_23591 = (state_23605[(8)]);
var inst_23596 = cljs.core.apply.call(null,f,inst_23591);
var state_23605__$1 = state_23605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23605__$1,(16),out,inst_23596);
} else {
if((state_val_23606 === (16))){
var inst_23598 = (state_23605[(2)]);
var state_23605__$1 = (function (){var statearr_23623 = state_23605;
(statearr_23623[(12)] = inst_23598);

return statearr_23623;
})();
var statearr_23624_23648 = state_23605__$1;
(statearr_23624_23648[(2)] = null);

(statearr_23624_23648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (10))){
var inst_23573 = (state_23605[(2)]);
var inst_23574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23605__$1 = (function (){var statearr_23625 = state_23605;
(statearr_23625[(13)] = inst_23573);

return statearr_23625;
})();
var statearr_23626_23649 = state_23605__$1;
(statearr_23626_23649[(2)] = inst_23574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23605__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (8))){
var inst_23587 = (state_23605[(2)]);
var state_23605__$1 = state_23605;
var statearr_23627_23650 = state_23605__$1;
(statearr_23627_23650[(2)] = inst_23587);

(statearr_23627_23650[(1)] = (5));


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
});})(c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15176__auto__,c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23631[(0)] = state_machine__15177__auto__);

(statearr_23631[(1)] = (1));

return statearr_23631;
});
var state_machine__15177__auto____1 = (function (state_23605){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23632){if((e23632 instanceof Object)){
var ex__15180__auto__ = e23632;
var statearr_23633_23651 = state_23605;
(statearr_23633_23651[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23652 = state_23605;
state_23605 = G__23652;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23605){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15234__auto__ = (function (){var statearr_23634 = f__15233__auto__.call(null);
(statearr_23634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23635);

return statearr_23634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23635,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15232__auto___23760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23760,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23760,out){
return (function (state_23736){
var state_val_23737 = (state_23736[(1)]);
if((state_val_23737 === (7))){
var inst_23716 = (state_23736[(7)]);
var inst_23715 = (state_23736[(8)]);
var inst_23715__$1 = (state_23736[(2)]);
var inst_23716__$1 = cljs.core.nth.call(null,inst_23715__$1,(0),null);
var inst_23717 = cljs.core.nth.call(null,inst_23715__$1,(1),null);
var inst_23718 = (inst_23716__$1 == null);
var state_23736__$1 = (function (){var statearr_23738 = state_23736;
(statearr_23738[(7)] = inst_23716__$1);

(statearr_23738[(8)] = inst_23715__$1);

(statearr_23738[(9)] = inst_23717);

return statearr_23738;
})();
if(cljs.core.truth_(inst_23718)){
var statearr_23739_23761 = state_23736__$1;
(statearr_23739_23761[(1)] = (8));

} else {
var statearr_23740_23762 = state_23736__$1;
(statearr_23740_23762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (1))){
var inst_23707 = cljs.core.vec.call(null,chs);
var inst_23708 = inst_23707;
var state_23736__$1 = (function (){var statearr_23741 = state_23736;
(statearr_23741[(10)] = inst_23708);

return statearr_23741;
})();
var statearr_23742_23763 = state_23736__$1;
(statearr_23742_23763[(2)] = null);

(statearr_23742_23763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (4))){
var inst_23708 = (state_23736[(10)]);
var state_23736__$1 = state_23736;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23736__$1,(7),inst_23708);
} else {
if((state_val_23737 === (6))){
var inst_23732 = (state_23736[(2)]);
var state_23736__$1 = state_23736;
var statearr_23743_23764 = state_23736__$1;
(statearr_23743_23764[(2)] = inst_23732);

(statearr_23743_23764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (3))){
var inst_23734 = (state_23736[(2)]);
var state_23736__$1 = state_23736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23736__$1,inst_23734);
} else {
if((state_val_23737 === (2))){
var inst_23708 = (state_23736[(10)]);
var inst_23710 = cljs.core.count.call(null,inst_23708);
var inst_23711 = (inst_23710 > (0));
var state_23736__$1 = state_23736;
if(cljs.core.truth_(inst_23711)){
var statearr_23745_23765 = state_23736__$1;
(statearr_23745_23765[(1)] = (4));

} else {
var statearr_23746_23766 = state_23736__$1;
(statearr_23746_23766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (11))){
var inst_23708 = (state_23736[(10)]);
var inst_23725 = (state_23736[(2)]);
var tmp23744 = inst_23708;
var inst_23708__$1 = tmp23744;
var state_23736__$1 = (function (){var statearr_23747 = state_23736;
(statearr_23747[(11)] = inst_23725);

(statearr_23747[(10)] = inst_23708__$1);

return statearr_23747;
})();
var statearr_23748_23767 = state_23736__$1;
(statearr_23748_23767[(2)] = null);

(statearr_23748_23767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (9))){
var inst_23716 = (state_23736[(7)]);
var state_23736__$1 = state_23736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23736__$1,(11),out,inst_23716);
} else {
if((state_val_23737 === (5))){
var inst_23730 = cljs.core.async.close_BANG_.call(null,out);
var state_23736__$1 = state_23736;
var statearr_23749_23768 = state_23736__$1;
(statearr_23749_23768[(2)] = inst_23730);

(statearr_23749_23768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (10))){
var inst_23728 = (state_23736[(2)]);
var state_23736__$1 = state_23736;
var statearr_23750_23769 = state_23736__$1;
(statearr_23750_23769[(2)] = inst_23728);

(statearr_23750_23769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (8))){
var inst_23716 = (state_23736[(7)]);
var inst_23708 = (state_23736[(10)]);
var inst_23715 = (state_23736[(8)]);
var inst_23717 = (state_23736[(9)]);
var inst_23720 = (function (){var c = inst_23717;
var v = inst_23716;
var vec__23713 = inst_23715;
var cs = inst_23708;
return ((function (c,v,vec__23713,cs,inst_23716,inst_23708,inst_23715,inst_23717,state_val_23737,c__15232__auto___23760,out){
return (function (p1__23653_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23653_SHARP_);
});
;})(c,v,vec__23713,cs,inst_23716,inst_23708,inst_23715,inst_23717,state_val_23737,c__15232__auto___23760,out))
})();
var inst_23721 = cljs.core.filterv.call(null,inst_23720,inst_23708);
var inst_23708__$1 = inst_23721;
var state_23736__$1 = (function (){var statearr_23751 = state_23736;
(statearr_23751[(10)] = inst_23708__$1);

return statearr_23751;
})();
var statearr_23752_23770 = state_23736__$1;
(statearr_23752_23770[(2)] = null);

(statearr_23752_23770[(1)] = (2));


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
});})(c__15232__auto___23760,out))
;
return ((function (switch__15176__auto__,c__15232__auto___23760,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23756[(0)] = state_machine__15177__auto__);

(statearr_23756[(1)] = (1));

return statearr_23756;
});
var state_machine__15177__auto____1 = (function (state_23736){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23757){if((e23757 instanceof Object)){
var ex__15180__auto__ = e23757;
var statearr_23758_23771 = state_23736;
(statearr_23758_23771[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23772 = state_23736;
state_23736 = G__23772;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23736){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23760,out))
})();
var state__15234__auto__ = (function (){var statearr_23759 = f__15233__auto__.call(null);
(statearr_23759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23760);

return statearr_23759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23760,out))
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
var c__15232__auto___23865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23865,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23865,out){
return (function (state_23842){
var state_val_23843 = (state_23842[(1)]);
if((state_val_23843 === (7))){
var inst_23824 = (state_23842[(7)]);
var inst_23824__$1 = (state_23842[(2)]);
var inst_23825 = (inst_23824__$1 == null);
var inst_23826 = cljs.core.not.call(null,inst_23825);
var state_23842__$1 = (function (){var statearr_23844 = state_23842;
(statearr_23844[(7)] = inst_23824__$1);

return statearr_23844;
})();
if(inst_23826){
var statearr_23845_23866 = state_23842__$1;
(statearr_23845_23866[(1)] = (8));

} else {
var statearr_23846_23867 = state_23842__$1;
(statearr_23846_23867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (1))){
var inst_23819 = (0);
var state_23842__$1 = (function (){var statearr_23847 = state_23842;
(statearr_23847[(8)] = inst_23819);

return statearr_23847;
})();
var statearr_23848_23868 = state_23842__$1;
(statearr_23848_23868[(2)] = null);

(statearr_23848_23868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (4))){
var state_23842__$1 = state_23842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23842__$1,(7),ch);
} else {
if((state_val_23843 === (6))){
var inst_23837 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
var statearr_23849_23869 = state_23842__$1;
(statearr_23849_23869[(2)] = inst_23837);

(statearr_23849_23869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (3))){
var inst_23839 = (state_23842[(2)]);
var inst_23840 = cljs.core.async.close_BANG_.call(null,out);
var state_23842__$1 = (function (){var statearr_23850 = state_23842;
(statearr_23850[(9)] = inst_23839);

return statearr_23850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23842__$1,inst_23840);
} else {
if((state_val_23843 === (2))){
var inst_23819 = (state_23842[(8)]);
var inst_23821 = (inst_23819 < n);
var state_23842__$1 = state_23842;
if(cljs.core.truth_(inst_23821)){
var statearr_23851_23870 = state_23842__$1;
(statearr_23851_23870[(1)] = (4));

} else {
var statearr_23852_23871 = state_23842__$1;
(statearr_23852_23871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (11))){
var inst_23819 = (state_23842[(8)]);
var inst_23829 = (state_23842[(2)]);
var inst_23830 = (inst_23819 + (1));
var inst_23819__$1 = inst_23830;
var state_23842__$1 = (function (){var statearr_23853 = state_23842;
(statearr_23853[(10)] = inst_23829);

(statearr_23853[(8)] = inst_23819__$1);

return statearr_23853;
})();
var statearr_23854_23872 = state_23842__$1;
(statearr_23854_23872[(2)] = null);

(statearr_23854_23872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (9))){
var state_23842__$1 = state_23842;
var statearr_23855_23873 = state_23842__$1;
(statearr_23855_23873[(2)] = null);

(statearr_23855_23873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (5))){
var state_23842__$1 = state_23842;
var statearr_23856_23874 = state_23842__$1;
(statearr_23856_23874[(2)] = null);

(statearr_23856_23874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (10))){
var inst_23834 = (state_23842[(2)]);
var state_23842__$1 = state_23842;
var statearr_23857_23875 = state_23842__$1;
(statearr_23857_23875[(2)] = inst_23834);

(statearr_23857_23875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23843 === (8))){
var inst_23824 = (state_23842[(7)]);
var state_23842__$1 = state_23842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23842__$1,(11),out,inst_23824);
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
});})(c__15232__auto___23865,out))
;
return ((function (switch__15176__auto__,c__15232__auto___23865,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23861[(0)] = state_machine__15177__auto__);

(statearr_23861[(1)] = (1));

return statearr_23861;
});
var state_machine__15177__auto____1 = (function (state_23842){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object)){
var ex__15180__auto__ = e23862;
var statearr_23863_23876 = state_23842;
(statearr_23863_23876[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23877 = state_23842;
state_23842 = G__23877;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23842){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23865,out))
})();
var state__15234__auto__ = (function (){var statearr_23864 = f__15233__auto__.call(null);
(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23865);

return statearr_23864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23865,out))
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
if(typeof cljs.core.async.t23885 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23885 = (function (ch,f,map_LT_,meta23886){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23886 = meta23886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23888 = (function (fn1,_,meta23886,map_LT_,f,ch,meta23889){
this.fn1 = fn1;
this._ = _;
this.meta23886 = meta23886;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23889 = meta23889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23878_SHARP_){
return f1.call(null,(((p1__23878_SHARP_ == null))?null:self__.f.call(null,p1__23878_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23890){
var self__ = this;
var _23890__$1 = this;
return self__.meta23889;
});})(___$1))
;

cljs.core.async.t23888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23890,meta23889__$1){
var self__ = this;
var _23890__$1 = this;
return (new cljs.core.async.t23888(self__.fn1,self__._,self__.meta23886,self__.map_LT_,self__.f,self__.ch,meta23889__$1));
});})(___$1))
;

cljs.core.async.t23888.cljs$lang$type = true;

cljs.core.async.t23888.cljs$lang$ctorStr = "cljs.core.async/t23888";

cljs.core.async.t23888.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23888");
});})(___$1))
;

cljs.core.async.__GT_t23888 = ((function (___$1){
return (function __GT_t23888(fn1__$1,___$2,meta23886__$1,map_LT___$1,f__$1,ch__$1,meta23889){
return (new cljs.core.async.t23888(fn1__$1,___$2,meta23886__$1,map_LT___$1,f__$1,ch__$1,meta23889));
});})(___$1))
;

}

return (new cljs.core.async.t23888(fn1,___$1,self__.meta23886,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23885.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23887){
var self__ = this;
var _23887__$1 = this;
return self__.meta23886;
});

cljs.core.async.t23885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23887,meta23886__$1){
var self__ = this;
var _23887__$1 = this;
return (new cljs.core.async.t23885(self__.ch,self__.f,self__.map_LT_,meta23886__$1));
});

cljs.core.async.t23885.cljs$lang$type = true;

cljs.core.async.t23885.cljs$lang$ctorStr = "cljs.core.async/t23885";

cljs.core.async.t23885.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23885");
});

cljs.core.async.__GT_t23885 = (function __GT_t23885(ch__$1,f__$1,map_LT___$1,meta23886){
return (new cljs.core.async.t23885(ch__$1,f__$1,map_LT___$1,meta23886));
});

}

return (new cljs.core.async.t23885(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23894 = (function (ch,f,map_GT_,meta23895){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23895 = meta23895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23896){
var self__ = this;
var _23896__$1 = this;
return self__.meta23895;
});

cljs.core.async.t23894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23896,meta23895__$1){
var self__ = this;
var _23896__$1 = this;
return (new cljs.core.async.t23894(self__.ch,self__.f,self__.map_GT_,meta23895__$1));
});

cljs.core.async.t23894.cljs$lang$type = true;

cljs.core.async.t23894.cljs$lang$ctorStr = "cljs.core.async/t23894";

cljs.core.async.t23894.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23894");
});

cljs.core.async.__GT_t23894 = (function __GT_t23894(ch__$1,f__$1,map_GT___$1,meta23895){
return (new cljs.core.async.t23894(ch__$1,f__$1,map_GT___$1,meta23895));
});

}

return (new cljs.core.async.t23894(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23900 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23900 = (function (ch,p,filter_GT_,meta23901){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23901 = meta23901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23902){
var self__ = this;
var _23902__$1 = this;
return self__.meta23901;
});

cljs.core.async.t23900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23902,meta23901__$1){
var self__ = this;
var _23902__$1 = this;
return (new cljs.core.async.t23900(self__.ch,self__.p,self__.filter_GT_,meta23901__$1));
});

cljs.core.async.t23900.cljs$lang$type = true;

cljs.core.async.t23900.cljs$lang$ctorStr = "cljs.core.async/t23900";

cljs.core.async.t23900.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cljs.core.async/t23900");
});

cljs.core.async.__GT_t23900 = (function __GT_t23900(ch__$1,p__$1,filter_GT___$1,meta23901){
return (new cljs.core.async.t23900(ch__$1,p__$1,filter_GT___$1,meta23901));
});

}

return (new cljs.core.async.t23900(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/timothyw/Projects/temp/bkeeping/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15232__auto___23985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___23985,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___23985,out){
return (function (state_23964){
var state_val_23965 = (state_23964[(1)]);
if((state_val_23965 === (7))){
var inst_23960 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
var statearr_23966_23986 = state_23964__$1;
(statearr_23966_23986[(2)] = inst_23960);

(statearr_23966_23986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (1))){
var state_23964__$1 = state_23964;
var statearr_23967_23987 = state_23964__$1;
(statearr_23967_23987[(2)] = null);

(statearr_23967_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (4))){
var inst_23946 = (state_23964[(7)]);
var inst_23946__$1 = (state_23964[(2)]);
var inst_23947 = (inst_23946__$1 == null);
var state_23964__$1 = (function (){var statearr_23968 = state_23964;
(statearr_23968[(7)] = inst_23946__$1);

return statearr_23968;
})();
if(cljs.core.truth_(inst_23947)){
var statearr_23969_23988 = state_23964__$1;
(statearr_23969_23988[(1)] = (5));

} else {
var statearr_23970_23989 = state_23964__$1;
(statearr_23970_23989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (6))){
var inst_23946 = (state_23964[(7)]);
var inst_23951 = p.call(null,inst_23946);
var state_23964__$1 = state_23964;
if(cljs.core.truth_(inst_23951)){
var statearr_23971_23990 = state_23964__$1;
(statearr_23971_23990[(1)] = (8));

} else {
var statearr_23972_23991 = state_23964__$1;
(statearr_23972_23991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (3))){
var inst_23962 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23964__$1,inst_23962);
} else {
if((state_val_23965 === (2))){
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23964__$1,(4),ch);
} else {
if((state_val_23965 === (11))){
var inst_23954 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
var statearr_23973_23992 = state_23964__$1;
(statearr_23973_23992[(2)] = inst_23954);

(statearr_23973_23992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (9))){
var state_23964__$1 = state_23964;
var statearr_23974_23993 = state_23964__$1;
(statearr_23974_23993[(2)] = null);

(statearr_23974_23993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (5))){
var inst_23949 = cljs.core.async.close_BANG_.call(null,out);
var state_23964__$1 = state_23964;
var statearr_23975_23994 = state_23964__$1;
(statearr_23975_23994[(2)] = inst_23949);

(statearr_23975_23994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (10))){
var inst_23957 = (state_23964[(2)]);
var state_23964__$1 = (function (){var statearr_23976 = state_23964;
(statearr_23976[(8)] = inst_23957);

return statearr_23976;
})();
var statearr_23977_23995 = state_23964__$1;
(statearr_23977_23995[(2)] = null);

(statearr_23977_23995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (8))){
var inst_23946 = (state_23964[(7)]);
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23964__$1,(11),out,inst_23946);
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
});})(c__15232__auto___23985,out))
;
return ((function (switch__15176__auto__,c__15232__auto___23985,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_23981 = [null,null,null,null,null,null,null,null,null];
(statearr_23981[(0)] = state_machine__15177__auto__);

(statearr_23981[(1)] = (1));

return statearr_23981;
});
var state_machine__15177__auto____1 = (function (state_23964){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_23964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e23982){if((e23982 instanceof Object)){
var ex__15180__auto__ = e23982;
var statearr_23983_23996 = state_23964;
(statearr_23983_23996[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23997 = state_23964;
state_23964 = G__23997;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_23964){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_23964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___23985,out))
})();
var state__15234__auto__ = (function (){var statearr_23984 = f__15233__auto__.call(null);
(statearr_23984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___23985);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___23985,out))
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
var c__15232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto__){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto__){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24165_24206 = state_24163__$1;
(statearr_24165_24206[(2)] = inst_24159);

(statearr_24165_24206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (20))){
var inst_24129 = (state_24163[(7)]);
var inst_24140 = (state_24163[(2)]);
var inst_24141 = cljs.core.next.call(null,inst_24129);
var inst_24115 = inst_24141;
var inst_24116 = null;
var inst_24117 = (0);
var inst_24118 = (0);
var state_24163__$1 = (function (){var statearr_24166 = state_24163;
(statearr_24166[(8)] = inst_24117);

(statearr_24166[(9)] = inst_24140);

(statearr_24166[(10)] = inst_24115);

(statearr_24166[(11)] = inst_24116);

(statearr_24166[(12)] = inst_24118);

return statearr_24166;
})();
var statearr_24167_24207 = state_24163__$1;
(statearr_24167_24207[(2)] = null);

(statearr_24167_24207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (1))){
var state_24163__$1 = state_24163;
var statearr_24168_24208 = state_24163__$1;
(statearr_24168_24208[(2)] = null);

(statearr_24168_24208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (4))){
var inst_24104 = (state_24163[(13)]);
var inst_24104__$1 = (state_24163[(2)]);
var inst_24105 = (inst_24104__$1 == null);
var state_24163__$1 = (function (){var statearr_24169 = state_24163;
(statearr_24169[(13)] = inst_24104__$1);

return statearr_24169;
})();
if(cljs.core.truth_(inst_24105)){
var statearr_24170_24209 = state_24163__$1;
(statearr_24170_24209[(1)] = (5));

} else {
var statearr_24171_24210 = state_24163__$1;
(statearr_24171_24210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (15))){
var state_24163__$1 = state_24163;
var statearr_24175_24211 = state_24163__$1;
(statearr_24175_24211[(2)] = null);

(statearr_24175_24211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (21))){
var state_24163__$1 = state_24163;
var statearr_24176_24212 = state_24163__$1;
(statearr_24176_24212[(2)] = null);

(statearr_24176_24212[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (13))){
var inst_24117 = (state_24163[(8)]);
var inst_24115 = (state_24163[(10)]);
var inst_24116 = (state_24163[(11)]);
var inst_24118 = (state_24163[(12)]);
var inst_24125 = (state_24163[(2)]);
var inst_24126 = (inst_24118 + (1));
var tmp24172 = inst_24117;
var tmp24173 = inst_24115;
var tmp24174 = inst_24116;
var inst_24115__$1 = tmp24173;
var inst_24116__$1 = tmp24174;
var inst_24117__$1 = tmp24172;
var inst_24118__$1 = inst_24126;
var state_24163__$1 = (function (){var statearr_24177 = state_24163;
(statearr_24177[(8)] = inst_24117__$1);

(statearr_24177[(10)] = inst_24115__$1);

(statearr_24177[(11)] = inst_24116__$1);

(statearr_24177[(14)] = inst_24125);

(statearr_24177[(12)] = inst_24118__$1);

return statearr_24177;
})();
var statearr_24178_24213 = state_24163__$1;
(statearr_24178_24213[(2)] = null);

(statearr_24178_24213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (22))){
var state_24163__$1 = state_24163;
var statearr_24179_24214 = state_24163__$1;
(statearr_24179_24214[(2)] = null);

(statearr_24179_24214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (6))){
var inst_24104 = (state_24163[(13)]);
var inst_24113 = f.call(null,inst_24104);
var inst_24114 = cljs.core.seq.call(null,inst_24113);
var inst_24115 = inst_24114;
var inst_24116 = null;
var inst_24117 = (0);
var inst_24118 = (0);
var state_24163__$1 = (function (){var statearr_24180 = state_24163;
(statearr_24180[(8)] = inst_24117);

(statearr_24180[(10)] = inst_24115);

(statearr_24180[(11)] = inst_24116);

(statearr_24180[(12)] = inst_24118);

return statearr_24180;
})();
var statearr_24181_24215 = state_24163__$1;
(statearr_24181_24215[(2)] = null);

(statearr_24181_24215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (17))){
var inst_24129 = (state_24163[(7)]);
var inst_24133 = cljs.core.chunk_first.call(null,inst_24129);
var inst_24134 = cljs.core.chunk_rest.call(null,inst_24129);
var inst_24135 = cljs.core.count.call(null,inst_24133);
var inst_24115 = inst_24134;
var inst_24116 = inst_24133;
var inst_24117 = inst_24135;
var inst_24118 = (0);
var state_24163__$1 = (function (){var statearr_24182 = state_24163;
(statearr_24182[(8)] = inst_24117);

(statearr_24182[(10)] = inst_24115);

(statearr_24182[(11)] = inst_24116);

(statearr_24182[(12)] = inst_24118);

return statearr_24182;
})();
var statearr_24183_24216 = state_24163__$1;
(statearr_24183_24216[(2)] = null);

(statearr_24183_24216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (12))){
var inst_24149 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24184_24217 = state_24163__$1;
(statearr_24184_24217[(2)] = inst_24149);

(statearr_24184_24217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(4),in$);
} else {
if((state_val_24164 === (23))){
var inst_24157 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24185_24218 = state_24163__$1;
(statearr_24185_24218[(2)] = inst_24157);

(statearr_24185_24218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (19))){
var inst_24144 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24186_24219 = state_24163__$1;
(statearr_24186_24219[(2)] = inst_24144);

(statearr_24186_24219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (11))){
var inst_24129 = (state_24163[(7)]);
var inst_24115 = (state_24163[(10)]);
var inst_24129__$1 = cljs.core.seq.call(null,inst_24115);
var state_24163__$1 = (function (){var statearr_24187 = state_24163;
(statearr_24187[(7)] = inst_24129__$1);

return statearr_24187;
})();
if(inst_24129__$1){
var statearr_24188_24220 = state_24163__$1;
(statearr_24188_24220[(1)] = (14));

} else {
var statearr_24189_24221 = state_24163__$1;
(statearr_24189_24221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (9))){
var inst_24151 = (state_24163[(2)]);
var inst_24152 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24163__$1 = (function (){var statearr_24190 = state_24163;
(statearr_24190[(15)] = inst_24151);

return statearr_24190;
})();
if(cljs.core.truth_(inst_24152)){
var statearr_24191_24222 = state_24163__$1;
(statearr_24191_24222[(1)] = (21));

} else {
var statearr_24192_24223 = state_24163__$1;
(statearr_24192_24223[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (5))){
var inst_24107 = cljs.core.async.close_BANG_.call(null,out);
var state_24163__$1 = state_24163;
var statearr_24193_24224 = state_24163__$1;
(statearr_24193_24224[(2)] = inst_24107);

(statearr_24193_24224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (14))){
var inst_24129 = (state_24163[(7)]);
var inst_24131 = cljs.core.chunked_seq_QMARK_.call(null,inst_24129);
var state_24163__$1 = state_24163;
if(inst_24131){
var statearr_24194_24225 = state_24163__$1;
(statearr_24194_24225[(1)] = (17));

} else {
var statearr_24195_24226 = state_24163__$1;
(statearr_24195_24226[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (16))){
var inst_24147 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24196_24227 = state_24163__$1;
(statearr_24196_24227[(2)] = inst_24147);

(statearr_24196_24227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (10))){
var inst_24116 = (state_24163[(11)]);
var inst_24118 = (state_24163[(12)]);
var inst_24123 = cljs.core._nth.call(null,inst_24116,inst_24118);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,(13),out,inst_24123);
} else {
if((state_val_24164 === (18))){
var inst_24129 = (state_24163[(7)]);
var inst_24138 = cljs.core.first.call(null,inst_24129);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,(20),out,inst_24138);
} else {
if((state_val_24164 === (8))){
var inst_24117 = (state_24163[(8)]);
var inst_24118 = (state_24163[(12)]);
var inst_24120 = (inst_24118 < inst_24117);
var inst_24121 = inst_24120;
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24121)){
var statearr_24197_24228 = state_24163__$1;
(statearr_24197_24228[(1)] = (10));

} else {
var statearr_24198_24229 = state_24163__$1;
(statearr_24198_24229[(1)] = (11));

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
});})(c__15232__auto__))
;
return ((function (switch__15176__auto__,c__15232__auto__){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_24202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24202[(0)] = state_machine__15177__auto__);

(statearr_24202[(1)] = (1));

return statearr_24202;
});
var state_machine__15177__auto____1 = (function (state_24163){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e24203){if((e24203 instanceof Object)){
var ex__15180__auto__ = e24203;
var statearr_24204_24230 = state_24163;
(statearr_24204_24230[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24231 = state_24163;
state_24163 = G__24231;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto__))
})();
var state__15234__auto__ = (function (){var statearr_24205 = f__15233__auto__.call(null);
(statearr_24205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto__);

return statearr_24205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto__))
);

return c__15232__auto__;
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
var c__15232__auto___24328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___24328,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___24328,out){
return (function (state_24303){
var state_val_24304 = (state_24303[(1)]);
if((state_val_24304 === (7))){
var inst_24298 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24305_24329 = state_24303__$1;
(statearr_24305_24329[(2)] = inst_24298);

(statearr_24305_24329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (1))){
var inst_24280 = null;
var state_24303__$1 = (function (){var statearr_24306 = state_24303;
(statearr_24306[(7)] = inst_24280);

return statearr_24306;
})();
var statearr_24307_24330 = state_24303__$1;
(statearr_24307_24330[(2)] = null);

(statearr_24307_24330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (4))){
var inst_24283 = (state_24303[(8)]);
var inst_24283__$1 = (state_24303[(2)]);
var inst_24284 = (inst_24283__$1 == null);
var inst_24285 = cljs.core.not.call(null,inst_24284);
var state_24303__$1 = (function (){var statearr_24308 = state_24303;
(statearr_24308[(8)] = inst_24283__$1);

return statearr_24308;
})();
if(inst_24285){
var statearr_24309_24331 = state_24303__$1;
(statearr_24309_24331[(1)] = (5));

} else {
var statearr_24310_24332 = state_24303__$1;
(statearr_24310_24332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (6))){
var state_24303__$1 = state_24303;
var statearr_24311_24333 = state_24303__$1;
(statearr_24311_24333[(2)] = null);

(statearr_24311_24333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (3))){
var inst_24300 = (state_24303[(2)]);
var inst_24301 = cljs.core.async.close_BANG_.call(null,out);
var state_24303__$1 = (function (){var statearr_24312 = state_24303;
(statearr_24312[(9)] = inst_24300);

return statearr_24312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24303__$1,inst_24301);
} else {
if((state_val_24304 === (2))){
var state_24303__$1 = state_24303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24303__$1,(4),ch);
} else {
if((state_val_24304 === (11))){
var inst_24283 = (state_24303[(8)]);
var inst_24292 = (state_24303[(2)]);
var inst_24280 = inst_24283;
var state_24303__$1 = (function (){var statearr_24313 = state_24303;
(statearr_24313[(7)] = inst_24280);

(statearr_24313[(10)] = inst_24292);

return statearr_24313;
})();
var statearr_24314_24334 = state_24303__$1;
(statearr_24314_24334[(2)] = null);

(statearr_24314_24334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (9))){
var inst_24283 = (state_24303[(8)]);
var state_24303__$1 = state_24303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24303__$1,(11),out,inst_24283);
} else {
if((state_val_24304 === (5))){
var inst_24280 = (state_24303[(7)]);
var inst_24283 = (state_24303[(8)]);
var inst_24287 = cljs.core._EQ_.call(null,inst_24283,inst_24280);
var state_24303__$1 = state_24303;
if(inst_24287){
var statearr_24316_24335 = state_24303__$1;
(statearr_24316_24335[(1)] = (8));

} else {
var statearr_24317_24336 = state_24303__$1;
(statearr_24317_24336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (10))){
var inst_24295 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24318_24337 = state_24303__$1;
(statearr_24318_24337[(2)] = inst_24295);

(statearr_24318_24337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (8))){
var inst_24280 = (state_24303[(7)]);
var tmp24315 = inst_24280;
var inst_24280__$1 = tmp24315;
var state_24303__$1 = (function (){var statearr_24319 = state_24303;
(statearr_24319[(7)] = inst_24280__$1);

return statearr_24319;
})();
var statearr_24320_24338 = state_24303__$1;
(statearr_24320_24338[(2)] = null);

(statearr_24320_24338[(1)] = (2));


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
});})(c__15232__auto___24328,out))
;
return ((function (switch__15176__auto__,c__15232__auto___24328,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24324[(0)] = state_machine__15177__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var state_machine__15177__auto____1 = (function (state_24303){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_24303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__15180__auto__ = e24325;
var statearr_24326_24339 = state_24303;
(statearr_24326_24339[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24340 = state_24303;
state_24303 = G__24340;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_24303){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_24303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___24328,out))
})();
var state__15234__auto__ = (function (){var statearr_24327 = f__15233__auto__.call(null);
(statearr_24327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___24328);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___24328,out))
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
var c__15232__auto___24475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___24475,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___24475,out){
return (function (state_24445){
var state_val_24446 = (state_24445[(1)]);
if((state_val_24446 === (7))){
var inst_24441 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24447_24476 = state_24445__$1;
(statearr_24447_24476[(2)] = inst_24441);

(statearr_24447_24476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (1))){
var inst_24408 = (new Array(n));
var inst_24409 = inst_24408;
var inst_24410 = (0);
var state_24445__$1 = (function (){var statearr_24448 = state_24445;
(statearr_24448[(7)] = inst_24409);

(statearr_24448[(8)] = inst_24410);

return statearr_24448;
})();
var statearr_24449_24477 = state_24445__$1;
(statearr_24449_24477[(2)] = null);

(statearr_24449_24477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (4))){
var inst_24413 = (state_24445[(9)]);
var inst_24413__$1 = (state_24445[(2)]);
var inst_24414 = (inst_24413__$1 == null);
var inst_24415 = cljs.core.not.call(null,inst_24414);
var state_24445__$1 = (function (){var statearr_24450 = state_24445;
(statearr_24450[(9)] = inst_24413__$1);

return statearr_24450;
})();
if(inst_24415){
var statearr_24451_24478 = state_24445__$1;
(statearr_24451_24478[(1)] = (5));

} else {
var statearr_24452_24479 = state_24445__$1;
(statearr_24452_24479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (15))){
var inst_24435 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24453_24480 = state_24445__$1;
(statearr_24453_24480[(2)] = inst_24435);

(statearr_24453_24480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (13))){
var state_24445__$1 = state_24445;
var statearr_24454_24481 = state_24445__$1;
(statearr_24454_24481[(2)] = null);

(statearr_24454_24481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (6))){
var inst_24410 = (state_24445[(8)]);
var inst_24431 = (inst_24410 > (0));
var state_24445__$1 = state_24445;
if(cljs.core.truth_(inst_24431)){
var statearr_24455_24482 = state_24445__$1;
(statearr_24455_24482[(1)] = (12));

} else {
var statearr_24456_24483 = state_24445__$1;
(statearr_24456_24483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (3))){
var inst_24443 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24445__$1,inst_24443);
} else {
if((state_val_24446 === (12))){
var inst_24409 = (state_24445[(7)]);
var inst_24433 = cljs.core.vec.call(null,inst_24409);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24445__$1,(15),out,inst_24433);
} else {
if((state_val_24446 === (2))){
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24445__$1,(4),ch);
} else {
if((state_val_24446 === (11))){
var inst_24425 = (state_24445[(2)]);
var inst_24426 = (new Array(n));
var inst_24409 = inst_24426;
var inst_24410 = (0);
var state_24445__$1 = (function (){var statearr_24457 = state_24445;
(statearr_24457[(7)] = inst_24409);

(statearr_24457[(10)] = inst_24425);

(statearr_24457[(8)] = inst_24410);

return statearr_24457;
})();
var statearr_24458_24484 = state_24445__$1;
(statearr_24458_24484[(2)] = null);

(statearr_24458_24484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (9))){
var inst_24409 = (state_24445[(7)]);
var inst_24423 = cljs.core.vec.call(null,inst_24409);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24445__$1,(11),out,inst_24423);
} else {
if((state_val_24446 === (5))){
var inst_24409 = (state_24445[(7)]);
var inst_24418 = (state_24445[(11)]);
var inst_24410 = (state_24445[(8)]);
var inst_24413 = (state_24445[(9)]);
var inst_24417 = (inst_24409[inst_24410] = inst_24413);
var inst_24418__$1 = (inst_24410 + (1));
var inst_24419 = (inst_24418__$1 < n);
var state_24445__$1 = (function (){var statearr_24459 = state_24445;
(statearr_24459[(12)] = inst_24417);

(statearr_24459[(11)] = inst_24418__$1);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24419)){
var statearr_24460_24485 = state_24445__$1;
(statearr_24460_24485[(1)] = (8));

} else {
var statearr_24461_24486 = state_24445__$1;
(statearr_24461_24486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (14))){
var inst_24438 = (state_24445[(2)]);
var inst_24439 = cljs.core.async.close_BANG_.call(null,out);
var state_24445__$1 = (function (){var statearr_24463 = state_24445;
(statearr_24463[(13)] = inst_24438);

return statearr_24463;
})();
var statearr_24464_24487 = state_24445__$1;
(statearr_24464_24487[(2)] = inst_24439);

(statearr_24464_24487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (10))){
var inst_24429 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24465_24488 = state_24445__$1;
(statearr_24465_24488[(2)] = inst_24429);

(statearr_24465_24488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (8))){
var inst_24409 = (state_24445[(7)]);
var inst_24418 = (state_24445[(11)]);
var tmp24462 = inst_24409;
var inst_24409__$1 = tmp24462;
var inst_24410 = inst_24418;
var state_24445__$1 = (function (){var statearr_24466 = state_24445;
(statearr_24466[(7)] = inst_24409__$1);

(statearr_24466[(8)] = inst_24410);

return statearr_24466;
})();
var statearr_24467_24489 = state_24445__$1;
(statearr_24467_24489[(2)] = null);

(statearr_24467_24489[(1)] = (2));


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
});})(c__15232__auto___24475,out))
;
return ((function (switch__15176__auto__,c__15232__auto___24475,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_24471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24471[(0)] = state_machine__15177__auto__);

(statearr_24471[(1)] = (1));

return statearr_24471;
});
var state_machine__15177__auto____1 = (function (state_24445){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_24445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e24472){if((e24472 instanceof Object)){
var ex__15180__auto__ = e24472;
var statearr_24473_24490 = state_24445;
(statearr_24473_24490[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24445;
state_24445 = G__24491;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___24475,out))
})();
var state__15234__auto__ = (function (){var statearr_24474 = f__15233__auto__.call(null);
(statearr_24474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___24475);

return statearr_24474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___24475,out))
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
var c__15232__auto___24634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15232__auto___24634,out){
return (function (){
var f__15233__auto__ = (function (){var switch__15176__auto__ = ((function (c__15232__auto___24634,out){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24600 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24606_24635 = state_24604__$1;
(statearr_24606_24635[(2)] = inst_24600);

(statearr_24606_24635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (1))){
var inst_24563 = [];
var inst_24564 = inst_24563;
var inst_24565 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24604__$1 = (function (){var statearr_24607 = state_24604;
(statearr_24607[(7)] = inst_24564);

(statearr_24607[(8)] = inst_24565);

return statearr_24607;
})();
var statearr_24608_24636 = state_24604__$1;
(statearr_24608_24636[(2)] = null);

(statearr_24608_24636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (4))){
var inst_24568 = (state_24604[(9)]);
var inst_24568__$1 = (state_24604[(2)]);
var inst_24569 = (inst_24568__$1 == null);
var inst_24570 = cljs.core.not.call(null,inst_24569);
var state_24604__$1 = (function (){var statearr_24609 = state_24604;
(statearr_24609[(9)] = inst_24568__$1);

return statearr_24609;
})();
if(inst_24570){
var statearr_24610_24637 = state_24604__$1;
(statearr_24610_24637[(1)] = (5));

} else {
var statearr_24611_24638 = state_24604__$1;
(statearr_24611_24638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (15))){
var inst_24594 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24612_24639 = state_24604__$1;
(statearr_24612_24639[(2)] = inst_24594);

(statearr_24612_24639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (13))){
var state_24604__$1 = state_24604;
var statearr_24613_24640 = state_24604__$1;
(statearr_24613_24640[(2)] = null);

(statearr_24613_24640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (6))){
var inst_24564 = (state_24604[(7)]);
var inst_24589 = inst_24564.length;
var inst_24590 = (inst_24589 > (0));
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24590)){
var statearr_24614_24641 = state_24604__$1;
(statearr_24614_24641[(1)] = (12));

} else {
var statearr_24615_24642 = state_24604__$1;
(statearr_24615_24642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (3))){
var inst_24602 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (12))){
var inst_24564 = (state_24604[(7)]);
var inst_24592 = cljs.core.vec.call(null,inst_24564);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24604__$1,(15),out,inst_24592);
} else {
if((state_val_24605 === (2))){
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24604__$1,(4),ch);
} else {
if((state_val_24605 === (11))){
var inst_24572 = (state_24604[(10)]);
var inst_24568 = (state_24604[(9)]);
var inst_24582 = (state_24604[(2)]);
var inst_24583 = [];
var inst_24584 = inst_24583.push(inst_24568);
var inst_24564 = inst_24583;
var inst_24565 = inst_24572;
var state_24604__$1 = (function (){var statearr_24616 = state_24604;
(statearr_24616[(7)] = inst_24564);

(statearr_24616[(8)] = inst_24565);

(statearr_24616[(11)] = inst_24582);

(statearr_24616[(12)] = inst_24584);

return statearr_24616;
})();
var statearr_24617_24643 = state_24604__$1;
(statearr_24617_24643[(2)] = null);

(statearr_24617_24643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (9))){
var inst_24564 = (state_24604[(7)]);
var inst_24580 = cljs.core.vec.call(null,inst_24564);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24604__$1,(11),out,inst_24580);
} else {
if((state_val_24605 === (5))){
var inst_24572 = (state_24604[(10)]);
var inst_24568 = (state_24604[(9)]);
var inst_24565 = (state_24604[(8)]);
var inst_24572__$1 = f.call(null,inst_24568);
var inst_24573 = cljs.core._EQ_.call(null,inst_24572__$1,inst_24565);
var inst_24574 = cljs.core.keyword_identical_QMARK_.call(null,inst_24565,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24575 = (inst_24573) || (inst_24574);
var state_24604__$1 = (function (){var statearr_24618 = state_24604;
(statearr_24618[(10)] = inst_24572__$1);

return statearr_24618;
})();
if(cljs.core.truth_(inst_24575)){
var statearr_24619_24644 = state_24604__$1;
(statearr_24619_24644[(1)] = (8));

} else {
var statearr_24620_24645 = state_24604__$1;
(statearr_24620_24645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (14))){
var inst_24597 = (state_24604[(2)]);
var inst_24598 = cljs.core.async.close_BANG_.call(null,out);
var state_24604__$1 = (function (){var statearr_24622 = state_24604;
(statearr_24622[(13)] = inst_24597);

return statearr_24622;
})();
var statearr_24623_24646 = state_24604__$1;
(statearr_24623_24646[(2)] = inst_24598);

(statearr_24623_24646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (10))){
var inst_24587 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24624_24647 = state_24604__$1;
(statearr_24624_24647[(2)] = inst_24587);

(statearr_24624_24647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (8))){
var inst_24564 = (state_24604[(7)]);
var inst_24572 = (state_24604[(10)]);
var inst_24568 = (state_24604[(9)]);
var inst_24577 = inst_24564.push(inst_24568);
var tmp24621 = inst_24564;
var inst_24564__$1 = tmp24621;
var inst_24565 = inst_24572;
var state_24604__$1 = (function (){var statearr_24625 = state_24604;
(statearr_24625[(7)] = inst_24564__$1);

(statearr_24625[(8)] = inst_24565);

(statearr_24625[(14)] = inst_24577);

return statearr_24625;
})();
var statearr_24626_24648 = state_24604__$1;
(statearr_24626_24648[(2)] = null);

(statearr_24626_24648[(1)] = (2));


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
});})(c__15232__auto___24634,out))
;
return ((function (switch__15176__auto__,c__15232__auto___24634,out){
return (function() {
var state_machine__15177__auto__ = null;
var state_machine__15177__auto____0 = (function (){
var statearr_24630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24630[(0)] = state_machine__15177__auto__);

(statearr_24630[(1)] = (1));

return statearr_24630;
});
var state_machine__15177__auto____1 = (function (state_24604){
while(true){
var ret_value__15178__auto__ = (function (){try{while(true){
var result__15179__auto__ = switch__15176__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15179__auto__;
}
break;
}
}catch (e24631){if((e24631 instanceof Object)){
var ex__15180__auto__ = e24631;
var statearr_24632_24649 = state_24604;
(statearr_24632_24649[(5)] = ex__15180__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24650 = state_24604;
state_24604 = G__24650;
continue;
} else {
return ret_value__15178__auto__;
}
break;
}
});
state_machine__15177__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return state_machine__15177__auto____0.call(this);
case 1:
return state_machine__15177__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15177__auto____0;
state_machine__15177__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15177__auto____1;
return state_machine__15177__auto__;
})()
;})(switch__15176__auto__,c__15232__auto___24634,out))
})();
var state__15234__auto__ = (function (){var statearr_24633 = f__15233__auto__.call(null);
(statearr_24633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15232__auto___24634);

return statearr_24633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15234__auto__);
});})(c__15232__auto___24634,out))
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