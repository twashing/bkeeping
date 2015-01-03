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
var opt_wrapper_20180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_20181 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_20182 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20182,opt_wrapper_20180,table_section_wrapper_20181,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20180,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20181,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20181,cell_wrapper_20182,table_section_wrapper_20181,table_section_wrapper_20181]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__12533__auto__ = div.firstChild;
if(cljs.core.truth_(and__12533__auto__)){
return div.firstChild.childNodes;
} else {
return and__12533__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__20187 = cljs.core.seq.call(null,tbody);
var chunk__20188 = null;
var count__20189 = (0);
var i__20190 = (0);
while(true){
if((i__20190 < count__20189)){
var child = cljs.core._nth.call(null,chunk__20188,i__20190);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20191 = seq__20187;
var G__20192 = chunk__20188;
var G__20193 = count__20189;
var G__20194 = (i__20190 + (1));
seq__20187 = G__20191;
chunk__20188 = G__20192;
count__20189 = G__20193;
i__20190 = G__20194;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20187);
if(temp__4126__auto__){
var seq__20187__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20187__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__20187__$1);
var G__20195 = cljs.core.chunk_rest.call(null,seq__20187__$1);
var G__20196 = c__13332__auto__;
var G__20197 = cljs.core.count.call(null,c__13332__auto__);
var G__20198 = (0);
seq__20187 = G__20195;
chunk__20188 = G__20196;
count__20189 = G__20197;
i__20190 = G__20198;
continue;
} else {
var child = cljs.core.first.call(null,seq__20187__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20199 = cljs.core.next.call(null,seq__20187__$1);
var G__20200 = null;
var G__20201 = (0);
var G__20202 = (0);
seq__20187 = G__20199;
chunk__20188 = G__20200;
count__20189 = G__20201;
i__20190 = G__20202;
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
var vec__20204 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__20204,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__20204,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__20204,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__20205 = wrapper.lastChild;
var G__20206 = (level - (1));
wrapper = G__20205;
level = G__20206;
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

if(cljs.core.truth_((function (){var and__12533__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__12533__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__12533__auto__;
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

domina.DomContent = (function (){var obj20208 = {};
return obj20208;
})();

domina.nodes = (function nodes(content){
if((function (){var and__12533__auto__ = content;
if(and__12533__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__12533__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__13189__auto__ = (((content == null))?null:content);
return (function (){var or__12545__auto__ = (domina.nodes[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (domina.nodes["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__12533__auto__ = nodeseq;
if(and__12533__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__12533__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__13189__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__12545__auto__ = (domina.single_node[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (domina.single_node["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
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
if(cljs.core.truth_((function (){var and__12533__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__12533__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__12533__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__20209){
var mesg = cljs.core.seq(arglist__20209);
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
log.cljs$lang$applyTo = (function (arglist__20210){
var mesg = cljs.core.seq(arglist__20210);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20211){
var contents = cljs.core.seq(arglist__20211);
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
return cljs.core.map.call(null,(function (p1__20212_SHARP_){
return p1__20212_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__20213_SHARP_,p2__20214_SHARP_){
return goog.dom.insertChildAt(p1__20213_SHARP_,p2__20214_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__20216_SHARP_,p2__20215_SHARP_){
return goog.dom.insertSiblingBefore(p2__20215_SHARP_,p1__20216_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20218_SHARP_,p2__20217_SHARP_){
return goog.dom.insertSiblingAfter(p2__20217_SHARP_,p1__20218_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20220_SHARP_,p2__20219_SHARP_){
return goog.dom.replaceNode(p2__20219_SHARP_,p1__20220_SHARP_);
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
var seq__20225_20229 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20226_20230 = null;
var count__20227_20231 = (0);
var i__20228_20232 = (0);
while(true){
if((i__20228_20232 < count__20227_20231)){
var n_20233 = cljs.core._nth.call(null,chunk__20226_20230,i__20228_20232);
goog.style.setStyle(n_20233,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20234 = seq__20225_20229;
var G__20235 = chunk__20226_20230;
var G__20236 = count__20227_20231;
var G__20237 = (i__20228_20232 + (1));
seq__20225_20229 = G__20234;
chunk__20226_20230 = G__20235;
count__20227_20231 = G__20236;
i__20228_20232 = G__20237;
continue;
} else {
var temp__4126__auto___20238 = cljs.core.seq.call(null,seq__20225_20229);
if(temp__4126__auto___20238){
var seq__20225_20239__$1 = temp__4126__auto___20238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20225_20239__$1)){
var c__13332__auto___20240 = cljs.core.chunk_first.call(null,seq__20225_20239__$1);
var G__20241 = cljs.core.chunk_rest.call(null,seq__20225_20239__$1);
var G__20242 = c__13332__auto___20240;
var G__20243 = cljs.core.count.call(null,c__13332__auto___20240);
var G__20244 = (0);
seq__20225_20229 = G__20241;
chunk__20226_20230 = G__20242;
count__20227_20231 = G__20243;
i__20228_20232 = G__20244;
continue;
} else {
var n_20245 = cljs.core.first.call(null,seq__20225_20239__$1);
goog.style.setStyle(n_20245,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20246 = cljs.core.next.call(null,seq__20225_20239__$1);
var G__20247 = null;
var G__20248 = (0);
var G__20249 = (0);
seq__20225_20229 = G__20246;
chunk__20226_20230 = G__20247;
count__20227_20231 = G__20248;
i__20228_20232 = G__20249;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20250){
var content = cljs.core.first(arglist__20250);
arglist__20250 = cljs.core.next(arglist__20250);
var name = cljs.core.first(arglist__20250);
var value = cljs.core.rest(arglist__20250);
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
var seq__20255_20259 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20256_20260 = null;
var count__20257_20261 = (0);
var i__20258_20262 = (0);
while(true){
if((i__20258_20262 < count__20257_20261)){
var n_20263 = cljs.core._nth.call(null,chunk__20256_20260,i__20258_20262);
n_20263.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20264 = seq__20255_20259;
var G__20265 = chunk__20256_20260;
var G__20266 = count__20257_20261;
var G__20267 = (i__20258_20262 + (1));
seq__20255_20259 = G__20264;
chunk__20256_20260 = G__20265;
count__20257_20261 = G__20266;
i__20258_20262 = G__20267;
continue;
} else {
var temp__4126__auto___20268 = cljs.core.seq.call(null,seq__20255_20259);
if(temp__4126__auto___20268){
var seq__20255_20269__$1 = temp__4126__auto___20268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20255_20269__$1)){
var c__13332__auto___20270 = cljs.core.chunk_first.call(null,seq__20255_20269__$1);
var G__20271 = cljs.core.chunk_rest.call(null,seq__20255_20269__$1);
var G__20272 = c__13332__auto___20270;
var G__20273 = cljs.core.count.call(null,c__13332__auto___20270);
var G__20274 = (0);
seq__20255_20259 = G__20271;
chunk__20256_20260 = G__20272;
count__20257_20261 = G__20273;
i__20258_20262 = G__20274;
continue;
} else {
var n_20275 = cljs.core.first.call(null,seq__20255_20269__$1);
n_20275.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20276 = cljs.core.next.call(null,seq__20255_20269__$1);
var G__20277 = null;
var G__20278 = (0);
var G__20279 = (0);
seq__20255_20259 = G__20276;
chunk__20256_20260 = G__20277;
count__20257_20261 = G__20278;
i__20258_20262 = G__20279;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20280){
var content = cljs.core.first(arglist__20280);
arglist__20280 = cljs.core.next(arglist__20280);
var name = cljs.core.first(arglist__20280);
var value = cljs.core.rest(arglist__20280);
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
var seq__20285_20289 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20286_20290 = null;
var count__20287_20291 = (0);
var i__20288_20292 = (0);
while(true){
if((i__20288_20292 < count__20287_20291)){
var n_20293 = cljs.core._nth.call(null,chunk__20286_20290,i__20288_20292);
n_20293.removeAttribute(cljs.core.name.call(null,name));

var G__20294 = seq__20285_20289;
var G__20295 = chunk__20286_20290;
var G__20296 = count__20287_20291;
var G__20297 = (i__20288_20292 + (1));
seq__20285_20289 = G__20294;
chunk__20286_20290 = G__20295;
count__20287_20291 = G__20296;
i__20288_20292 = G__20297;
continue;
} else {
var temp__4126__auto___20298 = cljs.core.seq.call(null,seq__20285_20289);
if(temp__4126__auto___20298){
var seq__20285_20299__$1 = temp__4126__auto___20298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20285_20299__$1)){
var c__13332__auto___20300 = cljs.core.chunk_first.call(null,seq__20285_20299__$1);
var G__20301 = cljs.core.chunk_rest.call(null,seq__20285_20299__$1);
var G__20302 = c__13332__auto___20300;
var G__20303 = cljs.core.count.call(null,c__13332__auto___20300);
var G__20304 = (0);
seq__20285_20289 = G__20301;
chunk__20286_20290 = G__20302;
count__20287_20291 = G__20303;
i__20288_20292 = G__20304;
continue;
} else {
var n_20305 = cljs.core.first.call(null,seq__20285_20299__$1);
n_20305.removeAttribute(cljs.core.name.call(null,name));

var G__20306 = cljs.core.next.call(null,seq__20285_20299__$1);
var G__20307 = null;
var G__20308 = (0);
var G__20309 = (0);
seq__20285_20289 = G__20306;
chunk__20286_20290 = G__20307;
count__20287_20291 = G__20308;
i__20288_20292 = G__20309;
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
var vec__20311 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__20311,(0),null);
var v = cljs.core.nth.call(null,vec__20311,(1),null);
if(cljs.core.truth_((function (){var and__12533__auto__ = k;
if(cljs.core.truth_(and__12533__auto__)){
return v;
} else {
return and__12533__auto__;
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
return (function (p1__20312_SHARP_){
var attr = attrs__$1.item(p1__20312_SHARP_);
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
var seq__20319_20325 = cljs.core.seq.call(null,styles);
var chunk__20320_20326 = null;
var count__20321_20327 = (0);
var i__20322_20328 = (0);
while(true){
if((i__20322_20328 < count__20321_20327)){
var vec__20323_20329 = cljs.core._nth.call(null,chunk__20320_20326,i__20322_20328);
var name_20330 = cljs.core.nth.call(null,vec__20323_20329,(0),null);
var value_20331 = cljs.core.nth.call(null,vec__20323_20329,(1),null);
domina.set_style_BANG_.call(null,content,name_20330,value_20331);

var G__20332 = seq__20319_20325;
var G__20333 = chunk__20320_20326;
var G__20334 = count__20321_20327;
var G__20335 = (i__20322_20328 + (1));
seq__20319_20325 = G__20332;
chunk__20320_20326 = G__20333;
count__20321_20327 = G__20334;
i__20322_20328 = G__20335;
continue;
} else {
var temp__4126__auto___20336 = cljs.core.seq.call(null,seq__20319_20325);
if(temp__4126__auto___20336){
var seq__20319_20337__$1 = temp__4126__auto___20336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20319_20337__$1)){
var c__13332__auto___20338 = cljs.core.chunk_first.call(null,seq__20319_20337__$1);
var G__20339 = cljs.core.chunk_rest.call(null,seq__20319_20337__$1);
var G__20340 = c__13332__auto___20338;
var G__20341 = cljs.core.count.call(null,c__13332__auto___20338);
var G__20342 = (0);
seq__20319_20325 = G__20339;
chunk__20320_20326 = G__20340;
count__20321_20327 = G__20341;
i__20322_20328 = G__20342;
continue;
} else {
var vec__20324_20343 = cljs.core.first.call(null,seq__20319_20337__$1);
var name_20344 = cljs.core.nth.call(null,vec__20324_20343,(0),null);
var value_20345 = cljs.core.nth.call(null,vec__20324_20343,(1),null);
domina.set_style_BANG_.call(null,content,name_20344,value_20345);

var G__20346 = cljs.core.next.call(null,seq__20319_20337__$1);
var G__20347 = null;
var G__20348 = (0);
var G__20349 = (0);
seq__20319_20325 = G__20346;
chunk__20320_20326 = G__20347;
count__20321_20327 = G__20348;
i__20322_20328 = G__20349;
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
var seq__20356_20362 = cljs.core.seq.call(null,attrs);
var chunk__20357_20363 = null;
var count__20358_20364 = (0);
var i__20359_20365 = (0);
while(true){
if((i__20359_20365 < count__20358_20364)){
var vec__20360_20366 = cljs.core._nth.call(null,chunk__20357_20363,i__20359_20365);
var name_20367 = cljs.core.nth.call(null,vec__20360_20366,(0),null);
var value_20368 = cljs.core.nth.call(null,vec__20360_20366,(1),null);
domina.set_attr_BANG_.call(null,content,name_20367,value_20368);

var G__20369 = seq__20356_20362;
var G__20370 = chunk__20357_20363;
var G__20371 = count__20358_20364;
var G__20372 = (i__20359_20365 + (1));
seq__20356_20362 = G__20369;
chunk__20357_20363 = G__20370;
count__20358_20364 = G__20371;
i__20359_20365 = G__20372;
continue;
} else {
var temp__4126__auto___20373 = cljs.core.seq.call(null,seq__20356_20362);
if(temp__4126__auto___20373){
var seq__20356_20374__$1 = temp__4126__auto___20373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20356_20374__$1)){
var c__13332__auto___20375 = cljs.core.chunk_first.call(null,seq__20356_20374__$1);
var G__20376 = cljs.core.chunk_rest.call(null,seq__20356_20374__$1);
var G__20377 = c__13332__auto___20375;
var G__20378 = cljs.core.count.call(null,c__13332__auto___20375);
var G__20379 = (0);
seq__20356_20362 = G__20376;
chunk__20357_20363 = G__20377;
count__20358_20364 = G__20378;
i__20359_20365 = G__20379;
continue;
} else {
var vec__20361_20380 = cljs.core.first.call(null,seq__20356_20374__$1);
var name_20381 = cljs.core.nth.call(null,vec__20361_20380,(0),null);
var value_20382 = cljs.core.nth.call(null,vec__20361_20380,(1),null);
domina.set_attr_BANG_.call(null,content,name_20381,value_20382);

var G__20383 = cljs.core.next.call(null,seq__20356_20374__$1);
var G__20384 = null;
var G__20385 = (0);
var G__20386 = (0);
seq__20356_20362 = G__20383;
chunk__20357_20363 = G__20384;
count__20358_20364 = G__20385;
i__20359_20365 = G__20386;
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
var seq__20391_20395 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20392_20396 = null;
var count__20393_20397 = (0);
var i__20394_20398 = (0);
while(true){
if((i__20394_20398 < count__20393_20397)){
var node_20399 = cljs.core._nth.call(null,chunk__20392_20396,i__20394_20398);
goog.dom.classes.add(node_20399,class$);

var G__20400 = seq__20391_20395;
var G__20401 = chunk__20392_20396;
var G__20402 = count__20393_20397;
var G__20403 = (i__20394_20398 + (1));
seq__20391_20395 = G__20400;
chunk__20392_20396 = G__20401;
count__20393_20397 = G__20402;
i__20394_20398 = G__20403;
continue;
} else {
var temp__4126__auto___20404 = cljs.core.seq.call(null,seq__20391_20395);
if(temp__4126__auto___20404){
var seq__20391_20405__$1 = temp__4126__auto___20404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20391_20405__$1)){
var c__13332__auto___20406 = cljs.core.chunk_first.call(null,seq__20391_20405__$1);
var G__20407 = cljs.core.chunk_rest.call(null,seq__20391_20405__$1);
var G__20408 = c__13332__auto___20406;
var G__20409 = cljs.core.count.call(null,c__13332__auto___20406);
var G__20410 = (0);
seq__20391_20395 = G__20407;
chunk__20392_20396 = G__20408;
count__20393_20397 = G__20409;
i__20394_20398 = G__20410;
continue;
} else {
var node_20411 = cljs.core.first.call(null,seq__20391_20405__$1);
goog.dom.classes.add(node_20411,class$);

var G__20412 = cljs.core.next.call(null,seq__20391_20405__$1);
var G__20413 = null;
var G__20414 = (0);
var G__20415 = (0);
seq__20391_20395 = G__20412;
chunk__20392_20396 = G__20413;
count__20393_20397 = G__20414;
i__20394_20398 = G__20415;
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
var seq__20420_20424 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20421_20425 = null;
var count__20422_20426 = (0);
var i__20423_20427 = (0);
while(true){
if((i__20423_20427 < count__20422_20426)){
var node_20428 = cljs.core._nth.call(null,chunk__20421_20425,i__20423_20427);
goog.dom.classes.remove(node_20428,class$);

var G__20429 = seq__20420_20424;
var G__20430 = chunk__20421_20425;
var G__20431 = count__20422_20426;
var G__20432 = (i__20423_20427 + (1));
seq__20420_20424 = G__20429;
chunk__20421_20425 = G__20430;
count__20422_20426 = G__20431;
i__20423_20427 = G__20432;
continue;
} else {
var temp__4126__auto___20433 = cljs.core.seq.call(null,seq__20420_20424);
if(temp__4126__auto___20433){
var seq__20420_20434__$1 = temp__4126__auto___20433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20420_20434__$1)){
var c__13332__auto___20435 = cljs.core.chunk_first.call(null,seq__20420_20434__$1);
var G__20436 = cljs.core.chunk_rest.call(null,seq__20420_20434__$1);
var G__20437 = c__13332__auto___20435;
var G__20438 = cljs.core.count.call(null,c__13332__auto___20435);
var G__20439 = (0);
seq__20420_20424 = G__20436;
chunk__20421_20425 = G__20437;
count__20422_20426 = G__20438;
i__20423_20427 = G__20439;
continue;
} else {
var node_20440 = cljs.core.first.call(null,seq__20420_20434__$1);
goog.dom.classes.remove(node_20440,class$);

var G__20441 = cljs.core.next.call(null,seq__20420_20434__$1);
var G__20442 = null;
var G__20443 = (0);
var G__20444 = (0);
seq__20420_20424 = G__20441;
chunk__20421_20425 = G__20442;
count__20422_20426 = G__20443;
i__20423_20427 = G__20444;
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
var seq__20449_20453 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20450_20454 = null;
var count__20451_20455 = (0);
var i__20452_20456 = (0);
while(true){
if((i__20452_20456 < count__20451_20455)){
var node_20457 = cljs.core._nth.call(null,chunk__20450_20454,i__20452_20456);
goog.dom.classes.toggle(node_20457,class$);

var G__20458 = seq__20449_20453;
var G__20459 = chunk__20450_20454;
var G__20460 = count__20451_20455;
var G__20461 = (i__20452_20456 + (1));
seq__20449_20453 = G__20458;
chunk__20450_20454 = G__20459;
count__20451_20455 = G__20460;
i__20452_20456 = G__20461;
continue;
} else {
var temp__4126__auto___20462 = cljs.core.seq.call(null,seq__20449_20453);
if(temp__4126__auto___20462){
var seq__20449_20463__$1 = temp__4126__auto___20462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20449_20463__$1)){
var c__13332__auto___20464 = cljs.core.chunk_first.call(null,seq__20449_20463__$1);
var G__20465 = cljs.core.chunk_rest.call(null,seq__20449_20463__$1);
var G__20466 = c__13332__auto___20464;
var G__20467 = cljs.core.count.call(null,c__13332__auto___20464);
var G__20468 = (0);
seq__20449_20453 = G__20465;
chunk__20450_20454 = G__20466;
count__20451_20455 = G__20467;
i__20452_20456 = G__20468;
continue;
} else {
var node_20469 = cljs.core.first.call(null,seq__20449_20463__$1);
goog.dom.classes.toggle(node_20469,class$);

var G__20470 = cljs.core.next.call(null,seq__20449_20463__$1);
var G__20471 = null;
var G__20472 = (0);
var G__20473 = (0);
seq__20449_20453 = G__20470;
chunk__20450_20454 = G__20471;
count__20451_20455 = G__20472;
i__20452_20456 = G__20473;
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
var classes_20482__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__20478_20483 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20479_20484 = null;
var count__20480_20485 = (0);
var i__20481_20486 = (0);
while(true){
if((i__20481_20486 < count__20480_20485)){
var node_20487 = cljs.core._nth.call(null,chunk__20479_20484,i__20481_20486);
goog.dom.classes.set(node_20487,classes_20482__$1);

var G__20488 = seq__20478_20483;
var G__20489 = chunk__20479_20484;
var G__20490 = count__20480_20485;
var G__20491 = (i__20481_20486 + (1));
seq__20478_20483 = G__20488;
chunk__20479_20484 = G__20489;
count__20480_20485 = G__20490;
i__20481_20486 = G__20491;
continue;
} else {
var temp__4126__auto___20492 = cljs.core.seq.call(null,seq__20478_20483);
if(temp__4126__auto___20492){
var seq__20478_20493__$1 = temp__4126__auto___20492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20478_20493__$1)){
var c__13332__auto___20494 = cljs.core.chunk_first.call(null,seq__20478_20493__$1);
var G__20495 = cljs.core.chunk_rest.call(null,seq__20478_20493__$1);
var G__20496 = c__13332__auto___20494;
var G__20497 = cljs.core.count.call(null,c__13332__auto___20494);
var G__20498 = (0);
seq__20478_20483 = G__20495;
chunk__20479_20484 = G__20496;
count__20480_20485 = G__20497;
i__20481_20486 = G__20498;
continue;
} else {
var node_20499 = cljs.core.first.call(null,seq__20478_20493__$1);
goog.dom.classes.set(node_20499,classes_20482__$1);

var G__20500 = cljs.core.next.call(null,seq__20478_20493__$1);
var G__20501 = null;
var G__20502 = (0);
var G__20503 = (0);
seq__20478_20483 = G__20500;
chunk__20479_20484 = G__20501;
count__20480_20485 = G__20502;
i__20481_20486 = G__20503;
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
var seq__20508_20512 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20509_20513 = null;
var count__20510_20514 = (0);
var i__20511_20515 = (0);
while(true){
if((i__20511_20515 < count__20510_20514)){
var node_20516 = cljs.core._nth.call(null,chunk__20509_20513,i__20511_20515);
goog.dom.setTextContent(node_20516,value);

var G__20517 = seq__20508_20512;
var G__20518 = chunk__20509_20513;
var G__20519 = count__20510_20514;
var G__20520 = (i__20511_20515 + (1));
seq__20508_20512 = G__20517;
chunk__20509_20513 = G__20518;
count__20510_20514 = G__20519;
i__20511_20515 = G__20520;
continue;
} else {
var temp__4126__auto___20521 = cljs.core.seq.call(null,seq__20508_20512);
if(temp__4126__auto___20521){
var seq__20508_20522__$1 = temp__4126__auto___20521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20508_20522__$1)){
var c__13332__auto___20523 = cljs.core.chunk_first.call(null,seq__20508_20522__$1);
var G__20524 = cljs.core.chunk_rest.call(null,seq__20508_20522__$1);
var G__20525 = c__13332__auto___20523;
var G__20526 = cljs.core.count.call(null,c__13332__auto___20523);
var G__20527 = (0);
seq__20508_20512 = G__20524;
chunk__20509_20513 = G__20525;
count__20510_20514 = G__20526;
i__20511_20515 = G__20527;
continue;
} else {
var node_20528 = cljs.core.first.call(null,seq__20508_20522__$1);
goog.dom.setTextContent(node_20528,value);

var G__20529 = cljs.core.next.call(null,seq__20508_20522__$1);
var G__20530 = null;
var G__20531 = (0);
var G__20532 = (0);
seq__20508_20512 = G__20529;
chunk__20509_20513 = G__20530;
count__20510_20514 = G__20531;
i__20511_20515 = G__20532;
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
var seq__20537_20541 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20538_20542 = null;
var count__20539_20543 = (0);
var i__20540_20544 = (0);
while(true){
if((i__20540_20544 < count__20539_20543)){
var node_20545 = cljs.core._nth.call(null,chunk__20538_20542,i__20540_20544);
goog.dom.forms.setValue(node_20545,value);

var G__20546 = seq__20537_20541;
var G__20547 = chunk__20538_20542;
var G__20548 = count__20539_20543;
var G__20549 = (i__20540_20544 + (1));
seq__20537_20541 = G__20546;
chunk__20538_20542 = G__20547;
count__20539_20543 = G__20548;
i__20540_20544 = G__20549;
continue;
} else {
var temp__4126__auto___20550 = cljs.core.seq.call(null,seq__20537_20541);
if(temp__4126__auto___20550){
var seq__20537_20551__$1 = temp__4126__auto___20550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20537_20551__$1)){
var c__13332__auto___20552 = cljs.core.chunk_first.call(null,seq__20537_20551__$1);
var G__20553 = cljs.core.chunk_rest.call(null,seq__20537_20551__$1);
var G__20554 = c__13332__auto___20552;
var G__20555 = cljs.core.count.call(null,c__13332__auto___20552);
var G__20556 = (0);
seq__20537_20541 = G__20553;
chunk__20538_20542 = G__20554;
count__20539_20543 = G__20555;
i__20540_20544 = G__20556;
continue;
} else {
var node_20557 = cljs.core.first.call(null,seq__20537_20551__$1);
goog.dom.forms.setValue(node_20557,value);

var G__20558 = cljs.core.next.call(null,seq__20537_20551__$1);
var G__20559 = null;
var G__20560 = (0);
var G__20561 = (0);
seq__20537_20541 = G__20558;
chunk__20538_20542 = G__20559;
count__20539_20543 = G__20560;
i__20540_20544 = G__20561;
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
if(cljs.core.truth_((function (){var and__12533__auto__ = allows_inner_html_QMARK_;
if(and__12533__auto__){
var and__12533__auto____$1 = (function (){var or__12545__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__12533__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__12533__auto____$1;
}
} else {
return and__12533__auto__;
}
})())){
var value_20572 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__20568_20573 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20569_20574 = null;
var count__20570_20575 = (0);
var i__20571_20576 = (0);
while(true){
if((i__20571_20576 < count__20570_20575)){
var node_20577 = cljs.core._nth.call(null,chunk__20569_20574,i__20571_20576);
node_20577.innerHTML = value_20572;

var G__20578 = seq__20568_20573;
var G__20579 = chunk__20569_20574;
var G__20580 = count__20570_20575;
var G__20581 = (i__20571_20576 + (1));
seq__20568_20573 = G__20578;
chunk__20569_20574 = G__20579;
count__20570_20575 = G__20580;
i__20571_20576 = G__20581;
continue;
} else {
var temp__4126__auto___20582 = cljs.core.seq.call(null,seq__20568_20573);
if(temp__4126__auto___20582){
var seq__20568_20583__$1 = temp__4126__auto___20582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20568_20583__$1)){
var c__13332__auto___20584 = cljs.core.chunk_first.call(null,seq__20568_20583__$1);
var G__20585 = cljs.core.chunk_rest.call(null,seq__20568_20583__$1);
var G__20586 = c__13332__auto___20584;
var G__20587 = cljs.core.count.call(null,c__13332__auto___20584);
var G__20588 = (0);
seq__20568_20573 = G__20585;
chunk__20569_20574 = G__20586;
count__20570_20575 = G__20587;
i__20571_20576 = G__20588;
continue;
} else {
var node_20589 = cljs.core.first.call(null,seq__20568_20583__$1);
node_20589.innerHTML = value_20572;

var G__20590 = cljs.core.next.call(null,seq__20568_20583__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20568_20573 = G__20590;
chunk__20569_20574 = G__20591;
count__20570_20575 = G__20592;
i__20571_20576 = G__20593;
continue;
}
} else {
}
}
break;
}
}catch (e20567){if((e20567 instanceof Error)){
var e_20594 = e20567;
domina.replace_children_BANG_.call(null,content,value_20572);
} else {
throw e20567;

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
if(cljs.core.truth_((function (){var and__12533__auto__ = bubble;
if(cljs.core.truth_(and__12533__auto__)){
return (value == null);
} else {
return and__12533__auto__;
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
var m = (function (){var or__12545__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
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
var seq__20601_20605 = cljs.core.seq.call(null,children);
var chunk__20602_20606 = null;
var count__20603_20607 = (0);
var i__20604_20608 = (0);
while(true){
if((i__20604_20608 < count__20603_20607)){
var child_20609 = cljs.core._nth.call(null,chunk__20602_20606,i__20604_20608);
frag.appendChild(child_20609);

var G__20610 = seq__20601_20605;
var G__20611 = chunk__20602_20606;
var G__20612 = count__20603_20607;
var G__20613 = (i__20604_20608 + (1));
seq__20601_20605 = G__20610;
chunk__20602_20606 = G__20611;
count__20603_20607 = G__20612;
i__20604_20608 = G__20613;
continue;
} else {
var temp__4126__auto___20614 = cljs.core.seq.call(null,seq__20601_20605);
if(temp__4126__auto___20614){
var seq__20601_20615__$1 = temp__4126__auto___20614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20601_20615__$1)){
var c__13332__auto___20616 = cljs.core.chunk_first.call(null,seq__20601_20615__$1);
var G__20617 = cljs.core.chunk_rest.call(null,seq__20601_20615__$1);
var G__20618 = c__13332__auto___20616;
var G__20619 = cljs.core.count.call(null,c__13332__auto___20616);
var G__20620 = (0);
seq__20601_20605 = G__20617;
chunk__20602_20606 = G__20618;
count__20603_20607 = G__20619;
i__20604_20608 = G__20620;
continue;
} else {
var child_20621 = cljs.core.first.call(null,seq__20601_20615__$1);
frag.appendChild(child_20621);

var G__20622 = cljs.core.next.call(null,seq__20601_20615__$1);
var G__20623 = null;
var G__20624 = (0);
var G__20625 = (0);
seq__20601_20605 = G__20622;
chunk__20602_20606 = G__20623;
count__20603_20607 = G__20624;
i__20604_20608 = G__20625;
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
return (function (p1__20595_SHARP_,p2__20596_SHARP_){
return f.call(null,p1__20595_SHARP_,p2__20596_SHARP_);
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
var and__12533__auto__ = obj;
if(cljs.core.truth_(and__12533__auto__)){
var and__12533__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__12533__auto____$1){
return obj.length;
} else {
return and__12533__auto____$1;
}
} else {
return and__12533__auto__;
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
if((function (){var G__20627 = list_thing;
if(G__20627){
var bit__13226__auto__ = (G__20627.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13226__auto__) || (G__20627.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20627.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20627);
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
if((function (){var G__20628 = content;
if(G__20628){
var bit__13226__auto__ = (G__20628.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13226__auto__) || (G__20628.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20628.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20628);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20628);
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
if((function (){var G__20629 = content;
if(G__20629){
var bit__13226__auto__ = (G__20629.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13226__auto__) || (G__20629.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20629.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20629);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20629);
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