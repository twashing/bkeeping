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
var G__1277714__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__1277713 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__1277713,(0),null);
var body = cljs.core.nthnext.call(null,vec__1277713,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__1277714 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__1277714__delegate.call(this,args);};
G__1277714.cljs$lang$maxFixedArity = 0;
G__1277714.cljs$lang$applyTo = (function (arglist__1277715){
var args = cljs.core.seq(arglist__1277715);
return G__1277714__delegate(args);
});
G__1277714.cljs$core$IFn$_invoke$arity$variadic = G__1277714__delegate;
return G__1277714;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__1277720(s__1277721){
return (new cljs.core.LazySeq(null,(function (){
var s__1277721__$1 = s__1277721;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1277721__$1);
if(temp__4126__auto__){
var s__1277721__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1277721__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1277721__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1277723 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1277722 = (0);
while(true){
if((i__1277722 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__1277722);
cljs.core.chunk_append.call(null,b__1277723,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__1277724 = (i__1277722 + (1));
i__1277722 = G__1277724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277723),iter__1277720.call(null,cljs.core.chunk_rest.call(null,s__1277721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277723),null);
}
} else {
var args = cljs.core.first.call(null,s__1277721__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__1277720.call(null,cljs.core.rest.call(null,s__1277721__$2)));
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
var iter__4378__auto__ = (function iter__1277729(s__1277730){
return (new cljs.core.LazySeq(null,(function (){
var s__1277730__$1 = s__1277730;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1277730__$1);
if(temp__4126__auto__){
var s__1277730__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1277730__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1277730__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1277732 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1277731 = (0);
while(true){
if((i__1277731 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__1277731);
cljs.core.chunk_append.call(null,b__1277732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__1277733 = (i__1277731 + (1));
i__1277731 = G__1277733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277732),iter__1277729.call(null,cljs.core.chunk_rest.call(null,s__1277730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277732),null);
}
} else {
var style = cljs.core.first.call(null,s__1277730__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__1277729.call(null,cljs.core.rest.call(null,s__1277730__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__1277734){
var styles = cljs.core.seq(arglist__1277734);
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
sablono.core.link_to1277735 = (function() { 
var link_to1277735__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to1277735 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to1277735__delegate.call(this,url,content);};
link_to1277735.cljs$lang$maxFixedArity = 1;
link_to1277735.cljs$lang$applyTo = (function (arglist__1277736){
var url = cljs.core.first(arglist__1277736);
var content = cljs.core.rest(arglist__1277736);
return link_to1277735__delegate(url,content);
});
link_to1277735.cljs$core$IFn$_invoke$arity$variadic = link_to1277735__delegate;
return link_to1277735;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to1277735);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to1277737 = (function() { 
var mail_to1277737__delegate = function (e_mail,p__1277738){
var vec__1277740 = p__1277738;
var content = cljs.core.nth.call(null,vec__1277740,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to1277737 = function (e_mail,var_args){
var p__1277738 = null;
if (arguments.length > 1) {
  p__1277738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to1277737__delegate.call(this,e_mail,p__1277738);};
mail_to1277737.cljs$lang$maxFixedArity = 1;
mail_to1277737.cljs$lang$applyTo = (function (arglist__1277741){
var e_mail = cljs.core.first(arglist__1277741);
var p__1277738 = cljs.core.rest(arglist__1277741);
return mail_to1277737__delegate(e_mail,p__1277738);
});
mail_to1277737.cljs$core$IFn$_invoke$arity$variadic = mail_to1277737__delegate;
return mail_to1277737;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to1277737);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list1277742 = (function unordered_list1277742(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__1277747(s__1277748){
return (new cljs.core.LazySeq(null,(function (){
var s__1277748__$1 = s__1277748;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1277748__$1);
if(temp__4126__auto__){
var s__1277748__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1277748__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1277748__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1277750 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1277749 = (0);
while(true){
if((i__1277749 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1277749);
cljs.core.chunk_append.call(null,b__1277750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1277751 = (i__1277749 + (1));
i__1277749 = G__1277751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277750),iter__1277747.call(null,cljs.core.chunk_rest.call(null,s__1277748__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277750),null);
}
} else {
var x = cljs.core.first.call(null,s__1277748__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1277747.call(null,cljs.core.rest.call(null,s__1277748__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list1277742);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list1277752 = (function ordered_list1277752(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__1277757(s__1277758){
return (new cljs.core.LazySeq(null,(function (){
var s__1277758__$1 = s__1277758;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1277758__$1);
if(temp__4126__auto__){
var s__1277758__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1277758__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1277758__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1277760 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1277759 = (0);
while(true){
if((i__1277759 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1277759);
cljs.core.chunk_append.call(null,b__1277760,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1277761 = (i__1277759 + (1));
i__1277759 = G__1277761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277760),iter__1277757.call(null,cljs.core.chunk_rest.call(null,s__1277758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277760),null);
}
} else {
var x = cljs.core.first.call(null,s__1277758__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1277757.call(null,cljs.core.rest.call(null,s__1277758__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list1277752);
/**
* Create an image element.
*/
sablono.core.image1277762 = (function() {
var image1277762 = null;
var image1277762__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image1277762__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image1277762 = function(src,alt){
switch(arguments.length){
case 1:
return image1277762__1.call(this,src);
case 2:
return image1277762__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image1277762.cljs$core$IFn$_invoke$arity$1 = image1277762__1;
image1277762.cljs$core$IFn$_invoke$arity$2 = image1277762__2;
return image1277762;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image1277762);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__1277763_SHARP_,p2__1277764_SHARP_){
return [cljs.core.str(p1__1277763_SHARP_),cljs.core.str("["),cljs.core.str(p2__1277764_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__1277765_SHARP_,p2__1277766_SHARP_){
return [cljs.core.str(p1__1277765_SHARP_),cljs.core.str("-"),cljs.core.str(p2__1277766_SHARP_)].join('');
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
sablono.core.color_field1277767 = (function() {
var color_field1277767 = null;
var color_field1277767__1 = (function (name__9770__auto__){
return color_field1277767.call(null,name__9770__auto__,null);
});
var color_field1277767__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field1277767 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field1277767__1.call(this,name__9770__auto__);
case 2:
return color_field1277767__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field1277767.cljs$core$IFn$_invoke$arity$1 = color_field1277767__1;
color_field1277767.cljs$core$IFn$_invoke$arity$2 = color_field1277767__2;
return color_field1277767;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field1277767);

/**
* Creates a date input field.
*/
sablono.core.date_field1277768 = (function() {
var date_field1277768 = null;
var date_field1277768__1 = (function (name__9770__auto__){
return date_field1277768.call(null,name__9770__auto__,null);
});
var date_field1277768__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field1277768 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field1277768__1.call(this,name__9770__auto__);
case 2:
return date_field1277768__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field1277768.cljs$core$IFn$_invoke$arity$1 = date_field1277768__1;
date_field1277768.cljs$core$IFn$_invoke$arity$2 = date_field1277768__2;
return date_field1277768;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field1277768);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field1277769 = (function() {
var datetime_field1277769 = null;
var datetime_field1277769__1 = (function (name__9770__auto__){
return datetime_field1277769.call(null,name__9770__auto__,null);
});
var datetime_field1277769__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field1277769 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field1277769__1.call(this,name__9770__auto__);
case 2:
return datetime_field1277769__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field1277769.cljs$core$IFn$_invoke$arity$1 = datetime_field1277769__1;
datetime_field1277769.cljs$core$IFn$_invoke$arity$2 = datetime_field1277769__2;
return datetime_field1277769;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field1277769);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field1277770 = (function() {
var datetime_local_field1277770 = null;
var datetime_local_field1277770__1 = (function (name__9770__auto__){
return datetime_local_field1277770.call(null,name__9770__auto__,null);
});
var datetime_local_field1277770__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field1277770 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field1277770__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field1277770__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field1277770.cljs$core$IFn$_invoke$arity$1 = datetime_local_field1277770__1;
datetime_local_field1277770.cljs$core$IFn$_invoke$arity$2 = datetime_local_field1277770__2;
return datetime_local_field1277770;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field1277770);

/**
* Creates a email input field.
*/
sablono.core.email_field1277771 = (function() {
var email_field1277771 = null;
var email_field1277771__1 = (function (name__9770__auto__){
return email_field1277771.call(null,name__9770__auto__,null);
});
var email_field1277771__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field1277771 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field1277771__1.call(this,name__9770__auto__);
case 2:
return email_field1277771__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field1277771.cljs$core$IFn$_invoke$arity$1 = email_field1277771__1;
email_field1277771.cljs$core$IFn$_invoke$arity$2 = email_field1277771__2;
return email_field1277771;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field1277771);

/**
* Creates a file input field.
*/
sablono.core.file_field1277772 = (function() {
var file_field1277772 = null;
var file_field1277772__1 = (function (name__9770__auto__){
return file_field1277772.call(null,name__9770__auto__,null);
});
var file_field1277772__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field1277772 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field1277772__1.call(this,name__9770__auto__);
case 2:
return file_field1277772__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field1277772.cljs$core$IFn$_invoke$arity$1 = file_field1277772__1;
file_field1277772.cljs$core$IFn$_invoke$arity$2 = file_field1277772__2;
return file_field1277772;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field1277772);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field1277773 = (function() {
var hidden_field1277773 = null;
var hidden_field1277773__1 = (function (name__9770__auto__){
return hidden_field1277773.call(null,name__9770__auto__,null);
});
var hidden_field1277773__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field1277773 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field1277773__1.call(this,name__9770__auto__);
case 2:
return hidden_field1277773__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field1277773.cljs$core$IFn$_invoke$arity$1 = hidden_field1277773__1;
hidden_field1277773.cljs$core$IFn$_invoke$arity$2 = hidden_field1277773__2;
return hidden_field1277773;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field1277773);

/**
* Creates a month input field.
*/
sablono.core.month_field1277774 = (function() {
var month_field1277774 = null;
var month_field1277774__1 = (function (name__9770__auto__){
return month_field1277774.call(null,name__9770__auto__,null);
});
var month_field1277774__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field1277774 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field1277774__1.call(this,name__9770__auto__);
case 2:
return month_field1277774__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field1277774.cljs$core$IFn$_invoke$arity$1 = month_field1277774__1;
month_field1277774.cljs$core$IFn$_invoke$arity$2 = month_field1277774__2;
return month_field1277774;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field1277774);

/**
* Creates a number input field.
*/
sablono.core.number_field1277775 = (function() {
var number_field1277775 = null;
var number_field1277775__1 = (function (name__9770__auto__){
return number_field1277775.call(null,name__9770__auto__,null);
});
var number_field1277775__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field1277775 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field1277775__1.call(this,name__9770__auto__);
case 2:
return number_field1277775__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field1277775.cljs$core$IFn$_invoke$arity$1 = number_field1277775__1;
number_field1277775.cljs$core$IFn$_invoke$arity$2 = number_field1277775__2;
return number_field1277775;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field1277775);

/**
* Creates a password input field.
*/
sablono.core.password_field1277776 = (function() {
var password_field1277776 = null;
var password_field1277776__1 = (function (name__9770__auto__){
return password_field1277776.call(null,name__9770__auto__,null);
});
var password_field1277776__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field1277776 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field1277776__1.call(this,name__9770__auto__);
case 2:
return password_field1277776__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field1277776.cljs$core$IFn$_invoke$arity$1 = password_field1277776__1;
password_field1277776.cljs$core$IFn$_invoke$arity$2 = password_field1277776__2;
return password_field1277776;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field1277776);

/**
* Creates a range input field.
*/
sablono.core.range_field1277777 = (function() {
var range_field1277777 = null;
var range_field1277777__1 = (function (name__9770__auto__){
return range_field1277777.call(null,name__9770__auto__,null);
});
var range_field1277777__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field1277777 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field1277777__1.call(this,name__9770__auto__);
case 2:
return range_field1277777__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field1277777.cljs$core$IFn$_invoke$arity$1 = range_field1277777__1;
range_field1277777.cljs$core$IFn$_invoke$arity$2 = range_field1277777__2;
return range_field1277777;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field1277777);

/**
* Creates a search input field.
*/
sablono.core.search_field1277778 = (function() {
var search_field1277778 = null;
var search_field1277778__1 = (function (name__9770__auto__){
return search_field1277778.call(null,name__9770__auto__,null);
});
var search_field1277778__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field1277778 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field1277778__1.call(this,name__9770__auto__);
case 2:
return search_field1277778__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field1277778.cljs$core$IFn$_invoke$arity$1 = search_field1277778__1;
search_field1277778.cljs$core$IFn$_invoke$arity$2 = search_field1277778__2;
return search_field1277778;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field1277778);

/**
* Creates a tel input field.
*/
sablono.core.tel_field1277779 = (function() {
var tel_field1277779 = null;
var tel_field1277779__1 = (function (name__9770__auto__){
return tel_field1277779.call(null,name__9770__auto__,null);
});
var tel_field1277779__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field1277779 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field1277779__1.call(this,name__9770__auto__);
case 2:
return tel_field1277779__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field1277779.cljs$core$IFn$_invoke$arity$1 = tel_field1277779__1;
tel_field1277779.cljs$core$IFn$_invoke$arity$2 = tel_field1277779__2;
return tel_field1277779;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field1277779);

/**
* Creates a text input field.
*/
sablono.core.text_field1277780 = (function() {
var text_field1277780 = null;
var text_field1277780__1 = (function (name__9770__auto__){
return text_field1277780.call(null,name__9770__auto__,null);
});
var text_field1277780__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field1277780 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field1277780__1.call(this,name__9770__auto__);
case 2:
return text_field1277780__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field1277780.cljs$core$IFn$_invoke$arity$1 = text_field1277780__1;
text_field1277780.cljs$core$IFn$_invoke$arity$2 = text_field1277780__2;
return text_field1277780;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field1277780);

/**
* Creates a time input field.
*/
sablono.core.time_field1277781 = (function() {
var time_field1277781 = null;
var time_field1277781__1 = (function (name__9770__auto__){
return time_field1277781.call(null,name__9770__auto__,null);
});
var time_field1277781__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field1277781 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field1277781__1.call(this,name__9770__auto__);
case 2:
return time_field1277781__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field1277781.cljs$core$IFn$_invoke$arity$1 = time_field1277781__1;
time_field1277781.cljs$core$IFn$_invoke$arity$2 = time_field1277781__2;
return time_field1277781;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field1277781);

/**
* Creates a url input field.
*/
sablono.core.url_field1277782 = (function() {
var url_field1277782 = null;
var url_field1277782__1 = (function (name__9770__auto__){
return url_field1277782.call(null,name__9770__auto__,null);
});
var url_field1277782__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field1277782 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field1277782__1.call(this,name__9770__auto__);
case 2:
return url_field1277782__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field1277782.cljs$core$IFn$_invoke$arity$1 = url_field1277782__1;
url_field1277782.cljs$core$IFn$_invoke$arity$2 = url_field1277782__2;
return url_field1277782;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field1277782);

/**
* Creates a week input field.
*/
sablono.core.week_field1277783 = (function() {
var week_field1277783 = null;
var week_field1277783__1 = (function (name__9770__auto__){
return week_field1277783.call(null,name__9770__auto__,null);
});
var week_field1277783__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field1277783 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field1277783__1.call(this,name__9770__auto__);
case 2:
return week_field1277783__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field1277783.cljs$core$IFn$_invoke$arity$1 = week_field1277783__1;
week_field1277783.cljs$core$IFn$_invoke$arity$2 = week_field1277783__2;
return week_field1277783;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field1277783);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box1277784 = (function() {
var check_box1277784 = null;
var check_box1277784__1 = (function (name){
return check_box1277784.call(null,name,null);
});
var check_box1277784__2 = (function (name,checked_QMARK_){
return check_box1277784.call(null,name,checked_QMARK_,"true");
});
var check_box1277784__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box1277784 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box1277784__1.call(this,name);
case 2:
return check_box1277784__2.call(this,name,checked_QMARK_);
case 3:
return check_box1277784__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box1277784.cljs$core$IFn$_invoke$arity$1 = check_box1277784__1;
check_box1277784.cljs$core$IFn$_invoke$arity$2 = check_box1277784__2;
check_box1277784.cljs$core$IFn$_invoke$arity$3 = check_box1277784__3;
return check_box1277784;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box1277784);
/**
* Creates a radio button.
*/
sablono.core.radio_button1277785 = (function() {
var radio_button1277785 = null;
var radio_button1277785__1 = (function (group){
return radio_button1277785.call(null,group,null);
});
var radio_button1277785__2 = (function (group,checked_QMARK_){
return radio_button1277785.call(null,group,checked_QMARK_,"true");
});
var radio_button1277785__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button1277785 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button1277785__1.call(this,group);
case 2:
return radio_button1277785__2.call(this,group,checked_QMARK_);
case 3:
return radio_button1277785__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button1277785.cljs$core$IFn$_invoke$arity$1 = radio_button1277785__1;
radio_button1277785.cljs$core$IFn$_invoke$arity$2 = radio_button1277785__2;
radio_button1277785.cljs$core$IFn$_invoke$arity$3 = radio_button1277785__3;
return radio_button1277785;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button1277785);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options1277786 = (function() {
var select_options1277786 = null;
var select_options1277786__1 = (function (coll){
return select_options1277786.call(null,coll,null);
});
var select_options1277786__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__1277795(s__1277796){
return (new cljs.core.LazySeq(null,(function (){
var s__1277796__$1 = s__1277796;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1277796__$1);
if(temp__4126__auto__){
var s__1277796__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1277796__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1277796__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1277798 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1277797 = (0);
while(true){
if((i__1277797 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1277797);
cljs.core.chunk_append.call(null,b__1277798,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1277801 = x;
var text = cljs.core.nth.call(null,vec__1277801,(0),null);
var val = cljs.core.nth.call(null,vec__1277801,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1277801,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1277786.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__1277803 = (i__1277797 + (1));
i__1277797 = G__1277803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277798),iter__1277795.call(null,cljs.core.chunk_rest.call(null,s__1277796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1277798),null);
}
} else {
var x = cljs.core.first.call(null,s__1277796__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1277802 = x;
var text = cljs.core.nth.call(null,vec__1277802,(0),null);
var val = cljs.core.nth.call(null,vec__1277802,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1277802,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1277786.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__1277795.call(null,cljs.core.rest.call(null,s__1277796__$2)));
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
select_options1277786 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options1277786__1.call(this,coll);
case 2:
return select_options1277786__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options1277786.cljs$core$IFn$_invoke$arity$1 = select_options1277786__1;
select_options1277786.cljs$core$IFn$_invoke$arity$2 = select_options1277786__2;
return select_options1277786;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options1277786);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down1277804 = (function() {
var drop_down1277804 = null;
var drop_down1277804__2 = (function (name,options){
return drop_down1277804.call(null,name,options,null);
});
var drop_down1277804__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down1277804 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down1277804__2.call(this,name,options);
case 3:
return drop_down1277804__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down1277804.cljs$core$IFn$_invoke$arity$2 = drop_down1277804__2;
drop_down1277804.cljs$core$IFn$_invoke$arity$3 = drop_down1277804__3;
return drop_down1277804;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down1277804);
/**
* Creates a text area element.
*/
sablono.core.text_area1277805 = (function() {
var text_area1277805 = null;
var text_area1277805__1 = (function (name){
return text_area1277805.call(null,name,null);
});
var text_area1277805__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area1277805 = function(name,value){
switch(arguments.length){
case 1:
return text_area1277805__1.call(this,name);
case 2:
return text_area1277805__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area1277805.cljs$core$IFn$_invoke$arity$1 = text_area1277805__1;
text_area1277805.cljs$core$IFn$_invoke$arity$2 = text_area1277805__2;
return text_area1277805;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area1277805);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label1277806 = (function label1277806(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label1277806);
/**
* Creates a submit button.
*/
sablono.core.submit_button1277807 = (function submit_button1277807(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button1277807);
/**
* Creates a form reset button.
*/
sablono.core.reset_button1277808 = (function reset_button1277808(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button1277808);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to1277809 = (function() { 
var form_to1277809__delegate = function (p__1277810,body){
var vec__1277812 = p__1277810;
var method = cljs.core.nth.call(null,vec__1277812,(0),null);
var action = cljs.core.nth.call(null,vec__1277812,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to1277809 = function (p__1277810,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to1277809__delegate.call(this,p__1277810,body);};
form_to1277809.cljs$lang$maxFixedArity = 1;
form_to1277809.cljs$lang$applyTo = (function (arglist__1277813){
var p__1277810 = cljs.core.first(arglist__1277813);
var body = cljs.core.rest(arglist__1277813);
return form_to1277809__delegate(p__1277810,body);
});
form_to1277809.cljs$core$IFn$_invoke$arity$variadic = form_to1277809__delegate;
return form_to1277809;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to1277809);

//# sourceMappingURL=core.js.map