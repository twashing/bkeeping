// Compiled by ClojureScript 0.0-2505
goog.provide('cursors');
goog.require('cljs.core');

cursors.ICursor = (function (){var obj6888 = {};
return obj6888;
})();

cursors.path = (function path(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$ICursor$path$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$ICursor$path$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.path[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.path["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.path",cursor);
}
}
})().call(null,cursor);
}
});

cursors.state = (function state(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$ICursor$state$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$ICursor$state$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.state[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.state["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.state",cursor);
}
}
})().call(null,cursor);
}
});

cursors.parent = (function parent(cursor){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$ICursor$parent$arity$1;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$ICursor$parent$arity$1(cursor);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.parent[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.parent["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.parent",cursor);
}
}
})().call(null,cursor);
}
});

cursors.transact = (function transact(cursor,new_state){
if((function (){var and__3610__auto__ = cursor;
if(and__3610__auto__){
return cursor.cursors$ICursor$transact$arity$2;
} else {
return and__3610__auto__;
}
})()){
return cursor.cursors$ICursor$transact$arity$2(cursor,new_state);
} else {
var x__4266__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3622__auto__ = (cursors.transact[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cursors.transact["_"]);
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
cursors.MapCursor = (function (parent,state,path){
this.parent = parent;
this.state = state;
this.path = path;
})
cursors.MapCursor.prototype.cursors$ICursor$ = true;

cursors.MapCursor.prototype.cursors$ICursor$path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

cursors.MapCursor.prototype.cursors$ICursor$state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cursors.MapCursor.prototype.cursors$ICursor$parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
});

cursors.MapCursor.prototype.cursors$ICursor$transact$arity$2 = (function (_,new_state){
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

cursors.MapCursor.cljs$lang$type = true;

cursors.MapCursor.cljs$lang$ctorStr = "cursors/MapCursor";

cursors.MapCursor.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cursors/MapCursor");
});

cursors.__GT_MapCursor = (function __GT_MapCursor(parent,state,path){
return (new cursors.MapCursor(parent,state,path));
});

cursors.cursor = (function cursor(state,path){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,state),cursors.MapCursor)){
return (new cursors.MapCursor(state,state.state(),cljs.core.concat.call(null,state.path(),path)));
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,state))){
return (new cursors.MapCursor(null,state,path));
} else {
return null;
}
}
});

//# sourceMappingURL=cursors.js.map