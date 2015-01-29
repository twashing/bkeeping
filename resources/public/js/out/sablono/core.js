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
var G__110387__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__110386 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__110386,(0),null);
var body = cljs.core.nthnext.call(null,vec__110386,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__110387 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__110387__delegate.call(this,args);};
G__110387.cljs$lang$maxFixedArity = 0;
G__110387.cljs$lang$applyTo = (function (arglist__110388){
var args = cljs.core.seq(arglist__110388);
return G__110387__delegate(args);
});
G__110387.cljs$core$IFn$_invoke$arity$variadic = G__110387__delegate;
return G__110387;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__110393(s__110394){
return (new cljs.core.LazySeq(null,(function (){
var s__110394__$1 = s__110394;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__110394__$1);
if(temp__4126__auto__){
var s__110394__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__110394__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__110394__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__110396 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__110395 = (0);
while(true){
if((i__110395 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__110395);
cljs.core.chunk_append.call(null,b__110396,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__110397 = (i__110395 + (1));
i__110395 = G__110397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110396),iter__110393.call(null,cljs.core.chunk_rest.call(null,s__110394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110396),null);
}
} else {
var args = cljs.core.first.call(null,s__110394__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__110393.call(null,cljs.core.rest.call(null,s__110394__$2)));
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
var iter__4378__auto__ = (function iter__110402(s__110403){
return (new cljs.core.LazySeq(null,(function (){
var s__110403__$1 = s__110403;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__110403__$1);
if(temp__4126__auto__){
var s__110403__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__110403__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__110403__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__110405 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__110404 = (0);
while(true){
if((i__110404 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__110404);
cljs.core.chunk_append.call(null,b__110405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__110406 = (i__110404 + (1));
i__110404 = G__110406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110405),iter__110402.call(null,cljs.core.chunk_rest.call(null,s__110403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110405),null);
}
} else {
var style = cljs.core.first.call(null,s__110403__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__110402.call(null,cljs.core.rest.call(null,s__110403__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__110407){
var styles = cljs.core.seq(arglist__110407);
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
sablono.core.link_to110408 = (function() { 
var link_to110408__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to110408 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to110408__delegate.call(this,url,content);};
link_to110408.cljs$lang$maxFixedArity = 1;
link_to110408.cljs$lang$applyTo = (function (arglist__110409){
var url = cljs.core.first(arglist__110409);
var content = cljs.core.rest(arglist__110409);
return link_to110408__delegate(url,content);
});
link_to110408.cljs$core$IFn$_invoke$arity$variadic = link_to110408__delegate;
return link_to110408;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to110408);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to110410 = (function() { 
var mail_to110410__delegate = function (e_mail,p__110411){
var vec__110413 = p__110411;
var content = cljs.core.nth.call(null,vec__110413,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to110410 = function (e_mail,var_args){
var p__110411 = null;
if (arguments.length > 1) {
  p__110411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to110410__delegate.call(this,e_mail,p__110411);};
mail_to110410.cljs$lang$maxFixedArity = 1;
mail_to110410.cljs$lang$applyTo = (function (arglist__110414){
var e_mail = cljs.core.first(arglist__110414);
var p__110411 = cljs.core.rest(arglist__110414);
return mail_to110410__delegate(e_mail,p__110411);
});
mail_to110410.cljs$core$IFn$_invoke$arity$variadic = mail_to110410__delegate;
return mail_to110410;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to110410);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list110415 = (function unordered_list110415(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__110420(s__110421){
return (new cljs.core.LazySeq(null,(function (){
var s__110421__$1 = s__110421;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__110421__$1);
if(temp__4126__auto__){
var s__110421__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__110421__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__110421__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__110423 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__110422 = (0);
while(true){
if((i__110422 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__110422);
cljs.core.chunk_append.call(null,b__110423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__110424 = (i__110422 + (1));
i__110422 = G__110424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110423),iter__110420.call(null,cljs.core.chunk_rest.call(null,s__110421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110423),null);
}
} else {
var x = cljs.core.first.call(null,s__110421__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__110420.call(null,cljs.core.rest.call(null,s__110421__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list110415);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list110425 = (function ordered_list110425(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__110430(s__110431){
return (new cljs.core.LazySeq(null,(function (){
var s__110431__$1 = s__110431;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__110431__$1);
if(temp__4126__auto__){
var s__110431__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__110431__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__110431__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__110433 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__110432 = (0);
while(true){
if((i__110432 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__110432);
cljs.core.chunk_append.call(null,b__110433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__110434 = (i__110432 + (1));
i__110432 = G__110434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110433),iter__110430.call(null,cljs.core.chunk_rest.call(null,s__110431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110433),null);
}
} else {
var x = cljs.core.first.call(null,s__110431__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__110430.call(null,cljs.core.rest.call(null,s__110431__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list110425);
/**
* Create an image element.
*/
sablono.core.image110435 = (function() {
var image110435 = null;
var image110435__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image110435__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image110435 = function(src,alt){
switch(arguments.length){
case 1:
return image110435__1.call(this,src);
case 2:
return image110435__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image110435.cljs$core$IFn$_invoke$arity$1 = image110435__1;
image110435.cljs$core$IFn$_invoke$arity$2 = image110435__2;
return image110435;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image110435);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__110436_SHARP_,p2__110437_SHARP_){
return [cljs.core.str(p1__110436_SHARP_),cljs.core.str("["),cljs.core.str(p2__110437_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__110438_SHARP_,p2__110439_SHARP_){
return [cljs.core.str(p1__110438_SHARP_),cljs.core.str("-"),cljs.core.str(p2__110439_SHARP_)].join('');
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
sablono.core.color_field110440 = (function() {
var color_field110440 = null;
var color_field110440__1 = (function (name__9770__auto__){
return color_field110440.call(null,name__9770__auto__,null);
});
var color_field110440__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field110440 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field110440__1.call(this,name__9770__auto__);
case 2:
return color_field110440__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field110440.cljs$core$IFn$_invoke$arity$1 = color_field110440__1;
color_field110440.cljs$core$IFn$_invoke$arity$2 = color_field110440__2;
return color_field110440;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field110440);

/**
* Creates a date input field.
*/
sablono.core.date_field110441 = (function() {
var date_field110441 = null;
var date_field110441__1 = (function (name__9770__auto__){
return date_field110441.call(null,name__9770__auto__,null);
});
var date_field110441__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field110441 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field110441__1.call(this,name__9770__auto__);
case 2:
return date_field110441__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field110441.cljs$core$IFn$_invoke$arity$1 = date_field110441__1;
date_field110441.cljs$core$IFn$_invoke$arity$2 = date_field110441__2;
return date_field110441;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field110441);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field110442 = (function() {
var datetime_field110442 = null;
var datetime_field110442__1 = (function (name__9770__auto__){
return datetime_field110442.call(null,name__9770__auto__,null);
});
var datetime_field110442__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field110442 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field110442__1.call(this,name__9770__auto__);
case 2:
return datetime_field110442__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field110442.cljs$core$IFn$_invoke$arity$1 = datetime_field110442__1;
datetime_field110442.cljs$core$IFn$_invoke$arity$2 = datetime_field110442__2;
return datetime_field110442;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field110442);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field110443 = (function() {
var datetime_local_field110443 = null;
var datetime_local_field110443__1 = (function (name__9770__auto__){
return datetime_local_field110443.call(null,name__9770__auto__,null);
});
var datetime_local_field110443__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field110443 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field110443__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field110443__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field110443.cljs$core$IFn$_invoke$arity$1 = datetime_local_field110443__1;
datetime_local_field110443.cljs$core$IFn$_invoke$arity$2 = datetime_local_field110443__2;
return datetime_local_field110443;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field110443);

/**
* Creates a email input field.
*/
sablono.core.email_field110444 = (function() {
var email_field110444 = null;
var email_field110444__1 = (function (name__9770__auto__){
return email_field110444.call(null,name__9770__auto__,null);
});
var email_field110444__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field110444 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field110444__1.call(this,name__9770__auto__);
case 2:
return email_field110444__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field110444.cljs$core$IFn$_invoke$arity$1 = email_field110444__1;
email_field110444.cljs$core$IFn$_invoke$arity$2 = email_field110444__2;
return email_field110444;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field110444);

/**
* Creates a file input field.
*/
sablono.core.file_field110445 = (function() {
var file_field110445 = null;
var file_field110445__1 = (function (name__9770__auto__){
return file_field110445.call(null,name__9770__auto__,null);
});
var file_field110445__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field110445 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field110445__1.call(this,name__9770__auto__);
case 2:
return file_field110445__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field110445.cljs$core$IFn$_invoke$arity$1 = file_field110445__1;
file_field110445.cljs$core$IFn$_invoke$arity$2 = file_field110445__2;
return file_field110445;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field110445);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field110446 = (function() {
var hidden_field110446 = null;
var hidden_field110446__1 = (function (name__9770__auto__){
return hidden_field110446.call(null,name__9770__auto__,null);
});
var hidden_field110446__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field110446 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field110446__1.call(this,name__9770__auto__);
case 2:
return hidden_field110446__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field110446.cljs$core$IFn$_invoke$arity$1 = hidden_field110446__1;
hidden_field110446.cljs$core$IFn$_invoke$arity$2 = hidden_field110446__2;
return hidden_field110446;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field110446);

/**
* Creates a month input field.
*/
sablono.core.month_field110447 = (function() {
var month_field110447 = null;
var month_field110447__1 = (function (name__9770__auto__){
return month_field110447.call(null,name__9770__auto__,null);
});
var month_field110447__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field110447 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field110447__1.call(this,name__9770__auto__);
case 2:
return month_field110447__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field110447.cljs$core$IFn$_invoke$arity$1 = month_field110447__1;
month_field110447.cljs$core$IFn$_invoke$arity$2 = month_field110447__2;
return month_field110447;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field110447);

/**
* Creates a number input field.
*/
sablono.core.number_field110448 = (function() {
var number_field110448 = null;
var number_field110448__1 = (function (name__9770__auto__){
return number_field110448.call(null,name__9770__auto__,null);
});
var number_field110448__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field110448 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field110448__1.call(this,name__9770__auto__);
case 2:
return number_field110448__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field110448.cljs$core$IFn$_invoke$arity$1 = number_field110448__1;
number_field110448.cljs$core$IFn$_invoke$arity$2 = number_field110448__2;
return number_field110448;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field110448);

/**
* Creates a password input field.
*/
sablono.core.password_field110449 = (function() {
var password_field110449 = null;
var password_field110449__1 = (function (name__9770__auto__){
return password_field110449.call(null,name__9770__auto__,null);
});
var password_field110449__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field110449 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field110449__1.call(this,name__9770__auto__);
case 2:
return password_field110449__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field110449.cljs$core$IFn$_invoke$arity$1 = password_field110449__1;
password_field110449.cljs$core$IFn$_invoke$arity$2 = password_field110449__2;
return password_field110449;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field110449);

/**
* Creates a range input field.
*/
sablono.core.range_field110450 = (function() {
var range_field110450 = null;
var range_field110450__1 = (function (name__9770__auto__){
return range_field110450.call(null,name__9770__auto__,null);
});
var range_field110450__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field110450 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field110450__1.call(this,name__9770__auto__);
case 2:
return range_field110450__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field110450.cljs$core$IFn$_invoke$arity$1 = range_field110450__1;
range_field110450.cljs$core$IFn$_invoke$arity$2 = range_field110450__2;
return range_field110450;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field110450);

/**
* Creates a search input field.
*/
sablono.core.search_field110451 = (function() {
var search_field110451 = null;
var search_field110451__1 = (function (name__9770__auto__){
return search_field110451.call(null,name__9770__auto__,null);
});
var search_field110451__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field110451 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field110451__1.call(this,name__9770__auto__);
case 2:
return search_field110451__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field110451.cljs$core$IFn$_invoke$arity$1 = search_field110451__1;
search_field110451.cljs$core$IFn$_invoke$arity$2 = search_field110451__2;
return search_field110451;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field110451);

/**
* Creates a tel input field.
*/
sablono.core.tel_field110452 = (function() {
var tel_field110452 = null;
var tel_field110452__1 = (function (name__9770__auto__){
return tel_field110452.call(null,name__9770__auto__,null);
});
var tel_field110452__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field110452 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field110452__1.call(this,name__9770__auto__);
case 2:
return tel_field110452__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field110452.cljs$core$IFn$_invoke$arity$1 = tel_field110452__1;
tel_field110452.cljs$core$IFn$_invoke$arity$2 = tel_field110452__2;
return tel_field110452;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field110452);

/**
* Creates a text input field.
*/
sablono.core.text_field110453 = (function() {
var text_field110453 = null;
var text_field110453__1 = (function (name__9770__auto__){
return text_field110453.call(null,name__9770__auto__,null);
});
var text_field110453__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field110453 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field110453__1.call(this,name__9770__auto__);
case 2:
return text_field110453__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field110453.cljs$core$IFn$_invoke$arity$1 = text_field110453__1;
text_field110453.cljs$core$IFn$_invoke$arity$2 = text_field110453__2;
return text_field110453;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field110453);

/**
* Creates a time input field.
*/
sablono.core.time_field110454 = (function() {
var time_field110454 = null;
var time_field110454__1 = (function (name__9770__auto__){
return time_field110454.call(null,name__9770__auto__,null);
});
var time_field110454__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field110454 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field110454__1.call(this,name__9770__auto__);
case 2:
return time_field110454__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field110454.cljs$core$IFn$_invoke$arity$1 = time_field110454__1;
time_field110454.cljs$core$IFn$_invoke$arity$2 = time_field110454__2;
return time_field110454;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field110454);

/**
* Creates a url input field.
*/
sablono.core.url_field110455 = (function() {
var url_field110455 = null;
var url_field110455__1 = (function (name__9770__auto__){
return url_field110455.call(null,name__9770__auto__,null);
});
var url_field110455__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field110455 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field110455__1.call(this,name__9770__auto__);
case 2:
return url_field110455__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field110455.cljs$core$IFn$_invoke$arity$1 = url_field110455__1;
url_field110455.cljs$core$IFn$_invoke$arity$2 = url_field110455__2;
return url_field110455;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field110455);

/**
* Creates a week input field.
*/
sablono.core.week_field110456 = (function() {
var week_field110456 = null;
var week_field110456__1 = (function (name__9770__auto__){
return week_field110456.call(null,name__9770__auto__,null);
});
var week_field110456__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field110456 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field110456__1.call(this,name__9770__auto__);
case 2:
return week_field110456__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field110456.cljs$core$IFn$_invoke$arity$1 = week_field110456__1;
week_field110456.cljs$core$IFn$_invoke$arity$2 = week_field110456__2;
return week_field110456;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field110456);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box110457 = (function() {
var check_box110457 = null;
var check_box110457__1 = (function (name){
return check_box110457.call(null,name,null);
});
var check_box110457__2 = (function (name,checked_QMARK_){
return check_box110457.call(null,name,checked_QMARK_,"true");
});
var check_box110457__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box110457 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box110457__1.call(this,name);
case 2:
return check_box110457__2.call(this,name,checked_QMARK_);
case 3:
return check_box110457__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box110457.cljs$core$IFn$_invoke$arity$1 = check_box110457__1;
check_box110457.cljs$core$IFn$_invoke$arity$2 = check_box110457__2;
check_box110457.cljs$core$IFn$_invoke$arity$3 = check_box110457__3;
return check_box110457;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box110457);
/**
* Creates a radio button.
*/
sablono.core.radio_button110458 = (function() {
var radio_button110458 = null;
var radio_button110458__1 = (function (group){
return radio_button110458.call(null,group,null);
});
var radio_button110458__2 = (function (group,checked_QMARK_){
return radio_button110458.call(null,group,checked_QMARK_,"true");
});
var radio_button110458__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button110458 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button110458__1.call(this,group);
case 2:
return radio_button110458__2.call(this,group,checked_QMARK_);
case 3:
return radio_button110458__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button110458.cljs$core$IFn$_invoke$arity$1 = radio_button110458__1;
radio_button110458.cljs$core$IFn$_invoke$arity$2 = radio_button110458__2;
radio_button110458.cljs$core$IFn$_invoke$arity$3 = radio_button110458__3;
return radio_button110458;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button110458);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options110459 = (function() {
var select_options110459 = null;
var select_options110459__1 = (function (coll){
return select_options110459.call(null,coll,null);
});
var select_options110459__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__110468(s__110469){
return (new cljs.core.LazySeq(null,(function (){
var s__110469__$1 = s__110469;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__110469__$1);
if(temp__4126__auto__){
var s__110469__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__110469__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__110469__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__110471 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__110470 = (0);
while(true){
if((i__110470 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__110470);
cljs.core.chunk_append.call(null,b__110471,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__110474 = x;
var text = cljs.core.nth.call(null,vec__110474,(0),null);
var val = cljs.core.nth.call(null,vec__110474,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__110474,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options110459.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__110476 = (i__110470 + (1));
i__110470 = G__110476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110471),iter__110468.call(null,cljs.core.chunk_rest.call(null,s__110469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__110471),null);
}
} else {
var x = cljs.core.first.call(null,s__110469__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__110475 = x;
var text = cljs.core.nth.call(null,vec__110475,(0),null);
var val = cljs.core.nth.call(null,vec__110475,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__110475,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options110459.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__110468.call(null,cljs.core.rest.call(null,s__110469__$2)));
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
select_options110459 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options110459__1.call(this,coll);
case 2:
return select_options110459__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options110459.cljs$core$IFn$_invoke$arity$1 = select_options110459__1;
select_options110459.cljs$core$IFn$_invoke$arity$2 = select_options110459__2;
return select_options110459;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options110459);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down110477 = (function() {
var drop_down110477 = null;
var drop_down110477__2 = (function (name,options){
return drop_down110477.call(null,name,options,null);
});
var drop_down110477__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down110477 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down110477__2.call(this,name,options);
case 3:
return drop_down110477__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down110477.cljs$core$IFn$_invoke$arity$2 = drop_down110477__2;
drop_down110477.cljs$core$IFn$_invoke$arity$3 = drop_down110477__3;
return drop_down110477;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down110477);
/**
* Creates a text area element.
*/
sablono.core.text_area110478 = (function() {
var text_area110478 = null;
var text_area110478__1 = (function (name){
return text_area110478.call(null,name,null);
});
var text_area110478__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area110478 = function(name,value){
switch(arguments.length){
case 1:
return text_area110478__1.call(this,name);
case 2:
return text_area110478__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area110478.cljs$core$IFn$_invoke$arity$1 = text_area110478__1;
text_area110478.cljs$core$IFn$_invoke$arity$2 = text_area110478__2;
return text_area110478;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area110478);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label110479 = (function label110479(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label110479);
/**
* Creates a submit button.
*/
sablono.core.submit_button110480 = (function submit_button110480(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button110480);
/**
* Creates a form reset button.
*/
sablono.core.reset_button110481 = (function reset_button110481(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button110481);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to110482 = (function() { 
var form_to110482__delegate = function (p__110483,body){
var vec__110485 = p__110483;
var method = cljs.core.nth.call(null,vec__110485,(0),null);
var action = cljs.core.nth.call(null,vec__110485,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to110482 = function (p__110483,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to110482__delegate.call(this,p__110483,body);};
form_to110482.cljs$lang$maxFixedArity = 1;
form_to110482.cljs$lang$applyTo = (function (arglist__110486){
var p__110483 = cljs.core.first(arglist__110486);
var body = cljs.core.rest(arglist__110486);
return form_to110482__delegate(p__110483,body);
});
form_to110482.cljs$core$IFn$_invoke$arity$variadic = form_to110482__delegate;
return form_to110482;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to110482);

//# sourceMappingURL=core.js.map