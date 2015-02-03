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
var vec__32882 = x;
var ev_id = cljs.core.nth.call(null,vec__32882,(0),null);
var _ = cljs.core.nth.call(null,vec__32882,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__32884 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__32884) {
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
var map__32891 = x;
var map__32891__$1 = ((cljs.core.seq_QMARK_.call(null,map__32891))?cljs.core.apply.call(null,cljs.core.hash_map,map__32891):map__32891);
var event = cljs.core.get.call(null,map__32891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state = cljs.core.get.call(null,map__32891__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn = cljs.core.get.call(null,map__32891__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.call(null,map__32891__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
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
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var vec__32898 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pstr], null);
}catch (e32900){if((e32900 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32900;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32900;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__32898,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__32898,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__32899 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__17189__auto__)], null);
}catch (e32901){if((e32901 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32901;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32901;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__32899,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__32899,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",208,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pstr","pstr",221763868,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})());
}catch (e32897){var t = e32897;
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
pack.cljs$lang$applyTo = (function (arglist__32902){
var args = cljs.core.seq(arglist__32902);
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
var vec__32909_32915 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefixed_pstr], null);
}catch (e32911){if((e32911 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32911;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32911;

}
}})();
var x__17189__auto___32916 = cljs.core.nth.call(null,vec__32909_32915,(0),null);
var _QMARK_x_err__17190__auto___32917 = cljs.core.nth.call(null,vec__32909_32915,(1),null);
var have_x_QMARK___17191__auto___32918 = (_QMARK_x_err__17190__auto___32917 == null);
var vec__32910_32919 = ((have_x_QMARK___17191__auto___32918)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__17189__auto___32916)], null);
}catch (e32912){if((e32912 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32912;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32912;

}
}})():null);
var pass_QMARK___17192__auto___32920 = cljs.core.nth.call(null,vec__32910_32919,(0),null);
var _QMARK_pred_err__17193__auto___32921 = cljs.core.nth.call(null,vec__32910_32919,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto___32920)){
var or__3622__auto___32922 = true;
if(or__3622__auto___32922){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",235,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___17191__auto___32918)?x__17189__auto___32916:_QMARK_x_err__17190__auto___32917),_QMARK_pred_err__17193__auto___32921);
}

var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__32914 = prefix;
switch (G__32914) {
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
var vec__32913 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__32913,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__32913,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.sente.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj32925 = {};
return obj32925;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__32926,merge_state){
var map__32929 = p__32926;
var map__32929__$1 = ((cljs.core.seq_QMARK_.call(null,map__32929))?cljs.core.apply.call(null,cljs.core.hash_map,map__32929):map__32929);
var chsk = map__32929__$1;
var state_ = cljs.core.get.call(null,map__32929__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var chs = cljs.core.get.call(null,map__32929__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var vec__32930 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__32929,map__32929__$1,chsk,state_,chs){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__32929,map__32929__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.call(null,vec__32930,(0),null);
var new_state = cljs.core.nth.call(null,vec__32930,(1),null);
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
var vec__32936_32941 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb], null);
}catch (e32938){if((e32938 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32938;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32938;

}
}})();
var x__17189__auto___32942 = cljs.core.nth.call(null,vec__32936_32941,(0),null);
var _QMARK_x_err__17190__auto___32943 = cljs.core.nth.call(null,vec__32936_32941,(1),null);
var have_x_QMARK___17191__auto___32944 = (_QMARK_x_err__17190__auto___32943 == null);
var vec__32937_32945 = ((have_x_QMARK___17191__auto___32944)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.chan_QMARK_).call(null,x__17189__auto___32942)], null);
}catch (e32939){if((e32939 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32939;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32939;

}
}})():null);
var pass_QMARK___17192__auto___32946 = cljs.core.nth.call(null,vec__32937_32945,(0),null);
var _QMARK_pred_err__17193__auto___32947 = cljs.core.nth.call(null,vec__32937_32945,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto___32946)){
var or__3622__auto___32948 = true;
if(or__3622__auto___32948){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",696,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null)),((have_x_QMARK___17191__auto___32944)?x__17189__auto___32942:_QMARK_x_err__17190__auto___32943),_QMARK_pred_err__17193__auto___32947);
}

taoensso.sente.assert_event.call(null,ev);

var vec__32940 = ev;
var ev_id = cljs.core.nth.call(null,vec__32940,(0),null);
var _ = cljs.core.nth.call(null,vec__32940,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__32940,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__32940,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){
taoensso.sente.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = (function (){var vec__32957 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
}catch (e32959){if((e32959 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32959;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32959;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__32957,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__32957,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__32958 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__17189__auto__)], null);
}catch (e32960){if((e32960 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32960;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32960;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__32958,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__32958,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",707,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clj","clj",980036099,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})();
var seq__32961 = cljs.core.seq.call(null,buffered_evs);
var chunk__32962 = null;
var count__32963 = (0);
var i__32964 = (0);
while(true){
if((i__32964 < count__32963)){
var ev = cljs.core._nth.call(null,chunk__32962,i__32964);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__32965 = seq__32961;
var G__32966 = chunk__32962;
var G__32967 = count__32963;
var G__32968 = (i__32964 + (1));
seq__32961 = G__32965;
chunk__32962 = G__32966;
count__32963 = G__32967;
i__32964 = G__32968;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32961);
if(temp__4126__auto__){
var seq__32961__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32961__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__32961__$1);
var G__32969 = cljs.core.chunk_rest.call(null,seq__32961__$1);
var G__32970 = c__4409__auto__;
var G__32971 = cljs.core.count.call(null,c__4409__auto__);
var G__32972 = (0);
seq__32961 = G__32969;
chunk__32962 = G__32970;
count__32963 = G__32971;
i__32964 = G__32972;
continue;
} else {
var ev = cljs.core.first.call(null,seq__32961__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__32973 = cljs.core.next.call(null,seq__32961__$1);
var G__32974 = null;
var G__32975 = (0);
var G__32976 = (0);
seq__32961 = G__32973;
chunk__32962 = G__32974;
count__32963 = G__32975;
i__32964 = G__32976;
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
var vec__32979 = clj;
var _ = cljs.core.nth.call(null,vec__32979,(0),null);
var vec__32980 = cljs.core.nth.call(null,vec__32979,(1),null);
var uid = cljs.core.nth.call(null,vec__32980,(0),null);
var csrf_token = cljs.core.nth.call(null,vec__32980,(1),null);
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
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__32981){
var vec__32983 = p__32981;
var nattempt = cljs.core.nth.call(null,vec__32983,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3622__auto__ = nattempt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__32981 = null;
if (arguments.length > 1) {
  p__32981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__32981);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__32984){
var nullary_f = cljs.core.first(arglist__32984);
var p__32981 = cljs.core.rest(arglist__32984);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__32981);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k32986,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__32988 = (((k32986 instanceof cljs.core.Keyword))?k32986.fqn:null);
switch (G__32988) {
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
return cljs.core.get.call(null,self__.__extmap,k32986,else__4228__auto__);

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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__32985){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__32989 = cljs.core.keyword_identical_QMARK_;
var expr__32990 = k__4233__auto__;
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__32990))){
return (new taoensso.sente.ChWebSocket(G__32985,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__32985,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__32985,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__32985,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__32985,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__32985,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__32985,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__32985,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__32985,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__32985,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32989.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__32990))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__32985,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__32985),null));
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__32985){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__32985,self__.__extmap,self__.__hash));
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

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__32992){
var self__ = this;
var map__32993 = p__32992;
var map__32993__$1 = ((cljs.core.seq_QMARK_.call(null,map__32993))?cljs.core.apply.call(null,cljs.core.hash_map,map__32993):map__32993);
var opts = map__32993__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var temp__4126__auto___33034 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___33034)){
var cb_uuid_33035 = temp__4126__auto___33034;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_33035], null),(function (){var vec__32994 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e32996){if((e32996 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32996;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32996;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__32994,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__32994,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__32995 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17189__auto__)], null);
}catch (e32997){if((e32997 instanceof java.lang.Throwable)){
var t__17081__auto__ = e32997;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e32997;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__32995,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__32995,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",751,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})());

var temp__4126__auto___33036__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___33036__$1)){
var timeout_ms_33037 = temp__4126__auto___33036__$1;
var c__7040__auto___33038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_33008){
var state_val_33009 = (state_33008[(1)]);
if((state_val_33009 === (5))){
var inst_33006 = (state_33008[(2)]);
var state_33008__$1 = state_33008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33008__$1,inst_33006);
} else {
if((state_val_33009 === (4))){
var state_33008__$1 = state_33008;
var statearr_33010_33039 = state_33008__$1;
(statearr_33010_33039[(2)] = null);

(statearr_33010_33039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33009 === (3))){
var inst_33001 = (state_33008[(7)]);
var inst_33003 = inst_33001.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_33008__$1 = state_33008;
var statearr_33011_33040 = state_33008__$1;
(statearr_33011_33040[(2)] = inst_33003);

(statearr_33011_33040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33009 === (2))){
var inst_33001 = (state_33008[(7)]);
var inst_33000 = (state_33008[(2)]);
var inst_33001__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_33008__$1 = (function (){var statearr_33012 = state_33008;
(statearr_33012[(7)] = inst_33001__$1);

(statearr_33012[(8)] = inst_33000);

return statearr_33012;
})();
if(cljs.core.truth_(inst_33001__$1)){
var statearr_33013_33041 = state_33008__$1;
(statearr_33013_33041[(1)] = (3));

} else {
var statearr_33014_33042 = state_33008__$1;
(statearr_33014_33042[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33009 === (1))){
var inst_32998 = cljs.core.async.timeout.call(null,timeout_ms_33037);
var state_33008__$1 = state_33008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33008__$1,(2),inst_32998);
} else {
return null;
}
}
}
}
}
});})(c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__6984__auto__,c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_33018 = [null,null,null,null,null,null,null,null,null];
(statearr_33018[(0)] = state_machine__6985__auto__);

(statearr_33018[(1)] = (1));

return statearr_33018;
});
var state_machine__6985__auto____1 = (function (state_33008){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_33008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e33019){if((e33019 instanceof Object)){
var ex__6988__auto__ = e33019;
var statearr_33020_33043 = state_33008;
(statearr_33020_33043[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33044 = state_33008;
state_33008 = G__33044;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_33008){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_33008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__7042__auto__ = (function (){var statearr_33021 = f__7041__auto__.call(null);
(statearr_33021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___33038);

return statearr_33021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___33038,timeout_ms_33037,temp__4126__auto___33036__$1,cb_uuid_33035,temp__4126__auto___33034,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__32993,map__32993__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e33022){if((e33022 instanceof Error)){
var e = e33022;
taoensso.sente.errorf.call(null,"Chsk send error: %s",e);

var temp__4126__auto___33045 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___33045)){
var cb_uuid_33046 = temp__4126__auto___33045;
var cb_fn_STAR__33047 = (function (){var or__3622__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_33046);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var vec__33023 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e33025){if((e33025 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33025;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33025;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33023,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33023,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33024 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33026){if((e33026 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33026;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33026;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33024,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33024,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto____$1 = false;
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",765,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
}
})();
cb_fn_STAR__33047.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e33022;

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
}catch (e33030){if((e33030 instanceof Error)){
var e = e33030;
taoensso.sente.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e33030;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__33031 = socket;
(G__33031["onerror"] = ((function (G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.sente.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__33031["onmessage"] = ((function (G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__33032 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__33032,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__33032,(1),null);
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
});})(G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__33031["onopen"] = ((function (G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__33031["onclose"] = ((function (G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__33031,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__33031;
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

taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__32987){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__32987),null,cljs.core.dissoc.call(null,G__32987,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k33049,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__33051 = (((k33049 instanceof cljs.core.Keyword))?k33049.fqn:null);
switch (G__33051) {
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
return cljs.core.get.call(null,self__.__extmap,k33049,else__4228__auto__);

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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__33048){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__33052 = cljs.core.keyword_identical_QMARK_;
var expr__33053 = k__4233__auto__;
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(G__33048,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__33048,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__33048,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__33048,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__33048,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,G__33048,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33052.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__33053))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,G__33048,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__33048),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__33048){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,G__33048,self__.__extmap,self__.__hash));
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

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__33055){
var self__ = this;
var map__33056 = p__33055;
var map__33056__$1 = ((cljs.core.seq_QMARK_.call(null,map__33056))?cljs.core.apply.call(null,cljs.core.hash_map,map__33056):map__33056);
var opts = map__33056__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
})()], null),((function (_QMARK_cb_fn,chsk__$1,map__33056,map__33056__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__33057){
var map__33060 = p__33057;
var map__33060__$1 = ((cljs.core.seq_QMARK_.call(null,map__33060))?cljs.core.apply.call(null,cljs.core.hash_map,map__33060):map__33060);
var _QMARK_content = cljs.core.get.call(null,map__33060__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__33060__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__33061 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__33061,(0),null);
var _ = cljs.core.nth.call(null,vec__33061,(1),null);
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
});})(_QMARK_cb_fn,chsk__$1,map__33056,map__33056__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
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
return (function ajax_cb(p__33067){
var map__33070 = p__33067;
var map__33070__$1 = ((cljs.core.seq_QMARK_.call(null,map__33070))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);
var _QMARK_content = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__33071 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__33071,(0),null);
var _ = cljs.core.nth.call(null,vec__33071,(1),null);
var or__3622__auto___33073 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(or__3622__auto___33073)){
} else {
var buffered_evs_33074 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_33074);

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

taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__33050){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__33050),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__33050),null,cljs.core.dissoc.call(null,G__33050,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
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
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__33075,websocket_QMARK_){
var map__33077 = p__33075;
var map__33077__$1 = ((cljs.core.seq_QMARK_.call(null,map__33077))?cljs.core.apply.call(null,cljs.core.hash_map,map__33077):map__33077);
var window_location = map__33077__$1;
var pathname = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var host = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var protocol = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
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
var make_channel_socket_BANG___delegate = function (path,p__33078){
var vec__33091 = p__33078;
var map__33092 = cljs.core.nth.call(null,vec__33091,(0),null);
var map__33092__$1 = ((cljs.core.seq_QMARK_.call(null,map__33092))?cljs.core.apply.call(null,cljs.core.hash_map,map__33092):map__33092);
var opts = map__33092__$1;
var client_id = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var chsk_url_fn = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var ws_kalive_ms = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var recv_buf_or_n = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var type = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__33091,(1),null);
if(cljs.core.truth_((function (){var vec__33093 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
}catch (e33095){if((e33095 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33095;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33095;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33093,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33093,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33094 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,x__17189__auto__)], null);
}catch (e33096){if((e33096 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33096;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33096;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33094,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33094,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",981,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.truth_((function (){var vec__33097 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null);
}catch (e33099){if((e33099 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33099;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33099;

}
}})();
var x__17189__auto__ = cljs.core.nth.call(null,vec__33097,(0),null);
var _QMARK_x_err__17190__auto__ = cljs.core.nth.call(null,vec__33097,(1),null);
var have_x_QMARK___17191__auto__ = (_QMARK_x_err__17190__auto__ == null);
var vec__33098 = ((have_x_QMARK___17191__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nblank_str_QMARK_).call(null,x__17189__auto__)], null);
}catch (e33100){if((e33100 instanceof java.lang.Throwable)){
var t__17081__auto__ = e33100;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__17081__auto__], null);
} else {
throw e33100;

}
}})():null);
var pass_QMARK___17192__auto__ = cljs.core.nth.call(null,vec__33098,(0),null);
var _QMARK_pred_err__17193__auto__ = cljs.core.nth.call(null,vec__33098,(1),null);
if(cljs.core.truth_(pass_QMARK___17192__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__17189__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",982,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"client-id","client-id",1175909387,null)),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null)),((have_x_QMARK___17191__auto__)?x__17189__auto__:_QMARK_x_err__17190__auto__),_QMARK_pred_err__17193__auto__);
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
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
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
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
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
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){
var vec__33102 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__33102,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__33102,(1),null);
var ev__$1 = vec__33102;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__33091,map__33092,map__33092__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__33078 = null;
if (arguments.length > 1) {
  p__33078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_channel_socket_BANG___delegate.call(this,path,p__33078);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__33103){
var path = cljs.core.first(arglist__33103);
var p__33078 = cljs.core.rest(arglist__33103);
return make_channel_socket_BANG___delegate(path,p__33078);
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
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__33104){
var vec__33208 = p__33104;
var map__33209 = cljs.core.nth.call(null,vec__33208,(0),null);
var map__33209__$1 = ((cljs.core.seq_QMARK_.call(null,map__33209))?cljs.core.apply.call(null,cljs.core.hash_map,map__33209):map__33209);
var opts = map__33209__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__33209__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__7040__auto___33311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_){
return (function (){
var f__7041__auto__ = (function (){var switch__6984__auto__ = ((function (c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_){
return (function (state_33268){
var state_val_33269 = (state_33268[(1)]);
if((state_val_33269 === (7))){
var inst_33221 = (state_33268[(2)]);
var inst_33222 = cljs.core.nth.call(null,inst_33221,(0),null);
var inst_33223 = cljs.core.nth.call(null,inst_33221,(1),null);
var inst_33224 = taoensso.encore.kw_identical_QMARK_.call(null,inst_33223,ch_ctrl);
var state_33268__$1 = (function (){var statearr_33270 = state_33268;
(statearr_33270[(7)] = inst_33222);

return statearr_33270;
})();
if(cljs.core.truth_(inst_33224)){
var statearr_33271_33312 = state_33268__$1;
(statearr_33271_33312[(1)] = (8));

} else {
var statearr_33272_33313 = state_33268__$1;
(statearr_33272_33313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (20))){
var inst_33234 = (state_33268[(8)]);
var inst_33248 = taoensso.sente.errorf.call(null,"Bad event: %s",inst_33234);
var state_33268__$1 = state_33268;
var statearr_33273_33314 = state_33268__$1;
(statearr_33273_33314[(2)] = inst_33248);

(statearr_33273_33314[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (1))){
var state_33268__$1 = state_33268;
var statearr_33274_33315 = state_33268__$1;
(statearr_33274_33315[(2)] = null);

(statearr_33274_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (24))){
var state_33268__$1 = state_33268;
var statearr_33275_33316 = state_33268__$1;
(statearr_33275_33316[(2)] = null);

(statearr_33275_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (4))){
var inst_33258 = (state_33268[(2)]);
var inst_33259 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_33258);
var state_33268__$1 = state_33268;
if(cljs.core.truth_(inst_33259)){
var statearr_33276_33317 = state_33268__$1;
(statearr_33276_33317[(1)] = (23));

} else {
var statearr_33277_33318 = state_33268__$1;
(statearr_33277_33318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (15))){
var inst_33234 = (state_33268[(8)]);
var inst_33235 = (state_33268[(2)]);
var inst_33236 = taoensso.sente.errorf.call(null,"Chsk router handling error: %s",inst_33234);
var state_33268__$1 = (function (){var statearr_33278 = state_33268;
(statearr_33278[(9)] = inst_33235);

return statearr_33278;
})();
var statearr_33279_33319 = state_33268__$1;
(statearr_33279_33319[(2)] = inst_33236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (21))){
var inst_33233 = (state_33268[(10)]);
var inst_33250 = event_msg_handler.call(null,inst_33233);
var state_33268__$1 = state_33268;
var statearr_33280_33320 = state_33268__$1;
(statearr_33280_33320[(2)] = inst_33250);

(statearr_33280_33320[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (13))){
var inst_33233 = (state_33268[(10)]);
var inst_33233__$1 = (state_33268[(2)]);
var inst_33234 = cljs.core.get.call(null,inst_33233__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_33268__$1 = (function (){var statearr_33281 = state_33268;
(statearr_33281[(10)] = inst_33233__$1);

(statearr_33281[(8)] = inst_33234);

return statearr_33281;
})();
var statearr_33282_33321 = state_33268__$1;
(statearr_33282_33321[(2)] = null);

(statearr_33282_33321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (22))){
var inst_33252 = (state_33268[(2)]);
var state_33268__$1 = (function (){var statearr_33283 = state_33268;
(statearr_33283[(11)] = inst_33252);

return statearr_33283;
})();
var statearr_33284_33322 = state_33268__$1;
(statearr_33284_33322[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33268,(5),new cljs.core.Keyword(null,"default","default",-1987822328),null,(4));
var inst_33217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33218 = [ch_recv,ch_ctrl];
var inst_33219 = (new cljs.core.PersistentVector(null,2,(5),inst_33217,inst_33218,null));
var state_33268__$1 = state_33268;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33268__$1,(7),inst_33219);
} else {
if((state_val_33269 === (25))){
var inst_33264 = (state_33268[(2)]);
var state_33268__$1 = state_33268;
var statearr_33285_33323 = state_33268__$1;
(statearr_33285_33323[(2)] = inst_33264);

(statearr_33285_33323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (17))){
var inst_33234 = (state_33268[(8)]);
var inst_33241 = taoensso.sente.tracef.call(null,"Pre-handler event: %s",inst_33234);
var state_33268__$1 = state_33268;
var statearr_33286_33324 = state_33268__$1;
(statearr_33286_33324[(2)] = inst_33241);

(statearr_33286_33324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (3))){
var inst_33266 = (state_33268[(2)]);
var state_33268__$1 = state_33268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33268__$1,inst_33266);
} else {
if((state_val_33269 === (12))){
var inst_33222 = (state_33268[(7)]);
var state_33268__$1 = state_33268;
var statearr_33287_33325 = state_33268__$1;
(statearr_33287_33325[(2)] = inst_33222);

(statearr_33287_33325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (2))){
var state_33268__$1 = state_33268;
var statearr_33288_33326 = state_33268__$1;
(statearr_33288_33326[(2)] = null);

(statearr_33288_33326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (23))){
var state_33268__$1 = state_33268;
var statearr_33289_33327 = state_33268__$1;
(statearr_33289_33327[(2)] = null);

(statearr_33289_33327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (19))){
var inst_33233 = (state_33268[(10)]);
var inst_33244 = (state_33268[(2)]);
var inst_33245 = taoensso.sente.event_msg_QMARK_.call(null,inst_33233);
var inst_33246 = !(inst_33245);
var state_33268__$1 = (function (){var statearr_33290 = state_33268;
(statearr_33290[(12)] = inst_33244);

return statearr_33290;
})();
if(inst_33246){
var statearr_33291_33328 = state_33268__$1;
(statearr_33291_33328[(1)] = (20));

} else {
var statearr_33292_33329 = state_33268__$1;
(statearr_33292_33329[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (11))){
var inst_33222 = (state_33268[(7)]);
var inst_33230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33222);
var state_33268__$1 = state_33268;
var statearr_33293_33330 = state_33268__$1;
(statearr_33293_33330[(2)] = inst_33230);

(statearr_33293_33330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (9))){
var inst_33222 = (state_33268[(7)]);
var inst_33228 = cljs.core.seq_QMARK_.call(null,inst_33222);
var state_33268__$1 = state_33268;
if(inst_33228){
var statearr_33294_33331 = state_33268__$1;
(statearr_33294_33331[(1)] = (11));

} else {
var statearr_33295_33332 = state_33268__$1;
(statearr_33295_33332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (5))){
var inst_33211 = (state_33268[(2)]);
var inst_33212 = taoensso.sente.errorf.call(null,"Chsk router channel error!");
var state_33268__$1 = (function (){var statearr_33296 = state_33268;
(statearr_33296[(13)] = inst_33211);

return statearr_33296;
})();
var statearr_33297_33333 = state_33268__$1;
(statearr_33297_33333[(2)] = inst_33212);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (14))){
var inst_33254 = (state_33268[(2)]);
var state_33268__$1 = state_33268;
var statearr_33298_33334 = state_33268__$1;
(statearr_33298_33334[(2)] = inst_33254);

(statearr_33298_33334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33268,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var state_33268__$1 = state_33268;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_33299_33335 = state_33268__$1;
(statearr_33299_33335[(1)] = (17));

} else {
var statearr_33300_33336 = state_33268__$1;
(statearr_33300_33336[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (10))){
var inst_33256 = (state_33268[(2)]);
var state_33268__$1 = state_33268;
var statearr_33301_33337 = state_33268__$1;
(statearr_33301_33337[(2)] = inst_33256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (18))){
var state_33268__$1 = state_33268;
var statearr_33302_33338 = state_33268__$1;
(statearr_33302_33338[(2)] = null);

(statearr_33302_33338[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33269 === (8))){
var state_33268__$1 = state_33268;
var statearr_33303_33339 = state_33268__$1;
(statearr_33303_33339[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_33303_33339[(1)] = (10));


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
});})(c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__6984__auto__,c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__6985__auto__ = null;
var state_machine__6985__auto____0 = (function (){
var statearr_33307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33307[(0)] = state_machine__6985__auto__);

(statearr_33307[(1)] = (1));

return statearr_33307;
});
var state_machine__6985__auto____1 = (function (state_33268){
while(true){
var ret_value__6986__auto__ = (function (){try{while(true){
var result__6987__auto__ = switch__6984__auto__.call(null,state_33268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6987__auto__;
}
break;
}
}catch (e33308){if((e33308 instanceof Object)){
var ex__6988__auto__ = e33308;
var statearr_33309_33340 = state_33268;
(statearr_33309_33340[(5)] = ex__6988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33341 = state_33268;
state_33268 = G__33341;
continue;
} else {
return ret_value__6986__auto__;
}
break;
}
});
state_machine__6985__auto__ = function(state_33268){
switch(arguments.length){
case 0:
return state_machine__6985__auto____0.call(this);
case 1:
return state_machine__6985__auto____1.call(this,state_33268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6985__auto____0;
state_machine__6985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6985__auto____1;
return state_machine__6985__auto__;
})()
;})(switch__6984__auto__,c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_))
})();
var state__7042__auto__ = (function (){var statearr_33310 = f__7041__auto__.call(null);
(statearr_33310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7040__auto___33311);

return statearr_33310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7042__auto__);
});})(c__7040__auto___33311,ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__33208,map__33209,map__33209__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__33104 = null;
if (arguments.length > 2) {
  p__33104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__33104);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__33342){
var ch_recv = cljs.core.first(arglist__33342);
arglist__33342 = cljs.core.next(arglist__33342);
var event_msg_handler = cljs.core.first(arglist__33342);
var p__33104 = cljs.core.rest(arglist__33342);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__33104);
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