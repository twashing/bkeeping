// Compiled by ClojureScript 0.0-2505
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_8914 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_8915 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_8916 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_8916,opt_wrapper_8914,table_section_wrapper_8915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_8914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_8915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_8915,cell_wrapper_8916,table_section_wrapper_8915,table_section_wrapper_8915]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3610__auto__ = div.firstChild;
if(cljs.core.truth_(and__3610__auto__)){
return div.firstChild.childNodes;
} else {
return and__3610__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__8921 = cljs.core.seq.call(null,tbody);
var chunk__8922 = null;
var count__8923 = (0);
var i__8924 = (0);
while(true){
if((i__8924 < count__8923)){
var child = cljs.core._nth.call(null,chunk__8922,i__8924);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8925 = seq__8921;
var G__8926 = chunk__8922;
var G__8927 = count__8923;
var G__8928 = (i__8924 + (1));
seq__8921 = G__8925;
chunk__8922 = G__8926;
count__8923 = G__8927;
i__8924 = G__8928;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8921);
if(temp__4126__auto__){
var seq__8921__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8921__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__8921__$1);
var G__8929 = cljs.core.chunk_rest.call(null,seq__8921__$1);
var G__8930 = c__4409__auto__;
var G__8931 = cljs.core.count.call(null,c__4409__auto__);
var G__8932 = (0);
seq__8921 = G__8929;
chunk__8922 = G__8930;
count__8923 = G__8931;
i__8924 = G__8932;
continue;
} else {
var child = cljs.core.first.call(null,seq__8921__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8933 = cljs.core.next.call(null,seq__8921__$1);
var G__8934 = null;
var G__8935 = (0);
var G__8936 = (0);
seq__8921 = G__8933;
chunk__8922 = G__8934;
count__8923 = G__8935;
i__8924 = G__8936;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__8938 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__8938,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__8938,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__8938,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__8939 = wrapper.lastChild;
var G__8940 = (level - (1));
wrapper = G__8939;
level = G__8940;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3610__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3610__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3610__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj8942 = {};
return obj8942;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3610__auto__ = content;
if(and__3610__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3610__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4266__auto__ = (((content == null))?null:content);
return (function (){var or__3622__auto__ = (domina.nodes[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (domina.nodes["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3610__auto__ = nodeseq;
if(and__3610__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3610__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4266__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3622__auto__ = (domina.single_node[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (domina.single_node["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3610__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3610__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3610__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__8943){
var mesg = cljs.core.seq(arglist__8943);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__8944){
var mesg = cljs.core.seq(arglist__8944);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__8945){
var contents = cljs.core.seq(arglist__8945);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__8946_SHARP_){
return p1__8946_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__8947_SHARP_,p2__8948_SHARP_){
return goog.dom.insertChildAt(p1__8947_SHARP_,p2__8948_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__8950_SHARP_,p2__8949_SHARP_){
return goog.dom.insertSiblingBefore(p2__8949_SHARP_,p1__8950_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__8952_SHARP_,p2__8951_SHARP_){
return goog.dom.insertSiblingAfter(p2__8951_SHARP_,p1__8952_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__8954_SHARP_,p2__8953_SHARP_){
return goog.dom.replaceNode(p2__8953_SHARP_,p1__8954_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__8959_8963 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8960_8964 = null;
var count__8961_8965 = (0);
var i__8962_8966 = (0);
while(true){
if((i__8962_8966 < count__8961_8965)){
var n_8967 = cljs.core._nth.call(null,chunk__8960_8964,i__8962_8966);
goog.style.setStyle(n_8967,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8968 = seq__8959_8963;
var G__8969 = chunk__8960_8964;
var G__8970 = count__8961_8965;
var G__8971 = (i__8962_8966 + (1));
seq__8959_8963 = G__8968;
chunk__8960_8964 = G__8969;
count__8961_8965 = G__8970;
i__8962_8966 = G__8971;
continue;
} else {
var temp__4126__auto___8972 = cljs.core.seq.call(null,seq__8959_8963);
if(temp__4126__auto___8972){
var seq__8959_8973__$1 = temp__4126__auto___8972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8959_8973__$1)){
var c__4409__auto___8974 = cljs.core.chunk_first.call(null,seq__8959_8973__$1);
var G__8975 = cljs.core.chunk_rest.call(null,seq__8959_8973__$1);
var G__8976 = c__4409__auto___8974;
var G__8977 = cljs.core.count.call(null,c__4409__auto___8974);
var G__8978 = (0);
seq__8959_8963 = G__8975;
chunk__8960_8964 = G__8976;
count__8961_8965 = G__8977;
i__8962_8966 = G__8978;
continue;
} else {
var n_8979 = cljs.core.first.call(null,seq__8959_8973__$1);
goog.style.setStyle(n_8979,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8980 = cljs.core.next.call(null,seq__8959_8973__$1);
var G__8981 = null;
var G__8982 = (0);
var G__8983 = (0);
seq__8959_8963 = G__8980;
chunk__8960_8964 = G__8981;
count__8961_8965 = G__8982;
i__8962_8966 = G__8983;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8984){
var content = cljs.core.first(arglist__8984);
arglist__8984 = cljs.core.next(arglist__8984);
var name = cljs.core.first(arglist__8984);
var value = cljs.core.rest(arglist__8984);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__8989_8993 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8990_8994 = null;
var count__8991_8995 = (0);
var i__8992_8996 = (0);
while(true){
if((i__8992_8996 < count__8991_8995)){
var n_8997 = cljs.core._nth.call(null,chunk__8990_8994,i__8992_8996);
n_8997.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8998 = seq__8989_8993;
var G__8999 = chunk__8990_8994;
var G__9000 = count__8991_8995;
var G__9001 = (i__8992_8996 + (1));
seq__8989_8993 = G__8998;
chunk__8990_8994 = G__8999;
count__8991_8995 = G__9000;
i__8992_8996 = G__9001;
continue;
} else {
var temp__4126__auto___9002 = cljs.core.seq.call(null,seq__8989_8993);
if(temp__4126__auto___9002){
var seq__8989_9003__$1 = temp__4126__auto___9002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8989_9003__$1)){
var c__4409__auto___9004 = cljs.core.chunk_first.call(null,seq__8989_9003__$1);
var G__9005 = cljs.core.chunk_rest.call(null,seq__8989_9003__$1);
var G__9006 = c__4409__auto___9004;
var G__9007 = cljs.core.count.call(null,c__4409__auto___9004);
var G__9008 = (0);
seq__8989_8993 = G__9005;
chunk__8990_8994 = G__9006;
count__8991_8995 = G__9007;
i__8992_8996 = G__9008;
continue;
} else {
var n_9009 = cljs.core.first.call(null,seq__8989_9003__$1);
n_9009.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__9010 = cljs.core.next.call(null,seq__8989_9003__$1);
var G__9011 = null;
var G__9012 = (0);
var G__9013 = (0);
seq__8989_8993 = G__9010;
chunk__8990_8994 = G__9011;
count__8991_8995 = G__9012;
i__8992_8996 = G__9013;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__9014){
var content = cljs.core.first(arglist__9014);
arglist__9014 = cljs.core.next(arglist__9014);
var name = cljs.core.first(arglist__9014);
var value = cljs.core.rest(arglist__9014);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__9019_9023 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9020_9024 = null;
var count__9021_9025 = (0);
var i__9022_9026 = (0);
while(true){
if((i__9022_9026 < count__9021_9025)){
var n_9027 = cljs.core._nth.call(null,chunk__9020_9024,i__9022_9026);
n_9027.removeAttribute(cljs.core.name.call(null,name));

var G__9028 = seq__9019_9023;
var G__9029 = chunk__9020_9024;
var G__9030 = count__9021_9025;
var G__9031 = (i__9022_9026 + (1));
seq__9019_9023 = G__9028;
chunk__9020_9024 = G__9029;
count__9021_9025 = G__9030;
i__9022_9026 = G__9031;
continue;
} else {
var temp__4126__auto___9032 = cljs.core.seq.call(null,seq__9019_9023);
if(temp__4126__auto___9032){
var seq__9019_9033__$1 = temp__4126__auto___9032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9019_9033__$1)){
var c__4409__auto___9034 = cljs.core.chunk_first.call(null,seq__9019_9033__$1);
var G__9035 = cljs.core.chunk_rest.call(null,seq__9019_9033__$1);
var G__9036 = c__4409__auto___9034;
var G__9037 = cljs.core.count.call(null,c__4409__auto___9034);
var G__9038 = (0);
seq__9019_9023 = G__9035;
chunk__9020_9024 = G__9036;
count__9021_9025 = G__9037;
i__9022_9026 = G__9038;
continue;
} else {
var n_9039 = cljs.core.first.call(null,seq__9019_9033__$1);
n_9039.removeAttribute(cljs.core.name.call(null,name));

var G__9040 = cljs.core.next.call(null,seq__9019_9033__$1);
var G__9041 = null;
var G__9042 = (0);
var G__9043 = (0);
seq__9019_9023 = G__9040;
chunk__9020_9024 = G__9041;
count__9021_9025 = G__9042;
i__9022_9026 = G__9043;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__9045 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__9045,(0),null);
var v = cljs.core.nth.call(null,vec__9045,(1),null);
if(cljs.core.truth_((function (){var and__3610__auto__ = k;
if(cljs.core.truth_(and__3610__auto__)){
return v;
} else {
return and__3610__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__9046_SHARP_){
var attr = attrs__$1.item(p1__9046_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__9053_9059 = cljs.core.seq.call(null,styles);
var chunk__9054_9060 = null;
var count__9055_9061 = (0);
var i__9056_9062 = (0);
while(true){
if((i__9056_9062 < count__9055_9061)){
var vec__9057_9063 = cljs.core._nth.call(null,chunk__9054_9060,i__9056_9062);
var name_9064 = cljs.core.nth.call(null,vec__9057_9063,(0),null);
var value_9065 = cljs.core.nth.call(null,vec__9057_9063,(1),null);
domina.set_style_BANG_.call(null,content,name_9064,value_9065);

var G__9066 = seq__9053_9059;
var G__9067 = chunk__9054_9060;
var G__9068 = count__9055_9061;
var G__9069 = (i__9056_9062 + (1));
seq__9053_9059 = G__9066;
chunk__9054_9060 = G__9067;
count__9055_9061 = G__9068;
i__9056_9062 = G__9069;
continue;
} else {
var temp__4126__auto___9070 = cljs.core.seq.call(null,seq__9053_9059);
if(temp__4126__auto___9070){
var seq__9053_9071__$1 = temp__4126__auto___9070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9053_9071__$1)){
var c__4409__auto___9072 = cljs.core.chunk_first.call(null,seq__9053_9071__$1);
var G__9073 = cljs.core.chunk_rest.call(null,seq__9053_9071__$1);
var G__9074 = c__4409__auto___9072;
var G__9075 = cljs.core.count.call(null,c__4409__auto___9072);
var G__9076 = (0);
seq__9053_9059 = G__9073;
chunk__9054_9060 = G__9074;
count__9055_9061 = G__9075;
i__9056_9062 = G__9076;
continue;
} else {
var vec__9058_9077 = cljs.core.first.call(null,seq__9053_9071__$1);
var name_9078 = cljs.core.nth.call(null,vec__9058_9077,(0),null);
var value_9079 = cljs.core.nth.call(null,vec__9058_9077,(1),null);
domina.set_style_BANG_.call(null,content,name_9078,value_9079);

var G__9080 = cljs.core.next.call(null,seq__9053_9071__$1);
var G__9081 = null;
var G__9082 = (0);
var G__9083 = (0);
seq__9053_9059 = G__9080;
chunk__9054_9060 = G__9081;
count__9055_9061 = G__9082;
i__9056_9062 = G__9083;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__9090_9096 = cljs.core.seq.call(null,attrs);
var chunk__9091_9097 = null;
var count__9092_9098 = (0);
var i__9093_9099 = (0);
while(true){
if((i__9093_9099 < count__9092_9098)){
var vec__9094_9100 = cljs.core._nth.call(null,chunk__9091_9097,i__9093_9099);
var name_9101 = cljs.core.nth.call(null,vec__9094_9100,(0),null);
var value_9102 = cljs.core.nth.call(null,vec__9094_9100,(1),null);
domina.set_attr_BANG_.call(null,content,name_9101,value_9102);

var G__9103 = seq__9090_9096;
var G__9104 = chunk__9091_9097;
var G__9105 = count__9092_9098;
var G__9106 = (i__9093_9099 + (1));
seq__9090_9096 = G__9103;
chunk__9091_9097 = G__9104;
count__9092_9098 = G__9105;
i__9093_9099 = G__9106;
continue;
} else {
var temp__4126__auto___9107 = cljs.core.seq.call(null,seq__9090_9096);
if(temp__4126__auto___9107){
var seq__9090_9108__$1 = temp__4126__auto___9107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9090_9108__$1)){
var c__4409__auto___9109 = cljs.core.chunk_first.call(null,seq__9090_9108__$1);
var G__9110 = cljs.core.chunk_rest.call(null,seq__9090_9108__$1);
var G__9111 = c__4409__auto___9109;
var G__9112 = cljs.core.count.call(null,c__4409__auto___9109);
var G__9113 = (0);
seq__9090_9096 = G__9110;
chunk__9091_9097 = G__9111;
count__9092_9098 = G__9112;
i__9093_9099 = G__9113;
continue;
} else {
var vec__9095_9114 = cljs.core.first.call(null,seq__9090_9108__$1);
var name_9115 = cljs.core.nth.call(null,vec__9095_9114,(0),null);
var value_9116 = cljs.core.nth.call(null,vec__9095_9114,(1),null);
domina.set_attr_BANG_.call(null,content,name_9115,value_9116);

var G__9117 = cljs.core.next.call(null,seq__9090_9108__$1);
var G__9118 = null;
var G__9119 = (0);
var G__9120 = (0);
seq__9090_9096 = G__9117;
chunk__9091_9097 = G__9118;
count__9092_9098 = G__9119;
i__9093_9099 = G__9120;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__9125_9129 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9126_9130 = null;
var count__9127_9131 = (0);
var i__9128_9132 = (0);
while(true){
if((i__9128_9132 < count__9127_9131)){
var node_9133 = cljs.core._nth.call(null,chunk__9126_9130,i__9128_9132);
goog.dom.classes.add(node_9133,class$);

var G__9134 = seq__9125_9129;
var G__9135 = chunk__9126_9130;
var G__9136 = count__9127_9131;
var G__9137 = (i__9128_9132 + (1));
seq__9125_9129 = G__9134;
chunk__9126_9130 = G__9135;
count__9127_9131 = G__9136;
i__9128_9132 = G__9137;
continue;
} else {
var temp__4126__auto___9138 = cljs.core.seq.call(null,seq__9125_9129);
if(temp__4126__auto___9138){
var seq__9125_9139__$1 = temp__4126__auto___9138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9139__$1)){
var c__4409__auto___9140 = cljs.core.chunk_first.call(null,seq__9125_9139__$1);
var G__9141 = cljs.core.chunk_rest.call(null,seq__9125_9139__$1);
var G__9142 = c__4409__auto___9140;
var G__9143 = cljs.core.count.call(null,c__4409__auto___9140);
var G__9144 = (0);
seq__9125_9129 = G__9141;
chunk__9126_9130 = G__9142;
count__9127_9131 = G__9143;
i__9128_9132 = G__9144;
continue;
} else {
var node_9145 = cljs.core.first.call(null,seq__9125_9139__$1);
goog.dom.classes.add(node_9145,class$);

var G__9146 = cljs.core.next.call(null,seq__9125_9139__$1);
var G__9147 = null;
var G__9148 = (0);
var G__9149 = (0);
seq__9125_9129 = G__9146;
chunk__9126_9130 = G__9147;
count__9127_9131 = G__9148;
i__9128_9132 = G__9149;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__9154_9158 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9155_9159 = null;
var count__9156_9160 = (0);
var i__9157_9161 = (0);
while(true){
if((i__9157_9161 < count__9156_9160)){
var node_9162 = cljs.core._nth.call(null,chunk__9155_9159,i__9157_9161);
goog.dom.classes.remove(node_9162,class$);

var G__9163 = seq__9154_9158;
var G__9164 = chunk__9155_9159;
var G__9165 = count__9156_9160;
var G__9166 = (i__9157_9161 + (1));
seq__9154_9158 = G__9163;
chunk__9155_9159 = G__9164;
count__9156_9160 = G__9165;
i__9157_9161 = G__9166;
continue;
} else {
var temp__4126__auto___9167 = cljs.core.seq.call(null,seq__9154_9158);
if(temp__4126__auto___9167){
var seq__9154_9168__$1 = temp__4126__auto___9167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9154_9168__$1)){
var c__4409__auto___9169 = cljs.core.chunk_first.call(null,seq__9154_9168__$1);
var G__9170 = cljs.core.chunk_rest.call(null,seq__9154_9168__$1);
var G__9171 = c__4409__auto___9169;
var G__9172 = cljs.core.count.call(null,c__4409__auto___9169);
var G__9173 = (0);
seq__9154_9158 = G__9170;
chunk__9155_9159 = G__9171;
count__9156_9160 = G__9172;
i__9157_9161 = G__9173;
continue;
} else {
var node_9174 = cljs.core.first.call(null,seq__9154_9168__$1);
goog.dom.classes.remove(node_9174,class$);

var G__9175 = cljs.core.next.call(null,seq__9154_9168__$1);
var G__9176 = null;
var G__9177 = (0);
var G__9178 = (0);
seq__9154_9158 = G__9175;
chunk__9155_9159 = G__9176;
count__9156_9160 = G__9177;
i__9157_9161 = G__9178;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__9183_9187 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9184_9188 = null;
var count__9185_9189 = (0);
var i__9186_9190 = (0);
while(true){
if((i__9186_9190 < count__9185_9189)){
var node_9191 = cljs.core._nth.call(null,chunk__9184_9188,i__9186_9190);
goog.dom.classes.toggle(node_9191,class$);

var G__9192 = seq__9183_9187;
var G__9193 = chunk__9184_9188;
var G__9194 = count__9185_9189;
var G__9195 = (i__9186_9190 + (1));
seq__9183_9187 = G__9192;
chunk__9184_9188 = G__9193;
count__9185_9189 = G__9194;
i__9186_9190 = G__9195;
continue;
} else {
var temp__4126__auto___9196 = cljs.core.seq.call(null,seq__9183_9187);
if(temp__4126__auto___9196){
var seq__9183_9197__$1 = temp__4126__auto___9196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9183_9197__$1)){
var c__4409__auto___9198 = cljs.core.chunk_first.call(null,seq__9183_9197__$1);
var G__9199 = cljs.core.chunk_rest.call(null,seq__9183_9197__$1);
var G__9200 = c__4409__auto___9198;
var G__9201 = cljs.core.count.call(null,c__4409__auto___9198);
var G__9202 = (0);
seq__9183_9187 = G__9199;
chunk__9184_9188 = G__9200;
count__9185_9189 = G__9201;
i__9186_9190 = G__9202;
continue;
} else {
var node_9203 = cljs.core.first.call(null,seq__9183_9197__$1);
goog.dom.classes.toggle(node_9203,class$);

var G__9204 = cljs.core.next.call(null,seq__9183_9197__$1);
var G__9205 = null;
var G__9206 = (0);
var G__9207 = (0);
seq__9183_9187 = G__9204;
chunk__9184_9188 = G__9205;
count__9185_9189 = G__9206;
i__9186_9190 = G__9207;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_9216__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__9212_9217 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9213_9218 = null;
var count__9214_9219 = (0);
var i__9215_9220 = (0);
while(true){
if((i__9215_9220 < count__9214_9219)){
var node_9221 = cljs.core._nth.call(null,chunk__9213_9218,i__9215_9220);
goog.dom.classes.set(node_9221,classes_9216__$1);

var G__9222 = seq__9212_9217;
var G__9223 = chunk__9213_9218;
var G__9224 = count__9214_9219;
var G__9225 = (i__9215_9220 + (1));
seq__9212_9217 = G__9222;
chunk__9213_9218 = G__9223;
count__9214_9219 = G__9224;
i__9215_9220 = G__9225;
continue;
} else {
var temp__4126__auto___9226 = cljs.core.seq.call(null,seq__9212_9217);
if(temp__4126__auto___9226){
var seq__9212_9227__$1 = temp__4126__auto___9226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9212_9227__$1)){
var c__4409__auto___9228 = cljs.core.chunk_first.call(null,seq__9212_9227__$1);
var G__9229 = cljs.core.chunk_rest.call(null,seq__9212_9227__$1);
var G__9230 = c__4409__auto___9228;
var G__9231 = cljs.core.count.call(null,c__4409__auto___9228);
var G__9232 = (0);
seq__9212_9217 = G__9229;
chunk__9213_9218 = G__9230;
count__9214_9219 = G__9231;
i__9215_9220 = G__9232;
continue;
} else {
var node_9233 = cljs.core.first.call(null,seq__9212_9227__$1);
goog.dom.classes.set(node_9233,classes_9216__$1);

var G__9234 = cljs.core.next.call(null,seq__9212_9227__$1);
var G__9235 = null;
var G__9236 = (0);
var G__9237 = (0);
seq__9212_9217 = G__9234;
chunk__9213_9218 = G__9235;
count__9214_9219 = G__9236;
i__9215_9220 = G__9237;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__9242_9246 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9243_9247 = null;
var count__9244_9248 = (0);
var i__9245_9249 = (0);
while(true){
if((i__9245_9249 < count__9244_9248)){
var node_9250 = cljs.core._nth.call(null,chunk__9243_9247,i__9245_9249);
goog.dom.setTextContent(node_9250,value);

var G__9251 = seq__9242_9246;
var G__9252 = chunk__9243_9247;
var G__9253 = count__9244_9248;
var G__9254 = (i__9245_9249 + (1));
seq__9242_9246 = G__9251;
chunk__9243_9247 = G__9252;
count__9244_9248 = G__9253;
i__9245_9249 = G__9254;
continue;
} else {
var temp__4126__auto___9255 = cljs.core.seq.call(null,seq__9242_9246);
if(temp__4126__auto___9255){
var seq__9242_9256__$1 = temp__4126__auto___9255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9242_9256__$1)){
var c__4409__auto___9257 = cljs.core.chunk_first.call(null,seq__9242_9256__$1);
var G__9258 = cljs.core.chunk_rest.call(null,seq__9242_9256__$1);
var G__9259 = c__4409__auto___9257;
var G__9260 = cljs.core.count.call(null,c__4409__auto___9257);
var G__9261 = (0);
seq__9242_9246 = G__9258;
chunk__9243_9247 = G__9259;
count__9244_9248 = G__9260;
i__9245_9249 = G__9261;
continue;
} else {
var node_9262 = cljs.core.first.call(null,seq__9242_9256__$1);
goog.dom.setTextContent(node_9262,value);

var G__9263 = cljs.core.next.call(null,seq__9242_9256__$1);
var G__9264 = null;
var G__9265 = (0);
var G__9266 = (0);
seq__9242_9246 = G__9263;
chunk__9243_9247 = G__9264;
count__9244_9248 = G__9265;
i__9245_9249 = G__9266;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__9271_9275 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9272_9276 = null;
var count__9273_9277 = (0);
var i__9274_9278 = (0);
while(true){
if((i__9274_9278 < count__9273_9277)){
var node_9279 = cljs.core._nth.call(null,chunk__9272_9276,i__9274_9278);
goog.dom.forms.setValue(node_9279,value);

var G__9280 = seq__9271_9275;
var G__9281 = chunk__9272_9276;
var G__9282 = count__9273_9277;
var G__9283 = (i__9274_9278 + (1));
seq__9271_9275 = G__9280;
chunk__9272_9276 = G__9281;
count__9273_9277 = G__9282;
i__9274_9278 = G__9283;
continue;
} else {
var temp__4126__auto___9284 = cljs.core.seq.call(null,seq__9271_9275);
if(temp__4126__auto___9284){
var seq__9271_9285__$1 = temp__4126__auto___9284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9271_9285__$1)){
var c__4409__auto___9286 = cljs.core.chunk_first.call(null,seq__9271_9285__$1);
var G__9287 = cljs.core.chunk_rest.call(null,seq__9271_9285__$1);
var G__9288 = c__4409__auto___9286;
var G__9289 = cljs.core.count.call(null,c__4409__auto___9286);
var G__9290 = (0);
seq__9271_9275 = G__9287;
chunk__9272_9276 = G__9288;
count__9273_9277 = G__9289;
i__9274_9278 = G__9290;
continue;
} else {
var node_9291 = cljs.core.first.call(null,seq__9271_9285__$1);
goog.dom.forms.setValue(node_9291,value);

var G__9292 = cljs.core.next.call(null,seq__9271_9285__$1);
var G__9293 = null;
var G__9294 = (0);
var G__9295 = (0);
seq__9271_9275 = G__9292;
chunk__9272_9276 = G__9293;
count__9273_9277 = G__9294;
i__9274_9278 = G__9295;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3610__auto__ = allows_inner_html_QMARK_;
if(and__3610__auto__){
var and__3610__auto____$1 = (function (){var or__3622__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3610__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
})())){
var value_9306 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__9302_9307 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9303_9308 = null;
var count__9304_9309 = (0);
var i__9305_9310 = (0);
while(true){
if((i__9305_9310 < count__9304_9309)){
var node_9311 = cljs.core._nth.call(null,chunk__9303_9308,i__9305_9310);
node_9311.innerHTML = value_9306;

var G__9312 = seq__9302_9307;
var G__9313 = chunk__9303_9308;
var G__9314 = count__9304_9309;
var G__9315 = (i__9305_9310 + (1));
seq__9302_9307 = G__9312;
chunk__9303_9308 = G__9313;
count__9304_9309 = G__9314;
i__9305_9310 = G__9315;
continue;
} else {
var temp__4126__auto___9316 = cljs.core.seq.call(null,seq__9302_9307);
if(temp__4126__auto___9316){
var seq__9302_9317__$1 = temp__4126__auto___9316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9302_9317__$1)){
var c__4409__auto___9318 = cljs.core.chunk_first.call(null,seq__9302_9317__$1);
var G__9319 = cljs.core.chunk_rest.call(null,seq__9302_9317__$1);
var G__9320 = c__4409__auto___9318;
var G__9321 = cljs.core.count.call(null,c__4409__auto___9318);
var G__9322 = (0);
seq__9302_9307 = G__9319;
chunk__9303_9308 = G__9320;
count__9304_9309 = G__9321;
i__9305_9310 = G__9322;
continue;
} else {
var node_9323 = cljs.core.first.call(null,seq__9302_9317__$1);
node_9323.innerHTML = value_9306;

var G__9324 = cljs.core.next.call(null,seq__9302_9317__$1);
var G__9325 = null;
var G__9326 = (0);
var G__9327 = (0);
seq__9302_9307 = G__9324;
chunk__9303_9308 = G__9325;
count__9304_9309 = G__9326;
i__9305_9310 = G__9327;
continue;
}
} else {
}
}
break;
}
}catch (e9301){if((e9301 instanceof Error)){
var e_9328 = e9301;
domina.replace_children_BANG_.call(null,content,value_9306);
} else {
throw e9301;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3610__auto__ = bubble;
if(cljs.core.truth_(and__3610__auto__)){
return (value == null);
} else {
return and__3610__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3622__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__9335_9339 = cljs.core.seq.call(null,children);
var chunk__9336_9340 = null;
var count__9337_9341 = (0);
var i__9338_9342 = (0);
while(true){
if((i__9338_9342 < count__9337_9341)){
var child_9343 = cljs.core._nth.call(null,chunk__9336_9340,i__9338_9342);
frag.appendChild(child_9343);

var G__9344 = seq__9335_9339;
var G__9345 = chunk__9336_9340;
var G__9346 = count__9337_9341;
var G__9347 = (i__9338_9342 + (1));
seq__9335_9339 = G__9344;
chunk__9336_9340 = G__9345;
count__9337_9341 = G__9346;
i__9338_9342 = G__9347;
continue;
} else {
var temp__4126__auto___9348 = cljs.core.seq.call(null,seq__9335_9339);
if(temp__4126__auto___9348){
var seq__9335_9349__$1 = temp__4126__auto___9348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9335_9349__$1)){
var c__4409__auto___9350 = cljs.core.chunk_first.call(null,seq__9335_9349__$1);
var G__9351 = cljs.core.chunk_rest.call(null,seq__9335_9349__$1);
var G__9352 = c__4409__auto___9350;
var G__9353 = cljs.core.count.call(null,c__4409__auto___9350);
var G__9354 = (0);
seq__9335_9339 = G__9351;
chunk__9336_9340 = G__9352;
count__9337_9341 = G__9353;
i__9338_9342 = G__9354;
continue;
} else {
var child_9355 = cljs.core.first.call(null,seq__9335_9349__$1);
frag.appendChild(child_9355);

var G__9356 = cljs.core.next.call(null,seq__9335_9349__$1);
var G__9357 = null;
var G__9358 = (0);
var G__9359 = (0);
seq__9335_9339 = G__9356;
chunk__9336_9340 = G__9357;
count__9337_9341 = G__9358;
i__9338_9342 = G__9359;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__9329_SHARP_,p2__9330_SHARP_){
return f.call(null,p1__9329_SHARP_,p2__9330_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3610__auto__ = obj;
if(cljs.core.truth_(and__3610__auto__)){
var and__3610__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3610__auto____$1){
return obj.length;
} else {
return and__3610__auto____$1;
}
} else {
return and__3610__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__9361 = list_thing;
if(G__9361){
var bit__4303__auto__ = (G__9361.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__9361.cljs$core$ISeqable$)){
return true;
} else {
if((!G__9361.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9361);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__9362 = content;
if(G__9362){
var bit__4303__auto__ = (G__9362.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__9362.cljs$core$ISeqable$)){
return true;
} else {
if((!G__9362.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9362);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9362);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__9363 = content;
if(G__9363){
var bit__4303__auto__ = (G__9363.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__9363.cljs$core$ISeqable$)){
return true;
} else {
if((!G__9363.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9363);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9363);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}

//# sourceMappingURL=domina.js.map