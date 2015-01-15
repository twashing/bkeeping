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
var opt_wrapper_13121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_13122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_13123 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13123,opt_wrapper_13121,table_section_wrapper_13122,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13121,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13122,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13122,cell_wrapper_13123,table_section_wrapper_13122,table_section_wrapper_13122]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3610__auto__ = div.firstChild;
if(cljs.core.truth_(and__3610__auto__)){
return div.firstChild.childNodes;
} else {
return and__3610__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__13128 = cljs.core.seq.call(null,tbody);
var chunk__13129 = null;
var count__13130 = (0);
var i__13131 = (0);
while(true){
if((i__13131 < count__13130)){
var child = cljs.core._nth.call(null,chunk__13129,i__13131);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13132 = seq__13128;
var G__13133 = chunk__13129;
var G__13134 = count__13130;
var G__13135 = (i__13131 + (1));
seq__13128 = G__13132;
chunk__13129 = G__13133;
count__13130 = G__13134;
i__13131 = G__13135;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13128);
if(temp__4126__auto__){
var seq__13128__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13128__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13128__$1);
var G__13136 = cljs.core.chunk_rest.call(null,seq__13128__$1);
var G__13137 = c__4409__auto__;
var G__13138 = cljs.core.count.call(null,c__4409__auto__);
var G__13139 = (0);
seq__13128 = G__13136;
chunk__13129 = G__13137;
count__13130 = G__13138;
i__13131 = G__13139;
continue;
} else {
var child = cljs.core.first.call(null,seq__13128__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13140 = cljs.core.next.call(null,seq__13128__$1);
var G__13141 = null;
var G__13142 = (0);
var G__13143 = (0);
seq__13128 = G__13140;
chunk__13129 = G__13141;
count__13130 = G__13142;
i__13131 = G__13143;
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
var vec__13145 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13145,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__13145,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__13145,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__13146 = wrapper.lastChild;
var G__13147 = (level - (1));
wrapper = G__13146;
level = G__13147;
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

domina.DomContent = (function (){var obj13149 = {};
return obj13149;
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
log_debug.cljs$lang$applyTo = (function (arglist__13150){
var mesg = cljs.core.seq(arglist__13150);
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
log.cljs$lang$applyTo = (function (arglist__13151){
var mesg = cljs.core.seq(arglist__13151);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13152){
var contents = cljs.core.seq(arglist__13152);
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
return cljs.core.map.call(null,(function (p1__13153_SHARP_){
return p1__13153_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__13154_SHARP_,p2__13155_SHARP_){
return goog.dom.insertChildAt(p1__13154_SHARP_,p2__13155_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__13157_SHARP_,p2__13156_SHARP_){
return goog.dom.insertSiblingBefore(p2__13156_SHARP_,p1__13157_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13159_SHARP_,p2__13158_SHARP_){
return goog.dom.insertSiblingAfter(p2__13158_SHARP_,p1__13159_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13161_SHARP_,p2__13160_SHARP_){
return goog.dom.replaceNode(p2__13160_SHARP_,p1__13161_SHARP_);
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
var seq__13166_13170 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13167_13171 = null;
var count__13168_13172 = (0);
var i__13169_13173 = (0);
while(true){
if((i__13169_13173 < count__13168_13172)){
var n_13174 = cljs.core._nth.call(null,chunk__13167_13171,i__13169_13173);
goog.style.setStyle(n_13174,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13175 = seq__13166_13170;
var G__13176 = chunk__13167_13171;
var G__13177 = count__13168_13172;
var G__13178 = (i__13169_13173 + (1));
seq__13166_13170 = G__13175;
chunk__13167_13171 = G__13176;
count__13168_13172 = G__13177;
i__13169_13173 = G__13178;
continue;
} else {
var temp__4126__auto___13179 = cljs.core.seq.call(null,seq__13166_13170);
if(temp__4126__auto___13179){
var seq__13166_13180__$1 = temp__4126__auto___13179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13166_13180__$1)){
var c__4409__auto___13181 = cljs.core.chunk_first.call(null,seq__13166_13180__$1);
var G__13182 = cljs.core.chunk_rest.call(null,seq__13166_13180__$1);
var G__13183 = c__4409__auto___13181;
var G__13184 = cljs.core.count.call(null,c__4409__auto___13181);
var G__13185 = (0);
seq__13166_13170 = G__13182;
chunk__13167_13171 = G__13183;
count__13168_13172 = G__13184;
i__13169_13173 = G__13185;
continue;
} else {
var n_13186 = cljs.core.first.call(null,seq__13166_13180__$1);
goog.style.setStyle(n_13186,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13187 = cljs.core.next.call(null,seq__13166_13180__$1);
var G__13188 = null;
var G__13189 = (0);
var G__13190 = (0);
seq__13166_13170 = G__13187;
chunk__13167_13171 = G__13188;
count__13168_13172 = G__13189;
i__13169_13173 = G__13190;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13191){
var content = cljs.core.first(arglist__13191);
arglist__13191 = cljs.core.next(arglist__13191);
var name = cljs.core.first(arglist__13191);
var value = cljs.core.rest(arglist__13191);
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
var seq__13196_13200 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13197_13201 = null;
var count__13198_13202 = (0);
var i__13199_13203 = (0);
while(true){
if((i__13199_13203 < count__13198_13202)){
var n_13204 = cljs.core._nth.call(null,chunk__13197_13201,i__13199_13203);
n_13204.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13205 = seq__13196_13200;
var G__13206 = chunk__13197_13201;
var G__13207 = count__13198_13202;
var G__13208 = (i__13199_13203 + (1));
seq__13196_13200 = G__13205;
chunk__13197_13201 = G__13206;
count__13198_13202 = G__13207;
i__13199_13203 = G__13208;
continue;
} else {
var temp__4126__auto___13209 = cljs.core.seq.call(null,seq__13196_13200);
if(temp__4126__auto___13209){
var seq__13196_13210__$1 = temp__4126__auto___13209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13196_13210__$1)){
var c__4409__auto___13211 = cljs.core.chunk_first.call(null,seq__13196_13210__$1);
var G__13212 = cljs.core.chunk_rest.call(null,seq__13196_13210__$1);
var G__13213 = c__4409__auto___13211;
var G__13214 = cljs.core.count.call(null,c__4409__auto___13211);
var G__13215 = (0);
seq__13196_13200 = G__13212;
chunk__13197_13201 = G__13213;
count__13198_13202 = G__13214;
i__13199_13203 = G__13215;
continue;
} else {
var n_13216 = cljs.core.first.call(null,seq__13196_13210__$1);
n_13216.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13217 = cljs.core.next.call(null,seq__13196_13210__$1);
var G__13218 = null;
var G__13219 = (0);
var G__13220 = (0);
seq__13196_13200 = G__13217;
chunk__13197_13201 = G__13218;
count__13198_13202 = G__13219;
i__13199_13203 = G__13220;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13221){
var content = cljs.core.first(arglist__13221);
arglist__13221 = cljs.core.next(arglist__13221);
var name = cljs.core.first(arglist__13221);
var value = cljs.core.rest(arglist__13221);
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
var seq__13226_13230 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13227_13231 = null;
var count__13228_13232 = (0);
var i__13229_13233 = (0);
while(true){
if((i__13229_13233 < count__13228_13232)){
var n_13234 = cljs.core._nth.call(null,chunk__13227_13231,i__13229_13233);
n_13234.removeAttribute(cljs.core.name.call(null,name));

var G__13235 = seq__13226_13230;
var G__13236 = chunk__13227_13231;
var G__13237 = count__13228_13232;
var G__13238 = (i__13229_13233 + (1));
seq__13226_13230 = G__13235;
chunk__13227_13231 = G__13236;
count__13228_13232 = G__13237;
i__13229_13233 = G__13238;
continue;
} else {
var temp__4126__auto___13239 = cljs.core.seq.call(null,seq__13226_13230);
if(temp__4126__auto___13239){
var seq__13226_13240__$1 = temp__4126__auto___13239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13226_13240__$1)){
var c__4409__auto___13241 = cljs.core.chunk_first.call(null,seq__13226_13240__$1);
var G__13242 = cljs.core.chunk_rest.call(null,seq__13226_13240__$1);
var G__13243 = c__4409__auto___13241;
var G__13244 = cljs.core.count.call(null,c__4409__auto___13241);
var G__13245 = (0);
seq__13226_13230 = G__13242;
chunk__13227_13231 = G__13243;
count__13228_13232 = G__13244;
i__13229_13233 = G__13245;
continue;
} else {
var n_13246 = cljs.core.first.call(null,seq__13226_13240__$1);
n_13246.removeAttribute(cljs.core.name.call(null,name));

var G__13247 = cljs.core.next.call(null,seq__13226_13240__$1);
var G__13248 = null;
var G__13249 = (0);
var G__13250 = (0);
seq__13226_13230 = G__13247;
chunk__13227_13231 = G__13248;
count__13228_13232 = G__13249;
i__13229_13233 = G__13250;
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
var vec__13252 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13252,(0),null);
var v = cljs.core.nth.call(null,vec__13252,(1),null);
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
return (function (p1__13253_SHARP_){
var attr = attrs__$1.item(p1__13253_SHARP_);
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
var seq__13260_13266 = cljs.core.seq.call(null,styles);
var chunk__13261_13267 = null;
var count__13262_13268 = (0);
var i__13263_13269 = (0);
while(true){
if((i__13263_13269 < count__13262_13268)){
var vec__13264_13270 = cljs.core._nth.call(null,chunk__13261_13267,i__13263_13269);
var name_13271 = cljs.core.nth.call(null,vec__13264_13270,(0),null);
var value_13272 = cljs.core.nth.call(null,vec__13264_13270,(1),null);
domina.set_style_BANG_.call(null,content,name_13271,value_13272);

var G__13273 = seq__13260_13266;
var G__13274 = chunk__13261_13267;
var G__13275 = count__13262_13268;
var G__13276 = (i__13263_13269 + (1));
seq__13260_13266 = G__13273;
chunk__13261_13267 = G__13274;
count__13262_13268 = G__13275;
i__13263_13269 = G__13276;
continue;
} else {
var temp__4126__auto___13277 = cljs.core.seq.call(null,seq__13260_13266);
if(temp__4126__auto___13277){
var seq__13260_13278__$1 = temp__4126__auto___13277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13260_13278__$1)){
var c__4409__auto___13279 = cljs.core.chunk_first.call(null,seq__13260_13278__$1);
var G__13280 = cljs.core.chunk_rest.call(null,seq__13260_13278__$1);
var G__13281 = c__4409__auto___13279;
var G__13282 = cljs.core.count.call(null,c__4409__auto___13279);
var G__13283 = (0);
seq__13260_13266 = G__13280;
chunk__13261_13267 = G__13281;
count__13262_13268 = G__13282;
i__13263_13269 = G__13283;
continue;
} else {
var vec__13265_13284 = cljs.core.first.call(null,seq__13260_13278__$1);
var name_13285 = cljs.core.nth.call(null,vec__13265_13284,(0),null);
var value_13286 = cljs.core.nth.call(null,vec__13265_13284,(1),null);
domina.set_style_BANG_.call(null,content,name_13285,value_13286);

var G__13287 = cljs.core.next.call(null,seq__13260_13278__$1);
var G__13288 = null;
var G__13289 = (0);
var G__13290 = (0);
seq__13260_13266 = G__13287;
chunk__13261_13267 = G__13288;
count__13262_13268 = G__13289;
i__13263_13269 = G__13290;
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
var seq__13297_13303 = cljs.core.seq.call(null,attrs);
var chunk__13298_13304 = null;
var count__13299_13305 = (0);
var i__13300_13306 = (0);
while(true){
if((i__13300_13306 < count__13299_13305)){
var vec__13301_13307 = cljs.core._nth.call(null,chunk__13298_13304,i__13300_13306);
var name_13308 = cljs.core.nth.call(null,vec__13301_13307,(0),null);
var value_13309 = cljs.core.nth.call(null,vec__13301_13307,(1),null);
domina.set_attr_BANG_.call(null,content,name_13308,value_13309);

var G__13310 = seq__13297_13303;
var G__13311 = chunk__13298_13304;
var G__13312 = count__13299_13305;
var G__13313 = (i__13300_13306 + (1));
seq__13297_13303 = G__13310;
chunk__13298_13304 = G__13311;
count__13299_13305 = G__13312;
i__13300_13306 = G__13313;
continue;
} else {
var temp__4126__auto___13314 = cljs.core.seq.call(null,seq__13297_13303);
if(temp__4126__auto___13314){
var seq__13297_13315__$1 = temp__4126__auto___13314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13297_13315__$1)){
var c__4409__auto___13316 = cljs.core.chunk_first.call(null,seq__13297_13315__$1);
var G__13317 = cljs.core.chunk_rest.call(null,seq__13297_13315__$1);
var G__13318 = c__4409__auto___13316;
var G__13319 = cljs.core.count.call(null,c__4409__auto___13316);
var G__13320 = (0);
seq__13297_13303 = G__13317;
chunk__13298_13304 = G__13318;
count__13299_13305 = G__13319;
i__13300_13306 = G__13320;
continue;
} else {
var vec__13302_13321 = cljs.core.first.call(null,seq__13297_13315__$1);
var name_13322 = cljs.core.nth.call(null,vec__13302_13321,(0),null);
var value_13323 = cljs.core.nth.call(null,vec__13302_13321,(1),null);
domina.set_attr_BANG_.call(null,content,name_13322,value_13323);

var G__13324 = cljs.core.next.call(null,seq__13297_13315__$1);
var G__13325 = null;
var G__13326 = (0);
var G__13327 = (0);
seq__13297_13303 = G__13324;
chunk__13298_13304 = G__13325;
count__13299_13305 = G__13326;
i__13300_13306 = G__13327;
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
var seq__13332_13336 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13333_13337 = null;
var count__13334_13338 = (0);
var i__13335_13339 = (0);
while(true){
if((i__13335_13339 < count__13334_13338)){
var node_13340 = cljs.core._nth.call(null,chunk__13333_13337,i__13335_13339);
goog.dom.classes.add(node_13340,class$);

var G__13341 = seq__13332_13336;
var G__13342 = chunk__13333_13337;
var G__13343 = count__13334_13338;
var G__13344 = (i__13335_13339 + (1));
seq__13332_13336 = G__13341;
chunk__13333_13337 = G__13342;
count__13334_13338 = G__13343;
i__13335_13339 = G__13344;
continue;
} else {
var temp__4126__auto___13345 = cljs.core.seq.call(null,seq__13332_13336);
if(temp__4126__auto___13345){
var seq__13332_13346__$1 = temp__4126__auto___13345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13332_13346__$1)){
var c__4409__auto___13347 = cljs.core.chunk_first.call(null,seq__13332_13346__$1);
var G__13348 = cljs.core.chunk_rest.call(null,seq__13332_13346__$1);
var G__13349 = c__4409__auto___13347;
var G__13350 = cljs.core.count.call(null,c__4409__auto___13347);
var G__13351 = (0);
seq__13332_13336 = G__13348;
chunk__13333_13337 = G__13349;
count__13334_13338 = G__13350;
i__13335_13339 = G__13351;
continue;
} else {
var node_13352 = cljs.core.first.call(null,seq__13332_13346__$1);
goog.dom.classes.add(node_13352,class$);

var G__13353 = cljs.core.next.call(null,seq__13332_13346__$1);
var G__13354 = null;
var G__13355 = (0);
var G__13356 = (0);
seq__13332_13336 = G__13353;
chunk__13333_13337 = G__13354;
count__13334_13338 = G__13355;
i__13335_13339 = G__13356;
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
var seq__13361_13365 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13362_13366 = null;
var count__13363_13367 = (0);
var i__13364_13368 = (0);
while(true){
if((i__13364_13368 < count__13363_13367)){
var node_13369 = cljs.core._nth.call(null,chunk__13362_13366,i__13364_13368);
goog.dom.classes.remove(node_13369,class$);

var G__13370 = seq__13361_13365;
var G__13371 = chunk__13362_13366;
var G__13372 = count__13363_13367;
var G__13373 = (i__13364_13368 + (1));
seq__13361_13365 = G__13370;
chunk__13362_13366 = G__13371;
count__13363_13367 = G__13372;
i__13364_13368 = G__13373;
continue;
} else {
var temp__4126__auto___13374 = cljs.core.seq.call(null,seq__13361_13365);
if(temp__4126__auto___13374){
var seq__13361_13375__$1 = temp__4126__auto___13374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13361_13375__$1)){
var c__4409__auto___13376 = cljs.core.chunk_first.call(null,seq__13361_13375__$1);
var G__13377 = cljs.core.chunk_rest.call(null,seq__13361_13375__$1);
var G__13378 = c__4409__auto___13376;
var G__13379 = cljs.core.count.call(null,c__4409__auto___13376);
var G__13380 = (0);
seq__13361_13365 = G__13377;
chunk__13362_13366 = G__13378;
count__13363_13367 = G__13379;
i__13364_13368 = G__13380;
continue;
} else {
var node_13381 = cljs.core.first.call(null,seq__13361_13375__$1);
goog.dom.classes.remove(node_13381,class$);

var G__13382 = cljs.core.next.call(null,seq__13361_13375__$1);
var G__13383 = null;
var G__13384 = (0);
var G__13385 = (0);
seq__13361_13365 = G__13382;
chunk__13362_13366 = G__13383;
count__13363_13367 = G__13384;
i__13364_13368 = G__13385;
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
var seq__13390_13394 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13391_13395 = null;
var count__13392_13396 = (0);
var i__13393_13397 = (0);
while(true){
if((i__13393_13397 < count__13392_13396)){
var node_13398 = cljs.core._nth.call(null,chunk__13391_13395,i__13393_13397);
goog.dom.classes.toggle(node_13398,class$);

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
goog.dom.classes.toggle(node_13410,class$);

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
var classes_13423__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13419_13424 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13420_13425 = null;
var count__13421_13426 = (0);
var i__13422_13427 = (0);
while(true){
if((i__13422_13427 < count__13421_13426)){
var node_13428 = cljs.core._nth.call(null,chunk__13420_13425,i__13422_13427);
goog.dom.classes.set(node_13428,classes_13423__$1);

var G__13429 = seq__13419_13424;
var G__13430 = chunk__13420_13425;
var G__13431 = count__13421_13426;
var G__13432 = (i__13422_13427 + (1));
seq__13419_13424 = G__13429;
chunk__13420_13425 = G__13430;
count__13421_13426 = G__13431;
i__13422_13427 = G__13432;
continue;
} else {
var temp__4126__auto___13433 = cljs.core.seq.call(null,seq__13419_13424);
if(temp__4126__auto___13433){
var seq__13419_13434__$1 = temp__4126__auto___13433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13419_13434__$1)){
var c__4409__auto___13435 = cljs.core.chunk_first.call(null,seq__13419_13434__$1);
var G__13436 = cljs.core.chunk_rest.call(null,seq__13419_13434__$1);
var G__13437 = c__4409__auto___13435;
var G__13438 = cljs.core.count.call(null,c__4409__auto___13435);
var G__13439 = (0);
seq__13419_13424 = G__13436;
chunk__13420_13425 = G__13437;
count__13421_13426 = G__13438;
i__13422_13427 = G__13439;
continue;
} else {
var node_13440 = cljs.core.first.call(null,seq__13419_13434__$1);
goog.dom.classes.set(node_13440,classes_13423__$1);

var G__13441 = cljs.core.next.call(null,seq__13419_13434__$1);
var G__13442 = null;
var G__13443 = (0);
var G__13444 = (0);
seq__13419_13424 = G__13441;
chunk__13420_13425 = G__13442;
count__13421_13426 = G__13443;
i__13422_13427 = G__13444;
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
var seq__13449_13453 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13450_13454 = null;
var count__13451_13455 = (0);
var i__13452_13456 = (0);
while(true){
if((i__13452_13456 < count__13451_13455)){
var node_13457 = cljs.core._nth.call(null,chunk__13450_13454,i__13452_13456);
goog.dom.setTextContent(node_13457,value);

var G__13458 = seq__13449_13453;
var G__13459 = chunk__13450_13454;
var G__13460 = count__13451_13455;
var G__13461 = (i__13452_13456 + (1));
seq__13449_13453 = G__13458;
chunk__13450_13454 = G__13459;
count__13451_13455 = G__13460;
i__13452_13456 = G__13461;
continue;
} else {
var temp__4126__auto___13462 = cljs.core.seq.call(null,seq__13449_13453);
if(temp__4126__auto___13462){
var seq__13449_13463__$1 = temp__4126__auto___13462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13449_13463__$1)){
var c__4409__auto___13464 = cljs.core.chunk_first.call(null,seq__13449_13463__$1);
var G__13465 = cljs.core.chunk_rest.call(null,seq__13449_13463__$1);
var G__13466 = c__4409__auto___13464;
var G__13467 = cljs.core.count.call(null,c__4409__auto___13464);
var G__13468 = (0);
seq__13449_13453 = G__13465;
chunk__13450_13454 = G__13466;
count__13451_13455 = G__13467;
i__13452_13456 = G__13468;
continue;
} else {
var node_13469 = cljs.core.first.call(null,seq__13449_13463__$1);
goog.dom.setTextContent(node_13469,value);

var G__13470 = cljs.core.next.call(null,seq__13449_13463__$1);
var G__13471 = null;
var G__13472 = (0);
var G__13473 = (0);
seq__13449_13453 = G__13470;
chunk__13450_13454 = G__13471;
count__13451_13455 = G__13472;
i__13452_13456 = G__13473;
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
var seq__13478_13482 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13479_13483 = null;
var count__13480_13484 = (0);
var i__13481_13485 = (0);
while(true){
if((i__13481_13485 < count__13480_13484)){
var node_13486 = cljs.core._nth.call(null,chunk__13479_13483,i__13481_13485);
goog.dom.forms.setValue(node_13486,value);

var G__13487 = seq__13478_13482;
var G__13488 = chunk__13479_13483;
var G__13489 = count__13480_13484;
var G__13490 = (i__13481_13485 + (1));
seq__13478_13482 = G__13487;
chunk__13479_13483 = G__13488;
count__13480_13484 = G__13489;
i__13481_13485 = G__13490;
continue;
} else {
var temp__4126__auto___13491 = cljs.core.seq.call(null,seq__13478_13482);
if(temp__4126__auto___13491){
var seq__13478_13492__$1 = temp__4126__auto___13491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13478_13492__$1)){
var c__4409__auto___13493 = cljs.core.chunk_first.call(null,seq__13478_13492__$1);
var G__13494 = cljs.core.chunk_rest.call(null,seq__13478_13492__$1);
var G__13495 = c__4409__auto___13493;
var G__13496 = cljs.core.count.call(null,c__4409__auto___13493);
var G__13497 = (0);
seq__13478_13482 = G__13494;
chunk__13479_13483 = G__13495;
count__13480_13484 = G__13496;
i__13481_13485 = G__13497;
continue;
} else {
var node_13498 = cljs.core.first.call(null,seq__13478_13492__$1);
goog.dom.forms.setValue(node_13498,value);

var G__13499 = cljs.core.next.call(null,seq__13478_13492__$1);
var G__13500 = null;
var G__13501 = (0);
var G__13502 = (0);
seq__13478_13482 = G__13499;
chunk__13479_13483 = G__13500;
count__13480_13484 = G__13501;
i__13481_13485 = G__13502;
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
var value_13513 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13509_13514 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13510_13515 = null;
var count__13511_13516 = (0);
var i__13512_13517 = (0);
while(true){
if((i__13512_13517 < count__13511_13516)){
var node_13518 = cljs.core._nth.call(null,chunk__13510_13515,i__13512_13517);
node_13518.innerHTML = value_13513;

var G__13519 = seq__13509_13514;
var G__13520 = chunk__13510_13515;
var G__13521 = count__13511_13516;
var G__13522 = (i__13512_13517 + (1));
seq__13509_13514 = G__13519;
chunk__13510_13515 = G__13520;
count__13511_13516 = G__13521;
i__13512_13517 = G__13522;
continue;
} else {
var temp__4126__auto___13523 = cljs.core.seq.call(null,seq__13509_13514);
if(temp__4126__auto___13523){
var seq__13509_13524__$1 = temp__4126__auto___13523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13509_13524__$1)){
var c__4409__auto___13525 = cljs.core.chunk_first.call(null,seq__13509_13524__$1);
var G__13526 = cljs.core.chunk_rest.call(null,seq__13509_13524__$1);
var G__13527 = c__4409__auto___13525;
var G__13528 = cljs.core.count.call(null,c__4409__auto___13525);
var G__13529 = (0);
seq__13509_13514 = G__13526;
chunk__13510_13515 = G__13527;
count__13511_13516 = G__13528;
i__13512_13517 = G__13529;
continue;
} else {
var node_13530 = cljs.core.first.call(null,seq__13509_13524__$1);
node_13530.innerHTML = value_13513;

var G__13531 = cljs.core.next.call(null,seq__13509_13524__$1);
var G__13532 = null;
var G__13533 = (0);
var G__13534 = (0);
seq__13509_13514 = G__13531;
chunk__13510_13515 = G__13532;
count__13511_13516 = G__13533;
i__13512_13517 = G__13534;
continue;
}
} else {
}
}
break;
}
}catch (e13508){if((e13508 instanceof Error)){
var e_13535 = e13508;
domina.replace_children_BANG_.call(null,content,value_13513);
} else {
throw e13508;

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
var seq__13542_13546 = cljs.core.seq.call(null,children);
var chunk__13543_13547 = null;
var count__13544_13548 = (0);
var i__13545_13549 = (0);
while(true){
if((i__13545_13549 < count__13544_13548)){
var child_13550 = cljs.core._nth.call(null,chunk__13543_13547,i__13545_13549);
frag.appendChild(child_13550);

var G__13551 = seq__13542_13546;
var G__13552 = chunk__13543_13547;
var G__13553 = count__13544_13548;
var G__13554 = (i__13545_13549 + (1));
seq__13542_13546 = G__13551;
chunk__13543_13547 = G__13552;
count__13544_13548 = G__13553;
i__13545_13549 = G__13554;
continue;
} else {
var temp__4126__auto___13555 = cljs.core.seq.call(null,seq__13542_13546);
if(temp__4126__auto___13555){
var seq__13542_13556__$1 = temp__4126__auto___13555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13542_13556__$1)){
var c__4409__auto___13557 = cljs.core.chunk_first.call(null,seq__13542_13556__$1);
var G__13558 = cljs.core.chunk_rest.call(null,seq__13542_13556__$1);
var G__13559 = c__4409__auto___13557;
var G__13560 = cljs.core.count.call(null,c__4409__auto___13557);
var G__13561 = (0);
seq__13542_13546 = G__13558;
chunk__13543_13547 = G__13559;
count__13544_13548 = G__13560;
i__13545_13549 = G__13561;
continue;
} else {
var child_13562 = cljs.core.first.call(null,seq__13542_13556__$1);
frag.appendChild(child_13562);

var G__13563 = cljs.core.next.call(null,seq__13542_13556__$1);
var G__13564 = null;
var G__13565 = (0);
var G__13566 = (0);
seq__13542_13546 = G__13563;
chunk__13543_13547 = G__13564;
count__13544_13548 = G__13565;
i__13545_13549 = G__13566;
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
return (function (p1__13536_SHARP_,p2__13537_SHARP_){
return f.call(null,p1__13536_SHARP_,p2__13537_SHARP_);
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
if((function (){var G__13568 = list_thing;
if(G__13568){
var bit__4303__auto__ = (G__13568.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13568.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13568.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13568);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13568);
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
if((function (){var G__13569 = content;
if(G__13569){
var bit__4303__auto__ = (G__13569.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13569.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13569.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13569);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13569);
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
if((function (){var G__13570 = content;
if(G__13570){
var bit__4303__auto__ = (G__13570.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4303__auto__) || (G__13570.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13570.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13570);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13570);
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