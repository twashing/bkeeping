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
var G__103912__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__103911 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__103911,(0),null);
var body = cljs.core.nthnext.call(null,vec__103911,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__103912 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__103912__delegate.call(this,args);};
G__103912.cljs$lang$maxFixedArity = 0;
G__103912.cljs$lang$applyTo = (function (arglist__103913){
var args = cljs.core.seq(arglist__103913);
return G__103912__delegate(args);
});
G__103912.cljs$core$IFn$_invoke$arity$variadic = G__103912__delegate;
return G__103912;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__103918(s__103919){
return (new cljs.core.LazySeq(null,(function (){
var s__103919__$1 = s__103919;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__103919__$1);
if(temp__4126__auto__){
var s__103919__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103919__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__103919__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__103921 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__103920 = (0);
while(true){
if((i__103920 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__103920);
cljs.core.chunk_append.call(null,b__103921,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__103922 = (i__103920 + (1));
i__103920 = G__103922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103921),iter__103918.call(null,cljs.core.chunk_rest.call(null,s__103919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103921),null);
}
} else {
var args = cljs.core.first.call(null,s__103919__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__103918.call(null,cljs.core.rest.call(null,s__103919__$2)));
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
var iter__4378__auto__ = (function iter__103927(s__103928){
return (new cljs.core.LazySeq(null,(function (){
var s__103928__$1 = s__103928;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__103928__$1);
if(temp__4126__auto__){
var s__103928__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103928__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__103928__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__103930 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__103929 = (0);
while(true){
if((i__103929 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__103929);
cljs.core.chunk_append.call(null,b__103930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__103931 = (i__103929 + (1));
i__103929 = G__103931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103930),iter__103927.call(null,cljs.core.chunk_rest.call(null,s__103928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103930),null);
}
} else {
var style = cljs.core.first.call(null,s__103928__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__103927.call(null,cljs.core.rest.call(null,s__103928__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__103932){
var styles = cljs.core.seq(arglist__103932);
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
sablono.core.link_to103933 = (function() { 
var link_to103933__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to103933 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to103933__delegate.call(this,url,content);};
link_to103933.cljs$lang$maxFixedArity = 1;
link_to103933.cljs$lang$applyTo = (function (arglist__103934){
var url = cljs.core.first(arglist__103934);
var content = cljs.core.rest(arglist__103934);
return link_to103933__delegate(url,content);
});
link_to103933.cljs$core$IFn$_invoke$arity$variadic = link_to103933__delegate;
return link_to103933;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to103933);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to103935 = (function() { 
var mail_to103935__delegate = function (e_mail,p__103936){
var vec__103938 = p__103936;
var content = cljs.core.nth.call(null,vec__103938,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to103935 = function (e_mail,var_args){
var p__103936 = null;
if (arguments.length > 1) {
  p__103936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to103935__delegate.call(this,e_mail,p__103936);};
mail_to103935.cljs$lang$maxFixedArity = 1;
mail_to103935.cljs$lang$applyTo = (function (arglist__103939){
var e_mail = cljs.core.first(arglist__103939);
var p__103936 = cljs.core.rest(arglist__103939);
return mail_to103935__delegate(e_mail,p__103936);
});
mail_to103935.cljs$core$IFn$_invoke$arity$variadic = mail_to103935__delegate;
return mail_to103935;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to103935);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list103940 = (function unordered_list103940(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__103945(s__103946){
return (new cljs.core.LazySeq(null,(function (){
var s__103946__$1 = s__103946;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__103946__$1);
if(temp__4126__auto__){
var s__103946__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103946__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__103946__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__103948 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__103947 = (0);
while(true){
if((i__103947 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__103947);
cljs.core.chunk_append.call(null,b__103948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__103949 = (i__103947 + (1));
i__103947 = G__103949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103948),iter__103945.call(null,cljs.core.chunk_rest.call(null,s__103946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103948),null);
}
} else {
var x = cljs.core.first.call(null,s__103946__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__103945.call(null,cljs.core.rest.call(null,s__103946__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list103940);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list103950 = (function ordered_list103950(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__103955(s__103956){
return (new cljs.core.LazySeq(null,(function (){
var s__103956__$1 = s__103956;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__103956__$1);
if(temp__4126__auto__){
var s__103956__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103956__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__103956__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__103958 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__103957 = (0);
while(true){
if((i__103957 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__103957);
cljs.core.chunk_append.call(null,b__103958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__103959 = (i__103957 + (1));
i__103957 = G__103959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103958),iter__103955.call(null,cljs.core.chunk_rest.call(null,s__103956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103958),null);
}
} else {
var x = cljs.core.first.call(null,s__103956__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__103955.call(null,cljs.core.rest.call(null,s__103956__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list103950);
/**
* Create an image element.
*/
sablono.core.image103960 = (function() {
var image103960 = null;
var image103960__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image103960__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image103960 = function(src,alt){
switch(arguments.length){
case 1:
return image103960__1.call(this,src);
case 2:
return image103960__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image103960.cljs$core$IFn$_invoke$arity$1 = image103960__1;
image103960.cljs$core$IFn$_invoke$arity$2 = image103960__2;
return image103960;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image103960);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__103961_SHARP_,p2__103962_SHARP_){
return [cljs.core.str(p1__103961_SHARP_),cljs.core.str("["),cljs.core.str(p2__103962_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__103963_SHARP_,p2__103964_SHARP_){
return [cljs.core.str(p1__103963_SHARP_),cljs.core.str("-"),cljs.core.str(p2__103964_SHARP_)].join('');
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
sablono.core.color_field103965 = (function() {
var color_field103965 = null;
var color_field103965__1 = (function (name__9770__auto__){
return color_field103965.call(null,name__9770__auto__,null);
});
var color_field103965__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field103965 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field103965__1.call(this,name__9770__auto__);
case 2:
return color_field103965__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field103965.cljs$core$IFn$_invoke$arity$1 = color_field103965__1;
color_field103965.cljs$core$IFn$_invoke$arity$2 = color_field103965__2;
return color_field103965;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field103965);

/**
* Creates a date input field.
*/
sablono.core.date_field103966 = (function() {
var date_field103966 = null;
var date_field103966__1 = (function (name__9770__auto__){
return date_field103966.call(null,name__9770__auto__,null);
});
var date_field103966__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field103966 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field103966__1.call(this,name__9770__auto__);
case 2:
return date_field103966__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field103966.cljs$core$IFn$_invoke$arity$1 = date_field103966__1;
date_field103966.cljs$core$IFn$_invoke$arity$2 = date_field103966__2;
return date_field103966;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field103966);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field103967 = (function() {
var datetime_field103967 = null;
var datetime_field103967__1 = (function (name__9770__auto__){
return datetime_field103967.call(null,name__9770__auto__,null);
});
var datetime_field103967__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field103967 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field103967__1.call(this,name__9770__auto__);
case 2:
return datetime_field103967__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field103967.cljs$core$IFn$_invoke$arity$1 = datetime_field103967__1;
datetime_field103967.cljs$core$IFn$_invoke$arity$2 = datetime_field103967__2;
return datetime_field103967;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field103967);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field103968 = (function() {
var datetime_local_field103968 = null;
var datetime_local_field103968__1 = (function (name__9770__auto__){
return datetime_local_field103968.call(null,name__9770__auto__,null);
});
var datetime_local_field103968__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field103968 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field103968__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field103968__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field103968.cljs$core$IFn$_invoke$arity$1 = datetime_local_field103968__1;
datetime_local_field103968.cljs$core$IFn$_invoke$arity$2 = datetime_local_field103968__2;
return datetime_local_field103968;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field103968);

/**
* Creates a email input field.
*/
sablono.core.email_field103969 = (function() {
var email_field103969 = null;
var email_field103969__1 = (function (name__9770__auto__){
return email_field103969.call(null,name__9770__auto__,null);
});
var email_field103969__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field103969 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field103969__1.call(this,name__9770__auto__);
case 2:
return email_field103969__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field103969.cljs$core$IFn$_invoke$arity$1 = email_field103969__1;
email_field103969.cljs$core$IFn$_invoke$arity$2 = email_field103969__2;
return email_field103969;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field103969);

/**
* Creates a file input field.
*/
sablono.core.file_field103970 = (function() {
var file_field103970 = null;
var file_field103970__1 = (function (name__9770__auto__){
return file_field103970.call(null,name__9770__auto__,null);
});
var file_field103970__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field103970 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field103970__1.call(this,name__9770__auto__);
case 2:
return file_field103970__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field103970.cljs$core$IFn$_invoke$arity$1 = file_field103970__1;
file_field103970.cljs$core$IFn$_invoke$arity$2 = file_field103970__2;
return file_field103970;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field103970);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field103971 = (function() {
var hidden_field103971 = null;
var hidden_field103971__1 = (function (name__9770__auto__){
return hidden_field103971.call(null,name__9770__auto__,null);
});
var hidden_field103971__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field103971 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field103971__1.call(this,name__9770__auto__);
case 2:
return hidden_field103971__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field103971.cljs$core$IFn$_invoke$arity$1 = hidden_field103971__1;
hidden_field103971.cljs$core$IFn$_invoke$arity$2 = hidden_field103971__2;
return hidden_field103971;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field103971);

/**
* Creates a month input field.
*/
sablono.core.month_field103972 = (function() {
var month_field103972 = null;
var month_field103972__1 = (function (name__9770__auto__){
return month_field103972.call(null,name__9770__auto__,null);
});
var month_field103972__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field103972 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field103972__1.call(this,name__9770__auto__);
case 2:
return month_field103972__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field103972.cljs$core$IFn$_invoke$arity$1 = month_field103972__1;
month_field103972.cljs$core$IFn$_invoke$arity$2 = month_field103972__2;
return month_field103972;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field103972);

/**
* Creates a number input field.
*/
sablono.core.number_field103973 = (function() {
var number_field103973 = null;
var number_field103973__1 = (function (name__9770__auto__){
return number_field103973.call(null,name__9770__auto__,null);
});
var number_field103973__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field103973 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field103973__1.call(this,name__9770__auto__);
case 2:
return number_field103973__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field103973.cljs$core$IFn$_invoke$arity$1 = number_field103973__1;
number_field103973.cljs$core$IFn$_invoke$arity$2 = number_field103973__2;
return number_field103973;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field103973);

/**
* Creates a password input field.
*/
sablono.core.password_field103974 = (function() {
var password_field103974 = null;
var password_field103974__1 = (function (name__9770__auto__){
return password_field103974.call(null,name__9770__auto__,null);
});
var password_field103974__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field103974 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field103974__1.call(this,name__9770__auto__);
case 2:
return password_field103974__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field103974.cljs$core$IFn$_invoke$arity$1 = password_field103974__1;
password_field103974.cljs$core$IFn$_invoke$arity$2 = password_field103974__2;
return password_field103974;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field103974);

/**
* Creates a range input field.
*/
sablono.core.range_field103975 = (function() {
var range_field103975 = null;
var range_field103975__1 = (function (name__9770__auto__){
return range_field103975.call(null,name__9770__auto__,null);
});
var range_field103975__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field103975 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field103975__1.call(this,name__9770__auto__);
case 2:
return range_field103975__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field103975.cljs$core$IFn$_invoke$arity$1 = range_field103975__1;
range_field103975.cljs$core$IFn$_invoke$arity$2 = range_field103975__2;
return range_field103975;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field103975);

/**
* Creates a search input field.
*/
sablono.core.search_field103976 = (function() {
var search_field103976 = null;
var search_field103976__1 = (function (name__9770__auto__){
return search_field103976.call(null,name__9770__auto__,null);
});
var search_field103976__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field103976 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field103976__1.call(this,name__9770__auto__);
case 2:
return search_field103976__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field103976.cljs$core$IFn$_invoke$arity$1 = search_field103976__1;
search_field103976.cljs$core$IFn$_invoke$arity$2 = search_field103976__2;
return search_field103976;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field103976);

/**
* Creates a tel input field.
*/
sablono.core.tel_field103977 = (function() {
var tel_field103977 = null;
var tel_field103977__1 = (function (name__9770__auto__){
return tel_field103977.call(null,name__9770__auto__,null);
});
var tel_field103977__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field103977 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field103977__1.call(this,name__9770__auto__);
case 2:
return tel_field103977__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field103977.cljs$core$IFn$_invoke$arity$1 = tel_field103977__1;
tel_field103977.cljs$core$IFn$_invoke$arity$2 = tel_field103977__2;
return tel_field103977;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field103977);

/**
* Creates a text input field.
*/
sablono.core.text_field103978 = (function() {
var text_field103978 = null;
var text_field103978__1 = (function (name__9770__auto__){
return text_field103978.call(null,name__9770__auto__,null);
});
var text_field103978__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field103978 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field103978__1.call(this,name__9770__auto__);
case 2:
return text_field103978__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field103978.cljs$core$IFn$_invoke$arity$1 = text_field103978__1;
text_field103978.cljs$core$IFn$_invoke$arity$2 = text_field103978__2;
return text_field103978;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field103978);

/**
* Creates a time input field.
*/
sablono.core.time_field103979 = (function() {
var time_field103979 = null;
var time_field103979__1 = (function (name__9770__auto__){
return time_field103979.call(null,name__9770__auto__,null);
});
var time_field103979__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field103979 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field103979__1.call(this,name__9770__auto__);
case 2:
return time_field103979__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field103979.cljs$core$IFn$_invoke$arity$1 = time_field103979__1;
time_field103979.cljs$core$IFn$_invoke$arity$2 = time_field103979__2;
return time_field103979;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field103979);

/**
* Creates a url input field.
*/
sablono.core.url_field103980 = (function() {
var url_field103980 = null;
var url_field103980__1 = (function (name__9770__auto__){
return url_field103980.call(null,name__9770__auto__,null);
});
var url_field103980__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field103980 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field103980__1.call(this,name__9770__auto__);
case 2:
return url_field103980__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field103980.cljs$core$IFn$_invoke$arity$1 = url_field103980__1;
url_field103980.cljs$core$IFn$_invoke$arity$2 = url_field103980__2;
return url_field103980;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field103980);

/**
* Creates a week input field.
*/
sablono.core.week_field103981 = (function() {
var week_field103981 = null;
var week_field103981__1 = (function (name__9770__auto__){
return week_field103981.call(null,name__9770__auto__,null);
});
var week_field103981__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field103981 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field103981__1.call(this,name__9770__auto__);
case 2:
return week_field103981__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field103981.cljs$core$IFn$_invoke$arity$1 = week_field103981__1;
week_field103981.cljs$core$IFn$_invoke$arity$2 = week_field103981__2;
return week_field103981;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field103981);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box103982 = (function() {
var check_box103982 = null;
var check_box103982__1 = (function (name){
return check_box103982.call(null,name,null);
});
var check_box103982__2 = (function (name,checked_QMARK_){
return check_box103982.call(null,name,checked_QMARK_,"true");
});
var check_box103982__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box103982 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box103982__1.call(this,name);
case 2:
return check_box103982__2.call(this,name,checked_QMARK_);
case 3:
return check_box103982__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box103982.cljs$core$IFn$_invoke$arity$1 = check_box103982__1;
check_box103982.cljs$core$IFn$_invoke$arity$2 = check_box103982__2;
check_box103982.cljs$core$IFn$_invoke$arity$3 = check_box103982__3;
return check_box103982;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box103982);
/**
* Creates a radio button.
*/
sablono.core.radio_button103983 = (function() {
var radio_button103983 = null;
var radio_button103983__1 = (function (group){
return radio_button103983.call(null,group,null);
});
var radio_button103983__2 = (function (group,checked_QMARK_){
return radio_button103983.call(null,group,checked_QMARK_,"true");
});
var radio_button103983__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button103983 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button103983__1.call(this,group);
case 2:
return radio_button103983__2.call(this,group,checked_QMARK_);
case 3:
return radio_button103983__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button103983.cljs$core$IFn$_invoke$arity$1 = radio_button103983__1;
radio_button103983.cljs$core$IFn$_invoke$arity$2 = radio_button103983__2;
radio_button103983.cljs$core$IFn$_invoke$arity$3 = radio_button103983__3;
return radio_button103983;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button103983);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options103984 = (function() {
var select_options103984 = null;
var select_options103984__1 = (function (coll){
return select_options103984.call(null,coll,null);
});
var select_options103984__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__103993(s__103994){
return (new cljs.core.LazySeq(null,(function (){
var s__103994__$1 = s__103994;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__103994__$1);
if(temp__4126__auto__){
var s__103994__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103994__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__103994__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__103996 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__103995 = (0);
while(true){
if((i__103995 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__103995);
cljs.core.chunk_append.call(null,b__103996,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__103999 = x;
var text = cljs.core.nth.call(null,vec__103999,(0),null);
var val = cljs.core.nth.call(null,vec__103999,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__103999,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options103984.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__104001 = (i__103995 + (1));
i__103995 = G__104001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103996),iter__103993.call(null,cljs.core.chunk_rest.call(null,s__103994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103996),null);
}
} else {
var x = cljs.core.first.call(null,s__103994__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__104000 = x;
var text = cljs.core.nth.call(null,vec__104000,(0),null);
var val = cljs.core.nth.call(null,vec__104000,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__104000,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options103984.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__103993.call(null,cljs.core.rest.call(null,s__103994__$2)));
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
select_options103984 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options103984__1.call(this,coll);
case 2:
return select_options103984__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options103984.cljs$core$IFn$_invoke$arity$1 = select_options103984__1;
select_options103984.cljs$core$IFn$_invoke$arity$2 = select_options103984__2;
return select_options103984;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options103984);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down104002 = (function() {
var drop_down104002 = null;
var drop_down104002__2 = (function (name,options){
return drop_down104002.call(null,name,options,null);
});
var drop_down104002__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down104002 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down104002__2.call(this,name,options);
case 3:
return drop_down104002__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down104002.cljs$core$IFn$_invoke$arity$2 = drop_down104002__2;
drop_down104002.cljs$core$IFn$_invoke$arity$3 = drop_down104002__3;
return drop_down104002;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down104002);
/**
* Creates a text area element.
*/
sablono.core.text_area104003 = (function() {
var text_area104003 = null;
var text_area104003__1 = (function (name){
return text_area104003.call(null,name,null);
});
var text_area104003__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area104003 = function(name,value){
switch(arguments.length){
case 1:
return text_area104003__1.call(this,name);
case 2:
return text_area104003__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area104003.cljs$core$IFn$_invoke$arity$1 = text_area104003__1;
text_area104003.cljs$core$IFn$_invoke$arity$2 = text_area104003__2;
return text_area104003;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area104003);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label104004 = (function label104004(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label104004);
/**
* Creates a submit button.
*/
sablono.core.submit_button104005 = (function submit_button104005(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button104005);
/**
* Creates a form reset button.
*/
sablono.core.reset_button104006 = (function reset_button104006(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button104006);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to104007 = (function() { 
var form_to104007__delegate = function (p__104008,body){
var vec__104010 = p__104008;
var method = cljs.core.nth.call(null,vec__104010,(0),null);
var action = cljs.core.nth.call(null,vec__104010,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to104007 = function (p__104008,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to104007__delegate.call(this,p__104008,body);};
form_to104007.cljs$lang$maxFixedArity = 1;
form_to104007.cljs$lang$applyTo = (function (arglist__104011){
var p__104008 = cljs.core.first(arglist__104011);
var body = cljs.core.rest(arglist__104011);
return form_to104007__delegate(p__104008,body);
});
form_to104007.cljs$core$IFn$_invoke$arity$variadic = form_to104007__delegate;
return form_to104007;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to104007);

//# sourceMappingURL=core.js.map