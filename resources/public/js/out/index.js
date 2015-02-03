// Compiled by ClojureScript 0.0-2505
goog.provide('index');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('util');
goog.require('landing');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('cljs.reader');
index.verifyAssertion = (function verifyAssertion(assertion){
util.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,bkeeping.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var response = [cljs.core.str("["),cljs.core.str(data),cljs.core.str("]")].join('');
var response_edn = cljs.reader.read_string.call(null,response);
var responseF = cljs.core.reduce.call(null,((function (data,response,response_edn){
return (function (p1__34445_SHARP_,p2__34446_SHARP_){
return cljs.core.assoc.call(null,p1__34445_SHARP_,cljs.core.first.call(null,p2__34446_SHARP_),cljs.core.second.call(null,p2__34446_SHARP_));
});})(data,response,response_edn))
,cljs.core.PersistentArrayMap.EMPTY,response_edn);
return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/landing",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (data,response,response_edn,responseF){
return (function (e__$1,xhr__$1){
var result = xhr__$1.getResponseText();
cljs.core.swap_BANG_.call(null,landing.user_state,((function (result,data,response,response_edn,responseF){
return (function (inp){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"groupname","groupname",-493355733),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,result))))),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,result))))))),new cljs.core.Keyword(null,"source","source",-433931539),result], null);
});})(result,data,response,response_edn,responseF))
);

return landing.main.call(null);
});})(data,response,response_edn,responseF))
], null));
}))], null));
});
index.signoutUser = (function signoutUser(){
util.console_log.call(null,"signoutUser CALLED");

return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.constantly.call(null,(1))], null));
});
index.onClickHandler = (function onClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
util.console_log.call(null,"Signin CLICKED");

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),index.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),index.signoutUser], null)));

return navigatorId.request();
});
index.start = (function start(){
var temp__4124__auto__ = goog.dom.getElement("signin");
if(cljs.core.truth_(temp__4124__auto__)){
var signinLink = temp__4124__auto__;
return signinLink.onclick = index.onClickHandler;
} else {
return null;
}
});
index.start.call(null);

//# sourceMappingURL=index.js.map