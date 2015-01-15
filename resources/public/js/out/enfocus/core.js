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







enfocus.core.ISelector = (function (){var obj12505 = {};
return obj12505;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__3610__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (enfocus.core.select[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (enfocus.core.select["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__3610__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (enfocus.core.select[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (enfocus.core.select["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__3610__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (enfocus.core.select[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (enfocus.core.select["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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


enfocus.core.ITransform = (function (){var obj12507 = {};
return obj12507;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__3610__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__3610__auto__ = this$;
if(and__3610__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__3610__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__4266__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3622__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
if(cljs.core.truth_((function (){var and__3610__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__3610__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3610__auto__;
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

return cljs.core.mapcat.call(null,(function (p1__12508_SHARP_){
if(typeof p1__12508_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__12508_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__12508_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__12515_12521 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__12516_12522 = null;
var count__12517_12523 = (0);
var i__12518_12524 = (0);
while(true){
if((i__12518_12524 < count__12517_12523)){
var vec__12519_12525 = cljs.core._nth.call(null,chunk__12516_12522,i__12518_12524);
var attr_12526 = cljs.core.nth.call(null,vec__12519_12525,(0),null);
var value_12527 = cljs.core.nth.call(null,vec__12519_12525,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12526),value_12527);

var G__12528 = seq__12515_12521;
var G__12529 = chunk__12516_12522;
var G__12530 = count__12517_12523;
var G__12531 = (i__12518_12524 + (1));
seq__12515_12521 = G__12528;
chunk__12516_12522 = G__12529;
count__12517_12523 = G__12530;
i__12518_12524 = G__12531;
continue;
} else {
var temp__4126__auto___12532 = cljs.core.seq.call(null,seq__12515_12521);
if(temp__4126__auto___12532){
var seq__12515_12533__$1 = temp__4126__auto___12532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12515_12533__$1)){
var c__4409__auto___12534 = cljs.core.chunk_first.call(null,seq__12515_12533__$1);
var G__12535 = cljs.core.chunk_rest.call(null,seq__12515_12533__$1);
var G__12536 = c__4409__auto___12534;
var G__12537 = cljs.core.count.call(null,c__4409__auto___12534);
var G__12538 = (0);
seq__12515_12521 = G__12535;
chunk__12516_12522 = G__12536;
count__12517_12523 = G__12537;
i__12518_12524 = G__12538;
continue;
} else {
var vec__12520_12539 = cljs.core.first.call(null,seq__12515_12533__$1);
var attr_12540 = cljs.core.nth.call(null,vec__12520_12539,(0),null);
var value_12541 = cljs.core.nth.call(null,vec__12520_12539,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12540),value_12541);

var G__12542 = cljs.core.next.call(null,seq__12515_12533__$1);
var G__12543 = null;
var G__12544 = (0);
var G__12545 = (0);
seq__12515_12521 = G__12542;
chunk__12516_12522 = G__12543;
count__12517_12523 = G__12544;
i__12518_12524 = G__12545;
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
var seq__12550 = cljs.core.seq.call(null,values);
var chunk__12551 = null;
var count__12552 = (0);
var i__12553 = (0);
while(true){
if((i__12553 < count__12552)){
var attr = cljs.core._nth.call(null,chunk__12551,i__12553);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12554 = seq__12550;
var G__12555 = chunk__12551;
var G__12556 = count__12552;
var G__12557 = (i__12553 + (1));
seq__12550 = G__12554;
chunk__12551 = G__12555;
count__12552 = G__12556;
i__12553 = G__12557;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12550);
if(temp__4126__auto__){
var seq__12550__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12550__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12550__$1);
var G__12558 = cljs.core.chunk_rest.call(null,seq__12550__$1);
var G__12559 = c__4409__auto__;
var G__12560 = cljs.core.count.call(null,c__4409__auto__);
var G__12561 = (0);
seq__12550 = G__12558;
chunk__12551 = G__12559;
count__12552 = G__12560;
i__12553 = G__12561;
continue;
} else {
var attr = cljs.core.first.call(null,seq__12550__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12562 = cljs.core.next.call(null,seq__12550__$1);
var G__12563 = null;
var G__12564 = (0);
var G__12565 = (0);
seq__12550 = G__12562;
chunk__12551 = G__12563;
count__12552 = G__12564;
i__12553 = G__12565;
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
var seq__12572_12578 = cljs.core.seq.call(null,ats);
var chunk__12573_12579 = null;
var count__12574_12580 = (0);
var i__12575_12581 = (0);
while(true){
if((i__12575_12581 < count__12574_12580)){
var vec__12576_12582 = cljs.core._nth.call(null,chunk__12573_12579,i__12575_12581);
var k_12583 = cljs.core.nth.call(null,vec__12576_12582,(0),null);
var v_12584 = cljs.core.nth.call(null,vec__12576_12582,(1),null);
add_map_attrs.call(null,elem,k_12583,v_12584);

var G__12585 = seq__12572_12578;
var G__12586 = chunk__12573_12579;
var G__12587 = count__12574_12580;
var G__12588 = (i__12575_12581 + (1));
seq__12572_12578 = G__12585;
chunk__12573_12579 = G__12586;
count__12574_12580 = G__12587;
i__12575_12581 = G__12588;
continue;
} else {
var temp__4126__auto___12589 = cljs.core.seq.call(null,seq__12572_12578);
if(temp__4126__auto___12589){
var seq__12572_12590__$1 = temp__4126__auto___12589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12572_12590__$1)){
var c__4409__auto___12591 = cljs.core.chunk_first.call(null,seq__12572_12590__$1);
var G__12592 = cljs.core.chunk_rest.call(null,seq__12572_12590__$1);
var G__12593 = c__4409__auto___12591;
var G__12594 = cljs.core.count.call(null,c__4409__auto___12591);
var G__12595 = (0);
seq__12572_12578 = G__12592;
chunk__12573_12579 = G__12593;
count__12574_12580 = G__12594;
i__12575_12581 = G__12595;
continue;
} else {
var vec__12577_12596 = cljs.core.first.call(null,seq__12572_12590__$1);
var k_12597 = cljs.core.nth.call(null,vec__12577_12596,(0),null);
var v_12598 = cljs.core.nth.call(null,vec__12577_12596,(1),null);
add_map_attrs.call(null,elem,k_12597,v_12598);

var G__12599 = cljs.core.next.call(null,seq__12572_12590__$1);
var G__12600 = null;
var G__12601 = (0);
var G__12602 = (0);
seq__12572_12578 = G__12599;
chunk__12573_12579 = G__12600;
count__12574_12580 = G__12601;
i__12575_12581 = G__12602;
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

var seq__12607_12611 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__12608_12612 = null;
var count__12609_12613 = (0);
var i__12610_12614 = (0);
while(true){
if((i__12610_12614 < count__12609_12613)){
var node_12615 = cljs.core._nth.call(null,chunk__12608_12612,i__12610_12614);
goog.dom.appendChild(div,node_12615);

var G__12616 = seq__12607_12611;
var G__12617 = chunk__12608_12612;
var G__12618 = count__12609_12613;
var G__12619 = (i__12610_12614 + (1));
seq__12607_12611 = G__12616;
chunk__12608_12612 = G__12617;
count__12609_12613 = G__12618;
i__12610_12614 = G__12619;
continue;
} else {
var temp__4126__auto___12620 = cljs.core.seq.call(null,seq__12607_12611);
if(temp__4126__auto___12620){
var seq__12607_12621__$1 = temp__4126__auto___12620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12607_12621__$1)){
var c__4409__auto___12622 = cljs.core.chunk_first.call(null,seq__12607_12621__$1);
var G__12623 = cljs.core.chunk_rest.call(null,seq__12607_12621__$1);
var G__12624 = c__4409__auto___12622;
var G__12625 = cljs.core.count.call(null,c__4409__auto___12622);
var G__12626 = (0);
seq__12607_12611 = G__12623;
chunk__12608_12612 = G__12624;
count__12609_12613 = G__12625;
i__12610_12614 = G__12626;
continue;
} else {
var node_12627 = cljs.core.first.call(null,seq__12607_12621__$1);
goog.dom.appendChild(div,node_12627);

var G__12628 = cljs.core.next.call(null,seq__12607_12621__$1);
var G__12629 = null;
var G__12630 = (0);
var G__12631 = (0);
seq__12607_12611 = G__12628;
chunk__12608_12612 = G__12629;
count__12609_12613 = G__12630;
i__12610_12614 = G__12631;
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
return (function (p1__12632_SHARP_){
var id = p1__12632_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12632_SHARP_.setAttribute("id",rid);
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
var vec__12634 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12634,(0),null);
var txt = cljs.core.nth.call(null,vec__12634,(1),null);
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

var seq__12639_12643 = cljs.core.seq.call(null,dfa);
var chunk__12640_12644 = null;
var count__12641_12645 = (0);
var i__12642_12646 = (0);
while(true){
if((i__12642_12646 < count__12641_12645)){
var df_12647 = cljs.core._nth.call(null,chunk__12640_12644,i__12642_12646);
goog.dom.append(frag,df_12647);

var G__12648 = seq__12639_12643;
var G__12649 = chunk__12640_12644;
var G__12650 = count__12641_12645;
var G__12651 = (i__12642_12646 + (1));
seq__12639_12643 = G__12648;
chunk__12640_12644 = G__12649;
count__12641_12645 = G__12650;
i__12642_12646 = G__12651;
continue;
} else {
var temp__4126__auto___12652 = cljs.core.seq.call(null,seq__12639_12643);
if(temp__4126__auto___12652){
var seq__12639_12653__$1 = temp__4126__auto___12652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12639_12653__$1)){
var c__4409__auto___12654 = cljs.core.chunk_first.call(null,seq__12639_12653__$1);
var G__12655 = cljs.core.chunk_rest.call(null,seq__12639_12653__$1);
var G__12656 = c__4409__auto___12654;
var G__12657 = cljs.core.count.call(null,c__4409__auto___12654);
var G__12658 = (0);
seq__12639_12643 = G__12655;
chunk__12640_12644 = G__12656;
count__12641_12645 = G__12657;
i__12642_12646 = G__12658;
continue;
} else {
var df_12659 = cljs.core.first.call(null,seq__12639_12653__$1);
goog.dom.append(frag,df_12659);

var G__12660 = cljs.core.next.call(null,seq__12639_12653__$1);
var G__12661 = null;
var G__12662 = (0);
var G__12663 = (0);
seq__12639_12643 = G__12660;
chunk__12640_12644 = G__12661;
count__12641_12645 = G__12662;
i__12642_12646 = G__12663;
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
var vec__12666 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12666,(0),null);
var tdom = cljs.core.nth.call(null,vec__12666,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12666,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12664_SHARP_){
return p1__12664_SHARP_.outerHTML;
});})(vec__12666,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t12671 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12671 = (function (trans,filt,func,extr_multi_node,meta12672){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12672 = meta12672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12671.prototype.call = ((function (trans){
return (function() {
var G__12675 = null;
var G__12675__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12675__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12675 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12675__2.call(this,self__,nodes);
case 3:
return G__12675__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12675.cljs$core$IFn$_invoke$arity$2 = G__12675__2;
G__12675.cljs$core$IFn$_invoke$arity$3 = G__12675__3;
return G__12675;
})()
;})(trans))
;

enfocus.core.t12671.prototype.apply = ((function (trans){
return (function (self__,args12674){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12674)));
});})(trans))
;

enfocus.core.t12671.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12671.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12671.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12671.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12671.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12673){
var self__ = this;
var _12673__$1 = this;
return self__.meta12672;
});})(trans))
;

enfocus.core.t12671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12673,meta12672__$1){
var self__ = this;
var _12673__$1 = this;
return (new enfocus.core.t12671(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12672__$1));
});})(trans))
;

enfocus.core.t12671.cljs$lang$type = true;

enfocus.core.t12671.cljs$lang$ctorStr = "enfocus.core/t12671";

enfocus.core.t12671.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12671");
});})(trans))
;

enfocus.core.__GT_t12671 = ((function (trans){
return (function __GT_t12671(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12672){
return (new enfocus.core.t12671(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12672));
});})(trans))
;

}

return (new enfocus.core.t12671(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t12685 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12685 = (function (trans,func,multi_node_chain,meta12686){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12686 = meta12686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12685.prototype.call = ((function (trans){
return (function() {
var G__12693 = null;
var G__12693__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12693__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12693 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12693__2.call(this,self__,nodes);
case 3:
return G__12693__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12693.cljs$core$IFn$_invoke$arity$2 = G__12693__2;
G__12693.cljs$core$IFn$_invoke$arity$3 = G__12693__3;
return G__12693;
})()
;})(trans))
;

enfocus.core.t12685.prototype.apply = ((function (trans){
return (function (self__,args12688){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12688)));
});})(trans))
;

enfocus.core.t12685.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12685.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12685.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12685.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12685.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12687){
var self__ = this;
var _12687__$1 = this;
return self__.meta12686;
});})(trans))
;

enfocus.core.t12685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12687,meta12686__$1){
var self__ = this;
var _12687__$1 = this;
return (new enfocus.core.t12685(self__.trans,self__.func,self__.multi_node_chain,meta12686__$1));
});})(trans))
;

enfocus.core.t12685.cljs$lang$type = true;

enfocus.core.t12685.cljs$lang$ctorStr = "enfocus.core/t12685";

enfocus.core.t12685.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12685");
});})(trans))
;

enfocus.core.__GT_t12685 = ((function (trans){
return (function __GT_t12685(trans__$1,func__$1,multi_node_chain__$1,meta12686){
return (new enfocus.core.t12685(trans__$1,func__$1,multi_node_chain__$1,meta12686));
});})(trans))
;

}

return (new enfocus.core.t12685(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12676_SHARP_){
return domina.nodes.call(null,p1__12676_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12689 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12689 = (function (trans,func,values,multi_node_chain,meta12690){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12690 = meta12690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12689.prototype.call = ((function (trans){
return (function() {
var G__12694 = null;
var G__12694__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12694__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12694 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12694__2.call(this,self__,nodes);
case 3:
return G__12694__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12694.cljs$core$IFn$_invoke$arity$2 = G__12694__2;
G__12694.cljs$core$IFn$_invoke$arity$3 = G__12694__3;
return G__12694;
})()
;})(trans))
;

enfocus.core.t12689.prototype.apply = ((function (trans){
return (function (self__,args12692){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12692)));
});})(trans))
;

enfocus.core.t12689.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12689.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12689.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12689.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12689.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12691){
var self__ = this;
var _12691__$1 = this;
return self__.meta12690;
});})(trans))
;

enfocus.core.t12689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12691,meta12690__$1){
var self__ = this;
var _12691__$1 = this;
return (new enfocus.core.t12689(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12690__$1));
});})(trans))
;

enfocus.core.t12689.cljs$lang$type = true;

enfocus.core.t12689.cljs$lang$ctorStr = "enfocus.core/t12689";

enfocus.core.t12689.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12689");
});})(trans))
;

enfocus.core.__GT_t12689 = ((function (trans){
return (function __GT_t12689(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12690){
return (new enfocus.core.t12689(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12690));
});})(trans))
;

}

return (new enfocus.core.t12689(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12695_SHARP_,p2__12696_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12695_SHARP_);

return domina.append_BANG_.call(null,p1__12695_SHARP_,p2__12696_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12697){
var values = cljs.core.seq(arglist__12697);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12698_SHARP_){
return domina.set_html_BANG_.call(null,p1__12698_SHARP_,txt);
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
return (function (p1__12699_SHARP_){
var seq__12706 = cljs.core.seq.call(null,pairs);
var chunk__12707 = null;
var count__12708 = (0);
var i__12709 = (0);
while(true){
if((i__12709 < count__12708)){
var vec__12710 = cljs.core._nth.call(null,chunk__12707,i__12709);
var name = cljs.core.nth.call(null,vec__12710,(0),null);
var value = cljs.core.nth.call(null,vec__12710,(1),null);
domina.set_attr_BANG_.call(null,p1__12699_SHARP_,name,value);

var G__12712 = seq__12706;
var G__12713 = chunk__12707;
var G__12714 = count__12708;
var G__12715 = (i__12709 + (1));
seq__12706 = G__12712;
chunk__12707 = G__12713;
count__12708 = G__12714;
i__12709 = G__12715;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12706);
if(temp__4126__auto__){
var seq__12706__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12706__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12706__$1);
var G__12716 = cljs.core.chunk_rest.call(null,seq__12706__$1);
var G__12717 = c__4409__auto__;
var G__12718 = cljs.core.count.call(null,c__4409__auto__);
var G__12719 = (0);
seq__12706 = G__12716;
chunk__12707 = G__12717;
count__12708 = G__12718;
i__12709 = G__12719;
continue;
} else {
var vec__12711 = cljs.core.first.call(null,seq__12706__$1);
var name = cljs.core.nth.call(null,vec__12711,(0),null);
var value = cljs.core.nth.call(null,vec__12711,(1),null);
domina.set_attr_BANG_.call(null,p1__12699_SHARP_,name,value);

var G__12720 = cljs.core.next.call(null,seq__12706__$1);
var G__12721 = null;
var G__12722 = (0);
var G__12723 = (0);
seq__12706 = G__12720;
chunk__12707 = G__12721;
count__12708 = G__12722;
i__12709 = G__12723;
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
set_attr.cljs$lang$applyTo = (function (arglist__12724){
var values = cljs.core.seq(arglist__12724);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12725_SHARP_){
var seq__12730 = cljs.core.seq.call(null,values);
var chunk__12731 = null;
var count__12732 = (0);
var i__12733 = (0);
while(true){
if((i__12733 < count__12732)){
var name = cljs.core._nth.call(null,chunk__12731,i__12733);
domina.remove_attr_BANG_.call(null,p1__12725_SHARP_,name);

var G__12734 = seq__12730;
var G__12735 = chunk__12731;
var G__12736 = count__12732;
var G__12737 = (i__12733 + (1));
seq__12730 = G__12734;
chunk__12731 = G__12735;
count__12732 = G__12736;
i__12733 = G__12737;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12730);
if(temp__4126__auto__){
var seq__12730__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12730__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12730__$1);
var G__12738 = cljs.core.chunk_rest.call(null,seq__12730__$1);
var G__12739 = c__4409__auto__;
var G__12740 = cljs.core.count.call(null,c__4409__auto__);
var G__12741 = (0);
seq__12730 = G__12738;
chunk__12731 = G__12739;
count__12732 = G__12740;
i__12733 = G__12741;
continue;
} else {
var name = cljs.core.first.call(null,seq__12730__$1);
domina.remove_attr_BANG_.call(null,p1__12725_SHARP_,name);

var G__12742 = cljs.core.next.call(null,seq__12730__$1);
var G__12743 = null;
var G__12744 = (0);
var G__12745 = (0);
seq__12730 = G__12742;
chunk__12731 = G__12743;
count__12732 = G__12744;
i__12733 = G__12745;
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
remove_attr.cljs$lang$applyTo = (function (arglist__12746){
var values = cljs.core.seq(arglist__12746);
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
var h = cljs.core.mapcat.call(null,(function (p__12749){
var vec__12750 = p__12749;
var n = cljs.core.nth.call(null,vec__12750,(0),null);
var v = cljs.core.nth.call(null,vec__12750,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__12751){
var forms = cljs.core.seq(arglist__12751);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12752_SHARP_){
var seq__12757 = cljs.core.seq.call(null,values);
var chunk__12758 = null;
var count__12759 = (0);
var i__12760 = (0);
while(true){
if((i__12760 < count__12759)){
var val = cljs.core._nth.call(null,chunk__12758,i__12760);
domina.add_class_BANG_.call(null,p1__12752_SHARP_,val);

var G__12761 = seq__12757;
var G__12762 = chunk__12758;
var G__12763 = count__12759;
var G__12764 = (i__12760 + (1));
seq__12757 = G__12761;
chunk__12758 = G__12762;
count__12759 = G__12763;
i__12760 = G__12764;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12757);
if(temp__4126__auto__){
var seq__12757__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12757__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12757__$1);
var G__12765 = cljs.core.chunk_rest.call(null,seq__12757__$1);
var G__12766 = c__4409__auto__;
var G__12767 = cljs.core.count.call(null,c__4409__auto__);
var G__12768 = (0);
seq__12757 = G__12765;
chunk__12758 = G__12766;
count__12759 = G__12767;
i__12760 = G__12768;
continue;
} else {
var val = cljs.core.first.call(null,seq__12757__$1);
domina.add_class_BANG_.call(null,p1__12752_SHARP_,val);

var G__12769 = cljs.core.next.call(null,seq__12757__$1);
var G__12770 = null;
var G__12771 = (0);
var G__12772 = (0);
seq__12757 = G__12769;
chunk__12758 = G__12770;
count__12759 = G__12771;
i__12760 = G__12772;
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
add_class.cljs$lang$applyTo = (function (arglist__12773){
var values = cljs.core.seq(arglist__12773);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12774_SHARP_){
var seq__12779 = cljs.core.seq.call(null,values);
var chunk__12780 = null;
var count__12781 = (0);
var i__12782 = (0);
while(true){
if((i__12782 < count__12781)){
var val = cljs.core._nth.call(null,chunk__12780,i__12782);
domina.remove_class_BANG_.call(null,p1__12774_SHARP_,val);

var G__12783 = seq__12779;
var G__12784 = chunk__12780;
var G__12785 = count__12781;
var G__12786 = (i__12782 + (1));
seq__12779 = G__12783;
chunk__12780 = G__12784;
count__12781 = G__12785;
i__12782 = G__12786;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12779);
if(temp__4126__auto__){
var seq__12779__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12779__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12779__$1);
var G__12787 = cljs.core.chunk_rest.call(null,seq__12779__$1);
var G__12788 = c__4409__auto__;
var G__12789 = cljs.core.count.call(null,c__4409__auto__);
var G__12790 = (0);
seq__12779 = G__12787;
chunk__12780 = G__12788;
count__12781 = G__12789;
i__12782 = G__12790;
continue;
} else {
var val = cljs.core.first.call(null,seq__12779__$1);
domina.remove_class_BANG_.call(null,p1__12774_SHARP_,val);

var G__12791 = cljs.core.next.call(null,seq__12779__$1);
var G__12792 = null;
var G__12793 = (0);
var G__12794 = (0);
seq__12779 = G__12791;
chunk__12780 = G__12792;
count__12781 = G__12793;
i__12782 = G__12794;
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
remove_class.cljs$lang$applyTo = (function (arglist__12795){
var values = cljs.core.seq(arglist__12795);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12796_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12796_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12797){
var values = cljs.core.seq(arglist__12797);
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
var seq__12802 = cljs.core.seq.call(null,forms);
var chunk__12803 = null;
var count__12804 = (0);
var i__12805 = (0);
while(true){
if((i__12805 < count__12804)){
var fun = cljs.core._nth.call(null,chunk__12803,i__12805);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12806 = seq__12802;
var G__12807 = chunk__12803;
var G__12808 = count__12804;
var G__12809 = (i__12805 + (1));
seq__12802 = G__12806;
chunk__12803 = G__12807;
count__12804 = G__12808;
i__12805 = G__12809;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12802);
if(temp__4126__auto__){
var seq__12802__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12802__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12802__$1);
var G__12810 = cljs.core.chunk_rest.call(null,seq__12802__$1);
var G__12811 = c__4409__auto__;
var G__12812 = cljs.core.count.call(null,c__4409__auto__);
var G__12813 = (0);
seq__12802 = G__12810;
chunk__12803 = G__12811;
count__12804 = G__12812;
i__12805 = G__12813;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12802__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12814 = cljs.core.next.call(null,seq__12802__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__12802 = G__12814;
chunk__12803 = G__12815;
count__12804 = G__12816;
i__12805 = G__12817;
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
do__GT_.cljs$lang$applyTo = (function (arglist__12818){
var forms = cljs.core.seq(arglist__12818);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12819_SHARP_,p2__12820_SHARP_){
return domina.append_BANG_.call(null,p1__12819_SHARP_,p2__12820_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12821){
var values = cljs.core.seq(arglist__12821);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12822_SHARP_,p2__12823_SHARP_){
return domina.prepend_BANG_.call(null,p1__12822_SHARP_,p2__12823_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12824){
var values = cljs.core.seq(arglist__12824);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12825_SHARP_,p2__12826_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12825_SHARP_,p2__12826_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12827){
var values = cljs.core.seq(arglist__12827);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12828_SHARP_,p2__12829_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12828_SHARP_,p2__12829_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12830){
var values = cljs.core.seq(arglist__12830);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12831_SHARP_,p2__12832_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12831_SHARP_,p2__12832_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12833){
var values = cljs.core.seq(arglist__12833);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12834_SHARP_){
return domina.detach_BANG_.call(null,p1__12834_SHARP_);
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
return (function (p1__12835_SHARP_){
var seq__12842 = cljs.core.seq.call(null,pairs);
var chunk__12843 = null;
var count__12844 = (0);
var i__12845 = (0);
while(true){
if((i__12845 < count__12844)){
var vec__12846 = cljs.core._nth.call(null,chunk__12843,i__12845);
var name = cljs.core.nth.call(null,vec__12846,(0),null);
var value = cljs.core.nth.call(null,vec__12846,(1),null);
domina.set_style_BANG_.call(null,p1__12835_SHARP_,name,value);

var G__12848 = seq__12842;
var G__12849 = chunk__12843;
var G__12850 = count__12844;
var G__12851 = (i__12845 + (1));
seq__12842 = G__12848;
chunk__12843 = G__12849;
count__12844 = G__12850;
i__12845 = G__12851;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12842);
if(temp__4126__auto__){
var seq__12842__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12842__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12842__$1);
var G__12852 = cljs.core.chunk_rest.call(null,seq__12842__$1);
var G__12853 = c__4409__auto__;
var G__12854 = cljs.core.count.call(null,c__4409__auto__);
var G__12855 = (0);
seq__12842 = G__12852;
chunk__12843 = G__12853;
count__12844 = G__12854;
i__12845 = G__12855;
continue;
} else {
var vec__12847 = cljs.core.first.call(null,seq__12842__$1);
var name = cljs.core.nth.call(null,vec__12847,(0),null);
var value = cljs.core.nth.call(null,vec__12847,(1),null);
domina.set_style_BANG_.call(null,p1__12835_SHARP_,name,value);

var G__12856 = cljs.core.next.call(null,seq__12842__$1);
var G__12857 = null;
var G__12858 = (0);
var G__12859 = (0);
seq__12842 = G__12856;
chunk__12843 = G__12857;
count__12844 = G__12858;
i__12845 = G__12859;
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
set_style.cljs$lang$applyTo = (function (arglist__12860){
var values = cljs.core.seq(arglist__12860);
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
remove_style.cljs$lang$applyTo = (function (arglist__12861){
var values = cljs.core.seq(arglist__12861);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12862_SHARP_){
return domina.set_data_BANG_.call(null,p1__12862_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__12863){
var ttime = cljs.core.first(arglist__12863);
var funcs = cljs.core.rest(arglist__12863);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12865_SHARP_,p2__12864_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12864_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12890_12898 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12891_12899 = null;
var count__12892_12900 = (0);
var i__12893_12901 = (0);
while(true){
if((i__12893_12901 < count__12892_12900)){
var idx_12902 = cljs.core._nth.call(null,chunk__12891_12899,i__12893_12901);
var attr_12903 = pnod.attributes.item(idx_12902);
if(cljs.core.truth_(attr_12903.specified)){
attr_12903.value = rep_str.call(null,attr_12903.value);
} else {
}

var G__12904 = seq__12890_12898;
var G__12905 = chunk__12891_12899;
var G__12906 = count__12892_12900;
var G__12907 = (i__12893_12901 + (1));
seq__12890_12898 = G__12904;
chunk__12891_12899 = G__12905;
count__12892_12900 = G__12906;
i__12893_12901 = G__12907;
continue;
} else {
var temp__4126__auto___12908 = cljs.core.seq.call(null,seq__12890_12898);
if(temp__4126__auto___12908){
var seq__12890_12909__$1 = temp__4126__auto___12908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12890_12909__$1)){
var c__4409__auto___12910 = cljs.core.chunk_first.call(null,seq__12890_12909__$1);
var G__12911 = cljs.core.chunk_rest.call(null,seq__12890_12909__$1);
var G__12912 = c__4409__auto___12910;
var G__12913 = cljs.core.count.call(null,c__4409__auto___12910);
var G__12914 = (0);
seq__12890_12898 = G__12911;
chunk__12891_12899 = G__12912;
count__12892_12900 = G__12913;
i__12893_12901 = G__12914;
continue;
} else {
var idx_12915 = cljs.core.first.call(null,seq__12890_12909__$1);
var attr_12916 = pnod.attributes.item(idx_12915);
if(cljs.core.truth_(attr_12916.specified)){
attr_12916.value = rep_str.call(null,attr_12916.value);
} else {
}

var G__12917 = cljs.core.next.call(null,seq__12890_12909__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12890_12898 = G__12917;
chunk__12891_12899 = G__12918;
count__12892_12900 = G__12919;
i__12893_12901 = G__12920;
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
var seq__12894 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12895 = null;
var count__12896 = (0);
var i__12897 = (0);
while(true){
if((i__12897 < count__12896)){
var cnode = cljs.core._nth.call(null,chunk__12895,i__12897);
rep_node.call(null,cnode);

var G__12921 = seq__12894;
var G__12922 = chunk__12895;
var G__12923 = count__12896;
var G__12924 = (i__12897 + (1));
seq__12894 = G__12921;
chunk__12895 = G__12922;
count__12896 = G__12923;
i__12897 = G__12924;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12894);
if(temp__4126__auto__){
var seq__12894__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12894__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12894__$1);
var G__12925 = cljs.core.chunk_rest.call(null,seq__12894__$1);
var G__12926 = c__4409__auto__;
var G__12927 = cljs.core.count.call(null,c__4409__auto__);
var G__12928 = (0);
seq__12894 = G__12925;
chunk__12895 = G__12926;
count__12896 = G__12927;
i__12897 = G__12928;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12894__$1);
rep_node.call(null,cnode);

var G__12929 = cljs.core.next.call(null,seq__12894__$1);
var G__12930 = null;
var G__12931 = (0);
var G__12932 = (0);
seq__12894 = G__12929;
chunk__12895 = G__12930;
count__12896 = G__12931;
i__12897 = G__12932;
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
var seq__12937 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12938 = null;
var count__12939 = (0);
var i__12940 = (0);
while(true){
if((i__12940 < count__12939)){
var idx = cljs.core._nth.call(null,chunk__12938,i__12940);
var el_12941 = (form_node.elements[idx]);
var ky_12942 = cljs.core.keyword.call(null,el_12941.name);
var val_12943 = ky_12942.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12942)){
var val_12944__$1 = (cljs.core.truth_(val_12943)?val_12943:"");
enfocus.core.set_form_input.call(null,val_12944__$1).call(null,el_12941);
} else {
}

var G__12945 = seq__12937;
var G__12946 = chunk__12938;
var G__12947 = count__12939;
var G__12948 = (i__12940 + (1));
seq__12937 = G__12945;
chunk__12938 = G__12946;
count__12939 = G__12947;
i__12940 = G__12948;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12937);
if(temp__4126__auto__){
var seq__12937__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12937__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12937__$1);
var G__12949 = cljs.core.chunk_rest.call(null,seq__12937__$1);
var G__12950 = c__4409__auto__;
var G__12951 = cljs.core.count.call(null,c__4409__auto__);
var G__12952 = (0);
seq__12937 = G__12949;
chunk__12938 = G__12950;
count__12939 = G__12951;
i__12940 = G__12952;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12937__$1);
var el_12953 = (form_node.elements[idx]);
var ky_12954 = cljs.core.keyword.call(null,el_12953.name);
var val_12955 = ky_12954.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12954)){
var val_12956__$1 = (cljs.core.truth_(val_12955)?val_12955:"");
enfocus.core.set_form_input.call(null,val_12956__$1).call(null,el_12953);
} else {
}

var G__12957 = cljs.core.next.call(null,seq__12937__$1);
var G__12958 = null;
var G__12959 = (0);
var G__12960 = (0);
seq__12937 = G__12957;
chunk__12938 = G__12958;
count__12939 = G__12959;
i__12940 = G__12960;
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
var vec__12970 = node_spec;
var tag = cljs.core.nth.call(null,vec__12970,(0),null);
var vec__12971 = cljs.core.nthnext.call(null,vec__12970,(1));
var m = cljs.core.nth.call(null,vec__12971,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12971,(1));
var more = vec__12971;
var vec__12972 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12972,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12972,(1));
var id = cljs.core.some.call(null,((function (vec__12970,tag,vec__12971,m,ms,more,vec__12972,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12970,tag,vec__12971,m,ms,more,vec__12972,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12970,tag,vec__12971,m,ms,more,vec__12972,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12970,tag,vec__12971,m,ms,more,vec__12972,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12973_12979 = cljs.core.seq.call(null,attrs__$2);
var chunk__12974_12980 = null;
var count__12975_12981 = (0);
var i__12976_12982 = (0);
while(true){
if((i__12976_12982 < count__12975_12981)){
var vec__12977_12983 = cljs.core._nth.call(null,chunk__12974_12980,i__12976_12982);
var key_12984 = cljs.core.nth.call(null,vec__12977_12983,(0),null);
var val_12985 = cljs.core.nth.call(null,vec__12977_12983,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12984),val_12985);

var G__12986 = seq__12973_12979;
var G__12987 = chunk__12974_12980;
var G__12988 = count__12975_12981;
var G__12989 = (i__12976_12982 + (1));
seq__12973_12979 = G__12986;
chunk__12974_12980 = G__12987;
count__12975_12981 = G__12988;
i__12976_12982 = G__12989;
continue;
} else {
var temp__4126__auto___12990 = cljs.core.seq.call(null,seq__12973_12979);
if(temp__4126__auto___12990){
var seq__12973_12991__$1 = temp__4126__auto___12990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12973_12991__$1)){
var c__4409__auto___12992 = cljs.core.chunk_first.call(null,seq__12973_12991__$1);
var G__12993 = cljs.core.chunk_rest.call(null,seq__12973_12991__$1);
var G__12994 = c__4409__auto___12992;
var G__12995 = cljs.core.count.call(null,c__4409__auto___12992);
var G__12996 = (0);
seq__12973_12979 = G__12993;
chunk__12974_12980 = G__12994;
count__12975_12981 = G__12995;
i__12976_12982 = G__12996;
continue;
} else {
var vec__12978_12997 = cljs.core.first.call(null,seq__12973_12991__$1);
var key_12998 = cljs.core.nth.call(null,vec__12978_12997,(0),null);
var val_12999 = cljs.core.nth.call(null,vec__12978_12997,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12998),val_12999);

var G__13000 = cljs.core.next.call(null,seq__12973_12991__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12973_12979 = G__13000;
chunk__12974_12980 = G__13001;
count__12975_12981 = G__13002;
i__12976_12982 = G__13003;
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
return (function (p1__13005_SHARP_,p2__13004_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__13004_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__13005_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__13005_SHARP_,vals);
} else {
return p1__13005_SHARP_;
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
if(typeof enfocus.core.t13010 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t13010 = (function (trans,read_form_input,meta13011){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta13011 = meta13011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t13010.prototype.call = ((function (trans){
return (function() {
var G__13014 = null;
var G__13014__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__13014__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__13014 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__13014__2.call(this,self__,nodes);
case 3:
return G__13014__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13014.cljs$core$IFn$_invoke$arity$2 = G__13014__2;
G__13014.cljs$core$IFn$_invoke$arity$3 = G__13014__3;
return G__13014;
})()
;})(trans))
;

enfocus.core.t13010.prototype.apply = ((function (trans){
return (function (self__,args13013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13013)));
});})(trans))
;

enfocus.core.t13010.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t13010.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t13010.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t13010.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t13010.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t13010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_13012){
var self__ = this;
var _13012__$1 = this;
return self__.meta13011;
});})(trans))
;

enfocus.core.t13010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_13012,meta13011__$1){
var self__ = this;
var _13012__$1 = this;
return (new enfocus.core.t13010(self__.trans,self__.read_form_input,meta13011__$1));
});})(trans))
;

enfocus.core.t13010.cljs$lang$type = true;

enfocus.core.t13010.cljs$lang$ctorStr = "enfocus.core/t13010";

enfocus.core.t13010.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t13010");
});})(trans))
;

enfocus.core.__GT_t13010 = ((function (trans){
return (function __GT_t13010(trans__$1,read_form_input__$1,meta13011){
return (new enfocus.core.t13010(trans__$1,read_form_input__$1,meta13011));
});})(trans))
;

}

return (new enfocus.core.t13010(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__13016_SHARP_,p2__13015_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__13015_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__13016_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__13015_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__13015_SHARP_)));
} else {
return p1__13016_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__13017_SHARP_){
if((p1__13017_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__13017_SHARP_);
} else {
if((p1__13017_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__13017_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__13017_SHARP_)){
return create_sel_str.call(null,p1__13017_SHARP_);
} else {
if(typeof p1__13017_SHARP_ === 'string'){
return p1__13017_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var or__3622__auto__ = func;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
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
var sel_QMARK_ = (function (){var and__3610__auto__ = !((node == null));
if(and__3610__auto__){
var G__13028 = node;
if(G__13028){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13028.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__13028.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13028);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13028);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__13029 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__13029,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__13029,(1),null);
var seq__13030 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__13031 = null;
var count__13032 = (0);
var i__13033 = (0);
while(true){
if((i__13033 < count__13032)){
var vec__13034 = cljs.core._nth.call(null,chunk__13031,i__13033);
var sel = cljs.core.nth.call(null,vec__13034,(0),null);
var t = cljs.core.nth.call(null,vec__13034,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__13036 = seq__13030;
var G__13037 = chunk__13031;
var G__13038 = count__13032;
var G__13039 = (i__13033 + (1));
seq__13030 = G__13036;
chunk__13031 = G__13037;
count__13032 = G__13038;
i__13033 = G__13039;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13030);
if(temp__4126__auto__){
var seq__13030__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13030__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__13030__$1);
var G__13040 = cljs.core.chunk_rest.call(null,seq__13030__$1);
var G__13041 = c__4409__auto__;
var G__13042 = cljs.core.count.call(null,c__4409__auto__);
var G__13043 = (0);
seq__13030 = G__13040;
chunk__13031 = G__13041;
count__13032 = G__13042;
i__13033 = G__13043;
continue;
} else {
var vec__13035 = cljs.core.first.call(null,seq__13030__$1);
var sel = cljs.core.nth.call(null,vec__13035,(0),null);
var t = cljs.core.nth.call(null,vec__13035,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__13044 = cljs.core.next.call(null,seq__13030__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__13030 = G__13044;
chunk__13031 = G__13045;
count__13032 = G__13046;
i__13033 = G__13047;
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
i_at.cljs$lang$applyTo = (function (arglist__13048){
var id_mask = cljs.core.first(arglist__13048);
arglist__13048 = cljs.core.next(arglist__13048);
var node = cljs.core.first(arglist__13048);
var trans = cljs.core.rest(arglist__13048);
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
at.cljs$lang$applyTo = (function (arglist__13049){
var node = cljs.core.first(arglist__13049);
var trans = cljs.core.rest(arglist__13049);
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
var sel_QMARK_ = (function (){var G__13054 = node;
if(G__13054){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13054.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__13054.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13054);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13054);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__13055 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__13055,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__13055,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__13055,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__13056){
var vec__13057 = p__13056;
var ky = cljs.core.nth.call(null,vec__13057,(0),null);
var sel = cljs.core.nth.call(null,vec__13057,(1),null);
var ext = cljs.core.nth.call(null,vec__13057,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__13055,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__13058){
var node = cljs.core.first(arglist__13058);
var trans = cljs.core.rest(arglist__13058);
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
var G__13059 = null;
var G__13059__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__13059__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__13059__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__13059 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13059__1.call(this,this$);
case 2:
return G__13059__2.call(this,this$,root);
case 3:
return G__13059__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13059.cljs$core$IFn$_invoke$arity$1 = G__13059__1;
G__13059.cljs$core$IFn$_invoke$arity$2 = G__13059__2;
G__13059.cljs$core$IFn$_invoke$arity$3 = G__13059__3;
return G__13059;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__13060 = null;
var G__13060__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13060__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13060__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__13060 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13060__1.call(this,this$);
case 2:
return G__13060__2.call(this,this$,root);
case 3:
return G__13060__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13060.cljs$core$IFn$_invoke$arity$1 = G__13060__1;
G__13060.cljs$core$IFn$_invoke$arity$2 = G__13060__2;
G__13060.cljs$core$IFn$_invoke$arity$3 = G__13060__3;
return G__13060;
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
var G__13061 = null;
var G__13061__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13061__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13061__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__13061 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13061__1.call(this,this$);
case 2:
return G__13061__2.call(this,this$,root);
case 3:
return G__13061__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13061.cljs$core$IFn$_invoke$arity$1 = G__13061__1;
G__13061.cljs$core$IFn$_invoke$arity$2 = G__13061__2;
G__13061.cljs$core$IFn$_invoke$arity$3 = G__13061__3;
return G__13061;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__13062 = null;
var G__13062__2 = (function (trans,nodes){
return nodes;
});
var G__13062__3 = (function (trans,nodes,chain){
return nodes;
});
G__13062 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13062__2.call(this,trans,nodes);
case 3:
return G__13062__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13062.cljs$core$IFn$_invoke$arity$2 = G__13062__2;
G__13062.cljs$core$IFn$_invoke$arity$3 = G__13062__3;
return G__13062;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__13063 = null;
var G__13063__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__13063__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__13063 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13063__2.call(this,trans,nodes);
case 3:
return G__13063__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13063.cljs$core$IFn$_invoke$arity$2 = G__13063__2;
G__13063.cljs$core$IFn$_invoke$arity$3 = G__13063__3;
return G__13063;
})()
);

//# sourceMappingURL=core.js.map