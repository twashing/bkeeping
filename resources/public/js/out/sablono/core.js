// Compiled by ClojureScript 0.0-2505
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__266207__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__266206 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__266206,(0),null);
var body = cljs.core.nthnext.call(null,vec__266206,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__266207 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__266207__delegate.call(this,args);};
G__266207.cljs$lang$maxFixedArity = 0;
G__266207.cljs$lang$applyTo = (function (arglist__266208){
var args = cljs.core.seq(arglist__266208);
return G__266207__delegate(args);
});
G__266207.cljs$core$IFn$_invoke$arity$variadic = G__266207__delegate;
return G__266207;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__266213(s__266214){
return (new cljs.core.LazySeq(null,(function (){
var s__266214__$1 = s__266214;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__266214__$1);
if(temp__4126__auto__){
var s__266214__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__266214__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__266214__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__266216 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__266215 = (0);
while(true){
if((i__266215 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__266215);
cljs.core.chunk_append.call(null,b__266216,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__266217 = (i__266215 + (1));
i__266215 = G__266217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266216),iter__266213.call(null,cljs.core.chunk_rest.call(null,s__266214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266216),null);
}
} else {
var args = cljs.core.first.call(null,s__266214__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__266213.call(null,cljs.core.rest.call(null,s__266214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4378__auto__ = (function iter__266222(s__266223){
return (new cljs.core.LazySeq(null,(function (){
var s__266223__$1 = s__266223;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__266223__$1);
if(temp__4126__auto__){
var s__266223__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__266223__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__266223__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__266225 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__266224 = (0);
while(true){
if((i__266224 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__266224);
cljs.core.chunk_append.call(null,b__266225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__266226 = (i__266224 + (1));
i__266224 = G__266226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266225),iter__266222.call(null,cljs.core.chunk_rest.call(null,s__266223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266225),null);
}
} else {
var style = cljs.core.first.call(null,s__266223__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__266222.call(null,cljs.core.rest.call(null,s__266223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__266227){
var styles = cljs.core.seq(arglist__266227);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to266228 = (function() { 
var link_to266228__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to266228 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to266228__delegate.call(this,url,content);};
link_to266228.cljs$lang$maxFixedArity = 1;
link_to266228.cljs$lang$applyTo = (function (arglist__266229){
var url = cljs.core.first(arglist__266229);
var content = cljs.core.rest(arglist__266229);
return link_to266228__delegate(url,content);
});
link_to266228.cljs$core$IFn$_invoke$arity$variadic = link_to266228__delegate;
return link_to266228;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to266228);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to266230 = (function() { 
var mail_to266230__delegate = function (e_mail,p__266231){
var vec__266233 = p__266231;
var content = cljs.core.nth.call(null,vec__266233,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to266230 = function (e_mail,var_args){
var p__266231 = null;
if (arguments.length > 1) {
  p__266231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to266230__delegate.call(this,e_mail,p__266231);};
mail_to266230.cljs$lang$maxFixedArity = 1;
mail_to266230.cljs$lang$applyTo = (function (arglist__266234){
var e_mail = cljs.core.first(arglist__266234);
var p__266231 = cljs.core.rest(arglist__266234);
return mail_to266230__delegate(e_mail,p__266231);
});
mail_to266230.cljs$core$IFn$_invoke$arity$variadic = mail_to266230__delegate;
return mail_to266230;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to266230);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list266235 = (function unordered_list266235(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__266240(s__266241){
return (new cljs.core.LazySeq(null,(function (){
var s__266241__$1 = s__266241;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__266241__$1);
if(temp__4126__auto__){
var s__266241__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__266241__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__266241__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__266243 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__266242 = (0);
while(true){
if((i__266242 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__266242);
cljs.core.chunk_append.call(null,b__266243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__266244 = (i__266242 + (1));
i__266242 = G__266244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266243),iter__266240.call(null,cljs.core.chunk_rest.call(null,s__266241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266243),null);
}
} else {
var x = cljs.core.first.call(null,s__266241__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__266240.call(null,cljs.core.rest.call(null,s__266241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list266235);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list266245 = (function ordered_list266245(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__266250(s__266251){
return (new cljs.core.LazySeq(null,(function (){
var s__266251__$1 = s__266251;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__266251__$1);
if(temp__4126__auto__){
var s__266251__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__266251__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__266251__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__266253 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__266252 = (0);
while(true){
if((i__266252 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__266252);
cljs.core.chunk_append.call(null,b__266253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__266254 = (i__266252 + (1));
i__266252 = G__266254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266253),iter__266250.call(null,cljs.core.chunk_rest.call(null,s__266251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266253),null);
}
} else {
var x = cljs.core.first.call(null,s__266251__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__266250.call(null,cljs.core.rest.call(null,s__266251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list266245);
/**
* Create an image element.
*/
sablono.core.image266255 = (function() {
var image266255 = null;
var image266255__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image266255__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image266255 = function(src,alt){
switch(arguments.length){
case 1:
return image266255__1.call(this,src);
case 2:
return image266255__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image266255.cljs$core$IFn$_invoke$arity$1 = image266255__1;
image266255.cljs$core$IFn$_invoke$arity$2 = image266255__2;
return image266255;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image266255);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__266256_SHARP_,p2__266257_SHARP_){
return [cljs.core.str(p1__266256_SHARP_),cljs.core.str("["),cljs.core.str(p2__266257_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__266258_SHARP_,p2__266259_SHARP_){
return [cljs.core.str(p1__266258_SHARP_),cljs.core.str("-"),cljs.core.str(p2__266259_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field266260 = (function() {
var color_field266260 = null;
var color_field266260__1 = (function (name__9770__auto__){
return color_field266260.call(null,name__9770__auto__,null);
});
var color_field266260__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field266260 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field266260__1.call(this,name__9770__auto__);
case 2:
return color_field266260__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field266260.cljs$core$IFn$_invoke$arity$1 = color_field266260__1;
color_field266260.cljs$core$IFn$_invoke$arity$2 = color_field266260__2;
return color_field266260;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field266260);

/**
* Creates a date input field.
*/
sablono.core.date_field266261 = (function() {
var date_field266261 = null;
var date_field266261__1 = (function (name__9770__auto__){
return date_field266261.call(null,name__9770__auto__,null);
});
var date_field266261__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field266261 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field266261__1.call(this,name__9770__auto__);
case 2:
return date_field266261__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field266261.cljs$core$IFn$_invoke$arity$1 = date_field266261__1;
date_field266261.cljs$core$IFn$_invoke$arity$2 = date_field266261__2;
return date_field266261;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field266261);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field266262 = (function() {
var datetime_field266262 = null;
var datetime_field266262__1 = (function (name__9770__auto__){
return datetime_field266262.call(null,name__9770__auto__,null);
});
var datetime_field266262__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field266262 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field266262__1.call(this,name__9770__auto__);
case 2:
return datetime_field266262__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field266262.cljs$core$IFn$_invoke$arity$1 = datetime_field266262__1;
datetime_field266262.cljs$core$IFn$_invoke$arity$2 = datetime_field266262__2;
return datetime_field266262;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field266262);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field266263 = (function() {
var datetime_local_field266263 = null;
var datetime_local_field266263__1 = (function (name__9770__auto__){
return datetime_local_field266263.call(null,name__9770__auto__,null);
});
var datetime_local_field266263__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field266263 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field266263__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field266263__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field266263.cljs$core$IFn$_invoke$arity$1 = datetime_local_field266263__1;
datetime_local_field266263.cljs$core$IFn$_invoke$arity$2 = datetime_local_field266263__2;
return datetime_local_field266263;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field266263);

/**
* Creates a email input field.
*/
sablono.core.email_field266264 = (function() {
var email_field266264 = null;
var email_field266264__1 = (function (name__9770__auto__){
return email_field266264.call(null,name__9770__auto__,null);
});
var email_field266264__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field266264 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field266264__1.call(this,name__9770__auto__);
case 2:
return email_field266264__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field266264.cljs$core$IFn$_invoke$arity$1 = email_field266264__1;
email_field266264.cljs$core$IFn$_invoke$arity$2 = email_field266264__2;
return email_field266264;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field266264);

/**
* Creates a file input field.
*/
sablono.core.file_field266265 = (function() {
var file_field266265 = null;
var file_field266265__1 = (function (name__9770__auto__){
return file_field266265.call(null,name__9770__auto__,null);
});
var file_field266265__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field266265 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field266265__1.call(this,name__9770__auto__);
case 2:
return file_field266265__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field266265.cljs$core$IFn$_invoke$arity$1 = file_field266265__1;
file_field266265.cljs$core$IFn$_invoke$arity$2 = file_field266265__2;
return file_field266265;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field266265);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field266266 = (function() {
var hidden_field266266 = null;
var hidden_field266266__1 = (function (name__9770__auto__){
return hidden_field266266.call(null,name__9770__auto__,null);
});
var hidden_field266266__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field266266 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field266266__1.call(this,name__9770__auto__);
case 2:
return hidden_field266266__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field266266.cljs$core$IFn$_invoke$arity$1 = hidden_field266266__1;
hidden_field266266.cljs$core$IFn$_invoke$arity$2 = hidden_field266266__2;
return hidden_field266266;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field266266);

/**
* Creates a month input field.
*/
sablono.core.month_field266267 = (function() {
var month_field266267 = null;
var month_field266267__1 = (function (name__9770__auto__){
return month_field266267.call(null,name__9770__auto__,null);
});
var month_field266267__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field266267 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field266267__1.call(this,name__9770__auto__);
case 2:
return month_field266267__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field266267.cljs$core$IFn$_invoke$arity$1 = month_field266267__1;
month_field266267.cljs$core$IFn$_invoke$arity$2 = month_field266267__2;
return month_field266267;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field266267);

/**
* Creates a number input field.
*/
sablono.core.number_field266268 = (function() {
var number_field266268 = null;
var number_field266268__1 = (function (name__9770__auto__){
return number_field266268.call(null,name__9770__auto__,null);
});
var number_field266268__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field266268 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field266268__1.call(this,name__9770__auto__);
case 2:
return number_field266268__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field266268.cljs$core$IFn$_invoke$arity$1 = number_field266268__1;
number_field266268.cljs$core$IFn$_invoke$arity$2 = number_field266268__2;
return number_field266268;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field266268);

/**
* Creates a password input field.
*/
sablono.core.password_field266269 = (function() {
var password_field266269 = null;
var password_field266269__1 = (function (name__9770__auto__){
return password_field266269.call(null,name__9770__auto__,null);
});
var password_field266269__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field266269 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field266269__1.call(this,name__9770__auto__);
case 2:
return password_field266269__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field266269.cljs$core$IFn$_invoke$arity$1 = password_field266269__1;
password_field266269.cljs$core$IFn$_invoke$arity$2 = password_field266269__2;
return password_field266269;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field266269);

/**
* Creates a range input field.
*/
sablono.core.range_field266270 = (function() {
var range_field266270 = null;
var range_field266270__1 = (function (name__9770__auto__){
return range_field266270.call(null,name__9770__auto__,null);
});
var range_field266270__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field266270 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field266270__1.call(this,name__9770__auto__);
case 2:
return range_field266270__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field266270.cljs$core$IFn$_invoke$arity$1 = range_field266270__1;
range_field266270.cljs$core$IFn$_invoke$arity$2 = range_field266270__2;
return range_field266270;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field266270);

/**
* Creates a search input field.
*/
sablono.core.search_field266271 = (function() {
var search_field266271 = null;
var search_field266271__1 = (function (name__9770__auto__){
return search_field266271.call(null,name__9770__auto__,null);
});
var search_field266271__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field266271 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field266271__1.call(this,name__9770__auto__);
case 2:
return search_field266271__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field266271.cljs$core$IFn$_invoke$arity$1 = search_field266271__1;
search_field266271.cljs$core$IFn$_invoke$arity$2 = search_field266271__2;
return search_field266271;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field266271);

/**
* Creates a tel input field.
*/
sablono.core.tel_field266272 = (function() {
var tel_field266272 = null;
var tel_field266272__1 = (function (name__9770__auto__){
return tel_field266272.call(null,name__9770__auto__,null);
});
var tel_field266272__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field266272 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field266272__1.call(this,name__9770__auto__);
case 2:
return tel_field266272__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field266272.cljs$core$IFn$_invoke$arity$1 = tel_field266272__1;
tel_field266272.cljs$core$IFn$_invoke$arity$2 = tel_field266272__2;
return tel_field266272;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field266272);

/**
* Creates a text input field.
*/
sablono.core.text_field266273 = (function() {
var text_field266273 = null;
var text_field266273__1 = (function (name__9770__auto__){
return text_field266273.call(null,name__9770__auto__,null);
});
var text_field266273__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field266273 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field266273__1.call(this,name__9770__auto__);
case 2:
return text_field266273__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field266273.cljs$core$IFn$_invoke$arity$1 = text_field266273__1;
text_field266273.cljs$core$IFn$_invoke$arity$2 = text_field266273__2;
return text_field266273;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field266273);

/**
* Creates a time input field.
*/
sablono.core.time_field266274 = (function() {
var time_field266274 = null;
var time_field266274__1 = (function (name__9770__auto__){
return time_field266274.call(null,name__9770__auto__,null);
});
var time_field266274__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field266274 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field266274__1.call(this,name__9770__auto__);
case 2:
return time_field266274__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field266274.cljs$core$IFn$_invoke$arity$1 = time_field266274__1;
time_field266274.cljs$core$IFn$_invoke$arity$2 = time_field266274__2;
return time_field266274;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field266274);

/**
* Creates a url input field.
*/
sablono.core.url_field266275 = (function() {
var url_field266275 = null;
var url_field266275__1 = (function (name__9770__auto__){
return url_field266275.call(null,name__9770__auto__,null);
});
var url_field266275__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field266275 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field266275__1.call(this,name__9770__auto__);
case 2:
return url_field266275__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field266275.cljs$core$IFn$_invoke$arity$1 = url_field266275__1;
url_field266275.cljs$core$IFn$_invoke$arity$2 = url_field266275__2;
return url_field266275;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field266275);

/**
* Creates a week input field.
*/
sablono.core.week_field266276 = (function() {
var week_field266276 = null;
var week_field266276__1 = (function (name__9770__auto__){
return week_field266276.call(null,name__9770__auto__,null);
});
var week_field266276__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field266276 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field266276__1.call(this,name__9770__auto__);
case 2:
return week_field266276__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field266276.cljs$core$IFn$_invoke$arity$1 = week_field266276__1;
week_field266276.cljs$core$IFn$_invoke$arity$2 = week_field266276__2;
return week_field266276;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field266276);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box266277 = (function() {
var check_box266277 = null;
var check_box266277__1 = (function (name){
return check_box266277.call(null,name,null);
});
var check_box266277__2 = (function (name,checked_QMARK_){
return check_box266277.call(null,name,checked_QMARK_,"true");
});
var check_box266277__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box266277 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box266277__1.call(this,name);
case 2:
return check_box266277__2.call(this,name,checked_QMARK_);
case 3:
return check_box266277__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box266277.cljs$core$IFn$_invoke$arity$1 = check_box266277__1;
check_box266277.cljs$core$IFn$_invoke$arity$2 = check_box266277__2;
check_box266277.cljs$core$IFn$_invoke$arity$3 = check_box266277__3;
return check_box266277;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box266277);
/**
* Creates a radio button.
*/
sablono.core.radio_button266278 = (function() {
var radio_button266278 = null;
var radio_button266278__1 = (function (group){
return radio_button266278.call(null,group,null);
});
var radio_button266278__2 = (function (group,checked_QMARK_){
return radio_button266278.call(null,group,checked_QMARK_,"true");
});
var radio_button266278__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button266278 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button266278__1.call(this,group);
case 2:
return radio_button266278__2.call(this,group,checked_QMARK_);
case 3:
return radio_button266278__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button266278.cljs$core$IFn$_invoke$arity$1 = radio_button266278__1;
radio_button266278.cljs$core$IFn$_invoke$arity$2 = radio_button266278__2;
radio_button266278.cljs$core$IFn$_invoke$arity$3 = radio_button266278__3;
return radio_button266278;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button266278);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options266279 = (function() {
var select_options266279 = null;
var select_options266279__1 = (function (coll){
return select_options266279.call(null,coll,null);
});
var select_options266279__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__266288(s__266289){
return (new cljs.core.LazySeq(null,(function (){
var s__266289__$1 = s__266289;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__266289__$1);
if(temp__4126__auto__){
var s__266289__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__266289__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__266289__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__266291 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__266290 = (0);
while(true){
if((i__266290 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__266290);
cljs.core.chunk_append.call(null,b__266291,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__266294 = x;
var text = cljs.core.nth.call(null,vec__266294,(0),null);
var val = cljs.core.nth.call(null,vec__266294,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__266294,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options266279.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__266296 = (i__266290 + (1));
i__266290 = G__266296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266291),iter__266288.call(null,cljs.core.chunk_rest.call(null,s__266289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266291),null);
}
} else {
var x = cljs.core.first.call(null,s__266289__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__266295 = x;
var text = cljs.core.nth.call(null,vec__266295,(0),null);
var val = cljs.core.nth.call(null,vec__266295,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__266295,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options266279.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__266288.call(null,cljs.core.rest.call(null,s__266289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
});
select_options266279 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options266279__1.call(this,coll);
case 2:
return select_options266279__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options266279.cljs$core$IFn$_invoke$arity$1 = select_options266279__1;
select_options266279.cljs$core$IFn$_invoke$arity$2 = select_options266279__2;
return select_options266279;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options266279);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down266297 = (function() {
var drop_down266297 = null;
var drop_down266297__2 = (function (name,options){
return drop_down266297.call(null,name,options,null);
});
var drop_down266297__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down266297 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down266297__2.call(this,name,options);
case 3:
return drop_down266297__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down266297.cljs$core$IFn$_invoke$arity$2 = drop_down266297__2;
drop_down266297.cljs$core$IFn$_invoke$arity$3 = drop_down266297__3;
return drop_down266297;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down266297);
/**
* Creates a text area element.
*/
sablono.core.text_area266298 = (function() {
var text_area266298 = null;
var text_area266298__1 = (function (name){
return text_area266298.call(null,name,null);
});
var text_area266298__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area266298 = function(name,value){
switch(arguments.length){
case 1:
return text_area266298__1.call(this,name);
case 2:
return text_area266298__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area266298.cljs$core$IFn$_invoke$arity$1 = text_area266298__1;
text_area266298.cljs$core$IFn$_invoke$arity$2 = text_area266298__2;
return text_area266298;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area266298);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label266299 = (function label266299(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label266299);
/**
* Creates a submit button.
*/
sablono.core.submit_button266300 = (function submit_button266300(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button266300);
/**
* Creates a form reset button.
*/
sablono.core.reset_button266301 = (function reset_button266301(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button266301);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to266302 = (function() { 
var form_to266302__delegate = function (p__266303,body){
var vec__266305 = p__266303;
var method = cljs.core.nth.call(null,vec__266305,(0),null);
var action = cljs.core.nth.call(null,vec__266305,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to266302 = function (p__266303,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to266302__delegate.call(this,p__266303,body);};
form_to266302.cljs$lang$maxFixedArity = 1;
form_to266302.cljs$lang$applyTo = (function (arglist__266306){
var p__266303 = cljs.core.first(arglist__266306);
var body = cljs.core.rest(arglist__266306);
return form_to266302__delegate(p__266303,body);
});
form_to266302.cljs$core$IFn$_invoke$arity$variadic = form_to266302__delegate;
return form_to266302;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to266302);

//# sourceMappingURL=core.js.map