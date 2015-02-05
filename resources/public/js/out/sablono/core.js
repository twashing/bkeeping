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
var G__162487__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__162486 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__162486,(0),null);
var body = cljs.core.nthnext.call(null,vec__162486,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__162487 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__162487__delegate.call(this,args);};
G__162487.cljs$lang$maxFixedArity = 0;
G__162487.cljs$lang$applyTo = (function (arglist__162488){
var args = cljs.core.seq(arglist__162488);
return G__162487__delegate(args);
});
G__162487.cljs$core$IFn$_invoke$arity$variadic = G__162487__delegate;
return G__162487;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__162493(s__162494){
return (new cljs.core.LazySeq(null,(function (){
var s__162494__$1 = s__162494;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__162494__$1);
if(temp__4126__auto__){
var s__162494__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162494__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__162494__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__162496 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__162495 = (0);
while(true){
if((i__162495 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__162495);
cljs.core.chunk_append.call(null,b__162496,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__162497 = (i__162495 + (1));
i__162495 = G__162497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162496),iter__162493.call(null,cljs.core.chunk_rest.call(null,s__162494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162496),null);
}
} else {
var args = cljs.core.first.call(null,s__162494__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__162493.call(null,cljs.core.rest.call(null,s__162494__$2)));
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
var iter__4378__auto__ = (function iter__162502(s__162503){
return (new cljs.core.LazySeq(null,(function (){
var s__162503__$1 = s__162503;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__162503__$1);
if(temp__4126__auto__){
var s__162503__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162503__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__162503__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__162505 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__162504 = (0);
while(true){
if((i__162504 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__162504);
cljs.core.chunk_append.call(null,b__162505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__162506 = (i__162504 + (1));
i__162504 = G__162506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162505),iter__162502.call(null,cljs.core.chunk_rest.call(null,s__162503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162505),null);
}
} else {
var style = cljs.core.first.call(null,s__162503__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__162502.call(null,cljs.core.rest.call(null,s__162503__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__162507){
var styles = cljs.core.seq(arglist__162507);
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
sablono.core.link_to162508 = (function() { 
var link_to162508__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to162508 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to162508__delegate.call(this,url,content);};
link_to162508.cljs$lang$maxFixedArity = 1;
link_to162508.cljs$lang$applyTo = (function (arglist__162509){
var url = cljs.core.first(arglist__162509);
var content = cljs.core.rest(arglist__162509);
return link_to162508__delegate(url,content);
});
link_to162508.cljs$core$IFn$_invoke$arity$variadic = link_to162508__delegate;
return link_to162508;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to162508);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to162510 = (function() { 
var mail_to162510__delegate = function (e_mail,p__162511){
var vec__162513 = p__162511;
var content = cljs.core.nth.call(null,vec__162513,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to162510 = function (e_mail,var_args){
var p__162511 = null;
if (arguments.length > 1) {
  p__162511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to162510__delegate.call(this,e_mail,p__162511);};
mail_to162510.cljs$lang$maxFixedArity = 1;
mail_to162510.cljs$lang$applyTo = (function (arglist__162514){
var e_mail = cljs.core.first(arglist__162514);
var p__162511 = cljs.core.rest(arglist__162514);
return mail_to162510__delegate(e_mail,p__162511);
});
mail_to162510.cljs$core$IFn$_invoke$arity$variadic = mail_to162510__delegate;
return mail_to162510;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to162510);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list162515 = (function unordered_list162515(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__162520(s__162521){
return (new cljs.core.LazySeq(null,(function (){
var s__162521__$1 = s__162521;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__162521__$1);
if(temp__4126__auto__){
var s__162521__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162521__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__162521__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__162523 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__162522 = (0);
while(true){
if((i__162522 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__162522);
cljs.core.chunk_append.call(null,b__162523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__162524 = (i__162522 + (1));
i__162522 = G__162524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162523),iter__162520.call(null,cljs.core.chunk_rest.call(null,s__162521__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162523),null);
}
} else {
var x = cljs.core.first.call(null,s__162521__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__162520.call(null,cljs.core.rest.call(null,s__162521__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list162515);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list162525 = (function ordered_list162525(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__162530(s__162531){
return (new cljs.core.LazySeq(null,(function (){
var s__162531__$1 = s__162531;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__162531__$1);
if(temp__4126__auto__){
var s__162531__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162531__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__162531__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__162533 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__162532 = (0);
while(true){
if((i__162532 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__162532);
cljs.core.chunk_append.call(null,b__162533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__162534 = (i__162532 + (1));
i__162532 = G__162534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162533),iter__162530.call(null,cljs.core.chunk_rest.call(null,s__162531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162533),null);
}
} else {
var x = cljs.core.first.call(null,s__162531__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__162530.call(null,cljs.core.rest.call(null,s__162531__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list162525);
/**
* Create an image element.
*/
sablono.core.image162535 = (function() {
var image162535 = null;
var image162535__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image162535__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image162535 = function(src,alt){
switch(arguments.length){
case 1:
return image162535__1.call(this,src);
case 2:
return image162535__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image162535.cljs$core$IFn$_invoke$arity$1 = image162535__1;
image162535.cljs$core$IFn$_invoke$arity$2 = image162535__2;
return image162535;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image162535);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__162536_SHARP_,p2__162537_SHARP_){
return [cljs.core.str(p1__162536_SHARP_),cljs.core.str("["),cljs.core.str(p2__162537_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__162538_SHARP_,p2__162539_SHARP_){
return [cljs.core.str(p1__162538_SHARP_),cljs.core.str("-"),cljs.core.str(p2__162539_SHARP_)].join('');
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
sablono.core.color_field162540 = (function() {
var color_field162540 = null;
var color_field162540__1 = (function (name__10377__auto__){
return color_field162540.call(null,name__10377__auto__,null);
});
var color_field162540__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field162540 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field162540__1.call(this,name__10377__auto__);
case 2:
return color_field162540__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field162540.cljs$core$IFn$_invoke$arity$1 = color_field162540__1;
color_field162540.cljs$core$IFn$_invoke$arity$2 = color_field162540__2;
return color_field162540;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field162540);

/**
* Creates a date input field.
*/
sablono.core.date_field162541 = (function() {
var date_field162541 = null;
var date_field162541__1 = (function (name__10377__auto__){
return date_field162541.call(null,name__10377__auto__,null);
});
var date_field162541__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field162541 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field162541__1.call(this,name__10377__auto__);
case 2:
return date_field162541__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field162541.cljs$core$IFn$_invoke$arity$1 = date_field162541__1;
date_field162541.cljs$core$IFn$_invoke$arity$2 = date_field162541__2;
return date_field162541;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field162541);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field162542 = (function() {
var datetime_field162542 = null;
var datetime_field162542__1 = (function (name__10377__auto__){
return datetime_field162542.call(null,name__10377__auto__,null);
});
var datetime_field162542__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field162542 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field162542__1.call(this,name__10377__auto__);
case 2:
return datetime_field162542__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field162542.cljs$core$IFn$_invoke$arity$1 = datetime_field162542__1;
datetime_field162542.cljs$core$IFn$_invoke$arity$2 = datetime_field162542__2;
return datetime_field162542;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field162542);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field162543 = (function() {
var datetime_local_field162543 = null;
var datetime_local_field162543__1 = (function (name__10377__auto__){
return datetime_local_field162543.call(null,name__10377__auto__,null);
});
var datetime_local_field162543__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field162543 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field162543__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field162543__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field162543.cljs$core$IFn$_invoke$arity$1 = datetime_local_field162543__1;
datetime_local_field162543.cljs$core$IFn$_invoke$arity$2 = datetime_local_field162543__2;
return datetime_local_field162543;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field162543);

/**
* Creates a email input field.
*/
sablono.core.email_field162544 = (function() {
var email_field162544 = null;
var email_field162544__1 = (function (name__10377__auto__){
return email_field162544.call(null,name__10377__auto__,null);
});
var email_field162544__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field162544 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field162544__1.call(this,name__10377__auto__);
case 2:
return email_field162544__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field162544.cljs$core$IFn$_invoke$arity$1 = email_field162544__1;
email_field162544.cljs$core$IFn$_invoke$arity$2 = email_field162544__2;
return email_field162544;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field162544);

/**
* Creates a file input field.
*/
sablono.core.file_field162545 = (function() {
var file_field162545 = null;
var file_field162545__1 = (function (name__10377__auto__){
return file_field162545.call(null,name__10377__auto__,null);
});
var file_field162545__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field162545 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field162545__1.call(this,name__10377__auto__);
case 2:
return file_field162545__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field162545.cljs$core$IFn$_invoke$arity$1 = file_field162545__1;
file_field162545.cljs$core$IFn$_invoke$arity$2 = file_field162545__2;
return file_field162545;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field162545);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field162546 = (function() {
var hidden_field162546 = null;
var hidden_field162546__1 = (function (name__10377__auto__){
return hidden_field162546.call(null,name__10377__auto__,null);
});
var hidden_field162546__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field162546 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field162546__1.call(this,name__10377__auto__);
case 2:
return hidden_field162546__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field162546.cljs$core$IFn$_invoke$arity$1 = hidden_field162546__1;
hidden_field162546.cljs$core$IFn$_invoke$arity$2 = hidden_field162546__2;
return hidden_field162546;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field162546);

/**
* Creates a month input field.
*/
sablono.core.month_field162547 = (function() {
var month_field162547 = null;
var month_field162547__1 = (function (name__10377__auto__){
return month_field162547.call(null,name__10377__auto__,null);
});
var month_field162547__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field162547 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field162547__1.call(this,name__10377__auto__);
case 2:
return month_field162547__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field162547.cljs$core$IFn$_invoke$arity$1 = month_field162547__1;
month_field162547.cljs$core$IFn$_invoke$arity$2 = month_field162547__2;
return month_field162547;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field162547);

/**
* Creates a number input field.
*/
sablono.core.number_field162548 = (function() {
var number_field162548 = null;
var number_field162548__1 = (function (name__10377__auto__){
return number_field162548.call(null,name__10377__auto__,null);
});
var number_field162548__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field162548 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field162548__1.call(this,name__10377__auto__);
case 2:
return number_field162548__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field162548.cljs$core$IFn$_invoke$arity$1 = number_field162548__1;
number_field162548.cljs$core$IFn$_invoke$arity$2 = number_field162548__2;
return number_field162548;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field162548);

/**
* Creates a password input field.
*/
sablono.core.password_field162549 = (function() {
var password_field162549 = null;
var password_field162549__1 = (function (name__10377__auto__){
return password_field162549.call(null,name__10377__auto__,null);
});
var password_field162549__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field162549 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field162549__1.call(this,name__10377__auto__);
case 2:
return password_field162549__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field162549.cljs$core$IFn$_invoke$arity$1 = password_field162549__1;
password_field162549.cljs$core$IFn$_invoke$arity$2 = password_field162549__2;
return password_field162549;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field162549);

/**
* Creates a range input field.
*/
sablono.core.range_field162550 = (function() {
var range_field162550 = null;
var range_field162550__1 = (function (name__10377__auto__){
return range_field162550.call(null,name__10377__auto__,null);
});
var range_field162550__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field162550 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field162550__1.call(this,name__10377__auto__);
case 2:
return range_field162550__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field162550.cljs$core$IFn$_invoke$arity$1 = range_field162550__1;
range_field162550.cljs$core$IFn$_invoke$arity$2 = range_field162550__2;
return range_field162550;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field162550);

/**
* Creates a search input field.
*/
sablono.core.search_field162551 = (function() {
var search_field162551 = null;
var search_field162551__1 = (function (name__10377__auto__){
return search_field162551.call(null,name__10377__auto__,null);
});
var search_field162551__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field162551 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field162551__1.call(this,name__10377__auto__);
case 2:
return search_field162551__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field162551.cljs$core$IFn$_invoke$arity$1 = search_field162551__1;
search_field162551.cljs$core$IFn$_invoke$arity$2 = search_field162551__2;
return search_field162551;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field162551);

/**
* Creates a tel input field.
*/
sablono.core.tel_field162552 = (function() {
var tel_field162552 = null;
var tel_field162552__1 = (function (name__10377__auto__){
return tel_field162552.call(null,name__10377__auto__,null);
});
var tel_field162552__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field162552 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field162552__1.call(this,name__10377__auto__);
case 2:
return tel_field162552__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field162552.cljs$core$IFn$_invoke$arity$1 = tel_field162552__1;
tel_field162552.cljs$core$IFn$_invoke$arity$2 = tel_field162552__2;
return tel_field162552;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field162552);

/**
* Creates a text input field.
*/
sablono.core.text_field162553 = (function() {
var text_field162553 = null;
var text_field162553__1 = (function (name__10377__auto__){
return text_field162553.call(null,name__10377__auto__,null);
});
var text_field162553__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field162553 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field162553__1.call(this,name__10377__auto__);
case 2:
return text_field162553__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field162553.cljs$core$IFn$_invoke$arity$1 = text_field162553__1;
text_field162553.cljs$core$IFn$_invoke$arity$2 = text_field162553__2;
return text_field162553;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field162553);

/**
* Creates a time input field.
*/
sablono.core.time_field162554 = (function() {
var time_field162554 = null;
var time_field162554__1 = (function (name__10377__auto__){
return time_field162554.call(null,name__10377__auto__,null);
});
var time_field162554__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field162554 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field162554__1.call(this,name__10377__auto__);
case 2:
return time_field162554__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field162554.cljs$core$IFn$_invoke$arity$1 = time_field162554__1;
time_field162554.cljs$core$IFn$_invoke$arity$2 = time_field162554__2;
return time_field162554;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field162554);

/**
* Creates a url input field.
*/
sablono.core.url_field162555 = (function() {
var url_field162555 = null;
var url_field162555__1 = (function (name__10377__auto__){
return url_field162555.call(null,name__10377__auto__,null);
});
var url_field162555__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field162555 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field162555__1.call(this,name__10377__auto__);
case 2:
return url_field162555__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field162555.cljs$core$IFn$_invoke$arity$1 = url_field162555__1;
url_field162555.cljs$core$IFn$_invoke$arity$2 = url_field162555__2;
return url_field162555;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field162555);

/**
* Creates a week input field.
*/
sablono.core.week_field162556 = (function() {
var week_field162556 = null;
var week_field162556__1 = (function (name__10377__auto__){
return week_field162556.call(null,name__10377__auto__,null);
});
var week_field162556__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field162556 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field162556__1.call(this,name__10377__auto__);
case 2:
return week_field162556__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field162556.cljs$core$IFn$_invoke$arity$1 = week_field162556__1;
week_field162556.cljs$core$IFn$_invoke$arity$2 = week_field162556__2;
return week_field162556;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field162556);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box162557 = (function() {
var check_box162557 = null;
var check_box162557__1 = (function (name){
return check_box162557.call(null,name,null);
});
var check_box162557__2 = (function (name,checked_QMARK_){
return check_box162557.call(null,name,checked_QMARK_,"true");
});
var check_box162557__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box162557 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box162557__1.call(this,name);
case 2:
return check_box162557__2.call(this,name,checked_QMARK_);
case 3:
return check_box162557__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box162557.cljs$core$IFn$_invoke$arity$1 = check_box162557__1;
check_box162557.cljs$core$IFn$_invoke$arity$2 = check_box162557__2;
check_box162557.cljs$core$IFn$_invoke$arity$3 = check_box162557__3;
return check_box162557;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box162557);
/**
* Creates a radio button.
*/
sablono.core.radio_button162558 = (function() {
var radio_button162558 = null;
var radio_button162558__1 = (function (group){
return radio_button162558.call(null,group,null);
});
var radio_button162558__2 = (function (group,checked_QMARK_){
return radio_button162558.call(null,group,checked_QMARK_,"true");
});
var radio_button162558__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button162558 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button162558__1.call(this,group);
case 2:
return radio_button162558__2.call(this,group,checked_QMARK_);
case 3:
return radio_button162558__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button162558.cljs$core$IFn$_invoke$arity$1 = radio_button162558__1;
radio_button162558.cljs$core$IFn$_invoke$arity$2 = radio_button162558__2;
radio_button162558.cljs$core$IFn$_invoke$arity$3 = radio_button162558__3;
return radio_button162558;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button162558);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options162559 = (function() {
var select_options162559 = null;
var select_options162559__1 = (function (coll){
return select_options162559.call(null,coll,null);
});
var select_options162559__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__162568(s__162569){
return (new cljs.core.LazySeq(null,(function (){
var s__162569__$1 = s__162569;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__162569__$1);
if(temp__4126__auto__){
var s__162569__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162569__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__162569__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__162571 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__162570 = (0);
while(true){
if((i__162570 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__162570);
cljs.core.chunk_append.call(null,b__162571,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__162574 = x;
var text = cljs.core.nth.call(null,vec__162574,(0),null);
var val = cljs.core.nth.call(null,vec__162574,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__162574,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options162559.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__162576 = (i__162570 + (1));
i__162570 = G__162576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162571),iter__162568.call(null,cljs.core.chunk_rest.call(null,s__162569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__162571),null);
}
} else {
var x = cljs.core.first.call(null,s__162569__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__162575 = x;
var text = cljs.core.nth.call(null,vec__162575,(0),null);
var val = cljs.core.nth.call(null,vec__162575,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__162575,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options162559.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__162568.call(null,cljs.core.rest.call(null,s__162569__$2)));
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
select_options162559 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options162559__1.call(this,coll);
case 2:
return select_options162559__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options162559.cljs$core$IFn$_invoke$arity$1 = select_options162559__1;
select_options162559.cljs$core$IFn$_invoke$arity$2 = select_options162559__2;
return select_options162559;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options162559);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down162577 = (function() {
var drop_down162577 = null;
var drop_down162577__2 = (function (name,options){
return drop_down162577.call(null,name,options,null);
});
var drop_down162577__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down162577 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down162577__2.call(this,name,options);
case 3:
return drop_down162577__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down162577.cljs$core$IFn$_invoke$arity$2 = drop_down162577__2;
drop_down162577.cljs$core$IFn$_invoke$arity$3 = drop_down162577__3;
return drop_down162577;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down162577);
/**
* Creates a text area element.
*/
sablono.core.text_area162578 = (function() {
var text_area162578 = null;
var text_area162578__1 = (function (name){
return text_area162578.call(null,name,null);
});
var text_area162578__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area162578 = function(name,value){
switch(arguments.length){
case 1:
return text_area162578__1.call(this,name);
case 2:
return text_area162578__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area162578.cljs$core$IFn$_invoke$arity$1 = text_area162578__1;
text_area162578.cljs$core$IFn$_invoke$arity$2 = text_area162578__2;
return text_area162578;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area162578);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label162579 = (function label162579(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label162579);
/**
* Creates a submit button.
*/
sablono.core.submit_button162580 = (function submit_button162580(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button162580);
/**
* Creates a form reset button.
*/
sablono.core.reset_button162581 = (function reset_button162581(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button162581);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to162582 = (function() { 
var form_to162582__delegate = function (p__162583,body){
var vec__162585 = p__162583;
var method = cljs.core.nth.call(null,vec__162585,(0),null);
var action = cljs.core.nth.call(null,vec__162585,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to162582 = function (p__162583,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to162582__delegate.call(this,p__162583,body);};
form_to162582.cljs$lang$maxFixedArity = 1;
form_to162582.cljs$lang$applyTo = (function (arglist__162586){
var p__162583 = cljs.core.first(arglist__162586);
var body = cljs.core.rest(arglist__162586);
return form_to162582__delegate(p__162583,body);
});
form_to162582.cljs$core$IFn$_invoke$arity$variadic = form_to162582__delegate;
return form_to162582;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to162582);

//# sourceMappingURL=core.js.map