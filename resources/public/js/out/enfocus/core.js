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







enfocus.core.ISelector = (function (){var obj12446 = {};
return obj12446;
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


enfocus.core.ITransform = (function (){var obj12448 = {};
return obj12448;
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

return cljs.core.mapcat.call(null,(function (p1__12449_SHARP_){
if(typeof p1__12449_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__12449_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__12449_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__12456_12462 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__12457_12463 = null;
var count__12458_12464 = (0);
var i__12459_12465 = (0);
while(true){
if((i__12459_12465 < count__12458_12464)){
var vec__12460_12466 = cljs.core._nth.call(null,chunk__12457_12463,i__12459_12465);
var attr_12467 = cljs.core.nth.call(null,vec__12460_12466,(0),null);
var value_12468 = cljs.core.nth.call(null,vec__12460_12466,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12467),value_12468);

var G__12469 = seq__12456_12462;
var G__12470 = chunk__12457_12463;
var G__12471 = count__12458_12464;
var G__12472 = (i__12459_12465 + (1));
seq__12456_12462 = G__12469;
chunk__12457_12463 = G__12470;
count__12458_12464 = G__12471;
i__12459_12465 = G__12472;
continue;
} else {
var temp__4126__auto___12473 = cljs.core.seq.call(null,seq__12456_12462);
if(temp__4126__auto___12473){
var seq__12456_12474__$1 = temp__4126__auto___12473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12456_12474__$1)){
var c__4409__auto___12475 = cljs.core.chunk_first.call(null,seq__12456_12474__$1);
var G__12476 = cljs.core.chunk_rest.call(null,seq__12456_12474__$1);
var G__12477 = c__4409__auto___12475;
var G__12478 = cljs.core.count.call(null,c__4409__auto___12475);
var G__12479 = (0);
seq__12456_12462 = G__12476;
chunk__12457_12463 = G__12477;
count__12458_12464 = G__12478;
i__12459_12465 = G__12479;
continue;
} else {
var vec__12461_12480 = cljs.core.first.call(null,seq__12456_12474__$1);
var attr_12481 = cljs.core.nth.call(null,vec__12461_12480,(0),null);
var value_12482 = cljs.core.nth.call(null,vec__12461_12480,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12481),value_12482);

var G__12483 = cljs.core.next.call(null,seq__12456_12474__$1);
var G__12484 = null;
var G__12485 = (0);
var G__12486 = (0);
seq__12456_12462 = G__12483;
chunk__12457_12463 = G__12484;
count__12458_12464 = G__12485;
i__12459_12465 = G__12486;
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
var seq__12491 = cljs.core.seq.call(null,values);
var chunk__12492 = null;
var count__12493 = (0);
var i__12494 = (0);
while(true){
if((i__12494 < count__12493)){
var attr = cljs.core._nth.call(null,chunk__12492,i__12494);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12495 = seq__12491;
var G__12496 = chunk__12492;
var G__12497 = count__12493;
var G__12498 = (i__12494 + (1));
seq__12491 = G__12495;
chunk__12492 = G__12496;
count__12493 = G__12497;
i__12494 = G__12498;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12491);
if(temp__4126__auto__){
var seq__12491__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12491__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12491__$1);
var G__12499 = cljs.core.chunk_rest.call(null,seq__12491__$1);
var G__12500 = c__4409__auto__;
var G__12501 = cljs.core.count.call(null,c__4409__auto__);
var G__12502 = (0);
seq__12491 = G__12499;
chunk__12492 = G__12500;
count__12493 = G__12501;
i__12494 = G__12502;
continue;
} else {
var attr = cljs.core.first.call(null,seq__12491__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12503 = cljs.core.next.call(null,seq__12491__$1);
var G__12504 = null;
var G__12505 = (0);
var G__12506 = (0);
seq__12491 = G__12503;
chunk__12492 = G__12504;
count__12493 = G__12505;
i__12494 = G__12506;
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
var seq__12513_12519 = cljs.core.seq.call(null,ats);
var chunk__12514_12520 = null;
var count__12515_12521 = (0);
var i__12516_12522 = (0);
while(true){
if((i__12516_12522 < count__12515_12521)){
var vec__12517_12523 = cljs.core._nth.call(null,chunk__12514_12520,i__12516_12522);
var k_12524 = cljs.core.nth.call(null,vec__12517_12523,(0),null);
var v_12525 = cljs.core.nth.call(null,vec__12517_12523,(1),null);
add_map_attrs.call(null,elem,k_12524,v_12525);

var G__12526 = seq__12513_12519;
var G__12527 = chunk__12514_12520;
var G__12528 = count__12515_12521;
var G__12529 = (i__12516_12522 + (1));
seq__12513_12519 = G__12526;
chunk__12514_12520 = G__12527;
count__12515_12521 = G__12528;
i__12516_12522 = G__12529;
continue;
} else {
var temp__4126__auto___12530 = cljs.core.seq.call(null,seq__12513_12519);
if(temp__4126__auto___12530){
var seq__12513_12531__$1 = temp__4126__auto___12530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12513_12531__$1)){
var c__4409__auto___12532 = cljs.core.chunk_first.call(null,seq__12513_12531__$1);
var G__12533 = cljs.core.chunk_rest.call(null,seq__12513_12531__$1);
var G__12534 = c__4409__auto___12532;
var G__12535 = cljs.core.count.call(null,c__4409__auto___12532);
var G__12536 = (0);
seq__12513_12519 = G__12533;
chunk__12514_12520 = G__12534;
count__12515_12521 = G__12535;
i__12516_12522 = G__12536;
continue;
} else {
var vec__12518_12537 = cljs.core.first.call(null,seq__12513_12531__$1);
var k_12538 = cljs.core.nth.call(null,vec__12518_12537,(0),null);
var v_12539 = cljs.core.nth.call(null,vec__12518_12537,(1),null);
add_map_attrs.call(null,elem,k_12538,v_12539);

var G__12540 = cljs.core.next.call(null,seq__12513_12531__$1);
var G__12541 = null;
var G__12542 = (0);
var G__12543 = (0);
seq__12513_12519 = G__12540;
chunk__12514_12520 = G__12541;
count__12515_12521 = G__12542;
i__12516_12522 = G__12543;
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

var seq__12548_12552 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__12549_12553 = null;
var count__12550_12554 = (0);
var i__12551_12555 = (0);
while(true){
if((i__12551_12555 < count__12550_12554)){
var node_12556 = cljs.core._nth.call(null,chunk__12549_12553,i__12551_12555);
goog.dom.appendChild(div,node_12556);

var G__12557 = seq__12548_12552;
var G__12558 = chunk__12549_12553;
var G__12559 = count__12550_12554;
var G__12560 = (i__12551_12555 + (1));
seq__12548_12552 = G__12557;
chunk__12549_12553 = G__12558;
count__12550_12554 = G__12559;
i__12551_12555 = G__12560;
continue;
} else {
var temp__4126__auto___12561 = cljs.core.seq.call(null,seq__12548_12552);
if(temp__4126__auto___12561){
var seq__12548_12562__$1 = temp__4126__auto___12561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12548_12562__$1)){
var c__4409__auto___12563 = cljs.core.chunk_first.call(null,seq__12548_12562__$1);
var G__12564 = cljs.core.chunk_rest.call(null,seq__12548_12562__$1);
var G__12565 = c__4409__auto___12563;
var G__12566 = cljs.core.count.call(null,c__4409__auto___12563);
var G__12567 = (0);
seq__12548_12552 = G__12564;
chunk__12549_12553 = G__12565;
count__12550_12554 = G__12566;
i__12551_12555 = G__12567;
continue;
} else {
var node_12568 = cljs.core.first.call(null,seq__12548_12562__$1);
goog.dom.appendChild(div,node_12568);

var G__12569 = cljs.core.next.call(null,seq__12548_12562__$1);
var G__12570 = null;
var G__12571 = (0);
var G__12572 = (0);
seq__12548_12552 = G__12569;
chunk__12549_12553 = G__12570;
count__12550_12554 = G__12571;
i__12551_12555 = G__12572;
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
return (function (p1__12573_SHARP_){
var id = p1__12573_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12573_SHARP_.setAttribute("id",rid);
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
var vec__12575 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12575,(0),null);
var txt = cljs.core.nth.call(null,vec__12575,(1),null);
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

var seq__12580_12584 = cljs.core.seq.call(null,dfa);
var chunk__12581_12585 = null;
var count__12582_12586 = (0);
var i__12583_12587 = (0);
while(true){
if((i__12583_12587 < count__12582_12586)){
var df_12588 = cljs.core._nth.call(null,chunk__12581_12585,i__12583_12587);
goog.dom.append(frag,df_12588);

var G__12589 = seq__12580_12584;
var G__12590 = chunk__12581_12585;
var G__12591 = count__12582_12586;
var G__12592 = (i__12583_12587 + (1));
seq__12580_12584 = G__12589;
chunk__12581_12585 = G__12590;
count__12582_12586 = G__12591;
i__12583_12587 = G__12592;
continue;
} else {
var temp__4126__auto___12593 = cljs.core.seq.call(null,seq__12580_12584);
if(temp__4126__auto___12593){
var seq__12580_12594__$1 = temp__4126__auto___12593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12580_12594__$1)){
var c__4409__auto___12595 = cljs.core.chunk_first.call(null,seq__12580_12594__$1);
var G__12596 = cljs.core.chunk_rest.call(null,seq__12580_12594__$1);
var G__12597 = c__4409__auto___12595;
var G__12598 = cljs.core.count.call(null,c__4409__auto___12595);
var G__12599 = (0);
seq__12580_12584 = G__12596;
chunk__12581_12585 = G__12597;
count__12582_12586 = G__12598;
i__12583_12587 = G__12599;
continue;
} else {
var df_12600 = cljs.core.first.call(null,seq__12580_12594__$1);
goog.dom.append(frag,df_12600);

var G__12601 = cljs.core.next.call(null,seq__12580_12594__$1);
var G__12602 = null;
var G__12603 = (0);
var G__12604 = (0);
seq__12580_12584 = G__12601;
chunk__12581_12585 = G__12602;
count__12582_12586 = G__12603;
i__12583_12587 = G__12604;
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
var vec__12607 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12607,(0),null);
var tdom = cljs.core.nth.call(null,vec__12607,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12607,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12605_SHARP_){
return p1__12605_SHARP_.outerHTML;
});})(vec__12607,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t12612 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12612 = (function (trans,filt,func,extr_multi_node,meta12613){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12613 = meta12613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12612.prototype.call = ((function (trans){
return (function() {
var G__12616 = null;
var G__12616__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12616__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12616 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12616__2.call(this,self__,nodes);
case 3:
return G__12616__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12616.cljs$core$IFn$_invoke$arity$2 = G__12616__2;
G__12616.cljs$core$IFn$_invoke$arity$3 = G__12616__3;
return G__12616;
})()
;})(trans))
;

enfocus.core.t12612.prototype.apply = ((function (trans){
return (function (self__,args12615){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12615)));
});})(trans))
;

enfocus.core.t12612.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12612.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12612.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12612.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12612.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12614){
var self__ = this;
var _12614__$1 = this;
return self__.meta12613;
});})(trans))
;

enfocus.core.t12612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12614,meta12613__$1){
var self__ = this;
var _12614__$1 = this;
return (new enfocus.core.t12612(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12613__$1));
});})(trans))
;

enfocus.core.t12612.cljs$lang$type = true;

enfocus.core.t12612.cljs$lang$ctorStr = "enfocus.core/t12612";

enfocus.core.t12612.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12612");
});})(trans))
;

enfocus.core.__GT_t12612 = ((function (trans){
return (function __GT_t12612(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12613){
return (new enfocus.core.t12612(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12613));
});})(trans))
;

}

return (new enfocus.core.t12612(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t12626 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12626 = (function (trans,func,multi_node_chain,meta12627){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12627 = meta12627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12626.prototype.call = ((function (trans){
return (function() {
var G__12634 = null;
var G__12634__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12634__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12634 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12634__2.call(this,self__,nodes);
case 3:
return G__12634__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12634.cljs$core$IFn$_invoke$arity$2 = G__12634__2;
G__12634.cljs$core$IFn$_invoke$arity$3 = G__12634__3;
return G__12634;
})()
;})(trans))
;

enfocus.core.t12626.prototype.apply = ((function (trans){
return (function (self__,args12629){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12629)));
});})(trans))
;

enfocus.core.t12626.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12626.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12626.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12626.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12626.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12628){
var self__ = this;
var _12628__$1 = this;
return self__.meta12627;
});})(trans))
;

enfocus.core.t12626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12628,meta12627__$1){
var self__ = this;
var _12628__$1 = this;
return (new enfocus.core.t12626(self__.trans,self__.func,self__.multi_node_chain,meta12627__$1));
});})(trans))
;

enfocus.core.t12626.cljs$lang$type = true;

enfocus.core.t12626.cljs$lang$ctorStr = "enfocus.core/t12626";

enfocus.core.t12626.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12626");
});})(trans))
;

enfocus.core.__GT_t12626 = ((function (trans){
return (function __GT_t12626(trans__$1,func__$1,multi_node_chain__$1,meta12627){
return (new enfocus.core.t12626(trans__$1,func__$1,multi_node_chain__$1,meta12627));
});})(trans))
;

}

return (new enfocus.core.t12626(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12617_SHARP_){
return domina.nodes.call(null,p1__12617_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12630 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12630 = (function (trans,func,values,multi_node_chain,meta12631){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12631 = meta12631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12630.prototype.call = ((function (trans){
return (function() {
var G__12635 = null;
var G__12635__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12635__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12635 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12635__2.call(this,self__,nodes);
case 3:
return G__12635__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12635.cljs$core$IFn$_invoke$arity$2 = G__12635__2;
G__12635.cljs$core$IFn$_invoke$arity$3 = G__12635__3;
return G__12635;
})()
;})(trans))
;

enfocus.core.t12630.prototype.apply = ((function (trans){
return (function (self__,args12633){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12633)));
});})(trans))
;

enfocus.core.t12630.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12630.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12630.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12630.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12630.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12632){
var self__ = this;
var _12632__$1 = this;
return self__.meta12631;
});})(trans))
;

enfocus.core.t12630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12632,meta12631__$1){
var self__ = this;
var _12632__$1 = this;
return (new enfocus.core.t12630(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12631__$1));
});})(trans))
;

enfocus.core.t12630.cljs$lang$type = true;

enfocus.core.t12630.cljs$lang$ctorStr = "enfocus.core/t12630";

enfocus.core.t12630.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12630");
});})(trans))
;

enfocus.core.__GT_t12630 = ((function (trans){
return (function __GT_t12630(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12631){
return (new enfocus.core.t12630(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12631));
});})(trans))
;

}

return (new enfocus.core.t12630(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12636_SHARP_,p2__12637_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12636_SHARP_);

return domina.append_BANG_.call(null,p1__12636_SHARP_,p2__12637_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12638){
var values = cljs.core.seq(arglist__12638);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12639_SHARP_){
return domina.set_html_BANG_.call(null,p1__12639_SHARP_,txt);
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
return (function (p1__12640_SHARP_){
var seq__12647 = cljs.core.seq.call(null,pairs);
var chunk__12648 = null;
var count__12649 = (0);
var i__12650 = (0);
while(true){
if((i__12650 < count__12649)){
var vec__12651 = cljs.core._nth.call(null,chunk__12648,i__12650);
var name = cljs.core.nth.call(null,vec__12651,(0),null);
var value = cljs.core.nth.call(null,vec__12651,(1),null);
domina.set_attr_BANG_.call(null,p1__12640_SHARP_,name,value);

var G__12653 = seq__12647;
var G__12654 = chunk__12648;
var G__12655 = count__12649;
var G__12656 = (i__12650 + (1));
seq__12647 = G__12653;
chunk__12648 = G__12654;
count__12649 = G__12655;
i__12650 = G__12656;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12647);
if(temp__4126__auto__){
var seq__12647__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12647__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12647__$1);
var G__12657 = cljs.core.chunk_rest.call(null,seq__12647__$1);
var G__12658 = c__4409__auto__;
var G__12659 = cljs.core.count.call(null,c__4409__auto__);
var G__12660 = (0);
seq__12647 = G__12657;
chunk__12648 = G__12658;
count__12649 = G__12659;
i__12650 = G__12660;
continue;
} else {
var vec__12652 = cljs.core.first.call(null,seq__12647__$1);
var name = cljs.core.nth.call(null,vec__12652,(0),null);
var value = cljs.core.nth.call(null,vec__12652,(1),null);
domina.set_attr_BANG_.call(null,p1__12640_SHARP_,name,value);

var G__12661 = cljs.core.next.call(null,seq__12647__$1);
var G__12662 = null;
var G__12663 = (0);
var G__12664 = (0);
seq__12647 = G__12661;
chunk__12648 = G__12662;
count__12649 = G__12663;
i__12650 = G__12664;
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
set_attr.cljs$lang$applyTo = (function (arglist__12665){
var values = cljs.core.seq(arglist__12665);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12666_SHARP_){
var seq__12671 = cljs.core.seq.call(null,values);
var chunk__12672 = null;
var count__12673 = (0);
var i__12674 = (0);
while(true){
if((i__12674 < count__12673)){
var name = cljs.core._nth.call(null,chunk__12672,i__12674);
domina.remove_attr_BANG_.call(null,p1__12666_SHARP_,name);

var G__12675 = seq__12671;
var G__12676 = chunk__12672;
var G__12677 = count__12673;
var G__12678 = (i__12674 + (1));
seq__12671 = G__12675;
chunk__12672 = G__12676;
count__12673 = G__12677;
i__12674 = G__12678;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12671);
if(temp__4126__auto__){
var seq__12671__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12671__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12671__$1);
var G__12679 = cljs.core.chunk_rest.call(null,seq__12671__$1);
var G__12680 = c__4409__auto__;
var G__12681 = cljs.core.count.call(null,c__4409__auto__);
var G__12682 = (0);
seq__12671 = G__12679;
chunk__12672 = G__12680;
count__12673 = G__12681;
i__12674 = G__12682;
continue;
} else {
var name = cljs.core.first.call(null,seq__12671__$1);
domina.remove_attr_BANG_.call(null,p1__12666_SHARP_,name);

var G__12683 = cljs.core.next.call(null,seq__12671__$1);
var G__12684 = null;
var G__12685 = (0);
var G__12686 = (0);
seq__12671 = G__12683;
chunk__12672 = G__12684;
count__12673 = G__12685;
i__12674 = G__12686;
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
remove_attr.cljs$lang$applyTo = (function (arglist__12687){
var values = cljs.core.seq(arglist__12687);
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
var h = cljs.core.mapcat.call(null,(function (p__12690){
var vec__12691 = p__12690;
var n = cljs.core.nth.call(null,vec__12691,(0),null);
var v = cljs.core.nth.call(null,vec__12691,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__12692){
var forms = cljs.core.seq(arglist__12692);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12693_SHARP_){
var seq__12698 = cljs.core.seq.call(null,values);
var chunk__12699 = null;
var count__12700 = (0);
var i__12701 = (0);
while(true){
if((i__12701 < count__12700)){
var val = cljs.core._nth.call(null,chunk__12699,i__12701);
domina.add_class_BANG_.call(null,p1__12693_SHARP_,val);

var G__12702 = seq__12698;
var G__12703 = chunk__12699;
var G__12704 = count__12700;
var G__12705 = (i__12701 + (1));
seq__12698 = G__12702;
chunk__12699 = G__12703;
count__12700 = G__12704;
i__12701 = G__12705;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12698);
if(temp__4126__auto__){
var seq__12698__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12698__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12698__$1);
var G__12706 = cljs.core.chunk_rest.call(null,seq__12698__$1);
var G__12707 = c__4409__auto__;
var G__12708 = cljs.core.count.call(null,c__4409__auto__);
var G__12709 = (0);
seq__12698 = G__12706;
chunk__12699 = G__12707;
count__12700 = G__12708;
i__12701 = G__12709;
continue;
} else {
var val = cljs.core.first.call(null,seq__12698__$1);
domina.add_class_BANG_.call(null,p1__12693_SHARP_,val);

var G__12710 = cljs.core.next.call(null,seq__12698__$1);
var G__12711 = null;
var G__12712 = (0);
var G__12713 = (0);
seq__12698 = G__12710;
chunk__12699 = G__12711;
count__12700 = G__12712;
i__12701 = G__12713;
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
add_class.cljs$lang$applyTo = (function (arglist__12714){
var values = cljs.core.seq(arglist__12714);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12715_SHARP_){
var seq__12720 = cljs.core.seq.call(null,values);
var chunk__12721 = null;
var count__12722 = (0);
var i__12723 = (0);
while(true){
if((i__12723 < count__12722)){
var val = cljs.core._nth.call(null,chunk__12721,i__12723);
domina.remove_class_BANG_.call(null,p1__12715_SHARP_,val);

var G__12724 = seq__12720;
var G__12725 = chunk__12721;
var G__12726 = count__12722;
var G__12727 = (i__12723 + (1));
seq__12720 = G__12724;
chunk__12721 = G__12725;
count__12722 = G__12726;
i__12723 = G__12727;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12720);
if(temp__4126__auto__){
var seq__12720__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12720__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12720__$1);
var G__12728 = cljs.core.chunk_rest.call(null,seq__12720__$1);
var G__12729 = c__4409__auto__;
var G__12730 = cljs.core.count.call(null,c__4409__auto__);
var G__12731 = (0);
seq__12720 = G__12728;
chunk__12721 = G__12729;
count__12722 = G__12730;
i__12723 = G__12731;
continue;
} else {
var val = cljs.core.first.call(null,seq__12720__$1);
domina.remove_class_BANG_.call(null,p1__12715_SHARP_,val);

var G__12732 = cljs.core.next.call(null,seq__12720__$1);
var G__12733 = null;
var G__12734 = (0);
var G__12735 = (0);
seq__12720 = G__12732;
chunk__12721 = G__12733;
count__12722 = G__12734;
i__12723 = G__12735;
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
remove_class.cljs$lang$applyTo = (function (arglist__12736){
var values = cljs.core.seq(arglist__12736);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12737_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12737_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12738){
var values = cljs.core.seq(arglist__12738);
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
var seq__12743 = cljs.core.seq.call(null,forms);
var chunk__12744 = null;
var count__12745 = (0);
var i__12746 = (0);
while(true){
if((i__12746 < count__12745)){
var fun = cljs.core._nth.call(null,chunk__12744,i__12746);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12747 = seq__12743;
var G__12748 = chunk__12744;
var G__12749 = count__12745;
var G__12750 = (i__12746 + (1));
seq__12743 = G__12747;
chunk__12744 = G__12748;
count__12745 = G__12749;
i__12746 = G__12750;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12743);
if(temp__4126__auto__){
var seq__12743__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12743__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12743__$1);
var G__12751 = cljs.core.chunk_rest.call(null,seq__12743__$1);
var G__12752 = c__4409__auto__;
var G__12753 = cljs.core.count.call(null,c__4409__auto__);
var G__12754 = (0);
seq__12743 = G__12751;
chunk__12744 = G__12752;
count__12745 = G__12753;
i__12746 = G__12754;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12743__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12755 = cljs.core.next.call(null,seq__12743__$1);
var G__12756 = null;
var G__12757 = (0);
var G__12758 = (0);
seq__12743 = G__12755;
chunk__12744 = G__12756;
count__12745 = G__12757;
i__12746 = G__12758;
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
do__GT_.cljs$lang$applyTo = (function (arglist__12759){
var forms = cljs.core.seq(arglist__12759);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12760_SHARP_,p2__12761_SHARP_){
return domina.append_BANG_.call(null,p1__12760_SHARP_,p2__12761_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12762){
var values = cljs.core.seq(arglist__12762);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12763_SHARP_,p2__12764_SHARP_){
return domina.prepend_BANG_.call(null,p1__12763_SHARP_,p2__12764_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12765){
var values = cljs.core.seq(arglist__12765);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12766_SHARP_,p2__12767_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12766_SHARP_,p2__12767_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12768){
var values = cljs.core.seq(arglist__12768);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12769_SHARP_,p2__12770_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12769_SHARP_,p2__12770_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12771){
var values = cljs.core.seq(arglist__12771);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12772_SHARP_,p2__12773_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12772_SHARP_,p2__12773_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12774){
var values = cljs.core.seq(arglist__12774);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12775_SHARP_){
return domina.detach_BANG_.call(null,p1__12775_SHARP_);
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
return (function (p1__12776_SHARP_){
var seq__12783 = cljs.core.seq.call(null,pairs);
var chunk__12784 = null;
var count__12785 = (0);
var i__12786 = (0);
while(true){
if((i__12786 < count__12785)){
var vec__12787 = cljs.core._nth.call(null,chunk__12784,i__12786);
var name = cljs.core.nth.call(null,vec__12787,(0),null);
var value = cljs.core.nth.call(null,vec__12787,(1),null);
domina.set_style_BANG_.call(null,p1__12776_SHARP_,name,value);

var G__12789 = seq__12783;
var G__12790 = chunk__12784;
var G__12791 = count__12785;
var G__12792 = (i__12786 + (1));
seq__12783 = G__12789;
chunk__12784 = G__12790;
count__12785 = G__12791;
i__12786 = G__12792;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12783);
if(temp__4126__auto__){
var seq__12783__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12783__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12783__$1);
var G__12793 = cljs.core.chunk_rest.call(null,seq__12783__$1);
var G__12794 = c__4409__auto__;
var G__12795 = cljs.core.count.call(null,c__4409__auto__);
var G__12796 = (0);
seq__12783 = G__12793;
chunk__12784 = G__12794;
count__12785 = G__12795;
i__12786 = G__12796;
continue;
} else {
var vec__12788 = cljs.core.first.call(null,seq__12783__$1);
var name = cljs.core.nth.call(null,vec__12788,(0),null);
var value = cljs.core.nth.call(null,vec__12788,(1),null);
domina.set_style_BANG_.call(null,p1__12776_SHARP_,name,value);

var G__12797 = cljs.core.next.call(null,seq__12783__$1);
var G__12798 = null;
var G__12799 = (0);
var G__12800 = (0);
seq__12783 = G__12797;
chunk__12784 = G__12798;
count__12785 = G__12799;
i__12786 = G__12800;
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
set_style.cljs$lang$applyTo = (function (arglist__12801){
var values = cljs.core.seq(arglist__12801);
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
remove_style.cljs$lang$applyTo = (function (arglist__12802){
var values = cljs.core.seq(arglist__12802);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12803_SHARP_){
return domina.set_data_BANG_.call(null,p1__12803_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__12804){
var ttime = cljs.core.first(arglist__12804);
var funcs = cljs.core.rest(arglist__12804);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12806_SHARP_,p2__12805_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12805_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12831_12839 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12832_12840 = null;
var count__12833_12841 = (0);
var i__12834_12842 = (0);
while(true){
if((i__12834_12842 < count__12833_12841)){
var idx_12843 = cljs.core._nth.call(null,chunk__12832_12840,i__12834_12842);
var attr_12844 = pnod.attributes.item(idx_12843);
if(cljs.core.truth_(attr_12844.specified)){
attr_12844.value = rep_str.call(null,attr_12844.value);
} else {
}

var G__12845 = seq__12831_12839;
var G__12846 = chunk__12832_12840;
var G__12847 = count__12833_12841;
var G__12848 = (i__12834_12842 + (1));
seq__12831_12839 = G__12845;
chunk__12832_12840 = G__12846;
count__12833_12841 = G__12847;
i__12834_12842 = G__12848;
continue;
} else {
var temp__4126__auto___12849 = cljs.core.seq.call(null,seq__12831_12839);
if(temp__4126__auto___12849){
var seq__12831_12850__$1 = temp__4126__auto___12849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12831_12850__$1)){
var c__4409__auto___12851 = cljs.core.chunk_first.call(null,seq__12831_12850__$1);
var G__12852 = cljs.core.chunk_rest.call(null,seq__12831_12850__$1);
var G__12853 = c__4409__auto___12851;
var G__12854 = cljs.core.count.call(null,c__4409__auto___12851);
var G__12855 = (0);
seq__12831_12839 = G__12852;
chunk__12832_12840 = G__12853;
count__12833_12841 = G__12854;
i__12834_12842 = G__12855;
continue;
} else {
var idx_12856 = cljs.core.first.call(null,seq__12831_12850__$1);
var attr_12857 = pnod.attributes.item(idx_12856);
if(cljs.core.truth_(attr_12857.specified)){
attr_12857.value = rep_str.call(null,attr_12857.value);
} else {
}

var G__12858 = cljs.core.next.call(null,seq__12831_12850__$1);
var G__12859 = null;
var G__12860 = (0);
var G__12861 = (0);
seq__12831_12839 = G__12858;
chunk__12832_12840 = G__12859;
count__12833_12841 = G__12860;
i__12834_12842 = G__12861;
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
var seq__12835 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12836 = null;
var count__12837 = (0);
var i__12838 = (0);
while(true){
if((i__12838 < count__12837)){
var cnode = cljs.core._nth.call(null,chunk__12836,i__12838);
rep_node.call(null,cnode);

var G__12862 = seq__12835;
var G__12863 = chunk__12836;
var G__12864 = count__12837;
var G__12865 = (i__12838 + (1));
seq__12835 = G__12862;
chunk__12836 = G__12863;
count__12837 = G__12864;
i__12838 = G__12865;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12835);
if(temp__4126__auto__){
var seq__12835__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12835__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12835__$1);
var G__12866 = cljs.core.chunk_rest.call(null,seq__12835__$1);
var G__12867 = c__4409__auto__;
var G__12868 = cljs.core.count.call(null,c__4409__auto__);
var G__12869 = (0);
seq__12835 = G__12866;
chunk__12836 = G__12867;
count__12837 = G__12868;
i__12838 = G__12869;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12835__$1);
rep_node.call(null,cnode);

var G__12870 = cljs.core.next.call(null,seq__12835__$1);
var G__12871 = null;
var G__12872 = (0);
var G__12873 = (0);
seq__12835 = G__12870;
chunk__12836 = G__12871;
count__12837 = G__12872;
i__12838 = G__12873;
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
var seq__12878 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12879 = null;
var count__12880 = (0);
var i__12881 = (0);
while(true){
if((i__12881 < count__12880)){
var idx = cljs.core._nth.call(null,chunk__12879,i__12881);
var el_12882 = (form_node.elements[idx]);
var ky_12883 = cljs.core.keyword.call(null,el_12882.name);
var val_12884 = ky_12883.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12883)){
var val_12885__$1 = (cljs.core.truth_(val_12884)?val_12884:"");
enfocus.core.set_form_input.call(null,val_12885__$1).call(null,el_12882);
} else {
}

var G__12886 = seq__12878;
var G__12887 = chunk__12879;
var G__12888 = count__12880;
var G__12889 = (i__12881 + (1));
seq__12878 = G__12886;
chunk__12879 = G__12887;
count__12880 = G__12888;
i__12881 = G__12889;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12878);
if(temp__4126__auto__){
var seq__12878__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12878__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12878__$1);
var G__12890 = cljs.core.chunk_rest.call(null,seq__12878__$1);
var G__12891 = c__4409__auto__;
var G__12892 = cljs.core.count.call(null,c__4409__auto__);
var G__12893 = (0);
seq__12878 = G__12890;
chunk__12879 = G__12891;
count__12880 = G__12892;
i__12881 = G__12893;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12878__$1);
var el_12894 = (form_node.elements[idx]);
var ky_12895 = cljs.core.keyword.call(null,el_12894.name);
var val_12896 = ky_12895.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12895)){
var val_12897__$1 = (cljs.core.truth_(val_12896)?val_12896:"");
enfocus.core.set_form_input.call(null,val_12897__$1).call(null,el_12894);
} else {
}

var G__12898 = cljs.core.next.call(null,seq__12878__$1);
var G__12899 = null;
var G__12900 = (0);
var G__12901 = (0);
seq__12878 = G__12898;
chunk__12879 = G__12899;
count__12880 = G__12900;
i__12881 = G__12901;
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
var vec__12911 = node_spec;
var tag = cljs.core.nth.call(null,vec__12911,(0),null);
var vec__12912 = cljs.core.nthnext.call(null,vec__12911,(1));
var m = cljs.core.nth.call(null,vec__12912,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12912,(1));
var more = vec__12912;
var vec__12913 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12913,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12913,(1));
var id = cljs.core.some.call(null,((function (vec__12911,tag,vec__12912,m,ms,more,vec__12913,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12911,tag,vec__12912,m,ms,more,vec__12913,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12911,tag,vec__12912,m,ms,more,vec__12913,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12911,tag,vec__12912,m,ms,more,vec__12913,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12914_12920 = cljs.core.seq.call(null,attrs__$2);
var chunk__12915_12921 = null;
var count__12916_12922 = (0);
var i__12917_12923 = (0);
while(true){
if((i__12917_12923 < count__12916_12922)){
var vec__12918_12924 = cljs.core._nth.call(null,chunk__12915_12921,i__12917_12923);
var key_12925 = cljs.core.nth.call(null,vec__12918_12924,(0),null);
var val_12926 = cljs.core.nth.call(null,vec__12918_12924,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12925),val_12926);

var G__12927 = seq__12914_12920;
var G__12928 = chunk__12915_12921;
var G__12929 = count__12916_12922;
var G__12930 = (i__12917_12923 + (1));
seq__12914_12920 = G__12927;
chunk__12915_12921 = G__12928;
count__12916_12922 = G__12929;
i__12917_12923 = G__12930;
continue;
} else {
var temp__4126__auto___12931 = cljs.core.seq.call(null,seq__12914_12920);
if(temp__4126__auto___12931){
var seq__12914_12932__$1 = temp__4126__auto___12931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12914_12932__$1)){
var c__4409__auto___12933 = cljs.core.chunk_first.call(null,seq__12914_12932__$1);
var G__12934 = cljs.core.chunk_rest.call(null,seq__12914_12932__$1);
var G__12935 = c__4409__auto___12933;
var G__12936 = cljs.core.count.call(null,c__4409__auto___12933);
var G__12937 = (0);
seq__12914_12920 = G__12934;
chunk__12915_12921 = G__12935;
count__12916_12922 = G__12936;
i__12917_12923 = G__12937;
continue;
} else {
var vec__12919_12938 = cljs.core.first.call(null,seq__12914_12932__$1);
var key_12939 = cljs.core.nth.call(null,vec__12919_12938,(0),null);
var val_12940 = cljs.core.nth.call(null,vec__12919_12938,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12939),val_12940);

var G__12941 = cljs.core.next.call(null,seq__12914_12932__$1);
var G__12942 = null;
var G__12943 = (0);
var G__12944 = (0);
seq__12914_12920 = G__12941;
chunk__12915_12921 = G__12942;
count__12916_12922 = G__12943;
i__12917_12923 = G__12944;
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
return (function (p1__12946_SHARP_,p2__12945_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__12945_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__12946_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__12946_SHARP_,vals);
} else {
return p1__12946_SHARP_;
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
if(typeof enfocus.core.t12951 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12951 = (function (trans,read_form_input,meta12952){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta12952 = meta12952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12951.prototype.call = ((function (trans){
return (function() {
var G__12955 = null;
var G__12955__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12955__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12955 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12955__2.call(this,self__,nodes);
case 3:
return G__12955__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12955.cljs$core$IFn$_invoke$arity$2 = G__12955__2;
G__12955.cljs$core$IFn$_invoke$arity$3 = G__12955__3;
return G__12955;
})()
;})(trans))
;

enfocus.core.t12951.prototype.apply = ((function (trans){
return (function (self__,args12954){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12954)));
});})(trans))
;

enfocus.core.t12951.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12951.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12951.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12951.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12951.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12953){
var self__ = this;
var _12953__$1 = this;
return self__.meta12952;
});})(trans))
;

enfocus.core.t12951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12953,meta12952__$1){
var self__ = this;
var _12953__$1 = this;
return (new enfocus.core.t12951(self__.trans,self__.read_form_input,meta12952__$1));
});})(trans))
;

enfocus.core.t12951.cljs$lang$type = true;

enfocus.core.t12951.cljs$lang$ctorStr = "enfocus.core/t12951";

enfocus.core.t12951.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12951");
});})(trans))
;

enfocus.core.__GT_t12951 = ((function (trans){
return (function __GT_t12951(trans__$1,read_form_input__$1,meta12952){
return (new enfocus.core.t12951(trans__$1,read_form_input__$1,meta12952));
});})(trans))
;

}

return (new enfocus.core.t12951(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__12957_SHARP_,p2__12956_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__12956_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__12957_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__12956_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__12956_SHARP_)));
} else {
return p1__12957_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12958_SHARP_){
if((p1__12958_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__12958_SHARP_);
} else {
if((p1__12958_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12958_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__12958_SHARP_)){
return create_sel_str.call(null,p1__12958_SHARP_);
} else {
if(typeof p1__12958_SHARP_ === 'string'){
return p1__12958_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__12969 = node;
if(G__12969){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__12969.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12969.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12969);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12969);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12970 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12970,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12970,(1),null);
var seq__12971 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__12972 = null;
var count__12973 = (0);
var i__12974 = (0);
while(true){
if((i__12974 < count__12973)){
var vec__12975 = cljs.core._nth.call(null,chunk__12972,i__12974);
var sel = cljs.core.nth.call(null,vec__12975,(0),null);
var t = cljs.core.nth.call(null,vec__12975,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12977 = seq__12971;
var G__12978 = chunk__12972;
var G__12979 = count__12973;
var G__12980 = (i__12974 + (1));
seq__12971 = G__12977;
chunk__12972 = G__12978;
count__12973 = G__12979;
i__12974 = G__12980;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12971);
if(temp__4126__auto__){
var seq__12971__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12971__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12971__$1);
var G__12981 = cljs.core.chunk_rest.call(null,seq__12971__$1);
var G__12982 = c__4409__auto__;
var G__12983 = cljs.core.count.call(null,c__4409__auto__);
var G__12984 = (0);
seq__12971 = G__12981;
chunk__12972 = G__12982;
count__12973 = G__12983;
i__12974 = G__12984;
continue;
} else {
var vec__12976 = cljs.core.first.call(null,seq__12971__$1);
var sel = cljs.core.nth.call(null,vec__12976,(0),null);
var t = cljs.core.nth.call(null,vec__12976,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12985 = cljs.core.next.call(null,seq__12971__$1);
var G__12986 = null;
var G__12987 = (0);
var G__12988 = (0);
seq__12971 = G__12985;
chunk__12972 = G__12986;
count__12973 = G__12987;
i__12974 = G__12988;
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
i_at.cljs$lang$applyTo = (function (arglist__12989){
var id_mask = cljs.core.first(arglist__12989);
arglist__12989 = cljs.core.next(arglist__12989);
var node = cljs.core.first(arglist__12989);
var trans = cljs.core.rest(arglist__12989);
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
at.cljs$lang$applyTo = (function (arglist__12990){
var node = cljs.core.first(arglist__12990);
var trans = cljs.core.rest(arglist__12990);
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
var sel_QMARK_ = (function (){var G__12995 = node;
if(G__12995){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__12995.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12995);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12996 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12996,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12996,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__12996,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__12997){
var vec__12998 = p__12997;
var ky = cljs.core.nth.call(null,vec__12998,(0),null);
var sel = cljs.core.nth.call(null,vec__12998,(1),null);
var ext = cljs.core.nth.call(null,vec__12998,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__12996,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__12999){
var node = cljs.core.first(arglist__12999);
var trans = cljs.core.rest(arglist__12999);
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
var G__13000 = null;
var G__13000__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__13000__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__13000__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__13000 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13000__1.call(this,this$);
case 2:
return G__13000__2.call(this,this$,root);
case 3:
return G__13000__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13000.cljs$core$IFn$_invoke$arity$1 = G__13000__1;
G__13000.cljs$core$IFn$_invoke$arity$2 = G__13000__2;
G__13000.cljs$core$IFn$_invoke$arity$3 = G__13000__3;
return G__13000;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__13001 = null;
var G__13001__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13001__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13001__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__13001 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13001__1.call(this,this$);
case 2:
return G__13001__2.call(this,this$,root);
case 3:
return G__13001__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13001.cljs$core$IFn$_invoke$arity$1 = G__13001__1;
G__13001.cljs$core$IFn$_invoke$arity$2 = G__13001__2;
G__13001.cljs$core$IFn$_invoke$arity$3 = G__13001__3;
return G__13001;
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
var G__13002 = null;
var G__13002__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13002__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13002__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__13002 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13002__1.call(this,this$);
case 2:
return G__13002__2.call(this,this$,root);
case 3:
return G__13002__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13002.cljs$core$IFn$_invoke$arity$1 = G__13002__1;
G__13002.cljs$core$IFn$_invoke$arity$2 = G__13002__2;
G__13002.cljs$core$IFn$_invoke$arity$3 = G__13002__3;
return G__13002;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__13003 = null;
var G__13003__2 = (function (trans,nodes){
return nodes;
});
var G__13003__3 = (function (trans,nodes,chain){
return nodes;
});
G__13003 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13003__2.call(this,trans,nodes);
case 3:
return G__13003__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13003.cljs$core$IFn$_invoke$arity$2 = G__13003__2;
G__13003.cljs$core$IFn$_invoke$arity$3 = G__13003__3;
return G__13003;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__13004 = null;
var G__13004__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__13004__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__13004 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13004__2.call(this,trans,nodes);
case 3:
return G__13004__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13004.cljs$core$IFn$_invoke$arity$2 = G__13004__2;
G__13004.cljs$core$IFn$_invoke$arity$3 = G__13004__3;
return G__13004;
})()
);

//# sourceMappingURL=core.js.map