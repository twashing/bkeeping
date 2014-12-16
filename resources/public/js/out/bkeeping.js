// Compiled by ClojureScript 0.0-2371
goog.provide('bkeeping');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
bkeeping.console_log = (function console_log(message){return console.log(message);
});
bkeeping.transitionAccounts = (function transitionAccounts(){var as = goog.dom.getElement("accounts");return as.selected = ((1) + as.selected);
});
bkeeping.transitionEntries = (function transitionEntries(){var es = goog.dom.getElement("entries");return es.selected = ((1) + es.selected);
});
bkeeping.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
bkeeping.edn_xhr = (function edn_xhr(p__5119){var map__5121 = p__5119;var map__5121__$1 = ((cljs.core.seq_QMARK_.call(null,map__5121))?cljs.core.apply.call(null,cljs.core.hash_map,map__5121):map__5121);var on_complete = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__5121,map__5121__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__5121,map__5121__$1,on_complete,data,url,method))
);
return xhr.send(url,bkeeping.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
bkeeping.basicHandler = (function basicHandler(res){if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res)))
{bkeeping.console_log.call(null,("XMLHttpRequest SUCCESS: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)));
return window.location.reload();
} else
{bkeeping.console_log.call(null,("XMLHttpRequest ERROR: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)));
return navigator.id.logout();
}
});
bkeeping.verifyAssertion = (function verifyAssertion(assertion){bkeeping.console_log.call(null,("verifyAssertion CALLED / assertion: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(assertion)));
return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),bkeeping.basicHandler], null));
});
bkeeping.signoutUser = (function signoutUser(){bkeeping.console_log.call(null,"signoutUser CALLED");
return bkeeping.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),bkeeping.basicHandler], null));
});
bkeeping.onClickHandler = (function onClickHandler(){var currentUser = "twashing@gmail.com";var navigatorId = navigator.id;bkeeping.console_log.call(null,"Signin CLICKED");
navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),bkeeping.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),bkeeping.signoutUser], null)));
return navigatorId.request();
});
bkeeping.start = (function start(){var signinLink = goog.dom.getElement("signin");return signinLink.onclick = bkeeping.onClickHandler;
});
window.onload = bkeeping.start;

//# sourceMappingURL=bkeeping.js.map