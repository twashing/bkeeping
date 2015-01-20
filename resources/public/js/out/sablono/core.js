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
var G__11674__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11673 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11673,(0),null);
var body = cljs.core.nthnext.call(null,vec__11673,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11674 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11674__delegate.call(this,args);};
G__11674.cljs$lang$maxFixedArity = 0;
G__11674.cljs$lang$applyTo = (function (arglist__11675){
var args = cljs.core.seq(arglist__11675);
return G__11674__delegate(args);
});
G__11674.cljs$core$IFn$_invoke$arity$variadic = G__11674__delegate;
return G__11674;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__11680(s__11681){
return (new cljs.core.LazySeq(null,(function (){
var s__11681__$1 = s__11681;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11681__$1);
if(temp__4126__auto__){
var s__11681__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11681__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11681__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11683 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11682 = (0);
while(true){
if((i__11682 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__11682);
cljs.core.chunk_append.call(null,b__11683,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11684 = (i__11682 + (1));
i__11682 = G__11684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11683),iter__11680.call(null,cljs.core.chunk_rest.call(null,s__11681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11683),null);
}
} else {
var args = cljs.core.first.call(null,s__11681__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__11680.call(null,cljs.core.rest.call(null,s__11681__$2)));
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
var iter__4378__auto__ = (function iter__11689(s__11690){
return (new cljs.core.LazySeq(null,(function (){
var s__11690__$1 = s__11690;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11690__$1);
if(temp__4126__auto__){
var s__11690__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11690__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11690__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11692 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11691 = (0);
while(true){
if((i__11691 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__11691);
cljs.core.chunk_append.call(null,b__11692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11693 = (i__11691 + (1));
i__11691 = G__11693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11692),iter__11689.call(null,cljs.core.chunk_rest.call(null,s__11690__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11692),null);
}
} else {
var style = cljs.core.first.call(null,s__11690__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__11689.call(null,cljs.core.rest.call(null,s__11690__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__11694){
var styles = cljs.core.seq(arglist__11694);
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
sablono.core.link_to11695 = (function() { 
var link_to11695__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to11695 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to11695__delegate.call(this,url,content);};
link_to11695.cljs$lang$maxFixedArity = 1;
link_to11695.cljs$lang$applyTo = (function (arglist__11696){
var url = cljs.core.first(arglist__11696);
var content = cljs.core.rest(arglist__11696);
return link_to11695__delegate(url,content);
});
link_to11695.cljs$core$IFn$_invoke$arity$variadic = link_to11695__delegate;
return link_to11695;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11695);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to11697 = (function() { 
var mail_to11697__delegate = function (e_mail,p__11698){
var vec__11700 = p__11698;
var content = cljs.core.nth.call(null,vec__11700,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to11697 = function (e_mail,var_args){
var p__11698 = null;
if (arguments.length > 1) {
  p__11698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to11697__delegate.call(this,e_mail,p__11698);};
mail_to11697.cljs$lang$maxFixedArity = 1;
mail_to11697.cljs$lang$applyTo = (function (arglist__11701){
var e_mail = cljs.core.first(arglist__11701);
var p__11698 = cljs.core.rest(arglist__11701);
return mail_to11697__delegate(e_mail,p__11698);
});
mail_to11697.cljs$core$IFn$_invoke$arity$variadic = mail_to11697__delegate;
return mail_to11697;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11697);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list11702 = (function unordered_list11702(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__11707(s__11708){
return (new cljs.core.LazySeq(null,(function (){
var s__11708__$1 = s__11708;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11708__$1);
if(temp__4126__auto__){
var s__11708__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11708__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11708__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11710 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11709 = (0);
while(true){
if((i__11709 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__11709);
cljs.core.chunk_append.call(null,b__11710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11711 = (i__11709 + (1));
i__11709 = G__11711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11710),iter__11707.call(null,cljs.core.chunk_rest.call(null,s__11708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11710),null);
}
} else {
var x = cljs.core.first.call(null,s__11708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__11707.call(null,cljs.core.rest.call(null,s__11708__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11702);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list11712 = (function ordered_list11712(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__11717(s__11718){
return (new cljs.core.LazySeq(null,(function (){
var s__11718__$1 = s__11718;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11718__$1);
if(temp__4126__auto__){
var s__11718__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11718__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11718__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11720 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11719 = (0);
while(true){
if((i__11719 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__11719);
cljs.core.chunk_append.call(null,b__11720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11721 = (i__11719 + (1));
i__11719 = G__11721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11720),iter__11717.call(null,cljs.core.chunk_rest.call(null,s__11718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11720),null);
}
} else {
var x = cljs.core.first.call(null,s__11718__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__11717.call(null,cljs.core.rest.call(null,s__11718__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11712);
/**
* Create an image element.
*/
sablono.core.image11722 = (function() {
var image11722 = null;
var image11722__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image11722__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image11722 = function(src,alt){
switch(arguments.length){
case 1:
return image11722__1.call(this,src);
case 2:
return image11722__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image11722.cljs$core$IFn$_invoke$arity$1 = image11722__1;
image11722.cljs$core$IFn$_invoke$arity$2 = image11722__2;
return image11722;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11722);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__11723_SHARP_,p2__11724_SHARP_){
return [cljs.core.str(p1__11723_SHARP_),cljs.core.str("["),cljs.core.str(p2__11724_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__11725_SHARP_,p2__11726_SHARP_){
return [cljs.core.str(p1__11725_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11726_SHARP_)].join('');
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
sablono.core.color_field11727 = (function() {
var color_field11727 = null;
var color_field11727__1 = (function (name__6465__auto__){
return color_field11727.call(null,name__6465__auto__,null);
});
var color_field11727__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6465__auto__,value__6466__auto__);
});
color_field11727 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return color_field11727__1.call(this,name__6465__auto__);
case 2:
return color_field11727__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field11727.cljs$core$IFn$_invoke$arity$1 = color_field11727__1;
color_field11727.cljs$core$IFn$_invoke$arity$2 = color_field11727__2;
return color_field11727;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11727);

/**
* Creates a date input field.
*/
sablono.core.date_field11728 = (function() {
var date_field11728 = null;
var date_field11728__1 = (function (name__6465__auto__){
return date_field11728.call(null,name__6465__auto__,null);
});
var date_field11728__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6465__auto__,value__6466__auto__);
});
date_field11728 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return date_field11728__1.call(this,name__6465__auto__);
case 2:
return date_field11728__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field11728.cljs$core$IFn$_invoke$arity$1 = date_field11728__1;
date_field11728.cljs$core$IFn$_invoke$arity$2 = date_field11728__2;
return date_field11728;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11728);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field11729 = (function() {
var datetime_field11729 = null;
var datetime_field11729__1 = (function (name__6465__auto__){
return datetime_field11729.call(null,name__6465__auto__,null);
});
var datetime_field11729__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6465__auto__,value__6466__auto__);
});
datetime_field11729 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return datetime_field11729__1.call(this,name__6465__auto__);
case 2:
return datetime_field11729__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field11729.cljs$core$IFn$_invoke$arity$1 = datetime_field11729__1;
datetime_field11729.cljs$core$IFn$_invoke$arity$2 = datetime_field11729__2;
return datetime_field11729;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11729);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field11730 = (function() {
var datetime_local_field11730 = null;
var datetime_local_field11730__1 = (function (name__6465__auto__){
return datetime_local_field11730.call(null,name__6465__auto__,null);
});
var datetime_local_field11730__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6465__auto__,value__6466__auto__);
});
datetime_local_field11730 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return datetime_local_field11730__1.call(this,name__6465__auto__);
case 2:
return datetime_local_field11730__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field11730.cljs$core$IFn$_invoke$arity$1 = datetime_local_field11730__1;
datetime_local_field11730.cljs$core$IFn$_invoke$arity$2 = datetime_local_field11730__2;
return datetime_local_field11730;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11730);

/**
* Creates a email input field.
*/
sablono.core.email_field11731 = (function() {
var email_field11731 = null;
var email_field11731__1 = (function (name__6465__auto__){
return email_field11731.call(null,name__6465__auto__,null);
});
var email_field11731__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6465__auto__,value__6466__auto__);
});
email_field11731 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return email_field11731__1.call(this,name__6465__auto__);
case 2:
return email_field11731__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field11731.cljs$core$IFn$_invoke$arity$1 = email_field11731__1;
email_field11731.cljs$core$IFn$_invoke$arity$2 = email_field11731__2;
return email_field11731;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11731);

/**
* Creates a file input field.
*/
sablono.core.file_field11732 = (function() {
var file_field11732 = null;
var file_field11732__1 = (function (name__6465__auto__){
return file_field11732.call(null,name__6465__auto__,null);
});
var file_field11732__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6465__auto__,value__6466__auto__);
});
file_field11732 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return file_field11732__1.call(this,name__6465__auto__);
case 2:
return file_field11732__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field11732.cljs$core$IFn$_invoke$arity$1 = file_field11732__1;
file_field11732.cljs$core$IFn$_invoke$arity$2 = file_field11732__2;
return file_field11732;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11732);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field11733 = (function() {
var hidden_field11733 = null;
var hidden_field11733__1 = (function (name__6465__auto__){
return hidden_field11733.call(null,name__6465__auto__,null);
});
var hidden_field11733__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6465__auto__,value__6466__auto__);
});
hidden_field11733 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return hidden_field11733__1.call(this,name__6465__auto__);
case 2:
return hidden_field11733__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field11733.cljs$core$IFn$_invoke$arity$1 = hidden_field11733__1;
hidden_field11733.cljs$core$IFn$_invoke$arity$2 = hidden_field11733__2;
return hidden_field11733;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11733);

/**
* Creates a month input field.
*/
sablono.core.month_field11734 = (function() {
var month_field11734 = null;
var month_field11734__1 = (function (name__6465__auto__){
return month_field11734.call(null,name__6465__auto__,null);
});
var month_field11734__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6465__auto__,value__6466__auto__);
});
month_field11734 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return month_field11734__1.call(this,name__6465__auto__);
case 2:
return month_field11734__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field11734.cljs$core$IFn$_invoke$arity$1 = month_field11734__1;
month_field11734.cljs$core$IFn$_invoke$arity$2 = month_field11734__2;
return month_field11734;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11734);

/**
* Creates a number input field.
*/
sablono.core.number_field11735 = (function() {
var number_field11735 = null;
var number_field11735__1 = (function (name__6465__auto__){
return number_field11735.call(null,name__6465__auto__,null);
});
var number_field11735__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6465__auto__,value__6466__auto__);
});
number_field11735 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return number_field11735__1.call(this,name__6465__auto__);
case 2:
return number_field11735__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field11735.cljs$core$IFn$_invoke$arity$1 = number_field11735__1;
number_field11735.cljs$core$IFn$_invoke$arity$2 = number_field11735__2;
return number_field11735;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11735);

/**
* Creates a password input field.
*/
sablono.core.password_field11736 = (function() {
var password_field11736 = null;
var password_field11736__1 = (function (name__6465__auto__){
return password_field11736.call(null,name__6465__auto__,null);
});
var password_field11736__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6465__auto__,value__6466__auto__);
});
password_field11736 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return password_field11736__1.call(this,name__6465__auto__);
case 2:
return password_field11736__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field11736.cljs$core$IFn$_invoke$arity$1 = password_field11736__1;
password_field11736.cljs$core$IFn$_invoke$arity$2 = password_field11736__2;
return password_field11736;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11736);

/**
* Creates a range input field.
*/
sablono.core.range_field11737 = (function() {
var range_field11737 = null;
var range_field11737__1 = (function (name__6465__auto__){
return range_field11737.call(null,name__6465__auto__,null);
});
var range_field11737__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6465__auto__,value__6466__auto__);
});
range_field11737 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return range_field11737__1.call(this,name__6465__auto__);
case 2:
return range_field11737__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field11737.cljs$core$IFn$_invoke$arity$1 = range_field11737__1;
range_field11737.cljs$core$IFn$_invoke$arity$2 = range_field11737__2;
return range_field11737;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11737);

/**
* Creates a search input field.
*/
sablono.core.search_field11738 = (function() {
var search_field11738 = null;
var search_field11738__1 = (function (name__6465__auto__){
return search_field11738.call(null,name__6465__auto__,null);
});
var search_field11738__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6465__auto__,value__6466__auto__);
});
search_field11738 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return search_field11738__1.call(this,name__6465__auto__);
case 2:
return search_field11738__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field11738.cljs$core$IFn$_invoke$arity$1 = search_field11738__1;
search_field11738.cljs$core$IFn$_invoke$arity$2 = search_field11738__2;
return search_field11738;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11738);

/**
* Creates a tel input field.
*/
sablono.core.tel_field11739 = (function() {
var tel_field11739 = null;
var tel_field11739__1 = (function (name__6465__auto__){
return tel_field11739.call(null,name__6465__auto__,null);
});
var tel_field11739__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6465__auto__,value__6466__auto__);
});
tel_field11739 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return tel_field11739__1.call(this,name__6465__auto__);
case 2:
return tel_field11739__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field11739.cljs$core$IFn$_invoke$arity$1 = tel_field11739__1;
tel_field11739.cljs$core$IFn$_invoke$arity$2 = tel_field11739__2;
return tel_field11739;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11739);

/**
* Creates a text input field.
*/
sablono.core.text_field11740 = (function() {
var text_field11740 = null;
var text_field11740__1 = (function (name__6465__auto__){
return text_field11740.call(null,name__6465__auto__,null);
});
var text_field11740__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6465__auto__,value__6466__auto__);
});
text_field11740 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return text_field11740__1.call(this,name__6465__auto__);
case 2:
return text_field11740__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field11740.cljs$core$IFn$_invoke$arity$1 = text_field11740__1;
text_field11740.cljs$core$IFn$_invoke$arity$2 = text_field11740__2;
return text_field11740;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11740);

/**
* Creates a time input field.
*/
sablono.core.time_field11741 = (function() {
var time_field11741 = null;
var time_field11741__1 = (function (name__6465__auto__){
return time_field11741.call(null,name__6465__auto__,null);
});
var time_field11741__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6465__auto__,value__6466__auto__);
});
time_field11741 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return time_field11741__1.call(this,name__6465__auto__);
case 2:
return time_field11741__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field11741.cljs$core$IFn$_invoke$arity$1 = time_field11741__1;
time_field11741.cljs$core$IFn$_invoke$arity$2 = time_field11741__2;
return time_field11741;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11741);

/**
* Creates a url input field.
*/
sablono.core.url_field11742 = (function() {
var url_field11742 = null;
var url_field11742__1 = (function (name__6465__auto__){
return url_field11742.call(null,name__6465__auto__,null);
});
var url_field11742__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6465__auto__,value__6466__auto__);
});
url_field11742 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return url_field11742__1.call(this,name__6465__auto__);
case 2:
return url_field11742__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field11742.cljs$core$IFn$_invoke$arity$1 = url_field11742__1;
url_field11742.cljs$core$IFn$_invoke$arity$2 = url_field11742__2;
return url_field11742;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11742);

/**
* Creates a week input field.
*/
sablono.core.week_field11743 = (function() {
var week_field11743 = null;
var week_field11743__1 = (function (name__6465__auto__){
return week_field11743.call(null,name__6465__auto__,null);
});
var week_field11743__2 = (function (name__6465__auto__,value__6466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6465__auto__,value__6466__auto__);
});
week_field11743 = function(name__6465__auto__,value__6466__auto__){
switch(arguments.length){
case 1:
return week_field11743__1.call(this,name__6465__auto__);
case 2:
return week_field11743__2.call(this,name__6465__auto__,value__6466__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field11743.cljs$core$IFn$_invoke$arity$1 = week_field11743__1;
week_field11743.cljs$core$IFn$_invoke$arity$2 = week_field11743__2;
return week_field11743;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11743);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box11744 = (function() {
var check_box11744 = null;
var check_box11744__1 = (function (name){
return check_box11744.call(null,name,null);
});
var check_box11744__2 = (function (name,checked_QMARK_){
return check_box11744.call(null,name,checked_QMARK_,"true");
});
var check_box11744__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box11744 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box11744__1.call(this,name);
case 2:
return check_box11744__2.call(this,name,checked_QMARK_);
case 3:
return check_box11744__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box11744.cljs$core$IFn$_invoke$arity$1 = check_box11744__1;
check_box11744.cljs$core$IFn$_invoke$arity$2 = check_box11744__2;
check_box11744.cljs$core$IFn$_invoke$arity$3 = check_box11744__3;
return check_box11744;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11744);
/**
* Creates a radio button.
*/
sablono.core.radio_button11745 = (function() {
var radio_button11745 = null;
var radio_button11745__1 = (function (group){
return radio_button11745.call(null,group,null);
});
var radio_button11745__2 = (function (group,checked_QMARK_){
return radio_button11745.call(null,group,checked_QMARK_,"true");
});
var radio_button11745__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button11745 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button11745__1.call(this,group);
case 2:
return radio_button11745__2.call(this,group,checked_QMARK_);
case 3:
return radio_button11745__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button11745.cljs$core$IFn$_invoke$arity$1 = radio_button11745__1;
radio_button11745.cljs$core$IFn$_invoke$arity$2 = radio_button11745__2;
radio_button11745.cljs$core$IFn$_invoke$arity$3 = radio_button11745__3;
return radio_button11745;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11745);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options11746 = (function() {
var select_options11746 = null;
var select_options11746__1 = (function (coll){
return select_options11746.call(null,coll,null);
});
var select_options11746__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__11755(s__11756){
return (new cljs.core.LazySeq(null,(function (){
var s__11756__$1 = s__11756;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11756__$1);
if(temp__4126__auto__){
var s__11756__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11756__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11756__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11758 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11757 = (0);
while(true){
if((i__11757 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__11757);
cljs.core.chunk_append.call(null,b__11758,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11761 = x;
var text = cljs.core.nth.call(null,vec__11761,(0),null);
var val = cljs.core.nth.call(null,vec__11761,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11761,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options11746.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__11763 = (i__11757 + (1));
i__11757 = G__11763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11758),iter__11755.call(null,cljs.core.chunk_rest.call(null,s__11756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11758),null);
}
} else {
var x = cljs.core.first.call(null,s__11756__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11762 = x;
var text = cljs.core.nth.call(null,vec__11762,(0),null);
var val = cljs.core.nth.call(null,vec__11762,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11762,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options11746.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__11755.call(null,cljs.core.rest.call(null,s__11756__$2)));
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
select_options11746 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options11746__1.call(this,coll);
case 2:
return select_options11746__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options11746.cljs$core$IFn$_invoke$arity$1 = select_options11746__1;
select_options11746.cljs$core$IFn$_invoke$arity$2 = select_options11746__2;
return select_options11746;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11746);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down11764 = (function() {
var drop_down11764 = null;
var drop_down11764__2 = (function (name,options){
return drop_down11764.call(null,name,options,null);
});
var drop_down11764__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down11764 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down11764__2.call(this,name,options);
case 3:
return drop_down11764__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down11764.cljs$core$IFn$_invoke$arity$2 = drop_down11764__2;
drop_down11764.cljs$core$IFn$_invoke$arity$3 = drop_down11764__3;
return drop_down11764;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11764);
/**
* Creates a text area element.
*/
sablono.core.text_area11765 = (function() {
var text_area11765 = null;
var text_area11765__1 = (function (name){
return text_area11765.call(null,name,null);
});
var text_area11765__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area11765 = function(name,value){
switch(arguments.length){
case 1:
return text_area11765__1.call(this,name);
case 2:
return text_area11765__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area11765.cljs$core$IFn$_invoke$arity$1 = text_area11765__1;
text_area11765.cljs$core$IFn$_invoke$arity$2 = text_area11765__2;
return text_area11765;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11765);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label11766 = (function label11766(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11766);
/**
* Creates a submit button.
*/
sablono.core.submit_button11767 = (function submit_button11767(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11767);
/**
* Creates a form reset button.
*/
sablono.core.reset_button11768 = (function reset_button11768(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11768);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to11769 = (function() { 
var form_to11769__delegate = function (p__11770,body){
var vec__11772 = p__11770;
var method = cljs.core.nth.call(null,vec__11772,(0),null);
var action = cljs.core.nth.call(null,vec__11772,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to11769 = function (p__11770,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to11769__delegate.call(this,p__11770,body);};
form_to11769.cljs$lang$maxFixedArity = 1;
form_to11769.cljs$lang$applyTo = (function (arglist__11773){
var p__11770 = cljs.core.first(arglist__11773);
var body = cljs.core.rest(arglist__11773);
return form_to11769__delegate(p__11770,body);
});
form_to11769.cljs$core$IFn$_invoke$arity$variadic = form_to11769__delegate;
return form_to11769;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11769);

//# sourceMappingURL=core.js.map