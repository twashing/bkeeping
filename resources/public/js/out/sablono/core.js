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
var G__1323259__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__1323258 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__1323258,(0),null);
var body = cljs.core.nthnext.call(null,vec__1323258,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__1323259 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__1323259__delegate.call(this,args);};
G__1323259.cljs$lang$maxFixedArity = 0;
G__1323259.cljs$lang$applyTo = (function (arglist__1323260){
var args = cljs.core.seq(arglist__1323260);
return G__1323259__delegate(args);
});
G__1323259.cljs$core$IFn$_invoke$arity$variadic = G__1323259__delegate;
return G__1323259;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__1323265(s__1323266){
return (new cljs.core.LazySeq(null,(function (){
var s__1323266__$1 = s__1323266;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1323266__$1);
if(temp__4126__auto__){
var s__1323266__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1323266__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1323266__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1323268 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1323267 = (0);
while(true){
if((i__1323267 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__1323267);
cljs.core.chunk_append.call(null,b__1323268,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__1323269 = (i__1323267 + (1));
i__1323267 = G__1323269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323268),iter__1323265.call(null,cljs.core.chunk_rest.call(null,s__1323266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323268),null);
}
} else {
var args = cljs.core.first.call(null,s__1323266__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__1323265.call(null,cljs.core.rest.call(null,s__1323266__$2)));
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
var iter__4378__auto__ = (function iter__1323274(s__1323275){
return (new cljs.core.LazySeq(null,(function (){
var s__1323275__$1 = s__1323275;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1323275__$1);
if(temp__4126__auto__){
var s__1323275__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1323275__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1323275__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1323277 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1323276 = (0);
while(true){
if((i__1323276 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__1323276);
cljs.core.chunk_append.call(null,b__1323277,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__1323278 = (i__1323276 + (1));
i__1323276 = G__1323278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323277),iter__1323274.call(null,cljs.core.chunk_rest.call(null,s__1323275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323277),null);
}
} else {
var style = cljs.core.first.call(null,s__1323275__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__1323274.call(null,cljs.core.rest.call(null,s__1323275__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__1323279){
var styles = cljs.core.seq(arglist__1323279);
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
sablono.core.link_to1323280 = (function() { 
var link_to1323280__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to1323280 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to1323280__delegate.call(this,url,content);};
link_to1323280.cljs$lang$maxFixedArity = 1;
link_to1323280.cljs$lang$applyTo = (function (arglist__1323281){
var url = cljs.core.first(arglist__1323281);
var content = cljs.core.rest(arglist__1323281);
return link_to1323280__delegate(url,content);
});
link_to1323280.cljs$core$IFn$_invoke$arity$variadic = link_to1323280__delegate;
return link_to1323280;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to1323280);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to1323282 = (function() { 
var mail_to1323282__delegate = function (e_mail,p__1323283){
var vec__1323285 = p__1323283;
var content = cljs.core.nth.call(null,vec__1323285,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to1323282 = function (e_mail,var_args){
var p__1323283 = null;
if (arguments.length > 1) {
  p__1323283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to1323282__delegate.call(this,e_mail,p__1323283);};
mail_to1323282.cljs$lang$maxFixedArity = 1;
mail_to1323282.cljs$lang$applyTo = (function (arglist__1323286){
var e_mail = cljs.core.first(arglist__1323286);
var p__1323283 = cljs.core.rest(arglist__1323286);
return mail_to1323282__delegate(e_mail,p__1323283);
});
mail_to1323282.cljs$core$IFn$_invoke$arity$variadic = mail_to1323282__delegate;
return mail_to1323282;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to1323282);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list1323287 = (function unordered_list1323287(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__1323292(s__1323293){
return (new cljs.core.LazySeq(null,(function (){
var s__1323293__$1 = s__1323293;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1323293__$1);
if(temp__4126__auto__){
var s__1323293__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1323293__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1323293__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1323295 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1323294 = (0);
while(true){
if((i__1323294 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1323294);
cljs.core.chunk_append.call(null,b__1323295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1323296 = (i__1323294 + (1));
i__1323294 = G__1323296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323295),iter__1323292.call(null,cljs.core.chunk_rest.call(null,s__1323293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323295),null);
}
} else {
var x = cljs.core.first.call(null,s__1323293__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1323292.call(null,cljs.core.rest.call(null,s__1323293__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list1323287);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list1323297 = (function ordered_list1323297(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__1323302(s__1323303){
return (new cljs.core.LazySeq(null,(function (){
var s__1323303__$1 = s__1323303;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1323303__$1);
if(temp__4126__auto__){
var s__1323303__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1323303__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1323303__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1323305 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1323304 = (0);
while(true){
if((i__1323304 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1323304);
cljs.core.chunk_append.call(null,b__1323305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1323306 = (i__1323304 + (1));
i__1323304 = G__1323306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323305),iter__1323302.call(null,cljs.core.chunk_rest.call(null,s__1323303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323305),null);
}
} else {
var x = cljs.core.first.call(null,s__1323303__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1323302.call(null,cljs.core.rest.call(null,s__1323303__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list1323297);
/**
* Create an image element.
*/
sablono.core.image1323307 = (function() {
var image1323307 = null;
var image1323307__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image1323307__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image1323307 = function(src,alt){
switch(arguments.length){
case 1:
return image1323307__1.call(this,src);
case 2:
return image1323307__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image1323307.cljs$core$IFn$_invoke$arity$1 = image1323307__1;
image1323307.cljs$core$IFn$_invoke$arity$2 = image1323307__2;
return image1323307;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image1323307);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__1323308_SHARP_,p2__1323309_SHARP_){
return [cljs.core.str(p1__1323308_SHARP_),cljs.core.str("["),cljs.core.str(p2__1323309_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__1323310_SHARP_,p2__1323311_SHARP_){
return [cljs.core.str(p1__1323310_SHARP_),cljs.core.str("-"),cljs.core.str(p2__1323311_SHARP_)].join('');
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
sablono.core.color_field1323312 = (function() {
var color_field1323312 = null;
var color_field1323312__1 = (function (name__9770__auto__){
return color_field1323312.call(null,name__9770__auto__,null);
});
var color_field1323312__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field1323312 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field1323312__1.call(this,name__9770__auto__);
case 2:
return color_field1323312__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field1323312.cljs$core$IFn$_invoke$arity$1 = color_field1323312__1;
color_field1323312.cljs$core$IFn$_invoke$arity$2 = color_field1323312__2;
return color_field1323312;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field1323312);

/**
* Creates a date input field.
*/
sablono.core.date_field1323313 = (function() {
var date_field1323313 = null;
var date_field1323313__1 = (function (name__9770__auto__){
return date_field1323313.call(null,name__9770__auto__,null);
});
var date_field1323313__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field1323313 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field1323313__1.call(this,name__9770__auto__);
case 2:
return date_field1323313__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field1323313.cljs$core$IFn$_invoke$arity$1 = date_field1323313__1;
date_field1323313.cljs$core$IFn$_invoke$arity$2 = date_field1323313__2;
return date_field1323313;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field1323313);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field1323314 = (function() {
var datetime_field1323314 = null;
var datetime_field1323314__1 = (function (name__9770__auto__){
return datetime_field1323314.call(null,name__9770__auto__,null);
});
var datetime_field1323314__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field1323314 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field1323314__1.call(this,name__9770__auto__);
case 2:
return datetime_field1323314__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field1323314.cljs$core$IFn$_invoke$arity$1 = datetime_field1323314__1;
datetime_field1323314.cljs$core$IFn$_invoke$arity$2 = datetime_field1323314__2;
return datetime_field1323314;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field1323314);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field1323315 = (function() {
var datetime_local_field1323315 = null;
var datetime_local_field1323315__1 = (function (name__9770__auto__){
return datetime_local_field1323315.call(null,name__9770__auto__,null);
});
var datetime_local_field1323315__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field1323315 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field1323315__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field1323315__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field1323315.cljs$core$IFn$_invoke$arity$1 = datetime_local_field1323315__1;
datetime_local_field1323315.cljs$core$IFn$_invoke$arity$2 = datetime_local_field1323315__2;
return datetime_local_field1323315;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field1323315);

/**
* Creates a email input field.
*/
sablono.core.email_field1323316 = (function() {
var email_field1323316 = null;
var email_field1323316__1 = (function (name__9770__auto__){
return email_field1323316.call(null,name__9770__auto__,null);
});
var email_field1323316__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field1323316 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field1323316__1.call(this,name__9770__auto__);
case 2:
return email_field1323316__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field1323316.cljs$core$IFn$_invoke$arity$1 = email_field1323316__1;
email_field1323316.cljs$core$IFn$_invoke$arity$2 = email_field1323316__2;
return email_field1323316;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field1323316);

/**
* Creates a file input field.
*/
sablono.core.file_field1323317 = (function() {
var file_field1323317 = null;
var file_field1323317__1 = (function (name__9770__auto__){
return file_field1323317.call(null,name__9770__auto__,null);
});
var file_field1323317__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field1323317 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field1323317__1.call(this,name__9770__auto__);
case 2:
return file_field1323317__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field1323317.cljs$core$IFn$_invoke$arity$1 = file_field1323317__1;
file_field1323317.cljs$core$IFn$_invoke$arity$2 = file_field1323317__2;
return file_field1323317;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field1323317);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field1323318 = (function() {
var hidden_field1323318 = null;
var hidden_field1323318__1 = (function (name__9770__auto__){
return hidden_field1323318.call(null,name__9770__auto__,null);
});
var hidden_field1323318__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field1323318 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field1323318__1.call(this,name__9770__auto__);
case 2:
return hidden_field1323318__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field1323318.cljs$core$IFn$_invoke$arity$1 = hidden_field1323318__1;
hidden_field1323318.cljs$core$IFn$_invoke$arity$2 = hidden_field1323318__2;
return hidden_field1323318;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field1323318);

/**
* Creates a month input field.
*/
sablono.core.month_field1323319 = (function() {
var month_field1323319 = null;
var month_field1323319__1 = (function (name__9770__auto__){
return month_field1323319.call(null,name__9770__auto__,null);
});
var month_field1323319__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field1323319 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field1323319__1.call(this,name__9770__auto__);
case 2:
return month_field1323319__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field1323319.cljs$core$IFn$_invoke$arity$1 = month_field1323319__1;
month_field1323319.cljs$core$IFn$_invoke$arity$2 = month_field1323319__2;
return month_field1323319;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field1323319);

/**
* Creates a number input field.
*/
sablono.core.number_field1323320 = (function() {
var number_field1323320 = null;
var number_field1323320__1 = (function (name__9770__auto__){
return number_field1323320.call(null,name__9770__auto__,null);
});
var number_field1323320__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field1323320 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field1323320__1.call(this,name__9770__auto__);
case 2:
return number_field1323320__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field1323320.cljs$core$IFn$_invoke$arity$1 = number_field1323320__1;
number_field1323320.cljs$core$IFn$_invoke$arity$2 = number_field1323320__2;
return number_field1323320;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field1323320);

/**
* Creates a password input field.
*/
sablono.core.password_field1323321 = (function() {
var password_field1323321 = null;
var password_field1323321__1 = (function (name__9770__auto__){
return password_field1323321.call(null,name__9770__auto__,null);
});
var password_field1323321__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field1323321 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field1323321__1.call(this,name__9770__auto__);
case 2:
return password_field1323321__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field1323321.cljs$core$IFn$_invoke$arity$1 = password_field1323321__1;
password_field1323321.cljs$core$IFn$_invoke$arity$2 = password_field1323321__2;
return password_field1323321;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field1323321);

/**
* Creates a range input field.
*/
sablono.core.range_field1323322 = (function() {
var range_field1323322 = null;
var range_field1323322__1 = (function (name__9770__auto__){
return range_field1323322.call(null,name__9770__auto__,null);
});
var range_field1323322__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field1323322 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field1323322__1.call(this,name__9770__auto__);
case 2:
return range_field1323322__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field1323322.cljs$core$IFn$_invoke$arity$1 = range_field1323322__1;
range_field1323322.cljs$core$IFn$_invoke$arity$2 = range_field1323322__2;
return range_field1323322;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field1323322);

/**
* Creates a search input field.
*/
sablono.core.search_field1323323 = (function() {
var search_field1323323 = null;
var search_field1323323__1 = (function (name__9770__auto__){
return search_field1323323.call(null,name__9770__auto__,null);
});
var search_field1323323__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field1323323 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field1323323__1.call(this,name__9770__auto__);
case 2:
return search_field1323323__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field1323323.cljs$core$IFn$_invoke$arity$1 = search_field1323323__1;
search_field1323323.cljs$core$IFn$_invoke$arity$2 = search_field1323323__2;
return search_field1323323;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field1323323);

/**
* Creates a tel input field.
*/
sablono.core.tel_field1323324 = (function() {
var tel_field1323324 = null;
var tel_field1323324__1 = (function (name__9770__auto__){
return tel_field1323324.call(null,name__9770__auto__,null);
});
var tel_field1323324__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field1323324 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field1323324__1.call(this,name__9770__auto__);
case 2:
return tel_field1323324__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field1323324.cljs$core$IFn$_invoke$arity$1 = tel_field1323324__1;
tel_field1323324.cljs$core$IFn$_invoke$arity$2 = tel_field1323324__2;
return tel_field1323324;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field1323324);

/**
* Creates a text input field.
*/
sablono.core.text_field1323325 = (function() {
var text_field1323325 = null;
var text_field1323325__1 = (function (name__9770__auto__){
return text_field1323325.call(null,name__9770__auto__,null);
});
var text_field1323325__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field1323325 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field1323325__1.call(this,name__9770__auto__);
case 2:
return text_field1323325__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field1323325.cljs$core$IFn$_invoke$arity$1 = text_field1323325__1;
text_field1323325.cljs$core$IFn$_invoke$arity$2 = text_field1323325__2;
return text_field1323325;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field1323325);

/**
* Creates a time input field.
*/
sablono.core.time_field1323326 = (function() {
var time_field1323326 = null;
var time_field1323326__1 = (function (name__9770__auto__){
return time_field1323326.call(null,name__9770__auto__,null);
});
var time_field1323326__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field1323326 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field1323326__1.call(this,name__9770__auto__);
case 2:
return time_field1323326__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field1323326.cljs$core$IFn$_invoke$arity$1 = time_field1323326__1;
time_field1323326.cljs$core$IFn$_invoke$arity$2 = time_field1323326__2;
return time_field1323326;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field1323326);

/**
* Creates a url input field.
*/
sablono.core.url_field1323327 = (function() {
var url_field1323327 = null;
var url_field1323327__1 = (function (name__9770__auto__){
return url_field1323327.call(null,name__9770__auto__,null);
});
var url_field1323327__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field1323327 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field1323327__1.call(this,name__9770__auto__);
case 2:
return url_field1323327__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field1323327.cljs$core$IFn$_invoke$arity$1 = url_field1323327__1;
url_field1323327.cljs$core$IFn$_invoke$arity$2 = url_field1323327__2;
return url_field1323327;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field1323327);

/**
* Creates a week input field.
*/
sablono.core.week_field1323328 = (function() {
var week_field1323328 = null;
var week_field1323328__1 = (function (name__9770__auto__){
return week_field1323328.call(null,name__9770__auto__,null);
});
var week_field1323328__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field1323328 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field1323328__1.call(this,name__9770__auto__);
case 2:
return week_field1323328__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field1323328.cljs$core$IFn$_invoke$arity$1 = week_field1323328__1;
week_field1323328.cljs$core$IFn$_invoke$arity$2 = week_field1323328__2;
return week_field1323328;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field1323328);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box1323329 = (function() {
var check_box1323329 = null;
var check_box1323329__1 = (function (name){
return check_box1323329.call(null,name,null);
});
var check_box1323329__2 = (function (name,checked_QMARK_){
return check_box1323329.call(null,name,checked_QMARK_,"true");
});
var check_box1323329__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box1323329 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box1323329__1.call(this,name);
case 2:
return check_box1323329__2.call(this,name,checked_QMARK_);
case 3:
return check_box1323329__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box1323329.cljs$core$IFn$_invoke$arity$1 = check_box1323329__1;
check_box1323329.cljs$core$IFn$_invoke$arity$2 = check_box1323329__2;
check_box1323329.cljs$core$IFn$_invoke$arity$3 = check_box1323329__3;
return check_box1323329;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box1323329);
/**
* Creates a radio button.
*/
sablono.core.radio_button1323330 = (function() {
var radio_button1323330 = null;
var radio_button1323330__1 = (function (group){
return radio_button1323330.call(null,group,null);
});
var radio_button1323330__2 = (function (group,checked_QMARK_){
return radio_button1323330.call(null,group,checked_QMARK_,"true");
});
var radio_button1323330__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button1323330 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button1323330__1.call(this,group);
case 2:
return radio_button1323330__2.call(this,group,checked_QMARK_);
case 3:
return radio_button1323330__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button1323330.cljs$core$IFn$_invoke$arity$1 = radio_button1323330__1;
radio_button1323330.cljs$core$IFn$_invoke$arity$2 = radio_button1323330__2;
radio_button1323330.cljs$core$IFn$_invoke$arity$3 = radio_button1323330__3;
return radio_button1323330;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button1323330);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options1323331 = (function() {
var select_options1323331 = null;
var select_options1323331__1 = (function (coll){
return select_options1323331.call(null,coll,null);
});
var select_options1323331__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__1323340(s__1323341){
return (new cljs.core.LazySeq(null,(function (){
var s__1323341__$1 = s__1323341;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1323341__$1);
if(temp__4126__auto__){
var s__1323341__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1323341__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1323341__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1323343 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1323342 = (0);
while(true){
if((i__1323342 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1323342);
cljs.core.chunk_append.call(null,b__1323343,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1323346 = x;
var text = cljs.core.nth.call(null,vec__1323346,(0),null);
var val = cljs.core.nth.call(null,vec__1323346,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1323346,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1323331.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__1323348 = (i__1323342 + (1));
i__1323342 = G__1323348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323343),iter__1323340.call(null,cljs.core.chunk_rest.call(null,s__1323341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1323343),null);
}
} else {
var x = cljs.core.first.call(null,s__1323341__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1323347 = x;
var text = cljs.core.nth.call(null,vec__1323347,(0),null);
var val = cljs.core.nth.call(null,vec__1323347,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1323347,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1323331.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__1323340.call(null,cljs.core.rest.call(null,s__1323341__$2)));
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
select_options1323331 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options1323331__1.call(this,coll);
case 2:
return select_options1323331__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options1323331.cljs$core$IFn$_invoke$arity$1 = select_options1323331__1;
select_options1323331.cljs$core$IFn$_invoke$arity$2 = select_options1323331__2;
return select_options1323331;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options1323331);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down1323349 = (function() {
var drop_down1323349 = null;
var drop_down1323349__2 = (function (name,options){
return drop_down1323349.call(null,name,options,null);
});
var drop_down1323349__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down1323349 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down1323349__2.call(this,name,options);
case 3:
return drop_down1323349__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down1323349.cljs$core$IFn$_invoke$arity$2 = drop_down1323349__2;
drop_down1323349.cljs$core$IFn$_invoke$arity$3 = drop_down1323349__3;
return drop_down1323349;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down1323349);
/**
* Creates a text area element.
*/
sablono.core.text_area1323350 = (function() {
var text_area1323350 = null;
var text_area1323350__1 = (function (name){
return text_area1323350.call(null,name,null);
});
var text_area1323350__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area1323350 = function(name,value){
switch(arguments.length){
case 1:
return text_area1323350__1.call(this,name);
case 2:
return text_area1323350__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area1323350.cljs$core$IFn$_invoke$arity$1 = text_area1323350__1;
text_area1323350.cljs$core$IFn$_invoke$arity$2 = text_area1323350__2;
return text_area1323350;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area1323350);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label1323351 = (function label1323351(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label1323351);
/**
* Creates a submit button.
*/
sablono.core.submit_button1323352 = (function submit_button1323352(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button1323352);
/**
* Creates a form reset button.
*/
sablono.core.reset_button1323353 = (function reset_button1323353(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button1323353);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to1323354 = (function() { 
var form_to1323354__delegate = function (p__1323355,body){
var vec__1323357 = p__1323355;
var method = cljs.core.nth.call(null,vec__1323357,(0),null);
var action = cljs.core.nth.call(null,vec__1323357,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to1323354 = function (p__1323355,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to1323354__delegate.call(this,p__1323355,body);};
form_to1323354.cljs$lang$maxFixedArity = 1;
form_to1323354.cljs$lang$applyTo = (function (arglist__1323358){
var p__1323355 = cljs.core.first(arglist__1323358);
var body = cljs.core.rest(arglist__1323358);
return form_to1323354__delegate(p__1323355,body);
});
form_to1323354.cljs$core$IFn$_invoke$arity$variadic = form_to1323354__delegate;
return form_to1323354;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to1323354);

//# sourceMappingURL=core.js.map