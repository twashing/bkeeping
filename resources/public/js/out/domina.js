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
var opt_wrapper_13062 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_13063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_13064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13064,opt_wrapper_13062,table_section_wrapper_13063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13062,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13063,cell_wrapper_13064,table_section_wrapper_13063,table_section_wrapper_13063]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3610__auto__ = div.firstChild;
if(cljs.core.truth_(and__3610__auto__)){
return div.firstChild.childNodes;
} else {
return and__3610__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__13069 = cljs.core.seq.call(null,tbody);
var chunk__13070 = null;
var count__13071 = (0);
var i__13072 = (0);
while(true){
if((i__13072 < count__13071)){
var child = cljs.core._nth.call(null,chunk__13070,i__13072);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13073 = seq__13069;
var G__13074 = chunk__13070;
var G__13075 = count__13071;
var G__13076 = (i__13072 + (1));
seq__13069 = G__13073;
chunk__13070 = G__13074;
count__13071 = G__13075;
i__13072 = G__13076;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13069);
if(temp__4126__auto__){
var seq__13069__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13069__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13069__$1);
var G__13077 = cljs.core.chunk_rest.call(null,seq__13069__$1);
var G__13078 = c__4409__auto__;
var G__13079 = cljs.core.count.call(null,c__4409__auto__);
var G__13080 = (0);
seq__13069 = G__13077;
chunk__13070 = G__13078;
count__13071 = G__13079;
i__13072 = G__13080;
continue;
} else {
var child = cljs.core.first.call(null,seq__13069__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13081 = cljs.core.next.call(null,seq__13069__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__13069 = G__13081;
chunk__13070 = G__13082;
count__13071 = G__13083;
i__13072 = G__13084;
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
var vec__13086 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13086,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__13086,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__13086,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__13087 = wrapper.lastChild;
var G__13088 = (level - (1));
wrapper = G__13087;
level = G__13088;
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

domina.DomContent = (function (){var obj13090 = {};
return obj13090;
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
log_debug.cljs$lang$applyTo = (function (arglist__13091){
var mesg = cljs.core.seq(arglist__13091);
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
log.cljs$lang$applyTo = (function (arglist__13092){
var mesg = cljs.core.seq(arglist__13092);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13093){
var contents = cljs.core.seq(arglist__13093);
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
return cljs.core.map.call(null,(function (p1__13094_SHARP_){
return p1__13094_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__13095_SHARP_,p2__13096_SHARP_){
return goog.dom.insertChildAt(p1__13095_SHARP_,p2__13096_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__13098_SHARP_,p2__13097_SHARP_){
return goog.dom.insertSiblingBefore(p2__13097_SHARP_,p1__13098_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13100_SHARP_,p2__13099_SHARP_){
return goog.dom.insertSiblingAfter(p2__13099_SHARP_,p1__13100_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13102_SHARP_,p2__13101_SHARP_){
return goog.dom.replaceNode(p2__13101_SHARP_,p1__13102_SHARP_);
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
var seq__13107_13111 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13108_13112 = null;
var count__13109_13113 = (0);
var i__13110_13114 = (0);
while(true){
if((i__13110_13114 < count__13109_13113)){
var n_13115 = cljs.core._nth.call(null,chunk__13108_13112,i__13110_13114);
goog.style.setStyle(n_13115,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13116 = seq__13107_13111;
var G__13117 = chunk__13108_13112;
var G__13118 = count__13109_13113;
var G__13119 = (i__13110_13114 + (1));
seq__13107_13111 = G__13116;
chunk__13108_13112 = G__13117;
count__13109_13113 = G__13118;
i__13110_13114 = G__13119;
continue;
} else {
var temp__4126__auto___13120 = cljs.core.seq.call(null,seq__13107_13111);
if(temp__4126__auto___13120){
var seq__13107_13121__$1 = temp__4126__auto___13120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13107_13121__$1)){
var c__4409__auto___13122 = cljs.core.chunk_first.call(null,seq__13107_13121__$1);
var G__13123 = cljs.core.chunk_rest.call(null,seq__13107_13121__$1);
var G__13124 = c__4409__auto___13122;
var G__13125 = cljs.core.count.call(null,c__4409__auto___13122);
var G__13126 = (0);
seq__13107_13111 = G__13123;
chunk__13108_13112 = G__13124;
count__13109_13113 = G__13125;
i__13110_13114 = G__13126;
continue;
} else {
var n_13127 = cljs.core.first.call(null,seq__13107_13121__$1);
goog.style.setStyle(n_13127,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13128 = cljs.core.next.call(null,seq__13107_13121__$1);
var G__13129 = null;
var G__13130 = (0);
var G__13131 = (0);
seq__13107_13111 = G__13128;
chunk__13108_13112 = G__13129;
count__13109_13113 = G__13130;
i__13110_13114 = G__13131;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13132){
var content = cljs.core.first(arglist__13132);
arglist__13132 = cljs.core.next(arglist__13132);
var name = cljs.core.first(arglist__13132);
var value = cljs.core.rest(arglist__13132);
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
var seq__13137_13141 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13138_13142 = null;
var count__13139_13143 = (0);
var i__13140_13144 = (0);
while(true){
if((i__13140_13144 < count__13139_13143)){
var n_13145 = cljs.core._nth.call(null,chunk__13138_13142,i__13140_13144);
n_13145.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13146 = seq__13137_13141;
var G__13147 = chunk__13138_13142;
var G__13148 = count__13139_13143;
var G__13149 = (i__13140_13144 + (1));
seq__13137_13141 = G__13146;
chunk__13138_13142 = G__13147;
count__13139_13143 = G__13148;
i__13140_13144 = G__13149;
continue;
} else {
var temp__4126__auto___13150 = cljs.core.seq.call(null,seq__13137_13141);
if(temp__4126__auto___13150){
var seq__13137_13151__$1 = temp__4126__auto___13150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13137_13151__$1)){
var c__4409__auto___13152 = cljs.core.chunk_first.call(null,seq__13137_13151__$1);
var G__13153 = cljs.core.chunk_rest.call(null,seq__13137_13151__$1);
var G__13154 = c__4409__auto___13152;
var G__13155 = cljs.core.count.call(null,c__4409__auto___13152);
var G__13156 = (0);
seq__13137_13141 = G__13153;
chunk__13138_13142 = G__13154;
count__13139_13143 = G__13155;
i__13140_13144 = G__13156;
continue;
} else {
var n_13157 = cljs.core.first.call(null,seq__13137_13151__$1);
n_13157.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13158 = cljs.core.next.call(null,seq__13137_13151__$1);
var G__13159 = null;
var G__13160 = (0);
var G__13161 = (0);
seq__13137_13141 = G__13158;
chunk__13138_13142 = G__13159;
count__13139_13143 = G__13160;
i__13140_13144 = G__13161;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13162){
var content = cljs.core.first(arglist__13162);
arglist__13162 = cljs.core.next(arglist__13162);
var name = cljs.core.first(arglist__13162);
var value = cljs.core.rest(arglist__13162);
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
var seq__13167_13171 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13168_13172 = null;
var count__13169_13173 = (0);
var i__13170_13174 = (0);
while(true){
if((i__13170_13174 < count__13169_13173)){
var n_13175 = cljs.core._nth.call(null,chunk__13168_13172,i__13170_13174);
n_13175.removeAttribute(cljs.core.name.call(null,name));

var G__13176 = seq__13167_13171;
var G__13177 = chunk__13168_13172;
var G__13178 = count__13169_13173;
var G__13179 = (i__13170_13174 + (1));
seq__13167_13171 = G__13176;
chunk__13168_13172 = G__13177;
count__13169_13173 = G__13178;
i__13170_13174 = G__13179;
continue;
} else {
var temp__4126__auto___13180 = cljs.core.seq.call(null,seq__13167_13171);
if(temp__4126__auto___13180){
var seq__13167_13181__$1 = temp__4126__auto___13180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13167_13181__$1)){
var c__4409__auto___13182 = cljs.core.chunk_first.call(null,seq__13167_13181__$1);
var G__13183 = cljs.core.chunk_rest.call(null,seq__13167_13181__$1);
var G__13184 = c__4409__auto___13182;
var G__13185 = cljs.core.count.call(null,c__4409__auto___13182);
var G__13186 = (0);
seq__13167_13171 = G__13183;
chunk__13168_13172 = G__13184;
count__13169_13173 = G__13185;
i__13170_13174 = G__13186;
continue;
} else {
var n_13187 = cljs.core.first.call(null,seq__13167_13181__$1);
n_13187.removeAttribute(cljs.core.name.call(null,name));

var G__13188 = cljs.core.next.call(null,seq__13167_13181__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__13167_13171 = G__13188;
chunk__13168_13172 = G__13189;
count__13169_13173 = G__13190;
i__13170_13174 = G__13191;
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
var vec__13193 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13193,(0),null);
var v = cljs.core.nth.call(null,vec__13193,(1),null);
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
return (function (p1__13194_SHARP_){
var attr = attrs__$1.item(p1__13194_SHARP_);
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
var seq__13201_13207 = cljs.core.seq.call(null,styles);
var chunk__13202_13208 = null;
var count__13203_13209 = (0);
var i__13204_13210 = (0);
while(true){
if((i__13204_13210 < count__13203_13209)){
var vec__13205_13211 = cljs.core._nth.call(null,chunk__13202_13208,i__13204_13210);
var name_13212 = cljs.core.nth.call(null,vec__13205_13211,(0),null);
var value_13213 = cljs.core.nth.call(null,vec__13205_13211,(1),null);
domina.set_style_BANG_.call(null,content,name_13212,value_13213);

var G__13214 = seq__13201_13207;
var G__13215 = chunk__13202_13208;
var G__13216 = count__13203_13209;
var G__13217 = (i__13204_13210 + (1));
seq__13201_13207 = G__13214;
chunk__13202_13208 = G__13215;
count__13203_13209 = G__13216;
i__13204_13210 = G__13217;
continue;
} else {
var temp__4126__auto___13218 = cljs.core.seq.call(null,seq__13201_13207);
if(temp__4126__auto___13218){
var seq__13201_13219__$1 = temp__4126__auto___13218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13201_13219__$1)){
var c__4409__auto___13220 = cljs.core.chunk_first.call(null,seq__13201_13219__$1);
var G__13221 = cljs.core.chunk_rest.call(null,seq__13201_13219__$1);
var G__13222 = c__4409__auto___13220;
var G__13223 = cljs.core.count.call(null,c__4409__auto___13220);
var G__13224 = (0);
seq__13201_13207 = G__13221;
chunk__13202_13208 = G__13222;
count__13203_13209 = G__13223;
i__13204_13210 = G__13224;
continue;
} else {
var vec__13206_13225 = cljs.core.first.call(null,seq__13201_13219__$1);
var name_13226 = cljs.core.nth.call(null,vec__13206_13225,(0),null);
var value_13227 = cljs.core.nth.call(null,vec__13206_13225,(1),null);
domina.set_style_BANG_.call(null,content,name_13226,value_13227);

var G__13228 = cljs.core.next.call(null,seq__13201_13219__$1);
var G__13229 = null;
var G__13230 = (0);
var G__13231 = (0);
seq__13201_13207 = G__13228;
chunk__13202_13208 = G__13229;
count__13203_13209 = G__13230;
i__13204_13210 = G__13231;
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
var seq__13238_13244 = cljs.core.seq.call(null,attrs);
var chunk__13239_13245 = null;
var count__13240_13246 = (0);
var i__13241_13247 = (0);
while(true){
if((i__13241_13247 < count__13240_13246)){
var vec__13242_13248 = cljs.core._nth.call(null,chunk__13239_13245,i__13241_13247);
var name_13249 = cljs.core.nth.call(null,vec__13242_13248,(0),null);
var value_13250 = cljs.core.nth.call(null,vec__13242_13248,(1),null);
domina.set_attr_BANG_.call(null,content,name_13249,value_13250);

var G__13251 = seq__13238_13244;
var G__13252 = chunk__13239_13245;
var G__13253 = count__13240_13246;
var G__13254 = (i__13241_13247 + (1));
seq__13238_13244 = G__13251;
chunk__13239_13245 = G__13252;
count__13240_13246 = G__13253;
i__13241_13247 = G__13254;
continue;
} else {
var temp__4126__auto___13255 = cljs.core.seq.call(null,seq__13238_13244);
if(temp__4126__auto___13255){
var seq__13238_13256__$1 = temp__4126__auto___13255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13238_13256__$1)){
var c__4409__auto___13257 = cljs.core.chunk_first.call(null,seq__13238_13256__$1);
var G__13258 = cljs.core.chunk_rest.call(null,seq__13238_13256__$1);
var G__13259 = c__4409__auto___13257;
var G__13260 = cljs.core.count.call(null,c__4409__auto___13257);
var G__13261 = (0);
seq__13238_13244 = G__13258;
chunk__13239_13245 = G__13259;
count__13240_13246 = G__13260;
i__13241_13247 = G__13261;
continue;
} else {
var vec__13243_13262 = cljs.core.first.call(null,seq__13238_13256__$1);
var name_13263 = cljs.core.nth.call(null,vec__13243_13262,(0),null);
var value_13264 = cljs.core.nth.call(null,vec__13243_13262,(1),null);
domina.set_attr_BANG_.call(null,content,name_13263,value_13264);

var G__13265 = cljs.core.next.call(null,seq__13238_13256__$1);
var G__13266 = null;
var G__13267 = (0);
var G__13268 = (0);
seq__13238_13244 = G__13265;
chunk__13239_13245 = G__13266;
count__13240_13246 = G__13267;
i__13241_13247 = G__13268;
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
var seq__13273_13277 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13274_13278 = null;
var count__13275_13279 = (0);
var i__13276_13280 = (0);
while(true){
if((i__13276_13280 < count__13275_13279)){
var node_13281 = cljs.core._nth.call(null,chunk__13274_13278,i__13276_13280);
goog.dom.classes.add(node_13281,class$);

var G__13282 = seq__13273_13277;
var G__13283 = chunk__13274_13278;
var G__13284 = count__13275_13279;
var G__13285 = (i__13276_13280 + (1));
seq__13273_13277 = G__13282;
chunk__13274_13278 = G__13283;
count__13275_13279 = G__13284;
i__13276_13280 = G__13285;
continue;
} else {
var temp__4126__auto___13286 = cljs.core.seq.call(null,seq__13273_13277);
if(temp__4126__auto___13286){
var seq__13273_13287__$1 = temp__4126__auto___13286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13273_13287__$1)){
var c__4409__auto___13288 = cljs.core.chunk_first.call(null,seq__13273_13287__$1);
var G__13289 = cljs.core.chunk_rest.call(null,seq__13273_13287__$1);
var G__13290 = c__4409__auto___13288;
var G__13291 = cljs.core.count.call(null,c__4409__auto___13288);
var G__13292 = (0);
seq__13273_13277 = G__13289;
chunk__13274_13278 = G__13290;
count__13275_13279 = G__13291;
i__13276_13280 = G__13292;
continue;
} else {
var node_13293 = cljs.core.first.call(null,seq__13273_13287__$1);
goog.dom.classes.add(node_13293,class$);

var G__13294 = cljs.core.next.call(null,seq__13273_13287__$1);
var G__13295 = null;
var G__13296 = (0);
var G__13297 = (0);
seq__13273_13277 = G__13294;
chunk__13274_13278 = G__13295;
count__13275_13279 = G__13296;
i__13276_13280 = G__13297;
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
var seq__13302_13306 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13303_13307 = null;
var count__13304_13308 = (0);
var i__13305_13309 = (0);
while(true){
if((i__13305_13309 < count__13304_13308)){
var node_13310 = cljs.core._nth.call(null,chunk__13303_13307,i__13305_13309);
goog.dom.classes.remove(node_13310,class$);

var G__13311 = seq__13302_13306;
var G__13312 = chunk__13303_13307;
var G__13313 = count__13304_13308;
var G__13314 = (i__13305_13309 + (1));
seq__13302_13306 = G__13311;
chunk__13303_13307 = G__13312;
count__13304_13308 = G__13313;
i__13305_13309 = G__13314;
continue;
} else {
var temp__4126__auto___13315 = cljs.core.seq.call(null,seq__13302_13306);
if(temp__4126__auto___13315){
var seq__13302_13316__$1 = temp__4126__auto___13315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13302_13316__$1)){
var c__4409__auto___13317 = cljs.core.chunk_first.call(null,seq__13302_13316__$1);
var G__13318 = cljs.core.chunk_rest.call(null,seq__13302_13316__$1);
var G__13319 = c__4409__auto___13317;
var G__13320 = cljs.core.count.call(null,c__4409__auto___13317);
var G__13321 = (0);
seq__13302_13306 = G__13318;
chunk__13303_13307 = G__13319;
count__13304_13308 = G__13320;
i__13305_13309 = G__13321;
continue;
} else {
var node_13322 = cljs.core.first.call(null,seq__13302_13316__$1);
goog.dom.classes.remove(node_13322,class$);

var G__13323 = cljs.core.next.call(null,seq__13302_13316__$1);
var G__13324 = null;
var G__13325 = (0);
var G__13326 = (0);
seq__13302_13306 = G__13323;
chunk__13303_13307 = G__13324;
count__13304_13308 = G__13325;
i__13305_13309 = G__13326;
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
var seq__13331_13335 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13332_13336 = null;
var count__13333_13337 = (0);
var i__13334_13338 = (0);
while(true){
if((i__13334_13338 < count__13333_13337)){
var node_13339 = cljs.core._nth.call(null,chunk__13332_13336,i__13334_13338);
goog.dom.classes.toggle(node_13339,class$);

var G__13340 = seq__13331_13335;
var G__13341 = chunk__13332_13336;
var G__13342 = count__13333_13337;
var G__13343 = (i__13334_13338 + (1));
seq__13331_13335 = G__13340;
chunk__13332_13336 = G__13341;
count__13333_13337 = G__13342;
i__13334_13338 = G__13343;
continue;
} else {
var temp__4126__auto___13344 = cljs.core.seq.call(null,seq__13331_13335);
if(temp__4126__auto___13344){
var seq__13331_13345__$1 = temp__4126__auto___13344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13331_13345__$1)){
var c__4409__auto___13346 = cljs.core.chunk_first.call(null,seq__13331_13345__$1);
var G__13347 = cljs.core.chunk_rest.call(null,seq__13331_13345__$1);
var G__13348 = c__4409__auto___13346;
var G__13349 = cljs.core.count.call(null,c__4409__auto___13346);
var G__13350 = (0);
seq__13331_13335 = G__13347;
chunk__13332_13336 = G__13348;
count__13333_13337 = G__13349;
i__13334_13338 = G__13350;
continue;
} else {
var node_13351 = cljs.core.first.call(null,seq__13331_13345__$1);
goog.dom.classes.toggle(node_13351,class$);

var G__13352 = cljs.core.next.call(null,seq__13331_13345__$1);
var G__13353 = null;
var G__13354 = (0);
var G__13355 = (0);
seq__13331_13335 = G__13352;
chunk__13332_13336 = G__13353;
count__13333_13337 = G__13354;
i__13334_13338 = G__13355;
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
var classes_13364__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13360_13365 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13361_13366 = null;
var count__13362_13367 = (0);
var i__13363_13368 = (0);
while(true){
if((i__13363_13368 < count__13362_13367)){
var node_13369 = cljs.core._nth.call(null,chunk__13361_13366,i__13363_13368);
goog.dom.classes.set(node_13369,classes_13364__$1);

var G__13370 = seq__13360_13365;
var G__13371 = chunk__13361_13366;
var G__13372 = count__13362_13367;
var G__13373 = (i__13363_13368 + (1));
seq__13360_13365 = G__13370;
chunk__13361_13366 = G__13371;
count__13362_13367 = G__13372;
i__13363_13368 = G__13373;
continue;
} else {
var temp__4126__auto___13374 = cljs.core.seq.call(null,seq__13360_13365);
if(temp__4126__auto___13374){
var seq__13360_13375__$1 = temp__4126__auto___13374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13360_13375__$1)){
var c__4409__auto___13376 = cljs.core.chunk_first.call(null,seq__13360_13375__$1);
var G__13377 = cljs.core.chunk_rest.call(null,seq__13360_13375__$1);
var G__13378 = c__4409__auto___13376;
var G__13379 = cljs.core.count.call(null,c__4409__auto___13376);
var G__13380 = (0);
seq__13360_13365 = G__13377;
chunk__13361_13366 = G__13378;
count__13362_13367 = G__13379;
i__13363_13368 = G__13380;
continue;
} else {
var node_13381 = cljs.core.first.call(null,seq__13360_13375__$1);
goog.dom.classes.set(node_13381,classes_13364__$1);

var G__13382 = cljs.core.next.call(null,seq__13360_13375__$1);
var G__13383 = null;
var G__13384 = (0);
var G__13385 = (0);
seq__13360_13365 = G__13382;
chunk__13361_13366 = G__13383;
count__13362_13367 = G__13384;
i__13363_13368 = G__13385;
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
var seq__13390_13394 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13391_13395 = null;
var count__13392_13396 = (0);
var i__13393_13397 = (0);
while(true){
if((i__13393_13397 < count__13392_13396)){
var node_13398 = cljs.core._nth.call(null,chunk__13391_13395,i__13393_13397);
goog.dom.setTextContent(node_13398,value);

var G__13399 = seq__13390_13394;
var G__13400 = chunk__13391_13395;
var G__13401 = count__13392_13396;
var G__13402 = (i__13393_13397 + (1));
seq__13390_13394 = G__13399;
chunk__13391_13395 = G__13400;
count__13392_13396 = G__13401;
i__13393_13397 = G__13402;
continue;
} else {
var temp__4126__auto___13403 = cljs.core.seq.call(null,seq__13390_13394);
if(temp__4126__auto___13403){
var seq__13390_13404__$1 = temp__4126__auto___13403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13390_13404__$1)){
var c__4409__auto___13405 = cljs.core.chunk_first.call(null,seq__13390_13404__$1);
var G__13406 = cljs.core.chunk_rest.call(null,seq__13390_13404__$1);
var G__13407 = c__4409__auto___13405;
var G__13408 = cljs.core.count.call(null,c__4409__auto___13405);
var G__13409 = (0);
seq__13390_13394 = G__13406;
chunk__13391_13395 = G__13407;
count__13392_13396 = G__13408;
i__13393_13397 = G__13409;
continue;
} else {
var node_13410 = cljs.core.first.call(null,seq__13390_13404__$1);
goog.dom.setTextContent(node_13410,value);

var G__13411 = cljs.core.next.call(null,seq__13390_13404__$1);
var G__13412 = null;
var G__13413 = (0);
var G__13414 = (0);
seq__13390_13394 = G__13411;
chunk__13391_13395 = G__13412;
count__13392_13396 = G__13413;
i__13393_13397 = G__13414;
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
var seq__13419_13423 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13420_13424 = null;
var count__13421_13425 = (0);
var i__13422_13426 = (0);
while(true){
if((i__13422_13426 < count__13421_13425)){
var node_13427 = cljs.core._nth.call(null,chunk__13420_13424,i__13422_13426);
goog.dom.forms.setValue(node_13427,value);

var G__13428 = seq__13419_13423;
var G__13429 = chunk__13420_13424;
var G__13430 = count__13421_13425;
var G__13431 = (i__13422_13426 + (1));
seq__13419_13423 = G__13428;
chunk__13420_13424 = G__13429;
count__13421_13425 = G__13430;
i__13422_13426 = G__13431;
continue;
} else {
var temp__4126__auto___13432 = cljs.core.seq.call(null,seq__13419_13423);
if(temp__4126__auto___13432){
var seq__13419_13433__$1 = temp__4126__auto___13432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13419_13433__$1)){
var c__4409__auto___13434 = cljs.core.chunk_first.call(null,seq__13419_13433__$1);
var G__13435 = cljs.core.chunk_rest.call(null,seq__13419_13433__$1);
var G__13436 = c__4409__auto___13434;
var G__13437 = cljs.core.count.call(null,c__4409__auto___13434);
var G__13438 = (0);
seq__13419_13423 = G__13435;
chunk__13420_13424 = G__13436;
count__13421_13425 = G__13437;
i__13422_13426 = G__13438;
continue;
} else {
var node_13439 = cljs.core.first.call(null,seq__13419_13433__$1);
goog.dom.forms.setValue(node_13439,value);

var G__13440 = cljs.core.next.call(null,seq__13419_13433__$1);
var G__13441 = null;
var G__13442 = (0);
var G__13443 = (0);
seq__13419_13423 = G__13440;
chunk__13420_13424 = G__13441;
count__13421_13425 = G__13442;
i__13422_13426 = G__13443;
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
var value_13454 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13450_13455 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13451_13456 = null;
var count__13452_13457 = (0);
var i__13453_13458 = (0);
while(true){
if((i__13453_13458 < count__13452_13457)){
var node_13459 = cljs.core._nth.call(null,chunk__13451_13456,i__13453_13458);
node_13459.innerHTML = value_13454;

var G__13460 = seq__13450_13455;
var G__13461 = chunk__13451_13456;
var G__13462 = count__13452_13457;
var G__13463 = (i__13453_13458 + (1));
seq__13450_13455 = G__13460;
chunk__13451_13456 = G__13461;
count__13452_13457 = G__13462;
i__13453_13458 = G__13463;
continue;
} else {
var temp__4126__auto___13464 = cljs.core.seq.call(null,seq__13450_13455);
if(temp__4126__auto___13464){
var seq__13450_13465__$1 = temp__4126__auto___13464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13450_13465__$1)){
var c__4409__auto___13466 = cljs.core.chunk_first.call(null,seq__13450_13465__$1);
var G__13467 = cljs.core.chunk_rest.call(null,seq__13450_13465__$1);
var G__13468 = c__4409__auto___13466;
var G__13469 = cljs.core.count.call(null,c__4409__auto___13466);
var G__13470 = (0);
seq__13450_13455 = G__13467;
chunk__13451_13456 = G__13468;
count__13452_13457 = G__13469;
i__13453_13458 = G__13470;
continue;
} else {
var node_13471 = cljs.core.first.call(null,seq__13450_13465__$1);
node_13471.innerHTML = value_13454;

var G__13472 = cljs.core.next.call(null,seq__13450_13465__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__13450_13455 = G__13472;
chunk__13451_13456 = G__13473;
count__13452_13457 = G__13474;
i__13453_13458 = G__13475;
continue;
}
} else {
}
}
break;
}
}catch (e13449){if((e13449 instanceof Error)){
var e_13476 = e13449;
domina.replace_children_BANG_.call(null,content,value_13454);
} else {
throw e13449;

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
var seq__13483_13487 = cljs.core.seq.call(null,children);
var chunk__13484_13488 = null;
var count__13485_13489 = (0);
var i__13486_13490 = (0);
while(true){
if((i__13486_13490 < count__13485_13489)){
var child_13491 = cljs.core._nth.call(null,chunk__13484_13488,i__13486_13490);
frag.appendChild(child_13491);

var G__13492 = seq__13483_13487;
var G__13493 = chunk__13484_13488;
var G__13494 = count__13485_13489;
var G__13495 = (i__13486_13490 + (1));
seq__13483_13487 = G__13492;
chunk__13484_13488 = G__13493;
count__13485_13489 = G__13494;
i__13486_13490 = G__13495;
continue;
} else {
var temp__4126__auto___13496 = cljs.core.seq.call(null,seq__13483_13487);
if(temp__4126__auto___13496){
var seq__13483_13497__$1 = temp__4126__auto___13496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13483_13497__$1)){
var c__4409__auto___13498 = cljs.core.chunk_first.call(null,seq__13483_13497__$1);
var G__13499 = cljs.core.chunk_rest.call(null,seq__13483_13497__$1);
var G__13500 = c__4409__auto___13498;
var G__13501 = cljs.core.count.call(null,c__4409__auto___13498);
var G__13502 = (0);
seq__13483_13487 = G__13499;
chunk__13484_13488 = G__13500;
count__13485_13489 = G__13501;
i__13486_13490 = G__13502;
continue;
} else {
var child_13503 = cljs.core.first.call(null,seq__13483_13497__$1);
frag.appendChild(child_13503);

var G__13504 = cljs.core.next.call(null,seq__13483_13497__$1);
var G__13505 = null;
var G__13506 = (0);
var G__13507 = (0);
seq__13483_13487 = G__13504;
chunk__13484_13488 = G__13505;
count__13485_13489 = G__13506;
i__13486_13490 = G__13507;
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
return (function (p1__13477_SHARP_,p2__13478_SHARP_){
return f.call(null,p1__13477_SHARP_,p2__13478_SHARP_);
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
if((function (){var G__13509 = list_thing;
if(G__13509){
var bit__4303__auto__ = (G__13509.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13509.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13509.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13509);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13509);
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
if((function (){var G__13510 = content;
if(G__13510){
var bit__4303__auto__ = (G__13510.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13510.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13510.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13510);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13510);
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
if((function (){var G__13511 = content;
if(G__13511){
var bit__4303__auto__ = (G__13511.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13511.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13511.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13511);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13511);
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