// Compiled by ClojureScript 0.0-2505
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');







enfocus.core.ISelector = (function (){var obj19582 = {};
return obj19582;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__12533__auto__ = this$;
if(and__12533__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__12533__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__13189__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12545__auto__ = (enfocus.core.select[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (enfocus.core.select["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__12533__auto__ = this$;
if(and__12533__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__12533__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__13189__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12545__auto__ = (enfocus.core.select[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (enfocus.core.select["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__12533__auto__ = this$;
if(and__12533__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__12533__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__13189__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12545__auto__ = (enfocus.core.select[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (enfocus.core.select["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;


enfocus.core.ITransform = (function (){var obj19584 = {};
return obj19584;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__12533__auto__ = this$;
if(and__12533__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__12533__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__13189__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12545__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__12533__auto__ = this$;
if(and__12533__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__12533__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__13189__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12545__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__13189__auto__)]);
if(or__12545__auto__){
return or__12545__auto__;
} else {
var or__12545__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__12545__auto____$1){
return or__12545__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;

enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__12533__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__12533__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__12533__auto__;
}
})())){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__19585_SHARP_){
if(typeof p1__19585_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__19585_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__19585_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__19592_19598 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__19593_19599 = null;
var count__19594_19600 = (0);
var i__19595_19601 = (0);
while(true){
if((i__19595_19601 < count__19594_19600)){
var vec__19596_19602 = cljs.core._nth.call(null,chunk__19593_19599,i__19595_19601);
var attr_19603 = cljs.core.nth.call(null,vec__19596_19602,(0),null);
var value_19604 = cljs.core.nth.call(null,vec__19596_19602,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_19603),value_19604);

var G__19605 = seq__19592_19598;
var G__19606 = chunk__19593_19599;
var G__19607 = count__19594_19600;
var G__19608 = (i__19595_19601 + (1));
seq__19592_19598 = G__19605;
chunk__19593_19599 = G__19606;
count__19594_19600 = G__19607;
i__19595_19601 = G__19608;
continue;
} else {
var temp__4126__auto___19609 = cljs.core.seq.call(null,seq__19592_19598);
if(temp__4126__auto___19609){
var seq__19592_19610__$1 = temp__4126__auto___19609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19592_19610__$1)){
var c__13332__auto___19611 = cljs.core.chunk_first.call(null,seq__19592_19610__$1);
var G__19612 = cljs.core.chunk_rest.call(null,seq__19592_19610__$1);
var G__19613 = c__13332__auto___19611;
var G__19614 = cljs.core.count.call(null,c__13332__auto___19611);
var G__19615 = (0);
seq__19592_19598 = G__19612;
chunk__19593_19599 = G__19613;
count__19594_19600 = G__19614;
i__19595_19601 = G__19615;
continue;
} else {
var vec__19597_19616 = cljs.core.first.call(null,seq__19592_19610__$1);
var attr_19617 = cljs.core.nth.call(null,vec__19597_19616,(0),null);
var value_19618 = cljs.core.nth.call(null,vec__19597_19616,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_19617),value_19618);

var G__19619 = cljs.core.next.call(null,seq__19592_19610__$1);
var G__19620 = null;
var G__19621 = (0);
var G__19622 = (0);
seq__19592_19598 = G__19619;
chunk__19593_19599 = G__19620;
count__19594_19600 = G__19621;
i__19595_19601 = G__19622;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var seq__19627 = cljs.core.seq.call(null,values);
var chunk__19628 = null;
var count__19629 = (0);
var i__19630 = (0);
while(true){
if((i__19630 < count__19629)){
var attr = cljs.core._nth.call(null,chunk__19628,i__19630);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__19631 = seq__19627;
var G__19632 = chunk__19628;
var G__19633 = count__19629;
var G__19634 = (i__19630 + (1));
seq__19627 = G__19631;
chunk__19628 = G__19632;
count__19629 = G__19633;
i__19630 = G__19634;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19627);
if(temp__4126__auto__){
var seq__19627__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19627__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19627__$1);
var G__19635 = cljs.core.chunk_rest.call(null,seq__19627__$1);
var G__19636 = c__13332__auto__;
var G__19637 = cljs.core.count.call(null,c__13332__auto__);
var G__19638 = (0);
seq__19627 = G__19635;
chunk__19628 = G__19636;
count__19629 = G__19637;
i__19630 = G__19638;
continue;
} else {
var attr = cljs.core.first.call(null,seq__19627__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__19639 = cljs.core.next.call(null,seq__19627__$1);
var G__19640 = null;
var G__19641 = (0);
var G__19642 = (0);
seq__19627 = G__19639;
chunk__19628 = G__19640;
count__19629 = G__19641;
i__19630 = G__19642;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){
if((step < (0))){
return Math.floor.call(null,step);
} else {
return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__19649_19655 = cljs.core.seq.call(null,ats);
var chunk__19650_19656 = null;
var count__19651_19657 = (0);
var i__19652_19658 = (0);
while(true){
if((i__19652_19658 < count__19651_19657)){
var vec__19653_19659 = cljs.core._nth.call(null,chunk__19650_19656,i__19652_19658);
var k_19660 = cljs.core.nth.call(null,vec__19653_19659,(0),null);
var v_19661 = cljs.core.nth.call(null,vec__19653_19659,(1),null);
add_map_attrs.call(null,elem,k_19660,v_19661);

var G__19662 = seq__19649_19655;
var G__19663 = chunk__19650_19656;
var G__19664 = count__19651_19657;
var G__19665 = (i__19652_19658 + (1));
seq__19649_19655 = G__19662;
chunk__19650_19656 = G__19663;
count__19651_19657 = G__19664;
i__19652_19658 = G__19665;
continue;
} else {
var temp__4126__auto___19666 = cljs.core.seq.call(null,seq__19649_19655);
if(temp__4126__auto___19666){
var seq__19649_19667__$1 = temp__4126__auto___19666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19649_19667__$1)){
var c__13332__auto___19668 = cljs.core.chunk_first.call(null,seq__19649_19667__$1);
var G__19669 = cljs.core.chunk_rest.call(null,seq__19649_19667__$1);
var G__19670 = c__13332__auto___19668;
var G__19671 = cljs.core.count.call(null,c__13332__auto___19668);
var G__19672 = (0);
seq__19649_19655 = G__19669;
chunk__19650_19656 = G__19670;
count__19651_19657 = G__19671;
i__19652_19658 = G__19672;
continue;
} else {
var vec__19654_19673 = cljs.core.first.call(null,seq__19649_19667__$1);
var k_19674 = cljs.core.nth.call(null,vec__19654_19673,(0),null);
var v_19675 = cljs.core.nth.call(null,vec__19654_19673,(1),null);
add_map_attrs.call(null,elem,k_19674,v_19675);

var G__19676 = cljs.core.next.call(null,seq__19649_19667__$1);
var G__19677 = null;
var G__19678 = (0);
var G__19679 = (0);
seq__19649_19655 = G__19676;
chunk__19650_19656 = G__19677;
count__19651_19657 = G__19678;
i__19652_19658 = G__19679;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__19684_19688 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__19685_19689 = null;
var count__19686_19690 = (0);
var i__19687_19691 = (0);
while(true){
if((i__19687_19691 < count__19686_19690)){
var node_19692 = cljs.core._nth.call(null,chunk__19685_19689,i__19687_19691);
goog.dom.appendChild(div,node_19692);

var G__19693 = seq__19684_19688;
var G__19694 = chunk__19685_19689;
var G__19695 = count__19686_19690;
var G__19696 = (i__19687_19691 + (1));
seq__19684_19688 = G__19693;
chunk__19685_19689 = G__19694;
count__19686_19690 = G__19695;
i__19687_19691 = G__19696;
continue;
} else {
var temp__4126__auto___19697 = cljs.core.seq.call(null,seq__19684_19688);
if(temp__4126__auto___19697){
var seq__19684_19698__$1 = temp__4126__auto___19697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19684_19698__$1)){
var c__13332__auto___19699 = cljs.core.chunk_first.call(null,seq__19684_19698__$1);
var G__19700 = cljs.core.chunk_rest.call(null,seq__19684_19698__$1);
var G__19701 = c__13332__auto___19699;
var G__19702 = cljs.core.count.call(null,c__13332__auto___19699);
var G__19703 = (0);
seq__19684_19688 = G__19700;
chunk__19685_19689 = G__19701;
count__19686_19690 = G__19702;
i__19687_19691 = G__19703;
continue;
} else {
var node_19704 = cljs.core.first.call(null,seq__19684_19698__$1);
goog.dom.appendChild(div,node_19704);

var G__19705 = cljs.core.next.call(null,seq__19684_19698__$1);
var G__19706 = null;
var G__19707 = (0);
var G__19708 = (0);
seq__19684_19688 = G__19705;
chunk__19685_19689 = G__19706;
count__19686_19690 = G__19707;
i__19687_19691 = G__19708;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){
return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re))
)], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__19709_SHARP_){
var id = p1__19709_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__19709_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__19711 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__19711,(0),null);
var txt = cljs.core.nth.call(null,vec__19711,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__19716_19720 = cljs.core.seq.call(null,dfa);
var chunk__19717_19721 = null;
var count__19718_19722 = (0);
var i__19719_19723 = (0);
while(true){
if((i__19719_19723 < count__19718_19722)){
var df_19724 = cljs.core._nth.call(null,chunk__19717_19721,i__19719_19723);
goog.dom.append(frag,df_19724);

var G__19725 = seq__19716_19720;
var G__19726 = chunk__19717_19721;
var G__19727 = count__19718_19722;
var G__19728 = (i__19719_19723 + (1));
seq__19716_19720 = G__19725;
chunk__19717_19721 = G__19726;
count__19718_19722 = G__19727;
i__19719_19723 = G__19728;
continue;
} else {
var temp__4126__auto___19729 = cljs.core.seq.call(null,seq__19716_19720);
if(temp__4126__auto___19729){
var seq__19716_19730__$1 = temp__4126__auto___19729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19716_19730__$1)){
var c__13332__auto___19731 = cljs.core.chunk_first.call(null,seq__19716_19730__$1);
var G__19732 = cljs.core.chunk_rest.call(null,seq__19716_19730__$1);
var G__19733 = c__13332__auto___19731;
var G__19734 = cljs.core.count.call(null,c__13332__auto___19731);
var G__19735 = (0);
seq__19716_19720 = G__19732;
chunk__19717_19721 = G__19733;
count__19718_19722 = G__19734;
i__19719_19723 = G__19735;
continue;
} else {
var df_19736 = cljs.core.first.call(null,seq__19716_19730__$1);
goog.dom.append(frag,df_19736);

var G__19737 = cljs.core.next.call(null,seq__19716_19730__$1);
var G__19738 = null;
var G__19739 = (0);
var G__19740 = (0);
seq__19716_19720 = G__19737;
chunk__19717_19721 = G__19738;
count__19718_19722 = G__19739;
i__19719_19723 = G__19740;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__19743 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__19743,(0),null);
var tdom = cljs.core.nth.call(null,vec__19743,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__19743,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__19741_SHARP_){
return p1__19741_SHARP_.outerHTML;
});})(vec__19743,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){
return extr_multi_node.call(null,func,null);
});
var extr_multi_node__2 = (function (func,filt){
var trans = (function trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t19748 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19748 = (function (trans,filt,func,extr_multi_node,meta19749){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta19749 = meta19749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19748.prototype.call = ((function (trans){
return (function() {
var G__19752 = null;
var G__19752__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19752__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19752 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19752__2.call(this,self__,nodes);
case 3:
return G__19752__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19752.cljs$core$IFn$_invoke$arity$2 = G__19752__2;
G__19752.cljs$core$IFn$_invoke$arity$3 = G__19752__3;
return G__19752;
})()
;})(trans))
;

enfocus.core.t19748.prototype.apply = ((function (trans){
return (function (self__,args19751){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19751)));
});})(trans))
;

enfocus.core.t19748.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19748.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19748.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19748.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19748.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19750){
var self__ = this;
var _19750__$1 = this;
return self__.meta19749;
});})(trans))
;

enfocus.core.t19748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19750,meta19749__$1){
var self__ = this;
var _19750__$1 = this;
return (new enfocus.core.t19748(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta19749__$1));
});})(trans))
;

enfocus.core.t19748.cljs$lang$type = true;

enfocus.core.t19748.cljs$lang$ctorStr = "enfocus.core/t19748";

enfocus.core.t19748.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"enfocus.core/t19748");
});})(trans))
;

enfocus.core.__GT_t19748 = ((function (trans){
return (function __GT_t19748(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta19749){
return (new enfocus.core.t19748(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta19749));
});})(trans))
;

}

return (new enfocus.core.t19748(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
extr_multi_node = function(func,filt){
switch(arguments.length){
case 1:
return extr_multi_node__1.call(this,func);
case 2:
return extr_multi_node__2.call(this,func,filt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extr_multi_node.cljs$core$IFn$_invoke$arity$1 = extr_multi_node__1;
extr_multi_node.cljs$core$IFn$_invoke$arity$2 = extr_multi_node__2;
return extr_multi_node;
})()
;
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t19762 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19762 = (function (trans,func,multi_node_chain,meta19763){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta19763 = meta19763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19762.prototype.call = ((function (trans){
return (function() {
var G__19770 = null;
var G__19770__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19770__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19770 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19770__2.call(this,self__,nodes);
case 3:
return G__19770__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19770.cljs$core$IFn$_invoke$arity$2 = G__19770__2;
G__19770.cljs$core$IFn$_invoke$arity$3 = G__19770__3;
return G__19770;
})()
;})(trans))
;

enfocus.core.t19762.prototype.apply = ((function (trans){
return (function (self__,args19765){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19765)));
});})(trans))
;

enfocus.core.t19762.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19762.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19762.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19762.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19762.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19764){
var self__ = this;
var _19764__$1 = this;
return self__.meta19763;
});})(trans))
;

enfocus.core.t19762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19764,meta19763__$1){
var self__ = this;
var _19764__$1 = this;
return (new enfocus.core.t19762(self__.trans,self__.func,self__.multi_node_chain,meta19763__$1));
});})(trans))
;

enfocus.core.t19762.cljs$lang$type = true;

enfocus.core.t19762.cljs$lang$ctorStr = "enfocus.core/t19762";

enfocus.core.t19762.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"enfocus.core/t19762");
});})(trans))
;

enfocus.core.__GT_t19762 = ((function (trans){
return (function __GT_t19762(trans__$1,func__$1,multi_node_chain__$1,meta19763){
return (new enfocus.core.t19762(trans__$1,func__$1,multi_node_chain__$1,meta19763));
});})(trans))
;

}

return (new enfocus.core.t19762(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__19753_SHARP_){
return domina.nodes.call(null,p1__19753_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t19766 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19766 = (function (trans,func,values,multi_node_chain,meta19767){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta19767 = meta19767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19766.prototype.call = ((function (trans){
return (function() {
var G__19771 = null;
var G__19771__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19771__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19771 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19771__2.call(this,self__,nodes);
case 3:
return G__19771__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19771.cljs$core$IFn$_invoke$arity$2 = G__19771__2;
G__19771.cljs$core$IFn$_invoke$arity$3 = G__19771__3;
return G__19771;
})()
;})(trans))
;

enfocus.core.t19766.prototype.apply = ((function (trans){
return (function (self__,args19769){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19769)));
});})(trans))
;

enfocus.core.t19766.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19766.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19766.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19766.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19766.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19768){
var self__ = this;
var _19768__$1 = this;
return self__.meta19767;
});})(trans))
;

enfocus.core.t19766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19768,meta19767__$1){
var self__ = this;
var _19768__$1 = this;
return (new enfocus.core.t19766(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta19767__$1));
});})(trans))
;

enfocus.core.t19766.cljs$lang$type = true;

enfocus.core.t19766.cljs$lang$ctorStr = "enfocus.core/t19766";

enfocus.core.t19766.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"enfocus.core/t19766");
});})(trans))
;

enfocus.core.__GT_t19766 = ((function (trans){
return (function __GT_t19766(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19767){
return (new enfocus.core.t19766(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19767));
});})(trans))
;

}

return (new enfocus.core.t19766(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19772_SHARP_,p2__19773_SHARP_){
domina.destroy_children_BANG_.call(null,p1__19772_SHARP_);

return domina.append_BANG_.call(null,p1__19772_SHARP_,p2__19773_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__19774){
var values = cljs.core.seq(arglist__19774);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__19775_SHARP_){
return domina.set_html_BANG_.call(null,p1__19775_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__19776_SHARP_){
var seq__19783 = cljs.core.seq.call(null,pairs);
var chunk__19784 = null;
var count__19785 = (0);
var i__19786 = (0);
while(true){
if((i__19786 < count__19785)){
var vec__19787 = cljs.core._nth.call(null,chunk__19784,i__19786);
var name = cljs.core.nth.call(null,vec__19787,(0),null);
var value = cljs.core.nth.call(null,vec__19787,(1),null);
domina.set_attr_BANG_.call(null,p1__19776_SHARP_,name,value);

var G__19789 = seq__19783;
var G__19790 = chunk__19784;
var G__19791 = count__19785;
var G__19792 = (i__19786 + (1));
seq__19783 = G__19789;
chunk__19784 = G__19790;
count__19785 = G__19791;
i__19786 = G__19792;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19783);
if(temp__4126__auto__){
var seq__19783__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19783__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19783__$1);
var G__19793 = cljs.core.chunk_rest.call(null,seq__19783__$1);
var G__19794 = c__13332__auto__;
var G__19795 = cljs.core.count.call(null,c__13332__auto__);
var G__19796 = (0);
seq__19783 = G__19793;
chunk__19784 = G__19794;
count__19785 = G__19795;
i__19786 = G__19796;
continue;
} else {
var vec__19788 = cljs.core.first.call(null,seq__19783__$1);
var name = cljs.core.nth.call(null,vec__19788,(0),null);
var value = cljs.core.nth.call(null,vec__19788,(1),null);
domina.set_attr_BANG_.call(null,p1__19776_SHARP_,name,value);

var G__19797 = cljs.core.next.call(null,seq__19783__$1);
var G__19798 = null;
var G__19799 = (0);
var G__19800 = (0);
seq__19783 = G__19797;
chunk__19784 = G__19798;
count__19785 = G__19799;
i__19786 = G__19800;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__19801){
var values = cljs.core.seq(arglist__19801);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__19802_SHARP_){
var seq__19807 = cljs.core.seq.call(null,values);
var chunk__19808 = null;
var count__19809 = (0);
var i__19810 = (0);
while(true){
if((i__19810 < count__19809)){
var name = cljs.core._nth.call(null,chunk__19808,i__19810);
domina.remove_attr_BANG_.call(null,p1__19802_SHARP_,name);

var G__19811 = seq__19807;
var G__19812 = chunk__19808;
var G__19813 = count__19809;
var G__19814 = (i__19810 + (1));
seq__19807 = G__19811;
chunk__19808 = G__19812;
count__19809 = G__19813;
i__19810 = G__19814;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19807);
if(temp__4126__auto__){
var seq__19807__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19807__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19807__$1);
var G__19815 = cljs.core.chunk_rest.call(null,seq__19807__$1);
var G__19816 = c__13332__auto__;
var G__19817 = cljs.core.count.call(null,c__13332__auto__);
var G__19818 = (0);
seq__19807 = G__19815;
chunk__19808 = G__19816;
count__19809 = G__19817;
i__19810 = G__19818;
continue;
} else {
var name = cljs.core.first.call(null,seq__19807__$1);
domina.remove_attr_BANG_.call(null,p1__19802_SHARP_,name);

var G__19819 = cljs.core.next.call(null,seq__19807__$1);
var G__19820 = null;
var G__19821 = (0);
var G__19822 = (0);
seq__19807 = G__19819;
chunk__19808 = G__19820;
count__19809 = G__19821;
i__19810 = G__19822;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__19823){
var values = cljs.core.seq(arglist__19823);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__19826){
var vec__19827 = p__19826;
var n = cljs.core.nth.call(null,vec__19827,(0),null);
var v = cljs.core.nth.call(null,vec__19827,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__19828){
var forms = cljs.core.seq(arglist__19828);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__19829_SHARP_){
var seq__19834 = cljs.core.seq.call(null,values);
var chunk__19835 = null;
var count__19836 = (0);
var i__19837 = (0);
while(true){
if((i__19837 < count__19836)){
var val = cljs.core._nth.call(null,chunk__19835,i__19837);
domina.add_class_BANG_.call(null,p1__19829_SHARP_,val);

var G__19838 = seq__19834;
var G__19839 = chunk__19835;
var G__19840 = count__19836;
var G__19841 = (i__19837 + (1));
seq__19834 = G__19838;
chunk__19835 = G__19839;
count__19836 = G__19840;
i__19837 = G__19841;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19834);
if(temp__4126__auto__){
var seq__19834__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19834__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19834__$1);
var G__19842 = cljs.core.chunk_rest.call(null,seq__19834__$1);
var G__19843 = c__13332__auto__;
var G__19844 = cljs.core.count.call(null,c__13332__auto__);
var G__19845 = (0);
seq__19834 = G__19842;
chunk__19835 = G__19843;
count__19836 = G__19844;
i__19837 = G__19845;
continue;
} else {
var val = cljs.core.first.call(null,seq__19834__$1);
domina.add_class_BANG_.call(null,p1__19829_SHARP_,val);

var G__19846 = cljs.core.next.call(null,seq__19834__$1);
var G__19847 = null;
var G__19848 = (0);
var G__19849 = (0);
seq__19834 = G__19846;
chunk__19835 = G__19847;
count__19836 = G__19848;
i__19837 = G__19849;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__19850){
var values = cljs.core.seq(arglist__19850);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__19851_SHARP_){
var seq__19856 = cljs.core.seq.call(null,values);
var chunk__19857 = null;
var count__19858 = (0);
var i__19859 = (0);
while(true){
if((i__19859 < count__19858)){
var val = cljs.core._nth.call(null,chunk__19857,i__19859);
domina.remove_class_BANG_.call(null,p1__19851_SHARP_,val);

var G__19860 = seq__19856;
var G__19861 = chunk__19857;
var G__19862 = count__19858;
var G__19863 = (i__19859 + (1));
seq__19856 = G__19860;
chunk__19857 = G__19861;
count__19858 = G__19862;
i__19859 = G__19863;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19856);
if(temp__4126__auto__){
var seq__19856__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19856__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19856__$1);
var G__19864 = cljs.core.chunk_rest.call(null,seq__19856__$1);
var G__19865 = c__13332__auto__;
var G__19866 = cljs.core.count.call(null,c__13332__auto__);
var G__19867 = (0);
seq__19856 = G__19864;
chunk__19857 = G__19865;
count__19858 = G__19866;
i__19859 = G__19867;
continue;
} else {
var val = cljs.core.first.call(null,seq__19856__$1);
domina.remove_class_BANG_.call(null,p1__19851_SHARP_,val);

var G__19868 = cljs.core.next.call(null,seq__19856__$1);
var G__19869 = null;
var G__19870 = (0);
var G__19871 = (0);
seq__19856 = G__19868;
chunk__19857 = G__19869;
count__19858 = G__19870;
i__19859 = G__19871;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__19872){
var values = cljs.core.seq(arglist__19872);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__19873_SHARP_){
return domina.set_classes_BANG_.call(null,p1__19873_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__19874){
var values = cljs.core.seq(arglist__19874);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){

return (function (pnod){
var seq__19879 = cljs.core.seq.call(null,forms);
var chunk__19880 = null;
var count__19881 = (0);
var i__19882 = (0);
while(true){
if((i__19882 < count__19881)){
var fun = cljs.core._nth.call(null,chunk__19880,i__19882);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__19883 = seq__19879;
var G__19884 = chunk__19880;
var G__19885 = count__19881;
var G__19886 = (i__19882 + (1));
seq__19879 = G__19883;
chunk__19880 = G__19884;
count__19881 = G__19885;
i__19882 = G__19886;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19879);
if(temp__4126__auto__){
var seq__19879__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19879__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19879__$1);
var G__19887 = cljs.core.chunk_rest.call(null,seq__19879__$1);
var G__19888 = c__13332__auto__;
var G__19889 = cljs.core.count.call(null,c__13332__auto__);
var G__19890 = (0);
seq__19879 = G__19887;
chunk__19880 = G__19888;
count__19881 = G__19889;
i__19882 = G__19890;
continue;
} else {
var fun = cljs.core.first.call(null,seq__19879__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__19891 = cljs.core.next.call(null,seq__19879__$1);
var G__19892 = null;
var G__19893 = (0);
var G__19894 = (0);
seq__19879 = G__19891;
chunk__19880 = G__19892;
count__19881 = G__19893;
i__19882 = G__19894;
continue;
}
} else {
return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;
if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__19895){
var forms = cljs.core.seq(arglist__19895);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19896_SHARP_,p2__19897_SHARP_){
return domina.append_BANG_.call(null,p1__19896_SHARP_,p2__19897_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__19898){
var values = cljs.core.seq(arglist__19898);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19899_SHARP_,p2__19900_SHARP_){
return domina.prepend_BANG_.call(null,p1__19899_SHARP_,p2__19900_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__19901){
var values = cljs.core.seq(arglist__19901);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19902_SHARP_,p2__19903_SHARP_){
return domina.insert_before_BANG_.call(null,p1__19902_SHARP_,p2__19903_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__19904){
var values = cljs.core.seq(arglist__19904);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19905_SHARP_,p2__19906_SHARP_){
return domina.insert_after_BANG_.call(null,p1__19905_SHARP_,p2__19906_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__19907){
var values = cljs.core.seq(arglist__19907);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19908_SHARP_,p2__19909_SHARP_){
return domina.swap_content_BANG_.call(null,p1__19908_SHARP_,p2__19909_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__19910){
var values = cljs.core.seq(arglist__19910);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__19911_SHARP_){
return domina.detach_BANG_.call(null,p1__19911_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__19912_SHARP_){
var seq__19919 = cljs.core.seq.call(null,pairs);
var chunk__19920 = null;
var count__19921 = (0);
var i__19922 = (0);
while(true){
if((i__19922 < count__19921)){
var vec__19923 = cljs.core._nth.call(null,chunk__19920,i__19922);
var name = cljs.core.nth.call(null,vec__19923,(0),null);
var value = cljs.core.nth.call(null,vec__19923,(1),null);
domina.set_style_BANG_.call(null,p1__19912_SHARP_,name,value);

var G__19925 = seq__19919;
var G__19926 = chunk__19920;
var G__19927 = count__19921;
var G__19928 = (i__19922 + (1));
seq__19919 = G__19925;
chunk__19920 = G__19926;
count__19921 = G__19927;
i__19922 = G__19928;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19919);
if(temp__4126__auto__){
var seq__19919__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19919__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19919__$1);
var G__19929 = cljs.core.chunk_rest.call(null,seq__19919__$1);
var G__19930 = c__13332__auto__;
var G__19931 = cljs.core.count.call(null,c__13332__auto__);
var G__19932 = (0);
seq__19919 = G__19929;
chunk__19920 = G__19930;
count__19921 = G__19931;
i__19922 = G__19932;
continue;
} else {
var vec__19924 = cljs.core.first.call(null,seq__19919__$1);
var name = cljs.core.nth.call(null,vec__19924,(0),null);
var value = cljs.core.nth.call(null,vec__19924,(1),null);
domina.set_style_BANG_.call(null,p1__19912_SHARP_,name,value);

var G__19933 = cljs.core.next.call(null,seq__19919__$1);
var G__19934 = null;
var G__19935 = (0);
var G__19936 = (0);
seq__19919 = G__19933;
chunk__19920 = G__19934;
count__19921 = G__19935;
i__19922 = G__19936;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_style = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__19937){
var values = cljs.core.seq(arglist__19937);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__19938){
var values = cljs.core.seq(arglist__19938);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){
return (function (node){
return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){
return (function (node){
return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__19939_SHARP_){
return domina.set_data_BANG_.call(null,p1__19939_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;
if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__19940){
var ttime = cljs.core.first(arglist__19940);
var funcs = cljs.core.rest(arglist__19940);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){
var rep_str = (function rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__19942_SHARP_,p2__19941_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__19941_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__19967_19975 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__19968_19976 = null;
var count__19969_19977 = (0);
var i__19970_19978 = (0);
while(true){
if((i__19970_19978 < count__19969_19977)){
var idx_19979 = cljs.core._nth.call(null,chunk__19968_19976,i__19970_19978);
var attr_19980 = pnod.attributes.item(idx_19979);
if(cljs.core.truth_(attr_19980.specified)){
attr_19980.value = rep_str.call(null,attr_19980.value);
} else {
}

var G__19981 = seq__19967_19975;
var G__19982 = chunk__19968_19976;
var G__19983 = count__19969_19977;
var G__19984 = (i__19970_19978 + (1));
seq__19967_19975 = G__19981;
chunk__19968_19976 = G__19982;
count__19969_19977 = G__19983;
i__19970_19978 = G__19984;
continue;
} else {
var temp__4126__auto___19985 = cljs.core.seq.call(null,seq__19967_19975);
if(temp__4126__auto___19985){
var seq__19967_19986__$1 = temp__4126__auto___19985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19967_19986__$1)){
var c__13332__auto___19987 = cljs.core.chunk_first.call(null,seq__19967_19986__$1);
var G__19988 = cljs.core.chunk_rest.call(null,seq__19967_19986__$1);
var G__19989 = c__13332__auto___19987;
var G__19990 = cljs.core.count.call(null,c__13332__auto___19987);
var G__19991 = (0);
seq__19967_19975 = G__19988;
chunk__19968_19976 = G__19989;
count__19969_19977 = G__19990;
i__19970_19978 = G__19991;
continue;
} else {
var idx_19992 = cljs.core.first.call(null,seq__19967_19986__$1);
var attr_19993 = pnod.attributes.item(idx_19992);
if(cljs.core.truth_(attr_19993.specified)){
attr_19993.value = rep_str.call(null,attr_19993.value);
} else {
}

var G__19994 = cljs.core.next.call(null,seq__19967_19986__$1);
var G__19995 = null;
var G__19996 = (0);
var G__19997 = (0);
seq__19967_19975 = G__19994;
chunk__19968_19976 = G__19995;
count__19969_19977 = G__19996;
i__19970_19978 = G__19997;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__19971 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__19972 = null;
var count__19973 = (0);
var i__19974 = (0);
while(true){
if((i__19974 < count__19973)){
var cnode = cljs.core._nth.call(null,chunk__19972,i__19974);
rep_node.call(null,cnode);

var G__19998 = seq__19971;
var G__19999 = chunk__19972;
var G__20000 = count__19973;
var G__20001 = (i__19974 + (1));
seq__19971 = G__19998;
chunk__19972 = G__19999;
count__19973 = G__20000;
i__19974 = G__20001;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19971);
if(temp__4126__auto__){
var seq__19971__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19971__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__19971__$1);
var G__20002 = cljs.core.chunk_rest.call(null,seq__19971__$1);
var G__20003 = c__13332__auto__;
var G__20004 = cljs.core.count.call(null,c__13332__auto__);
var G__20005 = (0);
seq__19971 = G__20002;
chunk__19972 = G__20003;
count__19973 = G__20004;
i__19974 = G__20005;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__19971__$1);
rep_node.call(null,cnode);

var G__20006 = cljs.core.next.call(null,seq__19971__$1);
var G__20007 = null;
var G__20008 = (0);
var G__20009 = (0);
seq__19971 = G__20006;
chunk__19972 = G__20007;
count__19973 = G__20008;
i__19974 = G__20009;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){
return (function (el){
if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__20014 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__20015 = null;
var count__20016 = (0);
var i__20017 = (0);
while(true){
if((i__20017 < count__20016)){
var idx = cljs.core._nth.call(null,chunk__20015,i__20017);
var el_20018 = (form_node.elements[idx]);
var ky_20019 = cljs.core.keyword.call(null,el_20018.name);
var val_20020 = ky_20019.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_20019)){
var val_20021__$1 = (cljs.core.truth_(val_20020)?val_20020:"");
enfocus.core.set_form_input.call(null,val_20021__$1).call(null,el_20018);
} else {
}

var G__20022 = seq__20014;
var G__20023 = chunk__20015;
var G__20024 = count__20016;
var G__20025 = (i__20017 + (1));
seq__20014 = G__20022;
chunk__20015 = G__20023;
count__20016 = G__20024;
i__20017 = G__20025;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20014);
if(temp__4126__auto__){
var seq__20014__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20014__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__20014__$1);
var G__20026 = cljs.core.chunk_rest.call(null,seq__20014__$1);
var G__20027 = c__13332__auto__;
var G__20028 = cljs.core.count.call(null,c__13332__auto__);
var G__20029 = (0);
seq__20014 = G__20026;
chunk__20015 = G__20027;
count__20016 = G__20028;
i__20017 = G__20029;
continue;
} else {
var idx = cljs.core.first.call(null,seq__20014__$1);
var el_20030 = (form_node.elements[idx]);
var ky_20031 = cljs.core.keyword.call(null,el_20030.name);
var val_20032 = ky_20031.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_20031)){
var val_20033__$1 = (cljs.core.truth_(val_20032)?val_20032:"");
enfocus.core.set_form_input.call(null,val_20033__$1).call(null,el_20030);
} else {
}

var G__20034 = cljs.core.next.call(null,seq__20014__$1);
var G__20035 = null;
var G__20036 = (0);
var G__20037 = (0);
seq__20014 = G__20034;
chunk__20015 = G__20035;
count__20016 = G__20036;
i__20017 = G__20037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__20047 = node_spec;
var tag = cljs.core.nth.call(null,vec__20047,(0),null);
var vec__20048 = cljs.core.nthnext.call(null,vec__20047,(1));
var m = cljs.core.nth.call(null,vec__20048,(0),null);
var ms = cljs.core.nthnext.call(null,vec__20048,(1));
var more = vec__20048;
var vec__20049 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__20049,(0),null);
var segments = cljs.core.nthnext.call(null,vec__20049,(1));
var id = cljs.core.some.call(null,((function (vec__20047,tag,vec__20048,m,ms,more,vec__20049,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__20047,tag,vec__20048,m,ms,more,vec__20049,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__20047,tag,vec__20048,m,ms,more,vec__20049,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__20047,tag,vec__20048,m,ms,more,vec__20049,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__20050_20056 = cljs.core.seq.call(null,attrs__$2);
var chunk__20051_20057 = null;
var count__20052_20058 = (0);
var i__20053_20059 = (0);
while(true){
if((i__20053_20059 < count__20052_20058)){
var vec__20054_20060 = cljs.core._nth.call(null,chunk__20051_20057,i__20053_20059);
var key_20061 = cljs.core.nth.call(null,vec__20054_20060,(0),null);
var val_20062 = cljs.core.nth.call(null,vec__20054_20060,(1),null);
node.setAttribute(cljs.core.name.call(null,key_20061),val_20062);

var G__20063 = seq__20050_20056;
var G__20064 = chunk__20051_20057;
var G__20065 = count__20052_20058;
var G__20066 = (i__20053_20059 + (1));
seq__20050_20056 = G__20063;
chunk__20051_20057 = G__20064;
count__20052_20058 = G__20065;
i__20053_20059 = G__20066;
continue;
} else {
var temp__4126__auto___20067 = cljs.core.seq.call(null,seq__20050_20056);
if(temp__4126__auto___20067){
var seq__20050_20068__$1 = temp__4126__auto___20067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20050_20068__$1)){
var c__13332__auto___20069 = cljs.core.chunk_first.call(null,seq__20050_20068__$1);
var G__20070 = cljs.core.chunk_rest.call(null,seq__20050_20068__$1);
var G__20071 = c__13332__auto___20069;
var G__20072 = cljs.core.count.call(null,c__13332__auto___20069);
var G__20073 = (0);
seq__20050_20056 = G__20070;
chunk__20051_20057 = G__20071;
count__20052_20058 = G__20072;
i__20053_20059 = G__20073;
continue;
} else {
var vec__20055_20074 = cljs.core.first.call(null,seq__20050_20068__$1);
var key_20075 = cljs.core.nth.call(null,vec__20055_20074,(0),null);
var val_20076 = cljs.core.nth.call(null,vec__20055_20074,(1),null);
node.setAttribute(cljs.core.name.call(null,key_20075),val_20076);

var G__20077 = cljs.core.next.call(null,seq__20050_20068__$1);
var G__20078 = null;
var G__20079 = (0);
var G__20080 = (0);
seq__20050_20056 = G__20077;
chunk__20051_20057 = G__20078;
count__20052_20058 = G__20079;
i__20053_20059 = G__20080;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else {
return document.createTextNode([cljs.core.str(node_spec)].join(''));

}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){
return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
* returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
*/
enfocus.core.read_form_input = (function read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__20082_SHARP_,p2__20081_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__20081_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__20082_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__20082_SHARP_,vals);
} else {
return p1__20082_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type)))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t20087 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t20087 = (function (trans,read_form_input,meta20088){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta20088 = meta20088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t20087.prototype.call = ((function (trans){
return (function() {
var G__20091 = null;
var G__20091__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__20091__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__20091 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__20091__2.call(this,self__,nodes);
case 3:
return G__20091__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20091.cljs$core$IFn$_invoke$arity$2 = G__20091__2;
G__20091.cljs$core$IFn$_invoke$arity$3 = G__20091__3;
return G__20091;
})()
;})(trans))
;

enfocus.core.t20087.prototype.apply = ((function (trans){
return (function (self__,args20090){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20090)));
});})(trans))
;

enfocus.core.t20087.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t20087.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t20087.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t20087.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t20087.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t20087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_20089){
var self__ = this;
var _20089__$1 = this;
return self__.meta20088;
});})(trans))
;

enfocus.core.t20087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_20089,meta20088__$1){
var self__ = this;
var _20089__$1 = this;
return (new enfocus.core.t20087(self__.trans,self__.read_form_input,meta20088__$1));
});})(trans))
;

enfocus.core.t20087.cljs$lang$type = true;

enfocus.core.t20087.cljs$lang$ctorStr = "enfocus.core/t20087";

enfocus.core.t20087.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__13132__auto__,writer__13133__auto__,opt__13134__auto__){
return cljs.core._write.call(null,writer__13133__auto__,"enfocus.core/t20087");
});})(trans))
;

enfocus.core.__GT_t20087 = ((function (trans){
return (function __GT_t20087(trans__$1,read_form_input__$1,meta20088){
return (new enfocus.core.t20087(trans__$1,read_form_input__$1,meta20088));
});})(trans))
;

}

return (new enfocus.core.t20087(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__20093_SHARP_,p2__20092_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__20092_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__20093_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__20092_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__20092_SHARP_)));
} else {
return p1__20093_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__20094_SHARP_){
if((p1__20094_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__20094_SHARP_);
} else {
if((p1__20094_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__20094_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__20094_SHARP_)){
return create_sel_str.call(null,p1__20094_SHARP_);
} else {
if(typeof p1__20094_SHARP_ === 'string'){
return p1__20094_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){
var or__12545__auto__ = func;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__12533__auto__ = !((node == null));
if(and__12533__auto__){
var G__20105 = node;
if(G__20105){
var bit__13226__auto__ = null;
if(cljs.core.truth_((function (){var or__12545__auto__ = bit__13226__auto__;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return G__20105.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__20105.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20105);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20105);
}
} else {
return and__12533__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__20106 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__20106,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__20106,(1),null);
var seq__20107 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__20108 = null;
var count__20109 = (0);
var i__20110 = (0);
while(true){
if((i__20110 < count__20109)){
var vec__20111 = cljs.core._nth.call(null,chunk__20108,i__20110);
var sel = cljs.core.nth.call(null,vec__20111,(0),null);
var t = cljs.core.nth.call(null,vec__20111,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__20113 = seq__20107;
var G__20114 = chunk__20108;
var G__20115 = count__20109;
var G__20116 = (i__20110 + (1));
seq__20107 = G__20113;
chunk__20108 = G__20114;
count__20109 = G__20115;
i__20110 = G__20116;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20107);
if(temp__4126__auto__){
var seq__20107__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20107__$1)){
var c__13332__auto__ = cljs.core.chunk_first.call(null,seq__20107__$1);
var G__20117 = cljs.core.chunk_rest.call(null,seq__20107__$1);
var G__20118 = c__13332__auto__;
var G__20119 = cljs.core.count.call(null,c__13332__auto__);
var G__20120 = (0);
seq__20107 = G__20117;
chunk__20108 = G__20118;
count__20109 = G__20119;
i__20110 = G__20120;
continue;
} else {
var vec__20112 = cljs.core.first.call(null,seq__20107__$1);
var sel = cljs.core.nth.call(null,vec__20112,(0),null);
var t = cljs.core.nth.call(null,vec__20112,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__20121 = cljs.core.next.call(null,seq__20107__$1);
var G__20122 = null;
var G__20123 = (0);
var G__20124 = (0);
seq__20107 = G__20121;
chunk__20108 = G__20122;
count__20109 = G__20123;
i__20110 = G__20124;
continue;
}
} else {
return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;
if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__20125){
var id_mask = cljs.core.first(arglist__20125);
arglist__20125 = cljs.core.next(arglist__20125);
var node = cljs.core.first(arglist__20125);
var trans = cljs.core.rest(arglist__20125);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__20126){
var node = cljs.core.first(arglist__20126);
var trans = cljs.core.rest(arglist__20126);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var G__20131 = node;
if(G__20131){
var bit__13226__auto__ = null;
if(cljs.core.truth_((function (){var or__12545__auto__ = bit__13226__auto__;
if(cljs.core.truth_(or__12545__auto__)){
return or__12545__auto__;
} else {
return G__20131.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__20131.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20131);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20131);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__20132 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__20132,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__20132,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__20132,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__20133){
var vec__20134 = p__20133;
var ky = cljs.core.nth.call(null,vec__20134,(0),null);
var sel = cljs.core.nth.call(null,vec__20134,(1),null);
var ext = cljs.core.nth.call(null,vec__20134,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__20132,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__20135){
var node = cljs.core.first(arglist__20135);
var trans = cljs.core.rest(arglist__20135);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = true;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
(enfocus.core.ISelector["null"] = true);

(enfocus.core.select["null"] = (function() {
var G__20136 = null;
var G__20136__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__20136__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__20136__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__20136 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20136__1.call(this,this$);
case 2:
return G__20136__2.call(this,this$,root);
case 3:
return G__20136__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20136.cljs$core$IFn$_invoke$arity$1 = G__20136__1;
G__20136.cljs$core$IFn$_invoke$arity$2 = G__20136__2;
G__20136.cljs$core$IFn$_invoke$arity$3 = G__20136__3;
return G__20136;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__20137 = null;
var G__20137__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__20137__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__20137__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__20137 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20137__1.call(this,this$);
case 2:
return G__20137__2.call(this,this$,root);
case 3:
return G__20137__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20137.cljs$core$IFn$_invoke$arity$1 = G__20137__1;
G__20137.cljs$core$IFn$_invoke$arity$2 = G__20137__2;
G__20137.cljs$core$IFn$_invoke$arity$3 = G__20137__3;
return G__20137;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__20138 = null;
var G__20138__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__20138__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__20138__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__20138 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20138__1.call(this,this$);
case 2:
return G__20138__2.call(this,this$,root);
case 3:
return G__20138__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20138.cljs$core$IFn$_invoke$arity$1 = G__20138__1;
G__20138.cljs$core$IFn$_invoke$arity$2 = G__20138__2;
G__20138.cljs$core$IFn$_invoke$arity$3 = G__20138__3;
return G__20138;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__20139 = null;
var G__20139__2 = (function (trans,nodes){
return nodes;
});
var G__20139__3 = (function (trans,nodes,chain){
return nodes;
});
G__20139 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__20139__2.call(this,trans,nodes);
case 3:
return G__20139__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20139.cljs$core$IFn$_invoke$arity$2 = G__20139__2;
G__20139.cljs$core$IFn$_invoke$arity$3 = G__20139__3;
return G__20139;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__20140 = null;
var G__20140__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__20140__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__20140 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__20140__2.call(this,trans,nodes);
case 3:
return G__20140__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20140.cljs$core$IFn$_invoke$arity$2 = G__20140__2;
G__20140.cljs$core$IFn$_invoke$arity$3 = G__20140__3;
return G__20140;
})()
);

//# sourceMappingURL=core.js.map