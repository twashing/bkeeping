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
var G__39237__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39236 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__39236,(0),null);
var body = cljs.core.nthnext.call(null,vec__39236,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39237 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__39237__delegate.call(this,args);};
G__39237.cljs$lang$maxFixedArity = 0;
G__39237.cljs$lang$applyTo = (function (arglist__39238){
var args = cljs.core.seq(arglist__39238);
return G__39237__delegate(args);
});
G__39237.cljs$core$IFn$_invoke$arity$variadic = G__39237__delegate;
return G__39237;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__39243(s__39244){
return (new cljs.core.LazySeq(null,(function (){
var s__39244__$1 = s__39244;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39244__$1);
if(temp__4126__auto__){
var s__39244__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39244__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__39244__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__39246 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__39245 = (0);
while(true){
if((i__39245 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__39245);
cljs.core.chunk_append.call(null,b__39246,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39247 = (i__39245 + (1));
i__39245 = G__39247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39246),iter__39243.call(null,cljs.core.chunk_rest.call(null,s__39244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39246),null);
}
} else {
var args = cljs.core.first.call(null,s__39244__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__39243.call(null,cljs.core.rest.call(null,s__39244__$2)));
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
var iter__4378__auto__ = (function iter__39252(s__39253){
return (new cljs.core.LazySeq(null,(function (){
var s__39253__$1 = s__39253;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39253__$1);
if(temp__4126__auto__){
var s__39253__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39253__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__39253__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__39255 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__39254 = (0);
while(true){
if((i__39254 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__39254);
cljs.core.chunk_append.call(null,b__39255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39256 = (i__39254 + (1));
i__39254 = G__39256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39255),iter__39252.call(null,cljs.core.chunk_rest.call(null,s__39253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39255),null);
}
} else {
var style = cljs.core.first.call(null,s__39253__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__39252.call(null,cljs.core.rest.call(null,s__39253__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__39257){
var styles = cljs.core.seq(arglist__39257);
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
sablono.core.link_to39258 = (function() { 
var link_to39258__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to39258 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to39258__delegate.call(this,url,content);};
link_to39258.cljs$lang$maxFixedArity = 1;
link_to39258.cljs$lang$applyTo = (function (arglist__39259){
var url = cljs.core.first(arglist__39259);
var content = cljs.core.rest(arglist__39259);
return link_to39258__delegate(url,content);
});
link_to39258.cljs$core$IFn$_invoke$arity$variadic = link_to39258__delegate;
return link_to39258;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39258);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to39260 = (function() { 
var mail_to39260__delegate = function (e_mail,p__39261){
var vec__39263 = p__39261;
var content = cljs.core.nth.call(null,vec__39263,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to39260 = function (e_mail,var_args){
var p__39261 = null;
if (arguments.length > 1) {
  p__39261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to39260__delegate.call(this,e_mail,p__39261);};
mail_to39260.cljs$lang$maxFixedArity = 1;
mail_to39260.cljs$lang$applyTo = (function (arglist__39264){
var e_mail = cljs.core.first(arglist__39264);
var p__39261 = cljs.core.rest(arglist__39264);
return mail_to39260__delegate(e_mail,p__39261);
});
mail_to39260.cljs$core$IFn$_invoke$arity$variadic = mail_to39260__delegate;
return mail_to39260;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39260);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list39265 = (function unordered_list39265(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__39270(s__39271){
return (new cljs.core.LazySeq(null,(function (){
var s__39271__$1 = s__39271;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39271__$1);
if(temp__4126__auto__){
var s__39271__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39271__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__39271__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__39273 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__39272 = (0);
while(true){
if((i__39272 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__39272);
cljs.core.chunk_append.call(null,b__39273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39274 = (i__39272 + (1));
i__39272 = G__39274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39273),iter__39270.call(null,cljs.core.chunk_rest.call(null,s__39271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39273),null);
}
} else {
var x = cljs.core.first.call(null,s__39271__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__39270.call(null,cljs.core.rest.call(null,s__39271__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39265);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list39275 = (function ordered_list39275(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__39280(s__39281){
return (new cljs.core.LazySeq(null,(function (){
var s__39281__$1 = s__39281;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39281__$1);
if(temp__4126__auto__){
var s__39281__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39281__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__39281__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__39283 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__39282 = (0);
while(true){
if((i__39282 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__39282);
cljs.core.chunk_append.call(null,b__39283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39284 = (i__39282 + (1));
i__39282 = G__39284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39283),iter__39280.call(null,cljs.core.chunk_rest.call(null,s__39281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39283),null);
}
} else {
var x = cljs.core.first.call(null,s__39281__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__39280.call(null,cljs.core.rest.call(null,s__39281__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39275);
/**
* Create an image element.
*/
sablono.core.image39285 = (function() {
var image39285 = null;
var image39285__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image39285__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image39285 = function(src,alt){
switch(arguments.length){
case 1:
return image39285__1.call(this,src);
case 2:
return image39285__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image39285.cljs$core$IFn$_invoke$arity$1 = image39285__1;
image39285.cljs$core$IFn$_invoke$arity$2 = image39285__2;
return image39285;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39285);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__39286_SHARP_,p2__39287_SHARP_){
return [cljs.core.str(p1__39286_SHARP_),cljs.core.str("["),cljs.core.str(p2__39287_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__39288_SHARP_,p2__39289_SHARP_){
return [cljs.core.str(p1__39288_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39289_SHARP_)].join('');
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
sablono.core.color_field39290 = (function() {
var color_field39290 = null;
var color_field39290__1 = (function (name__10377__auto__){
return color_field39290.call(null,name__10377__auto__,null);
});
var color_field39290__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field39290 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field39290__1.call(this,name__10377__auto__);
case 2:
return color_field39290__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field39290.cljs$core$IFn$_invoke$arity$1 = color_field39290__1;
color_field39290.cljs$core$IFn$_invoke$arity$2 = color_field39290__2;
return color_field39290;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39290);

/**
* Creates a date input field.
*/
sablono.core.date_field39291 = (function() {
var date_field39291 = null;
var date_field39291__1 = (function (name__10377__auto__){
return date_field39291.call(null,name__10377__auto__,null);
});
var date_field39291__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field39291 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field39291__1.call(this,name__10377__auto__);
case 2:
return date_field39291__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field39291.cljs$core$IFn$_invoke$arity$1 = date_field39291__1;
date_field39291.cljs$core$IFn$_invoke$arity$2 = date_field39291__2;
return date_field39291;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39291);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field39292 = (function() {
var datetime_field39292 = null;
var datetime_field39292__1 = (function (name__10377__auto__){
return datetime_field39292.call(null,name__10377__auto__,null);
});
var datetime_field39292__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field39292 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field39292__1.call(this,name__10377__auto__);
case 2:
return datetime_field39292__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field39292.cljs$core$IFn$_invoke$arity$1 = datetime_field39292__1;
datetime_field39292.cljs$core$IFn$_invoke$arity$2 = datetime_field39292__2;
return datetime_field39292;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39292);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field39293 = (function() {
var datetime_local_field39293 = null;
var datetime_local_field39293__1 = (function (name__10377__auto__){
return datetime_local_field39293.call(null,name__10377__auto__,null);
});
var datetime_local_field39293__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field39293 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field39293__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field39293__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field39293.cljs$core$IFn$_invoke$arity$1 = datetime_local_field39293__1;
datetime_local_field39293.cljs$core$IFn$_invoke$arity$2 = datetime_local_field39293__2;
return datetime_local_field39293;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39293);

/**
* Creates a email input field.
*/
sablono.core.email_field39294 = (function() {
var email_field39294 = null;
var email_field39294__1 = (function (name__10377__auto__){
return email_field39294.call(null,name__10377__auto__,null);
});
var email_field39294__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field39294 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field39294__1.call(this,name__10377__auto__);
case 2:
return email_field39294__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39294.cljs$core$IFn$_invoke$arity$1 = email_field39294__1;
email_field39294.cljs$core$IFn$_invoke$arity$2 = email_field39294__2;
return email_field39294;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39294);

/**
* Creates a file input field.
*/
sablono.core.file_field39295 = (function() {
var file_field39295 = null;
var file_field39295__1 = (function (name__10377__auto__){
return file_field39295.call(null,name__10377__auto__,null);
});
var file_field39295__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field39295 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field39295__1.call(this,name__10377__auto__);
case 2:
return file_field39295__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field39295.cljs$core$IFn$_invoke$arity$1 = file_field39295__1;
file_field39295.cljs$core$IFn$_invoke$arity$2 = file_field39295__2;
return file_field39295;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39295);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field39296 = (function() {
var hidden_field39296 = null;
var hidden_field39296__1 = (function (name__10377__auto__){
return hidden_field39296.call(null,name__10377__auto__,null);
});
var hidden_field39296__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field39296 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field39296__1.call(this,name__10377__auto__);
case 2:
return hidden_field39296__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field39296.cljs$core$IFn$_invoke$arity$1 = hidden_field39296__1;
hidden_field39296.cljs$core$IFn$_invoke$arity$2 = hidden_field39296__2;
return hidden_field39296;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39296);

/**
* Creates a month input field.
*/
sablono.core.month_field39297 = (function() {
var month_field39297 = null;
var month_field39297__1 = (function (name__10377__auto__){
return month_field39297.call(null,name__10377__auto__,null);
});
var month_field39297__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field39297 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field39297__1.call(this,name__10377__auto__);
case 2:
return month_field39297__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field39297.cljs$core$IFn$_invoke$arity$1 = month_field39297__1;
month_field39297.cljs$core$IFn$_invoke$arity$2 = month_field39297__2;
return month_field39297;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39297);

/**
* Creates a number input field.
*/
sablono.core.number_field39298 = (function() {
var number_field39298 = null;
var number_field39298__1 = (function (name__10377__auto__){
return number_field39298.call(null,name__10377__auto__,null);
});
var number_field39298__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field39298 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field39298__1.call(this,name__10377__auto__);
case 2:
return number_field39298__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field39298.cljs$core$IFn$_invoke$arity$1 = number_field39298__1;
number_field39298.cljs$core$IFn$_invoke$arity$2 = number_field39298__2;
return number_field39298;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39298);

/**
* Creates a password input field.
*/
sablono.core.password_field39299 = (function() {
var password_field39299 = null;
var password_field39299__1 = (function (name__10377__auto__){
return password_field39299.call(null,name__10377__auto__,null);
});
var password_field39299__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field39299 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field39299__1.call(this,name__10377__auto__);
case 2:
return password_field39299__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field39299.cljs$core$IFn$_invoke$arity$1 = password_field39299__1;
password_field39299.cljs$core$IFn$_invoke$arity$2 = password_field39299__2;
return password_field39299;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39299);

/**
* Creates a range input field.
*/
sablono.core.range_field39300 = (function() {
var range_field39300 = null;
var range_field39300__1 = (function (name__10377__auto__){
return range_field39300.call(null,name__10377__auto__,null);
});
var range_field39300__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field39300 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field39300__1.call(this,name__10377__auto__);
case 2:
return range_field39300__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field39300.cljs$core$IFn$_invoke$arity$1 = range_field39300__1;
range_field39300.cljs$core$IFn$_invoke$arity$2 = range_field39300__2;
return range_field39300;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39300);

/**
* Creates a search input field.
*/
sablono.core.search_field39301 = (function() {
var search_field39301 = null;
var search_field39301__1 = (function (name__10377__auto__){
return search_field39301.call(null,name__10377__auto__,null);
});
var search_field39301__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field39301 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field39301__1.call(this,name__10377__auto__);
case 2:
return search_field39301__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field39301.cljs$core$IFn$_invoke$arity$1 = search_field39301__1;
search_field39301.cljs$core$IFn$_invoke$arity$2 = search_field39301__2;
return search_field39301;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39301);

/**
* Creates a tel input field.
*/
sablono.core.tel_field39302 = (function() {
var tel_field39302 = null;
var tel_field39302__1 = (function (name__10377__auto__){
return tel_field39302.call(null,name__10377__auto__,null);
});
var tel_field39302__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field39302 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field39302__1.call(this,name__10377__auto__);
case 2:
return tel_field39302__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field39302.cljs$core$IFn$_invoke$arity$1 = tel_field39302__1;
tel_field39302.cljs$core$IFn$_invoke$arity$2 = tel_field39302__2;
return tel_field39302;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39302);

/**
* Creates a text input field.
*/
sablono.core.text_field39303 = (function() {
var text_field39303 = null;
var text_field39303__1 = (function (name__10377__auto__){
return text_field39303.call(null,name__10377__auto__,null);
});
var text_field39303__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field39303 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field39303__1.call(this,name__10377__auto__);
case 2:
return text_field39303__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field39303.cljs$core$IFn$_invoke$arity$1 = text_field39303__1;
text_field39303.cljs$core$IFn$_invoke$arity$2 = text_field39303__2;
return text_field39303;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39303);

/**
* Creates a time input field.
*/
sablono.core.time_field39304 = (function() {
var time_field39304 = null;
var time_field39304__1 = (function (name__10377__auto__){
return time_field39304.call(null,name__10377__auto__,null);
});
var time_field39304__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field39304 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field39304__1.call(this,name__10377__auto__);
case 2:
return time_field39304__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field39304.cljs$core$IFn$_invoke$arity$1 = time_field39304__1;
time_field39304.cljs$core$IFn$_invoke$arity$2 = time_field39304__2;
return time_field39304;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39304);

/**
* Creates a url input field.
*/
sablono.core.url_field39305 = (function() {
var url_field39305 = null;
var url_field39305__1 = (function (name__10377__auto__){
return url_field39305.call(null,name__10377__auto__,null);
});
var url_field39305__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field39305 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field39305__1.call(this,name__10377__auto__);
case 2:
return url_field39305__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field39305.cljs$core$IFn$_invoke$arity$1 = url_field39305__1;
url_field39305.cljs$core$IFn$_invoke$arity$2 = url_field39305__2;
return url_field39305;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39305);

/**
* Creates a week input field.
*/
sablono.core.week_field39306 = (function() {
var week_field39306 = null;
var week_field39306__1 = (function (name__10377__auto__){
return week_field39306.call(null,name__10377__auto__,null);
});
var week_field39306__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field39306 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field39306__1.call(this,name__10377__auto__);
case 2:
return week_field39306__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field39306.cljs$core$IFn$_invoke$arity$1 = week_field39306__1;
week_field39306.cljs$core$IFn$_invoke$arity$2 = week_field39306__2;
return week_field39306;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39306);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box39307 = (function() {
var check_box39307 = null;
var check_box39307__1 = (function (name){
return check_box39307.call(null,name,null);
});
var check_box39307__2 = (function (name,checked_QMARK_){
return check_box39307.call(null,name,checked_QMARK_,"true");
});
var check_box39307__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box39307 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39307__1.call(this,name);
case 2:
return check_box39307__2.call(this,name,checked_QMARK_);
case 3:
return check_box39307__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39307.cljs$core$IFn$_invoke$arity$1 = check_box39307__1;
check_box39307.cljs$core$IFn$_invoke$arity$2 = check_box39307__2;
check_box39307.cljs$core$IFn$_invoke$arity$3 = check_box39307__3;
return check_box39307;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39307);
/**
* Creates a radio button.
*/
sablono.core.radio_button39308 = (function() {
var radio_button39308 = null;
var radio_button39308__1 = (function (group){
return radio_button39308.call(null,group,null);
});
var radio_button39308__2 = (function (group,checked_QMARK_){
return radio_button39308.call(null,group,checked_QMARK_,"true");
});
var radio_button39308__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button39308 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39308__1.call(this,group);
case 2:
return radio_button39308__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39308__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39308.cljs$core$IFn$_invoke$arity$1 = radio_button39308__1;
radio_button39308.cljs$core$IFn$_invoke$arity$2 = radio_button39308__2;
radio_button39308.cljs$core$IFn$_invoke$arity$3 = radio_button39308__3;
return radio_button39308;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39308);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39309 = (function() {
var select_options39309 = null;
var select_options39309__1 = (function (coll){
return select_options39309.call(null,coll,null);
});
var select_options39309__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__39318(s__39319){
return (new cljs.core.LazySeq(null,(function (){
var s__39319__$1 = s__39319;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39319__$1);
if(temp__4126__auto__){
var s__39319__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39319__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__39319__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__39321 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__39320 = (0);
while(true){
if((i__39320 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__39320);
cljs.core.chunk_append.call(null,b__39321,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39324 = x;
var text = cljs.core.nth.call(null,vec__39324,(0),null);
var val = cljs.core.nth.call(null,vec__39324,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39324,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options39309.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__39326 = (i__39320 + (1));
i__39320 = G__39326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39321),iter__39318.call(null,cljs.core.chunk_rest.call(null,s__39319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39321),null);
}
} else {
var x = cljs.core.first.call(null,s__39319__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39325 = x;
var text = cljs.core.nth.call(null,vec__39325,(0),null);
var val = cljs.core.nth.call(null,vec__39325,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39325,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options39309.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__39318.call(null,cljs.core.rest.call(null,s__39319__$2)));
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
select_options39309 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39309__1.call(this,coll);
case 2:
return select_options39309__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39309.cljs$core$IFn$_invoke$arity$1 = select_options39309__1;
select_options39309.cljs$core$IFn$_invoke$arity$2 = select_options39309__2;
return select_options39309;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39309);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39327 = (function() {
var drop_down39327 = null;
var drop_down39327__2 = (function (name,options){
return drop_down39327.call(null,name,options,null);
});
var drop_down39327__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down39327 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39327__2.call(this,name,options);
case 3:
return drop_down39327__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39327.cljs$core$IFn$_invoke$arity$2 = drop_down39327__2;
drop_down39327.cljs$core$IFn$_invoke$arity$3 = drop_down39327__3;
return drop_down39327;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39327);
/**
* Creates a text area element.
*/
sablono.core.text_area39328 = (function() {
var text_area39328 = null;
var text_area39328__1 = (function (name){
return text_area39328.call(null,name,null);
});
var text_area39328__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area39328 = function(name,value){
switch(arguments.length){
case 1:
return text_area39328__1.call(this,name);
case 2:
return text_area39328__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39328.cljs$core$IFn$_invoke$arity$1 = text_area39328__1;
text_area39328.cljs$core$IFn$_invoke$arity$2 = text_area39328__2;
return text_area39328;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39328);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39329 = (function label39329(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39329);
/**
* Creates a submit button.
*/
sablono.core.submit_button39330 = (function submit_button39330(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39330);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39331 = (function reset_button39331(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39331);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39332 = (function() { 
var form_to39332__delegate = function (p__39333,body){
var vec__39335 = p__39333;
var method = cljs.core.nth.call(null,vec__39335,(0),null);
var action = cljs.core.nth.call(null,vec__39335,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to39332 = function (p__39333,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to39332__delegate.call(this,p__39333,body);};
form_to39332.cljs$lang$maxFixedArity = 1;
form_to39332.cljs$lang$applyTo = (function (arglist__39336){
var p__39333 = cljs.core.first(arglist__39336);
var body = cljs.core.rest(arglist__39336);
return form_to39332__delegate(p__39333,body);
});
form_to39332.cljs$core$IFn$_invoke$arity$variadic = form_to39332__delegate;
return form_to39332;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39332);

//# sourceMappingURL=core.js.map