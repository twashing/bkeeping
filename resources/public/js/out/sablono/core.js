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
var G__959998__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__959997 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__959997,(0),null);
var body = cljs.core.nthnext.call(null,vec__959997,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__959998 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__959998__delegate.call(this,args);};
G__959998.cljs$lang$maxFixedArity = 0;
G__959998.cljs$lang$applyTo = (function (arglist__959999){
var args = cljs.core.seq(arglist__959999);
return G__959998__delegate(args);
});
G__959998.cljs$core$IFn$_invoke$arity$variadic = G__959998__delegate;
return G__959998;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__960004(s__960005){
return (new cljs.core.LazySeq(null,(function (){
var s__960005__$1 = s__960005;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__960005__$1);
if(temp__4126__auto__){
var s__960005__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__960005__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__960005__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__960007 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__960006 = (0);
while(true){
if((i__960006 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__960006);
cljs.core.chunk_append.call(null,b__960007,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__960008 = (i__960006 + (1));
i__960006 = G__960008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960007),iter__960004.call(null,cljs.core.chunk_rest.call(null,s__960005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960007),null);
}
} else {
var args = cljs.core.first.call(null,s__960005__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__960004.call(null,cljs.core.rest.call(null,s__960005__$2)));
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
var iter__4378__auto__ = (function iter__960013(s__960014){
return (new cljs.core.LazySeq(null,(function (){
var s__960014__$1 = s__960014;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__960014__$1);
if(temp__4126__auto__){
var s__960014__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__960014__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__960014__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__960016 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__960015 = (0);
while(true){
if((i__960015 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__960015);
cljs.core.chunk_append.call(null,b__960016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__960017 = (i__960015 + (1));
i__960015 = G__960017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960016),iter__960013.call(null,cljs.core.chunk_rest.call(null,s__960014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960016),null);
}
} else {
var style = cljs.core.first.call(null,s__960014__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__960013.call(null,cljs.core.rest.call(null,s__960014__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__960018){
var styles = cljs.core.seq(arglist__960018);
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
sablono.core.link_to960019 = (function() { 
var link_to960019__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to960019 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to960019__delegate.call(this,url,content);};
link_to960019.cljs$lang$maxFixedArity = 1;
link_to960019.cljs$lang$applyTo = (function (arglist__960020){
var url = cljs.core.first(arglist__960020);
var content = cljs.core.rest(arglist__960020);
return link_to960019__delegate(url,content);
});
link_to960019.cljs$core$IFn$_invoke$arity$variadic = link_to960019__delegate;
return link_to960019;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to960019);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to960021 = (function() { 
var mail_to960021__delegate = function (e_mail,p__960022){
var vec__960024 = p__960022;
var content = cljs.core.nth.call(null,vec__960024,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to960021 = function (e_mail,var_args){
var p__960022 = null;
if (arguments.length > 1) {
  p__960022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to960021__delegate.call(this,e_mail,p__960022);};
mail_to960021.cljs$lang$maxFixedArity = 1;
mail_to960021.cljs$lang$applyTo = (function (arglist__960025){
var e_mail = cljs.core.first(arglist__960025);
var p__960022 = cljs.core.rest(arglist__960025);
return mail_to960021__delegate(e_mail,p__960022);
});
mail_to960021.cljs$core$IFn$_invoke$arity$variadic = mail_to960021__delegate;
return mail_to960021;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to960021);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list960026 = (function unordered_list960026(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__960031(s__960032){
return (new cljs.core.LazySeq(null,(function (){
var s__960032__$1 = s__960032;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__960032__$1);
if(temp__4126__auto__){
var s__960032__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__960032__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__960032__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__960034 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__960033 = (0);
while(true){
if((i__960033 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__960033);
cljs.core.chunk_append.call(null,b__960034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__960035 = (i__960033 + (1));
i__960033 = G__960035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960034),iter__960031.call(null,cljs.core.chunk_rest.call(null,s__960032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960034),null);
}
} else {
var x = cljs.core.first.call(null,s__960032__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__960031.call(null,cljs.core.rest.call(null,s__960032__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list960026);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list960036 = (function ordered_list960036(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__960041(s__960042){
return (new cljs.core.LazySeq(null,(function (){
var s__960042__$1 = s__960042;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__960042__$1);
if(temp__4126__auto__){
var s__960042__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__960042__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__960042__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__960044 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__960043 = (0);
while(true){
if((i__960043 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__960043);
cljs.core.chunk_append.call(null,b__960044,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__960045 = (i__960043 + (1));
i__960043 = G__960045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960044),iter__960041.call(null,cljs.core.chunk_rest.call(null,s__960042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960044),null);
}
} else {
var x = cljs.core.first.call(null,s__960042__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__960041.call(null,cljs.core.rest.call(null,s__960042__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list960036);
/**
* Create an image element.
*/
sablono.core.image960046 = (function() {
var image960046 = null;
var image960046__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image960046__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image960046 = function(src,alt){
switch(arguments.length){
case 1:
return image960046__1.call(this,src);
case 2:
return image960046__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image960046.cljs$core$IFn$_invoke$arity$1 = image960046__1;
image960046.cljs$core$IFn$_invoke$arity$2 = image960046__2;
return image960046;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image960046);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__960047_SHARP_,p2__960048_SHARP_){
return [cljs.core.str(p1__960047_SHARP_),cljs.core.str("["),cljs.core.str(p2__960048_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__960049_SHARP_,p2__960050_SHARP_){
return [cljs.core.str(p1__960049_SHARP_),cljs.core.str("-"),cljs.core.str(p2__960050_SHARP_)].join('');
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
sablono.core.color_field960051 = (function() {
var color_field960051 = null;
var color_field960051__1 = (function (name__9770__auto__){
return color_field960051.call(null,name__9770__auto__,null);
});
var color_field960051__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field960051 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field960051__1.call(this,name__9770__auto__);
case 2:
return color_field960051__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field960051.cljs$core$IFn$_invoke$arity$1 = color_field960051__1;
color_field960051.cljs$core$IFn$_invoke$arity$2 = color_field960051__2;
return color_field960051;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field960051);

/**
* Creates a date input field.
*/
sablono.core.date_field960052 = (function() {
var date_field960052 = null;
var date_field960052__1 = (function (name__9770__auto__){
return date_field960052.call(null,name__9770__auto__,null);
});
var date_field960052__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field960052 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field960052__1.call(this,name__9770__auto__);
case 2:
return date_field960052__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field960052.cljs$core$IFn$_invoke$arity$1 = date_field960052__1;
date_field960052.cljs$core$IFn$_invoke$arity$2 = date_field960052__2;
return date_field960052;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field960052);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field960053 = (function() {
var datetime_field960053 = null;
var datetime_field960053__1 = (function (name__9770__auto__){
return datetime_field960053.call(null,name__9770__auto__,null);
});
var datetime_field960053__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field960053 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field960053__1.call(this,name__9770__auto__);
case 2:
return datetime_field960053__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field960053.cljs$core$IFn$_invoke$arity$1 = datetime_field960053__1;
datetime_field960053.cljs$core$IFn$_invoke$arity$2 = datetime_field960053__2;
return datetime_field960053;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field960053);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field960054 = (function() {
var datetime_local_field960054 = null;
var datetime_local_field960054__1 = (function (name__9770__auto__){
return datetime_local_field960054.call(null,name__9770__auto__,null);
});
var datetime_local_field960054__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field960054 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field960054__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field960054__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field960054.cljs$core$IFn$_invoke$arity$1 = datetime_local_field960054__1;
datetime_local_field960054.cljs$core$IFn$_invoke$arity$2 = datetime_local_field960054__2;
return datetime_local_field960054;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field960054);

/**
* Creates a email input field.
*/
sablono.core.email_field960055 = (function() {
var email_field960055 = null;
var email_field960055__1 = (function (name__9770__auto__){
return email_field960055.call(null,name__9770__auto__,null);
});
var email_field960055__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field960055 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field960055__1.call(this,name__9770__auto__);
case 2:
return email_field960055__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field960055.cljs$core$IFn$_invoke$arity$1 = email_field960055__1;
email_field960055.cljs$core$IFn$_invoke$arity$2 = email_field960055__2;
return email_field960055;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field960055);

/**
* Creates a file input field.
*/
sablono.core.file_field960056 = (function() {
var file_field960056 = null;
var file_field960056__1 = (function (name__9770__auto__){
return file_field960056.call(null,name__9770__auto__,null);
});
var file_field960056__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field960056 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field960056__1.call(this,name__9770__auto__);
case 2:
return file_field960056__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field960056.cljs$core$IFn$_invoke$arity$1 = file_field960056__1;
file_field960056.cljs$core$IFn$_invoke$arity$2 = file_field960056__2;
return file_field960056;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field960056);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field960057 = (function() {
var hidden_field960057 = null;
var hidden_field960057__1 = (function (name__9770__auto__){
return hidden_field960057.call(null,name__9770__auto__,null);
});
var hidden_field960057__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field960057 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field960057__1.call(this,name__9770__auto__);
case 2:
return hidden_field960057__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field960057.cljs$core$IFn$_invoke$arity$1 = hidden_field960057__1;
hidden_field960057.cljs$core$IFn$_invoke$arity$2 = hidden_field960057__2;
return hidden_field960057;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field960057);

/**
* Creates a month input field.
*/
sablono.core.month_field960058 = (function() {
var month_field960058 = null;
var month_field960058__1 = (function (name__9770__auto__){
return month_field960058.call(null,name__9770__auto__,null);
});
var month_field960058__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field960058 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field960058__1.call(this,name__9770__auto__);
case 2:
return month_field960058__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field960058.cljs$core$IFn$_invoke$arity$1 = month_field960058__1;
month_field960058.cljs$core$IFn$_invoke$arity$2 = month_field960058__2;
return month_field960058;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field960058);

/**
* Creates a number input field.
*/
sablono.core.number_field960059 = (function() {
var number_field960059 = null;
var number_field960059__1 = (function (name__9770__auto__){
return number_field960059.call(null,name__9770__auto__,null);
});
var number_field960059__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field960059 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field960059__1.call(this,name__9770__auto__);
case 2:
return number_field960059__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field960059.cljs$core$IFn$_invoke$arity$1 = number_field960059__1;
number_field960059.cljs$core$IFn$_invoke$arity$2 = number_field960059__2;
return number_field960059;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field960059);

/**
* Creates a password input field.
*/
sablono.core.password_field960060 = (function() {
var password_field960060 = null;
var password_field960060__1 = (function (name__9770__auto__){
return password_field960060.call(null,name__9770__auto__,null);
});
var password_field960060__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field960060 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field960060__1.call(this,name__9770__auto__);
case 2:
return password_field960060__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field960060.cljs$core$IFn$_invoke$arity$1 = password_field960060__1;
password_field960060.cljs$core$IFn$_invoke$arity$2 = password_field960060__2;
return password_field960060;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field960060);

/**
* Creates a range input field.
*/
sablono.core.range_field960061 = (function() {
var range_field960061 = null;
var range_field960061__1 = (function (name__9770__auto__){
return range_field960061.call(null,name__9770__auto__,null);
});
var range_field960061__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field960061 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field960061__1.call(this,name__9770__auto__);
case 2:
return range_field960061__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field960061.cljs$core$IFn$_invoke$arity$1 = range_field960061__1;
range_field960061.cljs$core$IFn$_invoke$arity$2 = range_field960061__2;
return range_field960061;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field960061);

/**
* Creates a search input field.
*/
sablono.core.search_field960062 = (function() {
var search_field960062 = null;
var search_field960062__1 = (function (name__9770__auto__){
return search_field960062.call(null,name__9770__auto__,null);
});
var search_field960062__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field960062 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field960062__1.call(this,name__9770__auto__);
case 2:
return search_field960062__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field960062.cljs$core$IFn$_invoke$arity$1 = search_field960062__1;
search_field960062.cljs$core$IFn$_invoke$arity$2 = search_field960062__2;
return search_field960062;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field960062);

/**
* Creates a tel input field.
*/
sablono.core.tel_field960063 = (function() {
var tel_field960063 = null;
var tel_field960063__1 = (function (name__9770__auto__){
return tel_field960063.call(null,name__9770__auto__,null);
});
var tel_field960063__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field960063 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field960063__1.call(this,name__9770__auto__);
case 2:
return tel_field960063__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field960063.cljs$core$IFn$_invoke$arity$1 = tel_field960063__1;
tel_field960063.cljs$core$IFn$_invoke$arity$2 = tel_field960063__2;
return tel_field960063;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field960063);

/**
* Creates a text input field.
*/
sablono.core.text_field960064 = (function() {
var text_field960064 = null;
var text_field960064__1 = (function (name__9770__auto__){
return text_field960064.call(null,name__9770__auto__,null);
});
var text_field960064__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field960064 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field960064__1.call(this,name__9770__auto__);
case 2:
return text_field960064__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field960064.cljs$core$IFn$_invoke$arity$1 = text_field960064__1;
text_field960064.cljs$core$IFn$_invoke$arity$2 = text_field960064__2;
return text_field960064;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field960064);

/**
* Creates a time input field.
*/
sablono.core.time_field960065 = (function() {
var time_field960065 = null;
var time_field960065__1 = (function (name__9770__auto__){
return time_field960065.call(null,name__9770__auto__,null);
});
var time_field960065__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field960065 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field960065__1.call(this,name__9770__auto__);
case 2:
return time_field960065__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field960065.cljs$core$IFn$_invoke$arity$1 = time_field960065__1;
time_field960065.cljs$core$IFn$_invoke$arity$2 = time_field960065__2;
return time_field960065;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field960065);

/**
* Creates a url input field.
*/
sablono.core.url_field960066 = (function() {
var url_field960066 = null;
var url_field960066__1 = (function (name__9770__auto__){
return url_field960066.call(null,name__9770__auto__,null);
});
var url_field960066__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field960066 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field960066__1.call(this,name__9770__auto__);
case 2:
return url_field960066__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field960066.cljs$core$IFn$_invoke$arity$1 = url_field960066__1;
url_field960066.cljs$core$IFn$_invoke$arity$2 = url_field960066__2;
return url_field960066;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field960066);

/**
* Creates a week input field.
*/
sablono.core.week_field960067 = (function() {
var week_field960067 = null;
var week_field960067__1 = (function (name__9770__auto__){
return week_field960067.call(null,name__9770__auto__,null);
});
var week_field960067__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field960067 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field960067__1.call(this,name__9770__auto__);
case 2:
return week_field960067__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field960067.cljs$core$IFn$_invoke$arity$1 = week_field960067__1;
week_field960067.cljs$core$IFn$_invoke$arity$2 = week_field960067__2;
return week_field960067;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field960067);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box960068 = (function() {
var check_box960068 = null;
var check_box960068__1 = (function (name){
return check_box960068.call(null,name,null);
});
var check_box960068__2 = (function (name,checked_QMARK_){
return check_box960068.call(null,name,checked_QMARK_,"true");
});
var check_box960068__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box960068 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box960068__1.call(this,name);
case 2:
return check_box960068__2.call(this,name,checked_QMARK_);
case 3:
return check_box960068__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box960068.cljs$core$IFn$_invoke$arity$1 = check_box960068__1;
check_box960068.cljs$core$IFn$_invoke$arity$2 = check_box960068__2;
check_box960068.cljs$core$IFn$_invoke$arity$3 = check_box960068__3;
return check_box960068;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box960068);
/**
* Creates a radio button.
*/
sablono.core.radio_button960069 = (function() {
var radio_button960069 = null;
var radio_button960069__1 = (function (group){
return radio_button960069.call(null,group,null);
});
var radio_button960069__2 = (function (group,checked_QMARK_){
return radio_button960069.call(null,group,checked_QMARK_,"true");
});
var radio_button960069__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button960069 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button960069__1.call(this,group);
case 2:
return radio_button960069__2.call(this,group,checked_QMARK_);
case 3:
return radio_button960069__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button960069.cljs$core$IFn$_invoke$arity$1 = radio_button960069__1;
radio_button960069.cljs$core$IFn$_invoke$arity$2 = radio_button960069__2;
radio_button960069.cljs$core$IFn$_invoke$arity$3 = radio_button960069__3;
return radio_button960069;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button960069);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options960070 = (function() {
var select_options960070 = null;
var select_options960070__1 = (function (coll){
return select_options960070.call(null,coll,null);
});
var select_options960070__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__960079(s__960080){
return (new cljs.core.LazySeq(null,(function (){
var s__960080__$1 = s__960080;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__960080__$1);
if(temp__4126__auto__){
var s__960080__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__960080__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__960080__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__960082 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__960081 = (0);
while(true){
if((i__960081 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__960081);
cljs.core.chunk_append.call(null,b__960082,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__960085 = x;
var text = cljs.core.nth.call(null,vec__960085,(0),null);
var val = cljs.core.nth.call(null,vec__960085,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__960085,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options960070.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__960087 = (i__960081 + (1));
i__960081 = G__960087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960082),iter__960079.call(null,cljs.core.chunk_rest.call(null,s__960080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__960082),null);
}
} else {
var x = cljs.core.first.call(null,s__960080__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__960086 = x;
var text = cljs.core.nth.call(null,vec__960086,(0),null);
var val = cljs.core.nth.call(null,vec__960086,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__960086,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options960070.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__960079.call(null,cljs.core.rest.call(null,s__960080__$2)));
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
select_options960070 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options960070__1.call(this,coll);
case 2:
return select_options960070__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options960070.cljs$core$IFn$_invoke$arity$1 = select_options960070__1;
select_options960070.cljs$core$IFn$_invoke$arity$2 = select_options960070__2;
return select_options960070;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options960070);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down960088 = (function() {
var drop_down960088 = null;
var drop_down960088__2 = (function (name,options){
return drop_down960088.call(null,name,options,null);
});
var drop_down960088__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down960088 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down960088__2.call(this,name,options);
case 3:
return drop_down960088__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down960088.cljs$core$IFn$_invoke$arity$2 = drop_down960088__2;
drop_down960088.cljs$core$IFn$_invoke$arity$3 = drop_down960088__3;
return drop_down960088;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down960088);
/**
* Creates a text area element.
*/
sablono.core.text_area960089 = (function() {
var text_area960089 = null;
var text_area960089__1 = (function (name){
return text_area960089.call(null,name,null);
});
var text_area960089__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area960089 = function(name,value){
switch(arguments.length){
case 1:
return text_area960089__1.call(this,name);
case 2:
return text_area960089__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area960089.cljs$core$IFn$_invoke$arity$1 = text_area960089__1;
text_area960089.cljs$core$IFn$_invoke$arity$2 = text_area960089__2;
return text_area960089;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area960089);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label960090 = (function label960090(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label960090);
/**
* Creates a submit button.
*/
sablono.core.submit_button960091 = (function submit_button960091(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button960091);
/**
* Creates a form reset button.
*/
sablono.core.reset_button960092 = (function reset_button960092(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button960092);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to960093 = (function() { 
var form_to960093__delegate = function (p__960094,body){
var vec__960096 = p__960094;
var method = cljs.core.nth.call(null,vec__960096,(0),null);
var action = cljs.core.nth.call(null,vec__960096,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to960093 = function (p__960094,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to960093__delegate.call(this,p__960094,body);};
form_to960093.cljs$lang$maxFixedArity = 1;
form_to960093.cljs$lang$applyTo = (function (arglist__960097){
var p__960094 = cljs.core.first(arglist__960097);
var body = cljs.core.rest(arglist__960097);
return form_to960093__delegate(p__960094,body);
});
form_to960093.cljs$core$IFn$_invoke$arity$variadic = form_to960093__delegate;
return form_to960093;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to960093);

//# sourceMappingURL=core.js.map