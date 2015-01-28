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
var G__26212__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26211 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26211,(0),null);
var body = cljs.core.nthnext.call(null,vec__26211,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26212 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26212__delegate.call(this,args);};
G__26212.cljs$lang$maxFixedArity = 0;
G__26212.cljs$lang$applyTo = (function (arglist__26213){
var args = cljs.core.seq(arglist__26213);
return G__26212__delegate(args);
});
G__26212.cljs$core$IFn$_invoke$arity$variadic = G__26212__delegate;
return G__26212;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__26218(s__26219){
return (new cljs.core.LazySeq(null,(function (){
var s__26219__$1 = s__26219;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26219__$1);
if(temp__4126__auto__){
var s__26219__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26219__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26219__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26221 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26220 = (0);
while(true){
if((i__26220 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__26220);
cljs.core.chunk_append.call(null,b__26221,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26222 = (i__26220 + (1));
i__26220 = G__26222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26221),iter__26218.call(null,cljs.core.chunk_rest.call(null,s__26219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26221),null);
}
} else {
var args = cljs.core.first.call(null,s__26219__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26218.call(null,cljs.core.rest.call(null,s__26219__$2)));
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
var iter__4378__auto__ = (function iter__26227(s__26228){
return (new cljs.core.LazySeq(null,(function (){
var s__26228__$1 = s__26228;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26228__$1);
if(temp__4126__auto__){
var s__26228__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26228__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26228__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26230 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26229 = (0);
while(true){
if((i__26229 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__26229);
cljs.core.chunk_append.call(null,b__26230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26231 = (i__26229 + (1));
i__26229 = G__26231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26230),iter__26227.call(null,cljs.core.chunk_rest.call(null,s__26228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26230),null);
}
} else {
var style = cljs.core.first.call(null,s__26228__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26227.call(null,cljs.core.rest.call(null,s__26228__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26232){
var styles = cljs.core.seq(arglist__26232);
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
sablono.core.link_to26233 = (function() { 
var link_to26233__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26233 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to26233__delegate.call(this,url,content);};
link_to26233.cljs$lang$maxFixedArity = 1;
link_to26233.cljs$lang$applyTo = (function (arglist__26234){
var url = cljs.core.first(arglist__26234);
var content = cljs.core.rest(arglist__26234);
return link_to26233__delegate(url,content);
});
link_to26233.cljs$core$IFn$_invoke$arity$variadic = link_to26233__delegate;
return link_to26233;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26233);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26235 = (function() { 
var mail_to26235__delegate = function (e_mail,p__26236){
var vec__26238 = p__26236;
var content = cljs.core.nth.call(null,vec__26238,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to26235 = function (e_mail,var_args){
var p__26236 = null;
if (arguments.length > 1) {
  p__26236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to26235__delegate.call(this,e_mail,p__26236);};
mail_to26235.cljs$lang$maxFixedArity = 1;
mail_to26235.cljs$lang$applyTo = (function (arglist__26239){
var e_mail = cljs.core.first(arglist__26239);
var p__26236 = cljs.core.rest(arglist__26239);
return mail_to26235__delegate(e_mail,p__26236);
});
mail_to26235.cljs$core$IFn$_invoke$arity$variadic = mail_to26235__delegate;
return mail_to26235;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26235);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26240 = (function unordered_list26240(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__26245(s__26246){
return (new cljs.core.LazySeq(null,(function (){
var s__26246__$1 = s__26246;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26246__$1);
if(temp__4126__auto__){
var s__26246__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26246__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26246__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26248 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26247 = (0);
while(true){
if((i__26247 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26247);
cljs.core.chunk_append.call(null,b__26248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26249 = (i__26247 + (1));
i__26247 = G__26249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26248),iter__26245.call(null,cljs.core.chunk_rest.call(null,s__26246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26248),null);
}
} else {
var x = cljs.core.first.call(null,s__26246__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26245.call(null,cljs.core.rest.call(null,s__26246__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26240);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26250 = (function ordered_list26250(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__26255(s__26256){
return (new cljs.core.LazySeq(null,(function (){
var s__26256__$1 = s__26256;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26256__$1);
if(temp__4126__auto__){
var s__26256__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26256__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26256__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26258 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26257 = (0);
while(true){
if((i__26257 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26257);
cljs.core.chunk_append.call(null,b__26258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26259 = (i__26257 + (1));
i__26257 = G__26259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26258),iter__26255.call(null,cljs.core.chunk_rest.call(null,s__26256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26258),null);
}
} else {
var x = cljs.core.first.call(null,s__26256__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26255.call(null,cljs.core.rest.call(null,s__26256__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26250);
/**
* Create an image element.
*/
sablono.core.image26260 = (function() {
var image26260 = null;
var image26260__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26260__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26260 = function(src,alt){
switch(arguments.length){
case 1:
return image26260__1.call(this,src);
case 2:
return image26260__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26260.cljs$core$IFn$_invoke$arity$1 = image26260__1;
image26260.cljs$core$IFn$_invoke$arity$2 = image26260__2;
return image26260;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26260);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__26261_SHARP_,p2__26262_SHARP_){
return [cljs.core.str(p1__26261_SHARP_),cljs.core.str("["),cljs.core.str(p2__26262_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__26263_SHARP_,p2__26264_SHARP_){
return [cljs.core.str(p1__26263_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26264_SHARP_)].join('');
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
sablono.core.color_field26265 = (function() {
var color_field26265 = null;
var color_field26265__1 = (function (name__9770__auto__){
return color_field26265.call(null,name__9770__auto__,null);
});
var color_field26265__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field26265 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field26265__1.call(this,name__9770__auto__);
case 2:
return color_field26265__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26265.cljs$core$IFn$_invoke$arity$1 = color_field26265__1;
color_field26265.cljs$core$IFn$_invoke$arity$2 = color_field26265__2;
return color_field26265;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26265);

/**
* Creates a date input field.
*/
sablono.core.date_field26266 = (function() {
var date_field26266 = null;
var date_field26266__1 = (function (name__9770__auto__){
return date_field26266.call(null,name__9770__auto__,null);
});
var date_field26266__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field26266 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field26266__1.call(this,name__9770__auto__);
case 2:
return date_field26266__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26266.cljs$core$IFn$_invoke$arity$1 = date_field26266__1;
date_field26266.cljs$core$IFn$_invoke$arity$2 = date_field26266__2;
return date_field26266;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26266);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26267 = (function() {
var datetime_field26267 = null;
var datetime_field26267__1 = (function (name__9770__auto__){
return datetime_field26267.call(null,name__9770__auto__,null);
});
var datetime_field26267__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field26267 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field26267__1.call(this,name__9770__auto__);
case 2:
return datetime_field26267__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26267.cljs$core$IFn$_invoke$arity$1 = datetime_field26267__1;
datetime_field26267.cljs$core$IFn$_invoke$arity$2 = datetime_field26267__2;
return datetime_field26267;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26267);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26268 = (function() {
var datetime_local_field26268 = null;
var datetime_local_field26268__1 = (function (name__9770__auto__){
return datetime_local_field26268.call(null,name__9770__auto__,null);
});
var datetime_local_field26268__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field26268 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26268__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field26268__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26268.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26268__1;
datetime_local_field26268.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26268__2;
return datetime_local_field26268;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26268);

/**
* Creates a email input field.
*/
sablono.core.email_field26269 = (function() {
var email_field26269 = null;
var email_field26269__1 = (function (name__9770__auto__){
return email_field26269.call(null,name__9770__auto__,null);
});
var email_field26269__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field26269 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field26269__1.call(this,name__9770__auto__);
case 2:
return email_field26269__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26269.cljs$core$IFn$_invoke$arity$1 = email_field26269__1;
email_field26269.cljs$core$IFn$_invoke$arity$2 = email_field26269__2;
return email_field26269;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26269);

/**
* Creates a file input field.
*/
sablono.core.file_field26270 = (function() {
var file_field26270 = null;
var file_field26270__1 = (function (name__9770__auto__){
return file_field26270.call(null,name__9770__auto__,null);
});
var file_field26270__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field26270 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field26270__1.call(this,name__9770__auto__);
case 2:
return file_field26270__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26270.cljs$core$IFn$_invoke$arity$1 = file_field26270__1;
file_field26270.cljs$core$IFn$_invoke$arity$2 = file_field26270__2;
return file_field26270;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26270);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26271 = (function() {
var hidden_field26271 = null;
var hidden_field26271__1 = (function (name__9770__auto__){
return hidden_field26271.call(null,name__9770__auto__,null);
});
var hidden_field26271__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field26271 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field26271__1.call(this,name__9770__auto__);
case 2:
return hidden_field26271__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26271.cljs$core$IFn$_invoke$arity$1 = hidden_field26271__1;
hidden_field26271.cljs$core$IFn$_invoke$arity$2 = hidden_field26271__2;
return hidden_field26271;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26271);

/**
* Creates a month input field.
*/
sablono.core.month_field26272 = (function() {
var month_field26272 = null;
var month_field26272__1 = (function (name__9770__auto__){
return month_field26272.call(null,name__9770__auto__,null);
});
var month_field26272__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field26272 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field26272__1.call(this,name__9770__auto__);
case 2:
return month_field26272__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26272.cljs$core$IFn$_invoke$arity$1 = month_field26272__1;
month_field26272.cljs$core$IFn$_invoke$arity$2 = month_field26272__2;
return month_field26272;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26272);

/**
* Creates a number input field.
*/
sablono.core.number_field26273 = (function() {
var number_field26273 = null;
var number_field26273__1 = (function (name__9770__auto__){
return number_field26273.call(null,name__9770__auto__,null);
});
var number_field26273__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field26273 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field26273__1.call(this,name__9770__auto__);
case 2:
return number_field26273__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26273.cljs$core$IFn$_invoke$arity$1 = number_field26273__1;
number_field26273.cljs$core$IFn$_invoke$arity$2 = number_field26273__2;
return number_field26273;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26273);

/**
* Creates a password input field.
*/
sablono.core.password_field26274 = (function() {
var password_field26274 = null;
var password_field26274__1 = (function (name__9770__auto__){
return password_field26274.call(null,name__9770__auto__,null);
});
var password_field26274__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field26274 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field26274__1.call(this,name__9770__auto__);
case 2:
return password_field26274__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26274.cljs$core$IFn$_invoke$arity$1 = password_field26274__1;
password_field26274.cljs$core$IFn$_invoke$arity$2 = password_field26274__2;
return password_field26274;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26274);

/**
* Creates a range input field.
*/
sablono.core.range_field26275 = (function() {
var range_field26275 = null;
var range_field26275__1 = (function (name__9770__auto__){
return range_field26275.call(null,name__9770__auto__,null);
});
var range_field26275__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field26275 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field26275__1.call(this,name__9770__auto__);
case 2:
return range_field26275__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26275.cljs$core$IFn$_invoke$arity$1 = range_field26275__1;
range_field26275.cljs$core$IFn$_invoke$arity$2 = range_field26275__2;
return range_field26275;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26275);

/**
* Creates a search input field.
*/
sablono.core.search_field26276 = (function() {
var search_field26276 = null;
var search_field26276__1 = (function (name__9770__auto__){
return search_field26276.call(null,name__9770__auto__,null);
});
var search_field26276__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field26276 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field26276__1.call(this,name__9770__auto__);
case 2:
return search_field26276__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26276.cljs$core$IFn$_invoke$arity$1 = search_field26276__1;
search_field26276.cljs$core$IFn$_invoke$arity$2 = search_field26276__2;
return search_field26276;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26276);

/**
* Creates a tel input field.
*/
sablono.core.tel_field26277 = (function() {
var tel_field26277 = null;
var tel_field26277__1 = (function (name__9770__auto__){
return tel_field26277.call(null,name__9770__auto__,null);
});
var tel_field26277__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field26277 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field26277__1.call(this,name__9770__auto__);
case 2:
return tel_field26277__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26277.cljs$core$IFn$_invoke$arity$1 = tel_field26277__1;
tel_field26277.cljs$core$IFn$_invoke$arity$2 = tel_field26277__2;
return tel_field26277;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26277);

/**
* Creates a text input field.
*/
sablono.core.text_field26278 = (function() {
var text_field26278 = null;
var text_field26278__1 = (function (name__9770__auto__){
return text_field26278.call(null,name__9770__auto__,null);
});
var text_field26278__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field26278 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field26278__1.call(this,name__9770__auto__);
case 2:
return text_field26278__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26278.cljs$core$IFn$_invoke$arity$1 = text_field26278__1;
text_field26278.cljs$core$IFn$_invoke$arity$2 = text_field26278__2;
return text_field26278;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26278);

/**
* Creates a time input field.
*/
sablono.core.time_field26279 = (function() {
var time_field26279 = null;
var time_field26279__1 = (function (name__9770__auto__){
return time_field26279.call(null,name__9770__auto__,null);
});
var time_field26279__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field26279 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field26279__1.call(this,name__9770__auto__);
case 2:
return time_field26279__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26279.cljs$core$IFn$_invoke$arity$1 = time_field26279__1;
time_field26279.cljs$core$IFn$_invoke$arity$2 = time_field26279__2;
return time_field26279;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26279);

/**
* Creates a url input field.
*/
sablono.core.url_field26280 = (function() {
var url_field26280 = null;
var url_field26280__1 = (function (name__9770__auto__){
return url_field26280.call(null,name__9770__auto__,null);
});
var url_field26280__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field26280 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field26280__1.call(this,name__9770__auto__);
case 2:
return url_field26280__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26280.cljs$core$IFn$_invoke$arity$1 = url_field26280__1;
url_field26280.cljs$core$IFn$_invoke$arity$2 = url_field26280__2;
return url_field26280;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26280);

/**
* Creates a week input field.
*/
sablono.core.week_field26281 = (function() {
var week_field26281 = null;
var week_field26281__1 = (function (name__9770__auto__){
return week_field26281.call(null,name__9770__auto__,null);
});
var week_field26281__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field26281 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field26281__1.call(this,name__9770__auto__);
case 2:
return week_field26281__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26281.cljs$core$IFn$_invoke$arity$1 = week_field26281__1;
week_field26281.cljs$core$IFn$_invoke$arity$2 = week_field26281__2;
return week_field26281;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26281);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26282 = (function() {
var check_box26282 = null;
var check_box26282__1 = (function (name){
return check_box26282.call(null,name,null);
});
var check_box26282__2 = (function (name,checked_QMARK_){
return check_box26282.call(null,name,checked_QMARK_,"true");
});
var check_box26282__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26282 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26282__1.call(this,name);
case 2:
return check_box26282__2.call(this,name,checked_QMARK_);
case 3:
return check_box26282__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26282.cljs$core$IFn$_invoke$arity$1 = check_box26282__1;
check_box26282.cljs$core$IFn$_invoke$arity$2 = check_box26282__2;
check_box26282.cljs$core$IFn$_invoke$arity$3 = check_box26282__3;
return check_box26282;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26282);
/**
* Creates a radio button.
*/
sablono.core.radio_button26283 = (function() {
var radio_button26283 = null;
var radio_button26283__1 = (function (group){
return radio_button26283.call(null,group,null);
});
var radio_button26283__2 = (function (group,checked_QMARK_){
return radio_button26283.call(null,group,checked_QMARK_,"true");
});
var radio_button26283__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26283 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26283__1.call(this,group);
case 2:
return radio_button26283__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26283__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26283.cljs$core$IFn$_invoke$arity$1 = radio_button26283__1;
radio_button26283.cljs$core$IFn$_invoke$arity$2 = radio_button26283__2;
radio_button26283.cljs$core$IFn$_invoke$arity$3 = radio_button26283__3;
return radio_button26283;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26283);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26284 = (function() {
var select_options26284 = null;
var select_options26284__1 = (function (coll){
return select_options26284.call(null,coll,null);
});
var select_options26284__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__26293(s__26294){
return (new cljs.core.LazySeq(null,(function (){
var s__26294__$1 = s__26294;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26294__$1);
if(temp__4126__auto__){
var s__26294__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26294__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26294__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26296 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26295 = (0);
while(true){
if((i__26295 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__26295);
cljs.core.chunk_append.call(null,b__26296,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26299 = x;
var text = cljs.core.nth.call(null,vec__26299,(0),null);
var val = cljs.core.nth.call(null,vec__26299,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26299,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26284.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__26301 = (i__26295 + (1));
i__26295 = G__26301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26296),iter__26293.call(null,cljs.core.chunk_rest.call(null,s__26294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26296),null);
}
} else {
var x = cljs.core.first.call(null,s__26294__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26300 = x;
var text = cljs.core.nth.call(null,vec__26300,(0),null);
var val = cljs.core.nth.call(null,vec__26300,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26300,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26284.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26293.call(null,cljs.core.rest.call(null,s__26294__$2)));
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
select_options26284 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26284__1.call(this,coll);
case 2:
return select_options26284__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26284.cljs$core$IFn$_invoke$arity$1 = select_options26284__1;
select_options26284.cljs$core$IFn$_invoke$arity$2 = select_options26284__2;
return select_options26284;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26284);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26302 = (function() {
var drop_down26302 = null;
var drop_down26302__2 = (function (name,options){
return drop_down26302.call(null,name,options,null);
});
var drop_down26302__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26302 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26302__2.call(this,name,options);
case 3:
return drop_down26302__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26302.cljs$core$IFn$_invoke$arity$2 = drop_down26302__2;
drop_down26302.cljs$core$IFn$_invoke$arity$3 = drop_down26302__3;
return drop_down26302;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26302);
/**
* Creates a text area element.
*/
sablono.core.text_area26303 = (function() {
var text_area26303 = null;
var text_area26303__1 = (function (name){
return text_area26303.call(null,name,null);
});
var text_area26303__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26303 = function(name,value){
switch(arguments.length){
case 1:
return text_area26303__1.call(this,name);
case 2:
return text_area26303__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26303.cljs$core$IFn$_invoke$arity$1 = text_area26303__1;
text_area26303.cljs$core$IFn$_invoke$arity$2 = text_area26303__2;
return text_area26303;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26303);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26304 = (function label26304(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26304);
/**
* Creates a submit button.
*/
sablono.core.submit_button26305 = (function submit_button26305(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26305);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26306 = (function reset_button26306(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26306);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26307 = (function() { 
var form_to26307__delegate = function (p__26308,body){
var vec__26310 = p__26308;
var method = cljs.core.nth.call(null,vec__26310,(0),null);
var action = cljs.core.nth.call(null,vec__26310,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26307 = function (p__26308,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to26307__delegate.call(this,p__26308,body);};
form_to26307.cljs$lang$maxFixedArity = 1;
form_to26307.cljs$lang$applyTo = (function (arglist__26311){
var p__26308 = cljs.core.first(arglist__26311);
var body = cljs.core.rest(arglist__26311);
return form_to26307__delegate(p__26308,body);
});
form_to26307.cljs$core$IFn$_invoke$arity$variadic = form_to26307__delegate;
return form_to26307;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26307);

//# sourceMappingURL=core.js.map