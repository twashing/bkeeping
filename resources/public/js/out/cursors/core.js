// Compiled by ClojureScript 0.0-2505
goog.provide('cursors.core');
goog.require('cljs.core');

cursors.core.ICursor = (function (){var obj12417 = {};
return obj12417;
})();

cursors.core.path = (function path(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$core$ICursor$path$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$core$ICursor$path$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.core.path[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.core.path["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.path",cursor);
}
}
})().call(null,cursor);
}
});

cursors.core.state = (function state(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$core$ICursor$state$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$core$ICursor$state$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.core.state[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.core.state["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.state",cursor);
}
}
})().call(null,cursor);
}
});

cursors.core.parent = (function parent(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$core$ICursor$parent$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$core$ICursor$parent$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.core.parent[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.core.parent["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.parent",cursor);
}
}
})().call(null,cursor);
}
});

cursors.core.transact = (function transact(cursor,new_state){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$core$ICursor$transact$arity$2;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$core$ICursor$transact$arity$2(cursor,new_state);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.core.transact[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.core.transact["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
cursors.core.MapCursor = (function (parent,state,path){
this.parent = parent;
this.state = state;
this.path = path;
})
cursors.core.MapCursor.prototype.cursors$core$ICursor$ = true;

cursors.core.MapCursor.prototype.cursors$core$ICursor$path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

cursors.core.MapCursor.prototype.cursors$core$ICursor$state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cursors.core.MapCursor.prototype.cursors$core$ICursor$parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
});

cursors.core.MapCursor.prototype.cursors$core$ICursor$transact$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1){
return (function (e){
return cljs.core.update_in.call(null,e,self__.path,((function (___$1){
return (function (___$2){
return new_state;
});})(___$1))
);
});})(___$1))
);
});

cursors.core.MapCursor.cljs$lang$type = true;

cursors.core.MapCursor.cljs$lang$ctorStr = "cursors.core/MapCursor";

cursors.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cursors.core/MapCursor");
});

cursors.core.__GT_MapCursor = (function __GT_MapCursor(parent,state,path){
return (new cursors.core.MapCursor(parent,state,path));
});

cursors.core.cursor = (function cursor(state,path){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,state),cursors.core.MapCursor)){
return (new cursors.core.MapCursor(state,state.state(),cljs.core.concat.call(null,state.path(),path)));
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,state))){
return (new cursors.core.MapCursor(null,state,path));
} else {
return null;
}
}
});

//# sourceMappingURL=core.js.map