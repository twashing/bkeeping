// Compiled by ClojureScript 0.0-2505
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('clojure.string');
taoensso.sente.tracef = taoensso.encore.tracef;

taoensso.sente.debugf = taoensso.encore.debugf;

taoensso.sente.infof = taoensso.encore.infof;

taoensso.sente.warnf = taoensso.encore.warnf;

taoensso.sente.errorf = taoensso.encore.errorf;
taoensso.sente.set_logging_level_BANG_ = (function set_logging_level_BANG_(level){
return cljs.core.reset_BANG_.call(null,taoensso.encore.logging_level,level);
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-call "/my-post-route"
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
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__162650 = x;
var ev_id = cljs.core.nth.call(null,vec__162650,(0),null);
var _ = cljs.core.nth.call(null,vec__162650,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function as_event(x){
if(taoensso.sente.event_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function assert_event(x){
var temp__4126__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4126__auto__)){
var _QMARK_err = temp__4126__auto__;
var err_fmt = [cljs.core.str((function (){var G__162652 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__162652) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function event_msg_QMARK_(x){
var and__3610__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__3610__auto__){
var and__3610__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(and__3610__auto____$1){
var map__162659 = x;
var map__162659__$1 = ((cljs.core.seq_QMARK_.call(null,map__162659))?cljs.core.apply.call(null,cljs.core.hash_map,map__162659):map__162659);
var event = cljs.core.get.call(null,map__162659__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state = cljs.core.get.call(null,map__162659__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn = cljs.core.get.call(null,map__162659__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.call(null,map__162659__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
return (taoensso.encore.chan_QMARK_.call(null,ch_recv)) && (cljs.core.ifn_QMARK_.call(null,send_fn)) && (taoensso.encore.atom_QMARK_.call(null,state)) && (taoensso.sente.event_QMARK_.call(null,event));
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
/**
* Note that cb reply need _not_ be `event` form!
*/
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
* pstr->clj
*/
taoensso.sente.unpack_STAR_ = (function unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var vec__162666 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pstr], null);
}catch (e162668){if((e162668 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162668;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162668;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162666,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162666,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162667 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__17192__auto__)], null);
}catch (e162669){if((e162669 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162669;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162669;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162667,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162667,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",208,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pstr","pstr",221763868,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
})());
}catch (e162665){var t = e162665;
taoensso.sente.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
* clj->prefixed-pstr
*/
taoensso.sente.pack_STAR_ = (function() {
var pack_STAR_ = null;
var pack_STAR___3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});
var pack_STAR___4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});
pack_STAR_ = function(packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
switch(arguments.length){
case 3:
return pack_STAR___3.call(this,packer,_QMARK_packer_meta,clj);
case 4:
return pack_STAR___4.call(this,packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pack_STAR_.cljs$core$IFn$_invoke$arity$3 = pack_STAR___3;
pack_STAR_.cljs$core$IFn$_invoke$arity$4 = pack_STAR___4;
return pack_STAR_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.sente.pack = (function() { 
var pack__delegate = function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.sente.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
};
var pack = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pack__delegate.call(this,args);};
pack.cljs$lang$maxFixedArity = 0;
pack.cljs$lang$applyTo = (function (arglist__162670){
var args = cljs.core.seq(arglist__162670);
return pack__delegate(args);
});
pack.cljs$core$IFn$_invoke$arity$variadic = pack__delegate;
return pack;
})()
;
/**
* prefixed-pstr->[clj ?cb-uuid]
*/
taoensso.sente.unpack = (function unpack(packer,prefixed_pstr){
var vec__162677_162683 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefixed_pstr], null);
}catch (e162679){if((e162679 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162679;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162679;

}
}})();
var x__17192__auto___162684 = cljs.core.nth.call(null,vec__162677_162683,(0),null);
var _QMARK_x_err__17193__auto___162685 = cljs.core.nth.call(null,vec__162677_162683,(1),null);
var have_x_QMARK___17194__auto___162686 = (_QMARK_x_err__17193__auto___162685 == null);
var vec__162678_162687 = ((have_x_QMARK___17194__auto___162686)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__17192__auto___162684)], null);
}catch (e162680){if((e162680 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162680;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162680;

}
}})():null);
var pass_QMARK___17195__auto___162688 = cljs.core.nth.call(null,vec__162678_162687,(0),null);
var _QMARK_pred_err__17196__auto___162689 = cljs.core.nth.call(null,vec__162678_162687,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto___162688)){
var or__3622__auto___162690 = true;
if(or__3622__auto___162690){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",235,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___17194__auto___162686)?x__17192__auto___162684:_QMARK_x_err__17193__auto___162685),_QMARK_pred_err__17196__auto___162689);
}

var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__162682 = prefix;
switch (G__162682) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__162681 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__162681,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__162681,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.sente.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj162693 = {};
return obj162693;
})();

taoensso.sente.chsk_init_BANG_ = (function chsk_init_BANG_(chsk){
if((function (){var and__3610__auto__ = chsk;
if(and__3610__auto__){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__4266__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3622__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_destroy_BANG_ = (function chsk_destroy_BANG_(chsk){
if((function (){var and__3610__auto__ = chsk;
if(and__3610__auto__){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__4266__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3622__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_reconnect_BANG_ = (function chsk_reconnect_BANG_(chsk){
if((function (){var and__3610__auto__ = chsk;
if(and__3610__auto__){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__4266__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3622__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_send_BANG__STAR_ = (function chsk_send_BANG__STAR_(chsk,ev,opts){
if((function (){var and__3610__auto__ = chsk;
if(and__3610__auto__){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__4266__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3622__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});

/**
* Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
*/
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){
return chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});
var chsk_send_BANG___3 = (function (chsk,ev,opts){
taoensso.sente.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 3:
return chsk_send_BANG___3.call(this,chsk,ev,_QMARK_timeout_ms);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = chsk_send_BANG___3;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4126__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto__)){
var cb_uuid = temp__4126__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4126__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4126__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__162694,merge_state){
var map__162697 = p__162694;
var map__162697__$1 = ((cljs.core.seq_QMARK_.call(null,map__162697))?cljs.core.apply.call(null,cljs.core.hash_map,map__162697):map__162697);
var chsk = map__162697__$1;
var state_ = cljs.core.get.call(null,map__162697__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var chs = cljs.core.get.call(null,map__162697__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var vec__162698 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__162697,map__162697__$1,chsk,state_,chs){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__162697,map__162697__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.call(null,vec__162698,(0),null);
var new_state = cljs.core.nth.call(null,vec__162698,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
* Experimental, undocumented. Allows a core.async channel to be provided
* instead of a cb-fn. The channel will receive values of form
* [<event-id>.cb <reply>].
*/
taoensso.sente.cb_chan_as_fn = (function cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var vec__162704_162709 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb], null);
}catch (e162706){if((e162706 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162706;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162706;

}
}})();
var x__17192__auto___162710 = cljs.core.nth.call(null,vec__162704_162709,(0),null);
var _QMARK_x_err__17193__auto___162711 = cljs.core.nth.call(null,vec__162704_162709,(1),null);
var have_x_QMARK___17194__auto___162712 = (_QMARK_x_err__17193__auto___162711 == null);
var vec__162705_162713 = ((have_x_QMARK___17194__auto___162712)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.chan_QMARK_).call(null,x__17192__auto___162710)], null);
}catch (e162707){if((e162707 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162707;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162707;

}
}})():null);
var pass_QMARK___17195__auto___162714 = cljs.core.nth.call(null,vec__162705_162713,(0),null);
var _QMARK_pred_err__17196__auto___162715 = cljs.core.nth.call(null,vec__162705_162713,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto___162714)){
var or__3622__auto___162716 = true;
if(or__3622__auto___162716){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",696,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null)),((have_x_QMARK___17194__auto___162712)?x__17192__auto___162710:_QMARK_x_err__17193__auto___162711),_QMARK_pred_err__17196__auto___162715);
}

taoensso.sente.assert_event.call(null,ev);

var vec__162708 = ev;
var ev_id = cljs.core.nth.call(null,vec__162708,(0),null);
var _ = cljs.core.nth.call(null,vec__162708,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__162708,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__162708,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){
taoensso.sente.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = (function (){var vec__162725 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
}catch (e162727){if((e162727 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162727;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162727;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162725,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162725,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162726 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__17192__auto__)], null);
}catch (e162728){if((e162728 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162728;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162728;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162726,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162726,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",707,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clj","clj",980036099,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
})();
var seq__162729 = cljs.core.seq.call(null,buffered_evs);
var chunk__162730 = null;
var count__162731 = (0);
var i__162732 = (0);
while(true){
if((i__162732 < count__162731)){
var ev = cljs.core._nth.call(null,chunk__162730,i__162732);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__162733 = seq__162729;
var G__162734 = chunk__162730;
var G__162735 = count__162731;
var G__162736 = (i__162732 + (1));
seq__162729 = G__162733;
chunk__162730 = G__162734;
count__162731 = G__162735;
i__162732 = G__162736;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__162729);
if(temp__4126__auto__){
var seq__162729__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__162729__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__162729__$1);
var G__162737 = cljs.core.chunk_rest.call(null,seq__162729__$1);
var G__162738 = c__4409__auto__;
var G__162739 = cljs.core.count.call(null,c__4409__auto__);
var G__162740 = (0);
seq__162729 = G__162737;
chunk__162730 = G__162738;
count__162731 = G__162739;
i__162732 = G__162740;
continue;
} else {
var ev = cljs.core.first.call(null,seq__162729__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__162741 = cljs.core.next.call(null,seq__162729__$1);
var G__162742 = null;
var G__162743 = (0);
var G__162744 = (0);
seq__162729 = G__162741;
chunk__162730 = G__162742;
count__162731 = G__162743;
i__162732 = G__162744;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function handle_when_handshake_BANG_(chsk,clj){
taoensso.sente.tracef.call(null,"handle-when-handshake!: %s",clj);

if((cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)))){
var vec__162747 = clj;
var _ = cljs.core.nth.call(null,vec__162747,(0),null);
var vec__162748 = cljs.core.nth.call(null,vec__162747,(1),null);
var uid = cljs.core.nth.call(null,vec__162748,(0),null);
var csrf_token = cljs.core.nth.call(null,vec__162748,(1),null);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token))){
taoensso.sente.warnf.call(null,"NO CSRF TOKEN AVAILABLE FOR USE BY SENTE");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null));

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__162749){
var vec__162751 = p__162749;
var nattempt = cljs.core.nth.call(null,vec__162751,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3622__auto__ = nattempt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__162749 = null;
if (arguments.length > 1) {
  p__162749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__162749);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__162752){
var nullary_f = cljs.core.first(arglist__162752);
var p__162749 = cljs.core.rest(arglist__162752);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__162749);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;

/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4225__auto__,k__4226__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return cljs.core._lookup.call(null,this__4225__auto____$1,k__4226__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k162754,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__162756 = (((k162754 instanceof cljs.core.Keyword))?k162754.fqn:null);
switch (G__162756) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k162754,else__4228__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4239__auto__,writer__4240__auto__,opts__4241__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
var pr_pair__4242__auto__ = ((function (this__4239__auto____$1){
return (function (keyval__4243__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,cljs.core.pr_writer,""," ","",opts__4241__auto__,keyval__4243__auto__);
});})(this__4239__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,pr_pair__4242__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4241__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4223__auto__){
var self__ = this;
var this__4223__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4219__auto__){
var self__ = this;
var this__4219__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4220__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4221__auto__,other__4222__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4234__auto__,k__4235__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4235__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4234__auto____$1),self__.__meta),k__4235__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4235__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__162753){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__162757 = cljs.core.keyword_identical_QMARK_;
var expr__162758 = k__4233__auto__;
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__162758))){
return (new taoensso.sente.ChWebSocket(G__162753,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__162753,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__162753,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__162753,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__162753,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__162753,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__162753,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__162753,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__162753,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__162753,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162757.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__162758))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__162753,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__162753),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__162753){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__162753,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4230__auto__,entry__4231__auto__){
var self__ = this;
var this__4230__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4231__auto__)){
return cljs.core._assoc.call(null,this__4230__auto____$1,cljs.core._nth.call(null,entry__4231__auto__,(0)),cljs.core._nth.call(null,entry__4231__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4230__auto____$1,entry__4231__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__162760){
var self__ = this;
var map__162761 = p__162760;
var map__162761__$1 = ((cljs.core.seq_QMARK_.call(null,map__162761))?cljs.core.apply.call(null,cljs.core.hash_map,map__162761):map__162761);
var opts = map__162761__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__162761__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__162761__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__162761__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4126__auto___162802 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___162802)){
var cb_uuid_162803 = temp__4126__auto___162802;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_162803], null),(function (){var vec__162762 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e162764){if((e162764 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162764;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162764;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162762,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162762,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162763 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17192__auto__)], null);
}catch (e162765){if((e162765 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162765;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162765;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162763,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162763,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",751,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
})());

var temp__4126__auto___162804__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___162804__$1)){
var timeout_ms_162805 = temp__4126__auto___162804__$1;
var c__7043__auto___162806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_162776){
var state_val_162777 = (state_162776[(1)]);
if((state_val_162777 === (5))){
var inst_162774 = (state_162776[(2)]);
var state_162776__$1 = state_162776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_162776__$1,inst_162774);
} else {
if((state_val_162777 === (4))){
var state_162776__$1 = state_162776;
var statearr_162778_162807 = state_162776__$1;
(statearr_162778_162807[(2)] = null);

(statearr_162778_162807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162777 === (3))){
var inst_162769 = (state_162776[(7)]);
var inst_162771 = inst_162769.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_162776__$1 = state_162776;
var statearr_162779_162808 = state_162776__$1;
(statearr_162779_162808[(2)] = inst_162771);

(statearr_162779_162808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162777 === (2))){
var inst_162769 = (state_162776[(7)]);
var inst_162768 = (state_162776[(2)]);
var inst_162769__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_162776__$1 = (function (){var statearr_162780 = state_162776;
(statearr_162780[(8)] = inst_162768);

(statearr_162780[(7)] = inst_162769__$1);

return statearr_162780;
})();
if(cljs.core.truth_(inst_162769__$1)){
var statearr_162781_162809 = state_162776__$1;
(statearr_162781_162809[(1)] = (3));

} else {
var statearr_162782_162810 = state_162776__$1;
(statearr_162782_162810[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_162777 === (1))){
var inst_162766 = cljs.core.async.timeout.call(null,timeout_ms_162805);
var state_162776__$1 = state_162776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_162776__$1,(2),inst_162766);
} else {
return null;
}
}
}
}
}
});})(c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__6987__auto__,c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_162786 = [null,null,null,null,null,null,null,null,null];
(statearr_162786[(0)] = state_machine__6988__auto__);

(statearr_162786[(1)] = (1));

return statearr_162786;
});
var state_machine__6988__auto____1 = (function (state_162776){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_162776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e162787){if((e162787 instanceof Object)){
var ex__6991__auto__ = e162787;
var statearr_162788_162811 = state_162776;
(statearr_162788_162811[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_162776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e162787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__162812 = state_162776;
state_162776 = G__162812;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_162776){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_162776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__7045__auto__ = (function (){var statearr_162789 = f__7044__auto__.call(null);
(statearr_162789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___162806);

return statearr_162789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___162806,timeout_ms_162805,temp__4126__auto___162804__$1,cb_uuid_162803,temp__4126__auto___162802,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__162761,map__162761__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e162790){if((e162790 instanceof Error)){
var e = e162790;
taoensso.sente.errorf.call(null,"Chsk send error: %s",e);

var temp__4126__auto___162813 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___162813)){
var cb_uuid_162814 = temp__4126__auto___162813;
var cb_fn_STAR__162815 = (function (){var or__3622__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_162814);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var vec__162791 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e162793){if((e162793 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162793;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162793;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162791,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162791,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162792 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17192__auto__)], null);
}catch (e162794){if((e162794 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162794;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162794;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162792,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162792,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto____$1 = false;
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",765,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
}
})();
cb_fn_STAR__162815.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e162790;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4126__auto__)){
var s = temp__4126__auto__;
return s.close();
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4126__auto__ = (function (){var or__3622__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var WebSocket = temp__4126__auto__;
((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1))
;
var temp__4124__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e162798){if((e162798 instanceof Error)){
var e = e162798;
taoensso.sente.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e162798;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__162799 = socket;
(G__162799["onerror"] = ((function (G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.sente.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__162799["onmessage"] = ((function (G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__162800 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__162800,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__162800,(1),null);
var or__3622__auto__ = (function (){var and__3610__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var temp__4124__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4124__auto____$1)){
var cb_uuid = temp__4124__auto____$1;
var temp__4124__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4124__auto____$2)){
var cb_fn = temp__4124__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__162799["onopen"] = ((function (G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__162799["onclose"] = ((function (G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__162799,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__162799;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4259__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4259__auto__,writer__4260__auto__){
return cljs.core._write.call(null,writer__4260__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__162755){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__162755),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__162755),null,cljs.core.dissoc.call(null,G__162755,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});


/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4225__auto__,k__4226__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return cljs.core._lookup.call(null,this__4225__auto____$1,k__4226__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k162817,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__162819 = (((k162817 instanceof cljs.core.Keyword))?k162817.fqn:null);
switch (G__162819) {
case "packer":
return self__.packer;

break;
case "state_":
return self__.state_;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
case "client-id":
return self__.client_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k162817,else__4228__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4239__auto__,writer__4240__auto__,opts__4241__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
var pr_pair__4242__auto__ = ((function (this__4239__auto____$1){
return (function (keyval__4243__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,cljs.core.pr_writer,""," ","",opts__4241__auto__,keyval__4243__auto__);
});})(this__4239__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4240__auto__,pr_pair__4242__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4241__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4223__auto__){
var self__ = this;
var this__4223__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4219__auto__){
var self__ = this;
var this__4219__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4220__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4221__auto__,other__4222__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4234__auto__,k__4235__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4235__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4234__auto____$1),self__.__meta),k__4235__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4235__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__162816){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__162820 = cljs.core.keyword_identical_QMARK_;
var expr__162821 = k__4233__auto__;
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(G__162816,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__162816,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__162816,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__162816,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__162816,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,G__162816,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__162820.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__162821))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,G__162816,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__162816),null));
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__162816){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,G__162816,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4230__auto__,entry__4231__auto__){
var self__ = this;
var this__4230__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4231__auto__)){
return cljs.core._assoc.call(null,this__4230__auto____$1,cljs.core._nth.call(null,entry__4231__auto__,(0)),cljs.core._nth.call(null,entry__4231__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4230__auto____$1,entry__4231__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__162823){
var self__ = this;
var map__162824 = p__162823;
var map__162824__$1 = ((cljs.core.seq_QMARK_.call(null,map__162824))?cljs.core.apply.call(null,cljs.core.hash_map,map__162824):map__162824);
var opts = map__162824__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__162824__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__162824__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__162824__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1,map__162824,map__162824__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__162825){
var map__162828 = p__162825;
var map__162828__$1 = ((cljs.core.seq_QMARK_.call(null,map__162828))?cljs.core.apply.call(null,cljs.core.hash_map,map__162828):map__162828);
var _QMARK_content = cljs.core.get.call(null,map__162828__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__162828__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__162829 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__162829,(0),null);
var _ = cljs.core.nth.call(null,vec__162829,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__162824,map__162824__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4126__auto__)){
var x = temp__4126__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function async_poll_for_update_BANG_(nattempt){
taoensso.sente.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)], null),((function (retry_BANG_,chsk__$1){
return (function ajax_cb(p__162835){
var map__162838 = p__162835;
var map__162838__$1 = ((cljs.core.seq_QMARK_.call(null,map__162838))?cljs.core.apply.call(null,cljs.core.hash_map,map__162838):map__162838);
var _QMARK_content = cljs.core.get.call(null,map__162838__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__162838__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
if(cljs.core.truth_(_QMARK_error)){
if((cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))) || (cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"abort","abort",521193198)))){
return async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__162839 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__162839,(0),null);
var _ = cljs.core.nth.call(null,vec__162839,(1),null);
var or__3622__auto___162841 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(or__3622__auto___162841)){
} else {
var buffered_evs_162842 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_162842);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4259__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4259__auto__,writer__4260__auto__){
return cljs.core._write.call(null,writer__4260__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__162818){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__162818),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__162818),null,cljs.core.dissoc.call(null,G__162818,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});

/**
* (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
* 
* * path       - As provided to client-side `make-channel-socket!` fn
* (usu. "/chsk").
* * websocket? - True for WebSocket connections, false for Ajax (long-polling)
* connections.
* * window-location - Map with keys:
* :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
* :protocol ; "http:" ; Note the :
* :hostname ; "example.org"
* :host     ; "example.org:80"
* :pathname ; "/foo/bar"
* :search   ; "?q=baz"
* :hash     ; "#bang"
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
*/
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__162843,websocket_QMARK_){
var map__162845 = p__162843;
var map__162845__$1 = ((cljs.core.seq_QMARK_.call(null,map__162845))?cljs.core.apply.call(null,cljs.core.hash_map,map__162845):map__162845);
var window_location = map__162845__$1;
var pathname = cljs.core.get.call(null,map__162845__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var host = cljs.core.get.call(null,map__162845__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var protocol = cljs.core.get.call(null,map__162845__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__3622__auto__ = path;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
* Returns a map with keys:
* :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
* ; May `put!` (inject) arbitrary `event`s to this channel.
* :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
* :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
* :chsk    ; IChSocket implementer. You can usu. ignore this.
* 
* Common options:
* :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
* :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
* ; number of milliseconds.
* :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
* :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
* :packer       ; :edn (default), or an IPacker implementation (experimental).
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (path,p__162846){
var vec__162859 = p__162846;
var map__162860 = cljs.core.nth.call(null,vec__162859,(0),null);
var map__162860__$1 = ((cljs.core.seq_QMARK_.call(null,map__162860))?cljs.core.apply.call(null,cljs.core.hash_map,map__162860):map__162860);
var opts = map__162860__$1;
var client_id = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var chsk_url_fn = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var ws_kalive_ms = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var recv_buf_or_n = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var type = cljs.core.get.call(null,map__162860__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__162859,(1),null);
if(cljs.core.truth_((function (){var vec__162861 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
}catch (e162863){if((e162863 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162863;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162863;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162861,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162861,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162862 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,x__17192__auto__)], null);
}catch (e162864){if((e162864 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162864;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162864;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162862,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162862,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",981,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.truth_((function (){var vec__162865 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null);
}catch (e162867){if((e162867 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162867;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162867;

}
}})();
var x__17192__auto__ = cljs.core.nth.call(null,vec__162865,(0),null);
var _QMARK_x_err__17193__auto__ = cljs.core.nth.call(null,vec__162865,(1),null);
var have_x_QMARK___17194__auto__ = (_QMARK_x_err__17193__auto__ == null);
var vec__162866 = ((have_x_QMARK___17194__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nblank_str_QMARK_).call(null,x__17192__auto__)], null);
}catch (e162868){if((e162868 instanceof java.lang.Throwable)){
var t__17084__auto__ = e162868;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17084__auto__], null);
} else {
throw e162868;

}
}})():null);
var pass_QMARK___17195__auto__ = cljs.core.nth.call(null,vec__162866,(0),null);
var _QMARK_pred_err__17196__auto__ = cljs.core.nth.call(null,vec__162866,(1),null);
if(cljs.core.truth_(pass_QMARK___17195__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17192__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",982,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"client-id","client-id",1175909387,null)),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null)),((have_x_QMARK___17194__auto__)?x__17192__auto__:_QMARK_x_err__17193__auto__),_QMARK_pred_err__17196__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.sente.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.sente.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__3622__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__3622__auto__){
return or__3622__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__3622__auto__ = (function (){var and__3610__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__3610__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var and__3610__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__3610__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__3610__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){
var vec__162870 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__162870,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__162870,(1),null);
var ev__$1 = vec__162870;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__162859,map__162860,map__162860__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__162846 = null;
if (arguments.length > 1) {
  p__162846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_channel_socket_BANG___delegate.call(this,path,p__162846);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__162871){
var path = cljs.core.first(arglist__162871);
var p__162846 = cljs.core.rest(arglist__162871);
return make_channel_socket_BANG___delegate(path,p__162846);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
/**
* Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
* `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
* write their own loop against `ch-recv`.
* @param {...*} var_args
*/
taoensso.sente.start_chsk_router_BANG_ = (function() { 
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__162872){
var vec__162976 = p__162872;
var map__162977 = cljs.core.nth.call(null,vec__162976,(0),null);
var map__162977__$1 = ((cljs.core.seq_QMARK_.call(null,map__162977))?cljs.core.apply.call(null,cljs.core.hash_map,map__162977):map__162977);
var opts = map__162977__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__162977__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__7043__auto___163079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_){
return (function (){
var f__7044__auto__ = (function (){var switch__6987__auto__ = ((function (c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_){
return (function (state_163036){
var state_val_163037 = (state_163036[(1)]);
if((state_val_163037 === (7))){
var inst_162989 = (state_163036[(2)]);
var inst_162990 = cljs.core.nth.call(null,inst_162989,(0),null);
var inst_162991 = cljs.core.nth.call(null,inst_162989,(1),null);
var inst_162992 = taoensso.encore.kw_identical_QMARK_.call(null,inst_162991,ch_ctrl);
var state_163036__$1 = (function (){var statearr_163038 = state_163036;
(statearr_163038[(7)] = inst_162990);

return statearr_163038;
})();
if(cljs.core.truth_(inst_162992)){
var statearr_163039_163080 = state_163036__$1;
(statearr_163039_163080[(1)] = (8));

} else {
var statearr_163040_163081 = state_163036__$1;
(statearr_163040_163081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (20))){
var inst_163002 = (state_163036[(8)]);
var inst_163016 = taoensso.sente.errorf.call(null,"Bad event: %s",inst_163002);
var state_163036__$1 = state_163036;
var statearr_163041_163082 = state_163036__$1;
(statearr_163041_163082[(2)] = inst_163016);

(statearr_163041_163082[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (1))){
var state_163036__$1 = state_163036;
var statearr_163042_163083 = state_163036__$1;
(statearr_163042_163083[(2)] = null);

(statearr_163042_163083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (24))){
var state_163036__$1 = state_163036;
var statearr_163043_163084 = state_163036__$1;
(statearr_163043_163084[(2)] = null);

(statearr_163043_163084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (4))){
var inst_163026 = (state_163036[(2)]);
var inst_163027 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_163026);
var state_163036__$1 = state_163036;
if(cljs.core.truth_(inst_163027)){
var statearr_163044_163085 = state_163036__$1;
(statearr_163044_163085[(1)] = (23));

} else {
var statearr_163045_163086 = state_163036__$1;
(statearr_163045_163086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (15))){
var inst_163002 = (state_163036[(8)]);
var inst_163003 = (state_163036[(2)]);
var inst_163004 = taoensso.sente.errorf.call(null,"Chsk router handling error: %s",inst_163002);
var state_163036__$1 = (function (){var statearr_163046 = state_163036;
(statearr_163046[(9)] = inst_163003);

return statearr_163046;
})();
var statearr_163047_163087 = state_163036__$1;
(statearr_163047_163087[(2)] = inst_163004);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_163036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (21))){
var inst_163001 = (state_163036[(10)]);
var inst_163018 = event_msg_handler.call(null,inst_163001);
var state_163036__$1 = state_163036;
var statearr_163048_163088 = state_163036__$1;
(statearr_163048_163088[(2)] = inst_163018);

(statearr_163048_163088[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (13))){
var inst_163001 = (state_163036[(10)]);
var inst_163001__$1 = (state_163036[(2)]);
var inst_163002 = cljs.core.get.call(null,inst_163001__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_163036__$1 = (function (){var statearr_163049 = state_163036;
(statearr_163049[(8)] = inst_163002);

(statearr_163049[(10)] = inst_163001__$1);

return statearr_163049;
})();
var statearr_163050_163089 = state_163036__$1;
(statearr_163050_163089[(2)] = null);

(statearr_163050_163089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (22))){
var inst_163020 = (state_163036[(2)]);
var state_163036__$1 = (function (){var statearr_163051 = state_163036;
(statearr_163051[(11)] = inst_163020);

return statearr_163051;
})();
var statearr_163052_163090 = state_163036__$1;
(statearr_163052_163090[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_163036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_163036,(5),new cljs.core.Keyword(null,"default","default",-1987822328),null,(4));
var inst_162985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_162986 = [ch_recv,ch_ctrl];
var inst_162987 = (new cljs.core.PersistentVector(null,2,(5),inst_162985,inst_162986,null));
var state_163036__$1 = state_163036;
return cljs.core.async.ioc_alts_BANG_.call(null,state_163036__$1,(7),inst_162987);
} else {
if((state_val_163037 === (25))){
var inst_163032 = (state_163036[(2)]);
var state_163036__$1 = state_163036;
var statearr_163053_163091 = state_163036__$1;
(statearr_163053_163091[(2)] = inst_163032);

(statearr_163053_163091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (17))){
var inst_163002 = (state_163036[(8)]);
var inst_163009 = taoensso.sente.tracef.call(null,"Pre-handler event: %s",inst_163002);
var state_163036__$1 = state_163036;
var statearr_163054_163092 = state_163036__$1;
(statearr_163054_163092[(2)] = inst_163009);

(statearr_163054_163092[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (3))){
var inst_163034 = (state_163036[(2)]);
var state_163036__$1 = state_163036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_163036__$1,inst_163034);
} else {
if((state_val_163037 === (12))){
var inst_162990 = (state_163036[(7)]);
var state_163036__$1 = state_163036;
var statearr_163055_163093 = state_163036__$1;
(statearr_163055_163093[(2)] = inst_162990);

(statearr_163055_163093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (2))){
var state_163036__$1 = state_163036;
var statearr_163056_163094 = state_163036__$1;
(statearr_163056_163094[(2)] = null);

(statearr_163056_163094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (23))){
var state_163036__$1 = state_163036;
var statearr_163057_163095 = state_163036__$1;
(statearr_163057_163095[(2)] = null);

(statearr_163057_163095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (19))){
var inst_163001 = (state_163036[(10)]);
var inst_163012 = (state_163036[(2)]);
var inst_163013 = taoensso.sente.event_msg_QMARK_.call(null,inst_163001);
var inst_163014 = !(inst_163013);
var state_163036__$1 = (function (){var statearr_163058 = state_163036;
(statearr_163058[(12)] = inst_163012);

return statearr_163058;
})();
if(inst_163014){
var statearr_163059_163096 = state_163036__$1;
(statearr_163059_163096[(1)] = (20));

} else {
var statearr_163060_163097 = state_163036__$1;
(statearr_163060_163097[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (11))){
var inst_162990 = (state_163036[(7)]);
var inst_162998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_162990);
var state_163036__$1 = state_163036;
var statearr_163061_163098 = state_163036__$1;
(statearr_163061_163098[(2)] = inst_162998);

(statearr_163061_163098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (9))){
var inst_162990 = (state_163036[(7)]);
var inst_162996 = cljs.core.seq_QMARK_.call(null,inst_162990);
var state_163036__$1 = state_163036;
if(inst_162996){
var statearr_163062_163099 = state_163036__$1;
(statearr_163062_163099[(1)] = (11));

} else {
var statearr_163063_163100 = state_163036__$1;
(statearr_163063_163100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (5))){
var inst_162979 = (state_163036[(2)]);
var inst_162980 = taoensso.sente.errorf.call(null,"Chsk router channel error!");
var state_163036__$1 = (function (){var statearr_163064 = state_163036;
(statearr_163064[(13)] = inst_162979);

return statearr_163064;
})();
var statearr_163065_163101 = state_163036__$1;
(statearr_163065_163101[(2)] = inst_162980);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_163036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (14))){
var inst_163022 = (state_163036[(2)]);
var state_163036__$1 = state_163036;
var statearr_163066_163102 = state_163036__$1;
(statearr_163066_163102[(2)] = inst_163022);

(statearr_163066_163102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_163036,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var state_163036__$1 = state_163036;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_163067_163103 = state_163036__$1;
(statearr_163067_163103[(1)] = (17));

} else {
var statearr_163068_163104 = state_163036__$1;
(statearr_163068_163104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (10))){
var inst_163024 = (state_163036[(2)]);
var state_163036__$1 = state_163036;
var statearr_163069_163105 = state_163036__$1;
(statearr_163069_163105[(2)] = inst_163024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_163036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (18))){
var state_163036__$1 = state_163036;
var statearr_163070_163106 = state_163036__$1;
(statearr_163070_163106[(2)] = null);

(statearr_163070_163106[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_163037 === (8))){
var state_163036__$1 = state_163036;
var statearr_163071_163107 = state_163036__$1;
(statearr_163071_163107[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_163071_163107[(1)] = (10));


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
});})(c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__6987__auto__,c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__6988__auto__ = null;
var state_machine__6988__auto____0 = (function (){
var statearr_163075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_163075[(0)] = state_machine__6988__auto__);

(statearr_163075[(1)] = (1));

return statearr_163075;
});
var state_machine__6988__auto____1 = (function (state_163036){
while(true){
var ret_value__6989__auto__ = (function (){try{while(true){
var result__6990__auto__ = switch__6987__auto__.call(null,state_163036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6990__auto__;
}
break;
}
}catch (e163076){if((e163076 instanceof Object)){
var ex__6991__auto__ = e163076;
var statearr_163077_163108 = state_163036;
(statearr_163077_163108[(5)] = ex__6991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_163036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e163076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__163109 = state_163036;
state_163036 = G__163109;
continue;
} else {
return ret_value__6989__auto__;
}
break;
}
});
state_machine__6988__auto__ = function(state_163036){
switch(arguments.length){
case 0:
return state_machine__6988__auto____0.call(this);
case 1:
return state_machine__6988__auto____1.call(this,state_163036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6988__auto____0;
state_machine__6988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6988__auto____1;
return state_machine__6988__auto__;
})()
;})(switch__6987__auto__,c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_))
})();
var state__7045__auto__ = (function (){var statearr_163078 = f__7044__auto__.call(null);
(statearr_163078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7043__auto___163079);

return statearr_163078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7045__auto__);
});})(c__7043__auto___163079,ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__162976,map__162977,map__162977__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__162872 = null;
if (arguments.length > 2) {
  p__162872 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__162872);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__163110){
var ch_recv = cljs.core.first(arglist__163110);
arglist__163110 = cljs.core.next(arglist__163110);
var event_msg_handler = cljs.core.first(arglist__163110);
var p__162872 = cljs.core.rest(arglist__163110);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__162872);
});
start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = start_chsk_router_BANG___delegate;
return start_chsk_router_BANG_;
})()
;
/**
* DEPRECATED: Please use `start-chsk-router!` instead.
*/
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

//# sourceMappingURL=sente.js.map