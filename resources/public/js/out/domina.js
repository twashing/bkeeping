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
var opt_wrapper_13071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_13072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_13073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13073,opt_wrapper_13071,table_section_wrapper_13072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13072,cell_wrapper_13073,table_section_wrapper_13072,table_section_wrapper_13072]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3610__auto__ = div.firstChild;
if(cljs.core.truth_(and__3610__auto__)){
return div.firstChild.childNodes;
} else {
return and__3610__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__13078 = cljs.core.seq.call(null,tbody);
var chunk__13079 = null;
var count__13080 = (0);
var i__13081 = (0);
while(true){
if((i__13081 < count__13080)){
var child = cljs.core._nth.call(null,chunk__13079,i__13081);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13082 = seq__13078;
var G__13083 = chunk__13079;
var G__13084 = count__13080;
var G__13085 = (i__13081 + (1));
seq__13078 = G__13082;
chunk__13079 = G__13083;
count__13080 = G__13084;
i__13081 = G__13085;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13078);
if(temp__4126__auto__){
var seq__13078__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13078__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13078__$1);
var G__13086 = cljs.core.chunk_rest.call(null,seq__13078__$1);
var G__13087 = c__4409__auto__;
var G__13088 = cljs.core.count.call(null,c__4409__auto__);
var G__13089 = (0);
seq__13078 = G__13086;
chunk__13079 = G__13087;
count__13080 = G__13088;
i__13081 = G__13089;
continue;
} else {
var child = cljs.core.first.call(null,seq__13078__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13090 = cljs.core.next.call(null,seq__13078__$1);
var G__13091 = null;
var G__13092 = (0);
var G__13093 = (0);
seq__13078 = G__13090;
chunk__13079 = G__13091;
count__13080 = G__13092;
i__13081 = G__13093;
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
var vec__13095 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13095,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__13095,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__13095,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__13096 = wrapper.lastChild;
var G__13097 = (level - (1));
wrapper = G__13096;
level = G__13097;
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

domina.DomContent = (function (){var obj13099 = {};
return obj13099;
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
log_debug.cljs$lang$applyTo = (function (arglist__13100){
var mesg = cljs.core.seq(arglist__13100);
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
log.cljs$lang$applyTo = (function (arglist__13101){
var mesg = cljs.core.seq(arglist__13101);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13102){
var contents = cljs.core.seq(arglist__13102);
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
return cljs.core.map.call(null,(function (p1__13103_SHARP_){
return p1__13103_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__13104_SHARP_,p2__13105_SHARP_){
return goog.dom.insertChildAt(p1__13104_SHARP_,p2__13105_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__13107_SHARP_,p2__13106_SHARP_){
return goog.dom.insertSiblingBefore(p2__13106_SHARP_,p1__13107_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13109_SHARP_,p2__13108_SHARP_){
return goog.dom.insertSiblingAfter(p2__13108_SHARP_,p1__13109_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13111_SHARP_,p2__13110_SHARP_){
return goog.dom.replaceNode(p2__13110_SHARP_,p1__13111_SHARP_);
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
var seq__13116_13120 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13117_13121 = null;
var count__13118_13122 = (0);
var i__13119_13123 = (0);
while(true){
if((i__13119_13123 < count__13118_13122)){
var n_13124 = cljs.core._nth.call(null,chunk__13117_13121,i__13119_13123);
goog.style.setStyle(n_13124,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13125 = seq__13116_13120;
var G__13126 = chunk__13117_13121;
var G__13127 = count__13118_13122;
var G__13128 = (i__13119_13123 + (1));
seq__13116_13120 = G__13125;
chunk__13117_13121 = G__13126;
count__13118_13122 = G__13127;
i__13119_13123 = G__13128;
continue;
} else {
var temp__4126__auto___13129 = cljs.core.seq.call(null,seq__13116_13120);
if(temp__4126__auto___13129){
var seq__13116_13130__$1 = temp__4126__auto___13129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13116_13130__$1)){
var c__4409__auto___13131 = cljs.core.chunk_first.call(null,seq__13116_13130__$1);
var G__13132 = cljs.core.chunk_rest.call(null,seq__13116_13130__$1);
var G__13133 = c__4409__auto___13131;
var G__13134 = cljs.core.count.call(null,c__4409__auto___13131);
var G__13135 = (0);
seq__13116_13120 = G__13132;
chunk__13117_13121 = G__13133;
count__13118_13122 = G__13134;
i__13119_13123 = G__13135;
continue;
} else {
var n_13136 = cljs.core.first.call(null,seq__13116_13130__$1);
goog.style.setStyle(n_13136,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13137 = cljs.core.next.call(null,seq__13116_13130__$1);
var G__13138 = null;
var G__13139 = (0);
var G__13140 = (0);
seq__13116_13120 = G__13137;
chunk__13117_13121 = G__13138;
count__13118_13122 = G__13139;
i__13119_13123 = G__13140;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13141){
var content = cljs.core.first(arglist__13141);
arglist__13141 = cljs.core.next(arglist__13141);
var name = cljs.core.first(arglist__13141);
var value = cljs.core.rest(arglist__13141);
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
var seq__13146_13150 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13147_13151 = null;
var count__13148_13152 = (0);
var i__13149_13153 = (0);
while(true){
if((i__13149_13153 < count__13148_13152)){
var n_13154 = cljs.core._nth.call(null,chunk__13147_13151,i__13149_13153);
n_13154.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13155 = seq__13146_13150;
var G__13156 = chunk__13147_13151;
var G__13157 = count__13148_13152;
var G__13158 = (i__13149_13153 + (1));
seq__13146_13150 = G__13155;
chunk__13147_13151 = G__13156;
count__13148_13152 = G__13157;
i__13149_13153 = G__13158;
continue;
} else {
var temp__4126__auto___13159 = cljs.core.seq.call(null,seq__13146_13150);
if(temp__4126__auto___13159){
var seq__13146_13160__$1 = temp__4126__auto___13159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13146_13160__$1)){
var c__4409__auto___13161 = cljs.core.chunk_first.call(null,seq__13146_13160__$1);
var G__13162 = cljs.core.chunk_rest.call(null,seq__13146_13160__$1);
var G__13163 = c__4409__auto___13161;
var G__13164 = cljs.core.count.call(null,c__4409__auto___13161);
var G__13165 = (0);
seq__13146_13150 = G__13162;
chunk__13147_13151 = G__13163;
count__13148_13152 = G__13164;
i__13149_13153 = G__13165;
continue;
} else {
var n_13166 = cljs.core.first.call(null,seq__13146_13160__$1);
n_13166.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13167 = cljs.core.next.call(null,seq__13146_13160__$1);
var G__13168 = null;
var G__13169 = (0);
var G__13170 = (0);
seq__13146_13150 = G__13167;
chunk__13147_13151 = G__13168;
count__13148_13152 = G__13169;
i__13149_13153 = G__13170;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13171){
var content = cljs.core.first(arglist__13171);
arglist__13171 = cljs.core.next(arglist__13171);
var name = cljs.core.first(arglist__13171);
var value = cljs.core.rest(arglist__13171);
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
var seq__13176_13180 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13177_13181 = null;
var count__13178_13182 = (0);
var i__13179_13183 = (0);
while(true){
if((i__13179_13183 < count__13178_13182)){
var n_13184 = cljs.core._nth.call(null,chunk__13177_13181,i__13179_13183);
n_13184.removeAttribute(cljs.core.name.call(null,name));

var G__13185 = seq__13176_13180;
var G__13186 = chunk__13177_13181;
var G__13187 = count__13178_13182;
var G__13188 = (i__13179_13183 + (1));
seq__13176_13180 = G__13185;
chunk__13177_13181 = G__13186;
count__13178_13182 = G__13187;
i__13179_13183 = G__13188;
continue;
} else {
var temp__4126__auto___13189 = cljs.core.seq.call(null,seq__13176_13180);
if(temp__4126__auto___13189){
var seq__13176_13190__$1 = temp__4126__auto___13189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13176_13190__$1)){
var c__4409__auto___13191 = cljs.core.chunk_first.call(null,seq__13176_13190__$1);
var G__13192 = cljs.core.chunk_rest.call(null,seq__13176_13190__$1);
var G__13193 = c__4409__auto___13191;
var G__13194 = cljs.core.count.call(null,c__4409__auto___13191);
var G__13195 = (0);
seq__13176_13180 = G__13192;
chunk__13177_13181 = G__13193;
count__13178_13182 = G__13194;
i__13179_13183 = G__13195;
continue;
} else {
var n_13196 = cljs.core.first.call(null,seq__13176_13190__$1);
n_13196.removeAttribute(cljs.core.name.call(null,name));

var G__13197 = cljs.core.next.call(null,seq__13176_13190__$1);
var G__13198 = null;
var G__13199 = (0);
var G__13200 = (0);
seq__13176_13180 = G__13197;
chunk__13177_13181 = G__13198;
count__13178_13182 = G__13199;
i__13179_13183 = G__13200;
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
var vec__13202 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13202,(0),null);
var v = cljs.core.nth.call(null,vec__13202,(1),null);
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
return (function (p1__13203_SHARP_){
var attr = attrs__$1.item(p1__13203_SHARP_);
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
var seq__13210_13216 = cljs.core.seq.call(null,styles);
var chunk__13211_13217 = null;
var count__13212_13218 = (0);
var i__13213_13219 = (0);
while(true){
if((i__13213_13219 < count__13212_13218)){
var vec__13214_13220 = cljs.core._nth.call(null,chunk__13211_13217,i__13213_13219);
var name_13221 = cljs.core.nth.call(null,vec__13214_13220,(0),null);
var value_13222 = cljs.core.nth.call(null,vec__13214_13220,(1),null);
domina.set_style_BANG_.call(null,content,name_13221,value_13222);

var G__13223 = seq__13210_13216;
var G__13224 = chunk__13211_13217;
var G__13225 = count__13212_13218;
var G__13226 = (i__13213_13219 + (1));
seq__13210_13216 = G__13223;
chunk__13211_13217 = G__13224;
count__13212_13218 = G__13225;
i__13213_13219 = G__13226;
continue;
} else {
var temp__4126__auto___13227 = cljs.core.seq.call(null,seq__13210_13216);
if(temp__4126__auto___13227){
var seq__13210_13228__$1 = temp__4126__auto___13227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13210_13228__$1)){
var c__4409__auto___13229 = cljs.core.chunk_first.call(null,seq__13210_13228__$1);
var G__13230 = cljs.core.chunk_rest.call(null,seq__13210_13228__$1);
var G__13231 = c__4409__auto___13229;
var G__13232 = cljs.core.count.call(null,c__4409__auto___13229);
var G__13233 = (0);
seq__13210_13216 = G__13230;
chunk__13211_13217 = G__13231;
count__13212_13218 = G__13232;
i__13213_13219 = G__13233;
continue;
} else {
var vec__13215_13234 = cljs.core.first.call(null,seq__13210_13228__$1);
var name_13235 = cljs.core.nth.call(null,vec__13215_13234,(0),null);
var value_13236 = cljs.core.nth.call(null,vec__13215_13234,(1),null);
domina.set_style_BANG_.call(null,content,name_13235,value_13236);

var G__13237 = cljs.core.next.call(null,seq__13210_13228__$1);
var G__13238 = null;
var G__13239 = (0);
var G__13240 = (0);
seq__13210_13216 = G__13237;
chunk__13211_13217 = G__13238;
count__13212_13218 = G__13239;
i__13213_13219 = G__13240;
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
var seq__13247_13253 = cljs.core.seq.call(null,attrs);
var chunk__13248_13254 = null;
var count__13249_13255 = (0);
var i__13250_13256 = (0);
while(true){
if((i__13250_13256 < count__13249_13255)){
var vec__13251_13257 = cljs.core._nth.call(null,chunk__13248_13254,i__13250_13256);
var name_13258 = cljs.core.nth.call(null,vec__13251_13257,(0),null);
var value_13259 = cljs.core.nth.call(null,vec__13251_13257,(1),null);
domina.set_attr_BANG_.call(null,content,name_13258,value_13259);

var G__13260 = seq__13247_13253;
var G__13261 = chunk__13248_13254;
var G__13262 = count__13249_13255;
var G__13263 = (i__13250_13256 + (1));
seq__13247_13253 = G__13260;
chunk__13248_13254 = G__13261;
count__13249_13255 = G__13262;
i__13250_13256 = G__13263;
continue;
} else {
var temp__4126__auto___13264 = cljs.core.seq.call(null,seq__13247_13253);
if(temp__4126__auto___13264){
var seq__13247_13265__$1 = temp__4126__auto___13264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13247_13265__$1)){
var c__4409__auto___13266 = cljs.core.chunk_first.call(null,seq__13247_13265__$1);
var G__13267 = cljs.core.chunk_rest.call(null,seq__13247_13265__$1);
var G__13268 = c__4409__auto___13266;
var G__13269 = cljs.core.count.call(null,c__4409__auto___13266);
var G__13270 = (0);
seq__13247_13253 = G__13267;
chunk__13248_13254 = G__13268;
count__13249_13255 = G__13269;
i__13250_13256 = G__13270;
continue;
} else {
var vec__13252_13271 = cljs.core.first.call(null,seq__13247_13265__$1);
var name_13272 = cljs.core.nth.call(null,vec__13252_13271,(0),null);
var value_13273 = cljs.core.nth.call(null,vec__13252_13271,(1),null);
domina.set_attr_BANG_.call(null,content,name_13272,value_13273);

var G__13274 = cljs.core.next.call(null,seq__13247_13265__$1);
var G__13275 = null;
var G__13276 = (0);
var G__13277 = (0);
seq__13247_13253 = G__13274;
chunk__13248_13254 = G__13275;
count__13249_13255 = G__13276;
i__13250_13256 = G__13277;
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
var seq__13282_13286 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13283_13287 = null;
var count__13284_13288 = (0);
var i__13285_13289 = (0);
while(true){
if((i__13285_13289 < count__13284_13288)){
var node_13290 = cljs.core._nth.call(null,chunk__13283_13287,i__13285_13289);
goog.dom.classes.add(node_13290,class$);

var G__13291 = seq__13282_13286;
var G__13292 = chunk__13283_13287;
var G__13293 = count__13284_13288;
var G__13294 = (i__13285_13289 + (1));
seq__13282_13286 = G__13291;
chunk__13283_13287 = G__13292;
count__13284_13288 = G__13293;
i__13285_13289 = G__13294;
continue;
} else {
var temp__4126__auto___13295 = cljs.core.seq.call(null,seq__13282_13286);
if(temp__4126__auto___13295){
var seq__13282_13296__$1 = temp__4126__auto___13295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13282_13296__$1)){
var c__4409__auto___13297 = cljs.core.chunk_first.call(null,seq__13282_13296__$1);
var G__13298 = cljs.core.chunk_rest.call(null,seq__13282_13296__$1);
var G__13299 = c__4409__auto___13297;
var G__13300 = cljs.core.count.call(null,c__4409__auto___13297);
var G__13301 = (0);
seq__13282_13286 = G__13298;
chunk__13283_13287 = G__13299;
count__13284_13288 = G__13300;
i__13285_13289 = G__13301;
continue;
} else {
var node_13302 = cljs.core.first.call(null,seq__13282_13296__$1);
goog.dom.classes.add(node_13302,class$);

var G__13303 = cljs.core.next.call(null,seq__13282_13296__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__13282_13286 = G__13303;
chunk__13283_13287 = G__13304;
count__13284_13288 = G__13305;
i__13285_13289 = G__13306;
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
var seq__13311_13315 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13312_13316 = null;
var count__13313_13317 = (0);
var i__13314_13318 = (0);
while(true){
if((i__13314_13318 < count__13313_13317)){
var node_13319 = cljs.core._nth.call(null,chunk__13312_13316,i__13314_13318);
goog.dom.classes.remove(node_13319,class$);

var G__13320 = seq__13311_13315;
var G__13321 = chunk__13312_13316;
var G__13322 = count__13313_13317;
var G__13323 = (i__13314_13318 + (1));
seq__13311_13315 = G__13320;
chunk__13312_13316 = G__13321;
count__13313_13317 = G__13322;
i__13314_13318 = G__13323;
continue;
} else {
var temp__4126__auto___13324 = cljs.core.seq.call(null,seq__13311_13315);
if(temp__4126__auto___13324){
var seq__13311_13325__$1 = temp__4126__auto___13324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13311_13325__$1)){
var c__4409__auto___13326 = cljs.core.chunk_first.call(null,seq__13311_13325__$1);
var G__13327 = cljs.core.chunk_rest.call(null,seq__13311_13325__$1);
var G__13328 = c__4409__auto___13326;
var G__13329 = cljs.core.count.call(null,c__4409__auto___13326);
var G__13330 = (0);
seq__13311_13315 = G__13327;
chunk__13312_13316 = G__13328;
count__13313_13317 = G__13329;
i__13314_13318 = G__13330;
continue;
} else {
var node_13331 = cljs.core.first.call(null,seq__13311_13325__$1);
goog.dom.classes.remove(node_13331,class$);

var G__13332 = cljs.core.next.call(null,seq__13311_13325__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13311_13315 = G__13332;
chunk__13312_13316 = G__13333;
count__13313_13317 = G__13334;
i__13314_13318 = G__13335;
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
var seq__13340_13344 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13341_13345 = null;
var count__13342_13346 = (0);
var i__13343_13347 = (0);
while(true){
if((i__13343_13347 < count__13342_13346)){
var node_13348 = cljs.core._nth.call(null,chunk__13341_13345,i__13343_13347);
goog.dom.classes.toggle(node_13348,class$);

var G__13349 = seq__13340_13344;
var G__13350 = chunk__13341_13345;
var G__13351 = count__13342_13346;
var G__13352 = (i__13343_13347 + (1));
seq__13340_13344 = G__13349;
chunk__13341_13345 = G__13350;
count__13342_13346 = G__13351;
i__13343_13347 = G__13352;
continue;
} else {
var temp__4126__auto___13353 = cljs.core.seq.call(null,seq__13340_13344);
if(temp__4126__auto___13353){
var seq__13340_13354__$1 = temp__4126__auto___13353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13340_13354__$1)){
var c__4409__auto___13355 = cljs.core.chunk_first.call(null,seq__13340_13354__$1);
var G__13356 = cljs.core.chunk_rest.call(null,seq__13340_13354__$1);
var G__13357 = c__4409__auto___13355;
var G__13358 = cljs.core.count.call(null,c__4409__auto___13355);
var G__13359 = (0);
seq__13340_13344 = G__13356;
chunk__13341_13345 = G__13357;
count__13342_13346 = G__13358;
i__13343_13347 = G__13359;
continue;
} else {
var node_13360 = cljs.core.first.call(null,seq__13340_13354__$1);
goog.dom.classes.toggle(node_13360,class$);

var G__13361 = cljs.core.next.call(null,seq__13340_13354__$1);
var G__13362 = null;
var G__13363 = (0);
var G__13364 = (0);
seq__13340_13344 = G__13361;
chunk__13341_13345 = G__13362;
count__13342_13346 = G__13363;
i__13343_13347 = G__13364;
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
var classes_13373__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13369_13374 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13370_13375 = null;
var count__13371_13376 = (0);
var i__13372_13377 = (0);
while(true){
if((i__13372_13377 < count__13371_13376)){
var node_13378 = cljs.core._nth.call(null,chunk__13370_13375,i__13372_13377);
goog.dom.classes.set(node_13378,classes_13373__$1);

var G__13379 = seq__13369_13374;
var G__13380 = chunk__13370_13375;
var G__13381 = count__13371_13376;
var G__13382 = (i__13372_13377 + (1));
seq__13369_13374 = G__13379;
chunk__13370_13375 = G__13380;
count__13371_13376 = G__13381;
i__13372_13377 = G__13382;
continue;
} else {
var temp__4126__auto___13383 = cljs.core.seq.call(null,seq__13369_13374);
if(temp__4126__auto___13383){
var seq__13369_13384__$1 = temp__4126__auto___13383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13369_13384__$1)){
var c__4409__auto___13385 = cljs.core.chunk_first.call(null,seq__13369_13384__$1);
var G__13386 = cljs.core.chunk_rest.call(null,seq__13369_13384__$1);
var G__13387 = c__4409__auto___13385;
var G__13388 = cljs.core.count.call(null,c__4409__auto___13385);
var G__13389 = (0);
seq__13369_13374 = G__13386;
chunk__13370_13375 = G__13387;
count__13371_13376 = G__13388;
i__13372_13377 = G__13389;
continue;
} else {
var node_13390 = cljs.core.first.call(null,seq__13369_13384__$1);
goog.dom.classes.set(node_13390,classes_13373__$1);

var G__13391 = cljs.core.next.call(null,seq__13369_13384__$1);
var G__13392 = null;
var G__13393 = (0);
var G__13394 = (0);
seq__13369_13374 = G__13391;
chunk__13370_13375 = G__13392;
count__13371_13376 = G__13393;
i__13372_13377 = G__13394;
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
var seq__13399_13403 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13400_13404 = null;
var count__13401_13405 = (0);
var i__13402_13406 = (0);
while(true){
if((i__13402_13406 < count__13401_13405)){
var node_13407 = cljs.core._nth.call(null,chunk__13400_13404,i__13402_13406);
goog.dom.setTextContent(node_13407,value);

var G__13408 = seq__13399_13403;
var G__13409 = chunk__13400_13404;
var G__13410 = count__13401_13405;
var G__13411 = (i__13402_13406 + (1));
seq__13399_13403 = G__13408;
chunk__13400_13404 = G__13409;
count__13401_13405 = G__13410;
i__13402_13406 = G__13411;
continue;
} else {
var temp__4126__auto___13412 = cljs.core.seq.call(null,seq__13399_13403);
if(temp__4126__auto___13412){
var seq__13399_13413__$1 = temp__4126__auto___13412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13399_13413__$1)){
var c__4409__auto___13414 = cljs.core.chunk_first.call(null,seq__13399_13413__$1);
var G__13415 = cljs.core.chunk_rest.call(null,seq__13399_13413__$1);
var G__13416 = c__4409__auto___13414;
var G__13417 = cljs.core.count.call(null,c__4409__auto___13414);
var G__13418 = (0);
seq__13399_13403 = G__13415;
chunk__13400_13404 = G__13416;
count__13401_13405 = G__13417;
i__13402_13406 = G__13418;
continue;
} else {
var node_13419 = cljs.core.first.call(null,seq__13399_13413__$1);
goog.dom.setTextContent(node_13419,value);

var G__13420 = cljs.core.next.call(null,seq__13399_13413__$1);
var G__13421 = null;
var G__13422 = (0);
var G__13423 = (0);
seq__13399_13403 = G__13420;
chunk__13400_13404 = G__13421;
count__13401_13405 = G__13422;
i__13402_13406 = G__13423;
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
var seq__13428_13432 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13429_13433 = null;
var count__13430_13434 = (0);
var i__13431_13435 = (0);
while(true){
if((i__13431_13435 < count__13430_13434)){
var node_13436 = cljs.core._nth.call(null,chunk__13429_13433,i__13431_13435);
goog.dom.forms.setValue(node_13436,value);

var G__13437 = seq__13428_13432;
var G__13438 = chunk__13429_13433;
var G__13439 = count__13430_13434;
var G__13440 = (i__13431_13435 + (1));
seq__13428_13432 = G__13437;
chunk__13429_13433 = G__13438;
count__13430_13434 = G__13439;
i__13431_13435 = G__13440;
continue;
} else {
var temp__4126__auto___13441 = cljs.core.seq.call(null,seq__13428_13432);
if(temp__4126__auto___13441){
var seq__13428_13442__$1 = temp__4126__auto___13441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13428_13442__$1)){
var c__4409__auto___13443 = cljs.core.chunk_first.call(null,seq__13428_13442__$1);
var G__13444 = cljs.core.chunk_rest.call(null,seq__13428_13442__$1);
var G__13445 = c__4409__auto___13443;
var G__13446 = cljs.core.count.call(null,c__4409__auto___13443);
var G__13447 = (0);
seq__13428_13432 = G__13444;
chunk__13429_13433 = G__13445;
count__13430_13434 = G__13446;
i__13431_13435 = G__13447;
continue;
} else {
var node_13448 = cljs.core.first.call(null,seq__13428_13442__$1);
goog.dom.forms.setValue(node_13448,value);

var G__13449 = cljs.core.next.call(null,seq__13428_13442__$1);
var G__13450 = null;
var G__13451 = (0);
var G__13452 = (0);
seq__13428_13432 = G__13449;
chunk__13429_13433 = G__13450;
count__13430_13434 = G__13451;
i__13431_13435 = G__13452;
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
var value_13463 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13459_13464 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13460_13465 = null;
var count__13461_13466 = (0);
var i__13462_13467 = (0);
while(true){
if((i__13462_13467 < count__13461_13466)){
var node_13468 = cljs.core._nth.call(null,chunk__13460_13465,i__13462_13467);
node_13468.innerHTML = value_13463;

var G__13469 = seq__13459_13464;
var G__13470 = chunk__13460_13465;
var G__13471 = count__13461_13466;
var G__13472 = (i__13462_13467 + (1));
seq__13459_13464 = G__13469;
chunk__13460_13465 = G__13470;
count__13461_13466 = G__13471;
i__13462_13467 = G__13472;
continue;
} else {
var temp__4126__auto___13473 = cljs.core.seq.call(null,seq__13459_13464);
if(temp__4126__auto___13473){
var seq__13459_13474__$1 = temp__4126__auto___13473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13459_13474__$1)){
var c__4409__auto___13475 = cljs.core.chunk_first.call(null,seq__13459_13474__$1);
var G__13476 = cljs.core.chunk_rest.call(null,seq__13459_13474__$1);
var G__13477 = c__4409__auto___13475;
var G__13478 = cljs.core.count.call(null,c__4409__auto___13475);
var G__13479 = (0);
seq__13459_13464 = G__13476;
chunk__13460_13465 = G__13477;
count__13461_13466 = G__13478;
i__13462_13467 = G__13479;
continue;
} else {
var node_13480 = cljs.core.first.call(null,seq__13459_13474__$1);
node_13480.innerHTML = value_13463;

var G__13481 = cljs.core.next.call(null,seq__13459_13474__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13459_13464 = G__13481;
chunk__13460_13465 = G__13482;
count__13461_13466 = G__13483;
i__13462_13467 = G__13484;
continue;
}
} else {
}
}
break;
}
}catch (e13458){if((e13458 instanceof Error)){
var e_13485 = e13458;
domina.replace_children_BANG_.call(null,content,value_13463);
} else {
throw e13458;

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
var seq__13492_13496 = cljs.core.seq.call(null,children);
var chunk__13493_13497 = null;
var count__13494_13498 = (0);
var i__13495_13499 = (0);
while(true){
if((i__13495_13499 < count__13494_13498)){
var child_13500 = cljs.core._nth.call(null,chunk__13493_13497,i__13495_13499);
frag.appendChild(child_13500);

var G__13501 = seq__13492_13496;
var G__13502 = chunk__13493_13497;
var G__13503 = count__13494_13498;
var G__13504 = (i__13495_13499 + (1));
seq__13492_13496 = G__13501;
chunk__13493_13497 = G__13502;
count__13494_13498 = G__13503;
i__13495_13499 = G__13504;
continue;
} else {
var temp__4126__auto___13505 = cljs.core.seq.call(null,seq__13492_13496);
if(temp__4126__auto___13505){
var seq__13492_13506__$1 = temp__4126__auto___13505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13492_13506__$1)){
var c__4409__auto___13507 = cljs.core.chunk_first.call(null,seq__13492_13506__$1);
var G__13508 = cljs.core.chunk_rest.call(null,seq__13492_13506__$1);
var G__13509 = c__4409__auto___13507;
var G__13510 = cljs.core.count.call(null,c__4409__auto___13507);
var G__13511 = (0);
seq__13492_13496 = G__13508;
chunk__13493_13497 = G__13509;
count__13494_13498 = G__13510;
i__13495_13499 = G__13511;
continue;
} else {
var child_13512 = cljs.core.first.call(null,seq__13492_13506__$1);
frag.appendChild(child_13512);

var G__13513 = cljs.core.next.call(null,seq__13492_13506__$1);
var G__13514 = null;
var G__13515 = (0);
var G__13516 = (0);
seq__13492_13496 = G__13513;
chunk__13493_13497 = G__13514;
count__13494_13498 = G__13515;
i__13495_13499 = G__13516;
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
return (function (p1__13486_SHARP_,p2__13487_SHARP_){
return f.call(null,p1__13486_SHARP_,p2__13487_SHARP_);
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
if((function (){var G__13518 = list_thing;
if(G__13518){
var bit__4303__auto__ = (G__13518.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13518.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13518.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13518);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13518);
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
if((function (){var G__13519 = content;
if(G__13519){
var bit__4303__auto__ = (G__13519.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13519.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13519.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13519);
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
if((function (){var G__13520 = content;
if(G__13520){
var bit__4303__auto__ = (G__13520.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13520.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13520.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13520);
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