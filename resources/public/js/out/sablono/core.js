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
var G__71635__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__71634 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__71634,(0),null);
var body = cljs.core.nthnext.call(null,vec__71634,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__71635 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__71635__delegate.call(this,args);};
G__71635.cljs$lang$maxFixedArity = 0;
G__71635.cljs$lang$applyTo = (function (arglist__71636){
var args = cljs.core.seq(arglist__71636);
return G__71635__delegate(args);
});
G__71635.cljs$core$IFn$_invoke$arity$variadic = G__71635__delegate;
return G__71635;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__71641(s__71642){
return (new cljs.core.LazySeq(null,(function (){
var s__71642__$1 = s__71642;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__71642__$1);
if(temp__4126__auto__){
var s__71642__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71642__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__71642__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__71644 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__71643 = (0);
while(true){
if((i__71643 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__71643);
cljs.core.chunk_append.call(null,b__71644,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__71645 = (i__71643 + (1));
i__71643 = G__71645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71644),iter__71641.call(null,cljs.core.chunk_rest.call(null,s__71642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71644),null);
}
} else {
var args = cljs.core.first.call(null,s__71642__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__71641.call(null,cljs.core.rest.call(null,s__71642__$2)));
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
var iter__4378__auto__ = (function iter__71650(s__71651){
return (new cljs.core.LazySeq(null,(function (){
var s__71651__$1 = s__71651;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__71651__$1);
if(temp__4126__auto__){
var s__71651__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71651__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__71651__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__71653 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__71652 = (0);
while(true){
if((i__71652 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__71652);
cljs.core.chunk_append.call(null,b__71653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__71654 = (i__71652 + (1));
i__71652 = G__71654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71653),iter__71650.call(null,cljs.core.chunk_rest.call(null,s__71651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71653),null);
}
} else {
var style = cljs.core.first.call(null,s__71651__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__71650.call(null,cljs.core.rest.call(null,s__71651__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__71655){
var styles = cljs.core.seq(arglist__71655);
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
sablono.core.link_to71656 = (function() { 
var link_to71656__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to71656 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to71656__delegate.call(this,url,content);};
link_to71656.cljs$lang$maxFixedArity = 1;
link_to71656.cljs$lang$applyTo = (function (arglist__71657){
var url = cljs.core.first(arglist__71657);
var content = cljs.core.rest(arglist__71657);
return link_to71656__delegate(url,content);
});
link_to71656.cljs$core$IFn$_invoke$arity$variadic = link_to71656__delegate;
return link_to71656;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to71656);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to71658 = (function() { 
var mail_to71658__delegate = function (e_mail,p__71659){
var vec__71661 = p__71659;
var content = cljs.core.nth.call(null,vec__71661,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to71658 = function (e_mail,var_args){
var p__71659 = null;
if (arguments.length > 1) {
  p__71659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to71658__delegate.call(this,e_mail,p__71659);};
mail_to71658.cljs$lang$maxFixedArity = 1;
mail_to71658.cljs$lang$applyTo = (function (arglist__71662){
var e_mail = cljs.core.first(arglist__71662);
var p__71659 = cljs.core.rest(arglist__71662);
return mail_to71658__delegate(e_mail,p__71659);
});
mail_to71658.cljs$core$IFn$_invoke$arity$variadic = mail_to71658__delegate;
return mail_to71658;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to71658);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list71663 = (function unordered_list71663(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__71668(s__71669){
return (new cljs.core.LazySeq(null,(function (){
var s__71669__$1 = s__71669;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__71669__$1);
if(temp__4126__auto__){
var s__71669__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71669__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__71669__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__71671 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__71670 = (0);
while(true){
if((i__71670 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__71670);
cljs.core.chunk_append.call(null,b__71671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71672 = (i__71670 + (1));
i__71670 = G__71672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71671),iter__71668.call(null,cljs.core.chunk_rest.call(null,s__71669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71671),null);
}
} else {
var x = cljs.core.first.call(null,s__71669__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__71668.call(null,cljs.core.rest.call(null,s__71669__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list71663);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list71673 = (function ordered_list71673(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__71678(s__71679){
return (new cljs.core.LazySeq(null,(function (){
var s__71679__$1 = s__71679;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__71679__$1);
if(temp__4126__auto__){
var s__71679__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71679__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__71679__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__71681 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__71680 = (0);
while(true){
if((i__71680 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__71680);
cljs.core.chunk_append.call(null,b__71681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71682 = (i__71680 + (1));
i__71680 = G__71682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71681),iter__71678.call(null,cljs.core.chunk_rest.call(null,s__71679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71681),null);
}
} else {
var x = cljs.core.first.call(null,s__71679__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__71678.call(null,cljs.core.rest.call(null,s__71679__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list71673);
/**
* Create an image element.
*/
sablono.core.image71683 = (function() {
var image71683 = null;
var image71683__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image71683__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image71683 = function(src,alt){
switch(arguments.length){
case 1:
return image71683__1.call(this,src);
case 2:
return image71683__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image71683.cljs$core$IFn$_invoke$arity$1 = image71683__1;
image71683.cljs$core$IFn$_invoke$arity$2 = image71683__2;
return image71683;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image71683);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__71684_SHARP_,p2__71685_SHARP_){
return [cljs.core.str(p1__71684_SHARP_),cljs.core.str("["),cljs.core.str(p2__71685_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__71686_SHARP_,p2__71687_SHARP_){
return [cljs.core.str(p1__71686_SHARP_),cljs.core.str("-"),cljs.core.str(p2__71687_SHARP_)].join('');
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
sablono.core.color_field71688 = (function() {
var color_field71688 = null;
var color_field71688__1 = (function (name__10377__auto__){
return color_field71688.call(null,name__10377__auto__,null);
});
var color_field71688__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field71688 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field71688__1.call(this,name__10377__auto__);
case 2:
return color_field71688__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field71688.cljs$core$IFn$_invoke$arity$1 = color_field71688__1;
color_field71688.cljs$core$IFn$_invoke$arity$2 = color_field71688__2;
return color_field71688;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field71688);

/**
* Creates a date input field.
*/
sablono.core.date_field71689 = (function() {
var date_field71689 = null;
var date_field71689__1 = (function (name__10377__auto__){
return date_field71689.call(null,name__10377__auto__,null);
});
var date_field71689__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field71689 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field71689__1.call(this,name__10377__auto__);
case 2:
return date_field71689__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field71689.cljs$core$IFn$_invoke$arity$1 = date_field71689__1;
date_field71689.cljs$core$IFn$_invoke$arity$2 = date_field71689__2;
return date_field71689;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field71689);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field71690 = (function() {
var datetime_field71690 = null;
var datetime_field71690__1 = (function (name__10377__auto__){
return datetime_field71690.call(null,name__10377__auto__,null);
});
var datetime_field71690__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field71690 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field71690__1.call(this,name__10377__auto__);
case 2:
return datetime_field71690__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field71690.cljs$core$IFn$_invoke$arity$1 = datetime_field71690__1;
datetime_field71690.cljs$core$IFn$_invoke$arity$2 = datetime_field71690__2;
return datetime_field71690;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field71690);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field71691 = (function() {
var datetime_local_field71691 = null;
var datetime_local_field71691__1 = (function (name__10377__auto__){
return datetime_local_field71691.call(null,name__10377__auto__,null);
});
var datetime_local_field71691__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field71691 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field71691__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field71691__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field71691.cljs$core$IFn$_invoke$arity$1 = datetime_local_field71691__1;
datetime_local_field71691.cljs$core$IFn$_invoke$arity$2 = datetime_local_field71691__2;
return datetime_local_field71691;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field71691);

/**
* Creates a email input field.
*/
sablono.core.email_field71692 = (function() {
var email_field71692 = null;
var email_field71692__1 = (function (name__10377__auto__){
return email_field71692.call(null,name__10377__auto__,null);
});
var email_field71692__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field71692 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field71692__1.call(this,name__10377__auto__);
case 2:
return email_field71692__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field71692.cljs$core$IFn$_invoke$arity$1 = email_field71692__1;
email_field71692.cljs$core$IFn$_invoke$arity$2 = email_field71692__2;
return email_field71692;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field71692);

/**
* Creates a file input field.
*/
sablono.core.file_field71693 = (function() {
var file_field71693 = null;
var file_field71693__1 = (function (name__10377__auto__){
return file_field71693.call(null,name__10377__auto__,null);
});
var file_field71693__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field71693 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field71693__1.call(this,name__10377__auto__);
case 2:
return file_field71693__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field71693.cljs$core$IFn$_invoke$arity$1 = file_field71693__1;
file_field71693.cljs$core$IFn$_invoke$arity$2 = file_field71693__2;
return file_field71693;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field71693);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field71694 = (function() {
var hidden_field71694 = null;
var hidden_field71694__1 = (function (name__10377__auto__){
return hidden_field71694.call(null,name__10377__auto__,null);
});
var hidden_field71694__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field71694 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field71694__1.call(this,name__10377__auto__);
case 2:
return hidden_field71694__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field71694.cljs$core$IFn$_invoke$arity$1 = hidden_field71694__1;
hidden_field71694.cljs$core$IFn$_invoke$arity$2 = hidden_field71694__2;
return hidden_field71694;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field71694);

/**
* Creates a month input field.
*/
sablono.core.month_field71695 = (function() {
var month_field71695 = null;
var month_field71695__1 = (function (name__10377__auto__){
return month_field71695.call(null,name__10377__auto__,null);
});
var month_field71695__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field71695 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field71695__1.call(this,name__10377__auto__);
case 2:
return month_field71695__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field71695.cljs$core$IFn$_invoke$arity$1 = month_field71695__1;
month_field71695.cljs$core$IFn$_invoke$arity$2 = month_field71695__2;
return month_field71695;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field71695);

/**
* Creates a number input field.
*/
sablono.core.number_field71696 = (function() {
var number_field71696 = null;
var number_field71696__1 = (function (name__10377__auto__){
return number_field71696.call(null,name__10377__auto__,null);
});
var number_field71696__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field71696 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field71696__1.call(this,name__10377__auto__);
case 2:
return number_field71696__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field71696.cljs$core$IFn$_invoke$arity$1 = number_field71696__1;
number_field71696.cljs$core$IFn$_invoke$arity$2 = number_field71696__2;
return number_field71696;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field71696);

/**
* Creates a password input field.
*/
sablono.core.password_field71697 = (function() {
var password_field71697 = null;
var password_field71697__1 = (function (name__10377__auto__){
return password_field71697.call(null,name__10377__auto__,null);
});
var password_field71697__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field71697 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field71697__1.call(this,name__10377__auto__);
case 2:
return password_field71697__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field71697.cljs$core$IFn$_invoke$arity$1 = password_field71697__1;
password_field71697.cljs$core$IFn$_invoke$arity$2 = password_field71697__2;
return password_field71697;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field71697);

/**
* Creates a range input field.
*/
sablono.core.range_field71698 = (function() {
var range_field71698 = null;
var range_field71698__1 = (function (name__10377__auto__){
return range_field71698.call(null,name__10377__auto__,null);
});
var range_field71698__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field71698 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field71698__1.call(this,name__10377__auto__);
case 2:
return range_field71698__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field71698.cljs$core$IFn$_invoke$arity$1 = range_field71698__1;
range_field71698.cljs$core$IFn$_invoke$arity$2 = range_field71698__2;
return range_field71698;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field71698);

/**
* Creates a search input field.
*/
sablono.core.search_field71699 = (function() {
var search_field71699 = null;
var search_field71699__1 = (function (name__10377__auto__){
return search_field71699.call(null,name__10377__auto__,null);
});
var search_field71699__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field71699 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field71699__1.call(this,name__10377__auto__);
case 2:
return search_field71699__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field71699.cljs$core$IFn$_invoke$arity$1 = search_field71699__1;
search_field71699.cljs$core$IFn$_invoke$arity$2 = search_field71699__2;
return search_field71699;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field71699);

/**
* Creates a tel input field.
*/
sablono.core.tel_field71700 = (function() {
var tel_field71700 = null;
var tel_field71700__1 = (function (name__10377__auto__){
return tel_field71700.call(null,name__10377__auto__,null);
});
var tel_field71700__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field71700 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field71700__1.call(this,name__10377__auto__);
case 2:
return tel_field71700__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field71700.cljs$core$IFn$_invoke$arity$1 = tel_field71700__1;
tel_field71700.cljs$core$IFn$_invoke$arity$2 = tel_field71700__2;
return tel_field71700;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field71700);

/**
* Creates a text input field.
*/
sablono.core.text_field71701 = (function() {
var text_field71701 = null;
var text_field71701__1 = (function (name__10377__auto__){
return text_field71701.call(null,name__10377__auto__,null);
});
var text_field71701__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field71701 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field71701__1.call(this,name__10377__auto__);
case 2:
return text_field71701__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field71701.cljs$core$IFn$_invoke$arity$1 = text_field71701__1;
text_field71701.cljs$core$IFn$_invoke$arity$2 = text_field71701__2;
return text_field71701;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field71701);

/**
* Creates a time input field.
*/
sablono.core.time_field71702 = (function() {
var time_field71702 = null;
var time_field71702__1 = (function (name__10377__auto__){
return time_field71702.call(null,name__10377__auto__,null);
});
var time_field71702__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field71702 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field71702__1.call(this,name__10377__auto__);
case 2:
return time_field71702__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field71702.cljs$core$IFn$_invoke$arity$1 = time_field71702__1;
time_field71702.cljs$core$IFn$_invoke$arity$2 = time_field71702__2;
return time_field71702;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field71702);

/**
* Creates a url input field.
*/
sablono.core.url_field71703 = (function() {
var url_field71703 = null;
var url_field71703__1 = (function (name__10377__auto__){
return url_field71703.call(null,name__10377__auto__,null);
});
var url_field71703__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field71703 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field71703__1.call(this,name__10377__auto__);
case 2:
return url_field71703__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field71703.cljs$core$IFn$_invoke$arity$1 = url_field71703__1;
url_field71703.cljs$core$IFn$_invoke$arity$2 = url_field71703__2;
return url_field71703;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field71703);

/**
* Creates a week input field.
*/
sablono.core.week_field71704 = (function() {
var week_field71704 = null;
var week_field71704__1 = (function (name__10377__auto__){
return week_field71704.call(null,name__10377__auto__,null);
});
var week_field71704__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field71704 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field71704__1.call(this,name__10377__auto__);
case 2:
return week_field71704__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field71704.cljs$core$IFn$_invoke$arity$1 = week_field71704__1;
week_field71704.cljs$core$IFn$_invoke$arity$2 = week_field71704__2;
return week_field71704;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field71704);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box71705 = (function() {
var check_box71705 = null;
var check_box71705__1 = (function (name){
return check_box71705.call(null,name,null);
});
var check_box71705__2 = (function (name,checked_QMARK_){
return check_box71705.call(null,name,checked_QMARK_,"true");
});
var check_box71705__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box71705 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box71705__1.call(this,name);
case 2:
return check_box71705__2.call(this,name,checked_QMARK_);
case 3:
return check_box71705__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box71705.cljs$core$IFn$_invoke$arity$1 = check_box71705__1;
check_box71705.cljs$core$IFn$_invoke$arity$2 = check_box71705__2;
check_box71705.cljs$core$IFn$_invoke$arity$3 = check_box71705__3;
return check_box71705;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box71705);
/**
* Creates a radio button.
*/
sablono.core.radio_button71706 = (function() {
var radio_button71706 = null;
var radio_button71706__1 = (function (group){
return radio_button71706.call(null,group,null);
});
var radio_button71706__2 = (function (group,checked_QMARK_){
return radio_button71706.call(null,group,checked_QMARK_,"true");
});
var radio_button71706__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button71706 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button71706__1.call(this,group);
case 2:
return radio_button71706__2.call(this,group,checked_QMARK_);
case 3:
return radio_button71706__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button71706.cljs$core$IFn$_invoke$arity$1 = radio_button71706__1;
radio_button71706.cljs$core$IFn$_invoke$arity$2 = radio_button71706__2;
radio_button71706.cljs$core$IFn$_invoke$arity$3 = radio_button71706__3;
return radio_button71706;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button71706);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options71707 = (function() {
var select_options71707 = null;
var select_options71707__1 = (function (coll){
return select_options71707.call(null,coll,null);
});
var select_options71707__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__71716(s__71717){
return (new cljs.core.LazySeq(null,(function (){
var s__71717__$1 = s__71717;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__71717__$1);
if(temp__4126__auto__){
var s__71717__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71717__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__71717__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__71719 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__71718 = (0);
while(true){
if((i__71718 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__71718);
cljs.core.chunk_append.call(null,b__71719,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__71722 = x;
var text = cljs.core.nth.call(null,vec__71722,(0),null);
var val = cljs.core.nth.call(null,vec__71722,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__71722,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options71707.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__71724 = (i__71718 + (1));
i__71718 = G__71724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71719),iter__71716.call(null,cljs.core.chunk_rest.call(null,s__71717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71719),null);
}
} else {
var x = cljs.core.first.call(null,s__71717__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__71723 = x;
var text = cljs.core.nth.call(null,vec__71723,(0),null);
var val = cljs.core.nth.call(null,vec__71723,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__71723,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options71707.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__71716.call(null,cljs.core.rest.call(null,s__71717__$2)));
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
select_options71707 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options71707__1.call(this,coll);
case 2:
return select_options71707__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options71707.cljs$core$IFn$_invoke$arity$1 = select_options71707__1;
select_options71707.cljs$core$IFn$_invoke$arity$2 = select_options71707__2;
return select_options71707;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options71707);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down71725 = (function() {
var drop_down71725 = null;
var drop_down71725__2 = (function (name,options){
return drop_down71725.call(null,name,options,null);
});
var drop_down71725__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down71725 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down71725__2.call(this,name,options);
case 3:
return drop_down71725__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down71725.cljs$core$IFn$_invoke$arity$2 = drop_down71725__2;
drop_down71725.cljs$core$IFn$_invoke$arity$3 = drop_down71725__3;
return drop_down71725;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down71725);
/**
* Creates a text area element.
*/
sablono.core.text_area71726 = (function() {
var text_area71726 = null;
var text_area71726__1 = (function (name){
return text_area71726.call(null,name,null);
});
var text_area71726__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area71726 = function(name,value){
switch(arguments.length){
case 1:
return text_area71726__1.call(this,name);
case 2:
return text_area71726__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area71726.cljs$core$IFn$_invoke$arity$1 = text_area71726__1;
text_area71726.cljs$core$IFn$_invoke$arity$2 = text_area71726__2;
return text_area71726;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area71726);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label71727 = (function label71727(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label71727);
/**
* Creates a submit button.
*/
sablono.core.submit_button71728 = (function submit_button71728(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button71728);
/**
* Creates a form reset button.
*/
sablono.core.reset_button71729 = (function reset_button71729(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button71729);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to71730 = (function() { 
var form_to71730__delegate = function (p__71731,body){
var vec__71733 = p__71731;
var method = cljs.core.nth.call(null,vec__71733,(0),null);
var action = cljs.core.nth.call(null,vec__71733,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to71730 = function (p__71731,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to71730__delegate.call(this,p__71731,body);};
form_to71730.cljs$lang$maxFixedArity = 1;
form_to71730.cljs$lang$applyTo = (function (arglist__71734){
var p__71731 = cljs.core.first(arglist__71734);
var body = cljs.core.rest(arglist__71734);
return form_to71730__delegate(p__71731,body);
});
form_to71730.cljs$core$IFn$_invoke$arity$variadic = form_to71730__delegate;
return form_to71730;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to71730);

//# sourceMappingURL=core.js.map