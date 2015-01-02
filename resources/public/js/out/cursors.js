// Compiled by ClojureScript 0.0-2505
goog.provide('cursors');
goog.require('cljs.core');

cursors.ICursor = (function (){var obj20773 = {};
return obj20773;
})();

cursors.path = (function path(cursor){
if((function (){var and__12533__auto__ = cursor;
if(and__12533__auto__){
return cursor.cursors$ICursor$path$arity$1;
} else {
return and__12533__auto__;
}
})()){
return cursor.cursors$ICursor$path$arity$1(cursor);
} else {
var x__13189__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12545__auto__ = (cursors.path[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cursors.path["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.path",cursor);
}
}
})().call(null,cursor);
}
});

cursors.state = (function state(cursor){
if((function (){var and__12533__auto__ = cursor;
if(and__12533__auto__){
return cursor.cursors$ICursor$state$arity$1;
} else {
return and__12533__auto__;
}
})()){
return cursor.cursors$ICursor$state$arity$1(cursor);
} else {
var x__13189__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12545__auto__ = (cursors.state[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cursors.state["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.state",cursor);
}
}
})().call(null,cursor);
}
});

cursors.transact = (function transact(cursor,new_state){
if((function (){var and__12533__auto__ = cursor;
if(and__12533__auto__){
return cursor.cursors$ICursor$transact$arity$2;
} else {
return and__12533__auto__;
}
})()){
return cursor.cursors$ICursor$transact$arity$2(cursor,new_state);
} else {
var x__13189__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12545__auto__ = (cursors.transact[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cursors.transact["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.transact",cursor);
}
}
})().call(null,cursor,new_state);
}
});


/**
* @constructor
*/
cursors.MapCursor = (function (state,path){
this.state = state;
this.path = path;
})
cursors.MapCursor.prototype.cursors$ICursor$ = true;

cursors.MapCursor.prototype.cursors$ICursor$path$arity$1 = (function (cursor){
var self__ = this;
var cursor__$1 = this;
return self__.path;
});

cursors.MapCursor.prototype.cursors$ICursor$state$arity$1 = (function (cursor){
var self__ = this;
var cursor__$1 = this;
return self__.state;
});

cursors.MapCursor.prototype.cursors$ICursor$transact$arity$2 = (function (cursor,new_state){
var self__ = this;
var cursor__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (cursor__$1){
return (function (e){
return cljs.core.update_in.call(null,e,self__.path,((function (cursor__$1){
return (function (_){
return new_state;
});})(cursor__$1))
);
});})(cursor__$1))
);
});

cursors.MapCursor.cljs$lang$type = true;

cursors.MapCursor.cljs$lang$ctorStr = "cursors/MapCursor";

cursors.MapCursor.cljs$lang$ctorPrWriter = (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"cursors/MapCursor");
});

cursors.__GT_MapCursor = (function __GT_MapCursor(state,path){
return (new cursors.MapCursor(state,path));
});

cursors.cursor = (function cursor(state,path){
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,state))){
return (new cursors.MapCursor(state,path));
} else {
return null;
}
});

//# sourceMappingURL=cursors.js.map