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
var vec__111013 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__111013,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__111013,(1),null);
var vec__111014 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__111014,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__111014,(1),null);
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
var G__111017__delegate = function (x,y,more){
var and__3610__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(and__3610__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__3610__auto__;
}
};
var G__111017 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__111017__delegate.call(this,x,y,more);};
G__111017.cljs$lang$maxFixedArity = 2;
G__111017.cljs$lang$applyTo = (function (arglist__111018){
var x = cljs.core.first(arglist__111018);
arglist__111018 = cljs.core.next(arglist__111018);
var y = cljs.core.first(arglist__111018);
var more = cljs.core.rest(arglist__111018);
return G__111017__delegate(x,y,more);
});
G__111017.cljs$core$IFn$_invoke$arity$variadic = G__111017__delegate;
return G__111017;
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
return cljs.core.every_QMARK_.call(null,(function (p1__111019_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__111019_SHARP_));
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
var hthrow__delegate = function (ex_QMARK_,ns_str,_QMARK_line,form,val,p__111020){
var vec__111022 = p__111020;
var _QMARK_err = cljs.core.nth.call(null,vec__111022,(0),null);
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
var p__111020 = null;
if (arguments.length > 5) {
  p__111020 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return hthrow__delegate.call(this,ex_QMARK_,ns_str,_QMARK_line,form,val,p__111020);};
hthrow.cljs$lang$maxFixedArity = 5;
hthrow.cljs$lang$applyTo = (function (arglist__111023){
var ex_QMARK_ = cljs.core.first(arglist__111023);
arglist__111023 = cljs.core.next(arglist__111023);
var ns_str = cljs.core.first(arglist__111023);
arglist__111023 = cljs.core.next(arglist__111023);
var _QMARK_line = cljs.core.first(arglist__111023);
arglist__111023 = cljs.core.next(arglist__111023);
var form = cljs.core.first(arglist__111023);
arglist__111023 = cljs.core.next(arglist__111023);
var val = cljs.core.first(arglist__111023);
var p__111020 = cljs.core.rest(arglist__111023);
return hthrow__delegate(ex_QMARK_,ns_str,_QMARK_line,form,val,p__111020);
});
hthrow.cljs$core$IFn$_invoke$arity$variadic = hthrow__delegate;
return hthrow;
})()
;
taoensso.encore.non_throwing = (function non_throwing(pred){
return (function (x){
var vec__111026 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e111027){if((e111027 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111027;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111027;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__111026,(0),null);
var _ = cljs.core.nth.call(null,vec__111026,(1),null);
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
var vec__111033 = pred_form;
var type = cljs.core.nth.call(null,vec__111033,(0),null);
var p1 = cljs.core.nth.call(null,vec__111033,(1),null);
var p2 = cljs.core.nth.call(null,vec__111033,(2),null);
var more = cljs.core.nthnext.call(null,vec__111033,(3));
var p1__$1 = (cljs.core.truth_(p1)?hpred.call(null,p1):null);
var p2__$1 = (cljs.core.truth_(p2)?hpred.call(null,p2):null);
var G__111034 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__111034) {
case "and":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var and__3610__auto__ = ((cljs.core.not.call(null,p1__$1))?true:p1__$1.call(null,x));
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = ((cljs.core.not.call(null,p2__$1))?true:p2__$1.call(null,x));
if(cljs.core.truth_(and__3610__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__3610__auto____$1,and__3610__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__111030_SHARP_){
return p1__111030_SHARP_.call(null,x);
});})(and__3610__auto____$1,and__3610__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))
,more);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "or":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var or__3622__auto__ = (cljs.core.truth_(p1__$1)?taoensso.encore.non_throwing.call(null,p1__$1).call(null,x):null);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.truth_(p2__$1)?taoensso.encore.non_throwing.call(null,p2__$1).call(null,x):null);
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__3622__auto____$1,or__3622__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__111029_SHARP_){
return taoensso.encore.non_throwing.call(null,p1__111029_SHARP_).call(null,x);
});})(or__3622__auto____$1,or__3622__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))
,more);
}
}
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "not":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
var and__3610__auto__ = ((cljs.core.not.call(null,p1__$1))?true:cljs.core.not.call(null,p1__$1.call(null,x)));
if(and__3610__auto__){
var and__3610__auto____$1 = ((cljs.core.not.call(null,p2__$1))?true:cljs.core.not.call(null,p2__$1.call(null,x)));
if(and__3610__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__3610__auto____$1,and__3610__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (p1__111028_SHARP_){
return cljs.core.not.call(null,p1__111028_SHARP_.call(null,x));
});})(and__3610__auto____$1,and__3610__auto__,G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))
,more);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "not-in":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1__$1),x));
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "in":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1__$1),x);
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks-nnil?":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1__$1,x);
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks>=":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1__$1,x);
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks<=":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1__$1,x);
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

break;
case "ks=":
return ((function (G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1__$1,x);
});
;})(G__111034,vec__111033,type,p1,p2,more,p1__$1,p2__$1))

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
var merge_keywords__delegate = function (ks,p__111036){
var vec__111038 = p__111036;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__111038,(0),null);
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
var p__111036 = null;
if (arguments.length > 1) {
  p__111036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_keywords__delegate.call(this,ks,p__111036);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__111039){
var ks = cljs.core.first(arglist__111039);
var p__111036 = cljs.core.rest(arglist__111039);
return merge_keywords__delegate(ks,p__111036);
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
var round__delegate = function (n,p__111040){
var vec__111043 = p__111040;
var type = cljs.core.nth.call(null,vec__111043,(0),null);
var nplaces = cljs.core.nth.call(null,vec__111043,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__111044 = ((((function (){var or__3622__auto__ = type;
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
switch (G__111044) {
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
var p__111040 = null;
if (arguments.length > 1) {
  p__111040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return round__delegate.call(this,n,p__111040);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__111046){
var n = cljs.core.first(arglist__111046);
var p__111040 = cljs.core.rest(arglist__111046);
return round__delegate(n,p__111040);
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
var exp_backoff__delegate = function (nattempt,p__111047){
var vec__111050 = p__111047;
var map__111051 = cljs.core.nth.call(null,vec__111050,(0),null);
var map__111051__$1 = ((cljs.core.seq_QMARK_.call(null,map__111051))?cljs.core.apply.call(null,cljs.core.hash_map,map__111051):map__111051);
var factor = cljs.core.get.call(null,map__111051__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__111051__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__111051__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var p__111047 = null;
if (arguments.length > 1) {
  p__111047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return exp_backoff__delegate.call(this,nattempt,p__111047);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__111052){
var nattempt = cljs.core.first(arglist__111052);
var p__111047 = cljs.core.rest(arglist__111052);
return exp_backoff__delegate(nattempt,p__111047);
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
var now_udt_mock_fn__delegate = function (p__111053){
var vec__111055 = p__111053;
var mock_udts = cljs.core.nth.call(null,vec__111055,(0),null);
var mock_udts__$1 = (function (){var or__3622__auto__ = mock_udts;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__111055,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__111055,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__111053 = null;
if (arguments.length > 0) {
  p__111053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return now_udt_mock_fn__delegate.call(this,p__111053);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__111056){
var p__111053 = cljs.core.seq(arglist__111056);
return now_udt_mock_fn__delegate(p__111053);
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
var ms__delegate = function (p__111057){
var map__111064 = p__111057;
var map__111064__$1 = ((cljs.core.seq_QMARK_.call(null,map__111064))?cljs.core.apply.call(null,cljs.core.hash_map,map__111064):map__111064);
var opts = map__111064__$1;
var ms__$1 = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var msecs = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var secs = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var hours = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__111064__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__111064,map__111064__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years){
return (function (hcond_in__111065){
var vec__111066 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__111065], null);
}catch (e111068){if((e111068 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111068;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111068;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111066,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111066,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111067 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__19401__auto__)], null);
}catch (e111069){if((e111069 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111069;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111069;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111067,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111067,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__111065","hcond-in__111065",-1634367090,null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
});})(map__111064,map__111064__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have-in","have-in",-646577999,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms__$1)?ms__$1:(0))));
};
var ms = function (var_args){
var p__111057 = null;
if (arguments.length > 0) {
  p__111057 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ms__delegate.call(this,p__111057);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__111070){
var p__111057 = cljs.core.seq(arglist__111070);
return ms__delegate(p__111057);
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
var sub_indexes__delegate = function (x,start_idx,p__111075){
var map__111081 = p__111075;
var map__111081__$1 = ((cljs.core.seq_QMARK_.call(null,map__111081))?cljs.core.apply.call(null,cljs.core.hash_map,map__111081):map__111081);
var end_idx = cljs.core.get.call(null,map__111081__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var max_len = cljs.core.get.call(null,map__111081__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
if(cljs.core.truth_((function (){var vec__111082 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e111084){if((e111084 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111084;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111084;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111082,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111082,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111083 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111085){if((e111085 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111085;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111085;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111083,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111083,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",662,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__19485__auto__ = (start_idx_STAR_ + max_len);
var n2__19486__auto__ = xlen;
if((n1__19485__auto__ > n2__19486__auto__)){
return n2__19486__auto__;
} else {
return n1__19485__auto__;
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
var p__111075 = null;
if (arguments.length > 2) {
  p__111075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return sub_indexes__delegate.call(this,x,start_idx,p__111075);};
sub_indexes.cljs$lang$maxFixedArity = 2;
sub_indexes.cljs$lang$applyTo = (function (arglist__111086){
var x = cljs.core.first(arglist__111086);
arglist__111086 = cljs.core.next(arglist__111086);
var start_idx = cljs.core.first(arglist__111086);
var p__111075 = cljs.core.rest(arglist__111086);
return sub_indexes__delegate(x,start_idx,p__111075);
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
var subvec_STAR___delegate = function (v,start_idx,p__111087){
var vec__111094 = p__111087;
var _QMARK_max_len = cljs.core.nth.call(null,vec__111094,(0),null);
if(cljs.core.truth_((function (){var vec__111095 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e111097){if((e111097 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111097;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111097;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111095,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111095,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111096 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111098){if((e111098 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111098;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111098;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111096,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111096,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",698,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__111099 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__111099,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__111099,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
};
var subvec_STAR_ = function (v,start_idx,var_args){
var p__111087 = null;
if (arguments.length > 2) {
  p__111087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return subvec_STAR___delegate.call(this,v,start_idx,p__111087);};
subvec_STAR_.cljs$lang$maxFixedArity = 2;
subvec_STAR_.cljs$lang$applyTo = (function (arglist__111100){
var v = cljs.core.first(arglist__111100);
arglist__111100 = cljs.core.next(arglist__111100);
var start_idx = cljs.core.first(arglist__111100);
var p__111087 = cljs.core.rest(arglist__111100);
return subvec_STAR___delegate(v,start_idx,p__111087);
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

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k111102,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__111104 = (((k111102 instanceof cljs.core.Keyword))?k111102.fqn:null);
switch (G__111104) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k111102,else__4228__auto__);

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

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__111101){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__111105 = cljs.core.keyword_identical_QMARK_;
var expr__111106 = k__4233__auto__;
if(cljs.core.truth_(pred__111105.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__111106))){
return (new taoensso.encore.Swapped(G__111101,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__111105.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__111106))){
return (new taoensso.encore.Swapped(self__.new_val,G__111101,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__111101),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__111101){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__111101,self__.__extmap,self__.__hash));
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

taoensso.encore.map__GT_Swapped = (function map__GT_Swapped(G__111103){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__111103),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__111103),null,cljs.core.dissoc.call(null,G__111103,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
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
var vec__111110 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__111110,(0),null);
var return_val = cljs.core.nth.call(null,vec__111110,(1),null);
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
var vec__111113 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__111113,(0),null);
var ks = cljs.core.nth.call(null,vec__111113,(1),null);
var valf = cljs.core.nth.call(null,vec__111113,(2),null);
var G__111114 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__111114) {
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
replace_in.cljs$lang$applyTo = (function (arglist__111116){
var m = cljs.core.first(arglist__111116);
var ops = cljs.core.rest(arglist__111116);
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
var vec__111123 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__111123,(0),null);
var return_val = cljs.core.nth.call(null,vec__111123,(1),null);
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
var vec__111124 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__111124,(0),null);
var return_val = cljs.core.nth.call(null,vec__111124,(1),null);
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
var G__111129__delegate = function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var vec__111125 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e111127){if((e111127 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111127;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111127;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111125,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111125,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111126 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111128){if((e111128 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111128;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111128;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111126,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111126,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",790,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
var G__111129 = function (atom_,ks,f,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__111129__delegate.call(this,atom_,ks,f,more);};
G__111129.cljs$lang$maxFixedArity = 3;
G__111129.cljs$lang$applyTo = (function (arglist__111130){
var atom_ = cljs.core.first(arglist__111130);
arglist__111130 = cljs.core.next(arglist__111130);
var ks = cljs.core.first(arglist__111130);
arglist__111130 = cljs.core.next(arglist__111130);
var f = cljs.core.first(arglist__111130);
var more = cljs.core.rest(arglist__111130);
return G__111129__delegate(atom_,ks,f,more);
});
G__111129.cljs$core$IFn$_invoke$arity$variadic = G__111129__delegate;
return G__111129;
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
var G__111139__delegate = function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var vec__111135 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e111137){if((e111137 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111137;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111137;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111135,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111135,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111136 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111138){if((e111138 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111138;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111138;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111136,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111136,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",807,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
var G__111139 = function (atom_,ks,new_val,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__111139__delegate.call(this,atom_,ks,new_val,more);};
G__111139.cljs$lang$maxFixedArity = 3;
G__111139.cljs$lang$applyTo = (function (arglist__111140){
var atom_ = cljs.core.first(arglist__111140);
arglist__111140 = cljs.core.next(arglist__111140);
var ks = cljs.core.first(arglist__111140);
arglist__111140 = cljs.core.next(arglist__111140);
var new_val = cljs.core.first(arglist__111140);
var more = cljs.core.rest(arglist__111140);
return G__111139__delegate(atom_,ks,new_val,more);
});
G__111139.cljs$core$IFn$_invoke$arity$variadic = G__111139__delegate;
return G__111139;
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
dissoc_in.cljs$lang$applyTo = (function (arglist__111141){
var m = cljs.core.first(arglist__111141);
arglist__111141 = cljs.core.next(arglist__111141);
var ks = cljs.core.first(arglist__111141);
var dissoc_ks = cljs.core.rest(arglist__111141);
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
if(cljs.core.truth_((function (){var vec__111154 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e111156){if((e111156 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111156;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111156;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111154,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111154,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111155 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111157){if((e111157 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111157;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111157;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111155,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111155,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",859,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
})(),(function (){var iter__4378__auto__ = (function iter__111158(s__111159){
return (new cljs.core.LazySeq(null,(function (){
var s__111159__$1 = s__111159;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__111159__$1);
if(temp__4126__auto__){
var s__111159__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111159__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__111159__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__111161 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__111160 = (0);
while(true){
if((i__111160 < size__4377__auto__)){
var vec__111164 = cljs.core._nth.call(null,c__4376__auto__,i__111160);
var k = cljs.core.nth.call(null,vec__111164,(0),null);
var v = cljs.core.nth.call(null,vec__111164,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__111161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__111166 = (i__111160 + (1));
i__111160 = G__111166;
continue;
} else {
var G__111167 = (i__111160 + (1));
i__111160 = G__111167;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111161),iter__111158.call(null,cljs.core.chunk_rest.call(null,s__111159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111161),null);
}
} else {
var vec__111165 = cljs.core.first.call(null,s__111159__$2);
var k = cljs.core.nth.call(null,vec__111165,(0),null);
var v = cljs.core.nth.call(null,vec__111165,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__111158.call(null,cljs.core.rest.call(null,s__111159__$2)));
} else {
var G__111168 = cljs.core.rest.call(null,s__111159__$2);
s__111159__$1 = G__111168;
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
assoc_some.cljs$lang$applyTo = (function (arglist__111169){
var m = cljs.core.first(arglist__111169);
var kvs = cljs.core.rest(arglist__111169);
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
if(cljs.core.truth_((function (){var vec__111182 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e111184){if((e111184 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111184;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111184;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111182,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111182,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111183 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111185){if((e111185 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111185;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111185;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111183,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111183,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",863,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
})(),(function (){var iter__4378__auto__ = (function iter__111186(s__111187){
return (new cljs.core.LazySeq(null,(function (){
var s__111187__$1 = s__111187;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__111187__$1);
if(temp__4126__auto__){
var s__111187__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111187__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__111187__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__111189 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__111188 = (0);
while(true){
if((i__111188 < size__4377__auto__)){
var vec__111192 = cljs.core._nth.call(null,c__4376__auto__,i__111188);
var k = cljs.core.nth.call(null,vec__111192,(0),null);
var v = cljs.core.nth.call(null,vec__111192,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__111189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__111194 = (i__111188 + (1));
i__111188 = G__111194;
continue;
} else {
var G__111195 = (i__111188 + (1));
i__111188 = G__111195;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111189),iter__111186.call(null,cljs.core.chunk_rest.call(null,s__111187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111189),null);
}
} else {
var vec__111193 = cljs.core.first.call(null,s__111187__$2);
var k = cljs.core.nth.call(null,vec__111193,(0),null);
var v = cljs.core.nth.call(null,vec__111193,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__111186.call(null,cljs.core.rest.call(null,s__111187__$2)));
} else {
var G__111196 = cljs.core.rest.call(null,s__111187__$2);
s__111187__$1 = G__111196;
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
assoc_when.cljs$lang$applyTo = (function (arglist__111197){
var m = cljs.core.first(arglist__111197);
var kvs = cljs.core.rest(arglist__111197);
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
mapply.cljs$lang$applyTo = (function (arglist__111198){
var f = cljs.core.first(arglist__111198);
var args = cljs.core.rest(arglist__111198);
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
var as_map__delegate = function (kvs,p__111199){
var vec__111221 = p__111199;
var kf = cljs.core.nth.call(null,vec__111221,(0),null);
var vf = cljs.core.nth.call(null,vec__111221,(1),null);
if(cljs.core.truth_((function (){var vec__111222 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e111224){if((e111224 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111224;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111224;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111222,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111222,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111223 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111225){if((e111225 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111225;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111225;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111223,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111223,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",935,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__111226 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e111228){if((e111228 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111228;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111228;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111226,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111226,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111227 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111229){if((e111229 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111229;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111229;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111227,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111227,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",936,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})(),(function (){var vec__111230 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e111232){if((e111232 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111232;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111232;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111230,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111230,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111231 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111233){if((e111233 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111233;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111233;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111231,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111231,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",936,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})()], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__111221,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__111221,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__111235 = kvs;
var vec__111236 = G__111235;
var k = cljs.core.nth.call(null,vec__111236,(0),null);
var v = cljs.core.nth.call(null,vec__111236,(1),null);
var s = vec__111236;
var m__$1 = m;
var G__111235__$1 = G__111235;
while(true){
var m__$2 = m__$1;
var vec__111237 = G__111235__$1;
var k__$1 = cljs.core.nth.call(null,vec__111237,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__111237,(1),null);
var s__$1 = vec__111237;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);
if(temp__4124__auto__){
var n = temp__4124__auto__;
var G__111242 = new_m;
var G__111243 = n;
m__$1 = G__111242;
G__111235__$1 = G__111243;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if(cljs.core.truth_((function (){var vec__111238 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e111240){if((e111240 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111240;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111240;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111238,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111238,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111239 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111241){if((e111241 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111241;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111241;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111239,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111239,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",937,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var as_map = function (kvs,var_args){
var p__111199 = null;
if (arguments.length > 1) {
  p__111199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return as_map__delegate.call(this,kvs,p__111199);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__111244){
var kvs = cljs.core.first(arglist__111244);
var p__111199 = cljs.core.rest(arglist__111244);
return as_map__delegate(kvs,p__111199);
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
var G__111245 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__111246 = cljs.core.next.call(null,ks__$1);
var G__111247 = cljs.core.next.call(null,vs__$1);
m = G__111245;
ks__$1 = G__111246;
vs__$1 = G__111247;
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
var G__111248__delegate = function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__111248 = function (to,from,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__111248__delegate.call(this,to,from,more);};
G__111248.cljs$lang$maxFixedArity = 2;
G__111248.cljs$lang$applyTo = (function (arglist__111249){
var to = cljs.core.first(arglist__111249);
arglist__111249 = cljs.core.next(arglist__111249);
var from = cljs.core.first(arglist__111249);
var more = cljs.core.rest(arglist__111249);
return G__111248__delegate(to,from,more);
});
G__111248.cljs$core$IFn$_invoke$arity$variadic = G__111248__delegate;
return G__111248;
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
var G__111250__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__111250 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__111250__delegate.call(this,c1,c2,colls);};
G__111250.cljs$lang$maxFixedArity = 2;
G__111250.cljs$lang$applyTo = (function (arglist__111251){
var c1 = cljs.core.first(arglist__111251);
arglist__111251 = cljs.core.next(arglist__111251);
var c2 = cljs.core.first(arglist__111251);
var colls = cljs.core.rest(arglist__111251);
return G__111250__delegate(c1,c2,colls);
});
G__111250.cljs$core$IFn$_invoke$arity$variadic = G__111250__delegate;
return G__111250;
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
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__111256,in$){
var vec__111257 = p__111256;
var v = cljs.core.nth.call(null,vec__111257,(0),null);
var seen = cljs.core.nth.call(null,vec__111257,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var distinctv__2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__111258,in$){
var vec__111259 = p__111258;
var v = cljs.core.nth.call(null,vec__111259,(0),null);
var seen = cljs.core.nth.call(null,vec__111259,(1),null);
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
return (function (p__111266,seen__$1){
while(true){
var vec__111267 = p__111266;
var v = cljs.core.nth.call(null,vec__111267,(0),null);
var xs__$1 = vec__111267;
var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__111268 = cljs.core.rest.call(null,s);
var G__111269 = seen__$1;
p__111266 = G__111268;
seen__$1 = G__111269;
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
nested_merge_with.cljs$lang$applyTo = (function (arglist__111270){
var f = cljs.core.first(arglist__111270);
var maps = cljs.core.rest(arglist__111270);
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
var greatest__delegate = function (coll,p__111273){
var vec__111275 = p__111273;
var _QMARK_comparator = cljs.core.nth.call(null,vec__111275,(0),null);
var comparator = (function (){var or__3622__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__111275,_QMARK_comparator){
return (function (p1__111271_SHARP_,p2__111272_SHARP_){
if((comparator.call(null,p1__111271_SHARP_,p2__111272_SHARP_) > (0))){
return p2__111272_SHARP_;
} else {
return p1__111271_SHARP_;
}
});})(comparator,vec__111275,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__111273 = null;
if (arguments.length > 1) {
  p__111273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return greatest__delegate.call(this,coll,p__111273);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__111276){
var coll = cljs.core.first(arglist__111276);
var p__111273 = cljs.core.rest(arglist__111276);
return greatest__delegate(coll,p__111273);
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
var least__delegate = function (coll,p__111279){
var vec__111281 = p__111279;
var _QMARK_comparator = cljs.core.nth.call(null,vec__111281,(0),null);
var comparator = (function (){var or__3622__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__111281,_QMARK_comparator){
return (function (p1__111277_SHARP_,p2__111278_SHARP_){
if((comparator.call(null,p1__111277_SHARP_,p2__111278_SHARP_) < (0))){
return p2__111278_SHARP_;
} else {
return p1__111277_SHARP_;
}
});})(comparator,vec__111281,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__111279 = null;
if (arguments.length > 1) {
  p__111279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return least__delegate.call(this,coll,p__111279);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__111282){
var coll = cljs.core.first(arglist__111282);
var p__111279 = cljs.core.rest(arglist__111282);
return least__delegate(coll,p__111279);
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
var G__111283 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__111284 = (idx + (1));
v = G__111283;
idx = G__111284;
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
var G__111285 = cljs.core.conj.call(null,v,f.call(null));
var G__111286 = (idx + (1));
v = G__111285;
idx = G__111286;
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
format.cljs$lang$applyTo = (function (arglist__111287){
var fmt = cljs.core.first(arglist__111287);
var args = cljs.core.rest(arglist__111287);
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
var G__111288__delegate = function (x,more){
var xs = cljs.core.cons.call(null,x,more);
var s = taoensso.encore.sprint_str.call(null,xs);
return taoensso.encore.log__GT_console.call(null,s);
};
var G__111288 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__111288__delegate.call(this,x,more);};
G__111288.cljs$lang$maxFixedArity = 1;
G__111288.cljs$lang$applyTo = (function (arglist__111289){
var x = cljs.core.first(arglist__111289);
var more = cljs.core.rest(arglist__111289);
return G__111288__delegate(x,more);
});
G__111288.cljs$core$IFn$_invoke$arity$variadic = G__111288__delegate;
return G__111288;
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
var substr__delegate = function (s,start_idx,p__111290){
var vec__111297 = p__111290;
var _QMARK_max_len = cljs.core.nth.call(null,vec__111297,(0),null);
if(cljs.core.truth_((function (){var vec__111298 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e111300){if((e111300 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111300;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111300;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111298,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111298,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111299 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111301){if((e111301 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111301;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111301;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111299,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111299,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1156,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__111302 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__111302,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__111302,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__111290 = null;
if (arguments.length > 2) {
  p__111290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return substr__delegate.call(this,s,start_idx,p__111290);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__111303){
var s = cljs.core.first(arglist__111303);
arglist__111303 = cljs.core.next(arglist__111303);
var start_idx = cljs.core.first(arglist__111303);
var p__111290 = cljs.core.rest(arglist__111303);
return substr__delegate(s,start_idx,p__111290);
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
join_once.cljs$lang$applyTo = (function (arglist__111304){
var separator = cljs.core.first(arglist__111304);
var coll = cljs.core.rest(arglist__111304);
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
path.cljs$lang$applyTo = (function (arglist__111305){
var parts = cljs.core.seq(arglist__111305);
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
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__111306_SHARP_){
if(cljs.core.truth_(p1__111306_SHARP_)){
return p1__111306_SHARP_;
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
memoized.cljs$lang$applyTo = (function (arglist__111307){
var cache = cljs.core.first(arglist__111307);
arglist__111307 = cljs.core.next(arglist__111307);
var f = cljs.core.first(arglist__111307);
var args = cljs.core.rest(arglist__111307);
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
var G__111374__delegate = function (p__111342){
var vec__111343 = p__111342;
var arg1 = cljs.core.nth.call(null,vec__111343,(0),null);
var argn = cljs.core.nthnext.call(null,vec__111343,(1));
var args = vec__111343;
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
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__111343,arg1,argn,args,cache){
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
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__111343,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__111343,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__111343,arg1,argn,args,cache))
));
}
};
var G__111374 = function (var_args){
var p__111342 = null;
if (arguments.length > 0) {
  p__111342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111374__delegate.call(this,p__111342);};
G__111374.cljs$lang$maxFixedArity = 0;
G__111374.cljs$lang$applyTo = (function (arglist__111375){
var p__111342 = cljs.core.seq(arglist__111375);
return G__111374__delegate(p__111342);
});
G__111374.cljs$core$IFn$_invoke$arity$variadic = G__111374__delegate;
return G__111374;
})()
;
;})(cache))
});
var memoize_STAR___2 = (function (ttl_ms,f){
var vec__111344_111376 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e111346){if((e111346 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111346;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111346;

}
}})();
var x__19401__auto___111377 = cljs.core.nth.call(null,vec__111344_111376,(0),null);
var _QMARK_x_err__19402__auto___111378 = cljs.core.nth.call(null,vec__111344_111376,(1),null);
var have_x_QMARK___19403__auto___111379 = (_QMARK_x_err__19402__auto___111378 == null);
var vec__111345_111380 = ((have_x_QMARK___19403__auto___111379)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__19401__auto___111377)], null);
}catch (e111347){if((e111347 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111347;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111347;

}
}})():null);
var pass_QMARK___19404__auto___111381 = cljs.core.nth.call(null,vec__111345_111380,(0),null);
var _QMARK_pred_err__19405__auto___111382 = cljs.core.nth.call(null,vec__111345_111380,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto___111381)){
var or__3622__auto___111383 = true;
if(or__3622__auto___111383){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1334,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___19403__auto___111379)?x__19401__auto___111377:_QMARK_x_err__19402__auto___111378),_QMARK_pred_err__19405__auto___111382);
}

var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__111384__delegate = function (p__111348){
var vec__111349 = p__111348;
var arg1 = cljs.core.nth.call(null,vec__111349,(0),null);
var argn = cljs.core.nthnext.call(null,vec__111349,(1));
var args = vec__111349;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_111385 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_111385,vec__111349,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_111385,vec__111349,arg1,argn,args,cache){
return (function (m_STAR_,k,p__111350){
var vec__111351 = p__111350;
var dv = cljs.core.nth.call(null,vec__111351,(0),null);
var udt = cljs.core.nth.call(null,vec__111351,(1),null);
var cv = vec__111351;
if(((instant_111385 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_111385,vec__111349,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_111385,vec__111349,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__111352 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__111349,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3610__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3610__auto____$1){
var vec__111354 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__111354,(0),null);
var udt = cljs.core.nth.call(null,vec__111354,(1),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__111349,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__111349,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__111349,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__111352,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__111384 = function (var_args){
var p__111348 = null;
if (arguments.length > 0) {
  p__111348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111384__delegate.call(this,p__111348);};
G__111384.cljs$lang$maxFixedArity = 0;
G__111384.cljs$lang$applyTo = (function (arglist__111386){
var p__111348 = cljs.core.seq(arglist__111386);
return G__111384__delegate(p__111348);
});
G__111384.cljs$core$IFn$_invoke$arity$variadic = G__111384__delegate;
return G__111384;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){
var vec__111355_111387 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e111357){if((e111357 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111357;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111357;

}
}})();
var x__19401__auto___111388 = cljs.core.nth.call(null,vec__111355_111387,(0),null);
var _QMARK_x_err__19402__auto___111389 = cljs.core.nth.call(null,vec__111355_111387,(1),null);
var have_x_QMARK___19403__auto___111390 = (_QMARK_x_err__19402__auto___111389 == null);
var vec__111356_111391 = ((have_x_QMARK___19403__auto___111390)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__19401__auto___111388)], null);
}catch (e111358){if((e111358 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111358;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111358;

}
}})():null);
var pass_QMARK___19404__auto___111392 = cljs.core.nth.call(null,vec__111356_111391,(0),null);
var _QMARK_pred_err__19405__auto___111393 = cljs.core.nth.call(null,vec__111356_111391,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto___111392)){
var or__3622__auto___111394 = true;
if(or__3622__auto___111394){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1369,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___19403__auto___111390)?x__19401__auto___111388:_QMARK_x_err__19402__auto___111389),_QMARK_pred_err__19405__auto___111393);
}

var vec__111359_111395 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e111361){if((e111361 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111361;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111361;

}
}})();
var x__19401__auto___111396 = cljs.core.nth.call(null,vec__111359_111395,(0),null);
var _QMARK_x_err__19402__auto___111397 = cljs.core.nth.call(null,vec__111359_111395,(1),null);
var have_x_QMARK___19403__auto___111398 = (_QMARK_x_err__19402__auto___111397 == null);
var vec__111360_111399 = ((have_x_QMARK___19403__auto___111398)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__19401__auto___111396)], null);
}catch (e111362){if((e111362 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111362;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111362;

}
}})():null);
var pass_QMARK___19404__auto___111400 = cljs.core.nth.call(null,vec__111360_111399,(0),null);
var _QMARK_pred_err__19405__auto___111401 = cljs.core.nth.call(null,vec__111360_111399,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto___111400)){
var or__3622__auto___111402 = true;
if(or__3622__auto___111402){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",1370,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___19403__auto___111398)?x__19401__auto___111396:_QMARK_x_err__19402__auto___111397),_QMARK_pred_err__19405__auto___111401);
}

var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__111403__delegate = function (p__111363){
var vec__111364 = p__111363;
var arg1 = cljs.core.nth.call(null,vec__111364,(0),null);
var argn = cljs.core.nthnext.call(null,vec__111364,(1));
var args = vec__111364;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_111404 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_111404,vec__111364,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_111404,vec__111364,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__111365){
var vec__111366 = p__111365;
var dv = cljs.core.nth.call(null,vec__111366,(0),null);
var udt = cljs.core.nth.call(null,vec__111366,(1),null);
var _ = cljs.core.nth.call(null,vec__111366,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__111366,(3),null);
var cv = vec__111366;
if(((instant_111404 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_111404,vec__111364,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state){
return (function (p1__111309_SHARP_){
return cljs.core.nth.call(null,p1__111309_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state){
return (function (p1__111308_SHARP_){
return cljs.core.nth.call(null,p1__111308_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state){
return (function (k){
var vec__111367 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__111367,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__111367,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__111367,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__111367,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_111404,vec__111364,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_111404,vec__111364,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__111368 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111364,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3610__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3610__auto____$1){
var or__3622__auto__ = (_QMARK_instant == null);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var vec__111372 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__111372,(0),null);
var udt = cljs.core.nth.call(null,vec__111372,(1),null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111364,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111364,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111364,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__111368,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111368,dv,vec__111364,arg1,argn,args,state){
return (function (m){
var temp__4126__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__111373 = temp__4126__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__111373,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__111373,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__111373,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__111373,(3),null);
var cv = vec__111373;
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__111368,dv,vec__111364,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__111403 = function (var_args){
var p__111363 = null;
if (arguments.length > 0) {
  p__111363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111403__delegate.call(this,p__111363);};
G__111403.cljs$lang$maxFixedArity = 0;
G__111403.cljs$lang$applyTo = (function (arglist__111405){
var p__111363 = cljs.core.seq(arglist__111405);
return G__111403__delegate(p__111363);
});
G__111403.cljs$core$IFn$_invoke$arity$variadic = G__111403__delegate;
return G__111403;
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
var G__111406__delegate = function (args){
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
var G__111406 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111406__delegate.call(this,args);};
G__111406.cljs$lang$maxFixedArity = 0;
G__111406.cljs$lang$applyTo = (function (arglist__111407){
var args = cljs.core.seq(arglist__111407);
return G__111406__delegate(args);
});
G__111406.cljs$core$IFn$_invoke$arity$variadic = G__111406__delegate;
return G__111406;
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
var G__111426__delegate = function (p__111417){
var vec__111418 = p__111417;
var id = cljs.core.nth.call(null,vec__111418,(0),null);
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_111427 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_111427,vec__111418,id,state){
return (function (p__111419){
var vec__111420 = p__111419;
var _ = cljs.core.nth.call(null,vec__111420,(0),null);
var m = cljs.core.nth.call(null,vec__111420,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__111420,_,m,instant_111427,vec__111418,id,state){
return (function (m_STAR_,id__$1,p__111421){
var vec__111422 = p__111421;
var udt_window_start = cljs.core.nth.call(null,vec__111422,(0),null);
var ncalls = cljs.core.nth.call(null,vec__111422,(1),null);
if(((instant_111427 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__111420,_,m,instant_111427,vec__111418,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m))], null);
});})(instant_111427,vec__111418,id,state))
);
} else {
}

return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);
return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__111418,id,state){
return (function (p__111423){
var vec__111424 = p__111423;
var _ = cljs.core.nth.call(null,vec__111424,(0),null);
var m = cljs.core.nth.call(null,vec__111424,(1),null);
var temp__4124__auto__ = m.call(null,id);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__111425 = temp__4124__auto__;
var udt_window_start = cljs.core.nth.call(null,vec__111425,(0),null);
var ncalls = cljs.core.nth.call(null,vec__111425,(1),null);
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
});})(instant,vec__111418,id,state))
);
})(),(0));
};
var G__111426 = function (var_args){
var p__111417 = null;
if (arguments.length > 0) {
  p__111417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111426__delegate.call(this,p__111417);};
G__111426.cljs$lang$maxFixedArity = 0;
G__111426.cljs$lang$applyTo = (function (arglist__111428){
var p__111417 = cljs.core.seq(arglist__111428);
return G__111426__delegate(p__111417);
});
G__111426.cljs$core$IFn$_invoke$arity$variadic = G__111426__delegate;
return G__111426;
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
var G__111429__delegate = function (args){
var temp__4124__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var backoff_ms = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__111429 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__111429__delegate.call(this,args);};
G__111429.cljs$lang$maxFixedArity = 0;
G__111429.cljs$lang$applyTo = (function (arglist__111430){
var args = cljs.core.seq(arglist__111430);
return G__111429__delegate(args);
});
G__111429.cljs$core$IFn$_invoke$arity$variadic = G__111429__delegate;
return G__111429;
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
sayp.cljs$lang$applyTo = (function (arglist__111439){
var xs = cljs.core.seq(arglist__111439);
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
logp.cljs$lang$applyTo = (function (arglist__111440){
var xs = cljs.core.seq(arglist__111440);
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
sayf.cljs$lang$applyTo = (function (arglist__111441){
var fmt = cljs.core.first(arglist__111441);
var xs = cljs.core.rest(arglist__111441);
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
logf.cljs$lang$applyTo = (function (arglist__111442){
var fmt = cljs.core.first(arglist__111442);
var xs = cljs.core.rest(arglist__111442);
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
return (scored_levels.call(null,(function (){var vec__111431 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e111433){if((e111433 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111433;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111433;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111431,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111431,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111432 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111434){if((e111434 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111434;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111434;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111432,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111432,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1616,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__111435 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e111437){if((e111437 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111437;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111437;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111435,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111435,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111436 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111438){if((e111438 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111438;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111438;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111436,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111436,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1617,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
tracef.cljs$lang$applyTo = (function (arglist__111443){
var fmt = cljs.core.first(arglist__111443);
var xs = cljs.core.rest(arglist__111443);
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
debugf.cljs$lang$applyTo = (function (arglist__111444){
var fmt = cljs.core.first(arglist__111444);
var xs = cljs.core.rest(arglist__111444);
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
infof.cljs$lang$applyTo = (function (arglist__111445){
var fmt = cljs.core.first(arglist__111445);
var xs = cljs.core.rest(arglist__111445);
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
warnf.cljs$lang$applyTo = (function (arglist__111446){
var fmt = cljs.core.first(arglist__111446);
var xs = cljs.core.rest(arglist__111446);
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
errorf.cljs$lang$applyTo = (function (arglist__111447){
var fmt = cljs.core.first(arglist__111447);
var xs = cljs.core.rest(arglist__111447);
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
fatalf.cljs$lang$applyTo = (function (arglist__111448){
var fmt = cljs.core.first(arglist__111448);
var xs = cljs.core.rest(arglist__111448);
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
reportf.cljs$lang$applyTo = (function (arglist__111449){
var fmt = cljs.core.first(arglist__111449);
var xs = cljs.core.rest(arglist__111449);
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
if(cljs.core.truth_((function (){var vec__111455 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e111457){if((e111457 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111457;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111457;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111455,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111455,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111456 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111458){if((e111458 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111458;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111458;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111456,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111456,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1662,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
var G__111459 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__111459) {
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
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__111463,callback){
var map__111483 = p__111463;
var map__111483__$1 = ((cljs.core.seq_QMARK_.call(null,map__111483))?cljs.core.apply.call(null,cljs.core.hash_map,map__111483):map__111483);
var opts = map__111483__$1;
var resp_type = cljs.core.get.call(null,map__111483__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var timeout_ms = cljs.core.get.call(null,map__111483__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var headers = cljs.core.get.call(null,map__111483__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__111483__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__111483__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
if(cljs.core.truth_((function (){var vec__111484 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e111486){if((e111486 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111486;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111486;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111484,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111484,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111485 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__19401__auto__)], null);
}catch (e111487){if((e111487 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111487;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111487;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111485,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111485,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1694,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
var method_STAR_ = (function (){var G__111490 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__111490) {
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
var vec__111489 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__111489,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__111489,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__111491_111503 = xhr;
goog.events.listenOnce(G__111491_111503,goog.net.EventType.READY,((function (G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method))
);

goog.events.listenOnce(G__111491_111503,goog.net.EventType.COMPLETE,((function (G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__111497 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (p1__111462_SHARP_,p2__111461_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__111461_SHARP_,p1__111462_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method))
;
var expr__111498 = [cljs.core.str(_QMARK_content_type)].join('');
if(pred__111497.call(null,"/edn",expr__111498)){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(pred__111497.call(null,"/json",expr__111498)){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(pred__111497.call(null,"/xml",expr__111498)){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(pred__111497.call(null,"/html",expr__111498)){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__111501 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__111501) {
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
}catch (e111500){var e = e111500;
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
});})(G__111491_111503,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__111489,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__111483,map__111483__$1,opts,resp_type,timeout_ms,headers,params,method))
);

G__111491_111503.setTimeoutInterval((function (){var or__3622__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})());

G__111491_111503.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e111488){if((e111488 instanceof Error)){
var e = e111488;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e111488;

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
var url_decode__delegate = function (s,p__111505){
var vec__111507 = p__111505;
var encoding = cljs.core.nth.call(null,vec__111507,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__111505 = null;
if (arguments.length > 1) {
  p__111505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__111505);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__111508){
var s = cljs.core.first(arglist__111508);
var p__111505 = cljs.core.rest(arglist__111508);
return url_decode__delegate(s,p__111505);
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
return (function iter__111517(s__111518){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__111518__$1 = s__111518;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__111518__$1);
if(temp__4126__auto__){
var s__111518__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111518__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__111518__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__111520 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__111519 = (0);
while(true){
if((i__111519 < size__4377__auto__)){
var vec__111523 = cljs.core._nth.call(null,c__4376__auto__,i__111519);
var k = cljs.core.nth.call(null,vec__111523,(0),null);
var v = cljs.core.nth.call(null,vec__111523,(1),null);
cljs.core.chunk_append.call(null,b__111520,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3622__auto__ = cljs.core.seq.call(null,v);
if(or__3622__auto__){
return or__3622__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__111525 = (i__111519 + (1));
i__111519 = G__111525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111520),iter__111517.call(null,cljs.core.chunk_rest.call(null,s__111518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111520),null);
}
} else {
var vec__111524 = cljs.core.first.call(null,s__111518__$2);
var k = cljs.core.nth.call(null,vec__111524,(0),null);
var v = cljs.core.nth.call(null,vec__111524,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3622__auto__ = cljs.core.seq.call(null,v);
if(or__3622__auto__){
return or__3622__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),iter__111517.call(null,cljs.core.rest.call(null,s__111518__$2)));
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
var parse_query_params__delegate = function (s,p__111526){
var vec__111533 = p__111526;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__111533,(0),null);
var encoding = cljs.core.nth.call(null,vec__111533,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(!(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__111533,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4124__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__111534 = temp__4124__auto__;
var k = cljs.core.nth.call(null,vec__111534,(0),null);
var v = cljs.core.nth.call(null,vec__111534,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__111533,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var vec__111535 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e111537){if((e111537 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111537;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111537;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111535,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111535,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111536 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111538){if((e111538 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111538;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111538;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111536,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111536,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1870,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var parse_query_params = function (s,var_args){
var p__111526 = null;
if (arguments.length > 1) {
  p__111526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return parse_query_params__delegate.call(this,s,p__111526);};
parse_query_params.cljs$lang$maxFixedArity = 1;
parse_query_params.cljs$lang$applyTo = (function (arglist__111539){
var s = cljs.core.first(arglist__111539);
var p__111526 = cljs.core.rest(arglist__111539);
return parse_query_params__delegate(s,p__111526);
});
parse_query_params.cljs$core$IFn$_invoke$arity$variadic = parse_query_params__delegate;
return parse_query_params;
})()
;
taoensso.encore.merge_url_with_query_string = (function merge_url_with_query_string(url,m){
var vec__111541 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__111541,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__111541,(1),null);
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
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__111542){
var vec__111544 = p__111542;
var nattempt = cljs.core.nth.call(null,vec__111544,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3622__auto__ = nattempt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__111542 = null;
if (arguments.length > 1) {
  p__111542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__111542);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__111545){
var nullary_f = cljs.core.first(arglist__111545);
var p__111542 = cljs.core.rest(arglist__111545);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__111542);
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
var vec__111550 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e111552){if((e111552 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111552;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111552;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111550,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111550,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111551 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111553){if((e111553 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111553;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111553;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111551,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111551,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1925,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function as_int(x){
if(cljs.core.truth_(x)){
var vec__111558 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e111560){if((e111560 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111560;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111560;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111558,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111558,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111559 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111561){if((e111561 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111561;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111561;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111559,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111559,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1926,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function as_float(x){
if(cljs.core.truth_(x)){
var vec__111566 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e111568){if((e111568 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111568;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111568;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__111566,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__111566,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__111567 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__19401__auto__)], null);
}catch (e111569){if((e111569 instanceof java.lang.Throwable)){
var t__19293__auto__ = e111569;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e111569;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__111567,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__111567,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1927,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;

//# sourceMappingURL=encore.js.map