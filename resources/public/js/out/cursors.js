// Compiled by ClojureScript 0.0-2505
goog.provide('cursors');
goog.require('cljs.core');

cursors.ICursor = (function (){var obj20735 = {};
return obj20735;
})();

cursors._path = (function _path(cursor){
if((function (){var and__12533__auto__ = cursor;
if(and__12533__auto__){
return cursor.cursors$ICursor$_path$arity$1;
} else {
return and__12533__auto__;
}
})()){
return cursor.cursors$ICursor$_path$arity$1(cursor);
} else {
var x__13189__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12545__auto__ = (cursors._path[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cursors._path["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

cursors._state = (function _state(cursor){
if((function (){var and__12533__auto__ = cursor;
if(and__12533__auto__){
return cursor.cursors$ICursor$_state$arity$1;
} else {
return and__12533__auto__;
}
})()){
return cursor.cursors$ICursor$_state$arity$1(cursor);
} else {
var x__13189__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12545__auto__ = (cursors._state[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (cursors._state["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
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

cursors.MapCursor.prototype.cursors$ICursor$_path$arity$1 = (function (cursor){
var self__ = this;
var cursor__$1 = this;
return self__.path;
});

cursors.MapCursor.prototype.cursors$ICursor$_state$arity$1 = (function (cursor){
var self__ = this;
var cursor__$1 = this;
return self__.state;
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
cursors.transact = (function transact(cursor,new_state){
var old_state = cursor.state;
var path = cursor.path;
return cljs.core.swap_BANG_.call(null,old_state,((function (old_state,path){
return (function (e){
return cljs.core.update_in.call(null,e,path,((function (old_state,path){
return (function (_){
return new_state;
});})(old_state,path))
);
});})(old_state,path))
);
});

//# sourceMappingURL=cursors.js.map