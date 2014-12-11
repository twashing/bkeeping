// Compiled by ClojureScript 0.0-2371
goog.provide('bkeeping');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('ajax.core');
bkeeping.greet = (function greet(n){return ("Hello "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});
goog.exportSymbol('bkeeping.greet', bkeeping.greet);
bkeeping.console_log = (function console_log(message){return console.log(message);
});
bkeeping.verifyAssertion = (function verifyAssertion(assertion){return bkeeping.console_log.call(null,("verifyAssertion CALLED / assertion["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(assertion)+"]"));
});
bkeeping.signoutUser = (function signoutUser(){return bkeeping.console_log.call(null,"signoutUser CALLED");
});
bkeeping.on_click_handler = (function on_click_handler(){var currentUser = "twashing@gmail.com";var navigatorId = navigator.id;bkeeping.console_log.call(null,"Signin CLICKED");
return navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),bkeeping.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),bkeeping.signoutUser], null)));
});
bkeeping.start = (function start(){var signinLink = goog.dom.getElement("signin");return signinLink.onclick = bkeeping.on_click_handler;
});
window.onload = bkeeping.start;