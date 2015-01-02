// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('bkeeping');
goog.require('goog.dom');
goog.require('kom');
goog.require('om.dom');
goog.require('view');
goog.require('weasel.repl');
goog.require('goog.string');
goog.require('figwheel.client');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
weasel.repl.connect.call(null,"ws://172.28.128.5:9001");
landing.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"6",new cljs.core.Keyword(null,"name","name",1843675177),"widgets",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"5",new cljs.core.Keyword(null,"name","name",1843675177),"electricity",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"0",new cljs.core.Keyword(null,"name","name",1843675177),"cash",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"2",new cljs.core.Keyword(null,"name","name",1843675177),"revenue",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"revenue","revenue",943993380),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"3",new cljs.core.Keyword(null,"name","name",1843675177),"expense",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"4",new cljs.core.Keyword(null,"name","name",1843675177),"trade-creditor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"debit","debit",214956555)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"1",new cljs.core.Keyword(null,"name","name",1843675177),"debt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"liability","liability",853006629),new cljs.core.Keyword(null,"counterWeight","counterWeight",99066871),new cljs.core.Keyword(null,"credit","credit",782856892)], null)], true),new cljs.core.Keyword(null,"journals","journals",-1915761091),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"generalledger",new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),new Date(1418426450520),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"credit","credit",782856892),new cljs.core.Keyword(null,"amount","amount",364489504),(2600),new cljs.core.Keyword(null,"account","account",718006320),"trade-creditor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1000),new cljs.core.Keyword(null,"account","account",718006320),"electricity"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"amount","amount",364489504),(1600),new cljs.core.Keyword(null,"account","account",718006320),"widgets"], null)], null)], null)], true)], null)], true)], null));
landing.view = (function view__$1(app,owner){
if(typeof landing.t20602 !== 'undefined'){
} else {

/**
* @constructor
*/
landing.t20602 = (function (owner,app,view,meta20603){
this.owner = owner;
this.app = app;
this.view = view;
this.meta20603 = meta20603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
landing.t20602.prototype.om$core$IRender$ = true;

landing.t20602.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,document.createElement("div"));
});

landing.t20602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20604){
var self__ = this;
var _20604__$1 = this;
return self__.meta20603;
});

landing.t20602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20604,meta20603__$1){
var self__ = this;
var _20604__$1 = this;
return (new landing.t20602(self__.owner,self__.app,self__.view,meta20603__$1));
});

landing.t20602.cljs$lang$type = true;

landing.t20602.cljs$lang$ctorStr = "landing/t20602";

landing.t20602.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"landing/t20602");
});

landing.__GT_t20602 = (function __GT_t20602(owner__$1,app__$1,view__$2,meta20603){
return (new landing.t20602(owner__$1,app__$1,view__$2,meta20603));
});

}

return (new landing.t20602(owner,app,view__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),32,new cljs.core.Keyword(null,"end-line","end-line",1837326455),84,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/templ/clojurescript/landing.cljs"], null)));
});
om.core.root.call(null,landing.view,landing.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.querySelector("body")], null));
landing.onClickHandler = (function onClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
bkeeping.console_log.call(null,"Signout CLICKED");

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),landing.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),landing.signoutUser], null)));

return navigatorId.request();
});
landing.start = (function start(){
var signinLink = goog.dom.getElement("signout");
return signinLink.onclick = landing.onClickHandler;
});
window.onload = landing.start;
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return cljs.core.print.call(null,"reloaded");
})], null));

//# sourceMappingURL=landing.js.map