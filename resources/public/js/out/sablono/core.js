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
var G__1225842__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__1225841 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__1225841,(0),null);
var body = cljs.core.nthnext.call(null,vec__1225841,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__1225842 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__1225842__delegate.call(this,args);};
G__1225842.cljs$lang$maxFixedArity = 0;
G__1225842.cljs$lang$applyTo = (function (arglist__1225843){
var args = cljs.core.seq(arglist__1225843);
return G__1225842__delegate(args);
});
G__1225842.cljs$core$IFn$_invoke$arity$variadic = G__1225842__delegate;
return G__1225842;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__1225848(s__1225849){
return (new cljs.core.LazySeq(null,(function (){
var s__1225849__$1 = s__1225849;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1225849__$1);
if(temp__4126__auto__){
var s__1225849__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1225849__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1225849__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1225851 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1225850 = (0);
while(true){
if((i__1225850 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__1225850);
cljs.core.chunk_append.call(null,b__1225851,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__1225852 = (i__1225850 + (1));
i__1225850 = G__1225852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225851),iter__1225848.call(null,cljs.core.chunk_rest.call(null,s__1225849__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225851),null);
}
} else {
var args = cljs.core.first.call(null,s__1225849__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__1225848.call(null,cljs.core.rest.call(null,s__1225849__$2)));
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
var iter__4378__auto__ = (function iter__1225857(s__1225858){
return (new cljs.core.LazySeq(null,(function (){
var s__1225858__$1 = s__1225858;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1225858__$1);
if(temp__4126__auto__){
var s__1225858__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1225858__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1225858__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1225860 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1225859 = (0);
while(true){
if((i__1225859 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__1225859);
cljs.core.chunk_append.call(null,b__1225860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__1225861 = (i__1225859 + (1));
i__1225859 = G__1225861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225860),iter__1225857.call(null,cljs.core.chunk_rest.call(null,s__1225858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225860),null);
}
} else {
var style = cljs.core.first.call(null,s__1225858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__1225857.call(null,cljs.core.rest.call(null,s__1225858__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__1225862){
var styles = cljs.core.seq(arglist__1225862);
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
sablono.core.link_to1225863 = (function() { 
var link_to1225863__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to1225863 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to1225863__delegate.call(this,url,content);};
link_to1225863.cljs$lang$maxFixedArity = 1;
link_to1225863.cljs$lang$applyTo = (function (arglist__1225864){
var url = cljs.core.first(arglist__1225864);
var content = cljs.core.rest(arglist__1225864);
return link_to1225863__delegate(url,content);
});
link_to1225863.cljs$core$IFn$_invoke$arity$variadic = link_to1225863__delegate;
return link_to1225863;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to1225863);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to1225865 = (function() { 
var mail_to1225865__delegate = function (e_mail,p__1225866){
var vec__1225868 = p__1225866;
var content = cljs.core.nth.call(null,vec__1225868,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to1225865 = function (e_mail,var_args){
var p__1225866 = null;
if (arguments.length > 1) {
  p__1225866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to1225865__delegate.call(this,e_mail,p__1225866);};
mail_to1225865.cljs$lang$maxFixedArity = 1;
mail_to1225865.cljs$lang$applyTo = (function (arglist__1225869){
var e_mail = cljs.core.first(arglist__1225869);
var p__1225866 = cljs.core.rest(arglist__1225869);
return mail_to1225865__delegate(e_mail,p__1225866);
});
mail_to1225865.cljs$core$IFn$_invoke$arity$variadic = mail_to1225865__delegate;
return mail_to1225865;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to1225865);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list1225870 = (function unordered_list1225870(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__1225875(s__1225876){
return (new cljs.core.LazySeq(null,(function (){
var s__1225876__$1 = s__1225876;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1225876__$1);
if(temp__4126__auto__){
var s__1225876__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1225876__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1225876__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1225878 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1225877 = (0);
while(true){
if((i__1225877 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1225877);
cljs.core.chunk_append.call(null,b__1225878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1225879 = (i__1225877 + (1));
i__1225877 = G__1225879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225878),iter__1225875.call(null,cljs.core.chunk_rest.call(null,s__1225876__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225878),null);
}
} else {
var x = cljs.core.first.call(null,s__1225876__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1225875.call(null,cljs.core.rest.call(null,s__1225876__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list1225870);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list1225880 = (function ordered_list1225880(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__1225885(s__1225886){
return (new cljs.core.LazySeq(null,(function (){
var s__1225886__$1 = s__1225886;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1225886__$1);
if(temp__4126__auto__){
var s__1225886__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1225886__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1225886__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1225888 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1225887 = (0);
while(true){
if((i__1225887 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1225887);
cljs.core.chunk_append.call(null,b__1225888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__1225889 = (i__1225887 + (1));
i__1225887 = G__1225889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225888),iter__1225885.call(null,cljs.core.chunk_rest.call(null,s__1225886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225888),null);
}
} else {
var x = cljs.core.first.call(null,s__1225886__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__1225885.call(null,cljs.core.rest.call(null,s__1225886__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list1225880);
/**
* Create an image element.
*/
sablono.core.image1225890 = (function() {
var image1225890 = null;
var image1225890__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image1225890__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image1225890 = function(src,alt){
switch(arguments.length){
case 1:
return image1225890__1.call(this,src);
case 2:
return image1225890__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image1225890.cljs$core$IFn$_invoke$arity$1 = image1225890__1;
image1225890.cljs$core$IFn$_invoke$arity$2 = image1225890__2;
return image1225890;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image1225890);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__1225891_SHARP_,p2__1225892_SHARP_){
return [cljs.core.str(p1__1225891_SHARP_),cljs.core.str("["),cljs.core.str(p2__1225892_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__1225893_SHARP_,p2__1225894_SHARP_){
return [cljs.core.str(p1__1225893_SHARP_),cljs.core.str("-"),cljs.core.str(p2__1225894_SHARP_)].join('');
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
sablono.core.color_field1225895 = (function() {
var color_field1225895 = null;
var color_field1225895__1 = (function (name__9770__auto__){
return color_field1225895.call(null,name__9770__auto__,null);
});
var color_field1225895__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__9770__auto__,value__9771__auto__);
});
color_field1225895 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return color_field1225895__1.call(this,name__9770__auto__);
case 2:
return color_field1225895__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field1225895.cljs$core$IFn$_invoke$arity$1 = color_field1225895__1;
color_field1225895.cljs$core$IFn$_invoke$arity$2 = color_field1225895__2;
return color_field1225895;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field1225895);

/**
* Creates a date input field.
*/
sablono.core.date_field1225896 = (function() {
var date_field1225896 = null;
var date_field1225896__1 = (function (name__9770__auto__){
return date_field1225896.call(null,name__9770__auto__,null);
});
var date_field1225896__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__9770__auto__,value__9771__auto__);
});
date_field1225896 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return date_field1225896__1.call(this,name__9770__auto__);
case 2:
return date_field1225896__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field1225896.cljs$core$IFn$_invoke$arity$1 = date_field1225896__1;
date_field1225896.cljs$core$IFn$_invoke$arity$2 = date_field1225896__2;
return date_field1225896;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field1225896);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field1225897 = (function() {
var datetime_field1225897 = null;
var datetime_field1225897__1 = (function (name__9770__auto__){
return datetime_field1225897.call(null,name__9770__auto__,null);
});
var datetime_field1225897__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_field1225897 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_field1225897__1.call(this,name__9770__auto__);
case 2:
return datetime_field1225897__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field1225897.cljs$core$IFn$_invoke$arity$1 = datetime_field1225897__1;
datetime_field1225897.cljs$core$IFn$_invoke$arity$2 = datetime_field1225897__2;
return datetime_field1225897;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field1225897);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field1225898 = (function() {
var datetime_local_field1225898 = null;
var datetime_local_field1225898__1 = (function (name__9770__auto__){
return datetime_local_field1225898.call(null,name__9770__auto__,null);
});
var datetime_local_field1225898__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__9770__auto__,value__9771__auto__);
});
datetime_local_field1225898 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return datetime_local_field1225898__1.call(this,name__9770__auto__);
case 2:
return datetime_local_field1225898__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field1225898.cljs$core$IFn$_invoke$arity$1 = datetime_local_field1225898__1;
datetime_local_field1225898.cljs$core$IFn$_invoke$arity$2 = datetime_local_field1225898__2;
return datetime_local_field1225898;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field1225898);

/**
* Creates a email input field.
*/
sablono.core.email_field1225899 = (function() {
var email_field1225899 = null;
var email_field1225899__1 = (function (name__9770__auto__){
return email_field1225899.call(null,name__9770__auto__,null);
});
var email_field1225899__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__9770__auto__,value__9771__auto__);
});
email_field1225899 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return email_field1225899__1.call(this,name__9770__auto__);
case 2:
return email_field1225899__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field1225899.cljs$core$IFn$_invoke$arity$1 = email_field1225899__1;
email_field1225899.cljs$core$IFn$_invoke$arity$2 = email_field1225899__2;
return email_field1225899;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field1225899);

/**
* Creates a file input field.
*/
sablono.core.file_field1225900 = (function() {
var file_field1225900 = null;
var file_field1225900__1 = (function (name__9770__auto__){
return file_field1225900.call(null,name__9770__auto__,null);
});
var file_field1225900__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__9770__auto__,value__9771__auto__);
});
file_field1225900 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return file_field1225900__1.call(this,name__9770__auto__);
case 2:
return file_field1225900__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field1225900.cljs$core$IFn$_invoke$arity$1 = file_field1225900__1;
file_field1225900.cljs$core$IFn$_invoke$arity$2 = file_field1225900__2;
return file_field1225900;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field1225900);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field1225901 = (function() {
var hidden_field1225901 = null;
var hidden_field1225901__1 = (function (name__9770__auto__){
return hidden_field1225901.call(null,name__9770__auto__,null);
});
var hidden_field1225901__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__9770__auto__,value__9771__auto__);
});
hidden_field1225901 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return hidden_field1225901__1.call(this,name__9770__auto__);
case 2:
return hidden_field1225901__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field1225901.cljs$core$IFn$_invoke$arity$1 = hidden_field1225901__1;
hidden_field1225901.cljs$core$IFn$_invoke$arity$2 = hidden_field1225901__2;
return hidden_field1225901;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field1225901);

/**
* Creates a month input field.
*/
sablono.core.month_field1225902 = (function() {
var month_field1225902 = null;
var month_field1225902__1 = (function (name__9770__auto__){
return month_field1225902.call(null,name__9770__auto__,null);
});
var month_field1225902__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__9770__auto__,value__9771__auto__);
});
month_field1225902 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return month_field1225902__1.call(this,name__9770__auto__);
case 2:
return month_field1225902__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field1225902.cljs$core$IFn$_invoke$arity$1 = month_field1225902__1;
month_field1225902.cljs$core$IFn$_invoke$arity$2 = month_field1225902__2;
return month_field1225902;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field1225902);

/**
* Creates a number input field.
*/
sablono.core.number_field1225903 = (function() {
var number_field1225903 = null;
var number_field1225903__1 = (function (name__9770__auto__){
return number_field1225903.call(null,name__9770__auto__,null);
});
var number_field1225903__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__9770__auto__,value__9771__auto__);
});
number_field1225903 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return number_field1225903__1.call(this,name__9770__auto__);
case 2:
return number_field1225903__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field1225903.cljs$core$IFn$_invoke$arity$1 = number_field1225903__1;
number_field1225903.cljs$core$IFn$_invoke$arity$2 = number_field1225903__2;
return number_field1225903;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field1225903);

/**
* Creates a password input field.
*/
sablono.core.password_field1225904 = (function() {
var password_field1225904 = null;
var password_field1225904__1 = (function (name__9770__auto__){
return password_field1225904.call(null,name__9770__auto__,null);
});
var password_field1225904__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__9770__auto__,value__9771__auto__);
});
password_field1225904 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return password_field1225904__1.call(this,name__9770__auto__);
case 2:
return password_field1225904__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field1225904.cljs$core$IFn$_invoke$arity$1 = password_field1225904__1;
password_field1225904.cljs$core$IFn$_invoke$arity$2 = password_field1225904__2;
return password_field1225904;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field1225904);

/**
* Creates a range input field.
*/
sablono.core.range_field1225905 = (function() {
var range_field1225905 = null;
var range_field1225905__1 = (function (name__9770__auto__){
return range_field1225905.call(null,name__9770__auto__,null);
});
var range_field1225905__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__9770__auto__,value__9771__auto__);
});
range_field1225905 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return range_field1225905__1.call(this,name__9770__auto__);
case 2:
return range_field1225905__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field1225905.cljs$core$IFn$_invoke$arity$1 = range_field1225905__1;
range_field1225905.cljs$core$IFn$_invoke$arity$2 = range_field1225905__2;
return range_field1225905;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field1225905);

/**
* Creates a search input field.
*/
sablono.core.search_field1225906 = (function() {
var search_field1225906 = null;
var search_field1225906__1 = (function (name__9770__auto__){
return search_field1225906.call(null,name__9770__auto__,null);
});
var search_field1225906__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__9770__auto__,value__9771__auto__);
});
search_field1225906 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return search_field1225906__1.call(this,name__9770__auto__);
case 2:
return search_field1225906__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field1225906.cljs$core$IFn$_invoke$arity$1 = search_field1225906__1;
search_field1225906.cljs$core$IFn$_invoke$arity$2 = search_field1225906__2;
return search_field1225906;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field1225906);

/**
* Creates a tel input field.
*/
sablono.core.tel_field1225907 = (function() {
var tel_field1225907 = null;
var tel_field1225907__1 = (function (name__9770__auto__){
return tel_field1225907.call(null,name__9770__auto__,null);
});
var tel_field1225907__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__9770__auto__,value__9771__auto__);
});
tel_field1225907 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return tel_field1225907__1.call(this,name__9770__auto__);
case 2:
return tel_field1225907__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field1225907.cljs$core$IFn$_invoke$arity$1 = tel_field1225907__1;
tel_field1225907.cljs$core$IFn$_invoke$arity$2 = tel_field1225907__2;
return tel_field1225907;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field1225907);

/**
* Creates a text input field.
*/
sablono.core.text_field1225908 = (function() {
var text_field1225908 = null;
var text_field1225908__1 = (function (name__9770__auto__){
return text_field1225908.call(null,name__9770__auto__,null);
});
var text_field1225908__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__9770__auto__,value__9771__auto__);
});
text_field1225908 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return text_field1225908__1.call(this,name__9770__auto__);
case 2:
return text_field1225908__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field1225908.cljs$core$IFn$_invoke$arity$1 = text_field1225908__1;
text_field1225908.cljs$core$IFn$_invoke$arity$2 = text_field1225908__2;
return text_field1225908;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field1225908);

/**
* Creates a time input field.
*/
sablono.core.time_field1225909 = (function() {
var time_field1225909 = null;
var time_field1225909__1 = (function (name__9770__auto__){
return time_field1225909.call(null,name__9770__auto__,null);
});
var time_field1225909__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__9770__auto__,value__9771__auto__);
});
time_field1225909 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return time_field1225909__1.call(this,name__9770__auto__);
case 2:
return time_field1225909__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field1225909.cljs$core$IFn$_invoke$arity$1 = time_field1225909__1;
time_field1225909.cljs$core$IFn$_invoke$arity$2 = time_field1225909__2;
return time_field1225909;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field1225909);

/**
* Creates a url input field.
*/
sablono.core.url_field1225910 = (function() {
var url_field1225910 = null;
var url_field1225910__1 = (function (name__9770__auto__){
return url_field1225910.call(null,name__9770__auto__,null);
});
var url_field1225910__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__9770__auto__,value__9771__auto__);
});
url_field1225910 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return url_field1225910__1.call(this,name__9770__auto__);
case 2:
return url_field1225910__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field1225910.cljs$core$IFn$_invoke$arity$1 = url_field1225910__1;
url_field1225910.cljs$core$IFn$_invoke$arity$2 = url_field1225910__2;
return url_field1225910;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field1225910);

/**
* Creates a week input field.
*/
sablono.core.week_field1225911 = (function() {
var week_field1225911 = null;
var week_field1225911__1 = (function (name__9770__auto__){
return week_field1225911.call(null,name__9770__auto__,null);
});
var week_field1225911__2 = (function (name__9770__auto__,value__9771__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__9770__auto__,value__9771__auto__);
});
week_field1225911 = function(name__9770__auto__,value__9771__auto__){
switch(arguments.length){
case 1:
return week_field1225911__1.call(this,name__9770__auto__);
case 2:
return week_field1225911__2.call(this,name__9770__auto__,value__9771__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field1225911.cljs$core$IFn$_invoke$arity$1 = week_field1225911__1;
week_field1225911.cljs$core$IFn$_invoke$arity$2 = week_field1225911__2;
return week_field1225911;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field1225911);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box1225912 = (function() {
var check_box1225912 = null;
var check_box1225912__1 = (function (name){
return check_box1225912.call(null,name,null);
});
var check_box1225912__2 = (function (name,checked_QMARK_){
return check_box1225912.call(null,name,checked_QMARK_,"true");
});
var check_box1225912__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box1225912 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box1225912__1.call(this,name);
case 2:
return check_box1225912__2.call(this,name,checked_QMARK_);
case 3:
return check_box1225912__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box1225912.cljs$core$IFn$_invoke$arity$1 = check_box1225912__1;
check_box1225912.cljs$core$IFn$_invoke$arity$2 = check_box1225912__2;
check_box1225912.cljs$core$IFn$_invoke$arity$3 = check_box1225912__3;
return check_box1225912;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box1225912);
/**
* Creates a radio button.
*/
sablono.core.radio_button1225913 = (function() {
var radio_button1225913 = null;
var radio_button1225913__1 = (function (group){
return radio_button1225913.call(null,group,null);
});
var radio_button1225913__2 = (function (group,checked_QMARK_){
return radio_button1225913.call(null,group,checked_QMARK_,"true");
});
var radio_button1225913__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button1225913 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button1225913__1.call(this,group);
case 2:
return radio_button1225913__2.call(this,group,checked_QMARK_);
case 3:
return radio_button1225913__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button1225913.cljs$core$IFn$_invoke$arity$1 = radio_button1225913__1;
radio_button1225913.cljs$core$IFn$_invoke$arity$2 = radio_button1225913__2;
radio_button1225913.cljs$core$IFn$_invoke$arity$3 = radio_button1225913__3;
return radio_button1225913;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button1225913);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options1225914 = (function() {
var select_options1225914 = null;
var select_options1225914__1 = (function (coll){
return select_options1225914.call(null,coll,null);
});
var select_options1225914__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__1225923(s__1225924){
return (new cljs.core.LazySeq(null,(function (){
var s__1225924__$1 = s__1225924;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1225924__$1);
if(temp__4126__auto__){
var s__1225924__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1225924__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__1225924__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__1225926 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__1225925 = (0);
while(true){
if((i__1225925 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__1225925);
cljs.core.chunk_append.call(null,b__1225926,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1225929 = x;
var text = cljs.core.nth.call(null,vec__1225929,(0),null);
var val = cljs.core.nth.call(null,vec__1225929,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1225929,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1225914.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__1225931 = (i__1225925 + (1));
i__1225925 = G__1225931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225926),iter__1225923.call(null,cljs.core.chunk_rest.call(null,s__1225924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1225926),null);
}
} else {
var x = cljs.core.first.call(null,s__1225924__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__1225930 = x;
var text = cljs.core.nth.call(null,vec__1225930,(0),null);
var val = cljs.core.nth.call(null,vec__1225930,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__1225930,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options1225914.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__1225923.call(null,cljs.core.rest.call(null,s__1225924__$2)));
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
select_options1225914 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options1225914__1.call(this,coll);
case 2:
return select_options1225914__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options1225914.cljs$core$IFn$_invoke$arity$1 = select_options1225914__1;
select_options1225914.cljs$core$IFn$_invoke$arity$2 = select_options1225914__2;
return select_options1225914;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options1225914);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down1225932 = (function() {
var drop_down1225932 = null;
var drop_down1225932__2 = (function (name,options){
return drop_down1225932.call(null,name,options,null);
});
var drop_down1225932__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down1225932 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down1225932__2.call(this,name,options);
case 3:
return drop_down1225932__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down1225932.cljs$core$IFn$_invoke$arity$2 = drop_down1225932__2;
drop_down1225932.cljs$core$IFn$_invoke$arity$3 = drop_down1225932__3;
return drop_down1225932;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down1225932);
/**
* Creates a text area element.
*/
sablono.core.text_area1225933 = (function() {
var text_area1225933 = null;
var text_area1225933__1 = (function (name){
return text_area1225933.call(null,name,null);
});
var text_area1225933__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area1225933 = function(name,value){
switch(arguments.length){
case 1:
return text_area1225933__1.call(this,name);
case 2:
return text_area1225933__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area1225933.cljs$core$IFn$_invoke$arity$1 = text_area1225933__1;
text_area1225933.cljs$core$IFn$_invoke$arity$2 = text_area1225933__2;
return text_area1225933;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area1225933);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label1225934 = (function label1225934(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label1225934);
/**
* Creates a submit button.
*/
sablono.core.submit_button1225935 = (function submit_button1225935(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button1225935);
/**
* Creates a form reset button.
*/
sablono.core.reset_button1225936 = (function reset_button1225936(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button1225936);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to1225937 = (function() { 
var form_to1225937__delegate = function (p__1225938,body){
var vec__1225940 = p__1225938;
var method = cljs.core.nth.call(null,vec__1225940,(0),null);
var action = cljs.core.nth.call(null,vec__1225940,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to1225937 = function (p__1225938,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to1225937__delegate.call(this,p__1225938,body);};
form_to1225937.cljs$lang$maxFixedArity = 1;
form_to1225937.cljs$lang$applyTo = (function (arglist__1225941){
var p__1225938 = cljs.core.first(arglist__1225941);
var body = cljs.core.rest(arglist__1225941);
return form_to1225937__delegate(p__1225938,body);
});
form_to1225937.cljs$core$IFn$_invoke$arity$variadic = form_to1225937__delegate;
return form_to1225937;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to1225937);

//# sourceMappingURL=core.js.map