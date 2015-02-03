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
var G__32719__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32718 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__32718,(0),null);
var body = cljs.core.nthnext.call(null,vec__32718,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32719 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__32719__delegate.call(this,args);};
G__32719.cljs$lang$maxFixedArity = 0;
G__32719.cljs$lang$applyTo = (function (arglist__32720){
var args = cljs.core.seq(arglist__32720);
return G__32719__delegate(args);
});
G__32719.cljs$core$IFn$_invoke$arity$variadic = G__32719__delegate;
return G__32719;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__32725(s__32726){
return (new cljs.core.LazySeq(null,(function (){
var s__32726__$1 = s__32726;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32726__$1);
if(temp__4126__auto__){
var s__32726__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32726__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__32726__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__32728 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__32727 = (0);
while(true){
if((i__32727 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__32727);
cljs.core.chunk_append.call(null,b__32728,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32729 = (i__32727 + (1));
i__32727 = G__32729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32728),iter__32725.call(null,cljs.core.chunk_rest.call(null,s__32726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32728),null);
}
} else {
var args = cljs.core.first.call(null,s__32726__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32725.call(null,cljs.core.rest.call(null,s__32726__$2)));
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
var iter__4378__auto__ = (function iter__32734(s__32735){
return (new cljs.core.LazySeq(null,(function (){
var s__32735__$1 = s__32735;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32735__$1);
if(temp__4126__auto__){
var s__32735__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32735__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__32735__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__32737 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__32736 = (0);
while(true){
if((i__32736 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__32736);
cljs.core.chunk_append.call(null,b__32737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32738 = (i__32736 + (1));
i__32736 = G__32738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32737),iter__32734.call(null,cljs.core.chunk_rest.call(null,s__32735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32737),null);
}
} else {
var style = cljs.core.first.call(null,s__32735__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__32734.call(null,cljs.core.rest.call(null,s__32735__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__32739){
var styles = cljs.core.seq(arglist__32739);
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
sablono.core.link_to32740 = (function() { 
var link_to32740__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to32740 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to32740__delegate.call(this,url,content);};
link_to32740.cljs$lang$maxFixedArity = 1;
link_to32740.cljs$lang$applyTo = (function (arglist__32741){
var url = cljs.core.first(arglist__32741);
var content = cljs.core.rest(arglist__32741);
return link_to32740__delegate(url,content);
});
link_to32740.cljs$core$IFn$_invoke$arity$variadic = link_to32740__delegate;
return link_to32740;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32740);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32742 = (function() { 
var mail_to32742__delegate = function (e_mail,p__32743){
var vec__32745 = p__32743;
var content = cljs.core.nth.call(null,vec__32745,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to32742 = function (e_mail,var_args){
var p__32743 = null;
if (arguments.length > 1) {
  p__32743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to32742__delegate.call(this,e_mail,p__32743);};
mail_to32742.cljs$lang$maxFixedArity = 1;
mail_to32742.cljs$lang$applyTo = (function (arglist__32746){
var e_mail = cljs.core.first(arglist__32746);
var p__32743 = cljs.core.rest(arglist__32746);
return mail_to32742__delegate(e_mail,p__32743);
});
mail_to32742.cljs$core$IFn$_invoke$arity$variadic = mail_to32742__delegate;
return mail_to32742;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32742);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32747 = (function unordered_list32747(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__32752(s__32753){
return (new cljs.core.LazySeq(null,(function (){
var s__32753__$1 = s__32753;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32753__$1);
if(temp__4126__auto__){
var s__32753__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32753__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__32753__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__32755 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__32754 = (0);
while(true){
if((i__32754 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__32754);
cljs.core.chunk_append.call(null,b__32755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32756 = (i__32754 + (1));
i__32754 = G__32756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32755),iter__32752.call(null,cljs.core.chunk_rest.call(null,s__32753__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32755),null);
}
} else {
var x = cljs.core.first.call(null,s__32753__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32752.call(null,cljs.core.rest.call(null,s__32753__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32747);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32757 = (function ordered_list32757(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__32762(s__32763){
return (new cljs.core.LazySeq(null,(function (){
var s__32763__$1 = s__32763;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32763__$1);
if(temp__4126__auto__){
var s__32763__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32763__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__32763__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__32765 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__32764 = (0);
while(true){
if((i__32764 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__32764);
cljs.core.chunk_append.call(null,b__32765,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32766 = (i__32764 + (1));
i__32764 = G__32766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32765),iter__32762.call(null,cljs.core.chunk_rest.call(null,s__32763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32765),null);
}
} else {
var x = cljs.core.first.call(null,s__32763__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32762.call(null,cljs.core.rest.call(null,s__32763__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32757);
/**
* Create an image element.
*/
sablono.core.image32767 = (function() {
var image32767 = null;
var image32767__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image32767__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image32767 = function(src,alt){
switch(arguments.length){
case 1:
return image32767__1.call(this,src);
case 2:
return image32767__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32767.cljs$core$IFn$_invoke$arity$1 = image32767__1;
image32767.cljs$core$IFn$_invoke$arity$2 = image32767__2;
return image32767;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32767);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__32768_SHARP_,p2__32769_SHARP_){
return [cljs.core.str(p1__32768_SHARP_),cljs.core.str("["),cljs.core.str(p2__32769_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__32770_SHARP_,p2__32771_SHARP_){
return [cljs.core.str(p1__32770_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32771_SHARP_)].join('');
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
sablono.core.color_field32772 = (function() {
var color_field32772 = null;
var color_field32772__1 = (function (name__10374__auto__){
return color_field32772.call(null,name__10374__auto__,null);
});
var color_field32772__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10374__auto__,value__10375__auto__);
});
color_field32772 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return color_field32772__1.call(this,name__10374__auto__);
case 2:
return color_field32772__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32772.cljs$core$IFn$_invoke$arity$1 = color_field32772__1;
color_field32772.cljs$core$IFn$_invoke$arity$2 = color_field32772__2;
return color_field32772;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32772);

/**
* Creates a date input field.
*/
sablono.core.date_field32773 = (function() {
var date_field32773 = null;
var date_field32773__1 = (function (name__10374__auto__){
return date_field32773.call(null,name__10374__auto__,null);
});
var date_field32773__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10374__auto__,value__10375__auto__);
});
date_field32773 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return date_field32773__1.call(this,name__10374__auto__);
case 2:
return date_field32773__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32773.cljs$core$IFn$_invoke$arity$1 = date_field32773__1;
date_field32773.cljs$core$IFn$_invoke$arity$2 = date_field32773__2;
return date_field32773;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32773);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32774 = (function() {
var datetime_field32774 = null;
var datetime_field32774__1 = (function (name__10374__auto__){
return datetime_field32774.call(null,name__10374__auto__,null);
});
var datetime_field32774__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10374__auto__,value__10375__auto__);
});
datetime_field32774 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return datetime_field32774__1.call(this,name__10374__auto__);
case 2:
return datetime_field32774__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32774.cljs$core$IFn$_invoke$arity$1 = datetime_field32774__1;
datetime_field32774.cljs$core$IFn$_invoke$arity$2 = datetime_field32774__2;
return datetime_field32774;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32774);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32775 = (function() {
var datetime_local_field32775 = null;
var datetime_local_field32775__1 = (function (name__10374__auto__){
return datetime_local_field32775.call(null,name__10374__auto__,null);
});
var datetime_local_field32775__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10374__auto__,value__10375__auto__);
});
datetime_local_field32775 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32775__1.call(this,name__10374__auto__);
case 2:
return datetime_local_field32775__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32775.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32775__1;
datetime_local_field32775.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32775__2;
return datetime_local_field32775;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32775);

/**
* Creates a email input field.
*/
sablono.core.email_field32776 = (function() {
var email_field32776 = null;
var email_field32776__1 = (function (name__10374__auto__){
return email_field32776.call(null,name__10374__auto__,null);
});
var email_field32776__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10374__auto__,value__10375__auto__);
});
email_field32776 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return email_field32776__1.call(this,name__10374__auto__);
case 2:
return email_field32776__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32776.cljs$core$IFn$_invoke$arity$1 = email_field32776__1;
email_field32776.cljs$core$IFn$_invoke$arity$2 = email_field32776__2;
return email_field32776;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32776);

/**
* Creates a file input field.
*/
sablono.core.file_field32777 = (function() {
var file_field32777 = null;
var file_field32777__1 = (function (name__10374__auto__){
return file_field32777.call(null,name__10374__auto__,null);
});
var file_field32777__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10374__auto__,value__10375__auto__);
});
file_field32777 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return file_field32777__1.call(this,name__10374__auto__);
case 2:
return file_field32777__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32777.cljs$core$IFn$_invoke$arity$1 = file_field32777__1;
file_field32777.cljs$core$IFn$_invoke$arity$2 = file_field32777__2;
return file_field32777;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32777);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32778 = (function() {
var hidden_field32778 = null;
var hidden_field32778__1 = (function (name__10374__auto__){
return hidden_field32778.call(null,name__10374__auto__,null);
});
var hidden_field32778__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10374__auto__,value__10375__auto__);
});
hidden_field32778 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return hidden_field32778__1.call(this,name__10374__auto__);
case 2:
return hidden_field32778__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32778.cljs$core$IFn$_invoke$arity$1 = hidden_field32778__1;
hidden_field32778.cljs$core$IFn$_invoke$arity$2 = hidden_field32778__2;
return hidden_field32778;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32778);

/**
* Creates a month input field.
*/
sablono.core.month_field32779 = (function() {
var month_field32779 = null;
var month_field32779__1 = (function (name__10374__auto__){
return month_field32779.call(null,name__10374__auto__,null);
});
var month_field32779__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10374__auto__,value__10375__auto__);
});
month_field32779 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return month_field32779__1.call(this,name__10374__auto__);
case 2:
return month_field32779__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32779.cljs$core$IFn$_invoke$arity$1 = month_field32779__1;
month_field32779.cljs$core$IFn$_invoke$arity$2 = month_field32779__2;
return month_field32779;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32779);

/**
* Creates a number input field.
*/
sablono.core.number_field32780 = (function() {
var number_field32780 = null;
var number_field32780__1 = (function (name__10374__auto__){
return number_field32780.call(null,name__10374__auto__,null);
});
var number_field32780__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10374__auto__,value__10375__auto__);
});
number_field32780 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return number_field32780__1.call(this,name__10374__auto__);
case 2:
return number_field32780__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32780.cljs$core$IFn$_invoke$arity$1 = number_field32780__1;
number_field32780.cljs$core$IFn$_invoke$arity$2 = number_field32780__2;
return number_field32780;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32780);

/**
* Creates a password input field.
*/
sablono.core.password_field32781 = (function() {
var password_field32781 = null;
var password_field32781__1 = (function (name__10374__auto__){
return password_field32781.call(null,name__10374__auto__,null);
});
var password_field32781__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10374__auto__,value__10375__auto__);
});
password_field32781 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return password_field32781__1.call(this,name__10374__auto__);
case 2:
return password_field32781__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32781.cljs$core$IFn$_invoke$arity$1 = password_field32781__1;
password_field32781.cljs$core$IFn$_invoke$arity$2 = password_field32781__2;
return password_field32781;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32781);

/**
* Creates a range input field.
*/
sablono.core.range_field32782 = (function() {
var range_field32782 = null;
var range_field32782__1 = (function (name__10374__auto__){
return range_field32782.call(null,name__10374__auto__,null);
});
var range_field32782__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10374__auto__,value__10375__auto__);
});
range_field32782 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return range_field32782__1.call(this,name__10374__auto__);
case 2:
return range_field32782__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32782.cljs$core$IFn$_invoke$arity$1 = range_field32782__1;
range_field32782.cljs$core$IFn$_invoke$arity$2 = range_field32782__2;
return range_field32782;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32782);

/**
* Creates a search input field.
*/
sablono.core.search_field32783 = (function() {
var search_field32783 = null;
var search_field32783__1 = (function (name__10374__auto__){
return search_field32783.call(null,name__10374__auto__,null);
});
var search_field32783__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10374__auto__,value__10375__auto__);
});
search_field32783 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return search_field32783__1.call(this,name__10374__auto__);
case 2:
return search_field32783__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32783.cljs$core$IFn$_invoke$arity$1 = search_field32783__1;
search_field32783.cljs$core$IFn$_invoke$arity$2 = search_field32783__2;
return search_field32783;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32783);

/**
* Creates a tel input field.
*/
sablono.core.tel_field32784 = (function() {
var tel_field32784 = null;
var tel_field32784__1 = (function (name__10374__auto__){
return tel_field32784.call(null,name__10374__auto__,null);
});
var tel_field32784__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10374__auto__,value__10375__auto__);
});
tel_field32784 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return tel_field32784__1.call(this,name__10374__auto__);
case 2:
return tel_field32784__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32784.cljs$core$IFn$_invoke$arity$1 = tel_field32784__1;
tel_field32784.cljs$core$IFn$_invoke$arity$2 = tel_field32784__2;
return tel_field32784;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32784);

/**
* Creates a text input field.
*/
sablono.core.text_field32785 = (function() {
var text_field32785 = null;
var text_field32785__1 = (function (name__10374__auto__){
return text_field32785.call(null,name__10374__auto__,null);
});
var text_field32785__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10374__auto__,value__10375__auto__);
});
text_field32785 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return text_field32785__1.call(this,name__10374__auto__);
case 2:
return text_field32785__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32785.cljs$core$IFn$_invoke$arity$1 = text_field32785__1;
text_field32785.cljs$core$IFn$_invoke$arity$2 = text_field32785__2;
return text_field32785;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32785);

/**
* Creates a time input field.
*/
sablono.core.time_field32786 = (function() {
var time_field32786 = null;
var time_field32786__1 = (function (name__10374__auto__){
return time_field32786.call(null,name__10374__auto__,null);
});
var time_field32786__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10374__auto__,value__10375__auto__);
});
time_field32786 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return time_field32786__1.call(this,name__10374__auto__);
case 2:
return time_field32786__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32786.cljs$core$IFn$_invoke$arity$1 = time_field32786__1;
time_field32786.cljs$core$IFn$_invoke$arity$2 = time_field32786__2;
return time_field32786;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32786);

/**
* Creates a url input field.
*/
sablono.core.url_field32787 = (function() {
var url_field32787 = null;
var url_field32787__1 = (function (name__10374__auto__){
return url_field32787.call(null,name__10374__auto__,null);
});
var url_field32787__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10374__auto__,value__10375__auto__);
});
url_field32787 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return url_field32787__1.call(this,name__10374__auto__);
case 2:
return url_field32787__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32787.cljs$core$IFn$_invoke$arity$1 = url_field32787__1;
url_field32787.cljs$core$IFn$_invoke$arity$2 = url_field32787__2;
return url_field32787;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32787);

/**
* Creates a week input field.
*/
sablono.core.week_field32788 = (function() {
var week_field32788 = null;
var week_field32788__1 = (function (name__10374__auto__){
return week_field32788.call(null,name__10374__auto__,null);
});
var week_field32788__2 = (function (name__10374__auto__,value__10375__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10374__auto__,value__10375__auto__);
});
week_field32788 = function(name__10374__auto__,value__10375__auto__){
switch(arguments.length){
case 1:
return week_field32788__1.call(this,name__10374__auto__);
case 2:
return week_field32788__2.call(this,name__10374__auto__,value__10375__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32788.cljs$core$IFn$_invoke$arity$1 = week_field32788__1;
week_field32788.cljs$core$IFn$_invoke$arity$2 = week_field32788__2;
return week_field32788;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32788);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32789 = (function() {
var check_box32789 = null;
var check_box32789__1 = (function (name){
return check_box32789.call(null,name,null);
});
var check_box32789__2 = (function (name,checked_QMARK_){
return check_box32789.call(null,name,checked_QMARK_,"true");
});
var check_box32789__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box32789 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32789__1.call(this,name);
case 2:
return check_box32789__2.call(this,name,checked_QMARK_);
case 3:
return check_box32789__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32789.cljs$core$IFn$_invoke$arity$1 = check_box32789__1;
check_box32789.cljs$core$IFn$_invoke$arity$2 = check_box32789__2;
check_box32789.cljs$core$IFn$_invoke$arity$3 = check_box32789__3;
return check_box32789;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32789);
/**
* Creates a radio button.
*/
sablono.core.radio_button32790 = (function() {
var radio_button32790 = null;
var radio_button32790__1 = (function (group){
return radio_button32790.call(null,group,null);
});
var radio_button32790__2 = (function (group,checked_QMARK_){
return radio_button32790.call(null,group,checked_QMARK_,"true");
});
var radio_button32790__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button32790 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32790__1.call(this,group);
case 2:
return radio_button32790__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32790__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32790.cljs$core$IFn$_invoke$arity$1 = radio_button32790__1;
radio_button32790.cljs$core$IFn$_invoke$arity$2 = radio_button32790__2;
radio_button32790.cljs$core$IFn$_invoke$arity$3 = radio_button32790__3;
return radio_button32790;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32790);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32791 = (function() {
var select_options32791 = null;
var select_options32791__1 = (function (coll){
return select_options32791.call(null,coll,null);
});
var select_options32791__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__32800(s__32801){
return (new cljs.core.LazySeq(null,(function (){
var s__32801__$1 = s__32801;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32801__$1);
if(temp__4126__auto__){
var s__32801__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32801__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__32801__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__32803 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__32802 = (0);
while(true){
if((i__32802 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__32802);
cljs.core.chunk_append.call(null,b__32803,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32806 = x;
var text = cljs.core.nth.call(null,vec__32806,(0),null);
var val = cljs.core.nth.call(null,vec__32806,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32806,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32791.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__32808 = (i__32802 + (1));
i__32802 = G__32808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32803),iter__32800.call(null,cljs.core.chunk_rest.call(null,s__32801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32803),null);
}
} else {
var x = cljs.core.first.call(null,s__32801__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32807 = x;
var text = cljs.core.nth.call(null,vec__32807,(0),null);
var val = cljs.core.nth.call(null,vec__32807,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32807,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32791.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__32800.call(null,cljs.core.rest.call(null,s__32801__$2)));
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
select_options32791 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32791__1.call(this,coll);
case 2:
return select_options32791__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32791.cljs$core$IFn$_invoke$arity$1 = select_options32791__1;
select_options32791.cljs$core$IFn$_invoke$arity$2 = select_options32791__2;
return select_options32791;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32791);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32809 = (function() {
var drop_down32809 = null;
var drop_down32809__2 = (function (name,options){
return drop_down32809.call(null,name,options,null);
});
var drop_down32809__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down32809 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32809__2.call(this,name,options);
case 3:
return drop_down32809__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32809.cljs$core$IFn$_invoke$arity$2 = drop_down32809__2;
drop_down32809.cljs$core$IFn$_invoke$arity$3 = drop_down32809__3;
return drop_down32809;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32809);
/**
* Creates a text area element.
*/
sablono.core.text_area32810 = (function() {
var text_area32810 = null;
var text_area32810__1 = (function (name){
return text_area32810.call(null,name,null);
});
var text_area32810__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area32810 = function(name,value){
switch(arguments.length){
case 1:
return text_area32810__1.call(this,name);
case 2:
return text_area32810__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32810.cljs$core$IFn$_invoke$arity$1 = text_area32810__1;
text_area32810.cljs$core$IFn$_invoke$arity$2 = text_area32810__2;
return text_area32810;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32810);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32811 = (function label32811(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32811);
/**
* Creates a submit button.
*/
sablono.core.submit_button32812 = (function submit_button32812(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32812);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32813 = (function reset_button32813(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32813);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32814 = (function() { 
var form_to32814__delegate = function (p__32815,body){
var vec__32817 = p__32815;
var method = cljs.core.nth.call(null,vec__32817,(0),null);
var action = cljs.core.nth.call(null,vec__32817,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to32814 = function (p__32815,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to32814__delegate.call(this,p__32815,body);};
form_to32814.cljs$lang$maxFixedArity = 1;
form_to32814.cljs$lang$applyTo = (function (arglist__32818){
var p__32815 = cljs.core.first(arglist__32818);
var body = cljs.core.rest(arglist__32818);
return form_to32814__delegate(p__32815,body);
});
form_to32814.cljs$core$IFn$_invoke$arity$variadic = form_to32814__delegate;
return form_to32814;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32814);

//# sourceMappingURL=core.js.map