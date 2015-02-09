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
var G__130133__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__130132 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__130132,(0),null);
var body = cljs.core.nthnext.call(null,vec__130132,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__130133 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__130133__delegate.call(this,args);};
G__130133.cljs$lang$maxFixedArity = 0;
G__130133.cljs$lang$applyTo = (function (arglist__130134){
var args = cljs.core.seq(arglist__130134);
return G__130133__delegate(args);
});
G__130133.cljs$core$IFn$_invoke$arity$variadic = G__130133__delegate;
return G__130133;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__130139(s__130140){
return (new cljs.core.LazySeq(null,(function (){
var s__130140__$1 = s__130140;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__130140__$1);
if(temp__4126__auto__){
var s__130140__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130140__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__130140__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__130142 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__130141 = (0);
while(true){
if((i__130141 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__130141);
cljs.core.chunk_append.call(null,b__130142,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__130143 = (i__130141 + (1));
i__130141 = G__130143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130142),iter__130139.call(null,cljs.core.chunk_rest.call(null,s__130140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130142),null);
}
} else {
var args = cljs.core.first.call(null,s__130140__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__130139.call(null,cljs.core.rest.call(null,s__130140__$2)));
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
var iter__4378__auto__ = (function iter__130148(s__130149){
return (new cljs.core.LazySeq(null,(function (){
var s__130149__$1 = s__130149;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__130149__$1);
if(temp__4126__auto__){
var s__130149__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130149__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__130149__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__130151 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__130150 = (0);
while(true){
if((i__130150 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__130150);
cljs.core.chunk_append.call(null,b__130151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__130152 = (i__130150 + (1));
i__130150 = G__130152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130151),iter__130148.call(null,cljs.core.chunk_rest.call(null,s__130149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130151),null);
}
} else {
var style = cljs.core.first.call(null,s__130149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__130148.call(null,cljs.core.rest.call(null,s__130149__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__130153){
var styles = cljs.core.seq(arglist__130153);
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
sablono.core.link_to130154 = (function() { 
var link_to130154__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to130154 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to130154__delegate.call(this,url,content);};
link_to130154.cljs$lang$maxFixedArity = 1;
link_to130154.cljs$lang$applyTo = (function (arglist__130155){
var url = cljs.core.first(arglist__130155);
var content = cljs.core.rest(arglist__130155);
return link_to130154__delegate(url,content);
});
link_to130154.cljs$core$IFn$_invoke$arity$variadic = link_to130154__delegate;
return link_to130154;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to130154);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to130156 = (function() { 
var mail_to130156__delegate = function (e_mail,p__130157){
var vec__130159 = p__130157;
var content = cljs.core.nth.call(null,vec__130159,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to130156 = function (e_mail,var_args){
var p__130157 = null;
if (arguments.length > 1) {
  p__130157 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to130156__delegate.call(this,e_mail,p__130157);};
mail_to130156.cljs$lang$maxFixedArity = 1;
mail_to130156.cljs$lang$applyTo = (function (arglist__130160){
var e_mail = cljs.core.first(arglist__130160);
var p__130157 = cljs.core.rest(arglist__130160);
return mail_to130156__delegate(e_mail,p__130157);
});
mail_to130156.cljs$core$IFn$_invoke$arity$variadic = mail_to130156__delegate;
return mail_to130156;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to130156);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list130161 = (function unordered_list130161(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__130166(s__130167){
return (new cljs.core.LazySeq(null,(function (){
var s__130167__$1 = s__130167;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__130167__$1);
if(temp__4126__auto__){
var s__130167__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130167__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__130167__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__130169 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__130168 = (0);
while(true){
if((i__130168 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__130168);
cljs.core.chunk_append.call(null,b__130169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__130170 = (i__130168 + (1));
i__130168 = G__130170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130169),iter__130166.call(null,cljs.core.chunk_rest.call(null,s__130167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130169),null);
}
} else {
var x = cljs.core.first.call(null,s__130167__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__130166.call(null,cljs.core.rest.call(null,s__130167__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list130161);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list130171 = (function ordered_list130171(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__130176(s__130177){
return (new cljs.core.LazySeq(null,(function (){
var s__130177__$1 = s__130177;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__130177__$1);
if(temp__4126__auto__){
var s__130177__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130177__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__130177__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__130179 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__130178 = (0);
while(true){
if((i__130178 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__130178);
cljs.core.chunk_append.call(null,b__130179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__130180 = (i__130178 + (1));
i__130178 = G__130180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130179),iter__130176.call(null,cljs.core.chunk_rest.call(null,s__130177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130179),null);
}
} else {
var x = cljs.core.first.call(null,s__130177__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__130176.call(null,cljs.core.rest.call(null,s__130177__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list130171);
/**
* Create an image element.
*/
sablono.core.image130181 = (function() {
var image130181 = null;
var image130181__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image130181__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image130181 = function(src,alt){
switch(arguments.length){
case 1:
return image130181__1.call(this,src);
case 2:
return image130181__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image130181.cljs$core$IFn$_invoke$arity$1 = image130181__1;
image130181.cljs$core$IFn$_invoke$arity$2 = image130181__2;
return image130181;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image130181);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__130182_SHARP_,p2__130183_SHARP_){
return [cljs.core.str(p1__130182_SHARP_),cljs.core.str("["),cljs.core.str(p2__130183_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__130184_SHARP_,p2__130185_SHARP_){
return [cljs.core.str(p1__130184_SHARP_),cljs.core.str("-"),cljs.core.str(p2__130185_SHARP_)].join('');
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
sablono.core.color_field130186 = (function() {
var color_field130186 = null;
var color_field130186__1 = (function (name__10377__auto__){
return color_field130186.call(null,name__10377__auto__,null);
});
var color_field130186__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10377__auto__,value__10378__auto__);
});
color_field130186 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return color_field130186__1.call(this,name__10377__auto__);
case 2:
return color_field130186__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field130186.cljs$core$IFn$_invoke$arity$1 = color_field130186__1;
color_field130186.cljs$core$IFn$_invoke$arity$2 = color_field130186__2;
return color_field130186;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field130186);

/**
* Creates a date input field.
*/
sablono.core.date_field130187 = (function() {
var date_field130187 = null;
var date_field130187__1 = (function (name__10377__auto__){
return date_field130187.call(null,name__10377__auto__,null);
});
var date_field130187__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10377__auto__,value__10378__auto__);
});
date_field130187 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return date_field130187__1.call(this,name__10377__auto__);
case 2:
return date_field130187__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field130187.cljs$core$IFn$_invoke$arity$1 = date_field130187__1;
date_field130187.cljs$core$IFn$_invoke$arity$2 = date_field130187__2;
return date_field130187;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field130187);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field130188 = (function() {
var datetime_field130188 = null;
var datetime_field130188__1 = (function (name__10377__auto__){
return datetime_field130188.call(null,name__10377__auto__,null);
});
var datetime_field130188__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_field130188 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_field130188__1.call(this,name__10377__auto__);
case 2:
return datetime_field130188__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field130188.cljs$core$IFn$_invoke$arity$1 = datetime_field130188__1;
datetime_field130188.cljs$core$IFn$_invoke$arity$2 = datetime_field130188__2;
return datetime_field130188;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field130188);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field130189 = (function() {
var datetime_local_field130189 = null;
var datetime_local_field130189__1 = (function (name__10377__auto__){
return datetime_local_field130189.call(null,name__10377__auto__,null);
});
var datetime_local_field130189__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10377__auto__,value__10378__auto__);
});
datetime_local_field130189 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return datetime_local_field130189__1.call(this,name__10377__auto__);
case 2:
return datetime_local_field130189__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field130189.cljs$core$IFn$_invoke$arity$1 = datetime_local_field130189__1;
datetime_local_field130189.cljs$core$IFn$_invoke$arity$2 = datetime_local_field130189__2;
return datetime_local_field130189;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field130189);

/**
* Creates a email input field.
*/
sablono.core.email_field130190 = (function() {
var email_field130190 = null;
var email_field130190__1 = (function (name__10377__auto__){
return email_field130190.call(null,name__10377__auto__,null);
});
var email_field130190__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10377__auto__,value__10378__auto__);
});
email_field130190 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return email_field130190__1.call(this,name__10377__auto__);
case 2:
return email_field130190__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field130190.cljs$core$IFn$_invoke$arity$1 = email_field130190__1;
email_field130190.cljs$core$IFn$_invoke$arity$2 = email_field130190__2;
return email_field130190;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field130190);

/**
* Creates a file input field.
*/
sablono.core.file_field130191 = (function() {
var file_field130191 = null;
var file_field130191__1 = (function (name__10377__auto__){
return file_field130191.call(null,name__10377__auto__,null);
});
var file_field130191__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10377__auto__,value__10378__auto__);
});
file_field130191 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return file_field130191__1.call(this,name__10377__auto__);
case 2:
return file_field130191__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field130191.cljs$core$IFn$_invoke$arity$1 = file_field130191__1;
file_field130191.cljs$core$IFn$_invoke$arity$2 = file_field130191__2;
return file_field130191;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field130191);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field130192 = (function() {
var hidden_field130192 = null;
var hidden_field130192__1 = (function (name__10377__auto__){
return hidden_field130192.call(null,name__10377__auto__,null);
});
var hidden_field130192__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10377__auto__,value__10378__auto__);
});
hidden_field130192 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return hidden_field130192__1.call(this,name__10377__auto__);
case 2:
return hidden_field130192__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field130192.cljs$core$IFn$_invoke$arity$1 = hidden_field130192__1;
hidden_field130192.cljs$core$IFn$_invoke$arity$2 = hidden_field130192__2;
return hidden_field130192;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field130192);

/**
* Creates a month input field.
*/
sablono.core.month_field130193 = (function() {
var month_field130193 = null;
var month_field130193__1 = (function (name__10377__auto__){
return month_field130193.call(null,name__10377__auto__,null);
});
var month_field130193__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10377__auto__,value__10378__auto__);
});
month_field130193 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return month_field130193__1.call(this,name__10377__auto__);
case 2:
return month_field130193__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field130193.cljs$core$IFn$_invoke$arity$1 = month_field130193__1;
month_field130193.cljs$core$IFn$_invoke$arity$2 = month_field130193__2;
return month_field130193;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field130193);

/**
* Creates a number input field.
*/
sablono.core.number_field130194 = (function() {
var number_field130194 = null;
var number_field130194__1 = (function (name__10377__auto__){
return number_field130194.call(null,name__10377__auto__,null);
});
var number_field130194__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10377__auto__,value__10378__auto__);
});
number_field130194 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return number_field130194__1.call(this,name__10377__auto__);
case 2:
return number_field130194__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field130194.cljs$core$IFn$_invoke$arity$1 = number_field130194__1;
number_field130194.cljs$core$IFn$_invoke$arity$2 = number_field130194__2;
return number_field130194;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field130194);

/**
* Creates a password input field.
*/
sablono.core.password_field130195 = (function() {
var password_field130195 = null;
var password_field130195__1 = (function (name__10377__auto__){
return password_field130195.call(null,name__10377__auto__,null);
});
var password_field130195__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10377__auto__,value__10378__auto__);
});
password_field130195 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return password_field130195__1.call(this,name__10377__auto__);
case 2:
return password_field130195__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field130195.cljs$core$IFn$_invoke$arity$1 = password_field130195__1;
password_field130195.cljs$core$IFn$_invoke$arity$2 = password_field130195__2;
return password_field130195;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field130195);

/**
* Creates a range input field.
*/
sablono.core.range_field130196 = (function() {
var range_field130196 = null;
var range_field130196__1 = (function (name__10377__auto__){
return range_field130196.call(null,name__10377__auto__,null);
});
var range_field130196__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10377__auto__,value__10378__auto__);
});
range_field130196 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return range_field130196__1.call(this,name__10377__auto__);
case 2:
return range_field130196__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field130196.cljs$core$IFn$_invoke$arity$1 = range_field130196__1;
range_field130196.cljs$core$IFn$_invoke$arity$2 = range_field130196__2;
return range_field130196;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field130196);

/**
* Creates a search input field.
*/
sablono.core.search_field130197 = (function() {
var search_field130197 = null;
var search_field130197__1 = (function (name__10377__auto__){
return search_field130197.call(null,name__10377__auto__,null);
});
var search_field130197__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10377__auto__,value__10378__auto__);
});
search_field130197 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return search_field130197__1.call(this,name__10377__auto__);
case 2:
return search_field130197__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field130197.cljs$core$IFn$_invoke$arity$1 = search_field130197__1;
search_field130197.cljs$core$IFn$_invoke$arity$2 = search_field130197__2;
return search_field130197;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field130197);

/**
* Creates a tel input field.
*/
sablono.core.tel_field130198 = (function() {
var tel_field130198 = null;
var tel_field130198__1 = (function (name__10377__auto__){
return tel_field130198.call(null,name__10377__auto__,null);
});
var tel_field130198__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10377__auto__,value__10378__auto__);
});
tel_field130198 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return tel_field130198__1.call(this,name__10377__auto__);
case 2:
return tel_field130198__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field130198.cljs$core$IFn$_invoke$arity$1 = tel_field130198__1;
tel_field130198.cljs$core$IFn$_invoke$arity$2 = tel_field130198__2;
return tel_field130198;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field130198);

/**
* Creates a text input field.
*/
sablono.core.text_field130199 = (function() {
var text_field130199 = null;
var text_field130199__1 = (function (name__10377__auto__){
return text_field130199.call(null,name__10377__auto__,null);
});
var text_field130199__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10377__auto__,value__10378__auto__);
});
text_field130199 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return text_field130199__1.call(this,name__10377__auto__);
case 2:
return text_field130199__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field130199.cljs$core$IFn$_invoke$arity$1 = text_field130199__1;
text_field130199.cljs$core$IFn$_invoke$arity$2 = text_field130199__2;
return text_field130199;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field130199);

/**
* Creates a time input field.
*/
sablono.core.time_field130200 = (function() {
var time_field130200 = null;
var time_field130200__1 = (function (name__10377__auto__){
return time_field130200.call(null,name__10377__auto__,null);
});
var time_field130200__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10377__auto__,value__10378__auto__);
});
time_field130200 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return time_field130200__1.call(this,name__10377__auto__);
case 2:
return time_field130200__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field130200.cljs$core$IFn$_invoke$arity$1 = time_field130200__1;
time_field130200.cljs$core$IFn$_invoke$arity$2 = time_field130200__2;
return time_field130200;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field130200);

/**
* Creates a url input field.
*/
sablono.core.url_field130201 = (function() {
var url_field130201 = null;
var url_field130201__1 = (function (name__10377__auto__){
return url_field130201.call(null,name__10377__auto__,null);
});
var url_field130201__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10377__auto__,value__10378__auto__);
});
url_field130201 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return url_field130201__1.call(this,name__10377__auto__);
case 2:
return url_field130201__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field130201.cljs$core$IFn$_invoke$arity$1 = url_field130201__1;
url_field130201.cljs$core$IFn$_invoke$arity$2 = url_field130201__2;
return url_field130201;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field130201);

/**
* Creates a week input field.
*/
sablono.core.week_field130202 = (function() {
var week_field130202 = null;
var week_field130202__1 = (function (name__10377__auto__){
return week_field130202.call(null,name__10377__auto__,null);
});
var week_field130202__2 = (function (name__10377__auto__,value__10378__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10377__auto__,value__10378__auto__);
});
week_field130202 = function(name__10377__auto__,value__10378__auto__){
switch(arguments.length){
case 1:
return week_field130202__1.call(this,name__10377__auto__);
case 2:
return week_field130202__2.call(this,name__10377__auto__,value__10378__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field130202.cljs$core$IFn$_invoke$arity$1 = week_field130202__1;
week_field130202.cljs$core$IFn$_invoke$arity$2 = week_field130202__2;
return week_field130202;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field130202);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box130203 = (function() {
var check_box130203 = null;
var check_box130203__1 = (function (name){
return check_box130203.call(null,name,null);
});
var check_box130203__2 = (function (name,checked_QMARK_){
return check_box130203.call(null,name,checked_QMARK_,"true");
});
var check_box130203__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box130203 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box130203__1.call(this,name);
case 2:
return check_box130203__2.call(this,name,checked_QMARK_);
case 3:
return check_box130203__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box130203.cljs$core$IFn$_invoke$arity$1 = check_box130203__1;
check_box130203.cljs$core$IFn$_invoke$arity$2 = check_box130203__2;
check_box130203.cljs$core$IFn$_invoke$arity$3 = check_box130203__3;
return check_box130203;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box130203);
/**
* Creates a radio button.
*/
sablono.core.radio_button130204 = (function() {
var radio_button130204 = null;
var radio_button130204__1 = (function (group){
return radio_button130204.call(null,group,null);
});
var radio_button130204__2 = (function (group,checked_QMARK_){
return radio_button130204.call(null,group,checked_QMARK_,"true");
});
var radio_button130204__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button130204 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button130204__1.call(this,group);
case 2:
return radio_button130204__2.call(this,group,checked_QMARK_);
case 3:
return radio_button130204__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button130204.cljs$core$IFn$_invoke$arity$1 = radio_button130204__1;
radio_button130204.cljs$core$IFn$_invoke$arity$2 = radio_button130204__2;
radio_button130204.cljs$core$IFn$_invoke$arity$3 = radio_button130204__3;
return radio_button130204;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button130204);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options130205 = (function() {
var select_options130205 = null;
var select_options130205__1 = (function (coll){
return select_options130205.call(null,coll,null);
});
var select_options130205__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__130214(s__130215){
return (new cljs.core.LazySeq(null,(function (){
var s__130215__$1 = s__130215;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__130215__$1);
if(temp__4126__auto__){
var s__130215__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130215__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__130215__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__130217 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__130216 = (0);
while(true){
if((i__130216 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__130216);
cljs.core.chunk_append.call(null,b__130217,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__130220 = x;
var text = cljs.core.nth.call(null,vec__130220,(0),null);
var val = cljs.core.nth.call(null,vec__130220,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__130220,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options130205.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__130222 = (i__130216 + (1));
i__130216 = G__130222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130217),iter__130214.call(null,cljs.core.chunk_rest.call(null,s__130215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130217),null);
}
} else {
var x = cljs.core.first.call(null,s__130215__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__130221 = x;
var text = cljs.core.nth.call(null,vec__130221,(0),null);
var val = cljs.core.nth.call(null,vec__130221,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__130221,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options130205.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__130214.call(null,cljs.core.rest.call(null,s__130215__$2)));
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
select_options130205 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options130205__1.call(this,coll);
case 2:
return select_options130205__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options130205.cljs$core$IFn$_invoke$arity$1 = select_options130205__1;
select_options130205.cljs$core$IFn$_invoke$arity$2 = select_options130205__2;
return select_options130205;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options130205);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down130223 = (function() {
var drop_down130223 = null;
var drop_down130223__2 = (function (name,options){
return drop_down130223.call(null,name,options,null);
});
var drop_down130223__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down130223 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down130223__2.call(this,name,options);
case 3:
return drop_down130223__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down130223.cljs$core$IFn$_invoke$arity$2 = drop_down130223__2;
drop_down130223.cljs$core$IFn$_invoke$arity$3 = drop_down130223__3;
return drop_down130223;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down130223);
/**
* Creates a text area element.
*/
sablono.core.text_area130224 = (function() {
var text_area130224 = null;
var text_area130224__1 = (function (name){
return text_area130224.call(null,name,null);
});
var text_area130224__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area130224 = function(name,value){
switch(arguments.length){
case 1:
return text_area130224__1.call(this,name);
case 2:
return text_area130224__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area130224.cljs$core$IFn$_invoke$arity$1 = text_area130224__1;
text_area130224.cljs$core$IFn$_invoke$arity$2 = text_area130224__2;
return text_area130224;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area130224);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label130225 = (function label130225(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label130225);
/**
* Creates a submit button.
*/
sablono.core.submit_button130226 = (function submit_button130226(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button130226);
/**
* Creates a form reset button.
*/
sablono.core.reset_button130227 = (function reset_button130227(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button130227);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to130228 = (function() { 
var form_to130228__delegate = function (p__130229,body){
var vec__130231 = p__130229;
var method = cljs.core.nth.call(null,vec__130231,(0),null);
var action = cljs.core.nth.call(null,vec__130231,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to130228 = function (p__130229,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to130228__delegate.call(this,p__130229,body);};
form_to130228.cljs$lang$maxFixedArity = 1;
form_to130228.cljs$lang$applyTo = (function (arglist__130232){
var p__130229 = cljs.core.first(arglist__130232);
var body = cljs.core.rest(arglist__130232);
return form_to130228__delegate(p__130229,body);
});
form_to130228.cljs$core$IFn$_invoke$arity$variadic = form_to130228__delegate;
return form_to130228;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to130228);

//# sourceMappingURL=core.js.map