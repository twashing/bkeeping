// Compiled by ClojureScript 0.0-2505
goog.provide('freactive.core');
goog.require('cljs.core');
freactive.core._STAR_invalidate_rx_STAR_ = null;
freactive.core._STAR_lazy_STAR_ = null;
freactive.core._STAR_do_trace_captures_STAR_ = null;
freactive.core._STAR_trace_capture_STAR_ = null;

freactive.core.IReactive = (function (){var obj13618 = {};
return obj13618;
})();

freactive.core._raw_deref = (function _raw_deref(this$){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IReactive$_raw_deref$arity$1;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IReactive$_raw_deref$arity$1(this$);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._raw_deref[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._raw_deref["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReactive.-raw-deref",this$);
}
}
})().call(null,this$);
}
});


freactive.core.IInvalidates = (function (){var obj13620 = {};
return obj13620;
})();

freactive.core._notify_invalidation_watches = (function _notify_invalidation_watches(this$){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1(this$);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._notify_invalidation_watches[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._notify_invalidation_watches["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInvalidates.-notify-invalidation-watches",this$);
}
}
})().call(null,this$);
}
});

freactive.core._add_invalidation_watch = (function _add_invalidation_watch(this$,key,f){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3(this$,key,f);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._add_invalidation_watch[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._add_invalidation_watch["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInvalidates.-add-invalidation-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

freactive.core._remove_invalidation_watch = (function _remove_invalidation_watch(this$,key){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2(this$,key);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._remove_invalidation_watch[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._remove_invalidation_watch["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInvalidates.-remove-invalidation-watch",this$);
}
}
})().call(null,this$,key);
}
});

freactive.core.add_invalidation_watch = (function add_invalidation_watch(this$,key,f){
return freactive.core._add_invalidation_watch.call(null,this$,key,f);
});
freactive.core.remove_invalidation_watch = (function remove_invalidation_watch(this$,key){
return freactive.core._remove_invalidation_watch.call(null,this$,key);
});

/**
* @constructor
*/
freactive.core.ReactiveAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
})
freactive.core.ReactiveAtom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

freactive.core.ReactiveAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<ReactiveAtom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

freactive.core.ReactiveAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

freactive.core.ReactiveAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

freactive.core.ReactiveAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

freactive.core.ReactiveAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = a__$1.state;
if(cljs.core.not_EQ_.call(null,old_value,new_value)){
var validate_13627 = a__$1.validator;
if((validate_13627 == null)){
} else {
if(cljs.core.truth_(validate_13627.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

a__$1.state = new_value;

if(cljs.core.empty_QMARK_.call(null,a__$1.watches)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
} else {
}

return new_value;
});

freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state));
});

freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state,x));
});

freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state,x,y));
});

freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1.state,x,y,more));
});

freactive.core.ReactiveAtom.prototype.freactive$core$IReactive$ = true;

freactive.core.ReactiveAtom.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

freactive.core.ReactiveAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4126__auto___13628 = freactive.core._STAR_invalidate_rx_STAR_;
if(cljs.core.truth_(temp__4126__auto___13628)){
var invalidate_13629 = temp__4126__auto___13628;
cljs.core._add_watch.call(null,this$__$1,invalidate_13629,invalidate_13629);

if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_)){
freactive.core._STAR_trace_capture_STAR_.call(null,this$__$1);
} else {
}
} else {
}

return self__.state;
});

freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13621 = cljs.core.seq.call(null,self__.watches);
var chunk__13622 = null;
var count__13623 = (0);
var i__13624 = (0);
while(true){
if((i__13624 < count__13623)){
var vec__13625 = cljs.core._nth.call(null,chunk__13622,i__13624);
var key = cljs.core.nth.call(null,vec__13625,(0),null);
var f = cljs.core.nth.call(null,vec__13625,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__13630 = seq__13621;
var G__13631 = chunk__13622;
var G__13632 = count__13623;
var G__13633 = (i__13624 + (1));
seq__13621 = G__13630;
chunk__13622 = G__13631;
count__13623 = G__13632;
i__13624 = G__13633;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13621);
if(temp__4126__auto__){
var seq__13621__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13621__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13621__$1);
var G__13634 = cljs.core.chunk_rest.call(null,seq__13621__$1);
var G__13635 = c__4409__auto__;
var G__13636 = cljs.core.count.call(null,c__4409__auto__);
var G__13637 = (0);
seq__13621 = G__13634;
chunk__13622 = G__13635;
count__13623 = G__13636;
i__13624 = G__13637;
continue;
} else {
var vec__13626 = cljs.core.first.call(null,seq__13621__$1);
var key = cljs.core.nth.call(null,vec__13626,(0),null);
var f = cljs.core.nth.call(null,vec__13626,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__13638 = cljs.core.next.call(null,seq__13621__$1);
var G__13639 = null;
var G__13640 = (0);
var G__13641 = (0);
seq__13621 = G__13638;
chunk__13622 = G__13639;
count__13623 = G__13640;
i__13624 = G__13641;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);

return this$__$1;
});

freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

freactive.core.ReactiveAtom.cljs$lang$type = true;

freactive.core.ReactiveAtom.cljs$lang$ctorStr = "freactive.core/ReactiveAtom";

freactive.core.ReactiveAtom.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"freactive.core/ReactiveAtom");
});

freactive.core.__GT_ReactiveAtom = (function __GT_ReactiveAtom(state,meta,validator,watches){
return (new freactive.core.ReactiveAtom(state,meta,validator,watches));
});

/**
* Creates and returns a ReactiveAtom with an initial value of x and zero or
* more options (in any order):
* :meta metadata-map
* :validator validate-fn
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error. If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
freactive.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new freactive.core.ReactiveAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13645__delegate = function (x,p__13642){
var map__13644 = p__13642;
var map__13644__$1 = ((cljs.core.seq_QMARK_.call(null,map__13644))?cljs.core.apply.call(null,cljs.core.hash_map,map__13644):map__13644);
var validator = cljs.core.get.call(null,map__13644__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__13644__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new freactive.core.ReactiveAtom(x,meta,validator,null));
};
var G__13645 = function (x,var_args){
var p__13642 = null;
if (arguments.length > 1) {
  p__13642 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13645__delegate.call(this,x,p__13642);};
G__13645.cljs$lang$maxFixedArity = 1;
G__13645.cljs$lang$applyTo = (function (arglist__13646){
var x = cljs.core.first(arglist__13646);
var p__13642 = cljs.core.rest(arglist__13646);
return G__13645__delegate(x,p__13642);
});
G__13645.cljs$core$IFn$_invoke$arity$variadic = G__13645__delegate;
return G__13645;
})()
;
atom = function(x,var_args){
var p__13642 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

freactive.core.IReactiveExpression = (function (){var obj13648 = {};
return obj13648;
})();

freactive.core._invalidate = (function _invalidate(this$){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IReactiveExpression$_invalidate$arity$1;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IReactiveExpression$_invalidate$arity$1(this$);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._invalidate[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._invalidate["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-invalidate",this$);
}
}
})().call(null,this$);
}
});

freactive.core._compute = (function _compute(this$){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.freactive$core$IReactiveExpression$_compute$arity$1;
} else {
return and__3610__auto__;
}
})()){
return this$.freactive$core$IReactiveExpression$_compute$arity$1(this$);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (freactive.core._compute[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (freactive.core._compute["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-compute",this$);
}
}
})().call(null,this$);
}
});

freactive.core.make_sully_fn = (function make_sully_fn(reactive){
return (function() {
var sully = null;
var sully__0 = (function (){
if(cljs.core.truth_(reactive.dirty)){
return null;
} else {
reactive.dirty = true;

if(!(cljs.core.empty_QMARK_.call(null,reactive.watches))){
if(cljs.core.truth_(freactive.core._compute.call(null,reactive))){
return freactive.core._notify_invalidation_watches.call(null,reactive);
} else {
return null;
}
} else {
return freactive.core._notify_invalidation_watches.call(null,reactive);
}
}
});
var sully__2 = (function (key,ref){
freactive.core._remove_invalidation_watch.call(null,ref,key);

return sully.call(null);
});
var sully__4 = (function (key,ref,_,___$1){
cljs.core._remove_watch.call(null,ref,key);

return sully.call(null);
});
sully = function(key,ref,_,___$1){
switch(arguments.length){
case 0:
return sully__0.call(this);
case 2:
return sully__2.call(this,key,ref);
case 4:
return sully__4.call(this,key,ref,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sully.cljs$core$IFn$_invoke$arity$0 = sully__0;
sully.cljs$core$IFn$_invoke$arity$2 = sully__2;
sully.cljs$core$IFn$_invoke$arity$4 = sully__4;
return sully;
})()
});
freactive.core.get_add_watch_STAR_ = (function get_add_watch_STAR_(ref){
if((function (){var G__13651 = ref;
if(G__13651){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13651.freactive$core$IInvalidates$;
}
})())){
return true;
} else {
if((!G__13651.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13651);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13651);
}
})()){
return freactive.core.add_invalidation_watch;
} else {
if((function (){var G__13652 = ref;
if(G__13652){
var bit__4303__auto__ = (G__13652.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4303__auto__) || (G__13652.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13652.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13652);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13652);
}
})()){
return cljs.core.add_watch;
} else {
return null;
}
}
});
freactive.core.get_remove_watch_STAR_ = (function get_remove_watch_STAR_(ref){
if((function (){var G__13655 = ref;
if(G__13655){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13655.freactive$core$IInvalidates$;
}
})())){
return true;
} else {
if((!G__13655.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13655);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13655);
}
})()){
return freactive.core.remove_invalidation_watch;
} else {
if((function (){var G__13656 = ref;
if(G__13656){
var bit__4303__auto__ = (G__13656.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4303__auto__) || (G__13656.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13656.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13656);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13656);
}
})()){
return cljs.core.remove_watch;
} else {
return null;
}
}
});
freactive.core.get_add_remove_watch_STAR_ = (function get_add_remove_watch_STAR_(ref){
if((function (){var G__13659 = ref;
if(G__13659){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13659.freactive$core$IInvalidates$;
}
})())){
return true;
} else {
if((!G__13659.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13659);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13659);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [freactive.core.add_invalidation_watch,freactive.core.remove_invalidation_watch], null);
} else {
if((function (){var G__13660 = ref;
if(G__13660){
var bit__4303__auto__ = (G__13660.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4303__auto__) || (G__13660.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13660.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13660);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13660);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.add_watch,cljs.core.remove_watch], null);
} else {
return null;
}
}
});
freactive.core.lazy_QMARK_ = (function lazy_QMARK_(default_laziness){
if(!((freactive.core._STAR_lazy_STAR_ == null))){
return freactive.core._STAR_lazy_STAR_;
} else {
return default_laziness;
}
});
freactive.core.register_rx_dep = (function register_rx_dep(rx,default_laziness){
var temp__4126__auto__ = freactive.core._STAR_invalidate_rx_STAR_;
if(cljs.core.truth_(temp__4126__auto__)){
var invalidate = temp__4126__auto__;
if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_)){
freactive.core._STAR_trace_capture_STAR_.call(null,rx);
} else {
}

if(cljs.core.truth_(freactive.core.lazy_QMARK_.call(null,default_laziness))){
return freactive.core._add_invalidation_watch.call(null,rx,invalidate,invalidate);
} else {
return cljs.core._add_watch.call(null,rx,invalidate,invalidate);
}
} else {
return null;
}
});

/**
* @constructor
*/
freactive.core.ReactiveExpression = (function (state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures){
this.state = state;
this.dirty = dirty;
this.f = f;
this.deps = deps;
this.meta = meta;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.sully = sully;
this.lazy = lazy;
this.trace_captures = trace_captures;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.core.ReactiveExpression.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

freactive.core.ReactiveExpression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<ReactiveComputation: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

freactive.core.ReactiveExpression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

freactive.core.ReactiveExpression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$ = true;

freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.dirty)){
freactive.core._compute.call(null,this$__$1);
} else {
}

return self__.state;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13661 = cljs.core.seq.call(null,self__.watches);
var chunk__13662 = null;
var count__13663 = (0);
var i__13664 = (0);
while(true){
if((i__13664 < count__13663)){
var vec__13665 = cljs.core._nth.call(null,chunk__13662,i__13664);
var key = cljs.core.nth.call(null,vec__13665,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__13665,(1),null);
f__$1.call(null,key,this$__$1,oldval,newval);

var G__13675 = seq__13661;
var G__13676 = chunk__13662;
var G__13677 = count__13663;
var G__13678 = (i__13664 + (1));
seq__13661 = G__13675;
chunk__13662 = G__13676;
count__13663 = G__13677;
i__13664 = G__13678;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13661);
if(temp__4126__auto__){
var seq__13661__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13661__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13661__$1);
var G__13679 = cljs.core.chunk_rest.call(null,seq__13661__$1);
var G__13680 = c__4409__auto__;
var G__13681 = cljs.core.count.call(null,c__4409__auto__);
var G__13682 = (0);
seq__13661 = G__13679;
chunk__13662 = G__13680;
count__13663 = G__13681;
i__13664 = G__13682;
continue;
} else {
var vec__13666 = cljs.core.first.call(null,seq__13661__$1);
var key = cljs.core.nth.call(null,vec__13666,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__13666,(1),null);
f__$1.call(null,key,this$__$1,oldval,newval);

var G__13683 = cljs.core.next.call(null,seq__13661__$1);
var G__13684 = null;
var G__13685 = (0);
var G__13686 = (0);
seq__13661 = G__13683;
chunk__13662 = G__13684;
count__13663 = G__13685;
i__13664 = G__13686;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f__$1);

return this$__$1;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$ = true;

freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__13667 = cljs.core.seq.call(null,self__.invalidation_watches);
var chunk__13668 = null;
var count__13669 = (0);
var i__13670 = (0);
while(true){
if((i__13670 < count__13669)){
var vec__13671 = cljs.core._nth.call(null,chunk__13668,i__13670);
var key = cljs.core.nth.call(null,vec__13671,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__13671,(1),null);
f__$1.call(null,key,this$__$1);

var G__13687 = seq__13667;
var G__13688 = chunk__13668;
var G__13689 = count__13669;
var G__13690 = (i__13670 + (1));
seq__13667 = G__13687;
chunk__13668 = G__13688;
count__13669 = G__13689;
i__13670 = G__13690;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13667);
if(temp__4126__auto__){
var seq__13667__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13667__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13667__$1);
var G__13691 = cljs.core.chunk_rest.call(null,seq__13667__$1);
var G__13692 = c__4409__auto__;
var G__13693 = cljs.core.count.call(null,c__4409__auto__);
var G__13694 = (0);
seq__13667 = G__13691;
chunk__13668 = G__13692;
count__13669 = G__13693;
i__13670 = G__13694;
continue;
} else {
var vec__13672 = cljs.core.first.call(null,seq__13667__$1);
var key = cljs.core.nth.call(null,vec__13672,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__13672,(1),null);
f__$1.call(null,key,this$__$1);

var G__13695 = cljs.core.next.call(null,seq__13667__$1);
var G__13696 = null;
var G__13697 = (0);
var G__13698 = (0);
seq__13667 = G__13695;
chunk__13668 = G__13696;
count__13669 = G__13697;
i__13670 = G__13698;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_add_invalidation_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
this$__$1.invalidation_watches = cljs.core.assoc.call(null,self__.invalidation_watches,key,f__$1);

return this$__$1;
});

freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.invalidation_watches = cljs.core.dissoc.call(null,self__.invalidation_watches,key);
});

freactive.core.ReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
freactive.core.register_rx_dep.call(null,this$__$1,self__.lazy);

if(cljs.core.truth_(self__.dirty)){
freactive.core._compute.call(null,this$__$1);
} else {
}

return self__.state;
});

freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$ = true;

freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$_invalidate$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sully.call(null);
});

freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.dirty = false;

var old_val = self__.state;
var new_val = (function (){var _STAR_invalidate_rx_STAR_13673 = freactive.core._STAR_invalidate_rx_STAR_;
var _STAR_trace_capture_STAR_13674 = freactive.core._STAR_trace_capture_STAR_;
try{freactive.core._STAR_invalidate_rx_STAR_ = self__.sully;

freactive.core._STAR_trace_capture_STAR_ = (cljs.core.truth_(self__.trace_captures)?(function (){
self__.trace_captures.call(null);

return self__.trace_captures;
})()
:null);

return self__.f.call(null);
}finally {freactive.core._STAR_trace_capture_STAR_ = _STAR_trace_capture_STAR_13674;

freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_13673;
}})();
if(cljs.core.not_EQ_.call(null,old_val,new_val)){
self__.state = new_val;

cljs.core._notify_watches.call(null,this$__$1,old_val,new_val);

return new_val;
} else {
return null;
}
});

freactive.core.ReactiveExpression.cljs$lang$type = true;

freactive.core.ReactiveExpression.cljs$lang$ctorStr = "freactive.core/ReactiveExpression";

freactive.core.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"freactive.core/ReactiveExpression");
});

freactive.core.__GT_ReactiveExpression = (function __GT_ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures){
return (new freactive.core.ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures));
});

freactive.core.rx_STAR_ = (function() {
var rx_STAR_ = null;
var rx_STAR___1 = (function (f){
return rx_STAR_.call(null,f,true);
});
var rx_STAR___2 = (function (f,lazy){
var reactive = (new freactive.core.ReactiveExpression(null,true,f,null,null,null,null,null,lazy,(function (){var or__3622__auto__ = freactive.core._STAR_do_trace_captures_STAR_;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return ((function (or__3622__auto__){
return (function (_){
return null;
});
;})(or__3622__auto__))
}
})()));
reactive.sully = freactive.core.make_sully_fn.call(null,reactive);

return reactive;
});
rx_STAR_ = function(f,lazy){
switch(arguments.length){
case 1:
return rx_STAR___1.call(this,f);
case 2:
return rx_STAR___2.call(this,f,lazy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rx_STAR_.cljs$core$IFn$_invoke$arity$1 = rx_STAR___1;
rx_STAR_.cljs$core$IFn$_invoke$arity$2 = rx_STAR___2;
return rx_STAR_;
})()
;
freactive.core.cursor_swap_BANG_ = (function cursor_swap_BANG_(cursor,ref,getter,setter,f){
cljs.core.swap_BANG_.call(null,ref,(function (cur){
return setter.call(null,cur,f.call(null,getter.call(null,cur)));
}));

return freactive.core._raw_deref.call(null,cursor);
});

/**
* @constructor
*/
freactive.core.ReactiveCursor = (function (ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn){
this.ref = ref;
this.getter = getter;
this.setter = setter;
this.dirty = dirty;
this.state = state;
this.meta = meta;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.lazy = lazy;
this.sully = sully;
this.add_watch_fn = add_watch_fn;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
})
freactive.core.ReactiveCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

freactive.core.ReactiveCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<ReactiveCursor: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

freactive.core.ReactiveCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

freactive.core.ReactiveCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

freactive.core.ReactiveCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

freactive.core.ReactiveCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.ref,((function (this$__$1){
return (function (cur){
return self__.setter.call(null,cur,new_value);
});})(this$__$1))
);

return freactive.core._raw_deref.call(null,this$__$1);
});

freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return freactive.core.cursor_swap_BANG_.call(null,this$__$1,self__.ref,self__.getter,self__.setter,f);
});

freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
return freactive.core.cursor_swap_BANG_.call(null,this$__$1,self__.ref,self__.getter,self__.setter,((function (this$__$1){
return (function (p1__13699_SHARP_){
return f.call(null,p1__13699_SHARP_,x);
});})(this$__$1))
);
});

freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
return freactive.core.cursor_swap_BANG_.call(null,this$__$1,self__.ref,self__.getter,self__.setter,((function (this$__$1){
return (function (p1__13700_SHARP_){
return f.call(null,p1__13700_SHARP_,x,y);
});})(this$__$1))
);
});

freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,more){
var self__ = this;
var this$__$1 = this;
return freactive.core.cursor_swap_BANG_.call(null,this$__$1,self__.ref,self__.getter,self__.setter,((function (this$__$1){
return (function (p1__13701_SHARP_){
return cljs.core.apply.call(null,f,p1__13701_SHARP_,x,y,more);
});})(this$__$1))
);
});

freactive.core.ReactiveCursor.prototype.freactive$core$IReactive$ = true;

freactive.core.ReactiveCursor.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.dirty)){
freactive.core._compute.call(null,this$__$1);
} else {
}

return self__.state;
});

freactive.core.ReactiveCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
freactive.core.register_rx_dep.call(null,this$__$1,self__.lazy);

if(cljs.core.truth_(self__.dirty)){
freactive.core._compute.call(null,this$__$1);
} else {
}

return self__.state;
});

freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13702 = cljs.core.seq.call(null,self__.watches);
var chunk__13703 = null;
var count__13704 = (0);
var i__13705 = (0);
while(true){
if((i__13705 < count__13704)){
var vec__13706 = cljs.core._nth.call(null,chunk__13703,i__13705);
var key = cljs.core.nth.call(null,vec__13706,(0),null);
var f = cljs.core.nth.call(null,vec__13706,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__13714 = seq__13702;
var G__13715 = chunk__13703;
var G__13716 = count__13704;
var G__13717 = (i__13705 + (1));
seq__13702 = G__13714;
chunk__13703 = G__13715;
count__13704 = G__13716;
i__13705 = G__13717;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13702);
if(temp__4126__auto__){
var seq__13702__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13702__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13702__$1);
var G__13718 = cljs.core.chunk_rest.call(null,seq__13702__$1);
var G__13719 = c__4409__auto__;
var G__13720 = cljs.core.count.call(null,c__4409__auto__);
var G__13721 = (0);
seq__13702 = G__13718;
chunk__13703 = G__13719;
count__13704 = G__13720;
i__13705 = G__13721;
continue;
} else {
var vec__13707 = cljs.core.first.call(null,seq__13702__$1);
var key = cljs.core.nth.call(null,vec__13707,(0),null);
var f = cljs.core.nth.call(null,vec__13707,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__13722 = cljs.core.next.call(null,seq__13702__$1);
var G__13723 = null;
var G__13724 = (0);
var G__13725 = (0);
seq__13702 = G__13722;
chunk__13703 = G__13723;
count__13704 = G__13724;
i__13705 = G__13725;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);

return this$__$1;
});

freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);

return this$__$1;
});

freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$ = true;

freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__13708 = cljs.core.seq.call(null,self__.invalidation_watches);
var chunk__13709 = null;
var count__13710 = (0);
var i__13711 = (0);
while(true){
if((i__13711 < count__13710)){
var vec__13712 = cljs.core._nth.call(null,chunk__13709,i__13711);
var key = cljs.core.nth.call(null,vec__13712,(0),null);
var f = cljs.core.nth.call(null,vec__13712,(1),null);
f.call(null,key,this$__$1);

var G__13726 = seq__13708;
var G__13727 = chunk__13709;
var G__13728 = count__13710;
var G__13729 = (i__13711 + (1));
seq__13708 = G__13726;
chunk__13709 = G__13727;
count__13710 = G__13728;
i__13711 = G__13729;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13708);
if(temp__4126__auto__){
var seq__13708__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13708__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13708__$1);
var G__13730 = cljs.core.chunk_rest.call(null,seq__13708__$1);
var G__13731 = c__4409__auto__;
var G__13732 = cljs.core.count.call(null,c__4409__auto__);
var G__13733 = (0);
seq__13708 = G__13730;
chunk__13709 = G__13731;
count__13710 = G__13732;
i__13711 = G__13733;
continue;
} else {
var vec__13713 = cljs.core.first.call(null,seq__13708__$1);
var key = cljs.core.nth.call(null,vec__13713,(0),null);
var f = cljs.core.nth.call(null,vec__13713,(1),null);
f.call(null,key,this$__$1);

var G__13734 = cljs.core.next.call(null,seq__13708__$1);
var G__13735 = null;
var G__13736 = (0);
var G__13737 = (0);
seq__13708 = G__13734;
chunk__13709 = G__13735;
count__13710 = G__13736;
i__13711 = G__13737;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_add_invalidation_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.invalidation_watches = cljs.core.assoc.call(null,self__.invalidation_watches,key,f);

return this$__$1;
});

freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.invalidation_watches = cljs.core.dissoc.call(null,self__.invalidation_watches,key);
});

freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$ = true;

freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$_invalidate$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sully.call(null);
});

freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$_compute$arity$1 = (function (cursor){
var self__ = this;
var cursor__$1 = this;
cursor__$1.dirty = false;

self__.add_watch_fn.call(null);

var new_value = cursor__$1.getter.call(null,cljs.core.deref.call(null,self__.ref));
var old_value = cursor__$1.state;
if(cljs.core.not_EQ_.call(null,old_value,new_value)){
cursor__$1.state = new_value;

if(cljs.core.empty_QMARK_.call(null,cursor__$1.watches)){
} else {
cljs.core._notify_watches.call(null,cursor__$1,old_value,new_value);
}

if(cljs.core.empty_QMARK_.call(null,cursor__$1.invalidation_watches)){
} else {
freactive.core._notify_invalidation_watches.call(null,cursor__$1);
}

return new_value;
} else {
return null;
}
});

freactive.core.ReactiveCursor.cljs$lang$type = true;

freactive.core.ReactiveCursor.cljs$lang$ctorStr = "freactive.core/ReactiveCursor";

freactive.core.ReactiveCursor.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"freactive.core/ReactiveCursor");
});

freactive.core.__GT_ReactiveCursor = (function __GT_ReactiveCursor(ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn){
return (new freactive.core.ReactiveCursor(ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn));
});

freactive.core.cursor_STAR_ = (function cursor_STAR_(ref,korks_or_getter,setter,lazy){
var ks = (((korks_or_getter instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks_or_getter], null):((cljs.core.sequential_QMARK_.call(null,korks_or_getter))?korks_or_getter:null));
var getter = (cljs.core.truth_(ks)?((function (ks){
return (function (cur){
return cljs.core.get_in.call(null,cur,ks);
});})(ks))
:korks_or_getter);
var setter__$1 = (function (){var or__3622__auto__ = setter;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.truth_(ks)?((function (or__3622__auto__,ks,getter){
return (function (cur,new_sub){
return cljs.core.assoc_in.call(null,cur,ks,new_sub);
});})(or__3622__auto__,ks,getter))
:null);
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
return ((function (or__3622__auto____$1,or__3622__auto__,ks,getter){
return (function (_,___$1){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Cursor does not support updates"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));

});
;})(or__3622__auto____$1,or__3622__auto__,ks,getter))
}
}
})();
var cursor = (new freactive.core.ReactiveCursor(ref,getter,setter__$1,true,null,null,null,null,lazy,null,null));
var sully = freactive.core.make_sully_fn.call(null,cursor);
var add_watch_fn = (function (){var temp__4124__auto__ = freactive.core.get_add_watch_STAR_.call(null,ref);
if(cljs.core.truth_(temp__4124__auto__)){
var add_watch_STAR_ = temp__4124__auto__;
return ((function (add_watch_STAR_,temp__4124__auto__,ks,getter,setter__$1,cursor,sully){
return (function (){
return add_watch_STAR_.call(null,ref,cursor,sully);
});
;})(add_watch_STAR_,temp__4124__auto__,ks,getter,setter__$1,cursor,sully))
} else {
return ((function (temp__4124__auto__,ks,getter,setter__$1,cursor,sully){
return (function (){
return null;
});
;})(temp__4124__auto__,ks,getter,setter__$1,cursor,sully))
}
})();
cursor.sully = sully;

cursor.add_watch_fn = add_watch_fn;

add_watch_fn.call(null);

return cursor;
});
freactive.core.cursor = (function() {
var cursor = null;
var cursor__2 = (function (ref,korks_or_getter){
return freactive.core.cursor_STAR_.call(null,ref,korks_or_getter,null,false);
});
var cursor__3 = (function (ref,getter,setter){
return freactive.core.cursor_STAR_.call(null,ref,getter,setter,false);
});
cursor = function(ref,getter,setter){
switch(arguments.length){
case 2:
return cursor__2.call(this,ref,getter);
case 3:
return cursor__3.call(this,ref,getter,setter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$3 = cursor__3;
return cursor;
})()
;
freactive.core.lazy_cursor = (function() {
var lazy_cursor = null;
var lazy_cursor__2 = (function (ref,korks_or_getter){
return freactive.core.cursor_STAR_.call(null,ref,korks_or_getter,null,true);
});
var lazy_cursor__3 = (function (ref,getter,setter){
return freactive.core.cursor_STAR_.call(null,ref,getter,setter,true);
});
lazy_cursor = function(ref,getter,setter){
switch(arguments.length){
case 2:
return lazy_cursor__2.call(this,ref,getter);
case 3:
return lazy_cursor__3.call(this,ref,getter,setter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_cursor.cljs$core$IFn$_invoke$arity$2 = lazy_cursor__2;
lazy_cursor.cljs$core$IFn$_invoke$arity$3 = lazy_cursor__3;
return lazy_cursor;
})()
;
freactive.core.debug_rx_STAR_ = (function debug_rx_STAR_(the_rx,capture_callback,invalidation_callback){
freactive.core.add_invalidation_watch.call(null,the_rx,capture_callback,invalidation_callback);

return freactive.core.add_invalidation_watch.call(null,the_rx,capture_callback,invalidation_callback);
});

//# sourceMappingURL=core.js.map