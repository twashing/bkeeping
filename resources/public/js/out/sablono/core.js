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
var G__10692__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10691 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__10691,(0),null);
var body = cljs.core.nthnext.call(null,vec__10691,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10692 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10692__delegate.call(this,args);};
G__10692.cljs$lang$maxFixedArity = 0;
G__10692.cljs$lang$applyTo = (function (arglist__10693){
var args = cljs.core.seq(arglist__10693);
return G__10692__delegate(args);
});
G__10692.cljs$core$IFn$_invoke$arity$variadic = G__10692__delegate;
return G__10692;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__10698(s__10699){
return (new cljs.core.LazySeq(null,(function (){
var s__10699__$1 = s__10699;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10699__$1);
if(temp__4126__auto__){
var s__10699__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10699__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10699__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10701 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10700 = (0);
while(true){
if((i__10700 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__10700);
cljs.core.chunk_append.call(null,b__10701,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10702 = (i__10700 + (1));
i__10700 = G__10702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10701),iter__10698.call(null,cljs.core.chunk_rest.call(null,s__10699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10701),null);
}
} else {
var args = cljs.core.first.call(null,s__10699__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__10698.call(null,cljs.core.rest.call(null,s__10699__$2)));
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
var iter__4378__auto__ = (function iter__10707(s__10708){
return (new cljs.core.LazySeq(null,(function (){
var s__10708__$1 = s__10708;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10708__$1);
if(temp__4126__auto__){
var s__10708__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10708__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10708__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10710 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10709 = (0);
while(true){
if((i__10709 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__10709);
cljs.core.chunk_append.call(null,b__10710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10711 = (i__10709 + (1));
i__10709 = G__10711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10710),iter__10707.call(null,cljs.core.chunk_rest.call(null,s__10708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10710),null);
}
} else {
var style = cljs.core.first.call(null,s__10708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__10707.call(null,cljs.core.rest.call(null,s__10708__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__10712){
var styles = cljs.core.seq(arglist__10712);
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
sablono.core.link_to10713 = (function() { 
var link_to10713__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to10713 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to10713__delegate.call(this,url,content);};
link_to10713.cljs$lang$maxFixedArity = 1;
link_to10713.cljs$lang$applyTo = (function (arglist__10714){
var url = cljs.core.first(arglist__10714);
var content = cljs.core.rest(arglist__10714);
return link_to10713__delegate(url,content);
});
link_to10713.cljs$core$IFn$_invoke$arity$variadic = link_to10713__delegate;
return link_to10713;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10713);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to10715 = (function() { 
var mail_to10715__delegate = function (e_mail,p__10716){
var vec__10718 = p__10716;
var content = cljs.core.nth.call(null,vec__10718,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to10715 = function (e_mail,var_args){
var p__10716 = null;
if (arguments.length > 1) {
  p__10716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to10715__delegate.call(this,e_mail,p__10716);};
mail_to10715.cljs$lang$maxFixedArity = 1;
mail_to10715.cljs$lang$applyTo = (function (arglist__10719){
var e_mail = cljs.core.first(arglist__10719);
var p__10716 = cljs.core.rest(arglist__10719);
return mail_to10715__delegate(e_mail,p__10716);
});
mail_to10715.cljs$core$IFn$_invoke$arity$variadic = mail_to10715__delegate;
return mail_to10715;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10715);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list10720 = (function unordered_list10720(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__10725(s__10726){
return (new cljs.core.LazySeq(null,(function (){
var s__10726__$1 = s__10726;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10726__$1);
if(temp__4126__auto__){
var s__10726__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10726__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10726__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10728 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10727 = (0);
while(true){
if((i__10727 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10727);
cljs.core.chunk_append.call(null,b__10728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10729 = (i__10727 + (1));
i__10727 = G__10729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10728),iter__10725.call(null,cljs.core.chunk_rest.call(null,s__10726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10728),null);
}
} else {
var x = cljs.core.first.call(null,s__10726__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__10725.call(null,cljs.core.rest.call(null,s__10726__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10720);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list10730 = (function ordered_list10730(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__10735(s__10736){
return (new cljs.core.LazySeq(null,(function (){
var s__10736__$1 = s__10736;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10736__$1);
if(temp__4126__auto__){
var s__10736__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10736__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10736__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10738 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10737 = (0);
while(true){
if((i__10737 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10737);
cljs.core.chunk_append.call(null,b__10738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10739 = (i__10737 + (1));
i__10737 = G__10739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10738),iter__10735.call(null,cljs.core.chunk_rest.call(null,s__10736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10738),null);
}
} else {
var x = cljs.core.first.call(null,s__10736__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__10735.call(null,cljs.core.rest.call(null,s__10736__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10730);
/**
* Create an image element.
*/
sablono.core.image10740 = (function() {
var image10740 = null;
var image10740__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image10740__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image10740 = function(src,alt){
switch(arguments.length){
case 1:
return image10740__1.call(this,src);
case 2:
return image10740__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image10740.cljs$core$IFn$_invoke$arity$1 = image10740__1;
image10740.cljs$core$IFn$_invoke$arity$2 = image10740__2;
return image10740;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10740);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__10741_SHARP_,p2__10742_SHARP_){
return [cljs.core.str(p1__10741_SHARP_),cljs.core.str("["),cljs.core.str(p2__10742_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__10743_SHARP_,p2__10744_SHARP_){
return [cljs.core.str(p1__10743_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10744_SHARP_)].join('');
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
sablono.core.color_field10745 = (function() {
var color_field10745 = null;
var color_field10745__1 = (function (name__8505__auto__){
return color_field10745.call(null,name__8505__auto__,null);
});
var color_field10745__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__8505__auto__,value__8506__auto__);
});
color_field10745 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return color_field10745__1.call(this,name__8505__auto__);
case 2:
return color_field10745__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field10745.cljs$core$IFn$_invoke$arity$1 = color_field10745__1;
color_field10745.cljs$core$IFn$_invoke$arity$2 = color_field10745__2;
return color_field10745;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10745);

/**
* Creates a date input field.
*/
sablono.core.date_field10746 = (function() {
var date_field10746 = null;
var date_field10746__1 = (function (name__8505__auto__){
return date_field10746.call(null,name__8505__auto__,null);
});
var date_field10746__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__8505__auto__,value__8506__auto__);
});
date_field10746 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return date_field10746__1.call(this,name__8505__auto__);
case 2:
return date_field10746__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field10746.cljs$core$IFn$_invoke$arity$1 = date_field10746__1;
date_field10746.cljs$core$IFn$_invoke$arity$2 = date_field10746__2;
return date_field10746;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10746);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field10747 = (function() {
var datetime_field10747 = null;
var datetime_field10747__1 = (function (name__8505__auto__){
return datetime_field10747.call(null,name__8505__auto__,null);
});
var datetime_field10747__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__8505__auto__,value__8506__auto__);
});
datetime_field10747 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return datetime_field10747__1.call(this,name__8505__auto__);
case 2:
return datetime_field10747__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field10747.cljs$core$IFn$_invoke$arity$1 = datetime_field10747__1;
datetime_field10747.cljs$core$IFn$_invoke$arity$2 = datetime_field10747__2;
return datetime_field10747;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10747);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field10748 = (function() {
var datetime_local_field10748 = null;
var datetime_local_field10748__1 = (function (name__8505__auto__){
return datetime_local_field10748.call(null,name__8505__auto__,null);
});
var datetime_local_field10748__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__8505__auto__,value__8506__auto__);
});
datetime_local_field10748 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return datetime_local_field10748__1.call(this,name__8505__auto__);
case 2:
return datetime_local_field10748__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field10748.cljs$core$IFn$_invoke$arity$1 = datetime_local_field10748__1;
datetime_local_field10748.cljs$core$IFn$_invoke$arity$2 = datetime_local_field10748__2;
return datetime_local_field10748;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10748);

/**
* Creates a email input field.
*/
sablono.core.email_field10749 = (function() {
var email_field10749 = null;
var email_field10749__1 = (function (name__8505__auto__){
return email_field10749.call(null,name__8505__auto__,null);
});
var email_field10749__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__8505__auto__,value__8506__auto__);
});
email_field10749 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return email_field10749__1.call(this,name__8505__auto__);
case 2:
return email_field10749__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field10749.cljs$core$IFn$_invoke$arity$1 = email_field10749__1;
email_field10749.cljs$core$IFn$_invoke$arity$2 = email_field10749__2;
return email_field10749;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10749);

/**
* Creates a file input field.
*/
sablono.core.file_field10750 = (function() {
var file_field10750 = null;
var file_field10750__1 = (function (name__8505__auto__){
return file_field10750.call(null,name__8505__auto__,null);
});
var file_field10750__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__8505__auto__,value__8506__auto__);
});
file_field10750 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return file_field10750__1.call(this,name__8505__auto__);
case 2:
return file_field10750__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field10750.cljs$core$IFn$_invoke$arity$1 = file_field10750__1;
file_field10750.cljs$core$IFn$_invoke$arity$2 = file_field10750__2;
return file_field10750;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10750);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field10751 = (function() {
var hidden_field10751 = null;
var hidden_field10751__1 = (function (name__8505__auto__){
return hidden_field10751.call(null,name__8505__auto__,null);
});
var hidden_field10751__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__8505__auto__,value__8506__auto__);
});
hidden_field10751 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return hidden_field10751__1.call(this,name__8505__auto__);
case 2:
return hidden_field10751__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field10751.cljs$core$IFn$_invoke$arity$1 = hidden_field10751__1;
hidden_field10751.cljs$core$IFn$_invoke$arity$2 = hidden_field10751__2;
return hidden_field10751;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10751);

/**
* Creates a month input field.
*/
sablono.core.month_field10752 = (function() {
var month_field10752 = null;
var month_field10752__1 = (function (name__8505__auto__){
return month_field10752.call(null,name__8505__auto__,null);
});
var month_field10752__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__8505__auto__,value__8506__auto__);
});
month_field10752 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return month_field10752__1.call(this,name__8505__auto__);
case 2:
return month_field10752__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field10752.cljs$core$IFn$_invoke$arity$1 = month_field10752__1;
month_field10752.cljs$core$IFn$_invoke$arity$2 = month_field10752__2;
return month_field10752;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10752);

/**
* Creates a number input field.
*/
sablono.core.number_field10753 = (function() {
var number_field10753 = null;
var number_field10753__1 = (function (name__8505__auto__){
return number_field10753.call(null,name__8505__auto__,null);
});
var number_field10753__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__8505__auto__,value__8506__auto__);
});
number_field10753 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return number_field10753__1.call(this,name__8505__auto__);
case 2:
return number_field10753__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field10753.cljs$core$IFn$_invoke$arity$1 = number_field10753__1;
number_field10753.cljs$core$IFn$_invoke$arity$2 = number_field10753__2;
return number_field10753;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10753);

/**
* Creates a password input field.
*/
sablono.core.password_field10754 = (function() {
var password_field10754 = null;
var password_field10754__1 = (function (name__8505__auto__){
return password_field10754.call(null,name__8505__auto__,null);
});
var password_field10754__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__8505__auto__,value__8506__auto__);
});
password_field10754 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return password_field10754__1.call(this,name__8505__auto__);
case 2:
return password_field10754__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field10754.cljs$core$IFn$_invoke$arity$1 = password_field10754__1;
password_field10754.cljs$core$IFn$_invoke$arity$2 = password_field10754__2;
return password_field10754;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10754);

/**
* Creates a range input field.
*/
sablono.core.range_field10755 = (function() {
var range_field10755 = null;
var range_field10755__1 = (function (name__8505__auto__){
return range_field10755.call(null,name__8505__auto__,null);
});
var range_field10755__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__8505__auto__,value__8506__auto__);
});
range_field10755 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return range_field10755__1.call(this,name__8505__auto__);
case 2:
return range_field10755__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field10755.cljs$core$IFn$_invoke$arity$1 = range_field10755__1;
range_field10755.cljs$core$IFn$_invoke$arity$2 = range_field10755__2;
return range_field10755;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10755);

/**
* Creates a search input field.
*/
sablono.core.search_field10756 = (function() {
var search_field10756 = null;
var search_field10756__1 = (function (name__8505__auto__){
return search_field10756.call(null,name__8505__auto__,null);
});
var search_field10756__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__8505__auto__,value__8506__auto__);
});
search_field10756 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return search_field10756__1.call(this,name__8505__auto__);
case 2:
return search_field10756__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field10756.cljs$core$IFn$_invoke$arity$1 = search_field10756__1;
search_field10756.cljs$core$IFn$_invoke$arity$2 = search_field10756__2;
return search_field10756;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10756);

/**
* Creates a tel input field.
*/
sablono.core.tel_field10757 = (function() {
var tel_field10757 = null;
var tel_field10757__1 = (function (name__8505__auto__){
return tel_field10757.call(null,name__8505__auto__,null);
});
var tel_field10757__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__8505__auto__,value__8506__auto__);
});
tel_field10757 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return tel_field10757__1.call(this,name__8505__auto__);
case 2:
return tel_field10757__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field10757.cljs$core$IFn$_invoke$arity$1 = tel_field10757__1;
tel_field10757.cljs$core$IFn$_invoke$arity$2 = tel_field10757__2;
return tel_field10757;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10757);

/**
* Creates a text input field.
*/
sablono.core.text_field10758 = (function() {
var text_field10758 = null;
var text_field10758__1 = (function (name__8505__auto__){
return text_field10758.call(null,name__8505__auto__,null);
});
var text_field10758__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__8505__auto__,value__8506__auto__);
});
text_field10758 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return text_field10758__1.call(this,name__8505__auto__);
case 2:
return text_field10758__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field10758.cljs$core$IFn$_invoke$arity$1 = text_field10758__1;
text_field10758.cljs$core$IFn$_invoke$arity$2 = text_field10758__2;
return text_field10758;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10758);

/**
* Creates a time input field.
*/
sablono.core.time_field10759 = (function() {
var time_field10759 = null;
var time_field10759__1 = (function (name__8505__auto__){
return time_field10759.call(null,name__8505__auto__,null);
});
var time_field10759__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__8505__auto__,value__8506__auto__);
});
time_field10759 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return time_field10759__1.call(this,name__8505__auto__);
case 2:
return time_field10759__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field10759.cljs$core$IFn$_invoke$arity$1 = time_field10759__1;
time_field10759.cljs$core$IFn$_invoke$arity$2 = time_field10759__2;
return time_field10759;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10759);

/**
* Creates a url input field.
*/
sablono.core.url_field10760 = (function() {
var url_field10760 = null;
var url_field10760__1 = (function (name__8505__auto__){
return url_field10760.call(null,name__8505__auto__,null);
});
var url_field10760__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__8505__auto__,value__8506__auto__);
});
url_field10760 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return url_field10760__1.call(this,name__8505__auto__);
case 2:
return url_field10760__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field10760.cljs$core$IFn$_invoke$arity$1 = url_field10760__1;
url_field10760.cljs$core$IFn$_invoke$arity$2 = url_field10760__2;
return url_field10760;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10760);

/**
* Creates a week input field.
*/
sablono.core.week_field10761 = (function() {
var week_field10761 = null;
var week_field10761__1 = (function (name__8505__auto__){
return week_field10761.call(null,name__8505__auto__,null);
});
var week_field10761__2 = (function (name__8505__auto__,value__8506__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__8505__auto__,value__8506__auto__);
});
week_field10761 = function(name__8505__auto__,value__8506__auto__){
switch(arguments.length){
case 1:
return week_field10761__1.call(this,name__8505__auto__);
case 2:
return week_field10761__2.call(this,name__8505__auto__,value__8506__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field10761.cljs$core$IFn$_invoke$arity$1 = week_field10761__1;
week_field10761.cljs$core$IFn$_invoke$arity$2 = week_field10761__2;
return week_field10761;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10761);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box10762 = (function() {
var check_box10762 = null;
var check_box10762__1 = (function (name){
return check_box10762.call(null,name,null);
});
var check_box10762__2 = (function (name,checked_QMARK_){
return check_box10762.call(null,name,checked_QMARK_,"true");
});
var check_box10762__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box10762 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box10762__1.call(this,name);
case 2:
return check_box10762__2.call(this,name,checked_QMARK_);
case 3:
return check_box10762__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box10762.cljs$core$IFn$_invoke$arity$1 = check_box10762__1;
check_box10762.cljs$core$IFn$_invoke$arity$2 = check_box10762__2;
check_box10762.cljs$core$IFn$_invoke$arity$3 = check_box10762__3;
return check_box10762;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10762);
/**
* Creates a radio button.
*/
sablono.core.radio_button10763 = (function() {
var radio_button10763 = null;
var radio_button10763__1 = (function (group){
return radio_button10763.call(null,group,null);
});
var radio_button10763__2 = (function (group,checked_QMARK_){
return radio_button10763.call(null,group,checked_QMARK_,"true");
});
var radio_button10763__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button10763 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button10763__1.call(this,group);
case 2:
return radio_button10763__2.call(this,group,checked_QMARK_);
case 3:
return radio_button10763__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button10763.cljs$core$IFn$_invoke$arity$1 = radio_button10763__1;
radio_button10763.cljs$core$IFn$_invoke$arity$2 = radio_button10763__2;
radio_button10763.cljs$core$IFn$_invoke$arity$3 = radio_button10763__3;
return radio_button10763;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10763);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options10764 = (function() {
var select_options10764 = null;
var select_options10764__1 = (function (coll){
return select_options10764.call(null,coll,null);
});
var select_options10764__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__10773(s__10774){
return (new cljs.core.LazySeq(null,(function (){
var s__10774__$1 = s__10774;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10774__$1);
if(temp__4126__auto__){
var s__10774__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10774__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10774__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10776 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10775 = (0);
while(true){
if((i__10775 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10775);
cljs.core.chunk_append.call(null,b__10776,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10779 = x;
var text = cljs.core.nth.call(null,vec__10779,(0),null);
var val = cljs.core.nth.call(null,vec__10779,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10779,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options10764.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__10781 = (i__10775 + (1));
i__10775 = G__10781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10776),iter__10773.call(null,cljs.core.chunk_rest.call(null,s__10774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10776),null);
}
} else {
var x = cljs.core.first.call(null,s__10774__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10780 = x;
var text = cljs.core.nth.call(null,vec__10780,(0),null);
var val = cljs.core.nth.call(null,vec__10780,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10780,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options10764.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__10773.call(null,cljs.core.rest.call(null,s__10774__$2)));
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
select_options10764 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options10764__1.call(this,coll);
case 2:
return select_options10764__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options10764.cljs$core$IFn$_invoke$arity$1 = select_options10764__1;
select_options10764.cljs$core$IFn$_invoke$arity$2 = select_options10764__2;
return select_options10764;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10764);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down10782 = (function() {
var drop_down10782 = null;
var drop_down10782__2 = (function (name,options){
return drop_down10782.call(null,name,options,null);
});
var drop_down10782__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down10782 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down10782__2.call(this,name,options);
case 3:
return drop_down10782__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down10782.cljs$core$IFn$_invoke$arity$2 = drop_down10782__2;
drop_down10782.cljs$core$IFn$_invoke$arity$3 = drop_down10782__3;
return drop_down10782;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10782);
/**
* Creates a text area element.
*/
sablono.core.text_area10783 = (function() {
var text_area10783 = null;
var text_area10783__1 = (function (name){
return text_area10783.call(null,name,null);
});
var text_area10783__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area10783 = function(name,value){
switch(arguments.length){
case 1:
return text_area10783__1.call(this,name);
case 2:
return text_area10783__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area10783.cljs$core$IFn$_invoke$arity$1 = text_area10783__1;
text_area10783.cljs$core$IFn$_invoke$arity$2 = text_area10783__2;
return text_area10783;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10783);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label10784 = (function label10784(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10784);
/**
* Creates a submit button.
*/
sablono.core.submit_button10785 = (function submit_button10785(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10785);
/**
* Creates a form reset button.
*/
sablono.core.reset_button10786 = (function reset_button10786(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10786);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to10787 = (function() { 
var form_to10787__delegate = function (p__10788,body){
var vec__10790 = p__10788;
var method = cljs.core.nth.call(null,vec__10790,(0),null);
var action = cljs.core.nth.call(null,vec__10790,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to10787 = function (p__10788,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to10787__delegate.call(this,p__10788,body);};
form_to10787.cljs$lang$maxFixedArity = 1;
form_to10787.cljs$lang$applyTo = (function (arglist__10791){
var p__10788 = cljs.core.first(arglist__10791);
var body = cljs.core.rest(arglist__10791);
return form_to10787__delegate(p__10788,body);
});
form_to10787.cljs$core$IFn$_invoke$arity$variadic = form_to10787__delegate;
return form_to10787;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10787);

//# sourceMappingURL=core.js.map