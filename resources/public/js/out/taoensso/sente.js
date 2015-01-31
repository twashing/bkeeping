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
var vec__1277877 = x;
var ev_id = cljs.core.nth.call(null,vec__1277877,(0),null);
var _ = cljs.core.nth.call(null,vec__1277877,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__1277879 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__1277879) {
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
var map__1277886 = x;
var map__1277886__$1 = ((cljs.core.seq_QMARK_.call(null,map__1277886))?cljs.core.apply.call(null,cljs.core.hash_map,map__1277886):map__1277886);
var event = cljs.core.get.call(null,map__1277886__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state = cljs.core.get.call(null,map__1277886__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn = cljs.core.get.call(null,map__1277886__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.call(null,map__1277886__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
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
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var vec__1277893 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pstr], null);
}catch (e1277895){if((e1277895 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277895;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277895;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1277893,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1277893,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1277894 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__19401__auto__)], null);
}catch (e1277896){if((e1277896 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277896;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277896;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1277894,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1277894,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",208,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pstr","pstr",221763868,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})());
}catch (e1277892){var t = e1277892;
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
pack.cljs$lang$applyTo = (function (arglist__1277897){
var args = cljs.core.seq(arglist__1277897);
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
var vec__1277904_1277910 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefixed_pstr], null);
}catch (e1277906){if((e1277906 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277906;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277906;

}
}})();
var x__19401__auto___1277911 = cljs.core.nth.call(null,vec__1277904_1277910,(0),null);
var _QMARK_x_err__19402__auto___1277912 = cljs.core.nth.call(null,vec__1277904_1277910,(1),null);
var have_x_QMARK___19403__auto___1277913 = (_QMARK_x_err__19402__auto___1277912 == null);
var vec__1277905_1277914 = ((have_x_QMARK___19403__auto___1277913)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__19401__auto___1277911)], null);
}catch (e1277907){if((e1277907 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277907;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277907;

}
}})():null);
var pass_QMARK___19404__auto___1277915 = cljs.core.nth.call(null,vec__1277905_1277914,(0),null);
var _QMARK_pred_err__19405__auto___1277916 = cljs.core.nth.call(null,vec__1277905_1277914,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto___1277915)){
var or__3622__auto___1277917 = true;
if(or__3622__auto___1277917){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",235,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___19403__auto___1277913)?x__19401__auto___1277911:_QMARK_x_err__19402__auto___1277912),_QMARK_pred_err__19405__auto___1277916);
}

var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__1277909 = prefix;
switch (G__1277909) {
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
var vec__1277908 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__1277908,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__1277908,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.sente.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj1277920 = {};
return obj1277920;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__1277921,merge_state){
var map__1277924 = p__1277921;
var map__1277924__$1 = ((cljs.core.seq_QMARK_.call(null,map__1277924))?cljs.core.apply.call(null,cljs.core.hash_map,map__1277924):map__1277924);
var chsk = map__1277924__$1;
var state_ = cljs.core.get.call(null,map__1277924__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var chs = cljs.core.get.call(null,map__1277924__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var vec__1277925 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__1277924,map__1277924__$1,chsk,state_,chs){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__1277924,map__1277924__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.call(null,vec__1277925,(0),null);
var new_state = cljs.core.nth.call(null,vec__1277925,(1),null);
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
var vec__1277931_1277936 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb], null);
}catch (e1277933){if((e1277933 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277933;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277933;

}
}})();
var x__19401__auto___1277937 = cljs.core.nth.call(null,vec__1277931_1277936,(0),null);
var _QMARK_x_err__19402__auto___1277938 = cljs.core.nth.call(null,vec__1277931_1277936,(1),null);
var have_x_QMARK___19403__auto___1277939 = (_QMARK_x_err__19402__auto___1277938 == null);
var vec__1277932_1277940 = ((have_x_QMARK___19403__auto___1277939)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.chan_QMARK_).call(null,x__19401__auto___1277937)], null);
}catch (e1277934){if((e1277934 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277934;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277934;

}
}})():null);
var pass_QMARK___19404__auto___1277941 = cljs.core.nth.call(null,vec__1277932_1277940,(0),null);
var _QMARK_pred_err__19405__auto___1277942 = cljs.core.nth.call(null,vec__1277932_1277940,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto___1277941)){
var or__3622__auto___1277943 = true;
if(or__3622__auto___1277943){
} else {
}
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",696,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null)),((have_x_QMARK___19403__auto___1277939)?x__19401__auto___1277937:_QMARK_x_err__19402__auto___1277938),_QMARK_pred_err__19405__auto___1277942);
}

taoensso.sente.assert_event.call(null,ev);

var vec__1277935 = ev;
var ev_id = cljs.core.nth.call(null,vec__1277935,(0),null);
var _ = cljs.core.nth.call(null,vec__1277935,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__1277935,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__1277935,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){
taoensso.sente.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = (function (){var vec__1277952 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
}catch (e1277954){if((e1277954 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277954;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277954;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1277952,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1277952,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1277953 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__19401__auto__)], null);
}catch (e1277955){if((e1277955 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277955;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277955;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1277953,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1277953,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",707,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clj","clj",980036099,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})();
var seq__1277956 = cljs.core.seq.call(null,buffered_evs);
var chunk__1277957 = null;
var count__1277958 = (0);
var i__1277959 = (0);
while(true){
if((i__1277959 < count__1277958)){
var ev = cljs.core._nth.call(null,chunk__1277957,i__1277959);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__1277960 = seq__1277956;
var G__1277961 = chunk__1277957;
var G__1277962 = count__1277958;
var G__1277963 = (i__1277959 + (1));
seq__1277956 = G__1277960;
chunk__1277957 = G__1277961;
count__1277958 = G__1277962;
i__1277959 = G__1277963;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1277956);
if(temp__4126__auto__){
var seq__1277956__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1277956__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__1277956__$1);
var G__1277964 = cljs.core.chunk_rest.call(null,seq__1277956__$1);
var G__1277965 = c__4409__auto__;
var G__1277966 = cljs.core.count.call(null,c__4409__auto__);
var G__1277967 = (0);
seq__1277956 = G__1277964;
chunk__1277957 = G__1277965;
count__1277958 = G__1277966;
i__1277959 = G__1277967;
continue;
} else {
var ev = cljs.core.first.call(null,seq__1277956__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__1277968 = cljs.core.next.call(null,seq__1277956__$1);
var G__1277969 = null;
var G__1277970 = (0);
var G__1277971 = (0);
seq__1277956 = G__1277968;
chunk__1277957 = G__1277969;
count__1277958 = G__1277970;
i__1277959 = G__1277971;
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
var vec__1277974 = clj;
var _ = cljs.core.nth.call(null,vec__1277974,(0),null);
var vec__1277975 = cljs.core.nth.call(null,vec__1277974,(1),null);
var uid = cljs.core.nth.call(null,vec__1277975,(0),null);
var csrf_token = cljs.core.nth.call(null,vec__1277975,(1),null);
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
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__1277976){
var vec__1277978 = p__1277976;
var nattempt = cljs.core.nth.call(null,vec__1277978,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3622__auto__ = nattempt;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__1277976 = null;
if (arguments.length > 1) {
  p__1277976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__1277976);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__1277979){
var nullary_f = cljs.core.first(arglist__1277979);
var p__1277976 = cljs.core.rest(arglist__1277979);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__1277976);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k1277981,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__1277983 = (((k1277981 instanceof cljs.core.Keyword))?k1277981.fqn:null);
switch (G__1277983) {
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
return cljs.core.get.call(null,self__.__extmap,k1277981,else__4228__auto__);

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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__1277980){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__1277984 = cljs.core.keyword_identical_QMARK_;
var expr__1277985 = k__4233__auto__;
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__1277985))){
return (new taoensso.sente.ChWebSocket(G__1277980,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__1277980,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__1277980,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__1277980,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__1277980,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__1277980,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__1277980,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__1277980,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__1277980,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__1277980,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1277984.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__1277985))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__1277980,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__1277980),null));
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__1277980){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__1277980,self__.__extmap,self__.__hash));
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

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__1277987){
var self__ = this;
var map__1277988 = p__1277987;
var map__1277988__$1 = ((cljs.core.seq_QMARK_.call(null,map__1277988))?cljs.core.apply.call(null,cljs.core.hash_map,map__1277988):map__1277988);
var opts = map__1277988__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__1277988__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__1277988__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__1277988__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var temp__4126__auto___1278029 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___1278029)){
var cb_uuid_1278030 = temp__4126__auto___1278029;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_1278030], null),(function (){var vec__1277989 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e1277991){if((e1277991 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277991;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277991;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1277989,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1277989,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1277990 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__19401__auto__)], null);
}catch (e1277992){if((e1277992 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1277992;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1277992;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1277990,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1277990,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = false;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",751,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})());

var temp__4126__auto___1278031__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___1278031__$1)){
var timeout_ms_1278032 = temp__4126__auto___1278031__$1;
var c__9199__auto___1278033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_1278003){
var state_val_1278004 = (state_1278003[(1)]);
if((state_val_1278004 === (5))){
var inst_1278001 = (state_1278003[(2)]);
var state_1278003__$1 = state_1278003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1278003__$1,inst_1278001);
} else {
if((state_val_1278004 === (4))){
var state_1278003__$1 = state_1278003;
var statearr_1278005_1278034 = state_1278003__$1;
(statearr_1278005_1278034[(2)] = null);

(statearr_1278005_1278034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278004 === (3))){
var inst_1277996 = (state_1278003[(7)]);
var inst_1277998 = inst_1277996.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_1278003__$1 = state_1278003;
var statearr_1278006_1278035 = state_1278003__$1;
(statearr_1278006_1278035[(2)] = inst_1277998);

(statearr_1278006_1278035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278004 === (2))){
var inst_1277996 = (state_1278003[(7)]);
var inst_1277995 = (state_1278003[(2)]);
var inst_1277996__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_1278003__$1 = (function (){var statearr_1278007 = state_1278003;
(statearr_1278007[(8)] = inst_1277995);

(statearr_1278007[(7)] = inst_1277996__$1);

return statearr_1278007;
})();
if(cljs.core.truth_(inst_1277996__$1)){
var statearr_1278008_1278036 = state_1278003__$1;
(statearr_1278008_1278036[(1)] = (3));

} else {
var statearr_1278009_1278037 = state_1278003__$1;
(statearr_1278009_1278037[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278004 === (1))){
var inst_1277993 = cljs.core.async.timeout.call(null,timeout_ms_1278032);
var state_1278003__$1 = state_1278003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1278003__$1,(2),inst_1277993);
} else {
return null;
}
}
}
}
}
});})(c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__9184__auto__,c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1278013 = [null,null,null,null,null,null,null,null,null];
(statearr_1278013[(0)] = state_machine__9185__auto__);

(statearr_1278013[(1)] = (1));

return statearr_1278013;
});
var state_machine__9185__auto____1 = (function (state_1278003){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1278003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1278014){if((e1278014 instanceof Object)){
var ex__9188__auto__ = e1278014;
var statearr_1278015_1278038 = state_1278003;
(statearr_1278015_1278038[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1278014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1278039 = state_1278003;
state_1278003 = G__1278039;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1278003){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1278003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__9201__auto__ = (function (){var statearr_1278016 = f__9200__auto__.call(null);
(statearr_1278016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1278033);

return statearr_1278016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1278033,timeout_ms_1278032,temp__4126__auto___1278031__$1,cb_uuid_1278030,temp__4126__auto___1278029,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__1277988,map__1277988__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e1278017){if((e1278017 instanceof Error)){
var e = e1278017;
taoensso.sente.errorf.call(null,"Chsk send error: %s",e);

var temp__4126__auto___1278040 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___1278040)){
var cb_uuid_1278041 = temp__4126__auto___1278040;
var cb_fn_STAR__1278042 = (function (){var or__3622__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_1278041);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var vec__1278018 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e1278020){if((e1278020 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278020;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278020;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1278018,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1278018,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1278019 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__19401__auto__)], null);
}catch (e1278021){if((e1278021 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278021;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278021;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1278019,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1278019,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto____$1 = false;
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",765,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
}
})();
cb_fn_STAR__1278042.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e1278017;

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
}catch (e1278025){if((e1278025 instanceof Error)){
var e = e1278025;
taoensso.sente.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e1278025;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__1278026 = socket;
(G__1278026["onerror"] = ((function (G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.sente.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__1278026["onmessage"] = ((function (G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__1278027 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__1278027,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__1278027,(1),null);
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
});})(G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__1278026["onopen"] = ((function (G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__1278026["onclose"] = ((function (G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__1278026,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__1278026;
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

taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__1277982){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__1277982),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__1277982),null,cljs.core.dissoc.call(null,G__1277982,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4227__auto__,k1278044,else__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
var G__1278046 = (((k1278044 instanceof cljs.core.Keyword))?k1278044.fqn:null);
switch (G__1278046) {
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
return cljs.core.get.call(null,self__.__extmap,k1278044,else__4228__auto__);

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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4232__auto__,k__4233__auto__,G__1278043){
var self__ = this;
var this__4232__auto____$1 = this;
var pred__1278047 = cljs.core.keyword_identical_QMARK_;
var expr__1278048 = k__4233__auto__;
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(G__1278043,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__1278043,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__1278043,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__1278043,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__1278043,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,G__1278043,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1278047.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__1278048))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,G__1278043,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4233__auto__,G__1278043),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4224__auto__,G__1278043){
var self__ = this;
var this__4224__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,G__1278043,self__.__extmap,self__.__hash));
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

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__1278050){
var self__ = this;
var map__1278051 = p__1278050;
var map__1278051__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278051))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278051):map__1278051);
var opts = map__1278051__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__1278051__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__1278051__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__1278051__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
})()], null),((function (_QMARK_cb_fn,chsk__$1,map__1278051,map__1278051__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__1278052){
var map__1278055 = p__1278052;
var map__1278055__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278055))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278055):map__1278055);
var _QMARK_content = cljs.core.get.call(null,map__1278055__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__1278055__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__1278056 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__1278056,(0),null);
var _ = cljs.core.nth.call(null,vec__1278056,(1),null);
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
});})(_QMARK_cb_fn,chsk__$1,map__1278051,map__1278051__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
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
return (function ajax_cb(p__1278062){
var map__1278065 = p__1278062;
var map__1278065__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278065))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278065):map__1278065);
var _QMARK_content = cljs.core.get.call(null,map__1278065__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__1278065__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__1278066 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__1278066,(0),null);
var _ = cljs.core.nth.call(null,vec__1278066,(1),null);
var or__3622__auto___1278068 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(or__3622__auto___1278068)){
} else {
var buffered_evs_1278069 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_1278069);

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

taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__1278045){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__1278045),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__1278045),null,cljs.core.dissoc.call(null,G__1278045,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
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
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__1278070,websocket_QMARK_){
var map__1278072 = p__1278070;
var map__1278072__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278072))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278072):map__1278072);
var window_location = map__1278072__$1;
var pathname = cljs.core.get.call(null,map__1278072__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var host = cljs.core.get.call(null,map__1278072__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var protocol = cljs.core.get.call(null,map__1278072__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
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
var make_channel_socket_BANG___delegate = function (path,p__1278073){
var vec__1278086 = p__1278073;
var map__1278087 = cljs.core.nth.call(null,vec__1278086,(0),null);
var map__1278087__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278087))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278087):map__1278087);
var opts = map__1278087__$1;
var client_id = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var chsk_url_fn = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var ws_kalive_ms = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var recv_buf_or_n = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var type = cljs.core.get.call(null,map__1278087__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__1278086,(1),null);
if(cljs.core.truth_((function (){var vec__1278088 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
}catch (e1278090){if((e1278090 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278090;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278090;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1278088,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1278088,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1278089 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,x__19401__auto__)], null);
}catch (e1278091){if((e1278091 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278091;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278091;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1278089,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1278089,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",981,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.truth_((function (){var vec__1278092 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null);
}catch (e1278094){if((e1278094 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278094;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278094;

}
}})();
var x__19401__auto__ = cljs.core.nth.call(null,vec__1278092,(0),null);
var _QMARK_x_err__19402__auto__ = cljs.core.nth.call(null,vec__1278092,(1),null);
var have_x_QMARK___19403__auto__ = (_QMARK_x_err__19402__auto__ == null);
var vec__1278093 = ((have_x_QMARK___19403__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nblank_str_QMARK_).call(null,x__19401__auto__)], null);
}catch (e1278095){if((e1278095 instanceof java.lang.Throwable)){
var t__19293__auto__ = e1278095;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__19293__auto__], null);
} else {
throw e1278095;

}
}})():null);
var pass_QMARK___19404__auto__ = cljs.core.nth.call(null,vec__1278093,(0),null);
var _QMARK_pred_err__19405__auto__ = cljs.core.nth.call(null,vec__1278093,(1),null);
if(cljs.core.truth_(pass_QMARK___19404__auto__)){
var or__3622__auto__ = true;
if(or__3622__auto__){
return or__3622__auto__;
} else {
return x__19401__auto__;
}
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",982,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"client-id","client-id",1175909387,null)),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null)),((have_x_QMARK___19403__auto__)?x__19401__auto__:_QMARK_x_err__19402__auto__),_QMARK_pred_err__19405__auto__);
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
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
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
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
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
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){
var vec__1278097 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__1278097,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__1278097,(1),null);
var ev__$1 = vec__1278097;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__1278086,map__1278087,map__1278087__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__1278073 = null;
if (arguments.length > 1) {
  p__1278073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_channel_socket_BANG___delegate.call(this,path,p__1278073);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__1278098){
var path = cljs.core.first(arglist__1278098);
var p__1278073 = cljs.core.rest(arglist__1278098);
return make_channel_socket_BANG___delegate(path,p__1278073);
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
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__1278099){
var vec__1278203 = p__1278099;
var map__1278204 = cljs.core.nth.call(null,vec__1278203,(0),null);
var map__1278204__$1 = ((cljs.core.seq_QMARK_.call(null,map__1278204))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278204):map__1278204);
var opts = map__1278204__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__1278204__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__9199__auto___1278306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_){
return (function (){
var f__9200__auto__ = (function (){var switch__9184__auto__ = ((function (c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_){
return (function (state_1278263){
var state_val_1278264 = (state_1278263[(1)]);
if((state_val_1278264 === (7))){
var inst_1278216 = (state_1278263[(2)]);
var inst_1278217 = cljs.core.nth.call(null,inst_1278216,(0),null);
var inst_1278218 = cljs.core.nth.call(null,inst_1278216,(1),null);
var inst_1278219 = taoensso.encore.kw_identical_QMARK_.call(null,inst_1278218,ch_ctrl);
var state_1278263__$1 = (function (){var statearr_1278265 = state_1278263;
(statearr_1278265[(7)] = inst_1278217);

return statearr_1278265;
})();
if(cljs.core.truth_(inst_1278219)){
var statearr_1278266_1278307 = state_1278263__$1;
(statearr_1278266_1278307[(1)] = (8));

} else {
var statearr_1278267_1278308 = state_1278263__$1;
(statearr_1278267_1278308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (20))){
var inst_1278229 = (state_1278263[(8)]);
var inst_1278243 = taoensso.sente.errorf.call(null,"Bad event: %s",inst_1278229);
var state_1278263__$1 = state_1278263;
var statearr_1278268_1278309 = state_1278263__$1;
(statearr_1278268_1278309[(2)] = inst_1278243);

(statearr_1278268_1278309[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (1))){
var state_1278263__$1 = state_1278263;
var statearr_1278269_1278310 = state_1278263__$1;
(statearr_1278269_1278310[(2)] = null);

(statearr_1278269_1278310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (24))){
var state_1278263__$1 = state_1278263;
var statearr_1278270_1278311 = state_1278263__$1;
(statearr_1278270_1278311[(2)] = null);

(statearr_1278270_1278311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (4))){
var inst_1278253 = (state_1278263[(2)]);
var inst_1278254 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_1278253);
var state_1278263__$1 = state_1278263;
if(cljs.core.truth_(inst_1278254)){
var statearr_1278271_1278312 = state_1278263__$1;
(statearr_1278271_1278312[(1)] = (23));

} else {
var statearr_1278272_1278313 = state_1278263__$1;
(statearr_1278272_1278313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (15))){
var inst_1278229 = (state_1278263[(8)]);
var inst_1278230 = (state_1278263[(2)]);
var inst_1278231 = taoensso.sente.errorf.call(null,"Chsk router handling error: %s",inst_1278229);
var state_1278263__$1 = (function (){var statearr_1278273 = state_1278263;
(statearr_1278273[(9)] = inst_1278230);

return statearr_1278273;
})();
var statearr_1278274_1278314 = state_1278263__$1;
(statearr_1278274_1278314[(2)] = inst_1278231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (21))){
var inst_1278228 = (state_1278263[(10)]);
var inst_1278245 = event_msg_handler.call(null,inst_1278228);
var state_1278263__$1 = state_1278263;
var statearr_1278275_1278315 = state_1278263__$1;
(statearr_1278275_1278315[(2)] = inst_1278245);

(statearr_1278275_1278315[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (13))){
var inst_1278228 = (state_1278263[(10)]);
var inst_1278228__$1 = (state_1278263[(2)]);
var inst_1278229 = cljs.core.get.call(null,inst_1278228__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_1278263__$1 = (function (){var statearr_1278276 = state_1278263;
(statearr_1278276[(10)] = inst_1278228__$1);

(statearr_1278276[(8)] = inst_1278229);

return statearr_1278276;
})();
var statearr_1278277_1278316 = state_1278263__$1;
(statearr_1278277_1278316[(2)] = null);

(statearr_1278277_1278316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (22))){
var inst_1278247 = (state_1278263[(2)]);
var state_1278263__$1 = (function (){var statearr_1278278 = state_1278263;
(statearr_1278278[(11)] = inst_1278247);

return statearr_1278278;
})();
var statearr_1278279_1278317 = state_1278263__$1;
(statearr_1278279_1278317[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1278263,(5),new cljs.core.Keyword(null,"default","default",-1987822328),null,(4));
var inst_1278212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1278213 = [ch_recv,ch_ctrl];
var inst_1278214 = (new cljs.core.PersistentVector(null,2,(5),inst_1278212,inst_1278213,null));
var state_1278263__$1 = state_1278263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1278263__$1,(7),inst_1278214);
} else {
if((state_val_1278264 === (25))){
var inst_1278259 = (state_1278263[(2)]);
var state_1278263__$1 = state_1278263;
var statearr_1278280_1278318 = state_1278263__$1;
(statearr_1278280_1278318[(2)] = inst_1278259);

(statearr_1278280_1278318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (17))){
var inst_1278229 = (state_1278263[(8)]);
var inst_1278236 = taoensso.sente.tracef.call(null,"Pre-handler event: %s",inst_1278229);
var state_1278263__$1 = state_1278263;
var statearr_1278281_1278319 = state_1278263__$1;
(statearr_1278281_1278319[(2)] = inst_1278236);

(statearr_1278281_1278319[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (3))){
var inst_1278261 = (state_1278263[(2)]);
var state_1278263__$1 = state_1278263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1278263__$1,inst_1278261);
} else {
if((state_val_1278264 === (12))){
var inst_1278217 = (state_1278263[(7)]);
var state_1278263__$1 = state_1278263;
var statearr_1278282_1278320 = state_1278263__$1;
(statearr_1278282_1278320[(2)] = inst_1278217);

(statearr_1278282_1278320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (2))){
var state_1278263__$1 = state_1278263;
var statearr_1278283_1278321 = state_1278263__$1;
(statearr_1278283_1278321[(2)] = null);

(statearr_1278283_1278321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (23))){
var state_1278263__$1 = state_1278263;
var statearr_1278284_1278322 = state_1278263__$1;
(statearr_1278284_1278322[(2)] = null);

(statearr_1278284_1278322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (19))){
var inst_1278228 = (state_1278263[(10)]);
var inst_1278239 = (state_1278263[(2)]);
var inst_1278240 = taoensso.sente.event_msg_QMARK_.call(null,inst_1278228);
var inst_1278241 = !(inst_1278240);
var state_1278263__$1 = (function (){var statearr_1278285 = state_1278263;
(statearr_1278285[(12)] = inst_1278239);

return statearr_1278285;
})();
if(inst_1278241){
var statearr_1278286_1278323 = state_1278263__$1;
(statearr_1278286_1278323[(1)] = (20));

} else {
var statearr_1278287_1278324 = state_1278263__$1;
(statearr_1278287_1278324[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (11))){
var inst_1278217 = (state_1278263[(7)]);
var inst_1278225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1278217);
var state_1278263__$1 = state_1278263;
var statearr_1278288_1278325 = state_1278263__$1;
(statearr_1278288_1278325[(2)] = inst_1278225);

(statearr_1278288_1278325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (9))){
var inst_1278217 = (state_1278263[(7)]);
var inst_1278223 = cljs.core.seq_QMARK_.call(null,inst_1278217);
var state_1278263__$1 = state_1278263;
if(inst_1278223){
var statearr_1278289_1278326 = state_1278263__$1;
(statearr_1278289_1278326[(1)] = (11));

} else {
var statearr_1278290_1278327 = state_1278263__$1;
(statearr_1278290_1278327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (5))){
var inst_1278206 = (state_1278263[(2)]);
var inst_1278207 = taoensso.sente.errorf.call(null,"Chsk router channel error!");
var state_1278263__$1 = (function (){var statearr_1278291 = state_1278263;
(statearr_1278291[(13)] = inst_1278206);

return statearr_1278291;
})();
var statearr_1278292_1278328 = state_1278263__$1;
(statearr_1278292_1278328[(2)] = inst_1278207);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (14))){
var inst_1278249 = (state_1278263[(2)]);
var state_1278263__$1 = state_1278263;
var statearr_1278293_1278329 = state_1278263__$1;
(statearr_1278293_1278329[(2)] = inst_1278249);

(statearr_1278293_1278329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1278263,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var state_1278263__$1 = state_1278263;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_1278294_1278330 = state_1278263__$1;
(statearr_1278294_1278330[(1)] = (17));

} else {
var statearr_1278295_1278331 = state_1278263__$1;
(statearr_1278295_1278331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (10))){
var inst_1278251 = (state_1278263[(2)]);
var state_1278263__$1 = state_1278263;
var statearr_1278296_1278332 = state_1278263__$1;
(statearr_1278296_1278332[(2)] = inst_1278251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (18))){
var state_1278263__$1 = state_1278263;
var statearr_1278297_1278333 = state_1278263__$1;
(statearr_1278297_1278333[(2)] = null);

(statearr_1278297_1278333[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1278264 === (8))){
var state_1278263__$1 = state_1278263;
var statearr_1278298_1278334 = state_1278263__$1;
(statearr_1278298_1278334[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_1278298_1278334[(1)] = (10));


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
});})(c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__9184__auto__,c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__9185__auto__ = null;
var state_machine__9185__auto____0 = (function (){
var statearr_1278302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1278302[(0)] = state_machine__9185__auto__);

(statearr_1278302[(1)] = (1));

return statearr_1278302;
});
var state_machine__9185__auto____1 = (function (state_1278263){
while(true){
var ret_value__9186__auto__ = (function (){try{while(true){
var result__9187__auto__ = switch__9184__auto__.call(null,state_1278263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9187__auto__;
}
break;
}
}catch (e1278303){if((e1278303 instanceof Object)){
var ex__9188__auto__ = e1278303;
var statearr_1278304_1278335 = state_1278263;
(statearr_1278304_1278335[(5)] = ex__9188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1278263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1278303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1278336 = state_1278263;
state_1278263 = G__1278336;
continue;
} else {
return ret_value__9186__auto__;
}
break;
}
});
state_machine__9185__auto__ = function(state_1278263){
switch(arguments.length){
case 0:
return state_machine__9185__auto____0.call(this);
case 1:
return state_machine__9185__auto____1.call(this,state_1278263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9185__auto____0;
state_machine__9185__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9185__auto____1;
return state_machine__9185__auto__;
})()
;})(switch__9184__auto__,c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_))
})();
var state__9201__auto__ = (function (){var statearr_1278305 = f__9200__auto__.call(null);
(statearr_1278305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9199__auto___1278306);

return statearr_1278305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9201__auto__);
});})(c__9199__auto___1278306,ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__1278203,map__1278204,map__1278204__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__1278099 = null;
if (arguments.length > 2) {
  p__1278099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__1278099);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__1278337){
var ch_recv = cljs.core.first(arglist__1278337);
arglist__1278337 = cljs.core.next(arglist__1278337);
var event_msg_handler = cljs.core.first(arglist__1278337);
var p__1278099 = cljs.core.rest(arglist__1278337);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__1278099);
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