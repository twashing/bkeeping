// Compiled by ClojureScript 0.0-2505
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
* Handles optional docstrings & attr maps for a macro def's name.
* Stolen from `clojure.tools.macro`.
*/
taoensso.encore.name_with_attrs = (function name_with_attrs(name,macro_args){
var vec__33345 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__33345,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__33345,(1),null);
var vec__33346 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__33346,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__33346,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof Error);
});
/**
* Returns data map iff `x` is an error of any type on platform.
*/
taoensso.encore.error_data = (function error_data(x){
var temp__4126__auto__ = (function (){var or__3622__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var data_map = temp__4126__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.nblank_str_QMARK_ = (function nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.nnil_EQ_ = (function() {
var nnil_EQ_ = null;
var nnil_EQ___2 = (function (x,y){
return (taoensso.encore.nnil_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});
var nnil_EQ___3 = (function() { 
var G__33349__delegate = function (x,y,more){
var and__3610__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(and__3610__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__3610__auto__;
}
};
var G__33349 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__33349__delegate.call(this,x,y,more);};
G__33349.cljs$lang$maxFixedArity = 2;
G__33349.cljs$lang$applyTo = (function (arglist__33350){
var x = cljs.core.first(arglist__33350);
arglist__33350 = cljs.core.next(arglist__33350);
var y = cljs.core.first(arglist__33350);
var more = cljs.core.rest(arglist__33350);
return G__33349__delegate(x,y,more);
});
G__33349.cljs$core$IFn$_invoke$arity$variadic = G__33349__delegate;
return G__33349;
})()
;
nnil_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return nnil_EQ___2.call(this,x,y);
default:
return nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nnil_EQ_.cljs$lang$maxFixedArity = 2;
nnil_EQ_.cljs$lang$applyTo = nnil_EQ___3.cljs$lang$applyTo;
nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = nnil_EQ___2;
nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return nnil_EQ_;
})()
;
taoensso.encore.vec_STAR_ = (function vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.nnil_set = (function nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function conj_some(coll,_QMARK_x){
if(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x)){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});
taoensso.encore.ks_EQ_ = (function ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__33351_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__33351_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function assertion_error(msg){
return (new Error(msg));
});
/**
* Implementation detail.
* @param {...*} var_args
*/
taoensso.encore.hthrow = (function() { 
var hthrow__delegate = function (ex_QMARK_,ns_str,_QMARK_line,form,val,p__33352){
var vec__33354 = p__33352;
var _QMARK_err = cljs.core.nth.call(null,vec__33354,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__3622__auto__ = _QMARK_line;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "?";
}
})();
var form_str = cljs.core.pr_str.call(null,form);
var val_str = cljs.core.pr_str.call(null,val);
var _QMARK_err_str = (function (){var temp__4126__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4126__auto__)){
var e = temp__4126__auto__;
return cljs.core.pr_str.call(null,_QMARK_err);
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,ex_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
};
var hthrow = function (ex_QMARK_,ns_str,_QMARK_line,form,val,var_args){
var p__33352 = null;
if (arguments.length > 5) {
  p__33352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return hthrow__delegate.call(this,ex_QMARK_,ns_str,_QMARK_line,form,val,p__33352);};
hthrow.cljs$lang$maxFixedArity = 5;
hthrow.cljs$lang$applyTo = (function (arglist__33355){
var ex_QMARK_ = cljs.core.first(arglist__33355);
arglist__33355 = cljs.core.next(arglist__33355);
var ns_str = cljs.core.first(arglist__33355);
arglist__33355 = cljs.core.next(arglist__33355);
var _QMARK_line = cljs.core.first(arglist__33355);
arglist__33355 = cljs.core.next(arglist__33355);
var form = cljs.core.first(arglist__33355);
arglist__33355 = cljs.core.next(arglist__33355);
var val = cljs.core.first(arglist__33355);
var p__33352 = cljs.core.rest(arglist__33355);
return hthrow__delegate(ex_QMARK_,ns_str,_QMARK_line,form,val,p__33352);
});
hthrow.cljs$core$IFn$_invoke$arity$variadic = hthrow__delegate;
return hthrow;
})()
;
taoensso.encore.non_throwing = (function non_throwing(pred){
return (function (x){
var vec__33358 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e33359){if((e33359 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33359;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33359;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__33358,(0),null);
var _ = cljs.core.nth.call(null,vec__33358,(1),null);
return _QMARK_r;
});
});
/**
* Implementation detail.
*/
taoensso.encore.hpred = (function hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__33365 = pred_form;
var type = cljs.core.nth.call(null,vec__33365,(0),null);
var p1 = cljs.core.nth.call(null,vec__33365,(1),null);
var p2 = cljs.core.nth.call(null,vec__33365,(2),null);
var more = cljs.core.nthnext.call(null,vec__33365,(3));
var p1__$1 = (cljs.core.truth_(p1)?hpred.call(null,p1):null);
var p2__$1 = (cljs.core.truth_(p2)?hpred.call(null,p2):null);
var G__33366 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33366) {
case "and":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var and__3610__auto__ = ((cljs.core.not.call(null,p1__$1))?true:p1__$1.call(null,x));
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = ((cljs.core.not.call(null,p2__$1))?true:p2__$1.call(null,x));
if(cljs.core.truth_(and__3610__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__3610__auto____$1,and__3610__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__33362_SHARP_){
return p1__33362_SHARP_.call(null,x);
});})(and__3610__auto____$1,and__3610__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))
,more);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "or":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var or__3622__auto__ = (cljs.core.truth_(p1__$1)?taoensso.encore.non_throwing.call(null,p1__$1).call(null,x):null);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.truth_(p2__$1)?taoensso.encore.non_throwing.call(null,p2__$1).call(null,x):null);
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__3622__auto____$1,or__3622__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__33361_SHARP_){
return taoensso.encore.non_throwing.call(null,p1__33361_SHARP_).call(null,x);
});})(or__3622__auto____$1,or__3622__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))
,more);
}
}
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "not":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var and__3610__auto__ = ((cljs.core.not.call(null,p1__$1))?true:cljs.core.not.call(null,p1__$1.call(null,x)));
if(and__3610__auto__){
var and__3610__auto____$1 = ((cljs.core.not.call(null,p2__$1))?true:cljs.core.not.call(null,p2__$1.call(null,x)));
if(and__3610__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__3610__auto____$1,and__3610__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__33360_SHARP_){
return cljs.core.not.call(null,p1__33360_SHARP_.call(null,x));
});})(and__3610__auto____$1,and__3610__auto__,G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))
,more);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "not-in":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1__$1),x));
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "in":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1__$1),x);
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks-nnil?":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1__$1,x);
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks>=":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1__$1,x);
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks<=":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1__$1,x);
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks=":
return ((function (G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1__$1,x);
});
;})(G__33366,vec__33365,type,p1,p2,more,p1__$1,p2__$1))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
* Like `name` but includes namespace in string when present.
*/
taoensso.encore.fq_name = (function fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4124__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4124__auto__)){
var ns = temp__4124__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
/**
* @param {...*} var_args
*/
taoensso.encore.merge_keywords = (function() { 
var merge_keywords__delegate = function (ks,p__33368){
var vec__33370 = p__33368;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__33370,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
};
var merge_keywords = function (ks,var_args){
var p__33368 = null;
if (arguments.length > 1) {
  p__33368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_keywords__delegate.call(this,ks,p__33368);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__33371){
var ks = cljs.core.first(arglist__33371);
var p__33368 = cljs.core.rest(arglist__33371);
return merge_keywords__delegate(ks,p__33368);
});
merge_keywords.cljs$core$IFn$_invoke$arity$variadic = merge_keywords__delegate;
return merge_keywords;
})()
;
taoensso.encore.clamp = (function clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function pow(n,exp){
return Math.pow.call(null,n,exp);
});
taoensso.encore.abs = (function abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.round = (function() { 
var round__delegate = function (n,p__33372){
var vec__33375 = p__33372;
var type = cljs.core.nth.call(null,vec__33375,(0),null);
var nplaces = cljs.core.nth.call(null,vec__33375,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__33376 = ((((function (){var or__3622__auto__ = type;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__3622__auto__ = type;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__33376) {
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
case "ceil":
return Math.ceil.call(null,n_STAR_);

break;
case "floor":
return Math.floor.call(null,n_STAR_);

break;
case "round":
return Math.round.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return rounded;
} else {
return (rounded / modifier);
}
};
var round = function (n,var_args){
var p__33372 = null;
if (arguments.length > 1) {
  p__33372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return round__delegate.call(this,n,p__33372);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__33378){
var n = cljs.core.first(arglist__33378);
var p__33372 = cljs.core.rest(arglist__33378);
return round__delegate(n,p__33372);
});
round.cljs$core$IFn$_invoke$arity$variadic = round__delegate;
return round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
* Optimized common case.
*/
taoensso.encore.round1 = (function round1(n){
return (Math.round.call(null,(n * 10.0)) / 10.0);
});
/**
* Optimized common case.
*/
taoensso.encore.round2 = (function round2(n){
return (Math.round.call(null,(n * 100.0)) / 100.0);
});
/**
* Returns binary exponential backoff value.
* @param {...*} var_args
*/
taoensso.encore.exp_backoff = (function() { 
var exp_backoff__delegate = function (nattempt,p__33379){
var vec__33382 = p__33379;
var map__33383 = cljs.core.nth.call(null,vec__33382,(0),null);
var map__33383__$1 = ((cljs.core.seq_QMARK_.call(null,map__33383))?cljs.core.apply.call(null,cljs.core.hash_map,map__33383):map__33383);
var factor = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"max","max",61366548));
var binary_exp = Math.pow.call(null,(2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__3939__auto__ = min_SINGLEQUOTE_;
var y__3940__auto__ = time;
return ((x__3939__auto__ > y__3940__auto__) ? x__3939__auto__ : y__3940__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__3946__auto__ = max_SINGLEQUOTE_;
var y__3947__auto__ = time__$1;
return ((x__3946__auto__ < y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})():time__$1);
return time__$2;
})());
};
var exp_backoff = function (nattempt,var_args){
var p__33379 = null;
if (arguments.length > 1) {
  p__33379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return exp_backoff__delegate.call(this,nattempt,p__33379);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__33384){
var nattempt = cljs.core.first(arglist__33384);
var p__33379 = cljs.core.rest(arglist__33384);
return exp_backoff__delegate(nattempt,p__33379);
});
exp_backoff.cljs$core$IFn$_invoke$arity$variadic = exp_backoff__delegate;
return exp_backoff;
})()
;
taoensso.encore.now_dt = (function now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function now_udt(){
return (new Date()).getTime();
});
/**
* Useful for testing.
* @param {...*} var_args
*/
taoensso.encore.now_udt_mock_fn = (function() { 
var now_udt_mock_fn__delegate = function (p__33385){
var vec__33387 = p__33385;
var mock_udts = cljs.core.nth.call(null,vec__33387,(0),null);
var mock_udts__$1 = (function (){var or__3622__auto__ = mock_udts;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__33387,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__33387,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__33385 = null;
if (arguments.length > 0) {
  p__33385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return now_udt_mock_fn__delegate.call(this,p__33385);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__33388){
var p__33385 = cljs.core.seq(arglist__33388);
return now_udt_mock_fn__delegate(p__33385);
});
now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = now_udt_mock_fn__delegate;
return now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
* Returns number of milliseconds in period defined by given args.
* @param {...*} var_args
*/
taoensso.encore.ms = (function() { 
var ms__delegate = function (p__33389){
var map__33396 = p__33389;
var map__33396__$1 = ((cljs.core.seq_QMARK_.call(null,map__33396))?cljs.core.apply.call(null,cljs.core.hash_map,map__33396):map__33396);
var opts = map__33396__$1;
var ms__$1 = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var msecs = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var secs = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var hours = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__33396,map__33396__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years){
return (function (hcond_in__33397){
var vec__33398 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__33397], null);
}catch (e33400){if((e33400 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33400;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33400;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33398,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33398,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33399 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__17189__auto__)], null);
}catch (e33401){if((e33401 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33401;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33401;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33399,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33399,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__33397","hcond-in__33397",861138541,null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
});})(map__33396,map__33396__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have-in","have-in",-646577999,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms__$1)?ms__$1:(0))));
};
var ms = function (var_args){
var p__33389 = null;
if (arguments.length > 0) {
  p__33389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ms__delegate.call(this,p__33389);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__33402){
var p__33389 = cljs.core.seq(arglist__33402);
return ms__delegate(p__33389);
});
ms.cljs$core$IFn$_invoke$arity$variadic = ms__delegate;
return ms;
})()
;
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.translate_signed_idx = (function translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__3946__auto__ = signed_idx;
var y__3947__auto__ = max_idx;
return ((x__3946__auto__ < y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
} else {
var x__3939__auto__ = (0);
var y__3940__auto__ = (signed_idx + max_idx);
return ((x__3939__auto__ > y__3940__auto__) ? x__3939__auto__ : y__3940__auto__);
}
});
/**
* Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
* input (str, vec, etc.) with support for:
* * Clamping of indexes beyond limits.
* * Max-length -> end-index.
* * -ive indexes (as +ive indexes but work from back of input):
* (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
* h    e    l    l    o   ; 5 count
* (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
* @param {...*} var_args
*/
taoensso.encore.sub_indexes = (function() { 
var sub_indexes__delegate = function (x,start_idx,p__33407){
var map__33413 = p__33407;
var map__33413__$1 = ((cljs.core.seq_QMARK_.call(null,map__33413))?cljs.core.apply.call(null,cljs.core.hash_map,map__33413):map__33413);
var end_idx = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var max_len = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
if(cljs.core.truth_((function (){var vec__33414 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e33416){if((e33416 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33416;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33416;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33414,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33414,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33415 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33417){if((e33417 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33417;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33417;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33415,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33415,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",662,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__17273__auto__ = (start_idx_STAR_ + max_len);
var n2__17274__auto__ = xlen;
if((n1__17273__auto__ > n2__17274__auto__)){
return n2__17274__auto__;
} else {
return n1__17273__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
};
var sub_indexes = function (x,start_idx,var_args){
var p__33407 = null;
if (arguments.length > 2) {
  p__33407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return sub_indexes__delegate.call(this,x,start_idx,p__33407);};
sub_indexes.cljs$lang$maxFixedArity = 2;
sub_indexes.cljs$lang$applyTo = (function (arglist__33418){
var x = cljs.core.first(arglist__33418);
arglist__33418 = cljs.core.next(arglist__33418);
var start_idx = cljs.core.first(arglist__33418);
var p__33407 = cljs.core.rest(arglist__33418);
return sub_indexes__delegate(x,start_idx,p__33407);
});
sub_indexes.cljs$core$IFn$_invoke$arity$variadic = sub_indexes__delegate;
return sub_indexes;
})()
;
/**
* Like `subvec` but uses `sub-indexes`.
* @param {...*} var_args
*/
taoensso.encore.subvec_STAR_ = (function() { 
var subvec_STAR___delegate = function (v,start_idx,p__33419){
var vec__33426 = p__33419;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33426,(0),null);
if(cljs.core.truth_((function (){var vec__33427 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e33429){if((e33429 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33429;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33429;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33427,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33427,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33428 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33430){if((e33430 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33430;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33430;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33428,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33428,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",698,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__33431 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33431,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33431,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
};
var subvec_STAR_ = function (v,start_idx,var_args){
var p__33419 = null;
if (arguments.length > 2) {
  p__33419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return subvec_STAR___delegate.call(this,v,start_idx,p__33419);};
subvec_STAR_.cljs$lang$maxFixedArity = 2;
subvec_STAR_.cljs$lang$applyTo = (function (arglist__33432){
var v = cljs.core.first(arglist__33432);
arglist__33432 = cljs.core.next(arglist__33432);
var start_idx = cljs.core.first(arglist__33432);
var p__33419 = cljs.core.rest(arglist__33432);
return subvec_STAR___delegate(v,start_idx,p__33419);
});
subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = subvec_STAR___delegate;
return subvec_STAR_;
})()
;

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4225__auto__,k__4226__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return cljs.core._lookup.call(null,this__4225__auto____$1,k__4226__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k33434,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__33436 = (((k33434 instanceof cljs.core.Keyword))?k33434.fqn:null);
switch (G__33436) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33434,else__4228__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4239__auto__,writer__4240__auto__,opts__4241__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
var pr_pair__4242__auto__ = ((function (this__4239__auto____$1){
return (function (keyval__4243__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,cljs.core.pr_writer,""," ","",opts__4241__auto__,keyval__4243__auto__);
});})(this__4239__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,pr_pair__4242__auto__,"#taoensso.encore.Swapped{",", ","}",opts__4241__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4223__auto__){
var self__ = this;
var this__4223__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4219__auto__){
var self__ = this;
var this__4219__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4220__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var h__4043__auto__ = self__.__hash;
if(!((h__4043__auto__ == null))){
return h__4043__auto__;
} else {
var h__4043__auto____$1 = cljs.core.hash_imap.call(null,this__4220__auto____$1);
self__.__hash = h__4043__auto____$1;

return h__4043__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4221__auto__,other__4222__auto__){
var self__ = this;
var this__4221__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3610__auto__ = other__4222__auto__;
if(cljs.core.truth_(and__3610__auto__)){
return ((this__4221__auto____$1.constructor === other__4222__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4221__auto____$1,other__4222__auto__));
} else {
return and__3610__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4234__auto__,k__4235__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__4235__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4234__auto____$1),self__.__meta),k__4235__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4235__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__33433){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__33437 = cljs.core.keyword_identical_QMARK_;
var expr__33438 = k__4233__auto__;
if(cljs.core.truth_(pred__33437.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__33438))){
return (new taoensso.encore.Swapped(G__33433,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33437.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__33438))){
return (new taoensso.encore.Swapped(self__.new_val,G__33433,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__33433),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__33433){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__33433,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4230__auto__,entry__4231__auto__){
var self__ = this;
var this__4230__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4231__auto__)){
return cljs.core._assoc.call(null,this__4230__auto____$1,cljs.core._nth.call(null,entry__4231__auto__,(0)),cljs.core._nth.call(null,entry__4231__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4230__auto____$1,entry__4231__auto__);
}
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__4259__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4259__auto__,writer__4260__auto__){
return cljs.core._write.call(null,writer__4260__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function __GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function map__GT_Swapped(G__33435){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__33435),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__33435),null,cljs.core.dissoc.call(null,G__33435,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_STAR_ = (function swapped_STAR_(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
* [<new-val> <return-val>]
*/
taoensso.encore.swapped_STAR__in = (function swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__33442 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__33442,(0),null);
var return_val = cljs.core.nth.call(null,vec__33442,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
* Reduces input with
* [<type> <ks> <reset-val-or-swap-fn>] or
* [<ks> <reset-val-or-swap-fn>] ops.
*/
taoensso.encore.replace_in_STAR_ = (function replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__33445 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__33445,(0),null);
var ks = cljs.core.nth.call(null,vec__33445,(1),null);
var valf = cljs.core.nth.call(null,vec__33445,(2),null);
var G__33446 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__33446) {
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
* Experimental. For use with `swap!`, etc.
* @param {...*} var_args
*/
taoensso.encore.replace_in = (function() { 
var replace_in__delegate = function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
};
var replace_in = function (m,var_args){
var ops = null;
if (arguments.length > 1) {
  ops = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return replace_in__delegate.call(this,m,ops);};
replace_in.cljs$lang$maxFixedArity = 1;
replace_in.cljs$lang$applyTo = (function (arglist__33448){
var m = cljs.core.first(arglist__33448);
var ops = cljs.core.rest(arglist__33448);
return replace_in__delegate(m,ops);
});
replace_in.cljs$core$IFn$_invoke$arity$variadic = replace_in__delegate;
return replace_in;
})()
;
/**
* More powerful version of `swap!`:
* * Supports optional `update-in` semantics.
* * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
* <new-val>. This is useful when writing atomic pull fns, etc.
* @param {...*} var_args
*/
taoensso.encore.swap_in_BANG_ = (function() {
var swap_in_BANG_ = null;
var swap_in_BANG___3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33455 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__33455,(0),null);
var return_val = cljs.core.nth.call(null,vec__33455,(1),null);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33456 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__33456,(0),null);
var return_val = cljs.core.nth.call(null,vec__33456,(1),null);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});
var swap_in_BANG___4 = (function() { 
var G__33461__delegate = function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var vec__33457 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e33459){if((e33459 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33459;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33459;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33457,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33457,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33458 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33460){if((e33460 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33460;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33460;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33458,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33458,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",790,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
};
var G__33461 = function (atom_,ks,f,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__33461__delegate.call(this,atom_,ks,f,more);};
G__33461.cljs$lang$maxFixedArity = 3;
G__33461.cljs$lang$applyTo = (function (arglist__33462){
var atom_ = cljs.core.first(arglist__33462);
arglist__33462 = cljs.core.next(arglist__33462);
var ks = cljs.core.first(arglist__33462);
arglist__33462 = cljs.core.next(arglist__33462);
var f = cljs.core.first(arglist__33462);
var more = cljs.core.rest(arglist__33462);
return G__33461__delegate(atom_,ks,f,more);
});
G__33461.cljs$core$IFn$_invoke$arity$variadic = G__33461__delegate;
return G__33461;
})()
;
swap_in_BANG_ = function(atom_,ks,f,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return swap_in_BANG___3.call(this,atom_,ks,f);
default:
return swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,f, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_in_BANG_.cljs$lang$maxFixedArity = 3;
swap_in_BANG_.cljs$lang$applyTo = swap_in_BANG___4.cljs$lang$applyTo;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_in_BANG___3;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return swap_in_BANG_;
})()
;
/**
* Is to `reset!` as `swap-in!` is to `swap!`.
* @param {...*} var_args
*/
taoensso.encore.reset_in_BANG_ = (function() {
var reset_in_BANG_ = null;
var reset_in_BANG___3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});
var reset_in_BANG___4 = (function() { 
var G__33471__delegate = function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var vec__33467 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e33469){if((e33469 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33469;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33469;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33467,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33467,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33468 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33470){if((e33470 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33470;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33470;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33468,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33468,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",807,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
};
var G__33471 = function (atom_,ks,new_val,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__33471__delegate.call(this,atom_,ks,new_val,more);};
G__33471.cljs$lang$maxFixedArity = 3;
G__33471.cljs$lang$applyTo = (function (arglist__33472){
var atom_ = cljs.core.first(arglist__33472);
arglist__33472 = cljs.core.next(arglist__33472);
var ks = cljs.core.first(arglist__33472);
arglist__33472 = cljs.core.next(arglist__33472);
var new_val = cljs.core.first(arglist__33472);
var more = cljs.core.rest(arglist__33472);
return G__33471__delegate(atom_,ks,new_val,more);
});
G__33471.cljs$core$IFn$_invoke$arity$variadic = G__33471__delegate;
return G__33471;
})()
;
reset_in_BANG_ = function(atom_,ks,new_val,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return reset_in_BANG___3.call(this,atom_,ks,new_val);
default:
return reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,new_val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_in_BANG_.cljs$lang$maxFixedArity = 3;
reset_in_BANG_.cljs$lang$applyTo = reset_in_BANG___4.cljs$lang$applyTo;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = reset_in_BANG___3;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return reset_in_BANG_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.dissoc_in = (function() { 
var dissoc_in__delegate = function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
};
var dissoc_in = function (m,ks,var_args){
var dissoc_ks = null;
if (arguments.length > 2) {
  dissoc_ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return dissoc_in__delegate.call(this,m,ks,dissoc_ks);};
dissoc_in.cljs$lang$maxFixedArity = 2;
dissoc_in.cljs$lang$applyTo = (function (arglist__33473){
var m = cljs.core.first(arglist__33473);
arglist__33473 = cljs.core.next(arglist__33473);
var ks = cljs.core.first(arglist__33473);
var dissoc_ks = cljs.core.rest(arglist__33473);
return dissoc_in__delegate(m,ks,dissoc_ks);
});
dissoc_in.cljs$core$IFn$_invoke$arity$variadic = dissoc_in__delegate;
return dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
* Assocs each kv iff its value is not nil.
* @param {...*} var_args
*/
taoensso.encore.assoc_some = (function() { 
var assoc_some__delegate = function (m,kvs){
if(cljs.core.truth_((function (){var vec__33486 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e33488){if((e33488 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33488;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33488;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33486,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33486,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33487 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33489){if((e33489 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33489;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33489;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33487,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33487,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",859,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3622__auto__ = m;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4378__auto__ = (function iter__33490(s__33491){
return (new cljs.core.LazySeq(null,(function (){
var s__33491__$1 = s__33491;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33491__$1);
if(temp__4126__auto__){
var s__33491__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33491__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__33491__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__33493 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__33492 = (0);
while(true){
if((i__33492 < size__4377__auto__)){
var vec__33496 = cljs.core._nth.call(null,c__4376__auto__,i__33492);
var k = cljs.core.nth.call(null,vec__33496,(0),null);
var v = cljs.core.nth.call(null,vec__33496,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__33493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33498 = (i__33492 + (1));
i__33492 = G__33498;
continue;
} else {
var G__33499 = (i__33492 + (1));
i__33492 = G__33499;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33493),iter__33490.call(null,cljs.core.chunk_rest.call(null,s__33491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33493),null);
}
} else {
var vec__33497 = cljs.core.first.call(null,s__33491__$2);
var k = cljs.core.nth.call(null,vec__33497,(0),null);
var v = cljs.core.nth.call(null,vec__33497,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__33490.call(null,cljs.core.rest.call(null,s__33491__$2)));
} else {
var G__33500 = cljs.core.rest.call(null,s__33491__$2);
s__33491__$1 = G__33500;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_some = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_some__delegate.call(this,m,kvs);};
assoc_some.cljs$lang$maxFixedArity = 1;
assoc_some.cljs$lang$applyTo = (function (arglist__33501){
var m = cljs.core.first(arglist__33501);
var kvs = cljs.core.rest(arglist__33501);
return assoc_some__delegate(m,kvs);
});
assoc_some.cljs$core$IFn$_invoke$arity$variadic = assoc_some__delegate;
return assoc_some;
})()
;
/**
* Assocs each kv iff its val is truthy.
* @param {...*} var_args
*/
taoensso.encore.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.truth_((function (){var vec__33514 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e33516){if((e33516 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33516;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33516;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33514,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33514,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33515 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33517){if((e33517 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33517;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33517;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33515,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33515,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",863,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3622__auto__ = m;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4378__auto__ = (function iter__33518(s__33519){
return (new cljs.core.LazySeq(null,(function (){
var s__33519__$1 = s__33519;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33519__$1);
if(temp__4126__auto__){
var s__33519__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33519__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__33519__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__33521 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__33520 = (0);
while(true){
if((i__33520 < size__4377__auto__)){
var vec__33524 = cljs.core._nth.call(null,c__4376__auto__,i__33520);
var k = cljs.core.nth.call(null,vec__33524,(0),null);
var v = cljs.core.nth.call(null,vec__33524,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__33521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33526 = (i__33520 + (1));
i__33520 = G__33526;
continue;
} else {
var G__33527 = (i__33520 + (1));
i__33520 = G__33527;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33521),iter__33518.call(null,cljs.core.chunk_rest.call(null,s__33519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33521),null);
}
} else {
var vec__33525 = cljs.core.first.call(null,s__33519__$2);
var k = cljs.core.nth.call(null,vec__33525,(0),null);
var v = cljs.core.nth.call(null,vec__33525,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__33518.call(null,cljs.core.rest.call(null,s__33519__$2)));
} else {
var G__33528 = cljs.core.rest.call(null,s__33519__$2);
s__33519__$1 = G__33528;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__33529){
var m = cljs.core.first(arglist__33529);
var kvs = cljs.core.rest(arglist__33529);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* (seq     {:a :A}) => ([:a :A])
* (seq-kvs {:a :A}) => (:a :A)
*/
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
* Like `apply` but assumes last arg is a map whose elements should be applied
* to `f` as an unpaired seq:
* (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
* where fn will receive args as: `(1 :y 2 :z 3)`.
* @param {...*} var_args
*/
taoensso.encore.mapply = (function() { 
var mapply__delegate = function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
};
var mapply = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__33530){
var f = cljs.core.first(arglist__33530);
var args = cljs.core.rest(arglist__33530);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
/**
* Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
* against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
*/
taoensso.encore.clj1098 = (function clj1098(x){
var or__3622__auto__ = x;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__3610__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__3610__auto__)){
return predv.call(null,v);
} else {
return and__3610__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
* Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
* pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
* way that preservers :or semantics.
*/
taoensso.encore.remove_vals = (function remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
* Cross between `hash-map` & `map-kvs`.
* @param {...*} var_args
*/
taoensso.encore.as_map = (function() { 
var as_map__delegate = function (kvs,p__33531){
var vec__33553 = p__33531;
var kf = cljs.core.nth.call(null,vec__33553,(0),null);
var vf = cljs.core.nth.call(null,vec__33553,(1),null);
if(cljs.core.truth_((function (){var vec__33554 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e33556){if((e33556 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33556;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33556;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33554,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33554,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33555 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33557){if((e33557 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33557;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33557;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33555,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33555,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",935,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__33558 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e33560){if((e33560 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33560;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33560;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33558,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33558,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33559 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33561){if((e33561 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33561;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33561;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33559,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33559,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",936,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})(),(function (){var vec__33562 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e33564){if((e33564 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33564;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33564;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33562,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33562,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33563 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33565){if((e33565 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33565;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33565;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33563,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33563,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",936,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})()], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__33553,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__33553,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__33567 = kvs;
var vec__33568 = G__33567;
var k = cljs.core.nth.call(null,vec__33568,(0),null);
var v = cljs.core.nth.call(null,vec__33568,(1),null);
var s = vec__33568;
var m__$1 = m;
var G__33567__$1 = G__33567;
while(true){
var m__$2 = m__$1;
var vec__33569 = G__33567__$1;
var k__$1 = cljs.core.nth.call(null,vec__33569,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__33569,(1),null);
var s__$1 = vec__33569;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);
if(temp__4124__auto__){
var n = temp__4124__auto__;
var G__33574 = new_m;
var G__33575 = n;
m__$1 = G__33574;
G__33567__$1 = G__33575;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if(cljs.core.truth_((function (){var vec__33570 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e33572){if((e33572 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33572;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33572;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33570,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33570,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33571 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33573){if((e33573 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33573;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33573;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33571,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33571,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",937,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var as_map = function (kvs,var_args){
var p__33531 = null;
if (arguments.length > 1) {
  p__33531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return as_map__delegate.call(this,kvs,p__33531);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__33576){
var kvs = cljs.core.first(arglist__33576);
var p__33531 = cljs.core.rest(arglist__33576);
return as_map__delegate(kvs,p__33531);
});
as_map.cljs$core$IFn$_invoke$arity$variadic = as_map__delegate;
return as_map;
})()
;
/**
* Faster `zipmap`.
*/
taoensso.encore.fzipmap = (function fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__33577 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__33578 = cljs.core.next.call(null,ks__$1);
var G__33579 = cljs.core.next.call(null,vs__$1);
m = G__33577;
ks__$1 = G__33578;
vs__$1 = G__33579;
continue;
}
break;
}
});
/**
* Like `into` but supports multiple "from"s.
* @param {...*} var_args
*/
taoensso.encore.into_all = (function() {
var into_all = null;
var into_all__2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});
var into_all__3 = (function() { 
var G__33580__delegate = function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__33580 = function (to,from,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__33580__delegate.call(this,to,from,more);};
G__33580.cljs$lang$maxFixedArity = 2;
G__33580.cljs$lang$applyTo = (function (arglist__33581){
var to = cljs.core.first(arglist__33581);
arglist__33581 = cljs.core.next(arglist__33581);
var from = cljs.core.first(arglist__33581);
var more = cljs.core.rest(arglist__33581);
return G__33580__delegate(to,from,more);
});
G__33580.cljs$core$IFn$_invoke$arity$variadic = G__33580__delegate;
return G__33580;
})()
;
into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return into_all__2.call(this,to,from);
default:
return into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_all.cljs$lang$maxFixedArity = 2;
into_all.cljs$lang$applyTo = into_all__3.cljs$lang$applyTo;
into_all.cljs$core$IFn$_invoke$arity$2 = into_all__2;
into_all.cljs$core$IFn$_invoke$arity$variadic = into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return into_all;
})()
;
/**
* Greedy version of `interleave`.
* Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
* @param {...*} var_args
*/
taoensso.encore.interleave_all = (function() {
var interleave_all = null;
var interleave_all__0 = (function (){
return cljs.core.List.EMPTY;
});
var interleave_all__1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});
var interleave_all__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});
var interleave_all__3 = (function() { 
var G__33582__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__33582 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__33582__delegate.call(this,c1,c2,colls);};
G__33582.cljs$lang$maxFixedArity = 2;
G__33582.cljs$lang$applyTo = (function (arglist__33583){
var c1 = cljs.core.first(arglist__33583);
arglist__33583 = cljs.core.next(arglist__33583);
var c2 = cljs.core.first(arglist__33583);
var colls = cljs.core.rest(arglist__33583);
return G__33582__delegate(c1,c2,colls);
});
G__33582.cljs$core$IFn$_invoke$arity$variadic = G__33582__delegate;
return G__33582;
})()
;
interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 0:
return interleave_all__0.call(this);
case 1:
return interleave_all__1.call(this,c1);
case 2:
return interleave_all__2.call(this,c1,c2);
default:
return interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave_all.cljs$lang$maxFixedArity = 2;
interleave_all.cljs$lang$applyTo = interleave_all__3.cljs$lang$applyTo;
interleave_all.cljs$core$IFn$_invoke$arity$0 = interleave_all__0;
interleave_all.cljs$core$IFn$_invoke$arity$1 = interleave_all__1;
interleave_all.cljs$core$IFn$_invoke$arity$2 = interleave_all__2;
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave_all;
})()
;
taoensso.encore.takev = (function takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
* Prefer `set` when order doesn't matter (much faster).
*/
taoensso.encore.distinctv = (function() {
var distinctv = null;
var distinctv__1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__33588,in$){
var vec__33589 = p__33588;
var v = cljs.core.nth.call(null,vec__33589,(0),null);
var seen = cljs.core.nth.call(null,vec__33589,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var distinctv__2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__33590,in$){
var vec__33591 = p__33590;
var v = cljs.core.nth.call(null,vec__33591,(0),null);
var seen = cljs.core.nth.call(null,vec__33591,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return distinctv__1.call(this,keyfn);
case 2:
return distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinctv.cljs$core$IFn$_invoke$arity$1 = distinctv__1;
distinctv.cljs$core$IFn$_invoke$arity$2 = distinctv__2;
return distinctv;
})()
;
/**
* Like `sort-by` for distinct. Based on clojure.core/distinct.
*/
taoensso.encore.distinct_by = (function distinct_by(keyfn,coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33598,seen__$1){
while(true){
var vec__33599 = p__33598;
var v = cljs.core.nth.call(null,vec__33599,(0),null);
var xs__$1 = vec__33599;
var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__33600 = cljs.core.rest.call(null,s);
var G__33601 = seen__$1;
p__33598 = G__33600;
seen__$1 = G__33601;
continue;
} else {
return cljs.core.cons.call(null,v,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* Reverse comparator.
*/
taoensso.encore.rcompare = (function rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
/**
* @param {...*} var_args
*/
taoensso.encore.nested_merge_with = (function() { 
var nested_merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3622__auto__ = m1;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
};
var nested_merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return nested_merge_with__delegate.call(this,f,maps);};
nested_merge_with.cljs$lang$maxFixedArity = 1;
nested_merge_with.cljs$lang$applyTo = (function (arglist__33602){
var f = cljs.core.first(arglist__33602);
var maps = cljs.core.rest(arglist__33602);
return nested_merge_with__delegate(f,maps);
});
nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = nested_merge_with__delegate;
return nested_merge_with;
})()
;
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
* Returns the 'greatest' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.greatest = (function() { 
var greatest__delegate = function (coll,p__33605){
var vec__33607 = p__33605;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33607,(0),null);
var comparator = (function (){var or__3622__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33607,_QMARK_comparator){
return (function (p1__33603_SHARP_,p2__33604_SHARP_){
if((comparator.call(null,p1__33603_SHARP_,p2__33604_SHARP_) > (0))){
return p2__33604_SHARP_;
} else {
return p1__33603_SHARP_;
}
});})(comparator,vec__33607,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__33605 = null;
if (arguments.length > 1) {
  p__33605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return greatest__delegate.call(this,coll,p__33605);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__33608){
var coll = cljs.core.first(arglist__33608);
var p__33605 = cljs.core.rest(arglist__33608);
return greatest__delegate(coll,p__33605);
});
greatest.cljs$core$IFn$_invoke$arity$variadic = greatest__delegate;
return greatest;
})()
;
/**
* Returns the 'least' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.least = (function() { 
var least__delegate = function (coll,p__33611){
var vec__33613 = p__33611;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33613,(0),null);
var comparator = (function (){var or__3622__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33613,_QMARK_comparator){
return (function (p1__33609_SHARP_,p2__33610_SHARP_){
if((comparator.call(null,p1__33609_SHARP_,p2__33610_SHARP_) < (0))){
return p2__33610_SHARP_;
} else {
return p1__33609_SHARP_;
}
});})(comparator,vec__33613,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__33611 = null;
if (arguments.length > 1) {
  p__33611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return least__delegate.call(this,coll,p__33611);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__33614){
var coll = cljs.core.first(arglist__33614);
var p__33611 = cljs.core.rest(arglist__33614);
return least__delegate(coll,p__33611);
});
least.cljs$core$IFn$_invoke$arity$variadic = least__delegate;
return least;
})()
;
/**
* Like `repeatedly` but faster and `conj`s items into given collection.
*/
taoensso.encore.repeatedly_into = (function repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__33615 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__33616 = (idx + (1));
v = G__33615;
idx = G__33616;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__33617 = cljs.core.conj.call(null,v,f.call(null));
var G__33618 = (idx + (1));
v = G__33617;
idx = G__33618;
continue;
}
break;
}
}
});
taoensso.encore.fstr = (function fstr(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.sprint_str = (function sprint_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.fstr,xs));
});
/**
* Like `clojure.core/format` but:
* * Returns "" when fmt is nil rather than throwing an NPE.
* * Formats nil as "nil" rather than "null".
* * Provides ClojureScript support via goog.string.format (this has fewer
* formatting options!).
* @param {...*} var_args
*/
taoensso.encore.format = (function() { 
var format__delegate = function (fmt,args){
var fmt__$1 = (function (){var or__3622__auto__ = fmt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.fstr,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__33619){
var fmt = cljs.core.first(arglist__33619);
var args = cljs.core.rest(arglist__33619);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
taoensso.encore.log__GT_console = ((typeof console !== 'undefined')?(function (x){
console.log(x);

return null;
}):(function (x){
return null;
}));
/**
* Cross-platform atomic `str-println`.
* @param {...*} var_args
*/
taoensso.encore.sprintln = (function() {
var sprintln = null;
var sprintln__0 = (function (){
return taoensso.encore.log__GT_console.call(null,"");
});
var sprintln__1 = (function (x){
return taoensso.encore.log__GT_console.call(null,[cljs.core.str(x)].join(''));
});
var sprintln__2 = (function() { 
var G__33620__delegate = function (x,more){
var xs = cljs.core.cons.call(null,x,more);
var s = taoensso.encore.sprint_str.call(null,xs);
return taoensso.encore.log__GT_console.call(null,s);
};
var G__33620 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__33620__delegate.call(this,x,more);};
G__33620.cljs$lang$maxFixedArity = 1;
G__33620.cljs$lang$applyTo = (function (arglist__33621){
var x = cljs.core.first(arglist__33621);
var more = cljs.core.rest(arglist__33621);
return G__33620__delegate(x,more);
});
G__33620.cljs$core$IFn$_invoke$arity$variadic = G__33620__delegate;
return G__33620;
})()
;
sprintln = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return sprintln__0.call(this);
case 1:
return sprintln__1.call(this,x);
default:
return sprintln__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sprintln.cljs$lang$maxFixedArity = 1;
sprintln.cljs$lang$applyTo = sprintln__2.cljs$lang$applyTo;
sprintln.cljs$core$IFn$_invoke$arity$0 = sprintln__0;
sprintln.cljs$core$IFn$_invoke$arity$1 = sprintln__1;
sprintln.cljs$core$IFn$_invoke$arity$variadic = sprintln__2.cljs$core$IFn$_invoke$arity$variadic;
return sprintln;
})()
;
/**
* Gives a consistent, flexible, cross-platform substring API built on
* `sub-indexes`.
* @param {...*} var_args
*/
taoensso.encore.substr = (function() { 
var substr__delegate = function (s,start_idx,p__33622){
var vec__33629 = p__33622;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33629,(0),null);
if(cljs.core.truth_((function (){var vec__33630 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e33632){if((e33632 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33632;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33632;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33630,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33630,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33631 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33633){if((e33633 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33633;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33633;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33631,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33631,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1156,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__33634 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33634,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33634,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__33622 = null;
if (arguments.length > 2) {
  p__33622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return substr__delegate.call(this,s,start_idx,p__33622);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__33635){
var s = cljs.core.first(arglist__33635);
arglist__33635 = cljs.core.next(arglist__33635);
var start_idx = cljs.core.first(arglist__33635);
var p__33622 = cljs.core.rest(arglist__33635);
return substr__delegate(s,start_idx,p__33622);
});
substr.cljs$core$IFn$_invoke$arity$variadic = substr__delegate;
return substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
* Like `clojure.string/join` but ensures no double separators.
* @param {...*} var_args
*/
taoensso.encore.join_once = (function() { 
var join_once__delegate = function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
};
var join_once = function (separator,var_args){
var coll = null;
if (arguments.length > 1) {
  coll = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return join_once__delegate.call(this,separator,coll);};
join_once.cljs$lang$maxFixedArity = 1;
join_once.cljs$lang$applyTo = (function (arglist__33636){
var separator = cljs.core.first(arglist__33636);
var coll = cljs.core.rest(arglist__33636);
return join_once__delegate(separator,coll);
});
join_once.cljs$core$IFn$_invoke$arity$variadic = join_once__delegate;
return join_once;
})()
;
/**
* Joins string paths (URLs, file paths, etc.) ensuring correct "/"
* interposition.
* @param {...*} var_args
*/
taoensso.encore.path = (function() { 
var path__delegate = function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
};
var path = function (var_args){
var parts = null;
if (arguments.length > 0) {
  parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return path__delegate.call(this,parts);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__33637){
var parts = cljs.core.seq(arglist__33637);
return path__delegate(parts);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* Converts all word breaks of any form and length (including line breaks of any
* form, tabs, spaces, etc.) to a single regular space.
*/
taoensso.encore.norm_word_breaks = (function norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
* Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
* Ref. http://www.ietf.org/rfc/rfc4122.txt,
* https://gist.github.com/franks42/4159427
*/
taoensso.encore.uuid_str = (function() {
var uuid_str = null;
var uuid_str__0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});
var uuid_str__1 = (function (max_length){
return taoensso.encore.substr.call(null,uuid_str.call(null),(0),max_length);
});
uuid_str = function(max_length){
switch(arguments.length){
case 0:
return uuid_str__0.call(this);
case 1:
return uuid_str__1.call(this,max_length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uuid_str.cljs$core$IFn$_invoke$arity$0 = uuid_str__0;
uuid_str.cljs$core$IFn$_invoke$arity$1 = uuid_str__1;
return uuid_str;
})()
;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
* Swaps associative value at key and returns the new value.
* Specialized, fast `swap-in!` for use mostly by memoization utils.
*/
taoensso.encore.swap_val_BANG_ = (function swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m)){
return new_v;
} else {
continue;
}
break;
}
});
/**
* Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
* and immediately applies memoized f to given arguments.
* @param {...*} var_args
*/
taoensso.encore.memoized = (function() { 
var memoized__delegate = function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__33638_SHARP_){
if(cljs.core.truth_(p1__33638_SHARP_)){
return p1__33638_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
};
var memoized = function (cache,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return memoized__delegate.call(this,cache,f,args);};
memoized.cljs$lang$maxFixedArity = 2;
memoized.cljs$lang$applyTo = (function (arglist__33639){
var cache = cljs.core.first(arglist__33639);
arglist__33639 = cljs.core.next(arglist__33639);
var f = cljs.core.first(arglist__33639);
var args = cljs.core.rest(arglist__33639);
return memoized__delegate(cache,f,args);
});
memoized.cljs$core$IFn$_invoke$arity$variadic = memoized__delegate;
return memoized;
})()
;
/**
* Like `clojure.core/memoize` but:
* * Uses delays to prevent race conditions on writes.
* * Supports auto invalidation & gc with `ttl-ms` option.
* * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
* * Supports cache size limit & gc with `cache-size` option.
*/
taoensso.encore.memoize_STAR_ = (function() {
var memoize_STAR_ = null;
var memoize_STAR___1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__33706__delegate = function (p__33674){
var vec__33675 = p__33674;
var arg1 = cljs.core.nth.call(null,vec__33675,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33675,(1));
var args = vec__33675;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__33675,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__3610__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__3610__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__33675,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__33675,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__33675,arg1,argn,args,cache))
));
}
};
var G__33706 = function (var_args){
var p__33674 = null;
if (arguments.length > 0) {
  p__33674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33706__delegate.call(this,p__33674);};
G__33706.cljs$lang$maxFixedArity = 0;
G__33706.cljs$lang$applyTo = (function (arglist__33707){
var p__33674 = cljs.core.seq(arglist__33707);
return G__33706__delegate(p__33674);
});
G__33706.cljs$core$IFn$_invoke$arity$variadic = G__33706__delegate;
return G__33706;
})()
;
;})(cache))
});
var memoize_STAR___2 = (function (ttl_ms,f){
var vec__33676_33708 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e33678){if((e33678 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33678;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33678;

}
}})();
var x__17189__auto___33709 = cljs.core.nth.call(null,vec__33676_33708,(0),null);
var _QMARK_x_err__17190__auto___33710 = cljs.core.nth.call(null,vec__33676_33708,(1),null);
var have_x_QMARK___17191__auto___33711 = (_QMARK_x_err__17190__auto___33710 == null);
var vec__33677_33712 = ((have_x_QMARK___17191__auto___33711)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__17189__auto___33709)], null);
}catch (e33679){if((e33679 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33679;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33679;

}
}})():null);
var pass_QMARK___17192__auto___33713 = cljs.core.nth.call(null,vec__33677_33712,(0),null);
var _QMARK_pred_err__17193__auto___33714 = cljs.core.nth.call(null,vec__33677_33712,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto___33713)){
var or__3622__auto___33715 = true;
if(or__3622__auto___33715){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1334,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___17191__auto___33711)?x__17189__auto___33709:_QMARK_x_err__17190__auto___33710),_QMARK_pred_err__17193__auto___33714);
}

var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__33716__delegate = function (p__33680){
var vec__33681 = p__33680;
var arg1 = cljs.core.nth.call(null,vec__33681,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33681,(1));
var args = vec__33681;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_33717 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_33717,vec__33681,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_33717,vec__33681,arg1,argn,args,cache){
return (function (m_STAR_,k,p__33682){
var vec__33683 = p__33682;
var dv = cljs.core.nth.call(null,vec__33683,(0),null);
var udt = cljs.core.nth.call(null,vec__33683,(1),null);
var cv = vec__33683;
if(((instant_33717 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_33717,vec__33681,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_33717,vec__33681,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__33684 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__33681,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3610__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3610__auto____$1){
var vec__33686 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33686,(0),null);
var udt = cljs.core.nth.call(null,vec__33686,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__33681,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__33681,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__33681,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__33684,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__33716 = function (var_args){
var p__33680 = null;
if (arguments.length > 0) {
  p__33680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33716__delegate.call(this,p__33680);};
G__33716.cljs$lang$maxFixedArity = 0;
G__33716.cljs$lang$applyTo = (function (arglist__33718){
var p__33680 = cljs.core.seq(arglist__33718);
return G__33716__delegate(p__33680);
});
G__33716.cljs$core$IFn$_invoke$arity$variadic = G__33716__delegate;
return G__33716;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){
var vec__33687_33719 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e33689){if((e33689 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33689;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33689;

}
}})();
var x__17189__auto___33720 = cljs.core.nth.call(null,vec__33687_33719,(0),null);
var _QMARK_x_err__17190__auto___33721 = cljs.core.nth.call(null,vec__33687_33719,(1),null);
var have_x_QMARK___17191__auto___33722 = (_QMARK_x_err__17190__auto___33721 == null);
var vec__33688_33723 = ((have_x_QMARK___17191__auto___33722)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__17189__auto___33720)], null);
}catch (e33690){if((e33690 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33690;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33690;

}
}})():null);
var pass_QMARK___17192__auto___33724 = cljs.core.nth.call(null,vec__33688_33723,(0),null);
var _QMARK_pred_err__17193__auto___33725 = cljs.core.nth.call(null,vec__33688_33723,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto___33724)){
var or__3622__auto___33726 = true;
if(or__3622__auto___33726){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1369,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___17191__auto___33722)?x__17189__auto___33720:_QMARK_x_err__17190__auto___33721),_QMARK_pred_err__17193__auto___33725);
}

var vec__33691_33727 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e33693){if((e33693 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33693;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33693;

}
}})();
var x__17189__auto___33728 = cljs.core.nth.call(null,vec__33691_33727,(0),null);
var _QMARK_x_err__17190__auto___33729 = cljs.core.nth.call(null,vec__33691_33727,(1),null);
var have_x_QMARK___17191__auto___33730 = (_QMARK_x_err__17190__auto___33729 == null);
var vec__33692_33731 = ((have_x_QMARK___17191__auto___33730)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__17189__auto___33728)], null);
}catch (e33694){if((e33694 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33694;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33694;

}
}})():null);
var pass_QMARK___17192__auto___33732 = cljs.core.nth.call(null,vec__33692_33731,(0),null);
var _QMARK_pred_err__17193__auto___33733 = cljs.core.nth.call(null,vec__33692_33731,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto___33732)){
var or__3622__auto___33734 = true;
if(or__3622__auto___33734){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1370,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___17191__auto___33730)?x__17189__auto___33728:_QMARK_x_err__17190__auto___33729),_QMARK_pred_err__17193__auto___33733);
}

var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__33735__delegate = function (p__33695){
var vec__33696 = p__33695;
var arg1 = cljs.core.nth.call(null,vec__33696,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33696,(1));
var args = vec__33696;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_33736 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_33736,vec__33696,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_33736,vec__33696,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__33697){
var vec__33698 = p__33697;
var dv = cljs.core.nth.call(null,vec__33698,(0),null);
var udt = cljs.core.nth.call(null,vec__33698,(1),null);
var _ = cljs.core.nth.call(null,vec__33698,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33698,(3),null);
var cv = vec__33698;
if(((instant_33736 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_33736,vec__33696,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state){
return (function (p1__33641_SHARP_){
return cljs.core.nth.call(null,p1__33641_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state){
return (function (p1__33640_SHARP_){
return cljs.core.nth.call(null,p1__33640_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state){
return (function (k){
var vec__33699 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__33699,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33699,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33699,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33699,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_33736,vec__33696,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_33736,vec__33696,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__33700 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33696,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3610__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3610__auto____$1){
var or__3622__auto__ = (_QMARK_instant == null);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var vec__33704 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33704,(0),null);
var udt = cljs.core.nth.call(null,vec__33704,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33696,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33696,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33696,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__33700,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33700,dv,vec__33696,arg1,argn,args,state){
return (function (m){
var temp__4126__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__33705 = temp__4126__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__33705,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__33705,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33705,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33705,(3),null);
var cv = vec__33705;
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__33700,dv,vec__33696,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__33735 = function (var_args){
var p__33695 = null;
if (arguments.length > 0) {
  p__33695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33735__delegate.call(this,p__33695);};
G__33735.cljs$lang$maxFixedArity = 0;
G__33735.cljs$lang$applyTo = (function (arglist__33737){
var p__33695 = cljs.core.seq(arglist__33737);
return G__33735__delegate(p__33695);
});
G__33735.cljs$core$IFn$_invoke$arity$variadic = G__33735__delegate;
return G__33735;
})()
;
;})(state))
});
memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return memoize_STAR___1.call(this,cache_size);
case 2:
return memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = memoize_STAR___1;
memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = memoize_STAR___2;
memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = memoize_STAR___3;
return memoize_STAR_;
})()
;
/**
* A particularly cheap+simple single-val memoize. Useful for Reactjs render op
* caching on mobile devices, etc.
*/
taoensso.encore.memoize_1 = (function memoize_1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33738__delegate = function (args){
var temp__4124__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(temp__4124__auto__)){
var dv_ = temp__4124__auto__;
return cljs.core.deref.call(null,dv_);
} else {
var cache = cljs.core.swap_BANG_.call(null,cache_,((function (temp__4124__auto__,cache_){
return (function (cache){
var temp__4124__auto____$1 = cljs.core.get.call(null,cache,args);
if(cljs.core.truth_(temp__4124__auto____$1)){
var dv_ = temp__4124__auto____$1;
return cache;
} else {
return new cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (temp__4124__auto____$1,temp__4124__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(temp__4124__auto____$1,temp__4124__auto__,cache_))
,null))], true, false);
}
});})(temp__4124__auto__,cache_))
);
var dv_ = cljs.core.get.call(null,cache,args);
return cljs.core.deref.call(null,dv_);
}
};
var G__33738 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33738__delegate.call(this,args);};
G__33738.cljs$lang$maxFixedArity = 0;
G__33738.cljs$lang$applyTo = (function (arglist__33739){
var args = cljs.core.seq(arglist__33739);
return G__33738__delegate(args);
});
G__33738.cljs$core$IFn$_invoke$arity$variadic = G__33738__delegate;
return G__33738;
})()
;
;})(cache_))
});
/**
* Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
* msecs until next rate limit window (rate limited).
*/
taoensso.encore.rate_limiter = (function rate_limiter(ncalls_limit,window_ms){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (state){
return (function() { 
var G__33758__delegate = function (p__33749){
var vec__33750 = p__33749;
var id = cljs.core.nth.call(null,vec__33750,(0),null);
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_33759 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_33759,vec__33750,id,state){
return (function (p__33751){
var vec__33752 = p__33751;
var _ = cljs.core.nth.call(null,vec__33752,(0),null);
var m = cljs.core.nth.call(null,vec__33752,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__33752,_,m,instant_33759,vec__33750,id,state){
return (function (m_STAR_,id__$1,p__33753){
var vec__33754 = p__33753;
var udt_window_start = cljs.core.nth.call(null,vec__33754,(0),null);
var ncalls = cljs.core.nth.call(null,vec__33754,(1),null);
if(((instant_33759 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__33752,_,m,instant_33759,vec__33750,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m))], null);
});})(instant_33759,vec__33750,id,state))
);
} else {
}

return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);
return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__33750,id,state){
return (function (p__33755){
var vec__33756 = p__33755;
var _ = cljs.core.nth.call(null,vec__33756,(0),null);
var m = cljs.core.nth.call(null,vec__33756,(1),null);
var temp__4124__auto__ = m.call(null,id);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33757 = temp__4124__auto__;
var udt_window_start = cljs.core.nth.call(null,vec__33757,(0),null);
var ncalls = cljs.core.nth.call(null,vec__33757,(1),null);
if(((instant - udt_window_start) > window_ms)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else {
if((ncalls < ncalls_limit)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__33750,id,state))
);
})(),(0));
};
var G__33758 = function (var_args){
var p__33749 = null;
if (arguments.length > 0) {
  p__33749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33758__delegate.call(this,p__33749);};
G__33758.cljs$lang$maxFixedArity = 0;
G__33758.cljs$lang$applyTo = (function (arglist__33760){
var p__33749 = cljs.core.seq(arglist__33760);
return G__33758__delegate(p__33749);
});
G__33758.cljs$core$IFn$_invoke$arity$variadic = G__33758__delegate;
return G__33758;
})()
;
;})(state))
});
/**
* Wraps fn so that it returns {:result _ :backoff-ms _}.
*/
taoensso.encore.rate_limited = (function rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);
return ((function (rl){
return (function() { 
var G__33761__delegate = function (args){
var temp__4124__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var backoff_ms = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__33761 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33761__delegate.call(this,args);};
G__33761.cljs$lang$maxFixedArity = 0;
G__33761.cljs$lang$applyTo = (function (arglist__33762){
var args = cljs.core.seq(arglist__33762);
return G__33761__delegate(args);
});
G__33761.cljs$core$IFn$_invoke$arity$variadic = G__33761__delegate;
return G__33761;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4124__auto__ = (function (){var and__3610__auto__ = typeof window !== 'undefined';
if(and__3610__auto__){
return (window["performance"]);
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var perf = temp__4124__auto__;
var temp__4124__auto____$1 = (function (){var or__3622__auto__ = (perf["now"]);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
var or__3622__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__3622__auto____$2)){
return or__3622__auto____$2;
} else {
var or__3622__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__3622__auto____$3)){
return or__3622__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var f = temp__4124__auto____$1;
return ((function (f,temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4124__auto____$1,perf,temp__4124__auto__))
} else {
return ((function (temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4124__auto____$1,perf,temp__4124__auto__))
}
} else {
return ((function (temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4124__auto__))
}
})();
taoensso.encore.qb_min_times = (function qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.log = taoensso.encore.log__GT_console;

/**
* @param {...*} var_args
*/
taoensso.encore.sayp = (function() { 
var sayp__delegate = function (xs){
return alert(taoensso.encore.sprint_str.call(null,xs));
};
var sayp = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sayp__delegate.call(this,xs);};
sayp.cljs$lang$maxFixedArity = 0;
sayp.cljs$lang$applyTo = (function (arglist__33771){
var xs = cljs.core.seq(arglist__33771);
return sayp__delegate(xs);
});
sayp.cljs$core$IFn$_invoke$arity$variadic = sayp__delegate;
return sayp;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.logp = (function() { 
var logp__delegate = function (xs){
return taoensso.encore.log.call(null,taoensso.encore.sprint_str.call(null,xs));
};
var logp = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return logp__delegate.call(this,xs);};
logp.cljs$lang$maxFixedArity = 0;
logp.cljs$lang$applyTo = (function (arglist__33772){
var xs = cljs.core.seq(arglist__33772);
return logp__delegate(xs);
});
logp.cljs$core$IFn$_invoke$arity$variadic = logp__delegate;
return logp;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.sayf = (function() { 
var sayf__delegate = function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var sayf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sayf__delegate.call(this,fmt,xs);};
sayf.cljs$lang$maxFixedArity = 1;
sayf.cljs$lang$applyTo = (function (arglist__33773){
var fmt = cljs.core.first(arglist__33773);
var xs = cljs.core.rest(arglist__33773);
return sayf__delegate(fmt,xs);
});
sayf.cljs$core$IFn$_invoke$arity$variadic = sayf__delegate;
return sayf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.logf = (function() { 
var logf__delegate = function (fmt,xs){
return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var logf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__33774){
var fmt = cljs.core.first(arglist__33774);
var xs = cljs.core.rest(arglist__33774);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;

/**
* Log only >= <this-level> calls
*/
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.logging_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = cljs.core.deref.call(null,taoensso.encore.logging_level);
return (scored_levels.call(null,(function (){var vec__33763 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e33765){if((e33765 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33765;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33765;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33763,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33763,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33764 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33766){if((e33766 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33766;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33766;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33764,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33764,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1616,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__33767 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e33769){if((e33769 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33769;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33769;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33767,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33767,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33768 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33770){if((e33770 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33770;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33770;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33768,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33768,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1617,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})()));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.lls_QMARK_ = taoensso.encore.logging_level_sufficient_QMARK_;

/**
* @param {...*} var_args
*/
taoensso.encore.tracef = (function() { 
var tracef__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var tracef = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tracef__delegate.call(this,fmt,xs);};
tracef.cljs$lang$maxFixedArity = 1;
tracef.cljs$lang$applyTo = (function (arglist__33775){
var fmt = cljs.core.first(arglist__33775);
var xs = cljs.core.rest(arglist__33775);
return tracef__delegate(fmt,xs);
});
tracef.cljs$core$IFn$_invoke$arity$variadic = tracef__delegate;
return tracef;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.debugf = (function() { 
var debugf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var debugf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return debugf__delegate.call(this,fmt,xs);};
debugf.cljs$lang$maxFixedArity = 1;
debugf.cljs$lang$applyTo = (function (arglist__33776){
var fmt = cljs.core.first(arglist__33776);
var xs = cljs.core.rest(arglist__33776);
return debugf__delegate(fmt,xs);
});
debugf.cljs$core$IFn$_invoke$arity$variadic = debugf__delegate;
return debugf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.infof = (function() { 
var infof__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var infof = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return infof__delegate.call(this,fmt,xs);};
infof.cljs$lang$maxFixedArity = 1;
infof.cljs$lang$applyTo = (function (arglist__33777){
var fmt = cljs.core.first(arglist__33777);
var xs = cljs.core.rest(arglist__33777);
return infof__delegate(fmt,xs);
});
infof.cljs$core$IFn$_invoke$arity$variadic = infof__delegate;
return infof;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.warnf = (function() { 
var warnf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return [cljs.core.str("WARN: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
};
var warnf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return warnf__delegate.call(this,fmt,xs);};
warnf.cljs$lang$maxFixedArity = 1;
warnf.cljs$lang$applyTo = (function (arglist__33778){
var fmt = cljs.core.first(arglist__33778);
var xs = cljs.core.rest(arglist__33778);
return warnf__delegate(fmt,xs);
});
warnf.cljs$core$IFn$_invoke$arity$variadic = warnf__delegate;
return warnf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.errorf = (function() { 
var errorf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return [cljs.core.str("ERROR: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
};
var errorf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return errorf__delegate.call(this,fmt,xs);};
errorf.cljs$lang$maxFixedArity = 1;
errorf.cljs$lang$applyTo = (function (arglist__33779){
var fmt = cljs.core.first(arglist__33779);
var xs = cljs.core.rest(arglist__33779);
return errorf__delegate(fmt,xs);
});
errorf.cljs$core$IFn$_invoke$arity$variadic = errorf__delegate;
return errorf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.fatalf = (function() { 
var fatalf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return [cljs.core.str("FATAL: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
};
var fatalf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fatalf__delegate.call(this,fmt,xs);};
fatalf.cljs$lang$maxFixedArity = 1;
fatalf.cljs$lang$applyTo = (function (arglist__33780){
var fmt = cljs.core.first(arglist__33780);
var xs = cljs.core.rest(arglist__33780);
return fatalf__delegate(fmt,xs);
});
fatalf.cljs$core$IFn$_invoke$arity$variadic = fatalf__delegate;
return fatalf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.reportf = (function() { 
var reportf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var reportf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reportf__delegate.call(this,fmt,xs);};
reportf.cljs$lang$maxFixedArity = 1;
reportf.cljs$lang$applyTo = (function (arglist__33781){
var fmt = cljs.core.first(arglist__33781);
var xs = cljs.core.rest(arglist__33781);
return reportf__delegate(fmt,xs);
});
reportf.cljs$core$IFn$_invoke$arity$variadic = reportf__delegate;
return reportf;
})()
;
/**
* Returns browser window's current location. Forgeable.
*/
taoensso.encore.get_window_location = (function get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
* Returns an immediately available XhrIo instance, or nil. The instance must be
* released back to pool manually.
*/
taoensso.encore.get_pooled_xhr_BANG_ = (function get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
* [uri method get-or-post-params] -> [uri post-content]
*/
taoensso.encore.coerce_xhr_params = (function coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var vec__33787 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e33789){if((e33789 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33789;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33789;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33787,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33787,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33788 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33790){if((e33790 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33790;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33790;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33788,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33788,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1662,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__33791 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33791) {
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-lite "/my-post-route"
* {:method     :post
* :params     {:username "Rich Hickey"
* :type     "Awesome"}
* :headers    {"Foo" "Bar"}
* :resp-type  :text
* :timeout-ms 7000}
* (fn async-callback [resp-map]
* (let [{:keys [?status ?error ?content ?content-type]} resp-map]
* ;; ?status - 200, 404, ..., or nil on no response
* ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
* ;;                 :timeout <http-error-status> nil}
* (js/alert (str "Ajax response: " resp-map)))))
*/
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__33795,callback){
var map__33815 = p__33795;
var map__33815__$1 = ((cljs.core.seq_QMARK_.call(null,map__33815))?cljs.core.apply.call(null,cljs.core.hash_map,map__33815):map__33815);
var opts = map__33815__$1;
var resp_type = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var timeout_ms = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var headers = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
if(cljs.core.truth_((function (){var vec__33816 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e33818){if((e33818 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33818;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33818;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33816,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33816,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33817 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__17189__auto__)], null);
}catch (e33819){if((e33819 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33819;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33819;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33817,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33817,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1694,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var xhr = temp__4124__auto__;
try{var timeout_ms__$1 = (function (){var or__3622__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__33822 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33822) {
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__33821 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__33821,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__33821,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__33823_33835 = xhr;
goog.events.listenOnce(G__33823_33835,goog.net.EventType.READY,((function (G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method))
);

goog.events.listenOnce(G__33823_33835,goog.net.EventType.COMPLETE,((function (G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__33829 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (p1__33794_SHARP_,p2__33793_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__33793_SHARP_,p1__33794_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method))
;
var expr__33830 = [cljs.core.str(_QMARK_content_type)].join('');
if(pred__33829.call(null,"/edn",expr__33830)){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(pred__33829.call(null,"/json",expr__33830)){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(pred__33829.call(null,"/xml",expr__33830)){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(pred__33829.call(null,"/html",expr__33830)){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__33833 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__33833) {
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e33832){var e = e33832;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__3622__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if((((200) <= n)) && ((n <= (299)))){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
if((_QMARK_content == null)){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__33823_33835,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33821,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__33815,map__33815__$1,opts,resp_type,timeout_ms,headers,params,method))
);

G__33823_33835.setTimeoutInterval((function (){var or__3622__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})());

G__33823_33835.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e33820){if((e33820 instanceof Error)){
var e = e33820;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e33820;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
* Stolen from http://goo.gl/99NSR1.
*/
taoensso.encore.url_encode = (function url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
* Stolen from http://goo.gl/99NSR1.
* @param {...*} var_args
*/
taoensso.encore.url_decode = (function() { 
var url_decode__delegate = function (s,p__33837){
var vec__33839 = p__33837;
var encoding = cljs.core.nth.call(null,vec__33839,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__33837 = null;
if (arguments.length > 1) {
  p__33837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__33837);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__33840){
var s = cljs.core.first(arglist__33840);
var p__33837 = cljs.core.rest(arglist__33840);
return url_decode__delegate(s,p__33837);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
taoensso.encore.format_query_string = (function format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__4378__auto__ = ((function (param,join){
return (function iter__33849(s__33850){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__33850__$1 = s__33850;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33850__$1);
if(temp__4126__auto__){
var s__33850__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33850__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__33850__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__33852 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__33851 = (0);
while(true){
if((i__33851 < size__4377__auto__)){
var vec__33855 = cljs.core._nth.call(null,c__4376__auto__,i__33851);
var k = cljs.core.nth.call(null,vec__33855,(0),null);
var v = cljs.core.nth.call(null,vec__33855,(1),null);
cljs.core.chunk_append.call(null,b__33852,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3622__auto__ = cljs.core.seq.call(null,v);
if(or__3622__auto__){
return or__3622__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__33857 = (i__33851 + (1));
i__33851 = G__33857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33852),iter__33849.call(null,cljs.core.chunk_rest.call(null,s__33850__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33852),null);
}
} else {
var vec__33856 = cljs.core.first.call(null,s__33850__$2);
var k = cljs.core.nth.call(null,vec__33856,(0),null);
var v = cljs.core.nth.call(null,vec__33856,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3622__auto__ = cljs.core.seq.call(null,v);
if(or__3622__auto__){
return or__3622__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),iter__33849.call(null,cljs.core.rest.call(null,s__33850__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__4378__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4124__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var cur = temp__4124__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
* Based on `ring-codec/form-decode`.
* @param {...*} var_args
*/
taoensso.encore.parse_query_params = (function() { 
var parse_query_params__delegate = function (s,p__33858){
var vec__33865 = p__33858;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__33865,(0),null);
var encoding = cljs.core.nth.call(null,vec__33865,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(!(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__33865,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4124__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33866 = temp__4124__auto__;
var k = cljs.core.nth.call(null,vec__33866,(0),null);
var v = cljs.core.nth.call(null,vec__33866,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__33865,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var vec__33867 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e33869){if((e33869 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33869;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33869;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33867,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33867,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33868 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33870){if((e33870 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33870;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33870;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33868,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33868,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1870,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var parse_query_params = function (s,var_args){
var p__33858 = null;
if (arguments.length > 1) {
  p__33858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return parse_query_params__delegate.call(this,s,p__33858);};
parse_query_params.cljs$lang$maxFixedArity = 1;
parse_query_params.cljs$lang$applyTo = (function (arglist__33871){
var s = cljs.core.first(arglist__33871);
var p__33858 = cljs.core.rest(arglist__33871);
return parse_query_params__delegate(s,p__33858);
});
parse_query_params.cljs$core$IFn$_invoke$arity$variadic = parse_query_params__delegate;
return parse_query_params;
})()
;
taoensso.encore.merge_url_with_query_string = (function merge_url_with_query_string(url,m){
var vec__33873 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__33873,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__33873,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4126__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4126__auto__)){
var qstr = temp__4126__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
/**
* @param {...*} var_args
*/
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__33874){
var vec__33876 = p__33874;
var nattempt = cljs.core.nth.call(null,vec__33876,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3622__auto__ = nattempt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__33874 = null;
if (arguments.length > 1) {
  p__33874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__33874);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__33877){
var nullary_f = cljs.core.first(arglist__33877);
var p__33874 = cljs.core.rest(arglist__33877);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__33874);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.keys_EQ_ = (function keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = cljs.core.partial.call(null,taoensso.encore.as__QMARK_bool);
taoensso.encore.parse_int = cljs.core.partial.call(null,taoensso.encore.as__QMARK_int);
taoensso.encore.parse_float = cljs.core.partial.call(null,taoensso.encore.as__QMARK_float);
taoensso.encore.as_bool = (function as_bool(x){
if(cljs.core.truth_(x)){
var vec__33882 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e33884){if((e33884 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33884;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33884;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33882,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33882,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33883 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33885){if((e33885 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33885;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33885;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33883,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33883,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1925,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function as_int(x){
if(cljs.core.truth_(x)){
var vec__33890 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e33892){if((e33892 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33892;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33892;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33890,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33890,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33891 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33893){if((e33893 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33893;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33893;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33891,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33891,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1926,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function as_float(x){
if(cljs.core.truth_(x)){
var vec__33898 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e33900){if((e33900 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33900;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33900;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33898,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33898,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33899 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33901){if((e33901 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33901;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33901;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33899,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33899,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1927,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;

//# sourceMappingURL=encore.js.map