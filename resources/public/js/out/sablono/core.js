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
var G__26110__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26109 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26109,(0),null);
var body = cljs.core.nthnext.call(null,vec__26109,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26110 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26110__delegate.call(this,args);};
G__26110.cljs$lang$maxFixedArity = 0;
G__26110.cljs$lang$applyTo = (function (arglist__26111){
var args = cljs.core.seq(arglist__26111);
return G__26110__delegate(args);
});
G__26110.cljs$core$IFn$_invoke$arity$variadic = G__26110__delegate;
return G__26110;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__26116(s__26117){
return (new cljs.core.LazySeq(null,(function (){
var s__26117__$1 = s__26117;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26117__$1);
if(temp__4126__auto__){
var s__26117__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26117__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26117__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26119 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26118 = (0);
while(true){
if((i__26118 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__26118);
cljs.core.chunk_append.call(null,b__26119,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26120 = (i__26118 + (1));
i__26118 = G__26120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26119),iter__26116.call(null,cljs.core.chunk_rest.call(null,s__26117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26119),null);
}
} else {
var args = cljs.core.first.call(null,s__26117__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26116.call(null,cljs.core.rest.call(null,s__26117__$2)));
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
var iter__4378__auto__ = (function iter__26125(s__26126){
return (new cljs.core.LazySeq(null,(function (){
var s__26126__$1 = s__26126;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26126__$1);
if(temp__4126__auto__){
var s__26126__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26126__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26126__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26128 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26127 = (0);
while(true){
if((i__26127 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__26127);
cljs.core.chunk_append.call(null,b__26128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26129 = (i__26127 + (1));
i__26127 = G__26129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26128),iter__26125.call(null,cljs.core.chunk_rest.call(null,s__26126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26128),null);
}
} else {
var style = cljs.core.first.call(null,s__26126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26125.call(null,cljs.core.rest.call(null,s__26126__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26130){
var styles = cljs.core.seq(arglist__26130);
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
sablono.core.link_to26131 = (function() { 
var link_to26131__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26131 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to26131__delegate.call(this,url,content);};
link_to26131.cljs$lang$maxFixedArity = 1;
link_to26131.cljs$lang$applyTo = (function (arglist__26132){
var url = cljs.core.first(arglist__26132);
var content = cljs.core.rest(arglist__26132);
return link_to26131__delegate(url,content);
});
link_to26131.cljs$core$IFn$_invoke$arity$variadic = link_to26131__delegate;
return link_to26131;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26131);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26133 = (function() { 
var mail_to26133__delegate = function (e_mail,p__26134){
var vec__26136 = p__26134;
var content = cljs.core.nth.call(null,vec__26136,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to26133 = function (e_mail,var_args){
var p__26134 = null;
if (arguments.length > 1) {
  p__26134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to26133__delegate.call(this,e_mail,p__26134);};
mail_to26133.cljs$lang$maxFixedArity = 1;
mail_to26133.cljs$lang$applyTo = (function (arglist__26137){
var e_mail = cljs.core.first(arglist__26137);
var p__26134 = cljs.core.rest(arglist__26137);
return mail_to26133__delegate(e_mail,p__26134);
});
mail_to26133.cljs$core$IFn$_invoke$arity$variadic = mail_to26133__delegate;
return mail_to26133;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26133);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26138 = (function unordered_list26138(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__26143(s__26144){
return (new cljs.core.LazySeq(null,(function (){
var s__26144__$1 = s__26144;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26144__$1);
if(temp__4126__auto__){
var s__26144__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26144__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26144__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26146 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26145 = (0);
while(true){
if((i__26145 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26145);
cljs.core.chunk_append.call(null,b__26146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26147 = (i__26145 + (1));
i__26145 = G__26147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26146),iter__26143.call(null,cljs.core.chunk_rest.call(null,s__26144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26146),null);
}
} else {
var x = cljs.core.first.call(null,s__26144__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26143.call(null,cljs.core.rest.call(null,s__26144__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26138);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26148 = (function ordered_list26148(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__26153(s__26154){
return (new cljs.core.LazySeq(null,(function (){
var s__26154__$1 = s__26154;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26154__$1);
if(temp__4126__auto__){
var s__26154__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26154__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26154__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26156 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26155 = (0);
while(true){
if((i__26155 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26155);
cljs.core.chunk_append.call(null,b__26156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26157 = (i__26155 + (1));
i__26155 = G__26157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26156),iter__26153.call(null,cljs.core.chunk_rest.call(null,s__26154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26156),null);
}
} else {
var x = cljs.core.first.call(null,s__26154__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26153.call(null,cljs.core.rest.call(null,s__26154__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26148);
/**
* Create an image element.
*/
sablono.core.image26158 = (function() {
var image26158 = null;
var image26158__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26158__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26158 = function(src,alt){
switch(arguments.length){
case 1:
return image26158__1.call(this,src);
case 2:
return image26158__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26158.cljs$core$IFn$_invoke$arity$1 = image26158__1;
image26158.cljs$core$IFn$_invoke$arity$2 = image26158__2;
return image26158;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26158);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__26159_SHARP_,p2__26160_SHARP_){
return [cljs.core.str(p1__26159_SHARP_),cljs.core.str("["),cljs.core.str(p2__26160_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__26161_SHARP_,p2__26162_SHARP_){
return [cljs.core.str(p1__26161_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26162_SHARP_)].join('');
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
sablono.core.color_field26163 = (function() {
var color_field26163 = null;
var color_field26163__1 = (function (name__10377__auto__){
return color_field26163.call(null,name__10377__auto__,null);
});
var color_field26163__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field26163 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field26163__1.call(this,name__10377__auto__);
case 2:
return color_field26163__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26163.cljs$core$IFn$_invoke$arity$1 = color_field26163__1;
color_field26163.cljs$core$IFn$_invoke$arity$2 = color_field26163__2;
return color_field26163;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26163);

/**
* Creates a date input field.
*/
sablono.core.date_field26164 = (function() {
var date_field26164 = null;
var date_field26164__1 = (function (name__10377__auto__){
return date_field26164.call(null,name__10377__auto__,null);
});
var date_field26164__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field26164 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field26164__1.call(this,name__10377__auto__);
case 2:
return date_field26164__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26164.cljs$core$IFn$_invoke$arity$1 = date_field26164__1;
date_field26164.cljs$core$IFn$_invoke$arity$2 = date_field26164__2;
return date_field26164;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26164);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26165 = (function() {
var datetime_field26165 = null;
var datetime_field26165__1 = (function (name__10377__auto__){
return datetime_field26165.call(null,name__10377__auto__,null);
});
var datetime_field26165__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field26165 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field26165__1.call(this,name__10377__auto__);
case 2:
return datetime_field26165__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26165.cljs$core$IFn$_invoke$arity$1 = datetime_field26165__1;
datetime_field26165.cljs$core$IFn$_invoke$arity$2 = datetime_field26165__2;
return datetime_field26165;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26165);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26166 = (function() {
var datetime_local_field26166 = null;
var datetime_local_field26166__1 = (function (name__10377__auto__){
return datetime_local_field26166.call(null,name__10377__auto__,null);
});
var datetime_local_field26166__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field26166 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26166__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field26166__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26166.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26166__1;
datetime_local_field26166.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26166__2;
return datetime_local_field26166;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26166);

/**
* Creates a email input field.
*/
sablono.core.email_field26167 = (function() {
var email_field26167 = null;
var email_field26167__1 = (function (name__10377__auto__){
return email_field26167.call(null,name__10377__auto__,null);
});
var email_field26167__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field26167 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field26167__1.call(this,name__10377__auto__);
case 2:
return email_field26167__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26167.cljs$core$IFn$_invoke$arity$1 = email_field26167__1;
email_field26167.cljs$core$IFn$_invoke$arity$2 = email_field26167__2;
return email_field26167;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26167);

/**
* Creates a file input field.
*/
sablono.core.file_field26168 = (function() {
var file_field26168 = null;
var file_field26168__1 = (function (name__10377__auto__){
return file_field26168.call(null,name__10377__auto__,null);
});
var file_field26168__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field26168 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field26168__1.call(this,name__10377__auto__);
case 2:
return file_field26168__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26168.cljs$core$IFn$_invoke$arity$1 = file_field26168__1;
file_field26168.cljs$core$IFn$_invoke$arity$2 = file_field26168__2;
return file_field26168;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26168);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26169 = (function() {
var hidden_field26169 = null;
var hidden_field26169__1 = (function (name__10377__auto__){
return hidden_field26169.call(null,name__10377__auto__,null);
});
var hidden_field26169__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field26169 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field26169__1.call(this,name__10377__auto__);
case 2:
return hidden_field26169__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26169.cljs$core$IFn$_invoke$arity$1 = hidden_field26169__1;
hidden_field26169.cljs$core$IFn$_invoke$arity$2 = hidden_field26169__2;
return hidden_field26169;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26169);

/**
* Creates a month input field.
*/
sablono.core.month_field26170 = (function() {
var month_field26170 = null;
var month_field26170__1 = (function (name__10377__auto__){
return month_field26170.call(null,name__10377__auto__,null);
});
var month_field26170__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field26170 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field26170__1.call(this,name__10377__auto__);
case 2:
return month_field26170__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26170.cljs$core$IFn$_invoke$arity$1 = month_field26170__1;
month_field26170.cljs$core$IFn$_invoke$arity$2 = month_field26170__2;
return month_field26170;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26170);

/**
* Creates a number input field.
*/
sablono.core.number_field26171 = (function() {
var number_field26171 = null;
var number_field26171__1 = (function (name__10377__auto__){
return number_field26171.call(null,name__10377__auto__,null);
});
var number_field26171__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field26171 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field26171__1.call(this,name__10377__auto__);
case 2:
return number_field26171__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26171.cljs$core$IFn$_invoke$arity$1 = number_field26171__1;
number_field26171.cljs$core$IFn$_invoke$arity$2 = number_field26171__2;
return number_field26171;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26171);

/**
* Creates a password input field.
*/
sablono.core.password_field26172 = (function() {
var password_field26172 = null;
var password_field26172__1 = (function (name__10377__auto__){
return password_field26172.call(null,name__10377__auto__,null);
});
var password_field26172__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field26172 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field26172__1.call(this,name__10377__auto__);
case 2:
return password_field26172__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26172.cljs$core$IFn$_invoke$arity$1 = password_field26172__1;
password_field26172.cljs$core$IFn$_invoke$arity$2 = password_field26172__2;
return password_field26172;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26172);

/**
* Creates a range input field.
*/
sablono.core.range_field26173 = (function() {
var range_field26173 = null;
var range_field26173__1 = (function (name__10377__auto__){
return range_field26173.call(null,name__10377__auto__,null);
});
var range_field26173__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field26173 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field26173__1.call(this,name__10377__auto__);
case 2:
return range_field26173__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26173.cljs$core$IFn$_invoke$arity$1 = range_field26173__1;
range_field26173.cljs$core$IFn$_invoke$arity$2 = range_field26173__2;
return range_field26173;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26173);

/**
* Creates a search input field.
*/
sablono.core.search_field26174 = (function() {
var search_field26174 = null;
var search_field26174__1 = (function (name__10377__auto__){
return search_field26174.call(null,name__10377__auto__,null);
});
var search_field26174__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field26174 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field26174__1.call(this,name__10377__auto__);
case 2:
return search_field26174__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26174.cljs$core$IFn$_invoke$arity$1 = search_field26174__1;
search_field26174.cljs$core$IFn$_invoke$arity$2 = search_field26174__2;
return search_field26174;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26174);

/**
* Creates a tel input field.
*/
sablono.core.tel_field26175 = (function() {
var tel_field26175 = null;
var tel_field26175__1 = (function (name__10377__auto__){
return tel_field26175.call(null,name__10377__auto__,null);
});
var tel_field26175__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field26175 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field26175__1.call(this,name__10377__auto__);
case 2:
return tel_field26175__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26175.cljs$core$IFn$_invoke$arity$1 = tel_field26175__1;
tel_field26175.cljs$core$IFn$_invoke$arity$2 = tel_field26175__2;
return tel_field26175;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26175);

/**
* Creates a text input field.
*/
sablono.core.text_field26176 = (function() {
var text_field26176 = null;
var text_field26176__1 = (function (name__10377__auto__){
return text_field26176.call(null,name__10377__auto__,null);
});
var text_field26176__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field26176 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field26176__1.call(this,name__10377__auto__);
case 2:
return text_field26176__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26176.cljs$core$IFn$_invoke$arity$1 = text_field26176__1;
text_field26176.cljs$core$IFn$_invoke$arity$2 = text_field26176__2;
return text_field26176;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26176);

/**
* Creates a time input field.
*/
sablono.core.time_field26177 = (function() {
var time_field26177 = null;
var time_field26177__1 = (function (name__10377__auto__){
return time_field26177.call(null,name__10377__auto__,null);
});
var time_field26177__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field26177 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field26177__1.call(this,name__10377__auto__);
case 2:
return time_field26177__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26177.cljs$core$IFn$_invoke$arity$1 = time_field26177__1;
time_field26177.cljs$core$IFn$_invoke$arity$2 = time_field26177__2;
return time_field26177;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26177);

/**
* Creates a url input field.
*/
sablono.core.url_field26178 = (function() {
var url_field26178 = null;
var url_field26178__1 = (function (name__10377__auto__){
return url_field26178.call(null,name__10377__auto__,null);
});
var url_field26178__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field26178 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field26178__1.call(this,name__10377__auto__);
case 2:
return url_field26178__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26178.cljs$core$IFn$_invoke$arity$1 = url_field26178__1;
url_field26178.cljs$core$IFn$_invoke$arity$2 = url_field26178__2;
return url_field26178;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26178);

/**
* Creates a week input field.
*/
sablono.core.week_field26179 = (function() {
var week_field26179 = null;
var week_field26179__1 = (function (name__10377__auto__){
return week_field26179.call(null,name__10377__auto__,null);
});
var week_field26179__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field26179 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field26179__1.call(this,name__10377__auto__);
case 2:
return week_field26179__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26179.cljs$core$IFn$_invoke$arity$1 = week_field26179__1;
week_field26179.cljs$core$IFn$_invoke$arity$2 = week_field26179__2;
return week_field26179;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26179);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26180 = (function() {
var check_box26180 = null;
var check_box26180__1 = (function (name){
return check_box26180.call(null,name,null);
});
var check_box26180__2 = (function (name,checked_QMARK_){
return check_box26180.call(null,name,checked_QMARK_,"true");
});
var check_box26180__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26180 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26180__1.call(this,name);
case 2:
return check_box26180__2.call(this,name,checked_QMARK_);
case 3:
return check_box26180__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26180.cljs$core$IFn$_invoke$arity$1 = check_box26180__1;
check_box26180.cljs$core$IFn$_invoke$arity$2 = check_box26180__2;
check_box26180.cljs$core$IFn$_invoke$arity$3 = check_box26180__3;
return check_box26180;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26180);
/**
* Creates a radio button.
*/
sablono.core.radio_button26181 = (function() {
var radio_button26181 = null;
var radio_button26181__1 = (function (group){
return radio_button26181.call(null,group,null);
});
var radio_button26181__2 = (function (group,checked_QMARK_){
return radio_button26181.call(null,group,checked_QMARK_,"true");
});
var radio_button26181__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26181 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26181__1.call(this,group);
case 2:
return radio_button26181__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26181__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26181.cljs$core$IFn$_invoke$arity$1 = radio_button26181__1;
radio_button26181.cljs$core$IFn$_invoke$arity$2 = radio_button26181__2;
radio_button26181.cljs$core$IFn$_invoke$arity$3 = radio_button26181__3;
return radio_button26181;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26181);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26182 = (function() {
var select_options26182 = null;
var select_options26182__1 = (function (coll){
return select_options26182.call(null,coll,null);
});
var select_options26182__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__26191(s__26192){
return (new cljs.core.LazySeq(null,(function (){
var s__26192__$1 = s__26192;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26192__$1);
if(temp__4126__auto__){
var s__26192__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26192__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26192__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26194 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26193 = (0);
while(true){
if((i__26193 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26193);
cljs.core.chunk_append.call(null,b__26194,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26197 = x;
var text = cljs.core.nth.call(null,vec__26197,(0),null);
var val = cljs.core.nth.call(null,vec__26197,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26197,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26182.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__26199 = (i__26193 + (1));
i__26193 = G__26199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26194),iter__26191.call(null,cljs.core.chunk_rest.call(null,s__26192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26194),null);
}
} else {
var x = cljs.core.first.call(null,s__26192__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26198 = x;
var text = cljs.core.nth.call(null,vec__26198,(0),null);
var val = cljs.core.nth.call(null,vec__26198,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26198,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26182.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26191.call(null,cljs.core.rest.call(null,s__26192__$2)));
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
select_options26182 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26182__1.call(this,coll);
case 2:
return select_options26182__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26182.cljs$core$IFn$_invoke$arity$1 = select_options26182__1;
select_options26182.cljs$core$IFn$_invoke$arity$2 = select_options26182__2;
return select_options26182;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26182);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26200 = (function() {
var drop_down26200 = null;
var drop_down26200__2 = (function (name,options){
return drop_down26200.call(null,name,options,null);
});
var drop_down26200__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26200 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26200__2.call(this,name,options);
case 3:
return drop_down26200__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26200.cljs$core$IFn$_invoke$arity$2 = drop_down26200__2;
drop_down26200.cljs$core$IFn$_invoke$arity$3 = drop_down26200__3;
return drop_down26200;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26200);
/**
* Creates a text area element.
*/
sablono.core.text_area26201 = (function() {
var text_area26201 = null;
var text_area26201__1 = (function (name){
return text_area26201.call(null,name,null);
});
var text_area26201__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26201 = function(name,value){
switch(arguments.length){
case 1:
return text_area26201__1.call(this,name);
case 2:
return text_area26201__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26201.cljs$core$IFn$_invoke$arity$1 = text_area26201__1;
text_area26201.cljs$core$IFn$_invoke$arity$2 = text_area26201__2;
return text_area26201;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26201);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26202 = (function label26202(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26202);
/**
* Creates a submit button.
*/
sablono.core.submit_button26203 = (function submit_button26203(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26203);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26204 = (function reset_button26204(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26204);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26205 = (function() { 
var form_to26205__delegate = function (p__26206,body){
var vec__26208 = p__26206;
var method = cljs.core.nth.call(null,vec__26208,(0),null);
var action = cljs.core.nth.call(null,vec__26208,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26205 = function (p__26206,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to26205__delegate.call(this,p__26206,body);};
form_to26205.cljs$lang$maxFixedArity = 1;
form_to26205.cljs$lang$applyTo = (function (arglist__26209){
var p__26206 = cljs.core.first(arglist__26209);
var body = cljs.core.rest(arglist__26209);
return form_to26205__delegate(p__26206,body);
});
form_to26205.cljs$core$IFn$_invoke$arity$variadic = form_to26205__delegate;
return form_to26205;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26205);

//# sourceMappingURL=core.js.map