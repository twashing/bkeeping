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
var G__207819__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__207818 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__207818,(0),null);
var body = cljs.core.nthnext.call(null,vec__207818,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__207819 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__207819__delegate.call(this,args);};
G__207819.cljs$lang$maxFixedArity = 0;
G__207819.cljs$lang$applyTo = (function (arglist__207820){
var args = cljs.core.seq(arglist__207820);
return G__207819__delegate(args);
});
G__207819.cljs$core$IFn$_invoke$arity$variadic = G__207819__delegate;
return G__207819;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__207825(s__207826){
return (new cljs.core.LazySeq(null,(function (){
var s__207826__$1 = s__207826;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__207826__$1);
if(temp__4126__auto__){
var s__207826__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207826__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__207826__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__207828 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__207827 = (0);
while(true){
if((i__207827 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__207827);
cljs.core.chunk_append.call(null,b__207828,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__207829 = (i__207827 + (1));
i__207827 = G__207829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207828),iter__207825.call(null,cljs.core.chunk_rest.call(null,s__207826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207828),null);
}
} else {
var args = cljs.core.first.call(null,s__207826__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__207825.call(null,cljs.core.rest.call(null,s__207826__$2)));
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
var iter__4378__auto__ = (function iter__207834(s__207835){
return (new cljs.core.LazySeq(null,(function (){
var s__207835__$1 = s__207835;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__207835__$1);
if(temp__4126__auto__){
var s__207835__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207835__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__207835__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__207837 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__207836 = (0);
while(true){
if((i__207836 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__207836);
cljs.core.chunk_append.call(null,b__207837,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__207838 = (i__207836 + (1));
i__207836 = G__207838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207837),iter__207834.call(null,cljs.core.chunk_rest.call(null,s__207835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207837),null);
}
} else {
var style = cljs.core.first.call(null,s__207835__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__207834.call(null,cljs.core.rest.call(null,s__207835__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__207839){
var styles = cljs.core.seq(arglist__207839);
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
sablono.core.link_to207840 = (function() { 
var link_to207840__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to207840 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to207840__delegate.call(this,url,content);};
link_to207840.cljs$lang$maxFixedArity = 1;
link_to207840.cljs$lang$applyTo = (function (arglist__207841){
var url = cljs.core.first(arglist__207841);
var content = cljs.core.rest(arglist__207841);
return link_to207840__delegate(url,content);
});
link_to207840.cljs$core$IFn$_invoke$arity$variadic = link_to207840__delegate;
return link_to207840;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to207840);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to207842 = (function() { 
var mail_to207842__delegate = function (e_mail,p__207843){
var vec__207845 = p__207843;
var content = cljs.core.nth.call(null,vec__207845,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to207842 = function (e_mail,var_args){
var p__207843 = null;
if (arguments.length > 1) {
  p__207843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to207842__delegate.call(this,e_mail,p__207843);};
mail_to207842.cljs$lang$maxFixedArity = 1;
mail_to207842.cljs$lang$applyTo = (function (arglist__207846){
var e_mail = cljs.core.first(arglist__207846);
var p__207843 = cljs.core.rest(arglist__207846);
return mail_to207842__delegate(e_mail,p__207843);
});
mail_to207842.cljs$core$IFn$_invoke$arity$variadic = mail_to207842__delegate;
return mail_to207842;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to207842);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list207847 = (function unordered_list207847(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__207852(s__207853){
return (new cljs.core.LazySeq(null,(function (){
var s__207853__$1 = s__207853;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__207853__$1);
if(temp__4126__auto__){
var s__207853__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207853__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__207853__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__207855 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__207854 = (0);
while(true){
if((i__207854 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__207854);
cljs.core.chunk_append.call(null,b__207855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__207856 = (i__207854 + (1));
i__207854 = G__207856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207855),iter__207852.call(null,cljs.core.chunk_rest.call(null,s__207853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207855),null);
}
} else {
var x = cljs.core.first.call(null,s__207853__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__207852.call(null,cljs.core.rest.call(null,s__207853__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list207847);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list207857 = (function ordered_list207857(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__207862(s__207863){
return (new cljs.core.LazySeq(null,(function (){
var s__207863__$1 = s__207863;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__207863__$1);
if(temp__4126__auto__){
var s__207863__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207863__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__207863__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__207865 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__207864 = (0);
while(true){
if((i__207864 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__207864);
cljs.core.chunk_append.call(null,b__207865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__207866 = (i__207864 + (1));
i__207864 = G__207866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207865),iter__207862.call(null,cljs.core.chunk_rest.call(null,s__207863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207865),null);
}
} else {
var x = cljs.core.first.call(null,s__207863__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__207862.call(null,cljs.core.rest.call(null,s__207863__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list207857);
/**
* Create an image element.
*/
sablono.core.image207867 = (function() {
var image207867 = null;
var image207867__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image207867__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image207867 = function(src,alt){
switch(arguments.length){
case 1:
return image207867__1.call(this,src);
case 2:
return image207867__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image207867.cljs$core$IFn$_invoke$arity$1 = image207867__1;
image207867.cljs$core$IFn$_invoke$arity$2 = image207867__2;
return image207867;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image207867);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__207868_SHARP_,p2__207869_SHARP_){
return [cljs.core.str(p1__207868_SHARP_),cljs.core.str("["),cljs.core.str(p2__207869_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__207870_SHARP_,p2__207871_SHARP_){
return [cljs.core.str(p1__207870_SHARP_),cljs.core.str("-"),cljs.core.str(p2__207871_SHARP_)].join('');
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
sablono.core.color_field207872 = (function() {
var color_field207872 = null;
var color_field207872__1 = (function (name__9770__auto__){
return color_field207872.call(null,name__9770__auto__,null);
});
var color_field207872__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field207872 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field207872__1.call(this,name__9770__auto__);
case 2:
return color_field207872__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field207872.cljs$core$IFn$_invoke$arity$1 = color_field207872__1;
color_field207872.cljs$core$IFn$_invoke$arity$2 = color_field207872__2;
return color_field207872;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field207872);

/**
* Creates a date input field.
*/
sablono.core.date_field207873 = (function() {
var date_field207873 = null;
var date_field207873__1 = (function (name__9770__auto__){
return date_field207873.call(null,name__9770__auto__,null);
});
var date_field207873__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field207873 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field207873__1.call(this,name__9770__auto__);
case 2:
return date_field207873__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field207873.cljs$core$IFn$_invoke$arity$1 = date_field207873__1;
date_field207873.cljs$core$IFn$_invoke$arity$2 = date_field207873__2;
return date_field207873;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field207873);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field207874 = (function() {
var datetime_field207874 = null;
var datetime_field207874__1 = (function (name__9770__auto__){
return datetime_field207874.call(null,name__9770__auto__,null);
});
var datetime_field207874__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field207874 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field207874__1.call(this,name__9770__auto__);
case 2:
return datetime_field207874__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field207874.cljs$core$IFn$_invoke$arity$1 = datetime_field207874__1;
datetime_field207874.cljs$core$IFn$_invoke$arity$2 = datetime_field207874__2;
return datetime_field207874;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field207874);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field207875 = (function() {
var datetime_local_field207875 = null;
var datetime_local_field207875__1 = (function (name__9770__auto__){
return datetime_local_field207875.call(null,name__9770__auto__,null);
});
var datetime_local_field207875__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field207875 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field207875__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field207875__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field207875.cljs$core$IFn$_invoke$arity$1 = datetime_local_field207875__1;
datetime_local_field207875.cljs$core$IFn$_invoke$arity$2 = datetime_local_field207875__2;
return datetime_local_field207875;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field207875);

/**
* Creates a email input field.
*/
sablono.core.email_field207876 = (function() {
var email_field207876 = null;
var email_field207876__1 = (function (name__9770__auto__){
return email_field207876.call(null,name__9770__auto__,null);
});
var email_field207876__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field207876 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field207876__1.call(this,name__9770__auto__);
case 2:
return email_field207876__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field207876.cljs$core$IFn$_invoke$arity$1 = email_field207876__1;
email_field207876.cljs$core$IFn$_invoke$arity$2 = email_field207876__2;
return email_field207876;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field207876);

/**
* Creates a file input field.
*/
sablono.core.file_field207877 = (function() {
var file_field207877 = null;
var file_field207877__1 = (function (name__9770__auto__){
return file_field207877.call(null,name__9770__auto__,null);
});
var file_field207877__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field207877 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field207877__1.call(this,name__9770__auto__);
case 2:
return file_field207877__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field207877.cljs$core$IFn$_invoke$arity$1 = file_field207877__1;
file_field207877.cljs$core$IFn$_invoke$arity$2 = file_field207877__2;
return file_field207877;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field207877);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field207878 = (function() {
var hidden_field207878 = null;
var hidden_field207878__1 = (function (name__9770__auto__){
return hidden_field207878.call(null,name__9770__auto__,null);
});
var hidden_field207878__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field207878 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field207878__1.call(this,name__9770__auto__);
case 2:
return hidden_field207878__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field207878.cljs$core$IFn$_invoke$arity$1 = hidden_field207878__1;
hidden_field207878.cljs$core$IFn$_invoke$arity$2 = hidden_field207878__2;
return hidden_field207878;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field207878);

/**
* Creates a month input field.
*/
sablono.core.month_field207879 = (function() {
var month_field207879 = null;
var month_field207879__1 = (function (name__9770__auto__){
return month_field207879.call(null,name__9770__auto__,null);
});
var month_field207879__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field207879 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field207879__1.call(this,name__9770__auto__);
case 2:
return month_field207879__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field207879.cljs$core$IFn$_invoke$arity$1 = month_field207879__1;
month_field207879.cljs$core$IFn$_invoke$arity$2 = month_field207879__2;
return month_field207879;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field207879);

/**
* Creates a number input field.
*/
sablono.core.number_field207880 = (function() {
var number_field207880 = null;
var number_field207880__1 = (function (name__9770__auto__){
return number_field207880.call(null,name__9770__auto__,null);
});
var number_field207880__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field207880 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field207880__1.call(this,name__9770__auto__);
case 2:
return number_field207880__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field207880.cljs$core$IFn$_invoke$arity$1 = number_field207880__1;
number_field207880.cljs$core$IFn$_invoke$arity$2 = number_field207880__2;
return number_field207880;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field207880);

/**
* Creates a password input field.
*/
sablono.core.password_field207881 = (function() {
var password_field207881 = null;
var password_field207881__1 = (function (name__9770__auto__){
return password_field207881.call(null,name__9770__auto__,null);
});
var password_field207881__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field207881 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field207881__1.call(this,name__9770__auto__);
case 2:
return password_field207881__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field207881.cljs$core$IFn$_invoke$arity$1 = password_field207881__1;
password_field207881.cljs$core$IFn$_invoke$arity$2 = password_field207881__2;
return password_field207881;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field207881);

/**
* Creates a range input field.
*/
sablono.core.range_field207882 = (function() {
var range_field207882 = null;
var range_field207882__1 = (function (name__9770__auto__){
return range_field207882.call(null,name__9770__auto__,null);
});
var range_field207882__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field207882 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field207882__1.call(this,name__9770__auto__);
case 2:
return range_field207882__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field207882.cljs$core$IFn$_invoke$arity$1 = range_field207882__1;
range_field207882.cljs$core$IFn$_invoke$arity$2 = range_field207882__2;
return range_field207882;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field207882);

/**
* Creates a search input field.
*/
sablono.core.search_field207883 = (function() {
var search_field207883 = null;
var search_field207883__1 = (function (name__9770__auto__){
return search_field207883.call(null,name__9770__auto__,null);
});
var search_field207883__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field207883 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field207883__1.call(this,name__9770__auto__);
case 2:
return search_field207883__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field207883.cljs$core$IFn$_invoke$arity$1 = search_field207883__1;
search_field207883.cljs$core$IFn$_invoke$arity$2 = search_field207883__2;
return search_field207883;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field207883);

/**
* Creates a tel input field.
*/
sablono.core.tel_field207884 = (function() {
var tel_field207884 = null;
var tel_field207884__1 = (function (name__9770__auto__){
return tel_field207884.call(null,name__9770__auto__,null);
});
var tel_field207884__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field207884 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field207884__1.call(this,name__9770__auto__);
case 2:
return tel_field207884__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field207884.cljs$core$IFn$_invoke$arity$1 = tel_field207884__1;
tel_field207884.cljs$core$IFn$_invoke$arity$2 = tel_field207884__2;
return tel_field207884;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field207884);

/**
* Creates a text input field.
*/
sablono.core.text_field207885 = (function() {
var text_field207885 = null;
var text_field207885__1 = (function (name__9770__auto__){
return text_field207885.call(null,name__9770__auto__,null);
});
var text_field207885__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field207885 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field207885__1.call(this,name__9770__auto__);
case 2:
return text_field207885__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field207885.cljs$core$IFn$_invoke$arity$1 = text_field207885__1;
text_field207885.cljs$core$IFn$_invoke$arity$2 = text_field207885__2;
return text_field207885;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field207885);

/**
* Creates a time input field.
*/
sablono.core.time_field207886 = (function() {
var time_field207886 = null;
var time_field207886__1 = (function (name__9770__auto__){
return time_field207886.call(null,name__9770__auto__,null);
});
var time_field207886__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field207886 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field207886__1.call(this,name__9770__auto__);
case 2:
return time_field207886__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field207886.cljs$core$IFn$_invoke$arity$1 = time_field207886__1;
time_field207886.cljs$core$IFn$_invoke$arity$2 = time_field207886__2;
return time_field207886;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field207886);

/**
* Creates a url input field.
*/
sablono.core.url_field207887 = (function() {
var url_field207887 = null;
var url_field207887__1 = (function (name__9770__auto__){
return url_field207887.call(null,name__9770__auto__,null);
});
var url_field207887__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field207887 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field207887__1.call(this,name__9770__auto__);
case 2:
return url_field207887__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field207887.cljs$core$IFn$_invoke$arity$1 = url_field207887__1;
url_field207887.cljs$core$IFn$_invoke$arity$2 = url_field207887__2;
return url_field207887;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field207887);

/**
* Creates a week input field.
*/
sablono.core.week_field207888 = (function() {
var week_field207888 = null;
var week_field207888__1 = (function (name__9770__auto__){
return week_field207888.call(null,name__9770__auto__,null);
});
var week_field207888__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field207888 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field207888__1.call(this,name__9770__auto__);
case 2:
return week_field207888__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field207888.cljs$core$IFn$_invoke$arity$1 = week_field207888__1;
week_field207888.cljs$core$IFn$_invoke$arity$2 = week_field207888__2;
return week_field207888;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field207888);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box207889 = (function() {
var check_box207889 = null;
var check_box207889__1 = (function (name){
return check_box207889.call(null,name,null);
});
var check_box207889__2 = (function (name,checked_QMARK_){
return check_box207889.call(null,name,checked_QMARK_,"true");
});
var check_box207889__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box207889 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box207889__1.call(this,name);
case 2:
return check_box207889__2.call(this,name,checked_QMARK_);
case 3:
return check_box207889__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box207889.cljs$core$IFn$_invoke$arity$1 = check_box207889__1;
check_box207889.cljs$core$IFn$_invoke$arity$2 = check_box207889__2;
check_box207889.cljs$core$IFn$_invoke$arity$3 = check_box207889__3;
return check_box207889;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box207889);
/**
* Creates a radio button.
*/
sablono.core.radio_button207890 = (function() {
var radio_button207890 = null;
var radio_button207890__1 = (function (group){
return radio_button207890.call(null,group,null);
});
var radio_button207890__2 = (function (group,checked_QMARK_){
return radio_button207890.call(null,group,checked_QMARK_,"true");
});
var radio_button207890__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button207890 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button207890__1.call(this,group);
case 2:
return radio_button207890__2.call(this,group,checked_QMARK_);
case 3:
return radio_button207890__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button207890.cljs$core$IFn$_invoke$arity$1 = radio_button207890__1;
radio_button207890.cljs$core$IFn$_invoke$arity$2 = radio_button207890__2;
radio_button207890.cljs$core$IFn$_invoke$arity$3 = radio_button207890__3;
return radio_button207890;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button207890);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options207891 = (function() {
var select_options207891 = null;
var select_options207891__1 = (function (coll){
return select_options207891.call(null,coll,null);
});
var select_options207891__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__207900(s__207901){
return (new cljs.core.LazySeq(null,(function (){
var s__207901__$1 = s__207901;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__207901__$1);
if(temp__4126__auto__){
var s__207901__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207901__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__207901__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__207903 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__207902 = (0);
while(true){
if((i__207902 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__207902);
cljs.core.chunk_append.call(null,b__207903,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__207906 = x;
var text = cljs.core.nth.call(null,vec__207906,(0),null);
var val = cljs.core.nth.call(null,vec__207906,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__207906,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options207891.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__207908 = (i__207902 + (1));
i__207902 = G__207908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207903),iter__207900.call(null,cljs.core.chunk_rest.call(null,s__207901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207903),null);
}
} else {
var x = cljs.core.first.call(null,s__207901__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__207907 = x;
var text = cljs.core.nth.call(null,vec__207907,(0),null);
var val = cljs.core.nth.call(null,vec__207907,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__207907,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options207891.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__207900.call(null,cljs.core.rest.call(null,s__207901__$2)));
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
select_options207891 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options207891__1.call(this,coll);
case 2:
return select_options207891__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options207891.cljs$core$IFn$_invoke$arity$1 = select_options207891__1;
select_options207891.cljs$core$IFn$_invoke$arity$2 = select_options207891__2;
return select_options207891;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options207891);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down207909 = (function() {
var drop_down207909 = null;
var drop_down207909__2 = (function (name,options){
return drop_down207909.call(null,name,options,null);
});
var drop_down207909__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down207909 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down207909__2.call(this,name,options);
case 3:
return drop_down207909__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down207909.cljs$core$IFn$_invoke$arity$2 = drop_down207909__2;
drop_down207909.cljs$core$IFn$_invoke$arity$3 = drop_down207909__3;
return drop_down207909;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down207909);
/**
* Creates a text area element.
*/
sablono.core.text_area207910 = (function() {
var text_area207910 = null;
var text_area207910__1 = (function (name){
return text_area207910.call(null,name,null);
});
var text_area207910__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area207910 = function(name,value){
switch(arguments.length){
case 1:
return text_area207910__1.call(this,name);
case 2:
return text_area207910__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area207910.cljs$core$IFn$_invoke$arity$1 = text_area207910__1;
text_area207910.cljs$core$IFn$_invoke$arity$2 = text_area207910__2;
return text_area207910;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area207910);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label207911 = (function label207911(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label207911);
/**
* Creates a submit button.
*/
sablono.core.submit_button207912 = (function submit_button207912(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button207912);
/**
* Creates a form reset button.
*/
sablono.core.reset_button207913 = (function reset_button207913(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button207913);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to207914 = (function() { 
var form_to207914__delegate = function (p__207915,body){
var vec__207917 = p__207915;
var method = cljs.core.nth.call(null,vec__207917,(0),null);
var action = cljs.core.nth.call(null,vec__207917,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to207914 = function (p__207915,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to207914__delegate.call(this,p__207915,body);};
form_to207914.cljs$lang$maxFixedArity = 1;
form_to207914.cljs$lang$applyTo = (function (arglist__207918){
var p__207915 = cljs.core.first(arglist__207918);
var body = cljs.core.rest(arglist__207918);
return form_to207914__delegate(p__207915,body);
});
form_to207914.cljs$core$IFn$_invoke$arity$variadic = form_to207914__delegate;
return form_to207914;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to207914);

//# sourceMappingURL=core.js.map