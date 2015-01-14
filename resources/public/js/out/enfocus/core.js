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







enfocus.core.ISelector = (function (){var obj12455 = {};
return obj12455;
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


enfocus.core.ITransform = (function (){var obj12457 = {};
return obj12457;
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

return cljs.core.mapcat.call(null,(function (p1__12458_SHARP_){
if(typeof p1__12458_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__12458_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__12458_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__12465_12471 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__12466_12472 = null;
var count__12467_12473 = (0);
var i__12468_12474 = (0);
while(true){
if((i__12468_12474 < count__12467_12473)){
var vec__12469_12475 = cljs.core._nth.call(null,chunk__12466_12472,i__12468_12474);
var attr_12476 = cljs.core.nth.call(null,vec__12469_12475,(0),null);
var value_12477 = cljs.core.nth.call(null,vec__12469_12475,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12476),value_12477);

var G__12478 = seq__12465_12471;
var G__12479 = chunk__12466_12472;
var G__12480 = count__12467_12473;
var G__12481 = (i__12468_12474 + (1));
seq__12465_12471 = G__12478;
chunk__12466_12472 = G__12479;
count__12467_12473 = G__12480;
i__12468_12474 = G__12481;
continue;
} else {
var temp__4126__auto___12482 = cljs.core.seq.call(null,seq__12465_12471);
if(temp__4126__auto___12482){
var seq__12465_12483__$1 = temp__4126__auto___12482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12465_12483__$1)){
var c__4409__auto___12484 = cljs.core.chunk_first.call(null,seq__12465_12483__$1);
var G__12485 = cljs.core.chunk_rest.call(null,seq__12465_12483__$1);
var G__12486 = c__4409__auto___12484;
var G__12487 = cljs.core.count.call(null,c__4409__auto___12484);
var G__12488 = (0);
seq__12465_12471 = G__12485;
chunk__12466_12472 = G__12486;
count__12467_12473 = G__12487;
i__12468_12474 = G__12488;
continue;
} else {
var vec__12470_12489 = cljs.core.first.call(null,seq__12465_12483__$1);
var attr_12490 = cljs.core.nth.call(null,vec__12470_12489,(0),null);
var value_12491 = cljs.core.nth.call(null,vec__12470_12489,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_12490),value_12491);

var G__12492 = cljs.core.next.call(null,seq__12465_12483__$1);
var G__12493 = null;
var G__12494 = (0);
var G__12495 = (0);
seq__12465_12471 = G__12492;
chunk__12466_12472 = G__12493;
count__12467_12473 = G__12494;
i__12468_12474 = G__12495;
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
var seq__12500 = cljs.core.seq.call(null,values);
var chunk__12501 = null;
var count__12502 = (0);
var i__12503 = (0);
while(true){
if((i__12503 < count__12502)){
var attr = cljs.core._nth.call(null,chunk__12501,i__12503);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12504 = seq__12500;
var G__12505 = chunk__12501;
var G__12506 = count__12502;
var G__12507 = (i__12503 + (1));
seq__12500 = G__12504;
chunk__12501 = G__12505;
count__12502 = G__12506;
i__12503 = G__12507;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12500);
if(temp__4126__auto__){
var seq__12500__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12500__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12500__$1);
var G__12508 = cljs.core.chunk_rest.call(null,seq__12500__$1);
var G__12509 = c__4409__auto__;
var G__12510 = cljs.core.count.call(null,c__4409__auto__);
var G__12511 = (0);
seq__12500 = G__12508;
chunk__12501 = G__12509;
count__12502 = G__12510;
i__12503 = G__12511;
continue;
} else {
var attr = cljs.core.first.call(null,seq__12500__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__12512 = cljs.core.next.call(null,seq__12500__$1);
var G__12513 = null;
var G__12514 = (0);
var G__12515 = (0);
seq__12500 = G__12512;
chunk__12501 = G__12513;
count__12502 = G__12514;
i__12503 = G__12515;
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
var seq__12522_12528 = cljs.core.seq.call(null,ats);
var chunk__12523_12529 = null;
var count__12524_12530 = (0);
var i__12525_12531 = (0);
while(true){
if((i__12525_12531 < count__12524_12530)){
var vec__12526_12532 = cljs.core._nth.call(null,chunk__12523_12529,i__12525_12531);
var k_12533 = cljs.core.nth.call(null,vec__12526_12532,(0),null);
var v_12534 = cljs.core.nth.call(null,vec__12526_12532,(1),null);
add_map_attrs.call(null,elem,k_12533,v_12534);

var G__12535 = seq__12522_12528;
var G__12536 = chunk__12523_12529;
var G__12537 = count__12524_12530;
var G__12538 = (i__12525_12531 + (1));
seq__12522_12528 = G__12535;
chunk__12523_12529 = G__12536;
count__12524_12530 = G__12537;
i__12525_12531 = G__12538;
continue;
} else {
var temp__4126__auto___12539 = cljs.core.seq.call(null,seq__12522_12528);
if(temp__4126__auto___12539){
var seq__12522_12540__$1 = temp__4126__auto___12539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12522_12540__$1)){
var c__4409__auto___12541 = cljs.core.chunk_first.call(null,seq__12522_12540__$1);
var G__12542 = cljs.core.chunk_rest.call(null,seq__12522_12540__$1);
var G__12543 = c__4409__auto___12541;
var G__12544 = cljs.core.count.call(null,c__4409__auto___12541);
var G__12545 = (0);
seq__12522_12528 = G__12542;
chunk__12523_12529 = G__12543;
count__12524_12530 = G__12544;
i__12525_12531 = G__12545;
continue;
} else {
var vec__12527_12546 = cljs.core.first.call(null,seq__12522_12540__$1);
var k_12547 = cljs.core.nth.call(null,vec__12527_12546,(0),null);
var v_12548 = cljs.core.nth.call(null,vec__12527_12546,(1),null);
add_map_attrs.call(null,elem,k_12547,v_12548);

var G__12549 = cljs.core.next.call(null,seq__12522_12540__$1);
var G__12550 = null;
var G__12551 = (0);
var G__12552 = (0);
seq__12522_12528 = G__12549;
chunk__12523_12529 = G__12550;
count__12524_12530 = G__12551;
i__12525_12531 = G__12552;
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

var seq__12557_12561 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__12558_12562 = null;
var count__12559_12563 = (0);
var i__12560_12564 = (0);
while(true){
if((i__12560_12564 < count__12559_12563)){
var node_12565 = cljs.core._nth.call(null,chunk__12558_12562,i__12560_12564);
goog.dom.appendChild(div,node_12565);

var G__12566 = seq__12557_12561;
var G__12567 = chunk__12558_12562;
var G__12568 = count__12559_12563;
var G__12569 = (i__12560_12564 + (1));
seq__12557_12561 = G__12566;
chunk__12558_12562 = G__12567;
count__12559_12563 = G__12568;
i__12560_12564 = G__12569;
continue;
} else {
var temp__4126__auto___12570 = cljs.core.seq.call(null,seq__12557_12561);
if(temp__4126__auto___12570){
var seq__12557_12571__$1 = temp__4126__auto___12570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12557_12571__$1)){
var c__4409__auto___12572 = cljs.core.chunk_first.call(null,seq__12557_12571__$1);
var G__12573 = cljs.core.chunk_rest.call(null,seq__12557_12571__$1);
var G__12574 = c__4409__auto___12572;
var G__12575 = cljs.core.count.call(null,c__4409__auto___12572);
var G__12576 = (0);
seq__12557_12561 = G__12573;
chunk__12558_12562 = G__12574;
count__12559_12563 = G__12575;
i__12560_12564 = G__12576;
continue;
} else {
var node_12577 = cljs.core.first.call(null,seq__12557_12571__$1);
goog.dom.appendChild(div,node_12577);

var G__12578 = cljs.core.next.call(null,seq__12557_12571__$1);
var G__12579 = null;
var G__12580 = (0);
var G__12581 = (0);
seq__12557_12561 = G__12578;
chunk__12558_12562 = G__12579;
count__12559_12563 = G__12580;
i__12560_12564 = G__12581;
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
return (function (p1__12582_SHARP_){
var id = p1__12582_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12582_SHARP_.setAttribute("id",rid);
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
var vec__12584 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12584,(0),null);
var txt = cljs.core.nth.call(null,vec__12584,(1),null);
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

var seq__12589_12593 = cljs.core.seq.call(null,dfa);
var chunk__12590_12594 = null;
var count__12591_12595 = (0);
var i__12592_12596 = (0);
while(true){
if((i__12592_12596 < count__12591_12595)){
var df_12597 = cljs.core._nth.call(null,chunk__12590_12594,i__12592_12596);
goog.dom.append(frag,df_12597);

var G__12598 = seq__12589_12593;
var G__12599 = chunk__12590_12594;
var G__12600 = count__12591_12595;
var G__12601 = (i__12592_12596 + (1));
seq__12589_12593 = G__12598;
chunk__12590_12594 = G__12599;
count__12591_12595 = G__12600;
i__12592_12596 = G__12601;
continue;
} else {
var temp__4126__auto___12602 = cljs.core.seq.call(null,seq__12589_12593);
if(temp__4126__auto___12602){
var seq__12589_12603__$1 = temp__4126__auto___12602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12589_12603__$1)){
var c__4409__auto___12604 = cljs.core.chunk_first.call(null,seq__12589_12603__$1);
var G__12605 = cljs.core.chunk_rest.call(null,seq__12589_12603__$1);
var G__12606 = c__4409__auto___12604;
var G__12607 = cljs.core.count.call(null,c__4409__auto___12604);
var G__12608 = (0);
seq__12589_12593 = G__12605;
chunk__12590_12594 = G__12606;
count__12591_12595 = G__12607;
i__12592_12596 = G__12608;
continue;
} else {
var df_12609 = cljs.core.first.call(null,seq__12589_12603__$1);
goog.dom.append(frag,df_12609);

var G__12610 = cljs.core.next.call(null,seq__12589_12603__$1);
var G__12611 = null;
var G__12612 = (0);
var G__12613 = (0);
seq__12589_12593 = G__12610;
chunk__12590_12594 = G__12611;
count__12591_12595 = G__12612;
i__12592_12596 = G__12613;
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
var vec__12616 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12616,(0),null);
var tdom = cljs.core.nth.call(null,vec__12616,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12616,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12614_SHARP_){
return p1__12614_SHARP_.outerHTML;
});})(vec__12616,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t12621 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12621 = (function (trans,filt,func,extr_multi_node,meta12622){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12622 = meta12622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12621.prototype.call = ((function (trans){
return (function() {
var G__12625 = null;
var G__12625__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12625__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12625 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12625__2.call(this,self__,nodes);
case 3:
return G__12625__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12625.cljs$core$IFn$_invoke$arity$2 = G__12625__2;
G__12625.cljs$core$IFn$_invoke$arity$3 = G__12625__3;
return G__12625;
})()
;})(trans))
;

enfocus.core.t12621.prototype.apply = ((function (trans){
return (function (self__,args12624){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12624)));
});})(trans))
;

enfocus.core.t12621.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12621.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12621.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12621.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12621.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12623){
var self__ = this;
var _12623__$1 = this;
return self__.meta12622;
});})(trans))
;

enfocus.core.t12621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12623,meta12622__$1){
var self__ = this;
var _12623__$1 = this;
return (new enfocus.core.t12621(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12622__$1));
});})(trans))
;

enfocus.core.t12621.cljs$lang$type = true;

enfocus.core.t12621.cljs$lang$ctorStr = "enfocus.core/t12621";

enfocus.core.t12621.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12621");
});})(trans))
;

enfocus.core.__GT_t12621 = ((function (trans){
return (function __GT_t12621(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12622){
return (new enfocus.core.t12621(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12622));
});})(trans))
;

}

return (new enfocus.core.t12621(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t12635 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12635 = (function (trans,func,multi_node_chain,meta12636){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12636 = meta12636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12635.prototype.call = ((function (trans){
return (function() {
var G__12643 = null;
var G__12643__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12643__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12643 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12643__2.call(this,self__,nodes);
case 3:
return G__12643__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12643.cljs$core$IFn$_invoke$arity$2 = G__12643__2;
G__12643.cljs$core$IFn$_invoke$arity$3 = G__12643__3;
return G__12643;
})()
;})(trans))
;

enfocus.core.t12635.prototype.apply = ((function (trans){
return (function (self__,args12638){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12638)));
});})(trans))
;

enfocus.core.t12635.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12635.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12635.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12635.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12635.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12637){
var self__ = this;
var _12637__$1 = this;
return self__.meta12636;
});})(trans))
;

enfocus.core.t12635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12637,meta12636__$1){
var self__ = this;
var _12637__$1 = this;
return (new enfocus.core.t12635(self__.trans,self__.func,self__.multi_node_chain,meta12636__$1));
});})(trans))
;

enfocus.core.t12635.cljs$lang$type = true;

enfocus.core.t12635.cljs$lang$ctorStr = "enfocus.core/t12635";

enfocus.core.t12635.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12635");
});})(trans))
;

enfocus.core.__GT_t12635 = ((function (trans){
return (function __GT_t12635(trans__$1,func__$1,multi_node_chain__$1,meta12636){
return (new enfocus.core.t12635(trans__$1,func__$1,multi_node_chain__$1,meta12636));
});})(trans))
;

}

return (new enfocus.core.t12635(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12626_SHARP_){
return domina.nodes.call(null,p1__12626_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12639 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12639 = (function (trans,func,values,multi_node_chain,meta12640){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12640 = meta12640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12639.prototype.call = ((function (trans){
return (function() {
var G__12644 = null;
var G__12644__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12644__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12644 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12644__2.call(this,self__,nodes);
case 3:
return G__12644__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12644.cljs$core$IFn$_invoke$arity$2 = G__12644__2;
G__12644.cljs$core$IFn$_invoke$arity$3 = G__12644__3;
return G__12644;
})()
;})(trans))
;

enfocus.core.t12639.prototype.apply = ((function (trans){
return (function (self__,args12642){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12642)));
});})(trans))
;

enfocus.core.t12639.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12639.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12639.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12639.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12639.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12641){
var self__ = this;
var _12641__$1 = this;
return self__.meta12640;
});})(trans))
;

enfocus.core.t12639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12641,meta12640__$1){
var self__ = this;
var _12641__$1 = this;
return (new enfocus.core.t12639(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12640__$1));
});})(trans))
;

enfocus.core.t12639.cljs$lang$type = true;

enfocus.core.t12639.cljs$lang$ctorStr = "enfocus.core/t12639";

enfocus.core.t12639.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12639");
});})(trans))
;

enfocus.core.__GT_t12639 = ((function (trans){
return (function __GT_t12639(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12640){
return (new enfocus.core.t12639(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12640));
});})(trans))
;

}

return (new enfocus.core.t12639(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12645_SHARP_,p2__12646_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12645_SHARP_);

return domina.append_BANG_.call(null,p1__12645_SHARP_,p2__12646_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12647){
var values = cljs.core.seq(arglist__12647);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12648_SHARP_){
return domina.set_html_BANG_.call(null,p1__12648_SHARP_,txt);
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
return (function (p1__12649_SHARP_){
var seq__12656 = cljs.core.seq.call(null,pairs);
var chunk__12657 = null;
var count__12658 = (0);
var i__12659 = (0);
while(true){
if((i__12659 < count__12658)){
var vec__12660 = cljs.core._nth.call(null,chunk__12657,i__12659);
var name = cljs.core.nth.call(null,vec__12660,(0),null);
var value = cljs.core.nth.call(null,vec__12660,(1),null);
domina.set_attr_BANG_.call(null,p1__12649_SHARP_,name,value);

var G__12662 = seq__12656;
var G__12663 = chunk__12657;
var G__12664 = count__12658;
var G__12665 = (i__12659 + (1));
seq__12656 = G__12662;
chunk__12657 = G__12663;
count__12658 = G__12664;
i__12659 = G__12665;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12656);
if(temp__4126__auto__){
var seq__12656__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12656__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12656__$1);
var G__12666 = cljs.core.chunk_rest.call(null,seq__12656__$1);
var G__12667 = c__4409__auto__;
var G__12668 = cljs.core.count.call(null,c__4409__auto__);
var G__12669 = (0);
seq__12656 = G__12666;
chunk__12657 = G__12667;
count__12658 = G__12668;
i__12659 = G__12669;
continue;
} else {
var vec__12661 = cljs.core.first.call(null,seq__12656__$1);
var name = cljs.core.nth.call(null,vec__12661,(0),null);
var value = cljs.core.nth.call(null,vec__12661,(1),null);
domina.set_attr_BANG_.call(null,p1__12649_SHARP_,name,value);

var G__12670 = cljs.core.next.call(null,seq__12656__$1);
var G__12671 = null;
var G__12672 = (0);
var G__12673 = (0);
seq__12656 = G__12670;
chunk__12657 = G__12671;
count__12658 = G__12672;
i__12659 = G__12673;
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
set_attr.cljs$lang$applyTo = (function (arglist__12674){
var values = cljs.core.seq(arglist__12674);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12675_SHARP_){
var seq__12680 = cljs.core.seq.call(null,values);
var chunk__12681 = null;
var count__12682 = (0);
var i__12683 = (0);
while(true){
if((i__12683 < count__12682)){
var name = cljs.core._nth.call(null,chunk__12681,i__12683);
domina.remove_attr_BANG_.call(null,p1__12675_SHARP_,name);

var G__12684 = seq__12680;
var G__12685 = chunk__12681;
var G__12686 = count__12682;
var G__12687 = (i__12683 + (1));
seq__12680 = G__12684;
chunk__12681 = G__12685;
count__12682 = G__12686;
i__12683 = G__12687;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12680);
if(temp__4126__auto__){
var seq__12680__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12680__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12680__$1);
var G__12688 = cljs.core.chunk_rest.call(null,seq__12680__$1);
var G__12689 = c__4409__auto__;
var G__12690 = cljs.core.count.call(null,c__4409__auto__);
var G__12691 = (0);
seq__12680 = G__12688;
chunk__12681 = G__12689;
count__12682 = G__12690;
i__12683 = G__12691;
continue;
} else {
var name = cljs.core.first.call(null,seq__12680__$1);
domina.remove_attr_BANG_.call(null,p1__12675_SHARP_,name);

var G__12692 = cljs.core.next.call(null,seq__12680__$1);
var G__12693 = null;
var G__12694 = (0);
var G__12695 = (0);
seq__12680 = G__12692;
chunk__12681 = G__12693;
count__12682 = G__12694;
i__12683 = G__12695;
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
remove_attr.cljs$lang$applyTo = (function (arglist__12696){
var values = cljs.core.seq(arglist__12696);
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
var h = cljs.core.mapcat.call(null,(function (p__12699){
var vec__12700 = p__12699;
var n = cljs.core.nth.call(null,vec__12700,(0),null);
var v = cljs.core.nth.call(null,vec__12700,(1),null);
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
set_prop.cljs$lang$applyTo = (function (arglist__12701){
var forms = cljs.core.seq(arglist__12701);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12702_SHARP_){
var seq__12707 = cljs.core.seq.call(null,values);
var chunk__12708 = null;
var count__12709 = (0);
var i__12710 = (0);
while(true){
if((i__12710 < count__12709)){
var val = cljs.core._nth.call(null,chunk__12708,i__12710);
domina.add_class_BANG_.call(null,p1__12702_SHARP_,val);

var G__12711 = seq__12707;
var G__12712 = chunk__12708;
var G__12713 = count__12709;
var G__12714 = (i__12710 + (1));
seq__12707 = G__12711;
chunk__12708 = G__12712;
count__12709 = G__12713;
i__12710 = G__12714;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12707);
if(temp__4126__auto__){
var seq__12707__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12707__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12707__$1);
var G__12715 = cljs.core.chunk_rest.call(null,seq__12707__$1);
var G__12716 = c__4409__auto__;
var G__12717 = cljs.core.count.call(null,c__4409__auto__);
var G__12718 = (0);
seq__12707 = G__12715;
chunk__12708 = G__12716;
count__12709 = G__12717;
i__12710 = G__12718;
continue;
} else {
var val = cljs.core.first.call(null,seq__12707__$1);
domina.add_class_BANG_.call(null,p1__12702_SHARP_,val);

var G__12719 = cljs.core.next.call(null,seq__12707__$1);
var G__12720 = null;
var G__12721 = (0);
var G__12722 = (0);
seq__12707 = G__12719;
chunk__12708 = G__12720;
count__12709 = G__12721;
i__12710 = G__12722;
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
add_class.cljs$lang$applyTo = (function (arglist__12723){
var values = cljs.core.seq(arglist__12723);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12724_SHARP_){
var seq__12729 = cljs.core.seq.call(null,values);
var chunk__12730 = null;
var count__12731 = (0);
var i__12732 = (0);
while(true){
if((i__12732 < count__12731)){
var val = cljs.core._nth.call(null,chunk__12730,i__12732);
domina.remove_class_BANG_.call(null,p1__12724_SHARP_,val);

var G__12733 = seq__12729;
var G__12734 = chunk__12730;
var G__12735 = count__12731;
var G__12736 = (i__12732 + (1));
seq__12729 = G__12733;
chunk__12730 = G__12734;
count__12731 = G__12735;
i__12732 = G__12736;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12729);
if(temp__4126__auto__){
var seq__12729__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12729__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12729__$1);
var G__12737 = cljs.core.chunk_rest.call(null,seq__12729__$1);
var G__12738 = c__4409__auto__;
var G__12739 = cljs.core.count.call(null,c__4409__auto__);
var G__12740 = (0);
seq__12729 = G__12737;
chunk__12730 = G__12738;
count__12731 = G__12739;
i__12732 = G__12740;
continue;
} else {
var val = cljs.core.first.call(null,seq__12729__$1);
domina.remove_class_BANG_.call(null,p1__12724_SHARP_,val);

var G__12741 = cljs.core.next.call(null,seq__12729__$1);
var G__12742 = null;
var G__12743 = (0);
var G__12744 = (0);
seq__12729 = G__12741;
chunk__12730 = G__12742;
count__12731 = G__12743;
i__12732 = G__12744;
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
remove_class.cljs$lang$applyTo = (function (arglist__12745){
var values = cljs.core.seq(arglist__12745);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12746_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12746_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12747){
var values = cljs.core.seq(arglist__12747);
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
var seq__12752 = cljs.core.seq.call(null,forms);
var chunk__12753 = null;
var count__12754 = (0);
var i__12755 = (0);
while(true){
if((i__12755 < count__12754)){
var fun = cljs.core._nth.call(null,chunk__12753,i__12755);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12756 = seq__12752;
var G__12757 = chunk__12753;
var G__12758 = count__12754;
var G__12759 = (i__12755 + (1));
seq__12752 = G__12756;
chunk__12753 = G__12757;
count__12754 = G__12758;
i__12755 = G__12759;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12752);
if(temp__4126__auto__){
var seq__12752__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12752__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12752__$1);
var G__12760 = cljs.core.chunk_rest.call(null,seq__12752__$1);
var G__12761 = c__4409__auto__;
var G__12762 = cljs.core.count.call(null,c__4409__auto__);
var G__12763 = (0);
seq__12752 = G__12760;
chunk__12753 = G__12761;
count__12754 = G__12762;
i__12755 = G__12763;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12752__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12764 = cljs.core.next.call(null,seq__12752__$1);
var G__12765 = null;
var G__12766 = (0);
var G__12767 = (0);
seq__12752 = G__12764;
chunk__12753 = G__12765;
count__12754 = G__12766;
i__12755 = G__12767;
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
do__GT_.cljs$lang$applyTo = (function (arglist__12768){
var forms = cljs.core.seq(arglist__12768);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12769_SHARP_,p2__12770_SHARP_){
return domina.append_BANG_.call(null,p1__12769_SHARP_,p2__12770_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12771){
var values = cljs.core.seq(arglist__12771);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12772_SHARP_,p2__12773_SHARP_){
return domina.prepend_BANG_.call(null,p1__12772_SHARP_,p2__12773_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12774){
var values = cljs.core.seq(arglist__12774);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12775_SHARP_,p2__12776_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12775_SHARP_,p2__12776_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12777){
var values = cljs.core.seq(arglist__12777);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12778_SHARP_,p2__12779_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12778_SHARP_,p2__12779_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12780){
var values = cljs.core.seq(arglist__12780);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12781_SHARP_,p2__12782_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12781_SHARP_,p2__12782_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12783){
var values = cljs.core.seq(arglist__12783);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12784_SHARP_){
return domina.detach_BANG_.call(null,p1__12784_SHARP_);
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
return (function (p1__12785_SHARP_){
var seq__12792 = cljs.core.seq.call(null,pairs);
var chunk__12793 = null;
var count__12794 = (0);
var i__12795 = (0);
while(true){
if((i__12795 < count__12794)){
var vec__12796 = cljs.core._nth.call(null,chunk__12793,i__12795);
var name = cljs.core.nth.call(null,vec__12796,(0),null);
var value = cljs.core.nth.call(null,vec__12796,(1),null);
domina.set_style_BANG_.call(null,p1__12785_SHARP_,name,value);

var G__12798 = seq__12792;
var G__12799 = chunk__12793;
var G__12800 = count__12794;
var G__12801 = (i__12795 + (1));
seq__12792 = G__12798;
chunk__12793 = G__12799;
count__12794 = G__12800;
i__12795 = G__12801;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12792);
if(temp__4126__auto__){
var seq__12792__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12792__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12792__$1);
var G__12802 = cljs.core.chunk_rest.call(null,seq__12792__$1);
var G__12803 = c__4409__auto__;
var G__12804 = cljs.core.count.call(null,c__4409__auto__);
var G__12805 = (0);
seq__12792 = G__12802;
chunk__12793 = G__12803;
count__12794 = G__12804;
i__12795 = G__12805;
continue;
} else {
var vec__12797 = cljs.core.first.call(null,seq__12792__$1);
var name = cljs.core.nth.call(null,vec__12797,(0),null);
var value = cljs.core.nth.call(null,vec__12797,(1),null);
domina.set_style_BANG_.call(null,p1__12785_SHARP_,name,value);

var G__12806 = cljs.core.next.call(null,seq__12792__$1);
var G__12807 = null;
var G__12808 = (0);
var G__12809 = (0);
seq__12792 = G__12806;
chunk__12793 = G__12807;
count__12794 = G__12808;
i__12795 = G__12809;
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
set_style.cljs$lang$applyTo = (function (arglist__12810){
var values = cljs.core.seq(arglist__12810);
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
remove_style.cljs$lang$applyTo = (function (arglist__12811){
var values = cljs.core.seq(arglist__12811);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__12812_SHARP_){
return domina.set_data_BANG_.call(null,p1__12812_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__12813){
var ttime = cljs.core.first(arglist__12813);
var funcs = cljs.core.rest(arglist__12813);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12815_SHARP_,p2__12814_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12814_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12840_12848 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12841_12849 = null;
var count__12842_12850 = (0);
var i__12843_12851 = (0);
while(true){
if((i__12843_12851 < count__12842_12850)){
var idx_12852 = cljs.core._nth.call(null,chunk__12841_12849,i__12843_12851);
var attr_12853 = pnod.attributes.item(idx_12852);
if(cljs.core.truth_(attr_12853.specified)){
attr_12853.value = rep_str.call(null,attr_12853.value);
} else {
}

var G__12854 = seq__12840_12848;
var G__12855 = chunk__12841_12849;
var G__12856 = count__12842_12850;
var G__12857 = (i__12843_12851 + (1));
seq__12840_12848 = G__12854;
chunk__12841_12849 = G__12855;
count__12842_12850 = G__12856;
i__12843_12851 = G__12857;
continue;
} else {
var temp__4126__auto___12858 = cljs.core.seq.call(null,seq__12840_12848);
if(temp__4126__auto___12858){
var seq__12840_12859__$1 = temp__4126__auto___12858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12840_12859__$1)){
var c__4409__auto___12860 = cljs.core.chunk_first.call(null,seq__12840_12859__$1);
var G__12861 = cljs.core.chunk_rest.call(null,seq__12840_12859__$1);
var G__12862 = c__4409__auto___12860;
var G__12863 = cljs.core.count.call(null,c__4409__auto___12860);
var G__12864 = (0);
seq__12840_12848 = G__12861;
chunk__12841_12849 = G__12862;
count__12842_12850 = G__12863;
i__12843_12851 = G__12864;
continue;
} else {
var idx_12865 = cljs.core.first.call(null,seq__12840_12859__$1);
var attr_12866 = pnod.attributes.item(idx_12865);
if(cljs.core.truth_(attr_12866.specified)){
attr_12866.value = rep_str.call(null,attr_12866.value);
} else {
}

var G__12867 = cljs.core.next.call(null,seq__12840_12859__$1);
var G__12868 = null;
var G__12869 = (0);
var G__12870 = (0);
seq__12840_12848 = G__12867;
chunk__12841_12849 = G__12868;
count__12842_12850 = G__12869;
i__12843_12851 = G__12870;
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
var seq__12844 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12845 = null;
var count__12846 = (0);
var i__12847 = (0);
while(true){
if((i__12847 < count__12846)){
var cnode = cljs.core._nth.call(null,chunk__12845,i__12847);
rep_node.call(null,cnode);

var G__12871 = seq__12844;
var G__12872 = chunk__12845;
var G__12873 = count__12846;
var G__12874 = (i__12847 + (1));
seq__12844 = G__12871;
chunk__12845 = G__12872;
count__12846 = G__12873;
i__12847 = G__12874;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12844);
if(temp__4126__auto__){
var seq__12844__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12844__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12844__$1);
var G__12875 = cljs.core.chunk_rest.call(null,seq__12844__$1);
var G__12876 = c__4409__auto__;
var G__12877 = cljs.core.count.call(null,c__4409__auto__);
var G__12878 = (0);
seq__12844 = G__12875;
chunk__12845 = G__12876;
count__12846 = G__12877;
i__12847 = G__12878;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12844__$1);
rep_node.call(null,cnode);

var G__12879 = cljs.core.next.call(null,seq__12844__$1);
var G__12880 = null;
var G__12881 = (0);
var G__12882 = (0);
seq__12844 = G__12879;
chunk__12845 = G__12880;
count__12846 = G__12881;
i__12847 = G__12882;
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
var seq__12887 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12888 = null;
var count__12889 = (0);
var i__12890 = (0);
while(true){
if((i__12890 < count__12889)){
var idx = cljs.core._nth.call(null,chunk__12888,i__12890);
var el_12891 = (form_node.elements[idx]);
var ky_12892 = cljs.core.keyword.call(null,el_12891.name);
var val_12893 = ky_12892.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12892)){
var val_12894__$1 = (cljs.core.truth_(val_12893)?val_12893:"");
enfocus.core.set_form_input.call(null,val_12894__$1).call(null,el_12891);
} else {
}

var G__12895 = seq__12887;
var G__12896 = chunk__12888;
var G__12897 = count__12889;
var G__12898 = (i__12890 + (1));
seq__12887 = G__12895;
chunk__12888 = G__12896;
count__12889 = G__12897;
i__12890 = G__12898;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12887);
if(temp__4126__auto__){
var seq__12887__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12887__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12887__$1);
var G__12899 = cljs.core.chunk_rest.call(null,seq__12887__$1);
var G__12900 = c__4409__auto__;
var G__12901 = cljs.core.count.call(null,c__4409__auto__);
var G__12902 = (0);
seq__12887 = G__12899;
chunk__12888 = G__12900;
count__12889 = G__12901;
i__12890 = G__12902;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12887__$1);
var el_12903 = (form_node.elements[idx]);
var ky_12904 = cljs.core.keyword.call(null,el_12903.name);
var val_12905 = ky_12904.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12904)){
var val_12906__$1 = (cljs.core.truth_(val_12905)?val_12905:"");
enfocus.core.set_form_input.call(null,val_12906__$1).call(null,el_12903);
} else {
}

var G__12907 = cljs.core.next.call(null,seq__12887__$1);
var G__12908 = null;
var G__12909 = (0);
var G__12910 = (0);
seq__12887 = G__12907;
chunk__12888 = G__12908;
count__12889 = G__12909;
i__12890 = G__12910;
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
var vec__12920 = node_spec;
var tag = cljs.core.nth.call(null,vec__12920,(0),null);
var vec__12921 = cljs.core.nthnext.call(null,vec__12920,(1));
var m = cljs.core.nth.call(null,vec__12921,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12921,(1));
var more = vec__12921;
var vec__12922 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12922,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12922,(1));
var id = cljs.core.some.call(null,((function (vec__12920,tag,vec__12921,m,ms,more,vec__12922,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12920,tag,vec__12921,m,ms,more,vec__12922,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12920,tag,vec__12921,m,ms,more,vec__12922,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12920,tag,vec__12921,m,ms,more,vec__12922,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12923_12929 = cljs.core.seq.call(null,attrs__$2);
var chunk__12924_12930 = null;
var count__12925_12931 = (0);
var i__12926_12932 = (0);
while(true){
if((i__12926_12932 < count__12925_12931)){
var vec__12927_12933 = cljs.core._nth.call(null,chunk__12924_12930,i__12926_12932);
var key_12934 = cljs.core.nth.call(null,vec__12927_12933,(0),null);
var val_12935 = cljs.core.nth.call(null,vec__12927_12933,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12934),val_12935);

var G__12936 = seq__12923_12929;
var G__12937 = chunk__12924_12930;
var G__12938 = count__12925_12931;
var G__12939 = (i__12926_12932 + (1));
seq__12923_12929 = G__12936;
chunk__12924_12930 = G__12937;
count__12925_12931 = G__12938;
i__12926_12932 = G__12939;
continue;
} else {
var temp__4126__auto___12940 = cljs.core.seq.call(null,seq__12923_12929);
if(temp__4126__auto___12940){
var seq__12923_12941__$1 = temp__4126__auto___12940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12923_12941__$1)){
var c__4409__auto___12942 = cljs.core.chunk_first.call(null,seq__12923_12941__$1);
var G__12943 = cljs.core.chunk_rest.call(null,seq__12923_12941__$1);
var G__12944 = c__4409__auto___12942;
var G__12945 = cljs.core.count.call(null,c__4409__auto___12942);
var G__12946 = (0);
seq__12923_12929 = G__12943;
chunk__12924_12930 = G__12944;
count__12925_12931 = G__12945;
i__12926_12932 = G__12946;
continue;
} else {
var vec__12928_12947 = cljs.core.first.call(null,seq__12923_12941__$1);
var key_12948 = cljs.core.nth.call(null,vec__12928_12947,(0),null);
var val_12949 = cljs.core.nth.call(null,vec__12928_12947,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12948),val_12949);

var G__12950 = cljs.core.next.call(null,seq__12923_12941__$1);
var G__12951 = null;
var G__12952 = (0);
var G__12953 = (0);
seq__12923_12929 = G__12950;
chunk__12924_12930 = G__12951;
count__12925_12931 = G__12952;
i__12926_12932 = G__12953;
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
return (function (p1__12955_SHARP_,p2__12954_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__12954_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__12955_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__12955_SHARP_,vals);
} else {
return p1__12955_SHARP_;
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
if(typeof enfocus.core.t12960 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12960 = (function (trans,read_form_input,meta12961){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta12961 = meta12961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12960.prototype.call = ((function (trans){
return (function() {
var G__12964 = null;
var G__12964__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12964__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12964 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12964__2.call(this,self__,nodes);
case 3:
return G__12964__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12964.cljs$core$IFn$_invoke$arity$2 = G__12964__2;
G__12964.cljs$core$IFn$_invoke$arity$3 = G__12964__3;
return G__12964;
})()
;})(trans))
;

enfocus.core.t12960.prototype.apply = ((function (trans){
return (function (self__,args12963){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12963)));
});})(trans))
;

enfocus.core.t12960.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12960.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12960.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12960.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12960.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12962){
var self__ = this;
var _12962__$1 = this;
return self__.meta12961;
});})(trans))
;

enfocus.core.t12960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12962,meta12961__$1){
var self__ = this;
var _12962__$1 = this;
return (new enfocus.core.t12960(self__.trans,self__.read_form_input,meta12961__$1));
});})(trans))
;

enfocus.core.t12960.cljs$lang$type = true;

enfocus.core.t12960.cljs$lang$ctorStr = "enfocus.core/t12960";

enfocus.core.t12960.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"enfocus.core/t12960");
});})(trans))
;

enfocus.core.__GT_t12960 = ((function (trans){
return (function __GT_t12960(trans__$1,read_form_input__$1,meta12961){
return (new enfocus.core.t12960(trans__$1,read_form_input__$1,meta12961));
});})(trans))
;

}

return (new enfocus.core.t12960(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/twashing/Projects/bkeeping/resources/public/js/out/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__12966_SHARP_,p2__12965_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__12965_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__12966_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__12965_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__12965_SHARP_)));
} else {
return p1__12966_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12967_SHARP_){
if((p1__12967_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__12967_SHARP_);
} else {
if((p1__12967_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12967_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__12967_SHARP_)){
return create_sel_str.call(null,p1__12967_SHARP_);
} else {
if(typeof p1__12967_SHARP_ === 'string'){
return p1__12967_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__12978 = node;
if(G__12978){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__12978.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12978.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12978);
}
} else {
return and__3610__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12979 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12979,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12979,(1),null);
var seq__12980 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__12981 = null;
var count__12982 = (0);
var i__12983 = (0);
while(true){
if((i__12983 < count__12982)){
var vec__12984 = cljs.core._nth.call(null,chunk__12981,i__12983);
var sel = cljs.core.nth.call(null,vec__12984,(0),null);
var t = cljs.core.nth.call(null,vec__12984,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12986 = seq__12980;
var G__12987 = chunk__12981;
var G__12988 = count__12982;
var G__12989 = (i__12983 + (1));
seq__12980 = G__12986;
chunk__12981 = G__12987;
count__12982 = G__12988;
i__12983 = G__12989;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12980);
if(temp__4126__auto__){
var seq__12980__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12980__$1)){
var c__4409__auto__ = cljs.core.chunk_first.call(null,seq__12980__$1);
var G__12990 = cljs.core.chunk_rest.call(null,seq__12980__$1);
var G__12991 = c__4409__auto__;
var G__12992 = cljs.core.count.call(null,c__4409__auto__);
var G__12993 = (0);
seq__12980 = G__12990;
chunk__12981 = G__12991;
count__12982 = G__12992;
i__12983 = G__12993;
continue;
} else {
var vec__12985 = cljs.core.first.call(null,seq__12980__$1);
var sel = cljs.core.nth.call(null,vec__12985,(0),null);
var t = cljs.core.nth.call(null,vec__12985,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12994 = cljs.core.next.call(null,seq__12980__$1);
var G__12995 = null;
var G__12996 = (0);
var G__12997 = (0);
seq__12980 = G__12994;
chunk__12981 = G__12995;
count__12982 = G__12996;
i__12983 = G__12997;
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
i_at.cljs$lang$applyTo = (function (arglist__12998){
var id_mask = cljs.core.first(arglist__12998);
arglist__12998 = cljs.core.next(arglist__12998);
var node = cljs.core.first(arglist__12998);
var trans = cljs.core.rest(arglist__12998);
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
at.cljs$lang$applyTo = (function (arglist__12999){
var node = cljs.core.first(arglist__12999);
var trans = cljs.core.rest(arglist__12999);
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
var sel_QMARK_ = (function (){var G__13004 = node;
if(G__13004){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__13004.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__13004.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__13004);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__13005 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__13005,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__13005,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__13005,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__13006){
var vec__13007 = p__13006;
var ky = cljs.core.nth.call(null,vec__13007,(0),null);
var sel = cljs.core.nth.call(null,vec__13007,(1),null);
var ext = cljs.core.nth.call(null,vec__13007,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__13005,node__$1,trans__$1,cnt,sel_QMARK_))
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
from.cljs$lang$applyTo = (function (arglist__13008){
var node = cljs.core.first(arglist__13008);
var trans = cljs.core.rest(arglist__13008);
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
var G__13009 = null;
var G__13009__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__13009__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__13009__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__13009 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13009__1.call(this,this$);
case 2:
return G__13009__2.call(this,this$,root);
case 3:
return G__13009__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13009.cljs$core$IFn$_invoke$arity$1 = G__13009__1;
G__13009.cljs$core$IFn$_invoke$arity$2 = G__13009__2;
G__13009.cljs$core$IFn$_invoke$arity$3 = G__13009__3;
return G__13009;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__13010 = null;
var G__13010__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13010__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13010__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__13010 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13010__1.call(this,this$);
case 2:
return G__13010__2.call(this,this$,root);
case 3:
return G__13010__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13010.cljs$core$IFn$_invoke$arity$1 = G__13010__1;
G__13010.cljs$core$IFn$_invoke$arity$2 = G__13010__2;
G__13010.cljs$core$IFn$_invoke$arity$3 = G__13010__3;
return G__13010;
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
var G__13011 = null;
var G__13011__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__13011__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__13011__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__13011 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__13011__1.call(this,this$);
case 2:
return G__13011__2.call(this,this$,root);
case 3:
return G__13011__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13011.cljs$core$IFn$_invoke$arity$1 = G__13011__1;
G__13011.cljs$core$IFn$_invoke$arity$2 = G__13011__2;
G__13011.cljs$core$IFn$_invoke$arity$3 = G__13011__3;
return G__13011;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__13012 = null;
var G__13012__2 = (function (trans,nodes){
return nodes;
});
var G__13012__3 = (function (trans,nodes,chain){
return nodes;
});
G__13012 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13012__2.call(this,trans,nodes);
case 3:
return G__13012__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13012.cljs$core$IFn$_invoke$arity$2 = G__13012__2;
G__13012.cljs$core$IFn$_invoke$arity$3 = G__13012__3;
return G__13012;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__13013 = null;
var G__13013__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__13013__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__13013 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__13013__2.call(this,trans,nodes);
case 3:
return G__13013__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13013.cljs$core$IFn$_invoke$arity$2 = G__13013__2;
G__13013.cljs$core$IFn$_invoke$arity$3 = G__13013__3;
return G__13013;
})()
);

//# sourceMappingURL=core.js.map