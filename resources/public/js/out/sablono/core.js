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
var G__136535__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__136534 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__136534,(0),null);
var body = cljs.core.nthnext.call(null,vec__136534,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__136535 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__136535__delegate.call(this,args);};
G__136535.cljs$lang$maxFixedArity = 0;
G__136535.cljs$lang$applyTo = (function (arglist__136536){
var args = cljs.core.seq(arglist__136536);
return G__136535__delegate(args);
});
G__136535.cljs$core$IFn$_invoke$arity$variadic = G__136535__delegate;
return G__136535;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__136541(s__136542){
return (new cljs.core.LazySeq(null,(function (){
var s__136542__$1 = s__136542;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__136542__$1);
if(temp__4126__auto__){
var s__136542__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136542__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__136542__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__136544 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__136543 = (0);
while(true){
if((i__136543 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__136543);
cljs.core.chunk_append.call(null,b__136544,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__136545 = (i__136543 + (1));
i__136543 = G__136545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136544),iter__136541.call(null,cljs.core.chunk_rest.call(null,s__136542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136544),null);
}
} else {
var args = cljs.core.first.call(null,s__136542__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__136541.call(null,cljs.core.rest.call(null,s__136542__$2)));
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
var iter__4378__auto__ = (function iter__136550(s__136551){
return (new cljs.core.LazySeq(null,(function (){
var s__136551__$1 = s__136551;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__136551__$1);
if(temp__4126__auto__){
var s__136551__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136551__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__136551__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__136553 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__136552 = (0);
while(true){
if((i__136552 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__136552);
cljs.core.chunk_append.call(null,b__136553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__136554 = (i__136552 + (1));
i__136552 = G__136554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136553),iter__136550.call(null,cljs.core.chunk_rest.call(null,s__136551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136553),null);
}
} else {
var style = cljs.core.first.call(null,s__136551__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__136550.call(null,cljs.core.rest.call(null,s__136551__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__136555){
var styles = cljs.core.seq(arglist__136555);
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
sablono.core.link_to136556 = (function() { 
var link_to136556__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to136556 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to136556__delegate.call(this,url,content);};
link_to136556.cljs$lang$maxFixedArity = 1;
link_to136556.cljs$lang$applyTo = (function (arglist__136557){
var url = cljs.core.first(arglist__136557);
var content = cljs.core.rest(arglist__136557);
return link_to136556__delegate(url,content);
});
link_to136556.cljs$core$IFn$_invoke$arity$variadic = link_to136556__delegate;
return link_to136556;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to136556);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to136558 = (function() { 
var mail_to136558__delegate = function (e_mail,p__136559){
var vec__136561 = p__136559;
var content = cljs.core.nth.call(null,vec__136561,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to136558 = function (e_mail,var_args){
var p__136559 = null;
if (arguments.length > 1) {
  p__136559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to136558__delegate.call(this,e_mail,p__136559);};
mail_to136558.cljs$lang$maxFixedArity = 1;
mail_to136558.cljs$lang$applyTo = (function (arglist__136562){
var e_mail = cljs.core.first(arglist__136562);
var p__136559 = cljs.core.rest(arglist__136562);
return mail_to136558__delegate(e_mail,p__136559);
});
mail_to136558.cljs$core$IFn$_invoke$arity$variadic = mail_to136558__delegate;
return mail_to136558;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to136558);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list136563 = (function unordered_list136563(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__136568(s__136569){
return (new cljs.core.LazySeq(null,(function (){
var s__136569__$1 = s__136569;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__136569__$1);
if(temp__4126__auto__){
var s__136569__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136569__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__136569__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__136571 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__136570 = (0);
while(true){
if((i__136570 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__136570);
cljs.core.chunk_append.call(null,b__136571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__136572 = (i__136570 + (1));
i__136570 = G__136572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136571),iter__136568.call(null,cljs.core.chunk_rest.call(null,s__136569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136571),null);
}
} else {
var x = cljs.core.first.call(null,s__136569__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__136568.call(null,cljs.core.rest.call(null,s__136569__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list136563);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list136573 = (function ordered_list136573(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__136578(s__136579){
return (new cljs.core.LazySeq(null,(function (){
var s__136579__$1 = s__136579;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__136579__$1);
if(temp__4126__auto__){
var s__136579__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136579__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__136579__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__136581 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__136580 = (0);
while(true){
if((i__136580 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__136580);
cljs.core.chunk_append.call(null,b__136581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__136582 = (i__136580 + (1));
i__136580 = G__136582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136581),iter__136578.call(null,cljs.core.chunk_rest.call(null,s__136579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136581),null);
}
} else {
var x = cljs.core.first.call(null,s__136579__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__136578.call(null,cljs.core.rest.call(null,s__136579__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list136573);
/**
* Create an image element.
*/
sablono.core.image136583 = (function() {
var image136583 = null;
var image136583__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image136583__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image136583 = function(src,alt){
switch(arguments.length){
case 1:
return image136583__1.call(this,src);
case 2:
return image136583__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image136583.cljs$core$IFn$_invoke$arity$1 = image136583__1;
image136583.cljs$core$IFn$_invoke$arity$2 = image136583__2;
return image136583;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image136583);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__136584_SHARP_,p2__136585_SHARP_){
return [cljs.core.str(p1__136584_SHARP_),cljs.core.str("["),cljs.core.str(p2__136585_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__136586_SHARP_,p2__136587_SHARP_){
return [cljs.core.str(p1__136586_SHARP_),cljs.core.str("-"),cljs.core.str(p2__136587_SHARP_)].join('');
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
sablono.core.color_field136588 = (function() {
var color_field136588 = null;
var color_field136588__1 = (function (name__10377__auto__){
return color_field136588.call(null,name__10377__auto__,null);
});
var color_field136588__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field136588 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field136588__1.call(this,name__10377__auto__);
case 2:
return color_field136588__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field136588.cljs$core$IFn$_invoke$arity$1 = color_field136588__1;
color_field136588.cljs$core$IFn$_invoke$arity$2 = color_field136588__2;
return color_field136588;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field136588);

/**
* Creates a date input field.
*/
sablono.core.date_field136589 = (function() {
var date_field136589 = null;
var date_field136589__1 = (function (name__10377__auto__){
return date_field136589.call(null,name__10377__auto__,null);
});
var date_field136589__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field136589 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field136589__1.call(this,name__10377__auto__);
case 2:
return date_field136589__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field136589.cljs$core$IFn$_invoke$arity$1 = date_field136589__1;
date_field136589.cljs$core$IFn$_invoke$arity$2 = date_field136589__2;
return date_field136589;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field136589);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field136590 = (function() {
var datetime_field136590 = null;
var datetime_field136590__1 = (function (name__10377__auto__){
return datetime_field136590.call(null,name__10377__auto__,null);
});
var datetime_field136590__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field136590 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field136590__1.call(this,name__10377__auto__);
case 2:
return datetime_field136590__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field136590.cljs$core$IFn$_invoke$arity$1 = datetime_field136590__1;
datetime_field136590.cljs$core$IFn$_invoke$arity$2 = datetime_field136590__2;
return datetime_field136590;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field136590);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field136591 = (function() {
var datetime_local_field136591 = null;
var datetime_local_field136591__1 = (function (name__10377__auto__){
return datetime_local_field136591.call(null,name__10377__auto__,null);
});
var datetime_local_field136591__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field136591 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field136591__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field136591__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field136591.cljs$core$IFn$_invoke$arity$1 = datetime_local_field136591__1;
datetime_local_field136591.cljs$core$IFn$_invoke$arity$2 = datetime_local_field136591__2;
return datetime_local_field136591;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field136591);

/**
* Creates a email input field.
*/
sablono.core.email_field136592 = (function() {
var email_field136592 = null;
var email_field136592__1 = (function (name__10377__auto__){
return email_field136592.call(null,name__10377__auto__,null);
});
var email_field136592__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field136592 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field136592__1.call(this,name__10377__auto__);
case 2:
return email_field136592__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field136592.cljs$core$IFn$_invoke$arity$1 = email_field136592__1;
email_field136592.cljs$core$IFn$_invoke$arity$2 = email_field136592__2;
return email_field136592;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field136592);

/**
* Creates a file input field.
*/
sablono.core.file_field136593 = (function() {
var file_field136593 = null;
var file_field136593__1 = (function (name__10377__auto__){
return file_field136593.call(null,name__10377__auto__,null);
});
var file_field136593__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field136593 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field136593__1.call(this,name__10377__auto__);
case 2:
return file_field136593__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field136593.cljs$core$IFn$_invoke$arity$1 = file_field136593__1;
file_field136593.cljs$core$IFn$_invoke$arity$2 = file_field136593__2;
return file_field136593;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field136593);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field136594 = (function() {
var hidden_field136594 = null;
var hidden_field136594__1 = (function (name__10377__auto__){
return hidden_field136594.call(null,name__10377__auto__,null);
});
var hidden_field136594__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field136594 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field136594__1.call(this,name__10377__auto__);
case 2:
return hidden_field136594__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field136594.cljs$core$IFn$_invoke$arity$1 = hidden_field136594__1;
hidden_field136594.cljs$core$IFn$_invoke$arity$2 = hidden_field136594__2;
return hidden_field136594;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field136594);

/**
* Creates a month input field.
*/
sablono.core.month_field136595 = (function() {
var month_field136595 = null;
var month_field136595__1 = (function (name__10377__auto__){
return month_field136595.call(null,name__10377__auto__,null);
});
var month_field136595__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field136595 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field136595__1.call(this,name__10377__auto__);
case 2:
return month_field136595__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field136595.cljs$core$IFn$_invoke$arity$1 = month_field136595__1;
month_field136595.cljs$core$IFn$_invoke$arity$2 = month_field136595__2;
return month_field136595;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field136595);

/**
* Creates a number input field.
*/
sablono.core.number_field136596 = (function() {
var number_field136596 = null;
var number_field136596__1 = (function (name__10377__auto__){
return number_field136596.call(null,name__10377__auto__,null);
});
var number_field136596__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field136596 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field136596__1.call(this,name__10377__auto__);
case 2:
return number_field136596__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field136596.cljs$core$IFn$_invoke$arity$1 = number_field136596__1;
number_field136596.cljs$core$IFn$_invoke$arity$2 = number_field136596__2;
return number_field136596;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field136596);

/**
* Creates a password input field.
*/
sablono.core.password_field136597 = (function() {
var password_field136597 = null;
var password_field136597__1 = (function (name__10377__auto__){
return password_field136597.call(null,name__10377__auto__,null);
});
var password_field136597__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field136597 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field136597__1.call(this,name__10377__auto__);
case 2:
return password_field136597__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field136597.cljs$core$IFn$_invoke$arity$1 = password_field136597__1;
password_field136597.cljs$core$IFn$_invoke$arity$2 = password_field136597__2;
return password_field136597;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field136597);

/**
* Creates a range input field.
*/
sablono.core.range_field136598 = (function() {
var range_field136598 = null;
var range_field136598__1 = (function (name__10377__auto__){
return range_field136598.call(null,name__10377__auto__,null);
});
var range_field136598__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field136598 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field136598__1.call(this,name__10377__auto__);
case 2:
return range_field136598__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field136598.cljs$core$IFn$_invoke$arity$1 = range_field136598__1;
range_field136598.cljs$core$IFn$_invoke$arity$2 = range_field136598__2;
return range_field136598;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field136598);

/**
* Creates a search input field.
*/
sablono.core.search_field136599 = (function() {
var search_field136599 = null;
var search_field136599__1 = (function (name__10377__auto__){
return search_field136599.call(null,name__10377__auto__,null);
});
var search_field136599__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field136599 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field136599__1.call(this,name__10377__auto__);
case 2:
return search_field136599__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field136599.cljs$core$IFn$_invoke$arity$1 = search_field136599__1;
search_field136599.cljs$core$IFn$_invoke$arity$2 = search_field136599__2;
return search_field136599;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field136599);

/**
* Creates a tel input field.
*/
sablono.core.tel_field136600 = (function() {
var tel_field136600 = null;
var tel_field136600__1 = (function (name__10377__auto__){
return tel_field136600.call(null,name__10377__auto__,null);
});
var tel_field136600__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field136600 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field136600__1.call(this,name__10377__auto__);
case 2:
return tel_field136600__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field136600.cljs$core$IFn$_invoke$arity$1 = tel_field136600__1;
tel_field136600.cljs$core$IFn$_invoke$arity$2 = tel_field136600__2;
return tel_field136600;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field136600);

/**
* Creates a text input field.
*/
sablono.core.text_field136601 = (function() {
var text_field136601 = null;
var text_field136601__1 = (function (name__10377__auto__){
return text_field136601.call(null,name__10377__auto__,null);
});
var text_field136601__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field136601 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field136601__1.call(this,name__10377__auto__);
case 2:
return text_field136601__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field136601.cljs$core$IFn$_invoke$arity$1 = text_field136601__1;
text_field136601.cljs$core$IFn$_invoke$arity$2 = text_field136601__2;
return text_field136601;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field136601);

/**
* Creates a time input field.
*/
sablono.core.time_field136602 = (function() {
var time_field136602 = null;
var time_field136602__1 = (function (name__10377__auto__){
return time_field136602.call(null,name__10377__auto__,null);
});
var time_field136602__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field136602 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field136602__1.call(this,name__10377__auto__);
case 2:
return time_field136602__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field136602.cljs$core$IFn$_invoke$arity$1 = time_field136602__1;
time_field136602.cljs$core$IFn$_invoke$arity$2 = time_field136602__2;
return time_field136602;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field136602);

/**
* Creates a url input field.
*/
sablono.core.url_field136603 = (function() {
var url_field136603 = null;
var url_field136603__1 = (function (name__10377__auto__){
return url_field136603.call(null,name__10377__auto__,null);
});
var url_field136603__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field136603 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field136603__1.call(this,name__10377__auto__);
case 2:
return url_field136603__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field136603.cljs$core$IFn$_invoke$arity$1 = url_field136603__1;
url_field136603.cljs$core$IFn$_invoke$arity$2 = url_field136603__2;
return url_field136603;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field136603);

/**
* Creates a week input field.
*/
sablono.core.week_field136604 = (function() {
var week_field136604 = null;
var week_field136604__1 = (function (name__10377__auto__){
return week_field136604.call(null,name__10377__auto__,null);
});
var week_field136604__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field136604 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field136604__1.call(this,name__10377__auto__);
case 2:
return week_field136604__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field136604.cljs$core$IFn$_invoke$arity$1 = week_field136604__1;
week_field136604.cljs$core$IFn$_invoke$arity$2 = week_field136604__2;
return week_field136604;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field136604);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box136605 = (function() {
var check_box136605 = null;
var check_box136605__1 = (function (name){
return check_box136605.call(null,name,null);
});
var check_box136605__2 = (function (name,checked_QMARK_){
return check_box136605.call(null,name,checked_QMARK_,"true");
});
var check_box136605__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box136605 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box136605__1.call(this,name);
case 2:
return check_box136605__2.call(this,name,checked_QMARK_);
case 3:
return check_box136605__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box136605.cljs$core$IFn$_invoke$arity$1 = check_box136605__1;
check_box136605.cljs$core$IFn$_invoke$arity$2 = check_box136605__2;
check_box136605.cljs$core$IFn$_invoke$arity$3 = check_box136605__3;
return check_box136605;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box136605);
/**
* Creates a radio button.
*/
sablono.core.radio_button136606 = (function() {
var radio_button136606 = null;
var radio_button136606__1 = (function (group){
return radio_button136606.call(null,group,null);
});
var radio_button136606__2 = (function (group,checked_QMARK_){
return radio_button136606.call(null,group,checked_QMARK_,"true");
});
var radio_button136606__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button136606 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button136606__1.call(this,group);
case 2:
return radio_button136606__2.call(this,group,checked_QMARK_);
case 3:
return radio_button136606__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button136606.cljs$core$IFn$_invoke$arity$1 = radio_button136606__1;
radio_button136606.cljs$core$IFn$_invoke$arity$2 = radio_button136606__2;
radio_button136606.cljs$core$IFn$_invoke$arity$3 = radio_button136606__3;
return radio_button136606;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button136606);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options136607 = (function() {
var select_options136607 = null;
var select_options136607__1 = (function (coll){
return select_options136607.call(null,coll,null);
});
var select_options136607__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__136616(s__136617){
return (new cljs.core.LazySeq(null,(function (){
var s__136617__$1 = s__136617;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__136617__$1);
if(temp__4126__auto__){
var s__136617__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__136617__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__136617__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__136619 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__136618 = (0);
while(true){
if((i__136618 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__136618);
cljs.core.chunk_append.call(null,b__136619,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__136622 = x;
var text = cljs.core.nth.call(null,vec__136622,(0),null);
var val = cljs.core.nth.call(null,vec__136622,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__136622,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options136607.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__136624 = (i__136618 + (1));
i__136618 = G__136624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136619),iter__136616.call(null,cljs.core.chunk_rest.call(null,s__136617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136619),null);
}
} else {
var x = cljs.core.first.call(null,s__136617__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__136623 = x;
var text = cljs.core.nth.call(null,vec__136623,(0),null);
var val = cljs.core.nth.call(null,vec__136623,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__136623,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options136607.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__136616.call(null,cljs.core.rest.call(null,s__136617__$2)));
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
select_options136607 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options136607__1.call(this,coll);
case 2:
return select_options136607__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options136607.cljs$core$IFn$_invoke$arity$1 = select_options136607__1;
select_options136607.cljs$core$IFn$_invoke$arity$2 = select_options136607__2;
return select_options136607;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options136607);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down136625 = (function() {
var drop_down136625 = null;
var drop_down136625__2 = (function (name,options){
return drop_down136625.call(null,name,options,null);
});
var drop_down136625__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down136625 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down136625__2.call(this,name,options);
case 3:
return drop_down136625__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down136625.cljs$core$IFn$_invoke$arity$2 = drop_down136625__2;
drop_down136625.cljs$core$IFn$_invoke$arity$3 = drop_down136625__3;
return drop_down136625;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down136625);
/**
* Creates a text area element.
*/
sablono.core.text_area136626 = (function() {
var text_area136626 = null;
var text_area136626__1 = (function (name){
return text_area136626.call(null,name,null);
});
var text_area136626__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area136626 = function(name,value){
switch(arguments.length){
case 1:
return text_area136626__1.call(this,name);
case 2:
return text_area136626__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area136626.cljs$core$IFn$_invoke$arity$1 = text_area136626__1;
text_area136626.cljs$core$IFn$_invoke$arity$2 = text_area136626__2;
return text_area136626;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area136626);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label136627 = (function label136627(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label136627);
/**
* Creates a submit button.
*/
sablono.core.submit_button136628 = (function submit_button136628(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button136628);
/**
* Creates a form reset button.
*/
sablono.core.reset_button136629 = (function reset_button136629(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button136629);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to136630 = (function() { 
var form_to136630__delegate = function (p__136631,body){
var vec__136633 = p__136631;
var method = cljs.core.nth.call(null,vec__136633,(0),null);
var action = cljs.core.nth.call(null,vec__136633,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to136630 = function (p__136631,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to136630__delegate.call(this,p__136631,body);};
form_to136630.cljs$lang$maxFixedArity = 1;
form_to136630.cljs$lang$applyTo = (function (arglist__136634){
var p__136631 = cljs.core.first(arglist__136634);
var body = cljs.core.rest(arglist__136634);
return form_to136630__delegate(p__136631,body);
});
form_to136630.cljs$core$IFn$_invoke$arity$variadic = form_to136630__delegate;
return form_to136630;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to136630);

//# sourceMappingURL=core.js.map