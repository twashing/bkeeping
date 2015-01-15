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
var opt_wrapper_13081 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_13082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_13083 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13083,opt_wrapper_13081,table_section_wrapper_13082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13081,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13082,cell_wrapper_13083,table_section_wrapper_13082,table_section_wrapper_13082]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3610__auto__ = div.firstChild;
if(cljs.core.truth_(and__3610__auto__)){
return div.firstChild.childNodes;
} else {
return and__3610__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__13088 = cljs.core.seq.call(null,tbody);
var chunk__13089 = null;
var count__13090 = (0);
var i__13091 = (0);
while(true){
if((i__13091 < count__13090)){
var child = cljs.core._nth.call(null,chunk__13089,i__13091);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13092 = seq__13088;
var G__13093 = chunk__13089;
var G__13094 = count__13090;
var G__13095 = (i__13091 + (1));
seq__13088 = G__13092;
chunk__13089 = G__13093;
count__13090 = G__13094;
i__13091 = G__13095;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13088);
if(temp__4126__auto__){
var seq__13088__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13088__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13088__$1);
var G__13096 = cljs.core.chunk_rest.call(null,seq__13088__$1);
var G__13097 = c__4409__auto__;
var G__13098 = cljs.core.count.call(null,c__4409__auto__);
var G__13099 = (0);
seq__13088 = G__13096;
chunk__13089 = G__13097;
count__13090 = G__13098;
i__13091 = G__13099;
continue;
} else {
var child = cljs.core.first.call(null,seq__13088__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13100 = cljs.core.next.call(null,seq__13088__$1);
var G__13101 = null;
var G__13102 = (0);
var G__13103 = (0);
seq__13088 = G__13100;
chunk__13089 = G__13101;
count__13090 = G__13102;
i__13091 = G__13103;
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
var vec__13105 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13105,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__13105,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__13105,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__13106 = wrapper.lastChild;
var G__13107 = (level - (1));
wrapper = G__13106;
level = G__13107;
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

domina.DomContent = (function (){var obj13109 = {};
return obj13109;
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
log_debug.cljs$lang$applyTo = (function (arglist__13110){
var mesg = cljs.core.seq(arglist__13110);
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
log.cljs$lang$applyTo = (function (arglist__13111){
var mesg = cljs.core.seq(arglist__13111);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13112){
var contents = cljs.core.seq(arglist__13112);
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
return cljs.core.map.call(null,(function (p1__13113_SHARP_){
return p1__13113_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__13114_SHARP_,p2__13115_SHARP_){
return goog.dom.insertChildAt(p1__13114_SHARP_,p2__13115_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__13117_SHARP_,p2__13116_SHARP_){
return goog.dom.insertSiblingBefore(p2__13116_SHARP_,p1__13117_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13119_SHARP_,p2__13118_SHARP_){
return goog.dom.insertSiblingAfter(p2__13118_SHARP_,p1__13119_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13121_SHARP_,p2__13120_SHARP_){
return goog.dom.replaceNode(p2__13120_SHARP_,p1__13121_SHARP_);
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
var seq__13126_13130 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13127_13131 = null;
var count__13128_13132 = (0);
var i__13129_13133 = (0);
while(true){
if((i__13129_13133 < count__13128_13132)){
var n_13134 = cljs.core._nth.call(null,chunk__13127_13131,i__13129_13133);
goog.style.setStyle(n_13134,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13135 = seq__13126_13130;
var G__13136 = chunk__13127_13131;
var G__13137 = count__13128_13132;
var G__13138 = (i__13129_13133 + (1));
seq__13126_13130 = G__13135;
chunk__13127_13131 = G__13136;
count__13128_13132 = G__13137;
i__13129_13133 = G__13138;
continue;
} else {
var temp__4126__auto___13139 = cljs.core.seq.call(null,seq__13126_13130);
if(temp__4126__auto___13139){
var seq__13126_13140__$1 = temp__4126__auto___13139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13126_13140__$1)){
var c__4409__auto___13141 = cljs.core.chunk_first.call(null,seq__13126_13140__$1);
var G__13142 = cljs.core.chunk_rest.call(null,seq__13126_13140__$1);
var G__13143 = c__4409__auto___13141;
var G__13144 = cljs.core.count.call(null,c__4409__auto___13141);
var G__13145 = (0);
seq__13126_13130 = G__13142;
chunk__13127_13131 = G__13143;
count__13128_13132 = G__13144;
i__13129_13133 = G__13145;
continue;
} else {
var n_13146 = cljs.core.first.call(null,seq__13126_13140__$1);
goog.style.setStyle(n_13146,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13147 = cljs.core.next.call(null,seq__13126_13140__$1);
var G__13148 = null;
var G__13149 = (0);
var G__13150 = (0);
seq__13126_13130 = G__13147;
chunk__13127_13131 = G__13148;
count__13128_13132 = G__13149;
i__13129_13133 = G__13150;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13151){
var content = cljs.core.first(arglist__13151);
arglist__13151 = cljs.core.next(arglist__13151);
var name = cljs.core.first(arglist__13151);
var value = cljs.core.rest(arglist__13151);
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
var seq__13156_13160 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13157_13161 = null;
var count__13158_13162 = (0);
var i__13159_13163 = (0);
while(true){
if((i__13159_13163 < count__13158_13162)){
var n_13164 = cljs.core._nth.call(null,chunk__13157_13161,i__13159_13163);
n_13164.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13165 = seq__13156_13160;
var G__13166 = chunk__13157_13161;
var G__13167 = count__13158_13162;
var G__13168 = (i__13159_13163 + (1));
seq__13156_13160 = G__13165;
chunk__13157_13161 = G__13166;
count__13158_13162 = G__13167;
i__13159_13163 = G__13168;
continue;
} else {
var temp__4126__auto___13169 = cljs.core.seq.call(null,seq__13156_13160);
if(temp__4126__auto___13169){
var seq__13156_13170__$1 = temp__4126__auto___13169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13156_13170__$1)){
var c__4409__auto___13171 = cljs.core.chunk_first.call(null,seq__13156_13170__$1);
var G__13172 = cljs.core.chunk_rest.call(null,seq__13156_13170__$1);
var G__13173 = c__4409__auto___13171;
var G__13174 = cljs.core.count.call(null,c__4409__auto___13171);
var G__13175 = (0);
seq__13156_13160 = G__13172;
chunk__13157_13161 = G__13173;
count__13158_13162 = G__13174;
i__13159_13163 = G__13175;
continue;
} else {
var n_13176 = cljs.core.first.call(null,seq__13156_13170__$1);
n_13176.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13177 = cljs.core.next.call(null,seq__13156_13170__$1);
var G__13178 = null;
var G__13179 = (0);
var G__13180 = (0);
seq__13156_13160 = G__13177;
chunk__13157_13161 = G__13178;
count__13158_13162 = G__13179;
i__13159_13163 = G__13180;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13181){
var content = cljs.core.first(arglist__13181);
arglist__13181 = cljs.core.next(arglist__13181);
var name = cljs.core.first(arglist__13181);
var value = cljs.core.rest(arglist__13181);
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
var seq__13186_13190 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13187_13191 = null;
var count__13188_13192 = (0);
var i__13189_13193 = (0);
while(true){
if((i__13189_13193 < count__13188_13192)){
var n_13194 = cljs.core._nth.call(null,chunk__13187_13191,i__13189_13193);
n_13194.removeAttribute(cljs.core.name.call(null,name));

var G__13195 = seq__13186_13190;
var G__13196 = chunk__13187_13191;
var G__13197 = count__13188_13192;
var G__13198 = (i__13189_13193 + (1));
seq__13186_13190 = G__13195;
chunk__13187_13191 = G__13196;
count__13188_13192 = G__13197;
i__13189_13193 = G__13198;
continue;
} else {
var temp__4126__auto___13199 = cljs.core.seq.call(null,seq__13186_13190);
if(temp__4126__auto___13199){
var seq__13186_13200__$1 = temp__4126__auto___13199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13186_13200__$1)){
var c__4409__auto___13201 = cljs.core.chunk_first.call(null,seq__13186_13200__$1);
var G__13202 = cljs.core.chunk_rest.call(null,seq__13186_13200__$1);
var G__13203 = c__4409__auto___13201;
var G__13204 = cljs.core.count.call(null,c__4409__auto___13201);
var G__13205 = (0);
seq__13186_13190 = G__13202;
chunk__13187_13191 = G__13203;
count__13188_13192 = G__13204;
i__13189_13193 = G__13205;
continue;
} else {
var n_13206 = cljs.core.first.call(null,seq__13186_13200__$1);
n_13206.removeAttribute(cljs.core.name.call(null,name));

var G__13207 = cljs.core.next.call(null,seq__13186_13200__$1);
var G__13208 = null;
var G__13209 = (0);
var G__13210 = (0);
seq__13186_13190 = G__13207;
chunk__13187_13191 = G__13208;
count__13188_13192 = G__13209;
i__13189_13193 = G__13210;
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
var vec__13212 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13212,(0),null);
var v = cljs.core.nth.call(null,vec__13212,(1),null);
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
return (function (p1__13213_SHARP_){
var attr = attrs__$1.item(p1__13213_SHARP_);
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
var seq__13220_13226 = cljs.core.seq.call(null,styles);
var chunk__13221_13227 = null;
var count__13222_13228 = (0);
var i__13223_13229 = (0);
while(true){
if((i__13223_13229 < count__13222_13228)){
var vec__13224_13230 = cljs.core._nth.call(null,chunk__13221_13227,i__13223_13229);
var name_13231 = cljs.core.nth.call(null,vec__13224_13230,(0),null);
var value_13232 = cljs.core.nth.call(null,vec__13224_13230,(1),null);
domina.set_style_BANG_.call(null,content,name_13231,value_13232);

var G__13233 = seq__13220_13226;
var G__13234 = chunk__13221_13227;
var G__13235 = count__13222_13228;
var G__13236 = (i__13223_13229 + (1));
seq__13220_13226 = G__13233;
chunk__13221_13227 = G__13234;
count__13222_13228 = G__13235;
i__13223_13229 = G__13236;
continue;
} else {
var temp__4126__auto___13237 = cljs.core.seq.call(null,seq__13220_13226);
if(temp__4126__auto___13237){
var seq__13220_13238__$1 = temp__4126__auto___13237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13220_13238__$1)){
var c__4409__auto___13239 = cljs.core.chunk_first.call(null,seq__13220_13238__$1);
var G__13240 = cljs.core.chunk_rest.call(null,seq__13220_13238__$1);
var G__13241 = c__4409__auto___13239;
var G__13242 = cljs.core.count.call(null,c__4409__auto___13239);
var G__13243 = (0);
seq__13220_13226 = G__13240;
chunk__13221_13227 = G__13241;
count__13222_13228 = G__13242;
i__13223_13229 = G__13243;
continue;
} else {
var vec__13225_13244 = cljs.core.first.call(null,seq__13220_13238__$1);
var name_13245 = cljs.core.nth.call(null,vec__13225_13244,(0),null);
var value_13246 = cljs.core.nth.call(null,vec__13225_13244,(1),null);
domina.set_style_BANG_.call(null,content,name_13245,value_13246);

var G__13247 = cljs.core.next.call(null,seq__13220_13238__$1);
var G__13248 = null;
var G__13249 = (0);
var G__13250 = (0);
seq__13220_13226 = G__13247;
chunk__13221_13227 = G__13248;
count__13222_13228 = G__13249;
i__13223_13229 = G__13250;
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
var seq__13257_13263 = cljs.core.seq.call(null,attrs);
var chunk__13258_13264 = null;
var count__13259_13265 = (0);
var i__13260_13266 = (0);
while(true){
if((i__13260_13266 < count__13259_13265)){
var vec__13261_13267 = cljs.core._nth.call(null,chunk__13258_13264,i__13260_13266);
var name_13268 = cljs.core.nth.call(null,vec__13261_13267,(0),null);
var value_13269 = cljs.core.nth.call(null,vec__13261_13267,(1),null);
domina.set_attr_BANG_.call(null,content,name_13268,value_13269);

var G__13270 = seq__13257_13263;
var G__13271 = chunk__13258_13264;
var G__13272 = count__13259_13265;
var G__13273 = (i__13260_13266 + (1));
seq__13257_13263 = G__13270;
chunk__13258_13264 = G__13271;
count__13259_13265 = G__13272;
i__13260_13266 = G__13273;
continue;
} else {
var temp__4126__auto___13274 = cljs.core.seq.call(null,seq__13257_13263);
if(temp__4126__auto___13274){
var seq__13257_13275__$1 = temp__4126__auto___13274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13257_13275__$1)){
var c__4409__auto___13276 = cljs.core.chunk_first.call(null,seq__13257_13275__$1);
var G__13277 = cljs.core.chunk_rest.call(null,seq__13257_13275__$1);
var G__13278 = c__4409__auto___13276;
var G__13279 = cljs.core.count.call(null,c__4409__auto___13276);
var G__13280 = (0);
seq__13257_13263 = G__13277;
chunk__13258_13264 = G__13278;
count__13259_13265 = G__13279;
i__13260_13266 = G__13280;
continue;
} else {
var vec__13262_13281 = cljs.core.first.call(null,seq__13257_13275__$1);
var name_13282 = cljs.core.nth.call(null,vec__13262_13281,(0),null);
var value_13283 = cljs.core.nth.call(null,vec__13262_13281,(1),null);
domina.set_attr_BANG_.call(null,content,name_13282,value_13283);

var G__13284 = cljs.core.next.call(null,seq__13257_13275__$1);
var G__13285 = null;
var G__13286 = (0);
var G__13287 = (0);
seq__13257_13263 = G__13284;
chunk__13258_13264 = G__13285;
count__13259_13265 = G__13286;
i__13260_13266 = G__13287;
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
var seq__13292_13296 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13293_13297 = null;
var count__13294_13298 = (0);
var i__13295_13299 = (0);
while(true){
if((i__13295_13299 < count__13294_13298)){
var node_13300 = cljs.core._nth.call(null,chunk__13293_13297,i__13295_13299);
goog.dom.classes.add(node_13300,class$);

var G__13301 = seq__13292_13296;
var G__13302 = chunk__13293_13297;
var G__13303 = count__13294_13298;
var G__13304 = (i__13295_13299 + (1));
seq__13292_13296 = G__13301;
chunk__13293_13297 = G__13302;
count__13294_13298 = G__13303;
i__13295_13299 = G__13304;
continue;
} else {
var temp__4126__auto___13305 = cljs.core.seq.call(null,seq__13292_13296);
if(temp__4126__auto___13305){
var seq__13292_13306__$1 = temp__4126__auto___13305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13292_13306__$1)){
var c__4409__auto___13307 = cljs.core.chunk_first.call(null,seq__13292_13306__$1);
var G__13308 = cljs.core.chunk_rest.call(null,seq__13292_13306__$1);
var G__13309 = c__4409__auto___13307;
var G__13310 = cljs.core.count.call(null,c__4409__auto___13307);
var G__13311 = (0);
seq__13292_13296 = G__13308;
chunk__13293_13297 = G__13309;
count__13294_13298 = G__13310;
i__13295_13299 = G__13311;
continue;
} else {
var node_13312 = cljs.core.first.call(null,seq__13292_13306__$1);
goog.dom.classes.add(node_13312,class$);

var G__13313 = cljs.core.next.call(null,seq__13292_13306__$1);
var G__13314 = null;
var G__13315 = (0);
var G__13316 = (0);
seq__13292_13296 = G__13313;
chunk__13293_13297 = G__13314;
count__13294_13298 = G__13315;
i__13295_13299 = G__13316;
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
var seq__13321_13325 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13322_13326 = null;
var count__13323_13327 = (0);
var i__13324_13328 = (0);
while(true){
if((i__13324_13328 < count__13323_13327)){
var node_13329 = cljs.core._nth.call(null,chunk__13322_13326,i__13324_13328);
goog.dom.classes.remove(node_13329,class$);

var G__13330 = seq__13321_13325;
var G__13331 = chunk__13322_13326;
var G__13332 = count__13323_13327;
var G__13333 = (i__13324_13328 + (1));
seq__13321_13325 = G__13330;
chunk__13322_13326 = G__13331;
count__13323_13327 = G__13332;
i__13324_13328 = G__13333;
continue;
} else {
var temp__4126__auto___13334 = cljs.core.seq.call(null,seq__13321_13325);
if(temp__4126__auto___13334){
var seq__13321_13335__$1 = temp__4126__auto___13334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13321_13335__$1)){
var c__4409__auto___13336 = cljs.core.chunk_first.call(null,seq__13321_13335__$1);
var G__13337 = cljs.core.chunk_rest.call(null,seq__13321_13335__$1);
var G__13338 = c__4409__auto___13336;
var G__13339 = cljs.core.count.call(null,c__4409__auto___13336);
var G__13340 = (0);
seq__13321_13325 = G__13337;
chunk__13322_13326 = G__13338;
count__13323_13327 = G__13339;
i__13324_13328 = G__13340;
continue;
} else {
var node_13341 = cljs.core.first.call(null,seq__13321_13335__$1);
goog.dom.classes.remove(node_13341,class$);

var G__13342 = cljs.core.next.call(null,seq__13321_13335__$1);
var G__13343 = null;
var G__13344 = (0);
var G__13345 = (0);
seq__13321_13325 = G__13342;
chunk__13322_13326 = G__13343;
count__13323_13327 = G__13344;
i__13324_13328 = G__13345;
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
var seq__13350_13354 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13351_13355 = null;
var count__13352_13356 = (0);
var i__13353_13357 = (0);
while(true){
if((i__13353_13357 < count__13352_13356)){
var node_13358 = cljs.core._nth.call(null,chunk__13351_13355,i__13353_13357);
goog.dom.classes.toggle(node_13358,class$);

var G__13359 = seq__13350_13354;
var G__13360 = chunk__13351_13355;
var G__13361 = count__13352_13356;
var G__13362 = (i__13353_13357 + (1));
seq__13350_13354 = G__13359;
chunk__13351_13355 = G__13360;
count__13352_13356 = G__13361;
i__13353_13357 = G__13362;
continue;
} else {
var temp__4126__auto___13363 = cljs.core.seq.call(null,seq__13350_13354);
if(temp__4126__auto___13363){
var seq__13350_13364__$1 = temp__4126__auto___13363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13350_13364__$1)){
var c__4409__auto___13365 = cljs.core.chunk_first.call(null,seq__13350_13364__$1);
var G__13366 = cljs.core.chunk_rest.call(null,seq__13350_13364__$1);
var G__13367 = c__4409__auto___13365;
var G__13368 = cljs.core.count.call(null,c__4409__auto___13365);
var G__13369 = (0);
seq__13350_13354 = G__13366;
chunk__13351_13355 = G__13367;
count__13352_13356 = G__13368;
i__13353_13357 = G__13369;
continue;
} else {
var node_13370 = cljs.core.first.call(null,seq__13350_13364__$1);
goog.dom.classes.toggle(node_13370,class$);

var G__13371 = cljs.core.next.call(null,seq__13350_13364__$1);
var G__13372 = null;
var G__13373 = (0);
var G__13374 = (0);
seq__13350_13354 = G__13371;
chunk__13351_13355 = G__13372;
count__13352_13356 = G__13373;
i__13353_13357 = G__13374;
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
var classes_13383__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13379_13384 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13380_13385 = null;
var count__13381_13386 = (0);
var i__13382_13387 = (0);
while(true){
if((i__13382_13387 < count__13381_13386)){
var node_13388 = cljs.core._nth.call(null,chunk__13380_13385,i__13382_13387);
goog.dom.classes.set(node_13388,classes_13383__$1);

var G__13389 = seq__13379_13384;
var G__13390 = chunk__13380_13385;
var G__13391 = count__13381_13386;
var G__13392 = (i__13382_13387 + (1));
seq__13379_13384 = G__13389;
chunk__13380_13385 = G__13390;
count__13381_13386 = G__13391;
i__13382_13387 = G__13392;
continue;
} else {
var temp__4126__auto___13393 = cljs.core.seq.call(null,seq__13379_13384);
if(temp__4126__auto___13393){
var seq__13379_13394__$1 = temp__4126__auto___13393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13379_13394__$1)){
var c__4409__auto___13395 = cljs.core.chunk_first.call(null,seq__13379_13394__$1);
var G__13396 = cljs.core.chunk_rest.call(null,seq__13379_13394__$1);
var G__13397 = c__4409__auto___13395;
var G__13398 = cljs.core.count.call(null,c__4409__auto___13395);
var G__13399 = (0);
seq__13379_13384 = G__13396;
chunk__13380_13385 = G__13397;
count__13381_13386 = G__13398;
i__13382_13387 = G__13399;
continue;
} else {
var node_13400 = cljs.core.first.call(null,seq__13379_13394__$1);
goog.dom.classes.set(node_13400,classes_13383__$1);

var G__13401 = cljs.core.next.call(null,seq__13379_13394__$1);
var G__13402 = null;
var G__13403 = (0);
var G__13404 = (0);
seq__13379_13384 = G__13401;
chunk__13380_13385 = G__13402;
count__13381_13386 = G__13403;
i__13382_13387 = G__13404;
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
var seq__13409_13413 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13410_13414 = null;
var count__13411_13415 = (0);
var i__13412_13416 = (0);
while(true){
if((i__13412_13416 < count__13411_13415)){
var node_13417 = cljs.core._nth.call(null,chunk__13410_13414,i__13412_13416);
goog.dom.setTextContent(node_13417,value);

var G__13418 = seq__13409_13413;
var G__13419 = chunk__13410_13414;
var G__13420 = count__13411_13415;
var G__13421 = (i__13412_13416 + (1));
seq__13409_13413 = G__13418;
chunk__13410_13414 = G__13419;
count__13411_13415 = G__13420;
i__13412_13416 = G__13421;
continue;
} else {
var temp__4126__auto___13422 = cljs.core.seq.call(null,seq__13409_13413);
if(temp__4126__auto___13422){
var seq__13409_13423__$1 = temp__4126__auto___13422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13409_13423__$1)){
var c__4409__auto___13424 = cljs.core.chunk_first.call(null,seq__13409_13423__$1);
var G__13425 = cljs.core.chunk_rest.call(null,seq__13409_13423__$1);
var G__13426 = c__4409__auto___13424;
var G__13427 = cljs.core.count.call(null,c__4409__auto___13424);
var G__13428 = (0);
seq__13409_13413 = G__13425;
chunk__13410_13414 = G__13426;
count__13411_13415 = G__13427;
i__13412_13416 = G__13428;
continue;
} else {
var node_13429 = cljs.core.first.call(null,seq__13409_13423__$1);
goog.dom.setTextContent(node_13429,value);

var G__13430 = cljs.core.next.call(null,seq__13409_13423__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13409_13413 = G__13430;
chunk__13410_13414 = G__13431;
count__13411_13415 = G__13432;
i__13412_13416 = G__13433;
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
var seq__13438_13442 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13439_13443 = null;
var count__13440_13444 = (0);
var i__13441_13445 = (0);
while(true){
if((i__13441_13445 < count__13440_13444)){
var node_13446 = cljs.core._nth.call(null,chunk__13439_13443,i__13441_13445);
goog.dom.forms.setValue(node_13446,value);

var G__13447 = seq__13438_13442;
var G__13448 = chunk__13439_13443;
var G__13449 = count__13440_13444;
var G__13450 = (i__13441_13445 + (1));
seq__13438_13442 = G__13447;
chunk__13439_13443 = G__13448;
count__13440_13444 = G__13449;
i__13441_13445 = G__13450;
continue;
} else {
var temp__4126__auto___13451 = cljs.core.seq.call(null,seq__13438_13442);
if(temp__4126__auto___13451){
var seq__13438_13452__$1 = temp__4126__auto___13451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13438_13452__$1)){
var c__4409__auto___13453 = cljs.core.chunk_first.call(null,seq__13438_13452__$1);
var G__13454 = cljs.core.chunk_rest.call(null,seq__13438_13452__$1);
var G__13455 = c__4409__auto___13453;
var G__13456 = cljs.core.count.call(null,c__4409__auto___13453);
var G__13457 = (0);
seq__13438_13442 = G__13454;
chunk__13439_13443 = G__13455;
count__13440_13444 = G__13456;
i__13441_13445 = G__13457;
continue;
} else {
var node_13458 = cljs.core.first.call(null,seq__13438_13452__$1);
goog.dom.forms.setValue(node_13458,value);

var G__13459 = cljs.core.next.call(null,seq__13438_13452__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__13438_13442 = G__13459;
chunk__13439_13443 = G__13460;
count__13440_13444 = G__13461;
i__13441_13445 = G__13462;
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
var value_13473 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13469_13474 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13470_13475 = null;
var count__13471_13476 = (0);
var i__13472_13477 = (0);
while(true){
if((i__13472_13477 < count__13471_13476)){
var node_13478 = cljs.core._nth.call(null,chunk__13470_13475,i__13472_13477);
node_13478.innerHTML = value_13473;

var G__13479 = seq__13469_13474;
var G__13480 = chunk__13470_13475;
var G__13481 = count__13471_13476;
var G__13482 = (i__13472_13477 + (1));
seq__13469_13474 = G__13479;
chunk__13470_13475 = G__13480;
count__13471_13476 = G__13481;
i__13472_13477 = G__13482;
continue;
} else {
var temp__4126__auto___13483 = cljs.core.seq.call(null,seq__13469_13474);
if(temp__4126__auto___13483){
var seq__13469_13484__$1 = temp__4126__auto___13483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13469_13484__$1)){
var c__4409__auto___13485 = cljs.core.chunk_first.call(null,seq__13469_13484__$1);
var G__13486 = cljs.core.chunk_rest.call(null,seq__13469_13484__$1);
var G__13487 = c__4409__auto___13485;
var G__13488 = cljs.core.count.call(null,c__4409__auto___13485);
var G__13489 = (0);
seq__13469_13474 = G__13486;
chunk__13470_13475 = G__13487;
count__13471_13476 = G__13488;
i__13472_13477 = G__13489;
continue;
} else {
var node_13490 = cljs.core.first.call(null,seq__13469_13484__$1);
node_13490.innerHTML = value_13473;

var G__13491 = cljs.core.next.call(null,seq__13469_13484__$1);
var G__13492 = null;
var G__13493 = (0);
var G__13494 = (0);
seq__13469_13474 = G__13491;
chunk__13470_13475 = G__13492;
count__13471_13476 = G__13493;
i__13472_13477 = G__13494;
continue;
}
} else {
}
}
break;
}
}catch (e13468){if((e13468 instanceof Error)){
var e_13495 = e13468;
domina.replace_children_BANG_.call(null,content,value_13473);
} else {
throw e13468;

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
var seq__13502_13506 = cljs.core.seq.call(null,children);
var chunk__13503_13507 = null;
var count__13504_13508 = (0);
var i__13505_13509 = (0);
while(true){
if((i__13505_13509 < count__13504_13508)){
var child_13510 = cljs.core._nth.call(null,chunk__13503_13507,i__13505_13509);
frag.appendChild(child_13510);

var G__13511 = seq__13502_13506;
var G__13512 = chunk__13503_13507;
var G__13513 = count__13504_13508;
var G__13514 = (i__13505_13509 + (1));
seq__13502_13506 = G__13511;
chunk__13503_13507 = G__13512;
count__13504_13508 = G__13513;
i__13505_13509 = G__13514;
continue;
} else {
var temp__4126__auto___13515 = cljs.core.seq.call(null,seq__13502_13506);
if(temp__4126__auto___13515){
var seq__13502_13516__$1 = temp__4126__auto___13515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13502_13516__$1)){
var c__4409__auto___13517 = cljs.core.chunk_first.call(null,seq__13502_13516__$1);
var G__13518 = cljs.core.chunk_rest.call(null,seq__13502_13516__$1);
var G__13519 = c__4409__auto___13517;
var G__13520 = cljs.core.count.call(null,c__4409__auto___13517);
var G__13521 = (0);
seq__13502_13506 = G__13518;
chunk__13503_13507 = G__13519;
count__13504_13508 = G__13520;
i__13505_13509 = G__13521;
continue;
} else {
var child_13522 = cljs.core.first.call(null,seq__13502_13516__$1);
frag.appendChild(child_13522);

var G__13523 = cljs.core.next.call(null,seq__13502_13516__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13502_13506 = G__13523;
chunk__13503_13507 = G__13524;
count__13504_13508 = G__13525;
i__13505_13509 = G__13526;
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
return (function (p1__13496_SHARP_,p2__13497_SHARP_){
return f.call(null,p1__13496_SHARP_,p2__13497_SHARP_);
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
if((function (){var G__13528 = list_thing;
if(G__13528){
var bit__4303__auto__ = (G__13528.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13528.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13528.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13528);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13528);
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
if((function (){var G__13529 = content;
if(G__13529){
var bit__4303__auto__ = (G__13529.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13529.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13529.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13529);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13529);
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
if((function (){var G__13530 = content;
if(G__13530){
var bit__4303__auto__ = (G__13530.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13530.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13530.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13530);
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